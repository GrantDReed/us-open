import { createHash } from "crypto";
import { redis } from "./redis.js";

const hashPin = (pin) =>
  createHash("sha256").update(String(pin)).digest("hex");

const TEAM_IDS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Editing windows (must match public/index.html). mode: "build" = initial
// pick (overwrites full roster); "swap" = one-swap transfer (writes transfer:* key).
// US Open 2026 — Shinnecock Hills, June 18–21. Tee times below are placeholders
// until the official R1/R3 schedule is published; tighten before launch.
const EDIT_WINDOWS = [
  { open: new Date("2026-01-01T00:00:00-05:00"), close: new Date("2026-06-18T06:45:00-04:00"), mode: "build" },
  // Post-R2 transfer window — close = first R3 tee time.
  { open: new Date("2026-06-19T18:00:00-04:00"), close: new Date("2026-06-20T07:45:00-04:00"), mode: "swap" },
];
function activeWindow() {
  const now = new Date();
  return EDIT_WINDOWS.find(w => now >= w.open && now < w.close) || null;
}
// Transfers become publicly visible once any swap window has closed (= first R3 tee time passed).
function transfersRevealed() {
  const now = new Date();
  return EDIT_WINDOWS.some(w => w.mode === "swap" && now >= w.close);
}

// Rosters are public only once play begins (the first tee time).
const TOURNAMENT_START = new Date("2026-06-18T06:45:00-04:00");
function tournamentHasStarted() { return new Date() >= TOURNAMENT_START; }

// Duplicated here so the serverless function can validate independently of the frontend.
// US Open field not yet announced — populate both here and in public/index.html
// once the tiers are set. Until then validation rejects all rosters (no in-field players).
const PRICE_TIERS = {
  4: [],
  3: [],
  2: [],
  1: [],
};

function normalize(n) {
  // Map atomic non-ASCII letters that NFD won't decompose (ø, æ, ł, đ, ß, ð).
  const mapped = n
    .replace(/ø/g, "o").replace(/Ø/g, "O")
    .replace(/æ/g, "ae").replace(/Æ/g, "AE")
    .replace(/ł/g, "l").replace(/Ł/g, "L")
    .replace(/đ/g, "d").replace(/Đ/g, "D")
    .replace(/ð/g, "d").replace(/Ð/g, "D")
    .replace(/ß/g, "ss");
  return mapped.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z ]/g, "").trim();
}

function getPlayerCost(name) {
  const norm = normalize(name);
  for (const [tier, names] of Object.entries(PRICE_TIERS)) {
    for (const n of names) {
      if (normalize(n) === norm) return parseInt(tier);
    }
  }
  return null;
}

function validateRoster(players) {
  const errors = [];
  if (!Array.isArray(players) || players.length !== 4) {
    errors.push("Must pick exactly 4 players");
    return errors;
  }

  const names = players.map((p) => normalize(p.name));
  if (new Set(names).size !== 4) errors.push("Duplicate players");

  for (const p of players) {
    const cost = getPlayerCost(p.name);
    if (cost === null) errors.push(`${p.name} is not in the field`);
    else if (cost !== p.cost) errors.push(`${p.name} cost mismatch`);
  }

  const budget = players.reduce((s, p) => s + p.cost, 0);
  if (budget > 10) errors.push(`Budget £${budget}m exceeds £10m`);

  const tier4 = players.filter((p) => p.cost === 4).length;
  if (tier4 > 1) errors.push(`Max 1 × £4m player (have ${tier4})`);

  const tier3 = players.filter((p) => p.cost === 3).length;
  if (tier3 > 2) errors.push(`Max 2 × £3m players (have ${tier3})`);

  return errors;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();

  // GET — return all rosters + transfers (each redacted appropriately)
  if (req.method === "GET") {
    const revealed = tournamentHasStarted();
    const revealTransfers = transfersRevealed();
    const teams = {};
    const transfers = {};
    const swapsPending = {}; // boolean map: which teams have a pending swap (no contents)
    for (const id of TEAM_IDS) {
      const raw = await redis.get(`roster:${id}`);
      const roster = raw ? JSON.parse(raw) : [];
      teams[id] = revealed ? roster : [];
      const tRaw = await redis.get(`transfer:${id}`);
      if (tRaw) {
        if (revealTransfers) {
          transfers[id] = JSON.parse(tRaw);
        } else {
          swapsPending[id] = true;
        }
      }
    }
    return res.status(200).json({ teams, transfers, swapsPending, revealed, transfersRevealed: revealTransfers });
  }

  // POST — save a roster (build mode) or record a swap (swap mode)
  if (req.method !== "POST") return res.status(405).json({ error: "GET or POST" });

  const window = activeWindow();
  if (!window) {
    return res.status(403).json({ error: "Editing is currently locked." });
  }

  const { teamId, pin, players } = req.body || {};
  if (teamId == null || !pin || !players) {
    return res.status(400).json({ error: "teamId, pin, and players are required" });
  }
  if (!TEAM_IDS.includes(teamId)) {
    return res.status(400).json({ error: "Invalid teamId" });
  }

  // Verify PIN
  const storedHash = await redis.get(`pin:${teamId}`);
  if (!storedHash) {
    return res.status(401).json({ error: "PIN not set. Set your PIN first." });
  }
  if (storedHash !== hashPin(pin)) {
    return res.status(401).json({ error: "Invalid PIN" });
  }

  // Standard validation runs in both modes (budget, tier caps, in-field, no dupes)
  const errors = validateRoster(players);
  if (errors.length > 0) {
    return res.status(400).json({ error: "Invalid roster", details: errors });
  }

  if (window.mode === "swap") {
    // Need an existing roster to diff against
    const storedRaw = await redis.get(`roster:${teamId}`);
    if (!storedRaw) {
      return res.status(400).json({ error: "You don't have a roster on file — initial picks are closed." });
    }
    const stored = JSON.parse(storedRaw);
    const storedByNorm = new Map(stored.map(p => [normalize(p.name), p]));
    const submittedByNorm = new Map(players.map(p => [normalize(p.name), p]));

    const removed = stored.filter(p => !submittedByNorm.has(normalize(p.name)));
    const added = players.filter(p => !storedByNorm.has(normalize(p.name)));

    if (removed.length === 0 && added.length === 0) {
      // Revert path — clear any existing swap
      await redis.del(`transfer:${teamId}`);
      return res.status(200).json({ status: "reverted", transfer: null });
    }
    if (removed.length !== 1 || added.length !== 1) {
      return res.status(400).json({ error: "Transfer window allows exactly one swap (change one player). Re-submit your original 4 to clear an existing swap." });
    }
    const out = removed[0], inP = added[0];
    if (inP.cost > out.cost) {
      return res.status(400).json({ error: `Swap-in player must be same or lower value (£${inP.cost}m > £${out.cost}m).` });
    }

    const transfer = { out: out.name, outCost: out.cost, in: inP.name, inCost: inP.cost, ts: new Date().toISOString() };
    await redis.set(`transfer:${teamId}`, JSON.stringify(transfer));
    return res.status(200).json({ status: "swapped", transfer });
  }

  // window.mode === "build"
  // Reject identical 4-player rosters already picked by another team
  const newKey = players.map((p) => normalize(p.name)).sort().join("|");
  for (const id of TEAM_IDS) {
    if (id === teamId) continue;
    const raw = await redis.get(`roster:${id}`);
    if (!raw) continue;
    const other = JSON.parse(raw);
    if (!Array.isArray(other) || other.length !== 4) continue;
    const otherKey = other.map((p) => normalize(p.name)).sort().join("|");
    if (otherKey === newKey) {
      return res.status(409).json({ error: "Another team has already picked this exact 4-player roster. Please change at least one player." });
    }
  }

  // Save
  await redis.set(`roster:${teamId}`, JSON.stringify(players));
  return res.status(200).json({ status: "saved", players });
}

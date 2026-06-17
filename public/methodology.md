# Fantasy Golf Tier Methodology — Reference for Future Majors

*Developed during 2026 PGA Championship tier audit. Use as starting framework for US Open, Open Championship, and future majors.*

---

## Core Framework

### 1. Starting Point: Consensus Odds (not single-book)

Use **consensus across DraftKings, FanDuel, BetMGM, and Pinnacle** rather than any single book. Each book has biases — promotional pricing, slow-to-adjust on hot players, name-tax on name-brand players. The consensus is the best signal.

**Odds informativeness varies by tier:**
- **Elite tier (£4M):** Odds are tight (+345, +800, +1300) and meaningful — odds drive placement
- **Strong contender tier (£3M):** Odds still carry signal — odds-informed with form overrides
- **Workhorse tier (£2M):** Odds start compressing — form weighs more heavily
- **Sleeper tier (£1M):** Odds bunch at +30000+ — form-driven, odds are mostly noise

**When books diverge significantly (>30% spread on implied probability)**, that itself is informational:
- Sharp agreement → strong tier confidence
- Sharp disagreement → genuine market uncertainty; lean on form analysis

### 2. Form Evaluation Framework (3-tier weighting)

Used to identify when form has diverged from where odds place a player:

- **Heaviest weight:** Last 4-6 starts, anchored by the most recent major
- **Medium weight:** Last 12 months as form baseline
- **Light weight:** Prior year as sanity check on true skill level
- **Cut probability proxy:** Cut rate over last 10-12 starts (single best predictor)

### 3. Course-Experience Adjustment for Major Performance

**Recent major results carry less weight for players with limited course experience.** Each major venue rewards experience uniquely:

- **Masters (Augusta National):** Discount results for players with <5 career starts. Course knowledge is paramount.
- **US Open (varies by year):** Discount results when venue rotates to new courses
- **Open Championship (links rotation):** Discount for players with limited links experience
- **PGA Championship (course rotation):** Course-specific experience generally matters less since it rotates

A debut MC at Augusta is far less predictive than a 5th-time MC. A first-time appearance with a made cut should be *credited*, not penalized.

### 4. Override Rules

Apply form/judgment over odds only when there's a clear reason:

**Injury override (demote):**
- Clear injury with recent WD → demote one tier
- Injury but still playing → keep at odds tier, flag as risk
- Recovering but back to form → no override

**Injury verification protocol — MUST do before applying override:**

Before applying any injury-based override, verify the injury claim against actual current records. Do not rely on training data, prior conversations, or vague recollection of "back issues" or "wrist trouble." Specifically:

1. **Identify the actual event of the WD or injury report.** Confirm the tournament, date, and stated reason from a primary source (PGA Tour wire, ESPN/CBS Sports recap, player statement).
2. **Distinguish injury type from illness.** Illness WDs (flu, stomach bug) are one-week events and do NOT trigger the override. Structural/musculoskeletal injuries (wrist, back, ankle, shoulder) DO trigger the override.
3. **Check freshness — apply a 30-day window.** If the WD or injury report is more than 30 days old AND the player has completed events since without recurrence, the override no longer applies. The methodology is designed for active, current concerns, not historical issues.
4. **Distinguish current injury from historical injury.** A player's career-long injury history (e.g., chronic back issues from a decade ago) is NOT grounds for demotion. Only an active, recent, structural injury qualifies.
5. **Verify the player is still playing.** If the player has played 2+ events post-WD without further incident, treat the original WD as resolved unless new injury reports surface.

**Worked example — Cantlay (2026 PGA Championship audit):**
The original audit demoted Cantlay from £3M to £2M based on a "Players Championship WD with back issues." Verification proved this was wrong:
- Cantlay did NOT WD from The Players in 2026
- He DID WD from the Cadillac Championship (April 28, 2026) — citing illness, not injury
- His career-long back issues (stress fracture, 2012-2014) are historical, not current
- Post-Cadillac, he played Truist without issue and posted 4 consecutive top-15s
- Correct placement: £3M (odds-based, no override applies)

The lesson: an unverified injury claim becomes a phantom override that quietly miscategorizes players. Always check primary sources.

**Hot form override (promote) — apply with field-strength check:**

| Win Type | Override Strength |
|---|---|
| Major win | Strong promote |
| Signature event win | Strong promote |
| Regular PGA Tour event, full-strength field | Moderate promote |
| Opposite-field / weak-field event | Mild signal — weigh against underlying form |
| Secondary tour win (DPWT, LIV, Korn Ferry) | Use with caution, especially for majors |

**Critical lesson learned:** A "just-won" winner is not automatically a tier-up. Check (a) field quality, (b) underlying form trajectory, (c) age/health/major-readiness before promoting.

**Default:** Defer to odds when there's no clear injury or form-divergence reason to override.

### 5. Course Fit (Tiebreaker Only)

Course fit is used to tiebreak between similarly-ranked players, **never as a primary driver**. Profile of the course should inform which players you favor at borderline placements.

Key course-fit dimensions:
- Length vs. precision (does the course reward distance or accuracy?)
- Rough penalty (high rough favors precision; low rough favors bombers)
- Green complexity (Donald Ross-style crowned greens favor precision irons + creativity)
- Approach yardages (long-iron specialists vs. wedge specialists)
- Greens speed/firmness (fast greens favor putters with control; firm greens favor spin players)

Past course-specific results from *recent* tournaments at the same venue can be used as light supplementary data, but PGA-specific course history at venues that haven't hosted recently is generally non-predictive (use the closest recent comp instead).

### 6. Intra-Tier Ranking

Each player is assigned a rank *within* their tier (1 = strongest), not just a tier label. This matters because participants making swaps need to know who the best available option is at each price point, and because the difference between the #1 and #15 player in a tier is often large even though they share a price.

The ranking signal degrades as you move down the tiers, so the ranking *method* changes by tier:

**£4M tier — rank by consensus odds.** Odds are tight and meaningful here. Rank purely by consensus implied probability (shortest odds = rank 1). Form overrides have already been applied at the tier-assignment stage, so within the tier, the market ordering is the best ordering.

**£3M tier — rank by consensus odds, with form as tiebreaker.** Odds still carry signal. Rank by consensus implied probability first; where two players are within ~10% implied-probability of each other, use the 3-tier form weighting (recent form heaviest) to break the tie. Course fit is the final tiebreaker.

**£2M tier — blended rank (odds + form).** Odds begin compressing here, so a pure-odds ranking starts to mislead. Rank by a blend: roughly 60% consensus odds, 40% recent form (last 4-6 starts + cut rate). Course fit breaks remaining ties. Flag any player with a >30% book spread, as their "true" rank is uncertain.

**£1M tier — tiered fallback (signal often absent).** Odds bunch so tightly here (most players +30000 and longer) that they stop discriminating. Use the following fallback ladder, in order:
1. **If a player has a meaningful odds edge** (consensus clearly shorter than the rest of the tier — e.g. a player at +21000 when the tier median is +50000), rank them at the top of the tier on that basis.
2. **If odds are indistinguishable** (the large bulk of the tier), default to **OWGR** (Official World Golf Ranking) as the ordering signal. OWGR is the best available proxy for baseline skill when betting markets have given up discriminating.
3. **If a player has no OWGR** (see below), use the fallback hierarchy in the "Players Without OWGR" subsection.

**Practical note on where £1M signal dies:** In a typical 156-player major field, the £1M tier holds ~90 players. The top ~10-15 of that tier usually still have *some* odds or OWGR signal worth ranking on. Below that, the ranking is largely cosmetic — these are dart-throw cut-risk players, and the honest move is to rank them by OWGR and acknowledge the ordering is low-confidence. Do not over-invest analytical effort discriminating between, say, the 60th and 75th-ranked £1M player; the expected scoring difference is negligible and both are likely missed-cut risks.

**Players Without OWGR (qualifiers, club pros, amateurs, reinstated/limited-status players):**

Some fields — especially the US Open and Open Championship, which run open qualifiers — include players with no OWGR or a stale/unrepresentative ranking. PGA Championship fields include 20 club professionals who often have no meaningful OWGR. For these players, use this fallback hierarchy in order:

1. **DataGolf rank or DataGolf skill estimate**, if available. DataGolf models players outside the OWGR top tiers and often has a rating where OWGR is blank.
2. **Recent results on the player's home tour** (Korn Ferry, DPWT, PGA Tour Americas, Challenge Tour, etc.), converted to a rough strength estimate using the field-strength logic from the override rules. A Korn Ferry winner ranks above a journeyman club pro.
3. **Qualifier performance** — for sectional/final qualifiers, the qualifying score relative to the field is a weak but real signal (medalist > last man in).
4. **Status as a baseline floor** — club professionals and amateurs with no competitive data above mini-tour level default to the *bottom* of the £1M tier. They are almost always missed-cut locks and should be ranked accordingly.

The guiding principle: rank on the best available skill signal, stepping down the ladder (consensus odds → OWGR → DataGolf → home-tour results → qualifier performance → status floor) only when the higher signal is absent. Always note when a player's rank is based on a low-confidence fallback, so participants know the ordering is soft.

**In-tournament re-ranking (live swaps):** Once a tournament is underway, the pre-tournament tier ranking is superseded by live performance for swap decisions. Use round-by-round strokes-gained data, not just leaderboard position: decompose each candidate's rounds into SG categories, distinguish sustainable ball-striking gains from unsustainable hot putting (putting >2 strokes in a round usually regresses), and weight ball-striking (SG T2G) more heavily than putting as a predictor of the next round. A player's trajectory across rounds (improving vs. fading ball-striking) is more informative than their cumulative total.

---

## Game-Format Strategic Considerations

### Tier Architecture

Calibrate tier sizes to field size:

**156-player field (typical PGA, US Open):**
- £4M: 6 players (elite/win-equity)
- £3M: 15 players (major contenders)
- £2M: 45 players (workhorse + transfer target)
- £1M: 90 players (sleepers, dart throws, structural £1Ms)

**Adjust proportionally for smaller fields** (e.g., Masters at ~95 players, the Open at 156 with stronger international representation).

### Cut Probability > Win Equity

Missed cuts assigned worst-round-of-day for the next two rounds — catastrophic for team scoring. **Avoiding blowups matters more than chasing wins** in this format:
- Don't pick high-variance players just because they have win equity
- Prioritize cut-makers across all tiers
- Single-tournament variance is higher in golf than most sports — diversify across player types

---

## Process Discipline (Lessons Learned)

### Verify Field First
Before building tiers, **cross-check field list against official source** (PGA Championship website, Open Championship qualifying list, etc.). Alternates can change, withdrawals happen.

### One Tier Per Player, No Contradictions
A player appears in **exactly one tier**. Trap-pick callouts warn about risk *within* that tier — they should never imply the player belongs in a different tier. If the analysis says they don't belong, demote them. Don't double-list.

### Verify Underlying Claims
Don't rely on a single source for player records. Cross-check:
- Win counts (especially recent wins, major counts)
- Streaks (top-10s, cuts made, etc.)
- Injury status (verify current, not historical)
- Recent results that could shift placement

### Apply Methodology Consistently Across Tiers
The top of board gets careful odds-based analysis; the lower tiers can drift into form-driven shortcuts. Discipline yourself to apply the same framework throughout, even where odds are compressed.

### Don't Anchor on Prior Reports
A prior deep research report's recommendations can carry biases. Re-derive tier placements from first principles when in doubt.

---

## Specific Lessons from 2026 PGA Championship Audit

1. **Augusta-experience adjustment matters.** Debut Masters MCs (Bridgeman: T41, Min Woo Lee: limited experience) shouldn't sink a player's tier if their year-round form is strong.

2. **Just-won winners need field-quality check.** Reitan (Truist Signature win) earned the £2M promotion. Snedeker (Myrtle Beach opposite-field win) was a borderline call — the win didn't prove much against major-quality competition, and underlying form (40% cut rate, 8 years between wins, age 45) didn't support £2M. We left him at £2M for practical reasons (low pick rate from that tier), but the methodology says he was probably £1M.

3. **DraftKings can be an outlier.** DK was consistently longer on Gotterup (+7400 vs consensus +6000) and shorter on name-brand players (Si Woo Kim +4700 vs sharper +8000). Always cross-reference.

4. **"Trap pick" callouts should be informational, not contradictory.** Initial report listed Cantlay at £3M AND as the biggest £3M trap pick. Resolved by either committing to the tier (£2M, with caveats) or demoting fully.

5. **Course fit is a tiebreaker, not a primary signal.** Aronimink (Donald Ross precision course) favored Straka over Gotterup on profile, but Gotterup's form kept him at the same tier. Course fit doesn't override form, but it matters when choosing between equally-priced players.

6. **Player count discipline.** Verify counts match field exactly. 156 players = 6 + 15 + 45 + 90. Mistakes here can cascade (e.g., including Tony Finau when he's an alternate).

7. **Injury claims must be verified against primary sources.** The audit initially demoted Patrick Cantlay from £3M to £2M based on a "Players Championship WD with back issues" — which never happened. Cantlay's actual 2026 WD was at the Cadillac Championship (illness, not back). His career-long historical back issues from 2012-2014 are not relevant to current placement. Always verify (a) which event, (b) what reason, (c) how recent before applying the injury override. See Injury Verification Protocol in Section 4.

---

## Quick Reference Checklist for Next Major

- [ ] Pull official field list and verify count
- [ ] Cross-reference field against Golf Channel / PGA Tour rankings
- [ ] Pull consensus odds (DK + FanDuel + BetMGM + Pinnacle if available)
- [ ] Flag players with >30% odds spread for closer scrutiny
- [ ] Apply 3-tier form weighting with course-experience adjustment
- [ ] Apply injury overrides (clear injury + recent WD = demote) — **verify each injury claim against a primary source before applying; check 30-day freshness; distinguish illness from structural injury; do not apply based on historical injuries**
- [ ] Apply hot-form overrides with field-strength check
- [ ] Verify no player double-listed
- [ ] Verify tier counts (typically 6/15/45/90 for 156-player field)
- [ ] Build trap-pick list as risk warnings WITHIN tier, not contradictions
- [ ] Add course-fit notes as tiebreakers
- [ ] Assign intra-tier ranks (1 = strongest within tier): odds-based for £4M/£3M, blended for £2M, OWGR/fallback for £1M
- [ ] For £1M and any no-OWGR players (qualifiers, club pros, amateurs), apply the fallback ladder (odds edge → OWGR → DataGolf → home-tour results → qualifier performance → status floor) and flag low-confidence rankings
- [ ] Cross-check Scheffler/major facts before publishing (he wins a lot)

---

## Next Up: 2026 US Open

The 2026 US Open will be at **Shinnecock Hills** (June 18-21, 2026). Things to research when we start the audit:

- Shinnecock-specific player history (last hosted 2018, won by Brooks Koepka)
- Wind exposure profile — favors steady ball-strikers
- Fescue rough penalty — high accuracy requirement
- Recent form anchored by 2026 PGA Championship (heaviest weight)
- Apply Shinnecock-experience adjustment (limited experience for many younger players)
- **Expect a large block of qualifiers with no/stale OWGR.** The US Open fills roughly half its field through local and final qualifying, so many players will have no usable OWGR or odds. Apply the "Players Without OWGR" fallback ladder (DataGolf → home-tour results → qualifier performance → status floor) and expect the bottom of the £1M tier to be low-confidence by design. Final-qualifier medalists are worth a second look — occasionally a Korn Ferry or DPWT player in form sneaks through and deserves a rank above the journeyman pack.

Carry forward the consensus-odds approach from the start.

---
title: Quarterly Plan
description: Where we are this quarter, what's in flight, and what's broken. Updated each quarter.
---

This page is your workspace. Update it at the start of each quarter, then again at the mid-quarter check-in.

## Current quarter

**Q2 2026.**

### Targets (top-line)

| Audience | Q2 MQLs | Q2 Demos |
|---|---|---|
| SFR | 70 | 20 |
| GS | 70 | 18 |
| **Total** | **140** | **38** |

Pull current pacing from the **Q2 MQLs sheet → Q2 Summary tab** before quoting.

### In flight

- **GS Combined Campaign** — 7,171 contacts built, launched 2026-04-21
- **GS Campaign v2** — 4,984 emails / 3,109 GS companies on preferred software. **Paused** through ~2026-05-27 due to 30-day cooldown overlap with prior LOW-RISE send.
- **SFR enrichment rebuild** — ~22,500 contacts across ~7,600 companies with subject lines and body lines pre-computed
- **Title experiment** — Phase 1 cold email run complete. ~0.5% positive reply rate. Evaluating next phase.
- **API partner outbound** — active Q2 sprint. TenantCloud case study is the spear.
- **Mailer plan** — 7.5K letters for the quarter, split SFR/GS roughly evenly.
- **UtilityWallet mailbox build-out** — ~2 new domains, ~20 new mailboxes warming. Gates the full title campaign launch.

### Recently launched / shipped

- 100K doors activated as a team milestone hit
- MQL engine: HubSpot notes now Interested-only (shipped 2026-05-04). Auto/OOO/Wrong_Person notes dropped.
- MQL engine: incremental Smartlead sync (`SMARTLEAD_INCREMENTAL_SYNC=1`). Full sync ~67s vs. 10+ min old.
- MQL engine: active-deal branch removed from `lead_processor.py`. Interested replies now hit standard BDR round-robin.

## What's broken / known issues

- **MQL engine silent 401s.** Auth failures fail silently in some paths. Memory file: `mql_engine_silent_auth_failures.md`.
- **Demo Prep Bot sheet drift.** Fix exists locally, never shipped. Memory file: `demo_prep_sheet_drift_root_cause.md`.
- **MQL v1/v2 deploy drift.** Source vs. deployed mismatch risk. Always verify deployed code, not local. Memory file: `mql_v1_v2_deploy_gap.md`.
- **Smartlead paused campaigns gotcha.** Memory file: `smartlead_paused_campaigns.md`.
- **Title routing not wired.** Title MQLs land on sheet but don't fire Slack or BDR routing. Intentional for now.

## Where Mary should focus

Open. To be filled in once Mary has read the operating system and playbook sections.

Reasonable starting questions:

1. **Are we under-spending on the channels that work?** Email and mail produce activated doors at low cost. CAC headroom is ~7x. The case for spending more on either is on the table.
2. **What's the second case study at TenantCloud's scale?** The TenantCloud reference is doing a lot of heavy lifting in every API partner pitch. A second one lifts close rates across the bullseye list.
3. **Where's the content / SEO engine?** Organic produces a meaningful share of deals. Nobody owns it.
4. **What's the right move on the title experiment?** 0.5% positive reply rate either becomes 1%+ with better targeting or we shut it down.

## How to update this page

End of each month: refresh the **Targets** and **In flight** sections.
End of each quarter: write a quarterly review (see [Reviews](/mary-playbook/operating/reviews/)) and then update this page for the next quarter.

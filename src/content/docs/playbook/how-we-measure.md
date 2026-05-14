---
title: How We Measure
description: What MQL means, what counts, the five sources, and the source-of-truth hierarchy.
---

## What counts as an MQL

An MQL fires when:

- A Smartlead reply is classified "Interested" by our internal AI classifier
- A self-serve sign-up completes via PLG
- A Meta ad lead converts
- A lookup tool lead converts
- A direct-mail slug visit confirms (company-level only)

**Critical detail:** "Interested" is determined by our internal AI classifier reading the reply text. **Not Smartlead's `lead_category` field**, which is manual and half-empty. **Not a human read.** The classifier is the source of truth.

## The five MQL sources

| Source | How it enters |
|---|---|
| `email` | Smartlead Interested reply |
| `sign_up` | PLG self-serve completion |
| `meta_paid_ad` | PLG webhook with `utm_source=facebook` |
| `direct_mail` | GA4 slug visit (company-level only) |
| `lookup_tool` | PLG webhook from the utility lookup tool |

## The two real audiences (for reporting)

**SFR** and **GS** are the two audiences we measure performance against. Title and D2C are early experiments and show up in tracking but don't have meaningful conversion baselines yet.

Audience is tagged automatically:

1. **HubSpot `company_type`** (if known): Property Manager / Mixed → SFR. Garden Style / Multi Family → GS.
2. **Smartlead campaign name fallback:** keywords `sfr` → SFR. `gs / low-rise / garden / multifamily` → GS. `title / escrow` → Title.
3. **No match** → manual review.

## Q2 targets

| Audience | Apr | May | Jun | Q2 MQLs | Q2 Demos |
|---|---|---|---|---|---|
| SFR | 25 | 20 | 25 | 70 | 20 |
| GS | 30 | 20 | 20 | 70 | 18 |
| **Total** | **55** | **40** | **45** | **140** | **38** |

## Conversion baselines (Q1)

- **Email MQL → Deal:** varies by campaign. LOW-RISE 40%, SFR 51%, LOW-RISE ONSITE 20%. Strong overall.
- **Demo (any source) → Closed Won:** historically ~70%, currently ~55%. Gradual softening tracks PM software platforms starting to build their own utility features.
- **MQL → Demo Set:** ~28% for SFR/MF audience, ~25% for GS. Used in target-setting.

## The source-of-truth hierarchy

There are three places MQL data lives. They answer different questions.

| Question | Source of truth |
|---|---|
| How many MQLs has each BDR been assigned? | Railway DB (the MQL engine) — `/bdr-assignments` endpoint |
| How many deals did each BDR close? | Q2 MQLs Google Sheet, column J "Deal Created = Y" |
| Did they action the lead? | Q2 MQLs sheet, column I "Actioned" (in practice dead — BDRs never adopted it) |
| Deal stage detail and revenue? | HubSpot |

**Mixing sources produces wrong numbers. Don't.**

## The Q2 Summary tab

Live dashboard inside the Q2 MQLs sheet (tab "Q2 Summary"). Sections:

1. **Scoreboard** — total MQLs, deals created, MQL-to-deal %, demos set, MQL-to-demo %
2. **Pace vs. target** — actual / target for MQLs and demos
3. **By channel** — Email Reply, Self Sign-Up, Facebook Ad, Direct Mail. Each with MQLs, deals, conv%.
4. **By audience** — SFR, GS, Title. SFR/GS show target vs. pace. Title shows MQL count only.
5. **By BDR** — both pools, with conversion stats per rep.
6. **By week** — 13-week view from Apr 1 to Jun 30.

All formulas pull live from the Q2 MQLs tab. Mark a row as `Deal Created = Yes` and the summary updates instantly.

## What's not measured well

- **Title experiment.** Title MQLs land on the sheet for visibility but don't fire Slack or BDR routing. No demo target yet. Phase 1 cold email produced a ~0.5% positive reply rate, which is the rough planning number.
- **D2C / Google ads.** Live as of Q2 but too early for meaningful conversion data.
- **Conference-sourced demos.** Tracked manually. Not yet a clean source in the MQL engine.
- **Inbound from organic / SEO.** Lumped into "Organic" in HubSpot. Many of those have empty source fields. Roughly 15.6% of Q1 deals attributed to organic but the source data is the messiest.
- **API partner pipeline.** Tracked manually in HubSpot deals + a spreadsheet. Not part of the MQL engine reporting.

## Where there's more room

- **Tighter inbound attribution.** Organic produces a meaningful share of deals with the messiest source data. Better UTM tracking and a cleaner default for organic sign-ups would help.
- **MQL-to-demo conversion breakdown.** We track demo set, but the in-between (MQL → BDR contact made → demo booked → demo held) is thin. Improving that funnel needs better stage instrumentation.
- **Channel ROI as cost-per-activated-door, not cost-per-MQL.** Today CPL is tracked per channel, but activated doors (revenue-bearing units) is the real economic measure. We have the data, just don't use it consistently.

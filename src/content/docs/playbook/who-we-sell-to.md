---
title: Who We Sell To
description: Five audiences in different stages of maturity. SFR is the core. GS is the second pillar. Title, D2C, and API partners are experiments.
---

We currently market to five audiences. Two are production, three are experiments at different stages. Each has its own software stack, sweet spot, channels, and conversion baseline.

## SFR (Single-Family Rental PMs)

The core audience. Mom-and-pop and mid-market third-party PMs managing single-family homes, duplexes, and small multifamily.

- **Software they use:** AppFolio, Propertyware, RentManager, Buildium, RentVine
- **Sweet spot:** 10–850 doors, average ~400
- **Geography:** coast to coast, Sunbelt heaviest
- **Where they're found:** NARPM (trade association), BuiltWith filtered by SFR PM software, Outscraper keyword scrape on Google Maps
- **Conversion baseline:** MQL → demo ~28%, demo → close historically 60–70%, currently ~55%
- **Status:** production. The most reliable motion we have.

## GS / Garden Style Multifamily

Multifamily PMs running garden-style and low-rise properties. Larger door counts, different software, more stakeholders, longer cycles, bigger deal sizes when they close.

- **Software they use:** Yardi, RealPage, Entrata, ResMan, MRI, Appfolio's multifamily product
- **Geography:** national, also Sunbelt-skewed
- **Conversion baseline:** MQL → demo ~25%. Per-campaign close rates vary widely (LOW-RISE ran 40%, LOW-RISE ONSITE ran 20%).
- **Status:** production. Second pillar, growing.

## Title Companies (experiment)

Cold-tested via partnerships with title companies. The hypothesis is that title agents touching closings have a clean handoff moment to introduce utility setup to new buyers/renters.

- **Status:** Phase 1 cold email run. Roughly **0.5% positive reply rate** as the rough planning number.
- **Notes:** MQLs land on the Q2 sheet for visibility but don't fire Slack alerts or route to BDRs yet. No demo target set.
- **Where it goes:** if reply rate holds and we can produce demos that close, this becomes a real channel. If it stays at 0.5%, we shut it down.

## D2C (Direct-to-Consumer experiment)

Direct outreach to renters/homeowners rather than the PM. Live as of Q2 via Google ads and a lookup tool.

- **Status:** live but too early for meaningful conversion data.
- **What we're learning:** unit economics work differently when there's no PM in between. Different CAC math, different LTV, different funnel.

## API Integration Partners

Companies like DoorLoop, Rentec Direct, Elise AI, Snappt, Findigs, Funnel, Zumper. The pitch isn't pain — it's ARPU expansion.

- **Reference customer:** TenantCloud added $1M+ in annual revenue. 3-day implementation via CSV or 4 API calls embedded.
- **Status:** active Q2 sprint. Manual tracking in HubSpot deals + spreadsheet. Not part of MQL engine reporting yet.
- **Different motion entirely:** longer cycle, larger deal, partnership not product sale.

## How audiences are tagged

Automatic in the MQL engine:

1. **HubSpot `company_type`** (if known): Property Manager / Mixed → SFR. Garden Style / Multi Family → GS.
2. **Smartlead campaign name fallback:** keywords `sfr` → SFR. `gs / low-rise / garden / multifamily` → GS. `title / escrow` → Title.
3. **No match** → manual review.

## Where there's more room

- **Owner-facing positioning.** Owners (the landlords behind the PMs) care about the $30–50/move-in × N doors math. Today our marketing doesn't address them.
- **DIY landlord positioning.** The 64% of SFR that's self-managed is largely untouched. PMs are easier to sell (one deal = hundreds of doors) but DIY landlords are 2x the market.
- **API partner messaging variance.** Each partner type (PM software, leasing platform, renter screening) probably needs its own pitch, not the universal one.

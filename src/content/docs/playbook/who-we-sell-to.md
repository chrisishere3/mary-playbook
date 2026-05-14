---
title: Who We Sell To
description: Five customer types in different stages of maturity. SFR is the cash engine. GS is the second pillar. D2C is the future. Title is paused. API partners are the leverage play.
---

We currently sell to five customer types. Two are production, three are experimental in different ways. Each has its own software stack, sweet spot, channels, and conversion baseline.

## SFR Property Managers

Single-family rental property managers. Proven segment. **7.8% market share, target 25%** (denominator question open — see [Strategic Disagreements](/mary-playbook/operating-system/strategic-disagreements/)).

- **Software they use:** AppFolio, Buildium, Rentvine, Propertyware, RentManager, TenantTurner, TenantCloud
- **Sweet spot:** 100–850 doors, average ~400
- **Geography:** coast to coast, Texas and Chicagoland heaviest
- **Where they're found:** NARPM (trade association), BuiltWith filtered by SFR PM software, Outscraper keyword scrape on Google Maps
- **Pain point:** chasing tenants for utility setup at move-in is a manual, repeated headache
- **Decision-maker:** usually owner-operator or operations lead at smaller PMs; broader stakeholder set at larger ones
- **Conversion baseline:** MQL → demo ~28%, demo → close historically 60–70%, currently ~55%. AppFolio specifically down 10% since December.
- **Status:** production. The most reliable motion. Cash engine.

## Garden-Style / Low-Rise Multifamily

Multifamily PMs running garden-style and low-rise properties. Closer to SFR workflows than high-rise institutional MF, which makes them a reasonable bridge segment.

- **Software they use:** Yardi, RealPage, Entrata, ResMan, MRI, AppFolio's multifamily product
- **Blocker:** Yardi penetration. Many target accounts can't be served until we integrate.
- **Avg deal size:** larger than SFR. ~914 doors per demo, ~554 doors per won deal.
- **Conversion baseline:** MQL → demo ~25%. Per-campaign close rates vary widely.
- **Status:** production. Second pillar, growing.

## Direct to Consumer

Direct outreach to renters, home buyers, and other movers rather than the PM. Newest motion, current focus. See [D2C Motion](/mary-playbook/playbook/d2c-motion/) for the full breakdown.

D2C is "direct to everybody," not just renters:

- **Renters** moving into a new unit
- **Home buyers** at closing (longest LTV potential via supplier conversion)
- **Second-time home buyers** (moving again, lower friction)
- **Small landlords** acquiring an 11th, 12th property
- **Small businesses** opening new locations (e.g., a new gym franchise)

- **Status:** live but early. ~$2K spent to date, 3 activations, ~$650 CAC.
- **What we're learning:** unit economics work differently when there's no PM in between. Different CAC math, different LTV, different funnel. **The big prize is supplier conversion**, not one-time activation revenue.

## Title Companies

Title companies handle real estate closings. We approached them as a partner channel: at closing, hand off the home buyer to UP for utility setup. See [Title Motion](/mary-playbook/playbook/title-motion/) for the full status.

- **Status:** paused, no clear owner. Currently shepherded by Sarah.
- **Lessons:** implementation friction is the killer. Even when title companies sign on and complete onboarding, activation is slow.
- **Open question:** recommit with reduced scope, mothball, or kill in favor of real estate brokerages.

## API Integration Partners

Companies like DoorLoop, Rentec Direct, Elise AI, Snappt, Findigs, Funnel, Zumper. The pitch isn't pain — it's ARPU expansion.

- **Reference customer:** TenantCloud added $1M+ in annual revenue. 3-day implementation via CSV or 4 API calls embedded.
- **Status:** active Q2 sprint. Manual tracking in HubSpot deals + spreadsheet. Not part of MQL engine reporting yet.
- **Different motion entirely:** longer cycle, larger deal, partnership not product sale.

## ICP characteristics worth knowing

- **Office sizes for title companies:** average is ~20–30 moves per month per office, not the 50 originally assumed.
- **Geographic concentration:** Texas and Chicagoland are densest markets and easiest sales motions.
- **Tech receptivity:** PMs vary wildly. The ones who already use AI tools or modern PM software adopt UP faster than legacy operators.

## How audiences are tagged in the MQL engine

Automatic:

1. **HubSpot `company_type`** (if known): Property Manager / Mixed → SFR. Garden Style / Multi Family → GS.
2. **Smartlead campaign name fallback:** keywords `sfr` → SFR. `gs / low-rise / garden / multifamily` → GS. `title / escrow` → Title.
3. **No match** → manual review.

## Where there's more room

- **Owner-facing positioning.** Owners (the landlords behind the PMs) care about the $30–50/move-in × N doors math. Today our marketing doesn't address them.
- **DIY landlord positioning.** The 64% of SFR that's self-managed is largely untouched. PMs are easier to sell (one deal = hundreds of doors) but DIY landlords are 2x the market.
- **API partner messaging variance.** Each partner type (PM software, leasing platform, renter screening) probably needs its own pitch, not the universal one.
- **Real estate brokerages.** Theorized as a better partner channel for home buyers than title. Untested.
- **Sub-50-door long tail.** No motion exists. May not be worth building one. Worth investigating.

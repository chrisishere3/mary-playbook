---
title: Products & Integrations
description: UP vs. UtilityWallet, the integrations list, OnSwitch, Vacancy. What's shipped vs. what's still theory.
---

## Utility Profit ≠ UtilityWallet

These are two distinct products. Don't conflate them in writing, decks, or customer conversations.

- **Utility Profit (utilityprofit.com):** the B2B SaaS sold to property managers. Move-in utility setup, OnSwitch, Vacancy, etc.
- **UtilityWallet (utilitywallet.com):** the consumer-facing brand and landing experience for the direct-to-consumer motion. Recently migrated off Webflow onto AWS so we can ship new pages and redirects without engineering bottlenecks.

## Utility Profit core product

Ensures tenants set up utilities before move-in by automating the workflow between the property manager and the tenant. The PM doesn't have to chase the tenant; we do.

### Live integrations

- AppFolio
- Buildium
- Rentvine
- Propertyware
- TenantTurner
- TenantCloud

### Notably not integrated

- **Yardi.** Material gap for multifamily expansion. Many MF operators are on Yardi; until we integrate, full MF go-to-market is limited.

## OnSwitch

Auto-enrollment of tenants into utility accounts. **Not live yet.** Currently being scoped and built.

Once live, this enables a much more automated experience and reduces the human follow-up required to drive activation. OnSwitch is correctly identified as the most important long-term product bet — it unlocks downstream functionality across all segments.

## Vacancy product (current build focus)

Auto-transfers utilities back to the property owner / manager when a tenant moves out. Today this is a manual process for PMs and a common pain point. The vacancy product makes it free and automatic — the value to PMs is so strong that churn should be near-zero once they have it.

Strategic notes:

- A Bland.ai-powered AI caller prototype handles the phone calls that vacancy transfers require. Promising but parked as a side project. Likely becomes a core engineering effort post-raise.
- "Free vacancy enabled by AI phone calling" is a real but time-limited arbitrage. Competitors will catch up.

See [Open Questions & Big Decisions](/mary-playbook/operating-system/strategic-disagreements/) for the unresolved vacancy product thesis.

## UtilityWallet (consumer experience)

The front-end for direct-to-consumer flows. Currently:

- Landing page for Google Ads traffic
- Will host city/state-specific organic pages
- Will be the home for the new D2C front-end (vibe-coded against the OnSwitch API)
- Eventually the supplier customer experience

## Utility provider lookup tool

A tool that lets users find their local utility providers by address. Originally a standalone marketing tool; now integrated into the core product. Backed by our internal utility provider database.

## Internal infrastructure

- **Utility provider database:** 5,234+ providers, hosted on Railway PostgreSQL (migrated from a 52GB SQLite file). Includes regex-based account number validation built from historical account data.
- **FCC Broadband Serviceable Location fabric:** evaluated for address-level unit counts; informs market sizing and PM identification.
- **Eviction court records scraper:** spec'd for identifying property managers nationally. Status varies — confirm current state with engineering.

## Demo and prototype assets

- **UtilityWallet interactive demo prototype:** Dalton & Finegold configuration. Deployed to Webflow. Used in sales conversations.
- **Storylane demos:** for product walkthroughs.

## What to know

- The PM-facing product and the consumer-facing product live in different worlds and require different positioning, copy, and trust dynamics.
- The integrations list above is the gating factor for which property managers we can serve well today.
- **Vacancy is the most strategically important near-term product launch.**

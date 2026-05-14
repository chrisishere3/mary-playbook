---
title: D2C Motion
description: Direct to consumer. Live, early, current focus. The path to supplier conversion.
---

D2C is the newest motion and, as of May 2026, a primary focus. Early signal is strong relative to spend.

## Why D2C matters

1. **Top-of-funnel that we own.** Not dependent on a property manager or title company to hand off the customer.
2. **Path to recurring revenue via supplier conversion.** Direct consumers can become our electric/gas supplier customers in deregulated states. This is the long-term thesis.
3. **Rising tide.** A strong D2C presence makes us more credible to PMs, title companies, and other B2B partners.
4. **Surface area.** Movers, home buyers, second-time home buyers, small landlords, and small businesses opening new locations are all addressable through the same general flow with channel-specific creative.

## Current state (May 2026)

- **Spend:** ~$2K total to date
- **Activations:** 3 (~$650 CAC at current spend)
- **Top-of-funnel:** Google Ads (primary channel)
- **Email captures:** ~50 in the first ~week of running the new email-capture feature
- **Landing experience:** utilitywallet.com → click through to the OnSwitch / utility-setup flow

## Ad strategy

- **Channel:** Google Ads (primary). Other channels not yet tested.
- **Creative:** Mixed headlines and descriptions running through Google's auto-cycling.
- **Message resonating:** "Save time setting up your utilities" — jobs-to-be-done framing. Time-saving has not been explicitly A/B tested vs. money-saving, but early signal is encouraging for time-saving.
- **No image creative:** text-only Google Ads.

## Why D2C trust dynamics are different from PM-driven utility setup

- A consumer coming from a Google ad has **low trust** in the brand. Property managers send tenants to us with implicit authority — those tenants believe they have to use UP.
- Google Ads traffic does not have that authority. The conversion flow needs to earn trust before asking for personal information.
- This is why we capture email early and follow up, rather than asking for full information upfront.

## Roadmap

### Priority 1 — Email follow-up flow

- ~50 emails captured already, no flow live yet
- Goal: bring users back to complete utility setup
- Needs: professional-looking email creative, social proof, AB-test plan
- Will run A/B tests on subject lines, body copy, and CTAs

### Priority 2 — City and state-specific organic pages

- utilitywallet.com is now off Webflow and on AWS, removing the engineering bottleneck on shipping pages
- We already have traffic on utilityprofit.com to similar pages — use those URLs to funnel into utilitywallet.com via redirects
- Expand to many city/state combinations over time as a marginal-cost-zero traffic source

### Priority 3 — Vibe-coded D2C frontend against the OnSwitch API

- The current OnSwitch experience is designed for high-authority handoff scenarios
- D2C requires a completely different flow, copy, and trust progression
- Decision: build a new front-end specifically for D2C, calling the existing OnSwitch API
- This is a separate codebase from utility-setup.com, not a reskin
- Built through the [architect workflow](/mary-playbook/playbook/architect-workflow/)

### Future

- Direct mail postcards with QR codes for movers
- Other paid channels (Facebook, etc.) once Google flow is dialed in
- Eventual native mobile app for supplier customers (monitor usage, pay bills)

## What's working / what's parked

**Working:**

- The capture funnel is generating emails at meaningful volume on small spend
- Time-saving message appears to resonate
- UtilityWallet migration off Webflow unlocks page-shipping speed

**Parked:**

- AI caller / move-out / vacancy automation — strategically important but currently a side project. Likely revisited as a core engineering effort post-raise.

## Economics — open questions

We don't have a proven model yet for D2C economics. Open questions:

- What target CAC makes one-time activation profitable on its own?
- What % of D2C activations need to convert to supplier customers for $X CAC to pencil at scale?
- How long until we're a regulated supplier in any meaningful state? This gates LTV.

These should be modeled before scaling ad spend significantly.

## Key reminders

- D2C is "direct to everybody," not just renters. The market includes home buyers, businesses, and landlords.
- The big prize is **supplier conversion**, not one-time utility setup revenue.
- Speed matters because competitors don't exist yet — but they will.

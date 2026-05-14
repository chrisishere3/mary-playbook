---
title: Title Motion
description: Title companies as a partner channel. Paused, no clear owner. Implementation friction is the killer.
---

## Status: paused, no clear owner

The title motion is in an ambiguous state. We have not killed it, but no single person currently owns it day-to-day. **This is by acknowledgment a problem** — the motion is in slow decay without an explicit owner.

A formal decision is needed: explicit ownership at reduced scope, or explicit mothball with a planned revisit.

## The motion

Title companies handle real estate closings. We approached them as a partner channel: at closing, the title company hands off the home buyer to UP for utility setup. Mechanically this is done via QR code on closing materials and/or BCC email routing in Qualia (their closing software).

The opportunity, if it worked:

- Home buyers have long LTV, especially with supplier conversion
- Title companies see high volume of qualified movers
- Hands-off motion once implementation is complete

## Current activation status (May 14, 2026)

Sarah is shepherding the active title partners. Status by account:

- **Marshall County Abstract (Oklahoma)** — Placard arrived. Open issue with addresses that aren't found in Smarty or Google; an "add address" feature was expected to ship but isn't working as expected. Onboarding call delayed until this is fixed.
- **Capital Broadview and Clothesline** — Placards in place; waiting for the title companies' IT contact to return from vacation to enable email routing on their end. A delay of about a week. John has the champion relationship; he and Sarah feel good about activation once IT returns.
- **Allied** — First account that made it all the way through onboarding. All offices have placards; onboarding call completed. Has since gone silent. Sarah has left voicemails and is continuing to follow up. The activation tool can detect any synced listings; as of last check there are none for Allied.
- **Multiple pending placards** — Several closed deals are waiting for placards to ship. A wood shortage at the supplier (mahogany specifically) is delaying production. Follow-up emails have been sent in the meantime to keep the relationship warm.
- **Bankers Title** — Pending placard, similar situation.

The structural problem remains: even when title companies sign on and complete onboarding, activation is slow and conversion to actual UP-facilitated utility setups is low. **The Allied case (full onboarding, silent thereafter) is the cleanest example of the implementation-friction problem.**

## What's been tried

- Direct outreach to title companies
- Qualia BCC email integration (configured on a per-company basis)
- QR codes on closing packets
- URL slug redirects for trackable links
- Hand-holding onboarding calls with title company tech contacts
- Test cases: Close Line Capital, Broadview

## Current results

- **Activations:** 0
- **Top-of-funnel signal:** okay. Title companies are interested in meetings; demos happen.
- **Mid-funnel signal:** weak. Onboarding completion is slow.
- **Bottom-funnel signal:** weak. Even completed onboardings don't generate the volume of activations expected.

## What we've learned

### Implementation is the killer

Getting a title company to actually implement the BCC routing or QR code distribution is hard:

- Their tech person is often part-time or external
- Multiple internal stakeholders need to sign off
- Closings have their own complex workflows that don't bend easily
- Even when they say yes, execution drags out by weeks

### Move volume was lower than assumed

Original assumption: ~50 moves per office per month. Reality: **~20–30 is the most common number per office.** Many title companies have multiple offices, so total company volume is higher than per-office, but TAM per partner is meaningfully lower than initial modeling.

### Test cases revealed friction points

- Close Line Capital (John's relationship via Broadview): Qualia BCC was set up but no emails came through. Either broken on their end or no closings happened — but we know closings happened, so something is broken.
- URL slugs needed to be wrong → built a redirect feature → tech person at title company is out for a week → onboarding delayed again.

## Why title isn't dead

- Home buyer LTV via supplier conversion is the single highest-value customer outcome
- If we can crack the implementation problem with one or two anchor partners, the channel could be valuable as a free LTV lever
- Ben's view: "If I had nothing else going on for a quarter and sat down, I could get it working." That may or may not be true, but it's not zero.

## Why title may stay parked

- Implementation friction is structural, not just our fault
- Real estate brokerages may be a better partner channel for reaching home buyers (less mechanically complex partnership)
- Direct to consumer can reach home buyers at scale without partner dependency
- The team is split across too many things to give title the focus required

## Open question

Title is a good candidate for an independent investigation. Should we:

- Re-commit to title with a single owner and reduced scope?
- Mothball it explicitly until we have more resources?
- Kill it and direct that energy into real estate brokerages or [D2C](/mary-playbook/playbook/d2c-motion/)?

A view based on customer conversations would be valuable.

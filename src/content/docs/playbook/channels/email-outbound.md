---
title: Email Outbound
description: The primary MQL channel. Runs through Smartlead, classified by our MQL engine.
---

## What it is

Cold email outbound to property managers, segmented by audience (SFR or GS). Replies are scored by our internal AI classifier; "Interested" replies become MQLs and route to a BDR within minutes.

## How it works today

1. Build a targeted contact list per audience (SFR or GS)
2. Personalize every send by company name, PM software, vacancy address, city, sometimes utility provider
3. Two-step sequence per campaign
4. Pre-compute conditional copy as CSV columns (Smartlead can't handle nested template conditionals)
5. Replies flow into the MQL engine
6. AI classifier reads each reply, tags sentiment
7. Interested replies route to BDR via Slack with full context

## What's working

- **Subject line: company name personalization.** `help tenants setup utilities at {{company_name}}` runs at 30–39% Interested rate among replies. Clear winner across both SFR and GS.
- **Two-step sequences.** Step 1 leads with operational pain ("do you have to confirm utilities"). Step 2 reframes around revenue ("adding revenue per door with internet"). More steps doesn't increase Interested replies — it just generates more unsubscribes and not-interested.
- **CTA: "Want me to send you an example?"** Lower commitment than asking for a demo. 34% of Interested replies specifically request the example. Asking for a demo directly only converts about 3%.
- **Personalization that signals 1:1.** Subject line with company name. Body with their actual PM software or property address. Generic blasts underperform across every metric.

## What hasn't worked

- **Long sequences (5+ steps).** Higher reply rate, but most of the extra replies are unsubscribes or "stop emailing me."
- **Generic subject lines** without company personalization.
- **Selling to bad lists.** SFR's "No Deals" segment had 0% Interested, 56% Current Customer. Wrong list.
- **DM follow-up via email.** When we tried emailing prospects after sending direct mail, conversion dropped to zero on small samples. Either the channels work independently or we haven't figured out the right sequence.

## Current numbers

Pull live from the [Q2 MQLs sheet](https://docs.google.com/spreadsheets) and the MQL engine before quoting in any forecast.

Reference baselines:
- Email produced the majority of Q1 MQLs
- LOW-RISE campaign closed at 40%, SFR at 51%, LOW-RISE ONSITE at 20%
- Q1 had a list-exhaustion cliff: 103 MQLs in January, 39 in February, 15 in March (SFR went to zero in Feb and March)
- Q2 fix: full enrichment rebuild. SFR list is now ~22,500 contacts across ~7,600 companies with subject lines and body lines pre-computed per contact.

## Where there's more room

- **Reply analysis driving copy.** Hundreds of classified replies sit in the MQL engine. Most aren't being mined for messaging improvements. "How do you make money" is 22% of all questions asked in replies — but our copy still doesn't preempt it in the body.
- **Sender variety.** Most sends go from one or two domains. Room to test sender names, sender titles, and From-line variants more deliberately.
- **Trigger-based sends.** Today the cadence is broad. Triggered sends based on signal (new property listing, recent move-in volume) haven't been tried.
- **Audience expansion via subject line testing.** The company-name personalization win came from a single test. Other subject patterns haven't been systematically tested.

## Key concepts to know

- **MQL = Interested-classified reply.** Not Smartlead's `lead_category` field, which is manual and half-empty.
- **The MQL engine is the source of truth.** Runs on Railway every 2 hours, 6am–8pm. Source code at `~/scripts/mql_engine/`.
- **Audience tagging is automatic.** See [How We Measure](/mary-playbook/playbook/how-we-measure/) for the exact rules.

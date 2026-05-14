---
title: Direct Mail
description: Physical mailers via Lob's API. Best cost-per-activated-door of any channel.
---

## What it is

Physical letters sent via Lob's API to SFR and GS audiences. Mark Lindquist owns the program.

## How it works today

1. Mark preps merge variables (company name, logo, PM software, addresses, city) in a Google Sheet
2. The API sends letters using HTML templates — not Lob campaigns, so they don't show up in the Lob dashboard
3. Each letter has a personalized slug URL: `utilityprofit.com/{slug}`
4. When someone visits that slug, GA4 logs it
5. The MQL engine checks for slug visits and writes a HubSpot timeline note on the company

## Attribution model

**Company-level only.** We can show that a company visited their personalized slug, but we can't prove which specific person at the company scanned the mailer. So:

- ✅ HubSpot timeline note on the company ("Mailer slug visited")
- ❌ No contact-level MQL tagging
- Direct Mail appears in reporting in a dedicated section. Doesn't inflate the MQL scoreboard.

The scoreboard stays clean. Mailers get credit where credit's measurable. No inflation.

## What's working

- **Cost per activated door: ~$2.** Best cost efficiency of any channel.
- **Mailers change conversations even when nobody scans.** Mark's BDR audit found 3 deals that converted after the prospect had told the BDR "no" — the mailer changed the outcome. The deals come from the mailer being seen and prompting a different conversation, not from anyone scanning or typing the URL.
- **Pairs well with BDR.** 7 of the audited deals were mailer + BDR shared. The combination outperforms either channel alone.

## What hasn't worked

- **QR codes.** Zero scans across the program. Don't add them.
- **Personalized slug URLs as a direct conversion path.** Minimal direct traction. They work for attribution, not engagement.
- **Mailers + email follow-up sequence.** On small samples, conversion dropped to zero. Either run them independently or figure out the right sequence (we haven't).

### False positive lessons (hard-won)

- **State page matching.** Slugs like "utah" matched generic utility provider pages (`/utility-providers-water-electricity-gas/utah`). Fix: restrict matching to `/utility-setup/` paths only.
- **Stale cache + prefix matching.** Short slugs ("the", "florida") had inflated visit counts. Fix: wipe cache, exact match only.
- 14 of 26 originally tagged contacts were false positives. All cleaned up. That incident is why we moved to company-level-only attribution.

## Current numbers

Pull from the Q2 MQLs sheet and HubSpot before forecasting.

Reference baselines (Q1):
- 4,550 letters sent
- 101 GA4 slug visits (15 unique slugs with real engagement)
- 13 deals attributed to mailers (9.2% of all marketing deals)
- Mark's audit: 10 mailer-primary deals, 7 mailer + BDR shared, 10 BDR-primary

Q2 plan:
- ~6K letters in flight first week of April, 7.5K target for the quarter (scaled down from 10K original)
- Split ~5K SFR / ~5K GS
- Expected ~25–35 deals, ~40 MQLs if GA4 visits get counted

## Templates and logos

Two HTML templates: SFR/MF and Title.

Logo audit done April 2026 — validated 4,335 company logos for print quality using WCAG contrast scoring + a Gemini vision model. 1,141 came out READY. 3,011 failed (too small, invisible on white background, placeholder, dark-only, download failed, wrong image, no logo). Failed companies get a text-only template variant.

## Where there's more room

- **Postcard volume.** Almost everything we've sent is letters. Postcards are cheaper and may work for SFR.
- **Sender variety.** Today letters come from Chris, Stephanie Brower, or Zac Maurais. Room to test more sender personas.
- **Triggered mailers.** Drop a letter when a prospect hits a specific lead score or stage. Today it's batch.
- **Mailer + something-else sequences.** Mailer + LinkedIn, mailer + voicemail drop, mailer + ad retargeting. The standalone channel works; the combinatorics haven't been tested.

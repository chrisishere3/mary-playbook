---
title: Tools
description: The third-party stack and the custom tools we've built. Marketing here doubles as RevOps — the stack is biased toward APIs and Python glue.
---

## Primary stack

### CRM and data

- **HubSpot.** System of record for contacts, companies, deals, and lifecycle stages. Every channel feeds into HubSpot. Private App API tokens used for all read/write.
- **Google Sheets.** Operational layer for pipeline tracking, BDR queues, and one-off lists. Service account access via gspread.

### Outbound

- **Smartlead.** Cold email sending and reply tracking. Primary MQL source.
- **Lob.** Direct mail API. Sends physical letters with merge variables and personalized slug URLs.
- **Apify + Bright Data.** Scraping infrastructure. Apify for structured site scraping (Google Maps, etc.). Bright Data for SERP API and Web Unlocker on tougher sites.

### Web hosting and infrastructure

- **Netlify.** Marketing site hosting + form handling for the consumer-facing UP site.
- **Railway.** Production services. MQL engine, Demo Prep Bot, Title Call Ingestor, anything that needs to run continuously.
- **AWS S3 + CloudFront.** Hosts the up-static-site (`SunroomOrg/up-static-site`).
- **Webflow.** Hosts the Utility Wallet site (the title and D2C experiment domain).

### AI and enrichment

- **OpenRouter.** Routes AI calls. Most of our AI work runs through Gemini Flash for cost reasons.
- **Contact Finder.** Internal tool that finds contact emails from company domains. Pattern matching + Hunter + AI fallback.
- **UseBouncer.** Email verification.

### Sales and booking

- **Calendly.** Demo and meeting booking. Triggers Demo Prep Bot via webhook.
- **Grain.** Call recording and transcripts. Used for VOC and demo review.

### Communication

- **Slack.** Internal notifications. MQL engine posts to `#mql` on every Interested reply. Demo Prep posts when briefs land.

### Coding and AI workflow

- **Claude Code.** The harness running most of the engineering and ops work behind the scenes. Used for everything from script changes to multi-step research.

## Internal tools we've built

Custom tools that run between the primary stack tools. Most exist because no off-the-shelf product did what we needed.

### MQL Engine

The central nervous system for all marketing-generated leads. Lives on Railway, runs every 2 hours from 6am–8pm, ingests from every channel.

**What it does:**

1. Polls the PLG sign-up sheet for new sign-ups
2. Receives PLG webhook events
3. Syncs Smartlead replies from active campaigns
4. AI-classifies every Smartlead reply (Interested, Not Interested, Wrong Person, OOO, etc.) using Gemini Flash
5. Routes Interested replies as MQLs: HubSpot contact + company create, MQL tag, BDR round-robin assignment, Slack notification, Q2 sheet row
6. Tracks mailer attribution via GA4 slug visits
7. Writes a daily digest to Slack at 9am CT

**Classifier.** AI-first using Gemini 2.5 Flash via OpenRouter. About $0.0002 per reply classified. A thin layer of rules fires before the AI for unambiguous cases (empty messages, pure unsubscribe tokens).

**Round-robin BDR routing.** Two pools — SFR (Alex, Nathan, Ryan, Ram) and GS (George, Seth, Irwing). Assignment is fewest non-skipped assignments this quarter, ties broken by recency. Title leads bypass the pool today (experiment-phase, no BDR action).

**Reporting endpoints:** `/health`, `/bdr-status`, `/bdr-assignments`, `/report`. The Q2 MQLs Google Sheet is the human-readable view, but the **Railway DB is the source of truth.**

### Demo Prep Bot

Automated pre-demo briefing. Calendly webhook fires when a demo is booked, the bot enriches the company, scrapes the site, pulls HubSpot context, generates an AI brief, and writes a row to the Demo Prep sheet for the AE.

Live on Railway. In daily use by the sales team.

### Marketing Attribution Skill

A skill (invokable as `/marketing-attribution Q1` or `Q2` or a date range) that audits HubSpot deal attribution against source systems — Smartlead, Lob, Calendly, Meta. Flags deals with missing source attribution and reconciles against the Q2 forecast.

It's not a product, it's a callable workflow. Used for monthly and quarterly reporting.

### PLG Preview Tool

The self-serve utility preview at utilityprofit.com. Prospect enters property info, sees a live utility preview, optionally connects their PM software. Generates organic sign-ups that feed the MQL engine as `mql_source=sign_up`.

Reporting: `/api/report?since=YYYY-MM-DD`.

### John's Base44 AE Playbook

Internal tool John built on Base44 for the sales team. The marketing version is the playbook you're reading now.

## Why this stack looks the way it does

Marketing here doubles as RevOps. The team is small, so the stack is biased toward tools that have good APIs and can be glued together with Python. Anything that resists automation (concierge consoles, no-API SaaS) tends to get replaced.

The tradeoff with the custom tools: we own the maintenance. When Smartlead changes an API or HubSpot changes an enum value, something here breaks before something at a vendor does.

## Where there's more room

- **A single ops dashboard.** Today Mary will pull MQL counts from Railway, deals from HubSpot, mailer attribution from Sheets, and channel ROI from Metabase. A single dashboard view would compress this.
- **Tighter inbound attribution.** Organic produces a meaningful share of deals with the messiest source data. UTM hygiene and a cleaner default for organic sign-ups would help.
- **Documented runbooks for the custom tools.** When something breaks, today the fix path is in someone's head. Written runbooks would let Mary debug without escalating.

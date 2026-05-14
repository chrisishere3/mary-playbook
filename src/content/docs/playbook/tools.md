---
title: Tools
description: The third-party stack and the custom tools we've built. Marketing here doubles as RevOps — the stack is biased toward APIs and AI glue.
---

## CRM and data

- **HubSpot.** Primary CRM. ~28K company records (recently overhauled), ~16K SFR contacts. Source of truth for account, contact, deal, and lifecycle data. Used for segmentation, list-building, campaign attribution, and reporting. Private App API tokens used for all read/write.
- **Airtable.** Secondary data store for lighter-weight workflows, lists, project tracking, candidate pipelines. Used heavily for one-off projects that don't fit cleanly in HubSpot.
- **Google Sheets.** Operational layer for pipeline tracking, BDR queues, ad-hoc analysis. Service account access via gspread.
- **Metabase.** BI / data visualization. Connects to our application database. The "sales dash" report is the canonical source for BDR-sourced demo and won-deal door counts.

## Internal data infrastructure

- **Railway PostgreSQL.** Hosts the utility provider database (5,234+ providers, migrated from a 52GB SQLite file). Account number regex validation system runs against historical data.

## Outbound and outreach

- **Smartlead.** Cold email sending. Deliverability work, A/B testing of subject lines and body copy. Primary MQL source. Watch for security scanner false positives polluting Clarity/GA session data.
- **Lob.** Direct mail API. Sends physical letters with merge variables and personalized slug URLs.
- **Apify.** Scraping. LinkedIn Profile Search Scraper (Full + email mode), Google X-ray fallbacks, prospect enrichment.
- **Bright Data.** Scraping infrastructure. SERP API and Web Unlocker on tougher sites.
- **Clay.** Data enrichment / orchestration for outbound lists.
- **Voila Norbert.** Email finding.
- **LinkedIn Recruiter Lite.** Paid LinkedIn product. InMails reserved for "open to work" candidates during recruiting.

## Marketing site and content

- **Webflow.** utilityprofit.com (CMS template pages for SEO). Five sections of the CMS template were recently rebuilt as pure HTML/CSS embeds, replacing the older Bannerbear image-generation pipeline.
- **AWS S3 + CloudFront.** Hosts the up-static-site (`SunroomOrg/up-static-site`) and utilitywallet.com (after Webflow migration).
- **Canva.** Design for one-off creative.
- **Storylane.** Interactive product demos.

## AI and enrichment

- **OpenRouter.** Routes AI calls. Most AI work runs through Gemini Flash for cost reasons.
- **Contact Finder.** Internal tool that finds contact emails from company domains. Pattern matching + Hunter + AI fallback.
- **UseBouncer.** Email verification.
- **Bland.ai.** Voice agents. One agent live for utility provider coverage verification calls. Second agent being scoped for outbound renter calls.
- **Anthropic Claude (via Windsurf + Cascade).** Used by non-engineers to vibe-code features against the codebase. See [Architect Workflow](/mary-playbook/playbook/architect-workflow/).

## Meetings and customer conversations

- **Grain.** Meeting recording, transcription, and AI summaries. Used for sales calls, internal strategy meetings, and customer research.
- **Calendly.** Demo and meeting booking. Triggers Demo Prep Bot via webhook. Routed through Cloudflare Worker into Slack (replacing a complex 9-path Zapier flow).

## Automation and workflow

- **Cloudflare Workers.** Replacement for Zapier on complex flows. Specifically: the 9-path "Any Calendly booking to Slack" Zap was rebuilt as a single Cloudflare Worker (Calendly webhooks → Worker → Slack + Railway) with routing, emoji lookup tables, and exclusion blocklists in Worker config.
- **Zapier.** Being deprecated in favor of Cloudflare Workers. Don't add new complex Zaps.
- **Playwright.** Browser-automation jobs (e.g., a bulk redirect automation that processed 900+ slug-to-URL pairs with checkpoint/resume).

## Product engineering

- **Windsurf + Cascade.** IDE / coding agent used by ICs to ship product features without writing code by hand. See [Architect Workflow](/mary-playbook/playbook/architect-workflow/).
- **GitHub.** Source control.

## Other / partner tools

- **Qualia.** Title company closing software. Used to set up BCC email routing for title onboarding.
- **Dialpad.** Phone system. Source of customer call transcripts (used to inform AI agent pathways).

## Communication

- **Slack.** Internal notifications. MQL engine posts to `#mql` on every Interested reply. Demo Prep posts when briefs land.

## Hosting / infrastructure

- **Netlify.** Marketing site hosting + form handling for the consumer-facing UP site.
- **Railway.** Production services. MQL engine, Demo Prep Bot, Title Call Ingestor, anything that needs to run continuously.

## Coding and AI workflow

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

**Classifier.** AI-first using Gemini 2.5 Flash via OpenRouter. About $0.0002 per reply classified.

**Round-robin BDR routing.** Two pools — SFR (Alex, Nathan, Ryan, Ram) and GS (George, Seth, Irwing). Assignment is fewest non-skipped assignments this quarter, ties broken by recency. Title leads bypass the pool today (experiment-phase, no BDR action).

**Reporting endpoints:** `/health`, `/bdr-status`, `/bdr-assignments`, `/report`. The Q2 MQLs Google Sheet is the human-readable view, but the **Railway DB is the source of truth.**

### Demo Prep Bot

Automated pre-demo briefing. Calendly webhook fires when a demo is booked, the bot enriches the company, scrapes the site, pulls HubSpot context, generates an AI brief, and writes a row to the Demo Prep sheet for the AE. Live on Railway. In daily use by the sales team.

### Marketing Attribution Skill

A skill (invokable as `/marketing-attribution Q1` or `Q2` or a date range) that audits HubSpot deal attribution against source systems — Smartlead, Lob, Calendly, Meta. Flags deals with missing source attribution and reconciles against the Q2 forecast.

### PLG Preview Tool

The self-serve utility preview at utilityprofit.com. Prospect enters property info, sees a live utility preview, optionally connects their PM software. Generates organic sign-ups that feed the MQL engine as `mql_source=sign_up`. Reporting: `/api/report?since=YYYY-MM-DD`.

### AE Playbook (Base44)

John's polished operational tool for the sales team. Covers Demo Script, Discovery, Arming Champions, Competitors, End of Day Prep, Address Upload, Video Library, Software Sync, ISPs, Weekly Demo Review, and AE Reviews. **Ask John for access on day one.**

## Tool decisions and ongoing debates

- **Replacing Zapier.** Cloudflare Workers is the direction. Don't add new complex Zaps.
- **Webflow vs. AWS.** utilitywallet.com is now on AWS. New consumer-facing pages should be built on AWS, not Webflow, unless there's a specific reason.
- **Bland.ai vs. building custom.** Bland.ai works for current needs. Custom build comes later if the AI caller becomes core infrastructure.

## Why this stack looks the way it does

Marketing here doubles as RevOps. The team is small, so the stack is biased toward tools that have good APIs and can be glued together with Python or the [architect workflow](/mary-playbook/playbook/architect-workflow/). Anything that resists automation (concierge consoles, no-API SaaS) tends to get replaced.

The tradeoff with the custom tools: we own the maintenance. When Smartlead changes an API or HubSpot changes an enum value, something here breaks before something at a vendor does.

## Where there's more room

- **A single ops dashboard.** Today MQL counts live on Railway, deals in HubSpot, mailer attribution in Sheets, and channel ROI in Metabase. A single dashboard view would compress this.
- **Tighter inbound attribution.** Organic produces a meaningful share of deals with the messiest source data. UTM hygiene and a cleaner default for organic sign-ups would help.
- **Documented runbooks for the custom tools.** When something breaks, the fix path is in someone's head. Written runbooks would let the VP debug without escalating.

---
title: Architect Workflow
description: How non-engineers ship product features against the UP codebase. The vibe-coding workflow on Windsurf + Cascade.
---

A product-engineering workflow that lets non-engineers ship product features against the UP codebase. Built on Windsurf + Cascade with Claude Opus as the underlying model.

## The premise

ICs describe what they want, the AI generates the code, engineers review and merge or iterate. The IC never writes code by hand and may not read it directly. The IC operates at the level of **"what should this do, why, and what does success look like"** — not "what does this function need to return."

## Why it matters

- ICs ship features without waiting on engineering bandwidth
- Engineering reviews and improves rather than building from spec
- Non-engineers level up at thinking like product people: what's the business value, what's the success criterion, what's the constraint
- The team gets ~10x leverage on small-to-medium features

## Recent ships through the architect

- D2C email-capture feature (the one currently generating ~50 emails/week)
- Redirect feature for URL slug corrections (built quickly to unblock a title company)
- Webflow embeds: replaced Bannerbear image-generation pipeline with pure HTML/CSS across five CMS template sections (dashboard mockup, email notification, phone mockup, utility listings, revenue calculator)
- Branded partner onboarding PDF (17 pages, ReportLab) — internal SOPs converted to customer-facing documentation
- Bulk redirect automation using Playwright (browser simulation), processing 900+ slug-to-URL pairs with checkpoint/resume

## How an IC uses it

1. **Frame the problem in business terms.** Not "add a POST endpoint to /redirects," but "we need a way for title companies to update their target URL without engineering involvement, with the QR code unchanged."
2. **Describe success.** What should happen when this works. What should not happen. Edge cases the IC is aware of.
3. **Iterate with the AI.** Generate, evaluate output, refine, repeat. ICs don't usually read the code, but evaluate behavior.
4. **Hand off for review.** Engineering reviews for correctness, security, maintainability, and integration with the rest of the codebase.
5. **Ship.**

## What ICs are expected to do well

- Articulate business value clearly
- Define edge cases and failure modes
- Test behavior, not code
- Know when to ask engineering instead of pushing AI further (security-sensitive work, data-model changes, anything that could affect production data integrity)

## What ICs should not do

- Push code directly to production
- Skip engineering review
- Build anything that touches authentication, payments, or sensitive data without engineering pairing
- Treat the architect as a substitute for clear thinking. **Bad inputs produce bad code.**

## Tools used alongside the architect

- **GitHub:** source control
- **Windsurf:** IDE with AI features
- **Cascade:** agentic coding tool inside Windsurf
- **Claude Opus (via Anthropic):** the underlying model

## What this unlocks for the team

- ICs ship marketing-driven features (email capture, redirects, embed rebuilds, onboarding PDFs, prototypes) without engineering bottleneck
- Engineering spends more time on hard problems (data infrastructure, integrations, core product) and less on small marketing-driven feature requests
- As the team grows, anyone joining who can think clearly about product can contribute to the codebase day one

## What to expect when you start

You'll be given access to the architect early in onboarding. Don't expect to be productive in it day one. Spend time:

- Reading recent commits to understand what's been built
- Watching others use it
- Starting with small, contained features before tackling anything that touches multiple parts of the system
- Asking engineering for paired sessions on your first few ships

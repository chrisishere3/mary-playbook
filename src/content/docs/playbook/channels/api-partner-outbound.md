---
title: API Partner Outbound
description: Outbound to integration partners. Different motion than PM-facing — bigger leverage, slower cycle, different buyer.
---

## What it is

Outbound to API integration partners (DoorLoop, Rentec Direct, Elise AI, etc.). Active Q2 sprint. Chris on outreach, Darius (co-founder) on the discovery + pitch call, Ben on warm setting.

## Why this is different from our other outbound

PM-facing outbound sells one PM at a time. Partner outbound sells a platform that touches many PMs or renters at once. **Bigger leverage per signed partner. Slower sales cycle. Different person at the partner** — usually partnerships, BD, or product, not ops.

## The proven path

Pattern from RentSpree, TenantCloud, TurboTenant:

1. **Trigger.** Conference floor demo or warm intro from an existing partner. Cold outbound also works but warm is faster.
2. **Setter.** Ben sends a follow-up email referencing the booth or intro.
3. **Discovery call.** Darius runs. He frames UP as ARPU expansion for the partner's existing user base, not a new product for them to sell.
4. **Integration tier choice.** Link-out → co-branded → embedded iframe (4 API calls). Most partners start at link-out and expand once revenue shows up.
5. **Agreement + rev share doc** sent same day.
6. **Engineering.** 3 days via CSV. 4 API calls via iframe. Live in weeks, not months.

## The cold email

Used when there's no warm intro. The pattern that's worked:

> **Subject:** quick idea for [Partner] revenue
>
> Hey [Name],
>
> Saw [Partner] sits right in the move-in moment with [specific feature — screening, lease, application, etc.]. That's the same window we plug into.
>
> We're Utility Profit. We embed into rental software so renters set up utilities and Internet without leaving your app. Tenants get a smoother move-in. You get a rev share on every Internet activation.
>
> TenantCloud added $1M+ in annual revenue this way in a few weeks. Mark DeHaan called it one of their fastest-growing partnerships. Implementation took 3 days via CSV, or 4 API calls if you want it embedded.
>
> Worth a 20-min call to see if the math works for [Partner]?

Variants for conference follow-ups, warm intros, and volume-anchored hooks for big targets.

## Discovery questions (Call 1)

Order matters: volume → fit → timing → economics.

- How many users, screenings, applications flow through your platform monthly?
- Do you already capture rental address, tenant name, and email? (the 4 API inputs)
- What % of your users actually move in?
- Do you have a current utility / move-in partner? How's it performing?
- Any RealPage / Updater entanglement?
- Does this go through partnerships, product, or engineering?
- What's your usual integration shape — link-out, co-brand, full embed?
- How do you think about ancillary revenue / ARPU expansion?
- If we sent an agreement and rev-share model this week, what's the realistic path to live?

## Top objections + responses

**"We already have a utility partner."**

> Most of those partners are call centers under the hood. Updater, Moved, the older players. Human-driven on the back end means slower implementation, lower conversion at scale, and a different UX than the rest of your product. We're fully digital. Worth running a side-by-side — we'll ship a co-branded link in your flow next to your incumbent. Compare conversion in 30 days. If we lose, we walk.

**"We don't have engineering bandwidth."**

> Then you don't need any. The simplest integration is a link in an email or a button in your dashboard. Renter clicks, leaves your app, comes back. Zero engineering. TurboTenant ran on this for a year and we paid them more than the partner they were promoting. When you're ready for embedded, it's 4 API calls.

**"We need to see the numbers before we commit."**

> Fair. You have [X] users a month. [Y%] convert to actual move-ins. 60–80% complete the utility flow. 10–35% attach Internet depending on whether the landlord requires it. Worst case is [floor]. Realistic is [mid]. TenantCloud is at $1M+ ARR. We can model your specific numbers today and have an agreement signed by end of week.

## Who's in the bullseye

- **Mid-market PMS without a native utility product:** DoorLoop, Rentec Direct, Innago, Hemlane, Avail, Stessa, RentRedi
- **AI leasing tools:** Elise AI, Funnel, Zuma, BetterBot, Quext
- **Tenant screening:** RentSpree, Snappt, Findigs
- **Rental marketplaces:** Zumper, Rent., Redfin Rentals

## Who's blocked

- **RealPage / Updater-stack platforms:** Yardi, AppFolio Enterprise, Entrata, ResMan, MRI, AMSI, Knock
- **Updater itself, Moved, Porch** — direct competitors

## Where there's more room

- **Deck for screen-share on calls.** Today the pitch is verbal. A short deck with the TenantCloud case study and the tier diagram would help.
- **TurboTenant quote on record.** They've validated the model but haven't given us a public quote yet.
- **Inbound from this segment.** We're getting pulled into more partner conversations than we're chasing. A lightweight "partner with us" page or form could let inbound qualify itself.
- **Second case study at TenantCloud's scale.** TenantCloud's $1M+ ARR is doing a lot of heavy lifting in every pitch. A second one at similar scale lifts close rates across the entire bullseye list.

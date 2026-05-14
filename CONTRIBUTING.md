# Contributing

Anyone with repo access can add or edit chapters. Site rebuilds on every push to `main` (~1 minute).

You don't need to clone the repo or use the terminal. Everything below works in the GitHub web UI.

## How chapters are organized

```
src/content/docs/
├── index.mdx              # Home Base (the landing page — leave alone unless you know what you're doing)
├── welcome.md             # The "Welcome, Mary" chapter
├── operating-system/      # The 5 exec-level chapters
├── playbook/              # The 7 playbook chapters
│   └── channels/          # Each channel as its own sub-page
└── operating/             # Quarterly plan, frameworks, reviews
```

Pick the folder that matches the chapter type. New channel? Drop it in `playbook/channels/`. New framework? `operating/`. New exec-level concept? `operating-system/`.

## Adding a new chapter (web UI, no terminal)

1. Go to https://github.com/chrisishere3/mary-playbook
2. Navigate to `src/content/docs/` and pick the right folder
3. Click **Add file → Create new file** (or **Upload files** to drop in a `.md` you already wrote)
4. Name the file `kebab-case-chapter-name.md` (e.g. `email-deliverability.md`)
5. Paste content — see the template below for structure
6. Scroll down, write a commit message like "Add chapter: Email Deliverability"
7. Click **Commit changes**

Wait ~1 minute, refresh https://chrisishere3.github.io/mary-playbook/ — your chapter is live.

## Adding the chapter to the sidebar

A new file alone doesn't show up in the left-rail nav. You need to add it to `astro.config.mjs`:

1. Go to https://github.com/chrisishere3/mary-playbook/blob/main/astro.config.mjs
2. Click the pencil icon (top right) to edit
3. Find the matching section (e.g. `The Playbook` group)
4. Add an entry like:

   ```js
   { label: 'Email Deliverability', slug: 'playbook/email-deliverability' },
   ```

   The `slug` is the file path under `src/content/docs/` without the `.md` extension.
5. Commit. Done.

## Editing an existing chapter

1. Navigate to the file in GitHub
2. Click the pencil icon (top right)
3. Edit in the browser
4. Commit changes

## The chapter template

Copy this structure when starting a new chapter. Match the existing chapters' tone — short sentences, direct, no fluff.

```markdown
---
title: Your Chapter Title
description: One line. This shows in search results and link previews.
---

One or two sentences setting up what this chapter covers and why it matters.

## What it is

A short, plain explanation. Lead with the thing itself, not the history.

## How it works today

Step-by-step or paragraph form. Whatever's clearer.

## What's working

- Bullet
- Bullet
- Bullet

## What hasn't worked

- Bullet
- Bullet

## Current numbers

Reference baselines, with a note to pull live data before quoting.

## Where there's more room

- Bullet
- Bullet
- Bullet
```

A blank template file lives at `_template.md` in the repo root. Copy-paste from there.

## Link conventions

When linking to another chapter, use the full base path:

```markdown
See [Frameworks](/mary-playbook/operating/frameworks/) for the math.
```

**Not** `[Frameworks](/operating/frameworks/)` — that 404s on the live site.

(Why? The site is served from a subpath `/mary-playbook/`. Internal links have to include it.)

## Style guide

- **Short sentences.** Readable over impressive.
- **Specific numbers.** "Email outperformed" is useless. "LOW-RISE campaign closed at 40% vs LOW-RISE ONSITE at 20%" is useful.
- **Verbatim language when it matters.** If a hook, an objection rebuttal, or a discovery question has specific wording that works, quote it exactly.
- **No em-dashes (—).** Use periods, commas, or line breaks. Chris's writing-style preference, applies everywhere.
- **Mark gaps honestly.** "Pull current numbers from Metabase" beats inventing a plausible figure.

## When it breaks

If you push something and the site shows a build failure (check the Actions tab):

1. Open the failed run, find the error in the `build` job
2. Most common cause: bad markdown syntax (unclosed code block, malformed frontmatter)
3. Edit the file, fix the issue, commit again

Or ping Chris.

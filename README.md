# UP Marketing Playbook

Static site for Mary's onboarding. Marketing operating system + playbook for Utility Profit.

Built with [Astro Starlight](https://starlight.astro.build/). Deploys to GitHub Pages on every push to `main`.

## Local dev

```sh
npm install
npm run dev
```

Open http://localhost:4321/mary-playbook.

## Build

```sh
npm run build
```

Output: `dist/`.

## Deploy

Push to `main`. GitHub Actions builds and deploys to Pages automatically. See `.github/workflows/deploy.yml`.

## Structure

```
src/content/docs/
├── index.mdx                  # Landing page (splash)
├── welcome.md                 # Welcome chapter
├── operating-system/          # 5 chapters: business, unit econ, CAC/LTV, market, seasonality
├── playbook/                  # 7 chapters
│   └── channels/              # 5 channel sub-pages
└── operating/                 # quarterly plan, frameworks, reviews
```

Sidebar nav config: `astro.config.mjs`.

## Editing content

Every chapter is a markdown file. Edit, commit, push — site rebuilds.

For internal links, use base-aware paths: `[Frameworks](/mary-playbook/operating/frameworks/)` not `[Frameworks](/operating/frameworks/)`.

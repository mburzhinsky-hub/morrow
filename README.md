# MORROW

Production-ready editorial prototype for **MORROW** — a Russian-language digital magazine about health, work, money, relationships, culture and life.

The repository follows the provided visual reference: warm ivory surfaces, cinematic dark sections, large editorial serif typography, restrained interface details and image-led magazine layouts.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run lint
npm run typecheck
npm run build
```

The project uses a static Next.js export. `npm run build` writes the deployable site to `out/`.

Pushes to `main` automatically build and deploy the site to [GitHub Pages](https://mburzhinsky-hub.github.io/morrow/). The deployment workflow sets `NEXT_PUBLIC_BASE_PATH=/morrow`, so all internal links and Next.js assets work from the repository subpath.

## What is included

- Responsive home page with cinematic hero carousel
- Exactly six editorial verticals: Health, Work, Money, Relationships, Culture, Life
- TODAY curated briefing
- Main stories + verified-source signals
- Worth Discovering feature
- Book of the week
- Events with filters and official-source links
- MORROW WEEKEND
- WATCH page
- Newsletter UI with honest demo state (no fake backend success)
- Search over all articles
- 24 source-backed evergreen articles (4 per vertical)
- Article template with reading column, key facts, source list, sharing, related stories and Article JSON-LD
- Category pages with feature/latest/editor's picks layouts
- Sitemap, robots, OpenGraph metadata and responsive mobile navigation

## Content integrity

The first edition uses official or primary/academic sources including WHO, AASM/SRS, NBER, Harvard Business School, Nature, World Economic Forum, Bank of Russia, SEC/Investor.gov, U.S. Surgeon General, Bureau of Labor Statistics, UNICEF, Stanford Encyclopedia of Philosophy, Project Gutenberg, MoMA, FDA and official museum pages.

The article author is intentionally **Редакция MORROW**; no fictional experts are invented. Content is written conservatively: correlations are not presented as causation, population guidance is not turned into individual medical advice, and financial explainers do not recommend individual securities.

Current-event entries in this snapshot were verified for **17 August 2026** against official Tretyakov Gallery pages. Update current events before a later launch date.

The original reference screenshot was used for art direction only and is not required by the application or included in the production repository.

## Newsletter backend

The subscription form deliberately reports that it is in demo mode. Connect your provider in `components/Newsletter.tsx` (for example, an API route + email platform) before launch.

## Images

Editorial photography is loaded from `images.unsplash.com`. For a commercial launch, replace/confirm the final image set and attribution/licensing policy as needed by your organization.

## Source prompt

The original implementation brief is preserved as `MORROW_PROMPT.md`.

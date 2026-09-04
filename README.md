# AI Lately

**AI is about people, and what they have been up to lately.** [ailately.com](https://ailately.com) reads artificial intelligence through the people who build it: hires, departures, promotions, papers, and filings, interpreted as strategy.

The site has two sections. **Articles** hold data-heavy analysis across every category of AI. **The Signal** is the weekly feed of the biggest AI hires, with a source and a confidence label on every move. An **Opinion** column by the founding editor and a **People** index round it out.

## Stack

- **Next.js 15** (App Router, React 19, static export via `generateStaticParams`)
- **Tailwind CSS v4** with a white ground and a palette drawn exclusively from Pantone Colors of the Year
- Content is **Markdown with YAML frontmatter** in `content/`; The Signal is **JSON** in `content/signal/`
- Self-hosted variable fonts (Newsreader, Inter, JetBrains Mono) under `src/fonts/`, so the build needs no font CDN
- Deployed on **Vercel**, domain through **GoDaddy**

## Layout

```
content/
  articles/      43 launch articles (NN-slug.md), dated
  blog/          5 undated opinion pieces by Ryan Elliott Dennis
  signal/
    weeks/       weekly move feeds (ISO week, e.g. 2026-W36.json)
    rosters/     annual ranked rosters (2025.json, 2026.json)
  pages/         about, editorial-standards, corrections, terms, privacy
  drafts/        review-mode output from the daily newsdesk (created on demand)
docs/            HOUSE_STYLE.md, ARTICLE_PLAN.md, SIGNAL_SCHEMA.md, research notes
scripts/         style linter, guardrail tests, daily newsdesk, scaffolding
src/             Next.js app, components, and content library
```

## Develop

```bash
npm install
npm run dev            # http://localhost:3000
npm run build          # production build
npm run lint:style     # house style: zero via negativa, zero anaphora, word counts
npm run test:guardrails
```

## Writing

Every article and post follows `docs/HOUSE_STYLE.md`. Two rules are absolute and enforced by `scripts/lint-style.mjs`, which fails the build on any violation:

1. **Zero via negativa.** Define things by what they are. Banned tokens anywhere: not, no, never, nothing, none, nobody, nowhere, neither, nor, without, cannot, any n't contraction, any non- compound.
2. **Zero anaphora.** Consecutive sentences, paragraphs, and list items open with different words.

Each piece opens with a hyperbolic epigraph carrying one real statistic, then grounds itself in cited data; 1,000–2,100 words; a `## By the numbers` panel; a `## What to watch` close; and a numbered `## Sources` list in AP style.

Scaffold new pieces:

```bash
npm run new:article -- "Talent Tectonics: A Headline" hiring
npm run new:post -- "A Bold Opinion Headline" agents
```

## The daily newsdesk

`scripts/daily.mjs` gathers leads once a day from **vetted public sources only** — company newsroom RSS, the SEC EDGAR 8-K Item 5.02 JSON API, and the arXiv API — ranks them, drafts one article in house style through the Anthropic Messages API, and enforces the linter before writing the file. A draft that fails the linter is discarded and the next lead is tried.

```bash
DRY_RUN=true node scripts/daily.mjs      # gather and rank leads, draft nothing
ANTHROPIC_API_KEY=... AUTO_PUBLISH=true node scripts/daily.mjs
```

Legal guardrails are code, not comments (`scripts/lib/guard.mjs`), and follow the hiQ Labs v. LinkedIn analysis in `docs`:

- **LinkedIn is blocked.** `linkedin.com` and `licdn.com` are in `FORBIDDEN_HOSTS`; every outbound request routes through one client that raises on them, and a test asserts it.
- **No subscriber data lives here.** A test fails if a subscriber-, customer-, or contact-shaped database appears in the repo. Publishing, payments, and subscribers belong on a separate platform.
- **Personal data stays within an allowlist:** name, role, employer, public source, date. Enforced at the model layer.
- **Every Signal move carries a confidence label** (`confirmed` | `reported` | `inferred`) and a source URL. Required, no default.

### Scheduling

The GitHub Actions workflow `.github/workflows/daily.yml` runs the newsdesk daily at 11:17 UTC. It drafts with **Claude Code on a Pro/Max subscription** (no metered API charge), then enforces the house-style linter and guardrail tests as hard gates before anything publishes.

Configure the repository once:

- Secret `CLAUDE_CODE_OAUTH_TOKEN` — generate locally with `claude setup-token` (requires a Claude Pro or Max plan) and paste the token here. Headless Claude Code usage currently draws on your subscription's usage limits rather than metered API credits.
- Variable `AUTO_PUBLISH` — set to `true` to commit each day's article straight to `content/articles` (Vercel redeploys on push), or leave it unset/`false` to open a pull request for review.

Flip between publish and review by changing that one variable; the code path is identical.

The generation step runs `claude -p "$(cat scripts/daily-prompt.md)"`; edit `scripts/daily-prompt.md` to change what the desk covers. Legacy note: `scripts/daily.mjs` + `scripts/lib/anthropic.mjs` remain for a metered-API path if you ever set `ANTHROPIC_API_KEY` and call them directly, but the scheduled workflow uses the subscription token and never touches the API.

## For machines

- `/llms.txt` and `/llms-full.txt` — the llmstxt.org convention plus a full-text companion
- `/api/signal` — the weekly feed and rosters as JSON
- `/feed.xml`, `/sitemap.xml`, `/robots.txt`

## Editorial independence

AI Lately holds zero equity, tokens, or advisory positions at any company it covers. Standards live at `/editorial-standards`; corrections at `/corrections`. Terms and privacy cover both readers and the people the journalism names.

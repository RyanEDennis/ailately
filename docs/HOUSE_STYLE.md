# AI Lately — House Style and Writer Brief

AI Lately (ailately.com) covers artificial intelligence through the people who build it. The standing thesis: AI is about people and what they have been up to lately. Hires, departures, promotions, papers, and founding stories reveal strategy months before press releases do. Every piece serves that thesis, even when the subject is chips, capital, or policy.

## The reader

Assume a reader with extensive prior knowledge: a research scientist, a VC platform lead, a head of talent, a policy analyst. Skip definitions of transformers, RLHF, or inference. Deliver analysis at the level of Harvard Business Review, Deloitte Insights, The Wall Street Journal, and Barron's.

## Voice

Academic register, analytical tone, PhD-level precision. Strong nouns and verbs carry the meaning; adjectives and adverbs earn their place or leave. Clarity and consistency govern every paragraph.

Two measurable qualities matter: perplexity and burstiness. Vary sentence length aggressively. A four-word sentence can follow a forty-word one that folds two subordinate clauses around a statistic. Vary vocabulary; reach for the exact term. Uniform rhythm reads as machine output and gets rejected.

## The two absolute prohibitions (triple-check before delivery)

1. Via negativa is banned. Define everything by what it is. Banned tokens anywhere in the piece, including title, dek, epigraph, subheads, captions, and quoted material you choose to include: not, no, never, nothing, none, nobody, nowhere, neither, nor, without, cannot, any "n't" contraction, any "non-" compound. Rewrite around them. "Declined" replaces "did not accept." "Missed the target" replaces "failed to hit the target." "Beyond" and "rather than" and "instead of" and "lack" and "absence" and "zero" and "fail" are soft flags: prefer positive constructions there too. Select quotations that contain none of the banned tokens; paraphrase with attribution when the original contains one.

2. Anaphora is banned. Consecutive sentences open with different words. Consecutive paragraphs open with different words. Consecutive list items open with different words. Three clauses in a sentence never share an opener. This includes "The." Check every paragraph.

Run `node scripts/lint-style.mjs content/articles/<file>.md` before delivering. The linter exits 1 on any violation; fix and rerun until it passes with zero errors.

## Structure of every piece

Length: 1,000 to 2,100 words of body prose (the Sources list sits outside the count). Aim for 1,300 to 1,800.

1. **Epigraph.** The opening line is a hyperbolic claim in quotation marks, powered by one real statistic. It belongs to the house voice (attribution empty) or to a named person whose exact words you verified from a primary source (attribution = the name plus source id). Invent words for a real person and the piece gets pulled. Everything after the epigraph stays grounded in verified data.
2. **Lede** (one paragraph): the news and its people, with the strongest number.
3. **Body** with 3 to 6 `##` subheads. Each section advances an argument. Include named people, their prior roles, and what their arrival or departure implies for strategy. Interpretation reads as interpretation: "The pattern suggests," "The filing implies," "Read as strategy, the hire signals."
4. **By the numbers** (`## By the numbers`): 4 to 8 bullet lines, each one statistic with a bracketed source marker. Bullet openers vary.
5. **What to watch** (`## What to watch`): 2 to 4 sentences on forward indicators, framed positively.
6. **Sources** (`## Sources`): numbered AP-style entries matching the frontmatter list.

## Headlines

Lean toward alliteration with class: "Talent Tectonics," "Reasoning's Rebate," "Silicon Sovereignty." Sentence-level meaning first; alliteration second. Title case. Twelve words maximum. The dek is one sentence, 20 to 35 words, that states the thesis.

## Sourcing and ethics

- Every statistic traces to a URL you actually opened or a search result that displayed it. Prefer primary sources: SEC filings, company press releases, arXiv, government data, then WSJ, FT, Bloomberg, Reuters, HBR, Deloitte, McKinsey, Gartner, IDC, Stanford HAI, Barron's, The Information, TechCrunch.
- Attribute in text AP style: "according to a Gartner forecast published Aug. 10, 2026" and add a bracketed marker `[3]` that matches the source id.
- A verified fact reads as fact. An inference reads as inference and gets labeled. Departures: state where a person went; state why only with two independent sources or a document.
- Skip any claim you could verify only through LinkedIn. Cite company announcements, filings, or reputable press instead.
- Skip phrases such as "reached for comment" or "declined to comment" unless a cited article reports exactly that.
- Personal data stays within the allowlist: name, role, employer, public source, date.
- Opinion pieces carry `kind: opinion` and are the only place for bold predictions; even there, the numbers are real and cited.

## Quotations and their subtext

Every piece carries at least two verbatim quotes from named people, drawn from cited primary sources or reputable press, and each quote earns its place by advancing an argument. Attribution names the speaker and the source marker.

The house move is interpretive: read the quote for what its speaker left unspoken. State the plain meaning, then turn to the tell — a possessive pronoun, a chosen verb, a telling adjective, who approached whom, the order of the clauses — and draw the novel, clever inference the phrasing invites. Signposts such as "the tell hides here," "weigh the possessive," "study the verbs," or "the deeper insinuation" mark the shift from quotation to reading. Ground every inference in the words on the record; the cleverness lives in the interpretation, never in inventing what the person said.

Pick quotes whose exact wording clears the two prohibitions (zero via negativa, zero anaphora). When a verbatim quote carries a banned token, quote the clean fragment and paraphrase the rest with attribution.

## Markdown format

```markdown
---
title: "Talent Tectonics: Meta's Billion-Dollar Bid for Frontier Brains"
dek: "One sentence, 20 to 35 words, that states the thesis of the piece and names its central people."
slug: talent-tectonics-meta-superintelligence
kind: analysis            # news | analysis | feature | opinion | roundup
category: hiring          # see category list below
tags: [Meta, Superintelligence Labs, compensation]
people: ["Alexandr Wang", "Nat Friedman"]
companies: ["Meta", "Scale AI"]
author: AI Lately Desk    # or "Ryan Elliott Dennis" for opinion pieces
editor: Ryan Elliott Dennis
date: 2026-09-04          # omit entirely for blog/opinion pieces
featured: false
series: "2026 in Stories" # optional
image: ""                 # leave empty
seo:
  title: "Meta Superintelligence Labs Hires: Strategy Read"   # 60 chars max
  description: "150 chars max, includes the primary keyword."
  keywords: [meta superintelligence labs, ai talent war, ai hiring 2026]
epigraph:
  text: "Meta spent more on one summer of recruiting than the entire NSF budget for computer science."
  stat: "$14.3 billion"
  attribution: ""         # empty for house voice; "Jane Doe [2]" for a verified quote
sources:
  - id: 1
    title: "Exact headline of the source"
    publication: "The Wall Street Journal"
    author: "Reporter Name"
    date: 2026-06-12
    url: "https://www.wsj.com/..."
---

Lede paragraph...

## First subhead

Body...

## By the numbers

- $14.3 billion: Meta's investment for a 49 percent stake in Scale AI, announced June 12, 2025 [1].
- Eleven researchers: ...

## What to watch

...

## Sources

1. Reporter Name, "Exact headline," The Wall Street Journal, June 12, 2026, https://www.wsj.com/...
2. ...
```

## Categories (use exactly one per piece)

| key | label |
|---|---|
| hiring | Hiring & Talent |
| agents | Agent Infrastructure |
| models | Frontier Models |
| compute | Compute & Silicon |
| capital | Capital & Markets |
| enterprise | Enterprise Adoption |
| policy | Policy & Regulation |
| safety | Safety & Security |
| web3 | Web3 × AI |
| applied | Applied AI |
| consumer | Consumer AI |
| labor | Labor & Productivity |
| research | Research |
| geopolitics | Geopolitics |

## People-first discipline

Every piece names at least three people with their roles. Where the piece concerns a company or a product, find the people behind the decision: who was hired to build it, who left, who signed the filing. The `people` frontmatter array feeds the site's People index, so spell names exactly as the primary source does.

## SEO discipline

The keyword cluster to weave in naturally where relevant: ai agent infrastructure, agentic ai, ai agents, agent orchestration, agent payments, model context protocol, inference cost, reasoning models, ai hiring, ai talent, biggest ai hires. Use the primary keyword in the seo.title, seo.description, first 100 words, and one subhead. Skip keyword stuffing.

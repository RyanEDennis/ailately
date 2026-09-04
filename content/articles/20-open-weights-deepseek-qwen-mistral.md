---
title: "Open Weights, Open Questions"
dek: "DeepSeek's Liang Wenfeng, Alibaba's largely anonymous Qwen organization and Mistral's Arthur Mensch built three distinct paths to open-weight scale, and a 234-million-user app proves the category converts into genuine usage, past mere benchmark bragging rights."
slug: open-weights-deepseek-qwen-mistral
kind: analysis
category: models
tags: [open-weight models, DeepSeek, Qwen, Mistral AI, open source ai]
people: ["Liang Wenfeng", "Arthur Mensch", "Yang Zhilin"]
companies: ["DeepSeek", "Alibaba", "Mistral AI", "Moonshot AI", "ASML"]
author: AI Lately Desk
editor: Ryan Elliott Dennis
date: 2026-09-04
order: 20
featured: false
image: ""
seo:
  title: "Open Weights 2026: DeepSeek, Qwen and Mistral Compared"
  description: "DeepSeek, Alibaba's Qwen and Mistral AI built three distinct paths to open-weight scale, from Liang Wenfeng to Arthur Mensch."
  keywords: [open weight models, deepseek, qwen3, mistral ai, open source llm]
epigraph:
  text: "One open-weight app crossed 234 million users while its rivals debated whether openness could survive an IPO."
  stat: "234 million"
  attribution: ""
sources:
  - id: 1
    title: "DeepSeek"
    publication: "Wikipedia"
    author: "Wikipedia contributors"
    date: 2026-08-01
    url: "https://en.wikipedia.org/wiki/DeepSeek"
  - id: 2
    title: "Qwen"
    publication: "Wikipedia"
    author: "Wikipedia contributors"
    date: 2026-08-01
    url: "https://en.wikipedia.org/wiki/Qwen"
  - id: 3
    title: "Mistral AI"
    publication: "Wikipedia"
    author: "Wikipedia contributors"
    date: 2026-08-01
    url: "https://en.wikipedia.org/wiki/Mistral_AI"
---

DeepSeek's R1 model climbed to the top of the U.S. iOS App Store's free-app chart Jan. 27, 2025, a single day's surge that helped erase roughly 18 percent of Nvidia's stock price [1]. Eighteen months later, the open-weight tier that R1 announced to Western markets had matured into three distinct operating models: DeepSeek chasing a 2027 IPO under founder Liang Wenfeng, Alibaba's Qwen scaling to 234 million app users behind an organization that keeps its individual researchers almost entirely out of public view, and Mistral AI running as a personality-driven venture around chief executive Arthur Mensch [1][2][3]. Open weights turned out to describe a license, distinct from any single business model or research culture.

## A Quant Fund's Frontier Bet

Liang Wenfeng founded the quantitative hedge fund High-Flyer in 2015 and used its computing infrastructure and capital to seed DeepSeek, retaining an 84 percent stake through shell entities as of mid-2024 [1]. That lineage matters: DeepSeek's models emerged from a finance-sector compute budget rather than a venture-backed research lab, a structural difference from nearly every other frontier or open-weight competitor.

DeepSeek's release cadence accelerated through 2025 and into 2026, tracing a path distinct from the slower, more deliberate schedules many Western labs kept through the same stretch. December 2024 brought V3-Base and its chat sibling V3; a refreshed edition, V3-0324, followed that March under an MIT license permissive enough for nearly any commercial use. Summer and fall layered on capability quickly: an August update let the model toggle between deliberate step-by-step reasoning and a faster direct-response mode, a September revision addressed language-quality artifacts users had flagged, and a December release added a specialized reasoning variant, closing out 2025 with four distinct point updates inside twelve months [1]. A V4 preview, spanning 284-billion and 1.6-trillion-parameter configurations, arrived April 2026, skipping the widely anticipated "R2" designation entirely and suggesting DeepSeek's internal roadmap diverged from what outside analysts expected [1]. Capital followed capability: DeepSeek closed a $7 billion Series A in May 2026 at a $52 billion valuation, reportedly the third-highest among privately held AI companies, then confirmed IPO preparations for a potential 2027 listing that July [1]. Anthropic separately accused DeepSeek in February 2026 of using fraudulent accounts to harvest Claude's outputs for training data, a dispute that underlines how contested the boundary between "open" research and competitive extraction has become [1].

## Qwen's Anonymous Scale

Alibaba's Qwen3 family launched April 28, 2025, spanning dense models from 0.6 billion to 32 billion parameters alongside mixture-of-experts configurations at 30B-A3B and 235B-A22B scale, trained across 36 trillion tokens in 119 languages [2]. Apache 2.0 licensing covers the open tier; a proprietary Qwen3-Max variant exceeding one trillion parameters stays behind Alibaba's own API [2].

Scale followed quickly. The Qwen app reported 234 million users by May 2026, and Hugging Face hosts more than 200,000 Qwen model variants, with a single lightweight release, Qwen3-VL-2B-Instruct, surpassing 18 million downloads on its own [2]. Distinctively, Qwen3's development stayed attributed to Alibaba as an institution rather than to any individual researcher or team lead in available reporting, a sharp contrast to the profile treatment Western labs extend routinely to figures like Mensch or DeepMind's research leadership. Read as strategy, Alibaba's approach treats Qwen as a corporate product line rather than a showcase for star researchers, prioritizing distribution scale over the recruiting leverage individual celebrity researchers typically generate.

## Mensch's Personality-Led Path

Mistral AI charted the opposite course. Arthur Mensch, who worked previously at Google DeepMind, co-founded Mistral in April 2023 and remains its chief executive and public face [3]. ASML led a €2 billion funding round in September 2025 that valued Mistral at €12 billion, roughly $14 billion, with the Dutch lithography giant itself taking an 11 percent stake through a $1.5 billion investment [3] — a striking pairing of a semiconductor-equipment maker and a European foundation-model company, evidence that chip supply and model development increasingly intertwine even at the corporate-ownership level.

Mensch kept Mistral acquisitive through 2026: Koyeb, a Paris-based infrastructure startup, joined the company in February alongside a new enterprise partnership with Accenture; an $830 million raise in March funded data centers near Paris and in Sweden; Emmi AI, an Austrian industrial-simulation firm, joined in May [3]. Each move expands Mistral's footprint past model releases and into infrastructure and vertical application layers, a diversification strategy distinct from either DeepSeek's finance-fund independence or Qwen's platform-embedded distribution.

## A Crowded Middle Tier

Moonshot AI, founded by Yang Zhilin, extended the pattern further. Its Kimi line grew through 2026 into a K3 generation that reporting described as the second-largest and second-most-powerful open-weight large language model on the market by mid-2026, trailing only DeepSeek's own flagship in scale [2]. Zhipu, operating its international arm as Z.ai, and MiniMax rounded out a Chinese open-weight cohort large enough that Western labs began treating the category as a competitive bloc rather than a scattering of individual projects. OpenAI answered directly with gpt-oss, its first open-weight release since GPT-2, shipping gpt-oss-120b and gpt-oss-20b under an Apache 2.0 license in August 2025 — a defensive move that acknowledged how much developer mindshare the Chinese labs had already captured. Nvidia pursued a parallel strategy with its Nemotron family, open reference models tuned for post-training and distillation work rather than standalone chat use, positioning the chipmaker as an open-weight contributor even as it profits from every lab's training runs regardless of licensing philosophy. Meta's Llama line, by contrast, slowed its public cadence through 2026 as the company folded model development into its restructured superintelligence organization, a shift toward tighter internal control distinct from the fully open posture Llama built its early reputation around.

## What the Category Proves

Three operating models converging on comparable technical capability suggests open weights function less as a single competitive strategy than as a licensing choice compatible with almost any corporate structure. A quant-fund spinoff, a hyperscaler's product division and a venture-backed European startup all reached frontier-adjacent capability through the same permissive-license mechanism, even while pursuing entirely separate paths to revenue and different levels of researcher visibility.

The usage numbers matter more than any single benchmark score. Qwen's 234 million app users and its 200,000-plus Hugging Face variants demonstrate real developer and consumer adoption, a step past theoretical capability parity with closed labs alone. DeepSeek's App Store dominance in January 2025 proved the same point earlier and more dramatically, at a scale severe enough to move Nvidia's market capitalization in a single trading session. Open weights, once treated as an underdog's marketing angle, now command distribution numbers closed labs must actually contend with.

## By the numbers

- 18 percent: the drop in Nvidia's stock price attributed to DeepSeek's Jan. 27, 2025 App Store surge [1].
- 234 million: reported Qwen app users as of May 2026 [2].
- $52 billion: DeepSeek's valuation following a $7 billion Series A closed in May 2026 [1].
- 36 trillion: tokens, across 119 languages, used to train the Qwen3 family [2].
- €12 billion: Mistral AI's valuation after ASML's €2 billion round, September 2025 [3].
- 200,000: Qwen model variants hosted on Hugging Face as of the sources reviewed [2].
- 18 million: downloads recorded for the single lightweight Qwen3-VL-2B-Instruct release [2].

## What to watch

DeepSeek's 2027 IPO preparations will test whether an "open" research organization sustains its licensing philosophy once public-market reporting requirements and shareholder expectations enter the picture. Qwen's next major release, tracked against its current 234 million-user base, will show whether Alibaba's anonymous-team approach keeps compounding distribution or eventually needs individual research figures to sustain competitive credibility. Mistral's data-center buildout near Paris and in Sweden, once operational, will indicate whether Mensch's acquisition strategy converts into inference capacity Mistral actually controls, rather than capacity it continues renting from partners.

## Sources

1. Wikipedia contributors, "DeepSeek," Wikipedia, accessed Sept. 4, 2026, https://en.wikipedia.org/wiki/DeepSeek
2. Wikipedia contributors, "Qwen," Wikipedia, accessed Sept. 4, 2026, https://en.wikipedia.org/wiki/Qwen
3. Wikipedia contributors, "Mistral AI," Wikipedia, accessed Sept. 4, 2026, https://en.wikipedia.org/wiki/Mistral_AI

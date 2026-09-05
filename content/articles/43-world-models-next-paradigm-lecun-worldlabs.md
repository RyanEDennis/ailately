---
title: "World Models and the Next Paradigm"
dek: "Yann LeCun quit Meta and raised $1.03 billion for AMI Labs, Fei-Fei Li shipped Marble, and four Google veterans launched Discovery Loop, together signaling that the field's next scaling bet runs through physical understanding, a wager bigger than another round of chatbot scaling."
slug: world-models-next-paradigm-lecun-worldlabs
kind: analysis
category: research
tags: ["world models", "AMI Labs", "World Labs", "Physical Intelligence", "Discovery Loop"]
people: ["Yann LeCun", "Alexandre LeBrun", "Fei-Fei Li", "Lachy Grooms", "Jack Parker-Holder", "Jeff Dean"]
companies: ["AMI Labs", "World Labs", "Physical Intelligence", "Figure AI", "Google DeepMind", "Nvidia", "Discovery Loop"]
author: AI Lately Desk
editor: Ryan Elliott Dennis
date: 2026-09-03
order: 43
featured: false
image: ""
seo:
  title: "World Models 2026: LeCun, World Labs, Genie 3, Cosmos"
  description: "AMI Labs, World Labs, Physical Intelligence, and Discovery Loop raised billions in 2026 betting world models succeed large language models as AI's next paradigm."
  keywords: [world models ai, ami labs yann lecun, world labs fei-fei li, physical intelligence robotics, genie 3 deepmind]
epigraph:
  text: "Yann LeCun quit Meta in November and raised $1.03 billion for a company that still declines to call its own technology 'AGI.'"
  stat: "$1.03 billion"
  attribution: ""
sources:
  - id: 1
    title: "AMI Labs Coverage"
    publication: "TechCrunch"
    author: "Anna Heim, Julie Bort, Kate Park"
    date: 2026-07-16
    url: "https://techcrunch.com/tag/ami-labs/"
  - id: 2
    title: "World Labs Coverage"
    publication: "TechCrunch"
    author: "Rebecca Bellan, Marina Temkin"
    date: 2026-02-18
    url: "https://techcrunch.com/tag/world-labs/"
  - id: 3
    title: "Physical Intelligence Coverage"
    publication: "TechCrunch"
    author: "Connie Loizos"
    date: 2026-04-16
    url: "https://techcrunch.com/tag/physical-intelligence/"
  - id: 4
    title: "Figure AI News"
    publication: "Figure"
    author: "Figure"
    date: 2025-09-16
    url: "https://www.figure.ai/news"
  - id: 5
    title: "Genie 3: A New Frontier for World Models"
    publication: "Google DeepMind"
    author: "Jack Parker-Holder and Shlomi Fruchter"
    date: 2025-08-05
    url: "https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/"
  - id: 6
    title: "NVIDIA Cosmos"
    publication: "Nvidia"
    author: "Nvidia"
    date: 2026-09-03
    url: "https://www.nvidia.com/en-us/ai/cosmos/"
---

Researchers who spent a decade scaling language models spent 2026 betting on something else entirely: systems that learn how physical space behaves, a target more ambitious than predicting which word comes next. Yann LeCun departed Meta on Nov. 20, 2025, and by March had raised $1.03 billion for AMI Labs, a startup he founded around exactly that bet [1]. Fei-Fei Li's World Labs, Physical Intelligence, Figure AI, and a fresh venture from four Google veterans all chased the same thesis from different angles, pulling billions in capital toward world models as 2026's clearest answer to a question the field had quietly started asking: what comes after transformer scaling plateaus?

## LeCun's Second Act

LeCun spent years arguing publicly that large language models sat on a dead-end path toward genuine machine intelligence, and his exit from Meta let him test that argument with his own capital and hires. AMI Labs confirmed its existence in December 2025, reportedly seeking a valuation above $5 billion even before shipping a product [1]. TechCrunch profiled the company's leadership in January and reported the completed $1.03 billion raise in March, a fundraising pace suggesting investors shared LeCun's conviction more readily than his former employer had [1].

CEO Alexandre LeBrun runs day-to-day operations under LeCun's technical direction, and LeBrun drew a deliberate line in July when he explained why AMI Labs avoids "AGI" and "superintelligence" framing entirely [1]. The distinction matters strategically: a company selling world understanding as a narrower, more falsifiable capability invites less scrutiny than one claiming a path to general intelligence, even while pursuing research LeCun himself has called foundational to any eventual general system.

## Fei-Fei Li Builds the Marble

Li's World Labs took a parallel path with a longer runway. Founders Justin Johnson, Ben Mildenhall, and Christoph Lassner joined Li at launch, bringing computer-vision and graphics credentials from careers spanning academic and industry research [2]. The company emerged from stealth with $230 million in September 2024, added Ashton Kutcher's Sound Ventures as a backer that October, then shipped Marble, its first commercial product, in November 2025 [2].

Marble generates what World Labs describes as spatially coherent, persistent 3D worlds from images, video, text, or layout inputs, technology aimed squarely at the gap between a flat generated image and an environment an agent or a human can actually navigate [2]. Momentum culminated in a $1 billion valuation round in February 2026, with Autodesk alone contributing $200 million, joining a backer list spanning Nvidia, Adobe, Intel, Samsung, Salesforce, and Databricks [2]. Corporate strategics rarely write checks that large absent a concrete product roadmap, and Autodesk's stake signals design and engineering software providers expect world models to reshape how professionals build digital environments.

## Robots Learn to Generalize

Physical Intelligence pushed the thesis toward embodiment directly, training models meant to control robot bodies, a step past generating images of worlds those bodies would only ever inhabit on screen. Co-founder Lachy Grooms, a Stripe veteran, helped build what TechCrunch has called Silicon Valley's buzziest robot-brain startup [3]. The company shipped π0.5 in April 2025, described as achieving open-world generalization, then followed with π0.7 exactly one year later, a model the company says exhibits a genuine step-change in generalization capability rather than incremental improvement [3]. Reports in March 2026 placed the company back in talks for another billion-dollar round, evidence its earlier large raise had already been substantially deployed [3].

Figure AI pursued the humanoid-hardware side of the same bet, closing a Series C that exceeded $1 billion at a $39 billion post-money valuation in September 2025, per the company's own announcement [4]. A world model trained purely on video teaches an AI what physical interaction looks like; a humanoid robot gives that understanding a body capable of testing it against gravity, friction, and the countless small failures a simulation alone rarely reveals.

## The Incumbents Build Their Own Worlds

Google DeepMind and Nvidia proved the thesis extended well past venture-backed startups. DeepMind's Genie 3, announced Aug. 5, 2025 as a limited research preview, generates interactive environments from text prompts at 24 frames per second and 720p resolution, sustaining consistency for several minutes and modeling water, lighting, and ecosystem behavior directly [5]. Lead researchers Jack Parker-Holder and Shlomi Fruchter built the system specifically to train embodied agents inside generated worlds, treating the environment itself as training infrastructure rather than a demo [5].

Nvidia answered with Cosmos, a platform combining generative world foundation models, tokenizers, and data-curation pipelines aimed at robotics, autonomous vehicles, and industrial simulation [6]. The current Cosmos 3 release uses a Mixture-of-Transformers architecture separating reasoning from generation, and Nvidia's own ecosystem page lists Skild AI among its physical-AI partners, a sign the chipmaker intends Cosmos as infrastructure other world-model startups build atop rather than a walled competitor to them [6].

## What the Exodus Implies

Jeff Dean, Sanjay Ghemawat, Oriol Vinyals, and Quoc Le, four researchers whose careers built much of Google's modern AI infrastructure, launched Discovery Loop on Aug. 5, 2026. Their departure from an employer that already commands vast compute and data resources carries a signal distinct from LeCun's split with Meta: even researchers with maximal internal resources judged an independent venture worth the risk, a pattern that recurs across nearly every company named in this piece.

Read together, these bets describe a field hedging against the possibility that transformer scaling alone stops producing proportional gains. World models offer a different scaling axis entirely, one measured in physical coherence and predictive accuracy about real environments rather than token-prediction loss. Capital chasing that axis, across a startup founded by a Turing Award winner and a chipmaker's own product roadmap alike, suggests the next paradigm shift will arrive from researchers betting years of runway on physical understanding well before the broader market fully prices the wager.

## By the numbers

- LeCun raised $1.03 billion for AMI Labs by March 2026, having left Meta the previous November [1].
- World Labs reached a $1 billion valuation in February 2026, up from $230 million at its 2024 launch [2].
- Autodesk alone contributed $200 million to that February 2026 World Labs round [2].
- Figure AI closed north of $1 billion at a $39 billion post-money valuation in September 2025 [4].
- Genie 3 sustains generated-world consistency for several minutes at 24 frames per second, per DeepMind's own account [5].
- Physical Intelligence shipped π0.7 exactly twelve months after π0.5, in April 2026 [3].

## What to watch

AMI Labs' next product announcement will test whether LeBrun's careful avoidance of AGI framing survives contact with a shipping product investors expect to justify a multibillion-dollar valuation. World Labs' Marble adoption among design and engineering firms deserves tracking as the clearest signal of whether Autodesk's $200 million bet pays off commercially as well as technically. Physical Intelligence's reported new funding round, if it closes, will show whether robot-brain valuations keep pace with the humanoid-hardware valuations Figure AI already commands. Discovery Loop's first public research output, whenever it arrives, should reveal which piece of the world-model thesis four of Google's most senior researchers judged worth building outside Google's own walls.

## Sources

1. Anna Heim, Julie Bort, and Kate Park, "AMI Labs Coverage," TechCrunch, various 2025-2026 dates through July 16, 2026, https://techcrunch.com/tag/ami-labs/
2. Rebecca Bellan and Marina Temkin, "World Labs Coverage," TechCrunch, various dates through Feb. 18, 2026, https://techcrunch.com/tag/world-labs/
3. Connie Loizos, "Physical Intelligence Coverage," TechCrunch, various dates through April 16, 2026, https://techcrunch.com/tag/physical-intelligence/
4. Figure, "Figure AI News," Figure, Sept. 16, 2025, https://www.figure.ai/news
5. Jack Parker-Holder and Shlomi Fruchter, "Genie 3: A New Frontier for World Models," Google DeepMind, Aug. 5, 2025, https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/
6. Nvidia, "NVIDIA Cosmos," Nvidia, accessed Sept. 3, 2026, https://www.nvidia.com/en-us/ai/cosmos/

---
title: "The Custom Silicon Architects"
dek: "OpenAI, Google, Amazon, and Meta each built proprietary chips alongside their Nvidia and AMD orders in 2026, a hedge that Google's million-unit TPU sale to Anthropic turned into a genuine second market."
slug: custom-silicon-architects
kind: analysis
category: compute
tags: ["custom silicon", "TPU", "Trainium", "MTIA", "inference cost"]
people: ["Amin Vahdat", "Hock Tan", "Sam Altman", "Greg Brockman"]
companies: ["Google", "Broadcom", "OpenAI", "Amazon", "Meta", "Anthropic", "Microsoft", "TSMC"]
author: AI Lately Desk
editor: Ryan Elliott Dennis
date: 2026-09-01
order: 22
featured: false
image: ""
seo:
  title: "Custom AI Chips 2026: TPU, Trainium, MTIA, Jalapeño"
  description: "How Google's Ironwood TPU, Amazon's Trainium, Meta's MTIA, and OpenAI's Broadcom chip reshape inference cost and hyperscaler chip strategy in 2026."
  keywords: [custom ai chip 2026, google tpu ironwood, aws trainium, meta mtia, inference cost, openai broadcom chip]
epigraph:
  text: "One company sold a single customer a million chips built to think, and called it a side business."
  stat: "1 million TPUs"
  attribution: ""
sources:
  - id: 1
    title: "Ironwood: The first Google TPU for the age of inference"
    publication: "Google Cloud Blog"
    author: "Google Cloud"
    date: 2025-04-09
    url: "https://blog.google/products/google-cloud/ironwood-tpu-age-of-inference/"
  - id: 2
    title: "OpenAI"
    publication: "Wikipedia"
    author: "Wikipedia contributors"
    date: 2026-09-01
    url: "https://en.wikipedia.org/wiki/OpenAI"
  - id: 3
    title: "Broadcom"
    publication: "Wikipedia"
    author: "Wikipedia contributors"
    date: 2026-09-01
    url: "https://en.wikipedia.org/wiki/Broadcom"
  - id: 4
    title: "Anthropic"
    publication: "Wikipedia"
    author: "Wikipedia contributors"
    date: 2026-09-01
    url: "https://en.wikipedia.org/wiki/Anthropic"
  - id: 5
    title: "AWS Trainium"
    publication: "Wikipedia"
    author: "Wikipedia contributors"
    date: 2026-09-01
    url: "https://en.wikipedia.org/wiki/AWS_Trainium"
  - id: 6
    title: "Meta Platforms"
    publication: "Wikipedia"
    author: "Wikipedia contributors"
    date: 2026-09-01
    url: "https://en.wikipedia.org/wiki/Meta_Platforms"
---

Google sold Anthropic access to up to a million Tensor Processing Units in October 2025, a single transaction promising more than a gigawatt of added compute capacity through 2026 [4]. The scale of that order turned a decade-old internal chip program into a merchant business capable of outfitting a frontier lab, and it crystallized a pattern playing out across every major AI company this year: buy Nvidia, buy AMD, then build your own silicon anyway.

## Broadcom's Second Customer Becomes a Product Line

A custom AI chip took shape quietly starting in 2024, when Broadcom and OpenAI began co-designing hardware meant to loosen OpenAI's dependence on Nvidia's GPUs as demand climbed past what any single supplier could satisfy [2][3]. The project surfaced publicly on June 24, 2026, under a name with personality: Jalapeño, manufactured on a 3-nanometer TSMC process and built to handle training and inference in a single design [2]. OpenAI targeted a rollout by the close of 2026, a timeline that puts finished silicon in production barely two and a half years after the partnership began.

Broadcom, led by president and chief executive Hock Tan, treats this kind of engagement as a repeatable business rather than a one-off favor. Its XPU division — custom application-specific chips built to a client's exact specification — already supplies Google's TPU line since that program's inception and co-develops Meta's MTIA accelerators, alongside ByteDance among its customer roster [3]. OpenAI's arrival as a Broadcom client places the company squarely inside an ecosystem Google and Meta helped build, an irony given how sharply OpenAI competes against both for frontier-model supremacy.

## Google Turns a Decade of TPUs Into a Sales Pitch

Ironwood, Google's seventh-generation TPU, launched at Google Cloud Next 25 on April 9, 2025, as the company's first accelerator engineered specifically for inference rather than training [1]. A full 9,216-chip pod delivers 42.5 exaflops of peak compute; each individual chip carries 192 gigabytes of high-bandwidth memory, six times Trillium's allotment, moving data at 7.37 terabytes per second, a 4.5-fold bandwidth jump [1]. Power efficiency doubled versus the prior generation and improved roughly thirtyfold against Google's original 2018 TPU.

Amin Vahdat, Google's vice president and general manager for machine learning, systems, and cloud AI, framed Ironwood's purpose plainly: "Ironwood is our most powerful, capable and energy efficient TPU yet, designed to power thinking, inferential AI models at scale" [1]. Anthropic's October 2025 commitment to buy up to a million of these chips validated that pitch at a scale few outside Google's own infrastructure had previously approached [4]. Read as strategy, the sale signals confidence that TPUs perform competitively enough against Nvidia's merchant silicon to win business from a lab with every financial incentive to shop broadly, and Anthropic's own 2026 compute roster — a roughly $45 billion Nscale deal, a Microsoft-brokered $30 billion Azure commitment, gigawatts of AMD chips — shows a company diversifying suppliers aggressively rather than settling on any single vendor [4].

## Amazon's Rainier and the Trainium Ladder

Amazon built Project Rainier around Trainium2, the chip generation now running Anthropic's Claude models in production [5]. A third generation, Trainium3, followed, and Amazon disclosed deals using it involving both Anthropic and OpenAI, a striking detail given the fierce rivalry between those two labs elsewhere in the compute market [5]. Amazon revealed a fourth generation, Trainium4, at its re:Invent conference in late 2025, extending a cadence that now produces a meaningfully upgraded chip roughly once a year [5].

Amazon's approach differs from Google's in emphasis: where Ironwood markets itself explicitly as an inference specialist, Trainium's public narrative centers on cost and availability, a chip Amazon can manufacture at the volume its own cloud customers demand, sidestepping Nvidia's allocation queue entirely. Rainier's role hosting Claude gives Amazon leverage Google's TPU program lacks outright — a marquee frontier model running natively on Amazon-designed hardware, inside Amazon's own data centers, generating the kind of reference case that closes deals with smaller customers evaluating the same silicon.

## Meta Hedges With MTIA and Nvidia at Once

A roadmap of four new in-house chips arrived March 11, 2026, disclosed under Meta's Training and Inference Accelerator program, following years of catching up after 2022, when the company still leaned on general-purpose processors for AI workloads its rivals had already shifted onto GPUs [6]. Less than a month earlier, Meta announced a long-term partnership with Nvidia, a sequencing that reads less as contradiction than as parallel insurance: Meta commits to Nvidia's roadmap for the volume its Llama successors and recommendation systems demand today, while MTIA absorbs workloads narrow enough for custom silicon to beat a general-purpose GPU on cost [6].

Every hyperscaler now runs this dual track, though Meta's public sequencing — Nvidia partnership, then chip roadmap, weeks apart — makes the hedge unusually visible. Broadcom's role co-designing MTIA alongside its OpenAI and Google work means a single chip design house now touches three of the largest custom-silicon programs in the industry simultaneously, a concentration of engineering talent and manufacturing relationships that gives Broadcom outsized influence over how quickly each customer's roadmap actually ships.

## What Custom Silicon Does to the Cost of a Token

Custom silicon earns its capital expense through one lever above all others: removing a merchant GPU vendor's margin from every unit of compute a company consumes internally, then, where the economics allow, reselling that same advantage to outside customers at a markup thinner than Nvidia's own. Ironwood's memory-bandwidth and power-efficiency gains translate directly into inference served per dollar of electricity, the line item increasingly dominant in AI economics as reasoning models multiply the tokens generated per query. Amazon's Trainium ladder pursues the identical outcome through volume manufacturing rather than architectural specialization alone.

The strategic tell sits in who buys whose chips. Anthropic running on Google TPUs, Amazon Trainium, and AMD GPUs simultaneously, alongside a Google customer relationship, demonstrates that even a lab racing against Google's own Gemini models will adopt Google's hardware when the economics justify it, separating infrastructure competition cleanly from model competition. Cost per token increasingly outranks brand loyalty in deciding which silicon wins a given workload.

## By the numbers

- 1 million: the ceiling on TPUs Google agreed to supply Anthropic under an October 2025 deal, adding potentially more than a gigawatt of compute by 2026 [4].
- 42.5 exaflops: Ironwood's peak compute at full 9,216-chip pod scale, announced April 9, 2025 [1].
- Six times: Ironwood's per-chip memory increase over the prior Trillium generation, to 192 gigabytes of high-bandwidth memory [1].
- June 24 marked OpenAI's public unveiling of Jalapeño, its Broadcom-designed custom chip, after two years of joint development [2].
- Four new in-house chips: the MTIA roadmap Meta disclosed March 11, 2026 [6].
- Trainium4 arrived at AWS re:Invent in late 2025, the fourth generation in Amazon's custom accelerator line [5].
- $45 billion: Anthropic's Nscale compute agreement, signed August 2026, alongside its Google TPU and AWS Trainium commitments [4].

## What to watch

Jalapeño's actual production yields, once TSMC ships volume in late 2026, will test whether OpenAI's chip closes any meaningful gap against Nvidia pricing or serves primarily as negotiating leverage in future GPU contracts. Google's willingness to sell TPU capacity to additional outside labs beyond Anthropic, at similar scale, would confirm the million-unit deal reflects a genuine commercial strategy rather than a single exceptional arrangement. Amazon's Trainium4 rollout and its adoption rate among customers outside Anthropic deserve scrutiny, as does whether Meta's MTIA roadmap ships chips fast enough to matter before its Nvidia partnership locks in years of parallel demand regardless.

## Sources

1. Google Cloud, "Ironwood: The first Google TPU for the age of inference," Google Cloud Blog, April 9, 2025, https://blog.google/products/google-cloud/ironwood-tpu-age-of-inference/
2. Wikipedia contributors, "OpenAI," Wikipedia, accessed Sept. 1, 2026, https://en.wikipedia.org/wiki/OpenAI
3. Wikipedia contributors, "Broadcom," Wikipedia, accessed Sept. 1, 2026, https://en.wikipedia.org/wiki/Broadcom
4. Wikipedia contributors, "Anthropic," Wikipedia, accessed Sept. 1, 2026, https://en.wikipedia.org/wiki/Anthropic
5. Wikipedia contributors, "AWS Trainium," Wikipedia, accessed Sept. 1, 2026, https://en.wikipedia.org/wiki/AWS_Trainium
6. Wikipedia contributors, "Meta Platforms," Wikipedia, accessed Sept. 1, 2026, https://en.wikipedia.org/wiki/Meta_Platforms

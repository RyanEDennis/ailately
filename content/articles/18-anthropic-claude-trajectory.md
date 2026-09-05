---
title: "Claude's Climb"
dek: "Nine named releases across thirteen months, a $65 billion run rate and a compute roster spanning Google, Amazon, Microsoft, Nvidia, AMD and Nscale trace how Jared Kaplan, Chris Olah and Jan Leike scaled Claude past its early reputation as the cautious model."
slug: anthropic-claude-trajectory
kind: analysis
category: models
tags: [Anthropic, Claude, Claude Code, AI compute, research leadership]
people: ["Jared Kaplan", "Chris Olah", "Jan Leike", "Amanda Askell"]
companies: ["Anthropic", "Google", "Amazon", "Microsoft", "Nvidia", "Nscale"]
author: AI Lately Desk
editor: Ryan Elliott Dennis
date: 2026-08-17
order: 18
featured: false
image: ""
seo:
  title: "Claude's Climb: Anthropic's Model and Compute Trajectory"
  description: "Anthropic's Claude release cadence, research leadership and multi-cloud compute deals behind a $65 billion revenue run rate."
  keywords: [claude ai, anthropic models, claude code, anthropic compute, ai research leadership]
epigraph:
  text: "Anthropic named nine Claude generations in thirteen months and signed enough compute across five separate partners to power a mid-size nation."
  stat: "$45 billion"
  attribution: ""
sources:
  - id: 1
    title: "Claude Sonnet 4.5"
    publication: "Anthropic"
    author: "Anthropic"
    date: 2025-09-29
    url: "https://www.anthropic.com/news/claude-sonnet-4-5"
  - id: 2
    title: "Claude (language model)"
    publication: "Wikipedia"
    author: "Wikipedia contributors"
    date: 2026-08-01
    url: "https://en.wikipedia.org/wiki/Claude_(language_model)"
  - id: 3
    title: "Anthropic"
    publication: "Wikipedia"
    author: "Wikipedia contributors"
    date: 2026-08-01
    url: "https://en.wikipedia.org/wiki/Anthropic"
  - id: 4
    title: "Anthropic's annualized revenue surges to $65B"
    publication: "TechCrunch"
    author: "TechCrunch Staff"
    date: 2026-08-17
    url: "https://techcrunch.com/2026/08/17/anthropics-annualized-revenue-surges-to-65b/"
---

Anthropic shipped Sonnet 4.5 on Sept. 29, 2025 with a SWE-bench Verified score of 77.2 percent, rising to 82 percent in a high-compute configuration, according to the company's own announcement [1]. That release sat mid-sequence in a cadence running from Claude 3.5 Sonnet in mid-2024 through Sonnet 5 in June 2026, nine named generations tracked across roughly two years, most of them clustered inside a single thirteen-month sprint [2]. Behind the naming scheme sat a smaller set of decisions: which research leaders got to define Claude's technical direction, and which compute partners got paid to keep the sprint funded. Jared Kaplan, Chris Olah and Jan Leike answer the first question; Google, Amazon, Microsoft, Nvidia, AMD and Nscale answer the second.

## A Cadence That Kept Accelerating

Claude 3.5 Sonnet launched June 20, 2024, then received an upgrade alongside Claude 3.5 Haiku that October. A hybrid-reasoning system followed in February 2025 under the name Claude 3.7 Sonnet, introducing an extended-thinking mode users could toggle on demand. May 22, 2025 brought Claude 4, split simultaneously into Opus 4 and Sonnet 4 variants, and Opus 4.1 followed that August [2]. Sonnet 4.5's September launch preceded Haiku 4.5 on Oct. 15 and Opus 4.5 on Nov. 24, closing out 2025 with three major releases inside ten weeks [1][2].

2026 accelerated further. Opus 4.6 shipped Feb. 5, Sonnet 4.6 followed twelve days later, Opus 4.7 arrived April 16, and Opus 4.8 landed May 28, each iteration compressing the gap between updates that once spanned entire quarters [2]. Sonnet 5 closed the sequence June 30, 2026, positioning Anthropic's flagship line for a second half of the year already underway by launch day [2]. Read against Claude's early public image as the deliberately cautious, safety-first alternative to faster-moving rivals, a cadence this dense signals a company willing to trade some of that caution's optics for release velocity, betting its safety research keeps pace internally even when the naming scheme suggests speed above all.

## Kaplan, Olah and the Research Bench

Jared Kaplan, an Anthropic co-founder, holds the title chief science officer, a position that places pretraining strategy and scaling-law research directly under his authority [3]. Kaplan co-authored the original scaling-laws papers that shaped how the entire field predicts model capability from compute, so his presence atop Anthropic's science function connects the company's release cadence to research he helped originate before Anthropic existed.

Chris Olah, another co-founder, leads interpretability research, the discipline aimed at explaining what happens inside a model's weights rather than merely measuring its outputs [3]. Amanda Askell works specifically on Claude's character development, a role distinct from safety research narrowly defined; her focus sits closer to what personality and values a deployed model expresses in conversation, an unusual executive-adjacent mandate for a frontier lab to formalize at all.

Jan Leike joined Anthropic to co-lead its Alignment Science team after departing OpenAI's superalignment effort, a move that carried symbolic weight beyond one hire [3]. Leike's public resignation from OpenAI in 2024 cited disagreements over how much resourcing safety work received relative to product shipping; landing at Anthropic to co-lead alignment science reads as a researcher choosing the lab whose public positioning matched his stated priorities, and Anthropic absorbing him signals the company treats that kind of hire as a credibility asset worth recruiting for directly.

## Five Partners, One Supply Chain

Anthropic's compute roster diversified sharply across 2025 and 2026, a pattern distinct from the single-cloud dependency that defines some rivals. Google's TPU partnership grants Anthropic access to up to one million custom Tensor Processing Units, an agreement dated October 2025 [3]. Amazon remains the primary cloud provider through its own Trainium chip line, backed by roughly $8 billion invested into Anthropic between September 2023 and November 2024 [3]. Microsoft and Nvidia struck a joint computing-capacity purchase on Azure worth $30 billion that November [3].

2026 added three more names to the roster. Akamai signed a $1.8 billion cloud-computing deal in May, the same month Anthropic gained data-center access through xAI's Colossus facility [3]. AMD followed in July with a commitment covering 2 gigawatts of MI450 GPUs alongside an AMD investment in Anthropic worth up to $5 billion [3]. Nscale closed the roster in August 2026 with an agreement worth roughly $45 billion, tied to approximately 460 megawatts of capacity at a West Virginia facility [3]. Six infrastructure partners inside two years describes a company deliberately avoiding reliance on any single chip architecture or cloud vendor, a hedge against both pricing leverage and supply disruption that a company scaling this fast can ill afford to risk on one relationship.

## The Revenue the Cadence Bought

Every release and every compute deal above traces back to one curve. Anthropic's annualized revenue run rate reached $65 billion by late July 2026, up from $9 billion at the end of 2025, according to TechCrunch reporting corroborated the same day by other outlets [4]. Claude Code, Anthropic's coding-agent product, sits inside that growth as a named driver of enterprise adoption, though the company held back a Claude Code-specific revenue figure from its public disclosures as of this writing.

Kaplan's scaling research, Olah's interpretability work and Leike's alignment focus function as the argument Anthropic makes to enterprise buyers wary of frontier-model risk; the compute roster functions as the guarantee that argument scales past the reach of any single vendor throttling supply. Together, research credibility and infrastructure diversity form the two legs a $65 billion run rate stands on, distinct from model quality alone.

## What Nine Releases Signal

A release cadence moving from quarterly to near-monthly inside eighteen months forces a choice on any research organization: either safety review compresses to match the schedule, or the schedule slows to match safety review. Anthropic's public materials lean toward the former framing, crediting internal alignment infrastructure robust enough to absorb the pace. Whether that framing holds under scrutiny matters more than the naming scheme itself, since Sonnet 5 and whatever follows it will face enterprise buyers increasingly willing to demand evidence over assurance.

The compute diversification tells a parallel story about risk management applied to infrastructure rather than model behavior. Six separate partners, spanning three chip architectures and two continents worth of data-center capacity, reduces the odds any single supply disruption stalls the cadence Kaplan's team set. Anthropic built redundancy into its hardware supply chain roughly as deliberately as it built redundancy into its safety research bench, a pairing that reads less like coincidence than like one institutional habit expressed twice.

## By the numbers

- 77.2 percent: Claude Sonnet 4.5's SWE-bench Verified score at launch, rising to 82 percent in a high-compute configuration [1].
- $65 billion: Anthropic's annualized revenue run rate by late July 2026, up from $9 billion at the end of 2025 [4].
- Nine: named Claude generations tracked from 3.5 Sonnet through Sonnet 5, spanning June 2024 to June 30, 2026 [2].
- $30 billion: Microsoft and Nvidia's joint Azure computing-capacity commitment, announced November 2025 [3].
- 1 million: custom Tensor Processing Units available to Anthropic under its Google partnership, dated October 2025 [3].
- $45 billion: Anthropic's Nscale compute agreement, tied to roughly 460 megawatts in West Virginia, closed August 2026 [3].
- 2 gigawatts: MI450 GPU capacity AMD committed to Anthropic in July 2026, alongside an AMD investment of up to $5 billion [3].

## What to watch

Sonnet 5's enterprise reception, measured against Claude Code's growing share of Anthropic's revenue mix, will show whether the accelerated cadence keeps converting into paying accounts or begins to strain customer trust. A published Claude Code revenue figure, whenever Anthropic discloses one, would let outside analysts test the run-rate curve against a single flagship product rather than the aggregate. Continued compute-partner additions, or conversely a pause in new infrastructure deals, would indicate whether the diversification strategy has reached its intended scale or keeps expanding to match a cadence still gaining speed.

## Sources

1. Anthropic, "Claude Sonnet 4.5," Anthropic, Sept. 29, 2025, https://www.anthropic.com/news/claude-sonnet-4-5
2. Wikipedia contributors, "Claude (language model)," Wikipedia, accessed Sept. 4, 2026, https://en.wikipedia.org/wiki/Claude_(language_model)
3. Wikipedia contributors, "Anthropic," Wikipedia, accessed Sept. 4, 2026, https://en.wikipedia.org/wiki/Anthropic
4. TechCrunch Staff, "Anthropic's annualized revenue surges to $65B," TechCrunch, Aug. 17, 2026, https://techcrunch.com/2026/08/17/anthropics-annualized-revenue-surges-to-65b/

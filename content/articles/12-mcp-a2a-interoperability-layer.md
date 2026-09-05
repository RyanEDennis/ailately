---
title: "The Interoperability Layer: MCP and A2A"
dek: "Anthropic's Model Context Protocol and Google's Agent2Agent protocol left single-company control for the Linux Foundation within roughly a year, assembling every major AI lab under one governance roof."
slug: mcp-a2a-interoperability-layer
kind: analysis
category: agents
tags: [model context protocol, agent orchestration, ai agent infrastructure, agentic ai, Linux Foundation]
people: ["Mike Krieger", "Jim Zemlin", "David Soria Parra", "Justin Spahr-Summers", "Swami Sivasubramanian", "Chris DiBona"]
companies: ["Anthropic", "Google", "Linux Foundation", "Block", "OpenAI", "Microsoft", "AWS"]
author: AI Lately Desk
editor: Ryan Elliott Dennis
date: 2026-08-12
order: 12
featured: false
image: ""
seo:
  title: "MCP and A2A: Agent Infrastructure Standards 2026"
  description: "The Model Context Protocol and Agent2Agent moved to the Linux Foundation, uniting Anthropic, Google, OpenAI, and Microsoft on agent orchestration standards."
  keywords: [model context protocol, agent orchestration, ai agent infrastructure, agentic ai, agent2agent protocol]
epigraph:
  text: "Ten thousand servers now speak a protocol that barely existed thirteen months earlier, and the company that wrote it handed the keys to a neutral foundation anyway."
  stat: "10,000+"
  attribution: ""
sources:
  - id: 1
    title: "Introducing the Model Context Protocol"
    publication: "Anthropic"
    author: "David Soria Parra and Justin Spahr-Summers"
    date: 2024-11-25
    url: "https://www.anthropic.com/news/model-context-protocol"
  - id: 2
    title: "Linux Foundation Announces the Formation of the Agentic AI Foundation (AAIF), Anchored by New Project Contributions Including Model Context Protocol (MCP), goose and AGENTS.md"
    publication: "Linux Foundation"
    author: ""
    date: 2025-12-09
    url: "https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation"
  - id: 3
    title: "Agentic AI Foundation Welcomes 97 New Members As Demand for Open, Collaborative Agent Standardization Increases"
    publication: "Linux Foundation"
    author: ""
    date: 2026-02-24
    url: "https://www.linuxfoundation.org/press"
  - id: 4
    title: "Agentic AI Foundation Adds 43 New Members as Enterprise and Government Adoption of Open Agent Standards Accelerates"
    publication: "Linux Foundation"
    author: ""
    date: 2026-05-18
    url: "https://www.linuxfoundation.org/press"
  - id: 5
    title: "Agentic AI Foundation Welcomes 57 New Members, Gaining Major Financial Services Players and APAC Leaders"
    publication: "Linux Foundation"
    author: ""
    date: 2026-08-12
    url: "https://www.linuxfoundation.org/press"
  - id: 6
    title: "a2aproject/A2A"
    publication: "GitHub"
    author: "A2A Project"
    date: 2026-01-01
    url: "https://github.com/a2aproject/A2A"
---

David Soria Parra and Justin Spahr-Summers published a specification at Anthropic on Nov. 25, 2024 that solved a problem every AI lab shared, a problem each had left entirely unstandardized: how an assistant reaches the data and tools sitting outside its own weights [1]. Thirteen months later, on Dec. 9, 2025, Anthropic handed governance of that specification, the Model Context Protocol, to a brand-new nonprofit steward, the Agentic AI Foundation, alongside two donations from rivals: Block's goose agent framework and OpenAI's AGENTS.md coding standard [2]. Google's own answer to agent orchestration, the Agent2Agent protocol, had already migrated to Linux Foundation stewardship on a separate track, built in partnership with Google Cloud and IBM Research [6]. Two protocols, two labs, one governance address: agent infrastructure's biggest companies concluded independently that the interoperability layer belonged to the industry collectively, spread past any single lab's grip.

## What each protocol actually standardizes

Two protocols solve adjacent but distinct problems, and conflating them misses why both needed to exist. MCP governs the vertical relationship between an agent and its tools: databases, file systems, calendars, codebases, anything an assistant needs to read or write outside its own context window [1]. Anthropic's original framing described the goal as replacing custom, one-off integrations with a single protocol any developer could implement once and reuse everywhere [1]. A2A governs the horizontal relationship instead, letting agents built on entirely different frameworks discover each other's capabilities, negotiate how to interact, and collaborate on a task while keeping each side's internal state private [6]. Picture a travel-booking agent that needs a hotel-search agent, a currency-conversion agent, and a calendar agent to complete one itinerary: MCP wires each of those agents to its own data sources, while A2A wires the agents to each other. Orchestration at scale needs both layers functioning simultaneously, which is precisely why the two protocols ended up governed by overlapping constituencies rather than competing standards bodies.

## A foundation built to hold three donations

Jim Zemlin, the Linux Foundation's executive director, framed the Agentic AI Foundation's purpose around neutrality: autonomous systems needed a transparent, collaborative home rather than a single vendor's roadmap dictating the pace [2]. Mike Krieger, Anthropic's chief product officer, represented MCP's transfer; Manik Surtani, Block's head of open source, represented goose; Nick Cooper, a member of OpenAI's technical staff, represented AGENTS.md [2]. Eight platinum members anchored the foundation at launch: Amazon Web Services, Anthropic, Block, Bloomberg, Cloudflare, Google, Microsoft, and OpenAI, each sending a named technical executive to the announcement [2]. Swami Sivasubramanian, AWS's vice president of agentic AI, joined Shawn Edwards, Bloomberg's chief technology officer; Dane Knecht, Cloudflare's chief technology officer; Richard Seroter, Google Cloud's chief evangelist and head of open-source programs; and Chris DiBona, representing Microsoft's office of the CTO [2]. Gold-tier members filled out the roster with Cisco, Docker, IBM, Oracle, Salesforce, SAP, Shopify, and Twilio, while Hugging Face, Uber, Zapier, and eighteen other companies joined at the silver tier [2].

Numbers attached to the founding announcement measured genuine traction rather than aspiration. More than 10,000 MCP servers had already been published by the time Anthropic handed the protocol over, and more than 60,000 open-source projects had adopted AGENTS.md as their coding-agent guidance format [2]. Growth accelerated after the founding rather than plateauing: the foundation added 97 new members in February 2026, 43 more in May, and 57 more in August, pulling in major financial-services firms and Asia-Pacific technology leaders in the latest wave [3] [4] [5]. Three membership waves inside eight months put the foundation's total roster well beyond the roughly 40 companies present at launch, a trajectory that reads as enterprise buyers deciding the standard was safe to build on rather than merely interesting to watch.

## Google keeps A2A on a parallel track

A2A's governance history runs on a track adjacent to AAIF's, kept distinct from it. Google contributed the protocol to the Linux Foundation as its own open-source project under an Apache license, separate from the three anchor donations that formed the Agentic AI Foundation itself, though the two governance efforts share plenty of member overlap [6]. IBM Research co-built the protocol with Google Cloud, giving A2A an enterprise-research pedigree distinct from MCP's developer-tooling origin [6]. By this research's count, the project's GitHub repository had drawn 25,600 stars and 2,600 forks, with software-development kits published in Python, Go, JavaScript, Java, .NET, and Rust, a breadth suggesting adoption reaching well past any single language ecosystem [6]. Keeping A2A on a separate governance track, rather than folding it into AAIF outright, let Google retain a visible authorship credit for the horizontal-orchestration standard while still surrendering the unilateral control a single-vendor spec would otherwise carry.

## What standardization implies for platform power

Handing a protocol to a neutral foundation looks, on its surface, like relinquishing leverage. Read more carefully, the move preserves a different kind of leverage: whichever company's engineers sit closest to a standard's technical committee shapes the interfaces every competitor eventually has to support. Krieger's continued involvement representing MCP inside AAIF, alongside Seroter's role for Google Cloud and DiBona's for Microsoft, means the three companies racing hardest on agent products also sit closest to the rules those products must obey. Enterprise buyers benefit from that arrangement regardless of the politics underneath it, since a genuinely open protocol lowers the switching cost between agent vendors and reduces the odds any one platform locks a customer in through proprietary tool-calling formats. Inference cost pressure adds urgency to that calculus: Gartner's Aug. 10, 2026 forecast projected 96 percent growth in AI-optimized cloud infrastructure spending this year, a number that only makes sense if agents built on one company's stack can call tools and other agents built on a rival's stack while integration work stays modest, sparing the bill from multiplying alongside it. Standardized orchestration is what makes that spending productive rather than merely additive.

Security concerns trail every standardization story this fast-moving, and agent infrastructure carries a sharper version of the risk than most: a protocol governing which tools an agent can invoke, and which other agents it will trust, becomes an attack surface the moment adoption reaches enterprise scale. Prompt injection and agent-hijacking research already treats MCP-style tool access as a primary vector, a concern this edition examines separately in its coverage of agent security's move into boardroom risk committees. Governance neutrality helps here too: a foundation with platinum members competing against each other has stronger incentive to patch vulnerabilities transparently than any single vendor would facing a disclosure that dents its own product's reputation.

## By the numbers

- Nov. 25, 2024: date Anthropic published the Model Context Protocol specification [1].
- Dec. 9, 2025: date the Linux Foundation formed the Agentic AI Foundation around MCP, goose, and AGENTS.md [2].
- Eight: platinum member companies anchoring the Agentic AI Foundation at launch, including AWS, Google, Microsoft, and OpenAI [2].
- 10,000-plus: MCP servers published by the foundation's founding date [2].
- Sixty thousand-plus: open-source projects that had adopted AGENTS.md as their agent-guidance format [2].
- 197: combined new members the foundation added across three 2026 waves (97 in February, 43 in May, 57 in August) [3] [4] [5].
- 25,600: GitHub stars on Google's Agent2Agent protocol repository under Linux Foundation stewardship [6].
- Six: programming languages with published A2A software-development kits [6].

## What to watch

Membership growth alone measures interest, so the sharper signal will come from production deployments: enterprises publishing case studies of MCP servers and A2A-connected agents running live workloads rather than pilots. Watch whether the two protocols formally cross-reference each other in updated specifications, since agents that both call tools and coordinate with peers need the vertical and horizontal layers to compose cleanly. Security audits and a published vulnerability-disclosure track record from the Agentic AI Foundation would give enterprise buyers the evidence needed to move governed-agent deployments past pilot budgets entirely.

## Sources

1. David Soria Parra and Justin Spahr-Summers, "Introducing the Model Context Protocol," Anthropic, Nov. 25, 2024, https://www.anthropic.com/news/model-context-protocol.
2. "Linux Foundation Announces the Formation of the Agentic AI Foundation (AAIF), Anchored by New Project Contributions Including Model Context Protocol (MCP), goose and AGENTS.md," Linux Foundation, Dec. 9, 2025, https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation.
3. "Agentic AI Foundation Welcomes 97 New Members As Demand for Open, Collaborative Agent Standardization Increases," Linux Foundation, Feb. 24, 2026, https://www.linuxfoundation.org/press.
4. "Agentic AI Foundation Adds 43 New Members as Enterprise and Government Adoption of Open Agent Standards Accelerates," Linux Foundation, May 18, 2026, https://www.linuxfoundation.org/press.
5. "Agentic AI Foundation Welcomes 57 New Members, Gaining Major Financial Services Players and APAC Leaders," Linux Foundation, Aug. 12, 2026, https://www.linuxfoundation.org/press.
6. "a2aproject/A2A," GitHub, A2A Project, 2026, https://github.com/a2aproject/A2A.

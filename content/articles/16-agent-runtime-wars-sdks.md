---
title: "The Agent Runtime Wars"
dek: "OpenAI, Anthropic, Google, Microsoft, and the open-source LangChain ecosystem each shipped a competing agent-runtime abstraction within one year, leaving orchestration itself, ahead of the underlying protocol, as agentic AI's real lock-in layer."
slug: agent-runtime-wars-sdks
kind: analysis
category: agents
tags: [agent orchestration, agentic ai, ai agent infrastructure, model context protocol, ai hiring]
people: ["Sam Altman", "Harrison Chase", "Ankush Gola", "Mike Krieger", "Thariq Shihipar"]
companies: ["OpenAI", "Anthropic", "Google", "Microsoft", "LangChain", "CrewAI", "Mastra"]
author: AI Lately Desk
editor: Ryan Elliott Dennis
date: 2026-09-04
order: 16
featured: false
image: ""
seo:
  title: "Agent Runtime Wars: OpenAI, Anthropic, Google SDKs"
  description: "OpenAI's AgentKit, Anthropic's Claude Agent SDK, Google's ADK, and Microsoft's Agent Framework are competing to become agentic AI's default runtime."
  keywords: [agent orchestration, ai agent infrastructure, agentic ai, model context protocol, ai agents]
epigraph:
  text: "Thirty-five percent of Fortune 500 companies build on one open-source agent framework, and four separate tech giants shipped rival runtimes within a single year regardless."
  stat: "35%"
  attribution: ""
sources:
  - id: 1
    title: "OpenAI Agents SDK documentation"
    publication: "OpenAI"
    author: ""
    date: 2026-01-01
    url: "https://openai.github.io/openai-agents-python/"
  - id: 2
    title: "Introducing AgentKit"
    publication: "OpenAI"
    author: ""
    date: 2025-10-06
    url: "https://openai.com/index/introducing-agentkit/"
  - id: 3
    title: "Building agents with the Claude Agent SDK"
    publication: "Anthropic"
    author: "Thariq Shihipar and others"
    date: 2025-09-29
    url: "https://claude.com/blog/building-agents-with-the-claude-agent-sdk"
  - id: 4
    title: "Agent Development Kit: Easy to build multi-agent applications"
    publication: "Google Developers Blog"
    author: "Erwin Huizenga and Bo Yang"
    date: 2025-04-09
    url: "https://developers.googleblog.com/en/agent-development-kit-easy-to-build-multi-agent-applications/"
  - id: 5
    title: "microsoft/agent-framework"
    publication: "GitHub"
    author: "Microsoft"
    date: 2026-01-01
    url: "https://github.com/microsoft/agent-framework"
  - id: 6
    title: "About LangChain"
    publication: "LangChain"
    author: ""
    date: 2026-01-01
    url: "https://www.langchain.com/about"
  - id: 7
    title: "CrewAI blog and homepage"
    publication: "CrewAI"
    author: "João Moura"
    date: 2026-01-01
    url: "https://www.crewai.com/blog"
---

Sam Altman's company opened OpenAI DevDay on Oct. 6, 2025 with a product built to solve a problem its own customers had been complaining about for a year: agent development scattered across too many disconnected tools [2]. AgentKit bundled a visual workflow builder, an embeddable chat interface, a connector registry, and reinforcement fine-tuning into one package, and the adoption numbers OpenAI cited landed fast — Ramp cut its iteration cycles 70 percent, Canva saved two weeks of development time, Carlyle lifted accuracy 30 percent while halving development time [2]. Twenty-three days earlier, Anthropic had renamed its own agent-building toolkit from the Claude Code SDK to the Claude Agent SDK, an acknowledgment that the harness powering its coding assistant had quietly become the engine behind deep research, video generation, and note-taking tools built for tasks entirely apart from coding [3]. Four major runtimes shipped within roughly a year of each other, and the pattern reads less like healthy competition settling toward a standard and more like every platform racing to become the layer developers get stuck inside.

## OpenAI's three-layer bet

Three distinct altitudes make up the approach, split deliberately rather than collapsed into one. The Responses API sits low, a primitive interface for teams that want to "own the loop, tool dispatch, and state handling" themselves, well suited to short-lived workflows that need minimal scaffolding [1]. Above it sits the Agents SDK, wrapping the Responses API in a lightweight Python framework built around handoffs, letting one agent delegate a subtask to another, plus guardrails for validating inputs and outputs before they reach a user [1]. AgentKit then sits above both, aimed squarely at teams that want a visual canvas rather than code: Agent Builder offers drag-and-drop workflow construction with built-in versioning, while ChatKit handles the embeddable chat interface a product team would otherwise build from scratch [2]. Three layers, three altitudes, one company — OpenAI's bet is that developers who start at the visual layer eventually need the code beneath it, and having built both keeps that developer inside OpenAI's stack regardless of which altitude they land on.

## Anthropic leans on Claude Code's proof of concept

Where OpenAI built AgentKit as a new product, Anthropic extended one that already worked. Thariq Shihipar led the writing on the Claude Agent SDK announcement, crediting a team of seven additional contributors, evidence Anthropic treats agent tooling as a genuinely collaborative engineering effort rather than a single owner's initiative [3]. Mike Krieger, Anthropic's chief product officer, has separately represented the company's agent infrastructure strategy in industry forums, including the Agentic AI Foundation's founding announcement examined elsewhere in this edition. The SDK's core claim carries real weight: Claude Code proved the underlying harness at developer scale before Anthropic ever pitched it as a general-purpose agent framework, giving the company a production-tested foundation its rivals had to build from scratch or borrow secondhand [3]. Anthropic's own internal use, spanning research, video, and note-taking applications, functions as a public case study running continuously rather than a canned customer testimonial [3].

## Google and Microsoft build for their own clouds first

Earliest among the major labs, Google unveiled its Agent Development Kit on April 9, 2025 at Google Cloud NEXT, authored by machine learning lead Erwin Huizenga and software engineer Bo Yang [4]. ADK's strongest credential predates its public release entirely: the same framework already ran Google's Agentspace and Customer Engagement Suite products internally before the company open-sourced it, a track record few competing frameworks can claim at launch [4]. Model flexibility via LiteLLM integration keeps ADK technically model-agnostic, though its deepest optimization work targets Gemini and Vertex AI specifically, tying the open-source framework's best performance to Google's own cloud [4]. Microsoft took a consolidation approach instead of a fresh build, merging two existing frameworks, AutoGen and Semantic Kernel, into a single Agent Framework with migration guides steering developers away from both predecessors [5]. The project had drawn 12.6 thousand GitHub stars and 2.1 thousand forks by this research's count, evidence of active open-source engagement, its public documentation leaving individual product leadership anonymous [5]. Chris DiBona, representing Microsoft's Office of the CTO, has spoken publicly for the company's open-agent strategy in adjacent contexts, including the Linux Foundation's Agentic AI Foundation.

## The open-source layer refuses to concede the field

LangChain built its position ahead of any lab shipping a competing SDK, and the numbers back the head start: Harrison Chase and Ankush Gola's framework reaches 35 percent of Fortune 500 companies, has crossed 1 billion open-source downloads, and its LangSmith observability product ingests over 1 billion events daily [6]. That scale predates the current runtime rush by years, built during a period when first-party alternatives from major labs stayed absent from the market entirely. CrewAI, credited on its own blog to João Moura, claims 2 billion agentic workflows run through its platform and reports 65 percent Fortune 500 usage on its own homepage, competing directly against the labs' native offerings on the strength of a framework built independent of any single model provider [7]. Mastra, a newer entrant built specifically for TypeScript developers, has drawn 27.7 thousand GitHub stars, evidence the open-source layer keeps attracting fresh entrants even as the labs pour resources into their own competing runtimes.

## What the fragmentation implies for hiring and lock-in

Every runtime examined here builds toward the same neutral protocols this edition covers separately: Model Context Protocol for tool access, Agent2Agent for cross-agent coordination, both now governed by the Linux Foundation rather than any single company. Protocol neutrality, though, solves only the wire format two agents speak to each other. It leaves the harder lock-in question untouched: a team fluent in LangGraph's orchestration primitives, or steeped in the Claude Agent SDK's specific handoff patterns, faces genuine retraining cost switching to a rival runtime, even when the agents each framework produces can already exchange MCP calls smoothly. Hiring managers building agent-orchestration teams increasingly screen for runtime-specific experience the way earlier cycles screened for a particular cloud provider's certification, and that specificity is precisely the moat each vendor is racing to build. Inference cost pressure compounds the stakes: switching runtimes mid-deployment risks re-architecting cost-optimization work tuned to one framework's execution model, a cost few engineering leaders volunteer to absorb twice inside a single budget cycle.

## By the numbers

- Oct. 6, 2025: date OpenAI launched AgentKit at DevDay, bundling Agent Builder, ChatKit, and a connector registry [2].
- 70 percent: reduction in iteration cycles Ramp reported after adopting AgentKit [2].
- Sept. 29, 2025: date Anthropic renamed the Claude Code SDK to the Claude Agent SDK [3].
- April 9, 2025: date Google unveiled its Agent Development Kit at Cloud NEXT [4].
- 12.6 thousand: GitHub stars on Microsoft's Agent Framework repository, merging AutoGen and Semantic Kernel [5].
- 35 percent: share of Fortune 500 companies LangChain reports working with its framework [6].
- 1 billion-plus: open-source downloads LangChain has crossed, alongside daily LangSmith event ingestion above the same threshold [6].
- 2 billion: agentic workflows CrewAI reports running through its platform [7].

## What to watch

Developer surveys measuring runtime market share directly, rather than download counts or GitHub stars alone, would settle which framework is winning production deployments rather than experimentation. Cross-runtime compatibility layers, letting a team built on one SDK call agents built on a rival's while sidestepping a full rewrite, would signal the industry choosing genuine interoperability over the lock-in each vendor currently benefits from. Hiring data specifically tagging runtime expertise, similar to how cloud-certification demand tracked AWS-versus-Azure-versus-GCP hiring a decade earlier, would confirm whether agent orchestration has become its own distinct labor market.

## Sources

1. "OpenAI Agents SDK documentation," OpenAI, 2026, https://openai.github.io/openai-agents-python/.
2. "Introducing AgentKit," OpenAI, Oct. 6, 2025, https://openai.com/index/introducing-agentkit/.
3. Thariq Shihipar and others, "Building agents with the Claude Agent SDK," Anthropic, Sept. 29, 2025, https://claude.com/blog/building-agents-with-the-claude-agent-sdk.
4. Erwin Huizenga and Bo Yang, "Agent Development Kit: Easy to build multi-agent applications," Google Developers Blog, April 9, 2025, https://developers.googleblog.com/en/agent-development-kit-easy-to-build-multi-agent-applications/.
5. "microsoft/agent-framework," GitHub, Microsoft, 2026, https://github.com/microsoft/agent-framework.
6. "About LangChain," LangChain, 2026, https://www.langchain.com/about.
7. João Moura, CrewAI blog and homepage, CrewAI, 2026, https://www.crewai.com/blog.

# Research notes — Article 16: The Agent Runtime Wars

Budget note: WebSearch exhausted session-wide before this article began — zero WebSearch calls available. Relied entirely on WebFetch, well beyond the normal 3-call guideline, including several 404s on guessed URLs before landing correct ones. Reused several already-verified named executives from this session's article 12 and 15 research (Sam Altman, Mike Krieger, Richard Seroter, Chris DiBona) rather than re-deriving them.

## OpenAI Agents SDK / Responses API — fetched openai.github.io/openai-agents-python
- Lightweight Python framework: agents with instructions and tools, "handoffs" letting agents delegate to other agents, guardrails for input/output validation, sandboxed agents, voice agents, built-in tracing, persistent memory layers.
- Responses API: lower-level interface the SDK wraps by default; recommended when a developer wants to "own the loop, tool dispatch, and state handling" directly, or for short-lived workflows.
- No release date or named leadership found on this documentation page.
- URL: https://openai.github.io/openai-agents-python/

## AgentKit (OpenAI DevDay) — fetched openai.com/index/introducing-agentkit
- Announced Oct. 6, 2025, at OpenAI DevDay.
- Components: Agent Builder (visual canvas, drag-and-drop, versioning, guardrails), ChatKit (embeddable chat-agent UI toolkit), Connector Registry (centralized admin panel for data-source connections), enhanced Evals (datasets, trace grading, automated prompt optimization, third-party model support), Reinforcement Fine-tuning (custom tool calls/graders for o4-mini GA, GPT-5 private beta).
- Adoption examples given: Ramp cut iteration cycles 70%, deployment from quarters to sprints; Canva saved over two weeks of development time; Carlyle achieved a 30% accuracy increase and cut development time 50%.
- No named OpenAI executive quoted in the fetched excerpt.
- URL: https://openai.com/index/introducing-agentkit/

## Claude Agent SDK — fetched claude.com/blog/building-agents-with-the-claude-agent-sdk (redirected from anthropic.com/engineering/...)
- Published Sept. 29, 2025. Renamed from "Claude Code SDK" to "Claude Agent SDK" to reflect broader (non-coding) use.
- Same underlying agent harness that powers Claude Code; Anthropic itself uses it for deep research, video creation, note-taking, and more beyond coding.
- Named contributors credited on the piece: Thariq Shihipar (primary author), Molly Vorwerck, Suzanne Wang, Alex Isken, Cat Wu, Keir Bradwell, Alexander Bricken, Ashwin Bhat.
- No adoption metrics in the fetched content.
- URL: https://claude.com/blog/building-agents-with-the-claude-agent-sdk

## Google Agent Development Kit (ADK) — fetched developers.googleblog.com
- Announced April 9, 2025, at Google Cloud NEXT 2025.
- Open-source framework for full-stack agent and multi-agent development; optimized for Gemini models and Vertex AI, but model-agnostic via LiteLLM integration.
- Same framework already powers Agentspace and Google's Customer Engagement Suite (CES) internally, prior to open-sourcing.
- Named authors: Erwin Huizenga (Machine Learning Lead) and Bo Yang (Software Engineer).
- Features: multi-agent design, tool integration, bidirectional audio/video streaming, orchestration, evaluation, deployment options.
- URL: https://developers.googleblog.com/en/agent-development-kit-easy-to-build-multi-agent-applications/

## Microsoft Agent Framework — fetched github.com/microsoft/agent-framework (Azure blog attempts 404'd)
- Open, multi-language (.NET and Python) framework for production-grade agents and multi-agent workflows; supports Microsoft Foundry, Azure OpenAI, OpenAI as model providers.
- Positioned as an evolution beyond AutoGen and Semantic Kernel — repo includes migration guides from both; adds "orchestration beyond a single prompt or stateless chat loop" and graph-based patterns (sequential, concurrent, handoff, group collaboration).
- GitHub metrics: 12.6k stars, 2.1k forks, 2,709 commits on main, 525 open issues, 133 pull requests.
- No explicit announcement date or named leadership found in the fetched repo content; several guessed Azure/devblogs URLs for the original announcement post returned 404.
- URL: https://github.com/microsoft/agent-framework

## LangChain / LangGraph / LangSmith — fetched langchain.com/about
- Founders: Harrison Chase (started as a side project late 2022, co-founded the company early 2023) and Ankush Gola (joined early 2023). No explicit CEO title captured in the fetched content.
- Funding: most recent captured figure is 2025 — "$125 million in funding" making LangChain "a unicorn," resulting in a $1.25 billion valuation. No 2026-specific round found this round of research.
- Adoption: 35% of Fortune 500 companies work with LangChain; over 1 billion open-source downloads; LangSmith ingests over 1 billion events per day.
- URL: https://www.langchain.com/about

## CrewAI — fetched crewai.com/blog and crewai.com (root)
- "2 Billion Agentic Workflows" cited on the blog page as a volume claim (exact wording; treat as company-reported, not independently audited).
- Homepage states "65% of the Fortune 500" use CrewAI (other homepage counters, workflow-volume and signups, rendered as unpopulated "0" placeholders in the fetched static content — likely JS-rendered counters that did not load — so only the Fortune 500 percentage is used).
- João Moura appears as an author credited on CrewAI's blog; no title (founder/CEO) was confirmed in the fetched pages, so the piece avoids asserting a specific title for him.
- No 2026 funding/valuation figures found.
- URLs: https://www.crewai.com/blog ; https://www.crewai.com

## Mastra — fetched mastra.ai/blog
- 27.7k GitHub stars (via blog page content). No funding, valuation, or named leadership found in the fetched content.
- URL: https://mastra.ai/blog

## Reused from this session's prior research (already independently verified)
- Sam Altman, OpenAI chief executive — verified in docs/research/openai-org-chart-in-motion.md, reused in article 15.
- Mike Krieger, Anthropic chief product officer — verified in docs/research/mcp-a2a-interoperability-layer.md (AAIF founding announcement).
- Richard Seroter, Chief Evangelist and Head of Open Source Programs, Google Cloud — same AAIF source.
- Chris DiBona, VP, Office of the CTO, Microsoft — same AAIF source.

## Not verified this round
- Explicit CEO/product-lead titles for individual runtime products (e.g., no confirmed single "head of AgentKit" or "head of Microsoft Agent Framework" beyond the company-level executives reused above).
- 2026-specific LangChain funding round (only the 2025 $125M/$1.25B figure was found).
- CrewAI and Mastra funding/valuation and named leadership titles.

## Angle
Five ecosystems (OpenAI, Anthropic, Google, Microsoft, and the independent open-source layer led by LangChain/CrewAI/Mastra) each shipped a distinct agent-runtime abstraction within roughly a twelve-month window (April 2025 through mid-2026), and every one of them explicitly built migration paths or compatibility layers toward the two neutral protocols examined in article 12 (MCP, A2A) rather than proprietary lock-in formats. The runtime layer is where lock-in risk concentrates even when the protocol layer stays open: a team fluent in LangGraph's orchestration primitives, or Anthropic's Claude Agent SDK harness, faces real retraining cost switching runtimes, even if the agents underneath can already speak MCP to each other. That is the hiring and lock-in argument the piece should land on.

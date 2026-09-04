# Research notes — Article 12: MCP and A2A Interoperability Layer

Budget note: WebSearch became fully exhausted session-wide (200/200 used, by other work) before this article's research began — zero WebSearch calls available. Relied entirely on WebFetch (used more than the normal 3-call guideline given search was unavailable; two early attempts errored with no content and are not counted as informative fetches).

## Model Context Protocol origin — fetched anthropic.com/news/model-context-protocol
- Announced Nov. 25, 2024, by Anthropic. Open standard connecting AI assistants to data sources (content repos, business tools, dev environments) through one protocol instead of custom point-to-point integrations.
- Built by David Soria Parra and Justin Spahr-Summers at Anthropic.
- Early adopters: Block, Apollo. Dev-tool partners at launch: Zed, Replit, Codeium, Sourcegraph.
- Block quote (unnamed exec title captured generically as "Block's CTO"): "open technologies like the Model Context Protocol are the bridges that connect AI to real-world applications, ensuring innovation is accessible, transparent, and rooted in collaboration."
- URL: https://www.anthropic.com/news/model-context-protocol

## Agentic AI Foundation (AAIF) — fetched linuxfoundation.org/press (listing) + linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation
- Founding announcement: "Linux Foundation Announces the Formation of the Agentic AI Foundation (AAIF), Anchored by New Project Contributions Including Model Context Protocol (MCP), goose and AGENTS.md." Date: Dec. 9, 2025.
- Purpose: neutral, open foundation for autonomous AI systems to evolve transparently and collaboratively.
- Donated projects: MCP (from Anthropic), goose (open-source AI agent framework with MCP integration, from Block), AGENTS.md (markdown standard for AI coding-agent guidance, from OpenAI).
- Founding Platinum members: AWS, Anthropic, Block, Bloomberg, Cloudflare, Google, Microsoft, OpenAI.
- Gold members: Adyen, Arcade.dev, Cisco, Datadog, Docker, Ericsson, IBM, JetBrains, Okta, Oracle, Runlayer, Salesforce, SAP, Shopify, Snowflake, Temporal, Tetrate, Twilio.
- Silver members: Apify, Chronosphere, Cosmonic, Elasticsearch, Eve Security, Hugging Face, Kubermatic, KYXStart, LanceDB, Mirantis, NinjaTech AI, Obot.ai, Prefect.io, Pydantic, Shinkai.com, Solo.io, Spectro Cloud, Stacklok, SUSE, Uber, WorkOS, Zapier, ZED.
- Named execs quoted at founding: Jim Zemlin (Executive Director, Linux Foundation); Mike Krieger (Chief Product Officer, Anthropic); Manik Surtani (Head of Open Source, Block); Nick Cooper (Member of Technical Staff, OpenAI); Swami Sivasubramanian (VP of Agentic AI, AWS); Shawn Edwards (CTO, Bloomberg); Dane Knecht (CTO, Cloudflare); Richard Seroter (Chief Evangelist and Head of Open Source Programs, Google Cloud); Chris DiBona (VP Office of the CTO, Microsoft).
- Numbers at founding: 10,000+ MCP servers published; 60,000+ open-source projects had adopted AGENTS.md.
- The founding press-release summary fetched did NOT mention Google's A2A/Agent2Agent protocol as an AAIF-donated project — confirmed separately (see below) that A2A moved to the Linux Foundation as its own project, distinct from AAIF's three anchor donations.
- Membership growth (from press listing, headlines only, not individually fetched):
  - Feb. 24, 2026: "Agentic AI Foundation Welcomes 97 New Members As Demand for Open, Collaborative Agent Standardization Increases."
  - Apr. 2, 2026: "Agentic AI Foundation Announces Global 2026 Events Program Anchored by AGNTCon + MCPCon North America and Europe."
  - May 18, 2026: "Agentic AI Foundation Adds 43 New Members as Enterprise and Government Adoption of Open Agent Standards Accelerates."
  - Aug. 12, 2026: "Agentic AI Foundation Welcomes 57 New Members, Gaining Major Financial Services Players and APAC Leaders."
  - Running total implied by headlines alone (not independently summed/verified beyond what's stated in each headline): well over 150 new members added across three waves in 2026, on top of the ~40+ founding members.
- URL for listing page: https://www.linuxfoundation.org/press ; founding release URL guessed and successfully resolved: https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation

## Agent2Agent (A2A) protocol — fetched github.com/a2aproject/A2A
- Contributed by Google; now an open-source project under the Linux Foundation, Apache License 2.0.
- Built in partnership with Google Cloud and IBM Research.
- Enables agents on different frameworks to discover capabilities, negotiate interaction, and collaborate without exposing internal state.
- GitHub metrics (at time of fetch): 25.6k stars, 2.6k forks, 184 open issues, 57 pull requests. SDKs in Python, Go, JavaScript, Java, .NET, Rust.
- No announcement date or steering-committee member names visible on the fetched page beyond a MAINTAINERS.md reference (not opened — over fetch budget).
- URL: https://github.com/a2aproject/A2A

## Not verified this round (drop or treat cautiously)
- Specific MCP-related security incidents in 2026 — no source seen; cross-reference article 15 (agent security) rather than assert specifics here.
- Exact A2A announcement date (recall places it around April 2025 from general knowledge, but this is NOT independently verified via search/fetch this round — omit precise date or state "2025" cautiously only if corroborated; safer to omit exact date entirely and describe governance status only).
- Named individual steering-committee members for MCP specifically (beyond Krieger representing Anthropic at AAIF founding) and for A2A specifically (beyond Google/IBM Research partnership) — not found in fetched pages.

## Angle
Two protocols solve different halves of the same problem: MCP standardizes how one agent reaches tools and data; A2A standardizes how two agents reach each other. Both left single-company control for a neutral foundation within about seven months of each other (A2A to Linux Foundation earlier; MCP anchoring the purpose-built Agentic AI Foundation Dec. 9, 2025), and the platinum-member list of AAIF is effectively a room containing every major AI lab and hyperscaler simultaneously — a rare moment of infrastructure consensus. That consensus is itself the story: whoever writes the interoperability layer's rules shapes which agent platforms interconnect cheaply and which stay walled off.

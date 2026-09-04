# Research notes — Article 13: Inference Economics, Gartner's 96 Percent

Budget note: WebSearch exhausted session-wide (200/200 used before this article) — zero WebSearch calls available for articles 12 onward. Relied on WebFetch plus reuse of prior verified research from docs/research/inference-is-the-new-oil.md and docs/research/braid-bounded-reasoning-armagan-amcalar.md (both independently sourced and cited in already-published site pieces). Used well more than 3 WebFetch calls given the search outage; each cited fact below traces to a specific fetched page or a prior fetch already on file.

## Gartner (verified context provided directly; also cross-checked in reasonings-rebate/inference-is-the-new-oil research)
- Aug. 10, 2026 press release: AI-optimized IaaS spending to grow 96% in 2026 to $42.276B (2025 baseline $21.529B, +180%); 56.5% growth in 2027 to $66.143B.
- Inference: $23.3B (55% of the total) in 2026; rising to 59% share in 2027. Training: $19B in 2026.
- Total IaaS market: $287.347B in 2026 (+29.3%).
- Quote, Hardeep Singh, senior principal research analyst, Gartner: "This growth is driven by continued demand for infrastructure to support large language model (LLM) training and rapid operationalization of AI across enterprise applications."
- URL: https://www.gartner.com/en/newsroom/press-releases/2026-08-10-gartner-forecasts-worldwide-artificial-intelligence-optimized-iaas-spending-to-grow-96-percent-in-2026

## Nvidia (reused, already fetched for inference-is-the-new-oil.md; also matches verified context)
- Q2 FY2027 (reported Aug. 26, 2026): total revenue $96.2B, +106% YoY. Data-center segment $89.0B, +117% YoY. Q3 FY2027 guidance $108.0B (±2%).
- Jensen Huang quote: "AI has reached its inflection point. It's doing useful work. Its tokens are productive and profitable. Now, compute is revenue. And demand is accelerating."
- URL: https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027

## Token price deflation (reused from inference-is-the-new-oil.md, fetched valueaddvc.com)
- Inference cost fell "roughly 95% in two years and about 1,000x in three years" for equivalent capability.
- Pricing trajectory (input/output per million tokens): GPT-4 (Mar. 2023) $30/$60 → GPT-4 Turbo (Nov. 2023) $10/$30 → GPT-4o (May 2024) $5/$15 → GPT-4o mini (Jul. 2024) $0.15/$0.60 → Gemini 1.5 Flash (2024) $0.075/$0.30 → Llama 3.3 70B (2025) $0.20/$0.40 → DeepSeek V3 (2025) $0.27/$1.10 → open-weight floor (2026) ~$0.10/$0.40.
- Projected further 4x-10x annual decline through 2027.
- URL: https://valueaddvc.com/blog/how-ai-inference-costs-have-dropped-95-in-two-years-and-what-happens-next

## Inference/neocloud startups — funding, leadership (this round's fetches)
- **Fireworks AI**: Series D announced July 15, 2026; $17.5B valuation; $1B ARR milestone reached alongside the round. Fetched https://fireworks.ai/blog. Leadership (fetched https://fireworks.ai/team): Lin Qiao, Co-Founder and CEO (previously Head of PyTorch at Meta); other co-founders Benny Chen, Chenyu Zhao, Dmytro Dzhulgakov, Dmytro Ivchenko, James Reed, Pawel Garbacki, mostly ex-Meta PyTorch/ads-infra and ex-Google Vertex AI.
- **Together AI**: $800M Series C announced (exact 2026 date not shown on fetched page; treat as undated within 2026). Fetched https://www.together.ai/blog and https://www.together.ai/about. Leadership: Vipul Ved Prakash, Founder and CEO; Ce Zhang, Founder and CTO; Tri Dao, Founder and Chief Scientist; Chris Ré and Percy Liang also listed as founders. Additional execs: Charles Zedlewski (CPO), Kai Mak (CRO), Mahadev Konar (SVP Engineering Infrastructure).
- **Groq**: Two 2026 raises — $650 million (Groq newsroom, dated June 22, 2026 per this fetch) and $350 million Series A valuing the company at $3.5 billion (TechFundingNews, dated Aug. 17, 2026 per this fetch — note this "Series A" label from the secondary source is likely a later-stage round mislabeled, given it follows the larger June raise chronologically; reported cautiously). Fetched https://groq.com/news and https://groq.com/about-us/. Leadership: Adam Winter, CEO — joined Groq in 2024 to lead international business, became CEO in 2026 (a mid-2026 leadership transition, notable in its own right); other execs: Matt Eng (CFO), Alan Rice (COO), Sinclair Schuller (CTO), Rakesh Malhotra (CPO). Groq's own claim: "Millions of developers run trillions of tokens on Groq every week."
- **Cerebras**: IPO'd May 14, 2026, raising $5.5B, stock +108% on debut (TechCrunch, reused from inference-is-the-new-oil.md). CNBC, June 23, 2026: shares fell 10% after Cerebras forecast a shrinking margin in its first post-IPO earnings report. Fetched https://www.cerebras.ai/company: Andrew Feldman, CEO and co-founder; other co-founders Jean-Philippe Fricker, Michael James, Gary Lauterbach (CTO Emeritus), Sean Lie (CTO). CS-4 chip launched August 2026 per company site.
- **Baseten**: fetched https://www.baseten.co/blog/ — page contained product/engineering posts only; no 2026 funding, valuation, or leadership data found. Drop specific Baseten financial/personnel claims; can mention the company by name/category only, without unverified specifics.
- **IDC**: attempted https://www.idc.com/getdoc.jsp?containerId=prUS53355525 — 404, no valid IDC forecast retrieved this round. Drop IDC-specific claim; rely on Gartner and Nvidia's reported figures as the quantitative anchor instead.

## Neocloud context (reused from inference-is-the-new-oil.md — CoreWeave, Nebius, Crusoe already researched, not re-fetched)
- CoreWeave Q2 2026 revenue $2,575M (+112% YoY); backlog ~$104B as of June 30, 2026, plus $25B in early-Q3 net-new commitments.
- Cited only as supporting context; the compute-and-neocloud story is covered in depth by articles 23 (neoclouds) and the inference-is-the-new-oil opinion piece — this article stays focused on inference-specific economics rather than re-deriving neocloud capex.

## BRAID / reasoning-cost link (reused from braid-bounded-reasoning-armagan-amcalar.md, already published as article 14)
- arXiv 2512.15959, Armağan Amcalar (CTO, OpenServ Labs) and Eyup Cinar. BRAID reduces reasoning cost via Mermaid-diagram-encoded flowcharts separating planning and execution.
- Performance-per-dollar gains up to 74.06x on GSM-Hard (gpt-4.1 generator, gpt-5-nano-minimal solver, normalized to gpt-5-medium=1.0).
- Quote, Amcalar: "BRAID boosts performance across every model class, from largest to smallest, making strong reasoning affordable."
- Full sourcing lives in content/articles/14-braid-bounded-reasoning-armagan-amcalar.md; this article references it as the reasoning-cost case study rather than re-deriving the numbers.

## Angle
Gartner's 96 percent is a demand number; the token-price deflation table is a supply-side counter-number. Both are true simultaneously: total dollars spent on inference infrastructure keep climbing even as the price per token keeps falling, because volume is growing faster than price is dropping. Named leadership churn (Groq's CEO transition, Fireworks' PyTorch-alumni founding team, Cerebras' post-IPO margin scare) gives the people-first angle houses style requires, while BRAID's bounded-reasoning approach is cited as one concrete technique attacking the cost side of the equation directly.

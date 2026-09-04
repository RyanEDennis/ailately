# Research notes: Reasoning's Rebate

## BRAID paper (arXiv 2512.15959)
Fetched https://arxiv.org/html/2512.15959v1. Title: "BRAID: Bounded Reasoning for Autonomous Inference and Decisions." Authors: Armağan Amcalar, CTO, OpenServ Labs (armagan@openserv.ai); Eyup Cinar, Computer Engineering Dept., Eskisehir Osmangazi University. Acknowledgments cite Coyotiv GmbH for technical discussions and Neol.ai for industrial testing feedback. Core claim: structured, machine-readable prompts (Mermaid instruction graphs) beat free-form chain-of-thought on accuracy and cost. Performance-per-dollar (PPD) results: GSM-Hard, gpt-4.1→gpt-5-nano-minimal, PPD 74.06 (74x); SCALE MultiChallenge, gpt-5-medium→gpt-5-nano-medium, PPD 30.31; AdvancedIF, gpt-5-medium→gpt-5-nano-minimal, PPD 61.69. Accuracy: GSM-Hard 94.0%→98.0%; SCALE MultiChallenge (gpt-4o) 19.9%→53.7%; AdvancedIF (gpt-5-nano-minimal) 18.0%→40.0%. Companion press release (searched, not fetched): "Coyotiv and OpenServ Labs Demonstrate Up to 74x AI Reasoning Efficiency Gains in New Research," syndicated via Newsfile Corp/Yahoo Finance/Globe and Mail/TechFinancials, dateline ~March 6, 2026 — https://www.newsfilecorp.com/release/286412/Coyotiv-and-OpenServ-Labs-Demonstrate-Up-to-74x-AI-Reasoning-Efficiency-Gains-in-New-Research

## Gartner forecast
Fetched https://www.gartner.com/en/newsroom/press-releases/2026-08-10-gartner-forecasts-worldwide-artificial-intelligence-optimized-iaas-spending-to-grow-96-percent-in-2026 (Aug. 10, 2026). Worldwide AI-optimized IaaS spend 2026: $42.276 billion, +96.4% YoY. Inference: $23.3 billion (55%). Training: $19 billion (45%). 2027 forecast: $66.143 billion, +56.5%; inference climbs to 59% of spend. Analyst quoted: Hardeep Singh, Sr Principal Research Analyst, Gartner.

## Pricing (search-result titles, not fetched — order-of-magnitude only)
- PECollective, "OpenAI API Pricing 2026: GPT-4.1 at $2, GPT-5 at $1.25/1M" — https://pecollective.com/tools/openai-api-pricing/
- ValueAddVC, "$0.15 to $30/M Tokens — OpenAI API Pricing 2026" — https://valueaddvc.com/blog/openai-api-pricing-2026-gpt-4o-o3-and-gpt-5-cost-breakdown-for-developers
- CloudZero, "OpenAI API pricing in 2026: every model after the July price cuts" — https://www.cloudzero.com/blog/openai-pricing/
- BenchLM, "Claude API Pricing (September 2026): $1–$50 per 1M Tokens" — https://benchlm.ai/anthropic/api-pricing
- Fetched https://openai.com/api/pricing/ directly: confirms current OpenAI reasoning-tier lineup names — GPT-5.6 Sol, GPT-5.6 Sol Pro, GPT-5.6 Terra, GPT-5.6 Luna, GPT-5 Thinking Mini — but page withholds per-token rates (plan-based/credit pricing shown instead).
- Layer3labs, "DeepSeek Pricing 2026: API Rates, Free Tier & Subscription" — https://www.layer3labs.io/guides/deepseek-pricing; AIPricing.guru, "DeepSeek API Pricing 2026: V4 Peak & Off-Peak" — https://www.aipricing.guru/deepseek-pricing/ (confirms DeepSeek uses peak/off-peak dynamic pricing, structurally cheaper).

## Companies to watch
- Groq: raised $350M Series A (NVIDIA-backed, $3.5B valuation), then a further $650M raise to scale its "AI inference cloud." Sources: https://groq.com/newsroom/groq-closes-usd350-million-series-a-building-the-world-s-leading-ai-inference-cloud ; https://groq.com/newsroom/groq-raises-usd650m-to-scale-its-ai-inference-cloud-business
- Together AI: raised $800M; TechTimes headline states "Open-Source Inference Breaks $1B as Closed Models Stall" (July 3, 2026) — https://www.techtimes.com/articles/319657/20260703/together-ai-raises-800m-open-source-inference-breaks-1b-closed-models-stall.htm
- Fireworks AI: tracked by Sacra for revenue/valuation (no hard figure captured) — https://sacra.com/c/fireworks-ai/
- Cerebras: no fresh 2026 figure captured this round; referenced qualitatively only.

## Angle
Thesis holds: bounded/structured reasoning (BRAID) demonstrates order-of-magnitude PPD gains over raw model upsizing, which lines up with Gartner's inference-dominant IaaS forecast. Framing 2027 as the year the "cheapest token is the one never generated" is well supported.

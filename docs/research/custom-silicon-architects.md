# Research notes: The Custom Silicon Architects

NOTE: WebSearch unavailable this session (global budget exhausted before this article began). Research relied entirely on WebFetch to primary blogs and Wikipedia synthesis pages. Several targeted fetches failed (404/cache-only) — notably could NOT verify "Richard Ho" at OpenAI, "Maia 200" at Microsoft, or a Rivos acquisition by Meta; these claims from the assignment brief are DROPPED per house rule "when you cannot verify a claim, drop it."

## OpenAI-Broadcom (confirmed)
- Broadcom began collaborating with OpenAI in 2024 to co-develop a custom AI chip (training and inference), explicitly to reduce OpenAI's reliance on Nvidia GPUs amid surging demand.
- June 24, 2026: OpenAI announced the chip's name, Jalapeño, built with Broadcom. Rollout targeted by the end of 2026; TSMC manufactures on a 3nm process (per earlier Wikipedia/OpenAI-page fetch in article 21 research).
- Hock Tan is Broadcom's president and CEO. Broadcom's XPU custom-ASIC business also serves Google (TPU co-development since program inception) and Meta (MTIA co-development).
- Source: Wikipedia "Broadcom" and "OpenAI" pages (fetched), https://en.wikipedia.org/wiki/Broadcom , https://en.wikipedia.org/wiki/OpenAI
- COULD NOT VERIFY: Richard Ho's role/hire date at OpenAI — dropped.

## Google TPU — Ironwood and the Anthropic deal (confirmed, primary)
- Ironwood (7th-gen TPU), announced April 9, 2025 at Google Cloud Next 25. First TPU built specifically for inference. Peak 42.5 exaflops at full 9,216-chip pod scale; 4,614 TFLOPs per chip; 192GB HBM per chip (6x Trillium); 7.37 TB/s HBM bandwidth (4.5x improvement); 1.2 TBps bidirectional ICI bandwidth; roughly 2x power efficiency over Trillium, ~30x over 2018's TPU v2. Available "later" in 2025.
- Quote, Amin Vahdat, VP/GM of ML, Systems & Cloud AI at Google: "Ironwood is our most powerful, capable and energy efficient TPU yet, designed to power thinking, inferential AI models at scale."
- Source: Google Cloud blog, fetched, https://blog.google/products/google-cloud/ironwood-tpu-age-of-inference/
- Anthropic-Google TPU deal: October 2025. Up to 1 million TPUs; potentially more than 1 gigawatt of added AI compute capacity by 2026. Source: Wikipedia "Anthropic" page (fetched), https://en.wikipedia.org/wiki/Anthropic
- Meta-Google TPU talks: mentioned in assignment brief; NOT independently verified via fetch this session — omit or mention only as previously reported context if a source surfaces later.

## Amazon Trainium / Project Rainier (confirmed, partial)
- Trainium2 powers Project Rainier, the AWS data center running Anthropic's Claude models.
- Trainium3 exists; both Anthropic and OpenAI have announced large deals using it (per Wikipedia AWS Trainium page).
- Trainium4 was revealed at AWS re:Invent 2025.
- No specific launch dates, specs, or named chip architects/executives surfaced via fetch.
- Source: Wikipedia "AWS Trainium" (fetched), https://en.wikipedia.org/wiki/AWS_Trainium

## Microsoft Maia — UNVERIFIED for 2026
- Multiple fetch attempts (Wikipedia Azure Maia page, Microsoft Azure blog) failed (cache-only/404). "Maia 200" specifics could NOT be confirmed this session. Treated as unverified; omitted or mentioned only via Maia's well-established prior generation (Maia 100, publicly known pre-2025) without inventing a 2026 successor's specs.

## Meta MTIA (confirmed, partial)
- March 11, 2026: Meta disclosed a roadmap of four new in-house chips as part of its Meta Training and Inference Accelerator (MTIA) program.
- Context: "Starting from 2022, Meta scrambled to catch up to other tech companies in adopting specialized artificial intelligence hardware," having relied on less efficient CPUs before shifting to GPUs.
- February 2026: Meta announced a long-term partnership with Nvidia (separate from the in-house MTIA program — shows Meta running a dual-track chip strategy).
- Rivos acquisition: COULD NOT VERIFY this session — dropped.
- Source: Wikipedia "Meta Platforms" (fetched), https://en.wikipedia.org/wiki/Meta_Platforms

## Anthropic's broader compute stack (useful cross-reference for articles 23/25 too)
- Google TPU deal: Oct 2025, up to 1M TPUs, >1GW by 2026.
- Nscale: ~$45 billion compute deal, August 2026, ~460 megawatts, West Virginia data center, operational late 2027, running Nvidia Vera Rubin chips.
- Microsoft/Nvidia: Nov 2025, ~$15B investment into Anthropic; Anthropic committing $30B to Azure compute purchases (Nvidia-based).
- AMD: July 2026, 2 gigawatts of AMD Instinct MI450 GPUs; AMD investing up to $5 billion in Anthropic.
- TeraWulf: July 2026, 20-year Kentucky data center lease.
- xAI/SpaceX: May 2026, Colossus 1 data center partnership.
- Akamai: May 2026, $1.8 billion cloud deal.
- Source: Wikipedia "Anthropic" (fetched), https://en.wikipedia.org/wiki/Anthropic

## People confirmed with roles
Amin Vahdat (Google VP/GM, ML Systems & Cloud AI — Ironwood), Hock Tan (Broadcom President/CEO), Sam Altman (OpenAI CEO), Greg Brockman (OpenAI president) — the latter two from article 21 research (Nvidia deal), reused here for OpenAI's chip-buyer context.

## Angle notes
The verifiable throughline: every major AI lab and hyperscaler is running two tracks simultaneously — merchant GPUs from Nvidia/AMD alongside custom silicon (TPU, Trainium, MTIA, Jalapeño) designed to cut cost per token on inference specifically. Ironwood's inference-first design and the Anthropic TPU deal's scale (1 million units) show Google monetizing its decade-plus TPU lead as a merchant offering, not just an internal tool. Angle adjusted from the plan: Richard Ho, Maia 200, and the Rivos acquisition are dropped for lack of session verification; Meta's Nvidia partnership (Feb 2026) alongside its MTIA roadmap (March 2026) becomes the sharper "hedge, don't choose" throughline for Meta specifically.

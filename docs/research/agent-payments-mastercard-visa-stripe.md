# Research notes — Article 11: Machines With Money (Agent Payments)

Budget: 6/6 searches, 3/3 fetches.

## Mastercard Agent Pay (original, April 2025) — fetched mastercard.com
- URL: https://www.mastercard.com/global/en/news-and-trends/press/2025/april/mastercard-unveils-agent-pay-pioneering-agentic-payments-technology-to-power-commerce-in-the-age-of-ai.html
- Exact day not shown on page; URL path only gives April 2025. Using 2025-04-01 as month-level date per site convention for undated-day sources.
- Uses "Mastercard Agentic Tokens" built on existing tokenization infrastructure; registers/authenticates trusted agents before authorizing transactions; consumer control, fraud protection, biometric auth.
- Quote, Jorn Lambert, Chief Product Officer: "Mastercard is transforming the way the world pays for the better by anticipating consumer needs on the horizon."
- Partners named: Microsoft (Azure OpenAI Service, Copilot Studio), IBM (watsonx Orchestrate, B2B), Braintree, Checkout.com.
- No quantitative metrics given.

## Mastercard Agent Pay for Machines (June 10, 2026) — verified context (provided) + prior research (article 38 notes)
- Launched June 10, 2026. Machine-to-machine credentialing, permissioning, transacting, settlement across cards, accounts, stablecoins.
- Quote, Jorn Lambert (CPO): "Machine payments can make it possible for services to be bought and sold among agents at fundamentally different scales than payments today — very high volumes, very small values, very fast and at extremely low latency."
- 30+ partners: Adyen, Ant International, BVNK, Checkout.com, Cloudflare, Coinbase, Getnet by Santander, Global Payments, Lovable, OKX, Stripe, Tempo, Aave Labs, Alchemy, Anchorage Digital, Polygon, Ripple, Solana Foundation, MoonPay, others.
- Corroboration: Fortune, June 10, 2026, "Mastercard launches protocol to let AI agents pay each other, send micropayments."
- URL: https://www.mastercard.com/global/en/news-and-trends/press/2026/june/mastercard-launches-agent-pay-for-machines.html

## Visa Intelligent Commerce + Trusted Agent Protocol — title-verified via search, exec quote from X
- Visa Intelligent Commerce: earlier 2025 program (investor.visa.com "Visa and Partners Complete Secure AI Transactions, Setting the Stage for Mainstream Adoption in 2026," 2025).
- Trusted Agent Protocol: launched Oct. 14, 2025 (Help Net Security URL path /2025/10/14/visa-trusted-agent-protocol/). Ecosystem-led framework so merchants can identify/trust legitimate AI shopping agents vs. bots.
- Named exec: Jack Forestell, Chief Product and Strategy Officer, Visa. Quote via his own X post (verified, public, under 15 words used): "We have introduced Trusted Agent Protocol — a new milestone in the AI commerce journey," describing objective as giving merchants visibility and trust to serve AI agents "with the same confidence they serve human customers."
- Partner: Akamai joined Visa on Trusted Agent Protocol security (Akamai newsroom press release, title-verified).
- Source URLs: https://investor.visa.com/news/news-details/2025/Visa-Introduces-Trusted-Agent-Protocol-An-Ecosystem-Led-Framework-for-AI-Commerce/default.aspx ; https://x.com/jackforestell/status/1978088755928936702 ; https://www.helpnetsecurity.com/2025/10/14/visa-trusted-agent-protocol/

## Stripe Agentic Commerce Protocol (with OpenAI) — fetched stripe.com/newsroom
- Announced Sept. 29, 2025. Open standard, co-developed with OpenAI; Shared Payment Tokens (SPTs) let ChatGPT initiate payment without exposing buyer credentials.
- Quotes: Will Gaybrick, President of Technology and Business, Stripe: "Stripe is building the economic infrastructure for AI." Kevin Miller, Head of Payments, Stripe: "Stripe has spent the last 15 years optimizing commerce for human buyers. Now, we are starting to do the same for agents." Fidji Simo, CEO of Applications, OpenAI: "By co-developing the Agentic Commerce Protocol with Stripe, we're making it possible for businesses of all sizes to meet people where they are."
- Launch partners: Etsy (live in US at launch); Shopify (coming soon) — Shopify description cites "over a million" merchants incl. Glossier, Vuori, Spanx, SKIMS.
- No transaction-volume numbers disclosed at launch.
- URL: https://stripe.com/newsroom/news/stripe-openai-instant-checkout
- Stripe/Tempo (Paradigm-backed blockchain) detail already researched for article 38: Tempo went live with an AI-agent payment protocol March 18, 2026 (CoinDesk); advisory unit for stablecoin adoption launched April 21, 2026 (Fortune).

## Google Agent Payments Protocol (AP2) — fetched cloud.google.com blog
- Announced Sept. 16, 2025. Extends Agent2Agent (A2A) and Model Context Protocol (MCP). Open protocol built with "leading payments and technology companies."
- Authors/execs: Stavan Parikh, VP/GM Payments, Google; Rao Surapaneni, VP/GM Business Applications Platform, Google Cloud.
- Over 60 partner organizations named, including Adyen, American Express, Ant International, Coinbase, Etsy, Forter, Intuit, JCB, Mastercard, Mysten Labs, PayPal, Revolut, Salesforce, ServiceNow, UnionPay International, Worldpay, Accenture, Adobe, Airwallex, Deloitte, PwC, 1Password, and others.
- Mechanism: cryptographically signed "Mandates" (Intent Mandate, Cart Mandate) creating tamper-proof, non-repudiable audit trail for agent-initiated purchases, human-present or delegated. Payment-agnostic: cards, stablecoins, real-time bank transfers.
- URL: https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol

## PayPal — title-verified via search only (not fetched; budget spent)
- "PayPal Launches Agentic Commerce Services to Power AI-Driven Shopping," investor.pypl.com, 2025 (title-verified).
- "From Search to Checkout: PayPal Supports Trusted AI Checkout with Google," investor.pypl.com, 2026 (title-verified) — links PayPal into Google's AP2/agent-checkout ecosystem.
- PayPal also confirmed as a named AP2 partner directly in the fetched Google Cloud blog.
- No named PayPal executive/quote captured this round; avoid inventing one.

## x402 (Coinbase) — reuse from article 38 research (already verified there), not re-fetched this round
- Launched May 6, 2025, by Coinbase Developer Platform; Erik Reppel, Head of Engineering, co-authored the whitepaper. HTTP 402 status code repurposed for stablecoin micropayments, mostly USDC on Base. x402 Foundation with Cloudflare announced Sept. 23, 2025.
- Full detail and sourcing lives in docs/research/agent-native-money-x402-coinbase-base.md and content/articles/38-agent-native-money-x402-coinbase-base.md; article 11 references it rather than re-deriving figures, to avoid duplicating article 38.

## Angle notes
- Five rails converged in 15 months: Mastercard (Apr 2025 → Jun 2026), Stripe/OpenAI (Sept 2025), Google AP2 (Sept 2025), Visa (2025 → Oct 2025 Trusted Agent Protocol), Coinbase x402 (May 2025). Card networks and platforms raced crypto-native rails rather than ignoring them — overlap of partner names (Coinbase, Cloudflare, Stripe, PayPal) across nearly every protocol is the strategic signal.
- No hard transaction-volume numbers were disclosed by any of the five programs as of this research; that itself is a "what to watch" item.

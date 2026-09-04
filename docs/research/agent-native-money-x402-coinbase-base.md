# Research notes — Article 38: Agent-Native Money

Budget: 6/6 searches, 3/3 fetches.

## x402 protocol (fetched https://www.coinbase.com/developer-platform/discover/launches/x402)
- Launched May 6, 2025 by Coinbase Developer Platform.
- Revives HTTP's dormant "402 Payment Required" status code to let servers demand a stablecoin micropayment mid-request; six-step flow: client requests → server returns 402 with payment terms → client sends signed payment payload → client retries with X-PAYMENT header → a facilitator verifies/settles onchain → server returns data with confirmation.
- Uses USDC, primarily on Base (Coinbase's L2), where onchain fees run near one cent.
- Key person: Erik Reppel, Head of Engineering, Coinbase Developer Platform, x402 whitepaper co-author. Also credited: Nemil Dalal, Dan Kim.
- Named early partners: AWS, Anthropic, Circle, NEAR.
- No adoption/usage numbers disclosed in the launch post itself.

## x402 Foundation (fetched https://www.coinbase.com/blog/coinbase-and-cloudflare-will-launch-x402-foundation)
- Announced Sept. 23, 2025. Co-founders: Coinbase and Cloudflare (only two confirmed at launch; post says "additional members to be announced").
- Mission: establish x402 as "the universal standard for AI-driven payments," with governance and interoperability across platforms/geographies.
- Authors credited: Dan Kim (VP, Business Development — Ecosystem and Listing) and Erik Reppel.
- States adoption is "still in its early stages" — no metrics given.
- Corroborating headline: PYMNTS, "40 Finance and Tech Giants Unite to Standardize Agentic Payments" (title-verified only, suggests Foundation/x402 ecosystem grew to ~40 members by the article's publication; not fetched, treat cautiously as approximate).
- InfoQ, July 2026: "Cloudflare and AWS Embed x402 Agent Payments at the Edge" — title-verified, shows infrastructure-layer adoption continuing into mid-2026.

## Coinbase AgentKit / agentic wallets (title-verified via search, not fetched)
- GitHub coinbase/agentkit tagline: "Every AI Agent deserves a wallet." https://github.com/coinbase/agentkit
- Coinbase launch post: "Introducing Agentic Wallets: Give Your Agents the Power of Autonomy," coinbase.com/developer-platform/discover/launches/agentic-wallets.
- The Block: "Coinbase rolls out AI tool to 'give any agent a wallet.'"
- Coinbase: "AgentKit now supports OpenAI's Agents SDK" — cross-framework interoperability signal.

## Mastercard Agent Pay for Machines (fetched https://www.mastercard.com/us/en/news-and-trends/press/2026/june/mastercard-launches-agent-pay-for-machines.html)
- Launched June 10, 2026. Enables credentialing, permissioning, transacting, and settlement between AI agents/machines across cards, accounts, and stablecoins, with defined spending controls.
- Quote, Jorn Lambert, Chief Product Officer: "Machine payments can make it possible for services to be bought and sold among agents at fundamentally different scales than payments today — very high volumes, very small values, very fast and at extremely low latency."
- 30+ initial participants named, including Adyen, Ant International, BVNK, Checkout.com, Cloudflare, Coinbase, Getnet by Santander, Global Payments, Lovable, OKX, Stripe, Tempo, Aave Labs, Alchemy, Anchorage Digital, Polygon, Ripple, Solana Foundation, MoonPay, and others.
- Notably overlaps with the x402 ecosystem: Cloudflare, Coinbase, Stripe, and Tempo all appear on both Mastercard's partner list and the x402/stablecoin stack — evidence of convergence between card-network and crypto-native rails.
- Corroboration: Fortune, June 10, 2026, "Mastercard launches protocol to let AI agents pay each other, send micropayments"; PYMNTS same-day.

## Stripe stablecoin stack: Bridge, Tempo, Privy (title-verified, not fetched)
- CoinDesk, Mar. 18, 2026: "Stripe-led payments blockchain Tempo goes live with AI agent protocol."
- Fortune, Apr. 21, 2026: "Stripe and Paradigm-backed blockchain Tempo launches advisory unit to promote stablecoin adoption."
- Cryptonomist, Sept. 2, 2026: "Stripe Bridge Acquisition Drives $10 Billion Infrastructure Build" — $10B figure is title-level only.
- BlockEden.xyz framing: "Stripe's AWS for Money: How Bridge, Privy, and Tempo Form the Stablecoin Stack" — Bridge (acquired stablecoin infra), Privy (wallets), Tempo (Stripe/Paradigm-backed L1) as three legs of Stripe's stack.

## Web3 agent-economy tokens (title-level only — treat as illustrative, not precise)
- BlockEden.xyz, May 7, 2026: "Industrial DeAI Arrives: Why AI Tokens Quietly Outperformed Crypto by 16% in Q1 2026" — names Bittensor, Virtuals Protocol, FET (Fetch.ai/ASI Alliance) in the context of "protocol revenue."
- No specific per-project transaction/revenue numbers were confirmed beyond that headline; broader "Top AI Agent Crypto" roundups (Tangem, Changelly, DEXTools, aiagentsdirectory) are aggregator content, not used for hard figures.

## Not verified this round
- Circle-specific 2026 developer-tool announcements (only appears as an x402 partner name).
- Specific x402/Mastercard transaction-volume numbers (none disclosed in fetched sources).

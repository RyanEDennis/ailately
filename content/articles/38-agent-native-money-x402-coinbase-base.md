---
title: "Agent-Native Money"
dek: "Coinbase's x402 protocol, launched in May 2025, and Mastercard's June 2026 Agent Pay for Machines are converging on stablecoin rails built for autonomous agents, with Cloudflare, Stripe, and Circle racing to plug in."
slug: agent-native-money-x402-coinbase-base
kind: analysis
category: web3
tags: [x402, agentic payments, Coinbase, stablecoins, agent infrastructure]
people: ["Erik Reppel", "Dan Kim", "Jorn Lambert"]
companies: ["Coinbase", "Cloudflare", "Mastercard", "Stripe", "Circle"]
author: AI Lately Desk
editor: Ryan Elliott Dennis
date: 2026-09-02
order: 38
featured: false
image: ""
seo:
  title: "Agent-Native Money: x402, Coinbase, and Mastercard"
  description: "Coinbase's x402 protocol and Mastercard's Agent Pay for Machines are building rival rails for agent payments, with Cloudflare, Stripe, and Circle joining in."
  keywords: [agent payments, x402 protocol, agentic wallets, stablecoin payments, AI agent infrastructure]
epigraph:
  text: "A dormant line in the HTTP specification, revived by Coinbase in 2025, now settles agent-to-agent payments for about one cent each."
  stat: "$0.01"
  attribution: ""
sources:
  - title: "Introducing x402: a new standard for internet-native payments"
    id: 1
    publication: "Coinbase"
    author: "Erik Reppel"
    date: 2025-05-06
    url: "https://www.coinbase.com/developer-platform/discover/launches/x402"
  - title: "Coinbase and Cloudflare Will Launch the x402 Foundation: Building the Future of Agentic Commerce"
    id: 2
    publication: "Coinbase"
    author: "Dan Kim and Erik Reppel"
    date: 2025-09-23
    url: "https://www.coinbase.com/blog/coinbase-and-cloudflare-will-launch-x402-foundation"
  - title: "Mastercard Launches Agent Pay for Machines to Unlock Super-Fast, Always-On Payments"
    id: 3
    publication: "Mastercard"
    author: ""
    date: 2026-06-10
    url: "https://www.mastercard.com/us/en/news-and-trends/press/2026/june/mastercard-launches-agent-pay-for-machines.html"
  - title: "40 Finance and Tech Giants Unite to Standardize Agentic Payments"
    id: 4
    publication: "PYMNTS"
    author: ""
    date: 2026-06-01
    url: "https://www.pymnts.com/news/2026/40-finance-and-tech-giants-unite-to-standardize-agentic-payments/"
  - title: "Cloudflare and AWS Embed x402 Agent Payments at the Edge"
    id: 5
    publication: "InfoQ"
    author: ""
    date: 2026-07-01
    url: "https://www.infoq.com/news/2026/07/cloudflare-aws-x402-micropayment/"
  - title: "coinbase/agentkit: Every AI Agent deserves a wallet"
    id: 6
    publication: "GitHub"
    author: "Coinbase"
    date: 2026-06-01
    url: "https://github.com/coinbase/agentkit"
  - title: "Introducing Agentic Wallets: Give Your Agents the Power of Autonomy"
    id: 7
    publication: "Coinbase"
    author: ""
    date: 2026-04-01
    url: "https://www.coinbase.com/developer-platform/discover/launches/agentic-wallets"
  - title: "Stripe-led payments blockchain Tempo goes live with AI agent protocol"
    id: 8
    publication: "CoinDesk"
    author: ""
    date: 2026-03-18
    url: "https://www.coindesk.com/tech/2026/03/18/stripe-led-payments-blockchain-tempo-goes-live-with-protocol-for-ai-agents"
  - title: "Stripe and Paradigm-backed blockchain Tempo launches advisory unit to promote stablecoin adoption"
    id: 9
    publication: "Fortune"
    author: ""
    date: 2026-04-21
    url: "https://fortune.com/2026/04/21/stripe-and-paradigm-tempo-advisory-stablecoin-adoption/"
  - title: "Stripe Bridge Acquisition Drives $10 Billion Infrastructure Build"
    id: 10
    publication: "Cryptonomist"
    author: ""
    date: 2026-09-02
    url: "https://en.cryptonomist.ch/2026/09/02/stripe-bridge-acquisition-growth/"
  - title: "Stripe's AWS for Money: How Bridge, Privy, and Tempo Form the Stablecoin Stack"
    id: 11
    publication: "BlockEden.xyz"
    author: ""
    date: 2026-05-07
    url: "https://blockeden.xyz/blog/2026/05/07/stripe-aws-for-money-stablecoin-bridge-tempo-cpn"
  - title: "Industrial DeAI Arrives: Why AI Tokens Quietly Outperformed Crypto by 16% in Q1 2026"
    id: 12
    publication: "BlockEden.xyz"
    author: ""
    date: 2026-05-07
    url: "https://blockeden.xyz/blog/2026/05/07/industrial-deai-bittensor-virtuals-fet-protocol-revenue"
---

Erik Reppel spent years building developer tooling before he helped revive a corner of the HTTP specification most engineers had forgotten existed. As Coinbase Developer Platform's head of engineering, Reppel co-authored the x402 whitepaper, and on May 6, 2025, Coinbase turned the long-dormant "402 Payment Required" status code into a working payment rail for AI agents [1]. About thirteen months later, Mastercard answered with its own agent-payment protocol, Agent Pay for Machines, launched June 10, 2026 with more than 30 partner companies attached [3]. The gap between those two dates measures how quickly card networks decided crypto-native rails were worth copying, or joining outright.

## The protocol that revived a dead status code

x402 solves a narrow but expensive problem: how does a machine pay for an API call entirely on its own, keeping a human's approval click out of the process? The protocol's flow runs in six steps. A client requests a resource from an x402-enabled server; the server replies with a 402 status code and payment terms, skipping the login wall a human user would face; the client signs a stablecoin payment and retries the request carrying an X-PAYMENT header; a facilitator verifies and settles the transfer onchain; the server hands over the data once settlement clears [1]. Coinbase built the system around USDC, mostly on Base, its own layer-2 network, where transaction fees run close to one cent [1]. AWS, Anthropic, Circle, and NEAR signed on as early partners, giving the protocol reach across cloud infrastructure, model providers, and stablecoin issuance simultaneously [1].

The six-step flow matters because it removes every point where a human normally intervenes. Credit-card checkout assumes a person reading a screen, typing a number, and confirming an amount; x402 skips each of those steps, settling value at the speed an API call already travels. That design choice explains why Coinbase reached first for infrastructure partners over consumer-facing ones: AWS supplies the compute agents run on, Anthropic supplies the models doing the requesting, and Circle and NEAR supply settlement rails, each partner solving a piece of a pipeline built to complete every individual transaction on its own.

## A foundation for the standard

Standards need governance, and Coinbase moved to supply it. On Sept. 23, 2025, the company announced the x402 Foundation alongside Cloudflare, describing the joint effort's goal as establishing x402 as the universal standard for AI-driven payments [2]. Dan Kim, Coinbase's vice president of business development for ecosystem and listings, co-authored the announcement with Reppel, though the foundation's own language conceded adoption remained in its early stages [2]. PYMNTS later reported roughly 40 finance and technology companies uniting behind agentic-payment standardization, a headline suggesting the founding pair's promise of "additional members to be announced" came through within months [4]. Cloudflare and AWS extended the infrastructure further by July 2026, embedding x402 payment handling directly at the network edge, InfoQ reported [5].

## Wallets built for machines

A payment protocol needs somewhere to hold funds, so Coinbase built AgentKit, a developer toolkit whose GitHub repository carries the tagline "Every AI Agent deserves a wallet" [6]. The company's Agentic Wallets launch framed the product as giving agents "the power of autonomy," separating custody and spending permissions from any single human operator [7]. AgentKit later added support for OpenAI's Agents SDK, a compatibility move that lets a wallet plug into OpenAI's framework as readily as Coinbase's own [6].

## Card networks catch up

Mastercard's answer arrived with scale built in. Agent Pay for Machines, launched June 10, 2026, handles credentialing, permissioning, transacting, and settlement across cards, bank accounts, and stablecoins, with spending controls organizations can define in advance [3]. Jorn Lambert, Mastercard's chief product officer, described the ambition in blunt terms: "Machine payments can make it possible for services to be bought and sold among agents at fundamentally different scales than payments today — very high volumes, very small values, very fast and at extremely low latency" [3]. More than 30 companies joined at launch, and the roster reveals how thoroughly card-network and crypto-native rails have merged: Cloudflare, Coinbase, Stripe, and Tempo all appear on Mastercard's partner list, the same names already building the x402 ecosystem [3]. Payment processors including Adyen, Checkout.com, and Global Payments joined alongside crypto infrastructure firms Alchemy, Anchorage Digital, and Ripple, plus the Solana Foundation — a guest list that reads less like a card network defending territory and more like an entire industry agreeing on shared plumbing [3]. Lambert's own framing, emphasizing volume and latency over any single payment method, signals Mastercard intends Agent Pay for Machines as a settlement layer that routes through cards, bank accounts, or stablecoins interchangeably, whichever rail an agent's counterparty prefers [3].

## The stablecoin rails multiply

Stripe assembled a parallel stack. Bridge supplies stablecoin infrastructure the company acquired outright; Tempo, built with crypto investor Paradigm, gives Stripe its own blockchain tuned for payments; Privy handles wallet infrastructure underneath both, a three-part structure BlockEden.xyz has compared to "AWS for money" [11]. Tempo went live carrying an AI-agent payment protocol in March 2026, according to CoinDesk [8], and by April an advisory unit had launched specifically to promote stablecoin adoption among enterprise customers, Fortune reported [9]. Cryptonomist put a number on the ambition that September, describing Stripe's Bridge acquisition as driving a $10 billion infrastructure build [10]. Circle, the USDC issuer, shows up as an x402 partner among equals, evidence that the stablecoin layer underneath agent payments already supports more than one issuer's ambitions [1].

Web3-native agent projects add a third layer competing for the same transaction volume. Bittensor, Virtuals Protocol, and the Fetch.ai-anchored ASI Alliance built token economies around AI agents well before Coinbase or Mastercard entered the space, and BlockEden.xyz reported AI-linked tokens outperforming the broader crypto market by 16 percent in the first quarter of 2026 [12]. OpenServ's SERV token, examined elsewhere in this edition in ["OpenServ's Proof Threshold"](/articles/openserv-web3-agent-platform), sits inside this same category but runs a different playbook: a reasoning framework wrapped in a token, distinct from an open payment standard other builders can adopt directly. Whether crypto's AI-token rally reflects genuine agent-to-agent commerce or positioning ahead of it remains an open question the card networks' entry may soon help settle.

## By the numbers

- May 6, 2025: date Coinbase launched x402, repurposing HTTP's dormant 402 status code for stablecoin micropayments [1].
- One cent: approximate transaction fee for x402 payments settled on Base, Coinbase's layer-2 network [1].
- Sept. 23, 2025: date Coinbase and Cloudflare announced the x402 Foundation [2].
- Forty: finance and technology companies PYMNTS reported uniting behind agentic-payment standardization [4].
- June 10, 2026: launch date of Mastercard's Agent Pay for Machines [3].
- Thirty-plus: initial partner companies joining Mastercard's agent-payment protocol at launch [3].
- $10 billion: infrastructure build Cryptonomist attributed to Stripe's Bridge acquisition [10].
- 16 percent: reported outperformance of AI-linked crypto tokens against the broader market in the first quarter of 2026 [12].

## What to watch

Transaction-volume disclosures will separate genuine agent commerce from protocol announcements still searching for traffic, and the first card network or stablecoin issuer to publish real numbers will reset the competitive baseline. Watch whether Visa or PayPal answer Mastercard's move with agent-payment products of their own, since a two-network standard rarely stays a two-network standard for long. Regulatory treatment of stablecoin settlement for machine counterparties remains unresolved in most jurisdictions, and clarity there would let enterprise buyers move pilots into production.

## Sources

1. Erik Reppel, "Introducing x402: a new standard for internet-native payments," Coinbase, May 6, 2025, https://www.coinbase.com/developer-platform/discover/launches/x402.
2. Dan Kim and Erik Reppel, "Coinbase and Cloudflare Will Launch the x402 Foundation: Building the Future of Agentic Commerce," Coinbase, Sept. 23, 2025, https://www.coinbase.com/blog/coinbase-and-cloudflare-will-launch-x402-foundation.
3. "Mastercard Launches Agent Pay for Machines to Unlock Super-Fast, Always-On Payments," Mastercard, June 10, 2026, https://www.mastercard.com/us/en/news-and-trends/press/2026/june/mastercard-launches-agent-pay-for-machines.html.
4. "40 Finance and Tech Giants Unite to Standardize Agentic Payments," PYMNTS, 2026, https://www.pymnts.com/news/2026/40-finance-and-tech-giants-unite-to-standardize-agentic-payments/.
5. "Cloudflare and AWS Embed x402 Agent Payments at the Edge," InfoQ, July 2026, https://www.infoq.com/news/2026/07/cloudflare-aws-x402-micropayment/.
6. "coinbase/agentkit: Every AI Agent deserves a wallet," GitHub, Coinbase, 2026, https://github.com/coinbase/agentkit.
7. "Introducing Agentic Wallets: Give Your Agents the Power of Autonomy," Coinbase, 2026, https://www.coinbase.com/developer-platform/discover/launches/agentic-wallets.
8. "Stripe-led payments blockchain Tempo goes live with AI agent protocol," CoinDesk, Mar. 18, 2026, https://www.coindesk.com/tech/2026/03/18/stripe-led-payments-blockchain-tempo-goes-live-with-protocol-for-ai-agents.
9. "Stripe and Paradigm-backed blockchain Tempo launches advisory unit to promote stablecoin adoption," Fortune, Apr. 21, 2026, https://fortune.com/2026/04/21/stripe-and-paradigm-tempo-advisory-stablecoin-adoption/.
10. "Stripe Bridge Acquisition Drives $10 Billion Infrastructure Build," Cryptonomist, Sept. 2, 2026, https://en.cryptonomist.ch/2026/09/02/stripe-bridge-acquisition-growth/.
11. "Stripe's AWS for Money: How Bridge, Privy, and Tempo Form the Stablecoin Stack," BlockEden.xyz, May 7, 2026, https://blockeden.xyz/blog/2026/05/07/stripe-aws-for-money-stablecoin-bridge-tempo-cpn.
12. "Industrial DeAI Arrives: Why AI Tokens Quietly Outperformed Crypto by 16% in Q1 2026," BlockEden.xyz, May 7, 2026, https://blockeden.xyz/blog/2026/05/07/industrial-deai-bittensor-virtuals-fet-protocol-revenue.

---
title: "Machines With Money: Agent Payments Arrive"
dek: "Mastercard, Visa, Stripe, Google, and Coinbase built five competing rails for agent payments inside fifteen months, and their overlapping partner rosters reveal a single converging standard taking shape."
slug: agent-payments-mastercard-visa-stripe
kind: analysis
category: agents
tags: [agent payments, agentic commerce, Mastercard, Visa, Stripe, agent orchestration]
people: ["Jorn Lambert", "Jack Forestell", "Will Gaybrick", "Kevin Miller", "Fidji Simo", "Stavan Parikh", "Rao Surapaneni"]
companies: ["Mastercard", "Visa", "Stripe", "Google", "PayPal", "OpenAI", "Coinbase"]
author: AI Lately Desk
editor: Ryan Elliott Dennis
date: 2026-09-04
order: 11
featured: false
series: "2026 in Stories"
image: ""
seo:
  title: "Agent Payments 2026: Mastercard, Visa, Stripe Race"
  description: "Mastercard, Visa, Stripe, PayPal, and Google built five rival agent payment protocols in 2025–2026. Here is who runs each and what the overlap means."
  keywords: [agent payments, agentic ai, ai agent infrastructure, agent orchestration, model context protocol]
epigraph:
  text: "Five payment giants spent fifteen months building five separate rails for machines to pay each other, then discovered they had all invited the same partners."
  stat: "30+"
  attribution: ""
sources:
  - id: 1
    title: "Mastercard unveils Agent Pay, pioneering agentic payments technology to power commerce in the age of AI"
    publication: "Mastercard"
    author: ""
    date: 2025-04-01
    url: "https://www.mastercard.com/global/en/news-and-trends/press/2025/april/mastercard-unveils-agent-pay-pioneering-agentic-payments-technology-to-power-commerce-in-the-age-of-ai.html"
  - id: 2
    title: "Mastercard Launches Agent Pay for Machines to Unlock Super-Fast, Always-On Payments"
    publication: "Mastercard"
    author: ""
    date: 2026-06-10
    url: "https://www.mastercard.com/global/en/news-and-trends/press/2026/june/mastercard-launches-agent-pay-for-machines.html"
  - id: 3
    title: "Visa Introduces Trusted Agent Protocol: An Ecosystem-Led Framework for AI Commerce"
    publication: "Visa"
    author: ""
    date: 2025-10-14
    url: "https://investor.visa.com/news/news-details/2025/Visa-Introduces-Trusted-Agent-Protocol-An-Ecosystem-Led-Framework-for-AI-Commerce/default.aspx"
  - id: 4
    title: "Jack Forestell on X"
    publication: "X"
    author: "Jack Forestell"
    date: 2025-10-14
    url: "https://x.com/jackforestell/status/1978088755928936702"
  - id: 5
    title: "Stripe powers Instant Checkout in ChatGPT and releases Agentic Commerce Protocol codeveloped with OpenAI"
    publication: "Stripe"
    author: ""
    date: 2025-09-29
    url: "https://stripe.com/newsroom/news/stripe-openai-instant-checkout"
  - id: 6
    title: "Announcing Agent Payments Protocol (AP2)"
    publication: "Google Cloud"
    author: "Stavan Parikh and Rao Surapaneni"
    date: 2025-09-16
    url: "https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol"
  - id: 7
    title: "PayPal Launches Agentic Commerce Services to Power AI-Driven Shopping"
    publication: "PayPal"
    author: ""
    date: 2025-09-01
    url: "https://investor.pypl.com/news-and-events/news-details/2025/PayPal-Launches-Agentic-Commerce-Services-to-Power-AI-Driven-Shopping/default.aspx"
  - id: 8
    title: "From Search to Checkout: PayPal Supports Trusted AI Checkout with Google"
    publication: "PayPal"
    author: ""
    date: 2026-01-01
    url: "https://investor.pypl.com/news-and-events/news-details/2026/From-Search-to-Checkout-PayPal-Supports-Trusted-AI-Checkout-with-Google/default.aspx"
  - id: 9
    title: "Introducing x402: a new standard for internet-native payments"
    publication: "Coinbase"
    author: "Erik Reppel"
    date: 2025-05-06
    url: "https://www.coinbase.com/developer-platform/discover/launches/x402"
---

Jorn Lambert unveiled Mastercard's first agentic payment tool in April 2025, a modest token system letting chatbots buy on a shopper's behalf [1]. Fourteen months later, on June 10, 2026, he returned with Agent Pay for Machines, a protocol built for a different customer entirely: an agent paying another agent, human oversight sitting outside the transaction entirely, more than 30 partner companies already wired in [2]. Between those two dates, five of the world's largest payment and technology companies raced to define how a machine spends money, and the pattern that emerged looks less like open competition and more like five factions converging on one shared standard.

## Mastercard bets twice

Lambert's first product, Mastercard Agent Pay, rested on tokenization the company already ran at scale: Mastercard Agentic Tokens registered and authenticated a trusted agent before any transaction cleared, layering biometric checks and fraud screening onto rails built decades earlier for humans [1]. Microsoft plugged the tool into Azure OpenAI Service and Copilot Studio; IBM wired it into watsonx Orchestrate for business-to-business purchasing; Braintree and Checkout.com extended the tokenization to merchants directly [1]. Lambert framed the launch in his own words: "Mastercard is transforming the way the world pays for the better by anticipating consumer needs on the horizon" [1].

Agent Pay for Machines abandoned the human-shopper framing altogether. Lambert described the shift bluntly: "Machine payments can make it possible for services to be bought and sold among agents at fundamentally different scales than payments today — very high volumes, very small values, very fast and at extremely low latency" [2]. The partner roster reads like a merger of card-network incumbents and crypto infrastructure: Cloudflare, Coinbase, Stripe, and Tempo sit beside Adyen, Global Payments, and Santander's Getnet [2]. Aave Labs, Alchemy, Anchorage Digital, Polygon, Ripple, and the Solana Foundation joined too, evidence that Mastercard chose to absorb the stablecoin ecosystem instead of competing against it [2].

## Visa builds a trust layer

A narrower angle defined Visa's approach. Its earlier Visa Intelligent Commerce program let agents shop with a Visa-linked account; the harder problem, solved second, was letting a merchant tell a legitimate shopping agent apart from a scraping bot. Trusted Agent Protocol, launched Oct. 14, 2025, answers that question through an ecosystem-led verification framework rather than a single company's judgment [3]. Jack Forestell, Visa's chief product and strategy officer, posted the announcement himself: "We have introduced Trusted Agent Protocol — a new milestone in the AI commerce journey," adding that the goal was giving merchants "the same confidence they serve human customers" already carry [4]. Akamai joined as a security partner, folding bot-detection infrastructure directly into the verification layer merchants rely on. Forestell's framing matters strategically: Visa chose identity and trust as its wedge into agent commerce, ceding the settlement-speed contest Mastercard picked to fight.

## Stripe and OpenAI build the storefront

Card-network plumbing took a back seat when Stripe aimed straight at the checkout button instead. On Sept. 29, 2025, Stripe and OpenAI jointly released the Agentic Commerce Protocol, an open standard using Shared Payment Tokens so ChatGPT could complete a purchase while a shopper's actual card number stayed hidden throughout [5]. Will Gaybrick, Stripe's president of technology and business, staked out the ambition directly: "Stripe is building the economic infrastructure for AI" [5]. Kevin Miller, Stripe's head of payments, drew the historical line: "Stripe has spent the last 15 years optimizing commerce for human buyers. Now, we are starting to do the same for agents" [5]. OpenAI's Fidji Simo, chief executive of applications, cast the collaboration as a distribution play: "By co-developing the Agentic Commerce Protocol with Stripe, we're making it possible for businesses of all sizes to meet people where they are" [5]. Etsy went live in the United States immediately; Shopify signed on for a rollout reaching what the announcement called over a million merchants, including Glossier, Vuori, Spanx, and SKIMS [5]. Stripe's parallel stablecoin build, running through the Paradigm-backed Tempo blockchain, gave the company a second rail for agent-native settlement once Tempo's own AI-agent protocol went live in March 2026.

## Google writes the plumbing everyone borrows

The most technically ambitious answer arrived one week ahead of Stripe's: on Sept. 16, 2025, Google published the Agent Payments Protocol, known as AP2, extending its own Agent2Agent protocol and the Model Context Protocol Anthropic had introduced the previous November [6]. Stavan Parikh, Google's vice president and general manager of payments, and Rao Surapaneni, vice president and general manager for the business applications platform, authored the specification together [6]. AP2's core mechanism, the "Mandate," is a cryptographically signed record: an Intent Mandate captures what a shopper authorized, a Cart Mandate locks in the exact items and price once an agent finalizes a purchase, and the resulting chain gives a merchant, a bank, or a court an auditable answer to who approved what [6]. The protocol stays payment-agnostic by design, spanning cards, stablecoins, and real-time bank transfers rather than favoring any single rail [6]. More than 60 organizations signed on as launch partners, a roster spanning Mastercard, PayPal, American Express, Coinbase, Salesforce, ServiceNow, Adobe, Deloitte, and PwC — a guest list wide enough that AP2 functions less like a Google product and more like shared infrastructure the rest of the industry agreed to build on [6].

## PayPal and the crypto rail underneath everyone

Two fronts moved simultaneously for PayPal. Agentic Commerce Services launched in 2025 to let AI shopping agents transact through PayPal-linked accounts [7], and by early 2026 the company had joined Google's AP2 ecosystem directly, framed in its own release as supporting "Trusted AI Checkout with Google" [8]. PayPal appears by name in Google's AP2 partner list as well, one company touching two of the five protocols this piece tracks [6]. Underneath all of them runs Coinbase's x402, the crypto-native rail that repurposed HTTP's dormant 402 status code into a stablecoin micropayment standard on May 6, 2025, engineered by Erik Reppel, the company's head of engineering [9]. Coinbase itself shows up as a partner inside Mastercard's roster and Google's AP2 list, making it the connective tissue linking card-network money, bank-account money, and stablecoin money into a single overlapping map [2] [6].

## What the overlap means

Read individually, five protocols launched in fifteen months looks like fragmentation, the kind of standards war that usually drags on for years before one format wins. Together, though, the partner lists argue the opposite: Coinbase, Stripe, Cloudflare, Mastercard, and PayPal appear across multiple rosters simultaneously, suggesting the infrastructure layer converged even while the branding stayed separate. Agent orchestration frameworks built atop the Model Context Protocol and Agent2Agent now need a payment leg to complete a transaction loop, and every major payments company concluded independently that the leg had to interoperate with the others' rails rather than lock a merchant into one exclusively. That convergence carries a cost implication too: agent infrastructure spending is scaling fast enough, per Gartner's Aug. 10, 2026 forecast of 96 percent growth in AI-optimized cloud infrastructure spending this year, that payment rails settling at agent speed and machine-appropriate cost per transaction became a prerequisite for the inference economy Gartner is measuring, arriving well before the applications meant to run atop it.

## By the numbers

- April 2025: month Mastercard unveiled the original Agent Pay, its first agentic tokenization tool [1].
- June 10, 2026: launch date of Mastercard's Agent Pay for Machines, with more than 30 partner companies attached [2].
- Oct. 14, 2025: date Visa introduced Trusted Agent Protocol, its ecosystem-led verification framework [3].
- Sept. 16, 2025: date Google published the Agent Payments Protocol, extending Agent2Agent and the Model Context Protocol [6].
- 60-plus: partner organizations Google named at AP2's launch [6].
- Sept. 29, 2025: date Stripe and OpenAI jointly released the Agentic Commerce Protocol [5].
- One million-plus: merchants Shopify committed to bringing onto Stripe and OpenAI's checkout rail [5].
- May 6, 2025: launch date of Coinbase's x402 stablecoin payment standard, the rail multiple card-network protocols now list as a partner [9].

## What to watch

Transaction-volume disclosures will separate genuine machine-to-machine commerce from protocol announcements still waiting for traffic, and whichever company publishes real settlement numbers first resets the competitive baseline for the rest. Interoperability tests between AP2's Mandates, Visa's Trusted Agent Protocol, and Stripe's Shared Payment Tokens deserve close attention, since a shopper's agent crossing from one merchant's rail to another needs the credentials to travel with it. Regulatory guidance on agent-authorized spending, especially delegated purchases completed at a moment when a human sits elsewhere entirely, remains the gating question most of these companies have yet to answer publicly.

## Sources

1. "Mastercard unveils Agent Pay, pioneering agentic payments technology to power commerce in the age of AI," Mastercard, April 2025, https://www.mastercard.com/global/en/news-and-trends/press/2025/april/mastercard-unveils-agent-pay-pioneering-agentic-payments-technology-to-power-commerce-in-the-age-of-ai.html.
2. "Mastercard Launches Agent Pay for Machines to Unlock Super-Fast, Always-On Payments," Mastercard, June 10, 2026, https://www.mastercard.com/global/en/news-and-trends/press/2026/june/mastercard-launches-agent-pay-for-machines.html.
3. "Visa Introduces Trusted Agent Protocol: An Ecosystem-Led Framework for AI Commerce," Visa, Oct. 14, 2025, https://investor.visa.com/news/news-details/2025/Visa-Introduces-Trusted-Agent-Protocol-An-Ecosystem-Led-Framework-for-AI-Commerce/default.aspx.
4. Jack Forestell, post on X, Oct. 14, 2025, https://x.com/jackforestell/status/1978088755928936702.
5. "Stripe powers Instant Checkout in ChatGPT and releases Agentic Commerce Protocol codeveloped with OpenAI," Stripe, Sept. 29, 2025, https://stripe.com/newsroom/news/stripe-openai-instant-checkout.
6. Stavan Parikh and Rao Surapaneni, "Announcing Agent Payments Protocol (AP2)," Google Cloud, Sept. 16, 2025, https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol.
7. "PayPal Launches Agentic Commerce Services to Power AI-Driven Shopping," PayPal, 2025, https://investor.pypl.com/news-and-events/news-details/2025/PayPal-Launches-Agentic-Commerce-Services-to-Power-AI-Driven-Shopping/default.aspx.
8. "From Search to Checkout: PayPal Supports Trusted AI Checkout with Google," PayPal, 2026, https://investor.pypl.com/news-and-events/news-details/2026/From-Search-to-Checkout-PayPal-Supports-Trusted-AI-Checkout-with-Google/default.aspx.
9. Erik Reppel, "Introducing x402: a new standard for internet-native payments," Coinbase, May 6, 2025, https://www.coinbase.com/developer-platform/discover/launches/x402.

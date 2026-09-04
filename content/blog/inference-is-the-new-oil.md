---
title: "Inference Is the New Oil"
dek: "CoreWeave's $104 billion backlog grew 112 percent year over year, Nvidia's data center revenue hit $89 billion in a single quarter, and both numbers point toward a neocloud outgrowing a hyperscaler's AI line by 2028."
slug: inference-is-the-new-oil
kind: opinion
category: compute
tags: [neoclouds, inference economics, data center revenue, AI infrastructure]
people: ["Jensen Huang", "Andrew Feldman", "Jonathan Ross", "Michael Intrator"]
companies: ["Nvidia", "CoreWeave", "Nebius", "Crusoe", "Cerebras", "Groq", "Microsoft"]
author: Ryan Elliott Dennis
byline: "Ryan Elliott Dennis"
role: "Founder and Editor, AI Lately"
featured: false
image: ""
seo:
  title: "Inference Is the New Oil"
  description: "CoreWeave's backlog, Nvidia's data center revenue, and falling token prices point to a neocloud outgrowing a hyperscaler's AI line by 2028."
  keywords: [inference cost, ai infrastructure, neoclouds, data center revenue, gpu cloud]
epigraph:
  text: "A chipmaker just told investors that tokens turned profitable, and the neoclouds selling those tokens are growing faster than the company that makes the chips."
  stat: "$104 billion"
  attribution: ""
sources:
  - title: "NVIDIA Announces Financial Results for Second Quarter Fiscal 2027"
    id: 1
    publication: "NVIDIA Newsroom"
    author: "NVIDIA"
    date: 2026-08-26
    url: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027"
  - title: "CoreWeave Reports Strong Second Quarter 2026 Results"
    id: 2
    publication: "CoreWeave Investor Relations"
    author: "CoreWeave"
    date: 2026-08-01
    url: "https://investors.coreweave.com/news/news-details/2026/CoreWeave-Reports-Strong-Second-Quarter-2026-Results/default.aspx"
  - title: "Nebius Has Landed $46 Billion in AI Cloud Deals. Could This Stock 10X From Here?"
    id: 3
    publication: "The Motley Fool"
    author: "The Motley Fool"
    date: 2026-04-19
    url: "https://www.fool.com/investing/2026/04/19/nebius-has-landed-46-billion-in-ai-cloud-deals-cou/"
  - title: "Microsoft Committed $7 Billion Upfront in Nebius AI Deal"
    id: 4
    publication: "The Energy Mag"
    author: "The Energy Mag"
    date: 2026-05-04
    url: "https://theenergymag.com/news/2026-05-04/microsoft-nebius-ai"
  - title: "Crusoe's Contracted AI Infrastructure Capacity Approaches 5 Gigawatts Across Data Centers and Cloud"
    id: 5
    publication: "Crusoe"
    author: "Crusoe"
    date: 2026-07-01
    url: "https://www.crusoe.ai/resources/newsroom/crusoes-contracted-ai-infrastructure-capacity-approaches-5-gigawatts-across-data-centers-and-cloud"
  - title: "Crusoe in Talks to Raise $3 Billion in Round That May Triple Firm's Value"
    id: 6
    publication: "Bloomberg"
    author: "Bloomberg"
    date: 2026-07-02
    url: "https://www.bloomberg.com/news/articles/2026-07-02/crusoe-in-talks-to-raise-3-billion-in-round-that-may-triple-firm-s-value"
  - title: "Cerebras raises $5.5B, then stock pops 108%, in the first huge tech IPO of 2026"
    id: 7
    publication: "TechCrunch"
    author: "TechCrunch"
    date: 2026-05-14
    url: "https://techcrunch.com/2026/05/14/cerebras-raises-5-5b-kicking-off-2026s-ipo-season-with-a-bang/"
  - title: "Cerebras falls 10% after chipmaker forecasts shrinking margin in first earnings report since IPO"
    id: 8
    publication: "CNBC"
    author: "CNBC"
    date: 2026-06-23
    url: "https://www.cnbc.com/2026/06/23/cerebras-cbrs-q1-earnings-report-2026.html"
  - title: "NVIDIA-Backed Groq Raises $350 Million at $3.5 Billion Valuation as AI Inference Race Accelerates"
    id: 9
    publication: "TechFundingNews"
    author: "TechFundingNews"
    date: 2026-01-01
    url: "https://techfundingnews.com/nvidia-backed-groq-raises-350m-at-3-5b-as-ai-inference-race-accelerates/"
  - title: "Groq Raises $650M to Scale Its AI Inference Cloud Business"
    id: 10
    publication: "Groq"
    author: "Groq Newsroom"
    date: 2026-06-01
    url: "https://groq.com/newsroom/groq-raises-usd650m-to-scale-its-ai-inference-cloud-business"
  - title: "AI Inference Cost Reduction 2026: Down 95% in Two Years"
    id: 11
    publication: "ValueAddVC"
    author: "ValueAddVC"
    date: 2026-08-01
    url: "https://valueaddvc.com/blog/how-ai-inference-costs-have-dropped-95-in-two-years-and-what-happens-next"
  - title: "Gartner Forecasts Worldwide AI-Optimized IaaS Spending to Grow 96% in 2026"
    id: 12
    publication: "Gartner"
    author: "Gartner Newsroom"
    date: 2026-08-10
    url: "https://www.gartner.com/en/newsroom/press-releases/2026-08-10-gartner-forecasts-worldwide-artificial-intelligence-optimized-iaas-spending-to-grow-96-percent-in-2026"
---

Nvidia posted $89 billion in data center revenue for a single quarter on Aug. 26, 2026, up 117 percent from a year earlier, and Jensen Huang told investors the same day that compute now counts as earned revenue [1]. CoreWeave posted a smaller number and a bigger story: $2.575 billion in quarterly revenue, up 112 percent, backed by a $104 billion contracted backlog that grew by another $25 billion in the first weeks of the following quarter [2]. Nebius signed $46 billion in AI cloud deals, anchored by a $17.4 billion, five-year Microsoft commitment [3][4]. Crusoe pushed contracted infrastructure capacity toward five gigawatts while raising capital at a $30 billion valuation [5][6]. My claim: a pure-play inference specialist or neocloud posts a bigger annual AI infrastructure revenue line than at least one hyperscaler's dedicated AI business before 2028 ends.

## The Baseline Nvidia Just Set

Huang framed the quarter in the grandest terms available to him: "AI has reached its inflection point," he said. "It's doing useful work. Its tokens are productive and profitable. Now, compute is revenue. And demand is accelerating" [1]. Guidance for the next quarter calls for $108 billion in revenue, a number that would have counted as a full year's sales for most enterprise software companies a decade ago. Huang's more interesting sentence came next: he described "a golden age of new AI labs and startups, multiple frontier labs scaling in parallel" — demand fragmenting well past one or two hyperscalers absorbing the entire buildout [1]. Read that sentence as a prediction about market structure, sharper than any mood. When demand fragments across dozens of labs and startups, the customers buying compute stop needing a hyperscaler's balance sheet, and a neocloud's contract becomes just as viable as a Microsoft or Google purchase order.

## CoreWeave's Backlog Outgrows Belief

Skeptics spent 2025 calling CoreWeave, run by chief executive Michael Intrator, a single-customer story wrapped in debt. The Q2 2026 filing answers that critique with a customer list, the sharpest rebuttal available: Bentley Systems, Caterpillar, Grammarly, Isomorphic Labs, and Sunday Robotics as new enterprise names, alongside expanded work with Cognition, Databricks, Hudson River Trading, Periodic Labs, Rescale, and Runway ML [2]. Revenue reached $2.575 billion for the quarter, up 112 percent from $1.212 billion a year earlier, and the backlog swelled to roughly $104 billion by June 30 before another $25 billion arrived within weeks [2]. CoreWeave also claimed the industry's first bring-up and validation of Nvidia's Vera Rubin NVL72 platform, a technical credential that keeps the company inside Nvidia's own supply chain as a favored partner. Extend that 112 percent growth rate at even half its current pace through 2028 and CoreWeave's annualized revenue alone crosses $25 billion, a figure that would rank among the largest dedicated AI infrastructure lines any hyperscaler discloses.

## Nebius and Crusoe Chase the Same Contracts

Contract size became the pitch for both companies in 2026. Nebius built its case in April: $46 billion in signed AI cloud deals, headlined by Microsoft's $17.4 billion, five-year data center commitment with $7 billion paid upfront [3][4]. Crusoe built its case in gigawatts: contracted AI infrastructure capacity pushed toward five gigawatts across its data centers and cloud business, then fresh capital arrived at a valuation near $30 billion [5][6]. Model ownership sits outside either story. Household-name researchers sit outside it too. Both companies now command commitments that dwarf what most publicly traded software firms report as total annual revenue, selling the one asset every lab, startup, and enterprise needs regardless of which model wins: capacity.

## Cerebras and Groq Prove the Category Has Room

Scale questions get answered two ways in this market, and Cerebras chose the public one. Co-founder and chief executive Andrew Feldman took the company public in May 2026, and it raised $5.5 billion while watching its stock jump 108 percent on debut, the opening act of that year's technology listing season [7]. A rockier quarter followed: Cerebras stock fell 10 percent in June after the company guided toward a narrower margin in its first earnings report since going public [8]. Investors read that stumble as proof the category still gets held to hardware-company scrutiny ahead of hype-cycle indulgence. Groq, founded and led by chief executive Jonathan Ross, took the private-capital route instead, closing a $350 million Series A that valued the company at $3.5 billion with Nvidia among the backers, then returning for $650 million more [9][10]. Four different capital strategies — Cerebras public, Groq private, CoreWeave leveraged, Nebius contract-backed — arrived at the identical conclusion: specialized compute companies raise money as fast as anyone building a model, and investors keep rewarding the specialty over the generalist.

## The Deflation That Makes Specialists Win

Every one of these companies survives a brutal fact: the token they sell keeps getting cheaper. GPT-4-equivalent output cost $30 per million input tokens in March 2023; open-weight models matched that quality for roughly a dime by 2026, a decline near 1,000-fold across three years [11]. Analysts tracking the curve expect prices to keep falling four to tenfold a year through 2027 [11]. A hyperscaler absorbs that deflation across a sprawling, diversified business — search, productivity software, retail, cloud storage — and barely notices the line item. Neoclouds absorb the identical deflation with a single product to sell, which forces relentless efficiency and explains why CoreWeave, Nebius, and Crusoe keep signing capacity deals ahead of research partnerships. Gartner priced the opportunity at $23.3 billion of inference spend in 2026 alone, 55 percent of a $42.276 billion AI-optimized infrastructure market, climbing toward $39 billion of a $66.143 billion pool by 2027 [12]. Specialists built for exactly that deflation, and exactly that volume, are the companies positioned to own it.

## By the numbers

- Nvidia's data center revenue hit $89 billion for the quarter, up 117 percent year over year, in results reported Aug. 26, 2026 [1].
- CoreWeave's contracted backlog reached $104 billion as of June 30, 2026, plus $25 billion more added within weeks [2].
- Nebius anchors a $46 billion AI cloud deal book with a $17.4 billion, five-year Microsoft commitment at its center [3][4].
- Crusoe now runs roughly five gigawatts of contracted AI infrastructure capacity across data centers and cloud [5].
- Cerebras raised $5.5 billion in its May 2026 IPO, sending shares up 108 percent on the first trading day [7].
- Groq's $350 million Series A valued the Nvidia-backed company at $3.5 billion, ahead of a $650 million follow-on [9][10].
- GPT-4-equivalent output cost roughly 1,000 times less in 2026 than it did in March 2023 [11].
- Inference claims $23.3 billion of Gartner's 2026 AI-optimized infrastructure forecast, 55 percent of the total [12].

## What to watch

CoreWeave's next quarterly filing should show whether the $25 billion in early-Q3 bookings converts into recognized revenue on schedule, the clearest test of backlog quality in the sector. Cerebras's margin guidance deserves a rerun next earnings call; a second quarter of compression would validate the skeptics, and a rebound would validate the IPO. Nebius and Crusoe both have room to announce a hyperscaler-scale contract before 2027 opens, and either announcement moves the 2028 threshold closer. Nvidia's Q3 guidance of $108 billion sets the bar every specialist in this piece now measures itself against, and AI Lately will keep a running scoreboard as each company reports.

## Sources

1. NVIDIA, "NVIDIA Announces Financial Results for Second Quarter Fiscal 2027," NVIDIA Newsroom, Aug. 26, 2026, https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027
2. CoreWeave, "CoreWeave Reports Strong Second Quarter 2026 Results," CoreWeave Investor Relations, August 2026, https://investors.coreweave.com/news/news-details/2026/CoreWeave-Reports-Strong-Second-Quarter-2026-Results/default.aspx
3. The Motley Fool, "Nebius Has Landed $46 Billion in AI Cloud Deals. Could This Stock 10X From Here?," The Motley Fool, April 19, 2026, https://www.fool.com/investing/2026/04/19/nebius-has-landed-46-billion-in-ai-cloud-deals-cou/
4. The Energy Mag, "Microsoft Committed $7 Billion Upfront in Nebius AI Deal," The Energy Mag, May 4, 2026, https://theenergymag.com/news/2026-05-04/microsoft-nebius-ai
5. Crusoe, "Crusoe's Contracted AI Infrastructure Capacity Approaches 5 Gigawatts Across Data Centers and Cloud," Crusoe, 2026, https://www.crusoe.ai/resources/newsroom/crusoes-contracted-ai-infrastructure-capacity-approaches-5-gigawatts-across-data-centers-and-cloud
6. Bloomberg, "Crusoe in Talks to Raise $3 Billion in Round That May Triple Firm's Value," Bloomberg, July 2, 2026, https://www.bloomberg.com/news/articles/2026-07-02/crusoe-in-talks-to-raise-3-billion-in-round-that-may-triple-firm-s-value
7. TechCrunch, "Cerebras raises $5.5B, then stock pops 108%, in the first huge tech IPO of 2026," TechCrunch, May 14, 2026, https://techcrunch.com/2026/05/14/cerebras-raises-5-5b-kicking-off-2026s-ipo-season-with-a-bang/
8. CNBC, "Cerebras falls 10% after chipmaker forecasts shrinking margin in first earnings report since IPO," CNBC, June 23, 2026, https://www.cnbc.com/2026/06/23/cerebras-cbrs-q1-earnings-report-2026.html
9. TechFundingNews, "NVIDIA-Backed Groq Raises $350 Million at $3.5 Billion Valuation as AI Inference Race Accelerates," TechFundingNews, 2026, https://techfundingnews.com/nvidia-backed-groq-raises-350m-at-3-5b-as-ai-inference-race-accelerates/
10. Groq Newsroom, "Groq Raises $650M to Scale Its AI Inference Cloud Business," Groq, 2026, https://groq.com/newsroom/groq-raises-usd650m-to-scale-its-ai-inference-cloud-business
11. ValueAddVC, "AI Inference Cost Reduction 2026: Down 95% in Two Years," ValueAddVC, 2026, https://valueaddvc.com/blog/how-ai-inference-costs-have-dropped-95-in-two-years-and-what-happens-next
12. Gartner Newsroom, "Gartner Forecasts Worldwide AI-Optimized IaaS Spending to Grow 96% in 2026," Gartner, Aug. 10, 2026, https://www.gartner.com/en/newsroom/press-releases/2026-08-10-gartner-forecasts-worldwide-artificial-intelligence-optimized-iaas-spending-to-grow-96-percent-in-2026

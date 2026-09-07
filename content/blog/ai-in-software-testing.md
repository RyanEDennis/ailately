---
title: "How AI Is Changing Software Testing and the Role of the Software Tester"
dek: "AI now drafts tests on its own, yet in Meta's own trial only a quarter of the machine-written cases raised coverage — the clearest sign that the software tester's future runs on judgment, evaluation, and the testing of AI itself."
slug: ai-in-software-testing
kind: analysis
category: labor
tags: [AI in software testing, test automation, LLM testing, software QA, quality engineering]
people: []
companies: ["Meta"]
author: Kelly Dennis
byline: "Kelly Dennis"
role: "Co-Editor and Lead Technical Analyst"
editor: "Ryan Elliott Dennis"
date: 2026-09-06
featured: true
image: ""
seo:
  title: "AI in Software Testing: How AI Is Changing the Software Tester Role"
  description: "How AI is reshaping software testing — from automated test-case generation to AI-assisted QA — and why the software tester's role is evolving toward judgment, evaluation, and testing AI itself."
  keywords: [AI in software testing, AI software testing, software tester, AI test automation, machine learning in software testing, automated software testing, LLM software testing, software QA, future of software testing]
epigraph:
  text: "Developers adopted AI faster than they came to trust it. In 2025, 84 percent used or planned to use AI tools, yet more of them distrusted the output than trusted it — and that gap is quietly rewriting the software tester's job."
  stat: "84 percent"
  attribution: ""
sources:
  - title: "2025 Developer Survey: AI"
    id: 1
    publication: "Stack Overflow"
    author: "Stack Overflow"
    date: 2025-12-29
    url: "https://survey.stackoverflow.co/2025/ai"
  - title: "The integration of machine learning into automated test generation: A systematic mapping study"
    id: 2
    publication: "Software Testing, Verification and Reliability"
    author: "Afonso Fontes and Gregory Gay"
    date: 2023-04-01
    url: "https://doi.org/10.1002/stvr.1845"
  - title: "The Cost of Poor Software Quality in the US: A 2022 Report"
    id: 3
    publication: "Consortium for Information & Software Quality (CISQ)"
    author: "Herb Krasner"
    date: 2022-12-06
    url: "https://www.it-cisq.org/the-cost-of-poor-quality-software-in-the-us-a-2022-report/"
  - title: "AI-enabled Testing Market Size, Share and Industry Analysis"
    id: 4
    publication: "Fortune Business Insights"
    author: "Fortune Business Insights"
    date: 2025-06-01
    url: "https://www.fortunebusinessinsights.com/ai-enabled-testing-market-108825"
  - title: "Test case generation using large language models: A systematic literature review"
    id: 5
    publication: "Cluster Computing"
    author: "Murat Tasarsu, Ahmet Vedat Tokmak, and Cagatay Catal"
    date: 2026-01-01
    url: "https://link.springer.com/article/10.1007/s10586-026-06021-z"
  - title: "Automated Unit Test Improvement using Large Language Models at Meta"
    id: 6
    publication: "arXiv (Meta)"
    author: "Nadia Alshahwan et al."
    date: 2024-02-14
    url: "https://arxiv.org/abs/2402.09171"
  - title: "The State of AI: How organizations are rewiring to capture value"
    id: 7
    publication: "McKinsey & Company"
    author: "McKinsey QuantumBlack"
    date: 2026-08-25
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai"
  - title: "Software Developers, Quality Assurance Analysts, and Testers: Occupational Outlook Handbook"
    id: 8
    publication: "U.S. Bureau of Labor Statistics"
    author: "U.S. Bureau of Labor Statistics"
    date: 2025-08-29
    url: "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm"
  - title: "Software Quality Assurance Analysts and Testers (15-1253.00)"
    id: 9
    publication: "O*NET OnLine"
    author: "O*NET OnLine"
    date: 2024-01-01
    url: "https://www.onetonline.org/link/summary/15-1253.00"
---

Artificial intelligence has moved through software development faster than the industry has agreed on what to make of it, and testing has become one of the clearest places to watch the shift. In Stack Overflow's 2025 developer survey, 84 percent of developers said they use or plan to use AI tools in their work, up from 76 percent a year earlier.[1] The tooling arrived quickly. Trust followed more slowly, and that lag turns out to define where software testing is headed.

For decades, testers owned a familiar set of tasks: writing test cases, hunting bugs, documenting defects, running regression suites, and confirming that an application behaves the way its requirements promise. Machine learning and large language models now reach into several of those jobs, from automated test-case generation to test-input and test-oracle generation to defect detection.

So the obvious question arrives early: will AI replace software testers? The research points somewhere more interesting. AI automates parts of testing while it changes what organizations most need humans to test.

## What AI in Software Testing Actually Means

AI in software testing means applying artificial intelligence — machine learning, deep learning, and increasingly generative AI — to assist or automate parts of the testing process. Machine learning sits inside AI as a subset: instead of following rules a programmer wrote by hand, a machine-learning system finds patterns in data and uses them to predict or decide.

Researchers have probed that idea for years. A peer-reviewed systematic mapping study by Afonso Fontes and Gregory Gay, published in *Software Testing, Verification and Reliability*, examined 124 publications on machine learning and automated test generation.[2] They found machine learning applied across system, GUI, unit, performance, and combinatorial testing, and used to generate test verdicts and expected outputs. The takeaway lands plainly: AI in testing already exists as an established field of software-engineering research, rather than a distant promise.

## How AI Is Changing Software Testing

AI's largest contribution to testing may be the sheer volume of repetitive work it absorbs. Consider test-case generation. A tester receives a requirement — say, "a registered user must be able to reset their password" — and then has to imagine everything worth checking. Does the reset link work? What happens when someone enters the wrong email, or when the link expires, or when the same link gets used twice? Should the flow reject a new password that breaks the security rules? Will it hold up on a phone? One sentence of requirement fans out into dozens of scenarios.

Generative AI and LLMs can now shoulder part of that fan-out. A 2026 systematic literature review by Murat Tasarsu, Ahmet Vedat Tokmak, and Cagatay Catal examined 38 peer-reviewed studies published between 2020 and 2025 on LLMs and test-case generation.[5] The reviewers reported that LLMs can raise both the speed and the coverage of test-case generation, while flagging open challenges around data quality and integration with existing workflows.

The shift is concrete. A tester increasingly hands the first draft to a machine, then decides whether those tests come out accurate, sufficient, and meaningful.

## AI Test Automation Rewrites the Tester's Job

Automation reshaped testing well before generative AI arrived. Traditional test automation let engineers script tests that run the same checks over and over. AI adds a layer on top: systems that help generate, select, prioritize, maintain, and evaluate tests, rather than merely executing a fixed script.

The market has noticed. Analysts at Fortune Business Insights valued the AI-enabled testing market at $1.01 billion in 2025 and projected it to reach $4.64 billion by 2034, a compound annual growth rate of 18.3 percent.[4] Money at that scale changes the tester's center of gravity. The daily question moves from "can I run this test?" toward "are we testing the right thing?"

That distinction carries real weight. Generating 1,000 automated tests pays off only when the tests hit the scenarios that matter to users — and the cost of getting quality wrong runs enormous. CISQ estimated that poor software quality cost the United States about $2.41 trillion in 2022.[3] Human testers still supply the product context, domain knowledge, exploratory instinct, and judgment that decide which of those thousand tests deserve to exist.

## AI Can Generate Tests. Humans Still Have to Judge Them.

AI-generated tests bring their own quality problem: what happens when the test itself is wrong? An AI system can produce code that runs cleanly while checking the wrong behavior. It can misread a requirement, invent an unrealistic scenario, skip an important edge case, or assert a faulty expected result.

Meta's own numbers make the gap vivid. In its TestGen-LLM work, the company reported that 75 percent of the generated test cases built correctly, 57 percent passed reliably, and 25 percent raised coverage; engineers ultimately accepted 73 percent of the cases the tool recommended for production.[6] Read those figures together and the human role snaps into focus: one in four machine-written tests improved coverage, which left people to sift the useful quarter from the rest.

The Fontes and Gay mapping study named the same tension, listing open challenges in training data, retraining, scalability, evaluation complexity, benchmarks, and replicability.[2] Each of those gaps marks a place where human oversight earns its keep.

## Generative AI Accelerates the Shift

Large language models pushed AI testing into a new phase. Earlier tools mostly executed predefined automation; LLMs read natural-language requirements and program code alike. Hand an LLM a software requirement, and it can draft the matching tests.

Academic work mirrors how fast the field moves. The 2026 review of LLM-based test-case generation spanned studies across many datasets, programming languages, training approaches, preprocessing techniques, post-processing methods, and integration strategies, and concluded that LLMs support faster generation and broader coverage.[5] More automation reshapes the human role, rather than erasing it.

## Software Now Contains AI

Testing may grow more demanding for a second reason: the software under test increasingly contains AI of its own.

Classic deterministic software behaves predictably — enter X, receive Y. Generative AI plays by looser rules. Two nearly identical prompts can yield different outputs; a model can serve one user a brilliant answer and hand the next a wrong one. Enterprises now run these systems at scale: in McKinsey's 2026 State of AI survey, nearly nine in ten organizations reported regularly using AI in at least one business function, and roughly one in five had deployed coding agents.[7]

Testing AI-powered products therefore means evaluating qualities that a pass/fail assertion barely captures: accuracy, reliability, consistency, hallucination rates, instruction-following, robustness, privacy, security, bias, safety, and performance across thousands of unpredictable prompts and users. Confirming that a button works is one kind of task; confirming that an AI assistant behaves dependably across a flood of open-ended interactions is another entirely. AI opens automation opportunities and, in the same motion, creates fresh quality problems.

## The Skills the AI-Era Tester Needs

Tomorrow's tester will carry a wider toolkit than the classic manual-QA specialist. Technical range increasingly includes test automation, API testing, SQL, Git, CI/CD pipelines, Python or JavaScript, and AI-assisted testing tools. A working grasp of machine learning and generative AI grows more valuable by the quarter.

Communication skills deserve equal billing. Testers read requirements, talk with developers and product teams, document defects, spell out reproduction steps, surface ambiguity, and explain why a strange behavior matters. Those abilities gain weight when the definition of "correct" stays fuzzy — exactly the condition the Stack Overflow data describes, where 46 percent of developers distrust the accuracy of AI output against 33 percent who trust it.[1] Someone has to make the call, and that someone stays human.

## Could AI Replace Manual Software Testers?

Highly repetitive manual tests sit squarely in automation's path. Yet the profession as a whole looks durable. Its likelier arc runs from manual tester toward quality engineer, test automation engineer, software development engineer in test (SDET), AI QA specialist, or AI evaluation specialist.

Employment data backs that evolution. The U.S. Bureau of Labor Statistics groups software quality assurance analysts and testers with software developers, and projects the occupation to grow about 10 percent — much faster than the average across all jobs.[8] Its tester category alone held roughly 201,700 jobs in 2024, a figure set to reach 221,900 by 2034 and to open about 14,000 positions a year.[9] Technology tends to automate tasks while it keeps the occupation intact. For testing, AI trims the manual repetition and, in the same stroke, raises the premium on people who design test strategy, investigate messy failures, validate AI-generated tests, and evaluate AI-powered products.

## The Future of Software Testing Is Human + AI

Ask the sharpest question about AI and testing, and it has moved past "will machines replace testers?" A better one takes its place: which parts of testing should machines run, and which decisions still call for human judgment?

Evidence already answers half of it. Machine learning and LLMs demonstrably contribute to automated test generation and related work, while researchers keep naming the limits — reliability, data quality, evaluation, reproducibility, integration, scale. Put those together and a genuinely different profession comes into view. Tomorrow's tester spends less time hand-running repetitive cases and more time designing test strategy, supervising automation, chasing edge cases, judging AI-generated tests, and probing the behavior of AI systems themselves.

AI is becoming more than another tool in the tester's kit. It is becoming the thing testers are responsible for testing — and that makes software-quality expertise more valuable than ever.

## Sources

1. Stack Overflow. "2025 Developer Survey: AI." 2025. <https://survey.stackoverflow.co/2025/ai>
2. Fontes, A., & Gay, G. "The integration of machine learning into automated test generation: A systematic mapping study." *Software Testing, Verification and Reliability* 33(4), e1845. 2023. <https://doi.org/10.1002/stvr.1845>
3. Consortium for Information & Software Quality (CISQ). "The Cost of Poor Software Quality in the US: A 2022 Report." 2022. <https://www.it-cisq.org/the-cost-of-poor-quality-software-in-the-us-a-2022-report/>
4. Fortune Business Insights. "AI-enabled Testing Market Size, Share and Industry Analysis." 2025. <https://www.fortunebusinessinsights.com/ai-enabled-testing-market-108825>
5. Tasarsu, M., Tokmak, A. V., & Catal, C. "Test case generation using large language models: A systematic literature review." *Cluster Computing* 29, 227. 2026. <https://link.springer.com/article/10.1007/s10586-026-06021-z>
6. Alshahwan, N., et al. "Automated Unit Test Improvement using Large Language Models at Meta." arXiv:2402.09171. 2024. <https://arxiv.org/abs/2402.09171>
7. McKinsey & Company. "The State of AI: How organizations are rewiring to capture value." 2026. <https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai>
8. U.S. Bureau of Labor Statistics. "Software Developers, Quality Assurance Analysts, and Testers." *Occupational Outlook Handbook.* 2025. <https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm>
9. O*NET OnLine. "Software Quality Assurance Analysts and Testers (15-1253.00)." 2024. <https://www.onetonline.org/link/summary/15-1253.00>

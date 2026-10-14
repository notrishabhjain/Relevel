# Applied AI PM Curriculum (Oct 2026 – Apr 2027)

This is a 26-week plan where you learn by building. By April 2027 it should make you a believable Applied AI Product Manager. It assumes 8–10 hours a week, tools that run in the cloud (no local machine) and a modest budget. It was prepared on 7 October 2026 for RJ.

There are three tabs, and each does one job. The [Plan & tracker tab](#plan) is the week-by-week version. Each week has its learning links, what to ship and tick-boxes, along with the rules that keep you from drifting and the monthly gates. The [How to build tab](#build) has the steps, code and links for building each deliverable. This tab, the Curriculum, explains the reasoning. All three tabs come from one data file, so a week's topic, links and deliverable are the same everywhere. The week tables below only point you to them.

## Bottom line

You can be a believable Applied AI PM candidate by April 2027. But there is a condition. You need to come across as someone who owns technical products and delivery, and who has shipped working AI and tested it. Someone who has only read about AI won't get the same hearing.

Why so much about shipping? Because hiring in 2026 looks for proof of work, not certificates. So this plan gives you four published projects, and each one has real evaluation numbers.

**The plan in one paragraph:** Months 1–2 cover how LLMs work, context engineering, RAG and evals. Evals are the single most valuable skill, so they get the most time. Months 3–4 cover agents and MCP, and then multimodal, voice and Indic-language AI. Month 5 covers governance, unit economics and build-vs-buy decisions. Month 6 is for polishing your portfolio and practising interviews. Use free resources first, and pay for at most one course.

## Six-month roadmap at a glance

The plan has six phases. Each one ends with a checkpoint you can measure and something you have published. Read the table row by row. The last two columns tell you what you must have in hand before you move on.

| Month (weeks) | Dates | Theme | Flagship deliverable | Checkpoint |
| --- | --- | --- | --- | --- |
| 1 (W1–4) | 7 Oct – 3 Nov 2026 | LLM fundamentals, prompt and context engineering, token economics | Cloud dev setup, Sentinel AI Bridge v2 (structured outputs + cost/latency log), 1 teardown | You can explain tokens, context windows, structured outputs and cost per task; 1 shipped repo; 1 published teardown |
| 2 (W5–9) | 4 Nov – 8 Dec 2026 | RAG + evals (the most important skill) | **Project A:** bilingual GovTech policy/scheme RAG assistant + eval report | An eval set of 100+ cases, a failure taxonomy, and before/after metrics published |
| 3 (W10–13) | 9 Dec 2026 – 5 Jan 2027 | Agents, tool use, MCP, human-in-the-loop | **Project B:** TaskMind/Sentinel MCP agent (call transcript → tasks → calendar/issue tracker) | A working MCP server; agent trace evals; a design doc on autonomy and approval |
| 4 (W14–17) | 6 Jan – 2 Feb 2027 | Multimodal, voice, Indic AI; AI behavior and failure-handling specs | **Project C:** Hindi/Sanskrit OCR + LLM post-correction, plus an AI behavior spec (PM-level) | A measured improvement in character error rate (CER); a behavior spec with abstain/escalate/feedback rules |
| 5 (W18–21) | 3 Feb – 2 Mar 2027 | Governance, build/buy/fine-tune, unit economics, PRDs, data strategy | **Project D:** AI grievance triage PRD + risk assessment + build-vs-buy memo (CPGRAMS-style) | A PRD with an eval plan, a mapping to DPDP / India AI Guidelines / EU AI Act, and a cost model at 3 scales |
| 6 (W22–26) | 3 Mar – 6 Apr 2027 | Portfolio polish and interview practice | Portfolio site and 3-minute demo videos | A live portfolio site; 10+ mock interviews done |

### Weekly time budget

Not every week will have the same energy. So here are three versions of the plan. Pick the one that fits your life right now. You can switch later.

| Version | Hours/week | What changes |
| --- | --- | --- |
| Light | 5–6 | Do the core items only. Skip the optional reading. Use 50-case eval sets. Turn Project C into a case study instead of a build |
| Standard (default) | 8–10 | Everything below, as written |
| Heavy | 12–14 | Add the paid evals cohort, a second GovTech build (voice), weekly public writing, and open-source contributions to MCP and evals |

Here is what a typical standard week looks like. On Wednesday night you spend 1.5 hours learning. On Thursday you spend 1 hour on reading and newsletters. Saturday is a 3–4 hour block for building. On Sunday you build for 2 hours, then spend 1 hour on a write-up or a LinkedIn post. And every week you make one 30-minute "ship log" commit.

## Job-market grounding

Before we plan anything, let's look at what employers want. Demand is strong. But the bar has moved. Employers now expect you to be fluent in evals and to have shipped real things.

### Demand signals

Three signals are worth knowing. Each comes with a caution, because job numbers are easy to misread.

- **Global:** Lenny's early-2026 [job-market report](https://www.lennysnewsletter.com/p/state-of-the-product-job-market-in-ee9) (TrueUp data) counted 7,300+ open PM roles at tech companies. That is the most since 2022. It also said AI roles are "absolutely exploding."
- **India:** foundit's [2025 tracker](https://news.careers360.com/india-job-market-2025-ai-hiring-growth-foundit-insights-tracker-report) counted about 2.9 lakh AI-linked postings. It projects roughly 32% growth in 2026, and that is a projection, not a result. Aggregator counts include duplicates and loosely related roles. So read them as a direction, not as a size.
- **Pay (India):** [Glassdoor India](https://www.glassdoor.co.in/Salaries/ai-product-manager-salary-SRCH_KO0,18.htm) shows an average of about ₹29 lakh a year. But it comes from only 27 reports, so treat it as a rough guide. US benchmarks from [KORE1](https://www.kore1.com/how-to-hire-ai-product-manager-2026/) are $165K–$238K base. Remote roles at US pay bands for India-based PMs exist, but they are rare.

### What real 2026 job descriptions ask for

Now let's read some real postings. The table has one posting per row. The middle column shows what the posting asks for. The last column shows what that means for you.

| Employer / role | Signals in the posting | What it means for you |
| --- | --- | --- |
| [Sarvam AI, Product Manager](https://www.sarvam.ai/careers/jobs/c4bb3b2c-7608-4d57-8761-650b4222ac13) | Prompt design, model selection, latency budgets, failure modes, eval pipelines; built agents; explicitly not for people moving over from project/program management | This is the hardest filter you will face. Answer it with shipped agents, eval reports and Product Owner language |
| [Sarvam AI, PM (Models)](https://www.sarvam.ai/careers/jobs/9e197c29-5164-42eb-8e74-4f691a794517) | Owns ASR, TTS and model evaluation pipelines; metrics are accuracy, latency, MOS, robustness | Your experience evaluating Indic speech and OCR (Project C) maps straight onto this |
| [Sarvam AI, PM On-Device & Edge](https://www.sarvam.ai/careers/jobs/f462051e-ec76-45cf-96c5-e0192dd4dcc6) | Human-in-the-loop and agentic product design; regulated industries including government | Your government background is a clear plus |
| [SciSpace, AI PM](https://www.instahyre.com/job-421694-ai-product-manager-at-scispace-bangalore/) | LLMs, agentic systems, orchestration, fine-tuning, AI evaluation, LangChain/LangGraph; accuracy, latency and trust metrics | This shows you the bar at an AI-native startup |
| [PhonePe, AI PM - ML](https://www.instahyre.com/job-428997-ai-product-manager-ml-at-phonepe-bangalore/) | Tags LLM, MCP, RAG, agents, evaluation; define reliability metrics and run evals | MCP and evals now show up as listed skills at Indian consumer tech firms. The posting text looks mislabeled, so check it on PhonePe's careers page |
| [KPMG India, Gen AI PM (Digital Next)](https://www.dreamworkhq.com/job/449c9cc1-c2b9-4fe1-aedf-eee0b6cc9287) | AI-driven products with LLMs; 5–10 years in PM/digital products; OpenAI/Azure/Google AI tools | Big-4 GenAI PM roles accept delivery and consulting backgrounds. This is probably your most realistic first door |
| [Deloitte USI, Manager, PM AI/ML](https://usijobs.deloitte.com/en_US/careersUSI/JobDetail/USI-EH26-Product-Engineering-Leadership-Product-Manager-AI-ML-Manager/301490) | Building products with AI/ML/agentic AI | The same bridge from consulting into product |
| [EY GDS, AIA Gen AI Manager](https://careers.ey.com/ey/job/Bengaluru-EY-GDS-Consulting-AIA-Gen-AI-Senior-Manager-KA-560016/1410204933/) | LLM apps, multi-agent systems, RAG pipelines, model evaluation, AI governance | It leans towards architecture and delivery, so it fits an "AI solutions PM" story |
| [EkStep Foundation, PM Ecosystem Products](https://jobs.weekday.works/ai-product-manager-for-eco-system-products-at-visume-4390102181) | Digital public infrastructure; real district deployments; comfortable reading API specs | GovTech and DPI roles value field deployment and a working knowledge of APIs |
| [Wadhwani AI, Consultant Product Analyst](https://www.glassdoor.co.in/job-listing/consultant-product-analyst-wadhwani-institute-for-artificial-intelligence-JV_KO0,26_KE27,73.htm?jl=1009806215886) | AI solutions under the IndiaAI Mission with ministry stakeholders | IndiaAI work does exist, but under titles that sound product-adjacent |

One gap is worth noting. Government AI units, such as Digital India Corporation (home of BHASHINI), hire for AI roles under titles like Business Analyst (AI) or Principal Architect. They don't use "AI Product Manager." We also couldn't verify any AI PM postings at PwC or Accenture India.

You don't need to create AI work inside your current job to build your story. AI programmes are already moving in government: GHCI Phase 2 (AI/ML), the 8th CPC AI services phase and the NeGD–PTC India AI-tools MoU. You can learn from them, and write about them, using public documents.

### What distinguishes strong candidates

Across all those postings, five things keep coming up. Here they are, in the order I'd work on them.

1. **Eval ownership.** [KORE1's guide](https://www.kore1.com/how-to-hire-ai-product-manager-2026/) lists two signs of technical fluency: owning the design of eval sets, and sitting in model design reviews. [Exponent](https://www.tryexponent.com/guides/openai-product-manager-interview) notes that OpenAI leaders call writing evals a core PM skill.
2. **Artifacts over claims.** You need one shipped product (a side project is fine), one written case study with real numbers, and one eval suite that someone can run. This comes from an [Institute of PM guide](https://www.institutepm.com/knowledge-hub/how-to-become-an-ai-product-manager-2026). That site is a training vendor, but its advice matches every posting above.
3. **Knowing when not to use a model.** [KORE1's interview rubric](https://www.kore1.com/ai-product-manager-interview-questions-2026/) grades this instinct as seriously as the design itself.
4. **Failure-mode design.** Decide how much hallucination each product can tolerate. Measure it all the time, and design fallbacks.
5. **Owning cost per task and latency.** [Field guides](https://pmtoolkit.ai/learn/ai-modern-pm/ai-product-management-2026-field-guide) now describe this as part of the AI PM's job.

### Interview formats in 2026

Interview loops are changing too. Here is what we know, company by company.

- **Structure:** [Northeastern's 2026 guide](https://careers.northeastern.edu/blog/2026/06/11/ai-product-manager-interview-questions-2026-guide/) names four shifts. There is a dedicated AI product-sense round. Every loop has technical drill-downs. Behavioral questions probe deeper. And estimation questions have almost disappeared.
- **Meta** added a "Product Sense with AI" round. Candidates vibe-code a working prototype ([Exponent](https://www.tryexponent.com/blog/product-sense-interview)).
- **Anthropic:** the final loop has about five panels in one day. The product-sense cases include safety tradeoffs ([IGotAnOffer](https://igotanoffer.com/en/advice/anthropic-product-manager-interview)).
- **OpenAI:** 4–6 rounds over 1–2 days. Some candidates get a take-home case to present ([Exponent](https://www.tryexponent.com/guides/openai-product-manager-interview)).
- **Consulting and Indian firms:** a recruiter call, a hiring manager, a case or PRD exercise, then a panel. Take-homes are common at startups.

### Skills rising toward 2027, in order of evidence strength

Here is a list of the skills that are growing fastest. The ones at the top have the most evidence behind them.

1. Evals and error analysis for agents (trajectory evals, validated LLM-as-judge)
2. Agent design with MCP/A2A interoperability, human-in-the-loop and autonomy levels
3. Context engineering
4. Cost and latency economics as first-class product metrics
5. AI governance operations (EU AI Act transparency, DPDP consent, India's sector-led approach)
6. Voice and multimodal products, especially Indic voice-first
7. Live prototyping with coding agents in interviews

## Best learning resources

There is a lot of material out there, and most of it is free. So start with the free core stack below, and buy at most one paid course.

### Free core stack

The table shows each resource, what to use it for, what it costs and my verdict. Where I say "must-do," I mean it.

| Resource | Use it for | Cost | Verdict |
| --- | --- | --- | --- |
| [Claude Academy](https://academy.claude.com) | [AI Fluency](https://academy.claude.com/courses/ai-fluency-framework-foundations), [Building with the Claude API](https://academy.claude.com/courses/building-with-the-claude-api), [Introduction to MCP](https://academy.claude.com/courses/introduction-to-model-context-protocol), [MCP advanced topics](https://academy.claude.com/courses/model-context-protocol-advanced-topics), [Claude Code 101](https://academy.claude.com/courses/claude-code-101) | Free | Must-do for MCP and agents. Sources disagree on the course count (13 to 26), because the catalog grew during 2026 |
| [DeepLearning.AI: Agentic AI](https://www.deeplearning.ai/courses/agentic-ai) (Andrew Ng) | Agentic design patterns, evals, error analysis, latency and cost | Free to audit | Must-do. It's the best single course on agents for builders |
| [DeepLearning.AI short courses](https://learn.deeplearning.ai) | Evaluating AI Agents, MCP, Governing AI Agents, Voice for AI Agents, Generative UI | Mostly free | Pick about five, not twenty |
| [Hamel Husain and Shreya Shankar's free evals material](https://hamelhusain.substack.com/p/ai-evals-for-engineers-and-product) | Error analysis, LLM-as-judge, field guide to improving AI products | Free | Must-do. This is the standard method for evals |
| [Lenny's Newsletter](https://www.lennysnewsletter.com) | Job-market data, AI PM episodes | Free tier | The twice-yearly job-market reports are the best signal of demand |
| [Model Context Protocol docs](https://modelcontextprotocol.io) | Current spec, MCP Apps extension, registry | Free | The spec changes fast, so read the release notes |
| Anthropic and OpenAI docs and cookbooks | [Claude prompting](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview), [tool use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview), [structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs), [prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching), [OpenAI structured outputs](https://developers.openai.com/api/docs/guides/structured-outputs), [Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook) | Free | These are primary sources. Read the prompting and tool-use guides from start to finish |
| [Google PAIR People + AI Guidebook](https://pair.withgoogle.com/guidebook-v2/) | AI trust, explainability, feedback and error patterns (read it to learn how to write behavior specs) | Free | It's dated on agents. Treat it as reading only, not something to build from |
| [AI PM interview bank](https://github.com/landedjobs/ai-pm-interview-prep) | 131 questions and frameworks made by the community | Free | A useful bank to drill from. Check its claims yourself |
| Primary regulation texts | India AI Governance Guidelines, DPDP Act and Rules 2025, EU AI Act and Digital Omnibus, NIST AI RMF | Free | Read the original documents, not blog summaries |

### Books (buy at most two)

- **Chip Huyen, *AI Engineering*** (O'Reilly, 2025). This is the best single reference if you want technical depth as a PM. Read the chapters on evaluation, RAG and agents, inference optimization and the feedback loop.
- **Hamel Husain and Shreya Shankar, *Evals for AI Engineers*** (O'Reilly, listed for late October 2026, about 225 pages). It was not out yet on 7 Oct 2026. So pre-order it, or read it on O'Reilly when it arrives.
- **Marily Nika's AI PM books** are useful for framing, but lighter on technical depth. They are optional.

### Paid cohorts

If you do want to pay for something, here are the options. Look at the verdict column before you open your wallet.

| Course | Cost | Verdict |
| --- | --- | --- |
| [AI Evals for Engineers and PMs](https://maven.com/parlance-labs/evals) (Hamel and Shreya, Maven) | Check the current price; the next cohort starts 10 Oct 2026 | This is the best paid option if you buy one. The free material covers roughly 70% of it |
| [Marily Nika's AI PM Bootcamp](https://maven.com/marily-nika/ai-pm-bootcamp) | $2,500; advanced certification $749 | Strong network, but expensive for this plan. The "#1" and alumni claims are self-reported. Skip it unless an employer pays |
| Reforge | Subscription | Strong on strategy and growth. I haven't verified its AI content or pricing. Optional in Month 5 |

### Communities

Learning is easier with people around you. These are good places to start.

- AI PM communities on LinkedIn, and the free lightning lessons on Maven
- The evals course Discord (if you enroll), and the MCP community discussions on GitHub
- For India: People+ai/EkStep events, IndiaAI and BHASHINI hackathons, the NASSCOM AI community, and product meetups in Pune and Bengaluru

## Tooling setup for a no-local-machine builder (Week 1)

Everything below runs in the browser or in GitHub. Nothing needs a local machine, and you can mix Codespaces, Colab, Claude and Gemini freely. The [setup recipe](#setup) walks you through it in order. It takes about 3 hours in Week 1.

The table lists what you need, the tool for it, and what the budget really looks like as of Oct 2026.

| Need | Tool | Budget reality (as of Oct 2026) |
| --- | --- | --- |
| Dev environment | [GitHub Codespaces](https://github.com/features/codespaces) | Free personal accounts get 120 core-hours a month (about 60 hours on a 2-core machine) and 15 GB of storage. Set the spending limit to $0, and stop your codespace after each session |
| CI/CD | GitHub Actions | 2,000 free minutes a month for private repos. Public repos suit a portfolio anyway |
| Notebooks | [Google Colab](https://colab.research.google.com/), Kaggle | Free tiers. Good for eval analysis, embeddings (free GPU when available) and OCR experiments. Sessions time out, so save your results into the repo. See the [tools recipe](#tools) |
| LLM APIs | [Gemini API](https://ai.google.dev/gemini-api/docs/pricing) free tier, Anthropic and OpenAI pay-as-you-go. The plan's code switches between Claude and Gemini with one setting (`llm.py`, in the [tools recipe](#tools)) | Gemini's free tier is [Flash/Flash-Lite only since April 2026](https://questloops.com/blog/how-to-use-google-gemini-for-free-in-2026-api-limits-explained). Google may also use free-tier prompts to improve its products. So never send real government or personal data on a free tier |
| Indic models | Sarvam 30B/105B open-weight ([Apache 2.0](https://www.opensourceforu.com/2026/03/sarvam-releases-30b-and-105b-llms-under-apache-2-0/)), BHASHINI APIs | Confirm the current BHASHINI onboarding steps and limits at bhashini.gov.in |
| Eval and observability | Arize Phoenix (open source), Braintrust or LangSmith free tiers, or a homemade trace viewer | Hamel and Shreya teach you to vibe-code your own trace viewer. That suits your setup |
| Hosting demos | Hugging Face Spaces, Streamlit Community Cloud, Vercel, GitHub Pages | Free tiers |
| Prototyping | Claude Code or [Gemini CLI](https://github.com/google-gemini/gemini-cli) in Codespaces, v0, [Google AI Studio](https://aistudio.google.com/) | Practice for the "vibe-code a prototype" interview round. Use both coding agents once, so you can compare them |

**Budget envelope (my estimate):** roughly ₹1,500–₹2,500 a month for API credits plus one chat subscription, and ₹4,000–₹6,000 for two books. Without a paid cohort, the six-month total comes to about ₹15,000–₹25,000.

**Data hygiene rule (non-negotiable, since you may work near government or client data):** every portfolio project uses public documents or synthetic data. Public documents include PIB releases, gazette notifications, GIGW guidelines and public scheme FAQs. Never use client data, or anything covered by an employer or client NDA.

## Phases 1–3: foundations, RAG + evals, agents + MCP

The first half of the plan builds your base. You learn how models work, how to test them, and how to let them act. Each phase below has learning goals, a table of its weeks, and a checkpoint.

### Phase 1: Foundations for builders (W1–4, 7 Oct – 3 Nov 2026)

You already have engineering and delivery fundamentals. So skip the generic "AI for everyone" content.

**Learning goals:** First, learn how LLMs work at the depth a PM needs. That means tokens, context windows, temperature, reasoning vs fast models, embeddings, and fine-tuning vs prompting vs RAG. Second, let prompt engineering grow into context engineering. That covers system prompts, few-shot examples, structured outputs with a JSON schema, tool definitions and prompt caching. Third, learn the basic economics: price per million tokens, caching and batch discounts, time-to-first-token vs total latency, and cost per successful task.

<!-- weeklinks 1-4 -->

**Checkpoint:** you can explain in 2 minutes, without notes, why the same task costs 10x more on one model than on another. Sentinel v2 is live with a model comparison table. One teardown is published. In the light version, skip the teardown. In the heavy version, take the DeepLearning.AI MCP course early.

### Phase 2: RAG + evals (W5–9, 4 Nov – 8 Dec 2026)

This is the most important phase. Evals are the skill that interviewers test most often, and candidates most often lack.

**Learning goals:** Start with RAG architecture. That covers chunking, embeddings, hybrid search, reranking, citations and grounding, and Hindi/English retrieval. Next comes the evals method from Hamel and Shreya. You collect traces, then code the failures you find (open and axial coding) and build a failure taxonomy from them. You write binary pass/fail criteria, and use code checks before LLM judges. You validate each judge against your own labels, and keep a regression suite in CI. Finally, learn the RAG metrics: recall@k, faithfulness, answer correctness, citation accuracy and correct refusal.

<!-- weeklinks 5-9 -->

**Checkpoint:** you have a golden set of 100+ cases and a failure taxonomy with counts. You have at least 2 iterations with before/after metrics. You have an eval CI workflow that fails a PR on regression. And you report a number for how often the judge agrees with a human. In the light version, use 50 cases and one iteration. In the heavy version, enroll in the Hamel/Shreya cohort and use Project A as your course project.

### Phase 3: Agents, tool use and MCP (W10–13, 9 Dec 2026 – 5 Jan 2027)

The holiday weeks (W12–13) are lighter on purpose, at about 6 hours each.

**Learning goals:** Begin with agent patterns, which are reflection, tool use, planning and multi-agent, along with the degrees of autonomy. Then learn MCP. Its primitives are tools, resources and prompts. Study its transports and auth, MCP Apps, and its governance (it was donated to the Agentic AI Foundation under the Linux Foundation in Dec 2025). Learn A2A at the level of the concept. Then cover agent security: prompt injection through tool outputs, tool poisoning, least privilege and approval gates. Finish with agent evals: trajectory and step-level correctness, tool-call accuracy, task completion rate, cost per completed task and human-intervention rate.

<!-- weeklinks 10-13 -->

**Checkpoint:** you have a working MCP server that a client can connect to (Claude Desktop, Claude Code or another MCP client). You have an agent with a human-in-the-loop gate. And you have metrics for task completion rate, tool-call accuracy, intervention rate and cost per task.

## Phases 4–6: multimodal and Indic AI, strategy and governance, portfolio and interviews

The second half moves from building to judgement. You learn to specify AI behavior, to price and govern it, and then to show your work.

### Phase 4: Multimodal, voice and Indic AI, with AI behavior specs (W14–17, 6 Jan – 2 Feb 2027)

This phase changed from my first draft. It no longer asks you to build a design pattern library. Instead, you write down how an AI product should behave, the way a PM would. That means requirements and rules, not screens.

**Learning goals:**

- Learn voice-first and low-literacy service design as a product problem. BHASHINI [powers government services](https://egov.eletsonline.com/2026/03/bhashini-bridging-1-4-billion-citizens-to-services-and-opportunities-via-language-ai/) such as PM-Kisan and eSanjeevani. The CPGRAMS voice bot lets citizens file grievances by speaking.
- Learn multimodal evals. CER/WER measure OCR and speech recognition, and MOS measures speech synthesis. These are the metrics named in Sarvam's Models PM role.
- Learn AI behavior specs. These say when the model answers, when it abstains, and when it hands over to a human. They also say how confidence and citations are shown, what feedback is saved as future eval data, and what the product must never do. Read the PAIR guidebook for the vocabulary. Then write specs, not mockups.

<!-- weeklinks 14-17 -->

**Checkpoint:** you have a CER improvement number with honest examples of failures (for example "CER 14% to 6% at ₹0.4/page", using your real figures). You have a published behavior spec. And you have 3 portfolio artifacts in total.

### Phase 5: Strategy, economics and governance (W18–21, 3 Feb – 2 Mar 2027)

**Learning goals:**

- **Build vs buy vs fine-tune:** Try prompting plus RAG first. Fine-tune for format, style, latency or cost at scale. Self-host an open-weight model when data must stay in the country, which matters for government.
- **Unit economics:** Work out the cost per task at 1k, 100k and 10M tasks a month. Learn caching, batching and model routing (try a small model first, then escalate to a larger one). Learn latency SLOs too.
- **AI PRDs:** A PRD covers the problem, the users, and the product, model and guardrail metrics. It also covers the eval plan, failure modes and fallbacks, human-in-the-loop design, data strategy, launch criteria and monitoring.
- **Data strategy:** Learn about golden sets, labeling operations, consent and purpose limitation. Learn the Indic data sources too (BHASHINI datasets, AIKosh).
- **Governance dates to know cold:**
  - India AI Governance Guidelines (MeitY, Nov 2025): [voluntary and non-binding](https://casrai.org/guides/india-ai-governance-guidelines). They set out seven principles, sector regulators keep enforcement, and they rely on existing laws.
  - DPDP Rules 2025 (notified Nov 2025): Consent Manager registration starts from 13 Nov 2026. The core obligations start from [13 May 2027](https://www.privybyidfy.com/blog/dpdp-compliance-guide-2026-what-indian-enterprises-must-do-before-may-2027). They are notice, consent, security safeguards, breach intimation and data principal rights.
  - EU AI Act: GPAI obligations have applied since 2 Aug 2025. Most Article 50 transparency duties apply from 2 Aug 2026. The [Digital Omnibus](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/) moved the Annex III high-risk obligations to 2 Dec 2027 and the Annex I ones to 2 Aug 2028.
  - Standards: NIST AI RMF and ISO/IEC 42001.

<!-- weeklinks 18-21 -->

**Checkpoint:** you have a PRD with clear launch gates (for example "routing accuracy at least 90% on the golden set; P95 latency under 3 s; human review on all closures"). You have a cost model spreadsheet and a regulation mapping table. And you have 4 portfolio artifacts.

### Phase 6: GTM, portfolio polish and interview sprint (W22–26, 3 Mar – 6 Apr 2027)

There is no new topic here. This phase is about showing what you have built, and practising how you talk about it.

<!-- weeklinks 22-26 -->

**Checkpoint:** you have a live portfolio site, a 3-minute demo for each project, and 10+ mock interviews.

## Portfolio project briefs and definition of done

You will build four core projects, and each gets a published write-up. All of them use public or synthetic data only. Each brief below says what problem it solves, what you build, and what "done" means.

### Project A: Niyam Sahayak, a bilingual GovTech policy and scheme assistant (RAG + evals)

- **Problem:** Citizens, startups and department staff find it hard to get accurate, cited answers about rules (DPDP, GIGW, scheme eligibility) in Hindi and Hinglish.
- **Build:** RAG over public documents, with citations. It has a Hindi/English/Hinglish query path, a refusal for out-of-scope questions, and a "talk to a human" handoff.
- **Done means:**
  1. A live demo URL.
  2. A golden set of 100+ cases (at least 30% Hindi/Hinglish, at least 15 adversarial).
  3. A published eval report. It has the failure taxonomy and before/after metrics over two iterations (recall@5, faithfulness, citation accuracy, correct-refusal rate). It also has judge-vs-human agreement, cost per answer and P95 latency.
  4. An eval gate in GitHub Actions.
  5. A one-page note on what it would take to deploy this in a large government programme (GIGW accessibility, Parichay SSO, MeghRaj hosting, BHASHINI integration, DPDP notice).
- **How to build it:** [RAG](#rag), [golden set](#golden-set), [error analysis](#error-analysis), [eval gate in CI](#eval-gate), then [publish](#publish) and a [demo video](#demo-video). Weeks 5–9.
- **Interview story:** "I found 38% of failures were Hindi-query retrieval misses and fixed them with X" (use your real number).

### Project B: TaskMind and Sentinel MCP agent (built on your side projects)

- **Problem:** Calls produce commitments, but those commitments never become tracked tasks.
- **Build:** An MCP server for the Sentinel task store, and an agent that turns Hinglish call transcripts into tasks. The agent proposes calendar or issue actions, asks for approval before anything external, and then carries them out through MCP. The TaskMind Android app (built CI-only) is where you give that approval.
- **Done means:**
  1. A public repo with the MCP server and the client config.
  2. An autonomy matrix (auto / confirm / never).
  3. A trace-level eval of 30+ runs (50 if you have time). It measures task-extraction F1, tool-call accuracy, intervention rate and cost per completed task.
  4. A prompt-injection test set, with results.
  5. A 3-minute demo video.
- **How to build it:** [MCP server](#mcp-server), [agent with an approval step](#agent-approval), [agent evals](#agent-evals), [autonomy doc](#autonomy-doc), then [publish](#publish) and a [demo video](#demo-video). Weeks 10–13.

### Project C: Akshara, Hindi/Sanskrit OCR with LLM post-correction, plus an AI behavior spec

- **Build:** Extend the CI-only OCR pipeline with LLM correction, and with confidence flags that send doubtful text to a human. Use public-domain scans only.
- **Done means:**
  1. A 50-page ground-truth set.
  2. CER/WER before and after, split by script, print quality and diacritics.
  3. Cost per page and throughput.
  4. A written comparison of three approaches: BHASHINI OCR, open-source OCR plus an LLM, and a multimodal LLM used directly.
  5. A 3–5 page AI behavior spec. It says when the product abstains, flags for human review, or escalates. (This replaces the UX pattern library from my first draft.)
- **How to build it:** [OCR with LLM post-correction](#ocr-correct), [measure CER](#cer-measure), [behavior spec](#behavior-spec), then [publish](#publish). Weeks 14–17.

### Project D: AI grievance triage and drafting assistant, with PRD, risk assessment and build-vs-buy memo

- **Context:** CPGRAMS handles millions of grievances a year (see the [Drishti summary](https://www.drishtiias.com/daily-updates/daily-news-analysis/centralised-public-grievance-redress-and-monitoring-system-cpgrams); check current figures on PIB before you quote numbers). The NextGen CPGRAMS plan describes AI-based categorisation and routing.
- **Deliverables:** a PRD; a metrics tree (citizen outcomes, officer productivity, model quality, guardrails); an eval plan; and a risk assessment. The risk assessment maps to the India AI Governance Guidelines and DPDP. It also maps to the EU AI Act, as a benchmark for rigour, because access to essential public services is a high-risk category there. You also write a build-vs-buy memo and a 6-slide stakeholder deck. Optionally, add a routing classifier prototype on synthetic grievances.
- **Done means:** a reviewer from a GovTech or consulting background could take it into a steering-committee meeting. This is the project where your delivery experience shows most.
- **How to build it:** [PRD](#prd), [risk assessment and model card](#risk-model-card), [build vs buy with a cost model](#build-buy-cost), [acceptance template](#acceptance-template), then [publish](#publish). Weeks 18–21.

**Reusable add-on for Project D:** an **AI acceptance-testing and eval-SLA template** for government RFQs and for AI services delivered by vendors. It covers what to write into the requirement: golden set size, accuracy and refusal thresholds, the Hindi/English split, latency, human-review rules and audit logging. It also covers how to run acceptance testing, and what happens when a vendor fails the eval. Most procurement documents list features and say nothing measurable about AI quality, so this template sets you apart. Build it from public documents and synthetic data only.

### Project E (optional, heavy plan): responsible GenAI feature teardown for the Jyotish Kundali app

This project shows how to add a GenAI interpretation layer while keeping the calculations deterministic and separate. You add disclaimers, handle cultural sensitivity, and limit harm (no medical or financial advice). It makes a good consumer-AI product-sense story. It has no recipe in the weekly plan, so do it only in the heavy plan, and use the [teardown](#teardown) recipe as your template.

## Interview preparation

Use one shape for your AI product-sense answers. Go through these in order: the user and problem; why AI (or why not); the model approach; behavior in failure and trust moments; metrics (product, model, guardrail); evals; cost and latency; risks; and the launch plan. Drill with the [question bank](https://github.com/landedjobs/ai-pm-interview-prep) and your own projects, and follow the [mock-interview recipe](#mock-interviews).

Here are 19 practice questions, in five groups.

**AI product sense**

1. Design a voice-first grievance-filing assistant for rural citizens who speak Bhojpuri. How do you handle low-confidence speech recognition?
2. Should DigiLocker add an AI assistant? What do you build first, and what do you refuse to build?
3. Design an AI feature that saves users time without eroding trust.
4. How would you measure the success of a new frontier model release?

**Evals and metrics**

5. Write the evals for a travel-booking agent. What is the difference between final-answer and trajectory evals?
6. Your LLM judge says 92% pass but users complain. What do you do?
7. A model version bump drops your eval scores 4 points on Hindi queries only. Walk me through your response.
8. What evals would you run before shipping a new model to enterprise customers?

**Technical depth**

9. When would you choose RAG vs fine-tuning vs a longer context window?
10. Explain prompt caching and how it changes unit economics.
11. What is MCP, and what security risks does it add? How do you mitigate prompt injection through tool outputs?
12. Your agent costs ₹6 per task and the business case needs ₹1. List five levers.

**Strategy, governance and economics**

13. Build vs buy for an Indic-language assistant for a ministry: frontier API, Sarvam open-weight or BHASHINI?
14. What does the 13 May 2027 DPDP deadline change in your roadmap for an AI feature that processes citizen data?
15. An EU customer asks whether your HR screening feature is "high-risk." What do you answer, and what changed with the Digital Omnibus?

**Behavioral (match each one to a real story from your own career)**

16. Tell me about a time you killed or descoped a feature.
17. Tell me about a time you disagreed with a senior government stakeholder, and how you resolved it.
18. Tell me about a time you shipped under ambiguity, with incomplete requirements.
19. Why AI PM, and why now? Prepare a direct answer to the "transitioning from project management" objection, and start it with the AI work you have shipped.

## Future-proofing for 2027

By 2027, agents, evals and governance operations will be standard PM responsibilities. So the habit of re-running your own evals will matter more than any single course.

### Likely changes (forecasts, based on current evidence)

These are forecasts, not facts. Treat them as the direction of travel.

- **Agents become the default unit of product.** MCP now sits under neutral governance at the Linux Foundation's Agentic AI Foundation, and A2A covers agent-to-agent work. PMs will specify autonomy levels, approval flows and agent evals.
- **Evals become a standing function, not a project.** Expect eval CI, production trace review and judge validation to appear in more job descriptions.
- **Regulatory milestones in and just after your window:** DPDP Consent Managers (13 Nov 2026), EU Article 50(2) watermarking (2 Dec 2026), full DPDP compliance (13 May 2027), and EU high-risk Annex III obligations (2 Dec 2027). India's proposed AI governance institutions may be set up, but neither is final.
- **Sovereign and Indic AI deepens.** The IndiaAI Mission is [funding 12 organisations](https://www.medianama.com/2026/04/223-centre-funds-12-ai-projects-sovereign-models-bharatgen-4x-next-highest-allocation-rs-1000-crore/) that are building indigenous models. BHASHINI now runs on [sovereign cloud](https://www.newsonair.gov.in/yotta-data-services-deploys-bhashinis-end-to-end-sovereign-ai-cloud-on-government-platforms). Expect more government RFPs that ask for Indic, on-prem or open-weight options. That plays to your GovTech background.
- **Free API tiers keep shrinking.** Budget for a little paid usage, and keep your projects model-agnostic.
- **Interviews will include live building.** Keep a weekly 45-minute prototyping habit.

### The post-April learning loop (about 3 hours/week)

After April, you don't stop. You keep a light loop going, at four speeds.

1. **Weekly (60 min):** Read Lenny's Newsletter, Hamel's blog, the MCP changelog, DeepLearning.AI's The Batch, and the release notes from Anthropic, OpenAI and Google.
2. **Monthly (90 min):** Take one new course. Also re-run your Project A eval suite on the newest models, and post what changed. A benchmark you keep alive builds your credibility over time.
3. **Quarterly:** Write one new teardown, and one post on regulation updates in India and the EU.
4. **Annually:** Decide on AIGP if you are moving towards governance-heavy roles. Refresh your portfolio.

## Caveats and uncertain claims

Some of the research above is weaker than the rest. Treat these items with care.

- **Job-count numbers:** The Lenny/TrueUp counts cover tech-company roles. The India aggregator counts (Glassdoor, foundit, LinkedIn) include duplicates and adjacent roles. And foundit's 2026 figure is a projection.
- **Salary data:** India AI PM salary data is thin (27 Glassdoor reports), and some aggregator estimates are clearly wrong.
- **Job postings:** Several come from aggregators (Instahyre, Weekday, DreamWorkHQ) and may be closed or mislabeled. The PhonePe listing's description looks mismatched. Check postings on the employers' own career pages.
- **Course details:** Claude Academy course counts vary by source because the catalog grew during 2026. Maven prices and dates change with each cohort. Marily Nika's "#1" and alumni figures are self-reported.
- **Unpublished book:** *Evals for AI Engineers* was listed for late October 2026, and was not out yet on 7 Oct 2026.
- **Regulatory dates:** The EU AI Act dates follow Regulation (EU) 2026/1744, as law-firm sources report it. India's AI Governance Guidelines are voluntary. The proposed institutions had not been set up in the reports I found.
- **Free tiers:** Gemini free-tier limits vary by source and change without notice. Check the live limits in AI Studio.
- **Interview loops:** Reports on Meta, OpenAI and Anthropic interviews come from prep companies and candidate accounts, not from the employers' own documents.
- **Cost estimates:** All the INR budget figures are my planning estimates, not quoted prices.

## Sources

- [Lenny's Newsletter: state of the product job market, early 2026](https://www.lennysnewsletter.com/p/state-of-the-product-job-market-in-ee9)
- [foundit Insights Tracker via Careers360](https://news.careers360.com/india-job-market-2025-ai-hiring-growth-foundit-insights-tracker-report)
- [Glassdoor India: AI product manager salaries](https://www.glassdoor.co.in/Salaries/ai-product-manager-salary-SRCH_KO0,18.htm)
- [KORE1: how to hire an AI PM, 2026](https://www.kore1.com/how-to-hire-ai-product-manager-2026/) and [KORE1: AI PM interview questions](https://www.kore1.com/ai-product-manager-interview-questions-2026/)
- [Sarvam AI careers: Product Manager](https://www.sarvam.ai/careers/jobs/c4bb3b2c-7608-4d57-8761-650b4222ac13), [PM (Models)](https://www.sarvam.ai/careers/jobs/9e197c29-5164-42eb-8e74-4f691a794517), [PM On-Device & Edge AI](https://www.sarvam.ai/careers/jobs/f462051e-ec76-45cf-96c5-e0192dd4dcc6)
- [Northeastern: AI PM interview guide 2026](https://careers.northeastern.edu/blog/2026/06/11/ai-product-manager-interview-questions-2026-guide/)
- [Exponent: product sense interview](https://www.tryexponent.com/blog/product-sense-interview) and [OpenAI PM interview guide](https://www.tryexponent.com/guides/openai-product-manager-interview)
- [IGotAnOffer: Anthropic PM interview](https://igotanoffer.com/en/advice/anthropic-product-manager-interview)
- [DeepLearning.AI: Agentic AI](https://www.deeplearning.ai/courses/agentic-ai)
- [Hamel Husain: AI evals for engineers and PMs](https://hamelhusain.substack.com/p/ai-evals-for-engineers-and-product) and [Maven evals course](https://maven.com/parlance-labs/evals)
- [Google PAIR People + AI Guidebook](https://pair.withgoogle.com/guidebook-v2/)
- [GitHub Codespaces](https://github.com/features/codespaces) and [Gemini free tier changes](https://questloops.com/blog/how-to-use-google-gemini-for-free-in-2026-api-limits-explained)
- [Sarvam open-weight 30B/105B release](https://www.opensourceforu.com/2026/03/sarvam-releases-30b-and-105b-llms-under-apache-2-0/)
- [BHASHINI overview (Elets eGov)](https://egov.eletsonline.com/2026/03/bhashini-bridging-1-4-billion-citizens-to-services-and-opportunities-via-language-ai/) and [BHASHINI sovereign cloud deployment](https://www.newsonair.gov.in/yotta-data-services-deploys-bhashinis-end-to-end-sovereign-ai-cloud-on-government-platforms)
- [CPGRAMS summary (Drishti IAS)](https://www.drishtiias.com/daily-updates/daily-news-analysis/centralised-public-grievance-redress-and-monitoring-system-cpgrams)
- [India AI Governance Guidelines explained (CASRAI)](https://casrai.org/guides/india-ai-governance-guidelines)
- [DPDP compliance guide 2026 (Privy by IDfy)](https://www.privybyidfy.com/blog/dpdp-compliance-guide-2026-what-indian-enterprises-must-do-before-may-2027)
- [EU AI Act Omnibus agreement (Gibson Dunn)](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/)
- [IndiaAI funding of 12 sovereign model projects (MediaNama)](https://www.medianama.com/2026/04/223-centre-funds-12-ai-projects-sovereign-models-bharatgen-4x-next-highest-allocation-rs-1000-crore/)
- [Is the AIGP certification worth it in 2026?](https://examworthy.com/blog/is-aigp-worth-it-2026)
- [AI PM interview prep bank (GitHub)](https://github.com/landedjobs/ai-pm-interview-prep)

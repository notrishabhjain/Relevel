# Applied AI PM Curriculum (Oct 2026 – Apr 2027)

A 26-week, learn-by-doing plan to become a credible Applied AI Product Manager by April 2027. It is built for 8–10 hours a week, cloud-only tooling (no local machine) and a modest budget. Prepared 7 October 2026 for RJ. The week-by-week version, with anti-drift rules and monthly gates, is the [weekly working plan](./).

## Bottom line

You can be a credible Applied AI PM candidate by April 2027, but only if you present as a technical product and delivery owner who has shipped and evaluated working AI, not as someone who has read about AI. Hiring in 2026 screens for proof of work, not certificates, so the plan produces four published artifacts, each with real evaluation numbers.

**The plan in one paragraph:** Months 1–2 cover LLM fundamentals, context engineering, RAG and evals (evals are the single most valuable skill). Months 3–4 cover agents and MCP, then multimodal, voice and Indic-language AI. Month 5 covers governance, unit economics and build-vs-buy decisions. Month 6 is portfolio polish and interview practice. Use free resources first, plus at most one paid course.

## Six-month roadmap at a glance

Six phases, each ending in a measurable checkpoint and a published artifact.

| Month (weeks) | Dates | Theme | Flagship deliverable | Checkpoint |
| --- | --- | --- | --- | --- |
| 1 (W1–4) | 7 Oct – 3 Nov 2026 | LLM fundamentals, prompt and context engineering, token economics | Cloud dev setup, Sentinel AI Bridge v2 (structured outputs + cost/latency log), 1 teardown | Explain tokens, context windows, structured outputs and cost per task; 1 shipped repo; 1 published teardown |
| 2 (W5–9) | 4 Nov – 8 Dec 2026 | RAG + evals (most important skill) | **Project A:** bilingual GovTech policy/scheme RAG assistant + eval report | 100+ case eval set, failure taxonomy, before/after metrics published |
| 3 (W10–13) | 9 Dec 2026 – 5 Jan 2027 | Agents, tool use, MCP, human-in-the-loop | **Project B:** TaskMind/Sentinel MCP agent (call transcript → tasks → calendar/issue tracker) | Working MCP server; agent trace evals; autonomy/approval design doc |
| 4 (W14–17) | 6 Jan – 2 Feb 2027 | Multimodal, voice, Indic AI; AI behavior and failure-handling specs | **Project C:** Hindi/Sanskrit OCR + LLM post-correction, plus an AI behavior spec (PM-level) | Measured character error rate (CER) improvement; behavior spec with abstain/escalate/feedback rules |
| 5 (W18–21) | 3 Feb – 2 Mar 2027 | Governance, build/buy/fine-tune, unit economics, PRDs, data strategy | **Project D:** AI grievance triage PRD + risk assessment + build-vs-buy memo (CPGRAMS-style) | PRD with eval plan, DPDP / India AI Guidelines / EU AI Act mapping, cost model at 3 scales |
| 6 (W22–26) | 3 Mar – 6 Apr 2027 | Portfolio polish and interview practice | Portfolio site and 3-minute demo videos | Live portfolio site; 10+ mock interviews completed |

### Weekly time budget

| Version | Hours/week | What changes |
| --- | --- | --- |
| Light | 5–6 | Core items only; skip optional reading; 50-case eval sets; Project C becomes a case study instead of a build |
| Standard (default) | 8–10 | Everything below as written |
| Heavy | 12–14 | Add the paid evals cohort, a second GovTech build (voice), weekly public writing, and open-source MCP/evals contributions |

A typical standard week: Wednesday night 1.5 h learning; Thursday 1 h reading/newsletters; Saturday 3–4 h build block; Sunday 2 h build + 1 h write-up or LinkedIn post; one 30-minute "ship log" commit every week.

## Job-market grounding

Demand is strong, but the bar has moved to eval fluency and shipped artifacts.

### Demand signals

- **Global:** Lenny's early-2026 [job-market report](https://www.lennysnewsletter.com/p/state-of-the-product-job-market-in-ee9) (TrueUp data) counted 7,300+ open PM roles at tech companies, the most since 2022, and said AI roles are "absolutely exploding."
- **India:** foundit's [2025 tracker](https://news.careers360.com/india-job-market-2025-ai-hiring-growth-foundit-insights-tracker-report) counted about 2.9 lakh AI-linked postings and projects roughly 32% growth in 2026 (a projection, not an outcome). Aggregator counts include duplicates and loosely related roles, so read them as direction, not size.
- **Pay (India):** [Glassdoor India](https://www.glassdoor.co.in/Salaries/ai-product-manager-salary-SRCH_KO0,18.htm) shows an average of about ₹29 lakh/year, but from only 27 reports, so treat it as indicative. US benchmarks from [KORE1](https://www.kore1.com/how-to-hire-ai-product-manager-2026/) are $165K–$238K base. Remote-global roles at US pay bands for India-based PMs exist but are rare.

### What real 2026 job descriptions ask for

| Employer / role | Signals in the posting | What it means for you |
| --- | --- | --- |
| [Sarvam AI, Product Manager](https://www.sarvam.ai/careers/jobs/c4bb3b2c-7608-4d57-8761-650b4222ac13) | Prompt design, model selection, latency budgets, failure modes, eval pipelines; built agents; explicitly not for people moving over from project/program management | The hardest filter you will face. Counter with shipped agents, eval reports and Product Owner language |
| [Sarvam AI, PM (Models)](https://www.sarvam.ai/careers/jobs/9e197c29-5164-42eb-8e74-4f691a794517) | Owns ASR, TTS and model evaluation pipelines; metrics are accuracy, latency, MOS, robustness | Indic speech/OCR eval experience (Project C) maps directly |
| [Sarvam AI, PM On-Device & Edge](https://www.sarvam.ai/careers/jobs/f462051e-ec76-45cf-96c5-e0192dd4dcc6) | Human-in-the-loop and agentic product design; regulated industries including government | Your government background is an explicit plus |
| [SciSpace, AI PM](https://www.instahyre.com/job-421694-ai-product-manager-at-scispace-bangalore/) | LLMs, agentic systems, orchestration, fine-tuning, AI evaluation, LangChain/LangGraph; accuracy, latency and trust metrics | Shows what the AI-native startup bar looks like |
| [PhonePe, AI PM - ML](https://www.instahyre.com/job-428997-ai-product-manager-ml-at-phonepe-bangalore/) | Tags LLM, MCP, RAG, agents, evaluation; define reliability metrics and run evals | MCP and evals now appear as listed skills at Indian consumer tech firms. The posting text looks mislabeled, so verify on PhonePe's careers page |
| [KPMG India, Gen AI PM (Digital Next)](https://www.dreamworkhq.com/job/449c9cc1-c2b9-4fe1-aedf-eee0b6cc9287) | AI-driven products with LLMs; 5–10 years in PM/digital products; OpenAI/Azure/Google AI tools | Big-4 GenAI PM roles accept delivery and consulting backgrounds: your most realistic first door |
| [Deloitte USI, Manager, PM AI/ML](https://usijobs.deloitte.com/en_US/careersUSI/JobDetail/USI-EH26-Product-Engineering-Leadership-Product-Manager-AI-ML-Manager/301490) | Building products with AI/ML/agentic AI | Same consulting-to-product bridge |
| [EY GDS, AIA Gen AI Manager](https://careers.ey.com/ey/job/Bengaluru-EY-GDS-Consulting-AIA-Gen-AI-Senior-Manager-KA-560016/1410204933/) | LLM apps, multi-agent systems, RAG pipelines, model evaluation, AI governance | Architect/delivery-leaning; fits an "AI solutions PM" framing |
| [EkStep Foundation, PM Ecosystem Products](https://jobs.weekday.works/ai-product-manager-for-eco-system-products-at-visume-4390102181) | Digital public infrastructure; real district deployments; comfortable reading API specs | GovTech/DPI roles value field deployment and API literacy |
| [Wadhwani AI, Consultant Product Analyst](https://www.glassdoor.co.in/job-listing/consultant-product-analyst-wadhwani-institute-for-artificial-intelligence-JV_KO0,26_KE27,73.htm?jl=1009806215886) | AI solutions under the IndiaAI Mission with ministry stakeholders | IndiaAI program work exists under product-adjacent titles |

Gap to note: government AI units such as Digital India Corporation (home of BHASHINI) hire AI roles under titles like Business Analyst (AI) or Principal Architect, not "AI Product Manager." No PwC or Accenture India AI PM postings could be verified, but you do not need to create AI exposure inside BDO: GHCI Phase 2 (AI/ML), the 8th CPC AI services phase and the NeGD–PTC India AI-tools MoU are already in flight. See Career positioning.

### What distinguishes strong candidates

1. **Eval ownership.** [KORE1's guide](https://www.kore1.com/how-to-hire-ai-product-manager-2026/) lists owning eval set design and sitting in model design reviews as signs of technical fluency. [Exponent](https://www.tryexponent.com/guides/openai-product-manager-interview) notes OpenAI leaders call eval-writing a core PM skill.
2. **Artifacts over claims.** One shipped product (even a side project), one written case study with real numbers, and one demonstrable eval suite (per an [Institute of PM guide](https://www.institutepm.com/knowledge-hub/how-to-become-an-ai-product-manager-2026), which is a training vendor, but it matches every posting above).
3. **Knowing when not to use a model.** [KORE1's interview rubric](https://www.kore1.com/ai-product-manager-interview-questions-2026/) grades this instinct as hard as the design itself.
4. **Failure-mode design.** Define hallucination tolerance per product, measure it continuously, and design fallbacks.
5. **Owning cost per task and latency**, as [field guides](https://pmtoolkit.ai/learn/ai-modern-pm/ai-product-management-2026-field-guide) now describe the AI PM's job.

### Interview formats in 2026

- **Structure:** [Northeastern's 2026 guide](https://careers.northeastern.edu/blog/2026/06/11/ai-product-manager-interview-questions-2026-guide/) names four shifts: a dedicated AI product-sense round, technical drill-downs in every loop, deeper behavioral probing, and the near-disappearance of estimation questions.
- **Meta** added a "Product Sense with AI" round where candidates vibe-code a working prototype ([Exponent](https://www.tryexponent.com/blog/product-sense-interview)).
- **Anthropic:** a final loop of about five panels in one day, with product-sense cases that include safety tradeoffs ([IGotAnOffer](https://igotanoffer.com/en/advice/anthropic-product-manager-interview)).
- **OpenAI:** 4–6 rounds over 1–2 days; some candidates get a take-home case to present ([Exponent](https://www.tryexponent.com/guides/openai-product-manager-interview)).
- **Consulting and Indian firms:** recruiter, hiring manager, case or PRD exercise, panel; take-homes are common at startups.

### Skills rising toward 2027, in order of evidence strength

1. Evals and error analysis for agents (trajectory evals, validated LLM-as-judge)
2. Agent design with MCP/A2A interoperability, human-in-the-loop and autonomy levels
3. Context engineering
4. Cost and latency economics as first-class product metrics
5. AI governance operations (EU AI Act transparency, DPDP consent, India's sector-led approach)
6. Voice and multimodal products, especially Indic voice-first
7. Live prototyping with coding agents in interviews

## Best learning resources

Start with the free core stack; buy at most one paid course.

### Free core stack

| Resource | Use it for | Cost | Verdict |
| --- | --- | --- | --- |
| [Claude Academy](https://academy.claude.com) | Intro to MCP, MCP advanced topics, agent skills, Claude API, AI fluency | Free | Must-do for MCP and agents. Course count varies by source (13 to 26) because the catalog grew during 2026 |
| [DeepLearning.AI: Agentic AI](https://www.deeplearning.ai/courses/agentic-ai) (Andrew Ng) | Agentic design patterns, evals, error analysis, latency and cost | Free to audit | Must-do; best single agents-for-builders course |
| [DeepLearning.AI short courses](https://learn.deeplearning.ai) | Evaluating AI Agents, MCP, Governing AI Agents, Voice for AI Agents, Generative UI | Mostly free | Pick about five, not twenty |
| [Hamel Husain and Shreya Shankar's free evals material](https://hamelhusain.substack.com/p/ai-evals-for-engineers-and-product) | Error analysis, LLM-as-judge, field guide to improving AI products | Free | Must-do: the canonical evals method |
| [Lenny's Newsletter](https://www.lennysnewsletter.com) | Job-market data, AI PM episodes | Free tier | Biannual job-market reports are the best demand signal |
| [Model Context Protocol docs](https://modelcontextprotocol.io) | Current spec, MCP Apps extension, registry | Free | Spec evolves fast; read release notes |
| Anthropic and OpenAI docs and cookbooks | Prompting, tool use, structured outputs, prompt caching, batch APIs | Free | Primary sources; read the prompting and tool-use guides end to end |
| [Google PAIR People + AI Guidebook](https://pair.withgoogle.com/guidebook-v2/) | AI trust, explainability, feedback and error patterns (as reading for how to write behavior specs) | Free | Dated on agents; reading only, not a build item |
| [AI PM interview bank](https://github.com/landedjobs/ai-pm-interview-prep) | 131 community-made questions and frameworks | Free | Useful drill bank; verify claims |
| Primary regulation texts | India AI Governance Guidelines, DPDP Act and Rules 2025, EU AI Act and Digital Omnibus, NIST AI RMF | Free | Read the primary documents, not blog summaries |

### Books (buy at most two)

- **Chip Huyen, *AI Engineering*** (O'Reilly, 2025). The best single technical-depth reference for a PM. Read the chapters on evaluation, RAG/agents, inference optimization and the feedback loop.
- **Hamel Husain and Shreya Shankar, *Evals for AI Engineers*** (O'Reilly, listed for late October 2026, about 225 pages). Not yet released as of 7 Oct 2026, so pre-order or read it on O'Reilly when it lands.
- **Marily Nika's AI PM books** are useful framing but lighter on technical depth. Optional.

### Paid cohorts

| Course | Cost | Verdict |
| --- | --- | --- |
| [AI Evals for Engineers and PMs](https://maven.com/parlance-labs/evals) (Hamel and Shreya, Maven) | Check current price; next cohort starts 10 Oct 2026 | Best paid option if you buy one. The free material covers roughly 70% of it |
| [Marily Nika's AI PM Bootcamp](https://maven.com/marily-nika/ai-pm-bootcamp) | $2,500; advanced certification $749 | Strong network, expensive for your plan. "#1" and alumni claims are self-reported. Skip unless an employer pays |
| Reforge | Subscription | Strong on strategy and growth; AI content and pricing not verified. Optional in Month 5 |

### Communities

- AI PM communities on LinkedIn and Maven free lightning lessons
- The evals course Discord (if you enroll) and MCP community discussions on GitHub
- India-specific: People+ai/EkStep events, IndiaAI and BHASHINI hackathons, NASSCOM AI community, Pune and Bengaluru product meetups

## Tooling setup for a no-local-machine builder (Week 1)

Everything below runs in the browser or in GitHub; nothing needs a local machine.

| Need | Tool | Budget reality (as of Oct 2026) |
| --- | --- | --- |
| Dev environment | [GitHub Codespaces](https://github.com/features/codespaces) | Free personal accounts get 120 core-hours/month (about 60 hours on a 2-core machine) and 15 GB storage. Set the spending limit to $0 and stop codespaces after each session |
| CI/CD | GitHub Actions | 2,000 free minutes/month for private repos; public repos suit a portfolio anyway |
| Notebooks | Google Colab, Kaggle | Free tiers; good for eval analysis |
| LLM APIs | Gemini API free tier, Anthropic and OpenAI pay-as-you-go | Gemini's free tier is [Flash/Flash-Lite only since April 2026](https://questloops.com/blog/how-to-use-google-gemini-for-free-in-2026-api-limits-explained), and free-tier prompts may be used to improve Google's products. Never send real government or personal data on free tiers |
| Indic models | Sarvam 30B/105B open-weight ([Apache 2.0](https://www.opensourceforu.com/2026/03/sarvam-releases-30b-and-105b-llms-under-apache-2-0/)), BHASHINI APIs | Confirm current BHASHINI onboarding and limits at bhashini.gov.in |
| Eval and observability | Arize Phoenix (open source), Braintrust or LangSmith free tiers, or a homemade trace viewer | Hamel and Shreya teach vibe-coding your own trace viewer, which suits your setup |
| Hosting demos | Hugging Face Spaces, Streamlit Community Cloud, Vercel, GitHub Pages | Free tiers |
| Prototyping | Claude Code in Codespaces, v0, Google AI Studio | Practice for the "vibe-code a prototype" interview round |

**Budget envelope (my estimate):** roughly ₹1,500–₹2,500/month for API credits plus one chat subscription, and ₹4,000–₹6,000 for two books. Without a paid cohort, the six-month total is about ₹15,000–₹25,000.

**Data hygiene rule (non-negotiable, since you may work near government or client data):** every portfolio project uses public documents (PIB releases, gazette notifications, GIGW guidelines, public scheme FAQs) or synthetic data. Never use client data or anything covered by an employer or client NDA.

## Phases 1–3: foundations, RAG + evals, agents + MCP

### Phase 1: Foundations for builders (W1–4, 7 Oct – 3 Nov 2026)

Skip generic AI-for-everyone content; you have the engineering and delivery fundamentals.

**Learning goals:** how LLMs work at PM depth (tokens, context windows, temperature, reasoning vs fast models, embeddings, fine-tuning vs prompting vs RAG); prompt engineering growing into context engineering (system prompts, few-shot examples, JSON-schema structured outputs, tool definitions, prompt caching); basic economics (price per million tokens, caching and batch discounts, time-to-first-token vs total latency, cost per successful task).

| Week | Core work | Build / ship |
| --- | --- | --- |
| W1 (7–13 Oct) | Set up Codespaces devcontainer, Actions secrets and spending limits; Claude Academy AI Fluency and first Claude API modules | Repo `rj-ai-pm-lab` with devcontainer, CI lint/test workflow and a README ship log |
| W2 (14–20 Oct) | Anthropic and OpenAI prompting guides; structured outputs and tool-use docs; Chip Huyen ch. 1–2 | **Sentinel AI Bridge v2:** transcript to JSON tasks with a schema; log tokens, latency and cost per call to a CSV via Actions |
| W3 (21–27 Oct) | Chip Huyen on evaluation basics; Hamel's "Your AI Product Needs Evals"; LLM Evals FAQ | Run v2 on 30 synthetic Hinglish, Hindi and English transcripts across 2–3 models; fill a cost/latency/accuracy table |
| W4 (28 Oct – 3 Nov) | Read 3 AI product teardowns; the Lenny job-market post | **Teardown #1** (published): an Indian AI product, such as the publicly described CPGRAMS voice flow. Cover job-to-be-done, failure modes, trust, probable cost structure |

**Checkpoint:** you can explain in 2 minutes, without notes, why the same task costs 10x more on one model than another; Sentinel v2 is live with a model comparison table; one teardown is published. Light version: skip the teardown. Heavy version: take the DeepLearning.AI MCP course early.

### Phase 2: RAG + evals (W5–9, 4 Nov – 8 Dec 2026)

The most important phase. Evals are the skill most consistently tested and most often missing in candidates.

**Learning goals:** RAG architecture (chunking, embeddings, hybrid search, reranking, citations and grounding, Hindi/English retrieval); the Hamel/Shreya evals method (collect traces, open and axial coding of failures, a failure taxonomy, binary pass/fail criteria, code checks before LLM judges, judges validated against your own labels, a regression suite in CI); RAG metrics (recall@k, faithfulness, answer correctness, citation accuracy, correct refusal).

| Week | Core work | Build / ship |
| --- | --- | --- |
| W5 (4–10 Nov) | Chip Huyen RAG chapter; one DeepLearning.AI retrieval short course | Ingest a public corpus (GIGW 3.0, DPDP Act and Rules, India AI Governance Guidelines, 2–3 public scheme FAQs); basic RAG with citations |
| W6 (11–17 Nov) | "LLM-as-a-Judge: A Complete Guide"; "A Field Guide to Improving AI Products" | Write 100+ test queries in English, Hindi and Hinglish, including adversarial and out-of-scope; collect traces |
| W7 (18–24 Nov) | Error-analysis practice | Label 100 traces and build a failure taxonomy (wrong-document retrieval, Hindi-query miss, outdated rule, citation mismatch) |
| W8 (25 Nov – 1 Dec) | "Evaluating AI Agents" (DeepLearning.AI/Arize), first half | Fix the top 2 failure modes (hybrid search, query translation, reranking); add LLM-judge evals validated against your labels; wire evals into GitHub Actions as a regression gate |
| W9 (2–8 Dec) | Write-up week | **Publish the Project A eval report** and a short demo video |

**Checkpoint:** a golden set of 100+ cases, a failure taxonomy with counts, at least 2 iterations with before/after metrics, an eval CI workflow that fails a PR on regression, and a reported judge-vs-human agreement figure. Light version: 50 cases, one iteration. Heavy version: enroll in the Hamel/Shreya cohort and use Project A as your course project.

### Phase 3: Agents, tool use and MCP (W10–13, 9 Dec 2026 – 5 Jan 2027)

Holiday weeks (W12–13) are lighter by design, about 6 hours each.

**Learning goals:** agent patterns (reflection, tool use, planning, multi-agent) and degrees of autonomy; MCP primitives (tools, resources, prompts), transports and auth, MCP Apps, and governance (donated to the Agentic AI Foundation under the Linux Foundation in Dec 2025); A2A at concept level; agent security (prompt injection via tool outputs, tool poisoning, least privilege, approval gates); agent evals (trajectory and step-level correctness, tool-call accuracy, task completion rate, cost per completed task, human-intervention rate).

| Week | Core work | Build / ship |
| --- | --- | --- |
| W10 (9–15 Dec) | Andrew Ng's Agentic AI modules 1–3; Claude Academy "Introduction to MCP" | MCP server exposing Sentinel's task store (create, list, update tasks) |
| W11 (16–22 Dec) | Claude Academy "MCP: Advanced Topics"; agent security reading | **Project B agent:** transcript, extract tasks, propose calendar/issue actions via MCP, human approval step, execute |
| W12 (23–29 Dec, light) | Agentic AI modules on evals and latency/cost | Trace 30 runs; step-level eval (right tool, right arguments, approval needed?) |
| W13 (30 Dec – 5 Jan, light) | Reflection | Write the autonomy design doc (what auto-executes, what needs approval, and why); publish Project B |

**Checkpoint:** a working MCP server that a client (Claude Desktop, Claude Code or another MCP client) can connect to, an agent with a human-in-the-loop gate, and metrics for task completion rate, tool-call accuracy, intervention rate and cost per task.

## Phases 4–6: multimodal and Indic AI, strategy and governance, portfolio and interviews

### Phase 4: Multimodal, voice and Indic AI, with AI behavior specs (W14–17, 6 Jan – 2 Feb 2027)

This phase is revised from my first draft. It no longer asks you to build a design pattern library. You write the behavior of an AI product as a PM would: requirements and rules, not screens.

**Learning goals:**

- Voice-first and low-literacy service design as a product problem. BHASHINI [powers government services](https://egov.eletsonline.com/2026/03/bhashini-bridging-1-4-billion-citizens-to-services-and-opportunities-via-language-ai/) such as PM-Kisan and eSanjeevani, and the CPGRAMS voice bot lets citizens file grievances by speaking.
- Multimodal evals: CER/WER for OCR and speech recognition, MOS for speech synthesis (the metric set Sarvam's Models PM role names).
- AI behavior specs: when the model answers, abstains or escalates to a human; how confidence and citations are shown; what feedback is captured as future eval data; what the product must never do. Read the PAIR guidebook for vocabulary, then write specs, not mockups.

| Week | Core work | Build / ship |
| --- | --- | --- |
| W14 (6–12 Jan) | PAIR guidebook chapters on explainability, feedback and errors; BHASHINI API docs | Extend your CI-only Hindi/Sanskrit OCR pipeline with LLM post-correction and confidence flags (public-domain scans only) |
| W15 (13–19 Jan) | DeepLearning.AI "Voice for AI Agents" or similar | Build a 50-page ground-truth set; measure CER before and after correction; cost per page |
| W16 (20–26 Jan) | Study the publicly described CPGRAMS voice and AI flow | Write the **AI behavior spec** (3–5 pages) for a bilingual citizen assistant: abstain/escalate rules, low-confidence handoff to a human officer, consent notice under DPDP, citation display rules, feedback capture, "never do" list |
| W17 (27 Jan – 2 Feb) | Write-up | **Publish Project C** and the behavior spec as a case study: "Specifying trustworthy AI for Bharat" |

**Checkpoint:** a CER improvement number with honest failure examples (for example "CER 14% to 6% at ₹0.4/page", using your real figures), a published behavior spec, and 3 portfolio artifacts in total.

### Phase 5: Strategy, economics and governance (W18–21, 3 Feb – 2 Mar 2027)

**Learning goals:**

- **Build vs buy vs fine-tune:** prompt plus RAG first; fine-tune for format, style, latency or cost at scale; open-weight self-hosting for data residency (relevant for government).
- **Unit economics:** cost per task at 1k, 100k and 10M tasks/month; caching, batching and model routing (small model first, escalate to a larger one); latency SLOs.
- **AI PRDs:** problem, users, product/model/guardrail metrics, eval plan, failure modes and fallbacks, human-in-the-loop design, data strategy, launch criteria, monitoring.
- **Data strategy:** golden sets, labeling operations, consent and purpose limitation, Indic data sources (BHASHINI datasets, AIKosh).
- **Governance dates to know cold:**
  - India AI Governance Guidelines (MeitY, Nov 2025): [voluntary and non-binding](https://casrai.org/guides/india-ai-governance-guidelines), seven principles, sector regulators keep enforcement, relies on existing laws.
  - DPDP Rules 2025 (notified Nov 2025): Consent Manager registration from 13 Nov 2026; core obligations (notice, consent, security safeguards, breach intimation, data principal rights) from [13 May 2027](https://www.privybyidfy.com/blog/dpdp-compliance-guide-2026-what-indian-enterprises-must-do-before-may-2027).
  - EU AI Act: GPAI obligations since 2 Aug 2025; most Article 50 transparency duties from 2 Aug 2026; the [Digital Omnibus](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/) moved Annex III high-risk obligations to 2 Dec 2027 and Annex I to 2 Aug 2028.
  - Standards: NIST AI RMF and ISO/IEC 42001.

| Week | Core work | Build / ship |
| --- | --- | --- |
| W18 (3–9 Feb) | India AI Governance Guidelines, DPDP Rules summary, EU Omnibus explainer from a law-firm source | Draft the **Project D PRD:** AI grievance triage and drafting assistant for a ministry-level grievance desk (CPGRAMS-style) |
| W19 (10–16 Feb) | DeepLearning.AI "Governing AI Agents"; NIST AI RMF playbook skim | Risk assessment and model card: harms, affected groups, DPDP mapping, human oversight, audit logging, CERT-In incident reporting touchpoints |
| W20 (17–23 Feb) | Chip Huyen on inference optimization | **Build-vs-buy memo:** hosted frontier API vs Sarvam open-weight on sovereign cloud vs BHASHINI plus a small LLM (data residency, cost at 3 scales, latency, Indic quality, lock-in) |
| W21 (24 Feb – 2 Mar) | GTM and stakeholder reading | Executive one-pager and a 6-slide stakeholder deck; **publish Project D** |

**Checkpoint:** a PRD with explicit launch gates (for example "routing accuracy at least 90% on the golden set; P95 latency under 3 s; human review on all closures"), a cost model spreadsheet, a regulation mapping table, and 4 portfolio artifacts.

### Phase 6: GTM, portfolio polish and interview sprint (W22–26, 3 Mar – 6 Apr 2027)

| Week | Focus | Output |
| --- | --- | --- |
| W22 (3–9 Mar) | Portfolio site with 4 project pages: problem, approach, evals, metrics, what I'd do next | Live site and a 3-minute demo video per project |
| W23 (10–16 Mar) | AI product-sense and eval-design mock interviews (3 mocks) | Written answers to the question bank in your own words |
| W24 (17–23 Mar) | Technical depth plus live prototyping drill | 2 timed 45-minute prototypes built in Codespaces with a coding agent |
| W25 (24–30 Mar) | Behavioral interviews and take-home practice | 8 polished STAR stories from your past roles; 1 mock take-home |
| W26 (31 Mar – 6 Apr) | Portfolio polish, retrospective, post-6-month plan | Ship-log review and a learning-loop plan |

**Checkpoint:** live portfolio site, 3-minute demos for each project, and 10+ mock interviews.

## Portfolio project briefs and definition of done

Four core projects, each with a published write-up. All use public or synthetic data only.

### Project A: Niyam Sahayak, a bilingual GovTech policy and scheme assistant (RAG + evals)

- **Problem:** citizens, startups and department staff struggle to get accurate, cited answers about rules (DPDP, GIGW, scheme eligibility) in Hindi and Hinglish.
- **Build:** RAG over public documents with citations, a Hindi/English/Hinglish query path, out-of-scope refusal and a "talk to a human" handoff.
- **Done means:**
  1. A live demo URL.
  2. A golden set of 100+ cases (at least 30% Hindi/Hinglish, at least 15 adversarial).
  3. A published eval report: failure taxonomy, before/after metrics over two iterations (recall@5, faithfulness, citation accuracy, correct-refusal rate), judge-vs-human agreement, cost per answer, P95 latency.
  4. An eval gate in GitHub Actions.
  5. A one-page note on what deployment in a large government program would take (GIGW accessibility, Parichay SSO, MeghRaj hosting, BHASHINI integration, DPDP notice).
- **Interview story:** "I found 38% of failures were Hindi-query retrieval misses and fixed them with X" (use your real number).

### Project B: TaskMind and Sentinel MCP agent (built on your side projects)

- **Problem:** calls produce commitments that never become tracked tasks.
- **Build:** an MCP server for the Sentinel task store, plus an agent that turns Hinglish call transcripts into tasks, proposes calendar or issue actions, requires approval for anything external, and executes via MCP. The TaskMind Android app (built CI-only) acts as the approval surface.
- **Done means:**
  1. A public repo with the MCP server and client config.
  2. An autonomy matrix (auto / confirm / never).
  3. A trace-level eval of 50+ runs: task-extraction F1, tool-call accuracy, intervention rate, cost per completed task.
  4. A prompt-injection test set with results.
  5. A 3-minute demo video.

### Project C: Akshara, Hindi/Sanskrit OCR with LLM post-correction, plus an AI behavior spec

- **Build:** extend the CI-only OCR pipeline with LLM correction and confidence flags for human review, on public-domain scans only.
- **Done means:**
  1. A 50-page ground-truth set.
  2. CER/WER before and after, split by script, print quality and diacritics.
  3. Cost per page and throughput.
  4. A written comparison of approaches (BHASHINI OCR vs open-source OCR plus LLM vs a multimodal LLM directly).
  5. A 3–5 page AI behavior spec defining when the product abstains, flags for human review, or escalates (this replaces the UX pattern library from my first draft).

### Project D: AI grievance triage and drafting assistant, with PRD, risk assessment and build-vs-buy memo

- **Context:** CPGRAMS handles millions of grievances a year (see [Drishti summary](https://www.drishtiias.com/daily-updates/daily-news-analysis/centralised-public-grievance-redress-and-monitoring-system-cpgrams); verify current figures from PIB before quoting numbers), and the NextGen CPGRAMS plan describes AI-based categorisation and routing.
- **Deliverables:** a PRD; a metrics tree (citizen outcomes, officer productivity, model quality, guardrails); an eval plan; a risk assessment mapped to the India AI Governance Guidelines, DPDP and, as a rigor benchmark, the EU AI Act (access to essential public services is a high-risk category there); a build-vs-buy memo; and a 6-slide stakeholder deck. Optional: a routing classifier prototype on synthetic grievances.
- **Done means:** a reviewer from a GovTech or consulting background could take it into a steering-committee meeting. This project is where your delivery experience shows most.

**Reusable add-on for Project D:** an **AI acceptance-testing and eval-SLA template** for government RFQs and vendor-delivered AI services: what to put in the requirement (golden set size, accuracy and refusal thresholds, Hindi/English split, latency, human-review rules, audit logging), how acceptance testing is run, and what happens on a failed eval. Most procurement documents specify features, not measurable AI quality, so this template is a differentiator. Build it from public documents and synthetic data only.

### Project E (optional, heavy plan): responsible GenAI feature teardown for the Jyotish Kundali app

Shows how to add a GenAI interpretation layer while keeping deterministic calculations separate, adding disclaimers, handling cultural sensitivity and limiting harm (no medical or financial advice). Good for a consumer-AI product-sense story.

## Interview preparation

Format for AI product-sense answers: user and problem, why AI (or not), model approach, behavior in failure and trust moments, metrics (product, model, guardrail), evals, cost and latency, risks, launch plan. Drill with the [question bank](https://github.com/landedjobs/ai-pm-interview-prep) and your own projects.

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

**Behavioral (map each to a real story from your own career)**

16. Tell me about a time you killed or descoped a feature.
17. A time you disagreed with a senior government stakeholder and how you resolved it.
18. A time you shipped under ambiguity with incomplete requirements.
19. Why AI PM, and why now? Prepare a direct answer to the "transitioning from project management" objection that leads with shipped AI work.

## Future-proofing for 2027

By 2027, agents, evals and governance operations will be standard PM responsibilities, so the habit of re-running your own evals matters more than any single course.

### Likely changes (forecasts, based on current evidence)

- **Agents become the default unit of product.** MCP is now under neutral governance at the Linux Foundation's Agentic AI Foundation, and A2A covers agent-to-agent work. PMs will specify autonomy levels, approval flows and agent evals.
- **Evals become a standing function, not a project.** Expect eval CI, production trace review and judge validation to appear in more job descriptions.
- **Regulatory milestones in and just after your window:** DPDP Consent Managers (13 Nov 2026), EU Article 50(2) watermarking (2 Dec 2026), full DPDP compliance (13 May 2027), EU high-risk Annex III obligations (2 Dec 2027). India's proposed AI governance institutions may be constituted; neither is final.
- **Sovereign and Indic AI deepens.** The IndiaAI Mission is [funding 12 organisations](https://www.medianama.com/2026/04/223-centre-funds-12-ai-projects-sovereign-models-bharatgen-4x-next-highest-allocation-rs-1000-crore/) building indigenous models, and BHASHINI now runs on [sovereign cloud](https://www.newsonair.gov.in/yotta-data-services-deploys-bhashinis-end-to-end-sovereign-ai-cloud-on-government-platforms). Expect more government RFPs requiring Indic, on-prem or open-weight options, which plays to your GovTech background.
- **Free API tiers keep shrinking.** Budget for small paid usage and keep projects model-agnostic.
- **Interviews will include live building.** Keep a weekly 45-minute prototyping habit.

### The post-April learning loop (about 3 hours/week)

1. **Weekly (60 min):** Lenny's Newsletter, Hamel's blog, the MCP changelog, DeepLearning.AI's The Batch, and release notes from Anthropic, OpenAI and Google.
2. **Monthly (90 min):** one new course, and re-run your Project A eval suite on the newest models, then post the delta. A living benchmark compounds your credibility.
3. **Quarterly:** one new teardown and one regulation update post covering India and the EU.
4. **Annually:** decide on AIGP if you are moving toward governance-heavy roles; refresh the portfolio.

## Caveats and uncertain claims

Treat these items as the weakest parts of the research.

- **Job-count numbers:** Lenny/TrueUp counts cover tech-company roles. India aggregator counts (Glassdoor, foundit, LinkedIn) include duplicates and adjacent roles, and foundit's 2026 figure is a projection.
- **Salary data:** India AI PM salary data is thin (27 Glassdoor reports), and some aggregator estimates are clearly wrong.
- **Job postings:** several come from aggregators (Instahyre, Weekday, DreamWorkHQ) and may be closed or mislabeled. The PhonePe listing's description looks mismatched. Verify on employers' own career pages.
- **Course details:** Claude Academy course counts vary by source because the catalog grew during 2026. Maven prices and dates change each cohort, and Marily Nika's "#1" and alumni figures are self-reported.
- **Unpublished book:** *Evals for AI Engineers* was listed for late October 2026 and not yet released as of 7 Oct 2026.
- **Regulatory dates:** EU AI Act dates reflect Regulation (EU) 2026/1744 as reported by law-firm sources. India's AI Governance Guidelines are voluntary, and the proposed institutions were not yet constituted in the reports I found.
- **Free tiers:** Gemini free-tier limits vary by source and change without notice; check AI Studio's live limits.
- **Interview loops:** reports on Meta, OpenAI and Anthropic interviews come from prep companies and candidate accounts, not employer documentation.
- **Cost estimates:** all INR budget figures are my planning estimates, not quoted prices.

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

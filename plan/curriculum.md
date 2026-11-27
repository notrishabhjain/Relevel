# Applied AI PM Curriculum ({{weeks}} weeks)

This is a {{weeks}}-week route. It makes you a believable Applied AI Product Manager by the end of week {{weeks}}. It teaches AI from two sides: the product (what to build, and why) and the project (how to deliver it safely, on time and within the rules). Week 1 starts on the Monday of the week you begin, so the dates on the Plan tab are your own. You start with about an hour a week. The work grows slowly. Everything runs in the browser, so you need no special computer.

There is one route, and three places show it. The [playbook](../) is where you do each chapter. The [book](../book/) tells the same chapters as one story, in the same order. This plan shows the route as weeks, with notes and monthly reviews. All three use the same list and the same progress. Mark a chapter complete in the playbook, or finish a book chapter. It gets a tick in all three places.

There are three tabs here. The [Plan & tracker tab](#plan) is the route, week by week. The [How to build tab](#build) shows how to take a chapter on its first pass. It also covers the one-time setup and how to publish. This tab, the Curriculum, gives the reasons. It also holds the job-market research and the interview preparation.

## Bottom line

You can be a believable Applied AI PM candidate by the end of the route, on one condition. You must look like a person who owns technical products and delivery. You must also have built and tested working AI. A person who has only read about AI gets a weaker hearing.

So the route ends with one shipped product that you have tested: **Bharat Privacy Guard**, the course’s project. You build it one piece at a time, chapter by chapter. In Week 25 you publish it with its numbers.

**From delivery to product:** this is what changes when you own the result. The date you promised becomes the result you promised. The scope you delivered becomes the number that moved. The risk you raised becomes the kill criterion you write (the line that says when to stop). In Week 9 you rewrite one of your own projects this way. Each month, a look back adds one story from your career.

**The route in one paragraph:** the route follows the book’s order. Each week pairs a book chapter (the story) with the playbook chapter that practises it. So the two are never weeks apart. Month 1 is the product half: the problem, its users, its market, a plan and a spec. There is no code. Month 2 is where you meet the machine. You see tokens (small pieces of text) and connect a model. You learn enough Python to read the code. Then you make the first call, write instructions and an answer key, and try sorting and summarising. Months 3 and 4 build and measure the core: search, the first complete system, output a program can use, attacks, grading at scale, cost, the rules and the spec. Month 5 goes over the same ideas at production depth, like a real launch. Month 6 ships the capstone, covers the business and gets you ready for interviews.

## The route at a glance

Each month ends with a review on the Plan tab. Read the table one row at a time. The last column is what you should have in hand before the review.

| Month (weeks) | Theme | By the review |
| --- | --- | --- |
| 1 (W1–4) | The problem and the plan | Book chapters 1–7 read, each with its playbook chapter (A1–A7) on a first pass |
| 2 (W5–9) | Meet the machine | A model connected, first call costed, a tested system prompt, an answer key, a sorter with a score |
| 3 (W10–13) | Finding, and your first system | Search by words and by meaning on a scoreboard; the findings page v0 published |
| 4 (W14–18) | What real systems add | Your own tool attacked, a checked marker, a cost model, the system card, the requirements |
| 5 (W19–23) | The same ideas, at production depth | Model choice, the release gate, the risk register, the decision pack |
| 6 (W24–28) | Ship it, and get the job | Bharat Privacy Guard shipped with its findings and demo; the business chapters; a role matrix, a case study and a portfolio page; practice interviews |

### Weekly time

The route starts small on purpose. The minutes on each step include the short version of the chapter’s project task. Month 1 is 1 to 1¾ hours a week. Month 2 is 1½ to 2¾ hours. Month 3 has two holiday weeks of under an hour. Then come two weeks of about three hours. Month 4 is 2 to 4 hours. Month 5 is 3 to 5 hours. The two capstone weeks need about four and a half hours each. No week after Week 21 needs more than about five hours. The last three weeks (the business, the job, interviews) are about four, four and a half, and four hours. If you have more time, go on to the next step. The route never stops you. The dates are a guide, not a judge.

## Job-market grounding

First, see what employers want. Demand is strong. But the bar has moved. Employers now expect you to know evals (tests that show how good the AI is). They also expect you to have shipped real things.

### Demand signals

Three signals are worth knowing. Each has a warning, because job numbers are easy to misread.

- **Global:** Lenny's early-2026 [job-market report](https://www.lennysnewsletter.com/p/state-of-the-product-job-market-in-ee9) (TrueUp data) counted 7,300+ open PM roles at tech companies. That is the most since 2022. It also said AI roles are "absolutely exploding."
- **India:** foundit's [2025 tracker](https://news.careers360.com/india-job-market-2025-ai-hiring-growth-foundit-insights-tracker-report) counted about 2.9 lakh AI-linked postings. It expects roughly 32% growth in 2026. That is a guess about the future, not a result. Aggregator counts (sites that collect postings from many places) repeat the same job and include loosely related roles. So read them as a direction, not as a size.
- **Pay (India):** [Glassdoor India](https://www.glassdoor.co.in/Salaries/ai-product-manager-salary-SRCH_KO0,18.htm) shows an average of about ₹29 lakh a year. But it comes from only 27 reports, so treat it as a rough guide. US benchmarks from [KORE1](https://www.kore1.com/how-to-hire-ai-product-manager-2026/) are $165K–$238K base. Remote roles at US pay bands for India-based PMs exist, but they are rare.

### What real 2026 job descriptions ask for

Now read some real postings. The table has one posting in each row. The middle column shows what the posting asks for. The last column shows what that means for you.

| Employer / role | Signals in the posting | What it means for you |
| --- | --- | --- |
| [Sarvam AI, Product Manager](https://www.sarvam.ai/careers/jobs/c4bb3b2c-7608-4d57-8761-650b4222ac13) | Prompt design, model selection, latency budgets (how long a reply may take), failure modes, eval pipelines; built agents; says plainly it is not for people moving over from project/program management | This is the hardest filter you will face. Answer it with agents you shipped, eval reports and Product Owner language |
| [Sarvam AI, PM (Models)](https://www.sarvam.ai/careers/jobs/9e197c29-5164-42eb-8e74-4f691a794517) | Owns ASR, TTS and model evaluation pipelines; metrics are accuracy, latency, MOS, robustness | You test models on Indian text from Month 2. That fits this role directly |
| [Sarvam AI, PM On-Device & Edge](https://www.sarvam.ai/careers/jobs/f462051e-ec76-45cf-96c5-e0192dd4dcc6) | Human-in-the-loop (a person checks the work) and agentic product design; regulated industries including government | Your government background is a clear plus |
| [SciSpace, AI PM](https://www.instahyre.com/job-421694-ai-product-manager-at-scispace-bangalore/) | LLMs, agentic systems, orchestration, fine-tuning, AI evaluation, LangChain/LangGraph; accuracy, latency and trust metrics | This shows how high the bar is at a startup built around AI |
| [PhonePe, AI PM - ML](https://www.instahyre.com/job-428997-ai-product-manager-ml-at-phonepe-bangalore/) | Tags LLM, MCP, RAG, agents, evaluation; define reliability metrics and run evals | MCP and evals now appear as listed skills at Indian consumer tech firms. The posting text looks mislabeled, so check it on PhonePe's careers page |
| [KPMG India, Gen AI PM (Digital Next)](https://www.dreamworkhq.com/job/449c9cc1-c2b9-4fe1-aedf-eee0b6cc9287) | AI-driven products with LLMs; 5–10 years in PM/digital products; OpenAI/Azure/Google AI tools | Big-4 GenAI PM roles accept delivery and consulting backgrounds. This is probably your best first door |
| [Deloitte USI, Manager, PM AI/ML](https://usijobs.deloitte.com/en_US/careersUSI/JobDetail/USI-EH26-Product-Engineering-Leadership-Product-Manager-AI-ML-Manager/301490) | Building products with AI/ML/agentic AI | The same bridge from consulting into product |
| [EY GDS, AIA Gen AI Manager](https://careers.ey.com/ey/job/Bengaluru-EY-GDS-Consulting-AIA-Gen-AI-Senior-Manager-KA-560016/1410204933/) | LLM apps, multi-agent systems, RAG pipelines, model evaluation, AI governance | It leans towards design and delivery, so it fits an "AI solutions PM" story |
| [EkStep Foundation, PM Ecosystem Products](https://jobs.weekday.works/ai-product-manager-for-eco-system-products-at-visume-4390102181) | Digital public infrastructure; real district deployments; comfortable reading API specs | GovTech and DPI roles value field rollouts and a working knowledge of APIs |
| [Wadhwani AI, Consultant Product Analyst](https://www.glassdoor.co.in/job-listing/consultant-product-analyst-wadhwani-institute-for-artificial-intelligence-JV_KO0,26_KE27,73.htm?jl=1009806215886) | AI solutions under the IndiaAI Mission with ministry stakeholders | IndiaAI work does exist, but under titles that sound close to product |

One gap is worth noting. Government AI units, such as Digital India Corporation (home of BHASHINI), hire for AI roles under titles like Business Analyst (AI) or Principal Architect. They do not use "AI Product Manager." We also could not confirm any AI PM postings at PwC or Accenture India.

### What distinguishes strong candidates

Across all those postings, five things come up again and again. Here they are, in the order to work on them.

1. **Eval ownership.** [KORE1's guide](https://www.kore1.com/how-to-hire-ai-product-manager-2026/) lists two signs that a PM knows the technology: you own the design of eval sets, and you sit in model design reviews. [Exponent](https://www.tryexponent.com/guides/openai-product-manager-interview) notes that OpenAI leaders call writing evals a core PM skill.
2. **Artifacts over claims.** Show, do not tell. You need one shipped product (a side project is fine). You need one written case study with real numbers. You need one eval suite that someone else can run. This comes from an [Institute of PM guide](https://www.institutepm.com/knowledge-hub/how-to-become-an-ai-product-manager-2026). That site sells training. Still, its advice matches every posting above.
3. **Knowing when not to use a model.** [KORE1's interview rubric](https://www.kore1.com/ai-product-manager-interview-questions-2026/) grades this instinct as seriously as the design itself.
4. **Failure-mode design.** Decide how much hallucination (confident make-believe) each product can bear. Measure it all the time. Plan a fallback, a safe step to take when the model is wrong.
5. **Owning cost per task and latency.** [Field guides](https://pmtoolkit.ai/learn/ai-modern-pm/ai-product-management-2026-field-guide) now call this part of the AI PM's job.

### Which door first

Choose a first door before Month 2 ends. The Week 4 try asks for it, and the M2 review checks it. The postings above point one way. A company built around AI is the hardest door. One posting says in plain words that it is not for people moving over from project or programme management. Make that your second step. Go there once you hold a product title, or once your published work is hard to ignore. Your first step is the consulting door or the public-sector door. Titles to search for: GenAI product manager, AI solutions manager, a product analyst role under a government AI mission, a solution manager at a digital public infrastructure body. Check each posting on the employer’s own page, because postings change.

### Interview formats in 2026

Interviews are changing too. Here is what we know, company by company.

- **Structure:** [Northeastern's 2026 guide](https://careers.northeastern.edu/blog/2026/06/11/ai-product-manager-interview-questions-2026-guide/) names four shifts. There is a round just for AI product sense. Every loop has technical deep-dive questions. Behavioral questions go deeper. And estimation questions have almost gone.
- **Meta** added a "Product Sense with AI" round. Candidates vibe-code (build by talking to an AI) a working prototype ([Exponent](https://www.tryexponent.com/blog/product-sense-interview)).
- **Anthropic:** the last stage has about five panels in one day. The product-sense cases include safety tradeoffs ([IGotAnOffer](https://igotanoffer.com/en/advice/anthropic-product-manager-interview)).
- **OpenAI:** 4–6 rounds over 1–2 days. Some candidates get a take-home case to present ([Exponent](https://www.tryexponent.com/guides/openai-product-manager-interview)).
- **Consulting and Indian firms:** a recruiter call, a hiring manager, a case or PRD exercise, then a panel. Startups often give a take-home task.

### Skills rising toward 2027, in order of evidence strength

These skills are growing fastest. The ones at the top have the most proof behind them.

1. Evals and error analysis for agents (trajectory evals, which check the route an agent took, and an LLM-as-judge that you have checked)
2. Agent design with MCP/A2A interoperability (agents and tools that plug into each other), human-in-the-loop and autonomy levels
3. Context engineering
4. Cost and latency economics as main product metrics
5. AI governance operations (EU AI Act transparency, DPDP consent, India's sector-led approach)
6. Voice and multimodal (text, pictures, sound) products, especially Indic voice-first
7. Live prototyping with coding agents in interviews

## Best learning resources

The route is the core. The resources below are for going further. Each week on the Plan tab lists one or two of them as optional reading. Most are free. Buy at most one paid course.

### Free core stack

The table shows each resource, what to use it for, what it costs and my verdict. When I say "must-do," I mean it.

| Resource | Use it for | Cost | Verdict |
| --- | --- | --- | --- |
| [Claude Academy](https://academy.claude.com) | [AI Fluency](https://academy.claude.com/courses/ai-fluency-framework-foundations), [Building with the Claude API](https://academy.claude.com/courses/building-with-the-claude-api), [Introduction to MCP](https://academy.claude.com/courses/introduction-to-model-context-protocol), [MCP advanced topics](https://academy.claude.com/courses/model-context-protocol-advanced-topics), [Claude Code 101](https://academy.claude.com/courses/claude-code-101) | Free | Must-do for MCP and agents. Sources give different course counts (13 to 26), because the catalog grew during 2026 |
| [DeepLearning.AI: Agentic AI](https://www.deeplearning.ai/courses/agentic-ai) (Andrew Ng) | Agentic design patterns, evals, error analysis, latency and cost | Free to audit | Must-do. It is the best single course on agents for builders |
| [DeepLearning.AI short courses](https://learn.deeplearning.ai) | Evaluating AI Agents, MCP, Governing AI Agents, Voice for AI Agents, Generative UI | Mostly free | Pick about five, not twenty |
| [Hamel Husain and Shreya Shankar's free evals material](https://hamelhusain.substack.com/p/ai-evals-for-engineers-and-product) | Error analysis, LLM-as-judge, field guide to improving AI products | Free | Must-do. This is the standard way to do evals |
| [Lenny's Newsletter](https://www.lennysnewsletter.com) | Job-market data, AI PM episodes | Free tier | The job-market reports, twice a year, are the best sign of demand |
| [Model Context Protocol docs](https://modelcontextprotocol.io) | Current spec, MCP Apps extension, registry | Free | The spec changes fast, so read the release notes |
| Anthropic and OpenAI docs and cookbooks | [Claude prompting](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview), [tool use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview), [structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs), [prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching), [OpenAI structured outputs](https://developers.openai.com/api/docs/guides/structured-outputs), [Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook) | Free | These are the original sources. Read the prompting and tool-use guides from start to end |
| [Google PAIR People + AI Guidebook](https://pair.withgoogle.com/guidebook-v2/) | AI trust, explainability, feedback and error patterns (read it to learn how to write behavior specs) | Free | It is out of date on agents. Use it for reading only, not to build from |
| [AI PM interview bank](https://github.com/landedjobs/ai-pm-interview-prep) | 131 questions and frameworks made by the community | Free | A good bank to practise from. Check its claims yourself |
| Primary regulation texts | India AI Governance Guidelines, DPDP Act and Rules 2025, EU AI Act and Digital Omnibus, NIST AI RMF | Free | Read the original documents, not blog summaries |

### Books (buy at most two)

- **Chip Huyen, *AI Engineering*** (O'Reilly, 2025). This is the best single book if you want to go deep on the technology as a PM. Read the chapters on evaluation, RAG and agents, inference optimization (making replies faster and cheaper) and the feedback loop.
- **Hamel Husain and Shreya Shankar, *Evals for AI Engineers*** (O'Reilly, listed for late October 2026, about 225 pages). Check if it is out yet. If it is, read it on O'Reilly.
- **Marily Nika's AI PM books** help you frame the job, but they say less about the technology. They are optional.

### Paid cohorts

If you want to pay for something, here are the options. Read the verdict column before you open your wallet.

| Course | Cost | Verdict |
| --- | --- | --- |
| [AI Evals for Engineers and PMs](https://maven.com/parlance-labs/evals) (Hamel and Shreya, Maven) | Check the current price; the next cohort starts 10 Oct 2026 | This is the best paid option if you buy one. The free material covers about 70% of it |
| [Marily Nika's AI PM Bootcamp](https://maven.com/marily-nika/ai-pm-bootcamp) | $2,500; advanced certification $749 | Strong network, but costly for this plan. The "#1" and alumni claims come from the course itself. Skip it unless an employer pays |
| Reforge | Subscription | Strong on strategy and growth. I have not checked its AI content or pricing. Optional in Month 5 |

### Communities

You learn more easily with people around you. These are good places to start.

- AI PM communities on LinkedIn, and the free lightning lessons on Maven
- The evals course Discord (if you enroll), and the MCP community discussions on GitHub
- For India: People+ai/EkStep events, IndiaAI and BHASHINI hackathons, the NASSCOM AI community, and product meetups in Pune and Bengaluru

## The route, month by month

Each table lists the weeks of one month. The weeks themselves, with every step, are on the [Plan & tracker tab](#plan).

### Month 1: The problem and the plan (weeks 1–4) {#m1}

You read the book from its first page. It tells of a product manager in Pune. He finds identity numbers in a week of customer chats. He must decide if that is worth a year of work. Each book chapter comes with its playbook chapter, A1 to A7, in the same week, on a first pass. You read the method and answer its boxes while the story is fresh. There is no code and nothing to install. By the end you have a problem, its users, its market, a plan and a short spec. All of it is for the project you will build.

<!-- weeklinks 1-4 -->

[This month in one view, in the playbook](../app/#/start#month-1): every week with its chapters, book pages and your notes.

### Month 2: Meet the machine (weeks 5–9) {#m2}

The plan needs a model, so now you meet one. You see tokens and cost on your own text. You connect a model once. You learn enough Python to read the course code. Then you make the first real call and see its bill. You see why a model forgets, and you write standing instructions. You make your first answer key. You try the first two jobs a model does: sorting and summarising. The month ends with cutting long text into pieces and finding the right piece by its words.

<!-- weeklinks 5-9 -->

[This month in one view, in the playbook](../app/#/start#month-2): every week with its chapters, book pages and your notes.

### Month 3: Finding, and your first system (weeks 10–13) {#m3}

Two light holiday weeks cover finding by meaning and measuring which kind of search finds more. Then all the pieces join into your first complete system. You publish version 0 of the findings page. The month ends with answers that a program can use, and a model that can call a tool.

<!-- weeklinks 10-13 -->

[This month in one view, in the playbook](../app/#/start#month-3): every week with its chapters, book pages and your notes.

### Month 4: What real systems add (weeks 14–18) {#m4}

You meet thinking models and the wait they cause. Then better search, an attack on your own tool, grading at scale, cost, real documents, what you may send, the rules, the spec, build or buy, and what the product does when the model is wrong. This closes Parts I to IV.

<!-- weeklinks 14-18 -->

[This month in one view, in the playbook](../app/#/start#month-4): every week with its chapters, book pages and your notes.

### Month 5: The same ideas, at production depth (weeks 19–23) {#m5}

Part V goes over Parts I to IV again, at the depth a real launch needs. No idea in it is new, so you can go deeper. You cover the plumbing, models chosen on your own cases, context, retrieval, workflows and agents. You see the standard plug for tools, then pictures and voice. You set release gates and watch the product live. You look at security, and at the product spec with its decision pack.

<!-- weeklinks 19-23 -->

[This month in one view, in the playbook](../app/#/start#month-5): every week with its chapters, book pages and your notes.

### Month 6: Ship it, and get the job (weeks 24–28) {#m6}

The capstone gets two weeks: build it and break it, then measure it, ship it and defend it. Then come three lighter weeks. Week 26 is the business chapters on a first pass, and you put the project on a page. Week 27 is the job: a role matrix from ten postings, a case study with your numbers and a finished portfolio page. Week 28 is practice interviews, a timed build and a look back over the {{weeks}} weeks. March is year-end for much government work. If Weeks 23 to 25 do not fit, move the rest by two weeks. Do not skip a step.

<!-- weeklinks 24-28 -->

[This month in one view, in the playbook](../app/#/start#month-6): every week with its chapters, book pages and your notes.

## The project: Bharat Privacy Guard

The course builds one project from start to finish. **Bharat Privacy Guard** is a small tool that sits between a person and a website, an app or an AI chatbot. Think of a guard at a gate. It spots Indian identity numbers and other personal details in what someone is about to send. It warns them, or covers the details, before they leave. The [project page in the playbook](../app/#/project) shows its thirteen stages and which chapters build each one.

It is a good portfolio project for a GovTech product manager, for three reasons. It touches the DPDP Act (India’s law on personal data) directly. It needs testing at every step, from a small answer key in Month 2 to a release gate in Month 5. And you can build it all on made-up records, so you never use anything private.

**Definition of done (Week 25):** a public findings document that opens with its headline numbers. It has an honest failure example and the cost per check. It has a three-minute screen-recorded demo. And it has a link anyone can open.

## Interview preparation

Use one shape for every AI product-sense answer. Go through these in order: the user and problem; why AI (or why not); the model approach; what happens when it fails, and how you keep trust; metrics (product, model, guardrail); evals; cost and latency; risks; and the launch plan. Practise with the [question bank](https://github.com/landedjobs/ai-pm-interview-prep) and your own projects. Follow the [mock-interview recipe](#mock-interviews).

Here are 19 practice questions, in five groups. In Week 13 you answer question 10 aloud. In Week 23 you answer question 11. The rest wait for Week 28.

**AI product sense**

1. Design a voice-first grievance-filing assistant for rural citizens who speak Bhojpuri. What do you do when speech recognition is not sure of the words?
2. Should DigiLocker add an AI assistant? What do you build first, and what do you say no to?
3. Design an AI feature that saves users time and keeps their trust.
4. How would you measure if a new frontier model release is a success?

**Evals and metrics**

5. Write the evals for a travel-booking agent. How is a final-answer eval different from a trajectory eval?
6. Your LLM judge says 92% pass, but users complain. What do you do?
7. A new model version drops your eval scores by 4 points on Hindi queries only. Walk me through what you do.
8. Which evals would you run before you ship a new model to enterprise customers?

**Technical depth**

9. When do you choose RAG, when fine-tuning, and when a longer context window?
10. Explain prompt caching and how it changes the cost of each task.
11. What is MCP, and what security risks does it add? How do you reduce prompt injection that comes in through tool outputs?
12. Your agent costs ₹6 per task, and the business case needs ₹1. List five ways to cut the cost.

**Strategy, governance and economics**

13. Build or buy, for an Indic-language assistant for a ministry: a frontier API, Sarvam open-weight or BHASHINI?
14. The DPDP deadline is 13 May 2027. What does it change in your roadmap for an AI feature that handles citizen data?
15. An EU customer asks if your HR screening feature is "high-risk." What do you say? What changed with the Digital Omnibus?

**Behavioral (match each one to a real story from your own career)**

16. Tell me about a time you killed a feature or cut its scope.
17. Tell me about a time you disagreed with a senior government stakeholder. How did you settle it?
18. Tell me about a time you shipped when things were unclear and the requirements were not complete.
19. Why AI PM, and why now? Prepare a direct answer to the "moving over from project management" worry. Start it with the AI work you have shipped.

## Future-proofing for 2027

By 2027, agents, evals and governance operations will be normal PM work. So the habit of re-running your own evals will matter more than any single course.

### Likely changes (forecasts, based on current evidence)

These are forecasts, not facts. Treat them as the direction things are moving.

- **Agents become the default unit of product.** MCP now sits under neutral care at the Linux Foundation's Agentic AI Foundation. A2A covers agent-to-agent work. PMs will write down autonomy levels (how much an agent may do alone), approval flows and agent evals.
- **Evals become a standing function, not a project.** Expect more job descriptions to name eval CI (evals that run on every change), production trace review (reading logs of live runs) and judge validation (checking the LLM judge).
- **Regulatory milestones in and just after your window:** DPDP Consent Managers (13 Nov 2026, now passed; look up what changed), EU Article 50(2) watermarking (2 Dec 2026), full DPDP compliance (13 May 2027), and EU high-risk Annex III obligations (2 Dec 2027). India's proposed AI governance institutions may be set up. Neither is final.
- **Sovereign and Indic AI deepens.** The IndiaAI Mission is [funding 12 organisations](https://www.medianama.com/2026/04/223-centre-funds-12-ai-projects-sovereign-models-bharatgen-4x-next-highest-allocation-rs-1000-crore/) that are building home-grown models. BHASHINI now runs on [sovereign cloud](https://www.newsonair.gov.in/yotta-data-services-deploys-bhashinis-end-to-end-sovereign-ai-cloud-on-government-platforms). Expect more government RFPs (requests for proposals) that ask for Indic, on-prem or open-weight options. That suits your GovTech background.
- **Free API tiers keep shrinking.** The route needs only the free tier today, so pay for nothing. If a limit changes, a little paid use is the fallback. Keep your projects model-agnostic (not tied to one model), and the switch is easy.
- **Interviews will include live building.** Build a small prototype for 45 minutes every week.

### After the route (about 3 hours a week)

After the route you do not stop. You keep a light loop going, at four speeds.

1. **Weekly (60 min):** Read Lenny's Newsletter, Hamel's blog, the MCP changelog, DeepLearning.AI's The Batch, and the release notes from Anthropic, OpenAI and Google.
2. **Monthly (90 min):** Run your capstone test set again on the newest models, and write down what changed. Do the second pass on one Track A or Track B “Build it”. A benchmark you keep alive makes people trust you more over time.
3. **Quarterly:** Write one new teardown (a close look at how a product works and where it falls short). Write one post on new rules in India and the EU.
4. **Annually:** Decide on AIGP if you are moving towards governance-heavy roles. Refresh your portfolio.

## Caveats and uncertain claims

Some of the research above is weaker than the rest. Handle these items with care.

- **Job-count numbers:** The Lenny/TrueUp counts cover tech-company roles. The India aggregator counts (Glassdoor, foundit, LinkedIn) include repeats and nearby roles. And foundit's 2026 figure is a forecast.
- **Salary data:** There is little salary data for AI PMs in India (27 Glassdoor reports). Some aggregator estimates are clearly wrong.
- **Job postings:** Several come from aggregators (Instahyre, Weekday, DreamWorkHQ) and may be closed or mislabeled. The PhonePe listing's description looks mismatched. Check postings on the employers' own career pages.
- **Course details:** Claude Academy course counts differ by source, because the catalog grew during 2026. Maven prices and dates change with each cohort. Marily Nika's "#1" and alumni figures come from her own side.
- **Unpublished book:** *Evals for AI Engineers* was listed for late October 2026. Check if it is out.
- **Regulatory dates:** The EU AI Act dates follow Regulation (EU) 2026/1744, as law-firm sources report it. India's AI Governance Guidelines are voluntary. In the reports I found, the proposed institutions did not exist yet.
- **Free tiers:** Gemini free-tier limits differ by source and change without notice. Check the live limits in AI Studio.
- **Interview loops:** Reports on Meta, OpenAI and Anthropic interviews come from prep companies and from candidates, not from the employers' own papers.
- **Cost estimates:** All the INR budget figures are my own estimates for planning, not quoted prices.

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
- [Gemini free tier changes](https://questloops.com/blog/how-to-use-google-gemini-for-free-in-2026-api-limits-explained)
- [Sarvam open-weight 30B/105B release](https://www.opensourceforu.com/2026/03/sarvam-releases-30b-and-105b-llms-under-apache-2-0/)
- [BHASHINI overview (Elets eGov)](https://egov.eletsonline.com/2026/03/bhashini-bridging-1-4-billion-citizens-to-services-and-opportunities-via-language-ai/) and [BHASHINI sovereign cloud deployment](https://www.newsonair.gov.in/yotta-data-services-deploys-bhashinis-end-to-end-sovereign-ai-cloud-on-government-platforms)
- [CPGRAMS summary (Drishti IAS)](https://www.drishtiias.com/daily-updates/daily-news-analysis/centralised-public-grievance-redress-and-monitoring-system-cpgrams)
- [India AI Governance Guidelines explained (CASRAI)](https://casrai.org/guides/india-ai-governance-guidelines)
- [DPDP compliance guide 2026 (Privy by IDfy)](https://www.privybyidfy.com/blog/dpdp-compliance-guide-2026-what-indian-enterprises-must-do-before-may-2027)
- [EU AI Act Omnibus agreement (Gibson Dunn)](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/)
- [IndiaAI funding of 12 sovereign model projects (MediaNama)](https://www.medianama.com/2026/04/223-centre-funds-12-ai-projects-sovereign-models-bharatgen-4x-next-highest-allocation-rs-1000-crore/)
- [Is the AIGP certification worth it in 2026?](https://examworthy.com/blog/is-aigp-worth-it-2026)
- [AI PM interview prep bank (GitHub)](https://github.com/landedjobs/ai-pm-interview-prep)

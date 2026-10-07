# Applied AI PM: Weekly Working Plan (7 Oct 2026 – 6 Apr 2027)

One row per week: one topic, where to learn it, how hard it is, and one thing to ship. If the thing is shipped, the week was a success, however the rest of the week went. The full reasoning, resources and project briefs are in the [curriculum](curriculum.html).

**North star:** by 6 April 2027, four published AI artifacts with real evaluation numbers, and an interview-ready portfolio.

## The weekly rhythm (standard plan, 8–10 hours)

| Slot | Time | What you do |
| --- | --- | --- |
| Learn | Wednesday night, 1.5 h | Work through that week's learning item |
| Read | Thursday, 1 h | One newsletter or doc from the row; notes go in the repo README |
| Build | Saturday, 3–4 h | The main build or analysis block |
| Ship and review | Sunday, 3 h | Finish and publish the deliverable (2 h), one ship-log entry or post (45 min), 15-minute Sunday review |

Weeks are not tied to fixed calendar slots: do them whenever the hours are available, in the order above.

### How to read the weekly tables

- **Complexity:** Low means you can do it tired. Medium needs a focused block. High needs your best two hours, so give it the longest slot.
- **Ship this week:** the proof that the week happened: a link, a commit or a published page. "Read about X" is never the deliverable.
- **Where to learn:** the only resources for that week. Opening anything else goes in the parking lot.
- **Holiday weeks (W12 and W13):** about 6 hours each, by design.
- **Light plan:** keep only the "Ship this week" item and one learning item per week.

## Month 1: Foundations (W1–4)

Goal: Explain LLM cost, context and structured output, and have one working repo.

| Week | Learn this week | Where to learn | Complexity | Ship this week |
| --- | --- | --- | --- | --- |
| W1 | Dev setup; how LLMs work (tokens, context window, temperature) | Claude Academy: AI Fluency and first Claude API modules; GitHub Codespaces docs | Low | Repo rj-ai-pm-lab with a devcontainer and a green GitHub Actions workflow |
| W2 | Prompting, structured outputs (JSON schema), tool use | Anthropic and OpenAI prompting and tool-use guides; Chip Huyen, AI Engineering, ch. 1-2 | Medium | Sentinel AI Bridge v2: transcript to JSON tasks, plus a CSV log of tokens, latency and cost per call |
| W3 | Eval basics: why evals come before metrics | Hamel Husain: Your AI Product Needs Evals and the LLM Evals FAQ; Huyen's evaluation chapter | Medium | 30 synthetic Hinglish/Hindi/English transcripts across 2-3 models; cost, latency and accuracy table |
| W4 | Reading real AI products critically | 3 AI product teardowns; Lenny's job-market post | Low | Teardown #1 published (an Indian AI product); Month 1 gate review |

## Month 2: RAG and evals (W5–9)

Goal: Project A published with a 100+ case eval set and before/after metrics.

| Week | Learn this week | Where to learn | Complexity | Ship this week |
| --- | --- | --- | --- | --- |
| W5 | RAG: chunking, embeddings, hybrid search, reranking, citations | Huyen's RAG chapter; one DeepLearning.AI retrieval short course | Medium | RAG over a public corpus (GIGW 3.0, DPDP Act and Rules, India AI Governance Guidelines) with citations |
| W6 | Test sets and LLM-as-judge | Hamel and Shreya: LLM-as-a-Judge guide; A Field Guide to Improving AI Products | Medium | 100+ test queries (English, Hindi, Hinglish, adversarial, out-of-scope); traces collected |
| W7 | Error analysis: label failures, then group them | Hamel and Shreya's free error-analysis material | High | 100 labeled traces and a failure taxonomy with counts |
| W8 | Fixing the top failures; evals as a CI gate | DeepLearning.AI: Evaluating AI Agents (first half); GitHub Actions docs | High | Top 2 failures fixed; judge validated against your labels; eval workflow that fails a PR on regression |
| W9 | Writing up evidence | Your own notes | Low | Project A published: eval report and short demo video; Month 2 gate review |

## Month 3: Agents and MCP (W10–13)

Goal: Project B published: working MCP server and an agent that asks before acting.

| Week | Learn this week | Where to learn | Complexity | Ship this week |
| --- | --- | --- | --- | --- |
| W10 | Agent patterns; MCP tools, resources and prompts | Andrew Ng: Agentic AI modules 1-3; Claude Academy: Introduction to MCP | Medium | MCP server exposing the Sentinel task store (create, list, update) |
| W11 | Advanced MCP, agent security, prompt injection | Claude Academy: MCP Advanced Topics; modelcontextprotocol.io docs | High | Project B agent: transcript, extract tasks, propose actions via MCP, approval step, execute |
| W12 | Evaluating agents step by step | Agentic AI modules on evals, latency and cost | Medium | 30 traced runs with a step-level eval (right tool, right arguments, approval needed?) |
| W13 | Writing the autonomy rules | Your own traces | Low | Project B published: autonomy doc (auto / confirm / never) and 3-minute demo; Month 3 gate review |

## Month 4: Multimodal, Indic AI, behavior specs (W14–17)

Goal: Project C published with a measured error-rate improvement and a behavior spec.

| Week | Learn this week | Where to learn | Complexity | Ship this week |
| --- | --- | --- | --- | --- |
| W14 | OCR and LLM post-correction for Indic scripts; BHASHINI APIs | BHASHINI developer docs; your CI-only OCR pipeline | Medium | OCR pipeline with LLM post-correction and confidence flags on public-domain scans |
| W15 | Measuring OCR and speech quality (CER, WER); voice products | DeepLearning.AI: Voice for AI Agents (or similar short course) | Medium to High | 50-page ground-truth set; CER before and after correction; cost per page |
| W16 | Writing how an AI product should behave | Google PAIR guidebook (reading only); public coverage of the CPGRAMS voice flow | Medium | AI behavior spec, 3-5 pages, for a bilingual citizen assistant |
| W17 | Writing up evidence | Your own notes | Low | Project C published with the behavior spec as a case study; Month 4 gate review |

## Month 5: Governance, economics, build vs buy (W18–21)

Goal: Project D published: PRD, risk assessment, build-vs-buy memo, acceptance-testing template.

| Week | Learn this week | Where to learn | Complexity | Ship this week |
| --- | --- | --- | --- | --- |
| W18 | India's AI governance approach, DPDP Rules, EU AI Act timelines | India AI Governance Guidelines; DPDP Rules 2025 summaries; Gibson Dunn EU Omnibus explainer | Medium | PRD draft for an AI grievance triage assistant (CPGRAMS-style) |
| W19 | Risk assessment; governing agents | DeepLearning.AI: Governing AI Agents; NIST AI RMF playbook (skim) | Medium | Risk assessment, model card, and a table mapping each risk to DPDP, India's guidelines and the EU AI Act |
| W20 | Unit economics, caching, model routing, build vs buy | Huyen's inference-optimization chapter | High | Build-vs-buy memo (frontier API vs Sarvam open-weight vs BHASHINI plus small LLM) and a cost model at three scales |
| W21 | Turning AI quality into contract terms | Your PRD and memo | Medium | Project D published: acceptance-testing and eval-SLA template plus a 6-slide stakeholder deck; Month 5 gate review |

## Month 6: Portfolio and interviews (W22–26)

Goal: Live portfolio site and 10+ mock interviews. No new topics.

| Week | Learn this week | Where to learn | Complexity | Ship this week |
| --- | --- | --- | --- | --- |
| W22 | Presenting your work in 3 minutes | Your four project write-ups | Low to Medium | Live portfolio site with 4 project pages and a 3-minute demo video for each |
| W23 | AI product-sense and eval-design interview answers | AI PM interview bank (GitHub); Exponent's AI PM guides | Medium | 3 mock interviews (product sense and evals) with written answers in your own words |
| W24 | Technical depth and live prototyping | Your own repos; Claude Code or similar in Codespaces | High | 2 timed 45-minute prototypes built from scratch |
| W25 | Behavioral interviews and take-homes | Your own past-role stories | Medium | 8 STAR stories; 1 mock take-home; a prepared answer to "why AI PM, given your project-management background?" |
| W26 | Reviewing the six months | Your ship log | Low | Ship-log review and the post-April 3-hours-a-week learning loop |

## Anti-drift system

The plan assumes drifting will happen and decides in advance what to do when it does. The rule: when you fall behind, cut scope, never dates, and never go to zero.

### The 10 rules

1. One row per week. The row is your only learning to-do.
2. Ship before you learn more. No next week's learning until this week's ship item exists as a link or commit.
3. One course at a time. No new course, bootcamp or certificate until the current row ships.
4. Frozen stack until W9: Codespaces, GitHub Actions, one LLM API, one eval approach.
5. Side projects count only if they are in the plan. Sentinel and TaskMind feed Project B; the OCR pipeline feeds Project C. Everything else waits for the Month 3 gate.
6. Parking lot, not action. New ideas go in the parking lot and are reviewed only at the monthly gate.
7. Minimum viable week: three 45-minute sessions plus one commit. A floor week counts, a zero week does not.
8. Publish at 80%. Time-box write-ups to 2 hours.
9. Public ship log. Every Sunday: one README line and one LinkedIn post.
10. Tell one person who will ask every Monday, what did you ship?

### Sunday review (15 minutes, same time every week)

- Did I ship this week's row? Yes or no, with the link.
- Did I spend time on anything not in the plan? If yes, is it in the parking lot now?
- What is the one task for next week, and is it scheduled?

### Tripwires: if this happens, do this

| If this happens | Do this |
| --- | --- |
| You missed this week's ship item | Do the floor week next week, then redo the missed item in your build slot. Do not combine two weeks of content |
| You missed two ship items in a row | Switch to the light plan for 2 weeks and tell your accountability person |
| You are more than 2 weeks behind at a monthly gate | Run the catch-up protocol below. Do not move any deadline |
| You feel the urge to start a new course, app or tool | Write it in the parking lot, close the tab, open this week's row |
| A work crunch is coming | Declare a floor week in advance on Sunday instead of silently skipping |
| You have not opened this plan for 7 days | Open it, read the north star, and do one 45-minute session today |

### Catch-up protocol: what to cut, in order

1. Optional reading and newsletters
2. The paid cohort and certificates
3. Project E and any other optional build
4. Eval set size (100 cases down to 50)
5. The Project C build (keep it as a written case study)

Never cut Projects A, B and D, the Sunday review, or the weekly ship log. Those are the plan.

## Monthly gates: pass or adjust

At the end of each month, spend 30 minutes on the gate. Check each pass criterion with a link, then review the parking lot and decide what, if anything, to un-park.

| Gate | Date | Pass criteria (each needs a link) |
| --- | --- | --- |
| Month 1 | 3 Nov 2026 | Repo with green CI; Sentinel v2 with cost/latency log; model comparison table; Teardown #1 published. Decide whether to buy the evals cohort. |
| Month 2 | 8 Dec 2026 | Project A published: 100+ case golden set, failure taxonomy, before/after metrics, eval workflow in CI. |
| Month 3 | 5 Jan 2027 | Project B published: MCP server, approval step, 30+ traced runs, autonomy doc. Decide whether to un-freeze one side project. |
| Month 4 | 2 Feb 2027 | Project C published: CER before and after; behavior spec. |
| Month 5 | 2 Mar 2027 | Project D published: PRD, risk table, build-vs-buy memo, acceptance-testing template. |
| Month 6 | 6 Apr 2027 | Portfolio site live; 4 project pages with demos; 10+ mock interviews completed. |

**If three gates in a row fail:** stop and decide deliberately. Either switch to the light plan for the next month, or move the whole plan back by 4 weeks and write down why. Quietly abandoning the plan is the only option ruled out.

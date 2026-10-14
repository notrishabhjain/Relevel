/* Part V exercises — the v4.1 workbook's homework for chapters 8–21, turned
   into the portal's exercise shape. Each one produces an artifact the
   capstone in chapter 34 expects to find. English-only for now, by request. */
window.EXERCISES5 = [

{ id:'E15', t:'The Experiment Harness', sk:['S30'], ch:21, mins:60, tier:1,
  brief:'You’ll build a recorder that sends one prompt and saves everything about the run. Every comparison later in this track depends on runs being recorded the same way, and this recorder makes sure they are.',
  deliverable:'A Git repository with a command-line tool that records a request and its response as JSON, three unit tests, and a README that works on a clean machine.',
  steps:[
    'Write a utility that reads JSON from a file and filters the rows by one field.',
    'Add three unit tests: one for the happy path, one for a missing field, and one for empty input.',
    'Wrap the utility so you can send one prompt and save the whole run: id, timestamp, model, prompt, response, latency, usage and error.',
    'Add replay. It re-sends a saved request and writes a second record.',
    'Break something on purpose, and confirm that a record is still written, with the error inside it.',
    'Commit the project. Then write the README as if for someone who has never seen it.'
  ],
  rubric:[
    {c:'A stranger could run it', l:['Runs on your machine only','A README exists','The README is accurate','Verified on a clean machine']},
    {c:'Failures are recorded, not lost', l:['Crashes on error','The error is printed','The error is saved in the record','The error class is recorded and can be tested']},
    {c:'Tests cover a failure, not just success', l:['No tests','Happy path only','Happy path plus one failure','All three, and they fail when they should']}
  ],
  iterate:'In version 2, add token usage and cost per run. In version 3, add the trace fields from chapter 30, so the same records feed your dashboard.' },

{ id:'E16', t:'The Model Selection Card', sk:['S27'], ch:22, mins:75, tier:2,
  brief:'You’ll write one page that recommends a model and still stands up when someone asks, “Measured how?” The card is short. The benchmark behind it is the real work.',
  deliverable:'A one-page card with the task, the quality bar, the data sensitivity, the latency SLO, the cost ceiling, a shortlist with measured results, a fallback, and the dataset it will be re-checked against.',
  steps:[
    'Write ten cases. Cover factual questions, reasoning, extraction, multilingual input and refusals.',
    'Before you run anything, predict the winner on quality, speed and cost.',
    'Run all ten cases against two models using your harness. Record the latency, tokens, correctness, and what kind of wrong each failure was.',
    'Change exactly one variable and run again, so you can tell what caused the difference.',
    'Write the card. Every claim must point to a recorded run.',
    'Name the fallback, and actually try it once.'
  ],
  rubric:[
    {c:'The recommendation is led by evidence', l:['Based on reputation','One example','Ten cases','Ten cases, plus a comparison that changes a single variable']},
    {c:'The binding constraint is named', l:['Not stated','Implied','Stated','Stated, with the number that binds it']},
    {c:'The fallback is real', l:['None','Named','Named and specified','Tried at least once']}
  ],
  iterate:'In version 2, re-run the same ten cases three months later. The interesting part is what moved even though you changed nothing.' },

{ id:'E17', t:'The Context Budget', sk:['S18'], ch:23, mins:45, tier:2,
  brief:'You’ll work out what goes into the envelope, what it costs, and what falls out first when space runs short. This turns an argument about context windows into a table.',
  deliverable:'A budget that lists every context component with its measured token count, a ceiling, an eviction order with the reason for it, an output schema, and a memory design that names three stores.',
  steps:[
    'List every component that enters the context: instructions, examples, retrieved evidence, history, tool results and user data.',
    'Measure each one on a real request. Don’t estimate.',
    'Set the ceiling, and show how much headroom is left.',
    'Write the eviction order, and next to it, the reason for each choice.',
    'Write the schema the output must match, and say what happens when it doesn’t.',
    'Design conversation history, user profile and task state as three separate stores. For each, give the storage, retention, access and a deletion path.'
  ],
  rubric:[
    {c:'Numbers are measured', l:['Estimated','Partly measured','Measured','Measured and dated']},
    {c:'The eviction order has reasons', l:['No order','An order only','An order with reasons','An order tested under real pressure']},
    {c:'Deletion is possible', l:['No path','A path for one store','A path for all three','A path tested end to end']}
  ],
  iterate:'In version 2, add what happens when a single retrieved document is larger than the whole budget.' },

{ id:'E18', t:'The Production Retrieval Architecture', sk:['S09','S30'], ch:24, mins:90, tier:3,
  brief:'You’ll write one page that an engineer could build from and a security reviewer could attack. The one-page limit is part of the exercise. If it doesn’t fit, you haven’t decided enough.',
  deliverable:'A one-page architecture that covers ingestion, storage, index, retrieval, rerank, generation, authentication, authorisation, evaluation, monitoring and rollback.',
  steps:[
    'Take an inventory of three real documents: parser, sections, metadata, tables, language, identifiers and access label.',
    'Measure keyword, semantic and hybrid retrieval on your existing question set. For each one, record the rank of the correct chunk.',
    'Add a reranking stage, or record the measurement that justifies leaving it out.',
    'Draw the stages, and write a failure mode next to every arrow.',
    'Mark where the access check happens. Confirm that it sits on the retrieval path and not in the interface.',
    'State the no-answer threshold, the versioning scheme and the rollback procedure.'
  ],
  rubric:[
    {c:'Ingestion is treated as a quality decision', l:['Not covered','Mentioned','Inventoried','Inventoried, with a named limit on what survives']},
    {c:'Claims about hybrid are measured, not repeated', l:['Asserted','One example','The full question set','The full set, with ranks for each strategy']},
    {c:'Deletion and permission changes are handled', l:['Not considered','Noted','Designed','Designed, with the exposure window stated']}
  ],
  iterate:'In version 2, add multi-tenancy. In version 3, add what happens when the embedding model version changes under you.' },

{ id:'E19', t:'The Approval Workflow', sk:['S17'], ch:25, mins:60, tier:2,
  brief:'You’ll build an assistant that can draft a purchase request but can never submit one. What you measure is how often it proposes the right action while being unable, by design, to take it.',
  deliverable:'A working three-step flow with separate draft and submit contracts, a human approval step with an audit record, and a measured proposal-accuracy figure over twenty requests.',
  steps:[
    'Write the tool contract for drafting and the one for submitting, as two separate contracts.',
    'Enforce the split on the server. The submit tool should not be in the model’s allowed list at all.',
    'Build classify → retrieve → draft, with the sequence fixed in code.',
    'Add the approval step, and record who approved what, and when.',
    'Run twenty realistic requests, and record how often the proposed action was correct.',
    'Test a malformed argument, an unauthorised request and a timeout. Each time, record what the user saw.'
  ],
  rubric:[
    {c:'The model cannot act, even if it asks', l:['The prompt asks it not to','Checked in code','Enforced on the server','Enforced, and tested with a deliberate attempt']},
    {c:'Approvals can be audited', l:['None','Logged','Logged with identity','Logged with identity, action and timestamp']},
    {c:'Proposal accuracy is measured', l:['An impression','A few examples','Twenty requests','Twenty requests, with the failures sorted into categories']}
  ],
  iterate:'In version 2, add a second approver for anything above a threshold, and measure how much latency that adds.' },

{ id:'E20', t:'Agent Versus Workflow', sk:['S17'], ch:26, mins:90, tier:3,
  brief:'You’ll build the agent, and then check whether it really beat the fixed pipeline it wants to replace. If your result is “the workflow won”, that is a real and respectable finding.',
  deliverable:'Both systems run over the same twenty tasks. For each, record tool-selection accuracy, call count, latency and cost. Finish with a one-paragraph recommendation that names the deciding metric.',
  steps:[
    'Draw the loop first: goal, decision, tool call, observation, updated context, then stop or continue. Include explicit error paths.',
    'Build it with exactly two tools, an allowed list, a maximum of three steps, a timeout, and a cannot-resolve exit.',
    'Run it on a task it cannot do, and confirm that it exits cleanly instead of going in circles.',
    'Run the same twenty tasks through the agent and through your chapter 25 workflow.',
    'Record four numbers for each: accuracy, calls, latency and cost.',
    'Write the recommendation, and put the numbers in it.'
  ],
  rubric:[
    {c:'The agent is bounded', l:['Unbounded','A step cap','A step cap and a timeout','A step cap, a timeout and a clean give-up path']},
    {c:'The comparison is fair', l:['Different tasks','Same tasks, different conditions','Same tasks and conditions','Same tasks, conditions and harness']},
    {c:'The recommendation follows the evidence', l:['Preference','Evidence mentioned','Evidence decides','Evidence decides, and the loser is named honestly']}
  ],
  iterate:'In version 2, add the ten cases where the workflow fails by design, and ask whether the agent earns its cost on those alone.' },

{ id:'E21', t:'The Tool Access Policy', sk:['S22'], ch:27, mins:45, tier:2,
  brief:'You’ll write this for an environment where “it seemed helpful” is not an acceptable reason for an action that was taken.',
  deliverable:'Every tool classified, an authorisation matrix of role against tool class, a trust-boundary diagram that names the enforcing component, and the audit record for an irreversible action.',
  steps:[
    'Classify every tool as read-only, reversible-write, irreversible-write, privileged or prohibited.',
    'For each class, state the authorisation it needs and whether a human must confirm.',
    'Build the matrix, with roles down the side and tool classes across the top.',
    'Draw the host, client, server and resource. Mark where consent, authentication, policy and audit happen.',
    'Name the component that enforces authorisation, and confirm that it is not the model.',
    'Write down what the audit record contains for an irreversible action.'
  ],
  rubric:[
    {c:'Every tool has exactly one class', l:['Unclassified','Some classified','All classified','All classified, and the hard cases were argued out']},
    {c:'Irreversible actions are gated', l:['Not gated','Gated in the interface','Gated on the server','Gated on the server, and tested']},
    {c:'The enforcer is named', l:['Unclear','Implied','Named','Named, and it is not the model']}
  ],
  iterate:'In version 2, add what changes when a tool is reached over a standard protocol instead of being called directly. The answer should be that the authorisation doesn’t change at all.' },

{ id:'E22', t:'The Voice Assistant Specification', sk:['S20'], ch:28, mins:60, tier:2,
  brief:'The technology is the easy half. You’ll specify the other half, the part that gets a system stopped in review.',
  deliverable:'A specification that covers the privacy boundary, transcript retention and deletion, speaker attribution and what it does when unsure, task extraction, confirmation, and evaluation metrics including attribution accuracy.',
  steps:[
    'Extract one real PDF, and list three things that plain text lost.',
    'Draw the voice pipeline, and mark the steps where the user has to wait.',
    'Define the privacy boundary: whose audio, captured where, and with what notice.',
    'Set the transcript retention and the deletion path.',
    'Specify attribution, and what happens when it is uncertain.',
    'Write five questions that need text, table or layout evidence. For each one, say which component supplies the ground truth.'
  ],
  rubric:[
    {c:'A person can be forgotten', l:['No path','A manual request','A defined path','A path tested end to end']},
    {c:'No action without confirmation', l:['Acts directly','Confirms sometimes','Always confirms','Always confirms, and shows its uncertainty']},
    {c:'Evaluation is aware of each modality', l:['One answer key','Text plus one other','All modalities','All modalities, each with its own source of truth']}
  ],
  iterate:'In version 2, add overlapping speakers and a meeting in mixed languages, and measure attribution again.' },

{ id:'E23', t:'The Release Gate', sk:['S11'], ch:29, mins:75, tier:3,
  brief:'This is the artifact that makes every other measurement matter. Without it, evaluation is a report that nobody has to act on.',
  deliverable:'A versioned evaluation set of thirty cases, scoring at three levels, a measured judge-versus-human disagreement figure, and a gate with thresholds, a regression tolerance and a rollback trigger.',
  steps:[
    'Write thirty cases that cover the happy path, paraphrases, ambiguity, no-answer, multilingual input, adversarial input, long context, tool use and policy edges.',
    'Put the set in the repository, and version it.',
    'Score one feature at three levels: retrieval, component and end-to-end.',
    'Have a model judge twenty examples, label the same twenty yourself, and measure the disagreement.',
    'Set the thresholds for quality, safety, latency, cost and regression tolerance.',
    'Define the rollback trigger and who is allowed to pull it. Then run the gate, and record today’s verdict.'
  ],
  rubric:[
    {c:'The set survives a change', l:['Ad hoc','Saved','Versioned','Versioned, and re-run after a real change']},
    {c:'Scoring has layers', l:['One number','Two levels','Three levels','Three levels, and a disagreement between them was investigated']},
    {c:'The gate can really stop a release', l:['Advisory only','Thresholds set','Thresholds and an owner','Thresholds, an owner, and it has blocked something']}
  ],
  iterate:'In version 2, add the cases that came out of your first production incident. That is where the most valuable tests come from.' },

{ id:'E24', t:'The Six-Panel Dashboard', sk:['S10'], ch:30, mins:60, tier:2,
  brief:'The six panels are quality, safety, latency, cost, traffic and failures. The discipline is to name the source for every panel. A panel with no source is just a wish.',
  deliverable:'A dashboard specification with six panels. Each panel names its data source, an investigation threshold and a rollback threshold. Add one complete trace record.',
  steps:[
    'Trace one request by hand, and time every stage.',
    'Write the trace record: request id, model, prompt version, retrieved chunk ids, tool calls, latency by step, tokens, answer and evaluation result.',
    'Specify each of the six panels, and name its source.',
    'Break latency down by stage, instead of reporting one number.',
    'Work out the cost of the same task under two designs, and show both on the panel.',
    'For every panel, write the threshold that triggers an investigation and the one that triggers a rollback.'
  ],
  rubric:[
    {c:'Traces answer “why was this wrong?”', l:['Input and output only','Plus latency','Plus retrieval ids','Plus prompt and model version']},
    {c:'Every panel has a source', l:['None','Some','All','All, and each has been queried once']},
    {c:'Thresholds can be acted on', l:['None','Investigate only','Both','Both, and someone could act on them at 2am without calling you']}
  ],
  iterate:'In version 2, add evaluation drift. Score the same test set every week, so you can see quality move even when nothing was deployed.' },

{ id:'E25', t:'The AI Risk Register', sk:['S21'], ch:31, mins:75, tier:3,
  brief:'Every row should end in a test. A register whose rows end only in a control is a list of good intentions.',
  deliverable:'A register with the asset, threat, impact, likelihood, control, owner, test and residual risk for each row, plus a go/no-go checklist for a customer-facing agent.',
  steps:[
    'Plant a malicious instruction in a document your system retrieves. Confirm that it ranks in the top k, and test whether the system follows it.',
    'For each tool in your agent, define the minimum permission it needs, remove the rest, and re-run the task.',
    'List the assets: documents, credentials, tools, user data and traces.',
    'For each asset, record only the threats you have actually reproduced.',
    'Name the control, the owner and the test. Then run the test.',
    'Record the residual risk honestly, and write the go/no-go checklist.'
  ],
  rubric:[
    {c:'Threats are reproduced, not just cited', l:['Taken from a list','Some reproduced','All reproduced','All reproduced, with the evidence kept']},
    {c:'Least privilege is demonstrated', l:['Asserted','Documented','Permissions removed','Removed, re-run, and the breakage documented']},
    {c:'Residual risk is stated', l:['Implied','Mentioned','Stated','Stated, and accepted by a named owner']}
  ],
  iterate:'In version 2, re-run every test after the next model change. A control that held on one model is not necessarily a control that holds on the next.' },

{ id:'E26', t:'The AI PRD', sk:['S28'], ch:32, mins:90, tier:3,
  brief:'You’ll write two pages that an engineer can build from and that a leader can agree to with open eyes.',
  deliverable:'A PRD that covers the problem, the non-AI baseline, scope and non-goals, context and tools, failure modes and the human role. It also covers the evaluation plan, quality bars, safety limits, response-time and cost goals, rollout, instrumentation, rollback and an owner.',
  steps:[
    'Take one traditional acceptance criterion and turn it into a metric, a test set and a tolerance.',
    'State the user problem, and the non-AI baseline that the feature has to beat.',
    'Write the non-goals down explicitly.',
    'List the failure modes you have seen yourself in this course, not ones you only read about.',
    'Design the three interface states: confident with citations, ambiguous and needing clarification, and an action that needs confirmation.',
    'Write the five-line evaluation plan and the one-line rollback trigger, and name the owner.'
  ],
  rubric:[
    {c:'Criteria can be tested', l:['Promises in prose','Some numbers','All numeric','Numeric, against a named test set']},
    {c:'Failure is designed for, not discovered', l:['Not covered','Listed','Designed','Designed, with the interface state drawn']},
    {c:'A leader can see the trade-off', l:['Hidden','Implied','Stated','Stated, with what is being accepted spelled out']}
  ],
  iterate:'Write version 2 after the feature ships. Compare what you promised against what the gate actually measured.' },

{ id:'E27', t:'The Technical Decision Pack', sk:['S30'], ch:33, mins:90, tier:4,
  brief:'You’ll build a ten-slide pack, starting from memory. The parts you can’t produce from memory are the parts you don’t understand yet.',
  deliverable:'A ten-slide pack covering the problem, baseline, architecture, alternatives, evaluation, security, cost, rollout, risks and decision. Add a weighted provider scorecard that includes exit cost.',
  steps:[
    'Before you look anything up, write from memory what it would take to move your prototype to production.',
    'Estimate the p50 and p95 for each stage. Then measure them with your traces, and compare.',
    'Draw the proposed architecture on one slide.',
    'Show two alternatives you rejected, each with the reason.',
    'Score three providers on quality, data controls, latency, cost, region, tooling, interoperability, support and exit cost.',
    'Model three shocks: a provider outage, ten times the traffic, and a doubling of the token price.',
    'End with the decision and its owner.'
  ],
  rubric:[
    {c:'Alternatives were genuinely considered', l:['Straw men','Named','Reasoned','Reasoned, and one was nearly chosen']},
    {c:'Cost is shown per task and at volume', l:['Not costed','A monthly total','Per task','Per task and at the volume you expect']},
    {c:'The exit is planned', l:['Not considered','Mentioned','Scored','Scored, with the evaluation set named as the exit tool']}
  ],
  iterate:'In version 2, have someone else present the pack, using only your slides. Whatever they can’t explain is what the pack is missing.' },

{ id:'E28', t:'The Capstone Findings Report', sk:['S30'], ch:34, mins:120, tier:4,
  brief:'This is the one artifact that carries everything in this course. Keep it rough and factual. A findings document that reads like a brochure isn’t one.',
  deliverable:'A running system plus an evidence pack. The pack holds the repository and README, an architecture diagram, 30–50 evaluation cases with results, security attack results and trace samples. It also holds cost and response time, the PRD, the risk register, the vendor scorecard, the rollout and rollback plan, and the findings page.',
  steps:[
    'Create the repository, the issue list, the evaluation dataset and the smallest vertical slice that works end to end. Don’t start with slides.',
    'Grow it into one coherent system. It needs permission-aware retrieval, structured outputs, two tools, a bounded agent step, one non-text input, evaluation, tracing and security controls.',
    'Reproduce at least ten classes of failure. Include a poisoned document, an unauthorised tool request, a stale permission and a model swap.',
    'Measure retrieval, grounded answers, tools, schema, safety, latency and cost per success, both before and after your fixes.',
    'Write ten assumptions before the demo, and mark each one true, false or unproven.',
    'Write the findings page: what broke, the evidence, the root cause, the fix, the residual risk, the metric before and after, and what you deliberately did not solve.',
    'Prepare a five-minute explanation for executives and a twenty-minute technical defence.'
  ],
  rubric:[
    {c:'Failures were found, not avoided', l:['Happy path only','One or two','At least ten classes','Ten classes, three of them found by you']},
    {c:'Improvements are quantified', l:['Claimed','One measured','Three measured','Three measured, with the test set unchanged between runs']},
    {c:'It can be defended without a framework', l:['A framework explains it','Partly','Explained from first principles','Explained from first principles, including what you chose not to build']}
  ],
  iterate:'There is no version 2. Take a day off, then start your next system from this findings page, not from a new syllabus.' }

];

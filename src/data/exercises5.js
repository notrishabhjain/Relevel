/* Part V exercises — the v4.1 workbook's homework for chapters 8–21, turned
   into the portal's exercise shape. Each one produces an artifact the
   capstone in chapter 34 expects to find. English-only for now, by request. */
window.EXERCISES5 = [

{ id:'E15', t:'The Experiment Harness', sk:['S30'], ch:21, mins:60, tier:1,
  brief:'A recorder that sends one prompt and saves everything about the run. Every comparison later in this track depends on runs being recorded the same way, and this is the thing that makes that true.',
  deliverable:'A Git repository containing a command-line tool that records a request and its response as JSON, three unit tests, and a README that works from a clean machine.',
  steps:[
    'Write a utility that reads JSON from a file and filters rows by one field.',
    'Add three unit tests: the happy path, a missing field, and empty input.',
    'Wrap it so one prompt can be sent and the whole run saved: id, timestamp, model, prompt, response, latency, usage, error.',
    'Add replay — re-send a saved request and write a second record.',
    'Break something deliberately and confirm a record is still written, with the error in it.',
    'Commit it, and write the README as if for someone who has never seen the project.'
  ],
  rubric:[
    {c:'A stranger could run it', l:['Runs on your machine only','README exists','README is accurate','Clean-machine run verified']},
    {c:'Failures are recorded, not lost', l:['Crashes on error','Error printed','Error saved in the record','Error class recorded and testable']},
    {c:'Tests cover a failure, not just success', l:['No tests','Happy path only','Happy path plus one','All three, and they fail when they should']}
  ],
  iterate:'Version 2 adds token usage and cost per run. Version 3 adds the trace fields from chapter 30 so the same records feed your dashboard.' },

{ id:'E16', t:'The Model Selection Card', sk:['S27'], ch:22, mins:75, tier:2,
  brief:'One page that recommends a model and survives the question "measured how?". The card is short; the benchmark behind it is the work.',
  deliverable:'A one-page card: task, quality bar, data sensitivity, latency SLO, cost ceiling, shortlist with measured results, fallback, and the dataset it will be re-checked against.',
  steps:[
    'Write ten cases: factual, reasoning, extraction, multilingual, and refusal.',
    'Predict the winner on quality, speed and cost before running anything.',
    'Run all ten against two models using your harness. Record latency, tokens, correctness and the kind of wrong.',
    'Change exactly one variable and re-run, so you can attribute the difference.',
    'Write the card. Every claim must point at a recorded run.',
    'Name the fallback, and actually try it once.'
  ],
  rubric:[
    {c:'The recommendation is evidence-led', l:['Reputation','One example','Ten cases','Ten cases plus a single-variable comparison']},
    {c:'The binding constraint is named', l:['Not stated','Implied','Stated','Stated with the number that binds it']},
    {c:'The fallback is real', l:['None','Named','Named and specified','Tried at least once']}
  ],
  iterate:'Version 2 re-runs the same ten cases three months later. The interesting output is what moved without you changing anything.' },

{ id:'E17', t:'The Context Budget', sk:['S18'], ch:23, mins:45, tier:2,
  brief:'What goes into the envelope, what it costs, and what falls out first under pressure. This turns an argument about context windows into a table.',
  deliverable:'A budget listing every context component with measured token counts, a ceiling, an eviction order with its reason, an output schema, and a memory design naming three stores.',
  steps:[
    'List every component that enters the context: instructions, examples, retrieved evidence, history, tool results, user data.',
    'Measure each one on a real request. Do not estimate.',
    'Set the ceiling and show the headroom.',
    'Write the eviction order and, beside it, the reason.',
    'Write the schema the output must match, and what happens when it does not.',
    'Design conversation history, user profile and task state as three separate stores, each with storage, retention, access and a deletion path.'
  ],
  rubric:[
    {c:'Numbers are measured', l:['Estimated','Partly measured','Measured','Measured and dated']},
    {c:'Eviction is reasoned', l:['No order','Order only','Order with reason','Order tested under real pressure']},
    {c:'Deletion is possible', l:['No path','Path for one store','Path for all three','Path exercised end to end']}
  ],
  iterate:'Version 2 adds what happens when a single retrieved document is larger than the whole budget.' },

{ id:'E18', t:'The Production Retrieval Architecture', sk:['S09','S30'], ch:24, mins:90, tier:3,
  brief:'One page an engineer could implement and a security reviewer could attack. The single-page constraint is the exercise: if it does not fit, you have not decided enough.',
  deliverable:'A one-page architecture covering ingestion, storage, index, retrieval, rerank, generation, authentication, authorisation, evaluation, monitoring and rollback.',
  steps:[
    'Inventory three real documents: parser, sections, metadata, tables, language, identifiers, access label.',
    'Measure keyword, semantic and hybrid retrieval on your existing question set and record the rank of the correct chunk under each.',
    'Add a reranking stage, or record the measurement that justifies leaving it out.',
    'Draw the stages, and write a failure mode beside every arrow.',
    'Mark where the access check happens, and confirm it is on the retrieval path rather than in the interface.',
    'State the no-answer threshold, the versioning scheme, and the rollback procedure.'
  ],
  rubric:[
    {c:'Ingestion is treated as a quality decision', l:['Not covered','Mentioned','Inventoried','Inventoried with a named ceiling on what survives']},
    {c:'Hybrid claims are measured, not repeated', l:['Asserted','One example','Full question set','Full set with per-strategy ranks']},
    {c:'Deletion and permission change are handled', l:['Not considered','Noted','Designed','Designed with the exposure window stated']}
  ],
  iterate:'Version 2 adds multi-tenancy. Version 3 adds what happens when the embedding model version changes under you.' },

{ id:'E19', t:'The Approval Workflow', sk:['S17'], ch:25, mins:60, tier:2,
  brief:'An assistant that can draft a purchase request and can never submit one. The measured number is how often it proposes the right action while being structurally unable to take it.',
  deliverable:'A working three-step flow with separate draft and submit contracts, a human approval step with an audit record, and a measured proposal-accuracy figure over twenty requests.',
  steps:[
    'Write the tool contract for drafting and for submitting, separately.',
    'Enforce the split server-side: the submit tool is not in the model’s allowed list at all.',
    'Build classify → retrieve → draft, with the sequence fixed in code.',
    'Add the approval step, recording who approved what and when.',
    'Run twenty realistic requests and record how often the proposed action was correct.',
    'Test a malformed argument, an unauthorised request and a timeout, and record what the user saw each time.'
  ],
  rubric:[
    {c:'The model cannot act, even if it asks', l:['Prompt asks it not to','Checked in code','Enforced server-side','Enforced and tested with a deliberate attempt']},
    {c:'Approvals are auditable', l:['None','Logged','Logged with identity','Logged with identity, action and timestamp']},
    {c:'Proposal accuracy is measured', l:['Impression','A few examples','Twenty requests','Twenty requests with the failures categorised']}
  ],
  iterate:'Version 2 adds a second approver for anything above a threshold, and measures how much latency that adds.' },

{ id:'E20', t:'Agent Versus Workflow', sk:['S17'], ch:26, mins:90, tier:3,
  brief:'Build the agent, then prove whether it beat the fixed pipeline it wants to replace. A result of "the workflow won" is a real and respectable finding.',
  deliverable:'Both systems run over the same twenty tasks, with tool-selection accuracy, call count, latency and cost for each, and a one-paragraph recommendation naming the deciding metric.',
  steps:[
    'Draw the loop first: goal, decision, tool call, observation, updated context, stop or continue — with explicit error paths.',
    'Build it with exactly two tools, an allowed list, a maximum of three steps, a timeout, and a cannot-resolve exit.',
    'Run it on a task it cannot do and confirm it exits cleanly instead of circling.',
    'Run the same twenty tasks through the agent and through your chapter 25 workflow.',
    'Record four numbers for each: accuracy, calls, latency, cost.',
    'Write the recommendation, with the numbers in it.'
  ],
  rubric:[
    {c:'The agent is bounded', l:['Unbounded','Step cap','Step cap and timeout','Step cap, timeout and a clean give-up path']},
    {c:'The comparison is fair', l:['Different tasks','Same tasks, different conditions','Same tasks and conditions','Same tasks, conditions and harness']},
    {c:'The recommendation follows the evidence', l:['Preference','Evidence mentioned','Evidence decides','Evidence decides and the loser is named honestly']}
  ],
  iterate:'Version 2 adds the ten cases where the workflow fails by design, and asks whether the agent earns its cost on those alone.' },

{ id:'E21', t:'The Tool Access Policy', sk:['S22'], ch:27, mins:45, tier:2,
  brief:'Written for an environment where "it seemed helpful" is not an acceptable explanation for an action taken.',
  deliverable:'Every tool classified, an authorisation matrix of role against tool class, a trust-boundary diagram naming the enforcing component, and the audit record for an irreversible action.',
  steps:[
    'Classify every tool as read-only, reversible-write, irreversible-write, privileged or prohibited.',
    'For each class, state the authorisation required and whether a human must confirm.',
    'Build the matrix: roles down the side, tool classes across the top.',
    'Draw host, client, server and resource, and mark consent, authentication, policy and audit.',
    'Name the component that enforces authorisation, and confirm it is not the model.',
    'Write what the audit record contains for an irreversible action.'
  ],
  rubric:[
    {c:'Every tool has exactly one class', l:['Unclassified','Some classified','All classified','All classified, and the hard cases were argued']},
    {c:'Irreversible actions are gated', l:['Not gated','Gated in the interface','Gated server-side','Gated server-side and tested']},
    {c:'The enforcer is named', l:['Unclear','Implied','Named','Named, and it is not the model']}
  ],
  iterate:'Version 2 adds what changes when a tool is reached over a standard protocol rather than called directly. The answer should be: the authorisation, not at all.' },

{ id:'E22', t:'The Voice Assistant Specification', sk:['S20'], ch:28, mins:60, tier:2,
  brief:'The technology is the easy half. Specify the half that gets a system stopped in review.',
  deliverable:'A specification covering the privacy boundary, transcript retention and deletion, speaker attribution and its uncertainty behaviour, task extraction, confirmation, and evaluation metrics including attribution accuracy.',
  steps:[
    'Extract one real PDF and list three things plain text lost.',
    'Draw the voice pipeline and mark the steps the user waits through.',
    'Define the privacy boundary: whose audio, captured where, with what notice.',
    'Set transcript retention and the deletion path.',
    'Specify attribution, and what happens when it is uncertain.',
    'Write five questions requiring text, table or layout evidence, and say which component supplies ground truth for each.'
  ],
  rubric:[
    {c:'A person can be forgotten', l:['No path','Manual request','Defined path','Path exercised end to end']},
    {c:'No action without confirmation', l:['Acts directly','Confirms sometimes','Always confirms','Always confirms, and uncertainty is surfaced']},
    {c:'Evaluation is modality-aware', l:['One answer key','Text plus one','All modalities','All modalities, each with its own source of truth']}
  ],
  iterate:'Version 2 adds overlapping speakers and a mixed-language meeting, and re-measures attribution.' },

{ id:'E23', t:'The Release Gate', sk:['S11'], ch:29, mins:75, tier:3,
  brief:'The artifact that makes every other measurement matter. Without it, evaluation is a report nobody is obliged to act on.',
  deliverable:'A versioned evaluation set of thirty cases, three-level scoring, a measured judge-versus-human disagreement figure, and a gate with thresholds, a regression tolerance and a rollback trigger.',
  steps:[
    'Write thirty cases: happy path, paraphrase, ambiguity, no-answer, multilingual, adversarial, long-context, tool-use and policy edges.',
    'Put the set in the repository, versioned.',
    'Score one feature at three levels: retrieval, component, end-to-end.',
    'Have a model judge twenty examples, label the same twenty yourself, and measure the disagreement.',
    'Set the thresholds: quality, safety, latency, cost, regression tolerance.',
    'Define the rollback trigger and who may pull it. Then run the gate and record today’s verdict.'
  ],
  rubric:[
    {c:'The set survives a change', l:['Ad hoc','Saved','Versioned','Versioned and re-run after a real change']},
    {c:'Scoring is layered', l:['One number','Two levels','Three levels','Three levels, and a disagreement between them was investigated']},
    {c:'The gate can actually stop a release', l:['Advisory','Thresholds set','Thresholds and owner','Thresholds, owner, and it has blocked something']}
  ],
  iterate:'Version 2 adds the cases produced by your first production incident. That is where the most valuable tests come from.' },

{ id:'E24', t:'The Six-Panel Dashboard', sk:['S10'], ch:30, mins:60, tier:2,
  brief:'Quality, safety, latency, cost, traffic, failures. The discipline is naming the source for every panel; a panel with no source is a wish.',
  deliverable:'A dashboard specification with six panels, each naming its data source, an investigation threshold and a rollback threshold, plus one complete trace record.',
  steps:[
    'Trace one request by hand and time every stage.',
    'Write the trace record: request id, model, prompt version, retrieved chunk ids, tool calls, latency by step, tokens, answer, evaluation result.',
    'Specify each of the six panels and name its source.',
    'Break latency down by stage rather than reporting one number.',
    'Cost the same task under two designs and put both on the panel.',
    'For every panel, write the threshold that triggers investigation and the one that triggers rollback.'
  ],
  rubric:[
    {c:'Traces answer "why was this wrong?"', l:['Input and output only','Plus latency','Plus retrieval ids','Plus prompt and model version']},
    {c:'Every panel has a source', l:['None','Some','All','All, and each has been queried once']},
    {c:'Thresholds are actionable', l:['None','Investigate only','Both','Both, and someone could act at 2am without calling you']}
  ],
  iterate:'Version 2 adds evaluation drift: the same test set scored weekly, so you can see quality move without a deploy.' },

{ id:'E25', t:'The AI Risk Register', sk:['S21'], ch:31, mins:75, tier:3,
  brief:'Every row ends in a test. A register whose rows end in a control is a list of intentions.',
  deliverable:'A register with asset, threat, impact, likelihood, control, owner, test and residual risk for each row, plus a go/no-go checklist for a customer-facing agent.',
  steps:[
    'Plant a malicious instruction in a document your system retrieves, confirm it ranks in the top k, and test whether the system follows it.',
    'For each tool in your agent, define the minimum permission, remove the rest, and re-run the task.',
    'List the assets: documents, credentials, tools, user data, traces.',
    'For each, record only threats you have actually reproduced.',
    'Name the control, the owner, and the test — then run the test.',
    'Record the residual risk honestly, and write the go/no-go checklist.'
  ],
  rubric:[
    {c:'Threats are reproduced, not cited', l:['From a list','Some reproduced','All reproduced','All reproduced with evidence kept']},
    {c:'Least privilege is demonstrated', l:['Asserted','Documented','Permissions removed','Removed, re-run, and the breakage documented']},
    {c:'Residual risk is stated', l:['Implied','Mentioned','Stated','Stated and accepted by a named owner']}
  ],
  iterate:'Version 2 re-runs every test after the next model change, because a control that held on one model is not a control that holds.' },

{ id:'E26', t:'The AI PRD', sk:['S28'], ch:32, mins:90, tier:3,
  brief:'Two pages an engineer can build from and a leader can agree to deliberately.',
  deliverable:'A PRD with problem, non-AI baseline, scope and non-goals, context and tools, failure modes, the human role, evaluation plan, quality bars, safety constraints, latency and cost goals, rollout, instrumentation, rollback and an owner.',
  steps:[
    'Convert one traditional acceptance criterion into a metric, a test set and a tolerance.',
    'State the user problem and the non-AI baseline it has to beat.',
    'Write the non-goals down explicitly.',
    'List the failure modes you have observed yourself in this course, not ones you read about.',
    'Design the three interface states: confident with citations, ambiguous needing clarification, action needing confirmation.',
    'Write the five-line evaluation plan and the one-line rollback trigger, and name the owner.'
  ],
  rubric:[
    {c:'Criteria are testable', l:['Prose promises','Some numbers','All numeric','Numeric against a named test set']},
    {c:'Failure is designed, not discovered', l:['Not covered','Listed','Designed','Designed, with the interface state drawn']},
    {c:'The trade-off is visible to a leader', l:['Hidden','Implied','Stated','Stated, with what is being accepted spelled out']}
  ],
  iterate:'Version 2 is written after the feature ships, comparing what you promised against what the gate actually measured.' },

{ id:'E27', t:'The Technical Decision Pack', sk:['S30'], ch:33, mins:90, tier:4,
  brief:'Ten slides, built from memory first. The parts you cannot produce from memory are the parts you do not yet understand.',
  deliverable:'A ten-slide pack: problem, baseline, architecture, alternatives, evaluation, security, cost, rollout, risks, decision — plus a weighted provider scorecard including exit cost.',
  steps:[
    'Write the production delta for your prototype from memory before looking anything up.',
    'Estimate p50 and p95 per stage, then measure with your traces and compare.',
    'Draw the proposed architecture on one slide.',
    'Show two alternatives you rejected, each with the reason.',
    'Score three providers across quality, data controls, latency, cost, region, tooling, interoperability, support and exit cost.',
    'Model three shocks: a provider outage, ten times the traffic, and a doubling of token price.',
    'End with the decision and its owner.'
  ],
  rubric:[
    {c:'Alternatives were genuinely considered', l:['Straw men','Named','Reasoned','Reasoned, and one was nearly chosen']},
    {c:'Cost is per task and at volume', l:['Not costed','Monthly total','Per task','Per task and at expected volume']},
    {c:'Exit is planned', l:['Not considered','Mentioned','Scored','Scored, with the evaluation set named as the exit tool']}
  ],
  iterate:'Version 2 is presented by someone else from your slides alone. Whatever they cannot explain is what the pack is missing.' },

{ id:'E28', t:'The Capstone Findings Report', sk:['S30'], ch:34, mins:120, tier:4,
  brief:'The single artifact that carries everything in this course. Keep it rough and factual — a findings document that reads like a brochure is not one.',
  deliverable:'A running system plus an evidence pack: repository and README, architecture diagram, 30–50 evaluation cases with results, security attack results, trace samples, cost and latency, PRD, risk register, vendor scorecard, rollout and rollback plan, and the findings page.',
  steps:[
    'Create the repository, the issue list, the evaluation dataset and the smallest vertical slice that works end to end. Do not start with slides.',
    'Expand it into one coherent system: permission-aware retrieval, structured outputs, two tools, a bounded agent step, one non-text input, evaluation, tracing and security controls.',
    'Reproduce at least ten failure classes, including a poisoned document, an unauthorised tool request, a stale permission and a model swap.',
    'Measure retrieval, grounded answers, tools, schema, safety, latency and cost per success — before and after your fixes.',
    'Write ten assumptions before the demo and mark each true, false or unproven.',
    'Write the findings page: what broke, evidence, root cause, fix, residual risk, metric before and after, and what you deliberately did not solve.',
    'Prepare a five-minute executive explanation and a twenty-minute technical defence.'
  ],
  rubric:[
    {c:'Failures were found, not avoided', l:['Happy path only','One or two','At least ten classes','Ten classes, three of them self-discovered']},
    {c:'Improvements are quantified', l:['Claimed','One measured','Three measured','Three measured, with the test set unchanged between runs']},
    {c:'It can be defended without a framework', l:['Framework explains it','Partly','Explained from first principles','Explained from first principles, including what you chose not to build']}
  ],
  iterate:'There is no version 2. Take a day, then start the next system from this findings page rather than from a new syllabus.' }

];

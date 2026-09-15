/* Question bank for Part V — the applied track, chapters 21–34.

   These are the workbook's "Check Yourself" questions turned into scored
   checkpoints, plus a few that only work once you have run the chapter's
   lab. They reuse the existing skills rather than inventing new ones: the
   competencies did not change in v4.1, the depth did.

   The third field is difficulty (1–3), not a chapter number — a chapter
   claims its questions through the ['q', ...] blocks in its own story.
   English-only for now, by request. */
window.ITEMS5 = [

['I401','S30',2,'multi',
 'Your assistant returns a confident answer built on a field the upstream API stopped sending last week. Nothing errored. Which of these would have caught it?',
 ['Validating the response against a schema before use',
  'Logging the raw response alongside the parsed one',
  'A unit test that asserts on the missing-field case',
  'Raising the model temperature',
  'A contract check that fails loudly instead of substituting a blank'],
 [0,1,2,4],
 'Every option except temperature is a contract discipline, and this is the characteristic AI failure: nothing threw, so nothing alerted, and the answer was assembled on top of a hole. Temperature changes how the sentence is phrased, not whether the data behind it exists.'],

['I402','S27',3,'judge',
 'A stakeholder forwards you a leaderboard and asks why you are not using the model at the top of it. Give the two-sentence reply you would actually send.',
 null,
 'A leaderboard is a result on somebody else’s test set, so it predicts our task only by coincidence: the question is how that model scores on our ten cases, at our latency budget and our cost per task. I can run that this week — and if it wins on the constraint that actually binds us, we switch.',
 'The reply has to do two things: refuse the substitution of reputation for evidence, and offer the cheap measurement that settles it. A reply that only refuses reads as obstruction, which is how these conversations get lost even when the reasoning is right.'],

['I403','S18',2,'mcq',
 'Your context budget is 8,000 tokens and today’s request needs 9,500. Which component should almost always be evicted first?',
 ['The system instructions',
  'The retrieved evidence',
  'The conversation history',
  'The output schema'],
 2,
 'History is the only one whose loss degrades the answer gradually rather than breaking it. Dropping instructions changes the behaviour, dropping evidence returns you to a guessing machine, and dropping the schema breaks whatever parses the output. Eviction order is a design decision, and this is the usual one.'],

['I404','S09',3,'mcq',
 'A document is deleted from the source system at 10am. Your index rebuilds nightly. What is the honest description of the state between those two points?',
 ['The system is briefly out of date, which is normal',
  'The system will quote a document that no longer exists, and can cite it',
  'Retrieval will score the deleted document lower automatically',
  'Nothing happens until someone asks about that document'],
 1,
 'The chunks are still in the index with their provenance intact, so the assistant can retrieve, quote and cite a document that has been withdrawn — with a citation that looks perfectly legitimate. Calling that "briefly out of date" is how deletion propagation stops being designed. The window is a decision; make it deliberately.'],

['I405','S17',2,'multi',
 'Which of these belong in a tool contract before any model is allowed to call it?',
 ['Constrained parameters rather than free text',
  'Server-side permission enforcement',
  'An explicit statement of side effects',
  'A truthful description, because the model reads it',
  'Instructions in the system prompt asking the model to be careful'],
 [0,1,2,3],
 'The first four are properties of the contract and are enforced whatever the model does. The last is a request, and chapter 2 already proved that requests bend under pressure. Asking the model to be careful is not a control.'],

['I406','S17',2,'mcq',
 'Your agent solves 17 of 20 tasks. The deterministic workflow it replaced solves 17 of 20, at a third of the cost and half the latency. What ships?',
 ['The agent, because it will improve as models improve',
  'The workflow, because the autonomy bought nothing measurable',
  'The agent, because it handles cases the workflow cannot',
  'Neither — the sample is too small to decide'],
 1,
 'Autonomy has to earn its risk, its cost and its latency on a metric you care about. Equal quality at three times the price is a clear result, and "it will get better" is a prediction about a future model, not evidence about this one. Complexity is a budget.'],

['I407','S22',3,'mcq',
 'A protocol standardises how your assistant discovers and invokes a <code>delete_record</code> tool. What has that made safer?',
 ['The tool, because the protocol defines error semantics',
  'The call, because arguments are now schema-checked',
  'Nothing about whether the call should have been allowed',
  'The audit trail, because the protocol records invocations'],
 2,
 'A standard carries the call; it does not decide authorisation. Schema checking and error semantics are real benefits and neither one asks whether this requester may delete this record. That question belongs to a component you have to build, and it is never the model.'],

['I408','S20',1,'multi',
 'Plain-text extraction of a real PDF. Which of these are routinely lost?',
 ['The structure of a table',
  'Meaning carried by position, such as a heading over a column',
  'Anything that was inside an image',
  'The words in the body paragraphs'],
 [0,1,2],
 'Body text usually survives; the other three are flattened or dropped entirely. That is why a table question cannot be graded against a text extraction — the ground truth for that question has to come from whatever can actually read a table.'],

['I409','S11',3,'mcq',
 'End-to-end answer quality scores 0.88. Retrieval recall scores 0.41. What is the most likely explanation?',
 ['The evaluation set is too easy',
  'The model is answering well from its own knowledge rather than the evidence',
  'The retriever is fine and the metric is miscalibrated',
  'Groundedness and recall are not comparable, so nothing follows'],
 1,
 'A fluent model covers for missing evidence often enough to look good end to end. That is the most dangerous state a retrieval product can be in, because the demo is excellent and the system is guessing — and only a layered score reveals it. One number cannot.'],

['I410','S10',2,'multi',
 'An answer was wrong on Tuesday. The code has not changed. Which trace fields let you find out why?',
 ['The prompt version in effect for that request',
  'The ids of the chunks that were retrieved',
  'The model and model version that served it',
  'The total latency for the request'],
 [0,1,2],
 'Prompt version, retrieved chunk ids and model version are the three things that change without a deploy, and they are the three people leave out of a trace. Latency tells you about speed, not about correctness — useful, but not for this question.'],

['I411','S21',3,'judge',
 'A colleague says injection is not a concern because the corpus contains only internal documents that your own staff wrote. Answer them.',
 null,
 'Retrieved content is untrusted input regardless of who wrote it: an internal document can be edited by anyone with write access, can be uploaded by a supplier, or can quote an external source verbatim — and the model cannot tell an instruction from data in any of those cases. The control is the instruction boundary the system enforces when it assembles the context, not the provenance of the file.',
 'The reply has to move the argument off ownership and onto the boundary. "Our own documents" is a statement about who can be blamed, not about whether the text can carry instructions.'],

['I412','S28',1,'mcq',
 'Which of these is an acceptance criterion an engineer can actually build against?',
 ['The assistant always returns the correct document',
  'The assistant returns the correct document in almost all cases',
  'On the approved 200-case set, Recall@5 ≥ 0.90 and no-answer precision ≥ 0.98',
  'The assistant performs at least as well as the current manual process'],
 2,
 'Only the third names a metric, a test set and a tolerance. The first promises something probabilistic systems cannot deliver, the second cannot be tested, and the fourth is a real goal but not yet a criterion — it has no measurement attached.'],

['I413','S30',2,'multi',
 'Your provider announces a price increase on ninety days’ notice. Which of these make the switch tractable?',
 ['An evaluation set you can re-run against a new provider',
  'A provider scorecard that already included exit cost',
  'Prompts and configuration kept under version control',
  'A strong preference among the team for the current provider'],
 [0,1,2],
 'The first three are the exit plan, whether or not anyone called it that. An evaluation set is the thing that turns "can we switch?" from a debate into a week of work — which is why the usual finding is that the exit plan and the evaluation set are the same artifact.'],

['I414','S30',1,'mcq',
 'What makes a capstone credible in a design review?',
 ['A working demo on the happy path',
  'A framework choice that matches what the team already uses',
  'Failures you found yourself, with before-and-after numbers and stated residual risk',
  'Coverage of every topic in the book'],
 2,
 'Anyone can demonstrate the happy path. The evidence that you understand a system is that you know where it breaks, can show the measurement that proves you fixed some of it, and can say plainly what you did not solve.']

];

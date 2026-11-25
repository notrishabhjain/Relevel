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
 'Your assistant gives a sure-sounding answer. It uses a field (one labelled box of data) that the upstream API (the service you get data from) stopped sending last week. No error showed. Which of these would have caught it?',
 ['Checking the response against a schema (a form with fixed boxes) before using it',
  'Logging the raw response alongside the parsed one',
  'A unit test that checks the missing-field case',
  'Raising the model temperature (more adventurous word choice)',
  'A contract check that fails loudly, not one that quietly fills in a blank'],
 [0,1,2,4],
 'Every option except temperature holds the data to its contract (the promise about what data will arrive). This is a classic AI failure. No error was thrown, so no alert rang. The answer was built on a hole. Temperature only changes how a sentence is worded. It does not check that the data behind it exists.'],

['I402','S27',3,'judge',
 'A stakeholder (someone who cares about the result) sends you a leaderboard (a ranking of models). They ask why you are not using the top model. Write the two-sentence reply you would really send.',
 null,
 'A leaderboard is a score on somebody else\'s test set (their list of questions). It only matches our task by luck. The real question is how that model scores on our ten cases, within our latency budget (how long we can wait) and our cost per task. I can run that this week. If it wins on the limit that matters most to us, we switch.',
 'A good reply does two things. It says no to a famous name without proof, and it offers a cheap test that settles the question. A reply that only says no sounds like blocking. That is how these talks get lost, even when your reasoning is right.'],

['I403','S18',2,'mcq',
 'Your context budget (how much fits on the model\'s desk) is 8,000 tokens. Today\'s request needs 9,500. Which part should almost always be dropped first?',
 ['The system instructions',
  'The retrieved evidence',
  'The conversation history',
  'The output schema'],
 2,
 'Only with history does losing it make the answer a little worse, instead of breaking it. Drop the instructions and the behaviour changes. Drop the evidence and you are back to a guessing machine. Drop the schema and whatever reads the output breaks. The order of dropping is a design choice, and this is the usual one.'],

['I404','S09',3,'mcq',
 'A document is deleted from the source system at 10am. Your index (the card catalogue of your chunks) rebuilds every night. What is the honest description of the time in between?',
 ['The system is briefly out of date, which is normal',
  'The system will quote a document that no longer exists, and can cite it',
  'Retrieval will automatically score the deleted document lower',
  'Nothing happens until someone asks about that document'],
 1,
 'The chunks (index cards cut from the document) are still in the index with their source details. So the assistant can find, quote and cite a document that was withdrawn, and the citation looks fully real. Calling this "briefly out of date" is how teams stop planning for deletion. That gap is a choice, so make it on purpose.'],

['I405','S17',2,'multi',
 'Which of these belong in a tool contract (the rules for a tool) before any model may call the tool?',
 ['Limited choices for parameters (the inputs), not free text',
  'Permissions enforced on the server (the machine behind the tool)',
  'A clear statement of side effects',
  'A truthful description, because the model reads it',
  'An instruction in the system prompt asking the model to be careful'],
 [0,1,2,3],
 'The first four are part of the contract. They hold whatever the model does. The last one is only a request, and chapter 2 showed that requests bend under pressure. Asking the model to be careful is not a control.'],

['I406','S17',2,'mcq',
 'Your agent solves 17 of 20 tasks. The fixed workflow it replaced also solves 17 of 20. The workflow costs a third as much and has half the delay. What do you ship?',
 ['The agent, because it will get better as models get better',
  'The workflow, because the extra autonomy bought nothing you can measure',
  'The agent, because it handles cases the workflow cannot',
  'Neither, because the sample is too small to decide'],
 1,
 'An agent (a helper that uses tools in a loop) must earn its extra risk, cost and delay on a metric you care about. Same quality at three times the price is a clear result. "It will get better" is a guess about a future model. It is not proof about this one. Complexity is a budget. Spend it only when it buys something.'],

['I407','S22',3,'mcq',
 'A protocol (a shared set of rules) standardises how your assistant finds and calls a <code>delete_record</code> tool. What has that made safer?',
 ['The tool, because the protocol defines how errors work',
  'The call, because arguments are now checked against a schema',
  'Nothing about whether the call should have been allowed',
  'The audit trail, because the protocol records calls'],
 2,
 'A standard carries the call. It does not decide who may make it. Schema checks and error handling are real benefits. But neither asks if this requester may delete this record. You must build that part yourself. It is never the model\'s job.'],

['I408','S20',1,'multi',
 'You pull plain text out of a real PDF. Which of these are often lost?',
 ['The structure of a table',
  'Meaning carried by position, such as a heading above a column',
  'Anything that was inside an image',
  'The words in the body paragraphs'],
 [0,1,2],
 'Body text usually survives. The other three get flattened or dropped completely. So a question about a table cannot be graded against a text extraction. The right answer must come from something that can truly read a table.'],

['I409','S11',3,'mcq',
 'The end-to-end answer quality score is 0.88. The retrieval recall (how many right pages the search found) score is 0.41. What is the most likely reason?',
 ['The evaluation set (the answer-key questions) is too easy',
  'The model is answering well from its own knowledge, not from the evidence',
  'The retriever is fine and the metric is wrongly set',
  'Groundedness and recall cannot be compared, so nothing follows'],
 1,
 'A fluent model often hides missing evidence well enough to look good end to end. This is the most dangerous state for a retrieval product. The demo looks great while the system is guessing. Only a layered score shows it. One number cannot.'],

['I410','S10',2,'multi',
 'An answer was wrong on Tuesday, but the code has not changed. Which trace (the step-by-step record of one request) fields help you find out why?',
 ['The prompt version in use for that request',
  'The ids of the chunks that were retrieved',
  'The model and model version that served it',
  'The total latency for the request'],
 [0,1,2],
 'Prompt version, retrieved chunk ids and model version can change without a deploy. People leave all three out of a trace. Latency tells you about speed, not correctness. It is useful, but not for this question.'],

['I411','S21',3,'judge',
 'A colleague says injection (a hidden note that tells the model to ignore its rules) is not a worry. They say the corpus (your pile of documents) holds only internal documents written by your own staff. Answer them.',
 null,
 'Retrieved content is untrusted input, whoever wrote it. Anyone with write access can edit an internal document. A supplier can upload one. One can quote an outside source word for word. In each case the model cannot tell an instruction from data. The control is the instruction boundary your system enforces when it builds the context. It is not where the file came from.',
 'Move the argument from who owns the text to where the boundary is. "Our own documents" says who you can blame. It does not say if the text can carry instructions.'],

['I412','S28',1,'mcq',
 'Which of these is an acceptance criterion (a test that says "done") an engineer can really build against?',
 ['The assistant always returns the right document',
  'The assistant returns the right document in almost all cases',
  'On the approved 200-case set, Recall@5 ≥ 0.90 and no-answer precision ≥ 0.98',
  'The assistant does at least as well as the current manual process'],
 2,
 'Only the third names a metric, a test set and a tolerance. The first promises something that probabilistic systems cannot deliver. The second cannot be tested. The fourth is a real goal, but it is not a criterion yet, because no measurement is attached.'],

['I413','S30',2,'multi',
 'Your provider announces a price rise with ninety days\' notice. Which of these make switching manageable?',
 ['An evaluation set you can run again on a new provider',
  'A provider scorecard that already counted the cost of leaving',
  'Prompts and configuration kept under version control (a saved history of changes)',
  'The team strongly prefers the current provider'],
 [0,1,2],
 'The first three are your exit plan, whether or not anyone called it that. An evaluation set turns "can we switch?" from a debate into a week of work. In practice, the exit plan and the evaluation set often turn out to be the same thing.'],

['I414','S30',1,'mcq',
 'What makes a capstone (your final project) convincing in a design review?',
 ['A working demo of the happy path',
  'A framework choice that matches what the team already uses',
  'Failures you found yourself, with before-and-after numbers and the risk that is left',
  'Coverage of every topic in the book'],
 2,
 'Anyone can demo the happy path. You show you understand a system by knowing where it breaks. Show the measurement that proves you fixed part of it. Say plainly what you did not solve.']

];

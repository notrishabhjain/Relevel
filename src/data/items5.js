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
 'Your assistant gives a confident answer built on a field that the upstream API stopped sending last week. Nothing showed an error. Which of these would have caught it?',
 ['Validating the response against a schema before using it',
  'Logging the raw response alongside the parsed one',
  'A unit test that checks the missing-field case',
  'Raising the model temperature',
  'A contract check that fails loudly instead of quietly filling in a blank'],
 [0,1,2,4],
 'Every option except temperature is a way of holding the data to its contract. This is the classic AI failure: nothing threw an error, so nothing raised an alert, and the answer was built on top of a hole. Temperature changes how a sentence is phrased, not whether the data behind it exists.'],

['I402','S27',3,'judge',
 'A stakeholder forwards you a leaderboard and asks why you aren’t using the model at the top. Write the two-sentence reply you would actually send.',
 null,
 'A leaderboard is a result on somebody else’s test set, so it predicts our task only by luck: the real question is how that model scores on our ten cases, within our latency budget and our cost per task. I can run that this week, and if it wins on the limit that actually binds us, we switch.',
 'A good reply does two things. It declines to swap reputation for evidence, and it offers a cheap test that settles the question. A reply that only says no sounds like obstruction, and that’s how these conversations get lost even when the reasoning is right.'],

['I403','S18',2,'mcq',
 'Your context budget is 8,000 tokens and today’s request needs 9,500. Which part should almost always be dropped first?',
 ['The system instructions',
  'The retrieved evidence',
  'The conversation history',
  'The output schema'],
 2,
 'History is the only one where losing it makes the answer a little worse instead of breaking it. Drop the instructions and the behaviour changes. Drop the evidence and you’re back to a guessing machine. Drop the schema and whatever parses the output breaks. The order of dropping is a design decision, and this is the usual one.'],

['I404','S09',3,'mcq',
 'A document is deleted from the source system at 10am. Your index rebuilds every night. What’s the honest description of the time in between?',
 ['The system is briefly out of date, which is normal',
  'The system will quote a document that no longer exists, and can cite it',
  'Retrieval will automatically score the deleted document lower',
  'Nothing happens until someone asks about that document'],
 1,
 'The chunks are still in the index with their source details, so the assistant can find, quote and cite a document that has been withdrawn, and the citation looks perfectly real. Calling that “briefly out of date” is how teams stop designing for deletion. That gap is a decision, so make it on purpose.'],

['I405','S17',2,'multi',
 'Which of these belong in a tool contract before any model is allowed to call the tool?',
 ['Limited choices for parameters, instead of free text',
  'Permissions enforced on the server',
  'A clear statement of side effects',
  'A truthful description, because the model reads it',
  'An instruction in the system prompt asking the model to be careful'],
 [0,1,2,3],
 'The first four are part of the contract, and they hold whatever the model does. The last one is only a request, and chapter 2 already showed that requests bend under pressure. Asking the model to be careful is not a control.'],

['I406','S17',2,'mcq',
 'Your agent solves 17 of 20 tasks. The fixed workflow it replaced also solves 17 of 20, at a third of the cost and half the delay. What do you ship?',
 ['The agent, because it will improve as models improve',
  'The workflow, because the extra autonomy bought nothing you can measure',
  'The agent, because it handles cases the workflow can’t',
  'Neither, because the sample is too small to decide'],
 1,
 'Autonomy has to earn its risk, cost and delay on a metric you care about. Equal quality at three times the price is a clear result. “It will get better” is a guess about a future model, not evidence about this one. Complexity is a budget, and you should spend it only when it buys something.'],

['I407','S22',3,'mcq',
 'A protocol standardises how your assistant finds and calls a <code>delete_record</code> tool. What has that made safer?',
 ['The tool, because the protocol defines how errors work',
  'The call, because arguments are now checked against a schema',
  'Nothing about whether the call should have been allowed',
  'The audit trail, because the protocol records calls'],
 2,
 'A standard carries the call, but it doesn’t decide who is allowed to make it. Schema checks and error handling are real benefits, yet neither asks whether this requester may delete this record. That question belongs to a part you have to build yourself, and it is never the model.'],

['I408','S20',1,'multi',
 'You extract plain text from a real PDF. Which of these are often lost?',
 ['The structure of a table',
  'Meaning carried by position, such as a heading above a column',
  'Anything that was inside an image',
  'The words in the body paragraphs'],
 [0,1,2],
 'Body text usually survives. The other three get flattened or dropped completely. That’s why a question about a table can’t be graded against a text extraction: the right answer has to come from something that can actually read a table.'],

['I409','S11',3,'mcq',
 'End-to-end answer quality scores 0.88. Retrieval recall scores 0.41. What’s the most likely explanation?',
 ['The evaluation set is too easy',
  'The model is answering well from its own knowledge instead of from the evidence',
  'The retriever is fine and the metric is miscalibrated',
  'Groundedness and recall can’t be compared, so nothing follows'],
 1,
 'A fluent model often covers for missing evidence well enough to look good end to end. That’s the most dangerous state for a retrieval product, because the demo looks great while the system is guessing. Only a layered score shows it. A single number can’t.'],

['I410','S10',2,'multi',
 'An answer was wrong on Tuesday, but the code hasn’t changed. Which trace fields help you find out why?',
 ['The prompt version in use for that request',
  'The ids of the chunks that were retrieved',
  'The model and model version that served it',
  'The total latency for the request'],
 [0,1,2],
 'Prompt version, retrieved chunk ids and model version are the three things that can change without a deploy, and they’re the three people leave out of a trace. Latency tells you about speed, not correctness. It’s useful, but not for this question.'],

['I411','S21',3,'judge',
 'A colleague says injection isn’t a concern, because the corpus holds only internal documents written by your own staff. Answer them.',
 null,
 'Retrieved content is untrusted input, whoever wrote it. An internal document can be edited by anyone with write access, uploaded by a supplier, or can quote an outside source word for word, and in each case the model can’t tell an instruction from data. The control is the instruction boundary the system enforces when it builds the context, not where the file came from.',
 'The reply has to move the argument away from ownership and onto the boundary. “Our own documents” says who you can blame. It doesn’t say whether the text can carry instructions.'],

['I412','S28',1,'mcq',
 'Which of these is an acceptance criterion an engineer can actually build against?',
 ['The assistant always returns the correct document',
  'The assistant returns the correct document in almost all cases',
  'On the approved 200-case set, Recall@5 ≥ 0.90 and no-answer precision ≥ 0.98',
  'The assistant performs at least as well as the current manual process'],
 2,
 'Only the third names a metric, a test set and a tolerance. The first promises something that probabilistic systems can’t deliver. The second can’t be tested. The fourth is a real goal, but it isn’t a criterion yet because no measurement is attached.'],

['I413','S30',2,'multi',
 'Your provider announces a price increase with ninety days’ notice. Which of these make switching manageable?',
 ['An evaluation set you can re-run against a new provider',
  'A provider scorecard that already included the cost of leaving',
  'Prompts and configuration kept under version control',
  'A strong preference in the team for the current provider'],
 [0,1,2],
 'The first three are your exit plan, whether or not anyone called it that. An evaluation set turns “can we switch?” from a debate into a week of work. In practice, the exit plan and the evaluation set often turn out to be the same thing.'],

['I414','S30',1,'mcq',
 'What makes a capstone convincing in a design review?',
 ['A working demo of the happy path',
  'A framework choice that matches what the team already uses',
  'Failures you found yourself, with before-and-after numbers and the risk that remains',
  'Coverage of every topic in the book'],
 2,
 'Anyone can demo the happy path. You show you understand a system by knowing where it breaks. Show the measurement that proves you fixed part of it, and say plainly what you didn’t solve.']

];

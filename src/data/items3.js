/* Assessment bank, part 3 — depth for the thinly-covered skills, so every
   skill has enough items to reach mastery through practice rather than
   topping out because the bank ran dry. */

window.ITEMS3 = [

/* ---- S02 Context window ---- */
['I119','S02',2,'mcq','Your envelope (all the text sent in one request) is 24,000 tokens. The window (the model’s desk) holds 200,000 tokens. A colleague says there is “plenty of headroom.” What is the flaw?',
 ['There is no flaw','Headroom in the window says nothing about whether the model actually uses what is already in there','The window is smaller than reported','Headroom should be reserved for the answer'],1,
 'Having room is not the same as paying attention. Measured accuracy drops well before the ceiling. So “we are only at 12% of the window” proves one thing: the request will not error.'],

/* ---- S03 Statelessness ---- */
['I120','S03',2,'mcq','A support bot must recall a customer’s earlier tickets. Where does that recall really live?',
 ['In the model’s weights','In a store you own, with the right parts picked into the envelope for each request, within a token budget','In the provider’s conversation cache','In the context window between sessions'],1,
 'Every memory feature has the same three parts: a store, a rule for picking, and a budget. You design all three. You own them. You pay for them.'],
['I121','S03',3,'mcq','An assistant’s “memory” feature gets more useful. Which cost grows fastest?',
 ['Storing the history','Re-sending the chosen history on every single query','Embedding the history once','The model licence'],1,
 'Storage is cheap and paid once. Re-sending is paid on every query, for as long as the feature runs. It grows with both use and usefulness.'],

/* ---- S04 System prompt ---- */
['I122','S04',3,'mcq','Your team edits the system prompt (the standing instructions on the shop wall) every week to tune the tone. What hidden cost are they running up?',
 ['The model needs retraining','Every prompt cache after the edited prefix is invalidated on each edit','Temperature drifts','Embeddings must be recomputed'],1,
 'With caching, the system prompt is the stable prefix (the part that stays the same at the start). So a casual edit wipes the caches. It also changes behaviour quietly. Nothing tests for that (regression testing).'],

/* ---- S10 Metadata ---- */
['I123','S10',2,'mcq','Where in the retrieval sequence does filtering happen?',
 ['After ranking, to trim the final list','Before scoring, to remove chunks that cannot possibly be right','Inside the embedding model','Only when the answer is generated'],1,
 'Throwing out candidates that are out of scope before scoring helps more than any clever ranking technique. And it is ordinary database work.'],
['I124','S10',3,'mcq','What is the strongest reason to define metadata (labels on a record) before you embed a corpus, not after?',
 ['It is easier to type','Adding metadata later means re-indexing everything, which gets expensive once the corpus is large','Embeddings store metadata internally','Filters only work on new documents'],1,
 'You cannot add metadata cheaply later. Skipping it at ingestion (when you load the documents) means you will pay for a full re-index later. Usually that happens at the worst moment.'],

/* ---- S14 Error analysis ---- */
['I125','S14',2,'mcq','Why does the method tell you to write sentences before you assign categories?',
 ['Sentences are easier to store','Categories chosen too early squeeze new failures into old buckets and hide the pattern you haven’t named yet','It produces better documentation','Categories require approval'],1,
 'If you sort as you read, you can only find the kinds of failure you already believed in. The clusters (groups) that surprise you are the valuable ones.'],
['I126','S14',3,'mcq','You have a failure taxonomy (your sorted piles of failures) with counts. How should it drive the roadmap (the plan of what comes first, next and later)?',
 ['Fix the most technically interesting cluster','Rank by frequency × severity, and fix one at a time so the next measurement can be traced to the fix','Fix everything in one release','Fix the smallest clusters first for quick wins'],1,
 'One change at a time gives the next measurement any meaning. Batch five fixes together, and all you learn is that something helped.'],

/* ---- S15 Calibration ---- */
['I127','S15',2,'mcq','What does a Brier score measure?',
 ['How often you are correct','How well your stated confidence matches your actual accuracy','How fast you answer','How difficult the questions were'],1,
 'It rewards being right. It also rewards being suitably confident. Being confidently wrong is penalised the most. That is the failure this whole system is built to bring to the surface.'],
['I128','S15',3,'mcq','You are always correct, but you always mark “leaning” instead of “fairly sure.” What does this cost you?',
 ['Nothing, because caution is free','It’s a real miscalibration: you under-claim knowledge you have, which matters in rooms where you’re the only one who measured anything','It lowers your accuracy','It slows down practice'],1,
 'Being underconfident is a calibration error like any other. The cost at work: you end up giving way to more confident people who have less evidence.'],

/* ---- S22 Guardrail vs control ---- */
['I129','S22',2,'mcq','Which of these is a control (a hard stop), not a filter (a request that leaks sometimes)?',
 ['A system prompt telling the model not to follow instructions in the context','Wrapping retrieved text in delimiters','Requiring a human to confirm the exact recipient before any outgoing send','Telling the model to flag suspicious content'],2,
 'Human confirmation holds no matter what the model decided. The other three ask the model to behave. That makes them filters with a leak rate.'],
['I130','S22',3,'mcq','You are reporting a defence to your risk register (the list of risks you track). Which wording is honest?',
 ['“Prompt injection is mitigated”','“Capture rate reduced from 8/10 to 2/10 against non-adaptive attacks; residual risk contained by an outbound allowlist”','“The vendor confirms the system is secure”','“No injections observed in testing”'],1,
 'Name the measurement. Name the kind of attack it was measured against. Name the structural control that carries the leftover risk. Anything else claims too much.'],

/* ---- S24 Oversight ---- */
['I131','S24',2,'mcq','What is the least a reviewer must see for the review to mean anything?',
 ['The final answer','The answer, plus the retrieved evidence and the supporting quote','The model version','The confidence score'],1,
 'Reviewing an answer without its evidence only checks how fluent it sounds. The reviewer needs to see what the answer was meant to be based on.'],
['I132','S24',3,'mcq','There are 4,000 outputs a day and you have one reviewer. What design works?',
 ['Review a random 1% and hope','Send only the outputs that fail a programmatic check to review, and sample the rest','Ask the model to review itself','Reduce output volume'],1,
 'Structured output (a form with fixed boxes) plus programmatic checks turn “review everything” into “review the few percent that failed a check.” One person can do that, with the authority and the time.'],

/* ---- S25 Data lifecycle ---- */
['I133','S25',2,'mcq','Why is it worth recording data lineage (where each document came from) at ingestion, not later?',
 ['It is a regulatory checkbox','Because after ingestion you often can’t work out where a document came from, or on what right you hold it','It improves retrieval','It reduces storage'],1,
 'Provenance (where it came from) is cheap to record and often impossible to recover later. The same goes for the permission under which you hold the data.'],
['I134','S25',3,'mcq','Your prompt cache holds fragments of a document that a customer asked you to delete. What is the honest position?',
 ['Caches expire, so no action is needed','It’s a store holding their data. You need a documented expiry or a way to invalidate it, and if you have neither, that’s a finding','Caches are the provider’s responsibility','Only the vector index matters'],1,
 'A cache is a copy. Either you can invalidate it, or you can state a firm expiry, or you have a gap to report. “It expires eventually” is not a retention policy.'],
['I135','S25',3,'multi','Which of these make a deletion request hard to satisfy in a RAG system (find the page, then answer from it)?',
 ['The same passage was embedded into a vector index','Fragments sit in provider-side request logs that you don’t control','Real queries and outputs were sampled into an eval set','The source file is in object storage'],[0,1,2],
 'The source file is the easy part. Deletion drills fail on the derived copies: vectors, third-party logs and eval sets. Nobody remembers the eval set.'],

/* ---- S29 Explain it upward ---- */
['I136','S29',2,'mcq','Which sentence would fail the explain-it-upward test (could a director repeat it)?',
 ['“The system looks up the relevant pages before answering, so it quotes your documents instead of inventing”','“We use semantic retrieval over a chunked corpus with reranking”','“It can find the right page and still read the wrong number out of a table”','“Every answer should come with the sentence it was based on, so you can check it in seconds”'],1,
 'A director could repeat three of these tomorrow. The other is a sentence only its author can defend. That makes it useless in the rooms that matter.'],
['I137','S29',3,'mcq','A director asks, “Can we trust it?” What is the strongest short reply?',
 ['“Yes, it is highly accurate”','“Trust it where we measured it”','“No, it hallucinates”','“It depends on the model”'],1,
 'It names the real edge of the claim. It invites the follow-up, “What did you measure?” Of the four, it is the only one you can defend when challenged.'],
];

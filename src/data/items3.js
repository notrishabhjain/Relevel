/* Assessment bank, part 3 — depth for the thinly-covered skills, so every
   skill has enough items to reach mastery through practice rather than
   topping out because the bank ran dry. */

window.ITEMS3 = [

/* ---- S02 Context window ---- */
['I119','S02',2,'mcq','Your envelope is 24,000 tokens against a 200,000-token window. A colleague says there is "plenty of headroom." What is the flaw?',
 ['There is no flaw','Headroom in the window says nothing about whether the model uses what is already in there','The window is smaller than reported','Headroom should be reserved for the answer'],1,
 'Capacity is not attention. Measured accuracy degrades well before the ceiling, so "we are only at 12% of the window" is not evidence of anything except that the request will not error.'],

/* ---- S03 Statelessness ---- */
['I120','S03',2,'mcq','A support bot must recall a customer\'s prior tickets. Where does that recall actually live?',
 ['In the model\'s weights','In a store you own, selected into the envelope per request under a token budget','In the provider\'s conversation cache','In the context window between sessions'],1,
 'Store, selection rule, budget — the three parts of every memory feature. All three are yours to design, own and pay for.'],
['I121','S03',3,'mcq','Which cost grows fastest as an assistant\'s "memory" feature becomes more useful?',
 ['Storage of the history','Re-sending the selected history on every single query','Embedding the history once','The model licence'],1,
 'Storage is cheap and paid once. Re-sending is paid per query, forever, and it is the line that scales with both usage and usefulness.'],

/* ---- S04 System prompt ---- */
['I122','S04',3,'mcq','Your team edits the system prompt weekly to tune tone. What hidden cost are they incurring?',
 ['The model needs retraining','Every prompt-cache downstream of the prefix is invalidated on each edit','Temperature drifts','Embeddings must be recomputed'],1,
 'In a cached architecture the system prompt is the stable prefix. Casual edits are cache-invalidating events, and they also silently change behaviour that nothing is regression-testing.'],

/* ---- S10 Metadata ---- */
['I123','S10',2,'mcq','Filtering happens where in the retrieval sequence?',
 ['After ranking, to trim the final list','Before scoring, to remove chunks that cannot possibly be right','Inside the embedding model','Only at answer-generation time'],1,
 'Discarding out-of-scope candidates before scoring improves results more than any clever ranking technique, and it is ordinary database work.'],
['I124','S10',3,'mcq','Which is the strongest argument for defining metadata before a corpus is embedded rather than after?',
 ['It is easier to type','Retrofitting metadata means re-indexing everything, which is expensive once a corpus is large','Embeddings store metadata internally','Filters only work on new documents'],1,
 'Metadata cannot be retrofitted cheaply. The decision to skip it at ingestion is a decision to pay for a full re-index later, usually at the least convenient moment.'],

/* ---- S14 Error analysis ---- */
['I125','S14',2,'mcq','Why does the method insist you write sentences before assigning categories?',
 ['Sentences are easier to store','Premature categories force new failures into old buckets and hide the pattern you have not named yet','It produces better documentation','Categories require approval'],1,
 'If you categorise as you read, you can only ever find failure types you already believed in. The clusters that surprise you are the valuable ones.'],
['I126','S14',3,'mcq','You have a failure taxonomy with counts. How should it drive the roadmap?',
 ['Fix the most technically interesting cluster','Rank by frequency × severity, and fix one at a time so the next measurement is attributable','Fix everything in one release','Fix the smallest clusters first for quick wins'],1,
 'One change at a time is what makes the next measurement mean anything. Batch five fixes and you learn only that something helped.'],

/* ---- S15 Calibration ---- */
['I127','S15',2,'mcq','What does a Brier score measure?',
 ['How often you are correct','How well your stated confidence matches your actual accuracy','How fast you answer','How difficult the questions were'],1,
 'It rewards being right AND being appropriately confident. Confidently wrong is penalised hardest, which is precisely the failure mode this whole system is built to surface.'],
['I128','S15',3,'mcq','You are consistently correct but always mark "leaning" rather than "fairly sure". What does this cost you?',
 ['Nothing — caution is free','It is a real miscalibration: you under-claim knowledge you have, which matters in rooms where you are the only one who measured anything','It lowers your accuracy','It slows down practice'],1,
 'Underconfidence is a calibration error like any other. The professional cost is that you defer to more confident people who have less evidence.'],

/* ---- S22 Guardrail vs control ---- */
['I129','S22',2,'mcq','Which is a control rather than a filter?',
 ['A system prompt forbidding the model to follow instructions in context','Wrapping retrieved text in delimiters','Requiring human confirmation of the exact recipient before any outbound send','Instructing the model to flag suspicious content'],2,
 'Human confirmation holds regardless of what the model decided. The other three ask the model to behave, which is a filter with a leak rate.'],
['I130','S22',3,'mcq','You report a defence to your risk register. Which framing is honest?',
 ['"Prompt injection is mitigated"','"Capture rate reduced from 8/10 to 2/10 against non-adaptive attacks; residual risk contained by an outbound allowlist"','"The vendor confirms the system is secure"','"No injections observed in testing"'],1,
 'Name the measurement, the attack class it was measured against, and the structural control carrying the residual risk. Everything else overstates.'],

/* ---- S24 Oversight ---- */
['I131','S24',2,'mcq','What is the minimum a reviewer must see for review to be meaningful?',
 ['The final answer','The answer plus the retrieved evidence and the supporting quote','The model version','The confidence score'],1,
 'Reviewing an answer without its evidence is reviewing fluency. The reviewer needs what the answer was supposedly based on.'],
['I132','S24',3,'mcq','Volume is 4,000 outputs a day and you have one reviewer. What is the workable design?',
 ['Review a random 1% and hope','Route only outputs failing a programmatic check to review, and sample the rest','Ask the model to review itself','Reduce output volume'],1,
 'Structured output plus programmatic checks turn "review everything" into "review the few percent that failed a check" — which one person can genuinely do, with authority and time.'],

/* ---- S25 Data lifecycle ---- */
['I133','S25',2,'mcq','Why is data lineage worth recording at ingestion rather than later?',
 ['It is a regulatory checkbox','Because after ingestion you frequently cannot reconstruct where a document came from or under what right you hold it','It improves retrieval','It reduces storage'],1,
 'Provenance is cheap to record and often impossible to recover. The same is true of the permission under which you hold it.'],
['I134','S25',3,'mcq','Your prompt cache holds fragments of a document a customer asked you to delete. What is the honest position?',
 ['Caches expire, so no action is needed','It is a store holding their data; you need a documented expiry or an invalidation path, and if you have neither, that is a finding','Caches are the provider\'s responsibility','Only the vector index matters'],1,
 'A cache is a copy. Either you can invalidate it, or you can state a bounded expiry, or you have a gap to report — "it expires eventually" is not a retention policy.'],
['I135','S25',3,'multi','Which of these make a deletion request genuinely hard to satisfy in a RAG system?',
 ['The same passage was embedded into a vector index','Fragments sit in provider-side request logs you do not control','Real queries and outputs were sampled into an eval set','The source file is in object storage'],[0,1,2],
 'The source file is the easy one. Derived copies — vectors, third-party logs, eval sets — are where deletion drills fail, and the eval set is the one nobody remembers.'],

/* ---- S29 Explain it upward ---- */
['I136','S29',2,'mcq','Which sentence would fail the explain-it-upward test?',
 ['"The system looks up the relevant pages before answering, so it quotes your documents instead of inventing"','"We use semantic retrieval over a chunked corpus with reranking"','"It can find the right page and still read the wrong number out of a table"','"Every answer should come with the sentence it was based on, so you can check it in seconds"'],1,
 'Three of these a director could repeat tomorrow. One is a sentence only the person who wrote it can defend, which makes it useless in the rooms that matter.'],
['I137','S29',3,'mcq','A director asks "can we trust it?" What is the strongest four-word-shaped reply?',
 ['"Yes, it is highly accurate"','"Trust it where we measured it"','"No, it hallucinates"','"It depends on the model"'],1,
 'It names the actual boundary of the claim, invites the follow-up "what did you measure?", and is the only one of the four that is defensible under challenge.'],
];

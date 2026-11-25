/* Assessment bank, part 1 — Model Mechanics, Retrieval, Evaluation.
   [id, skill, difficulty 1-3, type, stem, options, answer, why]
   type: mcq   → answer = correct index
         multi → answer = array of correct indices
         num   → options = [unit, hint], answer = [value, tolerance%]
         order → answer = array of option indices in correct order
         judge → options = null, answer = model answer (self-scored on a rubric) */

window.ITEMS1 = [

/* ================= S01 Token & cost arithmetic ================= */
['I001','S01',1,'mcq','A 300-word English answer is about how many tokens? (A token is a small piece of a word, like one Lego brick of text.)',
 ['About 150','About 225','About 400','Exactly 300'],2,
 'Use this rule: 1 token is about ¾ of an English word. So multiply the words by 1.33. That makes 300 words about 400 tokens. Watch the trap answer, 225. You get it when you divide instead of multiply.'],
['I002','S01',2,'num','A RAG query (an open-book exam: find the right page, then answer from it) sends 1,800 input tokens and gets 240 output tokens. Input costs ₹0.20 per million tokens. Output costs ₹0.60 per million. These prices are made up. Look up today’s price before you use a number at work. What does one query cost, in paise (1 rupee = 100 paise)?',
 ['paise','(1800/1e6)×0.20 + (240/1e6)×0.60, converted to paise'],[0.0504,15],
 'Work out the input part and the output part separately. Then add them: (1800/1,000,000 × 0.20) + (240/1,000,000 × 0.60) = 0.00036 + 0.000144 = ₹0.000504. That is about 0.05 paise. The real lesson: one query looks tiny. But multiply it by the number of queries and by the four multipliers, and it grows.'],
['I003','S01',3,'multi','A business case says each query costs ₹0.30. They worked it out as input tokens × rate + output tokens × rate. Which of these would push the real bill above ₹0.30?',
 ['Raising k from 3 to 8','A 12% schema-validation retry rate','A 4-step agent loop','Reasoning enabled by default','Prompt caching with a stable prefix'],[0,1,2,3],
 'Four things multiply the simple sum: k (how many chunks you fetch), retries, agent steps and reasoning tokens. They stack on top of each other. Caching is the odd one out, because it brings the cost down.'],
['I004','S01',2,'mcq','Which token count can a product manager control most directly when designing a feature?',
 ['completion_tokens','prompt_tokens','The model’s parameter count','The context window size'],1,
 'You decide what goes into the envelope (all the text sent in one request): the history, the retrieved chunks and the instructions. So the prompt side is yours to design. You can only nudge the output length. The window size and parameter count come with the model.'],
['I005','S01',3,'mcq','Your feature costs ₹3.10 per query at full load. Each query saves a support ticket worth ₹2.00. Traffic grows 20% a month. What is the right conclusion?',
 ['Ship it, because scale will improve the economics','The unit economics are negative, and growth makes it worse, not better','Optimise prompts and re-measure before deciding','Move to a cheaper model and ship'],1,
 'If each query loses money, more queries mean a bigger loss. The loss grows in a straight line with volume. You may try to optimise. But from these numbers, growth is a liability (a burden) until the cost drops below the value.'],

/* ================= S02 Context window ================= */
['I006','S02',1,'mcq','What is the best description of the context window (the model’s desk)?',
 ['The model’s memory of your conversation','The maximum size of one request plus its response','How much training data the model saw','The number of documents you can store'],1,
 'Think of it as the size of the envelope for one request. Everything that goes in and everything that comes out must fit. It is not memory. It has nothing to do with storage.'],
['I007','S02',3,'mcq','A vendor says a two-million-token context makes your retrieval layer (the part that finds the right pages) unnecessary. What is the strongest single reply?',
 ['Large contexts are slower','Accuracy drops as the context gets longer, and you pay for the full envelope on every query, forever','Two million tokens will not fit our corpus','Retrieval is more accurate than long context in all cases'],1,
 'There are two separate objections. First, accuracy is measured to drop as context grows. People call this context rot. Second, you pay for the full envelope on every single query. Neither is an opinion. The last option claims too much. For some questions that span many sections, putting everything in really does win.'],
['I008','S02',2,'order','Put these in order. Start with the spot where a model finds a fact most reliably in a long context.',
 ['At 5% depth (near the start)','At 95% depth (near the end)','At 50% depth (the middle)'],[0,1,2],
 'Facts at the edges are found far more reliably than facts in the middle. The start and the end stay clear, and the middle sags. This is called the “lost in the middle” pattern. It gets worse as the total length grows.'],
['I009','S02',3,'judge','Your feature’s envelope is 24,000 tokens. It holds 1,200 for the system prompt, 3,400 for tool schemas, 14,000 for retrieved chunks, 4,800 for conversation history and 600 for the answer. Costs are too high. What do you cut first, and what breaks?',null,
 'Retrieved chunks are the biggest line, and the easiest to squeeze. Cut k. Or add reranking, so a smaller k carries better chunks (Ch 12 shows how to cut volume and raise precision). What breaks is recall on questions that span several sections. So measure again against your ground truth after the cut. Cutting history comes next, but it breaks follow-up questions. Cutting tool schemas removes a capability. A strong answer names the cut, the metric it puts at risk, and the new measurement.'],

/* ================= S03 Statelessness ================= */
['I010','S03',1,'mcq','Between two separate API requests, what does the model remember about you?',
 ['Your conversation history','Nothing','A summary of prior turns','Your preferences only'],1,
 'Nothing. The model is like a goldfish: it starts fresh every time. When a chat seems to remember you, the application sends the history again inside a bigger envelope.'],
['I011','S03',2,'mcq','Why does the 50th message in a chat cost far more than the 2nd?',
 ['Later messages are longer','Each new message re-sends the earlier ones, unless the app trims or summarises them.','The model works harder as context builds','Rate limits raise the price'],1,
 'Message 50 has to pay to re-read messages 1 to 49. So the cost follows the length of the whole conversation so far. It does not follow the number of messages.'],
['I012','S03',3,'multi','A vendor says, “Our assistant remembers each user’s full history.” Which questions really test that claim?',
 ['Where is that history stored, and who controls it?','What does re-sending it cost per query at scale?','How is it chosen for the envelope when it is bigger than the budget?','How many parameters does the model have?'],[0,1,2],
 'Memory is three things: a store, a rule for picking what to send, and a context budget. These give three real questions, about privacy, cost and architecture (how it is built). The parameter count has nothing to do with it.'],

/* ================= S04 System prompt ================= */
['I013','S04',1,'mcq','A vendor says, “We customized the AI for your organization.” What does that most often mean in practice?',
 ['The model was retrained on your data','A system prompt was written','A new model was built','Your documents were embedded in the weights'],1,
 'Most of the time they wrote a good briefing page (a system prompt) for the model. No weights changed. It is the same letter with a cover note added.'],
['I014','S04',2,'mcq','How should you manage a system prompt (the standing instructions on the shop wall)? Which of these is it most like?',
 ['A UI copy string','An SOP or policy document, with versions, tests and an owner','A configuration constant','A code comment'],1,
 'The system prompt is the product’s behaviour. So it needs an owner, a version and a test. Changing it also invalidates the prompt caches downstream (they must be filled again).'],
['I015','S04',3,'mcq','For which of these is temperature 0 (the model plays safe) the right default?',
 ['Generating campaign taglines','Answering a policy eligibility question','Brainstorming feature names','Writing varied marketing copy'],1,
 'Compliance questions and fact lookups need the same answer every time. Variety only helps when variety is the product.'],
['I016','S04',3,'judge','You wrote one guardrail sentence. It stopped a model from inventing a fake scheme. A colleague says the problem is “solved.” Give two independent reasons it is not.',null,
 'One: it bends under pressure. A little pushing from the user brought the invention back. Two: it cannot make the model know anything. It only changes the tone around not knowing. So it cannot fix missing evidence. The real fix is verified source text and a way for the model to refuse. A strong answer also says a guardrail depends on the model, so it is not a true control.'],

/* ================= S05 Hallucination ================= */
['I017','S05',1,'mcq','What is the best way to understand hallucination (confident make-believe)?',
 ['A rare bug that better models remove','The normal behaviour of a prediction machine at the edge of what it knows','A sign of corrupted training data','A failure of the retrieval layer only'],1,
 'It is not a glitch. A model that continues text picks the most plausible next words. At the edge of what it knows, “plausible” becomes a neat, well-formatted invention.'],
['I018','S05',3,'mcq','You ask for an “amount” field, strictly a number. You give the model a document with no amount in it. The model returns 42000. What caused this?',
 ['A weak model','A retrieval failure','Your schema left no legal way to say “not present”','Temperature set too high'],2,
 'Your design forced the model to invent something. A nullable field (it may be empty) or a status value like insufficient_evidence removes that pressure. So schema design (the form with fixed boxes) also controls hallucination.'],
['I019','S05',2,'mcq','“The AI sounded confident.” What is that evidence of?',
 ['Correctness','Good retrieval','Nothing at all','A well-written system prompt'],2,
 'Fluent writing costs the model nothing. Confident, neat, well-formatted output is the only way it speaks. It looks the same whether the content is true or not.'],
['I020','S05',3,'multi','Which of these cut down invented content by removing its cause, not by just asking the model nicely?',
 ['Supplying verified source text and telling the model to answer only from that context','Adding a nullable field and an explicit refusal branch','Adding “never invent details” to the system prompt','Requiring a word-for-word supporting quote that can be checked against the source'],[0,1,3],
 'Giving evidence, giving a way to refuse, and asking for citations you can check all change how the task is built. A “never invent” instruction is only a request. It helps a little. It only discourages.'],

/* ================= S06 Chunking ================= */
['I021','S06',1,'mcq','Why can’t you put the whole corpus (all your documents) into every envelope? Pick the two independent reasons.',
 ['It would be slow, and users dislike waiting','The context window is limited, and tokens cost money on every query','The model cannot read more than 10 pages','Embeddings would be inaccurate'],1,
 'It comes down to space and money. Even the part that fits gives worse answers when most of it is irrelevant.'],
['I022','S06',2,'mcq','A chunk (an index card cut from a long book) begins, “the aforesaid amount shall be disbursed within sixty days.” What is the specific problem?',
 ['It is too short','It is an orphan: it means nothing without the earlier text it refers to, and that text no longer travels with it','It contains a date','It will embed poorly because of legal language'],1,
 'The chunk leans on text that now sits in a different chunk. It is hard to retrieve (find). It is hard to use even if you do retrieve it.'],
['I023','S06',3,'mcq','A chunk boundary falls between a rule and its exception. What is the most dangerous result?',
 ['Retrieval will be slower','The system can state the rule without its exception, and sound confident while being incomplete','The chunk will be too large','Embeddings will be less accurate'],1,
 'In compliance and legal work, a confident half-answer is often worse than no answer. It leads someone to a wrong action. A missing answer makes them ask for help.'],
['I024','S06',3,'judge','Your corpus is service contracts with numbered clauses, exceptions and annexures (attached extra pages). Describe your chunking rule and what it gives up.',null,
 'Cut on clause boundaries, so each piece holds a complete rule with its exceptions attached. This is structure-aware chunking: it follows the document’s own layout. Semantic chunking is a separate meaning-based strategy. The pieces will be uneven in size. That is fine, because meaning does not come in equal sizes. What you give up: definitions that point across clauses (“as defined in clause 2”) still become orphans. So add a situating sentence (contextual retrieval). Very long clauses may be too big for one retrieval unit. Split them with overlap. A strong answer names the failure that remains, not just the rule.'],

/* ================= S07 Keyword vs semantic ================= */
['I025','S07',1,'mcq','What is keyword search (finding a page by the exact word, like Ctrl+F) blind to?',
 ['Spelling','Meaning','Document length','Recency'],1,
 'It matches shared letters, not shared sense. To keyword search, “reimbursement” and “disbursement of approved amounts” are strangers.'],
['I026','S07',3,'mcq','Which kind of query does keyword search handle better than semantic search (search by meaning)?',
 ['“When do I get my money back?”','“Clause 4.2(b)”','“Can my manager approve more than the limit?”','A question asked in a second language'],1,
 'Exact strings are where keyword search never slips and embeddings often do. Examples are codes, section numbers, acronyms and policy IDs. That is the half of hybrid search that never goes away.'],
['I027','S07',2,'mcq','Why does keyword search fail worst for the users who most need self-service answers?',
 ['Those users type more slowly','The gap between the document’s words and the user’s words is widest for newcomers','Their questions are longer','They use mobile devices'],1,
 'The less you know the document’s words, the harder its answers are to find. Newcomers and customers know them least, by definition.'],
['I028','S07',3,'multi','You are designing search for a customer help centre and for an internal legal research tool. Which statements are sound?',
 ['The help centre uses plain language and many synonyms, which favours semantic retrieval','The legal tool gets more exact-string queries, like citations and section numbers, which favours a strong keyword side','Both should run hybrid, but the fusion weighting need not be the same','One configuration should serve both, for consistency'],[0,1,2],
 'The mix of queries decides the design. Force one setup onto two different kinds of queries, and it ends up good for neither.'],

/* ================= S08 Embeddings ================= */
['I029','S08',1,'mcq','What is an embedding (an address for meaning)?',
 ['A compressed copy of the text','A list of numbers that gives the text an address on a map of meaning','A summary generated by the model','An index of keywords'],1,
 'It is an address made of roughly a thousand numbers. Texts with similar meanings get addresses that sit close together, like houses on the same street.'],
['I030','S08',2,'mcq','You forget to set input_type to “query” for questions. You send everything as “passage”. What happens?',
 ['An error is returned','Nothing, because the parameter is only cosmetic','Retrieval quality drops, with no warning','Embeddings come back at the wrong dimension'],2,
 'There is no error. The results are only worse. The model maps questions and passages in matching but different ways. Skipping the setting is the classic silent slip.'],
['I031','S08',3,'mcq','A vendor slide says, “1024-dimensional state-of-the-art embeddings.” What is the only useful response?',
 ['Ask for 2048 dimensions','“Measured how, on whose questions, in which languages?”','Ask which GPU they run on','Accept it as a sign of quality'],1,
 'The number of dimensions is a spec, not proof. The claim that needs numbers is how well retrieval works on your documents, in your users’ own words.'],
['I032','S08',3,'mcq','Two text pairs have cosine similarities (how close two embeddings are) of 0.78 and 0.19. Which statement is safe to make from these two numbers alone?',
 ['The first pair are near-synonyms and the second pair are not','You cannot tell from the scores alone, because how scores spread out depends on the model, the corpus and the task','Both pairs are related, because both scores are above zero','The second pair is unrelated, because 0.19 is below 0.5'],1,
 'You cannot read a meaning from cosine values alone. How the scores spread out depends on the model, the corpus and the task. Label examples from your own retrieval task. Then set a threshold or a ranking rule from those.'],

/* ================= S09 Hybrid / rerank ================= */
['I033','S09',2,'mcq','What does reciprocal rank fusion do, in plain words?',
 ['Averages the similarity scores of both methods','Adds up one-over-rank across both ranked lists, so ranking well on either list earns points','Takes the top result from the better method','Trains a model to combine the two'],1,
 'Rank 1 adds a lot. Rank 40 adds almost nothing. A result that does fairly well on both lists beats one that wins only one. There is no learning. It is one line of arithmetic, and it is hard to beat.'],
['I034','S09',3,'mcq','Why do you apply a reranker (a second, more careful judge of the best chunks) only to a shortlist, not the whole corpus?',
 ['It is less accurate on large sets','It reads the question and each chunk together, so its cost grows in step with the number of candidates','It requires the chunks to be sorted first','It can only process 50 items technically'],1,
 'Embeddings are worked out ahead of time and searched instantly. So they do the wide first pass. The reranker is accurate because it reads the question and the chunk together. That is exactly why it cannot run on everything.'],
['I035','S09',3,'mcq','Which technique fixes the orphan chunk you counted during chunking?',
 ['Reranking','Hybrid search','Contextual retrieval: a generated situating sentence added before embedding','Raising k'],2,
 'The orphan becomes easy to find, because its address moves to the right neighbourhood. It costs one cheap call per chunk when you index. It costs nothing when a user asks.'],
['I036','S09',3,'mcq','Which lever (a setting you can turn) improves cost and quality at the same time?',
 ['Raising k','Reranking, because it lets you lower k while raising precision','Enabling reasoning','Increasing chunk size'],1,
 'Almost every other lever trades one for the other. Here you retrieve wide, rerank narrow, and send fewer but better chunks.'],

/* ================= S10 Metadata / versions ================= */
['I037','S10',2,'mcq','Your corpus holds both the 2024 and the 2026 versions of a policy. Which technique saves you?',
 ['A better embedding model','Reranking','A metadata filter on version or status','Larger chunks'],2,
 'No embedding model can tell that a rule has been repealed (cancelled). Semantic similarity will happily return the old text with a high, confident score. This is ordinary database work, and it beats every clever technique here.'],
['I038','S10',3,'multi','Metadata (labels on a record, like date and owner) filtering can prevent some failures that no retrieval-quality technique can. Which ones?',
 ['Superseded document versions being quoted as current','Content from a department the user is not allowed to see','A question in the user’s own words failing to match','Out-of-date figures being retrieved alongside current ones'],[0,1,3],
 'How recent a record is, what it covers and who may see it are facts about the record, not about its meaning. A mismatch in phrasing is what semantic retrieval is for.'],
['I039','S10',3,'judge','Before you index a new corpus, what metadata do you require, and why each one?',null,
 'At minimum: document identity and version (so you never quote a replaced rule), effective and expiry dates (for recency), a status such as current, draft or repealed, the owning department or scope (to filter by access and relevance), and the document type (to route different kinds of queries). Each one guards against a failure no embedding can catch. A strong answer also says filtering happens before scoring. And metadata you forgot cannot be added cheaply once the corpus is embedded.'],

/* ================= S11 Ground truth ================= */
['I040','S11',1,'mcq','What is ground truth (the teacher’s answer key)?',
 ['The model’s most confident answer','A pre-checked set of questions, correct answers, and where those answers sit in the corpus','The raw source documents','The system’s average accuracy'],1,
 'It is the answer key, written before the exam. With no ground truth there is no evaluation. There is only gut feeling.'],
['I041','S11',3,'mcq','Why should a question with no answer in the documents have a permanent place in every ground-truth set?',
 ['It makes the score look more realistic','It is where retrieval that never says no meets a model that lies confidently, which is the compound failure','It tests the embedding model','It balances the difficulty distribution'],1,
 'What the system does at that moment is its safety profile. Only a deliberate test row ever measures it.'],
['I042','S11',3,'mcq','Your ground truth scores 9/9 at k=3 on the first try. What is the most likely explanation?',
 ['The system is excellent','You wrote the questions while reading the chunks, so they use the document’s own words','k is too high','The embedding model is well suited'],1,
 'Questions written from the chunks test word overlap, not retrieval. Rewrite several in a real user’s words without looking at the document. Then grade again.'],
['I043','S11',3,'judge','Your offline eval (testing before launch) reads 92%, but users are complaining. Give the most likely cause and the fix.',null,
 'The ground truth does not look like real traffic. Most likely the team wrote it in the document’s own words. It lacks the vague wording, follow-ups and out-of-scope questions that real users bring. The fix: sample real production queries into the eval set. That is the flywheel turning: traffic, then error analysis, then new eval cases. A strong answer tells offline eval (does it pass the key?) from online eval (are users better off?). It says you need both.'],

/* ================= S12 Precision/recall ================= */
['I044','S12',1,'mcq','Of everything that mattered, how much did the system fetch? What is this measure?',
 ['Precision','Recall','Accuracy','F1'],1,
 'Recall is about missed files. Precision is about a buried desk. The office-assistant story helps you keep the two straight.'],
['I045','S12',2,'mcq','You raise k (how many chunks you fetch) from 3 to 8. What happens?',
 ['Both precision and recall rise','Coverage may improve and relevance density may fall; measure Hit@k, Recall@k where defined, Precision@k, prompt tokens, latency and cost','Precision rises and recall falls','Nothing changes without re-indexing'],1,
 'More candidates can improve coverage and lower relevance density (the share of useful chunks). Neither is guaranteed. The retrieved text can grow with k. The real cost depends on chunk size, prompt overhead, output tokens, caching, truncation and pricing. So measure it.'],
['I046','S12',3,'mcq','For a customer-facing answer bot, which failure costs more?',
 ['“I could not find this, please contact us”','A confidently wrong answer about eligibility','Slightly slow responses','Retrieving four chunks instead of three'],1,
 'A wrong answer is a disaster when customers see it. Inside the company you can live with it. “Cannot find” is the other way round. That difference decides your k. The decision belongs to whoever owns the use case.'],
['I047','S12',3,'judge','You measure 6/9 hits at k=1, 8/9 at k=3 and 9/9 at k=8, with relevant fractions of 6/9, 11/27 and 14/72. Which k do you ship for an internal drafting aide (a helper that writes first drafts), and why?',null,
 'k=3 or k=8, leaning k=8. In a drafting aide, the professional who reviews the draft catches imperfect ones. So a buried desk is survivable. A tool that fails to surface the right material gets abandoned. But k=8 buys the last hit at about 2.7× the tokens of k=3. You gain one hit, and precision drops to 19%. So a strong answer picks k=3 as good value, and calls k=8 defensible if latency and budget allow. It says it would look again with a reranker, to get k=3 volume at k=8 recall.'],

/* ================= S13 Judge design ================= */
['I048','S13',2,'mcq','Before you trust an LLM judge (a second student marking the homework), what is the one step you cannot skip?',
 ['Using the largest available model','Measuring how well it agrees with human labels on a representative set','Running it at temperature 0','Averaging three judges'],1,
 'Check a judge against human labels before you use it to measure anything. Unchecked, it is a second opinion from the same kind of system that wrote the answer.'],
['I049','S13',3,'mcq','You pad a correct answer with hedging and structure. No claim changes. The judge’s score goes up. What is this?',
 ['Correct behaviour, because clearer answers are better','Verbosity bias','Position bias','Self-preference bias'],1,
 'Longer answers score higher, all else equal. This spoils many published evaluation numbers. You can reproduce it yourself in five minutes.'],
['I050','S13',3,'multi','Which judge design choices help resist the known biases?',
 ['Grade one narrow dimension per call, not overall quality','Require the judge to quote the specific unsupported claim','Use pairwise comparison with the order of presentation randomised','Ask for a 1–10 quality score and average many runs'],[0,1,2],
 'Narrow rubrics, forced evidence and randomised pairwise comparison all cut down bias. Averaging a vague overall score gives you a steady number that is steadily wrong.'],
['I051','S13',3,'mcq','Your judge agrees with your human labels on 6 of 10. The disagreements are scattered with no pattern. What should you conclude?',
 ['Usable, because 60% is above chance','Unusable, because random error can’t be corrected for','Usable if you always round the score up','The humans are wrong'],1,
 'A judge that is always lenient on one kind of failure is usable, as long as you know that. A judge whose errors are random gives you no signal you can correct.'],

/* ================= S14 Error analysis ================= */
['I052','S14',2,'mcq','Done properly, what is error analysis (reading the wrong answers one by one and sorting them into piles) mostly?',
 ['Writing evaluation code','Reading real outputs against their sources and writing plain-language notes','Running benchmark suites','Tuning retrieval parameters'],1,
 'It is reading, not coding. It has the biggest payoff of anything in applied AI, mostly because almost nobody does it.'],
['I053','S14',3,'mcq','Why is a failure taxonomy (your own sorted piles of failures) built from your own traffic better than adding more benchmark evals?',
 ['Benchmarks are poorly constructed','Benchmarks measure someone else’s failures, not your users, documents or corpus quirks','Benchmarks are expensive','Taxonomies are faster to build'],1,
 'Your own taxonomy tells you what to fix. It gives you categories you can count. A benchmark only tells you something is wrong, and on someone else’s data.'],
['I054','S14',3,'order','Put the flywheel (a loop that keeps turning and gets better each turn) in order. Start from what you already have running.',
 ['Production traffic','Error analysis on sampled outputs','New eval cases added to the suite','A targeted fix','Measured improvement'],[0,1,2,3,4],
 'Each turn makes your eval suite a truer picture of reality. It is the one asset in an AI product that gains value over time. Models change every few months. Your ground truth and taxonomy stay.'],

/* ================= S15 Calibration ================= */
['I055','S15',2,'mcq','Why does the book ask you to write down a prediction before every measurement?',
 ['To make the exercise take longer','Because the gap between your guess and the measurement is the lesson; without the guess, a number is just a number','To create documentation','To compare yourself with other learners'],1,
 'Most people guess too high, often by a lot. Having that gap on record stops a slick demo from deciding things while you are in the room.'],
['I056','S15',3,'mcq','Across twelve logged predictions, your measured values are always lower than your guesses. What is the right response?',
 ['Stop predicting, because it is discouraging','Adjust future estimates downward, and treat your own confidence as a known bias','Choose easier things to predict','Conclude the systems are underperforming'],1,
 'Once you know your own calibration curve (how far off your guesses run), you can use it. This is the one skill in the book that turns directly into better judgment in rooms where nobody is measuring anything.'],
['I057','S15',3,'judge','You predicted 8 of 9 questions would retrieve a correct chunk at k=3. You measured 6. Write the one sentence this gap earns you.',null,
 'Something like: “I over-predicted retrieval quality by 22 percentage points on documents I know well. So my gut feel about whether a demo is working cannot be trusted. I will not accept a demo as evidence again.” Strong answers name the size of the gap, its direction, and a change in behaviour. They do not stop at “I was wrong.”'],
];

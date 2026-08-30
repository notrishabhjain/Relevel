/* Assessment bank, part 1 — Model Mechanics, Retrieval, Evaluation.
   [id, skill, difficulty 1-3, type, stem, options, answer, why]
   type: mcq   → answer = correct index
         multi → answer = array of correct indices
         num   → options = [unit, hint], answer = [value, tolerance%]
         order → answer = array of option indices in correct order
         judge → options = null, answer = model answer (self-scored on a rubric) */

window.ITEMS1 = [

/* ================= S01 Token & cost arithmetic ================= */
['I001','S01',1,'mcq','A 300-word English answer is roughly how many tokens?',
 ['About 150','About 225','About 400','Exactly 300'],1,
 'The working rule is ~1 token ≈ ¾ of an English word, so words × 1.33. 300 × 1.33 ≈ 400 — careful: the question asks tokens for 300 words, which is ~400. The trap answer is 225 (dividing instead of multiplying).'],
['I002','S01',2,'num','A RAG query sends 1,800 input tokens and produces 240 output tokens. Input is ₹0.20 per million tokens, output ₹0.60 per million. What is the cost of one query, in paise (1 rupee = 100 paise)?',
 ['paise','(1800/1e6)×0.20 + (240/1e6)×0.60, converted to paise'],[0.0504,15],
 '(1800/1,000,000 × 0.20) + (240/1,000,000 × 0.60) = 0.00036 + 0.000144 = ₹0.000504 ≈ 0.05 paise. The point is not the arithmetic; it is that per-query costs look negligible until multiplied by volume and the four multipliers.'],
['I003','S01',3,'multi','A business case quotes ₹0.30 per query using input tokens × rate + output tokens × rate. Which of these would make the real bill higher than that figure?',
 ['Raising k from 3 to 8','A 12% schema-validation retry rate','A 4-step agent loop','Reasoning enabled by default','Prompt caching with a stable prefix'],[0,1,2,3],
 'k, retries, agent steps and reasoning tokens are the four multipliers, and they compound. Caching is the one item that moves cost *down*.'],
['I004','S01',2,'mcq','Which token count is most directly under a product manager\'s control at design time?',
 ['completion_tokens','prompt_tokens','The model\'s parameter count','The context window size'],1,
 'What goes into the envelope — history, retrieved chunks, instructions — is entirely a design decision. Output length is influenced but not controlled; the window and parameters are given.'],
['I005','S01',3,'mcq','Your feature costs ₹3.10 per query loaded. It deflects support tickets worth ₹2.00 each. Traffic is growing 20% monthly. What is the correct conclusion?',
 ['Ship it — scale will improve the economics','The unit economics are negative and growth makes it worse, not better','Optimise prompts and re-measure before deciding','Move to a cheaper model and ship'],1,
 'Negative unit economics do not improve with volume; they scale linearly with the loss. Optimisation may be worth attempting, but the correct *conclusion* from these numbers is that growth is a liability until the margin inverts.'],

/* ================= S02 Context window ================= */
['I006','S02',1,'mcq','The context window is best described as:',
 ['The model\'s memory of your conversation','The maximum size of one request plus its response','How much training data the model saw','The number of documents you can store'],1,
 'It is a per-request envelope size — everything in plus everything out. It is not memory and has nothing to do with storage.'],
['I007','S02',3,'mcq','A vendor argues that a two-million-token context makes your retrieval layer unnecessary. What is the strongest single rebuttal?',
 ['Large contexts are slower','Accuracy degrades with context length, and you pay for the full envelope on every query, forever','Two million tokens will not fit our corpus','Retrieval is more accurate than long context in all cases'],1,
 'Two independent objections — measured quality degradation (context rot) and per-query cost — and neither is a matter of opinion. The last option overclaims: on some multi-section questions, stuffing genuinely wins.'],
['I008','S02',2,'order','Order these by how reliably a model recovers a specific fact placed at that position in a long context, most reliable first.',
 ['At 5% depth (near the start)','At 95% depth (near the end)','At 50% depth (the middle)'],[0,1,2],
 'Edges are recovered far more reliably than the middle. Start and end are close; the middle sags. This is the "lost in the middle" pattern, and it worsens as total length grows.'],
['I009','S02',3,'judge','Your feature\'s envelope is 24,000 tokens: 1,200 system prompt, 3,400 tool schemas, 14,000 retrieved chunks, 4,800 conversation history, 600 answer. Costs are too high. What do you cut first, and what breaks?',null,
 'Retrieved chunks are the largest line and the most compressible — cut k, or add reranking so a smaller k carries better chunks (Ch 12 lets you cut volume while raising precision). What breaks: recall on multi-section questions, so re-measure against ground truth after cutting. Cutting history is the next candidate but breaks follow-up questions; cutting tool schemas removes capability outright. A strong answer names the cut, the metric it endangers, and the re-measurement.'],

/* ================= S03 Statelessness ================= */
['I010','S03',1,'mcq','Between two separate API requests, what does the model retain about you?',
 ['Your conversation history','Nothing','A summary of prior turns','Your preferences only'],1,
 'Stateless — total amnesia. All apparent memory is the application re-sending history inside a fatter envelope.'],
['I011','S03',2,'mcq','Why does the 50th message of a chat cost far more than the 2nd?',
 ['Later messages are longer','Each request re-sends the entire prior conversation','The model works harder as context builds','Rate limits raise the price'],1,
 'Message 50 pays to re-read messages 1–49. Cost grows with accumulated conversation length, not with message count.'],
['I012','S03',3,'multi','A vendor says "our assistant remembers each user\'s full history." Which questions actually test the claim?',
 ['Where is that history stored and who controls it?','What does re-sending it cost per query at scale?','How is it selected into the envelope when it exceeds the budget?','How many parameters does the model have?'],[0,1,2],
 'Memory is a store, a selection rule and a context budget — those are the three real questions, spanning privacy, cost and architecture. Parameter count is unrelated.'],

/* ================= S04 System prompt ================= */
['I013','S04',1,'mcq','"We customized the AI for your organization" most often means, in practice:',
 ['The model was retrained on your data','A system prompt was written','A new model was built','Your documents were embedded in the weights'],1,
 'The honest translation is usually: we wrote a good briefing page. No weights changed. A letter acquired a cover note.'],
['I014','S04',2,'mcq','A system prompt should be governed most like which of these?',
 ['A UI copy string','An SOP or policy document — versioned, tested, owned','A configuration constant','A code comment'],1,
 'It *is* the product\'s behaviour. It needs an owner, a version, and a test — and changing it invalidates prompt caches downstream.'],
['I015','S04',3,'mcq','Temperature 0 is the right default for which of these?',
 ['Generating campaign taglines','Answering a policy eligibility question','Brainstorming feature names','Writing varied marketing copy'],1,
 'Compliance and factual lookups want repeatability. Variety is a feature only where variety is the product.'],
['I016','S04',3,'judge','You wrote a guardrail sentence that stopped a model from inventing a fake scheme. A colleague calls it "solved." Give two independent reasons it is not.',null,
 'One: it bends under pressure — social pressure from the user was enough to restore the invention. Two: it cannot make the model *know* anything; it only changes the tone around ignorance, so it cannot fix a missing-evidence problem. The structural fix is supplying verified source text and a refusal path. A strong answer also notes the guardrail is model-dependent, not a control.'],

/* ================= S05 Hallucination ================= */
['I017','S05',1,'mcq','Hallucination is best understood as:',
 ['A rare bug that better models eliminate','The default behaviour of a prediction machine at the edge of its knowledge','A sign of corrupted training data','A failure of the retrieval layer only'],1,
 'It is not a glitch. A text-continuation machine produces the most plausible continuation; at the edge of knowledge, plausible means well-formatted invention.'],
['I018','S05',3,'mcq','You require an "amount" field, typed strictly as a number, and feed a document containing no amount. The model returns 42000. What caused this?',
 ['A weak model','A retrieval failure','Your schema left no legal way to express "not present"','Temperature set too high'],2,
 'You compelled the invention by design. A nullable field or a status enum including insufficient_evidence removes the compulsion. Schema design is a hallucination control.'],
['I019','S05',2,'mcq','"The AI sounded confident" is evidence of:',
 ['Correctness','Good retrieval','Nothing at all','A well-written system prompt'],2,
 'Fluency is free. Confident, structured, well-formatted output is the machine\'s only mode of expression, and it looks identical whether or not the content is true.'],
['I020','S05',3,'multi','Which of these reduce invented content by removing the *cause* rather than discouraging the behaviour?',
 ['Supplying verified source text and instructing answer-only-from-context','Adding a nullable field and an explicit refusal branch','Adding "never invent details" to the system prompt','Requiring a verbatim supporting quote that can be checked against the source'],[0,1,3],
 'Evidence supply, refusal paths and checkable citations change the structure of the task. A "never invent" instruction is a request — useful, but it only discourages.'],

/* ================= S06 Chunking ================= */
['I021','S06',1,'mcq','Why can\'t the whole corpus go into every envelope? Give the two independent reasons.',
 ['It would be slow, and users dislike waiting','The context window is finite, and tokens cost money on every query','The model cannot read more than 10 pages','Embeddings would be inaccurate'],1,
 'Capacity and economics — and even what fits degrades answer quality when mostly irrelevant.'],
['I022','S06',2,'mcq','A chunk begins "the aforesaid amount shall be disbursed within sixty days." What is the specific problem?',
 ['It is too short','It is an orphan — meaningless without an antecedent that no longer travels with it','It contains a date','It will embed poorly due to legal language'],1,
 'The chunk depends on text that is now in a different chunk. It is hard to retrieve and, if retrieved, hard to use.'],
['I023','S06',3,'mcq','A chunk boundary falls between a rule and its exception. What is the most dangerous consequence?',
 ['Retrieval will be slower','The system can present the rule without its exception — confidently incomplete','The chunk will be too large','Embeddings will be less accurate'],1,
 'In compliance and legal contexts, confidently incomplete is often worse than absent, because it produces a wrong action rather than a request for help.'],
['I024','S06',3,'judge','Your corpus is service contracts with numbered clauses, provisos and annexures. Describe your chunking rule and what it sacrifices.',null,
 'Cut on clause boundaries so each piece carries a complete rule with its provisos attached — semantic chunking following the document\'s own anatomy. Pieces will be unequal in size, which is a feature: meaning does not come in uniform sizes. Sacrifices: cross-clause definitions ("as defined in clause 2") still orphan, so add a situating sentence (contextual retrieval); very long clauses may exceed a comfortable retrieval unit and need sub-splitting with overlap. A strong answer names the residual failure, not just the rule.'],

/* ================= S07 Keyword vs semantic ================= */
['I025','S07',1,'mcq','Keyword search is blind to:',
 ['Spelling','Meaning','Document length','Recency'],1,
 'It matches shared letters, not shared sense. "Reimbursement" and "disbursement of approved amounts" are strangers to it.'],
['I026','S07',3,'mcq','Which query type does keyword search handle *better* than semantic search?',
 ['"When do I get my money back?"','"Clause 4.2(b)"','"Can my manager approve more than the limit?"','A question asked in a second language'],1,
 'Exact strings — codes, section numbers, acronyms, policy IDs — are where keyword search is flawless and embeddings frequently fumble. This is the half of hybrid search that never dies.'],
['I027','S07',2,'mcq','Why does keyword search fail hardest on the users who most need self-service answers?',
 ['Those users type more slowly','The gap between document dialect and user dialect is widest for newcomers','Their questions are longer','They use mobile devices'],1,
 'The less fluent you are in the document\'s vocabulary, the more invisible its answers become — and newcomers and customers are the least fluent by definition.'],
['I028','S07',3,'multi','You are designing search for a customer-facing help centre and an internal legal research tool. Which statements are sound?',
 ['The help centre skews plain-language and synonym-heavy, favouring semantic retrieval','The legal tool has more exact-string queries — citations, section numbers — favouring a strong keyword leg','Both should run hybrid, but the fusion weighting need not be identical','One configuration should serve both, for consistency'],[0,1,2],
 'Query mix decides architecture. Forcing one configuration across two different query distributions optimises for neither.'],

/* ================= S08 Embeddings ================= */
['I029','S08',1,'mcq','An embedding is:',
 ['A compressed copy of the text','A list of numbers giving the text an address on a map of meaning','A summary generated by the model','An index of keywords'],1,
 'An address, roughly a thousand numbers long, such that similar meanings receive nearby addresses.'],
['I030','S08',2,'mcq','You forget to declare input_type as "query" for questions and send everything as "passage". What happens?',
 ['An error is returned','Nothing — the parameter is cosmetic','Retrieval quality degrades silently','Embeddings are returned at the wrong dimension'],2,
 'No error, just worse results. The model maps questions and passages with matching-but-different projections; skipping the declaration is the classic silent degradation.'],
['I031','S08',3,'mcq','A vendor slide reads "1024-dimensional state-of-the-art embeddings." What is the only useful response?',
 ['Ask for 2048 dimensions','"Measured how, on whose questions, in which languages?"','Ask which GPU they run on','Accept it as a quality signal'],1,
 'Dimensionality is a specification, not evidence. Retrieval quality on your documents and your users\' phrasing is the claim that needs numbers.'],
['I032','S08',3,'num','Two texts have cosine similarity 0.78, and a third pair scores 0.19. Roughly how many of these pairs would you expect to be near-synonyms in the same professional domain? Answer with a count (0, 1 or 2).',
 ['pairs','Judge from the scores'],[1,1],
 'One. High cosine (commonly 0.5–0.8 for related domain terms) indicates the same neighbourhood; 0.19 is a distant suburb. Exact thresholds vary by model — what matters is the gap, not the absolute number.'],

/* ================= S09 Hybrid / rerank ================= */
['I033','S09',2,'mcq','Reciprocal rank fusion, in plain words:',
 ['Averages the similarity scores of both methods','Sums one-over-rank across both ranked lists, so placing well on either earns points','Takes the top result from the better method','Trains a model to combine the two'],1,
 'Rank 1 contributes a lot, rank 40 almost nothing, and appearing respectably on both lists beats winning one. No learning, one line of arithmetic, hard to beat.'],
['I034','S09',3,'mcq','Why is a reranker applied only to a shortlist rather than the whole corpus?',
 ['It is less accurate on large sets','It reads the question and each chunk together, so its cost is linear in the number of candidates','It requires the chunks to be sorted first','It can only process 50 items technically'],1,
 'Embeddings are precomputed and searched instantly, so they do the wide pass. The reranker is accurate because it reads both together — which is exactly why it cannot run against everything.'],
['I035','S09',3,'mcq','Which technique cures the orphan chunk you counted during chunking?',
 ['Reranking','Hybrid search','Contextual retrieval — a generated situating sentence prepended before embedding','Raising k'],2,
 'The orphan becomes findable because its address moves into the right neighbourhood. One cheap call per chunk at indexing time; nothing at query time.'],
['I036','S09',3,'mcq','Which lever improves cost and quality simultaneously?',
 ['Raising k','Reranking, because it lets you lower k while raising precision','Enabling reasoning','Increasing chunk size'],1,
 'Almost every other lever trades one against the other. Retrieve wide, rerank narrow, then send fewer but better chunks.'],

/* ================= S10 Metadata / versions ================= */
['I037','S10',2,'mcq','Your corpus contains both the 2024 and 2026 versions of a policy. Which technique saves you?',
 ['A better embedding model','Reranking','A metadata filter on version or status','Larger chunks'],2,
 'No embedding model can detect that a rule was repealed. Semantic similarity will retrieve the obsolete text with a high, confident score. This is ordinary database work and it beats every clever technique.'],
['I038','S10',3,'multi','Which failures can metadata filtering prevent that no retrieval-quality technique can?',
 ['Superseded document versions being quoted as current','Content from a department the user may not see','A question phrased in the user\'s own words failing to match','Out-of-date figures being retrieved alongside current ones'],[0,1,3],
 'Recency, scope and access are properties of the record, not of its meaning. Phrasing mismatch is exactly what semantic retrieval is for.'],
['I039','S10',3,'judge','Before indexing a new corpus, what metadata do you require, and why each?',null,
 'At minimum: document identity and version (to avoid quoting superseded rules), effective and expiry dates (recency), status such as current/draft/repealed, owning department or scope (access and relevance filtering), and document type (to route query classes). Each maps to a failure no embedding can catch. A strong answer notes that filtering happens *before* scoring, and that missing metadata cannot be retrofitted cheaply once a corpus is embedded.'],

/* ================= S11 Ground truth ================= */
['I040','S11',1,'mcq','Ground truth is:',
 ['The model\'s most confident answer','A pre-verified set of questions, correct answers, and their locations in the corpus','The raw source documents','The system\'s average accuracy'],1,
 'The answer key, written before the exam. No ground truth, no evaluation — only vibes.'],
['I041','S11',3,'mcq','Why does an unanswerable question deserve a permanent seat in every ground-truth set?',
 ['It makes the score look more realistic','It is where retrieval-never-says-no meets the confident liar — the compound failure','It tests the embedding model','It balances the difficulty distribution'],1,
 'A system\'s behaviour at that point *is* its safety profile, and only a deliberate test row ever measures it.'],
['I042','S11',3,'mcq','Your ground truth scores 9/9 at k=3 on the first attempt. What is the most likely explanation?',
 ['The system is excellent','You wrote the questions while reading the chunks, so they use the document\'s own vocabulary','k is too high','The embedding model is well suited'],1,
 'Questions written from the chunks test lexical overlap, not retrieval. Rewrite several in a genuine user\'s words without looking at the document, then re-grade.'],
['I043','S11',3,'judge','Your offline eval reads 92% but users are complaining. Give the most likely cause and the fix.',null,
 'The ground truth does not resemble real traffic — most likely written by the team, in the document\'s vocabulary, without the vagueness, follow-ups and out-of-scope questions real users produce. The fix is to sample real production queries into the eval set, which is the flywheel turning: traffic → error analysis → new eval cases. A strong answer distinguishes offline eval (does it pass the key) from online eval (are users better off) and notes both are required.'],

/* ================= S12 Precision/recall ================= */
['I044','S12',1,'mcq','Of everything that mattered, how much did the system fetch? This is:',
 ['Precision','Recall','Accuracy','F1'],1,
 'Recall = missed files. Precision = buried desk. The office-assistant story keeps them straight.'],
['I045','S12',2,'mcq','You raise k from 3 to 8. What happens?',
 ['Both precision and recall rise','Recall rises, precision falls, token cost rises','Precision rises, recall falls','Nothing changes without re-indexing'],1,
 'Fetch more and you miss fewer but bury deeper — and you pay roughly 8× the retrieval tokens per query, forever.'],
['I046','S12',3,'mcq','For a customer-facing answer bot, which failure is the more expensive one?',
 ['"I could not find this — please contact us"','A confidently wrong answer about eligibility','Slightly slow responses','Retrieving four chunks instead of three'],1,
 'Wrong answers are catastrophic customer-facing and survivable internally; "cannot find" is the reverse. That asymmetry decides your k — and the decision belongs to whoever owns the use case.'],
['I047','S12',3,'judge','You measure 6/9 hits at k=1, 8/9 at k=3, 9/9 at k=8, with relevant fractions of 6/9, 11/27 and 14/72. Which k do you ship for an internal drafting aide, and why?',null,
 'k=3 or k=8, leaning k=8. For a drafting aide the reviewing professional catches imperfect drafts, so a buried desk is survivable, whereas a tool that fails to surface the right material gets abandoned. k=8 buys the last hit but costs ~2.7× the tokens of k=3 for a 1-hit gain and a precision collapse to 19% — so a strong answer names k=3 as the value choice and k=8 as defensible if latency and budget permit, and says it would re-decide using a reranker to get k=3 volume at k=8 recall.'],

/* ================= S13 Judge design ================= */
['I048','S13',2,'mcq','Before trusting an LLM judge, the one non-negotiable step is:',
 ['Using the largest available model','Measuring its agreement with human labels on a representative set','Running it at temperature 0','Averaging three judges'],1,
 'A judge you have not evaluated is not a measurement instrument. It is a second opinion from the same species of machine that produced the answer.'],
['I049','S13',3,'mcq','You pad a correct answer with hedging and structure, changing no claims. The judge\'s score rises. This is:',
 ['Correct behaviour — clearer answers are better','Verbosity bias','Position bias','Self-preference bias'],1,
 'Longer answers score higher all else equal. It invalidates a great many published evaluation numbers, and you can reproduce it in five minutes.'],
['I050','S13',3,'multi','Which judge design choices resist known biases?',
 ['Grade one narrow dimension per call rather than holistic quality','Require the judge to quote the specific unsupported claim','Use pairwise comparison with randomised presentation order','Ask for a 1–10 quality score and average many runs'],[0,1,2],
 'Narrow rubrics, forced evidence and randomised pairwise comparison all reduce bias. Averaging a vague holistic score produces a stable number that is stably wrong.'],
['I051','S13',3,'mcq','Your judge agrees with your human labels 6/10, and the disagreements are scattered with no pattern. What should you conclude?',
 ['Usable — 60% is above chance','Unusable — random error cannot be corrected for','Usable if you always round the score up','The humans are wrong'],1,
 'A judge that is systematically lenient on one failure type is usable *if you know that*. A judge whose errors are random carries no signal you can correct.'],

/* ================= S14 Error analysis ================= */
['I052','S14',2,'mcq','Error analysis, done properly, is mostly:',
 ['Writing evaluation code','Reading real outputs against their sources and writing plain-language notes','Running benchmark suites','Tuning retrieval parameters'],1,
 'It is reading, not coding — and it is the highest-leverage activity in applied AI precisely because almost nobody does it.'],
['I053','S14',3,'mcq','Why does a failure taxonomy from your own traffic beat adding more benchmark evals?',
 ['Benchmarks are poorly constructed','Benchmarks measure someone else\'s failure distribution, not your users, documents or corpus pathologies','Benchmarks are expensive','Taxonomies are faster to build'],1,
 'Your taxonomy tells you what to fix and gives you countable categories. A benchmark tells you that something is wrong, on someone else\'s data.'],
['I054','S14',3,'order','Put the flywheel in order, starting from what you already have running.',
 ['Production traffic','Error analysis on sampled outputs','New eval cases added to the suite','A targeted fix','Measured improvement'],[0,1,2,3,4],
 'Each turn makes the eval suite a better model of reality — the only asset in an AI product that appreciates. Models change every few months; your ground truth and taxonomy survive.'],

/* ================= S15 Calibration ================= */
['I055','S15',2,'mcq','Why does the book insist you write a prediction before every measurement?',
 ['To make the exercise take longer','Because the gap between guess and measurement is the lesson; without the guess a number is just a number','To create documentation','To compare against other learners'],1,
 'Most people over-predict, often badly. The recorded gap is what stops a demo from ever closing a decision in your presence again.'],
['I056','S15',3,'mcq','Across twelve logged predictions your measured values are consistently lower than your guesses. The correct response is:',
 ['Stop predicting — it is discouraging','Adjust future estimates downward and treat your own confidence as a known bias','Choose easier things to predict','Conclude the systems are underperforming'],1,
 'A known personal calibration curve is usable. This is the one skill in the book that compounds directly into better judgment in rooms where nobody is measuring anything.'],
['I057','S15',3,'judge','You predicted 8 of 9 questions would retrieve a correct chunk at k=3. You measured 6. Write the one sentence this gap earns.',null,
 'Something in the shape of: "I over-predicted retrieval quality by 22 percentage points on documents I know well, which means my intuition about whether a demo is working is unreliable and I will not accept a demo as evidence again." The strong answers name the size of the gap, the direction, and a behavioural consequence — not just "I was wrong."'],
];

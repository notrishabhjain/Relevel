/* Part III — The Instrument Panel (Chapters 14–18)
   The product-management half: measurement at scale, money, modality,
   the paper trail, and shipping. */

window.PART3 = [
{
  id:'ch14', num:14, part:3, minutes:70, labs:['judge'],
  title:'The Judge and the Flywheel',
  concept:'Ten questions and a pencil do not scale to ten thousand queries a week. Build a grader — then grade the grader.',
  story:[
    ['p','Chapter 6 gave you the only honest foundation: verified expectations, written before the trial. It also gave you a method that stops working at about fifty rows. Real products receive thousands of queries a week, ship weekly, and change models twice a year. Something has to scale, and it cannot be your evenings.'],
    ['p','There are exactly three ways to grade an AI output, and every evaluation system in existence is a blend of them.'],
    ['tb',['Grader','Cost','Where it works','Where it fails'],[
      ['<strong>Programmatic</strong> — code checks the output','Nearly free','Schema validity, required citations, forbidden strings, numeric tolerance, latency','Anything requiring judgement'],
      ['<strong>Human</strong> — a person reads and grades','Very expensive','Everything. The gold standard by definition','Slow, inconsistent between graders, cannot run on every release'],
      ['<strong>Model-as-judge</strong> — an LLM grades the output','Cheap and fast','Fluency, relevance, groundedness, rubric adherence, pairwise preference','Systematically biased in ways you must measure']
    ]],
    ['p','Programmatic checks are underrated and should carry more of your suite than they do. A great many quality failures are shape failures: no citation, a fabricated chunk id, a number outside a plausible range, an answer to a question the system should have refused. All of that is code, and code is free to run on every commit.'],
    ['q','I041','I042'],
    ['p','Model-as-judge is where the leverage is, and it comes with one non-negotiable condition.'],
    ['key','A judge you have not evaluated is not a measurement instrument. It is a second opinion from the same species of machine that produced the answer.'],
    ['lab','judge'],
    ['q','I048'],
    ['p','The condition is <strong>agreement</strong>: grade some set — fifty is a decent start — by hand, have the judge grade the same set, and compute how often they concur. Below rough agreement with your own labels, the judge\'s output is noise wearing a percentage sign. This step is skipped almost universally, and it is the difference between an eval suite and a comfort blanket.'],
    ['pred',{id:'ch14-agree',short:true,ph:'A fraction, like 7/10',
      ask:'Commit before you build one. You write a judge prompt, grade fifty outputs by hand, and have the judge grade the same fifty. How often will it agree with you the first time?',
      reveal:'Six or seven out of ten is typical for a first attempt, and it is not a disaster — it is data. What matters far more than the number is the <em>shape</em> of the disagreement. If the misses cluster (“it marks every hedged answer as correct”), you have found a fixable bias. If they are scattered with no pattern, your own grading criteria are ambiguous, and no amount of judge-prompt tuning will fix that.',
      then:'That distinction — clustered versus scattered disagreement — decides whether you fix the judge or fix your definition of good.'}],
    ['q','I051'],
    ['p','Judges carry known, reproducible biases, and you should expect to find them tonight: <strong>verbosity bias</strong> (longer answers score higher, all else equal), <strong>position bias</strong> (in a pairwise comparison, whichever is shown first wins more often), <strong>self-preference</strong> (a model favours text in its own style), and <strong>leniency drift</strong> on vague rubrics. The mitigations are unglamorous and effective: a specific rubric with concrete criteria instead of “rate 1–10”; pairwise comparison instead of absolute scoring; randomised presentation order; and a requirement that the judge cite the span it based its verdict on.'],
    ['q','I049','I050'],
    ['p','Now the part that produces most of the improvement, and it is not a technique.'],
    ['key','<strong>Error analysis</strong> — reading a hundred real outputs and writing down what went wrong in your own words, then clustering those notes into a taxonomy — is the highest-leverage activity in applied AI. It is reading, not coding, and it is the one thing almost nobody does.'],
    ['q','I052','I125'],
    ['try',{id:'ch14-taxonomy',mins:8,min:70,rows:6,
      task:'Do a miniature version now. Take ten real outputs from something you own — support replies, search results, generated summaries, anything. For each, write one sentence in your own words about what went wrong, or “fine”. Then group the sentences and name the groups. Write the groups and their counts here.',
      ph:'group — count — one example sentence',
      after:'The discipline that makes this work is writing the sentence <em>before</em> reaching for a category, because a category chosen first quietly reshapes what you see. Real taxonomies come out lumpy and specific — “retrieved the right document but the wrong clause: 4”, “answered a question the user did not ask on follow-ups: 3”, “correct but cites a chunk that does not contain the claim: 2”. That lumpiness is the value: it is a ranked list of what to fix, derived from your traffic rather than someone else’s benchmark, and the counts are your roadmap.'}],
    ['q','I053','I126'],
    ['p','Your clusters become your eval suite. A failure taxonomy derived from your own traffic — “retrieved the right document but the wrong version,” “answered a question the user did not ask,” “correct but unusable format,” “refused when it should have answered” — tells you exactly what to fix and gives you the categories to measure. Generic benchmarks cannot do this, because they do not have your users.'],
    ['p','That is the <strong>flywheel</strong>: production traffic → error analysis → new eval cases → a fix → measured improvement → more traffic. Each turn makes the eval suite a better model of reality, which is the only asset in an AI product that appreciates. Models change every few months; your ground truth and failure taxonomy are what survive.'],
    ['q','I054'],
    ['c','Offline and online are different questions','Offline eval asks “does it pass the answer key?” before release. Online eval asks “are users better off?” after — measured in resolution rate, escalation rate, edit distance between draft and sent version, task completion. Offline eval can be perfect while the feature fails online. Both are required; only the second one pays.'],
    ['q','I043'],
  ],
  words:[
    ['LLM-as-judge','Using a model to grade outputs against a rubric.'],
    ['Judge agreement','How often the judge concurs with human labels on the same set. The number that makes a judge usable.'],
    ['Rubric','Explicit, concrete grading criteria. Replaces “rate 1–10.”'],
    ['Pairwise comparison','Judging “which of these two is better” rather than assigning an absolute score. More reliable.'],
    ['Verbosity / position bias','Judges favour longer answers, and whichever candidate is presented first.'],
    ['Error analysis','Reading real outputs and open-coding failures into a taxonomy. The highest-leverage activity in the field.'],
    ['Failure taxonomy','Your named categories of failure, derived from your own traffic.'],
    ['Regression suite','The fixed set of cases that must pass before any release ships.'],
    ['Offline vs online eval','Against an answer key before release, versus user outcomes after.'],
    ['Drift','Quality changing over time as inputs, users, or the provider\'s model change beneath you.']
  ],
  handson:[
    {h:'Step 1 — Free Checks First', b:[
      ['p','New notebook <code>chapter-14</code>. Before any judge, write the programmatic checks your Chapter 8 structured output makes possible.'],
      ['code','def programmatic_checks(record, retrieved_ids):\n    issues = []\n    if record["found"] and not record.get("source_chunk_ids"):\n        issues.append("claimed found but cited nothing")\n    for cid in record.get("source_chunk_ids", []):\n        if cid not in retrieved_ids:\n            issues.append(f"cited chunk {cid} that was never retrieved")\n    q = record.get("supporting_quote", "")\n    if q and not any(q[:40] in chunks[i] for i in retrieved_ids):\n        issues.append("quote not found verbatim in any retrieved chunk")\n    return issues'],
      ['x','Run it over your ten Chapter 6 answers. That last check — quote-not-verbatim — catches fabricated citations for free, forever, on every release. It is the cheapest quality control in this entire book and it required no judge at all.']
    ]},
    {h:'Step 2 — Write a Judge With a Rubric', b:[
      ['code','JUDGE = """You are grading an answer against a source passage.\n\nPassage:\n{ctx}\n\nQuestion: {q}\nAnswer: {a}\n\nGrade GROUNDEDNESS only — is every claim in the answer supported by the passage?\nRespond as JSON:\n{{"verdict": "grounded" | "partially_grounded" | "unsupported",\n  "unsupported_claim": "<quote the first unsupported claim, or empty>"}}\nDo not reward length, fluency, or confidence."""\n\ndef judge(q, a, ctx):\n    r = client.chat.completions.create(\n        model="meta/llama-3.1-8b-instruct", temperature=0,\n        messages=[{"role":"user","content":JUDGE.format(ctx=ctx, q=q, a=a)}]\n    )\n    return json.loads(r.choices[0].message.content)'],
      ['x','Note the design: one narrow dimension, a forced quote of the offending claim, and an explicit instruction against the known biases. A judge asked to “rate quality 1–10” would produce numbers you cannot act on.']
    ]},
    {h:'Step 3 — Grade the Judge', b:[
      ['p','This is the step everyone skips. Hand-label all ten of your Chapter 6 answers as grounded / partially / unsupported. Then run the judge on the same ten and compare.'],
      ['code','agree = sum(1 for i in range(10) if human_labels[i] == judge_labels[i])\nprint(f"agreement: {agree}/10")\nfor i in range(10):\n    if human_labels[i] != judge_labels[i]:\n        print(f"  Q{i}: human={human_labels[i]} judge={judge_labels[i]}")'],
      ['x','Look at the disagreements specifically — they are more informative than the score. A judge that is systematically lenient on one failure type is usable if you know that; a judge whose errors are random is not usable at all.'],
      ['c','Predict first','Before running: what agreement will you get out of 10? Log it. Then note whether your disagreements are systematic or scattered.']
    ]},
    {h:'Step 4 — Prove Verbosity Bias On Your Own Judge', b:[
      ['p','Take one correct, concise answer. Produce a padded version — same claims, three times the words, more hedging and structure. Judge both.'],
      ['x','The padded version frequently scores at least as well, often better, despite containing no additional correct information. You have now personally measured a bias that invalidates a great many published evaluation numbers.']
    ]},
    {h:'Step 5 — Error Analysis, By Hand', b:[
      ['p','Collect 20 outputs from your Chapter 12 pipeline over varied questions. Read every one against its source. For each failure write a plain-language note — <em>not</em> a category, a sentence. Then cluster the notes.'],
      ['x','You will end with 4–7 named clusters. That is your failure taxonomy, and it is worth more than any benchmark. Count each cluster; the largest is your next sprint. Pin the list — Chapter 17 needs it as your known-limitations section and Chapter 18 needs it as your regression suite.']
    ]}
  ],
  wrong:[
    ['Judge returns prose instead of JSON','No schema constraint','Apply Chapter 8. A judge is a structured-output task like any other.'],
    ['Judge agrees with you 10/10','Set too easy or too small','Add borderline cases — partially grounded answers are where judges and humans actually diverge. Perfect agreement on easy cases is not evidence.'],
    ['Judge and human disagree wildly','Rubric is vague, or the judge model is too small','Narrow to one dimension per judge call and require the offending quote. If it persists, the judge model is not adequate — a real, reportable finding.']
  ],
  homework:[
    ['The eval pyramid','Draw three tiers for your feature: programmatic checks (run on every commit), judge evals (run on every release), human review (run on a sample, weekly). Put a number and a frequency on each tier. Most teams have only the middle one, and it is the most expensive place to live.'],
    ['Five blocking cases','From your taxonomy, write the five cases that would block a release. Each needs a precise pass condition — not “answers well” but “returns found=false and cites nothing.” These five are the most durable artifact in this chapter; they will outlive the model you wrote them for.'],
    ['Explain it upward','4–5 sentences — why an AI feature needs a regression suite even though nobody changed the code, and what changed instead.']
  ],
  check:[
    ['Someone proposes replacing human review with an LLM judge to save time. What is the one condition?','Measured agreement with human labels on a representative set, including borderline cases. Without that number the judge is not an instrument, and the saving is imaginary.'],
    ['Name two judge biases and the mitigation for each.','Verbosity bias — use a rubric on a single dimension and require the offending quote, not a holistic score. Position bias — use pairwise comparison with randomised order, and run both orders.'],
    ['Why does error analysis beat adding more benchmark evals?','Because benchmarks measure someone else\'s failure distribution. Your taxonomy comes from your users, your documents, and your corpus\'s specific pathologies — and it tells you what to fix, not just that something is wrong.'],
    ['Your offline eval is at 92% and users are complaining. What is the most likely explanation?','Your ground truth does not resemble real traffic. Offline and online measure different questions; the fix is to sample real queries into the eval set — which is the flywheel turning.']
  ],
  red:['Judge never validated against human labels','Verbosity bias inflating eval scores','Offline eval that does not resemble real traffic']
},

{
  id:'ch15', num:15, part:3, minutes:60, labs:['costmodel'],
  title:'The Meter',
  concept:'Chapter 1 gave you the receipt. Build the bill — including the four multipliers nobody puts in the business case.',
  story:[
    ['p','You have read a receipt since Chapter 1. Now you build the bill, because at some point somebody senior will ask what this costs at scale, and the answer “it depends on tokens” ends careers slowly.'],
    ['p','The base formula is arithmetic:'],
    ['code','cost_per_query = (input_tokens  × input_rate)\n               + (output_tokens × output_rate)\n\nmonthly = cost_per_query × queries_per_month'],
    ['p','That is the number in most business cases, and it is wrong by a factor that is routinely between three and twenty. The error is never in the formula. It is in what gets left out of <code>input_tokens</code> and out of <code>queries</code>.'],
    ['pred',{id:'ch15-mult',short:true,ph:'A multiple, like 5×',
      ask:'Commit a number. A business case quotes cost per query using only input tokens × rate plus output tokens × rate. By what factor is that figure typically wrong once the system is real?',
      reveal:'Routinely between three and twenty times too low. The base formula is not wrong arithmetic — it is arithmetic over the wrong quantities, because it prices a single clean call and real features do not make single clean calls.',
      then:'The four multipliers that close the gap are all chapters you have already done: retrieved volume, retries, agent steps, and reasoning tokens. Each is a decision someone made, which means each is a lever.'}],
    ['p','<strong>The four multipliers.</strong> Each is a chapter you have already done:'],
    ['tb',['Multiplier','Where it comes from','Typical effect'],[
      ['<strong>k</strong> — retrieved chunks','Ch. 6','k=8 instead of k=3 nearly triples input tokens on every query, forever'],
      ['<strong>Retries</strong>','Ch. 8','A 10% validation-retry rate re-sends the whole envelope — more than 10% added cost'],
      ['<strong>Agent steps</strong>','Ch. 9','A 6-step agent re-sends a growing conversation 6 times — often 10–20× a single call'],
      ['<strong>Reasoning tokens</strong>','Ch. 11','Billed at output rates and frequently exceeding the visible answer several times over']
    ]],
    ['lab','costmodel'],
    ['q','I003'],
    ['p','A feature quoted at ₹0.40 per query using the base formula, with k=8, a 12% retry rate, a 4-step agent, and reasoning on by default, does not cost ₹0.50. It costs several rupees. That gap is the difference between a viable feature and one quietly killed in month four.'],
    ['q','I100'],
    ['p','<strong>The five levers</strong> that move the number, roughly in order of how much they move it:'],
    ['l',['<strong>Model choice.</strong> Rates across a provider\'s catalogue vary by one to two orders of magnitude. This dwarfs every other lever, which is why it deserves the measurement in Chapter 11 rather than a preference.','<strong>Routing and cascades.</strong> Send everything to a cheap model first; escalate only what fails a check. If 80% of traffic is a lookup (and Chapter 11 told you it is), you are paying premium rates for work a small model does correctly.','<strong>k and context size.</strong> Every token you do not send is free forever. Chapter 12\'s reranker lets you cut k while <em>raising</em> quality — the rare lever that improves both sides.','<strong>Caching.</strong> Chapter 10\'s stable-first ordering. Free money, requiring only that you order the envelope correctly.','<strong>Batching.</strong> Where latency permits, batch endpoints are often materially cheaper. Overnight enrichment does not need an interactive price.']],
    ['q','I099','I004'],
    ['try',{id:'ch15-model',mins:6,min:60,rows:5,
      task:'Build the loaded number for something real. Pick a feature. Estimate input and output tokens per query, apply the four multipliers with the values your design actually uses, multiply by your monthly volume — then write the one sentence you would say to a finance director, including what would make the number wrong.',
      ph:'base … × k … × retries … × steps … × reasoning … = per query … monthly … and it is wrong if …',
      after:'A strong answer is defensible rather than precise. It states the assumptions as assumptions, names which multiplier dominates (usually retrieved volume or agent steps), and says what would falsify it — a change in traffic mix, a higher retry rate than tested, a model price change. The sentence that earns trust is not “it costs ₹4 lakh a month”; it is “it costs ₹4 lakh a month at 300,000 queries with k=8 and a 12% retry rate, and the number moves most if retries exceed 20%.”'}],
    ['c','Latency is a cost too','p95, not median — Chapter 11. A feature that is cheap and slow can fail commercially exactly as thoroughly as one that is fast and expensive. Put both on the same page: cost per query, p50, p95. Three numbers, one line, every AI feature you ever propose.'],
    ['q','I101'],
    ['p','And the question that actually kills AI features, which has nothing to do with tokens: <strong>what is the gross margin at scale?</strong> If your feature costs ₹3 per query and the revenue it defends is ₹2, no amount of prompt optimisation saves it. That calculation belongs to the product manager, on day one, before the pilot — not to the engineer in month six.'],
    ['q','I005'],
    ['q','I102'],
  ],
  words:[
    ['Cost per query','The full loaded cost of one user-visible request, including retries and agent steps.'],
    ['Blended rate','Effective average cost across a mixed workload spanning multiple models.'],
    ['Cache hit rate','Fraction of input tokens served from a cached prefix.'],
    ['Model routing','Choosing a model per request based on the request\'s difficulty.'],
    ['Cascade','Cheap model first; escalate on a failed check. The main production cost pattern.'],
    ['p50 / p95 latency','Median and slow-tail response times. Users experience the tail.'],
    ['Unit economics','Cost and revenue per unit of use — the number that decides whether a feature survives.']
  ],
  handson:[
    {h:'Step 1 — Measure, Don\'t Estimate', b:[
      ['p','New notebook <code>chapter-15</code>. Run your Chapter 12 pipeline over the ten ground-truth questions and record real token counts.'],
      ['code','rows = []\nfor q in ground_truth_questions:\n    r = rag_answer_instrumented(q, k=3)   # returns .usage alongside the answer\n    rows.append({"q": q, "in": r.usage.prompt_tokens,\n                 "out": r.usage.completion_tokens})\n\navg_in  = sum(r["in"]  for r in rows) / len(rows)\navg_out = sum(r["out"] for r in rows) / len(rows)\nprint(f"avg in {avg_in:.0f} / avg out {avg_out:.0f} tokens per query")'],
      ['x','Real numbers from your real corpus. Everything after this is arithmetic on measured input rather than a guess dressed as a forecast.']
    ]},
    {h:'Step 2 — Build the Bill, With the Multipliers', b:[
      ['code','def monthly_cost(avg_in, avg_out, queries,\n                 in_rate, out_rate,           # per 1M tokens\n                 retry_rate=0.0, agent_steps=1,\n                 reasoning_ratio=0.0, cache_hit=0.0):\n    eff_in  = avg_in * agent_steps * (1 - cache_hit * 0.9)\n    eff_out = avg_out * agent_steps * (1 + reasoning_ratio)\n    per_q = (eff_in/1e6)*in_rate + (eff_out/1e6)*out_rate\n    per_q *= (1 + retry_rate)\n    return per_q, per_q * queries\n\nbase = monthly_cost(avg_in, avg_out, 10_000, 0.20, 0.60)\nreal = monthly_cost(avg_in, avg_out, 10_000, 0.20, 0.60,\n                    retry_rate=0.10, agent_steps=4,\n                    reasoning_ratio=2.0, cache_hit=0.0)\nprint(f"naive: {base[1]:.2f}   with multipliers: {real[1]:.2f}   ratio {real[1]/base[1]:.1f}x")'],
      ['x','A ratio commonly between 8× and 20×. Write it down. That single number is the most useful thing you can carry into a budget conversation, and it is why “we estimated the token cost” is not the same as “we estimated the cost.”'],
      ['c','Predict first','Before running Step 2: what multiple will the loaded cost be over the naive one? Log your guess.']
    ]},
    {h:'Step 3 — Build the Cascade', b:[
      ['p','Route cheaply first, escalate on a failed check. Use your Chapter 8 structured output — <code>found: false</code> or a missing quote — as the escalation trigger.'],
      ['code','def cascade(question, k=3):\n    small = rag_answer(question, k=k, model=CHEAP_MODEL)\n    if small["found"] and programmatic_checks(small, small["source_chunk_ids"]) == []:\n        return small, "cheap"\n    return rag_answer(question, k=k, model=STRONG_MODEL), "escalated"\n\nesc = sum(1 for q in ground_truth_questions if cascade(q)[1] == "escalated")\nprint(f"escalation rate: {esc}/{len(ground_truth_questions)}")'],
      ['x','An escalation rate — commonly 20–40%. Compute the blended cost and re-grade accuracy against your Chapter 6 key. You now have both halves of the trade: what the cascade saved, and what (if anything) it cost in quality.']
    ]},
    {h:'Step 4 — The Three Numbers', b:[
      ['p','For each configuration you have built — naive, k=8, cascade, reasoning-on — record exactly three numbers.'],
      ['tb',['Configuration','Cost / query','p50','p95','Accuracy (of 9)'],[['Baseline k=3','','','',''],['k=8','','','',''],['Cascade','','','',''],['Reasoning always on','','','','']]],
      ['x','This table is your Chapter 15 deliverable. It converts an architecture debate into a decision with a defensible basis, and it fits on one slide.']
    ]},
    {h:'Step 5 — The Margin Question', b:[
      ['p','One line of arithmetic, done honestly: what does this feature cost per user per month at your expected usage, and what is it worth per user per month?'],
      ['x','If the second number is not comfortably larger than the first, you have learned something before the pilot rather than after it. That is the entire purpose of this chapter.']
    ]}
  ],
  wrong:[
    ['Token counts vary wildly between questions','Normal — chunk sizes and answer lengths differ','Use the mean for planning and the maximum for capacity. Report both; a mean alone hides your worst case.'],
    ['Cascade escalates almost everything','Escalation trigger too strict','Loosen the check, or accept that your cheap model is genuinely unsuitable — which is itself the finding.'],
    ['Published rates do not match your bill','Reasoning tokens, cached tokens, and batch tiers priced differently','Exactly why this chapter exists. Ask the provider which token classes are billed at which rate — it is a real and answerable question.']
  ],
  homework:[
    ['The one-page unit economics memo','Your Step 4 table, the loaded-versus-naive ratio, the recommended configuration, and the margin line. One page. This is the document that gets AI features funded, and almost nobody writes it.'],
    ['The traffic mix','Estimate what fraction of your requests are simple lookups. Model the cascade saving at that mix. If you did Chapter 11\'s 2×2, you already have the number.'],
    ['Explain it upward','4–5 sentences — why the per-query cost in the vendor\'s slide is a floor, not an estimate, and what four things sit between it and your actual bill.']
  ],
  check:[
    ['Name the four multipliers that make a naive cost estimate wrong, with their chapters.','k / context size (Ch.6), validation retries (Ch.8), agent steps (Ch.9), reasoning tokens (Ch.11). Each multiplies the base, and they compound.'],
    ['What is a cascade and why does it usually work?','Route to a cheap model first and escalate only what fails a check. It works because the traffic distribution is lopsided — most production requests are lookups and extractions that a small model handles correctly (Ch.11\'s 2×2 measured this).'],
    ['Which lever improves both cost and quality at once?','Reranking (Ch.12) — it lets you lower k, which cuts tokens, while raising precision. Almost every other lever trades one against the other.'],
    ['A vendor quotes ₹0.30 per query. What do you ask?','At what k, with what retry rate, how many model calls per user-visible request, are reasoning tokens included, is that cached or uncached, and what is the p95 latency at that price? A per-query price without its configuration is not a price.']
  ],
  red:['Naive cost estimate missing the four multipliers','Feature with negative unit economics at scale']
},

{
  id:'ch16', num:16, part:3, minutes:55, labs:[],
  title:'Beyond the Text Box',
  concept:'Your corpus is not text. It is pages — with tables, stamps, signatures and scans that clean-text chunking silently destroys.',
  story:[
    ['p','Chapter 3 asked you to paste your document\'s text into an editable file. That instruction concealed an assumption, and in most real organisations the assumption is false.'],
    ['p','Real corpora are pages. Scanned contracts with signatures and stamps. Financial statements whose meaning lives entirely in a table\'s row-column geometry. Manuals where the safety warning is a red box beside a diagram. Screenshots pasted into tickets. Forms with handwriting in the margins.'],
    ['key','Everything you built assumes extracted text. The extraction step you skipped is where most real document-AI projects actually fail — quietly, upstream of anything you measured.'],
    ['pred',{id:'ch16-clean',short:true,ph:'A percentage',
      ask:'Commit before the chapter tells you. For a real enterprise corpus — contracts, statements, policies, scanned correspondence — what fraction is clean, digital, correctly-ordered text that needs no extraction work at all?',
      reveal:'Usually far less than a proposal assumes. A large share is scanned, and a large share of what is digital still has structure that plain text extraction destroys — multi-column layouts, tables, headers repeating on every page. The number matters because every estimate downstream of it inherits its error.',
      then:'This is the audit nobody runs, and it is the cheapest way to stop a document-AI project failing six weeks in.'}],
    ['p','The classic failure is the table, and it is worth understanding precisely because it is invisible. A text extractor reading a three-column table often produces a single flat line of numbers. The values all survive. The <em>relationships</em> — this number is this row\'s figure for this year — do not. Retrieval then works perfectly, the model answers fluently from the retrieved chunk, and the number it quotes belongs to the wrong column. Nothing in your pipeline can detect this, because nothing downstream of extraction ever sees the page.'],
    ['q','I078','I079'],
    ['p','Two approaches, and the choice is a real one:'],
    ['tb',['','OCR → text → your pipeline','Page image → vision model'],[
      ['Cost','Cheap','Higher per page'],
      ['Layout, tables, figures','Frequently destroyed','Largely preserved'],
      ['Chunking','Your Chapter 3 discipline applies','A page becomes the natural chunk'],
      ['Exact strings','Preserved well','Occasional misreads — 0/O, 1/l, 5/S'],
      ['Auditability','Text is quotable and diffable','Needs a citation back to the page region']
    ]],
    ['q','I080'],
    ['p','A practical middle path is common and effective: extract text for retrieval, and hand the model the <em>page image</em> for the final answer when the question concerns a table, figure, or form. Cheap search, accurate reading.'],
    ['p','<strong>Voice changes a different variable entirely.</strong> Not accuracy — latency. In text, a two-second response is fine. In speech, a two-second silence is a conversational failure; people start talking over it. The realtime stack budgets for the whole round trip — speech in, model, speech out — and the product problems are conversational rather than linguistic: when has the user finished speaking, what happens when they interrupt, what does the system say while it is thinking. Chapter 11\'s reasoning models are, for most voice surfaces, simply unaffordable at any accuracy.'],
    ['q','I076'],
    ['c','The audit nobody runs','Before any document-AI proposal: what fraction of the corpus is clean digital text, what fraction is scanned, and what fraction of the <em>answers people actually need</em> live inside tables and figures? That third number is usually the highest and is almost never asked. It decides the architecture, and it is one afternoon with a sample of fifty documents.'],
    ['try',{id:'ch16-audit',mins:6,min:60,rows:4,
      task:'Run the audit on a corpus you actually have. What fraction is clean digital text, what fraction is scanned, and what fraction contains tables or layout that carries meaning? Estimate if you must, but say how you would measure it properly — and what you would do differently if the scanned fraction turned out to be half.',
      ph:'clean … scanned … layout-bearing … how I would measure … what changes if scanned is 50%',
      after:'Measuring it properly means sampling — fifty documents drawn at random from real traffic, not fifty chosen by whoever is enthusiastic. If the scanned fraction is high, the architecture changes rather than the effort estimate: OCR quality becomes a first-class metric with its own ground truth, the extraction step needs its own eval, and the timeline gains a phase that most proposals leave out entirely. Saying this before the project starts is worth more than any retrieval technique in this book.'}],
    ['q','I081'],
  ],
  words:[
    ['Vision-language model (VLM)','A model that reads images and text together.'],
    ['OCR','Optical character recognition — converting page images to text, discarding most layout.'],
    ['Page-as-chunk','Treating a rendered page as the retrieval unit rather than a text span.'],
    ['Layout preservation','Keeping the spatial relationships — rows, columns, callouts — that carry meaning.'],
    ['Modality gap','Information present on the page but absent from its extracted text.'],
    ['Turn detection','Deciding when a speaker has finished — the core problem of voice interfaces.'],
    ['Barge-in','A user interrupting mid-response, which the system must handle gracefully.']
  ],
  handson:[
    {h:'Step 1 — Find Your Own Silent Error', b:[
      ['p','New notebook <code>chapter-16</code>. Take one page from your corpus containing a real table — financial, eligibility bands, a rate card. Extract its text with whatever tool you have, and look at the extracted string.'],
      ['x','Read it as a machine would. Can you reconstruct which figure belongs to which row and column from the text alone? Frequently: no. Write down the specific relationship that was destroyed.']
    ]},
    {h:'Step 2 — Ask a Question Only the Table Answers', b:[
      ['p','Run that extracted text through your Chapter 7 pipeline with a question whose answer sits at a specific row-column intersection.'],
      ['x','A confident answer, frequently with a number from an adjacent column or row. This is the compound failure of Chapters 2 and 4 arriving through a route you had not instrumented — and note that every metric in your Chapter 6 evaluation would have scored this as a retrieval success.'],
      ['c','Predict first','Before running: will your pipeline get the table question right? Log your prediction. This is one of the few in this book where confidence is usually misplaced in the other direction — people expect failure and are surprised by how <em>fluent</em> the wrong answer is.']
    ]},
    {h:'Step 3 — Hand It the Page Instead', b:[
      ['p','Render the same page as an image and give it to a vision-capable model with the same question.'],
      ['code','import base64\nwith open("page.png","rb") as f:\n    b64 = base64.b64encode(f.read()).decode()\n\nr = client.chat.completions.create(\n    model=VISION_MODEL, temperature=0,\n    messages=[{"role":"user","content":[\n        {"type":"text","text":"Answer only from this page. "\n                              "Quote the row and column labels you used."},\n        {"type":"image_url",\n         "image_url":{"url":f"data:image/png;base64,{b64}"}}\n    ]}]\n)\nprint(r.choices[0].message.content)'],
      ['x','Usually correct, and — because you demanded the row and column labels — checkable in seconds. That demand is Chapter 8\'s supporting-quote idea, translated into two dimensions.']
    ]},
    {h:'Step 4 — Verify Every Cell', b:[
      ['p','Ask the vision model to transcribe the entire table into a structured record (Chapter 8\'s schema). Then check every single cell against the page by eye.'],
      ['x','Expect a small number of errors — often in the least visually distinct cells: merged headers, footnote markers, empty-versus-zero. Count them. That error rate <em>is</em> your extraction quality number, and it belongs in every document-AI proposal you ever review.']
    ]},
    {h:'Step 5 — Audit the Corpus', b:[
      ['p','Sample 30 documents. Classify each: clean digital text, scanned image, or mixed. Then, separately and more importantly, sample 20 questions people actually ask and mark how many need a table or figure to answer.'],
      ['x','Two percentages. They decide whether your architecture is text-first, vision-first, or hybrid — and they take one afternoon to obtain instead of one quarter to discover.']
    ]}
  ],
  wrong:[
    ['No vision model available','Catalogue varies','Do Steps 1, 2 and 5 anyway — the extraction failure and the corpus audit are the transferable lessons, and neither needs a vision model.'],
    ['Image rejected as too large','Resolution or payload limits','Downscale to ~1500px on the long edge. Note the trade: too small and small print becomes unreadable, which is itself a finding about your corpus.'],
    ['Vision model misreads a code as O/0','A known, permanent class of error','Exactly why hybrid matters — Chapter 12\'s keyword leg is strong on exact strings precisely where vision is weak.']
  ],
  homework:[
    ['The corpus audit','Your two percentages from Step 5, with the method written down. One paragraph. Almost no AI proposal in your organisation will contain this, and it changes cost estimates by multiples.'],
    ['The extraction error rate','Your Step 4 cell-level number, with the specific cell types that failed. This is what “supports all document formats” should have to mean.'],
    ['Explain it upward','4–5 sentences — why a system can retrieve the right page and still quote the wrong number, and what that means for reviewing financial or tabular outputs.']
  ],
  check:[
    ['Why is a table the most dangerous thing in a document-AI corpus?','Because text extraction preserves the values while destroying the row-column relationships, producing a fluent, confident, wrong answer that every retrieval metric scores as a success.'],
    ['A vendor says “we support all document formats.” What do you ask?','Show extraction on ten of <em>our</em> worst pages — scanned, multi-column, tabular — and give me the cell-level error rate. Format support is a file-opening claim; extraction fidelity is the one that matters.'],
    ['Why does voice change the architecture rather than just the interface?','Because the latency budget collapses. A two-second pause is a conversational failure, which rules out reasoning models, long agent loops, and large retrieval passes on most voice surfaces.'],
    ['What is the cheapest thing you can demand of a vision model reading a table?','That it quote the row and column labels it used. It converts an unverifiable number into a four-second check — Chapter 8\'s supporting quote, in two dimensions.']
  ],
  red:['Table relationships destroyed at extraction','Right page retrieved, wrong cell quoted','Corpus assumed to be clean text']
},

{
  id:'ch17', num:17, part:3, minutes:60, labs:['systemcard'],
  title:'The Paper Trail',
  concept:'In 2027 an AI feature ships with documents attached. Most of them are product decisions wearing legal costume — which makes them yours.',
  story:[
    ['p','A conventional feature ships with code, tests, and a release note. An AI feature increasingly ships with a file of documents as well, and there is a common and expensive misunderstanding about who writes them.'],
    ['key','Almost every question in an AI governance file is a product question. What is it for, who does it affect, what happens when it is wrong, who reviews what, and what evidence exists that it works — these are not legal questions with legal answers. They are product decisions being written down, usually by someone who was not in the room when they were made.'],
    ['lab','systemcard'],
    ['q','I090'],
    ['p','The regulatory shape most of the world is converging on is <strong>risk tiering</strong>: obligations scale with the consequences of being wrong, not with the technology used. The EU AI Act made this shape famous, but the shape matters far beyond its jurisdiction, because it is simply a sensible way to allocate scrutiny — and because it is what your enterprise customers\' procurement teams have started asking about regardless of where you operate.'],
    ['tb',['Tier','Shape of the obligation','Typical examples'],[
      ['Prohibited','Not permitted at all','Social scoring, certain biometric categorisation'],
      ['High risk','Documentation, human oversight, accuracy evidence, logging, conformity assessment','Employment screening, credit, education access, essential services'],
      ['Limited / transparency','Disclose that it is AI; label synthetic content','Chatbots, generated media'],
      ['Minimal','General good practice','Most internal productivity tools']
    ]],
    ['p','Two things follow that most teams learn late. First, <strong>the tier is decided by the use case, not the model</strong> — the same RAG system is minimal-risk for internal FAQ and high-risk for benefit eligibility. Second, <strong>the tier changes when the use case changes</strong>, and use cases drift after launch without anyone re-opening the file.'],
    ['q','I091','I092'],
    ['p','What must exist, in practice, for anything above minimal risk:'],
    ['l',['<strong>A stated purpose and scope</strong>, including what the system is explicitly <em>not</em> for. The out-of-scope list prevents the drift above.','<strong>Data lineage.</strong> Which documents, obtained how, under what right to use, retained how long, and where physically stored.','<strong>An evaluation record.</strong> Your Chapter 6 ground truth, your Chapter 14 taxonomy, and the measured numbers with their k and their date. This is the part that does not exist unless someone did Chapters 6 and 14 — which is why so many governance files contain adjectives instead of numbers.','<strong>A human oversight design.</strong> Not “a human reviews the output,” but: which outputs, at what point, with what information visible, with the authority and the time to overrule. Oversight that cannot realistically be exercised is not oversight.','<strong>Known limitations.</strong> Your red-marked map, in prose. The single most credibility-generating section in any AI document.','<strong>Logging and an incident path.</strong> What is recorded per request, retained how long, and who does what when it goes wrong.','<strong>Change control.</strong> Model version pinned, system prompt versioned, eval re-run on change. Chapter 18\'s subject, written down here.']],
    ['q','I094','I131'],
    ['try',{id:'ch17-oversight',mins:6,min:60,rows:4,
      task:'Design oversight that survives contact with volume. Four thousand outputs a day, one reviewer. Write what that reviewer actually sees, which outputs reach them, and what they are able to do about it — then say why “a human reviews every output” is not an answer.',
      ph:'they see … routed by … can do … and reviewing everything fails because …',
      after:'Reviewing everything at that volume is a fiction that reads well in a governance file and is abandoned in week two — which is worse than not claiming it, because the file now misrepresents the control. The workable design is targeted: route by confidence, by risk tier of the action, and by disagreement between retrieval and answer. The reviewer must see the output <em>and</em> the evidence it came from — the retrieved chunks with their sources — because approving an answer you cannot check is not oversight. And they must be able to reject and correct, not merely observe; a review point with no lever attached is theatre.'}],
    ['q','I096','I132'],
    ['c','The deletion drill','A person exercises a deletion right. Their data sits in: the source document store, the chunk store, the vector index, the prompt cache, provider-side logs, your own request logs, and any eval set you built from real traffic. Trace all seven. Most teams discover at least two they cannot reach — and it is far better to discover that on a Tuesday afternoon than in response to a regulator.'],
    ['pred',{id:'ch17-delete',short:true,ph:'Name the store',
      ask:'A person exercises a deletion right. Their data is in the source document store, the chunk store, the vector index, your logs, your eval sets, and any cache. Before reading on: which one do teams forget?',
      reveal:'Eval sets and logs, most often — because they were copied for a good reason by someone who was not thinking about deletion, and nothing points back from them to the person. Caches are a close third, and prompt caches are the most invisible of all: they hold fragments of documents with no index by subject at all.',
      then:'This is why lineage is recorded at ingestion rather than reconstructed later. A deletion request you cannot satisfy is not a technical inconvenience; it is a compliance failure with a date attached.'}],
    ['q','I097','I098'],
    ['q','I134','I135'],
    ['p','Finally, the thing that is already happening in your organisation whether or not anyone has written it down: <strong>shadow AI</strong>. Staff are pasting internal documents into consumer chat tools right now. Prohibition does not work, because the tools are useful. A sanctioned, adequate alternative plus clear guidance about what may be pasted works considerably better, and “we banned it” is a statement about policy rather than about behaviour.'],
    ['q','I093'],
  ],
  words:[
    ['Risk tier','Obligation level set by consequence of error, not by technology.'],
    ['System card / model card','A structured document describing purpose, data, evaluation, limitations and oversight.'],
    ['Data lineage','Where data came from, under what right, held where, for how long.'],
    ['Human oversight','A specified, exercisable review point with authority to overrule.'],
    ['DPIA','A documented assessment of privacy impact before deployment.'],
    ['Subprocessor','A third party your provider passes data to. Inherited risk.'],
    ['Data residency','The physical jurisdiction where data is stored and processed.'],
    ['Audit trail','Durable records sufficient to reconstruct what happened and why.'],
    ['Shadow AI','Unsanctioned tool use by staff. A measurable reality, not a hypothetical.']
  ],
  handson:[
    {h:'Step 1 — Tier Your Own System', b:[
      ['p','Take the RAG system you built in Chapter 7 and place it in a real use case from your organisation. Assign a tier, and write one sentence justifying it. Then change the use case — internal FAQ to customer eligibility — and re-tier.'],
      ['x','The same code moves tiers. That is the lesson, and it is why tiering is a product conversation and not an engineering one.']
    ]},
    {h:'Step 2 — Write the System Card', b:[
      ['p','This is the chapter\'s deliverable, and it is mostly a matter of collecting what you already produced. Use the generator on this page, or write it by hand under these headings.'],
      ['l',['<strong>Purpose</strong> — what it does, for whom. Two sentences.','<strong>Explicitly out of scope</strong> — three to five bullets. The most valuable section.','<strong>Data</strong> — sources, right to use, retention, residency.','<strong>Evaluation</strong> — your Chapter 6 numbers, at a stated k, on a stated date, against a described ground truth.','<strong>Known limitations</strong> — your red marks, in plain sentences, each with the evidence that produced it.','<strong>Human oversight</strong> — which outputs are reviewed, by whom, seeing what, with what authority.','<strong>Logging &amp; incidents</strong> — what is recorded, retained how long, escalation path.','<strong>Change control</strong> — model pinned to a version, prompts versioned, eval re-run on change.']],
      ['x','One page. Notice what just happened: every section was already in your notebook. Chapters 6, 12, 13, 14 and 15 were the research; this is the write-up. Someone who skipped those chapters can only fill this page with adjectives.']
    ]},
    {h:'Step 3 — Run the Deletion Drill', b:[
      ['p','Pick one document in your corpus. List every place a copy or derivative of it exists, and beside each write the mechanism for removing it.'],
      ['tb',['Location','Removal mechanism','Can you actually do it?'],[
        ['Source document store','',''],['Chunk store','',''],['Vector index','',''],
        ['Prompt cache','',''],['Provider-side logs','',''],['Your request logs','',''],['Eval set built from traffic','','']
      ]],
      ['x','Count the rows where the honest answer is no. That count is a finding worth reporting today.']
    ]},
    {h:'Step 4 — Design Oversight That Can Be Exercised', b:[
      ['p','Take your highest-risk output. Specify the review point precisely: which outputs are reviewed (all, sampled, or those failing a check), what the reviewer sees (answer only, or answer plus retrieved chunks plus quote), how long they have, and whether they can actually overrule.'],
      ['x','Then ask the honest question: at your expected volume, is this review physically possible? A review of every output at 4,000 per day is not oversight; it is a sentence in a document. Chapter 8\'s structured output and Chapter 14\'s programmatic checks are what make sampled, targeted review real.']
    ]},
    {h:'Step 5 — The Vendor File', b:[
      ['p','For any AI vendor in your organisation, obtain four things in writing: the subprocessor list, the data-residency statement, whether your data trains their models and how to opt out, and the model-deprecation notice period.'],
      ['x','That last one is routinely omitted and is the subject of Chapter 18. A 30-day deprecation notice on a model your high-risk system is validated against is an operational emergency scheduled in advance.']
    ]}
  ],
  wrong:[
    ['“This is legal\'s job”','Common and expensive','Legal can assess a described system. They cannot describe it. Every factual line in the file comes from the product and engineering side, and the evaluation numbers come from nowhere else.'],
    ['“We are not in the EU”','Scope confusion','Your enterprise customers\' procurement questionnaires have converged on this shape regardless. The file is commercially useful even where it is not legally required.'],
    ['Cannot obtain evaluation numbers','Nobody built ground truth','Then the honest system card says “not evaluated,” which is itself the most useful sentence you could write. Go and do Chapter 6.']
  ],
  homework:[
    ['The completed system card','One page, all eight headings, real numbers from your own chapters. Of everything produced in this book, this is the artifact most likely to be read by someone senior.'],
    ['The deletion drill result','Your table with honest yes/no answers, plus one sentence per gap on what it would take to close it.'],
    ['Explain it upward','4–5 sentences — why AI governance paperwork is mostly product decisions being written down, and what cannot be written without having measured something first.']
  ],
  check:[
    ['Two teams deploy the identical RAG system. One is minimal risk, one is high risk. What differs?','The use case and its consequences. Internal FAQ versus benefit eligibility. Tier follows impact, never technology — which is why the tier can change without a line of code changing.'],
    ['Which section of a system card is hardest to fake, and why does that make it valuable?','Known limitations. Real ones come from having broken the system yourself and recorded the evidence. Generic ones read as generic instantly to anyone who has done the work — and the specific ones signal that everything else in the document was measured too.'],
    ['A vendor is SOC 2 certified. What does that tell you about their AI risk?','That they have security controls and audited processes. It says nothing about hallucination rate, retrieval quality, prompt-injection resistance, or model deprecation policy. Different question entirely — SOC 2 is about how they run their company, not how their model behaves.'],
    ['Your oversight design says a human reviews every output, at 4,000 outputs a day. What is wrong?','It is not exercisable, so it is not oversight — it is a sentence. Real designs sample, or review only outputs failing a programmatic check, and give the reviewer the retrieved evidence and the time to act on it.']
  ],
  red:['Governance file with adjectives instead of measurements','Oversight specified but not physically exercisable','Data reachable in stores you cannot delete from']
},

{
  id:'ch18', num:18, part:3, minutes:90, labs:['redmap','prd'],
  title:'The Instrument Panel Assembled',
  concept:'Nothing new — again, that is the point. Draw the 2027 system from memory, mark every place you broke it, and write the PRD.',
  story:[
    ['p','Chapter 7 ended with a pipeline and a red pen. This chapter ends with an instrument panel and a document — and, as before, nothing in it is new.'],
    ['p','A conventional PRD assumes deterministic behaviour: given this input, produce that output; QA verifies; done. Every assumption in that sentence fails here. Given this input, an AI feature produces a <em>distribution</em> of outputs, whose shape shifts when the provider updates a model you do not control.'],
    ['key','An AI PRD does not specify behaviour. It specifies a measured distribution of behaviour, the evidence that it was measured, and what happens when it drifts.'],
    ['q','I107'],
    ['p','Four things change concretely, and you have already built all four:'],
    ['tb',['Conventional PRD','AI PRD','Built in'],[
      ['Acceptance criteria as pass/fail','Eval thresholds on a named ground-truth set at a stated k','Ch. 6, 14'],
      ['QA test plan','Regression suite plus programmatic checks, run per release','Ch. 8, 14'],
      ['“Done” when features work','“Done” when measured at stated numbers, with known limitations written','Ch. 6, 17'],
      ['Rollback = redeploy previous build','Rollback = pinned model version, versioned prompts, and a kill switch','Ch. 10, 17']
    ]],
    ['lab','prd'],
    ['q','I117'],
    ['p','<strong>The deprecation treadmill</strong> deserves its own paragraph because it surprises everyone exactly once. Your provider will retire the model you validated against, on their schedule, with a notice period you did not negotiate. The migration is not a configuration change. It is a re-evaluation: run the ground truth, re-run the regression suite, re-test injection resistance, re-measure cost and latency, update the system card. Teams that own Chapter 6 do this in an afternoon. Teams that do not, discover during the migration that they never knew whether the old model was any good either.'],
    ['pred',{id:'ch18-deprecate',rows:3,ph:'What you re-run, and what you do not',
      ask:'Your provider gives you thirty days’ notice that the model behind your live feature is being retired. Before reading on: write what you re-run, in order, and what you can safely skip.',
      reveal:'Everything that was measured against the old model, because a model change invalidates measurements rather than merely shifting them: the full eval suite against ground truth, the judge’s agreement with your human labels (the judge is itself a model call), your cost model at the new rates and token behaviour, and your latency profile at p95. What you cannot skip is the judge — a judge validated against the old model is an uncalibrated instrument on the new one.',
      then:'This is why the eval suite is infrastructure rather than a launch artefact. Teams without one do not discover the problem in thirty days; they discover it in production.'}],
    ['q','I109'],
    ['p','<strong>Feedback instrumentation</strong> is where most AI products waste their most valuable asset. A thumbs-down with no context is nearly worthless: you cannot reproduce it, you do not know what was retrieved, and you cannot tell a wrong answer from a correct answer the user disliked. A thumbs-down attached to the full trace — query, retrieved chunk ids, scores, prompt version, model version, output — is a ready-made eval case. The difference is two days of engineering and it decides whether your flywheel (Chapter 14) turns at all.'],
    ['q','I110'],
    ['p','And the staged rollout, which is ordinary product practice with one addition: <strong>the kill switch is not a rollback.</strong> A rollback takes a deploy cycle; a kill switch is a flag that routes traffic to the non-AI path immediately. Every AI feature needs the non-AI path to still exist, and needs someone to have tested it recently.'],
    ['q','I108'],
    ['try',{id:'ch18-prd',mins:10,min:100,rows:8,
      task:'Write the acceptance criteria section of an AI PRD for one feature you own. Not prose — the numbers. What is measured, against which ground truth, at what threshold, and what happens when a number falls below it. Then add the one line most PRDs omit: what the kill switch turns off, and what the product still does afterwards.',
      ph:'metric — ground truth — threshold — action on breach … kill switch: …',
      after:'A strong section is falsifiable by someone who does not like you. It names the ground-truth set and who wrote it, gives thresholds as numbers rather than adjectives, and attaches an action to each breach — block release, page someone, degrade to a safe mode. The kill-switch line is the one that separates people who have run an AI feature from people who have specified one: a rollback returns to previous code, which does not help when the failure is a model behaviour that both versions share. A kill switch turns the AI path off and leaves a product that still functions — search without generated answers, a form without extraction, a queue without routing.'}],
    ['q','I118'],
    ['c','What this book did not teach you','Training and post-training. GPU economics and self-hosting. Multi-agent orchestration at scale. Formal verification. Synthetic data generation. Part IV takes up two things this list used to contain — the decision about fine-tuning and small models, and the interface a user actually meets — because both are yours to make rather than an engineer’s. The 2027 LATER page is on this site, and it is now, finally, permitted reading. Knowing precisely what you have not covered is the difference between a narrow expert and a pretender — and you can now name your gaps in your own handwriting rather than in someone else\'s marketing.']
  ],
  words:[
    ['AI PRD','A product specification whose acceptance criteria are eval thresholds on a named dataset.'],
    ['Eval threshold','The measured number required before release — acceptance criteria with teeth.'],
    ['Regression suite','Cases that must pass on every release, derived from real failures.'],
    ['Model pinning','Fixing an exact model version so behaviour does not change beneath you.'],
    ['Deprecation migration','The re-evaluation required when a provider retires your model.'],
    ['Kill switch','An immediate flag routing traffic to the non-AI path. Not a rollback.'],
    ['Canary / staged rollout','Releasing to a small traffic slice with online metrics watched.'],
    ['Trace','Query, retrieval, prompt version, model version, output — captured per request. The unit of debugging and of feedback.']
  ],
  handson:[
    {h:'Act 1 — The 2027 Map, From Memory', b:[
      ['p','Close everything. Blank page. Draw the full system — considerably larger than Chapter 7\'s.'],
      ['code','ingestion (extraction? layout? Ch.16)\n  → chunking + situating sentence (Ch.3, 12)\n  → embeddings + metadata (Ch.5, 12)\n  → [ query rewrite → hybrid retrieve → filter → rerank ] (Ch.12)\n  → context assembly: stable prefix | chunks | question (Ch.10)\n  → model call: routed cheap→strong, structured output (Ch.8, 11, 15)\n  → [ tools + step budget + write boundary ] (Ch.9)\n  → programmatic checks → judge → trace logged (Ch.14)\n  → human oversight point (Ch.17)\n  → answer + citation'],
      ['p','Beside every arrow, one line in your own words. Then take the red pen and mark every place you have <em>personally watched this fail</em>, with the chapter. Aim for twenty. You have earned more than twenty.'],
      ['x','Use the Red-Mark Map on this site to check yourself afterwards — but draw it on paper first. The gap between what you produced from memory and what the map lists is your revision plan.']
    ]},
    {h:'Act 2 — Write the PRD', b:[
      ['p','One real feature. Every section drawn from an artifact you already own — this is an assembly job, not a writing job.'],
      ['tb',['Section','Source'],[
        ['Problem &amp; user','Your own domain knowledge'],
        ['Scope and explicit non-goals','Ch.17 system card'],
        ['Acceptance criteria (eval thresholds at stated k)','Ch.6 ground truth + Ch.14 taxonomy'],
        ['Regression suite — five blocking cases','Ch.14 homework'],
        ['Security posture — trifecta audit and the leg you broke','Ch.13'],
        ['Unit economics — cost/query, p50, p95, margin line','Ch.15 table'],
        ['Human oversight design','Ch.17'],
        ['Rollout: canary %, online metrics, kill switch','This chapter'],
        ['Model pinning and migration plan','This chapter'],
        ['Known limitations','Your red map']
      ]],
      ['x','Read the finished document once. Every number in it was measured by you, on your documents. That is not a common property of PRDs in this field.']
    ]},
    {h:'Act 3 — Design the Feedback Capture', b:[
      ['p','Specify exactly what a single thumbs-down must capture for it to become an eval case without any further investigation.'],
      ['code','{ "query": "...", "rewritten_query": "...",\n  "retrieved": [{"chunk_id": 12, "score": 0.71}, ...],\n  "prompt_version": "v4", "model": "meta/llama-3.1-8b-instruct",\n  "k": 3, "output": {...}, "checks_failed": [],\n  "user_comment": "...", "timestamp": "..." }'],
      ['x','Compare against what your organisation currently captures. The gap is usually total, and closing it is the cheapest thing on this page.']
    ]},
    {h:'Act 4 — Rehearse the Migration', b:[
      ['p','Assume your model is deprecated in 30 days. Write the runbook: which suites re-run, which numbers must match within what tolerance, who signs off, what the rollback is if the new model is worse.'],
      ['x','Time-box the estimate. If your answer exceeds two days, the missing piece is Chapter 6 — a ground truth is what turns a migration from an ordeal into an afternoon.']
    ]},
    {h:'Act 5 — The Findings Page', b:[
      ['p','The last exercise in the book. One page, two halves.'],
      ['l',['<strong>What I now know breaks</strong> — your red marks, each with its evidence line: <em>saw it, Chapter X, my document, my numbers.</em>','<strong>What I still cannot judge</strong> — the honest list. Not a confession: your next syllabus, in your own handwriting.']],
      ['x','Then return to the very first page of your notebook — your Chapter 1 predictions. The distance between that page and this one is the only measurement of this book that matters.']
    ]}
  ],
  wrong:[
    ['“I can\'t remember twenty failure points”','Normal on the first attempt','Draw what you have, then open the Red-Mark Map. The ones you missed are your revision list — that is the exercise working, not failing.'],
    ['“My organisation won\'t accept eval thresholds as acceptance criteria”','Unfamiliarity, usually','Bring the Chapter 6 table and the Chapter 15 three numbers. Objections to eval thresholds dissolve on contact with a demonstration that the alternative is vibes.']
  ],
  homework:[
    ['The findings page','As above. One page, both halves, rough.'],
    ['The three deltas, second edition','From Chapter 7 you wrote three beliefs that changed. Write three more, from Part II and III: “I believed X; I measured Y; the difference changes how I will treat Z.”'],
    ['The final explain-it-upward','The entire 2027 system, six sentences, zero jargon — then, permitted at last, the closing line naming RAG, agents, evals and injection in one breath. Read it aloud once. That voice — plain, precise, unimpressed by hexagons — is what these eighteen chapters were for.']
  ],
  check:[
    ['What replaces pass/fail acceptance criteria in an AI PRD, and why?','Eval thresholds on a named ground-truth set at a stated k, because the system produces a distribution of outputs rather than a fixed one. “It works” is not a testable claim; “91% at k=3 on the November ground truth, with zero unsupported-citation failures” is.'],
    ['Your provider deprecates your model in 30 days. What are the four things you re-run?','The ground truth (Ch.6), the regression suite and judge (Ch.14), the injection tests (Ch.13), and the cost and latency measurements (Ch.15). Then update the system card (Ch.17). If you own those artifacts it is an afternoon.'],
    ['Why is a kill switch not the same as a rollback?','A rollback takes a deploy cycle; a kill switch immediately routes traffic to the non-AI path. Which means the non-AI path must still exist and must have been tested recently — a requirement teams forget within two quarters of launch.'],
    ['Of all eighteen chapters, which single artifact would you carry into a board-level AI discussion?','The red-marked map with evidence lines, or the Chapter 15 three-number table. Both demonstrate the same rare thing: first-hand measurement of where this specific system breaks and what it costs. Anyone can draw the boxes. The red ink is still the credential.']
  ],
  red:[]
}
];

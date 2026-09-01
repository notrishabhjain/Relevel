/* Part III — Measuring it, costing it, shipping it (Chapters 14–18)
   The product half: checking quality at volume, what it really costs,
   documents that are pictures, the paperwork, and the spec. */

window.PART3 = [
{

  id:'ch14', num:14, part:3, minutes:35, labs:['judge'],
  title:'Checking quality when there is too much of it to read',
  concept:'Ten questions and a pencil stop working at about fifty. Here is what replaces them, and why the replacement has to be checked itself.',
  needs:[
    ['You wrote the answers down first','Ten questions with correct answers, written before you tested anything.',6],
    ['Catching more means catching more junk','The trade you made in Chapter 6, and the fact that choosing is yours.',6],
  ],
  takeaway:[
    'Name the three ways to grade an AI answer and say what each one is good at.',
    'Explain why a grader made of AI is worthless until you have measured how often it agrees with you.',
    'Describe what reading a hundred real outputs gets you that another benchmark never will.'
  ],
  red:['A grader nobody checked against human marking','Longer answers scoring higher for no reason','Testing on questions that look nothing like real ones'],
  story:[

    ['p','In Chapter 6 you wrote ten questions, wrote the correct answers first, and marked the system yourself. That is still the only honest way to know whether something works. It also stops working at about fifty questions, and a real product gets thousands a week.'],
    ['p','So something else has to do the marking. There are exactly three things that can. Every quality process you will ever be shown is a mix of them.'],
    ['tb',['Who marks it','Cost','Good at','Bad at'],[
      ['<strong>Code</strong>','Nearly free','Right shape? Cited anything? Number in a sane range? Fast enough?','Anything needing a judgement call'],
      ['<strong>A person</strong>','Very expensive','Everything. This is what correct means','Slow, and two people disagree'],
      ['<strong>Another AI</strong>','Cheap and fast','Is this grounded in the source? Which of these two is better?','Biased in specific ways you have to measure']
    ]],
    ['p','Start with code, because it is free and almost nobody uses enough of it. A lot of bad answers are bad in ways a program can spot: no citation, a citation pointing at a document that was never retrieved, a quote that appears nowhere in the source, a number outside any plausible range. That is a few lines of code, and code can run on every change forever.'],
    ['q','I041','I042'],
    ['p','The third row is where the leverage is, and it comes with one condition that is skipped almost everywhere.'],
    ['key','A grader you have not checked is not a measurement. It is a second guess from the same kind of machine that produced the first one.'],
    ['lab','judge'],
    ['q','I048'],
    ['p','Checking it means <strong>agreement</strong>. Mark fifty answers yourself. Have the model mark the same fifty. Count how often you and it said the same thing. Below rough agreement with your own marking, its percentages are noise with a decimal point.'],
    ['pred',{id:'ch14-agree',short:true,ph:'A fraction, like 7/10',
      ask:'Guess before you build one. You write a grading prompt, mark fifty answers by hand, and have the model mark the same fifty. How often will it agree with you on the first attempt?',
      reveal:'Six or seven out of ten is normal for a first attempt, and it is not a failure. It is information. What matters more than the number is the <em>pattern</em> of the disagreements. If they cluster — it marks every hedged answer as correct — you have found something you can fix. If they are scattered with no pattern at all, your own idea of a good answer is fuzzy, and no amount of tweaking the grading prompt will fix that.',
      then:'Clustered or scattered. That is what tells you whether to fix the grader or fix your own definition.'}],
    ['q','I051'],
    ['p','Model graders have known habits. They score <strong>longer answers higher</strong> even when the extra words say nothing, and in a head-to-head they favour <strong>whichever answer they saw first</strong>. The fixes are dull and they work: ask about one specific thing instead of overall quality, compare two answers rather than scoring one, shuffle which goes first, and make the grader quote the exact sentence it based its verdict on.'],
    ['q','I049','I050'],
    ['p','Now the part that produces most of the actual improvement, and it is not a technique.'],
    ['key','Read a hundred real outputs. Write down what went wrong in each one, in your own words. Then group the notes and name the groups. That is the highest-value thing anyone does in this field, it is reading rather than engineering, and almost nobody does it.'],
    ['q','I052','I125'],
    ['try',{id:'ch14-taxonomy',mins:8,min:70,rows:6,
      task:'Do a small version now. Take ten real outputs from something you own or use — support replies, search results, generated summaries. For each one write a single sentence about what went wrong, or “fine”. Then group the sentences and name the groups. Write the groups and their counts here.',
      ph:'group — count — one example sentence',
      after:'The one rule that makes this work is writing the sentence <em>before</em> reaching for a category, because picking a category first quietly changes what you notice. Real groups come out lumpy and specific — “right document, wrong clause: 4”, “answered a question the user did not ask: 3”, “cited a source that does not contain the claim: 2”. That lumpiness is the point: it is a ranked list of what to fix, built from your traffic, and the counts are your roadmap.'}],
    ['q','I053','I126'],
    ['p','Those groups become your test set. A generic benchmark cannot do this for you, because it does not have your users or your documents.'],
    ['p','And that is the loop: real traffic → read the failures → new test cases → a fix → a measured improvement → more traffic. Each turn makes your test set a better picture of reality. Models change every few months. Your answer key and your list of failures are the parts that survive.'],
    ['q','I054'],
    ['c','Two different questions','Before release you ask: does it pass the answer key? After release you ask: are users better off — fewer escalations, fewer edits, more tasks finished? The first can be perfect while the second fails. You need both, and only the second one pays.'],
    ['q','I043'],
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
},
{

  id:'ch15', num:15, part:3, minutes:30, labs:['costmodel'],
  title:'What it actually costs',
  concept:'The figure in most business cases is wrong by three to twenty times. The arithmetic is fine. Four things are missing from it.',
  needs:[
    ['You can read the receipt','Tokens in, tokens out, times a rate. The arithmetic from Chapter 1.',1],
    ['You know what multiplies it','How much you retrieve (3, 12), retries (8), agent steps (9), thinking tokens (11).',11],
  ],
  takeaway:[
    'Name the four things that make a naive cost estimate wrong, and which chapter each comes from.',
    'Explain what a cascade is and why it usually works.',
    'Say what you would ask a vendor who quotes you a price per query.'
  ],
  red:['A cost estimate missing the four multipliers','A feature that loses money on every query at scale'],
  story:[

    ['p','You have been reading the receipt since Chapter 1. Now you build the bill, because at some point someone senior asks what this costs at scale, and “it depends on tokens” is not an answer.'],
    ['p','The base sum is simple:'],
    ['code','cost per query = (tokens in  × rate for input)\n              + (tokens out × rate for output)\n\nmonthly = cost per query × queries per month'],
    ['p','That is the number in most business cases, and it is routinely wrong by between three and twenty times. The sum is not wrong. It is being done on the wrong quantities.'],
    ['pred',{id:'ch15-mult',short:true,ph:'A multiple, like 5×',
      ask:'Commit to a number. A business case prices a query using only tokens in times a rate plus tokens out times a rate. Once the thing is actually built, by what factor is that figure usually too low?',
      reveal:'Between three and twenty times. The formula prices one clean call, and real features do not make one clean call. They retrieve several documents, retry when the output is malformed, take several steps, and pay for thinking the user never sees.',
      then:'All four of those are chapters you have already done. Which means all four are things somebody chose, and anything somebody chose is a lever.'}],
    ['p','<strong>The four things that multiply it.</strong> You have met every one:'],
    ['tb',['What multiplies it','Where it came from','What it does'],[
      ['How many documents you retrieve','Ch. 6','Retrieving 8 instead of 3 nearly triples the input on every query, forever'],
      ['Retries when the output is malformed','Ch. 8','A retry re-sends the whole request, so a 10% retry rate costs more than 10%'],
      ['Agent steps','Ch. 9','Six steps re-send a growing conversation six times — often 10–20× one call'],
      ['Thinking tokens','Ch. 11','Charged at the output rate, and often several times longer than the visible answer']
    ]],
    ['lab','costmodel'],
    ['q','I003'],
    ['p','A feature quoted at 40 paise a query, retrieving eight documents, retrying one time in eight, taking four steps and thinking by default, does not cost 50 paise. It costs several rupees. That gap is the difference between a feature that survives and one quietly killed in month four.'],
    ['q','I100'],
    ['p','<strong>Five things that move the number</strong>, roughly in order of how much:'],
    ['n',[
      '<strong>Which model.</strong> Prices across one provider’s range differ by ten to a hundred times. This dwarfs everything else on the list.',
      '<strong>Cheap first, expensive only when needed.</strong> Send everything to a small model, and only send on what fails a check. Chapter 11 told you most real requests are simple lookups — so you are paying premium rates for work a small model gets right.',
      '<strong>Retrieve less.</strong> Every token you do not send is free forever. Chapter 12’s reranking lets you retrieve fewer documents <em>and</em> raise quality — the rare change that improves both sides.',
      '<strong>Caching.</strong> Chapter 10: put the parts that never change at the front. Free money for getting the order right.',
      '<strong>Batching.</strong> Where nobody is waiting, batch jobs are often much cheaper. Overnight work does not need interactive pricing.'
    ]],
    ['q','I099','I004'],
    ['try',{id:'ch15-model',mins:6,min:60,rows:5,
      task:'Build the real number for something real. Pick a feature. Estimate tokens in and out per query, apply the four multipliers using the values your design actually uses, multiply by monthly volume — then write the one sentence you would say to a finance director, including what would make the number wrong.',
      ph:'base … × retrieved … × retries … × steps … × thinking … = per query … monthly … and it is wrong if …',
      after:'A good answer is defensible rather than precise. It states the assumptions as assumptions, names which multiplier dominates (usually how much you retrieve, or agent steps), and says what would prove it wrong — different traffic, more retries than you tested, a price change. The sentence that earns trust is not “it costs four lakh a month”; it is “four lakh a month at 300,000 queries retrieving eight documents with a 12% retry rate, and the number moves most if retries go above 20%.”'}],
    ['c','Slow is a cost too','Report the slow fifth, not the average — Chapter 11. A feature that is cheap and slow fails commercially just as thoroughly as one that is fast and expensive. Put all three on one line, every time: cost per query, typical time, slow-case time.'],
    ['q','I101'],
    ['p','And the question that actually kills AI features has nothing to do with tokens: <strong>does it make money at scale?</strong> If a query costs three rupees and the revenue it protects is two, no amount of prompt tuning saves it. That sum belongs to you, on day one, before the pilot — not to an engineer in month six.'],
    ['q','I005'],
    ['q','I102'],
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
},
{

  id:'ch16', num:16, part:3, minutes:25, labs:[],
  title:'When your documents are pictures, not text',
  concept:'Chapter 3 told you to paste your text into a file. That one instruction hid the step where most real document projects fail.',
  needs:[
    ['Everything so far assumed clean text','Chapter 3 handed you the text. Somebody had to produce it.',3],
    ['Slow is a product problem','The slow fifth of responses, not the average.',11],
  ],
  takeaway:[
    'Explain why a table is the most dangerous thing in a document, and why no metric catches it.',
    'Say what you would ask a vendor who claims to support all document formats.',
    'Explain why voice changes the architecture and not just the interface.'
  ],
  red:['Table rows and columns destroyed when the text was extracted','Right page found, wrong number quoted','A corpus assumed to be clean text'],
  story:[

    ['p','Chapter 3 asked you to paste your document’s text into a file. That hid an assumption, and in most real organisations the assumption is false.'],
    ['p','Real document collections are pages, not text. Scanned contracts with signatures and stamps on them. Financial statements where the whole meaning is in which row meets which column. Manuals where the safety warning is a red box next to a diagram. Screenshots pasted into tickets. Forms with handwriting in the margin.'],
    ['key','Everything you have built assumes someone already turned those pages into text. That step — the one Chapter 3 skipped for you — is where most real document projects quietly fail, upstream of anything you measured.'],
    ['pred',{id:'ch16-clean',short:true,ph:'A percentage',
      ask:'Commit before the chapter tells you. In a real company’s document collection — contracts, statements, policies, scanned letters — what fraction is clean, digital, correctly-ordered text that needs no work at all?',
      reveal:'Usually far less than a proposal assumes. A large share is scanned images. A large share of what is digital still has structure that plain extraction destroys — two columns, tables, headers repeating on every page. The number matters because every estimate downstream of it inherits the error.',
      then:'This is the check nobody runs, and it is the cheapest way to stop a project failing six weeks in.'}],
    ['p','The classic failure is a table, and it matters because it is invisible. A text extractor reading a three-column table often produces one flat line of numbers. Every value survives. What does not survive is the <em>relationship</em> — this figure belongs to this row, for this year.'],
    ['p','Then retrieval works perfectly, the model answers fluently from the retrieved text, and the number it quotes belongs to the wrong column. Nothing in your pipeline can catch this, because nothing after extraction ever sees the page.'],
    ['q','I078','I079'],
    ['p','There are two ways to handle pages, and the choice is real:'],
    ['tb',['','Turn the page into text first','Give the model the page image'],[
      ['Cost','Cheap','Higher per page'],
      ['Tables and layout','Often destroyed','Mostly preserved'],
      ['Cutting it up','Chapter 3 applies as written','A page is the natural piece'],
      ['Exact codes and IDs','Kept accurately','Occasional misreads — 0 for O, 1 for l'],
      ['Checking it later','Text can be quoted and compared','You need a way to point back at the page']
    ]],
    ['q','I080'],
    ['p','A middle path is common and works well: extract text for searching, and hand the model the <em>page image</em> for the final answer whenever the question is about a table, a figure or a form. Cheap search, accurate reading.'],
    ['p','<strong>Voice changes a different thing entirely.</strong> Not accuracy — time. In text, a two-second wait is fine. In speech, two seconds of silence is a conversational failure; people start talking over it. The whole round trip has to fit in that budget: speech in, model, speech out. So the problems become conversational rather than linguistic — how do you know the person has finished speaking, what happens when they interrupt, what does the system say while it is thinking. And Chapter 11’s thinking models are simply unaffordable here, at any accuracy.'],
    ['q','I076'],
    ['c','The check nobody runs','Before any document-AI proposal, get three numbers: what fraction of the collection is clean digital text, what fraction is scanned, and what fraction of the <em>answers people actually need</em> live inside tables and figures. The third is usually the highest and is almost never asked. It decides the architecture, and it is one afternoon with fifty documents.'],
    ['try',{id:'ch16-audit',mins:6,min:60,rows:4,
      task:'Run that check on a document collection you actually have. What fraction is clean digital text, what fraction is scanned, and what fraction has tables or layout carrying the meaning? Estimate if you must, but say how you would measure it properly — and what you would do differently if the scanned fraction turned out to be half.',
      ph:'clean … scanned … layout-bearing … how I would measure … what changes if scanned is 50%',
      after:'Measuring it properly means sampling: fifty documents picked at random from real traffic, not fifty picked by whoever is enthusiastic. If a lot of it is scanned, the architecture changes rather than the timeline — extraction quality becomes a number you have to measure with its own answer key, and the project gains a phase most proposals leave out. Saying that before the project starts is worth more than any retrieval technique in this course.'}],
    ['q','I081'],
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
},
{

  id:'ch17', num:17, part:3, minutes:30, labs:['systemcard'],
  title:'The paperwork, and why it is yours',
  concept:'An AI feature now ships with documents attached. Almost every question in them is a product decision wearing legal costume.',
  needs:[
    ['You measured it, so you can state it','An answer key and a list of real failures are what turn a claim into a number.',14],
    ['Version and access are decided before ranking','Which is why they are the only guarantees you can make.',12],
    ['There is no complete defence','Which is why the controls sit outside the model, not inside the prompt.',13],
  ],
  takeaway:[
    'Explain why the same system can be low risk for one use and high risk for another.',
    'Say which section of a governance document is hardest to fake, and why that makes it valuable.',
    'Describe what oversight has to include before it counts as oversight at all.'
  ],
  red:['A governance file full of adjectives instead of numbers','Oversight written down but impossible to actually do','Data sitting in places you cannot delete from'],
  story:[

    ['p','A normal feature ships with code, tests and a release note. An AI feature increasingly ships with a folder of documents as well — and there is a common, expensive misunderstanding about who writes them.'],
    ['key','Almost every question in that folder is a product question. What is this for, who does it affect, what happens when it is wrong, who checks it, and what evidence exists that it works. Those are not legal questions with legal answers. They are product decisions being written down, usually by someone who was not in the room when they were made.'],
    ['lab','systemcard'],
    ['q','I090'],
    ['p','The shape most regulation is converging on is simple: <strong>how much you have to do depends on how bad it is when you are wrong</strong>, not on which technology you used. The EU AI Act made this shape famous, but the shape travels — your enterprise customers’ procurement teams now ask these questions wherever you operate.'],
    ['tb',['Level','What is required','Typical examples'],[
      ['Not allowed','Nothing makes it acceptable','Social scoring, some biometric sorting'],
      ['High risk','Documentation, a real human check, evidence of accuracy, logging, formal assessment','Hiring, credit, education access, essential services'],
      ['Transparency only','Say it is AI; label generated media','Chatbots, generated images'],
      ['Minimal','Ordinary good practice','Most internal productivity tools']
    ]],
    ['p','Two things follow, and teams learn both late. <strong>The level is set by the use, not the model</strong> — the same system you built in Chapter 7 is minimal risk for an internal FAQ and high risk for deciding benefit eligibility. And <strong>the level changes when the use changes</strong>, which happens after launch without anyone reopening the folder.'],
    ['q','I091','I092'],
    ['p','For anything above minimal, this is what has to exist:'],
    ['l',['<strong>What it is for</strong>, and what it is explicitly <em>not</em> for. The out-of-scope list is what stops the drift above.','<strong>Where the data came from</strong> — which documents, under what right to use, kept how long, stored in which country.','<strong>What you measured</strong> — your Chapter 6 answer key and your Chapter 14 failure list, with the actual numbers and the date. This part does not exist unless somebody did those chapters, which is why so many of these folders contain adjectives.','<strong>Who checks it</strong> — not “a human reviews the output”, but which outputs, seeing what, with the authority and the time to overrule.','<strong>What is known to break</strong> — your red marks, in plain sentences. The most credible section in any AI document.','<strong>What gets logged</strong>, for how long, and who does what when it goes wrong.','<strong>How change is controlled</strong> — model version pinned, prompts versioned, tests re-run. That is Chapter 18, written down here.']],
    ['q','I094','I131'],
    ['try',{id:'ch17-oversight',mins:6,min:60,rows:4,
      task:'Design a human check that survives real volume. Four thousand outputs a day, one reviewer. Write what that reviewer actually sees, which outputs reach them, and what they can do about it — then say why “a human reviews every output” is not an answer.',
      ph:'they see … routed by … can do … and reviewing everything fails because …',
      after:'Reviewing everything at that volume is a fiction that reads well and is abandoned in week two — worse than not claiming it, because now the document misrepresents the control. What works is targeted: route by confidence, by how bad the action is, and by disagreement between what was retrieved and what was answered. The reviewer has to see the evidence as well as the output, because approving an answer you cannot check is not checking — and has to be able to reject it, not just watch.'}],
    ['q','I096','I132'],
    ['c','The deletion drill','Someone asks you to delete their data. It is in: the original document store, the cut-up pieces, the search index, the cache, the provider’s logs, your own logs, and any test set you built from real traffic. Trace all seven. Most teams find at least two they cannot reach — and Tuesday afternoon is a much better time to find that out than during a regulator’s letter.'],
    ['pred',{id:'ch17-delete',short:true,ph:'Name the store',
      ask:'Someone exercises a deletion right. Their data is in the document store, the chunk store, the search index, your logs, your test sets and the cache. Before reading on: which one do teams forget?',
      reveal:'Test sets and logs, most often — because they were copied for a good reason by someone not thinking about deletion, and nothing in them points back to a person. Caches are a close third, and the provider’s cache is the most invisible of all: it holds fragments of documents with no index by subject at all.',
      then:'This is why you record where data came from when you take it in, rather than reconstructing it later. A deletion request you cannot satisfy is not an inconvenience. It is a failure with a date on it.'}],
    ['q','I097','I098'],
    ['q','I134','I135'],
    ['p','And the thing already happening whether anyone wrote it down or not: staff are pasting internal documents into consumer chat tools right now. Banning it does not work, because the tools are useful. A sanctioned alternative that is good enough, plus clear guidance on what may be pasted, works far better. “We banned it” is a statement about policy, not about behaviour.'],
    ['q','I093'],
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
},
{

  id:'ch18', num:18, part:3, minutes:45, labs:['redmap','prd'],
  title:'Writing the spec, and keeping it alive',
  concept:'Nothing new in this chapter. Draw the whole system from memory, mark every place you have watched it break, and write the document.',
  needs:[
    ['A test set and a list of your own failures','The instruments that turn an acceptance criterion into a number.',14],
    ['A real cost figure','The loaded number, with its four multipliers.',15],
    ['A risk level and a human check','What ships alongside the code.',17],
  ],
  takeaway:[
    'Explain what replaces pass/fail acceptance criteria in an AI spec, and why.',
    'List what you re-run when your provider retires the model you built on.',
    'Explain why a kill switch is not the same thing as a rollback.'
  ],
  red:[],
  story:[

    ['p','Chapter 7 ended with a diagram and a red pen. This chapter ends with a document — and again, nothing in it is new.'],
    ['p','A normal spec assumes the same input gives the same output: do this, get that, QA checks it, done. Every part of that sentence fails here. The same input gives a <em>range</em> of outputs, and the shape of that range moves when your provider updates a model you do not control.'],
    ['key','An AI spec does not describe behaviour. It describes a measured range of behaviour, the evidence that you measured it, and what happens when it drifts.'],
    ['q','I107'],
    ['p','Four things change, and you have already built all four:'],
    ['tb',['Normal spec','AI spec','Built in'],[
      ['Acceptance criteria as pass/fail','A required score on a named answer key, at stated settings','Ch. 6, 14'],
      ['A QA test plan','A fixed set of cases that must pass, plus the free code checks, run every release','Ch. 8, 14'],
      ['Done when the features work','Done when it is measured at stated numbers, with known failures written down','Ch. 6, 17'],
      ['Rollback means redeploy the last build','Rollback means a pinned model version, versioned prompts, and a switch that turns the AI off','Ch. 10, 17']
    ]],
    ['lab','prd'],
    ['q','I117'],
    ['p','<strong>Your model will be retired.</strong> On your provider’s schedule, with a notice period you did not negotiate. Moving is not a configuration change — it is a re-measurement. Run the answer key again, run your fixed case set again, re-test whether it can be talked into misbehaving, re-measure cost and speed. Teams that did Chapter 6 do this in an afternoon. Teams that did not discover during the move that they never knew whether the old model was any good either.'],
    ['pred',{id:'ch18-deprecate',rows:3,ph:'What you re-run, and what you do not',
      ask:'Your provider gives you thirty days’ notice that the model behind your live feature is being retired. Before reading on: write what you re-run, in order, and what you can safely skip.',
      reveal:'Everything you measured against the old model, because changing the model invalidates measurements rather than just nudging them: the full test set against your answer key, the grader’s agreement with your own marking (the grader is itself a model call), your cost figures at the new rates, and your speed at the slow end. The one you cannot skip is the grader — a grader checked against the old model is an uncalibrated instrument on the new one.',
      then:'This is why a test set is infrastructure, not a launch artefact. Teams without one do not find the problem in thirty days. They find it in production.'}],
    ['q','I109'],
    ['p','<strong>Feedback is where most AI products throw away their best asset.</strong> A thumbs-down on its own is nearly worthless: you cannot reproduce it, and you cannot tell a wrong answer from a correct one the user disliked. A thumbs-down attached to the whole trace — the question, what was retrieved, which prompt and model version, the output — is a ready-made test case. That difference is about two days of engineering, and it decides whether Chapter 14’s loop turns at all.'],
    ['q','I110'],
    ['p','And the staged rollout, which is ordinary product practice with one addition: <strong>a kill switch is not a rollback.</strong> A rollback takes a deploy cycle. A kill switch is a flag that sends traffic to the non-AI path immediately. Which means the non-AI path has to still exist, and someone has to have tested it recently.'],
    ['q','I108'],
    ['try',{id:'ch18-prd',mins:10,min:100,rows:8,
      task:'Write the acceptance criteria for one feature you own. Not prose — the numbers. What is measured, against which answer key, at what threshold, and what happens when a number falls below it. Then add the line most specs leave out: what the kill switch turns off, and what the product still does afterwards.',
      ph:'metric — answer key — threshold — what happens on breach … kill switch: …',
      after:'A good section can be checked by someone who does not like you. It names the answer key and who wrote it, gives thresholds as numbers instead of adjectives, and attaches an action to each breach — block the release, page someone, drop to a safe mode. The kill-switch line is what separates people who have run an AI feature from people who have only specified one: a rollback returns to previous code, which does not help when the failure is a behaviour both versions share.'}],
    ['q','I118'],
    ['c','What this course did not teach you','Training and post-training. GPU economics and self-hosting. Orchestrating many agents at scale. Formal verification. Generating synthetic data. Part IV picks up two things that used to be on this list — the decision about fine-tuning and smaller models, and what the user actually sees — because both are yours to make rather than an engineer’s. The 2027 LATER page on this site is now, finally, permitted reading. Being able to name what you have not covered is the difference between knowing your limits and pretending you have none.']
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
}

];

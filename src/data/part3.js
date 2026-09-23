/* Part III — Measuring it, costing it, shipping it (Chapters 14–18)
   The product half: checking quality at volume, what it really costs,
   documents that are pictures, the paperwork, and the spec. */

window.PART3 = [
{

  id:'ch14', num:14, part:3, minutes:35, labs:['judge'],
  title:'Evaluation at scale: code checks and LLM judges',
  concept:'Grading by hand stops working at around fifty questions. You will combine free code checks with an LLM judge, then measure how often the judge agrees with you before you trust its scores.',
  needs:[
    ['You wrote the answers down first','Ten questions with correct answers, written before testing.',6],
    ['Fetching more also fetches more irrelevant chunks','The trade-off from Chapter 6, and the fact that the choice is yours.',6]
  ],
  takeaway:[
    'Name the three ways to grade an AI answer, and say what each is good at.',
    'Explain why an LLM judge is not a measurement until you have checked how often it agrees with you.',
    'Test your own judge for known biases, such as favouring longer answers.'
  ],
  red:['A grader nobody checked against human marking','Longer answers scoring higher for no reason','Testing on questions that look nothing like real ones'],
  capstone:{title:'A judge you have checked',
   brief:'Build an automated grader, and more importantly the evidence for how far it can be trusted. A grader nobody has checked is not a measurement.',
   steps:['Write the rubric a careful person would use to grade one type of output your team produces.','Run the free code checks first, such as format, length and required fields. Count how many failures never need a judge.','Build the judge from your rubric, and grade fifty outputs by hand as well.','Report agreement honestly, including where the judge is consistently more lenient or harsher than you.','Test it for length bias on your own data: the same content in twice the words. Does the score change?'],
   done:['You have an agreement figure between the judge and your own grading on the same fifty items.','You know whether your judge rewards length, from a test you ran.','You can state the score range in which you would read the output yourself rather than trust the judge.']},
  story:[
    ['c','Before you start','Open a new notebook called <code>chapter-14</code>. Bring your structured RAG output from Chapter 8.5 and your Chapter 6 answer key.'],
    ['p','In Chapter 6 you wrote ten questions and their correct answers, then graded the system yourself. That is still the most reliable way to know whether something works. But it stops being practical at around fifty questions, and a real product gets thousands a week.'],
    ['h','Three ways to grade an answer'],
    ['p','Every quality process combines three kinds of grader:'],
    [
      'tb',
      ['Grader','Cost','Good at','Bad at'],
      [
        ['<strong>Code</strong>','Almost free','Correct format? Cites a source? Number in a sensible range? Fast enough?','Anything that needs judgement'],
        ['<strong>A person</strong>','Very expensive','Everything; this defines what correct means','Slow, and two people often disagree'],
        ['<strong>An LLM judge</strong>','Cheap and fast','Is this supported by the source? Which of two answers is better?','Has specific biases you must measure']
      ]
    ],
    ['h','Start with code checks'],
    ['p','Start with code, because it is free and most teams do not use enough of it. Many bad answers fail in ways a program can detect. Examples are a missing citation, a citation to a chunk that was never retrieved, a quote that is not in the source, or a number outside any sensible range. Each check is a few lines of code that can run on every change.'],
    ['q','I041','I042'],
    ['do','Write the code checks',[
      ['p','Before building any judge, write the checks that your structured output from Chapter 8 makes possible.'],
      ['code','def programmatic_checks(record, retrieved_ids):\n    issues = []\n    if record["found"] and not record.get("source_chunk_ids"):\n        issues.append("claimed found but cited nothing")\n    for cid in record.get("source_chunk_ids", []):\n        if cid not in retrieved_ids:\n            issues.append(f"cited chunk {cid} that was never retrieved")\n    q = record.get("supporting_quote", "")\n    if q and not any(q[:40] in chunks[i] for i in retrieved_ids):\n        issues.append("quote not found verbatim in any retrieved chunk")\n    return issues'],
      ['x','Run it on your ten Chapter 6 answers. The last check, which tests whether the quote appears word for word in the source, catches invented citations for free on every release. It is the cheapest quality control in the course.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    ['h','Build an LLM judge'],
    ['p','An <strong>LLM judge</strong> is a model that grades another model’s output. It is cheap and fast, but you must check it before trusting it.'],
    ['key','Check an LLM judge against your own grading before you trust it. Unchecked, it is just another guess from the same kind of system that produced the answer.'],
    ['lab','judge'],
    ['q','I048'],
    ['do','Write a judge with a rubric',[
      ['code','JUDGE = """You are grading an answer against a source passage.\n\nPassage:\n{ctx}\n\nQuestion: {q}\nAnswer: {a}\n\nGrade GROUNDEDNESS only — is every claim in the answer supported by the passage?\nRespond as JSON:\n{{"verdict": "grounded" | "partially_grounded" | "unsupported",\n  "unsupported_claim": "<quote the first unsupported claim, or empty>"}}\nDo not reward length, fluency, or confidence."""\n\ndef judge(q, a, ctx):\n    r = client.chat.completions.create(\n        model="meta/llama-3.1-8b-instruct", temperature=0,\n        messages=[{"role":"user","content":JUDGE.format(ctx=ctx, q=q, a=a)}]\n    )\n    return json.loads(r.choices[0].message.content)'],
      ['x','Note the design: it grades one narrow thing, it must quote the claim it objects to, and it is told to ignore known biases. A judge asked to “rate quality from 1 to 10” produces numbers you cannot act on.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    ['h','Measure agreement'],
    ['p','To check a judge, measure <strong>agreement</strong>. Grade fifty answers yourself, have the judge grade the same fifty, and count how often you agree. If agreement is low, the judge’s scores are not reliable.'],
    [
      'pred',
      {id:'ch14-agree',
       short:true,
       ph:'A fraction, like 7/10',
       ask:'Predict: you write a judge prompt, grade fifty answers by hand, and have the judge grade the same fifty. How often will it agree with you on the first attempt?',
       reveal:'Six or seven out of ten is normal for a first attempt. The pattern of disagreements matters more than the number. If they cluster, for example the judge marks every hedged answer as correct, you have found something you can fix. If they are scattered with no pattern, your own definition of a good answer is probably unclear, and changing the judge prompt will not help.',
       then:'So check whether disagreements are clustered or scattered. That tells you whether to fix the judge or your own definition.'}
    ],
    ['q','I051'],
    ['do','Grade the judge',[
      ['p','Most teams skip this step. Label all ten of your Chapter 6 answers by hand as grounded, partly grounded or unsupported. Then run the judge on the same ten and compare.'],
      ['code','agree = sum(1 for i in range(10) if human_labels[i] == judge_labels[i])\nprint(f"agreement: {agree}/10")\nfor i in range(10):\n    if human_labels[i] != judge_labels[i]:\n        print(f"  Q{i}: human={human_labels[i]} judge={judge_labels[i]}")'],
      ['x','Look closely at the disagreements; they tell you more than the score. A judge that is consistently lenient on one type of failure is usable if you know about it. A judge whose errors are random is not usable.'],
      ['c','Tip','Before running, predict your agreement out of 10. Afterwards, note whether the disagreements are consistent or scattered.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    ['h','Known judge biases'],
    ['p','LLM judges have known biases. They score <strong>longer answers higher</strong>, even when the extra words add nothing. When comparing two answers, they tend to favour <strong>whichever answer they saw first</strong>. The fixes are simple and they work. Grade one specific thing rather than overall quality. Compare two answers rather than scoring one, and swap their order. Require the judge to quote the sentence its verdict is based on.'],
    ['q','I049','I050'],
    ['do','Test your judge for length bias',[
      ['p','Take one correct, short answer. Write a padded version with the same claims in three times as many words, with more hedging and structure. Judge both.'],
      ['x','The padded version often scores at least as well, and sometimes better, even though it contains no extra correct information. You have measured a bias that affects many published evaluation results.']
    ]],
    ['h','Summary'],
    ['key','A judge you have checked against your own grading is a measuring tool. A judge you have not checked will tend to agree with the model it is grading.'],
    ['p','Judges tell you how often something is wrong, not <em>what</em> is wrong. The next chapter covers the most useful activity in AI quality work, and it needs no model at all.']
  ]
},
{
  /* ch14 carried seven new terms and did two different jobs: building a
     grader that scales, and reading failures by hand, which scales to
     nothing and produces most of the improvement. They are two chapters. */
  id:'ch145', num:14.5, part:3, minutes:25, labs:[],
  title:'Error analysis: reading failures by hand',
  concept:'Reading real outputs and naming what went wrong is the most useful quality activity there is, and it needs no model or budget. You will read failures, group them, count them, and turn the biggest groups into test cases.',
  needs:[
    ['An LLM judge can grade at scale','And you know how far yours can be trusted.',14],
    ['Write the answer key before testing','The same idea, applied to failures instead of questions.',6]
  ],
  takeaway:[
    'Turn a pile of real failures into named, countable groups.',
    'Decide which group to fix first, based on counts and consequences.',
    'Explain why a generic benchmark cannot do this for your product.'
  ],
  capstone:{title:'A failure taxonomy for a real system',
   brief:'Read a hundred real outputs, describe what went wrong in your own words, and turn your notes into groups someone can count. This tells a team what to fix next, and no benchmark can produce it for you.',
   steps:['Collect a hundred real outputs from something you own or use. Use real traffic, not a sample you chose.','Read them. For each one that went wrong, write what went wrong in your own words. Do not group yet; grouping early hides categories you had not thought of.','Now group the notes, name the groups and count each one.','Rank the groups by count multiplied by how badly each one affects a real person.','For the top group, write what would need to change, and whether that is the prompt, retrieval, a field, or something that is not an AI problem at all.','Add the top two groups as rows in your test set, so the next change is measured against them.'],
   done:['The groups came from the reading, not from a list decided in advance.','Every group has a count, and the ranking considers consequences as well as frequency.','At least two new rows from real failures are in your test set.']},
  story:[
    ['c','Before you start','No code and no notebook. You need real outputs from something you own or use, such as support replies, generated summaries or search results, and about an hour. Bring a pen.'],
    ['h','What error analysis is'],
    ['key','Read a hundred real outputs. For each one that went wrong, write down what went wrong in your own words. Then group the notes and name the groups. This is called <strong>error analysis</strong>, and it is the most valuable quality work in this field.'],
    ['q','I052','I125'],
    [
      'try',
      {id:'ch14-taxonomy',
       mins:8,
       min:70,
       rows:6,
       task:'Do a small version now. Take ten real outputs from something you own or use. For each one, write one sentence about what went wrong, or “fine”. Then group the sentences and name the groups. Write the groups and their counts here.',
       ph:'group — count — one example sentence',
       after:'The key rule is to write the sentence <em>before</em> choosing a category, because choosing a category first changes what you notice. Real groups are specific and uneven, for example “right document, wrong clause: 4”, “answered a question the user did not ask: 3” and “cited a source that does not contain the claim: 2”. The result is a ranked list of what to fix, built from your own traffic.'}
    ],
    ['q','I053','I126'],
    ['h','Do it on your pipeline'],
    ['do','Analyse twenty outputs by hand',[
      ['p','Collect 20 outputs from your Chapter 12 pipeline, across varied questions. Read each one against its source. For each failure, write a plain note: <em>a sentence, not a category</em>. Then group the notes.'],
      ['x','You will end up with 4 to 7 named groups. This is your <strong>failure taxonomy</strong>. Count each group; the largest one is what to fix next. Keep the list: Chapter 17 uses it for the known-limitations section, and Chapter 18 uses it for the regression suite.']
    ]],
    ['h','Turn failures into test cases'],
    ['p','Each group becomes new rows in your test set. A generic benchmark cannot do this, because it does not have your users or your documents.'],
    ['p','This forms a loop: real traffic → read the failures → add test cases → make a fix → measure the improvement → more traffic. Each round makes your test set a better picture of real use. Models change every few months, but your answer key and your failure list stay useful.'],
    ['q','I054'],
    ['c','Note','Before release, you ask whether the system passes the answer key. After release, you ask whether users are better off: fewer escalations, fewer edits, more tasks finished. The first can pass while the second fails. You need both, and the second is what the business cares about.'],
    ['q','I043']
  ],
},
{

  id:'ch15', num:15, part:3, minutes:30, labs:['costmodel'],
  title:'Cost modelling: what an AI feature really costs',
  concept:'Most business cases underestimate AI cost by three to twenty times, because they price one clean call. You will measure real token counts, apply the four multipliers, build a cheaper cascade, and answer the margin question.',
  needs:[
    ['You can read the usage block','Tokens in, tokens out, times a price. The arithmetic from Chapter 1.',1],
    ['You know what multiplies it','Retrieved chunks (3, 12), retries (8), agent steps (9) and reasoning tokens (11).',11]
  ],
  takeaway:[
    'Name the four things that make a simple cost estimate wrong, and which chapter each comes from.',
    'Explain what a cascade is and why it usually saves money.',
    'Say what you would ask a vendor who quotes a price per query.'
  ],
  red:['A cost estimate missing the four multipliers','A feature that loses money on every query at scale'],
  capstone:{title:'A cost model built from measurements',
   brief:'Answer the question many teams skip: what does this feature cost at real volume, and what happens to the margin when it succeeds? Build it from measurements, not estimates.',
   steps:['Take one feature and measure the tokens it uses across twenty realistic requests. Average them.','Apply the multipliers people forget: retries, retrieved context, conversation history, and failed requests that get repeated.','Work out the cost per request, per thousand requests, and per month at a volume you would actually plan for.','Build a cascade (cheap model first, expensive one only when needed) and measure what share escalates.','Produce three numbers: cost today, cost at ten times the volume, and cost if the cheap path stops working.','Answer the margin question: at what price and usage does this feature stop making money?'],
   done:['Every figure traces back to a measurement you took, and you can say which one.','The cascade has a measured escalation rate, not an assumed one.','You can name the assumption most likely to make the whole model wrong.']},
  story:[
    ['c','Before you start','Open a new notebook called <code>chapter-15</code>. You need your Chapter 12 pipeline and your Chapter 6 answer key.'],
    ['p','At some point someone senior will ask what this feature costs at scale. “It depends on tokens” is not an answer. This chapter gives you a real one.'],
    ['h','The basic formula'],
    ['p','The base calculation is simple:'],
    ['code','cost per query = (tokens in  × rate for input)\n              + (tokens out × rate for output)\n\nmonthly = cost per query × queries per month'],
    ['p','Most business cases use this number, and it is often three to twenty times too low. The formula is right; it is applied to the wrong quantities.'],
    [
      'pred',
      {id:'ch15-mult',
       short:true,
       ph:'A multiple, like 5×',
       ask:'Predict: a business case prices a query using only tokens in and tokens out. Once the feature is built, how many times too low is that figure, usually?',
       reveal:'Between three and twenty times. The formula prices one clean call. Real features retrieve several documents, retry when the output is malformed, take several steps and pay for reasoning the user never sees.',
       then:'You have covered all four of those in earlier chapters. Each one is a design choice, which means each one is something you can change.'}
    ],
    ['h','The four multipliers'],
    [
      'tb',
      ['Multiplier','Chapter','What it does'],
      [
        ['Number of chunks retrieved','Ch. 6','Retrieving 8 chunks instead of 3 nearly triples the input on every query'],
        ['Retries for malformed output','Ch. 8','Each retry resends the context, so record the real extra tokens and time'],
        ['Agent steps','Ch. 9','Six steps send a growing conversation six times, often 10–20× one call'],
        ['Reasoning tokens','Ch. 11','Charged at the output price, and often several times longer than the visible answer']
      ]
    ],
    ['lab','costmodel'],
    ['q','I003'],
    ['do','Measure real token counts',[
      ['p','Run your Chapter 12 pipeline on the ten questions in your answer key and record the real token counts.'],
      ['code','rows = []\nfor q in ground_truth_questions:\n    r = rag_answer_instrumented(q, k=3)   # returns .usage alongside the answer\n    rows.append({"q": q, "in": r.usage.prompt_tokens,\n                 "out": r.usage.completion_tokens})\n\navg_in  = sum(r["in"]  for r in rows) / len(rows)\navg_out = sum(r["out"] for r in rows) / len(rows)\nprint(f"avg in {avg_in:.0f} / avg out {avg_out:.0f} tokens per query")'],
      ['x','You now have real numbers from your own documents. Everything after this is arithmetic on measured values instead of guesses.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    ['p','For example, a feature quoted at 40 paise per query that retrieves eight documents, retries one time in eight, takes four steps and uses reasoning by default does not cost 50 paise. It costs several rupees. That gap can decide whether a feature survives.'],
    ['q','I100'],
    ['do','Add the multipliers',[
      ['code','def monthly_cost(avg_in, avg_out, queries,\n                 in_rate, out_rate,           # per 1M tokens\n                 retry_rate=0.0, agent_steps=1,\n                 reasoning_ratio=0.0, cache_hit=0.0):\n    eff_in  = avg_in * agent_steps * (1 - cache_hit * 0.9)\n    eff_out = avg_out * agent_steps * (1 + reasoning_ratio)\n    per_q = (eff_in/1e6)*in_rate + (eff_out/1e6)*out_rate\n    per_q *= (1 + retry_rate)\n    return per_q, per_q * queries\n\nbase = monthly_cost(avg_in, avg_out, 10_000, 0.20, 0.60)\nreal = monthly_cost(avg_in, avg_out, 10_000, 0.20, 0.60,\n                    retry_rate=0.10, agent_steps=4,\n                    reasoning_ratio=2.0, cache_hit=0.0)\nprint(f"naive: {base[1]:.2f}   with multipliers: {real[1]:.2f}   ratio {real[1]/base[1]:.1f}x")'],
      ['x','The ratio is often between 8× and 20×. Write it down. It shows why “we estimated the token cost” is different from “we estimated the cost”.'],
      ['c','Tip','Before running this step, predict how many times higher the full cost will be than the simple estimate.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    ['h','Five ways to lower the cost'],
    ['p','Roughly in order of impact:'],
    [
      'n',
      ['<strong>Choose the model.</strong> Prices across one provider’s range differ by ten to a hundred times. This matters more than anything else on the list.','<strong>Use a cheap model first.</strong> Send everything to a small model, and pass on only what fails a check. Chapter 11 showed that most real requests are simple lookups, which a small model handles well.','<strong>Retrieve less.</strong> Every token you do not send costs nothing. Reranking from Chapter 12 lets you retrieve fewer chunks <em>and</em> improve quality.','<strong>Use caching.</strong> From Chapter 10: put the parts that never change at the start of the request.','<strong>Batch work that can wait.</strong> Batch processing is often much cheaper. Overnight jobs do not need interactive pricing.']
    ],
    ['q','I099','I004'],
    ['do','Build a cascade',[
      ['p','A <strong>cascade</strong> sends each request to a cheap model first and escalates to an expensive model only when a check fails. Use your Chapter 8 structured output as the trigger: <code>found: false</code> or a missing quote.'],
      ['code','def cascade(question, k=3):\n    small = rag_answer(question, k=k, model=CHEAP_MODEL)\n    if small["found"] and programmatic_checks(small, small["source_chunk_ids"]) == []:\n        return small, "cheap"\n    return rag_answer(question, k=k, model=STRONG_MODEL), "escalated"\n\nesc = sum(1 for q in ground_truth_questions if cascade(q)[1] == "escalated")\nprint(f"escalation rate: {esc}/{len(ground_truth_questions)}")'],
      ['x','You get an escalation rate, often 20–40%. Work out the blended cost and grade accuracy again against your Chapter 6 answer key. Now you have both sides of the trade-off: what the cascade saved, and what it cost in quality, if anything.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    [
      'try',
      {id:'ch15-model',
       mins:6,
       min:60,
       rows:5,
       task:'Work out the real cost of a real feature. Estimate tokens in and out per query, apply the four multipliers using the values your design actually uses, and multiply by monthly volume. Then write the sentence you would say to a finance director, including what would make the number wrong.',
       ph:'base … × retrieved … × retries … × steps … × thinking … = per query … monthly … and it is wrong if …',
       after:'A good answer is defensible rather than precise. It states its assumptions, names the multiplier that dominates (usually retrieved chunks or agent steps), and says what would make it wrong, such as different traffic, more retries or a price change. For example: “Four lakh a month at 300,000 queries, retrieving eight documents, with a 12% retry rate. The number moves most if retries go above 20%.”'}
    ],
    ['h','Report cost, speed and accuracy together'],
    ['c','Note','Speed is also a cost. Report the slow responses, not only the average, as in Chapter 11. A cheap but slow feature can fail just as badly as a fast but expensive one. Always report cost per query, typical response time and slow-case response time together.'],
    ['q','I101'],
    ['do','Build a comparison table',[
      ['p','For each configuration you have built (simple, k=8, cascade, reasoning always on), record these numbers.'],
      [
        'tb',
        ['Configuration','Cost / query','p50','p95','Accuracy (of 9)'],
        [
          ['Baseline k=3','','','',''],
          ['k=8','','','',''],
          ['Cascade','','','',''],
          ['Reasoning always on','','','','']
        ]
      ],
      ['x','This table is the main deliverable of the chapter. It turns an architecture debate into a decision based on evidence, and it fits on one slide.']
    ]],
    ['h','The margin question'],
    ['p','The question that decides most AI features has nothing to do with tokens: <strong>does it make money at scale?</strong> If a query costs three rupees and the value it protects is two, no amount of prompt tuning will fix it. Answer this on day one, before the pilot.'],
    ['q','I005'],
    ['do','Calculate the margin',[
      ['p','Do one honest calculation: what does this feature cost per user per month at expected usage, and what is it worth per user per month?'],
      ['x','If the value is not clearly larger than the cost, you have learned that before the pilot rather than after it.']
    ]],
    ['q','I102']
  ],
},
{

  id:'ch16', num:16, part:3, minutes:25, labs:[],
  title:'Document extraction: tables, scans and images',
  concept:'Real documents are often scans, tables and forms, not clean text. Converting them to text is where many document projects fail silently. You will find an extraction error in your own documents and compare text extraction with giving the model the page image.',
  needs:[
    ['Everything so far assumed clean text','Chapter 3 gave you the text. Someone had to produce it.',3],
    ['Slow responses are a product problem','Look at the slowest responses, not the average.',11]
  ],
  takeaway:[
    'Explain why tables are the most error-prone part of a document, and why no metric catches the error.',
    'Say what you would ask a vendor who claims to support all document formats.',
    'Explain why voice changes the architecture, not just the interface.'
  ],
  red:['Table rows and columns destroyed when the text was extracted','Right page found, wrong number quoted','A corpus assumed to be clean text'],
  capstone:{title:'Audit the extraction quality of a real document set',
   brief:'Extraction errors are silent: text that was never read correctly produces confident answers, and nothing reports an error. Audit a real document set and find out how much of it is wrong.',
   steps:['Take twenty pages of your own scanned or PDF documents. Choose messy ones, not clean ones.','Extract them the usual way, then read the output against the originals and mark every error.','Find the tables. Ask a question only a table can answer, and check what comes back.','Give the page image to a vision model, and compare its answers with the extracted text on the same questions.','Check every cell of one important table by hand. Record how long it took, because that is the real cost of trusting it.','Estimate the error rate across the whole set, and write what it means for anything built on top of it.'],
   done:['You have a counted error rate from pages you checked yourself.','You can show at least one confident answer that is wrong because of an extraction error.','You have a rule for which documents can go in unchecked and which cannot.']},
  story:[
    ['c','Before you start','Open a new notebook called <code>chapter-16</code>. Find one page from your own documents that contains a real table, such as financial figures, eligibility bands or a rate card.'],
    ['p','Chapter 3 asked you to paste your document’s text into a file. That assumed the text already existed. In most organisations, much of it does not.'],
    ['h','Real documents are pages, not text'],
    ['p','Real document collections include scanned contracts with signatures and stamps. They include financial statements where the meaning depends on which row meets which column. They also include manuals with warnings next to diagrams, screenshots in tickets, and handwritten forms.'],
    ['key','Everything you have built assumes someone already turned these pages into text. That conversion step is where many document projects fail, before anything you measured.'],
    [
      'pred',
      {id:'ch16-clean',
       short:true,
       ph:'A percentage',
       ask:'Predict: in a real company’s documents, such as contracts, statements, policies and scanned letters, what share is clean, digital, correctly ordered text that needs no work?',
       reveal:'Usually much less than a proposal assumes. A large share is scanned images. Much of the digital part still has structure that plain extraction destroys, such as two columns, tables, or headers repeated on every page. Every estimate that depends on this number inherits its error.',
       then:'Few teams check this, and it is the cheapest way to avoid a project failing six weeks in.'}
    ],
    ['h','Why tables fail silently'],
    ['p','A text extractor reading a three-column table often produces one flat line of numbers. Every value survives, but the <em>relationships</em> are lost: which figure belongs to which row, for which year.'],
    ['p','Retrieval then works correctly, the model answers fluently, and the number it quotes comes from the wrong column. Nothing in your pipeline can catch this, because nothing after extraction sees the original page.'],
    ['q','I078','I079'],
    ['do','Find an extraction error',[
      ['p','Extract the text from your table page with whatever tool you have, and read the extracted text.'],
      ['x','Read it as a machine would. Can you tell which figure belongs to which row and column from the text alone? Often you cannot. Write down the specific relationship that was lost.']
    ]],
    ['do','Ask a question only the table answers',[
      ['p','Run the extracted text through your Chapter 7 pipeline with a question whose answer is at a specific row and column.'],
      ['x','You get a confident answer, often with a number from a neighbouring row or column. Every metric in your Chapter 6 evaluation would have scored this as a retrieval success.'],
      ['c','Tip','Before running, predict whether your pipeline will get the table question right. People often expect a failure; what surprises them is how <em>fluent</em> the wrong answer is.']
    ]],
    ['h','Two ways to handle pages'],
    [
      'tb',
      ['','Turn the page into text first','Give the model the page image'],
      [
        ['Cost','Cheap','Higher per page'],
        ['Tables and layout','Often destroyed','Mostly preserved'],
        ['Cutting it up','Chapter 3 applies as written','A page is the natural piece'],
        ['Exact codes and IDs','Kept accurately','Occasional misreads — 0 for O, 1 for l'],
        ['Checking it later','Text can be quoted and compared','You need a way to point back at the page']
      ]
    ],
    ['q','I080'],
    ['do','Give the model the page image',[
      ['p','Save the same page as an image and give it to a vision-capable model, with the same question.'],
      ['code','import base64\nwith open("page.png","rb") as f:\n    b64 = base64.b64encode(f.read()).decode()\n\nr = client.chat.completions.create(\n    model=VISION_MODEL, temperature=0,\n    messages=[{"role":"user","content":[\n        {"type":"text","text":"Answer only from this page. "\n                              "Quote the row and column labels you used."},\n        {"type":"image_url",\n         "image_url":{"url":f"data:image/png;base64,{b64}"}}\n    ]}]\n)\nprint(r.choices[0].message.content)'],
      ['x','The answer is usually correct. Because you asked for the row and column labels, you can check it in seconds. This is the supporting-quote idea from Chapter 8, applied to tables.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    ['p','A common approach combines both. Extract text for searching. Then give the model the <em>page image</em> for the final answer when the question is about a table, a figure or a form.'],
    ['do','Check every cell',[
      ['p','Ask the vision model to transcribe the whole table into a structured record, using a Chapter 8 schema. Then check every cell against the page by eye.'],
      ['x','Expect a few errors, often in cells that are hard to tell apart: merged headers, footnote markers, or empty versus zero. Count them. That error rate is your extraction quality number, and it belongs in every document-AI proposal.']
    ]],
    ['h','Voice: a different constraint'],
    ['p','Voice changes the main constraint from accuracy to time. In text, a two-second wait is fine. In speech, two seconds of silence breaks the conversation, and people start talking over it. The whole round trip has to fit in that time: speech in, model, speech out.'],
    ['p','So voice problems are about conversation: knowing when the person has finished speaking, handling interruptions, and deciding what to say while the system works. The reasoning models from Chapter 11 are usually too slow for voice, however accurate they are.'],
    ['q','I076'],
    ['h','Audit your documents before you build'],
    ['c','Tip','Before any document-AI project, get three numbers. What share of the documents is clean digital text? What share is scanned? And what share of the <em>answers people need</em> is inside tables and figures? The third is usually the largest and is rarely asked. It decides the architecture, and one afternoon with fifty documents is enough to estimate it.'],
    [
      'try',
      {id:'ch16-audit',
       mins:6,
       min:60,
       rows:4,
       task:'Run that check on a document collection you have. What share is clean digital text, what share is scanned, and what share has tables or layout that carry the meaning? Estimate if you must, but say how you would measure it properly, and what you would change if half turned out to be scanned.',
       ph:'clean … scanned … layout-bearing … how I would measure … what changes if scanned is 50%',
       after:'To measure it properly, sample fifty documents at random from real traffic, not fifty chosen by an enthusiastic colleague. If much of it is scanned, the architecture changes: extraction quality becomes something you measure with its own answer key, and the project gains a phase most proposals leave out. Saying this before the project starts is worth more than any retrieval technique in the course.'}
    ],
    ['q','I081'],
    ['do','Audit a document sample',[
      ['p','Sample 30 documents. Classify each as clean digital text, scanned image or mixed. Then, separately, sample 20 questions people actually ask, and mark how many need a table or figure to answer.'],
      ['x','You get two percentages. They decide whether your architecture should be text-first, image-first or a mix, and they take an afternoon to measure.']
    ]]
  ],
},
{
  /* Arc 5. Governance in ch17 is about the file you produce. This is the
     question that actually stops people on a Tuesday. */
  id:'ch165', num:16.5, part:3, minutes:20, labs:[],
  title:'Data handling: what you are allowed to send',
  concept:'Before you send a document to a model, you need to know whether you are allowed to. Three questions settle most cases. You will sort real documents, read a vendor’s actual terms, and write a rule your colleagues can follow.',
  needs:[
    ['Everything you send leaves your organisation','And you pay for it per token.',1],
    ['Your documents are not what you assumed','You audited what they actually contain.',16]
  ],
  takeaway:[
    'Decide whether a specific document may be sent, and say what the decision is based on.',
    'Name the three questions that settle it, in the order that resolves most cases fastest.',
    'Write a rule colleagues can follow without asking you.'
  ],
  story:[
    ['c','Before you start','No code. Bring three real documents from your work: one you are sure is fine to send, one you are sure is not, and one you are unsure about. The third is the useful one.'],
    ['p','Every chapter so far has assumed you may send the text. For most features, that assumption is either fine or a serious problem, and the difference is not technical.'],
    ['c','Note','This is not a legal chapter. You only need to know which three questions to ask, and who owns the answer to each.'],
    ['h','Sort your three documents'],
    ['do','Sort the documents',[
      ['p','For each of the three documents, answer in one line each: does it contain information about an identifiable person? Is it commercially confidential? Did someone outside your organisation give it to you under agreed terms?'],
      ['x','The two easy documents are settled by the first question. The uncertain one usually depends on the third: something a customer or supplier sent you, under terms nobody has read recently.'],
      ['key','The hard cases are usually about obligations in someone else’s contract, not about personal data.']
    ]],
    ['h','Three questions'],
    ['p','Ask them in this order. It settles most cases with the least effort.'],
    [
      'n',
      ['<strong>Does it identify a person?</strong> Names, contact details, case references, or anything else that identifies someone. Rules apply wherever you are, and they are not optional.','<strong>Whose confidential information is it?</strong> If it is yours, sending it is a business decision. If it is someone else’s, it is a contractual question, and the answer may be no however careful the vendor is.','<strong>What does the vendor do with it?</strong> How long they keep it, whether they train on it, and which country it is stored in. You can usually find all three in the vendor’s terms in ten minutes, and all three can change with your plan.']
    ],
    ['p','Product managers add the most value on the third question. Engineers often assume it is settled, and vendors often describe it in reassuring language.'],
    ['do','Read the terms for one tool you use',[
      ['p','Pick a tool your team already sends text to. In its own documentation, find: how long data is kept, whether it is used to train models, and which country it is processed in.'],
      ['x','Two of the three are usually easy to find, and one takes real searching. Note which plan the answers apply to. Free and paid plans often differ on exactly this question, and people often sign up on the free one.'],
      ['p','Write the three answers down with the date. This starts the vendor file that Chapter 17 asks for.']
    ]],
    ['h','Write a rule people can follow'],
    [
      'try',
      {id:'ch165-rule',
       mins:5,
       min:50,
       rows:4,
       task:'Write a rule a colleague could follow without asking you. Not a policy: three or four lines that settle the common cases and say clearly what to do with the rest.',
       ph:'You may send … . Never send … . If it came from a customer, … . If unsure, … .',
       after:'Rules that work have the same shape. They settle the common cases directly, name one clear category that is never sent, and give a specific route for uncertain cases that does not depend on someone’s judgement in the moment. Rules that say “use discretion” fail, because a person who is unsure and in a hurry reads that as permission. Name a person or a channel for the uncertain cases.'}
    ],
    ['h','Retrieval sends what it retrieves'],
    ['c','Watch out','Retrieval sends whatever it retrieves. You may have decided carefully what goes into your document store, and then built a system that sends three chunks from it with every request. Your decision about the document store is effectively a decision about every query.']
  ],
  capstone:{title:'A “may I send this?” rule, with evidence',
   brief:'Write a one-page answer to “may I send this?” for your team, based on what the vendor actually says rather than what everyone assumes.',
   steps:['List the document types your team would realistically want to send: six to ten.','Run each one through the three questions, and mark it may send, never send, or ask first.','For the “ask first” group, name who is asked and how long they take. If that answer is uncomfortable, the group is too big.','Find and write down, with dates, what your main vendor says about retention, training and location, for the plan you are actually on.','Check your retrieval documents: would every item pass your own rule?','Write the one page, and give it to a colleague to use on a document you have not seen.'],
   done:['A colleague used it on a real document without asking you a question.','The vendor’s answers are quoted with a date and a plan name.','You checked your document store against your own rule, and either it passes or you know what has to be removed.']}
},
{

  id:'ch17', num:17, part:3, minutes:30, labs:['systemcard'],
  title:'AI governance: risk tiers, system cards and oversight',
  concept:'An AI feature now ships with governance documents, and almost every question in them is a product decision. You will tier your system by risk, write a system card, run a deletion drill and design oversight that works at real volume.',
  needs:[
    ['You measured it, so you can state it','An answer key and a failure list turn a claim into a number.',14],
    ['Version and access filters are applied before ranking','Which is why they are the only guarantees you can make.',12],
    ['There is no complete defence against injection','So the controls sit outside the model, not in the prompt.',13]
  ],
  takeaway:[
    'Explain why the same system can be low risk for one use and high risk for another.',
    'Say which section of a governance document is hardest to fake, and why that makes it valuable.',
    'Describe what human oversight must include before it counts as oversight.'
  ],
  red:['A governance file full of adjectives instead of numbers','Oversight written down but impossible to actually do','Data sitting in places you cannot delete from'],
  capstone:{title:'A system card for something you own',
   brief:'Almost every compliance question turns out to be a product question. Write the document that answers them for a real system, and test the answers by carrying them out.',
   steps:['Assign an honest risk tier: what could the system affect, how badly, and who bears the harm?','Write the system card: purpose, data, limits, known failures, and what it must never be used for.','Run the deletion drill. Someone asks for their data to be removed. Follow it through every store and log, and time it.','Design oversight that can really happen: who can overrule, how they learn there is something to overrule, and what they see.','Build the vendor file: what you would need from a supplier to answer all of the above about their component.','Give the card to someone who did not build the system, and ask what is still unclear.'],
   done:['You ran the deletion drill, and you know how long it takes and where it is incomplete.','A named person could use the oversight process tomorrow without asking you.','A colleague read the card and could explain the system’s limits back to you.']},
  story:[
    ['c','Before you start','Have your Chapter 6 numbers, your Chapter 14.5 failure list and your Chapter 7 system available. Most of this chapter collects work you have already done.'],
    ['p','A normal feature ships with code, tests and release notes. An AI feature increasingly ships with a folder of governance documents too. Teams often assume the legal team writes them.'],
    ['key','Almost every question in that folder is a product question. What is this for? Who does it affect? What happens when it is wrong? Who checks it, and what evidence shows it works? The product owner should answer them.'],
    ['lab','systemcard'],
    ['q','I090'],
    ['h','Risk depends on the use, not the model'],
    ['p','Regulation is converging on one principle: <strong>the more harm a wrong answer can cause, the more you must do</strong>, whatever technology you use. The EU AI Act made this approach well known, and enterprise procurement teams now ask these questions everywhere.'],
    [
      'tb',
      ['Level','What is required','Typical examples'],
      [
        ['Not allowed','Nothing makes it acceptable','Social scoring, some biometric sorting'],
        ['High risk','Documentation, a real human check, evidence of accuracy, logging, formal assessment','Hiring, credit, education access, essential services'],
        ['Transparency only','Say it is AI; label generated media','Chatbots, generated images'],
        ['Minimal','Ordinary good practice','Most internal productivity tools']
      ]
    ],
    ['p','Two consequences often surprise teams. <strong>The use sets the risk level, not the model.</strong> Your Chapter 7 system is minimal risk as an internal FAQ and high risk if it decides benefit eligibility. And <strong>the level changes when the use changes</strong>, which often happens after launch without anyone updating the documents.'],
    ['do','Assign a risk tier to your system',[
      ['p','Take your Chapter 7 RAG system and place it in a real use case from your organisation. Assign a tier and justify it in one sentence. Then change the use case, for example from internal FAQ to customer eligibility, and assign the tier again.'],
      ['x','The same code moves to a different tier. That is why risk tiering is a product decision, not an engineering one.']
    ]],
    ['q','I091','I092'],
    ['h','Write a system card'],
    ['p','A <strong>system card</strong> is a one-page description of an AI system: what it is for, what data it uses, how it was tested, and what it gets wrong. For anything above minimal risk, you need one.'],
    ['do','Write the system card',[
      ['p','Use the generator on this page, or write it by hand under these headings.'],
      [
        'l',
        ['<strong>Purpose</strong> — what it does, for whom. Two sentences.','<strong>Explicitly out of scope</strong> — three to five bullets. The most valuable section.','<strong>Data</strong> — sources, right to use, retention, residency.','<strong>Evaluation</strong> — your Chapter 6 numbers, at a stated k, on a stated date, against a described ground truth.','<strong>Known limitations</strong> — your red marks, in plain sentences, each with the evidence that produced it.','<strong>Human oversight</strong> — which outputs are reviewed, by whom, seeing what, with what authority.','<strong>Logging &amp; incidents</strong> — what is recorded, retained how long, escalation path.','<strong>Change control</strong> — model pinned to a version, prompts versioned, eval re-run on change.']
      ],
      ['x','You have one page, and every section came from your earlier work. Chapters 6, 12, 13, 14 and 15 were the research; this is the write-up. Someone who skipped those chapters could only fill this page with adjectives.']
    ]],
    ['c','Why this matters','The “known limitations” section is the hardest to fake and the most credible. It lists real failures with the evidence behind them. The “out of scope” list is the most useful: it stops the use drifting into a higher risk tier unnoticed.'],
    ['q','I094','I131'],
    ['h','Run a deletion drill'],
    ['p','When someone asks for their data to be deleted, it may be in seven places. These are the original documents, the chunks, the search index, the cache, the provider’s logs, your own logs, and any test set built from real traffic. Many teams find at least two they cannot reach.'],
    ['do','Trace one document',[
      ['p','Pick one document from your collection. List every place a copy of it, or something derived from it, exists. Next to each, write how you would remove it.'],
      [
        'tb',
        ['Location','Removal mechanism','Can you actually do it?'],
        [
          ['Source document store','',''],
          ['Chunk store','',''],
          ['Vector index','',''],
          ['Prompt cache','',''],
          ['Provider-side logs','',''],
          ['Your request logs','',''],
          ['Eval set built from traffic','','']
        ]
      ],
      ['x','Count the rows where the honest answer is no. Report that number today.']
    ]],
    [
      'pred',
      {id:'ch17-delete',
       short:true,
       ph:'Name the store',
       ask:'Someone asks for their data to be deleted. It is in the document store, the chunk store, the search index, your logs, your test sets and the cache. Which one do teams usually forget?',
       reveal:'Most often the test sets and the logs. Someone copied the data into them for a good reason, without thinking about deletion, and nothing in them points back to a person. Caches come next, and the provider’s cache is the hardest to see: it holds pieces of documents with no index by person.',
       then:'So record where data came from when you collect it, rather than trying to reconstruct it later. A deletion request you cannot complete is a compliance failure with a date on it.'}
    ],
    ['q','I097','I098'],
    ['h','Design oversight that works at volume'],
    [
      'try',
      {id:'ch17-oversight',
       mins:6,
       min:60,
       rows:4,
       task:'Design a human check that works at real volume: four thousand outputs a day, and one reviewer. Write what the reviewer sees, which outputs reach them, and what they can do. Then say why “a human reviews every output” is not an answer.',
       ph:'they see … routed by … can do … and reviewing everything fails because …',
       after:'Reviewing everything at that volume is not realistic, and it is usually abandoned within two weeks. That is worse than not claiming it, because the document then misrepresents the control. What works is targeted review: route outputs by confidence, by how harmful the action is, and by mismatch between what was retrieved and what was answered. The reviewer must see the evidence as well as the output, and must be able to reject it, not just watch.'}
    ],
    ['q','I096','I132'],
    ['do','Specify a review point',[
      ['p','Take your highest-risk output and specify the review. Which outputs are reviewed: all, a sample, or those that fail a check? What does the reviewer see: the answer alone, or also the retrieved chunks and the quote? How long do they have, and can they overrule it?'],
      ['x','Then check: at your expected volume, can this review actually happen? At 4,000 outputs a day, a promise to review every one will not be kept, so it only exists on paper. The structured output from Chapter 8 and the code checks from Chapter 14 make targeted review possible.']
    ]],
    ['h','Build a vendor file'],
    ['do','Collect four answers from each vendor',[
      ['p','For any AI vendor your organisation uses, get four things in writing. You need the list of subprocessors and where data is stored. You also need whether your data trains their models, how to opt out, and how much notice they give before retiring a model.'],
      ['x','The last one is often left out, and it is the subject of Chapter 18. A 30-day notice to retire the model your high-risk system was tested on is an operational emergency with a date.']
    ]],
    ['q','I134','I135'],
    ['h','Shadow AI'],
    ['p','Staff are already pasting internal documents into consumer chat tools. Banning it rarely works, because the tools are useful. A sanctioned alternative that is good enough, plus clear guidance on what may be pasted, works much better. A ban changes the policy, not what people actually do.'],
    ['q','I093']
  ],
},
{

  id:'ch18', num:18, part:3, minutes:45, labs:['redmap','prd'],
  title:'The AI PRD: specs, migrations and kill switches',
  concept:'An AI spec describes a measured range of behaviour, not a fixed one. You will draw the full system from memory, assemble a PRD from the artifacts you already have, design feedback capture, and plan for the day your model is retired.',
  needs:[
    ['A test set and a list of your own failures','These turn an acceptance criterion into a number.',14],
    ['A real cost figure','The full number, with its four multipliers.',15],
    ['A risk tier and a human check','What ships alongside the code.',17]
  ],
  takeaway:[
    'Explain what replaces pass/fail acceptance criteria in an AI spec, and why.',
    'List what you rerun when your provider retires the model you built on.',
    'Explain why a kill switch is different from a rollback.'
  ],
  red:[],
  capstone:{title:'A spec that survives a model change',
   brief:'An AI spec describes a measured range and what happens outside it. Write a real one for a feature you would ship, then rehearse the day the model underneath it changes.',
   steps:['Draw the whole system from memory first. Then check it against the course and mark what you had forgotten.','Write the PRD: the job, the measured acceptance range, the failure states, and what the interface does in each.','Specify the feedback capture: what is logged on every request, so that next quarter you can tell whether quality got worse.','Rehearse the migration. The provider retires your model with sixty days’ notice. Write exactly what you rerun, and what result would stop you switching.','Name the three numbers you would put on a dashboard, and who watches them.','Write the findings page: what you now know breaks, with the chapter that showed it.'],
   done:['The acceptance criteria are ranges with numbers.','The migration plan names the tests you would rerun and the threshold that blocks the change.','Every failure state in the spec has defined interface behaviour.']},
  story:[
    ['c','Before you start','Collect your artifacts from earlier chapters: the answer key (Chapter 6), the failure taxonomy (14.5), the trifecta audit (13), the cost table (15) and the system card (17). This chapter assembles them.'],
    ['h','How an AI spec differs'],
    ['p','A normal spec assumes the same input gives the same output: do this, get that, QA checks it, done. None of that holds for AI. The same input produces a <em>range</em> of outputs, and that range shifts when your provider updates a model you do not control.'],
    ['key','An AI spec describes a measured range of behaviour, the evidence that you measured it, and what happens when it drifts.'],
    ['q','I107'],
    ['p','Four things change, and you have already built all four:'],
    [
      'tb',
      ['Normal spec','AI spec','Built in'],
      [
        ['Acceptance criteria as pass/fail','A required score on a named answer key, at stated settings','Ch. 6, 14'],
        ['A QA test plan','A fixed set of cases that must pass, plus the free code checks, run every release','Ch. 8, 14'],
        ['Done when the features work','Done when it is measured at stated numbers, with known failures written down','Ch. 6, 17'],
        ['Rollback means redeploy the last build','Rollback means a pinned model version, versioned prompts, and a switch that turns the AI off','Ch. 10, 17']
      ]
    ],
    ['h','Draw the full system from memory'],
    ['do','Draw the map',[
      ['p','Close everything and take a blank page. Draw the whole system. It is much larger than the Chapter 7 version.'],
      ['code','ingestion (extraction? layout? Ch.16)\n  → chunking + situating sentence (Ch.3, 12)\n  → embeddings + metadata (Ch.5, 12)\n  → [ query rewrite → hybrid retrieve → filter → rerank ] (Ch.12)\n  → context assembly: stable prefix | chunks | question (Ch.10)\n  → model call: routed cheap→strong, structured output (Ch.8, 11, 15)\n  → [ tools + step budget + write boundary ] (Ch.9)\n  → programmatic checks → judge → trace logged (Ch.14)\n  → human oversight point (Ch.17)\n  → answer + citation'],
      ['p','Next to every arrow, write one line in your own words. Then, in red, mark every place you have <em>seen it fail yourself</em>, with the chapter. Aim for twenty.'],
      ['x','Afterwards, check yourself against the Red-Mark Map on this site, but draw it on paper first. The gap between your drawing and the map is your revision list.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    ['h','Write the PRD'],
    ['lab','prd'],
    ['q','I117'],
    ['do','Assemble the PRD',[
      ['p','Pick one real feature. Every section comes from an artifact you already have, so this is mostly assembly, not writing.'],
      [
        'tb',
        ['Section','Source'],
        [
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
        ]
      ],
      ['x','Read the finished document once. Every number in it was measured by you, on your own documents. Few AI PRDs can say that.']
    ]],
    [
      'try',
      {id:'ch18-prd',
       mins:10,
       min:100,
       rows:8,
       task:'Write the acceptance criteria for one feature you own, as numbers rather than prose. What is measured, against which answer key, at what threshold, and what happens when a number falls below it? Then add the line most specs leave out: what the kill switch turns off, and what the product still does afterwards.',
       ph:'metric — answer key — threshold — what happens on breach … kill switch: …',
       after:'A good section can be checked by someone who is sceptical. It names the answer key and who wrote it, states thresholds as numbers, and attaches an action to each breach: block the release, alert someone, or switch to a safe mode. The kill-switch line matters because a rollback returns to previous code, which does not help when both versions share the same bad behaviour.'}
    ],
    ['h','Plan for model retirement'],
    ['p','<strong>Your model will be retired</strong>, on your provider’s schedule and with a notice period you did not choose. Switching models is not a configuration change; it requires measuring everything again. Rerun the answer key and your fixed test cases, retest whether it can be talked into misbehaving, and remeasure cost and speed. Teams that did Chapter 6 can do this in an afternoon.'],
    [
      'pred',
      {id:'ch18-deprecate',
       rows:3,
       ph:'What you rerun, and what you do not',
       ask:'Your provider gives thirty days’ notice that the model behind your live feature is being retired. Before reading on, write what you rerun, in order, and what you can safely skip.',
       reveal:'Rerun everything you measured against the old model, because a new model invalidates those measurements. That means the full test set against your answer key, the judge’s agreement with your own grading (the judge is also a model call), your costs at the new prices, and your slowest response times. Do not skip the judge: a judge checked against the old model has not been checked against the new one.',
       then:'This is why a test set is lasting infrastructure, not a launch document. Teams without one do not find the problems within thirty days. They find them in production.'}
    ],
    ['q','I109'],
    ['do','Write a migration runbook',[
      ['p','Assume your model will be retired in 30 days. Write the runbook: which test suites to rerun, which numbers must match and within what tolerance, who signs off, and how you roll back if the new model is worse.'],
      ['x','Estimate how long it would take. If your answer is more than two days, you are probably missing the Chapter 6 answer key, which is what turns a migration into an afternoon’s work.']
    ]],
    ['h','Capture feedback you can use'],
    ['p','A thumbs-down on its own is almost worthless. You cannot reproduce it, and you cannot tell a wrong answer from a correct one the user disliked. A thumbs-down attached to the full trace (the question, the retrieved chunks, the prompt and model version, and the output) is a ready-made test case. The difference is about two days of engineering.'],
    ['do','Design the feedback record',[
      ['p','Specify exactly what a single thumbs-down must capture, so it can become a test case without further investigation.'],
      ['code','{ "query": "...", "rewritten_query": "...",\n  "retrieved": [{"chunk_id": 12, "score": 0.71}, ...],\n  "prompt_version": "v4", "model": "meta/llama-3.1-8b-instruct",\n  "k": 3, "output": {...}, "checks_failed": [],\n  "user_comment": "...", "timestamp": "..." }'],
      ['x','Compare this with what your organisation captures today. The gap is usually large, and closing it is the cheapest improvement on this page.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    ['q','I110'],
    ['h','A kill switch is not a rollback'],
    ['p','Roll out changes in stages, as with any product. For AI, add one thing: a <strong>kill switch</strong>. A rollback needs a new deployment. A kill switch is a flag that sends traffic to the non-AI path immediately. That only works if the non-AI path still exists and someone has tested it recently.'],
    ['q','I108'],
    ['h','Summary'],
    ['do','Write your findings page',[
      ['p','Write one page in two halves.'],
      [
        'l',
        ['<strong>What I now know breaks:</strong> your red marks, each with its evidence, such as “seen in Chapter X, on my document, with these numbers”.','<strong>What I still cannot judge:</strong> an honest list. This is your plan for what to learn next.']
      ],
      ['x','Then go back to your Chapter 1 predictions and compare them with this page.']
    ]],
    ['q','I118'],
    ['c','Note','This course has not covered model training and post-training, GPU costs and self-hosting, orchestrating many agents at scale, formal verification, or synthetic data generation. Part IV covers two topics that belong to product managers: whether to fine-tune or use a smaller model, and what the user sees when the system is wrong. The LATER page on this site lists the rest.']
  ],
}

];

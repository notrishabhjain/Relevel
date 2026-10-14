/* Part III — Measuring it, costing it, shipping it (Chapters 14–18)
   The product half: checking quality at volume, what it really costs,
   documents that are pictures, the paperwork, and the spec. */

window.PART3 = [
{

  id:'ch14', num:14, part:3, curriculumTier:'selective', phase:2, prerequisites:['ch6'], nextUnits:['ch145','ch17','ch18','ch19'], minutes:35, labs:['judge'],
  title:'Evaluation at scale: code checks and LLM judges',
  concept:'Grading by hand stops working at around fifty questions. You’ll combine free code checks with an LLM judge, then measure how often the judge agrees with you before you trust its scores.',
  needs:[
    ['You wrote the answers down first','Ten questions with correct answers, written before testing.',6],
    ['Fetching more also fetches more irrelevant chunks','This is the trade-off from Chapter 6, and the choice is yours.',6]
  ],
  takeaway:[
    'Name the three ways to grade an AI answer, and say what each is good at.',
    'Explain why an LLM judge is not a measurement until you have checked how often it agrees with you.',
    'Test your own judge for known biases, such as favouring longer answers.'
  ],
  red:['A grader nobody checked against human marking','Longer answers scoring higher for no reason','Testing on questions that look nothing like real ones'],
  capstone:{
    title:'Build an automatic marker, and check how far to trust it',
    brief:'Marking every output by hand doesn’t scale, so you’ll want a model to mark the tool’s output. But a marker nobody has checked is not a measurement. In this chapter you learned the three ways to grade an answer. You also learned that a judge must be tested against your own marking and against its known biases. Now you’ll build a marker for the tool’s cleaned text, and check it.',
    where:'Your <code>chapter-14</code> notebook, to build and run the marker. Mark the fifty outputs by hand as well, and write the agreement figure in the notes box below.',
    steps:[
      'Write the marking rules a careful person would use for one question: “Is the cleaned text safe and still readable?” Spell out what counts as safe (every personal detail removed or masked) and what counts as readable (the sentence still makes sense).',
      'Run the free checks first. Does any text shaped like a PAN or an Aadhaar number still appear in the cleaned text? Does the text still have its main words? Count how many outputs fail these checks without needing a model.',
      'Build the model-based marker from your rules and let it mark fifty cleaned outputs. Mark the same fifty yourself, by hand.',
      'Calculate how often the marker agrees with you. Look at the disagreements: is the marker too strict, too lenient, or both?',
      'Test it for a bias towards length: take ten outputs and make each one twice as long without changing its meaning. Does the mark change?',
      'Write the range of marks in which you would read the output yourself instead of trusting the marker.'
    ],
    done:[
      'Your marking rules.',
      'The number of outputs that failed the free checks.',
      'The agreement between the marker and you on the same fifty outputs.',
      'The result of the length test.',
      'The range of marks where you would not trust the marker.'
    ]
  },
  story:[
    ['c','Before you start','Open a new notebook called <code>chapter-14</code>. Bring your structured RAG output from Chapter 8.5 and your Chapter 6 answer key.'],
    ['p','In the last chapter you looked at what can go wrong when a system reads text it shouldn’t trust. Now we turn to a plainer question: how do you know whether your system’s answers are any good?'],
    ['p','You already know one way. In Chapter 6 you wrote ten questions and their correct answers, and then graded the system yourself. That is still the most reliable way to know whether something works.'],
    ['p','But it has a limit. Grading by hand stops being practical at around fifty questions, and a real product gets thousands a week. This chapter shows you how to grade at that size, and how to check that the grader itself deserves your trust.'],
    ['h','Three ways to grade an answer'],
    ['p','Every quality process combines three kinds of grader. They cost different amounts, and each is good at different things. The table shows where each one fits.'],
    [
      'tb',
      ['Grader','Cost','Good at','Bad at'],
      [
        ['<strong>Code</strong>','Almost free','Checking things like these: is the format correct, does it cite a source, is a number in a sensible range, is it fast enough.','Anything that needs judgement'],
        ['<strong>A person</strong>','Very expensive','Everything. A person is how you define what correct means.','Slow, and two people often disagree'],
        ['<strong>An LLM judge</strong>','Cheap and fast','Questions like these: is this supported by the source, which of two answers is better.','Has specific biases you must measure']
      ]
    ],
    ['h','Start with code checks'],
    ['p','Let’s start with code, because it’s free and most teams don’t use enough of it. Many bad answers fail in ways a program can spot. A citation might be missing. It might point to a chunk that was never retrieved. A quote might not be in the source, or a number might fall outside any sensible range.'],
    ['p','Each of these checks is only a few lines of code, and it can run on every change you make.'],
    ['q','I041','I042'],
    ['do','Write the code checks',[
      ['p','Before you build any judge, write the checks that your structured output from Chapter 8 makes possible.'],
      ['code','def programmatic_checks(record, retrieved_ids):\n    issues = []\n    if record["found"] and not record.get("source_chunk_ids"):\n        issues.append("claimed found but cited nothing")\n    for cid in record.get("source_chunk_ids", []):\n        if cid not in retrieved_ids:\n            issues.append(f"cited chunk {cid} that was never retrieved")\n    q = record.get("supporting_quote", "")\n    if q and not any(q[:40] in chunks[i] for i in retrieved_ids):\n        issues.append("quote not found verbatim in any retrieved chunk")\n    return issues'],
      ['x','Run it on your ten Chapter 6 answers. The last check tests whether the quote appears word for word in the source. It catches invented citations for free on every release, which makes it the cheapest quality control in the course.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['p','Code can’t judge everything, though. It can’t tell you whether an answer is actually supported by its source. For that kind of question, we bring in a model as the grader.'],
    ['h','Build an LLM judge'],
    ['p','An <strong>LLM judge</strong> is a model that grades another model’s output. It’s cheap and fast, but you must check it before you trust it.'],
    ['key','Check an LLM judge against your own grading before you trust it. Unchecked, it is just another guess from the same kind of system that produced the answer.'],
    ['p','You can see a judge at work in the lab below.'],
    ['lab','judge'],
    ['q','I048'],
    ['p','Now let’s write one yourself.'],
    ['do','Write a judge with a rubric',[
      ['code','JUDGE = """You are grading an answer against a source passage.\n\nPassage:\n{ctx}\n\nQuestion: {q}\nAnswer: {a}\n\nGrade GROUNDEDNESS only — is every claim in the answer supported by the passage?\nRespond as JSON:\n{{"verdict": "grounded" | "partially_grounded" | "unsupported",\n  "unsupported_claim": "<quote the first unsupported claim, or empty>"}}\nDo not reward length, fluency, or confidence."""\n\ndef judge(q, a, ctx):\n    r = client.chat.completions.create(\n        model="meta/llama-3.1-8b-instruct", temperature=0,\n        messages=[{"role":"user","content":JUDGE.format(ctx=ctx, q=q, a=a)}]\n    )\n    return json.loads(r.choices[0].message.content)'],
      ['x','Look at how this judge is designed. It grades one narrow thing. It must quote the claim it objects to. And it’s told to ignore known biases. A judge asked to “rate quality from 1 to 10” produces numbers you can’t act on.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['h','Measure agreement'],
    ['p','So how do you check a judge? You measure <strong>agreement</strong>. Grade fifty answers yourself, have the judge grade the same fifty, and count how often you agree. If agreement is low, the judge’s scores aren’t reliable.'],
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
      ['x','Look closely at the disagreements, because they tell you more than the score. A judge that is consistently lenient on one type of failure is usable, as long as you know about it. A judge whose errors are random is not usable.'],
      ['c','Tip','Before running, predict your agreement out of 10. Afterwards, note whether the disagreements are consistent or scattered.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['h','Known judge biases'],
    ['p','Even a judge that agrees with you fairly often can lean in predictable ways. These leanings are called biases, and LLM judges have a few well-known ones.'],
    ['p','First, they score <strong>longer answers higher</strong>, even when the extra words add nothing. Second, when they compare two answers, they tend to favour <strong>whichever answer they saw first</strong>.'],
    ['p','The fixes are simple, and they work. Grade one specific thing rather than overall quality. Compare two answers rather than scoring one, and swap their order. Require the judge to quote the sentence its verdict is based on.'],
    ['q','I049','I050'],
    ['do','Test your judge for length bias',[
      ['p','Take one correct, short answer. Write a padded version with the same claims in three times as many words, with more hedging and structure. Judge both.'],
      ['x','The padded version often scores at least as well, and sometimes better, even though it contains no extra correct information. You have just measured a bias that affects many published evaluation results.']
    ]],
    ['h','Summary'],
    ['p','Let’s pull the chapter together. There are three kinds of grader: code, a person and an LLM judge. Use free code checks first, then a judge for the questions code can’t answer.'],
    ['key','A judge you have checked against your own grading is a measuring tool. A judge you have not checked will tend to agree with the model it is grading.'],
    ['p','One more thing to keep in mind. Judges tell you how often something is wrong, not <em>what</em> is wrong. The next chapter covers the most useful activity in AI quality work, and it needs no model at all.']
  ]
},
{
  /* ch14 carried seven new terms and did two different jobs: building a
     grader that scales, and reading failures by hand, which scales to
     nothing and produces most of the improvement. They are two chapters. */
  id:'ch145', num:14.5, part:3, curriculumTier:'selective', phase:2, prerequisites:['ch14','ch6'], nextUnits:['ch16e','b6'], minutes:25, labs:[],
  title:'Error analysis: reading failures by hand',
  concept:'Reading real outputs and naming what went wrong is the most useful quality activity there is, and it needs no model or budget. You’ll read failures, group them, count them, and turn the biggest groups into test cases.',
  needs:[
    ['An LLM judge can grade at scale','And you know how far yours can be trusted.',14],
    ['Write the answer key before testing','It’s the same idea, applied to failures instead of questions.',6]
  ],
  takeaway:[
    'Turn a pile of real failures into named, countable groups.',
    'Decide which group to fix first, based on counts and consequences.',
    'Explain why a generic benchmark cannot do this for your product.'
  ],
  capstone:{
    title:'Read a hundred real outputs, and name the ways the tool fails',
    brief:'A scoreboard says how many mistakes the tool makes. It doesn’t say why. In this chapter you learned to read real failures by hand, describe them in your own words, and only then group and count them. Now you’ll do that for Bharat Privacy Guard, and use the result to grow the answer key.',
    where:'Written only. No code and no notebook. Work on paper or in a spreadsheet.',
    steps:[
      'Collect a hundred outputs from the tool. Use sentences you or your interviewees wrote (made up, or with every real detail changed), not only the ones you already know it handles.',
      'Read each output. Whenever the tool got something wrong, write one line in your own words about what went wrong. Do not group them yet, because grouping too early hides surprises.',
      'Now group your notes. Give each group a name, for example “number split by a space”, “name in Devanagari missed” or “order number mistaken for Aadhaar”. Count each group.',
      'Rank the groups by the count multiplied by how badly each failure hurts a real person.',
      'For the top group, write what would have to change: the rules, the model’s instructions, the answer format, or something that is not an AI problem at all.',
      'Add the top two groups as new rows to the answer key. Save it as <code>evals/answer-key-v3.csv</code>, with about 50 rows.'
    ],
    done:[
      'A hundred outputs with a note on every one that went wrong.',
      'A named, counted and ranked list of failure groups.',
      'A note on what would need to change for the top group.',
      'The answer key, version 3, with about 50 rows.'
    ]
  },
  story:[
    ['c','Before you start','No code and no notebook. You need real outputs from something you own or use, such as support replies, generated summaries or search results, and about an hour. Bring a pen.'],
    ['p','In the last chapter you built graders that can mark answers at scale. They tell you how often something goes wrong. But they don’t tell you what is going wrong, and that’s what you need to know before you can fix anything.'],
    ['p','This chapter is about finding that out, and the method is simple enough to feel old-fashioned. You read real outputs yourself, with a pen in hand. It costs nothing, and it often gives you more improvement than any other quality work.'],
    ['h','What error analysis is'],
    ['p','Start with a picture. Imagine a teacher who gets a pile of exam papers back with a score on each. The scores say who did badly, but not why. So she sits down, reads the wrong answers, and notices that half the class made the same mistake in the same question.'],
    ['p','Error analysis works the same way, on your system’s outputs.'],
    ['key','Read a hundred real outputs. For each one that went wrong, write down what went wrong in your own words. Then group the notes and name the groups. This is called <strong>error analysis</strong>, and it is the most valuable quality work in this field.'],
    ['q','I052','I125'],
    ['p','Let’s try a small version right now.'],
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
    ['p','Now do the same on the system you’ve been building, with a few more outputs.'],
    ['do','Analyse twenty outputs by hand',[
      ['p','Collect 20 outputs from your Chapter 12 pipeline, across varied questions. Read each one against its source. For each failure, write a plain note: <em>a sentence, not a category</em>. Then group the notes.'],
      ['x','You’ll end up with 4 to 7 named groups. This is your <strong>failure taxonomy</strong>, which just means your own named list of the ways the system fails. Count each group, because the largest one is what to fix next. Keep the list. Chapter 17 uses it for the known-limitations section, and Chapter 18 uses it for the regression suite.']
    ]],
    ['h','Turn failures into test cases'],
    ['p','Each group you found becomes new rows in your test set. A generic benchmark can’t do this for you, because it doesn’t have your users or your documents.'],
    ['p','This forms a loop: real traffic → read the failures → add test cases → make a fix → measure the improvement → more traffic. Each round makes your test set a better picture of real use. Models change every few months, but your answer key and your failure list stay useful.'],
    ['q','I054'],
    ['c','Note','Before release, you ask whether the system passes the answer key. After release, you ask whether users are better off: fewer escalations, fewer edits, more tasks finished. The first can pass while the second fails. You need both, and the second is what the business cares about.'],
    ['q','I043'],
    ['p','Let’s pull it together. Reading real failures in your own words, grouping them and counting them tells you what to fix first. The biggest groups then turn into test cases, so the next round starts from a stronger answer key.'],
    ['p','Next, you’ll look at cost modelling: what an AI feature really costs to run.']
  ],
},
{

  id:'ch15', num:15, part:3, curriculumTier:'selective', phase:2, prerequisites:['ch1','ch11'], nextUnits:['ch18','ch17o','b1'], minutes:30, labs:['costmodel'],
  title:'Cost modelling: what an AI feature really costs',
  concept:'Most business cases guess the cost of an AI feature at three to twenty times too low, because they price one clean call. Here you’ll measure real token counts, apply the four multipliers, build a cheaper cascade, and answer the margin question.',
  needs:[
    ['You can read the usage block','Tokens in, tokens out, times a price. This is the arithmetic from Chapter 1.',1],
    ['You know what multiplies it','Retrieved chunks (3, 12), retries (8), agent steps (9) and reasoning tokens (11) all make a request bigger.',11]
  ],
  takeaway:[
    'Name the four things that make a simple cost estimate wrong, and say which chapter each one comes from.',
    'Explain what a cascade is and why it usually saves money.',
    'Say what you would ask a vendor who quotes you a price per query.'
  ],
  red:['A cost estimate missing the four multipliers','A feature that loses money on every query at scale'],
  capstone:{
    title:'Build a cost model from measurements',
    brief:'Many teams never ask, “What does this cost at real volume, and what happens to our margin if it succeeds?” In this chapter you learned the four things that make a simple cost estimate wrong. You also learned how a cascade, which tries the cheap option first and uses the expensive one only when needed, saves money. Now you’ll build the cost model for Bharat Privacy Guard from your own measurements, not from guesses.',
    where:'Your <code>chapter-15</code> notebook, to measure the tokens and build the cascade. Write the three cost numbers in the notes box below.',
    steps:[
      'Choose the feature: a bank chat in which every customer message is checked. Measure the tokens your tool uses on twenty realistic messages from your answer key, and take the average.',
      'Add the things people forget: retries, the policy text sent every time, the conversation history, and requests that fail and are sent again.',
      'Work out the cost per message, per thousand messages, and per month at a volume you would really expect. Say how many messages you assume and why.',
      'Build a cascade: send every message to the pattern checker first (it is free), and send only the unsure ones on to the model. Measure what share needs the model.',
      'Produce three numbers: the cost today, the cost at ten times the volume, and the cost if the cheap path stops working and everything goes to the model.',
      'Answer the margin question: if a company paid you a fixed price per message, at what price and volume would the tool stop making money?'
    ],
    done:[
      'The average number of tokens from twenty real messages.',
      'The cost per message, per thousand and per month, with your volume assumption.',
      'The share of messages that reach the model in the cascade.',
      'The three numbers: today, ten times the volume, and no cheap path.',
      'The price below which the tool loses money.'
    ]
  },
  story:[
    ['c','Before you start','Open a new notebook called <code>chapter-15</code>. You’ll need your Chapter 12 pipeline and your Chapter 6 answer key, because you’ll run both of them here.'],
    ['p','In the last chapter you read failures by hand to see why a feature goes wrong. This chapter asks a different question: what does the feature cost? You’ll need the answer sooner than you think.'],
    ['p','At some point someone senior will ask what this feature costs at scale. “It depends on tokens” is not an answer. By the end of this chapter, you’ll have a real one.'],
    ['h','The basic formula'],
    ['p','Let’s start with the simple version. The cost of one query is the tokens you send in times the input price, plus the tokens that come out times the output price. Multiply that by the number of queries in a month, and you have a monthly bill.'],
    ['code','cost per query = (tokens in  × rate for input)\n              + (tokens out × rate for output)\n\nmonthly = cost per query × queries per month'],
    ['p','Most business cases stop here. The trouble is that their number is often three to twenty times too low. The formula itself is right. It’s just applied to the wrong quantities.'],
    [
      'pred',
      {id:'ch15-mult',
       short:true,
       ph:'A multiple, like 5×',
       ask:'Make a guess first. A business case prices a query using only tokens in and tokens out. Once the feature is built, how many times too low is that figure, usually?',
       reveal:'Between three and twenty times. The formula prices one clean call. Real features retrieve several documents, retry when the output is malformed, take several steps and pay for reasoning the user never sees.',
       then:'You’ve met all four of those in earlier chapters. Each one is a design choice, which means each one is something you can change.'}
    ],
    ['h','The four multipliers'],
    ['p','So what makes a real feature cost so much more than one clean call? Four things, and the table below lists them. As you read it, look at the last column. It tells you how much each one adds.'],
    [
      'tb',
      ['Multiplier','Chapter','What it does'],
      [
        ['Number of chunks retrieved','Ch. 6','Retrieving 8 chunks instead of 3 nearly triples the input on every query.'],
        ['Retries for malformed output','Ch. 8','Each retry sends the context again, so record the real extra tokens and time.'],
        ['Agent steps','Ch. 9','Six steps send a growing conversation six times, often 10–20× the cost of one call.'],
        ['Reasoning tokens','Ch. 11','They are charged at the output price, and are often several times longer than the visible answer.']
      ]
    ],
    ['p','Now try the cost calculator below. Change the four multipliers and watch the monthly figure move.'],
    ['lab','costmodel'],
    ['q','I003'],
    ['h','Measure your own token counts'],
    ['p','Numbers from a calculator are a start. Numbers from your own documents are better. So next you’ll measure what your pipeline really uses.'],
    ['do','Measure real token counts',[
      ['p','Run your Chapter 12 pipeline on the ten questions in your answer key, and record the real token counts.'],
      ['code','rows = []\nfor q in ground_truth_questions:\n    r = rag_answer_instrumented(q, k=3)   # returns .usage alongside the answer\n    rows.append({"q": q, "in": r.usage.prompt_tokens,\n                 "out": r.usage.completion_tokens})\n\navg_in  = sum(r["in"]  for r in rows) / len(rows)\navg_out = sum(r["out"] for r in rows) / len(rows)\nprint(f"avg in {avg_in:.0f} / avg out {avg_out:.0f} tokens per query")'],
      ['x','You now have real numbers from your own documents. Everything after this is arithmetic on measured values instead of guesses.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['p','Let’s see why this matters with an example. Say a feature is quoted at 40 paise per query. It retrieves eight documents, retries one time in eight, takes four steps, and uses reasoning by default. That feature does not cost 50 paise. It costs several rupees. A gap like that can decide whether a feature survives.'],
    ['q','I100'],
    ['h','Add the multipliers'],
    ['p','Now you’ll put the four multipliers into code, so you can see the gap between the simple estimate and the real one.'],
    ['do','Add the multipliers',[
      ['c','Tip','Before you run this step, guess how many times higher the full cost will be than the simple estimate.'],
      ['code','def monthly_cost(avg_in, avg_out, queries,\n                 in_rate, out_rate,           # per 1M tokens\n                 retry_rate=0.0, agent_steps=1,\n                 reasoning_ratio=0.0, cache_hit=0.0):\n    eff_in  = avg_in * agent_steps * (1 - cache_hit * 0.9)\n    eff_out = avg_out * agent_steps * (1 + reasoning_ratio)\n    per_q = (eff_in/1e6)*in_rate + (eff_out/1e6)*out_rate\n    per_q *= (1 + retry_rate)\n    return per_q, per_q * queries\n\nbase = monthly_cost(avg_in, avg_out, 10_000, 0.20, 0.60)\nreal = monthly_cost(avg_in, avg_out, 10_000, 0.20, 0.60,\n                    retry_rate=0.10, agent_steps=4,\n                    reasoning_ratio=2.0, cache_hit=0.0)\nprint(f"naive: {base[1]:.2f}   with multipliers: {real[1]:.2f}   ratio {real[1]/base[1]:.1f}x")'],
      ['x','The ratio is often between 8× and 20×. Write it down. It shows why “we estimated the token cost” is not the same as “we estimated the cost”.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['h','Five ways to lower the cost'],
    ['p','Once you can see the real cost, the next question is how to bring it down. Here are five ways, roughly in order of how much they help.'],
    [
      'n',
      ['<strong>Choose the model.</strong> Prices across one provider’s range differ by ten to a hundred times. This matters more than anything else on the list.','<strong>Use a cheap model first.</strong> Send everything to a small model, and pass on only what fails a check. Chapter 11 showed that most real requests are simple lookups, which a small model handles well.','<strong>Retrieve less.</strong> Every token you don’t send costs nothing. Reranking from Chapter 12 lets you retrieve fewer chunks <em>and</em> improve quality.','<strong>Use caching.</strong> This comes from Chapter 10. Put the parts that never change at the start of the request.','<strong>Batch work that can wait.</strong> Batch processing is often much cheaper. Overnight jobs don’t need interactive pricing.']
    ],
    ['q','I099','I004'],
    ['h','Build a cascade'],
    ['p','The second idea on that list is worth trying yourself. It has a name, and you’ll build it now.'],
    ['do','Build a cascade',[
      ['p','A <strong>cascade</strong> sends each request to a cheap model first. It moves to an expensive model only when a check fails. Use your Chapter 8 structured output as the trigger: <code>found: false</code> or a missing quote.'],
      ['code','def cascade(question, k=3):\n    small = rag_answer(question, k=k, model=CHEAP_MODEL)\n    if small["found"] and programmatic_checks(small, small["source_chunk_ids"]) == []:\n        return small, "cheap"\n    return rag_answer(question, k=k, model=STRONG_MODEL), "escalated"\n\nesc = sum(1 for q in ground_truth_questions if cascade(q)[1] == "escalated")\nprint(f"escalation rate: {esc}/{len(ground_truth_questions)}")'],
      ['x','You get an escalation rate, often 20–40%. Work out the blended cost, and grade accuracy again against your Chapter 6 answer key. Now you have both sides of the trade-off: what the cascade saved, and what it cost in quality, if anything.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    [
      'try',
      {id:'ch15-model',
       mins:6,
       min:60,
       rows:5,
       task:'Work out the real cost of a real feature. Estimate the tokens in and out per query. Apply the four multipliers, using the values your design actually uses, and multiply by the monthly volume. Then write the sentence you would say to a finance director, including what would make the number wrong.',
       ph:'base … × retrieved … × retries … × steps … × thinking … = per query … monthly … and it is wrong if …',
       after:'A good answer is one you can defend, not one that is precise. It states its assumptions, names the multiplier that matters most (usually retrieved chunks or agent steps), and says what would make it wrong, such as different traffic, more retries or a price change. For example: “Four lakh a month at 300,000 queries, retrieving eight documents, with a 12% retry rate. The number moves most if retries go above 20%.”'}
    ],
    ['h','Report cost, speed and accuracy together'],
    ['p','Cost is only one side of the story. A feature can be cheap and still be a bad feature, so you need to look at it from three sides at once.'],
    ['c','Note','Speed is also a cost. Report the slow responses, not only the average, as in Chapter 11. A cheap but slow feature can fail just as badly as a fast but expensive one. Always report cost per query, typical response time and slow-case response time together.'],
    ['q','I101'],
    ['p','The best way to keep all three in view is one small table. You’ll fill it in next.'],
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
      ['x','This table is the main thing you take away from this chapter. It turns an argument about architecture into a decision based on evidence, and it fits on one slide.']
    ]],
    ['h','The margin question'],
    ['p','There’s one more question, and it decides most AI features. It has nothing to do with tokens: <strong>does the feature make money at scale?</strong>'],
    ['p','Suppose a query costs three rupees, and the value it protects is two. No amount of prompt tuning will fix that. So answer this question on day one, before the pilot.'],
    ['q','I005'],
    ['do','Calculate the margin',[
      ['p','Do one honest calculation. What does this feature cost per user per month at the usage you expect, and what is it worth per user per month?'],
      ['x','If the value isn’t clearly larger than the cost, you’ve learned that before the pilot instead of after it.']
    ]],
    ['q','I102'],
    ['p','So here is the chapter in short. A simple estimate prices one clean call, and the real bill is several times bigger. Four multipliers explain the gap, and a cascade is one good way to shrink it. Next, you’ll look at documents that aren’t clean text at all: tables, scans and images.']

  ],
},
{

  id:'ch16', num:16, part:3, curriculumTier:'selective', phase:2, prerequisites:['ch3','ch11'], nextUnits:['ch165','ch15mm'], minutes:25, labs:[],
  title:'Document extraction: tables, scans and images',
  concept:'Real documents are often scans, tables and forms, not clean text. Turning them into text is where many document projects fail without anyone noticing. In this chapter you’ll find an extraction error in your own documents, and compare text extraction with giving the model the page image.',
  needs:[
    ['Everything so far assumed clean text','Chapter 3 gave you the text, but someone had to produce it first.',3],
    ['Slow responses are a product problem','Look at the slowest responses, not the average.',11]
  ],
  takeaway:[
    'Explain why tables are the most error-prone part of a document, and why no metric catches the error.',
    'Say what you would ask a vendor who claims to support all document formats.',
    'Explain why voice changes the architecture, not just the interface.'
  ],
  red:['Table rows and columns destroyed when the text was extracted','Right page found, wrong number quoted','A corpus assumed to be clean text'],
  capstone:{
    title:'Test the tool on photos of ID cards',
    brief:'Many personal details reach a website as photos, not as typed text. Reading text out of an image makes mistakes, and no error message warns you. In this chapter you learned why tables and scans are the weakest part of a document pipeline, and why no metric catches the problem. Now you’ll test the tool on text read from images of ID cards.',
    where:'Your <code>chapter-16</code> notebook, to read the images and compare. Write the error rate in the notes box below.',
    steps:[
      'Collect ten images. Make them yourself: mock ID cards with made-up details, printed or handwritten and photographed. Never use a photo of a real person’s card.',
      'Turn each image into text with an OCR tool (software that reads text from pictures). Compare the text with the original and mark every reading mistake.',
      'Run the pattern checker on the text. For every ID in the original, record whether it was found. Note typical mistakes, such as the letter O read as the digit 0 or the letter l read as 1.',
      'Give three of the images straight to a model that can read images, and ask it to list the IDs. Compare it with the OCR route on the same three.',
      'Check every digit of one important field, such as each Aadhaar number, by hand. Write down how long this took. That is the real cost of trusting the result.',
      'Add the scanned-text rows to the answer key and save it as <code>evals/answer-key-v4.csv</code>. Estimate the error rate for scanned text.'
    ],
    done:[
      'Ten made-up ID images and the text read from them, with the mistakes marked.',
      'For each ID, whether the pattern checker found it.',
      'A comparison of the OCR route and the image-reading model on three images.',
      'The time the hand-check took.',
      'The answer key, version 4, and an estimated error rate for scanned text.'
    ]
  },
  story:[
    ['c','Before you start','Open a new notebook called <code>chapter-16</code>. Find one page from your own documents that contains a real table, such as financial figures, eligibility bands or a rate card.'],
    ['p','Back in Chapter 3, you pasted your document’s text into a file. That quietly assumed the text already existed. In most organisations, a lot of it doesn’t. This chapter is about what happens when it has to be made from pages, and why that step so often goes wrong.'],
    ['h','Real documents are pages, not text'],
    ['p','Think about what a real document collection holds. There are scanned contracts with signatures and stamps. There are financial statements, where the meaning depends on which row meets which column. There are manuals with warnings next to diagrams, screenshots in tickets, and handwritten forms.'],
    ['key','Everything you have built so far assumes someone already turned these pages into text. That step is where many document projects fail, before anything you measured.'],
    [
      'pred',
      {id:'ch16-clean',
       short:true,
       ph:'A percentage',
       ask:'Make a guess first. In a real company’s documents, such as contracts, statements, policies and scanned letters, what share is clean, digital, correctly ordered text that needs no work?',
       reveal:'Usually much less than a proposal assumes. A large share is scanned images. Much of the digital part still has structure that plain extraction destroys, such as two columns, tables, or headers repeated on every page. Every estimate that depends on this number inherits its error.',
       then:'Few teams check this, and it is the cheapest way to stop a project from failing six weeks in.'}
    ],
    ['h','Why tables fail silently'],
    ['p','Let’s look at tables first, because they go wrong most often. Imagine a text extractor reading a table with three columns. It often produces one flat line of numbers. Every value survives, but the <em>relationships</em> are lost: which figure belongs to which row, for which year.'],
    ['p','What happens next is the worrying part. Retrieval works correctly, and the model answers fluently. But the number it quotes comes from the wrong column. Nothing in your pipeline can catch this, because nothing after extraction ever sees the original page.'],
    ['q','I078','I079'],
    ['p','Don’t take this on trust. You’ll now see it happen on your own table page.'],
    ['do','Find an extraction error',[
      ['p','Extract the text from your table page with whatever tool you have, and read the extracted text.'],
      ['x','Read it the way a machine would. Can you tell which figure belongs to which row and column from the text alone? Often you can’t. Write down the specific relationship that was lost.']
    ]],
    ['do','Ask a question only the table answers',[
      ['c','Tip','Before you run this, guess whether your pipeline will get the table question right. People often expect a failure. What surprises them is how <em>fluent</em> the wrong answer is.'],
      ['p','Run the extracted text through your Chapter 7 pipeline. Use a question whose answer sits at a specific row and column.'],
      ['x','You get a confident answer, often with a number from a neighbouring row or column. Every metric in your Chapter 6 evaluation would have scored this as a retrieval success.']
    ]],
    ['h','Two ways to handle pages'],
    ['p','If turning a page into text loses the table, what else can you do? You can skip the text step and give the model the picture of the page. The table below puts the two approaches side by side. As you read it, notice that neither one wins on every row.'],
    [
      'tb',
      ['','Turn the page into text first','Give the model the page image'],
      [
        ['Cost','It is cheap.','It costs more per page.'],
        ['Tables and layout','They are often destroyed.','They are mostly preserved.'],
        ['Cutting it up','Chapter 3 applies as written.','A page is the natural piece.'],
        ['Exact codes and IDs','They are kept accurately.','There are occasional misreads, such as 0 for O and 1 for l.'],
        ['Checking it later','The text can be quoted and compared.','You need a way to point back at the page.']
      ]
    ],
    ['q','I080'],
    ['p','Now try the second approach on the same page and the same question.'],
    ['do','Give the model the page image',[
      ['p','Save the same page as an image, and give it to a vision-capable model with the same question.'],
      ['code','import base64\nwith open("page.png","rb") as f:\n    b64 = base64.b64encode(f.read()).decode()\n\nr = client.chat.completions.create(\n    model=VISION_MODEL, temperature=0,\n    messages=[{"role":"user","content":[\n        {"type":"text","text":"Answer only from this page. "\n                              "Quote the row and column labels you used."},\n        {"type":"image_url",\n         "image_url":{"url":f"data:image/png;base64,{b64}"}}\n    ]}]\n)\nprint(r.choices[0].message.content)'],
      ['x','The answer is usually correct. You also asked for the row and column labels, so you can check it in seconds. This is the supporting-quote idea from Chapter 8, applied to tables.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['p','In practice, teams often combine both. They extract text for searching. Then, when the question is about a table, a figure or a form, they give the model the <em>page image</em> for the final answer.'],
    ['p','One more check is worth doing, because it tells you how much to trust the image route.'],
    ['do','Check every cell',[
      ['p','Ask the vision model to write out the whole table as a structured record, using a Chapter 8 schema. Then check every cell against the page by eye.'],
      ['x','Expect a few errors. They often show up in cells that are hard to tell apart: merged headers, footnote markers, or empty versus zero. Count them. That error rate is your extraction quality number, and it belongs in every document-AI proposal.']
    ]],
    ['h','Voice: a different constraint'],
    ['p','So far we’ve talked about pages. Voice is a different case, because it changes the main constraint from accuracy to time. In text, a two-second wait is fine. In speech, two seconds of silence breaks the conversation, and people start talking over it. The whole round trip has to fit in that time: speech in, model, speech out.'],
    ['p','This means voice problems are about conversation. You need to know when the person has finished speaking, handle interruptions, and decide what to say while the system works. The reasoning models from Chapter 11 are usually too slow for voice, however accurate they are.'],
    ['q','I076'],
    ['h','Audit your documents before you build'],
    ['p','All of this leads to one habit. Before you design anything, find out what your documents actually look like.'],
    ['c','Tip','Before any document-AI project, get three numbers. What share of the documents is clean digital text? What share is scanned? And what share of the <em>answers people need</em> is inside tables and figures? The third is usually the largest, and it is rarely asked. It decides the architecture, and one afternoon with fifty documents is enough to estimate it.'],
    [
      'try',
      {id:'ch16-audit',
       mins:6,
       min:60,
       rows:4,
       task:'Run that check on a document collection you have. What share is clean digital text, what share is scanned, and what share has tables or layout that carry the meaning? Estimate if you must, but say how you would measure it properly, and what you would change if half turned out to be scanned.',
       ph:'clean … scanned … layout-bearing … how I would measure … what changes if scanned is 50%',
       after:'To measure it properly, sample fifty documents at random from real traffic, not fifty chosen by an enthusiastic colleague. If much of it is scanned, the architecture changes. Extraction quality becomes something you measure with its own answer key, and the project gains a phase that most proposals leave out. Saying this before the project starts is worth more than any retrieval technique in the course.'}
    ],
    ['q','I081'],
    ['do','Audit a document sample',[
      ['p','Sample 30 documents. Classify each one as clean digital text, scanned image or mixed. Then, separately, sample 20 questions that people actually ask, and mark how many need a table or figure to answer.'],
      ['x','You get two percentages. They decide whether your architecture should be text-first, image-first or a mix, and they take an afternoon to measure.']
    ]],
    ['p','To sum up: a document is a set of pages, not a pile of text. Tables fail quietly, the page image is often the safer route, and voice is a different problem because of time. Next, you’ll turn to a question that stops many projects before they start: what you are allowed to send to a model at all.']
  ],
},
{
  /* Arc 5. Governance in ch17 is about the file you produce. This is the
     question that actually stops people on a Tuesday. */
  id:'ch165', num:16.5, part:3, curriculumTier:'selective', phase:2, prerequisites:['ch1','ch16'], nextUnits:[], minutes:20, labs:[],
  title:'Data handling: what you are allowed to send',
  concept:'Before you send a document to a model, you need to know whether you’re allowed to. Three questions settle most cases. You’ll sort real documents, read a vendor’s actual terms, and write a rule your colleagues can follow.',
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
    ['c','Before you start','There’s no code in this chapter. Bring three real documents from your work: one you are sure is fine to send, one you are sure is not, and one you are unsure about. The third is the useful one.'],
    ['p','In the last chapter you looked at what your documents really contain. Now comes the next question: may you send them to a model at all? Every chapter so far has quietly assumed that you may.'],
    ['p','For most features, that assumption is either fine or a serious problem. What separates the two is not technical.'],
    ['c','Note','This is not a legal chapter. You only need to know which three questions to ask, and who owns the answer to each.'],
    ['h','Sort your three documents'],
    ['p','Let’s begin with your own documents, because the questions make more sense once you’ve used them.'],
    ['do','Sort the documents',[
      ['p','For each of the three documents, answer three questions in one line each. Does it contain information about an identifiable person? Is it commercially confidential? Did someone outside your organisation give it to you under agreed terms?'],
      ['x','The two easy documents are settled by the first question. The uncertain one usually depends on the third: something a customer or supplier sent you, under terms nobody has read recently.'],
      ['key','The hard cases are usually about obligations in someone else’s contract, not about personal data.']
    ]],
    ['h','Three questions'],
    ['p','What you just did can be turned into a habit. There are three questions to ask, and the order matters. Asked in this order, they settle most cases with the least effort.'],
    [
      'n',
      ['<strong>Does it identify a person?</strong> Look for names, contact details, case references, or anything else that identifies someone. Rules apply wherever you are, and they are not optional.','<strong>Whose confidential information is it?</strong> If it is yours, sending it is a business decision. If it is someone else’s, it is a contractual question, and the answer may be no however careful the vendor is.','<strong>What does the vendor do with it?</strong> Find out how long they keep it, whether they train on it, and which country it is stored in. You can usually find all three in the vendor’s terms in ten minutes, and all three can change with your plan.']
    ],
    ['p','Product managers add the most value on the third question. Engineers often assume it is already settled, and vendors often describe it in reassuring language. So it helps to read the terms yourself.'],
    ['do','Read the terms for one tool you use',[
      ['p','Pick a tool your team already sends text to. In its own documentation, find three things: how long data is kept, whether it is used to train models, and which country it is processed in.'],
      ['x','Two of the three are usually easy to find, and one takes real searching. Note which plan the answers apply to. Free and paid plans often differ on exactly this question, and people often sign up on the free one.'],
      ['p','Write the three answers down with the date. This starts the vendor file that Chapter 17 asks for.']
    ]],
    ['h','Write a rule people can follow'],
    ['p','Knowing the answers is only half the job. The other half is making sure your colleagues act on them, even when you aren’t in the room.'],
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
    ['p','There is one last catch, and it surprises many teams.'],
    ['c','Watch out','Retrieval sends whatever it retrieves. You may have decided carefully what goes into your document store, and then built a system that sends three chunks from it with every request. Your decision about the document store is effectively a decision about every query.'],
    ['p','To sum up, ask three questions in order: does it identify a person, whose confidential information is it, and what does the vendor do with it.'],
    ['p','Then turn your answers into a rule that others can follow without you. Next, in Chapter 17, you’ll see how a team writes all of this down for a whole AI system, through risk tiers, system cards and oversight.']
  ],
  capstone:{
    title:'Write the rule for what the tool may send to an outside provider',
    brief:'Bharat Privacy Guard exists to protect people’s data, so it must not leak data itself. When the context judge calls an outside AI model, the text it sends is a risk. This chapter gave you three questions that settle whether a document may be sent. The answer must come from what the provider actually says, not from what everyone assumes. Now you’ll write that rule for your tool.',
    where:'Written, no code. Use the three questions from the chapter. Write the one-page rule in the notes box below.',
    steps:[
      'List six to ten kinds of text the tool might send to the outside model: for example a sentence with no personal detail, a sentence with a name, a sentence with an Aadhaar number, a cleaned sentence with the details replaced by tags, and a whole chat history.',
      'Take each kind through the three questions from the chapter, and mark it: may send, never send, or ask first.',
      'For the “ask first” group, say who is asked and how long they take. If the answer is uncomfortable, the group is too big.',
      'Find out what your chosen provider says about keeping your data, training on it, and where it is processed, for the plan you would really use. Write it down with the date you read it.',
      'Check your own tool: would every message it sends outward pass your rule? If not, write what changes. For example: “Send only the cleaned sentence, never the original.”',
      'Write the rule on one page and give it to a colleague to apply to three sentences they have not seen. Note where they hesitated.'
    ],
    done:[
      'A table of six to ten kinds of text, each marked may send, never send or ask first.',
      'What the provider says about retention, training and location, with the date.',
      'A note on whether your own tool passes its rule, and the change needed if not.',
      'The one-page rule, tried out by someone else.'
    ]
  }
},
{

  id:'ch17', num:17, part:3, curriculumTier:'selective', phase:2, prerequisites:['ch14','ch12','ch13'], nextUnits:['ch18'], minutes:30, labs:['systemcard'],
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
  capstone:{
    title:'Write the system card for Bharat Privacy Guard',
    brief:'Almost every compliance question turns out to be a product question. A system card is the document that answers those questions for one system. In this chapter you saw that the same system can be low risk for one use and high risk for another. You also saw which section of a governance document is hardest to fake, and what human oversight must include before it counts as oversight. Now you write the system card for your own tool.',
    where:'Written only. Gather the numbers and notes from earlier chapters, then write the card in the notes box below.',
    steps:[
      'Give the tool a risk level and say why. Ask: what could it affect, how badly, and who bears the harm? A tool that decides what is hidden before data goes to an AI is not low risk if it can miss an Aadhaar number.',
      'Write the card with five headings: what it is for; what data it handles; what it can do, with its measured quality from your scoreboard; the failures you know about; and what it must never be used for.',
      'Include this sentence: “This tool helps an organisation collect and pass on less personal data. It does not make anyone compliant with the DPDP Act.” Write two lines explaining why that sentence matters.',
      'Run a deletion drill. Someone asks you to delete everything about them. Follow the request through every place the tool stores or logs anything, and time it. Write down where you could not tell.',
      'Design the human oversight: who can overrule the tool, how they find out there is something to overrule, and what they see on their screen.',
      'Write what you would need from an outside provider to answer all of the above about their part of the system.',
      'Give the card to someone who did not build the tool and ask what is still unclear. Fix those parts.'
    ],
    done:[
      'A risk level with a reason.',
      'A system card with the five headings.',
      'The sentence about not making anyone compliant, and why it matters.',
      'The result of the deletion drill, with the time it took.',
      'A description of the human oversight and a list of what you need from a provider.',
      'The questions your reader still had, and your fixes.'
    ]
  },
  story:[
    ['c','Before you start','Keep three things close: your Chapter 6 numbers, your Chapter 14.5 failure list and your Chapter 7 system. Most of this chapter simply collects work you have already done.'],
    ['p','Over the last few chapters you built a system, measured it and tried to break it. Now comes a question that every team meets sooner or later: how do you show other people that it is safe to use?'],
    ['p','A normal feature ships with code, tests and release notes. An AI feature increasingly ships with a folder of governance documents as well. Teams often assume the legal team writes them.'],
    ['key','Almost every question in that folder is really a product question. What is this for? Who does it affect? What happens when it is wrong? Who checks it, and what evidence shows it works? The product owner is the person who should answer them.'],
    ['p','You can get a feel for this with the generator below. It builds a system card from your answers, and we’ll write one by hand in a moment.'],
    ['lab','systemcard'],
    ['q','I090'],
    ['h','Risk depends on the use, not the model'],
    ['p','Rules for AI are slowly settling on one idea: <strong>the more harm a wrong answer can cause, the more you must do</strong>, whatever technology you use. The EU AI Act made this approach well known. Enterprise procurement teams now ask the same questions everywhere.'],
    ['p','The table below shows four levels of risk. Read it from top to bottom. As you go down, what is required gets lighter.'],
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
    ['p','Two things from this table often surprise teams. First, <strong>the use sets the risk level, not the model.</strong> Your Chapter 7 system is minimal risk as an internal FAQ. The very same system is high risk if it decides who is eligible for a benefit.'],
    ['p','Second, <strong>the level changes when the use changes</strong>. That often happens after launch, and nobody updates the documents.'],
    ['do','Assign a risk tier to your system',[
      ['p','Take your Chapter 7 RAG system and place it in a real use case from your organisation. Assign a tier and justify it in one sentence. Then change the use case, for example from internal FAQ to customer eligibility, and assign the tier again.'],
      ['x','The same code moves to a different tier. That is why risk tiering is a product decision, not an engineering one.']
    ]],
    ['q','I091','I092'],
    ['h','Write a system card'],
    ['p','Once you know the tier, you need a way to show your work. That is what a <strong>system card</strong> is for. It is a one-page description of an AI system: what it is for, what data it uses, how it was tested, and what it gets wrong. For anything above minimal risk, you need one.'],
    ['do','Write the system card',[
      ['p','Use the generator on this page, or write it by hand under these headings.'],
      [
        'l',
        ['<strong>Purpose.</strong> Say what it does and for whom, in two sentences.','<strong>Explicitly out of scope.</strong> List three to five things it must not be used for. This is the most valuable section.','<strong>Data.</strong> Say where the data comes from, your right to use it, how long you keep it, and where it is stored.','<strong>Evaluation.</strong> Give your Chapter 6 numbers, at a stated k, on a stated date, against a described ground truth.','<strong>Known limitations.</strong> Write your red marks as plain sentences, each with the evidence that produced it.','<strong>Human oversight.</strong> Say which outputs are reviewed, by whom, seeing what, and with what authority.','<strong>Logging &amp; incidents.</strong> Say what is recorded, how long it is kept, and who it is escalated to.','<strong>Change control.</strong> Say that the model is pinned to a version, prompts are versioned, and the eval is re-run on every change.']
      ],
      ['x','You have one page, and every section came from your earlier work. Chapters 6, 12, 13, 14 and 15 were the research; this is the write-up. Someone who skipped those chapters could only fill this page with adjectives.']
    ]],
    ['c','Why this matters','The “known limitations” section is the hardest to fake, and that makes it the most credible. It lists real failures with the evidence behind them. The “out of scope” list is the most useful, because it stops the use from drifting into a higher risk tier without anyone noticing.'],
    ['q','I094','I131'],
    ['h','Run a deletion drill'],
    ['p','Now a very practical test. Suppose someone asks you to delete their data. Where would you have to look?'],
    ['p','The answer is that it may be in seven places. These are the original documents, the chunks, the search copy, the cache, the provider’s logs, your own logs, and any test set built from real traffic. Many teams find at least two that they cannot reach.'],
    ['do','Trace one document',[
      ['p','Pick one document from your collection. List every place a copy of it, or something made from it, exists. Next to each, write how you would remove it.'],
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
       ask:'Someone asks for their data to be deleted. It is in the document store, the chunk store, the search copy, your logs, your test sets and the cache. Which one do teams usually forget?',
       reveal:'Most often the test sets and the logs. Someone copied the data into them for a good reason, without thinking about deletion, and nothing in them points back to a person. Caches come next, and the provider’s cache is the hardest to see: it holds pieces of documents with nothing that lists them by person.',
       then:'So record where data came from when you collect it, rather than trying to reconstruct it later. A deletion request you cannot complete is a compliance failure with a date on it.'}
    ],
    ['q','I097','I098'],
    ['h','Design oversight that works at volume'],
    ['p','Almost every system card says “a human reviews the output”. It sounds reassuring. But does it still work when thousands of outputs arrive every day? Try designing one and see.'],
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
    ['p','Now do the same for your own system.'],
    ['do','Specify a review point',[
      ['p','Take your highest-risk output and specify the review. Which outputs are reviewed: all, a sample, or those that fail a check? What does the reviewer see: the answer alone, or also the retrieved chunks and the quote? How long do they have, and can they overrule it?'],
      ['x','Then check: at your expected volume, can this review actually happen? At 4,000 outputs a day, a promise to review every one will not be kept, so it only exists on paper. The structured output from Chapter 8 and the code checks from Chapter 14 make targeted review possible.']
    ]],
    ['h','Build a vendor file'],
    ['p','So far we’ve looked at your own system. But most organisations also depend on AI from outside vendors, and your governance has to cover their part too.'],
    ['do','Collect four answers from each vendor',[
      ['p','For any AI vendor your organisation uses, get four things in writing. First, the list of subprocessors, and where data is stored. Then whether your data trains their models, and how to opt out. Last, how much notice they give before retiring a model.'],
      ['x','The last one is often left out, and it is the subject of Chapter 18. A 30-day notice to retire the model your high-risk system was tested on is an operational emergency with a date.']
    ]],
    ['q','I134','I135'],
    ['h','Shadow AI'],
    ['p','There is one more risk, and it sits outside every system you build. Staff are already pasting internal documents into consumer chat tools. This is called shadow AI.'],
    ['p','Banning it rarely works, because the tools are useful. A ban changes the policy, not what people actually do. A better answer is a sanctioned alternative that is good enough, plus clear guidance on what may be pasted.'],
    ['q','I093'],
    ['p','That completes the governance picture: a risk tier, a system card, a deletion drill, real oversight and a vendor file. Next, in Chapter 18, you’ll pull your artifacts together into one requirements document and plan for the day your model is retired.']
  ],
},
{

  id:'ch18', num:18, part:3, curriculumTier:'selective', phase:2, prerequisites:['ch14','ch15','ch17'], nextUnits:['ch185','ch20'], minutes:45, labs:['redmap','prd'],
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
  capstone:{
    title:'Write a requirements document that survives a change of model',
    brief:'An AI requirements document describes a measured range of quality, and what happens outside that range. In this chapter you saw what replaces pass or fail in an AI specification. You also saw what to rerun when a provider retires your model, and why a kill switch is different from a rollback. Now you write the requirements for Bharat Privacy Guard and rehearse the day its model changes.',
    where:'Written only. Collect the notes and numbers named in the chapter, then write the document in the notes box below.',
    steps:[
      'Draw the whole system from memory first, without looking at your earlier diagrams. Then compare with your records and mark what you had forgotten.',
      'Write the requirements document. In the quality section use ranges, not promises, for example: “finds at least 95 of every 100 Aadhaar numbers on the answer key, give or take 3.” For each failure, write what the user sees.',
      'Specify what is recorded on every request, so that next quarter you can tell whether quality got worse.',
      'Rehearse the day the model provider retires the model you use, with sixty days’ notice. Write exactly what you will rerun, and what result would stop you switching.',
      'Name the three numbers you would put on a dashboard, and who watches them.',
      'Write the findings page: what you now know breaks, with the chapter that showed you each one.'
    ],
    done:[
      'A drawing from memory with the things you forgot marked.',
      'A requirements document with measured ranges and a user-facing description of each failure.',
      'What is recorded on every request.',
      'The model-retirement rehearsal: what you rerun and what result would stop you.',
      'The dashboard numbers and their owner, and the findings page.'
    ]
  },
  story:[
    ['c','Before you start','Collect your artifacts from earlier chapters: the answer key (Chapter 6), the failure taxonomy (14.5), the trifecta audit (13), the cost table (15) and the system card (17). This chapter puts them together.'],
    ['p','In the last chapter you wrote a system card and designed oversight. That was one document. Now you’ll gather everything you’ve made so far into a single requirements document for an AI feature, and plan for the day the model underneath it changes.'],
    ['h','How an AI spec differs'],
    ['p','Think about how a normal spec works. You say what the feature should do, QA checks it, and it either passes or it doesn’t. That only works because the same input always gives the same output.'],
    ['p','None of that holds for AI. The same input produces a <em>range</em> of outputs. And that range can shift when your provider updates a model that you don’t control.'],
    ['key','An AI spec describes a measured range of behaviour, the evidence that you measured it, and what happens when it drifts.'],
    ['q','I107'],
    ['p','So what actually changes in a spec? Four things, and you have already built all four. The table below puts the normal version next to the AI version, and the last column tells you which chapters it came from.'],
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
    ['p','Before you write anything, let’s find out how much of the system you can actually hold in your head. The best way is to draw it without looking.'],
    ['do','Draw the map',[
      ['p','Close everything and take a blank page. Draw the whole system. It is much larger than the Chapter 7 version.'],
      ['code','ingestion (extraction? layout? Ch.16)\n  → chunking + situating sentence (Ch.3, 12)\n  → embeddings + metadata (Ch.5, 12)\n  → [ query rewrite → hybrid retrieve → filter → rerank ] (Ch.12)\n  → context assembly: stable prefix | chunks | question (Ch.10)\n  → model call: routed cheap→strong, structured output (Ch.8, 11, 15)\n  → [ tools + step budget + write boundary ] (Ch.9)\n  → programmatic checks → judge → trace logged (Ch.14)\n  → human oversight point (Ch.17)\n  → answer + citation'],
      ['p','Next to every arrow, write one line in your own words. Then, in red, mark every place where you have <em>seen it fail yourself</em>, with the chapter. Aim for twenty.'],
      ['x','Afterwards, check yourself against the Red-Mark Map on this site, but draw it on paper first. The gap between your drawing and the map is your revision list.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['h','Write the PRD'],
    ['p','A PRD is a product requirements document. You’ve already made most of the pieces. The tool on this page helps you put them in order.'],
    ['lab','prd'],
    ['q','I117'],
    ['do','Assemble the PRD',[
      ['p','Pick one real feature. Every section comes from an artifact you already have, so this is mostly assembly, not writing. The table shows where each section comes from.'],
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
    ['p','The hardest section to write is the acceptance criteria. Try it now, for a feature you own.'],
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
    ['p','Here is something every AI team learns eventually. <strong>Your model will be retired.</strong> It happens on your provider’s schedule, with a notice period you did not choose.'],
    ['p','Switching to a new model is not a configuration change. It means measuring everything again. You rerun the answer key and your fixed test cases. You retest whether the model can be talked into misbehaving. And you remeasure cost and speed. Teams that did Chapter 6 can do all this in an afternoon.'],
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
    ['p','Now turn that into a plan you could hand to a colleague.'],
    ['do','Write a migration runbook',[
      ['p','Assume your model will be retired in 30 days. Write the runbook: which test suites to rerun, which numbers must match and within what tolerance, who signs off, and how you roll back if the new model is worse.'],
      ['x','Estimate how long it would take. If your answer is more than two days, you are probably missing the Chapter 6 answer key, which is what turns a migration into an afternoon’s work.']
    ]],
    ['h','Capture feedback you can use'],
    ['p','Think about the thumbs-down button in a chat app. On its own, it is almost worthless. You can’t reproduce what happened, and you can’t tell a wrong answer from a correct one that the user simply disliked.'],
    ['p','Now attach the full trace to that thumbs-down: the question, the retrieved chunks, the prompt and model version, and the output. It becomes a ready-made test case. The difference is about two days of engineering.'],
    ['do','Design the feedback record',[
      ['p','Specify exactly what a single thumbs-down must capture, so that it can become a test case without further investigation.'],
      ['code','{ "query": "...", "rewritten_query": "...",\n  "retrieved": [{"chunk_id": 12, "score": 0.71}, ...],\n  "prompt_version": "v4", "model": "meta/llama-3.1-8b-instruct",\n  "k": 3, "output": {...}, "checks_failed": [],\n  "user_comment": "...", "timestamp": "..." }'],
      ['x','Compare this with what your organisation captures today. The gap is usually large, and closing it is the cheapest improvement on this page.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['q','I110'],
    ['h','A kill switch is not a rollback'],
    ['p','You already roll out changes in stages, as with any product. For AI, add one more thing: a <strong>kill switch</strong>.'],
    ['p','The difference is speed. A rollback needs a new deployment. A kill switch is a flag that sends traffic to the non-AI path immediately. That only works if the non-AI path still exists and someone has tested it recently.'],
    ['q','I108'],
    ['h','Summary'],
    ['p','You’re nearly done with this part of the course. The last job is to look back at everything you’ve built and say, honestly, what you know and what you don’t.'],
    ['do','Write your findings page',[
      ['p','Write one page in two halves.'],
      [
        'l',
        ['<strong>What I now know breaks.</strong> List your red marks, each with its evidence, such as “seen in Chapter X, on my document, with these numbers”.','<strong>What I still cannot judge.</strong> Make this an honest list. It is your plan for what to learn next.']
      ],
      ['x','Then go back to your Chapter 1 predictions and compare them with this page.']
    ]],
    ['q','I118'],
    ['c','Note','This course has not covered model training and post-training, GPU costs and self-hosting, orchestrating many agents at scale, formal verification, or synthetic data generation. Part IV covers two topics that belong to product managers: whether to fine-tune or use a smaller model, and what the user sees when the system is wrong. The LATER page on this site lists the rest.'],
    ['p','Next, you’ll face a very common decision: when a vendor offers to sell you what you’ve learned to build, should you build it yourself or buy it?']
  ],
}

];

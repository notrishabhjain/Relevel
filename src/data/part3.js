/* Part III — Measuring it, costing it, shipping it (Chapters 14–18)
   The product half: checking quality at volume, what it really costs,
   documents that are pictures, the paperwork, and the spec. */

window.PART3 = [
{

  id:'ch14', num:14, part:3, curriculumTier:'selective', phase:2, prerequisites:['ch6'], nextUnits:['ch145','ch17','ch18','ch19'], minutes:50, labs:['judge'],
  title:'Evaluation at scale: code checks and LLM judges',
  concept:'Checking every answer by hand stops working at about fifty questions. So you let a small program do the free checks. Then a second model marks the rest, like a second student marking homework. This second model is called an LLM judge. Before you trust its marks, you count how often it agrees with you.',
  needs:[
    ['You wrote the answers down first','Ten questions with the right answers, written before you tested. This is your teacher\'s answer key.',6],
    ['Fetching more chunks also brings more chunks that do not help','This is the give-and-take from Chapter 6: fetch more cards and some are the wrong ones. You choose the balance.',6]
  ],
  takeaway:[
    'Name the three ways to mark an AI answer, and say what each one does best.',
    'Say why an LLM judge\'s marks are only a guess until you count how often it agrees with you.',
    'Test your own judge for its known habits. One habit is liking longer answers more.'
  ],
  red:['A grader nobody checked against human marking','Longer answers scoring higher for no reason','Testing on questions that look nothing like real ones'],
  capstone:{
    title:'Build an automatic marker, and check how far to trust it',
    brief:'Marking every output by hand takes too long. So you want a model to mark the tool\'s output. But a marker nobody has checked is only a guess. In this chapter you learned three ways to mark an answer. You also learned to test a judge against your own marks, and against its known habits. Now you build a marker for the tool\'s cleaned text, and check it.',
    where:'Your notebook for this chapter (the page where you run code in boxes). Use it to build and run the marker. Also mark the twenty outputs by hand. Write how often you agree in the notes box below. Short version for the route, about 20 minutes: steps 1, 3 and 4.',
    steps:[
      'Write the marking rules a careful person would follow for one question: “Is the cleaned text safe and still readable?” Say what safe means (every personal detail is removed or hidden). Say what readable means (the sentence still makes sense).',
      'Run the free checks first. Does text shaped like a PAN or an Aadhaar number still show in the cleaned text? Does the text still have its main words? Count how many outputs fail these checks. No model is needed.',
      'Turn your rules into a marker that is itself a model. Let it mark twenty cleaned outputs. Then mark the same twenty yourself, by hand.',
      'Count how often the marker agrees with you. Look at where you disagree. Is the marker too strict, too soft, or both?',
      'Test it for a liking for long answers. Take ten outputs. Make each one twice as long, but keep its meaning. Does the mark change?',
      'Write the range of marks where you would read the output yourself, instead of trusting the marker.',
      'Save the marking rules, how often you agree and the disagreements as <code>docs/judge-check.md</code> in your repository (your online folder that remembers every change).'
    ],
    done:[
      'Your marking rules.',
      'How many outputs failed the free checks.',
      'How often the marker and you agree on the same twenty outputs.',
      'The result of the long-answer test.',
      'The range of marks where you would not trust the marker.'
    ]
  },
  story:[
    ['c','Before you start','You will use your form-style RAG output from Chapter 8.5 (an open-book answer filled into fixed boxes) and your Chapter 6 answer key. Both stay with you in the notebook session.'],
    ['p','In the last chapter you saw what can go wrong when a system reads text it should not trust. Now we ask a plainer question. How do you know if your system\'s answers are any good?'],
    ['p','You already know one way. In Chapter 6 you wrote ten questions with the right answers. Then you marked the system yourself, like a teacher with an answer key. This is still the most trusted way to know if something works.'],
    ['p','But this way has a limit. Marking by hand is too slow at about fifty questions, and a real product gets thousands each week. This chapter shows how to mark that many answers. It also shows how to check that the marker deserves your trust.'],
    ['h','Three ways to mark an answer'],
    ['p','Good quality work uses three kinds of markers. Think of a school exam. A machine can check the spelling. A teacher can read for meaning. Each costs a different amount, and each is good at different things. The table shows where each fits.'],
    [
      'tb',
      ['Marker','Cost','Good at','Bad at'],
      [
        ['<strong>Code</strong> (a small program)','Almost free','Quick yes-or-no checks: is the format right, is a source named, is a number in a sensible range, is it fast enough.','Anything that needs a thinking mind'],
        ['<strong>A person</strong>','Very costly','Everything. A person decides what “right” means.','Slow, and two people often disagree'],
        ['<strong>An LLM judge</strong> (a second model that marks)','Cheap and quick','Questions like these: does the source back this answer, and which of two answers is better.','Has habits (called biases) that you must measure']
      ]
    ],
    ['h','Start with code checks'],
    ['p','Start with code, because it is free and most teams use too little of it. Many bad answers fail in ways a program can spot, like a clerk who checks that a form has a signature. A source might not be named. It might point to a chunk (one index card of text) that was never fetched. A quote might not be in the source. A number might be far too big or small.'],
    ['p','Each of these checks is only a few lines of code. It can run every time you change something.'],
    ['q','I041','I042'],
    ['do','Write the code checks',[
      ['p','First run this starter cell. It gets everything ready, like laying out the ingredients before you cook. It sets up the helper and the values that this chapter’s cells use. You can change them later if you like.'],
      ['code','import json\n\nMODEL = "meta/llama-3.1-8b-instruct"\n\nimport numpy as np\n\ndef embed(texts, input_type):\n    resp = client.embeddings.create(\n        model="nvidia/nv-embedqa-e5-v5", input=texts,\n        extra_body={"input_type": input_type, "truncate": "END"})\n    return [np.array(d.embedding) for d in resp.data]\n\ndef cosine(a, b):\n    return float(np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b)))\n\n# Eight made-up cards about ID formats. Replace them with your own cards.\nchunks = [\n    "A PAN has five capital letters, then four digits, then one capital letter.",\n    "An Aadhaar number has twelve digits, often written in groups of four. It does not start with 0 or 1.",\n    "An Indian mobile number has ten digits. The first digit is 6, 7, 8 or 9.",\n    "A PIN code has six digits. The first digit is not zero.",\n    "An IFSC code has four letters, then a zero, then six letters or digits.",\n    "A bank account number has nine to eighteen digits. A nearby word such as account helps to be sure.",\n    "A GSTIN has fifteen characters. It contains the holder\'s PAN.",\n    "A vehicle registration has state letters, a number, series letters and four digits.",\n]\nchunk_vecs = embed(chunks, "passage")\n\nground_truth_questions = [\n    "How many digits does an Aadhaar number have?",\n    "What does an IFSC code look like?",\n    "Which digit can an Indian mobile number start with?",\n    "What does this document say about cricket?",\n]\n\ndef rag_answer(question, k=3, model=MODEL):\n    q = embed([question], "query")[0]\n    scores = [cosine(q, cv) for cv in chunk_vecs]\n    ids = sorted(range(len(chunks)), key=lambda i: scores[i], reverse=True)[:k]\n    context = "\\n\\n".join(f"[{i}] {chunks[i]}" for i in ids)\n    r = client.chat.completions.create(\n        model=model, temperature=0,\n        messages=[\n            {"role": "system", "content": ("Answer ONLY from the provided context. If the answer is not in the "\n             "context, reply exactly: \'Not found in the provided documents.\' "\n             "Never invent details.")},\n            {"role": "user", "content":\n                f"Context:\\n{context}\\n\\nQuestion: {question}"}])\n    text = r.choices[0].message.content\n    found = "Not found" not in text\n    return {"answer": text, "found": found,\n            "source_chunk_ids": ids if found else [],\n            "supporting_quote": "", "usage": r.usage}'],
      ['p','Before you build any judge, write the checks that your Chapter 8 structured output (the form-style reply) makes possible. Its fixed boxes are easy for a program to read.'],
      ['code','def programmatic_checks(record, retrieved_ids):\n    issues = []\n    if record["found"] and not record.get("source_chunk_ids"):\n        issues.append("claimed found but cited nothing")\n    for cid in record.get("source_chunk_ids", []):\n        if cid not in retrieved_ids:\n            issues.append(f"cited chunk {cid} that was never retrieved")\n    q = record.get("supporting_quote", "")\n    if q and not any(q[:40] in chunks[i] for i in retrieved_ids):\n        issues.append("quote not found verbatim in any retrieved chunk")\n    return issues'],
      ['x','Run it on your ten Chapter 6 answers. The last check sees if the quote is in the source, word for word. It catches made-up quotes for free on every release (every new version you ship). This is the cheapest quality check in the course.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','This chapter’s starter cell (the first box of code, which sets things up) has not run. Run it first. Then run the cell that failed again. If the page reloaded, press <strong>Restore</strong> in the notebook bar before you start.','An authentication error, or the number 401 (your key was not accepted)','Your key (your secret password for the model) did not reach the code. Run the cell that loads the key again. Then check the name you saved it under. It must match <a href="#/setup">Setup</a> exactly, like a password. Capital letters count.','A message that a module (a piece of ready-made code) was not found','The code imports (brings in) a library this page does not have. A library is ready-made code someone else wrote, like a borrowed recipe book. <code>openai</code> is built in. numpy and the other common libraries load by themselves the first time a cell imports them. A library that needs PyTorch cannot run inside a web page. The chapter tells you when that happens.','It runs, but your numbers are different from the ones printed above','That is normal, not a mistake. Models change over time, and your text is not the same as ours. It is like two cooks making the same dish: the taste is close, never exactly the same. Look at which way your numbers move, and roughly by how much. You do not need the exact number. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['p','Code cannot mark everything. It cannot tell you if an answer is really backed by its source. For that kind of question, we ask a model to be the marker.'],
    ['h','Build an LLM judge'],
    ['p','An <strong>LLM judge</strong> is a model that marks another model\'s answer. Think of a second student marking homework. It is cheap and quick. But you must check it before you trust it.'],
    ['key','Check an LLM judge against your own marks before you trust it. Unchecked, it is just another guess, from the same kind of system that wrote the answer.'],
    ['c','You already know this','Checking a judge against your own marks is like checking a second evaluator on a tender committee. If two evaluators score the same bids differently, you find out why before you trust either one.'],
    ['p','In the lab below you can watch a judge at work.'],
    ['lab','judge'],
    ['q','I048'],
    ['p','Now write one yourself.'],
    ['do','Write a judge with a rubric (a marking scheme)',[
      ['code','JUDGE = """You are grading an answer against a source passage.\n\nPassage:\n{ctx}\n\nQuestion: {q}\nAnswer: {a}\n\nGrade GROUNDEDNESS only — is every claim in the answer supported by the passage?\nRespond as JSON:\n{{"verdict": "grounded" | "partially_grounded" | "unsupported",\n  "unsupported_claim": "<quote the first unsupported claim, or empty>"}}\nDo not reward length, fluency, or confidence."""\n\ndef judge(q, a, ctx):\n    schema = {\n        "type": "object",\n        "properties": {\n            "verdict": {"type": "string",\n                        "enum": ["grounded", "partially_grounded", "unsupported"]},\n            "unsupported_claim": {"type": "string"}},\n        "required": ["verdict", "unsupported_claim"],\n        "additionalProperties": False}\n    r = client.chat.completions.create(\n        model=MODEL, temperature=0,\n        messages=[{"role": "user", "content": JUDGE.format(ctx=ctx, q=q, a=a)}],\n        response_format={"type": "json_schema",\n                         "json_schema": {"name": "verdict", "schema": schema}})\n    return json.loads(r.choices[0].message.content)'],
      ['x','See how this judge is built. It marks one narrow thing. It must quote the claim it objects to. And it is told to ignore its known habits. A judge told to “rate quality from 1 to 10” gives numbers you cannot use.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','This chapter’s starter cell (the first box of code, which sets things up) has not run. Run it first. Then run the cell that failed again. If the page reloaded, press <strong>Restore</strong> in the notebook bar before you start.','An authentication error, or the number 401 (your key was not accepted)','Your key (your secret password for the model) did not reach the code. Run the cell that loads the key again. Then check the name you saved it under. It must match <a href="#/setup">Setup</a> exactly, like a password. Capital letters count.','A message that a module (a piece of ready-made code) was not found','The code imports (brings in) a library this page does not have. A library is ready-made code someone else wrote, like a borrowed recipe book. <code>openai</code> is built in. numpy and the other common libraries load by themselves the first time a cell imports them. A library that needs PyTorch cannot run inside a web page. The chapter tells you when that happens.','It runs, but your numbers are different from the ones printed above','That is normal, not a mistake. Models change over time, and your text is not the same as ours. It is like two cooks making the same dish: the taste is close, never exactly the same. Look at which way your numbers move, and roughly by how much. You do not need the exact number. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['h','Count how often you agree'],
    ['p','So how do you check a judge? You count <strong>agreement</strong>, which means how often two markers give the same mark. Mark twenty answers yourself. Let the judge mark the same twenty. Count the times you match. If you match rarely, the judge\'s marks cannot be trusted.'],
    [
      'pred',
      {id:'ch14-agree',
       short:true,
       ph:'A fraction, like 7/10',
       ask:'The book gave one team\'s agreement. Now guess your own. You mark twenty answers by hand, and the judge marks the same twenty. How often will it match you on the first try?',
       reveal:'Six or seven out of ten is normal on a first try. How the mismatches look matters more than the number. If they bunch together, you have found something to fix. For example, the judge may pass every answer that sounds unsure. If they are spread out with no pattern, your own idea of a good answer is probably blurry. Changing the judge prompt (its note) will not help.',
       then:'So look at whether the mismatches bunch up or spread out. That tells you whether to fix the judge or your own idea of “good”.'}
    ],
    ['q','I051'],
    ['do','Mark the judge',[
      ['p','Most teams skip this step. Label all ten of your Chapter 6 answers by hand: grounded (backed by the source), partly grounded, or unsupported. Then run the judge on the same ten and compare.'],
      ['code','# Your own marks, one per question, written before you look at the judge\'s.\n# These four are placeholders. Replace them with yours.\nhuman_labels = ["grounded", "grounded", "grounded", "unsupported"]\n\njudge_labels = []\nfor q in ground_truth_questions:\n    rec = rag_answer(q)\n    ctx = "\\n".join(chunks[i] for i in rec["source_chunk_ids"])\n    judge_labels.append(judge(q, rec["answer"], ctx)["verdict"])\n\nn = len(human_labels)\nagree = sum(1 for i in range(n) if human_labels[i] == judge_labels[i])\nprint(f"agreement: {agree}/{n}")\nfor i in range(n):\n    if human_labels[i] != judge_labels[i]:\n        print(f"  Q{i}: human={human_labels[i]} judge={judge_labels[i]}")'],
      ['x','Look closely at the mismatches. They tell you more than the score. A judge that is always soft on one kind of mistake is still usable, if you know about it. A judge that goes wrong at random is not usable.'],
      ['c','Tip','Before you run it, guess how many of the 10 will match. Afterwards, note if the mismatches look alike or are spread out.'],
      ['c','Careful','Count two things apart. First, how often the judge catches the answers you marked as fails. Second, how often it passes the answers you marked as passes. When most answers pass, the plain match count can look high while the judge misses most real failures. It is like a net with big holes: it looks full, but the fish got away.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','This chapter’s starter cell (the first box of code, which sets things up) has not run. Run it first. Then run the cell that failed again. If the page reloaded, press <strong>Restore</strong> in the notebook bar before you start.','An authentication error, or the number 401 (your key was not accepted)','Your key (your secret password for the model) did not reach the code. Run the cell that loads the key again. Then check the name you saved it under. It must match <a href="#/setup">Setup</a> exactly, like a password. Capital letters count.','A message that a module (a piece of ready-made code) was not found','The code imports (brings in) a library this page does not have. A library is ready-made code someone else wrote, like a borrowed recipe book. <code>openai</code> is built in. numpy and the other common libraries load by themselves the first time a cell imports them. A library that needs PyTorch cannot run inside a web page. The chapter tells you when that happens.','It runs, but your numbers are different from the ones printed above','That is normal, not a mistake. Models change over time, and your text is not the same as ours. It is like two cooks making the same dish: the taste is close, never exactly the same. Look at which way your numbers move, and roughly by how much. You do not need the exact number. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['h','Known judge habits (biases)'],
    ['p','Even a judge that often agrees with you can lean one way, in ways you can predict. Think of a teacher who gives more marks for neat handwriting. These leanings are called biases, and LLM judges have a few well-known ones.'],
    ['p','First, they give <strong>higher marks to longer answers</strong>, even when the extra words add nothing. Second, when they compare two answers, they tend to prefer <strong>the answer they saw first</strong>.'],
    ['p','The fixes are small, and they work. Mark one specific thing, not overall quality. Put two answers side by side instead of marking one, and swap their order. Make the judge quote the sentence its verdict rests on.'],
    ['q','I049','I050'],
    ['do','Test your judge for a liking of long answers',[
      ['p','Take one correct, short answer. Write a padded copy that says the same things in three times as many words, with more “maybe” talk and more headings. Let the judge mark both.'],
      ['x','The padded copy often scores as well, and sometimes better, though it has no new correct facts. You have just measured a bias that affects many published test results.']
    ]],
    ['h','Summary'],
    ['p','Let us pull the chapter together. There are three kinds of marker: code, a person and an LLM judge. Use free code checks first. Then use a judge for the questions code cannot answer.'],
    ['key','A judge you have checked against your own marks is a real measuring tool. A judge you have not checked tends to agree with the model it is marking, like a student who copies from his neighbour.'],
    ['p','One more thing. Judges tell you how often something is wrong. They do not tell you <em>what</em> is wrong. The next chapter is about the most useful quality work there is, and it needs no model at all.']
  ]
},
{
  /* ch14 carried seven new terms and did two different jobs: building a
     grader that scales, and reading failures by hand, which scales to
     nothing and produces most of the improvement. They are two chapters. */
  id:'ch145', num:14.5, part:3, curriculumTier:'selective', phase:2, prerequisites:['ch14','ch6'], nextUnits:['ch16e','b6'], minutes:60, labs:[],
  title:'Error analysis: reading failures by hand',
  concept:'Reading real outputs and writing down what went wrong is the most useful quality work there is. It needs no model and no money. You read the failures, sort them into piles, count each pile, and turn the biggest piles into test cases.',
  needs:[
    ['An LLM judge (a second model that marks answers) can mark at large scale','And you know how far you can trust yours.',14],
    ['Write the answer key before you test','It is the same idea, used on failures instead of questions.',6]
  ],
  takeaway:[
    'Turn a heap of real failures into named piles that you can count.',
    'Choose which pile to fix first, by how big it is and how much harm it does.',
    'Say why a ready-made test set from outside cannot do this job for your product.'
  ],
  capstone:{
    title:'Read thirty real outputs, and name the ways the tool fails',
    brief:'A scoreboard tells you how many mistakes the tool makes. It does not tell you why. In this chapter you learned to read real failures by hand and describe each in your own words. Only then do you sort and count them. Now you do this for Bharat Privacy Guard, and use what you find to make the answer key bigger.',
    where:'Writing only. No code and no notebook. Use paper or a spreadsheet (a grid of rows and columns). Short version for the route, about 20 minutes: steps 1, 2, 3 and 6.',
    steps:[
      'Collect thirty outputs from the tool. Use sentences that you or the people you interviewed wrote (made up, or with every real detail changed). Do not use only the ones the tool already handles well.',
      'Read each output. Each time the tool got something wrong, write one line in your own words about what went wrong. Do not sort yet. Sorting too early hides surprises.',
      'Now sort your notes into piles. Give each pile a name, such as “number split by a space”, “name in Devanagari missed” or “order number mistaken for Aadhaar”. Count each pile.',
      'Rank the piles. Multiply each pile\'s count by how badly each failure hurts a real person.',
      'For the top pile, write what would have to change: the rules, the model\'s instructions, the answer format, or something that is not an AI problem at all.',
      'Add the top two piles as new rows in the answer key. Save it as <code>evals/answer-key-v3.csv</code> (a spreadsheet saved as plain text), with about 50 rows.'
    ],
    done:[
      'Thirty outputs, with a note on each one that went wrong.',
      'A list of failure piles, each with a name, a count and a rank.',
      'A note on what would need to change for the top pile.',
      'The answer key, version 3, with about 50 rows.'
    ]
  },
  story:[
    ['c','Before you start','No code and no notebook. You need real outputs from something you own or use, such as support replies, written summaries or search results. You need about an hour, and a pen.'],
    ['p','In the last chapter you built markers that can mark answers at large scale. They tell you how often something goes wrong. They do not tell you what is going wrong. You need that before you can fix anything.'],
    ['p','This chapter shows you how to find out. The method is so plain that it feels old-fashioned. You read real outputs yourself, pen in hand. It costs nothing, and it often helps more than any other quality work.'],
    ['h','What error analysis is'],
    ['p','Start with a picture. A teacher gets back a pile of exam papers, each with a score. The scores say who did badly, but not why. So she sits down and reads the wrong answers. She sees that half the class made the same mistake in the same question.'],
    ['p','Error analysis does the same thing with your system\'s outputs.'],
    ['key','Read thirty real outputs. For each one that went wrong, write down in your own words what went wrong. Then sort the notes into piles and name the piles. This is called <strong>error analysis</strong> (reading mistakes to see why they happen), and it is the most valuable quality work in this field.'],
    ['c','You already know this','Error analysis is like sorting complaints in a grievance office. You read the complaints first, then name the piles, and only then count. Nobody makes the categories before reading the complaints, and you should not either.'],
    ['q','I052','I125'],
    ['p','Try a small version right now.'],
    [
      'try',
      {id:'ch14-taxonomy',
       mins:8,
       min:70,
       rows:6,
       task:'Do a small version now. Take ten real outputs from something you own or use. For each one, write one sentence about what went wrong, or “fine”. Then sort the sentences into piles and name the piles. Write the piles and their counts here.',
       ph:'pile — count — one example sentence',
       after:'The key rule: write the sentence <em>before</em> you pick a category. If you pick the category first, it changes what you notice. Real piles are specific and uneven. For example: “right document, wrong clause: 4”, “answered a question the user did not ask: 3” and “named a source that does not say it: 2”. You end up with a ranked list of what to fix, made from your own traffic (the real messages people send).'}
    ],
    ['q','I053','I126'],
    ['h','Do it on your own pipeline (the chain of steps you built)'],
    ['p','Now do the same on the system you have been building, with a few more outputs.'],
    ['do','Analyse twenty outputs by hand',[
      ['p','Collect 20 outputs from your Chapter 12 pipeline, for many kinds of questions. Read each one next to its source. For each failure, write a plain note: <em>a sentence, not a category</em>. Then sort the notes into piles.'],
      ['x','You end up with 4 to 7 named piles. This is your <strong>failure taxonomy</strong>, which means your own named list of the ways the system fails. Count each pile. The biggest pile is what to fix next. Keep the list. Chapter 17 uses it for the known-limitations section, and Chapter 18 uses it for the regression suite (a set of tests you re-run after every change).']
    ]],
    ['h','Turn failures into test cases'],
    ['p','Each pile you found becomes new rows in your test set, like new questions added to an exam. A ready-made test from outside cannot do this for you, because it does not have your users or your documents.'],
    ['p','This makes a loop: real traffic, read the failures, add test cases, make a fix, measure the gain, then more traffic. Each round makes your test set a better picture of real use. Models change every few months, but your answer key and your failure list stay useful.'],
    ['q','I054'],
    ['c','Note','Before release, you ask: does the system pass the answer key? After release, you ask: are users better off? Look for fewer escalations (cases passed up to a person), fewer edits and more tasks finished. The first can pass while the second fails. You need both. The business cares most about the second.'],
    ['q','I043'],
    ['p','Let us pull it together. Read real failures in your own words, sort them and count them. That tells you what to fix first. The biggest piles then become test cases, so the next round starts with a stronger answer key.'],
    ['p','Next you will look at cost modelling: what an AI feature really costs to run.']
  ],
},
{

  id:'ch15', num:15, part:3, curriculumTier:'selective', phase:2, prerequisites:['ch1','ch11'], nextUnits:['ch18','ch17o','b1'], minutes:30, labs:['costmodel'],
  title:'Cost modelling: what an AI feature really costs',
  concept:'Most business cases guess an AI feature\'s cost at three to twenty times too low. They price one clean call, like one SMS, and forget the rest. Here you measure real token counts (tokens are small pieces of text, like Lego bricks). You apply the four multipliers, build a cheaper cascade, and answer the margin question.',
  needs:[
    ['You can read the usage block (the bill that comes with each reply)','Tokens in, tokens out, each times a price. This is the same sum as in Chapter 1.',1],
    ['You know what makes the cost bigger','Fetched chunks (3, 12), retries (8), agent steps (9) and reasoning tokens (11) all make a request bigger. Each one adds more bricks to the bill.',11]
  ],
  takeaway:[
    'Name the four things that make a simple cost guess wrong, and say which chapter each one comes from.',
    'Say what a cascade is, and why it usually saves money.',
    'Say what you would ask a vendor (a company that sells you a service) who quotes you a price per query.'
  ],
  red:['A cost estimate missing the four multipliers','A feature that loses money on every query at scale'],
  capstone:{
    title:'Build a cost model from measurements',
    brief:'Many teams never ask: “What does this cost at real volume, and what happens to our margin if it succeeds?” In this chapter you learned the four things that make a simple cost guess wrong. You also learned how a cascade saves money. A cascade tries the cheap option first, like asking the junior clerk, and calls the expensive expert only when needed. Now you build the cost model for Bharat Privacy Guard from your own measurements, not from guesses.',
    where:'Your notebook for this chapter (the page where you run code in boxes). Use it to measure the tokens and build the cascade. Write the three cost numbers in the notes box below. Short version for the route, about 20 minutes: steps 1, 3 and 5.',
    steps:[
      'Choose the feature: a bank chat in which every customer message is checked. Measure how many tokens your tool uses on twenty realistic messages from your answer key. Then find the average.',
      'Add the things people forget: retries (sending a failed request again), the policy text sent every time, the conversation history, and requests that fail and are sent again.',
      'Work out the cost per message, per thousand messages, and per month, at a volume you would really expect. Say how many messages you assume, and why.',
      'Build a cascade. Send every message to the pattern checker first (it is free). Send only the unsure ones on to the model. Measure what share needs the model.',
      'Write down three numbers: the cost today, the cost at ten times the volume, and the cost if the cheap path stops working and everything goes to the model.',
      'Answer the margin question. Say a company paid you a fixed price per message. At what price and volume would the tool stop making money?',
      'Save the three cost numbers and the table behind them as <code>docs/cost-model.md</code> in your repository (your online folder that remembers every change).'
    ],
    done:[
      'The average number of tokens in twenty real messages.',
      'The cost per message, per thousand and per month, with the volume you assumed.',
      'The share of messages that reach the model in the cascade.',
      'The three numbers: today, ten times the volume, and no cheap path.',
      'The price below which the tool loses money.'
    ]
  },
  story:[
    ['c','Before you start','You need your Chapter 12 pipeline (the chain of steps you built) and your Chapter 6 answer key, because you run both here. They stay with you in the notebook session. After a reload, press <strong>Restore</strong>.'],
    ['p','In the last chapter you read failures by hand to see why a feature goes wrong. This chapter asks a new question: what does the feature cost? You will need the answer sooner than you think.'],
    ['p','One day a senior person will ask what this feature costs at scale. “It depends on tokens” is not an answer. By the end of this chapter, you will have a real one.'],
    ['h','The basic formula (a recipe with numbers)'],
    ['p','Start with the simple version. One query is one question you send to the model. Its cost is: the tokens you send in, times the input price, plus the tokens that come back, times the output price. Multiply by the number of queries in a month. That gives a monthly bill.'],
    ['code','cost per query = (tokens in  × rate for input)\n              + (tokens out × rate for output)\n\nmonthly = cost per query × queries per month'],
    ['p','Most business cases stop here. The trouble is that their number is often three to twenty times too low. The formula is right. It is used on the wrong amounts.'],
    ['c','You already know this','The full cost model is like the total cost of ownership in a project report, worked out for each transaction. The licence is only one line. Support, review and retries are the other lines. The four multipliers below are those lines.'],
    [
      'pred',
      {id:'ch15-mult',
       short:true,
       ph:'A multiple, like 5×',
       ask:'Guess first. A business case prices a query using only tokens in and tokens out. Once the feature is built, how many times too low is that figure, usually?',
       reveal:'Between three and twenty times. The formula prices one clean call. Real features fetch several documents. They try again when the answer comes back broken. They take several steps. They also pay for thinking that the user never sees.',
       then:'You have met all four of these in earlier chapters. Each one is a design choice, so each one is something you can change.'}
    ],
    ['h','The four multipliers'],
    ['p','So why does a real feature cost so much more than one clean call? Four things cause it. The table below lists them. Look at the last column. It shows how much each one adds.'],
    [
      'tb',
      ['Multiplier','Chapter','What it does'],
      [
        ['Number of chunks fetched (chunks are index cards of text)','Ch. 6','Fetching 8 chunks instead of 3 nearly triples what you send in, on every query.'],
        ['Retries when the answer comes back broken','Ch. 8','Each retry sends the whole note again, so write down the real extra tokens and time.'],
        ['Agent steps (an agent is a helper that does errands in a loop)','Ch. 9','Six steps send a growing conversation six times. That is often 10–20× the cost of one call.'],
        ['Reasoning tokens (the model\'s rough-paper thinking)','Ch. 11','They are charged at the output price, and are often several times longer than the answer you see.']
      ]
    ],
    ['p','Now try the cost calculator below. Change the four multipliers and watch the monthly number move.'],
    ['lab','costmodel'],
    ['q','I003'],
    ['h','Measure your own token counts'],
    ['p','Numbers from a calculator are a start. Numbers from your own documents are better. So now you measure what your pipeline really uses.'],
    ['do','Measure real token counts',[
      ['p','First run this starter cell. It gets everything ready, like laying out the ingredients before you cook. It sets up the helper and the values that this chapter’s cells use. You can change them later if you like.'],
      ['code','MODEL = "meta/llama-3.1-8b-instruct"\nSTRONG = "meta/llama-3.3-70b-instruct"\n\nCHEAP_MODEL = MODEL\nSTRONG_MODEL = STRONG\n\nimport numpy as np\n\ndef embed(texts, input_type):\n    resp = client.embeddings.create(\n        model="nvidia/nv-embedqa-e5-v5", input=texts,\n        extra_body={"input_type": input_type, "truncate": "END"})\n    return [np.array(d.embedding) for d in resp.data]\n\ndef cosine(a, b):\n    return float(np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b)))\n\n# Eight made-up cards about ID formats. Replace them with your own cards.\nchunks = [\n    "A PAN has five capital letters, then four digits, then one capital letter.",\n    "An Aadhaar number has twelve digits, often written in groups of four. It does not start with 0 or 1.",\n    "An Indian mobile number has ten digits. The first digit is 6, 7, 8 or 9.",\n    "A PIN code has six digits. The first digit is not zero.",\n    "An IFSC code has four letters, then a zero, then six letters or digits.",\n    "A bank account number has nine to eighteen digits. A nearby word such as account helps to be sure.",\n    "A GSTIN has fifteen characters. It contains the holder\'s PAN.",\n    "A vehicle registration has state letters, a number, series letters and four digits.",\n]\nchunk_vecs = embed(chunks, "passage")\n\nground_truth_questions = [\n    "How many digits does an Aadhaar number have?",\n    "What does an IFSC code look like?",\n    "Which digit can an Indian mobile number start with?",\n    "What does this document say about cricket?",\n]\n\ndef rag_answer(question, k=3, model=MODEL):\n    q = embed([question], "query")[0]\n    scores = [cosine(q, cv) for cv in chunk_vecs]\n    ids = sorted(range(len(chunks)), key=lambda i: scores[i], reverse=True)[:k]\n    context = "\\n\\n".join(f"[{i}] {chunks[i]}" for i in ids)\n    r = client.chat.completions.create(\n        model=model, temperature=0,\n        messages=[\n            {"role": "system", "content": ("Answer ONLY from the provided context. If the answer is not in the "\n             "context, reply exactly: \'Not found in the provided documents.\' "\n             "Never invent details.")},\n            {"role": "user", "content":\n                f"Context:\\n{context}\\n\\nQuestion: {question}"}])\n    text = r.choices[0].message.content\n    found = "Not found" not in text\n    return {"answer": text, "found": found,\n            "source_chunk_ids": ids if found else [],\n            "supporting_quote": "", "usage": r.usage}\n\ndef programmatic_checks(record, retrieved_ids):\n    issues = []\n    if record["found"] and not record.get("source_chunk_ids"):\n        issues.append("claimed found but cited nothing")\n    for cid in record.get("source_chunk_ids", []):\n        if cid not in retrieved_ids:\n            issues.append(f"cited chunk {cid} that was never retrieved")\n    return issues'],
      ['p','Run your Chapter 12 pipeline on the ten questions in your answer key. Write down the real token counts.'],
      ['code','rows = []\nfor q in ground_truth_questions:\n    r = rag_answer(q, k=3)["usage"]   # the record carries .usage alongside the answer\n    rows.append({"q": q, "in": r.prompt_tokens,\n                 "out": r.completion_tokens})\n\navg_in  = sum(r["in"]  for r in rows) / len(rows)\navg_out = sum(r["out"] for r in rows) / len(rows)\nprint(f"avg in {avg_in:.0f} / avg out {avg_out:.0f} tokens per query")'],
      ['x','You now have real numbers from your own documents. From here on, the sums use measured values, not guesses.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','This chapter’s starter cell (the first box of code, which sets things up) has not run. Run it first. Then run the cell that failed again. If the page reloaded, press <strong>Restore</strong> in the notebook bar before you start.','An authentication error, or the number 401 (your key was not accepted)','Your key (your secret password for the model) did not reach the code. Run the cell that loads the key again. Then check the name you saved it under. It must match <a href="#/setup">Setup</a> exactly, like a password. Capital letters count.','A message that a module (a piece of ready-made code) was not found','The code imports (brings in) a library this page does not have. A library is ready-made code someone else wrote, like a borrowed recipe book. <code>openai</code> is built in. numpy and the other common libraries load by themselves the first time a cell imports them. A library that needs PyTorch cannot run inside a web page. The chapter tells you when that happens.','It runs, but your numbers are different from the ones printed above','That is normal, not a mistake. Models change over time, and your text is not the same as ours. It is like two cooks making the same dish: the taste is close, never exactly the same. Look at which way your numbers move, and roughly by how much. You do not need the exact number. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['p','See why this matters with an example. A feature is quoted at 40 paise per query. It fetches eight documents. It retries one time in eight. It takes four steps. It thinks first by default. That feature does not cost 40 paise. It costs several rupees. A gap like this can decide if a feature survives.'],
    ['q','I100'],
    ['h','Add the multipliers'],
    ['p','Now you put the four multipliers into code. You will see the gap between the simple guess and the real cost.'],
    ['do','Add the multipliers',[
      ['c','Tip','Before you run this step, guess how many times higher the full cost will be than the simple guess.'],
      ['code','def monthly_cost(avg_in, avg_out, queries,\n                 in_rate, out_rate,           # per 1M tokens (made-up prices: look up the real ones)\n                 retry_rate=0.0, agent_steps=1,\n                 reasoning_ratio=0.0, cache_hit=0.0):\n    eff_in  = avg_in * agent_steps * (1 - cache_hit * 0.9)\n    eff_out = avg_out * agent_steps * (1 + reasoning_ratio)\n    per_q = (eff_in/1e6)*in_rate + (eff_out/1e6)*out_rate\n    per_q *= (1 + retry_rate)\n    return per_q, per_q * queries\n\nbase = monthly_cost(avg_in, avg_out, 10_000, 0.20, 0.60)\nreal = monthly_cost(avg_in, avg_out, 10_000, 0.20, 0.60,\n                    retry_rate=0.10, agent_steps=4,\n                    reasoning_ratio=2.0, cache_hit=0.0)\nprint(f"naive: {base[1]:.2f}   with multipliers: {real[1]:.2f}   ratio {real[1]/base[1]:.1f}x")'],
      ['x','The ratio is often between 8× and 20×. Write it down. It shows that “we guessed the token cost” is not the same as “we guessed the cost”.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','This chapter’s starter cell (the first box of code, which sets things up) has not run. Run it first. Then run the cell that failed again. If the page reloaded, press <strong>Restore</strong> in the notebook bar before you start.','An authentication error, or the number 401 (your key was not accepted)','Your key (your secret password for the model) did not reach the code. Run the cell that loads the key again. Then check the name you saved it under. It must match <a href="#/setup">Setup</a> exactly, like a password. Capital letters count.','A message that a module (a piece of ready-made code) was not found','The code imports (brings in) a library this page does not have. A library is ready-made code someone else wrote, like a borrowed recipe book. <code>openai</code> is built in. numpy and the other common libraries load by themselves the first time a cell imports them. A library that needs PyTorch cannot run inside a web page. The chapter tells you when that happens.','It runs, but your numbers are different from the ones printed above','That is normal, not a mistake. Models change over time, and your text is not the same as ours. It is like two cooks making the same dish: the taste is close, never exactly the same. Look at which way your numbers move, and roughly by how much. You do not need the exact number. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['h','Five ways to lower the cost'],
    ['p','Once you can see the real cost, the next question is how to bring it down. Here are five ways, roughly from most help to least.'],
    [
      'n',
      ['<strong>Choose the model.</strong> Prices across one provider\'s range differ by ten to a hundred times. Like choosing a cycle or a car, this matters more than anything else on the list.','<strong>Use a cheap model first.</strong> Send everything to a small model. Pass on only what fails a check. Chapter 11 showed that most real requests are simple look-ups, which a small model handles well.','<strong>Fetch less.</strong> A token you never send costs nothing. The reranking from Chapter 12 (putting the best cards on top) lets you fetch fewer chunks <em>and</em> get better answers.','<strong>Use caching.</strong> This comes from Chapter 10. Caching means the model remembers a part it has already read. Put the parts that never change at the start of the request.','<strong>Send waiting work in a batch.</strong> Batch processing (many jobs sent together) is often much cheaper. Jobs that run overnight do not need the fast, costly price.']
    ],
    ['q','I099','I004'],
    ['h','Build a cascade'],
    ['p','The second idea on that list is worth trying yourself. It has a name, and you build it now.'],
    ['do','Build a cascade',[
      ['p','A <strong>cascade</strong> sends each request to a cheap model first, like asking the junior clerk. It goes to the costly expert only when a check fails. Use your Chapter 8 structured output (form-style reply) as the trigger: <code>found: false</code> or a missing quote.'],
      ['code','def cascade(question, k=3):\n    small = rag_answer(question, k=k, model=CHEAP_MODEL)\n    if small["found"] and programmatic_checks(small, small["source_chunk_ids"]) == []:\n        return small, "cheap"\n    return rag_answer(question, k=k, model=STRONG_MODEL), "escalated"\n\nesc = sum(1 for q in ground_truth_questions if cascade(q)[1] == "escalated")\nprint(f"escalation rate: {esc}/{len(ground_truth_questions)}")'],
      ['x','You get an escalation rate (how often a request moves up to the costly model), often 20–40%. Work out the blended cost (the average of cheap and costly calls). Mark accuracy again against your Chapter 6 answer key. Now you see both sides: what the cascade saved, and what it cost in quality, if anything.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','This chapter’s starter cell (the first box of code, which sets things up) has not run. Run it first. Then run the cell that failed again. If the page reloaded, press <strong>Restore</strong> in the notebook bar before you start.','An authentication error, or the number 401 (your key was not accepted)','Your key (your secret password for the model) did not reach the code. Run the cell that loads the key again. Then check the name you saved it under. It must match <a href="#/setup">Setup</a> exactly, like a password. Capital letters count.','A message that a module (a piece of ready-made code) was not found','The code imports (brings in) a library this page does not have. A library is ready-made code someone else wrote, like a borrowed recipe book. <code>openai</code> is built in. numpy and the other common libraries load by themselves the first time a cell imports them. A library that needs PyTorch cannot run inside a web page. The chapter tells you when that happens.','It runs, but your numbers are different from the ones printed above','That is normal, not a mistake. Models change over time, and your text is not the same as ours. It is like two cooks making the same dish: the taste is close, never exactly the same. Look at which way your numbers move, and roughly by how much. You do not need the exact number. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    [
      'try',
      {id:'ch15-model',
       mins:6,
       min:60,
       rows:5,
       task:'Work out the real cost of a real feature. Guess the tokens in and out per query. Apply the four multipliers, using the values your design really uses. Multiply by the monthly volume. Then write the sentence you would say to a finance director, including what would make the number wrong.',
       ph:'base … × retrieved … × retries … × steps … × thinking … = per query … monthly … and it is wrong if …',
       after:'A good answer is one you can defend. It does not have to be exact. It states its assumptions. It names the multiplier that matters most (usually fetched chunks or agent steps). It says what would make it wrong, such as different traffic, more retries or a price change. For example: “Four lakh a month at 300,000 queries, fetching eight documents, with a 12% retry rate. The number moves most if retries go above 20%.”'}
    ],
    ['h','Report cost, speed and accuracy together'],
    ['p','Cost is only one side of the story. A feature can be cheap and still be a bad feature. So look at it from three sides at once.'],
    ['c','Note','Speed is also a cost. Like waiting for your chai, a slow feature costs the user time. Report the slow responses, not only the average, as in Chapter 11. A cheap but slow feature can fail as badly as a fast but costly one. Always report cost per query, typical wait and slow-case wait together.'],
    ['q','I101'],
    ['p','The best way to keep all three in view is one small table. You fill it in next.'],
    ['do','Build a comparison table',[
      ['p','For each setup you built (simple, k=8, cascade, reasoning always on), write down these numbers.'],
      [
        'tb',
        ['Configuration (setup)','Cost / query','p50','p95','Accuracy (of 9)','Cost per correct answer'],
        [
          ['Baseline k=3','','','','',''],
          ['k=8','','','','',''],
          ['Cascade','','','','',''],
          ['Reasoning always on','','','','','']
        ]
      ],
      ['p','Fill the last column from the others. Cost per correct answer is the cost per query divided by the share of answers that were right. So 6 right out of 9 is a share of 0.67. A cheap setting that is often wrong can cost more per correct answer than a dearer one that is right.'],
      ['x','This table is the main thing you take away from this chapter. It turns an argument about design into a choice based on proof. It fits on one slide.']
    ]],
    ['h','The margin question'],
    ['p','There is one more question, and it decides most AI features. It has nothing to do with tokens: <strong>does the feature make money at scale?</strong> Think of a chai stall. If each cup costs more than the price you charge, selling more cups only loses more money.'],
    ['p','Say a query costs three rupees, and the value it protects is two rupees. No amount of fine-tuning the prompt will fix that. So answer this question on day one, before the pilot (the small first trial).'],
    ['q','I005'],
    ['do','Calculate the margin',[
      ['p','Do one honest sum. What does this feature cost per user per month at the usage you expect? What is it worth per user per month?'],
      ['x','If the value is not clearly bigger than the cost, you learned that before the pilot, not after it.']
    ]],
    ['q','I102'],
    ['p','So here is the chapter in short. A simple guess prices one clean call, and the real bill is several times bigger. Four multipliers explain the gap. A cascade is one good way to shrink it. Next, you look at documents that are not clean text at all: tables, scans and images.']

  ],
},
{

  id:'ch16', num:16, part:3, curriculumTier:'selective', phase:2, prerequisites:['ch3','ch11'], nextUnits:['ch165','ch15mm'], minutes:30, labs:[],
  title:'Document extraction: tables, scans and images',
  concept:'Real documents are often photos of paper, tables and forms, not clean typed text. Turning them into text is where many document projects fail, and nobody notices. Today you find a reading mistake in your own documents. Then you compare two ways: turn the page into text, or show the model a picture of the page.',
  needs:[
    ['Everything so far assumed clean typed text','In Chapter 3 you were handed the text. But someone had to make that text first.',3],
    ['Slow replies are a product problem','Look at the slowest replies, not the average. Think of the one train that is always late, not the average train.',11]
  ],
  takeaway:[
    'Say why tables are the part of a document that goes wrong most, and why no score catches the mistake.',
    'Say what you would ask a vendor (a company that sells you a tool) who claims to read all document types.',
    'Say why a voice product needs a different design, not just a microphone on the same screen.'
  ],
  red:['Table rows and columns destroyed when the text was extracted','Right page found, wrong number quoted','A corpus assumed to be clean text'],
  capstone:{
    title:'Test the tool on photos of ID cards',
    brief:'Many personal details reach a website as photos, not typed words. A tool that reads words out of a photo makes mistakes, and no error message tells you. You learned that tables and photos of pages are the weakest part of a document pipeline (the chain of steps a document goes through), and why no score catches this. Now you test the tool on words read from photos of ID cards.',
    where:'This is your notebook for the chapter. You use it to read the images and compare. Write the error rate (how often it is wrong) in the notes box below. Short version for the route, about 20 minutes: steps 1, 2, 3 and 6.',
    steps:[
      'Collect ten images. Make them yourself: mock ID cards with made-up details, printed or handwritten, then photographed. Never use a photo of a real person’s card.',
      'Turn each image into text with an OCR tool (software that reads the words in a picture). Compare the text with the original and mark every reading mistake.',
      'Run the pattern checker (code that hunts for ID-shaped text) on the text. For every ID in the original, write down whether it was found. Note the usual mistakes, such as the letter O read as the digit 0, or the letter l read as 1.',
      'Pick three of the images. Give them straight to a model that can look at pictures, and ask it to list the IDs. Compare its list with the OCR route on the same three.',
      'Check every digit of one important field, such as each Aadhaar number, by hand. Write down how long it took. That time is the real price of trusting the result.',
      'Add the rows for text read from photos to the answer key (the list of questions with the right answers). Save it as <code>evals/answer-key-v4.csv</code>. Then estimate the error rate for text read from photos.'
    ],
    done:[
      'Ten made-up ID images and the text read from them, with the mistakes marked.',
      'For each ID, a note on whether the pattern checker found it.',
      'A side-by-side of the OCR route and the picture-reading model on three images.',
      'The time the hand check took.',
      'The answer key, version 4, and an estimated error rate for text read from photos.'
    ]
  },
  story:[
    ['c','Before you start','Find one page from your own documents with a real table in it, such as money figures, eligibility bands or a rate card. Add a photo or scan of it with the Files panel (the box on this page where you add files).'],
    ['p','In Chapter 3 you pasted your document’s text into a file. That quietly assumed the text already existed. In most organisations, a lot of it does not. Today you see what happens when the text must be made from pages. It is like typing out a paper form by hand. This step often goes wrong.'],
    ['h','Real documents are pages, not text'],
    ['p','Picture a real pile of documents. It holds scanned contracts (photos of paper) with signatures and stamps. It holds money statements, where the meaning depends on which row meets which column. It holds manuals with warnings next to drawings, screenshots in tickets, and forms filled by hand.'],
    ['key','Everything you built so far assumes someone already turned these pages into text. Many document projects fail at that step, before anything you measured.'],
    [
      'pred',
      {id:'ch16-clean',
       short:true,
       ph:'A percentage',
       ask:'Guess first. Take a real company’s documents: contracts, statements, policies, scanned letters. What share is clean, typed, correctly ordered text that needs no work?',
       reveal:'Usually much less than a proposal (the plan someone pitches) assumes. A big share is photos of paper. Much of the typed part still has a layout that plain reading wrecks: two columns, tables, or a heading repeated on every page. Every estimate built on this number inherits its mistake.',
       then:'Few teams check this. It is the cheapest way to stop a project from failing six weeks in.'}
    ],
    ['h','Why tables fail without a sound'],
    ['p','Look at tables first, because they go wrong most often. A text extractor (a tool that pulls text out of a page) reads a table with three columns. It often gives one flat line of numbers. It is like reading a spreadsheet aloud and forgetting which cell is which. Every value survives, but the <em>links</em> are lost: which figure belongs to which row, for which year.'],
    ['p','Now the scary part. Retrieval (finding the right pages) works correctly. The model answers smoothly. But the number it quotes comes from the wrong column. Nothing in your pipeline can catch this, because nothing after the text step ever looks at the original page.'],
    ['q','I078','I079'],
    ['p','Do not take this on trust. Now you will see it happen on your own table page.'],
    ['do','Find a reading mistake',[
      ['p','Pull the text out of your table page with any tool you have. Then read the text you got.'],
      ['x','Read it the way a machine would. Can you tell which figure belongs to which row and column from the text alone? Often you cannot. Write down the exact link that was lost.']
    ]],
    ['do','Ask a question only the table can answer',[
      ['c','Tip','Before you run this, guess: will your pipeline get the table question right? People often expect a failure. What surprises them is how <em>smooth</em> the wrong answer sounds, like a parrot that says a wrong thing with a straight face.'],
      ['p','Send the text you pulled out through your Chapter 7 pipeline. Ask a question whose answer sits at one exact row and column.'],
      ['x','You get a sure-sounding answer, often with a number from the next row or column. Every score in your Chapter 6 evaluation (the test with the answer key) would have called this a success at finding the right page.']
    ]],
    ['h','Two ways to handle pages'],
    ['p','What if turning a page into text loses the table? You can skip the text step. Give the model a picture of the page instead. The table below puts the two ways side by side. Notice that neither way wins on every row.'],
    [
      'tb',
      ['','Turn the page into text first','Give the model a picture of the page'],
      [
        ['Cost','It is cheap, like a photocopy.','It costs more for each page.'],
        ['Tables and page layout','They are often wrecked.','They mostly stay as they were.'],
        ['Cutting it into pieces','Chapter 3 works exactly as written.','One page is the natural piece.'],
        ['Exact codes and IDs','They stay exactly right.','Sometimes it misreads, such as 0 for O and 1 for l.'],
        ['Checking it later','You can copy the words and compare them.','You need a way to point back to the page.']
      ]
    ],
    ['q','I080'],
    ['p','Now try the second way on the same page and the same question.'],
    ['do','Give the model a picture of the page',[
      ['p','Save the same page as an image. Give it, with the same question, to a vision model (a model that can look at pictures).'],
      ['code','VISION_MODEL = "meta/llama-3.2-11b-vision-instruct"\n\nimport base64\nwith open("page.png","rb") as f:\n    b64 = base64.b64encode(f.read()).decode()\n\nr = client.chat.completions.create(\n    model=VISION_MODEL, temperature=0,\n    messages=[{"role":"user","content":[\n        {"type":"text","text":"Answer only from this page. "\n                              "Quote the row and column labels you used."},\n        {"type":"image_url",\n         "image_url":{"url":f"data:image/png;base64,{b64}"}}\n    ]}]\n)\nprint(r.choices[0].message.content)'],
      ['x','The answer is usually right. You also asked for the row and column labels, so you can check it in seconds. This is the supporting-quote idea from Chapter 8, used on tables.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','This chapter’s starter cell (the first box of code, which sets things up) has not run. Run it first. Then run the cell that failed again. If the page reloaded, press <strong>Restore</strong> in the notebook bar before you start.','An authentication error, or the number 401 (your key was not accepted)','Your key (your secret password for the model) did not reach the code. Run the cell that loads the key again. Then check the name you saved it under. It must match <a href="#/setup">Setup</a> exactly, like a password. Capital letters count.','A message that a module (a piece of ready-made code) was not found','The code imports (brings in) a library this page does not have. A library is ready-made code someone else wrote, like a borrowed recipe book. <code>openai</code> is built in. numpy and the other common libraries load by themselves the first time a cell imports them. A library that needs PyTorch cannot run inside a web page. The chapter tells you when that happens.','It runs, but your numbers are different from the ones printed above','That is normal, not a mistake. Models change over time, and your text is not the same as ours. It is like two cooks making the same dish: the taste is close, never exactly the same. Look at which way your numbers move, and roughly by how much. You do not need the exact number. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['p','In real work, teams often use both. They pull out text to search. Then, when the question is about a table, a figure or a form, they give the model the <em>picture of the page</em> for the final answer.'],
    ['p','One more check is worth doing. It tells you how much to trust the picture way.'],
    ['do','Check every cell',[
      ['p','Ask the vision model to write the whole table as a structured record (a form with fixed boxes), using a Chapter 8 schema. Then check every cell against the page with your own eyes.'],
      ['x','Expect a few mistakes. They often hide in cells that are hard to tell apart: joined headings, footnote marks, or empty versus zero. Count them. That error rate is your reading-quality number. It belongs in every document-AI proposal.']
    ]],
    ['h','Voice: a different limit'],
    ['p','So far we talked about pages. Voice is different, because the main limit is time, not accuracy. In text, a two-second wait is fine. In speech, two seconds of silence breaks the talk, like a phone call where no one answers, and people start talking over it. The whole round trip must fit: speech in, model, speech out.'],
    ['p','So voice problems are about talking. You must know when the person has finished speaking. You must handle people cutting in. You must decide what to say while the system works. The reasoning models from Chapter 11 (models that think on rough paper) are usually too slow for voice, however good they are.'],
    ['do','Dictate three sentences',[['p','Open any free speech-to-text tool (it writes down what you say), such as the dictation on your phone. Say three starter sentences from the project page aloud in Hinglish. Include the one with the Aadhaar-style number. Paste the written-down words into your notebook. Use only the made-up sentences, never a real number.'],['p','Run each written-down text through the pattern checker from Chapter 5. Press <strong>Restore</strong> if you reloaded. Write down what broke: digits written as words, a number split into groups, a name spelled a new way.'],['x','Speech can turn a twelve-digit number into something a pattern rule cannot see. Add two rows to your answer key. The input is the written-down speech, and the right answer is what you write by hand. You find voice problems by testing, not by reading.']]],
    ['c','Look these up','India has public bodies for Indian-language speech and text. BHASHINI, the government’s language platform, is one, and the reading list names it. Before you rely on it, look up what it offers today and on what terms. Chapter 28 turns this idea into a spoken-numbers test.'],
    ['h','Check your documents before you build'],
    ['p','All this leads to one habit. Before you design anything, look at what your documents really look like, the way you check a house before you buy it.'],
    ['c','Tip','Before any document-AI project, get three numbers. What share of the documents is clean typed text? What share is photos of paper? And what share of the <em>answers people need</em> sits inside tables and figures? The third is usually the biggest, and people rarely ask it. It decides the design of the whole system. One afternoon with fifty documents is enough to estimate it.'],
    [
      'try',
      {id:'ch16-audit',
       mins:6,
       min:60,
       rows:4,
       task:'Do that check on a collection of documents you have. What share is clean typed text? What share is photos of paper? What share has tables or layout that carry the meaning? You may estimate, but say how you would measure it properly. Also say what you would change if half turned out to be photos of paper.',
       ph:'clean … photos of paper … layout-bearing … how I would measure … what changes if photos of paper are 50%',
       after:'To measure it properly, pick fifty documents at random from real traffic, not fifty chosen by an excited colleague. If much of it is photos of paper, the design changes. Reading quality becomes something you measure with its own answer key. The project gains a new phase that most proposals leave out. Saying this before the project starts is worth more than any search trick in the course.'}
    ],
    ['q','I081'],
    ['do','Check a sample of documents',[
      ['p','Take a sample of 30 documents. Sort each one: clean typed text, photo of paper, or a mix. Then, on its own, take 20 questions that people really ask. Mark how many need a table or figure to answer.'],
      ['x','You get two percentages. They decide whether your system should start from text, start from page pictures, or mix both. They take one afternoon to measure.']
    ]],
    ['p','To sum up: a document is a set of pages, not a pile of text. Tables fail without a sound. The picture of the page is often the safer way. Voice is a different problem because of time. Next you meet a question that stops many projects before they start: what are you allowed to send to a model at all?']
  ],
},
{
  /* Arc 5. Governance in ch17 is about the file you produce. This is the
     question that actually stops people on a Tuesday. */
  id:'ch165', num:16.5, part:3, curriculumTier:'selective', phase:2, prerequisites:['ch1','ch16'], nextUnits:[], minutes:25, labs:[],
  title:'Data handling: what you are allowed to send',
  concept:'Before you send a document to a model, you must know if you are allowed to. It is like asking before you lend someone a diary. Three questions settle most cases. You will sort real documents, read a vendor’s (the company that sells the tool) real terms, and write a rule your colleagues can follow.',
  needs:[
    ['Everything you send leaves your organisation, like a letter dropped in a postbox','And you pay for it per token (one small brick of text).',1],
    ['Your documents may not be what you thought','You checked what they really hold.',16]
  ],
  takeaway:[
    'Decide if one document may be sent, and say what your decision rests on.',
    'Name the three questions that settle it, in the order that solves most cases fastest.',
    'Write a rule your colleagues can follow without asking you.'
  ],
  story:[
    ['c','Before you start','This chapter has no code. Bring three real documents from your work. One you are sure is fine to send. One you are sure is not. One you are unsure about. The third one is the most useful.'],
    ['p','In the last chapter you checked what your documents really hold. Now comes the next question: may you send them to a model at all? Every chapter so far quietly said yes.'],
    ['p','For most features, the answer is either fine or a big problem. Technical skill does not tell the two apart. Think of a parcel: the post office rules decide if it may go, not the postman.'],
    ['c','Note','This is not a law chapter. You only need to know three questions to ask, and who holds the answer to each.'],
    ['h','Sort your three documents'],
    ['p','Start with your own documents. The questions make more sense once you have used them, like learning a game by playing one round.'],
    ['do','Sort the documents',[
      ['p','For each of the three documents, answer three questions in one line each. Does it hold facts about a person you could pick out? Is it a business secret? Did someone outside your organisation give it to you, under agreed terms?'],
      ['x','The two easy documents are settled by the first question. The unsure one usually turns on the third: something a customer or supplier sent you, under terms nobody has read lately.'],
      ['key','The hard cases are usually about promises in someone else’s contract, not about personal data.']
    ]],
    ['h','Three questions'],
    ['p','You can turn what you just did into a habit. There are three questions, and the order matters. In this order they settle most cases with the least effort.'],
    [
      'n',
      ['<strong>Does it identify a person?</strong> Look for names, contact details, case numbers, or anything else that points to someone. The rules apply wherever you are. They are not optional.','<strong>Whose confidential information is it?</strong> If it is yours, sending it is a business choice. If it is someone else’s, it is a question about the contract, and the answer may be no however careful the vendor is.','<strong>What does the vendor do with it?</strong> Find out how long they keep it, whether they train on it, and which country it is stored in. You can usually find all three in the vendor’s terms in ten minutes. All three can change with your plan.']
    ],
    ['p','Product managers add the most on the third question. Engineers often think it is already settled. Vendors often explain it in comforting words. So read the terms yourself.'],
    ['do','Read the terms for one tool you use',[
      ['p','Pick a tool your team already sends text to. In its own documentation (its help pages), find three things: how long data is kept, whether it is used to train models, and which country it is handled in.'],
      ['x','Two of the three are usually easy to find. One takes real searching. Note which plan the answers are for. Free and paid plans often differ on exactly this, and people often sign up for the free one.'],
      ['p','Write the three answers down with the date. This starts the vendor file that Chapter 17 asks for.']
    ]],
    ['h','The Indian law, in the words people will ask you about'],
    ['p','India’s Digital Personal Data Protection Act, 2023 (the DPDP Act) has a small word list, and interviewers use it. These are the words to know. For the exact duties, read the Act’s own text.'],
    ['l',['<strong>Data Principal.</strong> The person the data is about. A bank customer types a message into your app. That customer is the Data Principal.','<strong>Data Fiduciary.</strong> The organisation that decides why and how the data is used. Your company is the Data Fiduciary. A model provider that handles the message for you works on your behalf, so the duty stays with you.','<strong>Notice and consent.</strong> Tell the person in plain words what you collect and why. Ask them to agree. Use the data only for the reason you gave.','<strong>Erasure.</strong> The person can ask you to wipe their data, and you must be able to do it. That includes any copy an outside provider holds.','<strong>Breach reporting.</strong> If personal data leaks, you must tell the regulator (the official watchdog) and the people affected.','<strong>Sending data abroad.</strong> The Act allows it, except where the government says no. Look up what is true today.']],
    ['p','This is a word list, not legal advice. Check which parts of the Act are in force today. The plan’s dated list of regulatory milestones is the place to look.'],
    ['do','Match each kind of text to a duty',[['p','Take six kinds of text the tool might send to an outside model: a sentence with no personal detail; one with a name; one with an Aadhaar number; a cleaned sentence with tags in place of details; a whole chat history; a log line (a saved note in the tool’s record book) that keeps the original message. For each one, write the duty it touches: consent, purpose, erasure, breach or sending data abroad.'],['x','Two things usually show. The cleaned sentence touches almost no duty, which is the case for building the tool. The chat history and the log line touch several, and the log line is the one nobody thought of. The capstone asks for the same kind of table.']]],
    ['h','Write a rule people can follow'],
    ['p','Knowing the answers is only half the job. The other half is making sure your colleagues act on them, even when you are not in the room, like a sign on the shop wall that works when the owner is out.'],
    [
      'try',
      {id:'ch165-rule',
       mins:5,
       min:50,
       rows:4,
       task:'Write a rule a colleague could follow without asking you. Not a long policy: three or four lines that settle the common cases and say clearly what to do with the rest.',
       ph:'You may send … . Never send … . If it came from a customer, … . If unsure, … .',
       after:'Rules that work have the same shape. They settle the common cases straight away. They name one clear kind that is never sent. They give a set route for unsure cases, so nobody has to guess in the moment. Rules that say “use your judgement” fail. A person who is unsure and in a hurry reads that as permission. Name a person or a channel for the unsure cases.'}
    ],
    ['h','Retrieval sends what it finds'],
    ['p','There is one last catch, and it surprises many teams.'],
    ['c','Watch out','Retrieval (finding the right pages and handing them to the model) sends whatever it finds. You may have chosen with care what goes into your document store. Then you built a system that sends three chunks (small cut-out pieces) from it with every request. So your choice about the document store is really a choice about every query (every question asked).'],
    ['p','To sum up, ask three questions in order. Does it identify a person? Whose confidential information is it? What does the vendor do with it?'],
    ['p','Then turn your answers into a rule that others can follow without you. Rules like this are part of <strong>governance</strong> (the rules for who may do what with AI). Chapter 17 shows how a team writes it all down for a whole AI system. It covers risk tiers (how risky it is), system cards (a one-page description) and oversight (who watches over it).']
  ],
  capstone:{
    title:'Write the rule for what the tool may send to an outside provider',
    brief:'Bharat Privacy Guard exists to protect people’s data, so it must not leak data itself. When the context judge calls an outside AI model, the text it sends is a risk. This chapter gave you three questions that settle whether a document may be sent. The answer must come from what the provider really says, not from what everyone assumes. Now you write that rule for your tool.',
    where:'You only write, no code. Use the three questions from the chapter. Write the one-page rule in the notes box below. Short version for the route, about 20 minutes: steps 1, 2 and 6.',
    steps:[
      'List six to ten kinds of text the tool might send to the outside model. For example: a sentence with no personal detail, a sentence with a name, a sentence with an Aadhaar number, a cleaned sentence with the details swapped for tags (labels like NAME), and a whole chat history.',
      'Take each kind of text through the three questions from the chapter. Mark it: may send, never send, or ask first.',
      'For the “ask first” group, write who you ask and how long they take. If the answer makes you uneasy, the group is too big.',
      'Find out what your chosen provider says about three things: how long it keeps your data, whether it trains on it, and where it handles it. Look at the plan you would really use. Write it down with the date you read it.',
      'Check your own tool: would every message it sends out pass your rule? If not, write what must change. For example: “Send only the cleaned sentence, never the original.”',
      'Write the rule on one page. Give it to a colleague and ask them to use it on three sentences they have not seen. Note where they stopped and hesitated.'
    ],
    done:[
      'A table of six to ten kinds of text, each marked may send, never send or ask first.',
      'What the provider says about how long it keeps data, whether it trains on it, and where it handles it, with the date.',
      'A note on whether your own tool passes its rule, and what must change if it does not.',
      'The one-page rule, tried by someone else.'
    ]
  }
},
{

  id:'ch17', num:17, part:3, curriculumTier:'selective', phase:2, prerequisites:['ch14','ch12','ch13'], nextUnits:['ch18'], minutes:30, labs:['systemcard'],
  title:'AI governance: risk tiers, system cards and oversight',
  concept:'An AI feature now comes with governance documents (papers that show a system is safe and watched), and almost every question in them is a product choice. You put your system in a risk tier (a box for how much harm it could do), write a system card (a one-page description), run a deletion drill, and design oversight that still works at real volume.',
  needs:[
    ['You measured it, so you can say it with a number','An answer key (questions with the right answers) and a list of failures turn a claim into a number.',14],
    ['Version and access filters (rules that hide what a person may not see) are applied before ranking','That is why they are the only promises you can make.',12],
    ['No complete defence against injection (a hidden note that tells the model to ignore its rules) exists','So the safety controls sit outside the model, not in the prompt (the note you hand the model).',13]
  ],
  takeaway:[
    'Say why the same system can be low risk for one use and high risk for another.',
    'Say which part of a governance document is hardest to fake, and why that makes it worth the most.',
    'Describe what human oversight (a real person checking the system) must include before it counts.'
  ],
  red:['A governance file full of adjectives instead of numbers','Oversight written down but impossible to actually do','Data sitting in places you cannot delete from'],
  capstone:{
    title:'Write the system card for Bharat Privacy Guard',
    brief:'Almost every compliance question is really a product question. A system card is the one-page paper that answers them for one system, like the label on a medicine box. You saw that one system can be low risk for one use and high risk for another. You saw which part of a governance document is hardest to fake, and what human oversight must include. Now you write the system card for your own tool.',
    where:'You only write, no code. Gather the numbers and notes from earlier chapters. Then write the card in the notes box below. Short version for the route, about 20 minutes: steps 2, 3 and 4.',
    steps:[
      'Give the tool a risk level and say why. Ask three things: what could it hurt, how badly, and who bears the harm? A tool that hides details before data goes to an AI is not low risk if it can miss an Aadhaar number.',
      'Write the card with five headings: what it is for; what data it handles; what it can do, with its measured quality from your scoreboard; the failures you know about; and what it must never be used for.',
      'Include this sentence: “This tool helps an organisation collect and pass on less personal data. It does not make anyone compliant with the DPDP Act.” Write two lines on why that sentence matters.',
      'Run a deletion drill. Imagine someone asks you to delete everything about them. Follow the request through every place the tool saves or notes anything, and time it. Write down where you could not tell.',
      'Design the human oversight: who can overrule the tool, how they learn there is something to overrule, and what they see on their screen.',
      'Write what you would need from an outside provider so you can answer all of the above about their part of the system.',
      'Give the card to someone who did not build the tool. Ask what is still unclear. Fix those parts.',
      'Save the card as <code>docs/system-card.md</code> in your repository (an online folder that remembers every change). The system card tool above has an “Export system card” button that gives you the file.'
    ],
    done:[
      'A risk level, with the reason.',
      'A system card with the five headings.',
      'The sentence about not making anyone compliant, and why it matters.',
      'The result of the deletion drill, with the time it took.',
      'A description of the human oversight, and a list of what you need from a provider.',
      'The questions your reader still had, and how you fixed them.'
    ]
  },
  story:[
    ['c','Before you start','Keep three things close: your Chapter 6 numbers, your Chapter 14.5 failure list and your Chapter 7 system. Most of this chapter just gathers work you have already done.'],
    ['p','Over the last few chapters you built a system, measured it and tried to break it. Now every team meets one question sooner or later: how do you show other people it is safe to use?'],
    ['p','A normal feature ships with code, tests and release notes. An AI feature increasingly ships with a folder of papers that prove it is safe too. Teams often think the legal team writes them.'],
    ['key','Almost every question in that folder is really a product question. What is this for? Who does it affect? What happens when it is wrong? Who checks it, and what proof shows it works? The product owner should answer them.'],
    ['p','The generator below gives you a feel for this. It builds a system card from your answers, like filling in a form. In a moment we write one by hand.'],
    ['lab','systemcard'],
    ['q','I090'],
    ['h','Risk depends on the use, not the model'],
    ['p','Rules for AI are slowly settling on one idea: <strong>the more harm a wrong answer can cause, the more you must do</strong>, whatever technology you use. It is like a road: a lane near a school needs more care than an empty highway. The EU AI Act made this idea well known. Companies that buy software now ask the same questions everywhere.'],
    ['p','The table below shows four levels of risk. Read it from top to bottom. As you go down, what is required gets lighter.'],
    [
      'tb',
      ['Level','What is required','Typical examples'],
      [
        ['Not allowed','Nothing makes it acceptable','Social scoring (ranking people by their behaviour), some sorting of people by their faces or bodies'],
        ['High risk','Papers, a real human check, proof it is accurate, a record of what happened, a formal check by others','Hiring, loans, who gets into school, essential services'],
        ['Only say it is AI','Say it is AI; label made-up pictures, video and audio','Chatbots, AI-made images'],
        ['Minimal','Ordinary good habits','Most tools staff use inside the office']
      ]
    ],
    ['p','Two things in this table often surprise teams. First, <strong>the use sets the risk level, not the model.</strong> Your Chapter 7 system is minimal risk as an internal FAQ (a list of common questions and answers). The very same system is high risk if it decides who gets a benefit.'],
    ['p','Second, <strong>the level changes when the use changes</strong>. That often happens after launch, and nobody updates the papers.'],
    ['p','Two more points on the EU AI Act. The duties differ for whoever <em>provides</em> a system and whoever <em>deploys</em> it (puts it to work), so find out which one you are. Also, chatbots and made-up media have a duty to be open: people must be told they are talking to an AI, and AI-made images and audio must be labelled.'],
    ['c','Dates to check before any interview','Rules and deadlines change, and this course does not keep dates. The plan keeps one dated list of rule milestones on its Curriculum page, with the DPDP and EU dates. Open it before an interview. Check each date against the official source, and say only what you checked.'],
    ['do','Put your system in a risk tier',[
      ['p','Take your Chapter 7 RAG system (the one that finds pages first, then answers from them). Place it in a real use in your organisation. Pick a tier and defend it in one sentence. Then change the use, for example from internal FAQ to checking if a customer is eligible, and pick the tier again.'],
      ['x','The same code moves to a different tier. That is why choosing a risk tier is a product decision, not an engineering one.']
    ]],
    ['q','I091','I092'],
    ['h','Write a system card'],
    ['p','Once you know the tier, you need a way to show your work, like a student showing steps in a maths answer. That is what a <strong>system card</strong> is for. It is a one-page description of an AI system: what it is for, what data it uses, how it was tested, and what it gets wrong. For anything above minimal risk, you need one.'],
    ['c','You already know this','A system card is the security-audit and sign-off file for one system. The difference is that you write the limits section yourself, with proof, instead of leaving it for the auditor to find.'],
    ['do','Write the system card',[
      ['p','Use the generator on this page, or write it by hand under these headings.'],
      [
        'l',
        ['<strong>Purpose.</strong> Say what it does and for whom, in two sentences.','<strong>Explicitly out of scope.</strong> List three to five things it must not be used for. This is the most useful part.','<strong>Data.</strong> Say where the data comes from, your right to use it, how long you keep it, and where it is stored.','<strong>Evaluation.</strong> Give your Chapter 6 numbers, at a stated k (how many pages you fetch), on a stated date, against a described ground truth (the answer key).','<strong>Known limitations.</strong> Write your red marks as plain sentences, each with the proof that found it.','<strong>Human oversight.</strong> Say which outputs are checked, by whom, seeing what, and with what power to say no.','<strong>Logging &amp; incidents.</strong> Say what is written down, how long it is kept, and who is told when something goes wrong.','<strong>Change control.</strong> Say that the model is pinned to one version (fixed, so it does not change by itself), prompts are versioned, and the eval (the test run) is re-run on every change.']
      ],
      ['x','You now have one page, and every section came from your earlier work. Chapters 6, 12, 13, 14 and 15 were the research. This is the write-up. Someone who skipped those chapters could only fill this page with fancy words.']
    ]],
    ['c','Why this matters','The “known limitations” part is the hardest to fake, and that makes it the most believable. It lists real failures with the proof behind them. The “out of scope” list is the most useful. It stops the use from sliding into a higher risk tier without anyone noticing.'],
    ['q','I094','I131'],
    ['h','Run a deletion drill'],
    ['p','Now a very practical test, like a fire drill. Suppose someone asks you to delete their data. Where would you have to look?'],
    ['p','It may sit in seven places: the original documents, the chunks (small cut-out pieces), the search copy, the cache (a quick-grab copy kept nearby), the provider’s logs, your own logs, and any test set built from real traffic. Many teams find at least two they cannot reach.'],
    ['p','This is the erasure duty from Chapter 16.5 in real life. Under the Indian Act a person can ask you to wipe their data. The places you cannot reach are where you would fail them.'],
    ['do','Trace one document',[
      ['p','Pick one document from your collection. List every place a copy of it, or something made from it, exists. Next to each, write how you would remove it.'],
      [
        'tb',
        ['Location','How to remove it','Can you really do it?'],
        [
          ['The folder of original documents','',''],
          ['The store of cut-out pieces','',''],
          ['The search copy (vector index)','',''],
          ['The quick-grab copy (prompt cache)','',''],
          ['The provider’s own logs','',''],
          ['Your own request logs','',''],
          ['A test set built from real traffic','','']
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
       reveal:'Most often the test sets and the logs. Someone copied the data into them for a good reason, without thinking about deletion, and nothing in them points back to a person. The cache comes next, and the provider’s cache is the hardest to see: it holds pieces of documents, and no list names the person.',
       then:'So write down where data came from when you collect it, instead of trying to work it out later. A deletion request you cannot finish is a failure to follow the rules, with a date on it.'}
    ],
    ['q','I097','I098'],
    ['h','Design oversight that works at volume'],
    ['p','Almost every system card says “a human reviews the output”. It sounds comforting. But does it still work when thousands of outputs arrive every day? Try designing one and see. It is like one teacher marking a whole city’s exam papers.'],
    [
      'try',
      {id:'ch17-oversight',
       mins:6,
       min:60,
       rows:4,
       task:'Design a human check that works at real volume: four thousand outputs a day, and one reviewer. Write what the reviewer sees, which outputs reach them, and what they can do. Then say why “a human reviews every output” is not an answer.',
       ph:'they see … routed by … can do … and reviewing everything fails because …',
       after:'Reviewing everything at that volume is not realistic, and people usually give up within two weeks. That makes it worse than no claim, because the paper then lies about the control. What works is checking the right ones: send outputs by how sure the model was, by how harmful the action is, and by a mismatch between what was found and what was answered. The reviewer sees the proof as well as the output, and can say no.'}
    ],
    ['q','I096','I132'],
    ['p','Now do the same for your own system.'],
    ['do','Write down one review point',[
      ['p','Take your riskiest output and write down the review. Which outputs are reviewed: all, a sample, or those that fail a check? What does the reviewer see: the answer alone, or also the pieces found and the quote? How long do they have, and can they overrule it?'],
      ['x','Then check: at your expected volume, can this review really happen? At 4,000 outputs a day, a promise to review every one will not be kept. It lives only on paper. The structured output from Chapter 8 and the code checks from Chapter 14 make targeted review possible.']
    ]],
    ['h','Build a vendor file'],
    ['p','So far we looked at your own system. But most organisations also lean on AI from outside vendors (companies that sell it to you). Your papers must cover their part too, like checking the farmer as well as the shop.'],
    ['do','Collect four answers from each vendor',[
      ['p','For any AI vendor your organisation uses, get four things in writing. First, the list of subprocessors (other companies the vendor passes your data to), and where data is stored. Then whether your data trains their models, and how to opt out. Last, how much notice they give before retiring a model.'],
      ['x','People often leave out the last one, and it is the subject of Chapter 18. A 30-day notice to retire the model your high-risk system was tested on is an emergency with a date.']
    ]],
    ['q','I134','I135'],
    ['h','Shadow AI'],
    ['p','There is one more risk, and it sits outside every system you build. Staff are already pasting office documents into public chat tools. This is called shadow AI, like a back-door shop nobody told the owner about.'],
    ['p','A ban rarely works, because the tools are useful. A ban changes the policy, not what people really do. A better answer is an approved option that is good enough, plus clear guidance on what may be pasted.'],
    ['q','I093'],
    ['p','That completes the picture: a risk tier, a system card, a deletion drill, real oversight and a vendor file. Next, in Chapter 18, you pull your artifacts together into one requirements document (a paper that says what to build) and plan for the day your model is retired.']
  ],
},
{

  id:'ch18', num:18, part:3, curriculumTier:'selective', phase:2, prerequisites:['ch14','ch15','ch17'], nextUnits:['ch185','ch20'], minutes:45, labs:['redmap','prd'],
  title:'The AI PRD: specs, migrations and kill switches',
  concept:'A normal spec says what a feature must do. An AI spec says how good it is, as a measured range, because the model can answer a little differently each time. You will draw the whole system from memory, put a PRD (the recipe card for your feature) together from the artifacts (pieces of work) you made earlier, plan how to collect feedback, and plan for the day your model is retired.',
  needs:[
    ['A test set (questions with known right answers) and a list of your own failures','They turn a rule like “it must work well” into a number.',14],
    ['A real cost figure','The full number, with all four things that multiply it.',15],
    ['A risk tier (how risky the feature is) and a human check','The things that ship alongside the code, like a warranty card in the box.',17]
  ],
  takeaway:[
    'Say what takes the place of pass-or-fail acceptance criteria in an AI spec, and why.',
    'List what you test again when your provider retires the model you built on.',
    'Say why a kill switch (an off button for the AI) is different from a rollback (going back to the old version).'
  ],
  red:[],
  capstone:{
    title:'Write a requirements document that still works when the model changes',
    brief:'An AI requirements document is like a recipe card for a dish that never tastes exactly the same twice. It says how good the dish should be, as a range, and what to do when it falls outside the range. In this chapter you saw what replaces pass or fail. You saw what to test again when a provider retires your model. You saw why a kill switch is not a rollback. Now write the requirements for Bharat Privacy Guard, and practise the day its model changes.',
    where:'This task is written only, with no code. Collect the notes and numbers the chapter names. Then write the document in the notes box below. Short version for the route, about 20 minutes: steps 2, 4 and 6.',
    steps:[
      'First draw the whole system from memory, like drawing your street map without looking. Do not look at your earlier diagrams. Then compare with your records and mark what you forgot.',
      'Write the requirements document. In the quality part, write ranges, not promises. For example: “finds at least 95 of every 100 Aadhaar numbers on the answer key (your list of questions with the right answers), give or take 3.” For each failure, write what the user sees on screen.',
      'Write down what you save on every request. Then, next quarter, you can tell whether quality got worse. It is like a shop keeping a bill book.',
      'Practise the day the model provider retires your model. You get sixty days’ notice. Write exactly what you will test again, and what result would make you stop and not switch.',
      'Name the three numbers you would put on a dashboard (one screen that shows how things are going). Say who looks at them.',
      'Write the findings page: what you now know can break, and the chapter that showed you each one.'
    ],
    done:[
      'A drawing from memory, with the things you forgot marked.',
      'A requirements document with measured ranges, and a plain description of what the user sees for each failure.',
      'A note of what you save on every request.',
      'The model-retirement practice: what you test again, and what result would stop you.',
      'The dashboard numbers and who owns them, and the findings page.'
    ]
  },
  story:[
    ['c','Before you start','Collect your work from earlier chapters: the answer key (Chapter 6), the list of failure types (14.5), the trifecta audit (13), the cost table (15) and the system card (17). This chapter joins them into one document.'],
    ['p','In the last chapter you wrote a system card and planned who checks the AI. That was one page. Now you gather everything you have made into one requirements document for an AI feature. You also plan for the day the model underneath it changes.'],
    ['h','How an AI spec is different'],
    ['p','Think of an ordinary spec. It says what the feature must do. A tester (QA) checks it, and it passes or fails. This works because the same input always gives the same output, like a calculator.'],
    ['p','AI does not work like that. The same input gives a <em>range</em> of answers, like a parrot that says things a little differently each time. The range can also shift when your provider updates a model that you do not control.'],
    ['key','An AI spec says three things: how good the feature is, as a measured range; the proof that you measured it; and what happens when it drifts (slips away from its range).'],
    ['q','I107'],
    ['p','So what changes in a spec? Four things, and you have already built all four. The table puts the normal way next to the AI way. The last column shows which chapters taught it.'],
    [
      'tb',
      ['Normal spec','AI spec','Built in'],
      [
        ['Acceptance criteria (the rule that says a feature is done) as pass or fail','A score you must reach on a named answer key, at stated settings','Ch. 6, 14'],
        ['A QA test plan (the tester’s checklist)','A fixed set of test cases that must pass, plus the free code checks, run at every release','Ch. 8, 14'],
        ['Done when the features work','Done when it is measured at stated numbers, and the known failures are written down','Ch. 6, 17'],
        ['Rollback means putting the last version back, like going back to yesterday’s notes','Rollback means a fixed model version, saved copies of your prompts, and a switch that turns the AI off','Ch. 10, 17']
      ]
    ],
    ['h','Draw the whole system from memory'],
    ['p','Before you write anything, find out how much of the system you hold in your head. Draw it without looking, like drawing the route to your office from memory.'],
    ['do','Draw the map',[
      ['p','Close everything. Take a blank page. Draw the whole system. It is much bigger than the Chapter 7 drawing.'],
      ['code','ingestion (extraction? layout? Ch.16)\n  → chunking + situating sentence (Ch.3, 12)\n  → embeddings + metadata (Ch.5, 12)\n  → [ query rewrite → hybrid retrieve → filter → rerank ] (Ch.12)\n  → context assembly: stable prefix | chunks | question (Ch.10)\n  → model call: routed cheap→strong, structured output (Ch.8, 11, 15)\n  → [ tools + step budget + write boundary ] (Ch.9)\n  → programmatic checks → judge → trace logged (Ch.14)\n  → human oversight point (Ch.17)\n  → answer + citation'],
      ['p','Next to every arrow, write one line in your own words. Then, in red, mark every place where you have <em>seen it fail yourself</em>. Write the chapter too. Aim for twenty.'],
      ['x','Now check yourself against the Red-Mark Map on this site. Draw on paper first. The gap between your drawing and the map is your list of things to revise, like the questions you got wrong in a test.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','This cell (one box of code) needs something from a cell above it. That cell has not run yet. It is like doing step 3 of a recipe before step 2. Run the cells above it in order, from the top. If you ran them before the page reloaded, press <strong>Restore</strong> in the notebook bar. This is the most common notebook problem. It happens to everyone, and it does not mean your code is wrong.','An authentication error, or the number 401 (your key was not accepted)','Your key (your secret password for the model) did not reach the code. Run the cell that loads the key again. Then check the name you saved it under. It must match <a href="#/setup">Setup</a> exactly, like a password. Capital letters count.','A message that a module (a piece of ready-made code) was not found','The code imports (brings in) a library this page does not have. A library is ready-made code someone else wrote, like a borrowed recipe book. <code>openai</code> is built in. numpy and the other common libraries load by themselves the first time a cell imports them. A library that needs PyTorch cannot run inside a web page. The chapter tells you when that happens.','It runs, but your numbers are different from the ones printed above','That is normal, not a mistake. Models change over time, and your text is not the same as ours. It is like two cooks making the same dish: the taste is close, never exactly the same. Look at which way your numbers move, and roughly by how much. You do not need the exact number. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['h','Write the PRD'],
    ['p','A PRD is a product requirements document. Think of it as the recipe card for a dish: what it is, who it is for, and how you know it came out right. You have made most of the pieces already. The tool on this page helps you put them in order.'],
    ['lab','prd'],
    ['q','I117'],
    ['do','Put the PRD together',[
      ['p','Pick one real feature. Every section comes from something you already made, so this is mostly copying pieces in, not writing new ones. The table shows where each section comes from.'],
      [
        'tb',
        ['Section','Source'],
        [
          ['The problem and the user','What you already know about your own field'],
          ['What it covers, and what it will not do','Ch.17 system card'],
          ['Acceptance criteria (eval thresholds: score targets, at stated settings)','Ch.6 ground truth (right answers) + Ch.14 failure taxonomy (list of failure types)'],
          ['Regression suite (fixed test cases): five that stop a release if they fail','Ch.14 homework'],
          ['Security posture — trifecta audit and the leg you broke','Ch.13'],
          ['Unit economics (money per question): cost per query, typical and slowest speed (p50, p95), and the profit line','Ch.15 table'],
          ['Human oversight: who checks the AI’s work, and when','Ch.17'],
          ['Rollout: first a small share of users, the live numbers, and the kill switch','This chapter'],
          ['Model pinning (fixing one model version) and a plan to move to a new model','This chapter'],
          ['Known limitations','Your red map']
        ]
      ],
      ['x','Read the finished document once. Every number in it was measured by you, on your own documents. Very few AI PRDs can say that.']
    ]],
    ['p','The hardest part to write is the acceptance criteria, the rule that says the feature is good enough. Try it now, for a feature you own.'],
    [
      'try',
      {id:'ch18-prd',
       mins:10,
       min:100,
       rows:8,
       task:'Write the acceptance criteria for one feature you own, as numbers, not sentences. What do you measure? On which answer key? At what score? What happens if the number falls below it? Then add the line most specs leave out: what the kill switch turns off, and what the product still does afterwards.',
       ph:'metric — answer key — threshold — what happens on breach … kill switch: …',
       after:'A good answer can be checked by someone who doubts you. It names the answer key and who wrote it. It gives scores as numbers. It gives an action for each time the score falls short: stop the release, tell someone, or switch to a safe mode. The kill-switch line matters because a rollback only goes back to the old code. That does not help when both versions share the same bad behaviour.'}
    ],
    ['h','Plan for the day your model is retired'],
    ['p','Every AI team learns this sooner or later. <strong>Your model will be retired.</strong> Your provider decides when, like a shop closing a product line. You do not choose the notice period.'],
    ['p','Switching to a new model is not a small settings change. You must measure everything again. Run the answer key again, and your fixed test cases. Test again whether the model can be tricked into bad behaviour. Measure cost and speed again. Teams that did Chapter 6 can do all this in an afternoon.'],
    [
      'pred',
      {id:'ch18-deprecate',
       rows:3,
       ph:'What you test again, and what you skip',
       ask:'Your provider gives thirty days’ notice. The model behind your live feature is being retired. Before you read on, write what you test again, in order, and what you can safely skip.',
       reveal:'Test again everything you measured on the old model, because the old numbers no longer count. That means the full test set against your answer key. It means checking the marker model (a second model that marks answers, like a second student marking homework) against your own marks. This is also a model call. It means your costs at the new prices, and your slowest response times. Do not skip the marker check. A marker checked against the old model has not been checked against the new one.',
       then:'This is why a test set lasts for years. It is not a one-time launch paper. Teams without one do not find the problems within thirty days. They find them in production, when real users are already using it.'}
    ],
    ['q','I109'],
    ['p','Now turn that into a plan you could hand to a colleague, like a recipe you pass to a friend.'],
    ['do','Write a migration runbook',[
      ['p','Imagine your model will be retired in 30 days. Write the runbook (a list of steps for the day): which tests to run again, which numbers must match and within what gap, who signs off, and how you go back if the new model is worse.'],
      ['x','Guess how long it would take. If you say more than two days, you are probably missing the Chapter 6 answer key. That key turns a migration into an afternoon’s work.']
    ]],
    ['h','Collect feedback you can use'],
    ['p','Think of the thumbs-down button in a chat app. On its own, it is almost useless, like a customer who says “bad” and walks out. You cannot repeat what happened. And you cannot tell a wrong answer from a right one the user just did not like.'],
    ['p','Now attach the full trace (the record of what happened) to that thumbs-down: the question, the chunks (pieces of text) the system found, the prompt, the model version, and the answer. It becomes a ready-made test case. The difference is about two days of engineering work.'],
    ['do','Design the feedback record',[
      ['p','Write exactly what a single thumbs-down must save. Then it can become a test case with no more digging.'],
      ['code','{ "query": "...", "rewritten_query": "...",\n  "retrieved": [{"chunk_id": 12, "score": 0.71}, ...],\n  "prompt_version": "v4", "model": "meta/llama-3.1-8b-instruct",\n  "k": 3, "output": {...}, "checks_failed": [],\n  "user_comment": "...", "timestamp": "..." }'],
      ['x','Compare this with what your organisation saves today. The gap is usually big. Closing it is the cheapest improvement on this page.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','This cell (one box of code) needs something from a cell above it. That cell has not run yet. It is like doing step 3 of a recipe before step 2. Run the cells above it in order, from the top. If you ran them before the page reloaded, press <strong>Restore</strong> in the notebook bar. This is the most common notebook problem. It happens to everyone, and it does not mean your code is wrong.','An authentication error, or the number 401 (your key was not accepted)','Your key (your secret password for the model) did not reach the code. Run the cell that loads the key again. Then check the name you saved it under. It must match <a href="#/setup">Setup</a> exactly, like a password. Capital letters count.','A message that a module (a piece of ready-made code) was not found','The code imports (brings in) a library this page does not have. A library is ready-made code someone else wrote, like a borrowed recipe book. <code>openai</code> is built in. numpy and the other common libraries load by themselves the first time a cell imports them. A library that needs PyTorch cannot run inside a web page. The chapter tells you when that happens.','It runs, but your numbers are different from the ones printed above','That is normal, not a mistake. Models change over time, and your text is not the same as ours. It is like two cooks making the same dish: the taste is close, never exactly the same. Look at which way your numbers move, and roughly by how much. You do not need the exact number. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['q','I110'],
    ['h','A kill switch (an off button) is not a rollback (going back to the old version)'],
    ['p','You already roll out changes in steps, like any product. For AI, add one more thing: a <strong>kill switch</strong>. It is like the main switch of the electric board.'],
    ['p','The difference is speed. A rollback needs a new release. A kill switch is a flag (an on/off setting) that sends all traffic to the non-AI path at once. This works only if the non-AI path still exists, and someone tested it recently.'],
    ['c','You already know this','The kill switch is the paper process in a continuity plan, the one you can go back to the same day. Model retirement is the vendor ending support, and you plan for it the same way.'],
    ['q','I108'],
    ['h','Summary'],
    ['p','You are nearly done with this part of the course. The last job is to look back at everything you built and say honestly what you know and what you do not.'],
    ['do','Write your findings page',[
      ['p','Write one page in two halves, like a report card with two columns.'],
      [
        'l',
        ['<strong>What I now know breaks.</strong> List your red marks. Give the proof for each, such as “seen in Chapter X, on my document, with these numbers”.','<strong>What I still cannot judge.</strong> Make this list honest. It is your plan for what to learn next.']
      ],
      ['x','Then go back to your Chapter 1 guesses and compare them with this page.']
    ]],
    ['q','I118'],
    ['c','Note','This course has not covered how models are trained, GPU costs and running models on your own machines, running many agents at large scale, formal proofs that code is correct, or making up practice data. Part IV covers two topics that belong to product managers: whether to fine-tune or use a smaller model, and what the user sees when the system is wrong. The LATER page on this site lists the rest.'],
    ['p','Next comes a very common decision. A vendor offers to sell you what you have learned to build. Should you build it yourself or buy it?']
  ],
}

];

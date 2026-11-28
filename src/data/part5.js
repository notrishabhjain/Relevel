/* Part V — the applied AI PM/engineer track.

   These are chapters 8–21 of the v4.1 workbook, appended after the original
   twenty. They are numbered 21–34 here because the portal already uses 8–20
   for the earlier edition's material and renumbering would orphan every
   "Chapter N" reference and every Hinglish key in the course.

   Where a chapter here covers ground an earlier chapter already touched, it
   says so and starts from that result rather than re-teaching it. That is
   deliberate: the load-bearing ideas are supposed to come round again at
   greater depth, and this track is the depth pass.

   Every chapter carries a `plan` — LAB FIRST / BUILD / BREAK / ARTIFACT /
   EXIT GATE — which is the workbook's defining change in v4.1: you open the
   notebook before you read, not after. English-only for now, by request. */
window.PART5 = [

/* ---------------------------------------------------------------- 21 / bk 8 */
{
  id:'ch8f', num:21, part:5, curriculumTier:'core', phase:2, prerequisites:['ch1','ch7'], nextUnits:['ch9m'], minutes:60, labs:[],
  title:'Software basics for AI work: Python, HTTP, Git and tests',
  concept:'An AI system is ordinary software with one part that nobody can predict (the model). In this chapter you learn the software around that part: Python, HTTP and JSON, secrets (private passwords), Git, logs (a diary of what happened) and tests. On the way you build an experiment harness, a small tool you will reuse for the rest of Part V.',
  plan:{
    first:'Before you read more, open a notebook and write a short Python program. It should read some JSON (a form of labels and values), call an HTTP endpoint (a web address that answers), handle a failure status, and write JSON back out.',
    build:'Turn that program into an experiment harness. For every run, it saves an id, a timestamp, the model, the prompt, the response, the latency (the waiting time), the usage (bricks in and out) and any errors.',
    brk:'Now try to break it. Feed it bad JSON, a missing field and a timeout. Then try a 429 and a 500. Watch which of these it survives.',
    artifact:'A Git repository (an online folder that remembers every change) that holds the harness and its tests.',
    gate:'Pick one failure. Follow it from the input that caused it to the error it gave. This is how you trace a failure.'
  },
  needs:[
    ['Reading Python','Chapter 0.8 taught you to read a cell (one box of code): names, lists, dictionaries, jobs and dots. This chapter writes a little more of it.',0.8],
    ['An API call is a request and a reply','You have been making these since Chapter 1, like sending an SMS and getting one back. This chapter looks at the software around them.',1],
    ['You pay for everything you send','So it is worth building, once, a harness that records usage.',1]
  ],
  words:[
    ["Contract",'A promise your code quietly makes about the data it gets. For example: this field is there, it is a number, this list is not empty. Each of these promises will break one day.'],
    ["Status code",'The number a server sends back to say what happened, like the stamp on a delivery slip. 200 means it worked. 4xx means you got something wrong. 5xx means the server did.'],
    ["Stack trace",'The list of steps that were running when something broke, with the innermost step first. Think of the trail of muddy footprints. It shows where it broke, not why.'],
    ["Experiment harness",'A small tool that records every run in exactly the same way: the request, the response, the latency, the usage and any error. Then two runs can be compared fairly, like two students on the same answer sheet.']
  ],
  takeaway:[
    'Read a request, a response, a status code and a stack trace without fear.',
    'Explain why an AI system is ordinary software with one part that is a guess (a probabilistic part).',
    'Say where the engineering risk of an AI feature really sits.'
  ],
  story:[
    ['c','Before you start','Open the <a href="#/workbench">Workbench</a>, or a local folder if you prefer. In this chapter you build an experiment harness (a small tool that records every run the same way). You keep adding to it until Chapter 34.'],
    ['c','On your route','Do units 8.4 and 8.5, then the capstone. The browser-only path: write and run your code in the <a href="#/workbench">Workbench</a>. Keep your files in the repository you made in Chapter A1, using <strong>Add file</strong>, then <strong>Upload files</strong>, on the GitHub website. A virtual environment (a private toolbox), a requirements file (a list of libraries) and CI (a robot that runs tests) are read-only this pass. Know what they are. Do not set them up.'],
    ['p','Part V goes back over everything you built in Parts I to IV, this time at the depth a real launch needs. It starts with the ordinary software around the model. So far you have mostly looked at the model itself. The aim is small: when an engineer shows you a system diagram, you know every box on it.'],
    ['p','Think of ordering food in an app. Your tap sends a message to a restaurant. A reply comes back with a price, and your screen changes. It looks mysterious until you see the messages going back and forth. The software around an AI model works the same way.'],
    ['c','Why this matters','Applied AI work uses APIs, Python, cloud services, retrieval, evaluation and production systems. If JSON, HTTP, environment variables (settings kept outside your code), tests and logs are new to you, you cannot question an architecture (the plan of how the parts fit). This chapter gives you the least you need.'],
    ['key','An AI system is ordinary software with one part that guesses (a probabilistic part). Everything that goes wrong in ordinary software can still go wrong here. On top of that, there is one more kind of failure, and it gives no error at all.'],
    ['h','Hands-on units'],
    ['p','There are five small units below. Each one has a goal, an idea, something to prove to yourself, something to build, a way to break it, and something to keep. Do them in order, because each builds on the one before.'],
    [
      'unit',
      '8.1',
      'Python as an experiment instrument',
      {goal:'You learn to write small Python programs with functions (recipes with names), lists (rows of boxes), dictionaries (phone books) and loops (do a step for every item). Know them well enough to change an experiment yourself, without needing code someone else made.',
       idea:'Think of Python as your lab notebook. The goal is to describe an experiment exactly, not to master the language.',
       prove:'Make a few variables (labelled boxes), a function, a loop and a dictionary. Print each result as you go, so you can see what is happening.',
       build:'Write a script that reads ten questions from a list and records a result object (one labelled box of results) for each one.',
       brk:'On purpose, pass in a missing key, an empty list and a value of the wrong type. Look at the errors you get.',
       artifact:'A file called <code>chapter-8/python-basics.py</code>, plus a one-page log of the errors you saw.',
       check:'Can you explain a function, a dictionary, a loop and an exception (a stop sign the code raises when something breaks) without opening any documentation?',
       lens:'First write the harness in your own code, before you bring in a framework (ready-made scaffolding someone else built).'}
    ],
    [
      'unit',
      '8.2',
      'HTTP, JSON and API contracts',
      {goal:'You learn requests and responses, status codes, headers (the address labels on a message), JSON payloads (the contents of the message), and what it means when a contract fails.',
       idea:'An AI API is still just an API. The model is a guesser, but the network part around it is ordinary software engineering.',
       prove:'Call a safe public JSON endpoint. Print the status code and two of the fields it gives back.',
       build:'Make a fake endpoint response that has missing fields and unexpected fields. Handle both cases.',
       brk:'Act out a 401, a 404, a 429 and a 500. For each one, decide if it is worth trying again.',
       artifact:'An API contract sheet that lists the request, the response, the errors and the retry policy (the rules for trying again).',
       check:'What is the difference between a bad request (your mistake), an unavailable dependency (a helper you rely on is down) and a server failure (their mistake)?',
       lens:'This is the vocabulary you need when someone says “the API failed” as if that explained everything. It lets you ask what really happened.'}
    ],
    [
      'unit',
      '8.3',
      'Environments, secrets and Git',
      {goal:'You use environment variables and secrets, set up a virtual environment, and follow a basic Git workflow (change, save with a note, share).',
       idea:'A prototype that leaks a key, or that nobody else can run again, will not be taken seriously by an engineer. It is like a recipe that only works in your own kitchen.',
       prove:'Keep a secret outside your source code. Print only a masked prefix (the first few letters, rest hidden), never the whole thing.',
       build:'Create a repository with a README, a requirements file and one command that runs the experiment the same way every time.',
       brk:'Commit a change that you know is broken. Find it, then go back to the last version that worked.',
       artifact:'A repository skeleton that anyone can run again, with a <code>.gitignore</code> (a list of files Git must not keep), a README and an experiment log.',
       check:'Could another person run your experiment without asking you what you did by hand?',
       lens:'Doing it again and getting the same result matters to a PM, because it turns a demo into evidence.'}
    ],
    [
      'unit',
      '8.4',
      'Errors, logging and tests',
      {goal:'You learn to read stack traces, add structured logs (a diary written in the same neat format each time), and write small tests.',
       idea:'You judge an AI system by what happens when things go wrong, not only when all goes well.',
       prove:'Write three tests: one for an expected answer, one for missing input, and one for a malformed (broken-shaped) response.',
       build:'Add a request ID, a timestamp, the model and the status to every experiment record.',
       brk:'Force a timeout, and force a malformed output. Follow each failure from the input to the exception it caused.',
       artifact:'A mini test suite (a small set of tests), plus a failure log that notes the root cause and the fix for each failure.',
       check:'Can you tell an application bug (a fault in your code) from a failure on the provider’s side or in the model?',
       lens:'This becomes the base for evaluation and observability (being able to see what a system is doing) later in the course.'}
    ],
    [
      'unit',
      '8.5',
      'Build the experiment harness',
      {goal:'You create a reusable runner (a tool you can run again and again). It records the inputs, the outputs, the configuration (the settings used), the latency and any errors.',
       idea:'The harness is the bridge between “I tried it” and “I measured it.”',
       prove:'Run one prompt twice. Save both runs as structured JSON (labels and values in a fixed shape).',
       build:'Add the experiment name, the version, the model, the prompt version, the input and output tokens when they are available, the latency, and a field for notes.',
       brk:'Change one thing. Check that the logs make the difference between the two runs easy to see.',
       artifact:'A folder called <code>experiment_runner/</code> with a schema (the form’s fixed boxes), the runner, some sample runs and a README.',
       check:'Can you get yesterday’s result again, and explain what changed since then?',
       lens:'Every later chapter should plug into this harness. None of them should make its own way of recording evidence.'}
    ],
    ['q','I401'],
    ['h','Contracts fail silently'],
    ['p','Every AI application leans on many small assumptions about its data. This field will be there. That value will be a number. This list will not be empty. Each of these is a <strong>contract</strong>, like a promise between two people. In real use, every one of them will break sooner or later.'],
    ['key','A system in real use must notice when a contract breaks, and not carry on. Many real AI incidents look like this: nothing raised an error, and the answer was built on missing data.'],
    ['h','What “enough” means'],
    ['p','You do not need to become a backend engineer. You have enough when you are comfortable with all of these.'],
    [
      'l',
      ['You can write a small function, and keep a few labelled values together in a dictionary.','You know your <strong>status codes</strong>: 200 means it worked, 4xx means the request was wrong, and 5xx means the server failed.','You know what <strong>JSON</strong> is: labels and values inside curly brackets, the form most systems use to pass data to each other.','You keep a password or API key (the secret password for the model) out of your code, in an environment variable instead.','You save your work in Git, so you can go back to an earlier version, like an undo that remembers everything.','You read an error message from the bottom up, because the real cause is usually there.','You can write a test that fails on purpose, so you know it really does check something.']
    ],
    ['p','Two more ideas are good to know, but you do not need to write them yourself. One is background jobs (work done quietly while you do something else). The other is queues, like a line at a ticket window: work waits until someone is free to do it.'],
    ['p','Let us test how much you already understand about a real feature.'],
    [
      'try',
      {id:'ch21-guess',
       mins:6,
       min:60,
       rows:4,
       task:'Think of the last AI feature you saw in a demo. In plain words, write what its request probably held and what its response probably looked like. Where are you guessing?',
       ph:'The request probably contained … The response probably … I am guessing about …',
       after:'The places where you had to guess are the questions to ask the team that built it. Being able to make that list is the main skill this chapter teaches.'}
    ],
    ['h','Summary'],
    ['key','A model API call is an ordinary software dependency (something your code leans on). The engineering risk sits in the interfaces, the error handling, the secrets, the retries, the monitoring and the contracts, at least as much as in the model.'],
    ['p','You now know the everyday software around a model, and you have a harness that records each run the same way. Next, in Chapter 22, you will use that harness to compare models.']
  ],
  capstone:{
    title:'Build the test harness and keep it in Git',
    brief:'From here on, almost every chapter asks you to run the tool on the answer key (questions with right answers) and compare with last time. If you set the test up again each time, the comparison is not fair. You learned to read requests, responses and errors. Now you build the harness once, put it in Git, and keep adding to it for the rest of the course.',
    where:'The <a href="#/workbench">Workbench</a> in this app, or a local folder if you prefer. This is the harness you build in code and keep adding to through Chapter 34. The notes box below is for what surprised you, not for the code.',
    steps:[
      'Write a function (a recipe with a name) of about twenty lines. It reads your answer key (a CSV file, a spreadsheet saved as plain text) and gives back its rows. Let it filter by one column, for example “only the Hinglish rows”.',
      'Add three tests for it. A test is a small check that says pass or fail. Make one with a normal file, one with a row that has a missing field, and one with an empty file.',
      'Write a function that runs one sentence through your current pipeline and saves a JSON record of the run. The record holds the sentence, the findings, the time, the tokens and any error.',
      'Write a function that compares the findings with the answer key. It prints recall and precision for each kind of ID and each kind of writing. This is the scoreboard you made by hand in Chapter 6.',
      'Create a Git repository. Commit the harness (save it with a short note). Write a README (a first-page note) that explains how to run it on a clean machine.',
      'Break one thing on purpose, such as a bad key, a time-out or a broken reply. Then check that the record is still written, with the error in it.'
    ],
    done:[
      'A repository that someone else can clone (copy) and run.',
      'Three tests that pass, and one of them covers a failure.',
      'A scoreboard printed from the answer key.',
      'One saved record from a run that failed.'
    ]
  }
},

/* ---------------------------------------------------------------- 22 / bk 9 */
{
  id:'ch9m', num:22, part:5, curriculumTier:'core', phase:3, prerequisites:['ch2','ch6','ch8f'], nextUnits:['ch10c'], minutes:55, labs:['costmodel'],
  title:'Choosing a model: benchmark on your own cases',
  concept:'A leaderboard (a ranking list) shows how models did on someone else\'s task. It is like a topper list from another school. In this chapter you see what really changes when you change the model. Then you run a benchmark of your own ten cases. You write a model selection card with the proof for your choice.',
  plan:{
    first:'Pick two models you can use. Before you test, write your guess. Which model wins on quality? Which on speed? Which on cost? It is like guessing the winner before a race.',
    build:'Run a ten-case benchmark (ten fixed questions you give every model). Cover factual recall (remembering facts), reasoning, pulling out details, many languages, and saying no.',
    brk:'Change one thing at a time: the model, the sampling (how the model picks its next word), or the prompt (your note). Then see which change caused which effect.',
    artifact:'A Model Selection Card. It is a one-page note of quality, latency (waiting time) and cost. It also names the back-up model, for the day your first choice is not available.',
    gate:'Recommend a model, and show the proof. Then defend your choice to someone who likes a different model, like a lawyer with evidence.'
  },
  needs:[
    ['Temperature controls variation','You tested it in Chapter 2. Here it is one variable (one dial you can turn) among several.',2],
    ['Write the answer key before measuring','Without an answer key, a benchmark tells you little. It is like marking papers with no teacher\'s key.',6],
    ['An experiment harness that records runs','You built it in Chapter 21. This chapter is the first to use it.',21]
  ],
  words:[
    ["Inference",'Inference means using a trained model to get an answer. Training is the earlier work that made the model, like a student studying. Inference is the exam day. You pay for it on every request, for as long as the product runs.'],
    ["Sampling",'Sampling is how the model picks its next word-piece (token) from a few likely ones. Think of picking one sweet from a few good ones. Temperature (how adventurous the model is) is one way to control it.'],
    ["Benchmark",'A benchmark is a fixed set of questions that you give to every option, so the comparison is fair. It is like one question paper for every student. Someone else\'s benchmark predicts your task only by luck.'],
    ["Model selection card",'A one-page note. It says which model you chose, what proof you used, what limit applied (like cost or privacy), and which model runs when the first one is not available.']
  ],
  takeaway:[
    'Explain what changes when you change the model. It is more than a benchmark score.',
    'Say when to use retrieval (finding the right page first), prompting (giving clear instructions) and fine-tuning (coaching the model on many examples).',
    'Write a model recommendation that answers the question “measured how?”.'
  ],
  story:[
    ['c','Before you start','Open the experiment harness you built in Chapter 21. You will run the same ten cases on two or three models.'],
    ['c','On your route','Do units 9.3 and 9.6, then the capstone. Read the other units this pass.'],
    ['p','Last chapter you built a harness. It records every run in the same way, like a school register. Now you use it. A leaderboard shows how a model did on someone else\'s task. Today you get your own numbers, on your own questions, in one afternoon.'],
    ['p','Think of buying a car. An award does not tell you if the car fits your family. It does not tell you if it suits your roads or what it costs to run. So you take a test drive. Few teams test-drive their models. This chapter closes that gap.'],
    ['key','Models differ in many ways at once: skill, speed, desk size (the context window), button-pressing (tool use) and cost. A model that wins on one can lose on another. What matters most depends on your use case, like choosing a bike or a bus for your trip.'],
    ['h','Hands-on units'],
    ['p','There are six short units below. They start with what a model does when it answers. They end with the one-page card that records your decision. Go in order.'],
    [
      'unit',
      '9.1',
      'What an LLM is doing at inference',
      {goal:'You will explain tokens (small pieces of a word, like Lego bricks of text). You will explain how a transformer-based model reads its context (its desk). You will explain how it writes an answer. And you will say how training differs from inference.',
       idea:'Inference is when the model does its work. It gets the context and writes the output. Training is different. Training is what changes the model\'s parameters (its inner settings), like a student learning.',
       prove:'Give two prompts with different context lengths. For each, write down the input and output token counts and the latency (waiting time).',
       build:'Make a small table of context length against the latency and cost you saw.',
       brk:'Add some context that does not matter. See if the cost, the latency or the answer quality changes.',
       artifact:'An inference observation sheet (a page where you note what you saw).',
       check:'Why is a bigger prompt not always a better prompt?',
       lens:'Before anyone argues about which model brand is better, ask the engineers where the cost and the waiting time really come from.'}
    ],
    [
      'unit',
      '9.2',
      'Sampling and output variability',
      {goal:'You will see the sampling controls as ways to shape the odds of each next word. They are not “creativity sliders.”',
       idea:'Lower sampling settings usually give less variation. But they do not make the model deterministic (always giving the same answer) or always true.',
       prove:'Run the same prompt several times under two sampling settings your provider supports.',
       build:'Count how many different outputs you got. Note how the wording differs.',
       brk:'Use one factual task and one creative task. Check if the change matters equally in both.',
       artifact:'A table of your sampling experiment, with the raw outputs (exactly what the model wrote).',
       check:'What really changed: the facts, the variety, or only the wording?',
       lens:'Never promise that “temperature zero means always identical.” Measure what your provider\'s model really does.'}
    ],
    [
      'unit',
      '9.3',
      'Model tiers and routing',
      {goal:'You will see why a smaller, faster, cheaper model can suit some tasks, and a bigger model suits others. It is like a cycle for the corner shop and a truck for heavy loads.',
       idea:'Choosing a model means balancing many things: quality, latency, cost, context, how well it uses tools, and your own limits.',
       prove:'Make a 10-case benchmark. Include pulling out details, reasoning, many languages and saying no.',
       build:'Run two models, or two settings of one model, on the same cases.',
       brk:'Send the easy cases to the cheaper model. Send the hard cases to the stronger one. Compare cost and quality.',
       artifact:'A Model Selection Card.',
       check:'Which pass mark (acceptance metric, the number a model must reach) made you choose?',
       lens:'There is no “best model” until you fix the task, the quality bar and the cost ceiling.'}
    ],
    [
      'unit',
      '9.4',
      'Reasoning, context and fine-tuning boundaries',
      {goal:'You will tell three tools apart: prompting, context or RAG (finding the right page, then answering from it), and fine-tuning. Each one pulls a different lever.',
       idea:'Use context when the model needs facts that keep changing. Use prompting for instructions and behaviour. Use fine-tuning when a habit repeats and stays the same, so it is worth building into the model\'s weights (its inner numbers).',
       prove:'Take one task. Write three plans: prompt only, retrieval or context, and a fine-tuning guess.',
       build:'For each plan, write the data it needs, the benefit you expect, the cost to keep it going, and the evaluation (the test of how well it works) it would need.',
       brk:'Invent a case where fine-tuning looks good, but retrieval costs less because the facts change every week.',
       artifact:'A decision grid: Prompt vs Context/RAG vs Fine-tune.',
       check:'Is the gap about knowledge, about behaviour, or both?',
       lens:'This stops every design talk from ending in “let\'s fine-tune it.”'}
    ],
    [
      'unit',
      '9.5',
      'Benchmarking without fooling yourself',
      {goal:'You will see why small demos can lead you to wrong answers. You will learn to build a fair mix of tasks.',
       idea:'A benchmark is a measuring tape. If the cases lean one way, your decisions will lean that way too.',
       prove:'Before you test, make the groups of cases, pick the sample cases and write the right answers.',
       build:'Where you can, hide which model is which (compare blind). At least keep the same order every time.',
       brk:'Add tricky cases, unclear cases and cases with no answer. See if the ranking changes.',
       artifact:'A model benchmark of 10 to 30 cases, with results for each group.',
       check:'Would your benchmark catch the failure you worry about most?',
       lens:'A PM (product manager) should question the test set before questioning the score.'}
    ],
    [
      'unit',
      '9.6',
      'Model Selection Card',
      {goal:'You will turn your proof into a decision that engineers and stakeholders (people who care about the result) can review.',
       idea:'The card puts the limits, the proof, the back-up and any open worries all in one place.',
       prove:'Fill in the task, the quality target, how private the data is, the waiting-time target and the cost ceiling.',
       build:'Add the model options, the benchmark proof and the back-up plan.',
       brk:'Take away the benchmark results and try to decide anyway. See how much turns into opinion.',
       artifact:'A Model Selection Card with a version history (a list of every change).',
       check:'Can a reviewer see exactly why you chose this model?',
       lens:'This shows your technical judgment in your portfolio. It is worth far more than a screenshot of a leaderboard.'}
    ],
    ['q','I402'],
    ['h','Change one thing at a time'],
    ['p','Here is the most important habit in this chapter. When you compare models, change only the model. Say you change the model and the prompt together, and the result gets better. Now you cannot tell which change helped.'],
    ['h','What you need to know about models'],
    ['p','You need only a little, and it is specific. Know supervised and unsupervised learning, classification and regression, and training, validation and test sets. Know overfitting (learning the answers by heart), precision and recall, and embeddings (an address for meaning).'],
    ['p','Then add transformers and attention, only as an idea. Add how inference differs from training, and how pre-training, fine-tuning and retrieval differ. That is enough to join a design talk.'],
    ['h','Fine-tune, prompt or retrieve?'],
    ['p','The most common question in these talks is whether to fine-tune. Here is a rule of thumb. Treat it as a guess to test, not as a law.'],
    [
      'l',
      ['Use <strong>retrieval</strong> when the problem is facts that change, or private data.','Use <strong>prompting</strong> when clear instructions and examples can steer the behaviour.','Use <strong>fine-tuning</strong> when the behaviour, style or pattern stays the same, comes up again and again, and is worth building into the model\'s weights.']
    ],
    ['p','The table below shows four decisions you will face. For each, see the question to ask first, then the mistake teams make most often.'],
    [
      'tb',
      ['Decision','Ask first','The common mistake'],
      [
        ['Model choice','Which limit is tightest: quality, latency or cost?','Picking the “smartest” model because of its name.'],
        ['Fine-tune','Is the gap about knowledge, or about behaviour?','Fine-tuning a model on documents that change every month.'],
        ['Reasoning level','Does more thinking raise the pass mark (acceptance metric)?','Paying for more thinking without checking if it helps.'],
        ['Context size','Do we really need the bigger desk (window)?','Treating a big window as a replacement for retrieval.']
      ]
    ],
    ['p','Now try it in your own words.'],
    [
      'try',
      {id:'ch22-leader',
       mins:6,
       min:60,
       rows:4,
       task:'Write the one sentence you would say if a stakeholder asked you to switch to the model that just topped a leaderboard.',
       ph:'Before we switch, …',
       after:'A good answer asks: on which of our cases, and at what speed and cost? A leaderboard is a result on someone else\'s test set, like another school\'s marks.'}
    ],
    ['h','Summary'],
    ['p','Here is the habit to carry forward. Measure on your own cases. Change one thing at a time. Write down the proof for your choice. Next, in Chapter 23, you will design the context you send to the model you chose.']
  ],
  capstone:{
    title:'Choose the model, with a back-up, and write it on one page',
    brief:'The name-and-place finder and the context judge both need a model. Your choice changes quality, cost, speed and privacy. You learned that a new model changes more than a benchmark score. You also learned that a recommendation must answer “measured how?”. Now test some models on your own answer key (questions with known right answers). Then write the one-page card with your choice.',
    where:'Use your test harness from Chapter 21 (the tool that records every run) to run the models. Write the one-page card in the notes box below.',
    steps:[
      'Write the job and the quality bar as numbers. For example: “find at least 90 of every 100 names on the answer key, with no more than 5 false alarms in 100 sentences”.',
      'Write how private the text is, and what that rules out at once. For example: a provider that trains on what you send is out, if sentences may hold real Aadhaar numbers.',
      'Set a time limit and a cost limit for one message.',
      'Choose two or three models. Run your harness on the answer key for each one. Put the results side by side. Show the Hindi and Hinglish results apart from the English ones.',
      'Name the back-up: what runs if the first choice is down, slow or costs more. Try the back-up at least once.',
      'Name the test set (your set of questions) you will use to check this choice again in three months.',
      'Put it all on one page, the model selection card. A manager should be able to read it. An engineer should be able to act on it.'
    ],
    done:[
      'Numbers for the quality bar, the time limit and the cost limit.',
      'A table with the models side by side. Hindi and Hinglish are shown apart.',
      'A named back-up that you have tried once.',
      'The one-page card. Every claim traces back to a run in your harness.'
    ]
  }
},

/* --------------------------------------------------------------- 23 / bk 10 */
{
  id:'ch10c', num:23, part:5, curriculumTier:'core', phase:3, prerequisites:['ch2','ch15b','ch8'], nextUnits:['ch11r'], minutes:55, labs:['contextrot'],
  title:'Context engineering: deciding what the model sees',
  concept:'Context engineering means deciding what goes into each request: instructions, examples, evidence, history, tool results, and the format they come in. Think of packing a folder for a colleague. In this chapter you treat the prompt as a contract, set a context budget, and decide where memory is stored.',
  plan:{
    first:'Write a vague prompt (a loose note) that makes the next piece of code (a parser, which reads the reply) fail. Keep the failure, so you can look at it later.',
    build:'Redo the prompt as an interface (a clear handshake between your code and the model). Add structured output (a form with fixed boxes), validation (checking the form), examples, a way to say no, provenance (where each fact came from), and a limit on how much history it carries.',
    brk:'Now break it on purpose. Remove the required boxes. Add instructions that fight each other. Overflow the context (the model\'s desk). Push in history that does not matter.',
    artifact:'A context budget, a schema (the shape of the form), and a design for memory and state.',
    gate:'Explain how context, state and persistent memory differ. Keep the three apart, like three different cupboards.'
  },
  needs:[
    ['A system prompt is a standing instruction','You met this in Chapter 2. Think of rules on the shop wall. Here it is one part of a designed context.',2],
    ['The context window has a limit','You saw this in Chapter 1.5. The desk is only so big, so something must be removed first.',1.5],
    ['Structured output can be required','Chapter 8 made the form reliable. This chapter puts it inside a bigger design.',8]
  ],
  words:[
    ["Context engineering",'Context engineering means deciding what the model gets to read. It is like packing a folder for a colleague: instructions, examples, evidence, history and tool results, and how they are laid out. Retrieval (finding the right page first) is one part of it.'],
    ["Context budget",'A context budget gives each part of the context its own token allowance (tokens are Lego bricks of text). It also says what is dropped first when the total will not fit, like what you leave out of an over-full suitcase.'],
    ["Schema validation",'Schema validation means checking the reply against the form you asked for, before any other code uses it. It is like a clerk checking that every box is filled.'],
    ["Provenance",'Provenance is the record of where a fact came from. It travels with the fact, like a receipt. So you can trace an answer back to its source.']
  ],
  takeaway:[
    'Treat a prompt as an interface contract (a clear promise between your code and the model), not as a paragraph of requests.',
    'Say what is removed first when the context budget is tight, and why.',
    'Tell conversation history, user profile and task state apart. They are three different stores, like three different cupboards.'
  ],
  story:[
    ['c','Before you start','Pick one assistant you know well, your own or one you use. You will list everything that goes into its context.'],
    ['c','On your route','Do units 10.3 and 10.6, then the capstone. Read the other units this pass.'],
    ['p','Last chapter you chose a model. Now the question is what you send to it. You may think the prompt is the message you type. But it is only one part of what the model sees. Every request can also carry instructions, examples, documents, earlier messages and tool results.'],
    ['p','Choosing what goes into the request, and what stays out, is called <strong>context engineering</strong>. It matters for two reasons. The context window (the model\'s desk) has a limit, so not everything fits. And you pay for every token you send.'],
    ['p','Here is a picture. You brief a brilliant new colleague who forgets everything each night. Each morning you hand over a folder: the standing instructions, a few examples, today\'s file, and a note about last week. What you put in that folder decides how well they do.'],
    ['key','Treat a prompt as an interface contract (a promise between your code and the model). It has a role, a task, constraints, examples, an output schema and a refusal behaviour (how it says no). The code that comes next depends on each of these.'],
    ['h','Hands-on units'],
    ['p','The six units below take you from one prompt to a whole context design. Each unit gives you something small to build, and something to break on purpose.'],
    [
      'unit',
      '10.1',
      'Prompt as an interface contract',
      {goal:'You will write prompts that spell out the task, the limits, the inputs, what you expect back, and what happens when something fails.',
       idea:'A prompt is like a contract between your app and the model. Your app promises to send certain things. The model is asked to send back certain things.',
       prove:'Take a vague instruction. Rewrite it with a role, a task, limits, examples and what the output must look like.',
       build:'Run the old and the new version on the same 10 cases.',
       brk:'Add two instructions that fight each other. Watch which behaviour stays steady and which starts to wobble.',
       artifact:'The old and new prompt side by side, plus the results of your 10-case test.',
       check:'Which requirement became something you can measure after the rewrite?',
       lens:'Keep versions of your prompt changes, the way engineers do with code.'}
    ],
    [
      'unit',
      '10.2',
      'Structured outputs and schemas',
      {goal:'You will make the model\'s output something a machine can read. You will check it before any other code uses it.',
       idea:'Output in plain language is flexible. But an app\'s interfaces need a shape they can predict, like a form with fixed boxes.',
       prove:'Write a small JSON schema (a form written as labels and values in curly brackets) for an object that holds one extracted task.',
       build:'Make some outputs, read them in (parse them), and reject any with a wrong structure.',
       brk:'Remove a required box, and put in a value of the wrong type. Check that your app catches both.',
       artifact:'The schema, the validation tests, and sample payloads (sample filled forms) that are valid and invalid.',
       check:'Does the schema stop unsafe values, or only wrong formatting?',
       lens:'Structured output controls the interface. It does not promise that the content is true.'}
    ],
    [
      'unit',
      '10.3',
      'Context budget',
      {goal:'You will measure how much of the context is instructions, how much is history, how much is retrieved text, and how much is tool output. Think of dividing a small desk between piles.',
       idea:'Context is limited, like space on a desk. It affects quality, latency (waiting time) and cost.',
       prove:'Note the token count for each part of the context, where your provider shows it. Where it does not, estimate the same way every time.',
       build:'Write a budget policy. It says what you keep, what you shorten into a summary, and what you drop first.',
       brk:'Flood the context with history that does not matter. Compare the answer quality and the cost.',
       artifact:'A Context Budget Worksheet.',
       check:'What is the first thing you would remove when space is tight?',
       lens:'A PM (product manager) should be able to ask “what is in the context?” and get an exact answer.'}
    ],
    [
      'unit',
      '10.4',
      'State, history and memory',
      {goal:'You will keep four things apart that people often mix up. They are the context of one request, the conversation history, and the data kept about a user. The fourth is the state of a task (where the job has reached).',
       idea:'“Memory” is a whole design, not a single switch. It has storage, rules for how long to keep things, and rules for who may see them.',
       prove:'Draw three stores: the session history, the user profile and the task state. Think of three cupboards.',
       build:'For each store, write down the fields, who owns it, how long it is kept, who can see it, and how it is deleted.',
       brk:'Bring in memory that is old, or that clashes with other memory. Write rules for which one wins.',
       artifact:'A Memory and State Design Sheet.',
       check:'Which data should never go into a prompt by default?',
       lens:'This is where privacy and product design meet context engineering.'}
    ],
    [
      'unit',
      '10.5',
      'Provenance and citations',
      {goal:'You will make the evidence traceable, like a trail of footprints. You can follow it from the answer back to the source, the chunk (the small card cut from the source) and the version.',
       idea:'A citation (a note saying where a claim came from) helps only if the user, or an auditor (a checker), can trace the claim back to its evidence.',
       prove:'Attach a source ID, a section and a chunk ID to every passage you retrieve.',
       build:'Write an answer that cites those IDs.',
       brk:'Delete a source version or change it. Test if the old citations still work.',
       artifact:'A provenance schema, with some example citations.',
       check:'Can you find the exact source that was used for an answer?',
       lens:'Being able to trace things is essential in systems with strict rules and policies.'}
    ],
    [
      'unit',
      '10.6',
      'Context failure clinic',
      {goal:'You will find why answers went wrong when the context was missing, old, off-topic, self-contradicting or harmful.',
       idea:'Many failures that people blame on “the model” are really mistakes in how the context was put together.',
       prove:'Make five context packages that are bad on purpose. Guess how each one will fail.',
       build:'Fix one problem at a time. Run the same test set each time.',
       brk:'Mix an old policy, some unrelated text and a prompt injection (a hidden note that says “ignore your teacher”) into the context.',
       artifact:'A Context Failure Taxonomy (a sorted list of the ways context goes wrong).',
       check:'What failed: retrieval, assembly, authorisation (who may see what), the order of instructions, or the writing of the answer?',
       lens:'This prepares you for production RAG (a real, live system that finds pages first and answers from them) and for security.'}
    ],
    ['p','One more thing about structured output. It removes guesswork for the code that reads the reply. That code usually cannot handle ordinary sentences.'],
    ['q','I403'],
    ['h','Memory is an architecture choice'],
    ['key','A model does not have memory. Every product that offers memory has built a store for it. The kind of store decides what it can delete when someone asks. Think of a goldfish that forgets, plus a notebook you keep for it.'],
    ['p','You will hear many names for parts of the context: caching, compression, few-shot examples, instruction hierarchy. They all answer the same two questions. What goes in? What is removed first when it does not fit?'],
    ['p','Let us try that with an assistant you know.'],
    [
      'try',
      {id:'ch23-budget',
       mins:6,
       min:60,
       rows:4,
       task:'Pick an assistant you know. Guess the tokens spent on system instructions, history, retrieved passages and tool output. Then decide what is removed first when the budget is tight.',
       ph:'instructions … history … retrieved … tool output … remove first: …',
       after:'Most people remove history first and evidence last. If your order is different, write down why. That reasoning is the design.'}
    ],
    ['h','Summary'],
    ['p','Here it is in short. The prompt is one part of the context. The context has a budget. Memory is something you design and store. Next, in Chapter 24, you will use this context design as the input to a production retrieval system.']
  ],
  capstone:{
    title:'Plan exactly what the model gets to see',
    brief:'Every call to the context judge sends the model a bundle of text. The bundle has a size limit, and it costs money. You learned to treat a prompt as a contract. You learned what is removed first when space runs short. You learned to keep conversation history, user settings and task state apart. Now write the one-page plan for the context judge\'s call.',
    where:'Write it with real token counts from a run of your harness (the tool that records your runs). Write the page in the notes box below.',
    steps:[
      'List everything that goes into one call to the context judge: the instructions, the worked examples, the sentence to check, any earlier messages and any reference list.',
      'Next to each item, write a token count from a real run. Do not guess.',
      'Set a total limit for the call. Show how much room is left.',
      'Write the order in which things are removed when space runs out, and the rule behind it. The sentence to check is never removed.',
      'Write the exact shape the reply must have. This is your finding format. Write what happens when a reply does not match.',
      'For each piece of stored data (the chat so far, a user\'s settings, the state of the current task), say which of the three kinds of memory it belongs to.'
    ],
    done:[
      'A list of everything in the call, with a real token count beside each item.',
      'A total limit, and the room left.',
      'The removal order, and the rule behind it.',
      'The reply shape, and the three kinds of stored data sorted.'
    ]
  }
},

/* --------------------------------------------------------------- 24 / bk 11 */
{
  id:'ch11r', num:24, part:5, curriculumTier:'core', phase:3, prerequisites:['ch7','ch12','ch6'], nextUnits:['ch12t'], minutes:60, labs:['fusion'],
  title:'Production RAG: ingestion, access control and freshness',
  concept:'A production retrieval system (the open-book exam for real use) has many stages you can tune, from reading documents in to checking the answer. In this chapter you walk through each stage, including permissions, deletion and rollback. At the end you have a design you could defend in a review.',
  plan:{
    first:'Take three real documents. For each, make a list: its id, its sections, its language, its metadata (labels about the document) and its access label (who may read it). Then guess which metadata will be worth keeping.',
    build:'Compare lexical (exact word), semantic (same meaning) and hybrid (both) retrieval. Then add reranking (putting the found pages in a better order), or write a measured reason for leaving it out.',
    brk:'Test four things: a document is deleted, a permission changes, there are duplicates, and the index version changes. The index is like the catalogue of a library.',
    artifact:'A production RAG architecture (a real, live system that finds pages first and answers from them). It has access control, provenance, versioning, a no-answer policy and a rollback path (a way back).',
    gate:'Name the first production retrieval failure you would look into, and say why that one comes first. It is like a doctor choosing which symptom to check first.'
  },
  needs:[
    ['You built retrieval by hand','You did this in Chapters 3 to 7. This chapter turns it into a full design.',7],
    ['Keyword search and meaning search fail in different ways','Chapter 12 measured the difference. Here it becomes a decision about ingestion and indexing.',12],
    ['The answer key is your measuring tool','Like a teacher\'s key, every claim in this chapter is checked against it.',6]
  ],
  words:[
    ["Ingestion",'Ingestion is everything that happens to a document before it can be found: parsing (reading it), extraction (pulling the text out), enrichment (adding labels), chunking (cutting into index cards) and embedding (an address for meaning). It sets a ceiling on quality. Nothing later can raise that ceiling.'],
    ["Query rewriting",'Turning what the user typed into what should really be searched, before the retrieval runs. It is like a librarian who rewords your question first.'],
    ["Access-control-aware retrieval",'Filtering by who is asking, as part of the search itself. The other way is to hide results later on the screen. Think of a locked cupboard versus a curtain.'],
    ["Embedding versioning",'Keeping track of which model made which stored vectors (the numbers that are the addresses for meaning). Then a change of model cannot quietly spoil an index.']
  ],
  takeaway:[
    'Name the stages of a production retrieval pipeline. Say which of them can be tuned.',
    'Explain why the quality of ingestion sets an upper limit on the quality of retrieval.',
    'Say what must happen to your index when a document is deleted or a permission changes.'
  ],
  story:[
    ['c','Before you start','Keep two things ready: your Chapter 12 retrieval pipeline and your Chapter 6 answer key.'],
    ['c','On your route','Do units 11.5 and 11.8, then the capstone. Read the other units this pass.'],
    ['p','Last chapter you decided what the model should see. Now we ask where that evidence comes from in a real system. Your Chapter 7 system works because you chose every document yourself. And you are its only user.'],
    ['p','Real use is different. Scans arrive crooked. Permissions change after a document is indexed (added to the library catalogue). The same contract is uploaded twice under two names. And your provider updates the model without telling you. This chapter is about a retrieval system that survives all of that.'],
    ['c','Note','A production pipeline has seven stages: reading documents in, splitting them, adding labels, creating embeddings (addresses for meaning), searching, building the prompt, and checking the answer. You can tune each stage. So each one is a suspect when quality drops and the code has not changed.'],
    ['key','Anything lost while reading documents in is lost for good. Better search cannot bring back a table that the parser flattened, or a page that it skipped. It is like a photocopy that missed a page.'],
    ['h','Hands-on units'],
    ['p','There are eight units below. They follow one document on its journey. First it is read. Then it is labelled and split. Then it is searched. Last, it is protected, refreshed and, if needed, rolled back. Each unit has something to build and something to break.'],
    [
      'unit',
      '11.1',
      'Parsing and document ingestion',
      {goal:'You will treat ingestion as an engineering pipeline, like a factory line. It is more than “upload PDF.”',
       idea:'If bad data goes in, or the document loses its shape at ingestion, bad results come out of retrieval later.',
       prove:'Take three PDFs or documents. Compare the text that was pulled out with what a person sees in the source.',
       build:'Write down the page, the section, the table, the language and your notes on the parser.',
       brk:'Use a scanned page, a page full of tables, and a broken document. Write down what gets lost.',
       artifact:'An Ingestion Quality Report.',
       check:'Which information disappeared before retrieval even started?',
       lens:'Ask how good the parser or OCR (the tool that reads text from pictures) is before you blame the embeddings.'}
    ],
    [
      'unit',
      '11.2',
      'Metadata and document identity',
      {goal:'You will give documents and chunks stable IDs, like roll numbers. You will add the metadata (labels) you need for filtering and provenance (where a fact came from).',
       idea:'Metadata is part of how retrieval works. It is not decoration.',
       prove:'Make these fields: document_id, version, section, language, access_label and effective_date.',
       build:'Give every chunk a stable ID. Keep the link to its parent document.',
       brk:'Make duplicate versions and old, replaced versions of a document. Test your retrieval filters.',
       artifact:'A Document Metadata Contract.',
       check:'Can the system tell current evidence from out-of-date evidence?',
       lens:'Versioning and identity matter a lot the moment a policy changes.'}
    ],
    [
      'unit',
      '11.3',
      'Chunking families',
      {goal:'You will compare fixed, recursive or structure-aware, semantic and hierarchical chunking. None of them is best in every case.',
       idea:'A chunking choice is a guess about what size of evidence your users will need.',
       prove:'Cut the same document into chunks in three ways. Look at where the edges fall.',
       build:'Write 10 questions. Each needs a different amount of evidence.',
       brk:'Test a question whose answer crosses a chunk edge.',
       artifact:'A Chunking Experiment, with before and after examples.',
       check:'Which chunking matched your set of questions, and why?',
       lens:'Do not ask “which chunking is best?” Ask “best for what corpus (your pile of documents), and for what kinds of questions?”'}
    ],
    [
      'unit',
      '11.4',
      'Sparse retrieval',
      {goal:'You will learn exact-word search (lexical retrieval), like Ctrl+F, and why it is still useful.',
       idea:'Exact methods are often strongest for IDs, names, codes and exact phrases.',
       prove:'Build a small keyword or BM25-style search (a way to score pages by their words). Or use a library (ready-made code), once you understand the idea behind the scoring.',
       build:'Measure the rank of the passages you know are the right answer.',
       brk:'Use rephrased questions and questions full of synonyms. See where it is weak.',
       artifact:'A Sparse Retrieval Benchmark.',
       check:'Where did exact matching win?',
       lens:'Do not throw away a strong, predictable signal just because embeddings are in fashion.'}
    ],
    [
      'unit',
      '11.5',
      'Dense, hybrid and vector search',
      {goal:'You will see embeddings as a way to store meaning that can be indexed. You will combine exact-word evidence with meaning evidence.',
       idea:'Dense retrieval (search by meaning) helps when two texts mean the same thing in different words. Hybrid retrieval joins methods that fail in different ways, like two nets with different holes.',
       prove:'Run the question set from Chapters 4 and 5 through lexical, dense and hybrid retrieval.',
       build:'Write down the rank of the right evidence for each question.',
       brk:'Make cases with an exact ID, a synonym, several languages, and an unclear question.',
       artifact:'A Retrieval Benchmark with the evidence for each question.',
       check:'Which kinds of question work best with which retriever?',
       lens:'Let the pattern of your mistakes guide your design.'}
    ],
    [
      'unit',
      '11.6',
      'Reranking',
      {goal:'You will learn a second-stage relevance model (a second judge that re-orders the found pages). You will measure whether its benefit is worth the cost and the waiting time.',
       idea:'The first stage tries to find every good candidate. Reranking can then improve the order among those candidates, like re-sorting a shortlist.',
       prove:'Fetch 10 candidates and add a second scoring stage. Use a reranker you have, or a stand-in you have measured.',
       build:'Compare Recall@10 (how many right pages are in the top 10), Precision@3 (how many of the top 3 are right) and latency (waiting time), before and after.',
       brk:'Include cases where the reranker puts the evidence in the wrong order, and does it with confidence.',
       artifact:'A Reranking Experiment Report.',
       check:'Did the gain reach the final task, or only a number in the middle?',
       lens:'Never add reranking just because a sample design has it. Prove that it is worth it.'}
    ],
    [
      'unit',
      '11.7',
      'Query rewriting, parent-child retrieval and abstention',
      {goal:'You will improve the search question and the size of the context, and still keep what the user meant.',
       idea:'Retrieval is a pipeline of steps: forming the query, finding candidates, filtering, ranking, putting the context together, and the policy for the answer.',
       prove:'Rewrite unclear questions as clear search queries. Compare the results.',
       build:'Find small child chunks, but hand back the bigger parent text, so the answer reads well.',
       brk:'Test a question that has no answer, and a question where the rewrite changes what the user meant.',
       artifact:'A Query Strategy and an Abstention Test Set (questions where the system should say “I do not know”).',
       check:'When should the system ask a question back instead of searching?',
       lens:'Saying “I do not know” is a product behaviour. It is more than one sentence in a prompt.'}
    ],
    [
      'unit',
      '11.8',
      'Authorization, freshness and rollback',
      {goal:'You will make retrieval respect permissions (who may see what). You will make it safe to undo changes.',
       idea:'A correct answer taken from data the user may not see is still a security failure.',
       prove:'Add an access label to your chunks. Filter by the role of a test user.',
       build:'Pretend a document is deleted, a permission changes, and the index is rebuilt.',
       brk:'Ask a question right after a permission is taken away. Check that old content left in the index cannot be reached.',
       artifact:'A production RAG architecture, plus a checklist for permissions, freshness and rollback.',
       check:'Can you prove that a user who is not allowed cannot get the chunk?',
       lens:'Keep permission checks in the application and the data, like a lock on the door. Putting them only in the model\'s instructions is not enough.'}
    ],
    ['q','I404'],
    ['h','Reranking has a cost'],
    ['key','Reranking improves the order of results, but it adds cost. Fetch ten candidates and score them again. Then check if recall at ten and precision at three improved enough to be worth the extra time and cost.'],
    ['h','Four questions to ask about any retrieval product'],
    ['p','A real retrieval system has a long list of worries. You do not need to memorise it. Every item fits under one of four questions.'],
    [
      'n',
      ['<strong>Did we read the document correctly?</strong> This covers scans, tables, and content that a parser drops.','<strong>Is this user allowed to see it?</strong> This covers permissions, separate customers, and deleted documents.','<strong>Did we find the right chunk?</strong> This covers keyword search, meaning search, query rewriting and reranking.','<strong>Can we show where the answer came from?</strong> This covers chunk IDs, citations, and what happens when there is no answer.']
    ],
    ['p','Use these four questions whenever someone shows you a retrieval product. Then try them on a case of your own.'],
    [
      'try',
      {id:'ch24-delete',
       mins:6,
       min:60,
       rows:4,
       task:'A document is deleted from the source system at 10am. Write what must happen so the assistant stops quoting it, and by when.',
       ph:'At 10am … then … by …',
       after:'If your answer depends on a nightly rebuild, your system keeps quoting the deleted document from 10am until the rebuild. That gap is a decision, so make it on purpose.'}
    ],
    ['h','Summary'],
    ['p','In short: ingestion sets the ceiling. Permissions and deletions must reach the index. Every extra stage must prove it is worth its cost. Next, in Chapter 25, you will give the model controlled access to actions, not only to evidence.']
  ],
  capstone:{
    title:'Draw the gateway on one page',
    brief:'The gateway is the version of Bharat Privacy Guard that sits in front of a company\'s servers, logs and AI traffic. Think of a gatekeeper at the door. You will not build it. But you must be able to design it, so an engineer can build from your page and a security reviewer can challenge it. You learned the stages of a production search pipeline. You learned why the first stage caps everything after it. You learned what must happen to an index when a document is deleted or a permission changes. Now use all of this on the gateway\'s rules and reference lists.',
    where:'Write only. One page of design. No code needed.',
    steps:[
      'Draw these stages as separate boxes: how a company\'s rules and reference lists are loaded, where they are stored, how they are searched, how the right rule is picked for a request, how the result is put in order again if needed, and how the decision is applied.',
      'Add who may do what: who can change a rule, who can read the logs, and who can switch the gateway off. Mark where the permission check happens.',
      'Show how an answer can be traced back. Every decision should record which rule, in which version, produced it.',
      'Write the “no answer” rule: what the gateway does when no rule applies, and what the user sees.',
      'Write how the rules and the reference lists are versioned, and what happens to old decisions when a rule changes.',
      'Write the rollback: what you do when a new rule version makes things worse.'
    ],
    done:[
      'A one-page drawing. The stages are separate boxes. The permission check is marked.',
      'A trace from a decision back to a rule and a version.',
      'The “no rule applies” behaviour, the versioning plan and the rollback.',
      'The page really fits on one page. If it does not, you have not made enough decisions yet.'
    ]
  }
},

/* --------------------------------------------------------------- 25 / bk 12 */
{
  id:'ch12t', num:25, part:5, curriculumTier:'core', phase:3, prerequisites:['ch8','ch2','ch11r'], nextUnits:['ch13a','ch14p','ch18s','b4'], minutes:50, labs:['schema'],
  title:'Tool calling and workflows: contracts before agents',
  concept:'A tool (a button the model can press) lets the model do something real. So you decide exactly what it may do and who checks. You will write tool contracts, make the server enforce permissions (the server, not the model, says who may do what), and pick a fixed workflow before you allow an agent.',
  plan:{
    first:'Pick one action that happens outside the model. Write its tool schema (a form that lists exactly what the tool takes in) before you write any model logic.',
    build:'Build the flow classify → retrieve → tool → validate → respond. Think of a train that stops at fixed stations. Add a confirmation step for anything that has consequences.',
    brk:'Test four things. First, badly filled arguments (the values you hand to the tool). Second, a timeout (the tool takes too long). Third, a call the user is not allowed to make. Fourth, a tool that returns the wrong thing with a straight face.',
    artifact:'Three things to hand in: a tool contract (the rule sheet for one tool), a workflow diagram (a map of the steps), and a table of how each step can fail.',
    gate:'Point to every place in the flow where ordinary, fixed code stays in control, like the guard at the gate who never gets tired.'
  },
  needs:[
    ['A schema (a form with fixed boxes) makes the format reliable','From Chapter 8. A tool contract uses the same idea for actions: fixed boxes, not a free letter.',8],
    ['The model invents when it has no evidence','From Chapter 2. Like a parrot making things up, the model can now invent the inputs to a real action.',2]
  ],
  words:[
    ["Tool contract",'A written rule sheet for one outside action, like the terms on a bank form. It lists the name, what the tool does, what it takes in and how tightly that is limited, the errors it can give back, who may use it, and what it changes.'],
    ["Deterministic workflow",'A fixed list of steps, like a recipe. The model is called only for the parts that really need judgement (a thoughtful choice).'],
    ["Idempotency",'Doing the same thing twice has the same result as doing it once, like pressing a lift button two times. It matters the moment anything retries (tries again).'],
    ["Confirmation step",'A stop sign: a person must say yes before an action with consequences can run.']
  ],
  takeaway:[
    'Write a tool contract that a reviewer could sign off.',
    'Say when a fixed workflow is better than letting the model decide.',
    'Name the checks that must happen before an important action runs.'
  ],
  story:[
    ['c','Before you start','Open your experiment harness (your test set-up) from Chapter 21 and the agent loop from Chapter 9. Keep both close by for the hands-on units.'],
    ['c','On your route','Do units 12.1 and 12.5. Then run the short workflow cell (one box of code) below. Read the other units this time.'],
    ['p','So far in this part, the model has read things and written answers. Think of a student who only reads and writes. In this chapter the model starts to <em>do</em> things. That means you must be more careful.'],
    ['p','A <strong>tool</strong> is a button the model can press to do something real. It can look up an invoice (a bill), send an email or change a record. Now the question is not whether the model can act. The question is what exactly it may do, with what data, and who checks.'],
    ['p','Think of a bank teller. A teller can look up your balance. But a teller cannot approve a loan alone. A teller cannot send money just because a customer asks. The rule exists because some actions have effects outside the bank. Tellers are not the problem.'],
    ['p','A model with tools is in the same spot. In this chapter you will write down what each tool may do. You will keep the checks in ordinary code (plain code that always does the same thing). And you will pick a fixed workflow first, until an agent (a helper that decides its own steps) has earned its place.'],
    ['h','Hands-on units'],
    ['p','There are six units. Do them in order. Each has a short goal, an idea, something to try, something to break on purpose, and something to hand in. The checking question and the product lens at the end say what to take away.'],
    [
      'unit',
      '12.1',
      'Tool schemas: the form for a tool',
      {goal:'Write a tool as a tightly limited contract (a rule sheet). It has a name, a description, inputs, errors and permissions.',
       idea:'The model sees how you define the tool, and it uses that to work. Think of the label on a medicine bottle. A clear label helps the model use the tool well.',
       prove:'Write a schema (a form with fixed boxes) for <code>get_invoice_status(invoice_id)</code>.',
       build:'Add the boxes that must be filled, the shapes that are allowed, and a clear error for each thing that can go wrong.',
       brk:'Try a missing ID, an ID in the wrong format, and an invoice the user is not allowed to see.',
       artifact:'A written Tool Contract Specification (the full rule sheet).',
       check:'Could a new engineer read it and know exactly what the tool can and cannot do?',
       lens:'Write tool descriptions with the same care as the guide for an API (the way programs talk to each other).'}
    ],
    [
      'unit',
      '12.2',
      'Tool selection: picking the right button',
      {goal:'Measure whether the model picks the right tool for each task, like checking if a helper grabs the right spanner.',
       idea:'Give the model a tool only when it adds real value. Do not add one just because tools feel new and exciting.',
       prove:'Make 20 test cases that use two or three tools between them.',
       build:'For each case, write down which tool the model chose, which inputs it gave, and which tool you expected.',
       brk:'Add tools with names that are almost the same, and requests that could mean more than one thing.',
       artifact:'A Tool Selection Benchmark (a score sheet for picking tools).',
       check:'What share of the calls were correct, what share were not needed, and what share were unsafe?',
       lens:'Later, with agents, this becomes one of the quality numbers you can watch.'}
    ],
    [
      'unit',
      '12.3',
      'Validation, retries and timeouts: check, try again, stop waiting',
      {goal:'Keep the inputs the model writes apart from the controls that decide whether to run them, like a note and the guard who reads it.',
       idea:'The model does not decide what is allowed. Ordinary code does.',
       prove:'Check every input before the tool runs. Then add a rule for timeouts (how long to wait) and retries (how many times to try again).',
       build:'Pretend failures happen. Some go away on their own, like a busy phone line. Some never will.',
       brk:'Make the tool return a badly formed result, and watch what the next step does with it.',
       artifact:'A Tool Failure-State Table (a list of how the tool can fail and what happens next).',
       check:'Which failures are worth trying again, and which need a person to step in?',
       lens:'For every outside service your product depends on, a PM (product manager) should ask three things. What happens on a timeout? What gets retried? What counts as a failure?'}
    ],
    [
      'unit',
      '12.4',
      'Idempotency and side effects: pressing twice is safe',
      {goal:'Understand why calling a tool twice can repeat an action, like paying a bill twice by mistake.',
       idea:'A retry is safe only when the action is safe to repeat, or when something stops it from running twice. That protection is called an idempotency mechanism.',
       prove:'Design an idempotency key (a unique token stamped on each request, like a receipt number) for submitting a purchase or a request.',
       build:'Run the same action twice, and check that only one real effect happens.',
       brk:'Pretend a network timeout happens after the server has already accepted the request. The reply got lost on the way back.',
       artifact:'A Side-Effect Safety Checklist (a list to tick before anything changes the outside world).',
       check:'What happens if the caller never gets the message saying it worked?',
       lens:'This matters most when AI can start payments, tickets, messages or records.'}
    ],
    [
      'unit',
      '12.5',
      'Human approval: a person says yes first',
      {goal:'Put a clear confirmation step (a stop sign where a person says yes) before any action that has consequences or cannot be undone.',
       idea:'Having a person in the loop is a wall the system enforces, like a gate that really locks. It is more than a popup that asks “Sure?”.',
       prove:'Build the flow draft, review, approve, execute.',
       build:'Write down who approved, what they approved, and exactly which request was run.',
       brk:'Change the request after it was approved, and check that running it is blocked.',
       artifact:'An Approval Workflow Diagram (a map of who says yes and when), plus a design for the audit record (the log book of what happened).',
       check:'What exactly did the person approve?',
       lens:'An approval must be tied to one specific action, not to a loose chat.'}
    ],
    [
      'unit',
      '12.6',
      'Workflow patterns: four ways to line up the steps',
      {goal:'Build four kinds of workflow. One: steps one after another. Two: routing, like a traffic cop sending each car down a road. Three: steps in parallel, side by side. Four: a second check that improves the first answer.',
       idea:'A workflow is a path fixed in advance, like a train line. The model is called at certain stops along it.',
       prove:'Build one simple workflow where steps run in order, and one that routes each request to the right path.',
       build:'Measure how long it takes, what it costs and how many tasks succeed.',
       brk:'Send a request down the wrong route, and watch the failure show up in the steps after it.',
       artifact:'A Workflow Pattern Comparison (the four ways side by side).',
       check:'Which pattern adds real value, and which only makes things harder?',
       lens:'Use the simplest pattern that meets your acceptance criteria (the tests that say the work is good enough).'}
    ],
    ['h','Run a workflow with an approval step'],
    ['p','This is the fixed workflow for the rule-keeper, in about thirty lines. Ordinary code finds each detail and picks the action. A risky action waits until a person approves. In Chapter 26 you give an agent the same job, so you have something to compare it with.'],
    ['do','Run the workflow with an approval flag',[
      ['p','Press Run on the cell (one box of code). It checks four starter sentences. A PAN or an Aadhaar number is removed only after approval, because letting one through cannot be taken back.'],
      ['code','import re\n\nSENTENCES = [\n    "Hi, I am Rahul Verma. My mobile number is 9876543210 and my email is rahul.verma@example.com.",\n    "Sir mera aadhaar 4321 5678 9012 hai aur ye number 98xxxxxx12 pe call kar lena",\n    "mera pan card ABCPJ1234K hai, iska photo kal bhej dunga",\n    "What documents do I need to renew my driving licence?",\n]\nPATTERNS = {\n    "PAN": r"\\b[A-Z]{5}[0-9]{4}[A-Z]\\b",\n    "AADHAAR": r"\\b[2-9][0-9]{3} ?[0-9]{4} ?[0-9]{4}\\b",\n    "MOBILE": r"(?<![0-9])[6-9][0-9]{9}(?![0-9])",\n    "EMAIL": r"[\\w.]+@[\\w.]+\\.[a-z]+",\n}\nNEEDS_APPROVAL = {"PAN", "AADHAAR"}\n\ndef run_workflow(text, approved=False):\n    results = []\n    for kind, rx in PATTERNS.items():\n        for m in re.finditer(rx, text):\n            action = "remove" if kind in NEEDS_APPROVAL else "mask"\n            if kind in NEEDS_APPROVAL and not approved:\n                status = "WAITING for approval"\n            else:\n                status = "applied"\n            results.append((kind, m.group(), action, status))\n    return results\n\nran_without_approval = 0\nfor text in SENTENCES:\n    print(text[:60])\n    for kind, value, action, status in run_workflow(text, approved=False):\n        print("   ", kind, value, "->", action, "-", status)\n        if kind in NEEDS_APPROVAL and status == "applied":\n            ran_without_approval += 1\nprint("risky actions that ran without approval:", ran_without_approval)'],
      ['x','The first sentence is handled at once: the mobile number and the email are masked (hidden). The Aadhaar and PAN lines say WAITING for approval. The last line reads <em>risky actions that ran without approval: 0</em>. That zero is the number your capstone must report. Now change <code>approved=False</code> to <code>approved=True</code> in the loop, run it again, and watch the same lines turn to applied.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','This cell has everything it needs inside it, so run the whole cell, not a part. If you changed a name, check the spelling and the capital letters.','A sentence shows no lines under it','That is right for the driving-licence sentence. It has nothing personal, so the workflow finds nothing and leaves it alone.','The Aadhaar number is not found in a sentence you wrote','The pattern looks for twelve digits that do not start with 0 or 1. A number with dashes, or one split across lines, is missed. Add it to your answer key (the list of right answers) as a tricky row.']
      ]
    ]],
    ['h','Prefer a fixed workflow'],
    ['p','After the units, one lesson stands out. A fixed workflow is simpler to test and easier to trust than an agent, like a bus on a set route next to a taxi that picks its own way. So make it your first choice.'],
    ['key','A fixed workflow is often safer than an agent. If you know the steps, fix them in code and let the model handle only the part that needs judgement.'],
    ['q','I405'],
    ['h','Tool checklist: tick before you go live'],
    ['p','Before any tool goes live, run it through this checklist, like a pilot before take-off. Every line is here because it caused a real incident somewhere.'],
    [
      'l',
      ['The name is clear and the description is true. The model reads both.','The inputs are tightly limited. Use a fixed list of choices instead of free text wherever you can.','Anything the tool changes is stated clearly.','The server enforces permissions. Do not just ask the model to behave.','You have thought about idempotency, which means what happens if the call runs twice.','Errors come back in a fixed form, like a form with labelled boxes.','Audit data (a log book of what happened) is recorded.','Actions that destroy or delete something need confirmation (a person says yes first).']
    ],
    ['key','Give the model a tool only when its choice adds value. Every tool adds a way to attack the system, extra waiting, extra cost and new ways to fail.'],
    ['p','The last idea in the checklist leads to a useful exercise. Look at your own list of tools, and count how many really need the model.'],
    [
      'try',
      {id:'ch25-cross',
       mins:6,
       min:60,
       rows:4,
       task:'List the tools you would give a support assistant. Then cross out every tool where a fixed rule would choose correctly more than 95% of the time.',
       ph:'Tools: … Crossed out: … Left: …',
       after:'What is left is the set of tools where the model’s judgement is worth the risk. It is usually much shorter than the first list.'}
    ],
    ['h','Summary'],
    ['p','Let us pull it together. A tool lets a model act, so every tool needs a written contract that says what it may do. The checks belong in ordinary code, not in the model. And when you already know the steps, a fixed workflow beats an agent.'],
    ['p','Next, Chapter 26 takes the opposite step. It lets the model choose the order of steps by itself. We call that an agent.']
  ],
  capstone:{
    title:'Build a workflow that proposes changes but cannot make risky ones alone',
    brief:'Before you let a model act on its own, you write the contract for each action and decide which actions need a person. In this chapter you learned to write a tool contract a reviewer could sign, when a fixed workflow beats an agent, and which checks must happen before an important action runs. Now you build a workflow for the rule-keeper. The model proposes what to do with each finding. A person must approve the risky ones.',
    where:'Use your test harness (your test set-up) from Chapter 21 and the agent loop from Chapter 9, and add to them in code. Write the numbers you measure in the notes box below.',
    steps:[
      'Write the contract for the action “hide this detail”. Give its name, what it needs, what it returns, what it may change, and what it can never change. A reviewer should be able to sign it.',
      'Decide which actions are risky enough to need approval. For example, letting any ID number through, or deleting a stored copy, always needs approval.',
      'Build a fixed workflow with these steps. Check the sentence. List the findings. Propose an action for each finding. Wait for approval on the risky ones. Then apply the actions.',
      'Prepare twenty test messages. For each one, write down the right proposal before you run anything.',
      'Run them. Count how often the model proposes the correct action when it is not allowed to act on its own. Also count how many risky actions would have been applied without approval. That number must be zero.',
      'Write the checks that must happen before an important action runs.'
    ],
    done:[
      'A contract for the hide action that a reviewer has signed off.',
      'A list of the actions that need approval.',
      'A working workflow where risky actions wait for approval.',
      'Two numbers from twenty messages: how often the proposal was right, and how many risky actions ran without approval (zero).'
    ]
  }
},

/* --------------------------------------------------------------- 26 / bk 13 */
{
  id:'ch13a', num:26, part:5, curriculumTier:'core', phase:3, prerequisites:['ch12t','ch1'], nextUnits:['ch14p','b5'], minutes:60, labs:['agentloop'],
  title:'Agents: loops, stopping conditions and control',
  concept:'An agent picks actions, checks what came back and keeps going toward a goal. The hard part is control, not brains. You will build an agent with firm limits, add stopping conditions (rules for when to stop), and measure it against the fixed workflow from Chapter 25.',
  plan:{
    first:'Build the smallest loop you can: propose → call one approved tool → look at the result → continue or stop. A loop is a set of steps that go round and round, like a ceiling fan.',
    build:'Add a list of allowed tools, a maximum number of steps, state that you can see (a notebook of what has happened so far), stopping conditions, and a point where a person must approve.',
    brk:'Make the agent loop forever. Feed it confusing tool output (what the tool hands back). Ask it to use a tool it is not allowed to use.',
    artifact:'A score sheet that sets the agent against the deterministic workflow (the fixed list of steps) across twenty tasks.',
    gate:'Prove that the extra freedom adds value you can measure. If it does not, ship the workflow (send the workflow out to real users).'
  },
  needs:[
    ['Tool contracts and fixed workflows','Chapter 25 built the workflow that the agent is compared against, like the bus that the taxi races.',25],
    ['Every step costs tokens (the small bricks of text you pay for)','From Chapter 1. A loop multiplies that cost by the number of steps, like paying for every lap.',1]
  ],
  words:[
    ["Agent",'A system where the model picks actions, looks at what came back, and keeps going toward a goal, like a helper with a list of errands.'],
    ["Agent loop",'One round of goal, decision, tool call, observation (what it saw) and updated context (the model’s desk, with new notes), then a choice to stop or go on. People forget the stopping part.'],
    ["Step budget",'A hard limit on how many actions an agent may take before it must give up, like a curfew. It is the main guard against a loop that never ends.'],
    ["Trajectory",'The list of steps an agent took, in order, like the tools it called. It is the route the helper took, not just where it ended up. You can score it apart from the final answer.']
  ],
  takeaway:[
    'Draw the agent loop with its stopping conditions and error paths.',
    'Explain why most agent failures are control problems, not intelligence problems.',
    'Say when to add a second agent, and when not to.'
  ],
  story:[
    ['c','Before you start','Keep the workflow from Chapter 25 and its twenty test tasks ready. You will run the same tasks through an agent and compare.'],
    ['c','On your route','Do units 13.4 and 13.7. Then run the small agent cell (one box of code) below. Read the other units this time.'],
    ['p','In the last chapter you built a fixed workflow. You chose the steps in advance, like a train line. The model only did the parts that needed judgement. Now we give the model more freedom, and see what that costs.'],
    ['p','An <strong>agent</strong> is a helper that runs a loop on its own: decide, act, check the result, decide again. That sounds strong, but it brings a new problem. Every loop also needs a way to stop. Most agent problems come from the stopping, not from how clever the model is.'],
    ['p','Think of sending a junior colleague to find one number. A good result: they come back in ten minutes with the number, or say they could not find it. A bad result: three hours later they are still searching, and nobody told them when to give up.'],
    ['h','Hands-on units'],
    ['p','There are seven units, and each builds on the one before. First you draw the loop. Then you add planning, state (a notebook of what has happened), limits and human checkpoints. The last two ask: do you need several agents, and do you need an agent at all?'],
    [
      'unit',
      '13.1',
      'The agent loop: round and round',
      {goal:'Understand the whole cycle: goal, then the model’s decision, then a tool call, then what it sees back, then updated context, then stop or continue.',
       idea:'An agent is a loop, and the loop itself is the design of the system.',
       prove:'Before you write any code, draw the loop. Label every state (where it is now) and every move from one state to the next.',
       build:'Build a toy loop with three steps and a clear record of its state.',
       brk:'Force a tool to fail, and see whether the loop recovers or spirals out of control.',
       artifact:'An Agent State Diagram (a map of every place the agent can be).',
       check:'Where can the loop stop safely?',
       lens:'If you cannot draw the loop, you cannot defend the design.'}
    ],
    [
      'unit',
      '13.2',
      'Planning and tool choice: making its own list',
      {goal:'Understand how a model makes its own plan, and when that is really useful.',
       idea:'An agent gives up some predictability (knowing what comes next) and gets flexibility in return.',
       prove:'Give the agent three tools and 20 tasks, and write down which tool it picks each time.',
       build:'Compare one fixed workflow against the agent on the same tasks.',
       brk:'Include tasks that need no tool at all, and tasks where it is unclear which tool to use.',
       artifact:'An Agent vs Workflow Comparison (the two side by side).',
       check:'Did the extra freedom improve your acceptance measure (the score that says the work is good enough) enough to be worth it?',
       lens:'A workflow that passes the test may be better than an agent that only looks impressive.'}
    ],
    [
      'unit',
      '13.3',
      'State and context management: keeping the notebook tidy',
      {goal:'Keep the state of the task in plain view, and control how much context piles up on the model’s desk.',
       idea:'A loop that runs for a long time can collect old, unneeded or clashing notes on the desk.',
       prove:'Define a state object (one tidy record) that holds the goal, the steps taken, what was observed, the approvals and the status.',
       build:'Save the state between rounds of the loop, and shorten the notes (summarise) only when you really have to.',
       brk:'Add repeated observations and tool output that does not matter, and measure how fast the context grows.',
       artifact:'An Agent State Schema (a form for the notebook), plus a Context Policy (rules for what stays on the desk).',
       check:'Which fields (boxes in the record) can you trust as the final word?',
       lens:'When the state is written down clearly, you can explain an incident afterwards.'}
    ],
    [
      'unit',
      '13.4',
      'Stopping conditions: when to stop',
      {goal:'Put limits on the number of steps, the time, the cost and the kinds of action that are unsafe.',
       idea:'An agent with no stopping conditions is a part of your live product with no upper limit, like a tap that never shuts.',
       prove:'Set a maximum number of steps, a timeout (how long to wait), a cost ceiling (the most you will pay), and a “cannot resolve” state.',
       build:'Log the reason each run stopped (write it in the log book).',
       brk:'Make a loop that never finds an answer, and prove that it still ends.',
       artifact:'An Agent Control Policy (the written rules for the agent’s limits).',
       check:'Can you prove that the system ends, even when things fail?',
       lens:'This is a must for reliability and cost, not just a detail for engineers.'}
    ],
    [
      'unit',
      '13.5',
      'Human checkpoints: a person at the gate',
      {goal:'Bring in a person when something is unclear, when the effect is big, and when a step cannot be undone.',
       idea:'The easier an action is to reverse, and the more sure you are, the more freedom the agent can have.',
       prove:'Mark each tool or action as read-only, a write that can be reversed, or a write that cannot be reversed.',
       build:'Require approval for the last group.',
       brk:'Try to get around the approval through the prompt (the note you give the model) or through a tool input.',
       artifact:'An Agent Approval Matrix (a table of which action needs whose yes).',
       check:'Which actions are never allowed to run on their own?',
       lens:'The business owner should be the one who says where the agent’s freedom ends.'}
    ],
    [
      'unit',
      '13.6',
      'Multi-agent patterns: many helpers',
      {goal:'Understand handoffs (passing the job on), an orchestrator with workers (a boss who gives out jobs), and several agents working together. Do not assume they are better.',
       idea:'Every extra agent adds more state, more waiting, more cost and more places to fail.',
       prove:'Solve a task with one agent first. Then build a version where the work is split between two roles.',
       build:'Compare how many tasks succeed and how hard each version is to run.',
       brk:'Make the two agents give clashing answers, and leave it unclear who owns the result.',
       artifact:'A Multi-Agent Decision Record (a written note of why you chose this).',
       check:'What problem that you can measure did the second agent solve?',
       lens:'Extra complexity must buy you something you can measure.'}
    ],
    [
      'unit',
      '13.7',
      'Agent exit gate: do you need one at all?',
      {goal:'Treat “use an agent” as an idea that needs proof, not as a decision you have already made.',
       idea:'The right design is the simplest one that meets your needs.',
       prove:'Make a 20-task benchmark (a test set) that compares a single direct call, a workflow and an agent.',
       build:'Score each one on quality, tool accuracy, waiting time, cost and safety.',
       brk:'Take away one ability at a time, and see whether the agent still adds value.',
       artifact:'An Agent Architecture Decision Record (a written note of the design you chose and why).',
       check:'Would you still choose an agent if nobody called it “agentic AI”?',
       lens:'That question keeps you from picking a design only because it is the fashion.'}
    ],
    ['h','Score the path as well as the answer'],
    ['p','An agent can reach the right answer by the wrong path. It may call a tool it did not need, call tools in a bad order, or call the same one twice. The final answer hides all of that. So you also score the <strong>trajectory</strong>, the list of steps the agent took, in order, like the route a taxi took.'],
    ['p','For each test sentence, write down the tools you expect, in order, before you run. Then report two scores side by side: how often the answer was right, and how often the path matched. A wrong path with a right answer is a cost for nothing. Each extra step is more tokens, more waiting and one more place to fail.'],
    ['do','Run a small agent and score its path',[
      ['p','Press Run on the cell (one box of code). At each step the model picks the next tool. It has a limit of three steps and an exit for “cannot decide”. The cell scores four sentences. Your capstone uses twenty.'],
      ['code','import re\n\nMODEL = "meta/llama-3.1-8b-instruct"\nCASES = [\n    ("Hi, I am Rahul Verma. My mobile number is 9876543210.", {"MOBILE", "NAME"}, ["pattern_checker", "name_finder"]),\n    ("mera pan card ABCPJ1234K hai, iska photo kal bhej dunga", {"PAN"}, ["pattern_checker"]),\n    ("What documents do I need to renew my driving licence?", set(), ["pattern_checker"]),\n    ("My name is Neha. My mobile is 9123456780.", {"MOBILE", "NAME"}, ["pattern_checker", "name_finder"]),\n]\nPATTERNS = {"PAN": r"\\b[A-Z]{5}[0-9]{4}[A-Z]\\b", "MOBILE": r"(?<![0-9])[6-9][0-9]{9}(?![0-9])"}\n\ndef ask(prompt, temperature=0):\n    r = client.chat.completions.create(model=MODEL, temperature=temperature,\n                                       messages=[{"role": "user", "content": prompt}])\n    return r.choices[0].message.content\n\ndef pattern_checker(text):\n    return {kind for kind, rx in PATTERNS.items() if re.search(rx, text)}\n\ndef name_finder(text):\n    reply = ask("Does this message contain a person\'s name? Answer yes or no.\\n" + text)\n    return {"NAME"} if reply.strip().lower().startswith("yes") else set()\n\nTOOLS = {"pattern_checker": pattern_checker, "name_finder": name_finder}\n\ndef run_agent(text, max_steps=3):\n    found, trace = set(), []\n    for step in range(max_steps):\n        prompt = (f"Message: {text}\\nTools used so far: {trace}\\n"\n                  "Pick the next tool. Reply with one word: pattern_checker, name_finder or done.")\n        choice = ask(prompt).strip().lower()\n        if choice == "done":\n            return found, trace, "done"\n        if choice not in TOOLS or choice in trace:\n            return found, trace, "cannot decide"\n        trace.append(choice)\n        found |= TOOLS[choice](text)\n    return found, trace, "step limit"\n\nanswer_ok = path_ok = 0\nfor text, want_found, want_trace in CASES:\n    found, trace, why = run_agent(text)\n    a, p = found == want_found, trace == want_trace\n    answer_ok += a\n    path_ok += p\n    print("answer", "right" if a else "wrong", "| path", "right" if p else "wrong", "|", trace, "|", why)\nprint(f"final answer correct: {answer_ok}/{len(CASES)}   trajectory correct: {path_ok}/{len(CASES)}")'],
      ['x','Each line shows two scores and the list of tools used. A small model often gets the answer right by a longer path, or stops with “cannot decide”. Your counts will differ from anyone else’s. The last line is the pair to compare: final answer correct next to trajectory correct. If the second number is lower, the agent is costing you steps it did not need.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','This cell has everything it needs inside it, including the model name, so run the whole cell. The key (your secret password for the model) and the connection come from the warm-up that runs before your first cell.','An authentication error, or the number 401 (your key was not accepted)','Your key did not reach the code. Check the name you saved it under on the <a href="#/setup">Setup</a> page, capital letters included.','Every line says cannot decide','The model did not answer with one of the three allowed words. That is the exit working. Read the reply, and make the prompt stricter or try the other model on the Setup page.']
      ]
    ]],
    ['h','How much freedom to give'],
    ['p','Choose one of four autonomy levels (how much it may do alone) for each action, and write it next to the tool in your approval matrix.'],
    ['l',['<strong>Suggests.</strong> The agent proposes an action and a person does it.','<strong>Acts with approval.</strong> The agent acts only after a person says yes.','<strong>Acts and reports.</strong> The agent acts, then tells a person what it did, so it can be undone.','<strong>Acts alone.</strong> The agent acts and nobody checks. Keep this for actions that only read, or that are easy to undo.']],
    ['p','In job posts and meetings you will hear the names LangChain and LangGraph. They are libraries (ready-made code someone else wrote, like a recipe book you borrow) that people use to build loops like the one above. You do not need either for this course. Before you speak about one, look up what it does and what it hides.'],
    ['h','Agent failures are control failures'],
    ['p','After the units, a pattern shows up. When an agent goes wrong, it is rarely because the model suddenly got worse. It is because nothing stopped it, like a car with no brakes.'],
    ['key','Most agent failures are control problems. The model did not get worse. It was given unlimited chances to be wrong.'],
    ['q','I406'],
    ['h','Agent patterns: common shapes'],
    ['p','Agents and workflows come in a few common shapes. Each row of the table pairs a pattern with the time it fits and the main way it goes wrong. Use it to choose, not to collect patterns.'],
    [
      'tb',
      ['Pattern','Use it when','Main risk'],
      [
        ['Sequential workflow (one step after another)','The steps are known','Stiff when the problem changes'],
        ['Routing (a traffic cop)','One of several special paths fits','The router picks wrong'],
        ['Parallel (side by side)','The small jobs really do not depend on each other','Coordinating them and putting the results together'],
        ['Handoff (pass the job on)','A specialist should take over','Context gets lost, and nobody is sure who is in charge'],
        ['Orchestrator-worker (a boss and helpers)','The plan breaks into small jobs','Cost, loops, and a messy state']
      ]
    ],
    ['key','Start with one model and a short list of tools. Add a second agent only when you have measured something the simpler version cannot do. Extra complexity is a cost, not a prize.'],
    ['p','Now it is time to put your agent up against the workflow you already built.'],
    [
      'try',
      {id:'ch26-compare',
       mins:6,
       min:60,
       rows:4,
       task:'Run the twenty tasks from your Chapter 25 workflow through the agent. Count how many it got right, how many tool calls it made, and what it cost.',
       ph:'Correct: … Tool calls: … Cost: … Compared with the workflow: …',
       after:'If the agent is not clearly better on a number you care about, the workflow wins. That is a fair result to bring to a review.'}
    ],
    ['h','Summary'],
    ['p','Here is what to take away. An agent is a loop, and a loop needs limits: a step budget, a timeout, a cost ceiling and a place where a person steps in. Most failures come from missing control. And a second agent, or even a first one, has to earn its place with numbers.'],
    ['p','Next, Chapter 27 looks at the standards for connecting tools and agents to the things they use, like one plug shape that fits every socket.']
  ],
  capstone:{
    title:'Test a fixed workflow against an agent',
    brief:'You can build the rule-keeper as a fixed set of steps, or as an agent that picks its own steps. In this chapter you learned to draw the agent loop with its stopping conditions, that most agent failures are control problems and not a lack of intelligence, and when to add a second agent and when not to. Now you build the agent. Then you test whether it beats the fixed workflow from Chapter 25.',
    where:'Use your test harness (your test set-up) from Chapter 21 and add to it in code. Write your recommendation in the notes box below.',
    steps:[
      'Give the agent exactly two tools: the pattern checker and the model-based finder. Write an explicit list of what it may use, and nothing else.',
      'Set its limits: the most steps it may take, a time limit, and an exit for “cannot decide” that sends the sentence to a person.',
      'Run the same twenty sentences through the agent and through the fixed workflow from Chapter 25.',
      'For each run, write down whether it chose the right tool, how many calls it made, how long it took and what it cost.',
      'Before you run, write the tools you expect for each sentence, in order. Then report how often the agent’s path matched, next to how often its answer was right.',
      'Write one paragraph that recommends one of the two, with the numbers. Name the number that decided it.'
    ],
    done:[
      'An agent with two tools and written limits.',
      'The same twenty sentences run through both systems.',
      'Four numbers for each system: tool choice, calls, time and cost.',
      'For the agent, the path score (trajectory) next to the answer score.',
      'A recommendation that names the number that decided it.'
    ]
  }
},

/* --------------------------------------------------------------- 27 / bk 14 */
{
  id:'ch14p', num:27, part:5, curriculumTier:'core', phase:3, prerequisites:['ch12t','ch13a'], nextUnits:['ch15mm'], minutes:45, labs:[],
  title:'MCP and interoperability: standard connections to tools',
  concept:'MCP is a standard way to connect AI apps to tools and data. Think of a plug socket: any plug fits. You will see how it works. You will see what a standard does not make safe. You will sort tools by what they may change.',
  plan:{
    first:'Use a real implementation or a local mock (a pretend copy on your own computer) to find one tool or resource and call it. Then read the real messages that go back and forth.',
    build:'Offer two tools and one resource (a file or record the model can read). Test how they are found and called. See how errors show up. See how consent (asking the person first) and authorisation (checking who is allowed) work.',
    brk:'Try to get in where you are not allowed. Send arguments (the details you hand a tool) that are badly formed. Use resource content that has been poisoned (a bad note hidden inside). Give permissions wider than the task needs.',
    artifact:'A trust-boundary diagram (a map of the line where you stop trusting what comes in) and an authorisation matrix (a table of who may do what).',
    gate:'Explain what interoperability (different tools plugging into each other) makes standard, and what it leaves exactly as dangerous as before.'
  },
  needs:[
    ['A tool has a typed contract (a written promise of what goes in and what comes out)','From Chapter 25. MCP makes the way that contract is published the same everywhere.',25],
    ['Permissions are checked on the server (the computer that owns the tool)','Also from Chapter 25. It is still true when the call travels through a protocol.',25]
  ],
  words:[
    ["MCP",'A plug-socket rule for AI. It says how a host, a client and a server offer tools, resources and prompts, and how they call them. It is a protocol (an agreed way to talk), not a framework for building agents.'],
    ["Trust boundary",'A line on the map. Past it, what comes in is no longer yours, so you must check it, like a guard at a gate.'],
    ["Least privilege",'Give a tool only the permissions the task needs, and not one more. Then a tool that is never needed can never be misused, like a spare key that was never made.'],
    ["Capability negotiation",'Before any work starts, the two sides say what each can do, like two people agreeing who brings the tea and who brings the snacks.']
  ],
  takeaway:[
    'Draw the flow of host, client, server and resource, and mark where consent (asking the person first) and authorisation (checking who is allowed) happen.',
    'Explain why a standard interface (the plug socket) to an unsafe tool is still unsafe.',
    'Classify tools (put each in a group) by what they are allowed to change.'
  ],
  story:[
    ['c','Before you start','You do not need any new setup to follow the ideas. The hands-on units show a small example that really runs.'],
    ['c','On your route','Do units 14.3 and 14.4. Then read the printed messages below. This time, only read the other units.'],
    ['p','In the last two chapters you gave a model tools. Then you let an agent (a helper that picks tools by itself) choose among them. You joined every tool by hand. Now you will see a standard way to join them. You will also see what the standard protects you from, and what it does not.'],
    ['p','The standard is called <strong>MCP</strong>, short for Model Context Protocol. It is one shared way to connect AI apps to tools and data sources. You will probably never build one yourself. You do need to know what it covers and what it leaves out.'],
    ['p','Think of a plug socket. It is a standard, so any appliance fits the wall. But the standard does not promise the appliance is safe. It does not decide who may switch it on. MCP is the same kind of thing.'],
    ['c','Note','The specification (the official rulebook) names a host, a client and a server. It gives them standard building blocks: resources, prompts and tools. It also talks about security and user consent in plain words, and it is worth reading. Agent-to-agent protocols are made separately. They are for agents that hand tasks to each other, not for a model that calls a tool.'],
    ['h','Hands-on units'],
    ['p','There are five units. The first draws the whole picture. The next three build a tiny example, add consent and authorisation, and then test it against attacks. The last one looks at how agents talk to other agents.'],
    [
      'unit',
      '14.1',
      'MCP mental model',
      {goal:'Explain the host (the app you use), the client (its messenger), the server (the one holding the tools), tools, resources, prompts and capability negotiation.',
       idea:'A protocol is an agreed way for two sides to talk. It does not take away the need to check who is allowed. It does not take away the need for a safe design.',
       prove:'Draw the path from the host to the client to the server, and then to the tool or resource.',
       build:'Look closely at one real or local exchange of messages, like reading a chat between two people.',
       brk:'Ask what happens when a server says it offers a power that the user is not allowed to use.',
       artifact:'An MCP Trust-Boundary Diagram.',
       check:'Where does the user\'s identity (who they are) live, and where is authorisation checked?',
       lens:'Once you know the protocol, you can question anyone who says “MCP makes it secure”.'}
    ],
    [
      'unit',
      '14.2',
      'Expose a tiny capability',
      {goal:'Build a tiny provider on your own computer that offers one safe tool or resource.',
       idea:'The best way to understand a protocol is to open up a small example that really works.',
       prove:'Offer a read-only function (a recipe that only looks, never changes), such as looking up a record on your own computer.',
       build:'Call it from a client that fits, or from a local mock (a pretend copy).',
       brk:'Send badly formed arguments (messy details), and make the server send back errors.',
       artifact:'An MCP Mini-Demo repository (an online folder that remembers every change).',
       check:'Can you trace the whole path (follow it step by step): finding the tool, the call, and the reply?',
       lens:'Keep the demo read-only. Then your eyes stay on how the protocol works.'}
    ],
    [
      'unit',
      '14.3',
      'Consent and authorization',
      {goal:'Keep two things apart: finding out what a tool can do, and being allowed to use it. It is like seeing a locked cupboard and having its key.',
       idea:'If you can see a tool, that does not mean you may use it.',
       prove:'Make an authorisation matrix (a table of who may do what) for read, write and privileged tools (tools with special power).',
       build:'Add a policy check, like a guard at the door, before any tool is called.',
       brk:'Try a call you are not allowed to make, and write down that it was refused.',
       artifact:'An Authorization Matrix, with proof from your tests.',
       check:'Who makes the last call on who is allowed?',
       lens:'The server checks who is allowed. That check must never depend on the model following instructions.'}
    ],
    [
      'unit',
      '14.4',
      'MCP security and prompt injection',
      {goal:'Treat resources and tool outputs as content you cannot trust, like a note from a stranger.',
       idea:'When more things can plug in, there are also more places where trust has to stop.',
       prove:'Hide a bad instruction inside a resource. Then test how the client\'s workflow handles it.',
       build:'Keep data apart from the instructions that control the system. Make the tool rules really hold.',
       brk:'Try an indirect injection: the bad instruction comes hidden inside a resource that was fetched, like a note slipped inside a borrowed book.',
       artifact:'An MCP Security Test Sheet.',
       check:'Can content you do not trust make something happen that needs special permission?',
       lens:'This links straight to the security chapter.'}
    ],
    [
      'unit',
      '14.5',
      'Agent-to-agent interoperability',
      {goal:'Understand the ideas behind A2A-style protocols (ways for agents to talk to agents): identity, delegation (handing a job over), swapping tasks, trust and observability (being able to see what happened).',
       idea:'Protocols between agents solve the problem of joining them. They do not remove the basic risks of letting agents act on their own.',
       prove:'Draw an exchange between two agents. Mark the lines of identity and delegation.',
       build:'Decide which data and which powers may cross the line.',
       brk:'Make a handoff that is bad or confused, and name the control that should stop it.',
       artifact:'An Agent Interoperability Trust Model.',
       check:'What does the agent that receives the job really trust?',
       lens:'Keep your eyes on design and governance (the rules for who decides), not on tiny protocol details.'}
    ],
    ['h','Read one real exchange'],
    ['p','You do not need a real MCP server to understand this. The code cell (a box of code) below is a toy. A few lines of Python answer in the same message shapes. The pattern checker is offered as a tool. Press Run and read the six lines it prints. Real messages carry a few more fields. To run a real server, use the free Introduction to MCP course in the plan.'],
    ['do','Mark where consent sits',[
      ['code','import json, re\n\ndef server(msg):\n    if msg["method"] == "initialize":\n        return {"serverInfo": {"name": "pattern-checker"}}\n    if msg["method"] == "tools/list":\n        return {"tools": [{"name": "find_ids", "description": "Find Indian ID numbers in text"}]}\n    if msg["method"] == "tools/call":\n        text = msg["params"]["arguments"]["text"]\n        found = re.findall(r"[A-Z]{5}[0-9]{4}[A-Z]", text)\n        return {"content": [{"type": "text", "text": "PAN: " + ", ".join(found)}]}\n\ndef send(id, method, params=None):\n    msg = {"jsonrpc": "2.0", "id": id, "method": method}\n    if params:\n        msg["params"] = params\n    print("client -> server:", json.dumps(msg))\n    print("server -> client:", json.dumps({"jsonrpc": "2.0", "id": id, "result": server(msg)}))\n\nsend(1, "initialize", {"clientInfo": {"name": "demo-client"}})\nsend(2, "tools/list")\nsend(3, "tools/call", {"name": "find_ids", "arguments": {"text": "mera pan card ABCPJ1234K hai"}})'],
      ['n',['Mark the message where the client first learns what the server can do.','Mark the message where the user\'s text leaves their screen and something is done with it.','Write one line. Who must say yes before that message is sent? What happens if nobody does?']],
      ['x','The tools/list reply is where the client learns what exists. The tools/call message is the one to mark: the user\'s own PAN is sent out. Consent belongs just before it, in the client. The server cannot give it to itself. The protocol carried all six messages and asked nobody.']
    ]],
    ['h','A standard does not make a tool safe'],
    ['p','The units lead to one big lesson. It is easy to forget when a standard looks neat and official.'],
    ['key','A standard tool interface (the plug socket) does not make an unsafe tool safe. The protocol carries the call. It does not decide if the call should be allowed.'],
    ['q','I407'],
    ['p','Many people mix this up. MCP is a <strong>protocol</strong>, not a framework that builds agents. It makes the connection standard. What gets connected, and who may use it, is still your design.'],
    ['p','Agent-to-agent protocols add one more layer. They let agents find each other and swap tasks and results. For product decisions, look at identity, delegation, trust, permissions, error handling and observability. Do not look at the fields inside each message.'],
    ['p','Now let us make this useful. You will take tools from a system you already know. You will sort them into groups by what each one may change.'],
    [
      'try',
      {id:'ch27-classify',
       mins:6,
       min:60,
       rows:4,
       task:'Take five tools from a system you know. Put each in one class: read-only, reversible write (a change you can undo), irreversible write (a change you cannot undo), privileged (special power) or prohibited (not allowed at all).',
       ph:'Tool — class — why',
       after:'The line between reversible and irreversible is where a person should confirm. If a tool was hard to place, give it a smaller scope (a smaller area of power).'}
    ],
    ['h','Summary'],
    ['p','To sum up. MCP is a standard way to connect tools, just as a plug socket is a standard. It makes tools easy to plug in. It does not make an unsafe tool safe. Consent, authorisation and trust boundaries are still your job.'],
    ['p','Next, Chapter 28 changes the kind of input: from text to documents, images and audio. The same context and evaluation design stay.']
  ],
  capstone:{
    title:'Write the tool access policy',
    brief:'The gateway and the browser extension may read forms, change text, call outside models and write logs. A standard plug makes tools easy to connect. It does not make an unsafe tool safe. You learned to mark where consent and authorisation happen, and to group tools by what they may change. Now you write the access policy (the rulebook of who may use what) for the gateway and the extension.',
    where:'You only write. The policy is what you hand in. Sorting the tools is the thinking part. You need no new code.',
    steps:[
      'List every tool or action the gateway or the browser extension would need: read a form field, read a request body, write to a log, call an outside model, replace text, block a request, send an alert.',
      'Put each one in a class (a group): read only; a change that can be undone; a change that cannot be undone; special permission needed; or forbidden.',
      'For each class, write what authorisation (permission check) it needs. Write whether a person must say yes first.',
      'Draw a table. Put the roles down the side: the developer, the compliance reviewer, the end user and the tool itself. Put the classes across the top. Mark who may do what.',
      'Draw a diagram and mark where trust stops. Say which part makes that rule happen.',
      'Write down what is recorded when someone does something that cannot be undone, like a receipt kept for a sale.'
    ],
    done:[
      'Every tool put into one of the five classes.',
      'A table of roles against classes.',
      'A diagram that shows the trust boundary and the part that holds the line.',
      'A note on the record kept for an action that cannot be undone.'
    ]
  }
},

/* --------------------------------------------------------------- 28 / bk 15 */
{
  id:'ch15mm', num:28, part:5, curriculumTier:'core', phase:3, prerequisites:['ch16','ch6','ch14p'], nextUnits:['ch16e'], minutes:50, labs:[],
  title:'Multimodal AI: documents, images and voice',
  concept:'The input can be a PDF, an image or audio. The design stays the same: context (the model\'s desk), tools, retrieval (an open-book exam) and evaluation (tests with an answer key). What changes is what counts as evidence and how you trace it. You will see what text extraction loses. You will design a voice pipeline.',
  plan:{
    first:'Feed in one PDF with a table, one image, and one short audio clip. Guess first what plain text extraction (pulling out only the words) will lose.',
    build:'Pull out structured facts (facts in neat boxes) and note where each one came from. If the source is audio, note the timestamps (the minute and second).',
    brk:'Try a poor scan, a hard table, speakers who talk over each other, and input that mixes languages.',
    artifact:'A multimodal pipeline (a line of steps for text, pictures and sound) and an evaluation set (a set of test questions with an answer key) for each kind of input.',
    gate:'Say where knowing the source and having a person check are a must, not just nice to have.'
  },
  needs:[
    ['Scanned documents need pictures, not just text','Chapter 16 covered this for pictures of text.',16],
    ['The answer key has to come from somewhere','From Chapter 6. For a table or a picture, it comes from a person.',6]
  ],
  words:[
    ["OCR",'Reading the text out of a picture of text, like reading a photo of a notice board. A poor scan limits how well it can read, and OCR fails quietly when the input is bad.'],
    ["Diarization",'Working out who spoke which part of a recording. It looks like a small technical detail, but it acts like a privacy decision.'],
    ["Document understanding",'Getting the meaning that comes from the layout, such as tables, headings and where things sit. It is not only the words.'],
    ["Media provenance",'Knowing where a photo, a recording or a video came from, and what has been done to it since, like a receipt trail.']
  ],
  takeaway:[
    'Name three things that plain-text extraction (pulling out only the words) loses from a real PDF.',
    'Draw a voice pipeline (a line of steps for sound). Mark the steps that add waiting time before the reply.',
    'Say where the answer key (the teacher\'s list of right answers) for a multimodal question must come from.'
  ],
  story:[
    ['c','Before you start','Find one real PDF with a table in it. Find one short audio recording that you are allowed to use.'],
    ['c','On your route','Do units 15.3 and 15.4. Then try the spoken-numbers cell (the box of code) below. This time, only read the other units.'],
    ['p','Until now, almost everything in this part was text. Now the input changes. Real work comes as PDFs, photos of forms and voice messages. See what happens to the same ideas when the input is not plain text. See where things quietly go missing.'],
    ['p','Start with a PDF. It holds text, layout, tables, pictures and hidden metadata (extra facts about the file). If you pull out only the words, most of that is squashed flat. Nothing tells you. No error appears.'],
    ['p','Here is an everyday picture. Photograph a railway timetable. Read only the words, in order, to someone on the phone. They hear every station name. They get no useful departure times. The meaning sat in the columns, and the columns did not survive.'],
    ['h','Hands-on units'],
    ['p','There are five units. The first looks at documents, the second at images, and the third at voice. The fourth looks at speed. The fifth shows how to test all of it the right way.'],
    [
      'unit',
      '15.1',
      'Document understanding',
      {goal:'Understand why a PDF is a page with a layout, not just a text file. It is like a poster, not a plain list.',
       idea:'Pulling out only the text can lose tables, reading order, images, headers, and the meaning that comes from where things sit on the page.',
       prove:'Put the pulled-out text next to the page as it looks on screen. Compare the two.',
       build:'Write down what information was lost. Then design a fallback (a plan B).',
       brk:'Use a scanned page and a page with a lot of tables.',
       artifact:'A Document Understanding Gap Report.',
       check:'Which questions cannot be answered from plain text alone?',
       lens:'This is a problem with the quality of retrieval (finding the right page) before it is ever a problem with the LLM (the parrot that has read a library).'}
    ],
    [
      'unit',
      '15.2',
      'Vision and image evidence',
      {goal:'Use evidence from images. Keep a clear record of where it came from. Have a way to test it.',
       idea:'Vision models (models that look at pictures) can read what an image shows. But their reading is still a likely guess, not a sure thing.',
       prove:'Ask five questions about an image or a table. Mark the part of the image that is the evidence.',
       build:'Write down the source image, the question, the answer, and whether a person checked it.',
       brk:'Use images that are small and fuzzy or hard to see.',
       artifact:'A Vision Evaluation Set.',
       check:'Which answers need a person to check them?',
       lens:'Any claim about what an image shows should lead back to the source image, like a footnote.'}
    ],
    [
      'unit',
      '15.3',
      'Audio and speech pipelines',
      {goal:'Understand the whole path: capture (record the sound), then ASR (speech turned into text), then clean up the text, then extraction (pull out the facts), then confirmation, then action.',
       idea:'Voice AI is a pipeline: a chain with several places where it can break. It is not one single call to a model.',
       prove:'Use a short audio sample. Check how good the transcript (the typed-out speech) is.',
       build:'Pull the tasks out of the transcript into structured JSON (a form written as labels and values).',
       brk:'Test accents, people talking over each other, names, and content that mixes languages.',
       artifact:'A Voice Pipeline Spec, plus an audio eval set (a set of tests) of 10 cases.',
       check:'Where can a mistake first get into the pipeline?',
       lens:'When you automate meetings and tasks, confirmation and privacy are part of the product.'}
    ],
    [
      'unit',
      '15.4',
      'Streaming and latency',
      {goal:'Understand why voice and other interactive systems care about partial results and about the waiting time before the first reply. It is like the chai-wala saying "two minutes" while he makes your tea.',
       idea:'Users feel waiting differently from servers. Streaming (words arriving as they are made) can make a system feel faster. The total work stays the same.',
       prove:'Measure the waiting time at each stage for one sample request.',
       build:'Keep the waiting time for capture, transcription, the model and the action apart, each on its own line.',
       brk:'Add an artificial (made-up) delay to one stage. See what it does to the user\'s experience.',
       artifact:'A Latency Budget for the Multimodal Flow.',
       check:'Which waiting time will the user really notice?',
       lens:'Do not speed up the fastest part while the user is waiting on a different part.'}
    ],
    [
      'unit',
      '15.5',
      'Multimodal RAG evaluation',
      {goal:'Design tests where the answer depends on evidence from one kind of input.',
       idea:'An evaluation set made only of text can hide the failures that happen with images and audio.',
       prove:'Make five text-only cases, five picture or table cases, and five audio cases.',
       build:'Score three things: is the evidence right, is the extraction right, and did the whole task work?',
       brk:'Add a poor scan, noisy audio and a case in more than one language.',
       artifact:'An Evaluation Matrix (a table of scores) for each kind of input.',
       check:'Which failure belongs to extraction, and which belongs to reasoning (the model\'s thinking)?',
       lens:'Your measures should show which part is broken, not only that the last answer was wrong. Think of a doctor who finds which organ hurts.'}
    ],
    ['h','Voice is a pipeline'],
    ['p','Voice is the clearest case of something with many stages. When you use it, it feels like one thing. It is not.'],
    ['key','A voice system is a pipeline, not one model. Each stage adds waiting time. Each stage is a place where the meaning can change.'],
    ['q','I408'],
    ['p','Each stage has a name. Reading text from an image is OCR. Turning speech into text is transcription. Working out who said what is speaker attribution. Meaning can be lost at each step, so each step needs its own check.'],
    ['h','Test how spoken numbers are heard'],
    ['p','Indian speech is often a mix of Hindi and English. A phone number is exactly where that mix breaks. This test gives you a real number for the capstone. Check the free tiers and languages of any speech tool yourself. Do not trust a figure from this page. Practice question 13 in the plan asks which kind of speech model you would choose.'],
    ['do','Count the digits that were heard',[
      ['p','Use voice typing on your phone, or any free speech-to-text. Say five made-up sentences: two in Hindi, two in Hinglish and one in English. Put the made-up number 9876543210 in each one. Paste what was typed into the cell (the box of code), then press Run.'],
      ['code','import re\n\nSPOKEN = "9876543210"   # the made-up number you read aloud in every sentence\nheard = {\n    ("English", 1): "my mobile number is 9876543210",\n    ("Hindi", 1): "मेरा मोबाइल नंबर 9876543210 है",\n    ("Hinglish", 1): "mera mobile number 98765 4321 hai",\n    ("Hinglish", 2): "mera number nau aath saat chhah paanch char teen do ek shunya hai",\n}   # replace these made-up transcripts with what your tool really heard\n\nright = {}\nfor (language, n), text in heard.items():\n    digits = re.sub(r"[^0-9]", "", text)\n    matched = sum(a == b for a, b in zip(digits, SPOKEN))\n    right[language] = right.get(language, 0) + matched\n    print(language, n, "->", digits or "no digits", "|", matched, "of 10 digits right")\nfor language, total in right.items():\n    print(language, "total:", total)'],
      ['x','With the made-up transcripts, English and Hindi score 10 of 10, and the Hinglish lines score 9 and 0. The last one wrote the number as words, so a rule that looks only for digits sees nothing. With your own transcripts, expect a different pattern. Add the five sentences, and what should have been found, as new rows in your answer key.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','This cell sets up everything it uses. So run the whole cell, not a part of it.','A line says no digits','The tool wrote the number as words, such as nau aath saat. That is a real miss, not a mistake in the cell. Count it as zero digits right.','The Hindi line looks broken','Paste the transcript between the quotation marks and keep the quotation marks. Hindi letters are fine inside them.']
      ]
    ]],
    ['p','Try speaker attribution yourself. It raises questions that are not only technical.'],
    [
      'try',
      {id:'ch28-attrib',
       mins:6,
       min:60,
       rows:4,
       task:'For a meeting assistant: who said what? How long is the transcript kept? What happens when two people talk at once?',
       ph:'Attribution (who said it) … retention (how long it is kept) … overlapping speech (two voices at once) …',
       after:'Speaker attribution looks like a small technical detail, but it acts like a privacy decision.'}
    ],
    ['h','Summary'],
    ['p','Let us pull it together. A PDF is a page with layout. So if you pull out only the words, things are lost without any warning.'],
    ['p','An image gives you likely readings, not sure ones, so you keep track of the source. A voice system is a pipeline, and each stage needs its own check. For a table or an image, the answer key comes from a person.'],
    ['p','Next, Chapter 29 builds a step-by-step way to prove whether all these parts work.']
  ],
  capstone:{
    title:'Specify how the tool handles images and voice',
    brief:'Personal details come as typed text, as photos of cards, and as spoken words. You learned what plain-text extraction loses from a real document. You learned how a voice pipeline is put together. You learned where the answer key for a multimodal question must come from. Now you write the specification (a plan that says exactly what to do) for how Bharat Privacy Guard handles scanned IDs and sentences typed by voice.',
    where:'You only write. It is a specification. You need no code.',
    steps:[
      'Name three things lost when the words are just pulled out of a scanned ID card or a PDF. For example: where the text sits on the page, a stamp, and a handwritten note.',
      'Draw the path of a voice message: speech turned into text, then the tool, then the safe text. Mark the steps that add waiting time.',
      'Write the privacy boundary (the line around what you may record). Whose voice is recorded? Where is it recorded? What notice does the person get?',
      'Write how long the words typed from speech are kept, and how they are deleted.',
      'Write what happens when the speech-to-text is not sure of a number, for example a digit it heard two ways. Write the rule.',
      'Say where the answer key for voice and images comes from. Then write three made-up sentences, typed by voice with no punctuation, to add to it.',
      'Write the measures you will track (the numbers you will watch). Include one for how often a spoken number is heard right.'
    ],
    done:[
      'Three things lost when only the words are pulled out.',
      'A voice path with the waiting steps marked.',
      'The privacy boundary, and the rule for how long to keep the text and how to delete it.',
      'A rule for numbers it is unsure of, three new answer-key rows, and the measures to track.'
    ]
  }
}
,

/* --------------------------------------------------------------- 29 / bk 16 */
{
  id:'ch16e', num:29, part:5, curriculumTier:'core', phase:4, prerequisites:['ch6','ch14','ch145'], nextUnits:['ch17o','ch19pm','ch20d','b3'], minutes:60, labs:['judge'],
  title:'Evaluation engineering: test sets and release gates',
  concept:'In Chapter 6 you learned to measure. Now you turn that measuring into a release process. It has a test set with a version number, scores at several levels, and a gate that decides if a change goes live.',
  plan:{
    first:'Before you improve anything, write twenty tests. Include normal questions, reworded ones, unclear ones, ones with no answer, other languages, tricky attacks and cases where the tool must be used.',
    build:'Make the checks run by themselves for retrieval (finding the right page), structure (the form\'s boxes), tool use and the final answer. Use a model as judge (a second student marking homework) only where a simple exact check cannot do the job.',
    brk:'Change the prompt, then the model, then the index, one at a time. Run the regression test (the old cases that must still pass) each time. Then compare the judge\'s labels with human labels on a small sample.',
    artifact:'A working evaluation harness (code that runs your tests) and a release gate (the pass mark before going live).',
    gate:'No change goes live because a demo looked better. It goes live because it passed the gate, like a student who passed the exam.'
  },
  needs:[
    ['Answer keys, recall and precision','Chapter 6 built the measuring. This chapter makes it bigger.',6],
    ['A model can mark many answers fast','Chapter 14 introduced the judge, and the ways it can lean unfairly (bias).',14],
    ['You get better by reading the wrong answers one by one','You learned this in Chapter 14.5. Automation does not take its place.',14.5]
  ],
  words:[
    ["Golden set",'The cases you chose with care, with a version number. Every change is measured against them, like the same exam paper for every student.'],
    ["LLM-as-judge",'Using a model to score another model\'s output. It is a marker, not an all-knowing oracle. So find out how often it disagrees with human labels.'],
    ["Regression test",'A case that passed before and must still pass now. If it breaks, the change made something worse.'],
    ["Release gate",'The pass marks a change must reach before it goes live, however good the demo looked, like the railing at a level crossing.']
  ],
  takeaway:[
    'Build a test set with a version number that still works after you change a prompt, a model or an index (the search shelf).',
    'Score the system at several levels, so one good final number cannot hide a part that is broken.',
    'Say where an LLM judge (a model that marks answers) is fine to use and where it is not.'
  ],
  story:[
    ['c','Before you start','Keep your answer key from Chapter 6, your judge from Chapter 14 and your experiment harness (the code that runs your tests) ready.'],
    ['c','On your route','Do units 16.1 and 16.6. Then run the gate cell (the box of code) below. This time, only read the other units.'],
    ['p','In Chapter 6 you made an answer key and learned to score against it. That was measuring. Now the whole team makes it a habit. You also add a rule that decides if a change goes live.'],
    ['p','You will build three things. One is a fixed set of test questions. One is a single steady way to mark them. One is a pass mark agreed in advance. After that, "the demo looked better" is no longer an argument.'],
    ['p','Think of a school. It does not judge a student on one good answer. Everyone sits the same paper. It is marked the same way. The pass mark is agreed first. An AI feature needs the same fairness.'],
    ['key','Every AI feature needs a test set, and the test set needs a version number. If you cannot run the test again after a change, it is only a story.'],
    ['h','Hands-on units'],
    ['p','The seven units below take you from the test set to the final release decision. Each one builds on the one before.'],
    [
      'unit',
      '16.1',
      'Golden datasets',
      {goal:'Make a set of cases with a version number. Include normal cases, edge cases (odd, rare cases) and cases where the system has failed.',
       idea:'A golden dataset is the team\'s memory of what "good" means for your app.',
       prove:'Make at least 30 cases. Cover the normal path, reworded questions, unclear questions, questions with no answer, other languages, attacks and cases that need a tool.',
       build:'For each case, write down the behaviour you expect. Where you can, also write down the IDs of the evidence it should use.',
       brk:'Take away one group of cases. See which regressions (things that got worse) you can no longer notice.',
       artifact:'Golden Dataset v1.0.',
       check:'Does the set show the risks real users face, or only the easy demos?',
       lens:'The dataset becomes the contract (the written promise) for product quality.'}
    ],
    [
      'unit',
      '16.2',
      'Error taxonomy',
      {goal:'Sort failures into kinds, like sorting complaints into piles. Then you fix the causes, not just the symptoms.',
       idea:'"Wrong answer" is too broad. It does not tell engineers what to fix.',
       prove:'Make the categories. Start with retrieval miss (the right page was not found), wrong chunk and stale data (old data). Add instruction failure and schema failure (the form was not filled right). Add tool failure and authorization failure. Last, add hallucination (confident make-believe).',
       build:'Put one of these category labels on 20 real failures.',
       brk:'Ask two people to label the same failures. Then see where they disagree.',
       artifact:'Error Taxonomy (a sorted list of mistake kinds) plus labelled examples.',
       check:'Which categories lead to a clear next step?',
       lens:'Good categories change what the team does next.'}
    ],
    [
      'unit',
      '16.3',
      'Retrieval metrics',
      {goal:'Measure Recall@k, Precision@k and similar ranking measures. Recall asks how many of the right pages your net caught. Precision asks how much of the net is really fish. Use clear labels for what counts as relevant.',
       idea:'A metric (a number you watch) tells you something only when "relevant" is clearly defined.',
       prove:'For each query, mark which chunks (index cards) are relevant. Then work out Recall@k and Precision@k.',
       build:'Compare what you get at k=1, 3, 5 and 10.',
       brk:'Add some distractor chunks. They look related but are not. Watch how the metrics change.',
       artifact:'Retrieval Evaluation Notebook.',
       check:'What exactly counts as relevant?',
       lens:'Never report a retrieval metric without saying how you decided what is relevant.'}
    ],
    [
      'unit',
      '16.4',
      'Generation and task success',
      {goal:'Check if the final answer is correct, is based on the evidence (grounded), is complete, and is useful for the task.',
       idea:'A system can score well on retrieval and still give a bad answer.',
       prove:'Write yes-or-no or graded rules for when an answer counts as correct and grounded.',
       build:'Score a fixed sample, using labels that people gave.',
       brk:'Include answers that are only partly right, and answers that sound too sure of themselves.',
       artifact:'Generation Rubric (a marking guide) plus a labelled sample.',
       check:'Can two reviewers use the rubric and reach the same result?',
       lens:'Acceptance criteria (the rules for "good enough") should be something you can see, not just "it sounds good".'}
    ],
    [
      'unit',
      '16.5',
      'LLM-as-judge',
      {goal:'Use a model as judge where an exact check is not enough. Then check the judge against human labels, like checking the marker against the teacher.',
       idea:'A judge is one more part that can be wrong. So measure how often it agrees with people.',
       prove:'Have a judge score 20 examples for groundedness (is the answer based on the evidence?) or relevance.',
       build:'Compare the judge\'s decisions with the human labels. Work out how often they disagree.',
       brk:'Swap the order of the answers, or make them longer or shorter. See if the judge likes a certain position or length.',
       artifact:'Judge Validation Report.',
       check:'Where does the judge disagree with people, and why?',
       lens:'Never let a judge you have not checked quietly become the one who decides if you release.'}
    ],
    [
      'unit',
      '16.6',
      'Regression and CI gates',
      {goal:'Run the evaluation by itself whenever a prompt, model, index or tool changes.',
       idea:'An AI system can get worse with no error showing, even when the code builds fine.',
       prove:'Make one command that runs the golden set and prints a summary.',
       build:'Set thresholds (lowest allowed numbers). Make the run fail when quality or safety drops below them.',
       brk:'Change a prompt. Check that CI (the automatic checker that runs your tests) catches the regression.',
       artifact:'Automated Evaluation Suite plus Release Gate.',
       check:'What exact condition blocks a release?',
       lens:'This is the AI version of a test suite, for software that does not always behave the same way.'}
    ],
    [
      'unit',
      '16.7',
      'Evaluation release decision',
      {goal:'Bring quality, safety, latency (waiting time) and cost together into one release decision. Hide no trade-off.',
       idea:'Shipping is a decision with several sides. One overall score can hide failures you cannot accept.',
       prove:'Set a quality threshold and a safety threshold. Then set a latency SLO (the response time you promise) and a cost ceiling (the most you will pay). Last, set a rollback trigger (the sign that says go back to the old version).',
       build:'Run a candidate release (a new version waiting for approval) through the gate.',
       brk:'Make a model that gets better on quality but breaks the cost limit or the safety limit.',
       artifact:'Release Decision Record.',
       check:'Which threshold can never be bargained over?',
       lens:'A PM (product manager) owns the plan for the decision, even when engineers build it.'}
    ],
    ['q','I409'],
    ['h','Measure at several levels'],
    ['p','An AI system has several parts, so one score for the whole thing is not enough. The catch is that a smooth-talking model can cover for missing evidence. It does this often enough to look fine in a demo.'],
    ['key','Check several levels at once. A good end-to-end score (for the whole path) can hide a retriever (the page-finder) that is badly broken.'],
    ['p','The table shows six levels. Read down the right-hand column. Each question is one that a release decision needs answered.'],
    [
      'tb',
      ['Layer','Example metric (a number to watch)','The release question it answers'],
      [
        ['Retrieval','Recall@k, Precision@k','Did we fetch the right evidence?'],
        ['Generation','Groundedness, task success','Did the answer use the evidence correctly?'],
        ['Tool use','Tool-selection accuracy','Did it call the right tool?'],
        ['Trajectory','Step-sequence match','Did it reach the answer the right way?'],
        ['Operations','p95 latency, cost per task','Can we afford to run it?'],
        ['Safety','Attack success rate','Can a hostile input break our controls?']
      ]
    ],
    ['p','You will meet many evaluation products. Each one is selling an answer to one of three questions.'],
    ['p','The first is <strong>what do we test on?</strong> The answer is a fixed set you keep, with real cases where you can. The second is <strong>who marks it?</strong> Use an exact check where you can, a person where it matters, and a model where neither can keep up. The third is <strong>what score lets it ship?</strong>'],
    ['h','Run a release gate'],
    ['p','Here is a gate you can run now. Six rows of the answer key sit inside the cell (the box of code). It prints recall and precision for each kind of ID and each kind of writing. Then it prints PASS or FAIL. When your own file is ready, saved as <code>evals/answer-key-v1.csv</code> or a later version, load its rows in place of the list.'],
    ['do','Run the gate on six rows',[
      ['p','Press Run and read the last line first.'],
      ['code','import re\n\nANSWER_KEY = [\n    (1, "English", "Hi, I am Rahul Verma. My mobile number is 9876543210 and my email is rahul.verma@example.com.", {"MOBILE", "EMAIL"}),\n    (2, "Hindi", "मेरा नाम राकेश शर्मा है और मेरा आधार नंबर 4321 5678 9012 है।", {"AADHAAR"}),\n    (3, "Hinglish", "mera naam Rishabh Jain hai, mera mobile number 9876543210 hai", {"MOBILE"}),\n    (4, "Hinglish", "Sir mera aadhaar 4321 5678 9012 hai aur ye number 98xxxxxx12 pe call kar lena", {"AADHAAR", "MOBILE"}),\n    (5, "Hinglish", "mera pan card ABCPJ1234K hai, iska photo kal bhej dunga", {"PAN"}),\n    (9, "English", "What documents do I need to renew my driving licence?", set()),\n]\nPATTERNS = {\n    "PAN": r"\\b[A-Z]{5}[0-9]{4}[A-Z]\\b",\n    "AADHAAR": r"\\b[2-9][0-9]{3} ?[0-9]{4} ?[0-9]{4}\\b",\n    "MOBILE": r"(?<![0-9])[6-9][0-9]{9}(?![0-9])",\n    "EMAIL": r"[\\w.]+@[\\w.]+\\.[a-z]+",\n}\nGATE = {"recall": 0.9, "precision": 0.9}\n\ndef find(text):\n    return {kind for kind, rx in PATTERNS.items() if re.search(rx, text)}\n\ndef rate(found, wanted, missed):\n    recall = found / (found + missed) if found + missed else 1.0\n    precision = found / wanted if wanted else 1.0\n    return recall, precision\n\ndef run_gate():\n    tally = {}\n    for _, script, text, expected in ANSWER_KEY:\n        got = find(text)\n        for kind in expected | got:\n            for group in (kind, script):\n                t = tally.setdefault(group, [0, 0, 0])\n                t[0] += kind in expected and kind in got\n                t[1] += kind in got\n                t[2] += kind in expected and kind not in got\n    passed = True\n    for group, (hit, flagged, missed) in sorted(tally.items()):\n        recall, precision = rate(hit, flagged, missed)\n        ok = recall >= GATE["recall"] and precision >= GATE["precision"]\n        passed = passed and ok\n        print(f"{group:10} recall {recall:.2f}  precision {precision:.2f}  {\'ok\' if ok else \'BELOW GATE\'}")\n    print("PASS" if passed else "FAIL")\n\nrun_gate()'],
      ['x','Five lines say ok. Hinglish and MOBILE say BELOW GATE, because the pattern checker cannot see the partly hidden number in row 4. The last line is FAIL. That is the right result: the gate caught a real miss. Lower a threshold only after you have written down why, with a number.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','This cell sets up everything it uses. So run the whole cell, not a part of it.','All lines say ok and the last line is PASS','You may have changed a sentence or a threshold. Put row 4 back as it was, and the gate should fail again.','The Hindi row prints strange letters','Your screen font is the cause, not the code. The Hindi sentence is only data, and the finding still works.']
      ]
    ]],
    ['p','Now try writing that third answer yourself.'],
    [
      'try',
      {id:'ch29-stop',
       mins:6,
       min:60,
       rows:4,
       task:'Write the sentence that stops a release. Not a policy: the real sentence, with numbers, that you would say in the meeting.',
       ph:'We are not shipping because …',
       after:'If your sentence has the word "seems", it will not stop anything. Thresholds stop releases. Impressions do not.'}
    ],
    ["h", "When the eval stops teaching you"],
    ["p", "A test the whole class scores full marks on no longer tells you who is better. Evals (your sets of test cases) have the same problem. When your system passes nearly every case, the eval stops giving you new information. This is called <strong>eval saturation</strong>."],
    ["p", "Do not delete a saturated eval. Move its cases into your regression suite (the checks every release must pass), where a score near 100% is exactly what you want. Then write new, harder cases for the capability eval, so it starts low again and has room to show progress."],
    ["tb", ["Kind of eval", "Score you want", "What it tells you"], [["Capability eval", "Starts low, then climbs", "Can the system do something new?"], ["Regression suite", "Near 100%", "Did a change break something that worked?"]]],
    ["pred", {"id": "ch29-saturated", "short": true, "ph": "What you keep, and what you add", "ask": "Your answer key now scores 99% on every release, and the last three changes all scored the same. A teammate says “evals are done”. What do you do with the answer key, and what do you add?", "reveal": "The answer key is saturated, so it can no longer tell a good change from a bad one. Keep it as a regression suite, so a release that drops below about 99% is stopped. Then write new cases from real failures, such as your error-analysis piles from Chapter 14.5, so the capability eval starts low again. Also check pass^k on the hardest cases.", "then": "A flat score is a signal to write harder cases, not a sign that the work is finished."}],
    ["c", "Last verified: November 2026", "The split between capability evals and regression evals, and the idea of saturation, follow Anthropic’s engineering guide “Demystifying evals for AI agents”."],
    ['h','Summary'],
    ['p','So here is the whole chapter in a few lines. Keep a test set with a version number. Score at several levels, so a good total cannot hide a broken part. Use a model as judge only after you check it against people. Agree the pass mark before you look at the results.'],
    ['p','Next, in Chapter 30, you will see how to keep watching the system once it is live.']
  ],
  capstone:{
    title:'Build the release gate',
    brief:'Without a release gate, measuring only makes a report that nobody has to act on. You learned to build a test set that still works after a change of prompt, model or index. You learned to score at several levels, so a good total cannot hide a broken part. You learned where an automatic marker is fine. Now you build the gate that every new version of the tool must pass before it ships.',
    where:'Your test harness from Chapter 21, with more code added.',
    steps:[
      'Open your harness. Turn your answer key into a test set with a version number. Make a file that holds the number, plus a note that lists what changed since the last version. Call it the final version for now.',
      'Score at three levels. First, each finder on its own. Second, the whole tool on whole sentences. Third, the cleaned text, marked by your automatic marker from Chapter 14.',
      'Write the gate. For each score, write the lowest number a new version may have to be released. Add a rule: the score for any single kind of ID may not drop, even if the overall score goes up.',
      'Make the gate run with one command (one line you type) that prints PASS or FAIL.',
      'Prove it works. Change one rule so it breaks Aadhaar finding. Run the gate. Show that it says FAIL.',
      'Say where the automatic marker is fine in the gate, and where only your own marking will do.'
    ],
    done:[
      'A test set with a version number and a note on what changed.',
      'Scores at three levels.',
      'A gate with a lowest number for every score, and a rule for each kind of ID.',
      'A one-command run that prints PASS or FAIL, and proof that it fails a broken change.'
    ]
  }
},

/* --------------------------------------------------------------- 30 / bk 17 */
{
  id:'ch17o', num:30, part:5, curriculumTier:'core', phase:4, prerequisites:['ch115','ch15','ch16e'], nextUnits:['ch18s','ch20d','b5'], minutes:55, labs:['cache'],
  title:'Observability and LLMOps: traces, cost and rollback',
  concept:'When an answer is wrong, slow or expensive, you want to know why, without guessing. Think of a lost parcel: the scan list shows where it got stuck. You will design a trace record. You will treat cost as an architecture metric (a number you watch while you design). And you will give every part a version number, so any change can be rolled back (undone).',
  plan:{
    first:'Trace one request by hand. A trace is the trip record of one request, like the scan list of a parcel. Time every stage with a stopwatch.',
    build:'Write down these things for the request. Its request id (its parcel number). The model and prompt version. The retrieval ids (which pages were fetched). The tool calls. The latency (the waiting time). The tokens (Lego bricks of text). The status. The evaluation result.',
    brk:'Make three bad requests on purpose: a slow one, an expensive one and a low-quality one. Then find what went wrong in each. Use only its trace, like a detective with scan records.',
    artifact:'A specification (a written plan) for a six-panel view of the running system. Think of one screen with six dials, like a car dashboard.',
    gate:'Say which signals should start an investigation, which should trigger a rollback (going back to the old version), and which are just noise, like a rumble that means nothing.'
  },
  needs:[
    ['Users notice response time, the waiting time','You saw this in Chapter 11.5. A trace shows you where the time went, like a parcel scan shows where the delay was.',11.5],
    ['Cost can be measured for each single request','Chapter 15 built the arithmetic (the sums) that this chapter now records.',15],
    ['A release gate (the check before launch) needs evidence','This comes from Chapter 29. Once you are live, traces give you that evidence, like receipts for what happened.',29]
  ],
  words:[
    ["Trace",'A trace is the record of one request’s trip through the system, like the scan list of a parcel. It shows what was retrieved (fetched), which prompt version ran, and how much time and how many tokens each stage used.'],
    ["Telemetry",'Telemetry is the numbers a running system sends out about itself, like the dials on a car dashboard. Examples are timings, counts, errors and usage. With them, anyone can see what the system is doing without reading the code.'],
    ["Canary release",'A canary release shows a change to a small group of real users first (their real requests are the “traffic”). It is like tasting one spoon of dal before you serve the whole pot.'],
    ["Drift",'Drift is quality sliding on its own, though nobody released anything. It is like a bicycle wheel that slowly goes out of line. The inputs, the documents or the provider (the company that runs the model) changed underneath you.']
  ],
  takeaway:[
    'Design a trace record (a scan list for one request) that can answer “why was this answer wrong?” after the fact.',
    'See cost as an architecture metric (a number you watch while you design), not only a finance report.',
    'Name what must be versioned (given a number, like v1 and v2), so that a change can be rolled back (undone).'
  ],
  story:[
    ['c','Before you start','Open your experiment harness (your test rig). You will grow its records into full traces, like turning a short note into a full scan list.'],
    ['c','On your route','Do units 17.1 and 17.6, then the capstone (the chapter’s project). Only read the other units this time.'],
    ['p','In the last chapter you built a gate. It checks a change before it goes live, like a guard at a door. But the story does not end at release. One day your live system will give a wrong answer, and someone will ask why. This chapter makes sure your answer is not “we can’t tell”.'],
    ['p','Think of a parcel that goes missing. The courier can tell you where it was last scanned, because every parcel is scanned at every step. Without those scans, nobody can ever trace a lost parcel.'],
    ['key','A <strong>trace</strong> records one request’s path through the system, like a parcel’s scan list. If you see only the input and the output, every diagnosis is a guess.'],
    ['h','Hands-on units'],
    ['p','The six units below start with a single trace and end with a full view of the system, like six steps up a staircase. Each one adds a layer to the one before.'],
    [
      'unit',
      '17.1',
      'Trace one request',
      {goal:'Build a structured trace (a neat record with fixed boxes) for one AI request.',
       idea:'A trace is a timeline of one run, like a parcel’s journey, together with the evidence about it.',
       prove:'Write down the request ID (its parcel number), the model, the prompt version, the retrieved IDs, the tools used, the latency (waiting time), the tokens and the outcome.',
       build:'Save the trace as JSON (a form written as labels and values inside curly brackets).',
       brk:'Take one field (one box) out. Then ask yourself: could you still find out what happened in the incident?',
       artifact:'Trace Schema v1.0.',
       check:'What is the least evidence you need to debug (find and fix) a problem?',
       lens:'Write down what you need to watch before problems happen in real use (production), not after.'}
    ],
    [
      'unit',
      '17.2',
      'Latency and throughput',
      {goal:'Measure the latency (waiting time) of each stage. Learn the difference between p50 (the typical wait) and p95 (the wait that only the slowest 5 in 100 are worse than).',
       idea:'The average wait can hide the slow cases that some users really live through, like an average train time that hides the day the train came two hours late.',
       prove:'Measure the retrieval (fetching), reranking (putting the fetched pages in order), model and tool stages one by one.',
       build:'Work out p50 and p95 for a small run, or for a larger sample (a bigger batch) if you have one.',
       brk:'Add a dependency (a part you rely on) that is slow on purpose, and see how it changes p95.',
       artifact:'Latency Budget plus a p50/p95 report.',
       check:'Which stage causes the slowest cases?',
       lens:'Service-level objectives (SLOs, promises about speed and reliability) should match what users feel, not just what the servers report.'}
    ],
    [
      'unit',
      '17.3',
      'Token and cost telemetry',
      {goal:'Track the input and output tokens (the bricks you send and the bricks you get back), and other costs that change, for each task.',
       idea:'Cost is an architecture metric. The context (the model’s desk), the model, the retries and the routing all decide how much you spend.',
       prove:'When you build the lab, work out the cost per request using the provider’s current pricing, like a price list at a shop.',
       build:'Compare two strategies (two ways of doing it) for the model and the context.',
       brk:'Add retries (trying again) and a large context (a crowded desk), and watch the cost grow.',
       artifact:'Unit Economics Model v1.0.',
       check:'What is the cost per successful task, not just the cost per call? Think of paying for a meal that you actually finished eating.',
       lens:'Talking to finance gets easier when every architecture choice has a cost you can measure, like a price tag.'}
    ],
    [
      'unit',
      '17.4',
      'Drift and feedback',
      {goal:'Notice when quality changes after a change in the data, the prompt, the model or how users behave.',
       idea:'An AI system can get worse even when nobody has changed the code, like a bicycle wheel that goes out of line by itself.',
       prove:'Make a baseline evaluation (a first score to compare with), and compare a later sample against it.',
       build:'Keep count of the type of complaint, the no-answer rate, escalations (cases passed to a person) and task success.',
       brk:'Change the document format, or add a new way users phrase things, and see what happens.',
       artifact:'Drift/Feedback Report.',
       check:'Which signal tells you quality has changed, before the complaints pile up?',
       lens:'Signals from live use work together with the offline evaluation (the test before release) you did earlier.'}
    ],
    [
      'unit',
      '17.5',
      'Versioning and rollback',
      {goal:'Give version numbers to the prompts, models, indexes (the lookup lists), schemas (the forms with fixed boxes) and tool contracts (what each tool promises).',
       idea:'If you cannot roll back one part at a time, finding the fault turns into guesswork, like changing five things in a recipe at once.',
       prove:'Make a version ID for the prompt, the model, the index and the tool schema.',
       build:'Run two versions side by side, like two shops next door.',
       brk:'Pretend a bad prompt release happened (simulate it), and roll it back.',
       artifact:'Version Matrix plus Rollback Procedure.',
       check:'Can you say exactly what changed?',
       lens:'Versioning is how you stay in control of delivery. It is not paperwork.'}
    ],
    [
      'unit',
      '17.6',
      'Production dashboard',
      {goal:'Turn the telemetry (the numbers the system sends out) into a six-panel view of how the system is running: quality, safety, latency, cost, traffic and failures.',
       idea:'A dashboard should answer two questions: “is the system healthy?” and “where do I look next?” Think of a doctor’s chart.',
       prove:'For each panel, decide the metric (the number), the source, the owner and the threshold (the line that raises an alarm).',
       build:'Make a mock dashboard (a rough sample) or a spreadsheet.',
       brk:'Take away one signal at a time, and see which incident becomes harder to understand.',
       artifact:'Six-Panel Observability Specification.',
       check:'Which alerts should wake up a person, and which should only be watched?',
       lens:'A PM (product manager) is responsible for clarity in operations (the daily running), just as much as the platform team is.'}
    ],
    ['q','I410'],
    ['h','Cost is an architecture metric'],
    ['p','A trace shows where the time goes. The same is true of money, like a shop till slip. Every token, every search and every call to a tool adds to the bill. So cost is part of how you design the system. It is not only something finance checks at the end of the month.'],
    ['key','Work out the cost of one user task from start to finish: input tokens, output tokens, embeddings (addresses for meaning), retrieval, and tool and API calls (messages sent over the internet). Then you can compare two designs before building either.'],
    ['h','Change one thing at a time'],
    ['p','You will hear terms like canary release, shadow traffic, rollback and drift. They all come from one habit, and it is simple. Change one thing at a time. Let a few users see it first. Keep the old version ready. And keep watching after the release.'],
    ['key','Most incidents can be prevented in four ways. Change one variable (one thing that can change) at a time. Give version numbers to prompts, models, indexes and tool contracts. Make sure every part can be rolled back. And never let a prompt change skip evaluation. Teams break that last rule most often, because editing a prompt does not feel like a release.'],
    ['p','Here is a puzzle about drift. Take a moment to think.'],
    [
      'try',
      {id:'ch30-slower',
       mins:6,
       min:60,
       rows:4,
       task:'Your assistant got slower this week, and nobody released anything. Name three things that could have changed.',
       ph:'1 … 2 … 3 …',
       after:'The traffic mix, how many documents there are, and the provider’s own response time. None of these sit in your repository (your online folder of code), so they must show on your dashboard.'}
    ],
    ['h','Summary'],
    ['p','So a wrong answer should never leave you saying “we can’t tell”. A trace shows you the path of each request, like a parcel scan list. Cost is something you design and measure. And a version number on every part means any change can be rolled back.'],
    ['p','Next, in Chapter 31, you will look at the same system as an attacker would, like a thief walking round a house.']
  ],
  capstone:{
    title:'Plan how you will keep watching the tool once real people use it',
    brief:'A tool in use can go wrong in ways your tests never saw. You only know if you are watching. You learned to design a trace (the scan list of one request) that explains a wrong answer. You learned to treat cost as an engineering number. And you learned what to version, so a change can be undone. Now you plan six panels (six dials) for Bharat Privacy Guard.',
    where:'Use your test harness (your test rig) from Chapter 21, and extend it in code so it saves full traces. Then write the plan in the notes box below.',
    steps:[
      'Extend your harness so every run saves a full trace: the input, each step, each finding, the time, the tokens, the cost and any error. Never put real personal details into a trace that is shown on a dashboard (one screen of numbers).',
      'Design six panels, like six dials: quality, safety, response time, cost, traffic and failures. For every panel, write which data feeds it and how often it is worked out. A panel with no data source is only a wish.',
      'Fill in what each panel shows. Quality: which number, worked out from what. Safety: how often an attack from Chapter 13 gets through. Response time: the median (the middle one) and the slowest, split by stage. Cost: per message and per day, with the parts visible. Traffic: how many messages, and the mix of English, Hindi and Hinglish. Failures: counts by type, not one error rate.',
      'For each panel, write the level that makes you investigate (look closely) and the level that makes you roll back (go back to the old version).',
      'List what must be versioned (given a number) so a change can be undone: the rules, the model, the instructions, the reference lists and the answer key (the questions with right answers).'
    ],
    done:[
      'Traces saved by your harness, one for every run.',
      'Six panels, each with a named data source (where its numbers come from).',
      'For every panel, one level that makes you investigate and one that makes you do a rollback (go back to the old version).',
      'A list of what is versioned, like a list of numbered editions.'
    ]
  }
},

/* --------------------------------------------------------------- 31 / bk 18 */
{
  id:'ch18s', num:31, part:5, curriculumTier:'core', phase:4, prerequisites:['ch13','ch12t','ch75'], nextUnits:['ch19pm','ch21cap','b5'], minutes:55, labs:['injection','trifecta'],
  title:'Security and governance: controls around an untrusted model',
  concept:'Assume someone will fool the model. Everything around it can be attacked: the app, the retrieved content, the tools, the identity layer (who is who) and the data pipeline (the path data travels). You will apply least privilege (only the keys that are needed). And you will build a risk register where every control has a test.',
  plan:{
    first:'Hide a bad instruction (a trick note) inside a document that your own system fetches. Then test whether it can override the task, or pull out a secret.',
    build:'Add these: trust boundaries (a fence between safe and unsafe text). Least privilege (give only the keys that are needed). Input validation (check what comes in). Secret isolation (keep secrets in a locked drawer). Audit logging (a diary of who did what). Confirmation steps (ask “are you sure?”).',
    brk:'Run tests for prompt injection (a trick note typed in), indirect injection (a trick note hidden in fetched text), tool abuse, data leakage and excessive agency (giving the system too much power).',
    artifact:'A security report and an AI risk register (a table of what could go wrong, and a test for each).',
    gate:'Explain why retrieved content (text the system fetches) is untrusted input, to someone who thinks it is simply their own data.'
  },
  needs:[
    ['Prompt injection (the hidden trick note) has no complete fix','Chapter 13 showed you this. This chapter builds the controls around the problem, like a fence around a pit.',13],
    ['Tools are a security boundary, like a door in a wall','You learned this in Chapter 25. Least privilege (only the keys that are needed) puts it into practice.',25],
    ['Retrieved text (text the system fetches) can carry attacks','In Chapter 7.5 you planted a trick note in your own system.',7.5]
  ],
  words:[
    ["Prompt injection",'Prompt injection is a trick note. Text reaches the model as plain data, but the model follows it like an order. The model cannot reliably tell the two apart. So the fence has to be built around it, by the system.'],
    ["Indirect injection",'The same trick, but the note arrives hidden inside content the system fetched, not in what the user typed. Think of a slip hidden inside a stack of papers.'],
    ["Excessive agency",'Excessive agency means giving a system more permission, reach or freedom than its task needs, like handing a guest the keys to every room.'],
    ["Risk register",'A risk register is a table in which every row ends in a test that has been run. It is not enough to describe a control (a safety measure). The test is the proof.']
  ],
  takeaway:[
    'Explain why retrieved content (fetched text) is untrusted input, whoever owns the document.',
    'Apply least privilege (give only the keys that are needed) to an agent, and show what breaks.',
    'Produce a risk register (a table of what could go wrong) in which every control has evidence next to it.'
  ],
  story:[
    ['c','Before you start','Bring your injection audit (your list of trick-note tests) from Chapter 13, and the tool classification (which tools are risky) from Chapter 27.'],
    ['c','On your route','Do units 18.7 and 18.8, then the capstone (the chapter’s project). Only read the other units this time.'],
    ['p','In the last chapter you learned to watch a live system, like a guard watching a shop. Now ask: what if someone tries to misuse it? The answer starts with a plain fact. The model trusts everything it reads, the same amount.'],
    ['p','Whether that is dangerous depends on the system around the model: what it is given, and what it is allowed to do next. So most of AI security is about the system, not the model. Think of a good clerk in a badly run office.'],
    ['p','Here is a picture. Someone slips a note into a stack of paperwork that says “approve this one without checking”. The clerk reads perfectly well. The trouble is that nothing in the process keeps an instruction apart from a document.'],
    ['key','Prompt injection is an input trust problem: the hidden trick note. The model cannot reliably tell an instruction from data. So the system that puts the context together (the model’s desk) must build the fence. Asking nicely in the system prompt (the rules on the shop wall) is not enough.'],
    ['h','Hands-on units'],
    ['p','The eight units below start with the first attack. They move through the controls that stop it. They end at the checklist that decides a release. It is like walking from the thief to the lock to the guard’s list.'],
    [
      'unit',
      '18.1',
      'Prompt injection',
      {goal:'Understand direct and indirect prompt injection as attacks that use text you cannot trust, like a stranger’s note.',
       idea:'Instructions hidden in what the user typed, or in retrieved content, can fight with your application’s own instructions, like two people shouting orders at a clerk.',
       prove:'Put bad instructions in a document, and test the RAG assistant (the open-book helper) with it.',
       build:'Keep your trusted control instructions apart from untrusted evidence, like keeping the rule book away from the pile of letters.',
       brk:'Try to make the model give up a secret, or use a tool, through retrieved text.',
       artifact:'Prompt Injection Test Report.',
       check:'What stopped the attack: the model’s own behaviour, or a rule in the application?',
       lens:'Never call the prompt text alone a security boundary. A request written on a note is not a locked door.'}
    ],
    [
      'unit',
      '18.2',
      'Sensitive information disclosure',
      {goal:'Protect secrets, PII (personal details) and confidential data in prompts, in retrieval and in traces (the trip records of requests).',
       idea:'A model can only protect information if the application controls what the model receives and what it can send back, like a shopkeeper who decides what goes on the counter.',
       prove:'Make a test collection of documents with made-up sensitive fields, so no real person’s diary is used.',
       build:'Filter or redact (black out) before the model sees anything, and log each access decision.',
       brk:'Ask for another user’s data, in plain words and through tool calls (asking a tool to act).',
       artifact:'Data Leakage Test Matrix.',
       check:'Where is authorization (who is allowed) checked?',
       lens:'Match privacy requirements to the paths the data really takes, like tracing the pipes in a house. Policy documents alone are not enough.'}
    ],
    [
      'unit',
      '18.3',
      'Improper output handling',
      {goal:'Check the model’s output before you pass it on to other systems, like looking at a letter before you post it.',
       idea:'Generated text turns dangerous when another system treats it as a trusted command, as SQL (database orders), as HTML (web page code) or as business data.',
       prove:'Create a structured output (a filled form with fixed boxes), and check it against a list of allowed values.',
       build:'Use allowlists (a list of what is allowed) and typed interfaces (boxes that accept only one kind of thing) before anything is run.',
       brk:'Slip bad strings (trick text) into the generated fields.',
       artifact:'Output Validation Checklist plus tests.',
       check:'Which downstream part (the next step in the chain) could read the output as an instruction?',
       lens:'Treat model output as untrusted input, like a letter from a stranger.'}
    ],
    [
      'unit',
      '18.4',
      'Excessive agency',
      {goal:'Limit the tools and actions that an autonomous system (one that acts on its own) can use.',
       idea:'The more permissions a system has, the bigger the damage when something goes wrong, like a bunch of master keys.',
       prove:'Sort each tool by how much privilege it needs, and whether its actions can be undone.',
       build:'Take away the tools it does not need, and compare task success before and after.',
       brk:'Try a task that asks for an action that cannot be undone, like sending a letter you cannot take back.',
       artifact:'Agency Permission Matrix.',
       check:'What is the worst damage if the model is wrong?',
       lens:'How much freedom the system gets should depend on the business risk, like a new helper who first gets small errands.'}
    ],
    [
      'unit',
      '18.5',
      'Retrieval authorization',
      {goal:'Enforce ACLs (lists of who may see what) and tenant boundaries (a wall between one customer and another) before evidence reaches the model.',
       idea:'Fetching the right content for the wrong tenant (customer) is still a security breach, like handing one person’s letter to a neighbour.',
       prove:'Create two users and two groups of documents.',
       build:'Apply the metadata filters (labels on documents that sort them) on the server side, where the user cannot change them.',
       brk:'Try to fetch across tenants, and to fetch with permissions that are out of date.',
       artifact:'ACL Retrieval Test Report.',
       check:'Can the model ever see evidence it is not allowed to see?',
       lens:'Do not make “remembering” the authorization rules the model’s job, as your only control. A guard should not rely on one person’s memory.'}
    ],
    [
      'unit',
      '18.6',
      'Audit logging',
      {goal:'Capture enough evidence to rebuild what happened in any action that matters for security, like a CCTV recording.',
       idea:'An audit trail (a diary of actions) should show who did what, when, under which rule, with which tool, and what happened.',
       prove:'Design an audit record (one diary entry) for one tool action.',
       build:'Write the approval event (“yes, go ahead”) and the execution event (“it was done”) separately.',
       brk:'Change the payload (the thing being sent) after it was approved, and check that the mismatch shows up.',
       artifact:'Audit Log Schema plus a sample trail.',
       check:'Could someone dealing with an incident rebuild what the action was?',
       lens:'Being able to audit (look back at the diary) is part of being ready for production, real use.'}
    ],
    [
      'unit',
      '18.7',
      'Governance and risk register',
      {goal:'Turn security and AI risks into owners, controls and evidence, like giving each problem a name, a lock and a receipt.',
       idea:'Governance (the rules for who decides what) becomes useful when every risk has a control you can test, and an owner.',
       prove:'Make fields (boxes) for the risk, the impact, the likelihood, the control, the owner, the evidence and the remaining risk.',
       build:'Check the register against the architecture of your capstone (how its parts fit together).',
       brk:'Mark one control “policy only” (written down, never tested), and ask what evidence is missing.',
       artifact:'AI Risk Register.',
       check:'Which risks are still left after the controls?',
       lens:'A risk register is a working tool, not a decoration for the rule-checkers.'}
    ],
    [
      'unit',
      '18.8',
      'Security release gate',
      {goal:'Turn red-team findings (what the friendly attackers found) into release criteria (what must be true before launch).',
       idea:'Security tests must stop a release when the risk that remains is above the line you agreed on, like a red signal for the train.',
       prove:'Decide the must-pass checks for injection, leakage, authorization and unsafe actions.',
       build:'Run the test suite (all the tests together) before and after you change the prompt or the model.',
       brk:'Make a change that improves quality but weakens security, and see the gate say stop.',
       artifact:'Security Go/No-Go Checklist.',
       check:'What counts as an automatic blocker (a stop sign that needs no debate)?',
       lens:'Security belongs in the same release process as quality and cost, not in a separate room.'}
    ],
    ['q','I411'],
    ['h','Least privilege for agents'],
    ['p','Least privilege means giving someone only the keys they need to do their job, and no more. Think of a school peon who gets the classroom key but not the exam paper cupboard. For an agent (a helper that uses tools), that mostly means tools.'],
    ['key','Apply least privilege to agents. If an agent has a tool it never needs, an attacker can talk it into using that tool.'],
    ['p','Controls are only half the story, because each one needs proof. The table pairs each risk with a control, and with the evidence that shows the control works, like a lock with a record of the test.'],
    [
      'tb',
      ['Risk','Example control (the safety measure)','The evidence that it works (the proof)'],
      [
        ['Prompt injection','Content separation, tool allowlist, confirmation','Red-team test results'],
        ['Data leakage','Access-aware retrieval, redaction, log controls','Access tests and trace samples'],
        ['Excessive agency','Least privilege plus approval gates','Tool policy and approval logs'],
        ['Model drift or deprecation','Versioning plus a regression suite','Release and evaluation report'],
        ['Unsafe output','Policy filter and human escalation','Safety test set results'],
        ['Raw personal data in logs, or kept too long','Redact before logging, plus a retention limit','A log sample with no raw IDs, and a deletion test. This supports the DPDP Act duties on security safeguards and on limits to keeping data']
      ]
    ],
    ['p','Consulting firms often call this work model risk management. They also ask for explainability: a written reason for each decision the system makes. Learn both words. Your risk register and your system card are the evidence behind them, like the file behind a bank’s loan decision.'],
    ['h','Test every control'],
    ['key','A safeguard nobody has tested only exists on paper, like a fire exit nobody has opened. Next to each safeguard, write the test that proves it works, and run it.'],
    ['p','Try this with something from your own workplace.'],
    [
      'try',
      {id:'ch31-evidence',
       mins:6,
       min:60,
       rows:4,
       task:'Pick one control your organisation says it has. Write what evidence would prove it works, and whether that evidence exists.',
       ph:'The control … the evidence would be … it exists / does not exist because …',
       after:'The gap between what is claimed and the evidence is your real risk. A risk register is there to track that gap.'}
    ],
    ["h", "A list for agent risks, and a clock for incidents"],
    ["p", "In December 2025, the OWASP security community published the <strong>OWASP Agentic Top 10</strong>: the ten main security risks of AI agents. Use it as a checklist for your risk register. Five of them matter for almost every agent you will build."],
    ["l", ["<strong>ASI01 Agent Goal Hijack.</strong> Hidden text changes what the agent is trying to do. It is prompt injection aimed at the goal.", "<strong>ASI02 Tool Misuse and Exploitation.</strong> The agent uses a real tool in a harmful way, such as a refund tool used to send money out.", "<strong>ASI03 Identity and Privilege Abuse.</strong> The agent acts with more keys than the task needs.", "<strong>ASI06 Memory and Context Poisoning.</strong> Bad notes saved in the agent’s memory steer its later tasks.", "<strong>ASI08 Cascading Failures.</strong> One agent’s mistake flows into the next agent, and grows."]],
    ["p", "The other five are ASI04 Agentic Supply Chain Vulnerabilities, ASI05 Unexpected Code Execution, ASI07 Insecure Inter-Agent Communication, ASI09 Human-Agent Trust Exploitation and ASI10 Rogue Agents."],
    ["p", "In India, an incident also starts a clock. Under the <strong>CERT-In 6-hour rule</strong> of April 2022, many organisations must report certain cyber incidents to CERT-In, India’s cyber-security agency, within 6 hours of noticing them. They must keep their system logs for 180 days, in India. Their clocks must match the official time servers of NIC or NPL. And they must name one contact person for CERT-In."],
    ["key", "Your agent’s traces are logs too. If you do not keep them for 180 days, with correct times, you cannot answer CERT-In or your own incident review."],
    ["pred", {"id": "ch31-clock", "short": true, "ph": "The risk, and the deadline", "ask": "At 10 a.m., your support agent is caught sending customer files to an outside address, after a poisoned web page told it to. Name the OWASP risk, and say what must happen before 4 p.m.", "reveal": "This is ASI01 Agent Goal Hijack, and it led to ASI02 Tool Misuse and Exploitation. If CERT-In lists this kind of incident, report it within 6 hours, so before 4 p.m., through your named contact person. Keep the agent’s traces and logs, with their timestamps. Personal data also leaked, so the DPDP breach duties apply as well.", "then": "Write the 6-hour step into your incident runbook now. Nobody should read the rules for the first time during an incident."}],
    ["c", "Last verified: November 2026", "OWASP: genai.owasp.org, Top 10 for Agentic Applications (December 2025). CERT-In: Directions No. 20(3)/2022-CERT-In of 28 April 2022, and its FAQs, on cert-in.org.in."],
    ['h','Summary'],
    ['p','To sum up: the model trusts everything it reads, so the system around it has to build the fence. Retrieved content is untrusted input. Give every agent only the tools it needs. And write a test next to every control, so your register holds evidence, not just good intentions.'],
    ['p','Next, in Chapter 32, you will turn this technical system into a product specification, a recipe card for the product.']
  ],
  capstone:{
    title:'Write the risk register, with a test beside every control',
    brief:'A risk register that stops at controls is only a list of good intentions. You learned why fetched text is untrusted input, whoever owns it. You learned to apply least privilege to an agent. And you learned to put evidence beside every control. Now you write the risk register for Bharat Privacy Guard.',
    where:'Writing only. The register rests on evidence from your earlier chapters, like a case file. You need no new code.',
    steps:[
      'For each risk, write eight things: the asset (what is at stake), the threat (what could hurt it), the impact (how bad), how likely it is, the control (the safety measure), the owner (who looks after it), the test, and the risk that remains.',
      'Include at least these eight risks. A missed Aadhaar number. A false alarm that blocks a real message. An attack hidden in the text reaching the model. The provider keeping your data. The model provider going down. The reference lists going out of date. The logs storing raw personal data. A person with more access than they need.',
      'For every control, write the test that shows it works, and run that test wherever you can. A control with no test is only an intention, like a lock nobody has tried.',
      'Apply least privilege to the tool. List what each part can reach, take away everything it does not need, and say what breaks.',
      'Write two lines on why text fetched from your own reference lists must still be treated as untrusted input.',
      'Add the personal-data row from the table: raw personal data in logs (the diary of what happened), or kept too long. Name the DPDP Act duty it supports. Keep the project wording: the tool helps an organisation collect and share less personal data, and it does not make anyone compliant.'
    ],
    done:[
      'A register of at least eight risks, with all eight columns filled in, like a form with no empty boxes.',
      'A test for every control, with the results of those you ran.',
      'A least-privilege list (only the keys that are needed), and what broke when you removed access.',
      'Two lines on why retrieved (fetched) text is untrusted.'
    ]
  }
},

/* --------------------------------------------------------------- 32 / bk 19 */
{
  id:'ch19pm', num:32, part:5, curriculumTier:'core', phase:5, prerequisites:['ch16e','ch6','ch20'], nextUnits:['ch20d','b7'], minutes:55, labs:['prdial'],
  title:'AI product management: specs for a probabilistic system',
  concept:'An AI feature cannot promise the same answer every time. It is like a parrot that has read a whole library: it guesses. So the spec must say how often it gets it right, on which test set (your answer key), and what happens the rest of the time. You will write acceptance criteria as ranges. You will keep different kinds of metrics apart. You will design the interface states, the screens the user can land on.',
  plan:{
    first:'Pick the line “return the correct document”. Turn it into an acceptance criterion (a pass mark) that you can really test.',
    build:'Write a short AI PRD (the recipe card for your feature). Cover the problem, the baseline, the scope, the context, the tools, the failure modes, the human role, evaluation, safety, latency, cost, rollout and rollback.',
    brk:'Try to break it with three cases: a wrong answer, a refusal that was not needed (an over-refusal), and a harmful action.',
    artifact:'An AI PRD, a release gate (the check before launch) and a metric map (a picture of which number means what).',
    gate:'An engineer can build from it. A leader can see the trade-off it makes, like a shop owner seeing what you give up to get something.'
  },
  needs:[
    ['Quality is a number you measure on a test set','In Chapter 29 you built the gate (the check before launch) that this PRD points to.',29],
    ['Failure costs differ by use case','You saw this in Chapter 6. Choosing which failure you can live with is a product decision.',6],
    ['What the user sees when it is wrong','In Chapter 20 you designed the failure screens.',20]
  ],
  words:[
    ["AI acceptance criterion",'A pass mark with three parts: a metric (a number you watch), a named test set (your answer key) and a stated tolerance (how far off is still fine). “Always correct” is a promise a guessing machine cannot keep.'],
    ["Product metric",'What the user got done. Keep it apart from quality numbers and from running-cost numbers. If you mix them on one screen, the screen cannot answer anything.'],
    ["Rollback trigger",'The exact thing you can see that makes you pull a change back. Write it so that someone can act on it without calling you.'],
    ["Non-goal",'Something you chose not to do. Write it down, so nobody sneaks it back in later, like a line you draw on the map.']
  ],
  takeaway:[
    'Write an acceptance criterion as a rate with a tolerance, not as a promise.',
    'Keep business results, model quality numbers and running-cost numbers in separate piles.',
    'Design the three interface states an AI feature needs: sure, unsure and error.'
  ],
  story:[
    ['c','Before you start','Bring your release gate from Chapter 29 and your four interface states (the screens a user can land on) from Chapter 20.'],
    ['c','On your route','Do units 19.2 and 19.7, then the capstone (the project at the end). Read the other units this time.'],
    ['p','So far you have built, measured, watched and protected an AI system. Now you write the spec (the recipe card) that holds it all together. The first lesson is hard. “It returns the right document” is a promise no probabilistic system (one that guesses, so it can differ each time) can keep.'],
    ['p','So write a promise you can keep. How often does it return the right document? On which cases? And what does it do the rest of the time? That rest is never zero.'],
    ['p','Think of the railway. It cannot promise a train at exactly 9:04. So it tells you how many trains arrive within a few minutes of the time, counted every month. You can plan your day around that number.'],
    ['key','For an AI feature, “done” means a measured success rate inside a tolerance. It does not mean one fixed answer.'],
    ['h','Hands-on units'],
    ['p','The seven units below start at the problem and end at the full PRD. Each one gives you something you use in the next.'],
    [
      'unit',
      '19.1',
      'AI problem framing',
      {goal:'Decide if AI is worth it here. Say what outcome the user wants.',
       idea:'Start from the work the user does and where it hurts. Do not start from the model.',
       prove:'Write down how it is done today, what hurts the user, the baseline (today’s result, to beat) and an outcome you can measure.',
       build:'If you can, build a baseline that does not use AI.',
       brk:'Put your AI idea next to a deterministic option (a fixed-rule way that gives the same output for the same input, like a calculator).',
       artifact:'Problem Framing One-Pager.',
       check:'Why AI, and not ordinary software?',
       lens:'This stops you from starting with an “AI-first” answer, like buying a hammer before you look at the nail.'}
    ],
    [
      'unit',
      '19.2',
      'AI acceptance criteria',
      {goal:'Turn a fuzzy idea of “correct” into pass marks you can measure.',
       idea:'AI answers change from run to run. So “done” must describe a spread of results and a tolerance (how far off is fine).',
       prove:'Write pass marks for retrieval (finding the right page), generation (writing the answer), safety, latency (waiting time) and cost.',
       build:'Link each pass mark to a test set and to a way of measuring.',
       brk:'Make a case where quality gets better but latency breaks the SLO (the wait time you promised, like “chai in five minutes”).',
       artifact:'AI Acceptance Criteria Sheet.',
       check:'Can engineering run the test without asking you what “good” means?',
       lens:'Acceptance criteria are the contract between product and engineering, like a written deal.'}
    ],
    [
      'unit',
      '19.3',
      'Failure-first UX',
      {goal:'Design for the moments the AI is unsure, unclear or wrong. Do not hide them.',
       idea:'A good AI screen shows the user where the system stops being reliable, and what to do next, like a sign that says “bridge closed, take the left road”.',
       prove:'Design a sure state, an unsure state and a failed state.',
       build:'Add citations (a note saying where the answer came from), a way to ask a follow-up question, and fallback paths (a second road when the first is shut).',
       brk:'Take out the citations and the unsure signs. Then compare how users understand the answers.',
       artifact:'Failure-First UX Flow.',
       check:'What does the user do when the AI cannot answer?',
       lens:'The fallback is part of the feature. It is not something you add at the end.'}
    ],
    [
      'unit',
      '19.4',
      'Human-in-the-loop UX',
      {goal:'Say when a person checks, approves, edits or overrides what the AI produced.',
       idea:'Put the person where the risk is high or things are unclear, like a teacher checking only the hard questions.',
       prove:'Mark the points where someone decides. Write what the person is asked to approve.',
       build:'Measure how long a review takes and how often people override the AI.',
       brk:'Make an approval that no longer matches the action it approves, like signing a form that was changed after you read it.',
       artifact:'HITL Decision Map.',
       check:'What does the human add that nothing else can?',
       lens:'Human review should lower the risk. It should not become a rubber stamp that means nothing.'}
    ],
    [
      'unit',
      '19.5',
      'Metrics and experimentation',
      {goal:'Keep business results apart from model quality numbers and running-cost numbers.',
       idea:'A task getting finished is not the same as an answer being grounded (backed by the real page). And both are different from cost.',
       prove:'Draw a metric tree (a tree of numbers) with one layer each for business, quality, safety, latency and cost.',
       build:'Where it fits, set up an A/B test (two versions side by side, to see which wins) or another fair comparison.',
       brk:'Make a model number go up while the business result gets worse.',
       artifact:'Metric Map plus Experiment Plan.',
       check:'Which number tells you the product is useful?',
       lens:'A PM must stop teams from chasing a stand-in number instead of the real goal, like a student chasing marks instead of learning.'}
    ],
    [
      'unit',
      '19.6',
      'Unit economics',
      {goal:'Work out the cost of tokens (small pieces of text you pay for), retrieval, tools, infrastructure and human review.',
       idea:'The real unit is often the cost of one task that worked, not the cost of one request.',
       prove:'Make a spreadsheet with volume, token usage, model cost, retries, tools and review time.',
       build:'Compare cases for model routing (sending easy jobs to a cheaper model) and for caching (keeping an answer to reuse it).',
       brk:'Raise the context size or the retry rate, and watch what happens to your margin (what you keep after costs).',
       artifact:'AI Unit Economics Model.',
       check:'What happens at 10× volume?',
       lens:'Think about cost when you choose the design, from day one.'}
    ],
    [
      'unit',
      '19.7',
      'AI PRD and release plan',
      {goal:'Write a PRD that an engineer can build and a leader can judge.',
       idea:'An AI PRD must say what the context is, what happens when it fails, how you evaluate it, and what its limits are while running.',
       prove:'Fill in all of these: problem, scope, inputs, context, tools, how the model behaves, failures, the human role, metrics, safety, latency, cost, rollout and rollback.',
       build:'Check the PRD against the system you built.',
       brk:'Ask a reviewer to find a failure your PRD did not cover.',
       artifact:'AI PRD plus Release Gate plus Metric Map.',
       check:'Can the PRD answer “what happens when it is wrong?”',
       lens:'This artifact becomes one of the best pieces in your portfolio (the folder of your work you show to employers).'}
    ],
    ['q','I412'],
    ['h','A spec outline'],
    ['p','Here is an outline you can copy. Every line is a question someone will ask you later. It is cheaper to answer it now, like packing your bag the night before.'],
    [
      'n',
      ['The user’s problem, and how it is done today without AI.','Why AI is the right answer — and what is clearly out of scope.','What goes in: the inputs, the context, and the tools it may call.','How it fails, and what a person does when it does.','The test set, and the scores that count as good enough.','Safety limits, the speed it must keep, and the cost it must stay under.','How it rolls out, what you watch afterwards, and what makes you pull it back.','Whose name is on it.']
    ],
    ['h','Keep metric types separate'],
    ['p','Once the outline is filled in, the next trap is the metrics (numbers you watch). They look alike on a dashboard (one screen of numbers), but they answer different questions.'],
    ['key','Keep the metric types apart, like sorting rice, dal and sugar into separate jars. Task completion rate is a product outcome. Groundedness is a system quality metric. Token cost is an operating metric. Complaint rate is a user signal. A dashboard that mixes them cannot answer any question clearly.'],
    ['p','Metrics also help with big decisions. The table shows four of them, the business question behind each, and the AI proof that settles it.'],
    [
      'tb',
      ['Decision','The business question','The AI proof that settles it'],
      [
        ['Build or buy','Will it create enough value?','What it can do, how you test it, and the total cost of owning it (total cost of ownership)'],
        ['Ship or hold','Is failure cheap enough?','Quality, safety and being ready for incidents (when something goes wrong)'],
        ['Model A or B','Which one wins for this task?','A benchmark (a fair test) made for this task'],
        ['Human in the loop','Where is it unsafe to let the AI act alone?','What a mistake costs, and whether it can be undone']
      ]
    ],
    ['p','Now try writing one of the hardest lines in the spec.'],
    [
      'try',
      {id:'ch32-trigger',
       mins:6,
       min:60,
       rows:4,
       task:'Write a one-line rollback trigger for a feature you want to ship. Make it clear enough that someone could act on it at 2am without calling you.',
       ph:'Roll back if …',
       after:'If someone needs your opinion to read it, it is not a trigger yet. Make it a number and a threshold (the line where you act).'}
    ],
    ['h','Summary'],
    ['p','So an AI spec stands on a few simple ideas. Promise a rate with a tolerance, not a perfect answer. Keep business, quality and running-cost metrics apart. Plan for the moments the AI is unsure or wrong. And write a rollback trigger that someone can act on without asking you.'],
    ['p','Next, in Chapter 33, you turn the product into a production architecture (the plan for how all the parts fit) and a delivery plan.']
  ],
  capstone:{
    title:'Take your requirements to version 3 for Bharat Privacy Guard',
    brief:'Now you take the requirements you wrote in Chapter 18 to version 3. It is a document an engineer can build from. A leader can read it and see exactly what trade-off is being made. In this chapter you learned three things. Write acceptance criteria as a rate with a tolerance. Keep business results, model measures and running-cost measures apart. Design the three states an AI feature needs. Now you update two pages for your own tool.',
    where:'Written work only. The requirements use proof from earlier chapters. You do not write any new code.',
    steps:[
      'Say what the user’s problem is. Then name the non-AI way your tool has to beat, for example a developer’s own hand-written rules.',
      'Draw the scope (the fence around your project). Say clearly what is outside the fence.',
      'Say what the models can see. Say which tools they may use. Say what job a person has.',
      'List the failures you have really seen in this course.',
      'Name the test set. Write a test plan in five lines.',
      'Set targets for quality, safety, speed and cost. Write each as a rate with a tolerance. For example: “finds 95 of every 100 Aadhaar numbers, give or take 3, on the answer key”.',
      'Design the three screens the tool needs: sure, unsure and error.',
      'Write the release plan, a one-line rollback trigger (the sign that says “undo it”), and the name of the owner.'
    ],
    done:[
      'Two pages an engineer could build from.',
      'Every quality claim written as a number, against a named test set.',
      'What is out of scope, written down.',
      'A rollback trigger that someone could act on without asking you.'
    ]
  }
},

/* --------------------------------------------------------------- 33 / bk 20 */
{
  id:'ch20d', num:33, part:5, curriculumTier:'core', phase:5, prerequisites:['ch185','ch17o','ch16e'], nextUnits:['ch21cap','b7'], minutes:55, labs:['costmodel'],
  title:'Production architecture, delivery and vendor strategy',
  concept:'A prototype works because you are the only user and you forgive its mistakes, like a dish cooked at home. Production takes away both. In this chapter you list what a prototype is missing. You treat response time as a budget shared across the steps. You score vendors on more than price and quality.',
  plan:{
    first:'Before you look anything up, write a list from memory: what is your prototype missing before real people can use it?',
    build:'Add the decisions: the architecture (how the parts fit together), separate environments (practice room and real room), automated checks before release, who owns what, service targets, security, rolling back, and how you would leave a vendor (the company you buy from).',
    brk:'Work out what happens in three shocks: the provider goes down, traffic grows ten times, and the token price doubles.',
    artifact:'A technical decision pack (a bundle of pages that shows your choices) that covers the architecture, the alternatives, the evaluation, security, cost and rollout.',
    gate:'Defend your build-or-buy choice and your provider choice with weighted criteria (marks that count more or less), not with what you happen to like.'
  },
  needs:[
    ['Build or buy is a choice made with marks','Chapter 18.5 introduced it. Here the marks (criteria) get weights, so some count more.',18.5],
    ['You can measure the cost of one task','You wrote it down in Chapter 30.',30],
    ['A release gate (the check before launch) decides what goes live','You built it in Chapter 29.',29]
  ],
  words:[
    ["Production delta",'The list of everything a working prototype does not have yet: sign-in, limits, retries (trying again), saved data, monitoring (watching it run), secrets, backups, deployment (putting it live) and rollback (going back).'],
    ["Latency budget",'The total waiting time a user will accept, shared out across the steps that use it up, like a pocket-money budget.'],
    ["Architecture decision record",'A short note: what was decided, what the other choices were, and why. Write it on the day you decide, not later from memory.'],
    ["Exit cost",'What it costs to leave a provider. It is usually the column nobody reads in a vendor comparison, and the one you live with longest.']
  ],
  takeaway:[
    'List what a prototype is missing before it can go to production (the real, live service).',
    'Treat response time as a budget spent across a chain of steps.',
    'Score providers on more than price and quality.'
  ],
  story:[
    ['c','Before you start','Keep your cost measurements from Chapter 30 and your release gate from Chapter 29 open. You will use both.'],
    ['c','On your route','Do units 20.7 and 20.8, then the capstone (the project at the end). Read the other units this time.'],
    ['p','In the last chapter, the product manager wrote the spec (the recipe card) for a system whose answers can change. This chapter is the other side of the same table: what it takes to run that system for real users.'],
    ['p','Everything you have built so far works because you are the only user, and you forgive it when it fails. Production takes away both. So here you list what that costs you.'],
    ['p','Think of cooking. A dish you cook well for two people is not yet a dish on a restaurant menu. The recipe stays the same. But now you also need steady supplies, a price that works, other cooks who can make it, and a plan for the night four hundred people order it.'],
    ['p','The units below cross that gap one piece at a time. Each one has a goal, an idea, something to prove, something to build, something to break, something to hand in, and a question to check yourself. Take them in order.'],
    ['h','Hands-on units'],
    [
      'unit',
      '20.1',
      'Production delta',
      {goal:'List everything that is missing between your notebook (where you tried things out) and a real service.',
       idea:'A real service needs many things a notebook does not. Some are about users and data: sign-in, saved data, secrets, access rules and backups. Others keep it running: retries (trying again), queues (a line of jobs waiting), monitoring, deployment and a way to roll back.',
       prove:'Write the production delta list for your own prototype.',
       build:'Sort the items into three piles: must-have, should-have and later.',
       brk:'Take away one of the controls, then describe how things would fail without it, like removing a brake from a cycle.',
       artifact:'A production delta checklist.',
       check:'What would stop you from going live tomorrow?',
       lens:'This is the bridge between how a PM thinks about delivery and what engineering has to build.'}
    ],
    [
      'unit',
      '20.2',
      'Reliability and resilience',
      {goal:'Plan for provider errors, parts that stop working and retries. Decide how the product slows down gently instead of breaking.',
       idea:'An AI system leans on services you do not control, so some of them will fail at some point, like a train line you do not own.',
       prove:'Write failure stories for the model, for retrieval (finding the right page), for the tools and for the network.',
       build:'For each one, decide the timeout (how long you wait), the retries, the fallback (the plan B) and what the user sees.',
       brk:'Pretend the provider is down. Then pretend it is limiting how many requests you can send.',
       artifact:'A table of failures and fallbacks.',
       check:'What does the user feel when only part of the system fails?',
       lens:'A product that slows down gently when something breaks can be worth more than one that uses a bigger model.'}
    ],
    [
      'unit',
      '20.3',
      'Scalability and queues',
      {goal:'Learn the difference between work done while the user waits and work done in the background. Find where a system hits its limit as it grows.',
       idea:'Not every AI job belongs in the path where the user sends a request and waits for the answer, like standing at the counter.',
       prove:'Draw a long-running job, such as taking in a big document.',
       build:'Split it into four parts: the upload, the processing, the indexing (making a quick-find list) and the status updates to the user.',
       brk:'Imagine ten times the work, and find the part that gives way first.',
       artifact:'A sketch of how the system grows, with your guesses about how much it can carry.',
       check:'Which part has to grow first, and why?',
       lens:'When you plan how much it can carry, count the model’s own limits and the quotas (the allowed amount) set by outside providers.'}
    ],
    [
      'unit',
      '20.4',
      'Deployment and environments',
      {goal:'Keep development (the practice room), staging (the dress rehearsal) and production (the real show) apart, each with settings you control.',
       idea:'A live AI system needs settings you can copy exactly, and a safe way to release changes.',
       prove:'For each environment, write down the environment variables (labelled boxes of settings), the model versions, the prompts and the index versions.',
       build:'Write a deployment checklist, and the command or steps to roll back.',
       brk:'Send a deliberately bad prompt to staging. Check that production stays exactly as it was.',
       artifact:'A plan for your environments, and a rollout checklist.',
       check:'What can change without anyone releasing new code?',
       lens:'Settings are part of the system, so they need version control (a record of every change) like everything else.'}
    ],
    [
      'unit',
      '20.5',
      'CI/CD and AI regression',
      {goal:'Put your software tests and your evaluation gates (pass-or-fail checks on answer quality) into the same automatic checks.',
       idea:'A green build is not enough if the model now behaves worse.',
       prove:'Add ordinary tests, plus your golden evaluation suite (your best answer key), to the automatic checks that run before every release.',
       build:'Decide the thresholds (the lines) that block a release.',
       brk:'Change the model, the prompt or the index. Check that the automatic checks catch the drop in quality.',
       artifact:'A spec for the automatic release checks of an AI product.',
       check:'What proof do you need before you release?',
       lens:'This is how a system whose answers change becomes something a team can deliver again and again.'}
    ],
    [
      'unit',
      '20.6',
      'Architecture Decision Records',
      {goal:'Write down the alternatives, the decision, the proof, the results that follow, and the signs that mean you should look again.',
       idea:'Treat each architecture decision as a guess you are testing, with trade-offs. Write down when you will look at it again.',
       prove:'Write a record for each of four decisions: the model, the retrieval approach, the workflow or agent (a helper that uses tools in a loop), and the storage.',
       build:'Include the options you turned down and the proof behind your choice.',
       brk:'Invent a new need that makes one of your decisions wrong.',
       artifact:'A set of architecture decision records.',
       check:'What would make you look at this decision again?',
       lens:'These records keep what the team learned safe, and they let others see how you reason as a technical PM.'}
    ],
    [
      'unit',
      '20.7',
      'Vendor and TCO strategy',
      {goal:'Compare provider and model choices on quality, cost, region (where the data sits), data controls, tooling and exit cost.',
       idea:'Choosing a vendor means balancing several goals at once, and it shapes your architecture.',
       prove:'Score at least three realistic options, or two providers plus the idea of running the model yourself.',
       build:'Work out what it would cost to move away, and to leave for good.',
       brk:'Work out what happens if the price doubles, or if a feature you rely on is taken away.',
       artifact:'A scorecard for models and vendors, with an exit plan.',
       check:'What would it cost you to switch?',
       lens:'Vendor lock-in (being stuck with one company) is a risk to your costs and to your architecture.'}
    ],
    [
      'unit',
      '20.8',
      'Technical decision pack',
      {goal:'Pack the whole system so that a design review (a meeting where others check your plan) can go through it.',
       idea:'A strong artifact (a finished piece of work) between PM and engineers lets different readers look at the same proof, each as deep as they need.',
       prove:'Cover the problem, the baseline, the architecture, the alternatives, the evaluation, the security, the cost, the rollout and the risks.',
       build:'Add one architecture diagram and one table of decisions.',
       brk:'Ask a reviewer to challenge three of your assumptions.',
       artifact:'A ten-slide technical decision pack.',
       check:'Can you defend every major box and arrow?',
       lens:'This is the bridge from your portfolio (the folder of your work) to real interviews for technical AI PM roles.'}
    ],
    ['h','Response time is a budget'],
    ['p','Now look closely at one idea, because it surprises most people. When a user waits for an answer, the wait is a chain of steps, one after the other, like beads on a thread.'],
    ['key','Response time is spent across the whole chain: retrieval (finding the right page), reranking (putting the found pages in a better order), tool calls, the model’s reasoning and the final writing. The biggest share is rarely in the step people speed up first.'],
    ['p','Think of a courier delivery. The parcel travels in legs, and the longest delay is often not the leg you expected. That is why the total time a user will wait is called a <strong>latency budget</strong>. Divide it across the steps, and check which one uses the most.'],
    ['q','I413'],
    ['p','Next, here is a way to look at the whole system, layer by layer, like floors of a building. Read across each row. The last column gives the question to ask about that layer when you review a design.'],
    [
      'tb',
      ['Layer','Typical job','The question to ask about it'],
      [
        ['Client and UI','What the user sees and does','What doubt or approval must the user see?'],
        ['Orchestrator','Remembering where things stand and picking the next step, like a conductor','Where would a fixed rule be safer than the model’s own judgement?'],
        ['Model layer','Reasoning and writing the answer','What proof backs this choice of model?'],
        ['Knowledge and tools','The data it reads and the actions it takes','Who can reach what, and how is it checked later (audited)?'],
        ['Evaluation','Quality gates (pass-or-fail checks)','What blocks a release?'],
        ['Observability','Proof of how it behaves while it runs','How would we know it got worse?'],
        ['Platform','Putting it live, growing it and keeping it safe','How does it survive heavy traffic and failures?']
      ]
    ],
    ['h','Choosing a vendor'],
    ['p','The same habit of looking at the whole picture works when you choose a provider. Most people compare price and quality, and stop there.'],
    ['key','Choosing a vendor means weighing quality, data controls, response time, cost, region, tooling, interoperability (working well with your other tools), support and exit cost. A provider that wins on quality and data controls but has a very high exit cost can trap you for years.'],
    ['p','Exit cost is the one people forget. It is the column you read least when you compare vendors, yet it is the one you live inside the longest.'],
    ['p','Teams that ship AI well keep four simple habits:'],
    [
      'l',
      ['<strong>Write down why you chose things</strong>, so nobody reopens the decision in six months.','<strong>Have a safe place to try changes</strong> before real users see them, like a practice room.','<strong>Be able to switch it off</strong> quickly, without a meeting.','<strong>Know what you would do</strong> if the provider changed its terms tomorrow.']
    ],
    ['p','The last habit is easy to say and hard to do. So try it now, on paper.'],
    [
      'try',
      {id:'ch33-reprice',
       mins:6,
       min:60,
       rows:4,
       task:'Your provider doubles its price and gives you ninety days’ notice. Write what you would do in the first week.',
       ph:'Day 1 … by the end of the week …',
       after:'If your plan needs an evaluation you do not have, then the evaluation set (your answer key) is your exit plan. That is usually the main thing you find out.'}
    ],
    ['h','Summary'],
    ['p','Let us pull it together. A prototype works because you are its only user. Production needs a list of everything the prototype lacks. That list is the production delta.'],
    ['p','You also saw that response time is a budget shared across a chain of steps. And a vendor needs more than a price and quality check. Count data controls, region, support and, above all, the cost of leaving.'],
    ['p','Next, Chapter 34 brings the whole system together in one capstone project.']
  ],
  capstone:{
    title:'Make a ten-slide decision pack',
    brief:'Now you explain the whole design to the people who must say yes. In this chapter you learned what a prototype lacks before it can go live. You learned to treat response time as a budget spent across steps. You learned to score providers on more than price and quality. Here you make a ten-slide pack for Bharat Privacy Guard. First draft it from memory. The slides you cannot write from memory are the parts you do not understand yet.',
    where:'Written work only: a slide deck or a document that uses your earlier measurements. You write no new code.',
    steps:[
      'Do not look at your notes. Write one line for each of the ten slides, saying what it will say. Mark the slides you could not write from memory.',
      'Make the ten slides: (1) the problem and what it must beat; (2) the architecture on one slide; (3) two alternatives you rejected and why; (4) the test results, with the test set named; (5) security and what remains risky; (6) cost per message and at the expected volume; (7) the rollout plan and the rollback trigger; (8) three providers scored on nine weighted criteria; (9) the decision and who owns it; (10) what you did not solve.',
      'Check each slide against your earlier documents. Fix anything that does not match.',
      'Ask someone else to present the deck using only the slides. Write down where they stopped or hesitated. Fix those slides.'
    ],
    done:[
      'The from-memory outline, with the weak slides marked.',
      'Ten slides in the order above.',
      'A provider scorecard that counts the cost of leaving.',
      'Proof that someone else could present the deck from the slides alone.'
    ]
  }
},

/* --------------------------------------------------------------- 34 / bk 21 */
{
  id:'ch21cap', num:34, part:5, curriculumTier:'core', phase:6, prerequisites:['ch20d','ch18s'], nextUnits:[], minutes:1800, labs:['redmap'],
  title:'Capstone: discover, build, break, measure, ship and defend a system',
  concept:'This is one capstone (the big final project), not two. Take a real problem with users you can reach. Carry it from the first talk with users, through a live launch, to a defence in front of executives and engineers. You build one applied AI system, break it on purpose, and measure what you fixed. Then you show it works as a product, not only as a demo.',
  plan:{
    first:'Do not start with slides. Your problem is Bharat Privacy Guard. Gather what you already have: the repository (an online folder that remembers every change), the issue list and the evaluation dataset (your questions with right answers). Then build the smallest slice that works from start to finish, like one thin cut through a whole cake.',
    build:'Grow Bharat Privacy Guard into one finished product. Give its rule-keeper two forms: a fixed workflow (a set recipe) and an agent (a helper that uses tools) with a step limit. A person approves risky actions. Add structured outputs (a form with fixed boxes), one input that is not text, an evaluation harness (the test rig), tracing and cost tracking. Add security controls. Then test it with real users and improve it.',
    brk:'Break it on purpose in at least ten kinds of failure: a question with no answer, a poisoned document, prompt injection (a hidden note that says "ignore your teacher"), an unauthorised tool request, a malformed tool call, a stale permission, a multilingual query, a poor scan or audio, a model swap, and a rise in traffic or cost.',
    artifact:'The running system, a live URL with real users, and an evidence pack (a folder of proof). The pack holds the PRD (the recipe card for the product), the architecture, the threat model, the evaluation plan, the dashboard, the unit economics, the decision log, the rollout and rollback plan, the vendor scorecard and an explanation for executives.',
    gate:'Show three failures you found yourself, three improvements with numbers, evidence from real users, unit economics that hold up (the money maths per task), the risks that remain, and what you chose not to solve.'
  },
  needs:[
    ['Everything in Part V','The capstone brings all of it together, like the final dish made from every lesson.',33],
    ['A release gate (a check before launch) and a risk register','Chapters 29 and 31 give you the evidence you will defend with.',31],
    ['Track A\'s discovery and strategy artifacts (the papers you made there)','They help, but you can start without them. If you have them, the discovery and design stages reuse them.','A7']
  ],
  words:[
    ["Findings document",'A plain, true record, like a repair report: what broke, the evidence, the root cause (the real reason), the fix, and what you chose not to solve. It is the opposite of a brochure.'],
    ["Failure class",'A kind of failure, not one single example. Think of a pile in your complaint sorting. Ten classes make ten tests that mean something, instead of ten stories.'],
    ["Residual risk",'The risk that is left after a control (a safety step) is in place. You say it out loud instead of leaving people to guess.'],
    ["Evidence pack",'A folder of proof (a set of artifacts) that lets somebody else check your claims, like showing your working in a maths exam, instead of just asking to be trusted.'],
    ["Kill criteria",'The stop sign you write down before you need it. It tells you when to stop. Without it, you keep working on a problem the evidence says will not work.']
  ],
  takeaway:[
    'Take a real problem, with users you can reach, from the first talk all the way to a live product.',
    'Explain a system you built from the ground up, without a framework (ready-made code) doing the explaining for you.',
    'Show before-and-after numbers for the failures you found and fixed, and for the users who used it.',
    'Defend the business case as carefully as the architecture. That means unit economics (money per task), growth and vendor risk (what if your model company changes).',
    'Say clearly what you chose not to solve.'
  ],
  story:[
    ['c','Before you start','The full version takes about thirty hours, over four to six weeks. It brings the whole course together, like the final exam project of a school year. The technical capstone and the product, business, real-user and defence work are now one project, not two.'],
    ['c','On your route','Your problem is chosen: Bharat Privacy Guard. Stages 34.1 to 34.3 are in your repository. The route gives this chapter about eight hours. Do five stages: 34.4 put the system together, 34.5 run the release gate (the check before launch), 34.6 break it three ways, 34.9 write the cost, 34.11 write the findings. Show it to three to five people if you can (34.8). The rest comes later.'],
    ['p','In the last chapter you saw what it takes to run an AI system for real users. Now you do the whole thing yourself. You start with the first talk with a user and end with the final defence.'],
    ['p','First, gather every artifact (every paper or file) you made in Part V. These are the harness (the test rig), the model selection card, the context budget (how much fits on the model\'s desk) and the retrieval architecture. Also the tool policy, the release gate, the dashboard, the risk register, the PRD and the decision pack. Every stage below reuses one of them.'],
    ['p','You may have done some of Track B\'s optional modules too. If so, reuse them. B1\'s cost model fits the measure stage. B3\'s tracking plan fits the ship stage, and so do B6\'s user sessions. B5\'s release checklist fits the observe stage. You do not need any of them to start.'],
    ['p','What do you get at the end? A system you can explain without leaning on anyone\'s framework. Real users who have used it. And an honest page about what broke when you tested it and what it costs to run.'],
    ['p','This matters because employers ask three things. What can you build? Did anyone want it? What goes wrong, and what do you do about it?'],
    ['c','The brief','Your problem is Bharat Privacy Guard, and you can reach its users within two weeks. Go through eleven stages, like eleven stops on a train line: discover, define, design, build, evaluate, break, observe, ship, measure, iterate and defend.'],
    ['p','Build one applied AI system that joins at least four skills from Part V. A good start is retrieval that respects permissions, tool calling, one helper step that has a step limit, evaluation, tracing and security tests. Ship it to real users before you defend it. It should be one journey, like one trip from home to school, not a pile of separate demos.'],
    ['lab','redmap'],
    ['h','The eleven stages'],
    ['p','The table below lists the eleven stages in order, like the stops on a route map. They are the detail inside stage 12 of the thirteen stages on the project page. For each one, the second column says what proof you must have before you move on. Read it once now, and come back to it as you work.'],
    [
      'tb',
      ['Stage','Required evidence'],
      [
        ['34.1 Discover','Five interviews, a jobs-to-be-done statement (the job the user hires the product to do), a scan of the market and competitors, and a problem brief backed by evidence.'],
        ['34.2 Define','The user, the pain, the baseline (where things stand today), the scope, the non-goals (what you will not do), the data, the tools, the risks, and a measurable acceptance criterion (a number that says it works). Together these are your capstone AI PRD.'],
        ['34.3 Design','A one-page product and system design, plus the vision, strategy, roadmap (what comes first, next and later) and OKRs (goals with numbers), a stakeholder map (who cares and who can block), a pricing hypothesis (your guess at the price) and your kill criteria.'],
        ['34.4 Build','Working code, tests, versioned prompts and settings (every change saved with a number), an architecture diagram and a threat model (a list of how someone could attack it).'],
        ['34.5 Evaluate','30 to 50 evaluation cases (questions with right answers), traces, and measurements of retrieval, answers, tools, safety, latency (waiting time) and cost.'],
        ['34.6 Break','At least ten deliberate failure tests, saved before you fix anything.'],
        ['34.7 Observe','A security go/no-go checklist (a list that says launch or hold), and a dashboard (one screen of numbers) with six panels connected to real traces.'],
        ['34.8 Ship','A live URL, monitoring, 5 to 10 real users, a support log and a timed rollback test (undo a change and time it).'],
        ['34.9 Measure','Before-and-after numbers for your optimisations, ADRs (short notes on why you chose something), and a unit-economics model at base usage and at high usage.'],
        ['34.10 Iterate','One improvement based on evidence, before-and-after product and AI metrics (numbers you watch), and an entry in the decision log.'],
        ['34.11 Defend','A ten-slide deck for executives, a twenty-minute technical defence and a public case study (a short story of your project).']
      ]
    ],
    ['key','A portfolio project is believable when you can explain its failures, show that someone wanted it, and say what it costs to run. Anyone can show a system that works on the demo path, the way a shop only shows its best shelf.'],
    ['h','Hands-on units'],
    ['p','Now the units. Each one covers a single stage, with the same rows every time: the goal, the idea, what to prove, what to build and what to break. Then come what to hand in, a question to check yourself, and why it matters. Do them in order, because each one feeds the next, like links in a chain.'],
    [
      'unit',
      '34.1',
      'Discover: a real problem with reachable users',
      {goal:'Find a problem with a group of users you can actually reach. Write a problem brief (a short paper about the problem) backed by evidence.',
       idea:'The best capstones come from a job you have done, a team you know or a community you belong to. Look for a problem that comes up often, costs real time or money, and is solved badly today.',
       prove:'Score your problem on four tests. Can you reach users? That means: can you book five interviews this week? Does it happen often? Is it costly? And does it need AI, not just a form or a formula?',
       build:'Run five interviews. Write a jobs-to-be-done statement and a journey map (the user\'s trip, step by step), and scan the market and the competitors.',
       brk:'Challenge your idea with the question "why not ordinary software that always gives the same answer?" If a form would solve the problem, it is not a capstone.',
       artifact:'A problem brief backed by evidence, with a jobs-to-be-done statement.',
       check:'Can you trace each claim in your problem brief back to an interview note? Can you name one assumption (a guess you believed) that the evidence changed?',
       lens:'If nothing you believed changed after five interviews, you may have heard only what you expected to hear.'}
    ],
    [
      'unit',
      '34.2',
      'Define the problem and PRD',
      {goal:'Turn the problem into a system with acceptance criteria (numbers that say it works) you can measure.',
       idea:'A capstone becomes believable when the problem is clear and the cost of failure is clear too.',
       prove:'Write the problem for Bharat Privacy Guard: who the user is, what goes wrong for them today, and the number that would show it is fixed.',
       build:'Write down the user, the pain and the baseline (where things stand today). Then write the scope and the non-goals (what you will not do). Then write the data, the tools and the risks. Last, write the metrics (numbers you watch).',
       brk:'Ask "why not ordinary software that always gives the same answer?" again. This time, ask it about your actual scope, not the general case.',
       artifact:'The capstone AI PRD (the recipe card for your product).',
       check:'Can you say the business outcome (what the business gains) in one sentence?',
       lens:'This is the anchor (the heavy weight that holds a boat) for the product. Everything below hangs from it.'}
    ],
    [
      'unit',
      '34.3',
      'Design the product and the system together',
      {goal:'Put the product decision and the technical decision on one page, because each one limits the other.',
       idea:'Whether a user needs an answer in two seconds or by Monday decides the architecture. And whether the architecture can hit a target decides what you can promise.',
       prove:'Fill in a design with nine lines. The first three are the user and the job, the activation moment (when the user first gets value) and the AI approach. Then add why not an agent, the evaluation and the boundaries. Last come the cost and the North Star (the one number that guides you).',
       build:'Add the vision, the strategy, the roadmap, the OKRs, a stakeholder map, a pricing hypothesis, and your kill criteria, which is the stop sign that tells you when to stop.',
       brk:'Find one line in your design that you chose because it was interesting, not because it was needed, and cut it.',
       artifact:'A one-page product and system design, plus a stakeholder map.',
       check:'Does every technical choice on the page link to a product reason? Does every product choice link to something the system can really do?',
       lens:'Kill criteria written now, before you get attached to the idea, are the ones you will really honour.'}
    ],
    [
      'unit',
      '34.4',
      'Build the vertical slice',
      {goal:'Build the smallest system that works from start to finish, before you add anything clever.',
       idea:'A vertical slice (one thin cut through every layer, like a slice of layered cake) proves the architecture holds from end to end. A threat model added afterwards is an excuse, not a control.',
       prove:'Build the path from input, to retrieval and context, to the model, to a structured answer, to a citation (a note saying where the answer came from). Write the threat model alongside the first version, not after it.',
       build:'Add a tool only when you need one. Keep the repository easy to copy and run, with a README, a requirements file (a list of what to install) and a command that runs it the same way every time.',
       brk:'Ask a question that has no answer, and record how the system fails. This is your baseline (where you start).',
       artifact:'A running repository, architecture v1 and a threat model.',
       check:'Can you run the system from a clean environment? Could someone else repeat your experiment without asking what you did by hand?',
       lens:'A small system that works beats a large diagram, like a small shop that is open beats a big plan for a shop.'}
    ],
    [
      'unit',
      '34.5',
      'Add evaluation and observability',
      {goal:'Turn the capstone into something you can measure, like a child\'s height marked on the wall.',
       idea:'Every change should leave evidence behind, like footprints.',
       prove:'Create 30 to 50 evaluation cases (questions with right answers) and collect traces.',
       build:'Add measurements for retrieval, answers, tools, safety, latency (waiting time) and cost.',
       brk:'Change the model, the prompt or the index, and reproduce the drop in quality.',
       artifact:'A golden dataset (questions with trusted right answers), an evaluation harness and an observability report.',
       check:'Can you explain why the latest version is better?',
       lens:'This is where the project turns into engineering evidence.'}
    ],
    [
      'unit',
      '34.6',
      'Break it deliberately',
      {goal:'Reproduce at least ten failure classes (ten kinds of failure).',
       idea:'A portfolio project is more believable when you can explain what broke.',
       prove:'Test each of these. A question with no answer. A poisoned document. Prompt injection (a hidden note that says "ignore your teacher"). An unauthorised tool. A malformed tool call. A stale permission. Multilingual input. A poor scan or audio. A model swap. A rise in traffic or cost.',
       build:'For each failure, capture the evidence, find the root cause (the real reason) and note the control (what stops it next time).',
       brk:'Do not fix anything straight away. First, save the failure as it happened, like a photo of the scene.',
       artifact:'A security and red-team report (attacks you tried on your own system), plus a table of failure findings.',
       check:'Which three failures surprised you?',
       lens:'Your failure log is often worth more than your happy-path demo (the demo where nothing goes wrong).'}
    ],
    [
      'unit',
      '34.7',
      'Observe: prove it is inspectable before real users touch it',
      {goal:'Prove that you can see inside the system, and that its risk has limits, before you ship it to a real user.',
       idea:'If you cannot observe a system, you are guessing about it, however good the demo looks. It is like driving with the dashboard covered.',
       prove:'Run the security release-gate checks and the observability thresholds (the lines you must not cross) against the current build.',
       build:'Connect a six-panel dashboard to the real traces from your evaluation and break stages. The panels are quality, safety, latency, cost, traffic and failures.',
       brk:'Take one signal off the dashboard, and see which incident (a problem that happens) becomes invisible without it.',
       artifact:'A security go/no-go checklist and an observability dashboard.',
       check:'Which alert should wake a human, and which should only be written in the log?',
       lens:'A stakeholder will ask, "how would you know if this broke at 2am?" This stage is your answer.'}
    ],
    [
      'unit',
      '34.8',
      'Ship to real users',
      {goal:'Launch to a real group of users, and prove that the rollback (the undo button) really works.',
       idea:'Real users teach you more than more theory. Five to ten watched sessions beat another week of polishing on your own.',
       prove:'Put it on a stable live URL with monitoring, analytics (counting how people use it), a privacy notice, a way for users to send feedback, and a rollback procedure.',
       build:'Recruit five to ten real target users. Watch at least five sessions, and keep a support log from day one.',
       brk:'Test your rollback for real before launch. Release a harmless change, undo it, and time it. A rollback you have never tried is only a plan.',
       artifact:'A live URL, a support log, a funnel or cohort view (how users move through, or groups of users over time), and a timed rollback test.',
       check:'Do you have evidence from real users, not just demo traffic from your teammates?',
       lens:'A system that is beautifully evaluated but never used by anyone has not passed this stage yet.'}
    ],
    [
      'unit',
      '34.9',
      'Measure: optimize and quantify unit economics',
      {goal:'Apply targeted fixes, measure before and after, and show that the money works at scale (when many people use it).',
       idea:'An optimisation (making something better) means something only when you can see the difference it made. And the idea is viable (it can survive) only when you can also see the cost of each successful task.',
       prove:'Try reranking (re-sorting the found pages), restructuring the prompt, validating against a schema, caching (keeping answers to reuse), routing or trimming the context, wherever it makes sense. Then work out the model cost per successful task at low, base and high usage.',
       build:'Change one thing at a time, and rerun the part of the evaluation that matters for it.',
       brk:'Keep a fix that improves one metric but makes another worse, and write down the trade-off (what you gave up). Then check what happens to your margin (profit per task) at ten times the volume.',
       artifact:'A before-and-after optimisation report, ADRs and a unit-economics model.',
       check:'Which improvement is big enough to matter, in the numbers or in real life? Does revenue (money coming in) grow faster than the cost of running the model and supporting users?',
       lens:'Avoid "optimization theater" (looking busy without real gains). Also avoid a model that works only at your current, subsidised scale (a price someone else is paying for you).'}
    ],
    [
      'unit',
      '34.10',
      'Iterate from evidence',
      {goal:'Ship one improvement that is based on evidence, and log the decision behind it.',
       idea:'An iteration (one more round of improving) earns its place only when it is tied to a problem you measured, not a hunch.',
       prove:'Pick the lowest-scoring evidence question from the earlier stages, and ship one change aimed at it.',
       build:'Compare the product and AI metrics before and after. Then write the decision into the decision log: the context, the options you considered, the approach you chose, the trade-offs, and what would make you reopen it.',
       brk:'Ask someone to push back on the iteration you shipped, and answer with the metric, not with opinion.',
       artifact:'A changelog (a list of what changed) and one filled-in decision-log entry.',
       check:'Can you tie the iteration to a problem you measured, not a preference?',
       lens:'If the decision log is still empty at this stage, then every choice so far went unwritten. That is the first thing a reviewer will ask about.'}
    ],
    [
      'unit',
      '34.11',
      'Defend the system',
      {goal:'Present the architecture, the evidence, the security, the cost, the viability (can it survive) and the risk that remains, to two different audiences.',
       idea:'The last skill this course tests is explaining and defending the system you built.',
       prove:'Prepare a five-minute briefing for executives and a twenty-minute technical defence.',
       build:'Build a ten-slide deck and a public case study. Cover the problem and the evidence that it is real. Then say what you built, whether it works, whether it is safe, whether people use it, and whether it makes money. Finish with what failed, the trade-offs, and what you are asking for next.',
       brk:'Ask a peer to challenge your model choice, your agent choice, your security and your cost assumptions.',
       artifact:'The final repository, architecture, PRD, risk register, evaluation pack, observability dashboard, vendor scorecard, decision log, executive deck and public case study.',
       check:'Can you explain every major decision without saying "the framework handles it"?',
       lens:'This is the credential (the proof of skill) you carry into interviews and design reviews.'}
    ],
    ['q','I414'],
    ['try',{id:'b8-defend',mins:12,min:120,rows:6,
      task:'Write your answer to the hardest question you expect in the defence (the final round where you explain your work). For example: “Why should we believe this works beyond your ten design partners?”',
      ph:'What we know… what we do not know yet… what we would do next…',
      after:'A strong answer keeps what is known apart from what is not, like two piles on a table. For example: <strong>We know</strong> that 8 of 10 design partners used it for four weeks in a row, and that precision held at 86% on their real tickets. <strong>We do not know yet</strong> whether it holds for teams on other helpdesks, or with more than 5,000 tickets a week, because none of our partners had those. <strong>Next,</strong> we would add two partners from each missing group, with the same eval set and thresholds, before any wider launch. The answer admits what it does not know and gives a clear way to find out.'}],
    ['h','When you are done'],
    ['p','How do you know you are finished? Check this list, like a packing list before a trip. You are done when every line is true.'],
    [
      'l',
      ['It runs on a machine that is not yours, at a live URL.','Anyone can rerun the tests and get the same numbers.','You have broken it in at least three real ways, on purpose.','Three of your fixes have before and after numbers.','You attacked your own safeguards (the things meant to protect it) and wrote down what happened.','You know how to roll it back (undo it) if something goes wrong, and you have timed it.','Five to ten real users have used it, and you have their evidence, not a teammate\'s.','You can state cost per successful task, and what happens to margin (profit per task) at ten times the volume.','At least one iteration is tied to measured evidence, and written in the decision log.','You can explain every major choice without saying "the framework handles that".']
    ],
    ['h','Final self-test'],
    ['p','One last exercise, like a quiz you give yourself. Answer these from memory, out loud if you can. If you get stuck on one, go back to the chapter that covers it.'],
    [
      'l',
      ['Why is the model stateless (like a goldfish that forgets)?','Why can retrieval fail, and why do embeddings (an address for meaning) help?','Why does retrieval never say "nothing here" on its own?','Why is top-k (how many pages you pick) a trade-off?','When does a workflow beat an agent?','Why are tools a security boundary (a fence)?','Why must evaluation come before release, and why does tracing matter?','How do you work out cost per successful task, not per call?','What makes an AI specification (the spec, a recipe card) different from a normal one?','Who is your buyer, and does your price cover what the model costs you?','What would make you kill this project rather than keep iterating on it?']
    ],
    ['p','If you can answer all of these, you have done what the course set out to do. You can build an AI system, break it, measure it, and stand behind it.'],
    ['p','This was the last required chapter. Next, Track B begins with B1, on business models, pricing and unit economics. Later, B7 turns what you just built into stories for interviews. The appendices turn your artifacts (the papers you made) into reusable portfolio templates.']
  ],
  capstone:{
    title:'Ship Bharat Privacy Guard, and write the findings document',
    brief:'This is the last capstone of the technical course. Everything you made now comes together in one repository and one document. Keep the document plain and true. A findings document that reads like a brochure is not doing its job. Describe the project as "a privacy tool that helps an organisation collect and share less personal data". Never say it makes anyone compliant.',
    where:'Your repository, with the working system and its README (the first page that says how to run it), plus a written findings document. You hand in both together.',
    steps:[
      'Make the repository work on a clean machine. Someone else must be able to clone it (copy it down), follow the README and run the answer key (your questions with right answers).',
      'Add the architecture diagram (a map of the parts) and the decision log (a diary of why you chose what).',
      'Add the final answer key and the scoreboard from before and after your fixes.',
      'Add the results of the attacks you tried in Chapter 13, and a few sample traces (the step-by-step record of one run).',
      'Add the workflow-versus-agent table from Chapter 26 for the rule-keeper. Say which one ships, and name the number that decided it.',
      'Add the cost and speed at the volume you expect. Then say what changes at ten times the volume.',
      'Add the requirements, the risk register (a list of what could go wrong), the system card (a fact sheet about the system) and the rollout and rollback plan.',
      'Add real-user evidence: notes from sessions with three to five people who are not your teammates on the route (five to ten in the full version). Add the one change you made because of them.',
      'Write the findings document. Say what you built, what broke, who used it and what the evidence shows. Include three failures you found yourself, each with evidence. Include three fixes, each with numbers from before and after.',
      'End with what is still risky and what you left out on purpose, such as other Indian languages, the gateway and the browser extension.'
    ],
    done:[
      'A repository that works on a clean machine.',
      'Three failures you found yourself, each with evidence.',
      'Three fixes, each with before and after numbers.',
      'A table that compares the fixed workflow and the agent, with the number that decided which one ships.',
      'Evidence from three to five real users on the route (five to ten in the full version), who are not your teammates.',
      'The cost per message (like the price of one SMS), and what happens to it at ten times the volume.',
      'A five-minute talk a non-technical leader could repeat, and a twenty-minute talk that an engineer cannot easily poke holes in.'
    ]
  }
}

];

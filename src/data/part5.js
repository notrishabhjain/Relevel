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
  concept:'An AI system is a software system with one unpredictable part. In this chapter you’ll learn the software that sits around that part: Python, HTTP and JSON, secrets, Git, logs and tests. Along the way you’ll build an experiment harness, a small tool you’ll reuse for the rest of Part V.',
  plan:{
    first:'Before you read any further, open a notebook and write a short Python program. It should read some JSON, call an HTTP endpoint, handle a failure status and write JSON back out.',
    build:'Turn that program into an experiment harness. For every run, it should record an id, a timestamp, the model, the prompt, the response, the latency, the usage and any errors.',
    brk:'Now try to break it. Feed it malformed JSON, a missing field and a timeout, then a 429 and a 500. Watch which of these it survives.',
    artifact:'A Git repository that holds the harness and its tests.',
    gate:'Pick one failure and trace it from the input that caused it all the way to the error it produced.'
  },
  needs:[
    ['An API call is a request and a reply','You’ve been making these since Chapter 1. This chapter looks at the software around them.',1],
    ['You pay for everything you send','So it’s worth building, once, a harness that records usage.',1]
  ],
  words:[
    ["Contract","An assumption your code makes about the data it receives. For example, that a field exists, that it’s a number, or that a list isn’t empty. Each of these assumptions will be wrong one day."],
    ["Status code","The number a server sends back to say what happened. 200 means it worked, 4xx means you got something wrong, and 5xx means the server did."],
    ["Stack trace","The list of calls that were in progress when something failed, with the innermost call first. It tells you where the failure happened, not why."],
    ["Experiment harness","A small tool that records every run in exactly the same way: the request, the response, the latency, the usage and any error. That way two runs can really be compared."]
  ],
  takeaway:[
    'Read a request, a response, a status code and a stack trace with confidence.',
    'Explain why an AI system is a software system with one probabilistic part.',
    'Name where the engineering risk in an AI feature really sits.'
  ],
  story:[
    ['c','Before you start','Open a new notebook, or a local folder if you prefer. In this chapter you’ll build an experiment harness, and you’ll keep adding to it until Chapter 34.'],
    ['p','So far you’ve spent most of your time looking at the model. In this chapter we look at the ordinary software around it. The aim is simple: when an engineer shows you a system diagram, you should recognise every box on it.'],
    ['p','Think about ordering food in an app. Your tap sends a message to a restaurant. A reply comes back with a price, and your screen updates. It all looks mysterious until you see the messages going back and forth. Software around an AI model works the same way.'],
    ['c','Why this matters','Applied AI work involves APIs, Python, cloud services, retrieval, evaluation and production systems. If JSON, HTTP, environment variables, tests and logs are unfamiliar, you can’t question an architecture. This chapter gives you the minimum you need.'],
    ['key','An AI system is a software system with a probabilistic part. Everything that goes wrong in normal software can still go wrong here. On top of that, there’s one more kind of failure, and it produces no error at all.'],
    ['h','Hands-on units'],
    ['p','There are five small units below. Each one has a goal, an idea, something to prove to yourself, something to build, a way to break it, and something to keep. Work through them in order, because each one builds on the one before.'],
    [
      'unit',
      '8.1',
      'Python as an experiment instrument',
      {goal:'You’ll learn to write small Python programs with functions, lists, dictionaries and loops. You should know them well enough to change an experiment yourself, without depending on code someone else generated.',
       idea:'Think of Python as your lab notebook. The goal is to describe an experiment precisely, not to master the language.',
       prove:'Create a few variables, a function, a loop and a dictionary. Print each result along the way so you can see what’s happening.',
       build:'Write a script that reads ten questions from a list and records a result object for each one.',
       brk:'Pass in a missing key, an empty list and a value of the wrong type, on purpose. Look at the errors you get.',
       artifact:'A file called <code>chapter-8/python-basics.py</code>, plus a one-page log of the errors you saw.',
       check:'Can you explain a function, a dictionary, a loop and an exception without opening any documentation?',
       lens:'Write the harness in your own code first, before you bring in a framework.'}
    ],
    [
      'unit',
      '8.2',
      'HTTP, JSON and API contracts',
      {goal:'You’ll understand requests and responses, status codes, headers, JSON payloads, and what it means when a contract fails.',
       idea:'An AI API is still just an API. The model is probabilistic, but the network interface around it is ordinary software engineering.',
       prove:'Call a safe public JSON endpoint. Print the status code and two of the fields it returns.',
       build:'Make a fake endpoint response that has missing fields and unexpected fields, and handle both cases.',
       brk:'Simulate a 401, a 404, a 429 and a 500. For each one, decide whether it’s worth trying again.',
       artifact:'An API contract sheet that lists the request, the response, the errors and the retry policy.',
       check:'What’s the difference between a bad request, an unavailable dependency and a server failure?',
       lens:'This is the vocabulary you need when someone says “the API failed” and expects that to be the whole explanation. It lets you ask what actually happened.'}
    ],
    [
      'unit',
      '8.3',
      'Environments, secrets and Git',
      {goal:'You’ll use environment variables and secrets, set up a virtual environment, and follow a basic Git workflow.',
       idea:'A prototype that leaks a key, or that nobody else can reproduce, isn’t something an engineer can take seriously.',
       prove:'Store a secret outside your source code. Print only a masked prefix of it, never the whole thing.',
       build:'Create a repository with a README, a requirements file and one command that runs the experiment the same way every time.',
       brk:'Commit a change that you know is broken. Find it, and then go back to the last version that worked.',
       artifact:'A repository skeleton that anyone can reproduce, with a <code>.gitignore</code>, a README and an experiment log.',
       check:'Could another person run your experiment without asking you what you did by hand?',
       lens:'Reproducibility matters to a PM because it turns a demo into evidence.'}
    ],
    [
      'unit',
      '8.4',
      'Errors, logging and tests',
      {goal:'You’ll learn to read stack traces, add structured logs, and write small tests.',
       idea:'You judge an AI system by what happens when things go wrong, not only when everything goes smoothly.',
       prove:'Write three tests: one for an expected answer, one for missing input, and one for a malformed response.',
       build:'Add a request ID, a timestamp, the model and the status to every experiment record.',
       brk:'Force a timeout, and force a malformed output. Trace each failure from the input to the exception it caused.',
       artifact:'A mini test suite, plus a failure log that notes the root cause and the fix for each failure.',
       check:'Can you tell an application bug apart from a failure on the provider’s side or in the model?',
       lens:'This becomes the base for evaluation and observability later in the course.'}
    ],
    [
      'unit',
      '8.5',
      'Build the experiment harness',
      {goal:'You’ll create a reusable runner that records the inputs, the outputs, the configuration, the latency and any errors.',
       idea:'The harness is the bridge between “I tried it” and “I measured it.”',
       prove:'Run one prompt twice, and save both runs as structured JSON.',
       build:'Add the experiment name, the version, the model, the prompt version, the input and output tokens when they’re available, the latency, and a field for notes.',
       brk:'Change one thing, and check that the logs make the comparison between the two runs obvious.',
       artifact:'A folder called <code>experiment_runner/</code> with a schema, the runner, some sample runs and a README.',
       check:'Can you reproduce yesterday’s result, and explain what changed since then?',
       lens:'Every later chapter should plug into this harness. None of them should invent its own way of recording evidence.'}
    ],
    ['q','I401'],
    ['h','Contracts fail silently'],
    ['p','Every AI application leans on a lot of small assumptions about its data. This field will be there. That value will be a number. This list won’t be empty. Each of these is a <strong>contract</strong>, and in production every one of them will be broken sooner or later.'],
    ['key','A production system has to notice when a contract is broken, instead of carrying on. Many real AI incidents look like this: nothing raised an error, and the answer was built on missing data.'],
    ['h','What “enough” means'],
    ['p','You don’t need to become a backend engineer. You have enough when you’re comfortable with all of the following.'],
    [
      'l',
      ['You can write a small function, and keep a few labelled values together in a dictionary.','You know your <strong>status codes</strong>: 200 means it worked, 4xx means the request was wrong, and 5xx means the server failed.','You know what <strong>JSON</strong> is: labels and values, which is the format most systems use to exchange data.','You keep a password or API key out of your code, in an environment variable instead.','You save your work in Git, so you can go back to an earlier version.','You read an error message from the bottom up, because that’s where the real cause usually is.','You can write a test that fails on purpose, so you know it really does check something.']
    ],
    ['p','There are two more ideas that are useful to understand, though you don’t need to write them yourself. One is background jobs. The other is queues, which hold work until something is free to process it.'],
    ['p','Let’s test how much you already understand about a real feature.'],
    [
      'try',
      {id:'ch21-guess',
       mins:6,
       min:60,
       rows:4,
       task:'Think of the last AI feature you saw demonstrated. In plain words, write down what its request probably contained and what its response probably looked like. Where are you guessing?',
       ph:'The request probably contained … The response probably … I am guessing about …',
       after:'The places where you had to guess are the questions to ask the team that built it. Being able to produce that list is the main skill this chapter teaches.'}
    ],
    ['h','Summary'],
    ['key','A model API call is a normal software dependency. The engineering risk sits in the interfaces, the error handling, the secrets, the retries, the monitoring and the contracts, at least as much as it sits in the model.'],
    ['p','You now know the everyday software that surrounds a model, and you have a harness that records each run the same way. Next, in Chapter 22, you’ll use that harness to compare models.']
  ],
  capstone:{
    title:'Build the test harness and keep it in Git',
    brief:'From here on, almost every chapter asks you to run the tool on the answer key and compare the result with last time. If you set the test up again each time, the comparisons stop being fair. In this chapter you learned to read requests, responses and errors, and that an AI system is a software system with one unpredictable part. Now you’ll build the harness once, put it in Git, and keep adding to it for the rest of the course.',
    where:'A new notebook, or a local folder if you prefer. This is the harness you build in code and keep extending through Chapter 34. The notes box below is for what surprised you, not for the code.',
    steps:[
      'Write a function of about twenty lines that reads your answer key (a CSV file) and returns its rows. Let it filter by one column, for example “only the Hinglish rows”.',
      'Add three tests for it: one with a normal file, one with a row that has a missing field, and one with an empty file.',
      'Write a function that runs one sentence through your current pipeline and saves a JSON record of the run. The record holds the sentence, the findings, the time, the tokens and any error.',
      'Write a function that compares the findings with the answer key and prints recall and precision for each kind of ID and each kind of writing. This is the scoreboard you made by hand in Chapter 6.',
      'Create a Git repository, commit the harness, and write a README that explains how to run it on a clean machine.',
      'Break one thing on purpose, such as a bad key, a time-out or a broken reply. Then check that the record is still written, with the error in it.'
    ],
    done:[
      'A repository that someone else can clone and run.',
      'Three tests that pass, one of which covers a failure.',
      'A scoreboard printed from the answer key.',
      'One saved record from a run that failed.'
    ]
  }
},

/* ---------------------------------------------------------------- 22 / bk 9 */
{
  id:'ch9m', num:22, part:5, curriculumTier:'core', phase:3, prerequisites:['ch2','ch6','ch8f'], nextUnits:['ch10c'], minutes:55, labs:['costmodel'],
  title:'Choosing a model: benchmark on your own cases',
  concept:'A leaderboard measures someone else’s task. In this chapter you’ll learn what really changes when you change the model. Then you’ll benchmark models on your own ten cases, and write a model selection card that records the evidence for your choice.',
  plan:{
    first:'Pick two models that you can use. Before you test anything, write down which one you expect to win on quality, which on speed, and which on cost.',
    build:'Run a ten-case benchmark. It should cover factual recall, reasoning, extraction, multilingual text and refusal behaviour.',
    brk:'Change one thing at a time: the model, the sampling, or the prompt. Then work out which change really caused which effect.',
    artifact:'A Model Selection Card. It records quality, latency and cost, and it names the fallback for when your first choice is unavailable.',
    gate:'Recommend a model based on evidence, and defend your choice against someone who prefers a different one.'
  },
  needs:[
    ['Temperature controls variation','You tested it in Chapter 2. Here it’s just one variable among several.',2],
    ['Write the answer key before measuring','Without an answer key, a benchmark doesn’t tell you much.',6],
    ['An experiment harness that records runs','You built it in Chapter 21, and this chapter is the first to use it.',21]
  ],
  words:[
    ["Inference","Running a trained model to get an answer. It’s different from training, which is the work that produced the model in the first place. Inference is the part you pay for, on every request, for as long as the product runs."],
    ["Sampling","The way the model picks the next word-piece from the several that it thinks are plausible. Temperature is one way to control it."],
    ["Benchmark","A fixed set of cases that you run against more than one option, so that the comparison means something. Somebody else’s benchmark will predict how your task goes only by coincidence."],
    ["Model selection card","A one-page record of which model you chose, what evidence you chose it on, what constraint applied, and what runs instead when that model is unavailable."]
  ],
  takeaway:[
    'Explain what changes when you change the model, beyond a benchmark score.',
    'Say when retrieval, prompting and fine-tuning are each the right choice.',
    'Write a model recommendation that answers the question “measured how?”.'
  ],
  story:[
    ['c','Before you start','Open the experiment harness you built in Chapter 21. You’ll run the same ten cases on two or three models.'],
    ['p','In the last chapter you built a harness that records every run in the same way. Now you’ll put it to use. A leaderboard shows how a model did on someone else’s task. In this chapter you’ll get your own numbers, on your own questions, in one afternoon.'],
    ['p','Think about buying a car. An award doesn’t tell you whether the car fits your family, suits your roads, or what it costs to run. So you take it for a test drive. Few teams test-drive their models, and that’s the gap this chapter closes.'],
    ['key','Models differ on several things at once: capability, speed, context size, tool use and cost. A model that wins on one of these can lose on another. Which one matters most depends on your use case.'],
    ['h','Hands-on units'],
    ['p','There are six short units below. They start with what a model does when it answers, and they end with the one-page card that records your decision. Go through them in order.'],
    [
      'unit',
      '9.1',
      'What an LLM is doing at inference',
      {goal:'You’ll be able to explain tokens, how a transformer-based model processes its context, how it generates an answer, and the difference between training and inference.',
       idea:'Inference is the stage where the model does its work. It receives the context and generates the output. Training is different, because training is what changes the model’s parameters.',
       prove:'Compare two prompts with different context lengths. Record the input and output token counts and the latency for each.',
       build:'Make a small table of context length against the latency and cost you observed.',
       brk:'Add some irrelevant context. See whether the cost, the latency or the quality of the answer changes.',
       artifact:'An inference observation sheet.',
       check:'Why isn’t a larger prompt automatically a better prompt?',
       lens:'Before anyone debates which model brand is better, ask the engineers where the cost and the latency are really coming from.'}
    ],
    [
      'unit',
      '9.2',
      'Sampling and output variability',
      {goal:'You’ll understand the sampling controls as ways of shaping a probability distribution, not as “creativity sliders.”',
       idea:'Lower sampling settings generally reduce variation. But they don’t turn a model into a system that is guaranteed to be deterministic or factual.',
       prove:'Run the same prompt several times under two sampling settings that your provider supports.',
       build:'Count how many different outputs you got, and note the differences you can see in how they read.',
       brk:'Use one factual task and one creative task. Compare whether the variation matters equally in both.',
       artifact:'A table of your sampling experiment, with the raw outputs.',
       check:'What actually changed: the facts, the diversity, or only the variation?',
       lens:'Never promise that “temperature zero means always identical.” Measure what your provider’s model really does.'}
    ],
    [
      'unit',
      '9.3',
      'Model tiers and routing',
      {goal:'You’ll understand why a smaller, faster and cheaper model may be right for some tasks, while a larger model is right for others.',
       idea:'Choosing a model means balancing many things at once: quality, latency, cost, context, how reliably it uses tools, and your operating constraints.',
       prove:'Create a 10-case benchmark that spans extraction, reasoning, multilingual and refusal tasks.',
       build:'Run two models, or two configurations of one model, through the same cases.',
       brk:'Send the easy cases to the cheaper model and the hard cases to the stronger one. Compare the cost and the quality.',
       artifact:'A Model Selection Card.',
       check:'Which acceptance metric justified your choice?',
       lens:'There’s no such thing as the “best model” until you’ve defined the task, the quality bar and the cost ceiling.'}
    ],
    [
      'unit',
      '9.4',
      'Reasoning, context and fine-tuning boundaries',
      {goal:'You’ll learn to tell prompting, context or RAG, and fine-tuning apart, because each is a different lever.',
       idea:'Use context when the system needs knowledge that keeps changing. Use prompting for instructions and behaviour. Use fine-tuning when a repeated, stable behaviour is worth encoding in the model’s weights.',
       prove:'Take one task and write three proposed solutions: prompt only, retrieval or context, and a fine-tuning hypothesis.',
       build:'For each solution, note the data it needs, the benefit you expect, the cost of maintaining it, and the evaluation it would need.',
       brk:'Invent a case where fine-tuning looks attractive, but retrieval is cheaper because the knowledge changes every week.',
       artifact:'A decision matrix: Prompt vs Context/RAG vs Fine-tune.',
       check:'Is the gap about knowledge, about behaviour, or both?',
       lens:'This stops every architecture discussion from collapsing into “let’s fine-tune it.”'}
    ],
    [
      'unit',
      '9.5',
      'Benchmarking without fooling yourself',
      {goal:'You’ll learn why small demos can lead to misleading conclusions, and how to design a balanced set of tasks.',
       idea:'A benchmark is a measuring instrument. If the cases are biased, the decisions you make from them will be biased too.',
       prove:'Before you test anything, create the categories, pick the sample cases and write down the expected outputs.',
       build:'Where it’s practical, compare the models blind, or at least in the same order every time.',
       brk:'Add some adversarial cases, some ambiguous ones and some that have no answer. See whether the ranking changes.',
       artifact:'A model benchmark of 10 to 30 cases, with a breakdown by category.',
       check:'Would your benchmark catch the failure you care about most?',
       lens:'A PM should question the test set before questioning the score.'}
    ],
    [
      'unit',
      '9.6',
      'Model Selection Card',
      {goal:'You’ll turn your evidence into a decision that engineers and stakeholders can review.',
       idea:'The card records the constraints, the evidence, the fallback and any risks that are still open, all in one place.',
       prove:'Fill in the task, the quality target, how sensitive the data is, the latency target and the cost ceiling.',
       build:'Add the model options, the benchmark evidence and the fallback strategy.',
       brk:'Take away the benchmark results and try to make the decision anyway. Notice how much of it turns into opinion.',
       artifact:'A Model Selection Card with a version history.',
       check:'Can a reviewer see exactly why you chose this model?',
       lens:'This is evidence of your technical judgment for your portfolio, and it’s worth far more than a screenshot of a leaderboard.'}
    ],
    ['q','I402'],
    ['h','Change one thing at a time'],
    ['p','Here’s the most important habit in this chapter. When you compare models, change only the model. Suppose you change the model and the prompt together, and the result improves. Then you can’t say which of the two changes helped.'],
    ['h','What you need to know about models'],
    ['p','The knowledge you need is specific, and it’s limited. It covers supervised and unsupervised learning, classification and regression, and training, validation and test sets. It also covers overfitting, precision and recall, and embeddings.'],
    ['p','Then add transformers and attention, but only at the level of the idea. Add the difference between inference and training, and between pre-training, fine-tuning and retrieval. That is enough for you to take part in an architecture discussion.'],
    ['h','Fine-tune, prompt or retrieve?'],
    ['p','The most common question in these discussions is whether to fine-tune. Here’s a rule of thumb. Treat it as a hypothesis to test, not as a law.'],
    [
      'l',
      ['Use <strong>retrieval</strong> when the problem is knowledge that changes, or private data.','Use <strong>prompting</strong> when you can steer the behaviour with instructions and examples.','Use <strong>fine-tuning</strong> when the behaviour, the style or the pattern of the task is stable, comes up again and again, and is worth changing the model’s weights for.']
    ],
    ['p','The table below turns this into four decisions you’ll face. For each one, look at the question to ask first, and then at the mistake teams most often make.'],
    [
      'tb',
      ['Decision','Ask first','The common mistake'],
      [
        ['Model choice','Which constraint binds hardest: quality, latency or cost?','Picking the “smartest” model because of its reputation.'],
        ['Fine-tune','Is the gap about knowledge, or about behaviour?','Fine-tuning a model to teach it documents that change every month.'],
        ['Reasoning level','Does more reasoning improve the acceptance metric?','Paying for more reasoning without measuring whether it helps.'],
        ['Context size','Do we genuinely need the larger window?','Treating a big window as a substitute for retrieval.']
      ]
    ],
    ['p','Now try this in your own words.'],
    [
      'try',
      {id:'ch22-leader',
       mins:6,
       min:60,
       rows:4,
       task:'Write the one sentence you would say if a stakeholder asked you to switch to the model that just topped a leaderboard.',
       ph:'Before we switch, …',
       after:'A good answer asks: on which of our cases, and at what speed and cost? A leaderboard is a result on someone else’s test set.'}
    ],
    ['h','Summary'],
    ['p','So the habit to carry forward is simple. Measure on your own cases, change one thing at a time, and write down the evidence for your choice. Next, in Chapter 23, you’ll look at how to design the context you send to whichever model you chose.']
  ],
  capstone:{
    title:'Choose the model, with a back-up, and write it on one page',
    brief:'The name-and-place finder and the context judge both need a model, and the choice affects quality, cost, speed and privacy. In this chapter you learned that changing the model changes more than a benchmark score, and that a recommendation must answer “measured how?”. Now you’ll test candidate models on your own answer key, and write the one-page card that records your choice.',
    where:'Your test harness from Chapter 21, to run the models. Write the one-page card in the notes box below.',
    steps:[
      'State the job and the quality bar in numbers. For example: “find at least 90 of every 100 names on the answer key, with no more than 5 false alarms in 100 sentences”.',
      'State how sensitive the text is, and what that rules out straight away. For example, a provider that trains on what you send is ruled out if sentences may contain real Aadhaar numbers.',
      'Set a time limit and a cost limit for one message.',
      'Choose two or three models. Run your harness on the answer key for each one, and put the results side by side. Show the Hindi and Hinglish results separately from the English ones.',
      'Name the back-up: what runs if the first choice is down, slow or more expensive. Try the back-up at least once.',
      'Name the test set you will use to recheck this choice in three months.',
      'Put it all on one page, the model selection card, so that a manager can read it and an engineer can act on it.'
    ],
    done:[
      'Numbers for the quality bar, the time limit and the cost limit.',
      'A side-by-side table of the models, with Hindi and Hinglish shown separately.',
      'A named back-up that you have tried once.',
      'The one-page card, where every claim traces back to a run in your harness.'
    ]
  }
},

/* --------------------------------------------------------------- 23 / bk 10 */
{
  id:'ch10c', num:23, part:5, curriculumTier:'core', phase:3, prerequisites:['ch2','ch15b','ch8'], nextUnits:['ch11r'], minutes:55, labs:['contextrot'],
  title:'Context engineering: deciding what the model sees',
  concept:'Context engineering means deciding what goes into each request: the instructions, examples, evidence, history and tool results, and the format they come in. In this chapter you’ll treat the prompt as a contract, set a context budget, and decide where memory is stored.',
  plan:{
    first:'Write a vague prompt that makes a downstream parser fail, and keep the failure so you can look at it later.',
    build:'Redesign the prompt as an interface. Give it structured output, validation, examples, a refusal state, provenance, and a limit on how much history it carries.',
    brk:'Now break it on purpose. Remove required fields, add contradictory instructions, overflow the context, and inject irrelevant history.',
    artifact:'A context budget, a schema, and a design for memory and state.',
    gate:'Explain the difference between context, state and persistent memory, without blurring the three together.'
  },
  needs:[
    ['A system prompt is a standing instruction','You met this in Chapter 2. Here it’s one part of a designed context.',2],
    ['The context window has a limit','You saw this in Chapter 1.5. The budget is real, so something has to be removed first.',1.5],
    ['Structured output can be required','Chapter 8 made the format reliable. This chapter places it inside a wider design.',8]
  ],
  words:[
    ["Context engineering","Deciding what the model receives at all: instructions, examples, evidence, history and tool results, and the shape they come in. Retrieval is one part of it."],
    ["Context budget","A token allowance for each part of the context, together with a stated order in which things are dropped when the total won’t fit."],
    ["Schema validation","Checking the data that comes back against a declared shape, before anything downstream uses it."],
    ["Provenance","The record of where a piece of information came from. It travels with the information, so an answer can be traced back to a source."]
  ],
  takeaway:[
    'Treat a prompt as an interface contract, not as a paragraph of requests.',
    'Say what gets removed first when the context budget is tight, and why.',
    'Tell conversation history, user profile and task state apart as three different stores.'
  ],
  story:[
    ['c','Before you start','Pick one assistant you know well, either your own or one you use. You’ll list everything that goes into its context.'],
    ['p','In the last chapter you chose a model. Now the question is what you send to it. You’ve thought of the prompt as the message you type, but the prompt is only one part of what the model sees. Every request can also carry instructions, examples, documents, earlier messages and results from tools.'],
    ['p','Choosing what goes into that request, and what stays out, is called <strong>context engineering</strong>. It matters for two reasons. The context window has a limit, so not everything fits. And you pay for every token you send.'],
    ['p','An everyday comparison helps here. Imagine you brief a brilliant new colleague who remembers nothing from yesterday. Each morning you hand them a folder: the standing instructions, a few examples, the file they need today, and a note about last week. What you put in that folder decides how well they do.'],
    ['key','Treat a prompt as an interface contract. It has a role, a task, constraints, examples, an output schema and a refusal behaviour, and the code downstream depends on each of these.'],
    ['h','Hands-on units'],
    ['p','The six units below take you from a single prompt to a whole context design. Each one gives you something small to build, and something to break on purpose.'],
    [
      'unit',
      '10.1',
      'Prompt as an interface contract',
      {goal:'You’ll design prompts that spell out the task, the constraints, the inputs, what you expect back, and what should happen when something fails.',
       idea:'A prompt works like a contract between your app and the model. Your app promises to send certain things, and the model is asked to send back certain things.',
       prove:'Take a vague instruction and rewrite it into a role, a task, constraints, examples and output requirements.',
       build:'Run the old and the new version on the same 10 cases.',
       brk:'Add two instructions that contradict each other. Watch which behaviour stays steady and which starts to wobble.',
       artifact:'A side-by-side view of the old and new prompt, plus the results of your 10-case test.',
       check:'Which requirement became something you can measure after the rewrite?',
       lens:'Keep versions of your prompt changes, the way engineers do with code.'}
    ],
    [
      'unit',
      '10.2',
      'Structured outputs and schemas',
      {goal:'You’ll make the model’s output something a machine can read, and you’ll check it before anything downstream uses it.',
       idea:'Output in natural language is flexible, but the interfaces in an application need a predictable structure.',
       prove:'Define a small JSON schema for an object that holds one extracted task.',
       build:'Generate some outputs, parse them, and reject any that have an invalid structure.',
       brk:'Remove a required field, and put in a value of the wrong type. Check that your application catches both.',
       artifact:'The schema, the validation tests, and sample payloads that are valid and invalid.',
       check:'Does the schema stop unsafe values, or only formatting mistakes?',
       lens:'Structured output controls the interface. It doesn’t guarantee that the content is true.'}
    ],
    [
      'unit',
      '10.3',
      'Context budget',
      {goal:'You’ll measure how much of the context is instructions, how much is history, how much is retrieved text, and how much is tool output.',
       idea:'Context is a limited resource, and it affects quality, latency and cost.',
       prove:'Record the token count for each part of the context, where your provider shows it. Where it doesn’t, estimate in the same way every time.',
       build:'Write a budget policy that says what you keep, what you summarise and what you drop first.',
       brk:'Flood the context with irrelevant history, and compare the answer quality and the cost.',
       artifact:'A Context Budget Worksheet.',
       check:'What is the first thing you would remove under pressure?',
       lens:'A PM should be able to ask “what is in the context?” and get an exact answer.'}
    ],
    [
      'unit',
      '10.4',
      'State, history and memory',
      {goal:'You’ll separate four things that people often mix up: the context of one request, the conversation history, the data kept about a user, and the state of a task.',
       idea:'“Memory” isn’t a single feature. It’s an application architecture, with storage, retention rules and authorisation.',
       prove:'Draw three stores: the session history, the user profile and the task state.',
       build:'For each store, write down the fields, who owns it, how long it’s kept, who can access it, and how it gets deleted.',
       brk:'Bring in memory that is stale or that conflicts with other memory, and define rules for which one wins.',
       artifact:'A Memory and State Design Sheet.',
       check:'Which data should never be put into a prompt by default?',
       lens:'This is where privacy and product design meet context engineering.'}
    ],
    [
      'unit',
      '10.5',
      'Provenance and citations',
      {goal:'You’ll make the evidence traceable, so you can follow it from the answer back to the source, the chunk and the version.',
       idea:'A citation is useful only if it lets the user, or an auditor, trace the claim back to its evidence.',
       prove:'Attach a source ID, a section and a chunk ID to every passage you retrieve.',
       build:'Generate an answer that cites those identifiers.',
       brk:'Delete a source version or change it, and test whether the old citations are still valid.',
       artifact:'A provenance schema, with some example citations.',
       check:'Can you reproduce the exact source that was used for an answer?',
       lens:'Traceability is essential in systems that are regulated or full of policy.'}
    ],
    [
      'unit',
      '10.6',
      'Context failure clinic',
      {goal:'You’ll diagnose wrong answers that come from context that is missing, stale, irrelevant, contradictory or malicious.',
       idea:'Many failures that people blame on “the model” are really failures in how the context was put together.',
       prove:'Create five context packages that are bad on purpose, and predict how each one will fail.',
       build:'Fix one problem at a time, and rerun the same test set each time.',
       brk:'Mix a stale policy, some unrelated text and a prompt injection into the context.',
       artifact:'A Context Failure Taxonomy.',
       check:'What failed: retrieval, assembly, authorisation, the order of instructions, or generation?',
       lens:'This prepares you for production RAG and for security.'}
    ],
    ['p','One more thing about structured output. It removes ambiguity for the code that reads the reply, and that code usually can’t handle prose.'],
    ['q','I403'],
    ['h','Memory is an architecture choice'],
    ['key','A model does not have memory. Every product that offers memory has built a store for it, and the kind of store decides what it can delete when someone asks.'],
    ['p','You’ll hear many names for parts of the context: caching, compression, few-shot examples, instruction hierarchy. They all answer the same two questions. What goes in? And what is removed first when it doesn’t fit?'],
    ['p','Let’s try that with an assistant you know.'],
    [
      'try',
      {id:'ch23-budget',
       mins:6,
       min:60,
       rows:4,
       task:'For one assistant you know, estimate the tokens spent on system instructions, history, retrieved passages and tool output. Then decide what gets removed first when the budget is tight.',
       ph:'instructions … history … retrieved … tool output … remove first: …',
       after:'Most people remove history first and evidence last. If your order is different, write down why. That reasoning is the design.'}
    ],
    ['h','Summary'],
    ['p','So, to bring it together: the prompt is one part of the context, the context has a budget, and memory is something you design and store. Next, in Chapter 24, you’ll use this context design as the input to a production retrieval system.']
  ],
  capstone:{
    title:'Plan exactly what the model gets to see',
    brief:'Every call to the context judge sends the model a bundle of text, and the bundle is limited and costs money. In this chapter you learned to treat a prompt as a contract, to decide what is removed first when space runs short, and to keep conversation history, user settings and task state apart. Now you’ll write the one-page plan for the context judge’s call.',
    where:'Written, using real token counts from a run of your harness. Write the page in the notes box below.',
    steps:[
      'List everything that goes into one call to the context judge: the instructions, the worked examples, the sentence to check, any earlier messages and any reference list.',
      'Next to each item, write a token count from a real run, not a guess.',
      'Set a total limit for the call and show how much room is left.',
      'Write the order in which things are removed when space runs out, and the rule behind it. The sentence to check is never removed.',
      'Write the exact shape the reply must have, which is your finding format, and what happens when a reply does not match.',
      'For each piece of stored data (the chat so far, a user’s settings, the state of the current task), say which of the three kinds of memory it belongs to.'
    ],
    done:[
      'A list of everything in the call with a real token count beside each item.',
      'A total limit and the room left.',
      'The removal order and the rule behind it.',
      'The reply shape, and the three kinds of stored data sorted.'
    ]
  }
},

/* --------------------------------------------------------------- 24 / bk 11 */
{
  id:'ch11r', num:24, part:5, curriculumTier:'core', phase:3, prerequisites:['ch7','ch12','ch6'], nextUnits:['ch12t'], minutes:60, labs:['fusion'],
  title:'Production RAG: ingestion, access control and freshness',
  concept:'A production retrieval system has several stages that you can tune, from reading documents in to checking the answer. In this chapter you’ll walk through each stage, including permissions, deletion and rollback. By the end, you’ll have designed an architecture that you could defend in a review.',
  plan:{
    first:'Take three real documents and make an inventory of each: its id, its sections, its language, its metadata and its access label. Then predict which metadata will turn out to be worth keeping.',
    build:'Compare lexical, semantic and hybrid retrieval. Then add reranking, or write down a measured reason for leaving it out.',
    brk:'Test what happens when a document is deleted, when a permission changes, when there are duplicates, and when the index version changes.',
    artifact:'A production RAG architecture with access control, provenance, versioning, a no-answer policy and a rollback path.',
    gate:'Name the first production retrieval failure you would investigate, and say why you would look at that one first.'
  },
  needs:[
    ['You built retrieval by hand','You did this in Chapters 3 to 7. This chapter turns it into an architecture.',7],
    ['Keyword and meaning search fail differently','Chapter 12 measured the difference. Here it becomes a decision about ingestion and indexing.',12],
    ['The answer key is your measuring tool','Every claim in this chapter is measured against it.',6]
  ],
  words:[
    ["Ingestion","Everything that happens to a document before it can be retrieved: parsing, extraction, enrichment, chunking and embedding. It sets a ceiling on quality, and nothing later in the chain can raise that ceiling."],
    ["Query rewriting","Turning what the user typed into what should really be searched for, before the retrieval runs."],
    ["Access-control-aware retrieval","Filtering by who is asking as part of the search itself, instead of hiding results afterwards in the interface."],
    ["Embedding versioning","Keeping track of which model produced which stored vectors, so that a change of model doesn’t quietly corrupt an index."]
  ],
  takeaway:[
    'Name the stages of a production retrieval pipeline, and say which of them can be tuned.',
    'Explain why the quality of ingestion sets an upper limit on the quality of retrieval.',
    'Say what must happen to your index when a document is deleted or a permission changes.'
  ],
  story:[
    ['c','Before you start','Have your Chapter 12 retrieval pipeline and your Chapter 6 answer key ready.'],
    ['p','In the last chapter you decided what the model should see. Now we look at where that evidence comes from when the system is real. Your Chapter 7 system works because you chose every document yourself, and you are the only user.'],
    ['p','Production is different. Scans arrive crooked. Permissions change after a document has been indexed. The same contract gets uploaded twice under two names. And your provider updates the model without telling you. This chapter is about building a retrieval system that survives all of that.'],
    ['c','Note','A production pipeline has seven stages: reading documents in, splitting them, adding labels, creating embeddings, searching, building the prompt, and checking the answer. You can tune each stage. That also means each one is a suspect when quality drops without a code change.'],
    ['key','Anything lost while reading documents in is lost for good. Better search can’t bring back a table that the parser flattened, or a page that it skipped.'],
    ['h','Hands-on units'],
    ['p','There are eight units below. They follow a document on its journey: first it’s read, then labelled and split, then searched, and finally it’s protected, refreshed and, if needed, rolled back. Each unit has something to build and something to break.'],
    [
      'unit',
      '11.1',
      'Parsing and document ingestion',
      {goal:'You’ll treat document ingestion as an engineering pipeline, not as a matter of “upload PDF.”',
       idea:'If you get garbage in at ingestion, or lose the structure of the document, you’ll get garbage out of retrieval later.',
       prove:'Take three PDFs or documents. Compare the extracted text with what a person sees in the source.',
       build:'Record the page, the section, the table, the language and your notes on the parser.',
       brk:'Use a scanned page, a page full of tables, and a malformed document. Record what gets lost.',
       artifact:'An Ingestion Quality Report.',
       check:'Which information disappeared before retrieval even started?',
       lens:'Ask how good the parser or OCR is before you blame the embeddings.'}
    ],
    [
      'unit',
      '11.2',
      'Metadata and document identity',
      {goal:'You’ll design stable identifiers for documents and chunks, plus the metadata you need for filtering and provenance.',
       idea:'Metadata is part of the retrieval logic. It’s not decoration.',
       prove:'Create these fields: document_id, version, section, language, access_label and effective_date.',
       build:'Give every chunk a stable ID, and keep the link to its parent.',
       brk:'Create duplicate versions and superseded versions of a document, and test your retrieval filters.',
       artifact:'A Document Metadata Contract.',
       check:'Can the system tell current evidence from obsolete evidence?',
       lens:'Versioning and identity become critical the moment a policy changes.'}
    ],
    [
      'unit',
      '11.3',
      'Chunking families',
      {goal:'You’ll compare fixed, recursive or structure-aware, semantic and hierarchical chunking, without treating any of them as the best in every case.',
       idea:'A chunking choice is a hypothesis about what unit of evidence your users will need.',
       prove:'Chunk the same document in three ways, and look at where the boundaries fall.',
       build:'Write 10 questions that each need a different amount of evidence.',
       brk:'Test a question whose answer crosses a chunk boundary.',
       artifact:'A Chunking Experiment, with before and after examples.',
       check:'Which chunking strategy matched your set of questions, and why?',
       lens:'The right question isn’t “which chunking is best?” It’s “best for what corpus, and for what kinds of queries?”'}
    ],
    [
      'unit',
      '11.4',
      'Sparse retrieval',
      {goal:'You’ll understand exact lexical retrieval, and why it’s still valuable.',
       idea:'Identifiers, names, codes and exact phrases are often where lexical methods are strongest.',
       prove:'Build a small keyword or BM25-style search experiment. Or use a library, once you understand the idea behind the scoring.',
       build:'Measure the rank of passages that you know are the right answer.',
       brk:'Use paraphrased questions, and questions full of synonyms, to expose where it’s weak.',
       artifact:'A Sparse Retrieval Benchmark.',
       check:'Where did exact matching win?',
       lens:'Don’t replace a strong, predictable signal just because embeddings are fashionable.'}
    ],
    [
      'unit',
      '11.5',
      'Dense, hybrid and vector search',
      {goal:'You’ll understand embeddings as a representation that can be indexed, and you’ll combine sparse and dense evidence.',
       idea:'Dense retrieval helps when two texts mean the same thing but use different words. Hybrid retrieval combines methods that fail in different ways.',
       prove:'Run the question set from Chapters 4 and 5 through lexical, dense and hybrid retrieval.',
       build:'Record the rank of the relevant evidence for each query.',
       brk:'Create cases with an exact ID, a synonym, several languages, and an ambiguous question.',
       artifact:'A Retrieval Benchmark with the evidence for each query.',
       check:'Which categories of query do best with which retriever?',
       lens:'Your architecture decisions should follow the pattern of your errors.'}
    ],
    [
      'unit',
      '11.6',
      'Reranking',
      {goal:'You’ll understand a second-stage relevance model, and you’ll measure whether its benefit justifies the cost and the latency.',
       idea:'The first stage tries to find all the good candidates. Reranking can then improve the order among those candidates.',
       prove:'Retrieve 10 candidates and apply a second scoring stage. Use a reranker that’s available to you, or a substitute you’ve measured.',
       build:'Compare Recall@10, Precision@3 and latency, before and after.',
       brk:'Include cases where the reranker puts the evidence in the wrong order, and does so with confidence.',
       artifact:'A Reranking Experiment Report.',
       check:'Did the improvement reach the final task, or only a metric in the middle?',
       lens:'Never add reranking just because a reference architecture has it. Prove that it’s worth it.'}
    ],
    [
      'unit',
      '11.7',
      'Query rewriting, parent-child retrieval and abstention',
      {goal:'You’ll improve the retrieval query and the size of the context, while keeping what the user meant.',
       idea:'Retrieval is a pipeline of steps: forming the query, searching for candidates, filtering, ranking, putting the context together, and the policy for the answer.',
       prove:'Rewrite ambiguous questions as explicit search queries, and compare the results.',
       build:'Retrieve small child chunks, but return the larger parent context so the answer reads well.',
       brk:'Test a query that can’t be answered, and a query where the rewrite changes what the user meant.',
       artifact:'A Query Strategy and an Abstention Test Set.',
       check:'When should the system ask a clarifying question instead of retrieving?',
       lens:'Abstention is a product behaviour. It’s not just a sentence in a prompt.'}
    ],
    [
      'unit',
      '11.8',
      'Authorization, freshness and rollback',
      {goal:'You’ll make retrieval aware of permissions, and you’ll make it possible to undo changes safely.',
       idea:'A correct answer that comes from data the user wasn’t allowed to see is still a security failure.',
       prove:'Add an access label to your chunks, and filter by the role of a test user.',
       build:'Simulate a document being deleted, a permission changing, and the index being rebuilt.',
       brk:'Query immediately after a permission is revoked, and check that stale content in the index can’t be reached.',
       artifact:'A production RAG architecture, plus a checklist for permissions, freshness and rollback.',
       check:'Can you prove that a user who isn’t authorised cannot retrieve the chunk?',
       lens:'Authorisation belongs in the application and data layer. It’s not enough to put it only in the model’s instructions.'}
    ],
    ['q','I404'],
    ['h','Reranking has a cost'],
    ['key','Reranking improves the order of results, but it adds cost. Fetch ten candidates and rescore them. Then check whether recall at ten and precision at three improved enough to justify the extra time and cost.'],
    ['h','Four questions to ask about any retrieval product'],
    ['p','Production retrieval has a long list of concerns, and you don’t need to memorise it. Every item on that list fits under one of four questions.'],
    [
      'n',
      ['<strong>Did we read the document correctly?</strong> This covers scans, tables, and content that a parser drops.','<strong>Is this user allowed to see it?</strong> This covers permissions, separate customers, and deleted documents.','<strong>Did we find the right chunk?</strong> This covers keyword search, meaning search, query rewriting and reranking.','<strong>Can we show where the answer came from?</strong> This covers chunk IDs, citations, and what happens when there is no answer.']
    ],
    ['p','Use these four questions whenever someone demonstrates a retrieval product to you. Then try them on a case of your own.'],
    [
      'try',
      {id:'ch24-delete',
       mins:6,
       min:60,
       rows:4,
       task:'A document is deleted from the source system at 10am. Describe what must happen for the assistant to stop quoting it, and by when.',
       ph:'At 10am … then … by …',
       after:'If your answer depends on a nightly rebuild, your system quotes a deleted document from 10am until the rebuild. That window is a decision, so make it on purpose.'}
    ],
    ['h','Summary'],
    ['p','To sum up: ingestion sets the ceiling, permissions and deletions have to reach the index, and every added stage has to prove it’s worth its cost. Next, in Chapter 25, you’ll give the model controlled access to actions, not only to evidence.']
  ],
  capstone:{
    title:'Draw the gateway on one page',
    brief:'The gateway is the version of Bharat Privacy Guard that sits in front of a company’s servers, logs and AI traffic. You won’t build it, but you must be able to design it, so that an engineer could build from your page and a security reviewer could challenge it. In this chapter you learned the stages of a production search pipeline, why the quality of the first stage caps everything after it, and what must happen to an index when a document is deleted or a permission changes. Now you’ll apply all of that to the gateway’s rules and reference lists.',
    where:'Written only. A one-page design. No code needed.',
    steps:[
      'Draw these stages as separate boxes: how a company’s rules and reference lists are loaded, where they are stored, how they are searched, how the right rule is chosen for a request, how the result is reordered if needed, and how the decision is applied.',
      'Add who may do what: who can change a rule, who can read the logs, and who can switch the gateway off. Mark where the permission check happens.',
      'Mark how an answer can be traced back. Every decision should record which rule, in which version, produced it.',
      'Write the “no answer” rule: what the gateway does when no rule applies, and what the user sees.',
      'Write how the rules and the reference lists are versioned, and what happens to old decisions when a rule changes.',
      'Write the rollback: what you do when a new rule version makes things worse.'
    ],
    done:[
      'A one-page drawing with the stages as separate boxes and the permission check marked.',
      'The trace from a decision back to a rule and version.',
      'The “no rule applies” behaviour, the versioning plan and the rollback.',
      'The page really fits on one page. If it does not, you have not made enough decisions yet.'
    ]
  }
},

/* --------------------------------------------------------------- 25 / bk 12 */
{
  id:'ch12t', num:25, part:5, curriculumTier:'core', phase:3, prerequisites:['ch8','ch2','ch11r'], nextUnits:['ch13a','ch14p','ch18s','b4'], minutes:50, labs:['schema'],
  title:'Tool calling and workflows: contracts before agents',
  concept:'A tool lets the model do something real, so you have to decide exactly what it may do and who checks it. You’ll write tool contracts, enforce permissions on the server, and choose a fixed workflow before you allow an agent.',
  plan:{
    first:'Pick one action that happens outside the model, and write its tool schema before you write any model logic.',
    build:'Build the flow classify → retrieve → tool → validate → respond, with a confirmation step for anything that has consequences.',
    brk:'Test four things: badly formed arguments, a timeout, a call the user is not allowed to make, and a tool that confidently returns the wrong thing.',
    artifact:'A tool contract, a workflow diagram, and a table of the ways each step can fail.',
    gate:'Point to every place in the flow where ordinary, fixed code stays in control.'
  },
  needs:[
    ['A schema makes the format reliable','From Chapter 8. A tool contract takes the same idea and applies it to actions.',8],
    ['The model invents when it has no evidence','From Chapter 2. Now the model can invent the inputs to a real action.',2]
  ],
  words:[
    ["Tool contract","A written description of one outside capability: its name, what it does, the inputs it accepts and how tightly they are limited, the errors it can return, who may use it, and what it changes."],
    ["Deterministic workflow","A fixed sequence of steps, where only the parts that really need judgement are left to the model."],
    ["Idempotency","The property that doing the same operation twice has the same effect as doing it once. It matters the moment anything retries."],
    ["Confirmation step","A point where a person must say yes before an action with consequences is allowed to run."]
  ],
  takeaway:[
    'Write a tool contract that a reviewer could sign off.',
    'Say when a fixed workflow is better than letting the model decide.',
    'Name the checks that must happen before an important action runs.'
  ],
  story:[
    ['c','Before you start','Open your experiment harness from Chapter 21 and the agent loop from Chapter 9. You’ll want both nearby for the hands-on units.'],
    ['p','So far in this part, the model has read things and written answers. It has looked at documents and replied. In this chapter the model starts to <em>do</em> things, and that changes how careful you need to be.'],
    ['p','A <strong>tool</strong> is what lets the model do something real: look up an invoice, send an email or change a record. Once that’s possible, the question is no longer whether the model can act. The question is what exactly it may do, with what data, and who checks.'],
    ['p','Think of a bank teller. A teller can look up your balance. But a teller can’t approve a loan alone, or send money just because a customer says so. That rule isn’t there because tellers are untrustworthy. It’s there because some actions have consequences outside the bank.'],
    ['p','A model with tools is in the same position. In this chapter you’ll learn to write down what each tool may do, and to keep the checks in ordinary code. You’ll also learn to prefer a fixed workflow until an agent has earned its place.'],
    ['h','Hands-on units'],
    ['p','There are six units, and they go in order. Each one has a short goal, an idea behind it, something to try, something to break on purpose, and something to hand in. The checking question and the product lens at the end tell you what to take away from it.'],
    [
      'unit',
      '12.1',
      'Tool schemas',
      {goal:'Define a tool as a tightly limited contract. It has a name, a description, inputs, errors and permissions.',
       idea:'The way you define a tool is part of what the model sees when it works. A clear definition helps the model use the tool well.',
       prove:'Write a schema for <code>get_invoice_status(invoice_id)</code>.',
       build:'Add the fields that are required, the formats that are allowed, and a clear error for each thing that can go wrong.',
       brk:'Try a missing ID, an ID in the wrong format, and an invoice the user is not allowed to see.',
       artifact:'A written Tool Contract Specification.',
       check:'Could a new engineer read it and know exactly what the tool can and cannot do?',
       lens:'Tool descriptions deserve the same care as the documentation for an API.'}
    ],
    [
      'unit',
      '12.2',
      'Tool selection',
      {goal:'Measure whether the model picks the right tool for each task.',
       idea:'Give the model a tool only when using it adds real value, not because tools feel new and exciting.',
       prove:'Create 20 test cases that use two or three tools between them.',
       build:'For each case, record which tool the model chose, which inputs it gave, and which tool you expected.',
       brk:'Add tools with names that are almost the same, and requests that could mean more than one thing.',
       artifact:'A Tool Selection Benchmark.',
       check:'What share of the calls were correct, what share were unnecessary, and what share were unsafe?',
       lens:'Later, in agent systems, this becomes one of the quality measures you can track.'}
    ],
    [
      'unit',
      '12.3',
      'Validation, retries and timeouts',
      {goal:'Keep the inputs the model writes separate from the controls that decide whether to run them.',
       idea:'The model is not the one who decides what is allowed. Ordinary code does that.',
       prove:'Check every input before the tool runs. Then add a rule for timeouts and retries.',
       build:'Simulate failures that go away on their own, and failures that never will.',
       brk:'Make the tool return a badly formed result, and watch what the next step does with it.',
       artifact:'A Tool Failure-State Table.',
       check:'Which failures are worth retrying, and which need a person to step in?',
       lens:'For every outside service your product depends on, a PM should ask what happens on a timeout, what gets retried and what counts as a failure.'}
    ],
    [
      'unit',
      '12.4',
      'Idempotency and side effects',
      {goal:'Understand why calling a tool twice can repeat an action.',
       idea:'A retry is safe only when the operation is safe to repeat, or when something protects it from running twice. That protection is called an idempotency mechanism.',
       prove:'Design an idempotency key for submitting a purchase or a request.',
       build:'Run the same action twice, and check that only one real effect happens.',
       brk:'Simulate a network timeout that happens after the server has already accepted the request.',
       artifact:'A Side-Effect Safety Checklist.',
       check:'What happens if the caller never receives the message saying it worked?',
       lens:'This matters most when AI can trigger payments, tickets, messages or records.'}
    ],
    [
      'unit',
      '12.5',
      'Human approval',
      {goal:'Put a clear confirmation step before any action that has consequences or cannot be undone.',
       idea:'A person in the loop is a boundary the system enforces. It is more than a confirmation popup.',
       prove:'Build the flow draft, review, approve, execute.',
       build:'Log who approved, what they approved, and exactly which request was run.',
       brk:'Change the request after it was approved, and check that running it is blocked.',
       artifact:'An Approval Workflow Diagram, plus a design for the audit record.',
       check:'What exactly did the person approve?',
       lens:'An approval has to be tied to one specific action, not to a loose conversation.'}
    ],
    [
      'unit',
      '12.6',
      'Workflow patterns',
      {goal:'Build four kinds of workflow: one step after another, routing, steps in parallel, and one where a second check improves the first answer.',
       idea:'A workflow is a path that is fixed in advance. The model is called at certain points along it.',
       prove:'Build one simple workflow where steps run in order, and one that routes each request to the right path.',
       build:'Measure the time it takes, the cost and how many tasks succeed.',
       brk:'Send a request down the wrong route, and watch the failure appear in the steps after it.',
       artifact:'A Workflow Pattern Comparison.',
       check:'Which pattern adds real value, and which only adds complexity?',
       lens:'Use the simplest pattern that meets your acceptance criteria.'}
    ],
    ['h','Prefer a fixed workflow'],
    ['p','Once you’ve worked through the units, one lesson stands out. A fixed workflow is simpler to test and easier to trust than an agent. That’s why it should be your first choice.'],
    ['key','A fixed workflow is often safer than an agent. If you know the sequence of steps, fix it in code and let the model handle only the part that needs judgement.'],
    ['q','I405'],
    ['h','Tool checklist'],
    ['p','Before any tool goes live, run it through this checklist. Each line is here because it has caused a real incident somewhere.'],
    [
      'l',
      ['The name is clear and the description is accurate. The model reads both.','The inputs are tightly limited. Use a fixed list of choices instead of free text wherever you can.','Anything the tool changes is stated clearly.','Permissions are enforced on the server, not by asking the model to behave.','You have thought about idempotency, which means what happens if the call runs twice.','Errors come back in a structured format.','Audit data is recorded.','Actions that destroy or delete something need confirmation.']
    ],
    ['key','Give the model a tool only when its choice adds value. Every tool adds a way to attack the system, extra delay, extra cost and new ways to fail.'],
    ['p','The last idea in the checklist leads to a useful exercise. It asks you to look at your own list of tools, and see how many of them really need the model.'],
    [
      'try',
      {id:'ch25-cross',
       mins:6,
       min:60,
       rows:4,
       task:'List the tools you would give a support assistant. Then cross out every tool where a fixed rule would choose correctly more than 95% of the time.',
       ph:'Tools: … Crossed out: … Left: …',
       after:'What remains is the set of tools where the model’s judgement is worth the risk. It is usually much shorter than the first list.'}
    ],
    ['h','Summary'],
    ['p','Let’s pull it together. A tool lets a model act, so every tool needs a written contract that says what it may do. The checks belong in ordinary code, not in the model. And when you already know the steps, a fixed workflow beats an agent.'],
    ['p','Next, Chapter 26 takes the opposite step. It lets the model control the sequence of steps itself, which is what we call an agent.']
  ],
  capstone:{
    title:'Build a workflow that proposes changes but cannot make risky ones alone',
    brief:'Before you let a model act on its own, you write the contract for each action and decide which actions need a person. In this chapter you learned to write a tool contract a reviewer could sign, when a fixed workflow beats an agent, and which checks must happen before an important action runs. Here you build a workflow for the rule-keeper in which the model proposes what to do with each finding, but a person must approve the risky ones.',
    where:'Your test harness from Chapter 21 and the agent loop from Chapter 9, extended in code. Write the measured numbers in the notes box below.',
    steps:[
      'Write the contract for the action “hide this detail”: its name, what it needs, what it returns, what it may change, and what it can never change. A reviewer should be able to sign it.',
      'Decide which actions are risky enough to need approval. For example, letting any ID number through, or deleting a stored copy, always needs approval.',
      'Build a fixed workflow: check the sentence, list the findings, propose an action for each finding, wait for approval on the risky ones, then apply the actions.',
      'Prepare twenty test messages and decide in advance what the right proposal is for each.',
      'Run them. Count how often the model proposes the correct action when it is not allowed to act on its own. Also count how many risky actions would have been applied without approval. That number must be zero.',
      'Write the checks that must happen before an important action runs.'
    ],
    done:[
      'A signed-off contract for the hide action.',
      'A list of the actions that need approval.',
      'A working workflow in which risky actions wait for approval.',
      'Two numbers from twenty messages: how often the proposal was right, and how many risky actions ran without approval (zero).'
    ]
  }
},

/* --------------------------------------------------------------- 26 / bk 13 */
{
  id:'ch13a', num:26, part:5, curriculumTier:'core', phase:3, prerequisites:['ch12t','ch1'], nextUnits:['ch14p','b5'], minutes:60, labs:['agentloop'],
  title:'Agents: loops, stopping conditions and control',
  concept:'An agent chooses actions, checks the results and keeps going toward a goal. The hard part is control, not intelligence. You’ll build an agent with firm limits, add stopping conditions, and measure it against the fixed workflow from Chapter 25.',
  plan:{
    first:'Build the smallest loop you can: propose → call one approved tool → look at the result → continue or stop.',
    build:'Add a list of allowed tools, a maximum number of steps, state that you can see, stopping conditions, and a point where a person must approve.',
    brk:'Make the agent loop forever. Feed it confusing tool output. Ask it to use a tool it is not allowed to use.',
    artifact:'A comparison of the agent against the deterministic workflow across twenty tasks.',
    gate:'Prove that the extra freedom adds measurable value. If it does not, ship the workflow.'
  },
  needs:[
    ['Tool contracts and fixed workflows','Chapter 25 built the workflow that the agent is compared against.',25],
    ['Every step costs tokens','From Chapter 1. A loop multiplies that cost by the number of steps.',1]
  ],
  words:[
    ["Agent","A system in which the model can choose actions, look at the results, and keep going toward a goal."],
    ["Agent loop","The cycle of goal, decision, tool call, observation and updated context, followed by a choice to stop or continue. The stopping condition is the part people leave out."],
    ["Step budget","A hard limit on how many actions an agent may take before it has to give up. It is the main defence against a loop that never ends."],
    ["Handoff","Passing a task from one agent to another, more specialised one. It is cheap to draw, and it is easy to lose context or authority on the way."]
  ],
  takeaway:[
    'Draw the agent loop with its stopping conditions and error paths.',
    'Explain why most agent failures are control problems, not intelligence problems.',
    'Say when to add a second agent, and when not to.'
  ],
  story:[
    ['c','Before you start','Have the workflow from Chapter 25 and its twenty test tasks ready. You’ll run the same tasks through an agent and compare.'],
    ['p','In the last chapter you built a fixed workflow. You decided the steps in advance, and the model only did the parts that needed judgement. Now we hand the model more freedom, and see what that costs you.'],
    ['p','An <strong>agent</strong> is a system that repeats a loop on its own: decide, act, check the result, decide again. That sounds powerful, but it brings a new problem. Every loop also needs a way to stop. Most agent problems come from the stopping, not from how capable the model is.'],
    ['p','Think of sending a junior colleague to find one number. A good outcome is that they come back in ten minutes with the number, or say they couldn’t find it. A bad outcome is that three hours later they are still searching, and nobody told them when to give up.'],
    ['h','Hands-on units'],
    ['p','There are seven units here, and they build on each other. You start by drawing the loop, then you add planning, state, limits and human checkpoints. The last two ask whether you need several agents, and whether you need an agent at all.'],
    [
      'unit',
      '13.1',
      'The agent loop',
      {goal:'Understand the whole cycle: goal, then the model’s decision, then a tool call, then what it sees back, then updated context, then stop or continue.',
       idea:'An agent is a loop, and the loop itself is the design of the system.',
       prove:'Before you write any code, draw the loop and label every state and every move from one state to the next.',
       build:'Build a toy loop with three steps and a clear record of its state.',
       brk:'Force a tool to fail, and look at whether the loop recovers or spirals out of control.',
       artifact:'An Agent State Diagram.',
       check:'Where can the loop stop safely?',
       lens:'If you cannot draw the loop, you cannot defend the design.'}
    ],
    [
      'unit',
      '13.2',
      'Planning and tool choice',
      {goal:'Understand how a model makes its own plan, and when that is actually useful.',
       idea:'An agent gives up some predictability and gets flexibility in return.',
       prove:'Give the agent three tools and 20 tasks, and record which tool it picks each time.',
       build:'Compare one fixed workflow against the agent on the same tasks.',
       brk:'Include tasks that need no tool at all, and tasks where it is unclear which tool to use.',
       artifact:'An Agent vs Workflow Comparison.',
       check:'Did the extra freedom improve your acceptance measure enough to be worth it?',
       lens:'A workflow that passes the test may be better than an agent that only looks impressive.'}
    ],
    [
      'unit',
      '13.3',
      'State and context management',
      {goal:'Keep the state of the task in plain view, and keep control of how much context piles up.',
       idea:'A loop that runs for a long time can collect old, irrelevant or contradictory context.',
       prove:'Define a state object that holds the goal, the steps taken, what was observed, the approvals and the status.',
       build:'Save the state between rounds of the loop, and summarise only when you really have to.',
       brk:'Add repeated observations and irrelevant tool output, and measure how fast the context grows.',
       artifact:'An Agent State Schema, plus a Context Policy.',
       check:'Which fields can you trust as the final word?',
       lens:'When the state is explicit, you can explain an incident afterwards.'}
    ],
    [
      'unit',
      '13.4',
      'Stopping conditions',
      {goal:'Put limits on the number of steps, the time, the cost and the kinds of action that are unsafe.',
       idea:'An agent with no stopping conditions is a production dependency with no upper limit.',
       prove:'Set a maximum number of steps, a timeout, a cost ceiling, and a “cannot resolve” state.',
       build:'Log the reason each run stopped.',
       brk:'Create a loop that never finds an answer, and prove that it still ends.',
       artifact:'An Agent Control Policy.',
       check:'Can you prove that the system ends, even when things fail?',
       lens:'This is a requirement for reliability and cost, not just an engineering detail.'}
    ],
    [
      'unit',
      '13.5',
      'Human checkpoints',
      {goal:'Bring a person in when something is unclear, when the impact is high, and when a step cannot be undone.',
       idea:'The more an action can be reversed, and the more confident you are, the more freedom the agent can have.',
       prove:'Mark each tool or action as read-only, a write that can be reversed, or a write that cannot be reversed.',
       build:'Require approval for the last group.',
       brk:'Try to get around the approval through the prompt or through a tool input.',
       artifact:'An Agent Approval Matrix.',
       check:'Which actions are never allowed to run on their own?',
       lens:'The business owner should be the one who approves where the agent’s freedom ends.'}
    ],
    [
      'unit',
      '13.6',
      'Multi-agent patterns',
      {goal:'Understand handoffs, an orchestrator with workers, and several agents working together, without assuming they are better.',
       idea:'Every extra agent adds more state, more delay, more cost and more places to fail.',
       prove:'Solve a task with one agent first. Then build a version where the work is split between two roles.',
       build:'Compare how many tasks succeed and how complicated each version is to run.',
       brk:'Make the two agents give conflicting answers, and leave it unclear who owns the result.',
       artifact:'A Multi-Agent Decision Record.',
       check:'What measurable problem did the second agent solve?',
       lens:'Added complexity must buy you a capability you can measure.'}
    ],
    [
      'unit',
      '13.7',
      'Agent exit gate',
      {goal:'Treat “use an agent” as an idea that needs evidence, not as a decision you have already made.',
       idea:'The right design is the simplest one that meets your requirements.',
       prove:'Create a 20-task benchmark that compares a single direct call, a workflow and an agent.',
       build:'Score each one on quality, tool accuracy, delay, cost and safety.',
       brk:'Take away one capability at a time, and see whether the agent still adds value.',
       artifact:'An Agent Architecture Decision Record.',
       check:'Would you still choose an agent if nobody called it “agentic AI”?',
       lens:'That question protects you from choosing a design because it is fashionable.'}
    ],
    ['h','Agent failures are control failures'],
    ['p','After the units, a pattern shows up. When an agent goes wrong, it’s rarely because the model suddenly got worse. It’s because nothing stopped it.'],
    ['key','Most agent failures are control problems. The model did not get worse; it was given unlimited chances to be wrong.'],
    ['q','I406'],
    ['h','Agent patterns'],
    ['p','Agents and workflows come in a few common shapes. Before you read the table, notice that each row pairs a pattern with the situation where it fits and the main way it goes wrong. Use it to choose, not to collect patterns.'],
    [
      'tb',
      ['Pattern','Use it when','Main risk'],
      [
        ['Sequential workflow','The steps are known','Rigid when the problem shifts'],
        ['Routing','One of several specialised paths fits','The router picks wrong'],
        ['Parallel','Subtasks are genuinely independent','Coordination and aggregation'],
        ['Handoff','A specialist should take over','Lost context, unclear authority'],
        ['Orchestrator-worker','The plan decomposes into subtasks','Cost, loops, state complexity']
      ]
    ],
    ['key','Start with one model and a short list of tools. Add a second agent only when you have measured something the simpler version cannot do. Extra complexity is a cost, not an achievement.'],
    ['p','Now it’s time to put your agent up against the workflow you already built.'],
    [
      'try',
      {id:'ch26-compare',
       mins:6,
       min:60,
       rows:4,
       task:'Run the twenty tasks from your Chapter 25 workflow through the agent. Count how many it got right, how many tool calls it made, and what it cost.',
       ph:'Correct: … Tool calls: … Cost: … Compared with the workflow: …',
       after:'If the agent is not clearly better on a measure you care about, the workflow wins. That is a valid and respectable result to bring to a review.'}
    ],
    ['h','Summary'],
    ['p','Here’s what to take away. An agent is a loop, and a loop needs limits: a step budget, a timeout, a cost ceiling and a place where a person steps in. Most failures come from missing control. And a second agent, or even a first one, has to earn its place with numbers.'],
    ['p','Next, Chapter 27 looks at the standards for connecting tools and agents to the things they use.']
  ],
  capstone:{
    title:'Test a fixed workflow against an agent',
    brief:'You can build the rule-keeper as a fixed set of steps, or as an agent that chooses its own steps. In this chapter you learned to draw the agent loop with its stopping conditions, that most agent failures are control problems and not a lack of intelligence, and when to add a second agent and when not to. Here you build the agent and test whether it beats the fixed workflow from Chapter 25.',
    where:'Your test harness from Chapter 21, extended in code. Write the recommendation in the notes box below.',
    steps:[
      'Give the agent exactly two tools: the pattern checker and the model-based finder. Write an explicit list of what it may use, and nothing else.',
      'Set its limits: the most steps it may take, a time limit, and an exit for “cannot decide” that sends the sentence to a person.',
      'Run the same twenty sentences through the agent and through the fixed workflow from Chapter 25.',
      'For each run, record whether it chose the right tool, how many calls it made, how long it took and what it cost.',
      'Write one paragraph recommending one of the two, with the numbers. Name the number that decided it.'
    ],
    done:[
      'An agent with two tools and written limits.',
      'The same twenty sentences run through both systems.',
      'Four numbers for each system: tool choice, calls, time and cost.',
      'A recommendation that names the number that decided it.'
    ]
  }
},

/* --------------------------------------------------------------- 27 / bk 14 */
{
  id:'ch14p', num:27, part:5, curriculumTier:'core', phase:3, prerequisites:['ch12t','ch13a'], nextUnits:['ch15mm'], minutes:45, labs:[],
  title:'MCP and interoperability: standard connections to tools',
  concept:'MCP is a standard way for AI applications to connect to tools and data. You’ll map how it works, see what a standard does not make safe, and sort tools by what they are allowed to change.',
  plan:{
    first:'Use a real implementation or a local mock to discover and call one tool or resource, and read the actual exchange of messages.',
    build:'Expose two tools and one resource. Test how they are discovered and called, how errors show up, and how consent and authorisation work.',
    brk:'Try access you are not allowed, badly formed arguments, resource content that has been poisoned, and permissions wider than the task needs.',
    artifact:'A trust-boundary diagram and an authorisation matrix.',
    gate:'Explain what interoperability standardises, and what it leaves exactly as dangerous as it was.'
  },
  needs:[
    ['A tool has a typed contract','From Chapter 25. MCP standardises how that contract is published.',25],
    ['Permissions are enforced on the server','Also from Chapter 25, and still true when the call crosses a protocol.',25]
  ],
  words:[
    ["MCP","A protocol that standardises how a host, a client and a server offer and call tools, resources and prompts. It is a protocol, not a framework for building agents."],
    ["Trust boundary","The line across which input stops being yours and becomes something you must check."],
    ["Least privilege","Giving a tool exactly the permissions the task needs and no more. That way, a tool that is never needed can never be misused."],
    ["Capability negotiation","The way two sides of a protocol agree on what each of them can do, before any work begins."]
  ],
  takeaway:[
    'Draw the host, client, server and resource flow, and mark where consent and authorisation happen.',
    'Explain why a standard interface to an unsafe tool is still unsafe.',
    'Classify tools by what they are allowed to change.'
  ],
  story:[
    ['c','Before you start','You don’t need any new setup to follow the ideas. The hands-on units show a small working example.'],
    ['p','In the last two chapters you gave a model tools, and then let an agent choose among them. Every one of those tools was connected by hand. In this chapter we look at a standard way to make those connections, and at what the standard does and does not protect you from.'],
    ['p','The standard is called <strong>MCP</strong>, short for Model Context Protocol. It is a common way to connect AI applications to tools and data sources. You will probably never build one yourself, but you do need to know what it covers and what it leaves out.'],
    ['p','Think of a plug socket. It’s a standard, so any appliance fits the wall. But the standard doesn’t promise that the appliance is safe, and it doesn’t decide who may switch it on. MCP is the same kind of thing.'],
    ['c','Note','The specification defines a host, a client and a server, and gives them standard building blocks: resources, prompts and tools. It also talks about security and user consent in plain terms, which is worth reading. Agent-to-agent protocols are being developed separately. They are for agents that exchange tasks, not for a model that calls a tool.'],
    ['h','Hands-on units'],
    ['p','There are five units. The first draws the whole picture. The next three build a tiny example, then add consent and authorisation, then test it against attacks. The last one looks at how agents talk to other agents.'],
    [
      'unit',
      '14.1',
      'MCP mental model',
      {goal:'Explain the host, the client, the server, tools, resources, prompts and capability negotiation.',
       idea:'A protocol standardises how two sides talk to each other. It does not remove the need for authorisation or for a safe design.',
       prove:'Draw the flow from the host to the client to the server, and then to the tool or resource.',
       build:'Look closely at one real or local exchange of messages.',
       brk:'Ask what happens when a server says it offers a capability that the user is not authorised to use.',
       artifact:'An MCP Trust-Boundary Diagram.',
       check:'Where does the user’s identity live, and where is authorisation enforced?',
       lens:'Once you know the protocol, you can challenge anyone who says “MCP makes it secure”.'}
    ],
    [
      'unit',
      '14.2',
      'Expose a tiny capability',
      {goal:'Build a tiny local provider that offers one safe tool or resource.',
       idea:'The best way to understand a protocol is to look inside a small working example of it.',
       prove:'Expose a read-only function, such as looking up a record on your own machine.',
       build:'Call it from a compatible client, or from a local mock.',
       brk:'Send badly formed arguments, and make the server return errors.',
       artifact:'An MCP Mini-Demo repository.',
       check:'Can you trace the whole path: discovery, the call, and the response?',
       lens:'Keep the demo read-only, so your attention stays on how the protocol works.'}
    ],
    [
      'unit',
      '14.3',
      'Consent and authorization',
      {goal:'Keep two things apart: finding out what a tool can do, and being allowed to use it.',
       idea:'A tool that can be discovered is not automatically a tool you are authorised to use.',
       prove:'Create an authorisation matrix for read, write and privileged tools.',
       build:'Add a policy check before any tool is called.',
       brk:'Try a call you are not authorised to make, and record that it was refused.',
       artifact:'An Authorization Matrix, plus test evidence.',
       check:'Who makes the final decision on authorisation?',
       lens:'Authorisation on the server must never depend on the model following instructions.'}
    ],
    [
      'unit',
      '14.4',
      'MCP security and prompt injection',
      {goal:'Treat resources and tool outputs as content you cannot trust.',
       idea:'When more things can connect, you also get more outside trust boundaries.',
       prove:'Hide a malicious instruction inside a resource, and test how the client’s workflow handles it.',
       build:'Keep data apart from instructions that control the system, and enforce the tool policies.',
       brk:'Try an indirect injection, where the bad instruction arrives inside a resource that was retrieved.',
       artifact:'An MCP Security Test Sheet.',
       check:'Can content you don’t trust cause an action that needs special privilege?',
       lens:'This connects directly to the security chapter.'}
    ],
    [
      'unit',
      '14.5',
      'Agent-to-agent interoperability',
      {goal:'Understand the ideas behind A2A-style protocols: identity, delegation, exchanging tasks, trust and observability.',
       idea:'Protocols between agents solve the problem of connecting them. They do not remove the basic risks of autonomy.',
       prove:'Draw an exchange between two agents, with the boundaries of identity and delegation marked.',
       build:'Define which data and which authority may cross the boundary.',
       brk:'Create a handoff that is malicious or confused, and name the control that should stop it.',
       artifact:'An Agent Interoperability Trust Model.',
       check:'What does the receiving agent actually trust?',
       lens:'Keep your attention on design and governance, not on protocol trivia.'}
    ],
    ['h','A standard does not make a tool safe'],
    ['p','The units lead to one main lesson, and it’s easy to forget when a standard looks tidy and official.'],
    ['key','A standard tool interface does not make an unsafe tool safe. The protocol carries the call; it does not decide whether the call should be allowed.'],
    ['q','I407'],
    ['p','There’s a common mix-up here. MCP is a <strong>protocol</strong>, not a framework that builds agents. It standardises the connection. What gets connected, and who may use it, is still your design.'],
    ['p','Agent-to-agent protocols add one more layer. They let agents find each other and exchange tasks and results. For product decisions, focus on identity, delegation, trust, permissions, error handling and observability, rather than on the fields inside each message.'],
    ['p','Now let’s turn this into something you can use. You’ll sort tools from a system you already know into groups, by what each one is allowed to change.'],
    [
      'try',
      {id:'ch27-classify',
       mins:6,
       min:60,
       rows:4,
       task:'Classify five tools from a system you know as read-only, reversible write, irreversible write, privileged or prohibited.',
       ph:'Tool — class — why',
       after:'The line between reversible and irreversible is where human confirmation belongs. If a tool was hard to place, it probably needs a smaller scope.'}
    ],
    ['h','Summary'],
    ['p','To sum up. MCP is a standard way to connect tools, in the same way a plug socket is a standard. It makes things easier to plug in, but it doesn’t make an unsafe tool safe. Consent, authorisation and trust boundaries are still your job.'],
    ['p','Next, Chapter 28 changes the type of input, from text to documents, images and audio, while keeping the same context and evaluation design.']
  ],
  capstone:{
    title:'Write the tool access policy',
    brief:'The gateway and the browser extension would be allowed to read forms, change text, call outside models and write logs. A standard connection to a tool makes things easier to plug in, but it does not make an unsafe tool safe. In this chapter you learned to mark where consent and authorisation happen and to classify tools by what they are allowed to change. Here you write the access policy for the gateway and the extension.',
    where:'Written only. The policy is what you hand in. Classifying the tools is the thinking. No new code is needed.',
    steps:[
      'List every tool or action the gateway or the browser extension would need: read a form field, read a request body, write to a log, call an outside model, replace text, block a request, send an alert.',
      'Sort each one into a class: read only; a change that can be undone; a change that cannot be undone; special permission needed; or forbidden.',
      'For each class, write what authorisation it needs and whether a person must confirm.',
      'Draw a table with roles down the side (the developer, the compliance reviewer, the end user and the tool itself) and the classes across the top. Mark who may do what.',
      'Mark on a diagram where trust stops, and say which part enforces it.',
      'Write what is recorded for an action that cannot be undone.'
    ],
    done:[
      'Every tool sorted into one of the five classes.',
      'A table of roles against classes.',
      'A diagram with the trust boundary and the part that enforces it.',
      'A description of the record kept for an action that cannot be undone.'
    ]
  }
},

/* --------------------------------------------------------------- 28 / bk 15 */
{
  id:'ch15mm', num:28, part:5, curriculumTier:'core', phase:3, prerequisites:['ch16','ch6','ch14p'], nextUnits:['ch16e'], minutes:50, labs:[],
  title:'Multimodal AI: documents, images and voice',
  concept:'When the input is a PDF, an image or audio, the design stays the same: context, tools, retrieval and evaluation. What changes is what counts as evidence and how you trace it. You’ll find out what text extraction loses, and design a voice pipeline.',
  plan:{
    first:'Feed in one PDF with a table, one image, and one short audio clip. Predict what plain text extraction will lose.',
    build:'Pull out structured facts together with where each one came from, including timestamps when the source is audio.',
    brk:'Try a poor scan, a difficult table, speakers who overlap, and input that mixes languages.',
    artifact:'A multimodal pipeline and an evaluation set for each kind of input.',
    gate:'State where knowing the source and having a person verify are mandatory, not just nice to have.'
  },
  needs:[
    ['Scanned documents need images, not just text','Chapter 16 covered this for images of text.',16],
    ['The answer key has to come from somewhere','From Chapter 6. For a table or an image, it comes from a person.',6]
  ],
  words:[
    ["OCR","Reading text out of an image of text. The quality of the scan sets a floor, and OCR fails quietly on bad input."],
    ["Diarization","Working out who spoke which part of an audio recording. It looks like a technical detail, but it behaves like a privacy decision."],
    ["Document understanding","Pulling out meaning that depends on layout, such as tables, headings and position, and not only the words."],
    ["Media provenance","Knowing where a piece of media came from, and what has been done to it since."]
  ],
  takeaway:[
    'Name three things plain-text extraction loses from a real PDF.',
    'Draw a voice pipeline and mark the steps that affect response time.',
    'Say where the answer key for a multimodal question must come from.'
  ],
  story:[
    ['c','Before you start','Find one real PDF with a table in it, and one short audio recording that you’re allowed to use.'],
    ['p','So far, almost everything in this part has been text. Now the input changes. Real work arrives as PDFs, photos of forms and voice messages. This chapter shows what happens to the same ideas when the input isn’t plain text, and where things quietly go missing.'],
    ['p','Start with a PDF. It holds text, layout, tables, images and hidden metadata. If you extract only the words, most of that is flattened, and nothing tells you it happened. No error appears.'],
    ['p','Here’s an everyday example. Photograph a railway timetable, and read only the words, in order, to someone on the phone. They hear every station name, but no useful departure times. The meaning was in the columns, and the columns didn’t survive.'],
    ['h','Hands-on units'],
    ['p','There are five units. The first looks at documents, the second at images, and the third at voice. The fourth looks at speed, and the fifth shows how to test all of it properly.'],
    [
      'unit',
      '15.1',
      'Document understanding',
      {goal:'Understand why a PDF is a page with a layout, not just a text file.',
       idea:'Pulling out only the text can lose tables, reading order, images, headers and the meaning that comes from where things sit on the page.',
       prove:'Put the extracted text next to the page as it is displayed, and compare the two.',
       build:'Write down the information that was lost, and design a fallback.',
       brk:'Use a scanned page and a page with a lot of tables.',
       artifact:'A Document Understanding Gap Report.',
       check:'Which questions cannot be answered from plain text?',
       lens:'This is a problem with the quality of retrieval before it is ever a problem with the LLM.'}
    ],
    [
      'unit',
      '15.2',
      'Vision and image evidence',
      {goal:'Use evidence from images, with a clear record of where it came from and a way to evaluate it.',
       idea:'Vision models can read what an image shows, but their reading is still a probable guess, not a certainty.',
       prove:'Ask five questions about an image or a table, and mark the region of the image that is the evidence.',
       build:'Record the source image, the question, the answer, and whether a person verified it.',
       brk:'Use images that are low-resolution or unclear.',
       artifact:'A Vision Evaluation Set.',
       check:'Which outputs need a person to verify them?',
       lens:'Any claim about what an image shows should be traceable back to the source image.'}
    ],
    [
      'unit',
      '15.3',
      'Audio and speech pipelines',
      {goal:'Understand the whole path: capture, then ASR (speech to text), then cleaning up the text, then extraction, then confirmation, then action.',
       idea:'Voice AI is a pipeline with several places where it can fail. It is not a single call to a model.',
       prove:'Use a short audio sample and check how good the transcript is.',
       build:'Pull the tasks out of the transcript into structured JSON.',
       brk:'Test accents, people talking over each other, names, and content that mixes languages.',
       artifact:'A Voice Pipeline Spec, plus a 10-case audio eval set.',
       check:'Where can an error first enter the pipeline?',
       lens:'For meeting and task automation, confirmation and privacy are part of the product.'}
    ],
    [
      'unit',
      '15.4',
      'Streaming and latency',
      {goal:'Understand why voice and other interactive multimodal systems care about partial results and about the time to the first response.',
       idea:'Users feel delay differently from servers. Streaming can make a system feel faster without reducing the total work.',
       prove:'Measure the delay at each stage for one sample request.',
       build:'Keep the delays for capture, transcription, the model and the action separate.',
       brk:'Add an artificial delay to one stage, and see what it does to the experience.',
       artifact:'A Latency Budget for the Multimodal Flow.',
       check:'Which delay target will the user actually notice?',
       lens:'Don’t speed up the fastest part while the user is waiting on another one.'}
    ],
    [
      'unit',
      '15.5',
      'Multimodal RAG evaluation',
      {goal:'Design tests where the answer depends on evidence that comes from one specific kind of input.',
       idea:'An evaluation set made only of text can hide failures that happen with images and audio.',
       prove:'Create five text-only cases, five visual or table cases, and five audio cases.',
       build:'Score three things: whether the evidence is correct, whether the extraction is correct, and whether the whole task succeeds.',
       brk:'Add a poor scan, noisy audio and a case in more than one language.',
       artifact:'An Evaluation Matrix for each kind of input.',
       check:'Which failure belongs to extraction, and which belongs to reasoning?',
       lens:'Your set of measures should show you which component is broken, not just that the final answer was wrong.'}
    ],
    ['h','Voice is a pipeline'],
    ['p','Voice is the clearest case of something with many stages. It feels like one thing when you use it, but it isn’t.'],
    ['key','A voice system is a pipeline, not one model. Each stage adds delay, and each stage is a place where meaning can change.'],
    ['q','I408'],
    ['p','Each stage has a name: reading text from an image (OCR), turning speech into text (transcription), and working out who said what (speaker attribution). Each is a step where meaning can be lost, so each needs its own check.'],
    ['p','Speaker attribution is a good one to try yourself, because it raises questions that are not only technical.'],
    [
      'try',
      {id:'ch28-attrib',
       mins:6,
       min:60,
       rows:4,
       task:'For a meeting assistant: who said what, how long is the transcript kept, and what happens when two people talk at once?',
       ph:'Attribution … retention … overlapping speech …',
       after:'Speaker attribution looks like a technical detail, but it behaves like a privacy decision.'}
    ],
    ['h','Summary'],
    ['p','Let’s pull it together. A PDF is a page with layout, so extracting only the words loses things without any warning.'],
    ['p','An image gives you probable readings, not certainties, so you keep track of the source. A voice system is a pipeline, and each stage needs its own check. For a table or an image, the answer key comes from a person.'],
    ['p','Next, Chapter 29 builds a systematic way to prove whether all these components work.']
  ],
  capstone:{
    title:'Specify how the tool handles images and voice',
    brief:'Personal details arrive as photos of cards and as spoken words as well as typed text. In this chapter you learned what plain-text extraction loses from a real document, how a voice pipeline is put together, and where the answer key for a multimodal question must come from. Here you specify how Bharat Privacy Guard deals with scanned IDs and with typed-by-voice sentences.',
    where:'Written only. A specification. No code needed.',
    steps:[
      'Name three things that are lost when text is simply pulled out of a scanned ID card or a PDF. For example: where the text sits on the page, a stamp, and a handwritten note.',
      'Draw the path for a voice message: speech turned into text, then the tool, then the safe text. Mark the steps that add delay.',
      'Write the privacy boundary: whose voice is recorded, where it is recorded, and what notice the person gets.',
      'Write how long the typed-out speech is kept and how it is deleted.',
      'Write what happens when the speech-to-text is unsure of a number, for example a digit it heard twice. Write the rule.',
      'Say where the answer key for voice and images comes from, and write three made-up voice-typed sentences with no punctuation to add to it.',
      'Write the measures you will track, including one for how often a spoken number is heard correctly.'
    ],
    done:[
      'Three things lost by plain text extraction.',
      'A voice path with the delays marked.',
      'The privacy boundary and the keep-and-delete rule.',
      'A rule for unsure numbers, three new answer-key rows, and the measures to track.'
    ]
  }
}
,

/* --------------------------------------------------------------- 29 / bk 16 */
{
  id:'ch16e', num:29, part:5, curriculumTier:'core', phase:4, prerequisites:['ch6','ch14','ch145'], nextUnits:['ch17o','ch19pm','ch20d','b3'], minutes:60, labs:['judge'],
  title:'Evaluation engineering: test sets and release gates',
  concept:'In Chapter 6 you learned to measure. Now you turn that measuring into a release process: a test set with a version number, scores at several levels, and a gate that decides whether a change goes live.',
  plan:{
    first:'Before you improve anything, write twenty tests. Include normal questions, reworded ones, unclear ones, ones with no answer, other languages, tricky attacks and cases where the tool must be used.',
    build:'Automate the checks for retrieval, structure, tool use and the final answer. Use a model as judge only where a simple exact check cannot do the job.',
    brk:'Change the prompt, then the model, then the index, one at a time, and run the regression test each time. Then compare the judge’s labels with human labels on a small sample.',
    artifact:'A working evaluation harness and a release gate.',
    gate:'No change goes live because a demo looked better. It goes live because it passed the gate.'
  },
  needs:[
    ['Answer keys, recall and precision','Chapter 6 built the measuring that this chapter scales up.',6],
    ['A model can grade output at scale','Chapter 14 introduced the judge, and the ways it can be biased.',14],
    ['Improvement comes from reading failures by hand','You learned this in Chapter 14.5. Automation does not replace it.',14.5]
  ],
  words:[
    ["Golden set","The carefully chosen cases, with a version number, that every change is measured against."],
    ["LLM-as-judge","Using a model to score another model’s output. It is a scorer, not an oracle, so you should know how often it disagrees with human labels."],
    ["Regression test","A case that passed before and must still pass now."],
    ["Release gate","The thresholds a change has to clear before it goes live, however good the demo looked."]
  ],
  takeaway:[
    'Build a test set with a version number that still works after a prompt, model or index change.',
    'Score the system at several levels, so that a good final number cannot hide a broken part.',
    'Say where an LLM judge is fine to use and where it is not.'
  ],
  story:[
    ['c','Before you start','Bring your answer key from Chapter 6, your judge from Chapter 14 and your experiment harness.'],
    ['p','In Chapter 6 you made an answer key and learned to score against it. That was measuring. Now we make it a habit the whole team follows, and a rule that decides whether a change goes live.'],
    ['p','Here’s what you’ll build: a fixed set of test questions, one consistent way of grading them, and a pass mark agreed in advance. Once you have those, “the demo looked better” stops being an argument.'],
    ['p','Think about how a school works. It doesn’t judge a student on one good answer. Everyone sits the same paper, it is marked the same way, and the pass mark is agreed beforehand. An AI feature needs the same fairness.'],
    ['key','Every AI feature needs a test set, and the test set needs a version number. If you cannot rerun an evaluation after a change, it is only an anecdote.'],
    ['h','Hands-on units'],
    ['p','The seven units below take you from the test set to the final release decision. Each one builds on the one before.'],
    [
      'unit',
      '16.1',
      'Golden datasets',
      {goal:'Create a set of cases, with a version number, that includes typical cases, edge cases and cases where the system has failed.',
       idea:'A golden dataset is the team’s memory of what “good” means for your application.',
       prove:'Create at least 30 cases. Cover the normal path, reworded questions, unclear questions, questions with no answer, other languages, attacks and cases that need a tool.',
       build:'For each case, store the behaviour you expect. Where you can, also store the IDs of the evidence it should use.',
       brk:'Remove one category of cases. See which regressions you can no longer notice.',
       artifact:'Golden Dataset v1.0.',
       check:'Does the set reflect the risks real users face, or only the easy demos?',
       lens:'The dataset becomes the contract for product quality.'}
    ],
    [
      'unit',
      '16.2',
      'Error taxonomy',
      {goal:'Sort failures into kinds, so that you fix causes and not just symptoms.',
       idea:'“Wrong answer” is too broad to tell engineers what to fix.',
       prove:'Create the categories: retrieval miss, wrong chunk, stale data, instruction failure, schema failure, tool failure, authorization failure and hallucination.',
       build:'Label 20 real failures with these categories.',
       brk:'Ask two people to label the same failures. Then compare where they disagree.',
       artifact:'Error Taxonomy plus labelled examples.',
       check:'Which categories lead to a clear action?',
       lens:'A useful set of categories changes what the team does next.'}
    ],
    [
      'unit',
      '16.3',
      'Retrieval metrics',
      {goal:'Measure Recall@k, Precision@k and similar ranking measures, using clear labels for what counts as relevant.',
       idea:'A metric means something only when the definition of “relevant” is clear.',
       prove:'For each query, mark which chunks are relevant. Then calculate Recall@k and Precision@k.',
       build:'Compare what you get at k=1, 3, 5 and 10.',
       brk:'Add some distractor chunks, which look related but are not, and watch how the metrics change.',
       artifact:'Retrieval Evaluation Notebook.',
       check:'What exactly counts as relevant?',
       lens:'Never report a retrieval metric without saying how you decided what is relevant.'}
    ],
    [
      'unit',
      '16.4',
      'Generation and task success',
      {goal:'Check whether the final answer is correct, grounded in the evidence, complete and useful for the task.',
       idea:'A system can have a good retrieval score and still give a bad answer.',
       prove:'Write yes-or-no or graded criteria for whether an answer is correct and grounded.',
       build:'Score a fixed sample, using labels from people.',
       brk:'Include answers that are only partly correct, and answers that sound too sure of themselves.',
       artifact:'Generation Rubric plus a labelled sample.',
       check:'Can two reviewers apply the rubric and reach the same result?',
       lens:'Acceptance criteria should be something you can observe, not just “it sounds good”.'}
    ],
    [
      'unit',
      '16.5',
      'LLM-as-judge',
      {goal:'Use a model as judge where an exact check is not enough, and then check the judge against human labels.',
       idea:'A judge is one more component that can be wrong, so measure how often it agrees with people.',
       prove:'Have a judge score 20 examples for groundedness or relevance.',
       build:'Compare the judge’s decisions with the human labels, and calculate how often they disagree.',
       brk:'Swap the order of the answers, or make them longer or shorter. See whether the judge favours position or length.',
       artifact:'Judge Validation Report.',
       check:'Where does the judge disagree with people, and why?',
       lens:'Never let a judge you have not checked quietly become the authority on whether you release.'}
    ],
    [
      'unit',
      '16.6',
      'Regression and CI gates',
      {goal:'Run the evaluation automatically whenever a prompt, model, index or tool changes.',
       idea:'An AI system can get worse without any error showing up when the code is built.',
       prove:'Create one command that runs the golden set and prints a summary.',
       build:'Set thresholds, and make the run fail when quality or safety drops below them.',
       brk:'Change a prompt, and check that CI catches the regression.',
       artifact:'Automated Evaluation Suite plus Release Gate.',
       check:'What exact condition blocks a release?',
       lens:'This is the AI version of a test suite, for software whose behaviour can vary.'}
    ],
    [
      'unit',
      '16.7',
      'Evaluation release decision',
      {goal:'Bring quality, safety, latency and cost together into one release decision, without hiding any trade-off.',
       idea:'Shipping is a decision with several dimensions. A single overall score can hide failures you cannot accept.',
       prove:'Define a quality threshold, a safety threshold, a latency SLO (the response time you promise), a cost ceiling and a rollback trigger.',
       build:'Run a candidate release through the gate.',
       brk:'Create a model that improves quality but breaks the cost limit or the safety limit.',
       artifact:'Release Decision Record.',
       check:'Which threshold can never be negotiated?',
       lens:'A PM owns the framework for the decision, even when engineers build it.'}
    ],
    ['q','I409'],
    ['h','Measure at several levels'],
    ['p','An AI system has several parts, so one score for the whole thing is not enough. The catch is that a fluent model can cover for missing evidence, and it does so often enough to look fine in a demo.'],
    ['key','Evaluate several levels at once. A good end-to-end score can hide a badly broken retriever.'],
    ['p','The table shows five levels. Read down the right-hand column: each question is one that a release decision needs answered.'],
    [
      'tb',
      ['Layer','Example metric','The release question it answers'],
      [
        ['Retrieval','Recall@k, Precision@k','Did we fetch the right evidence?'],
        ['Generation','Groundedness, task success','Did the answer use the evidence correctly?'],
        ['Tool use','Tool-selection accuracy','Did it call the right capability?'],
        ['Operations','p95 latency, cost per task','Can we afford to run it?'],
        ['Safety','Attack success rate','Can adversarial input break the controls?']
      ]
    ],
    ['p','You will meet many evaluation products. Each one is selling an answer to one of three questions.'],
    ['p','The first is <strong>what do we test on?</strong> The answer is a fixed set you keep, with real cases where possible. The second is <strong>who grades it?</strong> Use an exact check where you can, a person where it matters, and a model where neither can keep up. The third is <strong>what score lets it ship?</strong>'],
    ['p','Now try writing that third answer yourself.'],
    [
      'try',
      {id:'ch29-stop',
       mins:6,
       min:60,
       rows:4,
       task:'Write the sentence that stops a release. Not a policy: the actual sentence, with numbers, that you would say in the meeting.',
       ph:'We are not shipping because …',
       after:'If your sentence contains the word “seems”, it will not stop anything. Thresholds stop releases; impressions do not.'}
    ],
    ['h','Summary'],
    ['p','So here is the whole chapter in a few lines. You keep a test set with a version number. You score at several levels, so a good total cannot hide a broken part. You use a model as judge only after checking it against people. And you agree the pass mark before you look at the results.'],
    ['p','Next, in Chapter 30, you’ll look at how to watch the system continuously once it is live.']
  ],
  capstone:{
    title:'Build the release gate',
    brief:'Without a release gate, measuring just produces a report that nobody has to act on. In this chapter you learned to build a test set that still works after a change of prompt, model or index. You also learned to score at several levels, so that a good total cannot hide a broken part, and where an automatic marker is acceptable. Now you build the gate that every new version of the tool must pass before it ships.',
    where:'Your test harness from Chapter 21, extended in code.',
    steps:[
      'Open your harness. Turn your answer key into a test set with a version number: a file that carries the number and a note listing what changed since the last version. Call it the final version for now.',
      'Score at three levels: each finder on its own, the whole tool on whole sentences, and the cleaned text marked by your automatic marker from Chapter 14.',
      'Write the gate. For each score, write the lowest number a new version may have in order to be released. Add a rule that the score for any single kind of ID may not drop, even if the overall score goes up.',
      'Make the gate run with one command that prints PASS or FAIL.',
      'Prove it works. Change one rule so that it breaks Aadhaar finding, run the gate, and show that it says FAIL.',
      'Say where the automatic marker is acceptable in the gate and where only your own marking will do.'
    ],
    done:[
      'A test set with a version number and a change note.',
      'Scores at three levels.',
      'A gate with a minimum for every score and a rule for each kind of ID.',
      'A one-command run that prints PASS or FAIL, and proof that it fails a broken change.'
    ]
  }
},

/* --------------------------------------------------------------- 30 / bk 17 */
{
  id:'ch17o', num:30, part:5, curriculumTier:'core', phase:4, prerequisites:['ch115','ch15','ch16e'], nextUnits:['ch18s','ch20d','b5'], minutes:55, labs:['cache'],
  title:'Observability and LLMOps: traces, cost and rollback',
  concept:'When an answer is wrong, slow or expensive, you need to find out why without guessing. You’ll design a trace record, treat cost as an architecture metric, and give every part a version, so that any change can be rolled back.',
  plan:{
    first:'Trace one request by hand, and time every stage with a stopwatch.',
    build:'Record the request id, the model and prompt version, the retrieval ids, the tool calls, the latency, the tokens, the status and the evaluation result.',
    brk:'Deliberately create a slow request, an expensive one and a low-quality one. Then work out what went wrong in each, using only its trace.',
    artifact:'A specification for a six-panel view of the running system.',
    gate:'Say which signals should start an investigation, which should trigger a rollback, and which are just noise.'
  },
  needs:[
    ['Users notice response time','You saw this in Chapter 11.5. A trace shows where the time went.',11.5],
    ['Cost can be measured per request','Chapter 15 built the arithmetic that this chapter records.',15],
    ['A release gate needs evidence','This comes from Chapter 29. Once you are live, traces provide that evidence.',29]
  ],
  words:[
    ["Trace","The record of one request’s journey through the system: what was retrieved, which prompt version ran, and what each stage cost in time and tokens."],
    ["Telemetry","The measurements a running system sends out about itself, such as timings, counts, errors and usage. They let somebody see what the system is doing without reading the code."],
    ["Canary release","Sending a small share of real traffic to a change before all of it."],
    ["Drift","Quality moving without anybody deploying anything, because the inputs, the documents or the provider changed underneath you."]
  ],
  takeaway:[
    'Design a trace record that can answer “why was this answer wrong?” after the fact.',
    'Treat cost as an architecture metric rather than a finance report.',
    'Name what must be versioned so that a change can be rolled back.'
  ],
  story:[
    ['c','Before you start','Open your experiment harness. You’ll extend its records into full traces.'],
    ['p','In the last chapter you built a gate that checks a change before it goes live. But the story doesn’t end at release. One day your live system will give a wrong answer, and someone will ask why. This chapter makes sure your answer is not “we can’t tell”.'],
    ['p','Think of a parcel that goes missing. The courier can tell you where it was last scanned, because every parcel is scanned at every step. Without those scans, a lost parcel can never be traced.'],
    ['key','A <strong>trace</strong> records one request’s path through the system. If you can only see the input and the output, every diagnosis is a guess.'],
    ['h','Hands-on units'],
    ['p','The six units below start with a single trace and end with a full view of the system. Each one adds a layer to the one before.'],
    [
      'unit',
      '17.1',
      'Trace one request',
      {goal:'Build a structured trace for one AI request.',
       idea:'A trace is a timeline of one run, together with the evidence about it.',
       prove:'Record the request ID, the model, the prompt version, the retrieved IDs, the tools used, the latency, the tokens and the outcome.',
       build:'Save the trace as JSON.',
       brk:'Remove one field. Then ask yourself whether you could still reproduce the incident.',
       artifact:'Trace Schema v1.0.',
       check:'What is the least evidence you need in order to debug a problem?',
       lens:'Write down what you need to observe before the production incidents happen, not after.'}
    ],
    [
      'unit',
      '17.2',
      'Latency and throughput',
      {goal:'Measure the latency of each stage, and learn the difference between p50 and p95.',
       idea:'The average latency can hide the slow cases that some users really experience.',
       prove:'Measure the retrieval, reranking, model and tool stages separately.',
       build:'Calculate p50 and p95 for a small run, or for a larger sample if you have one.',
       brk:'Add an artificially slow dependency, and see how it changes p95.',
       artifact:'Latency Budget plus a p50/p95 report.',
       check:'Which stage is responsible for the slowest cases?',
       lens:'Service-level objectives (SLOs) should match what users experience, not just what servers report.'}
    ],
    [
      'unit',
      '17.3',
      'Token and cost telemetry',
      {goal:'Track input and output tokens, and other costs that vary, for each task.',
       idea:'Cost is an architecture metric, because the context, the model, the retries and the routing all change what you spend.',
       prove:'When you build the lab, calculate the cost per request using the provider’s current pricing.',
       build:'Compare two strategies for the model and the context.',
       brk:'Add retries and a large context, and watch the cost grow.',
       artifact:'Unit Economics Model v1.0.',
       check:'What is the cost per successful task, and not just the cost per call?',
       lens:'Conversations with finance get easier when every architecture choice has a cost you can measure.'}
    ],
    [
      'unit',
      '17.4',
      'Drift and feedback',
      {goal:'Notice when quality changes after a change in the data, prompt, model or user behaviour.',
       idea:'An AI system can get worse even when no one has changed the code.',
       prove:'Create a baseline evaluation, and compare a later sample against it.',
       build:'Track the type of complaint, the no-answer rate, escalations and task success.',
       brk:'Introduce a changed document format, or a new way users phrase things.',
       artifact:'Drift/Feedback Report.',
       check:'Which signal tells you that quality has changed, before the complaints pile up?',
       lens:'Signals from live use complement the offline evaluation you did before release.'}
    ],
    [
      'unit',
      '17.5',
      'Versioning and rollback',
      {goal:'Give versions to the prompts, models, indexes, schemas and tool contracts.',
       idea:'If you cannot roll back one component at a time, debugging turns into guesswork.',
       prove:'Create version IDs for the prompt, the model, the index and the tool schema.',
       build:'Run two versions side by side.',
       brk:'Simulate a bad prompt release, and roll it back.',
       artifact:'Version Matrix plus Rollback Procedure.',
       check:'Can you say exactly what changed?',
       lens:'Versioning is how you control delivery. It is not paperwork.'}
    ],
    [
      'unit',
      '17.6',
      'Production dashboard',
      {goal:'Turn the telemetry into a six-panel view of operations: quality, safety, latency, cost, traffic and failures.',
       idea:'A dashboard should answer two questions: “is the system healthy?” and “where do I look next?”',
       prove:'For each panel, define the metric, the source, the owner and the threshold.',
       build:'Create a mock dashboard or a spreadsheet.',
       brk:'Remove one signal at a time, and see which incident becomes harder to diagnose.',
       artifact:'Six-Panel Observability Specification.',
       check:'Which alerts should wake up a person, and which should only be watched?',
       lens:'A PM is responsible for clarity in operations, just as much as the platform team is.'}
    ],
    ['q','I410'],
    ['h','Cost is an architecture metric'],
    ['p','You can see where the time goes from a trace. The same is true of money. Every token, every search and every call to a tool adds to the bill, so cost is part of how you design the system. It isn’t only something finance checks at the end of the month.'],
    ['key','Model the cost of one user task from start to finish: input tokens, output tokens, embeddings, retrieval, and tool and API calls. Then you can compare two designs before building either.'],
    ['h','Change one thing at a time'],
    ['p','Some terms you’ll hear are canary release, shadow traffic, rollback and drift. They all come from the same practice, and it’s simple to describe. Change one thing at a time. Let a few users see it first. Keep the old version ready. And keep watching after the release.'],
    ['key','Most incidents can be prevented in four ways. Change one variable at a time. Give versions to prompts, models, indexes and tool contracts. Make sure every part can be rolled back. And never let a prompt change skip evaluation. Teams break that last rule most often, because editing a prompt does not feel like a deployment.'],
    ['p','Here’s a puzzle to test the idea of drift. Take a moment with it.'],
    [
      'try',
      {id:'ch30-slower',
       mins:6,
       min:60,
       rows:4,
       task:'Your assistant got slower this week, and nobody deployed anything. Name three things that could have changed.',
       ph:'1 … 2 … 3 …',
       after:'Traffic mix, document volume, and the provider’s own response time. None of these are in your repository, which is why they need to be on your dashboard.'}
    ],
    ['h','Summary'],
    ['p','So a wrong answer should never leave you saying “we can’t tell”. A trace shows you the path of each request. Cost is something you design and measure. And a version on every part means any change can be rolled back.'],
    ['p','Next, in Chapter 31, you’ll look at the same system from an attacker’s side.']
  ],
  capstone:{
    title:'Plan how to watch the tool once it is live',
    brief:'A tool in use can go wrong in ways your tests never saw, and you will only know if you are watching. In this chapter you learned to design a trace that can answer “why was this answer wrong?” afterwards, to treat cost as an engineering number, and to name what must be versioned so a change can be undone. Now you plan six panels for watching Bharat Privacy Guard.',
    where:'Your test harness from Chapter 21, extended in code to save full traces. Then write the plan in the notes box below.',
    steps:[
      'Extend your harness so that every run saves a full trace: the input, each step, each finding, the time, the tokens, the cost and any error. Never put the real personal details into a trace that is shown on a dashboard.',
      'Design six panels: quality, safety, response time, cost, traffic and failures. For every panel, write which data feeds it and how often it is worked out. A panel with no data source is only a wish.',
      'Fill in what each panel shows. Quality: which number, worked out from what. Safety: how often an attack from Chapter 13 gets through. Response time: the median and the slowest, split by stage. Cost: per message and per day, with the parts visible. Traffic: how many messages, and the mix of English, Hindi and Hinglish. Failures: counts by type, not one error rate.',
      'For each panel, write the level that makes you investigate and the level that makes you roll back.',
      'List what must be versioned so that a change can be undone: the rules, the model, the instructions, the reference lists and the answer key.'
    ],
    done:[
      'Traces saved by your harness.',
      'Six panels, each with a named data source.',
      'An investigation level and a rollback level for every panel.',
      'A list of what is versioned.'
    ]
  }
},

/* --------------------------------------------------------------- 31 / bk 18 */
{
  id:'ch18s', num:31, part:5, curriculumTier:'core', phase:4, prerequisites:['ch13','ch12t','ch75'], nextUnits:['ch19pm','ch21cap','b5'], minutes:55, labs:['injection','trifecta'],
  title:'Security and governance: controls around an untrusted model',
  concept:'Assume the model will be manipulated. The application, the retrieved content, the tools, the identity layer and the data pipeline are all part of the attack surface. You’ll apply least privilege, and build a risk register in which every control has a test.',
  plan:{
    first:'Put a malicious instruction inside a document that your own system retrieves. Then test whether it can override the task or pull out a secret.',
    build:'Add trust boundaries, least privilege, input validation, secret isolation, audit logging and confirmation steps.',
    brk:'Run tests for prompt injection, indirect injection, tool abuse, data leakage and excessive agency.',
    artifact:'A security report and an AI risk register.',
    gate:'Explain why retrieved content is untrusted input, to someone who thinks it is simply their own data.'
  },
  needs:[
    ['Prompt injection has no complete fix','Chapter 13 showed you this. This chapter builds the controls around the problem.',13],
    ['Tools are a security boundary','You learned this in Chapter 25. Least privilege puts it into practice.',25],
    ['Retrieved text can carry attacks','In Chapter 7.5 you planted one in your own system.',7.5]
  ],
  words:[
    ["Prompt injection","Text that reaches the model as data and gets followed as an instruction. The model cannot reliably tell the two apart, so the boundary has to be enforced around it."],
    ["Indirect injection","The same attack, arriving through content the system retrieved and not through what the user typed."],
    ["Excessive agency","Giving a system more permission, reach or independence than its task needs."],
    ["Risk register","A table in which every row ends in a test that has been run, and not just in a control that has been described."]
  ],
  takeaway:[
    'Explain why retrieved content is untrusted input, whoever owns the document.',
    'Apply least privilege to an agent, and show what breaks.',
    'Produce a risk register in which every control has evidence next to it.'
  ],
  story:[
    ['c','Before you start','Bring your injection audit from Chapter 13 and the tool classification from Chapter 27.'],
    ['p','In the last chapter you learned to watch a live system. Now we ask what happens when someone tries to misuse it. The answer starts with a plain fact: the model gives everything it reads the same level of trust.'],
    ['p','Whether that is dangerous depends on the system around the model: what it is given, and what it is allowed to do next. That’s why most of AI security is about the system, and not about the model.'],
    ['p','Here’s an everyday picture. Someone slips a note into a stack of paperwork that says “approve this one without checking”. The clerk can read perfectly well. The problem is that nothing in the process separates an instruction from a document.'],
    ['key','Prompt injection is an input trust problem. The model cannot reliably tell an instruction from data, so the system that assembles the context must enforce the boundary. Asking nicely in the system prompt is not enough.'],
    ['h','Hands-on units'],
    ['p','The eight units below go from the first attack, through the controls that stop it, to the checklist that decides a release.'],
    [
      'unit',
      '18.1',
      'Prompt injection',
      {goal:'Understand direct and indirect prompt injection as attacks that use input you cannot trust.',
       idea:'Instructions hidden in what the user typed, or in retrieved content, can compete with your application’s own instructions.',
       prove:'Place malicious instructions in a document, and test the RAG assistant with it.',
       build:'Keep your trusted control instructions apart from untrusted evidence.',
       brk:'Try to make the model reveal a secret, or use a tool, through retrieved text.',
       artifact:'Prompt Injection Test Report.',
       check:'What stopped the attack: the model’s own behaviour, or a policy in the application?',
       lens:'Never describe the prompt text alone as a security boundary.'}
    ],
    [
      'unit',
      '18.2',
      'Sensitive information disclosure',
      {goal:'Protect secrets, PII and confidential data in prompts, in retrieval and in traces.',
       idea:'A model can protect information only if the application controls what the model receives and what it can return.',
       prove:'Create a test collection of documents with made-up sensitive fields.',
       build:'Filter or redact before the model sees anything, and log each access decision.',
       brk:'Ask for another user’s data, in plain language and through tool calls.',
       artifact:'Data Leakage Test Matrix.',
       check:'Where is authorization enforced?',
       lens:'Map privacy requirements to the paths the data actually takes. Policy documents alone are not enough.'}
    ],
    [
      'unit',
      '18.3',
      'Improper output handling',
      {goal:'Check the model’s output before you pass it on to other systems.',
       idea:'Generated text becomes dangerous when another system treats it as a trusted command, as SQL, as HTML or as business data.',
       prove:'Create a structured output, and validate it against a list of allowed values.',
       build:'Use allowlists and typed interfaces before anything is executed.',
       brk:'Inject malicious strings into the generated fields.',
       artifact:'Output Validation Checklist plus tests.',
       check:'Which downstream component could interpret the output as an instruction?',
       lens:'Treat model output as untrusted input.'}
    ],
    [
      'unit',
      '18.4',
      'Excessive agency',
      {goal:'Limit the tools and actions that an autonomous system can use.',
       idea:'The more permissions a system has, the bigger the damage when something goes wrong.',
       prove:'Classify each tool by how much privilege it needs and whether its actions can be undone.',
       build:'Remove the tools it does not need, and compare task success before and after.',
       brk:'Try a task that asks for an action that cannot be undone.',
       artifact:'Agency Permission Matrix.',
       check:'What is the worst damage if the model is wrong?',
       lens:'How much freedom the system gets should depend on the business risk.'}
    ],
    [
      'unit',
      '18.5',
      'Retrieval authorization',
      {goal:'Enforce ACLs (who may see what) and tenant boundaries before evidence reaches the model.',
       idea:'Retrieving the right content for the wrong tenant is still a security breach.',
       prove:'Create two users and two groups of documents.',
       build:'Apply the metadata filters on the server side.',
       brk:'Try to retrieve across tenants, and to retrieve with permissions that are out of date.',
       artifact:'ACL Retrieval Test Report.',
       check:'Can the model ever see evidence it is not authorized to access?',
       lens:'Don’t make “remembering” the authorization rules the model’s job, as your only control.'}
    ],
    [
      'unit',
      '18.6',
      'Audit logging',
      {goal:'Capture enough evidence to rebuild what happened in any action that matters for security.',
       idea:'An audit trail should show who did what, when, under which policy, with which tool, and what happened.',
       prove:'Design an audit record for one tool action.',
       build:'Write the approval event and the execution event separately.',
       brk:'Change the payload after it was approved, and check that the mismatch is visible.',
       artifact:'Audit Log Schema plus a sample trail.',
       check:'Could someone responding to an incident reconstruct the action?',
       lens:'Being able to audit is part of being ready for production.'}
    ],
    [
      'unit',
      '18.7',
      'Governance and risk register',
      {goal:'Turn security and AI risks into owners, controls and evidence.',
       idea:'Governance becomes useful when every risk has a control you can test, and an owner.',
       prove:'Create fields for the risk, the impact, the likelihood, the control, the owner, the evidence and the remaining risk.',
       build:'Review the register against the architecture of your capstone.',
       brk:'Mark one control “policy only”, and ask what evidence is missing.',
       artifact:'AI Risk Register.',
       check:'Which risks are still left after the controls?',
       lens:'A risk register is a working tool, not a compliance decoration.'}
    ],
    [
      'unit',
      '18.8',
      'Security release gate',
      {goal:'Turn red-team findings into release criteria.',
       idea:'Security tests must block a release when the remaining risk is above the agreed threshold.',
       prove:'Define the mandatory checks for injection, leakage, authorization and unsafe actions.',
       build:'Run the test suite before and after a change of prompt or model.',
       brk:'Create a change that improves quality but weakens security.',
       artifact:'Security Go/No-Go Checklist.',
       check:'What counts as an automatic blocker?',
       lens:'Security belongs in the same release process as quality and cost.'}
    ],
    ['q','I411'],
    ['h','Least privilege for agents'],
    ['p','Least privilege means giving something only the access it needs to do its job, and nothing more. For an agent, that mostly means tools.'],
    ['key','Apply least privilege to agents. If an agent has a tool it never needs, an attacker can persuade it to use that tool.'],
    ['p','Controls are only half the story, because each one needs proof. The table pairs each risk with a control, and with the evidence that shows the control works.'],
    [
      'tb',
      ['Risk','Example control','The evidence that it works'],
      [
        ['Prompt injection','Content separation, tool allowlist, confirmation','Red-team test results'],
        ['Data leakage','Access-aware retrieval, redaction, log controls','Access tests and trace samples'],
        ['Excessive agency','Least privilege plus approval gates','Tool policy and approval logs'],
        ['Model drift or deprecation','Versioning plus a regression suite','Release and evaluation report'],
        ['Unsafe output','Policy filter and human escalation','Safety test set results']
      ]
    ],
    ['h','Test every control'],
    ['key','A safeguard nobody has tested only exists on paper. Next to each safeguard, write the test that proves it works, and run it.'],
    ['p','Try this with something from your own workplace.'],
    [
      'try',
      {id:'ch31-evidence',
       mins:6,
       min:60,
       rows:4,
       task:'Pick one control your organisation says it has. Write what evidence would prove it works, and whether that evidence exists.',
       ph:'The control … the evidence would be … it exists / does not exist because …',
       after:'The gap between the claim and the evidence is your real risk. A risk register exists to track that gap.'}
    ],
    ['h','Summary'],
    ['p','To sum up: the model trusts everything it reads, so the system around it has to draw the lines. Retrieved content is untrusted input. Give every agent only the tools it needs. And write a test next to every control, so that your register holds evidence and not just good intentions.'],
    ['p','Next, in Chapter 32, you’ll turn this technical system into a product specification.']
  ],
  capstone:{
    title:'Write the risk register, with a test for every control',
    brief:'A risk register that ends in controls is only a list of good intentions. In this chapter you learned why retrieved text is untrusted input whoever owns it, how to apply least privilege to an agent, and to put evidence next to every control. Now you write the risk register for Bharat Privacy Guard.',
    where:'Written only. The register draws on evidence from your earlier chapters. No new code is needed.',
    steps:[
      'For each risk, write eight things: the asset (what is at stake), the threat, the impact, how likely it is, the control, the owner, the test, and the risk that remains.',
      'Include at least these eight risks: a missed Aadhaar number; a false alarm that blocks a real message; an attack hidden in the text reaching the model; the provider keeping your data; the model provider going down; the reference lists going out of date; the logs storing raw personal data; and a person with more access than they need.',
      'For every control, write the test that shows it works, and run that test wherever you can. A control with no test is only an intention.',
      'Apply least privilege to the tool. List what each part can reach, remove everything it does not need, and say what breaks.',
      'Write two lines on why text retrieved from your own reference lists must still be treated as untrusted input.'
    ],
    done:[
      'A register of at least eight risks with all eight columns filled in.',
      'A test for every control, with the results of those you ran.',
      'A least-privilege list and what broke when you removed access.',
      'Two lines on why retrieved text is untrusted.'
    ]
  }
},

/* --------------------------------------------------------------- 32 / bk 19 */
{
  id:'ch19pm', num:32, part:5, curriculumTier:'core', phase:5, prerequisites:['ch16e','ch6','ch20'], nextUnits:['ch20d','b7'], minutes:55, labs:['prdial'],
  title:'AI product management: specs for a probabilistic system',
  concept:'An AI feature cannot promise the same output every time. So its spec must say how often it succeeds, on which test set, and what happens the rest of the time. You’ll write acceptance criteria as ranges, keep different kinds of metrics apart, and design the interface states.',
  plan:{
    first:'Take “return the correct document” and turn it into an acceptance criterion that you could actually test.',
    build:'Write a compact AI PRD. Cover the problem, the baseline, the scope, the context, the tools, the failure modes, the human role, evaluation, safety, latency, cost, rollout and rollback.',
    brk:'Attack it with three scenarios: a wrong answer, an over-refusal, and a harmful action.',
    artifact:'An AI PRD, a release gate and a metric map.',
    gate:'An engineer can build from it, and a leader can understand the trade-off it makes.'
  },
  needs:[
    ['Quality is a measured number against a test set','Chapter 29 built the gate that this PRD refers to.',29],
    ['Failure costs differ by use case','You saw this in Chapter 6. Choosing which failure to accept is a product decision.',6],
    ['What the user sees when it is wrong','Chapter 20 designed the failure states.',20]
  ],
  words:[
    ["AI acceptance criterion","A metric, a named test set and a stated tolerance. “Always correct” is not something you can hold a probabilistic system to."],
    ["Product metric","What the user achieved. Keep it separate from system quality metrics and from operating cost, because mixing them leaves a dashboard unable to answer anything."],
    ["Rollback trigger","The specific, observable condition that causes a change to be withdrawn. Write it so that someone can act on it without you."],
    ["Non-goal","Something you have deliberately decided not to do, written down so that nobody can assume it back in later."]
  ],
  takeaway:[
    'Write an acceptance criterion as a rate with a tolerance, not as a promise.',
    'Keep business outcomes, model metrics and operating metrics apart.',
    'Design the three interface states that an AI feature needs.'
  ],
  story:[
    ['c','Before you start','Bring your release gate from Chapter 29 and the four interface states from Chapter 20.'],
    ['p','So far you’ve built, measured, watched and secured an AI system. Now you write the spec that ties it together. And the first lesson is a hard one: “it returns the right document” is a promise no probabilistic system can keep.'],
    ['p','So write down something you can keep. How often does it return the right document? Measured on which cases? And what does the system do the rest of the time? That rest is never zero.'],
    ['p','Here’s an everyday comparison. A railway can’t promise a train at exactly 9:04. So it publishes the share of trains that arrive within a few minutes of schedule, measured every month. You can plan your day around that number.'],
    ['key','For an AI feature, “done” means a measured success rate within a tolerance, not one fixed output.'],
    ['h','Hands-on units'],
    ['p','The seven units below start from the problem and end with the full PRD. Each one gives you something you’ll use in the next.'],
    [
      'unit',
      '19.1',
      'AI problem framing',
      {goal:'Decide whether AI is justified, and define the outcome the user wants.',
       idea:'Start from the workflow and the pain, not from the model.',
       prove:'Write down the current process, the user’s pain, the baseline and an outcome you can measure.',
       build:'Where you can, build a baseline that does not use AI.',
       brk:'Compare your AI idea with a deterministic alternative, one that always gives the same output for the same input.',
       artifact:'Problem Framing One-Pager.',
       check:'Why AI, and not ordinary software?',
       lens:'This stops you from starting with “AI-first” solutions.'}
    ],
    [
      'unit',
      '19.2',
      'AI acceptance criteria',
      {goal:'Turn a vague idea of “correctness” into thresholds you can measure.',
       idea:'AI output varies, so “done” must describe a spread of results and a tolerance.',
       prove:'Write criteria for retrieval, generation, safety, latency and cost.',
       build:'Link each criterion to a test set and a way of measuring.',
       brk:'Create a case where quality improves but latency breaks the SLO, the response time you promised.',
       artifact:'AI Acceptance Criteria Sheet.',
       check:'Can engineering run the test without asking what “good” means?',
       lens:'Acceptance criteria are the contract between product and engineering.'}
    ],
    [
      'unit',
      '19.3',
      'Failure-first UX',
      {goal:'Design around uncertainty, ambiguity and failure, instead of hiding them.',
       idea:'A good AI experience helps users understand the system’s limits, and what to do about them.',
       prove:'Design a confident state, an uncertain state and a failed state.',
       build:'Add citations, a way to ask for clarification, and fallback paths.',
       brk:'Remove the citations and the uncertainty cues, and compare how users interpret the answers.',
       artifact:'Failure-First UX Flow.',
       check:'What does the user do when the AI cannot answer?',
       lens:'The fallback is part of the feature, not an afterthought.'}
    ],
    [
      'unit',
      '19.4',
      'Human-in-the-loop UX',
      {goal:'Specify when a person reviews, approves, edits or overrides the AI’s output.',
       idea:'Human involvement should be aimed at the high-risk or unclear moments.',
       prove:'Map the decision points and what the person is asked to approve.',
       build:'Measure how long reviews take and how often people override the AI.',
       brk:'Create an approval that no longer matches the action it approves.',
       artifact:'HITL Decision Map.',
       check:'What does the human add that nothing else can?',
       lens:'Human review should reduce risk without turning into meaningless rubber-stamping.'}
    ],
    [
      'unit',
      '19.5',
      'Metrics and experimentation',
      {goal:'Keep business outcomes apart from model metrics and operating metrics.',
       idea:'Task completion is not the same as groundedness, and both are different from cost.',
       prove:'Create a metric tree with layers for business, quality, safety, latency and cost.',
       build:'Where it fits, define an A/B test or another controlled comparison.',
       brk:'Improve a model metric while making the business outcome worse.',
       artifact:'Metric Map plus Experiment Plan.',
       check:'Which metric decides whether the product is useful?',
       lens:'A PM must stop teams from optimizing a stand-in for the real goal.'}
    ],
    [
      'unit',
      '19.6',
      'Unit economics',
      {goal:'Model the costs of tokens, retrieval, tools, infrastructure and human review.',
       idea:'The real unit is often the cost of a successful task, not the cost of a request.',
       prove:'Create a spreadsheet with volume, token usage, model cost, retries, tools and review time.',
       build:'Compare scenarios for model routing and for caching.',
       brk:'Increase the context or the retry rate, and see what happens to the margin.',
       artifact:'AI Unit Economics Model.',
       check:'What happens at 10× volume?',
       lens:'Cost belongs in architecture decisions from day one.'}
    ],
    [
      'unit',
      '19.7',
      'AI PRD and release plan',
      {goal:'Write a PRD that an engineer can implement and a leader can evaluate.',
       idea:'An AI PRD must specify the context, the behaviour when it fails, the evaluation and the operating limits.',
       prove:'Complete the problem, scope, inputs, context, tools, model behaviour, failures, human role, metrics, safety, latency, cost, rollout and rollback.',
       build:'Review the PRD against the system you built.',
       brk:'Ask a reviewer to find a failure your PRD did not specify.',
       artifact:'AI PRD plus Release Gate plus Metric Map.',
       check:'Can the PRD answer “what happens when it is wrong?”',
       lens:'This becomes one of the strongest artifacts in your portfolio.'}
    ],
    ['q','I412'],
    ['h','A spec outline'],
    ['p','Here is an outline you can copy. Each line is a question that someone will ask you later, and it’s cheaper to answer it now.'],
    [
      'n',
      ['The user’s problem, and how it is handled today without AI.','Why AI is the right answer to it — and what is explicitly out of scope.','What goes in: the inputs, the context, the tools it may call.','How it fails, and what a person does when it does.','The test set, and the scores that count as good enough.','Safety limits, the speed it must hold, the cost it must stay under.','How it rolls out, what you watch afterwards, and what triggers pulling it back.','Whose name is on it.']
    ],
    ['h','Keep metric types separate'],
    ['p','Once the outline is filled in, the next trap is the metrics. They look alike on a dashboard, but they answer different questions.'],
    ['key','Keep the metric types apart. Task completion rate is a product outcome. Groundedness is a system quality metric. Token cost is an operating metric. Complaint rate is a user signal. A dashboard that mixes them cannot answer any question clearly.'],
    ['p','Metrics also feed the big decisions. The table lists four of them, the business question behind each, and the AI evidence that settles it.'],
    [
      'tb',
      ['Decision','The business question','The AI evidence that settles it'],
      [
        ['Build or buy','Will it create enough value?','Capability, evaluation and total cost of ownership'],
        ['Ship or hold','Is failure cheap enough?','Quality, safety and incident readiness'],
        ['Model A or B','Which wins for this task?','A task-specific benchmark'],
        ['Human in the loop','Where is autonomy unsafe?','Error cost and reversibility']
      ]
    ],
    ['p','Now try writing one of the hardest lines in the spec.'],
    [
      'try',
      {id:'ch32-trigger',
       mins:6,
       min:60,
       rows:4,
       task:'Write a one-line rollback trigger for a feature you want to ship. It must be specific enough that someone could act on it at 2am without calling you.',
       ph:'Roll back if …',
       after:'If someone needs your judgement to interpret it, it is not a trigger yet. Make it a number and a threshold.'}
    ],
    ['h','Summary'],
    ['p','So an AI spec is built on a few honest ideas. Promise a rate with a tolerance, not a perfect output. Keep business, quality and operating metrics apart. Design for the moments when the AI is unsure or wrong. And write a rollback trigger that someone can act on without asking you.'],
    ['p','Next, in Chapter 33, you’ll turn the product into a production architecture and a delivery plan.']
  ],
  capstone:{
    title:'Write the full product requirements for Bharat Privacy Guard',
    brief:'You now write the document that an engineer can build from and that a leader can read to see exactly what trade-off is being made. In this chapter you learned to write acceptance criteria as a rate with a tolerance, to keep business results, model measures and operating measures apart, and to design the three states an AI feature needs. Now you write two pages for your own tool.',
    where:'Written only. The requirements draw on evidence from earlier chapters. No new code is needed.',
    steps:[
      'State the user’s problem, and the non-AI way your tool has to beat, for example a developer’s own hand-written rules.',
      'Define the scope and, clearly, what is out of scope.',
      'Specify what the models see, which tools they may use and what role a person plays.',
      'List the failures you have really seen in this course.',
      'Name the test set, and write a five-line test plan.',
      'Set quality, safety, speed and cost targets as rates with a tolerance, for example: “finds 95 of every 100 Aadhaar numbers, give or take 3, on the answer key”.',
      'Design the three screens the tool needs: sure, unsure and error.',
      'Write the release plan, a one-line rollback trigger, and the name of the owner.'
    ],
    done:[
      'Two pages that an engineer could build from.',
      'Every quality claim written as a number against a named test set.',
      'What is out of scope, written down.',
      'A rollback trigger that someone could act on without asking you.'
    ]
  }
},

/* --------------------------------------------------------------- 33 / bk 20 */
{
  id:'ch20d', num:33, part:5, curriculumTier:'core', phase:5, prerequisites:['ch185','ch17o','ch16e'], nextUnits:['ch21cap','b7'], minutes:55, labs:['costmodel'],
  title:'Production architecture, delivery and vendor strategy',
  concept:'A prototype runs because you are the only user and you forgive its failures. Production removes both. In this chapter you’ll list what a prototype is missing, think of response time as a budget shared across stages, and score vendors on more than price and quality.',
  plan:{
    first:'Before you look anything up, write from memory the list of what your prototype is missing for production.',
    build:'Add the decisions about architecture, the separate environments, automated checks before release, who is responsible for what, service targets, security, rolling back, and how you would leave a vendor.',
    brk:'Work out what happens in three shocks: the provider goes down, traffic grows ten times, and the token price doubles.',
    artifact:'A technical decision pack that covers the architecture, the alternatives, the evaluation, security, cost and rollout.',
    gate:'Defend your build-or-buy choice and your provider choice with weighted criteria, not with personal preference.'
  },
  needs:[
    ['Build or buy is a decision with criteria','Chapter 18.5 introduced it. Here the criteria get weights.',18.5],
    ['Cost per task can be measured','You recorded it in Chapter 30.',30],
    ['A release gate decides what ships','You built it in Chapter 29.',29]
  ],
  words:[
    ["Production delta","The list of everything a working prototype doesn’t have yet: sign-in, limits, retries, saved data, monitoring, secrets, backups, deployment and rollback."],
    ["Latency budget","The total time a user is willing to wait, shared out across the stages that use it up."],
    ["Architecture decision record","A short note saying what was decided, what the other options were, and why. You write it when the decision is made, not later from memory."],
    ["Exit cost","What it would take to leave a provider. It’s usually the least examined column in a vendor comparison, and the one you live with longest."]
  ],
  takeaway:[
    'List what a prototype is missing before it can go to production.',
    'Treat response time as a budget spent across a chain of stages.',
    'Score providers on more criteria than price and quality.'
  ],
  story:[
    ['c','Before you start','Keep your cost measurements from Chapter 30 and your release gate from Chapter 29 open. You’ll use both.'],
    ['p','In the last chapter you saw how the product manager writes the spec for a system whose answers can vary. This chapter looks at the other side of the same table: what it takes to run such a system for real users.'],
    ['p','Everything you’ve built so far works because you are the only user, and you forgive it when it fails. Production removes both of those. So here you’ll list what that costs you.'],
    ['p','An everyday comparison helps. A dish you cook well for two people is not yet a restaurant menu item. The recipe stays the same. But now you also need reliable supplies, a price that works, other cooks who can make it, and a plan for the night four hundred people order it.'],
    ['p','The units below walk through that gap one piece at a time. Each one has a goal, an idea, something to prove, something to build, something to break, something to hand in, and a question to check yourself. Take them in order.'],
    ['h','Hands-on units'],
    [
      'unit',
      '20.1',
      'Production delta',
      {goal:'List everything that is missing between your notebook and a real service.',
       idea:'A real service needs many things a notebook doesn’t: sign-in, saved data, retries, queues, monitoring, secrets, deployment, backups, access rules and a way to roll back.',
       prove:'Write the production delta list for your own prototype.',
       build:'Sort the items into three groups: must-have, should-have and later.',
       brk:'Remove one of the controls, then describe how things would fail without it.',
       artifact:'A production delta checklist.',
       check:'What would stop you from going live tomorrow?',
       lens:'This is the bridge between how a PM thinks about delivery and what engineering actually has to build.'}
    ],
    [
      'unit',
      '20.2',
      'Reliability and resilience',
      {goal:'Plan for provider errors, failing dependencies and retries, and decide how the product slows down gracefully.',
       idea:'An AI system leans on services you don’t control, so some of them will fail at some point.',
       prove:'Write failure scenarios for the model, for retrieval, for the tools and for the network.',
       build:'For each one, decide the timeout, the retries, the fallback, and what the user sees.',
       brk:'Pretend the provider is down, then pretend it is limiting how many requests you can send.',
       artifact:'A table of failures and fallbacks.',
       check:'What does the user experience when only part of the system fails?',
       lens:'A product that degrades gracefully can be worth more than one that uses a bigger model.'}
    ],
    [
      'unit',
      '20.3',
      'Scalability and queues',
      {goal:'Understand the difference between work done while the user waits and work done in the background, and find where a system hits its limits as it grows.',
       idea:'Not every AI task belongs in the path where the user sends a request and waits for the answer.',
       prove:'Map a long-running job, such as taking in a big document.',
       build:'Separate four things: the upload, the processing, the indexing and the status updates to the user.',
       brk:'Imagine ten times the work, and find the part that gives way first.',
       artifact:'A sketch of how the system scales, with your assumptions about capacity.',
       check:'Which part has to grow first, and why?',
       lens:'When you plan capacity, include the model’s own limits and the quotas set by outside providers.'}
    ],
    [
      'unit',
      '20.4',
      'Deployment and environments',
      {goal:'Keep development, staging and production apart, each with settings you control.',
       idea:'A production AI system needs settings you can reproduce and a safe way to release changes.',
       prove:'For each environment, define the environment variables, the model versions, the prompts and the index versions.',
       build:'Write a deployment checklist, and the command or steps to roll back.',
       brk:'Release a deliberately bad prompt to staging, and check that production stays exactly as it was.',
       artifact:'A plan for your environments, and a rollout checklist.',
       check:'What can change without anyone releasing new code?',
       lens:'Configuration is part of the system, so it needs version control like everything else.'}
    ],
    [
      'unit',
      '20.5',
      'CI/CD and AI regression',
      {goal:'Put your software tests and your evaluation gates into the same automated checks.',
       idea:'A green build is not enough if the model’s behaviour has got worse.',
       prove:'Add ordinary tests, plus your golden evaluation suite, to the automated checks that run before every release.',
       build:'Decide the thresholds that block a release.',
       brk:'Change the model, the prompt or the index, and check that the automated checks catch the drop in quality.',
       artifact:'A spec for the automated release checks of an AI product.',
       check:'What evidence do you need before you release?',
       lens:'This is how a system whose answers vary becomes something a team can deliver reliably.'}
    ],
    [
      'unit',
      '20.6',
      'Architecture Decision Records',
      {goal:'Record the alternatives, the decision, the evidence, the consequences, and the signs that mean you should revisit it.',
       idea:'Treat each architecture decision as a hypothesis with trade-offs, and write down when you’ll look at it again.',
       prove:'Write a record for each of four decisions: the model, the retrieval approach, the workflow or agent, and the storage.',
       build:'Include the options you rejected and the evidence behind your choice.',
       brk:'Invent a new requirement that makes one of your decisions wrong.',
       artifact:'A set of architecture decision records.',
       check:'What would make you revisit this decision?',
       lens:'These records protect what the team has learned, and they make your reasoning as a technical PM easy for others to see.'}
    ],
    [
      'unit',
      '20.7',
      'Vendor and TCO strategy',
      {goal:'Compare provider and model choices on quality, cost, region, data controls, tooling and exit cost.',
       idea:'Choosing a vendor means balancing several goals at once, and it shapes your architecture.',
       prove:'Score at least three realistic options, or two providers plus an idea of hosting the model yourself.',
       build:'Estimate what it would cost to migrate away, and to exit.',
       brk:'Work out what happens if the price doubles, or if a capability you rely on is removed.',
       artifact:'A scorecard for models and vendors, with an exit plan.',
       check:'What would it cost you to switch?',
       lens:'Vendor lock-in is a risk to your costs and to your architecture.'}
    ],
    [
      'unit',
      '20.8',
      'Technical decision pack',
      {goal:'Package the whole system so that a design review can go through it.',
       idea:'A strong artifact between PM and engineers lets different readers look at the same evidence, each at the depth they need.',
       prove:'Cover the problem, the baseline, the architecture, the alternatives, the evaluation, the security, the cost, the rollout and the risks.',
       build:'Add one architecture diagram and one table of decisions.',
       brk:'Ask a reviewer to challenge three of your assumptions.',
       artifact:'A ten-slide technical decision pack.',
       check:'Can you defend every major box and arrow?',
       lens:'This is the bridge from your portfolio to real interviews for technical AI PM roles.'}
    ],
    ['h','Response time is a budget'],
    ['p','Now let’s look at one idea more closely, because it surprises most people. When a user waits for an answer, the wait is really a chain of stages, one after the other.'],
    ['key','Response time is spent across the whole chain: retrieval, reranking, tool calls, model reasoning and final generation. The largest share is rarely in the stage people optimise first.'],
    ['p','Think of it like a courier delivery. The parcel travels in several legs, and the longest delay is often not the leg you expected. This is why the total time a user will wait is called a <strong>latency budget</strong>. You divide it across the stages, and you check which one is using the most.'],
    ['q','I413'],
    ['p','Next, here is a way to look at the whole system, layer by layer. Read across each row. The last column gives you the question to ask about that layer when you review a design.'],
    [
      'tb',
      ['Layer','Typical responsibility','The question to ask about it'],
      [
        ['Client and UI','What the user sees and does','What uncertainty or approval must the user see?'],
        ['Orchestrator','Keeping track of state and choosing the next step','Where would a fixed rule be safer than the model’s judgement?'],
        ['Model layer','Reasoning and writing the answer','What evidence supports this model choice?'],
        ['Knowledge and tools','The data it reads and the actions it takes','Who can access what, and how is it audited?'],
        ['Evaluation','Quality gates','What blocks a release?'],
        ['Observability','Evidence of how it behaves while running','How would we know it had got worse?'],
        ['Platform','Deploying, scaling and securing it','How does this survive heavy traffic and failures?']
      ]
    ],
    ['h','Choosing a vendor'],
    ['p','The same habit of looking at the whole picture applies when you choose a provider. Most people compare price and quality, and stop there.'],
    ['key','Choosing a vendor means weighing quality, data controls, response time, cost, region, tooling, interoperability, support and exit cost. A provider that wins on quality and data controls but has a very high exit cost can lock you in for years.'],
    ['p','Exit cost is the one people forget. It’s the column you read least when you compare vendors, yet it’s the one you live inside the longest.'],
    ['p','Teams that ship AI well tend to keep four simple habits:'],
    [
      'l',
      ['<strong>Write down why you chose things</strong>, so nobody reopens the decision in six months.','<strong>Have a safe place to try changes</strong> before real users see them.','<strong>Be able to switch it off</strong> quickly, without a meeting.','<strong>Know what you would do</strong> if the provider changed its terms tomorrow.']
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
       after:'If your plan needs an evaluation you don’t have, then the evaluation set is your exit plan. That’s usually the main thing you find out.'}
    ],
    ['h','Summary'],
    ['p','Let’s pull it together. A prototype works because you are its only user. Production needs a list of everything the prototype lacks, which is the production delta.'],
    ['p','You also saw that response time is a budget shared across a chain of stages, and that a vendor deserves more than a price and quality check. Include data controls, region, support and, above all, the cost of leaving.'],
    ['p','Next, Chapter 34 brings the whole system together in one capstone project.']
  ],
  capstone:{
    title:'Make a ten-slide decision pack',
    brief:'You now explain the whole design to the people who must approve it. In this chapter you learned what a prototype lacks before it can go live, to treat response time as a budget spent across stages, and to score providers on more than price and quality. Here you make a ten-slide pack for Bharat Privacy Guard. Draft it from memory first. The slides you can’t write from memory are the parts you don’t understand yet.',
    where:'Written work only: a slide deck or a document that draws on your earlier measurements. No new code is needed.',
    steps:[
      'Without looking at your notes, write one line for each of the ten slides saying what it will say. Mark the slides you couldn’t write from memory.',
      'Make the ten slides: (1) the problem and what it must beat; (2) the architecture on one slide; (3) two alternatives you rejected and why; (4) the test results, with the test set named; (5) security and what remains risky; (6) cost per message and at the expected volume; (7) the rollout plan and the rollback trigger; (8) three providers scored on nine weighted criteria; (9) the decision and who owns it; (10) what you did not solve.',
      'Check each slide against your earlier documents and fix any mismatch.',
      'Ask someone else to present the deck from the slides alone. Write down where they stopped or hesitated, and fix those slides.'
    ],
    done:[
      'The from-memory outline with the weak slides marked.',
      'Ten slides in the order above.',
      'A provider scorecard that includes the cost of leaving.',
      'Evidence that someone else could present the deck from the slides alone.'
    ]
  }
},

/* --------------------------------------------------------------- 34 / bk 21 */
{
  id:'ch21cap', num:34, part:5, curriculumTier:'core', phase:6, prerequisites:['ch20d','ch18s'], nextUnits:[], minutes:1800, labs:['redmap'],
  title:'Capstone: discover, build, break, measure, ship and defend a system',
  concept:'This is one capstone, not two. You take a real problem, with users you can actually reach, and carry it from discovery through a live launch to a defence in front of executives and engineers. Along the way you build one coherent applied AI system, break it on purpose, measure what you fixed, and show that it works as a product, not only as a demo.',
  plan:{
    first:'Don’t start with slides. Find a problem with a user group you can reach. Then create the repository, the issue list, the evaluation dataset, and the smallest slice that works from start to finish.',
    build:'Grow it into one applied AI copilot for operations or policy work. Give it retrieval that respects permissions, structured outputs, two tools, one bounded agent step, one input that isn’t text, an evaluation harness, tracing and cost tracking, and security controls. Then put it in front of five to ten real users and improve it from what you see.',
    brk:'Reproduce at least ten kinds of failure: a question with no answer, a poisoned document, prompt injection, an unauthorised tool request, a malformed tool call, a stale permission, a multilingual query, a poor scan or audio, a model swap, and a rise in traffic or cost.',
    artifact:'The running system, a live URL with real users, and an evidence pack. The pack holds the PRD, the architecture, the threat model, the evaluation plan, the dashboard, the unit economics, the decision log, the rollout and rollback plan, the vendor scorecard and an explanation for executives.',
    gate:'Show three failures you found yourself, three improvements with numbers, evidence from real users, unit economics that hold up, the risks that remain, and what you chose not to solve.'
  },
  needs:[
    ['Everything in Part V','The capstone combines all of it.',33],
    ['A release gate and a risk register','Chapters 29 and 31 give you the evidence you’ll defend with.',31],
    ['Track A’s discovery and strategy artifacts','They help, but you can start without them. If you have them, the discovery and design stages reuse them.','A7']
  ],
  words:[
    ["Findings document","A plain, factual record of what broke, the evidence, the root cause, the fix, and what you chose not to solve. It is the opposite of a brochure."],
    ["Failure class","A kind of failure, not one single example of it. This is what makes ten tests meaningful instead of ten stories."],
    ["Residual risk","The risk that’s left after a control is in place. You state it openly instead of leaving people to guess."],
    ["Evidence pack","The set of artifacts that lets somebody else check your claims instead of just trusting them."],
    ["Kill criteria","The condition you write down before you need it, which tells you when to stop. Without it, you keep working on a problem the evidence says won’t work."]
  ],
  takeaway:[
    'Take a real problem, with users you can reach, from discovery all the way to a live product.',
    'Explain a system you built from first principles, without a framework doing the explaining for you.',
    'Show before-and-after numbers for failures you found and fixed, and for the users who used it.',
    'Defend the business case, meaning unit economics, growth and vendor risk, as carefully as the architecture.',
    'State what you deliberately did not solve.'
  ],
  story:[
    ['c','Before you start','Plan for about thirty hours, spread over four to six weeks. This is the whole course brought together. The technical capstone and the product, business, real-user and defence work are one project now, not two.'],
    ['p','In the last chapter you looked at what it takes to run an AI system for real users. Now you do the whole thing yourself, from the first conversation with a user to the final defence.'],
    ['p','Start by collecting every artifact you made in Part V. That means the harness, the model selection card, the context budget and the retrieval architecture. It also means the tool policy, the release gate, the dashboard, the risk register, the PRD and the decision pack. Every stage below reuses one of them.'],
    ['p','You may also have done some of Track B’s optional modules. If so, reuse them too. B1’s cost model fits the measure stage. B3’s tracking plan fits the ship stage, and so do B6’s user sessions. B5’s release checklist fits the observe stage. None of them is needed to start.'],
    ['p','What do you get at the end? A system you can explain without leaning on anyone’s framework. Real users who have used it. And an honest page about what broke when you tested it and what it costs to run.'],
    ['p','That matters because employers ask three things. What can you build? Did anyone want it? And what goes wrong, and what do you do about it?'],
    ['c','The brief','Take one real problem, with a user group you can actually reach within two weeks. Then work through eleven stages: discover, define, design, build, evaluate, break, observe, ship, measure, iterate and defend.'],
    ['p','Build one applied AI system that combines at least four capabilities from Part V. A good starting set is retrieval that respects permissions, tool calling, one bounded agent step, evaluation, tracing and security tests. Ship it to real users before you defend it. It should be one coherent journey, not a set of separate demos.'],
    ['lab','redmap'],
    ['h','The eleven stages'],
    ['p','The table below lists the eleven stages in order. For each one, the second column says what evidence you must have in hand before you move on. Read it once now, and come back to it as you work.'],
    [
      'tb',
      ['Stage','Required evidence'],
      [
        ['34.1 Discover','Five interviews, a jobs-to-be-done statement, a scan of the market and competitors, and a problem brief backed by evidence.'],
        ['34.2 Define','The user, the pain, the baseline, the scope, the non-goals, the data, the tools, the risks, and a measurable acceptance criterion. Together these are your capstone AI PRD.'],
        ['34.3 Design','A one-page product and system design, plus the vision, strategy, roadmap and OKRs, a stakeholder map, a pricing hypothesis and your kill criteria.'],
        ['34.4 Build','Working code, tests, versioned prompts and settings, an architecture diagram and a threat model.'],
        ['34.5 Evaluate','30 to 50 evaluation cases, traces, and measurements of retrieval, answers, tools, safety, latency and cost.'],
        ['34.6 Break','At least ten deliberate failure tests, saved before you fix anything.'],
        ['34.7 Observe','A security go/no-go checklist, and a dashboard with six panels connected to real traces.'],
        ['34.8 Ship','A live URL, monitoring, 5 to 10 real users, a support log and a timed rollback test.'],
        ['34.9 Measure','Before-and-after numbers for your optimisations, ADRs, and a unit-economics model at base usage and at high usage.'],
        ['34.10 Iterate','One iteration based on evidence, before-and-after product and AI metrics, and an entry in the decision log.'],
        ['34.11 Defend','A ten-slide deck for executives, a twenty-minute technical defence and a public case study.']
      ]
    ],
    ['key','A portfolio project is credible when you can explain its failures, show that someone wanted it, and say what it costs to run. Anyone can show a system that works on the demo path.'],
    ['h','Hands-on units'],
    ['p','Now the units. Each one covers a single stage, with the same rows every time. You get the goal, the idea, what to prove, what to build and what to break. Then come what to hand in, a question to check yourself, and why it matters. Do them in order, because each one feeds the next.'],
    [
      'unit',
      '34.1',
      'Discover: a real problem with reachable users',
      {goal:'Find a problem with a user group you can actually reach, and write a problem brief backed by evidence.',
       idea:'The best capstones come from a job you have done, a team you know or a community you belong to. Look for a problem that comes up often, costs real time or money, and is solved badly today.',
       prove:'Score your problem against four tests. Can you reach users, meaning can you book five interviews this week? Does it happen often? Is it costly? And is it a fit for AI, rather than something a form or a formula could solve?',
       build:'Run five interviews. Write a jobs-to-be-done statement and a journey map, and scan the market and the competitors.',
       brk:'Challenge your idea with the question “why not ordinary software that always gives the same answer?” If a form would solve the problem, it isn’t a capstone.',
       artifact:'A problem brief backed by evidence, with a jobs-to-be-done statement.',
       check:'Can you trace each claim in your problem brief back to an interview note, and name one assumption that the evidence changed?',
       lens:'If nothing you believed changed after five interviews, you may have heard only what you expected to hear.'}
    ],
    [
      'unit',
      '34.2',
      'Define the problem and PRD',
      {goal:'Turn the problem into a system with acceptance criteria you can measure.',
       idea:'A capstone becomes credible when the problem is clear and the cost of failure is clear too.',
       prove:'Choose your own problem, one you can reach users for. Or choose one of these: policy and compliance intelligence for an enterprise, a workflow that makes developers more productive, or a controlled customer-operations workflow.',
       build:'Write down the user, the pain, the baseline, the scope, the non-goals, the data, the tools, the risks and the metrics.',
       brk:'Ask “why not ordinary software that always gives the same answer?” again. This time, ask it against your actual scope, not the general case.',
       artifact:'The capstone AI PRD.',
       check:'Can you state the business outcome in one sentence?',
       lens:'This is the product anchor that everything below hangs from.'}
    ],
    [
      'unit',
      '34.3',
      'Design the product and the system together',
      {goal:'Put the product decision and the technical decision on one page, because each one limits the other.',
       idea:'Whether a user needs an answer in two seconds or by Monday decides the architecture. And whether the architecture can hit a target decides what you can promise.',
       prove:'Fill in a design with nine lines: the user and the job, the activation moment, the AI approach, why not an agent, the evaluation, the boundaries, the cost, and the North Star.',
       build:'Add the vision, the strategy, the roadmap, the OKRs, a stakeholder map, a pricing hypothesis, and your kill criteria, which is the condition that tells you to stop.',
       brk:'Find one line in your design that you chose because it was interesting, not because it was needed, and cut it.',
       artifact:'A one-page product and system design, plus a stakeholder map.',
       check:'Does every technical choice on the page link to a product reason? And does every product choice link to something the system can actually do?',
       lens:'Kill criteria written now, before you get attached to the idea, are the ones you’ll actually honour.'}
    ],
    [
      'unit',
      '34.4',
      'Build the vertical slice',
      {goal:'Build the smallest system that works from start to finish, before you add anything clever.',
       idea:'A vertical slice proves that the architecture holds across its boundaries. A threat model added afterwards is an excuse, not a control.',
       prove:'Build the path from input, to retrieval and context, to the model, to a structured answer, to a citation. Write the threat model alongside the first version, not after it.',
       build:'Add a tool only when you need one. Keep the repository easy to reproduce, with a README, a requirements file and a command that runs it the same way every time.',
       brk:'Ask a question that has no answer, and record how the system fails. This is your baseline.',
       artifact:'A running repository, architecture v1 and a threat model.',
       check:'Can you run the system from a clean environment? And could someone else repeat your experiment without asking what you did by hand?',
       lens:'A small system that works beats a large diagram.'}
    ],
    [
      'unit',
      '34.5',
      'Add evaluation and observability',
      {goal:'Turn the capstone into something you can measure.',
       idea:'Every change should leave evidence behind.',
       prove:'Create 30 to 50 evaluation cases, and collect traces.',
       build:'Add measurements for retrieval, answers, tools, safety, latency and cost.',
       brk:'Change the model, the prompt or the index, and reproduce the drop in quality.',
       artifact:'A golden dataset, an evaluation harness and an observability report.',
       check:'Can you explain why the latest version is better?',
       lens:'This is where the project turns into engineering evidence.'}
    ],
    [
      'unit',
      '34.6',
      'Break it deliberately',
      {goal:'Reproduce at least ten failure classes.',
       idea:'A portfolio project is more credible when you can explain what broke.',
       prove:'Test each of these. A question with no answer. A poisoned document. Prompt injection. An unauthorised tool. A malformed tool call. A stale permission. Multilingual input. A poor scan or audio. A model swap. A rise in traffic or cost.',
       build:'For each failure, capture the evidence, find the root cause and note the control.',
       brk:'Don’t fix anything straight away. First, save the failure as it happened.',
       artifact:'A security and red-team report, plus a table of failure findings.',
       check:'Which three failures surprised you?',
       lens:'Your failure log is often worth more than your happy-path demo.'}
    ],
    [
      'unit',
      '34.7',
      'Observe: prove it is inspectable before real users touch it',
      {goal:'Prove that you can see inside the system, and that its risk has limits, before you ship it to a real user.',
       idea:'If you can’t observe a system, you’re guessing about it, however good the demo looks.',
       prove:'Run the security release-gate checks and the observability thresholds against the current build.',
       build:'Connect a six-panel dashboard to the real traces from your evaluation and break stages. The panels are quality, safety, latency, cost, traffic and failures.',
       brk:'Take one signal off the dashboard, and see which incident becomes invisible without it.',
       artifact:'A security go/no-go checklist and an observability dashboard.',
       check:'Which alert should wake a human, and which should only be logged?',
       lens:'A stakeholder will ask, “how would you know if this broke at 2am?” This stage is your answer.'}
    ],
    [
      'unit',
      '34.8',
      'Ship to real users',
      {goal:'Launch to a real user group, and prove that the rollback actually works.',
       idea:'Real users teach you more than more theory. Five to ten observed sessions beat another week of polishing on your own.',
       prove:'Put it on a stable live URL with monitoring, analytics, a privacy notice, a way for users to send feedback, and a rollback procedure.',
       build:'Recruit five to ten real target users. Watch at least five sessions, and keep a support log from day one.',
       brk:'Test your rollback for real before launch. Release a harmless change, roll it back, and time it. A rollback you have never tried is only a plan.',
       artifact:'A live URL, a support log, a funnel or cohort view, and a timed rollback test.',
       check:'Do you have evidence from real users, not just demo traffic from your teammates?',
       lens:'A system that is beautifully evaluated but has never been used by anyone has not passed this stage yet.'}
    ],
    [
      'unit',
      '34.9',
      'Measure: optimize and quantify unit economics',
      {goal:'Apply targeted fixes, measure before and after, and show that the economics work at scale.',
       idea:'An optimisation means something only when you can see the difference it made. And viability means something only when you can also see the cost of each successful task.',
       prove:'Try reranking, restructuring the prompt, validating against a schema, caching, routing or trimming the context, wherever it makes sense. Then work out the model cost per successful task at low, base and high usage.',
       build:'Change one thing at a time, and rerun the part of the evaluation that matters for it.',
       brk:'Keep a fix that improves one metric but makes another worse, and write down the trade-off. Then check what happens to your margin at ten times the volume.',
       artifact:'A before-and-after optimisation report, ADRs and a unit-economics model.',
       check:'Which improvement is big enough to matter, statistically or in practice? And does revenue grow faster than the cost of running the model and supporting users?',
       lens:'Avoid “optimization theater”. Also avoid a model that works only at your current, subsidised scale.'}
    ],
    [
      'unit',
      '34.10',
      'Iterate from evidence',
      {goal:'Ship one improvement that is based on evidence, and log the decision behind it.',
       idea:'An iteration earns its place only when it is tied to a problem you measured, not a hunch.',
       prove:'Pick the lowest-scoring evidence question from the earlier stages, and ship one change aimed at it.',
       build:'Compare the product and AI metrics before and after. Then write the decision into the decision log: the context, the options you considered, the approach you chose, the trade-offs, and what would make you reopen it.',
       brk:'Ask someone to push back on the iteration you shipped, and answer from the metric, not from opinion.',
       artifact:'A changelog and one filled-in decision-log entry.',
       check:'Can you tie the iteration to a problem you measured, not a preference?',
       lens:'If the decision log is still empty at this stage, then every choice so far went undocumented. That’s the first thing a reviewer will ask about.'}
    ],
    [
      'unit',
      '34.11',
      'Defend the system',
      {goal:'Present the architecture, the evidence, the security, the cost, the viability and the risk that remains, to two different audiences.',
       idea:'The last skill this course tests is explaining and defending the system you built.',
       prove:'Prepare a five-minute briefing for executives and a twenty-minute technical defence.',
       build:'Build a ten-slide deck and a public case study. Cover the problem and the evidence that it’s real. Then say what you built, whether it works, whether it’s safe, whether people use it, and whether it makes money. Finish with what failed, the trade-offs, and what you’re asking for next.',
       brk:'Ask a peer to challenge your model choice, your agent choice, your security and your cost assumptions.',
       artifact:'The final repository, architecture, PRD, risk register, evaluation pack, observability dashboard, vendor scorecard, decision log, executive deck and public case study.',
       check:'Can you explain every major decision without saying “the framework handles it”?',
       lens:'This is the credential you carry into interviews and design reviews.'}
    ],
    ['q','I414'],
    ['h','When you are done'],
    ['p','How do you know you’re finished? Check this list. You’re done when every line is true.'],
    [
      'l',
      ['It runs on a machine that is not yours, at a live URL.','Anyone can rerun the tests and get the same numbers.','You have broken it in at least three real ways, on purpose.','Three of your fixes have before and after numbers.','You attacked your own safeguards and recorded what happened.','You know how to roll it back if something goes wrong, and you have timed it.','Five to ten real users have used it, and you have their evidence, not a teammate’s.','You can state cost per successful task, and what happens to margin at ten times the volume.','At least one iteration is tied to measured evidence, and logged as a decision.','You can explain every major choice without saying “the framework handles that”.']
    ],
    ['h','Final self-test'],
    ['p','One last exercise. Answer these from memory, out loud if you can. If you get stuck on one, go back to the chapter that covers it.'],
    [
      'l',
      ['Why is the model stateless?','Why can retrieval fail, and why do embeddings help?','Why does retrieval never say “nothing here” on its own?','Why is top-k a trade-off?','When does a workflow beat an agent?','Why are tools a security boundary?','Why must evaluation come before release, and why does tracing matter?','How do you calculate cost per successful task, not per call?','What makes an AI specification different from a normal one?','Who is your buyer, and does your price cover what the model costs you?','What would make you kill this project rather than keep iterating on it?']
    ],
    ['p','If you can answer all of these, you’ve done what the course set out to do. You can build an AI system, break it, measure it, and stand behind it.'],
    ['p','This was the last required chapter. Next, Track B begins with B1, on business models, pricing and unit economics. Later, B7 turns what you just built into stories for interviews. The appendices turn your artifacts into reusable portfolio templates.']
  ],
  capstone:{
    title:'Ship Bharat Privacy Guard, and write the findings document',
    brief:'This is the final capstone of the technical course. Everything you have made now comes together in one repository and one document. Keep the document plain and factual. A findings document that reads like a brochure is not doing its job. Describe the project as “a privacy tool that helps an organisation collect and share less personal data”, and never as making anyone compliant.',
    where:'Your repository, for the working system and its README, plus a written findings document. Both together are what you hand in.',
    steps:[
      'Make the repository work on a clean machine. Someone else must be able to clone it, follow the README and run the answer key.',
      'Add the architecture diagram and the decision log.',
      'Add the final answer key and the scoreboard before and after your fixes.',
      'Add the results of the attacks you tried in Chapter 13, and some sample traces.',
      'Add the cost and speed at your expected volume, and what changes at ten times the volume.',
      'Add the requirements, the risk register, the system card and the rollout and rollback plan.',
      'Add real-user evidence: notes from sessions with five to ten people who are not your teammates, and the one change you made because of them.',
      'Write the findings document: what you built, what broke, who used it and what the evidence shows. Include three failures you found yourself, each with evidence, and three fixes, each with numbers from before and after.',
      'End with what remains risky and what is deliberately out of scope, such as other Indian languages, the gateway and the browser extension.'
    ],
    done:[
      'A repository that works on a clean machine.',
      'Three failures you found yourself, each with evidence.',
      'Three fixes, each with before and after numbers.',
      'Evidence from five to ten real users who are not your teammates.',
      'The cost per message, and what happens to it at ten times the volume.',
      'A five-minute explanation a non-technical leader could repeat, and a twenty-minute one that an engineer could not easily poke holes in.'
    ]
  }
}

];

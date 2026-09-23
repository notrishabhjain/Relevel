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
  concept:'An AI system is a software system with one unpredictable part. This chapter covers the software you need around it: Python, HTTP and JSON, secrets, Git, logs and tests. You will also build an experiment harness to reuse for the rest of Part V.',
  plan:{
    first:'Open a notebook and write a Python program that reads JSON, calls an HTTP endpoint, handles a failure status and writes JSON back out \u2014 before you read a word below.',
    build:'Turn it into an experiment harness that records id, timestamp, model, prompt, response, latency, usage and errors.',
    brk:'Feed it malformed JSON, a missing field, a timeout, and a 429 and a 500. Watch which ones it survives.',
    artifact:'A Git repository holding the harness and its tests.',
    gate:'Trace one failure from the input that caused it all the way to the error it produced.'
  },
  needs:[
    ['An API call is a request and a reply','You have made them since Chapter 1. This chapter covers the software around them.',1],
    ['You pay for everything you send','So a harness that records usage is worth building once.',1]
  ],
  words:[
    ["Contract","An assumption your code makes about the shape of data it receives — that a field exists, that it is a number, that a list is not empty. Every one of them is a thing that will eventually be wrong."],
    ["Status code","The number a server sends back to say what happened: 200 worked, 4xx you got it wrong, 5xx the server did."],
    ["Stack trace","The list of calls that were in progress when something failed, innermost first. It tells you where, not why."],
    ["Experiment harness","A small tool that records every run identically — request, response, latency, usage, error — so two runs can actually be compared."]
  ],
  takeaway:[
    'Read a request, a response, a status code and a stack trace with confidence.',
    'Explain why an AI system is a software system with one probabilistic part.',
    'Name where the engineering risk actually sits in an AI feature.'
  ],
  story:[
    ['c','Before you start','Open a new notebook, or a local folder if you prefer. You will build an experiment harness in this chapter and keep adding to it until Chapter 34.'],
    ['p','So far you have looked mostly at the model. This chapter covers the ordinary software around it. When an engineer shows you a system diagram, you should recognise the parts.'],
    ['p','An everyday comparison: when you order food in an app, your tap sends a message to a restaurant, a reply comes back with a price, and your screen updates. It looks mysterious only until you see the messages.'],
    ['c','Why this matters','Applied AI work involves APIs, Python, cloud services, retrieval, evaluation and production systems. You cannot question an architecture if JSON, HTTP, environment variables, tests and logs are unfamiliar. This chapter covers the minimum.'],
    ['key','An AI system is a software system with a probabilistic part. Everything that goes wrong in normal software still applies, plus one more failure that produces no error.'],
    ['h','Hands-on units'],
    [
      'unit',
      '8.1',
      'Python as an experiment instrument',
      {goal:'Write small Python programs, functions, lists, dictionaries and loops well enough to modify experiments without depending on generated code.',
       idea:'Use Python as your lab notebook. The goal is to express an experiment precisely, not to master the language.',
       prove:'Create variables, a function, a loop and a dictionary; print each intermediate result.',
       build:'Build a script that reads ten questions from a list and records a result object for each question.',
       brk:'Intentionally pass a missing key, empty list and wrong type. Observe the errors.',
       artifact:'A <code>chapter-8/python-basics.py</code> file plus a one-page error log.',
       check:'Can you explain a function, dictionary, loop and exception without opening documentation?',
       lens:'Use your own code for the harness before introducing a framework.'}
    ],
    [
      'unit',
      '8.2',
      'HTTP, JSON and API contracts',
      {goal:'Understand request/response, status codes, headers, JSON payloads and contract failures.',
       idea:'An AI API is still an API. The model is probabilistic, but the network interface is software engineering.',
       prove:'Call a safe public JSON endpoint and print status code plus two fields.',
       build:'Build a fake endpoint response with missing and unexpected fields and handle both.',
       brk:'Simulate 401, 404, 429 and 500 cases and decide which are retryable.',
       artifact:'An API contract sheet listing request, response, errors and retry policy.',
       check:'What is the difference between a bad request, unavailable dependency and server failure?',
       lens:'This is the vocabulary you need to challenge “the API failed” as a complete explanation.'}
    ],
    [
      'unit',
      '8.3',
      'Environments, secrets and Git',
      {goal:'Use environment variables/secrets, virtual environments and basic Git workflow.',
       idea:'A working prototype that leaks a key or cannot be reproduced is not a credible engineering artifact.',
       prove:'Store a secret outside source code and print only a masked prefix.',
       build:'Create a repository with README, requirements and a repeatable run command.',
       brk:'Commit a deliberately broken change, identify it, and revert to the previous working version.',
       artifact:'Reproducible repo skeleton with <code>.gitignore</code>, README and experiment log.',
       check:'Could another person run your experiment without asking what you did manually?',
       lens:'Reproducibility is a PM concern because it turns a demo into evidence.'}
    ],
    [
      'unit',
      '8.4',
      'Errors, logging and tests',
      {goal:'Read stack traces, add structured logs and write small tests.',
       idea:'An AI system is judged by what happens when things go wrong, not only by the happy path.',
       prove:'Create three tests: expected answer, missing input, malformed response.',
       build:'Add request ID, timestamp, model and status to each experiment record.',
       brk:'Force a timeout and malformed output; trace the failure from input to exception.',
       artifact:'Mini test suite plus failure log with root cause and fix.',
       check:'Can you distinguish an application bug from a provider/model failure?',
       lens:'This becomes the base for evaluation and observability later.'}
    ],
    [
      'unit',
      '8.5',
      'Build the experiment harness',
      {goal:'Create a reusable runner that records inputs, outputs, configuration, latency and errors.',
       idea:'The harness is the bridge from “I tried it” to “I measured it.”',
       prove:'Run one prompt twice and save both runs as structured JSON.',
       build:'Add experiment name, version, model, prompt version, input/output tokens when available, latency and notes.',
       brk:'Change one variable and verify the logs make the comparison obvious.',
       artifact:'<code>experiment_runner/</code> with schema, runner, sample runs and README.',
       check:'Can you reproduce yesterday’s result and explain what changed?',
       lens:'Every later chapter should plug into this harness instead of inventing a new way to record evidence.'}
    ],
    ['q','I401'],
    ['h','Contracts fail silently'],
    ['p','An AI application relies on many assumptions about data: this field will be present, it will be a number, the list will not be empty. These are <strong>contracts</strong>, and in production each one will eventually be broken.'],
    ['key','Production systems must detect a broken contract instead of carrying on. Many real AI incidents look like this: nothing raised an error, and the answer was built on missing data.'],
    ['h','What “enough” means'],
    ['p','You do not need to become a backend engineer. You have enough when you are comfortable with all of these:'],
    [
      'l',
      ['Writing a small function, and keeping a few labelled values together in a dictionary.','<strong>Status codes:</strong> 200 means it worked, 4xx means the request was wrong, and 5xx means the server failed.','<strong>JSON:</strong> labels and values, the format most systems use to exchange data.','Keeping a password or API key out of your code, in an environment variable instead.','Saving your work in Git so you can go back to an earlier version.','Reading an error message from the bottom up, where the real cause usually is.','Writing a test that fails on purpose, so you know it actually checks something.']
    ],
    ['p','Two more ideas are useful to understand, but you do not need to write them: background jobs, and queues that hold work until something is free to process it.'],
    [
      'try',
      {id:'ch21-guess',
       mins:6,
       min:60,
       rows:4,
       task:'Think of the last AI feature you saw demonstrated. In plain words, write what its request probably contained and what its response probably looked like. Where are you guessing?',
       ph:'The request probably contained … The response probably … I am guessing about …',
       after:'The places where you had to guess are the questions to ask the team that built it. Being able to produce that list is the main skill this chapter teaches.'}
    ],
    ['h','Summary'],
    ['key','A model API call is a normal software dependency. The engineering risk sits in interfaces, error handling, secrets, retries, observability and contracts, at least as much as in the model.'],
    ['p','Next, Chapter 22 uses the harness you just built to compare models.']
  ],
  capstone:{title:'An experiment harness in version control',
   brief:'Every later chapter in Part V asks you to run something and compare it with something else. If you rebuild the setup each time, comparisons stop being comparable. Build the harness once, put it in Git, and keep adding to it.',
   steps:['Write a 20-line utility that reads JSON from a file and filters rows by one field.','Add three unit tests: the normal case, a missing field, and empty input.','Wrap your AI request recorder around it, so every run is saved as a JSON record.','Create a Git repository, commit the harness, and write a README that explains how to run it on a clean machine.','Break one thing on purpose, such as a bad key, a timeout or a malformed response, and confirm the record is still written with the error in it.'],
   done:['Someone else could clone the repository and run it.','Three tests pass, and one of them covers a failure.','You have one saved record from a run that failed.']}
},

/* ---------------------------------------------------------------- 22 / bk 9 */
{
  id:'ch9m', num:22, part:5, curriculumTier:'core', phase:3, prerequisites:['ch2','ch6','ch8f'], nextUnits:['ch10c'], minutes:55, labs:['costmodel'],
  title:'Choosing a model: benchmark on your own cases',
  concept:'Leaderboards measure someone else’s task. You will learn what changes when you change the model, benchmark models on your own ten cases, and write a model selection card that records the evidence.',
  plan:{
    first:'Pick two models available to you and write down, before testing, which one you expect to win on quality, on speed, and on cost.',
    build:'Run a ten-case benchmark covering factual recall, reasoning, extraction, multilingual and refusal behaviour.',
    brk:'Change one variable at a time \u2014 model, sampling, prompt \u2014 and work out which change actually caused what.',
    artifact:'A Model Selection Card: quality, latency, cost, and the fallback when your first choice is unavailable.',
    gate:'Recommend a model from evidence, and defend it against someone who prefers a different one.'
  },
  needs:[
    ['Temperature controls variation','You tested it in Chapter 2. Here it is one variable among several.',2],
    ['Write the answer key before measuring','Without an answer key, a benchmark means little.',6],
    ['An experiment harness that records runs','You built it in Chapter 21, and this chapter is the first to use it.',21]
  ],
  words:[
    ["Inference","Running a trained model to get an answer. Distinct from training, which is the process that produced the model in the first place — and it is inference you pay for, per request, forever."],
    ["Sampling","How the next word-piece gets picked from the several the model thinks plausible. Temperature is one control over it."],
    ["Benchmark","A fixed set of cases run against more than one option so the comparison means something. Somebody else’s benchmark predicts your task only by coincidence."],
    ["Model selection card","One page recording which model you chose, on what evidence, under which constraint, and what runs instead when it is unavailable."]
  ],
  takeaway:[
    'Explain what changes when you change the model, beyond a benchmark score.',
    'Say when retrieval, prompting and fine-tuning are each the right choice.',
    'Write a model recommendation that answers the question “measured how?”.'
  ],
  story:[
    ['c','Before you start','Open the experiment harness from Chapter 21. You will run the same ten cases on two or three models.'],
    ['p','A leaderboard shows how a model did on someone else’s task. This chapter shows you how to get your own numbers, on your own questions, in one afternoon.'],
    ['p','Compare it with buying a car. An award does not tell you whether it fits your family, handles your roads or what it costs to run. You would test-drive it. Few teams test-drive models.'],
    ['key','Models differ on several things at once: capability, speed, context size, tool use and cost. A model that wins on one can lose on another, and which one matters depends on your use case.'],
    ['h','Hands-on units'],
    [
      'unit',
      '9.1',
      'What an LLM is doing at inference',
      {goal:'Explain tokens, transformer-based context processing, generation and the difference between training and inference.',
       idea:'Inference is the execution phase: the model receives context and generates output; training changes the model parameters.',
       prove:'Compare two prompts with different context lengths and record input/output token counts and latency.',
       build:'Create a tiny table of context length versus observed latency/cost.',
       brk:'Add irrelevant context and see whether cost, latency or answer quality changes.',
       artifact:'Inference observation sheet.',
       check:'Why is a larger prompt not automatically a better prompt?',
       lens:'Ask engineers where the cost and latency are actually coming from before debating model brand.'}
    ],
    [
      'unit',
      '9.2',
      'Sampling and output variability',
      {goal:'Understand sampling controls as probability-distribution controls rather than “creativity sliders.”',
       idea:'Lower sampling generally reduces variation; it does not turn a model into a guaranteed deterministic or factual system.',
       prove:'Run the same prompt multiple times under two sampling configurations supported by your provider.',
       build:'Count distinct outputs and note qualitative differences.',
       brk:'Use a factual task and a creative task; compare whether variability matters equally.',
       artifact:'Sampling experiment table with raw outputs.',
       check:'What changed: factuality, diversity, or merely variation?',
       lens:'Do not promise “temperature zero means always identical.” Measure the actual provider behavior.'}
    ],
    [
      'unit',
      '9.3',
      'Model tiers and routing',
      {goal:'Understand why smaller, faster, cheaper models may be appropriate for some tasks and larger models for others.',
       idea:'Model selection is an optimization problem across quality, latency, cost, context, tool reliability and operational constraints.',
       prove:'Create a 10-case benchmark spanning extraction, reasoning, multilingual and refusal tasks.',
       build:'Run two available models or model configurations through the same cases.',
       brk:'Route easy cases to the cheaper model and hard cases to the stronger model; compare cost and quality.',
       artifact:'Model Selection Card.',
       check:'Which acceptance metric justified the choice?',
       lens:'The “best model” is undefined until the task, quality bar and cost ceiling are defined.'}
    ],
    [
      'unit',
      '9.4',
      'Reasoning, context and fine-tuning boundaries',
      {goal:'Distinguish prompting, context/RAG and fine-tuning as different levers.',
       idea:'Use context when the system needs changing knowledge; prompting for instruction/behavior; fine-tuning when repeated stable behavior is worth encoding in weights.',
       prove:'Take one task and write three proposed solutions: prompt-only, retrieval/context, fine-tune hypothesis.',
       build:'Identify the data, expected benefit, maintenance cost and evaluation needed for each.',
       brk:'Invent a case where fine-tuning looks attractive but retrieval is cheaper because knowledge changes weekly.',
       artifact:'Decision matrix: Prompt vs Context/RAG vs Fine-tune.',
       check:'Is the gap knowledge, behavior, or both?',
       lens:'This prevents architecture discussions from collapsing into “let’s fine-tune it.”'}
    ],
    [
      'unit',
      '9.5',
      'Benchmarking without fooling yourself',
      {goal:'Learn why small demos can produce misleading conclusions and how to design a balanced task set.',
       idea:'A benchmark is a measurement instrument; biased cases produce biased decisions.',
       prove:'Create categories, sample cases and expected outputs before testing.',
       build:'Run blind or consistently ordered comparisons where practical.',
       brk:'Add adversarial, ambiguous and no-answer cases and see whether the ranking changes.',
       artifact:'10–30 case model benchmark with category breakdown.',
       check:'Would your benchmark detect the failure you care about most?',
       lens:'A PM should challenge the test set before challenging the score.'}
    ],
    [
      'unit',
      '9.6',
      'Model Selection Card',
      {goal:'Turn the evidence into a decision artifact engineers and stakeholders can review.',
       idea:'The card records constraints, evidence, fallback and unresolved risks in one place.',
       prove:'Fill task, quality target, data sensitivity, latency target and cost ceiling.',
       build:'Add model options, benchmark evidence and fallback strategy.',
       brk:'Remove the benchmark results and try to make the decision; note how much becomes opinion.',
       artifact:'Versioned Model Selection Card.',
       check:'Can a reviewer see exactly why the selected model was chosen?',
       lens:'This is portfolio evidence of technical judgment, not a leaderboard screenshot.'}
    ],
    ['q','I402'],
    ['h','Change one thing at a time'],
    ['p','When you compare models, change only the model. If you change the model and the prompt together and the result improves, you do not know which change helped.'],
    ['h','What you need to know about models'],
    ['p','The knowledge you need is specific and limited. It covers supervised and unsupervised learning, classification and regression, and training, validation and test sets. It also covers overfitting, precision and recall, and embeddings. Add transformers and attention at the level of the idea, inference versus training, and pre-training versus fine-tuning versus retrieval. That is enough to take part in an architecture discussion.'],
    ['h','Fine-tune, prompt or retrieve?'],
    ['p','The most common question in these discussions is whether to fine-tune. Here is a rule of thumb. Treat it as a hypothesis to test, not a law:'],
    [
      'l',
      ['<strong>Retrieval</strong> when the problem is changing knowledge or private data.','<strong>Prompting</strong> when the behaviour can be steered with instructions and examples.','<strong>Fine-tuning</strong> when the behaviour, style or task pattern is stable, repeated, and worth changing weights for.']
    ],
    [
      'tb',
      ['Decision','Ask first','The common mistake'],
      [
        ['Model choice','Which constraint binds — quality, latency or cost?','Picking the “smartest” model by reputation'],
        ['Fine-tune','Is the gap knowledge, or behaviour?','Fine-tuning to inject documents that change monthly'],
        ['Reasoning level','Does more reasoning move the acceptance metric?','Paying for more reasoning without measuring it'],
        ['Context size','Do we genuinely need the larger window?','Treating a big window as a substitute for retrieval']
      ]
    ],
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
    ['p','Next, Chapter 23 covers how to design the context you send to whichever model you chose.']
  ],
  capstone:{title:'A model selection card',
   brief:'Write one page a stakeholder can read and an engineer can act on, for an example government assistant. The card is the deliverable; the benchmark behind it is the evidence.',
   steps:['State the task and the quality bar in measurable terms.','State how sensitive the data is, and what that rules out immediately.','Set a response-time target and a cost limit per task.','Shortlist two or three models, with your ten-case results next to each.','Name the fallback: what runs when the first choice is down, degraded or repriced.','Name the dataset you will use to recheck the choice in three months.'],
   done:['Every claim on the card traces back to a run in your harness.','A reader can see which constraint decided the choice.','The fallback is named, and you have tried it at least once.']}
},

/* --------------------------------------------------------------- 23 / bk 10 */
{
  id:'ch10c', num:23, part:5, curriculumTier:'core', phase:3, prerequisites:['ch2','ch15b','ch8'], nextUnits:['ch11r'], minutes:55, labs:['contextrot'],
  title:'Context engineering: deciding what the model sees',
  concept:'Context engineering is deciding what goes into each request: instructions, examples, evidence, history and tool results, and in what format. You will treat the prompt as a contract, set a context budget, and design where memory is stored.',
  plan:{
    first:'Write a vague prompt that makes a downstream parser fail, and keep the failure.',
    build:'Redesign it as an interface: structured output, validation, examples, a refusal state, provenance, and bounded history.',
    brk:'Remove required fields, add contradictory instructions, overflow the context, and inject irrelevant history.',
    artifact:'A context budget, a schema, and a memory/state design.',
    gate:'Explain the difference between context, state and persistent memory without blurring them.'
  },
  needs:[
    ['A system prompt is a standing instruction','From Chapter 2. Here it is one part of a designed context.',2],
    ['The context window has a limit','From Chapter 1.5. The budget is real, so something must be removed first.',1.5],
    ['Structured output can be required','Chapter 8 made the format reliable. This chapter puts it in a wider design.',8]
  ],
  words:[
    ["Context engineering","Deciding what the model receives at all — instructions, examples, evidence, history, tool results — and in what shape. Retrieval is one part of it."],
    ["Context budget","A token allowance per component, with a stated order in which things get dropped when the total will not fit."],
    ["Schema validation","Checking returned data against a declared shape before anything downstream uses it."],
    ["Provenance","The record of where a piece of information came from, carried alongside it so an answer can be traced back to a source."]
  ],
  takeaway:[
    'Treat a prompt as an interface contract rather than a paragraph of requests.',
    'Say what gets removed first when the context budget is tight, and why.',
    'Distinguish conversation history, user profile and task state as three different stores.'
  ],
  story:[
    ['c','Before you start','Pick one assistant you know well, yours or one you use. You will list everything that goes into its context.'],
    ['p','The prompt is only one part of what the model sees. Deciding what else goes in, and what is left out, is a larger job called <strong>context engineering</strong>. The context window has a limit, and you pay for every token.'],
    ['p','An everyday comparison: you brief a brilliant new colleague who remembers nothing from yesterday. Each morning you hand them a folder with the standing instructions, some examples, the file they need today and a note about last week. What you put in the folder decides how well they do.'],
    ['key','Treat a prompt as an interface contract: role, task, constraints, examples, output schema and refusal behaviour. Code downstream depends on each of these.'],
    ['h','Hands-on units'],
    [
      'unit',
      '10.1',
      'Prompt as an interface contract',
      {goal:'Design prompts with explicit task, constraints, input definitions, output expectations and failure behavior.',
       idea:'A prompt is an interface contract between application and model.',
       prove:'Rewrite a vague instruction into role, task, constraints, examples and output requirements.',
       build:'Run old and new versions on the same 10 cases.',
       brk:'Add contradictory instructions and observe which behavior is stable and which is not.',
       artifact:'Prompt version diff + benchmark result.',
       check:'What requirement became measurable after the rewrite?',
       lens:'Prompt changes should be versioned like code.'}
    ],
    [
      'unit',
      '10.2',
      'Structured outputs and schemas',
      {goal:'Make model output machine-consumable and validate it before downstream use.',
       idea:'Natural-language output is flexible; application interfaces need predictable structure.',
       prove:'Define a small JSON schema for a task extraction object.',
       build:'Generate outputs, parse them and reject invalid structures.',
       brk:'Remove a required field and insert a wrong type; verify the application catches it.',
       artifact:'Schema + validation tests + sample valid/invalid payloads.',
       check:'Does the schema prevent unsafe values or only formatting mistakes?',
       lens:'Structured output is an interface control, not a truth guarantee.'}
    ],
    [
      'unit',
      '10.3',
      'Context budget',
      {goal:'Measure how much of the context is instructions, history, retrieved text and tool output.',
       idea:'Context is a finite resource with quality, latency and cost implications.',
       prove:'Record token counts for each context component where the provider exposes them or estimate consistently.',
       build:'Create a budget policy: what gets kept, summarized or dropped first.',
       brk:'Flood the context with irrelevant history and compare answer quality and cost.',
       artifact:'Context Budget Worksheet.',
       check:'What is the first thing you would remove under pressure?',
       lens:'A PM should be able to ask “what is in the context?” and get an exact answer.'}
    ],
    [
      'unit',
      '10.4',
      'State, history and memory',
      {goal:'Separate request context, conversation history, durable user data and task state.',
       idea:'“Memory” is an application architecture with storage, retention and authorization, not a single feature.',
       prove:'Draw three stores: session history, user profile, task state.',
       build:'Specify fields, owner, retention, access and deletion path for each.',
       brk:'Introduce stale or conflicting memory and define precedence rules.',
       artifact:'Memory/State Design Sheet.',
       check:'What data should never be injected into a prompt by default?',
       lens:'This is where privacy and product design meet context engineering.'}
    ],
    [
      'unit',
      '10.5',
      'Provenance and citations',
      {goal:'Make evidence traceable from answer to source, chunk and version.',
       idea:'A citation is useful only if it lets the user or auditor trace the claim to evidence.',
       prove:'Attach source ID, section and chunk ID to each retrieved passage.',
       build:'Generate an answer that cites those identifiers.',
       brk:'Delete or change a source version and test whether old citations remain valid.',
       artifact:'Provenance schema + citation examples.',
       check:'Can you reproduce the exact source used for an answer?',
       lens:'Traceability is essential in regulated or policy-heavy systems.'}
    ],
    [
      'unit',
      '10.6',
      'Context failure clinic',
      {goal:'Diagnose wrong answers caused by missing, stale, irrelevant, contradictory or malicious context.',
       idea:'Many “model failures” are actually context-construction failures.',
       prove:'Create five intentionally bad context packages and predict the failure.',
       build:'Fix one issue at a time and rerun the same test set.',
       brk:'Mix stale policy, unrelated text and prompt injection into the context.',
       artifact:'Context Failure Taxonomy.',
       check:'What failed: retrieval, assembly, authorization, instruction hierarchy, or generation?',
       lens:'This prepares you for production RAG and security.'}
    ],
    ['p','Structured output removes ambiguity for the code that reads the reply, which usually cannot handle prose.'],
    ['q','I403'],
    ['h','Memory is an architecture choice'],
    ['key','A model does not have memory. Every product that offers memory has built a store, and the kind of store decides what it can delete when someone asks.'],
    ['p','You will hear many names for parts of the context: caching, compression, few-shot examples, instruction hierarchy. They all answer the same two questions: what goes in, and what is removed first when it does not fit.'],
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
    ['p','Next, Chapter 24 uses this context design as the input to a production retrieval system.']
  ],
  capstone:{title:'A context budget for one assistant',
   brief:'Write one page that says exactly what goes into the request, what it costs, and what is removed first when space runs out. This makes a discussion about context windows concrete.',
   steps:['List every part that enters the context: instructions, examples, retrieved evidence, history, tool results and user data.','Next to each, write a token count from a real run, not a guess.','Set a total limit and show the remaining headroom.','Define the removal order, and the rule behind it.','Write the schema the output must match, and what happens when it does not.','For each piece of stored data, say which of the three memory stores it belongs to.'],
   done:['The numbers come from a real run.','The removal order has a stated reason.','Every stored field has a way to be deleted.']}
},

/* --------------------------------------------------------------- 24 / bk 11 */
{
  id:'ch11r', num:24, part:5, curriculumTier:'core', phase:3, prerequisites:['ch7','ch12','ch6'], nextUnits:['ch12t'], minutes:60, labs:['fusion'],
  title:'Production RAG: ingestion, access control and freshness',
  concept:'A production retrieval system has several stages you can tune, from reading documents in to checking the answer. You will work through each stage, including permissions, deletion and rollback, and design an architecture you could defend in a review.',
  plan:{
    first:'Take three real documents and inventory them \u2014 id, section, language, metadata, access label \u2014 then predict which metadata will earn its keep.',
    build:'Compare lexical, semantic and hybrid retrieval, then add reranking or record a measured reason to leave it out.',
    brk:'Test what happens on deletion, on a permission change, on duplicates, and on an index version change.',
    artifact:'A production RAG architecture with access control, provenance, versioning, a no-answer policy and a rollback path.',
    gate:'Name the first production retrieval failure you would investigate, and say why that one first.'
  },
  needs:[
    ['You built retrieval by hand','Chapters 3 to 7. This chapter turns that into an architecture.',7],
    ['Keyword and meaning search fail differently','Chapter 12 measured it. Here it becomes an ingestion and indexing decision.',12],
    ['The answer key is your measuring tool','Every claim in this chapter is measured against it.',6]
  ],
  words:[
    ["Ingestion","Everything that happens to a document before it can be retrieved: parsing, extraction, enrichment, chunking, embedding. It sets a ceiling on quality that nothing downstream can raise."],
    ["Query rewriting","Turning what the user typed into what should actually be searched for, before retrieval runs."],
    ["Access-control-aware retrieval","Filtering by who is asking as part of the search, rather than hiding results afterwards in the interface."],
    ["Embedding versioning","Tracking which model produced which stored vectors, so a model change does not silently corrupt an index."]
  ],
  takeaway:[
    'Name the stages of a production retrieval pipeline and say which can be tuned.',
    'Explain why ingestion quality sets an upper limit on retrieval quality.',
    'Say what must happen to your index when a document is deleted or a permission changes.'
  ],
  story:[
    ['c','Before you start','Have your Chapter 12 retrieval pipeline and your Chapter 6 answer key ready.'],
    ['p','Your Chapter 7 system works because you chose every document and you are the only user. In production, scans arrive crooked, permissions change after indexing, the same contract is uploaded twice under two names, and your provider updates the model without telling you.'],
    ['c','Note','A production pipeline has seven stages: reading documents in, splitting them, adding labels, creating embeddings, searching, building the prompt, and checking the answer. Each stage can be tuned, so each one is a suspect when quality drops without a code change.'],
    ['key','Anything lost while reading documents in is lost for good. Better search cannot bring back a table the parser flattened or a page it skipped.'],
    ['h','Hands-on units'],
    [
      'unit',
      '11.1',
      'Parsing and document ingestion',
      {goal:'Treat document ingestion as an engineering pipeline rather than “upload PDF.”',
       idea:'Garbage or lost structure at ingestion becomes retrieval garbage later.',
       prove:'Take three PDFs/documents and compare extracted text with the human-visible source.',
       build:'Record page, section, table, language and parser notes.',
       brk:'Use a scanned page, table-heavy page and malformed document. Record what is lost.',
       artifact:'Ingestion Quality Report.',
       check:'Which information disappeared before retrieval even started?',
       lens:'Ask for parser/OCR quality before blaming embeddings.'}
    ],
    [
      'unit',
      '11.2',
      'Metadata and document identity',
      {goal:'Design stable document and chunk identifiers plus metadata needed for filtering and provenance.',
       idea:'Metadata is part of retrieval logic, not decoration.',
       prove:'Create fields: document_id, version, section, language, access_label, effective_date.',
       build:'Assign stable chunk IDs and preserve parent relationships.',
       brk:'Create duplicate and superseded versions and test retrieval filters.',
       artifact:'Document Metadata Contract.',
       check:'Can the system distinguish current from obsolete evidence?',
       lens:'Versioning and identity become critical when policy changes.'}
    ],
    [
      'unit',
      '11.3',
      'Chunking families',
      {goal:'Compare fixed, recursive/structure-aware, semantic and hierarchical chunking without treating any as universally best.',
       idea:'Chunking is a hypothesis about what unit of evidence users will need.',
       prove:'Chunk the same document three ways and inspect boundaries.',
       build:'Create 10 questions that require different evidence granularity.',
       brk:'Test a question whose answer crosses a chunk boundary.',
       artifact:'Chunking Experiment with before/after examples.',
       check:'Which chunking strategy matched your question set and why?',
       lens:'The right question is not “which chunking is best?” but “best for what corpus and query distribution?”'}
    ],
    [
      'unit',
      '11.4',
      'Sparse retrieval',
      {goal:'Understand exact lexical retrieval and why it remains valuable.',
       idea:'Identifiers, names, codes and exact phrases are often retrieval strengths for lexical methods.',
       prove:'Build a small keyword/BM25-style search experiment or use a library after understanding the scoring idea.',
       build:'Measure rank of known target passages.',
       brk:'Use paraphrased questions and synonym-heavy questions to expose weaknesses.',
       artifact:'Sparse Retrieval Benchmark.',
       check:'Where did exact matching win?',
       lens:'Do not replace strong deterministic signals merely because embeddings are fashionable.'}
    ],
    [
      'unit',
      '11.5',
      'Dense, hybrid and vector search',
      {goal:'Understand embeddings as an indexable representation and combine sparse/dense evidence.',
       idea:'Dense retrieval helps when meaning is similar despite wording differences; hybrid retrieval combines different failure modes.',
       prove:'Run the Chapter 4–5 question set through lexical, dense and hybrid retrieval.',
       build:'Record rank of relevant evidence for each query.',
       brk:'Create exact-ID, synonym, multilingual and ambiguous cases.',
       artifact:'Retrieval Benchmark with per-query evidence.',
       check:'Which query categories benefit from which retriever?',
       lens:'Architecture decisions should follow your error distribution.'}
    ],
    [
      'unit',
      '11.6',
      'Reranking',
      {goal:'Understand a second-stage relevance model and measure whether its benefit justifies cost/latency.',
       idea:'First-stage retrieval optimizes candidate recall; reranking can improve ordering among candidates.',
       prove:'Retrieve 10 candidates and apply a second scoring stage using an available reranker or measured substitute.',
       build:'Compare Recall@10, Precision@3 and latency before/after.',
       brk:'Include cases where the reranker confidently misorders evidence.',
       artifact:'Reranking Experiment Report.',
       check:'Did the improvement affect the final task or only an intermediate metric?',
       lens:'Never add reranking because a reference architecture contains it; prove its value.'}
    ],
    [
      'unit',
      '11.7',
      'Query rewriting, parent-child retrieval and abstention',
      {goal:'Improve the retrieval query and context granularity while preserving user intent.',
       idea:'Retrieval is a pipeline: query formulation, candidate search, filtering, ranking, context assembly and answer policy.',
       prove:'Rewrite ambiguous questions into explicit search queries and compare results.',
       build:'Retrieve child chunks while returning parent context for readability.',
       brk:'Test an unanswerable query and a query where rewriting changes the intended meaning.',
       artifact:'Query Strategy + Abstention Test Set.',
       check:'When should the system ask a clarification question rather than retrieve?',
       lens:'Abstention is a product behavior, not merely a prompt sentence.'}
    ],
    [
      'unit',
      '11.8',
      'Authorization, freshness and rollback',
      {goal:'Make retrieval permission-aware and operationally reversible.',
       idea:'A correct answer from unauthorized data is still a security failure.',
       prove:'Add an access label to chunks and filter by a test user role.',
       build:'Simulate document deletion, permission change and index rebuild.',
       brk:'Query immediately after revocation and verify stale index content is inaccessible.',
       artifact:'Production RAG Architecture + ACL/Freshness/Rollback checklist.',
       check:'Can you prove an unauthorized user cannot retrieve the chunk?',
       lens:'Authorization belongs at the application/data layer, not only in model instructions.'}
    ],
    ['q','I404'],
    ['h','Reranking has a cost'],
    ['key','Reranking improves ordering but adds cost. Fetch ten candidates, rescore them, and check whether recall at ten and precision at three improved enough to justify the extra time and cost.'],
    ['h','Four questions to ask about any retrieval product'],
    ['p','Production retrieval has a long list of concerns, and you do not need to memorise it. Every item fits under one of four questions:'],
    [
      'n',
      ['<strong>Did we read the document correctly?</strong> Scans, tables, and content a parser drops.','<strong>Is this user allowed to see it?</strong> Permissions, separate customers, and deleted documents.','<strong>Did we find the right chunk?</strong> Keyword search, meaning search, query rewriting and reranking.','<strong>Can we show where the answer came from?</strong> Chunk IDs, citations, and what happens when there is no answer.']
    ],
    ['p','Use these four questions whenever someone demonstrates a retrieval product.'],
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
    ['p','Next, Chapter 25 gives the model controlled access to actions, not only evidence.']
  ],
  capstone:{title:'An enterprise retrieval architecture on one page',
   brief:'Write one page that an engineer could build from and a security reviewer could challenge. Keep it to one page; if it does not fit, you have not made enough decisions.',
   steps:['Draw ingestion, storage, index, retrieval, reranking and generation as separate stages.','Add authentication and authorisation, and mark where the access check happens.','Mark provenance: how an answer traces back to a chunk ID and a source document.','State the no-answer threshold, and what the user sees when it is reached.','State how the index and the embedding model are versioned.','State the rollback: what you do when a rebuild makes quality worse.'],
   done:['Every arrow has a failure mode written next to it.','The access check is on the retrieval path, not only in the interface.','Rollback is a written procedure.']}
},

/* --------------------------------------------------------------- 25 / bk 12 */
{
  id:'ch12t', num:25, part:5, curriculumTier:'core', phase:3, prerequisites:['ch8','ch2','ch11r'], nextUnits:['ch13a','ch14p','ch18s','b4'], minutes:50, labs:['schema'],
  title:'Tool calling and workflows: contracts before agents',
  concept:'A tool lets the model do something real, so you must decide exactly what it may do and who checks it. You will write tool contracts, enforce permissions on the server, and prefer fixed workflows before allowing an agent.',
  plan:{
    first:'Define one external action and write its tool schema before you write any model logic.',
    build:'Implement classify \u2192 retrieve \u2192 tool \u2192 validate \u2192 respond, with a confirmation step for anything consequential.',
    brk:'Test malformed arguments, a timeout, an unauthorised call, and a tool that returns the wrong thing confidently.',
    artifact:'A tool contract, a workflow diagram, and a failure-state table.',
    gate:'Point at every place in the flow where deterministic code retains control.'
  },
  needs:[
    ['A schema makes the format reliable','From Chapter 8. A tool contract applies the same idea to actions.',8],
    ['The model invents when it has no evidence','From Chapter 2. Now it can invent arguments to a real action.',2]
  ],
  words:[
    ["Tool contract","The typed interface to an external capability: name, description, constrained parameters, error states, permissions and side effects."],
    ["Deterministic workflow","A fixed sequence where only the parts that genuinely need judgement are left to the model."],
    ["Idempotency","The property that doing the same operation twice has the same effect as doing it once — which matters the moment anything retries."],
    ["Confirmation step","A required human acknowledgement before a consequential action runs."]
  ],
  takeaway:[
    'Write a tool contract that a reviewer could sign off.',
    'Say when a fixed workflow is better than letting the model decide.',
    'Name the checks that must happen before an important action runs.'
  ],
  story:[
    ['c','Before you start','Open your experiment harness from Chapter 21 and the agent loop from Chapter 9.'],
    ['p','A <strong>tool</strong> lets the model do something real: look up an invoice, send an email or change a record. So the question is not whether it can, but what exactly it may do, with what data, and who checks.'],
    ['p','An everyday comparison: a bank teller can look up your balance, but cannot approve a loan alone or send money on a customer’s word. The rule exists because some actions have consequences outside the bank, not because tellers are untrustworthy.'],
    ['h','Hands-on units'],
    [
      'unit',
      '12.1',
      'Tool schemas',
      {goal:'Define a tool as a constrained contract with name, description, parameters, errors and permissions.',
       idea:'Good tool definitions are part of the model’s operating interface.',
       prove:'Write a schema for <code>get_invoice_status(invoice_id)</code>.',
       build:'Add required fields, allowed formats and explicit error states.',
       brk:'Try missing IDs, invalid formats and an unauthorized invoice.',
       artifact:'Tool Contract Specification.',
       check:'Could a new engineer understand exactly what the tool can and cannot do?',
       lens:'Tool descriptions deserve the same care as API documentation.'}
    ],
    [
      'unit',
      '12.2',
      'Tool selection',
      {goal:'Measure whether the model selects the correct capability for each task.',
       idea:'Tool use should be justified by decision value, not novelty.',
       prove:'Create 20 tool-selection test cases across two or three tools.',
       build:'Record selected tool, arguments and expected tool.',
       brk:'Add near-duplicate tool names and ambiguous requests.',
       artifact:'Tool Selection Benchmark.',
       check:'What percentage of calls are correct, unnecessary or unsafe?',
       lens:'This becomes a measurable quality dimension in agent systems.'}
    ],
    [
      'unit',
      '12.3',
      'Validation, retries and timeouts',
      {goal:'Separate model-generated arguments from deterministic execution controls.',
       idea:'The model is not the authorization layer.',
       prove:'Validate every argument before execution and implement timeout/retry policy.',
       build:'Simulate transient and permanent failures.',
       brk:'Return malformed tool results and test downstream behavior.',
       artifact:'Tool Failure-State Table.',
       check:'Which failures are retryable and which require user intervention?',
       lens:'A PM should ask for timeout, retry and failure semantics for every external dependency.'}
    ],
    [
      'unit',
      '12.4',
      'Idempotency and side effects',
      {goal:'Understand why repeated tool calls can duplicate actions.',
       idea:'A retry is safe only when the operation is safe to repeat or protected by an idempotency mechanism.',
       prove:'Design an idempotency key for a purchase/request submission.',
       build:'Run the same action twice and verify only one business effect occurs.',
       brk:'Simulate a network timeout after the server accepted the request.',
       artifact:'Side-Effect Safety Checklist.',
       check:'What happens if the client never receives the success response?',
       lens:'This is essential when AI can trigger payments, tickets, messages or records.'}
    ],
    [
      'unit',
      '12.5',
      'Human approval',
      {goal:'Insert explicit confirmation before consequential or irreversible actions.',
       idea:'Human-in-the-loop is an architecture boundary that the system enforces, not just a confirmation popup.',
       prove:'Build draft → review → approve → execute.',
       build:'Log who approved, what was approved and which exact payload was executed.',
       brk:'Change the payload after approval and verify execution is blocked.',
       artifact:'Approval Workflow Diagram + audit schema.',
       check:'What exactly did the human approve?',
       lens:'The approval object must bind to the action, not just to a vague conversation.'}
    ],
    [
      'unit',
      '12.6',
      'Workflow patterns',
      {goal:'Implement sequential, routing, parallel and evaluator-optimizer workflows.',
       idea:'A workflow is a predefined control path with model calls inside it.',
       prove:'Build one simple sequential workflow and one routing workflow.',
       build:'Measure latency, cost and task success.',
       brk:'Introduce a wrong route and observe downstream failure.',
       artifact:'Workflow Pattern Comparison.',
       check:'Which pattern adds value and which adds unnecessary complexity?',
       lens:'Use the simplest composable pattern that meets the acceptance criteria.'}
    ],
    ['h','Prefer a fixed workflow'],
    ['key','A fixed workflow is often safer than an agent. If you know the sequence of steps, fix it in code and let the model handle only the part that needs judgement.'],
    ['q','I405'],
    ['h','Tool checklist'],
    ['p','Run this checklist on every tool before it ships. Each line has caused a real incident somewhere.'],
    [
      'l',
      ['The name is clear and the description is accurate. The model reads both.','Parameters are constrained: use an enum instead of free text where possible.','Side effects are stated explicitly.','Permissions are enforced on the server, not by asking the model.','You have considered idempotency: what happens if the call runs twice.','Errors are returned in a structured format.','Audit data is recorded.','Destructive actions require confirmation.']
    ],
    ['key','Give the model a tool only when its choice adds value. Every tool adds attack surface, latency, cost and failure modes.'],
    [
      'try',
      {id:'ch25-cross',
       mins:6,
       min:60,
       rows:4,
       task:'List the tools you would give a support assistant. Then cross out every tool where a fixed rule would choose correctly more than 95% of the time.',
       ph:'Tools: … Crossed out: … Left: …',
       after:'What remains is the set where the model’s judgement is worth the risk. It is usually much shorter than the first list.'}
    ],
    ['h','Summary'],
    ['p','Next, Chapter 26 lets the model control the sequence of steps: an agent.']
  ],
  capstone:{title:'A workflow that drafts but cannot submit',
   brief:'Build an approval flow where the assistant can prepare a purchase request but can never send it. The key number is how often the model proposes the correct action when it is not allowed to act.',
   steps:['Write separate tool contracts for the draft action and the submit action.','Enforce the split on the server: the submit tool is not in the model’s allowed list at all.','Add a human approval step, with an audit record of who approved what.','Run twenty realistic requests, and record how often the proposed action was correct.','Test a malformed argument, an unauthorised request and a timeout. Record what the user saw each time.'],
   done:['The model cannot submit, even if it asks to.','Every approval leaves a record naming a person.','You have a measured figure for how often the proposed action was correct.']}
},

/* --------------------------------------------------------------- 26 / bk 13 */
{
  id:'ch13a', num:26, part:5, curriculumTier:'core', phase:3, prerequisites:['ch12t','ch1'], nextUnits:['ch14p','b5'], minutes:60, labs:['agentloop'],
  title:'Agents: loops, stopping conditions and control',
  concept:'An agent chooses actions, checks the results and continues toward a goal. The hard part is control, not intelligence. You will build a bounded agent, add stopping conditions, and measure it against the fixed workflow from Chapter 25.',
  plan:{
    first:'Build the smallest possible loop: propose \u2192 call one approved tool \u2192 observe \u2192 continue or stop.',
    build:'Add an allowed-tool list, a maximum number of steps, explicit state, stop conditions, and a human approval gate.',
    brk:'Make it loop. Feed it confusing tool output. Ask it for a tool it is not allowed to use.',
    artifact:'A comparison of the agent against the deterministic workflow across twenty tasks.',
    gate:'Prove the autonomy adds measurable value. If it does not, ship the workflow.'
  },
  needs:[
    ['Tool contracts and fixed workflows','Chapter 25 built the workflow the agent is compared against.',25],
    ['Every step costs tokens','From Chapter 1. A loop multiplies that by the number of steps.',1]
  ],
  words:[
    ["Agent","A system in which the model can choose actions, inspect the results, and continue toward a goal."],
    ["Agent loop","Goal, decision, tool call, observation, updated context, then stop or continue. The stop condition is the part people leave out."],
    ["Step budget","A hard ceiling on how many actions an agent may take before it must give up. The main defence against a loop."],
    ["Handoff","Passing a task from one agent to another specialist. Cheap to draw, and easy to lose context or authority across."]
  ],
  takeaway:[
    'Draw the agent loop with its stopping conditions and error paths.',
    'Explain why most agent failures are control problems, not intelligence problems.',
    'Say when to add a second agent, and when not to.'
  ],
  story:[
    ['c','Before you start','Have the workflow from Chapter 25 and its twenty test tasks ready. You will run the same tasks through an agent.'],
    ['p','An <strong>agent</strong> is a system that repeats a loop on its own: decide, act, check the result, decide again. Every loop also needs a way to stop, and most problems come from the stopping, not from how capable the model is.'],
    ['p','An everyday comparison: you send a junior colleague to find one number. A good outcome is that they return in ten minutes with the number, or say they could not find it. A bad outcome is that they are still searching three hours later.'],
    ['h','Hands-on units'],
    [
      'unit',
      '13.1',
      'The agent loop',
      {goal:'Understand goal → model decision → tool call → observation → updated context → stop/continue.',
       idea:'An agent is a loop: the loop itself is the architecture.',
       prove:'Draw the loop and label every state and transition before coding.',
       build:'Implement a three-step toy loop with explicit state.',
       brk:'Force a tool failure and inspect whether the loop recovers or spirals.',
       artifact:'Agent State Diagram.',
       check:'Where can the loop stop safely?',
       lens:'If you cannot draw the loop, you cannot defend the architecture.'}
    ],
    [
      'unit',
      '13.2',
      'Planning and tool choice',
      {goal:'Understand model-driven planning and when it is actually useful.',
       idea:'Agents trade predictability for flexibility.',
       prove:'Give the agent three tools and 20 tasks; record tool selection.',
       build:'Compare one fixed workflow against the agent on the same tasks.',
       brk:'Include tasks that require no tool and tasks with ambiguous tool options.',
       artifact:'Agent vs Workflow Comparison.',
       check:'Did autonomy improve the acceptance metric enough to justify it?',
       lens:'A workflow that passes may be better than an agent that merely looks impressive.'}
    ],
    [
      'unit',
      '13.3',
      'State and context management',
      {goal:'Keep task state explicit and control context growth.',
       idea:'Long-running loops can accumulate stale, irrelevant or contradictory context.',
       prove:'Define a state object containing goal, steps, observations, approvals and status.',
       build:'Persist state between iterations and summarize only when necessary.',
       brk:'Add repeated observations and irrelevant tool output; measure context growth.',
       artifact:'Agent State Schema + Context Policy.',
       check:'Which fields are authoritative?',
       lens:'Explicit state makes incidents explainable.'}
    ],
    [
      'unit',
      '13.4',
      'Stopping conditions',
      {goal:'Bound steps, time, cost and unsafe action classes.',
       idea:'An agent without stop conditions is an unbounded production dependency.',
       prove:'Set max steps, timeout, cost ceiling and “cannot resolve” state.',
       build:'Log why each run stopped.',
       brk:'Create a loop that never finds an answer and prove it terminates.',
       artifact:'Agent Control Policy.',
       check:'Can you prove the system terminates under failure?',
       lens:'This is a reliability and cost requirement, not just an engineering detail.'}
    ],
    [
      'unit',
      '13.5',
      'Human checkpoints',
      {goal:'Add human intervention at ambiguity, high impact and irreversible transitions.',
       idea:'Autonomy should be proportional to reversibility and confidence.',
       prove:'Mark each tool/action as read-only, reversible-write or irreversible-write.',
       build:'Require approval for the last category.',
       brk:'Try to bypass approval through a prompt or tool argument.',
       artifact:'Agent Approval Matrix.',
       check:'Which actions are never autonomous?',
       lens:'The business owner should approve the autonomy boundary.'}
    ],
    [
      'unit',
      '13.6',
      'Multi-agent patterns',
      {goal:'Understand handoffs, orchestrator-worker and multi-agent collaboration without assuming they are superior.',
       idea:'Multiple agents create additional state, latency, cost and failure surfaces.',
       prove:'Solve a task with one agent first. Then prototype a two-role decomposition.',
       build:'Compare task success and operational complexity.',
       brk:'Introduce conflicting outputs and unclear ownership.',
       artifact:'Multi-Agent Decision Record.',
       check:'What measurable problem did the second agent solve?',
       lens:'Complexity must buy a measurable capability.'}
    ],
    [
      'unit',
      '13.7',
      'Agent exit gate',
      {goal:'Make “use an agent” a hypothesis requiring evidence.',
       idea:'The right architecture is the simplest one that meets requirements.',
       prove:'Create a 20-task benchmark comparing direct call, workflow and agent.',
       build:'Score quality, tool accuracy, latency, cost and safety.',
       brk:'Remove one capability at a time and see whether the agent still adds value.',
       artifact:'Agent Architecture Decision Record.',
       check:'Would you still choose an agent if nobody called it “agentic AI”?',
       lens:'That question protects you from architecture-by-hype.'}
    ],
    ['h','Agent failures are control failures'],
    ['key','Most agent failures are control problems. The model did not get worse; it was given unlimited chances to be wrong.'],
    ['q','I406'],
    ['h','Agent patterns'],
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
    [
      'try',
      {id:'ch26-compare',
       mins:6,
       min:60,
       rows:4,
       task:'Run the twenty tasks from your Chapter 25 workflow through the agent. Count how many it got right, how many tool calls it made, and what it cost.',
       ph:'Correct: … Tool calls: … Cost: … Compared with the workflow: …',
       after:'If the agent is not clearly better on a metric you care about, the workflow wins. That is a valid and respectable result to bring to a review.'}
    ],
    ['h','Summary'],
    ['p','Next, Chapter 27 looks at standards for connecting tools and agents.']
  ],
  capstone:{title:'An agent measured against the workflow it would replace',
   brief:'Build an agent that searches your documents, calculates one fixed metric and gives a cited answer. Then test whether it beats the fixed workflow from Chapter 25.',
   steps:['Give it exactly two tools and an explicit allowed list.','Set limits: maximum steps, a timeout, and an exit for “cannot resolve”.','Run the same twenty tasks through the agent and the workflow.','For each, record tool-selection accuracy, number of calls, response time and cost.','Write one paragraph recommending one of them, including the numbers.'],
   done:['Both systems ran the same twenty tasks.','You have four numbers for each system.','The recommendation names the metric that decided it.']}
},

/* --------------------------------------------------------------- 27 / bk 14 */
{
  id:'ch14p', num:27, part:5, curriculumTier:'core', phase:3, prerequisites:['ch12t','ch13a'], nextUnits:['ch15mm'], minutes:45, labs:[],
  title:'MCP and interoperability: standard connections to tools',
  concept:'MCP is a standard way for AI applications to connect to tools and data. You will map how it works, see what a standard does not make safe, and classify tools by what they are allowed to change.',
  plan:{
    first:'Use a real implementation or a local mock to discover and invoke one tool or resource, and read the actual exchange.',
    build:'Expose two tools and one resource. Test discovery, invocation, errors, consent and authorisation.',
    brk:'Try unauthorised access, malformed arguments, poisoned resource content, and permissions wider than the task needs.',
    artifact:'A trust-boundary diagram and an authorisation matrix.',
    gate:'Explain what interoperability standardises, and what it leaves exactly as dangerous as it was.'
  },
  needs:[
    ['A tool has a typed contract','From Chapter 25. MCP standardises how that contract is published.',25],
    ['Permissions are enforced on the server','Also from Chapter 25, and still true across a protocol.',25]
  ],
  words:[
    ["MCP","A protocol standardising how a host, a client and a server expose and invoke tools, resources and prompts. A protocol, not an agent framework."],
    ["Trust boundary","The line across which input stops being yours and starts being something you must check."],
    ["Least privilege","Granting exactly the permissions the task needs and no more — so a tool that is never needed cannot be misused."],
    ["Capability negotiation","How two sides of a protocol agree on what each can do before any work happens."]
  ],
  takeaway:[
    'Draw the host, client, server and resource flow, and mark where consent and authorisation happen.',
    'Explain why a standard interface to an unsafe tool is still unsafe.',
    'Classify tools by what they are allowed to change.'
  ],
  story:[
    ['c','Before you start','No new setup is needed to follow the ideas. The hands-on units show a small working example.'],
    ['p','<strong>MCP</strong> (Model Context Protocol) is a standard for connecting AI applications to tools and data sources. You will probably never build one, but you need to know what it does and does not cover.'],
    ['p','An everyday comparison: a plug socket is a standard. Any appliance fits the wall. The standard does not promise the appliance is safe, or decide who may switch it on.'],
    ['c','Note','The specification defines a host, a client and a server, with standard building blocks: resources, prompts and tools. It also discusses security and user consent explicitly, which is worth reading. Agent-to-agent protocols are developing separately, for agents that exchange tasks rather than for a model that calls a tool.'],
    ['h','Hands-on units'],
    [
      'unit',
      '14.1',
      'MCP mental model',
      {goal:'Explain host, client, server, tools, resources, prompts and capability negotiation.',
       idea:'A protocol standardizes interaction patterns; it does not remove the need for authorization or safe design.',
       prove:'Draw host → client → server → tool/resource flow.',
       build:'Inspect one real or local protocol exchange.',
       brk:'Ask what happens when a server advertises a capability the user is not authorized to use.',
       artifact:'MCP Trust-Boundary Diagram.',
       check:'Where does identity live and where is authorization enforced?',
       lens:'Protocol knowledge lets you challenge “MCP makes it secure” claims.'}
    ],
    [
      'unit',
      '14.2',
      'Expose a tiny capability',
      {goal:'Build a tiny local capability provider exposing one safe tool/resource.',
       idea:'The best way to understand a protocol is to inspect a small working implementation.',
       prove:'Expose a read-only function such as looking up a local record.',
       build:'Invoke it from a compatible client or local mock.',
       brk:'Return malformed arguments and server errors.',
       artifact:'MCP Mini-Demo repository.',
       check:'Can you trace discovery, invocation and response?',
       lens:'Keep the demo read-only to focus on protocol understanding.'}
    ],
    [
      'unit',
      '14.3',
      'Consent and authorization',
      {goal:'Separate capability discovery from permission to act.',
       idea:'A discoverable tool is not automatically an authorized tool.',
       prove:'Create an authorization matrix for read, write and privileged tools.',
       build:'Add a policy check before invocation.',
       brk:'Attempt an unauthorized invocation and record the denial.',
       artifact:'Authorization Matrix + test evidence.',
       check:'Who makes the final authorization decision?',
       lens:'Server-side authorization must not depend on the model following instructions.'}
    ],
    [
      'unit',
      '14.4',
      'MCP security and prompt injection',
      {goal:'Treat resources and tool outputs as untrusted content.',
       idea:'Interoperability can increase the number of external trust boundaries.',
       prove:'Inject a malicious instruction into a resource and test the client workflow.',
       build:'Separate data from control instructions and enforce tool policies.',
       brk:'Try indirect injection through a retrieved resource.',
       artifact:'MCP Security Test Sheet.',
       check:'Can untrusted content cause a privileged action?',
       lens:'This connects directly to the security chapter.'}
    ],
    [
      'unit',
      '14.5',
      'Agent-to-agent interoperability',
      {goal:'Understand A2A-style concepts: identity, delegation, task exchange, trust and observability.',
       idea:'Inter-agent protocols solve interoperability problems, not fundamental autonomy risks.',
       prove:'Draw a two-agent exchange with identity and delegation boundaries.',
       build:'Define what data and authority may cross the boundary.',
       brk:'Create a malicious or confused handoff and identify the control that should stop it.',
       artifact:'Agent Interoperability Trust Model.',
       check:'What does the receiving agent actually trust?',
       lens:'Keep the focus on architecture and governance, not protocol trivia.'}
    ],
    ['h','A standard does not make a tool safe'],
    ['key','A standard tool interface does not make an unsafe tool safe. The protocol carries the call; it does not decide whether the call should be allowed.'],
    ['q','I407'],
    ['p','A common mix-up: MCP is a <strong>protocol</strong>, not a framework that builds agents. It standardises the connection. What gets connected, and who may use it, is still your design.'],
    ['p','Agent-to-agent protocols add another layer, so agents can find each other and exchange tasks and results. For product decisions, focus on identity, delegation, trust, permissions, error handling and observability rather than on the message fields.'],
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
    ['p','Next, Chapter 28 changes the type of input, from text to documents, images and audio, while keeping the same context and evaluation design.']
  ],
  capstone:{title:'A tool access policy',
   brief:'Write a tool access policy for an AI assistant in a government setting, where “it seemed helpful” is not an acceptable reason for an action. The policy is the deliverable; the classification is the thinking.',
   steps:['Classify every tool as read-only, reversible write, irreversible write, privileged or prohibited.','For each class, state the authorisation required, and whether a person must confirm.','Build the authorisation matrix: roles down the side, tool classes across the top.','Mark the trust boundary on your diagram, and say which component enforces it.','Write what the audit record contains for an irreversible action.'],
   done:['Every tool has exactly one class.','Every irreversible action has a confirmation step.','The enforcing component is named, and it is not the model.']}
},

/* --------------------------------------------------------------- 28 / bk 15 */
{
  id:'ch15mm', num:28, part:5, curriculumTier:'core', phase:3, prerequisites:['ch16','ch6','ch14p'], nextUnits:['ch16e'], minutes:50, labs:[],
  title:'Multimodal AI: documents, images and voice',
  concept:'When the input is a PDF, an image or audio, the architecture stays the same: context, tools, retrieval and evaluation. What changes is what counts as evidence and how you trace it. You will find what text extraction loses and design a voice pipeline.',
  plan:{
    first:'Feed one PDF with a table, one image, and one short audio clip. Predict what plain text extraction will lose.',
    build:'Extract structured facts with provenance, including timestamps where the source is audio.',
    brk:'Try a poor scan, a difficult table, overlapping speakers, and mixed-language input.',
    artifact:'A multimodal pipeline and a modality-specific evaluation set.',
    gate:'State where provenance and human verification are mandatory rather than nice to have.'
  },
  needs:[
    ['Scanned documents need images, not just text','Chapter 16 covered this for images of text.',16],
    ['The answer key has to come from somewhere','From Chapter 6. For a table or an image, it comes from a person.',6]
  ],
  words:[
    ["OCR","Reading text out of an image of text. It has a quality floor set by the scan, and it fails quietly on bad input."],
    ["Diarization","Working out who spoke which part of an audio recording. Looks like a technical detail, behaves like a privacy decision."],
    ["Document understanding","Extracting meaning that depends on layout — tables, headings, position — rather than only the words."],
    ["Media provenance","Knowing where a piece of media came from and what has been done to it since."]
  ],
  takeaway:[
    'Name three things plain-text extraction loses from a real PDF.',
    'Draw a voice pipeline and mark the steps that affect response time.',
    'Say where the answer key for a multimodal question must come from.'
  ],
  story:[
    ['c','Before you start','Find one real PDF with a table, and one short audio recording you are allowed to use.'],
    ['p','A PDF contains text, layout, tables, images and hidden metadata. Extracting only the words flattens most of that, without any error.'],
    ['p','An everyday comparison: photograph a railway timetable and read only the words, in order, to someone on the phone. They hear every station name but no useful departure times, because the meaning was in the columns.'],
    ['h','Hands-on units'],
    [
      'unit',
      '15.1',
      'Document understanding',
      {goal:'Understand why a PDF is a layout object, not just a text file.',
       idea:'Text extraction can lose tables, reading order, images, headers and spatial meaning.',
       prove:'Compare extracted text with the rendered page.',
       build:'Record information lost and design a fallback.',
       brk:'Use a scan and a table-heavy page.',
       artifact:'Document Understanding Gap Report.',
       check:'Which questions cannot be answered from plain text?',
       lens:'This is a retrieval-quality problem before it is an LLM problem.'}
    ],
    [
      'unit',
      '15.2',
      'Vision and image evidence',
      {goal:'Use image evidence with explicit provenance and evaluation.',
       idea:'Vision models can interpret visual information, but interpretation is still probabilistic.',
       prove:'Ask five questions about an image/table and label the evidence region.',
       build:'Record source image, question, answer and human verification.',
       brk:'Use low-resolution or ambiguous images.',
       artifact:'Vision Evaluation Set.',
       check:'Which outputs require human verification?',
       lens:'Visual claims should be traceable to the source image.'}
    ],
    [
      'unit',
      '15.3',
      'Audio and speech pipelines',
      {goal:'Understand capture → ASR → normalization → extraction → confirmation → action.',
       idea:'Voice AI is a pipeline with multiple failure surfaces, not one model call.',
       prove:'Use a short audio sample and inspect transcript quality.',
       build:'Extract tasks from the transcript into structured JSON.',
       brk:'Test accents, overlapping speech, names and mixed-language content.',
       artifact:'Voice Pipeline Spec + 10-case audio eval set.',
       check:'Where can an error first enter the pipeline?',
       lens:'For meeting/task automation, confirmation and privacy are part of the product.'}
    ],
    [
      'unit',
      '15.4',
      'Streaming and latency',
      {goal:'Understand why voice and interactive multimodal systems care about partial results and time-to-first-response.',
       idea:'Users perceive latency differently from servers; streaming can improve perceived responsiveness without changing total work.',
       prove:'Measure stage-by-stage latency for a sample request.',
       build:'Separate capture, transcription, model and action latency.',
       brk:'Add artificial delay to one stage and identify the UX effect.',
       artifact:'Latency Budget for Multimodal Flow.',
       check:'What latency target is actually user-visible?',
       lens:'Do not optimize the fastest component while the user waits on another.'}
    ],
    [
      'unit',
      '15.5',
      'Multimodal RAG evaluation',
      {goal:'Design tests where the answer depends on modality-specific evidence.',
       idea:'A text-only evaluation set can hide multimodal failures.',
       prove:'Create five text-only, five visual/table and five audio cases.',
       build:'Score evidence correctness, extraction correctness and end-to-end task success.',
       brk:'Add a poor scan, noisy audio and multilingual case.',
       artifact:'Modality-specific Evaluation Matrix.',
       check:'Which failure belongs to extraction versus reasoning?',
       lens:'The metric stack should reveal the broken component, not just the final answer.'}
    ],
    ['h','Voice is a pipeline'],
    ['key','A voice system is a pipeline, not one model. Each stage adds delay, and each stage is a place where meaning can change.'],
    ['q','I408'],
    ['p','Each stage has a name: reading text from an image (OCR), turning speech into text (transcription), and working out who said what (speaker attribution). Each is a step where meaning can be lost, so each needs its own check.'],
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
    ['p','Next, Chapter 29 builds a systematic way to prove whether all these components work.']
  ],
  capstone:{title:'Specify a voice assistant for meeting follow-up',
   brief:'The technology is the easier half. Specify the half that gets systems stopped in review: privacy boundaries, retention, attribution and what a person must confirm.',
   steps:['Define the privacy boundary: whose audio, recorded where, with what notice.','Set how long transcripts are kept, and how they are deleted.','Specify speaker attribution, and what happens when it is uncertain.','Specify task extraction: what becomes an action item, and what confirmation is needed.','Write the evaluation metrics, including one for attribution accuracy.'],
   done:['A person can find out what was recorded about them and have it deleted.','No action is taken from audio without a confirmation step.','Attribution has a measured accuracy figure and a defined behaviour when uncertain.']}
}
,

/* --------------------------------------------------------------- 29 / bk 16 */
{
  id:'ch16e', num:29, part:5, curriculumTier:'core', phase:4, prerequisites:['ch6','ch14','ch145'], nextUnits:['ch17o','ch19pm','ch20d','b3'], minutes:60, labs:['judge'],
  title:'Evaluation engineering: test sets and release gates',
  concept:'Chapter 6 taught you to measure. This chapter turns measurement into a release process: a versioned test set, scores at several levels, and a gate that decides whether a change ships.',
  plan:{
    first:'Write twenty tests before you improve anything: normal, paraphrase, ambiguous, no-answer, multilingual, adversarial and tool-use cases.',
    build:'Automate retrieval, schema, tool and end-to-end checks. Reach for a model judge only where a deterministic check cannot do the job.',
    brk:'Change the prompt, the model and the index in turn and run the regression. Compare judge labels against human labels on a sample.',
    artifact:'An evaluation harness and a release gate.',
    gate:'No change ships because a demo looked better. It ships because it passed the gate.'
  },
  needs:[
    ['Answer keys, recall and precision','Chapter 6 built the measurement this chapter scales up.',6],
    ['A model can grade output at scale','Chapter 14 introduced the judge and its biases.',14],
    ['Improvement comes from reading failures by hand','From Chapter 14.5. Automation does not replace it.',14.5]
  ],
  words:[
    ["Golden set","The curated, versioned cases every change is measured against."],
    ["LLM-as-judge","Using a model to score output. A scorer, not an oracle — its disagreement with human labels is a number you should know."],
    ["Regression test","A case that passed before and must still pass now."],
    ["Release gate","The thresholds a change has to clear before it ships, whatever the demo looked like."]
  ],
  takeaway:[
    'Build a versioned test set that still works after a prompt, model or index change.',
    'Score at several levels, so a good final number cannot hide a broken component.',
    'Say where an LLM judge is acceptable and where it is not.'
  ],
  story:[
    ['c','Before you start','Bring your Chapter 6 answer key, your Chapter 14 judge and your experiment harness.'],
    ['p','This chapter turns your answer key into the process that decides whether a change ships: a fixed set of questions, a consistent way of grading, and a pass mark set in advance. After that, “the demo looked better” is no longer an argument.'],
    ['p','An everyday comparison: a school does not judge a student on one good answer. Everyone sits the same paper, it is marked the same way, and the pass mark is agreed beforehand.'],
    ['key','Every AI feature needs a test set, and the test set needs a version number. An evaluation you cannot rerun after a change is only an anecdote.'],
    ['h','Hands-on units'],
    [
      'unit',
      '16.1',
      'Golden datasets',
      {goal:'Create a versioned set of representative, edge and failure cases.',
       idea:'A golden dataset is the memory of what “good” means for your application.',
       prove:'Create at least 30 cases across happy path, paraphrase, ambiguity, no-answer, multilingual, adversarial and tool-use.',
       build:'Store expected behavior and evidence IDs where possible.',
       brk:'Remove a category and see which regressions become invisible.',
       artifact:'Golden Dataset v1.0.',
       check:'Does the set represent actual user risk, not just easy demos?',
       lens:'The dataset becomes the product-quality contract.'}
    ],
    [
      'unit',
      '16.2',
      'Error taxonomy',
      {goal:'Classify failures so fixes target causes rather than symptoms.',
       idea:'“Wrong answer” is too coarse to guide engineering.',
       prove:'Create categories: retrieval miss, wrong chunk, stale data, instruction failure, schema failure, tool failure, authorization failure, hallucination.',
       build:'Label 20 real failures.',
       brk:'Ask two people to label the same failures and compare disagreements.',
       artifact:'Error Taxonomy + labeled examples.',
       check:'Which categories are actionable?',
       lens:'A useful taxonomy changes what the team does next.'}
    ],
    [
      'unit',
      '16.3',
      'Retrieval metrics',
      {goal:'Measure Recall@k, Precision@k and related ranking measures with explicit relevance labels.',
       idea:'Metrics only mean something when the relevance definition is clear.',
       prove:'For each query, mark which chunks are relevant. Calculate Recall@k and Precision@k.',
       build:'Compare k=1, 3, 5 and 10.',
       brk:'Add distractor chunks and observe metric changes.',
       artifact:'Retrieval Evaluation Notebook.',
       check:'What exactly counts as relevant?',
       lens:'Never report a retrieval metric without its relevance policy.'}
    ],
    [
      'unit',
      '16.4',
      'Generation and task success',
      {goal:'Evaluate whether the final answer is correct, grounded, complete and useful for the task.',
       idea:'A good retrieval score can coexist with a bad answer.',
       prove:'Define binary or graded criteria for answer correctness and groundedness.',
       build:'Score a fixed sample with human labels.',
       brk:'Include partially correct and overconfident answers.',
       artifact:'Generation Rubric + labeled sample.',
       check:'Can two evaluators apply the rubric consistently?',
       lens:'Acceptance criteria should be observable, not “sounds good.”'}
    ],
    [
      'unit',
      '16.5',
      'LLM-as-judge',
      {goal:'Use model-based judges where deterministic checks are insufficient, then validate them against human labels.',
       idea:'A judge is another probabilistic component, so measure how often it agrees with people.',
       prove:'Have a judge score 20 examples for groundedness or relevance.',
       build:'Compare judge decisions with human labels and calculate disagreement.',
       brk:'Swap answer order or vary verbosity to test position/verbosity bias.',
       artifact:'Judge Validation Report.',
       check:'Where does the judge disagree and why?',
       lens:'Never let an unvalidated judge silently become your release authority.'}
    ],
    [
      'unit',
      '16.6',
      'Regression and CI gates',
      {goal:'Run evaluation automatically when prompts, models, indexes or tools change.',
       idea:'AI systems can regress without a code compile error.',
       prove:'Create a command that runs the golden set and outputs a summary.',
       build:'Set thresholds and fail the run when quality or safety falls below them.',
       brk:'Change a prompt and verify CI catches the regression.',
       artifact:'Automated Evaluation Suite + Release Gate.',
       check:'What exact condition blocks release?',
       lens:'This is the AI equivalent of a test suite with probabilistic behavior.'}
    ],
    [
      'unit',
      '16.7',
      'Evaluation release decision',
      {goal:'Combine quality, safety, latency and cost into a release decision without hiding trade-offs.',
       idea:'Shipping is a multi-dimensional decision; one aggregate score can hide unacceptable failures.',
       prove:'Define quality threshold, safety threshold, latency SLO, cost ceiling and rollback trigger.',
       build:'Run a candidate release through the gate.',
       brk:'Create a model that improves quality but violates cost or safety.',
       artifact:'Release Decision Record.',
       check:'Which threshold is non-negotiable?',
       lens:'A PM owns the decision framework even when engineers own the implementation.'}
    ],
    ['q','I409'],
    ['h','Measure at several levels'],
    ['key','Evaluate several levels at once. A good end-to-end score can hide a badly broken retriever, because a fluent model can cover for missing evidence often enough to look fine in a demo.'],
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
    ['p','Evaluation tools answer three questions. <strong>What do we test on?</strong> A fixed set you keep, with real cases where possible. <strong>Who grades it?</strong> An exact check where possible, a person where it matters, and a model where neither scales. <strong>What score lets it ship?</strong> Every evaluation product you see is selling an answer to one of these.'],
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
    ['p','Next, Chapter 30 covers how to observe the system continuously once it is live.']
  ],
  capstone:{title:'A release gate',
   brief:'The release gate makes every other measurement in Part V matter. Without it, evaluation is a report nobody has to act on.',
   steps:['Set the quality threshold: the metric, the test set and the number.','Set the safety threshold, including the attack success rate.','Set the response-time target and the cost limit per task.','Set the regression tolerance: how much may a previously passing case get worse?','Define the rollback trigger, and who is allowed to use it.','Run the gate against your current system and record whether it passes today.'],
   done:['Every threshold is a number against a named test set.','The gate has been run at least once and produced a verdict.','The rollback trigger names a person or a role.']}
},

/* --------------------------------------------------------------- 30 / bk 17 */
{
  id:'ch17o', num:30, part:5, curriculumTier:'core', phase:4, prerequisites:['ch115','ch15','ch16e'], nextUnits:['ch18s','ch20d','b5'], minutes:55, labs:['cache'],
  title:'Observability and LLMOps: traces, cost and rollback',
  concept:'When an answer is wrong, slow or expensive, you need to find out why without guessing. You will design a trace record, treat cost as an architecture metric, and version every part so any change can be rolled back.',
  plan:{
    first:'Trace one request by hand and time every stage with a stopwatch.',
    build:'Record request id, model and prompt version, retrieval ids, tool calls, latency, tokens, status and evaluation result.',
    brk:'Deliberately create a slow request, an expensive one and a low-quality one, then diagnose each from its trace alone.',
    artifact:'A six-panel observability specification.',
    gate:'Say which signals trigger an investigation, which trigger a rollback, and which are noise.'
  },
  needs:[
    ['Users notice response time','From Chapter 11.5. A trace shows where the time went.',11.5],
    ['Cost can be measured per request','Chapter 15 built the arithmetic this chapter records.',15],
    ['A release gate needs evidence','From Chapter 29. In production, traces provide it.',29]
  ],
  words:[
    ["Trace","The record of one request’s journey through the system: what was retrieved, which prompt version ran, what each stage cost in time and tokens."],
    ["Telemetry","The measurements a running system emits about itself — timings, counts, errors, usage — gathered so somebody can see what it is doing without reading the code."],
    ["Canary release","Sending a small share of real traffic to a change before all of it."],
    ["Drift","Quality moving without anybody deploying anything — because the inputs, the documents or the provider changed underneath you."]
  ],
  takeaway:[
    'Design a trace record that can answer “why was this answer wrong?” after the fact.',
    'Treat cost as an architecture metric rather than a finance report.',
    'Name what must be versioned so a change can be rolled back.'
  ],
  story:[
    ['c','Before you start','Open your experiment harness. You will extend its records into full traces.'],
    ['p','One day your system will give a wrong answer, and someone will ask why. This chapter makes sure the answer is not “we cannot tell”.'],
    ['p','An everyday comparison: when a parcel goes missing, the courier can tell you where it was last scanned, because they scan every parcel at every step. Without that, a lost parcel cannot be traced.'],
    ['key','A <strong>trace</strong> records one request’s path through the system. If you can only see the input and the output, every diagnosis is a guess.'],
    ['h','Hands-on units'],
    [
      'unit',
      '17.1',
      'Trace one request',
      {goal:'Build a structured trace for one AI request.',
       idea:'A trace is a timeline and evidence bundle for one execution.',
       prove:'Record request ID, model, prompt version, retrieved IDs, tools, latency, tokens and outcome.',
       build:'Persist the trace as JSON.',
       brk:'Remove one field and ask whether you could still reproduce the incident.',
       artifact:'Trace Schema v1.0.',
       check:'What minimum evidence is required for debugging?',
       lens:'Observability requirements should be written before production incidents.'}
    ],
    [
      'unit',
      '17.2',
      'Latency and throughput',
      {goal:'Measure stage-level latency and distinguish p50 from p95.',
       idea:'Average latency can hide slow tails that users experience.',
       prove:'Measure retrieval, reranking, model and tool stages.',
       build:'Calculate p50 and p95 for a small run or larger sample where available.',
       brk:'Add an artificial slow dependency and identify its effect on p95.',
       artifact:'Latency Budget + p50/p95 report.',
       check:'Which stage owns the tail?',
       lens:'SLOs should map to user experience, not just server metrics.'}
    ],
    [
      'unit',
      '17.3',
      'Token and cost telemetry',
      {goal:'Track input/output tokens and other variable costs at task level.',
       idea:'Cost is an architecture metric because context, model, retries and routing change spend.',
       prove:'Calculate cost per request using current provider pricing when implementing the lab.',
       build:'Compare two model/context strategies.',
       brk:'Add retries and large context to see cost growth.',
       artifact:'Unit Economics Model v1.0.',
       check:'What is cost per successful task, not merely cost per call?',
       lens:'Finance conversations become easier when every architecture choice has a measurable cost impact.'}
    ],
    [
      'unit',
      '17.4',
      'Drift and feedback',
      {goal:'Detect quality changes after data, prompt, model or user behavior changes.',
       idea:'AI degradation may occur without a code change.',
       prove:'Create a baseline evaluation and compare a later sample.',
       build:'Track complaint type, no-answer rate, escalation and task success.',
       brk:'Inject a changed document format or new user phrasing.',
       artifact:'Drift/Feedback Report.',
       check:'Which signal tells you quality changed before complaints explode?',
       lens:'Online signals complement offline evaluation.'}
    ],
    [
      'unit',
      '17.5',
      'Versioning and rollback',
      {goal:'Version prompts, models, indexes, schemas and tool contracts.',
       idea:'If an AI system cannot be rolled back component-wise, debugging becomes guesswork.',
       prove:'Create version IDs for prompt, model, index and tool schema.',
       build:'Run two versions side by side.',
       brk:'Simulate a bad prompt release and roll back.',
       artifact:'Version Matrix + Rollback Procedure.',
       check:'Can you identify exactly what changed?',
       lens:'Versioning is a delivery-control mechanism, not paperwork.'}
    ],
    [
      'unit',
      '17.6',
      'Production dashboard',
      {goal:'Turn the telemetry into a six-panel operational view: quality, safety, latency, cost, traffic, failures.',
       idea:'A dashboard should answer “is the system healthy?” and “where do I investigate?”',
       prove:'Define metric, source, owner and threshold for each panel.',
       build:'Create a mock dashboard or spreadsheet.',
       brk:'Remove one signal at a time and see which incident becomes harder to diagnose.',
       artifact:'Six-Panel Observability Specification.',
       check:'Which alerts should page a human and which should only be monitored?',
       lens:'Operational clarity is a PM responsibility as much as a platform responsibility.'}
    ],
    ['q','I410'],
    ['h','Cost is an architecture metric'],
    ['key','Model the cost of one user task end to end: input tokens, output tokens, embeddings, retrieval, and tool and API calls. Then you can compare two designs before building either.'],
    ['h','Change one thing at a time'],
    ['p','Terms such as canary release, shadow traffic, rollback and drift come from the same practice. Change one thing at a time, let a few users see it first, keep the old version ready, and keep watching after release.'],
    ['key','To prevent most incidents: change one variable at a time; version prompts, models, indexes and tool contracts; keep every part able to roll back; and never let a prompt change skip evaluation. Teams break the last rule most often, because editing a prompt does not feel like a deployment.'],
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
    ['p','Next, Chapter 31 treats the same system as a target for attackers.']
  ],
  capstone:{title:'Specify a six-panel production dashboard',
   brief:'Specify six panels: quality, safety, response time, cost, traffic and failures. For every panel, name its data source. A panel with no source is only a wish.',
   steps:['Quality: which metric, calculated from what, and how often.','Safety: attack success rate and refusal behaviour, from which test set.','Response time: median and 95th percentile, broken down by stage.','Cost: per task and per day, with the components visible.','Traffic: volume and mix, so you can see when the input changes.','Failures: error types with counts, not one error rate.','For each panel, write the threshold that triggers an investigation and the one that triggers a rollback.'],
   done:['Every panel names its data source.','Response time is broken down by stage, not reported as one number.','Each panel has an investigation threshold and a rollback threshold.']}
},

/* --------------------------------------------------------------- 31 / bk 18 */
{
  id:'ch18s', num:31, part:5, curriculumTier:'core', phase:4, prerequisites:['ch13','ch12t','ch75'], nextUnits:['ch19pm','ch21cap','b5'], minutes:55, labs:['injection','trifecta'],
  title:'Security and governance: controls around an untrusted model',
  concept:'Assume the model will be manipulated. The application, retrieved content, tools, identity layer and data pipeline are all part of the attack surface. You will apply least privilege, and build a risk register where every control has a test.',
  plan:{
    first:'Put a malicious instruction inside a document your own system retrieves, and test whether it can override the task or extract a secret.',
    build:'Add trust boundaries, least privilege, input validation, secret isolation, audit logging and confirmation steps.',
    brk:'Run prompt injection, indirect injection, tool abuse, data leakage and excessive-agency tests.',
    artifact:'A security report and an AI risk register.',
    gate:'Explain why retrieved content is untrusted input, to someone who thinks it is their own data.'
  },
  needs:[
    ['Prompt injection has no complete fix','Chapter 13 showed this. This chapter builds the controls around it.',13],
    ['Tools are a security boundary','From Chapter 25. Least privilege puts that into practice.',25],
    ['Retrieved text can carry attacks','In Chapter 7.5 you planted one in your own system.',7.5]
  ],
  words:[
    ["Prompt injection","Text that reaches the model as data and is followed as an instruction. The model cannot reliably tell the two apart, so the boundary has to be enforced around it."],
    ["Indirect injection","The same attack arriving through content the system retrieved rather than through what the user typed."],
    ["Excessive agency","Giving a system more permission, reach or autonomy than its task requires."],
    ["Risk register","A table where every row ends in a test that has been run, rather than in a control that has been described."]
  ],
  takeaway:[
    'Explain why retrieved content is untrusted input, whoever owns the document.',
    'Apply least privilege to an agent, and show what breaks.',
    'Produce a risk register where every control has evidence next to it.'
  ],
  story:[
    ['c','Before you start','Bring your Chapter 13 injection audit and the tool classification from Chapter 27.'],
    ['p','The model reads everything it is given with equal trust. Whether that is dangerous depends on the system around it: what it is given, and what it is allowed to do next. So most of AI security is about the system, not the model.'],
    ['p','An everyday comparison: someone slips a note into a stack of paperwork saying “approve this one without checking”. The clerk can read perfectly well. The problem is that nothing in the process separates an instruction from a document.'],
    ['key','Prompt injection is an input trust problem. The model cannot reliably tell an instruction from data, so the system that assembles the context must enforce the boundary. Asking in the system prompt is not enough.'],
    ['h','Hands-on units'],
    [
      'unit',
      '18.1',
      'Prompt injection',
      {goal:'Understand direct and indirect prompt injection as untrusted-input attacks.',
       idea:'Instructions embedded in user or retrieved content can compete with application instructions.',
       prove:'Place malicious instructions in a document and test the RAG assistant.',
       build:'Separate trusted control instructions from untrusted evidence.',
       brk:'Try to make the model reveal a secret or invoke a tool through retrieved text.',
       artifact:'Prompt Injection Test Report.',
       check:'What control stopped the attack: model behavior or application policy?',
       lens:'Never describe prompt text alone as a security boundary.'}
    ],
    [
      'unit',
      '18.2',
      'Sensitive information disclosure',
      {goal:'Protect secrets, PII and confidential data in prompts, retrieval and traces.',
       idea:'A model can only protect information if the application controls what it receives and can return.',
       prove:'Create a test corpus with synthetic sensitive fields.',
       build:'Apply filtering/redaction before model access and log access decisions.',
       brk:'Ask for another user’s data through natural language and tool calls.',
       artifact:'Data Leakage Test Matrix.',
       check:'Where is authorization enforced?',
       lens:'Privacy requirements must be mapped to data flows, not just policy documents.'}
    ],
    [
      'unit',
      '18.3',
      'Improper output handling',
      {goal:'Validate model output before passing it to downstream systems.',
       idea:'Generated text becomes dangerous when interpreted as trusted commands, SQL, HTML or business data.',
       prove:'Create a structured output and validate it against allowed values.',
       build:'Use allowlists and typed interfaces before execution.',
       brk:'Inject malicious strings into generated fields.',
       artifact:'Output Validation Checklist + tests.',
       check:'What downstream component could interpret the output?',
       lens:'Treat model output as untrusted input.'}
    ],
    [
      'unit',
      '18.4',
      'Excessive agency',
      {goal:'Limit the tools and actions available to autonomous systems.',
       idea:'More permissions increase blast radius.',
       prove:'Classify each tool by privilege and reversibility.',
       build:'Remove unnecessary tools and compare task success.',
       brk:'Try a task that requests an irreversible action.',
       artifact:'Agency Permission Matrix.',
       check:'What is the maximum damage if the model is wrong?',
       lens:'Autonomy should be bounded by business risk.'}
    ],
    [
      'unit',
      '18.5',
      'Retrieval authorization',
      {goal:'Enforce ACLs and tenant boundaries before evidence reaches generation.',
       idea:'Correct retrieval from the wrong tenant is a security breach.',
       prove:'Create two users and two document groups.',
       build:'Apply metadata filters server-side.',
       brk:'Attempt cross-tenant and stale-permission retrieval.',
       artifact:'ACL Retrieval Test Report.',
       check:'Can the model ever see evidence it is not authorized to access?',
       lens:'The model should not be asked to “remember” authorization rules as the only control.'}
    ],
    [
      'unit',
      '18.6',
      'Audit logging',
      {goal:'Capture enough evidence to reconstruct security-relevant actions.',
       idea:'An audit trail should show who, what, when, which policy, which tool, and what happened.',
       prove:'Design an audit record for a tool action.',
       build:'Write approval and execution events separately.',
       brk:'Modify a payload after approval and verify the mismatch is visible.',
       artifact:'Audit Log Schema + sample trail.',
       check:'Could an incident responder reconstruct the action?',
       lens:'Auditability is part of production readiness.'}
    ],
    [
      'unit',
      '18.7',
      'Governance and risk register',
      {goal:'Translate security and AI risks into owners, controls and evidence.',
       idea:'Governance becomes useful when each risk has a testable control and owner.',
       prove:'Create risk, impact, likelihood, control, owner, evidence and residual risk fields.',
       build:'Review the register with the capstone architecture.',
       brk:'Mark one control “policy only” and ask what evidence is missing.',
       artifact:'AI Risk Register.',
       check:'Which risks remain after controls?',
       lens:'A risk register is an operational artifact, not a compliance decoration.'}
    ],
    [
      'unit',
      '18.8',
      'Security release gate',
      {goal:'Turn red-team findings into release criteria.',
       idea:'Security tests must block release when the residual risk exceeds the agreed threshold.',
       prove:'Define mandatory checks for injection, leakage, authorization and unsafe actions.',
       build:'Run the test suite before and after a prompt/model change.',
       brk:'Create a change that improves quality but weakens security.',
       artifact:'Security Go/No-Go Checklist.',
       check:'What is an automatic blocker?',
       lens:'Security belongs in the same release process as quality and cost.'}
    ],
    ['q','I411'],
    ['h','Least privilege for agents'],
    ['key','Apply least privilege to agents. If an agent has a tool it never needs, an attacker can persuade it to use that tool.'],
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
    ['p','Next, Chapter 32 turns the technical system into a product specification.']
  ],
  capstone:{title:'An AI risk register with evidence',
   brief:'For each row, record the asset, threat, impact, likelihood, control, owner, test and remaining risk. Every row ends in a test, because a register that ends in controls is only a list of intentions.',
   steps:['List the assets: documents, credentials, tools, user data and traces.','For each, name the threats you have actually reproduced, not only ones you read about.','Record impact and likelihood on whatever scale your organisation uses.','Name the control and the owner: a person or role, not a team.','Name the test that proves the control, and run it.','Record the risk that remains after the control, honestly.','Write the go/no-go checklist for a customer-facing agent: identity, secrets, tool permissions, audit trails, data retention, provider policy and incident response.'],
   done:['Every listed threat has been reproduced at least once.','Every control has a test that has been run.','The remaining risk is stated explicitly.']}
},

/* --------------------------------------------------------------- 32 / bk 19 */
{
  id:'ch19pm', num:32, part:5, curriculumTier:'core', phase:5, prerequisites:['ch16e','ch6','ch20'], nextUnits:['ch20d','b7'], minutes:55, labs:['prdial'],
  title:'AI product management: specs for a probabilistic system',
  concept:'An AI feature cannot promise the same output every time, so its spec must describe how often it succeeds, on what test set, and what happens otherwise. You will write acceptance criteria as ranges, separate metric types, and design the interface states.',
  plan:{
    first:'Take "return the correct document" and convert it into an acceptance criterion you could actually test.',
    build:'Write a compact AI PRD: problem, baseline, scope, context, tools, failure modes, the human role, evaluation, safety, latency, cost, rollout and rollback.',
    brk:'Attack it with three scenarios — a wrong answer, an over-refusal, and a harmful action.',
    artifact:'An AI PRD, a release gate and a metric map.',
    gate:'An engineer can build from it and a leader can understand the trade-off it makes.'
  },
  needs:[
    ['Quality is a measured number against a test set','Chapter 29 built the gate this PRD refers to.',29],
    ['Failure costs differ by use case','From Chapter 6. Choosing which failure to accept is a product decision.',6],
    ['What the user sees when it is wrong','Chapter 20 designed the failure states.',20]
  ],
  words:[
    ["AI acceptance criterion","A metric, a named test set and a stated tolerance — because “always correct” is not something a probabilistic system can be held to."],
    ["Product metric","What the user achieved. Kept separate from system quality metrics and from operating cost, because mixing them makes a dashboard unable to answer anything."],
    ["Rollback trigger","The specific, observable condition that causes a change to be withdrawn, written so someone can act on it without you."],
    ["Non-goal","Something you have deliberately decided not to do, written down so it cannot be assumed back in later."]
  ],
  takeaway:[
    'Write an acceptance criterion as a rate with a tolerance, not a promise.',
    'Separate business outcomes, model metrics and operating metrics.',
    'Design the three interface states an AI feature needs.'
  ],
  story:[
    ['c','Before you start','Bring your release gate from Chapter 29 and the four interface states from Chapter 20.'],
    ['p','“It returns the right document” is a promise no probabilistic system can keep. Instead, write down how often it does, measured on which cases, and what the system does the rest of the time. The rest of the time is never zero.'],
    ['p','An everyday comparison: a railway cannot promise a train at exactly 9:04. So it publishes the share of trains that arrive within a few minutes of schedule, measured every month. You can plan around that number.'],
    ['key','For an AI feature, “done” means a measured success rate within a tolerance, not one fixed output.'],
    ['h','Hands-on units'],
    [
      'unit',
      '19.1',
      'AI problem framing',
      {goal:'Decide whether AI is justified and define the user outcome.',
       idea:'Start with the workflow and pain, not the model.',
       prove:'Write current process, user pain, baseline and measurable outcome.',
       build:'Build a non-AI baseline where possible.',
       brk:'Compare the AI idea with a deterministic alternative.',
       artifact:'Problem Framing One-Pager.',
       check:'Why AI instead of ordinary software?',
       lens:'This prevents “AI-first” solutioning.'}
    ],
    [
      'unit',
      '19.2',
      'AI acceptance criteria',
      {goal:'Convert vague “correctness” into measurable thresholds.',
       idea:'AI output is variable, so “done” must define distributions and tolerances.',
       prove:'Write retrieval, generation, safety, latency and cost criteria.',
       build:'Attach each criterion to a test set and measurement method.',
       brk:'Create a case where quality improves but latency violates the SLO.',
       artifact:'AI Acceptance Criteria Sheet.',
       check:'Can engineering run the test without asking what “good” means?',
       lens:'Acceptance criteria are the contract between product and engineering.'}
    ],
    [
      'unit',
      '19.3',
      'Failure-first UX',
      {goal:'Design around uncertainty, ambiguity and failure rather than hiding them.',
       idea:'A good AI UX makes the system’s limits understandable and actionable.',
       prove:'Design confident, uncertain and failed states.',
       build:'Add citations, clarification and fallback paths.',
       brk:'Remove citations/uncertainty cues and compare user interpretation.',
       artifact:'Failure-First UX Flow.',
       check:'What does the user do when the AI cannot answer?',
       lens:'The fallback is part of the feature, not an afterthought.'}
    ],
    [
      'unit',
      '19.4',
      'Human-in-the-loop UX',
      {goal:'Specify when a human reviews, approves, edits or overrides AI output.',
       idea:'Human involvement should be targeted at high-risk or ambiguous transitions.',
       prove:'Map decision points and approval payloads.',
       build:'Measure review time and override rate.',
       brk:'Create an approval that no longer matches the action.',
       artifact:'HITL Decision Map.',
       check:'What does the human uniquely contribute?',
       lens:'HITL should reduce risk without becoming meaningless rubber-stamping.'}
    ],
    [
      'unit',
      '19.5',
      'Metrics and experimentation',
      {goal:'Separate business outcomes from model and operational metrics.',
       idea:'Task completion is not the same as groundedness, and both differ from cost.',
       prove:'Create a metric tree with business, quality, safety, latency and cost layers.',
       build:'Define an A/B or controlled comparison where appropriate.',
       brk:'Improve a model metric while worsening the business outcome.',
       artifact:'Metric Map + Experiment Plan.',
       check:'Which metric decides whether the product is useful?',
       lens:'A PM must prevent teams from optimizing a proxy.'}
    ],
    [
      'unit',
      '19.6',
      'Unit economics',
      {goal:'Model token, retrieval, tool, infrastructure and human-review costs.',
       idea:'The real unit is often cost per successful task, not cost per request.',
       prove:'Create a spreadsheet with volume, token usage, model cost, retries, tools and review time.',
       build:'Compare model routing and caching scenarios.',
       brk:'Increase context or retry rate and see the margin effect.',
       artifact:'AI Unit Economics Model.',
       check:'What happens at 10× volume?',
       lens:'Cost belongs in architecture decisions from day one.'}
    ],
    [
      'unit',
      '19.7',
      'AI PRD and release plan',
      {goal:'Write a PRD an engineer can implement and a leader can evaluate.',
       idea:'An AI PRD must specify context, failure behavior, evaluation and operating constraints.',
       prove:'Complete problem, scope, inputs, context, tools, model behavior, failures, human role, metrics, safety, latency, cost, rollout and rollback.',
       build:'Run a review against the system you built.',
       brk:'Ask a reviewer to find a failure your PRD did not specify.',
       artifact:'AI PRD + Release Gate + Metric Map.',
       check:'Can the PRD answer “what happens when it is wrong?”',
       lens:'This becomes one of your strongest portfolio artifacts.'}
    ],
    ['q','I412'],
    ['h','A spec outline'],
    ['p','Here is an outline you can copy. Each line is a question someone will ask you later, and it is cheaper to answer it now:'],
    [
      'n',
      ['The user’s problem, and how it is handled today without AI.','Why AI is the right answer to it — and what is explicitly out of scope.','What goes in: the inputs, the context, the tools it may call.','How it fails, and what a person does when it does.','The test set, and the scores that count as good enough.','Safety limits, the speed it must hold, the cost it must stay under.','How it rolls out, what you watch afterwards, and what triggers pulling it back.','Whose name is on it.']
    ],
    ['h','Keep metric types separate'],
    ['key','Keep the metric types apart. Task completion rate is a product outcome. Groundedness is a system quality metric. Token cost is an operating metric. Complaint rate is a user signal. A dashboard that mixes them cannot answer any question clearly.'],
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
    ['p','Next, Chapter 33 turns the product into a production architecture and delivery plan.']
  ],
  capstone:{title:'An AI PRD for a policy assistant',
   brief:'Write two pages. An engineer should be able to build from it, and a leader should be able to see the trade-off being made and agree to it on purpose.',
   steps:['State the user problem, and the non-AI baseline it has to beat.','Define the scope and, explicitly, what is out of scope.','Specify the context, the tools and the human role in the loop.','List the failures you have actually seen in this course.','Name the evaluation dataset and write a five-line evaluation plan.','Set quality bars, safety limits, response-time targets and cost goals.','Write the rollout plan and a one-line rollback trigger.','Name the owner.'],
   done:['Every quality claim is a number against a named test set.','What is out of scope is written down.','Someone could act on the rollback trigger without you.']}
},

/* --------------------------------------------------------------- 33 / bk 20 */
{
  id:'ch20d', num:33, part:5, curriculumTier:'core', phase:5, prerequisites:['ch185','ch17o','ch16e'], nextUnits:['ch21cap','b7'], minutes:55, labs:['costmodel'],
  title:'Production architecture, delivery and vendor strategy',
  concept:'A prototype runs because you are the only user and you forgive its failures. Production removes both. You will list what a prototype is missing, treat response time as a budget across stages, and score vendors on more than price and quality.',
  plan:{
    first:'Write the production delta for your prototype from memory, before looking anything up.',
    build:'Add architecture decisions, environments, CI/CD, responsibilities, SLOs, security, rollback and vendor exit thinking.',
    brk:'Model three shocks — a provider outage, ten times the traffic, and a doubling of token price.',
    artifact:'A technical decision pack: architecture, alternatives, evaluation, security, cost and rollout.',
    gate:'Defend build-versus-buy and your provider choice with weighted criteria rather than preference.'
  },
  needs:[
    ['Build or buy is a decision with criteria','Chapter 18.5 introduced it. Here the criteria get weights.',18.5],
    ['Cost per task can be measured','Chapter 30 recorded it.',30],
    ['A release gate decides what ships','From Chapter 29.',29]
  ],
  words:[
    ["Production delta","The list of everything a working prototype does not yet have: auth, limits, retries, persistence, monitoring, secrets, backups, deployment, rollback."],
    ["Latency budget","The total time a user will wait, divided across the stages that consume it."],
    ["Architecture decision record","A short note saying what was decided, what the alternatives were, and why — written when the decision is made, not reconstructed afterwards."],
    ["Exit cost","What it would take to leave a provider. Usually the least examined column in a vendor comparison and the one you live inside longest."]
  ],
  takeaway:[
    'List what a prototype is missing before it can go to production.',
    'Treat response time as a budget spent across a chain of stages.',
    'Score providers on more criteria than price and quality.'
  ],
  story:[
    ['c','Before you start','Bring your cost measurements from Chapter 30 and your release gate from Chapter 29.'],
    ['p','Everything you have built so far works because you are the only user and you forgive it. Production removes both. This chapter lists what that costs.'],
    ['p','An everyday comparison: a dish you cook well for two people is not a restaurant menu item. The recipe stays the same. You also need reliable supplies, a price that works, other cooks who can make it, and a plan for the night four hundred people order it.'],
    ['h','Hands-on units'],
    [
      'unit',
      '20.1',
      'Production delta',
      {goal:'Inventory everything missing between notebook and service.',
       idea:'Production adds identity, persistence, retries, queues, monitoring, secrets, deployment, backups, ACLs and rollback.',
       prove:'Write a production delta list from your prototype.',
       build:'Group items by must-have, should-have and later.',
       brk:'Remove one control and describe the resulting failure.',
       artifact:'Production Delta Checklist.',
       check:'What would prevent you from going live tomorrow?',
       lens:'This is the bridge between PM delivery and engineering reality.'}
    ],
    [
      'unit',
      '20.2',
      'Reliability and resilience',
      {goal:'Design for provider errors, dependency failures, retries and graceful degradation.',
       idea:'AI systems depend on services outside your control.',
       prove:'Create failure scenarios for model, retrieval, tool and network.',
       build:'Define timeout, retry, fallback and user-visible behavior.',
       brk:'Simulate provider outage and rate limiting.',
       artifact:'Reliability/Fallback Matrix.',
       check:'What is the user experience during partial failure?',
       lens:'A graceful degraded mode can be more valuable than a larger model.'}
    ],
    [
      'unit',
      '20.3',
      'Scalability and queues',
      {goal:'Understand synchronous versus asynchronous work and scaling bottlenecks.',
       idea:'Not every AI task belongs in the request/response path.',
       prove:'Map a long-running document ingestion job.',
       build:'Separate upload, processing, indexing and status reporting.',
       brk:'Simulate 10× workload and identify the bottleneck.',
       artifact:'Scalability Sketch + Capacity Assumptions.',
       check:'Which component scales first and why?',
       lens:'Capacity planning should include model limits and external quotas.'}
    ],
    [
      'unit',
      '20.4',
      'Deployment and environments',
      {goal:'Separate development, staging and production with controlled configuration.',
       idea:'A production AI system needs reproducible configuration and safe rollout.',
       prove:'Define environment variables, model versions, prompts and index versions per environment.',
       build:'Create a deployment checklist and rollback command/process.',
       brk:'Deploy a deliberately bad prompt to staging and verify production remains unchanged.',
       artifact:'Environment Strategy + Rollout Checklist.',
       check:'What can change without a code deployment?',
       lens:'Configuration is part of the system and must be versioned.'}
    ],
    [
      'unit',
      '20.5',
      'CI/CD and AI regression',
      {goal:'Combine software tests with evaluation gates.',
       idea:'A green build is not enough if the model behavior regressed.',
       prove:'Add deterministic tests plus the golden evaluation suite to CI.',
       build:'Define blocking thresholds.',
       brk:'Change model/prompt/index and verify CI detects the regression.',
       artifact:'AI CI/CD Pipeline Spec.',
       check:'What evidence is required before release?',
       lens:'This is how probabilistic systems become manageable delivery units.'}
    ],
    [
      'unit',
      '20.6',
      'Architecture Decision Records',
      {goal:'Record alternatives, decision, evidence, consequences and revisit triggers.',
       idea:'Treat architecture decisions as hypotheses with trade-offs, and record when to revisit them.',
       prove:'Write ADRs for model, retrieval strategy, workflow/agent and storage.',
       build:'Include rejected alternatives and evidence.',
       brk:'Create a new requirement that invalidates one decision.',
       artifact:'ADR Set.',
       check:'What would cause you to revisit the decision?',
       lens:'ADRs protect institutional memory and make technical PM reasoning visible.'}
    ],
    [
      'unit',
      '20.7',
      'Vendor and TCO strategy',
      {goal:'Evaluate provider/model choices across quality, cost, region, data controls, tooling and exit cost.',
       idea:'Vendor choice is a multi-objective architecture decision.',
       prove:'Score at least three realistic options or two providers plus a self-hosted hypothesis.',
       build:'Estimate migration and exit cost.',
       brk:'Model a 2× price change or capability removal.',
       artifact:'Model/Vendor Scorecard + Exit Plan.',
       check:'What is the cost of switching?',
       lens:'Vendor lock-in is an economic and architectural risk.'}
    ],
    [
      'unit',
      '20.8',
      'Technical decision pack',
      {goal:'Package the whole system for a design review.',
       idea:'A strong PM-engineer artifact lets different audiences inspect the same evidence at different depths.',
       prove:'Create problem, baseline, architecture, alternatives, evaluation, security, cost, rollout and risks.',
       build:'Add one architecture diagram and one decision table.',
       brk:'Ask a reviewer to challenge three assumptions.',
       artifact:'10-slide Technical Decision Pack.',
       check:'Can you defend every major box and arrow?',
       lens:'This is the portfolio bridge to real AI technical PM interviews.'}
    ],
    ['h','Response time is a budget'],
    ['key','Response time is spent across the whole chain: retrieval, reranking, tool calls, model reasoning and final generation. The largest share is rarely in the stage people optimise first.'],
    ['q','I413'],
    [
      'tb',
      ['Layer','Typical responsibility','The question to ask about it'],
      [
        ['Client and UI','User interaction','What uncertainty or approval must the user see?'],
        ['Orchestrator','State and routing','Where would determinism be safer?'],
        ['Model layer','Reasoning and generation','What evidence supports this model choice?'],
        ['Knowledge and tools','Data and actions','Who can access what, and how is it audited?'],
        ['Evaluation','Quality gates','What blocks a release?'],
        ['Observability','Runtime evidence','How would we know it had degraded?'],
        ['Platform','Deploy, scale, secure','How does this survive traffic and failure?']
      ]
    ],
    ['h','Choosing a vendor'],
    ['key','Choosing a vendor means weighing quality, data controls, response time, cost, region, tooling, interoperability, support and exit cost. A provider that wins on quality and data controls but has a very high exit cost can lock you in for years.'],
    ['p','Teams that ship AI well tend to keep four simple habits:'],
    [
      'l',
      ['<strong>Write down why you chose things</strong>, so nobody reopens the decision in six months.','<strong>Have a safe place to try changes</strong> before real users see them.','<strong>Be able to switch it off</strong> quickly, without a meeting.','<strong>Know what you would do</strong> if the provider changed its terms tomorrow.']
    ],
    [
      'try',
      {id:'ch33-reprice',
       mins:6,
       min:60,
       rows:4,
       task:'Your provider doubles its price with ninety days’ notice. Write what you would do in the first week.',
       ph:'Day 1 … by the end of the week …',
       after:'If your plan needs an evaluation you do not have, then the evaluation set is your exit plan. That is usually the main finding.'}
    ],
    ['h','Summary'],
    ['p','Next, Chapter 34 brings the whole system together in one capstone project.']
  ],
  capstone:{title:'A ten-slide technical decision pack',
   brief:'Cover the problem, baseline, proposed architecture, alternatives, evaluation, security, cost, rollout, risks and decision. Draft it from memory first, then check it. The parts you cannot produce from memory are the parts you do not yet understand.',
   steps:['State the problem and the baseline it must beat.','Draw the proposed architecture on one slide.','Show two alternatives you rejected, and why.','Add the evaluation results, with the test set named.','Summarise the security position and the remaining risks.','Give the cost per task and the cost at expected volume.','Give the rollout plan and the rollback trigger.','Score three providers against nine weighted criteria.','End with the decision and who owns it.'],
   done:['Each rejected alternative was a real option with a reason to consider it.','The provider scorecard includes the cost of leaving.','Someone else could present the pack from the slides alone.']}
},

/* --------------------------------------------------------------- 34 / bk 21 */
{
  id:'ch21cap', num:34, part:5, curriculumTier:'core', phase:6, prerequisites:['ch20d','ch18s'], nextUnits:['b8'], minutes:90, labs:['redmap'],
  title:'Capstone: build, break, measure and defend a system',
  concept:'Build one coherent applied AI system, not a folder of demos. Break it on purpose, measure the fixes, and write a findings document that shows what happened when you tested it.',
  plan:{
    first:'Do not start with slides. Create the repository, the issue list, the evaluation dataset and the smallest vertical slice that works end to end.',
    build:'Expand it into one Applied AI operations or policy copilot: permission-aware retrieval, structured outputs, two tools, a bounded agent step, one non-text input, an evaluation harness, tracing and cost instrumentation, and security controls.',
    brk:'Reproduce at least ten failure classes: unanswerable query, poisoned document, prompt injection, unauthorised tool request, malformed tool call, stale permission, multilingual query, poor scan or audio, a model swap, and a traffic or cost increase.',
    artifact:'The running system plus an evidence pack: PRD, architecture, threat model, evaluation plan, dashboard, rollout and rollback plan, vendor scorecard and an executive explanation.',
    gate:'Show three failures you found yourself, three quantified improvements, the residual risks, and your explicit non-goals.'
  },
  needs:[
    ['Everything in Part V','The capstone combines all of it.',33],
    ['A release gate and a risk register','Chapters 29 and 31 produce the evidence you defend with.',31]
  ],
  words:[
    ["Findings document","A rough, factual record of what broke, the evidence, the root cause, the fix, and what you deliberately did not solve. The opposite of a brochure."],
    ["Failure class","A kind of failure rather than an instance of one — what makes ten tests meaningful instead of ten anecdotes."],
    ["Residual risk","What remains after a control is in place, stated rather than implied."],
    ["Evidence pack","The set of artifacts that let somebody else check your claims instead of trusting them."]
  ],
  takeaway:[
    'Explain a system you built from first principles, without relying on a framework to explain it for you.',
    'Show before-and-after numbers for failures you found and fixed.',
    'State what you deliberately did not solve.'
  ],
  story:[
    ['c','Before you start','Collect every artifact from Part V: the harness, model selection card, context budget, retrieval architecture, tool policy, release gate, dashboard, risk register, PRD and decision pack.'],
    ['p','Your credential from this course is a system you can explain without relying on anyone’s framework, and an honest page about what broke when you tested it. Employers ask what you can build, and then what goes wrong and what you do about it.'],
    ['c','The brief','Build one applied AI system that combines at least four capabilities from Part V. A recommended baseline: permission-aware retrieval, tool calling, a bounded agent step, evaluation, tracing and security tests. Build one coherent system, not a set of separate demos.'],
    ['lab','redmap'],
    ['h','What each stage needs'],
    [
      'tb',
      ['Stage','Required evidence'],
      [
        ['Problem','User, pain, baseline, measurable outcome'],
        ['Architecture','Diagram, decision log, trust boundaries'],
        ['Build','Working code, tests, versioned prompts and config'],
        ['Break','At least ten deliberate failure tests'],
        ['Measure','Evaluation dataset, metrics, cost and latency'],
        ['Secure','Threat model, controls, red-team results'],
        ['Operate','Trace schema, dashboard, rollback plan'],
        ['Productize','PRD, rollout, owner, ROI hypothesis'],
        ['Explain','Five-minute executive explanation, twenty-minute technical defence']
      ]
    ],
    ['key','A portfolio project is credible when you can explain its failures. Anyone can show a system that works on the demo path.'],
    ['h','Hands-on units'],
    [
      'unit',
      '21.1',
      'Define the problem and PRD',
      {goal:'Select one enterprise use case and make the acceptance criteria measurable.',
       idea:'A capstone becomes credible when the problem and failure cost are clear.',
       prove:'Choose: enterprise policy/compliance intelligence, developer productivity workflow, or controlled customer operations workflow.',
       build:'Write user, pain, baseline, scope, non-goals, data, tools, risks and metrics.',
       brk:'Challenge the idea with “why not deterministic software?”',
       artifact:'Capstone AI PRD.',
       check:'Can you state the business outcome in one sentence?',
       lens:'This is the product anchor.'}
    ],
    [
      'unit',
      '21.2',
      'Build the vertical slice',
      {goal:'Create the smallest end-to-end working system before adding sophistication.',
       idea:'A vertical slice proves architecture across boundaries.',
       prove:'Implement input → retrieval/context → model → structured answer → citation.',
       build:'Add one tool only when needed.',
       brk:'Use an unanswerable query and record the baseline failure.',
       artifact:'Running repository + architecture v1.',
       check:'Can you run the system from a clean environment?',
       lens:'A working small system beats a large diagram.'}
    ],
    [
      'unit',
      '21.3',
      'Add evaluation and observability',
      {goal:'Turn the capstone into a measurable system.',
       idea:'Every change should leave evidence.',
       prove:'Create 30–50 evaluation cases and traces.',
       build:'Add retrieval, answer, tool, safety, latency and cost measurements.',
       brk:'Run a model/prompt/index change and reproduce the regression.',
       artifact:'Golden dataset, evaluation harness and observability report.',
       check:'Can you explain why the latest version is better?',
       lens:'This is where the project becomes engineering evidence.'}
    ],
    [
      'unit',
      '21.4',
      'Break it deliberately',
      {goal:'Reproduce at least ten failure classes.',
       idea:'A portfolio project is more credible when you can explain what broke.',
       prove:'Test unanswerable query, poisoned document, prompt injection, unauthorized tool, malformed tool call, stale permission, multilingual input, poor scan/audio, model swap and traffic/cost increase.',
       build:'For each, capture evidence, root cause and control.',
       brk:'Do not fix immediately; first preserve the failure.',
       artifact:'Security/red-team report + failure findings table.',
       check:'Which three failures surprised you?',
       lens:'Your failure log is often more valuable than your happy-path demo.'}
    ],
    [
      'unit',
      '21.5',
      'Optimize and quantify',
      {goal:'Apply targeted fixes and measure before/after.',
       idea:'Optimization is meaningful only when the delta is visible.',
       prove:'Try reranking, prompt restructuring, schema validation, caching, routing or context reduction where justified.',
       build:'Change one variable at a time and rerun the relevant eval slice.',
       brk:'Keep a fix that improves one metric but worsens another and document the trade-off.',
       artifact:'Before/After Optimization Report + ADRs.',
       check:'Which improvement is statistically or operationally meaningful for your sample?',
       lens:'Avoid “optimization theater.”'}
    ],
    [
      'unit',
      '21.6',
      'Defend the system',
      {goal:'Present the architecture, evidence, security, cost and residual risk to two audiences.',
       idea:'The final skill is explaining and defending the system you built.',
       prove:'Prepare a five-minute executive briefing and twenty-minute technical defense.',
       build:'Include three failures, three quantified improvements, residual risks and explicit non-goals.',
       brk:'Have a peer challenge your model choice, agent choice, security and cost assumptions.',
       artifact:'Final repository, architecture, PRD, risk register, evaluation pack, observability dashboard, vendor scorecard and executive deck.',
       check:'Can you explain every major decision without saying “the framework handles it”?',
       lens:'This is the credential you carry into interviews and design reviews.'}
    ],
    ['q','I414'],
    ['h','When you are done'],
    ['p','You are done when all of these are true:'],
    [
      'l',
      ['It runs on a machine that is not yours.','Anyone can rerun the tests and get the same numbers.','You have broken it in at least three real ways, on purpose.','Three of your fixes have before and after numbers.','You attacked your own safeguards and recorded what happened.','You know how to roll it back if something goes wrong.','You can explain every major choice without saying “the framework handles that”.']
    ],
    ['h','Final self-test'],
    ['p','Answer these from memory:'],
    [
      'l',
      ['Why is the model stateless?','Why can retrieval fail, and why do embeddings help?','Why does retrieval never say “nothing here” on its own?','Why is top-k a trade-off?','When does a workflow beat an agent?','Why are tools a security boundary?','Why must evaluation come before release, and why does tracing matter?','How do you calculate cost per task?','What makes an AI specification different from a normal one?']
    ],
    ['p','After this chapter, Track B takes the system to real users, a real price and a real job. The appendices turn your artifacts into reusable portfolio templates.']
  ],
  capstone:{title:'Applied AI findings: what I built, what broke and what the evidence shows',
   brief:'This single document carries everything from the course. Keep it plain and factual. A findings document that reads like a brochure is not doing its job.',
   steps:['Ship the repository with a README that works on a clean machine.','Include the architecture diagram and the decision log.','Include 30 to 50 evaluation cases and their results.','Include the retrieval and end-to-end numbers, before and after your fixes.','Include the security attack results and sample traces.','Include cost and response-time measurements at expected volume.','Include the PRD, the risk register, the vendor scorecard, and the rollout and rollback plan.','End with the remaining risks and what is explicitly out of scope.'],
   done:['Three failures you found yourself, each with evidence.','Three fixes with before and after numbers.','A five-minute explanation a non-technical leader could repeat.']}
}

];

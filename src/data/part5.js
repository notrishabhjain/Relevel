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
  id:'ch8f', num:21, part:5, minutes:60, labs:[],
  title:'The engineer\u2019s floor',
  concept:'Book chapter 8. Enough software depth to be dangerous \u2014 not to become a backend engineer again, but so that JSON, HTTP, secrets, tests and logs stop feeling foreign when you are interrogating someone else\u2019s architecture.',
  plan:{
    first:'Open a notebook and write a Python program that reads JSON, calls an HTTP endpoint, handles a failure status and writes JSON back out \u2014 before you read a word below.',
    build:'Turn it into an experiment harness that records id, timestamp, model, prompt, response, latency, usage and errors.',
    brk:'Feed it malformed JSON, a missing field, a timeout, and a 429 and a 500. Watch which ones it survives.',
    artifact:'A Git repository holding the harness and its tests.',
    gate:'Trace one failure from the input that caused it all the way to the error it produced.'
  },
  needs:[
    ['An API call is a request and a reply','You have been making them since chapter 1; this chapter looks at the plumbing around them.',1],
    ['You pay for everything you send','Which is why a harness that records usage is worth building once.',1]
  ],
  words:[
    ["Contract","An assumption your code makes about the shape of data it receives — that a field exists, that it is a number, that a list is not empty. Every one of them is a thing that will eventually be wrong."],
    ["Status code","The number a server sends back to say what happened: 200 worked, 4xx you got it wrong, 5xx the server did."],
    ["Stack trace","The list of calls that were in progress when something failed, innermost first. It tells you where, not why."],
    ["Experiment harness","A small tool that records every run identically — request, response, latency, usage, error — so two runs can actually be compared."]
  ],
  takeaway:[
    'Read a request, a response, a status code and a stack trace without flinching.',
    'Explain why an AI system is a software system with a probabilistic component, not a magic box.',
    'Name where the engineering risk actually lives in an AI feature.'
  ],
  story:[
    ['p','Think about ordering food on an app. You tap a button, and somewhere a message goes to a restaurant, comes back with a price, and your screen updates. None of that is mysterious once somebody shows you the messages going back and forth \u2014 it only feels mysterious while it is hidden.'],
    ['p','AI features are the same. You have spent twenty chapters looking at the model. This chapter looks at the ordinary plumbing around it, so that when an engineer shows you a system diagram you see parts you recognise instead of fog.'],
    ['c','Why this comes first','Applied AI work expects hands-on contact with APIs, Python, cloud services, retrieval, evaluation and production systems. You cannot challenge an architecture if JSON, HTTP, environment variables, tests and logs still feel like someone else\u2019s language. This is the floor, not the ceiling.'],
    ['key','An AI system is a software system with a probabilistic component. Everything you already know about software going wrong still applies \u2014 and now there is one more thing that can go wrong, quietly, without raising an error.'],
    
    ['unit',"8.1","Python as an experiment instrument",{
      goal:"Write small Python programs, functions, lists, dictionaries and loops well enough to modify experiments without depending on generated code.",
      idea:"Python is the lab notebook of applied AI: the value is not language mastery but the ability to express an experiment precisely.",
      prove:"Create variables, a function, a loop and a dictionary; print each intermediate result.",
      build:"Build a script that reads ten questions from a list and records a result object for each question.",
      brk:"Intentionally pass a missing key, empty list and wrong type. Observe the errors.",
      artifact:"A <code>chapter-8/python-basics.py</code> file plus a one-page error log.",
      check:"Can you explain a function, dictionary, loop and exception without opening documentation?",
      lens:"Use your own code for the harness before introducing a framework."
    }],
    ['unit',"8.2","HTTP, JSON and API contracts",{
      goal:"Understand request/response, status codes, headers, JSON payloads and contract failures.",
      idea:"An AI API is still an API. The model is probabilistic, but the network interface is software engineering.",
      prove:"Call a safe public JSON endpoint and print status code plus two fields.",
      build:"Build a fake endpoint response with missing and unexpected fields and handle both.",
      brk:"Simulate 401, 404, 429 and 500 cases and decide which are retryable.",
      artifact:"An API contract sheet listing request, response, errors and retry policy.",
      check:"What is the difference between a bad request, unavailable dependency and server failure?",
      lens:"This is the vocabulary you need to challenge “the API failed” as a complete explanation."
    }],
    ['unit',"8.3","Environments, secrets and Git",{
      goal:"Use environment variables/secrets, virtual environments and basic Git workflow.",
      idea:"A working prototype that leaks a key or cannot be reproduced is not a credible engineering artifact.",
      prove:"Store a secret outside source code and print only a masked prefix.",
      build:"Create a repository with README, requirements and a repeatable run command.",
      brk:"Commit a deliberately broken change, identify it, and revert to the previous working version.",
      artifact:"Reproducible repo skeleton with <code>.gitignore</code>, README and experiment log.",
      check:"Could another person run your experiment without asking what you did manually?",
      lens:"Reproducibility is a PM concern because it turns a demo into evidence."
    }],
    ['unit',"8.4","Errors, logging and tests",{
      goal:"Read stack traces, add structured logs and write small tests.",
      idea:"An AI system is judged by what happens when things go wrong, not only by the happy path.",
      prove:"Create three tests: expected answer, missing input, malformed response.",
      build:"Add request ID, timestamp, model and status to each experiment record.",
      brk:"Force a timeout and malformed output; trace the failure from input to exception.",
      artifact:"Mini test suite plus failure log with root cause and fix.",
      check:"Can you distinguish an application bug from a provider/model failure?",
      lens:"This becomes the base for evaluation and observability later."
    }],
    ['unit',"8.5","Build the experiment harness",{
      goal:"Create a reusable runner that records inputs, outputs, configuration, latency and errors.",
      idea:"The harness is the bridge from “I tried it” to “I measured it.”",
      prove:"Run one prompt twice and save both runs as structured JSON.",
      build:"Add experiment name, version, model, prompt version, input/output tokens when available, latency and notes.",
      brk:"Change one variable and verify the logs make the comparison obvious.",
      artifact:"<code>experiment_runner/</code> with schema, runner, sample runs and README.",
      check:"Can you reproduce yesterday’s result and explain what changed?",
      lens:"Every later chapter should plug into this harness instead of inventing a new way to record evidence."
    }],
    ['q','I401'],
    ['p','The second reflex is about what happens when the shape is not what you expected. An AI application is assembled out of contracts \u2014 this field will be here, it will be a number, the list will not be empty \u2014 and every one of those is an assumption that will eventually be wrong in production.'],
    ['key','Production systems need to detect contract failures rather than silently continue. Most of the AI incidents you will actually meet look like this: nothing threw, and the answer was built on nothing.'],
    ['p','So what is “enough”? Not much, and it is a fixed list rather than an endless one. You have the floor when none of these makes you want to leave the room:'],
    ['l',['Writing a small function, and keeping a few labelled values together in one place.',
      '<strong>Status codes</strong> — 200 worked, 4xx you asked wrong, 5xx their end broke.',
      '<strong>JSON</strong> — labels and values, the format almost every system talks in.',
      'Keeping a password or key out of your code, in a setting instead.',
      'Saving your work in Git so you can go back to yesterday\u2019s version.',
      'Reading an error message from the bottom up, where the real cause usually sits.',
      'Writing a test that fails on purpose, so you know it is actually checking something.']],
    ['p','That is the list. Two more ideas — jobs that run in the background, and queues that hold work until something is free to do it — you only need as ideas, not as code.'],
    ['try',{id:'ch21-guess',mins:6,min:60,rows:4,task:'Take the last AI feature you were shown a demo of. Write down, in plain words, what its request probably contained and what its response probably looked like. Where are you guessing?',after:'The places you had to guess are the questions to ask the team that built it. That list is the whole skill this chapter teaches.'}],
    ['key','Explain it upward: a model API call is a normal software dependency. The engineering risk lives in interfaces, failure handling, secrets, retries, observability and contracts \u2014 at least as much as it lives in the model.'],
    ['key',"The next lesson reuses the artifact you just created."]
  ],
  capstone:{
    title:'The experiment harness, in version control',
    brief:'Every later chapter in this track asks you to run something and compare it against something else. Doing that from scratch each time is how comparisons quietly stop being comparable. Build the harness once, put it in Git, and spend the rest of the track adding to it.',
    steps:[
      'Write a 20-line utility that reads JSON from a file and filters rows by one field.',
      'Add three unit tests: the happy path, a missing field, and empty input.',
      'Wrap your AI request recorder around it so every run lands as a JSON record.',
      'Create a Git repository, commit the harness, and write a README that says how to run it from a clean machine.',
      'Deliberately break one thing \u2014 a bad key, a timeout, a malformed response \u2014 and confirm the record still gets written with the error in it.'
    ],
    done:[
      'A repository that a stranger could clone and run.',
      'Three passing tests, one of which covers a failure.',
      'One saved record produced by a run that failed.'
    ]
  }
},

/* ---------------------------------------------------------------- 22 / bk 9 */
{
  id:'ch9m', num:22, part:5, minutes:55, labs:['costmodel'],
  title:'Model literacy, and choosing one on evidence',
  concept:'Book chapter 9. What actually changes when you change the model \u2014 and how to recommend one from measurement rather than reputation.',
  plan:{
    first:'Pick two models available to you and write down, before testing, which one you expect to win on quality, on speed, and on cost.',
    build:'Run a ten-case benchmark covering factual recall, reasoning, extraction, multilingual and refusal behaviour.',
    brk:'Change one variable at a time \u2014 model, sampling, prompt \u2014 and work out which change actually caused what.',
    artifact:'A Model Selection Card: quality, latency, cost, and the fallback when your first choice is unavailable.',
    gate:'Recommend a model from evidence, and defend it against someone who prefers a different one.'
  },
  needs:[
    ['Temperature is a variety dial','You proved it at chapter 2; here it becomes one variable among several.',2],
    ['Ground truth comes before measurement','No answer key, no benchmark.',6],
    ['An experiment harness that records runs','You built it last chapter and this is the first chapter that needs it.',21]
  ],
  words:[
    ["Inference","Running a trained model to get an answer. Distinct from training, which is the process that produced the model in the first place — and it is inference you pay for, per request, forever."],
    ["Sampling","How the next word-piece gets picked from the several the model thinks plausible. Temperature is one control over it."],
    ["Benchmark","A fixed set of cases run against more than one option so the comparison means something. Somebody else’s benchmark predicts your task only by coincidence."],
    ["Model selection card","One page recording which model you chose, on what evidence, under which constraint, and what runs instead when it is unavailable."]
  ],
  takeaway:[
    'Explain what changes when the model changes, beyond a benchmark score.',
    'State when retrieval, prompting and fine-tuning are each the right answer.',
    'Produce a model recommendation that survives the question "measured how?"'
  ],
  story:[
    ['p','Nobody buys a car because it won a magazine award. You want to know whether it fits your family, survives your roads, and what it costs to run for a year. You would test-drive it.'],
    ['p','Models are the same, and almost nobody test-drives them. A leaderboard tells you how a model did on somebody else\u2019s task. This chapter is about getting your own numbers, on your own questions, in one afternoon — which turns out to be enough.'],
    ['key','Models differ along several axes at once: capability, latency, context size, tool-use behaviour and cost. A model that wins on one can lose badly on another, and which axis matters is a property of your use case, not of the model.'],
    
    ['unit',"9.1","What an LLM is doing at inference",{
      goal:"Explain tokens, transformer-based context processing, generation and the difference between training and inference.",
      idea:"Inference is the execution phase: the model receives context and generates output; training changes the model parameters.",
      prove:"Compare two prompts with different context lengths and record input/output token counts and latency.",
      build:"Create a tiny table of context length versus observed latency/cost.",
      brk:"Add irrelevant context and see whether cost, latency or answer quality changes.",
      artifact:"Inference observation sheet.",
      check:"Why is a larger prompt not automatically a better prompt?",
      lens:"Ask engineers where the cost and latency are actually coming from before debating model brand."
    }],
    ['unit',"9.2","Sampling and output variability",{
      goal:"Understand sampling controls as probability-distribution controls rather than “creativity sliders.”",
      idea:"Lower sampling generally reduces variation; it does not turn a model into a guaranteed deterministic or factual system.",
      prove:"Run the same prompt multiple times under two sampling configurations supported by your provider.",
      build:"Count distinct outputs and note qualitative differences.",
      brk:"Use a factual task and a creative task; compare whether variability matters equally.",
      artifact:"Sampling experiment table with raw outputs.",
      check:"What changed: factuality, diversity, or merely variation?",
      lens:"Do not promise “temperature zero means always identical.” Measure the actual provider behavior."
    }],
    ['unit',"9.3","Model tiers and routing",{
      goal:"Understand why smaller, faster, cheaper models may be appropriate for some tasks and larger models for others.",
      idea:"Model selection is an optimization problem across quality, latency, cost, context, tool reliability and operational constraints.",
      prove:"Create a 10-case benchmark spanning extraction, reasoning, multilingual and refusal tasks.",
      build:"Run two available models or model configurations through the same cases.",
      brk:"Route easy cases to the cheaper model and hard cases to the stronger model; compare cost and quality.",
      artifact:"Model Selection Card.",
      check:"Which acceptance metric justified the choice?",
      lens:"The “best model” is undefined until the task, quality bar and cost ceiling are defined."
    }],
    ['unit',"9.4","Reasoning, context and fine-tuning boundaries",{
      goal:"Distinguish prompting, context/RAG and fine-tuning as different levers.",
      idea:"Use context when the system needs changing knowledge; prompting for instruction/behavior; fine-tuning when repeated stable behavior is worth encoding in weights.",
      prove:"Take one task and write three proposed solutions: prompt-only, retrieval/context, fine-tune hypothesis.",
      build:"Identify the data, expected benefit, maintenance cost and evaluation needed for each.",
      brk:"Invent a case where fine-tuning looks attractive but retrieval is cheaper because knowledge changes weekly.",
      artifact:"Decision matrix: Prompt vs Context/RAG vs Fine-tune.",
      check:"Is the gap knowledge, behavior, or both?",
      lens:"This prevents architecture discussions from collapsing into “let’s fine-tune it.”"
    }],
    ['unit',"9.5","Benchmarking without fooling yourself",{
      goal:"Learn why small demos can produce misleading conclusions and how to design a balanced task set.",
      idea:"A benchmark is a measurement instrument; biased cases produce biased decisions.",
      prove:"Create categories, sample cases and expected outputs before testing.",
      build:"Run blind or consistently ordered comparisons where practical.",
      brk:"Add adversarial, ambiguous and no-answer cases and see whether the ranking changes.",
      artifact:"10–30 case model benchmark with category breakdown.",
      check:"Would your benchmark detect the failure you care about most?",
      lens:"A PM should challenge the test set before challenging the score."
    }],
    ['unit',"9.6","Model Selection Card",{
      goal:"Turn the evidence into a decision artifact engineers and stakeholders can review.",
      idea:"The card records constraints, evidence, fallback and unresolved risks in one place.",
      prove:"Fill task, quality target, data sensitivity, latency target and cost ceiling.",
      build:"Add model options, benchmark evidence and fallback strategy.",
      brk:"Remove the benchmark results and try to make the decision; note how much becomes opinion.",
      artifact:"Versioned Model Selection Card.",
      check:"Can a reviewer see exactly why the selected model was chosen?",
      lens:"This is portfolio evidence of technical judgment, not a leaderboard screenshot."
    }],
    ['q','I402'],
    ['p','Then change exactly one thing. This is the discipline that separates a benchmark from an anecdote: if you change the model and the prompt together and the result improves, you have learned nothing about either.'],
    ['key','The literacy you need is real but bounded: supervised versus unsupervised learning, classification versus regression, train/validation/test, overfitting, precision and recall, embeddings, transformers at the level of an idea, attention as \u201cwhich parts of the context matter right now\u201d, inference versus training, and pretraining versus fine-tuning versus retrieval. That is the list. You do not need more to hold your own in an architecture conversation.'],
    ['p','The question that comes up in every one of those conversations is whether to fine-tune. There is a usable rule, as long as you hold it as a hypothesis to be tested rather than a law.'],
    ['l',[
      '<strong>Retrieval</strong> when the problem is changing knowledge or private data.',
      '<strong>Prompting</strong> when the behaviour can be steered with instructions and examples.',
      '<strong>Fine-tuning</strong> when the behaviour, style or task pattern is stable, repeated, and worth changing weights for.'
    ]],
    ['tb',['Decision','Ask first','The common mistake'],[
      ['Model choice','Which constraint binds \u2014 quality, latency or cost?','Picking the \u201csmartest\u201d model by reputation'],
      ['Fine-tune','Is the gap knowledge, or behaviour?','Fine-tuning to inject documents that change monthly'],
      ['Reasoning level','Does more reasoning move the acceptance metric?','Paying for more reasoning without measuring it'],
      ['Context size','Do we genuinely need the larger window?','Treating a big window as a substitute for retrieval']
    ]],
    ['try',{id:'ch22-leader',mins:6,min:60,rows:4,task:'Write the one sentence you would say if a stakeholder asked you to switch to the model that just topped a leaderboard.',after:'The sentence that works is some version of: on which of our cases, and at what latency and cost? A leaderboard is a result on someone else\u2019s test set.'}],
    ['key',"Next, we learn to engineer the context around whichever model we selected."]
  ],
  capstone:{
    title:'A Model Selection Card',
    brief:'One page a stakeholder can read and an engineer can act on, for a hypothetical government assistant. The card is the deliverable; the benchmark behind it is the evidence.',
    steps:[
      'State the task and the quality bar in measurable terms.',
      'State the data sensitivity, and what that rules out immediately.',
      'Set a latency SLO and a cost ceiling per task.',
      'Shortlist two or three models and put your ten-case results beside each.',
      'Name the fallback: what runs when the first choice is down, degraded, or repriced.',
      'Name the evaluation dataset by which the choice will be re-checked in three months.'
    ],
    done:[
      'Every claim on the card traces to a run in your harness.',
      'A reader can tell which constraint decided it.',
      'The fallback is named and has been tried at least once.'
    ]
  }
},

/* --------------------------------------------------------------- 23 / bk 10 */
{
  id:'ch10c', num:23, part:5, minutes:55, labs:['contextrot'],
  title:'Context engineering',
  concept:'Book chapter 10. Retrieval is one part of a bigger discipline: deciding what goes into the model at all \u2014 instructions, examples, evidence, history, tool results \u2014 and in what shape.',
  plan:{
    first:'Write a vague prompt that makes a downstream parser fail, and keep the failure.',
    build:'Redesign it as an interface: structured output, validation, examples, a refusal state, provenance, and bounded history.',
    brk:'Remove required fields, add contradictory instructions, overflow the context, and inject irrelevant history.',
    artifact:'A context budget, a schema, and a memory/state design.',
    gate:'Explain the difference between context, state and persistent memory without blurring them.'
  },
  needs:[
    ['A system prompt is a standing instruction','Chapter 2. Here it becomes one component of a designed context.',2],
    ['The envelope has a ceiling','Chapter 1.5. The budget is real, so something has to be dropped first.',1.5],
    ['Structured output can be demanded','Chapter 8 made the shape reliable; this chapter puts it in a wider frame.',8]
  ],
  words:[
    ["Context engineering","Deciding what the model receives at all — instructions, examples, evidence, history, tool results — and in what shape. Retrieval is one part of it."],
    ["Context budget","A token allowance per component, with a stated order in which things get dropped when the total will not fit."],
    ["Schema validation","Checking returned data against a declared shape before anything downstream uses it."],
    ["Provenance","The record of where a piece of information came from, carried alongside it so an answer can be traced back to a source."]
  ],
  takeaway:[
    'Treat a prompt as an interface contract rather than a paragraph of wishes.',
    'Say what gets dropped first when the context budget is tight, and why.',
    'Distinguish conversation history, user profile and task state as three different stores.'
  ],
  story:[
    ['p','Imagine briefing a new colleague who is brilliant, fast, and has no memory of yesterday. Every morning you hand them a folder. What you put in that folder — the standing instructions, the examples, the file they need today, the note about what happened last week — decides entirely how well they do.'],
    ['p','You cannot make the folder infinitely thick, and you pay by the page. That is this chapter. People call the interesting part “prompt engineering”, but the prompt is one page in the folder. Deciding what else goes in, and what gets left out, is the bigger job.'],
    ['key','A good prompt is an interface contract, not a paragraph of wishes. Role, task, constraints, examples, output schema, refusal behaviour. Everything in that list is something a caller downstream is depending on.'],
    
    ['unit',"10.1","Prompt as an interface contract",{
      goal:"Design prompts with explicit task, constraints, input definitions, output expectations and failure behavior.",
      idea:"A prompt is an interface contract between application and model.",
      prove:"Rewrite a vague instruction into role, task, constraints, examples and output requirements.",
      build:"Run old and new versions on the same 10 cases.",
      brk:"Add contradictory instructions and observe which behavior is stable and which is not.",
      artifact:"Prompt version diff + benchmark result.",
      check:"What requirement became measurable after the rewrite?",
      lens:"Prompt changes should be versioned like code."
    }],
    ['unit',"10.2","Structured outputs and schemas",{
      goal:"Make model output machine-consumable and validate it before downstream use.",
      idea:"Natural-language output is flexible; application interfaces need predictable structure.",
      prove:"Define a small JSON schema for a task extraction object.",
      build:"Generate outputs, parse them and reject invalid structures.",
      brk:"Remove a required field and insert a wrong type; verify the application catches it.",
      artifact:"Schema + validation tests + sample valid/invalid payloads.",
      check:"Does the schema prevent unsafe values or only formatting mistakes?",
      lens:"Structured output is an interface control, not a truth guarantee."
    }],
    ['unit',"10.3","Context budget",{
      goal:"Measure how much of the context is instructions, history, retrieved text and tool output.",
      idea:"Context is a finite resource with quality, latency and cost implications.",
      prove:"Record token counts for each context component where the provider exposes them or estimate consistently.",
      build:"Create a budget policy: what gets kept, summarized or dropped first.",
      brk:"Flood the context with irrelevant history and compare answer quality and cost.",
      artifact:"Context Budget Worksheet.",
      check:"What is the first thing you would remove under pressure?",
      lens:"A PM should be able to ask “what is in the context?” and get an exact answer."
    }],
    ['unit',"10.4","State, history and memory",{
      goal:"Separate request context, conversation history, durable user data and task state.",
      idea:"“Memory” is not one feature; it is an application architecture with storage, retention and authorization.",
      prove:"Draw three stores: session history, user profile, task state.",
      build:"Specify fields, owner, retention, access and deletion path for each.",
      brk:"Introduce stale or conflicting memory and define precedence rules.",
      artifact:"Memory/State Design Sheet.",
      check:"What data should never be injected into a prompt by default?",
      lens:"This is where privacy and product design meet context engineering."
    }],
    ['unit',"10.5","Provenance and citations",{
      goal:"Make evidence traceable from answer to source, chunk and version.",
      idea:"A citation is useful only if it lets the user or auditor trace the claim to evidence.",
      prove:"Attach source ID, section and chunk ID to each retrieved passage.",
      build:"Generate an answer that cites those identifiers.",
      brk:"Delete or change a source version and test whether old citations remain valid.",
      artifact:"Provenance schema + citation examples.",
      check:"Can you reproduce the exact source used for an answer?",
      lens:"Traceability is essential in regulated or policy-heavy systems."
    }],
    ['unit',"10.6","Context failure clinic",{
      goal:"Diagnose wrong answers caused by missing, stale, irrelevant, contradictory or malicious context.",
      idea:"Many “model failures” are actually context-construction failures.",
      prove:"Create five intentionally bad context packages and predict the failure.",
      build:"Fix one issue at a time and rerun the same test set.",
      brk:"Mix stale policy, unrelated text and prompt injection into the context.",
      artifact:"Context Failure Taxonomy.",
      check:"What failed: retrieval, assembly, authorization, instruction hierarchy, or generation?",
      lens:"This prepares you for production RAG and security."
    }],
    ['p','Structured output removes ambiguity downstream, which matters because the thing downstream is usually code that will not cope with prose.'],
    ['q','I403'],
    ['key','\u201cMemory\u201d is an architecture choice, not a feature the model has. Every product that claims memory has built one \u2014 and which one it built determines what it can delete when someone asks.'],
    ['p','You will hear a lot of names for parts of that folder — caching, compression, few-shot examples, instruction hierarchy. They are all answers to the same two questions: what goes in, and what comes out first when it will not fit. Hold the questions; the names follow on their own.'],
    ['try',{id:'ch23-budget',mins:6,min:60,rows:4,task:'For one assistant you know, estimate the tokens spent on system instructions, on history, on retrieved passages, and on tool output. Then decide what gets dropped first when the budget is tight.',after:'Almost everyone drops history first and evidence last. If your ordering is different, write down why \u2014 that reasoning is the design.'}],
    ['key',"Now the context package becomes the input to a real retrieval architecture."]
  ],
  capstone:{
    title:'A context budget for one assistant',
    brief:'A page that says exactly what goes into the envelope, what it costs, and what falls out first under pressure. This is the artifact that makes a context window argument concrete instead of theoretical.',
    steps:[
      'List every component that enters the context: instructions, examples, retrieved evidence, history, tool results, user data.',
      'Put a token estimate beside each, measured rather than guessed.',
      'Set a total ceiling and show the headroom.',
      'Define the eviction order, and the rule that decides it.',
      'Write the schema the output must match, and what happens when it does not match.',
      'Say which of the three memory stores each piece of retained data belongs to.'
    ],
    done:[
      'The numbers come from a real run, not an estimate.',
      'The eviction order has a stated reason.',
      'Every retained field has a deletion path.'
    ]
  }
},

/* --------------------------------------------------------------- 24 / bk 11 */
{
  id:'ch11r', num:24, part:5, minutes:60, labs:['fusion'],
  title:'RAG at production depth',
  concept:'Book chapter 11. Retrieval is a system with tunable stages, not a vector database with a logo. This is the version you could defend in a design review.',
  plan:{
    first:'Take three real documents and inventory them \u2014 id, section, language, metadata, access label \u2014 then predict which metadata will earn its keep.',
    build:'Compare lexical, semantic and hybrid retrieval, then add reranking or record a measured reason to leave it out.',
    brk:'Test what happens on deletion, on a permission change, on duplicates, and on an index version change.',
    artifact:'A production RAG architecture with access control, provenance, versioning, a no-answer policy and a rollback path.',
    gate:'Name the first production retrieval failure you would investigate, and say why that one first.'
  },
  needs:[
    ['You built retrieval by hand','Chapters 3 to 7. This chapter turns the demo into an architecture.',7],
    ['Word matching and meaning matching fail differently','Chapter 12 measured it; here it becomes an ingestion and indexing decision.',12],
    ['Ground truth is the instrument','Every claim below is measured against your answer key.',6]
  ],
  words:[
    ["Ingestion","Everything that happens to a document before it can be retrieved: parsing, extraction, enrichment, chunking, embedding. It sets a ceiling on quality that nothing downstream can raise."],
    ["Query rewriting","Turning what the user typed into what should actually be searched for, before retrieval runs."],
    ["Access-control-aware retrieval","Filtering by who is asking as part of the search, rather than hiding results afterwards in the interface."],
    ["Embedding versioning","Tracking which model produced which stored vectors, so a model change does not silently corrupt an index."]
  ],
  takeaway:[
    'Name the stages of a production retrieval pipeline and say which are tunable.',
    'Explain why ingestion quality sets a ceiling on retrieval quality.',
    'Say what happens to your index when a document is deleted or a permission changes.'
  ],
  story:[
    ['p','A tidy home kitchen and a restaurant kitchen cook the same food. The difference is that in a restaurant nothing arrives when you expect, two people order the same thing differently, somebody is allergic, and a delivery is missing. The recipes did not change. Everything around them did.'],
    ['p','Your chapter 7 system is the home kitchen. It works because you chose every document and you are the only user. In production, scans come in crooked, permissions change after you indexed, the same contract gets uploaded twice under two names, and one day your provider quietly updates the model underneath you.'],
    ['c','Seven places it can go wrong, not one','Reading the document in, cutting it up, adding labels, mapping the meaning, searching, building the envelope, and checking the answer. Each of those is a dial somebody can turn — which also means each one is a candidate when quality drops and nobody changed the code.'],
    ['key','Whatever gets lost while reading the document in is lost for good. No amount of clever searching later brings back a table your parser flattened, or a page it skipped because the scan was crooked.'],
    
    ['unit',"11.1","Parsing and document ingestion",{
      goal:"Treat document ingestion as an engineering pipeline rather than “upload PDF.”",
      idea:"Garbage or lost structure at ingestion becomes retrieval garbage later.",
      prove:"Take three PDFs/documents and compare extracted text with the human-visible source.",
      build:"Record page, section, table, language and parser notes.",
      brk:"Use a scanned page, table-heavy page and malformed document. Record what is lost.",
      artifact:"Ingestion Quality Report.",
      check:"Which information disappeared before retrieval even started?",
      lens:"Ask for parser/OCR quality before blaming embeddings."
    }],
    ['unit',"11.2","Metadata and document identity",{
      goal:"Design stable document and chunk identifiers plus metadata needed for filtering and provenance.",
      idea:"Metadata is part of retrieval logic, not decoration.",
      prove:"Create fields: document_id, version, section, language, access_label, effective_date.",
      build:"Assign stable chunk IDs and preserve parent relationships.",
      brk:"Create duplicate and superseded versions and test retrieval filters.",
      artifact:"Document Metadata Contract.",
      check:"Can the system distinguish current from obsolete evidence?",
      lens:"Versioning and identity become critical when policy changes."
    }],
    ['unit',"11.3","Chunking families",{
      goal:"Compare fixed, recursive/structure-aware, semantic and hierarchical chunking without treating any as universally best.",
      idea:"Chunking is a hypothesis about what unit of evidence users will need.",
      prove:"Chunk the same document three ways and inspect boundaries.",
      build:"Create 10 questions that require different evidence granularity.",
      brk:"Test a question whose answer crosses a chunk boundary.",
      artifact:"Chunking Experiment with before/after examples.",
      check:"Which chunking strategy matched your question set and why?",
      lens:"The right question is not “which chunking is best?” but “best for what corpus and query distribution?”"
    }],
    ['unit',"11.4","Sparse retrieval",{
      goal:"Understand exact lexical retrieval and why it remains valuable.",
      idea:"Identifiers, names, codes and exact phrases are often retrieval strengths for lexical methods.",
      prove:"Build a small keyword/BM25-style search experiment or use a library after understanding the scoring idea.",
      build:"Measure rank of known target passages.",
      brk:"Use paraphrased questions and synonym-heavy questions to expose weaknesses.",
      artifact:"Sparse Retrieval Benchmark.",
      check:"Where did exact matching win?",
      lens:"Do not replace strong deterministic signals merely because embeddings are fashionable."
    }],
    ['unit',"11.5","Dense, hybrid and vector search",{
      goal:"Understand embeddings as an indexable representation and combine sparse/dense evidence.",
      idea:"Dense retrieval helps when meaning is similar despite wording differences; hybrid retrieval combines different failure modes.",
      prove:"Run the Chapter 4–5 question set through lexical, dense and hybrid retrieval.",
      build:"Record rank of relevant evidence for each query.",
      brk:"Create exact-ID, synonym, multilingual and ambiguous cases.",
      artifact:"Retrieval Benchmark with per-query evidence.",
      check:"Which query categories benefit from which retriever?",
      lens:"Architecture decisions should follow your error distribution."
    }],
    ['unit',"11.6","Reranking",{
      goal:"Understand a second-stage relevance model and measure whether its benefit justifies cost/latency.",
      idea:"First-stage retrieval optimizes candidate recall; reranking can improve ordering among candidates.",
      prove:"Retrieve 10 candidates and apply a second scoring stage using an available reranker or measured substitute.",
      build:"Compare Recall@10, Precision@3 and latency before/after.",
      brk:"Include cases where the reranker confidently misorders evidence.",
      artifact:"Reranking Experiment Report.",
      check:"Did the improvement affect the final task or only an intermediate metric?",
      lens:"Never add reranking because a reference architecture contains it; prove its value."
    }],
    ['unit',"11.7","Query rewriting, parent-child retrieval and abstention",{
      goal:"Improve the retrieval query and context granularity while preserving user intent.",
      idea:"Retrieval is a pipeline: query formulation, candidate search, filtering, ranking, context assembly and answer policy.",
      prove:"Rewrite ambiguous questions into explicit search queries and compare results.",
      build:"Retrieve child chunks while returning parent context for readability.",
      brk:"Test an unanswerable query and a query where rewriting changes the intended meaning.",
      artifact:"Query Strategy + Abstention Test Set.",
      check:"When should the system ask a clarification question rather than retrieve?",
      lens:"Abstention is a product behavior, not merely a prompt sentence."
    }],
    ['unit',"11.8","Authorization, freshness and rollback",{
      goal:"Make retrieval permission-aware and operationally reversible.",
      idea:"A correct answer from unauthorized data is still a security failure.",
      prove:"Add an access label to chunks and filter by a test user role.",
      build:"Simulate document deletion, permission change and index rebuild.",
      brk:"Query immediately after revocation and verify stale index content is inaccessible.",
      artifact:"Production RAG Architecture + ACL/Freshness/Rollback checklist.",
      check:"Can you prove an unauthorized user cannot retrieve the chunk?",
      lens:"Authorization belongs at the application/data layer, not only in model instructions."
    }],
    ['q','I404'],
    ['key','Reranking is a second opinion, not a magic fix. Retrieve ten candidates, rescore them, and then be honest: did recall at ten and precision at three improve enough to justify the latency and cost it added?'],
    ['p','There is a long list of things production retrieval has to handle, and memorising it is not the point. It falls into four honest questions, and every item on any vendor\u2019s feature list is an answer to one of them:'],
    ['n',['<strong>Did we read the document properly?</strong> Scanning, tables, the bits a parser drops.',
      '<strong>Is the reader allowed to see this?</strong> Permissions, separate customers, documents that were deleted.',
      '<strong>Did we find the right piece?</strong> Word matching, meaning matching, rewriting the question, re-ranking what came back.',
      '<strong>Can we prove where the answer came from?</strong> Chunk ids, citations, and what happens when there is genuinely no answer.']],
    ['p','When someone demonstrates a retrieval product, those four questions are your whole interview.'],
    ['try',{id:'ch24-delete',mins:6,min:60,rows:4,task:'A document is deleted from the source system at 10am. Walk through what has to happen for the assistant to stop quoting it, and by when.',after:'If the answer involves a nightly rebuild, then between 10am and the rebuild your system is quoting a document that no longer exists. That window is a decision, so make it deliberately.'}],
    ['key',"Next, the model gets controlled access to actions rather than only evidence."]
  ],
  capstone:{
    title:'An enterprise retrieval architecture, on one page',
    brief:'One page that an engineer could implement and a security reviewer could challenge. The constraint is the single page \u2014 if it does not fit, you have not decided enough.',
    steps:[
      'Draw ingestion, storage, index, retrieval, rerank and generation as separate stages.',
      'Add authentication and authorisation, and mark where the access check happens.',
      'Mark provenance: how an answer traces back to a chunk id and a source document.',
      'State the no-answer threshold and what the user sees when it trips.',
      'State the versioning scheme for the index and the embedding model.',
      'State the rollback: what you do when a rebuild makes quality worse.'
    ],
    done:[
      'Every arrow has a failure mode written beside it.',
      'The access check is on the retrieval path, not only in the UI.',
      'Rollback is a procedure, not an intention.'
    ]
  }
},

/* --------------------------------------------------------------- 25 / bk 12 */
{
  id:'ch12t', num:25, part:5, minutes:50, labs:['schema'],
  title:'Tool calling and workflows',
  concept:'Book chapter 12. Give the model hands, keep the steering wheel. Deterministic workflows and explicit tool contracts \u2014 before anything is allowed to be an agent.',
  plan:{
    first:'Define one external action and write its tool schema before you write any model logic.',
    build:'Implement classify \u2192 retrieve \u2192 tool \u2192 validate \u2192 respond, with a confirmation step for anything consequential.',
    brk:'Test malformed arguments, a timeout, an unauthorised call, and a tool that returns the wrong thing confidently.',
    artifact:'A tool contract, a workflow diagram, and a failure-state table.',
    gate:'Point at every place in the flow where deterministic code retains control.'
  },
  needs:[
    ['A schema makes the shape reliable','Chapter 8. A tool contract is that idea pointed outward.',8],
    ['The model invents when it has no evidence','Chapter 2. Now it can invent arguments to a real action.',2]
  ],
  words:[
    ["Tool contract","The typed interface to an external capability: name, description, constrained parameters, error states, permissions and side effects."],
    ["Deterministic workflow","A fixed sequence where only the parts that genuinely need judgement are left to the model."],
    ["Idempotency","The property that doing the same operation twice has the same effect as doing it once — which matters the moment anything retries."],
    ["Confirmation step","A required human acknowledgement before a consequential action runs."]
  ],
  takeaway:[
    'Write a tool contract that a reviewer could sign off.',
    'Say when a fixed workflow beats letting the model decide.',
    'Name the checks that must happen before a consequential action executes.'
  ],
  story:[
    ['p','A bank teller can look up your balance. They cannot approve a loan on their own, and they certainly cannot wire money out on a customer\u2019s say-so. Nobody wrote that rule because tellers are untrustworthy. They wrote it because the consequences of some actions leave the building.'],
    ['p','Giving an AI a <strong>tool</strong> is the same decision. A tool lets it do something real — look up an invoice, send an email, change a record. So the interesting question is never “can it?” It is: what exactly may it do, with what, and who checks.'],
    
    ['unit',"12.1","Tool schemas",{
      goal:"Define a tool as a constrained contract with name, description, parameters, errors and permissions.",
      idea:"Good tool definitions are part of the model’s operating interface.",
      prove:"Write a schema for <code>get_invoice_status(invoice_id)</code>.",
      build:"Add required fields, allowed formats and explicit error states.",
      brk:"Try missing IDs, invalid formats and an unauthorized invoice.",
      artifact:"Tool Contract Specification.",
      check:"Could a new engineer understand exactly what the tool can and cannot do?",
      lens:"Tool descriptions deserve the same care as API documentation."
    }],
    ['unit',"12.2","Tool selection",{
      goal:"Measure whether the model selects the correct capability for each task.",
      idea:"Tool use should be justified by decision value, not novelty.",
      prove:"Create 20 tool-selection test cases across two or three tools.",
      build:"Record selected tool, arguments and expected tool.",
      brk:"Add near-duplicate tool names and ambiguous requests.",
      artifact:"Tool Selection Benchmark.",
      check:"What percentage of calls are correct, unnecessary or unsafe?",
      lens:"This becomes a measurable quality dimension in agent systems."
    }],
    ['unit',"12.3","Validation, retries and timeouts",{
      goal:"Separate model-generated arguments from deterministic execution controls.",
      idea:"The model is not the authorization layer.",
      prove:"Validate every argument before execution and implement timeout/retry policy.",
      build:"Simulate transient and permanent failures.",
      brk:"Return malformed tool results and test downstream behavior.",
      artifact:"Tool Failure-State Table.",
      check:"Which failures are retryable and which require user intervention?",
      lens:"A PM should ask for timeout, retry and failure semantics for every external dependency."
    }],
    ['unit',"12.4","Idempotency and side effects",{
      goal:"Understand why repeated tool calls can duplicate actions.",
      idea:"A retry is safe only when the operation is safe to repeat or protected by an idempotency mechanism.",
      prove:"Design an idempotency key for a purchase/request submission.",
      build:"Run the same action twice and verify only one business effect occurs.",
      brk:"Simulate a network timeout after the server accepted the request.",
      artifact:"Side-Effect Safety Checklist.",
      check:"What happens if the client never receives the success response?",
      lens:"This is essential when AI can trigger payments, tickets, messages or records."
    }],
    ['unit',"12.5","Human approval",{
      goal:"Insert explicit confirmation before consequential or irreversible actions.",
      idea:"Human-in-the-loop is an architecture boundary, not a polite UI popup.",
      prove:"Build draft ® review ® approve ® execute.",
      build:"Log who approved, what was approved and which exact payload was executed.",
      brk:"Change the payload after approval and verify execution is blocked.",
      artifact:"Approval Workflow Diagram + audit schema.",
      check:"What exactly did the human approve?",
      lens:"The approval object must bind to the action, not just to a vague conversation."
    }],
    ['unit',"12.6","Workflow patterns",{
      goal:"Implement sequential, routing, parallel and evaluator-optimizer workflows.",
      idea:"A workflow is a predefined control path with model calls inside it.",
      prove:"Build one simple sequential workflow and one routing workflow.",
      build:"Measure latency, cost and task success.",
      brk:"Introduce a wrong route and observe downstream failure.",
      artifact:"Workflow Pattern Comparison.",
      check:"Which pattern adds value and which adds unnecessary complexity?",
      lens:"Use the simplest composable pattern that meets the acceptance criteria."
    }],
    ['key','A workflow is often safer than an autonomous agent. If the sequence of steps is known, fix the sequence in code and let the model do only the part that genuinely needs judgement.'],
    ['q','I405'],
    ['p','The checklist below is the one to run over any tool before it ships. It is short, and every line on it has been the cause of a real incident somewhere.'],
    ['l',[
      'The name is clear and the description is truthful \u2014 the model reads both.',
      'Parameters are constrained, not free text where an enum would do.',
      'Side effects are explicit.',
      'Permissions are enforced server-side, not by asking the model nicely.',
      'Idempotency has been considered.',
      'Errors are structured.',
      'Audit data is captured.',
      'Destructive actions require confirmation.'
    ]],
    ['key','Do not hand the model a tool just because it can have one. Every tool expands the attack surface and adds latency, cost and failure modes. The model should decide what to call only where the decision is worth something.'],
    ['try',{id:'ch25-cross',mins:6,min:60,rows:4,task:'List the tools you would give a support assistant. Now cross out every one where a fixed rule would pick correctly more than 95% of the time.',after:'What is left is the set where the model\u2019s judgement earns its risk. It is usually much shorter than the first list.'}],
    ['key',"Only after workflows are understood do we allow the model to control the path."]
  ],
  capstone:{
    title:'A workflow that drafts but cannot submit',
    brief:'An approval flow where the assistant can prepare a purchase request and can never send it. The interesting number is not whether it works \u2014 it is how often the model proposes the correct action when it is not allowed to act.',
    steps:[
      'Write the tool contract for the draft action and for the submit action separately.',
      'Enforce the split server-side: the submit tool is not in the model\u2019s allowed list at all.',
      'Add a human approval step with an audit record of who approved what.',
      'Run twenty realistic requests and record how often the proposed action was correct.',
      'Test a malformed argument, an unauthorised request and a timeout, and record what the user saw each time.'
    ],
    done:[
      'The model cannot submit even if it asks to.',
      'Every approval leaves a record naming a person.',
      'You have a measured proposal-accuracy figure, not an impression.'
    ]
  }
},

/* --------------------------------------------------------------- 26 / bk 13 */
{
  id:'ch13a', num:26, part:5, minutes:60, labs:['agentloop'],
  title:'Agents \u2014 reason, act, observe, repeat',
  concept:'Book chapter 13. An agent is not a smarter chatbot. It is a system where the model chooses actions, inspects results, and continues toward a goal \u2014 which makes control, not intelligence, the hard part.',
  plan:{
    first:'Build the smallest possible loop: propose \u2192 call one approved tool \u2192 observe \u2192 continue or stop.',
    build:'Add an allowed-tool list, a maximum number of steps, explicit state, stop conditions, and a human approval gate.',
    brk:'Make it loop. Feed it confusing tool output. Ask it for a tool it is not allowed to use.',
    artifact:'A comparison of the agent against the deterministic workflow across twenty tasks.',
    gate:'Prove the autonomy adds measurable value. If it does not, ship the workflow.'
  },
  needs:[
    ['Tool contracts and deterministic workflows','Chapter 25 built the thing an agent is being compared against.',25],
    ['Every step costs tokens','Chapter 1. A loop multiplies that by the number of turns.',1]
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
    ['p','Send a junior colleague to find one number. A good one comes back in ten minutes with the number, or comes back and says they could not find it. A worse outcome is the one where they never come back at all, still looking, three hours later.'],
    ['p','An <strong>agent</strong> is a system that keeps going by itself: decide, do something, look at the result, decide again. Everyone teaches that loop. The part that gets skipped is that every loop needs a way to stop — and almost all the trouble lives there rather than in how clever the model is.'],
    
    ['unit',"13.1","The agent loop",{
      goal:"Understand goal ® model decision ® tool call ® observation ® updated context ® stop/continue.",
      idea:"The loop is the architecture; “agent” is not magic.",
      prove:"Draw the loop and label every state and transition before coding.",
      build:"Implement a three-step toy loop with explicit state.",
      brk:"Force a tool failure and inspect whether the loop recovers or spirals.",
      artifact:"Agent State Diagram.",
      check:"Where can the loop stop safely?",
      lens:"If you cannot draw the loop, you cannot defend the architecture."
    }],
    ['unit',"13.2","Planning and tool choice",{
      goal:"Understand model-driven planning and when it is actually useful.",
      idea:"Agents trade predictability for flexibility.",
      prove:"Give the agent three tools and 20 tasks; record tool selection.",
      build:"Compare one fixed workflow against the agent on the same tasks.",
      brk:"Include tasks that require no tool and tasks with ambiguous tool options.",
      artifact:"Agent vs Workflow Comparison.",
      check:"Did autonomy improve the acceptance metric enough to justify it?",
      lens:"A workflow that passes may be better than an agent that merely looks impressive."
    }],
    ['unit',"13.3","State and context management",{
      goal:"Keep task state explicit and control context growth.",
      idea:"Long-running loops can accumulate stale, irrelevant or contradictory context.",
      prove:"Define a state object containing goal, steps, observations, approvals and status.",
      build:"Persist state between iterations and summarize only when necessary.",
      brk:"Add repeated observations and irrelevant tool output; measure context growth.",
      artifact:"Agent State Schema + Context Policy.",
      check:"Which fields are authoritative?",
      lens:"Explicit state makes incidents explainable."
    }],
    ['unit',"13.4","Stopping conditions",{
      goal:"Bound steps, time, cost and unsafe action classes.",
      idea:"An agent without stop conditions is an unbounded production dependency.",
      prove:"Set max steps, timeout, cost ceiling and “cannot resolve” state.",
      build:"Log why each run stopped.",
      brk:"Create a loop that never finds an answer and prove it terminates.",
      artifact:"Agent Control Policy.",
      check:"Can you prove the system terminates under failure?",
      lens:"This is a reliability and cost requirement, not just an engineering detail."
    }],
    ['unit',"13.5","Human checkpoints",{
      goal:"Add human intervention at ambiguity, high impact and irreversible transitions.",
      idea:"Autonomy should be proportional to reversibility and confidence.",
      prove:"Mark each tool/action as read-only, reversible-write or irreversible-write.",
      build:"Require approval for the last category.",
      brk:"Try to bypass approval through a prompt or tool argument.",
      artifact:"Agent Approval Matrix.",
      check:"Which actions are never autonomous?",
      lens:"The business owner should approve the autonomy boundary."
    }],
    ['unit',"13.6","Multi-agent patterns",{
      goal:"Understand handoffs, orchestrator-worker and multi-agent collaboration without assuming they are superior.",
      idea:"Multiple agents create additional state, latency, cost and failure surfaces.",
      prove:"Solve a task with one agent first. Then prototype a two-role decomposition.",
      build:"Compare task success and operational complexity.",
      brk:"Introduce conflicting outputs and unclear ownership.",
      artifact:"Multi-Agent Decision Record.",
      check:"What measurable problem did the second agent solve?",
      lens:"Complexity must buy a measurable capability."
    }],
    ['unit',"13.7","Agent exit gate",{
      goal:"Make “use an agent” a hypothesis requiring evidence.",
      idea:"The right architecture is the simplest one that meets requirements.",
      prove:"Create a 20-task benchmark comparing direct call, workflow and agent.",
      build:"Score quality, tool accuracy, latency, cost and safety.",
      brk:"Remove one capability at a time and see whether the agent still adds value.",
      artifact:"Agent Architecture Decision Record.",
      check:"Would you still choose an agent if nobody called it “agentic AI”?",
      lens:"That question protects you from architecture-by-hype."
    }],
    ['key','Agent failure is usually a control problem, not an intelligence problem. The model did not become stupid; it was given an unbounded number of chances to be wrong.'],
    ['q','I406'],
    ['tb',['Pattern','Use it when','Main risk'],[
      ['Sequential workflow','The steps are known','Rigid when the problem shifts'],
      ['Routing','One of several specialised paths fits','The router picks wrong'],
      ['Parallel','Subtasks are genuinely independent','Coordination and aggregation'],
      ['Handoff','A specialist should take over','Lost context, unclear authority'],
      ['Orchestrator-worker','The plan decomposes into subtasks','Cost, loops, state complexity']
    ]],
    ['key','Start with one model and a short list of tools it may use. Add a second agent only when you have measured something the simpler version could not do. Complexity is a budget you spend, not a sign of sophistication.'],
    ['try',{id:'ch26-compare',mins:6,min:60,rows:4,task:'Take the twenty tasks from your chapter 25 workflow and run them through the agent. Count: how many did the agent get right, how many tool calls did it take, and what did it cost?',after:'If the agent is not clearly better on a metric you care about, the workflow wins. That is a real and respectable result to bring to a review.'}],
    ['key',"Next, we examine interoperability standards around tools and agents."]
  ],
  capstone:{
    title:'An agent, measured against the workflow it wants to replace',
    brief:'Build an agent that searches your corpus, computes one deterministic metric, and produces a cited answer. Then prove whether it beat the fixed pipeline from chapter 25.',
    steps:[
      'Give it exactly two tools and an explicit allowed list.',
      'Bound it: maximum steps, timeout, and a cannot-resolve exit.',
      'Run the same twenty tasks through the agent and the workflow.',
      'Record tool-selection accuracy, number of calls, latency and cost for each.',
      'Write one paragraph recommending one of them, with the numbers in it.'
    ],
    done:[
      'Both systems ran the same twenty tasks.',
      'You have four numbers for each, not an impression.',
      'The recommendation names the metric that decided it.'
    ]
  }
},

/* --------------------------------------------------------------- 27 / bk 14 */
{
  id:'ch14p', num:27, part:5, minutes:45, labs:[],
  title:'MCP and interoperability',
  concept:'Book chapter 14. A standard way for AI systems to reach tools and resources \u2014 and a clear-eyed view of what a standard does and does not make safe.',
  plan:{
    first:'Use a real implementation or a local mock to discover and invoke one tool or resource, and read the actual exchange.',
    build:'Expose two tools and one resource. Test discovery, invocation, errors, consent and authorisation.',
    brk:'Try unauthorised access, malformed arguments, poisoned resource content, and permissions wider than the task needs.',
    artifact:'A trust-boundary diagram and an authorisation matrix.',
    gate:'Explain what interoperability standardises, and what it leaves exactly as dangerous as it was.'
  },
  needs:[
    ['A tool is a typed interface with a contract','Chapter 25. MCP standardises how that contract is advertised.',25],
    ['Permissions are enforced server-side','Also chapter 25, and it stays true across a protocol boundary.',25]
  ],
  words:[
    ["MCP","A protocol standardising how a host, a client and a server expose and invoke tools, resources and prompts. A protocol, not an agent framework."],
    ["Trust boundary","The line across which input stops being yours and starts being something you must check."],
    ["Least privilege","Granting exactly the permissions the task needs and no more — so a tool that is never needed cannot be misused."],
    ["Capability negotiation","How two sides of a protocol agree on what each can do before any work happens."]
  ],
  takeaway:[
    'Draw the host, client, server and resource flow and mark where consent and authorisation sit.',
    'Explain why a standardised interface to an unsafe tool is still unsafe.',
    'Classify tools by what they are allowed to change.'
  ],
  story:[
    ['p','A plug socket is a standard. It means any appliance from any company fits your wall without a conversation. What it does not do is promise the appliance is safe, or that a child should be allowed to switch it on.'],
    ['p','That is exactly what a protocol like MCP is, and exactly what it is not. You will never need to build one. You do need to see the line it draws — because all the interesting questions sit on that line.'],
    ['c','What the specification actually defines','A host, a client and a server, with standardised primitives: resources, prompts and tools. It also states security and user-consent considerations explicitly, which is unusual and worth reading. Agent-to-agent protocols are emerging separately, as a layer for agents to exchange tasks rather than for a model to reach a tool.'],
    
    ['unit',"14.1","MCP mental model",{
      goal:"Explain host, client, server, tools, resources, prompts and capability negotiation.",
      idea:"A protocol standardizes interaction patterns; it does not remove the need for authorization or safe design.",
      prove:"Draw host ® client ® server ® tool/resource flow.",
      build:"Inspect one real or local protocol exchange.",
      brk:"Ask what happens when a server advertises a capability the user is not authorized to use.",
      artifact:"MCP Trust-Boundary Diagram.",
      check:"Where does identity live and where is authorization enforced?",
      lens:"Protocol knowledge lets you challenge “MCP makes it secure” claims."
    }],
    ['unit',"14.2","Expose a tiny capability",{
      goal:"Build a tiny local capability provider exposing one safe tool/resource.",
      idea:"The best way to understand a protocol is to inspect a small working implementation.",
      prove:"Expose a read-only function such as looking up a local record.",
      build:"Invoke it from a compatible client or local mock.",
      brk:"Return malformed arguments and server errors.",
      artifact:"MCP Mini-Demo repository.",
      check:"Can you trace discovery, invocation and response?",
      lens:"Keep the demo read-only to focus on protocol understanding."
    }],
    ['unit',"14.3","Consent and authorization",{
      goal:"Separate capability discovery from permission to act.",
      idea:"A discoverable tool is not automatically an authorized tool.",
      prove:"Create an authorization matrix for read, write and privileged tools.",
      build:"Add a policy check before invocation.",
      brk:"Attempt an unauthorized invocation and record the denial.",
      artifact:"Authorization Matrix + test evidence.",
      check:"Who makes the final authorization decision?",
      lens:"Server-side authorization must not depend on the model following instructions."
    }],
    ['unit',"14.4","MCP security and prompt injection",{
      goal:"Treat resources and tool outputs as untrusted content.",
      idea:"Interoperability can increase the number of external trust boundaries.",
      prove:"Inject a malicious instruction into a resource and test the client workflow.",
      build:"Separate data from control instructions and enforce tool policies.",
      brk:"Try indirect injection through a retrieved resource.",
      artifact:"MCP Security Test Sheet.",
      check:"Can untrusted content cause a privileged action?",
      lens:"This connects directly to the security chapter."
    }],
    ['unit',"14.5","Agent-to-agent interoperability",{
      goal:"Understand A2A-style concepts: identity, delegation, task exchange, trust and observability.",
      idea:"Inter-agent protocols solve interoperability problems, not fundamental autonomy risks.",
      prove:"Draw a two-agent exchange with identity and delegation boundaries.",
      build:"Define what data and authority may cross the boundary.",
      brk:"Create a malicious or confused handoff and identify the control that should stop it.",
      artifact:"Agent Interoperability Trust Model.",
      check:"What does the receiving agent actually trust?",
      lens:"Keep the focus on architecture and governance, not protocol trivia."
    }],
    ['key','A standardised tool interface does not make an unsafe tool safe. The protocol carries the call; it does not decide whether the call should have been allowed.'],
    ['q','I407'],
    ['p','One thing worth saying plainly, because it is a common mix-up: MCP is a <strong>protocol</strong>, not a framework that builds agents for you. It standardises the socket. What gets plugged in, and who is allowed to switch it on, is still entirely your design.'],
    ['p','Agent-to-agent work adds a further layer \u2014 instead of exposing a tool to one model runtime, agents may need discoverable ways to exchange tasks and results. For product purposes the questions are identity, delegation, trust, permissions, error semantics and observability, rather than the field names.'],
    ['try',{id:'ch27-classify',mins:6,min:60,rows:4,task:'Classify five tools from a system you know into read-only, reversible-write, irreversible-write, privileged, and prohibited.',after:'The line between reversible and irreversible is where human confirmation belongs. If you found it hard to place a tool, that tool needs a smaller scope.'}],
    ['key',"The next chapter changes the input modality while preserving the same context/evaluation architecture."]
  ],
  capstone:{
    title:'A tool access policy',
    brief:'Written for an AI assistant in a government environment, where \u201cit seemed helpful\u201d is not an acceptable explanation for an action taken. The policy is the artifact; the classification is the thinking.',
    steps:[
      'Classify every tool as read-only, reversible-write, irreversible-write, privileged or prohibited.',
      'For each class, state the authorisation required and whether a human must confirm.',
      'Build the authorisation matrix: role down the side, tool class across the top.',
      'Mark the trust boundary on your diagram and say which component enforces it.',
      'Write what the audit record contains for an irreversible action.'
    ],
    done:[
      'Every tool has exactly one class.',
      'No irreversible action lacks a confirmation step.',
      'The enforcing component is named and is not the model.'
    ]
  }
},

/* --------------------------------------------------------------- 28 / bk 15 */
{
  id:'ch15mm', num:28, part:5, minutes:50, labs:[],
  title:'Multimodal \u2014 when the input is not just text',
  concept:'Book chapter 15. Documents, images, audio and video. The architecture is still context, tools, retrieval and evaluation \u2014 but what counts as evidence changes, and so does what provenance means.',
  plan:{
    first:'Feed one PDF with a table, one image, and one short audio clip. Predict what plain text extraction will lose.',
    build:'Extract structured facts with provenance, including timestamps where the source is audio.',
    brk:'Try a poor scan, a difficult table, overlapping speakers, and mixed-language input.',
    artifact:'A multimodal pipeline and a modality-specific evaluation set.',
    gate:'State where provenance and human verification are mandatory rather than nice to have.'
  },
  needs:[
    ['Scanned documents need rendering, not parsing','Chapter 16 met this for images of text.',16],
    ['Ground truth has to come from somewhere','Chapter 6. For a table or an image, that somewhere is a person.',6]
  ],
  words:[
    ["OCR","Reading text out of an image of text. It has a quality floor set by the scan, and it fails quietly on bad input."],
    ["Diarization","Working out who spoke which part of an audio recording. Looks like a technical detail, behaves like a privacy decision."],
    ["Document understanding","Extracting meaning that depends on layout — tables, headings, position — rather than only the words."],
    ["Media provenance","Knowing where a piece of media came from and what has been done to it since."]
  ],
  takeaway:[
    'Name three things plain-text extraction loses from a real PDF.',
    'Draw a voice pipeline and mark the latency-sensitive steps.',
    'Say which component must supply the ground truth for a multimodal question.'
  ],
  story:[
    ['p','Take a photo of a railway timetable and read out only the words, in order, to somebody on the phone. They will hear every station name and not one useful departure time — because the meaning was in the columns, and columns do not survive being read aloud.'],
    ['p','That is what happens when a program pulls plain text out of a PDF. A PDF is text, layout, tables, pictures and hidden notes all at once. Reading the words alone flattens four of those five into nothing, silently.'],
    
    ['unit',"15.1","Document understanding",{
      goal:"Understand why a PDF is a layout object, not just a text file.",
      idea:"Text extraction can lose tables, reading order, images, headers and spatial meaning.",
      prove:"Compare extracted text with the rendered page.",
      build:"Record information lost and design a fallback.",
      brk:"Use a scan and a table-heavy page.",
      artifact:"Document Understanding Gap Report.",
      check:"Which questions cannot be answered from plain text?",
      lens:"This is a retrieval-quality problem before it is an LLM problem."
    }],
    ['unit',"15.2","Vision and image evidence",{
      goal:"Use image evidence with explicit provenance and evaluation.",
      idea:"Vision models can interpret visual information, but interpretation is still probabilistic.",
      prove:"Ask five questions about an image/table and label the evidence region.",
      build:"Record source image, question, answer and human verification.",
      brk:"Use low-resolution or ambiguous images.",
      artifact:"Vision Evaluation Set.",
      check:"Which outputs require human verification?",
      lens:"Visual claims should be traceable to the source image."
    }],
    ['unit',"15.3","Audio and speech pipelines",{
      goal:"Understand capture ® ASR ® normalization ® extraction ® confirmation ® action.",
      idea:"Voice AI is a pipeline with multiple failure surfaces, not one model call.",
      prove:"Use a short audio sample and inspect transcript quality.",
      build:"Extract tasks from the transcript into structured JSON.",
      brk:"Test accents, overlapping speech, names and mixed-language content.",
      artifact:"Voice Pipeline Spec + 10-case audio eval set.",
      check:"Where can an error first enter the pipeline?",
      lens:"For meeting/task automation, confirmation and privacy are part of the product."
    }],
    ['unit',"15.4","Streaming and latency",{
      goal:"Understand why voice and interactive multimodal systems care about partial results and time-to-first-response.",
      idea:"Users perceive latency differently from servers; streaming can improve perceived responsiveness without changing total work.",
      prove:"Measure stage-by-stage latency for a sample request.",
      build:"Separate capture, transcription, model and action latency.",
      brk:"Add artificial delay to one stage and identify the UX effect.",
      artifact:"Latency Budget for Multimodal Flow.",
      check:"What latency target is actually user-visible?",
      lens:"Do not optimize the fastest component while the user waits on another."
    }],
    ['unit',"15.5","Multimodal RAG evaluation",{
      goal:"Design tests where the answer depends on modality-specific evidence.",
      idea:"A text-only evaluation set can hide multimodal failures.",
      prove:"Create five text-only, five visual/table and five audio cases.",
      build:"Score evidence correctness, extraction correctness and end-to-end task success.",
      brk:"Add a poor scan, noisy audio and multilingual case.",
      artifact:"Modality-specific Evaluation Matrix.",
      check:"Which failure belongs to extraction versus reasoning?",
      lens:"The metric stack should reveal the broken component, not just the final answer."
    }],
    ['key','Voice systems are pipelines, not a single model. Every stage adds latency and every stage adds a place for the meaning to shift.'],
    ['q','I408'],
    ['p','Each of these has a name you will hear — reading text off a picture, turning speech into text, working out who said which line. The names are in the list at the end of the chapter. The thing to carry is simpler: every one of them is a step where meaning can quietly go missing, and every step needs its own way of being checked.'],
    ['try',{id:'ch28-attrib',mins:6,min:60,rows:4,task:'For a meeting assistant: who said what, how long is the transcript kept, and what happens when two people talk over each other?',after:'Speaker attribution is the part that looks like a technical detail and behaves like a privacy decision.'}],
    ['key',"Now we need a systematic way to prove whether all these components work."]
  ],
  capstone:{
    title:'A voice assistant for meeting follow-up, specified',
    brief:'The technology is the easy half. Specify the half that gets a system stopped in review: privacy boundaries, retention, attribution, and what a person must confirm.',
    steps:[
      'Define the privacy boundary: whose audio, captured where, with what notice.',
      'Set transcript retention and the deletion path.',
      'Specify speaker attribution and what happens when it is uncertain.',
      'Specify task extraction: what becomes an action item, and what confirmation is required.',
      'Write the evaluation metrics, including one for attribution accuracy.'
    ],
    done:[
      'A person can find out what was recorded about them and have it deleted.',
      'No action is taken from audio without a confirmation step.',
      'Attribution has a measured accuracy figure and a stated uncertainty behaviour.'
    ]
  }
}
,

/* --------------------------------------------------------------- 29 / bk 16 */
{
  id:'ch16e', num:29, part:5, minutes:60, labs:['judge'],
  title:'Evaluation engineering',
  concept:'Book chapter 16. Chapter 6 taught you to measure. This one turns measuring into a release discipline — the thing that decides whether a change ships.',
  plan:{
    first:'Write twenty tests before you improve anything: normal, paraphrase, ambiguous, no-answer, multilingual, adversarial and tool-use cases.',
    build:'Automate retrieval, schema, tool and end-to-end checks. Reach for a model judge only where a deterministic check cannot do the job.',
    brk:'Change the prompt, the model and the index in turn and run the regression. Compare judge labels against human labels on a sample.',
    artifact:'An evaluation harness and a release gate.',
    gate:'No change ships because a demo looked better. It ships because it passed the gate.'
  },
  needs:[
    ['Ground truth, recall and precision','Chapter 6 built the instrument this chapter industrialises.',6],
    ['A model can grade output at scale','Chapter 14 introduced the judge and its blind spots.',14],
    ['Reading failures by hand is where improvement comes from','Chapter 14.5. Automation does not replace it.',14.5]
  ],
  words:[
    ["Golden set","The curated, versioned cases every change is measured against."],
    ["LLM-as-judge","Using a model to score output. A scorer, not an oracle — its disagreement with human labels is a number you should know."],
    ["Regression test","A case that passed before and must still pass now."],
    ["Release gate","The thresholds a change has to clear before it ships, whatever the demo looked like."]
  ],
  takeaway:[
    'Build a versioned test set that survives a prompt, model or index change.',
    'Score at three levels so a good final number cannot hide a broken subsystem.',
    'Say where a model judge is acceptable and where it is not.'
  ],
  story:[
    ['p','A school does not decide whether a student has learned by watching them answer one question well. There is a paper, the same paper for everyone, marked the same way, with a pass mark agreed before anyone sat down.'],
    ['p','Chapter 6 gave you one answer key. This chapter turns that into the thing that decides whether a change ships: a fixed set of questions, a consistent way of marking, and a pass mark set in advance — so that “the demo looked better” stops being an argument anyone can win.'],
    ['key','Every AI feature needs a test dataset, and it needs to be versioned. An evaluation you cannot re-run after a change is an anecdote with a number attached.'],
    
    ['unit',"16.1","Golden datasets",{
      goal:"Create a versioned set of representative, edge and failure cases.",
      idea:"A golden dataset is the memory of what “good” means for your application.",
      prove:"Create at least 30 cases across happy path, paraphrase, ambiguity, no-answer, multilingual, adversarial and tool-use.",
      build:"Store expected behavior and evidence IDs where possible.",
      brk:"Remove a category and see which regressions become invisible.",
      artifact:"Golden Dataset v1.0.",
      check:"Does the set represent actual user risk, not just easy demos?",
      lens:"The dataset becomes the product-quality contract."
    }],
    ['unit',"16.2","Error taxonomy",{
      goal:"Classify failures so fixes target causes rather than symptoms.",
      idea:"“Wrong answer” is too coarse to guide engineering.",
      prove:"Create categories: retrieval miss, wrong chunk, stale data, instruction failure, schema failure, tool failure, authorization failure, hallucination.",
      build:"Label 20 real failures.",
      brk:"Ask two people to label the same failures and compare disagreements.",
      artifact:"Error Taxonomy + labeled examples.",
      check:"Which categories are actionable?",
      lens:"A useful taxonomy changes what the team does next."
    }],
    ['unit',"16.3","Retrieval metrics",{
      goal:"Measure Recall@k, Precision@k and related ranking measures with explicit relevance labels.",
      idea:"Metrics only mean something when the relevance definition is clear.",
      prove:"For each query, mark which chunks are relevant. Calculate Recall@k and Precision@k.",
      build:"Compare k=1, 3, 5 and 10.",
      brk:"Add distractor chunks and observe metric changes.",
      artifact:"Retrieval Evaluation Notebook.",
      check:"What exactly counts as relevant?",
      lens:"Never report a retrieval metric without its relevance policy."
    }],
    ['unit',"16.4","Generation and task success",{
      goal:"Evaluate whether the final answer is correct, grounded, complete and useful for the task.",
      idea:"A good retrieval score can coexist with a bad answer.",
      prove:"Define binary or graded criteria for answer correctness and groundedness.",
      build:"Score a fixed sample with human labels.",
      brk:"Include partially correct and overconfident answers.",
      artifact:"Generation Rubric + labeled sample.",
      check:"Can two evaluators apply the rubric consistently?",
      lens:"Acceptance criteria should be observable, not “sounds good.”"
    }],
    ['unit',"16.5","LLM-as-judge",{
      goal:"Use model-based judges where deterministic checks are insufficient, then validate them against human labels.",
      idea:"A judge is another probabilistic component, not an oracle.",
      prove:"Have a judge score 20 examples for groundedness or relevance.",
      build:"Compare judge decisions with human labels and calculate disagreement.",
      brk:"Swap answer order or vary verbosity to test position/verbosity bias.",
      artifact:"Judge Validation Report.",
      check:"Where does the judge disagree and why?",
      lens:"Never let an unvalidated judge silently become your release authority."
    }],
    ['unit',"16.6","Regression and CI gates",{
      goal:"Run evaluation automatically when prompts, models, indexes or tools change.",
      idea:"AI systems can regress without a code compile error.",
      prove:"Create a command that runs the golden set and outputs a summary.",
      build:"Set thresholds and fail the run when quality or safety falls below them.",
      brk:"Change a prompt and verify CI catches the regression.",
      artifact:"Automated Evaluation Suite + Release Gate.",
      check:"What exact condition blocks release?",
      lens:"This is the AI equivalent of a test suite with probabilistic behavior."
    }],
    ['unit',"16.7","Evaluation release decision",{
      goal:"Combine quality, safety, latency and cost into a release decision without hiding trade-offs.",
      idea:"Shipping is a multi-dimensional decision; one aggregate score can hide unacceptable failures.",
      prove:"Define quality threshold, safety threshold, latency SLO, cost ceiling and rollback trigger.",
      build:"Run a candidate release through the gate.",
      brk:"Create a model that improves quality but violates cost or safety.",
      artifact:"Release Decision Record.",
      check:"Which threshold is non-negotiable?",
      lens:"A PM owns the decision framework even when engineers own the implementation."
    }],
    ['q','I409'],
    ['key','You need several levels of evaluation at once. A good end-to-end score can sit on top of a badly broken retriever, because a fluent model can cover for missing evidence often enough to look fine in a demo.'],
    ['tb',['Layer','Example metric','The release question it answers'],[
      ['Retrieval','Recall@k, Precision@k','Did we fetch the right evidence?'],
      ['Generation','Groundedness, task success','Did the answer use the evidence correctly?'],
      ['Tool use','Tool-selection accuracy','Did it call the right capability?'],
      ['Operations','p95 latency, cost per task','Can we afford to run it?'],
      ['Safety','Attack success rate','Can adversarial input break the controls?']
    ]],
    ['p','There are a lot of names in this area, and they are all answers to three questions: <strong>what do we test on</strong> (a fixed set you keep, real cases where you can get them), <strong>who marks it</strong> (an exact check where one is possible, a person where it matters, a model where neither scales), and <strong>what score lets it ship</strong>. Any evaluation tool you are shown is selling one of those three.'],
    ['try',{id:'ch29-stop',mins:6,min:60,rows:4,task:'Write the sentence that stops a release. Not a policy — the actual sentence, with numbers in it, that you would say in the room.',after:'If your sentence contains the word "seems", it will not stop anything. Thresholds stop releases; impressions do not.'}],
    ['key',"Once evaluation exists, we need to observe the system continuously."]
  ],
  capstone:{
    title:'A release gate',
    brief:'The gate is the deliverable that makes every other measurement in this track matter. Without it, evaluation is a report nobody is obliged to act on.',
    steps:[
      'Set the quality threshold, naming the metric, the test set and the number.',
      'Set the safety threshold, including attack success rate.',
      'Set the latency SLO and the cost ceiling per task.',
      'Set the regression tolerance: how much may a previously-passing case degrade?',
      'Define the rollback trigger and who is allowed to pull it.',
      'Run the gate against your current system and record whether it passes today.'
    ],
    done:[
      'Every threshold is a number against a named test set.',
      'The gate has been run at least once and produced a verdict.',
      'The rollback trigger names a person or a role.'
    ]
  }
},

/* --------------------------------------------------------------- 30 / bk 17 */
{
  id:'ch17o', num:30, part:5, minutes:55, labs:['cache'],
  title:'Observability and LLMOps',
  concept:'Book chapter 17. Operate what you built. When an answer is wrong, slow or expensive, a production system has to let you find out why without guessing.',
  plan:{
    first:'Trace one request by hand and time every stage with a stopwatch.',
    build:'Record request id, model and prompt version, retrieval ids, tool calls, latency, tokens, status and evaluation result.',
    brk:'Deliberately create a slow request, an expensive one and a low-quality one, then diagnose each from its trace alone.',
    artifact:'A six-panel observability specification.',
    gate:'Say which signals trigger an investigation, which trigger a rollback, and which are noise.'
  },
  needs:[
    ['Latency is something the user experiences','Chapter 11.5. A trace is how you find where it went.',11.5],
    ['Cost is measurable per request','Chapter 15 built the arithmetic this chapter instruments.',15],
    ['A release gate needs evidence','Chapter 29. Traces are where that evidence comes from in production.',29]
  ],
  words:[
    ["Trace","The record of one request’s journey through the system: what was retrieved, which prompt version ran, what each stage cost in time and tokens."],
    ["Telemetry","The measurements a running system emits about itself — timings, counts, errors, usage — gathered so somebody can see what it is doing without reading the code."],
    ["Canary release","Sending a small share of real traffic to a change before all of it."],
    ["Drift","Quality moving without anybody deploying anything — because the inputs, the documents or the provider changed underneath you."]
  ],
  takeaway:[
    'Design a trace record that can answer "why was this answer wrong?" after the fact.',
    'Treat cost as an architecture metric rather than a finance report.',
    'Name what must be versioned so a change can be rolled back.'
  ],
  story:[
    ['p','When a parcel goes missing, the courier can tell you where it was last scanned. Not because anyone expected that parcel to go missing — because they scan every parcel, everywhere, all the time. Without that, every lost parcel is a shrug.'],
    ['p','Your system will give a wrong answer one day, and somebody will ask why. Everything in this chapter exists so the answer is not “we cannot tell”.'],
    ['key','A trace is a map of one request through the system. If you can only see what went in and what came out, every diagnosis is speculation.'],
    
    ['unit',"17.1","Trace one request",{
      goal:"Build a structured trace for one AI request.",
      idea:"A trace is a timeline and evidence bundle for one execution.",
      prove:"Record request ID, model, prompt version, retrieved IDs, tools, latency, tokens and outcome.",
      build:"Persist the trace as JSON.",
      brk:"Remove one field and ask whether you could still reproduce the incident.",
      artifact:"Trace Schema v1.0.",
      check:"What minimum evidence is required for debugging?",
      lens:"Observability requirements should be written before production incidents."
    }],
    ['unit',"17.2","Latency and throughput",{
      goal:"Measure stage-level latency and distinguish p50 from p95.",
      idea:"Average latency can hide slow tails that users experience.",
      prove:"Measure retrieval, reranking, model and tool stages.",
      build:"Calculate p50 and p95 for a small run or larger sample where available.",
      brk:"Add an artificial slow dependency and identify its effect on p95.",
      artifact:"Latency Budget + p50/p95 report.",
      check:"Which stage owns the tail?",
      lens:"SLOs should map to user experience, not just server metrics."
    }],
    ['unit',"17.3","Token and cost telemetry",{
      goal:"Track input/output tokens and other variable costs at task level.",
      idea:"Cost is an architecture metric because context, model, retries and routing change spend.",
      prove:"Calculate cost per request using current provider pricing when implementing the lab.",
      build:"Compare two model/context strategies.",
      brk:"Add retries and large context to see cost growth.",
      artifact:"Unit Economics Model v1.0.",
      check:"What is cost per successful task, not merely cost per call?",
      lens:"Finance conversations become easier when every architecture choice has a measurable cost impact."
    }],
    ['unit',"17.4","Drift and feedback",{
      goal:"Detect quality changes after data, prompt, model or user behavior changes.",
      idea:"AI degradation may occur without a code change.",
      prove:"Create a baseline evaluation and compare a later sample.",
      build:"Track complaint type, no-answer rate, escalation and task success.",
      brk:"Inject a changed document format or new user phrasing.",
      artifact:"Drift/Feedback Report.",
      check:"Which signal tells you quality changed before complaints explode?",
      lens:"Online signals complement offline evaluation."
    }],
    ['unit',"17.5","Versioning and rollback",{
      goal:"Version prompts, models, indexes, schemas and tool contracts.",
      idea:"If an AI system cannot be rolled back component-wise, debugging becomes guesswork.",
      prove:"Create version IDs for prompt, model, index and tool schema.",
      build:"Run two versions side by side.",
      brk:"Simulate a bad prompt release and roll back.",
      artifact:"Version Matrix + Rollback Procedure.",
      check:"Can you identify exactly what changed?",
      lens:"Versioning is a delivery-control mechanism, not paperwork."
    }],
    ['unit',"17.6","Production dashboard",{
      goal:"Turn the telemetry into a six-panel operational view: quality, safety, latency, cost, traffic, failures.",
      idea:"A dashboard should answer “is the system healthy?” and “where do I investigate?”",
      prove:"Define metric, source, owner and threshold for each panel.",
      build:"Create a mock dashboard or spreadsheet.",
      brk:"Remove one signal at a time and see which incident becomes harder to diagnose.",
      artifact:"Six-Panel Observability Specification.",
      check:"Which alerts should page a human and which should only be monitored?",
      lens:"Operational clarity is a PM responsibility as much as a platform responsibility."
    }],
    ['q','I410'],
    ['key','Cost is an architecture metric, not a monthly surprise. Model one user task end to end — input tokens, output tokens, embedding, retrieval, tool and API calls — and you can compare two designs before building either.'],
    ['p','The names in this area — canary release, shadow traffic, rollback, drift — all come from the same instinct: change one thing at a time, let a few people meet it first, keep the old version ready, and keep watching after you ship. That instinct is the chapter. The names are in the list at the end.'],
    ['key','The operational pattern that prevents most incidents: change one variable at a time; version prompts, models, indexes and tool contracts; keep every artifact rollbackable; and never let a prompt update bypass evaluation. That last one is the rule people break first, because a prompt edit does not feel like a deploy.'],
    ['try',{id:'ch30-slower',mins:6,min:60,rows:4,task:'Your assistant got slower this week and nobody deployed anything. Name three things that could have changed.',after:'Traffic mix, document volume, and the provider’s own latency. None of them are in your repository, which is why they have to be in your dashboard.'}],
    ['key',"The next chapter treats the same system as an adversarial target."]
  ],
  capstone:{
    title:'A six-panel production dashboard, specified',
    brief:'Quality, safety, latency, cost, traffic and failures. The discipline is naming the source for every panel — a panel with no source is a wish.',
    steps:[
      'Quality: which metric, computed from what, how often.',
      'Safety: attack success rate and refusal behaviour, from which test set.',
      'Latency: p50 and p95, broken down by stage.',
      'Cost: per task and per day, with the components visible.',
      'Traffic: volume and mix, so you can see the input change.',
      'Failures: error classes with counts, not one error rate.',
      'For each panel, write the threshold that triggers investigation and the one that triggers rollback.'
    ],
    done:[
      'Every panel names its data source.',
      'Latency is broken down by stage, not reported as one number.',
      'Each panel has an investigate threshold and a rollback threshold.'
    ]
  }
},

/* --------------------------------------------------------------- 31 / bk 18 */
{
  id:'ch18s', num:31, part:5, minutes:55, labs:['injection','trifecta'],
  title:'Security, safety and governance',
  concept:'Book chapter 18. Assume the model will be manipulated. The application, the retrieved content, the tools, the identity layer and the data pipeline are all part of the attack surface now.',
  plan:{
    first:'Put a malicious instruction inside a document your own system retrieves, and test whether it can override the task or extract a secret.',
    build:'Add trust boundaries, least privilege, input validation, secret isolation, audit logging and confirmation steps.',
    brk:'Run prompt injection, indirect injection, tool abuse, data leakage and excessive-agency tests.',
    artifact:'A security report and an AI risk register.',
    gate:'Explain why retrieved content is untrusted input, to someone who thinks it is their own data.'
  },
  needs:[
    ['Injection has no clean fix','Chapter 13 established it. This chapter builds the controls around it.',13],
    ['Tools are a security boundary','Chapter 25. Least privilege is what turns that into practice.',25],
    ['Retrieval can be poisoned','Chapter 7.5 made you do it to your own system.',7.5]
  ],
  words:[
    ["Prompt injection","Text that reaches the model as data and is followed as an instruction. The model cannot reliably tell the two apart, so the boundary has to be enforced around it."],
    ["Indirect injection","The same attack arriving through content the system retrieved rather than through what the user typed."],
    ["Excessive agency","Giving a system more permission, reach or autonomy than its task requires."],
    ["Risk register","A table where every row ends in a test that has been run, rather than in a control that has been described."]
  ],
  takeaway:[
    'Explain why retrieved content is untrusted input regardless of who owns the document.',
    'Apply least privilege to an agent and show what breaks.',
    'Produce a risk register where every control has evidence beside it.'
  ],
  story:[
    ['p','If somebody slips a note into a stack of paperwork that says “approve this one without checking”, the problem is not that your clerk cannot read. It is that nothing in the process distinguishes an instruction from a document.'],
    ['p','That is the whole of AI security in one image, and it is why almost none of this chapter is about the model. The model reads everything you hand it with equal trust. What decides whether that is dangerous is the system around it — what it is handed, and what it is allowed to do next.'],
    ['key','Prompt injection is an input trust problem. The model cannot reliably tell an instruction from data, so the boundary has to be enforced by the system that assembles the context — not requested politely in the system prompt.'],
    
    ['unit',"18.1","Prompt injection",{
      goal:"Understand direct and indirect prompt injection as untrusted-input attacks.",
      idea:"Instructions embedded in user or retrieved content can compete with application instructions.",
      prove:"Place malicious instructions in a document and test the RAG assistant.",
      build:"Separate trusted control instructions from untrusted evidence.",
      brk:"Try to make the model reveal a secret or invoke a tool through retrieved text.",
      artifact:"Prompt Injection Test Report.",
      check:"What control stopped the attack: model behavior or application policy?",
      lens:"Never describe prompt text alone as a security boundary."
    }],
    ['unit',"18.2","Sensitive information disclosure",{
      goal:"Protect secrets, PII and confidential data in prompts, retrieval and traces.",
      idea:"A model can only protect information if the application controls what it receives and can return.",
      prove:"Create a test corpus with synthetic sensitive fields.",
      build:"Apply filtering/redaction before model access and log access decisions.",
      brk:"Ask for another user’s data through natural language and tool calls.",
      artifact:"Data Leakage Test Matrix.",
      check:"Where is authorization enforced?",
      lens:"Privacy requirements must be mapped to data flows, not just policy documents."
    }],
    ['unit',"18.3","Improper output handling",{
      goal:"Validate model output before passing it to downstream systems.",
      idea:"Generated text becomes dangerous when interpreted as trusted commands, SQL, HTML or business data.",
      prove:"Create a structured output and validate it against allowed values.",
      build:"Use allowlists and typed interfaces before execution.",
      brk:"Inject malicious strings into generated fields.",
      artifact:"Output Validation Checklist + tests.",
      check:"What downstream component could interpret the output?",
      lens:"Treat model output as untrusted input."
    }],
    ['unit',"18.4","Excessive agency",{
      goal:"Limit the tools and actions available to autonomous systems.",
      idea:"More permissions increase blast radius.",
      prove:"Classify each tool by privilege and reversibility.",
      build:"Remove unnecessary tools and compare task success.",
      brk:"Try a task that requests an irreversible action.",
      artifact:"Agency Permission Matrix.",
      check:"What is the maximum damage if the model is wrong?",
      lens:"Autonomy should be bounded by business risk."
    }],
    ['unit',"18.5","Retrieval authorization",{
      goal:"Enforce ACLs and tenant boundaries before evidence reaches generation.",
      idea:"Correct retrieval from the wrong tenant is a security breach.",
      prove:"Create two users and two document groups.",
      build:"Apply metadata filters server-side.",
      brk:"Attempt cross-tenant and stale-permission retrieval.",
      artifact:"ACL Retrieval Test Report.",
      check:"Can the model ever see evidence it is not authorized to access?",
      lens:"The model should not be asked to “remember” authorization rules as the only control."
    }],
    ['unit',"18.6","Audit logging",{
      goal:"Capture enough evidence to reconstruct security-relevant actions.",
      idea:"An audit trail should show who, what, when, which policy, which tool, and what happened.",
      prove:"Design an audit record for a tool action.",
      build:"Write approval and execution events separately.",
      brk:"Modify a payload after approval and verify the mismatch is visible.",
      artifact:"Audit Log Schema + sample trail.",
      check:"Could an incident responder reconstruct the action?",
      lens:"Auditability is part of production readiness."
    }],
    ['unit',"18.7","Governance and risk register",{
      goal:"Translate security and AI risks into owners, controls and evidence.",
      idea:"Governance becomes useful when each risk has a testable control and owner.",
      prove:"Create risk, impact, likelihood, control, owner, evidence and residual risk fields.",
      build:"Review the register with the capstone architecture.",
      brk:"Mark one control “policy only” and ask what evidence is missing.",
      artifact:"AI Risk Register.",
      check:"Which risks remain after controls?",
      lens:"A risk register is an operational artifact, not a compliance decoration."
    }],
    ['unit',"18.8","Security release gate",{
      goal:"Turn red-team findings into release criteria.",
      idea:"Security tests must block release when the residual risk exceeds the agreed threshold.",
      prove:"Define mandatory checks for injection, leakage, authorization and unsafe actions.",
      build:"Run the test suite before and after a prompt/model change.",
      brk:"Create a change that improves quality but weakens security.",
      artifact:"Security Go/No-Go Checklist.",
      check:"What is an automatic blocker?",
      lens:"Security belongs in the same release process as quality and cost."
    }],
    ['q','I411'],
    ['key','Least privilege applies to agents too. An agent with a tool it never needs is an agent that can be persuaded to use it.'],
    ['tb',['Risk','Example control','The evidence that it works'],[
      ['Prompt injection','Content separation, tool allowlist, confirmation','Red-team test results'],
      ['Data leakage','Access-aware retrieval, redaction, log controls','Access tests and trace samples'],
      ['Excessive agency','Least privilege plus approval gates','Tool policy and approval logs'],
      ['Model drift or deprecation','Versioning plus a regression suite','Release and evaluation report'],
      ['Unsafe output','Policy filter and human escalation','Safety test set results']
    ]],
    ['key','A safeguard nobody has ever tested is just a sentence in a document. Write beside each one the test that proves it works — and then run it.'],
    ['try',{id:'ch31-evidence',mins:6,min:60,rows:4,task:'Pick one control your organisation already claims to have. Write down what evidence would prove it works, and whether that evidence exists.',after:'The gap between the claim and the evidence is the actual risk position. That gap is what a risk register is for.'}],
    ['key',"Now convert the technical system into a product specification."]
  ],
  capstone:{
    title:'An AI risk register with evidence',
    brief:'Asset, threat, impact, likelihood, control, owner, test, residual risk. Every row ends in a test, because a register whose rows end in a control is a list of intentions.',
    steps:[
      'List the assets: documents, credentials, tools, user data, traces.',
      'For each, name the threats you have actually reproduced, not the ones you read about.',
      'Record impact and likelihood in whatever scale your organisation uses.',
      'Name the control and the owner — a person or role, not a team.',
      'Name the test that proves the control, and run it.',
      'Record the residual risk that remains after the control, honestly.',
      'Write the go/no-go checklist for a customer-facing agent: identity, secrets, tool permissions, audit trails, data retention, provider policy, incident response.'
    ],
    done:[
      'Every threat listed has been reproduced at least once.',
      'Every control has a test that has been run.',
      'Residual risk is stated rather than left implied.'
    ]
  }
},

/* --------------------------------------------------------------- 32 / bk 19 */
{
  id:'ch19pm', num:32, part:5, minutes:55, labs:['prdial'],
  title:'AI product management',
  concept:'Book chapter 19. Writing specifications for a probabilistic system — the chapter that turns the technical literacy of this track into the role.',
  plan:{
    first:'Take "return the correct document" and convert it into an acceptance criterion you could actually test.',
    build:'Write a compact AI PRD: problem, baseline, scope, context, tools, failure modes, the human role, evaluation, safety, latency, cost, rollout and rollback.',
    brk:'Attack it with three scenarios — a wrong answer, an over-refusal, and a harmful action.',
    artifact:'An AI PRD, a release gate and a metric map.',
    gate:'An engineer can build from it and a leader can understand the trade-off it makes.'
  },
  needs:[
    ['Quality is a measured number against a test set','Chapter 29 built the gate this PRD points at.',29],
    ['Failure costs differ by use case','Chapter 6. It is a governance call, not a technical one.',6],
    ['What the user sees when it is wrong','Chapter 20 designed the failure surface.',20]
  ],
  words:[
    ["AI acceptance criterion","A metric, a named test set and a stated tolerance — because “always correct” is not something a probabilistic system can be held to."],
    ["Product metric","What the user achieved. Kept separate from system quality metrics and from operating cost, because mixing them makes a dashboard unable to answer anything."],
    ["Rollback trigger","The specific, observable condition that causes a change to be withdrawn, written so someone can act on it without you."],
    ["Non-goal","Something you have deliberately decided not to do, written down so it cannot be assumed back in later."]
  ],
  takeaway:[
    'Write an acceptance criterion as a distribution with a tolerance, not a promise.',
    'Separate business outcomes from model metrics from operating metrics.',
    'Design the three UI states an AI feature needs.'
  ],
  story:[
    ['p','“The train will arrive at 9:04” is a promise a railway cannot keep, and everybody knows it. So real railways publish something else: the share of trains arriving within a stated few minutes, measured, every month. That number is honest, and you can actually plan around it.'],
    ['p','AI features need the same move. “It returns the right document” is a promise nothing probabilistic can keep. What you can write down is: how often, measured on which set of cases, and what the system does the rest of the time — because the rest of the time is never zero.'],
    ['key','“Done” is a distribution, not a single deterministic output.'],
    
    ['unit',"19.1","AI problem framing",{
      goal:"Decide whether AI is justified and define the user outcome.",
      idea:"Start with the workflow and pain, not the model.",
      prove:"Write current process, user pain, baseline and measurable outcome.",
      build:"Build a non-AI baseline where possible.",
      brk:"Compare the AI idea with a deterministic alternative.",
      artifact:"Problem Framing One-Pager.",
      check:"Why AI instead of ordinary software?",
      lens:"This prevents “AI-first” solutioning."
    }],
    ['unit',"19.2","AI acceptance criteria",{
      goal:"Convert vague “correctness” into measurable thresholds.",
      idea:"AI output is variable, so “done” must define distributions and tolerances.",
      prove:"Write retrieval, generation, safety, latency and cost criteria.",
      build:"Attach each criterion to a test set and measurement method.",
      brk:"Create a case where quality improves but latency violates the SLO.",
      artifact:"AI Acceptance Criteria Sheet.",
      check:"Can engineering run the test without asking what “good” means?",
      lens:"Acceptance criteria are the contract between product and engineering."
    }],
    ['unit',"19.3","Failure-first UX",{
      goal:"Design around uncertainty, ambiguity and failure rather than hiding them.",
      idea:"A good AI UX makes the system’s limits understandable and actionable.",
      prove:"Design confident, uncertain and failed states.",
      build:"Add citations, clarification and fallback paths.",
      brk:"Remove citations/uncertainty cues and compare user interpretation.",
      artifact:"Failure-First UX Flow.",
      check:"What does the user do when the AI cannot answer?",
      lens:"The fallback is part of the feature, not an afterthought."
    }],
    ['unit',"19.4","Human-in-the-loop UX",{
      goal:"Specify when a human reviews, approves, edits or overrides AI output.",
      idea:"Human involvement should be targeted at high-risk or ambiguous transitions.",
      prove:"Map decision points and approval payloads.",
      build:"Measure review time and override rate.",
      brk:"Create an approval that no longer matches the action.",
      artifact:"HITL Decision Map.",
      check:"What does the human uniquely contribute?",
      lens:"HITL should reduce risk without becoming meaningless rubber-stamping."
    }],
    ['unit',"19.5","Metrics and experimentation",{
      goal:"Separate business outcomes from model and operational metrics.",
      idea:"Task completion is not the same as groundedness, and both differ from cost.",
      prove:"Create a metric tree with business, quality, safety, latency and cost layers.",
      build:"Define an A/B or controlled comparison where appropriate.",
      brk:"Improve a model metric while worsening the business outcome.",
      artifact:"Metric Map + Experiment Plan.",
      check:"Which metric decides whether the product is useful?",
      lens:"A PM must prevent teams from optimizing a proxy."
    }],
    ['unit',"19.6","Unit economics",{
      goal:"Model token, retrieval, tool, infrastructure and human-review costs.",
      idea:"The real unit is often cost per successful task, not cost per request.",
      prove:"Create a spreadsheet with volume, token usage, model cost, retries, tools and review time.",
      build:"Compare model routing and caching scenarios.",
      brk:"Increase context or retry rate and see the margin effect.",
      artifact:"AI Unit Economics Model.",
      check:"What happens at 10× volume?",
      lens:"Cost belongs in architecture decisions from day one."
    }],
    ['unit',"19.7","AI PRD and release plan",{
      goal:"Write a PRD an engineer can implement and a leader can evaluate.",
      idea:"An AI PRD must specify context, failure behavior, evaluation and operating constraints.",
      prove:"Complete problem, scope, inputs, context, tools, model behavior, failures, human role, metrics, safety, latency, cost, rollout and rollback.",
      build:"Run a review against the system you built.",
      brk:"Ask a reviewer to find a failure your PRD did not specify.",
      artifact:"AI PRD + Release Gate + Metric Map.",
      check:"Can the PRD answer “what happens when it is wrong?”",
      lens:"This becomes one of your strongest portfolio artifacts."
    }],
    ['q','I412'],
    ['p','Here is a spec outline you can copy. It is long because each line is a question somebody will ask you later, and answering it now is cheaper:'],
    ['n',['The user’s problem, and how it is handled today without AI.',
      'Why AI is the right answer to it — and what is explicitly out of scope.',
      'What goes in: the inputs, the context, the tools it may call.',
      'How it fails, and what a person does when it does.',
      'The test set, and the scores that count as good enough.',
      'Safety limits, the speed it must hold, the cost it must stay under.',
      'How it rolls out, what you watch afterwards, and what triggers pulling it back.',
      'Whose name is on it.']],
    ['key','Keep the metric families apart. Task completion rate is a product outcome. Groundedness is a system quality metric. Token cost is an operating metric. Complaint rate is a user signal. Mixing them is how a dashboard ends up unable to answer any question at all.'],
    ['tb',['Decision','The business question','The AI evidence that settles it'],[
      ['Build or buy','Will it create enough value?','Capability, evaluation and total cost of ownership'],
      ['Ship or hold','Is failure cheap enough?','Quality, safety and incident readiness'],
      ['Model A or B','Which wins for this task?','A task-specific benchmark'],
      ['Human in the loop','Where is autonomy unsafe?','Error cost and reversibility']
    ]],
    ['try',{id:'ch32-trigger',mins:6,min:60,rows:4,task:'Write the one-line rollback trigger for a feature you would like to ship. It has to be specific enough that someone could act on it at 2am without calling you.',after:'If it needs your judgement to interpret, it is not a trigger. It is a hope.'}],
    ['key',"Next, we turn the product into a production architecture and delivery plan."]
  ],
  capstone:{
    title:'An AI PRD for a policy assistant',
    brief:'Two pages. An engineer should be able to build from it and a leader should be able to see what trade-off is being made and agree to it deliberately.',
    steps:[
      'State the user problem and the non-AI baseline it has to beat.',
      'Define scope and, explicitly, the non-goals.',
      'Specify context, tools and the human role in the loop.',
      'List the failure modes you have actually observed in this course.',
      'Name the evaluation dataset and write the five-line evaluation plan.',
      'Set quality bars, safety constraints, latency and cost goals.',
      'Write the rollout plan and a one-line rollback trigger.',
      'Name the owner.'
    ],
    done:[
      'Every quality claim is a number against a named test set.',
      'Non-goals are written down.',
      'The rollback trigger could be acted on without you.'
    ]
  }
},

/* --------------------------------------------------------------- 33 / bk 20 */
{
  id:'ch20d', num:33, part:5, minutes:55, labs:['costmodel'],
  title:'Architecture, delivery and vendor strategy',
  concept:'Book chapter 20. From prototype to production — and defending the system, the provider and the cost outside the notebook.',
  plan:{
    first:'Write the production delta for your prototype from memory, before looking anything up.',
    build:'Add architecture decisions, environments, CI/CD, responsibilities, SLOs, security, rollback and vendor exit thinking.',
    brk:'Model three shocks — a provider outage, ten times the traffic, and a doubling of token price.',
    artifact:'A technical decision pack: architecture, alternatives, evaluation, security, cost and rollout.',
    gate:'Defend build-versus-buy and your provider choice with weighted criteria rather than preference.'
  },
  needs:[
    ['Build or buy is a decision with criteria','Chapter 18.5 framed it; here it gets weighted.',18.5],
    ['Cost per task is computable','Chapter 30 instrumented it.',30],
    ['A release gate decides what ships','Chapter 29.',29]
  ],
  words:[
    ["Production delta","The list of everything a working prototype does not yet have: auth, limits, retries, persistence, monitoring, secrets, backups, deployment, rollback."],
    ["Latency budget","The total time a user will wait, divided across the stages that consume it."],
    ["Architecture decision record","A short note saying what was decided, what the alternatives were, and why — written when the decision is made, not reconstructed afterwards."],
    ["Exit cost","What it would take to leave a provider. Usually the least examined column in a vendor comparison and the one you live inside longest."]
  ],
  takeaway:[
    'List what a prototype is missing before it can be production.',
    'Treat latency as a budget spent across a chain of stages.',
    'Score providers on more axes than price and quality.'
  ],
  story:[
    ['p','A dish you cook well for two people is not a menu item. The recipe survives; almost nothing else does — you now need consistent supply, a price that works, someone else able to cook it, and a plan for the night four hundred people order it.'],
    ['p','Everything you have built so far runs because you are the only user and you forgive it. Production takes away both of those at once. This chapter is the list of what that actually costs.'],
    
    ['unit',"20.1","Production delta",{
      goal:"Inventory everything missing between notebook and service.",
      idea:"Production adds identity, persistence, retries, queues, monitoring, secrets, deployment, backups, ACLs and rollback.",
      prove:"Write a production delta list from your prototype.",
      build:"Group items by must-have, should-have and later.",
      brk:"Remove one control and describe the resulting failure.",
      artifact:"Production Delta Checklist.",
      check:"What would prevent you from going live tomorrow?",
      lens:"This is the bridge between PM delivery and engineering reality."
    }],
    ['unit',"20.2","Reliability and resilience",{
      goal:"Design for provider errors, dependency failures, retries and graceful degradation.",
      idea:"AI systems depend on services outside your control.",
      prove:"Create failure scenarios for model, retrieval, tool and network.",
      build:"Define timeout, retry, fallback and user-visible behavior.",
      brk:"Simulate provider outage and rate limiting.",
      artifact:"Reliability/Fallback Matrix.",
      check:"What is the user experience during partial failure?",
      lens:"A graceful degraded mode can be more valuable than a larger model."
    }],
    ['unit',"20.3","Scalability and queues",{
      goal:"Understand synchronous versus asynchronous work and scaling bottlenecks.",
      idea:"Not every AI task belongs in the request/response path.",
      prove:"Map a long-running document ingestion job.",
      build:"Separate upload, processing, indexing and status reporting.",
      brk:"Simulate 10× workload and identify the bottleneck.",
      artifact:"Scalability Sketch + Capacity Assumptions.",
      check:"Which component scales first and why?",
      lens:"Capacity planning should include model limits and external quotas."
    }],
    ['unit',"20.4","Deployment and environments",{
      goal:"Separate development, staging and production with controlled configuration.",
      idea:"A production AI system needs reproducible configuration and safe rollout.",
      prove:"Define environment variables, model versions, prompts and index versions per environment.",
      build:"Create a deployment checklist and rollback command/process.",
      brk:"Deploy a deliberately bad prompt to staging and verify production remains unchanged.",
      artifact:"Environment Strategy + Rollout Checklist.",
      check:"What can change without a code deployment?",
      lens:"Configuration is part of the system and must be versioned."
    }],
    ['unit',"20.5","CI/CD and AI regression",{
      goal:"Combine software tests with evaluation gates.",
      idea:"A green build is not enough if the model behavior regressed.",
      prove:"Add deterministic tests plus the golden evaluation suite to CI.",
      build:"Define blocking thresholds.",
      brk:"Change model/prompt/index and verify CI detects the regression.",
      artifact:"AI CI/CD Pipeline Spec.",
      check:"What evidence is required before release?",
      lens:"This is how probabilistic systems become manageable delivery units."
    }],
    ['unit',"20.6","Architecture Decision Records",{
      goal:"Record alternatives, decision, evidence, consequences and revisit triggers.",
      idea:"Architecture decisions are hypotheses with trade-offs, not eternal truths.",
      prove:"Write ADRs for model, retrieval strategy, workflow/agent and storage.",
      build:"Include rejected alternatives and evidence.",
      brk:"Create a new requirement that invalidates one decision.",
      artifact:"ADR Set.",
      check:"What would cause you to revisit the decision?",
      lens:"ADRs protect institutional memory and make technical PM reasoning visible."
    }],
    ['unit',"20.7","Vendor and TCO strategy",{
      goal:"Evaluate provider/model choices across quality, cost, region, data controls, tooling and exit cost.",
      idea:"Vendor choice is a multi-objective architecture decision.",
      prove:"Score at least three realistic options or two providers plus a self-hosted hypothesis.",
      build:"Estimate migration and exit cost.",
      brk:"Model a 2× price change or capability removal.",
      artifact:"Model/Vendor Scorecard + Exit Plan.",
      check:"What is the cost of switching?",
      lens:"Vendor lock-in is an economic and architectural risk."
    }],
    ['unit',"20.8","Technical decision pack",{
      goal:"Package the whole system for a design review.",
      idea:"A strong PM-engineer artifact lets different audiences inspect the same evidence at different depths.",
      prove:"Create problem, baseline, architecture, alternatives, evaluation, security, cost, rollout and risks.",
      build:"Add one architecture diagram and one decision table.",
      brk:"Ask a reviewer to challenge three assumptions.",
      artifact:"10-slide Technical Decision Pack.",
      check:"Can you defend every major box and arrow?",
      lens:"This is the portfolio bridge to real AI technical PM interviews."
    }],
    ['key','Latency is a budget spent across the whole chain. Retrieval, reranking, tool calls, model reasoning and final generation each take a share, and the largest contributor is rarely the one people optimise first.'],
    ['q','I413'],
    ['tb',['Layer','Typical responsibility','The question to ask about it'],[
      ['Client and UI','User interaction','What uncertainty or approval must the user see?'],
      ['Orchestrator','State and routing','Where would determinism be safer?'],
      ['Model layer','Reasoning and generation','What evidence supports this model choice?'],
      ['Knowledge and tools','Data and actions','Who can access what, and how is it audited?'],
      ['Evaluation','Quality gates','What blocks a release?'],
      ['Observability','Runtime evidence','How would we know it had degraded?'],
      ['Platform','Deploy, scale, secure','How does this survive traffic and failure?']
    ]],
    ['key','Vendor selection is a multi-objective decision: quality, data controls, latency, cost, region, tooling, interoperability, support and exit cost. A provider that wins on the first two and loses badly on the last one is a decision you make once and live inside for years.'],
    ['p','Teams that ship AI well tend to keep four dull habits, and the names attached to them matter less than the habits: <strong>write down why you chose things</strong>, so nobody re-litigates it in six months; <strong>have somewhere safe to try changes</strong> before real users meet them; <strong>be able to switch it off</strong>, quickly, without a meeting; and <strong>know what you would do</strong> if the provider changed the deal tomorrow.'],
    ['try',{id:'ch33-reprice',mins:6,min:60,rows:4,task:'Your provider doubles its price on ninety days’ notice. Write what you would do in the first week.',after:'If the answer requires re-running an evaluation you do not have, the exit plan is the evaluation set. That is usually the finding.'}],
    ['key',"The capstone now assembles the whole system into one coherent portfolio project."]
  ],
  capstone:{
    title:'A ten-slide technical decision pack',
    brief:'Problem, baseline, proposed architecture, alternatives, evaluation, security, cost, rollout, risks, decision. Built from memory first, then checked — because the parts you cannot produce from memory are the parts you do not yet understand.',
    steps:[
      'State the problem and the baseline it must beat.',
      'Draw the proposed architecture on one slide.',
      'Show two alternatives you rejected and why.',
      'Put the evaluation results in, with the test set named.',
      'Summarise the security position and the residual risks.',
      'Give cost per task and cost at expected volume.',
      'Give the rollout plan and the rollback trigger.',
      'Score three providers across nine criteria, weighted.',
      'End with the decision and who owns it.'
    ],
    done:[
      'The alternatives are real — each had a reason to be considered.',
      'The provider scorecard includes exit cost.',
      'Someone else could present the pack from the slides alone.'
    ]
  }
},

/* --------------------------------------------------------------- 34 / bk 21 */
{
  id:'ch21cap', num:34, part:5, minutes:90, labs:['redmap'],
  title:'Capstone — build, break, measure, defend',
  concept:'Book chapter 21. One coherent system rather than a folder of demos, and a findings document that proves what happened when you tested it.',
  plan:{
    first:'Do not start with slides. Create the repository, the issue list, the evaluation dataset and the smallest vertical slice that works end to end.',
    build:'Expand it into one Applied AI operations or policy copilot: permission-aware retrieval, structured outputs, two tools, a bounded agent step, one non-text input, an evaluation harness, tracing and cost instrumentation, and security controls.',
    brk:'Reproduce at least ten failure classes: unanswerable query, poisoned document, prompt injection, unauthorised tool request, malformed tool call, stale permission, multilingual query, poor scan or audio, a model swap, and a traffic or cost increase.',
    artifact:'The running system plus an evidence pack: PRD, architecture, threat model, evaluation plan, dashboard, rollout and rollback plan, vendor scorecard and an executive explanation.',
    gate:'Show three failures you found yourself, three quantified improvements, the residual risks, and your explicit non-goals.'
  },
  needs:[
    ['Everything in this track','The capstone is the integration, so it depends on all of it.',33],
    ['A release gate and a risk register','Chapters 29 and 31 produce the evidence this defends with.',31]
  ],
  words:[
    ["Findings document","A rough, factual record of what broke, the evidence, the root cause, the fix, and what you deliberately did not solve. The opposite of a brochure."],
    ["Failure class","A kind of failure rather than an instance of one — what makes ten tests meaningful instead of ten anecdotes."],
    ["Residual risk","What remains after a control is in place, stated rather than implied."],
    ["Evidence pack","The set of artifacts that let somebody else check your claims instead of trusting them."]
  ],
  takeaway:[
    'Explain a system you built from first principles, without hiding behind a framework.',
    'Show before-and-after numbers for failures you found and fixed.',
    'State what you deliberately did not solve.'
  ],
  story:[
    ['p','Nobody hires a cook because of the certificate on the wall. They ask what you can make, and then — if they are any good — what goes wrong when you make it, and what you do about that.'],
    ['p','Your credential here is the same shape. Not a certificate: a system you can explain without hiding behind anyone’s framework, and an honest page of what broke when you tested it.'],
    ['c','The brief','Build one applied AI system combining at least four capabilities from this book. The recommended baseline: permission-aware retrieval, tool calling, a bounded agent step, evaluation, tracing, and security tests. One coherent system — deliberately not a collection of disconnected demos.'],
    ['lab','redmap'],
    ['tb',['Stage','Required evidence'],[
      ['Problem','User, pain, baseline, measurable outcome'],
      ['Architecture','Diagram, decision log, trust boundaries'],
      ['Build','Working code, tests, versioned prompts and config'],
      ['Break','At least ten deliberate failure tests'],
      ['Measure','Evaluation dataset, metrics, cost and latency'],
      ['Secure','Threat model, controls, red-team results'],
      ['Operate','Trace schema, dashboard, rollback plan'],
      ['Productize','PRD, rollout, owner, ROI hypothesis'],
      ['Explain','Five-minute executive explanation, twenty-minute technical defence']
    ]],
    ['key','A portfolio project becomes credible when you can explain the failures. Anyone can show a system that works on the demo path.'],
    
    ['unit',"21.1","Define the problem and PRD",{
      goal:"Select one enterprise use case and make the acceptance criteria measurable.",
      idea:"A capstone becomes credible when the problem and failure cost are clear.",
      prove:"Choose: enterprise policy/compliance intelligence, developer productivity workflow, or controlled customer operations workflow.",
      build:"Write user, pain, baseline, scope, non-goals, data, tools, risks and metrics.",
      brk:"Challenge the idea with “why not deterministic software?”",
      artifact:"Capstone AI PRD.",
      check:"Can you state the business outcome in one sentence?",
      lens:"This is the product anchor."
    }],
    ['unit',"21.2","Build the vertical slice",{
      goal:"Create the smallest end-to-end working system before adding sophistication.",
      idea:"A vertical slice proves architecture across boundaries.",
      prove:"Implement input ® retrieval/context ® model ® structured answer ® citation.",
      build:"Add one tool only when needed.",
      brk:"Use an unanswerable query and record the baseline failure.",
      artifact:"Running repository + architecture v1.",
      check:"Can you run the system from a clean environment?",
      lens:"A working small system beats a large diagram."
    }],
    ['unit',"21.3","Add evaluation and observability",{
      goal:"Turn the capstone into a measurable system.",
      idea:"Every change should leave evidence.",
      prove:"Create 30–50 evaluation cases and traces.",
      build:"Add retrieval, answer, tool, safety, latency and cost measurements.",
      brk:"Run a model/prompt/index change and reproduce the regression.",
      artifact:"Golden dataset, evaluation harness and observability report.",
      check:"Can you explain why the latest version is better?",
      lens:"This is where the project becomes engineering evidence."
    }],
    ['unit',"21.4","Break it deliberately",{
      goal:"Reproduce at least ten failure classes.",
      idea:"A portfolio project is more credible when you can explain what broke.",
      prove:"Test unanswerable query, poisoned document, prompt injection, unauthorized tool, malformed tool call, stale permission, multilingual input, poor scan/audio, model swap and traffic/cost increase.",
      build:"For each, capture evidence, root cause and control.",
      brk:"Do not fix immediately; first preserve the failure.",
      artifact:"Security/red-team report + failure findings table.",
      check:"Which three failures surprised you?",
      lens:"Your failure log is often more valuable than your happy-path demo."
    }],
    ['unit',"21.5","Optimize and quantify",{
      goal:"Apply targeted fixes and measure before/after.",
      idea:"Optimization is meaningful only when the delta is visible.",
      prove:"Try reranking, prompt restructuring, schema validation, caching, routing or context reduction where justified.",
      build:"Change one variable at a time and rerun the relevant eval slice.",
      brk:"Keep a fix that improves one metric but worsens another and document the trade-off.",
      artifact:"Before/After Optimization Report + ADRs.",
      check:"Which improvement is statistically or operationally meaningful for your sample?",
      lens:"Avoid “optimization theater.”"
    }],
    ['unit',"21.6","Defend the system",{
      goal:"Present the architecture, evidence, security, cost and residual risk to two audiences.",
      idea:"The final skill is not building; it is explaining and defending the system.",
      prove:"Prepare a five-minute executive briefing and twenty-minute technical defense.",
      build:"Include three failures, three quantified improvements, residual risks and explicit non-goals.",
      brk:"Have a peer challenge your model choice, agent choice, security and cost assumptions.",
      artifact:"Final repository, architecture, PRD, risk register, evaluation pack, observability dashboard, vendor scorecard and executive deck.",
      check:"Can you explain every major decision without saying “the framework handles it”?",
      lens:"This is the credential you carry into interviews and design reviews."
    }],
    ['q','I414'],
    ['p','You are done when all of this is true:'],
    ['l',['It runs on a machine that is not yours.',
      'Anyone can re-run the tests and get the same numbers.',
      'You broke it in at least three real ways, on purpose.',
      'Three of your fixes have a before and an after number.',
      'You attacked your own safeguards and wrote down what happened.',
      'You know how to take it back off if it goes wrong.',
      'You can explain every big choice without saying “the framework handles that”.']],
    ['key','Final self-test, from memory: why the model is stateless; why retrieval can fail; why embeddings help; why retrieval never naturally says no; why top-k is a trade-off; when a workflow beats an agent; why tools are a security boundary; why evaluation must precede release; why tracing matters; how to calculate cost per task; and what makes an AI specification different from a normal one.'],
    ['key',"After this chapter, the appendices turn the artifacts into reusable portfolio templates."]
  ],
  capstone:{
    title:'Applied AI findings — what I built, what broke, what the evidence says',
    brief:'The single artifact that carries everything in this course. Keep it rough and factual; a findings document that reads like a brochure is not one.',
    steps:[
      'Ship the repository with a README that works from a clean machine.',
      'Include the architecture diagram and the decision log.',
      'Include 30 to 50 evaluation cases and their results.',
      'Include the retrieval and end-to-end numbers, before and after your fixes.',
      'Include the security attack results and the trace samples.',
      'Include cost and latency measurements at expected volume.',
      'Include the PRD, the risk register, the vendor scorecard and the rollout and rollback plan.',
      'Close with the residual risks and the explicit non-goals.'
    ],
    done:[
      'Three failures you found yourself, each with evidence.',
      'Three fixes with before-and-after numbers.',
      'A five-minute explanation a non-technical leader could repeat.'
    ]
  }
}

];

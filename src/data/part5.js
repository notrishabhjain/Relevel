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
    ['p','You have spent twenty chapters treating the model as the interesting part. For the rest of this track the interesting part is everything around it, so this chapter rebuilds the reflexes you need to look at that surrounding machinery and see structure instead of fog.'],
    ['c','Why this comes first','Applied AI work expects hands-on contact with APIs, Python, cloud services, retrieval, evaluation and production systems. You cannot challenge an architecture if JSON, HTTP, environment variables, tests and logs still feel like someone else\u2019s language. This is the floor, not the ceiling.'],
    ['key','An AI system is a software system with a probabilistic component. Everything you already know about software going wrong still applies \u2014 and now there is one more thing that can go wrong, quietly, without raising an error.'],
    ['do','Make request-response-JSON-field boring',[
      ['p','Call a public endpoint and pull one field out of what comes back. No AI involved. The point is to make the shape of the thing familiar enough to stop noticing it.'],
      ['code','import requests\n\nr = requests.get(\n  "https://api.github.com/repos/openai/openai-python")\nprint(r.status_code)\nprint(r.json()["full_name"])'],
      ['x','<code>200</code>, then <code>openai/openai-python</code>. That is the whole shape of every call you have made in this course: a status that says whether it worked, and a body you reach into for the part you wanted.']
    ]],
    ['q','I401'],
    ['p','The second reflex is about what happens when the shape is not what you expected. An AI application is assembled out of contracts \u2014 this field will be here, it will be a number, the list will not be empty \u2014 and every one of those is an assumption that will eventually be wrong in production.'],
    ['do','Break a contract on purpose',[
      ['p','Reach for a field that is not there, and catch the failure rather than letting it travel.'],
      ['code','data = {"status": "ok", "items": [1, 2, 3]}\nprint(type(data), type(data["items"]))\n\ntry:\n    print(data["missing"])\nexcept KeyError as e:\n    print("contract failure:", e)'],
      ['x','A clear <code>KeyError</code>. That is the good outcome. The dangerous version is the system that finds nothing there, substitutes a blank, and carries on producing confident output built on a hole.'],
      ['snag',['<code>ModuleNotFoundError: requests</code>','Run <code>!pip -q install requests</code> in a cell above, then re-run.','The GitHub call returns 403','You have hit the unauthenticated rate limit. Wait a minute, or point it at any other public JSON endpoint \u2014 the field name is the only thing that changes.']]
    ]],
    ['key','Production systems need to detect contract failures rather than silently continue. Most of the AI incidents you will actually meet look like this: nothing threw, and the answer was built on nothing.'],
    ['p','The floor itself is a short list, and you own it when you can use each item without looking it up: Python functions and dictionaries; HTTP methods and status codes; JSON; environment variables and secrets; Git basics; virtual environments; reading a stack trace; unit tests; simple logging; and \u2014 at the level of an idea rather than an implementation \u2014 asynchronous jobs and queues.'],
    ['do','Build the recorder you will reuse for the rest of the track',[
      ['p','A small command-line tool that sends one prompt, saves the request metadata and the response to a JSON file, and can replay that request later. This is the first version of your experiment harness, and several later chapters run on it.'],
      ['l',['Record: an id, a timestamp, the model, the prompt, the full response, latency, token usage, and any error.','Save one JSON file per run, named by id.','Add a replay flag that re-sends a saved request and writes a second record.']],
      ['x','You can explain what every line does without asking an AI to explain your own code back to you. That is the bar for this chapter, and it is a real bar \u2014 code you cannot explain is code you cannot defend in a review.']
    ]],
    ['try',{id:'ch21-guess',mins:6,min:60,rows:4,task:'Take the last AI feature you were shown a demo of. Write down, in plain words, what its request probably contained and what its response probably looked like. Where are you guessing?',after:'The places you had to guess are the questions to ask the team that built it. That list is the whole skill this chapter teaches.'}],
    ['key','Explain it upward: a model API call is a normal software dependency. The engineering risk lives in interfaces, failure handling, secrets, retries, observability and contracts \u2014 at least as much as it lives in the model.']
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
    ['p','A benchmark table on a vendor slide tells you how a model did on someone else\u2019s task. It tells you almost nothing about how it will do on yours. This chapter is about closing that gap with your own numbers, on your own cases, in an afternoon.'],
    ['key','Models differ along several axes at once: capability, latency, context size, tool-use behaviour and cost. A model that wins on one can lose badly on another, and which axis matters is a property of your use case, not of the model.'],
    ['do','Run a benchmark small enough that you will actually run it',[
      ['p','Five questions, two models, one table. Use the harness from chapter 21 so the records survive.'],
      ['l',['One factual question where you know the answer cold.','One that needs a short chain of reasoning.','One extraction task \u2014 pull three fields out of a paragraph.','One in a second language you can judge.','One that should be refused or answered "I cannot verify that".']],
      ['x','For each: latency, token usage, whether the answer was right, and what kind of wrong it was when it was wrong. The kind of wrong matters more than the count \u2014 a model that fails by refusing is a different product risk from one that fails by inventing.']
    ]],
    ['q','I402'],
    ['p','Then change exactly one thing. This is the discipline that separates a benchmark from an anecdote: if you change the model and the prompt together and the result improves, you have learned nothing about either.'],
    ['do','Watch sampling move the distribution',[
      ['code','for t in [0, 0.9]:\n    print("TEMPERATURE", t)\n    # call your provider three times here\n    # and record each output'],
      ['x','Low sampling, less variation. High sampling, more. You saw this in chapter 2 \u2014 but the lesson this time is not "temperature equals creativity". It is that model outputs are <strong>distributions</strong>, and configuration changes the distribution rather than picking a different answer.']
    ]],
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
    ['try',{id:'ch22-leader',mins:6,min:60,rows:4,task:'Write the one sentence you would say if a stakeholder asked you to switch to the model that just topped a leaderboard.',after:'The sentence that works is some version of: on which of our cases, and at what latency and cost? A leaderboard is a result on someone else\u2019s test set.'}]
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
    ['p','Most of what people call prompt engineering is really about what surrounds the prompt. Current architecture guidance treats retrieval as one component inside context engineering \u2014 the broader question of what the model receives at all.'],
    ['key','A good prompt is an interface contract, not a paragraph of wishes. Role, task, constraints, examples, output schema, refusal behaviour. Everything in that list is something a caller downstream is depending on.'],
    ['do','Rewrite one vague instruction as a contract',[
      ['p','Take an instruction you have actually used. Give it all six parts, and be specific about the last one \u2014 what should it do when it cannot comply?'],
      ['x','The rewrite is longer, and it is the length that does the work. You will also notice you had to make decisions you had previously left to the model, which is precisely the point.']
    ]],
    ['p','Structured output removes ambiguity downstream, which matters because the thing downstream is usually code that will not cope with prose.'],
    ['do','Demand a shape, then feed it an edge case',[
      ['code','schema = {\n  "type": "object",\n  "properties": {\n    "decision":   {"type": "string"},\n    "confidence": {"type": "number"},\n    "reason":     {"type": "string"}\n  },\n  "required": ["decision", "confidence", "reason"]\n}\nprint(schema)\n# then use your provider\u2019s structured-output mechanism'],
      ['x','Either your parser receives a predictable object, or it receives a clear schema-validation failure. Both are acceptable. What is not acceptable is a paragraph that happens to contain the answer somewhere inside it.']
    ]],
    ['q','I403'],
    ['key','\u201cMemory\u201d is an architecture choice, not a feature the model has. Every product that claims memory has built one \u2014 and which one it built determines what it can delete when someone asks.'],
    ['do','Design three memories, on paper',[
      ['p','Conversation history, a long-term user profile, and task state. For each one write down four things: where it is stored, how long it is kept, who can read it, and how it gets deleted.'],
      ['x','Three different stores with three different retention rules \u2014 not one magical memory box. The deletion path is the row people forget, and it is the row a regulator asks about first.']
    ]],
    ['p','The vocabulary worth owning here: context window, context compression, prompt caching, message hierarchy, few-shot examples, structured outputs, schema validation, memory, state, provenance, and instruction hierarchy.'],
    ['try',{id:'ch23-budget',mins:6,min:60,rows:4,task:'For one assistant you know, estimate the tokens spent on system instructions, on history, on retrieved passages, and on tool output. Then decide what gets dropped first when the budget is tight.',after:'Almost everyone drops history first and evidence last. If your ordering is different, write down why \u2014 that reasoning is the design.'}]
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
    ['p','The small system from chapter 7 works because you control every input. Production removes that control: documents arrive badly scanned, permissions change after indexing, someone uploads the same contract twice under two names, and the embedding model you chose gets a new version.'],
    ['c','What current guidance treats as separate stages','Preparation, chunking, enrichment, embedding, retrieval, prompt and context design, and end-to-end evaluation. Each one is separately tunable, which means each one is separately capable of being the reason quality dropped.'],
    ['key','Ingestion quality is retrieval quality. Nothing downstream recovers information the parser threw away on the way in.'],
    ['do','Inventory three real documents',[
      ['p','For each one record: the parser you would use, the pages and sections, the metadata available, whether there are tables, the language, any identifiers, and the access-control label.'],
      ['x','Most people discover at least one document whose access label is genuinely unclear. That document is a production incident waiting to happen, and you found it on paper instead of in a log.']
    ]],
    ['do','Measure the three retrieval strategies against each other',[
      ['p','Use your question set from chapters 3 to 5. Record the rank of the correct chunk under each strategy.'],
      ['code','results = {"keyword": [], "semantic": [], "hybrid": []}\n# fill with your measured rankings,\n# one entry per question'],
      ['x','Exact identifiers tend to favour lexical retrieval. Paraphrases tend to favour semantic. Hybrid is usually the more robust baseline \u2014 but you now have the numbers to say so about <em>your</em> corpus rather than repeating it.']
    ]],
    ['q','I404'],
    ['key','Reranking is a second opinion, not a magic fix. Retrieve ten candidates, rescore them, and then be honest: did recall at ten and precision at three improve enough to justify the latency and cost it added?'],
    ['do','Rewrite a query and watch the problem change',[
      ['p','Take a short user question that is missing context \u2014 the kind real users actually type. Rewrite it into an explicit search query, and compare retrieval before and after.'],
      ['x','Query rewriting often beats a better index, for a fraction of the effort. It also introduces a new failure: a rewrite that changes what the user meant. Keep one example of each.']
    ]],
    ['p','The production surface to understand, in one list: document parsers, the boundaries of OCR, table extraction, metadata filtering, multi-tenancy, access-control-aware retrieval, deleted-document propagation, embedding versioning, index rebuilds, deduplication, chunk ids and provenance, hybrid retrieval, reranking, query decomposition, query rewriting, citation generation, retrieval fallback, and no-answer thresholds.'],
    ['try',{id:'ch24-delete',mins:6,min:60,rows:4,task:'A document is deleted from the source system at 10am. Walk through what has to happen for the assistant to stop quoting it, and by when.',after:'If the answer involves a nightly rebuild, then between 10am and the rebuild your system is quoting a document that no longer exists. That window is a decision, so make it deliberately.'}]
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
    ['p','A tool is a typed interface to an external capability. That sentence is doing a lot of work: typed means the arguments are constrained, interface means there is a contract, and external means the consequences leave your system.'],
    ['do','Write one tool contract before writing any model code',[
      ['p','Take something small and real \u2014 <code>get_invoice_status(invoice_id)</code>. Write its JSON schema, its required fields, the error states it is allowed to return, and the access rule that governs it.'],
      ['x','You will find yourself deciding things the model would otherwise have decided by accident: what an invalid id does, whether a not-found is an error or a result, and who is allowed to ask.']
    ]],
    ['key','A workflow is often safer than an autonomous agent. If the sequence of steps is known, fix the sequence in code and let the model do only the part that genuinely needs judgement.'],
    ['do','Build a three-step deterministic flow',[
      ['p','Classify the request, retrieve the data, draft the response. Only the drafting is probabilistic. The order is not up for negotiation.'],
      ['x','The flow is boring and it works. Keep this as your baseline: chapter 26 will ask you to prove that an agent beats it before you are allowed to build one.']
    ]],
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
    ['try',{id:'ch25-cross',mins:6,min:60,rows:4,task:'List the tools you would give a support assistant. Now cross out every one where a fixed rule would pick correctly more than 95% of the time.',after:'What is left is the set where the model\u2019s judgement earns its risk. It is usually much shorter than the first list.'}]
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
    ['p','Current agent curricula teach the same loop: think, act, observe, repeat. The part that is easy to skip is that every one of those arrows needs a way to stop.'],
    ['do','Draw the loop before you write it',[
      ['p','From memory: goal \u2192 model decision \u2192 tool call \u2192 observation \u2192 updated context \u2192 stop or continue. Then add the two things beginners leave out.'],
      ['x','A diagram with explicit stopping conditions and explicit error paths. If your drawing has no arrow labelled \u201cgive up\u201d, it is not finished.']
    ]],
    ['key','Agent failure is usually a control problem, not an intelligence problem. The model did not become stupid; it was given an unbounded number of chances to be wrong.'],
    ['do','Build one with a hard ceiling',[
      ['p','Three tool calls maximum, a timeout budget, and an explicit \u201ccannot resolve\u201d exit that is a normal outcome rather than a crash.'],
      ['code','MAX_STEPS = 3\n\nfor step in range(MAX_STEPS):\n    print("agent step", step + 1)\n    # model decision, tool call, observation\n    # break when the goal is met\nelse:\n    print("cannot resolve within budget")'],
      ['x','The agent always has a bounded execution path. Run it on a task it cannot do and confirm it exits cleanly rather than circling.'],
      ['snag',['It keeps calling the same tool with the same arguments','That is the classic loop. Add the previous calls to the context so it can see what it already tried.','It stops on the first step every time','Your stop condition is too loose \u2014 it is matching on any tool result rather than on a satisfied goal.']]
    ]],
    ['q','I406'],
    ['tb',['Pattern','Use it when','Main risk'],[
      ['Sequential workflow','The steps are known','Rigid when the problem shifts'],
      ['Routing','One of several specialised paths fits','The router picks wrong'],
      ['Parallel','Subtasks are genuinely independent','Coordination and aggregation'],
      ['Handoff','A specialist should take over','Lost context, unclear authority'],
      ['Orchestrator-worker','The plan decomposes into subtasks','Cost, loops, state complexity']
    ]],
    ['key','Start with one model and explicit tools. Add another agent only when evaluation shows a benefit the simpler design cannot reach. Complexity is a budget, and current architecture guidance says the same thing: use the lowest complexity that reliably meets the requirement.'],
    ['try',{id:'ch26-compare',mins:6,min:60,rows:4,task:'Take the twenty tasks from your chapter 25 workflow and run them through the agent. Count: how many did the agent get right, how many tool calls did it take, and what did it cost?',after:'If the agent is not clearly better on a metric you care about, the workflow wins. That is a real and respectable result to bring to a review.'}]
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
    ['p','You do not need to become a protocol implementer. You need to understand the boundary it creates, because that boundary is where the security questions live.'],
    ['c','What the specification actually defines','A host, a client and a server, with standardised primitives: resources, prompts and tools. It also states security and user-consent considerations explicitly, which is unusual and worth reading. Agent-to-agent protocols are emerging separately, as a layer for agents to exchange tasks rather than for a model to reach a tool.'],
    ['do','Draw the flow and mark the controls',[
      ['p','Host \u2192 client \u2192 server \u2192 resource or tool. Then mark four things on the drawing: where consent is obtained, where authentication happens, where policy is applied, and where the audit record is written.'],
      ['x','You can point at the trust boundary and name the component that should be enforcing user authorisation. If the answer is \u201cthe model\u201d, the drawing is wrong.']
    ]],
    ['key','A standardised tool interface does not make an unsafe tool safe. The protocol carries the call; it does not decide whether the call should have been allowed.'],
    ['do','List what must be true before a tool executes',[
      ['p','Take a hypothetical <code>send_email</code> tool. Write the checks required before it is allowed to run.'],
      ['x','Identity of the requester, authorisation for that specific action, validation of the arguments, a rate limit, a confirmation step for anything irreversible, and an audit record. Notice how few of those the protocol supplies for you.']
    ]],
    ['q','I407'],
    ['p','The concepts worth owning: host, client, server, resources, prompts, tools, capability negotiation, session, consent, authorisation, least privilege, auditability. And one negative: MCP is a protocol, not an agent framework.'],
    ['p','Agent-to-agent work adds a further layer \u2014 instead of exposing a tool to one model runtime, agents may need discoverable ways to exchange tasks and results. For product purposes the questions are identity, delegation, trust, permissions, error semantics and observability, rather than the field names.'],
    ['try',{id:'ch27-classify',mins:6,min:60,rows:4,task:'Classify five tools from a system you know into read-only, reversible-write, irreversible-write, privileged, and prohibited.',after:'The line between reversible and irreversible is where human confirmation belongs. If you found it hard to place a tool, that tool needs a smaller scope.'}]
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
    ['p','A PDF is not a text file with decoration. It is text, layout, tables, images and metadata at once, and a plain extraction quietly flattens four of those five into nothing.'],
    ['do','Compare the extraction against what a human sees',[
      ['p','Take one real PDF from your corpus. Extract its text. Then put the extraction and the page side by side and find three pieces of information that did not survive.'],
      ['x','Typically: the table structure, the meaning carried by position \u2014 a heading over a column, a footnote marker \u2014 and anything that was in an image. Each of those is an answer your assistant will get wrong later.']
    ]],
    ['key','Voice systems are pipelines, not a single model. Every stage adds latency and every stage adds a place for the meaning to shift.'],
    ['do','Draw the voice pipeline and time it',[
      ['p','Audio capture \u2192 transcription \u2192 normalisation \u2192 task extraction \u2192 confirmation \u2192 action. Mark which steps the user is actively waiting through.'],
      ['x','The confirmation step is the one people try to remove to save time. It is also the only thing standing between a misheard name and an action taken on the wrong record.']
    ]],
    ['q','I408'],
    ['do','Build a modality-aware evaluation set',[
      ['p','Write five questions: some answerable only from text, some only from a table or an image, some only from layout. For each, decide which component has to supply the ground truth.'],
      ['x','You cannot grade a table question against a text extraction. Each modality needs its own answer key, produced by whoever can actually read that modality.']
    ]],
    ['p','Vocabulary: OCR, speech-to-text, text-to-speech, vision-language model, document understanding, multimodal embedding, audio latency, streaming, diarization, confidence and uncertainty, and media provenance.'],
    ['try',{id:'ch28-attrib',mins:6,min:60,rows:4,task:'For a meeting assistant: who said what, how long is the transcript kept, and what happens when two people talk over each other?',after:'Speaker attribution is the part that looks like a technical detail and behaves like a privacy decision.'}]
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
    ['p','Chapter 6 gave you an answer key for a retrieval question. This chapter widens that into the thing that actually governs a release: a dataset, a set of graders, and a gate that a change has to pass before anyone is allowed to be pleased with it.'],
    ['key','Every AI feature needs a test dataset, and it needs to be versioned. An evaluation you cannot re-run after a change is an anecdote with a number attached.'],
    ['do','Build thirty cases, not five',[
      ['p','Happy path, paraphrase, ambiguity, no-answer, multilingual, adversarial, long-context, tool-use, and policy edge cases. Aim for thirty; the exact number matters less than the coverage.'],
      ['x','A versioned evaluation dataset you can re-run after every prompt, model or index change. Keep it in the repository next to the harness — an evaluation set on someone’s laptop is not an evaluation set.']
    ]],
    ['q','I409'],
    ['key','You need several levels of evaluation at once. A good end-to-end score can sit on top of a badly broken retriever, because a fluent model can cover for missing evidence often enough to look fine in a demo.'],
    ['do','Score one feature at three levels',[
      ['p','Retrieval, component behaviour, and the end-to-end answer. Record all three for the same run.'],
      ['x','When the end-to-end number is good and the retrieval number is bad, you have found a system that is guessing well. That is the most dangerous state a RAG product can be in, and only the layered score reveals it.']
    ]],
    ['do','Measure how much you can trust the judge',[
      ['p','Take twenty examples. Have a model judge groundedness or relevance, then label the same twenty yourself. Measure the disagreement.'],
      ['x','A number you can quote. LLM-as-judge is a scorer, not an oracle — and now you know, for your task, how far its scores can be trusted before a human has to look.']
    ]],
    ['tb',['Layer','Example metric','The release question it answers'],[
      ['Retrieval','Recall@k, Precision@k','Did we fetch the right evidence?'],
      ['Generation','Groundedness, task success','Did the answer use the evidence correctly?'],
      ['Tool use','Tool-selection accuracy','Did it call the right capability?'],
      ['Operations','p95 latency, cost per task','Can we afford to run it?'],
      ['Safety','Attack success rate','Can adversarial input break the controls?']
    ]],
    ['p','The stack worth knowing by name: a golden set, synthetic data, human labels, a rubric, deterministic checks, LLM-as-judge, pairwise comparison, regression tests, red-team tests, online feedback, experiment design, confidence intervals at a basic level, acceptance thresholds, and release gates.'],
    ['try',{id:'ch29-stop',mins:6,min:60,rows:4,task:'Write the sentence that stops a release. Not a policy — the actual sentence, with numbers in it, that you would say in the room.',after:'If your sentence contains the word "seems", it will not stop anything. Thresholds stop releases; impressions do not.'}]
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
    ['p','A production AI system will produce a wrong answer at some point, and someone will ask you why. Everything in this chapter exists so that the answer is not "we cannot tell".'],
    ['key','A trace is a map of one request through the system. If you can only see what went in and what came out, every diagnosis is speculation.'],
    ['do','Build one trace record by hand',[
      ['p','Take one retrieval request and write down everything that would let a stranger reconstruct it a week later.'],
      ['code','trace = {\n  "request_id": "demo-001",\n  "model": "example-model",\n  "prompt_version": "v3",\n  "retrieved_chunks": ["c17", "c04"],\n  "tool_calls": [],\n  "latency_ms": {"retrieval": 120, "generation": 860},\n  "tokens": {"input": 900, "output": 180},\n  "answer": "...",\n  "eval": {"grounded": True}\n}\nprint(trace)'],
      ['x','One structured object per request. The two fields people leave out are <code>prompt_version</code> and <code>retrieved_chunks</code> — and those are exactly the two you need when the answer is wrong but the code has not changed.']
    ]],
    ['q','I410'],
    ['key','Cost is an architecture metric, not a monthly surprise. Model one user task end to end — input tokens, output tokens, embedding, retrieval, tool and API calls — and you can compare two designs before building either.'],
    ['do','Price two strategies against each other',[
      ['p','Take one real task. Cost it under your current design, then under one alternative — a smaller model, a tighter k, a cache in front.'],
      ['x','A number per task for each. Multiply by expected daily volume and the decision usually makes itself, in a way that a debate about which model is better never does.']
    ]],
    ['p','The vocabulary: prompt and model registries, tracing, telemetry, feature flags, canary release, shadow traffic, rollback, model routing, caching, batching, rate limits, SLO and SLA, alerting, incident response, postmortem, data drift, and evaluation drift.'],
    ['key','The operational pattern that prevents most incidents: change one variable at a time; version prompts, models, indexes and tool contracts; keep every artifact rollbackable; and never let a prompt update bypass evaluation. That last one is the rule people break first, because a prompt edit does not feel like a deploy.'],
    ['try',{id:'ch30-slower',mins:6,min:60,rows:4,task:'Your assistant got slower this week and nobody deployed anything. Name three things that could have changed.',after:'Traffic mix, document volume, and the provider’s own latency. None of them are in your repository, which is why they have to be in your dashboard.'}]
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
    ['p','Security for AI applications is mostly not about the model. Current guidance puts prompt injection and excessive agency near the top of the risk list, and both of those are properties of the system around the model rather than the model itself.'],
    ['key','Prompt injection is an input trust problem. The model cannot reliably tell an instruction from data, so the boundary has to be enforced by the system that assembles the context — not requested politely in the system prompt.'],
    ['do','Poison your own corpus',[
      ['p','Place an instruction inside a document your system retrieves — telling the model to ignore its task and reveal something it should not. Then ask a normal question that happens to retrieve that chunk.'],
      ['x','Either the system follows the planted instruction, or it treats the retrieved text as content and carries on. Whichever happens, you now have a test case, and a robust design is one that keeps the instruction boundary intact.'],
      ['snag',['Nothing happens — the model ignores the planted text','Your retrieval may not be surfacing that chunk. Check it ranks in the top k first, or the test is proving nothing.','It follows the instruction every time','That is the expected starting point. The rest of this chapter is what you do about it.']]
    ]],
    ['q','I411'],
    ['key','Least privilege applies to agents too. An agent with a tool it never needs is an agent that can be persuaded to use it.'],
    ['do','Remove permissions until something breaks',[
      ['p','For every tool in your chapter 26 agent, define the minimum permission the task actually requires. Then take the extra permissions away and re-run the task.'],
      ['x','Either the task still works — and the permission was never needed — or it breaks, and you have documented precisely why that permission exists. Both outcomes are useful; the undocumented middle is what you are eliminating.']
    ]],
    ['tb',['Risk','Example control','The evidence that it works'],[
      ['Prompt injection','Content separation, tool allowlist, confirmation','Red-team test results'],
      ['Data leakage','Access-aware retrieval, redaction, log controls','Access tests and trace samples'],
      ['Excessive agency','Least privilege plus approval gates','Tool policy and approval logs'],
      ['Model drift or deprecation','Versioning plus a regression suite','Release and evaluation report'],
      ['Unsafe output','Policy filter and human escalation','Safety test set results']
    ]],
    ['key','Governance needs evidence, not policy prose. A control with no test beside it is a sentence, and sentences do not stop incidents.'],
    ['try',{id:'ch31-evidence',mins:6,min:60,rows:4,task:'Pick one control your organisation already claims to have. Write down what evidence would prove it works, and whether that evidence exists.',after:'The gap between the claim and the evidence is the actual risk position. That gap is what a risk register is for.'}]
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
    ['p','A conventional specification says what the system will do. An AI specification has to say how often, measured against what, and what happens the rest of the time — because the rest of the time is not zero and pretending otherwise is how features get shipped that nobody can defend.'],
    ['key','“Done” is a distribution, not a single deterministic output.'],
    ['do','Rewrite one acceptance criterion',[
      ['p','Start from the traditional form and convert it.'],
      ['l',[
        '<strong>Traditional:</strong> “The system always returns the correct document.”',
        '<strong>AI version:</strong> “On the approved 200-case test set, retrieval Recall@5 ≥ 0.90 and no-answer precision ≥ 0.98; end-to-end grounded answer success ≥ 0.85.”'
      ]],
      ['x','A metric, a test set, and a stated tolerance for failure. Notice that the second version is the only one an engineer can actually build against, and the only one that can ever be shown to have been met.']
    ]],
    ['q','I412'],
    ['do','Design the three states',[
      ['p','A confident answer with citations; an ambiguous answer that needs clarification; an action that requires confirmation. Sketch all three.'],
      ['x','The second and third states are where products are won or lost. Most teams design the first one beautifully and let the other two fall out of the code by accident.']
    ]],
    ['p','The PRD structure worth copying: user problem; the non-AI baseline; why AI; scope; inputs; context; model and tool behaviour; failure modes; the human role; the evaluation dataset; quality bars; safety constraints; latency and cost goals; rollout plan; instrumentation; rollback; ownership.'],
    ['key','Keep the metric families apart. Task completion rate is a product outcome. Groundedness is a system quality metric. Token cost is an operating metric. Complaint rate is a user signal. Mixing them is how a dashboard ends up unable to answer any question at all.'],
    ['tb',['Decision','The business question','The AI evidence that settles it'],[
      ['Build or buy','Will it create enough value?','Capability, evaluation and total cost of ownership'],
      ['Ship or hold','Is failure cheap enough?','Quality, safety and incident readiness'],
      ['Model A or B','Which wins for this task?','A task-specific benchmark'],
      ['Human in the loop','Where is autonomy unsafe?','Error cost and reversibility']
    ]],
    ['try',{id:'ch32-trigger',mins:6,min:60,rows:4,task:'Write the one-line rollback trigger for a feature you would like to ship. It has to be specific enough that someone could act on it at 2am without calling you.',after:'If it needs your judgement to interpret, it is not a trigger. It is a hope.'}]
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
    ['p','Everything you have built so far runs because you are the only user and you are forgiving. Production removes both of those conditions at the same time.'],
    ['do','Write the production delta',[
      ['p','Take your retrieval system or your agent and list everything it does not yet have: authentication, rate limits, retries, queues, persistence, monitoring, secret management, access control, backups, deployment and rollback.'],
      ['x','The list is longer than the thing you built. That ratio is normal, and being able to state it is most of what separates a demo from a proposal.']
    ]],
    ['key','Latency is a budget spent across the whole chain. Retrieval, reranking, tool calls, model reasoning and final generation each take a share, and the largest contributor is rarely the one people optimise first.'],
    ['do','Find where the time actually goes',[
      ['p','Estimate p50 and p95 for each stage, then measure them with the traces from chapter 30 and compare against your estimate.'],
      ['x','One stage dominates. Write down whether it was the one you expected — the gap between the estimate and the measurement is the same lesson chapter 6 taught about quality, arriving again in a different costume.']
    ]],
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
    ['p','The delivery discipline worth naming: architecture decision records, a dependency map, clear responsibilities, a risk log, an environment strategy, CI/CD, a test pyramid, an AI regression suite, canary release, a kill switch, an incident playbook, postmortems, and a vendor exit plan.'],
    ['try',{id:'ch33-reprice',mins:6,min:60,rows:4,task:'Your provider doubles its price on ninety days’ notice. Write what you would do in the first week.',after:'If the answer requires re-running an evaluation you do not have, the exit plan is the evaluation set. That is usually the finding.'}]
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
    ['p','Your final credential is not a certificate. It is a system you can explain from first principles and a findings document that proves what happened when you tested it.'],
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
    ['do','Write the findings page',[
      ['p','Exactly these columns, and nothing decorative: what broke, the evidence, the root cause, the fix, the residual risk, the metric before and after, and what you deliberately did not solve.'],
      ['x','Rough and factual. The moment it starts reading like marketing copy it stops being evidence, and evidence is the entire point of the document.']
    ]],
    ['do','Write ten assumptions before the demo',[
      ['p','A design review starts with assumptions, not slides. Write ten, then mark each one true, false or unproven as you test.'],
      ['x','The false ones are the most valuable thing you will bring to the review, and the unproven ones are your next sprint.']
    ]],
    ['q','I414'],
    ['p','Definition of done: a clean-environment run succeeds; the evaluation is repeatable; at least three meaningful failures were reproduced; at least three fixes have before-and-after evidence; the security controls were challenged; rollback is defined; and every major design decision can be explained without saying “the framework handles it”.'],
    ['key','Final self-test, from memory: why the model is stateless; why retrieval can fail; why embeddings help; why retrieval never naturally says no; why top-k is a trade-off; when a workflow beats an agent; why tools are a security boundary; why evaluation must precede release; why tracing matters; how to calculate cost per task; and what makes an AI specification different from a normal one.']
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

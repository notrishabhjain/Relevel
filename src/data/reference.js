/* Reference layer: setup, glossary, vendor deck, LATER page, red-map nodes. */

window.SETUP = {
  title: 'Setup',
  blurb: 'Complete once, before Chapter 1. Purely plumbing — configuring a kitchen before you cook. Follow it mechanically; understanding begins in Chapter 1.',
  oneline: 'You need a free online coding environment (Google Colab) and a free API key (NVIDIA Build) that lets your programs talk to AI models. Forty-five minutes, once, done permanently.',
  sections: [
    {h:'A1. Google Colab — your kitchen', t:'~10 min', b:[
      ['p','Colab is a free service giving you a temporary computer in Google\'s datacentre, controlled from a browser tab. Nothing is installed on your machine.'],
      ['n',['Go to <code>colab.research.google.com</code> and sign in with any Google account.','Click <strong>+ New notebook</strong>.','You see an empty grey box. That box is a <strong>cell</strong> — type an instruction and press <kbd>Shift</kbd>+<kbd>Enter</kbd> to run it.','Type <code>print("hello")</code> and press <kbd>Shift</kbd>+<kbd>Enter</kbd>.']],
      ['x','The word <code>hello</code> appears below the cell with a small green tick. That was a program. You wrote it and ran it.'],
      ['l',['Cells run top to bottom and remember each other — a value made in cell 1 is usable in cell 5, as long as the machine is on.','The machine switches off when idle, roughly 90 minutes. Your typed cells survive; only their results vanish. Fix: <strong>Runtime → Run all</strong>. This is weather, not failure.','Rename each notebook by clicking its name at top-left: <code>chapter-1</code>, <code>chapter-2</code>, and so on.']]
    ]},
    {h:'A2. The NVIDIA API key — your gas connection', t:'~15 min', b:[
      ['p','NVIDIA\'s Build platform provides free access to a large catalogue of models with no credit card. This book needs well under 400 requests; the free allowance is roughly 1,000. It also lets you swap models with a one-line change — a genuinely useful skill.'],
      ['n',['Go to <code>build.nvidia.com</code>. Sign up or log in with any email.','Search <code>llama-3.1-8b-instruct</code> and open the model page.','Find <strong>Get API Key</strong> (on some pages: <em>Build with this NIM → Generate Key</em>). Click it.','A long code beginning <code>nvapi-</code> appears. Copy it somewhere private immediately — a password manager or private note. Treat it like an ATM PIN.']],
      ['c','Why this matters professionally','Keys embedded in code get copied, shared, and leaked — one of the most common security failures in software. Knowing how to store them correctly, and why, is itself meeting-grade knowledge.']
    ]},
    {h:'A3. Giving the key to Colab safely', t:'~10 min', b:[
      ['p','Never paste an API key into a code cell. Colab has a secrets locker for exactly this.'],
      ['n',['Click the key icon (🔑) in the left sidebar.','Click <strong>+ Add new secret</strong>. Name: <code>NVIDIA_API_KEY</code> exactly. Value: your <code>nvapi-…</code> code.','Switch <strong>Notebook access</strong> ON.']],
      ['code','from google.colab import userdata\nkey = userdata.get("NVIDIA_API_KEY")\nprint("Key loaded, starts with:", key[:8])'],
      ['x','<code>Key loaded, starts with: nvapi-xx</code> — showing only the first 8 characters keeps the full key off your screen.']
    ]},
    {h:'A4. The test call', t:'~10 min', b:[
      ['code','!pip -q install openai'],
      ['x','A few progress lines, then silence. Silence is success.'],
      ['code','from openai import OpenAI\n\nclient = OpenAI(\n    base_url="https://integrate.api.nvidia.com/v1",\n    api_key=key\n)\n\nresponse = client.chat.completions.create(\n    model="meta/llama-3.1-8b-instruct",\n    messages=[{"role": "user", "content": "Reply with exactly: setup works"}]\n)\nprint(response.choices[0].message.content)'],
      ['x','<code>setup works</code>. Setup is complete.'],
      ['p','One note worth filing: the library is called <code>openai</code>, yet we are not using OpenAI\'s service. OpenAI published the first widely-adopted request format and much of the industry copied it. One library therefore works with many providers. Changing providers later may require only a one-line change — exactly the kind of architectural fact that earns respect in vendor conversations.']
    ]},
    {h:'A5. Collect your raw material', t:'~10 min', b:[
      ['p','Create one folder in Google Drive named <code>my-corpus</code>. Put in it 10–15 documents you know deeply from your own work: policies, SOPs, product manuals, contracts, handbooks, published standards.'],
      ['c','Why your own documents matter','The second half of this book builds a system that answers questions from your corpus. When it answers wrongly — and it will — you must catch the error instantly, without outside help. Your domain knowledge is your quality-control department. With unfamiliar documents you would need an expert on call; with your own, you are the expert.'],
      ['p','<strong>For Part II, add deliberately awkward material:</strong> at least two scanned pages, one document containing a real table, and — if you can — a superseded version of a policy alongside its current one. Chapters 12 and 16 need these, and a corpus that is too clean will teach you that everything works.']
    ]},
    {h:'A6. Part II additions', t:'~5 min', b:[
      ['p','Before Chapter 9, confirm your model catalogue offers these. Any one of them missing is worked around in that chapter\'s <em>If Something Goes Wrong</em>.'],
      ['l',['A <strong>tool-calling</strong> capable instruct model (Ch. 9)','A <strong>reasoning</strong> model, or simply two models of clearly different size and price (Ch. 11)','A <strong>vision</strong> capable model (Ch. 16)','A model supporting <code>response_format</code> / JSON schema (Ch. 8) — the validation loop is the fallback']]
    ]}
  ],
  trouble: [
    ['401 Unauthorized','Key not loaded','Sidebar 🔑 → toggle ON for this notebook → re-run the key cell'],
    ['NameError: key not defined','Colab session restarted','Runtime → Run all'],
    ['404 model not found','Typo in the model name','Exact strings only — copy from the model page on build.nvidia.com'],
    ['429 Too Many Requests','Loop hit the per-minute rate limit','Add <code>import time; time.sleep(2)</code> inside the loop'],
    ['4xx on embeddings','Missing <code>extra_body</code>','<code>extra_body={"input_type": …}</code> is mandatory for the embedding model'],
    ['Anything else','Transient or unknown','Note the exact red text, close, return with fresh eyes tomorrow']
  ]
};

/* ---------- Glossary. `ch` is the chapter where you BUILT it. ---------- */
window.GLOSSARY = [
  ['Model / LLM','A prediction machine trained on large quantities of text. It continues text plausibly — it does not look things up.',1],
  ['API call','Sending the envelope (a JSON request) to the model and receiving the reply.',1],
  ['Token','A word-piece — the unit the model reads, writes, and bills in. Roughly ¾ of an English word.',1],
  ['Context window','The maximum size of one envelope: everything in plus everything out.',1],
  ['Stateless','Total amnesia — nothing survives between requests on the model\'s side.',1],
  ['usage','The receipt: prompt tokens read in, completion tokens written out.',1],
  ['System prompt','The standing briefing page placed in every envelope before the user\'s message.',2],
  ['Temperature','The variety dial, 0 to ~1. Zero = consistent; high = creative.',2],
  ['Hallucination','Confident generation of plausible-but-false content. The default behaviour at the edge of knowledge, not a glitch.',2],
  ['Guardrail','Any mechanism reducing harmful or wrong outputs. The humblest is a sentence in the system prompt.',2],
  ['Chunk','One piece of a cut-up document — the unit stored and retrieved.',3],
  ['Chunking','The cutting itself — a design decision wearing the costume of a chore.',3],
  ['Fixed-size chunking','Cutting every N words regardless of meaning.',3],
  ['Semantic chunking','Cutting along the document\'s own structure.',3],
  ['Chunk overlap','Repeating the last lines of one chunk at the start of the next, so boundary-straddling answers survive.',3],
  ['Retrieval','Fetching, from all stored chunks, the few most likely to answer a question.',4],
  ['Keyword search','Retrieval by shared words — matches spelling, blind to meaning.',4],
  ['Query','The incoming question.',4],
  ['Hybrid search','Keyword and semantic search run together, results merged.',4],
  ['Top-k','Take the best k results — the dial between recall and precision.',4],
  ['Embedding','A text\'s address on the meaning map — a list of ~1024 numbers.',5],
  ['Embedding model','The mapmaker — reads text, outputs its address.',5],
  ['Cosine similarity','The one-line neighbour test — higher = closer in meaning.',5],
  ['Semantic search','Retrieval by meaning-map addresses instead of spelling.',5],
  ['query vs. passage','The declaration of whether you are embedding a question or a document piece. Skip it and quality degrades silently.',5],
  ['Vector database','A system that stores embeddings and finds nearest neighbours fast.',5],
  ['Evaluation','Grading the system against verified expectations — acceptance testing, aimed at AI.',6],
  ['Ground truth','The pre-verified answer key: questions, correct answers, locations.',6],
  ['Recall','Of what mattered, how much was fetched? Low = missed files.',6],
  ['Precision','Of what was fetched, how much mattered? Low = buried desk.',6],
  ['Acceptance criteria','Pre-agreed numbers and behaviours required before go-live.',6],
  ['RAG','Retrieval-Augmented Generation — retrieve verified text, generate the answer from it.',7],
  ['Schema','A formal description of required output shape: fields, types, what is required.',8],
  ['Structured output','Model output constrained to a schema rather than free prose.',8],
  ['Constrained decoding','Only schema-valid tokens permitted at each step. Makes invalid output impossible, not merely unlikely.',8],
  ['Enum','A field restricted to a fixed list of allowed values.',8],
  ['Refusal path','A legal, structured way to report "cannot determine" — the alternative to compelling invention.',8],
  ['Validation loop','Parse → validate → on failure re-ask with the error attached.',8],
  ['Tool / function calling','Describing callable functions so the model can request one instead of answering in prose.',9],
  ['Agent loop','model → tool request → your code executes → result back → repeat.',9],
  ['Step budget','The hard maximum number of loop iterations. Non-optional.',9],
  ['Trace','The recorded sequence of steps, calls, arguments and results for one run.',9],
  ['Side-effect boundary','The line between tools that read and tools that change the world.',9],
  ['Context engineering','What enters the envelope, in what order, and what is evicted — as opposed to how it is worded.',10],
  ['Context rot','Degradation in the use of context as it grows, well before the ceiling.',10],
  ['Lost in the middle','Material at the start and end is recovered far more reliably than material in the middle.',10],
  ['Prompt caching','Provider-side reuse of a processed request prefix. Stable first, volatile last.',10],
  ['Compaction','Summarising older context to free budget, keeping a verbatim recent tail.',10],
  ['Reasoning model','A model that generates an internal working-out before its answer.',11],
  ['Test-time compute','Buying accuracy per query at inference time rather than at training time.',11],
  ['Thinking budget','The control setting how much working-out is permitted. A product decision.',11],
  ['p50 / p95 latency','Median and slow-tail response times. Users experience the tail.',11],
  ['BM25','Statistical keyword ranking — Chapter 4\'s scoreboard done properly, weighting rare words.',12],
  ['Reciprocal rank fusion','Merging ranked lists by summing 1/(rank). Simple, robust, hard to beat.',12],
  ['Reranker','A model scoring a (question, chunk) pair by reading both together. Applied to shortlists only.',12],
  ['Contextual retrieval','Prepending a generated situating sentence to each chunk before embedding. Cures orphans.',12],
  ['Query rewriting','Turning a conversational fragment into a standalone searchable question.',12],
  ['Metadata filter','Discarding out-of-scope chunks before scoring — version, date, department.',12],
  ['Prompt injection','Instructions smuggled into a model\'s input that redirect its behaviour.',13],
  ['Indirect injection','The attack arrives inside content the system reads — a document, email, ticket or page.',13],
  ['Lethal trifecta','Private data + untrusted content + external communication. Any two are safe.',13],
  ['Exfiltration','Getting private data out — via email, webhook, URL parameter or rendered image.',13],
  ['Confused deputy','A privileged component tricked into misusing its authority for an unprivileged party.',13],
  ['Allowlist','A closed set of permitted destinations. Survives a successful injection.',13],
  ['LLM-as-judge','Using a model to grade outputs against a rubric.',14],
  ['Judge agreement','How often the judge concurs with human labels. The number that makes a judge usable.',14],
  ['Error analysis','Reading real outputs and open-coding failures into a taxonomy. The highest-leverage activity in the field.',14],
  ['Failure taxonomy','Your named categories of failure, derived from your own traffic.',14],
  ['Regression suite','Cases that must pass before any release ships.',14],
  ['Offline vs online eval','Against an answer key before release, versus user outcomes after.',14],
  ['Cost per query','The full loaded cost of one user-visible request, including retries and agent steps.',15],
  ['Cascade','Cheap model first, escalate on a failed check. The main production cost pattern.',15],
  ['Model routing','Choosing a model per request based on the request\'s difficulty.',15],
  ['Unit economics','Cost and revenue per unit of use — the number that decides whether a feature survives.',15],
  ['Vision-language model','A model that reads images and text together.',16],
  ['Page-as-chunk','Treating a rendered page as the retrieval unit rather than a text span.',16],
  ['Modality gap','Information present on the page but absent from its extracted text.',16],
  ['Turn detection','Deciding when a speaker has finished — the core problem of voice interfaces.',16],
  ['Risk tier','Obligation level set by consequence of error, not by technology.',17],
  ['System card','A structured document: purpose, data, evaluation, limitations, oversight.',17],
  ['Data lineage','Where data came from, under what right, held where, for how long.',17],
  ['Human oversight','A specified, exercisable review point with authority to overrule.',17],
  ['Shadow AI','Unsanctioned tool use by staff. A measurable reality, not a hypothetical.',17],
  ['AI PRD','A product specification whose acceptance criteria are eval thresholds on a named dataset.',18],
  ['Model pinning','Fixing an exact model version so behaviour does not change beneath you.',18],
  ['Deprecation migration','The re-evaluation required when a provider retires your model.',18],
  ['Kill switch','An immediate flag routing traffic to the non-AI path. Not a rollback.',18]
];

/* ---------- Vendor Interrogation Deck ---------- */
window.VENDOR = [
  {claim:'“We customized the AI for your organization.”', ch:2, tag:'capability', qs:[
    'Customized how — retrained, fine-tuned, or a system prompt? (Almost always the third.)',
    'If it is a system prompt: is it versioned, reviewed, and owned by a named person?',
    'What changed measurably, on which question set, versus the uncustomized baseline?']},
  {claim:'“Our system splits your documents into optimal chunks automatically.”', ch:3, tag:'retrieval', qs:[
    'Optimal by what measure, on which question set?',
    'What happens to meanings that span a boundary — is there overlap or structure-aware cutting?',
    'Show me a chunk from the middle of one of our contracts and tell me if it stands alone.']},
  {claim:'“We already have a search box.”', ch:4, tag:'retrieval', qs:[
    'Does it match spelling or meaning? Try a plain-language question a new customer would ask.',
    'What is the success rate for users who do not know our internal vocabulary?',
    'What happens on a question in our second-largest user language?']},
  {claim:'“1024-dimensional state-of-the-art embeddings.”', ch:5, tag:'hype', qs:[
    'Measured how, on whose questions, in which languages?',
    'Dimensionality is a specification, not evidence. What is retrieval quality on our documents?',
    'Show the exact-string case — codes and section numbers — where semantic search typically fumbles.']},
  {claim:'“94% accuracy.”', ch:6, tag:'evidence', qs:[
    'Against which ground truth — who wrote it, does it resemble our real users\' questions?',
    'At which k was it measured?',
    'What did the other metric read at that setting — what was traded away?',
    'Did the question set include unanswerable questions? What did it do on those?']},
  {claim:'“Our GenAI assistant, trained on your documents, guarantees accurate answers.”', ch:7, tag:'hype', qs:[
    'Trained, or retrieved at query time? If trained, show the training story and the update path.',
    'If retrieved: show retrieval quality numbers on our corpus.',
    '“Guarantees” — against which ground truth, at which k, including unanswerable questions?']},
  {claim:'“Our API returns structured, validated data.”', ch:8, tag:'capability', qs:[
    'Validated meaning schema-valid, or fact-checked against a source? (Almost always the first.)',
    'Is it constrained decoding or a retry loop? What is the retry rate, and who pays for retries?',
    'Does every record carry a checkable citation or supporting quote?']},
  {claim:'“Our agent handles the entire workflow end to end.”', ch:9, tag:'agents', qs:[
    'What is the step budget, and what happens when it is exhausted?',
    'Which tools write, send, or pay? Where is the human confirmation on those?',
    'Show me a trace of a failed run — specifically what it did when a tool returned an error.']},
  {claim:'“Two-million-token context — you don\'t need retrieval any more.”', ch:10, tag:'hype', qs:[
    'What does a full envelope cost per query, at our volume, forever?',
    'Show accuracy as a function of context depth — where does the middle start being missed?',
    'Do you support prompt caching, and what is the discount and the invalidation rule?']},
  {claim:'“We upgraded to the reasoning model, so accuracy is up.”', ch:11, tag:'evidence', qs:[
    'Up on which slice — the whole set, or a few hard cases?',
    'What happened to p95 latency and to cost per query?',
    'Could a retrieval fix have produced the same gain more cheaply?',
    'Are thinking tokens itemised on the bill?']},
  {claim:'“We use hybrid search and reranking.”', ch:12, tag:'retrieval', qs:[
    'Show the before-and-after on our ground truth, at a stated k.',
    'What is the reranker\'s added latency at p95?',
    'How do you handle superseded document versions? (Nothing in hybrid or reranking solves that.)']},
  {claim:'“Our agent is protected against prompt injection.”', ch:13, tag:'security', qs:[
    'What is the threat model, and the measured capture rate against adaptive attacks?',
    'Which of your controls still hold after a successful injection?',
    'Does the system have private data, untrusted content, and an outbound channel simultaneously?']},
  {claim:'“We use an automated evaluation suite.”', ch:14, tag:'evidence', qs:[
    'If a model judges, what is its measured agreement with human labels?',
    'Was the eval set derived from real traffic, or written by the team?',
    'What are your five blocking regression cases?']},
  {claim:'“It costs about ₹0.30 per query.”', ch:15, tag:'cost', qs:[
    'At what k, and how many model calls per user-visible request?',
    'Does that include retries, agent steps, and reasoning tokens?',
    'Cached or uncached? And what is p95 latency at that price?']},
  {claim:'“We support all document formats.”', ch:16, tag:'capability', qs:[
    'Run extraction on ten of our worst pages — scanned, multi-column, tabular.',
    'What is the cell-level error rate on tables?',
    'When a question needs a table, does the model see the page or only extracted text?']},
  {claim:'“We are SOC 2 certified, so we are compliant.”', ch:17, tag:'governance', qs:[
    'SOC 2 covers your controls, not your model\'s behaviour. What is the hallucination rate?',
    'Subprocessor list, data residency, and does our data train your models?',
    'What is the model deprecation notice period?']},
  {claim:'“The new model version is a drop-in upgrade.”', ch:18, tag:'governance', qs:[
    'Drop-in against which eval? Show the regression suite result on both versions.',
    'What is your deprecation notice period for the version we are validated against?',
    'Can we pin a version, and for how long?']}
];

/* ---------- The LATER page. `resolved` = chapter that unlocks it. ---------- */
window.LATER = [
  {t:'Choosing between embedding models', resolved:12, note:'Measured on your own ground truth, not on a leaderboard.'},
  {t:'Vector database products (Pinecone, Weaviate, Chroma, pgvector)', resolved:12, note:'You built retrieval with a list and one line of arithmetic. These products add scale and filtering, not meaning.'},
  {t:'Reranking — re-scoring retrieved results with a second model', resolved:12, note:'Retrieve wide, rerank narrow.'},
  {t:'Hybrid search implementation — merging keyword and semantic', resolved:12, note:'Reciprocal rank fusion, in nine lines.'},
  {t:'Agents and tool-use — models that take actions', resolved:9, note:'A while-loop with a model inside, and a budget.'},
  {t:'Structured output and schema-driven generation', resolved:8, note:'Where a demo becomes a feature.'},
  {t:'Prompt caching and context management', resolved:10, note:'Stable first, volatile last.'},
  {t:'Reasoning models and test-time compute', resolved:11, note:'A purchase, made per query.'},
  {t:'Prompt injection and AI security', resolved:13, note:'The lethal trifecta. No complete fix exists.'},
  {t:'LLM-as-judge and evaluation at scale', resolved:14, note:'Grade the judge before you trust it.'},
  {t:'Cost engineering and model routing', resolved:15, note:'The four multipliers.'},
  {t:'Multimodal — vision, documents as images, voice', resolved:16, note:'Your corpus is pages, not text.'},
  {t:'AI regulation, model cards, governance', resolved:17, note:'Mostly product decisions wearing legal costume.'},
  {t:'Fine-tuning — adjusting model weights on domain data', resolved:null, note:'Still parked. Almost always attempted before retrieval and evaluation have been exhausted, which is the wrong order.'},
  {t:'Distillation and small/on-device models', resolved:null, note:'Still parked. Becomes interesting once your evals exist — you need a way to know the small model is good enough.'},
  {t:'Multi-agent orchestration at scale', resolved:null, note:'Still parked. Chapter 9\'s failure modes multiply rather than cancel.'},
  {t:'GPU hosting, self-hosting, inference economics', resolved:null, note:'Still parked. Revisit after Chapter 15 gives you a number to beat.'},
  {t:'Synthetic data generation for evals', resolved:null, note:'Still parked. Tempting shortcut past Chapter 14\'s error analysis; it is not one.'},
  {t:'Orchestration frameworks — LangChain, LlamaIndex and rivals', resolved:null, note:'Still parked, deliberately. Open their docs and ask, pain by pain: which of my hand-felt problems is this abstraction curing? That is framework literacy without framework dependency.'},
  {t:'Formal verification and guaranteed-safe agents', resolved:null, note:'Still parked. Research-stage; worth watching precisely because Chapter 13 has no complete fix.'},
  {t:'“AI strategy” think-pieces and trend articles', resolved:null, note:'Permanently parked.'}
];

/* ---------- Red-Mark Map: the pipeline and its known bleeding points ---------- */
window.PIPELINE = [
  {id:'ingest', label:'Ingestion', ch:16, sub:'extract or render'},
  {id:'chunk',  label:'Chunking',  ch:3,  sub:'cut + situate'},
  {id:'index',  label:'Index',     ch:5,  sub:'embeddings + metadata'},
  {id:'query',  label:'Query',     ch:12, sub:'rewrite'},
  {id:'retrieve',label:'Retrieval',ch:12, sub:'hybrid → filter → rerank'},
  {id:'context',label:'Context',   ch:10, sub:'assemble envelope'},
  {id:'model',  label:'Generation',ch:11, sub:'route, structure'},
  {id:'tools',  label:'Tools',     ch:9,  sub:'budget + write boundary'},
  {id:'check',  label:'Checks',    ch:14, sub:'programmatic + judge'},
  {id:'human',  label:'Oversight', ch:17, sub:'review point'}
];

window.REDMARKS = [
  {id:'r1',  node:'model',   ch:2,  t:'Confident invention when knowledge runs out'},
  {id:'r2',  node:'model',   ch:2,  t:'Guardrail bending under social pressure'},
  {id:'r3',  node:'chunk',   ch:3,  t:'A rule severed from its exception at a boundary'},
  {id:'r4',  node:'chunk',   ch:3,  t:'Orphan chunks — “the aforesaid amount…”'},
  {id:'r5',  node:'retrieve',ch:4,  t:'Spelling-blindness: synonyms, plain language, second languages'},
  {id:'r6',  node:'retrieve',ch:4,  t:'Retrieval never says no — respectable scores on junk'},
  {id:'r7',  node:'retrieve',ch:5,  t:'Exact codes fumbled by meaning-search'},
  {id:'r8',  node:'index',   ch:5,  t:'Silent query/passage degradation'},
  {id:'r9',  node:'check',   ch:6,  t:'Felt-quality ≠ measured-quality — your prediction gap'},
  {id:'r10', node:'context', ch:6,  t:'The envelope meter: k × tokens × queries, forever'},
  {id:'r11', node:'model',   ch:8,  t:'Compelled invention: a required field with no refusal path'},
  {id:'r12', node:'model',   ch:8,  t:'Brittle parse — prose entering a typed system'},
  {id:'r13', node:'tools',   ch:9,  t:'Agent narrating success over a tool failure'},
  {id:'r14', node:'tools',   ch:9,  t:'Unbounded loop — no step budget'},
  {id:'r15', node:'tools',   ch:9,  t:'Wrong tool chosen from a vague description'},
  {id:'r16', node:'context', ch:10, t:'Lost in the middle — accuracy sagging with depth'},
  {id:'r17', node:'context', ch:10, t:'Compaction silently dropping identifiers'},
  {id:'r18', node:'model',   ch:11, t:'Reasoning applied to a retrieval failure'},
  {id:'r19', node:'model',   ch:11, t:'Latency tail making a correct feature unusable'},
  {id:'r20', node:'retrieve',ch:12, t:'Superseded content retrieved with a confident score'},
  {id:'r21', node:'context', ch:13, t:'Indirect injection — a document giving orders'},
  {id:'r22', node:'tools',   ch:13, t:'Exfiltration via a permitted outbound tool'},
  {id:'r23', node:'check',   ch:14, t:'Judge never validated against human labels'},
  {id:'r24', node:'check',   ch:14, t:'Verbosity bias inflating eval scores'},
  {id:'r25', node:'ingest',  ch:16, t:'Table relationships destroyed at extraction'},
  {id:'r26', node:'ingest',  ch:16, t:'Right page retrieved, wrong cell quoted'},
  {id:'r27', node:'human',   ch:17, t:'Oversight specified but not physically exercisable'},
  {id:'r28', node:'human',   ch:17, t:'Governance file with adjectives instead of measurements'},
  {id:'r29', node:'query',   ch:12, t:'Conversational fragment embedded without rewriting'},
  {id:'r30', node:'index',   ch:15, t:'Naive cost estimate missing the four multipliers'}
];

window.PARTS = [
  {n:1, title:'Foundations', blurb:'The envelope, the briefing page, the scissors, the map of meaning, the answer key — and the name withheld until you have earned it.'},
  {n:2, title:'The Modern Stack', blurb:'Structure, action, context, thought, grown-up retrieval, and the adversary. Everything you parked on the LATER page, collected.'},
  {n:3, title:'The Instrument Panel', blurb:'Measurement at scale, money, modality, the paper trail, and shipping. The half that is product management rather than engineering.'}
];

/* Rules and pacing */
window.RULES = [
  ['One chapter per sitting, never two.','If you finish with energy remaining, good — that energy is the fuel that brings you back next time. Spending it tonight means skipping the next sitting. Stopping while still eager is a technique, not a weakness.'],
  ['Park every side-quest.','Every temptation goes on the LATER page and is immediately abandoned. This book teaches a deliberately narrow path; side-quests are valuable only after the path is solid.'],
  ['Notes must be rough.','Five messy bullets beat one formatted page. If your notes look presentable, they cost time and energy that belonged to the next experiment. For professionals whose working life rewards polish, this is the hardest rule — and the most protective.'],
  ['Predict before you measure.','Every measurement in this book is preceded by a written guess. The gap between the two is the actual lesson; without the guess, a number is just a number.']
];

/* Reference layer: setup, glossary, vendor deck, LATER page, red-map nodes. */

window.SETUP = {
  title: 'Setup',
  blurb: 'Optional. Only if you want to run real code. Entirely optional. Every chapter teaches what it teaches without any of this, and the interactive tools in each chapter need no setup at all. Do this only if you want to see the same ideas as real code.',
  oneline: 'You need a free online coding environment (Google Colab) and a free API key (NVIDIA Build) that lets your programs talk to AI models. Forty-five minutes, once, done permanently.',
  sections: [
    {h:'A1. Google Colab — a free place to run code', t:'~10 min', b:[
      ['p','Colab is a free service giving you a temporary computer in Google\'s datacentre, controlled from a browser tab. Nothing is installed on your machine.'],
      ['n',['Go to <code>colab.research.google.com</code> and sign in with any Google account.','Click <strong>+ New notebook</strong>.','You see an empty grey box. That box is a <strong>cell</strong> — type an instruction and press <kbd>Shift</kbd>+<kbd>Enter</kbd> to run it.','Type <code>print("hello")</code> and press <kbd>Shift</kbd>+<kbd>Enter</kbd>.']],
      ['x','The word <code>hello</code> appears below the cell with a small green tick. That was a program. You wrote it and ran it.'],
      ['l',['Cells run top to bottom and remember each other — a value made in cell 1 is usable in cell 5, as long as the machine is on.','The machine switches off when idle, roughly 90 minutes. Your typed cells survive; only their results vanish. Fix: <strong>Runtime → Run all</strong>. This is weather, not failure.','Rename each notebook by clicking its name at top-left: <code>chapter-1</code>, <code>chapter-2</code>, and so on.']]
    ]},
    {h:'A2. An API key — your access code to the AI', t:'~15 min', b:[
      ['p','NVIDIA\'s Build platform provides free access to a large catalogue of models with no credit card. This book needs well under 400 requests; the free allowance is roughly 1,000. It also lets you swap models with a one-line change — a useful skill.'],
      ['n',['Go to <code>build.nvidia.com</code>. Sign up or log in with any email.','Search <code>llama-3.1-8b-instruct</code> and open the model page.','Find <strong>Get API Key</strong> (on some pages: <em>Build with this NIM → Generate Key</em>). Click it.','A long code beginning <code>nvapi-</code> appears. Copy it somewhere private immediately — a password manager or private note. Treat it like an ATM PIN.']],
      ['c','Why this matters professionally','Keys embedded in code get copied, shared, and leaked — one of the most common security failures in software. Knowing how to store them correctly, and why, is itself meeting-grade knowledge.']
    ]},
    {h:'A3. Storing the key so it is not visible', t:'~10 min', b:[
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
  /* Track A and B terms carry the lettered chapter where they are taught. */
  ['Artifact','Something you made that another person can open and check: a document, a spreadsheet, a notebook, a prototype or a dashboard. In this book, progress is measured in artifacts, not in pages read.','A1'],
  ['Mastery gate','The check at the end of every chapter. Score each artifact 0–3. Move on only when all score at least 2 and no safety, privacy or evidence item scores 0.','A1'],
  ['Decision log','A running file where you record each decision with its date, the evidence behind it, and what would make you change it.','A1'],
  ['B2B / B2C','Business-to-business and business-to-consumer. In B2B you sell to companies, and the people who pay, use and approve the product are often different people. In B2C you sell to individuals, who usually pay and use it themselves.','A2'],
  ['Product sense','The habit of checking an idea against four risks before building it. Will people want it (value)? Can they use it (usability)? Can we build it (feasibility)? Does it work for the business (viability)?','A2'],
  ['Jobs to be done','The idea that people “hire” a product to make progress in a particular situation. Written as: “When [situation], I want to [motivation], so I can [outcome].”','A3'],
  ['Leading question','An interview question that suggests the answer the interviewer wants, such as “Isn’t it frustrating when…?” People tend to agree, so the answer is weak evidence.','A3'],
  ['Persona','A short description of a type of user, their goals, workflow and pains. Useful only when every line traces back to real interviews.','A3'],
  ['Journey map','The steps a user goes through to get a job done, with what they do, think and feel at each step, and where the pain is.','A3'],
  ['Riskiest unknown','The assumption that would do the most damage if it were wrong and that you are least sure of. Test it first.','A3'],
  ['TAM / SAM / SOM','Three sizes of market. Total addressable market: everyone with the problem. Serviceable addressable market: the part you can actually serve. Serviceable obtainable market: what you could realistically win in a few years.','A4'],
  ['Positioning statement','One or two sentences saying who a product is for, what it does for them, and how it differs from the main alternative.','A4'],
  ['Moat','An advantage that is hard for competitors to copy, such as deep workflow integration, unique data or earned trust. A prompt or a newer model is not a moat.','A4'],
  ['Opportunity solution tree','A diagram with an outcome at the top, the user needs and pains from interviews below it, then possible solutions, then tests. It stops you jumping straight to a solution.','A4'],
  ['Wedge','The narrow first use case you can clearly win, chosen because it leads on to something bigger.','A5'],
  ['North Star metric','The one number that best measures the value customers get from a product, such as “issues caught in their first week”. Chapter B3 covers it in detail.','A5'],
  ['RICE','A prioritisation score: reach × impact × confidence ÷ effort. Useful for comparing options consistently, but only as good as the guesses you put in.','A5'],
  ['Cost of delay','What you lose for every week an item waits. High when there is a deadline, such as a contract renewal.','A5'],
  ['Outcome roadmap','A roadmap in three columns (now, next and later) where each item is an outcome to achieve rather than a feature with a date.','A6'],
  ['Kill criterion','A result, decided in advance, that means you stop working on something. For example: “stop if fewer than half of design partners act on an alert within four weeks”.','A6'],
  ['OKRs','Objectives and key results. The objective says what you want in words; the 3–4 key results are numbers that show you got there. Key results should be outcomes, not outputs.','A6'],
  ['Guardrail metric','A number that must not get worse while you chase a goal, such as false-alarm rate or cost per customer. It stops a team hitting a target in a way that harms users.','A6'],
  ['Stakeholder map','A grid of the people involved in a decision, placed by how much influence they have and how much they care. It shows who to work closely with and who can veto.','A6'],
  ['Pre-mortem','Before starting, imagine the project has failed and write down why. It surfaces risks people would not raise about a live plan.','A6'],
  ['PRD','Product requirements document: what to build, for whom and why, starting from the problem and its evidence. Chapter 18 covers the AI-specific version.','A7'],
  ['User story','One piece of value from the user’s point of view: “As a [role], I want [action], so that [benefit].” Each story needs acceptance criteria and edge cases.','A7'],
  ['MVP','Minimum viable product: the smallest thing that tests your riskiest assumption with real users. Not a small version of the whole product.','A7'],
  ['Vertical slice','A thin version of a feature that goes through every layer, from input to user value, so a real user can try it early.','A7'],
  ['Time-box','A fixed amount of time for uncertain work, with a result that counts as success and a plan if you do not reach it.','A7'],
  ['Usability test','Watching a real user try to complete a task with your product, without helping, to see where they get stuck.','A7'],
  ['Transformer','The model design behind today’s LLMs. It reads every token in the context at once and learns which earlier tokens matter for predicting the next one.','A8'],
  ['Inference','Running a trained model to get an answer. Training changes the model; inference only uses it. Most of your bill is inference.','A8'],
  ['Pre-training','The first, most expensive training stage: the model learns to predict the next token over a huge amount of text.','A8'],
  ['Instruction tuning','Training after pre-training on examples of instructions and good answers, so the model follows requests instead of just continuing text.','A8'],
  ['RLHF','Reinforcement learning from human feedback. People rank model answers, and the model is trained toward the answers they prefer.','A8'],
  ['Open-weight model','A model whose trained weights are published, so you can download and run it yourself instead of calling a vendor’s API.','A8'],
  ['Willingness to pay','The most a buyer would spend to solve a problem. It is set by what their current alternative costs them, not by your costs.','B1'],
  ['Contribution margin','What each customer leaves you after the costs that grow with them, such as model calls and support. Usually shown as a percentage of revenue.','B1'],
  ['Gross margin','Revenue minus the direct cost of delivering the product. For AI products, the model vendor’s bill is a large part of that cost.','B1'],
  ['Flywheel','A loop where using the product makes it better, which brings more use. It can run on data, on workflow habits or on others building on you.','B1'],
  ['Outcome pricing','Charging for each successful result, such as a resolved ticket, rather than for seats or usage. Needs an agreed way to measure success.','B1'],
  ['AARRR','Five stages of growth: acquisition, activation, retention, referral and revenue. Each stage gets one event you can count.','B2'],
  ['Activation moment','The first time a new user gets the value your product promises.','B2'],
  ['Time-to-value','How long a new user takes to reach the activation moment, measured from sign-up.','B2'],
  ['Growth loop','A cycle where one user’s actions bring in the next user, so the output feeds back into the input.','B2'],
  ['Network effect','When a product gets better for existing users as more people use it. Different from virality, which only brings more people in.','B2'],
  ['Virality','Users bringing in other users, for example by sharing. It helps growth, but does not make the product better for anyone.','B2'],
  ['Dark pattern','A design that tricks users into acting against their own interest, such as a hidden cancel button or pre-ticked invitations.','B2'],
  ['Product-led growth','A go-to-market motion where users sign up and get value on their own, and some upgrade to paid, without talking to sales.','B2'],
  ['Input metric','A number the team can move directly, which you expect to move the North Star metric.','B3'],
  ['Event taxonomy','The list of events a product logs, with a naming rule everyone follows, such as object_action.','B3'],
  ['Tracking plan','The shared document listing every event, its properties, when it fires and who owns it.','B3'],
  ['Funnel','The share of users who complete each step of a process in order. It shows where people drop off.','B2'],
  ['Cohort','A group of users who started in the same period. Retention tables follow each cohort over time.','B3'],
  ['Minimum detectable effect','The smallest change an experiment is designed to detect. It sets how many users the test needs.','B3'],
  ['Selection bias','When the people in your data differ from the people you want to learn about, such as hand-picked early users.','B3'],
  ['State machine','A workflow where code fixes every step and every transition. The failing step is always known.','B5'],
  ['Bounded agent','An agent that chooses its own steps, but only from a fixed tool list and within a step budget and approval rules.','B5'],
  ['Release gate','A check that must pass before a change reaches users. For AI products it includes eval thresholds as well as tests.',29],
  ['Design partner','An early user who agrees to use an unfinished product and tell you what they find, with clear consent.','B6'],
  ['Changelog','A short public note of what changed in each release, why, and what users should do differently.','B6'],
  ['Role matrix','A grid of real job descriptions against the skills they ask for, used to find the skills the market wants and your gaps.','B7'],
  ['Model / LLM','A prediction machine trained on large quantities of text. It continues text plausibly — it does not look things up.',1],
  ['API call','One question in, one answer out — and one charge on the bill. Your app sends a request to the model\'s servers and waits for the reply.',1],
  ['Token','A word-piece — the unit the model reads, writes, and bills in. Roughly ¾ of an English word.',1],
  ['Context window','The maximum size of one envelope: everything in plus everything out.',1.5],
  ['Stateless','Total amnesia — nothing survives between requests on the model\'s side.',1.5],
  ['usage','The receipt: prompt tokens read in, completion tokens written out.',1],
  ['System prompt','A standing instruction sent invisibly with every message, saying how the AI should behave.',2],
  ['Temperature','The dial deciding whether the AI always picks its most likely next guess, or sometimes takes a less likely one. Low means repeatable, not truthful.',2],
  ['Hallucination','When the AI produces something fluent and invented because it had no evidence. Not a malfunction — the normal behaviour of a guessing machine with nothing to go on.',2],
  ['Guardrail','Any mechanism reducing harmful or wrong outputs. The humblest is a sentence in the system prompt.',2],
  ['Chunk','One piece of a document after it has been cut up. The unit that gets stored, searched and sent.',3],
  ['Chunking','The cutting itself — a design decision wearing the costume of a chore.',3],
  ['Fixed-size chunking','Cutting every N words regardless of meaning.',3],
  ['Semantic chunking','Cutting along the document\'s own structure.',3],
  ['Chunk overlap','Repeating the last lines of one chunk at the start of the next, so boundary-straddling answers survive.',3],
  ['Retrieval','Fetching, from all stored chunks, the few most likely to answer a question.',4],
  ['Keyword search','Retrieval by shared words — matches spelling, blind to meaning.',4],
  ['Query','The incoming question.',4],
  ['Hybrid search','Keyword and semantic search run together, results merged.',4],
  ['Top-k','Take the best k results — the dial between recall and precision.',4],
  ['Embedding','The position a piece of text gets on the meaning map, written as a list of numbers. Produced by a small AI whose only job is placing text.',5],
  ['Embedding model','The mapmaker — reads text, outputs its address.',5],
  ['Cosine similarity','The one-line neighbour test — higher = closer in meaning.',5],
  ['Semantic search','Retrieval by meaning-map addresses instead of spelling.',5],
  ['query vs. passage','The declaration of whether you are embedding a question or a document piece. Skip it and quality degrades silently.',5],
  ['Vector database','A system that stores embeddings and finds nearest neighbours fast.',5],
  ['Evaluation','Grading the system against verified expectations — acceptance testing, aimed at AI.',6],
  ['Ground truth','The answer key: questions with verified correct answers, written before you test anything. Without one, "is it good?" has no answer.',6],
  ['Recall','Of what mattered, how much was fetched? Low = missed files.',6],
  ['Precision','Of what was fetched, how much mattered? Low = buried desk.',6],
  ['Acceptance criteria','Pre-agreed numbers and behaviours required before go-live.',6],
  ['RAG','Retrieval-Augmented Generation — retrieve verified text, generate the answer from it.',7],
  ['Schema','A formal description of required output shape: fields, types, what is required.',8],
  ['Structured output','Model output constrained to a schema rather than free prose.',8],
  ['Constrained decoding','Only schema-valid tokens permitted at each step. Makes invalid output impossible, not merely unlikely.',8],
  ['Enum','A field restricted to a fixed list of allowed values.',8],
  ['Refusal path','What the product does when it should not answer: a structured way to report "cannot determine" instead of inventing something. Designed on purpose, or it happens by accident.',8],
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
  ['Error analysis','Reading real outputs and open-coding failures into a taxonomy. The highest-leverage activity in the field.',14.5],
  ['Failure taxonomy','Your named categories of failure, derived from your own traffic.',14.5],
  ['Regression suite','Cases that must pass before any release ships.',14.5],
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
  ['System card','A short document describing what an AI feature is for, what it was measured at, where it fails, and who checks it.',17],
  ['Data lineage','Where data came from, under what right, held where, for how long.',17],
  ['Human oversight','A specified, exercisable review point with authority to overrule.',17],
  ['Shadow AI','Unsanctioned tool use by staff. A measurable reality, not a hypothetical.',17],
  ['AI PRD','A product specification whose acceptance criteria are eval thresholds on a named dataset.',18],
  ['Model pinning','Fixing an exact model version so behaviour does not change beneath you.',18],
  ['Deprecation migration','The re-evaluation required when a provider retires your model.',18],
  ['Kill switch','An immediate flag routing traffic to the non-AI path. Not a rollback.',18],

  /* Ground-floor vocabulary. None of these are AI terms — they are the words
     engineers use around AI and never stop to define, which is exactly why a
     reader who is new to the field stalls on them. */
  ['App','A program someone uses. The thing with buttons. It is the app that talks to the model — the model itself has no interface, no memory and no idea a person exists.',0],
  ['API','A way for one program to ask another program to do something, over the internet. You never see it. When this book says your app "calls the API", it means your app sent a message to the model provider’s computers and waited for a reply.',0],
  ['JSON','A plain-text way of writing structured information so a program can read it: labels and values inside curly braces, like {"role": "user", "content": "hello"}. It is a data format, not code or a database. API requests and responses are written in it.',0],
  ['Endpoint','The specific web address a program sends its request to. Different endpoints do different jobs — one for chat, one for embeddings.',0],
  ['Payload','Whatever is inside the request or reply. The contents of the envelope, as opposed to the envelope itself.',0],
  ['Parameter','A setting you pass with a request — temperature, maximum length, which model. Confusingly, the same word also means the billions of internal numbers a model was trained with. In this book it means the setting unless it says otherwise.',0],
  ['Notebook','A web page where you can type a few lines of code, press a button, and see what happens underneath. It is the tool this book uses so you never have to install anything. Nothing you do in one can break anything.',0],
  ['Runtime','The machine actually running your notebook code. Free notebooks give you one for a few hours and then take it back, which is why your key sometimes needs re-entering.',0],
  ['Deploy','To put a change where real users can reach it. Until something is deployed it exists only on your machine.',0],
  ['Rollback','Putting the previous version back after a bad deploy. It undoes your code. It does not undo a model’s behaviour, which is why Chapter 18 insists a kill switch is a different thing.',0],
  ['Corpus','All the documents your system is allowed to answer from, taken together. Your set of source material. Plural: corpora.',0],
  ['Index','A prepared copy of your corpus, arranged so searching it is fast. Building one is called indexing. Nothing can be retrieved until it has been indexed.',0],
  ['Pipeline','A sequence of steps where each one’s output is the next one’s input. Documents in at one end, an answer out at the other. Chapter 7 draws yours.',0],
  ['Latency','How long the user waits. Measured in seconds, and a product decision rather than a technical detail.',0],
  ['p95','The wait that 95 out of 100 people get or better — so it describes the slow fifth of your users rather than the typical one. Averages hide these people; p95 is what you design for.',0],
  ['SLA','Service-level agreement. A supplier’s written promise about uptime or speed, with a consequence attached if they break it. A promise without a consequence is a marketing claim, not an SLA.',0],
  ['Deterministic','Same input, same output, every time. Ordinary software is deterministic. A language model is not, which is the source of most of the surprise in this field.',0],
  ['Orchestration','Coordinating several steps or several models so they run in the right order and hand results to each other.',0],
  ['Taxonomy','A named set of categories. In Chapter 14 it means your list of the ways your system fails, in your own words, with a count against each.',0],
  ['Prompt','The text your app sends to the model — the user’s question plus any standing instructions attached to it. Mostly ordinary English, not a magic phrase.',1],
  ['Vector','A list of numbers. When this course says a piece of text has a “position” on the meaning map, the position is a vector — a few hundred numbers describing where it sits. You never look at them.',5],
  ['Fine-tuning','Continuing a model’s training on your own examples so it adopts a behaviour. Teaches shape and register, not durable facts. Chapter 19 is the decision.',19],
  ['Rubric','A scoring guide written in advance: what each level of quality looks like, so two people grading the same thing agree.',6],
  ['Drift','When behaviour changes over time without anyone changing the code — a model updated, a corpus grown, traffic shifted.',14],
  ['Audit trail','A record of what the system did and why, kept so someone can check it afterwards.',17],
  ['Pairwise comparison','Asking which of two answers is better, instead of scoring one answer out of ten. More reliable, because people and models are better at comparing than at grading.',14],
  ['Verbosity bias','A grader’s habit of scoring longer answers higher, even when they say nothing extra.',14],
  ['Position bias','A grader’s habit of preferring whichever answer it was shown first.',14],
  ['Blended rate','What you pay per query on average once traffic is spread across several models at different prices.',15],
  ['Cache hit rate','The share of your input that the provider recognised from a previous request and charged less for.',15],
  ['Vision model','A model that reads pictures as well as text — so you can hand it a page image instead of extracted text.',16],
  ['OCR','Software that turns a picture of a page into text. It keeps the words and throws away the layout.',16],
  ['Layout','Where things sit on a page — rows, columns, boxes. It carries meaning that plain text loses.',16],
  ['Barge-in','A person talking over the system mid-sentence. Voice interfaces have to handle it; text ones never face it.',16],
  ['Data residency','Which country your data is physically stored and processed in.',17],
  ['Subprocessor','Another company your provider passes your data to. Their risk becomes yours.',17],
  ['Eval threshold','The number a release has to hit before it ships. An acceptance criterion with a figure in it.',18],
  ['Staged rollout','Releasing to a small slice of users first and watching the numbers before going wider.',18],
  ['Distillation','Training a small model to copy a large one on one narrow job. Most of the quality, a fraction of the cost.',19],
  ['Portability','Whether an improvement survives changing providers. A better prompt and index travel with you; a tuned model does not.',19],
  ['Diagnosis','Naming which kind of wrong you have, with counts, before choosing what to change.',19],
  ['Interface contract','What the product promises to show at each level of certainty — and what it lets the user do about it.',20],
  ['Resolvable citation','A source link that opens the exact passage the claim came from, not just the name of a document.',20],
  ['Correction path','How a user fixes a wrong output, and what that fix records for you.',20],
  ['Graceful degradation','What the feature still does with the AI part switched off.',20]
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
  {t:'Formal verification and guaranteed-safe agents', resolved:null, note:'Still parked. Research-stage; worth watching exactly because Chapter 13 has no complete fix.'},
  {t:'“AI strategy” think-pieces and trend articles', resolved:null, note:'Permanently parked.'},

  /* Appendix D of v4.1 — the parking lot for the applied track. These have no
     resolving chapter on purpose: they stay parked until a project you are
     actually building has a concrete reason to need one. */
  {t:'Deep transformer internals', note:'Attention as \u201cwhich parts of the context matter right now\u201d is enough to hold an architecture conversation. The rest is for when you are training models, not shipping them.'},
  {t:'Distributed GPU training and custom CUDA', note:'A different profession. Interesting, and not on the path between you and a working system.'},
  {t:'Advanced LoRA and PEFT research', note:'Chapter 22 gives you the fine-tuning boundary. Everything past that boundary waits until you have a stable, repeated behaviour worth changing weights for.'},
  {t:'Benchmark archaeology', note:'Chasing which model topped which leaderboard in which month. Your ten cases beat all of it for your decision.'},
  {t:'Vector database vendor internals', note:'You built retrieval with arithmetic. Product internals matter when scale or filtering forces the question, and not before.'},
  {t:'Advanced knowledge graphs', note:'A real technique with a real cost. Park it until retrieval measured on your own ground truth has actually plateaued.'},
  {t:'Custom rerankers', note:'Chapter 24 asks whether an off-the-shelf reranker earned its latency. Training your own is two steps past that answer.'},
  {t:'Advanced multi-agent research', note:'Chapter 26 says start with one model and explicit tools. This is where you look only after evaluation shows the simpler design cannot get there.'},
  {t:'Training a model from scratch, and reproducing frontier papers', note:'Neither is on the route to an applied system you can defend. Both are excellent reasons to never ship one.'}
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

/* Reading order is this array's order, and a part is looked up by n, never by
   position. The playbook adds two lettered tracks either side of Parts I–V:
   Track A (product foundations) before Chapter 1, Track B (business, growth
   and shipping) after Chapter 34. They are numbered 6 and 7 so that nothing
   already stored under 1–5 moves. */
window.PARTS = [
  {n:6, label:'A', track:true, title:'Product foundations',
    blurb:'How to use this course, then the product management basics the rest builds on: product sense, user interviews, market research, strategy and prioritisation, roadmaps and OKRs, specs and prototypes, and how generative AI models work.'},
  {n:1, label:'I', title:'The basics', blurb:'Your first API call, tokens and cost, system prompts and temperature, writing and testing prompts, the five task types, and a complete RAG system: chunking, keyword and embedding search, and evaluation.'},
  {n:2, label:'II', title:'What real systems add', blurb:'Structured output and schema design, tool calling and agents, long context and context engineering, reasoning models, latency, better retrieval, and prompt injection.'},
  {n:3, label:'III', title:'Measuring it, costing it, shipping it', blurb:'Evaluation at scale with code checks and LLM judges, error analysis, cost modelling, document extraction, data handling, governance, and the AI PRD.'},
  {n:4, label:'IV', title:'The decisions that stay yours',
    blurb:'Build or buy, whether to fine-tune, designing for wrong answers, and measuring business impact with a pilot. These are product decisions, not engineering ones.'},
  /* The v4.1 workbook's chapters 8–21, appended rather than merged. Where a
     chapter here revisits ground from Parts I–IV it starts from that result
     instead of re-teaching it — the depth pass, not a second first pass. */
  {n:5, label:'V', title:'The applied track — production depth',
    blurb:'Software basics, choosing a model, context engineering, production RAG, tools and workflows, agents, MCP, multimodal input, evaluation and release gates, observability, security, AI product specs, production architecture, and a capstone system you can defend.'},
  {n:7, label:'B', track:true, title:'Business, growth and shipping',
    blurb:'Pricing and unit economics, growth and onboarding, product analytics and experiments, the AI PM toolchain, harness engineering, shipping to real users, career readiness, and an integrated capstone from real problem to live product.'}
];

/* ---------- The v4.1 appendices ----------

   Appendix A is a worksheet, so it is stored as rows and rendered as one you
   can actually tick. Appendix B is the question list to take into a design
   review. Appendix C is the source set the expanded chapters were built from
   — kept because "reviewed in September 2026" is a claim a reader is entitled
   to check, and because provider APIs move faster than books do.
   Appendix D is merged into the LATER page below rather than duplicated. */
window.APPENDIX = {
  competency: [
    'LLM / API fundamentals',
    'Tokens, context and statelessness',
    'Prompt and context engineering',
    'Structured outputs',
    'RAG and retrieval',
    'Embeddings and vector search',
    'Hybrid search and reranking',
    'Tool calling',
    'Agents and orchestration',
    'MCP and interoperability',
    'Multimodal and voice',
    'Evaluation and LLM-as-judge',
    'Observability and LLMOps',
    'Security and red teaming',
    'Governance and AI risk',
    'AI PRD and acceptance criteria',
    'Cloud architecture and deployment',
    'Vendor strategy and total cost of ownership',
    'Portfolio evidence'
  ],
  review: [
    'What is the simplest architecture that can meet the acceptance criteria?',
    'What does the model know, versus what must be retrieved or supplied?',
    'What is the exact context going into the model?',
    'Which failures are acceptable, and which are fatal?',
    'What is the ground truth, and how is it maintained?',
    'What happens when there is no answer?',
    'What happens when the user asks in another language?',
    'Which tools can the AI call, and with what permissions?',
    'Where is human confirmation required?',
    'How will prompt, model and index changes be regression-tested?',
    'How will latency and cost behave at ten times and a hundred times the traffic?',
    'How do we roll back the model, the prompt, the tool schema or the index?',
    'What evidence proves the vendor claim?',
    'How do we protect sensitive data in prompts, in retrieval and in traces?',
    'What is the exit plan if the model or provider changes its terms or its quality?'
  ],
  sources: [
    ['OpenAI developer documentation','Model guidance, evaluation and retrieval APIs','https://developers.openai.com/api/docs/'],
    ['Anthropic','Prompting practice and agentic systems','https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview'],
    ['Hugging Face','The agents course, and the think-act-observe loop','https://huggingface.co/learn/agents-course/unit0/introduction'],
    ['Microsoft Azure Architecture Center','AI technology overview and context engineering','https://learn.microsoft.com/en-us/azure/architecture/ai-ml/ai-overview'],
    ['Microsoft Azure Architecture Center','RAG design and evaluation','https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/rag/rag-solution-design-and-evaluation-guide'],
    ['Microsoft Azure Architecture Center','Agentic RAG','https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/rag/rag-agentic'],
    ['Microsoft Azure Architecture Center','Agent orchestration patterns','https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/ai-agent-design-patterns'],
    ['Model Context Protocol','Specification and architecture','https://modelcontextprotocol.io/specification/2025-06-18'],
    ['Agent2Agent Protocol','Version 1.0, and how it sits alongside MCP','https://a2a-protocol.org/v1.0.0/'],
    ['NIST','AI Risk Management Framework and the generative AI profile','https://airc.nist.gov/'],
    ['OWASP','GenAI Security Project','https://genai.owasp.org/'],
    ['MLflow','GenAI evaluation and observability','https://mlflow.org/docs/latest/genai/'],
    ['Hiring signals','Applied AI PM and AI engineering roles \u2014 market signals, not standards','https://aipmframework.com/'],
    ['Anthropic','Building Effective Agents \u2014 workflows versus agents, and tool design','https://www.anthropic.com/engineering/building-effective-agents'],
    ['Anthropic','Building Effective AI Agents \u2014 the longer write-up','https://resources.anthropic.com/building-effective-ai-agents'],
    ['OWASP','GenAI / LLM Top 10, 2026 edition','https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/']
  ],
  /* Two labels per column: the full one reads properly on a laptop, the short
     one is what lets all four columns fit on a phone instead of the last one
     hanging off the edge of a scrolling table. */
  columns: [['Can explain','Explain'],['Can build','Build'],
            ['Can evaluate','Measure'],['Can defend','Defend']]
};

/* ---------- The v4.2 appendices ----------

   Three of these are not reference at all, which is why they are not on the
   reference page. The study map says what evidence a block of weeks owes; the
   artifact index is the list of twenty-two things you are meant to finish
   holding; the templates are the shapes those things take. Reading them does
   nothing. So the portal renders the first two as trackers you tick and the
   third as forms you fill, and the chapter that produces each artifact links
   straight to the template that shapes it.

   ch: is a portal chapter id, not a book chapter number — the portal split
   several chapters in two, so 'the chapter that produces this' has to be
   named rather than computed. */
Object.assign(window.APPENDIX, {

  /* Appendix A — the 16-week study map. 'from'/'to' are portal chapter ids;
     a block spanning several chapters shows them as a range of links. */
  studymap: [
    {when:'Weeks 1–4', focus:'Foundations and the engineer’s floor',
     chs:['ch1','ch2','ch3','ch4','ch5','ch6','ch7','ch8f'],
     evidence:'Seven foundation notebooks, and an experiment harness you can re-run.'},
    {when:'Weeks 5–6', focus:'Model choice and context engineering',
     chs:['ch9m','ch10c'],
     evidence:'A Model Selection Card, a context budget, and a memory and state design.'},
    {when:'Weeks 7–8', focus:'Retrieval at production depth',
     chs:['ch11r'],
     evidence:'Chunking, retrieval, hybrid search, reranking, permissions and provenance — each with a measurement.'},
    {when:'Weeks 9–10', focus:'Tools, workflows and agents',
     chs:['ch12t','ch13a'],
     evidence:'A tool contract, a workflow, and a bounded agent measured against that workflow.'},
    {when:'Week 11', focus:'MCP and interoperability',
     chs:['ch14p'],
     evidence:'An MCP mini-demo, and the authorisation matrix that says who may call what.'},
    {when:'Week 12', focus:'Input that is not text',
     chs:['ch15mm'],
     evidence:'A multimodal pipeline, and an evaluation set with cases only that modality can fail.'},
    {when:'Weeks 13–14', focus:'Evaluation and observability',
     chs:['ch16e','ch17o'],
     evidence:'A golden set, an automated evaluation suite, judge validation, traces and a dashboard.'},
    {when:'Week 15', focus:'Security and product',
     chs:['ch18s','ch19pm'],
     evidence:'A risk register, a red-team report, an AI PRD, and unit economics.'},
    {when:'Week 16', focus:'Architecture and delivery',
     chs:['ch20d'],
     evidence:'A technical decision pack, a set of ADRs, and a rollout and rollback plan.'},
    {when:'Capstone', focus:'Discover, build, break, measure, ship, defend — one integrated capstone',
     chs:['ch21cap'],
     evidence:'The complete portfolio evidence pack: technical, product, business and real-user evidence in one repository.'}
  ],

  /* Appendix B — the master artifact index, as a tracker. Each row names the
     chapter that produces it and the template that shapes it, because an
     artifact list with neither is a list of nouns. */
  /* Column 6 is the v4.3 artifact class — experiment, engineering, decision
     or evidence — kept as data here rather than inferred from the template
     key in app code, since the two do not always agree (a workflow demo is
     engineering even though an ADR is the template that shapes it). */
  artifacts: [
    [1,'Seven foundation notebooks','One per foundation chapter — the smallest working thing, kept.','ch1','exp','engineering'],
    [2,'Chunking experiment','The strategy, worked examples, a question set, and the measured effect on retrieval.','ch11r','exp','experiment'],
    [3,'Retrieval benchmark','Lexical, dense and hybrid, scored per query rather than in aggregate.','ch11r','exp','experiment'],
    [4,'Reranking experiment','Candidate recall, precision at k, added latency, and the decision you took.','ch11r','exp','experiment'],
    [5,'Production-style RAG','Ingestion, metadata, permissions, provenance, retrieval, generation and a rollback path.','ch11r','adr','engineering'],
    [6,'Tool-calling demo','The tool schema, argument validation, and what happens when the call fails.','ch12t','exp','engineering'],
    [7,'Workflow demo','Deterministic control flow, with the state transitions written down.','ch12t','adr','engineering'],
    [8,'Bounded agent demo','Tools, state, a step limit, a timeout, an approval point, and named stop reasons.','ch13a','adr','engineering'],
    [9,'MCP mini-demo','Capability discovery and invocation, plus evidence of where the trust boundary sits.','ch14p','exp','engineering'],
    [10,'Multimodal or voice pipeline','Extraction, provenance, and tests that only this modality can fail.','ch15mm','exp','engineering'],
    [11,'Golden dataset','Versioned cases with the expected behaviour and the evidence each one rests on.','ch16e','evalcase','evidence'],
    [12,'Error taxonomy','Labelled failures, grouped by root cause rather than by symptom.','ch16e','fail','evidence'],
    [13,'Automated evaluation suite','Retrieval, generation, tool, schema, safety and regression checks in one run.','ch16e','evalcase','engineering'],
    [14,'LLM-judge validation','How often the judge agrees with a human, and which way it is biased.','ch16e','exp','experiment'],
    [15,'Observability and trace report','A trace schema, latency, cost, and a dashboard you would actually open.','ch17o','trace','evidence'],
    [16,'AI PRD','Problem, scope, context, tools, failures, metrics, safety, rollout and rollback.','ch19pm','prd','decision'],
    [17,'Unit-economics model','Cost per call and cost per successful task, with scenarios.','ch19pm','gate','decision'],
    [18,'Security and red-team report','Attack cases, the controls, the evidence, and the risk you are accepting.','ch18s','risk','evidence'],
    [19,'Architecture Decision Records','The major decisions, their alternatives, the evidence, and what would reopen them.','ch20d','adr','decision'],
    [20,'Production architecture','A system diagram, the trust boundaries, deployment and operations.','ch20d','adr','engineering'],
    [21,'Final capstone repository','Reproducible code, tests, evaluation, real-user evidence and documentation.','ch21cap','gate','engineering'],
    [22,'Executive briefing deck','Five minutes on the outcome, twenty minutes of technical defence, and a public case study.','ch21cap','prd','decision']
  ],

  /* Appendix C — the reusable templates. Fields marked 'long' get a text area
     rather than a line, because those are the ones people actually write
     paragraphs into. The placeholder is the teaching: a blank field labelled
     "Residual risk" is a field most people leave blank. */
  templates: [
    {key:'exp', name:'Experiment Record', ch:'ch8f',
     why:'Fill one every time you change one thing and measure. It is the difference between an experiment and an afternoon.',
     fields:[
      ['Experiment ID and date','exp-014 · 12 March'],
      ['Hypothesis','What you think will happen, and why', 'long'],
      ['Input set','Which cases you ran it on, and how many'],
      ['Model and configuration','Model, version, temperature, anything else that could move the result'],
      ['The one thing you changed','Exactly one. If it is two, this is two experiments'],
      ['What you expected','Write the number down before you look', 'long'],
      ['What actually happened','', 'long'],
      ['Failures you saw','The interesting part', 'long'],
      ['Metric before and after','0.62 → 0.71 on Recall@5'],
      ['Conclusion','What you now believe that you did not believe this morning', 'long'],
      ['Next experiment','The one this result makes obvious']]},

    {key:'fail', name:'Failure Finding', ch:'ch16e',
     why:'One per failure you find yourself. A pile of these is the most convincing thing you can bring to a review.',
     fields:[
      ['What broke','One sentence a stranger would understand'],
      ['The exact input','Paste it, do not describe it', 'long'],
      ['What it produced','', 'long'],
      ['What it should have produced','', 'long'],
      ['Evidence or trace','Request id, trace link, or the log line'],
      ['Root cause — your first guess','', 'long'],
      ['Root cause — confirmed','What you proved, not what you suspect', 'long'],
      ['The fix','', 'long'],
      ['Metric before and after','Proof the fix did something'],
      ['Residual risk','What can still go wrong here', 'long'],
      ['Still unsolved','The honest line that makes the rest credible', 'long']]},

    {key:'adr', name:'Architecture Decision Record', ch:'ch20d',
     why:'Write one when a decision would be expensive to reverse. Six months later this is the only record of why.',
     fields:[
      ['Decision','One sentence, in the past tense: "We chose …"'],
      ['Context','What situation forced a decision at all', 'long'],
      ['Requirements','What the answer had to satisfy', 'long'],
      ['Options considered','Including the one you rejected quickly', 'long'],
      ['Evidence','The measurement, not the opinion', 'long'],
      ['Why this one','', 'long'],
      ['Trade-offs accepted','What you gave up', 'long'],
      ['Security implications','', 'long'],
      ['Cost and latency implications','']
      ,['Consequences','What this now forces or forbids downstream', 'long'],
      ['What would reopen this','A number or an event, not "if things change"'],
      ['Owner and date','']]},

    {key:'prd', name:'AI PRD', ch:'ch19pm',
     why:'The specification for a system whose behaviour is probabilistic. Most of these rows do not exist in an ordinary PRD, and they are the rows that decide whether it ships.',
     fields:[
      ['User and problem','Who, and what is going wrong for them today', 'long'],
      ['Current baseline','What happens now, with a number attached'],
      ['Why AI','What makes deterministic software the wrong tool here', 'long'],
      ['Scope and non-goals','The non-goals are the load-bearing half', 'long'],
      ['Inputs and data','Where it comes from, who owns it, how fresh it is', 'long'],
      ['Context strategy','What goes into the model, and what gets evicted first', 'long'],
      ['Model strategy','Which model, and what would make you change it'],
      ['Retrieval strategy','Or "none", stated deliberately', 'long'],
      ['Tools and actions','What it can do, not just what it can say', 'long'],
      ['The human’s role','Where a person confirms, and where they cannot', 'long'],
      ['Failure modes','Which are acceptable and which are fatal', 'long'],
      ['Acceptance criteria','A metric, a test set and a tolerance. All three', 'long'],
      ['Evaluation dataset','Which set, how many cases, who owns it'],
      ['Safety and security','', 'long'],
      ['Latency SLO','p95, not average'],
      ['Cost ceiling','Per successful task, not per call'],
      ['Instrumentation','What you will be able to see on a bad Tuesday', 'long'],
      ['Rollout','', 'long'],
      ['Rollback','What exactly you would turn off, and how fast', 'long'],
      ['Ownership','Who is called when it breaks']]},

    {key:'risk', name:'AI Risk Register', ch:'ch18s',
     why:'One row per risk. The row that matters most is the last one, because a register without residual risk is a wish list.',
     fields:[
      ['Risk ID',''],
      ['Asset or data at stake',''],
      ['Threat','What someone could do, in plain words', 'long'],
      ['Impact if it happens','', 'long'],
      ['Likelihood','And what that estimate is based on'],
      ['Control','What actually stops it — an enforced boundary, not a prompt', 'long'],
      ['Evidence or test','How you know the control works'],
      ['Owner',''],
      ['Residual risk','What is still true after the control', 'long'],
      ['Treatment','Accept, mitigate further, transfer, or avoid'],
      ['Review date','']]},

    {key:'vendor', name:'Model and Vendor Scorecard', ch:'ch20d',
     why:'Fill one per option, then compare. Exit cost is on here deliberately — it is the row nobody scores until the price changes.',
     fields:[
      ['Option','Model or provider'],
      ['Task quality','Your ten cases, not a leaderboard'],
      ['Safety and data controls','What happens to your data', 'long'],
      ['Latency','p95 at your payload size'],
      ['Cost','Per successful task'],
      ['Context and tool capability','', 'long'],
      ['Region and compliance fit',''],
      ['Support','What you get when it breaks at 2am'],
      ['Interoperability','How much of your code assumes this vendor', 'long'],
      ['Migration and exit cost','A number of weeks, honestly estimated'],
      ['Benchmark evidence','Link to the run', 'long'],
      ['Decision','']]},

    {key:'evalcase', name:'Evaluation Case', ch:'ch16e',
     why:'One row per case in your golden set. Write the expected behaviour before you see what the model does — afterwards is not evaluation.',
     fields:[
      ['Case ID',''],
      ['Category','Happy path, edge, no-answer, adversarial…'],
      ['Input','Exactly as a user would send it', 'long'],
      ['Expected behaviour','', 'long'],
      ['Evidence it should use','Chunk or document ids'],
      ['Expected tool call','Or "none"'],
      ['Safety expectation','What it must refuse or flag'],
      ['Ground truth','And where it came from', 'long'],
      ['Model output','', 'long'],
      ['Automated checks','Which ones ran, and what they said'],
      ['Human score',''],
      ['Judge score',''],
      ['Pass or fail',''],
      ['Notes','', 'long']]},

    {key:'trace', name:'Observability Trace Schema', ch:'ch17o',
     why:'Not a form to fill by hand — a list of fields your system must emit. Design it here, then check a real trace against it.',
     fields:[
      ['Request ID',''],
      ['Timestamp',''],
      ['User or tenant policy context','Which permissions were in force'],
      ['Model and version','Changes without a deploy'],
      ['Prompt version','Also changes without a deploy'],
      ['Retrieved chunk IDs','The field most often left out, and the one you will need'],
      ['Tool calls','With arguments and results', 'long'],
      ['Latency by stage','Not one total'],
      ['Input and output tokens',''],
      ['Cost estimate',''],
      ['Final output','', 'long'],
      ['Evaluation result','If anything scored it'],
      ['Error or status',''],
      ['Trace links','Upstream and downstream']]},

    {key:'gate', name:'Release Gate', ch:'ch16e',
     why:'Agree these numbers before the release meeting. A gate negotiated during the meeting is not a gate.',
     fields:[
      ['Retrieval threshold','Recall@k ≥ …'],
      ['Generation or task-success threshold',''],
      ['Safety threshold',''],
      ['Tool and schema threshold','Valid-call rate'],
      ['p95 latency limit',''],
      ['Cost per successful task ceiling',''],
      ['Regression tolerance','How much worse a single case may get'],
      ['Known risks accepted','Named, with an owner', 'long'],
      ['Rollback trigger','The number that means turn it off', 'long'],
      ['Approver','']]}
  ],

  /* Appendix D — the question bank. The fifteen in `review` are the short list
     for a live review; these thirty-one are the full set to study against. */
  questions: [
    'What user problem are we solving?',
    'Why AI instead of ordinary deterministic software?',
    'What is the simplest architecture that could work?',
    'What does the model already know, and what must be supplied or retrieved?',
    'What exactly is in the model’s context?',
    'What is the ground truth?',
    'How do we handle the cases where there is no answer?',
    'Which retrieval failures matter most?',
    'Why this chunking strategy and not another?',
    'Why hybrid search?',
    'Why reranking?',
    'What data can this particular user access?',
    'How are those permissions enforced, and where?',
    'Which tools can the AI call?',
    'What side effects can each tool cause?',
    'Where is human approval required?',
    'Why a workflow instead of an agent?',
    'Why an agent instead of a workflow?',
    'What stops an agent from looping forever?',
    'How are prompts, models, indexes and tools versioned?',
    'How do we reproduce a bad result from last Tuesday?',
    'How will quality be measured?',
    'How will the evaluation set grow as we learn?',
    'How do we know the LLM judge can be trusted?',
    'What happens at ten times the traffic?',
    'What is the cost per successful task?',
    'What is the rollback plan?',
    'What is the plan if we have to leave this provider?',
    'How does the system behave under prompt injection?',
    'What happens when the model or provider is unavailable?',
    'What evidence justifies releasing this?'
  ],

  /* The final exit test. Thirteen things, each of which is a demonstration
     rather than a topic — so they are checkboxes, like the worksheet. */
  exit: [
    'Explain the model, API and context lifecycle end to end.',
    'Draw a simple architecture and point at the trust boundaries.',
    'Build a small working proof of the core behaviour.',
    'Define an evaluation set with ground truth behind it.',
    'Name the retrieval, generation, tool and security failure modes.',
    'Choose between a direct call, RAG, a workflow and an agent — on evidence.',
    'Define tool contracts, permissions, approvals and stop conditions.',
    'Instrument latency, tokens, cost and traces.',
    'Write AI acceptance criteria, and the PRD around them.',
    'Estimate cost per successful task and explain what drives it.',
    'Produce a security risk register with red-team evidence.',
    'Define release, rollback and vendor-exit criteria.',
    'Explain the trade-offs to an engineer and to a business stakeholder, differently.'
  ],

  exitNote: 'The final artifact is your repository plus the evidence pack: what you built, what broke, what you measured, what you changed, and what is still unresolved.'
});

/* Rules and pacing */
window.RULES = [
  ['One chapter per sitting, never two.','If you finish with energy remaining, good — that energy is the fuel that brings you back next time. Spending it tonight means skipping the next sitting. Stopping while still eager is a technique, not a weakness.'],
  ['Park every side-quest.','Every temptation goes on the LATER page and is immediately abandoned. This book teaches a deliberately narrow path; side-quests are valuable only after the path is solid.'],
  ['Notes must be rough.','Five messy bullets beat one formatted page. If your notes look presentable, they cost time and energy that belonged to the next experiment. For professionals whose working life rewards polish, this is the hardest rule — and the most protective.'],
  ['Predict before you measure.','Every measurement in this book is preceded by a written guess. The gap between the two is the actual lesson; without the guess, a number is just a number.']
];

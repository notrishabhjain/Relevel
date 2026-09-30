# The capstone project: Bharat Privacy Guard

This document exists because one learner's capstone problem — an Indian,
multilingual, code-switch-aware re-imagining of Rampart-style PII detection —
is concrete enough, and maps onto enough of the existing curriculum, that it
is worth fixing as *the* worked example for that learner's run through the
course, rather than leaving every chapter's capstone generic ("pick a
document type from your own work").

It does two things:

1. Defines the project itself — scope, architecture, and the MVP a solo
   learner can actually build across one pass through the course, as
   distinct from the full multi-team-years vision.
2. Maps every capstone-bearing chapter (63 of the 65 chapters) to a concrete
   Bharat Privacy Guard deliverable, so that working the course start to
   finish also means building the project start to finish.

Like `v4.3-content-audit.md` before it, this is the spec the content changes
are checked against. The **Status** column in the mapping table below is the
tracking log: which chapters' actual `capstone` data has been rewritten to
point at this project, and which are mapped here but still carry their
original generic capstone in `src/data/`.

## What Bharat Privacy Guard is — and is not

**The pitch.** Not a PII-redaction library. A privacy-by-default layer that
sits between an Indian user and the website, app, backend or AI system they
are typing into — detecting personal and quasi-identifying information in
English, Hindi and Hinglish (with other Indian languages as a stretch goal),
classifying it, and letting an application redact, mask, minimise or simply
warn before that data goes anywhere.

**Why not just adopt Rampart.** Rampart's own model card scopes it to seven
Latin-script languages and reports ~13.7% recall on non-Latin script in its
own testing. Most Indian PII is typed in Devanagari, in Hinglish, or in
code-switched sentences that move between the two mid-clause. A detector
built and evaluated only on Latin-script text is the wrong shape for this
problem, not merely an underperforming version of the right one.

**Why not "a DPDP compliance engine."** DPDP compliance is an organisational
and legal outcome — purpose limitation, notices, consent artefacts, security
safeguards, breach process, retention, contracts — of which PII detection is
one technical input. The project is positioned as *a technical privacy layer
that helps implement data minimisation and privacy-by-design under India's
DPDP framework*, never as "DPDP compliant" on its own. This framing carries
through into the system-card and PRD capstones below (Part III, Part V) —
they should make the same distinction explicitly, not just this document.

**Three product surfaces, one engine.** The full vision has three surfaces
sharing one detection/policy engine:

```
                         PRIVACY ENGINE
        (deterministic recognizers + NER + policy + redaction)
                                │
            ┌───────────────────┼───────────────────┐
            │                   │                   │
            ▼                   ▼                   ▼
        Privacy SDK        Privacy Gateway     Citizen Privacy Guard
      (developers embed   (organisations put   (a browser extension
       it in a web/app     it in front of      that warns a person
       form or an LLM      APIs, logs and      before they submit
       prompt)              LLM traffic)        personal data)
```

**The course-scope MVP.** One learner, one course, cannot ship all three
surfaces production-hardened with a ten-language NER model. The MVP that the
mapping below builds toward is:

- **Languages:** English, Hindi, Hinglish. (Other Indian languages are a
  named stretch goal, not a silent scope cut — say so explicitly in the
  PRD and system card capstones.)
- **Identifiers (deterministic, Layer 1):** PAN, Aadhaar, Indian mobile
  number, email, IFSC, bank account number, UPI ID, GSTIN, passport number,
  vehicle registration, PIN code.
- **Contextual entities (NER, Layer 2):** person name, address, organisation,
  date of birth, family relationship, profession.
- **Quasi-identifier / contextual-sensitivity scoring (Layer 3):** a risk
  score rather than a boolean, for sentences like "the only diabetic patient
  in my village who received a transplant last year" — no explicit PII
  string, but identifying in context.
- **One product surface, built end to end:** the Privacy SDK — a small
  library plus a working demo page that sanitises text before it reaches an
  LLM call. The Gateway and the browser extension are designed (PRD,
  architecture, risk register) but not necessarily shipped; say in the
  relevant capstone which parts you actually built versus specified.
- **Architecture, not one model.** Layer 1 (regex/deterministic) never calls
  a model. Layer 2 (NER) is a small, fast model or a well-tested library.
  Layer 3 (contextual risk) is the only layer that may need an LLM call, and
  only for ambiguous cases the first two layers flag rather than resolve.
  This is the same lesson Chapter B5's harness-engineering capstone teaches
  generically (a state machine beats an agent for a fixed process); here it
  is the actual production decision, not an exercise.

## The test corpus: one answer key, reused all the way through

The generic course reuses one worked example (a fictional support-ticket
summariser called "Theme Finder") across chapters so that a technique
learned in one chapter can be measured against the same material in the
next. Bharat Privacy Guard needs the same discipline, or every chapter's
"build a test set" step starts from zero.

Build this once, at the Chapter 2.2 capstone (the course's first "build a
test set" capstone), and extend rather than replace it at every later
chapter that touches evaluation (6, 14, 14.5, 16e):

- 30–50 rows, each a realistic sentence or short message, labelled with every
  PII/quasi-identifier span and its type.
- A mix of English, Hindi (Devanagari) and Hinglish — not three separate
  pools, several rows that code-switch mid-sentence, since that is the
  actual failure mode Rampart does not cover.
- Include the adversarial cases the project's own write-up names: OCR'd text
  from a scanned ID card, a voice-transcription-style run-on sentence,
  deliberate misspellings, a PAN or Aadhaar broken across two lines, a
  quasi-identifier row with no explicit PII string at all, and at least one
  prompt-injection attempt hidden inside a "PII" field (Chapter 13's audit
  depends on this row existing).
- Version it. When a chapter's capstone adds rows (error analysis in 14.5,
  OCR cases in 16), that is a new version of the same file, not a parallel
  one — Chapter 6's "answer key" pattern in the generic course is explicit
  about this for the same reason.

## Chapter-by-chapter mapping

Status: **rewritten** = the chapter's actual `capstone` data in `src/data/`
has been changed to this; **mapped** = this is the intended deliverable but
the chapter still carries its original generic capstone; use this table by
hand until it is rewritten.

### Track A — product foundations (work through first)

| Chapter | Generic capstone | Bharat Privacy Guard deliverable | Status |
|---|---|---|---|
| A1 | Set up your learning system | Scorecard against the skills this project actually needs (regex/NER engineering, Indian regulatory context, SDK API design); repository scaffolding for the real project; Bharat Privacy Guard named as the capstone problem, validated against two alternatives you rejected and why. | rewritten |
| A2 | Map and tear down a product | Teardown Rampart itself — discovery/delivery/distribution, its moat, and specifically where its Latin-script scope and ~13.7% non-Latin recall leave a gap for India. Check an AI-generated teardown of Rampart against the model card's own numbers. | rewritten |
| A3 | Five interviews and a problem brief | Interview five real people who would use or be affected by this: a developer handling user data, a compliance/legal contact, a support agent who has seen PII typed into a chat box, an end user, a founder evaluating build-vs-buy. | rewritten |
| A4 | Size the market and map the opportunities | TAM/SAM/SOM for Indian privacy-tooling; competitor map (Rampart, Microsoft Presidio, Indian DPDP-compliance startups); the moat is specifically Indian-language and code-switch detection. | rewritten |
| A5 | Write the strategy and prioritise | Strategy memo choosing the wedge (SDK first, not Gateway or browser extension); RICE-score the three product surfaces; build/buy/partner decision for each detection layer (regex vs NER library vs LLM). | rewritten |
| A6 | Roadmap, OKRs and a decision memo | Roadmap mapped to the rest of this course's chapters; OKRs for "ship a working SDK demo by the Part V capstone." | rewritten |
| A7 | PRD, prototype and a sprint plan | First working prototype: a page where you paste English/Hindi/Hinglish text and see it redacted. PRD covers the MVP scope decisions above explicitly, including what is out of scope. | rewritten |
| A8 | Three experiments on how models work | Run the three experiments specifically on Devanagari and Hinglish text — tokenisation of Indian names and Aadhaar-shaped numbers, and what the attention visualiser shows for a code-switched sentence. This is the first real evidence for why Layer 2/3 cannot just reuse an English-only NER model unchanged. | rewritten |

### Part I — the basics (Chapters 0.5–7)

| Chapter | Generic capstone | Bharat Privacy Guard deliverable | Status |
|---|---|---|---|
| ch05 | Estimate the cost of a feature using only this page | Tokenise sample Indian PII strings (names, Aadhaar-shaped numbers, a Hinglish sentence) and compare token counts against the same content in plain English — the first measured evidence that Indian text costs more per call. | mapped |
| ch1 | Measure the cost of one real request | First API call: ask a model to find the PII in one real (synthetic) Hinglish sentence. Record the usage block. This is Layer 3's baseline, before any engineering. | mapped |
| ch15b | Estimate the cost of a real feature | Cost a "scan every message before it reaches an LLM" feature at chat-app volume, including the conversation-history multiplier. | mapped |
| ch2 | Write a system prompt and test it | Write and test the system prompt for the LLM-based fallback detector (Layer 3) — the instructions the model follows when the deterministic and NER layers are unsure. | mapped |
| ch21 | Write a prompt someone else can use | Refine that detector prompt with the four techniques; hand it and five real rows to a colleague to run blind. | mapped |
| ch22 | A test set, and what it found | **Build the project's answer key** — see "The test corpus" above. This is the single most load-bearing capstone in the whole mapping; every later evaluation chapter extends this file. | mapped |
| ch23 | Break down one real request | Break "detect and redact PII in Indian text" into its task types: classification (identifier type), extraction (span), generation (the redacted replacement) — this becomes the architecture's layer split. | mapped |
| ch24 | A classifier you would trust to route real work | Build the identifier-type classifier: given a matched span, is it a PAN, Aadhaar, mobile number or something else. | mapped |
| ch25 | A summariser with a fact check | A privacy-audit summary of a batch of scanned messages, fact-checked so it never reports a redaction that did not happen. | mapped |
| ch3 | A chunking rule for your own documents | Chunking rule for long inputs (support tickets, uploaded documents) so Layer 1's regex pass and Layer 2's NER pass both see complete identifiers, never split across a chunk boundary. | mapped |
| ch4 | Map where keyword search fails | **Layer 1 itself** — the deterministic, regex/keyword-based recognizer for PAN, Aadhaar, mobile, IFSC, GSTIN and the rest. Score it by hand against the answer key and write down exactly where keyword matching fails (a PAN-shaped string that is not a PAN; an Aadhaar split across a line break). | mapped |
| ch5 | Compare keyword and meaning search on your own document | Layer 3's semantic pass: detect quasi-identifying sentences ("the only diabetic patient in my village...") by meaning, not by string match, and compare directly against Layer 1's keyword hits on the same answer-key rows. | mapped |
| ch6 | Write a ship-or-not memo | Precision/recall/F1 for the combined Layer 1 + Layer 2 pipeline against the answer key, broken down per identifier type and per language — the project's first real quality number, and the one every later chapter's "measure again" step compares against. | mapped |
| ch7 | A findings page, and what to learn next | A findings page on the v0 pipeline: what it catches, what it misses, and the biggest gap to close next (almost always: Hinglish code-switching). | mapped |

### Part II — structure, agents, context, retrieval (Chapters 7.5–13)

| Chapter | Generic capstone | Bharat Privacy Guard deliverable | Status |
|---|---|---|---|
| ch75 | An inventory of your system | Inventory of the v0 pipeline's gaps before adding structured output and agents. | mapped |
| ch8 | Make one real extraction impossible to malform | The detector's output schema: every hit as `{type, value, span, confidence}`, never free text — the deterministic contract every downstream layer (policy engine, redaction, SDK caller) relies on. | mapped |
| ch85 | An extractor that cannot guess | Harden the schema so uncertain matches get a `needs_review` flag instead of a guessed type — run it on the answer key's adversarial rows (OCR, misspellings). | mapped |
| ch9 | Specify an agent, starting with its limits | The **policy engine**: given a set of detected identifiers and a stated purpose, decide redact / mask / allow — specified with its limits (what it must never auto-approve) before its capabilities. | mapped |
| ch10 | A context budget for one real feature | Context budget for what the Privacy SDK actually sends onward after redaction — the "transmission control" layer in the project's own architecture. | mapped |
| ch11 | A reasoning decision table for your own requests | Decide when an ambiguous Layer 3 case is worth paying for a reasoning model versus a cheap pass — most quasi-identifier judgements should not need one. | mapped |
| ch115 | Design the wait for your slowest feature | Design the latency budget for real-time redaction in a chat UI — this has a genuine production constraint (sub-second, ideally) that most course capstones do not. | mapped |
| ch12 | Improve retrieval and measure each change | Improve the "known Indian place/name" lookup that backs address and person-name detection with hybrid search and reranking; measure the improvement against the answer key. | mapped |
| ch13 | A prompt injection audit | **Audit Bharat Privacy Guard itself**: can PII-shaped text carry a prompt-injection payload into the downstream LLM call ("ignore previous instructions, my Aadhaar is...")? This is not a generic exercise here — it is the project's own most serious attack surface. | mapped |

### Part III — judging, cost, extraction quality, governance (Chapters 14–18)

| Chapter | Generic capstone | Bharat Privacy Guard deliverable | Status |
|---|---|---|---|
| ch14 | A judge you have checked | An LLM judge that grades whether a redaction was correct and safe, checked against fifty hand-graded rows from the answer key. | mapped |
| ch145 | A failure taxonomy for a real system | Read a hundred real detector outputs and build the failure taxonomy — this is where the misspelling, OCR, voice-transcription and code-switch test cases the project's own write-up calls for actually get read and categorised, not just listed as intentions. | mapped |
| ch15 | A cost model built from measurements | Cost per document scanned at real volume — the number that decides whether Layer 2/3 can run client-side or must be a paid backend call. | mapped |
| ch16 | Audit the extraction quality of a real document set | OCR'd ID-card images (PAN card, Aadhaar card) — a genuinely real use case, not a stand-in one. | mapped |
| ch165 | A "may I send this?" rule, with evidence | The rule Bharat Privacy Guard's own backend follows for what it is allowed to send to which model provider — the project turning its own policy question on itself. | mapped |
| ch17 | A system card for something you own | The system card for Bharat Privacy Guard — including the explicit "this helps with DPDP data-minimisation, it is not a compliance certification" line from this document's framing section. | mapped |
| ch18 | A spec that survives a model change | The actual PRD, with the migration rehearsal: what breaks if the Layer 2 NER model or the Layer 3 LLM provider changes underneath the product. | mapped |

### Part IV — build/buy, fine-tuning, interface states, pilots (Chapters 18.5–20.5)

| Chapter | Generic capstone | Bharat Privacy Guard deliverable | Status |
|---|---|---|---|
| ch185 | A build-or-buy recommendation with a review date | Build-or-buy for each layer: hand-rolled regex vs an existing library (e.g. Presidio's recognizers) for Layer 1; a small trained/fine-tuned model vs an existing multilingual NER model for Layer 2. | mapped |
| ch19 | Answer a fine-tuning proposal with evidence | Should Layer 2 be a fine-tuned small Indian-language NER model, or a prompted general model? Cost and evaluate the proposal honestly — this is the project's Layer 3 architecture decision from its own write-up, made with real numbers. | mapped |
| ch20 | Design the four states for a real feature | Design the SDK's four states: confident redaction, flagged-uncertain, no-PII-found, and error — what each looks like to the calling application. | mapped |
| ch205 | Design a pilot that could fail | Pilot design for 5–10 real developers trying the SDK against their own forms or chat flows, with a stated failure threshold. | mapped |

### Part V — the engineering track (Chapters 21–34)

| Chapter | Generic capstone | Bharat Privacy Guard deliverable | Status |
|---|---|---|---|
| ch8f | An experiment harness in version control | **The project's evaluation harness itself** — the piece of infrastructure that runs the answer key against the current pipeline and reports precision/recall/F1 per identifier type and language, kept in Git and extended through every later chapter. | mapped |
| ch9m | A model selection card | Benchmark candidate models for Layer 2/3 on the Indian-language answer key specifically; the card records which model, on what evidence, with what fallback. | mapped |
| ch10c | A context budget for one assistant | What goes into the Layer 3 LLM call specifically — the "AI Privacy Guard" stage of the project's own architecture diagram (sanitising prompts before they reach an LLM). | mapped |
| ch11r | An enterprise retrieval architecture on one page | The Privacy Gateway surface's architecture, on one page — ingestion, access control, provenance — specified even if not built for this course. | mapped |
| ch12t | A workflow that drafts but cannot submit | The policy engine's draft-only mode: it can propose a redaction or a flag, but an irreversible action (auto-deleting logged PII, auto-blocking a request) needs approval. | mapped |
| ch13a | An agent measured against the workflow it would replace | The project's own point 4, made real: measure a deterministic Layer 1 + Layer 2 pipeline (a state machine) against a bounded agent that decides what is PII step by step, on the same twenty rows. Report which wins and why — most likely the state machine, which is itself the finding worth writing down. | mapped |
| ch14p | A tool access policy | Tool access policy for whatever the Gateway or browser extension would need to call (read the page's form fields; never send raw values anywhere without going through the policy engine first). | mapped |
| ch15mm | Specify a voice assistant for meeting follow-up | Specify OCR (ID-card images) and voice-transcription handling for the project directly — the two adversarial input types the project's own write-up names explicitly. | mapped |
| ch16e | A release gate | The release gate for shipping a pipeline change: eval thresholds on the answer key that must hold before a new regex, model or prompt version ships. | mapped |
| ch17o | Specify a six-panel production dashboard | The Privacy Dashboard from the project's own "Audit / Evidence" component — quality, safety, latency, cost, traffic and failures, specifically for the detection pipeline. | mapped |
| ch18s | An AI risk register with evidence | The risk register for Bharat Privacy Guard itself: a missed Aadhaar number, a false-positive redaction that breaks a legitimate message, a model-provider outage. | mapped |
| ch19pm | An AI PRD for a policy assistant | Retarget directly: an AI PRD **for Bharat Privacy Guard**, not a stand-in policy assistant — the chapter's own framing (a probabilistic system making policy-bound decisions) already fits this project exactly. | mapped |
| ch20d | A ten-slide technical decision pack | The technical decision pack for the project's architecture: baseline, the three-layer design, alternatives rejected (single-model approach), evaluation numbers, cost, rollout. | mapped |
| ch21cap | Applied AI findings: what I built, what broke, who used it and what the evidence shows | **The final capstone is Bharat Privacy Guard's findings document** — repository, README, architecture diagram, decision log, evaluation numbers, security findings, cost model, PRD, risk register, real-user evidence, and what remains out of scope. This is the "ship and defend" milestone for the whole project. | mapped |

### Track B — business, growth, shipping, career (work through last)

| Chapter | Generic capstone | Bharat Privacy Guard deliverable | Status |
|---|---|---|---|
| B1 | A pricing recommendation, backed by a cost model | Pricing for the SDK (likely free/open-source) versus a paid Gateway tier; interview five prospects — developers and compliance buyers are two different buyers with two different costs-of-the-problem. | mapped |
| B2 | Growth events, an onboarding test and a growth loop | Growth loop for a developer tool: "add the package, paste one function call, see it working" — test the first five minutes with a real developer who has never seen the project before. | mapped |
| B3 | A tracking plan, a funnel and cohort, and an experiment design | Track detection accuracy and false-positive rate over time as a product metric, not just an offline eval number; design an experiment for one policy-threshold change. | mapped |
| B4 | One tool per capability, written down and defended | Name the actual tools: which NER library or model host, which language for the SDK, which datastore for the answer key and traces, which deploy target — one per capability, defended, not a five-way comparison. | mapped |
| B5 | A harness diagram, a two-way build and a release checklist | The project's harness diagram (matching the architecture above); rebuild the policy engine both as a state machine and as a bounded agent (same as ch13a, at production scale this time) and choose with numbers; a release checklist with a rollback trigger for a false-negative-rate spike. | mapped |
| B6 | A live product, real users and one evidence-based iteration | Deploy the SDK demo to a real URL, recruit 5–10 real developers or end users, and ship one iteration from what you observed. | mapped |
| B7 | A role matrix, two case studies, mock interviews and a take-home | Bharat Privacy Guard becomes the flagship case study and the AI-system-design mock-interview question ("design a privacy layer for Indian digital services") — the project doing double duty as portfolio evidence. | mapped |

## Status summary

- **Rewritten in `src/data/`:** Track A (A1–A8) — 8 of 63 capstone chapters.
- **Mapped here, not yet rewritten in the app:** Parts I–V and Track B — 55
  of 63 capstone chapters. Each one's row above states the concrete
  deliverable; use it directly if working ahead of the content update, or
  wait for the corresponding `src/data/part*.js` / `src/data/partB.js`
  change, which will follow this table exactly and land with its own
  Hinglish translation and validation pass, the same way the Track A rewrite
  did.
- **Not touched, and not planned:** chapter `story` and `handson` prose
  content. The generic teaching content (what a token is, how embeddings
  work, why reasoning is a purchase) stays generic — only the `capstone`
  block, the chapter's own mechanism for "now apply this," points at the
  project.

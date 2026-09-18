# AI From Zero v3.1 content audit

## Scope and source

This audit treats the supplied **AI From Zero: Interleaved Edition v3.1** text as
canonical for the foundation. The supplied text was delivered in the task
context rather than as a checked-in Markdown file; this report is the
implementation traceability record for that source. The portal deliberately
keeps its expanded, data-driven learning route: 49 chapters across five parts,
with the book foundation in Part I and post-book material retained afterwards.

## Existing portal structure

- **Application:** static, dependency-light browser application built by
  `build.js`; course data is bundled from `src/data/*.js` and can be refreshed
  from the content API/database without changing the UI code.
- **Routing and learning UI:** hash routes and views are implemented in
  `src/app.js` and `src/views.js`; the route set includes chapters, setup,
  glossary, LATER/reference, labs, progress and bookmarks.
- **Content model:** chapters have stable IDs, part/number metadata, plan,
  prerequisites, interleaved `story` blocks, inline labs/predictions/free-text
  checks, question-bank links, takeaways and capstones. Labs are interactive
  in `src/labs.js`; English/Hinglish strings are keyed by exact English source.
- **Progress:** local state, completion, answers, bookmarks, review and sync
  are preserved in `src/engine.js`, `src/app.js`, `src/sync.js` and the API
  routes. No chapter IDs or progress keys were changed in this upgrade.
- **Validation:** `tools/content-check.mjs` already validates schema-like
  content invariants, IDs, terminology, translation parity and checkpoint
  coverage. `tools/v31-content-check.mjs` now adds a focused regression guard
  for the corrected v3.1 claims.

## Curriculum partition

| Part | Purpose | Status |
|---|---|---|
| Part I — AI From Zero Foundation | Setup; model calls, context, prompting, chunking, retrieval, embeddings, evaluation and minimal RAG. | GREEN |
| Part II — Applied AI Engineering | Structured output, tools, agents, context, latency, hybrid retrieval and security. | BLUE — retained post-book extension |
| Part III — Measurement and delivery | Evaluation at scale, cost, documents, governance and specifications. | BLUE — retained post-book extension |
| Part IV — Applied AI Product / PM | Build/buy, fine-tuning boundary, failure UX and pilot design. | BLUE — retained post-book extension |
| Part V — Production depth | Production RAG, observability, architecture, MCP, security and capstone system design. | BLUE — retained post-book extension |

## v3.1 → portal traceability

| Source | Portal Unit | Status | Notes |
|---|---|---|---|
| Setup: Colab, NVIDIA key, test call, corpus | Setup reference | GREEN | Secret handling, API test and corpus collection remain before code chapters. |
| Ch. 1: prediction, API envelope, tokens, usage | Ch. 1; Ch. 0.5 token/receipt labs | GREEN | Predict → run → observe loop and cost artifact retained. |
| Ch. 1: stateless model vs app-managed continuity | Ch. 1.5; receipt lab | GREEN | Corrected to distinguish invocation context, replay, summaries, persistent memory and task state. |
| Ch. 1: multilingual token experiment | Ch. 0.5 and Ch. 1 | GREEN | Learner measures tokenizer/model/text effects; no universal multiplier. |
| Ch. 2: system prompt, temperature, hallucination | Ch. 2; temperature lab | GREEN | Lower temperature is variation control, not truth/determinism. |
| Ch. 2: guardrails bend under pressure | Ch. 2; Ch. 7 regression check | GREEN | Instructions reduce risk, never guarantee refusal. |
| Ch. 3: slabs, fixed chunks, structure-aware cuts | Ch. 3; chunker lab | GREEN | Fixed-size, structure-aware/document-aware, semantic chunking and overlap are separated. |
| Ch. 4: lexical strengths/failures and no-answer candidates | Ch. 4; later hybrid retrieval | GREEN | Exact identifiers are measured, not promised; naïve top-k limitation is retained. |
| Ch. 5: embeddings, cosine, query/passages | Ch. 5; meaning-map lab | GREEN | Scores are calibration data, never universal thresholds. |
| Ch. 6: answer key, Hit@k, Precision@k, Recall@k, k | Ch. 6; PR dial lab | GREEN | Explicit relevance judgments and actual tokens/latency/cost are required. |
| Ch. 7: minimal RAG, failure map, no-answer test | Ch. 7; red-map lab | GREEN | Foundation RAG is presented as a testable baseline; refusal is measured. |
| Appendix: glossary, LATER and what comes after | Glossary, LATER, Parts II–V | GREEN | Vector DBs, reranking, hybrid, fine-tuning, agents, MCP, frameworks, GPU/deployment and strategy are retained/linked. |
| Production RAG controls | Part V production depth | BLUE | Parsing/OCR/layout, metadata, ACLs, versioning, deletion, hybrid/rerank, provenance, injection, eval, observability, latency, cost and rollback are post-book extensions. |

There are **no RED core v3.1 items**. BLUE rows are intentionally retained portal
extensions, not claims that they belong to the seven-chapter book.

## Changes made in this upgrade

### Technical corrections

1. Replaced universal history-replay language with the accurate invocation
   model: the model sees supplied context only; an application may replay,
   summarize, retrieve persistent memory or store task state.
2. Replaced the multilingual “two or three times” claim with a repeatable
   tokenizer/model/text measurement exercise.
3. Replaced temperature determinism language with calibrated variation language.
4. Corrected heading/clause cuts to **structure-aware/document-aware**
   chunking; semantic chunking remains a separate meaning-based approach.
5. Removed universal cosine score interpretation and rewrote its check as a
   calibration question.
6. Replaced exact k-to-cost multiplication claims with measured prompt-token,
   latency and cost guidance.
7. Rewrote lexical-retrieval and semantic-retrieval expected results as
   observations to measure, not rank guarantees.
8. Corrected foundational RAG wording: retrieved evidence and instructions can
   reduce unsupported answers but do not guarantee grounding or refusal.

### Hands-on and language improvements

- Existing prediction, inline-lab, free-text check, capstone and red-map
  mechanics were preserved. The receipt, temperature, meaning-map and PR-dial
  labs now label their simplifications and prompt the learner to measure a real
  architecture/corpus.
- Added `src/data/hing-v31.js`, a natural Hinglish correction layer. It carries
  the same experiments and caveats as English rather than a shortened summary.
- Existing book-derived capstones remain artifacts: request anatomy/cost,
  briefing page, chunking rule, retrieval comparison, ship-it memo and RAG
  failure map. Later parts retain model cards, PRDs, risk registers, production
  RAG architecture and final system-design artifacts.

## Content removed or rewritten

No chapters, labs, capstones, routes, IDs or post-book curriculum were removed.
Only technically over-strong explanatory claims were rewritten. Existing
English/Hinglish stale keys are intentionally harmless source-translation
history; the structural checker verifies that every rendered line has a live
translation.

## Unresolved gaps

None for core v3.1 coverage. The canonical Markdown should be checked into the
repository in a future documentation-only change if line-by-line source diffs
are desired; its absence from the checkout was the only audit constraint.

## Files changed

- Foundational content: `src/data/part1.js`, `src/data/part2.js`,
  `src/data/part3.js`, `src/data/items1.js`.
- Interactive lab wording/metrics: `src/labs.js`.
- Hinglish parity layer: `src/data/hing-v31.js`; bundler: `build.js`.
- Validation: `tools/v31-content-check.mjs` and `package.json`.
- Generated application artifacts: `content/defaults.json` and `dist/`.

## Tests executed and build result

- `node build.js` — passes and regenerates the bundle/default content.
- `node tools/content-check.mjs` — passes with full English/Hinglish rendered
  line parity and structural content checks.
- `node tools/v31-content-check.mjs` — passes the v3.1 technical-correction
  regression guard.
- `npm test` — content, terminology, seed and API suites pass; the browser suite is blocked because the environment has no Playwright Chromium executable.

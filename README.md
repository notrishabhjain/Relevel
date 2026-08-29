# AI From Zero — 2027 Edition

A hands-on AI curriculum for product managers, delivered as a single self-contained
web portal. It extends the original seven-chapter *AI From Zero* (v2.0, General
Edition) to eighteen chapters covering the topics a PM needs in 2027, and adds the
instruments the original book asks readers to keep on paper.

**The thesis it is built around:** vocabulary acquired before experience becomes
jargon; vocabulary acquired after experience becomes testimony. Nothing is named
until it has been built and broken.

## What's here

| Part | Chapters | Subject |
| --- | --- | --- |
| I — Foundations | 1–7 | The envelope, the briefing page, chunking, retrieval, embeddings, evaluation, RAG. Faithful to the source book. |
| II — The Modern Stack | 8–13 | Structured output, tools and agents, context engineering, reasoning models, grown-up retrieval, prompt injection. |
| III — The Instrument Panel | 14–18 | Evals at scale, unit economics, multimodal, governance, the AI PRD. |

Every new chapter follows the source book's seven-part structure exactly — The Story,
Words You Now Own, Hands-On, If Something Goes Wrong, Homework, Check Yourself, Close
the Sitting — and its standing rules: one chapter per sitting, park every side-quest,
notes must be rough, predict before you measure.

### Instruments

Nine tools that make the book's paper exercises persistent and checkable:

- **The Labs** — 16 interactive simulations (tokenizer and receipt, temperature,
  chunking damage report, meaning map, precision–recall dial, schema trap, agent loop,
  context rot, prompt caching, reasoning cost, rank fusion, injection capture rate,
  trifecta auditor, verbosity bias, cost model). All run offline; no API key needed.
- **Red-Mark Map** — the full 2027 pipeline with its 30 known failure points. Tick only
  what you have personally watched fail.
- **Prediction Ledger** — commit a guess before each measurement; the portal tracks your
  calibration gap over time.
- **Notebook of Record** — per-chapter homework and three-line closings, exportable as
  Markdown along with a generated findings page.
- **System Card generator** — the Chapter 17 deliverable, exportable.
- **Vendor Interrogation Deck** — 17 real vendor claims with the questions that separate
  a specification from evidence.
- **Master Glossary** — 87 terms with a from-memory drill mode; the answer to each term
  is the chapter where you built it.
- **LATER Page** — parked side-quests that unlock as the covering chapter is completed.
- **Progress dashboard** with a one-chapter-per-sitting guard.

All state is stored in the reader's own browser via `localStorage`. Nothing is sent
anywhere.

## Build

```bash
node build.js
```

Concatenates `src/` into two outputs:

- `dist/index.html` — the published page (no `<!doctype>`/`<html>`/`<head>`/`<body>`; the
  Artifact host supplies those)
- `dist/preview.html` — a complete document for opening locally in a browser

## Source layout

```
src/
├── data/
│   ├── part1.js      Chapters 1–7
│   ├── part2.js      Chapters 8–13
│   ├── part3.js      Chapters 14–18
│   └── reference.js  Setup, glossary, vendor deck, LATER page, red-map nodes
├── labs.js           The 16 interactive labs
├── app.js            Routing, rendering, persistence, stateful instruments
└── styles.css        Design tokens and layout
```

Chapter content is data, not markup. Each chapter is an object with a small block
grammar (`p`, `key`, `c`, `l`, `n`, `tb`, `code`, `x`) rendered by `blocks()` in
`app.js`, so adding a chapter means adding an object — no HTML.

## Design

A technical field manual rather than a product page, because the book's own voice is
"plain, precise, unimpressed by hexagons."

- **Red is reserved for failure marks and evidence.** The book's thesis is that anyone
  can draw the boxes and the red ink is the credential, so the accent never appears as
  decoration.
- Newsreader (editorial serif) for prose, IBM Plex Sans for the interface, IBM Plex Mono
  for code, receipts, and data.
- Cool oat-grey graph-pad ground; full light and dark palettes defined at token level.

## Provenance

Parts I is adapted from *AI From Zero*, v2.0 General Edition. Parts II and III are new
material written to the same pedagogy.

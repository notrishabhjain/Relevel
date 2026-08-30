# AI From Zero — 2027 Edition

An interactive **skill tracker** for product managers working on AI, delivered as a
single self-contained web portal. The primary object is a *skill*, not a chapter:
thirty tracked competencies whose mastery is earned by measured evidence, decays
without practice, and is drilled through a 137-item assessment bank.

The eighteen-chapter curriculum — the original seven-chapter *AI From Zero* (v2.0)
extended to cover 2027 topics — is the reference library behind it. You do not read
it front to back; the dashboard sends you to the chapter that moves the skill you are
weakest in.

**The thesis it is built around:** vocabulary acquired before experience becomes
jargon; vocabulary acquired after experience becomes testimony. Nothing is named
until it has been built and broken.

## The loop

    placement check  →  weakest skills surfaced  →  drill / read / do an exercise
          ↑                                                        │
          └──────────  re-measure, watch the delta  ←──────────────┘

Every answer carries a confidence rating, so the system tracks not just whether you
were right but whether you *knew* you were — and reports your overconfidence in points.

## Tracking

| Layer | What it does |
| --- | --- |
| **30 skills** in 6 domains | Each with behavioural L1–L4 descriptors, mapped to chapters, labs and exercises |
| **137 assessment items** | Five types: multiple choice, select-all, numeric estimation, ordering, and open judgment scored against a model answer. 60% are analysis-level |
| **Mastery model** | Gain scales with item difficulty and shrinks as mastery rises; decays to a 70% floor with time since practice |
| **Spaced repetition** | SM-2 scheduler per item, with a 21-day review forecast |
| **Calibration** | Brier score and a calibration curve; tells you if your confidence is systematically wrong |
| **14 exercises** | Applied deliverables, rubric-scored and **versioned** — do it again in six weeks and watch the score move |
| **5 processes** | Repeatable PM workflows (evaluation cycle, corpus onboarding, vendor decision, incident response, model migration) with run counters |

## Curriculum

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

Tools that make the book's paper exercises persistent and checkable:

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

Concatenates `src/` into:

| Output | What it is |
| --- | --- |
| `dist/index.html` | Full standalone document — hosting, or open it straight off disk |
| `dist/artifact.html` | Body-only fragment for publishing as a Claude Artifact |
| `dist/site/` | Deploy directory: `index.html` + PWA manifest + service worker + `.nojekyll` |

No dependencies, no bundler. One file out, everything inlined.

## Hosting it free

The whole app is one static HTML file, so any static host works and none of them
charge for it.

### GitHub Pages (no new accounts)

`.github/workflows/pages.yml` builds and deploys on every push to `main`. Enable it once:

**Settings → Pages → Build and deployment → Source: GitHub Actions**

Your site lands at `https://<user>.github.io/Relevel/`.

> **On a Free plan, Pages requires the repository to be public.** The repo holds only
> the app source — your progress never leaves your browser — but making it public is
> your call. If you would rather not, use the option below.

### Cloudflare Pages (keeps the repo private)

Free, supports private repos. Connect the repo, then:

- Build command: `node build.js`
- Output directory: `dist/site`

Netlify's free tier works identically with the same two settings.

### Offline and on a phone

The deploy directory ships a web app manifest and a service worker, so once loaded the
tracker works with no network. On a phone use **Add to Home Screen** — it installs as a
standalone app, and installed apps are far less likely to have their storage evicted.

## Keeping progress

Progress is stored in `localStorage` and never sent anywhere by default. That is private
but fragile, so **Progress & Backup** in the app offers three defences:

1. **Backup file** — export/import everything as one JSON file. Works anywhere, needs no
   account. This is the dependable one.
2. **Persistent storage** — one click asks the browser not to evict this origin, plus an
   automatic snapshot of the previous session kept locally.
3. **Gist sync** — optional. Stores progress in a *secret* GitHub Gist so a laptop and a
   phone share one record. No server, no cost; the browser talks directly to GitHub with
   a token scoped to gists alone. Sync is explicit in one direction and will not silently
   overwrite a device holding newer work.

> `localStorage` is scoped to the exact address, so the Claude artifact link and your
> hosted link keep **separate** progress. Export from one and import into the other to
> move across.

## Source layout

```
src/
├── data/
│   ├── skills.js       30 skills, 6 domains, L1-L4 descriptors
│   ├── items1-3.js     137-item assessment bank
│   ├── work.js         14 exercises with rubrics, 5 processes
│   ├── part1-3.js      Chapters 1-18 (the library)
│   └── reference.js    Setup, glossary, vendor deck, LATER page, red-map nodes
├── engine.js           Mastery + decay, SM-2, calibration, session building
├── sync.js             Backup, export/import, Gist sync, storage diagnostics
├── views.js            Dashboard, practice runner, matrix, analytics, work trackers
├── labs.js             16 interactive labs
├── app.js              Routing, persistence, chapter rendering
└── styles.css          Design tokens and layout
```

Content is data, not markup. A chapter is an object using a small block grammar
(`p`, `key`, `c`, `l`, `n`, `tb`, `code`, `x`); an assessment item is a single array
`[id, skill, difficulty, type, stem, options, answer, why]`. Adding a chapter, a skill
or a question means adding an object — no HTML, no templates.

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

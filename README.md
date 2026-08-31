# AI From Zero — 2027 Edition

An interactive **skill tracker** for product managers working on AI, delivered as a
single self-contained web portal. The primary object is a *skill*, not a chapter:
thirty-two tracked competencies whose mastery is earned by measured evidence, decays
without practice, and is drilled through a 149-item assessment bank — most of which
you meet inside the reading rather than only in a separate drill.

The twenty-chapter curriculum — the original seven-chapter *AI From Zero* (v2.0)
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
| **32 skills** in 6 domains | Each with behavioural L1–L4 descriptors, mapped to chapters, labs and exercises |
| **149 assessment items** | Five types: multiple choice, select-all, numeric estimation, ordering, and open judgment scored against a model answer. 60% are analysis-level |
| **173 checkpoints in the reading** | Chapters interrupt themselves: a question from the bank where the idea was just explained, a prediction committed before the answer unlocks, or a short piece of writing whose model answer stays locked until you have written your own |
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
| IV — The Decisions That Stay Yours | 19–20 | Prompt vs. retrieve vs. tune vs. switch, and the interface contract for a system that is sometimes wrong. |

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

Signed in, all of this state lives in your database and follows you between devices.
Signed out — or on a host with no backend — it stays in the browser and nothing leaves
the machine.

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
| `content/defaults.json` | The whole curriculum as data — what seeds the database on first boot |

No bundler, and the build itself has no dependencies. `pg` is the only thing the
deployed app installs.

## Running it as a real app

The curriculum and your progress both live in a **Postgres database**, behind serverless
functions. Two things follow from that:

- **Your progress is the account's, not the browser's.** Open the site anywhere, sign in,
  and your record is there — no files, no tokens, no copying.
- **The content is editable from inside the app.** Chapters, skills, questions, exercises,
  processes and reference tables are rows, not code. Edit them in the Content Studio and
  press Publish; the change is live on the next load, on every device. There is no
  rebuild and no redeploy.

```
browser --+-- static app    served from the CDN
          +-- /api/*        serverless functions -> Postgres
                              users, sessions, progress, progress_history,
                              content, content_history
```

The schema creates itself on the first request and seeds the content from
`content/defaults.json`, so there is no migration to run and no SQL to paste.

### Setup, once — and entirely in a browser

Nothing below needs a terminal, Node, `psql`, or any software installed on your machine.
Everything is a web page. All of it fits inside free tiers that do not ask for a card.

**1 · A database.** Sign in at [neon.tech](https://neon.tech) with GitHub, create a
project, and copy the connection string it shows you (`postgresql://…`). Supabase,
Railway and Vercel Postgres work identically — anything that hands you a Postgres URL.

**2 · The app.** At [vercel.com](https://vercel.com), *Add New → Project*, import this
repository. Vercel reads `vercel.json` and needs nothing configured. Before you press
Deploy, add one environment variable:

| Name | Value |
| --- | --- |
| `DATABASE_URL` | the connection string from step 1 |

Press Deploy. When it finishes, open the URL: the app is running, the tables exist, and
the curriculum is in the database.

**3 · Sign-in.** At <https://github.com/settings/developers> → *New OAuth App*:

| Field | Value |
| --- | --- |
| Homepage URL | `https://<your-app>.vercel.app` |
| Authorization callback URL | `https://<your-app>.vercel.app/api/auth/callback` |

Generate a client secret, then in Vercel → *Settings → Environment Variables* add:

| Name | Value |
| --- | --- |
| `GITHUB_CLIENT_ID` | from the OAuth app |
| `GITHUB_CLIENT_SECRET` | from the OAuth app |
| `ALLOWED_LOGINS` | your GitHub username, to keep the deployment to yourself |
| `CONTENT_EDITORS` | your GitHub username — who may publish content |

Redeploy from the Vercel dashboard (*Deployments → ⋯ → Redeploy*) so the functions pick
the variables up. Sign in, and you are done.

Leave `ALLOWED_LOGINS` unset and any GitHub user may sign in and keep their own separate
record; that never grants edit rights, which come only from `CONTENT_EDITORS` (and fall
back to `ALLOWED_LOGINS` if you have not set it).

### The Content Studio

`#/studio` in the sidebar under **Author**. It edits the six kinds of content the app is
built from, and it is the reason nothing needs redeploying to change what the app teaches.

- **Structured editors** for each kind — a chapter form with its story, vocabulary,
  hands-on steps, error table, homework and comprehension checks; a question form that
  changes shape with the question type; skills with their four level descriptors;
  exercises with their four-level rubrics; processes with their phases.
- **A block editor** for prose: paragraphs, key lines, bullets, callouts, code, expected
  output, and tables.
- **Raw JSON** per kind, for a bulk paste or a find-and-replace.
- **Drafts** are held in your browser until you publish, so a half-written chapter
  survives a closed tab.
- **Publishing is version-guarded.** Your draft carries the version it was based on; if
  someone published first, the save is refused and you are told, rather than one of you
  losing work silently.
- **Validation** runs in the browser and again on the server. Content that would leave the
  app unable to render is rejected with the reason, not saved.
- **Cross-reference warnings** — a question pointing at a skill that no longer exists, or
  a skill with no questions, is reported on publish.
- **Undo** — the last thirty versions of each kind are kept, and any kind can be reset to
  the copy that shipped with the build.

### How syncing behaves

- Opening the app **pulls** your record; changes **push** a couple of seconds later, and
  again as you leave the page.
- Writes carry the version they were based on. If another device saved first the write is
  **refused, not applied** — you are shown both copies and you choose.
- The server keeps the **last 20 versions** of your progress, restorable from inside the app.
- Content is fetched on load and cached in the browser. If the database cannot be reached
  the app falls back to that cache, and then to the copy built into the page — it never
  fails to open, and it says at the top of the Studio which of the three you are looking at.

### API

| Route | Purpose |
| --- | --- |
| `GET /api/health` | liveness, whether a database is configured, whether sign-in is |
| `GET /api/auth/login`, `/callback`, `POST /logout` | GitHub OAuth session |
| `GET /api/me` | current user, and whether they may edit content |
| `GET /api/state`, `PUT /api/state` | read / write progress, version-guarded |
| `GET /api/history`, `POST /api/restore` | recent versions, roll back |
| `GET /api/content` | the curriculum — public, so the app works signed out |
| `PUT /api/content`, `POST /api/content?reset=` | publish or reset a kind — editors only |

Sessions are cookies (`HttpOnly`, `SameSite=Lax`); the token is stored **hashed**, so a
leaked database row cannot be replayed as a login. Every mutating request requires a
custom header that a cross-site page cannot set without a preflight the browser will not
grant.

## Developing and testing it

Only if you want to work on the code — none of this is needed to run the app.

```bash
npm install
npm run dev      # build, then serve on :8788 with Postgres running in-process
npm test         # both suites: the API, then the app in a real browser
```

`tools/dev-server.js` serves `dist/site` and routes `/api/*` into the same handler files
the host runs, backed by [PGlite](https://pglite.dev) — Postgres compiled to WebAssembly,
running inside the Node process. So the schema, the seeding, the version conflicts and the
publish flow are all exercised for real, with no database to install. `/api/dev/login`
mints a session locally, standing in for the GitHub round trip.

The browser suite drives the built page in Chromium and uses **separate browser contexts**
for each device, not tabs — tabs share storage and would pass even if nothing reached the
database.

## Running it without a backend

The app still runs from a file, or from any static host, with no database at all. It then
uses the curriculum built into the page, and progress lives in the browser with three
fallbacks in **Progress & Backup**: a JSON backup file, an automatic previous-session
snapshot, and optional sync through a secret GitHub Gist. The Content Studio still opens
and still keeps drafts, but says plainly that there is nowhere to publish them to, and
offers each kind as a JSON download instead.

Build command `node build.js`, output directory `dist/site`. That directory ships a web
app manifest and a service worker, so the tracker works offline and installs via **Add to
Home Screen** either way.

## Source layout

```
src/
├── data/
│   ├── skills.js       32 skills, 6 domains, L1-L4 descriptors
│   ├── items1-4.js     149-item assessment bank
│   ├── work.js         14 exercises with rubrics, 5 processes
│   ├── part1-4.js      Chapters 1-20 (the library)
│   └── reference.js    Setup, glossary, vendor deck, LATER page, red-map nodes
├── engine.js           Mastery + decay, SM-2, calibration, session building
├── remote.js           Account-backed storage client
├── sync.js             Backup, export/import, Gist sync, storage diagnostics
├── views.js            Dashboard, practice runner, matrix, analytics, work trackers
├── labs.js             16 interactive labs
├── app.js              Routing, persistence, chapter rendering
├── content.js          Loads the curriculum: server, then cache, then built-in
├── studio.js           The Content Studio
└── styles.css          Design tokens and layout

api/
├── _lib/db.js          Pool, self-creating schema, first-boot seeding
├── _lib/auth.js        Sessions, editor rights, the guard every route wraps in
├── health.js  me.js    liveness and current user
├── auth/*.js           GitHub OAuth
├── state.js  history.js  restore.js   progress, version-guarded
└── content.js          the curriculum: public read, editor write, validated

tools/
├── content-check.mjs   structural checks on the curriculum itself
├── dev-server.js       local host with Postgres running in-process
├── api-test.mjs        API suite
├── browser-test.mjs    browser suite
└── test.mjs            runs both, each against a fresh database

content/defaults.json   emitted by the build; seeds the database on first boot
vercel.json             build, function and header config
```

Content is data, not markup. A chapter is an object using a small block grammar
(`p`, `key`, `c`, `l`, `n`, `tb`, `code`, `x`, plus the interactive `q`, `pred`, `try`
and `lab`); an assessment item is a single array
`[id, skill, difficulty, type, stem, options, answer, why]`. Adding a chapter, a skill
or a question means adding an object — no HTML, no templates. The files under `src/data/`
are the *defaults*: the build turns them into `content/defaults.json`, the database is
seeded from that once, and from then on the database is the source of truth and the
Studio is how you change it.

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

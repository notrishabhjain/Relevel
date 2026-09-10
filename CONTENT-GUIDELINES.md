# How the chapters are written

Standing rules for this course's content. They come from the person the course
is for, and they override any instinct to reorganise things for tidiness.

## 1. Theory and hands-on are one thing, not two

There is no "the reading part" and "the doing part". A chapter is a single
sequence:

    idea → the thing that proves it → the next idea → the thing that proves it

You should never be more than a paragraph from doing something. A chapter that
explains four concepts and then offers exercises at the end is wrong, even if
the exercises are good, because the gap between reading and doing is where
retention leaks out.

Concretely: **no chapter may carry a separate hands-on section.** Every
hands-on beat sits inline, immediately after the idea it proves.

## 2. The environment is set up first, before anything needs it

Setup — Colab, the API key, storing the key, the test call, the corpus — comes
before Chapter 1 and is part of the reading order, not a page off to one side.
A reader must not meet their first code block before knowing where to run it.

Chapters that use code open by saying which notebook to open and which warm-up
cells to run.

## 2a. The first real work costs nothing

Chapter 0 is ten gentle minutes, Setup is forty-five minutes of plumbing, and
Chapter 1 opens with real code and eight new terms. That staircase is where a
beginner quits, and they quit at the plumbing — because at that point they have
been given nothing to show for it.

So Chapter 0.5 comes first and needs no account, no key and no install. Real
experiments, on the reader's own text, producing a finding they could take to a
meeting. Setup is then something they want rather than a toll gate.

Anything added to the front of the course keeps that property: **no reader
should have to create an account before they have done something worth doing.**

## 2b. Being stuck must always have a way out

Every hands-on beat that runs code carries an *If it does not work* panel — the
errors that actually happen, what each one means, and the fact that it happens
to everybody. The last entry always says that output which does not match the
page is normal rather than a mistake, because a beginner reads a different
number as evidence they broke something.

Closed by default. There when it is needed, invisible when it is not.

A chapter also has to be honest about what it costs: the stated minutes are
what the chapter actually takes, including running the code. Under-stating them
teaches the reader that they are slow.

## 3. Hands-on does not mean code

Some of the best hands-on work in this course is done with a printed document
and a pen — cutting a document into chunks by hand, being the search engine by
hand, writing an answer key before testing. A chapter with no code can still be
entirely hands-on. Do not add code to a chapter to make it feel practical.

## 4. Every chapter ends with a capstone

Not homework, not a quiz — one project that uses everything the chapter built,
with a stated deliverable and acceptance criteria the reader can check
themselves. The chapter is finished when the capstone is buildable.

## 5. Nothing is assumed

No term appears before it is explained, and every explained term is tappable at
first use. `tools/jargon-check.mjs` enforces this and fails the build.

## 6. Both languages stay in step

Content is written in English and read in English or Hinglish. Every line the
reader can be shown has a Hinglish translation; industry terms stay in English
inside the translations on purpose. `tools/content-check.mjs` fails the build
if a line has no translation, or if a translation keys off English that no
longer appears.

Change the English and you own the translation in the same change. A
meaning-preserving edit keeps its translation — but the translation is keyed on
the English line, so the key has to move with it in the same commit, or the
line silently falls back to English.

## 6a. Both languages are written to be read, not admired

Plain words beat impressive ones in both directions. In English that means
cutting the intensifiers that add nothing — a thing is not *genuinely* simple,
it is simple. In Hinglish it means the opposite of translating hard: where the
English word is the one an Indian professional would actually say out loud,
use the English word. `assumption`, not *maanyata*; `oversight`, not
*nigraani*. Industry terms stay English by design; so does anything the reader
already says in English every day.

Hinglish is Hindi in the Roman alphabet. A Devanagari character in a
translation is a typing slip, and `tools/content-check.mjs` fails the build on
one, because it reads as a broken glyph rather than as an error anyone reports.

## 7. Content lives in the database, and the build owns it until someone edits it

`src/data/*.js` are the shipped defaults. On deploy they refresh any content
row nobody has published over. Publish something in the Studio and it is yours
from then on — no deploy overwrites it, and the per-kind reset hands it back.

Only the **production** deployment owns those rows. A Vercel preview is built
from a branch but, unless it has been given a database of its own, it connects
to the one production uses — so a preview left free to seed would swap the live
chapters for the branch's, and the next production request would swap them
back. Previews therefore read and serve normally, and create a kind that is
missing, but never rewrite a row that already exists.

The practical consequence: **a preview URL is not where you review a content
change.** It shows whatever production's database holds. Content changes are
reviewed after merge, or in the Studio.

`/api/health` reports what the deployment is actually serving — the chapters
row's version, who owns it, whether it matches the running build, and the shape
of chapter 1. Open it in a browser when the site looks wrong; it needs no
sign-in.

`tools/seed-test.mjs` covers all of it. It exists because a deploy once
silently failed to update a database that already had content, and the live app
served chapters from months earlier while CI stayed green.

## The block grammar

A chapter is data. `story` is a flat list of blocks read top to bottom:

| block | what it is |
|---|---|
| `['p', html]` | a paragraph |
| `['key', html]` | the one sentence that matters |
| `['c', label, html]` | an aside |
| `['l', [...]]` / `['n', [...]]` | bulleted / numbered list |
| `['tb', [headers], [[cells]]]` | a table |
| `['code', text]` | code to run — never translated |
| `['x', html]` | what you should see when you run it |
| `['do', label, [blocks]]` | **a hands-on beat**, inline, with its own heading |
| `['q', id, …]` | question(s) from the bank, asked here |
| `['pred', {…}]` | commit a guess before the answer unlocks |
| `['try', {…}]` | write something; the model answer stays locked until you do |
| `['lab', key]` | an in-page tool — proof with no setup at all |

`capstone` is `{title, brief, steps: [...], done: [...]}` — the project, and
what "finished" means.

`needs` names the two or three ideas the chapter stands on. `takeaway` is what
you can do afterwards. Both render as part of the chapter.

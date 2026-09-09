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

Change the English and you own the translation in the same change.

## 7. Content lives in the database, and the build owns it until someone edits it

`src/data/*.js` are the shipped defaults. On deploy they refresh any content
row nobody has published over. Publish something in the Studio and it is yours
from then on — no deploy overwrites it, and the per-kind reset hands it back.

`tools/seed-test.mjs` covers both halves. It exists because a deploy once
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

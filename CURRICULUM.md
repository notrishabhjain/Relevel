# The curriculum, and why it is being rebuilt

This is the plan of record for what the course teaches, in what order, and how.
`CONTENT-GUIDELINES.md` says how a chapter is written. This says which chapters
exist and why they are in that order.

## What was wrong

Three things, all measurable rather than felt.

**The course stops being a sequence after Chapter 7.** Chapters 1 to 7 form a
clean chain — each one stands on the one before, and together they build a
working retrieval system. After that, thirteen chapters fan out and every one
of them reaches back to Chapter 1 instead of building on its neighbour. That is
what "disconnected" means structurally: after the RAG arc there is no arc.

**The steps are too big.** Chapter 1 introduces eight new terms in its first
sitting. Chapter 8 introduces eight more and, until recently, claimed to do it
in twenty minutes. A step that size is where a beginner starts nodding along
instead of understanding.

**The most-used skill in the job is missing entirely.** A search of the whole
course finds zero mentions of worked examples in a prompt, of showing the model
the output shape you want, or of iterating a prompt against a small test set.
The course teaches system prompts, temperature and hallucination — and then
never teaches how to write the prompt. For a product manager that is the thing
they touch most days. Build-versus-buy, the most common real decision, is
absent too.

## The methodology

Six rules. They are the difference between this course and a book with
exercises, and `tools/content-check.mjs` enforces the ones that can be counted.

**1. No chapter introduces more than four new terms.** More chapters, each
smaller. A chapter that needs eight is two chapters. *Introduces* means the
chapter returns to the term — mentions it at least twice. A term named once in
passing is a reference, not a step, and the glossary is there for those; the
check counted them at first and charged three chapters for terms they barely
touched.

**2. Every chapter opens by using the previous one.** Not a reference to it —
a hands-on beat that takes yesterday's result and does something with it. The
seam between chapters is where people fall out, so the seam is where the doing
goes.

**3. Every chapter ends on the gap, not the summary.** The last thing you read
is the thing the next chapter exists to fix. You should finish a chapter with a
question you want answered rather than a feeling of completion.

**4. Three hands-on per idea, not one.** A warm-up you cannot fail, the beat
that proves the idea, and a variation where you change one thing and predict
what happens before you run it. Prediction before result is what turns doing
into learning.

**5. The four load-bearing ideas spiral.** *It guesses rather than looks up.
You pay for every piece. Evidence beats fluency. Measure before believing.*
Each returns at least three times, in a new context, deeper each time. Nothing
important is taught once.

**6. Reinforcement is something you do, not something you read.** Every chapter
resurfaces one result from two or three chapters back — as a hands-on beat that
re-runs it, not as a question about it. You find out whether it still holds,
on your own material.

## The shape

Five arcs. Each is a chain, each ends with something that works, and each is
short enough to finish.

| arc | what you end up able to do |
|---|---|
| **1 — Talking to it** | Write a prompt that behaves, and know why it does |
| **2 — Shaping the job** | Recognise which kind of task you have, and pick the cheap reliable form |
| **3 — Giving it your documents** | Build and measure retrieval on your own corpus |
| **4 — Making it real** | Cost, speed, size, pictures, actions, attacks |
| **5 — Shipping and owning it** | Decide, specify, govern, and prove it helped |

## What is new

Chapters that did not exist, in the order they belong:

- **Writing a prompt that works** — worked examples, showing the output shape,
  breaking the task into steps, saying what not to do.
- **Making a prompt reliable** — a small test set, running the prompt against
  it, changing one thing at a time.
- **Which shape is this problem?** — summarise, classify, extract, rewrite,
  compare. Recognising the shape is most of choosing the approach.
- **Classification, the cheap reliable one** — the task shape with a right
  answer, which is why it can be measured and trusted.
- **Summarising without losing the point** — the most-requested feature and
  the one with the least obvious failure mode.
- **Latency, and what the user does while waiting** — why streaming changes
  perceived speed, and what to show meanwhile.
- **What you may send** — data residency, personal information, vendor terms.
  The practical question of whether you may paste this customer email in.
- **Build or buy** — the decision a product manager actually faces, and the
  evidence that settles it.
- **Proving it helped** — pilot design and business impact, as distinct from
  system quality, which the course already measures well.

## What is kept

The retrieval arc, unchanged in substance: it is the strongest part of the
course and it is already a chain. The interactive labs. The spaced-repetition
engine, which is good and under-used. The zero-setup on-ramp. Both languages.

## Where this has got to

All nine missing chapters are written, and every chapter in the course now has
hands-on beats and a capstone. The methodology rules are applied to the new
chapters, and the four-term cap is enforced against every chapter with no
chapter exempted. The steepest chapter in the course now introduces three new
terms.

The cap once carried five named exemptions. Three of them turned out not to be
real: ch7, ch8 and ch18 were over the cap on terms each mentioned exactly once
— ch18 was charged for Deploy, Rollback, Staged rollout, Model pinning and Unit
economics while genuinely dwelling on two. Splitting those chapters would have
been obeying a broken ruler, so the ruler was fixed instead. The other two, ch1
and ch14, were real and were split.

What the renumber still owes: the five arcs are the reading order, but the
course is still divided into the original four *parts*, because a chapter's
place is decided by its number and the arcs cut across those numbers. Chapter 8
belongs with the task shapes and sits in Part II; Chapter 12 belongs with
retrieval and sits in Part II as well. That misalignment is cosmetic — the
reading order is right — and it resolves when the numbers do.

## Numbering

New chapters are inserted with decimal numbers (`2.1`, `2.2`) rather than
renumbering the course. Renumbering would rewrite every "Chapter 5" in the
prose and orphan its Hinglish translation, for no gain to the reader. The
single clean renumber happens once, when the last arc lands.

# The reading edition

A second way to take the course: a book you read, not a course you do. It has no
exercises, because the exercises live in the app. It tells one story, in one flat
sequence of numbered chapters, and teaches the same ideas the app teaches, in the
same order, with the same words.

It is built by `node build.js` into `dist/site/book/` and served at `/book/`
next to the app. Nothing here needs a server.

## What is in this folder

| Path | What it is |
| --- | --- |
| `book.json` | Title, subtitle, and the short front-matter lines |
| `preface.md` | How to read the book, and the cast |
| `chapters/NN-slug.md` | One file per chapter, in reading order |
| `afterword.md` | The last page |
| `build.mjs` | Turns the files above into HTML pages |
| `style.css`, `reader.js` | The look, and the small amount of script (theme, text size, place-keeping) |

Run `node tools/book-check.mjs` after editing. It is part of `npm test`.

## How a chapter file is written

Every chapter starts with a header block, then prose.

```
---
title: The Number in the Chat
summary: One or two sentences for the contents page.
course: a1
goals:
  - why a count is stronger than an impression
  - how to choose between problems with four questions
terms:
  - PII | personally identifiable information: any detail that can point to one real person | personal details, personal information
---

Opening case, in a paragraph or two.

## First section

Text. Sections are numbered by the builder: 1.1, 1.2 and so on.

::: def Personally identifiable information
A box. Kinds: key, def, example, case, watch.
:::

Table: A caption, numbered by the builder as Table 1.1.
| A | B |
| --- | --- |
| x | y |

## Summary

A short paragraph, then a few bullets.
```

- `course` lists the app chapters this chapter retells, by id (`a1`, `ch15b`, `ch21cap`).
  Every app chapter must appear in exactly one book chapter, and no book chapter may
  come before an app chapter it depends on. The checker enforces both.
- `goals` is the "In this chapter" box at the top: three or four things the reader will
  be able to explain by the end. The Hinglish edition has the same number of goals.
- `terms` lists the words this chapter teaches, as `term | plain definition | other
  spellings` (the third part is optional). A term may not appear in any earlier
  chapter. The checker enforces this too. A reader never meets a word before the
  book has explained it.
- Body markdown is small: paragraphs, `## ` section headings (numbered by the
  builder), `*italic*`, `**bold**`, `> ` quotes, `- ` lists, pipe tables with an
  optional `Table:` caption line, `::: kind Title` boxes closed by `:::`, fenced
  blocks for chat transcripts, and a `## Summary` heading that closes the chapter.

## The voice

This is a textbook that people want to keep reading. Think of the best business-school
or science textbooks: a real case at the front, a clear explanation, a definition where
the word is first needed, a worked example, and the reasons behind the rules.

1. **Open with a case, then teach.** The first paragraphs report something that happened
   at Sahaj, in the past tense and the third person, in a sentence or two of scene and
   then the facts. The sections that follow explain the idea behind it and return to
   the case as the worked example.
2. **Explain, do not narrate.** Concepts are stated in the present tense. "A retrieval
   system finds passages before the model answers." Characters appear as people doing
   work, not as speakers of lectures. Dialogue is rare and only when the exact words
   matter.
3. **Define at the point of need.** Give the term in italics with its meaning in the
   same sentence, or use a `def` box for the important ones. A term the book has not
   yet taught is described in ordinary words.
4. **Precise and plain.** Short, ordinary words; exact numbers; sentences that say one
   thing. Prefer "the model" to "the system", and never use two names for one idea.
5. **Interesting because it is specific.** A real figure, a named decision, an
   odd consequence, a mistake and its cost. Reasons before rules. One surprise a
   section is enough.
6. **No machine habits.** No rhetorical questions as openers. No "it's not X, it's Y"
   pivots. No lists of three adjectives. No tidy aphorism ending a paragraph. No
   stacked metaphors. No "let's", "imagine", "picture this". Em dashes at most twice
   a chapter. The checker rejects the worst of these.
7. **Honest.** Say what is not known and what a tool cannot do. A made-up number is
   called made up. Nothing here is legal advice, and the project is never called
   "compliant" with anything.
8. **Each chapter leans on the last.** The opening paragraph says what the previous
   chapter left open. The summary says what the next one picks up.
9. **Length.** Roughly 1,500 to 2,500 words a chapter, three to six numbered sections,
   one or two boxes, one captioned table where a table helps.

## The story

A small company, **Sahaj**, runs a bill-payment and loan app from an office above a
sweet shop in Pune. Its support chatbot answers customers' questions. **Anaya
Deshmukh**, a product manager, notices that customers keep typing Aadhaar and PAN
numbers into it. Over the book she and the people around her build **Bharat Privacy
Guard**, a small tool that notices personal details in English, Hindi and Hinglish
before they travel anywhere, and learns, on the way, how modern AI products are made.

Cast: Anaya Deshmukh (product manager), Imran Qureshi (lead engineer), Lakshmi Iyer
(head of compliance), Farah Sheikh (support lead), Dr. Meenakshi Rao (Anaya's former
teacher, now retired and still asking questions). Add nobody else without a reason.

## Keeping it in sync with the app

The app's chapters, their prerequisites and their project stages are the source of
truth. If a chapter is added or reordered in the app, add or move its id in `course:`
here; the checker will say what no longer lines up.

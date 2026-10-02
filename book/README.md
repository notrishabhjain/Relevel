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
terms:
  - PII | personally identifiable information: any detail that can point to one real person | personal details, personal information
---

The first paragraph...
```

- `course` lists the app chapters this chapter retells, by id (`a1`, `ch15b`, `ch21cap`).
  Every app chapter must appear in exactly one book chapter, and no book chapter may
  come before an app chapter it depends on. The checker enforces both.
- `terms` lists the words this chapter teaches, as `term | plain definition | other
  spellings` (the third part is optional). A term may not appear in any earlier
  chapter. The checker enforces this too. This is what keeps the book in order: a
  reader never meets a word before the book has explained it.
- Body markdown is small: paragraphs, `## ` section headings, `*italic*`, `**bold**`,
  `> ` quotes, `- ` lists, pipe tables, fenced blocks for chat transcripts, and a line
  containing only `* * *` for a scene break.

## The voice

The reader is an intelligent adult who has never studied this. Write for them the way
a good non-fiction author would.

1. **Story first, then idea, then example.** Open on a person doing something. Let the
   problem arrive before its name does. Give the term when the reader has just felt
   the need for it, and give it in italics with its plain meaning in the same breath.
2. **Plain words.** Prefer the short, ordinary word. A technical term is allowed only
   after the book has taught it. Before that, say the thing in everyday language.
3. **Grounded.** Every idea gets a concrete example with small, believable numbers.
   Use everyday Indian settings for comparisons: a kirana ledger, a railway reservation
   chart, a tailor's measuring tape. Never use a comparison that is less clear than the
   idea it explains.
4. **No manual, no sales pitch.** No steps to follow, no exercises, no "you will learn".
   No lists of three adjectives. No "let's dive in", "game-changer", "unlock",
   "leverage", "delve", "tapestry", "in today's fast-paced world". The checker rejects
   the worst of these.
5. **Honest.** Say what is not known. Say what a tool cannot do. A made-up number is
   called made up. Nothing here is legal advice, and the project is never called
   "compliant" with anything.
6. **Each chapter leans on the last.** Open by picking up what the previous chapter
   left unresolved. Close by leaving one thing unresolved for the next.
7. **Length.** Roughly 1,500 to 2,500 words a chapter. Short sentences carry the
   weight; a long one is allowed when it earns it.

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

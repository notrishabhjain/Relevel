# Simple language: how every line of this course is written

The person this course is for asked for it to read as if it were explaining
things to a five-year-old: almost no learning curve, nothing to decode, in
English and in Hinglish. This page is the rule for every line in the app, the
book, the plan and the worksheet. It sits on top of `CONTENT-GUIDELINES.md`;
where the two disagree on wording, this page wins.

The reader is a grown-up who is new to AI, reads in short sittings, and wants
to be able to pass the idea on to anyone. So: say it the way you would say it
to a bright child, then give the grown-up word for it.

## The ten rules

1. **Short sentences.** Aim for 8 to 12 words. Never more than 20. One idea per
   sentence. If a sentence has "which", "whereas" or two commas, split it.
2. **Everyday words.** "use", not "utilise". "help", not "facilitate". "check",
   not "validate", unless "validate" is the term being taught. No idioms.
3. **Picture first, then the word.** Every idea starts with something the reader
   has seen at home, in school, at a shop or on a train. Then the real word.
   "A token is a small piece of a word, like one Lego brick of text."
4. **Keep the real words.** API call, token, prompt, embedding, RAG, eval: the
   reader needs these at work and in interviews. Never delete them. Explain each
   the first time it appears in a chapter, in the same sentence or the next one.
   After that, use it freely.
5. **Say what to do, then why.** "Press Run. You will see the model's reply."
   Not "In order to observe the reply, the Run button should be pressed."
6. **You, now, active.** Talk to the reader as "you". Present tense. Active
   voice: "the model guesses", not "a guess is produced".
7. **No hard words for easy things.** No "leverage", "robust", "paradigm",
   "holistic", "granular", "orchestrate" (unless teaching it), "utilise",
   "facilitate", "subsequently", "aforementioned", "in order to".
8. **Never talk down.** No "simply", "just", "obviously", "easy", "of course".
   Warm and encouraging: "This part trips everyone up. Here is the trick."
9. **Numbers and steps stay exact.** Every step, number, price, file name,
   button label (Run, Mark chapter complete), code name, link and warning stays.
   Make it simpler to read, never vaguer. Do not make a claim stronger or
   weaker: "usually" stays "usually"; "measure it on your own text" stays.
10. **Same picture everywhere.** Use the comparisons in the table below, so the
    whole course explains one idea the same way. Use a new picture only for an
    idea that is not in the table, and keep it from daily Indian life.

## The comparison table

Use these, in this wording or close to it. Hinglish in brackets.

| Idea | Picture to use |
|---|---|
| A language model (LLM) | A parrot that has read a whole library. It guesses the next word. It sounds sure even when it is wrong. (tota jisne poori library padh li ho) |
| Token | A small piece of a word, like one Lego brick of text. You pay per brick. (Lego ki ek eent) |
| Prompt | The note you hand the model: what you want, and how. (parchi) |
| System prompt | The standing instructions on the shop wall, read before every order. (deewar par lage niyam) |
| Temperature | How adventurous the model is with its next word. Low: plays safe. High: takes chances. |
| Hallucination | Confident make-believe: a made-up answer said with a straight face. (pakke yakeen se boli gayi banawati baat) |
| API call | Sending a message to the model over the internet and getting a reply, like an SMS that costs a few paise. |
| Cost per call | Paying per SMS: every brick you send and every brick you get back is counted. |
| Context window | The model's desk. Only what fits on the desk can be read at once. (model ki mez) |
| Stateless / forgets | Like a goldfish: it forgets everything after each message, unless you send the old chat again. |
| Chunking | Cutting a long book into index cards, so you can hand over only the right cards. (index cards mein kaatna) |
| Keyword search | Finding a page by looking for the exact word, like Ctrl+F. |
| Embedding | An address for meaning: sentences that mean the same thing live on the same street. (matlab ka pata) |
| Retrieval / RAG | An open-book exam: first find the right page, then answer from it. |
| Test set / answer key / eval | The teacher's answer key: questions you know the right answer to, written before you test. (answer key) |
| Precision and recall | Recall: of all the fish in the pond, how many did your net catch? Precision: of what is in your net, how much is really fish? |
| LLM judge | A second student marking the homework. You check the marker against the teacher first. |
| Error analysis | Reading the wrong answers one by one and sorting them into piles, like sorting complaints. |
| Structured output / schema | A form with fixed boxes. The model must fill the boxes, not write a letter. (fixed khaanon wala form) |
| Tool calling | The model asks you to press a button for it, like asking a shopkeeper to check the stock. |
| Agent | An assistant that can use tools in a loop, with a step limit, like a helper with a list of errands and a curfew. |
| Trajectory | The route the helper took, not just where it ended up. |
| Prompt injection | A note hidden inside the homework that says "ignore your teacher". (chhupi hui parchi) |
| Guardrail | The railing on a bridge: it stops a fall, it does not drive the car. |
| Latency | Waiting time, like waiting for your chai after you order. |
| Streaming | The chai-wala telling you "two minutes" while he makes it: you see words as they come. |
| Fine-tuning | Coaching the model on many examples so it picks up a habit. |
| Reasoning model | A model that thinks on rough paper before it answers. Slower, sometimes better. |
| Personal data / DPDP | Someone's diary. The law (the DPDP Act) says how you may use it and when you must give it back or destroy it. |
| PRD / spec | The recipe card for a dish: what it is, who it is for, how you know it came out right. |
| Product manager vs project manager | A project manager makes sure the train leaves on time. A product manager decides where the train should go, and checks that people actually got there. |

## The five-year-old test (every line)

Run each line through these four questions. Most lines should change.

1. **Would a ten-year-old know every word?** If a word is technical (key,
   client, library, cell, output, error 401, CSV, repository, usage block…),
   put two to six plain words right after it the first time it appears in the
   chapter, in brackets or with "that is": "the client (the messenger that
   carries your note to the model)". Do this even if an earlier chapter
   explained it. A short reminder costs nothing; a lost reader costs the
   chapter.
2. **Is there a picture?** Every section (every heading) gets at least one
   picture from the table: "It is like…", "Think of it as…".
3. **Is any sentence over 15 words?** Split it.
4. **Does the reader know what to do and why?** Steps start with a verb:
   "Press Run." "Copy the line." Then one short line of why.

A line is left unchanged only if it already passes all four.

## Small everyday words

These come up in every chapter. Gloss them like this the first time each
appears in a chapter (Hinglish in brackets where it differs).

| Word | Plain words |
|---|---|
| API key | a secret password for the model; it also tells the company whom to bill |
| client | the messenger in your code that carries your note to the model |
| library | ready-made code someone else wrote, like a recipe book you borrow |
| function | a recipe with a name: you give it things, it gives back a result |
| variable / a name for a value | a labelled box that holds one thing |
| list | a row of boxes, in order |
| dictionary | a phone book: look up a name, get its value |
| loop | do the same step for every item, like checking every plate |
| run / output | press Run, and what the code prints is the output |
| cell / block | one box of code on the page |
| error 401 | the model did not recognise your key |
| error 429 | too many requests too fast; wait a minute and try again |
| CSV file | a spreadsheet saved as plain text, one row per line |
| JSON | a form written as labels and values inside curly brackets |
| usage block | the bill that comes with each reply: bricks in, bricks out |
| repository (repo) | an online folder that remembers every change you make |
| commit | saving one change in the repository, with a short note |
| dashboard | one screen of numbers that shows how things are going |
| metric | a number you watch to see if things are getting better |
| stakeholder | anyone who cares about the result and can help or block it |
| roadmap | the plan of what comes first, next and later |

## Before and after

**English**

> Before: "You send a model a message, and it sends text back. In this chapter
> you'll make your first API call, read what it cost, and see why a confident
> answer can still be wrong."
>
> After: "A model is like a parrot that has read a whole library. You send it a
> message. It sends words back. Today you send your first message. This is
> called an API call. You will see what it cost, and why a sure-sounding answer
> can still be wrong."

**Hinglish**

> Before: "Aap model ko ek message bhejte hain, aur woh text wapas bhejta hai. Is
> chapter mein aap apni pehli API call karenge, dekhenge ki usmein kitna kharch
> hua, aur samjhenge ki ek confident jawaab bhi galat kyun ho sakta hai."
>
> After: "Model ek aise tote jaisa hai jisne poori library padh li ho. Aap use
> message bhejte hain. Woh shabd wapas bhejta hai. Aaj aap apna pehla message
> bhejenge. Ise API call kehte hain. Aap dekhenge ki iska kharch kitna hua, aur
> pakka lagne wala jawaab bhi galat kyun ho sakta hai."

## Hinglish

- Hindi in Roman letters, never Devanagari.
- Same short sentences, same pictures as the English.
- Words people say in English every day stay English: phone, message, model,
  token, prompt, test, chapter, file, button, Run.
- Polite "aap". Warm, never formal: "kijiye", "dekhiye", not "kariye
  sunishchit".
- Talking to the reader is always the "aap" form: Sochiye, dekhiye, kijiye,
  likhiye, padhiye. The "tum" forms (Socho, dekho, karo) appear only inside
  quoted speech between people in a story, or in a quoted instruction to a
  model ("sirf di gayi baatein use karo").

## What does not change

- Titles of chapters (they are how the route, the book and the worksheet find
  each other).
- Code, expected outputs that are printed by code, file names, links, ids.
- The order and number of blocks, list items, table rows and steps.
- HTML tags inside a line (`<strong>`, `<code>`, `<a href>`) and placeholders
  such as `{n}`.
- The sentences the technical guard requires (`tools/v31-content-check.mjs`):
  they stay word for word.

## How a line is rewritten in the app

The app's text lives in JS data files, with Hinglish keyed on each English line.
Never edit those by hand for a rewrite. Use `tools/sheet.mjs`:

    node tools/sheet.mjs extract chapter:ch1 sheet.json   # every line, with its Hinglish
    (edit "en" and "hi")
    node tools/sheet.mjs apply chapter:ch1 sheet.json     # writes both back
    node tools/hing-prune.mjs                             # drops translations of old lines

Lines marked `"shared": true` appear on other pages too; leave them alone.

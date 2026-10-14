---
title: The Whole Machine
summary: Every part of the chatbot has now been built and broken by hand, so the whole can be drawn from memory and given a name. This chapter introduces retrieval-augmented generation, the ways it fails silently, and the places a customer's words travel.
course: ch7 ch75
goals:
  - describe retrieval-augmented generation as a sequence of steps
  - say what a grounded answer is, and why grounding reduces invention
  - find the places where a retrieval-based system can give a wrong answer without any error
  - list every place a customer's words are copied on the way to an answer
terms:
  - retrieval-augmented generation | RAG: a design in which a system first finds the pieces of your documents that look relevant to a question, then gives them to a model along with the question so it writes its answer from them | RAG
  - retrieval | the step of finding the pieces of your documents that look relevant to a question | retrieve, retrieved
  - grounded answer | an answer written from evidence the system supplied, and traceable to it, instead of from what the model happens to remember | grounded, grounding
---

On a grey Thursday in the second half of May, Imran Qureshi wiped the whiteboard in the glass room clean, red line and all. He handed Anaya the marker and asked her to draw the chatbot from memory.

She drew a box labelled "document". An arrow led to "cut into chunks", then "give each chunk an embedding", then "store". On a separate line she drew the other path. The customer asks. The question is given an embedding. The nearest chunks are found. They are sent to the model with the question. The model writes an answer, and the customer sees it with the pages it came from.

The drawing had ten boxes. Two weeks earlier she couldn't have drawn one. This chapter gives a name to what she drew, and shows where it can fail without making a sound. It also follows a compliance head with a red pen, who wanted to know where every word goes.

## The case: ten boxes from memory

Imran had held back the name of the pattern on purpose. Everything on the board was something Anaya had done with her own hands. She had cut a policy with scissors, played the search box, used the map of meanings, and counted what a tool found and missed. So when he gave the name, it would be the name of work she had already done.

## The pattern has a name

The design is called *retrieval-augmented generation*, or RAG. The generation is the model's writing, which you met in the first weeks. The *retrieval* is the finding, which the last few chapters covered. Put together, it works like this. The system first finds the pieces of the documents that look relevant to the question. Then it gives them to the model along with the question, so the model writes its answer from them.

RAG is the most widely used pattern in applied AI. Most products that let someone ask questions about their own documents are built on it. So was Sahaj's chatbot.

::: key Why the pattern works
A model asked about something it hasn't seen will invent an answer. A model given the evidence will write from the evidence, and its answer can point to where it came from. An answer written from supplied, traceable evidence is a *grounded answer*.
:::

## Where it fails without a sound

Imran asked Anaya to put a star on every box where a wrong answer could be produced without any error appearing. She went through the ten boxes and starred nearly all of them.

Table: Where a retrieval system goes wrong silently
| Step | The failure | Why nothing reports it |
| --- | --- | --- |
| Cutting | A rule is separated from its exception | Both pieces are valid text |
| Finding | Something is always returned, even when nothing relevant exists | The search has no way to say "nothing here" |
| The map of meanings | Sahaj's vocabulary is placed badly | The numbers are produced as normal |
| Writing | The model writes fluently from an irrelevant piece | Fluent text is what the model always produces |
| Showing the source | The page number shown does not support the answer | Nothing checks that the page matches the claim |

In none of these cases does the program crash, shout or log anything unusual. Every part reports success, and the answer is wrong.

Imran said what he wanted Anaya to take from the room. A system like this doesn't break. It becomes wrong, quietly, while every part reports that it is fine. That is why the answer key matters. Nothing else will tell the team.

## What "bad answers" means

People tell Imran that the chatbot gives bad answers. He treats that as a symptom, like telling a doctor you feel unwell. At least four quite different faults look the same from outside.

The right page may never have been found. It may have been found, but cut so that the crucial line sat in the next piece. It may have been found whole, and then ignored by the model. Or the instructions may have told the model to do something slightly different from what anyone meant. Each fault has a different cure. Curing the wrong one wastes a quarter.

He asked her to rank five ways of spending a quarter on better answers: a more expensive model, better cutting, a step that re-orders the results after the search, more work on the instructions, and cleaning up the documents. She ranked them by instinct. She put the more expensive model first.

Table: Where a quarter of effort usually does the most good
| Rank | Spend | Why |
| --- | --- | --- |
| 1 | Cleaning up the documents | The evidence the model receives is only as good as the documents |
| 2 | Better cutting | A rule and its exception stay together |
| 3 | A step that re-orders the search results | A cheap and often large gain |
| 4 | More work on the instructions | Helps, but makes failures rarer and does not remove their cause |
| 5 | A more expensive model | Usually costs the most and helps the least, since the model could already read and the right evidence was not reaching it |

On the back of her hand, as she hadn't done since school, Anaya wrote a sentence. Quality problems are usually evidence problems, not model problems.

## A red pen

Lakshmi Iyer came in unannounced, with her glass of water. Farah had told her the whole system was on the board. Lakshmi read it from the end, the way she read documents. She asked where the customer's words go, and took the marker, which nobody had offered.

She started at "customer asks" and circled each place where the words were copied. She circled the box where the question was given an embedding, and wrote "outside service?". Imran said it was a separate company's. She circled the box where the nearest pieces were sent with the question to the model, and wrote "outside company". She circled the box where the answer came back and the customer saw it, and the line to the support system that saved the conversation. She circled the logs and the analytics. Then she wrote a number in the corner.

"Six places," she said. "And I find out about it on a whiteboard."

Imran said they hadn't hidden it.

"No," she said. "Nobody drew it."

She asked for the guard to be drawn too, and asked where it sat. She wanted it before the first circle.

Anaya saw then what the machine really was. It was a series of rooms. The customer's words passed through every one, and in each room they were copied. A guard in the middle of the sequence would protect only what came after it. The only safe place was at the door.

## What it cannot yet do

Before they left, Imran wrote four sentences in the corner of the board. The evening before, he had tested the machine in four ways and found four things it could not do.

Table: Four limits of the machine so far, and where the book takes each
| Limit | Where it is addressed |
| --- | --- |
| The answer is prose that other software cannot use | Chapter 19 |
| It cannot take two steps on its own | Chapter 20 |
| Pasting everything in is slow, costly and often worse | Chapter 21 |
| Text inside a document can give it orders | Chapter 24 |

Anaya understood the first at once. The guard would have to hand its decisions to a program, and a program can't read a polite paragraph. The second she didn't yet understand. The third she could half guess. The fourth gave her a small cold feeling, and she put it aside to look at later.

Imran asked which of the four would hurt the team first. Without quite knowing why, she said the last.

"Good," he said. "Keep that."

## Summary

The standard design for answering questions about your own documents is this. Cut the documents into chunks, give each one an embedding, find the ones nearest a question, and give them to a model along with the question. This is retrieval-augmented generation, and the answer it writes is grounded in evidence the system supplied.

- Almost every step can go wrong without any error appearing. The system doesn't break. It becomes wrong, quietly.
- When answers are bad, the cause is usually the evidence that reached the model. Cleaning documents and fixing the cutting beat buying a bigger model.
- A customer's words pass through several places on the way to an answer, and each one keeps a copy. A privacy tool belongs at the door.

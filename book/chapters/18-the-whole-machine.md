---
title: The Whole Machine
summary: Every part of the chatbot has now been built and broken by hand, so the whole can be drawn from memory and named. The chapter introduces retrieval-augmented generation, the ways it fails silently, and the places a customer's words travel.
course: ch7 ch75
goals:
  - describe retrieval-augmented generation as a sequence of steps
  - say what a grounded answer is and why grounding reduces invention
  - identify where a retrieval-based system can produce a wrong answer without any error
  - list every place a customer's words are copied on the way to an answer
terms:
  - retrieval-augmented generation | RAG: a design in which a system first finds the pieces of your documents that look relevant to a question, then gives them to a model along with the question so it writes its answer from them | RAG
  - retrieval | the step of finding the pieces of your documents that look relevant to a question | retrieve, retrieved
  - grounded answer | an answer written from evidence the system supplied, and traceable to it, instead of from what the model happens to remember | grounded, grounding
---

On a grey Thursday in the second half of May, Imran Qureshi wiped the whiteboard in the glass room clean, including the red line, and handed Anaya the marker. He asked her to draw the chatbot from memory. She drew a box labelled "document", an arrow to "cut into chunks", then "give each chunk an embedding", then "store". On a separate line she drew the other path: the customer asks, the question is given an embedding, the nearest chunks are found, they are sent to the model with the question, the model writes an answer, and the customer sees it with the pages it came from.

The drawing had ten boxes. Two weeks earlier she could not have drawn one. This chapter names what she drew, shows where it can fail without making a sound, and follows a compliance head with a red pen who wanted to know where every word goes.

## The case: ten boxes from memory

Imran had withheld the name of the pattern on purpose. Everything on the board was something Anaya had done with her hands: cut a policy with scissors, played the search box, used the map of meanings, and counted what a tool found and missed. When he gave the name, it would name work she had done.

## The pattern has a name

The design is *retrieval-augmented generation*, or RAG. The generation is the model's writing, introduced in the first weeks. The *retrieval* is the finding, covered in the previous chapters. Together, a system first finds the pieces of the documents that look relevant to the question, then gives them to the model along with the question, so that the model writes its answer from them.

RAG is the most widely used pattern in applied AI. Most products that let a user ask questions about their own documents are built on it, and so was Sahaj's chatbot.

::: key Why the pattern works
A model asked about something it has not seen will invent an answer. A model given the evidence will write from the evidence, and its answer can point to where it came from. An answer written from supplied, traceable evidence is a *grounded answer*.
:::

## Where it fails without a sound

Imran asked Anaya to put a star on every box where a wrong answer can be produced without any error appearing. She went through the ten boxes and starred nearly all of them.

Table: Where a retrieval system goes wrong silently
| Step | The failure | Why nothing reports it |
| --- | --- | --- |
| Cutting | A rule is separated from its exception | Both pieces are valid text |
| Finding | Something is always returned, even when nothing relevant exists | The search has no way to say "nothing here" |
| The map of meanings | Sahaj's vocabulary is placed badly | The numbers are produced as normal |
| Writing | The model writes fluently from an irrelevant piece | Fluent text is what the model always produces |
| Showing the source | The page number shown does not support the answer | Nothing checks that the page matches the claim |

In none of these cases does the program crash, shout or log anything unusual. Every part reports success, and the answer is wrong. Imran stated the point he wanted Anaya to take from the room: a system like this does not break. It becomes wrong, quietly, with every part reporting that it is fine. That is why the answer key matters, because nothing else will tell the team.

## What "bad answers" means

People tell Imran that the chatbot gives bad answers. He regarded that as a symptom, comparable to telling a doctor that one feels unwell. At least four quite different faults look the same from outside. The right page may never have been found. It may have been found but cut so that the crucial line sat in the next piece. It may have been found whole and ignored by the model. Or the instructions may have told the model to do something slightly different from what anyone meant. Each has a different cure, and curing the wrong one wastes a quarter.

He asked her to rank five ways of spending a quarter on improving the answers: a more expensive model, better cutting, a step that re-orders the results after the search, more work on the instructions, and cleaning up the documents. She ranked them by instinct and put the more expensive model first.

Table: Where a quarter of effort usually does the most good
| Rank | Spend | Why |
| --- | --- | --- |
| 1 | Cleaning up the documents | The evidence the model receives is only as good as the documents |
| 2 | Better cutting | A rule and its exception stay together |
| 3 | A step that re-orders the search results | A cheap and often large gain |
| 4 | More work on the instructions | Helps, but makes failures rarer and does not remove their cause |
| 5 | A more expensive model | Usually costs the most and helps the least, since the model could already read and the right evidence was not reaching it |

Anaya wrote on the back of her hand, as she had not done since school, that quality problems are usually evidence problems and not model problems.

## A red pen

Lakshmi Iyer came in unannounced with her glass of water. She had heard from Farah that the whole system was on the board, and she read it from the end, as she read documents. She asked where the customer's words go and took the marker, which nobody had offered.

Starting at "customer asks", she circled each place the words were copied. She circled the box where the question was given an embedding and wrote "outside service?". Imran said it was a separate company's. She circled the box where the nearest pieces were sent with the question to the model and wrote "outside company". She circled the box where the answer came back and the customer saw it, and the line to the support system that saved the conversation. She circled the logs and the analytics, and wrote a number in the corner.

"Six places," she said. "And I find out about it on a whiteboard." Imran said they had not hidden it. "No," she said. "Nobody drew it." She asked that the guard be drawn too, and asked where it sat. She wanted it before the first circle.

Anaya saw what the machine was. It was a series of rooms, and the customer's words passed through every one, and in each they were copied. A guard in the middle of the sequence would protect only what came after it. The only safe place was at the door.

## What it cannot yet do

Before they left, Imran wrote four sentences in the corner of the board. The previous evening he had tested the machine in four ways and found four things it could not do.

Table: Four limits of the machine so far, and where the book takes each
| Limit | Where it is addressed |
| --- | --- |
| The answer is prose that other software cannot use | Chapter 19 |
| It cannot take two steps on its own | Chapter 20 |
| Pasting everything in is slow, costly and often worse | Chapter 21 |
| Text inside a document can give it orders | Chapter 24 |

Anaya understood the first immediately, since the guard would have to hand its decisions to a program that could not read a polite paragraph. The second she did not yet understand, and the third she could half guess. The fourth gave her a small cold feeling, and she put it aside to examine later. Imran asked which of the four would hurt the team first. She said the last, without quite knowing why. "Good," he said. "Keep that."

## Summary

The standard design for answering questions about one's own documents is to cut them into chunks, give each an embedding, find the ones nearest a question and give them to a model along with the question. This is retrieval-augmented generation, and the answer it writes is grounded in evidence the system supplied.

- Almost every step can go wrong without any error appearing, so the system does not break. It becomes wrong quietly.
- When answers are bad, the cause is usually the evidence that reached the model, and cleaning documents and fixing the cutting beat buying a bigger model.
- A customer's words pass through several places on the way to an answer, and each keeps a copy. A privacy tool belongs at the door.

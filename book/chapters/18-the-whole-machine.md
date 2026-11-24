---
title: The Whole Machine
summary: Anaya has now built every part of the chatbot by hand. She draws the whole thing from memory, and it gets a name. You meet RAG, the quiet ways it goes wrong, and every place a customer's words get copied.
course: ch7 ch75
goals:
  - tell RAG as a list of steps, one after another
  - say what a grounded answer is, and why grounding means less made-up text
  - spot where a RAG system gives a wrong answer and shows no error
  - list every place a customer's words are copied on the way to an answer
terms:
  - retrieval-augmented generation | RAG: an open-book exam for the model. First the system finds the pages that look right for the question. Then it hands those pages to the model with the question, and the model writes its answer from them | RAG
  - retrieval | the finding step, like pulling the right page out of a file. The system looks through your documents for the pieces that fit the question | retrieve, retrieved
  - grounded answer | an answer with its sources attached, like a student who shows which page they copied from. It comes from evidence the system gave, not from what the model happens to remember | grounded, grounding
---

On a grey Thursday in May, Imran Qureshi wiped the whiteboard in the glass room clean. The red line went too. He handed Anaya the marker. "Draw the chatbot from memory," he said.

She drew a box and wrote "document". An arrow led to "cut into chunks" (small cards cut from a long page). Then came "give each chunk an embedding" (an address for its meaning). Then "store". On a second line she drew the other path. The customer asks. The question gets an embedding. The nearest chunks are found. They go to the model with the question. The model writes an answer. The customer sees it with the pages it came from.

The drawing had ten boxes. Two weeks earlier she could not have drawn one. This chapter gives a name to what she drew. It also shows where the machine can fail without a sound. Then a compliance head arrives with a red pen. She wants to know where every word goes. Compliance means making sure the company follows the rules.

## The case: ten boxes from memory

Imran had kept the name back on purpose. Everything on the board was work Anaya had done with her own hands. She had cut a policy with scissors. She had played the search box. She had used the map of meanings, where similar ideas sit close together. She had counted what a tool found and what it missed. So the name would belong to work she had already done.

## The pattern has a name

The design is called *retrieval-augmented generation*, or RAG. Think of it as an open-book exam. The model does not answer from memory. First the system finds the right pages. Then the model answers from those pages.

Look at the two halves of the name. Generation is the model writing. You met it in the first weeks. *Retrieval* is the finding, like pulling the right page out of a file. The last few chapters were about it. Put them together and you get this. The system first finds the pieces of your documents that fit the question. Then it gives them to the model along with the question. The model writes its answer from them.

RAG is the most used pattern in applied AI. Most products that answer questions about your own documents are built on it. So was Sahaj's chatbot.

::: key Why the pattern works
Ask a model about something it has not seen, and it makes up an answer. It is like a parrot that has read a whole library. It sounds sure even when it is wrong. Give the model the evidence, and it writes from the evidence. Its answer can also point to where it came from. An answer written from evidence the system gave, with a path back to it, is a *grounded answer*. Think of a student who shows which page they copied from.
:::

## Where it fails without a sound

Imran asked Anaya to put a star on every box where a wrong answer could appear with no error. Think of a lift that shows no warning light but stops between floors. She went through the ten boxes. She starred nearly all of them.

Table: Where a retrieval system goes wrong silently
| Step | The failure | Why nothing reports it |
| --- | --- | --- |
| Cutting | A rule is separated from its exception | Both pieces are valid text |
| Finding | Something is always returned, even when nothing relevant exists | The search has no way to say "nothing here" |
| The map of meanings | Sahaj's vocabulary is placed badly | The numbers are produced as normal |
| Writing | The model writes fluently from an irrelevant piece | Fluent text is what the model always produces |
| Showing the source | The page number shown does not support the answer | Nothing checks that the page matches the claim |

In none of these cases does the program crash or shout. It writes nothing odd in its log (the diary a program keeps of what it did). Every part reports success. The answer is still wrong.

Imran said what he wanted Anaya to take from the room. A system like this does not break. It goes wrong quietly, while every part says all is fine. That is why the answer key matters. It is the teacher's list of questions with the right answers, written before you test. Nothing else will tell the team.

## What "bad answers" means

People tell Imran the chatbot gives bad answers. He treats that as a symptom. It is like telling a doctor you feel unwell. At least four different faults look the same from outside.

The right page may never have been found. Or it was found, but cut so the key line landed in the next piece. Or it was found whole, and the model ignored it. Or the instructions told the model something a little different from what anyone meant. Each fault needs a different cure. Curing the wrong one wastes a whole quarter. A quarter is three months of the team's work.

He asked her to rank five ways to spend a quarter on better answers. They were a costlier model, better cutting, and a step that re-orders the results after the search. The last two were more work on the instructions, and cleaning up the documents.

She ranked them by instinct. She put the costlier model first.

Table: Where a quarter of effort usually does the most good
| Rank | Spend | Why |
| --- | --- | --- |
| 1 | Cleaning up the documents | The evidence the model receives is only as good as the documents |
| 2 | Better cutting | A rule and its exception stay together |
| 3 | A step that re-orders the search results | A cheap and often large gain |
| 4 | More work on the instructions | Helps, but makes failures rarer and does not remove their cause |
| 5 | A more expensive model | Usually costs the most and helps the least, since the model could already read and the right evidence was not reaching it |

Anaya wrote a sentence on the back of her hand, as she had not done since school. Quality problems are usually evidence problems, not model problems. A better reader cannot fix a book with torn pages.

## A red pen

Lakshmi Iyer came in unannounced, with her glass of water. Farah had told her the whole system was on the board. Lakshmi read it from the end, the way she read every document. She asked where the customer's words go. Then she took the marker. Nobody had offered it.

She started at "customer asks". She circled each place where the words were copied. She circled the box where the question gets an embedding, and wrote "outside service?". Imran said it was a separate company's. She circled the box where the nearest pieces go to the model with the question, and wrote "outside company".

She circled the box where the answer came back and the customer saw it. She circled the line to the support system that saved the conversation. She circled the logs and the analytics (the counts of how people use the tool). Then she wrote a number in the corner.

"Six places," she said. "And I find out on a whiteboard."

Imran said they had not hidden it.

"No," she said. "Nobody drew it."

She asked for the guard to be drawn too. She asked where it sat. She wanted it before the first circle.

Then Anaya saw what the machine really was. It was a row of rooms. The customer's words passed through every room, and each room made a copy. A guard in the middle would protect only the rooms after it. Think of a gate at the door of a building. The only safe place was the door.

## What it cannot yet do

Before they left, Imran wrote four sentences in the corner of the board. The evening before, he had tested the machine four ways. He had found four things it could not do.

Table: Four limits of the machine so far, and where the book takes each
| Limit | Where it is addressed |
| --- | --- |
| The answer is prose that other software cannot use | Chapter 19 |
| It cannot take two steps on its own | Chapter 20 |
| Pasting everything in is slow, costly and often worse | Chapter 21 |
| Text inside a document can give it orders | Chapter 24 |

Anaya understood the first at once. The guard must pass its decisions to a program. A program cannot read a polite paragraph. The second she did not yet understand. The third she could half guess. The fourth gave her a small cold feeling. She put it aside to look at later.

Imran asked which of the four would hurt the team first. She said the last. She did not quite know why.

"Good," he said. "Keep that."

## Summary

Here is the usual design for answering questions about your own documents. Cut the documents into chunks. Give each chunk an embedding. Find the chunks nearest the question. Hand them to a model with the question. This is retrieval-augmented generation. The answer is grounded in evidence the system gave.

- Almost every step can go wrong with no error. The system does not break. It goes wrong quietly.
- When answers are bad, the cause is usually the evidence that reached the model. Clean documents and better cutting beat a bigger model.
- A customer's words pass through several places on the way to an answer. Each place keeps a copy. A privacy tool belongs at the door.

Next, the rule-keeper fails on the first reply it gets. Anaya learns that a program needs fields, not paragraphs.

---
title: The Whole Machine
summary: Every part has now been built and broken by hand, so the whole chatbot can be drawn from memory, named, and followed by a compliance head with a red pen who wants to know where each word goes.
course: ch7 ch75
terms:
  - retrieval-augmented generation | RAG: a design in which a system first finds the pieces of your documents that look relevant to a question, then gives them to a model along with the question so it writes its answer from them | RAG
  - retrieval | the step of finding the pieces of your documents that look relevant to a question | retrieve, retrieved
  - grounded answer | an answer written from evidence the system supplied, and traceable to it, instead of from what the model happens to remember | grounded, grounding
---

"Draw it," said Imran. "From memory. No looking back."

He handed her the marker as if it were a dare. It was a Thursday in the second half of May, grey and humid, the sort of day the office fans seemed to stir around without moving, and the whiteboard in the glass room had been wiped clean. Even the red line had gone. Anaya noticed and was surprised how much she minded.

She drew a box, and in it wrote *document*. An arrow led to a second box, *cut into chunks*. From there to *give each chunk an embedding*, then *store*. Then, on a separate line, the other path: *customer asks*, then *give the question an embedding*, then *find the nearest chunks*, then *send them to the model with the question*, then *model writes an answer*, then *customer sees it, with the pages it came from*.

She stood back. It had eleven boxes. Two weeks ago she could not have drawn one.

"That's the whole thing," said Imran.

## The pattern has a name

He told her that what she had drawn had a name, and had been kept from her on purpose.

"Everything on that board, you've done with your hands. Cut a policy with scissors. Played the search box. Run the map of meanings. Counted what it found and missed. So when I give you the name, it names something you've actually done."

It is called *retrieval-augmented generation*, or RAG. The generation is the model's writing, the part from the first week. The retrieval is the finding, from the last three chapters. Put together, a system first finds the pieces of your documents that look relevant to the question, and then gives those pieces to the model along with the question, so that the model writes its answer from them. RAG is the most widely used pattern in applied AI. Most products that let you ask questions about your own documents are built on it, and so was Sahaj's chatbot.

The point of it is the answer Imran had been giving since the first night. A model asked about something it has not seen will invent. A model given the evidence will write from the evidence, and the answer can point to where it came from. An answer written from supplied, traceable evidence is a *grounded* one.

## Where it fails without a sound

"Now put a star," said Imran, "wherever a wrong answer can be produced without an error appearing."

She went through the eleven boxes with the pen. It took her longer than she expected, and she ended by starring nearly every one.

The cutting could separate a rule from its exception. The finding always returned something, even when there was nothing to find. The map of meanings could place Sahaj's vocabulary badly. The model would write fluently from an irrelevant piece. The page numbers shown to the customer might point to a page that did not support the answer. In none of these cases did the program crash, or shout, or log anything unusual. Every part reported success, and the answer was wrong.

"This is the thing I want you to carry out of the room," said Imran. "A system like this does not break. It becomes wrong, quietly, with every part reporting that it is fine. That is why the answer key matters. Nothing else will tell you."

## What "bad answers" means

"People come to me and say, 'the chatbot gives bad answers,'" he went on. "That is a symptom. It's like telling a doctor you feel unwell."

At least four quite different faults look the same from outside. The right page may never have been found. It may have been found but cut so that the crucial line sat in the next piece. It may have been found whole and the model may have ignored it. Or the instructions may have told the model to do something slightly different from what anyone meant. Each has a different cure, and curing the wrong one wastes a quarter.

He asked her to rank five ways of spending a quarter on improving the answers: a more expensive model, better cutting, a re-ordering step after the search, more work on the instructions, and cleaning up the documents themselves.

She ranked them by instinct and was wrong in an instructive way. She put the expensive model first.

"Cleaning up the documents and fixing the cutting usually help most," said Imran. "A step that re-orders the results is the next cheapest large gain. The more expensive model usually costs the most and helps the least. The model could already read. The right evidence wasn't reaching it."

Anaya wrote it on the back of her hand, a thing she had not done since school. *Quality problems are usually evidence problems, not model problems.*

## A red pen

At this point Lakshmi came in, unannounced, with her glass of water. She had heard from Farah that the whole system was on the board, and she stood in the doorway for a moment reading it as she read documents, backwards.

"Where do the customer's words go?" she said.

"Sorry?"

"Take a customer's message. Every place it goes. I'd like to see them."

She took the marker, which nobody had offered. Starting at *customer asks*, she began to circle. She circled the box where the question was given an embedding, and wrote beside it: *outside service?* Imran said yes, it was a separate company's. She circled the next box, where the nearest pieces were sent with the question to the model, and wrote *outside company*. She circled the one where the answer came back, and *customer sees it, with the pages*, and the line to the support system that saved the conversation. She circled the logs and the analytics. She wrote a number in the corner.

"Six," she said. "Six places. And I find out about it on a whiteboard."

"It's not that we hid it," said Imran.

"No. It's that nobody drew it." She capped the marker and handed it back with a nod of grave courtesy. "Draw it for the guard, too. Where does it sit? Before the first circle, or in the middle? I'd like it to be before the first."

Anaya looked at the board and saw, with the abrupt clarity of a thing that had been in front of her for weeks, what the whole machine was. It was a series of rooms, and the customer's words passed through every one, and in each one they were copied. A guard in the middle of that sequence would protect only what came after it. The only safe place for it was at the door.

## The part that cannot yet be done

Before they left, Imran wrote four sentences in the corner of the board, beneath the picture. He had spent the previous evening testing the machine in four ways, and found four things it could not do.

*The answer is prose that other software cannot use. It cannot take two steps on its own. Pasting everything in is slow, costly and often worse. And text inside a document can give it orders.*

"There is a fifth," he said. "The finding is the simplest version that works. We have a better one in mind. But those are the four. And they are the next four chapters, more or less, in this order."

Anaya read them twice. The first she could already feel the need for: the guard would have to hand its decisions to a program, which could not read a polite paragraph. The second she did not yet understand. The third she could half guess. The fourth gave her a small cold feeling in the back of her neck, and she put it away to look at later.

"Which of those would hurt us first?" Imran asked.

"The last," she said, without quite knowing why.

"Good," he said. "Keep that."

## What to carry forward

The standard design for answering questions about your own documents is to cut them into chunks, give each chunk an embedding, find the ones nearest a question, and give them to a model along with the question. It is called retrieval-augmented generation, and the answer it writes is grounded in evidence the system supplied. Almost every step in it can go wrong without any error appearing, so the system does not break; it quietly becomes wrong. When answers are bad, the cause is most often the evidence that reached the model, not the model, and cleaning documents and fixing the cutting beat buying a bigger machine. And a customer's words pass through several places on the way to an answer, each of which keeps a copy, which is why a privacy tool belongs at the door.

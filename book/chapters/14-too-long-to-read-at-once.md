---
title: Too Long to Read at Once
summary: To see how the chatbot answers questions from Sahaj's own documents, a product manager cuts a policy into pieces with scissors three times. The chapter explains why documents are split, what chunking is, and why no way of cutting is correct.
course: ch3
goals:
  - explain why a model cannot be given a whole library with every question
  - define chunks and chunking, and describe how big, small and structure-based chunks each fail
  - recognise an orphaned chunk
  - apply the same care to text that the guard itself must cut
terms:
  - chunk | one piece of a longer document, small enough to be stored and sent on its own | chunks
  - chunking | splitting long documents into chunks, which means deciding where to cut | 
  - orphaned chunk | a chunk that makes no sense once cut out of its document, because it refers to something that was in the piece before | orphaned chunks, orphan chunk
---

On a Friday late in April Imran Qureshi told Anaya that before she built a guard for the chatbot she should know how the chatbot knows anything. The question had occurred to her on the bus. The chatbot had never been taught Sahaj's late-fee rules, and she had seen in the first week that a model invents an answer when it lacks one. Yet most of the time the chatbot gave the right policy. "It is shown the right pages," said Imran. "That is the entire trick. It is harder to see than it sounds, and much harder to do well."

This chapter describes how the right pages are chosen, beginning with the part that comes first: cutting long documents into pieces. Anaya learned it with a pair of scissors and a twelve-page printout.

## The case: a policy on the carpet

Sahaj's *Late Payment and Refund Policy* ran to twelve pages. Imran placed a stapled printout on the floor of the glass room and put beside it a pair of scissors with orange handles. He asked Anaya to do the cutting by hand, with no software, so that she would feel what it involved. Farah Sheikh, passing, sat down on the carpet as if she had been waiting for an excuse. The three rounds that followed are the substance of the chapter.

## Why not send everything

The obvious plan is to give the model all of Sahaj's documents with every question and let it find the answer. Two limits make that impossible.

The first is the context window. The whole library of help pages, policies, terms and circulars ran to about four hundred pages, and it would not fit. The second is cost. Four hundred pages is about two hundred thousand tokens. At Imran's made-up price of ₹250 per million tokens, one question would cost ₹50 to answer, and a hundred thousand questions a month would cost ₹50 lakh. Sending the whole library to answer one small question is like hiring a lorry to carry a letter.

The standard approach is to cut the documents into pieces in advance, store them, and send for each question only the few pieces that look relevant. The pieces are *chunks*, and the cutting is *chunking*. The idea is easy to state and the difficulty lies entirely in deciding where to cut.

## Three ways to cut one policy

Imran put his questions as if he were a customer, and Anaya cut the policy three ways.

Table: Three ways of cutting the same policy
| Round | How it was cut | What worked | What failed |
| --- | --- | --- | --- |
| 1 | Three big pieces of four pages each | A question about paying a bill twice was answered by one paragraph on page six | Four pages were sent to use one paragraph, which is slow, costly and diluted. A question about a payment to a government utility needed the rule on page six and its exception on page nine, which fell in a different piece |
| 2 | Twenty small pieces of half a page | The first question pulled out only the paragraph it needed, cheaply and sharply | The rule and its exception were in separate scraps, and nothing ensured both were chosen. If only the rule reached the model, it would answer confidently and incompletely |
| 3 | One piece per section, with the last two sentences of each section copied onto the start of the next | Most pieces kept their context. "Exceptions" became a section of its own and could be fetched by a question about exceptions | A question needing a rule and an exception from different sections could still fail |

In the second round Farah picked up a scrap and read it aloud: "The aforesaid amount shall be refunded within sixty days." Anaya asked which amount. Farah said that was her point: which amount, refunded to whom, and what was aforesaid? The sentence was good English and meaningless, because it had been cut loose from the sentence before it, which said what the amount was.

::: def Orphaned chunk
A chunk that makes no sense once cut out of its document, because it refers to something in the piece before it. Documents are full of such references, especially legal ones: "the above", "this scheme", "such cases".
:::

A person reading a page has the paragraph before it. A chunk does not. When the model is shown an orphan, it does what it always does with a gap and fills it in. That is the reason for the overlap used in the third round, where the end of each section was repeated at the start of the next.

## There is no right size

Anaya had hoped to learn the correct size for a chunk, and learned instead that there is none. Each method fails in its own way. Large pieces are expensive and blurred. Small pieces are cheap and sharp and lose their context. Cutting along the structure keeps the meaning inside each piece and loses answers that cross a boundary. The right choice depends on what the documents look like and what people actually ask.

::: key Name the failure you chose
Imran's rule for a design review was to say which failure was chosen, and why. A team that cannot name the loss in its own method has not made a choice. It has accepted a default. Farah wrote the sentence for the Sahaj policy and pinned it to the board: cut by section, with two sentences of overlap, which gains precise answers to questions about one clause and loses answers that need a clause and its exception from different sections, so those are tested on purpose.
:::

## The same problem, in the guard

At nearly seven in the evening Anaya saw that the guard had the same problem. Some customers do not write a message. They paste an email, a whole thread of three thousand words. The part of the guard that finds names and places can only read a limited amount at a time, so it would have to cut the thread into pieces too.

If it cut in the middle of a number, one piece would end with "4321 56" and the next would begin "78 9012", and neither would look like an Aadhaar number to anything reading it. She drew the number on the whiteboard straddling a line like a car across a lane marking. The guard would walk straight past it.

The failure is the same as that of the rule and its exception: two halves of one thing, in two places, each meaningless alone. The remedy is also the same, and Anaya wrote it as a rule.

Table: Rules for cutting text the guard must read
| Rule | Reason |
| --- | --- |
| Cut at the end of a sentence or at a blank line | Keeps meaning inside each piece |
| Never cut in the middle of a run of digits | A split identity number is invisible to both halves |
| Let consecutive pieces share a few words at the edge | Anything straddling a cut appears whole in at least one piece |
| Test with numbers placed exactly on the boundary | Failures are found on purpose, not by accident |

Imran asked her to put it in the answer key as row eleven: a number on the cut.

## Summary

A model cannot be given a whole library for each question, because it will not fit and because every token is paid for. The usual answer is to cut the documents into chunks in advance and send only the few that look relevant, which makes the cutting the hard part.

- Large chunks are costly and blurred. Small chunks are sharp and lose context. A chunk that refers to something in the piece before it is an orphan, and the model will fill the gap with a guess.
- There is no correct chunk size. Each choice fails somewhere, and the useful practice is to name the failure that is accepted and test it on purpose.
- The same care applies to text that the guard itself must cut: never split an identity number in half, and let neighbouring pieces overlap.

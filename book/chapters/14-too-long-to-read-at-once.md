---
title: Too Long to Read at Once
summary: Anaya wants to know how the chatbot answers from Sahaj's own documents. She cuts a policy with scissors, three times. You learn why long documents are cut into pieces, what chunking is, and why no way of cutting is the right one.
course: ch3
goals:
  - see why you cannot hand a model a whole library with every question
  - know what chunks and chunking are, and how big, small and structure-based chunks each fail
  - spot an orphaned chunk
  - take the same care with text that the guard has to cut
terms:
  - chunk | like one index card cut from a long book; one piece of a document, small enough to store and send alone | chunks
  - chunking | like cutting a long book into index cards; you choose where each cut goes | 
  - orphaned chunk | like a page torn from a letter; it points to something that was in the piece before, so alone it makes no sense | orphaned chunks, orphan chunk
---

On a Friday late in April, Imran Qureshi gave Anaya a task. Before she built a guard for the chatbot, she should know how the chatbot knows things. The question had crossed her mind on the bus already. Nobody had ever taught the chatbot Sahaj's late-fee rules. In week one she had seen that a model makes up an answer when it has none. Yet most days the chatbot gave the right policy.

"It is shown the right pages," said Imran. "That is the whole trick. It is harder to see than it sounds. It is much harder to do well."

This chapter shows how the right pages get chosen. It starts with the first step: cutting long documents into pieces. Anaya learned it with a pair of scissors and a twelve-page printout.

## The case: a policy on the carpet

Sahaj's *Late Payment and Refund Policy* ran to twelve pages. Imran put a stapled printout on the floor of the glass room. Next to it he put a pair of scissors with orange handles. He wanted Anaya to cut by hand, with no software. That way she would feel the work. It is like cutting a long book into index cards with your own hands.

Farah Sheikh was passing by. She sat down on the carpet as if she had waited for an excuse. The three rounds that followed are the heart of this chapter.

## Why not send everything

The obvious plan is simple. Give the model all of Sahaj's documents with every question. Let it find the answer. Two limits stop this.

The first limit is the context window. That is the model's desk: only what fits on it can be read at once. Sahaj's whole library had help pages, policies, terms and circulars. It ran to about four hundred pages. It would not fit on the desk.

The second limit is cost. Four hundred pages is about two hundred thousand tokens. A token is one Lego brick of text, and you pay per brick. Imran's made-up price was ₹250 per million tokens. So one question would cost ₹50. A hundred thousand questions a month would cost ₹50 lakh. Sending the whole library for one small question is like hiring a lorry to carry a letter.

So the usual way is different. You cut the documents into pieces in advance and store them. Then, for each question, you send only the few pieces that look right. The pieces are called *chunks*. The cutting is called *chunking*. Think of index cards cut from a long book. The idea is easy to say. The hard part is deciding where to cut.

## Three ways to cut one policy

Imran asked questions as if he were a customer. Anaya cut the policy three different ways. The table shows each round.

Table: Three ways of cutting the same policy
| Round | How it was cut | What worked | What failed |
| --- | --- | --- | --- |
| 1 | Three big pieces of four pages each | A question about paying a bill twice was answered by one paragraph on page six | Four pages were sent to use one paragraph. That is slow, costly and blurry. A question about a payment to a government utility needed the rule on page six and its exception on page nine. They fell in different pieces |
| 2 | Twenty small pieces of half a page each | The first question pulled out only the paragraph it needed, cheaply and sharply | The rule and its exception sat in separate scraps. Nothing made sure both were chosen. If only the rule reached the model, it would answer with full confidence and half the facts |
| 3 | One piece per section, with the last two sentences of each section copied onto the start of the next | Most pieces kept their context. "Exceptions" became a section of its own, so a question about exceptions could fetch it | A question needing a rule and an exception from different sections could still fail |

In round two, Farah picked up a scrap and read it out. "The aforesaid amount shall be refunded within sixty days."

Anaya asked, "Which amount?"

"Exactly," said Farah. Which amount? Refunded to whom? What was "aforesaid"? The sentence was good English, but it meant nothing. It had been cut away from the sentence before it. That sentence had said what the amount was.

::: def Orphaned chunk
Think of a page torn out of a letter. An orphaned chunk makes no sense once it is cut out of its document. It points to something in the piece before it. Documents are full of such pointers, especially legal ones: "the above", "this scheme", "such cases".
:::

A person reading a page also has the paragraph before it. A chunk does not. When the model is shown an orphan, it does what it always does with a gap. It fills the gap in. That is why round three had an overlap. The end of each section was repeated at the start of the next.

## There is no right size

Anaya had hoped to learn the correct size for a chunk. She learned there is none. Each way of cutting fails in its own way.

Large pieces are costly and blurry. Small pieces are cheap and sharp, but they lose their context. Cutting along the structure keeps the meaning inside each piece. But it loses answers that cross a boundary. It is like cutting a cake: every cut leaves crumbs somewhere. The right choice depends on what your documents look like. It also depends on what people really ask.

::: key Name the failure you chose
Imran had a rule for design reviews. Say which failure you chose, and why. A team that cannot name the loss in its own method has not made a choice. It has taken a default.

Farah wrote the line for the Sahaj policy and pinned it to the board. Cut by section, with two sentences of overlap. This gains sharp answers to questions about one clause. It loses answers that need a clause and its exception from different sections. So those are tested on purpose.
:::

## The same problem, in the guard

At nearly seven that evening, Anaya saw the guard had the same problem. Some customers do not write a message. They paste an email, a whole thread of three thousand words. The part of the guard that finds names and places reads only a little at a time. So it would have to cut the thread into pieces too.

Say it cut in the middle of a number. One piece would end with "4321 56". The next would begin "78 9012". Neither piece would look like an Aadhaar number (a twelve-digit identity number) to anything reading it. Anaya drew the number on the whiteboard, straddling a line like a car across a lane marking. The guard would walk straight past it.

It was the same failure as the rule and its exception. Two halves of one thing sat in two places, and each half meant nothing alone. The cure was the same too. Anaya wrote it as a set of rules.

Table: Rules for cutting text the guard must read
| Rule | Reason |
| --- | --- |
| Cut at the end of a sentence or at a blank line | Keeps meaning inside each piece |
| Never cut in the middle of a run of digits | A split identity number is invisible to both halves |
| Let consecutive pieces share a few words at the edge | Anything across a cut appears whole in at least one piece |
| Test with numbers placed exactly on the boundary | Failures are found on purpose, not by accident |

Imran asked her to add it to the answer key (the list of questions with known right answers) as row eleven: a number on the cut.

## Summary

A model cannot be given a whole library with each question. It will not fit on its desk, and every token must be paid for. The usual answer is to cut the documents into chunks in advance. Then you send only the few that look right. That makes the cutting the hard part.

- Large chunks are costly and blurry. Small chunks are sharp but lose context. A chunk that points to something in the piece before it is an orphan. The model will fill the gap with a guess.
- There is no correct chunk size. Each choice fails somewhere. Name the failure you accept, and test it on purpose.
- The same care applies to text the guard has to cut. Never split an identity number in half. Let neighbouring pieces overlap.

Next, Anaya plays the search engine herself. She has twenty index cards, and Farah is the customer.

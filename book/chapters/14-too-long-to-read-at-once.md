---
title: Too Long to Read at Once
summary: To understand how the chatbot answers questions from Sahaj's own documents, a product manager cuts a policy into pieces with scissors, three times, and learns that no way of cutting is right.
course: ch3
terms:
  - chunk | one piece of a longer document, small enough to be stored and sent on its own | chunks
  - chunking | splitting long documents into chunks, which means deciding where to cut | 
  - orphaned chunk | a chunk that makes no sense once cut out of its document, because it refers to something that was in the piece before | orphaned chunks, orphan chunk
---

"Before you build a guard for the chatbot," Imran said, "you should know how the chatbot knows anything."

It was a Friday, late in April, and the question had occurred to Anaya on the bus: how did the thing answer questions about Sahaj's own late-fee rules? It had not been taught them. She had seen in the first week that a model invents an answer when it lacks one. Yet the chatbot, most of the time, gave the right policy.

"It is shown the right pages," said Imran. "That is the entire trick. It gets harder to see and much harder to do well."

## Why not send everything

The obvious plan is to give the machine all of Sahaj's documents with every question, and let it find the answer. Anaya had already met the two reasons it cannot work.

The first is the size limit. A request has to fit inside the context window, and the whole library of help pages, policies, terms and circulars ran to about four hundred pages. It would not fit.

The second is cost, which she could now do in her head. Four hundred pages is about two hundred thousand tokens. At the made-up price Imran liked to use, two hundred and fifty rupees for a million, one question would cost fifty rupees to answer. A hundred thousand questions a month would cost fifty lakh. Even where a document fits, sending the lot to answer one small question is like hiring a lorry to carry a letter.

So the standard approach is to cut the documents into pieces ahead of time, store them, and for each question send only the few pieces that look relevant. Those pieces are called *chunks*, and the cutting is *chunking*. The idea is easy to say. The difficulty is entirely in where to cut.

## Scissors

On the floor of the glass room Imran put down a printout, twelve pages, stapled in one corner. It was Sahaj's *Late Payment and Refund Policy*. Beside it he put a pair of scissors with orange handles, borrowed from the stationery cupboard.

"You do this part by hand," he said. "No software. I want you to feel it."

Farah, passing, saw them kneeling there and sat down on the carpet too, cross-legged, in a way that suggested she had been waiting for an excuse.

**The first round was three big pieces.** Anaya cut the twelve pages into thirds, four pages each. Then Imran asked a question as if he were a customer. *I paid my electricity bill twice by mistake. Can I get the extra back?*

The answer was in the second piece, in a paragraph on page six. So the machine would be sent the second piece. That worked, but it meant sending four pages to use one paragraph: slow, costly, and diluted, because a lot of irrelevant text came with it. And when Imran asked a second question, about a refund when the payment went to a government utility, the rule was on page six and its exception was on page nine, which was in the third piece. The machine would be shown the rule and not the exception.

**The second round was twenty small pieces.** Anaya cut again, a half-page at a time, with a lot more snipping and a good deal more mess on the carpet. Now the first question pulled out only the paragraph it needed, which was cheap and sharp. But the second question still failed. The rule was in one scrap and the exception in the next, and nothing guaranteed the right scrap was chosen without the other.

If only the rule reached the machine, it would answer confidently and incompletely, which is worse than no answer at all.

Then Farah picked up a scrap and read it aloud. "*The aforesaid amount shall be refunded within sixty days.*"

"Which amount?" said Anaya.

"I know," said Farah. "That's what I am saying. Which amount? Refunded to whom? What aforesaid?"

They looked at the piece. It was perfectly good English and entirely meaningless, a sentence cut loose from the one before it, which had said what the amount was. Documents are full of these references, in legal text especially, but also in anything that says "the above", "this scheme" or "such cases". A person reading a page has the paragraph before. A chunk does not. A piece that makes no sense on its own is an *orphaned chunk*, and the machine, shown one, will do what it always does with a gap: fill it in.

**The third round followed the structure of the document.** This time Anaya cut at the headings, one piece for each section, and made a photocopy of the last two sentences of every section to staple to the top of the next, so that a reference had something to refer to. Most of the orphans got their parents back. The rule and its exception, on pages six and nine, still fell into different sections, but the headings had at least been set up so that "Exceptions" was a section of its own, and a question about exceptions would fetch it.

"There," said Imran. "A reasonable cut."

"Is it right?"

"It is reasonable. Ask me what it gets wrong."

She thought. "Questions that span a rule and an exception that sit in different sections."

"Yes. And you can name that. Which means you can test for it on purpose."

## No right answer

This was the lesson, and it was the opposite of what she had hoped. She had expected to learn the correct size for a chunk. Instead she learned that there is none. Each way of cutting fails differently. Big pieces are expensive and blurred. Small pieces are cheap and sharp and lose their context. Cutting along the structure keeps the meaning inside each piece and loses answers that cross a boundary. The choice depends on what the documents look like and on what people actually ask.

Imran's rule for a design review was one she copied onto the inside cover of her notebook. *Say which failure you chose, and why.* People often want one correct chunk size, and there is not one. A team that cannot name the loss in its own method has not made a choice. It has accepted a default.

Farah wrote the sentence for the Sahaj policy and pinned it to the board. *We cut by section, with two sentences of overlap. That gains precise answers to questions about one clause. It loses answers that need a clause and its exception from different sections, so we test those on purpose.*

## The same problem, backwards

It was nearly seven when Anaya saw it, and she said it aloud, scattering scraps as she reached for a pen.

"The guard has the same problem."

Imran looked at her.

"Some customers don't write a message. They paste an email. A whole thread, three thousand words. The piece of the guard that finds names and places can only read so much at a time. So it will have to cut the thread into pieces too."

"And if it cuts in the middle of a number…"

"Then one piece ends with *4321 56* and the next begins *78 9012*, and neither is an Aadhaar number to anything that reads them." She drew it on the whiteboard, a number straddling a line like a car across a lane marking. "It would walk straight past."

It would, for the same reason as the rule and its exception: two halves of one thing, in two places, each meaningless alone. The fix was the same too, and she wrote it as a rule. Cut at the end of a sentence or a blank line, never in the middle of a run of digits. Let consecutive pieces share a few words at the edge, so that anything straddling the cut appears whole in at least one of them. And then test it, on purpose, with numbers placed exactly on the boundary.

Imran made a small noise she had learned meant that she had said a true thing in an engineer's way. "Put it in the answer key," he said. "Row eleven. A number on the cut."

## What to carry forward

A model cannot be given a whole library for each question, because it will not fit and because every token is paid for. The usual answer is to cut the documents into chunks ahead of time and send only the few that look relevant, which makes the cutting the hard part. Large chunks are costly and blurred, small ones are sharp and lose their context, and a chunk that refers to something in the piece before is an orphan. There is no correct size; each choice fails somewhere, and the useful thing to do is name the failure you accept and test it on purpose. The same care applies to any text the guard itself must cut: never split an identity number in half.

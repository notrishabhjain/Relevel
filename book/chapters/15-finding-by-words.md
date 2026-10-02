---
title: Finding by Words
summary: A product manager plays the part of the search box, learns why the oldest way of finding things fails the customers who most need help, and why it is still exactly right for an identity number.
course: ch4
terms:
  - keyword search | finding text by matching the words of the question against the words in the documents; it compares spelling, not meaning | keyword matching
---

Anaya was the search engine, and Farah was the customer, and between them on the table were twenty cards.

They were the scraps from last week, taped back onto index cards, each with a number in the corner and a half page of Sahaj's refund policy on its face. It was a wet Monday. The office smelled of damp umbrellas. Farah had put on a voice she used for imitations, slightly high and anxious, and Anaya had been given one rule: she could look only for the words Farah said.

"Ready?"

"Ready."

"*Paisa kab milega?*" said Farah. When will the money come?

Anaya looked at the cards. She was looking for *paisa*. She was looking for *kab*. She was looking for *milega*. She went through all twenty, slowly, turning each one over, and found none of the three on any card.

"Nothing," she said.

"There is a card about it," said Farah. "Card seven."

Anaya turned over card seven. *Refund of an excess payment will be processed to the registered account within seven working days of the request being approved.* She read it twice. "It's about exactly that. And there isn't a single word in common."

## Spelling, not meaning

The oldest way to find things in a pile of text is to match words. A person types *refund*; the system finds every chunk containing *refund*. It has been the heart of search boxes for decades, and it is fast, cheap and well understood. It is called *keyword search*.

Its flaw is built in. It compares spelling, not meaning. Two sentences that mean the same thing but share no words do not match at all, and the failure is not random. It happens in three places, all of which matter to a business.

The first is the gap between formal and everyday language. The policy says *reimbursement*, *disbursement*, *credited to the registered account*; the customer says *money back*. The people who write documents are specialists, and the people who ask questions are not. The second is a worse consequence of the first. Someone who already knows the product uses its vocabulary and finds what they want. Someone confused uses their own words and finds nothing. A keyword search works best for the users with the fewest problems and worst for the ones with the most.

The third is questions. *Why was I charged twice?* shares almost nothing with the paragraph explaining how a duplicate authorisation hold works. In Sahaj's case there was a fourth layer on top, and it was the one Farah cared about. Half her customers wrote in Hindi using English letters, and the policy was written in formal English. Even a perfect search for *paisa* would have found nothing.

"It's like asking for directions from someone who only understands the spelling of the street name," said Farah.

## Where it is exactly right

Anaya was about to write the method off. Then Farah leaned forward and said, in her ordinary voice: "*Clause 14.2.*"

Anaya looked through the cards. Card eleven began *14.2 Disputed charges.* She had found it in four seconds.

"There," said Farah. "That is what it is for."

Keyword search is excellent for exact things: a section number, a policy ID, a part number, a name. If someone types *clause 14.2* they want clause 14.2, not something that means roughly the same, and matching the exact text is precisely the right approach. It is also the one technique in this book that never invents a connection. If a word is there, it is found. If it is not, it is not.

Imran, who had wandered over with a mug, made the connection before she did.

"That's your pattern checker," he said.

"Is it?"

"A PAN is five letters, four digits, one letter. That is keyword search for a shape. It is exact, it is instant, it is free, and it can't be talked into anything. It is exactly the right tool for a thing that always looks the same." He sipped. "The mistake would be to use the clever method where the plain one does. The plain one wins here."

It was the second time he had said it, in different words, and she was beginning to see it as the central skill of his trade: knowing when not to be clever.

## Where the plain method fails the guard

But the same limit applied to the guard, and Farah, with unnerving timing, provided the example.

"What about this?" she said, and read from her phone. It was a message from last month, one of the real ones, and she had cleaned it herself before showing it to anyone. *Mera aadhaar number hai char teen do ek, paanch chhe saat aath, nau shunya ek do.*

Anaya read it twice. It was an Aadhaar number, twelve digits in groups of four, spoken as words: four three two one, five six seven eight, nine zero one two. Typed out, because the customer was dictating it to a voice keyboard, in Hinglish.

"The pattern checker would not see that," she said.

"There are no digits in it," said Imran. "A rule that looks for twelve digits finds nothing."

The shape was there. The spelling was not. This was the weakness of finding by words, turned inside out: the meaning is perfectly clear to any person, and a method that compares characters cannot see it. She wrote it on the board under the red line: *Spoken numbers. Row twelve.* She was building the answer key faster than she had expected, one embarrassment at a time.

## The silent failure

There was one more property of keyword search, which Farah pointed out last, because she had seen it cause real trouble in the help centre two years ago.

"Ask it something that isn't in the documents."

Anaya thought. "*Can I pay my bill with a credit card on Diwali?*"

She went through the cards. The word *credit* appeared on three of them, in a section about interest. The word *card* appeared on five. The word *bill* appeared on nearly all. She ranked them by how many of the words they contained. Card six came out on top.

Card six was about credit-card interest on late payments. It had nothing to do with Diwali, or with whether paying by card was allowed.

"It gave an answer," she said.

"It always does. There's no way for it to say *there is nothing here*. It scores everything and sorts it. The top card is just the least bad of a bad set." Farah folded her arms. "And the chatbot takes that card and treats it as if it were evidence."

That was the worry. Search never reports that it found nothing, and the machine that reads what it found does not know the difference. It writes a fluent answer from the least relevant card, in the voice of someone who has read the right one. No step reports an error. The system produces a confident, wrong answer, and nothing in it notices.

Anaya put the cards back in their numbered order, slowly, as if they were something fragile.

"We'll need a way to measure that," she said.

"Yes," said Imran. "But first, you should see what fixes the other half."

## What to carry forward

Keyword search finds text by matching the words of a question against the words in the documents. It is fast and cheap, never invents a connection, and is the right method for exact things like section numbers, codes and names, and for details with a fixed shape like a PAN. But it compares spelling, not meaning, so it fails exactly where users use their own words instead of the document's, and therefore fails the people who most need help. It also never says it found nothing: it returns the least bad match, and whatever reads that match may take it for evidence.

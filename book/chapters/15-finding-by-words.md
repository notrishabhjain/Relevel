---
title: Finding by Words
summary: Anaya plays the search box. She learns why the oldest way of finding text fails the customers who need help most. She also learns why it is exactly right for an identity number. You meet keyword search and its silent failure.
course: ch4
goals:
  - know how keyword search finds text, and where it is exactly the right tool
  - name the three places where matching spelling instead of meaning fails
  - see why a fixed-shape rule is a kind of keyword search, and why it misses spoken numbers
  - see why a search that never says "found nothing" is dangerous when something reads its results
terms:
  - keyword search | like pressing Ctrl+F; it finds text by matching the exact words of the question, so it compares spelling, not meaning | keyword matching
---

On a wet Monday, Anaya played the search engine. Farah Sheikh played the customer. Twenty index cards lay on the table between them. They were scraps from last week's cutting. Each was taped to a card and numbered. Each had half a page of Sahaj's refund policy on its face. Anaya had one rule. She could look only for the words Farah said.

Farah put on the high, worried voice she used for imitations. "Paisa kab milega?" she said. It means "When will the money come?"

Anaya searched for "paisa", then "kab", then "milega". She turned over all twenty cards. None of the three words was on any card. So she said there was nothing.

Farah said one card was about exactly that. Card seven. It read: "Refund of an excess payment will be processed to the registered account within seven working days of the request being approved." The card answered the question. But it shared no word with it.

## The case: twenty cards and no match

Anaya and Farah acted out how the oldest, most common kind of search works. Think of pressing Ctrl+F on a page. The sections below show what it does, where it fails, and where it is the best tool you have.

## Spelling, not meaning

The oldest way to find things in a pile of text is to match words. Someone types "refund". The system finds every chunk (every piece cut from a document) that has "refund" in it. Search boxes have worked this way for decades. It is fast, cheap and well understood. It is called *keyword search*. It is like finding a page by looking for the exact word.

Its flaw is built in. It compares spelling, not meaning. Two sentences can mean the same thing and share no words. Then they do not match at all. The failure is not random. It happens in three places, and all three matter to a business.

Table: Where keyword search fails
| Where | What happens | Example |
| --- | --- | --- |
| Formal against everyday language | Document writers are experts. The people asking are not | The policy says "reimbursement" and "credited to the registered account". The customer says "money back" |
| Users who are already confused | Someone who knows the product uses its words and finds what they want. Someone confused uses their own words and finds nothing | The method works best for users with the fewest problems. It works worst for those with the most |
| Questions against statements | A question shares little with the passage that answers it | "Why was I charged twice?" shares almost nothing with a paragraph on how a duplicate authorisation hold works |

At Sahaj there was a fourth layer on top. It worried Farah most. Half her customers wrote in Hindi using English letters. The policy was in formal English. Even a perfect search for "paisa" would find nothing.

## Where it is exactly right

Anaya was ready to write the method off. Then Farah leaned forward and said, in her ordinary voice, "Clause 14.2."

Card eleven began "14.2 Disputed charges". Anaya found it in four seconds.

::: key What keyword search is for
Keyword search is excellent for exact things. A section number. A policy code. A part number. A name. Someone who types "clause 14.2" wants clause 14.2. They do not want something that means roughly the same. Matching the exact text is the right way. It also never invents a link. If the word is there, it is found. If it is not, it is not.
:::

Imran came over with a mug. He saw the link before she did. "That's your pattern checker," he said.

He was right. A PAN is five letters, four digits and a letter. Finding one is a search for a shape. That search is exact, instant and free. Nobody can talk it into anything. It is the right tool for something that always looks the same. The mistake would be to use a clever tool where the plain one does the job.

## Where the plain method fails the guard

The guard has the same limit, and Farah had an example. She read from her phone a message from last month. She had cleaned it herself before showing it to anyone. "Mera aadhaar number hai char teen do ek, paanch chhe saat aath, nau shunya ek do."

It is an Aadhaar number (a twelve-digit identity number), in groups of four, spoken as words. Four three two one, five six seven eight, nine zero one two. The customer had been talking to a voice keyboard in Hinglish.

The pattern checker would not see it. There are no digits in the message. A rule that looks for twelve digits finds nothing.

So the shape is there, but the spelling is not. It is the weakness of finding by words, turned inside out. Any person can see the meaning. A method that compares characters cannot. Anaya added it to the answer key (the list of questions with known right answers) as row twelve: spoken numbers.

## The silent failure

Farah then pointed out one more thing about keyword search. She had seen it cause trouble in the help centre two years ago. She asked Anaya to put a question that the documents did not answer.

Anaya asked if she could pay her bill with a credit card on Diwali. The word "credit" was on three cards, in a section about interest. The word "card" was on five. The word "bill" was on nearly all of them. She ranked the cards by how many of the words each held. Card six came out on top.

Card six was about credit-card interest on late payments. It had nothing to do with Diwali. It did not say whether paying by card was allowed.

::: watch A search that never says "nothing here"
Keyword search scores every document and sorts them, so it always returns something. The top card is just the least bad of a bad set. Think of a shopkeeper who never says "we do not have it" and hands you the nearest box. The chatbot takes that card and treats it as proof.

The search never says it found nothing. The model that reads the result cannot tell the difference. It writes a smooth answer from the least fitting card, in the voice of someone who read the right one. No step reports an error.
:::

Anaya put the cards back in number order. The team would need a way to measure this, she said. Imran agreed. He added that she should first see what fixes the other half of the problem.

## Summary

Keyword search finds text by matching the words of a question against the words in the documents. It is fast and cheap. It never invents a link. It is the right method for exact things such as section numbers, codes and names. It also suits details with a fixed shape, such as a PAN.

- It compares spelling, not meaning. So it fails when users use their own words instead of the document's. That means it fails the people who need help most.
- A rule that looks for digits cannot see a number that is spoken or spelled out in words.
- It always returns its least bad match and never says it found nothing. So whatever reads the match may take it as proof.

Next, Anaya looks for a way to find text by what it means. Matching spelling has failed the customer who writes in her own words.

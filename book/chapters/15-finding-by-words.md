---
title: Finding by Words
summary: A product manager plays the part of the search box. She learns why the oldest way of finding text fails the customers who most need help, and why it is exactly right for an identity number. This chapter introduces keyword search and its silent failure.
course: ch4
goals:
  - explain how keyword search finds text, and where it is exactly the right tool
  - name the three places where matching spelling instead of meaning fails
  - see why a fixed-shape rule is a form of keyword search, and why it misses spoken numbers
  - explain why a search that never reports "found nothing" is dangerous when something reads its results
terms:
  - keyword search | finding text by matching the words of the question against the words in the documents; it compares spelling, not meaning | keyword matching
---

On a wet Monday, Anaya played the part of the search engine, and Farah Sheikh played the customer. On the table between them lay twenty index cards. They were the scraps from the previous week's cutting, each taped to a card and numbered, with half a page of Sahaj's refund policy on its face. Anaya was given one rule. She could look only for the words that Farah said.

Farah put on the slightly high, anxious voice she used for imitations. "Paisa kab milega?" she said. It means "When will the money come?"

Anaya searched for "paisa", then "kab", then "milega". She went through all twenty cards, turning each one over. None of the three words was on any card. So she said there was nothing.

Farah said there was a card about exactly that. Card seven. It read: "Refund of an excess payment will be processed to the registered account within seven working days of the request being approved." The card answered the question, and it shared no word with it.

## The case: twenty cards and no match

What Anaya and Farah acted out is how the oldest and most common kind of search behaves. The sections below explain what it does, where it fails, and where it is the best tool you can use.

## Spelling, not meaning

The oldest way to find things in a pile of text is to match words. Someone types "refund", and the system finds every chunk that contains "refund". Search boxes have worked this way for decades. It is fast, cheap and well understood. It is called *keyword search*.

Its flaw is built into the method. It compares spelling, not meaning. So two sentences that mean the same thing but share no words don't match at all. The failure isn't random. It happens in three places, and all three matter to a business.

Table: Where keyword search fails
| Where | What happens | Example |
| --- | --- | --- |
| Formal against everyday language | Document writers are specialists and askers are not | The policy says "reimbursement" and "credited to the registered account"; the customer says "money back" |
| Users who are already confused | Someone who knows the product uses its vocabulary and finds what they want; someone confused uses their own words and finds nothing | The method works best for the users with the fewest problems and worst for those with the most |
| Questions against statements | A question shares little with the passage that answers it | "Why was I charged twice?" shares almost nothing with a paragraph on how a duplicate authorisation hold works |

At Sahaj there was a fourth layer on top, and it worried Farah most. Half her customers wrote in Hindi using English letters, and the policy was written in formal English. Even a flawless search for "paisa" would have found nothing.

## Where it is exactly right

Anaya was ready to write the method off. Then Farah leaned forward and said, in her ordinary voice, "Clause 14.2."

Card eleven began "14.2 Disputed charges". Anaya found it in four seconds.

::: key What keyword search is for
Keyword search is excellent for exact things: a section number, a policy identifier, a part number, a name. Someone who types "clause 14.2" wants clause 14.2. They don't want something that means roughly the same. Matching the exact text is the right approach. It also never invents a connection. If a word is present, it is found. If it isn't, it isn't.
:::

Imran, who had wandered over with a mug, saw the connection before she did. "That's your pattern checker," he said.

He was right. A PAN is five letters, four digits and a letter, and finding one is a search for a shape. That search is exact, instant and free, and it can't be talked into anything. It is the right tool for something that always looks the same. The mistake would be to use a clever method where the plain one does the job.

## Where the plain method fails the guard

The same limit applies to the guard, and Farah had an example. From her phone she read out a message from the previous month, which she had cleaned herself before showing it to anyone: "Mera aadhaar number hai char teen do ek, paanch chhe saat aath, nau shunya ek do."

It is an Aadhaar number, twelve digits in groups of four, spoken as words: four three two one, five six seven eight, nine zero one two. The customer had been dictating to a voice keyboard in Hinglish.

The pattern checker would not see it. There are no digits in the message, and a rule that looks for twelve digits finds nothing.

So the shape is there, but the spelling isn't. It is the weakness of finding by words, turned inside out. Any person can see the meaning. A method that compares characters can't. Anaya added it to the answer key as row twelve: spoken numbers.

## The silent failure

Farah then pointed out one more property of keyword search. She had seen it cause trouble in the help centre two years earlier. She asked Anaya to put a question that the documents did not answer.

Anaya asked whether she could pay her bill with a credit card on Diwali. The word "credit" appeared on three cards, in a section about interest. The word "card" appeared on five, and "bill" on nearly all of them. She ranked the cards by how many of the words each one contained, and card six came out on top.

Card six was about credit-card interest on late payments. It had nothing to do with Diwali, or with whether paying by card was allowed.

::: watch A search that never says "nothing here"
Keyword search scores every document and sorts them, so it always returns something. The top card is simply the least bad of a bad set. The chatbot takes that card and treats it as evidence. The search never reports that it found nothing, and the model that reads the result can't tell the difference. It writes a fluent answer from the least relevant card, in the voice of someone who has read the right one. No step reports an error.
:::

Anaya put the cards back in their numbered order. The team would need a way to measure this, she said. Imran agreed. He added that she should first see what fixes the other half of the problem.

## Summary

Keyword search finds text by matching the words of a question against the words in the documents. It is fast and cheap, and it never invents a connection. It is the right method for exact things such as section numbers, codes and names, and for details with a fixed shape such as a PAN.

- It compares spelling, not meaning. So it fails where users use their own words instead of the document's, which means it fails the people who most need help.
- A rule that looks for digits can't see a number that is spoken or spelled out in words.
- It always returns its least bad match and never reports that it found nothing. So whatever reads the match may take it for evidence.

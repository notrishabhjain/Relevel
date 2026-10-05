---
title: Finding by Words
summary: A product manager plays the part of the search box and learns why the oldest way of finding text fails the customers who most need help, and why it is exactly right for an identity number. The chapter introduces keyword search and its silent failure.
course: ch4
goals:
  - explain how keyword search finds text and where it is exactly the right tool
  - name the three places where matching spelling instead of meaning fails
  - see why a fixed-shape rule is a form of keyword search and why it misses spoken numbers
  - explain why a search that never reports "found nothing" is dangerous when something reads its results
terms:
  - keyword search | finding text by matching the words of the question against the words in the documents; it compares spelling, not meaning | keyword matching
---

On a wet Monday Anaya played the part of the search engine, and Farah Sheikh played the customer. Between them on a table lay twenty index cards, the scraps from the previous week's cutting, each taped to a card and numbered, with half a page of Sahaj's refund policy on its face. Anaya was given one rule: she could look only for the words that Farah said.

Farah put on the slightly high, anxious voice she used for imitations and said "Paisa kab milega?", meaning "When will the money come?" Anaya searched for "paisa", then "kab", then "milega". She went through all twenty cards, turning each over, and found none of the three words on any of them. She said there was nothing. Farah said there was a card about exactly that, card seven. It read: "Refund of an excess payment will be processed to the registered account within seven working days of the request being approved." The card answered the question, and it shared no word with it.

## The case: twenty cards and no match

The exercise reproduces how the oldest and most widespread kind of search behaves. The sections below explain what it does, where it fails, and where it is the best tool available.

## Spelling, not meaning

The oldest way to find things in a pile of text is to match words. A person types "refund", and the system finds every chunk that contains "refund". It has been at the heart of search boxes for decades and is fast, cheap and well understood. It is called *keyword search*.

Its flaw is built into the method. It compares spelling and not meaning, so two sentences that mean the same thing but share no words do not match at all. The failure is not random. It occurs in three places, all of which matter to a business.

Table: Where keyword search fails
| Where | What happens | Example |
| --- | --- | --- |
| Formal against everyday language | Document writers are specialists and askers are not | The policy says "reimbursement" and "credited to the registered account"; the customer says "money back" |
| Users who are already confused | Someone who knows the product uses its vocabulary and finds what they want; someone confused uses their own words and finds nothing | The method works best for the users with the fewest problems and worst for those with the most |
| Questions against statements | A question shares little with the passage that answers it | "Why was I charged twice?" shares almost nothing with a paragraph on how a duplicate authorisation hold works |

At Sahaj there was a fourth layer on top of these, and it was the one that concerned Farah most. Half her customers wrote in Hindi using English letters, and the policy was written in formal English. A flawless search for "paisa" would still have found nothing.

## Where it is exactly right

Anaya was about to dismiss the method. Farah leaned forward and said, in her ordinary voice, "Clause 14.2." Card eleven began "14.2 Disputed charges", and Anaya found it in four seconds.

::: key What keyword search is for
Keyword search is excellent for exact things: a section number, a policy identifier, a part number, a name. Someone who types "clause 14.2" wants clause 14.2, not something that means roughly the same, and matching the exact text is the right approach. It also never invents a connection. If a word is present it is found, and if it is not, it is not.
:::

Imran, who had wandered over with a mug, saw the connection before she did. "That's your pattern checker," he said. A PAN is five letters, four digits and a letter, which is a search for a shape. It is exact, instant and free, and it cannot be talked into anything. It is the right tool for a thing that always looks the same, and the mistake would be to use the clever method where the plain one does the job.

## Where the plain method fails the guard

The same limit applies to the guard, and Farah supplied an example. She read from her phone a message from the previous month, which she had cleaned herself before showing anyone: "Mera aadhaar number hai char teen do ek, paanch chhe saat aath, nau shunya ek do."

It is an Aadhaar number of twelve digits in groups of four, spoken as words: four three two one, five six seven eight, nine zero one two. The customer had been dictating to a voice keyboard in Hinglish. The pattern checker would not see it, because there are no digits in the message and a rule that looks for twelve digits finds nothing.

The shape is present, and the spelling is not. This is the weakness of finding by words turned inside out: the meaning is clear to any person, and a method that compares characters cannot see it. Anaya added it to the answer key as row twelve: spoken numbers.

## The silent failure

Farah then pointed out a further property of keyword search, which she had seen cause trouble in the help centre two years earlier. She asked Anaya to put a question that was not answered in the documents.

Anaya asked whether she could pay her bill with a credit card on Diwali. The word "credit" appeared on three cards, in a section about interest. The word "card" appeared on five, and "bill" on nearly all. She ranked the cards by how many of the words each contained, and card six came out on top. Card six was about credit-card interest on late payments. It had nothing to do with Diwali or with whether paying by card was allowed.

::: watch A search that never says "nothing here"
Keyword search scores every document and sorts them, so it always returns something. The top card is the least bad of a bad set. The chatbot takes that card and treats it as evidence. Search never reports that it found nothing, and the model that reads what it found cannot tell the difference. It writes a fluent answer from the least relevant card in the voice of someone who has read the right one. No step reports an error.
:::

Anaya put the cards back in their numbered order and observed that the team would need a way to measure this. Imran agreed, and added that she should first see what fixes the other half of the problem.

## Summary

Keyword search finds text by matching the words of a question against the words in the documents. It is fast and cheap, it never invents a connection, and it is the right method for exact things such as section numbers, codes and names, and for details with a fixed shape such as a PAN.

- It compares spelling and not meaning, so it fails where users use their own words instead of the document's. It therefore fails the people who most need help.
- A rule that looks for digits cannot see a number spoken or spelled out in words.
- It always returns its least bad match and never reports that it found nothing, so whatever reads the match may take it for evidence.

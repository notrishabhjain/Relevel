---
title: Searching Better
summary: A customer is told last year's late fee. Four ways to improve search are measured on the same answer key. The plainest one is the only one that can promise a result. This chapter covers hybrid search, reranking, contextual retrieval, metadata filtering and agentic search.
course: ch12
goals:
  - say why a right-looking answer can come from an old document
  - say what hybrid search, reranking and contextual retrieval each repair
  - say why metadata filtering can promise a result when ranking only improves the odds
  - add a real customer failure to the answer key, and use labels to control who may see what
terms:
  - hybrid search | using Ctrl+F style word search and meaning search together, then mixing the two lists, so you do not have to pick one | 
  - reranking | a quick helper pulls a big pile of pages, then a slower, careful reader reads the question and each page together and puts the best few on top | rerank, reranker
  - contextual retrieval | a note on each index card saying which book and chapter it came from, so a card found alone still makes sense | contextual
  - metadata filtering | labels on every file, such as version, dates and who may see it; you throw out the files that cannot be right before any scoring | metadata, metadata filter
  - agentic search | a helper who runs several searches by itself, reads what comes back, and rewrites the question, in a loop | 
---

A complaint arrived on a Monday. Farah Sheikh forwarded it with no comment. That was how Anaya knew it mattered. A customer in Nashik had asked the chatbot the late fee on her electricity bill. It had said one hundred rupees. She had paid three days after the due date. Sahaj had charged her one hundred and fifty.

She was not very angry. Her message was polite. She only wanted to know why a machine, speaking for the company, said one thing while the company did another.

Within the hour, Lakshmi Iyer came to the glass room with a printout. Her face showed nothing at all. She asked which figure was right. Imran Qureshi checked. He said one hundred and fifty, because the fee went up in January. She asked where the machine had found a hundred.

## The case: the fee that used to be true

It took Imran twenty minutes to find the reason. It was an ordinary one. In January the late-fee policy changed. Someone put the new version in the folder the chatbot reads from. Nobody removed the old one.

It is like a notice board with two notices pinned up. The old one was never taken down. So both versions sat in the store. Each was cut into chunks (small pieces, like index cards). Each chunk had its own embedding (an address for its meaning).

The customer asked her question. The search found two chunks about the late fee. They were nearly the same, except for the figure. The old one scored a little higher. It went to the model. The model wrote a smooth, sure, grounded answer (an answer taken from a real page) from last year's rule.

Everything had worked. The search found the right topic. The model used what it was given. The answer came from a real document. The document was just out of date.

::: key Relevance is not correctness
Better ranking would not have helped. Last year's policy is about late fees. It matches the question as well as this year's does. Relevance (does it match the question?) and correctness (is it right today?) are different questions. Nothing in the search knew the difference.
:::

## Four improvements

The work of the last month gave the team a calm way to look at this. They had an answer key for the chatbot's search. It had ten questions in the customers' own words. The first score was six out of ten. Imran took four techniques, one by one. He measured each on the same ten questions.

Table: Four improvements to search, measured on the same ten questions
| Technique | What it does | Score |
| --- | --- | --- |
| Hybrid search | Runs keyword search and search by meaning together, and combines the two lists, so there is no longer a choice to make. "Clause 14.2" came from one and "paisa kab milega" from the other | 6 to 7 |
| Reranking | Fetches the best fifty pieces cheaply. Then a slower, more careful model reads the question and each piece together and puts the best few on top. It improves recall and precision at once. The price is extra time and a second call. So it runs on fifty pieces, not on the whole library | 7 to 8 |
| Contextual retrieval | Before storing each chunk, a model writes one sentence saying where the chunk sits in its document ("This is from the refund section of the Late Payment Policy, about overpayments"). The sentence is stored with it. A piece that began "the aforesaid amount" now carries a note on what the amount is | 8 to 9 |
| Metadata filtering | Each chunk is labelled with its document, its version, the dates between which it is in force and who may see it. Before the search scores anything, any chunk that is not current is thrown out | No change |

Think of hybrid search as two friends. One finds the exact word, like Ctrl+F. One finds what you mean. Together they miss less. Reranking is like a shortlist and an interview. Contextual retrieval is a sticky note on each card.

The fourth technique is the one that did not move the score. The labels are called *metadata* (facts about a page, not the page itself). Throwing out chunks by those labels before any scoring is *metadata filtering*.

## The question nobody had asked

Anaya worked out why the score had not moved. The answer key did not hold the question. None of the ten asked about anything that had changed.

So Imran added it as row eleven. What is the late fee on an electricity bill? The right answer was one hundred and fifty rupees. Without the filter, the system said a hundred. With the filter on, it said a hundred and fifty. He ran it a hundred times to be sure. The result was the same every time.

::: key The only technique that guarantees something
Hybrid search makes the right chunk more likely to come up. Reranking makes it more likely to be on top. The extra sentence makes it more likely to be understood. No ranking technique can stop a cancelled policy from beating the current one. Ranking is about relevance, and this is about correctness. A filter works before the scoring. It does not make the wrong thing less likely. It makes it impossible.
:::

Anaya saw a difference she had begun to look for everywhere. One kind of fix makes a failure rarer. Another kind removes its cause. It is like the notice board again. You can make people read more carefully. Or you can take the old notice down. She wrote "row eleven" on the whiteboard in black, below the old red line. It was the first row of the answer key that came from a customer.

## What the labels are for

Lakshmi had stayed. She asked what else was on the labels. Imran listed them: the document, the version, the dates it applies, and who may see it.

Lakshmi repeated the last one. There were internal documents in the folder, such as the collections playbook and the staff handbook. What would have happened before, she asked, if a customer's question matched the handbook? Imran said the search would have found the handbook. She asked him to show how that was now stopped. A filter before the search, he said. A customer's request can see only chunks labelled for customers.

It is like a library with a staff-only shelf. The customer is simply never sent to that shelf.

She nodded. Anaya had not seen that look on her before. It was not quite approval. It was the look of someone who has found a firm floor. For the first time, a tool in the building did what Lakshmi had asked of every system for twenty years. It made the wrong thing impossible, not just unlikely.

Anaya saw that the same idea belonged in the guard. Every message comes from a place. It may be the order-tracking screen, the loan-status screen or the free chat. An identity number typed into a screen built to collect one may be fine. The same number in the free chat is not.

Suppose the rule-keeper knows where a message came from before it decides. Then it can use different rules, with no clever step at all. The purpose of a message was just another label, and an honest one. She added a column to the specification (the written plan for the product).

## One more idea, set aside

One more technique was left. Imran described it and then put it off. A model can be allowed to run several searches by itself. It reads the results and rewrites its question. It uses the loop from Chapter 20. This is *agentic search*.

It is like a helper sent on errands who keeps going back to the shelf. It can find better evidence. But it multiplies the cost, as that chapter showed. It brings the same risks too. He wrote it on the board under "later". That column had begun to look like a good place for many things.

## Summary

Plain search can be improved in four ways. Each is worth measuring on the same answer key.

- Hybrid search runs keyword and meaning search together, so no one has to pick between them.
- Reranking fetches many candidates. Then a slower model rereads and reorders them. It improves what is found and how clean it is, at some cost in time.
- Contextual retrieval adds to each chunk a sentence about where it came from. It repairs orphan chunks.
- Metadata filtering labels chunks with version, dates and audience. It filters on those labels before any scoring. It is the only technique here that can promise a result, because relevance and correctness are different questions.
- Agentic search lets a model search again and again. It multiplies the cost.

A good answer key grows from real failures. The best new row is the one a customer wrote.

Next, the tenth sentence in the answer key looked like a joke. It turns out to be a real attack.

---
title: Searching Better
summary: A customer is quoted last year's late fee. Four improvements to search are measured against the same answer key, and the least glamorous is the only one that can promise a result. The chapter covers hybrid search, reranking, contextual retrieval, metadata filtering and agentic search.
course: ch12
goals:
  - explain why a correct-looking answer can be grounded in an out-of-date document
  - describe hybrid search, reranking and contextual retrieval and what each repairs
  - explain why metadata filtering can guarantee a result when ranking techniques only improve the odds
  - add a real customer failure to the answer key and use labels to control who may see what
terms:
  - hybrid search | running keyword search and meaning-based search together and combining the two rankings, so you do not have to choose between them | 
  - reranking | fetching many candidate pieces cheaply, then having a slower, more careful model read the question and each piece together and put the best few on top | rerank, reranker
  - contextual retrieval | before storing each chunk, adding a sentence that says where it sits in its document, so that an orphaned chunk keeps its meaning | contextual
  - metadata filtering | removing, before any scoring, the chunks that cannot be right, using labels attached to them such as version, dates and who may see them | metadata, metadata filter
  - agentic search | letting a model run several searches itself, read what comes back and rewrite its query, using a loop | 
---

A complaint arrived on a Monday, forwarded by Farah Sheikh without comment, which was how Anaya knew it mattered. A customer in Nashik had asked the chatbot what the late fee on her electricity bill was, and it had said one hundred rupees. She had paid three days after the due date and Sahaj had charged her one hundred and fifty. She was not very angry, and her message was courteous. She wanted to know why a machine speaking for the company had said one thing while the company did another.

Lakshmi Iyer arrived at the glass room within the hour with a printout and a face from which all expression had been carefully removed. She asked which figure was right. Imran Qureshi checked and said one hundred and fifty: the fee had gone up in January. She asked where the machine had found a hundred.

## The case: the fee that used to be true

The explanation took Imran twenty minutes to find, and it was ordinary. When the late-fee policy changed in January, someone had uploaded the new version to the folder the chatbot read from, and nobody had removed the old one. Both versions were in the store, cut into chunks, each with its own embedding. When the customer asked her question, the search found the two chunks that dealt with the late fee. They were nearly identical except for the figure, and the old one happened to score slightly higher. It went to the model, which wrote a fluent, confident, grounded answer from last year's rule.

Everything had worked. The search found the right topic, the model used what it was given, and the answer was grounded in a real document. The document was out of date.

::: key Relevance is not correctness
Better ranking would not have helped. Last year's policy is about late fees and matches the question as well as this year's does. Relevance and correctness are different questions, and nothing in the search knew the difference.
:::

## Four improvements

The work of the previous month supplied the means to look at this calmly. The team had an answer key for the chatbot's search, ten questions in the customers' words, with a first score of six out of ten. Imran took four techniques in turn and measured each against the same ten.

Table: Four improvements to search, measured on the same ten questions
| Technique | What it does | Score |
| --- | --- | --- |
| Hybrid search | Runs keyword search and search by meaning together and combines the two lists, so there is no longer a choice to make. "Clause 14.2" came from one and "paisa kab milega" from the other | 6 to 7 |
| Reranking | Fetches the best fifty pieces cheaply, then has a slower, more careful model read the question and each piece together and put the best few on top. It improves recall and precision at once, at the price of extra time and a second call, which is why it runs on fifty pieces and not on the whole library | 7 to 8 |
| Contextual retrieval | Before storing each chunk, a model writes one sentence saying where it sits in its document ("This is from the refund section of the Late Payment Policy, about overpayments"), and the sentence is stored with it. A piece that began "the aforesaid amount" now carries a note on what the amount is | 8 to 9 |
| Metadata filtering | Each chunk is labelled with its document, its version, the dates between which it is in force and who may see it. Before the search scores anything, any chunk that is not current is discarded | No change |

The fourth technique is the one that did not move the score. These labels are *metadata*, and discarding chunks by them before any scoring is *metadata filtering*.

## The question nobody had asked

Anaya explained why the score had not moved: the answer key did not contain the question. None of the ten asked about anything that had changed. Imran added it as row eleven: what is the late fee on an electricity bill, with the correct answer of one hundred and fifty rupees. Without the filter the system answered a hundred. With the filter on it answered a hundred and fifty. He ran it a hundred times, to see, and the result was the same each time.

::: key The only technique that guarantees something
Hybrid search makes the right chunk more likely to come up. Reranking makes it more likely to be on top. The extra sentence makes it more likely to be understood. No ranking technique can stop a repealed policy from outranking the current one, because ranking concerns relevance and this concerns correctness. A filter acts before the scoring. It does not make the wrong thing less likely. It makes it impossible.
:::

Anaya recognised the distinction she had begun to look for in everything: a method that makes a failure rarer, and a method that removes its cause. She wrote "row eleven" on the whiteboard in black, below the old red line. It was the first row of the answer key that had come from a customer.

## What the labels are for

Lakshmi, who had stayed, asked what else was on the labels. Imran listed them: the document, the version, the dates it applies, and who is allowed to see it. Lakshmi repeated the last item. There were internal documents in the folder, such as the collections playbook and the staff handbook. She asked what would have happened before if a customer's question had matched the handbook. Imran said it would have found the handbook. She asked him to show how it was now prevented. A filter before the search, he said: a customer's request can see only chunks labelled for customers.

She nodded with an expression that Anaya had not seen on her before. It was not quite approval. It was the look of a person who has found a firm floor. For the first time a tool in the building was doing what Lakshmi had asked of every system for twenty years: making the wrong thing impossible instead of unlikely.

The same idea, Anaya saw, belonged in the guard. Every message arrives from a place: the order-tracking screen, the loan-status screen, the free chat. An identity number typed into a screen designed to collect one may be exactly right, and the same number in the free chat is not. If the rule-keeper knows where a message came from before it decides anything, it can apply different rules without any clever step. The purpose of a message was another label, and an honest one. She added a column to the specification.

## One more idea, set aside

A fifth technique remained, which Imran described and deferred. A model can be allowed to run several searches itself, read the results and rewrite its question, using the loop of Chapter 20. This is *agentic search*. It can find better evidence, and it multiplies the cost in the way that chapter showed and adds the same risks. He wrote it on the board under "later", a column that had begun to look like a good place for a number of things.

## Summary

Plain search can be improved four ways, each worth measuring against the same answer key.

- Hybrid search runs keyword and meaning search together, so no choice has to be made between them.
- Reranking fetches many candidates and has a slower model reread and reorder them. It improves both what is found and how clean it is, at some cost in time.
- Contextual retrieval attaches to each chunk a sentence about where it comes from and repairs orphans.
- Metadata filtering labels chunks with version, dates and audience and filters on those labels before any scoring. It is the only technique here that can promise a result, because relevance and correctness are different questions.
- Agentic search lets a model search repeatedly, and it multiplies the cost.

A good answer key grows from real failures, and the best new row is the one a customer wrote.

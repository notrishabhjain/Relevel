---
title: Searching Better
summary: A customer is quoted last year's late fee, and four improvements to search, each measured against the same answer key, show that the dullest one is the only one that can promise anything.
course: ch12
terms:
  - hybrid search | running keyword search and meaning-based search together and combining the two rankings, so you do not have to choose between them | 
  - reranking | fetching many candidate pieces cheaply, then having a slower, more careful model read the question and each piece together and put the best few on top | rerank, reranker
  - contextual retrieval | before storing each chunk, adding a sentence that says where it sits in its document, so that an orphaned chunk keeps its meaning | contextual
  - metadata filtering | removing, before any scoring, the chunks that cannot be right, using labels attached to them such as version, dates and who may see them | metadata, metadata filter
  - agentic search | letting a model run several searches itself, read what comes back and rewrite its query, using a loop | 
---

The complaint came in on a Monday, forwarded by Farah with no comment, which was how Anaya knew it mattered.

It was from a customer in Nashik. She had asked the chatbot what the late fee was on her electricity bill, and it had told her one hundred rupees. She had paid on the due date plus three days, and Sahaj had charged her one hundred and fifty. She was not very angry. Her message was courteous. She simply wanted to know why a machine speaking for the company had said one thing and the company had done another.

Lakshmi arrived at the glass room within the hour with a printout of the complaint and a face from which all expression had been carefully removed.

"Which one is right?" she said.

"The hundred and fifty," said Imran, after a minute with a screen. "It went up in January."

"Then where did the machine get a hundred?"

## The fee that used to be true

It took Imran twenty minutes to find it, and the explanation was so ordinary that it was worse.

When the late-fee policy changed in January, someone had uploaded the new version to the folder the chatbot read from. Nobody had removed the old one. Both were in the store, cut into chunks, each with its own embedding. When the customer in Nashik asked her question, the search had found the two chunks that spoke about the late fee. They were nearly identical, except for the figure. The old one happened to score a shade higher. It went to the model, which wrote a fluent, confident, well-grounded answer from last year's rule.

Everything had worked. That was the horror of it. The search found the right topic, the model used what it was given, and the answer was grounded in a real document. The document was out of date.

"Better ranking would not help," said Imran, slowly. "That's what I keep turning over. Last year's policy is *about* late fees. It matches the question as well as this year's does. Relevance and correctness are different questions, and nothing in the search knows the difference."

## Four improvements

The previous month's work had given them the means to look at this calmly. They had the answer key for the chatbot's search, ten questions in the customers' words, and a first score of six out of ten. Imran had been meaning to improve it. Now he had a reason, and he went through four techniques in order, measuring each one against the same ten.

**The first was to run both kinds of search.** Keyword search is good at exact strings and weak on meaning. Search by meaning is the reverse. *Hybrid search* runs both and combines the two lists of results, and so there is no longer a choice to make. *Clause 14.2* came from one; *paisa kab milega* came from the other. Six of ten rose to seven.

**The second was to re-read the shortlist.** Instead of fetching the best five pieces and hoping, fetch the best fifty cheaply, then hand the question and each of the fifty to a slower, more careful model that reads them together and puts the best few on top. This is *reranking*. It gave a large gain for a modest cost, and, unusually, it improved recall and precision at once: more was found because fifty had been fetched instead of five, and fewer irrelevant pieces survived because the second model had actually read them. Seven became eight. The price was extra time and a second call, which is why it runs on fifty pieces and not on the whole library.

**The third was to mend the orphans.** Before storing each chunk, a model was asked to write a single sentence saying where it sat in its document, and that sentence was stored with it. *This is from the refund section of the Late Payment Policy, about overpayments.* A piece that began *the aforesaid amount* now carried a note on what it was the amount of. This is *contextual retrieval*, and it repaired a failure that had been there since the scissors. Eight became nine.

**The fourth was the dull one.** Imran wrote a few lines of code that labelled each chunk with the document it came from, its version, the dates between which it was in force, and who was allowed to see it. These labels are *metadata*. Then, before the search scored anything, he told it to throw away any chunk that was not current. This is *metadata filtering*.

The score did not move.

## The question nobody had asked

"It didn't move because the answer key doesn't have this question," said Anaya.

"No."

"The ten questions didn't include last year's fee. We never asked about anything that had changed."

"Right. So let us add one." Imran opened the file. Row eleven: *What is the late fee on an electricity bill?* The correct answer: one hundred and fifty rupees. Without filtering, the system gave a hundred. With the filter on, it gave a hundred and fifty. Every time. He ran it a hundred times, to see.

He looked at the screen for a moment before he said what he thought of it.

"Filtering is the only one of these four that guarantees anything. The others improve the odds. Hybrid search makes the right chunk more likely to come up. Reranking makes it more likely to be on top. The extra sentence makes it more likely to be understood. But no ranking technique can stop a repealed policy from outranking the current one, because ranking is about relevance, and this is about correctness. A filter acts *before* the scoring. It doesn't make the wrong thing less likely. It makes it impossible."

This was, Anaya thought, the kind of distinction she had started to look for in everything: a method that makes a failure rarer, and a method that removes the reason for it. She wrote *row eleven* on the whiteboard, in black, below the old red line. It was the first row in the answer key that had come from a customer.

## What the labels are for

Lakshmi, who had stayed, asked a different question.

"The labels. What else is on them?"

"Which document, which version, the dates it applies. Who is allowed to see it."

"Who is allowed to see it," Lakshmi repeated. "There are internal documents in that folder. The collections playbook. The staff handbook."

"Yes."

"And before, if a customer had asked a question that matched the handbook?"

Imran said nothing for a moment. "It would have found the handbook."

"Show me how you stop that."

"With a filter," he said. "Before the search. A customer's request can only ever see chunks labelled for customers."

She nodded, with something Anaya had not seen on her face before. It was not quite approval. It was the look of a person who has found a firm floor. For the first time, a tool in the building was doing the one thing she had asked of every system for twenty years: making the wrong thing impossible instead of unlikely.

The same list of labels, Anaya saw, belonged in the guard. Every message arrived with a place it had come from: the order-tracking screen, the loan-status screen, the free chat. An identity number typed into a screen that is meant to collect one might be exactly right. The same number in the free chat was not. If the rule-keeper knew where a message came from before it decided anything, it could apply different rules without a single clever step. The purpose of a message was another label, and an honest one. She added a column to the specification.

## One last idea

There remained a fifth technique, which Imran described and set aside. It was to let the model run several searches itself, read the results and rewrite its question, using the same loop as in the earlier chapter. It could find better evidence. It also multiplied the cost in just the way that chapter had shown, and it added the same risks. He wrote it on the board under *later*, which was a column that had begun to look like a good place for a number of things.

*Agentic search*, he called it. They would come back to it if they ever needed to.

## What to carry forward

Plain search can be improved four ways, each worth measuring against the same answer key. Running keyword and meaning search together, called hybrid search, stops you choosing between them. Fetching many candidates and having a slower model reread and reorder them, called reranking, improves both what is found and how clean it is, at some cost in time. Attaching to each chunk a sentence about where it comes from, called contextual retrieval, repairs orphans. And labelling chunks with their version, dates and audience, then filtering on those labels before any scoring, is the only technique here that can promise a result, because relevance and correctness are different questions. Letting a model search repeatedly is possible and multiplies the cost. A good answer key grows from real failures, and the best new row is the one a customer wrote.

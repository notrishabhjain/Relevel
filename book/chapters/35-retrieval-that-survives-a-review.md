---
title: Retrieval That Survives a Review
summary: A prototype works because you picked every document and you are the only user. Production takes both comforts away. In a review full of people who hope it fails, four questions are put to the chatbot. They fit every retrieval system. The chapter teaches ingestion, parsers, access control and abstention.
course: ch11r
goals:
  - ask four questions of any retrieval system: was it read correctly, is the user allowed to see it, is it the right piece, can you trace it
  - see why anything lost at ingestion is lost for good, and how a parser can quietly wreck a table
  - give each user only their own pages, using labels and filters in the application, and choose on purpose how fast a withdrawn document disappears
  - plan abstention as a product behaviour, and ask for citations that open the source
terms:
  - ingestion | like a clerk who scans papers into the office computer: the step of reading documents into a system, including scanning, parsing and splitting them; whatever is lost here is lost for good | 
  - parser | like a photocopier that turns a file such as a PDF into plain text and structure; its mistakes are invisible to everything that comes after it | parsers
  - access control | like a lock on each cabinet: rules that say which user may see which document or chunk, kept in the application and data layer, not left to the model | access label, access labels
  - abstention | like a student who writes "I don't know" instead of guessing: the system chooses not to answer, and says so, when it has no evidence; it is a product behaviour you design, not a line in an instruction | abstain
---

The review was in the big room on the second floor. Eleven people came, and so did a plate of biscuits. Lakshmi Iyer had called it. The chatbot had been Imran Qureshi's project for two years. Now it was about to become something else.

Until then it served one lender's products, in one way. A lender is a company that gives loans. In November, Sahaj would start serving two more lenders. Each had its own terms and rates. Each wanted a written promise. Its customers' questions must be answered from its own documents, and nobody else's.

A month earlier, Anaya had asked a question. Could the chatbot's search be called production-ready? Production means real customers, not a test. She was told yes. Nobody told her why.

Lakshmi began with one sentence. A prototype works because you picked every document and you are the only user. Production takes away both comforts. She wanted to know what was left.

## The case: four questions on one slide

Think of a shop inspector with a short checklist. Imran showed one slide with four questions. Did we read the document correctly? Is this user allowed to see it? Did we find the right piece? Can we show where the answer came from? A retrieval system has many worries. Every one of them fits under one of these four.

The last column of the table shows where each question was settled in this chapter.

Table: The four questions
| Question | What it checks | Where it was settled in this chapter |
| --- | --- | --- |
| Did we read the document correctly? | The step that reads documents in | The rate card flattened by the parser |
| Is this user allowed to see it? | Who may see which piece | Access control and the withdrawn document |
| Did we find the right piece? | The search | Exact and meaning-based search together, rewriting, abstention |
| Can we show where the answer came from? | The trail from answer to page | Citations that open |

## Did we read it correctly?

The chain has seven links, like a bicycle chain. Documents are read in. They are split into pieces and labelled. Then they are turned into maps of meaning. Next they are searched. What is found goes into a request. Last, the answer is checked. Each link can be tuned. So each one is a suspect when quality drops and no code has changed.

Imran trusted the first link least. He gave his reason in one sentence. Anything lost while reading documents in is lost for good.

**Ingestion** is the step of reading documents into the system. Think of a clerk scanning papers into the office computer. It includes scanning them. It includes running them through a **parser**, which turns a file into text and structure. It also includes splitting them into pieces. Better search cannot bring back a table the parser flattened. It cannot bring back a page the parser skipped. Every later link is blind to the mistake, because nothing after the parser ever sees the original.

Imran did what Anaya had once been told to do, and had not enjoyed. He took three partner documents. He put the text the parser pulled out next to what a person sees on the page.

The first two were fine. The third was a rate card. That is a table with four columns of rates, by loan amount and by term. The parser had read it as one long line of numbers.

::: watch Every figure survived and no relationship did
Ask the system the rate for a four-year loan of two lakh rupees. It would pick a number from somewhere in that line. It would say it with perfect confidence. Nothing would catch it, because every part reported success.

Imran fixed the parser so it read tables as tables. He added a check. It compared the number of figures in the output with the number on the page. His lesson for every project was this. When retrieval is poor, ask about the parser before you blame the maps of meaning.
:::

## Is this user allowed to see it?

This was Lakshmi's question. Think of a bank locker room. Each customer has a key to their own locker only. She said a correct answer taken from a document the user must not read is still a security failure.

Imran showed her the change. Every piece of text now carried a label. The label had an identity that never changed. It named the document, the version, the section and the language. It gave a date from which the piece was in force. That autumn, one more item was added: who may see it. That could be partner one, partner two, all customers or staff only.

This is **access control**. Imran made one point twice. It is about where the rule lives. It cannot be a line in an instruction, such as "only answer from this lender's documents". An instruction is only a request. The model may not obey it.

The rule has to be a filter in the application. It runs before any search. Then a customer of the first lender cannot reach a piece of the second lender's text. Asking for it by name does not help.

He had a test. A customer of partner one asked for the interest rate that partner two charges. First the customer asked politely, then rudely. The chatbot said it could not help. Then he switched the test user to a role with no access at all. He asked about partner one's rate. The chatbot said nothing was available.

Nobody doubted the second result. The first mattered less than it looked. What mattered was that the piece was never within reach.

### Freshness

Lakshmi's next item was freshness. That means how soon the system stops using an old document. At ten that morning, she said, partner two had withdrawn a document. What happens now? Imran said the document is removed from the source folder. By when, she asked? The nightly rebuild takes it out at one in the morning. A rebuild means making the whole store again from the source. So from ten until one, the chatbot still quotes it. "That is a decision," said Lakshmi. "Make it on purpose."

Table: The withdrawn document, before and after
| | Before | After |
| --- | --- | --- |
| How removal works | The nightly rebuild removes it at one in the morning | Removing the source deletes the document's pieces from the store at once. The nightly rebuild is a check and not the mechanism |
| The window | About fifteen hours | About a minute |
| Recovery | None | Every rebuild keeps a snapshot, so a bad one can be reversed in minutes |

A snapshot is a saved copy, like a photo of the store before the change.

## Did we find the right piece?

The third question had the most techniques. Think of finding one page in a huge book. Imran went through them quickly. The room had met most of them already.

Keyword search is still useful for identifiers, names, codes and exact phrases. It is like Ctrl+F. A team that drops it because meaning-based search is fashionable has thrown away a strong signal. Meaning-based search helps when the wording differs. Running both had proved best.

A cutting rule is a guess. It guesses what size of evidence users will need, like how thick to slice a loaf. So test it on a question whose answer crosses a boundary between two pieces.

Reranking puts the results in a better order. It costs time and money. Think of a teacher re-marking the top ten answers. The rule was this. Fetch ten candidates and rescore them. Then check whether recall at ten and precision at the top three rose enough to be worth the extra cost. Recall asks how many of the right pieces you caught. Precision asks how much of what you caught is right. Never add a step because a reference diagram has it. Prove it.

Two ideas were newer to Anaya. The first is that the question can be rewritten before the search. An unclear question becomes a clear one. That is fine, as long as the rewrite keeps what the customer meant. Imran showed one where it did not. A customer asked about a "late charge". The question was rewritten as "late fee". In the partner's terms, that was a different thing.

The second was **abstention**, which he had saved for last. A system practises abstention when it chooses not to answer, and says so, because it lacks the evidence. It is like a student who writes "I don't know" instead of guessing. Imran called it a product behaviour. It is not a line in an instruction. What does the chatbot do when the answer is not in the documents? Does it ask what the customer meant? Or does it say it does not know, and offer a person?

He had designed it with Farah to do the second, in three languages. The rule for giving up was a number. It was tested with questions that had no answer. The earlier searches had never been able to do that.

## Can we show where it came from?

The last question was the shortest. It is like the source line under a newspaper story. Every answer carried the identity of the piece it was written from. That gave its document, version and section. The link opened the page. If the page did not support the answer, a person could see that in a moment. A citation that names a document but does not open it is worse than nothing. It looks checkable, and it is not.

## And the guard

The review ended at ten past six. The biscuits were gone. Lakshmi said she would write her report on Friday. It would not be hostile, she said. Two things in it would need work.

Walking back to her desk, Anaya asked herself a question. Did the four questions apply to what she was building? The answer came without effort.

Table: The four questions applied to the guard
| Question | In the guard |
| --- | --- |
| Did we read it correctly? | The scanned cards and their look-alike characters |
| Is this user allowed to see it? | The agents and the restore button: who may see an original, for how long, and who is told |
| Did we find the right piece? | The finder and the judge, and the answer key that measured them |
| Can we show where the answer came from? | The record of every decision, with the code that made it |

They were the same four questions. She suspected they would come back for the rest of her working life. They would come in a different order, wearing different clothes.

## Summary

A prototype works because the builder picked every document and is the only user. Production removes both. Four questions cover almost every worry.

- Were the documents read correctly? Anything lost at ingestion is lost for good, like a table flattened by the parser. Nothing after it can see the loss.
- May this user see what was found? Enforce it with labels and filters in the application. Do not ask the model. Also decide on purpose how fast a withdrawn document disappears.
- Was the right piece found? Combine exact and meaning-based search. Test the cutting rule. Prove the value of any re-ordering step. Design what the system does when there is no answer.
- Can the answer be traced to the exact page it came from?

Next, Farah asks for an assistant in the support console that does everything. Imran asks what it may do, with what data, and who checks.

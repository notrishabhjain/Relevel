---
title: Retrieval That Survives a Review
summary: A prototype works because you chose every document and you are its only user. Production removes both comforts. Four questions that fit every retrieval system are put to the chatbot in a review attended by people who would like it to fail. The chapter introduces ingestion, parsers, access control and abstention.
course: ch11r
goals:
  - apply four questions to a retrieval system: read correctly, allowed to see, right piece, traceable
  - explain why anything lost at ingestion is lost for good, and how a parser can silently destroy a table
  - enforce access control with labels and filters in the application, and decide on purpose how quickly a withdrawn document disappears
  - design abstention as a product behaviour, and require citations that open the source
terms:
  - ingestion | the step of reading documents into a system, including scanning, parsing and splitting them; whatever is lost here is lost for good | 
  - parser | the program that turns a file such as a PDF into text and structure; its mistakes are invisible to everything that comes after it | parsers
  - access control | rules that decide which user may see which document or chunk, enforced in the application and data layer, not asked of the model | access label, access labels
  - abstention | a system deciding not to answer, and saying so, when it does not have the evidence; it is a product behaviour to be designed, not a sentence in an instruction | abstain
---

The review took place in the large room on the second floor and was attended by eleven people and a plate of biscuits. Lakshmi Iyer had called it. The chatbot, which had been Imran Qureshi's project for two years, was about to become something else. Until then it had served one lender's products in one way. In November Sahaj would begin serving two more lenders, each with its own terms and rates and each demanding a written assurance that its customers' questions would be answered from its own documents and nobody else's. A month earlier Anaya had asked whether the chatbot's search could be called production-ready, and had been told that it could. She had not been told on what basis.

Lakshmi opened with a statement: a prototype works because you chose every document and you are the only user, production takes away both of those comforts, and she wanted to know what was left.

## The case: four questions on one slide

Imran showed one slide with four questions: did we read the document correctly, is this user allowed to see it, did we find the right piece, and can we show where the answer came from? A retrieval system has many things to worry about, and every item belongs under one of these four.

Table: The four questions
| Question | What it checks | Where it was settled in this chapter |
| --- | --- | --- |
| Did we read the document correctly? | The step that reads documents in | The rate card flattened by the parser |
| Is this user allowed to see it? | Who may see which piece | Access control and the withdrawn document |
| Did we find the right piece? | The search | Exact and meaning-based search together, rewriting, abstention |
| Can we show where the answer came from? | The trail from answer to page | Citations that open |

## Did we read it correctly?

The chain has seven links. Documents are read in, split, labelled and turned into maps of meaning. They are searched, what is found is built into a request, and the answer is checked. Each link can be tuned, and so each is a suspect when quality drops and no code has changed.

The first link was the one Imran had trusted least, and he gave the reason in one sentence: anything lost while reading documents in is lost for good. *Ingestion* is the step of reading documents into the system, scanning them, running them through a *parser* that turns a file into text and structure, and splitting them into pieces. Better search cannot bring back a table that the parser flattened or a page it skipped. The mistake is invisible to every later link, because nothing after the parser sees the original.

Imran had done what Anaya had once been told to do and had not enjoyed. He took three of the partner documents and placed the extracted text beside what a person saw. The first two were fine. The third was a rate card in the form of a table with four columns of rates by loan amount and term, and the parser had read it as a single line of numbers.

::: watch Every figure survived and no relationship did
Ask this system what the rate is for a four-year loan of two lakh rupees and it would pick a number from somewhere in the line and state it with perfect confidence. Nothing would have caught it, because every part would have reported success. Imran fixed the parser so that it read tables as tables, and added a check that compared the number of figures in the output with the number on the page. His lesson for every project was that when retrieval is poor, one should ask about the quality of the parser before blaming the maps of meaning.
:::

## Is this user allowed to see it?

This was Lakshmi's question. A correct answer from a document that the user must not read, she said, is still a security failure.

Imran showed her the change. Every piece of text now carried a label with an identity that did not change: a document, a version, a section, a language, a date from which it was in force and, new that autumn, who was allowed to see it: partner one, partner two, all customers or staff only. This is *access control*. The point he made twice was where it lives. It cannot be a sentence in an instruction, such as "only answer from this lender's documents", because an instruction is a request and the model may not honour it. It has to be a filter in the application, applied before any search, so that a customer of the first lender cannot reach a piece of the second lender's text even by asking for it by name.

He had a test. A customer of partner one asked, first politely and then rudely, for the interest rate that partner two charged, and the chatbot said it could not help. He then switched the test user to a role with no access at all and asked about partner one's rate, and the chatbot said nothing was available. Nobody doubted the second result. The first was less important than it looked, and what mattered was that the piece had never been within reach.

### Freshness

Lakshmi's next item was freshness. At ten that morning, she said, partner two had withdrawn a document, and she asked what happened. The document is removed from the source folder, said Imran. By when? The nightly rebuild takes it out at one in the morning. So from ten until one it is still quoted. "That is a decision," said Lakshmi. "You'd better make it on purpose."

Table: The withdrawn document, before and after
| | Before | After |
| --- | --- | --- |
| How removal works | The nightly rebuild removes it at one in the morning | Removing the source deletes the document's pieces from the store at once. The nightly rebuild is a check and not the mechanism |
| The window | About fifteen hours | About a minute |
| Recovery | None | Every rebuild keeps a snapshot, so a bad one can be reversed in minutes |

## Did we find the right piece?

The third question had the most techniques, and Imran dealt with it quickly because the room had met most of them. Keyword search remains valuable for identifiers, names, codes and exact phrases, and a team that replaces it because meaning-based search is fashionable has thrown away a strong signal. Meaning-based search helps when the wording differs, and running both had proved best. A cutting rule is a hypothesis about what unit of evidence users will need, so it should be tested on a question whose answer crosses a boundary. Reranking improves the order of results at a cost in time and money, and the rule for it was to fetch ten candidates, rescore them, and check whether recall at ten and precision at the top three rose by enough to justify the extra. A step should never be added because a reference diagram has it. It should be proved.

Two ideas were newer to Anaya. The first is that the question can be rewritten before the search, from something ambiguous into something explicit, provided the rewriting does not change what the customer meant. Imran showed an example in which it did: a customer asked about a "late charge" and the question was rewritten as "late fee", which was a different thing in the partner's terms.

The second was *abstention*, which he had left until last. A system practises abstention when it decides not to answer, and says so, because it lacks the evidence. Imran described it as a product behaviour and not a sentence in an instruction. What does the chatbot do when the answer is not in the documents? Does it ask what the customer meant, or say that it does not know and offer a person? He had designed it with Farah to do the second, in three languages. The rule for giving up was a number, and it had been tested with questions that had no answer, which the earlier searches had never been able to do.

## Can we show where it came from?

The last question was the shortest. Every answer carried the identity of the piece it was written from, with its document, version and section, and the link opened the page. If the page did not support the answer, a person checking it could see so in a moment. A citation that names a document but does not open it is worse than nothing, because it looks checkable and is not.

## And the guard

The review ended at ten past six and the biscuits had gone. Lakshmi said that she would write her report on Friday, that it would not be hostile, and that two things in it would require work. Walking back to her desk, Anaya asked whether the four questions applied to what she was building, and the answer came without effort.

Table: The four questions applied to the guard
| Question | In the guard |
| --- | --- |
| Did we read it correctly? | The scanned cards and their look-alike characters |
| Is this user allowed to see it? | The agents and the restore button: who may see an original, for how long, and who is told |
| Did we find the right piece? | The finder and the judge, and the answer key that measured them |
| Can we show where the answer came from? | The record of every decision, with the code that made it |

They were the same four questions, and she suspected they would recur for the rest of her working life, in a different order and wearing different clothes.

## Summary

A prototype works because the builder chose every document and is the only user. Production removes both, and four questions cover almost every concern.

- Were the documents read correctly? Anything lost at ingestion, such as a table flattened by the parser, is lost for good and invisible to everything after it.
- May this user see what was found? This must be enforced by labels and filters in the application, not by asking the model, and it includes deciding on purpose how quickly a withdrawn document disappears.
- Was the right piece found? Combine exact and meaning-based search, test the cutting rule, prove the value of any re-ordering step, and design what the system does when there is no answer.
- Can the answer be traced to the exact page it came from?

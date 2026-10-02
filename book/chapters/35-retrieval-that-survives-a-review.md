---
title: Retrieval That Survives a Review
summary: A prototype works because you chose every document and you are the only user. Production removes both comforts. Four questions that fit every retrieval system are put to the chatbot in a room full of people who would like it to fail.
course: ch11r
terms:
  - ingestion | the step of reading documents into a system, including scanning, parsing and splitting them; whatever is lost here is lost for good | 
  - parser | the program that turns a file such as a PDF into text and structure; its mistakes are invisible to everything that comes after it | parsers
  - access control | rules that decide which user may see which document or chunk, enforced in the application and data layer, not asked of the model | access label, access labels
  - abstention | a system deciding not to answer, and saying so, when it does not have the evidence; it is a product behaviour to be designed, not a sentence in an instruction | abstain
---

The review took place in the large room on the second floor, the one with the table that nobody could ever quite fit around, and it was attended by eleven people and a plate of biscuits.

Lakshmi had called it. The chatbot, which had been a project of Imran's for two years, was about to become something else. Until now it had served one lender's products in one way. In November, Sahaj would start serving two more, each with its own terms and its own rates, and each insisting on a written assurance that its customers' questions would be answered from its own documents and nobody else's. Anaya had asked, a month earlier, whether the chatbot's search could be called production-ready. She had been told that it could. She had not been told on what basis.

"A prototype works," said Lakshmi, opening, "because you chose every document and you are the only user. Production takes away both of those comforts. I would like to know what is left."

Imran put up one slide. It had four questions on it, and Anaya, who had seen the four written on his whiteboard in the summer, found herself grinning.

*Did we read the document correctly? Is this user allowed to see it? Did we find the right piece? Can we show where the answer came from?*

"There's a long list of things you can worry about in a retrieval system," he said. "I can't get through them all in an hour. But every item belongs under one of these four. I'll take them in order."

## Did we read it correctly?

The chain has seven links. Documents are read in. They are split. They are given labels. They are turned into maps of meaning. They are searched. What was found is built into a request. And the answer is checked. Each link can be tuned, which also means that each is a suspect when quality drops and no code has changed.

The first link was the one Imran had trusted least, for a reason he put on the next slide in a single sentence. *Anything lost while reading documents in is lost for good.*

*Ingestion* is the step of reading documents into the system: scanning them, running them through a *parser*, which turns a file into text and structure, and splitting them into pieces. Better search cannot bring back a table that the parser flattened or a page it skipped. The mistake is invisible to every later link, because nothing after the parser sees the original.

He had done what Anaya had once been told to do and had not enjoyed. He took three of the partner documents and put the extracted text side by side with what a person saw. The first and second were fine. The third was a rate card, and it was a table: four columns of rates by loan amount and term. The parser had read it as a single line of numbers.

"Every figure survived," he said, and the room went still. "None of the relationships did. Ask this system what the rate is for a four-year loan of two lakh, and it would pick a number from somewhere in that line and say it with perfect confidence."

"And nothing would have caught it," said Anaya.

"Nothing, because every part would have reported success." He had fixed it: the parser now read tables as tables, and a check compared the number of figures in the output with the number on the page. But the lesson he put on the slide was one for every project. When retrieval is poor, ask for the quality of the parser before blaming the maps of meaning.

## Is this user allowed to see it?

This was Lakshmi's question, and she had been waiting for it.

"A correct answer from a document the user must not read," she said, "is still a security failure. Show me how you stop it."

Imran showed her. Every piece of text now carried a label with an identity that did not change: a document, a version, a section, a language, a date from which it was in force, and, new that autumn, who was allowed to see it. *Partner one. Partner two. All customers. Staff only.* This was *access control*, and the point he made twice was where it lived. It could not be a sentence in an instruction, *only answer from this lender's documents*, because an instruction is a request and the model may not honour it. It had to be a filter in the application, applied before any search, so that a customer from the first lender could not reach a piece of the second lender's text even if they asked for it by name.

"Can you prove it?"

He had a test. A customer of partner one asked, politely and then rudely, for the interest rate that partner two charged. The chatbot said it could not help with that. He then switched the test user to a role with no access and asked about partner one's rate. It said nothing was available. Nobody in the room doubted the second result. The first, he pointed out, was less important than it looked. What mattered was that the chunk had never been in reach.

The next item on Lakshmi's list she called *freshness*. "At ten o'clock this morning, partner two withdrew a document. Tell me what happens."

Imran said: "At ten, the document is removed from the source folder. Then…"

"By when?"

He took longer than she expected. "The nightly rebuild takes it out at one in the morning."

"So from ten until one it is still quoted."

"Yes."

"That is a decision," said Lakshmi. "You'd better make it on purpose."

They made it on purpose. A removal would delete the document's pieces from the store the moment the source changed, and the nightly rebuild would be a check, not the mechanism. The window shrank from fifteen hours to about a minute. They also made it possible to restore: every rebuild kept a snapshot, so that a bad one could be reversed in minutes.

## Did we find the right piece?

The third question was the one with the most techniques, and Imran dealt with it quickly because the room had met most of them.

Keyword search, he said, remained valuable. Identifiers, names, codes and exact phrases are where it wins, and a team that replaces it because meaning-based search is fashionable has thrown away a strong signal. Meaning-based search helps when wording differs. Running both is what the earlier work had shown to be best. A cutting rule is a hypothesis about what unit of evidence users will need, so test it on a question whose answer crosses a boundary. And reranking improves the order of the results, at a cost in time and money. His slide on it was short: *fetch ten candidates, rescore them, and check whether recall at ten and precision at the top three rose by enough to justify the extra. Never add a step because a reference diagram has it. Prove it.*

Two ideas were newer to Anaya. The first was that the question itself can be rewritten before the search, from something ambiguous into something explicit, provided the rewriting does not change what the customer meant. He showed her an example in which it did: a customer asking about a "late charge" had it rewritten as "late fee", which was a different thing in the partner's terms.

The second was *abstention*, which he had left until last. It means a system deciding not to answer, and saying so, when it does not have the evidence. "Abstention is a product behaviour, not a sentence in an instruction," he said. "What does the chatbot do when the answer is not in the documents? Does it ask what you meant? Does it say it doesn't know, and offer a person?" He had designed it, with Farah, to do the second, in three languages. The rule for when to give up was a number, and it had been tested with questions that had no answer, which was the thing the earlier searches had never been able to do.

## Can we show where it came from?

The last question was the shortest. Every answer carried the identity of the piece it was written from, its document, version and section, and the link opened the page. If the page did not support the answer, a person checking it could see so in a moment. A citation that names a document but does not open it is worse than nothing, because it looks checkable and is not.

## And the guard

The review ended at ten past six. The biscuits had gone. Lakshmi said she would write her report on Friday and that it would not be hostile, and that two things in it would require work, and that she would say which two. Anaya found, to her mild surprise, that she was not nervous.

Walking back to her desk she asked herself whether the four questions applied to what she was building, and the answer arrived without any effort.

*Did we read it correctly?* The scanned cards, with their lookalike characters. *Is this user allowed to see it?* The agents and the restore button; who may see an original, for how long, and who is told. *Did we find the right piece?* The finder and the judge, and the answer key that measured them. *Can we show where the answer came from?* The record of every decision, with the code that made it.

It was the same four questions. They would turn up, she suspected, for the rest of her working life, in a different order and wearing different clothes.

## What to carry forward

A prototype works because you chose every document and you are the only user; production removes both, and four questions cover almost every concern. First, whether the documents were read correctly, because anything lost at ingestion, such as a table flattened by the parser, is lost for good and invisible to everything after it. Second, whether this user may see what was found, which has to be enforced by labels and filters in the application, not by asking the model, and which includes deciding on purpose how quickly a withdrawn document disappears. Third, whether the right piece was found, by combining exact and meaning-based search, testing the cutting rule, proving the value of any re-ordering step, and designing what the system does when there is no answer. And fourth, whether the answer can be traced to the exact page it came from.

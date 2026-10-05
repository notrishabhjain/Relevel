---
title: What You May Send
summary: Everything so far assumed that the text could be sent to a vendor. Three documents and three questions, asked in a fixed order, settle whether it can, and a vendor's terms of service turn out to say things nobody had read. The chapter introduces retention and data residency.
course: ch165
goals:
  - apply three questions, in order, to decide whether text may be sent to a vendor
  - read a vendor's real terms for retention, use of data to improve the service, and data residency
  - write a rule that new staff can follow, with a route for uncertain cases
  - explain why the choice of what goes into a retrieval store is a decision about every later question
terms:
  - retention | how long a provider keeps what you send it, which may be longer than the time it takes to answer | 
  - data residency | the country or region where a provider stores and processes what you send it | residency
---

On the third Monday of July Lakshmi Iyer placed three documents on her desk, squared off at the edge, and told Anaya that one of them she would send to anyone, one she would never send, and one she did not know about. She asked Anaya to say which was which, and why. Anaya understood that this was a test, and that she was not sure of the subject.

The first document was the Late Payment and Refund Policy, the twelve pages that had spent a day on the glass-room floor in pieces. It was published on Sahaj's website and anyone could read it. The second was a spreadsheet of loan applications with names, addresses, identity numbers and monthly incomes in columns. The third was a collection of fifty support chats, exported for analysis and cleaned by hand, or so the cover note said.

## The case: three documents

Anaya said the first was fine and the second was not. Lakshmi asked why. "It's full of people," Anaya said. About the third she was unsure. She had measured what hand-cleaning misses, and she did not trust the cover note. Lakshmi agreed, and said that the third was the useful one. This chapter does it properly.

## Three questions, in order

Every earlier chapter assumed that text could be sent to the model, which in practice meant the outside company that wrote the answers, or the one that made the maps of meaning, or the one that stored the logs. For most features, Lakshmi said, that assumption is either perfectly fine or a serious problem, and which of the two is not a technical matter. It comes down to three questions. She was not giving a legal lecture, and she did not intend to teach Anaya the law. She wanted Anaya to know which questions to ask and who owned the answer to each.

Table: Three questions before sending text to a vendor
| Order | Question | Why it matters | Who owns the answer |
| --- | --- | --- | --- |
| 1 | Does it identify a person? | Names, contact details, case numbers, anything that points to someone. If so, rules apply wherever you are, and they are not optional | Compliance |
| 2 | Whose confidential information is it? | If it is yours, sending it is a business decision. If it belongs to a customer, supplier or partner, it is a question of contract, and the answer may be no however careful the vendor is. Sahaj's agreements with the banks it lent through said things about where certain data could go, and neither Anaya nor Imran had read them | The business, with legal advice |
| 3 | What does the vendor do with it? | How long they keep it, whether they learn from it and in which country it is stored | The product manager, who adds the most value here, because engineers tend to assume it is settled and vendors describe it in reassuring language |

Asking in that order settles most cases with the least effort. The first question disposed of the spreadsheet in one line.

## The ten-minute reading

Lakshmi asked Anaya to do something that would take ten minutes and that nobody at Sahaj had, as far as she knew, done: read the outside company's real terms, and not the website. Anaya found them that afternoon. They were long and unremarkable. In a page and a half, after the section on acceptable use, were three things that she wrote down exactly.

Table: Three lines in the vendor's terms
| What the terms said | What it means |
| --- | --- |
| "Requests may be retained for up to thirty days for safety monitoring." | This is *retention*: how long a provider keeps what is sent to it, which can be much longer than it takes to answer |
| "Requests may be used to improve the service unless the customer has agreed otherwise in writing." | Sahaj had not agreed otherwise. Nobody had been asked |
| "Requests are processed in data centres in the following regions", followed by a list, none of which was India | This is *data residency*: the country where what is sent is stored and handled |

All three could change with the plan purchased, and Anaya suspected that Sahaj had bought the cheapest. She took the lines to Lakshmi, who read them standing up. "This is what the customer's Aadhaar number has been subject to since March," she said. Anaya said she knew. Lakshmi said it was not her fault. Anaya said that she should still have read it in March. Lakshmi agreed, and added that Anaya would be the first person at the company who had.

## The third document

The three documents were then reconsidered. The policy passed all three questions: no person, public, nothing confidential. The spreadsheet failed the first.

The chats were the interesting case. They failed no question outright and did not pass. They had been cleaned by hand, and Anaya knew how well hand cleaning worked, which was some of it, some of the time. The honest answer was that the chats might contain people, might contain a bank's confidential information, and would go to a vendor with the terms on the page. They were not safe to send, or at least not yet.

Lakshmi asked for the rule that a new joiner would follow without asking. Anaya had considered the shape on the way. A rule that people can follow settles the common cases in so many words, names a category that is never sent, and gives a specific route for uncertain ones. A rule that says "use your discretion" fails, because a person who is unsure and in a hurry reads it as permission.

::: example The rule Anaya wrote
You may send: Sahaj's published help pages and policies.
Never send: identity numbers, bank details, or anything from a loan application.
If it came from a customer: it goes through the guard first.
If you are not sure: ask Lakshmi, in the data channel, and wait for the answer.
:::

Lakshmi read the four lines twice and changed one word. She said it was a rule she would put on the wall.

## What retrieval sends

Imran noticed one more thing later in the week, which seemed afterwards to be obvious. The chatbot's store of documents had been chosen with care, and only the policies and help pages went in. But the chatbot was built to find the few pieces relevant to a question and to send them with every request to the outside company. Whatever was in the store could be found, and whatever was found was sent. "Our decision about the store," said Imran, "is a decision about every question that will ever be asked."

Anaya had not understood this from the diagrams. A choice made once, when someone dragged a folder into the system, was a choice repeated hundreds of thousands of times at the speed of the chat. If the store held something that should not travel, it would travel. The labels on each piece, which were the work of June, offered a way to stop it, but the choice of what to put in at all was still the first one and belonged to a person.

::: key A rule that depends on memory is a wish
The guard enforces the written rule. The rule says never to send an identity number, and the guard is what stops anyone from doing so by accident. Lakshmi said that a rule that depends on people remembering it is only a wish.
:::

Anaya added a line to the specification about where the careful judge would run, with the answer the rule had already given. If the sentence it had to read might contain an identity number, it could not be read by anyone outside the building, unless the terms said otherwise in writing, which at present they did not. It would have to be a model that Sahaj ran itself. There were such models, she understood, and later chapters would show how that worked.

## Summary

Whether a piece of text may be sent to a vendor is settled by three questions, asked in order: does it identify a person, whose confidential information is it, and what does the vendor do with it.

- The third is where a product manager adds the most. The answer is in the vendor's real terms: how long they keep what is sent (retention), whether they learn from it, and where it is stored (data residency). All can change with the plan purchased.
- A rule people can follow settles the common cases plainly, names what is never sent and gives a specific route for doubtful ones.
- Retrieval sends whatever it finds, so the decision about what goes into a store is a decision about every question asked of it.
- A rule that depends on people remembering it is only a wish. A tool that enforces it is a control.

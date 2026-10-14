---
title: What You May Send
summary: Up to now we have assumed that the text could be sent to an outside company. Three questions, asked in a fixed order, tell you whether it can. Then a vendor's terms of service turn out to say things nobody had read. This chapter introduces retention and data residency.
course: ch165
goals:
  - use three questions, in order, to decide whether text may be sent to a vendor
  - read a vendor's real terms for retention, use of your data to improve the service, and data residency
  - write a rule that new staff can follow, with a clear route for uncertain cases
  - explain why choosing what goes into a retrieval store is a decision about every later question
terms:
  - retention | how long a provider keeps what you send it, which can be much longer than the time it takes to answer | 
  - data residency | the country or region where a provider stores and handles what you send it | residency
---

On the third Monday of July, Lakshmi Iyer put three documents on her desk and lined up their edges. One of them, she told Anaya, she would send to anyone. One she would never send. About the third she did not know. Then she asked Anaya to say which was which, and why. Anaya could tell this was a test, and she wasn’t sure of the subject.

The first document was the Late Payment and Refund Policy. It was the twelve-page policy that had spent a day on the glass-room floor in pieces. It was published on Sahaj’s website, so anyone could read it. The second was a spreadsheet of loan applications, with names, addresses, identity numbers and monthly incomes in its columns. The third was a set of fifty support chats. They had been exported for analysis and cleaned by hand, or so the cover note said.

## The case: three documents

Anaya said the first was fine and the second was not. Lakshmi asked why. “It’s full of people,” Anaya said.

About the third she was unsure. She had already measured what hand-cleaning misses, so she didn’t trust the cover note. Lakshmi agreed. She also said the third was the useful one, because it was the hard case. This chapter works through it properly.

## Three questions, in order

Every chapter so far has assumed that text could be sent to the model. In practice that means an outside company. It might be the one that wrote the answers, or the one that made the maps of meaning, or the one that stored the logs.

For most features, Lakshmi said, that assumption is either perfectly fine or a serious problem. Which of the two it is does not depend on the technology. It comes down to three questions. She wasn’t giving a legal lecture, and she didn’t plan to teach Anaya the law. She wanted Anaya to know which questions to ask, and who owned the answer to each.

Read the table below by looking at the last column first. It shows that none of the three answers belongs to the engineers.

Table: Three questions before sending text to a vendor
| Order | Question | Why it matters | Who owns the answer |
| --- | --- | --- | --- |
| 1 | Does it identify a person? | Names, contact details, case numbers, anything that points to someone. If so, rules apply wherever you are, and they are not optional | Compliance |
| 2 | Whose confidential information is it? | If it is yours, sending it is a business decision. If it belongs to a customer, supplier or partner, it is a question of contract, and the answer may be no however careful the vendor is. Sahaj's agreements with the banks it lent through said things about where certain data could go, and neither Anaya nor Imran had read them | The business, with legal advice |
| 3 | What does the vendor do with it? | How long they keep it, whether they learn from it and in which country it is stored | The product manager, who adds the most value here, because engineers tend to assume it is settled and vendors describe it in reassuring language |

The order matters. Asked in this order, the questions settle most cases with the least effort. The first question dealt with the spreadsheet in one line.

## The ten-minute reading

Next Lakshmi gave Anaya a job that would take ten minutes. As far as she knew, nobody at Sahaj had done it. The job was to read the outside company’s real terms, not the friendly page on its website.

Anaya found them that afternoon. They were long and unremarkable. But in a page and a half, just after the section on acceptable use, were three things. She wrote each one down exactly as it appeared.

Two of the three have names. The first is **retention**, which is how long a provider keeps what you send it. The third is **data residency**, which is the country where what you send is stored and handled. The second line has no special name, but it is the one that surprised Anaya most.

Table: Three lines in the vendor's terms
| What the terms said | What it means |
| --- | --- |
| "Requests may be retained for up to thirty days for safety monitoring." | This is *retention*: how long a provider keeps what is sent to it, which can be much longer than it takes to answer |
| "Requests may be used to improve the service unless the customer has agreed otherwise in writing." | Sahaj had not agreed otherwise. Nobody had been asked |
| "Requests are processed in data centres in the following regions", followed by a list, none of which was India | This is *data residency*: the country where what is sent is stored and handled |

All three could change with the plan you buy. Anaya suspected that Sahaj had bought the cheapest one.

She took the lines to Lakshmi, who read them standing up. “This is what the customer’s Aadhaar number has been subject to since March,” she said. Anaya said she knew. Lakshmi said it wasn’t her fault. Anaya said she should still have read it in March. Lakshmi agreed, and added that Anaya would now be the first person at the company who had.

## The third document

With the terms in hand, they looked at the three documents again. The policy passed all three questions. It named no person, it was public, and nothing in it was confidential. The spreadsheet failed the first question.

The chats were the interesting case. They didn’t clearly fail any question, and they didn’t clearly pass. They had been cleaned by hand, and Anaya knew how well hand cleaning worked. It worked on some of the text, some of the time.

So the honest answer was this. The chats might contain people. They might contain a bank’s confidential information. And they would go to a vendor whose terms were now on the page in front of them. They were not safe to send, or at least not yet.

Then Lakshmi asked for a rule that a new joiner could follow without asking anyone. Anaya had been thinking about its shape on the way in. A rule people can follow does three things. It settles the common cases in plain words. It names a category that is never sent. And it gives a specific route for the uncertain cases. A rule that says “use your discretion” fails. A person who is unsure and in a hurry reads that as permission.

::: example The rule Anaya wrote
You may send: Sahaj's published help pages and policies.
Never send: identity numbers, bank details, or anything from a loan application.
If it came from a customer: it goes through the guard first.
If you are not sure: ask Lakshmi, in the data channel, and wait for the answer.
:::

Lakshmi read the four lines twice and changed one word. She said it was a rule she would put on the wall.

## What retrieval sends

Later in the week Imran noticed one more thing. Afterwards it seemed obvious.

The chatbot’s store of documents had been chosen with care, and only the policies and help pages went in. But remember how the chatbot works. It finds the few pieces that are relevant to a question, and it sends them to the outside company with every request. Whatever is in the store can be found, and whatever is found is sent. “Our decision about the store,” said Imran, “is a decision about every question that will ever be asked.”

Anaya hadn’t understood this from the diagrams. A choice made once, when someone dragged a folder into the system, was being repeated hundreds of thousands of times, at the speed of the chat. If the store held something that should not travel, it would travel. The labels on each piece, which were the work of June, offered a way to stop it. But the first choice was still what to put in at all, and that choice belonged to a person.

::: key A rule that depends on memory is a wish
The guard enforces the written rule. The rule says never to send an identity number, and the guard is what stops anyone from doing so by accident. Lakshmi said that a rule that depends on people remembering it is only a wish.
:::

Anaya then added a line to the specification about where the careful judge would run, using the answer the rule had already given. The judge reads sentences that might contain an identity number. So it could not be read by anyone outside the building, unless the terms said otherwise in writing, and at present they did not. That meant it would have to be a model that Sahaj ran itself. There were such models, she understood, and later chapters would show how that worked.

## Summary

Whether a piece of text may be sent to a vendor comes down to three questions, asked in order. Does it identify a person? Whose confidential information is it? What does the vendor do with it?

- The third question is where a product manager adds the most. The answer is in the vendor’s real terms: how long they keep what you send (retention), whether they learn from it, and where it is stored (data residency). All three can change with the plan you buy.
- A rule people can follow settles the common cases plainly, names what is never sent, and gives a specific route for doubtful ones.
- Retrieval sends whatever it finds, so the decision about what goes into a store is a decision about every question asked of it.
- A rule that depends on people remembering it is only a wish. A tool that enforces it is a control.

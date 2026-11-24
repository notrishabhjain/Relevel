---
title: What You May Send
summary: Until now, the team has assumed the text could go to an outside company. Three questions, asked in a fixed order, tell you if it can. Then a vendor's terms of service say things nobody had read. This chapter teaches retention and data residency.
course: ch165
goals:
  - use three questions, in order, to decide if text may go to a vendor
  - read a vendor's real terms on retention, on use of your data to improve the service, and on data residency
  - write a rule a new joiner can follow, with a clear route for doubtful cases
  - see why choosing what goes into a retrieval store is a decision about every later question
terms:
  - retention | like a shopkeeper who keeps your bill copy for a month after you leave; it is how long a provider keeps what you send, often far longer than the time it takes to answer | 
  - data residency | like the address of the godown where your goods sit; it is the country or region where a provider stores and handles what you send | residency
---

On the third Monday of July, Lakshmi Iyer put three documents on her desk. She lined up their edges. One, she told Anaya, she would send to anyone. One she would never send. About the third she did not know. Then she asked Anaya to say which was which, and why. Anaya could tell it was a test. She was not sure what it was testing.

The first document was the Late Payment and Refund Policy. It was the twelve-page policy that had spent a day on the glass-room floor in pieces. Sahaj had published it on its website. Anyone could read it.

The second was a spreadsheet of loan applications. Its columns held names, addresses, identity numbers and monthly incomes. The third was a set of fifty support chats. They had been exported (saved out of the system as a file) for analysis. They had been cleaned by hand, or so the cover note said.

## The case: three documents

Anaya said the first was fine and the second was not. Lakshmi asked why. "It is full of people," Anaya said.

About the third she was unsure. She had already measured what hand cleaning misses. So she did not trust the cover note. Lakshmi agreed. She also said the third was the useful one, because it was the hard case. This chapter works through it properly.

## Three questions, in order

Think of a post office. Before a parcel goes out, the clerk asks what is inside, whose it is, and where it is going. Lakshmi had three questions like that.

Every chapter so far assumed the text could be sent to the model. In real life, that means an outside company. It may be the one that wrote the answers. It may be the one that made the maps of meaning. It may be the one that stored the logs (the written record of what happened).

For most features, Lakshmi said, that guess is either perfectly fine or a serious problem. The technology does not decide which. Three questions decide it. She was not giving a lecture on law. She did not plan to teach Anaya the law. She wanted Anaya to know which questions to ask, and who owned the answer to each.

Read the table by looking at the last column first. It shows that none of the three answers belongs to the engineers.

Table: Three questions before sending text to a vendor
| Order | Question | Why it matters | Who owns the answer |
| --- | --- | --- | --- |
| 1 | Does it identify a person? | Names, contact details, case numbers, anything that points to someone. If so, rules apply wherever you are, and they are not optional | Compliance |
| 2 | Whose confidential information is it? | If it is yours, sending it is a business decision. If it belongs to a customer, supplier or partner, it is a matter of contract. The answer may be no, however careful the vendor is. Sahaj's agreements with the banks it lent through said things about where certain data could go. Neither Anaya nor Imran had read them | The business, with legal advice |
| 3 | What does the vendor do with it? | How long they keep it, whether they learn from it, and which country it is stored in | The product manager, who adds the most value here. Engineers tend to assume it is settled. Vendors describe it in comforting words |

The order matters. Asked in this order, the questions settle most cases with the least work. The first question dealt with the spreadsheet in one line.

## The ten-minute reading

Next, Lakshmi gave Anaya a job of ten minutes. As far as she knew, nobody at Sahaj had done it. The job was to read the outside company's real terms. Not the friendly page on its website. The real terms are the long fine print, like the small letters on a loan form.

Anaya found them that afternoon. They were long and dull. But in a page and a half, just after the part on acceptable use, were three things. She wrote each one down exactly as it appeared.

Two of the three have names. The first is **retention**. Think of a shopkeeper who keeps a copy of your bill for a month after you leave. Retention is how long a provider keeps what you send it. The third is **data residency**. Think of the address of the godown where your goods sit. Data residency is the country where what you send is stored and handled. The second line has no special name. But it surprised Anaya most.

Table: Three lines in the vendor's terms
| What the terms said | What it means |
| --- | --- |
| "Requests may be retained for up to thirty days for safety monitoring." | This is *retention*: how long a provider keeps what is sent to it, which can be much longer than the time it takes to answer |
| "Requests may be used to improve the service unless the customer has agreed otherwise in writing." | Sahaj had not agreed otherwise. Nobody had been asked |
| "Requests are processed in data centres in the following regions", followed by a list, none of which was India | This is *data residency*: the country where what is sent is stored and handled |

All three could change with the plan you buy. Anaya guessed that Sahaj had bought the cheapest one.

She took the lines to Lakshmi, who read them standing up. "This is what the customer's Aadhaar number has been under since March," she said. Anaya said she knew. Lakshmi said it was not her fault. Anaya said she should still have read it in March. Lakshmi agreed. Then she added that Anaya was now the first person at the company who had.

## The third document

They had the terms in hand. So they looked at the three documents again. The policy passed all three questions. It named no person. It was public. Nothing in it was confidential. The spreadsheet failed the first question.

The chats were the interesting case. They did not clearly fail any question. They did not clearly pass. They had been cleaned by hand, and Anaya knew how well hand cleaning worked. It caught some of the text, some of the time.

So the honest answer was this. The chats might hold people's details. They might hold a bank's confidential information. And they would go to a vendor whose terms now lay on the page in front of them. They were not safe to send. At least, not yet.

Then Lakshmi asked for a rule that a new joiner could follow without asking anyone. Anaya had thought about its shape on the way in. Think of a signboard at a railway crossing. It must be clear at a glance. A rule people can follow does three things. It settles the common cases in plain words.

It names a category that is never sent. And it gives a clear route for the doubtful cases. A rule that says "use your judgement" fails. A person who is unsure and in a hurry reads that as permission.

::: example The rule Anaya wrote
You may send: Sahaj's published help pages and policies.
Never send: identity numbers, bank details, or anything from a loan application.
If it came from a customer: it goes through the guard first.
If you are not sure: ask Lakshmi, in the data channel, and wait for the answer.
:::

Lakshmi read the four lines twice. She changed one word. She said it was a rule she would put on the wall.

## What retrieval sends

Later that week, Imran noticed one more thing. Afterwards it looked obvious.

Think of an open-book exam. Whatever is in the book can be copied onto the answer sheet. The chatbot's store of documents had been chosen with care. Only the policies and help pages went in. But remember how the chatbot works. It finds the few pieces that are relevant to a question. It sends them to the outside company with every request.

Whatever is in the store can be found. Whatever is found is sent. "Our decision about the store," said Imran, "is a decision about every question that will ever be asked."

Anaya had not understood this from the diagrams. A choice was made once, when someone dragged a folder into the system. Now it was repeated hundreds of thousands of times, at the speed of the chat. If the store held something that should not travel, it would travel.

The labels on each piece, which were June's work, offered a way to stop it. But the first choice was still what to put in at all. That choice belonged to a person.

::: key A rule that depends on memory is a wish
The guard enforces the written rule. The rule says never to send an identity number. The guard is what stops anyone from doing it by accident. Lakshmi said a rule that depends on people remembering it is only a wish.
:::

Then Anaya added a line to the specification (the written plan for the tool). It was about where the careful judge would run. The rule had already given the answer. The judge reads sentences that might hold an identity number.

So nobody outside the building could be allowed to read them, unless the terms said otherwise in writing. At present they did not. So the judge would have to be a model that Sahaj ran itself. There were such models, she understood. Later chapters would show how that worked.

## Summary

Whether text may go to a vendor comes down to three questions, asked in order. Does it identify a person? Whose confidential information is it? What does the vendor do with it?

- The third question is where a product manager adds the most. The answer sits in the vendor's real terms. How long do they keep what you send (retention)? Do they learn from it? Where is it stored (data residency)? All three can change with the plan you buy.
- A rule people can follow settles the common cases in plain words. It names what is never sent. It gives a clear route for doubtful cases.
- Retrieval sends whatever it finds. So the choice of what goes into a store is a choice about every question asked of it.
- A rule that depends on people remembering it is only a wish. A tool that enforces it is a control.

Next, Lakshmi opens a long August afternoon with one rule: what is not written down did not happen. She asks Anaya for the paper behind the guard.

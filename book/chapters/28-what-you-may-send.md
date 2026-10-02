---
title: What You May Send
summary: Everything so far assumed the text could be sent. Lakshmi puts three documents on a table, asks three questions in a fixed order, and a vendor's terms of service turn out to say things nobody had read.
course: ch165
terms:
  - retention | how long a provider keeps what you send it, which may be longer than the time it takes to answer | 
  - data residency | the country or region where a provider stores and processes what you send it | residency
---

Lakshmi had three documents on her desk, squared off with the edge, and Anaya understood at once that this was a test and that she was not yet sure of the subject.

"One of these," said Lakshmi, "I would send to anyone. One I would never send. One I do not know about. I would like you to tell me which is which, and why."

It was the third Monday in July. The glass of water was where it always was. Anaya turned the documents over one at a time.

The first was the *Late Payment and Refund Policy*, twelve pages that had spent a day on the floor of the glass room in pieces. It was published on Sahaj's own website. Anyone could read it.

The second was a spreadsheet of loan applications, with names, addresses, identity numbers and monthly incomes in neat columns.

The third was a collection of fifty support chats, exported for analysis, which had been cleaned by hand. Or so the cover note said.

"The first is fine," said Anaya. "The second is not. The third I'm not sure about."

"Why is the second not fine?"

"It's full of people."

"Good. And the third?"

"The cover note says it was cleaned. I have counted what gets missed when we clean by hand." She hesitated. "I don't trust it."

"Neither do I," said Lakshmi. "That is the useful one. Let us do it properly."

## Three questions, in order

Every chapter so far had assumed that the text could be sent to the model: to the outside company that wrote the answers, or the one that made the maps of meaning, or the one that stored the logs. For most features, said Lakshmi, that assumption is either perfectly fine or a serious problem, and which of the two is not a technical matter. It is a matter of three questions.

She said it was not a legal lecture. She was not going to teach Anaya the law. She only wanted her to know which three questions to ask, and who owned the answer to each.

The first question: *Does it identify a person?* Names, contact details, case numbers, anything that points to someone. If so, rules apply, wherever you are, and they are not optional. That settled the spreadsheet in one line.

The second: *Whose confidential information is it?* If it is yours, sending it is a business decision, and you can make it. If it belongs to someone else, a customer, a supplier, a partner, it is a question of contract, and the answer may be no however careful the vendor is. Sahaj's agreements with the banks it lent through, for example, said things about where certain data could go, and neither Anaya nor Imran had read them.

The third: *What does the vendor do with it?* How long do they keep it, do they learn from it, and in which country is it stored? She said the product manager adds the most value on the third question, because engineers tend to assume it is settled, and vendors describe it in reassuring language.

"Ask them in that order," said Lakshmi. "It settles most cases with the least effort."

## The ten-minute reading

She asked Anaya to do something that would take ten minutes, and that nobody at Sahaj, so far as she knew, had done.

"Read the outside company's terms. The real ones. Not the website."

Anaya found them that afternoon. They were long and unremarkable. In a page and a half, after the part about acceptable use, were three things that she wrote down exactly.

*Requests may be retained for up to thirty days for safety monitoring.* That was *retention*: how long a provider keeps what you send it, which can be much longer than it takes to answer you.

*Requests may be used to improve the service unless the customer has agreed otherwise in writing.* Sahaj had not agreed otherwise. Nobody had been asked.

*Requests are processed in data centres in the following regions*, and a list, none of which was India. That was *data residency*: the country where what you send is stored and handled.

She read the lines twice. All three of them could change with the plan you bought, and, she suspected, Sahaj had bought the cheapest. She took them to Lakshmi, and Lakshmi read them standing up, without sitting down.

"This is what the customer's Aadhaar number has been subject to since March," she said.

"I know."

"It isn't your fault."

"No. But I should have read it in March."

"Yes," said Lakshmi, and handed her back the page. "You'll be the first person here who has."

## The third document

They went back to the three documents. The policy passed all three questions at once: no person, public, nothing confidential. The spreadsheet failed the first.

The third, the chats, was the interesting case. It failed no question outright, and it did not pass. It had been cleaned by hand, and she knew how well hand cleaning worked: some of it, some of the time. The honest answer was that the chats might contain people, might contain a bank's confidential information, and would go to a vendor with the terms on the page. It was not safe to send. It was not safe to send *yet*.

"What is the rule?" said Lakshmi. "The one a new joiner would follow, without asking you."

Anaya had thought about it on the way. A rule that people can follow has a particular shape. It settles the common cases in so many words. It names a category that is never sent. And it gives a specific route for the uncertain ones, because a rule that says *use your discretion* fails. A person who is unsure and in a hurry reads that as permission.

She wrote it on a sheet of paper.

*You may send: Sahaj's published help pages and policies.*
*Never send: identity numbers, bank details, or anything from a loan application.*
*If it came from a customer: it goes through the guard first.*
*If you are not sure: ask Lakshmi, in the data channel, and wait for the answer.*

Four lines. Lakshmi read them twice and changed one word.

"That's a rule I'd put on the wall," she said.

## What retrieval sends

There was a last thing, which Imran caught later in the week and which felt, afterwards, like something that should have been obvious.

The chatbot's store of documents had been chosen with care. Only the policies and help pages went in. But it had been built to find the few pieces relevant to a question and send them with every request to the outside company. Whatever was in the store could be found, and whatever was found was sent.

"Our decision about the store," said Imran, "is a decision about every question that will ever be asked."

It was a point she had not understood from the diagrams. A choice made once, when someone dragged a folder into the system, turned out to be a choice repeated hundreds of thousands of times, at the speed of the chat. If the store held something that should not travel, it would travel. The labels on each piece, the work of Monday in June, gave a way to stop it. But the choice about what to put in at all was still the first one, and it belonged to a person.

Anaya looked at the diagram on the wall, with Lakshmi's six red circles still faintly visible on the surface where the board had been wiped.

"The guard enforces this rule," she said slowly. "The rule on the paper says never send an identity number. The guard is what stops anybody from doing it by accident."

"A rule that depends on people remembering it," said Lakshmi, "is only a wish."

She added a line to the specification about where the careful judge would run, and wrote beside it the answer the rule had already given. If the sentence it had to read might contain an identity number, it could not be read by anyone outside the building, unless the terms said otherwise in writing, which at present they did not. It would have to be a model that Sahaj ran itself. There were such models, she understood, and the next chapters would show her how that worked.

## What to carry forward

Whether a piece of text may be sent to a vendor is settled by three questions, asked in this order: does it identify a person, whose confidential information is it, and what does the vendor do with it. The third is where a product manager adds the most, because the answer is in the vendor's real terms, which say how long they keep what you send (retention), whether they learn from it, and where it is stored (data residency), and all of these can change with the plan you buy. A rule people can follow settles the common cases plainly, names what is never sent, and gives a specific route for the doubtful ones. Retrieval sends whatever it finds, so the decision about what goes into a store is a decision about every question asked of it. And a rule that depends on people remembering it is only a wish; a tool that enforces it is a control.

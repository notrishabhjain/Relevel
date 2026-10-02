---
title: Who Else Is Standing Here
summary: A compliance head gives a conditional yes, and a product manager learns to size a market from the bottom up and to take the competition she cannot see as seriously as the competition she can.
course: a4
terms:
  - bottom-up estimate | a size estimate built from customers you can count, multiplied by what each would pay, instead of a slice taken from an industry report | bottom-up
  - TAM | total addressable market: everyone who has the problem, at the price you would charge | total addressable market
  - SAM | serviceable addressable market: the part of the TAM you could actually serve with what you have | serviceable addressable market
  - SOM | serviceable obtainable market: the part of the SAM you could realistically win in about three years | serviceable obtainable market
  - status quo | what people do today, including doing nothing; usually the strongest competitor | 
  - competitor teardown | a side-by-side look at each alternative: who it is for, what it costs, where it is strong and where customers complain | teardown
  - positioning statement | one sentence saying who a product is for and why it is different from the alternatives | positioning
  - opportunity tree | a drawing that starts from the outcome you want, branches into the needs people described in interviews, and ends in possible solutions | opportunity solution tree
---

Lakshmi Iyer's office had a window that looked onto a wall, and a desk with nothing on it but a glass of water and a closed folder. Anaya sat down and felt, absurdly, like a customer.

"Evidence," said Lakshmi.

Anaya gave her the printout, the thirty-seven flags, and the page of interview notes with its numbered lines. She had decided in the corridor not to explain how she felt about any of it. Lakshmi read slowly. She had spent twenty years in a bank before joining Sahaj, and she read the way people read who have been lied to by documents: looking for what had been left out.

"Nine percent," she said. "One week. One chatbot."

"Yes. I said so in the notes."

"I saw." Lakshmi turned a page. "That's the only reason I am still reading." She closed the folder and, for the first time, looked at Anaya properly. "Tell me what you want to do and what you want from me."

Anaya told her. Build a small tool that would notice identity numbers and other personal details in a message and hide them before the message went anywhere else. And then the part she had been afraid of: the cleaned messages would still be passed on to the outside company whose software wrote the chatbot's answers. Was that acceptable?

There was a long pause. The air conditioner clicked.

"I will not stop a tool that makes us hold less," said Lakshmi. "I will stop one that sends more out. If the cleaning happens inside our walls, before anything leaves, I can live with it. If it happens on somebody else's computer, I cannot. Everything else is detail. And Anaya." She tapped the folder. "I want to know how you would know it works."

"I do not know yet."

"Good answer. Come back when you do."

It was a conditional yes. Anaya walked back down the corridor knowing two things she had not known an hour earlier. The tool would have to run on Sahaj's side of the wall, which ruled out several easy designs. And her riskiest assumption had survived, narrowly, with strings attached. She went to find a pen.

## Has someone already done this?

The question she should have asked weeks earlier arrived now, by itself: *what if it already exists?*

She spent an evening looking, and what she found was both reassuring and a little humbling. There was an open tool, free to use, called Rampart, whose job was precisely the one she had in mind: find personal details in a piece of text. It had been built and tested by capable people. It was well documented, and its makers had published, honestly, a list of what it had been tested on and how well it had done. The list was in English and in six European languages, all written in the Latin alphabet.

She read the section on Hindi twice. Its own published results, as she read them, said it found only about fourteen in every hundred personal details in Hindi written in the Devanagari script. She wrote the number down and put a question mark after it. She had a rule about claims, and the rule did not make exceptions for claims that happened to suit her. She would check that figure for herself later. But even as a rumour it was useful, because it showed her where the edge of the tool's map lay.

The people who typed to Sahaj's chatbot did not stay inside that edge. They wrote in English. They wrote in Hindi. And most of them wrote something Sanjay Patil had demonstrated without knowing it: Hindi spelled in English letters, mixed freely with English words, often inside one sentence. A tool built for text in one writing system was going to meet text in three.

## The size of it

"Who would want this?" Anaya wrote at the top of a fresh page. Then, because it would be easy to answer in the loose way that she disliked, she answered it in numbers.

There are two ways to size a market. The first starts with an industry report: "Customer-support software is a ten-billion-dollar market, so if we win one percent…" It is quick and it is nearly useless, because nobody has any idea how they would win that one percent. The second starts from customers you can count and multiplies up. Anaya took the second path, which is called a *bottom-up estimate*, and she kept every assumption on the page where it could be seen and attacked.

She began with the broadest group she could defend: registered lenders and finance apps in India. She had found a public list, which was a fact, and it held roughly nine thousand names. She guessed that a small firm might pay about a lakh and twenty thousand rupees a year for a tool like this, which was an assumption, and she marked it so.

| | What it means | Her number |
| --- | --- | --- |
| TAM | Everyone who has the problem | 9,000 firms × ₹1.2 lakh = about ₹108 crore a year |
| SAM | The part she could serve | 2,700 that run a chat and handle 5,000 chats a month or more = about ₹32 crore |
| SOM | What she could win in about three years | 2 percent of 2,700 = 54 customers = about ₹65 lakh a year |

The first of these is the *total addressable market*, or TAM. The second, the *serviceable addressable market* or SAM, is the portion she could actually reach with what she had. The third, the *serviceable obtainable market* or SOM, is the portion she might win in a few years if things went reasonably well.

The last figure was the one that made her sit back. ₹65 lakh a year was not a company. It was barely a team. It was also a number she could believe, which was more than she could say for the first one. The point of the table was never the final figure. It was that every line could be questioned, and every question had a place to go: *how do you know nine thousand? How do you know five thousand chats?* Each assumption was marked *known* or *assumed*, and the assumed ones were the first things to go and check.

## The things that stand in the way

Most people think of competitors as a list of rival products. Anaya now saw three kinds.

*Direct* ones did the same job the same way: tools like Rampart, and the privacy features that came with some cloud services. *Indirect* ones did the same job another way: a person who read each export before it went out, or a chat vendor whose software hid card numbers and nothing else. And there was the third kind, which was not a product at all.

The *status quo* means what people do today, including nothing. At Sahaj it was Farah's team blanking a number by hand when someone remembered, and a line in a handbook asking customers please not to share sensitive details. It was free. It was familiar. It sort of worked. Nothing anyone built would have to beat a rival product so much as an afternoon when nothing went wrong, which every organisation mistakes for proof that nothing is wrong. Whenever someone says "we have no competitors", it generally means they have not looked at what people do now.

For each real alternative she did what is called a *competitor teardown*: who it was for, what it cost, what it was good at, and what its customers complained about. The best place to find the complaints was the reviews that real users had left on public sites, and what mattered was the complaint that kept coming back. For these tools the repeated complaints were the same three: it only works well in English; it flags ordinary product codes and order numbers as if they were secrets; and it is hard to set up on a weekend.

From a teardown comes a sentence, and a good sentence is a discipline. A *positioning statement* says who the product is for and why it differs, in one go:

*For companies that run customer chat in India and need to stop identity numbers travelling further than they should, the guard is a small privacy layer that understands English, Hindi and the two mixed. Unlike tools built for text in one writing system, it was made for the way people really type.*

She read it aloud to the empty room and was relieved to find that it did not describe any competitor.

## From interviews to a tree

The last thing Anaya did that week was the thing she would have skipped a month earlier. She put her interview notes next to her market numbers and drew them together.

It is tempting to leap from "I found a problem" straight to "I know what to build", and the leap is how most unnecessary software gets written. So she drew a tree, with the outcome she wanted at the top: *fewer personal details leave the chat.* Below the outcome, as branches, went the needs and pains she had actually heard, each with its interview numbers. The greeting that asks for details (interviews 2 and 3). No rule for agents (1 and 5). Photographs accepted without a second look (1). Numbers typed in odd ways (4). Helpers typing for others who did not know where it went (5). Below each branch, a few ideas for what might help.

Then she ranked the branches on four questions: how many people it touched, how much it hurt, how sure the evidence was, and whether it moved the outcome at the top. She was careful to rank by evidence and not by excitement. The tool she wanted to build was not the winner. The greeting was: two interviews, a free fix, and a direct line to the outcome. She wrote *rewrite the greeting this week* in the margin and sent a message to Farah that afternoon.

The tool came second. It was the answer to the branch that said agents had no help and nothing caught what the greeting missed, which was also the branch Imran's face had lit up at. It sat under *no rule for agents* with a line down to *a small tool that notices personal details and hides them*.

This kind of drawing is called an *opportunity tree*, and its quiet value is that it makes you notice when your favourite solution is actually the second-best branch.

## What to carry forward

Before building anything, find out who else stands in the same place. A market is best measured from customers you can count, with each assumption written down and marked known or guessed. The strongest competitor is usually the thing people do now, including nothing, and a side-by-side look at the alternatives, with the repeated complaints of their customers, shows where there is room. A single sentence saying who the product is for and why it differs tests whether you actually know. And a tree that runs from outcome to need to idea keeps the favourite idea honest.

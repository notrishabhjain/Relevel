---
title: Who Else Is Standing Here
summary: A conditional yes from the compliance head sets one hard requirement for the tool, and the product manager then checks what already exists, sizes the market from the bottom up, and examines competitors including the one that is not a product.
course: a4
goals:
  - read a conditional approval as a design constraint
  - size a market from customers who can be counted, and mark each assumption as known or assumed
  - identify direct, indirect and status-quo competition, and compare alternatives in a teardown
  - state a product's position in one sentence and use an opportunity tree to rank ideas by evidence
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

On the Thursday after her interviews, Anaya took her evidence to Lakshmi Iyer, Sahaj's head of compliance. Lakshmi had spent twenty years in a bank, and she read the printout, the thirty-seven flags and the numbered interview notes as someone reads who has been misled by documents: looking for what had been left out. She noted that the figure of nine percent came from one week and one chatbot. Anaya replied that the notes said so. "That is the only reason I am still reading," said Lakshmi.

Anaya described what she wanted to build. The tool would notice identity numbers and other personal details in a message and hide them before the message went anywhere else. The cleaned messages would still be passed to the outside company whose software wrote the chatbot's replies. Lakshmi's answer was conditional. She would not stop a tool that made Sahaj hold less data, but she would stop one that sent more out. If the cleaning happened inside the company before anything left, she could accept it. If it happened on someone else's computer, she could not. She added one question: how would Anaya know the tool worked? Anaya did not yet know, and Lakshmi told her to return when she did.

This chapter follows the work that came next: checking whether the tool already existed, measuring how large the opportunity was, studying the alternatives, and turning interview notes into a ranked set of options.

## The case: a conditional yes

The conditional yes did two things. It confirmed that the riskiest assumption from the previous chapter, permission to pass cleaned text to an outside company, would hold if a condition were met. It also fixed a design requirement before any design existed: the tool had to run on Sahaj's side of the wall. That requirement ruled out several easy designs, including every service that would receive the raw message to clean it.

A constraint of this kind is valuable early. It removes options at no cost, while the options are still ideas and not work already done.

## Has someone already done this?

The first question was one Anaya should have asked weeks before: what if the tool already exists? She spent an evening looking.

She found an open tool called Rampart, free to use, built and tested by capable people, whose purpose was exactly the one she had in mind: find personal details in text. Its makers had published an honest list of the languages it had been tested on and how well it had done. The list covered English and six European languages, all written in the Latin alphabet.

She read the section on Hindi twice. According to its own published results, the tool found only about fourteen in every hundred personal details in Hindi written in the Devanagari script. She recorded the figure with a question mark, because her rule about claims applied to claims that suited her as well as claims that did not. She would verify it herself later. As an unverified figure it still showed where the edge of the tool's coverage lay.

The people who wrote to Sahaj's chatbot did not stay inside that edge. They wrote in English, in Hindi, and in the form that Sanjay Patil had demonstrated without intending to: Hindi spelled in English letters and mixed with English words, often within one sentence. A tool built for one writing system would meet text in three.

## Sizing the opportunity

Anaya then asked who would want the tool, and answered in numbers. There are two ways to estimate the size of a market.

The first starts from an industry report. It reads, for example, "customer-support software is a ten-billion-dollar market, so if we win one percent...". It is quick and almost useless, because nobody can say how the one percent would be won. The second starts from customers who can be counted and multiplies upwards. This is a *bottom-up estimate*, and its virtue is that every assumption sits on the page where it can be attacked.

She began with the broadest group she could defend: registered lenders and finance apps in India. A public list held roughly nine thousand names, which was a fact. She estimated that a small firm might pay about ₹1.2 lakh a year for such a tool, which was an assumption and was marked as one.

::: def Three nested sizes
The *total addressable market* (TAM) is everyone who has the problem, at the price you would charge. The *serviceable addressable market* (SAM) is the part of the TAM you could serve with what you have. The *serviceable obtainable market* (SOM) is the part of the SAM you could realistically win in about three years.
:::

Table: Anaya's bottom-up estimate for the privacy tool
| Measure | What it means | Calculation |
| --- | --- | --- |
| TAM | Everyone who has the problem | 9,000 firms × ₹1.2 lakh = about ₹108 crore a year |
| SAM | The part she could serve | 2,700 firms that run a chat and handle 5,000 chats a month or more = about ₹32 crore |
| SOM | What she could win in about three years | 2 percent of 2,700 = 54 customers = about ₹65 lakh a year |

The last figure was sobering. ₹65 lakh a year is the revenue of a small team, not of a company. It was also a figure she could believe, which could not be said of the first. The table's purpose was not the final number. Every line invited a question, such as how she knew there were nine thousand firms or five thousand chats, and every question had somewhere to go. Each assumption was marked known or assumed, and the assumed ones were the first to be checked.

## Competition in three kinds

A list of rival products is the usual picture of competition. Anaya distinguished three kinds.

Table: Three kinds of competition for the privacy tool
| Kind | What it is | At Sahaj |
| --- | --- | --- |
| Direct | Does the same job the same way | Tools like Rampart, and privacy features bundled with some cloud services |
| Indirect | Does the same job another way | A person who reads each export before it goes out; a chat vendor whose software hides card numbers and nothing else |
| Status quo | What people do today, including nothing | Farah's team blanking a number by hand when someone remembers, and a handbook line asking customers not to share sensitive details |

The *status quo* is usually the strongest competitor. It is free, it is familiar and it partly works. A new product has to beat an afternoon in which nothing went wrong, and organisations routinely mistake such afternoons for proof that nothing is wrong. A claim that a product has no competitors normally means that its makers have not looked at what people do now.

For each real alternative Anaya made a *competitor teardown*: who it served, what it cost, what it did well and what its customers complained about. The most useful source of complaints was the reviews that users had left on public sites, and what mattered was the complaint that recurred. For these tools three complaints recurred. They worked well only in English. They flagged ordinary product codes and order numbers as if they were secrets. They were hard to set up over a weekend.

## Saying where it fits

The teardown supplied the material for one sentence that places the product among the alternatives. A *positioning statement* says who the product is for and why it differs, and writing one is a discipline because a vague sentence is easy to write and a precise one is not.

::: example The guard's first positioning statement
For companies that run customer chat in India and need to stop identity numbers travelling further than they should, the guard is a small privacy layer that understands English, Hindi and the two mixed. Unlike tools built for text in one writing system, it was made for the way people really type.
:::

A test follows. If the sentence could describe a competitor equally well, it is not yet a position. Anaya read hers aloud and was relieved that it described none of the tools she had examined.

## From interviews to ranked ideas

It is tempting to move directly from "I found a problem" to "I know what to build". The step is how most unnecessary software comes to be written. Anaya inserted an intermediate drawing instead. At the top of a page she wrote the outcome she wanted: fewer personal details leave the chat. Below it, as branches, she placed the needs and pains she had actually heard, each with its interview numbers. The chatbot's greeting asks for details (interviews 2 and 3). Agents have no rule (1 and 5). Photographs are accepted without a second look (1). Numbers are typed in odd ways (4). Helpers type on behalf of people who do not know where it goes (5). Under each branch she listed a few ideas that might help.

This drawing is an *opportunity tree*. She then ranked the branches on four questions: how many people the need touched, how much it hurt, how strong the evidence was, and whether it moved the outcome at the top. She took care to rank by evidence and not by enthusiasm.

The tool she most wanted to build did not win. The greeting did, with two interviews of evidence, a free fix and a direct effect on the outcome. She wrote "rewrite the greeting this week" in the margin and messaged Farah that afternoon. The tool came second. It answered the branch which said that agents had no help and nothing caught what the greeting missed, and in the tree it sat beneath "no rule for agents" with a line down to "a small tool that notices personal details and hides them".

::: key What the tree is for
A tree makes visible when a favourite solution is only the second-best branch. It also records why: each idea can be traced upward to a need and downward to evidence.
:::

## Summary

A conditional approval is a design constraint. At Sahaj it fixed that the tool would run inside the company, which removed several designs at the outset.

- Check what already exists before building. Test a competitor's published claims yourself, and note where its coverage ends.
- A bottom-up estimate multiplies customers you can count by what each would pay, and marks every assumption as known or assumed. TAM, SAM and SOM narrow it from everyone with the problem to what could be won.
- Competition is direct, indirect or the status quo, and the status quo is usually the strongest. A teardown compares alternatives and records the complaints that recur.
- A positioning statement says who the product is for and why it differs, and it should not describe a competitor equally well.
- An opportunity tree runs from outcome to need to idea, ranks branches by evidence and shows when the favourite idea is not the best one.

---
title: Long Windows, Careful Rooms
summary: A vendor says a huge context window means you do not need retrieval. A product manager asks two questions that end the meeting. You see why what goes into a request matters more than how much fits. You meet context engineering, token budgets, caching and compaction.
course: ch10
goals:
  - give two reasons why a huge context window still leaves you needing to find the right material
  - say what context engineering is, and write a token budget with an owner
  - explain how caching makes a request cheaper when it starts the same way each time
  - tell what compaction is and what it risks, including for personal data
terms:
  - context engineering | packing the model's desk with care. You decide what goes into each request, in what order, and what stays out: the instructions, examples, evidence, chat history and tool results | 
  - token budget | a shopping budget for bricks of text. A plan that gives each part of a request its share of tokens, with one person who owns the total and knows what to cut first | token budgets
  - caching | like a shop keeping your usual order ready. The provider remembers the start of a request it has already read. If the start is the same next time, the request is cheaper and faster | cache
  - compaction | making a long chat short. You summarise the middle and keep the beginning and the end | compact
---

In May, a solutions architect from a model vendor came to present in the glass room. A vendor is a company that sells you a product. A founder who had met him at a conference had invited him. His slides were titled "Context is Everything". One slide showed a staircase of numbers: thirty-two thousand, a hundred thousand, a million.

His argument went like this. The old way is finished. Cutting documents into pieces and fetching the right ones was only a workaround for small windows. The window is the model’s desk, and only what fits on the desk can be read at once. His vendor’s desk held a million tokens. So you could send the whole library with every question. No cutting, no embeddings, no finding. It would be simpler, cheaper and better.

If he was right, the last six weeks had been wasted. Anaya raised her hand. She asked two questions. First, what would one question cost if the whole library went every time?

Second, could he show how well the model answered when the needed fact sat halfway through a full window? Then compare it with the same fact in a short request. He said he would need to look into that. She asked him to send it when he had it. He never did.

In this chapter you see the answers Imran found. They teach how to decide what a model should be shown.

## The case: the slide that could not be priced

Anaya had not meant to embarrass him. She asked because the whole claim rested on those two answers. After he left, Imran Qureshi did the work. He brought her the results on Friday.

## Two reasons the slide was wrong

The first reason is cost. A big request costs what a big request costs. You pay per brick of text. Imran priced Sahaj’s whole policy library at about two hundred thousand tokens. He used a made-up rate of ₹250 a million. One question came to ₹50. Fetching the three right pieces had cost thirty paise. At a hundred thousand questions a month, that is ₹50 lakh against ₹30,000.

The second reason is harder to see. A model starts to use its desk badly long before the desk is full. Imran tested this. He built a long document from the policies. He placed one unusual rule at three spots: near the start, in the middle and near the end. For each spot he asked twenty questions that depended on that rule.

Table: Questions answered correctly, by where the rule sat
| Where the rule was | Answered correctly |
| --- | --- |
| Near the start | 19 of 20 |
| In the middle | 11 of 20 |
| Near the end | 18 of 20 |
| The same rule, fetched into a short request | 20 of 20 |

This result is for one model on one day. Another model will differ. But the shape is common. Imran compared it with an open-book exam. A student can carry the whole library into the hall. But she has only an hour.

She finds what is at the front of the book. She finds what is at the back. What lies in the middle, she skims past. And no one tells her which answers she lost.

The same happens here. No error shows up. The answers are simply wrong.

::: key Capacity is not use
A document fits in the window. That does not mean the model will use it. Vendors quote how much fits. The team has to measure how much is used.
:::

## What goes in the room

A bigger room does not solve the problem. So what you put in the room is the whole question. Imran gave this work a name. *Context engineering* means packing the desk with care. You decide what goes into each request, in what order, and what stays out.

The parts are the instructions, the examples, the evidence, the earlier messages and the answers from tools. These often matter more than the words of any one instruction. Many of these choices are not technical. How much history do you keep? Do you include a customer’s past complaints? Does a policy page belong in a request about a payment? These are product decisions. Each has a technical price.

Then Imran gave Anaya a plain task that took an hour. She wrote a *token budget* for one request to the chatbot. Think of a shopping budget, but for bricks of text. A token budget is a plan that gives each part of the request its share.

Table: A token budget for one chatbot request
| Part of the request | Tokens |
| --- | --- |
| The standing instructions | 400 |
| Descriptions of the functions it may call | 300 |
| Three pieces of the policy | 1,200 |
| The conversation so far | 600 |
| The answer | 200 |
| Total | 2,700 |

Then Imran asked her to suppose the bill doubled. What would she cut first?

The pieces of policy were the biggest part. They were also the easiest to shrink. She could fetch two instead of three. Or she could order the results better, so fewer pieces held the right facts. But cutting them risked answers that need several sections at once.

The chat history came next. Cutting it broke follow-up questions. The function descriptions could go only if she took away things the machine could do. Anaya saw that everything she could cut broke something.

::: key A budget needs an owner
Name what each cut puts at risk. Then measure it with the answer key (the teacher’s list of questions and right answers). A budget with no owner keeps growing.
:::

## The same start, a cheaper bill

One technique pleased Anaya because it was almost free. Providers (the companies that run the models) can remember the start of a request they have already read. If the front part is the same every time, later requests are cheaper and faster. This is *caching*. It is like a shop keeping your usual order ready.

It rewards a simple habit. Put the parts that never change first. These are the standing instructions and reference text. Put the parts that change last, such as the customer’s question. Caching also made the guard’s long instructions cheaper than she had feared. Four hundred tokens sit at the front, the same on every call. That is a good use of the cache.

## Shortening a conversation

The last idea came up when Anaya asked a question. What happens to a twenty-message chat that grows past its budget? The usual answer is *compaction*. You summarise the middle of the chat. You keep the beginning and the end. You send that.

It works. But it reliably loses small details from the middle. Anaya gave one example: a promised callback. Imran agreed that this was just the kind of detail at risk. That was why the must-keep list had been written in April. Whatever the summary keeps, the thing that must not be lost belongs on that list.

There was a second, quieter problem. A summary is new text, written by a model. Say the middle of the chat held an identity number. If the guard had hidden it on the way in, the summary carries the hidden version.

If it had not been hidden, the summary copies it. Either way, the guard must sit in front of the summary too. Anaya added a second small box to the diagram. It sat on the way out of the summariser.

She also drew a lesson for talks with vendors. Someone says their assistant remembers a user. Ask where the memory is kept. It is a store the application keeps. It is sent with each message, and paid for each time. Remember the goldfish. The model forgets after each message, unless you send the old chat again.

## Summary

A very large context window does not remove the need to find the right material. There are two reasons. A large request costs the same large amount on every question. And a model uses what it was sent less well long before the window is full, especially material in the middle.

- What matters is what goes into each request. This is context engineering. Manage it as a token budget with an owner. The owner knows what to cut first and what each cut would break.
- Put the parts that stay the same at the front. Then the provider can cache them, and the cost drops.
- Compaction summarises the middle of a long chat and loses small details. Anything a model writes, a summary too, is another place a personal detail can end up.

Next, a train stopped near Lonavala shows Anaya why a wait with a shape feels shorter. It also shows what that means for models that think before they answer.

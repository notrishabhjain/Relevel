---
title: Long Windows, Careful Rooms
summary: A vendor says a very large context window makes retrieval unnecessary, and a product manager asks the two questions that end the meeting. This chapter shows why what goes into a request matters more than how much fits, and introduces context engineering, token budgets, caching and compaction.
course: ch10
goals:
  - give two reasons why a very large context window does not remove the need to find the right material
  - define context engineering and write a token budget with an owner
  - explain how caching lowers the cost of a request that starts the same way each time
  - describe compaction and its risks, including for personal data
terms:
  - context engineering | deciding what goes into each request, in what order, and what is left out: the instructions, examples, evidence, history and tool results | 
  - token budget | a plan that gives each part of a request its share of tokens, with someone who owns the total and knows what to cut first | token budgets
  - caching | letting the provider remember the processed start of a request, so that if the start is identical next time, the later request is cheaper and faster | cache
  - compaction | shrinking a long conversation by summarising its middle and keeping the beginning and the end | compact
---

In May, a solutions architect from a model vendor came to present to the team in the glass room. A founder who had met him at a conference had invited him. His slides were titled "Context is Everything". One slide showed a staircase of numbers: thirty-two thousand, a hundred thousand, a million.

His argument went like this. The old approach is finished. Cutting documents into pieces and fetching the right ones was only a workaround for small windows. His vendor’s window held a million tokens, so you could send the whole library with every question. No cutting, no embeddings, no finding. It would be simpler, cheaper and better.

If he was right, the previous six weeks had been unnecessary. Anaya raised her hand and asked two questions. First, what would one question cost if the whole library were sent every time? Second, could he show how well the model answered when the needed fact lay halfway through a full window, compared with the same fact in a short request? He said he would need to look into that. She asked him to send it when he had it. He never did.

In this chapter you’ll see the answers Imran found, and what they teach about deciding what a model should be shown.

## The case: the slide that could not be priced

Anaya hadn’t meant to embarrass him. She asked because the whole claim depended on those two answers. After he left, Imran Qureshi did the work, and he brought her the results on Friday.

## Two reasons the slide was wrong

The first reason is cost. A large request costs what a large request costs. Imran priced Sahaj’s whole policy library, about a hundred and fifty thousand tokens, at a made-up rate of ₹250 a million. One question came to ₹37.50. Fetching the three relevant pieces had cost thirty paise. At a hundred thousand questions a month, that is ₹37.5 lakh against ₹30,000.

The second reason is subtler. A model’s ability to use what is in the request starts to fall long before the request is full. To test this, Imran built a long document from the policies. He placed one unusual rule at three positions: near the start, in the middle and near the end. For each position he asked twenty questions that depended on that rule.

Table: Questions answered correctly, by where the rule sat
| Where the rule was | Answered correctly |
| --- | --- |
| Near the start | 19 of 20 |
| In the middle | 11 of 20 |
| Near the end | 18 of 20 |
| The same rule, fetched into a short request | 20 of 20 |

This result belongs to one model on one day. Another model will differ, but the shape is common. Imran compared it with an open-book examination. A student can carry the whole library into the hall, but she has only an hour. She finds what is at the front of the book and what is at the back. What lies in the middle, she skims past. And no one tells her which answers she lost because of it.

The same happens here. No error is reported. The answers are simply wrong.

::: key Capacity is not use
That a document fits in the window doesn’t mean the model will use it. Vendors quote capacity. The team has to measure use.
:::

## What goes in the room

If a bigger room doesn’t solve the problem, then what you put in the room is the whole question. Imran gave this work a name. *Context engineering* means deciding what goes into each request, in what order, and what is left out.

The parts are the instructions, the examples, the evidence, the earlier messages and the answers from tools. Often these matter more than the wording of any one instruction. And many of these choices aren’t technical. How much history do you keep? Do you include a customer’s past complaints? Does a policy page belong in a request about a payment? These are product decisions, and each has a technical price.

Imran then gave Anaya an unglamorous task that took an hour. She wrote a *token budget* for one request to the chatbot. A token budget is a plan that gives each part of the request its share.

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

The pieces of policy were the biggest part and the easiest to shrink. She could fetch two instead of three, or order the results better so that fewer pieces carried the right content. But cutting them risked answers that need several sections at once. The conversation history came next, and cutting it broke follow-up questions. The function descriptions could go only if she removed things the machine was able to do. Anaya noticed that everything she could cut broke something.

::: key A budget needs an owner
Name what each cut puts at risk, and then measure it with the answer key. A budget with no owner grows.
:::

## The same start, a cheaper bill

One technique appealed to Anaya because it was almost free. Providers can remember the processed start of a request. If the front part is identical every time, later requests are cheaper and faster. This is *caching*.

It rewards a simple habit. Put the stable parts first, such as the standing instructions and reference text. Put the parts that change last, such as the customer’s question. Caching also made the guard’s long instructions less expensive than she had feared. Four hundred tokens, identical on every call and placed at the front, are a good use of the cache.

## Shortening a conversation

The last idea came up when Anaya asked what happens to a twenty-message chat that outgrows its budget. The usual answer is *compaction*. You summarise the middle of the conversation, keep the beginning and the end, and send that.

It works, but it reliably loses specific details from the middle. Anaya gave a promised callback as an example. Imran agreed that this was exactly the kind of detail at risk, and that was why the must-keep list had been written in April. Whatever the summary keeps, the thing that must not be lost belongs on that list.

There was a second, quieter problem. A summary is new text, written by a model. Suppose the middle of the conversation held an identity number. If the guard had hidden it on the way in, the summary carries the hidden version. If it hadn’t been hidden, the summary copies it. Either way, the guard has to sit in front of the summary as well. Anaya added a second small box to the diagram, on the way out of the summariser.

She also drew a conclusion for conversations with vendors. When someone says that their assistant remembers a user, ask where the memory is stored. It is a store that the application maintains, sent with each message and paid for each time.

## Summary

A very large context window doesn’t remove the need to find the right material, for two reasons. Sending a large request costs the same large amount on every question. And a model’s ability to use what it was sent falls well before the window is full, especially for material in the middle.

- What matters is what goes into each request. This is context engineering, and it is best managed as a token budget with an owner, who knows what to cut first and what each cut would break.
- Putting the stable parts of a request first lets the provider cache them, which cuts the cost.
- Compaction summarises the middle of a long conversation and loses specific details. Anything a model writes, including a summary, is another place a personal detail can end up.

Next, you’ll see what happens when a model is allowed to work out its answer before it gives it.

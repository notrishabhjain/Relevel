---
title: Long Windows, Careful Rooms
summary: A vendor claims that a very large context window makes retrieval unnecessary, and a product manager asks the two questions that end the meeting. The chapter shows why what goes into a request matters more than how much fits, and introduces context engineering, token budgets, caching and compaction.
course: ch10
goals:
  - give two reasons why a very large context window does not remove the need to find the right material
  - define context engineering and write a token budget with an owner
  - explain how caching lowers the cost of a repeated start
  - describe compaction and its risks, including for personal data
terms:
  - context engineering | deciding what goes into each request, in what order and what is left out: the instructions, examples, evidence, history and tool results | 
  - token budget | a plan that gives each part of a request its share of tokens, with someone who owns the total and knows what to cut first | token budgets
  - caching | letting the provider remember the processed start of a request so that, if it is identical next time, the later request is cheaper and faster | cache
  - compaction | shrinking a long conversation by summarising its middle and keeping the beginning and the end | compact
---

In May a solutions architect from a model vendor, invited by a founder who had met him at a conference, presented to the team in the glass room. His slides were titled "Context is Everything". A slide showed a staircase of numbers: thirty-two thousand, a hundred thousand, a million. His argument was that the old approach was finished. Cutting documents into pieces and fetching the right ones had been a workaround for small windows. His vendor's window held a million tokens, so the whole library could be sent with every question: no cutting, no embeddings, no finding. It would be simpler, cheaper and better.

The claim would have made the previous six weeks unnecessary. Anaya raised her hand and asked two questions: what one question would cost if the whole library were sent every time, and whether he could show how well the model answered when the needed fact lay halfway through a full window compared with the same fact in a short request. He said he would need to look into that. She asked him to send it when he had it. He never did.

## The case: the slide that could not be priced

Anaya had not meant to embarrass him. She asked the questions because the whole claim depended on them. After he left, Imran Qureshi did the work and brought her the answers on Friday.

## Two reasons the slide was wrong

The first reason is cost. A large request costs what a large request costs. Imran priced Sahaj's whole policy library, about a hundred and fifty thousand tokens, at the made-up rate of ₹250 a million: ₹37.50 for one question. Fetching the three relevant pieces had cost thirty paise. At a hundred thousand questions a month, the difference is ₹37.5 lakh against ₹30,000.

The second reason is subtler. A model's ability to use what is in the request falls off well before the request is full. Imran built a long document from the policies and placed one unusual rule at three positions: near the start, in the middle and near the end. For each position he asked twenty questions that depended on the rule.

Table: Questions answered correctly, by where the rule sat
| Where the rule was | Answered correctly |
| --- | --- |
| Near the start | 19 of 20 |
| In the middle | 11 of 20 |
| Near the end | 18 of 20 |
| The same rule, fetched into a short request | 20 of 20 |

The result belongs to one model on one day, and another model will differ, but the shape is common. Imran compared it with an open-book examination. A candidate may bring the entire library into the hall and has an hour. What she finds are the things at the front of the book and the things at the back. What lies in the middle she skims past, and no one tells her which answers she lost because of it. No error is reported. The answers are simply wrong.

::: key Capacity is not use
That a document fits in the window does not mean it will be used. Vendors quote capacity. The team has to measure use.
:::

## What goes in the room

If a bigger room does not solve the problem, then what goes into it is the whole question. Imran gave the work a name. *Context engineering* is deciding what goes into each request, in what order, and what is left out. The parts are the instructions, the examples, the evidence, the earlier messages and the answers from tools. Much of it matters more than the wording of any single instruction, and much of it is not a technical choice. How much history to keep, whether to include a customer's past complaints, and whether a policy page belongs in a request about a payment are product decisions with a technical price.

He asked Anaya to do something unglamorous, which took an hour. She wrote a *token budget* for one request to the chatbot, with a share for each part.

Table: A token budget for one chatbot request
| Part of the request | Tokens |
| --- | --- |
| The standing instructions | 400 |
| Descriptions of the functions it may call | 300 |
| Three pieces of the policy | 1,200 |
| The conversation so far | 600 |
| The answer | 200 |
| Total | 2,700 |

Imran then supposed that the bill doubled and asked what she would cut first. The pieces of policy were the largest part and the easiest to shrink, either by fetching two instead of three or by ordering the results better so that fewer carried the right content, but cutting them risked answers that needed several sections at once. The conversation history came next, and cutting it broke follow-up questions. The function descriptions could be dropped only by removing the things the machine was able to do. Anaya observed that everything she could cut broke something.

::: key A budget needs an owner
Name what each cut puts at risk, and then measure it with the answer key. A budget that has no owner grows.
:::

## The same start, a cheaper bill

One technique appealed to Anaya for being almost free. Providers can remember the processed start of a request, and if the front part is identical every time, later requests are cheaper and faster. This is *caching*. It rewards a habit: the stable parts go first, such as the standing instructions and reference text, and the parts that change go last, such as the customer's question. It also made the guard's long instructions less expensive than she had feared. Four hundred tokens, identical on every call and placed at the front, is a good use of the cache.

## Shortening a conversation

The last idea arose when Anaya asked what happens to a twenty-message chat that outgrows its budget. The usual answer is *compaction*: summarise the middle of the conversation, keep the beginning and the end, and send that. It works, and it reliably loses specific details from the middle. Anaya named a promised callback as an example, and Imran agreed that this was exactly the sort of detail, which is why the must-keep list had been written in April. Whatever the summary keeps, the thing that must not be lost should be on the list.

There was a second, quieter problem. A summary is new text written by a model. If the middle of the conversation held an identity number that the guard had hidden on the way in, the summary would carry the hidden version. If it had not been hidden, the summary would copy it. Either way the guard had to sit in front of the summary as well. Anaya added a second small box to the diagram, on the way out of the summariser.

She also drew a conclusion for conversations with vendors. When someone says that their assistant remembers a user, the question is where the memory is stored. It is a store that the application maintains, sent with each message and paid for each time.

## Summary

A very large context window does not remove the need to find the right material, for two reasons. Sending a large request costs what it costs on every question, and a model's ability to use what it was sent falls well before the window is full, especially for material in the middle.

- What matters is what goes into each request. This is context engineering, and it is best managed as a token budget with an owner who knows what to cut first and what each cut would break.
- Putting the stable parts of a request first lets the provider cache them, which cuts cost.
- Compaction summarises the middle of a long conversation and loses specific details. Anything a model writes, including a summary, is another place a personal detail can end up.

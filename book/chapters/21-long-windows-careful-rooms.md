---
title: Long Windows, Careful Rooms
summary: A salesman announces that a very large context window makes all this effort unnecessary, and a product manager asks him the one question that ends the meeting. What goes in the room matters more than how big it is.
course: ch10
terms:
  - context engineering | deciding what goes into each request, in what order and what is left out: the instructions, examples, evidence, history and tool results | 
  - token budget | a plan that gives each part of a request its share of tokens, with someone who owns the total and knows what to cut first | token budgets
  - caching | letting the provider remember the processed start of a request so that, if it is identical next time, the later request is cheaper and faster | cache
  - compaction | shrinking a long conversation by summarising its middle and keeping the beginning and the end | compact
---

The salesman's lanyard said *Solutions Architect*, and his slides said *Context is Everything*, and by the fourth slide Anaya had stopped writing.

He had come from a vendor of models, on the invitation of a founder who had met him at a conference, and he had a laptop, a clicker and a calm that suggested he had given this talk in rooms much less hospitable than the glass box. Imran sat at the back with his arms folded. Farah had brought tea for everyone, which she sometimes did to buy herself time to listen.

"The point," said the salesman, "is that the old way is over." A slide showed a staircase of numbers: thirty-two thousand, a hundred thousand, a million. "You've been cutting your documents into pieces and fetching the right ones. That was a workaround for small windows. Our window holds a million tokens. You can send the whole library with every question. No cutting, no embeddings, no finding. Simpler, cheaper, better."

It was an appealing slide. It would have made the last six weeks unnecessary.

Anaya raised her hand, which she had not done in a meeting since school.

"Two questions. If I send the whole library every time, what does one question cost?"

"It depends on volume—"

"A million tokens is a million tokens. At any price you like. For every customer, every time." She did not say it unkindly. "And the second: can you show me how well the model answers when the fact it needs is halfway through a full window, compared with the same fact placed into a short request?"

The clicker stopped. "I would need to look into that."

"That's fine," said Anaya. "Please send it to me when you have it."

He never did, and she did not mind; she had not asked to embarrass him. She had asked because it was the question the whole claim depended on.

## Two reasons the slide was wrong

After he left, Imran did the work, and brought her the results on a Friday.

The first reason was the simple one, and she had already half stated it. A large request costs what a large request costs. He took the whole of Sahaj's policy library, about a hundred and fifty thousand tokens, and priced it at the old made-up rate of two hundred and fifty rupees a million. Thirty-seven rupees and fifty paise for one question. Fetching the three relevant pieces had cost thirty paise. A hundred thousand questions a month: thirty-seven and a half lakh rupees against thirty thousand.

The second was subtler, and he had spent the evening on it. A model's ability to use what is in the request falls off well before the request is full. He had built a long document from the policies and buried one unusual rule at three places: near the start, in the middle, near the end. For each place he asked twenty questions that depended on it.

| Where the rule was | Questions answered correctly |
| --- | --- |
| Near the start | 19 of 20 |
| In the middle | 11 of 20 |
| Near the end | 18 of 20 |
| The same rule, fetched into a short request | 20 of 20 |

"That is one model on one day," said Imran. "Yours will differ. But the shape is common." He compared it to an open-book exam. You are allowed to bring the entire library into the hall. You have an hour. What you find are the things at the front of the book and the things at the back, and what lies in the middle you skim past, and the invigilator never tells you which questions you got wrong because of it.

There was no error. The answers were simply wrong.

"A document fitting in the window," said Anaya slowly, "doesn't mean it will be used."

"Vendors quote capacity," he said. "What you have to measure is use."

## What goes in the room

If a bigger room does not solve the problem, then what goes into it is the whole question, and Imran gave it a name.

*Context engineering* is the work of deciding what goes into each request, in what order, and what is left out. The instructions, the examples, the evidence, the earlier messages, the answers from tools. Much of it turns out to matter more than the wording of any one instruction. And a lot of it is not a technical choice at all. How much history to keep, whether to include a customer's past complaints, whether a policy page belongs in a request about a payment: those are product decisions with a technical price.

He asked her to do something unglamorous, and it took an hour. She wrote a *token budget* for one request to the chatbot, each part with its share.

| Part of the request | Tokens |
| --- | --- |
| The standing instructions | 400 |
| Descriptions of the functions it may call | 300 |
| Three pieces of the policy | 1,200 |
| The conversation so far | 600 |
| The answer | 200 |
| **Total** | **2,700** |

"Now," said Imran. "The bill doubles. What do you cut first?"

She looked at the column. The pieces of policy were the largest part, and the easiest to shrink: fetch two instead of three, or order the results better so that fewer carry the right content. But cutting them risked answers that needed several sections at once. The conversation history was next, and cutting that broke follow-up questions. The function descriptions could be dropped only by removing the things the machine was able to do.

"Everything I can cut breaks something," she said.

"Yes. So name what each cut puts at risk," said Imran, "and then measure it with the answer key. A budget has an owner. If it doesn't, it grows."

## Same start, cheaper bill

There was one trick that she liked for being almost free. Providers can remember the processed start of a request. If the front part is identical every time, the later requests are cheaper and faster. This is *caching*. It rewards a habit: put the stable parts first, such as the standing instructions and the reference text, and the parts that change last, such as the customer's question.

It also made the long instructions of the guard less expensive than she had feared. Four hundred tokens, identical on every call, at the front: a good use of the cache.

## Shortening a conversation

The last idea was one she met by accident, when she asked what happened to a twenty-message chat that had grown too long for its budget.

The common answer, Imran said, was *compaction*. Summarise the middle of the conversation, keep the beginning and the end, and send that. It works. It also loses, reliably, specific details from the middle.

"Like a promised callback," said Anaya.

"Exactly like a promised callback." He rubbed his eyes. "This is why you wrote the list in April. Whatever the summary keeps, the thing you must not lose should be on that list."

There was a second, quieter problem, and Anaya saw it before he spoke. A summary is new text written by a model. If the middle of the conversation contained an identity number that the guard had hidden on the way in, the summary would carry the hidden version. If it had not been hidden, the summary would copy it. Either way, the guard had to sit in front of the summary as well.

She added it to the diagram on the wall, in the margin: a second small box, on the way out of the summariser.

When someone says their assistant "remembers" a user, she thought, you should ask where the memory is stored. It is a store that the app maintains, sent with each message and paid for each time. She wrote that down too, and underlined it, because she suspected she would hear the opposite from a number of vendors.

## What to carry forward

A very large context window does not make finding the right material unnecessary, for two reasons: sending a large request costs what it costs on every question, and a model's ability to use what it was sent falls well before the window is full, especially for material in the middle. What matters is what goes into each request, which is called context engineering, and which is best managed as a token budget with an owner who knows what to cut first and what each cut would break. Putting the stable parts of a request first lets the provider cache them, which cuts cost. Summarising the middle of a long conversation, called compaction, loses specific details. And anything a model writes, including a summary, is another place a personal detail can end up.

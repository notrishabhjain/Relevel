---
title: A Mind With No Memory
summary: A language model keeps nothing from one request to the next. What looks like memory in a chatbot is the application sending the whole conversation again each time. This chapter shows how that works, what it costs, and why it makes the privacy problem at the centre of the project bigger.
course: ch15b
goals:
  - explain why a language model is stateless, and where a chatbot's apparent memory comes from
  - work out how the cost of a conversation grows as it gets longer
  - list the choices an application has when a conversation outgrows the context window
  - say what resending the history means for privacy
terms:
  - stateless | keeping nothing between requests: every call starts from nothing, and the model does not know you spoke a moment ago | 
  - conversation history | the earlier messages of a chat, which an app has to send again with each new message if it wants the model to seem to remember | 
---

The owner of the sweet shop below Sahaj's office had never asked a regular what she wanted. In nineteen years, not once. He simply knew. Mrs. Apte took a quarter kilo of kaju katli every Thursday. The boy from the pharmacy next door had one hot jalebi and paid in coins. If a stranger asked for "the usual", the owner would smile and say he didn't yet know what that was.

One afternoon Imran and Anaya went down there with the laptop. The day before, Anaya had asked a simple question: why doesn't the chatbot remember her? The shop was a good place to think about it. The owner remembers everything about his customers. The model remembers nothing about anyone. That difference sets the cost of every chatbot, and, as you'll see, it makes the project's privacy problem larger than Anaya had thought.

## The case: the same machine, a second later

Imran opened the window from the evening before. He typed, "My name is Anaya and I work on loans." The model said it was happy to meet her and asked how it could help with her loans.

Then he cleared the window and typed, "What is my name?" The model said it didn't have access to her name and asked her to tell it.

Anaya frowned. A second ago the model had been talking to her. Imran said it had been talking to somebody, and the second call knew nothing about the first. The owner downstairs carries yesterday into today. The model does the opposite. It is *stateless*, which means it keeps nothing from one request to the next. Every call starts from nothing.

## Where the memory comes from

But Anaya had a fair objection. She had used the chatbot. She had held a long conversation with it, and it knew what she had said three messages earlier. So surely it did remember.

Imran said that the chatbot doesn't remember. The application does.

He borrowed the shop's ledger, a heavy book with a red cloth cover, and held it open. Suppose the owner had no memory at all, he said. Each time a customer came in, she would have to hand him the ledger, open at the right page, so he could read what had already been said. The model is in that position. It sees only what is on the table in the current request. So when Anaya sent her fifth message, the app sent the first four again, with the new one added at the end.

Then he showed her. He put three things into one request: the first message, the model's reply to it, and the question "What is my name?" The answer came back at once. "Your name is Anaya."

::: def Conversation history
The earlier messages of a chat. An application has to send them again with each new message if it wants the model to seem to remember. The model knows nothing about this. What looks like memory is the application handing over the ledger.
:::

## What it costs to remember

Here is the next thing that follows. If the history goes along every time, each message makes the next request bigger. And you pay for every token each time it is sent.

Imran took a napkin and made up an example. Say the chatbot starts every request with three hundred tokens of its own instructions. Say each exchange, meaning the customer's message and the reply, adds another hundred tokens. The table shows what happens.

Table: How the size of a request grows over a conversation
| Message number | What is sent | Tokens |
| --- | --- | --- |
| 1 | The instructions and the first message | about 340 |
| 10 | The instructions, nine earlier exchanges and the new message | about 1,240 |
| 20 | The instructions, nineteen earlier exchanges and the new message | about 2,240 |

Look at the last row. The twentieth message costs more than six times the first. Add up a whole twenty-message conversation and about 25,800 tokens have been sent. If the chatbot remembered nothing, the total would be about 6,800.

So the cost of a conversation isn't the cost of what the person typed. It is the cost of everything the application carries along.

## When the conversation stops fitting

The same sums hide a second problem, and Anaya found it herself. The context window has a fixed size. If a conversation goes on long enough, it won't fit any more.

At that point something has to be left out. The model doesn't make that choice. The application does. The table shows the usual options, and what each one puts at risk.

Table: What an application can do with a long history
| Option | What it means | What it risks |
| --- | --- | --- |
| Drop the oldest messages | Keep only the most recent ones | Early facts the customer gave are lost |
| Replace old messages with a summary | Keep a short account of what was said | The summary may leave out something that mattered |
| Look up saved facts about the customer | Send only a few stored facts | The facts must be kept correct, and kept private |
| Keep the state of the task in a database | Send the state instead of the talk | The task must be something you can describe as a state |

Every product that offers memory has picked one of these and built it. The company that supplies the model provides none of it.

## The thing she had not seen

Anaya finished her jalebi in silence. Then she said it slowly, as she worked it out. If the whole history goes along every time, then a number typed in message two is sent again with message three. And again with message four. And so on.

Imran nodded. It keeps going to the end of the conversation. Suppose a customer types an Aadhaar number in the second message of a chat that lasts twenty messages. That number travels to the outside company eighteen more times. Imran had seen this the night before, after Anaya left. He had waited for her to find it herself.

It changed her picture of the guard. She had thought of a tool that looks at each new message as it arrives. But a number caught only in the newest message, and left sitting in the history, would be sent again in full with every message after it.

::: key Clean it before it is stored
The guard can't look only at the newest line. It has two ways to cope. It can treat the whole history as something that might hold a secret, and check it on every call. Or it can clean each line once, when it arrives, so that the cleaned version is what goes into the history. Anaya chose the second and wrote it down as a design rule: clean it before it is stored, not only before it is sent.
:::

As they got up to leave, the owner put a small paper bag on the counter. "For the lady," he said. "Kaju katli. It is Thursday." Anaya laughed, for the first time in some weeks.

## Summary

A language model is stateless. It keeps nothing between requests, and every call starts from nothing.

- A chatbot seems to remember because the application sends the conversation history again with each new message. Memory in any product is built, and paid for, by the product.
- Because the history is sent again, each message costs more than the one before. The total cost of a conversation grows much faster than its length.
- When a conversation outgrows the context window, the application has to drop old messages, summarise them, look up stored facts, or keep the state of the task. The choice belongs to the application.
- A detail typed once is sent again with every later message, unless it is cleaned before it is stored.

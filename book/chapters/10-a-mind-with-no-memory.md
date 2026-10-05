---
title: A Mind With No Memory
summary: A language model keeps nothing from one request to the next, and what looks like memory in a chatbot is the application resending the conversation. The chapter explains how that works, what it costs, and why it changes the privacy problem at the centre of the project.
course: ch15b
goals:
  - explain why a language model is stateless and where a chatbot's apparent memory comes from
  - calculate how the cost of a conversation grows with its length
  - list the choices an application has when a conversation outgrows the context window
  - state the privacy consequence of resending the history
terms:
  - stateless | keeping nothing between requests: every call starts from nothing, and the model does not know you spoke a moment ago | 
  - conversation history | the earlier messages of a chat, which an app has to send again with each new message if it wants the model to seem to remember | 
---

The owner of the sweet shop below Sahaj's office had never in nineteen years asked a regular what she wanted. He knew. A customer named Mrs. Apte took a quarter kilo of kaju katli on Thursdays, and the boy from the pharmacy next door had one hot jalebi and paid in coins. If a stranger asked for "the usual", the owner would say kindly that he did not yet know what that was.

Imran and Anaya went down there one afternoon with the laptop to discuss a question she had asked the previous day: why does the chatbot not remember her? The shop offered a useful comparison, because its owner remembers everything about his customers and the model remembers nothing about anyone. The difference determines the cost of every chatbot and, as the chapter shows, shapes the privacy problem on which the project depends.

## The case: the same machine, a second later

Imran opened the window from the previous evening and typed: "My name is Anaya and I work on loans." The model replied that it was pleased to meet her and asked how it could help with her loans. He then cleared the window and typed: "What is my name?" The model answered that it did not have access to her name and asked her to supply it.

Anaya pointed out that the model had been talking to her a second earlier. In Imran's words it had been talking to somebody, and the second call had no knowledge of the first. The owner downstairs carries yesterday into today. The model does the opposite. It is *stateless*: it keeps nothing from one request to the next, so every call begins from nothing.

## Where the memory comes from

Anaya objected that the chatbot did remember. She had held a conversation with it, and it knew what she had said three messages before. Imran replied that the chatbot did not remember. The application did.

He borrowed the shop's ledger, a long book with a stiff spine and a red cloth cover, and held it open. Suppose a customer walked in and the owner had no memory at all. Each time she spoke, she would have to hand him the ledger, open at the right page, so that he could read what had been said. The model sees only what is on the table in the current request. When Anaya sent her fifth message, the app sent the first four again, with the new one added at the end.

Imran demonstrated it. He put into a single request the first message, the model's reply to it, and the question "What is my name?" The answer came back at once: "Your name is Anaya."

::: def Conversation history
The earlier messages of a chat, which an application must send again with each new message if it wants the model to seem to remember. The model knows nothing of this. What looks like memory is the application handing over the ledger.
:::

## What it costs to remember

Because the history is sent every time, each message makes the next one larger, and every token is charged each time it is sent. Imran took a napkin and set out an example. Suppose the chatbot begins every request with three hundred tokens of its own instructions, and each exchange, the customer's message plus the reply, adds a hundred tokens.

Table: How the size of a request grows over a conversation
| Message number | What is sent | Tokens |
| --- | --- | --- |
| 1 | The instructions and the first message | about 340 |
| 10 | The instructions, nine earlier exchanges and the new message | about 1,240 |
| 20 | The instructions, nineteen earlier exchanges and the new message | about 2,240 |

The twentieth message costs more than six times the first. Added up over a twenty-message conversation, the total sent is about 25,800 tokens. If the chatbot remembered nothing, the total would be about 6,800. The cost of a conversation is therefore not the cost of what the person typed. It is the cost of what the application carries.

## When the conversation stops fitting

The same arithmetic hides a second limit, which Anaya found for herself. The context window is a fixed size, and a conversation that continues long enough will no longer fit. At that point the application must decide what to leave out, and the decision belongs to the application, never to the model.

Table: What an application can do with a long history
| Option | What it means | What it risks |
| --- | --- | --- |
| Drop the oldest messages | Keep only the most recent | Loses early facts the customer gave |
| Replace old messages with a summary | Keep a short account of what was said | The summary may leave out something that mattered |
| Look up saved facts about the customer | Send only a few stored facts | The facts must be kept correct and kept private |
| Keep the state of the task in a database | Send the state instead of the talk | The task must be describable as a state |

Every product that offers memory has chosen one of these and built it. The company that supplies the model provides none of it.

## The thing she had not seen

Anaya finished her jalebi in silence. Then she observed that if the whole history is sent each time, a number typed in message two is sent again with message three, and again with message four, and so on. Imran confirmed that it is sent to the end of the conversation. If a customer types an Aadhaar number in the second message of a chat that lasts twenty messages, it travels to the outside company eighteen more times. He had seen this the night before, after Anaya left, and had waited for her to find it herself.

The discovery changed her picture of the guard. She had imagined a tool that looked at each new message as it arrived. But a number hidden only in the newest message and left visible in the history would be sent again, in full, with every later message.

::: key Clean it before it is stored
The guard cannot look only at the newest line. Either it must treat the whole history as something that might contain a secret, on every call, or it must clean each line once, on arrival, so that the cleaned version is what enters the history. Anaya recorded the second option as a design rule: clean it before it is stored, not just before it is sent.
:::

As they got up, the owner put a small paper bag on the counter. "For the lady," he said. "Kaju katli. It is Thursday." Anaya laughed, for the first time in some weeks.

## Summary

A language model is stateless. It keeps nothing between requests, and each call starts from nothing.

- A chatbot appears to remember because the application sends the conversation history again with every new message. Memory in any product is built and paid for by the product.
- Because the history is resent, each message costs more than the previous one, and the total cost of a conversation grows much faster than its length.
- A conversation that outgrows the context window forces the application to drop old messages, summarise them, look up stored facts or keep the task's state. The choice is the application's.
- A detail typed once is sent again with every later message unless it is cleaned before it is stored.

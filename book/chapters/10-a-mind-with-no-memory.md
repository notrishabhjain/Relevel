---
title: A Mind With No Memory
summary: A language model is like a goldfish. It forgets everything after each message. A chatbot only seems to remember, because the app sends the whole chat again each time. You see how that works, what it costs, and why it makes the privacy problem bigger.
course: ch15b
goals:
  - say why a language model forgets, and where a chatbot's memory really comes from
  - work out how the cost of a chat grows as it gets longer
  - list what an app can do when a chat gets too long for the model's desk
  - say what sending the old chat again means for privacy
terms:
  - stateless | forgetful, like a goldfish: it keeps nothing between requests, so every call starts from nothing and the model does not know you spoke a moment ago | 
  - conversation history | the earlier messages of a chat, like the pages of a ledger; the app must send them again with each new message if it wants the model to seem to remember | 
---

The owner of the sweet shop below Sahaj's office never asked a regular what she wanted. In nineteen years, not once. He just knew. Mrs. Apte took a quarter kilo of kaju katli every Thursday. The boy from the pharmacy next door had one hot jalebi and paid in coins. If a stranger asked for "the usual", the owner smiled. He said he did not know yet what that was.

One afternoon Imran and Anaya went down there with the laptop. The day before, Anaya had asked a simple question. Why does the chatbot not remember her? The shop was a good place to think about it. The owner remembers everything about his customers. The model remembers nothing about anyone. This one difference sets the cost of every chatbot. It also makes the project's privacy problem bigger than Anaya had thought.

## The case: the same machine, a second later

Imran opened the window from the evening before. He typed, "My name is Anaya and I work on loans." The model said it was happy to meet her. It asked how it could help with her loans.

Then he cleared the window and typed, "What is my name?" The model said it did not have her name. It asked her to tell it.

Anaya frowned. A second ago the model had been talking to her. Imran said it had been talking to somebody. The second call knew nothing about the first.

The owner downstairs carries yesterday into today. The model does the opposite. It is like a goldfish. It is *stateless*, which means it keeps nothing from one request to the next. Every call starts from nothing.

## Where the memory comes from

Anaya had a fair objection. She had used the chatbot. She had held a long chat with it, and it knew what she said three messages earlier. So surely it remembered.

Imran said the chatbot does not remember. The application does. (The application, or app, is the program around the model.)

He borrowed the shop's ledger. It was a heavy book with a red cloth cover. He held it open and said: suppose the owner had no memory at all. Then each customer would have to hand him the ledger, open at the right page. He could read what had been said so far.

The model is in the same position. It sees only what is on the table in this one request. So when Anaya sent her fifth message, the app sent the first four again. The new one went at the end.

Then he showed her. He put three things into one request. They were the first message, the model's reply, and the question "What is my name?" The answer came back at once. "Your name is Anaya."

::: def Conversation history
The earlier messages of a chat, like the pages of a ledger. The app must send them again with each new message if it wants the model to seem to remember. The model knows nothing about this. What looks like memory is the app handing over the ledger.
:::

## What it costs to remember

Here is the next thing. The history goes along every time. So each message makes the next request bigger. And you pay for every token (a small piece of a word, like one Lego brick of text) each time it is sent.

Imran took a napkin and made up an example. Say the chatbot starts every request with three hundred tokens of its own instructions. Say each exchange adds another hundred tokens. An exchange is the customer's message plus the reply. The table shows what happens.

Table: How the size of a request grows over a conversation
| Message number | What is sent | Tokens |
| --- | --- | --- |
| 1 | The instructions and the first message | about 340 |
| 10 | The instructions, nine earlier exchanges and the new message | about 1,240 |
| 20 | The instructions, nineteen earlier exchanges and the new message | about 2,240 |

Look at the last row. The twentieth message costs more than six times the first. Add up a whole chat of twenty messages. About 25,800 tokens have been sent. If the chatbot remembered nothing, the total would be about 6,800.

It is like paying for an SMS where the whole old chat is stuck on the end. So the cost of a chat is not the cost of what the person typed. It is the cost of everything the app carries along.

## When the conversation stops fitting

The same sums hide a second problem. Anaya found it herself. The context window is like the model's desk. It has a fixed size. If a chat goes on long enough, it will not fit on the desk any more.

Something has to be left out. The model does not make that choice. The app does. The table shows the usual options, and what each one puts at risk.

Table: What an application can do with a long history
| Option | What it means | What it risks |
| --- | --- | --- |
| Drop the oldest messages | Keep only the most recent ones | Early facts the customer gave are lost |
| Replace old messages with a summary | Keep a short account of what was said | The summary may leave out something that mattered |
| Look up saved facts about the customer | Send only a few stored facts | The facts must be kept correct, and kept private |
| Keep the state of the task in a database | Send the state instead of the talk | The task must be something you can describe as a state |

Think of it as clearing a crowded desk. You can throw away the oldest papers. You can pin up a short note instead. Every product that offers memory has picked one of these and built it. The company that supplies the model gives you none of it.

## The thing she had not seen

Anaya finished her jalebi in silence. Then she spoke slowly, as she worked it out. The whole history goes along every time. So a number typed in message two is sent again with message three. And again with message four. And so on.

Imran nodded. It keeps going to the end of the chat. Say a customer types an Aadhaar number in message two of a twenty-message chat. That number travels to the outside company eighteen more times. Imran had seen this the night before, after Anaya left. He had waited for her to find it herself.

It changed her picture of the guard. (The guard is the tool that finds and hides personal details.) She had thought it looked at each new message as it arrived. But say a number is caught only in the newest message. If it is left sitting in the history, it goes out again with every message after it. It is like a secret note stuck in the ledger. It is read out again with every customer.

::: key Clean it before it is stored
The guard cannot look only at the newest line. It has two ways to cope. It can treat the whole history as something that might hold a secret, and check it on every call.

Or it can clean each line once, when it arrives. Then the cleaned version is what goes into the history. Anaya chose the second. She wrote it down as a design rule: clean it before it is stored, not only before it is sent.
:::

As they got up to leave, the owner put a small paper bag on the counter. "For the lady," he said. "Kaju katli. It is Thursday." Anaya laughed, for the first time in some weeks.

## Summary

A language model is stateless. It is like a goldfish. It keeps nothing between requests, and every call starts from nothing.

- A chatbot seems to remember because the app sends the chat history again with each new message. The product builds this memory, and pays for it.
- The history is sent again, so each message costs more than the one before. A chat's cost grows much faster than its length.
- A chat can outgrow the context window. Then the app can drop old messages, summarise them, look up stored facts, or keep the task's state. The app makes the choice.
- A detail typed once is sent again with every later message, unless it is cleaned before it is stored.

Next, Anaya turns to the words she can control: what she tells the model to do, and how she says it.

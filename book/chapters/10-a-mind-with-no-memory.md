---
title: A Mind With No Memory
summary: A sweet-shop owner who remembers every regular teaches a product manager why a chatbot does not, and what the difference does to her bill and to her problem.
course: ch15b
terms:
  - stateless | keeping nothing between requests: every call starts from nothing, and the model does not know you spoke a moment ago | 
  - conversation history | the earlier messages of a chat, which an app has to send again with each new message if it wants the model to seem to remember | 
---

The man who owned the sweet shop downstairs had never, in nineteen years, asked a regular what she wanted.

He knew. Mrs. Apte took a quarter kilo of kaju katli on Thursdays and would pretend each time to be surprised by the price. The boy from the pharmacy next door had one jalebi, hot, and paid in coins. If a stranger asked for "the usual", the owner would look at them kindly and say, "Forgive me, I don't know what that is yet."

Imran and Anaya had come down at four, as they sometimes did, to eat something fried while a problem rested. Imran had brought the laptop and set it on the glass counter between a tray of barfi and a ledger with a red cloth cover.

"I promised to explain why it cannot remember you," he said. "This is the best place in the building to do it."

## Meeting the machine for the first time, again

He opened the window from last night. He typed: *My name is Anaya and I work on loans.* The answer was friendly. *Nice to meet you, Anaya! How can I help with your loans today?*

Then he cleared the window, as if starting a new conversation, and typed: *What is my name?*

*I'm sorry, I don't have access to your name. Could you tell me?*

"It was talking to you a second ago," said Anaya.

"It was talking to *somebody* a second ago. The second call had no idea." He waved a hand at the owner, who was weighing laddoos with his back to them. "That man is stateful. He carries what happened yesterday into today. This is the opposite. It is *stateless*: it keeps nothing from one request to the next. Every call begins from nothing. It does not know you spoke to it a minute ago, and it does not know you at all."

"But the chatbot remembers," Anaya said. "I have had a conversation with it. It remembers what I said three messages ago."

"It doesn't. We do."

## The trick

He took the ledger from the counter, with a nod to the owner, who shrugged permission. It was a long book with a stiff spine. He opened it, flipped to a page full of columns, and held it up.

"Suppose you walked in and the man had no memory at all. Every time you spoke to him, you had to hand him this ledger first, open at the right page, so he could read what had been said. 'Aha. Mrs. Apte. Thursday. Kaju katli.' That is the trick. The model sees only what is on the table in the current request. So when you send your fifth message, the app sends the first four again, with the new one on the end."

He typed it out in the window to show her. First, *My name is Anaya and I work on loans.* Then the reply it had given. Then *What is my name?* All in one request, three messages long. The answer came back at once. *Your name is Anaya.*

The earlier messages, pasted back in with each new one, are called the *conversation history*, and the whole experience of a machine that remembers is made of this resending. The model knows nothing about it. What looks like memory is the app, carefully, handing over the ledger.

## What it costs to remember

Anaya, who had spent the past month thinking in terms of cost, saw it before he said it.

"Every message makes the next one bigger."

"Yes. And it is charged each time." Imran reached for a napkin; the shop was running out of them. "Let us say the chatbot starts every request with three hundred tokens of its own instructions. Say each exchange, the customer's message and the reply, adds a hundred tokens."

He wrote a short column.

| Message number | What is sent | Tokens |
| --- | --- | --- |
| 1 | the instructions and the first message | about 340 |
| 10 | the instructions, nine earlier exchanges, the new message | about 1,240 |
| 20 | the instructions, nineteen earlier exchanges, the new message | about 2,240 |

"The twentieth message costs more than six times the first. And the whole twenty-message conversation, added up, is about 25,800 tokens sent. If it remembered nothing, it would be about 6,800." He underlined the difference. "The cost of a conversation is not the cost of what the person typed. It is the cost of what the app has to carry."

There is a second limit hiding in the same arithmetic, and Anaya found it by herself. The context window is a fixed size. A conversation that goes on long enough will stop fitting. At that point the app has to decide what to leave out, and the decision is the app's, never the model's. It can drop the oldest messages. It can replace them with a summary. It can look up a few saved facts about the customer and send only those. It can keep the state of the task in a database and send that. Every product that offers "memory" has chosen one of these and built it, and the model vendor supplied none of it.

## The thing she had not seen

She finished her jalebi in silence. Then she put the napkin down, very carefully, as if it might spill.

"If the whole history is sent every time," she said, "then the number a customer typed in message two is sent again with message three."

"Yes."

"And message four. And five."

"All the way to the end of the conversation. Yes."

"So if someone types their Aadhaar number in the second message of a chat that goes on for twenty…"

"It is sent to the outside company eighteen more times." Imran said it gently, in the way people say things they have already realised on their own. "I saw it last night, after you left. I wanted you to find it yourself."

It changed the problem more than anything she had learned that month. She had been imagining the guard as a thing that looked at each new message. But a number hidden in message two and left visible in the history would be sent again, in full, with every message after it. The guard could not look only at the newest line. It had to treat the whole ledger, every time, as something that might contain a secret; or, better, it had to clean each line once, on arrival, so that the cleaned version was what went into the history. She wrote that down as a design rule: *clean it before it is stored, not just before it is sent.*

The owner, who had been listening to none of this, placed a small paper bag on the counter.

"For the lady," he said. "Kaju katli. It is Thursday."

Anaya looked at it, and at Imran, and laughed for the first time in some weeks.

## What to carry forward

A model keeps nothing between requests; it is stateless, and every call starts from nothing. What feels like a chatbot remembering is the app sending the conversation history again, with the new message at the end. That makes every message cost more than the last, and a long enough conversation will stop fitting in the context window, at which point the app, not the model, has to choose what to leave out. Memory in any product is something the product builds and pays for. And it has a consequence for privacy that is easy to miss: a detail typed once is sent again with every later message, unless it is cleaned before it is stored.

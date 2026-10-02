---
title: The First Conversation
summary: An engineer lets the product manager watch a message go to a model and come back, and what she sees on the receipt matters as much as what she reads in the answer.
course: ch1
terms:
  - API | a way for one program to ask another for something in a fixed format, like an order slip handed across a counter | APIs
  - JSON | a plain way of writing information as labels and values inside curly braces, which nearly every API uses | 
  - API key | a long secret code that tells a provider who is asking, and whom to bill; anyone who has it can spend your money | API keys
  - usage block | the part of every reply that says how many tokens went in and how many came out, which is what you are charged for | usage
---

Imran waited until the office had emptied, partly because he disliked an audience and partly because, as he put it, a demonstration should never have to compete with the sound of other people's keyboards.

He had one window open. In it was a text box, a button, and a grey area below where something would eventually appear. "I want you to see the whole round trip," he said. "I will keep it as boring as I can."

"Boring is good."

"Boring is how you can tell it is real."

## An order slip across a counter

The first thing to understand, he said, is that nobody types to the model the way a person types to a friend. A program does it for them, through a doorway called an *API*.

He drew a counter. On one side, a customer with a slip of paper; on the other, a kitchen. The customer fills in the slip, which has fixed boxes, and hands it over. The kitchen reads the same boxes on every slip, does its work, and hands back a plate. The customer never sees the kitchen, and the kitchen does not care who the customer is, only whether the slip is filled in correctly. An API is that counter and that slip. It lets one program ask another for something, in a fixed format both understand.

Sahaj's chatbot used one. When a customer pressed send, the app filled in a slip, sent it to the outside company that ran the model, and showed the plate when it came back.

The slip was written in a plain format called *JSON*, which just means information written as labels and values inside curly braces. Imran pasted one into the window. It was shorter than Anaya had expected.

```
{
  "messages": [
    { "role": "user",
      "content": "What is the late fee on an electricity bill?" }
  ]
}
```

"That is the request," he said. "A list of messages. Each has a role, and for now there are two. *User* is whoever is asking. *Assistant* is the model's own reply. There is a third, which we will meet another day. That's it. There is nothing else on the slip."

Anaya looked at it. The thing she had imagined as a mind came down to a list, and the list came down to one line. She felt slightly cheated and then, a moment later, relieved.

## The key to the till

Before he pressed anything, Imran turned the monitor a few degrees away from her.

"Every slip has to carry something else," he said, "and it is the single most dangerous line in this whole business." He did not show it. It was a long string of letters and digits, and it was called an *API key*. A key tells the provider who is asking and whom to bill. Anyone who holds it can send requests and spend your money, and the provider's records will say that you did.

It must therefore live nowhere a stranger could see it. Not in the code of the app, where anyone who opens the page can read it. Not in a shared folder. Not in a message to a colleague. Imran told her about a developer he had once known who had pasted his key into a public project by accident and found, the next morning, a bill for several lakh rupees. "The key to the till," he said. "You do not leave it on the counter."

## Press the button

He pressed the button. A second passed. Text arrived in the grey area, a tidy answer about late fees being typically a small percentage of the amount due, and suggesting she check her bill.

"That's a made-up policy," Anaya said.

"That is a general answer. It doesn't know our policy because nobody told it. Look at the rest of what came back."

Under the answer was a block of numbers that he had pointed at before.

```
"usage": {
  "tokens_in": 19,
  "tokens_out": 47
}
```

This, the *usage block*, comes with every reply. It says how many tokens went in and how many came out, and it is what you are billed on. A provider's prices are quoted per million tokens, often at one rate for what you send and a higher rate for what comes back.

"Nineteen in. Forty-seven out." Imran took the pencil. "Say the input costs two hundred and fifty rupees per million and the output a thousand, which are my numbers and not anyone's real ones. So nineteen at two-fifty is half a paisa, and forty-seven at a thousand is under five paise. This one call cost about five paise. Now imagine the real chatbot, with all its instructions sent every time, and the customer's whole conversation on top. A realistic call might be five hundred tokens in and a hundred and fifty out."

He wrote it down. Five hundred times two hundred and fifty, over a million, is twelve and a half paise. A hundred and fifty at a thousand is fifteen paise. About twenty-eight paise a call. A hundred thousand calls a month came to twenty-seven thousand five hundred rupees.

"Is that a lot?"

"For a company this size, it is a number somebody will ask about. Which is the point. I would like you to be the person who can say it before they ask."

There was a second lesson in the same arithmetic, and Imran put it in a sentence he had clearly said before. *Every line of instruction you add is charged again on every call.* Whatever the machine is told at the start of a request is read, and paid for, each time.

## The question she wanted to ask

"Go on," said Imran. "Ask it something. Something it cannot possibly know."

Anaya had been waiting for that. She typed the name of a company that did not exist, Rastogi Finance, which she had invented while brushing her teeth, and asked what its refund policy was.

The answer arrived in under two seconds. It was courteous and detailed. Rastogi Finance, it said, allowed refunds within fourteen days of a payment, provided the request was submitted through the app, and processed them within five to seven working days. It added a sentence of regret about any inconvenience.

She stared at it. There was no such company. There was no such policy. It had made up a plausible company's plausible policy with every sign of knowing what it was doing.

"It has never heard of them," she said.

"No."

"And it did not say so."

"It predicts the most likely text." Imran leaned back. "After 'what is the refund policy of', the most likely continuation is a refund policy. 'I have no information about this' is a possible continuation but, in the writing it learned from, an unusual one. Saying 'I don't know' is a behaviour that has to be trained in and tested for, and it does not always hold."

This was the lesson of the evening and she could feel it settling. A correct answer and an invented one read exactly the same. Confidence in the tone is no evidence of anything. The reason she had to be able to measure a tool's mistakes was not that the mistakes would be obvious; it was that they would not be.

She thought of Pooja Nair, who had trusted the chatbot's "verification". She thought of how it sounded. It sounded like a person who knew.

## Anaya's notes that night

She went home and, because she was getting into the habit, wrote the evening up in her own words, which was how she checked she understood it.

*A program talks to the model through an API, by sending a slip in a fixed format. The slip is JSON. It holds a list of messages. Each message has a role. The key that identifies us is a secret and costs money if anyone else has it. Each reply comes with a usage block that tells us what to pay. The cost of one call is tiny; the cost of a hundred thousand is a line in a budget. The model can invent an answer as fluently as it can give a true one.*

She read it back, and noticed what was missing. It said nothing about whether the model could remember her.

She had asked Imran that, as she was leaving. He had said, with the faint smile of a man handing over a surprise, "Come in tomorrow. We should talk about why it can't."

## What to carry forward

A program reaches a model through an API, which works like an order slip passed across a counter, written in a plain format called JSON that holds a list of messages, each with a role. The secret that identifies you, the API key, has to be kept where no stranger can find it. Every reply carries a usage block that shows what went in and what came out, and that is what you pay for, so the cost of a call can be worked out before anyone builds anything. And the machine produces fluent answers whether or not it has anything to base them on, which is why a confident tone is not evidence.

---
title: The First Conversation
summary: An engineer shows the product manager a single request to a language model and the reply that comes back. The receipt attached to the reply turns out to teach as much as the answer. You learn about APIs, JSON, API keys, the usage block, and why a confident answer is not evidence.
course: ch1
goals:
  - describe how a program asks a language model for something, through an API
  - read a simple JSON request and understand what a role is
  - explain why an API key must be kept secret
  - work out the cost of a call from its usage block, and explain why a fluent answer is not evidence that it is true
terms:
  - API | a way for one program to ask another for something in a fixed format, like an order slip handed across a counter | APIs
  - JSON | a plain way of writing information as labels and values inside curly braces, which nearly every API uses | 
  - API key | a long secret code that tells a provider who is asking, and whom to bill; anyone who has it can spend your money | API keys
  - usage block | the part of every reply that says how many tokens went in and how many came out, which is what you are charged for | usage
---

One evening, after the office had emptied, Imran Qureshi opened a single window on his screen. It had a text box, a button, and a grey area below them where something would appear. He wanted Anaya to see the whole round trip, from a question leaving a program to an answer coming back. He kept the demonstration deliberately plain.

This chapter reproduces it. Every product built on a language model rests on the same exchange. A product manager who has seen one exchange in full will understand most of what engineers mean when they talk about cost, security and reliability.

## The case: a round trip

The demonstration had four parts. There was the request that goes out, and the key that authorises it. There was the reply that comes back with its receipt. And there was a question that the machine could not possibly answer. The fourth part taught more than the first three.

## An order slip across a counter

Nobody types to a language model the way a person types to a friend. A program does it, through a doorway called an *API*.

Imran drew a counter. On one side stands a customer holding a slip of paper. On the other side is a kitchen. The slip has fixed boxes. The customer fills them in and hands the slip over. The kitchen reads the same boxes on every slip, does its work, and returns a plate. The customer never sees the kitchen, and the kitchen only cares whether the slip is filled in correctly.

::: def API
A way for one program to ask another for something in a fixed format, like an order slip handed across a counter.
:::

Sahaj's chatbot used one. When a customer pressed send, the app filled in a slip and sent it to the outside company that ran the model. Then it showed the plate when it came back.

The slip was written in *JSON*, a plain format for information, written as labels and values inside curly braces. Imran pasted one into the window. It was shorter than Anaya had expected.

```
{
  "messages": [
    { "role": "user",
      "content": "What is the late fee on an electricity bill?" }
  ]
}
```

The request is a list of messages, and each message has a role. For now there are two roles. *User* is whoever is asking, and *assistant* is the model's own reply. A third role exists, and Chapter 11 introduces it.

Nothing else is on the slip. The thing Anaya had pictured as a mind came down to a list, and the list came down to one line.

## The key to the till

Every request carries something else. Imran turned the monitor slightly away before he showed it, because it is the most dangerous line in the whole arrangement.

It was a long string of letters and digits called an *API key*. A key tells the provider who is asking and whom to bill. Anyone who holds it can send requests and spend the owner's money, and the provider's records will say that the owner did it.

::: watch Where a key must never be
A key must not appear in the code of an app, where anyone who opens the page can read it. It must not sit in a shared folder or in a message to a colleague. Imran told her about a developer who pasted his key into a public project by accident. The next morning he found a bill for several lakh rupees. A key is the key to the till, and you don't leave it on the counter.
:::

## The reply and its receipt

Imran pressed the button. After a second, text appeared. It was a tidy answer saying that late fees are typically a small percentage of the amount due, with a suggestion to check the bill.

Anaya said that this was a made-up policy. Imran said it was a general answer. The model didn't know Sahaj's policy, because nobody had told it.

Beneath the answer was a block of numbers.

```
"usage": {
  "tokens_in": 19,
  "tokens_out": 47
}
```

This is the *usage block*, and it comes with every reply. It says how many tokens went in and how many came out, and it is what the customer is billed on. Providers quote prices per million tokens. Often they charge one rate for what you send and a higher rate for what comes back.

The table turns the numbers into rupees.

Table: The cost of one call, using made-up prices
| | Tokens | Price per million | Cost |
| --- | --- | --- | --- |
| The demonstration: tokens in | 19 | ₹250 | about half a paisa |
| The demonstration: tokens out | 47 | ₹1,000 | under 5 paise |
| A realistic chatbot call: tokens in | 500 | ₹250 | 12.5 paise |
| A realistic chatbot call: tokens out | 150 | ₹1,000 | 15 paise |

The prices are Imran's. He chose them to keep the arithmetic easy, and they aren't any provider's. The demonstration cost about five paise.

A realistic call is different. The chatbot's instructions are sent each time, with the customer's message on top, and the call costs about 28 paise. A hundred thousand such calls a month come to ₹27,500. For a company of Sahaj's size, that's a figure somebody will ask about. Imran wanted Anaya to be the person who could say it first.

There's a second lesson in the same arithmetic. Every line of instruction you add to a request is charged again on every call. Whatever the model is told at the start is read, and paid for, each time.

## A question it could not answer

Imran asked Anaya to put a question to the model that it could not possibly know. She typed the name of a company that didn't exist, Rastogi Finance, which she had invented while brushing her teeth. She asked for its refund policy.

The answer arrived in under two seconds, courteous and detailed. Rastogi Finance, it said, allowed refunds within fourteen days of payment if the request was made through the app, and processed them within five to seven working days. It added a sentence of regret for any inconvenience.

There was no such company and no such policy.

Why does this happen? Think about what the model does. After "what is the refund policy of", the most likely continuation is a refund policy. "I have no information about this" is also possible, but in the writing the model learned from, it's an unusual thing to say. Saying "I don't know" is a behaviour that has to be trained in and tested for, and it doesn't always hold.

::: key A confident tone proves nothing
A correct answer and an invented one read exactly alike. That's the reason to measure a tool's mistakes: they won't be obvious. Anaya thought of Pooja Nair, who had trusted the chatbot's request for "verification", and of how it had sounded, like a person who knew.
:::

## What she took away

That night Anaya wrote the evening up in her own words, to check that she understood it. This is what she wrote.

- A program talks to the model through an API, by sending a slip in a fixed format.
- The slip is JSON, and it holds a list of messages, each with a role.
- The key that identifies the company is a secret, and it costs money if anyone else has it.
- Each reply carries a usage block that shows what to pay.
- One call is nearly free, and a hundred thousand are a line in a budget.
- The model can invent an answer as fluently as it can give a true one.

She read it back and saw what was missing. It said nothing about whether the model could remember her. She had asked Imran as she left, and he had told her to come in the next day and talk about why it could not.

## Summary

A program reaches a language model through an API, which works like an order slip passed across a counter in a fixed format.

- JSON is the plain format for the slip: labels and values inside curly braces. A request is a list of messages, each with a role.
- An API key identifies the caller and the account to be billed. Keep it secret, because anyone who holds it can spend the owner's money.
- Every reply carries a usage block. Tokens in and out give you the cost of a call before anything is built. Instructions are charged on every call.
- The model produces fluent text whether or not it has anything to base it on, so a confident answer is not evidence.

Next, Anaya and Imran look at why the model can't remember her from one request to the next.

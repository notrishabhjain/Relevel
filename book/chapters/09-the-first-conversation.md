---
title: The First Conversation
summary: An engineer shows the product manager one request to a language model and the reply that comes back. The bill that comes with the reply teaches as much as the answer. You learn about APIs, JSON, how to read a few lines of Python, API keys, the usage block, and why a sure-sounding answer is not proof.
course: chpy ch1
goals:
  - describe how a program asks a language model for something, through an API
  - read a simple JSON request and understand what a role is
  - explain why an API key must be kept secret
  - work out the cost of a call from its usage block, and explain why a smooth answer is not proof that it is true
terms:
  - API | an order slip handed across a counter: a way for one program to ask another for something, in a fixed format | APIs
  - JSON | a form written as labels and values inside curly brackets; nearly every API uses it | 
  - API key | a secret password for the model, and it also tells the company whom to bill: a long code that says who is asking; anyone who has it can spend your money | API keys
  - usage block | the bill that comes with each reply: how many tokens went in and how many came out, which is what you are charged for | usage
  - Python | the programming language most AI work is written in; for a product manager, a way to say exactly what an experiment does | 
---

One evening the office had emptied. Imran Qureshi opened a single window on his screen. It had a text box, a button, and a grey area below them where something would appear. He wanted Anaya to see the whole round trip. A question leaves a program. An answer comes back. He kept the demonstration plain on purpose.

This chapter shows it again. Every product built on a language model rests on this same exchange. Suppose a product manager has seen one exchange from start to finish. Then she understands most of what engineers mean when they talk about cost, security and reliability.

## The case: a round trip

Think of a postal round trip: a letter goes out, a reply comes back. The demonstration had four parts. There was the request that goes out, and the key that allows it. There was the reply that comes back with its bill. And there was a question the machine could not possibly answer. The fourth part taught more than the first three.

## An order slip across a counter

Nobody types to a language model the way a person types to a friend. A program does it. It uses a doorway called an *API*.

Imran drew a counter. On one side stands a customer holding a slip of paper. On the other side is a kitchen. The slip has fixed boxes. The customer fills them in and hands the slip over. The kitchen reads the same boxes on every slip. It does its work and sends back a plate. The customer never sees the kitchen. The kitchen only checks that the slip is filled in correctly.

::: def API
A way for one program to ask another for something in a fixed format, like an order slip handed across a counter.
:::

Sahaj's chatbot used one. A customer pressed send. The app filled in a slip and sent it to the outside company that ran the model. When the plate came back, the app showed it.

The slip was written in *JSON*. JSON is a plain way to write information as labels and values inside curly braces. It is like a form with named boxes. Imran pasted one into the window. It was shorter than Anaya had expected.

```
{
  "messages": [
    { "role": "user",
      "content": "What is the late fee on an electricity bill?" }
  ]
}
```

The request is a list of messages. A list is a row of boxes, in order. Each message has a role (who is speaking). For now there are two roles. *User* is whoever is asking. *Assistant* is the model's own reply. A third role exists. Chapter 11 introduces it.

Nothing else is on the slip. Anaya had pictured a mind. It came down to a list. The list came down to one line.

In the program itself, the slip was a few lines of Python. Python is a programming language, the language most AI work is written in. Anaya had never read code. Imran did not ask her to write any. He asked her to read it the way she would read a form.

Square brackets held a list: several things, in order. Curly braces held labels and their values, like the boxes on the slip. A name followed by an equals sign gave something a name, so the next line could use it. It is like putting a label on a box. A dot reached inside something. So `response.usage` meant the bill part of the reply. Four shapes covered almost every line on the screen. None of them needed a programmer to explain.

## The key to the till

Every request carries one more thing. Imran turned the monitor slightly away before he showed it. It is the most dangerous line in the whole arrangement.

It was a long string of letters and digits called an *API key*. Think of it as a secret password for the model. It tells the provider (the company that runs the model) who is asking and whom to bill. Anyone who holds it can send requests and spend the owner's money. The provider's records will say the owner did it.

::: watch Where a key must never be
A key must not appear in the code of an app. Anyone who opens the page can read it there. It must not sit in a shared folder. It must not go in a message to a colleague.

Imran told her about a developer who pasted his key into a public project by accident. The next morning he found a bill for several lakh rupees. A key is the key to the till. You do not leave it on the counter.
:::

## The reply and its receipt

Imran pressed the button. After a second, text appeared. It was a tidy answer. It said late fees are typically a small percentage of the amount due. It also suggested checking the bill.

Anaya said this was a made-up policy. Imran said it was a general answer. The model did not know Sahaj's policy, because nobody had told it.

Under the answer was a block of numbers.

```
"usage": {
  "tokens_in": 19,
  "tokens_out": 47
}
```

This is the *usage block*. Think of it as the bill that comes with each reply. It comes with every reply. It says how many tokens (small pieces of text) went in and how many came out. The customer is billed on this. Providers quote prices per million tokens. Often they charge one rate for what you send and a higher rate for what comes back.

The table turns the numbers into rupees.

Table: The cost of one call, using made-up prices
| | Tokens | Price per million | Cost |
| --- | --- | --- | --- |
| The demonstration: tokens in | 19 | ₹250 | about half a paisa |
| The demonstration: tokens out | 47 | ₹1,000 | under 5 paise |
| A realistic chatbot call: tokens in | 500 | ₹250 | 12.5 paise |
| A realistic chatbot call: tokens out | 150 | ₹1,000 | 15 paise |

The prices are Imran's. He chose them to keep the sums easy. They are not any provider's. The demonstration cost about five paise.

A realistic call is different. The chatbot's instructions go with every call, and the customer's message goes on top. Such a call costs about 28 paise. A hundred thousand such calls a month come to ₹27,500. For a company of Sahaj's size, somebody will ask about that figure. Imran wanted Anaya to be the person who could say it first.

The same sums teach a second lesson. Every line of instruction you add to a request is charged again on every call. Whatever the model is told at the start is read, and paid for, each time. It is like paying for every word of an SMS, each time you send it.

## A question it could not answer

Imran asked Anaya to put a question to the model that it could not possibly know. She typed the name of a company that did not exist: Rastogi Finance. She had made it up while brushing her teeth. She asked for its refund policy.

The answer came in under two seconds. It was polite and detailed. Rastogi Finance, it said, allowed refunds within fourteen days of payment if the request was made through the app. It processed them within five to seven working days. It added a sentence of regret for any trouble.

There was no such company. There was no such policy.

Why does this happen? Think of the parrot that has read a whole library. After "what is the refund policy of", the likeliest next words are a refund policy. "I have no information about this" is also possible. But in the writing the model learned from, people rarely say it. Saying "I don't know" is a habit that has to be trained in and tested for. Even then it does not always hold.

::: key A confident tone proves nothing
A correct answer and an invented one read exactly alike. That is why you must measure a tool's mistakes. They will not be obvious. Anaya thought of Pooja Nair, who had trusted the chatbot's request for "verification". She remembered how it had sounded: like a person who knew.
:::

## What she took away

Think of a student writing notes after class, to check she understood. That night Anaya wrote up the evening in her own words. This is what she wrote.

- A program talks to the model through an API, by sending a slip in a fixed format.
- The slip is JSON. It holds a list of messages, each with a role.
- The key that identifies the company is a secret. If anyone else has it, it costs money.
- Each reply carries a usage block that shows what to pay.
- One call is nearly free. A hundred thousand calls are a line in a budget.
- The model can invent an answer as smoothly as it gives a true one.

She read it back and saw what was missing. It said nothing about whether the model could remember her. She had asked Imran as she left. He had told her to come in the next day and talk about why it could not.

## Summary

Think of the counter and the order slip once more. A program reaches a language model through an API. It works like a slip passed across a counter, in a fixed format.

- JSON is the plain format for the slip: labels and values inside curly braces. A request is a list of messages, each with a role.
- An API key says who is asking and which account to bill. Keep it secret. Anyone who holds it can spend the owner's money.
- Every reply carries a usage block. Tokens in and out give you the cost of a call before anything is built. Instructions are charged on every call.
- The model writes smooth text whether or not it has anything to base it on. So a confident answer is not proof.

Next, Anaya and Imran look at why the model cannot remember her from one request to the next.

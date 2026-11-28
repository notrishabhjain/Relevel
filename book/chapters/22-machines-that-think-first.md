---
title: Machines That Think First
summary: Some models work out the answer on rough paper before they reply. They get the hard cases right, but they take eleven seconds. This chapter covers reasoning models, what thinking costs, latency, streaming, and a design where the costly careful judge never makes a customer wait.
course: ch11 ch115
goals:
  - say what a reasoning model does and which jobs it helps with
  - weigh the extra accuracy of reasoning against its cost in money and in waiting time
  - say what latency is and name three ways to make a wait easier
  - say why a decision cannot be streamed, and plan a path where careful judging happens off the main route
terms:
  - reasoning model | a student who works on rough paper before writing the answer; the model tries a way, checks it, then replies, and you pay for that rough work on every request, in money and in waiting time | reasoning models
  - latency | waiting time, like waiting for your chai after you order; the gap between asking and getting an answer, which users feel as speed | 
  - streaming | the chai-wala saying "two minutes" while he works; the answer reaches the screen a few words at a time as it is written, not all at the end | stream, streams
---

In late May, Anaya was coming home by train from a meeting with the company's bankers. At ten past six the train stopped near Lonavala. It stayed stopped for forty minutes. Nobody said anything. At twenty to seven a voice said a signal had failed ahead. The train would move in ten to fifteen minutes.

The news was not good. Forty minutes were gone, and more were coming. Yet the whole carriage relaxed. The wait was not shorter. But now it had a shape.

She was still thinking about this when Imran Qureshi phoned. He had run an experiment on the hardest sentences in the answer key (the list of questions with the right answers written down). You will see what he found. You will also see what the train had to do with it.

## The case: eleven seconds

For a month, Imran had studied the sentences that the cheap model kept getting wrong. One was an Aadhaar number spoken in words. One was a set of twelve digits that might be an order number. One was a sentence that points to a person without any number in it.

That day he tried them on a different kind of model. It is like a student who works on rough paper before writing the final answer. The model tries a way. It checks it. It backs up if it must. Only then does it reply. The rough paper is usually hidden from the user. But you are charged for it.

Such a model is called a *reasoning model*. Here is why it matters. A model's accuracy (how often it is right) is not fixed when the model is made. You can buy more of it for each question. You do this by letting the machine work for longer.

## What thinking costs

Imran read the results down the phone.

Table: The same thirty hard cases and thirty easy cases, with and without reasoning
| | Ordinary model | Reasoning model |
| --- | --- | --- |
| Hard cases correct (of 30) | 19 | 26 |
| Easy cases correct (of 30) | 30 | 30 |
| Time per case | about 1.25 seconds | about 11 seconds |
| Relative cost per case | 1 | about 6, because the hidden working is charged like any other output |

On the hard cases, reasoning helped a lot. On the easy cases, it gave nothing. It cost six times as much.

That evening, Anaya wrote on the back of her train ticket what she had learned. Reasoning is like paying for a taxi on every trip. You pay each time, in money and in time. For many jobs it buys nothing.

It helps when the answer must be worked out. Think of steps that depend on each other, sums, plans, code, or a real puzzle that needs sorting out. It is wasted when the answer is already in the input. Then the model only has to find it or change its shape.

That covers looking something up, pulling out one field (one labelled piece of information), sorting into a group, and tidying the format. It also covers summarising a passage you gave. The twelve digits spoken as words needed working out. The plain message with a mobile number and an email did not.

Imran sent three cautions in a message.

Table: Three cautions about reasoning models
| Caution | Explanation |
| --- | --- |
| Reasoning does not create evidence | Given the wrong document, the model thinks hard and long about the wrong document. It gives a more convincing wrong answer than a cheap model would |
| Waiting is a product problem | The user feels a slow answer, whatever the reason for it |
| It is not all or nothing | Most providers (the companies that sell the models) let the developer pick how much reasoning to use. So you can choose for each kind of request, not once for the whole product |

## The decision that cannot wait

The train reached Pune, and the problem had taken shape. On Saturday morning, Anaya laid it out for Imran.

The guard sits at the door of a shop. A customer types a message. The guard checks it. Only then does the message go on. If the guard took eleven seconds, the customer would wait eleven seconds for every reply. The rule was that the guard may add at most a third of a second.

The waiting time between asking and getting an answer is called *latency*. It is like waiting for your chai after you order. Users feel it more than almost anything else in a product. Anaya saw a second problem too. The guard's answer could not be shown to the customer in pieces.

## Easier ways to wait

How fast a reply feels depends mostly on when something first appears. Imran listed three ways to make a wait easier. The train had used the second one by accident.

Table: Three ways to make a wait easier
| Method | What it does | Comment |
| --- | --- | --- |
| Start early | Sends the answer to the screen as it is written, a few words at a time. This is *streaming* | The full answer takes just as long, but the customer starts reading in the first second. It costs nothing and helps more than anything else |
| Say what is happening | Replaces a spinner with a statement of the task, such as "Reading six documents" | A wait that matches a visible task makes sense. This was the announcement on the train |
| Move the wait elsewhere | Runs a long job in the background and tells the person when it is done | Teams avoid it because it feels like giving in. For anything over about ten seconds it is usually right, because it removes the problem |

Think of the chai-wala. He says "two minutes" and starts pouring. That is streaming. Which method suits the guard? It depends on one question. Is a half answer useful?

A person can start reading the first sentence of an explanation. A decision is different. It says hide it, or do not hide it. Half of a decision is a hazard. Nobody should act on a field that is still being written.

::: key Show a part only if it is final
This is why the schema (the form with fixed boxes) had to come first. It is safe to show part of a reply only if that part is already final. So the guard cannot stream its answer. It must finish before the chat can use it.
:::

## Which cases go where

The team spent the afternoon on the design that followed. It used everything they had learned that month.

The quick parts run live on every message. These are the pattern checker and the name-and-place finder. Between them they handle most messages in a tiny fraction of a second.

A few messages stay unclear. For these, the guard does not wait for the slow, careful judge. It leans towards the cheaper mistake, as the team had agreed in April. It will mask (cover up) the doubtful part at once. So the chat carries on safely.

The reasoning model looks at those cases later, in the background. It decides what should have happened. If a masked piece was harmless, a person can see it put back. If it was a leak, it is already covered.

Imran wrote the rule in the margin of the PRD (the recipe card for the product). Reasoning is only for the unsure few, and never while the customer waits. The team would know the design was wrong in two cases. One is if the cheap path scored the same on those cases. The other is if the careful path ever had to finish before a reply could go out.

Neither of them said the question that worried them both. Where would the careful judge run? Suppose the sentence it read was one of the hard ones. It might hold the very thing the guard was built to hide. Could the sentence leave the building? Or must the judge live inside? That was a question for another day. It was nearly a question for Lakshmi.

## Two numbers, not one

Before they left, Imran split the wait into two numbers. He wrote them on the whiteboard.

The first was **TTFT**, the time to first token. It is how long the customer waits before the first word appears. It is like the wait before the chai-wala starts pouring. The model must first read the whole prompt. That reading step is called prefill. So every page added to the prompt adds to this wait.

The second was **TPOT**, the time per output token. It is the gap between one word and the next, once the words begin to flow. It is how fast the chai-wala pours. Some tools call it inter-token latency.

"Customers forgive a fast pour," Imran said. "They do not forgive a long wait at the counter." Last week the team had added the full policy to every prompt. The pour had stayed fast. The start had slowed down.

He added one more line. A busy server can cut a long prompt into pieces, and read them between other people's words. This is called chunked prefill. One reply starts a little later, but no reply freezes.

*Last verified: November 2026. The sources and their dates are listed in the app, in Appendix E of the reference pages.*

## Summary

A reasoning model works on rough paper before it answers. It is better at problems that must be worked out. It is no better at looking things up, sorting, or reshaping what it was given. You pay for its rough work, in money and in time, on every request.

- It does not create evidence. Given the wrong document, it thinks carefully about the wrong document.
- The user feels latency. Streaming shows an answer early. Saying what is happening makes a wait make sense. A long job can move to the background.
- A decision cannot be streamed, because half of a decision is a hazard.
- A sensible design uses the costly machine only on the cases that need it. It never uses it while a customer waits.
- Measure the wait as two numbers: TTFT (how long before the first word) and TPOT (the gap between words). A longer prompt slows the start, not the pour.

Next, a customer in Nashik is quoted the wrong late fee, and Anaya goes back to search to find out why.

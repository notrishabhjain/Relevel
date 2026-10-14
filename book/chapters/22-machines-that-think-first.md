---
title: Machines That Think First
summary: A model that works out its answer before giving it gets the hard cases right, and takes eleven seconds to do so. This chapter covers reasoning models, what thinking costs, latency, streaming, and a design in which the expensive judgement never makes a customer wait.
course: ch11 ch115
goals:
  - explain what a reasoning model does and which jobs it helps with
  - weigh the extra accuracy of reasoning against its cost in money and in waiting time
  - define latency and name three ways of making a wait easier to bear
  - explain why a decision can’t be streamed, and design a path where careful judgement happens off the critical route
terms:
  - reasoning model | a model that writes out its working, trying an approach and checking it, before it gives the answer; you pay for that working on every request, in money and in waiting time | reasoning models
  - latency | the time between asking and getting an answer, which users feel as speed | 
  - streaming | sending an answer to the screen piece by piece as it is written, instead of waiting until it is complete | stream, streams
---

In late May, Anaya was returning by train from a meeting with the company’s bankers. At ten past six the train stopped near Lonavala, and it stayed stopped for forty minutes. Nobody explained anything. At twenty to seven a voice announced that a signal had failed ahead, and that the train would move in ten to fifteen minutes.

The news wasn’t good. Forty minutes were already lost, and more were coming. Yet the whole carriage visibly relaxed. The wait hadn’t become shorter. It had acquired a shape.

She was still thinking about this when Imran Qureshi phoned to report an experiment on the hardest sentences in the answer key. In this chapter you’ll see what he found, and what the train had to do with it.

## The case: eleven seconds

For a month, Imran had been studying the sentences that the cheap model kept getting wrong. There was the Aadhaar number spoken in words, and the twelve digits that might be an order number. There was also the sentence that identifies a person without any number in it.

That day he had tried them on a different kind of model, one that writes out its working before it answers. It tries an approach, checks it, backs up if it has to, and only then gives its reply. The working is usually hidden from the user, and you are charged for it.

A model that does this is a *reasoning model*. Here is why it matters. Accuracy doesn’t have to be fixed at the moment the model was made. You can buy more of it for each question, by letting the machine work for longer.

## What thinking costs

Imran read the results down the phone.

Table: The same thirty hard cases and thirty easy cases, with and without reasoning
| | Ordinary model | Reasoning model |
| --- | --- | --- |
| Hard cases correct (of 30) | 19 | 26 |
| Easy cases correct (of 30) | 30 | 30 |
| Time per case | about 1.25 seconds | about 11 seconds |
| Relative cost per case | 1 | about 6, because the hidden working is charged like any other output |

On the hard cases, reasoning was a big improvement. On the easy cases, it bought nothing and cost six times as much.

That evening, Anaya wrote down what she had understood on the back of her train ticket. Reasoning is a purchase you make on every request, and you pay for it in money and in time. For many jobs it buys nothing.

It helps when the answer has to be worked out. Examples are steps that depend on one another, sums, plans, code, and a real ambiguity that needs resolving. It is wasted when the answer is already in the input and only needs finding or reshaping. That covers looking something up, pulling out a field, sorting into a category, formatting, and summarising a passage you supplied. The twelve digits spoken as words needed working out. The ordinary message with a mobile number and an email did not.

Imran sent three cautions in a message.

Table: Three cautions about reasoning models
| Caution | Explanation |
| --- | --- |
| Reasoning does not create evidence | Given the wrong document, the model reasons carefully and at length from the wrong document. It produces a more convincing wrong answer than a cheap model would |
| Waiting is a product problem | The user feels a slow answer, whatever the reason for it |
| It is not all or nothing | Most providers let the developer choose how much reasoning to use, so you can decide for each type of request, and not once for the whole product |

## The decision that cannot wait

By the time the train reached Pune, the problem had taken shape. On Saturday morning, Anaya laid it out for Imran.

The guard sits at the door. A customer types a message, the guard examines it, and only then does the message go on. If the guard took eleven seconds, the customer would wait eleven seconds for every reply. The requirement was that the guard add no more than a third of a second.

The time between asking and getting an answer is called *latency*. Users feel it more sharply than almost anything else about a product. Anaya also saw a second difficulty. The guard’s output couldn’t be shown to the customer piece by piece.

## Easier ways to wait

How fast a response feels depends mostly on when something first appears. Imran listed three ways to make a wait easier. The train had used the second one without meaning to.

Table: Three ways to make a wait easier
| Method | What it does | Comment |
| --- | --- | --- |
| Start early | Sends the answer to the screen as it is written, a few words at a time. This is *streaming* | The full answer takes just as long, but the customer starts reading in the first second. It costs nothing and helps more than anything else |
| Say what is happening | Replaces a spinner with a statement of the task, such as "Reading six documents" | A wait that matches a visible task makes sense. This was the announcement on the train |
| Move the wait elsewhere | Runs a long job in the background and tells the person when it is done | Teams avoid it because it feels like giving in. For anything over about ten seconds it is usually right, because it removes the problem |

Which one suits the guard depends on one question. Is a partial answer useful? A person can start reading the first sentence of an explanation. A decision is different: hide it, or don’t hide it. Half of a decision is a hazard, and nobody should act on a field that hasn’t finished being written.

::: key Show partial output only if it is final
This is why the schema had to come first. It is only safe to show part of a reply if the part you can see is already final. So the guard can’t stream its answer. It must finish before the chat can use it.
:::

## Which cases go where

The team spent the afternoon on the design that followed. It used everything they had learned that month.

The quick parts would run live on every message: the pattern checker and the name-and-place finder. Between them they handled the great majority of messages in a fraction of a second. For the few messages they couldn’t decide, the guard would not wait for the slow, careful judge. It would lean towards the cheaper mistake, as the team had settled in April, and mask the doubtful part at once so the chat could carry on safely.

The reasoning model would look at those cases afterwards, in the background, and decide what should have happened. If a masked piece turned out to be harmless, a person could see it restored. If it turned out to be a leak, it was already covered.

Imran wrote the rule in the margin of the PRD: reasoning only for the unsure few, and never while the customer is waiting. The team would know the design was wrong if the cheap path scored the same on those cases. They would also know it if the careful path ever had to finish before a reply could be sent.

Neither of them mentioned the question that troubled them both. Where would the careful judge run? If the sentence it read was one of the hard ones, it might contain the very thing the guard existed to hide. Could it be allowed to leave the building, or would it have to live inside it? That was a question for another day, and nearly a question for Lakshmi.

## Summary

A reasoning model writes out its working before it answers. It is better at problems that must be worked out. It is no better at looking things up, sorting, or reshaping what it was given. Its working is paid for in money and time on every request.

- It doesn’t create evidence. Given the wrong document, it reasons carefully from the wrong document.
- Latency is felt by the user. Streaming shows an answer early, saying what is happening makes a wait make sense, and a long job can be moved to the background.
- A decision can’t be streamed, because half of a decision is a hazard.
- The sensible design uses the expensive machine only on the cases that need it, and never while a customer is waiting.

Next, you’ll go back to search and see how to make it better, and which improvement can actually promise a result.

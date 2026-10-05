---
title: Choosing a Model on Your Own Cases
summary: A founder wants to switch to whichever model topped last week's chart. The team does what one does with a car: takes three models for a drive on its own roads, records the decision on a card, and then specifies exactly what each model sees. The chapter introduces leaderboards, routing, model selection cards and provenance.
course: ch9m ch10c
goals:
  - explain why a leaderboard does not answer which model suits your task
  - build a benchmark from your own cases, including hard ones, and compare models with only the model changing
  - describe routing and record a decision on a model selection card
  - specify what goes into each request, treat memory as separate stores, and keep provenance for decisions
terms:
  - leaderboard | a published ranking of models by their scores on someone else's tests | leaderboards
  - model selection card | a short, versioned page recording the task, the quality target, the limits on data, speed and cost, the options tried, the evidence and the fallback, so that a reviewer can see exactly why a model was chosen | selection card
  - routing | sending each request to the cheapest model that can handle it, and only the hard ones to a stronger and dearer one | 
  - provenance | the record of where something came from, so that a claim or a decision can be traced to its source, version and the code that produced it | 
---

On the fourth Monday of September the founder, Mr. Bhatia, came into the office with his laptop open to a bar chart on which one bar was much taller than the others. It belonged to a model released the week before, and he proposed to switch to it. Anaya asked what it had been tested on. Reasoning, mathematics, coding and many other things, he said. She asked whether it had been tested on Hinglish names. He laughed and said he supposed it had not.

A *leaderboard* shows how a model did on someone else's task. It can be an honest result and tell the reader nothing about the reader's own task, in the way that buying a car because it won an award tells one nothing about whether it fits the family, copes with the roads or is affordable to run. One would take the car for a drive, and very few teams take a model for a drive.

## The case: a tall bar on a chart

Anaya asked, in a voice she had practised for exactly this moment, on which of the company's cases the model was better, and at what speed and cost. Mr. Bhatia raised an eyebrow and then smiled. "Show me," he said.

## Several differences at once

Imran had been waiting for the question. A model is not better or worse in one dimension. Models differ in several at once: how well they do the task, how fast they answer, how much text they can take, how reliably they call functions and what they cost. One that wins on the first can lose on the next three, and which matters most is a fact about the use and not about the model. The work was to define what Sahaj's use needed and then to measure.

Table: What the finder needed
| Requirement | Source | Value |
| --- | --- | --- |
| Quality | The specification, written in May | At least 98 in 100 fixed-shape numbers, and as many names as possible |
| Data | The rule written in July | Nothing real may be sent outside the building |
| Speed | The specification | Typically under a third of a second |
| Cost | The specification | Under 60 paise a message in total |

## Three for a drive

The benchmark was a set of sixty cases that Anaya had built over a weekend. A *benchmark* is a fixed set of cases with the expected answers, used to compare options fairly on the same task. It was not the answer key. It was drawn from it, and built on purpose to be hard in the ways that mattered: twenty English messages, twenty in Hinglish, ten in Devanagari, and ten of the kinds that a naive test would never include, namely messages with no answer at all, ambiguous messages and messages with an injected instruction.

::: key Challenge the test set before the score
A benchmark is a measuring instrument, and an instrument built from easy cases produces easy conclusions. A product manager's job is to challenge the test set before challenging the score. Anaya asked whether her benchmark would detect the failure she most feared, and made sure that it would.
:::

They ran three models through it, changing only the model each time, with the same instructions and the same cases. If the model and the instructions are changed together and the score improves, nobody can say which helped.

Table: Three models on sixty cases
| | Model A | Model B | Model C |
| --- | --- | --- | --- |
| What it is | Small, open-weight, runs inside | Medium, open-weight, runs inside | Large, closed, hosted outside |
| Found overall | 82% | 91% | 95% |
| Found in Hinglish | 71% | 86% | 92% |
| Typical time | 0.15 seconds | 0.4 seconds | 2.1 seconds |
| Cost per call | about 3 paise | about 9 paise | about 40 paise |

Anaya asked whether she was allowed to run Model C at all. On made-up sentences she was, said Imran. The benchmark contained no real customer, which was why it had been built from invented text, so that any model could be used anywhere to learn how it behaved. The rule concerned real data.

The table gave no winner, which is what made it useful. Model C was the best at the work and could not be used, because it was outside and slow. Model A was fast and cheap and not good enough alone. Model B was between them.

## The cheapest that will do

The numbers suggested a method the team already used. *Routing* sends each request to the cheapest model that can handle it and passes only the hard ones to a stronger and dearer one. Model A would read every message, quickly and cheaply, and settle the great majority. Model B would look only at the unsure few.

Anaya tried it on the benchmark. The combination found ninety-three in a hundred overall and eighty-nine in a hundred in Hinglish, in a typical time of 0.17 seconds, at about four paise a message. It was not as good as Model C, it was good enough to meet the specification, and it was permitted.

She then did something Imran had taught her, which was to turn the decision into a piece of paper. A *model selection card* is a short, versioned page that records the task, the quality target, the limits on data, speed and cost, the options tried, the evidence and the fallback, so that a reviewer can see exactly why a model was chosen. Hers fitted on one page. At the bottom she completed the fallback line: rules-only safe mode, as in the specification.

Imran asked her to cover the table and try to make the decision. She did, and found herself reaching for the model that had topped the chart, which was exactly what she had told Mr. Bhatia not to do. Without the numbers the decision had turned to opinion within thirty seconds. "That is why it is on a card," said Imran.

## What goes in the folder

The other half of the afternoon belonged to a different question, which began with a comparison from Dr. Meenakshi Rao. A brilliant new colleague remembers nothing from the previous day. Each morning the manager hands over a folder: the standing instructions, a few examples, the file needed today, a note about last week. What goes in the folder decides how well the colleague does.

With the model chosen, the next question was exactly what the folder held. Anaya had met the idea under the name of context, and she now saw how much of the work lay in it.

Table: Three parts of the folder
| Part | Treatment |
| --- | --- |
| The instructions | Treat them as a contract between the application and the model: the role, the task, the limits, the examples, the shape of the output, and what to do when it cannot answer. Code downstream depends on each. They deserve what any interface gets: a version number, a record of changes, and the same ten cases run before and after any edit |
| The size of each part | Decide in advance an order in which to remove things when the budget is tight. Most people remove the history first and the evidence last. If the design differs, the reason is the design |
| Memory | It is not a feature but an architecture. At least three different stores are called memory and must not be confused |

Table: Three stores called memory
| Store | What it holds | Questions to answer for each |
| --- | --- | --- |
| Session history | What has been said in this chat | What is in it, who owns it, how long it is kept, who can see it, how to delete it |
| User profile | What the company knows about this person | The same five questions |
| Task state | Where this particular job has got to | The same five questions |

For the session history Anaya paused at the cell for what must never be injected by default, and wrote one word: identity numbers. The guard already cleaned the history on the way in. Now it was part of the design of the store.

## Where did this come from

The last matter was a quiet one. When the guard hid a detail it wrote down why. Every record carried the message's number, the part of the guard that had made the decision, and the version of that part. Anyone examining it later could trace the decision to its source, the code that made it and the instructions that were in force. This is *provenance*: the record of where something came from.

It mattered more than she had expected. A citation is useful only if it lets the reader reach the evidence, and a decision that cannot be reproduced cannot be defended. In September Lakshmi asked why a particular name had been hidden on a Tuesday in August, and Anaya found the answer in forty seconds. She did not mention that nobody had asked before.

## Summary

A leaderboard shows how a model did on someone else's task. Models differ in several ways at once, so the useful comparison is a benchmark of one's own, built from the cases and failures that matter, with some cases designed to be hard, and with only the model changing between runs.

- Routing sends each request to the cheapest model that can handle it, and keeps the dearer one for hard cases.
- The decision belongs on a model selection card, because without the evidence it dissolves into opinion in seconds.
- What each model sees is a design in its own right: instructions treated as a versioned contract, an order of removal when the budget is tight, and memory understood as at least three separate stores, each with an owner, a retention period and a way to delete.
- Every decision should carry its provenance, so that it can be traced to the code and the evidence that produced it.

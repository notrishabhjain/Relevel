---
title: Choosing a Model on Your Own Cases
summary: A founder wants to switch to whichever model topped last week's chart. The team does what you do before buying a car. They test-drive three models on their own roads, write the choice on a card, and plan what each model sees. You meet leaderboards, routing, model selection cards and provenance.
course: ch9m ch10c
goals:
  - explain why a leaderboard does not tell you which model suits your task
  - build a benchmark from your own cases, including hard ones, and compare models with only the model changing
  - describe routing and record a decision on a model selection card
  - specify what goes into each request, treat memory as separate stores, and keep provenance for decisions
terms:
  - leaderboard | a school's rank list, but for models; it shows scores on someone else's tests, not yours | leaderboards
  - model selection card | a one-page file card for the choice: the task, the quality target, the limits on data, speed and cost, the options tried, the evidence and the fallback; it shows a reviewer why you chose that model | selection card
  - routing | a front desk that sends easy requests to the cheap helper and only the hard ones to the dear expert; each request goes to the cheapest model that can handle it | 
  - provenance | the paper trail that says where something came from, so you can trace a claim or a decision to its source, its version and the code that made it | 
---

On the fourth Monday of September, the founder, Mr. Bhatia, came into the office. His laptop was open to a bar chart. One bar was much taller than the others. It belonged to a model released the week before. He wanted to switch to it.

Anaya asked what it had been tested on. Reasoning, mathematics, coding and many other things, he said. She asked if it had been tested on Hinglish names. He laughed. He supposed it had not.

That chart is a **leaderboard**. It is like a school's rank list. It shows how a model did on someone else's task. The result can be honest and still tell you nothing about your own task.

Think of buying a car because it won an award. The award does not say if the car fits your family. It does not say if it copes with your roads, or if you can afford to run it. You would take the car for a test drive. Very few teams take a model for a test drive.

## The case: a tall bar on a chart

Anaya asked her question in a voice she had practised for this moment. On which of the company's cases was the model better? And at what speed and cost? Mr. Bhatia raised an eyebrow. Then he smiled. "Show me," he said.

It is like a customer asking a shopkeeper, "Show me it working in my kitchen." That is a fair thing to ask.

## Several differences at once

Imran had been waiting for that question. A model is not simply better or worse. Think of a cricket team. One player bats well, one bowls fast, one fields well. Models differ in several ways at once. How well they do the task. How fast they answer. How much text they can take. How reliably they call functions (ask for a tool to be run). What they cost.

One that wins on the first can lose on the next three. And which one matters most is a fact about the use, not about the model.

So the work was to write down what Sahaj's use needed. Then to measure.

Table: What the finder needed
| Requirement | Source | Value |
| --- | --- | --- |
| Quality | The specification, written in May | At least 98 in 100 fixed-shape numbers, and as many names as possible |
| Data | The rule written in July | Nothing real may be sent outside the building |
| Speed | The specification | Typically under a third of a second |
| Cost | The specification | Under 60 paise a message in total |

## Three for a drive

The benchmark was a set of sixty cases. Anaya had built it over a weekend. A **benchmark** is a fixed set of cases with the right answers. It is like a practice paper with the answers at the back. You use it to compare options fairly on the same task. It was not the answer key.

It was drawn from the answer key. It was built on purpose to be hard in the ways that mattered. There were twenty English messages, twenty in Hinglish and ten in Devanagari. The last ten were the kinds a lazy test would never include. Some messages had no answer at all. Some were unclear. Some had an injected instruction (a hidden order slipped into the text).

::: key Challenge the test set before the score
A benchmark is a measuring tape. A tape made from easy cases gives easy answers. A product manager challenges the test set before the score. Anaya asked if her benchmark would catch the failure she feared most. Then she made sure that it would.
:::

They ran three models through it. Each time they changed only the model. The instructions and the cases stayed the same. That matters. Say you change the model and the instructions together, and the score goes up. Nobody can say which one helped. It is like changing the bat and the batsman together.

Table: Three models on sixty cases
| | Model A | Model B | Model C |
| --- | --- | --- | --- |
| What it is | Small, open-weight, runs inside | Medium, open-weight, runs inside | Large, closed, hosted outside |
| Found overall | 82% | 91% | 95% |
| Found in Hinglish | 71% | 86% | 92% |
| Typical time | 0.15 seconds | 0.4 seconds | 2.1 seconds |
| Cost per call | about 3 paise | about 9 paise | about 40 paise |

Anaya asked if she was even allowed to run Model C. On made-up sentences she was, said Imran. The benchmark held no real customer. That is why it was built from invented text. Any model can be used anywhere, to learn how it behaves. The rule was about real data.

The table gave no clear winner. That is what made it useful. Model C did the work best, but it could not be used. It ran outside and was slow. Model A was fast and cheap, but not good enough alone. Model B sat in between.

## The cheapest that will do

The numbers pointed to a method the team already knew. **Routing** sends each request to the cheapest model that can handle it. Think of a hospital front desk. A nurse sees every patient first. Only the hard cases go to the senior doctor, who costs more. Here, Model A would read every message, fast and cheap. It would settle the great majority. Model B would look only at the unsure few.

Anaya tried it on the benchmark. Together, the two found ninety-three in a hundred overall. They found eighty-nine in a hundred in Hinglish. The typical time was 0.17 seconds, at about four paise a message. It was not as good as Model C. But it met the specification, and it was allowed.

Then she did something Imran had taught her. She turned the decision into a piece of paper. A **model selection card** is a short, versioned page. It is like the card at the end of a hospital bed. It records the task, the quality target, the limits on data, speed and cost, the options tried, the evidence and the fallback (the plan if it breaks).

A reviewer can then see exactly why a model was chosen. Hers fitted on one page. At the bottom she filled in the fallback line: rules-only safe mode, as in the specification.

Imran asked her to cover the table and try to make the decision. She did. She found herself reaching for the model at the top of the chart. That was exactly what she had told Mr. Bhatia not to do. Without the numbers, the decision turned into opinion in thirty seconds. "That is why it is on a card," said Imran.

## What goes in the folder

The other half of the afternoon was about a different question. It began with a comparison from Dr. Meenakshi Rao. A brilliant new colleague remembers nothing from the day before. So each morning the manager hands over a folder. In it are the standing instructions, a few examples, the file needed today, and a note about last week. What goes in the folder decides how well the colleague does.

The model was chosen. Now the question was what exactly the folder held. Anaya had met this idea under the name of context (what the model has on its desk). Now she saw how much of the work lay in it.

Table: Three parts of the folder
| Part | Treatment |
| --- | --- |
| The instructions | Treat them as a contract between the application and the model. They cover the role, the task, the limits, the examples, the shape of the output, and what to do when it cannot answer. Code downstream depends on each. They deserve what any interface gets: a version number, a record of changes, and the same ten cases run before and after any edit |
| The size of each part | Decide in advance what to remove first when the budget is tight. Most people remove the history first and the evidence last. If your design differs, the reason is the design |
| Memory | It is not a feature but an architecture. At least three different stores are called memory and must not be confused |

The third row needs a closer look. The word "memory" covers three different stores. Think of three drawers in one desk.

Table: Three stores called memory
| Store | What it holds | Questions to answer for each |
| --- | --- | --- |
| Session history | What has been said in this chat | What is in it, who owns it, how long it is kept, who can see it, how to delete it |
| User profile | What the company knows about this person | The same five questions |
| Task state | Where this particular job has got to | The same five questions |

For the session history, Anaya paused at the cell for what must never be injected by default. She wrote one word: identity numbers. The guard already cleaned the history on the way in. Now that was part of the design of the store.

## Where did this come from

The last matter was a quiet one. When the guard hid a detail, it wrote down why. Every record carried the message's number. It carried the part of the guard that made the decision, and the version of that part. Anyone could look later and trace the decision to its source. That means the code that made it, and the instructions in force at the time.

This is **provenance**. It is the paper trail that says where something came from. Think of the bill and the warranty card that come with a phone.

It mattered more than she had expected. A citation helps only if the reader can reach the evidence. And a decision you cannot reproduce cannot be defended. In September, Lakshmi asked why a certain name had been hidden on a Tuesday in August. Anaya found the answer in forty seconds. She did not mention that nobody had asked before.

## Summary

A leaderboard shows how a model did on someone else's task. Models differ in several ways at once. So the useful comparison is a benchmark of your own. Build it from the cases and failures that matter. Make some cases hard. Change only the model between runs.

- Routing sends each request to the cheapest model that can handle it, and keeps the dearer one for hard cases.
- The decision belongs on a model selection card. Without the evidence it melts into opinion in seconds.
- What each model sees is a design in its own right. The instructions are a versioned contract. There is an order of removal when the budget is tight. Memory is at least three separate stores. Each has an owner, a retention period and a way to delete.
- Every decision should carry its provenance. Then you can trace it to the code and the evidence that made it.

Next, eleven people meet in the large room. They ask if the retrieval can survive the questions of someone who did not build it.

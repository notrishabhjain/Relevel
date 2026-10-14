---
title: A Product, Not a Demo
summary: A dish cooked well for two people is not yet an item on a restaurant menu. Before the festival season, the team lists everything that stands between a working prototype and a service, and writes down for each big decision what would make them reverse it. The chapter explains the production delta, graceful degradation, staging, latency budgets, architecture decision records and exit cost.
course: ch19pm ch20d
goals:
  - say what "done" means for software that reads and writes text, and sort measures into four kinds
  - list the production delta, and apply the test for the must-have group
  - move slow work off the live path, and plan graceful degradation for each dependency
  - use staging and a latency budget, record decisions with a trigger for revisiting them, and score vendors including exit cost
terms:
  - production delta | the list of everything missing between a working prototype and a running service, such as identity, retries, queues, monitoring, secrets, backups and rollback | 
  - graceful degradation | when part of a system fails, carrying on in a smaller but safe way instead of failing altogether | degraded mode
  - staging | a copy of the live system where changes are tried first, so that a bad change never reaches real users | 
  - latency budget | the total time a request may take, divided among the stages it passes through, so that the slowest stage is found and has an owner | 
  - architecture decision record | a short note about a significant technical decision: the alternatives, the choice, the evidence, the consequences, and what would make you revisit it | ADR, ADRs
  - exit cost | what it would cost, in money, time and risk, to leave one provider and move to another; a vendor can win on quality and still lock you in for years | 
---

In the first week of November, Mr. Bhatia asked whether the guard was finished. The answer left him looking faintly betrayed. Anaya had been explaining her specification with an analogy. A railway can't promise a train at exactly four minutes past nine, she said. So it publishes the share of trains that arrive within a few minutes of schedule, month by month, and passengers plan around that number.

The guard was done in the same sense: it met its numbers. It could never be done in the sense of doing one thing the same way for ever.

For anything that reads and writes text, "done" means a measured success rate within a tolerance, not one fixed output. Anaya had circled this idea since the spring, and it had slowly become the way she wrote everything. Now it had something to be tested against. The festival season was three weeks away.

## The case: the guard in three weeks

The sections that follow cover three things. They list what the guard still lacked as a service. They ask how it would cope with ten times its usual load. And they show how the decisions behind it were written down.

## Why not just a rule?

The discussion began with a question Anaya had been told to ask at the very start: why is this not ordinary software? The safe mode gave the answer. That rules-only version, built for emergencies, found about ninety-six in a hundred fixed-shape numbers with no model at all. She had kept that figure in front of her all year as a baseline, the thing every other part had to beat. It was good to be able to say by how much.

What the model added was names, addresses, Hinglish, and the sentences that point to someone without saying who. Without those, the guard was only a rule. She wrote the difference, with figures, on the first page of the product requirements: what the model bought, and what it cost.

She also wrote the acceptance criteria one last time, as a contract between product and engineering. Retrieval, generation, safety, speed and cost each had a number, tied to the golden dataset and a way of measuring it. The test of the contract was simple. Imran should be able to run it without once asking what "good" meant.

## Four kinds of number

Anaya had started to notice something about dashboards. When a team is shown many numbers at once, it stops being able to tell which question each number answers. So Imran drew four columns. Each kind of number answers a different question, and the table gives the guard's own example for each.

Table: Four kinds of number
| Kind | Question it answers | The guard's example |
| --- | --- | --- |
| Business outcome | Is anyone better off? | The count in Lakshmi's weekly sweep |
| System quality | Is the system right? | The share found; the share wrongly hidden |
| Operating | What does it cost to run, and how fast is it? | Cost, speed, the slow tail |
| User signal | Do the users trust it? | How often agents pressed the button saying the guard had hidden something they needed |

A dashboard that mixes these can't answer any question clearly. A model can score ninety-five on its own test, and agents may still ignore the tool because it irritates them. You need all four kinds, and only the first tells you whether anyone is better off.

Anaya added one more request. She asked Imran to model the cost of the whole successful task, not of one call. That included the review time of the people who looked at the unsure cases each morning. The honest figure was higher, and it was the one a finance director would ask about.

## What a prototype lacks

A dish that is cooked well for two people is not yet an item on a restaurant menu. The recipe is the same. But a restaurant also needs reliable supplies, a price that works, other cooks who can make the dish, and a plan for the night when four hundred people order it.

A week before the review, Imran gave Anaya a list and called it the *production delta*: everything that is missing between a prototype and a service. She found it humbling. The table below lists each item with the question it raises.

Table: The production delta
| Item | The question |
| --- | --- |
| Identity | Who is calling, and are they allowed to? |
| Persistence | Where does the state live, and what if the machine restarts? |
| Retries, queues and timeouts | What happens when something is slow or fails? |
| Monitoring and alerts | Who is told, and how fast? |
| Secrets | Where are they kept? |
| Backups, permissions, deployment, rollback | Can the service be restored and changed safely? |

Imran split the list into must-have, should-have and later. The test for the first group was a single question: what would stop you from going live tomorrow? It was a long list, and none of it was about the model.

## The night four hundred people order

Festival week would be the real test. Farah's records showed that in the week of the previous Diwali, messages to the chatbot had been six times the usual. People paid bills early to avoid being caught short, topped up loans for gifts, and wrote in large numbers to ask about late fees. Imran said to plan for ten times, to be safe.

At ten times the volume, the question was which part would fail first. The answer was the careful judge. It handled six in a hundred messages, and each one took longer than the rest. At ten times the load, it would have a queue, and a queue in a live chat is a delay the customer feels.

Not every job belongs in the path between a customer pressing send and getting a reply. So the judge was moved out of that path. The quick parts decided live. The unsure messages were hidden to be safe, as before, and put on a queue. The judge worked through the queue at its own pace, and the agent's screen was updated when a verdict came. The slow job of taking in a new policy document got the same treatment. Uploading, processing, indexing and reporting status are separate steps, and none of them should hold up a customer.

Some failures were certain to come. For those, the team wrote a table that Imran called the reliability matrix. For each dependency, it said what would happen if that dependency was slow, down or rate-limited. Here is part of it.

Table: Part of the reliability matrix
| If this fails | The system does this |
| --- | --- |
| The model server is overloaded | Safe mode, the strip across the agent's screen, and an alert |
| The order lookup fails | Treat twelve-digit numbers as sensitive |
| The queue backs up beyond an hour | Page Imran |

::: key Degrade gracefully
A graceful reduced mode is often worth more than a bigger model. *Graceful degradation* means carrying on in a smaller, safe way when part of the system fails. It goes against the instincts of many people who build things.
:::

## Trying it on a copy

The last third of the list was about how changes reach the world. This was where the Friday-night edit had taught the team the most. They set up a *staging* system, which is a copy of the live one where a change is tried first. And they agreed a rule. Anything that can change behaviour, whether a prompt, a model name, an index or a configuration, goes to staging, passes the gate, and only then reaches production.

Imran proved the rule with a small game. He deliberately pushed a bad instruction to staging and checked that production did not move. Then he changed a model name and watched the gate stop it.

The budget for response time went onto a sheet. A *latency budget* divides the time a request may take among the stages it passes through. Here the total had to come to a third of a second. When Anaya filled in the numbers, she found that the stage she had worried about, the model, used less than she expected. A stage nobody had mentioned, the network between two of the company's own servers, used more. The biggest share of the delay, Imran said, is rarely in the stage people tune first.

## Writing down the reasons

By the end of the week, the architecture was a set of decisions. Anaya had learned from the log she had kept since March, and she wrote each decision in a form Imran had been recommending for a year. It is called an *architecture decision record*. It is a short note of the alternatives considered, the choice made, the evidence, the consequences, and what would make the team revisit it.

She wrote four of them: on the models, on the way documents are found, on workflow against agent, and on where things are stored. In each, she included the option they rejected and why. Then she did something Imran did not expect. She invented a new requirement that would overturn one of the decisions, to see whether the note said what she would do. It did.

Buying the hosting was the last decision, and it was a vendor decision. Anaya scored three realistic options, plus one more possibility, running it themselves, on a single sheet. The table lists what she scored.

Table: How vendors were scored
| Criterion |
| --- |
| Quality |
| Data controls and region |
| Speed |
| Cost |
| Tooling |
| Support |
| Exit cost: what it would take, in money, time and risk, to leave |

The last row is the one most sheets leave out. A provider might win on quality and on data controls, yet take a year to leave. That can lock a company in for longer than its business plan lasts. This is what *exit cost* means. Beside the sheet, Anaya wrote the habit that would outlast everything else: a decision is a hypothesis with a price, so say when you would revisit it.

## Summary

For anything that reads and writes text, "done" means a measured success rate within a tolerance, measured on named cases, with a plan for the rest of the time.

- Measures fall into four kinds: business outcome, system quality, operating figures and user signals. A dashboard that mixes them answers nothing.
- A prototype lacks a long list of things, the production delta, and none of them is the model.
- Not every task belongs in the path between a customer and a reply. Slow work can wait on a queue. When a part fails, the system should degrade gracefully into a smaller, safe mode.
- Changes are tried first on a copy of the live system, and response time is a budget divided among stages.
- Significant decisions are written down with the alternatives and a trigger for revisiting them. A vendor is scored on more than quality and price, including what it would cost to leave.

Next, the team takes all of this and ships the whole thing.

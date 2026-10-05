---
title: A Product, Not a Demo
summary: A dish cooked well for two people is not an item on a restaurant menu. Before the festival season the team lists everything that stands between a working prototype and a service, and writes down for each large decision what would make them reverse it. The chapter introduces the production delta, graceful degradation, staging, latency budgets, architecture decision records and exit cost.
course: ch19pm ch20d
goals:
  - say what "done" means for software that reads and writes text, and sort measures into four kinds
  - list the production delta and the test for the must-have group
  - move slow work off the live path, and design graceful degradation for each dependency
  - use staging and a latency budget, record decisions with a trigger for revisiting them, and score vendors including exit cost
terms:
  - production delta | the list of everything missing between a working prototype and a running service, such as identity, retries, queues, monitoring, secrets, backups and rollback | 
  - graceful degradation | when part of a system fails, continuing to work in a reduced but safe way, instead of failing altogether | degraded mode
  - staging | a copy of the live system where changes are tried first, so that a bad one never reaches real users | 
  - latency budget | the total time a request may take, divided among the stages it passes through, so that the slowest stage is found and owned | 
  - architecture decision record | a short note recording a significant technical decision: the alternatives, the choice, the evidence, the consequences, and what would make you revisit it | ADR, ADRs
  - exit cost | what it would cost, in money, time and risk, to leave a provider and move to another; a vendor can win on quality and still lock you in for years | 
---

In the first week of November Mr. Bhatia asked whether the guard was finished, and looked faintly betrayed by the answer. Anaya had been explaining her specification with an analogy. A railway cannot promise a train at exactly four minutes past nine, she said, so it publishes the share that arrive within a few minutes of schedule, month by month, and passengers can plan around that number. The guard was done in the sense that it met numbers. It could never be done in the sense that it did one thing the same way for ever.

For anything that reads and writes text, "done" means a measured success rate within a tolerance and not one fixed output. This was the idea that Anaya had circled since the spring, and it had gradually become the way she wrote everything. It now had somewhere to be tested. The festival season was three weeks away.

## The case: the guard in three weeks

The sections that follow list what the guard still lacked as a service, how it would meet ten times its usual load, and how the decisions behind it were written down.

## Why not just a rule?

The discussion began with a question Anaya had been told to ask at the start: why is this not ordinary software? The safe mode answered it. The rules-only version, built for emergencies, found about ninety-six in a hundred fixed-shape numbers with no model at all. She had kept that figure in front of her all year as a baseline, the thing every other part had to beat. It was good to be able to say by how much. The model bought names, addresses, Hinglish and the sentences that point to someone without saying who. Without those the guard was a rule. She wrote the difference, with figures, on the first page of the product requirements: what the model bought and what it cost.

She also wrote the acceptance criteria one last time, as a contract between product and engineering. Retrieval, generation, safety, speed and cost each had a number, attached to the golden dataset and a way of measuring it. The test of the contract was that Imran could run it without once asking what "good" meant.

## Four kinds of number

A tendency in the dashboard that Anaya had begun to see everywhere was that when teams are shown many numbers they stop being able to tell which question each answers. Imran drew four columns.

Table: Four kinds of number
| Kind | Question it answers | The guard's example |
| --- | --- | --- |
| Business outcome | Is anyone better off? | The count in Lakshmi's weekly sweep |
| System quality | Is the system right? | The share found; the share wrongly hidden |
| Operating | What does it cost to run, and how fast is it? | Cost, speed, the slow tail |
| User signal | Do the users trust it? | How often agents pressed the button saying the guard had hidden something they needed |

A dashboard that mixes these cannot answer any question clearly. A model can score ninety-five on its own test and agents may still ignore the tool because it is irritating. All four are needed, and only the first says whether anyone is better off. Anaya added one more thing: she asked Imran to model the cost of the whole successful task and not of the call, including the review time of the people who looked at the unsure cases each morning. The honest figure was higher, and it was the one a finance director would ask about.

## What a prototype lacks

A dish that is cooked well for two people is not an item on a restaurant menu. The recipe is the same, but one also needs reliable supplies, a price that works, other cooks who can make it, and a plan for the night when four hundred people order it.

Imran gave Anaya a list a week before the review and called it the *production delta*: everything missing between a prototype and a service. She found it humbling.

Table: The production delta
| Item | The question |
| --- | --- |
| Identity | Who is calling, and are they allowed to? |
| Persistence | Where does the state live, and what if the machine restarts? |
| Retries, queues and timeouts | What happens when something is slow or fails? |
| Monitoring and alerts | Who is told, and how fast? |
| Secrets | Where are they kept? |
| Backups, permissions, deployment, rollback | Can the service be restored and changed safely? |

Imran split the list into must-have, should-have and later. The test for the first group was a question: what would stop you from going live tomorrow? It was a long list, and none of it concerned the model.

## The night four hundred people order

Festival week was the test. Farah's records showed that in the week of the previous Diwali the messages to the chatbot had been six times the usual. People paid bills early to avoid being caught short, topped up loans for gifts, and wrote in large numbers to ask about late fees. Imran said to plan for ten times, to be safe.

At ten times the volume, the question was which part would fail first, and the answer was the careful judge. It handled six in a hundred messages, and each took longer than the rest. At ten times it would have a queue, and a queue in a live chat is a delay the customer feels. Not every job belongs in the path between a customer pressing send and a reply, so the judge was moved off it. The quick parts decided live. The unsure messages were hidden to be safe, as before, and put on a queue for the judge to handle at its own pace, with the agent's screen updated when a verdict came. The slow job of ingesting a new policy document was treated the same way: uploading, processing, indexing and reporting status are separate steps that do not hold up a customer.

For the failures that were certain to come, the team wrote a table that Imran called the reliability matrix. For each dependency it said what would happen if the dependency was slow, down or rate-limited.

Table: Part of the reliability matrix
| If this fails | The system does this |
| --- | --- |
| The model server is overloaded | Safe mode, the strip across the agent's screen, and an alert |
| The order lookup fails | Treat twelve-digit numbers as sensitive |
| The queue backs up beyond an hour | Page Imran |

::: key Degrade gracefully
A graceful reduced mode is often worth more than a bigger model. *Graceful degradation* means continuing to work in a smaller and safe way when part of the system fails, and it contradicts the instincts of many people who build things.
:::

## Trying it on a copy

The last third of the list concerned how changes reached the world, and this was where the Friday-night edit had taught the team the most. There would be a *staging* system, a copy of the live one where a change is tried first, and a rule: anything that can change behaviour, whether a prompt, a model name, an index or a configuration, goes to staging, passes the gate and only then reaches production. Imran proved it with a game. He deliberately pushed a bad instruction to staging and checked that production did not move. Then he changed a model name and watched the gate stop it.

The budget for response time went on a sheet. A *latency budget* divides the time a request may take among the stages it passes through, and in this case the sum had to come to a third of a second. When Anaya filled in the numbers she found that the stage she had worried about, the model, used less than she expected, and a stage no one had mentioned, the network between two of the company's own servers, used more. The largest share of the delay, Imran said, is rarely in the stage that people optimise first.

## Writing down the reasons

By the end of the week the architecture was a set of decisions. Anaya, who had learned from the log she had kept since March, wrote each of them in a form that Imran had advocated for a year. An *architecture decision record* is a short note of the alternatives considered, the choice, the evidence, the consequences, and what would make the team revisit it. She wrote four, on the models, the way documents are found, workflow against agent, and where things are stored, and in each she included the option rejected and why. Then she did something Imran did not expect: she invented a new requirement that would overturn one of the decisions, to see whether the note said what she would do. It did.

Buying the hosting was the last decision, and it was a vendor decision. Anaya scored three realistic options and one hypothesis, running it themselves, on a single sheet.

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

The last row is one that most sheets omit. A provider that wins on quality and on data controls but costs a year to leave can lock a company in for longer than the company's business plan. Beside the sheet Anaya wrote the habit that would outlast everything else: a decision is a hypothesis with a price, and one should say when one would revisit it.

## Summary

For anything that reads and writes text, "done" means a measured success rate within a tolerance, measured on named cases, with a plan for the rest of the time.

- Measures fall into four kinds: business outcome, system quality, operating figures and user signals. A dashboard that mixes them answers nothing.
- A prototype lacks a long list of things, the production delta, none of which is the model.
- Not every task belongs in the path between a customer and a reply. Slow work can wait on a queue, and when a part fails the system should degrade gracefully into a reduced, safe mode.
- Changes are tried first on a copy of the live system, and response time is a budget divided among stages.
- Significant decisions are written down with the alternatives and a trigger for revisiting them. A vendor is scored on more than quality and price, including what it would cost to leave.

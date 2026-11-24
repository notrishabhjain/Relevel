---
title: A Product, Not a Demo
summary: A dish cooked well for two people is not yet on the restaurant menu. Before the festival season, the team lists all that stands between a working prototype and a real service. For each big decision, they write what would make them reverse it. You meet the production delta, graceful degradation, staging, latency budgets, architecture decision records and exit cost.
course: ch19pm ch20d
goals:
  - say what "done" means for software that reads and writes text, and sort measures into four kinds
  - list the production delta, and apply the test for the must-have group
  - move slow work off the live path, and plan graceful degradation for each dependency
  - use staging and a latency budget, write down decisions with a trigger to revisit them, and score vendors including exit cost
terms:
  - production delta | the shopping list between a prototype and a real service: identity, retries, queues, monitoring, secrets, backups and rollback | 
  - graceful degradation | when one part breaks, the system keeps going in a smaller but safe way, like a shop that takes only cash when the card machine is down | degraded mode
  - staging | a practice copy of the live system, where every change is tried first, so a bad change never reaches real users | 
  - latency budget | the total waiting time a request may use, split among its stages, like a trip split into train, bus and walk, so the slowest stage is found and owned | 
  - architecture decision record | a short note on one big technical choice: the other options, the choice, the proof, the results, and what would make you look again | ADR, ADRs
  - exit cost | the price in money, time and risk of leaving one provider for another, like the cost of changing your bank; a vendor can win on quality and still trap you for years | 
---

In the first week of November, Mr. Bhatia asked whether the guard was finished. The answer left him looking faintly let down. Anaya had been explaining her specification (the recipe card for the product) with a comparison.

A railway cannot promise a train at exactly four minutes past nine, she said. So it publishes the share of trains that arrive within a few minutes of schedule, month by month. Passengers plan around that number.

The guard was done in the same way. It met its numbers. It could never be done in the sense of doing one thing the same way for ever.

For anything that reads and writes text, "done" means a measured success rate within a tolerance (a small allowed gap). It does not mean one fixed output. Anaya had circled this idea since the spring. It had slowly become the way she wrote everything. Now it had something to be tested against. The festival season was three weeks away.

## The case: the guard in three weeks

This chapter covers three things. First, it lists what the guard still lacked as a service. Second, it asks how the guard would cope with ten times its usual load. Third, it shows how the decisions behind it were written down.

Think of a small tiffin kitchen about to get a big wedding order. The food is good. The question is whether the kitchen can serve it, day after day.

## Why not just a rule?

The talk began with a question Anaya had been told to ask at the very start. Why is this not ordinary software? Safe mode gave the answer. This rules-only version, built for emergencies, found about ninety-six in a hundred fixed-shape numbers. It used no model at all.

She had kept that figure in front of her all year as a baseline. A baseline is the mark every other part must beat. Now she could say by how much.

The model added names, addresses and Hinglish. It added the sentences that point to someone without saying who. Without those, the guard was only a rule. She wrote the difference, with figures, on the first page of the product requirements. It said what the model bought, and what it cost.

She also wrote the acceptance criteria (the tests the work must pass) one last time. Think of them as a contract between product and engineering. Retrieval, generation, safety, speed and cost each had a number. Each number was tied to the golden dataset, with a way to measure it. The test of the contract was simple. Imran should be able to run it without once asking what "good" meant.

## Four kinds of number

Anaya had started to notice something about dashboards (screens of numbers). Show a team many numbers at once, and it stops knowing which question each number answers. So Imran drew four columns. Each kind of number answers a different question. The table gives the guard's own example for each.

Table: Four kinds of number
| Kind | Question it answers | The guard's example |
| --- | --- | --- |
| Business outcome | Is anyone better off? | The count in Lakshmi's weekly sweep |
| System quality | Is the system right? | The share found; the share wrongly hidden |
| Operating | What does it cost to run, and how fast is it? | Cost, speed, the slow tail |
| User signal | Do the users trust it? | How often agents pressed the button saying the guard had hidden something they needed |

Think of a cricket scoreboard. Runs, overs, wickets and the crowd's mood are four different things. Mix them into one number and nobody can read the game. A dashboard that mixes these four kinds cannot answer any question clearly.

A model can score ninety-five on its own test. Agents may still ignore the tool because it annoys them. You need all four kinds. Only the first tells you whether anyone is better off.

Anaya added one more request. She asked Imran to work out the cost of the whole successful task, not of one call. That included the time of the people who looked at the unsure cases each morning. The honest figure was higher. It was the one a finance director would ask about.

## What a prototype lacks

A dish cooked well for two people is not yet an item on a restaurant menu. The recipe is the same. But a restaurant also needs steady supplies, a price that works, and other cooks who can make the dish. It needs a plan for the night when four hundred people order it.

A week before the review, Imran gave Anaya a list. He called it the *production delta*. It is everything missing between a prototype and a service. She found it humbling. The table lists each item with the question it raises.

Table: The production delta
| Item | The question |
| --- | --- |
| Identity | Who is calling, and are they allowed to? |
| Persistence | Where does the state live, and what if the machine restarts? |
| Retries, queues and timeouts | What happens when something is slow or fails? |
| Monitoring and alerts | Who is told, and how fast? |
| Secrets | Where are they kept? |
| Backups, permissions, deployment, rollback | Can the service be restored and changed safely? |

Backups are spare copies of your data. Rollback means going back to the last good version. Imran split the list into must-have, should-have and later. The test for the first group was one question: what would stop you from going live tomorrow? It was a long list. None of it was about the model.

## The night four hundred people order

Festival week would be the real test. Farah's records showed what happened in the week of the last Diwali. Messages to the chatbot had been six times the usual. People paid bills early to avoid being caught short. They topped up loans for gifts. Many wrote to ask about late fees. Imran said to plan for ten times, to be safe.

At ten times the volume, which part would fail first? The answer was the careful judge. It handled six in a hundred messages, and each one took longer than the rest. At ten times the load, it would have a queue. A queue in a live chat is a delay the customer feels. It is like a long line at the station ticket window.

Not every job belongs in the path between a customer pressing send and getting a reply. So the judge was moved out of that path. The quick parts decided live. The unsure messages were hidden to be safe, as before, and put on a queue (a waiting line).

The judge worked through the queue at its own pace. The agent's screen was updated when a verdict came. The slow job of taking in a new policy document got the same treatment. Uploading, processing, indexing and reporting status are separate steps. None of them should hold up a customer.

Some failures were certain to come. For those, the team wrote a table that Imran called the reliability matrix. For each dependency (a part the system leans on), it said what would happen if that part was slow, down or rate-limited. Rate-limited means told to slow down. Here is part of it.

Table: Part of the reliability matrix
| If this fails | The system does this |
| --- | --- |
| The model server is overloaded | Safe mode, the strip across the agent's screen, and an alert |
| The order lookup fails | Treat twelve-digit numbers as sensitive |
| The queue backs up beyond an hour | Page Imran |

::: key Degrade gracefully
Think of a shop where the card machine is down. It does not close. It takes cash only. A graceful reduced mode is often worth more than a bigger model. *Graceful degradation* means carrying on in a smaller, safe way when part of the system fails. Many people who build things find this against their instincts.
:::

## Trying it on a copy

The last third of the list was about how changes reach the world. This was where the Friday-night edit had taught the team the most. They set up a *staging* system. It is a practice copy of the live one, where every change is tried first. Think of a dress rehearsal before the real show.

And they agreed a rule. Anything that can change behaviour goes to staging first. That means a prompt, a model name, an index or a configuration. It passes the gate. Only then does it reach production (the real live system).

Imran proved the rule with a small game. He pushed a bad instruction to staging on purpose, and checked that production did not move. Then he changed a model name and watched the gate stop it.

The budget for response time went onto a sheet. A *latency budget* divides the time a request may take among the stages it passes through. Think of a trip split into train, bus and walk. Here the total had to come to a third of a second.

Anaya filled in the numbers. The stage she had worried about, the model, used less than she expected. A stage nobody had mentioned used more. That was the network between two of the company's own servers. The biggest share of the delay, Imran said, is rarely in the stage people tune first.

## Writing down the reasons

By the end of the week, the architecture was a set of decisions. Anaya had learned from the log she had kept since March. She wrote each decision in a form Imran had recommended for a year. It is an *architecture decision record*. It is a short note. It lists the other options, the choice made and the evidence. It lists the results, and what would make the team look again.

She wrote four of them: on the models, on how documents are found, on workflow against agent, and on where things are stored. In each, she included the option they rejected, and why. Then she did something Imran did not expect. She invented a new requirement that would overturn one of the decisions. She wanted to see whether the note said what she would do. It did.

Buying the hosting was the last decision. It was a vendor decision. A vendor is a company you buy a service from. Anaya scored three realistic options, plus one more, running it themselves, on a single sheet. The table lists what she scored.

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

The last row is the one most sheets leave out. A provider might win on quality and on data controls, yet take a year to leave. That can trap a company for longer than its business plan lasts. This is *exit cost*. Think of how hard it is to change your bank. Beside the sheet, Anaya wrote the habit that would outlast everything else. A decision is a hypothesis with a price, so say when you would look at it again.

## A Won't, reversed

One entry in the log went the other way. In the middle of November, the lending partner's technical lead asked a question. Could his team try the guard on their own chat system? That touched two items on the Won't list from March. One was a browser version. The other was selling to anyone outside Sahaj.

Anaya did not drop them quietly. She wrote the reversal in the format of the first entry.

::: example The decision log, 20 November
```
20 November
Decision:  Reverse two Won'ts from March. Offer the guard to other
           companies as a small library, with a demonstration page
           where a developer pastes a message and sees it cleaned.
Evidence:  The lending partner asked for it. Pune's sweep fell from
           46 in 500 to 9. Farah's team still paste Hinglish into a
           translation site, so people want a safe paste box.
I would change my mind if:  fewer than half of the developers who
           try it get it working in an hour, or Lakshmi finds that
           the page keeps what people paste.
```
:::

A Won't is a promise to stay narrow. Think of a shop that says "we only sell tea". To break that promise, you need what it took to make it: evidence, and a stated way back.

## Summary

For anything that reads and writes text, "done" means a measured success rate within a tolerance. It is measured on named cases, with a plan for the rest of the time.

- Measures fall into four kinds: business outcome, system quality, operating figures and user signals. A dashboard that mixes them answers nothing.
- A prototype lacks a long list of things, the production delta. None of them is the model.
- Not every task belongs in the path between a customer and a reply. Slow work can wait on a queue. When a part fails, the system should degrade gracefully into a smaller, safe mode.
- Changes are tried first on a practice copy of the live system. Response time is a budget, split among stages.
- Big decisions are written down with the other options and a trigger to look again. A vendor is scored on more than quality and price. Score what it would cost to leave.
- A Won't can be reversed on evidence, if the entry says what would reverse it back.

Next, the team takes all of this and ships the whole thing.

---
title: A Product, Not a Demo
summary: A dish you cook well for two people is not an item on a restaurant menu. Before the festival season, the team lists everything that stands between a working prototype and a service, and writes down, for each big decision, what would make them reverse it.
course: ch19pm ch20d
terms:
  - production delta | the list of everything missing between a working prototype and a running service, such as identity, retries, queues, monitoring, secrets, backups and rollback | 
  - graceful degradation | when part of a system fails, continuing to work in a reduced but safe way, instead of failing altogether | degraded mode
  - staging | a copy of the live system where changes are tried first, so that a bad one never reaches real users | 
  - latency budget | the total time a request may take, divided among the stages it passes through, so that the slowest stage is found and owned | 
  - architecture decision record | a short note recording a significant technical decision: the alternatives, the choice, the evidence, the consequences, and what would make you revisit it | ADR, ADRs
  - exit cost | what it would cost, in money, time and risk, to leave a provider and move to another; a vendor can win on quality and still lock you in for years | 
---

"A railway cannot promise a train at exactly four minutes past nine," said Anaya, "so it tells you the share that arrive within a few minutes of schedule, month by month. You can plan around that number."

She was explaining her specification to Mr. Bhatia, who had asked, in the first week of November, whether the guard was *finished*, and had looked faintly betrayed by the answer. "It is done in the sense that it meets numbers," she said. "It can never be done in the sense that it does one thing the same way for ever."

For anything that reads and writes text, "done" means a measured success rate within a tolerance, not one fixed output. This was the idea she had been circling since the spring, and it had gradually become the way she wrote everything. Now it had a place to be tested. Festival season was three weeks away.

## Why not just a rule?

It began, as every sensible discussion did, with a question she had been told to ask at the start. *Why is this not ordinary software?*

The safe mode answered it. The rules-only version, built for emergencies, found about ninety-six in a hundred of the fixed-shape numbers, with no model at all. Anaya had kept the number in front of her all year as a baseline. It was the thing every other part had to beat, and it did, but she was glad to be able to say by how much. The machine bought them names, addresses, Hinglish and the sentences that point to someone without saying who. Without those it was a rule. She wrote the difference, with figures, on the first page of the product requirements: what the machine bought, and what it cost.

She also wrote the acceptance criteria one last time, as a contract between product and engineering. Retrieval, generation, safety, speed and cost, each with a number, each attached to the golden dataset and a way of measuring it. The test of the contract was that Imran could run it without once asking what "good" meant.

## Four kinds of number

There was a tendency in the dashboard that she had begun to see everywhere. When teams are shown many numbers they stop being able to tell which question each answers.

Imran, who liked tidy lists, drew four columns. The *business outcome*: the count in Lakshmi's weekly sweep. The *system's quality*: the share found, the share wrongly hidden. The *operating* numbers: cost, speed, the slow tail. And a *user signal*: how often the agents pressed the button that said the guard had hidden something they needed.

"A dashboard that mixes these cannot answer any question clearly," he said. "A model can score ninety-five on its own test, and agents may still ignore the tool because it is irritating. You'll need all four. Only the first tells you whether anyone's better off."

Anaya made one more addition. She asked Imran to model the cost of the whole *successful* task and not of the call, including the review time of the people who looked at the unsure cases in the morning. The honest figure was higher. It was also the one a finance director would ask about.

## What a prototype lacks

A dish you cook well for two people is not an item on a restaurant menu. The recipe is the same. But you also need reliable supplies, a price that works, other cooks who can make it, and a plan for the night when four hundred people order it.

Imran gave her the list a week before the review, and he called it the *production delta*: everything missing between a prototype and a service. She found it humbling. Identity: who is calling, and are they allowed to? Persistence: where does the state live, and what if the machine restarts? Retries, queues and timeouts. Monitoring and alerts. Secrets and where they are kept. Backups. Permissions. Deployment. Rollback. He split them into must-have, should-have and later. The test for the first group was a question. *What would stop you from going live tomorrow?*

It was a long list, and she noticed that none of it concerned the model.

## The night four hundred people order

Festival week was the test. Farah's records showed that in the week of last Diwali, messages to the chatbot had been six times the usual. People paid bills early to avoid being caught short. They topped up loans for gifts. And they wrote, in large numbers, to ask about late fees.

"Ten times, to be safe," said Imran. "Say ten."

At ten times the volume the question was which part would fail first, and the answer was the careful judge. It handled six in a hundred messages and each took longer than the rest. At ten times it would have a queue, and a queue in a live chat is a delay the customer feels.

Not every job belongs in the path between a customer pressing send and a reply. So the judge was moved off it. The quick boxes decided live. The unsure messages were hidden to be safe, as before, and put on a queue for the judge to deal with at its own pace, with the agent's screen updated when a verdict came. The same pattern applied to the slow job of ingesting a new policy document: upload, process, index and report status are separate steps that do not hold up a customer.

For the failures that were certain to come, they wrote a table, which Imran called the reliability matrix. For each dependency, what happens when it is slow, down, or rate-limited. If the model server was overloaded: safe mode, the strip across the agent's screen, and an alert. If the order lookup failed: treat twelve-digit numbers as sensitive. If the queue backed up beyond an hour: page Imran. The principle was one he repeated, because it contradicted the instincts of a lot of people who build things. A graceful reduced mode is often worth more than a bigger model. *Graceful degradation* means continuing to work, in a smaller and safe way, when part of the system fails.

## Trying it on a copy

The last third of the list concerned how changes reached the world, and this was where the Friday-night edit had taught the team the most.

There would be a *staging* system, a copy of the live one where a change is tried first, and a rule: anything that can change behaviour, a prompt, a model name, an index, a configuration, goes to staging, passes the gate, and only then reaches production. Imran proved it with a game. He deliberately pushed a bad instruction to staging and checked that production did not move. Then he changed a model name and watched the gate stop it.

The budget for response time went on a sheet. A *latency budget* divides the time a request may take among the stages it passes through. The sum had to come to a third of a second, and when Anaya filled in the numbers she found that the stage she had been worried about, the model, used less than she expected, and the stage no one had mentioned, the network between two of their own servers, used more. The largest share of the delay, as Imran said, is rarely in the stage people optimise first.

## Writing down the reasons

By the end of the week the architecture was a set of decisions, and Anaya, who had learned from the log she had kept since March, wrote each of them up in a form that Imran had been advocating for a year. An *architecture decision record* is a short note: the alternatives considered, the choice, the evidence, the consequences, and what would make you revisit it. She wrote four: the models, the way documents are found, workflow versus agent, and where things are stored. For each she included the option rejected and why. Then she did something Imran did not expect. She invented a new requirement that would overturn one of them, to see whether the note said what she would do. It did.

Buying the hosting was the last decision, and it was a vendor decision. Anaya scored three realistic options and one hypothesis, running it themselves, on a sheet. Quality. Data controls and region. Speed. Cost. Tooling. Support. And the last row, which most sheets omit: the *exit cost*, what it would take, in money, time and risk, to leave. A provider that wins on quality and on data controls, but costs a year to leave, can lock a company in for longer than the company's business plan.

Beside the sheet, she wrote the habit that would carry beyond all of it. A decision is a hypothesis with a price. Say when you would revisit it.

## What to carry forward

For anything that reads and writes text, "done" means a measured success rate within a tolerance, measured on named cases, with a plan for the rest of the time. The numbers fall into four kinds, business outcome, system quality, operating figures and user signals, and a dashboard that mixes them answers nothing. A prototype lacks a long list of things, the production delta, none of which is the model. Not every task belongs in the path between a customer and a reply; slow work can wait on a queue, and when a part fails the system should degrade gracefully into a reduced, safe mode. Changes are tried first on a copy of the live system, and response time is a budget divided among stages. Significant decisions are written down with the alternatives and a trigger for revisiting them, and a vendor is scored on more than quality and price, including what it would cost to leave.

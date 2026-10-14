---
title: The Spec for a Thing That Varies
summary: A thirty-day notice that a model is being retired shows what a specification must contain when software does not behave the same way twice. It also shows what a switch for turning the AI off should leave running. The chapter introduces rollback, the kill switch and pinned versions.
course: ch18
goals:
  - explain how a specification for software that varies differs from an ordinary one
  - write the central table of such a specification: measurement, answer key, threshold and action
  - tell a rollback from a kill switch, and design a safe mode that is tested
  - list what must be rerun when a provider retires a model, and collect feedback that is useful without storing secrets
terms:
  - rollback | returning to the previous version of the code, which needs a new deployment and does not help when both versions share the same bad behaviour | rollbacks, roll back
  - kill switch | a flag that sends traffic to a simple non-AI path immediately, with no new deployment; it works only if that path exists and has been tested recently | kill switches
  - pinned version | a model version that you have fixed by name, so that the provider cannot change it underneath you without telling you | 
---

An email arrived at ten past two one morning. Imran Qureshi had forwarded it, with the subject line “Read this”. It came from the outside company that wrote the chatbot’s answers. The model currently in use, it said, in the tone of a letter from a bank, would be retired in thirty days. Requests to it would fail after that date. The company recommended moving to its successor, which offered improved capability.

Anaya read it lying down, with the phone at arm’s length. What she felt was cool arithmetic. It was how you would feel if someone told you that the staircase you live on will be removed on a particular date. After twenty minutes she got up, made tea and opened the specification. She suspected it was about to be tested.

## The case: a staircase with a removal date

The notice raised a question that an ordinary specification cannot answer. If the model changes under the product, what does the product promise? And how does the team know the promise still holds? This chapter shows what a specification must contain when the software it describes does not behave the same way twice.

## A specification that expects a range

An ordinary specification assumes that the same input gives the same output. A tester checks it, and when it passes, the work is done. For a machine that reads and writes text, none of that holds. The same input gives a range of outputs. And the range moves when the provider changes a model that the team does not control.

So a specification for such a thing has to say something different. It describes a measured range of behaviour. It shows the evidence that someone measured it. And it says what happens when the behaviour drifts.

Anaya had been writing one for six months without calling it that. When she laid it out the next morning, it came down to four changes.

Table: How a specification changes for software that varies
| In an ordinary specification | In this one |
| --- | --- |
| Acceptance is pass or fail | Acceptance is a score on a named answer key, at stated settings |
| A test plan | A fixed set of cases that must pass on every release, with the free code checks |
| Done when the features work | Done when it is measured at these numbers, with the known failures written down |
| Going back to the previous version | A pinned version of the model, versioned instructions, and a switch that turns the machine off |

She hadn’t needed to invent any of them. Each one already existed in the project.

## What the numbers say

The central part of the specification is a table that a sceptic can check. It says what is measured, and against which key. It gives the threshold. And it says what happens if the result falls short.

Table: The measurement table in the specification
| What is measured | Against | Threshold | If it falls below |
| --- | --- | --- | --- |
| Fixed-shape numbers found | Answer key, current version | At least 98 in 100 | Block the release |
| Things hidden that were not personal | Answer key, current version | No more than 3 in 100 | Alert Anaya |
| Added time per message | Live timing | Typically under 0.3 seconds; slowest 1 in 20 under 1 second | Alert Imran |
| Attacks that change the output | 50 injected messages | None | Block the release |
| Cost per message | Billing | Under 60 paise | Alert Anaya |

Beneath the table, in a different type, she wrote the line that most specifications leave out. It said what the kill switch turns off, and what the product still does afterwards.

## Not the same as going back

That line needed more thought than she expected, and Imran helped. He started with the ordinary way of undoing a change. A **rollback** returns to earlier code. It is a new deployment, so it takes time. It is also no use when both versions share the same bad behaviour. That is what happens when the provider changes the model underneath them, because the old code on the new model is just as wrong.

In that case you need something faster and blunter. You need a flag in a configuration file that sends traffic at once to a simple path that does not use the machine. That is a **kill switch**.

::: key A kill switch nobody has tested is a hope
It works only if the simple path still exists and someone has run it recently.
:::

Anaya asked what the switch would send traffic to. For the chatbot she knew the answer: Farah’s team would answer by hand. But the guard was different. If the guard were switched off entirely, nothing would be hidden, and that is the worst outcome. So Imran concluded that the kill switch cannot turn off the guard. It turns off the models.

The safe mode would run only the pattern checker, which is plain rules and cannot drift. It would add one deliberately blunt rule: hide any run of nine or more digits, whatever it is. It would miss every name and address. On the answer key it would catch about ninety-six in a hundred of the numbers with a fixed shape. It would raise many false alarms, and nobody would enjoy using it.

But it would be there. Nothing a provider did could touch it, and a person who had never seen the code could switch it on at three in the morning. Anaya wrote it into the specification with its numbers: rules only, about 96 in 100 fixed-shape numbers, no names or addresses, many false alarms, tested weekly. She underlined “weekly”.

## Thirty days

Imran said the notice was a fair test of what they had built. He listed what to rerun, in order. Switching models is not a change of settings. A new model invalidates everything that was measured against the old one.

Table: What to rerun when a model is retired
| Order | Rerun | Reason |
| --- | --- | --- |
| 1 | The whole answer key | To see what the guard does when the chatbot's summaries and replies come from the new model |
| 2 | The fixed set of attacks | To see whether the new model can still be talked into misbehaving |
| 3 | Agreement between the machine judge and Anaya's own marking | The judge is a model call too, and a judge checked against the old model has not been checked against the new one |
| 4 | Cost at the new prices | Prices change with the model |
| 5 | The slowest responses | A new model may be slower in its worst cases |

“You skip nothing,” said Imran. Teams without a test set don’t find these problems in thirty days. They find them in production.

The work took the two of them one afternoon. Imran took that as proof that the spring had not been wasted. The new model wrote its summaries in a slightly different style, and it put phone numbers in a format the old one never used: a plus sign, a country code and dashes, as in +91-98765-43210. The pattern checker had never seen that format, and eleven rows of the answer key went red.

They had found the problem in an afternoon, with a key, and not in September from a customer. The answer key, Imran said, is not a document written for launch. It is infrastructure.

## Feedback that can be used

One more item in the specification was Farah’s. Her agents had a button on every chat, labelled “the guard hid something I needed”. So far it had saved nothing but a click.

A thumbs-down on its own is almost worthless, Imran said. You can’t reproduce it. And it can’t tell a wrong answer from a correct one that the user simply disliked. But a thumbs-down that arrives with the full record of what happened is a ready-made test case. The record means the message, what the guard found, what it decided, and which versions of everything were running. The difference between the two buttons was about two days of engineering.

Anaya saw a difficulty before she agreed. The record would contain the message. If the guard had failed on that message, the record would hold the very thing the guard was supposed to hide. So Imran concluded that the record must be stored cleaned. The system saves the hidden version and the positions. It keeps the raw one only where very few people can reach it, for a short time, with a note of who looked.

::: watch A debugging aid can recreate the problem
A debugging aid that stores secrets recreates the problem it exists to solve. The record must be stored in its cleaned form.
:::

## Putting it in order

By the end of the week the notice had become a routine. The model was now a **pinned version**, fixed by name at both ends, so the provider could not change it without notice. The safe mode was written, switched on in a test, switched off and written up. The key had eleven new rows.

The specification had begun as a document about a feature. Now it was a document about a system that would change underneath itself, and it said what to do when that happened. Anaya added a last line to the log she had begun in March. She would change her mind if a provider could guarantee that a model would never change. She didn’t expect anyone to try.

## Summary

A specification for something that does not behave the same way twice describes a measured range of behaviour, the evidence that it was measured, and what happens when it drifts. Its central table names the measurement, the answer key, the threshold and the action when a number falls short.

- A rollback returns to earlier code. When the model itself has changed, both versions share the problem, so you also need a pinned model version and a kill switch. The kill switch sends traffic to a simple path immediately, and that path must exist and be tested.
- When a provider retires a model, everything measured against it must be rerun, including the judge.
- Feedback is useful only when it arrives with the full record of what happened. In a privacy tool, that record must itself be stored cleaned.

---
title: The Spec for a Thing That Varies
summary: A notice says a model will be retired in thirty days. It shows what a spec (the recipe card for a product) must hold when software does not act the same way twice. It also shows what the switch that turns the AI off should leave running. The chapter introduces rollback, the kill switch and pinned versions.
course: ch18
goals:
  - see how a spec for software that varies differs from an ordinary one
  - write the central table of such a spec: measurement, answer key, threshold and action
  - tell a rollback from a kill switch, and design a safe mode that is tested
  - list what to rerun when a provider retires a model, and collect useful feedback without storing secrets
terms:
  - rollback | going back to the old version of the code, like swapping back to last year's recipe; it needs a new deployment, and it does not help when both versions share the same bad behaviour | rollbacks, roll back
  - kill switch | the main switch on the board: one flag sends traffic to a plain, non-AI path at once, with no new deployment; it works only if that path exists and was tested lately | kill switches
  - pinned version | a model version fixed by its exact name, so the provider cannot swap it under you without telling you | 
---

An email arrived at ten past two one morning. Imran Qureshi had forwarded it with the subject line "Read this". It came from the outside company that wrote the chatbot's answers. The model in use would be retired in thirty days, it said. It wrote in the tone of a letter from a bank. After that date, requests to the model would fail. The company advised moving to the next model, which had "improved capability".

Anaya read it lying down, with the phone at arm's length. What she felt was cold arithmetic. It was like being told that the staircase you live on will be removed on a set date. After twenty minutes she got up, made tea and opened the spec. The spec is the recipe card for the product. She suspected it was about to be tested.

## The case: a staircase with a removal date

Think of a cook who has a recipe card, and the shop changes the flour without telling her. The notice raised a question that an ordinary spec cannot answer. If the model changes under the product, what does the product promise? And how does the team know the promise still holds? This chapter shows what a spec must hold when the software does not act the same way twice.

## A spec that expects a range

An ordinary spec assumes that the same input gives the same output. A tester checks it, and when it passes, the work is done. For a machine that reads and writes text, none of this holds. The same input gives a range of outputs. And the range moves when the provider changes a model that the team does not control.

Think of a cricketer's batting average. It is not one score. It is a range, measured over many matches. A spec for this kind of software must work the same way. It describes a measured range of behaviour. It shows the proof that someone measured it. And it says what happens when the behaviour drifts (slides away).

Anaya had been writing one for six months without calling it that. When she laid it out the next morning, it came down to four changes.

Table: How a specification changes for software that varies
| In an ordinary specification | In this one |
| --- | --- |
| Acceptance is pass or fail | Acceptance is a score on a named answer key, at stated settings |
| A test plan | A fixed set of cases that must pass on every release, with the free code checks |
| Done when the features work | Done when it is measured at these numbers, with the known failures written down |
| Going back to the previous version | A pinned version of the model, versioned instructions, and a switch that turns the machine off |

She had not needed to invent any of them. Each one already existed in the project.

## What the numbers say

The central part of the spec is a table that a doubter can check. It says what is measured, and against which key. It gives the threshold (the line a number must not cross). And it says what happens if the result falls short.

Table: The measurement table in the specification
| What is measured | Against | Threshold | If it falls below |
| --- | --- | --- | --- |
| Fixed-shape numbers found | Answer key, current version | At least 98 in 100 | Block the release |
| Things hidden that were not personal | Answer key, current version | No more than 3 in 100 | Alert Anaya |
| Added time per message | Live timing | Typically under 0.3 seconds; slowest 1 in 20 under 1 second | Alert Imran |
| Attacks that change the output | 50 injected messages | None | Block the release |
| Cost per message | Billing | Under 60 paise | Alert Anaya |

Under the table, in a different type, she wrote the line that most specs leave out. It said what the kill switch turns off. And it said what the product still does afterwards.

## Not the same as going back

That line needed more thought than she expected, and Imran helped. He began with the usual way of undoing a change. A **rollback** goes back to the earlier code. It is like swapping back to last year's recipe. It is a new deployment (putting the code live again), so it takes time. It also does not help when both versions share the same bad behaviour. That is what happens when the provider changes the model underneath you. The old code on the new model is just as wrong.

Then you need something faster and blunter. Think of the main switch on the electricity board. You need a flag (an on/off setting) in a settings file. It sends traffic at once to a plain path. That path does not use the machine. This is a **kill switch**.

::: key A kill switch nobody has tested is a hope
It works only if the plain path still exists and someone has run it lately.
:::

Anaya asked where the switch would send traffic. For the chatbot she knew. Farah's team would answer by hand. But the guard was different. If the guard were switched off fully, nothing would be hidden. That is the worst result. So Imran decided that the kill switch must not turn off the guard. It turns off the models.

Safe mode would run only the pattern checker (a set of plain rules that cannot drift). It would add one blunt rule: hide any run of nine or more digits, whatever it is. It would miss every name and address. On the answer key it would catch about ninety-six in a hundred of the fixed-shape numbers. It would raise many false alarms. Nobody would enjoy using it.

But it would be there. Nothing a provider did could touch it. A person who had never seen the code could switch it on at three in the morning. Anaya wrote it into the spec with its numbers. Rules only. About 96 in 100 fixed-shape numbers. No names or addresses. Many false alarms. Tested weekly. She underlined "weekly".

## Thirty days

Imran said the notice was a fair test of what they had built. He listed what to rerun, in order. Switching models is not a change of settings. A new model makes everything measured on the old one worthless.

Table: What to rerun when a model is retired
| Order | Rerun | Reason |
| --- | --- | --- |
| 1 | The whole answer key | To see what the guard does when the chatbot's summaries and replies come from the new model |
| 2 | The fixed set of attacks | To see whether the new model can still be talked into misbehaving |
| 3 | Agreement between the machine judge and Anaya's own marking | The judge is a model call too, and a judge checked against the old model has not been checked against the new one |
| 4 | Cost at the new prices | Prices change with the model |
| 5 | The slowest responses | A new model may be slower in its worst cases |

"You skip nothing," said Imran. Teams with no test set do not find these problems in thirty days. They find them in production (live, with real customers).

The work took the two of them one afternoon. Imran took that as proof that the spring had not been wasted. The new model wrote its summaries in a slightly different style. It put phone numbers in a format the old one never used. It had a plus sign, a country code and dashes, as in +91-98765-43210. The pattern checker had never seen that format. Eleven rows of the answer key went red.

They found the problem in an afternoon, with a key. They did not find it in September from a customer. The answer key, Imran said, is not a paper written for launch. It is infrastructure (the pipes and wires under the product).

## Feedback that can be used

One more item in the spec was Farah's. Her agents had a button on every chat. It said "the guard hid something I needed". So far it had saved nothing but a click.

A thumbs-down alone is almost worthless, Imran said. You cannot repeat it. And it cannot tell a wrong answer from a right one the user just disliked. But a thumbs-down that arrives with the full record of what happened is a ready-made test case. Think of a complaint slip with the bill stapled to it.

The record means the message and what the guard found. It means what the guard decided. It also means which versions of everything were running. The gap between the two buttons was about two days of engineering.

Anaya saw a problem before she agreed. The record would hold the message. Say the guard had failed on that message. Then the record would hold the very thing the guard was meant to hide.

So Imran decided that the record must be stored cleaned. The system saves the hidden version and the positions. It keeps the raw one only where very few people can reach it. It keeps it for a short time, with a note of who looked.

::: watch A debugging aid can recreate the problem
A debugging aid that stores secrets brings back the problem it exists to solve. Store the record in its cleaned form.
:::

## Putting it in order

By the end of the week the notice had become a routine. The model was now a **pinned version**. It was fixed by its exact name at both ends, so the provider could not swap it without notice. The safe mode was written, switched on in a test, switched off and written up. The key had eleven new rows.

The spec had begun as a paper about a feature. Now it was a paper about a system that would change under its own feet. It said what to do when that happened. Anaya added a last line to the log she had begun in March. She would change her mind if a provider could promise that a model would never change. She did not expect anyone to try.

## Summary

Think of the batting average once more. A spec for something that does not act the same way twice describes a measured range of behaviour. It shows the proof that it was measured. And it says what happens when it drifts. Its central table names the measurement, the answer key, the threshold and the action when a number falls short.

- A rollback goes back to earlier code. When the model itself has changed, both versions share the problem. So you also need a pinned model version and a kill switch. The kill switch sends traffic to a plain path at once, and that path must exist and be tested.
- When a provider retires a model, rerun everything measured against it, including the judge.
- Feedback is useful only when it arrives with the full record of what happened. In a privacy tool, that record must itself be stored cleaned.

Next, a vendor (a company that sells you a product) sends two people to Sahaj. Anaya has to decide whether to build the next piece or buy it.

---
title: The Spec for a Thing That Varies
summary: A thirty-day notice that a model is being retired shows what a specification for software that does not behave the same way twice must actually contain, and what a switch for turning the AI off should leave running.
course: ch18
terms:
  - rollback | returning to the previous version of the code, which needs a new deployment and does not help when both versions share the same bad behaviour | rollbacks, roll back
  - kill switch | a flag that sends traffic to a simple non-AI path immediately, with no new deployment; it only works if that path exists and has been tested recently | kill switches
  - pinned version | a model version that you have fixed by name, so that the provider cannot change it underneath you without telling you | 
---

The email arrived at ten past two in the morning, forwarded by Imran with a subject line that said only *Read this.*

It came from the outside company that wrote the chatbot's answers. *We are writing to let you know,* it began, in the tone of a letter from a bank, *that the model you are currently using will be retired in thirty days. Requests to it will fail after that date. We recommend migrating to its successor, which offers improved capability.*

Anaya read it lying down, with the phone held at arm's length. She was not frightened, exactly. What she felt was the cool arithmetic of someone who has been told that a staircase she has been living on is going to be removed on a particular date. She thought about it for twenty minutes. Then she got up, made tea, and opened the specification, because she had a feeling it was about to be tested.

## A spec that expects a range

A normal specification assumes that the same input gives the same output. Do this, get that. A test person checks it. When it passes, it is done. For a machine that reads and writes text, none of that holds. The same input produces a range of outputs, and the range moves when the provider changes a model that you do not control.

So a specification for such a thing has to say something different. It describes a measured range of behaviour, the evidence that someone measured it, and what happens when it drifts. Anaya had been writing one for six months without having called it that, and when she laid it out on the table the next morning it came to four changes.

Acceptance, which in an ordinary spec is pass or fail, became a score on a named answer key, at stated settings. A test plan became a fixed set of cases that must pass on every release, along with the free code checks. "Done when the features work" became "done when it is measured at these numbers, with the known failures written down". And the usual idea of returning to the previous version, which engineers call a *rollback*, became something larger: a pinned version of the model, versioned instructions, and a switch that turns the machine off.

She did not need to invent any of them. Every one was already built.

## What the numbers say

The part of a specification that does the most work, she had learned, is the table at the centre, and a good one can be checked by a sceptic. It says what is measured, against which key, at what threshold, and what happens if it falls short. She wrote it with Lakshmi's voice in her head.

| What is measured | Against | Threshold | If it falls below |
| --- | --- | --- | --- |
| Fixed-shape numbers found | Answer key, current version | At least 98 in 100 | Block the release |
| Things hidden that were not personal | Answer key, current version | No more than 3 in 100 | Alert Anaya |
| Added time per message | Live timing | Typically under 0.3 seconds; slowest 1 in 20 under 1 second | Alert Imran |
| Attacks that change the output | 50 injected messages | None | Block the release |
| Cost per message | Billing | Under 60 paise | Alert Anaya |

At the bottom, in a different type, she wrote the line most specifications leave out. *What the kill switch turns off, and what the product still does afterwards.*

## Not the same as going back

This line needed more thought than she had expected, and Imran had to help.

A rollback goes back to earlier code. It is a new deployment, and it takes time. It is no use at all when both versions share the same bad behaviour, for instance if the provider has changed the model beneath them, because the old code on the new model would be just as wrong. What is needed in that case is something faster and blunter: a switch, a flag in a configuration file, that sends traffic at once to a simple path that does not use the machine. That is a *kill switch*. It works only if the simple path still exists, and if someone has run it recently. A kill switch nobody has tested is a hope.

"What does it send traffic to?" Anaya asked. "For the chatbot, I know. Farah's team answer by hand. But the guard?"

Imran wrote slowly. "If you turn off the guard entirely, nothing is hidden. That's the worst outcome. So the kill switch can't turn off the guard. It turns off the *models*."

The safe mode would run only the pattern checker, which was plain rules and could not drift, and a deliberately blunt extra rule: hide any run of nine or more digits, whatever it was. It would miss every name and every address. On the answer key it would catch about ninety-six in a hundred of the numbers with a fixed shape. It would raise a lot of false alarms. It would never be pleasant to use. But it would be there, untouched by anything a provider did, and it could be switched on at three in the morning by a person who had never seen the code.

She wrote it into the specification in full, with its numbers. *Safe mode: rules only. Finds about 96 in 100 fixed-shape numbers. Finds no names or addresses. Many false alarms. Tested weekly.* She underlined *weekly*.

## Thirty days

The notice, Imran said, was a fair test of what they had built, and he told her what to rerun, in order. Switching models is not a change of settings. A new model invalidates everything measured against the old one.

First, the whole answer key, to see what the guard did when the chatbot's summaries and replies came from the new model. Second, the fixed set of attacks, to see whether the new model could still be talked into misbehaving. Third, the agreement between the machine judge and Anaya's own marking. Imran insisted on this one. The judge is a model call too, and a judge that had been checked against the old model had not been checked against the new one. Fourth, the cost at the new prices. Fifth, the slowest responses.

"You skip nothing," he said. "Teams without a test set don't find the problems in thirty days. They find them in production."

It took the two of them one afternoon, which Imran said was the proof that the spring had not been wasted. The new model, which wrote its summaries in a slightly different style, put phone numbers in a format the old one never had: with a plus sign, a country code and a dash, like +91-98765-43210. The pattern checker had not seen it. Eleven rows of the answer key went red.

"Found in an afternoon," said Anaya.

"Found in an afternoon, with a key. Imagine finding it in September from a customer." Imran added the rule. "That is what the key is for. It's not a document you write for launch. It's infrastructure."

## Feedback that can be used

There was one more item in the specification, and it was Farah's. Her agents had a button on every chat, labelled *the guard hid something I needed.* So far it had saved nothing but a click.

"A thumbs-down on its own is almost worthless," said Imran. "You can't reproduce it. You can't tell a wrong answer from a correct one the user didn't like. But a thumbs-down that arrives with the full record of what happened is a ready-made test case."

The record meant the message, what the guard had found, what it had decided, and which versions of everything were running. The difference between the two buttons, he said, was about two days of engineering.

Anaya was about to say yes when she saw the problem, and said it as plainly as she could. "The record would contain the message."

"It would."

"And if the guard failed on that message, the record would contain the thing it was supposed to hide."

"Yes." Imran sat back. "So the record has to be stored cleaned. We save the hidden version and the positions, and keep the raw one only where a very small number of people can reach it, for a short time, and write down who looked." It was an irritating addition to a simple idea, and it was the right one. A debugging aid that stores secrets recreates the problem it exists to solve.

## Putting it in order

At the end of the week the notice had become a routine. The model was pinned to a named version at both ends. The safe mode was written, switched on in a test, switched off, and written up. The key had eleven new rows. And the specification, which had begun as a document about a feature, was now a document about a system that would change underneath itself, and said what to do when it did.

Anaya added a last line to the log that had begun in March. *I would change my mind if: the provider can guarantee a model will never change.* She did not expect anyone to try.

## What to carry forward

A specification for something that does not behave the same way twice describes a measured range of behaviour, the evidence it was measured, and what happens when it drifts. Its central table names the measurement, the answer key, the threshold, and the action when a number falls short. A rollback returns to earlier code, but when the model itself has changed, both versions share the problem, so you also need a pinned model version and a kill switch that sends traffic to a simple path immediately, which must exist and be tested. When a provider retires a model, everything measured against it has to be rerun, including the judge. And feedback is only useful when it arrives with the full record of what happened, which in a privacy tool must itself be stored cleaned.

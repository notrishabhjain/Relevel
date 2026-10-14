---
title: Designing for the Wrong Answer
summary: At ninety percent accuracy, one answer in ten is wrong, and what the screen does about that answer decides whether people trust the tool. Then a pilot, designed so that it can fail, gives a stranger result: the system works and nothing changes. The chapter introduces refusals, pilots and failure thresholds.
course: ch20 ch205
goals:
  - describe four things a screen should do about a wrong answer
  - design a refusal that leads to a person, and the screen to show when the AI is switched off
  - set up a pilot with one existing business number, a comparison group, a failure threshold and a long enough window
  - work out, in the right order, why a pilot works but does not move the business number
terms:
  - refusal | a system saying plainly that it cannot do something and offering a route to a person; it is designed on purpose and not left to chance | refusals
  - pilot | a limited trial designed to show whether a feature helps the business, which says in advance what result would count as failure | pilots
  - failure threshold | the result, written down before a pilot starts, below which you will call it a failure | 
---

In the last week of August, Farah Sheikh stood in the doorway of the glass room with a cup of tea and asked a question. If the guard was right nine times out of ten, what should she tell her team about the tenth? Anaya had been waiting for this question for weeks. It is the question that decides whether a tool gets used.

At ninety percent, one answer in ten is wrong. No amount of engineering removes that last tenth. So what the screen does when the tool is wrong decides whether people trust it or drop it. That is not an engineering decision. An engineer can say that a confidence score exists. The product owner decides what the agent sees when the score is low.

## The case: the tenth answer

Anaya had sketched the agent’s screen on paper in April. She did it again, using what she had learned since. This time it came down to four things.

Read the table by asking one thing of each row: what would the agent see on the screen?

Table: Four things the screen should do about a wrong answer
| Principle | What it means | In the guard |
| --- | --- | --- |
| Show evidence that opens | A bare claim is only a demand to trust. A claim the reader can check in a second is evidence | The note "1 detail hidden. Click to see why" opens the exact words that were hidden, with the reason. This was why the form required a quotation |
| Think about speed | A half-decision is a hazard, so a decision cannot be streamed | Nothing appeared on the agent's screen until the guard had finished. A number that appears and then changes is worse than a spinner |
| Use confidence behind the scenes | A percentage next to an answer asks the agent to judge something they cannot calibrate, and the machine's own confidence is usually badly calibrated | High confidence: hide it and say so. Middling: hide it, say "hidden to be safe" and send it to a person later. Very low: leave the text alone but mark the message for review |
| Make correcting it quick | What an agent does when the tool is wrong is the most valuable data in the building, and most products throw it away | One click and one line. The button offers the original for this chat only, asks what the agent expected, and records the question, the evidence and the answer together |

If correcting takes longer than doing the job by hand, nobody will correct. And an empty feedback table will then look like satisfaction. A thumbs-down only tells the team that something was wrong. A corrected record says what the answer should have been. That is a test case, written by Farah’s team for nothing.

Farah asked again what she should say about the tenth. Anaya’s answer was this. The guard would be visibly unsure about some answers, and it would say why. It could be corrected faster than the agent could do the job unaided. And the wrong answers the agents never saw would be found another way.

## What it says when it cannot

Anaya had been avoiding one screen, and she spent a Tuesday designing it. Every system looks good when it works. Trust is built on the screen that says “I can’t”, and many products design that screen last, or never.

For the guard, a **refusal** covers the moments when it cannot safely do the thing. Take a customer who attaches a photograph of an Aadhaar card to the free chat. The guard cannot yet black out a number inside a picture. The honest design was not to pretend. The chat would say, in all three languages, in words written by Farah and approved by Lakshmi: please do not share identity cards here; use the secure upload, or press this button to speak to a person.

::: key A refusal that offers a person earns trust
A refusal that gives a route to a human earns more trust than a system that always produces something, because users judge a system partly by what it declines. A feature that never refuses teaches them that its confidence means nothing.
:::

The last screen was for when the machine was off. Anaya had already built the safe mode. Now she designed what agents saw while it was on: a thin yellow strip across the top, reading “Safe mode: names and addresses are not being hidden”. If turning off the machine left a blank screen, the switch would only swap one failure for another.

## A test that could fail

By the end of the month the screens were done, and Lakshmi asked for a pilot. She didn’t want a launch. She wanted a test, and she wanted Anaya to say in advance what would disappoint her.

Everything the team had measured so far was about the system. Was the finder right? Could the judge be trusted? Did the sorter work in every box? None of that answered the question that decides whether anyone pays for the next quarter: did the feature help the business? A system can be ninety-four percent accurate and change nothing. Nobody may use it. Or the step it speeds up may never have been the slow part.

So the first job was to find the slow part. Anaya and Farah timed a week of work in the support office, without changing anything. The agents spent almost no time on identity numbers. They didn’t read them, copy them or care about them.

What was slow, and what worried Lakshmi, was somewhere else. Every month she ran a privacy sweep. She took a spot check of five hundred chats from the logs and counted how many still held an unhidden identity number. In July, forty-six of the five hundred did.

A **pilot** rests on four decisions.

Table: The four decisions of a pilot
| Decision | What it means | Sahaj's choice |
| --- | --- | --- |
| The number | One measure the business already tracks, not a metric invented for the occasion | The sweep count |
| The comparison | The same team before and after is weak evidence. Two comparable groups over the same stretch is much stronger | Two support teams on the same chatbot: Pune with the guard, Nashik without |
| The failure threshold | The result below which the pilot is called a failure, written before it starts | After four weeks, if Pune's sweep count is not at least half of Nashik's, or if Pune's agents switch the guard off in more than two chats in ten, the pilot has failed. A guardrail: agent handling time may not rise by more than five percent |
| The time window | Long enough for novelty to wear off, since any new tool looks better than it is in its first fortnight | Six weeks |

Lakshmi read the page. Instead of signing it, she handed it back and asked for one more line. What will you tell me if it works and the number does not move?

## The pilot that worked

The pilot began on the first of September. By the end of the second week, Anaya was reading the dashboard with a feeling she didn’t trust. The guard was working. In Pune it hid forty to fifty details a day. The button was seldom used. The scoreboard against the answer key was at its best ever, and handling time was flat.

Lakshmi ran the sweep early, to be sure. Pune had forty-one in five hundred, and Nashik forty-three. Nothing had changed.

Anaya looked at the two numbers for a long minute. The system worked. The business number hadn’t moved. And she had been told in advance that this was possible. It is the most disorienting result in the field. The instinct, always, is to go back and improve the system, because that is what teams know how to measure.

She resisted. Lakshmi’s extra line was on the page. Under it, Anaya had written three questions to ask, in the order that experience says is most likely to find the answer.

Table: Three questions to ask when it works and the number does not move
| Order | Question | Result at Sahaj |
| --- | --- | --- |
| 1 | Are people using it? Low adoption is the commonest cause and the easiest to check | Yes, the guard was running on every chat |
| 2 | Does its output reach the place where the decision is made? | Answered in eleven minutes, below |
| 3 | Was the step that was sped up on the critical path at all? | Not needed |

The second question took her eleven minutes. She asked Imran where the sweep drew its five hundred chats from. He frowned, opened a diagram and went quiet.

The nightly job copied from the raw table, which existed before the guard did. The guard cleaned the messages the agents saw, and the history sent onward. But the logs that the sweep read were made from the original messages, written before the guard ran. Nobody had touched that table. The guard had been protecting everything except the one place Lakshmi looked.

“Clean before it is stored,” said Anaya. “I wrote that in April.” Imran said she had written it for the history, and he hadn’t applied it to the log.

It took him two days to move the guard in front of the raw table. In the third week, Pune’s sweep count fell to nine in five hundred, while Nashik’s stayed at forty-two. Anaya stood in the corridor for a long time after she saw it. She had a number, and it had moved. It had moved because she had written a test that could fail, and had insisted on believing it when it did.

## Summary

At ninety percent accuracy, one answer in ten is wrong, and the product owner decides what the screen does about it.

- Four things matter. Show evidence that opens. Think about speed. Use confidence internally to choose behaviour, not as a number on the screen. And make correcting quicker than doing it by hand.
- A refusal is a screen designed on purpose, and it ends in a route to a person. So is the screen for when the AI is switched off.
- To learn whether a system helps the business, find the slow part first. Then run a pilot with one number the business already tracks, a comparison group, a failure threshold written in advance and a window long enough for novelty to fade.
- When it works and the number does not move, ask in order: is it used, does its output reach where the decision is made, and was that step the slow one?

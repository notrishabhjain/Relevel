---
title: Designing for the Wrong Answer
summary: A tool that is right nine times in ten is wrong the tenth time. What the screen does then decides if people trust it. Next, a pilot built so it can fail gives a strange result. The tool works, and nothing changes. You meet refusals, pilots and failure thresholds.
course: ch20 ch205
goals:
  - name four things a screen should do about a wrong answer
  - design a refusal that leads to a person, and the screen to show when the AI is switched off
  - set up a pilot with one number the business already tracks, a comparison group, a failure threshold and a long enough window
  - work out, step by step, why a pilot works but the business number does not move
terms:
  - refusal | a polite "no" from the tool, like a shopkeeper saying "not here, go to that counter"; it says plainly it cannot do the task and points to a person; you design it on purpose | refusals
  - pilot | a small trial run, like a trial batch before cooking for the whole wedding; it shows if a feature helps the business, and says in advance what result means failure | pilots
  - failure threshold | the pass mark you write down before the trial starts; if the result falls below it, you call the trial a failure | 
---

In the last week of August, Farah Sheikh stood at the door of the glass room. She held a cup of tea. She asked one question. If the guard was right nine times out of ten, what should she tell her team about the tenth time?

Anaya had waited weeks for this question. It decides if a tool gets used.

Think of a calculator that is wrong one time in ten. You would stop trusting it. Now think of one that says "I am not sure here, please check". You would keep using it. At ninety percent, one answer in ten is wrong. No amount of engineering removes that last tenth. So the screen decides what happens next. That is not an engineering choice. An engineer can say a confidence score exists (a number for how sure the tool is). The product owner decides what the agent sees when that number is low.

## The case: the tenth answer

Anaya had drawn the agent's screen on paper in April. She drew it again with what she had learned since. This time it came down to four things.

Read the table with one question for each row. What would the agent see on the screen?

Table: Four things the screen should do about a wrong answer
| Principle | What it means | In the guard |
| --- | --- | --- |
| Show evidence that opens | A bare claim only says "trust me". A claim the reader can check in one second is evidence | The note "1 detail hidden. Click to see why" opens the exact words that were hidden, with the reason. This is why the form needed a quotation |
| Think about speed | A half-made decision is a risk, so a decision cannot be streamed | Nothing showed on the agent's screen until the guard had finished. A number that appears and then changes is worse than a spinner |
| Use confidence behind the scenes | A percentage next to an answer asks the agent to judge something they cannot judge. The machine's own confidence is usually badly calibrated | High confidence: hide it and say so. Middling: hide it, say "hidden to be safe" and send it to a person later. Very low: leave the text alone but mark the message for review |
| Make correcting it quick | What an agent does when the tool is wrong is the most valuable data in the building. Most products throw it away | One click and one line. The button offers the original for this chat only. It asks what the agent expected. It records the question, the evidence and the answer together |

Say fixing a wrong answer takes longer than doing the job by hand. Then nobody will fix it. The feedback table (the list where fixes are saved) stays empty, and an empty table looks like happy users.

A thumbs-down only says "something was wrong". It is like a teacher marking a cross with no comment. A corrected record says what the answer should have been. That is a test case, and Farah's team wrote it for free.

Farah asked again what she should say about the tenth answer. Anaya had three things to tell her. First, the guard would show when it was unsure, and say why. Second, fixing it would be faster than the agent doing the job alone. Third, the wrong answers the agents never saw would be found another way.

## What it says when it cannot

Anaya had been avoiding one screen. She spent a Tuesday designing it.

Every system looks good when it works. Trust is built on the screen that says "I can't". Many products design that screen last, or never.

For the guard, a **refusal** is what it does when it cannot do the task safely. Think of a shop assistant who says, "We don't stock this. Try the shop next door." You trust that shop more. Here is an example. A customer attaches a photo of an Aadhaar card to the free chat. The guard cannot yet black out a number inside a picture.

The honest design was not to pretend. The chat would speak in all three languages. Farah wrote the words and Lakshmi approved them. They said: please do not share identity cards here. Use the secure upload, or press this button to speak to a person.

::: key A refusal that offers a person earns trust
A refusal that points to a person earns more trust than a system that always gives some answer. People judge a system partly by what it says no to. A feature that never says no teaches them that its confidence means nothing.
:::

The last screen was for when the machine is off. Anaya had already built the safe mode (the switch that turns the guard off). Now she designed what agents see while it is on. It is a thin yellow strip across the top. It reads "Safe mode: names and addresses are not being hidden". Think of a "closed" sign on a shop door. A blank screen would leave people guessing. The switch would only swap one failure for another.

## A test that could fail

By the end of the month the screens were done. Lakshmi asked for a pilot. She did not want a launch. She wanted a test. And she wanted Anaya to say in advance what would disappoint her.

Until now the team had measured only the system. Was the finder right? Could the judge be trusted? Did the sorter work in every box? None of this answered the question that decides the next quarter's money. Did the feature help the business?

A system can be ninety-four percent accurate and change nothing. Maybe nobody uses it. Or the step it speeds up was never the slow part. It is like buying a faster oven when the queue is at the billing counter.

So the first job was to find the slow part. Anaya and Farah timed a week of work in the support office. They changed nothing. The agents spent almost no time on identity numbers. They did not read them, copy them or care about them.

The slow part was somewhere else, and it worried Lakshmi. Every month she ran a privacy sweep. She took a spot check of five hundred chats from the logs (the written record of every chat). She counted how many still held an identity number that was not hidden. In July, forty-six of the five hundred did.

A **pilot** rests on four decisions. Think of a trial batch before a wedding feast. You pick one dish, one tasting group, a pass mark and enough days to be sure.

Table: The four decisions of a pilot
| Decision | What it means | Sahaj's choice |
| --- | --- | --- |
| The number | One measure the business already tracks, not a metric made up for the occasion | The sweep count |
| The comparison | The same team before and after is weak evidence. Two like groups over the same weeks is much stronger | Two support teams on the same chatbot: Pune with the guard, Nashik without |
| The failure threshold | The result below which the pilot is called a failure, written before it starts | After four weeks, if Pune's sweep count is not at least half of Nashik's, the pilot has failed. It has also failed if Pune's agents switch the guard off in more than two chats in ten. A guardrail: agent handling time may not rise by more than five percent |
| The time window | Long enough for the shine to wear off. Any new tool looks better than it is in its first fortnight | Six weeks |

Lakshmi read the page. She did not sign it. She handed it back and asked for one more line. What will you tell me if it works and the number does not move?

## The pilot that worked

The pilot began on the first of September. By the end of week two, Anaya read the dashboard (one screen of numbers). She did not trust the feeling it gave her. The guard was working. In Pune it hid forty to fifty details a day. The button was seldom used. The scoreboard against the answer key was the best ever. Handling time was flat.

Lakshmi ran the sweep early, to be sure. Pune had forty-one in five hundred. Nashik had forty-three. Nothing had changed.

Anaya looked at the two numbers for a long minute. The system worked. The business number had not moved. She had been told in advance this could happen. It is the most confusing result in the field. It is like a student who studies hard and the marks stay the same. The urge is to go back and improve the system. Teams know how to measure that.

She held back. Lakshmi's extra line was on the page. Under it, Anaya had written three questions. They were in the order most likely to find the answer.

Table: Three questions to ask when it works and the number does not move
| Order | Question | Result at Sahaj |
| --- | --- | --- |
| 1 | Are people using it? Low use is the commonest cause and the easiest to check | Yes, the guard was running on every chat |
| 2 | Does its output reach the place where the decision is made? | Answered in eleven minutes, below |
| 3 | Was the step that was sped up on the critical path at all? | Not needed |

The second question took her eleven minutes. She asked Imran where the sweep took its five hundred chats from. He frowned. He opened a diagram and went quiet.

The nightly job copied from the raw table. That table was there before the guard was. The guard cleaned the messages the agents saw. It also cleaned the history sent onward. But the logs the sweep read came from the original messages. They were written before the guard ran. Nobody had touched that table. The guard had protected everything except the one place Lakshmi looked. It is like locking every door in the house and leaving the window open.

"Clean before it is stored," said Anaya. "I wrote that in April." Imran said she had written it for the history. He had not applied it to the log.

It took him two days to move the guard in front of the raw table. In the third week, Pune's sweep count fell to nine in five hundred. Nashik's stayed at forty-two. Anaya stood in the corridor a long time after she saw it. She had a number, and it had moved. It moved because she wrote a test that could fail. And she believed it when it did.

::: key What you can now say
Fill each N from your own project.
- My feature has a specification with one table. It holds the measurement, an answer key of N rows, a threshold of N, and the action when a number falls short.
- Before a vendor (an outside company we pay) sees a message, I ask three questions in order. My written rule names N things that are never sent.
- I ran a pilot on one number the business already tracked. It had a comparison group and a failure threshold written before it began. The number moved from N to N.
:::

## Summary

At ninety percent accuracy, one answer in ten is wrong. The product owner decides what the screen does about it.

- Four things matter. Show evidence that opens. Think about speed. Use confidence behind the scenes to choose what happens, not as a number on the screen. Make correcting quicker than doing the job by hand.
- A refusal is a screen you design on purpose, and it ends in a route to a person. So is the screen for when the AI is switched off.
- To learn if a system helps the business, find the slow part first. Then run a pilot. Use one number the business already tracks and a comparison group. Write the failure threshold in advance. Make the window long enough for the shine to fade.
- When it works and the number does not move, ask in order. Is it used? Does its output reach where the decision is made? Was that step the slow one?

Next, for two hours in September the guard hides every order number in Pune, and the dashboard stays green.

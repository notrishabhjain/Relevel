---
title: Designing for the Wrong Answer
summary: At ninety percent, one answer in ten is wrong, and what the screen does about that one decides whether the tool is trusted. Then a pilot that was designed to be able to fail does something stranger: it succeeds, and nothing changes.
course: ch20 ch205
terms:
  - refusal | a system saying plainly that it cannot do something and offering a route to a person, which is designed on purpose and not left as an accident | refusals
  - pilot | a limited trial designed to show whether a feature helps the business, which states in advance what result would count as failure | pilots
  - failure threshold | the result, written down before a pilot starts, below which you will call it a failure | 
---

"If it is right nine times out of ten," said Farah, "what do I tell my team about the tenth?"

She asked it standing, with a cup of tea, in the doorway of the glass room. It was the last week of August and the humidity had broken, and there was a new, thin light coming in through the blinds. Anaya had been waiting for this question for weeks. It was the one that decided whether the thing they had built would be used.

At ninety percent, one in ten is wrong, and no amount of engineering removes the last tenth entirely. What the screen does when it is wrong decides whether the tool is trusted or abandoned. And that is not an engineering decision. An engineer can say that a confidence score exists. The product owner decides what the agent sees when it is low.

## Four things on the screen

Anaya had sketched the agent's screen in April on paper. Now she did it again, with what she had learned, and found that it came down to four things.

**Show the evidence.** When the guard hid a number, the agent saw a small note: *1 detail hidden. Click to see why.* The click opened the exact words that had been hidden, and the reason. A bare claim, *something was hidden*, is only a demand to trust. A claim the reader can check in a second is evidence. This was why she had insisted on the quotation in the form: the evidence had to open.

**Think about speed.** She had learned this on the train. The decision to hide something could not be streamed, because a half-decision is a hazard. So nothing appeared on the agent's screen until the guard had finished. A number that appears and then changes as it is being written is worse than a spinner.

**Use confidence to choose what to do, and do not display it.** The finder produced a confidence figure for every finding. It would have been easy to show it. *Hidden: name (73%).* But a percentage next to an answer asks the agent to judge something they cannot calibrate, and the machine's own sense of how sure it is tends to be badly calibrated anyway. Used behind the scenes, though, it could change what the screen did. High confidence: hide it and say so. Middling: hide it, say *hidden to be safe*, and send it to a person later. Very low: leave the text alone but mark the message for review. Confidence became a choice among behaviours, not a number to look at.

**Make correcting it quick.** When the guard was wrong, what an agent did next was the most valuable data in the building, and most products throw it away. Anaya had the button, *the guard hid something I needed*. She sharpened it. It now offered to show the original for this chat only, asked what the agent had expected instead, and wrote down the question, the evidence and the answer together. If correcting took longer than doing the job by hand, nobody would correct, and an empty feedback table would look like satisfaction. Hers took one click and one line.

"A thumbs-down tells you something was wrong," she told Farah. "This tells us what it should have said. That's a test case, written by your team, for nothing."

Farah thought about it. "So what do I say about the tenth one?"

"You say: it will be visibly unsure about some of them, it will tell you why, and you can correct it faster than you can do it yourself. And the ones it gets wrong that you never see, we will find another way."

## What it says when it cannot

There was one screen she had not designed, and she realised that she had been avoiding it.

Every system looks good when it works. Trust is built on the screen that says *I can't*. Many products design it last, or never. She spent a Tuesday on it.

For the guard, a *refusal* meant the moments when it could not safely do the thing. A customer attaches a photograph of an Aadhaar card to the free chat. The guard cannot yet black out a number in a picture. The honest design was not to pretend. The chat would say, in all three languages, written by Farah and approved by Lakshmi: *Please don't share identity cards here. Use the secure upload, or press this button to speak to a person.* A refusal that gives a route to a human earns more trust than a system that always produces something, because users judge it partly by what it declines. A feature that never refuses teaches them that its confidence means nothing.

The last screen was the one for when the machine was off. She had already built the safe mode. She now designed what the agents saw when it was on: a thin yellow strip across the top, *Safe mode: names and addresses are not being hidden*. If turning off the machine left a blank screen, the switch would only replace one failure with another.

## A test that could fail

By the end of the month the screens were done, and Lakshmi asked for a pilot.

"I don't want a launch," she said. "I want a test. And I want you to tell me in advance what would disappoint you."

Everything the team had measured so far was about the system: whether the finder was right, whether the judge could be trusted, whether the sorter worked in every box. All necessary. None of it answered the question that decides whether anyone pays for the next quarter: did it help the business? A system can be ninety-four percent accurate and change nothing. Nobody may use it. Or the step it speeds up may never have been the slow part.

So, first, find the slow part. Anaya and Farah timed a week of work in the support office, without changing anything. The agents spent almost no time on identity numbers. They did not read them, did not copy them, did not care. What was slow, and what worried Lakshmi, was elsewhere. Every month she ran a privacy sweep, a spot check of five hundred chats from the logs, to count how many still contained an unhidden identity number. In July, forty-six of the five hundred had.

That was the number. A pilot rests on four decisions.

*The number.* One measure the business already tracks. Not a new metric invented for the occasion. The sweep count would do.

*The comparison.* The same team before and after is weak evidence. Two comparable groups over the same stretch is much stronger. Sahaj had two support teams: Pune and Nashik, doing the same work on the same chatbot. Pune would run with the guard. Nashik would run without.

*The failure threshold.* This is the result below which the pilot is called a failure, written down before it starts. Hers read: *If after four weeks Pune's sweep count is not at least half of Nashik's, or if Pune's agents switch the guard off in more than two chats in ten, the pilot has failed.* She added a guardrail: agent handling time could not rise by more than five percent.

*The time window.* Long enough for the novelty to wear off. Any new tool looks better than it is in its first fortnight. Six weeks.

Lakshmi read the page and, instead of signing it, handed it back. "Add one more line. What will you tell me if it works and the number doesn't move?"

## The pilot that worked

The pilot began on the first of September. By the end of the second week Anaya was reading the dashboard with a feeling she did not trust.

The guard was working. She could see it. In Pune it hid forty to fifty details a day. Agents used the button seldom. The scoreboard against the answer key was at its best ever. Handling time was flat.

The sweep, which Lakshmi ran early to be sure, said that Pune had forty-one in five hundred, and Nashik forty-three.

Nothing had changed.

For a long minute she looked at the two numbers. The system worked, and the business number had not moved, and she had been told in advance that this was possible. It is the most disorienting result in the field, and the instinct, always, is to go back and improve the system, because that is what teams know how to measure.

She resisted it. Lakshmi's line was on the page, and she had written under it an order of investigation, three questions, in the order that experience says is most likely to find the answer.

*First: are people using it? Low adoption is the commonest cause and the easiest to check.* They were. The guard was running on every chat.

*Second: does the output reach the place where the decision is made?* She sat very still.

*Third: was the step we sped up even on the critical path?*

The second question took her eleven minutes. She asked Imran where the sweep drew its five hundred chats from. He frowned, opened a diagram, and went quiet.

"The nightly job," he said. "It copies from the raw table. The one that existed before the guard. The guard cleans the messages the agents see. It cleans the history we send on. But the logs the sweep reads are made from the original messages, written before the guard runs. We never touched that table."

The guard had been protecting everything except the place Lakshmi looked.

"Clean before it is stored," said Anaya, in a flat voice. "I wrote that in April."

"You wrote it for the history. I didn't apply it to the log."

It took him two days to move the guard in front of the raw table. In the third week, Pune's sweep count fell to nine in five hundred. Nashik's stayed at forty-two.

Anaya stood in the corridor a long time after she saw it. She had a number, and the number had moved, and the reason it had moved was that she had written a test that could fail and then insisted on believing it when it did.

## What to carry forward

At ninety percent, one answer in ten is wrong, and the product owner decides what the screen does about it. Four things matter: show evidence that opens, think about speed, use confidence internally to choose behaviour and not as a number on the screen, and make correcting quicker than the manual way. A refusal is a screen to be designed on purpose, ending in a route to a person, and so is the screen for when the AI is switched off. To learn whether a system helps the business, find the slow part first, then run a pilot with one number the business already tracks, a comparison group, a failure threshold written in advance, and a window long enough for novelty to fade. And when it works but the number does not move, ask three things in order: is it used, does its output reach where the decision is made, and was that step the slow one.

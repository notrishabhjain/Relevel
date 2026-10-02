---
title: A Plan Others Can Believe
summary: A strategy is only a sentence until other people can act on it. Anaya learns to promise outcomes instead of dates, to list who can say no, and to imagine the project already dead.
course: a6
terms:
  - roadmap | a plan that shows what a team will work on and roughly when; the useful kind promises outcomes in three columns, Now, Next and Later, instead of dates | outcome roadmap
  - kill criterion | a condition, written down in advance, that means you stop the work | kill criteria
  - OKR | objectives and key results: a goal written in words, with a few numbers that show you reached it | OKRs, objectives and key results
  - key result | one of the three or four numbers under an objective that show whether you got there; it measures what changed for people, not what you shipped | key results
  - input metric | a number the team can change directly that you expect to move the outcome | input metrics
  - guardrail metric | a number that must not get worse while you chase the key results | guardrail metrics, guardrail
  - stakeholder | anyone who can help or stop a project, or who is affected by it | stakeholders
  - decision memo | a short document written so a busy person can decide after reading its first paragraph | memo
  - pre-mortem | a meeting where everyone imagines the project has failed and writes down why, before it starts | 
  - dependency | anything you need from outside your own team in order to finish: another team's work, a supplier, access to data, an approval | dependencies
---

The roadmap that Anaya's first manager had taught her to make looked like a railway timetable. Features down the side, months across the top, and a neat bar for each one that began on a date and ended on a date. It was a beautiful object. She had made a dozen of them, and she could not remember one that had come true.

The trouble was not that the dates were wrong, though they were. The trouble was that every bar was a promise to build something, and nobody had promised that it would help. When the dates slipped, as they did, the roadmap became a list of broken commitments. When the feature turned out not to matter, it became a list of broken commitments to the wrong thing.

She started the Wednesday after her Sunday call with a clean page and a different idea.

## Three columns, no dates

An *outcome roadmap* has three columns instead of a calendar. **Now** is what the team is working on, and it is a firm commitment. **Next** is what it expects to do after that, and it is likely but may change. **Later** is what it is exploring, ordered by current thinking and promised to no one. Each item is not a feature but an outcome, a change in what people can do, with a few lines of detail underneath.

| Field | Her entry for the first item |
| --- | --- |
| Outcome | Support staff no longer see identity numbers or tax numbers in the chat, and neither do the exports |
| Evidence | 37 of 400 conversations in one week; five interviews |
| Owner | Anaya and Imran |
| Depends on | Read access to the chat system; Lakshmi's sign-off |
| Kill criterion | Stop if agents switch it off in more than two of every ten chats within four weeks |

The last line was the one she had never written before. A *kill criterion* is a condition decided in advance that means you stop. The reason it works is psychological. After three weeks of effort, nobody is the right person to say whether the work is going badly, because everybody has a reason to say it is going fine. Written down at the start, when no one has yet fallen in love, the line says *this is what failure will look like* in plain enough words that nobody has to argue.

It matters even more when the work involves software that reads and writes text. Nobody can know in advance whether such a thing will be accurate enough, because its accuracy is found by trying it. A date promised before the first test is a guess wearing a suit.

## The goal and the numbers beneath it

Lakshmi's question was still on her desk, on a sticky note: *How would you know it works?*

Companies answer that kind of question with objectives and key results, usually shortened to *OKRs*. The objective says in words what you want. The *key results* beneath it are three or four numbers that show you got there. The trick is that a key result must measure an outcome, what changed for people, and not an output, what you shipped. "Release the privacy tool" is an output; you can do it and nothing may happen. "Fewer conversations leave the chat with a personal detail in them" is an outcome.

Anaya wrote:

*Objective: Make Sahaj's support chat safe to export.*

*Key result 1: The share of conversations that leave the chat with no unhidden personal detail goes from 91 percent to 99 percent.*

*Key result 2: Support agents report fewer than one chat in fifty in which the tool hid something they needed.*

Two other kinds of number sat alongside them. An *input metric* is something the team can move directly, which is expected to move the outcome: for her, the share of fixed-shape numbers the tool caught. You cannot order the outcome around, but you can improve the input. And a *guardrail metric* is a number that must not get worse while you chase the others. It is the one that stops a team from winning in a way that hurts. Hers was the false-alarm rate: the share of things the tool hid that were not personal at all. A tool that blanked every number in every message would score perfectly on the first key result and be unusable. She set the limit at three in a hundred.

There was one more distinction she had to hold on to, and it was easy to lose when the work got technical. The tool would have its own score, on its own test. That was a measure of the tool. The key results measured what happened to people. A tool can do very well on its own test and still be ignored by agents who find it irritating, or arrive too late to matter. She needed both kinds of number, and she needed to know which was which.

## The people who can say no

"Who is going to read this?" Imran had asked. "I mean actually read it."

It was the right question, and not one she knew the answer to. Anyone who can help or stop a project, or who will be affected by it, is a *stakeholder*, and the useful thing about them is that they are not equal. She drew a square with two axes: how much power someone had over the project, and how much they cared about it. Then she put names in the corners.

| | Cares little | Cares a lot |
| --- | --- | --- |
| **Power over it** | *Keep satisfied:* the founders, Lakshmi | *Work closely with:* Imran, the head of support |
| **Little power** | *Keep informed:* other product teams | *Keep involved:* Farah's agents, customers |

Next to each name she wrote two more things. What they were measured on, which explains how they will react. And what they could decide: whether they chose, advised, or could veto.

Lakshmi was in the wrong corner. She had real power and, as far as Anaya could tell, almost no interest, which is the combination that kills projects. In this kind of work the people in security, legal and compliance often have a veto and little day-to-day involvement. They sit quietly in the upper left until the day before launch, and then they say no, and they are right to. The remedy was easy and slightly embarrassing. Anaya moved her name to the right-hand column by the simple method of going to see her once a week and asking what she would need.

## The memo

The founders would not read a plan. They would read the first paragraph of a memo, and perhaps the second.

She wrote it as she had been taught, with the ask first, then the reason, then the cost, then the biggest risk, then the alternatives, including doing nothing. A *decision memo* is written so that a busy person can act after reading only its opening.

*I am asking for Imran for half his time for eight weeks, and about forty thousand rupees in cloud costs, to build a small tool that hides personal details in our support chat before they travel any further. In one week of chats, 37 of 400 conversations contained an identity number, a tax number, a bank account or an address, and nothing removes them from our logs, exports or the outside company's systems. The biggest risk is that the tool misses things written in Hinglish. We will test it on real examples before it touches a live chat, and we will stop if agents turn it off in more than two of ten chats.*

She read it to Imran, who said "Hm," which from him was praise.

## Imagining the funeral

Before the meeting, she held a gathering that Imran had been dreading and Farah, to everyone's surprise, enjoyed. The rule was simple. Everybody was to assume it was six months from now and the project had failed. They were to write down, separately and without talking, why.

A *pre-mortem*, as the exercise is called, works because people will name risks in an imagined failure that they would never raise about a plan they are expected to support.

Farah wrote that the agents had switched it off because it hid a customer's callback number in the middle of a conversation, and nobody had told them how to get it back. Lakshmi wrote that it had missed an address written in Hinglish, a screenshot had gone out in an export, and a regulator had asked how that was possible. Imran wrote that it had added a second to every reply, and customers had complained that the chatbot felt slow. Anaya wrote that the test file had never been kept up to date, so nobody could tell whether version four was better than version three.

Four failures. She wrote each in the risk list, with how likely it was, how damaging it would be, who owned it, and what they would do about it.

| Risk | Likely | Damage | Owner | What to do |
| --- | --- | --- | --- | --- |
| Agents switch it off | Medium | High | Farah | Show agents what it hides, and how to see it again |
| Misses Hinglish addresses | High | High | Anaya | Test on real Hinglish before launch; narrow the scope if it fails |
| Slows replies | Medium | Medium | Imran | Measure the added time from the first week |
| Test file goes stale | High | Medium | Anaya | One person owns it; update on every change |

Beside it she kept a shorter list, of the things she needed from other people. A *dependency* is anything the project needs from outside the team: someone else's work, a supplier's cooperation, access to data, an approval. They are where plans slip, because nobody on the team controls them. Hers were three: read access to the chat system, Lakshmi's sign-off before anything went live, and a promise from the outside company that its software would not change how it accepted text. The first she could have by Friday. The third she was less sure of.

## Wednesday afternoon

The founders took eleven minutes. They asked how long, how much, and whether Lakshmi had agreed. Anaya answered the third question first. The decision went into the log she had started on the first night, with a new line under it.

*I would change my mind if: Imran's half-time cannot be spared past week three.*

She walked out into the corridor and noticed that her hands were steady, which surprised her. A plan that other people can believe, she was starting to understand, is not a plan that sounds confident. It is one that has already told them how it might fail.

## What to carry forward

A roadmap that promises outcomes in three columns, Now, Next and Later, breaks less than one that promises features on dates, and a condition for stopping written at the start makes stopping easier. Goals are best written as an objective with a few numbers beneath it, where the numbers measure what changed for people, not what was shipped. Alongside them go the numbers the team can move directly, and the numbers that must not get worse. Every project has people who can help or stop it, and the dangerous ones are those with power and no interest. A memo opens with the request. And a meeting where everyone imagines the failure has already happened is the cheapest way to find out how it might.

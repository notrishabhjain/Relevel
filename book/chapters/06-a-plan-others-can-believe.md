---
title: A Plan Others Can Believe
summary: A strategy is a sentence until other people can act on it. The chapter covers promising outcomes instead of dates, writing goals as measurable results, mapping who can say no, and imagining the project already failed.
course: a6
goals:
  - build an outcome roadmap with a kill criterion
  - write an objective with key results that measure what changed for people, plus an input metric and a guardrail
  - map stakeholders by power and interest and act on the dangerous corner
  - write a decision memo, run a pre-mortem and list dependencies
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

Anaya's first manager had taught her to make plans that looked like railway timetables: features down the side, months across the top, and a bar for each feature that began on one date and ended on another. She had made about a dozen. She could not remember one that had come true.

The dates were usually wrong, but that was not the main flaw. Each bar was a promise to build something, and none was a promise that the thing would help. When dates slipped, the plan became a list of broken commitments. When a feature turned out not to matter, it became a list of broken commitments to the wrong thing. After the founders agreed in principle to the privacy tool, Anaya started a new plan on a clean page, using a different structure.

This chapter describes that structure, the goals attached to it, the people who could stop it, and a meeting that tested it before it began.

## The case: a plan with no dates

The strategy of the previous chapter was a sentence. To become something that engineers, compliance staff and founders could act on, it needed an order of work, a way to tell whether the work succeeded, and an account of who could obstruct it. The sections below follow those three needs in turn, and a fourth, a meeting at which colleagues were asked to suppose that the project had already failed.

## The outcome roadmap

A *roadmap* in the form Anaya adopted has three columns and no calendar. *Now* holds the work the team is doing, and it is a firm commitment. *Next* holds what it expects to do afterwards, which is likely but may change. *Later* holds what it is exploring, ordered by current thinking and promised to nobody. Each item is stated as an outcome, a change in what people can do, not as a feature, and has a few lines of detail beneath it.

Table: Anaya's roadmap entry for the first item
| Field | Entry |
| --- | --- |
| Outcome | Support staff no longer see identity numbers or tax numbers in the chat, and neither do the exports |
| Evidence | 37 of 400 conversations in one week; five interviews |
| Owner | Anaya and Imran |
| Depends on | Read access to the chat system; Lakshmi's sign-off |
| Kill criterion | Stop if agents switch it off in more than two of every ten chats within four weeks |

The last line was new to her. A *kill criterion* is a condition decided in advance that means the work stops. It works for a psychological reason. After three weeks of effort nobody is the right person to judge whether the work is going badly, since everyone has a reason to say it is going well. Written at the start, before anyone is attached to the result, the condition describes failure in words that nobody has to argue about later.

Kill criteria matter more when the work involves software that reads and writes text. Its accuracy cannot be known in advance, because it is found by trying the software. A date promised before the first test is a guess presented as a commitment.

## Goals and the numbers beneath them

Lakshmi's question was still on a sticky note on Anaya's desk: how would she know that the tool worked? Companies answer this kind of question with *objectives and key results*, usually shortened to *OKR*. The objective says in words what is wanted. The *key results* beneath it are three or four numbers that show it was achieved.

::: key Outcomes, not outputs
A key result measures an outcome, what changed for people, and not an output, what was shipped. "Release the privacy tool" is an output: it can be done and nothing may change. "Fewer conversations leave the chat with a personal detail in them" is an outcome.
:::

Anaya wrote one objective and two key results. The objective was to make Sahaj's support chat safe to export. The first key result was that the share of conversations leaving the chat with no unhidden personal detail would rise from 91 percent to 99 percent. The second was that support agents would report fewer than one chat in fifty in which the tool had hidden something they needed.

Two other kinds of number accompany key results. An *input metric* is something the team can move directly that is expected to move the outcome. For her it was the share of fixed-shape numbers the tool caught: the outcome cannot be commanded, but the input can be improved. A *guardrail metric* is a number that must not get worse while the team pursues the others. It prevents winning in a way that does damage. Hers was the false-alarm rate, the share of hidden items that were not personal at all. A tool that blanked every number in every message would score perfectly on the first key result and be unusable, so she set the limit at three in a hundred.

One further distinction was easy to lose once the work became technical. The tool would have its own score on its own test, which measures the tool. The key results measure what happens to people. A tool can do well on its own test and still be ignored by agents who find it irritating, or arrive too late to matter. Both kinds of number were needed, and each had to be labelled as one or the other.

## The people who can say no

Imran asked who would actually read the plan. Anaya did not know. Anyone who can help or stop a project, or who is affected by it, is a *stakeholder*, and stakeholders are not equal. She drew a square with two axes, how much power a person had over the project and how much they cared about it, and placed names in it.

Table: Stakeholders by power and interest
| | Cares little | Cares a lot |
| --- | --- | --- |
| Power over it | Keep satisfied: the founders, Lakshmi | Work closely with: Imran, the head of support |
| Little power | Keep informed: other product teams | Keep involved: Farah's agents, customers |

Beside each name she recorded what the person was measured on, which explains how they will react, and what they could decide: whether they chose, advised or could veto.

Lakshmi was in the wrong corner. She had real power and, as far as Anaya could tell, little interest. That combination is the most dangerous, because staff in security, legal and compliance often hold a veto while taking little part in daily work. They stay quiet until the day before launch, and then say no, and they are usually right to. The remedy was ordinary. Anaya moved her to the second column by visiting her weekly and asking what she would need.

## The decision memo

The founders would not read a plan. They would read the first paragraph of a memo and perhaps the second. A *decision memo* is written so that a busy person can act after reading only its opening. The order is the request, the reason, the cost, the biggest risk, and the alternatives, including doing nothing.

::: example Anaya's opening paragraph
I am asking for Imran for half his time for eight weeks, and about forty thousand rupees in cloud costs, to build a small tool that hides personal details in our support chat before they travel any further. In one week of chats, 37 of 400 conversations contained an identity number, a tax number, a bank account or an address, and nothing removes them from our logs, exports or the outside company's systems. The biggest risk is that the tool misses things written in Hinglish. We will test it on real examples before it touches a live chat, and we will stop if agents turn it off in more than two of ten chats.
:::

The paragraph states the ask, the evidence, the main risk and the stopping condition in four sentences.

## Imagining the failure

Before the founders' meeting Anaya held a gathering that Imran had dreaded and Farah enjoyed. Everyone was to assume it was six months later and the project had failed, and to write down separately, without talking, why. A *pre-mortem* works because people will name risks in an imagined failure that they would not raise against a plan they are expected to support.

Farah wrote that agents had switched the tool off because it hid a customer's callback number in mid-conversation and nobody had told them how to get it back. Lakshmi wrote that it had missed an address written in Hinglish, a screenshot had gone out in an export, and a regulator had asked how that was possible. Imran wrote that it had added a second to every reply and customers had complained that the chatbot felt slow. Anaya wrote that the file of test examples had never been kept up to date, so nobody could tell whether the fourth version was better than the third.

Table: The risk list that came out of the pre-mortem
| Risk | Likelihood | Damage | Owner | Response |
| --- | --- | --- | --- | --- |
| Agents switch it off | Medium | High | Farah | Show agents what it hides and how to see it again |
| Misses Hinglish addresses | High | High | Anaya | Test on real Hinglish before launch; narrow the scope if it fails |
| Slows replies | Medium | Medium | Imran | Measure the added time from the first week |
| Test file goes stale | High | Medium | Anaya | One person owns it; update on every change |

Beside the list she kept a shorter one of things she needed from others. A *dependency* is anything the project needs from outside the team: someone else's work, a supplier's cooperation, access to data, an approval. Dependencies are where plans slip, because nobody on the team controls them. Hers were three: read access to the chat system, Lakshmi's sign-off before anything went live, and a promise from the outside company that its software would not change how it accepted text. The first she could have by Friday. She was less sure of the third.

## The outcome

The founders spent eleven minutes on the memo. They asked how long it would take, how much it would cost and whether Lakshmi had agreed. Anaya answered the third question first. The decision went into the log she had begun on the first night, with a new line beneath it: she would change her mind if Imran's half-time could not be spared beyond week three.

A plan that other people can believe is not one that sounds confident. It is one that has told them in advance how it might fail.

## Summary

A roadmap that promises outcomes in Now, Next and Later columns breaks less often than one that promises features on dates, and a kill criterion written at the start makes stopping easier.

- An objective states the goal in words, and key results measure what changed for people. An input metric is a number the team can move directly, and a guardrail metric must not get worse. A tool's own test score is a different thing from a key result.
- Stakeholders differ in power and interest. A person with power and no interest is the one most likely to stop a project late.
- A decision memo opens with the request, the evidence, the main risk and the stopping condition.
- A pre-mortem asks everyone to imagine the failure first, and its output is a risk list with owners. Dependencies, which the team does not control, are listed separately.

---
title: Sorting and Summarising
summary: One job has a right answer and one does not. The team measures a sorter and finds the failure that a single score was hiding, then checks a summary for the facts it left out. The chapter introduces classifiers, error costs and the must-keep list.
course: ch24 ch25
goals:
  - define a classifier and explain why a single overall score can hide a poor result
  - compare the costs of the two directions of error and decide which to lean towards
  - test a summary with a must-keep list instead of judging its prose
  - recognise that anything a system writes is another place personal details can be stored
terms:
  - classifier | a program that puts each input into one of a fixed set of categories, such as PAN, Aadhaar, mobile number or none of these | classifiers
  - must-keep list | for each document, the facts a reader must not lose, against which every summary is checked | must-keep lists
---

Farah Sheikh cut forty slips of paper from a printout one morning in April. Each carried a string of digits or letters of the kind her agents saw all day, some real in shape and some not, and on the back, in pencil, what it actually was. Ten were PANs, ten were Aadhaar numbers written in all the ways people write them, ten were mobile numbers, and ten were none of those: order numbers, loan reference numbers, an account number, a policy code. Anaya proposed to see whether the team's sorting program could sort them.

This chapter follows two tests carried out that week. One was of a job with a right answer, and the other was of a job without one. The first showed how a good average can hide a failure, and the second showed how to test text that cannot be graded by a program.

## The case: forty slips

Imran Qureshi had written the first version of the sorter over two evenings. It looked at a piece of text and said which of four boxes it belonged in. A program that puts each input into one of a fixed set of categories is a *classifier*, and a great deal of useful software is one. Its advantage over most things a machine does is that someone can say whether each answer was right. When there is a right answer, errors can be counted, and when errors can be counted, the system can be improved deliberately.

He had used what the team had learned over the previous three weeks. The instruction named the job, included two worked examples, one of them awkward, and fixed the format of the output. The forty slips were run through it and the scoreboard printed one line: 35 of 40 correct, or 87.5 percent. Farah was pleased. Anaya said it was a number and she did not yet know whether it was good, and asked to see it by box.

## What the single number hid

Imran split the result into four rows.

Table: The sorter's results by box
| What the slip really was | Right | Wrong |
| --- | --- | --- |
| PAN | 10 | 0 |
| Mobile number | 10 | 0 |
| Aadhaar | 9 | 1 |
| None of these | 6 | 4 |

The failure was in the bottom row. Four of the ten "none of these" slips, which were order numbers, account numbers and reference codes, had been sorted as Aadhaar numbers. They were twelve digits long, and the sorter had judged by shape and stopped. One real Aadhaar number had been sorted as "none of these" because the customer had written it with a dash and a space in the wrong places.

The overall figure had averaged a flawless result on three boxes with a poor one on the fourth. A single accuracy number is a good way to make a team feel better, and it says very little about where the errors are.

::: key The two errors are not the same size
When the sorter calls an order number an Aadhaar number, the guard hides something that is not secret. The agent sees a blank where an order number was and asks the customer to type it again, which costs about thirty seconds and some irritation. When the sorter calls an Aadhaar number "none of these", the number goes through. It enters the chat history, the logs, the weekly export and the outside company's system, and it stays there. One error is an annoyance. The other is the thing the project exists to prevent.
:::

The rule that followed was that when the sorter is unsure, it treats the number as sensitive. The team accepts more false alarms in exchange for fewer misses. Imran stressed that this is a statement of preference and not a technical decision. Anaya asked whose decision it was. His answer was hers, Lakshmi's, and Farah's, since Farah's agents would read the blanks.

The conversation held a difficulty that Anaya recognised at once. In the plan she had set a limit of three false alarms in a hundred as a guardrail. Leaning towards caution would push that number up. The two numbers would pull against each other, and she would have to manage the tension openly with the people who cared about each side.

## A summary that reads well

The second job of the week was of a different kind. When a conversation became too tangled for the chatbot, it handed the customer to a human agent and wrote a short summary at the top, so that the agent need not read forty messages. Farah had been told it worked well. Everyone said so, because it read beautifully, and Anaya observed that everyone said so because they had read it, and asked what was in it.

A summary has no single right answer, which is why teams often ship summarisers without knowing whether they work. A program cannot grade the prose, and a summary can be elegant and still have dropped the line that mattered. But it can be checked for whether particular facts survived.

Anaya began with a question that should come first: who reads this, and what will they do next? The reader was an agent about to speak to an upset customer, so the facts that must not be lost were the ones whose absence would embarrass the agent. For each of five long conversations she and Farah wrote a *must-keep list*, the facts a reader must not lose. The list for the first conversation read: the customer says she paid on the 3rd; she was promised a callback by Friday; the complaint is about a double charge; a loan application number was mentioned.

They then read the five summaries with the lists beside them, ticking.

Table: What the five summaries kept
| Summaries | Outcome |
| --- | --- |
| Three | Kept every fact on the list |
| One | Dropped the promised callback. The agent would have called cold, with no idea that the customer had been told to expect a call |
| One | Was well written, and had copied the customer's full Aadhaar number from the chat into its second line |

Farah put down her pen when she saw the last one. The summary held a copy of the number. Imran pointed out that it was a second place for the number to live: the summary is stored, goes to the agent and goes to the logs. The summary therefore had to be cleaned as well, which meant that the guard had to sit on the way out as well as on the way in.

::: key Clean what goes in, and clean what comes out
Anything a system writes can contain personal details copied from what it read. Anaya added this to the design beside the earlier rule about the history: clean what goes in; clean what comes out.
:::

## What the two jobs have in common

When Anaya described the week to Dr. Meenakshi Rao on Sunday, she found that she was explaining something that was hardly about machines. In the first case the team had decided what counted as failure, a wrong box, and which wrong box was worse. In the second case a failure was a missing fact. In both cases they counted that, and not the thing they happened to notice. Most of the skill in this field, Meenakshi said, is not about the machine. It is about being exact about what you are afraid of.

## Summary

A classifier puts each input into one of a fixed set of boxes, and because there is a right answer, it can be measured.

- A single overall score can hide a poor result in one box, so each category should be counted separately.
- The two directions of error rarely cost the same. Deciding which to lean towards is a product decision, made with the people who bear each cost, and it can pull against another target such as a limit on false alarms.
- A summary has no single right answer. To test it, write for each document a must-keep list of the facts a reader must not lose, and check every summary against the list.
- Whatever a system writes is another place personal details can live, so what comes out needs cleaning as well as what goes in.

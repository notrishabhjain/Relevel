---
title: Sorting and Summarising
summary: One job has a right answer and one does not. The team measures a sorter and finds a failure that a single score was hiding, then checks a summary for the facts it left out. This chapter introduces classifiers, the cost of each kind of error, and the must-keep list.
course: ch24 ch25
goals:
  - say what a classifier is, and why a single overall score can hide a poor result
  - compare the costs of the two directions of error, and decide which to lean towards
  - test a summary with a must-keep list instead of judging its prose
  - see that anything a system writes is another place personal details can be stored
terms:
  - classifier | a program that puts each input into one of a fixed set of categories, such as PAN, Aadhaar, mobile number or none of these | classifiers
  - must-keep list | for each document, the facts a reader must not lose, against which every summary is checked | must-keep lists
---

One morning in April, Farah Sheikh cut forty slips of paper from a printout. Each slip carried a string of digits or letters of the kind her agents saw all day. Some looked like the real thing, and some didn't. On the back of each, in pencil, she wrote what it actually was.

Ten were PANs. Ten were Aadhaar numbers, written in all the ways people write them. Ten were mobile numbers. And ten were none of those: order numbers, loan reference numbers, an account number, a policy code. Anaya wanted to find out whether the team's sorting program could sort them.

This chapter follows two tests from that week. One was of a job with a right answer, and the other was of a job without one. The first showed how a good average can hide a failure. The second showed how to test text that no program can grade.

## The case: forty slips

Imran Qureshi had written the first version of the sorter over two evenings. It looked at a piece of text and said which of four boxes it belonged in.

A program that puts each input into one of a fixed set of categories is a *classifier*, and a great deal of useful software is one. It has an advantage over most things a machine does. Someone can say whether each answer was right. When there is a right answer, you can count the errors. And when you can count the errors, you can improve the system on purpose.

Imran had used what the team learned over the previous three weeks. The instruction named the job. It included two worked examples, one of them awkward. And it fixed the format of the output.

They ran the forty slips through it, and the scoreboard printed one line: 35 of 40 correct, or 87.5 percent. Farah was pleased. Anaya said it was a number, and she didn't yet know whether it was a good one. She asked to see it box by box.

## What the single number hid

Imran split the result into four rows.

Table: The sorter's results by box
| What the slip really was | Right | Wrong |
| --- | --- | --- |
| PAN | 10 | 0 |
| Mobile number | 10 | 0 |
| Aadhaar | 9 | 1 |
| None of these | 6 | 4 |

The trouble was in the bottom row. Four of the ten "none of these" slips had been sorted as Aadhaar numbers. They were order numbers, account numbers and reference codes. All of them were twelve digits long, and the sorter had judged by shape and stopped there.

There was one error the other way as well. A real Aadhaar number had been sorted as "none of these", because the customer had put the dash and the space in the wrong places.

So the overall figure had averaged a perfect result on three boxes with a poor one on the fourth. A single accuracy number is a good way to make a team feel better. It says very little about where the errors are.

::: key The two errors are not the same size
Suppose the sorter calls an order number an Aadhaar number. The guard hides something that isn't secret. The agent sees a blank where the order number was and asks the customer to type it again. That costs about thirty seconds and some irritation.

Now suppose the sorter calls an Aadhaar number "none of these". The number goes through. It enters the chat history, the logs, the weekly export and the outside company's system, and it stays there. One error is an annoyance. The other is the very thing the project exists to prevent.
:::

The rule that followed was simple. When the sorter is unsure, it treats the number as sensitive. The team accepts more false alarms in return for fewer misses.

Imran stressed that this is a statement of preference, not a technical decision. Anaya asked whose decision it was. His answer was hers, Lakshmi's and Farah's, because Farah's agents would be the ones reading the blanks.

Anaya saw a difficulty at once. In her plan she had set a limit of three false alarms in a hundred, as a guardrail. Leaning towards caution would push that number up. The two targets would pull against each other. She would have to manage that tension openly, with the people who cared about each side.

## A summary that reads well

The second job of the week was of a different kind. When a conversation got too tangled for the chatbot, it handed the customer to a human agent. At the top it wrote a short summary, so the agent wouldn't have to read forty messages.

Farah had been told the summaries worked well. Everyone said so, because they read beautifully. Anaya noticed that everyone said so because they had read them. She asked what was in them.

A summary has no single right answer. That is why teams so often ship summarisers without knowing whether they work. A program can't grade the prose, and a summary can be elegant and still have dropped the one line that mattered. But you can check whether particular facts survived.

Anaya began with a question that should always come first. Who reads this, and what will they do next? The reader was an agent about to speak to an upset customer. So the facts that must not be lost were the ones whose absence would embarrass the agent.

For each of five long conversations, she and Farah wrote a *must-keep list*. This is the list of facts a reader must not lose. The list for the first conversation read: the customer says she paid on the 3rd; she was promised a callback by Friday; the complaint is about a double charge; a loan application number was mentioned.

Then they read the five summaries with the lists beside them, ticking off the facts.

Table: What the five summaries kept
| Summaries | Outcome |
| --- | --- |
| Three | Kept every fact on the list |
| One | Dropped the promised callback. The agent would have called cold, with no idea that the customer had been told to expect a call |
| One | Was well written, and had copied the customer's full Aadhaar number from the chat into its second line |

Farah put down her pen when she saw the last one. The summary held a copy of the number.

Imran explained what that meant. It was a second place for the number to live. The summary is stored, it goes to the agent, and it goes to the logs. So the summary had to be cleaned as well. The guard had to sit on the way out as well as on the way in.

::: key Clean what goes in, and clean what comes out
Anything a system writes can contain personal details copied from what it read. Anaya added this to the design, beside the earlier rule about the history: clean what goes in, and clean what comes out.
:::

## What the two jobs have in common

On Sunday Anaya described her week to Dr. Meenakshi Rao. As she talked, she found she was explaining something that was hardly about machines.

In the first test, the team had decided what counted as a failure: a wrong box. They had also decided which wrong box was worse. In the second test, a failure was a missing fact. In both cases they counted that, and not whatever they happened to notice.

Most of the skill in this field, Meenakshi said, isn't about the machine. It is about being exact about what you are afraid of.

## Summary

A classifier puts each input into one of a fixed set of boxes. Because there is a right answer, you can measure it.

- A single overall score can hide a poor result in one box, so count each category separately.
- The two directions of error rarely cost the same. Deciding which to lean towards is a product decision. It is made with the people who bear each cost, and it can pull against another target, such as a limit on false alarms.
- A summary has no single right answer. To test it, write a must-keep list for each document, with the facts a reader must not lose, and check every summary against it.
- Whatever a system writes is another place personal details can live. So what comes out needs cleaning as well as what goes in.

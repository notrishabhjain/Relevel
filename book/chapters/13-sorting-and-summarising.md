---
title: Sorting and Summarising
summary: One job has a right answer and one does not. The team tests a sorter and finds a failure that one score was hiding. Then they check a summary for the facts it left out. You meet classifiers, the cost of each kind of error, and the must-keep list.
course: ch24 ch25
goals:
  - say what a classifier is, and why one overall score can hide a poor result
  - compare the costs of the two kinds of error, and decide which way to lean
  - test a summary with a must-keep list instead of judging how well it reads
  - see that anything a system writes is another place personal details can sit
terms:
  - classifier | a sorter with fixed boxes, like the post office sorting letters by pin code: a program that puts each input into one of a fixed set of categories, such as PAN, Aadhaar, mobile number or none of these | classifiers
  - must-keep list | the facts a reader must not lose, written down for each document; every summary is ticked against it, like a shopping list | must-keep lists
---

One morning in April, Farah Sheikh cut forty slips of paper from a printout. Each slip carried a string of digits or letters, like the ones her agents saw all day. Some looked like the real thing, and some did not. On the back of each, in pencil, she wrote what it really was.

Ten were PANs. Ten were Aadhaar numbers, written in all the ways people write them. Ten were mobile numbers. And ten were none of those: order numbers, loan reference numbers, an account number, a policy code. Anaya wanted to know if the team's sorting program could sort them.

This chapter follows two tests from that week. One was of a job with a right answer. The other was of a job without one. The first showed how a good average can hide a failure. The second showed how to test text that no program can grade.

## The case: forty slips

Imran Qureshi had written the first version of the sorter over two evenings. It looked at a piece of text. It said which of four boxes the text belonged in.

A program that puts each input into one of a fixed set of boxes is a *classifier*. Think of the post office sorting letters by pin code. A lot of useful software works this way. It has an advantage over most things a machine does. Someone can say whether each answer was right. When there is a right answer, you can count the errors. When you can count the errors, you can improve the system on purpose.

Imran had used what the team learned over the last three weeks. The instruction named the job. It had two worked examples (finished samples of the output wanted), and one of them was awkward. It also fixed the format of the output.

They ran the forty slips through it. The scoreboard (the table that counts what was found and missed) printed one line: 35 of 40 correct, or 87.5 percent. Farah was pleased. Anaya said it was a number. She did not yet know if it was a good one. She asked to see it box by box.

## What the single number hid

Imran split the result into four rows.

Table: The sorter's results by box
| What the slip really was | Right | Wrong |
| --- | --- | --- |
| PAN | 10 | 0 |
| Mobile number | 10 | 0 |
| Aadhaar | 9 | 1 |
| None of these | 6 | 4 |

The trouble was in the bottom row. Four of the ten "none of these" slips had been sorted as Aadhaar numbers. They were order numbers, account numbers and reference codes. All of them were twelve digits long. The sorter had judged by shape and stopped there.

A rule would have caught most look-alikes like these. A real Aadhaar number does not start with 0 or 1. Its last digit is a check digit, worked out from the other eleven.

There was one error the other way as well. A real Aadhaar number had been sorted as "none of these". The customer had put the dash and the space in the wrong places.

So the overall figure had averaged a perfect result on three boxes with a poor one on the fourth. It is like a student with full marks in three subjects and a fail in the fourth. The average looks fine. One number is a good way to make a team feel better. It says very little about where the errors are.

::: key The two errors are not the same size
Say the sorter calls an order number an Aadhaar number. The guard hides something that is not secret. (The guard is the tool that finds and hides personal details.) The agent sees a blank where the order number was. The agent asks the customer to type it again. That costs about thirty seconds and some irritation.

Now say the sorter calls an Aadhaar number "none of these". The number goes through. It enters the chat history. It enters the logs (the tool's written diary of what happened). It enters the weekly export (a copy of the data sent out of the system). It enters the outside company's system. And it stays there. One error is an annoyance. The other is the very thing the project exists to prevent.
:::

The rule that followed was simple. When the sorter is unsure, it treats the number as sensitive. The team accepts more false alarms in return for fewer misses.

Imran stressed that this is a statement of preference. It is not a technical decision. Anaya asked whose decision it was. His answer was hers, Lakshmi's and Farah's. Farah's agents would be the ones reading the blanks.

Anaya saw a difficulty at once. In her plan she had set a limit of three false alarms in a hundred. It was a guardrail, like the railing on a bridge. Leaning towards caution would push that number up. The two targets would pull against each other. She would have to manage that openly, with the people who cared about each side.

## A summary that reads well

The second job of the week was of a different kind. A conversation could get too tangled for the chatbot. Then it handed the customer to a human agent. At the top it wrote a short summary, so the agent would not have to read forty messages.

Farah had been told the summaries worked well. Everyone said so, because they read beautifully. Anaya noticed that everyone said so because they had read them. She asked what was in them.

A summary has no single right answer. That is why teams so often ship summarisers without knowing whether they work. A program cannot grade the prose. A summary can be elegant and still have dropped the one line that mattered. But you can check whether particular facts survived.

Anaya began with a question that should always come first. Who reads this, and what will they do next? The reader was an agent about to speak to an upset customer. So the facts that must not be lost were the ones whose absence would embarrass the agent.

For each of five long conversations, she and Farah wrote a *must-keep list*. Think of a shopping list you tick off at the shop. It lists the facts a reader must not lose. The list for the first conversation read: the customer says she paid on the 3rd; she was promised a callback by Friday; the complaint is about a double charge; a loan application number was mentioned.

Then they read the five summaries with the lists beside them. They ticked off the facts.

Table: What the five summaries kept
| Summaries | Outcome |
| --- | --- |
| Three | Kept every fact on the list |
| One | Dropped the promised callback. The agent would have called cold, with no idea that the customer had been told to expect a call |
| One | Was well written, and had copied the customer's full Aadhaar number from the chat into its second line |

Farah put down her pen when she saw the last one. The summary held a copy of the number.

Imran explained what that meant. It was a second place for the number to live. The summary is stored. It goes to the agent. It goes to the logs. So the summary had to be cleaned too. The guard had to sit on the way out as well as on the way in.

::: key Clean what goes in, and clean what comes out
Anything a system writes can hold personal details copied from what it read. Anaya added this to the design, beside the earlier rule about the history: clean what goes in, and clean what comes out.
:::

## What the two jobs have in common

On Sunday Anaya described her week to Dr. Meenakshi Rao. As she talked, she found she was explaining something that was hardly about machines.

In the first test, the team had decided what counted as a failure: a wrong box. They had also decided which wrong box was worse. In the second test, a failure was a missing fact. In both cases they counted that, and not whatever they happened to notice.

Most of the skill in this field, Meenakshi said, is not about the machine. It is about being exact about what you are afraid of.

::: key What you can now say
Three sentences about measuring. Put your own numbers where N and M stand.
- I wrote the answer key before I ran the tool: N rows, kept in numbered versions.
- I changed one thing at a time, and the scoreboard showed what each version found, missed and wrongly flagged.
- I decided which error to lean towards, with the people who would bear it: N missed against M false alarms.
:::

## Summary

A classifier puts each input into one of a fixed set of boxes. There is a right answer, so you can measure it.

- One overall score can hide a poor result in one box. Count each category on its own.
- The two kinds of error rarely cost the same. Choosing which way to lean is a product decision. Make it with the people who bear each cost. It can pull against another target, such as a limit on false alarms.
- A summary has no single right answer. To test it, write a must-keep list for each document. Check every summary against it.
- Whatever a system writes is another place personal details can live. So clean what comes out as well as what goes in.

Next, Imran asks where the chatbot gets its knowledge of Sahaj, and the answer is a library of documents too long to read at once.

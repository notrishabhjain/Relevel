---
title: Sorting and Summarising
summary: One job with a right answer and one without. The team measures a sorter, finds the failure its single score was hiding, and then checks a summary for the thing it left out.
course: ch24 ch25
terms:
  - classifier | a program that puts each input into one of a fixed set of categories, such as PAN, Aadhaar, mobile number or none of these | classifiers
  - must-keep list | for each document, the facts a reader must not lose, against which every summary is checked | must-keep lists
---

Farah's desk had a small brass Ganesh, a mug that said *World's Okayest Team Lead* and, at that moment, forty slips of paper in four piles.

She had cut them from a printout that morning. On each slip was a string of digits or letters of the kind her agents saw all day, some real in shape and some not, and written on the back in pencil was the answer: what it actually was. Ten of them were PANs, with the five letters, four digits and a letter at the end. Ten were Aadhaar numbers, written in all the ways people write them. Ten were mobile numbers. And ten were none of those: order numbers, loan reference numbers, an account number, a policy code.

"Right," said Anaya. "Let's see whether the sorter can sort."

## A sorter with a right answer

Imran had written the first version over two evenings. It looked at a piece of text and said which of four boxes it belonged in. A program that does this, putting each input into one of a fixed set of categories, is called a *classifier*, and a great deal of useful software is one. Its great advantage over most things a machine does is that someone can say whether each answer was right. When there is a right answer, you can count errors. When you can count errors, you can improve the system on purpose.

He had used what they had learned in the last three weeks. The instruction named the job. It showed two worked examples, one of them awkward. The format came out the same every time.

They ran the forty slips through. The scoreboard printed a single line.

*35 of 40 correct. 87.5 percent.*

"That is good," said Farah, pleased.

"It is a number," said Anaya. "I don't know yet whether it's good." She had been careful about this since the beginning of April, when she had learned how often a single figure conceals the failure that matters. "Show me by box."

## What the single number hid

Imran split the result into four rows.

| What the slip really was | Right | Wrong |
| --- | --- | --- |
| PAN | 10 | 0 |
| Mobile number | 10 | 0 |
| Aadhaar | 9 | 1 |
| None of these | 6 | 4 |

The failure was in the bottom row. Four of the ten "none of these" slips, the order numbers and account numbers and reference codes, had been sorted as Aadhaar numbers. They were twelve digits long, and the sorter had judged the shape and stopped there. And one real Aadhaar number had been sorted as "none of these", because the customer had written it with a dash and a space in the wrong places.

The overall figure had averaged a spotless performance on three boxes with a poor one on the fourth. A single accuracy number is a good way to get a team to feel better. It tells you very little about where it is going wrong.

"The two kinds of error," said Imran, "are not the same size."

Farah looked at the piles. "No. They aren't."

When the sorter called an order number an Aadhaar number, the guard would hide something that was not secret. The agent, reading the chat, would see a blank where an order number had been. They would have to ask the customer to type it again. That would cost about thirty seconds and some irritation. When it called an Aadhaar number "none of these", the number went through. It went into the chat history, the logs, the weekly export and the outside company's system, and for ever. One error was an annoyance; the other was the thing the whole project existed to prevent.

"So we lean towards the cheaper mistake," said Anaya.

"When it is not sure, it treats the number as sensitive." Imran wrote it as a single line on the board. "We accept more false alarms to get fewer misses. That is a rule about what we prefer. It's not a technical decision."

"Whose decision is it?"

"Yours," said Imran. "And Lakshmi's. And Farah's, because she is the one who has to read the blanks."

This was perhaps the most important moment of the week, although nothing seemed to happen. Anaya understood that she had been handed a choice that no engineer could make for her, because it was about how much inconvenience to trade for how much risk. She also understood a difficulty. Back in the plan she had set a limit on false alarms, three in a hundred, as a guardrail. Leaning towards caution would push them up. The two numbers would pull against each other, and the pulling was something she would have to manage in the open, with the people who cared about each side.

## A summary that reads well

The second job of the week was a different kind altogether.

The chatbot had a feature Farah's team used a great deal. When a conversation grew too tangled for the chatbot to handle, it handed the customer to a human agent, and, so that the agent need not read forty messages, it wrote a short summary at the top. Farah had been told it worked well. Everyone said so. It read beautifully.

"Everyone says so because they read it," said Anaya. "Let's find out what is in it."

A summary has no single right answer, which is why teams ship summarisers without knowing whether they work. You cannot grade the prose with a program, and a summary can be elegant and still have dropped the line that mattered. But you can check whether particular facts survived.

So before reading any summary, she made the list she should have made first. It begins with a simple question: who reads this, and what will they do next? The reader was an agent about to speak to an upset customer, and what the agent would do next was say something to them. So the facts that must not be lost were the ones that would embarrass the agent by their absence. For each of five long conversations, she and Farah wrote a *must-keep list*: the facts a reader must not lose.

For the first conversation it read: *Customer says she paid on the 3rd. Customer was promised a callback by Friday. Complaint about a double charge. Loan application number mentioned.*

Then they read the five summaries, not for style, but with the lists beside them, ticking.

Three kept everything. One dropped the promised callback. The agent reading that summary would have called the customer cold and would have had no idea she had been told to expect a call. And one summary, which was lovely, had copied the customer's full Aadhaar number from the chat into its second line.

Farah put down her pen. "The summary has a copy of the number in it."

"It's a second place for it to live," said Imran. "The summary is stored. It goes to the agent. It goes to the logs. We have to clean the summary as well, which means the guard has to sit on the way out as well as the way in."

Anaya added it to the design, under the earlier rule about the history, in the same hand: *clean what goes in; clean what comes out.* She felt the pleasing tightness she had come to recognise as the feeling of a problem getting smaller by becoming more exact.

## What the two jobs have in common

When she described the week to Meenakshi on Sunday, she found that she was explaining something that was hardly about machines.

"You decided what counted as failure," Meenakshi said. "In the first case, a wrong box, and which wrong box was worse. In the second case, a missing fact. Then you counted that, and not the thing you happened to notice."

"I keep thinking we could have used the same method to evaluate anything. A hiring process. A triage desk."

"You could." The cat said something, and Meenakshi paid it no attention. "Most of the skill in this field is not about the machine. It is about being exact about what you are afraid of."

## What to carry forward

A classifier puts each input into one of a fixed set of boxes, and because there is a right answer, it can be measured. A single overall score can hide a poor result in one box, so each category should be counted separately, and the two directions of error compared, because they seldom cost the same. Deciding which error to lean towards is a product decision made with the people who bear each cost. A summary has no single right answer, so the way to test it is to write, for each document, the facts a reader must not lose, and check every summary against that list. And anything a system writes is another place personal details can live, so what comes out needs cleaning as well as what goes in.

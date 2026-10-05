---
title: How Good Is Good
summary: A founder asks the question every AI project eventually meets. The answer is two numbers, a choice between them that is not an engineer's to make, and a figure Anaya had quoted without checking. The chapter introduces recall and precision.
course: ch6
goals:
  - explain why a demonstration of a few working examples is not evidence
  - define recall and precision and compute each from a count of found, missed and falsely flagged items
  - decide which failure to favour by asking what happens to a real person when each occurs
  - treat a figure quoted by someone else as unverified until its test is visible
terms:
  - recall | of all the real items there were to find, the share the tool found; if there were 100 and it found 90, recall is 90 percent | 
  - precision | of everything the tool flagged, the share that really was what it claimed; if it flagged 100 and 80 were real, precision is 80 percent | 
---

In the first week of May the founders stopped at the glass room on their way to lunch. One of them, Mr. Bhatia, looked at the whiteboard and the scoreboard and asked the question that is eventually asked in every company that builds with AI: "Is it good?"

There was a pause that lasted a second too long. Imran Qureshi said that it had found fifteen of seventeen on the last run. Mr. Bhatia said that was good. Anaya pointed out that it was fifteen of seventeen on ten sentences the team had written itself, and that she did not yet know whether it was good. She could say in a week, with a number. Mr. Bhatia, who was not accustomed to that answer, said afterwards that it was the first time anyone had answered him that way.

This chapter develops the answer that Anaya promised: the two numbers that measure a tool that finds things, the choice between them, and the habit of checking a figure before repeating it.

## The case: a question with no number

Usually the answer to "is it good?" is a demonstration of three examples that worked. Such a demonstration says almost nothing about how often a system is right, because the three were chosen, and the cases that were not chosen are the ones that needed to be seen.

Imran had been working on a measurement of this kind, not for the guard but for the part that stands behind it: how well the chatbot found the right page of Sahaj's policies for a customer's question. The lessons applied almost word for word.

## A demonstration is not evidence

The method has three ideas, and the first is to write the answers before testing. A system cannot be judged by asking it questions and seeing whether the answers look right, because they will look right: plausible text is exactly what the machine produces. The work therefore begins with a list of real questions and the verified right answer to each. This is the answer key that Anaya had already built, written before the test and not after.

Farah wrote ten questions for the chatbot's search, in the words her customers used, before she opened the policy document. A question written after reading the document ends up using the document's words and makes the search look better than it is. Her questions included "Paisa kab milega", "Double charge hua hai" and "Mera loan reject kyun hua". Only then did she and Imran go through the pages and mark which page held the answer to each.

They ran the test. Six of the ten questions found the right page on the first try. Imran called this a perfectly normal first result for a system that works, and added that had it been nine or ten, he would have wanted to know whether somebody had cheated.

## Two ways to fail

The second idea took Anaya longer, because it hid in plain sight. A search step can go wrong in two opposite ways. It can leave out something that mattered, or it can bring back a pile of things that did not. Imran asked her to imagine sending a colleague to fetch the files for a meeting. If the colleague returns without the one file needed, that is one kind of failure. If the colleague returns with the whole cabinet, the needed file cannot be found among the rest, and that is the other.

::: def Recall and precision
*Recall* is the share of the real items there were to find that the tool found. If there were a hundred and it found ninety, recall is ninety percent. *Precision* is the share of what the tool flagged that really was what it claimed. If it flagged a hundred and eighty were real, precision is eighty percent.
:::

The two pull against each other. Widening the net catches more of what is wanted and more of what is not. Narrowing it gives a cleaner catch and misses more. Imran varied the number of pages the search returned per question, from one to three to five, and the figures moved as he had said: more pages improved recall and worsened precision, and fewer did the reverse. These are tendencies and not laws, and they must be measured on the real questions.

Anaya had been using these ideas for weeks without the words. She returned to the scoreboard.

Table: The earlier scoreboard, with recall and precision added
| Version | Found | Missed | False alarms | Recall | Precision |
| --- | --- | --- | --- | --- | --- |
| 1 | 11 | 6 | 5 | 65% | 69% |
| 3 | 15 | 2 | 2 | 88% | 88% |
| 4 | 14 | 3 | 1 | 82% | 93% |

Recall is found divided by found plus missed. Precision is found divided by found plus false alarms. "Missed" had been poor recall and "false alarm" had been poor precision all along. She had not needed new ideas so much as permission to use the old ones.

## Whose decision it is

The third idea came at the end of an afternoon. Imran asked which failure was worse for the guard: missing something, or flagging something that was not there. Anaya said at once that missing was worse, since a number that gets through is in five systems for ever. Imran said that for a different product the answer is reversed.

Table: Which failure is worse depends on what happens to a person
| Product | Worse failure | Why |
| --- | --- | --- |
| Tool that finds past cases for a lawyer | Missing a case | A missed case could lose a trial; an irrelevant case costs thirty seconds of reading |
| Chatbot that answers policy questions | Returning the wrong page | The model builds a confident answer from it, and a wrong policy given to a customer binds the company. A missing answer only creates a support ticket, which the company was receiving anyway |
| The guard | Missing a personal detail | The detail enters the history, logs, exports and an outside company's system |

Imran then made the point he most wanted to be clear. Which failure to minimise is a product decision and not an engineer's. If the engineer who built the tool is asked, the answer will be the one that is easiest for him to deliver. It was the second time in a month that Anaya had been handed a decision that technical skill could not make. The first, about leaning towards the cheaper mistake, had been informal. This was its mature form, with names and percentages. She wrote what she would take to Lakshmi and Farah on Thursday.

::: example Anaya's stated targets
For identity numbers with a fixed shape, recall of at least 98 in 100. Up to 3 false alarms in every 100 things the tool hides. If the two collide, recall wins, and I will say so in writing.
:::

The statement was easier to write than it would be to defend, which she accepted. A number that has been argued over is worth more than one that was never questioned.

## A number she had not checked

One more matter was uncomfortable, and Anaya dealt with it on a Friday night with the office empty. She went back to a figure she had quoted three times in meetings and written into the strategy memo: fourteen in a hundred, the share of Hindi personal details that an existing open tool could find, according to its own published report. She had used it to say that the gap in the market was real.

A question arrived in her head in Lakshmi's voice: against which answer key, written by whom, and could Lakshmi see the questions? Anaya could not answer. She had read a sentence in a document and repeated it. The figure might be right. It might also have been measured on sentences that looked nothing like Sahaj's customers' writing.

::: watch A quoted number is not evidence
A number quoted by a vendor, however honestly, is not evidence until one can see what it was measured against. That applies to other people's numbers and to one's own.
:::

She did not run the check that night. She wrote it at the top of the list, where it could not be dropped quietly: run the open tool on the team's answer key, and report whatever number comes out, including if it weakens the case for the project. It was the first time she had written a test whose result she feared, and she recognised that this is what the discipline is for.

## Summary

A demonstration of a few working examples says almost nothing about how often a system is right. To measure it, write the questions and their correct answers before looking at what the system says, in the words real users use, and then count.

- A tool can fail by missing things that mattered, which is poor recall, or by returning things that did not, which is poor precision. Raising one usually lowers the other.
- Which to favour depends on what happens to a real person when each failure occurs. That is a decision for whoever owns the product and not for the person who built it.
- A figure quoted by someone else is not evidence until the test it came from is visible.

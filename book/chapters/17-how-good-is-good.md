---
title: How Good Is Good
summary: A founder asks the question every AI project eventually meets. The answer turns out to be two numbers, a choice between them that is not an engineer's to make, and a figure Anaya had quoted without checking. This chapter introduces recall and precision.
course: ch6
goals:
  - explain why a demonstration of a few working examples is not evidence
  - say what recall and precision are, and work out each from a count of found, missed and falsely flagged items
  - decide which failure to favour by asking what happens to a real person when each one occurs
  - treat a figure quoted by someone else as unverified until you can see its test
terms:
  - recall | of all the real items there were to find, the share the tool found; if there were 100 and it found 90, recall is 90 percent | 
  - precision | of everything the tool flagged, the share that really was what it claimed; if it flagged 100 and 80 were real, precision is 80 percent | 
---

In the first week of May, the founders stopped at the glass room on their way to lunch. One of them, Mr. Bhatia, looked at the whiteboard and the scoreboard. Then he asked the question that every company building with AI is asked sooner or later: "Is it good?"

There was a pause, and it lasted a second too long. Imran Qureshi said the tool had found fifteen of seventeen on the last run. Mr. Bhatia said that was good.

Anaya spoke up. It was fifteen of seventeen on ten sentences the team had written itself, she said, and she didn't yet know whether that was good. She could tell him in a week, with a number. Mr. Bhatia wasn't used to that answer. Afterwards he said it was the first time anyone had answered him that way.

This chapter builds the answer Anaya promised. It has three parts: the two numbers that measure a tool that finds things, the choice between them, and the habit of checking a figure before you repeat it.

## The case: a question with no number

Usually the answer to "is it good?" is a demonstration of three examples that worked. That tells you almost nothing about how often a system is right. The three were chosen. And the cases that weren't chosen are the ones you needed to see.

Imran had been working on a measurement of this kind. It wasn't for the guard, but for the part that stands behind it: how well the chatbot found the right page of Sahaj's policies for a customer's question. The lessons carried over almost word for word.

## A demonstration is not evidence

The method has three ideas. The first is to write the answers before you test.

You can't judge a system by asking it questions and seeing whether the answers look right. They will look right. Plausible text is exactly what the machine produces. So the work begins with a list of real questions, and the verified right answer to each. This is the answer key Anaya had already built, written before the test and not after.

Farah wrote ten questions for the chatbot's search, in the words her customers use. She wrote them before she opened the policy document. A question written after reading the document ends up using the document's words, and that makes the search look better than it is. Her questions included "Paisa kab milega", "Double charge hua hai" and "Mera loan reject kyun hua". Only then did she and Imran go through the pages and mark which page held the answer to each.

They ran the test. Six of the ten questions found the right page on the first try. Imran called this a perfectly normal first result for a system that works. He added that if it had been nine or ten, he would have wanted to know whether somebody had cheated.

## Two ways to fail

The second idea took Anaya longer, because it was hiding in plain sight. A search step can go wrong in two opposite ways. It can leave out something that mattered. Or it can bring back a pile of things that didn't.

Imran asked her to think of sending a colleague to fetch the files for a meeting. If the colleague comes back without the one file you need, that is one kind of failure. If the colleague comes back with the whole cabinet, you can't find the file among the rest. That is the other kind.

::: def Recall and precision
*Recall* is the share of the real items there were to find that the tool found. If there were a hundred and it found ninety, recall is ninety percent. *Precision* is the share of what the tool flagged that really was what it claimed. If it flagged a hundred and eighty were real, precision is eighty percent.
:::

The two pull against each other. Widen the net, and you catch more of what you want and more of what you don't. Narrow it, and the catch is cleaner, but you miss more.

Imran showed her. He changed the number of pages the search returned for each question, from one to three to five. The figures moved just as he had said. More pages improved recall and made precision worse. Fewer pages did the opposite. These are tendencies, not laws, and you have to measure them on your own real questions.

Anaya had been using these ideas for weeks without the words. She went back to the scoreboard.

Table: The earlier scoreboard, with recall and precision added
| Version | Found | Missed | False alarms | Recall | Precision |
| --- | --- | --- | --- | --- | --- |
| 1 | 11 | 6 | 5 | 65% | 69% |
| 3 | 15 | 2 | 2 | 88% | 88% |
| 4 | 14 | 3 | 1 | 82% | 93% |

The sums are simple. Recall is found divided by found plus missed. Precision is found divided by found plus false alarms. So "missed" had been poor recall all along, and "false alarm" had been poor precision. She hadn't needed new ideas as much as permission to use the old ones.

## Whose decision it is

The third idea came at the end of an afternoon. Imran asked which failure was worse for the guard: missing something, or flagging something that wasn't there.

Anaya answered at once. Missing was worse, since a number that gets through is in five systems for ever. Imran said that for a different product the answer is the other way round.

Table: Which failure is worse depends on what happens to a person
| Product | Worse failure | Why |
| --- | --- | --- |
| Tool that finds past cases for a lawyer | Missing a case | A missed case could lose a trial; an irrelevant case costs thirty seconds of reading |
| Chatbot that answers policy questions | Returning the wrong page | The model builds a confident answer from it, and a wrong policy given to a customer binds the company. A missing answer only creates a support ticket, which the company was receiving anyway |
| The guard | Missing a personal detail | The detail enters the history, logs, exports and an outside company's system |

Then Imran made the point he most wanted her to hear. Which failure to reduce is a product decision. It is not an engineer's. If you ask the engineer who built the tool, he will give you the answer that is easiest for him to deliver.

It was the second time in a month that Anaya had been handed a decision that technical skill couldn't make. The first, about leaning towards the cheaper mistake, had been informal. This was its grown-up form, with names and percentages. She wrote down what she would take to Lakshmi and Farah on Thursday.

::: example Anaya's stated targets
For identity numbers with a fixed shape, recall of at least 98 in 100. Up to 3 false alarms in every 100 things the tool hides. If the two collide, recall wins, and I will say so in writing.
:::

The statement was easier to write than it would be to defend, and she accepted that. A number that has been argued over is worth more than one nobody ever questioned.

## A number she had not checked

One more matter was uncomfortable. Anaya dealt with it on a Friday night, with the office empty.

She went back to a figure she had quoted three times in meetings, and had written into the strategy memo. It was fourteen in a hundred: the share of Hindi personal details that an existing open tool could find, according to its own published report. She had used it to argue that the gap in the market was real.

Now a question arrived in her head, in Lakshmi's voice. Measured against which answer key? Written by whom? And could Lakshmi see the questions?

Anaya couldn't answer. She had read a sentence in a document and repeated it. The figure might be right. It might also have been measured on sentences that looked nothing like what Sahaj's customers write.

::: watch A quoted number is not evidence
A number quoted by a vendor, however honestly, is not evidence until you can see what it was measured against. That applies to other people's numbers, and to your own.
:::

She didn't run the check that night. She wrote it at the top of the list, where it couldn't be dropped quietly. Run the open tool on the team's answer key, and report whatever number comes out, even if it weakens the case for the project.

It was the first time she had written a test whose result she feared. She recognised that this is exactly what the discipline is for.

## Summary

A demonstration of a few working examples says almost nothing about how often a system is right. To measure it, write the questions and their correct answers before you look at what the system says, in the words real users use. Then count.

- A tool can fail by missing things that mattered, which is poor recall. It can also fail by returning things that didn't, which is poor precision. Raising one usually lowers the other.
- Which to favour depends on what happens to a real person when each failure occurs. That decision belongs to whoever owns the product, not to the person who built it.
- A figure quoted by someone else is not evidence until the test it came from is visible.

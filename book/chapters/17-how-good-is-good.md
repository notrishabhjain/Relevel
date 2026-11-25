---
title: How Good Is Good
summary: A founder asks the question every AI project meets in the end. The answer turns out to be two numbers, a choice between them that is not an engineer's to make, and a figure Anaya had quoted without checking. You meet recall and precision.
course: ch6
goals:
  - see why a demo of a few working examples is not proof
  - know what recall and precision are, and work out each from a count of found, missed and falsely flagged items
  - choose which failure to favour by asking what happens to a real person when each one occurs
  - treat a number quoted by someone else as unchecked until you can see its test
terms:
  - recall | like the fish in a net; of all the real items there were to find, the share the tool found. If there were 100 and it found 90, recall is 90 percent | 
  - precision | like checking the net for real fish; of everything the tool flagged, the share that really was what it claimed. If it flagged 100 and 80 were real, precision is 80 percent | 
---

In the first week of May, the founders stopped at the glass room on their way to lunch. One of them, Mr. Bhatia, looked at the whiteboard and the scoreboard. Then he asked the question every AI company hears sooner or later. "Is it good?"

There was a pause. It lasted one second too long. Imran Qureshi said the tool had found fifteen of seventeen on the last run. Mr. Bhatia said that was good.

Anaya spoke up. It was fifteen of seventeen on ten sentences the team had written itself, she said. She did not yet know if that was good. She could tell him in a week, with a number. Mr. Bhatia was not used to that answer. Later he said nobody had ever answered him that way before.

This chapter builds the answer Anaya promised. It has three parts. First, the two numbers that measure a tool that finds things. Second, the choice between them. Third, the habit of checking a number before you repeat it.

## The case: a question with no number

Most of the time, the answer to "is it good?" is a demo of three examples that worked. That tells you almost nothing about how often a system is right. Someone chose those three. The cases nobody chose are the ones you needed to see.

Imran had been building a measurement of this kind. It was not for the guard. It was for the part behind it: how well the chatbot found the right page of Sahaj's policies for a customer's question. The lessons carried over almost word for word.

## A demonstration is not evidence

The method has three ideas. The first is to write the answers before you test. It is like a teacher's answer key: the right answers are fixed before the exam.

You cannot judge a system by asking it questions and seeing if the answers look right. They will look right. Believable text is exactly what the machine makes. So the work starts with a list of real questions. Each has a checked right answer. This is the answer key Anaya had already built. It was written before the test, not after.

Farah wrote ten questions for the chatbot's search. She used the words her customers use. She wrote them before she opened the policy document. A question written after reading the document ends up using the document's words. That makes the search look better than it is.

Her questions included "Paisa kab milega", "Double charge hua hai" and "Mera loan reject kyun hua". Only then did she and Imran go through the pages. They marked which page held the answer to each.

They ran the test. Six of the ten questions found the right page on the first try. Imran called this a normal first result for a system that works. He added that nine or ten would have made him ask if somebody had cheated.

## Two ways to fail

The second idea took Anaya longer. It was hiding in plain sight. A search step can go wrong in two opposite ways. It can leave out something that mattered. Or it can bring back a pile of things that did not.

Imran asked her to think of sending a colleague to fetch the files for a meeting. Say the colleague comes back without the one file you need. That is one kind of failure. Say the colleague comes back with the whole cabinet. You cannot find the file among the rest. That is the other kind.

::: def Recall and precision
Think of a net in a pond. *Recall* asks: of all the fish in the pond, how many did the net catch? Put plainly, it is the share of the real items that the tool found. If there were a hundred and it found ninety, recall is ninety percent. *Precision* asks: of what is in the net, how much is really fish? It is the share of what the tool flagged that really was what it claimed. If it flagged a hundred and eighty were real, precision is eighty percent.
:::

The two pull against each other. Widen the net and you catch more of what you want. You also catch more of what you do not. Narrow it and the catch is cleaner. But you miss more.

Imran showed her. He changed how many pages the search returned for each question: one, then three, then five. The numbers moved as he had said. More pages raised recall and lowered precision. Fewer pages did the opposite. These are tendencies, not laws. You must measure them on your own real questions.

Anaya had used these ideas for weeks without the words. She went back to the scoreboard.

Table: The earlier scoreboard, with recall and precision added
| Version | Found | Missed | False alarms | Recall | Precision |
| --- | --- | --- | --- | --- | --- |
| 1 | 11 | 6 | 5 | 65% | 69% |
| 3 | 15 | 2 | 2 | 88% | 88% |
| 4 | 14 | 3 | 1 | 82% | 93% |

The sums are simple. Recall is found divided by found plus missed. Precision is found divided by found plus false alarms. So "missed" had always meant poor recall. "False alarm" had always meant poor precision. She did not need new ideas so much as permission to use the old ones.

## Whose decision it is

The third idea came at the end of an afternoon. Imran asked which failure was worse for the guard. Missing something, or flagging something that was not there?

Anaya answered at once. Missing was worse. A number that gets through stays in five systems for ever. Imran said that for a different product the answer is the other way round.

Table: Which failure is worse depends on what happens to a person
| Product | Worse failure | Why |
| --- | --- | --- |
| Tool that finds past cases for a lawyer | Missing a case | A missed case could lose a trial. An irrelevant case costs thirty seconds of reading |
| Chatbot that answers policy questions | Returning the wrong page | The model builds a confident answer from it, and a wrong policy given to a customer binds the company. A missing answer only creates a support ticket, which the company was receiving anyway |
| The guard | Missing a personal detail | The detail enters the history, logs, exports and an outside company's system |

Then Imran made the point he most wanted her to hear. Which failure to reduce is a product decision. It is not an engineer's. Ask the engineer who built the tool, and he will give the answer that is easiest for him to deliver. Remember the difference: a project manager makes sure the train leaves on time. A product manager decides where the train should go.

It was the second time in a month that Anaya was handed a decision that technical skill could not make. The first, about leaning towards the cheaper mistake, had been casual. This was its grown-up form, with names and percentages. She wrote down what she would take to Lakshmi and Farah on Thursday.

::: example Anaya's stated targets
For identity numbers with a fixed shape, recall of at least 98 in 100. Up to 3 false alarms in every 100 things the tool hides. If the two collide, recall wins, and I will say so in writing.
:::

The statement was easier to write than it would be to defend. She accepted that. A number that people have argued over is worth more than one nobody questioned.

## A number she had not checked

One more matter was uncomfortable. Anaya dealt with it on a Friday night, with the office empty.

She went back to a figure she had quoted three times in meetings. She had also put it in the strategy memo (a short paper that sets out the plan). It was fourteen in a hundred. That was the share of Hindi personal details that an existing open tool could find, by its own published report. She had used it to argue that the gap in the market was real.

Now a question came into her head, in Lakshmi's voice. Measured against which answer key? Written by whom? And could Lakshmi see the questions?

Anaya could not answer. She had read a sentence in a document and repeated it. The figure might be right. It might also have been measured on sentences that looked nothing like what Sahaj's customers write.

::: watch A quoted number is not evidence
A number quoted by a vendor (the company that sells the tool) is not evidence, however honestly it is given. It becomes evidence only when you can see what it was measured against. That holds for other people's numbers, and for your own.
:::

She did not run the check that night. She wrote it at the top of the list, where nobody could drop it quietly. Run the open tool on the team's answer key. Report whatever number comes out, even if it weakens the case for the project.

It was the first time she had written a test whose result she feared. She saw that this is exactly what the discipline is for.

## Summary

A demo of a few working examples says almost nothing about how often a system is right. To measure it, write the questions and their right answers before you see what the system says. Use the words real users use. Then count.

- A tool can fail by missing things that mattered. That is poor recall. It can also fail by returning things that did not matter. That is poor precision. Raising one usually lowers the other.
- Which to favour depends on what happens to a real person when each failure occurs. That decision belongs to the owner of the product, not to the person who built it.
- A number quoted by someone else is not evidence until the test it came from is visible.

Next, Imran asks Anaya to draw the whole chatbot from memory. She finds how many of its parts can fail without a sound.

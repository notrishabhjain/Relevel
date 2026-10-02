---
title: How Good Is Good
summary: Someone senior asks the question every AI project eventually meets. The answer is two numbers, a choice between them that is not an engineer's to make, and an uncomfortable look at a figure Anaya had quoted without checking.
course: ch6
terms:
  - recall | of all the real items there were to find, the share the tool found; if there were 100 and it found 90, recall is 90 percent | 
  - precision | of everything the tool flagged, the share that really was what it claimed; if it flagged 100 and 80 were real, precision is 80 percent | 
---

The question arrived, as it always does, from someone senior and in the middle of something else.

It was the first week of May. The founders had stopped by the glass room on their way to lunch, and one of them, a cheerful man called Mr. Bhatia who owned an enormous number of identical shirts, looked at the whiteboard, looked at the scoreboard, and asked what everyone in every company eventually asks.

"Is it good?"

There was a pause that went on a second too long.

"It found fifteen of seventeen on the last run," said Imran.

"That's good, then."

"It is fifteen of seventeen on ten sentences we wrote ourselves," said Anaya.

"Is that not good?"

"I don't know yet," said Anaya. "That is the honest answer." She watched his face rearrange itself around the unfamiliar experience of being told so. "I can tell you in a week, with a number."

## A demo is not evidence

On the way to lunch he said something she did not expect, which was that this was the first time anyone had answered him that way. Usually the answer was a demonstration of three examples that worked. A demonstration of three examples that work tells you almost nothing about how often a system is right, because the three were chosen, and the ones that were not chosen are exactly the ones you needed to see.

Imran had been working on that, not for the guard but for the thing the guard stood in front of. He had been measuring how well the chatbot found the right page of Sahaj's policies for a customer's question, and the lessons from that measurement turned out to apply almost word for word.

The method comes down to three ideas.

The first is to write the answers before you test. You cannot judge a system by asking it questions and seeing whether the answers look right, because they will look right: plausible text is exactly what the machine makes. So you begin with a list of real questions and the verified right answer to each. They are the same thing Anaya had already named, an answer key, written before the test and not after.

Farah wrote ten questions for the chatbot's search. She wrote them in the words her customers used, before she opened the policy document, because a question written after reading the documents ends up using the documents' words, and makes the search look better than it is. *Paisa kab milega. Double charge hua hai. Mera loan reject kyun hua.* Then, only then, she and Imran went through the pages and marked which page held the answer to each.

They ran it. Six out of ten questions found the right page on the first try.

"Is that bad?" asked Anaya.

"It is a perfectly normal first result for a system that works," said Imran. "If we'd got nine or ten, I'd have wanted to know whether somebody had cheated."

## Two ways to fail

The second idea took Anaya longer, because it hid in plain sight.

A search step can go wrong in two different ways, and they are opposites. It can leave out something that mattered. Or it can bring back a pile of things that did not. Imran made her imagine asking a colleague to fetch the files for a meeting. If they come back without the one file you needed, that is one kind of failure. If they come back with the whole cabinet, you cannot find the one you need among it, and that is the other.

The first is poor *recall*: of all the real items there were to find, the tool found too few. If there were a hundred and it found ninety, recall is ninety percent. The second is poor *precision*: of everything the tool brought back, too little was what it should be. If it flagged a hundred things and eighty were real, precision is eighty percent.

The trouble is that the two pull against each other. Widen the net, and you catch more of what you want and more of what you do not. Narrow it, and you catch cleaner and miss more. Imran changed how many pages the search returned per question, from one to three to five, and the figures moved as he had said they would. More pages: better recall, worse precision. Fewer: the reverse. They were tendencies, not laws, and they had to be measured on the real questions.

Anaya had been using these words for weeks without knowing it. She went back to the scoreboard.

| Version | Found | Missed | False alarms | Recall | Precision |
| --- | --- | --- | --- | --- | --- |
| 1 | 11 | 6 | 5 | 65% | 69% |
| 3 | 15 | 2 | 2 | 88% | 88% |
| 4 | 14 | 3 | 1 | 82% | 93% |

Recall was found divided by found-plus-missed. Precision was found divided by found-plus-false-alarms. They had been in the table all along under different names. "Missed" was poor recall, and "false alarm" was poor precision. She had not needed new words so much as the permission to use the old ones.

## Whose decision is it

The third idea was the one that mattered, and it came, as the important ones tended to, at the end of an afternoon.

"Which is worse?" asked Imran. "For the guard. Missing something, or flagging something that wasn't."

"Missing," said Anaya at once. "A number that gets through is in five systems for ever."

"For a different product the answer is the other way round." He told her about a legal tool he had once been shown, which found past cases for a lawyer. For that tool a missed case could lose a trial, and an extra irrelevant case cost thirty seconds of reading. And about a customer-facing chatbot that answered policy questions, where the dangerous failure was bringing back the wrong page. The machine would build a confident answer from it, and a wrong policy given to a customer was a liability the company would be held to. Missing an answer merely made a support ticket, which the company had been getting all along.

"So it depends on what happens to a real person," said Anaya.

"It depends entirely on that. And here is the point I most want to be clear on." Imran put his pencil down. "Which failure to minimise is a product decision. It is not mine. If you ask the engineer who built it, he will give you the answer he can most easily deliver."

She understood that this was the second time in a month that she had been handed a decision that no amount of technical skill could make for her. The first had been about leaning towards the cheaper mistake. This was its grown-up form, with names and percentages. She wrote what she would take to Lakshmi and Farah on Thursday.

*For identity numbers with a fixed shape, we want recall of at least 98 in 100. We will accept up to 3 false alarms in every 100 things the tool hides. If the two collide, recall wins, and I will say so in writing.*

It was a good deal easier to write than it would be to defend. That was fine. A number that has been argued over is worth more than one that was never questioned.

## A number she had not checked

There was one more thing, and it was not comfortable, and she did it on a Friday night with the office empty.

She went back to the figure she had quoted three times in meetings. Fourteen in a hundred: the share of personal details in Hindi that an existing tool, according to its own published report, was able to find. She had used it to say that the gap in the market was real. She had written it into the strategy memo.

*Against which answer key?* said a voice in her head, which sounded a good deal like Lakshmi. *Written by whom? Can I see the questions?*

She could not. She had read a sentence in a document and repeated it. It might be right. It might also be measured on a set of sentences that looked nothing like Sahaj's customers' writing, or on a script that was written in a different way. A number a vendor quotes, however honestly, is not evidence until you can see what it was measured against. That went for other people's numbers and it went for hers.

She did not run the check that night. She wrote it on the list in the one place where it could not be quietly dropped, at the top of the page, with a promise: *Run the open tool on our answer key. Report whatever number comes out, including if it makes our case look weaker.*

She looked at the line for a while. It was the first time she had written a test whose result she was afraid of, and she understood, with a small chill, that this was what the discipline was for.

## What to carry forward

A demo of a few examples that work says almost nothing about how often a system is right. To measure it you write the questions and their correct answers before you look at what the system says, in the words real users use, and then count. A tool can fail in two opposite ways: by missing things that mattered, which is poor recall, or by bringing back things that did not, which is poor precision. Pushing one up usually pushes the other down. Which to favour depends on what happens to a real person when each failure occurs, and that is a decision for whoever owns the product, not for the person who built it. And a figure that someone else quotes is not evidence until you can see what it was measured against.

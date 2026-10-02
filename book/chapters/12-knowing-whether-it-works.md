---
title: Knowing Whether It Works
summary: The team stops trusting how an answer feels, writes the correct answers down before looking at the tool's, and discovers that the version everyone liked was not the best one.
course: ch22 ch23
terms:
  - test set | a collection of real or realistic examples, each with the correct answer written down beforehand, used to measure a system | test sets
  - answer key | the test set for the guard: for every example sentence, exactly what should be found and what should happen to it, kept in numbered versions | answer keys
  - scoreboard | the table that counts, for each version of the tool, what it found, what it missed and what it wrongly flagged | scoreboards
  - task type | which of five kinds of job a request really is: classify, extract, summarise, rewrite or generate | task types
---

"How would you know it works?"

Lakshmi had asked it three weeks ago, in a room with a view of a wall, and Anaya had said she did not know yet. She still did not. But the question had been living in her the way a stone lives in a shoe, and by the middle of April she had stopped trying to walk around it.

She put it to Imran on Wednesday afternoon, in the glass room, before the whiteboard that carried *Rarer is not fixed* in red.

"We run it on examples where we already know the answer," he said, as if reading a recipe. "Then we count."

"Why does that sound so much more difficult when you say it?"

"Because it means somebody has to write the answers first."

## Why feelings are not enough

They had four versions of the instruction by now, each a little longer than the last. The shortest was Imran's plain request. The longest had the job, the steps, two worked examples and a warning.

The previous evening Neha, the agent who had taken part in the paper test, had read the outputs of all four on five messages and said that the fourth was clearly the best. It read well. It sounded careful. It explained itself. Anaya had nodded, and she was a little ashamed of how readily.

Reading a few outputs and picking the one that feels right is the most natural way to judge a system and the least reliable. The few you read are the ones you happened to read. A demo that goes well tells you what the tool can do on a good day. And a longer, more thorough-sounding answer tends to feel better regardless of whether it is.

The cure is a *test set*: a collection of real or realistic examples, each with the correct answer written down beforehand. The words "beforehand" and "written down" do all the work. If you look at what the tool says first and decide afterwards what was right, you will find that whatever it said was approximately fine.

## Ten sentences

On Thursday Anaya and Farah wrote ten.

They were not real customers' messages; that was settled. They were made up, shaped like the real ones, and between them they covered the main cases. Three in English, one in Hindi script, three in Hinglish, and three tricky ones. A plain message with a name and a mobile number. A Hinglish message with an Aadhaar number beside a mobile number that was already half hidden. A sentence in Devanagari with a name and an identity number. A message with a father's name, an address in Gurgaon and an employer. A sentence that pointed at one person with no name or number in it at all. A sentence with nothing personal in it whatever, which the tool was supposed to leave alone.

For each of them they wrote, in a spreadsheet and before running anything, six things: a number, the kind of writing, the sentence itself, what should be found (the kind of detail and the exact words), what should happen to it, and a note.

| No. | Writing | Sentence | What should be found | What should happen |
| --- | --- | --- | --- | --- |
| 1 | English | Hi, I am Rahul Verma. My mobile number is 9876543210 and my email is rahul.verma@example.com. | name, mobile, email | hide all three |
| 3 | Hinglish | mera naam Rishabh Jain hai, mera mobile number 9876543210 hai | name, mobile | hide both |
| 8 | English | I am the only diabetic patient in my village who had a transplant last year. | nothing with a shape; the whole sentence points to one person | flag for a person to decide |
| 9 | English | What documents do I need to renew my driving licence? | nothing | leave it alone |

This spreadsheet is the *answer key*. It has a version number, and it is the first one. They called it version 1, and Anaya typed the date in the corner and the word *ten*. It would grow for the rest of the project. Each time it did, it would be saved as a new version of the same file, never as a new file, so that anyone could say which key a score had been measured against.

## The scoreboard

Then they ran all four instructions on all ten sentences, and counted.

For each run there were three numbers that mattered. How many real details were found. How many real details were *missed*, meaning the tool let them through. And how many things were wrongly flagged: a *false alarm*, a case where the tool hid something that was not personal at all. Across the ten sentences the answer key held seventeen real details.

| Version | Found | Missed | False alarms |
| --- | --- | --- | --- |
| 1. The plain request | 11 | 6 | 5 |
| 2. Name the job and the reader | 12 | 5 | 4 |
| 3. Add worked examples | 15 | 2 | 2 |
| 4. Add steps and a warning | 14 | 3 | 1 |

A table of this kind, one row per version, is the *scoreboard*. It has no opinions. It does not care that the fourth answer reads beautifully.

"Version four is the one Neha picked," said Farah.

"And version three finds one more," said Anaya, "and raises one more false alarm. We can argue about that. But version four is not the best, and it is almost twice as long." She looked up. "We would have shipped it."

Imran was already writing the part that she disliked most. "I changed three things between two and four. The job, the steps and the warning, all at once. So I can't tell you which helped. One of them could be making it worse while the other two compensate." He wrote *one change at a time* on the board, under the red line. "It is slower. It is the only way to know. When somebody tells you they 'tuned the prompt', ask them how many things they changed."

## What kind of job is this

That evening, after the others had gone, Imran pulled out the napkin again. It was getting tired.

"There is something I should have told you before you wrote the key," he said. "Almost every request people make of these machines is one of five jobs. The shape of the job decides whether you can measure the result by program or only by hand. You can't pick a method until you know which it is."

He wrote five words down the side and, next to each, what it does.

**Classify**: put the input into one of a fixed set of boxes. *Is this message a complaint, a query or a request?* **Extract**: pull out specific things that are in the input. *What is the account number? The date?* **Summarise**: make it shorter without losing what matters. **Rewrite**: keep the meaning and change the form or the tone. **Generate**: produce something new.

"The first two have right answers," he said. "The value is in the document or it isn't. A program can grade them. The other three depend on the reader, and only a person can say whether a summary is good."

This was the *task type*, and Anaya felt, with some astonishment, that it was the most useful idea since the four risks. She looked at the guard. It found identity numbers and names inside messages: that was extraction. It decided what kind of detail each one was: that was classification. Both had right answers. Both could be graded without a person in the loop. She had chosen, more or less by accident, a project whose results could be counted from the first day.

The chatbot, she noticed, was another matter. Its job was to write answers, and writing is generation, which has no right answer. Nobody could grade it automatically, which perhaps explained why nobody had.

"A word of warning," said Imran. "People talk about outcomes. 'Can the AI handle our inbox?' That's not a task. It is three tasks wearing a coat. Classify the message by type. Extract the account number. Write a draft reply. Each fails differently, and only the first two can be measured without a human. If somebody gives you a request that has more than one type in it, split it."

Farah, who had come back for her umbrella, stopped in the doorway. "What if I ask it to just handle the chat?"

"Then I'd ask which of the three jobs you mean first," said Imran, and she laughed, and left.

## Lakshmi's question, answered

On Friday Anaya wrote to Lakshmi. It was a short email, and it was the first she had written that she felt she could stand behind.

*You asked how we would know it works. We will write down the right answers before we look at the tool's. We have ten so far, and we will add more. We will keep every version of that file. We will count, for each version of the tool, what it found, what it missed and what it wrongly flagged, and we will show you the table. If a number gets worse, you will see it.*

*We do not yet know how good it will be. We will know how good it is.*

The reply was one word, and it was *Better.*

## What to carry forward

Reading a few outputs and choosing the one that feels right is unreliable, however sincere the reader. A test set fixes this: realistic examples with the correct answers written down beforehand and saved in numbered versions. Counting what a system found, missed and wrongly flagged, version by version, in a table, makes progress visible and keeps opinions out of it. Change one thing at a time, or you will not know what helped. And before choosing a method, name the job: every request is some mix of classifying, extracting, summarising, rewriting and generating, and the first two can be graded by a program.

---
title: Knowing Whether It Works
summary: The team stops trusting how an answer feels and writes the correct answers down before looking at the tool's. The chapter covers test sets, answer keys, scoreboards, changing one thing at a time, and the five kinds of job a request can be.
course: ch22 ch23
goals:
  - explain why reading a few outputs is an unreliable way to judge a system
  - build a test set with an answer key written before the tool is run, and keep it in numbered versions
  - read a scoreboard of found, missed and falsely flagged items
  - sort a request into one of five task types and say which can be graded by a program
terms:
  - test set | a collection of real or realistic examples, each with the correct answer written down beforehand, used to measure a system | test sets
  - answer key | the test set for the guard: for every example sentence, exactly what should be found and what should happen to it, kept in numbered versions | answer keys
  - scoreboard | the table that counts, for each version of the tool, what it found, what it missed and what it wrongly flagged | scoreboards
  - task type | which of five kinds of job a request really is: classify, extract, summarise, rewrite or generate | task types
---

Three weeks after Lakshmi Iyer had asked how Anaya would know that the tool worked, Anaya still had no answer, and by the middle of April the question had become unavoidable. On a Wednesday afternoon she put it to Imran Qureshi in the glass room, in front of the whiteboard that carried "Rarer is not fixed" in red. His reply was brief: run the tool on examples where the right answer is already known, and count. She asked why it sounded so much harder when he said it. "Because somebody has to write the answers first," he said.

This chapter describes that writing, the table that came out of it, and a classification of jobs that determines how any result can be measured.

## The case: the version everyone liked

The team now had four versions of the instruction, each a little longer than the one before. The shortest was Imran's plain request. The longest had the job, the steps, two worked examples and a warning. The previous evening Neha, who had taken part in the paper test, had read the outputs of all four on five messages and said the fourth was clearly the best. It read well, sounded careful and explained itself. Anaya had nodded, and was a little ashamed of how readily.

## Why a feeling is not enough

Reading a few outputs and choosing the one that feels right is the most natural way to judge a system and the least reliable. The outputs read are the ones that happened to be read. A demonstration that goes well shows what the tool can do on a good day. A longer, more thorough-sounding answer tends to feel better whether or not it is.

The remedy is a *test set*: a collection of real or realistic examples, each with the correct answer written down beforehand.

::: key Two words do the work
"Beforehand" and "written down" are what make a test set a test. If the tool's output is read first and the right answer decided afterwards, whatever the tool said will seem approximately fine.
:::

## Ten sentences

On Thursday Anaya and Farah wrote ten sentences. They were made up in the shape of real messages, and between them they covered the main cases: three in English, one in Hindi script, three in Hinglish and three that were awkward. One was a plain message with a name and a mobile number. One was a Hinglish message with an Aadhaar number beside a mobile number that was already half hidden. One was a Devanagari sentence with a name and an identity number. One contained a father's name, an address in Gurgaon and an employer. One pointed at a single person without a name or number. One contained nothing personal, and the tool was supposed to leave it alone.

For each sentence they wrote six things in a spreadsheet before running anything: a number, the kind of writing, the sentence, what should be found, what should happen to it, and a note.

Table: Four rows from the first answer key
| No. | Writing | Sentence | What should be found | What should happen |
| --- | --- | --- | --- | --- |
| 1 | English | Hi, I am Rahul Verma. My mobile number is 9876543210 and my email is rahul.verma@example.com. | name, mobile, email | hide all three |
| 3 | Hinglish | mera naam Rishabh Jain hai, mera mobile number 9876543210 hai | name, mobile | hide both |
| 8 | English | I am the only diabetic patient in my village who had a transplant last year. | nothing with a shape; the whole sentence points to one person | flag for a person to decide |
| 9 | English | What documents do I need to renew my driving licence? | nothing | leave it alone |

This spreadsheet is the *answer key*. It carries a version number, and this one was version 1, with the date and the word "ten" in the corner. It would grow for the rest of the project. Each time it grew it would be saved as a new version of the same file, never as a new file, so that anyone could say which key a given score had been measured against.

## The scoreboard

The team ran all four instructions on all ten sentences and counted three things for each run: how many real details were found, how many were missed because the tool let them through, and how many items were wrongly flagged, a false alarm being a case where the tool hid something that was not personal at all. The key held seventeen real details across the ten sentences.

Table: The first scoreboard
| Version | Found | Missed | False alarms |
| --- | --- | --- | --- |
| 1. The plain request | 11 | 6 | 5 |
| 2. Name the job and the reader | 12 | 5 | 4 |
| 3. Add worked examples | 15 | 2 | 2 |
| 4. Add steps and a warning | 14 | 3 | 1 |

A table of this kind, with one row per version, is the *scoreboard*. It has no opinions, and it does not care that the fourth answer reads beautifully. Version four was the one Neha had chosen. Version three found one more detail and raised one more false alarm, and a discussion of that trade is reasonable. But version four was not the best, and it was almost twice as long. "We would have shipped it," Anaya said.

### One change at a time

Imran then identified a flaw in his own method. Between versions two and four he had changed three things at once: the job, the steps and the warning. He could not say which had helped, and one of them might be making results worse while the other two compensated. He wrote "one change at a time" on the board beneath the red line. It is slower, and it is the only way to know. When somebody says that they tuned a prompt, the question to ask is how many things they changed.

## What kind of job is this

That evening Imran pulled out the napkin again. Almost every request that people make of these machines, he said, is one of five jobs. The shape of the job decides whether the result can be measured by a program or only by hand, so the method cannot be chosen until the job is known.

Table: The five task types
| Task type | What it does | Example | Can a program grade it? |
| --- | --- | --- | --- |
| Classify | Puts the input in one of a fixed set of boxes | Is this message a complaint, a query or a request? | Yes |
| Extract | Pulls out specific things that are in the input | What is the account number? The date? | Yes |
| Summarise | Makes the input shorter without losing what matters | A short account of a long chat | Only partly |
| Rewrite | Keeps the meaning and changes the form or tone | Make this reply politer | No, a person must judge |
| Generate | Produces something new | Write a reply to this customer | No, a person must judge |

The first two have right answers. The value is in the document or it is not, and a program can grade them. The other three depend on the reader, and only a person can say whether a summary is good. This is the *task type*, and Anaya recognised it as the most useful idea since the four product risks.

The guard found identity numbers and names inside messages, which is extraction, and decided what kind of detail each was, which is classification. Both had right answers and both could be graded without a person in the loop. She had chosen, more or less by accident, a project whose results could be counted from the first day. The chatbot was different. Its job was to write answers, which is generation, and nobody could grade it automatically. That may explain why nobody had.

::: watch A request is often three tasks in a coat
"Can the AI handle our inbox?" is not a task. It is at least three: classify the message by type, extract the account number, and write a draft reply. Each fails differently, and only the first two can be measured without a person. A request with more than one task type in it should be split. Farah, passing the door, asked what would happen if she simply asked it to handle the chat. Imran asked which of the three jobs she meant.
:::

## Lakshmi's question, answered

On Friday Anaya wrote to Lakshmi. The email said that the team would write down the right answers before looking at the tool's, that there were ten so far and would be more, and that every version of the file would be kept. For each version of the tool they would count what it found, what it missed and what it wrongly flagged, and would show her the table. If a number got worse, she would see it. The team did not yet know how good the tool would be, but it would know how good it was. The reply was one word: "Better."

## Summary

Reading a few outputs and choosing the one that feels right is unreliable, however sincere the reader. A test set fixes this with realistic examples whose correct answers are written down beforehand and saved in numbered versions.

- The answer key for the guard lists, for each example sentence, what should be found and what should happen to it.
- A scoreboard counts what each version found, missed and wrongly flagged, which makes progress visible and keeps opinions out of it.
- Change one thing at a time, or it will not be known what helped.
- Name the task type before choosing a method. Classifying and extracting can be graded by a program. Summarising, rewriting and generating need a person, and a request that mixes types should be split.

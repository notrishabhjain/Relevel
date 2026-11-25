---
title: Knowing Whether It Works
summary: The team stops trusting how an answer feels. They write down the right answers before they look at the tool's. You learn test sets, answer keys, scoreboards, changing one thing at a time, and the five kinds of job a request can be.
course: ch22 ch23
goals:
  - explain why reading a few outputs is a weak way to judge a system
  - build a test set with an answer key written before the tool runs, and keep it in numbered versions
  - read a scoreboard of found, missed and wrongly flagged items
  - sort a request into one of five task types, and say which ones a program can grade
terms:
  - test set | the teacher's question paper, with the right answers written down beforehand: real or realistic examples used to measure a system | test sets
  - answer key | the teacher's answer key for the guard: for every example sentence, exactly what should be found and what should happen to it, saved in numbered versions | answer keys
  - scoreboard | the table that counts, for each version of the tool, what it found, what it missed and what it wrongly flagged | scoreboards
  - task type | which of five kinds of job a request really is: classify, extract, summarise, rewrite or generate | task types
---

Three weeks earlier, Lakshmi Iyer had asked how Anaya would know that the tool worked. Anaya still had no answer. By the middle of April she could not put the question off any longer.

On a Wednesday afternoon she asked Imran Qureshi in the glass room. Behind him was the whiteboard. It still said "Rarer is not fixed" in red. His reply was short. Run the tool on examples where the right answer is already known, and count. Anaya asked why it sounded so much harder when he said it. "Because somebody has to write the answers first," he said.

This chapter is about that writing. It covers the table that came out of it. It also covers a way of sorting jobs, which decides how any result can be measured.

## The case: the version everyone liked

The team now had four versions of the instruction. Each was a little longer than the last. The shortest was Imran's plain request. The longest had the job, the steps, two worked examples and a warning. (A worked example is a finished sample of the output you want.)

The evening before, Neha had read the outputs of all four versions on five messages. She had helped with the paper test. She said the fourth was clearly the best. It read well. It sounded careful, and it explained itself. Anaya had nodded. She was a little ashamed of how quickly she had agreed.

## Why a feeling is not enough

Reading a few outputs and choosing the one that feels right is the most natural way to judge a system. It is also the least reliable. It is like a teacher who marks only the three best-looking answer sheets. The outputs you read are only the ones that happened to be read. A demonstration that goes well shows what the tool can do on a good day. And a longer, more careful-sounding answer tends to feel better, whether or not it is.

The remedy is a *test set*. Think of the question paper for an exam. It is a collection of real or realistic examples. Each one has the correct answer written down beforehand.

::: key Two words do the work
"Beforehand" and "written down" turn a pile of examples into a test. Read the tool's output first and decide the right answer afterwards? Then whatever the tool said will seem roughly fine.
:::

## Ten sentences

On Thursday, Anaya and Farah wrote ten sentences. They made them up in the shape of real messages. Between them, the ten covered the main cases. Three were in English, one was in Hindi script, three were in Hinglish, and three were awkward.

Here is a taste of the mix. One was a plain message with a name and a mobile number. One was a Hinglish message with an Aadhaar number next to a mobile number that was already half hidden. One was a Devanagari sentence with a name and an identity number.

One held a father's name, an address in Gurgaon and an employer. One pointed at a single person without giving a name or a number. And one had nothing personal at all, so the tool had to leave it alone.

For each sentence they wrote six things in a spreadsheet, before running anything. They were a number, the kind of writing, the sentence, what to find, what to do with it, and a note.

Table: Four rows from the first answer key
| No. | Writing | Sentence | What should be found | What should happen |
| --- | --- | --- | --- | --- |
| 1 | English | Hi, I am Rahul Verma. My mobile number is 9876543210 and my email is rahul.verma@example.com. | name, mobile, email | hide all three |
| 3 | Hinglish | mera naam Rishabh Jain hai, mera mobile number 9876543210 hai | name, mobile | hide both |
| 8 | English | I am the only diabetic patient in my village who had a transplant last year. | nothing with a shape; the whole sentence points to one person | flag for a person to decide |
| 9 | English | What documents do I need to renew my driving licence? | nothing | leave it alone |

This spreadsheet is the *answer key*. It is the teacher's answer key for the guard. (The guard is the tool that finds and hides personal details.) It carried a version number. This one was version 1, with the date and the word "ten" in the corner. It would grow for the rest of the project. Each time, it was saved as a new version of the same file, never as a new file. That way anyone could say which key a score had been measured against.

## The scoreboard

The team ran all four instructions on all ten sentences. For each run they counted three things.

The first was how many real details the tool found. The second was how many it missed, because it let them through. The third was how many it wrongly flagged. That is a false alarm: the tool hid something that was not personal at all. The key held seventeen real details across the ten sentences.

Table: The first scoreboard
| Version | Found | Missed | False alarms |
| --- | --- | --- | --- |
| 1. The plain request | 11 | 6 | 5 |
| 2. Name the job and the reader | 12 | 5 | 4 |
| 3. Add worked examples | 15 | 2 | 2 |
| 4. Add steps and a warning | 14 | 3 | 1 |

A table like this, with one row for each version, is a *scoreboard*. It is like the board at a cricket match. It has no opinions. It does not care that the fourth answer reads beautifully.

Look at what it says about version four, the one Neha chose. Version three found one more detail and raised one more false alarm. You could fairly discuss that trade. But version four was not the best, and it was almost twice as long. "We would have shipped it," Anaya said.

### One change at a time

Then Imran spotted a flaw in his own method. Between versions two and four he had changed three things at once. They were the job, the steps and the warning. So he could not say which one had helped. One of them might even be making results worse, while the other two made up for it.

He wrote "one change at a time" on the board, under the red line. It is like a cook changing only the salt, then tasting. It is slower, and it is the only way to know. Next time somebody says they tuned a prompt, ask how many things they changed.

## What kind of job is this

That evening Imran pulled out the napkin again. Almost every request people make of these machines, he said, is one of five jobs. The shape of the job decides who can check the result. Sometimes a program can. Sometimes only a person can. So you cannot pick a method until you know the job.

Table: The five task types
| Task type | What it does | Example | Can a program grade it? |
| --- | --- | --- | --- |
| Classify | Puts the input in one of a fixed set of boxes | Is this message a complaint, a query or a request? | Yes |
| Extract | Pulls out specific things that are in the input | What is the account number? The date? | Yes |
| Summarise | Makes the input shorter without losing what matters | A short account of a long chat | Only partly |
| Rewrite | Keeps the meaning and changes the form or tone | Make this reply politer | No, a person must judge |
| Generate | Produces something new | Write a reply to this customer | No, a person must judge |

The first two have right answers. The value is in the document, or it is not. So a program can grade them, like a machine marking a multiple-choice sheet. The other three depend on the reader. Only a person can say whether a summary is good.

This is the *task type*. Anaya saw at once that it was the most useful idea she had met since the four product risks.

Now apply it to the guard. The guard finds identity numbers and names inside messages. That is extraction. It also decides what kind of detail each one is. That is classification. Both have right answers. Both can be graded without a person. More or less by accident, she had chosen a project whose results could be counted from the first day.

The chatbot was different. Its job was to write answers. That is generation, and nobody can grade it automatically. That may be why nobody had.

::: watch A request is often three tasks in a coat
"Can the AI handle our inbox?" is not one task. It is at least three. Classify the message by type. Extract the account number. Write a draft reply. Each one fails in its own way. Only the first two can be measured without a person.

Split any request that has more than one task type in it. Farah was passing the door. She asked what would happen if she just asked it to handle the chat. Imran asked which of the three jobs she meant.
:::

## Lakshmi's question, answered

On Friday Anaya wrote to Lakshmi. Her email said the team would write down the right answers before looking at the tool's. There were ten so far, with more to come. Every version of the file would be kept.

For each version of the tool, the team would count what it found, what it missed and what it wrongly flagged. Then they would show her the table. If a number got worse, she would see it. The team did not yet know how good the tool would be. But it would know how good it was.

The reply was one word: "Better."

## Summary

Reading a few outputs and choosing the one that feels right is a weak way to judge, however sincere the reader. A test set fixes this. It holds realistic examples whose correct answers are written down beforehand and saved in numbered versions.

- The answer key for the guard lists, for each example sentence, what should be found and what should happen to it.
- A scoreboard counts what each version found, missed and wrongly flagged. It makes progress visible and keeps opinions out.
- Change one thing at a time, or you will not know what helped.
- Name the task type before you choose a method. A program can grade classifying and extracting. Summarising, rewriting and generating need a person. Split a request that mixes types.

Next, Anaya uses the answer key on two everyday jobs for a model: sorting messages into boxes and summarising them.

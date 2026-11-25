---
title: Grading a Thousand Answers
summary: Checking by hand stops working at about fifty answers. This chapter covers three ways to mark an answer, how to test a model that grades other models, and error analysis. It is the most useful quality work in the field, and it needs no machine at all.
course: ch14 ch145
goals:
  - compare code checks, human grading and LLM judges as ways to mark answers
  - test a judge against human grading and read the pattern of where they disagree
  - name the usual biases of judges and their remedies
  - do error analysis and turn the biggest groups of failures into new test cases
terms:
  - code check | a ruler for one thing: a few lines of ordinary code that test one fact about an answer, such as whether a quoted phrase is really in the message; free to run on every change | code checks
  - LLM judge | a second student marking the homework; a model that grades another model's answers, cheap and fast, but it has biases, so check the marker against the teacher before you trust it | LLM judges
  - error analysis | reading wrong answers one by one and sorting them into piles, like sorting complaints; you read a hundred real outputs, write what went wrong in your own words, group the notes, name the groups and count them | 
---

By the end of June, the answer key (the list of test questions with right answers) held a hundred and twenty rows. Anaya could no longer mark it by hand. She could, if she tried. It took about three hours with a pencil, and she did it every Friday. But the key kept growing. Every change to the guard needed the key run again. And the guard changed several times a week.

At a hundred and twenty rows, marking was a chore. At the thousands of answers a real product makes in a week, it would be impossible.

Imran Qureshi told her there are three ways to mark an answer. Every serious team ends up using all three. You will meet them. You will see how one was tested before it was trusted. And you will see a weekend's work that needed no software.

## The case: a key too big to mark

The growing key came from a good habit. Each real failure became a row. The price was that marking now took more time than the team had. It is like a teacher with a thousand copies and one pen. So the job had to be shared among three kinds of marker.

## Three markers

Table: Three ways to mark an answer
| Marker | Strengths | Weaknesses | Use it for |
| --- | --- | --- | --- |
| A program (a *code check*) | A few lines of ordinary software that test one thing about an answer. Almost free, and it runs on every change, thousands of times | Tests only what can be written as a rule | Whether the output has the right form, whether every kind is one of those permitted, whether every quotation appears in the message, whether it is fast enough, whether the number of findings is sensible |
| A person | The only marker who can say what "correct" means. Everything else is calibrated against what a person decided | Expensive and slow, and two people often disagree | Defining correctness, and keeping the judge honest |
| A model that grades another model (an *LLM judge*) | Cheap and fast. It reads a hundred answers in the time a person reads one | Has biases that must be measured | Questions a program can't answer, such as "is this answer supported by the source?" or "which of these two is better?" |

Think of a ruler, a teacher and a second student. The ruler measures one thing and never tires. The teacher decides what is right. The second student helps with the pile.

Many bad answers fail in ways a program can see. Imran said most teams do not use nearly enough code checks. His order was simple. Use the first marker wherever you can. Use the third for what the first cannot see. Use the second to keep the third honest.

## A judge on trial

Anaya wanted a judge for a question no program could answer. After the guard has done its work, is anything personal left in the message? The code checks could confirm that a quotation was there. They could not tell whether a leftover bit still pointed to a person. One example was "the flat above the chemist on Karve Road".

Imran wrote a judge in an afternoon. It read the cleaned message. It answered yes or no, with a reason. It looked excellent. It was fast. Its reasons were smooth and neat, often longer than the answers they marked.

Before you trust it, said Imran, check it. Grade fifty yourself. Let the judge grade the same fifty. Then count how often you agree. It is like checking a new student's marking against the teacher's answer key.

On Saturday, Anaya and Farah graded fifty cleaned messages, each on her own. Then they compared. They agreed with each other on forty-eight of the fifty. The judge, on the same fifty, agreed with them on thirty-three. That is sixty-six percent.

Imran said six or seven in ten is a very normal first result. The pattern of the disagreements matters more than the figure. Anaya laid out the seventeen of them.

In fourteen, the judge said "clean" about a message that still held something personal. Nearly all of those were long messages with a mask in them. The judge saw the mask. The longer the message, the happier it seemed.

::: key Clustered mistakes can be fixed
Suppose the errors had been scattered. That would mean Anaya and Farah did not themselves agree on what "clean" meant. No change to the judge could help. But the errors clustered (gathered in one place). So she knew she had found something she could correct.
:::

## What a judge gets wrong

Imran had a short, unkind list of known biases. Each had a remedy that worked.

Table: Biases of LLM judges and their remedies
| Bias | Remedy |
| --- | --- |
| Gives higher scores to longer answers, even when the extra words add nothing | Ask about one specific thing, not "quality": is there any detail left that could identify one person? |
| When comparing two answers, favours the one it saw first | Compare two outputs instead of scoring one, then swap them and run again |
| Drifts towards whatever sounds thorough | Require it to quote the exact words its verdict rests on, so a person can check in a moment |

It is like a marker who gives more marks for a longer essay. Or one who likes the first paper in the pile. Anaya rewrote the instruction in those three ways. On the same fifty messages, the judge now agreed with her forty-four times. That is eighty-eight percent.

A judge you have checked against your own marking is a measuring tool. A judge you have not checked tends to agree with the machine it marks. The two are the same kind of thing.

## Reading a hundred real outputs

None of this told her what was going wrong. A judge says how often something fails. It says nothing about why. For that, Imran did the least glamorous thing in the project.

Over a weekend, he ran the guard over a month of exported chats (chats saved out of the system into a file). He changed nothing. For each message he noted what it would have hidden. On Monday he gave Anaya a stack of a hundred of those outputs. They were printed and picked at random.

Her job was to read them. For each one that went wrong, she wrote one sentence in her own words. What went wrong? She was not to pick categories first. Dr. Meenakshi Rao listened by phone that evening. She explained why. If you pick a category first, you start to see only what fits it. The notes come first. Only then do you ask what the sentences share.

Anaya and Farah read for two hours. Of the hundred outputs, thirty-one had gone wrong. They spread the notes on the floor and sorted them into piles. It is like sorting complaints.

Table: What went wrong in thirty-one of a hundred outputs
| What went wrong | Count |
| --- | --- |
| An order number hidden as if it were an identity number | 9 |
| A name written in Roman Hindi with "ji" after it, missed | 8 |
| An address only half hidden | 5 |
| A number broken over two lines, missed | 4 |
| A company's name treated as a person | 3 |
| Other | 2 |

This is *error analysis*. Imran said everyone who has done it says the same thing. It is the most valuable quality work in the field. It needs no model and no budget. It gives you a ranked list of what to fix, built from your own traffic (the real messages that come in). A general benchmark (a public test anyone can run) cannot do this. It does not have your customers or your documents.

The table changed the plan. Anaya had been about to spend a week on addresses, because they felt important. The data said the bigger problem was plainer: order numbers.

## A loop

Each failure became a row in the answer key. The correct answer was written beforehand. The key grew from a hundred and twenty rows to a hundred and fifty-one.

Anaya drew the cycle on the board in one line, so she would not forget it. Real messages. Read the failures. Add rows. Fix. Measure. Then more real messages. Each round made the key a better picture of real use. The tools would change every few months. The key and the list of failures would stay.

At the end of the call, Meenakshi added a point she often made. Before a product goes out, ask if it passes the key. After it goes out, ask if people are better off. These are different questions. Passing the first can leave the second untouched. Anaya wrote it down. That question stayed with her longest.

## Summary

There are three ways to mark an answer. A program is nearly free, so use it as much as you can. A person is costly, and defines what "correct" means. A model acting as judge is fast, cheap and biased.

- Check a judge by grading the same answers yourself and counting how often you agree. The pattern of disagreement matters more than the number. Clustered mistakes can be fixed. Scattered ones mean the meaning of "correct" is unclear.
- Judges favour long answers and the first of two. The remedies are to grade one specific thing, swap the order and ask for a quotation.
- Error analysis means reading a hundred real outputs. Write what went wrong in your own words before choosing categories. Group and count. Turn the biggest groups into new test cases.

Next, Anaya presents the plan to the finance director, who asks what the guard will cost to run each month.

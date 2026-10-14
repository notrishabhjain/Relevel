---
title: Grading a Thousand Answers
summary: Hand-checking stops working at about fifty answers. This chapter covers three ways to mark an answer, how to test a model that grades other models, and error analysis, the most useful quality work in the field, which needs no machine at all.
course: ch14 ch145
goals:
  - compare code checks, human grading and LLM judges as ways to mark answers
  - test a judge against human grading and read the pattern of its disagreements
  - name the common biases of judges and their remedies
  - carry out error analysis and turn the largest groups of failures into new test cases
terms:
  - code check | a few lines of ordinary code that test one thing about an answer automatically, such as whether a quoted phrase is really in the message; free to run on every change | code checks
  - LLM judge | a model that grades another model’s output; cheap and fast, but it has biases and must be checked against your own grading before you trust it | LLM judges
  - error analysis | reading a hundred real outputs, writing down in your own words what went wrong in each, grouping the notes, naming the groups and counting them | 
---

By the end of June, the answer key held a hundred and twenty rows, and Anaya could no longer mark it by hand. Strictly, she could. It took about three hours with a pencil, and she did it every Friday. But the key kept growing, every change to the guard needed the key run again, and the guard changed several times a week.

At a hundred and twenty rows, marking was a chore. At the thousands of answers a real product produces in a week, it would be impossible.

Imran Qureshi told her there are three ways to mark an answer, and that every serious team ends up using all three. In this chapter you’ll meet them, see how one was tested before it was trusted, and finish with a weekend’s work that needed no software.

## The case: a key too big to mark

The growing key came from a good instinct. Each real failure had become a row. The price of that instinct was that marking now took more time than the team could spare. So the job had to be shared among three kinds of marker.

## Three markers

Table: Three ways to mark an answer
| Marker | Strengths | Weaknesses | Use it for |
| --- | --- | --- | --- |
| A program (a *code check*) | A few lines of ordinary software that test one thing about an answer. Almost free, and it runs on every change, thousands of times | Tests only what can be written as a rule | Whether the output has the right form, whether every kind is one of those permitted, whether every quotation appears in the message, whether it is fast enough, whether the number of findings is sensible |
| A person | The only marker who can say what "correct" means. Everything else is calibrated against what a person decided | Expensive and slow, and two people often disagree | Defining correctness, and keeping the judge honest |
| A model that grades another model (an *LLM judge*) | Cheap and fast. It reads a hundred answers in the time a person reads one | Has biases that must be measured | Questions a program can’t answer, such as "is this answer supported by the source?" or "which of these two is better?" |

Many bad answers fail in ways a program can see. Imran said most teams don’t use nearly enough code checks. His order of preference was simple. Use the first marker wherever you can. Use the third for what the first can’t see. And use the second to keep the third honest.

## A judge on trial

Anaya wanted a judge for a question no program could answer. After the guard has done its work, is anything personal left in the message? The code checks could confirm that a quotation was present. They couldn’t tell whether a leftover fragment, such as "the flat above the chemist on Karve Road", still pointed to a person.

Imran wrote a judge in an afternoon. It read the cleaned message and answered yes or no, with a reason. It looked excellent. It was fast, and its reasons were fluent and well organised, often longer than the answers they commented on.

Before trusting it, said Imran, you should check it. Grade fifty yourself. Have the judge grade the same fifty. Then count how often you agree.

Anaya and Farah graded fifty cleaned messages on Saturday, separately, and then compared. They agreed with each other on forty-eight of the fifty. The judge, run on the same fifty, agreed with them on thirty-three. That is sixty-six percent.

Imran said that six or seven in ten is a very normal first result. What matters more than the figure is the pattern of the disagreements. Anaya laid out the seventeen of them. In fourteen, the judge had said "clean" about a message that still held something personal. In nearly all of those, the message was a long one with a mask in it. The judge saw the mask, and the longer the message, the more satisfied it seemed to be.

::: key Clustered mistakes can be fixed
If the errors had been scattered, it would have meant that Anaya and Farah didn’t themselves agree about what "clean" meant, and no change to the judge could help. Because the errors clustered, she knew she had found something she could correct.
:::

## What a judge gets wrong

Imran had a short and unflattering list of known biases, with remedies that worked.

Table: Biases of LLM judges and their remedies
| Bias | Remedy |
| --- | --- |
| Gives higher scores to longer answers, even when the extra words add nothing | Ask about one specific thing, not "quality": is there any detail left that could identify one person? |
| When comparing two answers, favours the one it saw first | Compare two outputs instead of scoring one, then swap them and run again |
| Drifts towards whatever sounds thorough | Require it to quote the exact words its verdict rests on, so a person can check in a moment |

Anaya rewrote the instruction in those three ways. On the same fifty messages, the judge now agreed with her forty-four times. That is eighty-eight percent.

A judge you have checked against your own marking is a measuring instrument. A judge you haven’t checked will tend to agree with the machine it is marking, because the two are the same kind of thing.

## Reading a hundred real outputs

None of this could tell her what was going wrong. A judge reports how often something fails, and says nothing about why. For that, Imran did the most unglamorous thing in the project.

Over a weekend, he ran the guard, without changing anything, over a month of exported chats. For each message he recorded what it would have hidden. On Monday he gave Anaya a stack of a hundred of those outputs, printed and picked at random.

Her job was to read them, and for each one that went wrong, write one sentence in her own words saying what went wrong. She was not to choose categories first. Dr. Meenakshi Rao, who listened by phone that evening, explained why. Anyone who chooses a category first starts to see only the things that fit the categories. The notes come first. Only then do you ask what the sentences have in common.

Anaya and Farah read for two hours. Of the hundred outputs, thirty-one had gone wrong. They laid the notes out on the floor and grouped them.

Table: What went wrong in thirty-one of a hundred outputs
| What went wrong | Count |
| --- | --- |
| An order number hidden as if it were an identity number | 9 |
| A name written in Roman Hindi with "ji" after it, missed | 8 |
| An address only half hidden | 5 |
| A number broken over two lines, missed | 4 |
| A company’s name treated as a person | 3 |
| Other | 2 |

This is *error analysis*. Imran said that everyone who has done it says the same thing: it is the most valuable quality work in the field, and it needs no model and no budget. It gives you a ranked list of what to fix, built from your own traffic. A general benchmark can’t do this, because it doesn’t have your customers or your documents.

The table changed the plan. Anaya had been about to spend a week on addresses, because they felt important. The data said the bigger problem was a plainer one: order numbers.

## A loop

Each failure became a row in the answer key, with the correct answer written beforehand. The key grew from a hundred and twenty rows to a hundred and fifty-one.

Anaya drew the cycle on the board in one line so she wouldn’t forget it: real messages, read the failures, add rows, fix, measure, and then more real messages. Each round made the key a better picture of real use. The tools would change every few months, but the key and the list of failures would stay.

At the end of the call, Meenakshi added a point she often made. Before a product goes out, you ask whether it passes the key. After it goes out, you ask whether people are better off. These are different questions, and passing the first can leave the second untouched. Anaya wrote it down. It was the question that stayed with her longest.

## Summary

There are three ways to mark an answer. A program is nearly free, and should be used as much as possible. A person is expensive, and defines what "correct" means. A model acting as judge is fast, cheap and biased.

- A judge must be checked by grading the same answers yourself and counting how often you agree. The pattern of disagreement matters more than the number. Clustered mistakes can be fixed, and scattered ones mean the definition is unclear.
- Judges favour long answers and the first of two. The remedies are to grade one specific thing, swap the order and ask for a quotation.
- Error analysis means reading a hundred real outputs, writing what went wrong in your own words before choosing categories, grouping and counting, and turning the biggest groups into new test cases.

Next, you’ll look at what all this costs to run, in a conversation with the finance director.

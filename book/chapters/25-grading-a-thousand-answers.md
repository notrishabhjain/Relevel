---
title: Grading a Thousand Answers
summary: Hand-checking stops working at about fifty answers. The team puts a machine on the marking, checks the marker before trusting it, and then does the most useful thing in the field, which needs no machine at all.
course: ch14 ch145
terms:
  - code check | a few lines of ordinary code that test one thing about an answer automatically, such as whether a quoted phrase is really in the message; free to run on every change | code checks
  - LLM judge | a model that grades another model's output; cheap and fast, but it has biases and must be checked against your own grading before it is trusted | LLM judges
  - error analysis | reading a hundred real outputs, writing down in your own words what went wrong in each, grouping the notes, naming the groups and counting them | 
---

By the end of June the answer key had a hundred and twenty rows, and Anaya could no longer mark it by hand.

She could, strictly speaking. It took her about three hours, with a pencil, and she did it every Friday. But the key was growing, every change to the guard needed it run, and the guard changed several times a week. The idea of marking every answer herself, or even of reading all of them, had become something close to a fantasy. At a hundred and twenty rows it was a chore. At the thousands a real product sees in a week it was impossible.

"There are three ways to mark an answer," said Imran, "and every serious team ends up using all of them."

## Three markers

The first is a program. A *code check* is a few lines of ordinary software that test one thing about an answer. It costs almost nothing and can run on every change, thousands of times. Is the output in the right form? Is every kind one of the permitted ones? Does every quotation actually appear in the message? Is it fast enough? Is the number of findings sensible? Many bad answers fail in ways a program can see. "Most teams don't use nearly enough of these," said Imran. "Start here."

The second is a person. A person is very expensive and slow, and two people often disagree. But a person is also the one marker who can say what correct *means*. Everything else in the system is calibrated against what a person decided.

The third is a model that grades another model. It is called an *LLM judge*. It is cheap and quick and can read a hundred answers in the time it takes a person to read one. It is good at questions like *is this answer supported by the source?* and *which of these two is better?* It is also a thing with biases, which must be measured.

"Use the first wherever you can," said Imran. "The third for what the first cannot see. And the second to keep the third honest."

## A judge on trial

Anaya wanted a judge for one particular question that no program could answer: *after the guard has done its work, is there anything personal left in the message?* The code checks could confirm that a quotation was present. They could not tell whether a leftover fragment, *the flat above the chemist on Karve Road*, still pointed to a person.

Imran wrote a judge in an afternoon. It read the cleaned message and answered yes or no, with a reason. It looked excellent. It was fast. Its reasons were fluent, well organised, and often, she noticed, longer than the answers they commented on.

"Before you trust it," said Imran, "you check it. Grade fifty yourself. Have it grade the same fifty. Count how often you agree."

She and Farah graded fifty cleaned messages on Saturday, separately, then compared. They agreed with each other on forty-eight of fifty, which was a relief. The judge, run on the same fifty, agreed with them on thirty-three.

"Sixty-six percent," said Anaya. "That is bad."

"Six or seven in ten is a very normal first result," said Imran. "What matters is the *pattern* of the disagreements. Look at them."

She looked. Seventeen disagreements. And when she laid them out, she saw it, because the judge's mistakes were not scattered. In fourteen of the seventeen, the judge had said *clean* about a message that still had something personal in it, and in nearly all of those the message was a long one with a mask in it. The judge had seen the mask, and the longer the message, the more it seemed to be satisfied.

If the errors had been scattered, it would have meant that she and Farah did not themselves agree about what "clean" meant, and no change to the judge could help. Because they clustered, she knew she had found something she could fix.

## What a judge gets wrong

Imran had a list, and it was short and unflattering. Judges give higher scores to longer answers, even when the extra words add nothing. When asked to compare two answers, they tend to favour the one they saw first. And a judge asked about "overall quality" will drift towards whatever sounds thorough.

The cures were simple, and they worked. Ask the judge to grade one specific thing and not "quality": *is there any detail left that could identify one person?* Ask it to compare two outputs rather than score one, then swap them round and run it again. Require it to quote the exact words its verdict rests on, so that a person can check the quotation in a moment, as with the finder.

She rewrote the instruction in those three ways. On the same fifty, the judge now agreed with her forty-four times.

"Eighty-eight percent," said Farah.

"And still not the people," said Imran, "but a measuring instrument. A judge you have checked against your own marking is a tool. A judge you have not will tend to agree with the machine it is marking, because the two are the same kind of thing."

## A hundred real ones

What all of this could not tell her was *what* was going wrong. A judge reports how often something fails. It says nothing about why.

For that, Imran did the most unglamorous thing of the whole project. Over a weekend, he ran the guard, without changing anything, over a month of exported chats. It wrote down, for each message, what it would have hidden. On Monday he handed her a stack of a hundred of those outputs, printed, picked at random.

"Read them," he said. "For each one that went wrong, write down in your own words what went wrong. One sentence. Don't pick a category first. Pick it afterwards."

It was a Tuesday night, and Meenakshi had said on Sunday that she would call to listen, and she did, the cat sitting audibly on the keyboard at the other end. Anaya read, and Farah read in the next chair, and for two hours the only sounds were pages and the soft complaint of the fan.

The rule about the sentence first was one Meenakshi pressed on her, in her way. "If you choose a category first, you start to see only the things that fit your categories. Write what you saw. Then ask what the sentences have in common."

When they had finished, they laid the notes on the floor and grouped them. Of the hundred, thirty-one had gone wrong in some way.

| What went wrong | Count |
| --- | --- |
| An order number hidden as if it were an identity number | 9 |
| A name written in Roman Hindi with *ji* after it, missed | 8 |
| An address only half hidden | 5 |
| A number broken over two lines, missed | 4 |
| A company's name treated as a person | 3 |
| Other | 2 |

This was error analysis, and everyone who had ever done it, Imran said, said the same thing: it is the most valuable quality work in the field, and it needs no model and no budget. What it gives you is a ranked list of what to fix, built from your own traffic. A general benchmark cannot do this for you, because it does not have your customers or your documents.

The table changed the plan more than anything she had done that quarter. She had been about to spend a week on addresses, because they felt important. The data said the larger problem was a single, silly one: order numbers.

## A loop

Each group became rows in the answer key. Nine more rows about order numbers, with the correct answer written beforehand. Eight about *ji*. Four about line breaks. The key grew from a hundred and twenty rows to a hundred and fifty-one.

That was the shape of it, and Anaya drew it on the board in one line so that she would not forget. *Real messages, read the failures, add rows, fix, measure, more real messages.* Each round made the key a better picture of real use. The tools would change every few months. The key and the list of failures would stay.

Before she went home, Meenakshi said one more thing, as she usually did at the end of a call. "Before it goes out, you ask whether it passes the key. After it goes out, you ask whether people are better off. They are different questions. Passing the first can leave the second untouched."

Anaya wrote it down. It would turn out to be the question that stayed with her longest of all.

## What to carry forward

There are three ways to mark an answer: a program, which is nearly free and should be used as much as possible; a person, who is expensive and who defines what correct means; and a model acting as a judge, which is fast and cheap and has biases. A judge must be checked by grading the same answers yourself and counting how often you agree, and the pattern of disagreement matters more than the number: clustered mistakes can be fixed, scattered ones mean your own definition is unclear. Judges favour long answers and the first of two; the cures are to grade one specific thing, swap the order, and ask for a quotation. And the most useful quality work of all is reading a hundred real outputs, writing what went wrong in your own words before choosing categories, grouping and counting, and turning the biggest groups into new test cases.

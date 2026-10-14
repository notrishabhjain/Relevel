---
title: Gates, Traces and Rollbacks
summary: One edit to one instruction, made late on a Friday night without a test, shows why a change that doesn't feel like a deployment still needs a gate, and why a team should be able to answer "why did it do that?" in forty seconds. Along the way the chapter explains golden datasets, regressions, release gates, observability, trace records, p95 and canary releases.
course: ch16e ch17o
goals:
  - explain why an edit to an instruction is really a code change
  - build a release gate from a versioned golden dataset, and write the sentence that stops a release
  - use trace records to answer "why did it do that?" without guessing
  - measure the slow tail with p95, count the cost of a whole task, and release a change to a few users first
terms:
  - golden dataset | the versioned, representative set of cases, with the behaviour you expect for each, that defines what good means for a system; it has a version number so that a result can be rerun | golden set
  - regression | a change that makes a system worse at something it used to do well | regressions
  - release gate | an automatic check that runs the golden dataset against a change and blocks the release if any number falls below its threshold | release gates, gate
  - observability | being able to see, from the records a system keeps, what it did and why, without guessing | 
  - trace record | the saved record of one request's whole path through the system: the input, the versions, the steps, the timings, the cost and how it ended | trace records
  - p95 | the time that 95 out of 100 requests beat; it shows the slow tail that an average hides | 
  - canary release | showing a change first to a small share of users, with the old version ready, before everyone gets it | canary
---

At ten to eleven on a Friday night, an engineer from another team was borrowing the guard's configuration for a related project. He noticed one line in the finder's instruction: "If unsure, treat the detail as personal." It looked over-cautious to him. So he softened it to "if reasonably unsure", saved the file, and went to bed pleased with a small improvement. The whole edit took forty seconds.

On Monday morning the weekly sweep, which Lakshmi Iyer had started running, checked five hundred chats. It found twenty-three identity numbers left unhidden. The week before, it had found nine. Nobody had deployed anything. No code had changed and no release had gone out. A configuration file had been edited and saved, and the guard had been behaving differently since Friday night.

## The case: an edit that was not a deployment

"Editing an instruction doesn't feel like a deployment," said Imran Qureshi, flatly, like a man reading out a diagnosis. But it is one, he said, and teams break this rule more often than any other. A change to a prompt is a code change in disguise. It alters what the system does, just as a change to code would.

So this chapter does two things. It shows the machinery that makes an incident like this one impossible. And it shows the records that let you explain any incident that still happens.

## What a gate is

Anaya wrote down in the decision log, with the date, what she wanted: a way for this to be impossible. Then she turned to a part of the project she had been building since April without ever giving it its proper name.

That part was the answer key. It now had two hundred and twenty rows, and it grew every week. Each row was a case with the behaviour the team expected. The key was versioned and kept, and in the trade this kind of set is called a *golden dataset*. Imran described it as the memory of what "good" means for the product.

What makes a golden dataset worth having is its coverage. It holds the easy messages, the paraphrases, the ambiguous ones, the ones with no answer, the ones in other languages and the ones with injected instructions. It stands for the real risks, not the flattering demonstrations. And it has a version number, because an evaluation you can't rerun after a change is only an anecdote.

Next, Imran wanted a door between the answer key and the world. The door should open only for changes that passed. He built it in a day. It was a single command with four steps.

1. Run the golden dataset against the current instruction.
2. Grade the results and print the numbers.
3. Compare each number with a threshold that was written down beforehand.
4. If anything is below its threshold, fail loudly with the reason, and don't let the change go out.

The command ran automatically whenever any file changed: the code, the instruction, the model's name, the index or a tool. This is a *release gate*. Its job is to catch a *regression*, which is a change that makes something worse that used to be good. A regression can happen without a single line of code failing to compile, as the Friday edit showed. Imran ran the gate on that edit afterwards.

```
GATE FAILED
  Fixed-shape numbers found:  96.4%   (threshold 98.0%)
  Answer key version 12, 220 rows.
  Blocked: instruction v14 -> v15.
```

It would have said so in forty seconds, Imran pointed out, and he would much rather it had.

## The sentence that stops a release

Lakshmi had been in the room throughout. She asked Anaya to write the sentence she would say in the meeting. She didn't want a policy. She wanted the actual sentence, with numbers in it, that stops a release.

Anaya wrote it twice. The first version had the word "seems" in it, and she crossed it out, because a sentence with that word would never have stopped anything. The second version read: we are not shipping, because recall on fixed-shape numbers is 96.4 against a threshold of 98, on answer key version 12. "That one stops a release," said Lakshmi. "Thresholds do. Impressions don't."

The gate also looked at more than one number. A good final score can hide a broken part, because a fluent system can cover for missing evidence often enough to look fine in a demonstration. So the gate measured at several levels at once. The table shows each level and the question it asks.

Table: What the gate measures
| Level | Question |
| --- | --- |
| Finding | Did the finder find the right things? |
| Deciding | Did the rule-keeper do the right thing with them? |
| Tools | Was the lookup tool chosen correctly? |
| Cost and time | Did the whole task take the time and cost it should? |
| Attacks | Do the attacks still fail? |

A change had to pass all five. Then Anaya added one more line to the part of the specification where decisions are recorded, and it was the hardest line to write. It said which threshold was non-negotiable. Recall on fixed-shape numbers, she wrote. Everything else she could negotiate.

## The parcel and its scans

So the gate could stop a bad change before it shipped. But what about a bad result that was already out in the world? On a Wednesday Lakshmi asked a question, in the voice she used when she already suspected the answer. Why was Mrs. Kulkarni's address left visible in a chat on the sixteenth?

Nobody knew, and that was the first problem. The guard had made thousands of decisions that week, and each one was saved only as a line saying that something had been hidden, or hadn't. Searching through those lines was guesswork.

Imran explained what was missing with a post-office example. When a parcel goes missing, the courier can say where it was last scanned, because it gets scanned at every step. Without the scans, there is nothing to trace.

::: def Trace record and observability
A *trace record* is the scan log for one request. It holds the request's number, the versions of everything that touched it, the steps it went through, how long each step took, what it cost and how it ended. *Observability* is being able to see, from records like these, what a system did and why, without guessing. If you can see only the input and the output, every diagnosis is a guess.
:::

Imran had been building trace records for a month, so the answer to Lakshmi's question took forty seconds. The message of the sixteenth had been long, and the system had cut it into three pieces. The finder had timed out on the second piece. As designed, the system then fell back to safe mode for that piece, and safe mode did not know about addresses. The address had been in that piece.

Lakshmi observed that everything had worked as designed. "It did what we told it," said Imran. "We told it something that isn't good enough." He wrote a new line on the board: when safe mode takes over after a timeout, it should mask the whole piece, not just the numbers. He fixed it before lunch.

## The average that hid the tail

Next Anaya looked at the average time per message on the dashboard. It was about a tenth of a second, and everything seemed fine. Imran disagreed. An average hides the tail, he said.

Here is the idea in simple terms. Line up a hundred requests from fastest to slowest and look at the ninety-fifth. The time it took is called *p95*. It means that ninety-five requests in a hundred were faster than that. Users feel the slow few much more than they feel the average.

On the dashboard the average was 0.12 seconds, but the p95 was 1.9. So one message in twenty took longer than a second and a half. Imran measured each stage separately and found that the tail belonged to one of them, the order lookup, which was occasionally slow. That stage owned the tail, and the tail was where the work was.

The same thinking applied to cost, which he now tracked for every request. What is worth knowing is not the cost of one call. It is the cost of one message successfully cleaned, with the retries and the extra rounds counted in.

## What can change without anyone touching it

Imran asked Anaya to name three things that could make an assistant slower in a week when nobody deployed anything. She suggested the mix of traffic, which in October included more messages in Devanagari script. She suggested the number of documents. And she suggested the response time of the provider on the other side of the lookup. None of these lives in the repository, which is exactly why they have to be on the dashboard.

The dashboard as it now stood had six panels: quality, safety, speed, cost, traffic and failures. Each had a measure, a source, an owner and a threshold. Some alerts would wake a person, and others would only be watched. Anaya had tried removing one panel at a time to see which incident would become harder to diagnose. Every removal made one harder, and that was the point.

Imran insisted on two more habits, both borrowed from ordinary software. The first was to version every part separately: the instruction, the model, the index and the tool descriptions. Then any one of them could be rolled back by itself. The second was to show a change to a few users first, with the old version ready. That is a *canary release*, named after the old mining practice of sending a bird in first. The question to be able to answer at any time, he said, is: what exactly changed?

## Summary

A change to an instruction is a change to the system, even though it doesn't feel like a deployment. The cure is a release gate. It is a command that runs a versioned golden dataset against every change and blocks the change if any number falls below a threshold set in advance.

- The gate measures at several levels, because a good final score can hide a broken part. The sentence that stops a release contains numbers, not impressions.
- To answer "why did it do that?", keep a trace record of every request's path. That is the difference between knowing and guessing.
- Averages hide the slow tail, so measure p95, and count the cost of the whole task, not of one call.
- Quality can change without anyone touching the code, because traffic, data and providers all move. Give each part its own version so it can be rolled back alone, and show changes to a few users first.

The next chapter goes one step further. It asks what happens when the thing you built is attacked on purpose.

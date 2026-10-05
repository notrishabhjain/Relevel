---
title: Gates, Traces and Rollbacks
summary: One edit to one instruction, made on a Friday night without a test, shows why a change that does not feel like a deployment must pass through a gate, and why a team must be able to answer "why did it do that?" in forty seconds. The chapter introduces golden datasets, regressions, release gates, observability, trace records, p95 and canary releases.
course: ch16e ch17o
goals:
  - explain why an edit to an instruction is a code change in disguise
  - build a release gate from a versioned golden dataset and write the sentence that stops a release
  - use trace records to answer "why did it do that?" without guessing
  - measure the slow tail with p95, cost a whole task, and release changes to a few users first
terms:
  - golden dataset | the versioned, representative set of cases, with expected behaviour, that defines what good means for a system; it needs a version number so a result can be rerun | golden set
  - regression | a change that makes a system worse at something it used to do well | regressions
  - release gate | an automatic check that runs the golden dataset against a change and blocks the release if any number falls below its threshold | release gates, gate
  - observability | being able to see, from the records a system keeps, what it did and why, without guessing | 
  - trace record | the saved record of one request's whole path through the system: input, versions, steps, timings, cost and outcome | trace records
  - p95 | the time that 95 out of 100 requests beat; it shows the slow tail that an average hides | 
  - canary release | showing a change first to a small share of users, with the old version ready, before everyone gets it | canary
---

At ten to eleven on a Friday night an engineer from another team, borrowing the guard's configuration for a related project, noticed a line in the finder's instruction that he thought made it over-cautious: "If unsure, treat the detail as personal." He softened it to "if reasonably unsure". He changed one line in one file, saved it, and went to bed content that he had made a small thing slightly better. The edit took forty seconds.

On Monday morning the sweep, which Lakshmi Iyer had begun running weekly, found twenty-three unhidden identity numbers in five hundred chats, where it had found nine. Nobody had deployed anything. No code had changed and no release had gone out. A configuration file had been edited and saved, and the guard had been behaving differently since Friday night.

## The case: an edit that was not a deployment

"Editing an instruction does not feel like a deployment," said Imran Qureshi, flatly, like a man reading a diagnosis. It is one, he said, and teams break exactly that rule more often than any other. A prompt change is a code change in disguise. This chapter describes the machinery that makes such an incident impossible and the records that make any incident explicable.

## What a gate is

Anaya wrote in the log, with the date, what she wanted: a way for this to be impossible. She turned to the part of the project she had been building since April without calling it by its proper name.

The answer key now had two hundred and twenty rows and grew every week. It was a set of cases with expected behaviour, versioned and kept, and in the trade it is a *golden dataset*. Imran called it the memory of what "good" means for the product. Its value lies in its coverage: the easy messages, the paraphrases, the ambiguous ones, those with no answer, those in other languages and those with injected instructions. It stands for the real risks and not the flattering demonstrations. It has a version number, because an evaluation that cannot be rerun after a change is only an anecdote.

Between the key and the world, Imran wanted a door that opened only for changes that passed. He built it in a day. It was a single command with four steps.

1. Run the golden dataset against the current instruction.
2. Grade the results and print the numbers.
3. Compare each number with a threshold written beforehand.
4. If anything is below its threshold, fail loudly with the reason, and do not let the change go out.

It ran automatically whenever any file changed: the code, the instruction, the model's name, the index or a tool. This is a *release gate*. It catches a *regression*, a change that makes something worse that used to be good, which can happen without a single line of code failing to compile. Imran ran it on the Friday edit.

```
GATE FAILED
  Fixed-shape numbers found:  96.4%   (threshold 98.0%)
  Answer key version 12, 220 rows.
  Blocked: instruction v14 -> v15.
```

It would have said so in forty seconds, said Imran, and he would rather it had.

## The sentence that stops a release

Lakshmi, who had been present throughout, asked Anaya to write the sentence she would say in the meeting: not a policy but the actual sentence, with numbers, that stops a release. Anaya wrote it twice. The first version contained the word "seems", and she crossed it out, because a sentence with that word would not have stopped anything. The second read: we are not shipping, because recall on fixed-shape numbers is 96.4 against a threshold of 98, on answer key version 12. "That one stops a release," said Lakshmi. "Thresholds do. Impressions don't."

The gate looked at more than one number. A good final score can hide a broken piece, because a fluent system can cover for missing evidence often enough to look fine in a demonstration. The gate therefore measured at several levels at once.

Table: What the gate measures
| Level | Question |
| --- | --- |
| Finding | Did the finder find the right things? |
| Deciding | Did the rule-keeper do the right thing with them? |
| Tools | Was the lookup tool chosen correctly? |
| Cost and time | Did the whole take the time and cost it should? |
| Attacks | Do the attacks still fail? |

A pass required all of them. Anaya added one line to the section of the specification where decisions are recorded, and it was the hardest: which threshold is non-negotiable? Recall on fixed-shape numbers, she wrote. Everything else she could negotiate.

## The parcel and its scans

On a Wednesday Lakshmi asked a question in the voice she used when she already suspected the answer: why was Mrs. Kulkarni's address left visible in a chat on the sixteenth? Nobody knew, which was the first problem. The guard had made thousands of decisions that week, and each was recorded only as a line saying that something had been hidden or not. Searching through them was guesswork.

Imran explained what was missing with a post-office image. When a parcel goes missing, the courier can say where it was last scanned, because it is scanned at every step. Without the scans it cannot be traced.

::: def Trace record and observability
A *trace record* is the scan log for one request. It holds the request's number, the versions of everything that touched it, the steps it went through, how long each took, what it cost and how it ended. *Observability* is being able to see, from records like these, what a system did and why, without guessing. If one can see only the input and the output, every diagnosis is a guess.
:::

Imran had been building trace records for a month, and the answer to Lakshmi's question took forty seconds. The message of the sixteenth had been long and had been cut into three pieces. The finder had timed out on the second piece, and the system had fallen back, as designed, to safe mode for that piece, which did not know about addresses. The address had been in that piece. Lakshmi observed that it had worked as designed. "It did what we told it," said Imran. "We told it something that is not good enough." He wrote a new line on the board: a timeout in safe mode should mask the whole piece and not just the numbers. He fixed it before lunch.

## The average that hid the tail

Anaya looked at the average time per message on the dashboard. It was a tenth of a second, and everything seemed fine. Imran disagreed: the average hides the tail. The measure that matters is *p95*, the time that ninety-five requests in a hundred beat. The average was 0.12 seconds and the p95 was 1.9. One message in twenty took longer than a second and a half, and users feel the tail much more than they feel the average. He measured each stage and found that the tail belonged to one of them, the order lookup, which was occasionally slow. That stage owned the tail, and the tail was where the work was.

The same applied to cost, which he now tracked for every request. What is worth knowing is not the cost of a call but the cost of a message successfully cleaned, with the retries and the extra rounds counted in.

## What can change without anyone touching it

Imran asked Anaya to name three things that could have made an assistant slower in a week in which nobody deployed anything. She suggested the mix of traffic, which in October included more messages in Devanagari script, the number of documents, and the response time of the provider on the other side of the lookup. None of these is in the repository, which is why they must be on the dashboard.

The dashboard as it now stood had six panels: quality, safety, speed, cost, traffic and failures. Each had a measure, a source, an owner and a threshold. Some alerts would wake a person and others would only be watched. Anaya had tried removing one panel at a time to see which incident would become harder to diagnose, and every removal did, which was the point.

Imran insisted on two more habits, both borrowed from ordinary software. The first was to version every part separately, the instruction, the model, the index and the tool descriptions, so that anything could be rolled back by itself. The second was to show a change to a few users first, with the old version ready. That is a *canary release*, named for the old mining practice of sending the bird in first. The question to be able to answer at any time, he said, is what exactly changed.

## Summary

A change to an instruction is a change to the system, though it does not feel like a deployment. The cure is a release gate: a command that runs a versioned golden dataset against every change and blocks it if any number falls below a threshold set in advance.

- The gate measures at several levels, because a good final score can hide a broken part. The sentence that stops a release contains numbers, not impressions.
- To answer "why did it do that?", keep a trace record of every request's path. That is the difference between knowing and guessing.
- Averages hide the slow tail, so measure p95, and cost the whole task and not the call.
- Quality can change without anyone touching the code, because traffic, data and providers all move. Give each part its own version so it can be rolled back by itself, and show changes to a few users first.

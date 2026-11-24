---
title: Gates, Traces and Rollbacks
summary: A late Friday edit to one line of instructions, made with no test, shows why even a small change needs a gate. It also shows why a team should answer "why did it do that?" in forty seconds. You meet golden datasets, regressions, release gates, observability, trace records, p95 and canary releases.
course: ch16e ch17o
goals:
  - see why changing an instruction is really changing code
  - build a release gate from a versioned golden dataset, and write the sentence that stops a release
  - use trace records to answer "why did it do that?" without guessing
  - measure the slow tail with p95, count the cost of a whole task, and show a change to a few users first
terms:
  - golden dataset | the answer key for the whole product: many real cases, each with the result you expect, saved with a version number so you can rerun it | golden set
  - regression | a change that makes the product worse at something it did well before | regressions
  - release gate | a locked door before launch: an automatic check runs the golden dataset on a change, and blocks it if any number falls below its threshold | release gates, gate
  - observability | being able to see, from saved records, what the system did and why, with no guessing | 
  - trace record | the scan log of a parcel, but for one request: the input, the versions, the steps, the timings, the cost and how it ended | trace records
  - p95 | the time that 95 out of 100 requests beat; it shows the slow few that an average hides | 
  - canary release | a trial run: show a change to a few users first, with the old version ready, before everyone gets it | canary
---

It was ten to eleven on a Friday night. An engineer from another team was borrowing the guard's configuration (its settings file) for a similar project. One line in the finder's instruction caught his eye. It said: "If unsure, treat the detail as personal."

To him it looked too careful. So he softened it to "if reasonably unsure". He saved the file and went to bed, pleased with a small fix. The whole edit took forty seconds.

On Monday morning the weekly sweep ran. Lakshmi Iyer had started this check, which reads five hundred chats. It found twenty-three identity numbers left unhidden. The week before, it had found nine.

Nobody had deployed anything. No code had changed. No release had gone out. Only a settings file had been edited and saved. And since Friday night, the guard had behaved differently.

## The case: an edit that was not a deployment

"Editing an instruction doesn't feel like a deployment," said Imran Qureshi. He said it flatly, like a doctor reading out a result. "But it is one. Teams break this rule more than any other."

Think of a recipe card in a kitchen. Change "one spoon of salt" to "two", and the dish changes. A change to a prompt (the note you hand the model) is the same. It is a code change in disguise. It changes what the system does, just as new code would.

This chapter does two things. First, it shows the machinery that stops a slip like this one. Second, it shows the records that explain any slip that still happens.

## What a gate is

Anaya wrote in the decision log (the team's diary of choices), with the date, what she wanted. She wanted a way to make this impossible. Then she turned to a part of the project she had built since April. She had never given it its proper name.

That part was the answer key (the list of questions with the right answers, written before any test). It now had two hundred and twenty rows. It grew every week. Each row was one case, with the result the team expected.

The key had a version number and was kept safe. In the trade, this kind of set is called a *golden dataset*. Imran called it the memory of what "good" means for the product.

A golden dataset is worth having for its coverage. It holds the easy messages and the reworded ones. It holds the confusing ones, and the ones with no answer. It holds messages in other languages, and messages with hidden instructions. It shows the real risks, not the flattering demo. And it has a version number. A test you cannot rerun after a change is only a story.

Next, Imran wanted a door between the answer key and the world. Think of a school gate with a guard. The door opens only for changes that passed. He built it in a day. It was one command with four steps.

1. Run the golden dataset against the current instruction.
2. Grade the results and print the numbers.
3. Compare each number with a threshold (a pass mark) written down beforehand.
4. If any number is below its threshold, fail loudly, say why, and stop the change.

The command ran by itself whenever any file changed. That meant the code, the instruction, the model's name, the index (the lookup list) or a tool. This is a *release gate*. Its job is to catch a *regression*. A regression is a change that makes something worse that used to be good.

A regression can happen with no code breaking at all. The Friday edit showed that. Afterwards, Imran ran the gate on that edit.

```
GATE FAILED
  Fixed-shape numbers found:  96.4%   (threshold 98.0%)
  Answer key version 12, 220 rows.
  Blocked: instruction v14 -> v15.
```

Imran said the gate would have told them in forty seconds. He wished it had.

## The sentence that stops a release

Lakshmi had been in the room all along. She asked Anaya to write the sentence she would say in the meeting. She did not want a policy. She wanted the real sentence, with numbers in it, that stops a release.

Anaya wrote it twice. The first try had the word "seems" in it. She crossed it out. A sentence with "seems" would never stop anything.

The second try read: we are not shipping, because recall on fixed-shape numbers is 96.4 against a threshold of 98, on answer key version 12. Recall means this: of all the fish in the pond, how many did the net catch? "That one stops a release," said Lakshmi. "Thresholds do. Impressions don't."

The gate also looked at more than one number. Think of a school report card. One good total can hide a failed subject. A fluent system can cover for missing evidence, so a demo looks fine. So the gate measured at several levels at once. The table shows each level and the question it asks.

Table: What the gate measures
| Level | Question |
| --- | --- |
| Finding | Did the finder find the right things? |
| Deciding | Did the rule-keeper do the right thing with them? |
| Tools | Was the lookup tool chosen correctly? |
| Cost and time | Did the whole task take the time and cost it should? |
| Attacks | Do the attacks still fail? |

A change had to pass all five. Then Anaya added one more line to the specification (the recipe card for the product). She added it where the team recorded decisions. It was the hardest line to write. It named the one threshold that could not be negotiated. Recall on fixed-shape numbers, she wrote. Everything else she could negotiate.

## The parcel and its scans

So the gate could stop a bad change before launch. But what about a bad result already out in the world? On a Wednesday, Lakshmi asked a question. She used the voice she kept for when she already guessed the answer. Why was Mrs. Kulkarni's address left visible in a chat on the sixteenth?

Nobody knew. That was the first problem. The guard had made thousands of decisions that week. Each was saved as one line, saying only that something was hidden, or was not. Searching those lines was guesswork.

Imran explained what was missing with a post-office story. When a parcel goes missing, the courier can say where it was last scanned. It gets scanned at every step. With no scans, there is nothing to trace.

::: def Trace record and observability
A *trace record* is the scan log for one request. It holds the request's number and the versions of everything that touched it. It holds the steps it went through, how long each step took, what it cost and how it ended. *Observability* means you can see, from records like these, what the system did and why, with no guessing. If you see only the input and the output, every diagnosis is a guess.
:::

Imran had been building trace records for a month. So the answer to Lakshmi's question took forty seconds. The message of the sixteenth was long. The system had cut it into three pieces. The finder had timed out (run out of waiting time) on the second piece.

As designed, the system then fell back to safe mode for that piece. Safe mode did not know about addresses. And the address was in that piece.

Lakshmi noted that everything had worked as designed. "It did what we told it," said Imran. "We told it something that isn't good enough." He wrote a new line on the board. When safe mode takes over after a timeout, it should mask (cover up) the whole piece, not just the numbers. He fixed it before lunch.

## The average that hid the tail

Next, Anaya looked at the average time per message on the dashboard (the one screen of numbers). It was about a tenth of a second. Everything seemed fine. Imran disagreed. An average hides the tail, he said.

Here is the idea in simple terms. Think of a hundred people finishing a race. Line them up from fastest to slowest and look at the ninety-fifth. Her time is called *p95*. It means ninety-five in a hundred were faster than that. Users feel the slow few far more than they feel the average.

On the dashboard, the average was 0.12 seconds. But the p95 was 1.9. So one message in twenty took longer than a second and a half. Imran timed each stage on its own. The tail belonged to one stage: the order lookup, which was sometimes slow. That stage owned the tail, and the tail was where the work was.

The same thinking applied to cost. He now tracked it for every request. The useful number is not the cost of one call. It is the cost of one message cleaned successfully, with the retries and extra rounds counted in. Think of the real price of one roti, with the burnt ones counted too.

## What can change without anyone touching it

Imran asked Anaya to name three things that could slow the assistant in a week when nobody deployed anything. She named the mix of traffic. In October it had more messages in Devanagari script (the Hindi alphabet). She named the number of documents. And she named the response time of the provider (the outside company) behind the lookup.

None of these lives in the repository (the online folder that remembers every code change). That is exactly why they must be on the dashboard. Think of a shop. The shopkeeper does not change, but the crowd and the supplier do.

The dashboard now had six panels: quality, safety, speed, cost, traffic and failures. Each had a measure, a source, an owner and a threshold. Some alerts would wake a person. Others would only be watched.

Anaya tried removing one panel at a time. She wanted to see which incident would become harder to diagnose. Every removal made one harder. That was the point.

Imran insisted on two more habits, both borrowed from ordinary software. The first was to version every part on its own: the instruction, the model, the index and the tool descriptions. Then any one of them could be rolled back (put back to its old version) by itself.

The second was to show a change to a few users first, with the old version ready. That is a *canary release*. The name comes from old mines, where a bird was sent in first. Imran said one question must always have an answer: what exactly changed?

## Summary

Changing an instruction changes the system, even if it does not feel like a deployment. The cure is a release gate. It is a locked door, like a school gate. It runs a versioned golden dataset on every change. It blocks the change if any number falls below a threshold set in advance.

- The gate measures at several levels, because a good final score can hide a broken part. The sentence that stops a release has numbers in it, not impressions.
- To answer "why did it do that?", keep a trace record of each request's path. That is the difference between knowing and guessing.
- Averages hide the slow tail, so measure p95. Count the cost of the whole task, not of one call.
- Quality can change without anyone touching the code, because traffic, data and providers all move. Give each part its own version so it can be rolled back alone. Show changes to a few users first.

The next chapter goes one step further. It asks what happens when someone attacks the thing you built on purpose.

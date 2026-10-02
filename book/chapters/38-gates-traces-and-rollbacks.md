---
title: Gates, Traces and Rollbacks
summary: One edit to one instruction, made on a Friday night without a test, shows why a change that does not feel like a deployment must pass through a gate; and why, afterwards, you need to be able to answer "why did it do that?" in forty seconds.
course: ch16e ch17o
terms:
  - golden dataset | the versioned, representative set of cases, with expected behaviour, that defines what good means for a system; it needs a version number so a result can be rerun | golden set
  - regression | a change that makes a system worse at something it used to do well | regressions
  - release gate | an automatic check that runs the golden dataset against a change and blocks the release if any number falls below its threshold | release gates, gate
  - observability | being able to see, from the records a system keeps, what it did and why, without guessing | 
  - trace record | the saved record of one request's whole path through the system: input, versions, steps, timings, cost and outcome | trace records
  - p95 | the time that 95 out of 100 requests beat; it shows the slow tail that an average hides | 
  - canary release | showing a change first to a small share of users, with the old version ready, before everyone gets it | canary
---

The edit took forty seconds and was made at ten to eleven on a Friday night by someone who was only trying to help.

It was an engineer from another team, borrowing the guard's configuration for a related project, and noticing that the instruction to the finder contained a line which he thought made it over-cautious. *If unsure, treat the detail as personal.* He softened it. He wrote *if reasonably unsure*. He changed one line in one file, pressed save, and went to bed, content that he had made a small thing slightly better.

On Monday morning the sweep, which Lakshmi had begun running weekly, found twenty-three unhidden identity numbers in five hundred chats, where it had found nine.

Nobody had deployed anything. That was the maddening part. No code had changed. No release had gone out. There was a configuration file, edited and saved, and the guard had been behaving differently since Friday night.

"Editing an instruction does not feel like a deployment," said Imran. He said it flatly, like a man reading a diagnosis. "It is. Teams break exactly that rule more than any other. A prompt change is a code change in disguise."

## What a gate is

Anaya wrote in the log, with the date, what she wanted: *a way for this to be impossible.* And she turned to the part of the project she had been building since April, without ever having called it by its proper name.

The answer key had two hundred and twenty rows by now. It grew every week. It was a set of cases with expected behaviour, versioned and kept. In the trade this is a *golden dataset*, and Imran called it the memory of what "good" means for the product. Its value is in its coverage. It included the easy messages, the paraphrases, the ambiguous ones, the ones with no answer, the ones in other languages and the ones with injected instructions. It stood for the real risks, not the flattering demos. It had a version number, because an evaluation you cannot rerun after a change is only an anecdote.

Between the answer key and the world he wanted a door that only opened for changes that passed. He built it in a day.

It was a single command. Run the golden dataset against the current instruction, grade it, and print the numbers. Compare each against a threshold written beforehand. If anything is below, the command fails, loudly, with the reason, and the change does not go out. It ran automatically whenever any file changed: the code, the instruction, the model's name, the index, a tool. This is a *release gate*. It catches a *regression*, a change that makes something worse that used to be good, which can happen without a single line of code failing to compile.

He ran it on the Friday edit.

```
GATE FAILED
  Fixed-shape numbers found:  96.4%   (threshold 98.0%)
  Answer key version 12, 220 rows.
  Blocked: instruction v14 -> v15.
```

"There it is," said Anaya.

"It would have said so in forty seconds," said Imran. "I would rather it had."

## The sentence that stops a release

Lakshmi, who had been present for the whole conversation, asked Anaya to do something.

"Write the sentence you would say in the meeting," she said. "Not a policy. The actual sentence, with numbers, that stops a release."

Anaya wrote it twice. The first version contained the word *seems*, and she crossed it out, because a sentence with that word in it would not have stopped anything. The second:

*We are not shipping, because recall on fixed-shape numbers is 96.4 against a threshold of 98, on answer key version 12.*

"That one stops a release," said Lakshmi. "Thresholds do. Impressions don't."

The gate looked at more than one number. A good final score can hide a broken piece, because a fluent system can cover for missing evidence often enough to look fine in a demonstration. So the gate measured at several levels at once: whether the finder found the right things; whether the rule-keeper did the right thing with them; whether the lookup tool was chosen correctly; whether the whole took the time and cost that it should; and whether the attacks still failed. A pass required all of them. Anaya added one more line to the specification, in the section where decisions are recorded, and it was the hardest. *Which threshold is non-negotiable?* Recall on fixed-shape numbers, she wrote. Everything else she could negotiate.

## The parcel and its scans

The second half of the chapter began as a question from Lakshmi on a Wednesday, asked in the voice she used when she already suspected the answer.

"Why was Mrs. Kulkarni's address left visible in a chat on the sixteenth?"

Nobody knew. That was the first problem. The guard had made thousands of decisions that week, and each was recorded only as a line saying that something had been hidden or not. Searching through them was guesswork.

Imran explained what was missing with an image from a post office. "When a parcel goes missing," he said, "the courier can tell you where it was last scanned, because they scan it at every step. Without that, you can't trace it."

A *trace record* is the scan log for one request. It holds the request's number, the versions of everything that touched it, the steps it went through, how long each took, what it cost and how it ended. Observability is the name for being able to see, from records like these, what a system did and why, without guessing. If you can see only the input and the output, said Imran, every diagnosis is a guess.

He had been building the trace records for a month, and the answer to Lakshmi's question took forty seconds. The message of the sixteenth had been long. It had been cut into three pieces. The finder had timed out on the second piece, and the system had fallen back, as designed, to safe mode for that piece, which did not know about addresses. The address had been in that piece.

"So it worked as designed," said Lakshmi.

"It did what we told it. We told it something that is not good enough." Imran wrote a new line on the board. *A timeout in safe mode should mask the whole piece, not just the numbers.* He fixed it before lunch.

## The average that hid the tail

Anaya looked at the average time per message on the dashboard. A tenth of a second. Everything seemed fine.

"It isn't," said Imran. "The average hides the tail."

The measure that matters is *p95*: the time that ninety-five requests in a hundred beat. The average was 0.12 seconds. The p95 was 1.9. One message in twenty was slower than a second and a half, and users feel the tail much more than they feel the average. He measured each stage, and the tail belonged to one of them: the order lookup, which was occasionally slow. So that stage owned the tail, and the tail was where the work was.

The same went for cost, which he now tracked for every request. The thing worth knowing was not the cost of a call but the cost of a message successfully cleaned, with the retries and the extra rounds counted in.

## What can change without anyone touching it

"My assistant got slower this week," Imran said, "and nobody deployed anything. Name three things that could have changed."

Anaya had a guess in each category. The mix of traffic, which in October included more messages in Devanagari script. The number of documents. And the response time of the provider on the other side of the lookup. None of those is in the repository, which is the reason they must be on the dashboard.

He showed her the dashboard as it now stood. Six panels. Quality, safety, speed, cost, traffic and failures. Each had a measure, a source, an owner and a threshold. Some alerts would wake a person. Others would only be watched. She had tried removing one panel at a time, to see which incident would become harder to diagnose. Every removal did, which was the point.

There were two more habits he insisted on, both borrowed from the world of ordinary software. The first was to version every part separately, the instruction, the model, the index, the tool descriptions, so that anything could be rolled back by itself. The second was to show a change to a few people first, with the old version ready. That is a *canary release*, from the old mining practice of sending the bird in first.

"You want to be able to answer one question," said Imran, "at any time. What exactly changed?"

## What to carry forward

A change to an instruction is a change to the system, though it does not feel like a deployment, and the cure is a release gate: a command that runs a versioned golden dataset against every change and blocks it if any number falls below a threshold set in advance. The gate measures at several levels, because a good final score can hide a broken part, and the sentence that stops a release contains numbers, not impressions. To answer "why did it do that?", keep a trace record of every request's path, which is the difference between knowing and guessing. Averages hide the slow tail, so measure p95, and cost the whole task and not the call. Quality can change without anyone touching the code, because traffic, data and providers all move. So give each part its own version, so it can be rolled back by itself, and show changes to a few people first.

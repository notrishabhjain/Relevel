---
title: Choosing a Model on Your Own Cases
summary: A founder wants to switch to whichever model topped last week's chart. The team does what you do with a car, takes three of them for a drive on their own roads, and then learns to say exactly what is in the room each model walks into.
course: ch9m ch10c
terms:
  - leaderboard | a published ranking of models by their scores on someone else's tests | leaderboards
  - model selection card | a short, versioned page recording the task, the quality target, the limits on data, speed and cost, the options tried, the evidence and the fallback, so that a reviewer can see exactly why a model was chosen | selection card
  - routing | sending each request to the cheapest model that can handle it, and only the hard ones to a stronger and dearer one | 
  - provenance | the record of where something came from, so that a claim or a decision can be traced to its source, version and the code that produced it | 
---

"It topped the chart," said Mr. Bhatia, "so I thought we should switch."

It was the fourth Monday in September, and he had come in with his laptop open to a bar chart on which one bar was a good deal taller than the others. Anaya looked at the bar. It belonged to a model released the week before. It had performed brilliantly, according to the caption, on a list of tests she had never heard of.

"What did they test it on?" she said.

"Reasoning. Mathematics. Coding. A lot of things."

"Did they test it on Hinglish names?"

He laughed, not unkindly. "No. I don't suppose they did."

A *leaderboard* shows how a model did on someone else's task. It can be a perfectly honest result and tell you nothing about yours. It is like buying a car because it won an award. The award does not say whether it fits your family, copes with your roads or what it costs to run. You would take it for a drive. Very few teams take a model for a drive.

"Before we switch," said Anaya, in the voice that she had practised for exactly this moment, "on which of our cases is it better, and at what speed and cost?"

Mr. Bhatia raised an eyebrow, and then, to her relief, smiled. "Show me."

## Different things at once

Imran had been waiting for the question. A model is not better or worse in one dimension. They differ in several at once: how well they can do the task, how fast they answer, how much text they can take, how reliably they call functions and what they cost. One that wins on the first can lose on the next three. Which of these matters most is a fact about your use, not about the model.

So the work, he said, was to define what *your* use needed and then to measure. He pulled up the runner, which had been waiting.

The task was the finder: read a message, list the personal details. The quality bar, written in the specification in May: at least ninety-eight in a hundred of the fixed-shape numbers, and as many as possible of the names. The data rule, written in July: nothing real could be sent outside the building. The speed bar: typically under a third of a second. The cost ceiling: under sixty paise a message in total.

## Three for a drive

The benchmark was a set of sixty cases, and Anaya had spent a weekend building it. It was a *benchmark*, a fixed set of cases with the expected answers, used to compare options fairly on the same task. It was not the answer key; it was drawn from it, and built on purpose to be hard in the ways that mattered. Twenty English messages. Twenty in Hinglish. Ten in Devanagari. And ten of the kinds a naive test would never include: messages with no answer at all, messages that were ambiguous, and messages with an injected instruction.

It was this last category that she was proudest of. A benchmark is a measuring instrument, and an instrument built from the easy cases produces easy conclusions. A product manager's job is to challenge the test set before challenging the score. She asked herself whether her benchmark would detect the failure she was most afraid of, and she made sure that it would.

They ran three models through it, changing only the model each time, with the same instructions and the same cases. If you change the model and the prompt together and the score improves, you cannot say which helped.

| | Model A | Model B | Model C |
| --- | --- | --- | --- |
| What it is | Small, open-weight, runs inside | Medium, open-weight, runs inside | Large, closed, hosted outside |
| Found overall | 82% | 91% | 95% |
| Found in Hinglish | 71% | 86% | 92% |
| Typical time | 0.15 seconds | 0.4 seconds | 2.1 seconds |
| Cost per call | about 3 paise | about 9 paise | about 40 paise |

"I'm allowed to run Model C at all?" said Anaya.

"On made-up sentences, yes," said Imran. "The benchmark has no real customer in it. That's the reason we built it from invented text. We can use any model, anywhere, to learn how it behaves. The rule is about the real ones."

She looked at the table. It did not give a winner, which was what made it useful. Model C was the best at the work and could not be used, because it was outside and slow. Model A was fast and cheap and not good enough alone. Model B was in between.

## The cheapest that will do

What the numbers suggested was a method that the team had already used. *Routing* sends each request to the cheapest model that can handle it, and passes only the hard ones to a stronger and dearer one. Model A would read every message, quickly and cheaply, and settle the great majority of them. Model B would look only at the unsure few.

She tried it on the benchmark. The combination found ninety-three in a hundred overall, eighty-nine in Hinglish, in a typical time of 0.17 seconds, at a cost of about four paise a message. Not as good as Model C. Good enough to meet the specification. And permitted.

Then she did something Imran had taught her to do, which was to make the decision a piece of paper. A *model selection card* is a short, versioned page that records the task, the quality target, the limits on data, speed and cost, the options tried, the evidence, and the fallback. It exists so that a reviewer can see exactly why a model was chosen. Hers fitted on one page. At the bottom she filled the fallback line: *Rules-only safe mode, as in the specification.*

"One more test," said Imran. "Cover the table. Try to make the decision."

She covered it. She tried. With nothing in front of her she found herself reaching for the model that had topped the chart, which was exactly what she had told Mr. Bhatia not to do. Without the numbers, the decision turned to opinion within about thirty seconds.

"That's why it's on a card," said Imran.

## What goes in the folder

The other half of the afternoon belonged to a different question, and it began with a metaphor Meenakshi had given her on a Sunday.

"Imagine," she had said, "that you have a brilliant new colleague who remembers nothing from yesterday. Each morning you hand them a folder. The standing instructions. A few examples. The file they need today. A note about last week. What you put in the folder decides how well they do."

The model chosen, the next question was exactly what the folder held. Anaya had met this idea before under the name of context. She now saw how much of the work lay in it.

First, the instructions, which she had been treating as a paragraph of requests. They are better thought of as a contract between the application and the model: the role, the task, the limits, the examples, the shape of the output, and what to do when it cannot answer. Code downstream depends on each of those. So the instructions deserved what any other interface gets, and she gave it: a version number, a record of changes, and the same ten cases run before and after any edit.

Second, how big each part of the folder is, so that when the budget is tight there is an order in which to remove things. Most people remove the history first and the evidence last. If yours is different, the reason is the design.

Third, the one that surprised her. "Memory," Imran said, "is not a feature. It's an architecture." There are at least three different stores that get called memory, and they must not be confused. *Session history* is what has been said in this chat. A *user profile* is what the company knows about this person. *Task state* is where this particular job has got to. Each has an owner, a retention period, rules about who may read it, and a way to delete it.

She drew the three on the board and filled in the cells in turn. For each: what is in it; who owns it; how long it is kept; who can see it; how to delete it. In the first, the history, she paused at the cell for *what must never be injected by default*, and wrote one word. *Identity numbers.* The guard already cleaned the history on the way in. Now it was part of the design of the store.

## Where did this come from

The last thing was a quiet one. When the guard hid a detail, it wrote down why. Every record carried the message's number, the part of the guard that had made the decision, and the version of that part. Anyone looking at it later could trace the decision back to its source, the code that made it and the instructions that were in force. This is *provenance*: the record of where something came from.

It mattered more than she had expected. A citation is only useful if it lets the reader reach the evidence. A decision that cannot be reproduced cannot be defended. In September, when Lakshmi asked why a particular name had been hidden on a Tuesday in August, Anaya found the answer in forty seconds. She did not mention that it had been the first time anyone had asked.

## What to carry forward

A leaderboard shows how a model did on someone else's task. Models differ in several ways at once, so the useful comparison is a benchmark of your own, built from the cases and the failures that matter to you, with category breakdowns and some cases designed to be hard, with only the model changing between runs. Routing sends each request to the cheapest model that can handle it, with the dearer one kept for the hard cases. The decision belongs on a model selection card, because without the evidence it dissolves into opinion in seconds. What each model sees is a design in its own right: instructions treated as a versioned contract, a budget with an order of removal, and memory understood as at least three separate stores, each with an owner, a retention and a way to delete. And every decision should carry its provenance, so it can be traced to the code and the evidence that produced it.

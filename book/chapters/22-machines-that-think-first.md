---
title: Machines That Think First
summary: A model that works out its answer before giving it gets the hard cases right and takes eleven seconds to do so. Between a train that stopped near Lonavala and a chat window that cannot wait, the team learns when thinking is worth buying and how to make a wait bearable.
course: ch11 ch115
terms:
  - reasoning model | a model that writes out its working, trying an approach and checking it, before it gives the answer; you pay for that working on every request, in money and in waiting time | reasoning models
  - latency | the time between asking and getting an answer, which users feel as speed | 
  - streaming | sending an answer to the screen piece by piece as it is written, instead of waiting until it is complete | stream, streams
---

The train from Mumbai stopped near Lonavala at ten past six and stayed stopped for forty minutes.

Nothing was said. There was no announcement, no jolt, no explanation passing down the carriage. Anaya, who had spent the day at a meeting with the company's bankers, put her phone away and looked out of the window at a wall of wet green and a shed with a corrugated roof. Around her people sighed, got up, sat down, and asked each other what had happened. A man in the next seat had begun to offer theories.

At twenty to seven a voice came on and said that a signal had failed ahead and the train would move in ten to fifteen minutes. And although this was not good news, the forty minutes already spent and the ten to come, she noticed the whole carriage relax. The wait had not got shorter. It had acquired a shape.

She was still thinking about this when Imran rang.

## The eleven-second answer

"I tried the thinking one," he said, without hello. "On the hard cases."

For a month he had been looking at the hardest sentences in the answer key, the ones that the cheap machine kept getting wrong. The Aadhaar number spoken in words. The twelve digits that might be an order. The sentence that identified someone without a number in it. Today he had tried them on a different sort of model, one that, before it answers, writes out its working: it tries an approach, checks it, backs up if it has to, and only then gives the reply. Usually you do not see the working. You pay for it.

A model that does this is a *reasoning model*. The idea is that accuracy need not be fixed at the moment the model was made. You can buy more of it for each question, by letting the machine work longer.

"Thirty hard cases," said Imran. "The ordinary model got nineteen. The reasoning one got twenty-six."

"That's a lot better."

"It is. Now the other columns."

He read them down the phone. The ordinary model had taken about a second and a quarter for each case. The reasoning one took eleven seconds. The cost per case was about six times higher, because the hidden working is charged like any other output, and there is often far more of it than of the answer itself.

"And on the easy ones?" said Anaya.

"I tried that too. Thirty easy cases. Both got thirty."

"So on those it bought nothing."

"It bought nothing and cost six times as much."

## When thinking is worth paying for

That evening she wrote down what she had understood, on the back of a train ticket, in the dim light of the carriage.

Reasoning is a purchase, made on every request, paid for in money and in waiting time. For many jobs it buys nothing. It helps when the answer has to be worked out: steps that depend on one another, sums, plans, code, a genuine ambiguity that needs resolving. It is wasted when the answer is already in the input and only needs finding or reshaping: looking something up, pulling out a field, sorting into a category, formatting, summarising a passage you provided. The twelve digits spoken as words needed working out. The ordinary message with a mobile number and an email did not.

There were three cautions, and Imran had added them in a message, as he did when he wanted her to keep something.

The first: reasoning does not create evidence. Give the machine the wrong document and it will reason carefully, and at length, from the wrong document. The result is a more convincing wrong answer than a cheap model would have produced. The second: waiting time is a product problem, and she was about to be given a lesson in it. The third: it is not all or nothing. Most providers let you choose how much reasoning to use, so the decision can be made for each type of request, not once for the whole product.

## The decision that cannot wait

The train began to move at five to seven. By the time it reached Pune station the problem had grown a shape of its own, and she had the whole of it by the time she arrived at the office on Saturday morning, where Imran was already waiting.

"The guard sits at the door," she said. "It has to decide before the chat can answer. A customer types a message. The guard looks at it. Only then does the message go on. If the guard takes eleven seconds, the customer waits eleven seconds for every reply."

"Yes."

"And we said it could add no more than a third of a second."

"We did."

The time between asking and getting an answer is *latency*, and what Anaya was discovering was what every team finds, that users feel it more sharply than they feel almost anything else about a product. And she had a second, worse realisation, which came a moment later. In the chat, the guard's output could not be shown piece by piece.

## Showing it early, and showing it whole

There are ways to make a wait easier, and the first of them is the one the train had unwittingly used. How fast a response *feels* depends mostly on when something first appears. Imran drew three options on the whiteboard.

**Start early.** Send the answer to the screen as it is written, a few words at a time, instead of waiting for the whole of it. This is *streaming*. The full answer takes just as long. But the customer starts reading in the first second, and it costs nothing, and it helps more than anything else.

**Say what is happening.** Instead of a spinner, say what is being done: *Reading six documents.* A wait that matches a visible task is a wait that makes sense. This was the announcement on the train.

**Move the wait elsewhere.** If something is really long, stop treating it as interactive. Run it in the background and tell the person when it is done. Teams avoid this because it feels like giving in. For anything over about ten seconds it is usually right, because it removes the problem.

"Which suits us?" said Imran.

"It depends," said Anaya, who had been thinking about it all week, "on whether a half-answer is useful. If a person can start reading the first sentence of an explanation, they can start. But a decision isn't like that. Hide it or don't. Half of a decision is a hazard. Nobody should act on a field that has not finished being written."

"Yes. That is why the schema came first. It is only safe to show part of a reply if the part you can see is already final." He looked pleased. "So the guard can't stream its answer. It has to finish before the chat can use it."

## Which cases go where

They spent the afternoon on the design that followed, and it turned out to be an application of everything they had learned in the month.

The quick boxes would run live, on every message: the pattern checker and the finder of names and places. Between them they dealt with the great majority of messages, in a fraction of a second. For the few where they could not decide, the guard would not wait for the slow, careful judge. It would lean towards the cheaper mistake, the one they had settled in April, and mask the doubtful part immediately, so that the chat went on safely. The reasoning model would look at those cases afterwards, in the background, and decide what should have happened. If a masked piece turned out to be harmless, a person could see it restored. If it turned out to be a leak, it was already covered.

"That's the route," said Anaya. "The expensive machine is asked only about the cases that need working out, and never while the customer is waiting."

"It is a rule you can test." Imran wrote it in the margin of the PRD. "Reasoning only for the unsure few. We'd know we were wrong if the cheap path scored the same on those cases, or if the careful path ever had to finish before a reply could be sent."

Neither of them mentioned what was bothering both of them, which was where that careful judge would run. If the sentence it read was one of the hard ones, it might contain the very thing the guard existed to hide. Whether it could be allowed to leave the building, or whether the judge would have to live inside it, was a question for another day. It was nearly a question for Lakshmi.

## What to carry forward

A reasoning model writes out its working before it answers, which makes it better at problems that have to be worked out and no better at looking things up, sorting or reshaping what it has been given, and you pay for the working in money and in time on every request. It does not create evidence, so given the wrong document it reasons carefully from the wrong document. Waiting is a product problem. Streaming shows an answer early, saying what is happening makes a wait make sense, and a long job can be moved to the background. But a decision cannot be streamed, because half of a decision is a hazard. The sensible design is to use the expensive machine only on the cases that need it, and not while a customer is waiting.

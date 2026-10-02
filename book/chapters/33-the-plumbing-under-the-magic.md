---
title: The Plumbing Under the Magic
summary: A two-hour outage in which nothing raised an error persuades a product manager that she needs to understand, at the level of a plumber's diagram, the ordinary software around the one unpredictable part.
course: ch8f
terms:
  - Python | the programming language most AI work is written in; for a product manager, a way of saying exactly what an experiment does | 
  - HTTP | the set of rules programs use to send requests and replies across the internet, with a number on each reply that says whether it worked | 
  - status code | the number on an HTTP reply: 200 means it worked, a 4xx number means the request was wrong, and a 5xx number means the server failed | status codes
  - environment variable | a value kept outside the code, in the place a program runs, which is where passwords and API keys belong | environment variables
  - Git | a tool that saves every version of your work, so you can see what changed and go back to any earlier version | 
  - repository | the folder, kept in Git, that holds all of a project's work and its history | repositories
  - experiment harness | a reusable runner that records, for every experiment, the inputs, outputs, settings, timings and errors, so a result can be reproduced and compared | harness
  - data contract | the unspoken assumptions one part of a system makes about the data it receives, such as that a field will be present and a list will not be empty | 
---

On the second Thursday of September, for two hours, the guard hid every order number in Pune, and nobody noticed until a customer wrote in to ask what had happened to hers.

It was a small incident. Farah's agents had been puzzled, then irritated, then inventive: for about forty minutes they had been asking customers to read their order numbers aloud over the phone. The dashboard stayed green. Imran, when he was told, said very little and began, with a pen, to draw.

"Nothing raised an error," he said, when the diagram was done. "That's why it took two hours."

## What happened

The thing was ordinary, and that was the lesson. The guard looked up each twelve-digit number in the order system, as it had been taught to do. The order system had been updated that morning by another team. In the old version, its reply called the field *order_id*. In the new one it was *orderId*, with a capital I.

The guard asked for *order_id* and found nothing there. It did not stop. It did not shout. It had been written, reasonably, to treat an empty answer as "no such order", and so it concluded, politely and about four hundred times, that no order existed with that number, and hid it as a suspected identity number.

An AI application depends on a great many unspoken assumptions about the data it receives. This field will be there. It will be a number. This list will not be empty. These are *data contracts*, and in production every one of them is eventually broken. A well-built system notices when one is broken and stops. A badly built one carries on, and the answer it gives is built on missing data. Many real incidents in this field look exactly like this: no error, a green dashboard, and a result that is quietly wrong.

"This is not a machine-learning problem," said Imran. "The machine was fine. This is an ordinary software failure that happens to sit next to a machine. And you can't ask the right question about it unless you can read the diagram."

## The diagram

Anaya had been dreading this for months. She had been quietly proud of her ability to talk to engineers, and she knew exactly where the edge of it was. She could say "the API" and "the logs" without knowing what they were. She asked Imran, with some trepidation, whether he would give her an afternoon.

He gave her two hours, a whiteboard, and a metaphor.

"You order food in an app," he said. "You tap. A message goes to the restaurant. A reply comes back with a price. Your screen changes. It looks mysterious until you see the messages. Everything in this afternoon is one of those messages, or a place where one gets lost."

*Python* came first, and he reassured her at once that she would not become a programmer. It is the language most of this work is written in, and for her the point was only that it is a way of saying exactly what an experiment does. A small function. A dictionary, which keeps a few labelled values together: *name, address, kind*. A loop, which does the same thing to each of a list of things. "Python is a lab notebook with grammar," he said. "If you can read what it says, you can see whether the experiment is what you think it is."

*HTTP* is the set of rules by which programs talk across the internet. The part that mattered was a number on every reply, called a *status code*. A 200 means it worked. Anything beginning with 4 means the request was wrong: 401, you are not who you say you are; 404, there is nothing here; 429, you are asking too fast, slow down. Anything beginning with 5 means the other side failed. "The API failed" is not an explanation, he said. It is a place to start asking. Was it a bad request, an absent dependency, or a failure on their side? Each has a different cure, and only some are worth trying again.

The next piece was one she already knew, in the form of a cautionary tale. An *environment variable* is a value kept outside the code, in the place a program runs. It is where passwords and API keys belong, never in the code and never in a shared folder. A prototype that leaks a key is not a credible piece of engineering.

*Git* was the one she had been looking forward to, and it did not disappoint. It is a tool that saves every version of your work, with a note about what changed and why, so that you can see the difference between yesterday's and today's and go back to either. The folder that holds all of it is a *repository*. She had called her own work a notebook of record; this was the same idea made reliable. "A time machine with a memory," he said. "When something breaks, the first question is what changed. In Git you can answer it."

She learned to read an error. This took ten minutes and might have been the most useful ten of the afternoon. When a program fails loudly, it prints a long block called a trace, and the instinct is to read it from the top, which is where the least useful part is. The real cause is almost always at the bottom.

```
Traceback (most recent call last):
  File "guard.py", line 41, in clean_message
    order = lookup["order_id"]
KeyError: 'order_id'
```

"Last line first," said Imran. "*KeyError, order_id.* The program asked for a field that wasn't there. Line forty-one. That's your whole story."

"But this one wasn't loud."

"No. This was the polite version. The real one asked with a method that returns *nothing* when the field is missing, and carried on. That is what we wrote." He rubbed the back of his neck. "The loud version is a gift. It stops you."

## A test that fails on purpose

He taught her the last piece with a game. Write a small test: give the function an order reply that has *order_id* in it, and check that it is recognised. It passes. Now give it a reply with *orderId*, and ask what should happen.

"What should happen?"

She thought about it. "It should stop. It should say something's wrong with the order system, not with the number."

"Then write that as a test. Make it fail first, so you know it can." He wrote it, and ran it, and it failed with a satisfying red line. He fixed the code to check for the missing field and refuse to carry on, and ran it again. Green. "A test that has never failed has never been shown to check anything."

And he added, as a coda, the thing that made it matter. Every record of every message the guard had handled would now carry a request number, a time, the version of the code and the status. "Then the next time the dashboard is green and a customer writes in, we don't draw diagrams. We search."

## The runner that remembers

The last thing he showed her was something he had been building for two months and had never shown anyone.

It was an *experiment harness*: a reusable runner that records, for every experiment, the inputs, the outputs, the settings, the timings and the errors, all in a standard form. The point was to cross a particular bridge. Between *I tried it* and *I measured it* there is a gap, and most of the gap is bookkeeping. Run a prompt twice and save both runs. Change one thing. Look at the logs and see at once what changed.

"If I can't reproduce yesterday's result, I haven't got a result," he said. "I've got an anecdote."

Anaya looked at the folder on his screen. It had a README. It had a list of what was needed to run it. It had a log of every experiment since May. She remembered the entry in her notebook of the first night, *nothing counts until someone else could check it*, and she understood that this was what she had meant, and that she had not known how to build it.

## What enough looks like

At five o'clock he asked her what she had learned, and she did not give him a list of terms. She wrote, on the back of the diagram, the set of things she would now be able to do.

*I can read a request, a reply and a status code. I know where a key belongs. I can ask what changed, and find out. I read an error from the bottom. I know a test should fail once. And when someone says "the API failed", I can ask which way.*

It was a short list. It was not nothing. It meant that when an engineer showed her a diagram, she would recognise the parts.

At the top of the page she added the sentence he had said at the start, because it was the one she wanted to keep. An AI system is a software system with one unpredictable part. Everything that goes wrong in ordinary software can still go wrong. And one failure more, the quietest, produces no error.

## What to carry forward

An AI system is ordinary software with one unpredictable part, so everything that can break ordinary software can break it, and the engineering risk lies at least as much in interfaces, errors, secrets and retries as in the model. Programs talk through requests and replies, and the status code on a reply says whether the request was wrong or the other side failed. Keys belong outside the code, work belongs in a repository that records every change, and an error is read from the bottom. Every part of a system makes assumptions about the data it receives, and a good system stops when one is broken instead of carrying on with nothing. A harness that records every experiment turns "I tried it" into "I measured it", because a result you cannot reproduce is only an anecdote.

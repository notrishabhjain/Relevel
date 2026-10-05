---
title: The Plumbing Under the Magic
summary: A two-hour outage in which nothing raised an error persuades a product manager that she must understand, at the level of a plumber's diagram, the ordinary software around the one unpredictable part. The chapter covers data contracts, Python, HTTP and status codes, environment variables, Git and experiment runners.
course: ch8f
goals:
  - explain a data contract and why a silent break is the most dangerous kind
  - read a request and a reply, and tell from the status code which side failed
  - say where secrets belong, what a repository records, and how to read an error from the bottom
  - explain why a test should be seen to fail once, and what an experiment runner makes possible
terms:
  - Python | the programming language most AI work is written in; for a product manager, a way of saying exactly what an experiment does | 
  - HTTP | the set of rules programs use to send requests and replies across the internet, with a number on each reply that says whether it worked | 
  - status code | the number on an HTTP reply: 200 means it worked, a 4xx number means the request was wrong, and a 5xx number means the server failed | status codes
  - environment variable | a value kept outside the code, in the place a program runs, which is where passwords and API keys belong | environment variables
  - Git | a tool that saves every version of your work, so you can see what changed and go back to any earlier version | 
  - repository | the folder, kept in Git, that holds all of a project's work and its history | repositories
  - experiment runner | a reusable program that records, for every experiment, the inputs, outputs, settings, timings and errors, so a result can be reproduced and compared | 
  - data contract | the unspoken assumptions one part of a system makes about the data it receives, such as that a field will be present and a list will not be empty | 
---

On the second Thursday of September the guard hid every order number in Pune for two hours, and nobody noticed until a customer wrote in to ask what had happened to hers. Farah Sheikh's agents had been puzzled, then irritated, then inventive: for about forty minutes they asked customers to read their order numbers aloud over the telephone. The dashboard stayed green. Imran Qureshi, when told, said very little and began to draw with a pen.

"Nothing raised an error," he said when the diagram was done. "That is why it took two hours." This chapter explains what happened, and then does what Imran did next, which was to teach Anaya to read a diagram.

## The case: the field that changed its name

The cause was ordinary, and that was the lesson. The guard looked up each twelve-digit number in the order system, as it had been taught to do. Another team had updated the order system that morning. In the old version its reply called the field "order_id". In the new one it was "orderId", with a capital I.

The guard asked for "order_id" and found nothing. It did not stop and it did not shout. It had been written, reasonably, to treat an empty answer as "no such order", so it concluded, politely and about four hundred times, that no order existed with that number, and hid each as a suspected identity number.

::: def Data contract
The unspoken assumptions that one part of a system makes about the data it receives: that a field will be present, that it will be a number, that a list will not be empty. Every data contract is eventually broken in production. A well-built system notices when one is broken and stops. A badly built one carries on, and its answer rests on missing data.
:::

Many real incidents in this field look exactly like this one: no error, a green dashboard, and a result that is quietly wrong. Imran remarked that it was not a machine-learning problem. The machine had been fine. It was an ordinary software failure that happened to sit next to a machine, and the right question could not be asked without being able to read the diagram.

## The diagram

Anaya had dreaded this for months. She was proud of her ability to talk to engineers and knew exactly where its edge was. She could say "the API" and "the logs" without knowing what they were. Imran gave her two hours, a whiteboard and a comparison. When one orders food in an app, a message goes to the restaurant and a reply comes back with a price. It looks mysterious until the messages are visible. Everything in the afternoon was one of those messages, or a place where one gets lost.

Table: The parts of the plumbing, and what a product manager needs from each
| Part | What it is | What matters |
| --- | --- | --- |
| *Python* | The language most AI work is written in | It is a way of saying exactly what an experiment does. A function, a dictionary that keeps labelled values together, a loop that repeats an action. If one can read what it says, one can see whether the experiment is what one thinks |
| *HTTP* | The rules by which programs talk across the internet | Every reply carries a number that says whether it worked |
| *Environment variable* | A value kept outside the code, in the place a program runs | It is where passwords and API keys belong, never in the code and never in a shared folder |
| *Git* | A tool that saves every version of the work, with a note about what changed and why | One can see the difference between yesterday's and today's and go back to either |
| *Repository* | The folder, kept in Git, that holds a project's work and its history | When something breaks, the first question is what changed, and a repository can answer it |

Python is not something Anaya would need to write. The *status code* on an HTTP reply is something she would need to read.

Table: Status codes
| Code | Meaning |
| --- | --- |
| 200 | It worked |
| 401 | The request is from someone who is not who they say they are |
| 404 | There is nothing here |
| 429 | The caller is asking too fast, and should slow down |
| Any 4xx | The request was wrong |
| Any 5xx | The other side failed |

"The API failed" is not an explanation, Imran said. It is a place to start asking. Was it a bad request, an absent dependency or a failure on their side? Each has a different cure, and only some are worth trying again.

## How to read an error

She then learned to read an error, which took ten minutes and may have been the most useful ten minutes of the afternoon. When a program fails loudly it prints a long block called a trace, and the instinct is to read it from the top, where the least useful part is. The real cause is almost always at the bottom.

```
Traceback (most recent call last):
  File "guard.py", line 41, in clean_message
    order = lookup["order_id"]
KeyError: 'order_id'
```

"Last line first," said Imran. "KeyError, order_id. The program asked for a field that was not there. Line forty-one. That is your whole story." Anaya said that this failure had not been loud. It had not, he said. It was the polite version. The real code had asked with a method that returns nothing when the field is missing, and carried on, which is what the team had written. A loud failure is a gift, because it stops you.

## A test that fails on purpose

Imran taught her the last piece as a game. Write a small test: give the function an order reply that has "order_id" in it and check that it is recognised. It passes. Now give it a reply with "orderId" and ask what should happen. Anaya thought that it should stop and say that something was wrong with the order system and not with the number. "Then write that as a test," said Imran. "Make it fail first, so you know it can."

He wrote it and ran it, and it failed with a satisfying red line. He fixed the code so that it checked for the missing field and refused to carry on, and ran it again. It passed.

::: key A test that has never failed has never been shown to check anything
Every record of every message the guard handled would also now carry a request number, a time, the version of the code and the status. The next time the dashboard is green and a customer writes in, the team will search and not draw diagrams.
:::

## The runner that remembers

The last item was something Imran had built over two months and never shown anyone. It was an *experiment runner*, a reusable program that records for every experiment the inputs, the outputs, the settings, the timings and the errors, all in a standard form. Its purpose was to cross a particular bridge. Between "I tried it" and "I measured it" there is a gap, and most of the gap is bookkeeping: run a prompt twice and save both runs, change one thing, and see at once from the logs what changed.

"If I can't reproduce yesterday's result," he said, "I haven't got a result. I've got an anecdote." Anaya looked at the folder on his screen. It had a README, a list of what was needed to run it, and a log of every experiment since May. She remembered the entry in her notebook from the first night, that nothing counts until someone else could check it, and she understood that this was what she had meant, and that she had not known how to build it.

## What enough looks like

At five o'clock Imran asked what she had learned, and she did not give him a list of terms. On the back of the diagram she wrote what she could now do: read a request, a reply and a status code; know where a key belongs; ask what changed and find out; read an error from the bottom; know that a test should fail once; and, when someone says "the API failed", ask in which way.

It was a short list and not nothing. It meant that when an engineer showed her a diagram, she would recognise the parts. At the top of the page she added the sentence Imran had said at the start, because she wanted to keep it: an AI system is a software system with one unpredictable part. Everything that goes wrong in ordinary software can still go wrong, and one failure more, the quietest, produces no error.

## Summary

An AI system is ordinary software with one unpredictable part, so everything that can break ordinary software can break it. The engineering risk lies at least as much in interfaces, errors, secrets and retries as in the model.

- Programs talk through requests and replies. The status code on a reply says whether the request was wrong or the other side failed.
- Keys belong outside the code. Work belongs in a repository that records every change. An error is read from the bottom.
- Every part of a system makes assumptions about the data it receives, a data contract. A good system stops when one is broken instead of carrying on with nothing.
- A runner that records every experiment turns "I tried it" into "I measured it", because a result that cannot be reproduced is only an anecdote.

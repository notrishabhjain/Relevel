---
title: The Plumbing Under the Magic
summary: For two hours the guard got something wrong, and no error showed anywhere. So Anaya learns to read the plain software around the one unpredictable part, like a plumber's diagram of pipes. You meet data contracts, Python, HTTP and status codes, environment variables, Git and experiment runners.
course: ch8f
goals:
  - explain a data contract, and why a silent break is the most dangerous kind
  - read a request and a reply, and tell from the status code which side failed
  - say where secrets belong, what a repository records, and how to read an error from the bottom
  - explain why a test should be seen to fail once, and what an experiment runner makes possible
terms:
  - HTTP | the rules for sending a request and getting a reply, like the rules of posting a letter; each reply has a number that says if it worked | 
  - status code | the number on an HTTP reply, like a marks slip: 200 means it worked, 4xx means your request was wrong, 5xx means the other side failed | status codes
  - environment variable | a secret kept in a locked drawer outside the code, in the place the program runs; passwords and API keys belong there | environment variables
  - Git | a tool that saves every version of your work, like a photo album of changes, so you can go back to any earlier one | 
  - experiment runner | a reusable program that writes down every experiment, like a lab notebook: inputs, outputs, settings, timings and errors; it lets you repeat and compare results | 
  - data contract | the quiet promise between two parts of a system about the data passed along, like "the form will always have a name box"; for example, a field will be there and a list will not be empty | 
---

On the second Thursday of September, the guard hid every order number in Pune for two hours. Nobody noticed until a customer wrote in. She asked what had happened to her order number.

Farah Sheikh's agents had been puzzled, then irritated, then inventive. For about forty minutes they asked customers to read their order numbers aloud on the phone. The dashboard (one screen of numbers) stayed green.

Imran Qureshi heard the story and said very little. He picked up a pen and began to draw. "Nothing raised an error," he said when the diagram was done. "That is why it took two hours."

This chapter explains what happened. Then it does what Imran did next. He taught Anaya to read a diagram.

## The case: the field that changed its name

The cause was ordinary, and that was the lesson. The guard looked up each twelve-digit number in the order system, as it was taught to do. Another team had updated the order system that morning. In the old version, the reply called the field "order_id". In the new one it was "orderId", with a capital I.

The guard asked for "order_id" and found nothing. It did not stop. It did not shout. It was written, quite reasonably, to treat an empty answer as "no such order". It is like a clerk who finds an empty shelf and says "we never sold that". So the guard decided, politely and about four hundred times, that no order had that number. Then it hid each one as a suspected identity number.

::: def Data contract
It is a quiet promise between two parts of a system, like "this form will always have a name box". One part assumes a field will be there, that it will be a number, that a list will not be empty. Every data contract gets broken in production (the live system) one day. A well-built system notices and stops. A badly built one carries on, and its answer rests on missing data.
:::

Many real incidents look just like this one. There is no error. The dashboard is green. The result is quietly wrong.

Imran said this was not a machine-learning problem. The model was fine. It was an ordinary software failure that sat next to a model. And you cannot ask the right question about it unless you can read the diagram.

## The diagram

Anaya had dreaded this for months. She was proud of how well she talked to engineers. She also knew exactly where that skill ended. She could say "the API" (the doorway to a service) and "the logs" (the written record of what happened). She did not know what they really were.

Imran gave her two hours, a whiteboard and a comparison. Think of ordering food in an app. A message goes to the restaurant. A reply comes back with a price. It looks like magic until you can see the messages. Everything that afternoon was one of those messages, or a place where one gets lost.

Table: The parts of the plumbing, and what a product manager needs from each
| Part | What it is | What matters |
| --- | --- | --- |
| *Python* | The language most AI work is written in | It says exactly what an experiment does. A function is a recipe with a name. A dictionary is a phone book that keeps labelled values together. A loop repeats a step. If you can read what it says, you can see if the experiment is what you think |
| *HTTP* | The rules by which programs talk across the internet | Every reply carries a number that says if it worked |
| *Environment variable* | A value kept outside the code, in the place a program runs | It is where passwords and API keys belong. Never in the code and never in a shared folder |
| *Git* | A tool that saves every version of the work, with a note on what changed and why | You can see the difference between yesterday and today, and go back to either |
| *Repository* | The folder, kept in Git, that holds a project's work and its history | When something breaks, the first question is what changed. A repository can answer it |

Anaya would never need to write Python. But she would need to read the **status code** on an HTTP reply. Think of it as the marks on a report card. One number tells you how it went.

Table: Status codes
| Code | Meaning |
| --- | --- |
| 200 | It worked |
| 401 | The request is from someone who is not who they say they are |
| 404 | There is nothing here |
| 429 | The caller is asking too fast, and should slow down |
| Any 4xx | The request was wrong |
| Any 5xx | The other side failed |

"The API failed" is not an explanation, Imran said. It is only a place to start asking. Was it a bad request? A missing dependency (a part it needs from elsewhere)? A failure on their side? Each has a different cure. Only some are worth trying again.

## How to read an error

Next she learned to read an error. It took ten minutes. It may have been the most useful ten minutes of the afternoon.

When a program fails loudly, it prints a long block called a trace. Think of a trail of footprints. The urge is to read from the top. But the top is the least useful part. The real cause is almost always at the bottom.

```
Traceback (most recent call last):
  File "guard.py", line 41, in clean_message
    order = lookup["order_id"]
KeyError: 'order_id'
```

"Last line first," said Imran. "KeyError, order_id. The program asked for a field that was not there. Line forty-one. That is your whole story."

Anaya said this failure had not been loud. No, he said, it was the polite kind. The real code asked in a way that returns nothing when the field is missing. Then it carried on, which is what the team had written. A loud failure is a gift, because it stops you.

## A test that fails on purpose

Imran taught her the last piece as a game. First, write a small test. Give the function an order reply that has "order_id" in it. Check that it is recognised. It passes. Now give it a reply with "orderId". What should happen?

Anaya thought it should stop and say something was wrong with the order system, not with the number. "Then write that as a test," said Imran. "Make it fail first, so you know it can."

It is like pressing a fire alarm once to see that it rings. An alarm that never rang has never been shown to work.

He wrote the test and ran it. It failed with a satisfying red line. He fixed the code to check for the missing field and refuse to carry on. He ran it again. It passed.

::: key A test that has never failed has never been shown to check anything
Watch it fail once. Then fix the code and watch it pass. Only then do you know the test can tell the difference.
:::

He made one more change. Every record of every message the guard handled would now carry four things. A request number. A time. The version of the code. The status. Next time the dashboard is green and a customer writes in, the team will search the records. They will not need to draw diagrams.

## The runner that remembers

The last item was something Imran had built over two months and never shown anyone. It was an **experiment runner**. Think of a lab notebook that fills itself in. It is a reusable program. For every experiment it records the inputs, the outputs, the settings, the timings and the errors. All of it is in one standard form.

Its job was to cross a particular bridge. Between "I tried it" and "I measured it" there is a gap. Most of the gap is bookkeeping. With the runner you can run a prompt twice and save both runs. You change one thing. The logs show you at once what changed.

"If I can't reproduce yesterday's result," he said, "I haven't got a result. I've got a story."

Anaya looked at the folder on his screen. It had a README (a note on how to use it). It had a list of what was needed to run it. It had a log of every experiment since May. She remembered a line in her notebook from the first night. Nothing counts until someone else could check it. She saw that this was what she had meant. She had not known how to build it.

## What enough looks like

At five o'clock Imran asked what she had learned. She did not give him a list of terms. On the back of the diagram, she wrote what she could now do.

- Read a request, a reply and a status code.
- Know where a key belongs.
- Ask what changed, and find out.
- Read an error from the bottom.
- Know that a test should fail once.
- When someone says "the API failed", ask in which way.

It was a short list, and it was not nothing. When an engineer showed her a diagram, she would know the parts. Think of a new driver who can finally read the road signs. At the top of the page she added the sentence Imran had said at the start. She wanted to keep it.

An AI system is a software system with one unpredictable part. Everything that goes wrong in ordinary software can still go wrong. And there is one more failure, the quietest, which shows no error.

## Summary

An AI system is ordinary software with one unpredictable part. So everything that can break ordinary software can break it. The engineering risk sits at least as much in interfaces, errors, secrets and retries as in the model.

- Programs talk through requests and replies. The status code on a reply says if the request was wrong or the other side failed.
- Keys belong outside the code. Work belongs in a repository that records every change. You read an error from the bottom.
- Every part of a system makes assumptions about the data it receives. That is a data contract. A good system stops when one is broken. It does not carry on with nothing.
- A runner that records every experiment turns "I tried it" into "I measured it". A result you cannot repeat is only a story.

Next, Mr. Bhatia arrives with a bar chart. He wants to switch to a model released the week before.

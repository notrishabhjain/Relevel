---
title: Answers a Program Can Use
summary: A paragraph is fine for a person, but a program cannot read it. You see why asking nicely for JSON is not enough. A schema is like a form with fixed boxes, and it removes a whole family of errors. Even then the box can hold a wrong answer, so you design the form to leave no room to invent.
course: ch8 ch85
goals:
  - say why a model must fill fields, not write prose, when a program reads the answer
  - work out what a small failure rate means for a real product with many users
  - say what a schema and structured output are, and what a schema promises and does not
  - design a form with fixed choices, a way to say "not stated", and a quotation for every value, then add validation underneath
terms:
  - structured output | a form with fixed boxes. The model fills named boxes of a known type, so a program can read them, instead of writing a paragraph for a person | structured outputs
  - schema | the blank form itself: it lists every box, what goes in it, and which boxes must be filled. The company running the model enforces it while the model writes | schemas
  - validation | the second check after the answer arrives, like a clerk checking your filled form. Is every box filled? Does each quoted phrase really appear in the message? | validate, validated
---

For three weeks, every answer the team looked at was a paragraph. That was fine, because a person was reading it. Then Imran Qureshi connected the finder to the rule-keeper. The rule-keeper is a few hundred lines of ordinary code. It failed on the very first reply.

The reply read: "I found the following personal details in this message. The customer’s name appears to be Amit Sharma. There is also a PAN, which looks like ABCDE1234F. I would also consider the bank name, HDFC, to be potentially sensitive." A PAN is a person's tax ID number.

Imran said it was a lovely paragraph. But his code needed to know three things. Is there a PAN? Where does it start and end? What should be done with it? The code could not make sense of "appears to be". In this chapter you see what a program needs from a model. You see a first fix that removes a problem instead of only shrinking it. Then you see how even that fix can leave the answer wrong.

## The case: a paragraph a program cannot read

Start with something you already know. When you fill a form at a bank, every box has a name. You cannot leave the important boxes blank. A program wants the same from a model.

Say the model's output goes to another system, such as one that decides what to hide. That program needs fields. A field is one named box in a form. It needs a kind, a value, a position and a decision. Each field has a name and a type, and each must always be there.

A paragraph, however well written, has none of these boxes. A person can find the PAN in it. A program cannot.

## Asking politely

The obvious first step is to ask. Imran added a line to the instruction. It said to reply as JSON, with the fields kind, value and action. JSON is a form written as labels and values inside curly brackets. The trick worked, and it kept working. That is the danger. For a day nobody thought about it.

Then he ran a thousand test messages through. He counted how many replies were correctly formed. Nine hundred and sixty-eight were. Thirty-two were not.

Table: The thirty-two failures
| Count | What went wrong |
| --- | --- |
| 14 | The reply began with an apology before the curly brace: "Certainly! Here is the JSON." |
| 9 | The reply was wrapped in formatting symbols that the code did not expect |
| 6 | There was a stray comma at the end of a list, which a human eye skips and a program rejects |
| 3 | The reply was perfectly formed, but the "kind" field held a value that the message did not contain |

Anaya said that 96.8 percent sounded fine. Imran wrote the next sum on a napkin. Say ten thousand messages arrive in a day. At ninety-seven percent, that is three hundred failures a day. They are silent. They go into a field that another system trusts.

A feature that fails a few times in a hundred fails all day long, if nobody watches those hundred. It is like a bus that is late three times in a hundred. Ride it ten thousand times and you wait three hundred times.

## Constrain instead of asking

The reliable fix is to stop asking and start constraining. Constrain means to leave no other choice. The providers (the companies that run the models) let the developer give a *schema*. A schema is the blank form itself. It names every box. It says what type each box holds. It says which boxes must be filled.

While the model writes, the provider’s own software stops it from writing anything that does not fit. An apology cannot appear before the brace. A stray comma cannot appear. An answer made this way is called *structured output*. It is not "very probably well formed". It cannot be anything else.

::: key A fix that removes the problem
Anaya noticed that this was the first fix that removed a problem. The earlier fixes only made it rarer. A schema takes a whole family of errors and deletes them. An instruction in the system prompt (the standing rules on the shop wall) only makes them fewer. Imran said that in this work you rarely get to say "that cannot happen".
:::

## Right shape, wrong thing

Anaya enjoyed the certainty for about a day. Then Imran ran another thousand messages. He showed her the three that had survived.

A customer had written, "mera naam Suresh hai, loan ka status batao". The reply had a perfect shape. It was a list with one entry, holding a kind, a value and an action. But the value in the "address" field was "Pune".

There is no address in that message. The trouble was that the field was marked required. So the model was never allowed to leave it empty. In effect, the team had told it to make something up whenever the customer said nothing.

::: watch A schema guarantees shape, not truth
A schema guarantees the format. It says nothing about the content. A form can make sure a box is filled, but it cannot make sure the answer is true. There will always be a number in the amount field. It may not be the right number. The document may not have had a number at all. A well-formed lie is the most dangerous kind. Every check that looks only at the shape lets it through.
:::

## A form with no room to lie

The work that followed was the kind Anaya liked best. It needed care, not cleverness. The question was no longer how to instruct the model better. It was how to build a form where the failure had nowhere to stand. Imran gave her three techniques.

Table: Three techniques for a form that cannot invent
| Technique | What it does | Example in the guard |
| --- | --- | --- |
| Fixed choices in place of free text | A free-text field drifts and produces entries like "Approved (pending)", which make the code fall over | The kind must be one of: PAN, Aadhaar, mobile, email, bank account, name, address, other, unsure. "Aadhaar (probably)" is not possible |
| Permission to say "not stated" | A required field forces an invented value whenever the message is silent | The address may be empty, and a separate yes-or-no field records whether an address was there, so an absence is a fact on the page |
| A quotation, every time | A person can check the exact words a value came from in a second, and a program can check them in one line | For each detail, the model copies the phrase it was based on, and a single line of code asks whether that phrase appears in the message |

Think about what the third technique does. A model that makes up a detail must now make up a quotation too. A made-up quotation is not in the message, so the check catches it. It is like a teacher who asks, "Show me the page where you read that." Here is what the new form looked like.

```
{
  "findings": [
    { "kind": "name",
      "quote": "Suresh",
      "action": "hide" }
  ],
  "address_present": false
}
```

It was shorter than Anaya had feared. And there was no room in it for "Pune".

## Checking what arrives

Imran still did not trust it completely. Not every provider’s model can be held to a schema while it writes. So for those models, he added *validation*. He kept it for the other models too, as a second line of defence. Validation means checking an answer against rules after it arrives. Think of a clerk who checks your filled form before stamping it.

The rules are plain questions. Is every required field there? Is the kind one of the allowed ones? Does every quotation appear in the message? If anything fails, the system asks again once, and says what the error was. If that fails too, it hands the message to a person. Imran called this a net under the wire, like the net under a circus rope walker. He said he hoped it would never catch anything.

Anaya added a column to the answer key headed "what a quote should be". She added a new row too. It was for a message with an address-shaped phrase inside quotation marks. Say a customer writes that the building is near "Sector 15", in a sentence about something else. A tool that found it would have to decide what to do. A month earlier, this edge case (a rare, odd one) would never have occurred to her.

Then she named what the design still could not catch. A quote may really be in the message, in the right shape, and still not be personal at all. An order number is one example. The form cannot know that. Imran said that this is what the answer key is for.

::: key What you can now say
Three sentences about finding and structure. Put your own numbers where N and M stand.
- I measured retrieval on my own questions: N of ten found the right passage, and I can say what the misses had in common.
- I state recall and precision for my tool, and I say which one I favoured and why.
- My tool’s output is fields a program can check, and validation caught N bad outputs out of M.
:::

## Summary

When a program reads a model’s output, the output must be fields, not a paragraph. Asking nicely for JSON works about ninety-seven times in a hundred. With many users, that means hundreds of silent failures a day.

- A schema is enforced by the provider while the model writes. Badly formed output becomes impossible. So it removes a problem instead of reducing it.
- A schema guarantees the shape of an answer, not its truth. A required field forces the model to make something up whenever the input is silent.
- Good forms use fixed choices. They allow "not stated". They ask for the exact words each value came from.
- Validation after the fact is the net underneath. Check the fields, the allowed values and the quotations. Retry once. Then hand over to a person.

Next, a twelve-digit number might be an order or an Aadhaar number. The team goes looking for a way to let the model ask for a lookup.

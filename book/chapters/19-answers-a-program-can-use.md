---
title: Answers a Program Can Use
summary: A paragraph is fine for a person and useless to a program. This chapter shows why asking politely for JSON is not enough, how a schema removes a whole family of errors, why the right shape can still hold the wrong content, and how to design a form that leaves no room to invent.
course: ch8 ch85
goals:
  - explain why a model's output must be fields, not prose, when a program is going to read it
  - work out what a small failure rate means at the scale of a real product
  - say what a schema and structured output are, and what a schema guarantees and what it does not
  - design a form with fixed choices, a way to say "not stated" and a quotation for every value, and add validation underneath
terms:
  - structured output | an answer given in named fields of a known type, so that a program can read it, instead of a paragraph that a person reads | structured outputs
  - schema | a description of exactly what shape an answer must have, which the provider enforces while the model is writing | schemas
  - validation | checking an answer against rules after it arrives, for example whether a required field is present, or whether a quoted phrase really appears in the message | validate, validated
---

For three weeks, every answer the team had looked at was a paragraph. That was fine, because a person was reading it. Then Imran Qureshi connected the finder to the rule-keeper, which was a few hundred lines of ordinary code, and the rule-keeper failed on the very first reply.

The reply read: "I found the following personal details in this message. The customer’s name appears to be Amit Sharma. There is also a PAN, which looks like ABCDE1234F. I would also consider the bank name, HDFC, to be potentially sensitive."

Imran said it was a lovely paragraph. But his code needed to know whether there was a PAN, where it started and ended, and what to do with it. It could not make sense of "appears to be". In this chapter you’ll see what a program needs from a model, the first fix that removes a problem instead of just shrinking it, and how even that kind of fix can still leave the answer wrong.

## The case: a paragraph a program cannot read

Start with something you already know. When you fill in a form at a bank, every box has a name, and you can’t leave the important ones blank. That is what a program wants from a model. When the model’s output feeds another system, such as one that decides what to hide, the program needs fields: a kind, a value, a position and a decision. Each field has a name and a type, and each must always be there.

A paragraph, however well written, has none of these. A person can find the PAN in it. A program can’t.

## Asking politely

The obvious first step is to ask. Imran added a line to the instruction: reply as JSON, with the fields kind, value and action. It worked, and it kept working, which is exactly the danger. For a day nobody thought about it.

Then he ran a thousand test messages through and counted how many replies were correctly formed. Nine hundred and sixty-eight were. Thirty-two were not.

Table: The thirty-two failures
| Count | What went wrong |
| --- | --- |
| 14 | The reply began with an apology before the curly brace: "Certainly! Here is the JSON." |
| 9 | The reply was wrapped in formatting symbols that the code did not expect |
| 6 | There was a stray comma at the end of a list, which a human eye skips and a program rejects |
| 3 | The reply was perfectly formed, but the "kind" field held a value that the message did not contain |

Anaya said that 96.8 percent sounded fine. Imran wrote the next sum on a napkin. Suppose ten thousand messages arrive in a day. At ninety-seven percent, that is three hundred failures a day. They are silent, and they go into a field that another system trusts.

A feature that fails a few times in a hundred, with nobody watching the hundred, fails all day long.

## Constrain instead of asking

The reliable fix is to stop asking and start constraining. Providers let the developer supply a *schema*. A schema is a description of exactly what shape the answer must have. It names every field, says what type each one holds, and says which are required.

While the model writes, the provider’s own software stops it from producing anything that doesn’t fit. An apology can’t appear before the brace. A stray comma can’t appear. An answer produced this way is called *structured output*. It isn’t "very probably well formed". It simply can’t be anything else.

::: key A fix that removes the problem
Anaya noticed that this was the first fix that removed a problem. The earlier ones had only made it rarer. A schema takes a whole family of errors and deletes them, while an instruction in the system prompt only makes them fewer. Imran said that in this work you rarely get to say "that cannot happen".
:::

## Right shape, wrong thing

Anaya enjoyed the certainty for about a day. Then Imran ran another thousand messages and showed her the three that had survived.

A customer had written, "mera naam Suresh hai, loan ka status batao". The reply had a perfect shape: a list with one entry, holding a kind, a value and an action. But the value in the "address" field was "Pune".

There is no address in that message. The trouble was that the field was marked required, so the model was never allowed to leave it empty. In effect, the team had told it to make something up whenever the customer said nothing.

::: watch A schema guarantees shape, not truth
A schema guarantees the format, and it says nothing about the content. There will always be a number in the amount field. It may not be the right number, and the document may not have had a number at all. A well-formed lie is the most dangerous kind, because every check that looks only at the shape lets it through.
:::

## A form with no room to lie

The work that followed was the kind Anaya liked best, because it needed care and not cleverness. The question was no longer how to instruct the model better. It was how to build a form in which the failure had nowhere to stand. Imran gave her three techniques.

Table: Three techniques for a form that cannot invent
| Technique | What it does | Example in the guard |
| --- | --- | --- |
| Fixed choices in place of free text | A free-text field drifts and produces entries like "Approved (pending)", which make the code fall over | The kind must be one of: PAN, Aadhaar, mobile, email, bank account, name, address, other, unsure. "Aadhaar (probably)" is not possible |
| Permission to say "not stated" | A required field forces an invented value whenever the message is silent | The address may be empty, and a separate yes-or-no field records whether an address was there, so an absence is a fact on the page |
| A quotation, every time | A person can check the exact words a value came from in a second, and a program can check them in one line | For each detail, the model copies the phrase it was based on, and a single line of code asks whether that phrase appears in the message |

Think about what the third technique does. A model that invents a detail now has to invent a quotation as well. An invented quotation doesn’t appear in the message, so the check catches it. Here is what the new form looked like.

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

Imran still didn’t trust it completely. Not every provider’s model can be held to a schema while it writes. So for those models, and as a second line of defence for the rest, he added *validation*. Validation means checking an answer against rules after it arrives.

The rules are plain questions. Is every required field present? Is the kind one of the permitted ones? Does every quotation appear in the message? If anything fails, the system asks again once, with the error stated. If that fails too, it hands the message to a person. Imran called this a net under the wire. He said he hoped it would never catch anything.

Anaya added a column to the answer key headed "what a quote should be". She also added a new row, for a message that had an address-shaped phrase inside quotation marks. Say a customer writes that the building is near "Sector 15", in a sentence about something else. A tool that found it would have to decide what to do. A month earlier, this edge case would never have occurred to her.

Then she named what the design still could not catch: a quote that really is in the message, in the right shape, but is not personal at all, such as an order number. The form can’t know that. Imran said that this is what the answer key is for.

## Summary

When a program reads a model’s output, the output must be fields and not a paragraph. Asking politely for JSON works about ninety-seven times in a hundred. At scale, that means hundreds of silent failures a day.

- A schema is enforced by the provider while the model writes. It makes badly formed output impossible, so it removes a problem instead of reducing it.
- A schema guarantees the shape of an answer, not its truth. A required field forces the model to invent something whenever the input is silent.
- Good forms use fixed choices, allow "not stated", and ask for the exact words each value came from.
- Validation after the fact is the net underneath. Check the fields, the permitted values and the quotations, retry once, and then hand over to a person.

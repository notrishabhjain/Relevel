---
title: Answers a Program Can Use
summary: A paragraph suits a person and is useless to a program. The chapter covers why asking politely for JSON is not enough, how a schema removes a whole family of errors, why the right shape can still hold the wrong content, and how to design a form with no room to invent.
course: ch8 ch85
goals:
  - explain why the output of a model that feeds a program must be fields, not prose
  - calculate what a small failure rate means at the scale of a real product
  - define a schema and structured output, and say what a schema guarantees and what it does not
  - design a form with fixed choices, a way to say "not stated" and a quotation for every value, and add validation underneath
terms:
  - structured output | an answer in named, typed fields that a program can read, instead of a paragraph that a person reads | structured outputs
  - schema | a formal description of exactly what shape an answer must have, which the provider enforces while the model is writing | schemas
  - validation | checking an answer against rules after it arrives, for example whether a required field is present or a quoted phrase really appears in the message | validate, validated
---

For three weeks every answer the team had examined was a paragraph, and that had been acceptable because the reader was a person. Then Imran Qureshi connected the finder to the rule-keeper, a few hundred lines of ordinary code, and the rule-keeper failed on the first reply. The reply read: "I found the following personal details in this message. The customer's name appears to be Amit Sharma. There is also a PAN, which looks like ABCDE1234F. I would also consider the bank name, HDFC, to be potentially sensitive."

Imran said it was a lovely paragraph, and that his code needed to know whether there was a PAN, where it started and ended and what to do with it. It could not read "appears to be". This chapter describes what a program needs from a model, the first fix that removes a problem instead of reducing it, and the way that a fix of that kind can still leave the answer wrong.

## The case: a paragraph a program cannot read

When the output of a model feeds another system, such as one that decides what to hide, the program needs fields: a kind, a value, a position and a decision. Each has a name and a type, and each must always be present. A paragraph, however well written, contains none of these.

## Asking politely

The obvious first step is to ask. Imran added a line to the instruction: reply as JSON, with the fields kind, value and action. It worked, and kept working, which is the danger. For a day nobody thought about it. Then he ran a thousand test messages through and counted how many replies were correctly formed. Nine hundred and sixty-eight were, and thirty-two were not.

Table: The thirty-two failures
| Count | What went wrong |
| --- | --- |
| 14 | Began with an apology before the curly brace: "Certainly! Here is the JSON." |
| 9 | Wrapped in a block of formatting symbols that the code did not expect |
| 6 | A stray comma at the end of a list, which the human eye skips and a program rejects |
| 3 | Perfectly formed, but with a value in the "kind" field that the message did not contain |

Anaya observed that 96.8 percent sounded fine. Imran wrote the next calculation on the napkin: ten thousand messages a day at ninety-seven percent is three hundred failures a day, silent, into a field that another system trusts. A feature that fails a few times in a hundred, with nobody watching the hundred, fails all day.

## Constrain instead of asking

The reliable fix is to stop asking and to constrain. Providers allow the developer to supply a *schema*, a formal description of exactly what shape the answer must have. It names every field, states what type each holds and says which are required. While the model writes, the provider's own software prevents it from producing anything that does not fit. An apology cannot appear before the brace. A stray comma cannot appear. An answer obtained this way is called *structured output*, and it is not "very probably well formed". It is incapable of being otherwise.

::: key A fix that removes the problem
Anaya noted that this was the first fix that removed a problem. The earlier ones had only made it rarer. A schema takes a whole family of errors and deletes them, while an instruction in the system prompt only makes them fewer. Imran observed that it is rare in this work to be able to say "that cannot happen".
:::

## Right shape, wrong thing

She enjoyed the certainty for about a day. Then Imran ran another thousand messages and showed her the three that had survived. A customer had written, "mera naam Suresh hai, loan ka status batao". The reply had perfect shape: a list with one entry, a kind, a value and an action. The value in the "address" field was "Pune".

There is no address in the message. But the field was marked required, so the model was never allowed to leave it empty. The team had told it, in effect, to make something up whenever the customer said nothing.

::: watch A schema guarantees shape, not truth
A schema guarantees the format and not the content. There will always be a number in the amount field. It may not be the right number, and there may have been no number in the document at all. A well-formed lie is the most dangerous kind, because every check that looks only at the shape passes it.
:::

## A form with no room to lie

The work that followed was the kind Anaya enjoyed most, because it needed no cleverness, only care. The question was not how to instruct the model better. It was how to build a form in which the failure had nowhere to stand. Imran gave her three techniques.

Table: Three techniques for a form that cannot invent
| Technique | What it does | Example in the guard |
| --- | --- | --- |
| Fixed choices in place of free text | A free-text field drifts and produces entries like "Approved (pending)", on which the code falls over | The kind must be one of: PAN, Aadhaar, mobile, email, bank account, name, address, other, unsure. "Aadhaar (probably)" is not possible |
| Permission to say "not stated" | A required field forces an invented value whenever the message is silent | The address may be empty, and a separate yes-or-no field records whether an address was present, so absence is a fact on the page |
| A quotation, every time | The exact words that a value came from can be checked by a person in a second and by a program in a line | For each detail, the model copies the phrase from the message it is based on; a single line of code asks whether that phrase appears in the message |

A model that invents a detail now has to invent a quotation as well, and an invented quotation does not appear in the message. The check catches it. The new form looked like this.

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

It was shorter than Anaya had feared, and it had no room for "Pune" anywhere.

## Checking what arrives

Imran still did not trust it entirely. Not every provider's model can be held to a schema as it writes, and for those, and as a second line of defence for the rest, he added *validation*: after an answer arrives, check it against rules. Is every required field present? Is the kind one of the permitted ones? Does every quotation appear in the message? If anything fails, the system asks again once with the error stated, and if that fails, it hands the message to a person. He called it a net under the wire and said he hoped it would never catch anything.

Anaya added a column to the answer key headed "what a quote should be", and a new row for a message that had an address-shaped phrase inside quotation marks, such as a customer writing that the building is near "Sector 15" in a sentence about something else. A tool that found it would have to decide. It was an edge case that would not have occurred to her a month earlier.

She then named what the design still could not catch: a quote that really is in the message, in the right shape, but is not personal, such as an order number. The form cannot know that. Imran said that this is what the answer key is for.

## Summary

When a program reads a model's output, the output must be fields and not a paragraph. Asking politely for JSON works about ninety-seven times in a hundred, which at scale means hundreds of silent failures a day.

- A schema, enforced by the provider while the model writes, makes badly formed output impossible, which removes a problem and does not merely reduce it.
- A schema guarantees the shape of an answer and not its truth, and a required field forces an invention whenever the input is silent.
- Good forms use fixed choices, allow "not stated", and ask for the exact words each value came from.
- Validation after the fact is the net underneath: check the fields, the permitted values and the quotations, retry once, then hand over to a person.

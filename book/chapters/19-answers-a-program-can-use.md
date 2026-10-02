---
title: Answers a Program Can Use
summary: A paragraph is fine for a person and useless to a program. The team learns why "reply in JSON, please" is not good enough, and how to design a form so well that the model has no room to make things up.
course: ch8 ch85
terms:
  - structured output | an answer in named, typed fields that a program can read, instead of a paragraph that a person reads | structured outputs
  - schema | a formal description of exactly what shape an answer must have, which the provider enforces while the model is writing | schemas
  - validation | checking an answer against rules after it arrives, for example whether a required field is present or a quoted phrase really appears in the message | validate, validated
---

For three weeks every answer the team had looked at was a paragraph, and for three weeks that had been fine, because the reader was a person.

Then Imran tried to connect the finder to the rule-keeper, and the rule-keeper, which was a few hundred lines of ordinary code, went through the first reply like a spoon through a wall.

*I found the following personal details in this message. The customer's name appears to be Amit Sharma. There is also a PAN, which looks like ABCDE1234F. I would also consider the bank name, HDFC, to be potentially sensitive.*

"It's a lovely paragraph," said Imran. "My code needs to know: is there a PAN? Where does it start? Where does it end? What do I do with it? It can't read 'appears to be'."

This is the difference between an answer a person reads and one a program uses. When the output of a model feeds another system, for example one that decides what to hide, a program needs fields: a kind, a value, a position, a decision. Each has a name and a type, and each must always be there. A paragraph, however well written, has none of these.

## Reply in JSON, please

The obvious first move is to ask. Imran added a line to the instruction.

*Reply as JSON, with the fields kind, value and action.*

It worked, and it kept working, which is the danger. For a day nobody thought about it. Then he ran a thousand test messages through and counted how many replies were correctly formed.

968 were. Thirty-two were not.

Fourteen of the thirty-two began with an apology before the curly brace: *Certainly! Here is the JSON.* Nine were wrapped in a block of formatting symbols that the code did not expect. Six had a stray comma at the end of a list, the sort of thing a human eye skips and a program chokes on. And three were perfectly formed, every brace and quote in place, with a value in the "kind" field that the message did not contain.

"Ninety-six point eight percent," said Anaya. "That sounds fine."

"It does. Do the next sum." He wrote on the napkin. "Ten thousand messages a day, at ninety-seven percent, is three hundred failures a day. Silently. Into a field that another system trusts."

She did not need the third line. She had felt the old arithmetic land: the failure rate that sounds small and the number it is multiplied by. A feature that goes wrong a few times in a hundred, with no one watching the hundred, is a feature that goes wrong all day.

## Don't ask, constrain

The reliable fix, Imran said, was to stop asking and start constraining.

Providers let you give a *schema*: a formal description of exactly what shape the answer must have. It names every field, says what type it holds, and says which are required. While the model is writing, the provider's own software prevents it from producing anything that does not fit. An apology cannot appear before the brace. A stray comma cannot appear. The answer that comes back is not "very probably well formed". It is incapable of being otherwise. Getting the answer in this shape is called *structured output*.

The point was not lost on Anaya, who had by now a long memory of the difference.

"This is the first fix that removes the problem," she said. "The others made it rarer."

"Yes. I wanted you to notice. A schema takes a whole family of errors and deletes them. The instruction in the system prompt only ever made them fewer." He pulled a face. "It is rare, in this work, to be able to say 'that cannot happen'. Enjoy it."

## Right shape, wrong thing

She enjoyed it for about a day. Then Imran ran another thousand messages and showed her the three that had survived.

A message said, *mera naam Suresh hai, loan ka status batao.* The reply had perfect shape: a list with one entry, a kind, a value, an action. The value in the "address" field was *Pune.*

"There's no address in that message," said Anaya.

"No. But the field is marked required, so the machine was never allowed to leave it empty. We told it, in effect, to make something up whenever the customer had said nothing." He leaned back. "A schema guarantees the format and not the content. You will always get a number in the amount field. It may not be the right number, and there may have been no number in the document at all."

It took Anaya a moment to see what a deadly sentence it was. Everything she had learned about the format of an answer had been about whether it could be read. Nothing in that said it was true. A well-formed lie is the most dangerous kind, because every check that looks only at the shape passes it.

## A form with no room to lie

What followed was the part of the work she came to enjoy most, because it was a kind of design that needed no cleverness at all, only care. The question was not how to instruct the machine better. It was how to build a form in which the failure had nowhere to stand.

Imran gave her three techniques, and they rebuilt the form.

**Fixed choices in place of free text.** The "kind" of a detail could be one of a short list: PAN, Aadhaar, mobile, email, bank account, name, address, other, unsure. It could not be *Aadhaar (probably)*. A free-text field drifts: it produces *Approved (pending)*, and the code that reads it falls over. A fixed list leaves it nowhere to drift.

**Permission to say "not stated".** If a field is required, you have told the machine to invent a value whenever the message is silent. So the address could be empty. A separate yes-or-no field recorded whether an address was present at all, so that the absence was a fact on the page and not a gap to fill.

**A quotation, every time.** For each detail found, the machine had to copy the exact words from the message that it was based on. This was better than any confidence score. A person could check a quotation in a second, and so could a program: a single line of code could ask, *does this phrase actually appear in the message?* If the machine invented a detail, it now had to invent a quotation too, and an invented quotation does not appear in the message. The check catches it.

The new form, in the end, looked like this.

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

She read it a few times. It was shorter than she had feared. It had no room for *Pune* anywhere.

## Checking what arrives

Even so, Imran did not trust it entirely, and he showed why. Not every provider's machine could be held to a schema while it wrote. For those, and as a second line of defence for the rest, he added a small step called *validation*: after an answer arrives, check it against rules. Is every required field present? Is the kind one of the permitted ones? Does every quotation appear in the message? If anything fails, ask again, once, with the error stated, and if it fails again, hand the message to a person.

"It's a net under the wire," he said. "I hope it never catches anything."

Anaya added a column to the answer key, which she titled *what a quote should be*, and a new row near the bottom, which she was mildly proud of: a message that contained an address-shaped phrase inside a quotation, such as a customer writing *the building is near "Sector 15"* in a sentence about something else. A tool that found it would have to decide. It was an edge case that would not have occurred to her a month earlier.

"One more thing," she said. "What this still cannot catch."

"Say it."

"A quote that really is in the message, in the right shape, but is not personal. An order number. The form cannot know."

"No," he said. "That is what the answer key is for."

## What to carry forward

When a program reads a model's output, the output has to be fields and not a paragraph. Asking politely for JSON works about ninety-seven times in a hundred, and at scale that is hundreds of silent failures a day. A schema, which the provider enforces while the model writes, makes badly formed output impossible, which is rare in this field: it removes a problem and does not merely reduce it. But a schema guarantees the shape of an answer, not its truth, and a required field forces an invention whenever the input is silent. Good forms use fixed choices, allow "not stated", and ask for the exact words each value came from, because a quotation can be checked by a person in a second and by a program in a line. Validation after the fact is the net underneath.

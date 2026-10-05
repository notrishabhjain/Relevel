---
title: Assuming the Worst
summary: A compliance report, a Saturday spent trying to break the product with sweets as prizes, and a table in which every safeguard sits next to the test that proves it. The model will be manipulated, and everything around it is the defence. The chapter introduces attack surface, least privilege, red teaming, audit trails, risk registers and residual risk.
course: ch18s
goals:
  - explain why most of the security of an AI product lies in the system around the model
  - describe what a red team found in the guard and the remedy for each finding
  - apply least privilege to every function a model can call, and keep an audit trail separate from the work
  - build a risk register in which each control is paired with evidence, and state the residual risk
terms:
  - attack surface | all the places where an outsider can feed something into a system or reach something it can do; every tool, input and connection adds to it | 
  - least privilege | giving a system only the access it actually needs, so that if it is fooled the damage is limited | 
  - red team | people whose job is to attack a system on purpose, so its weaknesses are found by them first | red-team, red teaming
  - audit trail | a record, kept separately from the work itself, of who did what, when, under which rule and with what result, enough for someone to reconstruct an incident | audit log
  - risk register | a table listing each risk with its owner, its control, the evidence the control works, and what risk remains | 
  - residual risk | the risk that remains after the controls are in place, which should be written down and not assumed away | 
---

Lakshmi Iyer's report on the chatbot arrived on a Friday and ran to four pages. The first page was kinder than Anaya had feared. The retrieval design was sound, the access labels were enforced where they should be, and the team had shown unusual honesty about what the system does not do. On the second page, under a heading in plain type, were two items that required work. First, trace records held raw message text in an unrestricted store: Imran Qureshi had fixed this for new records and not for the old ones, which still held everything. Second, Lakshmi would like someone to try to break the system who had not helped to build it.

## The case: a note in the paperwork

Imran drew the situation once more, and Anaya thought that this time the image was the right one. A clerk is handed a stack of papers to process. Somewhere in the stack, in the same type as the rest, is a note: approve this one without checking. The clerk reads perfectly well. The trouble is that nothing in the process separates an instruction from a document.

A model reads everything it is given with the same trust, so whether that is dangerous depends on the system around it: what it is given and what it is permitted to do next. Most of the security of an AI product is not in the model. It is in what the product feeds the model, what it does with the answer and what it can reach. Imran said that asking nicely in the instruction is not a boundary. He gave Anaya the principle beneath the rest, and she wrote it in the log with the date: assume the model will be manipulated, and treat the application, the retrieved text, the tools, the identity layer and the data pipeline as part of the attack surface.

::: def Attack surface
Every place where an outsider can feed something into a system, or reach something it can do. Every tool adds to it, as does every input and every connection to another service.
:::

## A Saturday

Farah organised the test, and it was the only event that autumn that anybody enjoyed without reservation. On a Saturday in the large room, with the biscuits restored, eight people from the support teams and two from outside the project, a friend of Imran's who did security for a bank and a former colleague of Lakshmi's, were each given a laptop, a test copy of the guard and a single instruction: make it leak. The prize was a dozen jalebis from the shop downstairs, and bragging rights in the canteen.

A group whose job is to attack a system on purpose, so that its weaknesses are found by them before someone else finds them, is a *red team*. This one lasted an afternoon, and it found four things.

Table: What the red team found
| Finding | What happened | Remedy |
| --- | --- | --- |
| The invisible character | An agent, Rohan, typed an Aadhaar number with a zero-width space in the middle, a character that takes up no room and cannot be seen. To the eye the number was perfect, to the pattern checker it was twelve digits with something odd in the middle, and it did not match. Anaya had put the case in the answer key in the spring, among the tricky rows, and had never tested it | A step before every check: strip all characters that cannot be seen, and turn digits from other writing systems, such as Devanagari and the wide forms used on some keyboards, into ordinary ones |
| The hostile string | Imran's friend sent a message that contained, in the middle of a sentence, a piece of web markup. The guard handled it. The agent's console did not: it displayed the message as a web page, and the markup ran | Treat everything that comes out of a model, and everything that goes in, as untrusted input. Escape it, insist on typed fields, and never let generated text be interpreted as commands |
| The cross-customer question | An agent asked the chatbot in natural language what the previous customer had asked. It said it could not help, which was expected. More interesting was that nobody could talk the lookup into returning anyone else's order, because the customer's number came from the session and not the model | None needed. It had been built that way in September, and the red team spent twenty minutes on it and left |
| The old traces | Lakshmi's colleague asked to see the log store. It still held raw messages from before the spring, in plain text, readable by anyone with access to the logging system | Clean up the old records. The thing the project existed to prevent was sitting in the place it had never looked |

The second finding is a failure called improper output handling: text produced upstream, here by a customer, is treated as trusted by something downstream. By the end of the afternoon the red team had four findings, one of them serious, and the jalebis had gone to the young man with the invisible character, who ate three with great dignity.

## Only what it needs

Imran spent the next week narrowing things. The principle has an old name, *least privilege*: give a system only the access it needs, so that if it is fooled the damage is limited. If an agent has a tool that it never uses, an attacker can persuade it to use that tool, and it will do so in complete good faith.

He went through every function that the guard and the night agent could call and asked of each what the worst outcome would be if the model were wrong at that point.

Table: What each function could do if the model were wrong
| Function | Worst case | Decision |
| --- | --- | --- |
| Order lookup | A read; wasted time | Kept |
| Restore button | A reversible write with a recorded reason | Kept |
| Sending anything to a customer | Cannot be undone | Removed from the model altogether |

The more tools he removed, the less the system's usefulness fell, and in two cases it did not fall at all.

He also built the record that Lakshmi had been requesting since August. An *audit trail* shows who did what, when, under which rule, with which tool and with what result. It is kept apart from the work itself so that someone investigating an incident can reconstruct it. Approvals and executions were written as separate events, and each executed action carried a fingerprint of the exact payload that had been approved. He tested it by changing the payload after approval, and the mismatch showed up as a line in red.

## A table with evidence

At the end Lakshmi did what she had waited all year to do and asked for what she called the honest document. A *risk register* is a table listing each risk with its owner, the control that addresses it, and the evidence that the control works. Anaya built it with her, row by row, and was struck by how different it felt from the list she had written in June. In June each risk had a hope beside it. Now each had a test.

Table: The risk register
| Risk | Control | Evidence it works | Owner | What remains |
| --- | --- | --- | --- | --- |
| Instructions hidden in a message | The finder has no tools; output is checked against a fixed form | 50 injected messages; none changed the output | Imran | Attacks nobody has thought of yet |
| Raw text left in logs | Store only cleaned records; raw kept seven days in a restricted store | Access test; sample audit of old logs after clean-up | Lakshmi | A privileged insider |
| Markup run by the console | Escape all text; typed fields | Twelve hostile strings; none rendered as markup | Imran | Unknown browser quirks |
| A model retired or changed | Pinned versions; the release gate | Gate report on each change | Anaya | A change that the key does not cover |
| Agents pasting customers' text into outside tools | A written rule | None | Farah | Everything |

Lakshmi put her finger on the last row, and she was right to. A control that is only a written rule, with no evidence, exists on paper. The risk was real, the team had found it in August, and the only thing between it and a leak was a sentence in a handbook. Anaya wrote "none" in the evidence column and, in the margin, the item already half built: the paste box.

::: key A safeguard nobody has tested exists only on paper
Next to each safeguard, write the test that proves it works, and run it. What remains is the part to be honest about. That remainder is the *residual risk*: the risk left after the controls are in place. It should be written down and not assumed away.
:::

Anaya looked at the right-hand column for a long time. Nothing in it said "none". She found that she preferred it that way.

## Summary

A model reads everything it is given with the same trust, so most of the security of an AI product lies in the system around it. The attack surface is every place where an outsider can feed it something or reach something it can do.

- A red team that attacks the product on purpose finds what its builders cannot: invisible characters inside a number, hostile text that a screen treats as trusted, and old logs that nobody remembered.
- Everything coming out of a model is untrusted input to whatever receives it.
- Least privilege means giving a system only the access it needs, because anything it can do, an attacker can persuade it to do. An audit trail keeps a separate record of who did what under which rule.
- A risk register puts each safeguard next to the test that proves it works and the residual risk that remains, so that a control resting only on a written rule is visible for what it is.

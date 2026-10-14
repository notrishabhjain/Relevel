---
title: Assuming the Worst
summary: A compliance report, a Saturday spent trying to break the product with sweets as the prize, and a table in which every safeguard sits next to the test that proves it. The model will be manipulated, so the system around it has to be the defence. Along the way the chapter explains attack surface, least privilege, red teaming, audit trails, risk registers and residual risk.
course: ch18s
goals:
  - explain why most of the security of an AI product lies in the system around the model
  - describe what a red team found in the guard, and the remedy for each finding
  - apply least privilege to every function a model can call, and keep an audit trail separate from the work
  - build a risk register that pairs each control with evidence, and state the residual risk
terms:
  - attack surface | all the places where an outsider can feed something into a system or reach something it can do; every tool, input and connection adds to it | 
  - least privilege | giving a system only the access it really needs, so that if it is fooled the damage stays small | 
  - red team | people whose job is to attack a system on purpose, so that they find its weaknesses before anyone else does | red-team, red teaming
  - audit trail | a record, kept apart from the work itself, of who did what, when, under which rule and with what result, enough for someone to reconstruct an incident | audit log
  - risk register | a table that lists each risk with its owner, its control, the evidence that the control works, and what risk remains | 
  - residual risk | the risk that is left after the controls are in place; it should be written down, not assumed away | 
---

Lakshmi Iyer's report on the chatbot arrived on a Friday and ran to four pages. The first page was kinder than Anaya had feared. The retrieval design was sound, the access labels were enforced where they should be, and the team had been unusually honest about what the system does not do.

On the second page, under a plain heading, were two items that needed work. First, the trace records held raw message text in a store anyone could open. Imran Qureshi had fixed this for new records but not for old ones, which still held everything. Second, Lakshmi wanted someone to try to break the system who had not helped to build it.

## The case: a note in the paperwork

Imran drew the situation once more, and this time Anaya thought the picture was right. A clerk is handed a stack of papers to process. Somewhere in the stack, in the same type as everything else, is a note: approve this one without checking. The clerk reads perfectly well. The trouble is that nothing in the process tells an instruction apart from a document.

A model is in the same position. It reads everything it is given with the same trust. So whether that is dangerous depends on the system around it: what it is given, and what it is allowed to do next.

This means most of the security of an AI product is not in the model. It is in what the product feeds the model, what it does with the answer and what it can reach. Imran said that asking nicely in the instruction is not a boundary. Then he gave Anaya the principle underneath all the others, and she wrote it in the log with the date: assume the model will be manipulated, and treat the application, the retrieved text, the tools, the identity layer and the data pipeline as part of the attack surface.

::: def Attack surface
Every place where an outsider can feed something into a system, or reach something it can do. Every tool adds to it, and so does every input and every connection to another service.
:::

## A Saturday

Farah organised the test. It was the only event that autumn that everybody enjoyed without reservation. On a Saturday, in the large room, with the biscuits restored, ten people sat down with a laptop each. Eight came from the support teams. Two came from outside the project: a friend of Imran's who did security for a bank, and a former colleague of Lakshmi's. Each had a test copy of the guard and a single instruction: make it leak. The prize was a dozen jalebis from the shop downstairs, and bragging rights in the canteen.

A group whose job is to attack a system on purpose is called a *red team*. They do it so that they find the weaknesses before somebody else does. This one lasted an afternoon, and it found four things. Read the table across: what was found, what happened, and what the team did about it.

Table: What the red team found
| Finding | What happened | Remedy |
| --- | --- | --- |
| The invisible character | An agent, Rohan, typed an Aadhaar number with a zero-width space in the middle. That is a character that takes up no room and can't be seen. To the eye the number was perfect. To the pattern checker it was twelve digits with something odd in the middle, so it didn't match. Anaya had put this case in the answer key in the spring, among the tricky rows, and had never tested it. | Add a step before every check. It strips all characters that can't be seen, and turns digits from other writing systems into ordinary ones. That covers Devanagari digits and the wide forms some keyboards produce. |
| The hostile string | Imran's friend sent a message that had a piece of web markup in the middle of a sentence. The guard handled it. The agent's console did not. It displayed the message as a web page, and the markup ran. | Treat everything that comes out of a model, and everything that goes in, as untrusted input. Escape it, insist on typed fields, and never let generated text be read as commands. |
| The cross-customer question | An agent asked the chatbot, in plain language, what the previous customer had asked. It said it couldn't help, which was expected. More interesting was that nobody could talk the lookup into returning anyone else's order, because the customer's number came from the session and not from the model. | None needed. It had been built that way in September. The red team spent twenty minutes on it and moved on. |
| The old traces | Lakshmi's colleague asked to see the log store. It still held raw messages from before the spring, in plain text, readable by anyone with access to the logging system. | Clean up the old records. The very thing the project existed to prevent was sitting in the one place nobody had looked. |

The second finding has a name: improper output handling. It happens when text produced upstream, here by a customer, is treated as trusted by something downstream. By the end of the afternoon the red team had four findings, one of them serious. The jalebis went to the young man with the invisible character, who ate three with great dignity.

## Only what it needs

Imran spent the next week narrowing things down. The principle he used has an old name, *least privilege*. It means giving a system only the access it needs, so that if the system is fooled, the damage stays small.

The reason is simple. If an agent has a tool it never uses, an attacker can still persuade it to use that tool, and it will do so in complete good faith. A tool that isn't there can't be misused.

So Imran went through every function that the guard and the night agent could call. For each one he asked: what is the worst that happens if the model is wrong at this point? The table has his answers.

Table: What each function could do if the model were wrong
| Function | Worst case | Decision |
| --- | --- | --- |
| Order lookup | A read; wasted time | Kept |
| Restore button | A reversible write with a recorded reason | Kept |
| Sending anything to a customer | Cannot be undone | Removed from the model altogether |

The more tools he removed, the less the usefulness of the system fell. In two cases it did not fall at all.

He also built the record Lakshmi had been asking for since August. An *audit trail* shows who did what, when, under which rule, with which tool and with what result. It is kept apart from the work itself, so that someone investigating an incident can reconstruct what happened. Approvals and executions were written as separate events. Each executed action carried a fingerprint of the exact payload that had been approved. Imran tested this by changing the payload after approval, and the mismatch showed up as a line in red.

## A table with evidence

At the end Lakshmi did what she had waited all year to do. She asked for what she called the honest document. It is called a *risk register*: a table that lists each risk with its owner, the control that deals with it, and the evidence that the control works.

Anaya built it with her, row by row. She was struck by how different it felt from the list she had written in June. In June, each risk had a hope written beside it. Now each risk had a test. The table below shows the register, with a last column for what is still left after the control.

Table: The risk register
| Risk | Control | Evidence it works | Owner | What remains |
| --- | --- | --- | --- | --- |
| Instructions hidden in a message | The finder has no tools; its output is checked against a fixed form | 50 injected messages; none changed the output | Imran | Attacks nobody has thought of yet |
| Raw text left in logs | Store only cleaned records; keep raw text seven days in a restricted store | Access test; a sample audit of old logs after the clean-up | Lakshmi | A privileged insider |
| Markup run by the console | Escape all text; use typed fields | Twelve hostile strings; none rendered as markup | Imran | Unknown browser quirks |
| A model retired or changed | Pinned versions; the release gate | A gate report on each change | Anaya | A change that the key does not cover |
| Agents pasting customers' text into outside tools | A written rule | None | Farah | Everything |

Lakshmi put her finger on the last row, and she was right to. A control that is only a written rule, with no evidence behind it, exists on paper. The risk was real. The team had found it in August, and the only thing between it and a leak was a sentence in a handbook. Anaya wrote "none" in the evidence column. In the margin she wrote the fix already half built: the paste box.

::: key A safeguard nobody has tested exists only on paper
Next to each safeguard, write the test that proves it works, and run it. What is left over is the part to be honest about. That remainder is the *residual risk*: the risk that is left after the controls are in place. Write it down. Don't assume it away.
:::

Anaya looked at the right-hand column for a long time. Nothing in it said "none". She found that she preferred it that way.

## Summary

A model reads everything it is given with the same trust. So most of the security of an AI product lies in the system around the model. The attack surface is every place where an outsider can feed it something or reach something it can do.

- A red team that attacks the product on purpose finds what its builders can't see: invisible characters inside a number, hostile text that a screen treats as trusted, and old logs that nobody remembered.
- Everything that comes out of a model is untrusted input to whatever receives it.
- Least privilege means giving a system only the access it needs, because anything it can do, an attacker can persuade it to do. An audit trail keeps a separate record of who did what under which rule.
- A risk register puts each safeguard next to the test that proves it, and next to the residual risk that remains. A control that rests only on a written rule then shows up for what it is.

The product is now safer. The next chapter asks what it takes to turn something that works on a laptop into a product people can rely on.

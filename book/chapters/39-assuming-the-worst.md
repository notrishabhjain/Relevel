---
title: Assuming the Worst
summary: A compliance report, a Saturday spent trying to break the product for a prize of sweets, and a table that puts each safeguard next to its test. The model can be tricked, so the system around it has to be the defence. You meet attack surface, least privilege, red teaming, audit trails, risk registers and residual risk.
course: ch18s
goals:
  - explain why most of the security of an AI product sits in the system around the model
  - describe what a red team found in the guard, and the fix for each finding
  - give every function a model can call only the access it needs, and keep an audit trail apart from the work
  - build a risk register that puts each control next to its proof, and state the residual risk
terms:
  - attack surface | all the doors and windows of a house: every place where an outsider can push something in or reach something the system can do; each tool, input and connection adds one | 
  - least privilege | giving a visitor only the key to the one room they need, so that if they are fooled the damage stays small | 
  - red team | friendly burglars: people whose job is to attack a system on purpose, so they find its weak spots before anyone else does | red-team, red teaming
  - audit trail | the visitors' register at a gate, kept apart from the work: who did what, when, under which rule, with what result, so an incident can be rebuilt | audit log
  - risk register | a table that lists each risk with its owner, its control, the proof that the control works, and the risk that is left | 
  - residual risk | the risk left over after all the locks are fitted; write it down, do not pretend it is gone | 
---

Lakshmi Iyer's report on the chatbot arrived on a Friday. It ran to four pages. The first page was kinder than Anaya had feared. The retrieval design (finding the right page before answering) was sound. The access labels were enforced where they should be. And the team had been unusually honest about what the system does not do.

The second page had a plain heading and two items that needed work. First, the trace records held raw message text in a store anyone could open. Imran Qureshi had fixed this for new records. The old ones still held everything. Second, Lakshmi wanted someone to try to break the system who had not helped build it.

## The case: a note in the paperwork

Imran drew the situation once more. This time Anaya thought the picture was right. A clerk is handed a stack of papers to process. Somewhere in the stack, in the same type as everything else, sits a note: approve this one without checking. The clerk reads perfectly well. But nothing in the process tells an instruction apart from a document.

A model is in the same spot. It reads everything it is given with the same trust. Whether that is dangerous depends on the system around it. What is it given? What is it allowed to do next?

So most of the security of an AI product is not in the model. It is in what the product feeds the model. It is in what the product does with the answer. And it is in what the product can reach. Imran said that asking nicely in the instruction is not a boundary. A "please" on a door is not a lock.

Then he gave Anaya the idea under all the others. She wrote it in the log with the date. Assume the model will be manipulated. Treat all of these as attack surface. The application. The retrieved text. The tools. The identity layer (the part that knows who you are). The data pipeline (the path data travels).

::: def Attack surface
Think of a house. Every door and window is a place a thief could try. In a system, the attack surface is every place an outsider can push something in. It also covers every place an outsider can reach something the system can do. Each tool adds one. So does each input, and each link to another service.
:::

## A Saturday

Farah organised the test. It was the only event that autumn that everyone enjoyed without a worry. On a Saturday, in the large room, with the biscuits back, ten people sat down with a laptop each. Eight came from the support teams.

Two came from outside the project. One was a friend of Imran's who did security for a bank. One was a former colleague of Lakshmi's. Each had a test copy of the guard and one order: make it leak. The prize was a dozen jalebis from the shop downstairs, and bragging rights in the canteen.

A group whose job is to attack a system on purpose is a *red team*. Think of friendly burglars. They break in so that they find the weak spots before a real thief does. This one lasted an afternoon and found four things. Read the table across: what was found, what happened, and what the team did about it.

Table: What the red team found
| Finding | What happened | Remedy |
| --- | --- | --- |
| The invisible character | An agent, Rohan, typed an Aadhaar number with a zero-width space in the middle. That is a character with no width, so you can't see it. To the eye the number was perfect. To the pattern checker it was twelve digits with something odd inside, so it did not match. Anaya had put this case in the answer key in the spring, among the tricky rows. She had never tested it. | Add a step before every check. It strips every character you can't see. It also turns digits from other scripts into ordinary digits. That covers Devanagari digits and the wide digits some keyboards make. |
| The hostile string | Imran's friend sent a message with a piece of web markup (page code) inside a sentence. The guard handled it. The agent's console did not. It showed the message as a web page, and the markup ran. | Treat all text going into a model, and all text coming out, as untrusted input. Escape it (make code harmless). Use typed fields (fixed boxes). Never let made-up text be read as commands. |
| The cross-customer question | An agent asked the chatbot, in plain words, what the last customer had asked. It said it could not help. That was expected. The better news was this: nobody could talk the lookup into giving out another person's order. The customer's number came from the session, not from the model. | None needed. It was built that way in September. The red team spent twenty minutes on it and moved on. |
| The old traces | Lakshmi's colleague asked to see the log store. It still held raw messages from before the spring, in plain text. Anyone with access to the logging system could read them. | Clean up the old records. The very thing the project existed to stop was sitting in the one place nobody had looked. |

The second finding has a name: improper output handling. It happens when text made upstream, here by a customer, is trusted by something downstream. By the end of the afternoon the red team had four findings, and one was serious. The jalebis went to the young man with the invisible character. He ate three with great dignity.

## Only what it needs

Imran spent the next week narrowing things down. His rule has an old name: *least privilege*. Think of a guest in your home. You give him the key to the guest room, not to the cupboard with the jewellery. Give a system only the access it needs. Then, if it is fooled, the damage stays small.

The reason is simple. Say an agent has a tool it never uses. An attacker can still talk it into using that tool, and it will do so in complete good faith. A tool that isn't there can't be misused.

So Imran went through every function the guard and the night agent could call. For each one he asked: what is the worst that happens if the model is wrong here? The table has his answers.

Table: What each function could do if the model were wrong
| Function | Worst case | Decision |
| --- | --- | --- |
| Order lookup | A read; wasted time | Kept |
| Restore button | A reversible write with a recorded reason | Kept |
| Sending anything to a customer | Cannot be undone | Removed from the model altogether |

The more tools he removed, the less the system's usefulness fell. In two cases it did not fall at all.

He also built the record Lakshmi had asked for since August. An *audit trail* shows who did what, when, under which rule, with which tool and with what result. Think of the visitors' register at a society gate. It is kept apart from the work itself. So someone looking into an incident can rebuild what happened.

Approvals and executions were written as separate events. Each action that ran carried a fingerprint of the exact payload (the contents sent) that had been approved. Imran tested this by changing the payload after approval. The mismatch showed up as a line in red.

## A table with evidence

At the end, Lakshmi did what she had waited all year to do. She asked for what she called the honest document. It is a *risk register*. Think of a fire-safety checklist in a building. It lists each risk with its owner and the control that deals with it. And it lists the proof that the control works.

Anaya built it with her, row by row. She was struck by how different it felt from the list she had written in June. In June, each risk had a hope written beside it. Now each risk had a test. The table shows the register, with a last column for what is still left after the control.

Table: The risk register
| Risk | Control | Evidence it works | Owner | What remains |
| --- | --- | --- | --- | --- |
| Instructions hidden in a message | The finder has no tools; its output is checked against a fixed form | 50 injected messages; none changed the output | Imran | Attacks nobody has thought of yet |
| Raw text left in logs | Store only cleaned records; keep raw text seven days in a restricted store | Access test; a sample audit of old logs after the clean-up | Lakshmi | A privileged insider |
| Markup run by the console | Escape all text; use typed fields | Twelve hostile strings; none rendered as markup | Imran | Unknown browser quirks |
| A model retired or changed | Pinned versions; the release gate | A gate report on each change | Anaya | A change that the key does not cover |
| Agents pasting customers' text into outside tools | A written rule | None | Farah | Everything |

Lakshmi put her finger on the last row, and she was right to. A control that is only a written rule, with no proof, exists on paper. The risk was real. The team had found it in August. The only thing between it and a leak was one sentence in a handbook. Anaya wrote "none" in the evidence column. In the margin she wrote the fix already half built: the paste box.

::: key A safeguard nobody has tested exists only on paper
A lock you have never tried is only a hope. Next to each safeguard, write the test that proves it works, and run it. What is left over is the part to be honest about. That leftover is the *residual risk*: the risk that remains after the controls are in place. Write it down. Do not wish it away.
:::

Anaya looked at the right-hand column for a long time. Nothing in it said "none". She found that she liked it that way.

::: key What you can now say
Fill each N from your own project.
- I chose the model on N of my own cases, with only the model changing between runs. I wrote the choice on a card with its evidence.
- My agent has limits: N steps, N minutes, a cost ceiling and a "cannot resolve" ending. I grade its path as well as its answer.
- Nothing ships unless the gate passes. I attacked my own product in N ways. The risk register puts a test beside each safeguard.
:::

## Summary

A model reads everything it is given with the same trust. So most of the security of an AI product lies in the system around the model. The attack surface is every place where an outsider can feed it something, or reach something it can do. Think of the doors and windows of a house.

- A red team attacks the product on purpose. It finds what the builders can't see. Examples are invisible characters inside a number, hostile text that a screen trusts, and old logs nobody remembered.
- Everything that comes out of a model is untrusted input to whatever receives it.
- Least privilege means giving a system only the access it needs. Anything it can do, an attacker can talk it into doing. An audit trail keeps a separate record of who did what under which rule.
- A risk register puts each safeguard next to its test. It also puts the residual risk next to it. Then a control that rests only on a written rule shows up for what it is.

The product is now safer. The next chapter asks a new question. What does it take to turn a laptop demo into a product people can rely on?

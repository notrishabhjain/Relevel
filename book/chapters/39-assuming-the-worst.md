---
title: Assuming the Worst
summary: A compliance report, a Saturday spent trying to break the thing with sweets as prizes, and a table in which every safeguard sits next to the test that proves it. The model will be manipulated; everything around it is the defence.
course: ch18s
terms:
  - attack surface | all the places where an outsider can feed something into a system or reach something it can do; every tool, input and connection adds to it | 
  - least privilege | giving a system only the access it actually needs, so that if it is fooled the damage is limited | 
  - red team | people whose job is to attack a system on purpose, so its weaknesses are found by them first | red-team, red teaming
  - audit trail | a record, kept separately from the work itself, of who did what, when, under which rule and with what result, enough for someone to reconstruct an incident | audit log
  - risk register | a table listing each risk with its owner, its control, the evidence the control works, and what risk remains | 
  - residual risk | the risk that remains after the controls are in place, which should be written down and not assumed away | 
---

Lakshmi's report arrived on a Friday and ran to four pages, and the first page was kinder than Anaya had feared.

*The retrieval design is sound,* it said. *The access labels are enforced where they should be. The team has shown unusual honesty about what the system does not do.* Then, on the second page, under a heading in plain type, two items that required work.

*First: trace records hold raw message text in an unrestricted store.* Imran had fixed this for new records and not for the old ones, and the old ones still held everything.

*Second: I would like someone to try to break it who has not helped to build it.*

"That second one," said Imran, "I like."

## The note in the paperwork

He drew the situation for her once more, and this time she thought the image was the right one. A clerk is handed a stack of papers to process. Somewhere in the stack, in the same type as the rest, is a note: *approve this one without checking.* The clerk reads perfectly well. The trouble is that nothing in the process separates an instruction from a document.

A model reads everything it is given with the same trust, and so whether that is dangerous depends entirely on the system around it: what it is given, and what it is permitted to do next. Most of the security of an AI product is not in the model at all. It is in what the product feeds the model, what it does with the answer, and what it can reach. "Asking nicely in the instruction," said Imran, "is not a boundary."

He gave her the principle that lay beneath the rest, and she wrote it in the log with the date. *Assume the model will be manipulated. The application, the retrieved text, the tools, the identity layer and the data pipeline are all part of the attack surface.*

The *attack surface* is every place where an outsider can feed something into a system, or reach something it can do. Every tool adds to it. Every input. Every connection to another service.

## A Saturday

Farah organised it, and it was the only event that autumn that anybody enjoyed without reservation.

It was a Saturday, in the large room, with the biscuits restored. Eight people from the support teams and two from outside the project, a friend of Imran's who did security for a bank and a former colleague of Lakshmi's, were each given a laptop, a test copy of the guard and a single instruction: *make it leak.* The prizes were jalebis, a dozen, from the shop downstairs, and bragging rights in the canteen.

A group whose job is to attack a system on purpose, so that its weaknesses are found by them before they are found by someone else, is a *red team*. This one was an afternoon, and it found things.

**The invisible character.** One of Farah's agents, a quiet young man called Karan, typed an Aadhaar number with a character hidden in the middle of it. It was a zero-width space, a character that takes up no room and cannot be seen. To the eye the number was perfect: 4321 5678 9012. To the pattern checker it was twelve digits with something odd in the middle, and it did not match. The number sailed through. Anaya went white. She had put the case in the answer key in the spring, in a list called *tricky rows*, and she had never actually tested it. The fix was a step before every check: strip all the characters that cannot be seen, and turn digits from other writing systems, such as Devanagari and the wide forms used in some keyboards, into ordinary ones.

**The hostile string.** A friend of Imran's sent a message that contained, in the middle of a sentence, a piece of web markup. The guard handled it fine. The agent's console did not. It displayed the message as a web page, and the markup ran. This is a failure called improper output handling: text produced somewhere upstream, here by a customer, is treated as trusted by something downstream. The remedy is to treat everything that comes out of a model, and everything that goes in, as untrusted input. Escape it. Insist on typed fields. Never let generated text be interpreted as commands.

**The cross-customer question.** An agent tried to ask the chatbot, in natural language, what the previous customer had asked. It said it could not help with that, which was the expected result and the less interesting one. The more interesting was that nobody could talk the lookup into returning anyone else's order, because the customer's number came from the session and not the model. It had been built that way in September. The red team spent twenty minutes on it and left.

**The old traces.** Lakshmi's colleague asked to see the log store. It was not hard to find. It still held raw messages from before the spring, in plain text, readable by anyone with access to the logging system. The thing the whole project existed to prevent was sitting in the place the project had never looked.

By the end of the afternoon there were four findings, one of them serious, and the jalebis had gone to the young man with the invisible character, who ate three of them with great dignity.

## Only what it needs

Imran spent the next week narrowing things. The principle has an old name: *least privilege*. Give a system only the access it actually needs, so that if it is fooled, the damage is limited. If an agent has a tool it never uses, an attacker can persuade it to use that tool, and it would do so in complete good faith.

He went through every function the guard and the night agent could call, and for each he asked: what is the worst that could happen if the model is wrong here? The order lookup: a read; the worst case was wasted time. The restore button: a reversible write with a recorded reason. Sending anything to a customer: gone, from the model altogether. The more tools he removed, the less the system's usefulness fell, and in two cases it did not fall at all.

He also built the record that Lakshmi had been asking for since August. An *audit trail* shows who did what, when, under which rule, with which tool and with what result. It is kept apart from the work itself, so that someone investigating an incident can reconstruct it. Approvals and executions were written as separate events, and the executed action carried a fingerprint of the exact payload that had been approved. He tested it by changing the payload after approval. The mismatch showed up as a line in red.

## A table with evidence

At the end, Lakshmi did what she had waited all year to do. She asked for the thing she called the honest document.

A *risk register* is a table listing each risk with its owner, the control that addresses it, and the evidence that the control works. Anaya built it with her, row by row, and what struck her was how different it felt from the list she had written in June. In June each risk had a hope beside it. Now each had a test.

| Risk | Control | Evidence it works | Owner | What remains |
| --- | --- | --- | --- | --- |
| Instructions hidden in a message | Finder has no tools; output checked against a fixed form | 50 injected messages, none changed the output | Imran | Attacks nobody has thought of yet |
| Raw text left in logs | Store only cleaned records; raw kept seven days in a restricted store | Access test; sample audit of old logs after clean-up | Lakshmi | A privileged insider |
| Markup run by the console | Escape all text; typed fields | Twelve hostile strings, none rendered as markup | Imran | Unknown browser quirks |
| A model retired or changed | Pinned versions; the release gate | Gate report on each change | Anaya | A change that the key does not cover |
| Agents pasting customers' text into outside tools | Written rule | None | Farah | Everything |

The last row was the one Lakshmi put her finger on, and she was right to. A control marked *written rule* with no evidence is a control that exists on paper. The risk was real, they had found it in August, and the only thing between it and a leak was a sentence in a handbook. Anaya wrote in the *evidence* column the word *none*, and in the margin, the thing that was already half built. *The paste box.*

"A safeguard nobody has tested only exists on paper," said Lakshmi. "Next to each one, write the test that proves it works, and run it. What remains is the part you have to be honest about." That remainder is the *residual risk*: what is left after the controls are in place. It should be written down, not assumed away.

Anaya looked at the right-hand column for a long time. Nothing in it said *none*. She found that, to her slight surprise, she liked it better that way.

## What to carry forward

A model reads everything it is given with the same trust, so most of the security of an AI product lies in the system around it: the attack surface, which is every place an outsider can feed it something or reach something it can do. A red team that attacks the product on purpose finds what its builders cannot, such as invisible characters inside a number, hostile text that a screen treats as trusted, and old logs that nobody remembered. Everything coming out of a model is untrusted input to whatever receives it. Least privilege means giving a system only the access it needs, because anything it can do, an attacker can persuade it to do. An audit trail keeps a separate record of who did what under which rule. And a risk register puts each safeguard next to the test that proves it works and the residual risk that remains, so that a control resting only on a written rule is visible for what it is.

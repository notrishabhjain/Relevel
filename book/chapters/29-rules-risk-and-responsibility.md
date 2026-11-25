---
title: Rules, Risk and Responsibility
summary: Lakshmi tells what twenty years in a bank taught her about paperwork. Then the team writes a one-page document. It says what the guard is for, what it gets wrong and what it must never be used for. After that they try to delete one customer and find every place that customer's data lives. The chapter covers risk tiers, India's data protection law, system cards, deletion drills, human oversight and shadow AI.
course: ch17
goals:
  - see why the use of a system, not its technology, sets its risk tier
  - say what India's data protection law asks of an organisation, and why a privacy tool must never be called a way to make anyone compliant
  - write a one-page system card whose list of known limitations rests on evidence
  - run a deletion drill, build human oversight that can really say no, and answer shadow AI with a better approved tool
terms:
  - risk tier | a speed limit for a system: the more harm a wrong answer can do, the more documents, checks and proof it needs; the use sets the tier, not the technology | risk tiers
  - system card | a one-page label for an AI system, like the label on a medicine strip: what it is for, what data it uses, how it was tested, what it gets wrong and what it must not be used for | system cards
  - deletion drill | a fire drill for data: pretend a customer asked you to delete their data, then find every place it lives, and see which places you cannot reach | 
  - human oversight | a person who can see the proof behind an output and can say no to it; only watching outputs go by does not count | 
  - shadow AI | staff quietly using free consumer AI tools, often by pasting in office documents, because those tools help and nothing approved is as good | 
  - DPDP Act | India's Digital Personal Data Protection Act, 2023, the law that says how to treat people's diaries (personal data); it asks for far more than finding and hiding personal details | Digital Personal Data Protection Act
---

On the first Tuesday of August, Lakshmi Iyer began a long afternoon with a saying from her bank days. If it is not written down, it did not happen. Imran Qureshi had brought a laptop. Anaya had brought the answer key (the teacher's list of right answers). It now had two hundred and four rows. Farah Sheikh came with a bag of roasted peanuts and no reason to be there. She was allowed to stay.

Lakshmi had spent twenty years as the person who asked for paperwork. People thought she slowed things down. She did not see it that way. She wanted one thing. When something goes wrong, someone must be able to say what the system was for. They must say what it should do, and what was tested.

A regulator (an official body that checks the rules are followed) does not mind a failure. It minds a failure that nobody can explain.

Today a machine that reads and writes text comes with a folder of such questions. Most people think the legal team will write the answers. But almost every question in the folder is a product question. Lakshmi could write the sentences. She could not answer the questions.

## The case: a folder of product questions

Think of the folder as a form at a government counter. It will not be stamped until every box is filled. It had four questions. What is the system for? Who does it affect? What happens when it is wrong? Who checks it, and with what proof? Anaya could answer these. The sections below follow the afternoon.

## The use sets the risk

How careful a system must be does not depend on the technology. It depends on how much harm a wrong answer can do. Think of a speed limit. A street outside a school has a lower limit than a highway, even if the car is the same. Lakshmi drew four rows to show it.

Table: Four levels of risk
| Level | Kind of use | What is required |
| --- | --- | --- |
| Not allowed | Scoring people for their social behaviour; certain kinds of sorting by biometrics | Not permitted, whatever safeguards are added |
| High risk | Hiring, credit decisions, access to education and essential services | Documentation, a real human check, evidence of accuracy, logging and formal assessment |
| Tell the user | Chatbots, generated images | It is enough to say that the user is dealing with a machine |
| Minimal | Most internal tools | Good ordinary practice |

Rules like these began in Europe, with the EU AI Act. Since then they have reached the buying teams of many companies elsewhere. Each level is a **risk tier** (a speed limit set by the harm a wrong answer could do). The tier decides how much proof a system must show.

Two things about tiers surprise people. First, the use sets the tier, not the model. The same system can be low risk as an internal answer-finder. It becomes high risk if someone starts using it to decide who gets a loan. Second, the tier changes when the use changes. That often happens after launch, and nobody updates the papers.

Anaya asked where the guard sits. It hides identity numbers in a chat, Lakshmi said. So it is minimal. The chatbot behind it must say that it is a machine. But suppose someone used the guard's findings to decide if a customer was trustworthy. Then it would be a different thing. She told Anaya to write that down. It was the most useful sentence in the folder.

## India's law, and what the guard is not

Then Imran asked the question Anaya had been avoiding. Is the guard compliant (does it follow the law)? Lakshmi asked, "With what?" With the law, Imran said. India's law.

She explained the **DPDP Act**. It is the Digital Personal Data Protection Act of 2023, and its Rules came out in 2025. Think of personal data as someone's diary. The Act says how an organisation may use that diary. It says when the diary must be given back or destroyed. The duties include clear notices and consent (a clear yes from the person). They include security and limits on how long data is kept. They include a plan for a breach (a leak). There is much more besides.

Finding and hiding personal details does help. The organisation collects and passes on less. But it is one technical piece, like one lock on a house. It is not compliance, and no tool is.

::: watch Never say "compliant"
Whenever you write about the guard, call it a privacy tool. It helps an organisation collect and share less personal data. Never say it makes anyone compliant, whether Sahaj, a customer or anyone else.

Lakshmi said that if a salesman ever wrote that sentence about the guard, she would find out. Anaya put the rule on the first line of a page. Later it went into the specification and the system card. It also went on the front of a website that did not yet exist.
:::

## One page

The paper at the centre of the folder is one page. It is called a **system card**. Think of the label on a medicine strip. It says what the medicine is for, what is in it and what to watch out for. A system card says what the system is for and what data it uses. It says how it was tested and what it gets wrong. Anything above the minimal tier needs one.

Anaya had never written one. But she had been collecting its contents for six months without knowing it. She wrote it in an hour in front of the others. She used numbers from the answer key.

::: case Bharat Privacy Guard: system card
**What it is for.** Noticing personal details in customer messages in English, Hindi and Hinglish. Hiding them before the messages are stored or sent on.

**What it uses.** Customer chat messages. It stores no message text of its own.

**How it was tested.** On a hand-marked answer key of 204 rows, version 7, which includes scanned and mixed-language examples.

**Known limitations.** Misses about one in ten names written in Roman Hindi with "ji". Hides some order numbers wrongly. Does not read photographs. Has not been tested on Tamil, Bengali, Telugu, Marathi or Gujarati.

**Out of scope.** It must not be used to decide anything about a customer. It does not make Sahaj, or any user, compliant with any law.
:::

Lakshmi asked Anaya to read the limitations aloud. Then she said this part made her trust the rest. Anyone can say what a system does well. A list of real failures, with proof behind each one, shows that someone has looked. So the limitations section is the hardest to fake and the easiest to believe.

The out-of-scope line is the most useful of all. It stops the use from sliding into a higher tier without anyone noticing.

## Finding Mr. Deshpande

Lakshmi then set a drill. She slid a card across the table. It had a real customer's name on it. Mr. Deshpande was an old man in Satara. In June he had written to Sahaj and asked for his data to be removed. He had been promised it would be. It had not been done. Anaya was to pretend the request had just come in. She had to find every place he lived.

That is a **deletion drill**. It is like a fire drill, but for data. You find every place where one person's data is kept. Then you learn which places you cannot reach. A person's data may sit in seven places. They are the original documents and the chunks (index cards) cut from them. Then the search index and the cache (a short-term copy). Then the provider's logs (its diary of every request) and the company's own logs. Last, any test set built from real traffic. Many teams find that at least two of these are out of reach.

Table: Where Mr. Deshpande's data could be
| Place | Could Sahaj delete it? |
| --- | --- |
| Support system | Yes, a row can be deleted |
| Chat history | Yes |
| Search index | It held only policies, so nothing to delete |
| Cache | Temporary |
| Sahaj's own logs | Yes, by customer number, with a day's work |
| The outside company's logs | No. According to its terms they stay thirty days, and Sahaj cannot shorten that |

Then Anaya remembered something, and she went cold. In June she had printed a hundred outputs, so that she and Farah could read and mark them. They were in the lower drawer of her desk. They came from exported chats (chats copied out of the system), and they carried real names.

Lakshmi said it is always this one. Someone copies real data into something, for a good reason. Nothing in the copy points back to a person. Test sets and printouts are the places most often forgotten. The provider's caches are the hardest to see.

Anaya shredded the printouts that evening, with Farah as a witness. She wrote the date in the log. Then she added a line to the process that had caused the problem. When you collect data, note where every piece came from, because you cannot rebuild that later. A deletion request that cannot be finished is a failure with a date on it.

## A person who can say no

Lakshmi had two more matters, and she took them quickly.

The first was **human oversight**. Everyone writes "a human reviews every output". Anaya had written it in the first draft of the PRD (the recipe card for the product). Lakshmi asked how long one reviewer would last with four thousand outputs a day. In her experience, about two weeks. After that the reviewer approves without reading. The document still says a human checks everything, but really nobody does. That is worse than not making the claim.

Think of a gatekeeper at a railway crossing. If he only watches the trains pass, he is no use. He is useful because he can lower the bar. Oversight that works is the same. It sends a person only some outputs. These are the uncertain ones and the ones that could do the most harm. Also the ones where what was found does not match what was answered. It shows the reviewer the proof as well as the answer. And it lets the reviewer reject, not only watch.

A person who can see and refuse is human oversight. A person who watches things go by is decoration. For the guard, this meant the unsure cases, a few in a hundred. Each showed the sentence and the proposed action side by side, with two buttons.

The second matter was something Lakshmi had seen in every company she had worked in. Staff use free consumer AI tools on their own. Usually they paste in office documents. They do it because the tools help, and nothing the company gives them is as good. This is **shadow AI**. Think of staff using their own cupboard because the office cupboard is broken. Banning it rarely works. A ban changes the rule on paper, not what people do.

Farah raised her hand, a little shyly. Her team pasted customers' Hinglish into a translation site, to be sure they replied properly. She had told them not to. They had said fine, and they still did it. Lakshmi said that was because it works. Then she asked what would make them stop.

Anaya said it would take a paste box that was as good. It must also clean the text before it went anywhere. "Then you have your second product," said Lakshmi. For the first time that afternoon, she smiled.

## Summary

Think of the speed limit again. How much a system must show depends on how much harm a wrong answer could do. The use decides that, not the technology. The same tool can be harmless in one use and serious in another. Its tier changes when its use changes.

- India's data protection law asks for much more than finding and hiding personal details. So a privacy tool must never be called a way to make anyone compliant.
- A one-page system card says what a system is for and how it was tested. It says what the system gets wrong and what it must not be used for. Its list of real failures makes it believable.
- A deletion drill finds the places where a person's data lives that you cannot reach. The forgotten ones are usually copies made for a good reason.
- Human oversight works only if the reviewer sees the proof and can say no.
- Where people already use tools nobody approved, the cure is an approved tool that is better.

Next, an email arrives at ten past two in the morning. The model the guard depends on will be retired in thirty days.

---
title: Rules, Risk and Responsibility
summary: Lakshmi explains what twenty years in a bank taught her about paperwork. Then the team writes a one-page document that says what the guard is for, what it gets wrong and what it must never be used to do. After that they try to delete one customer and find where that customer's data lives. The chapter covers risk tiers, India's data protection law, system cards, deletion drills, human oversight and shadow AI.
course: ch17
goals:
  - explain why the use of a system, and not its technology, sets its risk tier
  - say what India's data protection law asks of an organisation, and why a privacy tool must never be described as making anyone compliant
  - write a one-page system card whose list of known limitations rests on evidence
  - run a deletion drill, design human oversight that can really say no, and answer shadow AI with a better approved tool
terms:
  - risk tier | a level, set by how much harm a wrong answer could do, that decides how much documentation, checking and evidence a system needs; the use sets the tier, not the technology | risk tiers
  - system card | a one-page description of an AI system: what it is for, what data it uses, how it was tested, what it gets wrong and what it must not be used for | system cards
  - deletion drill | pretending a customer has asked for their data to be deleted, then finding every place it lives, so you learn which places you cannot reach | 
  - human oversight | a person who can see the evidence behind an output and can reject it; just watching outputs go by does not count | 
  - shadow AI | staff using consumer AI tools on their own, often by pasting in internal documents, because the tools are useful and nothing approved is as good | 
  - DPDP Act | India's Digital Personal Data Protection Act, 2023, which sets duties for organisations that handle personal data, far beyond finding and hiding it | Digital Personal Data Protection Act
---

On the first Tuesday of August, Lakshmi Iyer opened a long afternoon with a saying from her years in a bank: if it is not written down, it did not happen. Imran Qureshi had brought a laptop. Anaya had brought the answer key, which now had two hundred and four rows. Farah Sheikh had come with a bag of roasted peanuts and no particular reason to be there, and she had been allowed to stay.

Lakshmi said she had spent twenty years as the person who asked for paperwork. People thought she was slowing things down. What she was really doing was making sure that, when something went wrong, someone could say what the system was for, what it was supposed to do and what had been tested. A regulator doesn’t mind a failure. It minds a failure that nobody can explain.

A machine that reads and writes text now arrives with a folder of such questions. Most people assume the legal team writes the answers. But almost every question in the folder is a product question. Lakshmi could write the sentences, but she couldn’t answer the questions.

## The case: a folder of product questions

The folder asked four things. What is the system for? Who does it affect? What happens when it is wrong? And who checks it, with what evidence? Anaya was the person who could answer. The sections below follow the afternoon.

## The use sets the risk

Start with a simple idea. How much a system must do to be responsible does not depend on the technology. It depends on how much harm a wrong answer can cause. Lakshmi drew four rows to show it.

Table: Four levels of risk
| Level | Kind of use | What is required |
| --- | --- | --- |
| Not allowed | Scoring people for their social behaviour; certain kinds of sorting by biometrics | Not permitted, whatever safeguards are added |
| High risk | Hiring, credit decisions, access to education and essential services | Documentation, a real human check, evidence of accuracy, logging and formal assessment |
| Tell the user | Chatbots, generated images | It is enough to say that the user is dealing with a machine |
| Minimal | Most internal tools | Good ordinary practice |

Rules like these started in Europe. Since then they have reached the purchasing departments of a growing number of companies elsewhere. They work as a **risk tier**, which is a level set by the harm a wrong answer could do. The tier decides how much a system must show.

Two things about tiers surprise people. First, the use sets the tier, not the model. The same system can be low-risk as an internal answer-finder, and high-risk if someone starts using it to decide who gets a loan. Second, the tier changes when the use changes. That often happens after launch, and nobody updates the documents.

Anaya asked where the guard sits. As a helper that hides identity numbers in a chat, Lakshmi said, it is minimal. The chatbot standing behind it needs to say that it is a machine. But if someone started using the guard’s findings to decide whether a customer was trustworthy, it would become a different thing. She told Anaya to write that down. It was the most useful sentence in the folder.

## India’s law, and what the guard is not

Imran then asked the question Anaya had been avoiding. Is the guard compliant? Lakshmi asked, with what? With the law, Imran said. India’s law.

She explained that the **DPDP Act** is the Digital Personal Data Protection Act of 2023, with its Rules notified in 2025. It sets duties for any organisation that handles personal data. Those duties include clear notices, consent, security safeguards, limits on how long data is kept, a way to deal with breaches, and a good deal more.

Finding and hiding personal details does help. It lets an organisation collect and pass on less. But it is one technical piece. It is not compliance, and no tool is.

::: watch Never say "compliant"
In every document written about the guard, it is described as a privacy tool that helps an organisation collect and share less personal data. It is never described as making anyone compliant, whether Sahaj, a customer or anyone else. Lakshmi said that if a salesman ever wrote that sentence about the guard, she would find out. Anaya put the rule on the first line of a page, and later in the specification, the system card and the front of a website that did not yet exist.
:::

## One page

The document at the centre of the folder is a single page. It is called a **system card**. It says what the system is for, what data it uses, how it was tested and what it gets wrong. Anything above the minimal tier needs one.

Anaya had never written one. But she had been collecting its contents for six months without knowing it. She wrote it in an hour in front of the others, using numbers from the answer key.

::: case Bharat Privacy Guard: system card
**What it is for.** Noticing personal details in customer messages in English, Hindi and Hinglish, and hiding them before the messages are stored or sent on.

**What it uses.** Customer chat messages. It stores no message text of its own.

**How it was tested.** On a hand-marked answer key of 204 rows, version 7, which includes scanned and mixed-language examples.

**Known limitations.** Misses about one in ten names written in Roman Hindi with "ji". Hides some order numbers wrongly. Does not read photographs. Has not been tested on Tamil, Bengali, Telugu, Marathi or Gujarati.

**Out of scope.** It must not be used to decide anything about a customer. It does not make Sahaj, or any user, compliant with any law.
:::

Lakshmi asked Anaya to read the limitations aloud. Then she said this was the part that made her trust the rest. Anyone can say what a system does well. A list of real failures, with evidence behind each one, tells the reader that someone has actually looked. That is why the limitations section is the hardest to fake and the most believable.

The out-of-scope line is the most useful of all. It stops the use from drifting into a higher tier without anyone noticing.

## Finding Mr. Deshpande

Lakshmi then set a drill. She slid a card across the table with the name of a real customer on it. Mr. Deshpande was an old man in Satara. In June he had written to Sahaj asking for his data to be removed, and he had been promised it would be. It had not yet been done. Anaya was to pretend the request had just arrived, and find everywhere he lived.

That is a **deletion drill**. You find every place one person’s data is stored, so you learn which places you cannot reach. A person’s data may sit in seven places: the original documents, the chunks cut from them, the search index, the cache, the provider’s logs, the company’s own logs, and any test set built from real traffic. Many teams find that at least two of these are out of their reach.

Table: Where Mr. Deshpande's data could be
| Place | Could Sahaj delete it? |
| --- | --- |
| Support system | Yes, a row can be deleted |
| Chat history | Yes |
| Search index | It held only policies, so nothing to delete |
| Cache | Temporary |
| Sahaj's own logs | Yes, by customer number, with a day's work |
| The outside company's logs | No. According to its terms they stay thirty days, and Sahaj cannot shorten that |

Then Anaya remembered something, and she went cold. In June she had printed a hundred outputs so that she and Farah could read and mark them. They were in the lower drawer of her desk. They came from exported chats, and they carried real names.

Lakshmi said it is always this one. Someone copies real data into something, for a good reason, and nothing in the copy points back to a person. Test sets and printouts are the places most often forgotten. The provider’s caches are the hardest to see.

Anaya shredded the printouts that evening with Farah as a witness, and wrote the date in the log. Then she added a line to the process that had caused the problem. When data is collected, record where every piece came from, because you cannot rebuild that later. A deletion request that cannot be completed is a failure with a date on it.

## A person who can say no

Lakshmi had two more matters, and she took them briskly.

The first was **human oversight**. Everyone writes “a human reviews every output”, and Anaya had written it in the first draft of the PRD. Lakshmi asked how long one reviewer would last with four thousand outputs a day. In her experience, about two weeks. After that the reviewer starts approving without reading. The document still claims that a human checks everything, when really nobody does. That is worse than not making the claim.

Oversight that works is targeted. It sends a person the outputs that are uncertain, or that would do the most harm, or where what was found does not match what was answered. It shows the reviewer the evidence as well as the answer. And it lets the reviewer reject, not just watch. A person who can see and refuse is human oversight. A person who watches things go by is decoration. For the guard, this meant the unsure cases, a few in a hundred, with the sentence and the proposed action side by side and two buttons.

The second matter was something Lakshmi had seen in every company she had worked in. Staff use consumer AI tools on their own, usually by pasting in internal documents. They do it because the tools are useful and nothing the company provides is as good. This is **shadow AI**. Banning it rarely works, because a ban changes the policy and not the behaviour.

Farah raised her hand, a little sheepishly. Her team pasted customers’ Hinglish into a translation site, to be sure they were replying properly. She had told them not to, and they had said fine, and they still did. Lakshmi said that was because it works. Then she asked what would make them stop.

Anaya said it would take a paste box that was as good, and that cleaned what was pasted before it went anywhere. “Then you have your second product,” said Lakshmi. For the first time that afternoon, she smiled.

## Summary

How much a system must show depends on how much harm a wrong answer could do. The use decides that, not the technology. The same tool can be harmless in one use and serious in another, and its tier changes when its use changes.

- India’s data protection law asks for much more than finding and hiding personal details. So a privacy tool must never be described as making anyone compliant.
- A one-page system card says what a system is for, how it was tested, what it gets wrong and what it must not be used for. Its list of real failures is what makes it believable.
- A deletion drill finds the places where a person’s data lives that you cannot reach. The forgotten ones are usually copies made for a good reason.
- Human oversight works only if the reviewer sees the evidence and can say no.
- Where people already use tools that have not been approved, the cure is an approved alternative that is better.

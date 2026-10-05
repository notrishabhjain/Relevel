---
title: Rules, Risk and Responsibility
summary: The compliance head explains what twenty years in a bank taught her about paperwork, and the team writes the one-page document that says what the guard is for, what it gets wrong and what it must never be used to do. Then they try to delete one customer and find where that customer's data lives. The chapter covers risk tiers, India's data protection law, system cards, deletion drills, human oversight and shadow AI.
course: ch17
goals:
  - explain how the use of a system, not its technology, sets its risk tier
  - say what India's data protection law asks of an organisation, and why a privacy tool must not be described as making anyone compliant
  - write a one-page system card whose list of known limitations is evidence-based
  - run a deletion drill, design human oversight that can actually reject, and respond to shadow AI with a better sanctioned tool
terms:
  - risk tier | a level, set by how much harm a wrong answer could do, that decides how much documentation, checking and evidence a system needs; the use sets the tier, not the technology | risk tiers
  - system card | a one-page description of an AI system: what it is for, what data it uses, how it was tested, what it gets wrong and what it must not be used for | system cards
  - deletion drill | pretending a customer has asked for their data to be deleted and finding every place it lives, to learn which ones you cannot reach | 
  - human oversight | a person who can see the evidence for an output, and can reject it; watching outputs go by does not count | 
  - shadow AI | staff using consumer AI tools on their own, often by pasting in internal documents, because the tools are useful and nothing sanctioned is as good | 
  - DPDP Act | India's Digital Personal Data Protection Act, 2023, which sets duties for organisations that handle personal data, far beyond finding and hiding it | Digital Personal Data Protection Act
---

On the first Tuesday of August Lakshmi Iyer opened a long afternoon with a saying from her years in a bank: if it is not written down, it did not happen. Imran Qureshi had brought a laptop, Anaya had brought the answer key, now at two hundred and four rows, and Farah Sheikh had come with a bag of roasted peanuts and no particular business being there, and had been allowed to stay.

Lakshmi said that she had spent twenty years as the person who asked for paperwork, and that people thought she was slowing things down. What she was doing was making sure that when something went wrong, someone could say what the system was for, what it was supposed to do and what had been tested. A regulator does not mind a failure. It minds a failure that nobody can explain. A machine that reads and writes text now arrives with a folder of such questions, and most people assume the legal team writes the answers. Almost every question in it is a product question, and Lakshmi could write the sentences but could not answer the questions.

## The case: a folder of product questions

The folder asked what the system is for, who it affects, what happens when it is wrong, and who checks it and with what evidence. Anaya was the person who could answer. The sections below follow the afternoon.

## The use sets the risk

How much a system must do to be responsible does not depend on the technology. It depends on how much harm a wrong answer can cause. Lakshmi drew four rows.

Table: Four levels of risk
| Level | Kind of use | What is required |
| --- | --- | --- |
| Not allowed | Scoring people for their social behaviour; certain kinds of sorting by biometrics | Not permitted, whatever safeguards are added |
| High risk | Hiring, credit decisions, access to education and essential services | Documentation, a real human check, evidence of accuracy, logging and formal assessment |
| Tell the user | Chatbots, generated images | It is enough to say that the user is dealing with a machine |
| Minimal | Most internal tools | Good ordinary practice |

Rules of this kind have spread, first in Europe and then through the purchasing departments of a growing number of companies elsewhere, and they work as a *risk tier*: a level set by the harm of a wrong answer, which decides how much a system must show.

Two consequences surprise people. The first is that the use sets the tier and not the model. The same system can be low-risk as an internal answer-finder and high-risk if someone begins using it to decide who gets a loan. The second is that the tier changes when the use changes, which often happens after launch without anyone updating the documents.

Anaya asked where the guard sits. As a helper that hides identity numbers in a chat, said Lakshmi, it is minimal, and the chatbot it stands in front of needs to say that it is a machine. If someone began using the guard's findings to decide whether a customer was trustworthy, it would be a different thing. She told Anaya to write that down: it was the most useful sentence in the folder.

## India's law, and what the guard is not

Imran asked the question that Anaya had been avoiding: is the guard compliant? Lakshmi asked, with what? With the law, said Imran, India's.

The *DPDP Act* is the Digital Personal Data Protection Act of 2023, with its Rules notified in 2025. It sets duties for any organisation that handles personal data: clear notices, consent, security safeguards, limits on how long data is kept, a way to deal with breaches, and a good deal more. Finding and hiding personal details helps an organisation collect and pass on less. It is one technical piece. It is not compliance, and no tool is.

::: watch Never say "compliant"
In every document written about the guard, it is described as a privacy tool that helps an organisation collect and share less personal data. It is never described as making anyone compliant, whether Sahaj, a customer or anyone else. Lakshmi said that if a salesman ever wrote that sentence about the guard, she would find out. Anaya put the rule on the first line of a page, and later in the specification, the system card and the front of a website that did not yet exist.
:::

## One page

The document at the centre of the folder is a single page, the *system card*. It says what the system is for, what data it uses, how it was tested and what it gets wrong. Anything above the minimal tier needs one. Anaya had never written one, but she had been collecting its contents for six months without knowing. She wrote it in an hour in front of the others, using numbers from the answer key.

::: case Bharat Privacy Guard: system card
**What it is for.** Noticing personal details in customer messages in English, Hindi and Hinglish, and hiding them before the messages are stored or sent on.

**What it uses.** Customer chat messages. It stores no message text of its own.

**How it was tested.** On a hand-marked answer key of 204 rows, version 7, which includes scanned and mixed-language examples.

**Known limitations.** Misses about one in ten names written in Roman Hindi with "ji". Hides some order numbers wrongly. Does not read photographs. Has not been tested on Tamil, Bengali, Telugu, Marathi or Gujarati.

**Out of scope.** It must not be used to decide anything about a customer. It does not make Sahaj, or any user, compliant with any law.
:::

Lakshmi asked Anaya to read the limitations aloud, and then said that this is the part that makes her trust the rest. The limitations section is the hardest to fake and the most credible: anyone can say what a system does well, and a list of real failures with evidence behind each tells the reader that someone has looked. The out-of-scope line is the most useful, because it stops the use from drifting into a higher tier without anyone noticing.

## Finding Mr. Deshpande

Lakshmi then set the drill. She slid across the table a card bearing the name of a real customer, Mr. Deshpande, an old man in Satara who had written to Sahaj in June asking for his data to be removed and had been promised that it would be. It had not yet been done. Anaya was to pretend the request had just arrived and find everywhere he lived.

A *deletion drill* finds every place one person's data is stored in order to learn which places cannot be reached. A person's data may be in seven places: the original documents, the chunks cut from them, the search index, the cache, the provider's logs, the company's own logs, and any test set built from real traffic. Many teams find that at least two of these are out of their reach.

Table: Where Mr. Deshpande's data could be
| Place | Could Sahaj delete it? |
| --- | --- |
| Support system | Yes, a row can be deleted |
| Chat history | Yes |
| Search index | It held only policies, so nothing to delete |
| Cache | Temporary |
| Sahaj's own logs | Yes, by customer number, with a day's work |
| The outside company's logs | No. According to its terms they stay thirty days, and Sahaj cannot shorten that |

Then Anaya remembered something and went cold. In June she had printed a hundred outputs so that she and Farah could read and mark them. They were in the lower drawer of her desk. They came from exported chats and they bore real names. Lakshmi said that this is always the one: someone copied real data into something, for a good reason, and nothing in it points back to a person. Test sets and printouts are the places most often forgotten, and the provider's caches are the hardest to see.

Anaya shredded the printouts that evening with Farah as a witness and wrote the date in the log. She then added a line to the process that had caused the problem: record where every piece of data came from when it is collected, because it cannot be reconstructed later. A deletion request that cannot be completed is a failure with a date on it.

## A person who can say no

Lakshmi had two more matters, and took them briskly.

The first was human oversight. Everyone writes "a human reviews every output", and Anaya had written it in the first draft of the PRD. Lakshmi asked how long one reviewer would last with four thousand outputs a day. About two weeks, in her experience, after which the reviewer starts approving without reading, and the document claims that a human checks everything when none does. That is worse than not claiming it.

Oversight that works is targeted. It routes to a person the outputs that are uncertain, or would do the most harm, or where what was found does not match what was answered. It shows the reviewer the evidence as well as the answer. And it lets the reviewer reject, not merely watch. A person who can see and refuse is *human oversight*. A person who watches things go by is decoration. For the guard it meant the unsure cases, a few in a hundred, with the sentence and the proposed action side by side and two buttons.

The second matter was something Lakshmi had seen in every company in which she had worked. Staff use consumer AI tools on their own, usually by pasting in internal documents, because the tools are useful and nothing the company provides is as good. This is *shadow AI*, and banning it rarely works, because it changes the policy and not the behaviour.

Farah raised her hand, a little sheepishly. Her team pasted customers' Hinglish into a translation site to be sure they were replying properly. She had told them not to and they had said fine, and they still did. Lakshmi said it was because it works, and asked what would make them stop. Anaya said it would take a paste box that was as good and that cleaned what was pasted before it went anywhere. "Then you have your second product," said Lakshmi, and for the first time that afternoon she smiled.

## Summary

How much a system must show depends on how much harm a wrong answer could do, and the use decides that and not the technology. The same tool can be harmless in one use and serious in another, and it changes tier when its use changes.

- India's data protection law asks for much more than finding and hiding personal details, so a privacy tool must never be described as making anyone compliant.
- A one-page system card says what a system is for, how it was tested, what it gets wrong and what it must not be used for. Its list of real failures is what makes it credible.
- A deletion drill finds the places where a person's data lives that cannot be reached. The forgotten ones are usually copies made for a good reason.
- Human oversight works only if the reviewer sees the evidence and can say no.
- Where people already use tools that have not been approved, the cure is a sanctioned alternative that is better.

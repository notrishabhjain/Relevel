---
title: Rules, Risk and Responsibility
summary: Lakshmi explains what twenty years in a bank taught her about paperwork, and the team writes the one-page document that says what the guard is for, what it gets wrong, and what it must never be used to do. Then they try to delete one customer, and find where she lives.
course: ch17
terms:
  - risk tier | a level, set by how much harm a wrong answer could do, that decides how much documentation, checking and evidence a system needs; the use sets the tier, not the technology | risk tiers
  - system card | a one-page description of an AI system: what it is for, what data it uses, how it was tested, what it gets wrong and what it must not be used for | system cards
  - deletion drill | pretending a customer has asked for their data to be deleted and finding every place it lives, to learn which ones you cannot reach | 
  - human oversight | a person who can see the evidence for an output, and can reject it; watching outputs go by does not count | 
  - shadow AI | staff using consumer AI tools on their own, often by pasting in internal documents, because the tools are useful and nothing sanctioned is as good | 
  - DPDP Act | India's Digital Personal Data Protection Act, 2023, which sets duties for organisations that handle personal data, far beyond finding and hiding it | Digital Personal Data Protection Act
---

"In the bank," said Lakshmi, "we had a saying. If it is not written down, it did not happen."

She said it at the start of a long afternoon, with the glass of water in front of her and a folder, a different folder, on the glass table. It was the first Tuesday of August. Imran had brought a laptop and Anaya had brought the answer key, now at two hundred and four rows. Farah, who had no particular business being there, had come anyway with a bag of roasted peanuts, and had been allowed to stay.

"I spent twenty years being the person who asked for paperwork," Lakshmi went on. "People thought I was slowing things down. What I was really doing was making sure that when something went wrong, which it always does, someone could say what the system was for, what it was supposed to do, and what had been tested. A regulator doesn't mind a failure. It minds a failure nobody can explain."

She put a hand on the folder. "A machine that reads and writes text now arrives with a folder like this. Most people assume the legal team writes it. They are wrong. Almost every question in it is a product question. What is this for? Who does it affect? What happens when it is wrong? Who checks it, and what shows that it works? I can write the sentences. I cannot answer the questions. You can."

## The use sets the risk

Her first point was one that Anaya had half-expected and half-dreaded. How much a system must do to be responsible does not depend on the technology. It depends on how much harm a wrong answer can cause.

She drew four rows. At the top, uses that are not allowed at all, whatever safeguards are added: scoring people for their social behaviour, certain kinds of sorting by biometrics. Below that, uses that carry a high risk, such as hiring, credit decisions, access to education and essential services, which need documentation, a real human check, evidence of accuracy, logging and formal assessment. Below that, uses where it is enough to say that the user is talking to a machine: chatbots, generated images. And at the bottom, minimal risk, where good ordinary practice is enough: most internal tools. Rules of this kind have been spreading, in Europe first and in a growing number of purchasing departments elsewhere, and they work as a *risk tier*: a level set by the harm of a wrong answer, which decides how much a system must show.

"Two consequences surprise people," said Lakshmi. "The first is that the use sets the tier, not the model. The same system can be low-risk as an internal answer-finder and high-risk if somebody starts using it to decide who gets a loan. The second is that the tier changes when the use changes. That often happens after launch, without anyone updating the documents."

"Where does the guard sit?" asked Anaya.

"Minimal, as a helper that hides identity numbers in a chat. The chatbot it stands in front of needs to say that it is a machine. If someone began using the guard's findings to decide whether a customer was trustworthy, it would be a different thing." Lakshmi looked at her. "Write that down. It is the most useful sentence in this folder."

## India's law, and what the guard is not

At this point Imran asked the question Anaya had been avoiding, and she was grateful to him.

"So is the guard compliant?"

"With what?" said Lakshmi.

"With the law. India's."

"There's the *DPDP Act*," she said: the Digital Personal Data Protection Act of 2023, with its Rules notified in 2025. "It sets duties for any organisation that handles personal data. Clear notices. Consent. Security safeguards. Limits on how long you may keep data. A way to deal with breaches. A good deal more. Finding and hiding personal details helps an organisation collect and pass on less. It is one technical piece. It is not compliance, and no tool is."

She stopped, and said it in a way that left no room for misunderstanding.

"So in every document you write about this, you say it is a privacy tool that helps an organisation collect and share less personal data. You do not say it makes anyone compliant. Not Sahaj, not a customer, not anyone. If a salesman ever writes that sentence about the guard, I will find out."

Anaya wrote it on the first line of a page, and underlined it, and later put it into the specification, the system card and the front of the website that did not yet exist.

## One page

The document at the heart of the folder is one page. It is called a *system card*. It says what the system is for, what data it uses, how it was tested, and what it gets wrong. For anything above the minimal tier you need one. Anaya had never written one, but she had been collecting its contents without knowing it for six months.

She wrote it in an hour, in front of them, with the numbers from the answer key.

> **Bharat Privacy Guard — system card.**
> *What it is for.* Noticing personal details in customer messages in English, Hindi and Hinglish, and hiding them before the messages are stored or sent on.
> *What it uses.* Customer chat messages. It stores no message text of its own.
> *How it was tested.* On a hand-marked answer key of 204 rows, version 7, which includes scanned and mixed-language examples.
> *Known limitations.* Misses about one in ten names written in Roman Hindi with *ji*. Hides some order numbers wrongly. Does not read photographs. Has not been tested on Tamil, Bengali, Telugu, Marathi or Gujarati.
> *Out of scope.* It must not be used to decide anything about a customer. It does not make Sahaj, or any user, compliant with any law.

"Read the limitations aloud," said Lakshmi.

Anaya did.

"That is the part that makes me trust the rest," said Lakshmi. "The section on known limitations is the hardest to fake, and the most credible. Anyone can say what a system does well. A list of real failures with evidence behind each one tells me that someone has looked. And the *out of scope* line is the most useful, because it stops the use from drifting into a higher tier without anyone noticing."

## Finding Mr. Deshpande

"Now," said Lakshmi, "the drill."

She slid a card across the table. On it was the name of a customer, a real one, Mr. Deshpande, an old man in Satara who had written to Sahaj in June asking for his data to be removed, and had received a polite reply and a promise. It had not yet been done. "Pretend that has just arrived. Find everywhere he lives."

*Deletion drill* is the name for this: finding every place one person's data is stored, in order to learn which ones you cannot reach. When someone asks for their data to be deleted, it may be in seven places. The original documents. The chunks cut from them. The search index. The cache. The provider's logs. Your own logs. And any test set built from real traffic. Many teams find that at least two of these are out of their reach.

They worked through them with a marker. The support system: yes, a row could be deleted. The chat history: yes. The search index held only policies. The cache: temporary. Sahaj's own logs: they could delete by customer number, with a day's work. The outside company's logs: that, according to its terms, was thirty days away, and Sahaj could not shorten it.

Then Anaya remembered something and went cold.

"The printouts."

Imran looked at her.

"The hundred outputs. In June. I printed them so Farah and I could read and mark them. They are in the lower drawer of my desk. They came from the exported chats. They have real names."

Nobody spoke. Farah put down a peanut.

"That's the one," said Lakshmi. "It's always the one. Someone copied real data into something, for a good reason, and nothing in it points back to a person. Test sets and printouts are the ones most often forgotten, and the provider's caches are the hardest to see."

Anaya shredded them that evening, with Farah as witness, and wrote the date in the log. Then she added a line to the process that had caused it. *Record where every piece of data came from when it is collected. You cannot reconstruct it later.* A deletion request you cannot complete is a failure with a date on it.

## A person who can say no

Lakshmi had two more things, and she took them briskly.

The first was human oversight. Everyone writes the sentence *a human reviews every output*. Anaya had written it in the first draft of the PRD.

"Four thousand outputs a day," said Lakshmi. "One reviewer. How long does that last?"

"Not long."

"About two weeks, in my experience. Then the reviewer starts approving without reading, and the document says a human checks everything, and it isn't true. That is worse than not claiming it." Oversight that works is targeted. Route to a person the outputs that are uncertain, or that would do the most harm, or where what was found does not match what was answered. Show the reviewer the evidence as well as the answer. And let them reject, not merely watch. A person who can see and refuse is *human oversight*. A person who watches things go by is decoration.

For the guard that meant the unsure cases, the few in a hundred, with the sentence and the proposed action side by side and two buttons.

The second was something she had seen in every company she had worked at. Staff use consumer AI tools on their own, usually by pasting in internal documents, because the tools are useful and nothing the company provides is as good. This is *shadow AI*. Banning it rarely works. It changes the policy but not the behaviour.

"What do we have that is like that?" asked Anaya.

Farah put her hand up, a little sheepishly. "My team paste customers' Hinglish into a translation site. To be sure they are replying properly. I told them not to, and they said fine, and they still do."

"Because it works," said Lakshmi. "What would it take for them to stop?"

Anaya thought. "A paste box that was as good. That cleaned what you pasted before it went anywhere."

"Then you have your second product," said Lakshmi, and, for the first time that afternoon, she smiled.

## What to carry forward

How much a system must show depends on how much harm a wrong answer could do, and the use decides that, not the technology. The same tool can be harmless as one thing and serious as another, and changes tier when its use changes. India's data protection law asks for much more than finding and hiding personal details, so a privacy tool must never be described as making anyone compliant. A one-page system card says what a system is for, how it was tested, what it gets wrong and what it must not be used for, and its list of real failures is what makes it credible. A deletion drill finds the places a person's data lives that you cannot reach, and the forgotten ones are usually copies made for a good reason. Human oversight works only if the reviewer sees the evidence and can say no. And where people are already using tools you have not approved, the cure is a sanctioned alternative that is better.

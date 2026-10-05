---
title: Paper, Photos and Scans
summary: Until now every sentence the guard read was already text. A random sample of fifty attachments shows how seldom that is true of real traffic, and how a capital O standing in for a zero can walk a number past a rule. The chapter introduces OCR and the document audit.
course: ch16
goals:
  - explain why a project that depends on documents should begin with a document audit
  - describe what OCR does and the typical mistakes it makes
  - correct look-alike characters before a pattern rule is applied
  - compare reading a page as text with showing the page to a model as a picture, and say what voice changes
terms:
  - OCR | optical character recognition: software that turns a picture of text into text, usually with a few mistakes | text extraction, text extractor
  - document audit | counting, from a random sample, how much of a collection is clean digital text, how much is scanned, and how much has its meaning in tables and layout, before anything is built | 
---

For the first six months of the year Anaya's mental picture of a customer's message was a few lines of text on a phone. She had never examined it. It came from the transcripts, which are text by nature, and from the answer key, which was a column of sentences. Everything the team had built so far, each rule and each test, rested on one quiet assumption: that someone had already turned the customer's words into characters.

On a Friday in July Farah Sheikh put in front of her a sheet that did not look like a sentence at all. It was a photograph that a customer had taken of a bank passbook on a kitchen table, slightly tilted, with window light across one corner, and sent to the chatbot with the words "account number check karo". Nothing in it was text. It was a grid of pixels that looked, to a person, like a table with a name, an account number and a branch. "We get a lot of these," said Farah. Anaya asked how many that was. Farah said she did not know and had thought Anaya would want to find out.

## The case: a passbook on a kitchen table

Anaya did the sensible thing and asked for a random sample. This chapter reports what it showed, what happened to a number when a machine read it from a photograph, and where the limits of the existing design lay.

## Fifty at random

She asked Farah to pull fifty attachments at random from the past month's chats: not the interesting ones, and not those an enthusiastic colleague would choose, but fifty chosen by a number generator from real traffic. She examined them one by one on a Saturday morning with the shutters half down against the heat.

::: def Document audit
Before any project that depends on documents, three numbers are worth having. What share of the documents is clean digital text that can be read as it stands? What share is scanned or photographed, so that it must first be turned into text? And what share of the information people need is locked inside tables, forms and layouts, where the meaning depends on which box sits beside which? Finding out, from a random sample, is a *document audit*. It takes an afternoon, and almost nobody does it.
:::

They sorted the fifty into piles.

Table: What fifty random attachments were
| What it was | Count |
| --- | --- |
| Clean digital files, such as a statement downloaded from a bank | 12 |
| Photographs of cards, cheques and passbooks | 31 |
| Screenshots of other apps | 7 |

Thirty-one of fifty, a little over six in ten, were photographs, and nearly all of them carried in the first line the kind of detail the guard existed to find. Anaya said that this was the part she had got wrong. In April she had placed photographs of cards under "Could" because she believed they were rare. Imran said she had not had the number. She said she had had a feeling. She moved the line from "Could" to "Should" and wrote the reason beside it: sixty-two percent of a random sample, checked on 12 July. In a document largely concerned with the failure of confident impressions, this was a small private triumph.

## The step before the step

A picture cannot be read by a rule. Something must first turn it into text. That is *OCR*, optical character recognition: software that looks at a picture of writing and returns the characters it believes it sees. It is very good and not perfect, and the mistakes it makes are of a particular and treacherous kind.

Imran took a dummy Aadhaar card that a designer in the building had mocked up with an invented number, and photographed it at a slight angle. He ran the photograph through the reader. The number on the card was 4321 5678 9012. The text that came back said "432l 5678 9O12". The reader had returned a lowercase letter l where the digit one belonged and a capital O where the zero belonged.

In many typefaces a one and an l are almost identical, and so are an O and a zero. The software guesses from the shapes. The pattern checker looks for twelve digits, and this was ten digits and two letters, so the checker would not recognise it. The real number would walk past with a perfectly clean record to show that the rule had seen nothing wrong. A PAN has the same difficulty in the other direction: it has letters in the first five places and digits in the next four, and a digit where a letter belongs breaks the shape.

The remedy was modest. Before the rule examined a number, a small step could translate the look-alikes back, on the understanding that where only digits are allowed, an O is a zero, an l is a one, an S is a five and a B is an eight. Nobody had thought to put this in the rules, because nobody typing on a phone makes that mistake. Only a machine reading a photograph does. Anaya added a family of rows to the answer key, labelled "scanned, with lookalikes", and observed that this was the first version of the key made of images.

## Two ways to read a page

Imran set out the options.

Table: Two ways to read a page
| Approach | Strengths | Weaknesses |
| --- | --- | --- |
| Turn the page into text first, then work on the text | Cheap. Everything built so far still applies: the cutting, the rules, the search | Often destroys structure. A three-column table frequently becomes one flat line. Every value survives, and which figure belongs to which row is lost |
| Give a capable model the picture of the page | Keeps the layout and can answer a question about a table or a form | Costs more per page, occasionally misreads a code, and needs a way of pointing back to the page it saw |

Many systems do both. They extract text for searching and show the picture to the model when the question concerns a table or a form.

::: watch The quiet danger of flattening
Suppose a table is flattened and the question concerns a number in one column. The search works and the model answers fluently, quoting a number from the wrong column. Nothing downstream could catch it, because nothing downstream ever sees the page.
:::

Anaya looked at the passbook photograph again. It held a name, an account number and a branch code. If a reader had put them in the wrong order she could not have said which number was which. The guard would then have hidden both, which would have been safe, or neither, which would not.

## And then there is voice

At the end of the afternoon Farah mentioned a further source. A few customers had begun to send voice notes, and the call centre had been asking about a voice assistant. Anaya had put both on the Won't list, and asked, to be fair to herself, why.

Imran said that voice changes the main constraint. In text a two-second wait is acceptable. In speech, two seconds of silence breaks the conversation and people start talking over each other. The whole round trip, speech in, thinking and speech out, has to fit inside that. The thinking machines of the summer were, as a rule, too slow. Voice is also not mainly a question of accuracy. It is a question of when a person has finished speaking, what to do if they interrupt, and what to say while the system works. It was a different problem and a different project, and the Won't stayed where it was.

## What changed

That night Anaya wrote on the board, beside the old red line and below the new row, what the audit had cost and bought. It had cost an afternoon, fifty files and a lot of tea. It had moved photographs from "Could" to "Should", taught the rules about look-alikes, and given her a rule of thumb for the future: before any project that depends on documents, count the clean ones. Imran said it was the cheapest way to avoid a project failing six weeks in, and also the most neglected, since he had never been asked for it.

## Summary

Real documents are pages and pictures far more often than clean text.

- The step that turns a picture into characters is OCR. Its mistakes are of a particular kind, such as a letter O for a zero or an l for a one, which can walk an identity number past a rule that looks for digits.
- Tables are the quietest casualty of that step, because the values survive and the relationships between them do not.
- A page can be turned into text first, which is cheap, or shown to a capable model as a picture, which keeps its layout. Many systems do both.
- Voice changes the main constraint from accuracy to time.
- Before any document project begins, a document audit, fifty files picked at random and three counts, shows what is really involved.

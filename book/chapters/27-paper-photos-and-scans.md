---
title: Paper, Photos and Scans
summary: Until now every sentence the guard read was already text. A random sample of fifty attachments shows how seldom that is true of real life, and how a capital O pretending to be a zero can walk a number straight past a rule.
course: ch16
terms:
  - OCR | optical character recognition: software that turns a picture of text into text, usually with a few mistakes | text extraction, text extractor
  - document audit | counting, from a random sample, how much of a collection is clean digital text, how much is scanned, and how much has its meaning in tables and layout, before anything is built | 
---

For the first six months of the year, Anaya's mental picture of a customer's message was a few lines of text on a phone.

It was a picture she had never examined. It had come from the transcripts, which are, by their nature, text, and from the answer key, which was a column of sentences. Everything she had built so far, every rule and every test, depended on one quiet assumption: that someone had already turned the customer's words into characters.

On a Friday in July Farah put a sheet of paper in front of her that did not look like a sentence at all.

It was a photograph. A customer had taken a picture of a bank passbook on a kitchen table, slightly tilted, with the light of a window across one corner, and sent it to the chatbot with the words *account number check karo.* Nothing in it was text. It was a grid of pixels that happened to look, to a person, like a table with a name, an account number and a branch.

"We get a lot of these," said Farah.

"How many is a lot?"

"I don't know," said Farah. "I thought you'd want to know."

## Fifty at random

She did the sensible thing. She asked Farah to pull fifty attachments at random from the past month's chats. Not the interesting ones. Not the ones an enthusiastic colleague would choose. Fifty chosen by a number generator, from the real traffic, looked at one by one on a Saturday morning with the shutters half down against the heat.

The sort is simple to describe and quietly important. Before any project that depends on documents, there are three numbers worth having. What share of the documents is clean digital text that can be read as it stands? What share is scanned or photographed, so that it must be turned into text first? And what share of the information people need is locked inside tables, forms and layouts, where the meaning depends on which box sits next to which? Doing this is a *document audit*. It takes an afternoon. Almost nobody does it.

They sorted the fifty into piles.

| What it was | Count |
| --- | --- |
| Clean digital files, such as a statement downloaded from a bank | 12 |
| Photographs of cards, cheques and passbooks | 31 |
| Screenshots of other apps | 7 |

Thirty-one of the fifty, a little over six in ten, were photographs. And nearly all of those carried, in the very first line, the kind of detail the guard existed to find.

"That's the part I got wrong," said Anaya. "I wrote *photographs* under *Could* in April. Photographs of cards. Because I thought they were rare."

"You didn't have the number."

"No." She picked up a pencil. "I had a feeling."

She moved the line from *Could* to *Should*. In a document that had been largely about the failure of confident impressions, this was a small private triumph, and she wrote the reason beside it in plain words. *Sixty-two percent of a random sample. Checked on 12 July.*

## The step before the step

A picture cannot be read by a rule. Something must first turn it into text, and that something is called *OCR*, optical character recognition. It is software that looks at a picture of writing and returns the characters it believes it sees. It is very good. It is not perfect, and the mistakes it makes are of a particular, treacherous kind.

Imran took one of the cards from the pile, a dummy Aadhaar card that a designer in the building had mocked up with an invented number, and photographed it with his phone at a slight angle. He ran the photograph through the reader and put the result on the screen.

The number on the card was 4321 5678 9012. The text that came back said **432l 5678 9O12**.

Anaya read it three times. A lowercase letter *l* where the digit one belonged. A capital *O* where the zero belonged.

"The reader mistook them," she said.

"Of course. In many typefaces, a one and an *l* are almost identical. So are an *O* and a zero. The software guesses from the shapes. And what do you suppose the pattern checker does with that?"

She saw it as he said it. The rule looked for twelve digits. This was ten digits and two letters. It would not recognise it, and the real number would walk straight past, with a perfectly clean record to show that the rule had seen nothing wrong.

"It's a spelling mistake, but in a number."

"A PAN has the same problem in the other direction. A PAN has letters in its first five places and a digit in the next four. If the reader puts a digit where a letter should be, the shape is no longer a PAN."

The cure was a modest one. Before the rule looked at a number, a small step could translate the look-alikes back, on the understanding that in a place where only digits were allowed, an *O* was a zero, an *l* was a one, an *S* was a five and a *B* was an eight. It was a thing that no one had thought to put in the rules, because nobody typing on a phone makes that mistake. Only a machine reading a photograph does. She added a family of rows to the answer key, with names to remind her: *scanned, with lookalikes.* It was the fourth version, and it was the first one made of images.

## Two ways to read a page

Imran drew the options.

You can turn the page into text first, and then work on the text. This is cheap. It lets you use everything built so far: the cutting, the rules, the search. But it often destroys the structure. A reader looking at a three-column table frequently produces one flat line of characters. Every value survives. Which figure belongs to which row is lost.

Or you can give a capable model the picture of the page itself. This costs more per page, but it keeps the layout, and it can answer a question about a table or a form. It occasionally misreads a code, and it needs a way of pointing back to the page it saw.

Many systems do both. They extract text for searching, and show the picture to the model when the question is about a table or a form.

"There's a quieter danger in the first way," Imran said. "Say a table is flattened, and the question is about a number in one column. Search works. The model answers fluently. It quotes a number, from the wrong column. Nothing downstream could catch it, because nothing downstream ever sees the page."

Anaya looked at the passbook photograph again. Name, account number, branch code. If a reader had put these in the wrong order, she would have been unable to say which number was which. The guard would have hidden both, which would have been safe, or neither, which would not.

## And then there is voice

At the end of the afternoon Farah mentioned the other thing. A few customers had begun to send voice notes. The call centre had been asking about a voice assistant. Anaya had put both on the *Won't* list, and she asked, to be fair to herself, why.

"Because voice changes the main constraint," said Imran. "In text, a two-second wait is fine. In speech, two seconds of silence breaks the conversation and people start talking over each other. The whole round trip has to fit inside that: speech in, thinking, speech out. And the thinking machines from the summer are, as a rule, too slow."

Voice, he added, is not mainly a question of accuracy. It is a question of when a person has finished speaking, of what to do if they interrupt, of what to say while the system works. It was a different problem and a different project. The *Won't* stayed where it was.

## What changed

On the board that night, beside the old red line and below the new row, Anaya wrote down what the audit had cost and bought.

It had cost an afternoon, fifty files and a lot of tea. It had moved photographs from *Could* to *Should*, taught the rules about the lookalikes, and given her a rule of thumb for the next time: before any project that depends on documents, count the clean ones.

"It's the cheapest way to avoid a project failing six weeks in," she said.

"It is also the most neglected," said Imran. "I have never been asked for it."

## What to carry forward

Real documents are pages and pictures far more often than clean text. The step that turns a picture into characters is called OCR, and its mistakes are of a particular kind, such as a letter O for a zero or an l for a one, which can walk an identity number straight past a rule that looks for digits. Tables are the quietest casualty of that step, because the values survive and the relationships between them do not. A page can be turned into text first, which is cheap, or shown to a capable model as a picture, which keeps its layout, and many systems do both. Voice changes the main constraint from accuracy to time. And before any document project begins, a document audit, which is fifty files picked at random and three counts, tells you what you are really dealing with.

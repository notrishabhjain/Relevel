---
title: Paper, Photos and Scans
summary: Until now, the guard only read text. Anaya checks fifty random attachments and finds that real traffic is mostly photographs. She also sees how a capital O in place of a zero can slip a number past a rule. This chapter teaches OCR and the document audit.
course: ch16
goals:
  - see why a project that depends on documents should start with a document audit
  - say what OCR does, and the mistakes it usually makes
  - fix look-alike characters before a pattern rule runs
  - compare reading a page as text with showing the page to a model as a picture, and say what voice changes
terms:
  - OCR | like a clerk who reads a photo aloud and types what they hear; optical character recognition is software that turns a picture of text into text, usually with a few mistakes | text extraction, text extractor
  - document audit | like counting what is in a godown before you plan the shelves; you take a random sample and count how much is clean digital text, how much is scanned, and how much hides its meaning in tables and layout | 
---

For four months, Anaya pictured a customer's message as a few lines of text on a phone. She had never checked. The picture came from the transcripts (the saved chats), which are text. It also came from the answer key, which was a column of sentences. Everything the team had built stood on one quiet guess. Someone had already turned the customer's words into characters.

On a Friday in July, Farah Sheikh put a sheet in front of her. It did not look like a sentence at all. It was a photograph of a bank passbook (the small book a bank gives you) on a kitchen table. It was slightly tilted. Window light fell across one corner. A customer had sent it to the chatbot with the words "account number check karo".

Nothing in it was text. It was a grid of tiny coloured dots called pixels. To a person, it looked like a table with a name, an account number and a branch. "We get a lot of these," said Farah. Anaya asked how many. Farah did not know. She had thought Anaya would want to find out.

## The case: a passbook on a kitchen table

Anaya did the sensible thing. She asked for a random sample. In this chapter you see what it showed. You see what happened to a number when a machine read it from a photograph. And you see where the old design ran out.

## Fifty at random

Think of tasting rice from a sack. You take a fistful from different places, not just the top. A random sample works the same way.

She asked Farah to pull fifty attachments at random from the past month's chats. They were not to be the interesting ones. They were not to be the ones a keen colleague would pick. A number generator picked all fifty from real traffic. On Saturday morning Anaya went through them one by one. The shutters were half down against the heat.

::: def Document audit
Before any project that depends on documents, get three numbers. First, how much is clean digital text that can be read as it is? Second, how much is scanned or photographed, so it must first be turned into text?

Third, how much of what people need sits inside tables, forms and layouts? There, the meaning depends on which box sits next to which. Counting these from a random sample is a *document audit*. It takes an afternoon. Almost nobody does it.
:::

They sorted the fifty into piles.

Table: What fifty random attachments were
| What it was | Count |
| --- | --- |
| Clean digital files, such as a statement downloaded from a bank | 12 |
| Photographs of cards, cheques and passbooks | 31 |
| Screenshots of other apps | 7 |

Thirty-one of fifty were photographs. That is a little over six in ten. Almost all of them held, in the first line, the kind of detail the guard existed to find.

Anaya said she had got this wrong. In April she had put photographs of cards under "Could". She thought they were rare. Imran said she had not had the number. She said she had had a feeling.

She moved the line from "Could" to "Should". Beside it she wrote the reason: sixty-two percent of a random sample, checked on 12 July. Her document was mostly about the failure of sure-sounding impressions. So this felt like a small, private win.

## The step before the step

A rule cannot read a picture. Something must first turn the picture into text. That is *OCR*, short for optical character recognition. Think of a clerk who looks at a photo, reads it aloud and types what he hears. OCR is software that does this. It looks at a picture of writing and returns the characters it thinks it sees. It is very good, but not perfect. Its mistakes are of one odd and tricky kind.

Imran took a dummy Aadhaar card. A designer in the building had made it with an invented number. He photographed it at a slight angle. He ran the photograph through the reader. The number on the card was 4321 5678 9012. The text that came back said "432l 5678 9O12". The reader gave a small letter l where the digit one belonged. It gave a capital O where the zero belonged.

In many typefaces (styles of letters), a one and an l look almost the same. So do an O and a zero. The software guesses from the shapes. The pattern checker looks for twelve digits. This was ten digits and two letters. So the checker did not see it. The real number would walk past. The record would look perfectly clean, as if the rule had found nothing wrong.

A PAN has the same trouble the other way round. It has letters in the first five places and digits in the next four. A digit where a letter belongs breaks the shape.

The fix was small. Before the rule looks at a number, a small step can turn the look-alikes back. Where only digits are allowed, an O is a zero. An l is a one. An S is a five. A B is an eight. Nobody had put this in the rules. Nobody typing on a phone makes that mistake. Only a machine reading a photograph does.

Anaya added a set of rows to the answer key. She labelled them "scanned, with lookalikes". It was the first version of the key made of images.

## Two ways to read a page

Think of two ways to copy a form. You can type its words into a notebook. Or you can photocopy the whole page. Imran set out the two options.

Table: Two ways to read a page
| Approach | Strengths | Weaknesses |
| --- | --- | --- |
| Turn the page into text first, then work on the text | Cheap. Everything built so far still works: the cutting, the rules, the search | Often destroys structure. A table with three columns often becomes one flat line. Every value survives. Which figure belongs to which row is lost |
| Give a capable model the picture of the page | Keeps the layout. Can answer a question about a table or a form | Costs more per page. Sometimes misreads a code. Needs a way to point back to the page it saw |

Many systems do both. They pull out the text for searching. They show the picture to the model when the question is about a table or a form.

::: watch The quiet danger of flattening
Say a table is flattened. The question is about a number in one column. The search works. The model answers smoothly, but quotes a number from the wrong column. Nothing further down the line can catch it. Nothing further down ever sees the page.
:::

Anaya looked at the passbook photograph again. It held a name, an account number and a branch code. Suppose a reader had put them in the wrong order. She could not have said which number was which. The guard would then have hidden both, which is safe. Or it would have hidden neither, which is not.

## And then there is voice

At the end of the afternoon, Farah named one more source. A few customers had started to send voice notes. The call centre had been asking about a voice assistant. Anaya had put both on the Won't list. To be fair to herself, she asked why.

Imran said voice changes the main limit. Think of a phone call. In text, a two-second wait is fine. In speech, two seconds of silence breaks the talk. People start speaking over each other. The whole round trip must fit inside that gap: speech in, thinking, speech out. The thinking machines of that summer were, mostly, too slow.

Voice is also not mainly about being right. It is about knowing when a person has finished speaking. It is about what to do if they cut in. It is about what to say while the system works. It was a different problem and a different project. The Won't stayed where it was.

## What changed

That night, Anaya wrote on the board. She put it beside the old red line, below the new row. She wrote what the audit had cost and what it had bought. It had cost an afternoon, fifty files and a lot of tea. It had moved photographs from "Could" to "Should". It had taught the rules about look-alikes. And it gave her a rule of thumb for later: before any project that depends on documents, count the clean ones.

Imran said it was the cheapest way to stop a project from failing six weeks in. It was also the most ignored. In all his years, nobody had once asked him for it.

## Summary

Real documents are pages and pictures far more often than clean text.

- The step that turns a picture into characters is OCR. Its mistakes are of one kind, such as a letter O for a zero or an l for a one. They can slip an identity number past a rule that looks for digits.
- Tables suffer most, and quietly. The values survive. The links between them do not.
- You can turn a page into text first, which is cheap. Or you can show it to a capable model as a picture, which keeps the layout. Many systems do both.
- Voice changes the main limit from being right to being on time.
- Before any document project starts, a document audit shows what is really involved. It takes fifty files picked at random and three counts.

Next, Lakshmi puts three documents on her desk. She asks Anaya which may be sent to a vendor (an outside company), and why.

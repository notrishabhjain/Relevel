---
title: Pages, Pictures and Voices
summary: Read a railway timetable aloud, word by word, and nobody learns when the train leaves. The team finally takes on photographs and voice notes. They find the stage where meaning first goes wrong. They build a test that can tell a hearing mistake from a thinking one. The chapter teaches multimodal systems, speech-to-text, voice pipelines and speaker attribution.
course: ch15mm
goals:
  - explain why a system that takes in pages, pictures and speech cannot treat them as text
  - keep finding a detail in an image apart from erasing it, so nobody can argue the erasing away
  - describe a voice pipeline stage by stage, with where each stage can change meaning and where the time goes
  - build a test that scores each kind of input at several levels, so it shows which stage broke
terms:
  - multimodal | like a person who reads, looks and listens: able to take in more than text, such as pages, pictures, tables and speech, which changes what counts as evidence and how it is traced | 
  - speech-to-text | like a clerk typing what you say: software that turns recorded speech into written words; it is the first stage of any voice system and the first place where meaning can be lost | ASR
  - voice pipeline | like a relay race with many runners: the chain of separate stages a voice system runs through, from catching the sound to acting on it, each adding delay and each able to change the meaning | voice pipelines
  - speaker attribution | like writing a name beside each line of a play script: working out who said which words in a recording; it looks technical and behaves like a privacy decision | 
---

In the second week of October, Farah Sheikh played a voice note twice. The second time she did not look at anyone. The pilot's early numbers had held. Pune's sweeps stayed in single figures. Lakshmi Iyer had said she was pleased, in the tone she used for things she did not mean to repeat. That made the voice note more uncomfortable.

It lasted about nine seconds. It came from a woman in Kolhapur. She was speaking to a phone held a little too far from her mouth.

"Haan, mera Aadhaar number hai char teen do ek, paanch chhe saat aath, nau shunya ek do. Loan ka status bata do."

Farah said four of these had come in that week. Anaya had put voice notes on the Won't list in March, and she had been right to. A Won't list holds what the team will not build yet. But the notes were arriving anyway. Customers did not know they were a Won't.

## The case: a number spoken in words

Anaya knew this spoken number. She had put it in the answer key in June, as a row of its own. A rule that looks for digits finds none when the digits are words. She had known this day would come. She had hoped it would come later.

## Reading a timetable aloud

Imran began with an object. Photograph a railway timetable, he said. Then read it down the telephone to a friend. Words only, in order. The friend hears every station and every time. Still, the friend does not know when the train leaves. The meaning was in the columns. The reader skipped straight over them.

That is the first lesson of anything **multimodal**. The word means a system that takes in more than plain text. It takes in pages, pictures, tables and speech. It is like a person who reads, looks and listens. A PDF is not a text file. It is a page. It has layout, columns, headings and images. It also has information hidden behind what you see.

Pull out only the words, and you silently throw away most of the structure. So a system built for this must change what it means by evidence. It must also change how it points back to it.

The team had done the first half of this in the summer. That was the passbook photograph and its flattened table. The new work had two parts. First, make the guard able to act on what it found in a picture. Then make it hear.

## The picture

The picture was the simpler job, and the one Anaya feared more. A rule can hide characters in a line of text. It is not obvious how to hide them in a photograph.

The answer was to split the work in two. Think of one person who points and another who holds the marker pen. A capable model is shown the image. It is asked where the personal details are. It answers with positions, a box around each number. Then ordinary code paints over those boxes. The model does not paint. The model finds, and the program erases. So the guard cannot be talked into leaving a number visible. The erasing does not depend on its judgement.

::: key Evidence for visual claims must trace to the picture
Vision is a guess with odds, like everything else a model does. A blurry card can make it miss. So can a glare across the number, or a hand over a corner. For every box, the record showed the image, the region and the question. In the early weeks, a person checked each result.

Anaya added a rule to the specification. If a card photograph is blurred or partly covered, do not guess. Hide the whole image and ask for a clearer one.
:::

## The voice

A voice note was a different problem. A system that hears is never one model. It is a chain. It is like a relay race with many runners. Imran drew it on the board, link by link.

Table: The voice pipeline
| Stage | What it does | How meaning can change |
| --- | --- | --- |
| Capture | Records the sound | A distant phone or background noise |
| Speech-to-text | Turns the sound into written words | Mistakes with accents, names and, above all, sentences that mix languages, which describes most of what Sahaj's customers say |
| Tidying | Removes fillers; turns number words into digits | Wrongly turning words into digits, or leaving them |
| The guard | Finds and hides personal details | As before |
| Confirmation | A person or program is shown what was found and asked to confirm | A wrong summary shown for confirmation |
| Action | Only now does anything happen | Acting on a wrong understanding |

This chain is a **voice pipeline**. Its first stage is **speech-to-text**. That is software that types out what was said, like a clerk taking dictation. It is also the first place where meaning can be lost.

They played the note to the transcriber and read what came back. "haan mera aadhaar number hai char teen do ek paanch chhe saat aath nau shunya ek do loan ka status bata do." All of it was right. And there was not one digit in it.

Then the tidying stage did its job. Imran had written a step that read Hindi number words, one to nine and zero. When they came in a run, it turned them into figures. "Char teen do ek" became 4321. The pattern checker had never seen those digits spelled out. Now it saw them. The whole note came through with the number hidden.

Anaya asked what would happen if the customer said "do hazaar". That is not a run of single digits, said Imran. So it would be left alone. He would add it to the key as a row. Really, he said, that is a talk about what counts as a number.

### Whose words

Anaya raised one more matter, almost as an afterthought. A recording of a customer ringing the call centre might also hold the agent's voice. So whose words were whose?

Working out who said what is called **speaker attribution**. It is like writing a name beside each line of a play script. It sounds like a technical detail. It behaves like a privacy decision. It decides whose words are kept, for how long, and under whose name. And what if two people talk at once? She wrote three questions beside it for Lakshmi. Who is named? How long is the transcript kept? What happens when voices overlap?

## Counting the time

Voice puts a clock on everything. In text, a two-second wait is fine. In speech, two seconds of silence breaks the talk. People start speaking over it. The whole journey has to fit inside that. It runs from the end of a person's sentence to the reply.

For a recorded voice note, the wait did not matter. For a live call, it would matter a great deal. A live call was a future matter, still on the Won't list. Imran made her measure the stages anyway, because the habit was the point.

Table: Time per stage for the nine-second note
| Stage | Time |
| --- | --- |
| Capture | Instant |
| Transcription | 0.9 seconds |
| Tidying | Negligible |
| The guard | 0.15 seconds |
| The model, if needed | About a second |

His rule was simple. Do not speed up the fastest part while the person is waiting on a different one. It is like polishing the front door while the queue is stuck at the gate. The transcription was where the time went.

## A test that finds the broken link

The last matter was the one Anaya cared about most. How do you know it worked? A test set made only of text would hide every failure in the pictures and the sound. It is like a school exam that tests only reading and never listening.

So she built a new grid. It had five text cases, five photographs and tables, and five voice notes. Each group held its hardest example: a poor scan, a noisy recording, and a note in several languages. She scored each case three ways. Was the evidence read correctly? Was the detail extracted correctly? Did the task succeed from start to finish?

Table: The first multimodal grid
| | Evidence read | Detail extracted | Task succeeded |
| --- | --- | --- | --- |
| Five text cases | 5 of 5 | 5 of 5 | 5 of 5 |
| Five photographs | 4 of 5 | 4 of 5 | 3 of 5 |
| Five voice notes | 3 of 5 | 3 of 5 | 2 of 5 |

The text row was clean. The photographs lost a case between "extracted" and "succeeded". That was a mistake of thinking, not of seeing. The voice notes lost two cases at the very first column. The words had come out wrong before the guard ever saw them. Imran said the scores should show the broken part, not only the final answer.

::: key The final number can mislead
The final result for the voice notes was two out of five. A team shown only that figure would have rewritten the guard. The grid showed the guard was fine. The transcriber was not. That meant something very different about where to spend the week.
:::

## Summary

A system that takes in pages, pictures and speech cannot treat them as text. Pulling out the words alone loses layout, tables and context. The evidence also needs a way back to the original.

- For pictures, let the model say where the details are. Let ordinary code erase them. Then nobody can argue the erasing away.
- A voice system is a pipeline of separate stages. They run from capture through transcription and tidying to action. Each stage can change the meaning, and each spends time. Look first at the slowest.
- Who said what is a privacy decision, not a technical detail.
- A test made only of text hides every failure in the other forms. Score each kind of input at several levels. Then it shows which stage broke.

Next, an engineer from another team softens one line of the guard's instructions at ten to eleven on a Friday night.

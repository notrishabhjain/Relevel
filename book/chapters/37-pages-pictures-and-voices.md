---
title: Pages, Pictures and Voices
summary: Read a railway timetable aloud word by word and nobody learns when the train leaves. The team takes on photographs and voice notes at last, finds the stage at which meaning first goes wrong, and builds a test that can tell a hearing mistake from a thinking one. The chapter introduces multimodal systems, speech-to-text, voice pipelines and speaker attribution.
course: ch15mm
goals:
  - explain why a system that takes in pages, pictures and speech cannot treat them as text
  - separate locating a detail in an image from erasing it, so the erasing cannot be argued with
  - describe a voice pipeline stage by stage, with where each can change meaning and where the time goes
  - build a test that scores each kind of input at several levels, so that it shows which stage broke
terms:
  - multimodal | able to take in more than text, such as pages, pictures, tables and speech, which changes what counts as evidence and how it is traced | 
  - speech-to-text | software that turns recorded speech into written words; it is the first stage of any voice system and the first place meaning can be lost | ASR
  - voice pipeline | the chain of separate stages a voice system runs through, from capturing the sound to acting on it, each adding delay and each able to change the meaning | voice pipelines
  - speaker attribution | working out who said which words in a recording; it looks technical and behaves like a privacy decision | 
---

In the second week of October Farah Sheikh played a voice note twice, and the second time she did not look at anyone. The pilot's early numbers had held, and Pune's sweeps stayed in single figures. Lakshmi Iyer had said, in the tone she used for things she did not intend to repeat, that she was pleased. That made the voice note more uncomfortable. It lasted about nine seconds, from a woman in Kolhapur speaking to a phone held a little too far from her mouth.

"Haan, mera Aadhaar number hai char teen do ek, paanch chhe saat aath, nau shunya ek do. Loan ka status bata do." Farah said that there had been four of these that week. She had put voice notes on the Won't list in April and had been right to, but they were arriving anyway, and customers did not know they were a Won't.

## The case: a number spoken in words

Anaya recognised the spoken number. She had put it in the answer key in June as a row of its own: a rule that looks for digits finds none in a sentence where the digits are words. She had known that this day would come and had hoped it would come later.

## Reading a timetable aloud

Imran began with an object. Photograph a railway timetable, he said, and read it down the telephone to a friend, words only, in order. The friend hears every station and every time and still does not know when the train leaves, because the meaning was in the columns and the reader passed straight over them.

That is the first lesson of everything *multimodal*, the name for a system that takes in more than plain text: pages, pictures, tables and speech. A PDF is not a text file. It is a page, with layout, columns, headings, images and information hidden behind what one sees. Extracting only the words removes most of the structure without a sound. A system built for this has to change what it means by evidence and how it points back to it.

The team had done the first half of this in the summer with the passbook photograph and its flattened table. The new work was to make the guard able to act on what it found in a picture, and then to make it hear.

## The picture

The picture was the simpler of the two, and the one that Anaya feared more. A rule can hide characters in a line of text, but it is not obvious how to hide them in a photograph.

The answer was to separate two jobs. A capable model is shown the image and asked where the personal details are, and it answers with positions, a box around each number. Ordinary code, not the model, then paints over those boxes. The model locates and the program erases, so the guard cannot be talked into leaving a number visible, since the erasing does not depend on its judgement.

::: key Evidence for visual claims must trace to the picture
Vision is probabilistic like everything else. A blurry card, a glare across the number or a hand over a corner can each make it miss. For every box the record showed the image, the region and the question, and in the early weeks a person checked each result. Anaya added a rule to the specification: if a card photograph is blurred or partly covered, do not guess; hide the whole image and ask for a clearer one.
:::

## The voice

A voice note was a different problem. A system that hears is never one model. It is a chain, and Imran drew it on the board link by link.

Table: The voice pipeline
| Stage | What it does | How meaning can change |
| --- | --- | --- |
| Capture | Records the sound | A distant phone or background noise |
| Speech-to-text | Turns the sound into written words | Mistakes with accents, names and, above all, sentences that mix languages, which describes most of what Sahaj's customers say |
| Tidying | Removes fillers; turns number words into digits | Wrongly turning words into digits, or leaving them |
| The guard | Finds and hides personal details | As before |
| Confirmation | A person or program is shown what was found and asked to confirm | A wrong summary shown for confirmation |
| Action | Only now does anything happen | Acting on a wrong understanding |

This chain is a *voice pipeline*, and *speech-to-text*, software that transcribes speech, is its first stage and the first place where meaning can be lost.

They played the note to the transcriber and read what came back: "haan mera aadhaar number hai char teen do ek paanch chhe saat aath nau shunya ek do loan ka status bata do." All of it was right, and there was not a digit in it. The tidying stage did its job next. Imran had written a step that read Hindi number words, one to nine and zero, and turned them into figures when they appeared in a run. "Char teen do ek" became 4321. The pattern checker, which had never seen those digits spelled out, now saw them, and the whole note came through with the number hidden.

Anaya asked what would happen if the customer said "do hazaar". It is not a run of single digits, said Imran, so it would be left alone, and it would be added to the key as a row. It is, he said, a conversation about what counts as a number.

### Whose words

Anaya raised one more matter as an afterthought. A recording of a customer ringing the call centre might include the agent's voice too, so whose words were whose? Working out who said what is *speaker attribution*. It sounds like a technical detail and behaves like a privacy decision, because it determines whose words are kept, for how long and under whose name. If two people talk at once, what happens? She wrote three questions beside it for Lakshmi: who is named, how long is the transcript kept, and what happens when there is overlap.

## Counting the time

Voice adds a clock to everything. In text a two-second wait is acceptable, whereas in speech two seconds of silence breaks a conversation and people start talking over it. The whole journey, from the end of a person's sentence to a reply, has to fit within that.

For a recorded voice note the wait did not matter. For a live call, a future matter and still on the Won't list, it would matter enormously. Imran made her measure the stages anyway, since the habit was the point.

Table: Time per stage for the nine-second note
| Stage | Time |
| --- | --- |
| Capture | Instant |
| Transcription | 0.9 seconds |
| Tidying | Negligible |
| The guard | 0.15 seconds |
| The model, if needed | About a second |

His rule was not to optimise the fastest part while the person is waiting on a different one. The transcription was where the time went.

## A test that finds the broken link

The last matter was the one Anaya cared about most: how to know that it worked. A test set made only of text would hide every failure in the pictures and the sound. She built a new grid with five text cases, five photographs and tables, and five voice notes, with the hardest example in each: a poor scan, a noisy recording and a note in several languages. She scored each case three ways. Was the evidence read correctly? Was the detail extracted correctly? Did the task succeed from start to finish?

Table: The first multimodal grid
| | Evidence read | Detail extracted | Task succeeded |
| --- | --- | --- | --- |
| Five text cases | 5 of 5 | 5 of 5 | 5 of 5 |
| Five photographs | 4 of 5 | 4 of 5 | 3 of 5 |
| Five voice notes | 3 of 5 | 3 of 5 | 2 of 5 |

The text row was clean. The photographs lost a case between "extracted" and "succeeded", which was a mistake of thinking and not of seeing. The voice notes lost two cases at the very first column: the words themselves had come out wrong before the guard ever saw them. Imran said that the scores should show the broken component and not only the final answer.

::: key The final number can mislead
The final result for the voice notes was two out of five, and a team shown only that figure would have rewritten the guard. The grid showed that the guard was fine and the transcriber was not. That meant something quite different about where to spend the week.
:::

## Summary

A system that takes in pages, pictures and speech cannot treat them as text, because extracting the words alone loses layout, tables and context, and the evidence needs a way back to the original.

- For pictures, let the model say where the details are and let ordinary code erase them, so that the erasing cannot be argued with.
- A voice system is a pipeline of separate stages, from capture through transcription and tidying to action. Each is a place where meaning can change and time is spent, and the slowest is the one to look at.
- Who said what is a privacy decision and not a technical detail.
- A test made only of text hides every failure in the other forms. Score each kind of input at several levels, which shows which stage broke.

---
title: Pages, Pictures and Voices
summary: Read a railway timetable aloud word by word and nobody learns when the train leaves. The team takes on photographs and voice notes at last, finds the stage at which meaning first goes wrong, and builds a test that can tell a hearing mistake from a thinking one.
course: ch15mm
terms:
  - multimodal | able to take in more than text, such as pages, pictures, tables and speech, which changes what counts as evidence and how it is traced | 
  - speech-to-text | software that turns recorded speech into written words; it is the first stage of any voice system and the first place meaning can be lost | ASR
  - voice pipeline | the chain of separate stages a voice system runs through, from capturing the sound to acting on it, each adding delay and each able to change the meaning | voice pipelines
  - speaker attribution | working out who said which words in a recording; it looks technical and behaves like a privacy decision | 
---

Farah played the voice note twice, and the second time she did not look at anyone.

It was the second week of October and the pilot's early numbers had held. Pune's sweeps stayed in single figures. Lakshmi had said, in the tone she used for things she did not intend to repeat, that she was pleased. Which was why the voice note was so uncomfortable. It was about nine seconds long, from a woman in Kolhapur, in a voice that was clearly speaking to a phone held a little too far away.

*Haan, mera Aadhaar number hai char teen do ek, paanch chhe saat aath, nau shunya ek do. Loan ka status bata do.*

"We've had four of these this week," said Farah. "I put voice notes on the *Won't* list in April, and I was right to. But they are arriving anyway, and the customers do not know it is a *Won't*."

Anaya was thinking about the spoken number, which she knew. She had put it in the answer key in June, as a row of its own. A rule that looks for digits finds none in a sentence where the digits are words. She had known this day would come; she had only hoped it would come later.

## Reading a timetable aloud

Imran began, as he often did, with an object.

"Photograph a railway timetable," he said. "Now read it down the phone to a friend, the words only, in order. They hear every station. They hear every time. And they still don't know when the train leaves, because the meaning was in the columns, and you read straight past the columns."

That was the first lesson of everything *multimodal*, which is the name for a system that takes in more than plain text: pages, pictures, tables and speech. A PDF is not a text file. It is a page, with layout, columns, headings, images and information hidden behind what you see. Extract only the words and most of the structure vanishes without a sound. A system built for this has to change what it means by evidence, and how it points back to it.

They had done the first half of this in the summer, with the passbook photograph and its flattened table. The new work was to do the second half: to make the guard able to act on what it found in a picture, and then to make it hear.

## The picture

The picture was the simpler of the two, and it was also, to Anaya's surprise, the one she was most afraid of. A rule can hide characters in a line of text. How do you hide them in a photograph?

The answer, Imran said, was to separate the two jobs. A capable model could be shown the image and asked where in it the personal details were. It would answer with positions, a box around each number. Then ordinary code, not the model, would paint over those boxes. The machine located; the program erased. That way the guard could not be talked into leaving a number visible, because the erasing did not depend on its judgement.

Vision is probabilistic like everything else. A blurry card, a glare across the number, a hand over a corner: any of these could make it miss. So the evidence had to be traceable. For every box, the record showed the image, the region and the question, and in the early weeks a person checked each result. Visual claims, Imran said, should always be traceable to the picture they came from. She added a rule of her own to the specification. *If a card photograph is blurred or partly covered, do not guess. Hide the whole image and ask for a clearer one.*

## The voice

The voice note was another thing altogether.

A system that hears is never one model. It is a chain, and Imran drew it on the board slowly, link by link, with a pause after each so that she could see it. The sound is captured. It is turned into written words by *speech-to-text*, software that transcribes speech. The words are tidied: fillers removed, numbers turned from words into digits. Then the guard does what it has always done. Then a person, or a program, is shown what was found and asked to confirm. Only then does anything happen.

This chain is a *voice pipeline*. It has several failure points, and each can change the meaning. The first is the transcription, which makes mistakes in accents, in names, and, most of all, in sentences that mix languages, which describes most of what Sahaj's customers say.

They played the note to the transcriber, and read what came back. It said: *haan mera aadhaar number hai char teen do ek paanch chhe saat aath nau shunya ek do loan ka status bata do.* All of it right, and not a digit in it.

"Here is the tidying stage doing its job," said Imran. He had written a step that read Hindi number words, one to nine, and zero, and turned them into figures when they appeared in a run. *Char teen do ek* became 4321. The pattern checker, which had never seen those digits spelled out, now saw them, and the whole note came through with the number hidden.

"And if the customer says *do hazaar*?"

"Then it's not a digit run and we leave it. And we add that as a row." He smiled slightly. "You'll see that this is a conversation about what counts as a number."

There was a further issue, and it came from a question Anaya asked as an afterthought. A recording of a customer ringing the call centre might include the agent's voice too. Whose words were whose? Working out who said what is called *speaker attribution*. It sounds like a technical detail and behaves like a privacy decision, because it determines whose words are kept, for how long, and under whose name. If two people talk at once, what happens? She wrote three questions beside it and left them for Lakshmi: *who is named, how long is the transcript kept, and what happens when there is overlap.*

## Counting the time

Voice added a clock to everything. In text, a two-second wait was acceptable. In speech, two seconds of silence breaks a conversation, and people start talking over it. The whole journey, from the end of a person's sentence to a reply, has to fit within that.

For a voice *note*, which is recorded and sent, the wait did not matter. For a live call, which was a future thing and still on the *Won't* list, it would matter enormously. But Imran made her measure the stages anyway, because the habit was the point. Capture: instant. Transcription: 0.9 seconds for the nine-second note. Tidying: negligible. The guard: 0.15. The model: a second if it was needed.

"Don't optimise the fastest part," he said, "while the person is waiting on a different one." The transcription was where the time went.

## A test that finds the broken link

The last thing was the one Anaya cared about most: how to know it worked.

A test set made of text would hide every failure in the pictures and the sound. So she built a new grid. Five text cases, five photographs and tables, five voice notes, with the hardest in each: a poor scan, a noisy recording, a multilingual note. And she scored each case three ways, not one. Was the evidence read correctly? Was the detail extracted correctly? Did the task succeed from start to finish?

| | Evidence read | Detail extracted | Task succeeded |
| --- | --- | --- | --- |
| Five text cases | 5 of 5 | 5 of 5 | 5 of 5 |
| Five photographs | 4 of 5 | 4 of 5 | 3 of 5 |
| Five voice notes | 3 of 5 | 3 of 5 | 2 of 5 |

She studied the grid. The text row was clean. The pictures lost a case somewhere between "extracted" and "succeeded", which was a thinking mistake, not a seeing one. The voice notes lost two at the very first column: the words themselves had come out wrong, before the guard ever saw them.

"The metric stack should show the broken component," said Imran. "Not just the final answer."

It did. The final answer for the voice notes was two out of five, and a team shown only that number would have rewritten the guard. The grid said that the guard was fine and that the transcriber was not. That meant something quite different about where to spend the week.

## What to carry forward

A system that takes in pages, pictures and speech cannot treat them as text, because extracting the words alone loses layout, tables and context, and the evidence needs a way back to the original. For pictures, let the model say where the details are and let ordinary code erase them, so that the erasing cannot be argued with. A voice system is a pipeline of separate stages, from capture through transcription and tidying to action, and each is a place where meaning can change and time is spent, with the slowest stage being the one to look at. Who said what is a privacy decision, not a technical detail. And a test made only of text hides every failure in the other forms, so score each kind of input at several levels, which shows which stage broke.

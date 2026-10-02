---
title: Giving Instructions
summary: The team asks a model to do the guard's job for the first time, watches it be wrong in three different ways, and learns the difference between making a failure rarer and removing its cause.
course: ch2 ch21
terms:
  - prompt | the text you send a model, which can include instructions, examples and the material you want it to work on | prompts
  - system prompt | the standing instructions an app sends with every request, saying who the assistant is and what it must and must not do | system prompts
  - temperature | a setting that decides how often a model picks a less likely next token; low gives similar answers each time, high gives more variety | 
  - hallucination | a confident, well-formed answer that is invented; it happens because the model predicts likely text, and "I do not know" is rarely the likeliest text | hallucinations, hallucinate
  - worked example | a finished sample of the output you want, shown to the model so that it copies the format instead of imitating your description | worked examples
---

"Right," said Imran. "Enough theory. Let's ask it to do the job and watch what happens."

It was the following Monday. Farah had come in early with a coffee and three messages on a card, written by her team the previous evening in the style of real customers. They were not real. Anaya had insisted on that, and Lakshmi, when told, had said it was the first sensible thing she had heard about the project, which Anaya chose to take as a compliment. A privacy tool tested on real people's secrets would have been a small scandal in itself.

The first message read: *My name is Amit Sharma. My PAN is ABCDE1234F and I transferred ₹4 lakh from my HDFC account ending 4521. Why was my loan rejected?*

Imran typed it into the window below a single line of his own.

*List every piece of personal information in this message.*

## The first answer

The reply took two seconds.

```
1. Name: Amit Sharma
2. PAN: ABCDE1234F
3. Bank: HDFC
4. Account ending: 4521
5. Amount transferred: ₹4 lakh
6. Loan rejection
```

"Not bad," said Farah.

"Four of those are right," said Anaya, who had been reading with a pencil. "The name, the PAN, the bank, the last digits. The amount is not personal, is it? It is a number. And a loan rejection is not a detail you could use to find the person."

"It would be, if the person were famous," said Imran. "But I take the point."

"So it hid two things that did not need hiding."

"It *listed* two things. Hiding is the next box." He ran the same message again. The list this time had four items, not six: no loan, no amount. A third run gave seven, including the word *Sharma* a second time, as its own entry.

"Why does it change?" Farah asked.

## A dial for variety

This, Imran said, was the second control, and he had been waiting to show it to someone who cared.

At each step, the model has a handful of plausible next tokens, with chances attached. The setting called *temperature* decides how willing the machine is to pick one of the less likely ones. At a high temperature it ranges widely, and gives lively, varied answers: good for writing a poem, or thinking of names for a pet. At a low one, close to zero, it nearly always takes the most likely token, so the same question gets nearly the same answer every time.

He turned it down and ran the message five times. Five lists, almost identical.

"For this job," said Anaya, "I want it low."

"Of course. You want the same question to get the same answer on Tuesday as on Monday." He held up a hand. "But hear the second half. Low temperature makes answers consistent. It does not make them correct. If it is wrong at zero, it is wrong in the same way every time. Do not let anyone tell you they have made it accurate by turning a dial."

## The standing instructions

The second message was in Hinglish, and Farah typed it herself with the tidy speed of someone who does it forty times a day. *Sir mera aadhaar 4321 5678 9012 hai aur ye number 98xxxxxx12 pe call kar lena.*

The answer found the Aadhaar number. It also listed *98xxxxxx12* as a mobile number.

"That one is already hidden," Farah said. "An agent typed the x's. Listing it as a detail would make us hide it twice."

"Fine, we write that down," said Imran. "We also have to say it once, not each time. The model forgets, so whatever we want it to do must be sent with every request."

He opened a second box and typed a short paragraph. These standing instructions, which say who the assistant is and what it must and must not do, go by the name of the *system prompt*. It is ordinary text, no different in kind from the message itself, which the app sends first with every request. A *prompt*, in general, is anything you send a model: instructions, examples, the material it is to work on. The system prompt is simply the part that stays the same.

Anaya thought of something. "When a vendor says they have customised the AI for your company…"

"They have usually written a system prompt," said Imran. "Which is fine, and worth knowing. Ask them what else, if anything, they changed."

## Where it makes things up

The third message was the one Imran had been saving.

*What documents do I need to renew my driving licence?*

It contained nothing personal. A good tool would say so and leave the message alone. The model's reply, on the first run, did exactly that.

On the third run, it said: *Personal information: driving licence (document type).* On the fifth, it invented a detail altogether.

```
Personal information: the customer's city of residence, likely Pune.
```

"Pune," said Farah. "How does it know Pune? There is no Pune in the message."

"It doesn't know," said Imran. "It was asked for the personal information in a message and it felt that an answer was expected. The most likely text after that question is a list, and a list has to have something in it."

This is the failure with the unfortunate name of *hallucination*. It is a confident, well-formed answer that is invented, and it looks exactly like a true one. The word suggests a fault, but the machine is working as designed: predicting likely text, in a situation where what was needed was silence. A model does not reliably tell you when it does not know. Refusal has to be trained in separately, and it does not always hold.

"For us, this is bad in a specific way," said Anaya slowly. "If it invents a detail, we hide something that was never there. And if the invention is wrong, nobody notices, because there is nothing to compare it to."

## Four things that help, in order

They spent the rest of the day improving the instruction, and what they learned was less obvious than it sounds. Most people, Imran said, write a first prompt as a request, *please do this*, and it works about as often as asking a stranger for directions without saying where you are. A prompt is better treated as a specification. There are four techniques, and they are not equally strong.

The strongest, which is also the one people try last, is the *worked example*. If you describe the output in words, the model imitates your words. If you show a finished example, it copies the format. Anaya wrote one: a made-up message, and the list she wanted, line by line, with a kind and a value on each. She added a second, awkward one, a message with no personal detail at all, followed by the answer *Nothing found.* Two examples, one typical and one awkward, beat six similar ones, and cost far fewer tokens to send.

The second technique is to name the job and the reader. *List every piece of personal information* is a request. *You are checking a customer's chat message for details that could identify one person. Your reader is a program, which will hide whatever you list* is a job. It changes the result a good deal and costs almost nothing.

The third is to break the work into steps. Asking for the finished result makes the machine do all the parts at once. Asking for them in order costs a few tokens and produces work you can inspect. *First, read the message. Second, list each detail and say where it appears. Third, remove anything that is not about a person.*

The fourth, and weakest, is to forbid what you have seen go wrong. *Do not guess a detail that is not in the message.* This is worth doing, once or twice, for failures you have actually seen. It is not worth doing as a long list, because it works less well than people hope.

The reason is the most important idea in the chapter, and they proved it with their own hands. Anaya added the forbidding line, and the invention of *Pune* stopped. For a day it stopped. On Tuesday Farah wrote a message about a cousin who worked "at the bank near the station", and the machine, dutifully, did not guess a city, and instead named a bank branch that did not exist.

"It still does it," said Anaya.

"It does it less. That is all an instruction can do." Imran looked at the wall for a moment. "An instruction makes a failure *rarer*. It does not remove the reason it happens. The reason is that the thing is built to continue text, and sometimes the likely continuation is false. If somebody says a problem is solved because they added a rule, ask a different question: did that remove the cause, or did it only make the symptom less common?"

She put the words on the whiteboard in the glass room, in red, at the top, where they stayed for the rest of the project.

*Rarer is not fixed.*

## The cost of a long instruction

There was one last thing, and it was practical. The system prompt had grown, with the examples and the steps and the warning, from one line to four hundred tokens. It would be sent with every message.

"At a hundred thousand chats a month," Imran said, "that is forty million tokens of instruction, whether the customer says one word or a thousand. We pay for it every time." He shrugged. "It is worth it. But I want it to be a decision, and not an accident."

## What to carry forward

A prompt is whatever you send a model, and the standing part of it, repeated with every request because the model remembers nothing, is the system prompt. Temperature is the dial between variety and sameness; a low setting makes answers consistent, but not correct. A model that is asked for something it does not have will often invent it, in the same calm voice it uses for the truth, and that is called hallucination. Four techniques improve a prompt, and in order of strength they are: show a worked example, name the job and the reader, break the work into steps, and forbid what you have seen go wrong. None of them removes the cause of a failure. They only make it rarer, and every word of instruction is paid for each time it is sent.

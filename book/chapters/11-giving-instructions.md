---
title: Giving Instructions
summary: The team asks a language model to do the guard's work for the first time and watches it fail in three different ways. The chapter covers prompts, system prompts, temperature, hallucination and worked examples, and the difference between making a failure rarer and removing its cause.
course: ch2 ch21
goals:
  - define a prompt and a system prompt, and say why the standing instructions are sent with every request
  - explain what temperature changes and what it does not
  - recognise a hallucination and say why it occurs
  - rank four prompting techniques by strength, and explain why an instruction makes a failure rarer without removing its cause
terms:
  - prompt | the text you send a model, which can include instructions, examples and the material you want it to work on | prompts
  - system prompt | the standing instructions an app sends with every request, saying who the assistant is and what it must and must not do | system prompts
  - temperature | a setting that decides how often a model picks a less likely next token; low gives similar answers each time, high gives more variety | 
  - hallucination | a confident, well-formed answer that is invented; it happens because the model predicts likely text, and "I do not know" is rarely the likeliest text | hallucinations, hallucinate
  - worked example | a finished sample of the output you want, shown to the model so that it copies the format instead of imitating your description | worked examples
---

On the Monday after the first demonstration, Farah Sheikh brought three messages to the glass meeting room on a card. Her team had written them the previous evening in the style of real customers, and none was real. Anaya had insisted on that. When Lakshmi Iyer heard, she said it was the first sensible thing she had heard about the project, since a privacy tool tested on real people's secrets would have been a small scandal of its own.

The first message read: "My name is Amit Sharma. My PAN is ABCDE1234F and I transferred ₹4 lakh from my HDFC account ending 4521. Why was my loan rejected?" Imran Qureshi typed it into a window beneath one line of his own: "List every piece of personal information in this message." This chapter follows the three hours that followed. The model was asked to do part of the guard's job, and its failures taught the team more than its successes did.

## The case: the first list

The reply took two seconds.

```
1. Name: Amit Sharma
2. PAN: ABCDE1234F
3. Bank: HDFC
4. Account ending: 4521
5. Amount transferred: ₹4 lakh
6. Loan rejection
```

Anaya, reading with a pencil, counted four correct items: the name, the PAN, the bank and the last digits of the account. The amount is a number and not a detail that identifies anyone, and a loan rejection could not be used to find the person. The model had listed two items that did not need hiding. Imran noted that listing is not hiding, and that hiding is a later step. He then ran the same message again. The second list had four items, not six. A third run produced seven, with the surname repeated as an entry of its own. Farah asked why the answer changed.

## Temperature: a dial for variety

At each step the model has a small set of plausible next tokens, each with a probability. The setting called *temperature* controls how willing it is to choose one of the less likely ones. At a high temperature it ranges widely and gives lively, varied answers, which suits writing a poem or naming a pet. At a low temperature, near zero, it almost always takes the most likely token, so the same question receives nearly the same answer every time.

Imran lowered the setting and ran the message five times. The five lists were almost identical. For this job Anaya wanted low temperature, since the same question should receive the same answer on Tuesday as on Monday.

::: watch Consistent is not correct
Low temperature makes answers consistent. It does not make them correct. A model that is wrong at zero is wrong in the same way every time, and nobody has made a system accurate by turning a dial.
:::

## The standing instructions

The second message was in Hinglish, typed by Farah with the speed of someone who writes forty such messages a day: "Sir mera aadhaar 4321 5678 9012 hai aur ye number 98xxxxxx12 pe call kar lena." The model found the Aadhaar number. It also listed "98xxxxxx12" as a mobile number, although an agent had already hidden it by typing the x's. Reporting it would make the guard hide it twice.

The fix is an instruction, and the instruction must be sent with every request because the model remembers nothing. Imran opened a second box and typed a short paragraph. Standing instructions of this kind, which say who the assistant is and what it must and must not do, are the *system prompt*. It is ordinary text, no different in kind from the message itself, and the application sends it first with every request.

::: def Prompt and system prompt
A *prompt* is anything sent to a model: instructions, examples and the material it is to work on. The *system prompt* is the part that stays the same from one request to the next.
:::

When a vendor says that it has customised an AI for a company, it has often written a system prompt. That is acceptable and worth knowing, and the useful question for the vendor is what else, if anything, was changed.

## Where it makes things up

The third message was one that Imran had been saving: "What documents do I need to renew my driving licence?" It contains nothing personal, and a good tool would say so and leave it alone. On the first run the model did exactly that. On the third it replied "Personal information: driving licence (document type)." On the fifth it invented a detail.

```
Personal information: the customer's city of residence, likely Pune.
```

Farah observed that there was no Pune in the message. Imran said that the model did not know anything about the customer's city. It had been asked for the personal information in a message and behaved as if an answer was expected. The most likely text after that question is a list, and a list has to contain something.

This failure has an unfortunate name. A *hallucination* is a confident, well-formed answer that is invented, and it looks exactly like a true one. The name suggests a malfunction, but the machine is working as designed. It is predicting likely text in a situation that called for silence. A model does not reliably say when it does not know, because saying "I do not know" has to be trained in separately and does not always hold.

For the guard the consequence was specific. If the model invents a detail, the guard hides something that was never there. If the invention is wrong, nobody notices, because there is nothing to compare it with.

## Four techniques, in order of strength

The team spent the rest of the day improving the instruction. Most people write a first prompt as a request, "please do this", which works about as often as asking a stranger for directions without saying where you are. A prompt is better treated as a specification. Four techniques are available, and they are not equally strong.

Table: Four ways to improve a prompt, strongest first
| Technique | What it does | Example from the guard |
| --- | --- | --- |
| A worked example | Shows a finished sample of the output wanted, so the model copies the format instead of imitating a description | A made-up message with the list wanted, line by line, plus an awkward one with no personal detail, answered "Nothing found" |
| Name the job and the reader | Says what the task is and who or what will use the result | "You are checking a customer's chat message for details that could identify one person. Your reader is a program, which will hide whatever you list" |
| Break the work into steps | Makes the model do the parts in order, producing work that can be inspected | "First, read the message. Second, list each detail and say where it appears. Third, remove anything that is not about a person" |
| Forbid what has gone wrong | Names a failure already seen | "Do not guess a detail that is not in the message" |

A *worked example* is the strongest, and it is the one people try last. If the output is described in words, the model imitates the words. If a finished example is shown, it copies the format. Anaya wrote one typical example and one awkward one. Two examples, one typical and one awkward, beat six similar ones and cost far fewer tokens to send. The fourth technique is the weakest. It is worth using once or twice for failures actually seen, and not as a long list, because it works less well than people hope.

## Rarer is not fixed

The reason for that last point is the most important idea in the chapter, and the team demonstrated it themselves. Anaya added the forbidding line, and the invention of Pune stopped, for a day. On Tuesday Farah wrote a message about a cousin who worked "at the bank near the station". The model obeyed and did not guess a city. Instead it named a bank branch that did not exist.

"It still does it," said Anaya. "It does it less," said Imran. An instruction makes a failure rarer. It does not remove the reason the failure happens, which is that the machine is built to continue text, and sometimes the likely continuation is false.

::: key Rarer is not fixed
When someone says a problem is solved because a rule was added, the question to ask is whether the rule removed the cause or only made the symptom less common. Anaya wrote the words in red at the top of the whiteboard, where they stayed for the rest of the project.
:::

## The cost of a long instruction

The system prompt had grown with the examples, the steps and the warning from one line to four hundred tokens, and it would be sent with every message. At a hundred thousand chats a month that is forty million tokens of instruction, whether the customer writes one word or a thousand. The cost is worth paying, Imran said, but it should be a decision and not an accident.

## Summary

A prompt is whatever is sent to a model. The standing part, repeated with every request because the model remembers nothing, is the system prompt.

- Temperature is a dial between variety and sameness. A low setting makes answers consistent but not correct.
- A model asked for something it does not have will often invent it in the same calm voice it uses for the truth. This is hallucination.
- In order of strength, the techniques are a worked example, naming the job and the reader, breaking the work into steps, and forbidding failures already seen.
- None of them removes the cause of a failure. They make it rarer, and every word of instruction is paid for each time it is sent.

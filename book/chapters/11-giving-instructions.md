---
title: Giving Instructions
summary: The team asks a language model to do the guard's work for the first time, and watches it fail in three different ways. This chapter explains prompts, system prompts, temperature, hallucination and worked examples. It also shows the difference between making a failure rarer and removing its cause.
course: ch2 ch21
goals:
  - say what a prompt and a system prompt are, and why the standing instructions are sent with every request
  - explain what temperature changes and what it does not
  - recognise a hallucination and say why it happens
  - rank four prompting techniques by strength, and explain why an instruction makes a failure rarer without removing its cause
terms:
  - prompt | the text you send a model, which can include instructions, examples and the material you want it to work on | prompts
  - system prompt | the standing instructions an app sends with every request, saying who the assistant is and what it must and must not do | system prompts
  - temperature | a setting that decides how often a model picks a less likely next token; low gives similar answers each time, high gives more variety | 
  - hallucination | a confident, well-formed answer that is invented; it happens because the model predicts likely text, and "I do not know" is rarely the likeliest text | hallucinations, hallucinate
  - worked example | a finished sample of the output you want, shown to the model so that it copies the format instead of imitating your description | worked examples
---

On the Monday after the first demonstration, Farah Sheikh brought three messages to the glass meeting room, written on a card. Her team had made them up the evening before, in the style of real customers. None of them was real. Anaya had insisted on that. When Lakshmi Iyer heard, she said it was the first sensible thing she had heard about the project. A privacy tool tested on real people's secrets would have been a small scandal of its own.

The first message read: "My name is Amit Sharma. My PAN is ABCDE1234F and I transferred ₹4 lakh from my HDFC account ending 4521. Why was my loan rejected?"

Imran Qureshi typed it into a window, under one line of his own: "List every piece of personal information in this message." This chapter follows the three hours that came next. The model was being asked to do part of the guard's job. Its failures taught the team more than its successes did.

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

Anaya read it with a pencil in her hand. She counted four correct items: the name, the PAN, the bank and the last digits of the account. The amount is only a number, and it doesn't identify anyone. A loan rejection can't be used to find the person either. So the model had listed two items that didn't need hiding.

Imran said that listing is not the same as hiding. Hiding is a later step. Then he ran the same message again. This time the list had four items, not six. A third run gave seven, with the surname repeated as an entry of its own. Farah asked the obvious thing. Why does the answer keep changing?

## Temperature: a dial for variety

The answer is in how the model picks each word. At every step it has a small set of plausible next tokens, and each one has a probability. A setting called *temperature* controls how willing the model is to pick one of the less likely ones.

At a high temperature the model ranges widely. Its answers are lively and varied, which suits writing a poem or naming a pet. At a low temperature, near zero, it almost always takes the most likely token. So the same question gets nearly the same answer every time.

Imran lowered the setting and ran the message five times. The five lists were almost identical. For this job, that was what Anaya wanted. The same question should get the same answer on Tuesday as it did on Monday.

::: watch Consistent is not correct
Low temperature makes answers consistent. It does not make them correct. A model that is wrong at zero is wrong in the same way every time. Nobody has ever made a system accurate by turning a dial.
:::

## The standing instructions

The second message was in Hinglish. Farah typed it quickly, like someone who writes forty of these a day: "Sir mera aadhaar 4321 5678 9012 hai aur ye number 98xxxxxx12 pe call kar lena."

The model found the Aadhaar number. But it also listed "98xxxxxx12" as a mobile number, even though an agent had already hidden it by typing the x's. If the guard reported that, it would hide the same number twice.

The fix for a problem like this is an instruction. And because the model remembers nothing, the instruction has to go with every request. Imran opened a second box and typed a short paragraph. Standing instructions like these say who the assistant is and what it must and must not do. They are called the *system prompt*. It is ordinary text, the same kind of thing as the customer's message. The application simply sends it first, every time.

::: def Prompt and system prompt
A *prompt* is anything sent to a model: instructions, examples, and the material it is to work on. The *system prompt* is the part that stays the same from one request to the next.
:::

This is useful to know when you meet vendors. When a vendor says it has customised an AI for your company, it has often just written a system prompt. That is fine, and it can be worth paying for. But the question to ask is what else, if anything, was changed.

## Where it makes things up

The third message was one Imran had been saving: "What documents do I need to renew my driving licence?"

There is nothing personal in it. A good tool would say so and leave it alone. On the first run, the model did exactly that. On the third run it replied, "Personal information: driving licence (document type)." On the fifth run it made something up.

```
Personal information: the customer's city of residence, likely Pune.
```

Farah pointed out that there was no Pune in the message. Imran agreed. The model knew nothing about the customer's city. It had been asked for the personal information in a message, so it behaved as if an answer was expected. After that question, the most likely text is a list. And a list has to contain something.

This kind of failure has an unfortunate name. A *hallucination* is a confident, well-formed answer that is invented, and it looks exactly like a true one. The name makes it sound like a fault in the machine. But the machine is working as designed. It is predicting likely text in a situation that called for silence. A model can't reliably tell you when it doesn't know. Saying "I do not know" has to be trained in separately, and even then it doesn't always hold.

For the guard, the consequence was specific. If the model invents a detail, the guard hides something that was never there. And if the invention is wrong, nobody notices, because there is nothing to compare it with.

## Four techniques, in order of strength

The team spent the rest of the day improving the instruction. Most people write a first prompt as a polite request: "please do this". That works about as well as asking a stranger for directions without saying where you are. It is better to treat a prompt as a specification.

There are four techniques, and they are not equally strong. The table lists them, strongest first.

Table: Four ways to improve a prompt, strongest first
| Technique | What it does | Example from the guard |
| --- | --- | --- |
| A worked example | Shows a finished sample of the output wanted, so the model copies the format instead of imitating a description | A made-up message with the list wanted, line by line, plus an awkward one with no personal detail, answered "Nothing found" |
| Name the job and the reader | Says what the task is and who or what will use the result | "You are checking a customer's chat message for details that could identify one person. Your reader is a program, which will hide whatever you list" |
| Break the work into steps | Makes the model do the parts in order, so the work can be inspected | "First, read the message. Second, list each detail and say where it appears. Third, remove anything that is not about a person" |
| Forbid what has gone wrong | Names a failure you have already seen | "Do not guess a detail that is not in the message" |

A *worked example* is the strongest, and it is the one people try last. If you describe the output in words, the model imitates your words. If you show a finished example, it copies the format.

Anaya wrote one typical example and one awkward one. Two examples like that beat six similar ones, and they cost far fewer tokens to send.

The fourth technique is the weakest. Use it once or twice, for failures you have actually seen. Don't build a long list of rules, because it works less well than people hope.

## Rarer is not fixed

That last point leads to the most important idea in this chapter, and the team found it out for themselves. Anaya added the forbidding line. The invention of Pune stopped, for a day.

On Tuesday, Farah wrote a message about a cousin who worked "at the bank near the station". The model obeyed the rule and didn't guess a city. Instead it named a bank branch that didn't exist.

"It still does it," said Anaya.

"It does it less," said Imran.

An instruction makes a failure rarer. It does not remove the reason the failure happens. The machine is built to continue text, and sometimes the likely continuation is false.

::: key Rarer is not fixed
When someone says a problem is solved because a rule was added, ask one question. Did the rule remove the cause, or did it only make the symptom less common? Anaya wrote the words in red at the top of the whiteboard, and they stayed there for the rest of the project.
:::

## The cost of a long instruction

There was one more thing to count. With the examples, the steps and the warning, the system prompt had grown from one line to four hundred tokens. And it would be sent with every message.

At a hundred thousand chats a month, that is forty million tokens of instruction. It makes no difference whether the customer writes one word or a thousand. Imran said the cost was worth paying. But it should be a decision, not an accident.

## Summary

A prompt is whatever is sent to a model. The standing part, repeated with every request because the model remembers nothing, is the system prompt.

- Temperature is a dial between variety and sameness. A low setting makes answers consistent, but not correct.
- A model asked for something it doesn't have will often invent it, in the same calm voice it uses for the truth. This is hallucination.
- In order of strength, the techniques are a worked example, naming the job and the reader, breaking the work into steps, and forbidding failures you have already seen.
- None of them removes the cause of a failure. They make it rarer. And every word of instruction is paid for each time it is sent.

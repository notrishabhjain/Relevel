---
title: Giving Instructions
summary: The team asks a language model to do the guard's work for the first time. It fails in three different ways. You learn what a prompt is, and what a system prompt, temperature, hallucination and worked example are. You also see that an instruction makes a failure rarer. It does not take away the cause.
course: ch2 ch21
goals:
  - say what a prompt and a system prompt are, and why the standing instructions go with every request
  - explain what temperature changes and what it does not
  - spot a hallucination and say why it happens
  - rank four prompting tricks by strength, and say why an instruction makes a failure rarer without removing its cause
terms:
  - prompt | the note you hand the model: what you want, and how; it can hold instructions, examples and the material to work on | prompts
  - system prompt | the standing instructions on the shop wall, read before every order; the app sends them with every request to say who the assistant is and what it must and must not do | system prompts
  - temperature | a dial for how adventurous the model is with its next word; low plays safe and gives similar answers each time, high takes chances and gives more variety | 
  - hallucination | confident make-believe: an answer that is made up and said with a straight face; it happens because the model guesses likely words, and "I do not know" is rarely the likeliest | hallucinations, hallucinate
  - worked example | a finished sample of the output you want, shown to the model so it copies the format instead of guessing from your description | worked examples
---

On the Monday after the first demonstration, Farah Sheikh brought three messages to the glass meeting room. She had written them on a card. Her team had made them up the evening before, in the style of real customers. None of them was real.

Anaya had insisted on that. Lakshmi Iyer heard about it. She said it was the first sensible thing she had heard about the project. A privacy tool tested on real people's secrets would have been a small scandal of its own.

The first message read: "My name is Amit Sharma. My PAN is ABCDE1234F and I transferred ₹4 lakh from my HDFC account ending 4521. Why was my loan rejected?"

Imran Qureshi typed it into a window. Above it he put one line of his own: "List every piece of personal information in this message." This chapter follows the three hours that came next. The model was doing part of the guard's job. (The guard is the tool that finds and hides personal details.) Its failures taught the team more than its successes did.

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

Anaya read it with a pencil in her hand. She counted four correct items: the name, the PAN, the bank and the last digits of the account. The amount is only a number. It does not point to anyone. A loan rejection cannot be used to find the person either. So the model had listed two items that did not need hiding.

Imran said that listing is not hiding. Hiding is a later step. Then he ran the same message again. This time the list had four items, not six. A third run gave seven. The surname was repeated as an entry of its own. Farah asked the obvious thing. Why does the answer keep changing?

## Temperature: a dial for variety

The answer is in how the model picks each word. Think of it as a parrot that has read a whole library. At every step it has a few likely next words. Each word has a chance of being picked. (The model works in tokens, small pieces of a word, like Lego bricks of text.) A setting called *temperature* decides how adventurous the model is. It controls how willing the model is to pick one of the less likely words.

At a high temperature the model takes chances. Its answers are lively and varied. That suits writing a poem or naming a pet. At a low temperature, near zero, it plays safe. It almost always takes the most likely token. So the same question gets nearly the same answer every time.

Imran lowered the setting and ran the message five times. The five lists were almost the same. For this job, that was what Anaya wanted. The same question should get the same answer on Tuesday as on Monday.

::: watch Consistent is not correct
Low temperature makes answers consistent. It does not make them correct. A model that is wrong at zero is wrong in the same way every time. Nobody has ever made a system right by turning a dial.
:::

## The standing instructions

The second message was in Hinglish. Farah typed it fast, like someone who writes forty of these a day: "Sir mera aadhaar 4321 5678 9012 hai aur ye number 98xxxxxx12 pe call kar lena."

The model found the Aadhaar number. But it also listed "98xxxxxx12" as a mobile number. An agent had already hidden it by typing the x's. If the guard reported that, it would hide the same number twice.

The fix for a problem like this is an instruction. The model forgets everything after each message, like a goldfish. So the instruction must go with every request. Imran opened a second box and typed a short paragraph.

Think of the rules pinned on a shop wall. The staff read them before every order. They say who the assistant is, and what it must and must not do. This is the *system prompt*. It is ordinary text, the same kind of thing as the customer's message. The app just sends it first, every time.

::: def Prompt and system prompt
A *prompt* is the note you hand the model. It holds instructions, examples, and the material the model must work on. The *system prompt* is the part that stays the same from one request to the next.
:::

This helps when you deal with vendors (companies that sell you a product or service). Say a vendor tells you it has customised an AI for your company. Often it has only written a system prompt. That is fine, and it can be worth paying for. But ask what else, if anything, was changed.

## Where it makes things up

The third message was one Imran had been saving: "What documents do I need to renew my driving licence?"

There is nothing personal in it. A good tool would say so and leave it alone. On the first run, the model did exactly that. On the third run it replied, "Personal information: driving licence (document type)." On the fifth run it made something up.

```
Personal information: the customer's city of residence, likely Pune.
```

Farah said there was no Pune in the message. Imran agreed. The model knew nothing about the customer's city. It had been asked for the personal information in a message. So it acted as if an answer was expected. After that question, the likeliest text is a list. And a list has to hold something.

This kind of failure has an unlucky name. A *hallucination* is confident make-believe. It is an answer that is made up and said with a straight face. It looks exactly like a true one. The name makes it sound like a fault in the machine. But the machine is working as designed.

It is guessing likely words in a place that needed silence. A model cannot reliably tell you when it does not know. Saying "I do not know" has to be trained in on its own. Even then it does not always hold.

For the guard, the result was clear. Say the model invents a detail. Then the guard hides something that was never there. If the invention is wrong, nobody notices. There is nothing to compare it with.

## Four techniques, in order of strength

The team spent the rest of the day improving the instruction. Most people write a first prompt as a polite request: "please do this". That works about as well as asking a stranger for directions without saying where you are. It is better to write the prompt like a recipe card. It says what the dish is, and how you will know it came out right.

There are four techniques. They are not equally strong. The table lists them, strongest first.

Table: Four ways to improve a prompt, strongest first
| Technique | What it does | Example from the guard |
| --- | --- | --- |
| A worked example | Shows a finished sample of the output wanted, so the model copies the format instead of imitating a description | A made-up message with the list wanted, line by line, plus an awkward one with no personal detail, answered "Nothing found" |
| Name the job and the reader | Says what the task is and who or what will use the result | "You are checking a customer's chat message for details that could identify one person. Your reader is a program, which will hide whatever you list" |
| Break the work into steps | Makes the model do the parts in order, so the work can be inspected | "First, read the message. Second, list each detail and say where it appears. Third, remove anything that is not about a person" |
| Forbid what has gone wrong | Names a failure you have already seen | "Do not guess a detail that is not in the message" |

A *worked example* is the strongest. It is the one people try last. Describe the output in words, and the model copies your words. Show a finished example, and it copies the format. It is like showing a cook a photo of the finished dish.

Anaya wrote one typical example and one awkward one. Two examples like that beat six similar ones. They also cost far fewer tokens to send.

The fourth technique is the weakest. Use it once or twice, for failures you have really seen. Do not build a long list of rules. Long lists work less well than people hope.

## Rarer is not fixed

That last point leads to the most important idea in this chapter. The team found it out for themselves. Anaya added the forbidding line. The invention of Pune stopped, for a day.

On Tuesday, Farah wrote a message about a cousin who worked "at the bank near the station". The model obeyed the rule. It did not guess a city. Instead it named a bank branch that did not exist.

"It still does it," said Anaya.

"It does it less," said Imran.

An instruction makes a failure rarer. It does not remove the reason the failure happens. The machine is built to continue text. Sometimes the likely next words are false.

::: key Rarer is not fixed
Someone says a problem is solved because a rule was added. Ask one question. Did the rule remove the cause? Or did it only make the problem show up less often? Anaya wrote the words in red at the top of the whiteboard. They stayed there for the rest of the project.
:::

## The cost of a long instruction

There was one more thing to count. With the examples, the steps and the warning, the system prompt had grown. It was one line before. Now it was four hundred tokens. And it goes with every message.

Say there are a hundred thousand chats a month. That is forty million tokens of instruction. It makes no difference whether the customer writes one word or a thousand. It is like paying for an SMS where the same long note is stuck on every one. Imran said the cost was worth paying. But it should be a decision, not an accident.

## Summary

A prompt is the note you hand the model. The standing part goes with every request, because the model remembers nothing. That part is the system prompt.

- Temperature is a dial between variety and sameness. A low setting makes answers consistent, not correct.
- Ask a model for something it does not have, and it often invents it. It uses the same calm voice it uses for the truth. This is hallucination.
- In order of strength, the four tricks are a worked example, naming the job and the reader, breaking the work into steps, and forbidding failures you have already seen.
- None of them removes the cause of a failure. They make it rarer. And every word of instruction is paid for each time it is sent.

Next, Lakshmi's question comes back, and Anaya still has no way to say whether the tool works.

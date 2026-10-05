---
title: Before You Begin
summary: What this book covers, how it is organised, and the people and company whose project runs through it.
course: ch0
---

There are two ways to learn how an AI product is made. One is to build one: write a few lines of code, send a question to a machine, see what breaks and measure how badly. The course app is built for that, and nothing in this book replaces it. The other way is to study the whole subject in order, with explanations and illustrations, until the unfamiliar vocabulary forms a picture that can be held in the head. This book is the second way.

It covers the same ground as the course app, in the same order, with the same terms. It contains no exercises and no code to type. In their place it uses a single extended case, because an idea is easier to remember when it is attached to a decision that someone had to make.

## The case

Sahaj is a company in Pune whose app lets people pay electricity bills and, more recently, apply for small loans. A chatbot inside the app answers customers' questions. In March a product manager named Anaya Deshmukh finds that customers keep typing their Aadhaar numbers into it, although nobody has asked them to.

Over the forty-seven chapters that follow, she and her colleagues build a small tool, Bharat Privacy Guard, that notices personal details in English, Hindi and the mixture of the two that most people type, and keeps those details from travelling further than they should. The project is a vehicle for the subject. To build it, Anaya must decide what is worth building, learn what an AI system is made of, judge whether it works, estimate what it costs, anticipate how it fails, limit what it is allowed to do, and put it in front of real users. Each chapter takes one of those problems at the point where the project needs it.

## How the book is organised

The chapters form one numbered sequence in seven parts.

Table: The seven parts of the book
| Part | Chapters | Subject |
| --- | --- | --- |
| 1 | 1 to 7 | Choosing a problem and planning the work |
| 2 | 8 to 13 | What a modern AI system is, and how to talk to one |
| 3 | 14 to 19 | Giving the machine documents, and assembling a whole system |
| 4 | 20 to 26 | Tools, reasoning, evaluation at scale and cost |
| 5 | 27 to 32 | Messy data, privacy, rules and design for failure |
| 6 | 33 to 39 | How the machinery works and how to secure it |
| 7 | 40 to 47 | Shipping a product, earning from it, and working in the field |

Each chapter has the same layout. A short list at the top states what the chapter covers. The opening paragraphs report a piece of the case. Numbered sections then explain the ideas behind it, with definitions, illustrations and tables set apart in boxes. A summary closes the chapter, and a list of key terms follows it.

## How to read it

Read the chapters in order. Each one begins from where the previous chapter stopped, and each uses only terms that earlier chapters have defined. The book is checked for this: a term that appears before its defining chapter is treated as an error.

A new term is highlighted the first time it is used in the chapter that defines it, and its meaning appears when the pointer rests on it. The key terms at the end of each chapter repeat the definitions, and the glossary at the back lists every term in alphabetical order with the chapter that introduces it. Beneath each chapter title the book names the chapters of the course app that cover the same ground, which is where to go to practise.

No knowledge of AI, programming or business is assumed.

## A note on the case

Sahaj, Anaya, her colleagues and the customers are invented, and so are the figures they work with. The tools and techniques are real, and the failures described are the kind that occur in real systems.

Nothing in this book is legal advice. The tool at the centre of the case helps an organisation collect and pass on less private information than it otherwise would. It is never described as making anyone compliant with a law, because no tool of that kind can.

## The people

Table: The people in the case
| Name | Role | What to know |
| --- | --- | --- |
| Anaya Deshmukh | Product manager | Careful with evidence, slower to admit what she does not know |
| Imran Qureshi | Lead engineer | Built the chatbot's infrastructure; distrusts any plan that contains the word "just" |
| Lakshmi Iyer | Head of compliance | Twenty years in banking; her standard question is "how would we know?" |
| Farah Sheikh | Support lead | Reads more customer writing than anyone else in the company |
| Dr. Meenakshi Rao | Retired linguist | Anaya's former teacher, consulted by telephone on Sunday mornings |

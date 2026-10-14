---
title: Before You Begin
summary: What this book covers, how it is organised, and the people and company whose project runs through it.
course: ch0
---

There are two ways to learn how an AI product is made. The first is to build one. You write a few lines of code, send a question to a machine, see what breaks, and measure how badly. The course app is made for that way of learning, and nothing in this book replaces it.

The second way is to study the whole subject in order. Someone explains it to you, step by step, until the new words stop being strange and start to form a picture you can hold in your head. This book is that second way.

It covers the same ground as the course app, in the same order, with the same terms. There are no exercises in it and no code to type. Instead it follows one story from beginning to end. That's because an idea is easier to remember when it is tied to a decision that someone actually had to make.

## The case

Sahaj is a company in Pune. Its app lets people pay electricity bills and, more recently, apply for small loans. Inside the app there is a chatbot that answers customers' questions.

One day in March, a product manager named Anaya Deshmukh notices something odd. Customers keep typing their Aadhaar numbers into the chatbot, even though nobody has asked them to.

Over the forty-seven chapters that follow, she and her colleagues build a small tool called Bharat Privacy Guard. It notices personal details in English, in Hindi, and in the mixture of the two that most people type. Then it keeps those details from travelling further than they should.

The tool is only a vehicle. The real subject is everything Anaya has to do along the way. She has to decide what is worth building. She has to learn what an AI system is made of, and judge whether it works. She has to estimate what it costs and work out how it can fail. She has to limit what it is allowed to do, and finally put it in front of real users. Each chapter takes up one of these problems at the moment the project needs it.

## How the book is organised

The chapters make one numbered sequence, divided into seven parts. The table below shows what each part is about.

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

Every chapter has the same layout, so you always know where you are. A short list at the top says what the chapter covers. The opening paragraphs tell a piece of the story. Then come numbered sections that explain the ideas behind it, with definitions, illustrations and tables set apart in boxes. A summary closes the chapter, and a list of key terms follows it.

## How to read it

Read the chapters in order. Each one begins where the last one stopped, and each uses only words that earlier chapters have already explained. The book is checked for this. If a term shows up before the chapter that explains it, that counts as a mistake.

A new term is highlighted the first time it appears in the chapter that explains it. Rest your pointer on it and its meaning pops up. The key terms at the end of each chapter repeat the definitions. The glossary at the back lists every term in alphabetical order, with the chapter that introduces it.

Under each chapter title, you'll also see which chapters of the course app cover the same ground. That's where to go when you want to practise.

You don't need to know anything about AI, programming or business to start.

## A note on the case

Sahaj, Anaya, her colleagues and the customers are all invented, and so are the figures they work with. The tools and techniques are real, though, and so are the kinds of failure described.

Nothing in this book is legal advice. The tool at the centre of the story helps an organisation collect and pass on less private information than it otherwise would. The book never says it makes anyone compliant with a law, because no tool of that kind can.

## The people

You'll meet five people again and again. Here they are in one place.

Table: The people in the case
| Name | Role | What to know |
| --- | --- | --- |
| Anaya Deshmukh | Product manager | Careful with evidence, slower to admit what she does not know |
| Imran Qureshi | Lead engineer | Built the chatbot's infrastructure; distrusts any plan that contains the word "just" |
| Lakshmi Iyer | Head of compliance | Twenty years in banking; her standard question is "how would we know?" |
| Farah Sheikh | Support lead | Reads more customer writing than anyone else in the company |
| Dr. Meenakshi Rao | Retired linguist | Anaya's former teacher, consulted by telephone on Sunday mornings |

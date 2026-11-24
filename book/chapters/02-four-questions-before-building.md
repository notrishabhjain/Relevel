---
title: Four Questions Before Building
summary: An engineer tests a promising idea against the four ways a product can fail. His example is a feature that nobody found. You learn the three stages of making a product, the four product risks, and how selling to people differs from selling to companies.
course: a2
goals:
  - name the three stages every product passes through, and say which one usually fails first
  - test an idea against the four product risks
  - tell apart the person who pays, the person who uses and the person who can say no
  - treat what an AI assistant says about your own customers as a draft that needs proof
terms:
  - discovery | finding out what the neighbourhood needs before you open a shop. The part of making a product where you learn if a problem is real and worth solving | 
  - delivery | cooking the dish well in the kitchen. The part of making a product where you build it properly: the plan, the written details, the code and the checking | 
  - distribution | putting the dish on the counter where people can see it. The part of making a product where people find it, try it and keep using it | 
  - B2C | a shop that sells to one person at a time. Business to consumer: a product sold to individual people, who both buy it and use it | business to consumer
  - B2B | a shop that sells to other shops. Business to business: a product sold to companies, where the person who pays is often not the person who uses it | business to business
  - product risk | one leg of a four-legged table. Break one leg and the table falls. It is one of four things that can sink a product: nobody wants it, nobody can use it, it cannot be built, or it cannot pay for itself | product risks
  - usability | a door you can open without a sign. Whether people can work out how to use something without help | 
  - feasibility | whether the kitchen can really cook the dish. Whether the team can build it with the time, skills, data and money it has | 
  - viability | whether the shop earns more than it spends. Whether the product works for the business: its income, its costs, the law and its good name | 
---

The morning after her evening with the chat export, Anaya showed Imran Qureshi a printout. An export is a copy of data saved out into a file. The printout had thirty-seven yellow flags. Each flag marked one conversation that held personal details. Imran is the lead engineer. He built most of the chatbot's infrastructure (the machinery behind it that keeps it running). He read the flags one at a time, without a word.

One flag marked a customer who had sent a photograph of a cheque as an attachment (a file sent along with a message). "I wrote the part that handles attachments," he said. "I never thought about what people would put in them."

Anaya asked him a plain question. Was building a tool to fix this a good idea? And could he tell her why it might not be? He began with a feature the company had built eighteen months earlier. No one had found it. In this chapter we use that feature to see how products are made and how they fail. We also see which questions an idea should survive before any work begins.

## The case: the reminder nobody found

Last year Sahaj noticed that customers kept forgetting to pay their bills. They were charged late fees. The customers disliked this. The company did not especially want to collect the fees either. So a small team built a reminder. It was sent two days before a bill fell due.

The work was careful. They tested the wording with a dozen customers. The messages arrived on time. Imran even checked that none were sent in the middle of the night.

Three months after launch, fewer than two customers in a hundred had switched the reminder on. The switch sat in the settings, three screens down. Almost nobody went to the settings. It is like a fire exit sign hidden behind a door. The sign is fine. Nobody can see it.

The team had asked if the reminder was good. It was. They had never asked if anyone knew it existed. Anaya wrote the lesson in one sentence. She would use it again later. A feature nobody finds has the same effect as a feature nobody built.

## Three stages of making a product

The reminder went through three stages, like every product. Makers may not think of them as separate. But the stages are there. Think of a tea stall. First you find out what the street wants. Then you brew it well. Then you put the cups where people can see them.

::: key The three stages
*Discovery* is finding out if a problem is real. You learn who has it and how badly. *Delivery* is building the answer well: the plan, the written details (the specification), the code and the checking. *Distribution* is getting people to find the product, try it and keep using it.
:::

The reminder did well at the first two stages. It failed at the third. That one failure wiped out all the other work.

This is common. A product usually fails at its weakest stage. Teams are strongest at the stage they enjoy. Engineers like delivery. Researchers like discovery. Both tend to forget distribution. Yet distribution gives the proof that feeds back into discovery. It shows who stayed, who left, and why.

## The four product risks

Back at the whiteboard, Imran proposed a test for the idea in the printout. He wrote four words: *value*, *usability*, *feasibility* and *viability*. Think of a table with four legs. Each word names one leg. Each one is a *product risk*. That is a separate way for a product to fail. Break any one leg and the table falls.

Anaya went through them one by one for the privacy tool. The table shows her first guess. Read the right-hand column slowly. It has some honest "I don't know" answers.

Table: The four product risks, with Anaya's first assessment of the privacy tool
| Risk | The question | Her assessment |
| --- | --- | --- |
| Value | Would anyone choose this over what they do now? | Probably. Today most staff do nothing, and doing nothing is a competitor that is hard to displace |
| *Usability* | Can the intended users work out how to use it without help? | Unclear. Customers would never see the tool. Support staff would see its effects, and engineers would have to connect it |
| *Feasibility* | Can the team build it with its time, skills, data and money? | Partly. Twelve-digit numbers in groups of four, yes. Hindi names typed in English letters, no idea |
| *Viability* | Does it work for the business: revenue, cost, the law, reputation? | Unknown. Nobody had yet asked what it would cost per use, or what the head of compliance would say |

Three of these words need a plain meaning. *Usability* is whether people can work out how to use something without help. *Feasibility* is whether the team can build it with the time, skills, data and money it really has. *Viability* is whether the product works for the business that would offer it.

Two things in the table are worth noticing. First, usability for this tool does not mean buttons. The users would be engineers connecting it to other software. So the real question became this. Can an engineer who has never met Anaya connect it on a Friday afternoon? Can he do it without messaging her?

Second, "no idea" in the feasibility row is useful. It marks the most expensive kind of unknown. Write it down early, and somebody will test it early.

::: watch Teams check the risk they like
Many failed features passed the test the team was looking at. They failed the one it skipped. A review that looks at only one risk will usually decide the idea is sound.
:::

### Two extra questions for software that reads text

Software that reads and writes text adds one question to feasibility. It adds another to viability.

The feasibility question is this. Is the software right often enough? A tool that is right four times in five is fine for suggesting titles for a birthday card. It is not fine when one mistake could cost a customer their savings. The same accuracy can be good enough for one job and useless for another. The tool will not tell you which.

The viability question is about cost. An ordinary feature costs almost nothing each time a person clicks it. A feature that reads and writes text costs real money on every use. It is like a taxi meter, not a bus pass. So viability depends on how often people use the feature. It also depends on what you can charge for each use.

## Who pays, who uses, who can say no

Think of a wedding. One person pays the caterer. Other people eat the food. And one elder can say "no, not this menu". They can be three different people. A product has the same three roles.

Sahaj sells to individuals. A woman pays an electricity bill. A man applies for a loan. This is called *B2C*, business to consumer. It is like a shop selling to one customer at a time. The person who pays is the person who uses the product. The decision takes minutes. It mostly depends on whether the product feels easy.

Now suppose the privacy tool worked well. Other companies with chat windows would want it. Lenders, insurers, clinics and schools would ask. Selling to them would be *B2B*, business to business. It is like a shop selling to other shops. The shape of the sale is different. The table below puts the two side by side.

Table: How selling to people differs from selling to companies
| | B2C | B2B |
| --- | --- | --- |
| Who pays | The user | A company, often through a budget the user does not control |
| Who decides | The user, quickly | Several people, over weeks or months |
| Who can block the sale | Nobody but the user | Security or legal staff, who owe the user nothing |
| What a large customer does | Nothing special | Can reorder the supplier's priorities by demanding a feature before it will sign |

A practical rule follows. For every customer, ask three questions. Who pays? Who uses it? Who can say no?

For Sahaj, the answers were these. The company pays. Support staff and engineers use the tool. And the head of compliance, Lakshmi Iyer, can refuse it. Anaya saw that she had spent half an hour designing a product around the one person who could stop it. She had not once asked her opinion.

## The assistant's confident paragraphs

On the way back to her desk, Anaya did something she had done for months. She asked an AI assistant for a short overview. Why do people in India share identity numbers in chats? It returned four fluent paragraphs. An AI assistant is like a parrot that has read a whole library. It sounds sure even when it is wrong.

One paragraph said customers overshared because of "low digital literacy and high trust in official-sounding services". Another said the tendency was "especially pronounced among first-time loan applicants".

She asked herself where the assistant could have learned this. It had never seen Farah's transcripts. The paragraphs read like a thoughtful remark at a dinner table. They sounded right, the way an average opinion sounds right. They were not necessarily wrong. But nobody had checked them.

::: key A draft is not a finding
An assistant can draft, summarise, suggest questions and criticise a plan. It cannot sit across from your customers. What it says about your market is a blend of what it has read. For your own users, it is only a hypothesis (a guess waiting for proof) until something real checks it.
:::

So Anaya added a second working rule under the first. Every claim in her notes must trace to evidence. If it does not, she marks it as an assumption (something taken as true without proof).

Beside the sentence about first-time applicants she wrote: "Unsupported. What would settle it: whether the 37 are mostly first-time applicants. Farah can tell me in ten minutes." Checking usually costs no more than a short chat.

## What remained unknown

By the end of the afternoon, the whiteboard held the four risks. Beneath them was a list of questions nobody could answer yet. Could the tool find names in Hindi typed in English letters? What would Lakshmi say? Who actually typed these numbers, and why? It was like a map with blank patches. The blank patches were the honest part.

That last question is not technical. Anaya had thirty-seven conversations. She had no idea what the person typing the thirty-seventh was thinking. She also knew she tended to ask questions in a way that hoped for a yes. The next chapter is about repairing that habit.

## Summary

Every product passes through discovery, delivery and distribution. It tends to fail at the weakest one. The reminder at Sahaj was well built, and nobody had tested the third stage. That made it useless. Think of the cup that nobody could see.

- You test an idea against four product risks: value, usability, feasibility and viability. Any one can sink it. Teams usually check only the one they like.
- For software that reads and writes text, feasibility includes whether it is right often enough for the task. Viability includes what each use costs.
- B2C and B2B differ in who pays, who decides and who can block. For each customer, ask who pays, who uses and who can say no.
- What an AI assistant says about your own customers is a draft until evidence checks it. Every claim in your notes should trace to evidence or be marked as an assumption.

Next, Anaya learns to ask customers what they actually did, not what they might do.

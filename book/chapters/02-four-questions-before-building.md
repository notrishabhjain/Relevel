---
title: Four Questions Before Building
summary: An engineer tests a promising idea against the four ways products fail, using a feature that nobody found as the example. You learn the three stages of making a product, the four product risks, and the difference between selling to people and selling to companies.
course: a2
goals:
  - name the three stages every product passes through and say which one usually fails first
  - test an idea against the four product risks
  - distinguish the person who pays, the person who uses and the person who can say no
  - treat a claim from an AI assistant about your own customers as a draft that needs evidence
terms:
  - discovery | the part of making a product where you find out whether a problem is real and worth solving | 
  - delivery | the part of making a product where you build it well: the plan, the specification, the code, the quality | 
  - distribution | the part of making a product where people find it, try it and keep using it | 
  - B2C | business to consumer: a product sold to individual people, who are both the buyers and the users | business to consumer
  - B2B | business to business: a product sold to companies, where the person who pays is often not the person who uses it | business to business
  - product risk | one of the four things that can sink a product: nobody wants it, nobody can use it, it cannot be built, or it cannot pay for itself | product risks
  - usability | whether people can work out how to use something without help | 
  - feasibility | whether the team can actually build it with the time, skills, data and money it has | 
  - viability | whether the product works for the business: its revenue, its costs, the law and its reputation | 
---

The morning after her evening with the chat export, Anaya showed Imran Qureshi a printout. It had thirty-seven yellow flags, one for each conversation that held personal details. Imran is the lead engineer who built most of the chatbot's infrastructure. He read the flags one at a time, without a word.

One flag marked a customer who had sent a photograph of a cheque as an attachment. "I wrote the part that handles attachments," he said, "and I never thought about what people would put in them."

Anaya asked him a plain question. Was building a tool to fix this a good idea? And could he tell her why it might not be? He began his answer with a feature the company had built eighteen months earlier, which no one had found. In this chapter we use that feature to see how products are made, how they fail, and which questions an idea should survive before any work begins.

## The case: the reminder nobody found

Last year Sahaj noticed that customers kept forgetting to pay their bills and were charged late fees. The customers disliked this, and the company didn't especially want to collect the fees either. So a small team built a reminder, sent two days before a bill fell due.

The work was careful. They tested the wording with a dozen customers. The messages arrived on time. Imran even checked personally that none were sent in the middle of the night.

Three months after launch, fewer than two customers in a hundred had switched the reminder on. The switch sat in the settings, three screens down, and almost nobody went to the settings.

The team had asked whether the reminder was good, and it was. They had never asked whether anyone knew it existed. Anaya wrote the lesson down in a sentence she would reuse later: a feature nobody finds has the same effect as a feature nobody built.

## Three stages of making a product

The reminder went through the same three stages as every product, whether or not its makers think of them separately. Here they are in plain words.

::: key The three stages
*Discovery* is finding out whether a problem is real, who has it and how badly. *Delivery* is building the solution well: the plan, the written specification, the code and the checking. *Distribution* is getting people to find the product, try it and keep using it.
:::

The reminder did well at the first two stages and failed at the third. That one failure cancelled all the rest of the work.

This is common. A product usually fails at its weakest stage, and teams tend to be strongest at the stage they enjoy. Engineers favour delivery. Researchers favour discovery. Both tend to neglect distribution, even though it produces the evidence that feeds back into discovery: who stayed, who left, and why.

## The four product risks

Back at the whiteboard, Imran proposed a test for the idea in the printout. He wrote four words: *value*, *usability*, *feasibility* and *viability*. Each one names a *product risk*, which is a separate way in which a product can fail. Any one of them is enough to sink it.

Anaya went through them one by one for the privacy tool. The table shows her first assessment. Read the right-hand column slowly, because it includes some honest "I don't know" answers.

Table: The four product risks, with Anaya's first assessment of the privacy tool
| Risk | The question | Her assessment |
| --- | --- | --- |
| Value | Would anyone choose this over what they do now? | Probably. Today most staff do nothing, and doing nothing is a competitor that is hard to displace |
| *Usability* | Can the intended users work out how to use it without help? | Unclear. Customers would never see the tool. Support staff would see its effects, and engineers would have to connect it |
| *Feasibility* | Can the team build it with its time, skills, data and money? | Partly. Twelve-digit numbers in groups of four, yes. Hindi names typed in English letters, no idea |
| *Viability* | Does it work for the business: revenue, cost, the law, reputation? | Unknown. Nobody had yet asked what it would cost per use, or what the head of compliance would say |

Three of these words need a plain meaning. *Usability* is whether people can work out how to use something without help. *Feasibility* is whether the team can build it with the time, skills, data and money it actually has. *Viability* is whether the product works for the business that would offer it.

Two things in the table are worth noticing. First, usability for this tool doesn't mean buttons. The users would be engineers connecting it to other software. So the real question became: can an engineer who has never met Anaya connect this on a Friday afternoon without messaging her?

Second, "no idea" in the feasibility row is useful. It marks the most expensive kind of unknown. If you write it down early, somebody will test it early.

::: watch Teams check the risk they like
Many failed features passed the test the team was focused on and failed the one it skipped. A review that looks at only one risk will usually decide that the idea is sound.
:::

### Two extra questions for software that reads text

Software that reads and writes text adds one question to feasibility and another to viability.

The feasibility question is whether the software is right often enough. A tool that is right four times in five is fine for suggesting titles for a birthday card. It is not fine for a task where one mistake could cost a customer their savings. The same accuracy can be good enough for one job and useless for another, and nothing in the tool tells you which.

The viability question is about cost. An ordinary feature costs almost nothing each time a person clicks it. A feature that reads and writes text costs real money on every use. So viability depends on how often people use the feature, and on what you can charge for each use.

## Who pays, who uses, who can say no

Sahaj sells to individuals: a woman paying an electricity bill, a man applying for a loan. This is called *B2C*, business to consumer. The person who pays is the person who uses the product. The decision takes minutes, and mostly turns on whether the product feels easy.

Now suppose the privacy tool worked well. Other companies with chat windows would want it: lenders, insurers, clinics, schools. Selling to them would be *B2B*, business to business, and the shape of the sale is different. The table below puts the two side by side.

Table: How selling to people differs from selling to companies
| | B2C | B2B |
| --- | --- | --- |
| Who pays | The user | A company, often through a budget the user does not control |
| Who decides | The user, quickly | Several people, over weeks or months |
| Who can block the sale | Nobody but the user | Security or legal staff, who owe the user nothing |
| What a large customer does | Nothing special | Can reorder the supplier's priorities by demanding a feature before it will sign |

A practical rule follows. For every customer, ask three questions: who pays, who uses it, and who can say no.

For Sahaj, the answers were these. The company pays. Support staff and engineers use the tool. And the head of compliance, Lakshmi Iyer, can refuse it. Anaya realised that she had spent half an hour designing a product around the one person who could stop it, without once asking her opinion.

## The assistant's confident paragraphs

On the way back to her desk, Anaya did something she had been doing for months. She asked an AI assistant for a short overview of why people in India share identity numbers in chats. It returned four fluent paragraphs.

One said that customers overshared because of "low digital literacy and high trust in official-sounding services". Another said the tendency was "especially pronounced among first-time loan applicants".

She asked herself where the assistant could have learned this. It had never seen Farah's transcripts. The paragraphs read like a thoughtful remark at a dinner table. They were plausible in the way an averaged opinion is plausible. They weren't necessarily wrong, but nobody had checked them.

::: key A draft is not a finding
An assistant can draft, summarise, suggest questions and criticise a plan. It cannot sit across from your customers. What it says about your market is a blend of what it has read. For your particular users, it is only a hypothesis until something real has checked it.
:::

So Anaya added a second working rule under the first. Every claim in her notes must trace to evidence, or be marked as an assumption.

Beside the sentence about first-time applicants she wrote: "Unsupported. What would settle it: whether the 37 are mostly first-time applicants. Farah can tell me in ten minutes." Checking usually costs no more than a short conversation.

## What remained unknown

By the end of the afternoon, the whiteboard held the four risks. Beneath them was a list of questions nobody could answer yet. Could the tool find names in Hindi typed in English letters? What would Lakshmi say? Who actually typed these numbers, and why?

That last question isn't technical. Anaya had thirty-seven conversations and no idea what the person typing the thirty-seventh was thinking. She also knew that she tended to ask questions in a way that hoped for a yes. The next chapter is about repairing that habit.

## Summary

Every product passes through discovery, delivery and distribution, and tends to fail at the weakest of them. The reminder feature at Sahaj was well built, and nobody had tested the third stage. That made it useless.

- You test an idea against four product risks: value, usability, feasibility and viability. Any one can sink it, and teams usually check only the one they like.
- For software that reads and writes text, feasibility includes whether it is right often enough for the task. Viability includes what each use costs.
- B2C and B2B differ in who pays, who decides and who can block. For each customer, ask who pays, who uses and who can say no.
- A claim from an AI assistant about your own customers is a draft until evidence checks it. Every claim in a set of notes should trace to evidence or be marked as an assumption.

Next, Anaya learns to ask customers about what they actually did, instead of what they might do.

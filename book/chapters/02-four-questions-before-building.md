---
title: Four Questions Before Building
summary: An engineer asks the question every idea should survive, and a feature nobody noticed teaches the team where products really fail.
course: a2
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

Imran read the printout the way he read everything, from the bottom up, with a pencil held like a cigarette.

The conference room at Sahaj was a glass box with a whiteboard nobody trusted, because it still carried the ghost of a diagram from some meeting two years ago. Anaya had put the printout on the table, along with thirty-seven yellow flags, one per conversation. Imran's tea, which he had promised and brought, went cold beside his elbow while he worked through the flags one by one, saying nothing.

"It's real," he said at last.

"I know it's real. I counted."

"No, I mean it's real." He tapped a flag. "This one is a person who sent a photo of a cheque. Nobody asked for a cheque. They just sent it. I wrote the part of the chatbot that handles attachments and I never thought about what people would put in them." He looked up. "So what are you asking me?"

Anaya had practised the answer on the walk in. It had sounded better on the walk. "I'm asking whether it is a good idea to build something to fix it. And I would like you to tell me why it is not."

That made him smile, the first time that morning. "Good. Because I've watched this company build four things nobody used. I'd like to be sure about the fifth."

## The reminder nobody found

He told her about the reminders.

Eighteen months earlier, Sahaj had decided that customers were forgetting to pay their bills. They were, and it was costing them late fees, which the customers hated and the company mostly did not want to charge. A small team had built a feature that would send a reminder two days before a bill was due. It had been carefully done. The wording had been tested on a dozen customers. The messages arrived on time. Imran had personally checked that they did not fire in the middle of the night.

Three months after launch, fewer than two in a hundred customers had turned it on.

"We never got the question right," he said. "We asked, 'is the reminder good?' and it was. What we should have asked was 'does anyone know it exists?'. The switch was in settings, three screens down. Nobody ever went to settings."

Anaya wrote the sentence down because it seemed to be the sort of thing she would need again. *A feature nobody finds has the same effect as a feature nobody built.*

What Imran had described was a loop with three parts, and every product goes around it, whether the people making it have noticed or not. The first part is *discovery*: finding out whether the problem is real, for whom, and how badly. The second is *delivery*: building the thing well, which means the plan, the written specification, the code and the checking. The third is *distribution*: getting people to find it, try it and keep coming back. The reminder had been a triumph of discovery and delivery and a failure of distribution, and the failure had cancelled the rest. Products usually die at the weakest of the three. The loop matters because what you learn at the third stage, who stays and who leaves, feeds the first stage again.

## Four ways to fail

"Right," said Imran. "Let's find out which of the four this one dies of."

He turned to the whiteboard, found the one pen that worked, and wrote four words across the top. Anaya had seen the same four words in a book, but she had never seen anyone use them as a weapon.

*Value. Usability. Feasibility. Viability.*

"Pick one," he said, "and be hard on yourself."

She started with value, because it came first and because she was nervous of the others. Would anyone choose to use this over whatever they did now? Today, nobody did anything. That was the trouble. Farah's team sometimes spotted a number in a chat and blanked it by hand in the export, when they remembered, and mostly they did not remember. "Nothing" is a competitor too, and a surprisingly tough one. People will put up with a lot before they change a habit. But Anaya had thirty-seven flags and Imran's own reaction to go on, and she was fairly sure value would hold.

Usability was stranger. "Who would be using it?" Imran asked. Not the customers; they would never see it. Farah's team would see its effects, a number blurred here and there, a note saying something had been hidden. Engineers would have to connect it. The honest answer was that it would have almost no screen of its own, which meant that the people who used it would be the people who built things around it, and usability for them meant something quite different from buttons. She wrote: *Can an engineer who has never met me wire this in on a Friday afternoon without messaging me?*

Feasibility was the one she had been avoiding. "Can we actually build it? With what time, what skills, what data, what money?" She stopped. "Twelve digits in groups of four, yes. I think I could write that myself. A name in Hindi typed in English letters? I have no idea."

"That is a very useful sentence," said Imran. "'I have no idea.' Write it down. It is the most expensive kind of idea."

Viability came last, and it came with a pencil tap on the table. "Who pays? What does it cost every time it runs? What does Lakshmi say?"

The four are called, in the trade, *product risks*. Any one of them can sink a product on its own, and teams are good at checking the one they happen to like. Many failed features passed the test the team was focused on and failed the one they skipped. For a machine that reads and writes text, feasibility carries an extra question that ordinary software does not have: is it right often enough? A tool that is right four times in five is wonderful for suggesting titles for a birthday card. It is a disaster for the one job in the building where being wrong once could cost a customer their savings. The same accuracy can be good enough for one task and unusable for another, and nothing in the tool tells you which.

There was a second cost, too, which Anaya had half-noticed and now saw clearly. An ordinary feature costs almost nothing each time someone clicks it. A feature that reads and writes text costs real money every single time it runs. So viability depends not only on whether people will use it, but on how often, and on what they can be charged.

## Who pays, who uses, who says no

"One more thing," Imran said, "because it changes everything and nobody tells you."

He drew two boxes. In the first he wrote *customers pay Sahaj*. In the second, *companies pay a supplier*.

Sahaj, he pointed out, sold to individuals: a woman paying an electricity bill, a man applying for a loan. That is *B2C*, business to consumer. The person who pays is the person who uses the app, and they decide in minutes, mostly on whether it feels easy. If Anaya built a privacy tool only for Sahaj's own chatbot, the "customer" would be an internal team, and the sale would be a conversation in a corridor.

But Anaya had already been thinking beyond Sahaj, and he could see it on her face. If the tool worked, other companies would want it: lenders, insurers, clinics, schools, anyone whose chat window collected more than it meant to. Selling to those would be *B2B*, business to business, and B2B is a different game. The person who loves the demo is rarely the person who signs. Someone controls the budget, and often it is not the user. Someone in security or legal can block the sale and owes the user nothing. A single large customer can reorder a company's priorities, because if their security team needs something before they will sign, it moves to the top, whether or not one user ever asked.

"So for every customer," he said, "ask three questions. Who pays? Who uses it? Who can say no?"

Anaya looked at the whiteboard. For Sahaj the answers were: the company pays, Farah's team and the engineers use it, and Lakshmi can say no. She had not spoken to Lakshmi Iyer yet. She suspected she had, for the last half hour, been designing a product around the one person in the building who had the power to stop it, without once having asked her what she thought.

## What the assistant wrote

On the way back to her desk, Anaya did something she had been doing for months and was beginning to feel uneasy about. She opened an AI assistant, described the problem, and asked it to write her a short overview of why people in India share identity numbers in chats.

It wrote four confident paragraphs. They were very good paragraphs. One of them said that customers overshared because of "low digital literacy and high trust in official-sounding services", and a second explained how the tendency "was especially pronounced among first-time loan applicants".

She read it twice and thought: *where does it know that from?*

It could not have been from Farah's transcripts, which it had never seen. It was, she realised, something a thoughtful person might say at a dinner party. It sounded right in precisely the way an averaged opinion sounds right. It was not wrong, necessarily. It was unchecked. An assistant can draft, summarise, suggest questions and criticise a plan, all of which are useful, but it cannot sit across from your customers, and what it says about your market is a blend of what it has read, not a fact about your people.

So she made herself a second rule, to sit beneath the first. Every claim in her notes would trace to evidence, or be marked as an assumption. She went back to the paragraph, found the sentence about first-time applicants, and wrote beside it: *Unsupported. What would settle it: whether the 37 are mostly first-time applicants. Farah can tell me in ten minutes.* It cost nothing to check. Most of the time, the cost of checking is a short conversation.

## Where this leaves her

By the end of the afternoon the whiteboard looked like the work of a more organised person than either of them. Four words, four short paragraphs, and underneath them a list of things nobody knew:

*Can we find names in Hindi typed in English letters? What does Lakshmi say? Who actually types these numbers, and why?*

That last question was not about technology at all. She had thirty-seven conversations and no idea what was going through the head of the person who typed the thirty-seventh. She had Imran's reaction and her own count, and neither of those was a customer.

"You can't answer that from here," Imran said, capping the pen. "You'll have to go and ask them."

Anaya nodded. She had interviewed people before, and she knew her own weakness: she asked questions the way people do when they are hoping the answer will be yes. That was going to be a problem.

## What to carry forward

Every product goes round three stages: finding out whether the problem is real, building the thing well, and getting people to find and keep using it. It tends to die at the weakest. Before building, an idea is worth testing against four risks: that nobody wants it, that nobody can use it, that it cannot be built, and that it cannot pay for itself. Selling to consumers is a different job from selling to companies, because in the second the person who pays, the person who uses and the person who can say no are often three different people. And whatever an assistant tells you about your own customers is a draft, not a finding, until something real has checked it.

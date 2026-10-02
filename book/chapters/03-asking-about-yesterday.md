---
title: Asking About Yesterday
summary: Five conversations teach a product manager that the useful question is never "would you like this?", and that the problem was not quite where she thought it was.
course: a3
terms:
  - user interview | a conversation held to learn what a person actually did and needed, not whether they would like your idea | interview, interviews
  - leading question | a question that suggests the answer the asker is hoping for | leading questions
  - job to be done | the progress a person is trying to make in their life, which they "hire" a product to help with | jobs to be done, job-to-be-done
  - five whys | asking "why?" again and again about each answer, to get from a symptom towards its causes | 
  - persona | a short description of one type of user, built only from what interviews showed | personas
  - problem statement | one or two sentences saying who has the problem, what it is, and what it costs them today | problem statements
  - riskiest assumption | the thing that must be true for your idea to work and that you are least sure of, so the one to test first | riskiest unknown
---

The first interview was a disaster, and it took Anaya until the end of it to notice.

She had asked Farah Sheikh to give her half an hour, and Farah had come with a cup of coffee and her laptop closed, which was a good sign; people who open laptops are people who are waiting for you to finish. Anaya had a list of questions. She started with the one she was proudest of.

"Don't you think it's terrible that customers' identity numbers end up in the support chat?"

"Oh, it's awful," said Farah at once. "Absolutely. Somebody should do something."

"And would a tool that hid them automatically be useful?"

"Definitely. That would be so helpful."

Anaya wrote *Definitely* in her notes, underlined it twice, and felt wonderful for nearly ten minutes. Then she read the page back and saw what was on it. Two answers, each one the answer she had asked for, delivered by a warm and agreeable person who wanted her to feel good. If she had asked "Isn't it wonderful that there are so many numbers in the chat?" she suspected Farah would have found something nice to say about that too.

A question that hands the answer to the person being asked is called a *leading question*. People are kind, and a kind person given a hint will oblige. Anaya had gone looking for evidence and had collected agreement, which is a different and much cheaper thing.

## The three rules

That evening she dug out a book she had been recommended years ago and never finished, a short one with a joke in the title about asking your mother whether she liked your business idea. Her mother would say yes. Her mother loved her. The author's whole argument was that this told you nothing.

He offered three rules, and Anaya copied them onto an index card:

*Talk about their life, not about your idea. Ask about specific things they did in the past, not about what they might do in future. Talk less, listen more.*

The difference between a good question and a bad one, she realised, was almost always the tense. Questions about the future ("would you use it?", "how much would you pay?") produce polite fiction. Questions about the past ("tell me about the last time…") produce stories, and stories contain things the teller did not know they were going to say.

She rewrote her list. Where she had written *Isn't it frustrating when numbers leak?*, she wrote *Tell me about the last time you saw an identity number in a chat. What did you do?* Where she had written *Would you pay for a tool that fixes this?*, she wrote *What do you do about it today, and what does that cost you?* The question she had been most pleased with, "Do you think AI could help?", went in the bin altogether and was replaced by *Have you tried anything? What happened?*

The result was a list of questions that did not mention her idea at all. That felt strange and was the point.

A *user interview*, done this way, is closer to listening to a witness than to taking a vote. Opinions about the future are weak evidence. Specific stories about the past are strong evidence, and a person who has told you three of them has told you more than a hundred who said they would "definitely" use something.

## Five conversations

Over the next week she held five. She kept each to thirty minutes, took notes by hand, and numbered them so that every line could later be traced back.

Farah, second time round, told her something the first interview had buried. When an agent saw a number in a chat, there was no rule about what to do. Some blanked it in the export. Some flagged it to Farah. Most did nothing, because the chat had already moved on and nobody wanted to be the person who held up a customer to deal with paperwork.

Suresh Gaikwad, a loan officer, said he sometimes asked customers to type in their numbers on purpose, so he could look them up faster. He did not think of it as a problem. He thought of it as speed.

Pooja Nair, a nurse who had taken a small loan the previous winter, was the first customer Anaya spoke to. She remembered the chat clearly, because she had been anxious about the loan and had asked about its status four times in a week. "The bot said it needed to verify me," she said. "So I gave it everything. I assumed that was the point."

Anaya let the silence stand. This was the hardest rule, the third, and she had been practising it in the lift.

"Verify me. Those were its words?"

"I think so. It said something about verification. I thought, fine, whatever you need."

It was a small thing, but Anaya underlined it. She went back through the chatbot's opening message that night and found the sentence: *For verification, please share your details.* Nobody had thought about what that sentence invited. It had been written to be polite.

The fourth interview was with Sanjay Patil, a stationery shop owner who typed everything in the Roman alphabet, including Hindi. He typed *adhar*, not *Aadhaar*. He typed it with a space in the middle of the number, and once with a dash. "Why would I write it the way the card does?" he said, honestly puzzled. "I am typing on a phone."

The fifth was with Rutuja Joshi, who had typed her mother's identity number into the chat on her behalf. Her mother was sixty-eight and did not use the app. "She read it out and I typed it," Rutuja said. "She does not know it goes anywhere. It was a chat."

## The job behind the chat

Anaya spread her notes on the floor of her flat, which was how she thought best, and tried to see what each person was trying to get done.

A *job to be done* is a way of looking at this. The idea is that people do not want your product; they want to make some progress in their lives, and they "hire" something to help. The sentence has a shape: *When I am in this situation, I want to do this, so I can get that.*

For Pooja it was: *When I am waiting on a loan decision and cannot stop thinking about it, I want to know where it stands without calling anyone, so that I can stop worrying and plan my month.* Nothing about identity numbers in that sentence at all. The number was an accident of how she tried to get the job done.

For Farah it was: *When I send out the week's chats for analysis, I want to be certain nothing sensitive leaves the building, so that I am not the person who explains it afterwards.*

The idea explained something that had puzzled her, which was why a good tool can still go unused. People switch to something new only when four forces line up. There is the push of the present situation, which is how bad it is now. There is the pull of the new thing, which is what it promises. Against these stand anxiety about the new thing, and the habit of the old one.

Applied to Farah's team: the push was the fear of a leak and the tedium of blanking numbers by hand. The pull was a tool that did it automatically. The anxiety, which Farah mentioned almost in passing, was serious: "What if it hides something the agent needs? What if it blanks a phone number I need to call back?" And the habit was that they already had a way, even if it was bad. In any product that handles other people's words, anxiety tends to be the largest of the four. People worry about wrong answers far more than they worry about slow ones.

## Why, why, why

Anaya tried the oldest method she knew for getting from a symptom to its causes. Ask why. Then ask why about the answer.

*Why are identity numbers in the chats?* Because customers type them. *Why do they type them?* Because the bot's first message asks for "details" for "verification". *Why does it say that?* Because someone wrote the greeting eight months ago and nobody reviewed it.

She was pleased with the chain, which led neatly to a single cause, and then she stopped being pleased. She remembered Sanjay Patil, who did not need to be told to type anything. She remembered Suresh, who asked for numbers himself. She remembered Rutuja, whose mother had no idea. A technique called the *five whys* is useful and has a trap in it. Real problems almost never have one cause. The first convincing chain is where people stop, and it is usually only one branch of a tree.

So she drew a tree instead of a line. At the top: *numbers in the chat*. Below it, at least four branches. The greeting invites them. Customers have learned, from years of call centres, that being helpful means offering identification. Some staff ask for them on purpose. And the chat window accepts anything, including photographs, without comment.

That last branch led somewhere uncomfortable. If she fixed only the greeting, Sahaj would have a better greeting and the same problem, only less often. A tool that stood between the customer and the chat would catch what the other fixes missed. But the greeting still needed rewriting. It was a free fix, and she added it to the list under a note: *Do this first. It costs nothing.*

## Writing down what she knew

By the end of the week she had notes she trusted, and she did the thing she had been told to do and had previously skipped: she wrote a summary of her users that could be checked.

Her description of the support team ran to six lines, and every line ended with a number in brackets: *Agents have no rule for what to do (1, 5). Flags go to Farah when they go anywhere (1). They worry a tool will hide something they need (1, 3).* A *persona* is exactly this, a short description of one kind of user. It is only worth having if each line can be traced to an interview. A persona written before any interviews is a guess dressed up as research. One written by an assistant is worse, because it comes complete with an invented name and a favourite colour. Her rule was simple: a line with no interview number beside it is deleted.

Then she wrote the *problem statement*, which says who has the problem, what it is, and what it costs them now. She did it three times before it fitted in two sentences.

*Customers at Sahaj often type identity numbers into the support chat, partly because the chatbot's own greeting asks for "details" (interviews 2, 3). Support agents have no rule for dealing with them, so most are never removed from the chat history, the exports or the logs (interviews 1, 5).*

After that came the part she was starting to think of as the honest bit. She listed what had to be true for her idea to work:

1. Support staff would trust automatic hiding enough to leave it on.
2. Most of what leaked was numbers with a recognisable shape, rather than names and addresses.
3. The company would let the cleaned text be passed on to the outside company that wrote the chatbot's answers.
4. Customers' writing would turn out to be mostly short messages, in a mixture of languages.

Then she ranked them on two questions: how bad would it be if this were wrong, and how unsure was she? The second assumption was uncertain, but she could check it in an afternoon, by sorting her thirty-seven flags. The fourth was uncertain but not fatal.

The third was both. If Lakshmi Iyer said no, nothing else on the list mattered. An assumption that is both severe and unsure is the *riskiest assumption*, and the rule is to test that one first, before spending a week on the others.

It was a relief, actually, to find that it could be tested with an email.

*Lakshmi, I would like thirty minutes of your time. I have some evidence about the support chat and I would like to know whether I am allowed to do anything about it.*

The reply came four minutes later.

*Thursday, 3 p.m. Bring the evidence, not the enthusiasm.*

## What to carry forward

A question about the future gets a polite answer; a question about the past gets a story. Asked well, a few interviews are worth more than a long survey, and the most useful sentence in one is often an accident. A person's *job to be done* is the progress they are trying to make, not the product you imagined for them. Asking "why" repeatedly is a good way to find causes, provided you draw a tree and not a line. A persona is only as good as the interviews it can be traced to. And before spending time on anything, find the one assumption that is both most damaging and least certain, and test that.

---
title: Asking About Yesterday
summary: A first conversation with a colleague produces only agreement, and five better ones produce evidence. You learn how to question people about their past, how to read what they were trying to achieve, and how to find the one assumption to test first.
course: a3
goals:
  - recognise a leading question and rewrite it as a question about the past
  - read a person's behaviour as progress they are trying to make, and weigh the forces that decide whether they switch
  - trace a problem to its causes without stopping at the first convincing chain
  - write a user description and a problem statement that can be traced to evidence, and name the assumption to test first
terms:
  - user interview | a conversation held to learn what a person actually did and needed, not whether they would like your idea | interview, interviews
  - leading question | a question that suggests the answer the asker is hoping for | leading questions
  - job to be done | the progress a person is trying to make in their life, which they "hire" a product to help with | jobs to be done, job-to-be-done
  - five whys | asking "why?" again and again about each answer, to get from a symptom towards its causes | 
  - persona | a short description of one type of user, built only from what interviews showed | personas
  - problem statement | one or two sentences saying who has the problem, what it is, and what it costs them today | problem statements
  - riskiest assumption | the thing that must be true for your idea to work and that you are least sure of, so the one to test first | riskiest unknown
---

Anaya's first attempt to learn from users produced two pages of notes and almost no information. She had asked Farah Sheikh, the support lead, for half an hour, and she put two questions to her.

"Don't you think it's terrible that customers' identity numbers end up in the support chat?" Farah agreed that it was awful. "And would a tool that hid them automatically be useful?" Farah said it would be extremely helpful.

Anaya wrote "Definitely" in her notes and felt pleased for ten minutes. Then she read the page back. Both answers were exactly the answer she had asked for.

In this chapter we look at why that conversation failed, and how five later ones worked. Then we see how Anaya turned the results into a description of the problem that someone else could check.

## The case: two agreeable answers

Farah wasn't being dishonest. People are courteous. If you give a courteous person a hint about the answer you'd like, they will usually supply it.

A question that hands over its own answer is called a *leading question*. Anaya had set out to collect evidence and had collected agreement instead. Agreement costs far less than evidence, and it is worth far less too.

The same thing would have happened if she had asked whether it was wonderful that so many numbers appeared in the chat. Farah, trying to be helpful, would probably have found something kind to say about that as well.

## How to question people about their past

Anaya went back to a short book she'd been recommended years earlier. Its subject was why it is useless to ask your mother whether she likes your business idea. Your mother will say yes because she loves you, and a yes like that tells you nothing. The book gave three rules, and Anaya copied them onto an index card.

::: key Three rules for a conversation with a user
Talk about their life, not about your idea. Ask about specific things they did in the past, not what they might do in future. Talk less and listen more.
:::

Usually the difference between a good question and a poor one is its tense. Questions about the future ("would you use it?", "what would you pay?") get you polite fiction. Questions about the past ("tell me about the last time...") get you an account of what really happened. And an account often holds facts the speaker didn't know they were about to give.

Here is how Anaya rewrote her own questions.

Table: Anaya's questions before and after
| Before | After |
| --- | --- |
| Isn't it frustrating when numbers leak? | Tell me about the last time you saw an identity number in a chat. What did you do? |
| Would you pay for a tool that fixes this? | What do you do about it today, and what does that cost you? |
| Do you think AI could help? | Have you tried anything? What happened? |

None of the new questions mentions her idea. A *user interview* done this way is more like listening to a witness than taking a vote. A person's opinion about the future is weak evidence. A specific story about the past is strong evidence. One person who tells you three such stories has told you more than a hundred who say they would "definitely" use something.

## Five conversations

Over the next week, Anaya held five conversations of thirty minutes each. She took notes by hand and numbered them, so that every line could be traced back to where it came from. The table sums up what she heard.

Table: What the five conversations showed
| Number | Who | What they said | What it showed |
| --- | --- | --- | --- |
| 1 | Farah Sheikh, support lead | When an agent sees a number there is no rule. Some blank it in the export, some tell Farah, most do nothing | No procedure exists, so removal is accidental |
| 2 | Suresh Gaikwad, loan officer | Sometimes asks customers to type the number so that he can look them up faster | Some staff request the numbers, and regard it as speed rather than risk |
| 3 | Pooja Nair, nurse and borrower | The bot "said it needed to verify me, so I gave it everything" | The chatbot's greeting invited the number |
| 4 | Sanjay Patil, stationery shop owner | Types "adhar", with a space or a dash in the middle of the number, always in Roman letters | Real numbers rarely match the format printed on the card |
| 5 | Rutuja Joshi, customer | Typed her 68-year-old mother's number for her; her mother "does not know it goes anywhere" | The people exposed are not always the people typing |

Two of these details came out of silences. When Pooja said the bot had asked to verify her, Anaya didn't jump in with a follow-up. She waited. That was the hardest of the three rules to follow. Pooja then repeated the exact word.

Anaya went and found the chatbot's opening message. It read: "For verification, please share your details." Nobody had thought about what that sentence invited. It had simply been written to be polite.

## The job behind the chat

That weekend Anaya spread her notes on the floor of her flat and asked a different question about each person. What were they trying to get done?

Here is an idea that helps. People don't really want a product as such. They want a situation to change. The progress a person is trying to make in their life, which they "hire" a product to help with, is called a *job to be done*. A useful way to write one down has a fixed shape: when I am in this situation, I want to do this, so that I can get that.

For Pooja it was: when I am waiting on a loan decision and cannot stop thinking about it, I want to know where it stands without calling anyone, so that I can stop worrying and plan my month. Notice that the sentence has no identity number in it. The number was an accident of how she tried to get the job done.

For Farah it was: when I send out the week's chats for analysis, I want to be certain nothing sensitive leaves the building, so that I am not the person who explains it afterwards.

### Why a good tool can still go unused

The same idea explains why useful products are sometimes ignored. A person switches to something new only when four forces line up in its favour. The push is how bad the present situation feels. The pull is what the new thing promises. Standing against them are anxiety about the new thing, and the habit of the old one.

The table shows the four forces for Farah's team.

Table: The four forces, applied to Farah's team
| Force | At Sahaj |
| --- | --- |
| Push | Fear of a leak, and the tedium of blanking numbers by hand |
| Pull | A tool that does the blanking automatically |
| Anxiety | "What if it hides something the agent needs? What if it blanks a phone number I need to call back?" |
| Habit | The team already has a way of coping, even though it is a poor one |

In any product that handles other people's words, anxiety tends to be the largest of the four. People worry much more about a wrong answer than about a slow one.

## Why, and why again

Next Anaya tried an old method for getting from a symptom to its causes. You ask why, and then you ask why again about the answer. It's known as the *five whys*.

*Why are identity numbers in the chats?* Because customers type them. *Why do they type them?* Because the chatbot's first message asks for details for verification. *Why does it say that?* Because someone wrote the greeting eight months ago and nobody reviewed it.

The chain was tidy, and for a moment she was pleased with it. Then she held it up against the interviews. Sanjay needed no prompting at all. Suresh asked for numbers himself. Rutuja's mother knew nothing about the chat.

That shows the trap in the method. Real problems rarely have a single cause. People stop at the first convincing chain, and that chain is usually just one branch of something bigger.

So she drew a tree. At the top she wrote "numbers in the chat". Below it she drew four branches.

- The greeting invites the numbers.
- Customers have learned from years of call centres that being helpful means offering identification.
- Some staff request the numbers on purpose.
- The chat window accepts anything, including photographs, without comment.

The tree changed her plan. A new greeting would reduce the problem, but it would leave the other three branches alone. A tool standing between the customer and the chat could catch what the other fixes missed. Still, rewriting the greeting cost nothing, so she added it to her list with the note "Do this first".

## Writing down what she knew

By the end of the week, Anaya had notes she trusted. Now she did something she had skipped before: she summarised her users in a form that could be checked.

Her description of the support team ran to six lines. Each line ended with the numbers of the conversations that supported it, for example "Agents have no rule for what to do (1, 5)".

A description like this is called a *persona*. It is a short account of one type of user, and it is worth having only if every line traces back to a conversation. A persona written before any conversations is a guess dressed up as research. One written by an AI assistant is worse, because it arrives with an invented name and a favourite colour. Anaya's rule was to delete any line without a reference.

Then she wrote the *problem statement*. It says who has the problem, what it is, and what it costs them today. It took three attempts to fit into two sentences.

::: example Anaya's problem statement
Customers at Sahaj often type identity numbers into the support chat, partly because the chatbot's own greeting asks for "details" (interviews 2, 3). Support agents have no rule for dealing with them, so most are never removed from the chat history, the exports or the logs (interviews 1, 5).
:::

Finally she listed what had to be true for her idea to work.

1. Support staff would trust automatic hiding enough to leave it switched on.
2. Most of what leaked would be numbers with a recognisable shape, rather than names and addresses.
3. The company would allow the cleaned text to be passed to the outside company that wrote the chatbot's replies.
4. Customer messages would turn out to be mostly short and written in a mixture of languages.

She ranked each one on two questions. How damaging would it be if the assumption were wrong? And how unsure was she?

The second assumption was uncertain, but an afternoon of sorting the thirty-seven flags would settle it. The fourth was uncertain without being fatal. The third was both. If the head of compliance, Lakshmi Iyer, refused permission, nothing else on the list would matter.

An assumption that is both severe and uncertain is the *riskiest assumption*. The rule is simple: test that one first.

It could be tested with a single email. It asked Lakshmi for thirty minutes to go through the evidence and to find out whether Anaya was allowed to act on it. The reply came four minutes later: Thursday at 3 p.m., and bring the evidence, not the enthusiasm.

## Summary

A question about the future gets a courteous answer. A question about the past gets an account. A few conversations held this way are worth more than a long survey.

- A leading question suggests its own answer. The remedy is to ask about specific past events and to talk less than the other person.
- A job to be done is the progress a person is trying to make. Whether they switch depends on push, pull, anxiety and habit, and anxiety is often the strongest.
- Repeated "why" questions find causes only when the result is drawn as a tree, because real problems usually have several.
- A persona is only as good as the conversations it traces to. A problem statement says who, what and at what cost, with references.
- The riskiest assumption is the one that is most damaging and least certain, and it should be tested first.

Next, Anaya meets the head of compliance, and finds out who else has a stake in her plan.

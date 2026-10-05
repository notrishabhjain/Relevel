---
title: Asking About Yesterday
summary: A first conversation with a colleague produces only agreement, and five better ones produce evidence. The chapter covers how to question people about their past, how to read what they were trying to achieve, and how to find the one assumption to test first.
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

Anaya's first attempt to learn from users produced two pages of notes and almost no information. She had asked Farah Sheikh, the support lead, for half an hour, and put two questions to her. "Don't you think it's terrible that customers' identity numbers end up in the support chat?" Farah agreed that it was awful. "And would a tool that hid them automatically be useful?" Farah said that it would be extremely helpful. Anaya wrote "Definitely" in her notes and felt satisfied for ten minutes, until she read the page back and saw that both answers were the answer she had asked for.

This chapter explains why that conversation failed, how five later ones succeeded, and how the results were organised into a description of the problem that someone else could check.

## The case: two agreeable answers

Farah was not being dishonest. People are courteous, and a courteous person given a hint about the preferred answer will usually supply it. A question that hands over its own answer is a *leading question*. Anaya had set out to collect evidence and had collected agreement, which costs far less and is worth far less.

The same would have happened if she had asked whether it was wonderful that so many numbers appeared in the chat. Farah, trying to be helpful, would probably have found something kind to say about that as well.

## How to question people about their past

Anaya went back to a short book she had been recommended years earlier, whose subject was why it is useless to ask your mother whether she likes your business idea. Her mother would say yes, because she loves her daughter, and the answer would carry no information. The book offered three rules, which Anaya copied onto an index card.

::: key Three rules for a conversation with a user
Talk about their life, not about your idea. Ask about specific things they did in the past, not what they might do in future. Talk less and listen more.
:::

The difference between a good question and a poor one is usually its tense. Questions about the future ("would you use it?", "what would you pay?") produce polite fiction. Questions about the past ("tell me about the last time...") produce accounts of what actually happened, and accounts contain facts the speaker did not know they were about to give.

Table: Anaya's questions before and after
| Before | After |
| --- | --- |
| Isn't it frustrating when numbers leak? | Tell me about the last time you saw an identity number in a chat. What did you do? |
| Would you pay for a tool that fixes this? | What do you do about it today, and what does that cost you? |
| Do you think AI could help? | Have you tried anything? What happened? |

None of the new questions mentions her idea. A *user interview* conducted this way resembles listening to a witness more than taking a vote. A person's opinion about the future is weak evidence. A specific story about the past is strong evidence, and one person who has told three such stories has told her more than a hundred who said they would "definitely" use something.

## Five conversations

Over the next week Anaya held five conversations of thirty minutes each, took notes by hand and numbered them so that every line could be traced back.

Table: What the five conversations showed
| Number | Who | What they said | What it showed |
| --- | --- | --- | --- |
| 1 | Farah Sheikh, support lead | When an agent sees a number there is no rule. Some blank it in the export, some tell Farah, most do nothing | No procedure exists, so removal is accidental |
| 2 | Suresh Gaikwad, loan officer | Sometimes asks customers to type the number so that he can look them up faster | Some staff request the numbers, and regard it as speed rather than risk |
| 3 | Pooja Nair, nurse and borrower | The bot "said it needed to verify me, so I gave it everything" | The chatbot's greeting invited the number |
| 4 | Sanjay Patil, stationery shop owner | Types "adhar", with a space or a dash in the middle of the number, always in Roman letters | Real numbers rarely match the format printed on the card |
| 5 | Rutuja Joshi, customer | Typed her 68-year-old mother's number for her; her mother "does not know it goes anywhere" | The people exposed are not always the people typing |

Two details came from the silences. When Pooja said the bot had asked to verify her, Anaya waited instead of prompting, which was the hardest of the three rules to follow, and Pooja repeated the exact word. Anaya then found the chatbot's opening message, which read: "For verification, please share your details." Nobody had thought about what that sentence invited. It had been written to be polite.

## The job behind the chat

Anaya spread her notes on the floor of her flat and asked what each person was trying to get done. A *job to be done* is the progress a person is trying to make in their life, which they hire a product to help with. People do not want a product as such. They want a situation changed, and a useful sentence for recording it has a fixed shape: when I am in this situation, I want to do this, so that I can get that.

For Pooja it was: when I am waiting on a loan decision and cannot stop thinking about it, I want to know where it stands without calling anyone, so that I can stop worrying and plan my month. The sentence contains no identity numbers. The number was an accident of how she tried to get the job done.

For Farah it was: when I send out the week's chats for analysis, I want to be certain nothing sensitive leaves the building, so that I am not the person who explains it afterwards.

### Why a good tool can still go unused

The idea also explains why useful products are sometimes ignored. A person switches to something new only when four forces combine in its favour. The push is how bad the present situation is. The pull is what the new thing promises. Against them stand anxiety about the new thing and the habit of the old one.

Table: The four forces, applied to Farah's team
| Force | At Sahaj |
| --- | --- |
| Push | Fear of a leak, and the tedium of blanking numbers by hand |
| Pull | A tool that does the blanking automatically |
| Anxiety | "What if it hides something the agent needs? What if it blanks a phone number I need to call back?" |
| Habit | The team already has a way of coping, even though it is a poor one |

In any product that handles other people's words, anxiety tends to be the largest force. People worry about a wrong answer much more than they worry about a slow one.

## Why, and why again

Anaya next tried an old method for moving from a symptom to its causes: ask why, and then ask why of the answer. This is known as the *five whys*.

*Why are identity numbers in the chats?* Because customers type them. *Why do they type them?* Because the chatbot's first message asks for details for verification. *Why does it say that?* Because someone wrote the greeting eight months ago and nobody reviewed it.

The chain was tidy, and she was briefly pleased with it. Then she compared it with the interviews. Sanjay needed no prompting. Suresh asked for numbers himself. Rutuja's mother knew nothing about the chat. The method has a trap: real problems rarely have a single cause, and people stop at the first convincing chain, which is usually one branch of a larger structure.

She drew a tree. At the top she wrote "numbers in the chat". Below it were four branches. The greeting invites them. Customers have learned from years of dealing with call centres that being helpful means offering identification. Some staff request them deliberately. And the chat window accepts anything, including photographs, without comment.

The tree changed her plan. A new greeting would reduce the problem and leave it in place. A tool standing between the customer and the chat would catch what the other fixes missed. The greeting should still be rewritten at once, since it cost nothing, and she added it to her list with the note "Do this first".

## Writing down what she knew

By the end of the week Anaya had notes she trusted and did what she had previously skipped: she summarised her users in a form that could be checked.

Her description of the support team ran to six lines, and each line ended with the interview numbers that supported it, for example "Agents have no rule for what to do (1, 5)". A *persona* is a short description of one type of user, and it is worth having only if every line traces to an interview. A persona written before any interviews is a guess presented as research, and one written by an AI assistant is worse, since it arrives with an invented name and a favourite colour. Her rule was to delete any line without a reference.

She then wrote the *problem statement*, which says who has the problem, what it is and what it costs them today. It took three attempts to fit into two sentences.

::: example Anaya's problem statement
Customers at Sahaj often type identity numbers into the support chat, partly because the chatbot's own greeting asks for "details" (interviews 2, 3). Support agents have no rule for dealing with them, so most are never removed from the chat history, the exports or the logs (interviews 1, 5).
:::

Finally she listed what had to be true for her idea to work.

1. Support staff would trust automatic hiding enough to leave it switched on.
2. Most of what leaked would be numbers with a recognisable shape, rather than names and addresses.
3. The company would allow the cleaned text to be passed to the outside company that wrote the chatbot's replies.
4. Customer messages would turn out to be mostly short and written in a mixture of languages.

She ranked each on two questions: how damaging it would be if the assumption were wrong, and how unsure she was. The second assumption was uncertain, but an afternoon of sorting the thirty-seven flags would settle it. The fourth was uncertain without being fatal. The third was both. If the head of compliance, Lakshmi Iyer, refused permission, nothing else on the list would matter. An assumption that is severe and uncertain at once is the *riskiest assumption*, and the rule is to test it first.

It could be tested with a single email, which asked Lakshmi for thirty minutes to discuss the evidence and to learn whether Anaya was permitted to act on it. The reply arrived four minutes later: Thursday at 3 p.m., and bring the evidence, not the enthusiasm.

## Summary

A question about the future produces a courteous answer, and a question about the past produces an account. A few interviews conducted in this way are worth more than a long survey.

- A leading question suggests its own answer. The remedy is to ask about specific past events and to talk less than the other person.
- A job to be done is the progress a person is trying to make. Whether they switch depends on push, pull, anxiety and habit, and anxiety is often the strongest.
- Repeated "why" questions find causes only when the result is drawn as a tree, because real problems usually have several.
- A persona is as good as the interviews it traces to. A problem statement says who, what and at what cost, with references.
- The riskiest assumption is the one that is most damaging and least certain, and it should be tested first.

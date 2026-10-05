---
title: How People Find It and Stay
summary: A tool that nobody finds protects nobody. Five developers are handed a README and nothing else, a stopwatch records where they give up, and a spelling checker shows where the first moment of value must happen. The chapter introduces AARRR, activation, time-to-value, the Fogg behaviour model, product-led growth, growth loops, network effects, virality and dark patterns.
course: b2
goals:
  - define the five AARRR stages and give each a countable event
  - find the activation moment and measure time-to-value, then move value ahead of effort
  - apply the Fogg behaviour model by checking prompt, ability and motivation in reverse order
  - tell virality from a network effect, choose a route to the customer, and refuse dark patterns
terms:
  - AARRR | five stages of growth, each given one countable event: acquisition, activation, retention, referral and revenue | 
  - activation moment | the first time a user gets the value the product promises; everything before it is cost to the user | 
  - time-to-value | how long a new user takes to reach the activation moment, measured from sign-up | 
  - Fogg behaviour model | the idea that a behaviour happens when motivation, ability and a prompt meet at the same moment; if it is not happening, check them in reverse order | 
  - product-led growth | winning customers by letting users sign up and get value on their own, with some of them upgrading; it fits when value shows in minutes and the price is low | PLG
  - growth loop | a cycle in which one user's actions bring in the next user, so that the output feeds back into the input | growth loops
  - network effect | the product getting better for everyone as more people use it, which is not the same as users bringing in other users | network effects
  - virality | users bringing in other users | viral
  - dark pattern | a design that tricks users into acting against their own interest, such as a pre-ticked box, false scarcity or a hidden cancellation | dark patterns
---

In the third week of January five developers sat in a row on one side of a table, each at a laptop, each with the faintly guilty look of people who have been asked to take part in an experiment and are not sure what is being measured. Anaya had given them one sheet of paper: the README, the first page of instructions for the developer kit, and nothing else. There was no demonstration, no call and no help. A stopwatch lay on the table. She had said: add this to a small chat program and clean one message, and tell me when you are done; I won't help you. Then she had gone to stand by the window with her hands behind her back, because it was the only way she could keep them still.

The kit was live and Mr. Menon's company had signed a trial. What mattered, at that moment, was whether anyone else could use it. This chapter reports what the stopwatch showed and what it taught about how people find a product and stay with it.

## The case: five developers and a stopwatch

Imran Qureshi had warned her what she would learn, in a sentence he liked: if they do not stay, more sign-ups only means losing people faster.

## A funnel and its limits

Growth has five stages with a memorable shorthand, *AARRR*: acquisition, activation, retention, referral and revenue. The first job in each is to name one event that can be counted.

Table: The five stages and the guard's event for each
| Stage | The question | The guard's event |
| --- | --- | --- |
| Acquisition | Did they arrive? | A developer opens the demo page and pastes a message |
| Activation | Did they get value? | The kit cleans a message inside their own project |
| Retention | Did they come back? | It is still running, and cleaning messages, four weeks later |
| Referral | Did they bring others? | A colleague at another company opens the demo page after a shared link |
| Revenue | Did they pay? | They move from the trial to a plan |

Anaya knew that the picture was a simplification. It suggests a straight line, whereas real people arrive through shared links and return after months. It also invites the team to start fixing at the top of the funnel. Usually the stage that decides whether a product works is retention, and the funnel places it fourth.

## The first moment of value

The measure that Anaya cared about most that morning was the one that decides whether someone ever reaches the later stages. The *activation moment* is the first time a user gets the value that the product promises. For the guard it was a developer seeing their own message, with an Aadhaar number in it, come out of the other side with the number gone. Everything before that moment is cost to the user: effort spent before anything good has happened. How long it takes to reach is the *time-to-value*, measured from the moment they start.

The stopwatch gave her the times, and she wrote them as they came.

Table: How far the five developers got
| Step | Developers who finished | Median time |
| --- | --- | --- |
| Open the README | 5 of 5 | 1 minute |
| Create an account and get a key | 4 of 5 | 7 minutes |
| Install the kit | 4 of 5 | 11 minutes |
| Clean the first message | 3 of 5 | 24 minutes |

One developer stopped at the account. Another was lost at the fourth step. Three reached the moment of value, after twenty-four minutes at the median. The one who had left at the first obstacle had written a short note, which Anaya read after they had gone: "I'd have left here too." Imran, looking over her shoulder, said that people do not leave at the hard part. They leave before it.

The remedy occurred to her over the following days. What if the first moment of value happened before the account? The demonstration page could let a developer paste a message of their own and see it cleaned, with nothing to sign. The activation moment would come ahead of the hard step, and by the time they were asked for an email they would already have seen it work.

## A teardown over dinner

That week Anaya did something she had put off for three months: she took apart a product that had solved this problem. She chose one that Farah used constantly, a spelling and writing assistant that sat inside whatever she was typing. They looked at it stage by stage, on Farah's sofa with her laptop between them, noting what happened and what could be copied.

Table: A teardown of a writing assistant
| Stage | What happened |
| --- | --- |
| Acquisition | People saw its suggestions in the tools they already used, and a free plan spread it |
| Activation | The first underlined suggestion in her own writing, within seconds |
| Retention | It lived where people already write, so there was no new habit to form |
| Revenue | The more advanced suggestions sat behind a paid plan |

Farah asked what Anaya would copy. "The moment of value," she said slowly. It happens in the user's own work, not on a separate page and not after a setup. The kit's value, she realised, was in the developer's own chat program. The demonstration page stood in for that, and was a good stand-in, but real activation would come when the kit was in the code. The aim was to shorten the road between the first and the second.

## What makes someone act

For retention Anaya turned to a model that Dr. Meenakshi Rao had described from the study of behaviour. A person does something when three things meet at the same instant: they want to, they are able to, and something prompts them. This is the *Fogg behaviour model*, and when a behaviour is not happening, its rule is to check the three in reverse order. A missing prompt is the cheapest thing to fix. Next comes ability, and last motivation, which is the hardest to move.

For a compliance buyer the prompt was easy to see: a Monday email with one line, such as "This week the guard hid 1,204 details across 87,000 messages. Two were flagged for review." It took no effort to open and it reminded the buyer why they had the tool. For a developer the prompt was the best README they had ever read, and the ability was how little was left to do.

The team also watched the retention curve for each week's new users. A line that falls and then flattens means that something has found a lasting use. A line that falls to nothing means it has not.

## How a customer arrives

Anaya drew the three ways in which a customer can go from hearing of a product to paying for it.

Table: Three routes to a paying customer
| Route | How it works | When it fits |
| --- | --- | --- |
| Product-led growth | People sign up and get value on their own, and some of them upgrade | The value shows in minutes and the price is low |
| Sales-led | A person runs demonstrations and a contract | The deal is large or a security review is required |
| In between | Individuals adopt the product first and a salesperson arrives when their team grows | A product that one person can try but a team must approve |

The guard sat in the middle. A single developer could try the demonstration alone. Connecting a whole chat system meant the security lead whom Mr. Menon called "the Wall", and that, she saw, was exactly when a person would be useful.

## A badge, and a line she would not cross

The last matter was a loop. A *growth loop* is a cycle in which one user's actions bring in the next, so that the output feeds back into the input. Anaya thought of a small mark at the bottom of a chat window, "Protected by Bharat Privacy Guard", with a link. A customer's customer would see it, and another developer might follow it.

She was careful with two terms. Users bringing in other users is *virality*. A product becoming better for everyone as more people use it is a *network effect*. Many products have the first and not the second, and she suspected hers was one of them. Positioning decided which loop could work at all: a badge made sense because she was the guard for companies that talk to customers in India, and a company that wanted to be seen as careful would be glad of the mark.

She then wrote a rule in the margin in the same hand as "rarer is not fixed".

::: watch Dark patterns are out
A *dark pattern* is a design that tricks a user into acting against their own interest: a box ticked in advance, a made-up shortage, a cancellation button that nobody can find. Such designs can lift a number for a quarter. They also destroy the trust on which the whole product rests. Anaya told Imran that the customer could switch the badge off without asking. He said that it would cost some visibility. "Yes," she said. "We are a privacy tool. We shouldn't be the ones who hide the exit."
:::

## Summary

Growth has five stages worth counting, acquisition, activation, retention, referral and revenue, and the one that usually decides whether a product works is the one that comes fourth.

- The activation moment is the first time a user gets the value promised. It should come as early as possible, because everything before it is cost to the user. Time-to-value measures the road, and the best place for the moment is inside the user's own work.
- A behaviour happens when motivation, ability and a prompt meet. When it is not happening, check them in reverse order.
- Customers may arrive by themselves, through a salesperson or through both, and the right route depends on how quickly the value shows and how large the deal is.
- A growth loop can bring in users, but virality is not a network effect. A design that tricks people, a dark pattern, may raise a number and destroys the trust that retention depends on.

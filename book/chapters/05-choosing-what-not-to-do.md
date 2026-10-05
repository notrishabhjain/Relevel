---
title: Choosing What Not to Do
summary: A list of nine good ideas is not a strategy. A retired teacher's question leads the product manager to write one, to choose a narrow first target and a single measure of success, to name the product, and to rank the work with scores that she is willing to overrule.
course: a5
goals:
  - distinguish a vision, a strategy and a plan
  - write a strategy in three parts and test it by removing the company's name
  - choose a wedge and a North Star
  - rank options with RICE, agree scope with MoSCoW, and use cost of delay to settle order
terms:
  - diagnosis | the first part of a strategy: an honest account of what the real challenge is, before saying what to do about it | 
  - guiding policy | the second part of a strategy: the overall approach you will take to the challenge, including what you will refuse to do | 
  - value proposition | a plain statement of who you serve, what job you do for them and why you are better than the alternatives | 
  - wedge | the narrow first use you can clearly win, small enough to be excellent at and connected to something bigger | 
  - North Star | one sentence saying what value your customers get, and one number that measures it | North Star metric
  - RICE | a way of scoring options by Reach times Impact times Confidence, divided by Effort | 
  - MoSCoW | a way of agreeing scope by sorting items into Must, Should, Could and Won't | 
  - cost of delay | what you lose for every week an option waits | 
---

On Sunday mornings Anaya telephoned Dr. Meenakshi Rao, who had taught her linguistics and was now retired in Bengaluru. In the third week of March she read out her list of work. Rewrite the chatbot's greeting. Build a tool to find identity numbers. Extend it to names and addresses. Make it work in Hindi. Make it work in Hinglish. Read photographs. Read voice notes. Sell it to other companies. Build a small version that runs in a browser.

Meenakshi asked which of the nine she would decline to do. Anaya said that she would do all of them eventually. "Then you have no strategy," said Meenakshi. "You have a hope with a calendar."

This chapter works through what a strategy consists of, how a team chooses where to begin, and how it ranks competing work without letting a formula decide.

## The case: nine good ideas

Every item on the list was reasonable, and that was the difficulty. A list in which nothing is refused cannot guide a decision on Monday morning, because any task can be defended. Meenakshi's remark was practical, not harsh: a strategy begins when someone is left out.

## Vision, strategy and plan

Meenakshi asked Anaya to state the difference between three things that are often confused.

Table: Vision, strategy and plan
| | Question it answers | Horizon | The guard's version |
| --- | --- | --- | --- |
| Vision | Where are we going? | Three to five years | Every team at every company that talks to customers in India can see at a glance that nothing personal travels further than it should |
| Strategy | How will we win? | One to two years | Start with Sahaj's own chat and nowhere else, and be the best in the country at the mixture of languages people actually type |
| Plan | What will we do now? | This quarter | Ship the number-finding part, in the chat, to the support team, by the end of June |

A vision is allowed to be grand, and a plan is easy to write. The strategy is the difficult part because it must be specific enough to be wrong and must leave things out.

## The parts of a strategy

A strategy has three parts, and each exists for a reason.

The first is the *diagnosis*, an honest account of the real challenge, stated so that someone could disagree with it. "We have a privacy problem" is not a diagnosis. Anaya's version read: personal details reach places they should not because customers type them freely, the chatbot invites them, nobody has the means to remove them, and existing tools are built for one writing system and fail on the way people here write. It took four drafts to stop it sounding like a pitch.

The second is the *guiding policy*, the overall approach to the challenge, which includes what will be refused. Hers read: catch details by their shape first, because that is cheap and certain; handle names and addresses next, because that is where other tools fail; do all of it inside the company and in the way people actually write; and do not try to solve everything that could be called privacy.

The third is a set of coherent actions, a few steps that carry out the policy and support one another. She wrote four, noticed that two did not depend on the others, and cut them.

::: watch A goal is not a strategy
"Become the leading privacy platform in India" is a goal. It contains no diagnosis and tells nobody what to do on Monday. A quick test is to remove the company's name from the strategy and ask whether a competitor could paste it into their own document unnoticed. A sentence such as "use best-in-class technology to protect customer privacy at scale" passes that test, so it is not yet a strategy. A version of it had crept into Anaya's second paragraph, and she deleted it.
:::

## Whom it serves, and where to begin

The *value proposition* is a plain statement of whom the product serves, what job it does for them and why it is better than what they have. Anaya's positioning statement from the previous chapter was the first draft. It now had to bear weight, because the strategy depended on it.

Where to begin is a separate decision. Meenakshi's rule was to start narrow enough to be the best at something, since a team can widen later but cannot recover from being merely adequate at everything. The narrow first target that a product can clearly win is its *wedge*. It must be small enough to be excellent at and joined to something larger, so that winning it opens a door.

The wedge was not "privacy for Indian companies". It was to find and hide the personal details in Sahaj's own support chat in the three ways people write. It was far smaller than the vision and entirely winnable. It had a willing internal customer, a real body of messages, and Farah Sheikh, who would know within a week whether it worked.

### One number

The wedge was paired with a *North Star*: one sentence saying what value the customer receives, and one number that measures it. The sentence was that messages leave the chat with nothing personal left in them. The measure was the share of messages that do. If the number rose, the work was succeeding. If Anaya found herself arguing about some other number, she would stop and ask why.

## Naming the product

Farah heard about the project and stopped at Anaya's desk. Everyone, she said, was calling it "the privacy thing", and unless it received a name it would acquire whichever one was said first in a meeting. The name had to say what the product was and who it was for, and it had to be easy to say to a customer on the telephone.

They considered a dozen. Farah, who thought in the language of her customers, proposed Bharat Privacy Guard, and predicted that everyone would shorten it to "the guard" within a week. The name was adopted, partly because it was exactly as ornate as the name on a signboard.

## Ranking the work

With the strategy in place Anaya needed an order for the nine items. She used a common scoring method, *RICE*, which rates each option on four questions. Reach asks how many people or messages it touches in a given period. Impact asks how much it changes things for each. Confidence asks, as a percentage, how sure the first two answers are. Effort asks how many person-weeks the work will take. Reach, impact and confidence are multiplied and the product is divided by effort.

Table: RICE scores for four of the options
| Option | Reach | Impact | Confidence | Effort (person-weeks) | Score |
| --- | --- | --- | --- | --- | --- |
| Rewrite the greeting | 400 | 1 | 80% | 0.1 | 3,200 |
| Find fixed-shape numbers | 400 | 2 | 80% | 2 | 320 |
| Catch photographs of cards | 30 | 3 | 50% | 1 | 45 |
| Find names and addresses in Hinglish | 150 | 2 | 50% | 6 | 25 |

The last row held the work that mattered most to the project, and it scored lowest. Imran Qureshi, who had come to see why Anaya was frowning, agreed that by this arithmetic it came last. "So you override it," he said. "Out loud. What is not allowed is pretending the number told you to."

::: key What a score is for
The inputs to a RICE score are mostly guesses, and the formula knows nothing about strategy or about which work depends on which. A score organises an argument and does not replace it. When a team overrides one, it should record the reason. Anaya wrote beside the last row: "It is the wedge. Everything else exists elsewhere."
:::

A second method suits agreeing scope with other people. *MoSCoW* sorts every item into Must, Should, Could or Won't. Anaya's Musts were the greeting and the finder of fixed-shape numbers. Her Shoulds were names and addresses. Her Coulds were photographs. Her Won'ts for the year were other Indian languages, voice notes, a browser version, and selling to anyone outside Sahaj. Imran read the last column twice and remarked that it was the first Won't list he had seen that was not embarrassed.

A third consideration came from a friend in finance. The *cost of delay* is what is lost for each week an option waits. For most items the answer was "a little". For the greeting it was another week of customers being asked for their details, which settled its place at the front without further arithmetic.

## Summary

A vision says where a company is going, a strategy says how it will win, and a plan says what happens this quarter. Only the strategy requires leaving things out.

- A strategy has a diagnosis (what the real challenge is), a guiding policy (the approach, including what is declined) and coherent actions that support one another. Removing the company's name tests whether it is specific.
- A wedge is the narrow first target that can clearly be won. A North Star is one sentence of customer value and the one number that measures it.
- RICE scores options by reach, impact and confidence divided by effort. The score organises a decision and may be overridden when the reason is written down.
- MoSCoW agrees scope by sorting items into Must, Should, Could and Won't, and the Won't list is the most informative.
- Cost of delay, the loss per week of waiting, often settles order where scoring does not.

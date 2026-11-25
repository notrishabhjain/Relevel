---
title: Real People, Real Use
summary: A demo works while you watch it. A real product must work when nobody is watching, for people who owe you nothing. In spring, Anaya gets the guard ready for strangers. She finds honest early users and watches them without helping. Then she ships one change because of what she saw. You learn design partners, informed consent, observation sessions, changelogs and support logs.
course: b6
goals:
  - list what must be ready before strangers use a product, and name one owner
  - find design partners who feel free to be unimpressed, and get their informed consent in writing
  - run an observation session, and weigh what people say against what they do
  - score problems by how often, how bad and how costly, ship one change with a stated hope, and keep a changelog and a support log
terms:
  - design partner | a friendly tester, like a neighbour who tries your new recipe and tells you the truth. An early user who tries an unfinished product and tells you honestly what they find, for something fair in return | design partners
  - informed consent | a signed permission slip, like the one a school sends before a trip. A person says yes after being told plainly what is collected, where it goes, what could go wrong and how to leave | written consent
  - observation session | like watching a friend cook in your kitchen without helping. You give someone a real task and watch them do it, and you note the same things each time | observation sessions
  - changelog | the notice board by the lift that says what changed this week. A short public list of what changed in each release, written for users | release notes
  - support log | a register at the help desk. One running list of every request for help, with its category and account, read each week as proof about the product | 
---

On the last Thursday of April, at ten past two at night, Imran Qureshi's phone squeaked. It sounded like a small animal being stepped on. He had set up that alert himself, for just this. For a moment he lay in the dark and admired how well it worked. Then he sat up.

The alert said errors on the demo page had crossed a line. By half past two he found the cause: a certificate had expired. (A certificate is a digital badge. It proves a website is the real one.) By a quarter to three he had fixed it. At three he wrote four lines in the log. (A log is a diary of what went wrong.) Then he went back to bed. He felt like a man whose smoke alarm did the job it was bought for.

At breakfast he told Anaya that this is what "ready" means. Something went wrong, and he knew before anyone else did.

## The case: ready, and owned

It took Anaya most of the week before to see the point. A demo works while someone watches. A product must work while nobody watches. It is like a shop on opening day. The goods are the small part. The locks, the lights and the fire exit matter just as much.

Imran gave her a short list. She turned it into a table. It stayed taped above his desk for the rest of the year.

Table: When a product is ready for strangers
| Area | Ready when |
| --- | --- |
| Monitoring | An alert reaches a person when errors or delays rise |
| Analytics | The events in the tracking plan arrive from the live product |
| Privacy | A notice says what is collected, why, and how to have it deleted |
| Feedback | A user can report a problem in one click |
| Rollback | Going back to the previous version has been tried, not just planned |
| Cost | A spending limit is set with the model provider |

Each row had caused an argument. Each turned out to take one afternoon. The one nobody argued about was the last. In July the model provider's bill had come. (The provider is the company whose model the guard uses.) The number made Mr. Bhatia put down his tea.

Every system also needs an owner. This is a named person who answers when it breaks at a bad hour. For the guard, Imran took the first week of each month and Tanvi took the second. Their phone numbers were on the page that said how to report a fault. Anaya owned the product. So if the owners were woken often, it was her job to find out why.

## Finding people who will tell the truth

The first people to try the kit were not strangers. They were Anaya's sister's friend and two old colleagues. One more was a boy from her building who was good with computers. All of them were kind. "It's lovely," said her friend. "Very clever."

After a few days Anaya saw something. Nothing in the product changed because of what any of them said. Friends are too polite to be useful. It is like asking guests at dinner if the food is good. They say "lovely", and they do not come back for more. They tell the maker what the maker hopes to hear.

So she did what she had learned in the second month. She went back to the people she had interviewed in the spring, and to people they knew. She looked for people who had the problem now and who used the same kind of software.

She found six teams. One was a travel company in Kochi whose chat was full of passport numbers. One was a clinic-booking service in Indore. One was a small tutoring business in Bengaluru. Three others joined too.

She called them *design partners*. A design partner is an early user. They agree to use an unfinished product and tell the maker honestly what they find. They are not customers yet. They are not a test audience either.

## What she told them first

Before anyone touched the kit, Anaya sent each partner one page. Lakshmi Iyer read it twice and fixed it in two places. The table shows what the page said, and what each line meant in plain words.

Table: What the page said
| It said | In plain terms |
| --- | --- |
| The product was early and might be wrong | It would sometimes miss a detail it should have hidden |
| Exactly what the guard would receive | And where it would be processed |
| What would be recorded | Counts and kinds, never the text of a message |
| How a partner could have everything deleted | Without argument |
| That nothing would be used for any other purpose | And that no partner's messages would help another partner |
| That a partner should start with a small sample | Messages that they themselves chose and prepared, not a live feed |
| That they could stop at any time | Without explanation and without awkwardness |

This is *informed consent*. Think of it as a permission slip for a school trip. The parent is told where the bus goes, what could go wrong and who to call. Then the parent says yes. In the same way, a person says yes after being told plainly what is collected and where it goes. They also hear what could go wrong and how to withdraw. It was not a click on a box. It was a person understanding what they agreed to, and knowing they could leave.

In return, Anaya offered early access and a lower price for the first year. She thought about offering more, and Lakshmi stopped her. If partners are paid too much, they feel they owe praise. The team wanted people who were free to be unimpressed.

## Sitting on her hands

In the first week of May, Anaya watched six people use the kit. She had watched five developers in January the same way, with her hands behind her back. This is called an *observation session*. It is like watching a friend cook in your kitchen without helping. The observer gives someone a real task and stays silent. Each time, she writes down the same few things. How long did it take? Where did the person pause? What did they say aloud? What unexpected thing did they try? Did they finish?

She found it almost painful. A man in Indore stared for forty seconds at one setting. It decided which kinds of detail were hidden. He clearly did not know what it did. She wanted to speak so badly that she bit the inside of her cheek.

By the end of the week she had proof of something she had long suspected. What people say and what they do are two separate sources, and they disagree. Joseph, in Kochi, told her on a call that the guard was "too aggressive". He said it hid too many things.

The analytics (the numbers on what users do) told a different story. His team had pressed the restore button twice in three weeks. (That button brings a hidden detail back.) Another partner said she loved it. She had made one call to the kit in twelve days.

::: key When they differ, believe the behaviour
Karan had joined her for the dull part. He put the rule this way: believe the behaviour, then ask why. The behaviour tells you what is true. The reason you have to ask for. Anaya asked Joseph why he thought it hid too much. He laughed. "I think I saw it hide a postcode once," he said, "and decided it was keen."
:::

## More problems than time

After two weeks she had a page of troubles. Some were failures of the machine. Some were a button nobody could find. She did not want to keep them in two lists. A wrong judgement and a confusing screen cost the user the same trust.

It is like sorting complaints into piles at a help desk. She scored each problem on three things. How many people met it? How bad was it when they did? What would it cost to fix?

Table: Problems scored by frequency, severity and cost
| Problem | How often | How bad | Cost to fix | Order |
| --- | --- | --- | --- | --- |
| Nobody can tell why a detail was hidden | 4 of 6 teams | High: they stop trusting it | Small | 1 |
| Import fails for chats over five thousand messages | 1 team | High for them | Medium | 2 |
| Names of kinds of detail too long | 3 of 6 | Low | Small | 3 |
| Wants support for another chat system | 2 prospects | Blocks them entirely | Large | Later |

The table was a cold splash of water. One problem that fully blocks one customer is not always above a problem that quietly bothers four. How often and how bad pull in different directions. The cost decides how soon either one gets an answer.

## One change, and what she expected from it

The top row was easy to say and hard to do well. Four of six teams had asked, in one way or another, why a detail was hidden. The guard knew the reason and had never said. Anaya wrote the plan on one card. It is like a recipe card. It says what we make, for whom, and how we know it came out right. She used the form Imran had taught her for all plans.

::: example The card
We saw four of six teams ask why a detail was hidden. Only 58 in a hundred of the hidden details were marked as right by the people who reviewed them. We will add a "why this was hidden" link that shows the three phrases that decided it.

We expect the share marked right to rise above 65 within two weeks, with no extra time per message. If it does not move, the trouble may be in the decision and not in the explanation. We will then read fifty disputed cases by hand before changing anything else.
:::

Anaya was proudest of the last sentence. She had written it before any result. It meant that if the number did not move, she already knew what to do. The number rose to 67.

## Telling people what changed

The change shipped on a Thursday. Anaya wrote about it the way her favourite products do. Think of the notice board by the lift: "Water off Tuesday, 10 to 12." This is the *changelog*. It is a short public list of what changed in each release. It is written for the user, not for the maker.

::: example The changelog entry
New: "Why was this hidden?" Click the small question mark beside any masked detail. You see the three phrases that led to the decision. If it was wrong, press Restore, and tell us.
:::

The entry said what was new. It said how to use it. It said what to do if it misbehaved. It did not say "improved the explainability of the masking subsystem". Tanvi proofread it. She crossed out only one word and put a shorter one in its place.

Anaya did one more thing that week that was not about shipping. She started a *support log*. It is like a register at the help desk. Every request for help, from any partner, went into one sheet with a category and an account. It cost nothing. After a month she saw it was the cheapest research she had ever done. The users told her what they needed without being asked.

On Mondays she and Karan read the log beside the analytics. Some trouble showed up in all three places at once: the support log, the observation sessions and the numbers. That was almost surely real. Trouble in only one of them, she kept watching.

## Summary

A demo works while someone watches. A product must work when no one does. For that it needs six things. Alerts that reach a person. Events arriving from the live system. A privacy notice. A one-click way to report a fault. A rollback that has been tried. A spending limit. And a named owner.

- Early users should have the problem now and feel free to disappoint the maker. Friends rarely do. Tell them plainly, in writing, what is collected, where it goes and how to leave. Offer something fair, not something large.
- In an observation session, the observer gives a real task and stays silent. She notes the same things each time. When what people say and what they do disagree, believe the behaviour. Then ask why.
- Score problems by how often, how bad and how costly. Keep machine failures and confusing screens in one list.
- Ship one change with its evidence, its expected effect and a plan for when it fails. Announce it in plain words. Keep every request for help. A problem seen in the support requests, the sessions and the numbers together is real.

The last chapter turns from the product to the person who built it, and to the job.

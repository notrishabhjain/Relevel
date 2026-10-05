---
title: Real People, Real Use
summary: A demonstration works while you are watching it. A product has to work when nobody is, for people who owe you nothing. In the spring Anaya prepares the guard for strangers, recruits them honestly, watches without helping, and ships one change because of what she saw. The chapter introduces design partners, informed consent, observation sessions, changelogs and support logs.
course: b6
goals:
  - list what must be ready before strangers use a product, and name an owner
  - recruit design partners who are free to be unimpressed, and obtain informed consent in writing
  - run an observation session and weigh what people say against what they do
  - score problems by frequency, severity and cost, ship one change with a stated expectation, and keep a changelog and a support log
terms:
  - design partner | an early user who agrees to use an unfinished product and tell you honestly what they find, in return for something fair | design partners
  - informed consent | a person's agreement, given after being told plainly what is collected, where it goes, what could go wrong and how to withdraw | written consent
  - observation session | a meeting in which you give someone a real task and watch them do it without helping, noting the same things each time | observation sessions
  - changelog | the short public list of what changed in each release, written for users in practical terms | release notes
  - support log | a running record of every request for help, with its category and the account it came from, read weekly as evidence about the product | 
---

On the last Thursday of April, at ten past two in the morning, Imran Qureshi's phone made a noise like a small animal being trodden on. He had set the alert up himself, for the purpose, and he lay in the dark for a moment admiring how well it worked. Then he sat up. It said that errors on the demonstration page had passed a line. By half past two he had found the cause, a certificate that had expired. By a quarter to three he had mended it, and at three he wrote four lines in the log and went back to bed with the satisfaction of a man whose smoke alarm has done what it was bought for.

At breakfast he told Anaya that this is what "ready" means. It had gone wrong, and he had known before anyone else.

## The case: ready, and owned

It had taken Anaya most of the previous week to see the point. A demonstration works while someone watches. A product has to work while no one is watching, and much of what makes the difference lies outside the part that was built. Imran gave her a short list, and she turned it into a table that stayed taped above his desk for the rest of the year.

Table: When a product is ready for strangers
| Area | Ready when |
| --- | --- |
| Monitoring | An alert reaches a person when errors or delays rise |
| Analytics | The events in the tracking plan arrive from the live product |
| Privacy | A notice says what is collected, why, and how to have it deleted |
| Feedback | A user can report a problem in one click |
| Rollback | Going back to the previous version has been tried, not just planned |
| Cost | A spending limit is set with the model provider |

Each row had been the subject of a quarrel, and each was in the end a matter of an afternoon. The one about which nobody argued was the last, because in July the provider's bill had arrived with a figure that made Mr. Bhatia put down his tea.

Every system also needs an owner, a named person who answers when it breaks at a bad hour. For the guard, Imran took the first week of each month and Tanvi the second, and their numbers were on the page that said how to report a fault. Anaya owned the product, which meant that if the owners were woken often, it was her task to find out why.

## Finding people who will tell the truth

The first people to try the kit were not strangers. They were Anaya's sister's friend, two former colleagues and a boy from her building who was good with computers, and all of them were charming about it. "It's lovely," said her friend. "Very clever." Over several days Anaya noticed that nothing in the product changed because of what any of them said. Friends are too polite to be useful. They tell the maker what the maker hopes to hear, and they do not use the thing again.

She did what she had learned in the second month. She returned to the people she had interviewed in the spring and the people they knew, and looked for those who had the problem now and used the same kind of software. She found six teams: a travel company in Kochi whose chat was full of passport numbers, a clinic-booking service in Indore, a small tutoring business in Bengaluru and three others. She called them *design partners*. A design partner is an early user who agrees to use an unfinished product and to tell the maker honestly what they find. They are not customers yet, and they are not a test audience either.

## What she told them first

Before any of them touched the kit, Anaya sent each a single page, which Lakshmi Iyer had read twice and corrected in two places.

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

This is *informed consent*: a person's agreement, given after being told plainly what is collected, where it goes, what could go wrong and how to withdraw. The agreement was not a click on a box. It was a person understanding what they were agreeing to and being told that they could leave.

Anaya's offer in return was early access and a reduced price for the first year. She considered something larger, and Lakshmi stopped her: if partners are paid too much they feel they owe praise, and the team wants people who are free to be unimpressed.

## Sitting on her hands

In the first week of May Anaya watched six people use the kit, as she had watched five developers in January, with her hands behind her back. An *observation session* is exactly that: the observer gives someone a real task, stays silent and writes down the same few things each time. How long the task took, where the person paused, what they said aloud, what they tried that was unexpected, and whether they finished.

She found it almost physically painful. A man in Indore stared for forty seconds at the setting that decided which kinds of detail were hidden, plainly unsure what it did, and she wanted to speak so badly that she bit the inside of her cheek.

By the end of the week she had something she had long suspected and could not prove: what people say and what they do are two separate sources, and they disagree. Joseph, in Kochi, told her in a call that the guard was "too aggressive" and hid too many things. The analytics showed that his team had pressed the restore button twice in three weeks. Another partner said she loved it, and had made one call to the kit in twelve days.

::: key When they differ, believe the behaviour
Karan, who had joined her for the dull part, put the rule: believe the behaviour, then ask why. The behaviour tells you what is true. The reason you have to ask for. When Anaya asked Joseph why he thought it hid too much, he laughed. "I think I saw it hide a postcode once," he said, "and decided it was keen."
:::

## More problems than time

By the end of two weeks she had a page of troubles. Some were failures of the machine and some were a button that nobody could find. She resisted the instinct to keep them in separate lists, because a wrong judgement and a confusing screen cost the user exactly the same trust. She scored each on three things: how many people met it, how bad it was when they did, and what it would cost to fix.

Table: Problems scored by frequency, severity and cost
| Problem | How often | How bad | Cost to fix | Order |
| --- | --- | --- | --- | --- |
| Nobody can tell why a detail was hidden | 4 of 6 teams | High: they stop trusting it | Small | 1 |
| Import fails for chats over five thousand messages | 1 team | High for them | Medium | 2 |
| Names of kinds of detail too long | 3 of 6 | Low | Small | 3 |
| Wants support for another chat system | 2 prospects | Blocks them entirely | Large | Later |

Looking at the table was bracing. A thing that blocks one customer completely is not necessarily above a thing that quietly troubles four. Frequency and severity pull in different directions, and cost decides how soon either can be answered.

## One change, and what she expected from it

The top row was easy to state and hard to do properly. Four of six teams had asked, in one form or another, why a detail was hidden. The guard knew, and had never said. Anaya wrote the plan on one card, in the form Imran had taught her to use for all plans.

::: example The card
We saw four of six teams ask why a detail was hidden, and only 58 in a hundred of the hidden details were marked as right by the people who reviewed them. We will add a "why this was hidden" link that shows the three phrases that decided it. We expect the share marked right to rise above 65 within two weeks, with no extra time per message. If it does not move, the trouble may be in the decision and not in the explanation, and we will read fifty disputed cases by hand before changing anything else.
:::

Writing the last sentence first, before any result, was the part of which Anaya was proudest. It meant that if the number did not move she would already know what she was going to do. It rose to 67.

## Telling people what changed

The change shipped on a Thursday, and Anaya wrote about it in the way she had learned from the products she liked best. A *changelog* is the short public list of what changed in each release, written for the user and not for the maker.

::: example The changelog entry
New: "Why was this hidden?" Click the small question mark beside any masked detail and see the three phrases that led to the decision. If it was wrong, press Restore, and tell us.
:::

It said what was new, how to use it and what to do if it misbehaved. It did not say "improved the explainability of the masking subsystem". Tanvi, who proofread it, crossed out only one word and replaced it with a shorter one.

Anaya also did one thing that week that had nothing to do with shipping. She started a *support log*: every request for help, from any partner, went into one sheet with a category and an account. It cost nothing, and after a month she realised that it was the cheapest research she had ever done, since the users were telling her what they needed without being asked. On Mondays she and Karan read the log beside the analytics. A trouble that appeared in the support log, in the observation sessions and in the numbers, all at once, was almost certainly real. A trouble in only one of them she watched.

## Summary

A demonstration works while someone watches. A product has to work when no one does, and for that it needs alerts that reach a person, events arriving from the live system, a privacy notice, a one-click way to report a fault, a rollback that has been tried, a spending limit and a named owner.

- Early users should be people who have the problem now and who feel free to disappoint the maker, which friends rarely do. They are told plainly, in writing, what is collected, where it goes and how to leave, and are offered something fair and not something large.
- In observation sessions the observer gives a real task and stays silent, noting the same things each time. When what people say and what they do disagree, believe the behaviour and then ask why.
- Problems are scored by how often, how bad and how costly, with machine failures and confusing screens in one list.
- One change is shipped with its evidence, its expected effect and a plan for when it does not work, and it is announced in plain words. Every request for help is kept, because a problem seen in the support requests, the sessions and the numbers together is real.

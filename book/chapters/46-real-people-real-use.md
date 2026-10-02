---
title: Real People, Real Use
summary: A demonstration works while you are watching it. A product has to work when nobody is, for people who owe you nothing. In the spring Anaya prepares the guard for strangers, recruits them honestly, sits on her hands while they use it, and ships one change because of what she saw.
course: b6
terms:
  - design partner | an early user who agrees to use an unfinished product and tell you honestly what they find, in return for something fair | design partners
  - informed consent | a person's agreement, given after being told plainly what is collected, where it goes, what could go wrong and how to withdraw | written consent
  - observation session | a meeting in which you give someone a real task and watch them do it without helping, noting the same things each time | observation sessions
  - changelog | the short public list of what changed in each release, written for users in practical terms | release notes
  - support log | a running record of every request for help, with its category and the account it came from, read weekly as evidence about the product | 
---

On the last Thursday of April, at ten past two in the morning, Imran's phone made a noise like a small animal being trodden on.

He had set it up himself, for the purpose, and he lay in the dark for a moment admiring how well it worked. Then he sat up. It said that errors on the demonstration page had passed a line. By half past two he had found the cause, a certificate that had run out, and by a quarter to three he had mended it, and at three he wrote four lines in the log, and went back to bed with the satisfaction of a man whose smoke alarm has done what it was bought for.

He told Anaya about it at breakfast. "That's what ready means," he said. "It had gone wrong, and I knew before anyone else."

## Ready, and owned

It had taken Anaya most of the previous week to see the point. A demonstration works while you watch it. A product has to work while no one is watching, and it is amazing how much of what makes the difference lives outside the part you built.

Imran gave her a short list, and she turned it into a table that stayed taped above his desk for the rest of the year.

| Area | Ready when |
| --- | --- |
| Monitoring | An alert reaches a person when errors or delays rise |
| Analytics | The events in the tracking plan arrive from the live product |
| Privacy | A notice says what is collected, why, and how to have it deleted |
| Feedback | A user can report a problem in one click |
| Rollback | Going back to the previous version has been tried, not just planned |
| Cost | A spending limit is set with the model provider |

Each row had been the subject of a quarrel, and each was in the end a matter of an afternoon. The one nobody argued about was the last, because in July the provider's bill had arrived with a figure on it that made Mr. Bhatia put down his tea.

Every system also needs an *owner*, a named person who answers when it breaks at a bad hour. For the guard, Imran took the first week of each month and Tanvi the second. Their numbers were on the page that said how to report a fault. Anaya owned the product, which meant that if the owners were woken often, it was her problem to find out why.

## Finding people who will tell the truth

The first people to try the kit were not strangers. They were Anaya's sister's friend, two former colleagues, and a boy from her building who was good at computers. All of them were charming about it.

"It's lovely," said her friend. "Very clever."

She noticed, over several days, that nothing in the product changed because of what any of them said. Friends are too polite to be useful. They will tell you what they think you hope for, and they will not use the thing again.

So she did what she had learned to do in the second month: she went back to the people she had interviewed in the spring, and to the people they knew, and looked for those who had the problem now and used the same sort of software. In the end she found six teams. A travel company in Kochi whose chat was full of passport numbers. A clinic-booking service in Indore. A small tutoring business in Bengaluru. Three others. She called them *design partners*, and the phrase mattered, because a **design partner** is an early user who agrees to use an unfinished product and to tell you honestly what they find. They are not customers yet, and they are not a test audience either.

## What she told them first

Before any of them touched the kit, she sent each a single page, which Lakshmi had read twice and corrected in two places.

It said that the product was early and might be wrong, and that it would sometimes miss a detail it should have hidden. It said exactly what the guard would receive, where it would be processed, what would be recorded, which was counts and kinds and never the text of a message, and how a partner could have everything deleted. It said that nothing would be used for any other purpose, and that no partner's messages would help another partner. It asked them to begin with a small sample of messages that they themselves chose and prepared, not with a live feed. And it said that they could stop at any time, without explanation and without awkwardness.

This is **informed consent**. The agreement was not a click on a box. It was a person understanding what they were agreeing to and being told that they could leave.

Her offer in return was early access and a reduced price for the first year. She considered something larger, and Lakshmi stopped her. "If you pay them too much, they'll feel they owe you praise," she said. "You want people who are free to be unimpressed."

## Sitting on her hands

In the first week of May she watched six people use the kit, and she did it the way she had watched five developers in January, with her hands behind her back.

An **observation session** is exactly that: you give someone a real task, stay silent, and write down the same few things each time. How long the task took. Where they paused. What they said aloud. What they tried that she had not expected. Whether they finished.

She found it almost physically painful. A man in Indore stared for forty seconds at the setting that decided which kinds of detail were hidden, plainly unsure what it did, and she wanted to speak so badly that she bit the inside of her cheek.

At the end of the week she had a thing she had long suspected and could not prove. What people say and what they do are two separate sources, and they disagree. Joseph, in Kochi, told her in a call that the guard was "too aggressive": it hid too many things. The analytics showed that his team had pressed the restore button twice in three weeks. Another partner said she loved it, and had made one call to the kit in twelve days.

"When they differ, believe the behaviour," said Karan, who had joined her for the dull part. "Then ask them why. The behaviour tells you what is true. The reason you have to ask for."

When she asked Joseph why he thought it hid too much, he laughed. "I think I saw it hide a postcode once," he said. "And decided it was keen."

## More problems than time

By the end of two weeks she had a page of troubles. Some were failures of the machine. Some were a button that nobody could find. She resisted the instinct to keep them in separate lists, because a wrong judgement and a confusing screen cost the user exactly the same trust.

She scored each one on three things: how many people met it, how bad it was when they did, and what it would cost to fix.

| Problem | How often | How bad | Cost to fix | Order |
| --- | --- | --- | --- | --- |
| Nobody can tell why a detail was hidden | 4 of 6 teams | High: they stop trusting it | Small | 1 |
| Import fails for chats over five thousand messages | 1 team | High for them | Medium | 2 |
| Names of kinds of detail too long | 3 of 6 | Low | Small | 3 |
| Wants support for another chat system | 2 prospects | Blocks them entirely | Large | Later |

Looking at it was bracing. A thing that blocks one customer completely is not necessarily above a thing that quietly troubles four. Frequency and severity pull in different directions, and cost decides how soon you can answer either.

## One change, and what she expected from it

The top row was easy to state and hard to do properly. Four of six teams had asked, in one form or another, *why was this hidden?* The guard knew, of course, and had never said.

She wrote the plan on one card, in the form that Imran had taught her to write all plans.

*We saw four of six teams ask why a detail was hidden, and only 58 in a hundred of the hidden details were marked as right by the people who reviewed them. We will add a "why this was hidden" link that shows the three phrases that decided it. We expect the share marked right to rise above 65 within two weeks, with no extra time per message. If it does not move, the trouble may be in the decision and not in the explanation, and we will read fifty disputed cases by hand before changing anything else.*

Writing the last sentence first, before she had any result, was the part she was proudest of. It meant that if the number did not move she would already know what she was going to do.

It rose to 67.

## Telling people what changed

The change shipped on a Thursday, and she wrote about it in the way she had learned from the products she liked best. A **changelog** is the short public list of what changed in each release, written for the user and not the maker.

*New: "Why was this hidden?" Click the small question mark beside any masked detail and see the three phrases that led to the decision. If it was wrong, press Restore, and tell us.*

It said what was new, how to use it and what to do if it misbehaved. It did not say "improved the explainability of the masking subsystem". Tanvi, who proofread it, crossed out only one word and put in a shorter one.

She did one more thing that week, which had nothing to do with shipping. She started a **support log**. Every request for help, from any partner, went into one sheet with a category and an account. It cost nothing, and she realised after a month that it was the cheapest research she had ever done, since the users were telling her what they needed unprompted.

On Mondays she and Karan read it beside the analytics. A trouble that appeared in the support log, in the observation sessions and in the numbers, all at once, was almost certainly real. A trouble in only one of them she watched.

## What to carry forward

A demonstration works while someone watches; a product has to work when no one does, and for that it needs alerts that reach a person, events arriving from the live system, a privacy notice, a one-click way to report a fault, a rollback that has been tried, a spending limit, and a named owner. Early users should be people who have the problem now and who feel free to disappoint you, which friends rarely do. They are told plainly, in writing, what is collected, where it goes and how to leave, and they are offered something fair and not something large. In observation sessions you give a real task and stay silent, noting the same things each time, and when what people say and what they do disagree you believe the behaviour and then ask why. Problems are scored by how often, how bad and how costly, with machine failures and confusing screens in one list. One change is shipped with its evidence, its expected effect and a plan for when it does not work, and it is announced in plain words. And every request for help is kept, because a problem seen in the support requests, the sessions and the numbers together is real.

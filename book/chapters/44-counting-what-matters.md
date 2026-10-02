---
title: Counting What Matters
summary: Once real people use the tool, the question changes from "does it work?" to "what do they do?", and a privacy product has to answer it without recording a single thing it exists to hide. A sample-size sum then explains why a young company cannot run the test it wants.
course: b3
terms:
  - event taxonomy | the list of events a product records, with a naming rule everyone follows, such as object_action in lower case and past tense | taxonomy
  - tracking plan | the shared document that lists every event, its properties, when it fires and who owns it, which engineers build from and analysts trust | 
  - cohort | a group of users who started in the same period, followed together over time | cohorts
  - A/B test | showing a change to a random half of users and comparing them with the other half; the randomising is what lets you say the change caused the difference | A/B tests
  - minimum detectable effect | the smallest change worth detecting; it sets how many users a test needs | MDE
---

Karan, who had eaten three jalebis in December for finding an invisible character, joined the project in February as its first analyst, and the first thing he said to Anaya, on his first morning, was: "Please tell me you haven't been tracking message text."

She was nearly offended. "Of course not."

"Good. Because I'll have to say it every week, and I'd like to start with someone who agrees."

It was a joke, and also a rule. A privacy tool that measured how well it worked by recording what it was hiding would have defeated itself in the first week. Karan would spend that month proving it did not.

## One number, and the levers beneath it

They began where the strategy had begun. In the spring, Anaya had chosen a single sentence to say what value the guard gave, and a number to go with it: *messages leave the chat with nothing personal left in them.* It was her North Star. It was a good one, because it could be counted, but it was no use as a daily steer.

"You cannot move a North Star directly," said Karan. "You move it through inputs. Things a team can change this quarter."

They wrote three. The share of new integrations that pass a first-week check. The share of unsure cases that a person reviews within a day. The number of languages measured above the quality bar. Each was something a named person owned. Each had a plain link to the main number. And Karan added the sentence that he said had saved his old job. *If an input goes up and the North Star doesn't, your link is wrong, and that's useful to learn.*

## A list of things that happen

"Now," said Karan, "the dull part. And the most important."

Anaya had wondered what it would be. It was a naming rule. A product records things that happen, events, and unless there is a convention, six people will name the same thing six ways. The convention they chose was the common one: the object, then the action, lower case, past tense. The complete list is an *event taxonomy*.

| Event | Properties | The question it answers |
| --- | --- | --- |
| kit_installed | language of the host project, version | How many developers get through the hard step? |
| message_checked | kind of writing, length band | How much traffic is there, and in what writing? |
| detail_found | kind of detail | What is the guard actually catching? |
| detail_masked | kind of detail, action taken | What does it do with it? |
| review_requested | reason | How often is it unsure? |
| restore_clicked | kind of detail | Is it hiding things people need? |
| badge_clicked | none | Does the growth loop turn? |

Anaya read down the *properties* column and found that every cell was a kind or a band or a count. Nothing was a value. Not one of them could be used to reconstruct a message, a number, a name.

"Properties add detail to an event," said Karan, "so you can split results later. You keep them to what you need. And you never put the text, or anything personal, in them. Not in a property. Not in a free-text 'notes' field that someone will one day fill in."

Identity needed the same care. A visitor to the demonstration page began with an anonymous number. When they signed up, that number was linked to an account, so that their earlier visits became part of their history. And because the buyers were companies, every event also carried an account number for the company. "Your buyer cares about teams, not single developers," said Karan. "Your analysis has to be able to see a team."

All of it went into a shared document, the *tracking plan*, which lists every event, its properties, when it fires and who owns it. Engineers build from it. Analysts trust it. Karan's first act, on the day it was agreed, was to trigger each event himself and confirm that it arrived once, with the right properties, and then to compare the count of accounts created with the rows in the accounts table. They agreed. That was the proof he wanted. "Bad data looks exactly like good data on a chart," he said. "You have to check."

## Three views

Three views answer most of the questions anyone asks.

A funnel shows the share of users who complete each step, in order, and so where they fall away. A *cohort* is a group of users who began in the same period, followed together. And a segment is a slice of users who share a property, such as the kind of writing they handle, which shows who the product suits.

He built the first retention table the week there was enough data to build it. Each row was a cohort of teams that had started in a given week, and each cell showed the share still running the kit that many weeks later.

| Cohort | Teams | Week 1 | Week 2 | Week 4 | Week 8 |
| --- | --- | --- | --- | --- | --- |
| 5 Feb | 8 | 75% | 63% | 50% | 50% |
| 12 Feb | 11 | 73% | 64% | 55% | |
| 19 Feb | 9 | 78% | 67% | | |

"Read it two ways," said Karan. "Across a row, the first line flattens at fifty percent. That suggests a lasting use. Down a column, newer cohorts hold on a bit better, which suggests the changes you made in January helped."

"Do I believe it?"

"Look at the *Teams* column." Anaya looked. "With eight teams, one team is more than twelve points. You can't see a twelve-point swing and call it an effect. Both readings need many more users before you trust them. I'd put the table on the wall and not say a word about it."

## The test she could not run

There was one idea she had been waiting to use. In the new onboarding, the kit could show a developer a preview of what would be hidden before they finished setup. Anaya thought this would help more of them finish. It was a hypothesis she wanted to test properly.

An *A/B test* shows a change to a random half of the users and compares them with the other half. The randomising is what permits the sentence *the change caused the difference*. And a design must be written before it starts: the question, who is divided, the main number, one guardrail, the smallest change worth detecting, how many users are needed, and when you will stop.

That smallest change has a name, the *minimum detectable effect*, and it sets everything else. Karan gave her a rough rule for a yes-or-no measure. The users needed in each group are about sixteen times the rate times its complement, divided by the square of the change worth detecting.

"Activation is thirty percent," said Anaya. "I'd like to find out whether the preview takes it to forty."

She did the sum on a card. Sixteen, times 0.30, times 0.70, divided by 0.01 (the change of ten points, squared). That came to 336 for each group. Six hundred and seventy-two in all.

"We get about forty new teams a month," said Karan.

She did the next sum without being asked. It would take a year and a half.

"It's the honest answer," he said. "An early company has forty accounts, not two thousand. It can't run this test. You say so. Then you use other evidence: watch five developers do it, compare before and after with care, look for large effects, and state that it is weaker." He paused. "Running a test that's too small and reporting the result is worse than not testing at all. You'd be reporting noise as news."

She ran the observation with five developers that week. Four finished with the preview. Of the five who had used the old flow, three had. It was not proof. It was an indication, labelled as one.

## Why X does not mean Y

One more caution came in March, in the form of a pleasing pattern. Teams who reviewed the unsure cases within a day were far more likely to still be using the kit after eight weeks.

"The review keeps them," said Anaya, who wanted it to be true.

"Maybe," said Karan. "Or the teams who care enough to review are the teams who'd have stayed anyway. Engaged teams do both." Only a randomised test shows cause. Everything else, he said, is a pattern worth testing. He wrote the sentence she was to use. *Teams that do X also tend to do Y.* Not *because*.

And, finally, he kept two things apart that people often join. Product events record what people did. Records of how the models behaved, their traces and timings and scores, record what the system did. He linked them by a shared request number, so that anyone could move from one to the other and never confuse them.

## What to carry forward

A North Star cannot be moved directly; it moves through input metrics that a named team owns, and if an input rises while the main number does not, the link is wrong. What a product records should follow a single naming rule and be written into a tracking plan, with properties that carry a kind or a count and never the content, and with an account identity as well as a user identity when the buyers are companies. Funnels show where people fall away, cohorts follow groups who began together, and a retention table needs enough teams before it can be trusted. An A/B test needs a minimum detectable effect and a sample large enough to find it, and an early company often cannot run one and should say so. Data must be checked before it is believed. And a pattern in which people who do one thing also do another is not proof that one causes the other.

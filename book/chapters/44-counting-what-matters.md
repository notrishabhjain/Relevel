---
title: Counting What Matters
summary: Real people now use the tool. So the question changes from "does it work?" to "what do they do?" A privacy tool must count without keeping what it hides. Then a small sum shows why a young company cannot run the test it wants. The chapter teaches the event taxonomy, the tracking plan, cohorts, A/B tests and the minimum detectable effect.
course: b3
goals:
  - link a North Star to input metrics, each owned by a named team
  - write an event taxonomy and a tracking plan whose properties never hold personal content
  - read a funnel, a cohort table and a segment, and say how many teams you need before you trust a table
  - work out how many users an A/B test needs, and say why a pattern is not proof of cause
terms:
  - event taxonomy | a labelled shelf of every event the product records, with one naming rule for all, such as object_action in lower case and past tense | taxonomy
  - tracking plan | the shared register that lists every event, its properties, when it fires and who owns it; engineers build from it and analysts trust it | 
  - cohort | a school batch: users who started in the same period, followed together over time | cohorts
  - A/B test | two chai stalls run side by side: you show a change to a random half of users and compare them with the other half; the random split lets you say the change caused the difference | A/B tests
  - minimum detectable effect | the smallest change worth catching; it sets how many users a test needs | MDE
---

Karan was the first analyst to join the project. He arrived in February. On his first morning he said to Anaya: "Please tell me you haven't been tracking message text." She was nearly offended. Of course she hadn't, she said. He said that was good. He would have to ask her every week. He wanted to start with someone who agreed.

It was a joke, and it was also a rule. Think of a lock-maker who keeps a copy of every key. A privacy tool that counts how well it works by recording what it hides would defeat itself in a week. This chapter follows the first month of measurement. Karan's job was to prove that the guard could count what people did. It had to keep no trace of what they wrote.

## The case: measuring without recording

The sections below take four things in turn. First, the main number. Second, the list of events that feed it. Third, the views of that list. Fourth, a test that a young company could not run. It is like a shopkeeper who counts how many people walk in, without opening their bags.

## One number, and the levers beneath it

In the spring Anaya had chosen one sentence to say what value the guard gave. She had a number to go with it: messages leave the chat with nothing personal left in them. It was her North Star (the one number that shows the product is doing its job). It was a good one, because it could be counted. But it was no use as a daily guide.

Karan said that you cannot push a North Star directly. It is like a star at night. You cannot move it, but you can steer by it. It moves through inputs. These are things a team can change this quarter. They wrote three. The table gives each one with its owner. It also shows how each one connects to the North Star.

Table: Three input metrics
| Input | Owner | Link to the North Star |
| --- | --- | --- |
| The share of new integrations that pass a first-week check | A named engineer | An integration that works cleans messages |
| The share of unsure cases that a person reviews within a day | A named support lead | Reviewed cases end with the right action |
| The number of languages measured above the quality bar | Anaya | Messages in covered languages are cleaned correctly |

Karan added one more sentence. He said it had saved his last job. If an input goes up and the North Star does not, the link is wrong. That is a useful thing to learn.

## A list of things that happen

Next Karan described what he called the dull part. It was also the most important one. A product records things that happen. Each one is called an event, like a line in a visitor register at a gate. Without a rule, six people will name the same event six ways.

The team chose a common rule. Write the object first, then the action. Use lower case and the past tense. The complete list is the *event taxonomy*. Think of it as labelled shelves, where every event has one place. Here is the guard's, with the question each event answers.

Table: The guard's event taxonomy
| Event | Properties | The question it answers |
| --- | --- | --- |
| kit_installed | language of the host project, version | How many developers get through the hard step? |
| message_checked | kind of writing, length band | How much traffic is there, and in what writing? |
| detail_found | kind of detail | What is the guard actually catching? |
| detail_masked | kind of detail, action taken | What does it do with it? |
| review_requested | reason | How often is it unsure? |
| restore_clicked | kind of detail | Is it hiding things people need? |
| badge_clicked | none | Does the growth loop turn? |

Anaya read down the properties column. Every cell was a kind, a band or a count. Nothing was a value. Nothing could rebuild a message, a number or a name.

Karan explained why. Properties add detail to an event, so you can split the results later. Keep only what you need. Never let them hold the text or anything personal. This is true even for a free-text notes field. Somebody will fill it in one day.

::: key Identity needs the same care
A visitor to the demonstration page began as an anonymous number. Think of a token at a cloakroom. When the visitor signed up, the number was linked to an account. Their earlier visits then became part of their history. The buyers were companies, so every event also carried an account number for the company. Karan said a buyer cares about teams, not single developers. So the analysis must be able to see a team.
:::

All of this went into a shared document, the *tracking plan*. It is like the master register for the whole shop. It lists every event, its properties, when it fires (is sent) and who owns it. Engineers build from it. Analysts trust it.

On the day the plan was agreed, Karan did a check. He triggered each event himself and confirmed that it arrived once, with the right properties. Then he compared the count of accounts created with the rows in the accounts table. They agreed. That was the proof he wanted. Bad data, he said, looks exactly like good data on a chart. So you have to check.

## Three views

Three views answer most questions. It is like looking at the same school from three windows.

A funnel shows the share of users who finish each step, in order. It shows where they fall away, like water leaking from a bucket. A *cohort* is a school batch: a group of users who began in the same period, followed together. A segment is a slice of users who share a property, such as the kind of writing they handle. It shows who the product suits.

Karan built the first retention table in the week there was enough data. Each row was a cohort of teams that started in one week. Each cell was the share still running the kit that many weeks later.

Table: The first retention table
| Cohort | Teams | Week 1 | Week 2 | Week 4 | Week 8 |
| --- | --- | --- | --- | --- | --- |
| 5 Feb | 8 | 75% | 63% | 50% | 50% |
| 12 Feb | 11 | 73% | 64% | 55% | |
| 19 Feb | 9 | 78% | 67% | | |

He asked her to read it two ways. Across a row, the first line flattened at fifty percent. That hints at lasting use. Down a column, newer cohorts held on a little better. That hints that the January changes helped.

Anaya asked if she believed it. He pointed at the Teams column. With eight teams, one team is more than twelve points. A swing of twelve points is not an effect. Both readings need many more users before anyone can trust them. He suggested pinning the table to the wall and saying nothing about it.

## The test she could not run

Anaya had been waiting to use one idea. In the new onboarding, the kit could show a developer a preview of what would be hidden. It would show this before setup was finished. She thought more developers would finish. She wanted to test the idea properly.

The proper tool is an *A/B test*. It is like two chai stalls side by side, with one small change at one of them. You show the change to a random half of the users. You compare them with the other half. The random split lets you say "the change caused the difference". Write a design before the test starts. It names the question and who is divided. It names the main number and one guardrail (a number that must not get worse). It gives the smallest change worth detecting, how many users you need and when to stop.

The smallest change worth detecting is the *minimum detectable effect*. It sets everything else. Think of the smallest dent you want your net to catch. Karan gave her a rough rule for a yes-or-no measure. Take sixteen times the rate times its complement (one minus the rate). Divide by the square of the change worth detecting. That gives the users needed in each group.

::: example Anaya's sample-size sum
Activation is thirty percent. She wanted to know if the preview takes it to forty. Sixteen times 0.30 times 0.70, divided by 0.01 (the ten-point change, squared), comes to 336 in each group. That is 672 in all. The company gets about forty new teams a month. At that rate the test would take about a year and a half.
:::

That was the honest answer, Karan said. An early company has forty accounts, not two thousand. It cannot run this test. It says so, and then uses other evidence. It watches five developers use the feature.

It compares before and after with care. It looks for large effects. It states that the evidence is weaker. A test that is too small, with its result reported, is worse than no test. It reports noise as news.

That week Anaya watched five developers. Four finished with the preview. Of the five who had used the old flow, three had. It was not proof. She labelled it an indication.

## Why X does not mean Y

One more caution came in March, as a pleasing pattern. Teams that reviewed the unsure cases within a day were far more likely to still use the kit after eight weeks. Anaya wanted to believe that the review kept them.

Karan said it might. Or the teams who care enough to review are the teams who would have stayed anyway. Engaged teams do both. Think of people who carry umbrellas and also check the sky. The umbrella does not bring the rain. Only a randomised test shows cause. Everything else is a pattern worth testing. He gave her the sentence to use: teams that do X also tend to do Y. Never "because".

He also kept two records apart that people often join. Product events record what people did. Records of how the models behaved record what the system did. These are the traces, timings and scores. He linked them with a shared request number. Anyone could then move from one to the other without mixing them up.

## Summary

A North Star cannot be moved directly. It moves through input metrics that a named team owns. If an input rises and the main number does not, the link is wrong.

- A product should record events with one naming rule, written in a tracking plan. Properties carry a kind or a count, never the content. When the buyers are companies, the plan has an account identity as well as a user identity.
- Funnels show where people fall away. Cohorts follow groups who began together. A retention table needs enough teams before you trust it.
- An A/B test needs a minimum detectable effect and a sample large enough to find it. An early company often cannot run one, and should say so.
- Check data before you believe it. A pattern where people who do one thing also do another is not proof that one causes the other.

Counting needs tools to count with. The next chapter looks at the tools a team really works with.

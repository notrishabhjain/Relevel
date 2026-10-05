---
title: Counting What Matters
summary: Once real people use the tool, the question changes from "does it work?" to "what do they do?", and a privacy product has to answer it without recording anything that it exists to hide. A sample-size sum then shows why a young company cannot run the test it wants. The chapter introduces event taxonomies, tracking plans, cohorts, A/B tests and the minimum detectable effect.
course: b3
goals:
  - connect a North Star to input metrics that a named team owns
  - write an event taxonomy and a tracking plan whose properties never carry personal content
  - read a funnel, a cohort table and a segment, and say how many teams are needed to trust a table
  - calculate the sample an A/B test needs, and explain why a pattern is not proof of cause
terms:
  - event taxonomy | the list of events a product records, with a naming rule everyone follows, such as object_action in lower case and past tense | taxonomy
  - tracking plan | the shared document that lists every event, its properties, when it fires and who owns it, which engineers build from and analysts trust | 
  - cohort | a group of users who started in the same period, followed together over time | cohorts
  - A/B test | showing a change to a random half of users and comparing them with the other half; the randomising is what lets you say the change caused the difference | A/B tests
  - minimum detectable effect | the smallest change worth detecting; it sets how many users a test needs | MDE
---

Karan, the first analyst to join the project, arrived in February, and the first thing he said to Anaya on his first morning was: "Please tell me you haven't been tracking message text." She was nearly offended and said that of course she had not. He said that was good, since he would have to ask her every week and would like to start with someone who agreed.

It was a joke and also a rule. A privacy tool that measured how well it worked by recording what it was hiding would defeat itself within a week. This chapter follows the first month of measurement, in which Karan's job was largely to prove that the guard counted what people did without keeping a trace of what they wrote.

## The case: measuring without recording

The sections below take in turn the main number, the list of events that feed it, the views of that list, and a test that a young company could not run.

## One number, and the levers beneath it

In the spring Anaya had chosen a sentence to say what value the guard gave and a number to go with it: messages leave the chat with nothing personal left in them. It was her North Star. It was a good one, because it could be counted, but it was no use as a daily guide.

Karan said that a North Star cannot be moved directly. It moves through inputs, which are things a team can change this quarter. They wrote three.

Table: Three input metrics
| Input | Owner | Link to the North Star |
| --- | --- | --- |
| The share of new integrations that pass a first-week check | A named engineer | An integration that works cleans messages |
| The share of unsure cases that a person reviews within a day | A named support lead | Reviewed cases end with the right action |
| The number of languages measured above the quality bar | Anaya | Messages in covered languages are cleaned correctly |

Karan added the sentence that he said had saved his previous job: if an input goes up and the North Star does not, the link is wrong, and that is a useful thing to learn.

## A list of things that happen

Karan then described what he called the dull part and the most important one. A product records things that happen, which are events, and unless there is a convention, six people will name the same event six ways. The convention the team chose was a common one: the object, then the action, in lower case and in the past tense. The complete list is an *event taxonomy*.

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

Anaya read down the properties column and found that every cell was a kind, a band or a count. Nothing was a value, and nothing could be used to reconstruct a message, a number or a name. Karan explained that properties add detail to an event so that results can be split later. They should be limited to what is needed, and they must never hold the text or anything personal, whether in a property or in a free-text notes field that somebody will one day fill in.

::: key Identity needs the same care
A visitor to the demonstration page began with an anonymous number. When they signed up, the number was linked to an account so that earlier visits became part of their history. And because the buyers were companies, every event also carried an account number for the company. Karan observed that a buyer cares about teams and not about single developers, so the analysis has to be able to see a team.
:::

All of it went into a shared document, the *tracking plan*, which lists every event, its properties, when it fires and who owns it. Engineers build from it and analysts trust it. Karan's first act on the day it was agreed was to trigger each event himself and confirm that it arrived once, with the right properties, and then to compare the count of accounts created with the rows in the accounts table. They agreed, which was the proof that he wanted. Bad data, he said, looks exactly like good data on a chart, and one has to check.

## Three views

Three views answer most of the questions that anyone asks. A funnel shows the share of users who complete each step, in order, and so where they fall away. A *cohort* is a group of users who began in the same period, followed together. A segment is a slice of users who share a property, such as the kind of writing they handle, which shows who the product suits.

Karan built the first retention table in the week there was enough data to build it. Each row was a cohort of teams that had started in a given week, and each cell was the share still running the kit that many weeks later.

Table: The first retention table
| Cohort | Teams | Week 1 | Week 2 | Week 4 | Week 8 |
| --- | --- | --- | --- | --- | --- |
| 5 Feb | 8 | 75% | 63% | 50% | 50% |
| 12 Feb | 11 | 73% | 64% | 55% | |
| 19 Feb | 9 | 78% | 67% | | |

He asked her to read it in two ways. Across a row, the first line flattened at fifty percent, which suggests a lasting use. Down a column, newer cohorts held on a little better, which suggests that the changes made in January helped. Anaya asked whether she believed it. He pointed at the Teams column. With eight teams, one team is more than twelve points. A swing of twelve points cannot be called an effect, and both readings need many more users before they can be trusted. He suggested pinning the table to the wall and saying nothing about it.

## The test she could not run

One idea Anaya had been waiting to use. In the new onboarding the kit could show a developer a preview of what would be hidden before setup was finished. She thought this would help more developers finish, and she wanted to test the idea properly.

An *A/B test* shows a change to a random half of the users and compares them with the other half. The randomising is what permits the sentence "the change caused the difference". A design must be written before the test starts: the question, who is divided, the main number, one guardrail, the smallest change worth detecting, how many users are needed and when to stop.

The smallest change worth detecting is the *minimum detectable effect*, and it sets everything else. Karan gave her a rough rule for a yes-or-no measure: the users needed in each group are about sixteen times the rate times its complement, divided by the square of the change worth detecting.

::: example Anaya's sample-size sum
Activation is thirty percent, and she wanted to find out whether the preview takes it to forty. Sixteen times 0.30 times 0.70, divided by 0.01 (the change of ten points, squared), comes to 336 in each group, or 672 in all. The company gets about forty new teams a month. At that rate the test would take about a year and a half.
:::

That was the honest answer, Karan said. An early company has forty accounts and not two thousand, and it cannot run this test. It says so, and then uses other evidence: it watches five developers use the feature, compares before and after with care, looks for large effects, and states that the evidence is weaker. A test that is too small, with its result reported, is worse than no test, because it reports noise as news.

Anaya ran the observation with five developers that week. Four finished with the preview. Of the five who had used the old flow, three had. It was not proof, and she labelled it as an indication.

## Why X does not mean Y

One more caution arrived in March in the form of a pleasing pattern. Teams that reviewed the unsure cases within a day were far more likely to still be using the kit after eight weeks. Anaya wanted to believe that the review kept them. Karan said that it might, or it might be that teams who care enough to review are the teams who would have stayed anyway, since engaged teams do both. Only a randomised test shows cause, and everything else is a pattern worth testing. He gave her the sentence to use: teams that do X also tend to do Y, and never "because".

He also kept two records apart that people often join. Product events record what people did. Records of how the models behaved, their traces, timings and scores, record what the system did. He linked them by a shared request number, so that anyone could move from one to the other without confusing them.

## Summary

A North Star cannot be moved directly. It moves through input metrics that a named team owns, and if an input rises while the main number does not, the link is wrong.

- What a product records should follow a single naming rule and be written into a tracking plan. Properties carry a kind or a count and never the content, and the plan has an account identity as well as a user identity when the buyers are companies.
- Funnels show where people fall away, cohorts follow groups who began together, and a retention table needs enough teams before it can be trusted.
- An A/B test needs a minimum detectable effect and a sample large enough to find it. An early company often cannot run one, and should say so.
- Data must be checked before it is believed, and a pattern in which people who do one thing also do another is not proof that one causes the other.

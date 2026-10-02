---
title: Writing It Down So Others Can Build It
summary: An engineer draws the guard on a napkin, a product manager turns it into a specification a stranger could build from, and a support agent shows what a paper mock-up can find that a meeting cannot.
course: a7
terms:
  - PRD | product requirements document: the paper that says what to build and why, starting from the problem and its evidence | product requirements document
  - acceptance criteria | the conditions a piece of work must meet to count as done, each written so it can be tested | acceptance criterion
  - user story | one piece of value described from the user's side: who they are, what they want, and why | user stories, job story
  - edge case | an unusual input or situation that breaks things the ordinary cases never touch | edge cases
  - MVP | minimum viable product: the smallest thing that tests your riskiest assumption with real users | minimum viable product
  - vertical slice | a thin working version that goes through every layer of a system, so a real user can try something early | vertical slices, thin slice
  - sprint | a fixed period, usually one or two weeks, that a team plans, builds, shows and reviews | sprints
  - time-box | a fixed amount of time given to uncertain work, with a decision at the end of it | time-boxes, time-boxed
  - prototype | a rough, cheap version made to learn something before the real one exists | prototypes
  - usability test | watching a real person try to complete a task with a prototype, without helping them | usability tests
  - quasi-identifier | a detail that is harmless alone but can point to one person when combined with others, such as age, village and a rare illness | quasi-identifiers
  - redact | to remove a detail completely, for example by replacing it with the word [PAN] | redaction
  - mask | to hide part of a detail but keep its shape, for example 98******12 | masking, masked
  - pattern checker | the first part of the guard: it finds details that always have the same shape, such as a PAN or a mobile number, using fixed rules | pattern checkers
  - name-and-place finder | the second part of the guard: it finds details with no fixed shape, such as a person's name, an address or an employer | name-and-place finders
  - context judge | the third part of the guard: it reads the few sentences the first two parts could not settle and decides whether they point to a person | context judges
  - rule-keeper | the fourth part of the guard: it decides what to do with each detail found, such as remove it, mask it, let it through or ask | rule-keepers
---

Imran drew the guard on a napkin from the sweet shop downstairs, in a pencil he had to keep licking.

It took him four minutes. A long box on the left he labelled *message*. A long box on the right he labelled *safe message*. Between them went four small boxes in a row, and under each box he wrote three words, in the unhurried capitals of a man who had been drawing architecture diagrams for fifteen years and had never once enjoyed it.

"This is what I think it is," he said. "Correct me."

Anaya looked at the napkin for a long time. It was the first time anyone had drawn her idea, and it looked both smaller and more solid than it had in her head.

## What the guard is made of

The first box, Imran explained, caught anything with a fixed shape. A PAN is always five capital letters, four digits and a capital letter. An Aadhaar number is twelve digits. A mobile number is ten digits and starts with six, seven, eight or nine. A rule can find these as surely as a ruler finds a straight line, and it does so instantly, for nothing, the same way every time. They called it the *pattern checker*.

The second box was for details with no shape at all. There is nothing about "Ramesh Jain", or "14 Sector 15, Gurgaon", or "Acme Bank", that follows a pattern, so no fixed rule can find them. Something would have to read the sentence and understand that this word is a person and that one is a place. This box he called the *name-and-place finder*.

The third box was the one he was least sure about. Some sentences contain no number and no name and still point to exactly one person: *I am the only diabetic patient in my village who had a transplant last year.* Details of this kind, harmless alone and sharp together, have a name: they are *quasi-identifiers*. A box that read these and judged them would be slow and costly, so the plan was to ask it only about the few sentences the first two boxes could not settle. He called it the *context judge*.

The last box did not find anything. It decided. Given everything the others had found, it chose one of four things for each detail. It could *redact* the detail, which means remove it completely and leave a label like [PAN] in its place. It could *mask* it, which hides part and keeps the shape, so that a mobile number becomes 98******12 and the agent can still see that a number was there. It could let the detail through. Or it could ask the person. The choice depended on why the number was being collected. A delivery address is needed for a delivery. An identity number is not needed to ask about late fees. This was the *rule-keeper*.

"Pattern checker, name-and-place finder, context judge, rule-keeper," said Anaya, trying them out. "That sounds like a family."

"It's a pipeline," said Imran. "But fine. Family."

## Starting from the problem

The napkin was a sketch, and a sketch is not something another person can build from. What she needed was a *PRD*, a product requirements document, which says what to build and why. The "why" matters more than it seems. Engineers make better decisions when they know the problem, and worse ones when they are handed a list of features with no reason attached.

She started where the document should start, with the problem and its evidence: the 37 conversations, the interview numbers, the greeting that invited details. After it came who the tool was for, and who it was not for. After that, scope, with a section she gave real care to: what was deliberately left out. She wrote the Won't list from the strategy straight into it. Then what the user would see when it worked, when it was unsure, when it failed, and when it declined. Then the tests it had to pass, how success would be measured, how it would be released, and what she did not yet know.

The test of a good document was a single question: *could a stranger build this and know when they had finished?* That depended almost entirely on one section.

## Done, in a way you can check

The part of a PRD that does the most work is the conditions for "done". Called *acceptance criteria*, they should each be something that can be tested, and the commonest failure is to write one that cannot.

| Cannot be tested | Can be tested |
| --- | --- |
| It finds identity numbers accurately | At least 95 of every 100 identity numbers in a set of real conversations, marked by hand beforehand, are hidden |
| It is fast | It adds no more than a third of a second to a reply |
| It handles bad input | If a message is empty or only emoji, it passes through unchanged and nothing is logged as an error |

She noticed the shape of the first one. It did not say *every* number would be found, because it would not be. It said how many, out of what, measured against what. For a tool that reads and writes text, "done" is not a promise of one right answer. It is a rate, measured on examples somebody has already marked, with the limit written down. The thing that makes a rate meaningful is the marked examples, and she did not yet have them, and she wrote that on the open-questions list in capital letters.

## The odd cases

Each piece of work needed a short story, from the user's side, with its own conditions. A *user story* describes one piece of value: *As a support agent, I want identity numbers hidden as I read the chat, so that I never see what I do not need.* A cousin of it, the job story, starts from the situation instead of the role, and gives engineers more to work with: *When I open a chat for a customer asking about a loan, I want any identity number to be hidden, so that I can help without handling it.*

What stories need next, and where most of the trouble lives, are the *edge cases*: the unusual inputs the ordinary cases never touch. Farah's team and Imran's memory supplied a list that Anaya found alarming and then delightful.

| Case | What should happen |
| --- | --- |
| A number written with spaces or dashes: 4321-5678-9012 | Hide it as if it were written normally |
| A number broken over two lines | Hide both halves |
| "adhar" or "mobil" spelled wrong beside a number | Still hide the number |
| A mobile number already half hidden: 98xxxxxx12 | Leave it alone, and do not report it |
| A twelve-digit order number that is not an identity number | Do not hide it, or the agent cannot do the job |
| A message in Hindi script with Hindi digits | Hide it |
| The tool cannot decide | Say so, and let a person decide |

The last row was the one she added herself, and it was the difference between a product and a gamble. Software that reads text will sometimes be unsure, and a product has to say what it does then.

## The thinnest thing that works

"Where do we start?" asked Imran. "I can build the whole thing in layers. First the part that reads the chat, then the finding, then the hiding, then what the agent sees. By week six it would all work at once."

"And in week five?"

"Nothing would work."

That is the difference between cutting work in layers and cutting it in slices. The first builds one layer at a time, and nothing is usable until the last is finished. The second builds a thin version of every layer, so something works from the start. A *vertical slice* passes through everything, narrowly. Anaya wrote down what the first one should be: one kind of number, one way of writing it, from the moment a message arrives to the moment an agent sees it hidden, with a line in a log saying what was done.

Such a slice is the core of an *MVP*, a minimum viable product, which is the smallest thing that tests your riskiest assumption with real users. It is not a small version of everything. It is one small version of the one thing that has to be true.

## Two weeks at a time

Imran's team worked in *sprints*, fixed stretches of two weeks. Each begins with a plan and ends with a demonstration and a short meeting about what went well and what should change. The demonstration is of working software, never of slides.

Estimating, though, was a problem. Imran could say how long a rule for twelve digits would take. He could not say how long it would take to make something find names in Hinglish, because he did not know whether it could be done. So they used a *time-box*: a fixed amount of time, with a decision at the end of it. *Three days. If it finds fewer than seventy of every hundred names in the real conversations, stop and rethink.* A time-box turns a guess about duration into a decision point.

## Paper first

Anaya drew the agent's screen on four sheets of paper: the chat with a number masked in it, the same chat with a note saying *1 detail hidden, click to see why*, a chat where the tool was unsure, and a chat where it had hidden something the agent needed. A rough, cheap thing made to learn something is a *prototype*, and the amount of care it deserves depends on the question. Paper can tell you whether a flow makes sense. A clickable mock-up can tell you whether people find their way. Something that runs on real output can tell you whether they trust it.

On Friday she sat Farah's colleague Neha at a table with the four sheets and gave her a task, not instructions: "A customer says her callback number was hidden. Find out what happened."

This kind of *usability test* is simple to describe and hard to do, because the entire discipline is not helping. Neha picked up the second sheet, looked at it for eleven seconds, picked up the third, put it down, and said, "Where do I click to get it back?"

Anaya's pen hovered. Every part of her wanted to point. She kept still.

"There is no way to get it back," said Neha, helpfully, to herself. "So I'd have to ask Imran."

It was the most valuable eleven seconds of the week. Three to five people like Neha will show you most of the serious problems with a design, and each hesitation is a finding. Anaya added a line to the PRD: *An agent can see the hidden detail, for one chat, with a reason recorded.* It had not occurred to her, and it would never have occurred to a meeting.

## What to carry forward

A specification starts from the problem, says what is left out, and states "done" in conditions that can be tested. For anything that reads and writes text, "done" is a rate measured against examples someone has already marked. Stories, with their odd cases, are where most of the real work hides. The smallest worthwhile first version is a thin slice through every part, not one finished layer. Fixed two-week sprints keep the team honest, and a time-box gives uncertain work an end. And before anything is built, a paper version put in front of a real person, with the discipline of saying nothing, finds problems no meeting would.

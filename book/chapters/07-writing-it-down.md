---
title: Writing It Down So Others Can Build It
summary: An engineer sketches the guard on a napkin and the product manager turns the sketch into a specification that a stranger could build from. The chapter covers the four parts of the guard, requirements and acceptance criteria, thin first versions, and what a paper test reveals that a meeting cannot.
course: a7
goals:
  - name the four parts of the guard and say what each one is responsible for
  - write a product requirements document whose "done" conditions can be tested
  - list edge cases and decide what the product does when it is unsure
  - build a thin first version, give uncertain work a time-box, and test a paper prototype with a real person
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

When the founders approved the project, Imran Qureshi drew the guard on a napkin from the sweet shop below the office. The drawing took four minutes. A long box on the left was labelled "message" and a long box on the right "safe message". Between them stood four small boxes in a row, each with three words beneath it.

A napkin sketch is a hypothesis about structure. It cannot be built from, because it does not say what each box must do, how anyone will know the box works, or what happens when it fails. This chapter follows the conversion of the sketch into a document that a stranger could build from, and the first test of the design on paper.

## The case: four boxes on a napkin

Imran's sketch divided the work into four parts. Anaya's task was to say precisely what each part was responsible for, to write the conditions under which each would count as finished, and to find out before any code existed whether the people who would use the result could understand it.

## What the guard is made of

The sketch assigns each kind of personal detail to the part best suited to find it.

Table: The four parts of the guard
| Part | What it does | Why it is separate |
| --- | --- | --- |
| Pattern checker | Finds details that always have the same shape: a PAN (five capital letters, four digits, one capital letter), an Aadhaar number (twelve digits), a mobile number (ten digits starting with 6, 7, 8 or 9) | A fixed rule finds these instantly, at no cost, the same way every time |
| Name-and-place finder | Finds details with no fixed shape, such as a person's name, an address or an employer | No rule can describe "Ramesh Jain" or "14 Sector 15, Gurgaon"; something must read the sentence and recognise a person or a place |
| Context judge | Reads the few sentences the first two parts could not settle and decides whether they point to a person | Reading in context is slow and costly, so it is asked only about what remains |
| Rule-keeper | Decides what to do with each detail that was found | It finds nothing itself; it applies the rules for each kind of detail |

The *pattern checker* is the first part. The *name-and-place finder* is the second. The *context judge* is the third, and the case for it is the *quasi-identifier*: a detail that is harmless alone but can point to one person in combination, as in the sentence "I am the only diabetic patient in my village who had a transplant last year". The sentence has no number and no name and still identifies someone.

The *rule-keeper* chooses among four actions for each detail. It can *redact* the detail, removing it completely and leaving a label such as [PAN] in its place. It can *mask* it, hiding part and keeping the shape, so that a mobile number becomes 98******12 and the agent can see that a number was there. It can let the detail through, or it can ask a person. The choice depends on why the information was collected. A delivery address is needed for a delivery, and an identity number is not needed to ask about late fees.

## Starting from the problem

A *PRD*, a product requirements document, says what to build and why. The reason matters because engineers make better decisions when they know the problem and worse ones when they receive a list of features with no purpose attached.

Anaya began where a PRD should begin, with the problem and its evidence: the 37 conversations, the interview numbers and the greeting that invited details. Next came who the tool was for and who it was not for. Then came scope, including a section on what was deliberately left out, which she filled from the Won't list of the strategy. After that she described what the user would see when the tool worked, when it was unsure, when it failed and when it declined. The remaining sections covered the tests the tool had to pass, how success would be measured, how it would be released, and what was not yet known.

The test of the document was a single question: could a stranger build this and know when they had finished? The answer depended almost entirely on one section.

## Done, in a way that can be checked

The part of a PRD that does the most work is the set of conditions for "done". These are the *acceptance criteria*, and each should be something that can be tested. The commonest failure is a criterion that cannot be.

Table: Acceptance criteria that cannot be tested, and the same ones rewritten
| Cannot be tested | Can be tested |
| --- | --- |
| It finds identity numbers accurately | At least 95 of every 100 identity numbers in a set of real conversations, marked by hand beforehand, are hidden |
| It is fast | It adds no more than a third of a second to a reply |
| It handles bad input | If a message is empty or only emoji, it passes through unchanged and nothing is logged as an error |

The first rewritten criterion does not say that every number will be found, because that would not be true. It says how many, out of what, measured against what. For a tool that reads and writes text, "done" is not a promise of one correct answer. It is a rate measured on examples that someone has already marked, with a limit written down. The marked examples are what give the rate meaning. Anaya did not yet have them, and she put that on the open-questions list in capitals.

## Stories and odd cases

Each piece of work needs a short description from the user's side, with its own conditions. A *user story* describes one piece of value: as a support agent, I want identity numbers hidden as I read the chat, so that I never see what I do not need. A variant, the job story, starts from the situation instead of the role and gives engineers more to work with: when I open a chat for a customer asking about a loan, I want any identity number hidden, so that I can help without handling it.

Stories are followed by *edge cases*, the unusual inputs that the ordinary cases never touch, and most of the real work hides in them. Farah's team and Imran's memory supplied a list.

Table: Edge cases for the guard
| Case | What should happen |
| --- | --- |
| A number written with spaces or dashes: 4321-5678-9012 | Hide it as if it were written normally |
| A number broken over two lines | Hide both halves |
| "adhar" or "mobil" misspelled beside a number | Still hide the number |
| A mobile number already half hidden: 98xxxxxx12 | Leave it alone and do not report it |
| A twelve-digit order number that is not an identity number | Do not hide it, or the agent cannot do the job |
| A message in Hindi script with Hindi digits | Hide it |
| The tool cannot decide | Say so and let a person decide |

The last row was added by Anaya, and it separates a product from a gamble. Software that reads text will sometimes be unsure, and a product must say in advance what it does then.

## The thinnest thing that works

Imran proposed to build the guard in layers: first the part that reads the chat, then the finding, then the hiding, then what the agent sees. By the sixth week everything would work together. Anaya asked what would work in the fifth week. "Nothing," he said.

Cutting work in layers produces nothing usable until the last layer is finished. Cutting it in slices builds a thin version of every layer, so something works from the start. A *vertical slice* passes through all the layers, narrowly. Anaya specified the first one: a single kind of number, written in a single way, followed from the moment a message arrives to the moment an agent sees it hidden, with a line in a log saying what was done.

::: def Minimum viable product
An *MVP* is the smallest thing that tests the riskiest assumption with real users. It is not a small version of everything. It is one small version of the one thing that has to be true.
:::

## Two weeks at a time

Imran's team worked in *sprints*, fixed periods of two weeks. Each begins with a plan and ends with a demonstration and a short meeting about what went well and what should change. The demonstration shows working software, never slides.

Estimates were harder. Imran could say how long a rule for twelve digits would take. He could not say how long it would take to find names in Hinglish, because he did not know whether it could be done. The team therefore used a *time-box*, a fixed amount of time with a decision at the end of it: three days, and if fewer than seventy of every hundred names in the real conversations were found, stop and rethink. A time-box converts a guess about duration into a decision point.

## Paper first

Anaya drew the agent's screen on four sheets of paper: the chat with a number masked, the same chat with a note saying "1 detail hidden, click to see why", a chat where the tool was unsure, and a chat where it had hidden something the agent needed. A rough, cheap version made to learn something is a *prototype*, and the care it deserves depends on the question. Paper can show whether a flow makes sense. A clickable mock-up can show whether people find their way. A version that runs on real output can show whether they trust it.

On Friday she sat a colleague of Farah's, Neha, at a table with the four sheets and set a task instead of giving instructions: a customer says her callback number was hidden, so find out what happened. This is a *usability test*. It is simple to describe and hard to carry out, because its entire discipline is not helping.

Neha picked up the second sheet and looked at it for eleven seconds. She picked up the third, put it down, and asked where she should click to get the number back. Anaya wanted very much to point and kept still. "There is no way to get it back," Neha said to herself. "So I'd have to ask Imran."

::: key What eleven seconds found
A test with three to five people like Neha reveals most of the serious problems in a design, and each hesitation is a finding. Anaya added a line to the PRD: an agent can see the hidden detail, for one chat, with a reason recorded. No meeting had raised it.
:::

## Summary

A specification starts from the problem, says what is left out and states "done" as conditions that can be tested. For anything that reads and writes text, "done" is a rate measured against examples someone has already marked.

- The guard has four parts: a pattern checker for fixed shapes, a name-and-place finder for details without shape, a context judge for what remains and a rule-keeper that decides what to do. Each detail is redacted, masked, passed or queried.
- Stories describe value from the user's side, and edge cases are where most of the real work hides. A product must say what it does when it is unsure.
- The first version is a vertical slice that goes through every layer narrowly, and an MVP tests the riskiest assumption. Sprints keep the team in step with working software, and a time-box ends uncertain work with a decision.
- A paper prototype tested on a real person, who is not helped, finds problems that a meeting would not.

---
title: Writing It Down So Others Can Build It
summary: An engineer draws the guard on a napkin. The product manager turns the drawing into a recipe card that a stranger could cook from. You learn the four parts of the guard, how to say when work is done, how to build a thin first version, and what a paper test shows that a meeting cannot.
course: a7
goals:
  - name the four parts of the guard and say what each one does
  - write a product requirements document whose "done" conditions can be tested
  - list odd cases (edge cases) and decide what the product does when it is unsure
  - build a thin first version, give unsure work a time limit, and test a paper prototype with a real person
terms:
  - pattern checker | a guard at a gate who checks tickets by their look: it finds details that always have the same shape, such as a PAN or a mobile number, using fixed rules | pattern checkers
  - name-and-place finder | a guard who reads names on a list: it finds details with no fixed shape, such as a person's name, an address or an employer | name-and-place finders
  - context judge | a wise elder who reads the tricky sentences: it reads the few sentences the first two parts could not settle and decides if they point to a person | context judges
  - rule-keeper | the clerk with the rule book: it decides what to do with each detail found, such as remove it, mask it, let it through or ask | rule-keepers
  - PRD | product requirements document, the recipe card for a dish: it says what to build and why, starting from the problem and its evidence | product requirements document
  - acceptance criteria | the teacher's marking rules: the conditions a piece of work must meet to count as done, each written so you can test it | acceptance criterion
  - user story | one piece of value told from the user's side: who they are, what they want, and why | user stories, job story
  - edge case | an odd parcel at the post office: an unusual input that breaks things the ordinary cases never touch | edge cases
  - MVP | minimum viable product, the smallest thing that tests your riskiest guess with real users | minimum viable product
  - vertical slice | a thin cycle that already rolls: a working version that goes through every layer of the system, so a real user can try it early | vertical slices, thin slice
  - sprint | a fixed stretch of one or two weeks in which a team plans, builds, shows and reviews its work | sprints
  - time-box | a fixed amount of time for unsure work, with a decision at the end of it | time-boxes, time-boxed
  - prototype | a cardboard toy house: a rough, cheap version made to learn something before the real one exists | prototypes
  - usability test | watching a real person try a task with a prototype, without helping them | usability tests
  - quasi-identifier | a clue that is harmless alone but can point to one person when added to others, such as age, village and a rare illness | quasi-identifiers
  - redact | to remove a detail completely, for example by replacing it with the word [PAN] | redaction
  - mask | to hide part of a detail but keep its shape, for example 98******12 | masking, masked
---

When the founders said yes to the project, Imran Qureshi drew the guard on a napkin. The napkin came from the sweet shop below the office. The drawing took four minutes. A long box on the left said "message". A long box on the right said "safe message". Between them stood four small boxes in a row. Each had three words under it.

A napkin sketch is only a guess about how things fit together. You cannot build from it. It does not say what each box must do. It does not say how anyone will know the box works. It does not say what happens when the box fails.

In this chapter the sketch grows into a document. A stranger could build from that document. Then we see the first test of the design. The test is done on paper.

You may have run technology projects before. Then you know many words here: requirements, sprint (a short work round), dependency (one job waiting on another), edge case (an odd input). Read for one thing. What changes when the product is yours? The four parts of the guard matter most. Every later chapter uses their names.

## The case: four boxes on a napkin

Imran's sketch split the work into four parts. Anaya had three jobs. First, she had to say what each part is responsible for. Second, she had to write down when each part counts as finished. Third, she had to learn something before any code existed. Could the people who would use the result understand it?

## What the guard is made of

Think of the entrance of a railway station. One guard checks tickets. Another reads names on a list. A senior officer settles the tricky cases. A clerk follows the rule book. The sketch works the same way. Each kind of personal detail goes to the part that finds it best. The table lists the four parts. It also says why each one stands alone. Read the third column slowly. The thinking behind the design is there.

Table: The four parts of the guard
| Part | What it does | Why it is separate |
| --- | --- | --- |
| Pattern checker | Finds details that always have the same shape: a PAN (five capital letters, four digits, one capital letter), an Aadhaar number (twelve digits, not starting with 0 or 1, the last one a check digit worked out from the others), a mobile number (ten digits starting with 6, 7, 8 or 9) | A fixed rule finds these instantly, at no cost, the same way every time |
| Name-and-place finder | Finds details with no fixed shape, such as a person's name, an address or an employer | No rule can describe "Ramesh Jain" or "14 Sector 15, Gurgaon"; something must read the sentence and recognise a person or a place |
| Context judge | Reads the few sentences the first two parts could not settle and decides whether they point to a person | Reading in context is slow and costly, so it is asked only about what remains |
| Rule-keeper | Decides what to do with each detail that was found | It finds nothing itself; it applies the rules for each kind of detail |

The *pattern checker* is the first part. It is like a guard who checks tickets by how they look. The *name-and-place finder* is the second part. It is like a guard who reads names on a list.

The *context judge* is the third part. Why do we need it? Think of a *quasi-identifier*. That is a clue that is harmless alone. But it can point to one person when you add other clues. Here is an example. "I am the only diabetic patient in my village who had a transplant last year." The sentence has no number and no name. It still points to someone.

The *rule-keeper* is the fourth part. It is the clerk with the rule book. For each detail it picks one of four actions.

- It can *redact* the detail. That means remove it completely and leave a label such as [PAN] in its place.
- It can *mask* it. That means hide part of it but keep its shape. A mobile number becomes 98******12. The agent (the support worker reading the chat) can still see that a number was there.
- It can let the detail through.
- Or it can ask a person.

The choice depends on why the detail was collected. A delivery needs a delivery address. A question about late fees does not need an identity number.

## Starting from the problem

A *PRD* is a product requirements document. Think of it as the recipe card for a dish. It says what to build, and why. The "why" matters. Engineers decide better when they know the problem. They decide worse when they get a list of features with no reason attached.

Anaya started where a PRD should start. She wrote the problem and its evidence. That meant the 37 conversations, the interview numbers, and the greeting that invited people to share details. Next she wrote who the tool was for, and who it was not for. Then she wrote the scope (the edges of the work). One part listed what was left out on purpose. She filled it from the Won't list in the strategy.

After that she described what the user would see in four situations. The tool works. The tool is unsure. The tool fails. The tool says no. The remaining parts covered the tests the tool must pass, how success is measured, how it is released, and what is still unknown.

One question tested the whole document. Could a stranger build this, and know when they were done? The answer depended almost entirely on one part.

## Done, in a way that can be checked

Think of a teacher's marking rules. "Good handwriting" is a feeling. "Eight out of ten sums right" can be checked. The part of a PRD that does the most work is the set of "done" conditions. These are the *acceptance criteria*. Each one must be something you can test. The most common mistake is a condition that cannot be tested.

The table shows weak conditions. Beside each one is the same condition, rewritten.

Table: Acceptance criteria that cannot be tested, and the same ones rewritten
| Cannot be tested | Can be tested |
| --- | --- |
| It finds identity numbers accurately | At least 95 of every 100 identity numbers in a set of real conversations, marked by hand beforehand, are hidden |
| It is fast | It adds no more than a third of a second to a reply |
| It handles bad input | If a message is empty or only emoji, it passes through unchanged and nothing is logged as an error |

Look at the first rewrite. It does not say every number will be found. That would not be true. It says how many, out of what, measured against what.

Some tools read and write text. For them, "done" is not a promise of one right answer. It is a rate. The rate is measured on examples that someone has already marked. And a limit is written down. The marked examples give the rate its meaning. Anaya did not have them yet. So she put that on the open-questions list, in capital letters.

## Stories and odd cases

Think of a shopping list written by the person who will eat the food. Each piece of work needs a short note from the user's side, with its own conditions. A *user story* describes one piece of value. For example: as a support agent, I want identity numbers hidden as I read the chat, so that I never see what I do not need.

There is a close cousin, the job story. It starts from the situation, not the person. It gives engineers more to work with. For example: when I open a chat for a customer asking about a loan, I want any identity number hidden, so that I can help without handling it.

After the stories come *edge cases*. Think of an odd parcel at the post office. It is the wrong size, or it is torn, or it has no stamp. An edge case is an unusual input that the ordinary cases never touch. Most of the real work hides in them. Farah's team and Imran's memory gave a list.

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

Anaya added the last row herself. It is the row that makes a product different from a gamble. Software that reads text will sometimes be unsure. A product must say in advance what it does then.

## The thinnest thing that works

Think of building a cycle. A cycle with only a frame does not move. A small cycle with a frame, wheels and a chain rolls on day one.

Imran wanted to build the guard in layers. First the part that reads the chat. Then the finding. Then the hiding. Then what the agent sees. By week six everything would work together.

Anaya asked what would work in week five. "Nothing," he said.

That is the trouble with cutting work in layers. Nothing can be used until the last layer is done. Cut it in slices instead. Then you build a thin version of every layer, and something works from the start. A *vertical slice* goes through all the layers, in a narrow line.

Anaya described the first one. It handled one kind of number, written one way. It followed that number from the moment a message arrived to the moment an agent saw it hidden. It also wrote one line in a log (a written record of what happened) saying what was done.

::: def Minimum viable product
An *MVP* is the smallest thing that tests the riskiest assumption (the guess most likely to sink the plan) with real users. It is not a small version of everything. It is one small version of the one thing that has to be true.
:::

## Two weeks at a time

Think of a school with a unit test every two weeks. Imran's team worked in *sprints*. A sprint is a fixed stretch of two weeks. Each one starts with a plan. Each one ends with a demonstration and a short meeting about what went well and what should change. The demonstration shows working software, never slides.

Estimates (guesses of how long a job takes) were harder. Imran could say how long a rule for twelve digits would take. He could not say how long it would take to find names in Hinglish. He did not know if it could be done.

So the team used a *time-box*. Think of giving a cook three days to try a new dish, and deciding at the end. A time-box is a fixed amount of time, with a decision at the end. Here it was three days. If fewer than seventy of every hundred names in the real conversations were found by then, they would stop and rethink. A time-box turns a guess about time into a moment to decide.

## Paper first

Think of a toy house made of cardboard. You can fix the doors before any wall is built. Anaya drew the agent's screen on four sheets of paper.

1. The chat with a number masked.
2. The same chat with a note saying "1 detail hidden, click to see why".
3. A chat where the tool was unsure.
4. A chat where it had hidden something the agent needed.

A rough, cheap version made to learn something is called a *prototype*. How much care it needs depends on your question. Paper can show if a flow makes sense. A clickable mock-up can show if people find their way. A version that runs on real output can show if they trust it.

On Friday she sat Neha, a colleague of Farah's, at a table with the four sheets. She gave no instructions. She gave one task. A customer says her callback number was hidden. Find out what happened.

This is a *usability test*. It is simple to describe and hard to do. Its whole discipline is not helping.

Neha picked up the second sheet. She looked at it for eleven seconds. She picked up the third, put it down, and asked where to click to get the number back. Anaya badly wanted to point. She kept still. "There is no way to get it back," Neha said to herself. "So I would have to ask Imran."

::: key What eleven seconds found
A test with three to five people like Neha shows most of the serious problems in a design. Each hesitation is a finding. Anaya added a line to the PRD: an agent can see the hidden detail, for one chat, with a reason recorded. No meeting had raised it.
:::

::: key What you can now say
Here are three sentences for a hiring conversation. Put your own numbers where N and M stand.
- I counted before I decided: N of the M conversations I read held a personal detail, and I can show how I counted.
- I wrote down what the product will not do, and what evidence would change my mind.
- My specification defines "done" as a rate on examples marked beforehand, not as a feeling.
:::

## Summary

Think of the recipe card once more. It starts from the problem. It says what is left out. It states "done" as conditions you can test. For anything that reads and writes text, "done" is a rate. The rate is measured against examples someone has already marked.

- The guard has four parts. A pattern checker handles fixed shapes. A name-and-place finder handles details with no shape. A context judge handles what remains. A rule-keeper decides what to do. Each detail is redacted, masked, passed or queried.
- Stories describe value from the user's side. Edge cases are where most of the real work hides. A product must say what it does when it is unsure.
- The first version is a vertical slice. It goes through every layer, in a narrow line. An MVP tests the riskiest guess. Sprints keep the team in step with working software. A time-box ends unsure work with a decision.
- A paper prototype, tested on a real person who gets no help, finds problems that a meeting would not.

That finishes the planning. Next, Anaya and Imran begin to look at the machine itself.

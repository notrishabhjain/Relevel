---
title: Shipping the Whole Thing
summary: In December Anaya stands before the people who doubted the idea and tells them what she built, what broke, who used it, what it costs and what she doesn't know. The eleven stages she followed are the year she has just lived. The chapter explains SDKs, findings documents, failure classes and evidence packs.
course: ch21cap b8
goals:
  - name the eleven stages of a project, from discovery to defence
  - write a findings document organised by failure class, with the evidence, the fix and what remains
  - say what a developer kit is, and what shipping one takes beyond building it
  - present what is known, what is not known and what would be done next, and put together an evidence pack
terms:
  - SDK | software development kit: a small library plus a demo that another developer can add to their own product without building the feature themselves | developer kit
  - findings document | a plain, factual record of what broke, the evidence, the root cause, the fix, and what was deliberately left unsolved; the opposite of a brochure | findings documents
  - failure class | a kind of failure, not a single instance of one; it is what makes ten tests meaningful instead of ten stories | failure classes
  - evidence pack | the set of things that lets somebody else check your claims instead of just trusting them | 
---

On the second Friday of December, in the large room on the second floor, Anaya stood up in front of nine people. She held a clicker she didn't need. She said she would tell them what she thought she knew, and then what she didn't.

At the table were both founders, Lakshmi Iyer, the finance director, Farah Sheikh and two of her agents, and a technical lead from one of the lending partners, who had come to see whether the thing was real. In the corner, arms folded, sat Imran Qureshi. By prior agreement, his job was to be the hardest person in the room. On the speakerphone, brought in at Anaya's request, were a retired teacher in Bengaluru and a cat.

Anaya had prepared two versions of the talk. One ran five minutes, for the people who would decide. The other ran twenty, for the people who would doubt. She would give the first, and then, if she were allowed, the second.

## The case: the defence

This talk is worth studying because it put everything the year had produced in front of people with reason to disagree. This chapter follows it, because the stages Anaya describes are the structure of the whole project.

## The eleven stages

The thing Anaya had built had a shape she hadn't seen until she described it. The shape turned out to be the shape of the year. The table shows the eleven stages, and what each one meant for the guard.

Table: The eleven stages
| Stage | What it meant for the guard |
| --- | --- |
| Discover | A problem found with users she could reach: five interviews and a count |
| Define | A specification whose numbers could be tested |
| Design | The product and the system designed together, so that each shaped the other |
| Build | A thin slice that worked end to end, with the threat model written beside it, not afterwards |
| Evaluate | An answer key that now held two hundred and thirty-one rows |
| Break | The product attacked on purpose, in ten ways |
| Observe | Made observable, so that anyone could ask what happened on a Tuesday and be told |
| Ship | Delivered to real people |
| Measure | What it cost and what it saved |
| Iterate | One improvement, aimed at the lowest-scoring row |
| Defend | The stage she was in now |

None of these stages was a separate project. Together they made one journey. And the final test of that journey was not whether she could build something. It was whether she could explain and defend what she had built.

## What broke

Anaya told the room she would start with the part that mattered most, which was what had gone wrong. A portfolio is more believable when its owner can say what broke.

The form this takes is a *findings document*. It is a plain, factual record of what failed, the evidence, the root cause, the fix, and what was deliberately left unsolved. It is the opposite of a brochure.

Her table did not list the failures themselves, of which there had been dozens. It listed their *failure classes*. A class is a kind of failure, not one instance of it. That is what makes ten tests meaningful instead of ten stories. Read the table by row: each class, what happened, what stops it now, and what is still left.

Table: Failure classes in the guard
| Failure class | What happened | What stops it now | What is left |
| --- | --- | --- | --- |
| A question with no answer | Search returned the nearest card as if it were evidence | Evidence required; a clear "I don't know" and a route to a person | Questions that look answerable |
| A poisoned document | A message told the finder to print the customer database | The finder has no tools; its output is checked against a fixed form | Attacks nobody has thought of |
| A stale permission or version | The chatbot quoted last year's late fee | Version and audience filters before search | A label entered wrongly |
| An unauthorised request | A customer asked for another's order | The customer is taken from the session, not from the model | A stolen session |
| Mixed-language input | Names with "ji", Devanagari digits, spoken numbers | Worked examples, number tidying, 231 rows | Five languages not covered |
| Poor scans and sound | A letter O read as a zero; a transcription error | Look-alike correction; whole-image fallback | A very poor photograph |
| A model swapped | The provider retired a model; a new phone format appeared | Pinned versions; the gate rerun; safe mode | A silent provider change |
| A traffic spike | Festival volume ten times normal | A queue for the careful judge; safe mode | A spike twenty times normal |
| A dependency changed | A field was renamed and every order number was hidden for two hours | Detect broken contracts and stop | Unknown unknowns |
| A well-meant edit | An instruction was softened on a Friday night | The release gate | A gate with a gap |

The partner's technical lead was the first to speak. He pointed out that she had put the failures in the same table as the fixes. She said it was the only honest way to do it. He said that most people give him the other table.

## Who used it

For the middle of the talk Anaya had prepared nothing clever. She suspected the evidence would carry it.

The product that had gone out was the developer kit: a small library and a demonstration page where a developer pastes a message and watches the guard clean it. A kit like this is called an *SDK*. It lets another team add the feature to their own product without building it themselves. Hers sat at a stable address, on a machine that wasn't hers, with monitoring, a privacy notice and a button for reporting problems.

Before it went live, Imran had done what she insisted on. He deployed a harmless change, rolled it back, and timed it with a stopwatch: four minutes and ten seconds. A rollback that has never been tried, she told the room, is only a plan.

Seven developers from four companies had used the kit, and she had watched five of them in person. Three got it working in under an hour. One stopped at the sign-in screen and wrote "I'd have left here", which she had put on the wall. For the last four weeks the support team in Pune had run the guard on every chat, and Lakshmi's sweep had held between eight and eleven in five hundred.

The finance director observed that seven developers at four companies was not many. Anaya agreed. It was a start. It was enough to say she had seen real people use it, and not enough to say it would scale.

## What she does not know

The cost figures were in a spreadsheet, which she showed quickly. They gave the cost per message cleaned, with retries and review time counted, at a low, a base and a high volume. At the highest, ten times festival load, the margin held. She had checked.

Then she did what she had said at the start she would do. She put up a slide with three columns: what is known, what is not known yet, and what she would do next.

Table: What is known, what is not, and what next
| What we know | What we don't know yet | What we would do next |
| --- | --- | --- |
| It finds ninety-three in a hundred of the details on a hand-marked key of 231 rows | How it behaves in Tamil, Bengali, Telugu, Marathi or Gujarati | Two more languages, measured on the same terms |
| It leaves nine in five hundred unhidden where it used to leave forty-six | Whether it works on customers' writing outside the two cities | A customer outside Pune |
| What it costs | What a leak actually costs the company | A figure for the cost of a leak, from Lakshmi's records |

It was, she thought, the only slide of the day that nobody would want to argue with.

## The hardest question

At the twenty-minute point Imran unfolded his arms. Why should the room believe the guard works beyond the Pune and Nashik teams, he asked? It worked on messages the company had collected, and the people who used the kit were her friends. Why was she not fooling herself?

It was the question she had expected. She had been rehearsing the answer on trains since October. She said she was not claiming it worked beyond them. She was saying that she knew how she would find out.

The answer key had been written before the results were seen. The sweeps were run by Lakshmi, who did not work for her. The developers were people she had never met, and one of them had said he would have left. Everything she had said about what the guard finds was measured on messages the team had written itself, because she would not use a real customer's message for a test. That was the limit of what she knew, and she had said it aloud so that someone could push on it.

Nobody spoke. Then Meenakshi's voice came thinly from the speaker, with a clatter behind it that was probably the cat. It was a very good answer, she said, and she would like it noted that she had not helped. The founders laughed. Lakshmi did not, but she wrote something down.

## What the pack is for

In the corridor afterwards, the partner's technical lead asked what he could look at to check her claims for himself. She had spent a week putting that together. It is called an *evidence pack*: the set of things that lets someone else check, not merely trust.

It held the repository, the specification, the answer key and its history, the results of the gate, the risk register, the findings, the dashboard and the cost model. It also held the decision log that had begun on the night of the fourteenth of March, with its first line still at the top: nothing counts until someone else could check it.

She said that you are done when anyone can rerun the work and get the same numbers. He nodded slowly and said he would like to see the answer key. She smiled. It was a request she had hoped to hear for nine months.

## Summary

A system is ready to be defended when it runs somewhere that isn't the builder's machine, and anyone can rerun the tests and get the same numbers. It should have been broken on purpose in several ways, with before-and-after figures for each fix. Its safeguards should have been attacked, its rollback timed, and real people should have used it.

- The eleven stages that lead there are discovering, defining, designing, building, evaluating, breaking, observing, shipping, measuring, iterating and defending.
- The findings document records failures by class, with the evidence, the fix and what remains. That is more convincing than a demonstration.
- A plain account of what is known, what is not known yet and what would be done next answers the hardest question better than confidence does.
- The evidence pack is what turns a claim into something another person can check.

A shipped product has to pay for itself. The next chapter turns to who pays, and how much.

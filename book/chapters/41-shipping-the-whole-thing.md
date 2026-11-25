---
title: Shipping the Whole Thing
summary: In December Anaya stands before the people who doubted her idea. Think of it as an oral exam at school. She tells them what she built, what broke, who used it, what it costs and what she does not know. The eleven stages she followed are the year she has just lived. You meet SDKs, findings documents, failure classes and evidence packs.
course: ch21cap b8
goals:
  - name the eleven stages of a project, from discovery to defence
  - write a findings document sorted by failure class, with the proof, the fix and what is left
  - say what a developer kit is, and what it takes to ship one, not only build it
  - say what you know, what you do not know and what you would do next, and put together an evidence pack
terms:
  - SDK | software development kit: like a toolbox you hand to another builder. It is a small library (ready-made code) plus a demo, so they can add your feature to their own product without building it | developer kit
  - findings document | like a mechanic's repair log. It plainly lists what broke, the proof, the root cause, the fix, and what was left unsolved on purpose. It is the opposite of a brochure | findings documents
  - failure class | like a type of fault, not one single fault. Ten tests then mean something, and not ten stories | failure classes
  - evidence pack | like a box of receipts. It holds what lets someone else check your claims, so they need not just trust you | 
---

On the second Friday of December, Anaya stood up in the big room on the second floor. Nine people sat in front of her. She held a clicker she did not need. She said she would first tell them what she thought she knew. Then she would tell them what she did not.

Both founders were at the table. So was Lakshmi Iyer, the finance director. Farah Sheikh sat there with two of her agents. A technical lead from one of the lending partners had also come. He wanted to see whether the thing was real.

Imran Qureshi sat in the corner with his arms folded. They had agreed it beforehand. His job was to be the hardest person in the room. A retired teacher in Bengaluru and a cat were on the speakerphone. Anaya had asked for them to be there.

Anaya had two versions of the talk. One ran five minutes, for the people who would decide. The other ran twenty, for the people who would doubt. She would give the short one first. If they let her, she would give the long one.

## The case: the defence

Think of an oral exam at school. The teacher asks questions, and you must answer in your own words. This talk was like that. It put the whole year in front of people who had reason to disagree. The chapter follows the talk. The stages Anaya describes are the shape of the whole project.

## The eleven stages

Anaya had not seen the shape of her work until she said it aloud. It was the shape of the year. Think of a train journey with eleven stops. The table shows each stop, and what it meant for the guard. These are the eleven stages of the capstone chapter (the final project) in the course app. The project page there groups the same work into thirteen.

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

No stop was a separate trip. Together they made one journey. The last test of the journey was not whether she could build something. It was whether she could explain what she had built, and stand behind it.

## What broke

Anaya said she would start with the part that mattered most. That part was what had gone wrong. A portfolio (a showcase of your work) is easier to believe when its owner can say what broke.

The tool for this is a *findings document*. Think of a mechanic's repair log. It is a plain record of what failed. It lists the proof, the root cause (the real reason it failed), the fix, and what was left unsolved on purpose. It is the opposite of a brochure.

Her table did not list every failure. There had been dozens. It listed *failure classes*. A class is a kind of failure, like a type of fault in a machine. It is not one single fault. That is why ten tests mean something, and not ten stories. Read the table row by row. Each row gives the class, what happened, what stops it now, and what is left.

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

The technical lead from the partner spoke first. He saw that she had put the failures and the fixes in one table. She said it was the only honest way. He said most people give him the other table.

## Who used it

For the middle of the talk, Anaya had prepared nothing clever. She thought the evidence would speak for itself.

The product that went out was a developer kit. The team had agreed on 20 November to offer it. It was a small library (ready-made code) and a demo page. On the page, a developer pastes a message and watches the guard clean it.

Such a kit is called an *SDK*. Think of a toolbox you hand to another builder. It lets another team add the feature to their own product, without building it. Her kit sat at a steady web address, on a machine that was not hers. It had monitoring (a watch on how it runs), a privacy notice and a button for reporting problems.

Before it went live, Imran did what she had insisted on. He put out a harmless change. Then he rolled it back (put the old version back) and timed it with a stopwatch. It took four minutes and ten seconds. A rollback nobody has tried, she told the room, is only a plan.

Seven developers from four companies had used the kit. She had watched five of them in person. Three got it working in under an hour. One stopped at the sign-in screen. He wrote "I'd have left here". She had put that note on the wall.

For the last four weeks, the support team in Pune had run the guard on every chat. Lakshmi's sweep (her regular check of sample chats) had held between eight and eleven in five hundred.

The finance director said seven developers at four companies was not many. Anaya agreed. It was a start. It was enough to say that real people had used it. It was not enough to say it would work at a bigger size.

## What she does not know

Think of a map with blank patches. A good map-maker marks them. Anaya did the same.

The cost figures sat in a spreadsheet, which she showed quickly. They gave the cost of cleaning one message. Retries and review time were counted. There was a low, a base and a high volume. At the highest, ten times the festival load, the margin held. She had checked.

Then she did what she had promised at the start. She put up a slide with three columns. The first was what is known. The second was what is not known yet. The third was what she would do next.

Table: What is known, what is not, and what next
| What we know | What we don't know yet | What we would do next |
| --- | --- | --- |
| It finds ninety-three in a hundred of the details on a hand-marked key of 231 rows | How it behaves in Tamil, Bengali, Telugu, Marathi or Gujarati | Two more languages, measured on the same terms |
| It leaves nine in five hundred unhidden where it used to leave forty-six | Whether it works on customers' writing outside the two cities | A customer outside Pune |
| What it costs | What a leak actually costs the company | A figure for the cost of a leak, from Lakshmi's records |

She thought it was the only slide that day nobody would want to argue with.

## The hardest question

At the twenty-minute point, Imran unfolded his arms. He asked why the room should believe the guard works beyond the Pune and Nashik teams. It worked on messages the company had collected. The people who used the kit were her friends. Why was she not fooling herself?

She had expected this question. She had practised the answer on trains since October. She said she was not claiming it worked beyond them. She was saying she knew how she would find out.

Think of the teacher's answer key. It is written before the test, so nobody can bend it to fit the answers. Her answer key was written before she saw the results. Lakshmi ran the sweeps, and Lakshmi did not work for her. The developers were people she had never met. One of them had said he would have left.

Everything she had said about what the guard finds was measured on messages the team wrote itself. She would not use a real customer's message for a test. That was the edge of what she knew. She said it aloud so that someone could push on it.

Nobody spoke. Then Meenakshi's voice came thinly from the speaker. Behind it was a clatter, probably the cat. It was a very good answer, she said. She wanted it noted that she had not helped. The founders laughed. Lakshmi did not, but she wrote something down.

## What the pack is for

Afterwards, in the corridor, the partner's technical lead asked a question. What could he look at, to check her claims himself? She had spent a week putting that together. It is called an *evidence pack*. Think of a box of receipts. It holds what lets someone else check, so they need not just trust.

The box held the repository (the online folder that remembers every change), the specification, the answer key and its history, and the results of the gate. It also held the risk register, the findings, the dashboard and the cost model. And it held the decision log (the diary of choices) that began on the night of the fourteenth of March. Its first line was still at the top: nothing counts until someone else could check it.

She said you are done when anyone can rerun the work and get the same numbers. He nodded slowly. He said he would like to see the answer key. She smiled. She had hoped to hear that request for nine months.

## The page from March

That night Anaya opened the page of scores from the fourteenth of March. Think of an old school report card. Three marks were still in her handwriting. Finding problems had a 2. Choosing which to solve had a 1. Understanding the technology had a crossed-out figure below 1.

She scored all seven areas again on the same scale. Beside each score she wrote one line of evidence. This followed her own rule: nothing counts until someone else could check it.

Table: The seven areas, scored again
| Area | Score | Evidence someone else can check |
| --- | --- | --- |
| Finding real problems | 3 | Five interviews, a count of 37 in 400, and monthly sweeps run by Lakshmi |
| Choosing which problems to solve | 2 | The Won't list, and a reversal written with its evidence |
| Understanding the technology | 3 | The findings document, with its failure classes and what is left |
| Turning a decision into something others can build | 3 | A specification whose numbers Imran's gate tested |
| Measuring results | 3 | The answer key of 231 rows, with its history |
| Paying for itself | 2 | The cost model, and a price for one customer who had not yet signed |
| Getting people to move together | 2 | Lakshmi's sweeps and Farah's team, but no one outside the company |

The technology score had moved the most, from below 1 to 3. The document she could name was the one in the table. The two 2s were where she had the least to show.

## Summary

Think of a bridge before it opens. Engineers test it and load it. Then they let people walk across. A system is ready to be defended in the same way. It runs somewhere that is not the builder's machine. Anyone can rerun the tests and get the same numbers. It has been broken on purpose in several ways, with before-and-after figures for each fix. Its safeguards have been attacked. Its rollback has been timed. Real people have used it.

- The eleven stages that lead there are discovering, defining, designing, building, evaluating, breaking, observing, shipping, measuring, iterating and defending.
- The findings document lists failures by class, with the evidence, the fix and what is left. That convinces more than a demo.
- A plain account of what is known, what is not known yet and what comes next answers the hardest question better than confidence does.
- The evidence pack turns a claim into something another person can check.

A shipped product has to pay for itself. The next chapter looks at who pays, and how much.

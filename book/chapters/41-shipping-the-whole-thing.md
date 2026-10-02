---
title: Shipping the Whole Thing
summary: In December, Anaya stands in front of the people who doubted the idea and tells them what she built, what broke, who used it, what it costs, and what she does not know. The eleven stages she followed are the year she has just lived, with names.
course: ch21cap b8
terms:
  - SDK | software development kit: a small library plus a demo that another developer can add to their own product without building the feature themselves | developer kit
  - findings document | a rough, factual record of what broke, the evidence, the root cause, the fix, and what was deliberately left unsolved; the opposite of a brochure | findings documents
  - failure class | a kind of failure and not a single instance of one; it is what makes ten tests meaningful instead of ten anecdotes | failure classes
  - evidence pack | the set of artifacts that lets somebody else check your claims instead of trusting them | 
---

On the second Friday in December, in the large room on the second floor, Anaya Deshmukh stood up with a clicker she did not need and said, "I am going to tell you what I think I know, and then I am going to tell you what I do not."

There were nine people at the table. Both founders. Lakshmi, with the glass of water. The finance director, with the fountain pen. Farah and two of her agents. A technical lead from one of the lending partners, who had come to see whether the thing was real. Imran, in the corner, with his arms folded, whose job, by prior agreement, was to be the hardest person in the room. And on the speakerphone in the middle of the table, brought in at Anaya's request, a retired teacher in Bengaluru and a cat.

She had two versions of the talk. One lasted five minutes, for people who would decide. One lasted twenty, for people who would doubt. She would give the first and then, if she was allowed, the second.

## The eleven stages

The thing she had built had a shape that she had not seen until she described it, and it turned out to be the same shape as the year.

She had *discovered* a problem with users she could reach, five interviews and a count. She had *defined* it, with a specification whose numbers could be tested. She had *designed* the product and the system together, so that each constrained the other. She had *built* a thin slice that worked end to end, and had written the threat model next to it, not afterwards. She had *evaluated* it, with an answer key that now held two hundred and thirty-one rows. She had *broken* it, on purpose, in ten ways. She had made it *observable*, so that anyone could ask what happened on a Tuesday and be told. She had *shipped* it to real people. She had *measured* what it cost and what it saved. She had *iterated* once, against the lowest-scoring row. And now she was *defending* it.

None of these was a separate project. Together they were one journey, and the final test of it, said the document she had worked from, was not whether she could build something but whether she could explain and defend what she had built.

## What broke

"I will start with the part that matters most," she told the room. "I will start with what went wrong."

A portfolio is more credible when its owner can say what broke. A *findings document* is the form it takes: a rough, factual record of what failed, the evidence, the root cause, the fix, and what was deliberately left unsolved. It is the opposite of a brochure. She put the table on the screen. It listed not the failures, of which there had been dozens, but their *classes*. A class is a kind of failure, not an instance of one, and it is what makes ten tests meaningful and not ten anecdotes.

| Failure class | What happened | What stops it now | What is left |
| --- | --- | --- | --- |
| A question with no answer | Search returned the nearest card as if it were evidence | Evidence required; a clear "I don't know" and a route to a person | Questions that look answerable |
| A poisoned document | A message told the finder to print the customer database | Finder has no tools; output checked against a fixed form | Attacks nobody has thought of |
| A stale permission or version | The chatbot quoted last year's late fee | Version and audience filters before search | A label entered wrongly |
| An unauthorised request | A customer asked for another's order | Customer taken from the session, not the model | A stolen session |
| Mixed-language input | Names with *ji*, Devanagari digits, spoken numbers | Worked examples, number tidying, 231 rows | Five languages not covered |
| Poor scans and sound | A letter O read as a zero; a transcription error | Look-alike correction; whole-image fallback | A very poor photograph |
| A model swapped | Provider retired a model; a new phone format appeared | Pinned versions; gate rerun; safe mode | A silent provider change |
| A traffic spike | Festival volume ten times normal | Queue for the careful judge; safe mode | A spike twenty times normal |
| A dependency changed | A field renamed; every order number hidden for two hours | Detect broken contracts and stop | Unknown unknowns |
| A well-meant edit | An instruction softened on a Friday night | The release gate | A gate with a gap |

The technical lead from the partner was the first to speak. "You've written the failures into the same table as the fixes," he said.

"It's the only honest way to do it."

"Most people give me the other table."

## Who used it

For the middle of the talk she had prepared nothing clever, because she suspected the evidence would carry it.

The product that had gone out was the developer kit: a small library, and a demo page where a developer pastes a message and watches the guard clean it. A developer kit like this, an *SDK*, lets another team add the feature to their own product without building it. It was at a stable address, on a machine that was not hers. It had monitoring and a privacy notice and a button for reporting problems. And before it went live, Imran had done what she insisted on: deployed a harmless change, rolled it back, and timed it with a stopwatch. Four minutes and ten seconds. A rollback you have never tried, she told them, is only a plan.

Seven developers from four companies had used it, and she had watched five of them in person. Three had got it working in under an hour. One had stopped at the sign-in screen and written *I'd have left here*, which she had put on the wall. In the last four weeks the support team in Pune had run it on every chat, and Lakshmi's sweep had held at between eight and eleven in five hundred.

"Seven developers, four companies," said the finance director. "Not many."

"No. It's a start. Enough to say that I've seen real people use it. Not enough to say it will scale."

## What it costs, and what she does not know

The numbers were in a spreadsheet and she showed it quickly. Cost per message cleaned, with the retries and the review time counted in, at a low, a base and a high volume. At the highest, ten times festival load, the margin held. She had checked.

Then she did what she had told the room at the start she would do. She put up a slide with three columns. *What we know. What we don't know yet. What we would do next.*

*We know it finds ninety-three in a hundred of the details on a hand-marked key of 231 rows. We know it hides nine in five hundred where it used to hide forty-six. We know what it costs.*

*We don't know how it behaves in Tamil, Bengali, Telugu, Marathi or Gujarati. We don't know whether it works on customers' writing outside our two cities. We don't know what a leak actually costs us.*

*Next: two more languages, measured on the same terms. A customer outside Pune. A number for the cost of a leak, from Lakshmi's records.*

It was, she thought, the only slide of the day that no one would want to argue with.

## The hardest question

At the twenty-minute point, Imran unfolded his arms.

"Why should we believe this works beyond your Pune and Nashik teams?" he said. "You've told me it works on messages we collected. The people who use the kit are your friends. Why are you not fooling yourself?"

It was the question she had been expecting, and she had been rehearsing the answer on trains since October.

"I'm not saying it works beyond them," she said. "I'm saying I know how I would find out. The answer key was written before we saw the results. The sweeps were run by Lakshmi, who does not work for me. The developers were people I'd never met, and one of them said he would have left. And everything I've said about what it finds is measured on messages we wrote ourselves, because I won't use a real customer's for a test. That is the limit of what I know. I've said it out loud so someone can push on it."

Nobody spoke for a moment. Then Meenakshi's voice came up from the speaker, thinly, with a clatter behind it that was probably the cat.

"That is a very good answer," she said, "and I should like it noted that I did not help."

The founders laughed. Lakshmi did not, but she wrote something down.

## What the pack is for

Afterwards, in the corridor, the technical lead asked what he could look at to check her claims for himself.

She had spent a week assembling it. The *evidence pack* is the set of things that lets someone else check, rather than trust: the repository, the specification, the answer key and its history, the results of the gate, the risk register, the findings, the dashboard, the cost model, the decision log that had begun on the night of the fourteenth of March, with its first line written at the top. *Nothing counts until someone else could check it.*

"You're done when anyone can rerun it and get the same numbers," she said. "That's the whole test."

He nodded slowly. "I'd like to see the answer key."

She smiled. It was a request she had been hoping to hear for nine months.

## What to carry forward

A system is ready to be defended when it runs somewhere that is not the builder's machine, anyone can rerun the tests and get the same numbers, it has been broken on purpose in several ways, its fixes have before-and-after figures, its safeguards have been attacked, its rollback has been timed, and real people have used it. The eleven stages that lead there are discovering, defining, designing, building, evaluating, breaking, observing, shipping, measuring, iterating and defending. The findings document records failures by class, with the evidence, the fix and what remains, which is more convincing than a demonstration. A plain account of what you know, what you do not know yet and what you would do next answers the hardest question better than confidence. And the evidence pack is what turns a claim into something another person can check.

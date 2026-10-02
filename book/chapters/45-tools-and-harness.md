---
title: The Tools and the Harness
summary: A new engineer asks which tool is for what, and an old engineer answers with a drawing of slots and not a list of brands. Then the same engineer is given a weekly report to build twice, once with fixed steps and once with an agent, and the two are measured against the same twenty weeks.
course: b4 b5
terms:
  - toolchain | the set of tools a team uses to build and run a product, thought of as slots to be filled, each with a job to do | tool chain
  - claim audit | taking ten claims from an AI-written summary and checking each against its source, marking each supported, partly supported or unsupported | 
  - harness | everything around the model that makes it a product: the code that builds its context, runs its tools, keeps state, enforces rules, checks quality and records what happened | harnesses
  - project memory | a plain file kept with the code, holding the rules and habits of the project, loaded at the start of every run of a coding assistant | 
  - allowlist | a list of the only things a system is permitted to do; anything not on it is refused | allowlists
  - verifier | a check, such as a test, that tells an agent whether its own change worked, without a person reading every line | verifiers
  - sub-agent | a helper given one part of a large task, which works in its own separate context so that the main one stays small | sub-agents
  - state machine | a workflow in which your code fixes every step and every allowed move from one step to the next | state machines
  - feature flag | a switch in the running system that turns a change on for some users and off for others, without a new release | feature flags
  - rollback trigger | a measurable condition, written down beforehand, that obliges someone to undo a release | rollback triggers
  - incident review | a short written account, made after something goes wrong, of what happened, why, and which check would have caught it | post-incident review
---

Tanvi Kulkarni joined Imran's team on a Monday in March, and by Wednesday she had a question she was embarrassed to ask.

She asked it in the end at the whiteboard, in the voice of someone confessing. "There are about seventeen tools in the team channel. Everybody mentions them as if I already know. Which ones do I need to learn?"

Imran capped his pen and put it down. It was the first time Anaya had seen him look pleased by a question.

"None of them," he said. "Not yet. Learn the slots."

## Slots, not brands

He drew a column of boxes. In each he wrote not the name of a product but a verb phrase, and Tanvi, copying them into a notebook, saw that most of the names she had been worried about had vanished.

An AI product, said Imran, needs about eleven things done for it, from the first idea to the last complaint. Something to *reason and draft* over the text you give it. Something to *answer only from sources you upload*, with citations you can check. Something to *turn a description into a working screen*, quickly enough that a user can try it. Something to *read your code, edit files and run commands* while a person watches. Something to *connect a trigger, a call, a check and an approval* into a process that runs the same way every time. Something to *send an exact request and save the answer* as a repeatable test. Somewhere to *keep every version of the code and review each change*. Something to *deploy on every push and roll back in minutes*. A database with *sign-in, tables and rules about who may see which row*. A way to *record events and draw funnels*. And a way to *follow one request from end to end*, with what it cost and how long it took.

"That is the **toolchain**," he said. "The set of tools that builds and runs the product, but thought of as slots. Each slot has a job, and for each job we have picked one tool, this quarter, because it did the job well enough and our people knew it. Next year the name in the slot may be different. The slot will be there."

"Why not keep the choice open? Use all of them?"

"Because you would learn the interfaces instead of the jobs." He tapped the third box. "Most projects use five or six of these, not eleven. The mistake is to treat each box as a subject to master. It's a place to put a tool. Ask what it must do for you, and what must never go wrong when it does it. Then choose, and learn the job."

Anaya, listening from her desk, thought that it was the same lesson she had been given in her first week about requirements. *Describe the job before you name the tool.* It seemed to be the lesson of the whole profession.

## Two audits

He gave Tanvi two habits to carry between jobs, and the first came from a mistake of Anaya's.

In the previous month, she had uploaded Mr. Menon's security questionnaire, forty pages of it, to a research assistant that answers only from the documents it is given. It had written a tidy summary and attached a source to every sentence. She had been rather proud of it.

Imran asked her to do a **claim audit**. She was to pick ten claims from the summary and check each against the page it cited, marking it *supported*, *partly supported* or *unsupported*. It took her forty minutes. Seven were fine. Two were partly right, in that the page said something similar but narrower. One was unsupported: the summary said that the lender required a particular certificate, and nothing in the document said so.

"One in ten," said Imran. "More than one or two out of ten, and you stop trusting that process for decisions, whichever tool produced it. Fewer, and you may use it, but you have learned what to check by hand."

The second habit he called, plainly, the secrets-and-data audit. For every tool in the stack, write down what it stores and where its keys live. They did it that afternoon, and the list was longer than she liked. The code host held code and no secrets, which he proved by searching the history. The hosting company held the model key and the database key as settings, and kept request logs. The database held accounts and results, with a rule on each table. The analytics tool held events and account numbers and no message text, which Karan had already confirmed. The model provider received the text of every message sent for checking, and so its retention policy was a thing she had read twice.

Then Tanvi, who had been quiet, opened the demonstration page in her browser, pressed a key, and went very still.

"Anaya? The page you had generated in January. There's a long string in the script. It looks like the key."

It was the key. The tool that had turned a description into a screen had put the model provider's secret into code that is sent to every visitor, where anyone with a browser could read it. It also had a database with no rule on who could read what. Imran changed the key within the hour, moved the call behind the server, and wrote both findings in the log. "Prototypes tend to do this," he said. "Check before you share a link."

## What is around the model

On Thursday Imran gave Tanvi her first real task, and he began by taking away the word she was about to use.

"Don't say 'the AI does it.' The model takes in text and gives out text. That's all it does. Everything else that makes a product work is built around it, and that surrounding structure has a name." He drew a ring around the model box. "The **harness**."

A harness, he said, has seven parts, and a person who is debugging a product should be able to find each of them.

| Part | What it does | In the Monday report |
| --- | --- | --- |
| Context | Builds what the model sees on each call | The week's counts, last week's counts, the instructions |
| Tools | Lets the model read or act | Fetch the week's numbers; look up a customer's plan |
| State | Remembers across steps and across weeks | Last week's figures; which customers have been done |
| Orchestration | Decides what runs next | Gather, then draft, then check, then send |
| Policy | Rules the model cannot override | Nothing is sent without approval; no message text in logs |
| Evals | Checks quality before and after a change | Twenty past weeks, with reports a person wrote |
| Observability | Records what happened | A trace per run, with tokens, cost and time |

"Two products can use the same model and behave nothing alike," said Imran. "Because of this. Nearly every quality problem you will ever chase is in this table, not in the model."

The task was the Monday email that Anaya had described in the winter, the one line telling a compliance buyer how many details the guard had hidden. It was to become a proper weekly report, with a count, a trend and a short list of unsure cases.

## How the coding assistants are built

To do it, Tanvi was to use a coding assistant: a program that reads a repository, edits files and runs commands while a person watches. Imran said that it was worth understanding how these are made, because they are the most widely used agents there are and their design is full of patterns that a product could borrow.

There is a loop, a simple one. The model chooses a tool. The harness runs it. The result goes back to the model, and the cycle repeats until the work is done. The tools are few and general: read a file, change a file, search, run a command. A handful of flexible tools turns out to beat dozens of narrow ones. The rules of the project live in a plain file kept with the code, which the assistant reads at the start of every run. This is the **project memory**, and Tanvi's first act was to open it and add a line: *never write message text to a log.*

There are permission modes. Reading is allowed freely. Changing a file, or running a command, can require someone to say yes. And there is the part Imran called the most important. "A **verifier**." A test, a type check, anything that tells the assistant whether its change worked, without a person reading every line. An assistant with a reliable way to check its own work can be given much larger jobs. One without it needs a human at every step, and then you have bought no speed at all.

When a job is large, the work can be divided: a helper, a **sub-agent**, takes one part, works in its own separate context, and returns only the result, so that the main conversation stays small and clear.

"Notice that none of this is about intelligence," said Imran. "It's about the loop, the memory and the check. You can use all of it in the report."

## Where the fences go

The next lesson came from a story in the news that week, of an assistant that ran on someone's own computer with the run of their files, their messages and their shell. It could do almost anything, which made it useful. It could also do almost anything.

Tanvi drew the four questions on the whiteboard as Imran gave them. Which tools may it call? There is an **allowlist**: a list of the only things the system may do, with anything not on it refused. With what scope? Read-only where possible; one folder, one channel, one customer. Which calls need a person's approval? Anything that sends, deletes, pays or cannot be undone. And what can reach it? Any text it reads, such as tickets or email or a web page, may contain orders written by an attacker.

"That last one is the trifecta," said Anaya, who had not forgotten it. Private data, text from outsiders, and a way to send. For every combination of tools, she said, remove at least one of the three.

"And start narrow," Imran added. "Widen only on evidence you chose in advance. 'It has been fine for a month' is not evidence. 'It was right on all forty approvals and the log shows nothing blocked' is."

## One report, built twice

Tanvi's task had a catch, which was Imran's favourite kind. She was to build the report twice.

The first was a **state machine**: a workflow in which her code fixed every step and every permitted move from one to the next. Gather the numbers. Ask the model to draft. Check the draft against the numbers. Send it for approval. If the check failed, try once more, then stop and say so.

The second was a bounded agent. It was given a list of tools, a budget of steps, and the task, and the model chose what to do.

They ran both on the same twenty past weeks, for which a person had already written the report. The results went on a card.

| Measure | State machine | Bounded agent |
| --- | --- | --- |
| Weeks with a correct report | 19 of 20 | 17 of 20 |
| Median time | 40 seconds | 75 seconds |
| Finding the cause of a failure | Minutes: the failing step is in the log | Much longer: read the whole trace |
| An unusual week | Needs a code change | Often adapts on its own |

"For a fixed process, a weekly report, the machine with fixed steps wins," said Imran. "It's more accurate, faster, and it fails in a place you can see. The agent earns its keep when the steps really do vary from case to case. Where would that be here?"

Tanvi thought. "Looking into why one customer's count suddenly doubled."

"Yes. Use the agent for that. And keep it in a corner with a short budget."

## Letting it out

The last part of the task was the one that frightened her.

A report that goes to customers has a release gate, said Imran, and he gave her the list. The ordinary tests pass. The twenty weeks score at or above the line, with nothing new failing in the safety cases. Cost and time per run are within budget. The change goes first to one account in ten, behind a **feature flag**, a switch in the running system that turns a change on for some and off for others without a new release. And the *rollback trigger* and the owner of an incident are written down.

A **rollback trigger** is a condition, written beforehand and measurable, that obliges someone to undo the release. Tanvi wrote hers: *roll back if the share of reports a customer marks as useful falls more than ten points below last week, or if any report goes to the wrong recipient.* The person who decides was the engineer on call. He did not need anyone's permission. The method was to switch the flag, and the time it would take was under five minutes. They tested it once before launch, with a stopwatch.

They also wrote how the system should respond to each kind of failure.

| Response | When | Example |
| --- | --- | --- |
| Retry | A temporary error | A timeout; a rate limit |
| Degrade | One part is down but the rest works | Send the report without the trend chart |
| Escalate | The output cannot be trusted | The draft fails its check twice |
| Stop | An irreversible action looks wrong | A report would go to five hundred people instead of five |

On the last line Imran stopped her pen. "That's the one that matters. If the machine is about to do something it can't take back, and it looks wrong, it stops. A delayed report is an annoyance. A report to the wrong five hundred is a letter from a lawyer."

And if something did go wrong, he said, someone would write an **incident review** within two days: a page saying what happened, why, and which check would have caught it. Not who was to blame. Which check.

Tanvi finished it on a Friday. The first report went to a single account, behind the flag, at four in the afternoon, and Imran walked past her desk three times without saying anything. It arrived. It was right. She switched the flag back off, and on again, to prove that she could.

## What to carry forward

An AI product needs about eleven jobs done for it, and the useful way to think of the tools is as slots to fill, choosing one tool per job by what it must do and what must never go wrong, and learning the job rather than the brand. Two audits belong to every stack: check ten claims from any AI summary against their sources, and write down for every tool what it stores and where its keys live. The model is one part of a product; the rest, the harness, has seven parts, namely context, tools, state, orchestration, policy, evals and observability, and most quality problems live there. Coding assistants run a simple loop, use a few general tools, keep project rules in a file, ask permission for risky acts and rely above all on a verifier. Tool access should be an allowlist, narrow in scope, with approval for anything that cannot be undone, and widened only on evidence chosen beforehand. For a fixed process a state machine usually beats an agent, and the choice should be measured on the same cases. And a change goes out behind a gate and a flag, with a rollback trigger, a named owner and a plan for each kind of failure.

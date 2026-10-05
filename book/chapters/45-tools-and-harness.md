---
title: The Tools and the Harness
summary: A new engineer asks which tool is for what, and an experienced one answers with a drawing of slots and not a list of brands. The same engineer then builds a weekly report twice, once with fixed steps and once with an agent, and the two are measured on the same twenty weeks. The chapter introduces toolchains, claim audits, the harness, project memory, allowlists, verifiers, sub-agents, state machines, feature flags, rollback triggers and incident reviews.
course: b4 b5
goals:
  - think of tools as slots to be filled by job, and run a claim audit and a secrets-and-data audit
  - name the seven parts of a harness and find a quality problem in the right part
  - describe how coding assistants are built, and set an allowlist with scope and approvals
  - compare a state machine with a bounded agent on the same cases, and release a change behind a gate, a flag and a rollback trigger
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

Tanvi Kulkarni joined Imran Qureshi's team on a Monday in March, and by Wednesday she had a question that she was embarrassed to ask. At the whiteboard, in the voice of someone confessing, she said that there were about seventeen tools in the team channel and that everybody mentioned them as if she already knew them. She asked which ones she needed to learn. Imran capped his pen and put it down, and looked pleased by a question for the first time that Anaya had seen. "None of them," he said. "Not yet. Learn the slots."

This chapter follows Tanvi's first month. It begins with a way of thinking about tools and ends with a weekly report that went to customers, and between the two it introduces the structure around a model that makes it a product.

## The case: seventeen tools in a channel

The names that worried Tanvi would change within a year. What would not change was the set of jobs that the names were hired to do. Imran's answer was to teach the jobs first.

## Slots, not brands

Imran drew a column of boxes. In each he wrote not the name of a product but a verb phrase, and Tanvi, copying them into a notebook, saw that most of the names she had been worried about had vanished. An AI product, he said, needs about eleven things done for it, from the first idea to the last complaint.

Table: Eleven jobs, and what each must do
| Job | What it must do |
| --- | --- |
| Reason and draft | Work over the text you give it |
| Answer from sources | Answer only from sources you upload, with citations you can check |
| Make a screen | Turn a description into a working screen quickly enough for a user to try |
| Edit code | Read your code, edit files and run commands while a person watches |
| Connect a process | Join a trigger, a call, a check and an approval into a process that runs the same way every time |
| Test a request | Send an exact request and save the answer as a repeatable test |
| Keep versions | Keep every version of the code and review each change |
| Deploy | Deploy on every push and roll back in minutes |
| Store data | A database with sign-in, tables and rules about who may see which row |
| Record events | Record events and draw funnels |
| Follow a request | Follow one request from end to end, with what it cost and how long it took |

The set of tools that builds and runs the product, thought of as slots in this way, is the *toolchain*. Each slot has a job, and for each job the team had picked one tool that quarter because it did the job well enough and the team knew it. Next year the name in the slot might differ. The slot would still be there.

Tanvi asked why not keep the choice open and use them all. Imran answered that she would then learn the interfaces and not the jobs. Most projects use five or six of the eleven. The mistake is to treat each box as a subject to master. A box is a place to put a tool. The questions are what it must do and what must never go wrong when it does it, and then the tool is chosen and the job is learned. Anaya, listening from her desk, recognised the lesson she had been given in her first week about requirements: describe the job before naming the tool.

## Two audits

Imran gave Tanvi two habits to carry from job to job. The first came from a mistake of Anaya's.

The previous month Anaya had uploaded Mr. Menon's security questionnaire, forty pages, to a research assistant that answers only from the documents it is given. It had written a tidy summary and attached a source to every sentence, and she had been rather proud of it. Imran asked her to carry out a *claim audit*: pick ten claims from the summary, check each against the page it cited, and mark it supported, partly supported or unsupported. It took forty minutes. Seven claims were supported. Two were partly supported, in that the page said something similar but narrower. One was unsupported: the summary said that the lender required a particular certificate, and nothing in the document said so.

::: key One in ten is the limit
More than one or two unsupported claims in ten, and a process should no longer be trusted for decisions, whichever tool produced it. Fewer, and it may be used, and the team has learned what to check by hand.
:::

The second habit was the secrets-and-data audit: for every tool in the stack, write down what it stores and where its keys live. The list that afternoon was longer than Anaya liked.

Table: The secrets-and-data audit
| Tool | What it holds |
| --- | --- |
| Code host | Code and no secrets, which Imran proved by searching the history |
| Hosting company | The model key and the database key as settings, and request logs |
| Database | Accounts and results, with a rule on each table |
| Analytics tool | Events and account numbers and no message text, which Karan had already confirmed |
| Model provider | The text of every message sent for checking, so its retention policy mattered, and Anaya had read it twice |

Then Tanvi, who had been quiet, opened the demonstration page in her browser, pressed a key and went very still. In the script on the page she saw a long string that looked like a key, and it was the key. The tool that had turned a description into a screen in January had put the model provider's secret into code that is sent to every visitor, where anyone with a browser could read it. It had also created a database with no rule on who could read what. Imran changed the key within the hour, moved the call behind the server and wrote both findings in the log. Prototypes tend to do this, he said, and one should check before sharing a link.

## What is around the model

On Thursday Imran gave Tanvi her first real task, and began by taking away a phrase she was about to use: "the AI does it". The model takes in text and gives out text, he said, and that is all it does. Everything else that makes a product work is built around it, and the surrounding structure is the *harness*. A harness has seven parts, and a person debugging a product should be able to find each.

Table: The seven parts of a harness, with the Monday report as the example
| Part | What it does | In the Monday report |
| --- | --- | --- |
| Context | Builds what the model sees on each call | The week's counts, last week's counts, the instructions |
| Tools | Lets the model read or act | Fetch the week's numbers; look up a customer's plan |
| State | Remembers across steps and across weeks | Last week's figures; which customers have been done |
| Orchestration | Decides what runs next | Gather, then draft, then check, then send |
| Policy | Rules the model cannot override | Nothing is sent without approval; no message text in logs |
| Evals | Checks quality before and after a change | Twenty past weeks, with reports a person wrote |
| Observability | Records what happened | A trace per run, with tokens, cost and time |

Two products can use the same model and behave nothing alike, Imran said, because of this table. Nearly every quality problem one chases is in the table and not in the model.

The task was the Monday email that Anaya had described in the winter, the one line telling a compliance buyer how many details the guard had hidden. It was to become a proper weekly report with a count, a trend and a short list of unsure cases.

## How coding assistants are built

To do the work Tanvi was to use a coding assistant, a program that reads a repository, edits files and runs commands while a person watches. Imran said it was worth understanding how these are made, because they are the most widely used agents and their design contains patterns that a product can borrow.

At the centre is a simple loop. The model chooses a tool, the harness runs it, the result goes back to the model, and the cycle repeats until the work is done. The tools are few and general: read a file, change a file, search, run a command. A handful of flexible tools turns out to beat dozens of narrow ones. The rules of the project live in a plain file kept with the code, which the assistant reads at the start of every run. This is the *project memory*, and Tanvi's first act was to open it and add a line: never write message text to a log.

There are permission modes. Reading is allowed freely, and changing a file or running a command can require someone to say yes. Imran called the most important part the verifier. A *verifier* is a check, such as a test or a type check, that tells the assistant whether its change worked without a person reading every line. An assistant with a reliable way to check its own work can be given much larger jobs. One without it needs a human at every step, and then no speed has been bought.

When a job is large the work can be divided. A *sub-agent* takes one part, works in its own separate context and returns only the result, so that the main conversation stays small and clear. None of this, Imran said, is about intelligence. It is about the loop, the memory and the check, and all of it could be used in the report.

## Where the fences go

The next lesson came from a story in the news that week, of an assistant that ran on someone's own computer with the run of their files, their messages and their shell. It could do almost anything, which made it useful, and it could also do almost anything. Tanvi drew four questions on the whiteboard as Imran gave them.

Table: Four questions about a tool's reach
| Question | The control |
| --- | --- |
| Which tools may it call? | An *allowlist*: a list of the only things the system may do, with anything not on it refused |
| With what scope? | Read-only where possible; one folder, one channel, one customer |
| Which calls need a person's approval? | Anything that sends, deletes, pays or cannot be undone |
| What can reach it? | Any text it reads, such as tickets, email or a web page, may contain orders written by an attacker |

Anaya recognised the last question as the trifecta of Chapter 24: private data, text from outsiders and a way to send. For every combination of tools, she said, at least one of the three must be removed. Imran added that the team should start narrow and widen only on evidence chosen in advance. "It has been fine for a month" is not evidence. "It was right on all forty approvals and the log shows nothing blocked" is.

## One report, built twice

Tanvi's task had a catch, which was of the kind that Imran liked best. She was to build the report twice.

The first version was a *state machine*, a workflow in which her code fixed every step and every permitted move from one to the next. It gathered the numbers, asked the model to draft, checked the draft against the numbers and sent it for approval. If the check failed it tried once more and then stopped and said so. The second version was a bounded agent. It was given a list of tools, a budget of steps and the task, and the model chose what to do.

They ran both on the same twenty past weeks, for which a person had already written the report.

Table: The state machine and the bounded agent on twenty weeks
| Measure | State machine | Bounded agent |
| --- | --- | --- |
| Weeks with a correct report | 19 of 20 | 17 of 20 |
| Median time | 40 seconds | 75 seconds |
| Finding the cause of a failure | Minutes: the failing step is in the log | Much longer: the whole trace must be read |
| An unusual week | Needs a code change | Often adapts on its own |

For a fixed process such as a weekly report, Imran said, the machine with fixed steps wins. It is more accurate, faster and fails in a place that can be seen. The agent earns its keep when the steps really do vary from case to case. He asked where that would be here, and Tanvi suggested looking into why one customer's count suddenly doubled. He agreed, and said to use the agent for that, in a corner, with a short budget.

## Letting it out

The last part of the task frightened her. A report that goes to customers needs a release gate, and Imran gave her the list.

- The ordinary tests pass.
- The twenty weeks score at or above the line, with nothing new failing in the safety cases.
- Cost and time per run are within budget.
- The change goes first to one account in ten, behind a *feature flag*, a switch in the running system that turns a change on for some users and off for others without a new release.
- A rollback trigger and the owner of an incident are written down.

A *rollback trigger* is a condition, written beforehand and measurable, that obliges someone to undo the release. Tanvi wrote hers: roll back if the share of reports that a customer marks as useful falls more than ten points below last week, or if any report goes to the wrong recipient. The person who decides was the engineer on call, who needed nobody's permission. The method was to switch the flag, and it would take under five minutes. They tested it once before launch with a stopwatch.

They also wrote how the system should respond to each kind of failure.

Table: Responses to failure
| Response | When | Example |
| --- | --- | --- |
| Retry | A temporary error | A timeout; a rate limit |
| Degrade | One part is down but the rest works | Send the report without the trend chart |
| Escalate | The output cannot be trusted | The draft fails its check twice |
| Stop | An irreversible action looks wrong | A report would go to five hundred people instead of five |

Imran stopped her pen at the last row. If the machine is about to do something that it cannot take back, and the action looks wrong, it stops. A delayed report is an annoyance, and a report sent to the wrong five hundred is a letter from a lawyer. If something did go wrong, someone would write an *incident review* within two days: a page saying what happened, why, and which check would have caught it. It names a check and not a person to blame.

Tanvi finished on a Friday. The first report went to a single account, behind the flag, at four in the afternoon, and Imran walked past her desk three times without saying anything. It arrived and it was right. She switched the flag off, and then on again, to prove that she could.

## Summary

An AI product needs about eleven jobs done for it, and the useful way to think of tools is as slots to fill, choosing one tool per job by what it must do and what must never go wrong.

- Two audits belong to every stack: check ten claims from any AI summary against their sources, and write down for every tool what it stores and where its keys live.
- The model is one part of a product. The rest, the harness, has seven parts: context, tools, state, orchestration, policy, evals and observability. Most quality problems live there.
- Coding assistants run a simple loop, use a few general tools, keep project rules in a file, ask permission for risky acts and rely above all on a verifier.
- Tool access should be an allowlist, narrow in scope, with approval for anything that cannot be undone, and widened only on evidence chosen beforehand.
- For a fixed process a state machine usually beats an agent, and the choice should be measured on the same cases. A change goes out behind a gate and a flag, with a rollback trigger, a named owner and a plan for each kind of failure.

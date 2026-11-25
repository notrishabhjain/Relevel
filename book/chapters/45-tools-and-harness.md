---
title: The Tools and the Harness
summary: A new engineer asks which tool is for what. A senior engineer answers with a drawing of empty slots, not a list of brands. Then the new engineer builds a weekly report twice, once with fixed steps and once with an agent, and the two are scored on the same twenty weeks. The chapter teaches toolchains, claim audits, the harness, project memory, allowlists, verifiers, sub-agents, state machines, feature flags, rollback triggers and incident reviews.
course: b4 b5
goals:
  - see tools as slots to fill by job, and run a claim audit and a secrets-and-data audit
  - name the seven parts of a harness and find a quality problem in the right part
  - say how coding assistants are built, and set an allowlist with scope and approvals
  - compare a state machine with a bounded agent on the same cases, and release a change behind a gate, a flag and a rollback trigger
terms:
  - toolchain | the toolbox slots of a team: the set of tools used to build and run a product, each slot holding one tool for one job | tool chain
  - claim audit | spot-checking an AI summary: pick ten claims, check each against its source, and mark it supported, partly supported or unsupported | 
  - harness | the saddle and reins around a horse: everything around the model that makes it a product, meaning the code that builds its context, runs its tools, keeps state, enforces rules, checks quality and records what happened | harnesses
  - project memory | a note pinned to the project wall: a plain file kept with the code, holding the project's rules and habits, read at the start of every run of a coding assistant | 
  - allowlist | the guest list at a wedding gate: the only things a system may do; anything not on it is refused | allowlists
  - verifier | the answer key for a coder: a check, such as a test, that tells an agent whether its own change worked, so a person need not read every line | verifiers
  - sub-agent | a helper given one part of a big job, who works at a separate desk so the main desk stays tidy | sub-agents
  - state machine | a board game with fixed squares: your code fixes every step and every allowed move from one step to the next | state machines
  - feature flag | a light switch in the running system: it turns a change on for some users and off for others, without a new release | feature flags
  - rollback trigger | a fire alarm set in advance: a measurable condition, written down beforehand, that makes someone undo a release | rollback triggers
  - incident review | a short note written after something goes wrong: what happened, why, and which check would have caught it | post-incident review
---

Tanvi Kulkarni joined Imran Qureshi's team on a Monday in March. By Wednesday she had a question she was shy to ask. She stood at the whiteboard and spoke like someone confessing. There were about seventeen tools in the team channel, she said. Everybody named them as if she already knew them. Which ones must she learn?

Imran capped his pen and put it down. For the first time Anaya had seen, he looked pleased by a question. "None of them," he said. "Not yet. Learn the slots."

This chapter follows Tanvi's first month. It starts with a way to think about tools. It ends with a weekly report that went to customers. In between, it explains the structure around a model that turns it into a product.

## The case: seventeen tools in a channel

The names that worried Tanvi would change within a year. The jobs they were hired for would not. Think of a toolbox with labelled slots: hammer, saw, tape. The brand of the hammer changes. The slot stays. So Imran taught the jobs first.

## Slots, not brands

Imran drew a column of boxes. In each he wrote a verb phrase, not a product name. Tanvi copied them into a notebook. Most of the names she feared had vanished. An AI product, he said, needs about eleven jobs done, from the first idea to the last complaint.

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

This way of seeing tools gives you a *toolchain*. It is the set of tools that builds and runs the product. Each slot has a job. For each job the team had picked one tool that quarter, because it did the job well and the team knew it. Next year the name in the slot might differ. The slot would still be there.

Tanvi asked why they did not keep every choice open and use them all. Imran said she would then learn buttons, not jobs. Most projects use five or six of the eleven.

The mistake is to treat each box as a subject to master. A box is only a place to put a tool. Ask what the job must do and what must never go wrong. Then choose the tool, and learn the job.

Anaya listened from her desk. She remembered a lesson from her first week, about requirements. Describe the job before you name the tool.

## Two audits

Imran gave Tanvi two habits to carry from job to job. The first came from a mistake of Anaya's.

The month before, Anaya had uploaded Mr. Menon's security questionnaire, forty pages long. She gave it to a research assistant that answers only from the documents it is given. It wrote a tidy summary and put a source beside every sentence. She was rather proud of it.

Imran asked her to run a *claim audit*. It is like a teacher spot-checking a few answers. Pick ten claims from the summary. Check each one against the page it cites. Mark it supported, partly supported or unsupported.

It took forty minutes. Seven claims were supported. Two were partly supported, because the page said something similar but narrower. One was unsupported. The summary said the lender required a certain certificate. Nothing in the document said so.

::: key One in ten is the limit
Say more than one or two claims in ten are unsupported. Then stop trusting that process for decisions, whichever tool made it. Say fewer are. Then you may use it, and the team has learned what to check by hand.
:::

The second habit was the secrets-and-data audit. Think of a list of every cupboard in the house and what sits inside it. For every tool in the stack, write down what it stores and where its keys live. The list that afternoon was longer than Anaya liked.

Table: The secrets-and-data audit
| Tool | What it holds |
| --- | --- |
| Code host | Code and no secrets, which Imran proved by searching the history |
| Hosting company | The model key and the database key as settings, and request logs |
| Database | Accounts and results, with a rule on each table |
| Analytics tool | Events and account numbers and no message text, which Karan had already confirmed |
| Model provider | The text of every message sent for checking, so its retention policy mattered, and Anaya had read it twice |

Then Tanvi, who had been quiet, opened the demonstration page in her browser. She pressed a key and went very still. In the script on the page she saw a long string that looked like a key. It was the key.

The tool that turned a description into a screen in January had made a mistake. It had put the model provider's secret into code that goes to every visitor. Anyone with a browser could read it. It had also made a database with no rule on who could read what.

Imran changed the key within the hour. He moved the call behind the server, which is the private back room. He wrote both findings in the log. Prototypes tend to do this, he said, so check before you share a link.

## What is around the model

On Thursday Imran gave Tanvi her first real task. First he took away a phrase she was about to use: "the AI does it". The model takes in text and gives out text, he said. That is all it does. Everything else that makes a product work is built around it.

That surrounding structure is the *harness*. Think of the saddle and reins around a horse. The horse is strong, but the harness makes it useful. A harness has seven parts. A person fixing a product should be able to find each one. The table names them, with the Monday report as the example.

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

Two products can use the same model and act nothing alike, Imran said. The table is the reason. Nearly every quality problem you chase is in the table, not in the model.

The task was the Monday email Anaya had described in the winter. It was one line telling a compliance buyer how many details the guard had hidden. Now it had to become a proper weekly report. It needed a count, a trend and a short list of unsure cases.

## How coding assistants are built

To do the work, Tanvi would use a coding assistant. This is a program that reads a repository (an online folder that remembers every change), edits files and runs commands while a person watches. Imran said it was worth knowing how these are made. They are the most used agents. Their design holds patterns that any product can borrow.

At the centre is a simple loop, like a helper running errands. The model chooses a tool. The harness runs it. The result goes back to the model. The cycle repeats until the work is done. The tools are few and general: read a file, change a file, search, run a command. A handful of flexible tools beats dozens of narrow ones.

The project's rules live in a plain file kept with the code. The assistant reads it at the start of every run. This is the *project memory*. It is like a note pinned to the project wall. Tanvi opened it first and added a line: never write message text to a log.

There are also permission modes. Reading is allowed freely. Changing a file or running a command can need someone to say yes.

Imran called the most important part the verifier. A *verifier* is a check, such as a test or a type check. It tells the assistant if its change worked, so a person need not read every line. It is like the answer key at the back of a maths book. An assistant that can check its own work can take much larger jobs. One that cannot needs a human at every step, and then no speed is gained.

When a job is large, the work can be shared. A *sub-agent* takes one part. It works at its own separate desk (its own context) and hands back only the result. That keeps the main desk small and clear. None of this, Imran said, is about intelligence. It is about the loop, the memory and the check. All of it could be used in the report.

## Where the fences go

The next lesson came from a story in the news that week. An assistant ran on someone's own computer. It had the run of their files, their messages and their shell (the command line). It could do almost anything, and that made it useful. It could do almost anything, and that made it dangerous. Tanvi drew four questions on the whiteboard as Imran gave them. The table shows each question with the control that answers it.

Table: Four questions about a tool's reach
| Question | The control |
| --- | --- |
| Which tools may it call? | An *allowlist*: a list of the only things the system may do, with anything not on it refused |
| With what scope? | Read-only where possible; one folder, one channel, one customer |
| Which calls need a person's approval? | Anything that sends, deletes, pays or cannot be undone |
| What can reach it? | Any text it reads, such as tickets, email or a web page, may contain orders written by an attacker |

Think of an allowlist as the guest list at a wedding gate. If your name is not on it, you do not go in. Anaya knew the last question. It was the trifecta of Chapter 24: private data, text from outsiders and a way to send. For every combination of tools, she said, remove at least one of the three.

Imran added a rule. Start narrow. Widen only on evidence chosen in advance. "It has been fine for a month" is not evidence. "It was right on all forty approvals and the log shows nothing blocked" is.

## One report, built twice

Tanvi's task had a catch, the kind Imran liked best. She was to build the report twice.

The first version was a *state machine*. It is like a board game with fixed squares. Her code fixed every step and every allowed move from one step to the next. It gathered the numbers. It asked the model to draft. It checked the draft against the numbers. Then it sent the draft for approval. If the check failed, it tried once more. Then it stopped and said so.

The second version was a bounded agent. It got a list of tools, a budget of steps and the task. The model chose what to do.

They ran both on the same twenty past weeks. A person had already written the report for each of those weeks.

Table: The state machine and the bounded agent on twenty weeks
| Measure | State machine | Bounded agent |
| --- | --- | --- |
| Weeks with a correct report | 19 of 20 | 17 of 20 |
| Median time | 40 seconds | 75 seconds |
| Finding the cause of a failure | Minutes: the failing step is in the log | Much longer: the whole trace must be read |
| An unusual week | Needs a code change | Often adapts on its own |

A reviewer marks the trace to grade an agent's path as well as its answer. Anaya had done this for the night-queue run, one step to a row. An agent whose steps nobody reads cannot be improved on purpose.

For a fixed process such as a weekly report, Imran said, the machine with fixed steps wins. It is more accurate and faster. It also fails in a place you can see. The agent earns its keep when the steps truly vary from case to case.

He asked where that would be here. Tanvi said: find out why one customer's count suddenly doubled. He agreed. Use the agent for that, in a corner, with a short budget.

## Letting it out

The last part of the task frightened her. A report that goes to customers needs a release gate. It is like a railway signal that stays red until everything is checked. Imran gave her the list.

- The ordinary tests pass.
- The twenty weeks score at or above the line, with nothing new failing in the safety cases.
- Cost and time per run are within budget.
- The change goes first to one account in ten, behind a *feature flag*. That is a light switch in the running system. It turns a change on for some users and off for others, without a new release.
- A rollback trigger and the owner of an incident are written down.

A *rollback trigger* is like a fire alarm set in advance. It is a measurable condition, written beforehand, that makes someone undo the release. Tanvi wrote hers. Roll back if the share of reports that a customer marks as useful falls more than ten points below last week. Roll back if any report goes to the wrong recipient.

The person who decides was the engineer on call, who needed nobody's permission. The method was to switch the flag, and that took under five minutes. They tested it once before launch, with a stopwatch.

They also wrote down how the system should respond to each kind of failure.

Table: Responses to failure
| Response | When | Example |
| --- | --- | --- |
| Retry | A temporary error | A timeout; a rate limit |
| Degrade | One part is down but the rest works | Send the report without the trend chart |
| Escalate | The output cannot be trusted | The draft fails its check twice |
| Stop | An irreversible action looks wrong | A report would go to five hundred people instead of five |

Imran stopped her pen at the last row. The machine may be about to do something it cannot take back. If the action looks wrong, it stops. A late report is an annoyance. A report sent to the wrong five hundred is a letter from a lawyer.

If something did go wrong, someone would write an *incident review* within two days. It is a page saying what happened, why, and which check would have caught it. Think of the note a school writes after a fire drill goes wrong. It names a check, not a person to blame.

Tanvi finished on a Friday. The first report went to a single account, behind the flag, at four in the afternoon. Imran walked past her desk three times and said nothing. It arrived, and it was right. She switched the flag off, then on again, to prove that she could.

## Summary

An AI product needs about eleven jobs done for it. Think of tools as slots to fill. Choose one tool per job by what it must do and what must never go wrong.

- Two audits belong to every stack. Check ten claims from any AI summary against their sources. Write down, for every tool, what it stores and where its keys live.
- The model is one part of a product. The rest is the harness, with seven parts: context, tools, state, orchestration, policy, evals and observability. Most quality problems live there.
- Coding assistants run a simple loop. They use a few general tools and keep project rules in a file. They ask permission for risky acts and rely above all on a verifier.
- Tool access should be an allowlist, narrow in scope. Anything that cannot be undone needs approval. Widen it only on evidence chosen beforehand.
- For a fixed process a state machine usually beats an agent. Measure the choice on the same cases. A change goes out behind a gate and a flag, with a rollback trigger, a named owner and a plan for each kind of failure.

With the tools in place, the team can put the product in front of real people.

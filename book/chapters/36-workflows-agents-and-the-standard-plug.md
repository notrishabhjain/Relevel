---
title: Workflows, Agents and the Standard Plug
summary: A bank teller can look up a balance but cannot send money on a customer's word. Three questions about a support console, how much to let a model decide, how to stop it, and what a standard plug does and does not promise, are settled by crossing things out. The chapter introduces tool contracts, idempotency, fixed workflows, bounded agents and MCP.
course: ch12t ch13a ch14p
goals:
  - write a tool contract, and explain why permissions are enforced by the server and not the model
  - explain idempotency and why a retry is safe only when the action is
  - use the crossing-out test to choose a fixed workflow over an agent, and bound an agent when one is warranted
  - say what MCP promises and what it does not
terms:
  - tool contract | the precise written agreement for one function a model may call: its name, what it does and does not do, its parameters, its errors, its side effects and who is allowed to call it | tool contracts
  - idempotency | the property of an action that can safely be run twice, or is protected so that running it twice has only one effect; it decides whether a retry is safe | idempotent
  - fixed workflow | a sequence of steps decided in advance and written into code, with a model used only for the steps that need judgement | fixed workflows
  - bounded agent | an AI agent given hard limits on steps, time and cost, a state it keeps explicitly, and a "cannot resolve" ending, so that it always stops | bounded agents
  - MCP | Model Context Protocol: a standard for connecting AI applications to tools and data, so that any compliant tool fits any compliant application, like a plug and a socket | Model Context Protocol
---

In the first week of October, with the pilot running, Farah Sheikh made a request that sounded entirely reasonable. She wanted the support console to have an assistant of its own. It would help an agent work faster. It would look up orders. It would show a hidden detail again if the agent had a good reason. If it seemed right, it would send a customer a payment link. All of this would happen by itself, in one smooth step.

Imran Qureshi opened a design review that nobody had asked for with a comparison. A bank teller can look at your balance, he said, and cannot send your money somewhere on your say-so. Tellers are not untrustworthy. Some actions have consequences outside the bank, and the rule is about the action and not the person. He wrote Farah's three requests on the board with a heading in capitals: what may it do, with what data, and who checks?

## The case: an assistant that does everything

The requests combined actions of very different kinds. This chapter sorts them using a written agreement for each function, a test for how much a model should decide, and a check on what a standard connector does and does not guarantee.

## One function, written down

The first thing a machine needs, if it is to do anything real, is a function it may ask for. The second is a written agreement about that function so exact that a stranger could say what it can and cannot do. This is a *tool contract*.

Anaya had met a version of this in the spring, when a vague description made the model choose the wrong function. A contract goes much further.

Table: What a tool contract states
| Element | What it says |
| --- | --- |
| Name and purpose | What the function returns and what it does not |
| Parameters | Set tightly, so that a field with a few legal values accepts only those |
| Errors | Listed in a form a program can read |
| Side effects | What changes as a result of calling it |
| Who may call it | Decided by the server on the logged-in session, not on anything the model says |

The last element was the one Imran spent time on. The model is not the authorisation layer. If the lookup function takes an order number, the server decides whether this agent may see this order, based on the logged-in session. The team had done that in the summer, and the contract simply writes it down.

### What happens if it runs twice

Imran then asked what happens if a call runs twice. Anaya imagined a customer pressing a button while the network faltered: the request reached the server, the reply never came back, and the app tried again. If the action was "show this detail again", the second attempt did no harm. If it was "send a payment link", the customer received two.

An action that can safely be run twice has a name, *idempotency*. Some actions are naturally idempotent. Others are made so by giving each request a unique number, so that the server recognises a repeat and does nothing. A retry is safe only when the action is. Imran added a rule to the contract: every action that changes something says what happens if it is repeated.

## Cross out what a rule can do

Imran then asked which of Farah's three requests should be a model's choice, and set an exercise that took five minutes and shortened the project by a month. Write down every function the assistant might have, and cross out every one that a plain rule would choose correctly more than ninety-five times in a hundred.

Table: The crossing-out exercise
| Function | Judgement needed? | Result |
| --- | --- | --- |
| Look up an order | No: the agent presses a button | Crossed out |
| Show a hidden detail again | No: another button, with a reason typed in a box | Crossed out |
| Send a payment link | No: a person decides, always | Crossed out |

The list that remained was blank. The answer was a *fixed workflow*: the steps are known, so they are fixed in code, and the model does the part that needs judgement and nothing else. Most real products are built this way, and it is safer than letting a model choose its own path, because every step is visible and every failure has a location. A model should be given a tool only if its choice adds value, since each tool adds a new way to be attacked and a new source of delay, cost and breakage.

Fixed workflows usually take a few shapes: a sequence, a router that sends a message down one of several paths, steps run side by side when they do not depend on each other, and a pair in which one step writes and another checks it. The rule for all of them is to use the simplest shape that meets the acceptance criteria.

## The one job that was different

One task in Sahaj did not fit a fixed path, and Anaya had been circling it for a month. Each night the guard left a queue of unsure cases, the few in a hundred it had hidden to be safe. Every morning someone had to decide, one by one, what should have happened, and each case needed a different amount of looking up. A fixed sequence did not suit it.

They let a model handle it, within limits. An AI agent is a loop: decide, act, check, decide again. The loop makes it flexible and dangerous, because most of what goes wrong with such a thing goes wrong at the stopping. A *bounded agent* has its limits written before it starts.

Table: What bounds an agent
| Bound | Detail |
| --- | --- |
| Steps | A maximum number |
| Time | A maximum duration |
| Cost | A ceiling |
| Ending | An explicit result called "cannot resolve", which it must use instead of guessing |
| State | A visible record of the goal, the steps taken, what it has seen and its status, not a growing pile of text it must reread |
| Logging | Why each run ended |

To know that the limits work, said Imran, prove it: build a loop that can never find its answer and watch it stop. He then stated the point that Anaya came to regard as the centre of the chapter.

::: key Mark every action, and require a person for the last kind
Mark every action as read-only, as a write that can be undone, or as a write that cannot be undone. Require a person for the last kind. A person who approves must be approving something exact, and if the payload changes after approval the action must be blocked. Otherwise the approval is a popup and not a control.
:::

For the night queue every action was read-only. The agent proposed, and a person decided in the morning.

Anaya asked whether an agent would still be chosen if nobody had called it that. Imran had run twenty test nights three ways: a single call, a fixed sequence and the bounded agent. On the ordinary nights the sequence did nearly as well as the agent, at a quarter of the cost. The agent did better only on the strange nights, so it would be used for the strange ones. She asked whether a second agent might help. Extra complexity must buy something measurable, Imran said, and no second agent had yet been asked to.

## The plug on the wall

On Thursday the console vendor announced that its product could now be connected to AI assistants through MCP. *MCP*, the Model Context Protocol, is a standard way to connect an AI application to tools and data. As any appliance fits a wall socket that follows the standard, any tool built to the standard fits any application built to it. It has three parts: the application that holds the conversation, a small connector inside it, and a separate program on the other side that offers what it can do, its tools, its documents and its prepared instructions.

Anaya asked what the standard promises. Imran answered that it promises the plug fits. It does not promise that the tool is safe, and it does not decide who may switch it on. He opened the vendor's description of what its connector offered: look up an order, list a customer's payments, issue a refund. "There," he said. "It advertises a refund." Anaya asked whether the agent had permission. That, he said, is the question. Whether a tool is discoverable and whether one is allowed to use it are different matters. The first is the protocol's business, and the second is the company's, to be decided on the server from who is logged in, and not by asking the model.

::: watch A standard interface to an unsafe tool is still an unsafe tool
Whatever comes back through a connector is also text that a stranger could have written. Anaya added this to the list from the summer, beneath the rule about treating every document as untrusted. There is also a protocol for agents talking to agents, with the same shape of problem, using identity and delegation in place of tools. It solves how they talk. It does not solve whether to trust what they say.
:::

By the end of the week the console had no assistant of its own. It had a night queue with a bounded agent that proposed and did not act, and a connector with the refund tool switched off. Anaya said that this was less than Farah had asked for. Imran said it was what she had needed, and that it was easier to build.

## Summary

A tool is a function a model may ask for, and each needs a tool contract that says exactly what it does and does not do, what it accepts, what errors it returns, what changes and who may call it.

- Permissions are enforced by the server, never left to the model. An action that changes something must say what happens if it runs twice, which is idempotency.
- Many features that seem to call for an agent are better as a fixed workflow, with a model used only where words must be understood. A quick test is to cross out every tool that a plain rule would choose correctly nearly all the time.
- When an agent is warranted it should be bounded: limited steps, time and cost, explicit state, and a "cannot resolve" ending, with a person approving anything that cannot be undone.
- MCP is a standard plug. It promises that things fit and says nothing about their safety, and a tool that is discoverable is not thereby authorised.

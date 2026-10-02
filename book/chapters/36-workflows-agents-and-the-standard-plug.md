---
title: Workflows, Agents and the Standard Plug
summary: A bank teller can look up your balance but cannot send your money on your word. Three questions about the support console, how much to let a model decide, how to stop it, and what a standard plug does and does not promise, are settled by crossing things out.
course: ch12t ch13a ch14p
terms:
  - tool contract | the precise written agreement for one function a model may call: its name, what it does and does not do, its parameters, its errors, its side effects and who is allowed to call it | tool contracts
  - idempotency | the property of an action that can safely be run twice, or is protected so that running it twice has only one effect; it decides whether a retry is safe | idempotent
  - fixed workflow | a sequence of steps decided in advance and written into code, with a model used only for the steps that need judgement | fixed workflows
  - bounded agent | an AI agent given hard limits on steps, time and cost, a state it keeps explicitly, and a "cannot resolve" ending, so that it always stops | bounded agents
  - MCP | Model Context Protocol: a standard for connecting AI applications to tools and data, so that any compliant tool fits any compliant application, like a plug and a socket | Model Context Protocol
---

"A bank teller," said Imran, "can look at your balance. A bank teller cannot send your money somewhere on your say-so."

He said it to open a design review that nobody had asked for. It was the first week of October, the pilot was running, and Farah had come to him with a request which, at first hearing, sounded entirely reasonable. She wanted the support console to have an assistant of its own. It would help an agent work faster. It would look up orders. It would show a hidden detail again, if the agent had a good reason. It would, if it seemed right, send a customer a payment link. All of it by itself, in one smooth step.

"The teller can't do that last one alone," Imran went on, "not because tellers are untrustworthy, but because some actions have consequences outside the bank. The rule is about the action, not the person."

He wrote the three things Farah wanted on the board and, beside them, a heading in capitals. *WHAT MAY IT DO, WITH WHAT DATA, AND WHO CHECKS?*

## One function, written down

The first thing a machine needs, if it is to do anything real, is a function it may ask for. The second is a written agreement about that function so exact that a stranger could tell you what it can and cannot do. This is a *tool contract*.

Anaya had met a version of this in the spring, when a vague description made the model pick the wrong function. A contract goes much further. It names the function and says what it returns and what it does not. It sets its parameters tightly, so that a field with a few legal values accepts only those. It lists its errors in a form a program can read. It states its side effects, and who is allowed to call it.

That last item was the one he spent time on. "The model is not the authorisation layer," he said. "If the lookup function takes an order number, the server decides whether *this* agent may see *this* order. It decides on the logged-in session and not on anything the model says. We did that in the summer. The contract just writes it down."

Then he asked a question she had to think about. "What happens if the call runs twice?"

She thought of a customer pressing a button and the network faltering. The request had reached the server, and the reply had never come back. The app tried again. If the action was *show this detail again*, the second attempt did no harm. If it was *send a payment link*, the customer received two.

An action that can safely be run twice has a name, *idempotency*. Some actions are naturally idempotent. Others are made so by giving each request a unique number, so that the server recognises a repeat and does nothing. A retry is only safe when the action is. He wrote a rule for the contract: *every action that changes something says what happens if it is repeated.*

## Cross out what a rule can do

"Now the clever part," said Imran. "Which of Farah's three should be a model's choice?"

He asked her to do an exercise that took five minutes and shortened the project by a month. Write down every function the assistant might have. Then cross out every one where a plain rule would pick correctly more than ninety-five times in a hundred.

The order lookup: the agent presses a button; no judgement needed. Crossed out. Showing a hidden detail again: another button, with a reason typed into a box. Crossed out. Sending a payment link: a person decides, always. Crossed out.

The list that remained was blank.

"That's the answer," said Imran, cheerfully. "A fixed workflow. The steps are known, so we fix them in code. The model does the part that needs judgement and nothing else." It meant a sequence decided in advance, with a model called inside it only where words had to be understood. Most real products are built this way, and it is safer than letting a model choose its own path, because every step is visible and every failure has a location. Give a model a tool only if its choice adds value. Each one adds a new way to be attacked, more delay, more cost and a new way to break.

He listed the shapes that fixed workflows usually take. A sequence, one step after another. A router, which sends a message down one of several paths. Steps run side by side when they do not depend on each other. And a pair in which one step writes and another checks it. The rule for all of them was the same: use the simplest shape that meets the acceptance criteria.

## The one job that was different

There was a task in Sahaj that did not fit a fixed path, and Anaya had been circling it for a month. Each night the guard left a queue of unsure cases, the few in a hundred it had hidden to be safe. Every morning someone had to decide, one by one, what should have happened. It involved a different amount of looking up each time. A fixed sequence did not suit it.

So they let a model handle it, with limits. An *AI agent*, as she had learned, is a loop: decide, act, check, decide again. The loop makes it flexible. It also makes it dangerous, because most of what goes wrong with such a thing goes wrong at the stopping. "The model did not get worse," as Imran put it, "it was given unlimited chances to be wrong."

A *bounded agent* has its limits written down before it starts. A maximum number of steps. A time. A cost ceiling. An explicit ending called *cannot resolve*, which it must use rather than guess. It keeps a visible record of where it is, a state with the goal, the steps taken, what it has seen and its status, not a growing pile of text it must reread. And it logs why each run ended.

Anaya asked how to know the limits worked. Imran said to prove it: build a loop that can never find its answer and watch it stop. Then he said the thing she now thought of as the centre of the whole chapter. "Mark every action as read-only, a write that can be undone, or a write that cannot. Require a person for the last. A person who approves must be approving something exact. If the payload changes after approval, the action must be blocked. Otherwise you have a popup, not a control."

For the night queue, every action was read-only. The agent proposed. A person decided in the morning.

"And would you choose an agent," she said, "if nobody called it that?"

"Good. That's the question to ask. The twenty test nights say so." He had run them three ways: a single call, a fixed sequence and the bounded agent. The sequence did nearly as well as the agent on the ordinary nights, at a quarter of the cost. The agent did better only on the strange ones. "So we use it for the strange ones."

She asked whether a second agent might help. Imran said that extra complexity must buy something measurable, and that no second agent had yet been asked to.

## The plug on the wall

On Thursday the console vendor emailed with an announcement. Its product could now be connected to AI assistants through MCP.

"What is that?" Anaya asked.

"A plug socket," said Imran, who liked metaphors that were not interesting.

*MCP*, the Model Context Protocol, is a standard way to connect an AI application to tools and data. Any appliance fits a wall socket that follows the standard. In the same way, any tool built to it fits any application built to it. There are three parts: the application that holds the conversation, a small connector inside it, and a separate program on the other side that offers what it can do, its tools, its documents and its prepared instructions.

"What does the standard promise?" said Anaya.

"That it fits. It does not promise that it is safe. And it does not decide who may switch it on."

He opened the vendor's description of what its connector offered, and read down. *Look up an order. List a customer's payments. Issue a refund.*

"There," said Imran. "It advertises a refund."

"Does the agent have permission?"

"That's the question, isn't it. Whether a tool is discoverable and whether you are allowed to use it are different things. The first is the protocol's business. The second is ours. And it has to be decided on the server, from who is logged in, not by asking the model nicely." He circled the word *advertised*. "A standard interface to an unsafe tool is still an unsafe tool."

She added to the list from the summer, under the rule about treating every document as untrusted. Whatever comes back through a connector is also text a stranger could have written. There was a protocol, he told her, for agents talking to agents; it had the same shape of problem, with identity and delegation in place of tools. "It solves how they talk. It doesn't solve whether to trust what they say."

By the end of the week, the console had no assistant of its own, and a night queue with a bounded agent that proposed and did not act, and a connector with the refund tool switched off.

"That's less than Farah asked for," said Anaya.

"It's what she needed," said Imran. "She just didn't know it was an easier thing to build."

## What to carry forward

A tool is a function a model may ask for, and each one needs a tool contract. The contract says exactly what the tool does and does not do, what it accepts, what errors it returns, what changes as a result and who may call it. Permissions are enforced by the server and never left to the model. An action that changes something must also say what happens if it runs twice, which is idempotency. Many features that seem to call for an agent are better as a fixed workflow, with a model used only where words must be understood, and a quick way to find out is to cross out every tool a plain rule would choose correctly nearly all the time. When an agent is warranted it should be bounded: limited steps, time and cost, explicit state, and a "cannot resolve" ending, with a person approving anything that cannot be undone. MCP is a standard plug, which promises that things fit and nothing about their safety, and a tool that is discoverable is not thereby authorised.

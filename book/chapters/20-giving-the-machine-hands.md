---
title: Giving the Machine Hands
summary: A twelve-digit order number looks exactly like an Aadhaar number, and the only way to tell them apart is to look it up. Letting a model do the looking teaches the team what a loop is, what one costs, and which of its actions need a human.
course: ch9
terms:
  - tool calling | letting a model ask your program to run a function, by naming the function and its arguments; the program runs it and sends the result back | tool call, tool calls
  - tool description | the few lines of text that tell a model what a function does, what it returns and what it does not; the model chooses a function by reading them, so a vague one is a bug | tool descriptions
  - AI agent | a model, a set of functions it may ask for, a loop, and a rule for when to stop | AI agents
  - step limit | the maximum number of rounds an AI agent may take before it must stop, set by the program and not left to the model | step limits
---

The twelve-digit order number was the thing that would not die.

It had shown up in the sorting test, four times, when the sorter called order numbers Aadhaar numbers and the guard would have hidden them. It had come up again in the list of edge cases. Farah's agents needed to see an order number to do their jobs. Customers typed them all the time. And an order number and an Aadhaar number, to the eye and to any rule, were identical: twelve digits, sometimes in groups of four, with nothing in them to show which was which.

"There's only one way to know," said Imran, on a Tuesday. He looked unusually pleased. "You ask the order system."

## A model that can ask

Until now the model had only done one kind of thing. It read text and wrote text, and a person or a program read what it wrote. What Imran proposed was different. He wanted the model to be able to say: *I am not sure what this number is. Please look it up in the orders table and tell me if it exists.*

It cannot do that itself. A model cannot run anything. It can only ask. The mechanism, which Imran sketched in five steps on a card, is simple enough to say aloud.

You describe the available functions to the model in the request, each with a name, a purpose and the arguments it takes. That description is just more text. The model replies, if it wants one, with a request instead of prose: *call this function with these arguments.* Your own program, not the model, runs the function. You send the result back as another message. The model then either asks for another call or writes its final answer. This goes round until the model stops or you stop it.

Doing this is called *tool calling*. It is the mechanism behind everything that gets described as an AI "taking actions": looking something up, booking a slot, updating a record. It is only text going back and forth, with ordinary code in the middle that does the actual work.

A model, a set of functions it may ask for, a loop, and a rule for when to stop together make an *AI agent*. (Farah's colleagues at the support desk were also called agents, and the word was going to cause confusion in the office for the rest of the year. Anaya settled it at once. Hers were *support agents*. The machine's were *AI agents*. Imran said no one would remember.)

## The words on the label

Imran wrote the first function himself. It took a number and returned whether an order with that number existed, and which customer it belonged to. He gave it a description, one line long, and ran it.

The model asked for the wrong function.

There were two in the box: one that looked up an order, and one that looked up a payment. The description of the first said, in full, *Looks up information about a customer's number.* The model read it, as a model always does, as a plain sentence, and chose the second.

"It reads the label," said Imran. "That is all the selection mechanism there is. No instinct. No intuition. It reads the label, and if the label is vague, it picks the wrong function. That's a writing bug, not a failure of intelligence."

He rewrote it, and read the new one aloud. *Returns whether an order exists with this exact number, and the customer it belongs to. Does not return payment history, amounts, or addresses. For payments, use look_up_payment instead.*

A good description says what the function gives back, what it does not, and when to use another. Naming the similar function inside the description heads off the confusion that most teams find only after launch. It was, Imran said, the most underrated line of code in the system. The *tool description* is code written in English.

## Each round costs more than the last

The loop worked. A message arrived with a twelve-digit number. The finder said it might be an Aadhaar number or an order number. The model asked for a lookup. The program ran it. The answer came back: *an order exists with that number.* The model decided it was an order number, and the guard left it alone.

Then Anaya did what she had learned to do, and asked what it cost.

"A single call is about twelve hundred tokens," said Imran. "But this is more than one call. Every time round the loop, the whole conversation so far is sent again, with the tool's answer added."

He wrote down a run of six steps. Twelve hundred tokens in the first. Fifteen hundred in the second, with the model's request and the answer appended. Eighteen hundred. Twenty-one hundred. Twenty-four. Twenty-seven.

Eleven thousand seven hundred tokens in all.

"Nearly ten times the cost of a single call," said Anaya. "For six steps."

"For six steps, with these numbers. Measure your own. The rule is only that the input grows faster than the number of steps does, because each step carries all the ones before it." He tapped the card. "An agent that does two more steps than you planned can double the bill. How many steps it is allowed to take is a decision, and it has a price."

## Four bad days

The next afternoon Imran broke it on purpose, four ways, so that she could see what such a machine does when things go wrong.

In the first, the order system was slow, and the lookup timed out. The model, told that the lookup had failed, tried again. And again. By the fourteenth try it was cheerfully requesting the same lookup, to no purpose, at growing cost.

In the second, the function returned an error message. The model read it as if it were a result and wrote a confident sentence on the basis of it.

In the third, it called a function that did not exist, which it had invented, with plausible-looking arguments.

In the fourth, two functions undid each other. The model went back and forth between them without end.

"Every one of those is a control problem," said Imran. "The model did not get dumber. It was given unlimited chances to be wrong." He opened a file and added one line near the top. *Maximum five rounds. After that, stop, and say you could not decide.*

That line is the *step limit*, and it is the first thing to set in any loop. The model does not set it and cannot be trusted to; the program must. Teams forget it surprisingly often. A loop without a stopping rule is not an agent. It is a leak.

## Reading and doing

At the end of the week Farah brought a suggestion, and with it the question that would shape the guard for good.

"If it can look up an order," she said, "can it also send the customer a message? Like, 'Please don't share your Aadhaar here'? When it hides a number, it could tell them straight away."

It was a kind idea. Anaya felt the pull of it. A customer who types an identity number should be told, gently, that it is not needed.

Imran was already shaking his head, not at the idea but at the way she'd put it.

"There are two kinds of function," he said. "Ones that read, and ones that do. A function that reads a table is recoverable. At worst, the machine gets bad information, and you try again. A function that sends a message, pays a bill, deletes a row or books a slot cannot be taken back. The message has gone. The customer has seen it."

"So the machine mustn't be allowed to send."

"Whether it may is a product decision. The question is where a human stands in the loop." He drew a line down the middle of the card. "For reading, let it loose, within the step limit. For doing, either a person approves each one, or the action is something so small and so fixed that it cannot go wrong."

They settled it quickly, because the second option was available. The guard would not write to customers at all. A short, fixed notice, written in advance by Farah in all three languages and approved by Lakshmi, would be shown whenever a number was hidden. The machine would decide *when*. Humans had decided *what* it said. Anaya found it a considerably better design than the one she had asked for.

## What to carry forward

A model cannot run anything; it can only ask. In tool calling, the program describes the available functions, the model replies with a request to call one, the program runs it and sends back the result, and this repeats until the model writes a final answer or something stops it. The model chooses among functions by reading their descriptions, so a vague description is a bug. A loop of this kind is an AI agent, and each round sends everything that came before it, so the cost grows faster than the number of steps. Most agent failures are failures of control, not of intelligence, which is why a step limit set by the program is the first thing to write. And functions that only read can be left to run, while functions that act cannot be undone, and a human, or a fixed message written in advance, belongs there.

---
title: Giving the Machine Hands
summary: A twelve-digit order number looks exactly like an Aadhaar number, and the only way to tell them apart is to look it up. This chapter introduces tool calling, tool descriptions, AI agents and step limits, shows how the cost of a loop climbs, and separates actions that read from actions that do.
course: ch9
goals:
  - describe how tool calling works as a loop between a model and a program
  - explain why a tool description is a piece of code written in English
  - work out how the cost of an agent grows with its number of steps
  - say why a step limit is needed and where a human belongs in the loop
terms:
  - tool calling | letting a model ask your program to run a function, by naming the function and its arguments; the program runs it and sends the result back | tool call, tool calls
  - tool description | the few lines of text that tell a model what a function does, what it returns and what it does not; the model picks a function by reading them, so a vague one is a bug | tool descriptions
  - AI agent | a model, a set of functions it may ask for, a loop, and a rule for when to stop | AI agents
  - step limit | the most rounds an AI agent may take before it must stop, set by the program and never left to the model | step limits
---

One twelve-digit order number kept coming back into the team’s work. It showed up in the sorting test, where four order numbers were called Aadhaar numbers and the guard would have hidden them. It showed up again in the list of edge cases. Farah’s agents needed to see order numbers to do their jobs, and customers typed them all the time.

The trouble was that, to the eye and to any rule, an order number and an Aadhaar number looked the same. Both are twelve digits, sometimes in groups of four, and nothing in the digits says which is which.

On a Tuesday, Imran Qureshi said there was only one way to know. You ask the order system. In this chapter you’ll see how a model is allowed to do that, what it costs, and where you have to stop it.

## The case: a number that is either of two things

So far, the model has done one kind of thing. It reads text and writes text, and then a person or a program reads what it wrote. Imran wanted something different. He wanted the model to be able to say, "I’m not sure what this number is," and then ask for a look-up in the orders table.

## A model that can ask

Here is the key fact. A model can’t run anything. It can only ask. Think of a colleague who has no access to the system, so they send you a note: "Please check order 4521 for me." You run the check and send the answer back. The model works the same way, and the arrangement is simple. Imran set it out in five steps on a card.

1. The request describes the available functions to the model. Each has a name, a purpose and the arguments it takes. The description is just more text.
2. If the model wants a function, it replies with a request instead of prose: call this function with these arguments.
3. The program, not the model, runs the function.
4. The program sends the result back as another message.
5. The model either asks for another call or writes its final answer. The loop goes on until the model stops or the program stops it.

::: def Tool calling
Letting a model ask a program to run a function, by naming the function and its arguments. The program runs it and sends the result back. This is the mechanism behind everything described as an AI taking actions, such as looking something up, booking a slot or updating a record. Underneath, it is only text going back and forth, with ordinary code in the middle doing the work.
:::

Put together, a model, a set of functions it may ask for, a loop, and a rule for when to stop make an *AI agent*. The word already meant something at Sahaj, because Farah’s staff were support agents. Anaya settled it at once. Hers were support agents, and the machine’s were AI agents.

## The words on the label

Imran wrote the first function himself. It took a number and returned whether an order with that number existed, and which customer it belonged to. He gave it a one-line description and ran it. The model asked for the wrong function.

There were two in the toolbox: one that looked up an order, and one that looked up a payment. The description of the first said, in full, "Looks up information about a customer’s number." The model read that as a plain sentence and chose the second.

"It reads the label," said Imran. "That is all the selection mechanism there is." If the label is vague, the model picks the wrong function. That is a writing error. It isn’t a failure of intelligence.

Table: A vague and a good tool description
| | Description |
| --- | --- |
| Vague | Looks up information about a customer’s number |
| Good | Returns whether an order exists with this exact number, and the customer it belongs to. Does not return payment history, amounts or addresses. For payments, use look_up_payment instead |

A good *tool description* says what the function returns, what it doesn’t return, and when to use a different one. Naming the similar function inside the description heads off a mix-up that most teams only find after launch. Imran called it the most underrated line of code in the system, because a tool description is code written in English.

## Each round costs more than the last

The loop worked. A message arrived with a twelve-digit number, and the finder said it might be an Aadhaar number or an order number. The model asked for a lookup, and the program ran it. The answer came back: an order exists with that number. The model decided it was an order number, and the guard left it alone.

Then Anaya asked what it cost. A single call is about twelve hundred tokens, said Imran, but this was more than one call. Every time round the loop, the whole conversation so far is sent again, with the tool’s answer added on the end.

Table: The tokens sent in a loop of six steps
| Step | Tokens sent |
| --- | --- |
| 1 | 1,200 |
| 2 | 1,500 |
| 3 | 1,800 |
| 4 | 2,100 |
| 5 | 2,400 |
| 6 | 2,700 |
| Total | 11,700 |

Six steps cost nearly ten times as much as a single call. These figures are Imran’s, and they belong to this example. The general rule is what matters. The input grows faster than the number of steps, because each step carries all the earlier ones with it.

So an agent that takes two more steps than planned can double the bill. The number of steps you allow is a decision, and it has a price.

## Four bad days

The next afternoon, Imran broke the loop on purpose, in four ways. He wanted to show what such a machine does when things go wrong.

Table: Four ways the loop failed
| Failure | What the model did |
| --- | --- |
| The order system was slow and the lookup timed out | It tried again, and again. By the fourteenth try it was still asking for the same lookup, at a growing cost |
| The function returned an error message | It read the error as if it were a result, and wrote a confident sentence from it |
| The model called a function that did not exist | It invented the function, with plausible-looking arguments |
| Two functions undid each other | It went back and forth between them without end |

"Every one of those is a control problem," said Imran. The model hadn’t become less capable. It had simply been given unlimited chances to be wrong. He opened a file and added one line near the top: maximum five rounds, and after that, stop and say that it could not decide.

::: key The first thing to write in a loop
That line is the *step limit*. The model doesn’t set it, and can’t be trusted to, so the program must. Teams forget it surprisingly often. A loop with no stopping rule is not an agent. It is a leak.
:::

## Reading and doing

At the end of the week, Farah made a suggestion. If the model could look up an order, could it also send the customer a message? When the guard hid a number, it could say straight away, "Please don’t share your Aadhaar here." Anaya felt the pull of the idea. A customer who types an identity number should be told, gently, that it isn’t needed.

Imran shook his head. He wasn’t against the idea. He was against how it was put. There are two kinds of function, he said.

Functions that read can be recovered from. At worst, the machine gets bad information and the team tries again. Functions that do, such as sending a message, paying a bill, deleting a row or booking a slot, can’t be taken back. The message has gone, and the customer has seen it.

Table: Functions that read and functions that do
| | Reads | Does |
| --- | --- | --- |
| Examples | Look up an order; read a table | Send a message; pay a bill; delete a row |
| If it goes wrong | The model gets bad information, and you try again | The action has happened and can’t be undone |
| Control | Let it run, within the step limit | A person approves each one, or the action is so small and fixed that it can’t go wrong |

Whether the model may send messages is a product decision. The real question is where a human stands in the loop. The team settled it quickly, because the second option was open to them. The guard wouldn’t write to customers at all. Instead, Farah would write a short fixed notice in advance, in all three languages, and Lakshmi would approve it. It would be shown whenever a number was hidden.

So the machine decides when to show the notice, and humans decided what it says. Anaya found this a much better design than the one she had asked for.

## Summary

A model can’t run anything; it can only ask. In tool calling, the program describes the available functions. The model replies with a request to call one. The program runs it and sends back the result. This repeats until the model writes a final answer or something stops it.

- The model chooses among functions by reading their descriptions, so a vague description is a bug.
- A loop of this kind is an AI agent. Each round sends everything that came before, so the cost grows faster than the number of steps.
- Most agent failures are failures of control and not of intelligence, so a step limit set by the program is the first thing to write.
- Functions that only read can be left to run. Functions that act can’t be undone, and a human, or a fixed message written in advance, belongs there.

Next, you’ll see what happens when you try to fix all this by simply sending the model much more to read.

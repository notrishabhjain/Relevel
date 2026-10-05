---
title: Giving the Machine Hands
summary: A twelve-digit order number looks exactly like an Aadhaar number, and the only way to tell them apart is to look it up. The chapter introduces tool calling, tool descriptions, AI agents and step limits, the rising cost of a loop, and the difference between actions that read and actions that do.
course: ch9
goals:
  - describe how tool calling works as a loop between a model and a program
  - explain why a tool description is a piece of code written in English
  - calculate how the cost of an agent grows with its number of steps
  - say why a step limit is needed and where a human belongs in the loop
terms:
  - tool calling | letting a model ask your program to run a function, by naming the function and its arguments; the program runs it and sends the result back | tool call, tool calls
  - tool description | the few lines of text that tell a model what a function does, what it returns and what it does not; the model chooses a function by reading them, so a vague one is a bug | tool descriptions
  - AI agent | a model, a set of functions it may ask for, a loop, and a rule for when to stop | AI agents
  - step limit | the maximum number of rounds an AI agent may take before it must stop, set by the program and not left to the model | step limits
---

A twelve-digit order number kept returning to the team's work. It had appeared in the sorting test, where four order numbers were called Aadhaar numbers and the guard would have hidden them. It had appeared again in the list of edge cases. Farah's agents needed to see order numbers to do their jobs, and customers typed them constantly. To the eye and to any rule, an order number and an Aadhaar number were identical: twelve digits, sometimes in groups of four, with nothing in them to say which was which.

On a Tuesday Imran Qureshi said there was only one way to know. You ask the order system. This chapter explains how a model is allowed to do that, what the arrangement costs, and where it must be stopped.

## The case: a number that is either of two things

The model had so far done one kind of thing: it read text and wrote text, and a person or a program read what it wrote. Imran proposed something different. He wanted the model to be able to say that it was unsure what a number was and to ask for a look-up in the orders table.

## A model that can ask

A model cannot run anything. It can only ask. The mechanism, which Imran set out in five steps on a card, is simple.

1. The request describes the available functions to the model, each with a name, a purpose and the arguments it takes. The description is more text.
2. If the model wants a function, it replies with a request instead of prose: call this function with these arguments.
3. The program, not the model, runs the function.
4. The program sends the result back as another message.
5. The model either asks for another call or writes its final answer. The loop continues until the model stops or the program stops it.

::: def Tool calling
Letting a model ask a program to run a function, by naming the function and its arguments. The program runs it and sends the result back. It is the mechanism behind everything described as an AI taking actions: looking something up, booking a slot, updating a record. It is only text going back and forth, with ordinary code in the middle doing the work.
:::

A model, a set of functions it may ask for, a loop and a rule for when to stop together make an *AI agent*. The word already had a meaning at Sahaj, since Farah's staff were support agents. Anaya settled the matter at once: hers were support agents and the machine's were AI agents.

## The words on the label

Imran wrote the first function himself. It took a number and returned whether an order with that number existed, and the customer it belonged to. He gave it a one-line description and ran it, and the model asked for the wrong function. There were two in the toolbox, one that looked up an order and one that looked up a payment. The description of the first said, in full, "Looks up information about a customer's number." The model read it as a plain sentence and chose the second.

"It reads the label," said Imran. "That is all the selection mechanism there is." If the label is vague the model picks the wrong function, which is a writing error and not a failure of intelligence.

Table: A vague and a good tool description
| | Description |
| --- | --- |
| Vague | Looks up information about a customer's number |
| Good | Returns whether an order exists with this exact number, and the customer it belongs to. Does not return payment history, amounts or addresses. For payments, use look_up_payment instead |

A good *tool description* says what the function returns, what it does not return, and when to use another. Naming the similar function inside the description heads off a confusion that most teams discover only after launch. Imran called it the most underrated line of code in the system, because a tool description is code written in English.

## Each round costs more than the last

The loop worked. A message arrived with a twelve-digit number, and the finder said it might be an Aadhaar number or an order number. The model asked for a lookup, the program ran it, and the answer came back: an order exists with that number. The model decided that it was an order number, and the guard left it alone.

Anaya then asked what it cost. A single call is about twelve hundred tokens, Imran said, but this was more than one call. Each time round the loop the whole conversation so far is sent again, with the tool's answer added.

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

Six steps cost nearly ten times as much as a single call. The figures are Imran's and belong to this example. The general rule is that the input grows faster than the number of steps, because each step carries all the earlier ones. An agent that takes two more steps than planned can double the bill, so the number of steps allowed is a decision, and it has a price.

## Four bad days

The next afternoon Imran broke the loop on purpose, in four ways, to show what such a machine does when things go wrong.

Table: Four ways the loop failed
| Failure | What the model did |
| --- | --- |
| The order system was slow and the lookup timed out | Tried again, and again, and by the fourteenth try was still requesting the same lookup, at growing cost |
| The function returned an error message | Read the error as a result and wrote a confident sentence from it |
| The model called a function that did not exist | Invented the function, with plausible-looking arguments |
| Two functions undid each other | Went back and forth between them without end |

"Every one of those is a control problem," said Imran. The model did not become less capable. It was given unlimited chances to be wrong. He opened a file and added one line near the top: maximum five rounds, after which stop and say that it could not decide.

::: key The first thing to write in a loop
That line is the *step limit*. The model does not set it and cannot be trusted to, so the program must. Teams forget it surprisingly often. A loop without a stopping rule is not an agent. It is a leak.
:::

## Reading and doing

At the end of the week Farah made a suggestion. If the model could look up an order, could it also send the customer a message? When the guard hid a number it could say at once, "Please don't share your Aadhaar here". Anaya felt the pull of the idea. A customer who types an identity number should be told, gently, that it is not needed.

Imran shook his head, not at the idea but at how it was put. There are two kinds of function. Those that read are recoverable: at worst the machine gets bad information and the team tries again. Those that do, such as sending a message, paying a bill, deleting a row or booking a slot, cannot be taken back. The message has gone and the customer has seen it.

Table: Functions that read and functions that do
| | Reads | Does |
| --- | --- | --- |
| Examples | Look up an order; read a table | Send a message; pay a bill; delete a row |
| If it goes wrong | The model gets bad information; try again | The action has happened and cannot be undone |
| Control | Let it run, within the step limit | A person approves each one, or the action is so small and fixed that it cannot go wrong |

Whether the model may send messages is a product decision, and the question is where a human stands in the loop. The team settled it quickly, because the second option was available. The guard would not write to customers at all. A short fixed notice, written in advance by Farah in all three languages and approved by Lakshmi, would be shown whenever a number was hidden. The machine would decide when to show it. Humans had decided what it said. Anaya found it a considerably better design than the one she had asked for.

## Summary

A model cannot run anything; it can only ask. In tool calling the program describes the available functions, the model replies with a request to call one, the program runs it and sends back the result, and this repeats until the model writes a final answer or something stops it.

- The model chooses among functions by reading their descriptions, so a vague description is a bug.
- A loop of this kind is an AI agent. Each round sends everything that came before, so cost grows faster than the number of steps.
- Most agent failures are failures of control and not of intelligence, so a step limit set by the program is the first thing to write.
- Functions that only read can be left to run. Functions that act cannot be undone, and a human, or a fixed message written in advance, belongs there.

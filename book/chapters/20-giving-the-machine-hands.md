---
title: Giving the Machine Hands
summary: A twelve-digit order number can look like an Aadhaar number. A check-digit rule clears most look-alikes. For the rest, the only way to be sure is to look the number up. You meet tool calling, tool descriptions, AI agents and step limits. You see how a loop's cost climbs, and the difference between actions that read and actions that do.
course: ch9
goals:
  - tell how tool calling works as a loop between a model and a program
  - say why a tool description is a piece of code written in English
  - work out how the cost of an agent grows with its number of steps
  - say why a step limit is needed, and where a person belongs in the loop
terms:
  - tool calling | the model asks a shopkeeper to check the stock. The model names a function and what to give it, and your program runs it and sends back the result | tool call, tool calls
  - tool description | the label on a shop shelf. A few lines that tell the model what a function does, what it gives back and what it does not. The model picks by reading the label, so a vague label is a bug | tool descriptions
  - AI agent | a helper with a list of errands and a curfew: a model, the functions it may ask for, a loop, and a rule for when to stop | AI agents
  - step limit | the curfew. The most rounds an AI agent may take before it must stop. The program sets it, never the model | step limits
---

One twelve-digit order number kept coming back into the team’s work. It showed up in the sorting test. Four order numbers were called Aadhaar numbers, and the guard would have hidden them. It showed up again in the list of edge cases (the rare, odd ones). Farah’s agents needed to see order numbers to do their jobs. Customers typed them all the time.

The trouble was simple. To the eye, an order number and an Aadhaar number look the same. A rule that looks only at shape cannot tell them apart either. Both are twelve digits, sometimes in groups of four. Nothing in the digits says which is which.

One rule narrows it down, at no cost. A real Aadhaar number does not start with 0 or 1. Its last digit is a check digit. It is worked out from the other eleven digits by a fixed sum, called the Verhoeff scheme. The pattern checker can run that sum first. It rules out about nine in ten look-alikes, order numbers included. What is left is the one in ten that passes by chance.

On a Tuesday, Imran Qureshi said there was only one way to know about the numbers that passed. You ask the order system. In this chapter you see how a model is allowed to do that, what it costs, and where you must stop it.

## The case: a number that is either of two things

Until now, the model did one kind of thing. It read text and wrote text. Then a person or a program read what it wrote. Imran wanted something different. He wanted the model to say, "I’m not sure what this number is." Then it would ask for a look-up in the orders table. A table is a grid of saved rows, like a register.

## A model that can ask

Here is the key fact. A model cannot run anything. It can only ask. Think of a colleague who has no access to the system. They send you a note: "Please check order 4521 for me." You run the check and send the answer back. The model works the same way. Imran wrote it as five steps on a card.

1. The request tells the model which functions are on offer. A function is a recipe with a name. Each one has a name, a purpose and the things it takes. These things are called arguments. The description is only more text.
2. If the model wants a function, it replies with a request, not prose. It says: call this function with these arguments.
3. The program runs the function. The model does not.
4. The program sends the result back as another message.
5. The model either asks for another call or writes its final answer. The loop goes on until the model stops or the program stops it. A loop is the same step done again and again.

::: def Tool calling
The model asks a program to run a function. It names the function and the arguments. The program runs it and sends the result back. It is like asking a shopkeeper to check the stock. This is the trick behind every "AI taking actions". Looking something up, booking a slot and updating a record all work this way. Underneath, it is only text going back and forth. Ordinary code in the middle does the work.
:::

Now put the parts together. A model, a set of functions it may ask for, a loop, and a rule for when to stop make an *AI agent*. Think of a helper with a list of errands and a curfew. The word already meant something at Sahaj, because Farah’s staff were support agents. Anaya settled it at once. Hers were support agents. The machine’s were AI agents.

## The words on the label

Imran wrote the first function himself. It took a number. It returned whether an order with that number existed, and which customer it belonged to. He gave it a one-line description and ran it. The model asked for the wrong function.

There were two functions in the toolbox. One looked up an order. One looked up a payment. The description of the first said, in full, "Looks up information about a customer’s number." The model read that as a plain sentence. It chose the second function.

"It reads the label," said Imran. "That is all the picking there is." Think of labels on shop shelves. If the label is vague, the model grabs the wrong tin. That is a writing error. It is not a failure of intelligence.

Table: A vague and a good tool description
| | Description |
| --- | --- |
| Vague | Looks up information about a customer’s number |
| Good | Returns whether an order exists with this exact number, and the customer it belongs to. Does not return payment history, amounts or addresses. For payments, use look_up_payment instead |

A good *tool description* says what the function returns. It says what it does not return. It says when to use a different one. Naming the similar function in the label stops a mix-up. Most teams only find that mix-up after launch. Imran called it the most underrated line of code in the system. A tool description is code written in English.

## Each round costs more than the last

The loop worked. A message arrived with a twelve-digit number. The finder said it might be an Aadhaar number or an order number. The model asked for a lookup, and the program ran it. The answer came back: an order exists with that number. The model decided it was an order number. The guard left it alone.

Then Anaya asked what it cost. A single call is about twelve hundred tokens, said Imran. A token is one Lego brick of text, and you pay per brick. But this was more than one call. Each time round the loop, the whole conversation so far is sent again. The tool’s answer is added on the end. It is like paying for an SMS that gets longer each time you resend it.

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

Six steps cost nearly ten times as much as one call. These figures are Imran’s, for this example. The general rule matters more. The input grows faster than the number of steps. Each step carries all the earlier ones with it.

So an agent that takes two more steps than planned can double the bill. The number of steps you allow is a decision. It has a price.

## Four bad days

The next afternoon, Imran broke the loop on purpose, in four ways. He wanted to show what such a machine does when things go wrong.

Table: Four ways the loop failed
| Failure | What the model did |
| --- | --- |
| The order system was slow and the lookup timed out | It tried again, and again. By the fourteenth try it was still asking for the same lookup, at a growing cost |
| The function returned an error message | It read the error as if it were a result, and wrote a confident sentence from it |
| The model called a function that did not exist | It invented the function, with plausible-looking arguments |
| Two functions undid each other | It went back and forth between them without end |

"Every one of those is a control problem," said Imran. The model had not become less able. It had been given endless chances to be wrong. Think of a helper sent on errands with no curfew. He opened a file and added one line near the top: maximum five rounds. After that, stop and say it could not decide.

::: key The first thing to write in a loop
That line is the *step limit*. It is the curfew. The model does not set it, and cannot be trusted to. So the program must. Teams forget it more often than you would think. A loop with no stopping rule is not an agent. It is a leak, like a tap left running.
:::

## Reading and doing

At the end of the week, Farah made a suggestion. If the model could look up an order, could it also send the customer a message? When the guard hid a number, it could say at once, "Please don’t share your Aadhaar here."

Anaya felt the pull of the idea. A customer who types an identity number should be told, gently, that it is not needed.

Imran shook his head. He was not against the idea. He was against how it was put. There are two kinds of function, he said.

Functions that read can be recovered from. At worst, the machine gets bad information and the team tries again. Functions that do can never be taken back. Sending a message, paying a bill, deleting a row and booking a slot all do. The message has gone. The customer has seen it. It is like the difference between reading a letter and posting one.

Table: Functions that read and functions that do
| | Reads | Does |
| --- | --- | --- |
| Examples | Look up an order; read a table | Send a message; pay a bill; delete a row |
| If it goes wrong | The model gets bad information, and you try again | The action has happened and can’t be undone |
| Control | Let it run, within the step limit | A person approves each one, or the action is so small and fixed that it can’t go wrong |

Whether the model may send messages is a product decision. The real question is where a person stands in the loop. The team settled it fast, because the second choice was open to them. The guard would not write to customers at all. Instead, Farah would write a short fixed notice in advance, in all three languages. Lakshmi would approve it. It would show whenever a number was hidden.

So the machine decides when to show the notice. Humans decide what it says. Anaya found this a much better design than the one she had asked for.

## Summary

A model cannot run anything. It can only ask. In tool calling, the program tells the model which functions are on offer. The model replies with a request to call one. The program runs it and sends back the result. This repeats until the model writes a final answer or something stops it.

- The model picks a function by reading its description. A vague description is a bug.
- A loop like this is an AI agent. Each round sends everything that came before. So the cost grows faster than the number of steps.
- Most agent failures are control failures, not intelligence failures. So a step limit set by the program is the first thing to write.
- Functions that only read can be left to run. Functions that do cannot be undone. A person, or a fixed message written in advance, belongs there.

Next, a vendor’s slide claims the whole library can go with every question. Anaya tests the claim. A vendor is a company that sells you a product.

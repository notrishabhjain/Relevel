---
title: What the Machine Is
summary: A product manager who has said "powered by AI" for two years tries to explain what it means and cannot. We build the answer from the ground up: language models, tokens, the context window, attention, how a model is made and used, and the two kinds of AI.
course: a8 ch05
goals:
  - explain what a language model does, and why it is good at what is likely and not at what is true
  - count text in tokens, and see why the count differs by language and tool
  - describe the context window and what happens to text that does not fit
  - distinguish making a model from using it, and predictive AI from generative AI
terms:
  - language model | a program that has learned, from a vast amount of writing, to predict what text comes next; it is what sits behind a chatbot | model, models, LLM, LLMs, large language model
  - generative AI | AI that produces new content, such as text, images or code, instead of only giving a label or a number | 
  - predictive AI | AI that gives a label or a number for one specific task, such as whether a message is spam | 
  - token | a piece of text, often a whole word and sometimes part of one, which is the unit that models read and that providers charge by | tokens, tokenizer
  - context window | the limit on how much text a model can take in at once, counting both what you send and what it writes back | context windows
  - pre-training | the first and most expensive stage of making a model, in which it learns to predict the next token over a vast amount of text | 
  - instruction tuning | the second stage of making a model, in which it is trained on examples of instructions paired with good answers so that it follows instructions | 
  - weights | the billions of numbers inside a model that hold everything it has learned; training changes them and ordinary use does not | 
  - inference | using a finished model to answer a request; it costs money each time and does not change the model | 
  - transformer | the design that almost all modern language models are built on, whose key part is attention | transformers
  - attention | the part of a transformer that works out, for each token, which other tokens matter most for predicting what comes next | 
---

On the third Sunday of March, Anaya told Dr. Meenakshi Rao something. She had said "it's powered by AI" in meetings for two years, and she'd like to stop until she knew what she meant. Meenakshi laughed, briefly and without unkindness. Then she asked Anaya to say what she thought the phrase meant.

Anaya said it was software that had read the internet, understood questions, and had a sort of brain that was trained. She noticed that each sentence was vaguer than the one before.

"You have described a legend," said Meenakshi. "Let us do the machine."

That is what this chapter does. We start with something you already use, the predictive keyboard on a phone. Then we build up, step by step, the parts of a modern AI system that a product manager needs to understand in order to argue with engineers. You'll see what it is, how it reads, how much it can hold, how it is made, and how it differs from the AI that came before.

## The case: a legend and a machine

The vague account that Anaya gave is very common. It treats the system as a mind. And a mind suggests understanding, knowledge and judgement, none of which is guaranteed.

A more modest account is more useful. It tells you what the system does well and where it will fail, and most of a product's problems start in the failures. The sections below build that account in order.

## A keyboard that read everything

When Anaya types "See you at the" on her phone, the keyboard suggests "office", "station" and "airport". When she types the Roman-letter Hindi "Kal milte", it offers "hain", then "hai", then "hum". The phone doesn't know where she is going tomorrow. It has seen what people type, and it knows which word usually comes next.

Now make that keyboard bigger. Let it read every book, newspaper, forum post and manual it can be given, many times over. Make it vastly larger. And let it guess not one word but thousands in a row, with each guess feeding the next. What you get is called a *language model*.

::: def Language model
A program that has learned, from an enormous amount of writing, to predict what text comes next. It writes an answer by predicting one piece at a time. It doesn't look anything up, and it doesn't know what is true. It knows what is likely.
:::

When most of what the model read was true, the likely and the true overlap closely. Where they come apart is where the difficulties of every product built on a language model begin. Anaya wrote "likely, not true" on the back of an envelope and drew a box around it.

## Tokens: how the machine reads

A model doesn't read letters or whole words. It reads *tokens*. A token is a piece of text, often a whole word and sometimes only part of one. In English, a token is on average about three-quarters of a word. Short common words are usually one token. Rare words break into several, and so does anything written in a script the model saw less often.

Imran Qureshi showed her this on a page that displayed the pieces in colour. He entered the same meaning three ways. The table shows what came back.

Table: One sentence, three spellings, three token counts on one tool
| Version | Text | Tokens |
| --- | --- | --- |
| English | I want to know my loan status. | 8 |
| Roman-letter Hindi | mujhe apne loan ka status jaanna hai. | 12 |
| Devanagari Hindi | the same meaning in Hindi script | 26 |

The sentence means the same thing each time, and yet the machine sees three different amounts of text. These figures belong to one tool on one day. Another tool would give other numbers, so don't carry a rule of thumb away from this table. If someone tells you Hindi costs twice as much as English, ask three questions: which tool, which sentence, and which day? The answer is to measure.

The count matters because providers charge by the token, both for what you send and for what comes back. Let's use a made-up price, chosen to keep the arithmetic easy. Suppose a provider charges three hundred rupees for every million tokens. A chat of six hundred tokens costs about eighteen paise. A chat in Devanagari that comes to fifteen hundred tokens costs forty-five paise.

Neither figure is alarming on its own. But for a company that handles a hundred thousand chats a month, the difference is between a rounding error and a line in the budget.

## The context window

Every request to a model must fit inside a fixed size, and the size is counted in tokens, not sentences. It covers everything: what you send in, any instructions, any documents, and the answer that comes back. This limit is the *context window*.

::: key Everything must be on the table
Whatever the model uses to answer has to fit inside the context window, like papers on a table. If something doesn't fit, the model doesn't see it, and it doesn't tell you. Anaya wrote a second line on the envelope: everything it knows about this conversation must be on the table.
:::

## Attention: how "it" finds "trophy"

Meenakshi asked Anaya what the word "it" meant in this sentence: "The trophy did not fit in the suitcase because it was too big". Anaya said it meant the trophy, because if the suitcase were too big, the trophy would fit.

Meenakshi pointed out what Anaya had just done. She had looked back across the sentence, weighed the candidates, and chosen the one that made sense. Every pronoun she had ever understood depended on that skill.

Modern language models are built on a design called the *transformer*, and its central mechanism is *attention*. For each piece of text, attention works out which other pieces matter most for predicting what comes next. When the model reaches "it", attention is how it connects that word to "trophy" and not to "suitcase".

::: watch A clue, not an explanation
A model has many layers, and each layer has many attention mechanisms. Its answer comes from all of them together. Pictures of attention are sometimes shown as proof of why a model said what it said. That is like showing a brain scan and claiming to know the thought.
:::

## Making a model and using one

People often confuse two different activities, and they have very different costs. One is making the model. The other is using it.

Making happens in stages.

1. In *pre-training*, the model learns to predict the next token across an enormous quantity of writing from the web, books and code. This takes months and costs millions. What comes out can continue any text, but it doesn't reliably do as it is told.
2. In *instruction tuning*, it is trained further on examples of instructions paired with good answers, so that it learns to follow instructions.
3. In the third stage, people compare pairs of answers and pick the better one, and the model is trained to prefer answers like the ones they chose. This is often called learning from human feedback. It makes the model more helpful and more careful.

Table: Making a model compared with using it
| | Making (the three stages) | Using (inference) |
| --- | --- | --- |
| What happens | The model learns | The model answers one request |
| Does it change the weights? | Yes | No |
| Who is affected | Everyone who uses the model, permanently | Only that one answer |
| Cost | Months of effort and millions | A small charge per token, every time |

The table mentions *weights*. These are the billions of numbers inside a model that hold everything it has learned. You can picture them as a vast set of dials, each turned a little by every example the model saw. All three stages of making change the weights.

Using the finished model is called *inference*, and it leaves the weights as they were. When Sahaj's chatbot answers a customer, inference is happening. It is charged by the token, and the model is identical afterwards. What the customer typed shaped that one answer, and then it was gone.

## Two kinds of AI

Some AI predicts a label or a number for one job. Is this message spam? Will this customer cancel? What will sales be next month? This is *predictive AI*. It's trained on labelled examples for a single task, it's cheap to run, and it does that one thing well.

The other kind is *generative AI*. It produces new text, images or code. You can point it at many tasks just by changing what you ask. It costs more to run, and the bill grows with the length of what goes in and what comes out. A language model is generative AI for text.

Not every problem needs the second kind. Imran went down the napkin box by box, and the table shows what he decided.

Table: Which parts of the guard need which kind of machine
| Part | What it needs | Why |
| --- | --- | --- |
| Pattern checker | No AI | A rule for twelve digits is a rule |
| Name-and-place finder | Small predictive AI | Trained to mark each word as a person, a place or neither, and nothing else |
| Context judge | Language model | It must read a sentence and make a judgement, and it will be costly, so it should be asked about as few sentences as possible |
| Rule-keeper | Ordinary code | It applies decisions already made |

Of the four parts, only one wants the large machine. Imran put the rule he took from this into one sentence: use the cheapest thing that works, and keep the expensive thing for the questions only it can answer.

## Summary

A language model is a program that has learned to predict what text comes next. That makes it good at what is likely and unreliable on what is true.

- It reads, and is charged for, tokens. The number of tokens in a sentence depends on the tool and the language, so measure it and don't assume it.
- Everything it uses to answer must fit in the context window. What doesn't fit is invisible to it.
- Attention relates one piece of text to another inside a transformer. It's a clue to the model's behaviour, not an explanation of it.
- Making a model (pre-training, instruction tuning, learning from human feedback) changes its weights for everyone. Using it, which is inference, changes only one answer.
- Predictive AI gives a label or number for one task. Generative AI produces new content across many tasks, at greater cost. So the cheapest tool that works is the right one.

Next, Anaya has her first conversation with a model, and sees all this in action.

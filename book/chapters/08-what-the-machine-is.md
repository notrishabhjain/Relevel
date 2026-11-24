---
title: What the Machine Is
summary: A product manager has said "powered by AI" for two years. She tries to explain it and cannot. We build the answer from the ground up: language models, tokens, the context window, attention, how a model is made and used, and the two kinds of AI.
course: a8 ch05
goals:
  - explain what a language model does, and why it is good at what is likely and not at what is true
  - count text in tokens, and see why the count changes with the language and the tool
  - describe the context window and what happens to text that does not fit
  - tell making a model from using it, and predictive AI from generative AI
terms:
  - language model | a parrot that has read a whole library: a program that learned from a huge amount of writing to guess what text comes next; it sits behind a chatbot | model, models, LLM, LLMs, large language model
  - generative AI | AI that makes new things, such as text, images or code, and does not only give a label or a number | 
  - predictive AI | AI that gives one label or one number for one job, such as whether a message is spam | 
  - token | one Lego brick of text: a piece of text, often a whole word and sometimes part of one; models read in bricks, and providers charge per brick | tokens, tokenizer
  - context window | the model's desk: the limit on how much text fits on it at once, counting what you send and what it writes back | context windows
  - pre-training | school years in a huge library: the first and most costly stage of making a model, where it learns to guess the next token across a vast amount of text | 
  - instruction tuning | coaching with worked examples: the second stage, where the model learns from instructions paired with good answers, so it follows instructions | 
  - weights | the dials inside the model: billions of numbers that hold everything it has learned; training turns them and everyday use does not | 
  - inference | asking the finished model one question: using it to answer a request; it costs money each time and does not change the model | 
  - transformer | the design almost every modern language model is built on; its key part is attention | transformers
  - attention | looking back along the sentence: the part of a transformer that works out which other tokens matter most for guessing what comes next | 
---

On the first Sunday of April, Anaya told Dr. Meenakshi Rao something. For two years she had said "it's powered by AI" in meetings. She wanted to stop until she knew what she meant. Meenakshi laughed, briefly and kindly. Then she asked Anaya what she thought the phrase meant.

Anaya said it was software that had read the internet. It understood questions. It had a sort of brain that was trained. She noticed that each sentence was vaguer than the one before.

"You have described a legend," said Meenakshi. "Let us do the machine."

That is what this chapter does. We start with something you already use: the predictive keyboard on a phone. Then we build up, one step at a time. We cover the parts of a modern AI system that a product manager needs. You need them to talk with engineers on equal terms. You will see what the system is, how it reads, how much it can hold, how it is made, and how it differs from older AI.

## The case: a legend and a machine

Anaya's vague answer is very common. It treats the system as a mind. A mind suggests understanding, knowledge and good judgement. None of these is guaranteed.

A humbler answer is more useful. Think of a manual that says what a machine does well and where it breaks. It tells you where the system will fail. Most of a product's problems start in those failures. The sections below build that answer in order.

## A keyboard that read everything

Think of the keyboard on your phone. Anaya types "See you at the". The keyboard offers "office", "station" and "airport". She types the Roman-letter Hindi "Kal milte". It offers "hain", then "hai", then "hum". The phone does not know where she is going tomorrow. It has seen what people type. It knows which word usually comes next.

Now make that keyboard bigger. Let it read every book, newspaper, forum post and manual it can be given. Let it read them many times over. Make it vastly larger. And let it guess not one word but thousands in a row. Each guess feeds the next one. The result is called a *language model*. It is like a parrot that has read a whole library. It guesses the next word. It sounds sure, even when it is wrong.

::: def Language model
A program that has learned from a huge amount of writing to guess what text comes next. It writes an answer one small piece at a time. It does not look anything up. It does not know what is true. It knows what is likely.
:::

Most of what the model read was true. So the likely and the true often match. Where they come apart, trouble begins. Every product built on a language model has this trouble. Anaya wrote "likely, not true" on the back of an envelope. She drew a box around it.

## Tokens: how the machine reads

A model does not read letters or whole words. It reads *tokens*. Think of one Lego brick of text. A token is a piece of text. Often it is a whole word. Sometimes it is only part of a word. In English, a token is about three-quarters of a word on average. Short, common words are usually one token. Rare words break into several tokens. So does anything written in a script (a writing system) the model saw less often.

Imran Qureshi showed her this on a page that coloured each piece. He typed the same meaning three ways. The table shows what came back.

Table: One sentence, three spellings, three token counts on one tool
| Version | Text | Tokens |
| --- | --- | --- |
| English | I want to know my loan status. | 8 |
| Roman-letter Hindi | mujhe apne loan ka status jaanna hai. | 12 |
| Devanagari Hindi | the same meaning in Hindi script | 26 |

The sentence means the same each time. Yet the machine sees three different amounts of text. These numbers belong to one tool on one day. Another tool would give other numbers. So do not carry a rule of thumb away from this table. Someone may say Hindi costs twice as much as English. Ask three questions. Which tool? Which sentence? Which day? The answer is to measure.

The count matters because providers (the companies that run the model) charge by the token. You pay per brick. They count the bricks you send and the bricks that come back. Let us use a made-up price, chosen to keep the sums easy. Say a provider charges two hundred and fifty rupees for every million tokens. A chat of six hundred tokens costs about fifteen paise. A Devanagari chat of fifteen hundred tokens costs about thirty-eight paise.

Neither figure is scary alone. But think of a company with a hundred thousand chats a month. For them, the gap is the difference between a rounding error and a line in the budget.

## The context window

Think of the model's desk. Only what fits on the desk can be read. Every request to a model must fit inside a fixed size. The size is counted in tokens, not sentences. It covers everything: what you send, any instructions, any documents, and the answer that comes back. This limit is the *context window*.

::: key Everything must be on the desk
Whatever the model uses to answer must fit inside the context window, like papers on a desk. If something does not fit, the model does not see it. It does not tell you. Anaya wrote a second line on the envelope: everything it knows about this conversation must be on the desk.
:::

## Attention: how "it" finds "trophy"

Think of reading a sentence and looking back to find who a word points to. Meenakshi asked Anaya what "it" meant in this sentence: "The trophy did not fit in the suitcase because it was too big". Anaya said "it" meant the trophy. If the suitcase were too big, the trophy would fit.

Meenakshi pointed out what Anaya had just done. She had looked back across the sentence. She had weighed the choices. She had picked the one that made sense. Every pronoun (a word like "it" or "she") she had ever understood depended on that skill.

Modern language models are built on a design called the *transformer*. Its central part is *attention*. For each piece of text, attention works out which other pieces matter most for guessing what comes next. The model reaches "it". Attention is how it links that word to "trophy" and not to "suitcase".

::: watch A clue, not an explanation
A model has many layers (steps stacked one above another). Each layer has many attention parts. The answer comes from all of them together. Pictures of attention are sometimes shown as proof of why a model said what it said. That is like showing a brain scan and claiming to know the thought.
:::

## Making a model and using one

Think of a student. Going to school for years is one thing. Answering one question on one day is another. People often mix up two activities with very different costs. One is making the model. The other is using it.

Making happens in stages.

1. In *pre-training*, the model learns to guess the next token across a huge amount of writing from the web, books and code. This takes months and costs millions. What comes out can continue any text. But it does not reliably do as it is told.
2. In *instruction tuning*, it is trained further on examples of instructions paired with good answers. This teaches it to follow instructions.
3. In the third stage, people look at pairs of answers and pick the better one. The model is trained to prefer answers like the ones they chose. This is often called learning from human feedback. It makes the model more helpful and more careful.

Table: Making a model compared with using it
| | Making (the three stages) | Using (inference) |
| --- | --- | --- |
| What happens | The model learns | The model answers one request |
| Does it change the weights? | Yes | No |
| Who is affected | Everyone who uses the model, permanently | Only that one answer |
| Cost | Months of effort and millions | A small charge per token, every time |

The table mentions *weights*. These are the billions of numbers inside a model. They hold everything it has learned. Think of a vast set of dials. Every example the model saw turned each dial a little. All three stages of making change the weights.

Using the finished model is called *inference*. The weights stay as they were. Sahaj's chatbot answers a customer. That is inference. It is charged by the token. The model is exactly the same afterwards. What the customer typed shaped that one answer. Then it was gone.

## Two kinds of AI

Think of two helpers. One is a sorting clerk who puts each letter into one of two trays. The other is a writer who can draft anything you ask. Some AI gives a label or a number for one job. Is this message spam? Will this customer cancel? What will sales be next month? This is *predictive AI*. It is trained on labelled examples for a single job. It is cheap to run. It does that one job well.

The other kind is *generative AI*. It makes new text, images or code. You can point it at many jobs just by changing what you ask. It costs more to run. The bill grows with the length of what goes in and what comes out. A language model is generative AI for text.

Not every problem needs the second kind. Imran went down the napkin box by box. The table shows what he decided.

Table: Which parts of the guard need which kind of machine
| Part | What it needs | Why |
| --- | --- | --- |
| Pattern checker | No AI | A rule for twelve digits is a rule |
| Name-and-place finder | Small predictive AI | Trained to mark each word as a person, a place or neither, and nothing else |
| Context judge | Language model | It must read a sentence and make a judgement, and it will be costly, so it should be asked about as few sentences as possible |
| Rule-keeper | Ordinary code | It applies decisions already made |

Of the four parts, only one wants the large machine. Imran put his rule in one sentence. Use the cheapest thing that works. Keep the expensive thing for questions only it can answer.

## Summary

Think of the parrot once more. A language model is a program that has learned to guess what text comes next. So it is good at what is likely. It is not reliable on what is true.

- It reads, and is charged for, tokens. The number of tokens in a sentence depends on the tool and the language. So measure it. Do not assume it.
- Everything it uses to answer must fit in the context window. What does not fit is invisible to it.
- Attention links one piece of text to another inside a transformer. It is a clue to how the model behaves. It is not an explanation.
- Making a model (pre-training, instruction tuning, learning from human feedback) changes its weights for everyone. Using it, which is inference, changes only one answer.
- Predictive AI gives a label or number for one job. Generative AI makes new content across many jobs, at greater cost. So the cheapest tool that works is the right one.

Next, Anaya has her first conversation with a model, and sees all this in action.

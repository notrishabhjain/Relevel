---
title: What the Machine Is
summary: On a Sunday call a product manager admits she cannot say what "powered by AI" means, and a retired linguist and an engineer between them build the answer, one plain idea at a time.
course: a8 ch05
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

"I have been saying 'it's powered by AI' in meetings for two years," said Anaya. "I would like to stop doing that until I know what I mean."

It was the third Sunday in March. The cat in Bengaluru was somewhere behind Meenakshi's chair, asleep, and the tea on Anaya's balcony had gone the colour of old brass. There was a long pause on the line, and then Meenakshi laughed, a short dry laugh with no unkindness in it.

"Good," she said. "It took me forty years of teaching to be able to say 'I don't know' to a room. Tell me what you think it is, and I will tell you where you are wrong."

Anaya tried. It was a kind of software that had read the internet. It understood questions. It had some sort of brain, perhaps, which was trained. She heard herself, and each sentence was a little more vague than the last.

"You have described a legend," said Meenakshi, kindly. "Let us do the machine."

## A keyboard that read everything

"Your phone," said Meenakshi. "When you type *See you at the*, what does it suggest?"

Anaya picked up her phone. *Office. Station. Airport.* She tried a Hindi one in English letters: *Kal milte.* The phone offered *hain*, then *hai*, then *hum*.

"It does not know where you are going tomorrow," said Meenakshi. "It has watched what people type, and it knows which word usually comes next. It is guessing, and the guess is good because there is so much data behind it. Now make the keyboard read every book, every newspaper, every forum post and every manual it could be given, many times over, and make it far, far larger. Make it guess not one word but thousands of them in a row, each guess feeding the next. What do you have?"

"A very long autocomplete."

"A *language model*. That is the whole of it, at the bottom: a program that has learned, from an enormous amount of writing, to predict what text comes next. It writes an answer by predicting one piece at a time. It does not look anything up. It does not know what is true. It knows what is likely, and when most of what it read was true, likely and true overlap very well. The places where they do not are where all your trouble will come from."

Anaya wrote *likely, not true* on the back of an envelope and put a box around it.

## Pieces of words

The next morning Imran took her through a demonstration at his desk, with a browser open and a mug of tea he had forgotten.

The model, he said, does not read letters, or even words. It reads *tokens*: pieces of text, often a whole word, sometimes only part of one. In English a token is, on average, about three-quarters of a word. Short common words are usually one token. Rare words, and anything written in a script the model saw less of, break into several.

He typed a sentence into a page that showed the pieces in colours: *I want to know my loan status.* Eight tokens, each a different colour. He typed the same sentence in Roman letters, the way Sanjay Patil would: *mujhe apne loan ka status jaanna hai.* Twelve. Then he pasted the same meaning in Devanagari. The page lit up in a mosaic of small fragments: twenty-six.

"Same meaning," said Anaya.

"Same meaning. Three different amounts of text, as far as the machine is concerned." He sipped. "That is on this tool today. Another tool would give other numbers. I would not carry any rule of thumb away from this. If somebody tells you Hindi costs twice as much, ask them which tool, which sentence, which day, and then measure it yourself."

It mattered for a reason Anaya could feel in her wallet. Everyone who sells access to these machines charges by the token, for what you send and for what comes back. Suppose a provider charged three hundred rupees for every million tokens, which was a made-up price chosen for easy arithmetic. A chat of six hundred tokens would cost about eighteen paise. A chat in Devanagari that came to fifteen hundred would cost forty-five paise. Neither number is frightening. Multiplied by the chats of a company that handled a hundred thousand a month, it is the difference between a rounding error and a line in the budget.

## How much it can hold

"There is a limit too," said Imran, "and it is on tokens, not on sentences."

Each request to a model has to fit inside a fixed size, and the size covers everything: what you send in, any instructions, any documents, and the answer that comes back. That size is the *context window*. Everything the machine uses to answer has to fit inside it, like papers on a table. If something does not fit, the machine does not see it, and it does not say so.

Anaya wrote a second line on the envelope, under the first. *Everything it knows about this conversation must be on the table.* She did not yet understand how much that sentence would matter.

## Why "it" is the trophy

"There is one more idea," said Meenakshi on the next Sunday, "and then you may stop being frightened by the word 'transformer'."

She asked Anaya what the word *it* meant in a sentence: *The trophy did not fit in the suitcase because it was too big.*

"The trophy."

"How did you know?"

"Because if the suitcase were too big, it would fit."

"Exactly. You looked back across the sentence, weighed the candidates, and picked the one that made sense. Every pronoun you have ever understood depended on that skill, and it is the skill the machine had to learn to do any of this well. The design that modern language models are built on is called a *transformer*, and its central trick is called *attention*. For each piece of text it works out which other pieces matter most for guessing what comes next. When the machine reaches *it*, attention is how it connects that word to *trophy* and not to *suitcase*."

Meenakshi was careful about one thing, and she said it twice. Attention is a clue, not an explanation. A model has many layers, each with many of these attention mechanisms, and the final answer comes from all of them together. People sometimes draw pictures of attention and present them as proof of why a machine said what it said. That is a bit like showing a picture of a brain scan and claiming to know the thought.

## Made, and then used

"Two things get confused all the time," said Imran, "and they cost different things. One is making the model. The other is using it."

Making happens in stages. In the first, called *pre-training*, the machine learns to predict the next token across a staggering amount of writing from the web, from books and from code. It takes months and costs millions. What comes out can continue any piece of text, but it does not reliably do as it is told. The second stage, *instruction tuning*, trains it further on examples of instructions paired with good answers, so that it follows instructions. In the third, people compare pairs of answers and pick the better one, and the machine is trained to prefer answers like the ones they chose. That is often called learning from human feedback. It makes the machine more helpful and more careful.

All three stages change its *weights*: the billions of numbers inside the model that hold everything it has learned. Think of them as a vast set of dials, each turned a little by every example it ever saw.

Using the finished machine is a different thing, called *inference*. It does not change the weights at all. When Sahaj's chatbot answers a customer, inference is happening, and it costs money each time by the token, and the machine is exactly the same afterwards. Whatever the customer typed shaped that one answer, and then it was gone.

"Training," said Imran, writing it on the napkin from last week, "changes the model for everyone, for good. A request changes one answer and is forgotten. If I forget which is which, I make expensive mistakes."

## Two kinds of AI, and which boxes need one

There was one last distinction, and it came as a relief, because it gave Anaya back some of the napkin.

Some AI predicts a label or a number for one job. Is this message spam or not? Will this customer cancel? What will sales be next month? This is *predictive AI*: trained on labelled examples for one task, cheap to run, and good at that one thing. The other kind is *generative AI*: it makes new text, images or code, can be pointed at many tasks by changing what you ask, and costs more to run, with a bill that grows with the length of what goes in and comes out. A language model is generative AI for text.

Not every problem needs the second kind. Imran took the napkin and went down it, box by box.

The pattern checker needed no AI at all. A rule for twelve digits is a rule. The name-and-place finder could be a small predictive tool, trained to mark each word as a person, a place, or neither, and to do only that. The context judge was the box that wanted a large language model, because it had to read a sentence and make a judgement, and it would be expensive, which was one more reason to ask it about as few sentences as possible. The rule-keeper was ordinary code.

"So of four boxes," said Anaya, "one needs the big machine."

"One *wants* it. If it can be done by the two cheaper boxes, it should be." He put the pencil down. "A good rule: use the cheapest thing that works, and keep the expensive thing for the questions only it can answer."

## What to carry forward

A language model is a program that has learned from an enormous amount of writing to predict what text comes next, which makes it good at what is likely and not at what is true. It reads and is charged for tokens, which are pieces of words, and the number of tokens a sentence takes depends on the tool and the language, so it should be measured and not assumed. Everything it uses to answer has to fit in its context window. Attention is how it relates one piece of text to another, but it is a clue and not an explanation. Making a model changes it for everyone; using it, which is called inference, changes only one answer. And not every job needs the biggest machine: the cheapest thing that works is the right thing.

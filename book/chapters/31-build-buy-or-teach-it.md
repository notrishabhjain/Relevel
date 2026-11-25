---
title: Build, Buy or Teach It
summary: A vendor offers to sell the team what it spent six months building. A founder suggests training a model of their own. Both ideas sound sensible, and each must pass the same test. The chapter introduces the AI value chain, open-weight models, fine-tuning and lock-in.
course: ch185 ch19
goals:
  - test a vendor's claim by running its product on your own answer key
  - use four questions to decide whether to build or buy, and write down what would reverse the decision
  - name the layers of the AI value chain and say where a product's advantage lies
  - sort failures into four kinds and see why fine-tuning teaches behaviour, not facts
terms:
  - AI value chain | the floors of a building that an AI product stands on: infrastructure, models, tooling and, on top, the apps people use; each floor gets its edge from something different | value chain
  - open-weight model | a recipe published for everyone: you can download the model (its weights) and run it on your own computers, instead of calling someone else's | open-weight models, open-weight
  - fine-tuning | coaching a model on many examples of your own until it picks up a habit; it teaches behaviour, not facts | fine-tune, fine-tuned
  - lock-in | being stuck with one provider because leaving costs too much, in rewriting, remeasuring or lost features | 
---

In the third week of August, a vendor called VaultLeaf sent two people to Sahaj. A vendor is a company that sells you a product. One was a salesman and one was an engineer. Imran Qureshi said that sending two was a good sign. Lakshmi Iyer said it was a worse one.

VaultLeaf sold software that found and hid personal data in text. It sold to banks. Its pitch was polished. There was a console (a control screen) with graphs, and a certificate on a slide. It promised to be running at Sahaj in three weeks, with an accuracy of ninety-nine percent.

Anaya asked what the ninety-nine percent was measured against. The engineer seemed to have hoped for the question. It was measured, he said, against VaultLeaf's own benchmark (its own test). So she asked if Sahaj could run the product against its own.

## The case: the same test for everyone

Think of a shopkeeper who says his scale is accurate. You do not argue. You put a one-kilo weight on it. This is the first thing to do when someone offers to sell you what your team could build. It is also the thing most buyers skip. The talk usually turns on price and the demo. Neither decides the matter. What decides it is measuring the vendor's product the way you would measure your own. Use your answer key, with your kinds of text.

VaultLeaf agreed to run the two hundred and four rows. It did so in a way that showed it did not often do this. A week later the figures came back.

On English identity numbers it was excellent, a little better than the guard. On Hinglish names, the thing the guard was built for, it found sixty-two in a hundred. On Hindi in Devanagari script it did worse. It had no way to handle a number spelled out in words. The salesman was not surprised. He said the company's customers were mostly English-first. Anaya said Sahaj's were not.

The reply held a second answer too, and Lakshmi read it three times. The standard product sent text to VaultLeaf's cloud for processing, in a region outside India. A private deployment (the product installed inside Sahaj's own systems) was available at about three times the price.

## What you are really buying

Imran stayed calm. A vendor is fine, he said, as long as everyone knows what the money is for. You are rarely buying the model, because most vendors use the same models.

You are buying the connectors and the permissions. You are buying the record of who did what, and a support contract. You are buying a person who gets out of bed when it breaks at two in the morning. That last item is usually worth more than the licence. It is also usually left out of the sum. Think of buying a lift. You also pay for the man who comes when it sticks.

He wrote four questions on the board. In his experience, these decide it.

Table: Four questions for build or buy, with Sahaj's answers
| Question | Sahaj's answer |
| --- | --- |
| Is this the thing the product exists to do, or is it plumbing? | Finding personal details in Hinglish is the basis of the whole case, so Sahaj should own it |
| How often will it need to change? | Constantly, because the answer key grows every week and the failures come from real customers |
| Who is awake at two in the morning? | Nobody, as yet. There was no plan, which was worth knowing |
| What happens if the vendor is bought or shuts down? | Nobody at VaultLeaf could say what it would take to leave |

The team then made two-year estimates on one sheet. Buying the private deployment came to about ₹58 lakh. Building and running the guard came to about ₹71 lakh. The gap was small enough to argue either way, so the sum did not settle it. Imran's rule did. Buy the plumbing. Build the part that makes the product different.

The plan was to build the finder, the answer key and the scoreboard. They would rent only the ordinary items. These were hosting for the models in an Indian region, and an off-the-shelf console for the logs. Before signing anything, Anaya wrote down what she had learned to write.

::: example A decision with a date
I would switch to buying if VaultLeaf reaches ninety on Hinglish names on our key, or if upkeep falls on one person for more than a fifth of their time. I would switch to building more if the price rises at the next tier. Review on 1 December.
:::

A decision with a date on it, she found, is far easier to reverse than one without.

## What sits under the product

On the walk back, Anaya asked Imran a question she had carried since March. Were they competing with the people who make the big models? He stopped in front of the sweet shop. Then he drew the answer on the back of an invoice, with a pen borrowed from the owner.

Think of a building with floors. Each floor stands on the one below. AI products are built in layers like that. The whole stack is called the **AI value chain**. Each layer gets its edge from something different.

Table: The layers of the AI value chain
| Layer | What it is | Where its advantage comes from |
| --- | --- | --- |
| Infrastructure | Computers, chips and the cloud | Scale and money |
| Models | Some owned by companies that sell access, some released openly | Scale and money |
| Tooling | Stores for the maps of meaning, instruments for testing and tracking | Scale and money, and ease of use |
| Applications | What people actually use | The workflow, the data and the trust |

Most teams, Imran said, live on the top floor. There the model is not the edge. Competitors can call the same one through the same door. What is hard to copy is how deeply the product sits inside someone's daily work. Data that nobody else has is hard to copy too.

Anaya gave the corrections as an example. Each time one of Farah's agents presses "the guard hid something I needed", the team learns something no competitor knows. But this holds only if the data is unique, makes the product better, and is hard to get. A data edge that fails any of those three is only a story.

Some models are open for anyone to take. An **open-weight model** has its weights published. Weights are the numbers inside the model that hold what it learned. Think of a recipe published for everyone. You can download it and run it on your own computers, instead of calling someone else's. These models usually trail the best closed ones a little. In return, you get more control over where data goes and what it costs. You pay for that in hosting and upkeep.

For a company that promised never to let a customer's sentence leave the building, the choice was easy. It also answered the question in the margin of Anaya's spec. The careful judge would be an open-weight model, running on Sahaj's own servers.

Then Imran added a word that had carried a lot of weight in the vendor's office. **Lock-in** means being stuck with one provider because leaving costs too much. The cost may be rewriting, remeasuring or lost features. Think of a phone plan that makes you lose your number if you leave. The cure lies in the answer key. If your test set does not depend on any vendor, switching takes days.

## Teach it

On Monday the founder, Mr. Bhatia, stopped Anaya in the corridor. He had read something on a plane. Why not train the company's own model on Hinglish? Everyone was doing it, and it would be Sahaj's own.

Every team gets asked this. It usually comes in a planning meeting, and usually before anyone has said what is wrong. Saying yes commits a whole quarter (three months). Saying no sounds unambitious. Anaya promised an answer by Friday.

The idea is called **fine-tuning**. Think of coaching a cricket player with many practice balls until a good habit sticks. You take a model that already exists and train it more on examples of your own. It sounds like the obvious road to a model that knows the company's world.

Anaya had the one thing that makes the question answerable. It was the list of thirty-one failures from June, with their counts. She sorted each one into one of four kinds. There are four because each kind points to a different cure. Think of sorting complaints into piles.

Table: Four kinds of failure and their cures
| Kind of failure | What it means | Sahaj's count and cure |
| --- | --- | --- |
| The machine does not know | The answer is missing, out of date or invented | None of the thirty-one. The order numbers were an evidence problem, solved by the lookup |
| It knows but behaves wrongly | The content is right but the format or rule is off | The eight names with "ji" after them: the machine had not been shown the convention, and a worked example fixed most of them in an afternoon. The half-hidden addresses were also format |
| It cannot work it out | Several steps, or real ambiguity | The numbers broken across lines, which belonged to the cutting rule and not to the machine |
| It is right but too costly | The answer is correct and the price is wrong | Not yet a problem |

Her answer to Mr. Bhatia on Friday was this. Fine-tuning teaches behaviour, not facts. If the complaint were that the model did not know Sahaj's policy, fine-tuning would be the wrong tool. But Sahaj's complaints were about behaviour. And the team had not yet tried the cheap cures. The first two could be undone in hours.

She also listed the costs that proposals leave out. Someone must create the examples and keep them current. A test set is needed first, or no one can tell if the tuning helped. It must never be the same as the examples the model learned from.

The tuning must be redone each time the base model is retired. And the gain lives inside one provider's system, not in the instructions and the index. That is a form of lock-in.

Mr. Bhatia asked if the answer was no. It was "not yet", she said, and she gave the order. First the instructions, then the evidence, then a smaller model, then fine-tuning. If the names with "ji" still failed after the first three, the team would teach the model. And it would know, because it had a key.

The smaller model was the option she had barely thought about. Imran thought it the most likely to matter. A cheaper, faster, narrower model running in-house often settles the money side of a feature. That is true when volume is high and the job is narrow. Finding names in short messages was exactly such a job.

## Summary

Think of the one-kilo weight again. When someone offers to sell what your team could build, neither the price nor the demo decides it. Measuring the vendor's product on your own answer key does. So do four questions. Is it the core of what the product does? How often must it change? Who is awake when it breaks? What would it take to leave?

- A good answer is often to buy the plumbing and build the part that makes the product different. Write down, with a date, the reasons that would reverse the decision.
- At the top of the AI value chain the model is rarely the edge. Unique data, workflow and trust are.
- An open-weight model can run on the company's own machines. Lock-in is a cost to be measured.
- When a model falls short, there are four kinds of failure to tell apart. Fine-tuning teaches behaviour, not facts. It comes after instructions, evidence and a smaller model, and it needs a separate test set.

Next, Farah asks the question that decides whether a tool gets used. What should she tell her team about the tenth answer?

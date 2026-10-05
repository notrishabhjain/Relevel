---
title: Build, Buy or Teach It
summary: A vendor offers to sell the team what it has spent six months building, and a founder proposes training a model of their own. Both proposals sound sensible, and each has to pass the same test. The chapter introduces the AI value chain, open-weight models, fine-tuning and lock-in.
course: ch185 ch19
goals:
  - test a vendor's claim by running its product on your own answer key
  - use four questions to decide whether to build or buy, and write the conditions that would reverse the decision
  - describe the layers of the AI value chain and say where a product's advantage lies
  - sort failures into four kinds and explain why fine-tuning teaches behaviour and not facts
terms:
  - AI value chain | the layers an AI product is built on: infrastructure, models, tooling and, on top, the applications that people use; each layer gets its advantage from something different | value chain
  - open-weight model | a model whose weights are published, so you can download it and run it on your own computers instead of calling someone else's | open-weight models, open-weight
  - fine-tuning | training a model further on examples of your own, so that it behaves in a consistent way; it teaches behaviour, not facts | fine-tune, fine-tuned
  - lock-in | being tied to one provider because leaving would cost too much, in rewriting, remeasuring or lost features | 
---

In the third week of August a vendor called VaultLeaf sent two people to Sahaj, a salesman and an engineer. Imran Qureshi said that sending two was a good sign and Lakshmi Iyer said that it was a worse one. VaultLeaf sold software that found and hid personal data in text, and it sold to banks. Its pitch was polished: a console with graphs, a certificate on a slide, a promise that it could be running at Sahaj in three weeks, and an accuracy of ninety-nine percent.

Anaya asked what the ninety-nine percent was measured against. The engineer, who seemed to have hoped for the question, said it was measured against VaultLeaf's own benchmark. She asked whether Sahaj could run the product against its own.

## The case: the same test for everyone

This is the first thing to do when someone proposes to sell what the team could build, and it is the thing that most buyers skip. The discussion usually turns on price and the demonstration, and neither decides the matter. What decides it is measuring the vendor's product the way one would measure one's own: on the team's answer key, with the team's kinds of text.

VaultLeaf agreed, in a way that suggested it did not often do this, to run the two hundred and four rows. A week later the figures came back. On English identity numbers it was excellent, a little better than the guard. On Hinglish names, the thing the guard had been designed for, it found sixty-two in a hundred. On Hindi in Devanagari script it did worse, and it had no way to handle a number spelled out in words. The salesman was not surprised and said that the company's customers were mostly English-first. Anaya replied that Sahaj's were not.

The reply contained a second answer, and Lakshmi read it three times. The standard product sent text to VaultLeaf's cloud for processing, in a region outside India. A private deployment, running inside Sahaj's own systems, was available at about three times the price.

## What you are really buying

Imran was calm. A vendor was acceptable, he said, as long as everyone understood what the money was for. One is rarely buying the model, since most vendors use the same models. One is buying the connectors, the permissions, the record of who did what, a support contract, and a person who gets out of bed when it breaks at two in the morning. That last item is usually worth more than the licence and is usually left out of the sum.

He wrote four questions on the board, the ones that in his experience decide the matter.

Table: Four questions for build or buy, with Sahaj's answers
| Question | Sahaj's answer |
| --- | --- |
| Is this the thing the product exists to do, or is it plumbing? | Finding personal details in Hinglish is the basis of the whole case, so Sahaj should own it |
| How often will it need to change? | Constantly, because the answer key grows every week and the failures come from real customers |
| Who is awake at two in the morning? | Nobody, as yet. There was no plan, which was worth knowing |
| What happens if the vendor is bought or shuts down? | Nobody at VaultLeaf could say what it would take to leave |

The team made two-year estimates on a single sheet. Buying the private deployment came to about ₹58 lakh. Building and running the guard came to about ₹71 lakh. The difference was small enough to argue either way, and what settled the matter was not the sum. Imran's rule was to buy the plumbing and build the part that makes the product different.

The plan was to build the finder, the answer key and the scoreboard, and to rent only the commodity items: hosting for the models in an Indian region, and an off-the-shelf console for the logs. Before signing anything, Anaya wrote what she had learned to write.

::: example A decision with a date
I would switch to buying if VaultLeaf reaches ninety on Hinglish names on our key, or if upkeep falls on one person for more than a fifth of their time. I would switch to building more if the price rises at the next tier. Review on 1 December.
:::

A decision with a date on it, she had found, is far easier to reverse than one without.

## What sits under the product

On the walk back Anaya asked Imran a question she had carried since March: were they competing with the people who make the big models? He stopped in front of the sweet shop and drew the answer on the back of an invoice with a pen borrowed from the owner.

AI products are built in layers, each resting on the one below. The entire stack is the *AI value chain*, and each layer gets its advantage from something different.

Table: The layers of the AI value chain
| Layer | What it is | Where its advantage comes from |
| --- | --- | --- |
| Infrastructure | Computers, chips and the cloud | Scale and money |
| Models | Some owned by companies that sell access, some released openly | Scale and money |
| Tooling | Stores for the maps of meaning, instruments for testing and tracking | Scale and money, and ease of use |
| Applications | What people actually use | The workflow, the data and the trust |

Most teams, Imran said, live at the top, and at the top the model is not the advantage, since competitors can call the same one by the same door. What is hard to copy is how deeply the product is built into someone's work, and data nobody else has. Anaya named the corrections: each time one of Farah's agents presses "the guard hid something I needed", the team learns something that no competitor knows. That holds only if the data is unique, makes the product better and is hard to get. A data advantage that fails any of those three is a story.

Some models are open for anyone to take. An *open-weight model* has its weights published, so it can be downloaded and run on one's own computers instead of calling someone else's. These are usually a little behind the best closed models. They give more control over where data goes and what it costs, and one pays for that in hosting and upkeep. For a company that has promised never to let a customer's sentence leave the building, it was an easy choice, and it answered the question in the margin of Anaya's specification: the careful judge would be an open-weight model, running on Sahaj's own servers.

Imran added a word that had carried a lot of weight in the vendor's office. *Lock-in* is being tied to one provider because leaving would cost too much, in rewriting, remeasuring or lost features. The remedy lies in the answer key: if the test set does not depend on any vendor, switching takes days.

## Teach it

On Monday the founder, Mr. Bhatia, stopped Anaya in the corridor. He had read something on a plane. He asked why the company should not train its own model on Hinglish: everyone was doing it, and it would be Sahaj's own. Every team is asked this question, usually in a planning meeting and usually before anyone has said what is wrong. Saying yes commits a quarter, and saying no sounds unambitious. Anaya promised an answer by Friday.

The idea is *fine-tuning*: taking a model that exists and training it further on examples of one's own. It sounds like the obvious route to a model that knows the company's world. Anaya had the one thing that makes the question answerable, which was the list of thirty-one failures from June with their counts. She sorted each into one of four kinds, because there are four, and each points to a different cure.

Table: Four kinds of failure and their cures
| Kind of failure | What it means | Sahaj's count and cure |
| --- | --- | --- |
| The machine does not know | The answer is missing, out of date or invented | None of the thirty-one. The order numbers were an evidence problem, solved by the lookup |
| It knows but behaves wrongly | The content is right but the format or rule is off | The eight names with "ji" after them: the machine had not been shown the convention, and a worked example fixed most of them in an afternoon. The half-hidden addresses were also format |
| It cannot work it out | Several steps, or real ambiguity | The numbers broken across lines, which belonged to the cutting rule and not to the machine |
| It is right but too costly | The answer is correct and the price is wrong | Not yet a problem |

Her answer to Mr. Bhatia on Friday was that fine-tuning teaches behaviour and not facts. If the complaint were that the model did not know Sahaj's policy, it would be the wrong tool. Sahaj's complaints were behaviours, and the team had not yet tried the cheap cures, of which the first two could be undone in hours.

She also listed the costs that proposals omit. Someone must create the examples and keep them current. A test set is needed first, or no one can tell whether the tuning helped, and it must never be the same as the examples the model learned from. The tuning must be redone each time the base model is retired. And the improvement lives inside one provider's system instead of in the instructions and the index, which is a form of lock-in.

Mr. Bhatia asked whether the answer was no. It was "not yet", she said, in this order: the instructions, then the evidence, then a smaller model, then fine-tuning. If after the first three the names with "ji" still failed, the team would teach the model, and it would know, because it had a key.

The smaller model was the option she had barely considered, and Imran thought it the most likely to matter. A cheaper, faster, narrower model running in-house often decides the economics of a feature with high volume and a narrow job, and finding names in short messages was exactly such a job.

## Summary

When someone proposes to sell what the team could build, neither the price nor the demonstration decides it. Measuring the vendor's product on the team's own answer key does, and so do four questions: whether it is the core of what the product does, how often it must change, who is awake when it breaks, and what it would take to leave.

- A good answer is often to buy the plumbing and build the part that makes the product different, writing down, with a date, the reasons that would reverse the decision.
- At the top of the AI value chain the model is rarely the advantage. Unique data, workflow and trust are.
- An open-weight model can be run on the company's own machines. Lock-in is a cost to be measured.
- When a model falls short there are four kinds of failure to tell apart. Fine-tuning teaches behaviour and not facts, comes after instructions, evidence and a smaller model, and needs a separate test set.

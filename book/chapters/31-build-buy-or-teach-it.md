---
title: Build, Buy or Teach It
summary: A vendor offers to sell the team what it has spent six months building, and a founder offers to make a model of their own. Both proposals sound sensible, and each has to survive the same test.
course: ch185 ch19
terms:
  - AI value chain | the layers an AI product is built on: infrastructure, models, tooling and, on top, the applications that people use; each layer gets its advantage from something different | value chain
  - open-weight model | a model whose weights are published, so you can download it and run it on your own computers instead of calling someone else's | open-weight models, open-weight
  - fine-tuning | training a model further on examples of your own, so that it behaves in a consistent way; it teaches behaviour, not facts | fine-tune, fine-tuned
  - lock-in | being tied to one provider because leaving would cost too much, in rewriting, remeasuring or lost features | 
---

The vendor was called VaultLeaf, and it sent two people, a salesman and an engineer, which Imran said was a good sign and Lakshmi said was a worse one.

It was a Thursday in the third week of August, and the pitch was a polished one. VaultLeaf sold software that found and hid personal data in text, and it did so for banks. It had a console with graphs. It had a certificate on the wall of its slide. It said it could be running at Sahaj in three weeks and that its accuracy was ninety-nine percent.

"Against what?" said Anaya.

The engineer smiled, as if to say that this question was the one he had been hoping to be asked. "Against our own benchmark."

"Could we run it against ours?"

## The same test for everyone

This is the first thing to do when someone proposes to buy what you could build, and it is the thing that most buyers skip. The discussion usually turns on price and on the demo. Neither decides the question. What decides it is measuring the vendor's product the way you would measure your own: on your answer key, with your kinds of text.

VaultLeaf agreed, in a way that suggested it did not do this often, to run the two hundred and four rows. A week later the numbers came back. On English identity numbers it was excellent, a little better than the guard. On Hinglish names, the thing the guard had been designed for, it found sixty-two in a hundred. On Hindi in Devanagari script it did worse. It had no way to handle a number spelled out in words.

The salesman was not surprised. "Our customers are mostly English-first," he said.

"Ours are not," said Anaya.

There was a second answer in the same email, and it was the one that Lakshmi read three times. The standard product sent text to VaultLeaf's cloud for processing, in a region outside India. A private deployment, running inside Sahaj's own systems, was available for about three times the price.

## What you are really buying

Imran was calm about it. He liked a vendor, he said, as long as everyone understood what the money was for.

"You are rarely buying the model," he said. "Most of them use the same models. What you're buying is the connectors, the permissions, the record of who did what, a support contract, and a person who gets out of bed when it breaks at two in the morning. That last one is usually worth more than the licence, and it's usually left out of the sum."

He wrote four questions on the board, the ones that, in his experience, decided it. *Is this the thing our product exists to do, or is it plumbing? How often will it need to change? Who is awake at two a.m.? What happens if the vendor is bought, or shuts down?*

They went through them without arguing. Finding personal details in Hinglish was the thing Sahaj's whole case rested on, so they should own it. It would need to change constantly, because the answer key grew every week and the failures came from real customers. As for two in the morning, they had no plan at all, which was worth knowing. And on the last question nobody at VaultLeaf had been able to say what it would take to leave.

They made two-year estimates, with rough numbers, on one sheet of paper. Buying the private deployment came to about fifty-eight lakh rupees. Building and running the guard came to about seventy-one. The difference was small enough to be argued either way. What settled it was not the sum.

"Buy the plumbing and build the part that makes the product different," said Imran. "That's usually the right answer, and it's the one we've got to."

The plan, as it ended, was to build the finder, the answer key and the scoreboard, and to rent only the things that were commodity: hosting for the models in an Indian region, and an off-the-shelf console for the logs. Anaya wrote down, before she signed anything, the thing she had learned to write. *I would switch to buying if: VaultLeaf reaches ninety on Hinglish names on our key, or if upkeep falls on one person for more than a fifth of their time. I would switch to building more if: the price rises at the next tier. Review on 1 December.* A decision with a date on it, she had found, is far easier to reverse than one without.

## What sits under the product

On the walk back from the meeting she asked Imran a question that had been in her head since March.

"Are we competing with the people who make the big models?"

He stopped on the pavement, in front of the sweet shop, and drew it on the back of an invoice with a pen he borrowed from the owner.

AI products are built in layers, he said, each resting on the one below. At the bottom, the computers and the chips and the cloud. Above that, the models: some owned by companies who sell access to them, and some released openly. Above that, the tools for managing them: the stores for the maps of meaning, the instruments for testing and tracking. And at the top, the applications that people actually use. The whole stack is the *AI value chain*, and each layer gets its advantage from something different. The lower layers from scale and money. The top from the workflow, the data and the trust.

"Most of us live at the top," he said. "And at the top, the model isn't your advantage. Your competitors can call the same one by the same door. What's hard to copy is how deeply you're built into someone's work. And data nobody else has."

"The corrections," said Anaya.

"The corrections. Every time one of Farah's agents presses *the guard hid something I needed*, we learn something that no competitor knows. But only if it's unique, and it makes the product better, and it's hard to get. A data advantage that fails any of those three is a story."

He had mentioned in passing that some models are open for anyone to take. These are *open-weight models*: their weights are published, so you can download them and run them on your own computers instead of calling someone else's. They are usually a little behind the best closed ones. They give you more control over where data goes and what it costs. And you pay for it in hosting and upkeep. For a company that has promised never to let a customer's sentence leave the building, it was an easy choice. It was also the answer to the question in the margin of her specification. The careful judge would be an open-weight model, running on Sahaj's own servers.

He added, as a last point, a word that had a lot of weight in the vendor's office. *Lock-in* is being tied to one provider because leaving would cost too much, in rewriting, in remeasuring or in lost features. The remedy, he said, was in the answer key. "If the test set doesn't depend on any vendor, switching takes days."

## Teach it

On Monday the founder stopped Anaya in the corridor. Mr. Bhatia had read something on the plane, and it had made an impression.

"Why don't we train our own model?" he said. "On Hinglish. Everyone is doing it. It would be ours."

It was a question every team is asked, usually in a roadmap meeting, and usually before anyone has said what is wrong. Saying yes commits a quarter. Saying no sounds unambitious. Anaya said that she would bring him an answer by Friday, and she meant it.

The idea is called *fine-tuning*: taking a model that exists and training it further on examples of your own. It sounds like the obvious route to a model that knows your world. Anaya had the one thing that makes the question answerable, which was the list.

The thirty-one failures from June, with their counts. She sorted each into one of four kinds, because there are four, and each points to a different cure. Some were the machine *not knowing* something: the answer was missing, stale or made up. Some were it *knowing but behaving wrongly*: the content was right but the format or the rule was off. Some were it *not being able to work it out*: several steps, or real ambiguity. And some were *right but too costly*.

Of her thirty-one, none was a case of not knowing. The order numbers were an evidence problem, solved by the lookup. The names with *ji* after them, eight of them, were behaviour: the machine had not been shown the convention, and a worked example fixed most of them in an afternoon. The half-hidden addresses were format. The numbers broken across lines belonged to the cutting rule, not the machine.

"Fine-tuning teaches behaviour, not facts," she told Mr. Bhatia on Friday. "If the complaint were that it doesn't know our policy, it would be the wrong tool. Our complaints are behaviours, and we haven't yet tried the cheap cures. The first two can be undone in hours."

There was a cost she listed for him, because proposals leave it out. Someone must create the examples and keep them current. A test set is needed first, or no one can tell whether it helped, and it must never be the same as the examples the model learned from. The tuning must be redone each time the base model is retired. And the improvement lives inside one provider's system instead of in the instructions and the index, which is a lock-in of its own.

"So the answer is no?" said Mr. Bhatia.

"It's *not yet*. In this order: the instructions, then the evidence, then a smaller model, then fine-tuning. If after the first three the names with *ji* still fail, we'll teach it. And we'll know, because we have a key."

The smaller model was the option she had hardly thought about, and Imran thought it the most likely to matter. A cheaper, faster, narrower model, running in-house, often decides the economics of a feature with high volume and a narrow job. Finding names in short messages was exactly such a job.

## What to carry forward

When someone proposes buying what you could build, the price and the demo do not decide it; measuring the vendor's product on your own answer key does, and so do four questions: whether it is the core of what you do, how often it must change, who is awake when it breaks, and what it would take to leave. A good answer is often to buy the plumbing and build the part that makes the product different, with the reasons that would reverse the decision written down, with a date. The model is rarely the advantage at the top of the value chain; unique data, workflow and trust are. An open-weight model can be run on your own machines. When a model falls short, there are four things to change, and fine-tuning, which teaches behaviour and not facts, comes after instructions, evidence and a smaller model, and needs a separate test set.

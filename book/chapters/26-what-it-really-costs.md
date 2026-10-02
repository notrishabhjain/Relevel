---
title: What It Really Costs
summary: "It depends on tokens" is not an answer to a finance director. A product manager prices the guard properly, finds three very different totals for the same tool, and sees why the order in which her four boxes run is the cheapest design decision she will make.
course: ch15
terms:
  - cascade | a design that sends every request to the cheapest thing that might work and passes on only what fails a check to the next, dearer one | cascades
---

The finance director asked for one number, and Anaya gave her two, and then spent the evening feeling that she had given the wrong ones.

It was a short meeting, held on a Monday in the first week of July, in a room with a view of the sweet shop's awning. The director was a precise woman who wrote with a fountain pen and said very little. She had listened to the plan for ten minutes. Then she had put the cap on the pen and asked, with no hostility, "What does it cost to run? Per month, at our volume."

"About seventy thousand rupees," said Anaya. She had worked it out that morning from a price list. "Roughly twenty-three paise a message, at three hundred thousand messages."

"That is the cost of the model call."

"Yes."

"Is it the cost of the system?"

Anaya paused, for the length of time in which one realises one has used a word carelessly. "I think I need to find out."

## The simple sum, and why it is too low

Every cost case starts with the same sum, and it is correct. Tokens in, times the price per token in, plus tokens out, times the price per token out. For one clean call to the careful judge, with six hundred tokens in and eighty out, at the made-up prices that had been used all year, it came to twenty-three paise.

The sum is right. What is wrong is the thing it is applied to. It prices one clean call, and a real feature is almost never one clean call. Business cases built this way are typically between three and twenty times too low, and the reasons are always the same four, each of which she had met in a chapter of her own year.

The first is how much is sent. A system that fetches eight pieces of text instead of three nearly triples what goes in on every request. The guard did not fetch anything. But it had its own version of this: long messages had to be cut into pieces, as she had seen in the spring, and a message cut into two cost twice as much to read. On average, in the sample of chats, a message was about one and a fifth pieces.

The second is retries. When an answer fails its check and has to be asked for again, the whole request is sent a second time. Imran's logs showed about one message in twelve was retried.

The third is steps. A loop sends the whole conversation again at each round, so six rounds cost nearer ten times a single call than six. For the careful judge, which sometimes looked an order number up, an unsure message took about four rounds, and four rounds came to about five and a half times the cost of one.

The fourth is the thinking the user never sees. A reasoning model's hidden working is charged like output, and there is usually far more of it than of the visible answer. For the careful judge it came to about six times as much.

Each of these was a choice she had made, which meant each was a thing that could be changed.

## Three numbers for one tool

That night she did the sum again, properly, and arrived at three answers instead of one. Each was true. They described three different tools.

**The first was the one she had given.** One clean call to the careful judge, twenty-three paise, for each of three hundred thousand messages: about sixty-nine thousand rupees a month. This priced a tool that did not exist.

**The second was what would happen if the guard were built the obvious way**, with every message sent to the careful judge, working its way through four rounds of lookups and hidden reasoning. Twenty-three paise times five and a half for the rounds, times six for the thinking: about seven rupees and sixty paise a message. Three hundred thousand of them: twenty-two lakh and eighty thousand rupees a month.

She looked at the second number for some time. It was thirty-three times the first. It was also, in one sense, a perfectly natural thing for a team to build, if they had not thought about it.

**The third was what the guard actually was**, and it was the reason the order of the boxes mattered so much. The pattern checker, which found everything with a fixed shape, cost nothing at all. The finder of names and places was a small model, which she priced at about four paise a message, and with the extra pieces and the retries it came to a little over five. Only the unsure messages, about six in every hundred, ever reached the careful judge, and for those she paid the full seven rupees and sixty paise. Six percent of seven-sixty was forty-six paise.

Five paise plus forty-six: about fifty-one paise a message. Three hundred thousand of them: one lakh and fifty-three thousand rupees a month.

| Design | Per message | Per month |
| --- | --- | --- |
| One clean call, as first quoted | 23 paise | about ₹69,000 |
| Everything to the careful judge | about ₹7.60 | about ₹22.8 lakh |
| The guard as built, with the cheap boxes first | about 51 paise | about ₹1.53 lakh |

The first number was less than half the truth. The second was fifteen times the truth. The difference between the second and the third was nothing but the order in which the boxes ran.

## The cheap thing first

That ordering has a name. A *cascade* sends every request to the cheapest thing that might work, and passes on only what fails a check to the next, dearer one. The guard was a cascade, and it had been built as one for a different reason than saving money: it was fast, and it kept the careful judge for the cases that needed working out. The saving had come with it, uninvited.

Imran, reading the table, said it was the single most effective thing a team can do. Most real requests are simple. A small model, or in the guard's case a plain rule, handles them well. The dear one is kept for the hard few.

There were four other things, he said, in rough order of what they save. Choosing the model: prices across one provider's range differ by ten or a hundred times, which matters more than anything else on the list. Sending less: every token that is not sent costs nothing, and a better-ordered shortlist lets you send fewer pieces. Caching the unchanging front of a request. And doing the work that can wait overnight, at a lower price, in batches. Anaya noticed that the careful judge's second look, the one that ran in the background, could be done in batches. She wrote it on the page.

## Three numbers, not one

When she went back to the director on Tuesday, she brought the table and a sentence she had worked on for an hour.

*The tool costs about one lakh fifty thousand rupees a month at three hundred thousand messages, at about fifty-one paise each. That is dominated by the careful judge, which sees six messages in a hundred. The number is wrong if that six rises above ten, or if retries go above one in five, or if the provider changes its prices.*

"That is a number I can defend," said the director.

"There are two more I have to give you with it." Anaya had learned this from Imran as well. Speed is also a cost. A cheap tool that is slow can fail as thoroughly as a fast one that is dear. So she reported, beside the cost, how long a message took typically, a fraction of a second, and how long the slow ones took, which were the ones that went to the background. She would always give all three together. A single average, she said, would hide the slow tail.

The director wrote on the pad, which she rarely did. Then she asked the question that Anaya had known was coming and had no answer for.

"What does it save us?"

## The other half of the sum

She had a cost and no benefit. That was the real point of the afternoon, and she knew it by the heaviness in her stomach.

The question that decides most of these features has nothing to do with tokens. It is whether the thing makes sense at scale. If a query costs three rupees and the value it protects is two, no amount of tuning will rescue it. She had priced the first half carefully. She did not have a number for the second. What did it cost Sahaj when an identity number leaked? An investigation. A notice. A customer who left. A regulator's attention, if it went wrong. She had no figures, and she suspected nobody did.

"I will find out," she told the director, "or I will find out that nobody knows. And I will say so."

"That is acceptable," the director said, and put the cap back on the pen.

On the way out Anaya added a line to the specification, in the section that listed what she did not yet know, and underlined it twice. *What does a leak cost? Ask Lakshmi.*

## What to carry forward

The simple cost sum, tokens in and out times their prices, is correct and usually three to twenty times too low, because it prices one clean call. A real design multiplies it by how much is sent each time, how often a request is retried, how many rounds a loop takes, and how much hidden thinking a reasoning model does, and each of these is a design choice that can be changed. A cascade, which runs the cheapest method first and passes only the failures to a dearer one, can make the difference between a tool that costs a lakh and one that costs twenty. Cost should always be reported with speed, including the slow cases. And a cost without the value it protects is only half a sum.

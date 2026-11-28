---
title: What It Really Costs
summary: "It depends on tokens" is not an answer for a finance director. Anaya works out the true price of the guard. She finds three very different totals for the same tool. The cheapest fix is the order in which the guard's parts run. This chapter teaches the cascade.
course: ch15
goals:
  - see why the simple cost sum is usually too low
  - name the four things that make a real bill bigger, and see that each one is a choice
  - compare three designs of the same tool, and see what a cascade saves
  - report cost together with speed, and say what a cost leaves out when you do not know the value it protects
terms:
  - cascade | like a clinic where the nurse sees everyone first and the specialist sees only the hard cases; each request goes to the cheapest step that might work, and only what fails a check moves to a dearer step | cascades
---

In the first week of July, Anaya showed the guard's plan to Sahaj's finance director. She was careful and wrote with a fountain pen. She said very little. After ten minutes she put the cap on her pen. Then she asked what the guard would cost to run each month at the company's volume.

Anaya said about seventy thousand rupees. That is about twenty-three paise a message, for three hundred thousand messages.

"That is the cost of the model call," said the director. "Is it the cost of the system?"

Anaya went quiet. It felt like using a word without thinking. She said she would find out. In this chapter you see what she found.

## The case: one number asked for, two given

Anaya had given the director two numbers. One was the cost per message. The other was the total for a month. All evening she felt they were the wrong two. So she did the sum again.

## The simple sum, and why it is too low

Think of a taxi meter. It counts the distance, but not the waiting at red lights, or the road you took twice. The simple sum is like that.

Every cost case starts with the same sum, and the sum is correct. Count the tokens going in (the small pieces of text you send). Multiply by the price for each token in. Count the tokens coming out. Multiply by the price for each token out. Add the two.

Take one clean call to the careful judge (the strong model that checks the unsure cases). It has six hundred tokens in and eighty out. The prices are the made-up ones used all year. The answer is twenty-three paise.

The sum is not wrong. The mistake is what it is used on. It prices one clean call. A real feature is almost never one clean call. Business cases built this way are often three to twenty times too low. There are four reasons. Anaya had met all four in earlier chapters.

Table: Four multipliers that the simple sum leaves out
| Multiplier | Why it matters | The guard’s figure |
| --- | --- | --- |
| How much is sent | Eight pieces of text instead of three nearly triples the input. The guard fetched nothing. But long messages were cut into pieces, and a message cut in two costs twice as much to read | A message was on average about one and a fifth pieces |
| Retries | An answer fails its check, so it is asked for again. The whole request is sent a second time | About one message in twelve was retried |
| Steps | A loop (the same step done again and again) sends the whole conversation again at each round. So six rounds cost nearer ten times one call, not six times | An unsure message took about four rounds, or about five and a half times one call |
| Hidden thinking | A reasoning model's rough work is charged like output. There is usually far more of it than of the visible answer | About six times as much for the careful judge |

Each of these was a choice Anaya had made. So each could be changed.

## Three numbers for one tool

That night she did the sum again. She got three answers, not one. All three were true. Each one described a different tool.

The first was the number she had given the director. It was one clean call to the careful judge, at twenty-three paise. It was counted for each of three hundred thousand messages, so about ₹69,000 a month. It priced a tool that did not exist.

The second was the guard built the obvious way. Every message goes to the careful judge. The judge does four rounds of lookups and hidden reasoning. Take twenty-three paise. Multiply by five and a half for the rounds. Multiply by six for the thinking.

That is about ₹7.60 a message. It is ₹22.8 lakh a month. It is thirty-three times the first number. A team that has not thought about cost would build exactly this.

The third was the guard as it really was. The pattern checker found everything with a fixed shape, and it cost nothing. The finder of names and places was a small model. It cost about four paise a message. With the extra pieces and the retries, it came to a little over five.

Only the unsure messages, about six in every hundred, ever reached the careful judge. For those, she paid the full ₹7.60. Six percent of ₹7.60 is forty-six paise. Five paise plus forty-six is about fifty-one paise a message. That is ₹1.53 lakh a month.

Table: Three designs for the same tool
| Design | Per message | Per month |
| --- | --- | --- |
| One clean call, as first quoted | 23 paise | about ₹69,000 |
| Everything to the careful judge | about ₹7.60 | about ₹22.8 lakh |
| The guard as built, with the cheap parts first | about 51 paise | about ₹1.53 lakh |

The first number was less than half the truth. The second was fifteen times the truth. The only difference between the second and the third was the order in which the parts ran.

## The cheap thing first

Think of a clinic. The nurse sees everyone first. The specialist sees only the hard cases. The clinic stays cheap and fast.

That order has a name. A *cascade* sends every request to the cheapest step that might work. Only what fails a check moves on to the next, dearer step. The guard was a cascade. The team had built it that way for another reason. They wanted speed, and they wanted to keep the careful judge for cases that needed real thinking. The saving came along without being asked.

::: key Why cascades work
Most real requests are simple. A small model handles them well. In the guard, a plain rule handles them. The dear model is kept for the hard few. Imran said this is the best single thing a team can do about cost.
:::

He listed four more ways to cut cost, in rough order of what they save.

Table: Other ways to lower cost, in rough order of saving
| Measure | Comment |
| --- | --- |
| Choose the model | Prices across one provider's range (one company's models) differ by ten or a hundred times. This matters more than anything else on the list |
| Send less | A token that is not sent costs nothing. A better-ordered shortlist means fewer pieces are sent |
| Cache the unchanging front of a request | Cache means keep a copy for reuse. The same start, a cheaper bill |
| Do the work that can wait | Work done overnight, in batches (many together), is cheaper. The careful judge's second look already ran in the background, so it could be batched |

## Three numbers, not one

On Tuesday, Anaya went back to the director. She brought the table and a short statement that took her an hour to write. The tool costs about one lakh fifty thousand rupees a month. That is at three hundred thousand messages, at about fifty-one paise each.

Most of the cost comes from the careful judge, who sees six messages in a hundred. The number is wrong if that six rises above ten. It is wrong if retries go above one in five. It is wrong if the provider changes its prices.

The director said she could defend that number.

Anaya added one more thing. Speed is a cost too. Think of waiting for chai. A cheap shop that is very slow can fail as badly as a quick one that is dear. So she would always report three things together. The first is the cost.

The second is how long a message usually took. It was a fraction of a second. The third is how long the slow ones took. These were the ones that went to the background. One average alone would hide the slow tail.

## The other half of the sum

Then the director asked what the tool saved. Anaya had no answer. She had a cost and no benefit. That was the real lesson of the afternoon.

Think of buying a lock. The price of the lock is only half the sum. You also need to know what is inside the cupboard. The question that decides most features like this has nothing to do with tokens. It is whether the feature makes sense at scale. Say a query costs three rupees and the value it protects is two. No tuning will save it.

She had priced the first half with care. She had no number for the second. What does it cost Sahaj when an identity number leaks? There would be an investigation and a notice. Perhaps a customer would leave. The regulator's attention too, if things went badly. She had no figures. She suspected nobody did.

She told the director she would find out. Or she would find out that nobody knew, and say so. The director accepted that and put the cap back on her pen. Anaya added a line to the specification (the written plan for the tool). It went in the part about what was not yet known: what does a leak cost? Ask Lakshmi.

::: key What you can now say
Three sentences about giving a model work. Put your own numbers where N stands.
- My agent has a step limit written first, and a person approves every action that cannot be undone.
- I checked my judge against my own marking: N percent agreement. I read the disagreements.
- My cost sum includes retries, loops and hidden thinking: N rupees a month, not the number for one clean call.
:::

## The price of a good answer

The finance director had one last question. "Some calls fail and run again. Are those in your sum?"

They were not. Anaya added a line: the **cost per successful answer**. It is the cost of one try divided by the share of tries that work. A model at ₹0.40 a try that works 80% of the time costs ₹0.50 for each good answer. A cheaper model at ₹0.25 that works half the time costs the same ₹0.50. It also keeps more customers waiting for the retry.

She added three more lines, because the director would ask. Cache prices had changed in 2026. Writing a prompt to the cache now costs more than plain input, and reading it back costs far less. So she wrote both prices down with the date, not a rule of thumb. The agent loop got a hard cap on steps and on spend. And the budget would grow in three stages: crawl, with a small daily cap and a person reading every bill; walk, with a cap for each feature and an alert at 80%; run, with costs split by feature and checked against value every week.

To split the bill by feature, the finance team already used a shared format for cloud bills, called FOCUS. Its version 1.4 had no special place for tokens yet. Version 1.5, planned for December 2026, is meant to add one. Until then, AI calls would sit on the bill like any other line.

*Last verified: November 2026. The sources and their dates are listed in the app, in Appendix E of the reference pages.*

## Summary

The simple cost sum is tokens in and out, times their prices. It is correct. But it is usually three to twenty times too low, because it prices one clean call.

- A real design makes it bigger. It depends on how much is sent each time, how often a request is retried, how many rounds a loop takes, and how much hidden thinking a reasoning model does. Each one is a design choice and can be changed.
- A cascade (the clinic order) runs the cheapest step first. Only the failures go to a dearer step. It can be the gap between a tool that costs a lakh and one that costs twenty.
- Report cost together with speed, and include the slow cases.
- A cost without the value it protects is only half a sum.
- Divide by the success rate: the cost per successful answer counts the retries. Write cache prices down with a date, cap every agent loop, and grow the budget in three stages.

Next, Farah puts a photograph of a bank passbook in front of Anaya. The team leaves plain text behind.

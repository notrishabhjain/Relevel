---
title: What It Really Costs
summary: "It depends on tokens" is not an answer to a finance director. A product manager prices the guard properly, finds three very different totals for the same tool, and sees that the order in which the guard's parts run is the cheapest design decision available. The chapter introduces the cascade.
course: ch15
goals:
  - explain why the simple cost sum is usually too low
  - list the four multipliers that a real design adds, and say why each is a choice
  - compare three designs for the same tool and explain what a cascade saves
  - report cost with speed, and say what a cost figure leaves out without the value it protects
terms:
  - cascade | a design that sends every request to the cheapest thing that might work and passes on only what fails a check to the next, dearer one | cascades
---

In the first week of July Anaya presented the plan for the guard to Sahaj's finance director, a precise woman who wrote with a fountain pen and said very little. After ten minutes the director put the cap on her pen and asked what the guard would cost to run per month at the company's volume. Anaya answered that it would cost about seventy thousand rupees: roughly twenty-three paise a message at three hundred thousand messages.

"That is the cost of the model call," said the director. "Is it the cost of the system?" Anaya paused for the length of time in which a person realises that a word has been used carelessly, and said that she needed to find out. This chapter reports what she found.

## The case: one number requested, two given

Anaya had given the director two figures, a cost per message and a monthly total, and spent the evening feeling that they were the wrong two. The sections below recompute them.

## The simple sum, and why it is too low

Every cost case starts with the same sum, and it is correct: tokens in times the price per token in, plus tokens out times the price per token out. For one clean call to the careful judge, with six hundred tokens in and eighty out, at the made-up prices used throughout the year, it came to twenty-three paise.

The error lies in the thing the sum is applied to. It prices one clean call, and a real feature is almost never one clean call. Business cases built this way are typically between three and twenty times too low, for four reasons that Anaya had met in earlier chapters.

Table: Four multipliers that the simple sum leaves out
| Multiplier | Why it matters | The guard's figure |
| --- | --- | --- |
| How much is sent | Eight pieces of text instead of three nearly triples the input. The guard fetched nothing, but long messages had to be cut into pieces, and a message cut in two costs twice as much to read | A message was on average about one and a fifth pieces |
| Retries | When an answer fails its check and is asked for again, the whole request is sent a second time | About one message in twelve was retried |
| Steps | A loop sends the whole conversation again at each round, so six rounds cost nearer ten times a single call than six | An unsure message took about four rounds, or about five and a half times one call |
| Hidden thinking | A reasoning model's working is charged like output, and there is usually far more of it than of the visible answer | About six times as much for the careful judge |

Each of these was a choice that Anaya had made, which meant that each could be changed.

## Three numbers for one tool

That night she did the sum again and arrived at three answers instead of one. Each was true, and they described three different tools.

The first was the figure she had given: one clean call to the careful judge at twenty-three paise, for each of three hundred thousand messages, or about ₹69,000 a month. It priced a tool that did not exist.

The second was the guard built the obvious way, with every message sent to the careful judge and worked through four rounds of lookups and hidden reasoning. Twenty-three paise, times five and a half for the rounds, times six for the thinking, is about ₹7.60 a message, or ₹22.8 lakh a month. That is thirty-three times the first figure. It is also a natural thing for a team to build if it has not thought about the matter.

The third was the guard as it actually was. The pattern checker, which found everything with a fixed shape, cost nothing. The finder of names and places was a small model, priced at about four paise a message, and with the extra pieces and the retries it came to a little over five. Only the unsure messages, about six in every hundred, ever reached the careful judge, and for those she paid the full ₹7.60. Six percent of ₹7.60 is forty-six paise. Five paise plus forty-six comes to about fifty-one paise a message, or ₹1.53 lakh a month.

Table: Three designs for the same tool
| Design | Per message | Per month |
| --- | --- | --- |
| One clean call, as first quoted | 23 paise | about ₹69,000 |
| Everything to the careful judge | about ₹7.60 | about ₹22.8 lakh |
| The guard as built, with the cheap parts first | about 51 paise | about ₹1.53 lakh |

The first figure was less than half the truth, and the second was fifteen times the truth. The difference between the second and the third was nothing but the order in which the parts ran.

## The cheap thing first

That ordering has a name. A *cascade* sends every request to the cheapest thing that might work and passes on only what fails a check to the next, dearer one. The guard was a cascade, built as one for a different reason, which was speed and keeping the careful judge for cases that needed working out. The saving came with it uninvited.

::: key Why cascades work
Most real requests are simple. A small model, or in the guard's case a plain rule, handles them well. The dear one is kept for the hard few. Imran called this the single most effective thing a team can do about cost.
:::

He listed four other measures, in rough order of what they save.

Table: Other ways to lower cost, in rough order of saving
| Measure | Comment |
| --- | --- |
| Choose the model | Prices across one provider's range differ by ten or a hundred times, which matters more than anything else on the list |
| Send less | A token that is not sent costs nothing, and a better-ordered shortlist lets fewer pieces be sent |
| Cache the unchanging front of a request | The same start, a cheaper bill |
| Do the work that can wait | Work done overnight, in batches, is cheaper. The careful judge's second look, which already ran in the background, could be batched |

## Three numbers, not one

On Tuesday Anaya returned to the director with the table and a sentence that she had spent an hour writing: the tool costs about one lakh fifty thousand rupees a month at three hundred thousand messages, at about fifty-one paise each; the cost is dominated by the careful judge, which sees six messages in a hundred; the figure is wrong if that six rises above ten, if retries exceed one in five, or if the provider changes its prices. The director said she could defend that number.

Anaya added that speed is also a cost, since a cheap tool that is slow can fail as thoroughly as a fast one that is dear. She would always report three things together: the cost, how long a message typically took, which was a fraction of a second, and how long the slow ones took, which were the ones that went to the background. A single average would hide the slow tail.

## The other half of the sum

The director then asked what the tool saved, and Anaya had no answer. She had a cost and no benefit, which was the real point of the afternoon. The question that decides most such features has nothing to do with tokens. It is whether the feature makes sense at scale. If a query costs three rupees and the value it protects is two, no amount of tuning will rescue it.

She had priced the first half carefully and had no number for the second. What does it cost Sahaj when an identity number leaks? There would be an investigation, a notice, perhaps a customer who left, and a regulator's attention if matters went badly. She had no figures and suspected that nobody did. She told the director that she would find out, or would find out that nobody knew, and say so. The director accepted that and put the cap back on her pen. Anaya added a line to the specification in the section on what was not yet known: what does a leak cost, and ask Lakshmi.

## Summary

The simple cost sum, tokens in and out times their prices, is correct and usually three to twenty times too low, because it prices one clean call.

- A real design multiplies it by how much is sent each time, how often a request is retried, how many rounds a loop takes and how much hidden thinking a reasoning model does. Each is a design choice and can be changed.
- A cascade runs the cheapest method first and passes only the failures to a dearer one. It can make the difference between a tool that costs a lakh and one that costs twenty.
- Cost should be reported with speed, including the slow cases.
- A cost without the value it protects is only half a sum.

---
title: Who Pays, and How Much
summary: A lender's technical lead asks what the guard would cost him. The answer turns on three different people, four ways of charging, and one row of a table that most price lists never draw. The chapter explains seat, usage, outcome and hybrid pricing, contribution margin, flywheels and gross margin.
course: b1
goals:
  - tell the user, the buyer and the blocker apart, and learn what a product is worth from past spending
  - set a price between a floor set by your costs and a ceiling set by the customer's alternative
  - compare seat, usage, outcome and hybrid pricing by the risk each one puts on each side
  - work out contribution margin at low, base and high usage, recognise the three kinds of flywheel, and put a price on a supplier risk
terms:
  - seat pricing | charging for each user of the product, per month; easy for a buyer to budget, but unfair when heavy users cost far more to serve than light ones | per-seat
  - usage pricing | charging for each unit used, such as each message or call, so that revenue follows cost; buyers can't predict the bill and may ration their use | usage-based
  - outcome pricing | charging for each successful result, so that the price follows the value; it needs an agreed, measurable definition of success | outcome-based
  - hybrid pricing | a platform fee that includes some usage, then a charge for whatever goes beyond it; predictable for the buyer and protective of your margin | hybrid plan
  - contribution margin | what a customer leaves you after the costs that grow with them, as a share of what they pay | 
  - flywheel | a loop in which using the product makes it better, which brings more use; the workflow kind is usually the strongest | flywheels
  - gross margin | revenue minus the direct cost of delivering the product; for AI products much of that cost is a model or hosting bill | 
---

After the defence, the lending partner's technical lead, Mr. Menon, asked a question on the stairs, one hand already on the rail. What would the guard cost him? In the three weeks since the defence he had been back twice to look at the demonstration page, and once to bring two colleagues. He asked the way people ask a question they have been holding all afternoon.

Anaya had spent a year learning to answer "does it work?" with a number. "What does it cost?" was a different kind of question, and she had no number she believed. So she asked for a week, and promised to bring a real one. This chapter reports what she found.

## The case: three different people

The first task was to find out who Mr. Menon was. In a company that buys software for others to use, three different people usually matter, and they are rarely the same person. The table names them, and says who each one was at the partner.

Table: User, buyer and blocker
| Role | Who they are | At the partner | What they want |
| --- | --- | --- | --- |
| User | The person who works with the product every day | A developer who would add the kit to a chat system | To add it easily on a Friday |
| Buyer | The person who holds the budget and answers to someone for the spend | A head of engineering or compliance | A number to show his own manager |
| Blocker | The person who can say no and doesn't have to say why | A security lead whom Mr. Menon, ruefully, called "the Wall" | To know where the text goes and who can read it |

The blocker's question had been worked out the previous July, in the longest meeting of Anaya's year.

Next she asked Mr. Menon what a price would be worth to him. Then she stopped, because she had been about to ask whether he would pay for it. She had read in the first month of the project why that is the wrong question: people say yes to be polite, and the answer predicts nothing. So she asked something else. What did he use today to deal with the problem, what did it cost, and who had approved the spend?

He paid a vendor about thirty-five thousand rupees a month for a tool that blanked card numbers in chat logs and did nothing else. An analyst spent about a quarter of her time on a weekly sweep much like Lakshmi's, which at her pay came to about thirty thousand rupees a month. The head of compliance had signed the approval for the vendor. All of this was fact. Past spending is evidence. A future intention is not.

## The ceiling and the floor

Anaya wrote the two figures on a card. Beneath them she wrote what she hadn't understood until that afternoon: the price a customer will pay comes from their alternative, not from the seller's costs. The alternative sets the ceiling. The seller's own costs set the floor.

Think of what this meant for her. A tool that saves most of an analyst's quarter-time is worth a good deal less than thirty thousand to the buyer, because adopting it also takes effort. But it is worth a good deal more than a few thousand.

She found the middle on the same card. A fair price lay between ten thousand rupees, which would cover her costs, and about twenty thousand, beyond which Mr. Menon would start asking whether the old way was cheaper. She chose twenty-four thousand as a first guess, to see what happened to it.

## Four ways to charge

Imran said there are four common ways to charge for an AI product, and each puts a different risk on a different side. The table sets them out: how each works, where it is strong and where it is weak.

Table: Four ways to charge
| Method | How it works | Strength | Weakness |
| --- | --- | --- | --- |
| *Seat pricing* | A charge for each user, per month | Easy for a buyer to budget | It assumes that one more use costs the seller almost nothing. That has been true of software for forty years, and it is false for anything that reads and writes text. The guard had no meaningful seats, and one heavy customer on a flat price could wipe out the margin from ten light ones |
| *Usage pricing* | A charge for each message | Revenue follows cost | The buyer can't predict the bill and tends to ration use, which would be perverse for a safety tool |
| *Outcome pricing* | A charge for each successful result | Price follows value | Buyer and seller must agree what counts as success, and measure it without argument. A price per verified clean message might one day be possible, and was not yet |
| *Hybrid pricing* | A platform fee with some use included, then a rate beyond it | The buyer has a number to budget for, and the seller keeps a margin | The price is harder to explain |

## The row that most price lists omit

Anaya had Imran's cost figures. She laid out the full cost of serving one customer for one month, not only the model bill. It included the model and hosting, the storage for records and traces, and the time of a person to onboard the customer and answer questions. As she was learning, support often costs more than the machine. She did the sum three times, at low, base and high usage.

Table: Cost to serve and margin at a flat ₹24,000
| Usage | Messages a month | Cost to serve | Margin at a flat ₹24,000 |
| --- | --- | --- | --- |
| Low | 20,000 | ₹5,900 | 75% |
| Base | 100,000 | ₹10,500 | 56% |
| High | 1,000,000 | ₹58,500 | A loss of 144% |

The margin she was working out is called the *contribution margin*. It is what a customer leaves you after the costs that grow with them, as a share of what they pay. At the base row it was a respectable fifty-six percent. At the high row it was a loss. A customer with a busy chat system on a flat price would cost her more than twice what they paid.

Imran's rule was to model low, base and high every time, because most margin problems only show up in the last row.

So she rebuilt the price as a hybrid. Twenty-four thousand rupees a month would include a hundred thousand messages. Each further hundred thousand would cost nine thousand. At a million messages, a customer would pay a little over a lakh, and her margin would be forty-four percent. The bill now followed the value the customer received, and her margin stopped sliding as the customer grew.

## The wheel that turns by itself

The finance director, to whom Anaya showed the table, asked a different question. What would make the product better as the company grew?

The idea behind that question is a *flywheel*: a loop in which using the product improves the product, which brings more use. Anaya went through the three kinds that turn up in AI. The table lists them with how each turns, and how strong it usually is.

Table: Three kinds of flywheel
| Kind | How it turns | Strength |
| --- | --- | --- |
| Data | The corrections that agents make improve the tool, so it improves with use | Often weaker than claimed. The gains flatten after a few thousand examples, and contracts frequently forbid pooling one customer's data with another's |
| Workflow | The product becomes part of someone's weekly routine, and other work starts to depend on it | Usually the strongest. For the guard it was the monthly sweep |
| Platform | Other people build on the product | Rare, and it needs a crowd first |

She added a warning that she had put in a dozen documents by then. A flywheel that relies on customers' data works only while customers trust the seller with it. So the seller must say what is stored, what is learned from and who can see it. And the seller must ask before using one customer's corrections to help another.

## What a supplier can do to you

The last row of the sheet was about a risk Anaya had learned of in September. If a product runs on another company's computers or models, that company can change its prices and its quality without asking you. For an AI product, a large part of the cost of delivery is somebody else's bill. That cost sits inside the *gross margin*, which is revenue minus the direct cost of delivering the product.

She couldn't remove the risk, but she could price it. Her recommendation said what would happen if the hosting price doubled. The base margin would fall from fifty-six percent to about thirty-seven, and a tested second host would take about a week to switch to. It said what she would do if a model were retired: pinned versions and the gate. And it said what she would do if a rival launched the same feature: own the workflow and the relationship.

She sent Mr. Menon the page the following Thursday, with the first paragraph at the top, which she had rewritten four times.

::: example Anaya's recommendation to Mr. Menon
I recommend a hybrid plan at ₹24,000 per month, including 100,000 messages, with ₹9,000 for each further 100,000. Your alternative costs you about ₹65,000 a month between the vendor and the analyst's time, so the price is well under the value. Our margin is 56 percent at base use and stays above 40 percent at ten times that. The biggest risk is the price of hosting. If it doubled, our base margin would fall to about 37 percent, and switching to our tested second host takes about a week.
:::

## Summary

A customer pays for a product when it does a job better or cheaper than their alternative. So the alternative sets the ceiling on the price, and the seller's own costs set the floor.

- In a company, the user, the buyer and the blocker are usually three different people. To learn what something is worth, ask what they use today, what it costs and who approved it. Past spending is evidence, and promises are not.
- Seat, usage, outcome and hybrid pricing each put a different risk on a different side. For anything that costs money each time it runs, a flat seat price is dangerous.
- Work out the full cost of serving a customer at low, base and high usage, because the margin problem is usually in the last row.
- State what happens to the margin if a supplier doubles its price, and how long it would take to switch.

Once a price is agreed, the next question is how people find the product, and why they stay.

---
title: Who Pays, and How Much
summary: A lender's technical lead asks what the guard would cost him. The answer turns on three different people and four ways of charging. It also turns on one row of a table that most price lists never draw. You meet seat, usage, outcome and hybrid pricing, contribution margin, flywheels and gross margin.
course: b1
goals:
  - tell the user, the buyer and the blocker apart, and learn what a product is worth from what people spent before
  - set a price between a floor (your costs) and a ceiling (the customer's other choice)
  - compare seat, usage, outcome and hybrid pricing by the risk each one puts on each side
  - work out contribution margin at low, base and high usage, spot the three kinds of flywheel, and put a price on a supplier risk
terms:
  - seat pricing | like a cinema ticket for each person. You charge for each user, each month. It is easy for a buyer to plan for. It is unfair when heavy users cost far more to serve than light ones | per-seat
  - usage pricing | like a taxi meter. You charge for each unit used, such as each message or call, so your income follows your cost. The buyer cannot guess the bill, and may use less to save money | usage-based
  - outcome pricing | like paying only for the fish you catch. You charge for each good result, so the price follows the value. Both sides must agree, in numbers, what a good result is | outcome-based
  - hybrid pricing | like a phone plan with data included. A fixed fee covers some use, and you pay extra beyond it. The buyer can plan, and your margin is safe | hybrid plan
  - contribution margin | what is left from each rupee a customer pays, after the costs that grow with that customer. Think of a plate of food after you pay for the ingredients | 
  - flywheel | like a heavy wheel that keeps spinning once pushed. Using the product makes it better, and that brings more use. The kind built on workflow is usually the strongest | flywheels
  - gross margin | like a shopkeeper's profit after paying for the stock. It is income minus the direct cost of delivering the product. For AI products, much of that cost is a model or hosting bill | 
---

The partner's technical lead, Mr. Menon, spoke on the stairs after the defence. He had one hand on the rail. He asked, "What would the guard cost me?" In the three weeks since the defence he had come back twice to look at the demo page. Once he had brought two colleagues. He asked like a man who had held the question all afternoon.

For a year, Anaya had learned to answer "does it work?" with a number. "What does it cost?" was a different kind of question. She had no number she trusted. So she asked for a week. She promised to bring a real number. This chapter tells what she found.

## The case: three different people

Think of buying a school bus. The child who rides it, the principal who pays for it, and the officer who must approve it are three different people. Anaya first had to find out who Mr. Menon was.

In a company that buys software for others to use, three people usually matter. They are rarely the same person. The table names them. It also says who each one was at the partner.

A second prospect (a company that might buy) had come up that same week. It was the IT cell of the state electricity distribution company. Sahaj already collected its bills. The cell asked whether the guard could clean its own helpdesk chats. The table has a column for each, because the same three roles looked quite different there.

Table: User, buyer and blocker
| Role | Who they are | At the partner | At the electricity company | What they want |
| --- | --- | --- | --- | --- |
| User | The person who works with the product every day | A developer who would add the kit to a chat system | A helpdesk contractor's team, who did not choose the tool | To add it easily on a Friday |
| Buyer | The person who holds the budget and answers to someone for the spend | A head of engineering or compliance | A department that buys through a tender and picks the lowest price that meets the terms | A number to show his own manager |
| Blocker | The person who can say no and doesn't have to say why | A security lead whom Mr. Menon, ruefully, called "the Wall" | A security audit, and a clause on where the data may be kept | To know where the text goes and who can read it |

The blocker's question had been worked out the previous July. It came up in the longest meeting of Anaya's year.

Next she asked Mr. Menon what a price would be worth to him. Then she stopped. She had been about to ask whether he would pay for it.

In the first month of the project she had read why that question is wrong. People say yes to be polite. The answer predicts nothing. So she asked something else. What did he use today for this problem? What did it cost? Who had approved the spend?

He paid a vendor (a company that sells him a service) about thirty-five thousand rupees a month. The tool blanked card numbers in chat logs (the saved copies of chats) and did nothing else. An analyst spent about a quarter of her time on a weekly sweep (a regular check of sample chats) much like Lakshmi's. At her pay, that came to about thirty thousand rupees a month.

The head of compliance (the person who makes sure the rules are followed) had signed the approval for the vendor. All of this was fact. Past spending is evidence. A future wish is not.

## The ceiling and the floor

Think of haggling in a market. The seller will not go below what the goods cost him. The buyer will not pay more than the next shop charges. Anaya's price had to sit between those two.

She wrote the two figures on a card. Under them she wrote what she had not understood until that afternoon. The price a customer will pay comes from their other choice, not from the seller's costs. That other choice sets the ceiling. The seller's own costs set the floor.

Think of what this meant for her. A tool that saves most of an analyst's quarter-time is worth a good deal less than thirty thousand to the buyer. Adopting it takes effort too. But it is worth a good deal more than a few thousand.

She found the middle on the same card. A fair price lay between two figures. One was ten thousand rupees, which would cover her costs. The other was about twenty thousand. Beyond that, Mr. Menon would start asking whether the old way was cheaper. She chose twenty-four thousand as a first guess, to see what happened to it.

## Four ways to charge

Think of four ways to pay for a ride. You can buy a seat. You can pay by the meter. You can pay only if you arrive. Or you can buy a monthly pass with some rides included. Imran said there are four common ways to charge for an AI product. Each puts a different risk on a different side. The table shows how each works, where it is strong and where it is weak.

Table: Four ways to charge
| Method | How it works | Strength | Weakness |
| --- | --- | --- | --- |
| *Seat pricing* | A charge for each user, per month | Easy for a buyer to budget | It assumes that one more use costs the seller almost nothing. That has been true of software for forty years, and it is false for anything that reads and writes text. The guard had no meaningful seats, and one heavy customer on a flat price could wipe out the margin from ten light ones |
| *Usage pricing* | A charge for each message | Revenue follows cost | The buyer can't predict the bill and tends to ration use, which would be perverse for a safety tool |
| *Outcome pricing* | A charge for each successful result | Price follows value | Buyer and seller must agree what counts as success, and measure it without argument. A price per verified clean message might one day be possible, and was not yet |
| *Hybrid pricing* | A platform fee with some use included, then a rate beyond it | The buyer has a number to budget for, and the seller keeps a margin | The price is harder to explain |

## The row that most price lists omit

Think of a tea stall. The tea leaves are only part of the cost. There is also milk, gas, the cups and the boy who serves. Anaya counted all of it. She had Imran's cost figures. She set out the full cost of serving one customer for one month, not only the model bill. It included the model and hosting (the computers that run the product). It included storage for records and traces (the logs of each step). It also included the time of a person to onboard the customer (set them up) and answer questions. She was learning that support often costs more than the machine. She did the sum three times, at low, base and high usage.

Table: Cost to serve and margin at a flat ₹24,000
| Usage | Messages a month | Cost to serve | Margin at a flat ₹24,000 |
| --- | --- | --- | --- |
| Low | 20,000 | ₹5,900 | 75% |
| Base | 100,000 | ₹10,500 | 56% |
| High | 1,000,000 | ₹58,500 | A loss of 144% |

The margin she was working out is called the *contribution margin*. It is what a customer leaves you after the costs that grow with them. It is shown as a share of what they pay. At the base row it was a respectable fifty-six percent. At the high row it was a loss. A customer with a busy chat system on a flat price would cost her more than twice what they paid.

Imran's rule was to model low, base and high every time. Most margin problems only show up in the last row.

So she rebuilt the price as a hybrid. Twenty-four thousand rupees a month would include a hundred thousand messages. Each further hundred thousand would cost nine thousand. At a million messages, a customer would pay a little over a lakh. Her margin would be forty-four percent. The bill now followed the value the customer got. Her margin stopped sliding as the customer grew.

## The buyer who writes a tender

Think of a school notice that says, "We need 500 notebooks. Send your price." The school does not pick a favourite notebook. It takes the cheapest offer that meets the list. Anaya saw that the electricity company's column changed what she could sell.

A *tender* is a published request that asks suppliers to bid. The buyer there did not choose a product. It wrote the terms. Then it took the lowest price among the bids that met them. So a feature nobody had listed counted for nothing.

That changed the price. Usage pricing does not fit a fixed-price contract. The buyer must state the total in advance. It cannot accept a bill that grows with festival traffic. A hybrid plan with a large included volume came nearest. But it only worked if the tender allowed it.

She did not know whether it did. She wrote "ask" beside it. A small paid pilot (a short trial) was a sensible first step. It had to be sized below the amount at which the company's rules call for a full tender. She did not know that amount either, and she did not guess it.

The audit and the data clause matched the condition Lakshmi had set in March. The cleaning happens inside the company, before anything leaves. For this buyer that was no longer a limit to explain. It was the one part of the product the audit would not argue with.

## The wheel that turns by itself

Think of a heavy potter's wheel. Push it a few times and it keeps spinning. The finance director saw the table and asked a different question. What would make the product better as the company grew?

The idea behind that question is a *flywheel*. It is a loop where using the product makes the product better, and that brings more use. Anaya went through the three kinds that turn up in AI. The table shows how each one turns, and how strong it usually is.

Table: Three kinds of flywheel
| Kind | How it turns | Strength |
| --- | --- | --- |
| Data | The corrections that agents make improve the tool, so it improves with use | Often weaker than claimed. The gains flatten after a few thousand examples, and contracts frequently forbid pooling one customer's data with another's |
| Workflow | The product becomes part of someone's weekly routine, and other work starts to depend on it | Usually the strongest. For the guard it was the monthly sweep |
| Platform | Other people build on the product | Rare, and it needs a crowd first |

She added a warning she had put in a dozen documents by then. A flywheel that relies on customers' data works only while customers trust the seller with it. So the seller must say what is stored, what is learned from and who can see it. And the seller must ask before using one customer's corrections to help another.

## What a supplier can do to you

Think of a shop that buys all its milk from one dairy. If the dairy raises its price, the shop has no say. Anaya had learned of this kind of risk in September. If a product runs on another company's computers or models, that company can change its prices and its quality without asking you.

For an AI product, much of the cost of delivery is somebody else's bill. That cost sits inside the *gross margin*. Gross margin is income minus the direct cost of delivering the product.

She could not remove the risk. She could put a price on it. Her recommendation said what would happen if the hosting price doubled. The base margin would fall from fifty-six percent to about thirty-seven. A tested second host would take about a week to switch to.

It said what she would do if a model were retired. She would use pinned versions (a fixed model version that does not change) and the gate (the check before release). And it said what she would do if a rival launched the same feature. She would own the workflow and the relationship.

She sent Mr. Menon the page the next Thursday. The first paragraph was at the top. She had rewritten it four times.

::: example Anaya's recommendation to Mr. Menon
I recommend a hybrid plan at ₹24,000 per month, including 100,000 messages, with ₹9,000 for each further 100,000. Your alternative costs you about ₹65,000 a month between the vendor and the analyst's time, so the price is well under the value.

Our margin is 56 percent at base use and stays above 40 percent at ten times that. The biggest risk is the price of hosting. If it doubled, our base margin would fall to about 37 percent, and switching to our tested second host takes about a week.
:::

## Summary

Think of the market again. A customer pays when your product does the job better or cheaper than their other choice. That other choice sets the ceiling on the price. Your own costs set the floor.

- In a company, the user, the buyer and the blocker are usually three different people. To learn what something is worth, ask what they use today, what it costs and who approved it. Past spending is evidence. Promises are not.
- Seat, usage, outcome and hybrid pricing each put a different risk on a different side. A flat seat price is dangerous when each run costs money.
- Work out the full cost of serving a customer at low, base and high usage. The margin problem is usually in the last row.
- State what happens to the margin if a supplier doubles its price, and how long it would take to switch.

Once a price is agreed, the next question is how people find the product, and why they stay.

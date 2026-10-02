---
title: Who Pays, and How Much
summary: A lender's technical lead asks what the guard would cost him, and a product manager finds that the answer to the question depends on three different people, four ways of charging, and a row in a table that most price lists never draw.
course: b1
terms:
  - seat pricing | charging for each user of the product, per month; easy for a buyer to budget but unfair when heavy users cost far more to serve than light ones | per-seat
  - usage pricing | charging for each unit used, such as each message or call, so that revenue follows cost; buyers cannot predict the bill and may ration use | usage-based
  - outcome pricing | charging for each successful result, so that price follows value; it needs an agreed, measurable definition of success | outcome-based
  - hybrid pricing | a platform fee that includes some usage, then a charge for what goes beyond it; predictable for the buyer and protective of your margin | hybrid plan
  - contribution margin | what a customer leaves you after the costs that grow with them, as a share of what they pay | 
  - flywheel | a loop in which using the product makes it better, which brings more use; the workflow kind is usually the strongest | flywheels
  - gross margin | revenue minus the direct cost of delivering the product; for AI products much of that cost is a model or hosting bill | 
---

"What would it cost us?" said Mr. Menon.

He had asked it on the stairs, as he was leaving, with one hand already on the rail. He was the technical lead from the lending partner, the man who had asked to see the answer key, and in the three weeks since the defence he had been back twice to look at the demonstration page and once to bring two colleagues. He asked the way people ask a question they have been holding all afternoon.

Anaya had been dreading it. She had spent a year learning to answer the question *does it work?* with a number. *What does it cost?* was a different sort of question, and she had no number she believed.

"Give me a week," she said. "I'll bring you a real one."

## Three different people

The first thing she did was to find out who Mr. Menon was.

In a company that buys software for other people to use, three different people usually matter, and they are rarely the same person. The *user* is the one who works with the product every day. For the guard that was a developer, who would add the kit to a chat system. The *buyer* is the one who holds the budget and answers to someone for the spend, here a head of engineering or of compliance. And the *blocker* is the one who can say no and is not obliged to say why. Lakshmi was Sahaj's. Mr. Menon's was a security lead called, he said ruefully, "the Wall".

Each cared about something different. The developer wanted it to be easy to add on a Friday. The buyer wanted a number to show his own manager. The blocker wanted to know where the text went and who could read it, and the answer to that had been worked out the previous July, in the longest meeting of Anaya's year.

"What would a price be worth to you?" she asked, and stopped. She had been about to ask whether he would pay for it. She had read, in the first month of the project, why that is the wrong question: people say yes to be polite, and the answer predicts nothing.

So she asked the things she should have asked. What do you use today to deal with this? What does it cost you? Who approved that spend?

He told her. He paid a vendor about thirty-five thousand rupees a month for a tool that blanked card numbers in chat logs, and nothing else. He also had an analyst, who spent about a quarter of her time on a weekly sweep much like Lakshmi's. The analyst's pay, on that fraction, came to about thirty thousand rupees a month. The approval for the vendor had been signed by the head of compliance. All of it was a fact. Past spending is evidence. A future intention is not.

## The ceiling and the floor

Anaya wrote the two figures on a card, and below them the thing she had not understood until that afternoon. The price a customer will pay comes from their alternative, not from your costs. The alternative sets the ceiling. Your own costs set the floor. A tool that saves most of an analyst's quarter-time is worth a good deal less than thirty thousand to the buyer, since adopting it also costs effort, and it is worth much more than a few thousand.

She found the middle on the same card, with arithmetic. A fair price lay somewhere between ten thousand rupees, which would cover her costs, and the twenty or so thousand beyond which Mr. Menon would start asking whether the old way was cheaper. She picked twenty-four thousand as a first guess, to see what happened to it.

## Four ways to charge

Imran, who had a view on every kind of bill, said that there are four common ways to charge for an AI product, and each puts a different risk on a different party.

*Seat pricing* charges for each user, per month. It is easy for a buyer to budget. But it assumes that an extra use costs the seller almost nothing, which has been true of software for forty years and is false for anything that reads and writes text. The guard had no meaningful seats. And a heavy customer on a flat price could wipe out the margin from ten light ones.

*Usage pricing* charges for each message. Revenue follows cost, which is its charm. Its flaw is that the buyer cannot predict the bill and tends to ration use, which for a safety tool would be perverse.

*Outcome pricing* charges for each successful result. Price follows value. It needs the buyer and seller to agree what counts as a success and to be able to measure it without argument. Per verified clean message, Anaya thought, might one day be possible. It was not possible yet.

*Hybrid pricing* charges a platform fee with a certain amount of use included, then a rate beyond it. The buyer gets a number to budget for. The seller keeps a margin. The price is harder to explain.

## The row that most price lists omit

Anaya had Imran's cost figures. She laid out, as she had been told to, the full cost of serving one customer for one month, not only the model bill. The model and hosting. The storage for records and traces. And the time of a person to onboard them and to answer their questions, because, as she was learning, support often costs more than the machine.

She did it three times, at low, base and high usage, and the last row made her sit very still.

| Usage | Messages a month | Cost to serve | Margin at a flat ₹24,000 |
| --- | --- | --- | --- |
| Low | 20,000 | ₹5,900 | 75% |
| Base | 100,000 | ₹10,500 | 56% |
| High | 1,000,000 | ₹58,500 | a loss of 144% |

The margin she was describing is the *contribution margin*: what a customer leaves behind after the costs that grow with them, as a share of what they pay. At the base row it was a respectable fifty-six percent. At the high row there was no margin at all. A customer with a busy chat system on a flat price would cost her more than twice what they paid.

"Always model low, base and high," said Imran. "Most margin problems appear only in the last row."

She rebuilt the price as a hybrid. Twenty-four thousand rupees a month would include a hundred thousand messages, and each further hundred thousand would cost nine thousand. At a million messages, a customer would pay a little over a lakh, and her margin would be forty-four percent. The bill followed the value the customer received, and her margin stopped sliding as they grew.

## The wheel that turns by itself

The finance director, to whom she showed the table, asked a different question. "What makes it get better as you grow?"

Anaya had expected it. A *flywheel* is a loop in which using the product improves the product, which brings more use. She went through the three kinds that turn up in AI. The first is a data flywheel: the corrections that agents make improve the tool, so it gets better with use. This is often weaker than people say. The gains flatten after a few thousand examples, and contracts frequently forbid pooling one customer's data with another's. The second is a workflow flywheel. The product becomes part of someone's weekly routine, and other work starts to depend on it. For the guard, that was the monthly sweep. This is usually the strongest. The third is a platform flywheel, in which other people build on your product. It is rare, and it needs a crowd first.

She added the warning that she had by now put in a dozen documents. A flywheel that relies on customers' data works only while customers trust her with it. Say clearly what is stored, what is learned from, and who can see it. Ask before using one customer's corrections to help another.

## What a supplier can do to you

The last row of the sheet concerned a risk she had learned about the hard way in September. If a product runs on another company's computers or models, that company can change its prices and its quality without asking. For an AI product a large part of the cost of delivery, and so of gross margin, which is revenue minus the direct cost of delivering the product, is somebody else's bill.

She could not remove the risk, but she could price it. Her recommendation said what would happen if the hosting price doubled: the base margin would fall from fifty-six percent to about thirty-seven, and a tested second host would take about a week to switch to. It said what she would do if a model were retired: pinned versions and a gate. And it said what she would do if a rival launched the same feature: own the workflow and the relationship.

She sent Mr. Menon the page the following Thursday, with the first paragraph at the top, which she had rewritten four times.

*I recommend a hybrid plan at ₹24,000 per month, including 100,000 messages, with ₹9,000 for each further 100,000. Your alternative costs you about ₹65,000 a month between the vendor and the analyst's time, so the price is well under the value. Our margin is 56 percent at base use and stays above 40 percent at ten times that. The biggest risk is the price of hosting. If it doubled, our base margin would fall to about 37 percent, and switching to our tested second host takes about a week.*

## What to carry forward

A customer pays for a product when it does a job better or cheaper than their alternative, so the alternative sets the ceiling on the price and your own costs set the floor. In a company, the user, the buyer and the blocker are usually three different people, and the way to learn what something is worth is to ask what they use today, what it costs and who approved it, because past spending is evidence and promises are not. Seat, usage, outcome and hybrid pricing each put a different risk on a different party, and for anything that costs money each time it runs a flat seat price is dangerous. Model the full cost of serving a customer at low, base and high usage, because the margin problem is usually in the last row. And say what happens to your margin if a supplier doubles its price, and how long it would take to switch.

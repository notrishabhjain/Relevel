---
title: Finding by Meaning
summary: A bazaar where stalls of the same trade stand in the same lane gives a product manager the picture she needs for the idea that rescued search, and a number to be suspicious of.
course: ch5
terms:
  - embedding | a long list of numbers that places a piece of text on a map of meanings, so that texts meaning similar things get similar numbers even when they share no words | embeddings
  - similarity score | a number from about 0 to 1 saying how close two embeddings are; it means little until you know what clearly good and clearly bad matches score | similarity scores, similarity
---

There is a lane in the old part of Pune where every shop sells brass.

It runs behind the main road, narrow enough that a delivery cart must stop and apologise to a scooter, and from one end to the other there are lamps, bells, pots, steel plates and small idols, in shops that look the same and are different. A little further on is the lane of cloth. Beyond that the lane of dried fruit. A newcomer who wants a particular lamp does not need to know the name of the shop. She needs to know which lane to walk into, and the lane will contain what she is looking for, and also its near relatives.

Imran had been born ten minutes from it, and he used it, without embarrassment, to explain what came next.

## A map where nearness means meaning

"Imagine the bazaar is a map," he said. "Not of shops, but of meanings. Every sentence in the world has a place on it. Sentences that mean similar things stand in the same lane. *When do I get my money back* and *reimbursement of approved claims* are neighbours, even though they have no word in common. *What is the capital of Peru* is a very long walk away."

Anaya thought of Farah's twenty cards, which had been lying on the table since Monday, each wholly unaware that it was about anything.

"Who draws the map?"

"A machine. Not the big one. A separate, smaller model, built only for this." He tapped the page. "You give it a piece of text. It gives back a long list of numbers, which are the text's coordinates on the map. That list is called an *embedding*. That is the whole of the trick. The machine does not need to understand your question. It needs to put it in a place."

Once every card has a place, finding the relevant ones stops being a matter of spelling and becomes a matter of distance. Put the customer's question on the map, find the cards standing nearest to it, and send those.

## The same twenty cards

He had already done it. He had run all twenty cards through the machine, once, and stored the coordinates in a small file, and now he typed the question that had defeated Anaya on Monday.

*Paisa kab milega?*

The question went through the same map. It landed, as such questions do, in the neighbourhood of waiting, money and returns. A second later the screen listed the three nearest cards. At the top was card seven, the one about refunds being processed within seven working days. Beside it was a number.

*0.71.*

"That is the similarity score," said Imran. "How close the question is to that card. It runs, roughly, from nought to one. Close to one is nearly identical in meaning. Close to nought is unrelated."

"Seventy-one. That is good."

"Is it?" He seemed pleased that she had asked. "Without asking what a bad match scores, I don't know."

He ran the same question against a card about the interest on late payments, which was clearly irrelevant. *0.38.* Against a card about changing a registered mobile number: *0.31.* Against a card that said nothing but the company's address: *0.12.*

"So real text hardly ever scores below about a tenth," he said. "And the useful range is narrow. Fifty-one does not mean *half similar*. In this system fifty-one is near the bottom of the range. A similarity number means little until you know what clearly good matches score and what clearly bad ones do. I would not trust anyone who quotes me one by itself."

## Things the map does badly

Anaya had begun to expect a *but*, and it came as it always did, unhurried.

"The map is only as good as what the machine learned from. Mostly that was English text from the internet. If your words were rare in it, it puts them in odd places. Two things your users see as different can end up neighbours. Two they see as the same can end up apart."

He asked her to think of the words Sahaj's customers used. *Lakh* and *crore.* NEFT and IMPS, two kinds of transfer that an ordinary person lumps together and an accountant never would. The names of government schemes, which can differ by a single word and mean different sums. Hindi written in English letters, like *paisa kab milega*, which the machine had met less often than *when will I be refunded.* And Sahaj's own internal names: two product codenames that meant very different things to the people in the building and nothing at all to the machine, which would place them by how they were spelled.

"Name the failures before a user finds them for you," said Imran.

There was a second, subtler thing to say about how the map is used. A question is short and phrased as a question. The passage that answers it is long and phrased as a statement. Good embedding models are trained with this in mind and expect to be told which one they are looking at. If you get that wrong nothing breaks. The results are simply worse in a way no error message mentions.

## The guard, on the map

It was during this conversation that Anaya saw how the map might help the part of the guard that she had been calling, privately, the difficult one.

She had written down, in a spreadsheet of her own, ten sentences. Five of them were of the kind that identify a person without containing a single number or name. *I am the only diabetic patient in my village who had a transplant last year. I am the sarpanch of Wadgaon and I also run the fair-price shop. My son is the only boy from our chawl to get into IIT Bombay this year.* Five were harmless: *What documents do I need to renew my driving licence?* and others like it.

She asked the map to place all ten, then measured how close each one stood to the first.

| Sentence | Identifies one person? | Score against the first |
| --- | --- | --- |
| The sarpanch who also runs the shop | Yes | 0.74 |
| The only boy from the chawl at IIT | Yes | 0.66 |
| A woman who is the only vet in her taluka | Yes | 0.54 |
| What documents do I need to renew my driving licence? | No | 0.41 |
| A question about cash-on-delivery for a ration order | No | 0.58 |
| A complaint about a school fee refund | No | 0.55 |

She studied it. The highest-scoring harmless sentence, 0.58, stood closer to the first than one of the identifying ones, 0.54. A threshold that caught the three identifying sentences would also have caught two harmless ones.

"It's grouping them by topic," she said. "The first sentence is about a village, a person, and a hospital. The map puts neighbours in the same lane. A sentence about a ration order in a village lands near it, because it is about a village. But whether a sentence picks out one person isn't a matter of topic."

"No," said Imran. "That is a different thing. Closeness is not risk."

She did not feel defeated. She felt, if anything, more exact. The map was a good tool for finding things that *mean* what a question means. It did not follow that it could detect a quality such as *points to one human being*. She would need something else for that, or at least something added, and she did not yet know what.

She did, however, know what to do with the finding. She wrote it up on the board under the red line, as the second row of a table she had started that week: where the rule-based method wins, and where the meaning-based method wins, and what neither can do.

## What the map cannot say

There was one thing the map shared with the plain method. Ask it a question that none of the cards answered, and it still returned the nearest card, with a score, and the score was lower but not zero. Nothing in the system said *nobody here knows*. The least bad card would still be handed to the machine as if it were evidence.

"So the thing from Monday is still true," said Anaya.

"It is," said Imran. "And now that we can find things by meaning as well as by words, we can finally find out how often we get it wrong. That is the next job. And it is the more important one."

## What to carry forward

An embedding places a piece of text on a map of meanings, as a long list of numbers, so that texts that mean similar things stand close together even when they share no words. Finding the right pieces becomes a matter of distance, and the distance is reported as a similarity score, which is meaningless until you know what clearly good and clearly bad matches score. The map is only as good as the text it learned from, so it can place local vocabulary badly. Closeness on the map is about meaning, not about every quality a sentence might have, and a method that finds sentences about the same topic will not necessarily find the ones that identify a person.

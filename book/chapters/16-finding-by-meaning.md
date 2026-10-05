---
title: Finding by Meaning
summary: A bazaar in which shops of the same trade share a lane gives a product manager the picture she needs for the idea that rescued search, and a number to be suspicious of. The chapter introduces embeddings and similarity scores.
course: ch5
goals:
  - explain how an embedding places text on a map of meaning, so that similar meanings are near each other
  - read a similarity score and say why a single score means little by itself
  - name places where the map is likely to be wrong for Sahaj's customers
  - explain why closeness on the map is not the same as risk to a person
terms:
  - embedding | a long list of numbers that places a piece of text on a map of meanings, so that texts meaning similar things get similar numbers even when they share no words | embeddings
  - similarity score | a number from about 0 to 1 saying how close two embeddings are; it means little until you know what clearly good and clearly bad matches score | similarity scores, similarity
---

In the old part of Pune there is a lane in which every shop sells brass. It runs behind the main road, narrow enough that a delivery cart has to stop and apologise to a scooter, and from end to end it holds lamps, bells, pots, steel plates and small idols in shops that look alike and are not. A little further on is the lane of cloth, and beyond that the lane of dried fruit. A newcomer who wants a particular lamp does not need to know the name of the shop. She needs to know which lane to walk into, and the lane will hold what she is looking for and its near relatives.

Imran Qureshi was born ten minutes from the lane, and he used it to explain how a machine can find text by what it means.

## The case: the bazaar as a map

Imran asked Anaya to think of the bazaar as a map, not of shops but of meanings. Every sentence in the world has a place on it. Sentences that mean similar things stand in the same lane. "When do I get my money back" and "reimbursement of approved claims" are neighbours, though they share no word. "What is the capital of Peru" is a long walk away.

Anaya thought of Farah's twenty cards on the table, each unaware that it was about anything. She asked who draws the map. Imran said that a machine does, a separate and smaller model built only for the purpose. It is given a piece of text and returns a long list of numbers, which are the text's coordinates on the map.

::: def Embedding
A long list of numbers that places a piece of text on a map of meanings, so that texts with similar meanings receive similar numbers even when they share no words. The machine does not need to understand the question. It needs to put it in a place.
:::

Once every card has a place, finding the relevant ones stops being a matter of spelling and becomes a matter of distance. The customer's question is placed on the map, the nearest cards are found, and those are sent to the model.

## The same twenty cards

Imran had already run all twenty cards through the embedding model once and stored the coordinates in a small file. He typed the question that had defeated Anaya on Monday, "Paisa kab milega?" It landed in the neighbourhood of waiting, money and returns. The screen listed the three nearest cards, with card seven, the one about refunds being processed within seven working days, at the top. Beside it was a number, 0.71.

That number is the *similarity score*: how close the question is to the card, running roughly from nought to one. Anaya took 0.71 as good. Imran asked what a bad match scored, and ran the question against three irrelevant cards.

Table: Similarity scores for one question against four cards
| Card | Relevant? | Score |
| --- | --- | --- |
| Refunds processed within seven working days | Yes | 0.71 |
| Interest on late payments | No | 0.38 |
| Changing a registered mobile number | No | 0.31 |
| The company's address | No | 0.12 |

Real text hardly ever scores below about a tenth, and the useful range is narrow. In this system 0.51 does not mean "half similar". It is near the bottom of the range.

::: watch A score means little alone
A similarity score means little until one knows what clearly good matches score and what clearly bad ones score. Quoting a single score without that context is not evidence of anything.
:::

## What the map does badly

The map is only as good as what the embedding model learned from, and mostly that was English text from the internet. Words that were rare in it are placed in odd positions. Two things that users see as different can end up as neighbours, and two they see as the same can end up apart. Imran asked Anaya to think of the words Sahaj's customers use.

Table: Where the map is likely to be wrong for Sahaj
| Words | Why they are risky |
| --- | --- |
| Lakh and crore | Units that the model may have met less often than millions and billions |
| NEFT and IMPS | Two kinds of transfer that an ordinary person lumps together and an accountant never would |
| Names of government schemes | They can differ by a single word and mean different sums |
| Hindi in English letters, such as "paisa kab milega" | The model met it less often than "when will I be refunded" |
| Sahaj's internal product names | Two codenames meant very different things inside the company and nothing to the model, which places them by spelling |

Imran's rule was to name the failures before a user finds them. A subtler point concerns how the map is used. A question is short and phrased as a question, and the passage that answers it is long and phrased as a statement. Good embedding models are trained with this in mind and expect to be told which one they are looking at. If that is done wrongly nothing breaks. The results are simply worse, in a way that no error message mentions.

## The guard on the map

Anaya saw that the map might help the part of the guard she privately called the difficult one. She had written ten sentences in a spreadsheet. Five identified a person without containing a number or a name, such as "I am the sarpanch of Wadgaon and I also run the fair-price shop". Five were harmless. She asked the map to place all ten and measured how close each stood to the first, "I am the only diabetic patient in my village who had a transplant last year".

Table: Closeness of six sentences to the first
| Sentence | Identifies one person? | Score against the first |
| --- | --- | --- |
| The sarpanch who also runs the shop | Yes | 0.74 |
| The only boy from the chawl at IIT | Yes | 0.66 |
| A woman who is the only vet in her taluka | Yes | 0.54 |
| What documents do I need to renew my driving licence? | No | 0.41 |
| A question about cash-on-delivery for a ration order | No | 0.58 |
| A complaint about a school fee refund | No | 0.55 |

The highest-scoring harmless sentence, at 0.58, stood closer to the first than one of the identifying sentences, at 0.54. A threshold that caught the three identifying sentences would have caught two harmless ones as well. The map was grouping the sentences by topic. The first is about a village, a person and a hospital, and a sentence about a ration order in a village lands nearby because it too is about a village. Whether a sentence picks out one person is not a matter of topic.

::: key Closeness is not risk
The map finds things that mean what a question means. It cannot, by itself, detect whether a sentence points to one human being. Anaya did not feel defeated by this. She felt more exact. She would need something added for that quality, and she recorded the finding as the second row of a table of where each method wins: where the rule-based method wins, where the meaning-based method wins, and what neither can do.
:::

## What the map cannot say

The map shares one flaw with the plain method. Asked a question that none of the cards answers, it still returns the nearest card with a score, lower than a good match but not zero. Nothing in the system says that nobody here knows. The least bad card would still be given to the model as if it were evidence. That was true on Monday, Anaya said, and Imran agreed that it was still true. Now that text could be found by meaning as well as by words, it was possible to find out how often the system was wrong, which was the next job and the more important one.

## Summary

An embedding places a piece of text on a map of meanings, as a long list of numbers, so that texts with similar meanings stand close together even when they share no words. Finding the right pieces becomes a matter of distance.

- The distance is reported as a similarity score, which is meaningless until one knows what clearly good and clearly bad matches score.
- The map is only as good as the text it learned from, so it can place local vocabulary badly. Failures should be named before a user finds them.
- Closeness on the map concerns meaning and topic, not every quality a sentence might have. A method that finds sentences on the same topic will not necessarily find the ones that identify a person.

---
title: Finding by Meaning
summary: A bazaar where shops of one trade share a lane gives Anaya the picture she needs. It shows the idea that rescued search, and a number to be wary of. You meet embeddings and similarity scores.
course: ch5
goals:
  - know how an embedding puts text on a map of meaning, so similar meanings sit near each other
  - read a similarity score, and say why one score alone means little
  - name the places where the map is likely to be wrong for Sahaj's customers
  - see why closeness on the map is not the same as risk to a person
terms:
  - embedding | an address for meaning; a long list of numbers that puts a piece of text on a map, so texts that mean the same thing live on the same street, even with no shared words | embeddings
  - similarity score | like a marks card for closeness; a number from about 0 to 1 that says how near two embeddings are, and it means little until you know what clearly good and clearly bad matches score | similarity scores, similarity
---

In the old part of Pune there is a lane where every shop sells brass. It runs behind the main road. It is so narrow that a delivery cart has to stop and say sorry to a scooter. From end to end it holds lamps, bells, pots, steel plates and small idols. The shops look alike, but they are not the same.

A little further on is the lane of cloth. Beyond that is the lane of dried fruit. A newcomer wants a particular lamp. She does not need the name of the shop. She only needs to know which lane to walk into. That lane holds what she wants, and its close relatives.

Imran Qureshi was born ten minutes from that lane. He used it to show how a machine can find text by what it means.

## The case: the bazaar as a map

Imran asked Anaya to see the bazaar as a map. It is not a map of shops, he said. It is a map of meanings. Every sentence in the world has a place on it. Sentences with similar meanings stand in the same lane. "When do I get my money back" and "reimbursement of approved claims" are neighbours. They share no word. "What is the capital of Peru" is a long walk away.

Anaya thought of Farah's twenty cards on the table. Each one did not know what it was about. Then she asked the obvious question. Who draws the map?

A machine does, said Imran. It is a separate, smaller model made only for this job. You give it a piece of text. It gives back a long list of numbers. Those numbers are the text's address on the map.

::: def Embedding
Think of an address for meaning. An embedding is a long list of numbers that puts a piece of text on a map. Texts with similar meanings get similar numbers, even when they share no words. The machine does not have to understand the question. It only has to put it in a place.
:::

Every card now has a place. So finding the right ones is no longer about spelling. It is about distance. The customer's question is put on the map. The nearest cards are found. Those cards go to the model.

## The same twenty cards

Imran had already run all twenty cards through the embedding model once. He had saved the addresses in a small file. Now he typed the question that beat Anaya on Monday: "Paisa kab milega?"

It landed in the neighbourhood of waiting, money and returns. The screen listed the three nearest cards. At the top was card seven. That was the card about refunds being processed within seven working days. Beside it was a number: 0.71.

That number is the *similarity score*. It shows how close the question is to the card. The scale runs from about nought to one. Think of it as a marks card for closeness. Anaya took 0.71 to be good. Imran asked what a bad match would score. He ran the question against three cards that had nothing to do with it.

Table: Similarity scores for one question against four cards
| Card | Relevant? | Score |
| --- | --- | --- |
| Refunds processed within seven working days | Yes | 0.71 |
| Interest on late payments | No | 0.38 |
| Changing a registered mobile number | No | 0.31 |
| The company's address | No | 0.12 |

Real text hardly ever scores below about a tenth. So the useful range is narrow. In this system 0.51 does not mean "half similar". It is near the bottom of the range.

::: watch A score means little alone
A similarity score means little until you know two things. What do clearly good matches score? What do clearly bad ones score? A single score with no such context proves nothing. It is like hearing "he got 51" without knowing the exam is out of 60 or out of 600.
:::

## What the map does badly

The map is only as good as the text the embedding model learned from. That text was mostly English from the internet. Words that were rare there get odd places on the map. Two things that users see as different can end up as neighbours. Two things they see as the same can end up far apart. It is like a new shop assistant who has only ever worked in one city. Local words confuse him.

Imran asked Anaya to think about the words Sahaj's customers use. The table lists where the map is likely to go wrong.

Table: Where the map is likely to be wrong for Sahaj
| Words | Why they are risky |
| --- | --- |
| Lakh and crore | Units that the model may have met less often than millions and billions |
| NEFT and IMPS | Two kinds of transfer that an ordinary person lumps together and an accountant never would |
| Names of government schemes | They can differ by a single word and mean different sums |
| Hindi in English letters, such as "paisa kab milega" | The model met it less often than "when will I be refunded" |
| Sahaj's internal product names | Two codenames meant very different things inside the company and nothing to the model, which places them by spelling |

Imran had a rule. Name the failures before a user finds them.

There is also a finer point. A question is short and worded as a question. The passage that answers it is long and worded as a statement. Good embedding models are trained with this in mind. They expect to be told which one they are looking at. If that is done wrongly, nothing breaks. The results are just worse, and no error message says so.

## The guard on the map

Then Anaya saw that the map might help with the part of the guard she privately called the hard one. In a spreadsheet she had written ten sentences. Five pointed to one person without any number or name. One was "I am the sarpanch of Wadgaon and I also run the fair-price shop". Five were harmless.

She asked the map to place all ten. Then she measured how close each one stood to the first: "I am the only diabetic patient in my village who had a transplant last year".

Table: Closeness of six sentences to the first
| Sentence | Identifies one person? | Score against the first |
| --- | --- | --- |
| The sarpanch who also runs the shop | Yes | 0.74 |
| The only boy from the chawl at IIT | Yes | 0.66 |
| A woman who is the only vet in her taluka | Yes | 0.54 |
| What documents do I need to renew my driving licence? | No | 0.41 |
| A question about cash-on-delivery for a ration order | No | 0.58 |
| A complaint about a school fee refund | No | 0.55 |

Look at the 0.58. The best-scoring harmless sentence stood closer to the first than one of the identifying sentences, which scored 0.54. So a cut-off that caught the three identifying sentences would catch two harmless ones too.

Why did this happen? The map was grouping the sentences by topic. The first sentence is about a village, a person and a hospital. A sentence about a ration order in a village lands nearby. It is also about a village. But whether a sentence points to one person is not a question of topic.

::: key Closeness is not risk
The map finds things that mean what a question means. Alone, it cannot tell if a sentence points to one human being. Anaya did not feel beaten by this. She felt more exact. She would need to add something for that quality. She wrote the finding as the second row of a table of where each method wins. It showed where the rule-based method wins, where the meaning-based method wins, and what neither can do.
:::

## What the map cannot say

The map shares one flaw with the plain method. Ask it a question that none of the cards answers. It still gives back the nearest card with a score. The score is lower than a good match, but it is not zero. Nothing in the system says "nobody here knows". The least bad card would still go to the model as if it were proof.

That was true on Monday, said Anaya. Imran agreed it was still true.

But now text could be found by meaning as well as by words. So the team could find out how often the system was wrong. That was the next job, and the more important one.

## Summary

An embedding puts a piece of text on a map of meaning, as a long list of numbers. Texts with similar meanings stand close together, even with no shared words. Finding the right pieces becomes a matter of distance.

- The distance is reported as a similarity score. It means nothing until you know what clearly good and clearly bad matches score.
- The map is only as good as the text it learned from. So it can place local words badly. Name the failures before a user finds them.
- Closeness on the map is about meaning and topic. It is not every quality a sentence may have. A method that finds sentences on one topic will not always find the ones that point to a person.

Next, the founders ask if the tool is good. The team has only a few good runs to show.

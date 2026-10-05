---
title: The Number in the Chat
summary: A product manager finds identity numbers in a week of customer chats and must decide whether the finding deserves a year of work. The chapter introduces personal data, counting before deciding, choosing between problems, and the written decision.
course: a1
goals:
  - recognise personally identifiable information, including details that identify a person only in combination
  - turn an impression into a count and say what the count does and does not show
  - compare competing problems on the same four questions
  - record a decision together with its evidence and the conditions that would reverse it
terms:
  - PII | personally identifiable information: any detail that can point to one real person, such as a name, a phone number or an identity number | personally identifiable information, personal data
  - decision log | a running page where you write down each important decision, the evidence behind it, and what would make you change your mind | decision-log
---

In the second week of March, Anaya Deshmukh, a product manager at the Pune company Sahaj, read four hundred conversations between customers and the company's support chatbot. She was looking for the reason so many customers asked about late fees. In conversation sixty-one a customer had typed a twelve-digit identity number into the chat, in the middle of a sentence, and nobody had asked for it. By the end of the evening she had found thirty-seven conversations of the four hundred that contained an identity number, a tax number, a bank account or a full address.

This chapter follows what she did with that finding. The case introduces three habits that the rest of the book relies on: measuring before deciding, comparing problems on common terms, and writing a decision down in a form that allows it to be reversed. It also introduces the first technical term of the book, *personally identifiable information*.

## The case: a week of chats

Sahaj runs a mobile app in which people pay electricity bills and, since the previous year, apply for small loans. A support chatbot in one corner of the app answers questions at any hour. Farah Sheikh, who leads the support team, had exported a week of its conversations for Anaya. The company expected each product manager to propose one large piece of work for the year by April, and Anaya had been reading the chats to find out where customers were struggling.

Conversation sixty-one looked like this.

```
Customer: loan ka status batao, mera aadhaar 4321 5678 9012 hai
Bot:      Aapke loan ka status dekhne ke liye apna registered mobile number bataiye.
Customer: 9876543210
Bot:      Dhanyavaad. Aapka application review mein hai.
```

The Aadhaar number is the identity number that the Indian government issues to residents. It is printed on a card in groups of four digits, and most adults know where theirs is kept. The chatbot had asked only for a mobile number. The customer offered the more valuable one on their own initiative, probably to be helpful.

Further down the export Anaya found a PAN, the ten-character tax code, typed in capitals inside a sentence about a delayed refund. She found a full home address, and a photograph of a bank passbook that the chat window had accepted without any warning.

## Where a typed number goes

It is natural to assume that a number typed into a chat window stays in the chat window. In practice a message is copied into several places, each with its own staff, backups and rules about who may read it. At Sahaj the message passed through five of them.

1. The support system, which stores the history so that agents can read it.
2. The weekly export, which is how the numbers reached Anaya's inbox.
3. The software, owned by an outside company, that writes the chatbot's replies.
4. The analytics dashboard, which counts conversations.
5. The logs that engineers read when something breaks.

A number that is typed once is therefore stored five times, by at least two organisations.

::: def Personally identifiable information (PII)
Any detail that can point to one real person, either alone or when combined with other details. The test is a question: could this detail, together with what else is known, identify one individual?
:::

The test explains why PII is wider than the obvious identity numbers. Some details identify a person on their own. Others identify only in combination, and the combination becomes sharper the smaller the group is.

Table: How well some common details identify a person
| Detail | Identifies alone? | Comment |
| --- | --- | --- |
| Aadhaar number | Yes | Unique to one resident |
| Mobile number | Yes | Usually one subscriber, reachable directly |
| Full home address | Usually | Identifies a household, and so often one person |
| Age | No | Shared by millions |
| Village | No | Shared by hundreds of people |
| Age, village and occupation | Often | A 52-year-old dentist in a village of 800 is probably one person |

The last row is the one that matters most in practice. Removing every obvious number from a message does not make it anonymous, because the remaining details may still describe a single individual. Chapters 28 and 29 return to this point when they consider what a company may lawfully send to an outside service. Nothing in this book is legal advice.

## From impression to count

At this point Anaya had a strong impression and no evidence. An impression is useful for deciding where to look, but it cannot be checked by anyone else and it cannot be compared with another impression. Her first step was therefore to turn it into a count.

She added a column to the spreadsheet with the heading "Something that belongs to one person only?" and read all four hundred conversations again, holding a ruler under each line. The second reading took two hours. Thirty-seven conversations contained at least one identity number, tax number, bank account or full address. That is 9.25 percent, or about one conversation in eleven.

::: watch A count is not yet a finding
Anaya wrote the limits of the figure beside it. It came from one week, in one chatbot, counted by one person who had been looking for exactly this. A different week, a second reader or a broader definition of "personal" would each have given a different number. The figure justified looking harder. It did not justify a conclusion.
:::

Stating the limits next to the number is a habit of the trade. A figure that travels without its limits is repeated in later meetings with more confidence than it deserves.

## Choosing between three problems

Anaya now had three candidate projects. The first was a tool that read each week's support tickets and reported the main themes, which would save Farah a Monday morning of manual sorting. The second was a feature that read photographs of salary slips to speed up the checks made by loan officers. The third was the problem in the chats, which she had not chosen. It had found her, and she regarded that as a reason for suspicion.

She compared them with four questions that apply to almost any proposal.

1. Is there a user she can reach this week?
2. Is there a task she can watch someone do?
3. Is there a pain she can count?
4. Is there a real reason that software which reads text might help, as against ordinary software?

Table: The three candidates against the four questions
| | Weekly ticket themes | Salary-slip reader | Personal details in chats |
| --- | --- | --- | --- |
| A user she can reach this week | Farah | Two loan officers | Farah, Imran, Lakshmi |
| A task she can watch | Every Monday | Possible, slow to arrange | The transcripts are on her screen |
| A pain she can count | Three hours a week | Minutes per loan | 37 in 400 |
| A real reason for AI | Maybe; tickets already carry tags | Yes, but photographs of paper are hard | Partly |

The fourth question needs the most honesty. A twelve-digit number written in four groups can be found by a plain rule: look for twelve digits and check the grouping. No intelligence is required. The difficulty lies elsewhere. People do not always write numbers the way the card prints them, and names and addresses follow no pattern at all. Customers also write in Hindi, in English and in the mixture of the two that fills phone keyboards late at night. A rule could solve part of the problem, and the remainder might need something more flexible. Anaya recorded both halves.

Part of a product manager's work is to say, early, that a problem does not need artificial intelligence. The statement is unfashionable and often correct, and it prevents money being spent on a harder solution than the problem requires.

The third candidate scored best, though not by a wide margin. Its advantage was that she could show her working for every cell in its column.

## Writing the decision down

Having chosen, Anaya opened a new document and recorded the choice in a fixed format: the date, the decision, the evidence for it, and the circumstances in which she would reverse it. A page kept this way is a *decision log*.

::: example The first entry in Anaya's decision log
```
14 March
Decision:  Work on the personal-details problem first. Ticket themes second.
Evidence:  37 of 400 conversations in one week contained an identity number,
           a tax number, a bank account or a full address. My count; Farah
           can check it.
I would change my mind if:  Lakshmi says this is a known, accepted risk, or
           Imran says it cannot be fixed without rebuilding the chatbot.
```
:::

The final line gives the log its value. A decision with no stated exit tends to harden into a belief, and the people who made it then defend it for reasons of pride. A decision that names its own reversal conditions can be reopened calmly, because the question to ask is already written down.

## Measuring yourself

The last task of the evening came from the habit of recording evidence. Anaya scored her own skills on seven areas of product work: finding real problems by talking to people, choosing which to solve, understanding the technology well enough to argue with engineers, turning a decision into something others can build, measuring results, working out whether the product can pay for itself, and getting people with different goals to move together.

Table: The scale used for each area
| Score | Meaning |
| --- | --- |
| 0 | Nothing to show |
| 1 | Tried, but cannot prove it |
| 2 | Usable work that someone else can check |
| 3 | Tested on real people or real data, with its limits written down |

She gave herself a 2 for finding problems, since she now had a count, and a 1 for strategy, since no colleague had ever acted on one of her strategies. She first gave herself a 1 for understanding the technology, crossed it out, and wrote a lower honest figure. She could say in a meeting that the chatbot was powered by AI. She could not have explained that sentence to a curious twelve-year-old. The scores stay in her notes and are revisited at the end of the book. Her working rule, written at the top of the page, was that nothing counts until someone else could check it.

Before leaving she wrote to Imran Qureshi, the lead engineer, and asked for an hour the next day. The question of how much of the problem was ordinary engineering and how much was something new was his to help with, and it begins the next chapter.

## Summary

A typed number is copied to every system that touches a conversation, so one entry becomes several stored copies held by more than one organisation.

- PII is any detail that can point to one real person, alone or in combination. Details that are harmless separately can identify someone when joined.
- An impression becomes usable when it is counted, and the count is reported with its limits: the sample, the reader and the definition.
- Competing problems are compared on the same four questions: a reachable user, a watchable task, a countable pain, and a real reason for AI.
- A decision log records the date, the decision, the evidence and the conditions for changing course.
- Self-assessment on a fixed scale gives a baseline that can be rechecked later.

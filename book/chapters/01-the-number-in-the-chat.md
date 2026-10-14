---
title: The Number in the Chat
summary: A product manager finds identity numbers in a week of customer chats and has to decide whether the finding deserves a year of work. Along the way you learn about personal data, counting before deciding, choosing between problems, and writing a decision down.
course: a1
goals:
  - recognise personally identifiable information, including details that identify a person only when they are put together
  - turn an impression into a count, and say what the count does and does not show
  - compare competing problems on the same four questions
  - record a decision together with its evidence and the conditions that would reverse it
terms:
  - PII | personally identifiable information: any detail that can point to one real person, such as a name, a phone number or an identity number | personally identifiable information, personal data
  - decision log | a running page where you write down each important decision, the evidence behind it, and what would make you change your mind | decision-log
---

In the second week of March, Anaya Deshmukh sat down with four hundred conversations. She is a product manager at Sahaj, a company in Pune, and the conversations were between customers and the company's support chatbot. She was trying to find out why so many customers asked about late fees.

In conversation sixty-one, a customer had typed a twelve-digit identity number in the middle of a sentence. Nobody had asked for it. By the end of the evening she had found thirty-seven conversations out of the four hundred that held an identity number, a tax number, a bank account or a full address.

This chapter follows what she did next. Along the way you'll pick up three habits that the rest of the book depends on. You measure before you decide. You compare problems on common terms. And you write a decision down in a way that lets you change it later. You'll also meet the first technical term of the book, *personally identifiable information*.

## The case: a week of chats

Sahaj runs a mobile app where people pay electricity bills and, since last year, apply for small loans. In one corner of the app, a support chatbot answers questions at any hour.

Farah Sheikh leads the support team. She had exported a week of the chatbot's conversations for Anaya. There was a reason Anaya wanted them. By April, each product manager at Sahaj was expected to propose one large piece of work for the year. Anaya was reading the chats to see where customers were struggling.

Here is what conversation sixty-one looked like.

```
Customer: loan ka status batao, mera aadhaar 4321 5678 9012 hai
Bot:      Aapke loan ka status dekhne ke liye apna registered mobile number bataiye.
Customer: 9876543210
Bot:      Dhanyavaad. Aapka application review mein hai.
```

The Aadhaar number is the identity number that the Indian government gives to every resident. It is printed on a card in groups of four digits, and most adults know where theirs is kept. The chatbot had only asked for a mobile number. The customer offered the more valuable number on their own, probably trying to be helpful.

Further down the export, Anaya found more. There was a PAN, the ten-character tax code, typed in capitals inside a sentence about a delayed refund. There was a full home address. And there was a photograph of a bank passbook, which the chat window had accepted without any warning.

## Where a typed number goes

It's natural to think that a number typed into a chat window stays in the chat window. It doesn't. A message gets copied into several places, and each place has its own staff, its own backups and its own rules about who may read it.

At Sahaj, a message passed through five of them.

1. The support system, which stores the history so that agents can read it.
2. The weekly export, which is how the numbers reached Anaya's inbox.
3. The software, owned by an outside company, that writes the chatbot's replies.
4. The analytics dashboard, which counts conversations.
5. The logs that engineers read when something breaks.

So a number typed once is stored five times, and at least two organisations hold a copy.

Now we can give these numbers a name. Anyone who works with customer data needs the term.

::: def Personally identifiable information (PII)
Any detail that can point to one real person, either alone or when it's combined with other details. The test is a question: could this detail, together with what else is known, identify one individual?
:::

That test explains why PII is wider than the obvious identity numbers. Some details identify a person all by themselves. Others only do it in combination, and the combination gets sharper as the group gets smaller. The table shows how this works. Look at the last row in particular.

Table: How well some common details identify a person
| Detail | Identifies alone? | Comment |
| --- | --- | --- |
| Aadhaar number | Yes | Unique to one resident |
| Mobile number | Yes | Usually one subscriber, reachable directly |
| Full home address | Usually | Identifies a household, and so often one person |
| Age | No | Shared by millions |
| Village | No | Shared by hundreds of people |
| Age, village and occupation | Often | A 52-year-old dentist in a village of 800 is probably one person |

That last row matters most in practice. You can remove every obvious number from a message and still not make it anonymous, because the details that remain may describe a single person. Chapters 28 and 29 come back to this when they ask what a company may lawfully send to an outside service. Nothing in this book is legal advice.

## From impression to count

At this point Anaya had a strong feeling that something was wrong, and no evidence. A feeling is useful for deciding where to look. But nobody else can check it, and you can't compare it with another feeling. So her first step was to turn it into a count.

She added a column to the spreadsheet with the heading "Something that belongs to one person only?" Then she read all four hundred conversations again, holding a ruler under each line. The second reading took two hours.

Thirty-seven conversations contained at least one identity number, tax number, bank account or full address. That is 9.25 percent, or about one conversation in eleven.

::: watch A count is not yet a finding
Anaya wrote the limits of the figure right beside it. It came from one week, in one chatbot, counted by one person who had been looking for exactly this. A different week, a second reader or a broader meaning of "personal" would each have given a different number. The figure was a good reason to look harder. It was not a reason to draw a conclusion.
:::

Writing the limits next to the number is a habit worth copying. A figure that travels without its limits gets repeated in later meetings with more confidence than it deserves.

## Choosing between three problems

Anaya now had three possible projects.

The first was a tool that read each week's support tickets and reported the main themes. It would save Farah a Monday morning of sorting by hand. The second was a feature that read photographs of salary slips, to speed up the checks that loan officers make. The third was the problem in the chats. She hadn't chosen this one. It had found her, and she took that as a reason to be suspicious of it.

To compare the three fairly, she used four questions that fit almost any proposal.

1. Is there a user she can reach this week?
2. Is there a task she can watch someone do?
3. Is there a pain she can count?
4. Is there a real reason that software which reads text might help, rather than ordinary software?

Read the table one column at a time, and see what she could write in each cell.

Table: The three candidates against the four questions
| | Weekly ticket themes | Salary-slip reader | Personal details in chats |
| --- | --- | --- | --- |
| A user she can reach this week | Farah | Two loan officers | Farah, Imran, Lakshmi |
| A task she can watch | Every Monday | Possible, slow to arrange | The transcripts are on her screen |
| A pain she can count | Three hours a week | Minutes per loan | 37 in 400 |
| A real reason for AI | Maybe; tickets already carry tags | Yes, but photographs of paper are hard | Partly |

The fourth question needs the most honesty. Think about the Aadhaar number. It has twelve digits in four groups, so a plain rule can find it. Look for twelve digits and check the grouping. No intelligence is needed.

The hard part is elsewhere. People don't always write numbers the way the card prints them. Names and addresses follow no pattern at all. And customers write in Hindi, in English, and in the mixture of the two that fills phone keyboards late at night. A rule could solve part of the problem. The rest might need something more flexible. Anaya wrote down both halves.

Part of a product manager's job is to say early that a problem doesn't need artificial intelligence. It's an unfashionable thing to say, and it's often right. It saves money that would otherwise go into a harder solution than the problem needs.

The third candidate scored best, though not by much. Its real advantage was that she could show her working for every cell in its column.

## Writing the decision down

Once she had chosen, Anaya opened a new document and recorded the choice in a fixed format. It held the date, the decision, the evidence, and the circumstances in which she would reverse it. A page kept this way is called a *decision log*.

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

The last line is what gives the log its value. A decision with no stated way out tends to harden into a belief, and then the people who made it defend it out of pride. A decision that names its own reversal conditions can be reopened calmly. The question to ask is already written down.

## Measuring yourself

There was one more task that evening, and it grew out of the same habit of recording evidence. Anaya scored her own skills in seven areas of product work.

- Finding real problems by talking to people.
- Choosing which problems to solve.
- Understanding the technology well enough to argue with engineers.
- Turning a decision into something others can build.
- Measuring results.
- Working out whether the product can pay for itself.
- Getting people with different goals to move together.

For each area she used a simple scale, shown below.

Table: The scale used for each area
| Score | Meaning |
| --- | --- |
| 0 | Nothing to show |
| 1 | Tried, but cannot prove it |
| 2 | Usable work that someone else can check |
| 3 | Tested on real people or real data, with its limits written down |

She gave herself a 2 for finding problems, because she now had a count. She gave herself a 1 for strategy, because no colleague had ever acted on one of her strategies.

For understanding the technology, she first wrote a 1, then crossed it out and wrote a lower, honest figure. She could say in a meeting that the chatbot was powered by AI. She could not have explained that sentence to a curious twelve-year-old.

The scores stay in her notes, and she revisits them at the end of the book. Her working rule, written at the top of the page, was simple: nothing counts until someone else could check it.

Before she left, she wrote to Imran Qureshi, the lead engineer, and asked for an hour the next day. How much of the problem was ordinary engineering, and how much was something new? That was his question to help with, and it starts the next chapter.

## Summary

A typed number is copied to every system that touches a conversation. So one entry becomes several stored copies, held by more than one organisation.

- PII is any detail that can point to one real person, alone or in combination. Details that are harmless separately can identify someone when they are joined.
- An impression becomes usable when you count it. Report the count with its limits: the sample, the reader and the definition.
- Compare competing problems on the same four questions: a reachable user, a watchable task, a countable pain, and a real reason for AI.
- A decision log records the date, the decision, the evidence and the conditions for changing course.
- Scoring yourself on a fixed scale gives you a starting point you can check again later.

Next, Anaya sits down with Imran to find out how much of this is really new.

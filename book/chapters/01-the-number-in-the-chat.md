---
title: The Number in the Chat
summary: A product manager finds identity numbers in a week of customer chats. She must decide if this is worth a year of work. You learn what personal data is, why you count before you decide, how to pick between problems, and how to write a decision down.
course: a1 a1g
goals:
  - spot personal details that point to one person, including details that do this only when put together
  - turn a feeling into a count, and say what the count shows and what it does not
  - compare different problems by asking the same four questions about each
  - write down a decision with its evidence and the things that would make you change it
terms:
  - PII | personally identifiable information: any detail that can point to one real person, such as a name, a phone number or an identity number | personally identifiable information, personal data
  - decision log | a running page where you write down each big decision, the evidence for it, and what would make you change your mind | decision-log
  - repository | an online folder, on a site such as GitHub, that keeps all of a project's work and every older version of it | repositories
---

In the second week of March, Anaya Deshmukh sat down with four hundred conversations. She is a product manager at Sahaj, a company in Pune. The conversations were between customers and the company's support chatbot. She wanted to know why so many customers asked about late fees.

In conversation sixty-one, a customer had typed a twelve-digit identity number in the middle of a sentence. Nobody had asked for it. By the end of the evening she had found thirty-seven conversations out of the four hundred with something private in them. It was an identity number, a tax number, a bank account or a full address.

This chapter follows what she did next. You will pick up three habits that the rest of the book depends on. First, you measure before you decide. Second, you compare problems in the same way. Third, you write a decision down so that you can change it later. You will also meet the first technical term of the book. It is *personally identifiable information*.

## The case: a week of chats

Sahaj runs a mobile app. People use it to pay electricity bills. Since last year they can also apply for small loans. In one corner of the app, a support chatbot answers questions at any hour.

Farah Sheikh leads the support team. She had saved a week of the chatbot's conversations into a file and sent it to Anaya. Anaya had a reason for wanting it. By April, every product manager at Sahaj had to suggest one big piece of work for the year. Anaya was reading the chats to see where customers were stuck.

Here is what conversation sixty-one looked like.

```
Customer: loan ka status batao, mera aadhaar 4321 5678 9012 hai
Bot:      Aapke loan ka status dekhne ke liye apna registered mobile number bataiye.
Customer: 9876543210
Bot:      Dhanyavaad. Aapka application review mein hai.
```

The Aadhaar number is the identity number that the Indian government gives to every resident. It is printed on a card in groups of four digits. Most adults know where their card is kept. The chatbot had only asked for a mobile number. The customer gave the more valuable number on their own. They were probably trying to help.

Further down the file, Anaya found more. There was a PAN, the ten-character tax code. It was typed in capital letters inside a sentence about a late refund. There was a full home address. And there was a photograph of a bank passbook. The chat window had accepted it without any warning.

## Where a typed number goes

It is natural to think that a number typed into a chat window stays in the chat window. It does not. A message gets copied into several places. Each place has its own staff, its own backups and its own rules about who may read it.

At Sahaj, a message passed through five of these places.

1. The support system, which keeps the history so that agents can read it.
2. The weekly export, which is how the numbers reached Anaya's inbox.
3. The software, owned by an outside company, that writes the chatbot's replies.
4. The analytics dashboard, which counts conversations.
5. The logs that engineers read when something breaks.

So a number typed once is stored five times. At least two organisations hold a copy.

Think of a person's diary. It holds things that belong to one person, and only that person should decide who reads them. These numbers are like pages from that diary. Now we can give them a name. Anyone who works with customer data needs it.

::: def Personally identifiable information (PII)
Any detail that can point to one real person. It can do this alone, or when it is put together with other details. The test is a question. Could this detail, with what else is known, tell us who one person is?
:::

This test shows why PII is wider than the obvious identity numbers. Some details point to a person all by themselves. Others do it only in a group. The smaller the group, the sharper the point. The table shows how this works. Look at the last row most closely.

Table: How well some common details identify a person
| Detail | Identifies alone? | Comment |
| --- | --- | --- |
| Aadhaar number | Yes | Unique to one resident |
| Mobile number | Yes | Usually one subscriber, reachable directly |
| Full home address | Usually | Points to a household, and so often to one person |
| Age | No | Shared by millions |
| Village | No | Shared by hundreds of people |
| Age, village and occupation | Often | A 52-year-old dentist in a village of 800 is probably one person |

That last row matters most in real work. You can take out every obvious number from a message, and it still may not be anonymous. The details left behind may describe just one person. Chapters 28 and 29 come back to this. There they ask what a company may legally send to an outside service. Nothing in this book is legal advice.

## From impression to count

At this point Anaya had a strong feeling that something was wrong. She had no proof. A feeling helps you decide where to look. But nobody else can check it. And you cannot compare it with another feeling. So her first step was to turn it into a count.

She added a column to the spreadsheet. Its heading was "Something that belongs to one person only?" Then she read all four hundred conversations again. She held a ruler under each line as she went. The second reading took two hours.

Thirty-seven conversations had at least one identity number, tax number, bank account or full address. That is 9.25 percent. It is about one conversation in eleven.

::: watch A count is not yet a finding
Anaya wrote the limits of the number right beside it. It came from one week. It came from one chatbot. It was counted by one person who was looking for exactly this. A different week, a second reader, or a wider meaning of "personal" would each give a different number. The number was a good reason to look harder. It was not a reason to reach a conclusion.
:::

Writing the limits next to the number is a habit worth copying. A number that travels without its limits gets repeated in later meetings with more trust than it has earned.

## Choosing between three problems

Anaya now had three possible projects.

The first was a tool that read each week's support tickets and reported the main themes. It would save Farah a Monday morning of sorting by hand. The second was a feature that read photographs of salary slips. It would speed up the checks that loan officers make.

The third was the problem in the chats. She had not chosen this one. It had found her. She took that as a reason to doubt it.

To compare the three fairly, she used four questions. They fit almost any proposal.

1. Is there a user she can reach this week?
2. Is there a task she can watch someone do?
3. Is there a pain she can count?
4. Is there a real reason why software that reads text might help, and not ordinary software?

Read the table one column at a time. See what she could write in each cell.

Table: The three candidates against the four questions
| | Weekly ticket themes | Salary-slip reader | Personal details in chats |
| --- | --- | --- | --- |
| A user she can reach this week | Farah | Two loan officers | Farah, Imran, Lakshmi |
| A task she can watch | Every Monday | Possible, slow to arrange | The transcripts are on her screen |
| A pain she can count | Three hours a week | Minutes per loan | 37 in 400 |
| A real reason for AI | Maybe; tickets already carry tags | Yes, but photographs of paper are hard | Partly |

The fourth question needs the most honesty. Think about the Aadhaar number. It has twelve digits in four groups. So a plain rule can find it. Look for twelve digits and check the groups. This needs no intelligence.

The hard part is somewhere else. People do not always write numbers the way the card prints them. Names and addresses follow no pattern at all. And customers write in Hindi, in English, and in the mix of the two that fills phone keyboards late at night. A rule could solve part of the problem. The rest might need something more flexible. Anaya wrote down both halves.

Part of a product manager's job is to say early that a problem does not need artificial intelligence. Few people like to say it. It is often right. It saves money that would go into a harder answer than the problem needs.

The third candidate scored best, but not by much. Its real strength was that she could show her working for every cell in its column.

## Writing the decision down

Once she had chosen, Anaya opened a new document and wrote the choice in a fixed format. It had the date, the decision, the evidence, and the situations where she would reverse it. A page kept this way is called a *decision log*.

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

The last line is what makes the log useful. A decision with no way out slowly hardens into a belief. Then the people who made it defend it out of pride. A decision that names its own reversal conditions can be reopened calmly. The question to ask is already written down.

She did not keep the page on her laptop. Imran showed her where the engineers kept their work. It was a *repository* on GitHub. A repository is an online folder that remembers every version of every file, like a cupboard that keeps every old copy of your notes.

Each time she saved a change, she wrote one line saying what had changed and why. The old version stayed beside the new one. A decision log kept there cannot quietly change its mind. Every older version is still there for anyone to read.

## Measuring yourself

There was one more task that evening. It grew out of the same habit of writing down evidence. Anaya scored her own skills in seven areas of product work.

- Finding real problems by talking to people.
- Choosing which problems to solve.
- Knowing the technology well enough to argue with engineers.
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

She gave herself a 2 for finding problems, because she now had a count. She gave herself a 1 for strategy. No colleague had ever acted on one of her strategies.

Both scores had a story behind them. Before Sahaj, Anaya had run the rollout of a state electricity utility's bill-payment system. It was dates, status reports and a monthly meeting with senior officials. She was good at it. For turning a decision into something others can build, she gave herself a 3. But nobody on that project had asked her which problem the rollout should solve. That had been decided before she arrived.

For understanding the technology, she first wrote a 1. Then she crossed it out and wrote a lower, honest number. She could say in a meeting that the chatbot was powered by AI. She could not have explained that sentence to a curious twelve-year-old.

The scores stay in her notes. She looks at them again at the end of the book. Her rule, written at the top of the page, was simple: nothing counts until someone else could check it.

Before she left, she wrote to Imran Qureshi, the lead engineer. She asked for an hour the next day. How much of the problem was ordinary engineering, and how much was something new? Imran could help with that question. It starts the next chapter.

## Summary

A typed number is copied to every system that touches a conversation. So one entry becomes several stored copies, held by more than one organisation.

- PII is any detail that can point to one real person, alone or in a group. Details that are harmless on their own can identify someone when they are joined.
- A feeling becomes useful when you count it. Report the count with its limits: the sample, the reader and the meaning you used.
- Compare different problems by asking the same four questions: a reachable user, a watchable task, a countable pain, and a real reason for AI.
- A decision log records the date, the decision, the evidence and the conditions for changing course.
- Scoring yourself on a fixed scale gives you a starting point you can check again later.

Next, Anaya sits down with Imran to find out how much of this is really new.

---
title: The Number in the Chat
summary: A product manager finds identity numbers in a week of customer chats. She must decide if this is worth a year of work. You learn what personal data is. You learn why you count before you decide, how to pick between problems, and how to write a decision down.
course: a1 a1g
goals:
  - spot personal details that point to one person, even when they do so only together
  - turn a feeling into a count, and say what the count shows and what it does not
  - compare problems by asking the same four questions about each
  - write a decision down with its proof, and what would make you change it
terms:
  - PII | someone's diary page. Any detail that can point to one real person, such as a name, a phone number or an identity number | personally identifiable information, personal data
  - decision log | a diary for big choices. A page where you write each big decision, the proof for it, and what would make you change your mind | decision-log
  - repository | a cupboard that keeps every old copy of your notes. An online folder, on a site such as GitHub, that keeps a project's work and every older version | repositories
---

In the second week of March, Anaya Deshmukh sat down with four hundred conversations. She is a product manager at Sahaj, a company in Pune. A product manager decides what the company should build next. The conversations were between customers and the company's support chatbot. A chatbot is a helper that types answers back. She wanted to know why so many customers asked about late fees.

In conversation sixty-one, a customer had typed a twelve-digit identity number. It sat in the middle of a sentence. Nobody had asked for it. By evening she had found thirty-seven conversations out of the four hundred with something private in them. It was an identity number, a tax number, a bank account or a full address.

This chapter follows what she did next. You will pick up three habits. The rest of the book depends on them. First, you measure before you decide. Second, you compare problems in the same way. Third, you write a decision down so you can change it later. You will also meet the first technical term of the book. It is *personally identifiable information*.

## The case: a week of chats

Sahaj runs a mobile app. People use it to pay electricity bills. Since last year they can also apply for small loans. In one corner of the app, a support chatbot answers questions at any hour. It is like a help desk that never closes.

Farah Sheikh leads the support team. She saved a week of the chatbot's conversations in a file. She sent the file to Anaya. Anaya had a reason to want it. By April, every product manager at Sahaj had to suggest one big piece of work for the year. Anaya was reading the chats to see where customers got stuck.

Here is what conversation sixty-one looked like.

```
Customer: loan ka status batao, mera aadhaar 4321 5678 9012 hai
Bot:      Aapke loan ka status dekhne ke liye apna registered mobile number bataiye.
Customer: 9876543210
Bot:      Dhanyavaad. Aapka application review mein hai.
```

The Aadhaar number is the identity number the Indian government gives to every resident. It is printed on a card in groups of four digits. Most adults know where their card is kept. The chatbot had only asked for a mobile number. The customer gave the more valuable number on their own. They were probably trying to help.

Further down the file, Anaya found more. There was a PAN, the ten-character tax code. It sat in capital letters inside a sentence about a late refund. There was a full home address. And there was a photograph of a bank passbook (the little book that lists your bank account). The chat window had accepted it without any warning.

## Where a typed number goes

It is natural to think a number typed into a chat window stays there. It does not. Think of a photocopier in a busy office. One page goes in. Many copies come out. Each copy ends up in a different drawer. Each drawer has its own staff, its own backups (spare copies kept in case something is lost) and its own rules about who may read it.

At Sahaj, a message passed through five of these drawers.

1. The support system, which keeps the history so that agents can read it.
2. The weekly export (a copy of the data saved out into a file), which is how the numbers reached Anaya's inbox.
3. The software, owned by an outside company (a vendor), that writes the chatbot's replies.
4. The analytics dashboard (one screen of numbers), which counts conversations.
5. The logs (a running diary a computer keeps), which engineers read when something breaks.

So a number typed once is stored five times. At least two companies hold a copy.

Now think of a person's diary. It holds things that belong to one person. Only that person should decide who reads it. These numbers are like pages torn from that diary. Now we can give them a name. Anyone who works with customer data needs it.

::: def Personally identifiable information (PII)
Think of a page from someone's diary. PII is any detail that can point to one real person. It can do this alone, or when it is put together with other details. The test is a question. Could this detail, with what else is known, tell us who one person is?
:::

This test shows why PII is wider than the obvious identity numbers. Some details point to a person all by themselves. Others do it only in a group. The smaller the group, the sharper the point. Think of a school class. "A girl" does not find anyone. "A girl who sits at the back, wears green and plays the flute" finds one child. The table shows how this works. Look at the last row most closely.

Table: How well some common details identify a person
| Detail | Identifies alone? | Comment |
| --- | --- | --- |
| Aadhaar number | Yes | Unique to one resident |
| Mobile number | Yes | Usually one subscriber, reachable directly |
| Full home address | Usually | Points to a household, and so often to one person |
| Age | No | Shared by millions |
| Village | No | Shared by hundreds of people |
| Age, village and occupation | Often | A 52-year-old dentist in a village of 800 is probably one person |

That last row matters most in real work. You can take every obvious number out of a message. It may still not be anonymous. The details left behind may describe just one person. Chapters 28 and 29 come back to this. There they ask what a company may legally send to an outside service. Nothing in this book is legal advice.

## From impression to count

At this point Anaya had a strong feeling that something was wrong. She had no proof. A feeling helps you decide where to look. But nobody else can check it. You cannot compare it with another feeling either. It is like saying "this bag feels heavy". A weighing scale says "four kilos". So her first step was to turn the feeling into a count.

She added a column to the spreadsheet. Its heading was "Something that belongs to one person only?" Then she read all four hundred conversations again. She held a ruler under each line as she went. The second reading took two hours.

Thirty-seven conversations had at least one identity number, tax number, bank account or full address. That is 9.25 percent. It is about one conversation in eleven.

::: watch A count is not yet a finding
Anaya wrote the limits of the number right beside it. It came from one week. It came from one chatbot. One person counted it, and she was looking for exactly this. A different week, a second reader, or a wider meaning of "personal" would each give a different number. The number was a good reason to look harder. It was not a reason to reach a conclusion.
:::

Write the limits next to the number. It is a habit worth copying. A number that travels without its limits gets repeated in later meetings. It gets more trust than it has earned.

## Choosing between three problems

Anaya now had three possible projects. Think of a cook with three hungry guests and one stove. She can cook only one dish first.

The first was a tool that read each week's support tickets (the written complaints and questions from customers). It would report the main themes. It would save Farah a Monday morning of sorting by hand. The second was a feature that read photographs of salary slips. It would speed up the checks that loan officers make.

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

Part of a product manager's job is to say early that a problem does not need artificial intelligence. Few people like to say it. It is often right. It saves money that would go into a bigger answer than the problem needs. Do not buy a truck to carry one bag.

The third candidate scored best, but not by much. Its real strength was that she could show her working for every cell in its column.

## Writing the decision down

Once she had chosen, Anaya opened a new document. She wrote the choice in a fixed format. It had the date, the decision, the proof, and the situations where she would reverse it. A page kept this way is called a *decision log*. Think of it as a recipe card for a choice. It says what you cooked, why, and when you would cook it differently.

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

She did not keep the page on her laptop. Imran showed her where the engineers kept their work. It was a *repository* on GitHub. A repository is an online folder that remembers every version of every file. It is like a cupboard that keeps every old copy of your notes.

Each time she saved a change, she wrote one line. It said what had changed and why. The old version stayed beside the new one. A decision log kept there cannot quietly change its mind. Every older version is still there for anyone to read.

## Measuring yourself

There was one more task that evening. It grew out of the same habit of writing down proof. Anaya scored her own skills in seven areas of product work. It is like checking your own marksheet before the exam, not after.

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

She gave herself a 2 for finding problems, because she now had a count. She gave herself a 1 for strategy (choosing where the company should go). No colleague had ever acted on one of her strategies.

Both scores had a story behind them. Before Sahaj, Anaya had run the rollout of a state electricity company's bill-payment system. A rollout is the plan for getting a new system to its users. That meant dates, status reports and a monthly meeting with senior officials. She was a project manager, and a good one. A project manager makes sure the train leaves on time. A product manager decides where the train should go. For turning a decision into something others can build, she gave herself a 3. But nobody on that project had asked her which problem the rollout should solve. That was decided before she arrived.

For understanding the technology, she first wrote a 1. Then she crossed it out and wrote a lower, honest number. She could say in a meeting that the chatbot was powered by AI. She could not have explained that sentence to a curious twelve-year-old.

The scores stay in her notes. She looks at them again at the end of the book. Her rule, written at the top of the page, was short: nothing counts until someone else could check it.

Before she left, she wrote to Imran Qureshi, the lead engineer (the person in charge of building the software). She asked for an hour the next day. How much of the problem was ordinary engineering, and how much was something new? Imran could help with that question. It starts the next chapter.

## Summary

Think of the photocopier. A typed number is copied into every system that touches a conversation. So one entry becomes several stored copies. More than one company holds them.

- PII is any detail that can point to one real person, alone or in a group. Details that are harmless alone can identify someone when they are joined.
- A feeling becomes useful when you count it. Report the count with its limits: the sample, the reader and the meaning you used.
- Compare problems by asking the same four questions: a reachable user, a watchable task, a countable pain, and a real reason for AI.
- A decision log records the date, the decision, the proof and the conditions for changing course.
- Scoring yourself on a fixed scale gives you a starting point you can check again later.

Next, Anaya sits down with Imran to find out how much of this is really new.

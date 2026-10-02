---
title: The Number in the Chat
summary: A product manager reads a week of customer chats, finds something she did not go looking for, and has to decide whether it is worth a year of her life.
course: a1
terms:
  - PII | personally identifiable information: any detail that can point to one real person, such as a name, a phone number or an identity number | personally identifiable information, personal data
  - decision log | a running page where you write down each important decision, the evidence behind it, and what would make you change your mind | decision-log
---

The first time Anaya Deshmukh saw a stranger's Aadhaar number, she was eating a samosa at her desk and looking for something else entirely.

It was a Tuesday in the second week of March, a little after eight in the evening, and the office above the sweet shop in Baner had emptied hours ago. What was left of the day's smell, hot oil and sugar syrup, came up through the floorboards the way it did every evening. Anaya had a spreadsheet open and a plan. Sahaj, the company she worked for, ran an app where people paid electricity bills and, lately, took small loans. In one corner of the app sat a support chatbot that answered questions at all hours. Farah Sheikh, who led the support team, had exported a week of its conversations, four hundred in all, and Anaya wanted to know why so many customers asked the same three questions about late fees.

She was on conversation sixty-one when she stopped caring about late fees.

```
Customer: loan ka status batao, mera aadhaar 4321 5678 9012 hai
Bot:      Aapke loan ka status dekhne ke liye apna registered mobile number bataiye.
Customer: 9876543210
Bot:      Dhanyavaad. Aapka application review mein hai.
```

The number was twelve digits long and written in neat groups of four, the way it is printed on the card. An Aadhaar number is the identity number the government issues to residents; almost every adult in India knows where theirs is. This customer had typed it without being asked. The chatbot had asked for a mobile number. The customer, being helpful, had offered the most important number they owned.

Anaya did what anyone would do. She scrolled, and found another. Then a PAN, the ten-character code the tax department issues, typed in capitals in the middle of a sentence about a delayed refund. Then a full home address. Then a photograph of a bank passbook, which the chat window had accepted without complaint.

She put the samosa down.

## What a number does after it is typed

It would be easy to think of those numbers as sitting in the chat window, where the customer left them, and nowhere else. That is not how it works, and it took Anaya about ten minutes of thinking to see how far from true it was.

A message typed into a chat box is not kept in one place. It is stored in the support system, so that agents can read the history. It is copied into the weekly export, which is how it had reached Anaya's inbox. It is passed to whatever software writes the chatbot's replies, which belongs to an outside company. It is counted by the analytics dashboard and written into the logs that engineers read when something breaks. Each of those places has its own people, its own backups and its own rules about who may look. A number typed once ends up living in five houses.

The people who write privacy policies have a name for this kind of detail. They call it *personally identifiable information*, or PII for short. The phrase is clumsy, but it is useful, because it describes the test: could this detail, on its own or put together with others, point to one real person? A name passes. So does a mobile number, an address, an Aadhaar number, a bank account. Some details pass only in company. A woman's age means nothing alone, and her village means little, but her age, her village and the fact that she is the only dentist there begin to describe exactly one person. Anaya did not know yet how much that last idea would matter. She only noticed it, the way you notice a crack in a wall before you know it is load-bearing.

## Counting

The temptation at this point was to feel something and then to do something, which is how most bad projects begin. Anaya did neither. She did what a sensible person does with a feeling: she turned it into a count.

She added a column to the spreadsheet and headed it *Something that belongs to one person only?* Then she read all four hundred conversations again, slowly, with a ruler held under each line. It took two hours. The samosa went cold and was eaten anyway.

Thirty-seven of the four hundred contained an identity number, a tax number, a bank account or a full address. That was nine percent, one conversation in eleven.

She was careful about what she wrote next to the figure. It was a count from one week, in one chatbot, made by one person who had been reading for a particular thing. It was not a finding. It was a reason to look harder, and she typed exactly that into the cell beside it.

## Is this the problem?

Anaya had been circling, for a month, the question of what she would work on for the rest of the year. The company wanted a big bet from each product manager by April. She had two ideas already. One was a tool that would read the week's support tickets and report the main themes, so that Farah did not have to spend every Monday morning doing it by hand. The other was a feature that would read photographs of salary slips and speed up the checks the loan officers did.

Now she had a third, and the third was the only one she had not chosen. It had chosen her. That alone made her suspicious of it.

So she did what she had once been taught to do and had never quite done properly: she measured all three against the same four questions. Is there a user she can reach this week? Is there a task she can watch someone do? Is there a pain she can count? And is there a real reason that software which reads text might help, as opposed to ordinary software?

| | Weekly ticket themes | Salary-slip reader | Personal details in chats |
| --- | --- | --- | --- |
| A user she can reach this week | Farah | Two loan officers | Farah, Imran, Lakshmi |
| A task she can watch | Every Monday | Possible, slow to arrange | The transcripts are on her screen |
| A pain she can count | Three hours a week | Minutes per loan | 37 in 400 |
| A real reason for AI | Maybe; tickets already carry tags | Yes, but photographs of paper are hard | Partly |

The fourth row was where she had to be honest. For a twelve-digit number in four neat groups, a plain rule would do: look for twelve digits, find the groups of four, done. No intelligence required. The difficulty was elsewhere. People did not always write numbers the way the card printed them. They wrote names and addresses, which follow no pattern at all. They wrote in Hindi, in English and in the mixture of the two that fills a phone keyboard at eleven at night. Half the problem could be solved by a rule, and she wrote that down. The other half might need something cleverer, and she wrote that down too.

Part of a product manager's job, she reflected, is to say out loud that a problem does not need artificial intelligence. It is an unfashionable thing to say, and it was the first thing she wrote.

## The page that remembers

The third column won. Not by much, and not because it was the most exciting. It won because it was the one for which she could show her working.

She opened a new document, called it *Decisions*, and wrote the first entry. She kept to a format she had read about: the date, the decision, the evidence behind it, and what would make her change her mind. This kind of page is called a *decision log*, and its whole value is in the last line.

```
14 March
Decision:  Work on the personal-details problem first. Ticket themes second.
Evidence:  37 of 400 conversations in one week contained an identity number,
           a tax number, a bank account or a full address. My count; Farah
           can check it.
I would change my mind if:  Lakshmi says this is a known, accepted risk, or
           Imran says it cannot be fixed without rebuilding the chatbot.
```

Anyone who has watched a project drift for a year knows why the last line matters. A decision with no stated way out hardens into a belief. A decision that says what would end it can be revisited calmly, without anyone losing face.

## An honest score

There was one more thing she did that night, and she did it grudgingly, because it was the sort of thing she did once a year and disliked.

She scored herself. Anaya's work, as she understood it, came down to seven things: finding real problems by talking to people, choosing which to solve, understanding the technology well enough to argue with engineers, turning a decision into something others can build, measuring what happens, working out whether it can pay for itself, and getting people with different goals to move together. She gave each a number from zero to three. Zero meant nothing to show. One meant she had tried but could not prove it. Two meant the work was usable and someone else could check it. Three meant it had been tested on real people or real data and its limits were written down.

She gave herself a two for finding problems, because tonight she had a count. She gave herself a one for strategy, because she had opinions but no strategy a colleague had ever acted on. And she gave herself a one for understanding the technology, then crossed it out and wrote it again, which is what honest people do with a number they are not proud of. She could say "the chatbot is powered by AI" in a meeting. She could not have explained to a curious twelve-year-old what that sentence meant.

She made herself a rule. It was only one line, and she wrote it at the top of the page where she could see it.

*Nothing counts until someone else could check it.*

## An email at nine

Imran Qureshi, the lead engineer, had built most of the plumbing behind the chatbot. He was the only person at Sahaj who answered messages at nine in the evening, mainly because he was awake anyway and disliked being asked questions in daylight.

Anaya wrote to him. She deleted a sentence that began "I think there may be an issue" and wrote something shorter.

*Can I borrow an hour tomorrow? I found something in the chats, and I would like very much to be wrong about it.*

The answer arrived before she had closed the laptop.

*Bring the export. I will bring the tea.*

## What to carry forward

A typed number does not stay where it was typed; it travels to every system that touches the conversation. Details that can point to one real person have a name, PII, and they point most sharply when several are put together. A feeling about a problem becomes a decision only when it has been turned into a count, written next to the evidence, and given a way to be undone. And before reaching for anything clever, it is worth asking honestly how much of the problem a plain rule could solve.

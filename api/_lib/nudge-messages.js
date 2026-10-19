/* The thirty daily messages, one per weekday.

   Each day has a firm line (`say`) and one ten-minute task (`task`) with the
   page it opens (`url`). Days 1–20 follow the gentle start on the site
   (src/data/gentle.js) day for day; days 21–30 are the first pass through
   Chapters 1 and 2. Plain and firm: a coach who expects him to show up, not a
   warning about the future.

   The firm lines are calendar-day lines, so they never mention a particular
   chapter: when he is signed in, the task comes from where he actually is in
   the gentle start, not from the calendar (messageFor in nudge.js).

   After day 30 the firm lines repeat, but the tasks do not: by then the site's
   own "Next" knows where he is better than a fixed list does, so the message
   sends him there (see messageFor in nudge.js). */
export const DAYS = [
  { say: 'You’ve built everything except the habit. Nobody is coming to learn this for you.',
    task: 'Ten minutes now: Gentle start, Day 1. Open “Start here” and answer the boxes. That’s the whole job today.', url: '/#/start' },
  { say: 'Today the enemy is “later”.',
    task: 'Ten minutes: read the first half of “What the machine is” in the book, then stop.', url: '/#/start' },
  { say: 'Feeling like a beginner is the price of entry, not a verdict on you.',
    task: 'Ten minutes: the second half of “What the machine is”.', url: '/#/start' },
  { say: 'People are applying for the roles you want, and some are learning this right now.',
    task: 'Ten minutes: paste a message you wrote today into the token counter, in English and in Hinglish.', url: '/#/start' },
  { say: 'Friday. Streaks are made of boring days.',
    task: 'Five minutes: three lines in your notepad. What made sense, what didn’t, one question. Tick the week.', url: '/#/start' },

  { say: 'The weekend didn’t count, so today does.',
    task: 'Ten minutes: read “The first conversation”. Only read. No setup yet.', url: '/#/start' },
  { say: 'A plan you only look at is worth nothing.',
    task: 'Ten minutes: read “A mind with no memory”, then ask a chat assistant what you talked about last time.', url: '/#/start' },
  { say: 'Hard doesn’t mean wrong. It means you’re learning.',
    task: 'Ten minutes: “Giving instructions”, sections 11.1 to 11.4.', url: '/#/start' },
  { say: 'You don’t need to feel ready. You need ten minutes.',
    task: 'Ten minutes: finish “Giving instructions”, then summarise one email twice, with and without instructions.', url: '/#/start' },
  { say: 'Friday. Two weeks in a row is how a habit starts.',
    task: 'Five minutes: three lines in your notepad, then read last Friday’s. Notice what is clearer now.', url: '/#/start' },

  { say: 'Miss one day and it’s life. Miss two and it’s a new habit.',
    task: 'Ten minutes: “Knowing whether it works”, sections 12.1 to 12.3.', url: '/#/start' },
  { say: 'A count beats an opinion. That is most of this job.',
    task: 'Ten minutes: finish “Knowing whether it works”.', url: '/#/start' },
  { say: 'Confusion is the signal that learning is happening.',
    task: 'Ten minutes: on paper, write ten test messages for one small job, with the right answer next to each.', url: '/#/start' },
  { say: 'Doing beats reading about doing.',
    task: 'Ten minutes: give your ten messages to a chat assistant and mark each answer. Write down the score.', url: '/#/start' },
  { say: 'Friday. A week of small steps is still a week.',
    task: 'Five minutes: three lines, plus your score and the miss that surprised you.', url: '/#/start' },

  { say: 'The old you would be skipping today.',
    task: 'Ten minutes: read “Sorting and summarising”.', url: '/#/start' },
  { say: 'Shipped work gets read. Plans don’t.',
    task: 'Ten minutes: read “Too long to read at once”.', url: '/#/start' },
  { say: 'Search sounds technical until you read how it works.',
    task: 'Ten minutes: read “Finding by words”.', url: '/#/start' },
  { say: 'Fear of falling behind isn’t a plan, but a small step is.',
    task: 'Ten minutes: read “Finding by meaning”.', url: '/#/start' },
  { say: 'Friday. Small steps add up faster than they feel.',
    task: 'Fifteen minutes: the first section of the setup page. If a step fails, copy the exact error and ask for help.', url: '/#/start' },

  { say: 'Small and steady beats big and rare.',
    task: 'Ten minutes: finish the setup page. One section at a time is fine.', url: '/#/setup' },
  { say: 'The first try at anything new feels clumsy. Do it anyway.',
    task: 'Ten minutes: Chapter 1, up to your first model call.', url: '/#/ch/ch1' },
  { say: 'A number you measured beats a paragraph you read.',
    task: 'Ten minutes: find the usage block from your Chapter 1 call, write down the token count, then finish the chapter’s boxes.', url: '/#/ch/ch1' },
  { say: 'Ten minutes is small enough to start and big enough to count.',
    task: 'Ten minutes: Chapter 1.5, first pass. Read it and answer the boxes.', url: '/#/ch/ch15b' },
  { say: 'Friday. Count the days you showed up this month, not the days you missed.',
    task: 'Five minutes: three lines in your notepad. What can you do now that you couldn’t in October?', url: '/#/' },

  { say: 'Prompting is a skill employers can already see.',
    task: 'Ten minutes: Chapter 2, first half.', url: '/#/ch/ch2' },
  { say: 'Ten minutes, same as always.',
    task: 'Finish Chapter 2. Skip any step marked as a long build and write “second pass” next to it.', url: '/#/ch/ch2' },
  { say: 'You know more than you did a month ago. Keep the streak.',
    task: 'Ten minutes: Chapter 2.1, “Writing prompts”, first pass.', url: '/#/ch/ch21' },
  { say: 'Test before you trust. That rule is half the job.',
    task: 'Ten minutes: Chapter 2.2, “Testing prompts”, first pass.', url: '/#/ch/ch22' },
  { say: 'Thirty weekdays. You’ve proved you can start, so now keep going.',
    task: 'Ten minutes: tick the Plan tab, count your days, and write one line on the next thirty.', url: '/plan/' }
];

/* "Day N. say task", the form the tests and the notification body use. */
export const MESSAGES = DAYS.map((d, i) => 'Day ' + (i + 1) + '. ' + d.say + ' ' + d.task);

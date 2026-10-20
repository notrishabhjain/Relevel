/* The thirty firm lines, one per weekday, repeating after thirty.

   Each reminder is one of these lines plus the task. The task is never fixed
   here: it is the person's next step on the route (src/data/route.mjs), worked
   out from their own progress when the reminder is shown (messageFor in
   nudge.js). So the line follows the calendar and the task follows the person,
   and a skipped day never makes the reminder run ahead of them. Lines never
   name a chapter for the same reason. Plain and firm: a coach who expects him
   to show up, not a warning about the future. */
export const SAYS = [
  'You’ve built everything except the habit. Nobody is coming to learn this for you.',
  'Today the enemy is “later”.',
  'Feeling like a beginner is the price of entry, not a verdict on you.',
  'People are applying for the roles you want, and some are learning this right now.',
  'Friday. Streaks are made of boring days.',
  'The weekend didn’t count, so today does.',
  'A plan you only look at is worth nothing.',
  'Hard doesn’t mean wrong. It means you’re learning.',
  'You don’t need to feel ready. You need ten minutes.',
  'Friday. Two weeks in a row is how a habit starts.',
  'Miss one day and it’s life. Miss two and it’s a new habit.',
  'A count beats an opinion. That is most of this job.',
  'Confusion is the signal that learning is happening.',
  'Doing beats reading about doing.',
  'Friday. A week of small steps is still a week.',
  'The old you would be skipping today.',
  'Shipped work gets read. Plans don’t.',
  'Technical words get easier every time you meet them.',
  'Fear of falling behind isn’t a plan, but a small step is.',
  'Friday. Small steps add up faster than they feel.',
  'Small and steady beats big and rare.',
  'The first try at anything new feels clumsy. Do it anyway.',
  'A number you measured beats a paragraph you read.',
  'Ten minutes is small enough to start and big enough to count.',
  'Friday. Count the days you showed up this month, not the days you missed.',
  'What you can show beats what you can say.',
  'Ten minutes, same as always.',
  'You know more than you did a month ago. Keep the streak.',
  'Test before you trust. That rule is half the job.',
  'Thirty weekdays. You’ve proved you can start, so now keep going.'
];

/* "Day N. line", the form the tests check. */
export const MESSAGES = SAYS.map((s, i) => 'Day ' + (i + 1) + '. ' + s);

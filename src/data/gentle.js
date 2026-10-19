/* The gentle start: the first four weeks, ten minutes a day.

   Why this exists. The course in order goes from a ten-minute "Start here"
   straight into Track A, whose chapters are six to fourteen hours each and ask
   you to interview people in the first week. Chapter 1 wants an API key. For
   someone new to AI that first step is a wall, and a wall on day two is where
   people stop.

   So the first twenty weekdays are reading and tiny tries, in the order a
   beginner needs them: what the machine is, how you talk to it, how you tell
   whether it did well, how it finds things. The reading is the book, which
   tells the same ideas as a story. Nothing here needs an install, an account
   or another person until the last day, when the one-time setup comes in
   because by then you know what it is for.

   The daily 12:00 reminder (api/_lib/nudge-messages.js) follows these days in
   the same order, so the notification and this page always agree.

   go.book  a book chapter file, read from the anchor if one is given
   go.app   a page inside the workbook */

window.GENTLE = {
  weeks: [
    { n: 1, title: 'Meet the machine',
      blurb: 'What a language model is, in plain words. Reading, plus one small experiment in the browser.' },
    { n: 2, title: 'Talking to it',
      blurb: 'How a program asks a model for something, why it forgets, and how to give it instructions.' },
    { n: 3, title: 'Is it any good?',
      blurb: 'How to tell whether it did well, with a count instead of a feeling.' },
    { n: 4, title: 'Finding things, then your first setup',
      blurb: 'Long documents and two ways to search them. On Friday, the one-time setup, now that you know what it is for.' }
  ],
  days: [
    { id: 'g1', wk: 1, title: 'Start here', mins: 10, go: { app: '#/ch/ch0' },
      what: 'Ten minutes on how the site works. Tap the underlined words and answer the boxes. Nothing to install.' },
    { id: 'g2', wk: 1, title: 'What the machine is, part 1', mins: 10, go: { book: '08-what-the-machine-is.html', at: 's-8-1' },
      what: 'Read sections 8.1 to 8.3, up to the end of “Tokens: how the machine reads”. Then stop, even if you want to keep going.' },
    { id: 'g3', wk: 1, title: 'What the machine is, part 2', mins: 10, go: { book: '08-what-the-machine-is.html', at: 's-8-4' },
      what: 'Read from section 8.4, “The context window”, to the end of the chapter.' },
    { id: 'g4', wk: 1, title: 'Count your own words in tokens', mins: 10, go: { app: '#/ch/ch05' },
      what: 'Do only the first experiment in Chapter 0.5. Paste a message you wrote today, once in English and once in Hinglish, and compare the counts.' },
    { id: 'g5', wk: 1, title: 'Look back', mins: 5, look: true,
      what: 'In your notepad, write three lines: one thing that made sense, one that didn’t, and one question you still have.' },

    { id: 'g6', wk: 2, title: 'The first conversation', mins: 10, go: { book: '09-the-first-conversation.html' },
      what: 'Read the chapter. It shows one request to a model and the reply that comes back. Only read it for now. The setup comes later.' },
    { id: 'g7', wk: 2, title: 'A mind with no memory', mins: 10, go: { book: '10-a-mind-with-no-memory.html' },
      what: 'Read the chapter. Then open a chat assistant you already use, start a new chat, and ask what you talked about last time. Note what it says.' },
    { id: 'g8', wk: 2, title: 'Giving instructions, part 1', mins: 10, go: { book: '11-giving-instructions.html', at: 's-11-1' },
      what: 'Read sections 11.1 to 11.4, up to the end of “Where it makes things up”.' },
    { id: 'g9', wk: 2, title: 'Giving instructions, part 2', mins: 12, go: { book: '11-giving-instructions.html', at: 's-11-5' },
      what: 'Read from section 11.5, “Four techniques, in order of strength”, to the end. Then ask a chat assistant to summarise one of your emails twice: once with no instructions, once with three lines saying who it is for and how long it should be.' },
    { id: 'g10', wk: 2, title: 'Look back', mins: 5, look: true,
      what: 'Three lines in your notepad: what made sense, what didn’t, and one question. Then look at what you wrote last Friday.' },

    { id: 'g11', wk: 3, title: 'Knowing whether it works, part 1', mins: 10, go: { book: '12-knowing-whether-it-works.html', at: 's-12-1' },
      what: 'Read sections 12.1 to 12.3, up to the end of “Ten sentences”.' },
    { id: 'g12', wk: 3, title: 'Knowing whether it works, part 2', mins: 10, go: { book: '12-knowing-whether-it-works.html', at: 's-12-4' },
      what: 'Read from section 12.4, “The scoreboard”, to the end of the chapter.' },
    { id: 'g13', wk: 3, title: 'Write ten test messages', mins: 10, look: true,
      what: 'Pick one small job, such as “does this message contain a phone number?”. On paper, write ten short messages and the right answer next to each. Make two of them tricky.' },
    { id: 'g14', wk: 3, title: 'Mark the machine', mins: 10, look: true,
      what: 'Give your ten messages to a chat assistant, one at a time, with the same question. Mark each answer right or wrong. Your score out of ten is your first evaluation.' },
    { id: 'g15', wk: 3, title: 'Look back', mins: 5, look: true,
      what: 'Three lines in your notepad. Add your score from yesterday, and the one message it got wrong that surprised you most.' },

    { id: 'g16', wk: 4, title: 'Sorting and summarising', mins: 10, go: { book: '13-sorting-and-summarising.html' },
      what: 'Read the chapter.' },
    { id: 'g17', wk: 4, title: 'Too long to read at once', mins: 10, go: { book: '14-too-long-to-read-at-once.html' },
      what: 'Read the chapter.' },
    { id: 'g18', wk: 4, title: 'Finding by words', mins: 8, go: { book: '15-finding-by-words.html' },
      what: 'Read the chapter.' },
    { id: 'g19', wk: 4, title: 'Finding by meaning', mins: 10, go: { book: '16-finding-by-meaning.html' },
      what: 'Read the chapter.' },
    { id: 'g20', wk: 4, title: 'Setup, first section only', mins: 15, go: { app: '#/setup' },
      what: 'Now you know what an API key is for. Do only the first section of the setup page. If a step fails, copy the exact error and ask a chat assistant. Then write your three lines for the week.' }
  ],
  after: 'From here, go through the course chapters in order, starting with Chapter 1. On your first pass, read each chapter and answer its boxes. If a step needs other people or a long build, write “second pass” next to it in your notepad and move on. The long product chapters in Track A can wait. Their stories are already in the book, in chapters 1 to 7.'
};

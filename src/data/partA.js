/* Track A — Product foundations.

   From the Applied AI PM playbook (September 2026). The playbook's required
   sequence is Track A, then the technical core (Parts I–V), then Track B, so
   these chapters come first in reading order.

   Chapter 0 opens the track: ten minutes on how this site works, before any of
   the work starts. It used to open Part I.

   The playbook gives each idea a title and nothing else — "Prove it now. Write
   one concrete example from your capstone and one counterexample." — so the
   teaching in every idea below is written for this course, in the voice
   CONTENT-GUIDELINES.md §8 describes. The "Build it" tasks, the check-yourself
   questions, the rubric weights and the mastery gate are the playbook's own.

   Each chapter's shape: an "Idea" section per concept, a "Prove it now" beat
   straight after it, a written exercise with a worked answer that unlocks once
   you have written yours, checkpoints from the question bank, and the
   playbook's "Build it" as the chapter's capstone. */

window.PART6 = [
{
  id:'ch0', num:0, part:6, minutes:10, labs:[],
  title:'Start here',
  concept:'Ten minutes. Nothing to install, nothing to sign up for, and no prior knowledge assumed.',
  takeaway:[
    'Tell the difference between the app and the model — which is most of what lets you hold a design conversation.',
    'Know that you can tap any underlined word to find out what it means, without leaving the page.'
  ],
  story:[
    ['p','Most people who give up on a technical subject do not give up because it was hard. They give up because a word went past on page three that everyone else seemed to understand, and rather than stop, they kept reading — understanding a little less each paragraph until the whole thing felt like it was written for somebody else.'],
    ['key','If that has happened to you before, it was the writing’s fault, not yours. Two things here are built to stop it.'],
    ['p','<strong>Every word is tappable.</strong> The first time a term appears that means something specific, it gets a faint dotted underline. Tap it, and a plain explanation appears right there — you never leave the page or lose your place.'],
    ['p','Try it on this sentence, which contains four of them: an <strong>app</strong> sends a <strong>prompt</strong> to a <strong>model</strong> and is billed in <strong>tokens</strong>. Tap each one now, before reading on. Some will say <em>you build this in Chapter 9</em> — that means the course has named it early on purpose, and the one-line version is all you need.'],
    ['try',{id:'ch0-tap',mins:2,min:12,rows:2,
      task:'Now write it back, roughly. What is the difference between the <em>app</em> and the <em>model</em>? Two lines. Getting it half-wrong here costs nothing — writing before being told is the whole point.',
      ph:'The app is … the model is …',
      after:'The model is a program on somebody else’s computers that takes text and returns text. No buttons, no memory, no idea a person exists. The app is your product — the screens and the code that decide what to send it and what to do with the reply. Everything a user experiences as “the AI” is really your app arranging things around a model that does one narrow thing. Holding those two apart is most of what separates a product manager who can hold a design conversation from one who cannot.'}],

    ['p','<strong>The second thing: this course stops and asks.</strong> Every few paragraphs there is a box like the one you just used. Some ask you to guess before you are told. Some ask you to write something. Some are real questions that count.'],
    ['p','They exist because reading and understanding feel identical from the inside, and only one of them is real. And getting one wrong is worth more than getting it right — a wrong answer you were confident about has found a belief you did not know was false, which is the most useful thing that can happen in a study session. Nobody sees any of it. There is no grade and no pass mark.'],

    ['p','That is all you need to use this. A few practical notes, and then Chapter 1.'],
    ['l',[
      '<strong>Still nothing to install.</strong> Everything runs in your browser — the tools built into each chapter, and a free Google notebook for the chapters that use code. Setting that notebook up takes about twenty minutes, once, and the next page walks you through every click.',
      '<strong>The doing is not optional.</strong> Each chapter alternates: an idea, then the thing that proves it, marked <em>Do this</em>. Those beats are where the learning actually happens — skip them and you are left with the feeling of having understood, which is the one thing this course is built to stop.',
      '<strong>One chapter per sitting.</strong> Most run twenty to forty-five minutes, and every chapter says which before you start — so if one takes longer than the number, that is the chapter being long, not you being slow. Stopping while you still have energy is what brings you back tomorrow; a huge first week followed by nothing is the usual way this ends.',
      '<strong>Your progress follows you.</strong> Signed in, everything saves against your account, so you can read on your phone and carry on at your desk.'
    ]],
    ['key','You will hit a chapter that feels too hard. That is scheduled, not exceptional. When it happens, the move is neither to push through nor to stop — it is to take the smallest step available and let the day end there. Every question has a “Stuck?” button that shows you the answer without counting it against you.'],
    ['try',{id:'ch0-quit',mins:3,min:40,rows:3,
      task:'Decide it now, while it is easy to think clearly. What will you do on the evening you do not want to open this? What is the smallest thing you would still be willing to do — and what will you tell yourself about the day you skipped?',
      ph:'When I do not want to open this, I will …',
      after:'The plans that survive a bad evening share three things. The smallest step is tiny — one question, two minutes, not a chapter. You know where to resume without having to decide, because deciding is the expensive part when you are tired. And the story about the missed day is settled in advance: a missed day is a missed day. It is not evidence of anything and it does not mean starting again. Everybody lapses. The people who finish are the ones who had already decided that lapsing was allowed.'}],
    ['c','Do this before Chapter 1','Chapter 1 asks you to make a real call to a real model within its first few minutes. Set the notebook and the key up now — <a href="#/setup">Set up Colab + API key</a> — so that when you get there you are pasting one line, not signing up for things.'],
    ['p','That is the whole chapter. Nothing here needs remembering. Set the notebook up, and then Chapter 1 starts properly.']
  ]
},

{
  id:'a1', num:'A1', part:6, minutes:360, labs:[],
  title:'Your learning system: role, evidence and a capstone problem',
  concept:'Set up how you will learn before you learn anything else. You will score yourself against the applied AI PM role, create one place for all your work, and choose the real problem you will build around for the rest of the book.',
  takeaway:[
    'Score yourself against the seven areas of the applied AI PM role, with evidence for each score.',
    'Set up one notebook and one repository that hold every artifact you make in this book.',
    'Plan a week of study in build-first blocks, and use the 0–3 mastery gate to decide when to move on.',
    'Shortlist three capstone problems and say, for each one, why AI may or may not help.'
  ],
  needs:[],
  capstone:{
    title:'Set up your learning system',
    brief:'Three artifacts that the rest of the book builds on: a scored role scorecard, a working repository, and a shortlist of capstone problems.',
    steps:[
      'Write a one-page role scorecard covering the seven areas: discovery, strategy, technical fluency, delivery, analytics, business and leadership. Score yourself 0–3 in each, and write the evidence next to every score.',
      'Create the repository with the folders <code>/research</code>, <code>/product</code>, <code>/experiments</code>, <code>/evals</code>, <code>/analytics</code>, <code>/security</code> and <code>/portfolio</code>, plus a <code>decision-log.md</code> file. Add at least two decisions to the log.',
      'Choose three candidate problems where AI might reduce a pain you can measure. For each one, record the user, how they do the task today, a baseline number (time, cost or error rate), and why AI may or may not belong.'
    ],
    done:[
      'Every score on the scorecard has evidence next to it, not just a feeling.',
      'Someone else can find any artifact in the repository in under two minutes.',
      'For at least one candidate problem, you have written down what would make you reject AI for it.',
      'Mastery gate: score each artifact 0–3. Move on only when all three score at least 2.'
    ]
  },
  check:[
    ['Can you name evidence, not confidence, for every score?',
     'Go through the scorecard line by line. If a score rests on “I think I am good at this”, lower it to 1 until you have an artifact that proves it. Honest low scores are more useful than confident high ones, because they show you where to spend your time.'],
    ['Can another person find each artifact in under two minutes?',
     'Ask a friend or colleague to find your candidate-problem list without your help. If they cannot, rename the files or add a short <code>README.md</code> at the top of the repository that says what is where.'],
    ['What would make you reject AI for one of your candidates?',
     'Name the specific condition. For example: “If the tickets already have accurate category tags, a count in the help-desk tool solves this without AI.” If you cannot name one, you are choosing AI before you understand the problem.']
  ],
  story:[
    ['c','Before you start','This chapter takes about six hours across two or three sittings. Have a notes app or a paper notebook ready. You do not need any accounts to begin: the first task is a page of writing.'],

    ['h','How this book works'],
    ['p','This book teaches the applied AI product manager role by having you do the work. Every chapter follows the same five steps:'],
    ['n',[
      '<strong>Idea.</strong> One concept, explained in plain language.',
      '<strong>Prove it now.</strong> A quick example and a counterexample that you write straight away.',
      '<strong>Build it.</strong> A real artifact: a document, an interview, a prototype or some code.',
      '<strong>Check yourself.</strong> Questions, plus a 0–3 score for what you built.',
      '<strong>Close the sitting.</strong> Three lines: what confused you, what changed your mind, and what you will test next.'
    ]],
    ['p','The chapters come in three groups. <strong>Track A</strong>, which you are in now, covers product-management foundations and the ideas behind generative AI. <strong>Parts I to V</strong> are the technical core, where you build, break and measure a real AI system. <strong>Track B</strong> covers the business side: pricing, growth, analytics and shipping to real users. It ends with a capstone that uses everything.'],
    ['c','Note','Work through the groups in order: Track A, then Parts I to V, then Track B. Chapter 34 at the end of Part V is a rehearsal for the final capstone in B8.'],

    ['h','Five rules that keep the work honest'],
    ['p','These rules apply to every chapter. Each one blocks a shortcut that makes work look finished when it is not.'],
    ['l',[
      '<strong>Talk to real users.</strong> Personas written by an AI do not count as research. Interview people who actually have the problem.',
      '<strong>A demo is not a launch.</strong> The final capstone needs a stable URL and people actually using it.',
      '<strong>Track product metrics and model metrics.</strong> A model that scores 95% on your test set can still fail your users, so you need both.',
      '<strong>Passing tests does not prove user value, and positive interviews do not prove reliability.</strong> You need evidence for both.',
      '<strong>Keep secrets out of notebooks and repositories.</strong> Store API keys in environment variables or your platform’s secret store.'
    ]],

    ['h','Idea 1: Measure where you are, with evidence'],
    ['p','The applied AI PM role has seven areas. You will score yourself on each one now, and again at the end of the book.'],
    ['tb',['Area','What it covers'],[
      ['Discovery','Finding real problems by talking to users and watching them work.'],
      ['Strategy','Choosing which problem to solve, for whom, and what not to do.'],
      ['Technical fluency','Understanding AI systems well enough to make trade-offs with engineers.'],
      ['Delivery','Turning a decision into a spec, a plan and a shipped product.'],
      ['Analytics','Measuring what users do, and whether a change helped.'],
      ['Business','Pricing, costs, and whether the product can make money.'],
      ['Leadership','Getting people with different goals to agree and act.']
    ]],
    ['p','Score each area from 0 to 3 on this scale. The book uses the same scale for every artifact you make.'],
    ['tb',['Score','Meaning'],[
      ['0','No artifact, or only theory you copied.'],
      ['1','Attempted, but not backed by evidence or not reproducible.'],
      ['2','Usable: backed by evidence, reviewable and reproducible.'],
      ['3','Decision-grade: tested with users or data, limitations stated, next action clear.']
    ]],
    ['key','A score needs evidence. “I am good at strategy” is a feeling. “I wrote the strategy memo that set our Q3 roadmap” is evidence.'],
    ['do','Prove it now',[
      ['p','Pick the area where you feel strongest. Write down the one piece of evidence that best supports that feeling.'],
      ['p','Then pick your weakest area. Write down what evidence would move you up one point.'],
      ['x','Two lines. If your strongest area has no concrete evidence behind it, such as a document, a result or a decision you made, score it 1 rather than 2.']
    ]],
    ['try',{id:'a1-evidence',mins:5,min:60,rows:4,
      task:'Write one score with its evidence. Then write one score you would have given yourself on confidence alone, and explain why the evidence changes it.',
      ph:'Area, score, evidence…',
      after:'Here is an answer that works. <strong>Analytics: 2.</strong> Evidence: I built my team’s weekly retention dashboard and used it to argue for changing onboarding. <strong>Strategy: I would have said 2, but it is a 1.</strong> I have opinions about strategy, but I have never written one that someone else acted on. The difference is whether an artifact exists that another person could check.'}],
    ['q','I501'],

    ['h','Idea 2: Keep all your work in one place'],
    ['p','You will make around fifty artifacts in this book: interview notes, a strategy memo, a PRD, test sets, dashboards and a deployed app. If they are scattered across tools, you will not find them when you need them, whether in the capstone or in a job interview.'],
    ['p','So set up two things, once:'],
    ['n',[
      '<strong>A notebook of record.</strong> One running document, in Google Docs, Notion or on paper, for the predictions, results and notes from every chapter.',
      '<strong>A repository.</strong> One folder, ideally a GitHub repository, for every artifact you build.'
    ]],
    ['p','Use this folder structure in the repository:'],
    ['code','/research      interview notes, market research\n/product       strategy, roadmaps, PRDs\n/experiments   notebooks and prototype code\n/evals         test sets and evaluation results\n/analytics     tracking plans and dashboards\n/security      threat models and risk registers\n/portfolio     case studies\ndecision-log.md'],
    ['c','Tip','No GitHub account yet? Start with a folder on your computer or in Google Drive, using the same structure. You can move it to GitHub later, in Chapter 21, when you set up version control properly.'],
    ['p','<code>decision-log.md</code> is the most important file. Each time you make a decision in this book, such as which problem to solve, which model to use or which metric matters, add an entry with four parts: the date, the decision, the evidence, and what would make you change it.'],
    ['do','Prove it now',[
      ['p','Create the folders. Then add your first entry to <code>decision-log.md</code>. For example:'],
      ['code','2026-09-23\nDecision: I will study 12 hours a week, on Tuesday and Thursday evenings and Saturday morning.\nEvidence: my calendar for the last four weeks.\nRevisit if: I miss two sessions in a row.'],
      ['x','A folder structure anyone could navigate, and one decision with its evidence. Test it: could someone else find your interview notes in under two minutes?']
    ]],

    ['h','Idea 3: Build first, then check whether you are ready'],
    ['p','Plan 12 to 15 hours a week. Split them into four blocks, and give the biggest block to building:'],
    ['tb',['Block','Hours','What you produce'],[
      ['Learn and prove','3','Experiments, notes and quiz answers'],
      ['Build','5','An artifact, prototype or code'],
      ['Users and feedback','2','Interview notes, recordings with consent, observed behaviour'],
      ['Measure and reflect','2','Metrics, a decision-log entry and the next test']
    ]],
    ['p','End every week with two things: an artifact that someone else could look at, and a decision written in your log.'],
    ['p','At the end of each chapter, you score what you built on the same 0–3 scale. This is the <strong>mastery gate</strong>.'],
    ['key','Move on only when every artifact scores at least 2, and no safety, privacy or evidence item scores 0.'],
    ['c','Watch out','The gate scores your artifacts, not how well you understood the reading. It is common to feel you understand a chapter and still have nothing that scores 2. That means the chapter is not finished yet.'],
    ['do','Prove it now',[
      ['p','Open your calendar and block out next week using the four blocks above. Put the Build block where you have the most energy, not where it is most convenient.'],
      ['x','Four blocks in next week’s calendar that add up to at least 12 hours. If you cannot find 12 hours, write the real number in your decision log and plan to take longer. That is a better plan than one you will not keep.']
    ]],

    ['h','Idea 4: Choose the problem you will build around'],
    ['p','Every chapter asks you to apply its ideas to your capstone: one real problem that you carry through the whole book. In B8, the final chapter, you ship a product for it to 5–10 real users. So choose carefully.'],
    ['p','A good capstone problem has four properties:'],
    ['l',[
      '<strong>A reachable user.</strong> You can talk to at least five people who have this problem.',
      '<strong>A workflow you can observe.</strong> You can watch how people do the task today.',
      '<strong>A measurable pain.</strong> It costs time, money or errors that you can count.',
      '<strong>A real reason AI might help.</strong> The task involves reading, writing, summarising, sorting or searching text, images or speech.'
    ]],
    ['p','Take the last property seriously. Many problems are better solved with ordinary software, such as a form, a rule or a database query. Part of your job as an AI PM is to say so.'],
    ['do','Prove it now',[
      ['p','For one candidate problem, write one sentence on why AI might help, and one sentence on why ordinary software might be enough.'],
      ['x','Two sentences. If you cannot write the second one, think harder: almost every problem has a version that needs no AI.']
    ]],
    ['try',{id:'a1-candidate',mins:10,min:120,rows:6,
      task:'Describe one candidate problem: the user, how they do the task today, how often, what it costs them, and why AI may or may not belong.',
      ph:'User, current workflow, frequency, cost, AI fit…',
      after:'Here is an example that passes. <strong>User:</strong> support leads at a 40-person software company. <strong>Today:</strong> every Monday they read about 300 tickets from the past week and pick out the top five themes for the product team. <strong>Frequency:</strong> weekly, about three hours each time. <strong>Cost:</strong> three hours of a senior person’s time, and themes are often missed. <strong>Why AI might help:</strong> reading and grouping short, messy text is a good fit. <strong>Why it might not:</strong> if tickets already carry reliable category tags, a simple count in the help-desk tool would do the job. Check that first.'}],
    ['q','I502']
  ]
},

{
  id:'a2', num:'A2', part:6, minutes:600, labs:[],
  title:'Product sense: how products win and lose',
  concept:'Learn the few ideas that every product decision rests on. You will map how a product reaches users, compare B2B with B2C, check an idea against four risks, and see where AI helps your judgement and where it does not.',
  takeaway:[
    'Map a product’s discovery, delivery and distribution, and find its weakest link.',
    'Explain how building for businesses (B2B) differs from building for consumers (B2C).',
    'Test an idea against the four product risks: value, usability, feasibility and viability.',
    'Use an AI assistant to draft an analysis, then check every claim against evidence.',
    'Map the hard and soft skills the applied AI PM role needs, and where you stand on each.'
  ],
  needs:[['A capstone shortlist','You apply every idea in this chapter to one of your candidate problems.','A1']],
  capstone:{
    title:'Map and tear down a product',
    brief:'Take one real product, understand why it works, and practise checking AI-generated analysis against evidence.',
    steps:[
      'Pick one product you use. Map its discovery, delivery and distribution. Mark the weakest of the three, with the evidence that makes you think so.',
      'Write a teardown with seven headings: target user, job, key moment, friction, business model, moat, and one improvement.',
      'Ask ChatGPT (or any assistant) for a teardown of the same product. Mark every claim it makes as supported, unsupported or wrong. Rewrite its teardown using your own evidence.'
    ],
    done:[
      'The weakest link is backed by something you observed, not a guess.',
      'Your improvement names who it helps and what would show it worked.',
      'In the AI teardown, every unsupported claim is marked, with a note on what evidence would settle it.',
      'Mastery gate: score each artifact 0–3. Move on only when all three score at least 2.'
    ]
  },
  check:[
    ['Why can a technically good feature fail in distribution?',
     'Because users have to find it, understand it and make it a habit. A feature that works perfectly but sits three clicks deep in a settings menu, or that needs a new behaviour nobody is prompted to try, gets no use. Distribution is a design problem, not just a marketing one.'],
    ['Give one B2B and one B2C trade-off that would change the roadmap.',
     'B2B: a large customer needs an audit log before their security team will approve the contract, so it jumps ahead of features users asked for. B2C: onboarding drop-off is high, so shortening sign-up beats a new feature, because every user you lose in the first minute never sees the feature at all.'],
    ['What evidence would disprove your improvement idea?',
     'Name it before you build. For example: “If fewer than one in five users who see the new summary button try it within a week, the problem is not discoverability.” An idea with no disproving evidence is an opinion.']
  ],
  story:[
    ['c','Before you start','About ten hours across three or four sittings. Pick one product you use often and know well, such as Notion, Spotify, Swiggy, Slack or Canva. You will use it in every exercise.'],

    ['h','Idea 1: Discovery, delivery and distribution are one loop'],
    ['p','Every product goes through three stages, and a product manager owns all three:'],
    ['tb',['Stage','The question it answers','Typical work'],[
      ['Discovery','Should we build this?','User interviews, data, prototypes, testing ideas'],
      ['Delivery','Are we building it well?','Specs, planning, working with engineering, quality'],
      ['Distribution','Will people find it, use it and keep using it?','Onboarding, pricing, channels, sales, adoption']
    ]],
    ['p','These are a loop, not a line. What you learn in distribution, such as who stays and who leaves, feeds the next round of discovery.'],
    ['p','Products usually fail at the weakest of the three. A common AI example: a team builds an excellent meeting summariser, tests it carefully, and ships it. Usage stays near zero. Interviews show most users never noticed it, because it was a small icon they had no reason to click.'],
    ['key','A feature nobody finds has the same impact as a feature nobody built.'],
    ['do','Prove it now',[
      ['p','For the product you picked, write one sentence each on how it does discovery, delivery and distribution. Then say which is weakest.'],
      ['x','Three sentences and a verdict. For the weakest link, name what you saw that made you think so, such as a confusing sign-up, a feature you only found by accident, or a recurring bug.']
    ]],
    ['q','I503'],

    ['h','Idea 2: B2B and B2C are different jobs'],
    ['p','<strong>B2C</strong> (business to consumer) products are sold to individuals. <strong>B2B</strong> (business to business) products are sold to companies. The PM work changes a lot between them:'],
    ['tb',['','B2C','B2B'],[
      ['Who pays','The user','A budget owner, often not the user'],
      ['Who can block the sale','Almost nobody','IT, security, legal and procurement'],
      ['Number of customers','Thousands to millions','Tens to thousands'],
      ['How decisions are made','Mostly from usage data','Usage data plus direct customer requests'],
      ['What drives growth','Onboarding, habit and word of mouth','Sales, integrations and renewals'],
      ['What AI adds','Speed and delight, but mistakes spread fast','Productivity, but only with data controls, admin settings and audit logs']
    ]],
    ['p','In B2B, one large customer can change your roadmap. If their security team needs single sign-on before they will sign, single sign-on moves up the list, even if no user asked for it.'],
    ['c','Watch out','In B2B, the person who loves your product in a demo is often not the person who approves the purchase. Always ask: who pays, who uses, and who can say no?'],
    ['do','Prove it now',[
      ['p','Decide whether your capstone is B2B or B2C. Then write down who pays, who uses and who could block a purchase.'],
      ['x','Three names or roles. If “who pays” and “who uses” are the same person, you are probably B2C, or selling to very small businesses.']
    ]],
    ['q','I504'],

    ['h','Idea 3: Product sense means checking four risks'],
    ['p','“Product sense” sounds vague, but it comes down to checking four risks before you commit to building something:'],
    ['n',[
      '<strong>Value.</strong> Will people choose to use it, over whatever they do today?',
      '<strong>Usability.</strong> Can they work out how to use it without help?',
      '<strong>Feasibility.</strong> Can we build it with the time, skills, data and budget we have?',
      '<strong>Viability.</strong> Does it work for the business: revenue, cost, legal and brand?'
    ]],
    ['p','For AI features, feasibility has an extra question: <strong>is it right often enough for this use?</strong> A model that is right 80% of the time is fine for brainstorming headlines. It is not fine for drafting legal contracts. The same accuracy can be feasible for one job and unusable for another.'],
    ['p','AI also adds cost per use. A normal feature costs almost nothing each time someone clicks it. An AI feature costs money every time it runs, so viability depends on how often people use it and what you can charge.'],
    ['key','Check all four risks. Most failed features passed the one the team was focused on and failed one they skipped.'],
    ['do','Prove it now',[
      ['p','For one improvement you would make to your chosen product, write one line per risk: what could go wrong, and how you would find out cheaply.'],
      ['x','Four lines. The best answers name a cheap test, such as a five-user prototype test for usability, or a spreadsheet of cost per use for viability.']
    ]],
    ['q','I505'],

    ['h','Idea 4: AI can help your judgement, but not replace it'],
    ['p','AI assistants are useful for product work. They draft documents quickly, summarise long notes, suggest questions and critique your plans.'],
    ['p','But they have one big limit: they produce text that sounds right, without evidence behind it. An assistant cannot interview your users. Its “insights” about your market are an average of what it read, not facts about your customers.'],
    ['p','So use this rule for anything an AI writes for you:'],
    ['key','Every claim must trace to evidence, or be marked as an assumption.'],
    ['p','Here is what that looks like in practice. An assistant writes: “Users abandon Swiggy checkout because of high delivery fees.” That may be true, but where is the evidence? Mark it <em>unsupported</em>, then note what would settle it, such as checkout drop-off data or five interviews.'],
    ['do','Prove it now',[
      ['p','Ask an AI assistant: “Why do people stop using [your product]?” Copy its answer into your notes. Label each claim <em>supported</em>, <em>unsupported</em> or <em>wrong</em>.'],
      ['x','Most claims will be unsupported. That is normal: the assistant fills gaps with plausible guesses. Your job is to know which claims are guesses.']
    ]],
    ['try',{id:'a2-annotate',mins:8,min:100,rows:5,
      task:'Take one claim from the AI’s answer. Say whether it is supported, what evidence would settle it, and how cheaply you could get that evidence.',
      ph:'Claim, label, evidence needed, how to get it…',
      after:'A good answer: <strong>Claim:</strong> “Users leave because the free tier is too limited.” <strong>Label:</strong> unsupported. <strong>Evidence needed:</strong> whether people who hit the free-tier limit leave more often than those who do not. <strong>How to get it:</strong> ask five people who stopped using the product what they were doing in their last week, or compare churn for users who hit the limit against those who did not, if you have the data.'}],

    ['h','Idea 5: Map the skills the role needs'],
    ['p','The applied AI PM role needs two kinds of skill:'],
    ['tb',['Hard skills','Soft skills'],[
      ['Writing specs and acceptance criteria','Explaining trade-offs clearly'],
      ['Reading data and basic SQL','Getting agreement without authority'],
      ['Building and running evaluations','Prioritising when information is incomplete'],
      ['Prototyping without engineers','Listening well in interviews'],
      ['Cost and pricing arithmetic','Saying no, and explaining why']
    ]],
    ['p','AI products add one thing to both columns: being comfortable with <strong>probabilistic behaviour</strong>. An AI feature does not give the same answer every time. You need to measure that variation, design for it, and explain it to people who expect software to be predictable.'],
    ['do','Prove it now',[
      ['p','Add a “hard skills” and a “soft skills” section to the scorecard you made in A1. Score yourself 0–3 on each skill in the table above, with evidence.'],
      ['x','Ten scored skills. Circle the two lowest. Those are the skills to practise deliberately in the chapters ahead.']
    ]]
  ]
},

{
  id:'a3', num:'A3', part:6, minutes:840, labs:[],
  title:'User discovery: interviews, jobs and problem statements',
  concept:'Find out what users actually do and need, from real conversations. You will write an interview guide, run five interviews, and turn what you hear into a job statement, an evidence-backed persona and a ranked problem brief.',
  takeaway:[
    'Write interview questions about past behaviour instead of opinions or hypotheticals.',
    'Describe what users are trying to get done as a jobs-to-be-done statement.',
    'Use the five whys to find causes, without forcing everything into one root cause.',
    'Build personas and journey maps where every claim traces back to an interview note.',
    'Write a problem statement, list your assumptions and test the riskiest one first.'
  ],
  needs:[['Who pays, who uses, who can block','Interviews need the right people.','A2'],
         ['Claims need evidence','The whole point of interviews is to collect it.','A2']],
  capstone:{
    title:'Five interviews and a problem brief',
    brief:'Talk to five real people who have your capstone problem, and turn what they tell you into evidence you can build on.',
    steps:[
      'Write a screener (three to five questions that decide who qualifies) and a 12-question interview guide. Replace every hypothetical or leading question with a question about past behaviour.',
      'Recruit and run five interviews with real target users. For each, record quotes, the steps of their workflow, their workarounds, how often the problem happens, how bad it is, and what they spend on it today.',
      'Synthesise the interviews into a jobs-to-be-done statement, an evidence-backed persona, a journey map and a ranked problem brief. Include evidence that contradicts your expectations.'
    ],
    done:[
      'Five interviews with real people who match your screener. AI-generated users do not count.',
      'Every claim in the persona and journey map points to a specific interview note.',
      'At least one assumption changed or was dropped because of what you heard.',
      'Rubric: evidence quality 30%, synthesis 25%, problem severity 25%, intellectual honesty 20%.',
      'Mastery gate: score each artifact 0–3. Move on only when all score at least 2 and no evidence item scores 0.'
    ]
  },
  check:[
    ['Do you have five real interviews, rather than AI-generated users?',
     'If any “interview” was with an AI playing a user, it does not count. AI users give the average answer, which is exactly what you are trying to get past. Recruit from your network, LinkedIn, communities or your capstone users’ workplaces.'],
    ['Can every persona claim trace to your notes?',
     'Go through the persona line by line and write the interview number next to each claim. Delete any line you cannot trace. A shorter persona with evidence beats a longer one with guesses.'],
    ['What did you learn that changed or killed an assumption?',
     'If nothing changed, either you asked leading questions or you were not listening for surprises. Reread your notes looking for anything that did not fit your expectations. That is usually the most valuable finding.']
  ],
  story:[
    ['c','Before you start','About 14 hours across a week or two, because you need time to recruit and schedule people. Start recruiting on day one. Aim for 30-minute conversations by video call or in person.'],

    ['h','Idea 1: Ask about the past, not about your idea'],
    ['p','The most common interview mistake is asking people what they think of your idea. They will be polite and say it sounds useful. That tells you nothing.'],
    ['p','The fix comes from a short book called <em>The Mom Test</em> by Rob Fitzpatrick. It has three rules:'],
    ['n',[
      '<strong>Talk about their life, not your idea.</strong>',
      '<strong>Ask about specific things they did in the past, not what they might do in future.</strong>',
      '<strong>Talk less and listen more.</strong>'
    ]],
    ['p','Here are some bad questions and better versions:'],
    ['tb',['Instead of','Ask'],[
      ['Would you use a tool that groups support tickets into themes?','Tell me about the last time you prepared the weekly ticket summary. What did you do first?'],
      ['How much would you pay for this?','What do you use for this today? What does it cost you?'],
      ['Isn’t it frustrating to read hundreds of tickets?','What was the hardest part of last week’s summary?'],
      ['Do you think AI could help here?','Have you tried anything to speed this up? What happened?']
    ]],
    ['p','The third question on the left is a <strong>leading question</strong>: it suggests the answer you want. People tend to agree with the person asking.'],
    ['key','Opinions about the future are weak evidence. Specific stories about the past are strong evidence.'],
    ['do','Prove it now',[
      ['p','Write three questions you might have asked about your capstone problem. Rewrite each one to be about specific past behaviour.'],
      ['x','Three before-and-after pairs. Check each rewrite: could the person answer it with a story about something that actually happened?']
    ]],
    ['q','I506'],
    ['q','I507'],

    ['h','Idea 2: Describe the job users are trying to get done'],
    ['p','People do not want your product. They want to make progress on something in their life. The <strong>jobs to be done</strong> idea says that people “hire” a product to do a job.'],
    ['p','Write a job as one sentence, in this format:'],
    ['code','When [situation], I want to [motivation], so I can [outcome].'],
    ['p','Here is the job for the support-ticket example:'],
    ['p','<em>When I prepare the Monday report, I want to see the week’s biggest problems without reading every ticket, so I can tell the product team what to fix first.</em>'],
    ['p','Jobs also explain why people switch products, or do not. Four forces are at work:'],
    ['tb',['Force','Direction','Example'],[
      ['Push of the current situation','Towards change','“Reading 300 tickets takes my whole morning.”'],
      ['Pull of the new solution','Towards change','“A summary I could check in ten minutes.”'],
      ['Anxiety about the new solution','Against change','“What if it misses something important?”'],
      ['Habit of the present','Against change','“I know my spreadsheet. It works.”']
    ]],
    ['p','People switch only when push and pull are stronger than anxiety and habit. For AI products, anxiety is often the biggest force, because users worry about wrong answers.'],
    ['do','Prove it now',[
      ['p','Write a job statement for your capstone problem. Then write one example of each of the four forces.'],
      ['x','One sentence in the “When… I want to… so I can…” format, and four short lines. If you do not know the anxiety force yet, write it as a question to ask in your interviews.']
    ]],

    ['h','Idea 3: Ask “why” to find causes, but do not force one answer'],
    ['p','The <strong>five whys</strong> is a simple way to get from a symptom to its causes. You ask “why?” about each answer in turn:'],
    ['n',[
      'Important themes get missed in the weekly report. <em>Why?</em>',
      'The support lead does not have time to read every ticket. <em>Why?</em>',
      'Ticket volume doubled this year, but the team did not grow. <em>Why?</em>',
      'The company launched in two new countries.'
    ]],
    ['p','This is useful, but it has a trap. Real problems usually have several causes. Themes might also be missed because tickets are tagged inconsistently, or because the report template has no space for new issues.'],
    ['c','Watch out','Do not stop at the first chain that sounds convincing. After a few whys, ask: “What else could cause this?” Draw the causes as a tree, not a line.'],
    ['do','Prove it now',[
      ['p','Take the main pain from your capstone problem. Ask “why?” three to five times. Then go back to the first answer and find one more cause.'],
      ['x','A short tree with at least two branches. Mark which causes you have evidence for, and which are guesses to check in interviews.']
    ]],

    ['h','Idea 4: Personas and journey maps summarise evidence'],
    ['p','A <strong>persona</strong> describes a type of user: their goals, their workflow and their pains. A <strong>journey map</strong> shows the steps they go through, and what they do, think and feel at each one.'],
    ['p','Both are useful, but only as <strong>summaries of evidence</strong>. A persona written before any interviews is a guess dressed up as research. A persona generated by an AI is worse, because it looks detailed and is based on nothing.'],
    ['p','So add a source to every line. For example:'],
    ['code','Priya, support lead (interviews 1, 3, 4)\n- Prepares the weekly report every Monday morning   [1, 3, 4]\n- Reads about 300 tickets; skims most of them        [1, 4]\n- Worries most about missing a new, fast-growing issue [3]\n- Uses a spreadsheet with manual tags               [1, 3]'],
    ['key','If a persona line has no interview number next to it, delete it.'],
    ['do','Prove it now',[
      ['p','Draft a journey map for your capstone user with four to six steps. For each step, write what they do and one pain. Leave a blank for the interview number: you will fill it in after your interviews.'],
      ['x','Four to six steps. Any step you cannot fill in after five interviews is a gap in your research, not a gap in the map.']
    ]],
    ['q','I508'],

    ['h','Idea 5: Write the problem, list your assumptions, test the riskiest'],
    ['p','After your interviews, write a <strong>problem statement</strong> in this format:'],
    ['code','[User] needs a way to [job] because [evidence of pain].\nToday they [workaround], which costs [measure].'],
    ['p','Then list your <strong>assumptions</strong>: the things that must be true for your solution to work. For the ticket example:'],
    ['l',[
      'Support leads trust an AI summary enough to act on it.',
      'Ticket text contains enough detail to find the theme.',
      'The product team reads the weekly report.',
      'The company allows ticket data to be sent to an AI provider.'
    ]],
    ['p','Rank each assumption by two things: how bad it would be if it is wrong, and how unsure you are. Test the one that is both worst and least certain first. That is your <strong>riskiest unknown</strong>.'],
    ['p','In this list, the last assumption might be the riskiest. If the company’s policy forbids sending ticket data outside, nothing else matters. And you can check it with one email to the security team.'],
    ['try',{id:'a3-problem',mins:10,min:120,rows:6,
      task:'Write a problem statement for your capstone. Then list three assumptions and say which is your riskiest unknown, and why.',
      ph:'Problem statement, three assumptions, the riskiest and why…',
      after:'A strong answer: <strong>Problem:</strong> Support leads at mid-sized software companies need a way to see the week’s top issues because they currently skim 300+ tickets and report missing new problems (interviews 1, 3, 4). Today they tag tickets by hand in a spreadsheet, which takes about three hours each Monday. <strong>Assumptions:</strong> (1) leads will act on an AI summary; (2) ticket text has enough detail; (3) the company allows ticket data to go to an AI provider. <strong>Riskiest:</strong> number 3. If it is false, the product cannot exist, and one email to the security team answers it this week.'}]
  ]
},

{
  id:'a4', num:'A4', part:6, minutes:600, labs:[],
  title:'Market research: sizing, competitors and opportunities',
  concept:'Work out how big the opportunity is and what you are really competing with. You will size a market from the bottom up, map every alternative a customer has, and turn your interview evidence into a ranked tree of opportunities.',
  takeaway:[
    'Estimate a market bottom-up, with every assumption written down.',
    'List direct, indirect and do-nothing competitors, and explain why the status quo is hard to beat.',
    'Write a positioning statement based on a competitor teardown.',
    'Place a product in the AI value chain and judge whether its advantage is easy to copy.',
    'Build an opportunity solution tree from interview evidence, and rank its branches.'
  ],
  needs:[['Interview evidence','The opportunity tree is built from what users told you.','A3'],
         ['A job statement','Competitors are anything that does the same job.','A3']],
  capstone:{
    title:'Size the market and map the opportunities',
    brief:'Three artifacts that tell you whether your capstone problem is worth pursuing, and which part of it to start with.',
    steps:[
      'Build a competitor matrix with at least five alternatives, including “do nothing” and doing the task by hand. For each, note who it is for, the price, its strengths and its weaknesses.',
      'Estimate TAM, SAM and SOM bottom-up: number of customers × realistic annual value per customer. List every assumption, and mark each as known or guessed.',
      'Build an opportunity solution tree from your interview evidence. Rank its branches by reach, pain, confidence and strategic fit.'
    ],
    done:[
      'The competitor matrix includes the status quo, and says why it is hard to replace.',
      'Every number in the market estimate is labelled as known or assumed, with a source for the known ones.',
      'Every opportunity in the tree links to at least one interview.',
      'Mastery gate: score each artifact 0–3. Move on only when all three score at least 2.'
    ]
  },
  check:[
    ['Can you defend the denominator in your market estimate?',
     'The denominator is the number of customers you multiply by. Say exactly where it comes from, for example “companies with 50–500 staff using Freshdesk, from the vendor’s published customer count”. If you cannot source it, write it down as an assumption and give a range instead of a single number.'],
    ['Which competitor is the status quo, and why is it hard to displace?',
     'Usually a spreadsheet, a manual process or simply doing nothing. It is hard to displace because it is free, familiar and already trusted. Your product has to be clearly better, not slightly better, to overcome the effort of switching.'],
    ['Name one apparent moat that is easy to copy.',
     'A well-tuned prompt, a nicer interface, or using the newest model. Any competitor can do the same in weeks. Harder-to-copy advantages come from deep integration into a workflow, data that only your product collects, and the trust of security teams and buyers.']
  ],
  story:[
    ['c','Before you start','About ten hours. You need your five interview notes from A3 and a spreadsheet. Some numbers will need searching, such as the published customer counts of software vendors.'],

    ['h','Idea 1: Size a market from the bottom up'],
    ['p','There are two ways to estimate a market. <strong>Top-down</strong> starts from an industry report: “Customer-support software is a $10 billion market. If we get 1%, that is $100 million.” It is quick, but it tells you nothing, because nobody knows how you would get that 1%.'],
    ['p','<strong>Bottom-up</strong> starts from customers you can count:'],
    ['code','market = number of customers × annual value per customer'],
    ['p','You then narrow it in three steps:'],
    ['tb',['Term','Meaning','Ticket-theme example'],[
      ['TAM','Total addressable market: everyone who has the problem.','40,000 software companies with a support team × $1,200 a year = $48M'],
      ['SAM','Serviceable addressable market: the part you can actually serve.','8,000 of them use a help desk you integrate with and get 200+ tickets a week = $9.6M'],
      ['SOM','Serviceable obtainable market: what you could realistically win in about three years.','2% of SAM = 160 customers = $192,000 a year']
    ]],
    ['p','The final number matters less than the assumptions behind it. Every number above is a guess until you find a source. Write each one down and mark it <em>known</em> or <em>assumed</em>.'],
    ['key','A market estimate is only as good as its denominator: the number of customers you multiplied by.'],
    ['do','Prove it now',[
      ['p','Write the bottom-up formula for your capstone. Put a number in each slot, even a rough one, and mark each as known or assumed.'],
      ['x','One line of arithmetic with labelled numbers. If every number is assumed, that is fine for now. It tells you what to research first.']
    ]],
    ['q','I509'],

    ['h','Idea 2: Your competition is everything the customer could do instead'],
    ['p','Competitors come in three kinds:'],
    ['tb',['Kind','Meaning','Ticket-theme example'],[
      ['Direct','A similar product doing the same job','Other AI tools that analyse support tickets'],
      ['Indirect','A different product doing the same job','Built-in help-desk reports; hiring an analyst'],
      ['Status quo','Carrying on as today','Reading tickets by hand; a tagging spreadsheet; doing nothing']
    ]],
    ['p','The status quo is usually the strongest competitor. It costs nothing, it is familiar, and it already works well enough. People put up with a lot of pain before they change a habit.'],
    ['c','Watch out','“We have no competitors” almost always means you have not looked at the status quo. If people have the problem today, they are solving it somehow, even if badly.'],
    ['do','Prove it now',[
      ['p','Name one direct, one indirect and one status-quo competitor for your capstone. For the status quo, write one sentence on why people stick with it.'],
      ['x','Three competitors and one reason. If you cannot name a direct competitor, search app stores, G2 or Product Hunt for the job, not for your product idea.']
    ]],
    ['q','I510'],

    ['h','Idea 3: Tear down competitors, then position against them'],
    ['p','A <strong>competitive teardown</strong> looks at each alternative in the same way: who it is for, what job it does, what it costs, and where it is strong and weak. The best source of weaknesses is customer reviews on G2, Capterra or app stores. Look for complaints that come up again and again.'],
    ['p','Once you know the alternatives, write a <strong>positioning statement</strong>. It says who the product is for and why it is different. A common format is:'],
    ['code','For [target customer], who [need],\n[product] is a [category] that [key benefit].\nUnlike [main alternative], it [key difference].'],
    ['p','For the ticket example: <em>For support leads at growing software companies, who need to report the week’s top issues quickly, Theme Finder is a ticket-analysis tool that finds themes in minutes. Unlike built-in help-desk reports, it reads the ticket text rather than relying on tags that agents apply inconsistently.</em>'],
    ['do','Prove it now',[
      ['p','Read ten reviews of your strongest competitor. Write down the two complaints that appear most often. Then write your positioning statement using the format above.'],
      ['x','Two repeated complaints and one positioning statement. The “unlike” line should connect to one of the complaints you found.']
    ]],

    ['h','Idea 4: Know where you sit in the AI value chain'],
    ['p','AI products are built in layers. Each layer depends on the one below:'],
    ['tb',['Layer','Examples','Where the advantage comes from'],[
      ['Infrastructure','Chips, cloud providers','Scale and capital'],
      ['Foundation models','OpenAI, Anthropic, Google, open-source models such as Llama','Research, compute and data'],
      ['Tooling','Vector databases, evaluation and orchestration tools','Developer adoption'],
      ['Applications','Products that end users work in','Workflow, distribution, data and trust']
    ]],
    ['p','Most AI PMs work at the application layer. That has one important consequence: <strong>the model is not your advantage</strong>. Your competitors can call the same model through the same API.'],
    ['p','So what is hard to copy? Being deeply built into a customer’s workflow and tools. Data that only your product collects, such as the corrections users make. And trust, especially with the security teams who approve B2B purchases.'],
    ['key','A data advantage is real only if the data is unique to you, makes the product better, and is hard for a competitor to get.'],
    ['do','Prove it now',[
      ['p','Write down which layer your capstone sits in, and which layers below it you depend on. Then write one advantage you might have, and say honestly whether a competitor could copy it within six months.'],
      ['x','Layer, dependencies and one advantage. If the honest answer is “yes, easily”, that is useful. It tells you to compete on workflow and trust rather than technology.']
    ]],
    ['q','I511'],

    ['h','Idea 5: Organise opportunities as a tree'],
    ['p','It is tempting to go straight from a problem to a solution. An <strong>opportunity solution tree</strong>, an idea from Teresa Torres, slows you down in a useful way. It has four levels:'],
    ['code','Outcome:        Support leads report the week’s top issues in under 30 minutes\n├─ Opportunity:  “I miss new issues that are growing fast”        (interviews 1, 3)\n│  ├─ Solution:  Alert when a new theme doubles week on week\n│  │  └─ Test:   Show five leads a mock alert. Do they act on it?\n├─ Opportunity:  “Tags are applied inconsistently”                 (interviews 1, 2, 4)\n│  ├─ Solution:  Group tickets by their text, not their tags\n│  └─ Solution:  Suggest tag corrections to agents\n└─ Opportunity:  “Nobody reads the report”                         (interview 5)'],
    ['p','Opportunities are the needs and pains you heard in interviews. They are not features. Each one should point to the interviews it came from.'],
    ['p','Rank the opportunity branches on four things: <strong>reach</strong> (how many users have it), <strong>pain</strong> (how bad it is), <strong>confidence</strong> (how strong your evidence is) and <strong>strategic fit</strong> (whether it moves your outcome).'],
    ['try',{id:'a4-tree',mins:12,min:120,rows:7,
      task:'Draw an opportunity solution tree for your capstone. Include one outcome, at least three opportunities with interview references, and one solution under your top-ranked opportunity. Say why you ranked it first.',
      ph:'Outcome, opportunities (with interview numbers), solutions, ranking reason…',
      after:'A strong answer ranks by evidence, not excitement. In the example above, “Tags are applied inconsistently” ranks first. Three of five interviews raised it (reach and confidence), it causes the missed themes that leads worry about (pain), and fixing it directly shortens the report (fit). “Nobody reads the report” may matter more in the end, but one interview is weak evidence, so the next step is to test it, not build for it.'}]
  ]
},

{
  id:'a5', num:'A5', part:6, minutes:720, labs:[],
  title:'Strategy and prioritisation: choosing what not to do',
  concept:'Turn research into choices. You will write a strategy that says which users you serve and what you will not do, score options with prioritisation frameworks while knowing their limits, and decide whether to build, buy or partner for the AI layer.',
  takeaway:[
    'Tell a vision from a strategy from a plan.',
    'Write a strategy with a diagnosis, a guiding policy and coherent actions.',
    'State a differentiated value proposition and the narrow wedge you will start with.',
    'Score options with RICE, and explain when to override the score.',
    'Decide whether to build, buy or partner for the AI part of a product.'
  ],
  needs:[['A market estimate and competitor map','Strategy chooses where to compete.','A4'],
         ['A ranked opportunity tree','Prioritisation starts from it.','A4']],
  capstone:{
    title:'Write the strategy and prioritise',
    brief:'Three artifacts that turn your research into decisions: a strategy memo, a scored list of opportunities, and a build/buy/partner decision for the AI layer.',
    steps:[
      'Write a one-to-two-page strategy memo covering the diagnosis, the chosen user, the wedge, the differentiated promise, the capabilities you need, the trade-offs, and your non-goals.',
      'Score ten opportunities with RICE. Then override one score using your strategy, and explain why in one paragraph.',
      'Write a build/buy/partner decision for the AI layer. Compare the options on quality, latency, cost, privacy, lock-in and time to market.'
    ],
    done:[
      'The memo has a non-goals section that rules out something tempting.',
      'Every initiative in the memo traces back to the diagnosis.',
      'The RICE override is argued from strategy, not preference.',
      'Rubric: coherence 30%, evidence 25%, trade-offs 25%, measurability 20%.',
      'Mastery gate: score each artifact 0–3. Move on only when all three score at least 2.'
    ]
  },
  check:[
    ['Can your strategy say what you will not do?',
     'If the non-goals section is empty, or lists only things nobody wanted anyway, it is not a strategy yet. A real non-goal rules out something tempting, such as “We will not support Zendesk in the first year, even though three prospects asked.”'],
    ['Does every initiative trace to the diagnosis?',
     'Read each initiative and ask which part of the diagnosis it addresses. An initiative that traces to nothing is either a missing part of the diagnosis or a pet project. Decide which, and either update the diagnosis or cut the initiative.'],
    ['When is a lower-RICE item still the right choice?',
     'When it unblocks the strategy, when it has a hard deadline (a high cost of delay), or when it reduces a risk that would sink everything else. For example, a data-privacy review scores low on reach and impact, but without it no enterprise customer can buy.']
  ],
  story:[
    ['c','Before you start','About twelve hours. Have your market estimate, competitor matrix and opportunity tree from A4 open. This chapter is mostly writing: expect to draft the strategy memo at least twice.'],

    ['h','Idea 1: Vision, strategy and plan are different things'],
    ['p','These three words are often used as if they mean the same thing. They do not:'],
    ['tb',['','Answers','Time frame','Ticket-theme example'],[
      ['Vision','Where are we going?','3–5 years','Every product team knows what customers are struggling with, every week, without anyone reading tickets by hand.'],
      ['Strategy','How will we win?','1–2 years','Start with support leads at 50–500-person software companies on Freshdesk, and win on accuracy for fast-growing new issues.'],
      ['Plan','What are we doing next?','This quarter','Ship theme grouping for one help desk to ten design partners.']
    ]],
    ['p','The strategy is the hard part, because it involves choosing. A vision can be inspiring and a plan can be busy, but only a strategy says which customers you will serve and which you will turn away.'],
    ['do','Prove it now',[
      ['p','Write one sentence each for your capstone’s vision, strategy and plan.'],
      ['x','Three sentences. Check the strategy one: does it name a specific user and a specific way you will win? If it could apply to any company, rewrite it.']
    ]],
    ['q','I512'],

    ['h','Idea 2: A strategy starts with a diagnosis'],
    ['p','In <em>Good Strategy Bad Strategy</em>, Richard Rumelt describes three parts that every real strategy has:'],
    ['n',[
      '<strong>Diagnosis.</strong> What is the critical challenge? What is actually going on?',
      '<strong>Guiding policy.</strong> What is our overall approach to that challenge?',
      '<strong>Coherent actions.</strong> Which specific steps carry out the policy and support each other?'
    ]],
    ['p','Here is the ticket example:'],
    ['tb',['Part','Example'],[
      ['Diagnosis','Support leads miss fast-growing new issues because tickets are tagged inconsistently, and reading them all takes hours.'],
      ['Guiding policy','Find themes from ticket text rather than tags, and focus on spotting new issues early rather than full reporting.'],
      ['Coherent actions','Integrate with one help desk; build week-on-week growth alerts; recruit ten design partners; measure missed issues against their manual reports.']
    ]],
    ['p','Rumelt also describes <strong>bad strategy</strong>: goals presented as if they were a plan. “Become the leading AI support-analytics platform” is a goal. It has no diagnosis, so it gives nobody any guidance.'],
    ['c','Tip','A quick test: remove your company’s name from the strategy. If a competitor could paste it into their own deck unchanged, it is not specific enough.'],
    ['do','Prove it now',[
      ['p','Write a one-sentence diagnosis for your capstone, based on your interview evidence. Then write the guiding policy that follows from it.'],
      ['x','Two sentences. The diagnosis should name a cause, not just a symptom. “Reports are slow” is a symptom. “Reports are slow because tags are unreliable, so every ticket must be read” is a diagnosis.']
    ]],

    ['h','Idea 3: Say why you are different, and where you will start'],
    ['p','A <strong>value proposition</strong> says who you serve, what job you do for them, and why you are better than the alternatives. You wrote a first version as your positioning statement in A4.'],
    ['p','A <strong>wedge</strong> is the narrow first use case you can clearly win. It should be small enough to be excellent at, and connected to something bigger. For the ticket example, the wedge is “spot fast-growing new issues for Freshdesk users”, not “AI analytics for customer support”.'],
    ['p','Pair these with a <strong>North Star</strong>: one sentence describing the value customers get, and one metric that measures it. For example, “issues caught in their first week”. Chapter B3 covers North Star metrics in detail.'],
    ['key','Start narrow enough to be the best at something. You can widen the wedge later; you cannot recover from being average at everything.'],
    ['do','Prove it now',[
      ['p','Write your capstone’s wedge in one sentence. Then write the next, wider use case it leads to.'],
      ['x','Two sentences. If your wedge includes the words “all”, “any” or “platform”, it is probably not narrow enough yet.']
    ]],

    ['h','Idea 4: Use prioritisation frameworks, and know their limits'],
    ['p','Frameworks help you compare options consistently. The most common is <strong>RICE</strong>:'],
    ['code','RICE score = (Reach × Impact × Confidence) ÷ Effort\n\nReach       users affected per quarter        e.g. 400\nImpact      3 = massive, 2 = high, 1 = medium, 0.5 = low\nConfidence  100% = high, 80% = medium, 50% = low\nEffort      person-months of work'],
    ['p','For example:'],
    ['tb',['Opportunity','Reach','Impact','Confidence','Effort','RICE'],[
      ['Growth alerts','400','2','80%','2','320'],
      ['Tag correction suggestions','600','1','50%','3','100'],
      ['Second help-desk integration','250','2','100%','4','125']
    ]],
    ['p','Two other tools are useful. <strong>MoSCoW</strong> sorts items into Must, Should, Could and Won’t, which is good for agreeing scope. <strong>Cost of delay</strong> asks what you lose for every week you wait, which matters when there is a deadline.'],
    ['c','Watch out','Frameworks are only as good as the numbers you put in, and those numbers are mostly guesses. They also ignore strategy and dependencies. Use them to structure a discussion, not to make the decision for you.'],
    ['do','Prove it now',[
      ['p','Score three of your capstone opportunities with RICE. Then find one case where you would pick a lower score over a higher one, and write down why.'],
      ['x','A three-row table and one override. A good reason for overriding is a dependency, a deadline or a strategic bet, not “I like it more”.']
    ]],
    ['q','I513'],
    ['q','I514'],

    ['h','Idea 5: Build, buy or partner for the AI layer'],
    ['p','For the AI part of your product, you have three choices:'],
    ['tb',['Option','What it means','When it makes sense'],[
      ['Build','Train or fine-tune your own model','Rarely early on. When you have unique data, a narrow task and a team to maintain it.'],
      ['Buy','Call a model through an API (OpenAI, Anthropic, Google)','Usually the right start. Fast, high quality, pay as you go.'],
      ['Partner','Use a specialist vendor for the whole capability','When the capability is not your core, such as speech recognition or document parsing.']
    ]],
    ['p','Compare the options on six criteria: <strong>quality</strong> on your own test cases, <strong>latency</strong>, <strong>cost</strong> per task, <strong>privacy</strong> (where the data goes), <strong>lock-in</strong> (how hard it is to switch) and <strong>time to market</strong>.'],
    ['p','Also ask whether AI suits the task at all. AI is a good fit when mistakes are acceptable or easy to catch. A wrong theme in a weekly report gets corrected at the next meeting. A wrong number in an invoice costs money. The same model can suit one and not the other.'],
    ['try',{id:'a5-bbp',mins:10,min:120,rows:6,
      task:'Write a short build/buy/partner decision for your capstone’s AI layer. Compare at least two options on the six criteria, then state your choice and what would make you revisit it.',
      ph:'Options, six criteria, decision, revisit trigger…',
      after:'A strong answer for the ticket example: <strong>Buy</strong> a hosted model through an API. It is fast to ship, and quality on 50 test tickets was good enough. Cost is about $0.02 per week per customer, and time to market is weeks rather than months. <strong>Build</strong> would need labelled data we do not have yet. The risks are privacy (tickets contain customer details) and lock-in. So use a provider that does not train on customer data, and keep prompts and the test set independent of any one vendor. <strong>Revisit if:</strong> cost per customer passes $1 a month, or we have 10,000 corrected labels.'}]
  ]
},

{
  id:'a6', num:'A6', part:6, minutes:600, labs:[],
  title:'Roadmaps, OKRs and getting stakeholders on board',
  concept:'Turn a strategy into something a team can execute and leaders can support. You will build an outcome roadmap, write OKRs that separate product outcomes from model metrics, map the people who can say no, and run a pre-mortem.',
  takeaway:[
    'Build a now/next/later roadmap where each item is an outcome with a kill criterion.',
    'Write an objective with measurable key results, input metrics and guardrail metrics.',
    'Map stakeholders by influence and interest, and name who can veto a decision.',
    'Write a decision memo for leadership and run a pre-mortem before you start.',
    'Track dependencies and risks before they turn into surprises.'
  ],
  needs:[['A written strategy','The roadmap turns it into sequenced outcomes.','A5'],
         ['A prioritised list','It decides what goes in “now”.','A5']],
  capstone:{
    title:'Roadmap, OKRs and a decision memo',
    brief:'Three artifacts that turn your strategy into a plan other people can support.',
    steps:[
      'Turn your strategy into a now/next/later roadmap. For each item, record the outcome, the evidence behind it, an owner, dependencies and a kill criterion.',
      'Write one objective and 3–4 measurable key results. Keep product outcomes separate from model metrics, and add at least one guardrail metric.',
      'Create a stakeholder map and run a written pre-mortem. Then draft the one-page decision memo you would send to leadership.'
    ],
    done:[
      'Every roadmap item is an outcome, not a feature, and has a kill criterion.',
      'At least one key result is a product outcome that a model metric alone could not achieve.',
      'The stakeholder map names who can veto the project, and what evidence they need.',
      'Mastery gate: score each artifact 0–3. Move on only when all three score at least 2.'
    ]
  },
  check:[
    ['Is each roadmap item an outcome rather than a feature?',
     'Read each item aloud. If it names something you will build (“growth alerts”), rewrite it as the change you expect (“leads spot new issues in their first week”). The feature is one way to reach the outcome, and it may not be the best one.'],
    ['Could a team game your key results while harming users?',
     'Try it. If a key result is “alerts sent per week”, the easy way to hit it is to send more alerts, including useless ones. Add a guardrail metric such as “fewer than one in five alerts dismissed as not useful”, so the only way to win is to help users.'],
    ['Who can veto the project, and what evidence do they need?',
     'Name them. For an AI product in a B2B company, it is often the security or privacy lead, who needs to know where data goes and whether it is stored. Find out what they need early. A late “no” from them costs more than any feature.']
  ],
  story:[
    ['c','Before you start','About ten hours. Have your strategy memo and RICE scores from A5 open. You will also need to think about the people around your capstone: who funds it, who approves it and who uses it.'],

    ['h','Idea 1: Roadmaps should promise outcomes, not dates'],
    ['p','A traditional roadmap is a list of features with delivery dates. It looks precise, but the dates are guesses, and the features are assumptions about what will help. When either turns out wrong, the roadmap becomes a list of broken promises.'],
    ['p','An <strong>outcome roadmap</strong> uses three columns instead of dates:'],
    ['tb',['Column','Meaning','How certain'],[
      ['Now','What we are working on','Committed'],
      ['Next','What we expect to do after that','Likely, but may change'],
      ['Later','What we are exploring','Ideas, ordered by current thinking']
    ]],
    ['p','Each item is an outcome, with the details you need to manage it:'],
    ['tb',['Field','Example'],[
      ['Outcome','Support leads spot new issues within their first week'],
      ['Evidence','3 of 5 interviews described missing a fast-growing issue'],
      ['Owner','Product manager and one engineer'],
      ['Dependency','Read access to the Freshdesk API'],
      ['Kill criterion','Stop if fewer than half of design partners act on an alert within four weeks']
    ]],
    ['p','AI work makes outcome roadmaps even more important. You often cannot know in advance whether a model will be accurate enough, so a date promised before testing is a guess.'],
    ['key','A kill criterion decided in advance makes it much easier to stop work that is not working.'],
    ['do','Prove it now',[
      ['p','Write one “now” item for your capstone as an outcome, with all five fields.'],
      ['x','One roadmap item. Check the kill criterion: is it a number you will actually be able to measure within a few weeks?']
    ]],

    ['h','Idea 2: OKRs, input metrics and guardrails'],
    ['p','<strong>OKRs</strong> (objectives and key results) are a common way to set goals. The <strong>objective</strong> says what you want in words. The <strong>key results</strong> are 3–4 numbers that show you got there.'],
    ['code','Objective: Support leads trust Theme Finder for their weekly report\n\nKR1  8 of 10 design partners use it for 4 weeks in a row          (product outcome)\nKR2  Report preparation drops from ~3 hours to under 30 minutes  (product outcome)\nKR3  Theme precision on the 50-ticket test set is at least 85%    (model metric)\n\nGuardrail metric  Fewer than 1 in 5 alerts are dismissed as not useful'],
    ['p','Key results should be <strong>outcomes</strong> (what changes for users) rather than <strong>outputs</strong> (what you ship). “Ship growth alerts” is an output. “Leads catch new issues in their first week” is an outcome.'],
    ['p','Two more kinds of metric support your OKRs:'],
    ['l',[
      '<strong>Input metrics</strong> are things the team can change directly, which you expect to move the outcome. For example, the share of tickets assigned to some theme.',
      '<strong>Guardrail metrics</strong> are numbers that must not get worse while you chase the key results. For example, false-alarm rate or cost per customer.'
    ]],
    ['c','Why this matters','Keep model metrics and product outcomes separate. A model can reach 95% precision while users still ignore the report because it arrives too late. You need both kinds of number, and only the product outcome tells you whether users are better off.'],
    ['do','Prove it now',[
      ['p','Write one objective and three key results for your capstone. Label each key result as a product outcome or a model metric. Add one guardrail metric.'],
      ['x','One objective, three labelled key results and a guardrail metric. Then try to game each key result: how could a team hit it while making things worse for users?']
    ]],
    ['q','I515'],
    ['q','I516'],

    ['h','Idea 3: Map the people who can help or stop you'],
    ['p','A product decision involves many people, and they want different things. A <strong>stakeholder map</strong> puts them on two axes: how much influence they have over the project, and how much they care about it.'],
    ['tb',['','Low interest','High interest'],[
      ['High influence','Keep satisfied (e.g. CFO, security lead)','Work closely with (e.g. head of support, your manager)'],
      ['Low influence','Keep informed (e.g. other product teams)','Keep involved (e.g. support agents, design partners)']
    ]],
    ['p','For each important stakeholder, write down two more things. Their <strong>incentive</strong>: what they are measured on, which explains how they will react. And their <strong>decision right</strong>: do they decide, advise, or have a veto?'],
    ['c','Watch out','In AI products, security, legal and privacy leads often have a veto and low day-to-day interest. They sit in the “keep satisfied” corner until the day before launch, when they say no. Talk to them early.'],
    ['do','Prove it now',[
      ['p','Place at least five stakeholders for your capstone on the grid. Circle anyone who can veto the project.'],
      ['x','A filled grid with at least one person circled. If nobody can veto your project, you have probably missed someone. Ask who has to approve new software or new data flows.']
    ]],

    ['h','Idea 4: Write for executives, and imagine failure first'],
    ['p','Executives read quickly and decide a lot. Write so they can act after the first paragraph. A good decision memo has this shape:'],
    ['n',[
      '<strong>The decision or ask</strong>, in the first sentence.',
      '<strong>Why now</strong>: the problem and its evidence, in two or three sentences.',
      '<strong>Options</strong> you considered, including doing nothing.',
      '<strong>Your recommendation</strong> and what it costs.',
      '<strong>Risks</strong>, and what would make you change course.'
    ]],
    ['p','Before you send it, run a <strong>pre-mortem</strong>. Imagine it is six months from now and the project has failed. Everyone writes down, separately, why it failed. Then you plan to prevent the most likely causes.'],
    ['p','Pre-mortems work because people will name risks in an imagined failure that they would not raise about a live plan.'],
    ['do','Prove it now',[
      ['p','Write three reasons your capstone might fail six months from now. For each one, write one thing you could do this month to make it less likely.'],
      ['x','Three failure reasons with a prevention step each. The most useful reasons are specific, such as “the security review took four months”, rather than general, such as “we ran out of time”.']
    ]],
    ['q','I517'],

    ['h','Idea 5: Track dependencies and risks'],
    ['p','A <strong>dependency</strong> is anything you need from outside your team: another team’s work, a vendor, access to data, or an approval. Dependencies are where plans slip, because you do not control them.'],
    ['p','Keep a simple risk list. For each risk, write down how likely it is, how much damage it would do, who owns it, and what you are doing about it:'],
    ['tb',['Risk','Likelihood','Impact','Owner','Mitigation'],[
      ['Security review delays access to ticket data','High','High','PM','Start the review in week 1; prepare the data-flow diagram now'],
      ['Model provider changes pricing','Medium','Medium','Engineering lead','Keep the test set vendor-neutral so switching takes days'],
      ['Precision stays below 85%','Medium','High','PM and engineer','Time-box to three weeks, then narrow the use case']
    ]],
    ['p','AI products carry a few risks of their own: model quality may never reach the bar, the provider may change the model underneath you, and data approvals can take months.'],
    ['try',{id:'a6-memo',mins:12,min:150,rows:7,
      task:'Write the first paragraph of your decision memo to leadership. Start with the decision or ask, then give the evidence, the cost and the biggest risk.',
      ph:'The ask, why now, the cost, the biggest risk…',
      after:'A strong opening: <strong>I am asking for one engineer for eight weeks to pilot Theme Finder with ten support teams.</strong> Three of five support leads we interviewed miss fast-growing issues because tickets are tagged inconsistently, and each spends about three hours every Monday on the report. The pilot costs one engineer and about $200 in model usage. The biggest risk is the security review of sending ticket data to a model provider. We have started it this week, and we will stop the pilot if precision on our test set stays below 85% after three weeks.'}]
  ]
},

{
  id:'a7', num:'A7', part:6, minutes:840, labs:[],
  title:'Specs, stories and prototypes: from decision to delivery',
  concept:'Turn a decision into something engineering can build and users can test. You will write a problem-first PRD, break it into user stories with edge cases, slice an MVP end to end, plan two sprints, and test a clickable prototype with real users.',
  takeaway:[
    'Write a PRD that starts from the problem and has measurable acceptance criteria.',
    'Write user stories and job stories that cover edge cases, including AI failure states.',
    'Slice an MVP into a thin end-to-end version that tests your riskiest assumption.',
    'Plan sprints, estimate uncertain AI work with time-boxes, and run a retrospective.',
    'Choose the right prototype fidelity and run a usability test without leading the user.'
  ],
  needs:[['An outcome roadmap','The PRD specifies its first “now” item.','A6'],
         ['Your riskiest unknown','The MVP should test it.','A3']],
  capstone:{
    title:'PRD, prototype and a sprint plan',
    brief:'Three artifacts that take your capstone from decision to delivery.',
    steps:[
      'Write a PRD with these sections: problem evidence, users, scope, non-goals, UX states, AI behaviour, evaluations, metrics, rollout, security and open questions.',
      'Build a clickable prototype in Figma, Lovable or Google AI Studio. Test it with three target users using task prompts, and write down where each one got stuck.',
      'Create a two-sprint plan in Jira (or a spreadsheet) with stories, acceptance criteria, dependencies and a demo plan. After Sprint 1, run a retrospective and record what you will change.'
    ],
    done:[
      'An engineer could estimate the PRD without guessing what success looks like.',
      'The acceptance criteria cover failure, uncertainty and refusal states, not just the happy path.',
      'The prototype was tested with three real target users, and at least one change came from what they did.',
      'Mastery gate: score each artifact 0–3. Move on only when all three score at least 2.'
    ]
  },
  check:[
    ['Can engineering estimate the PRD without guessing the outcome?',
     'Give the PRD to an engineer and ask what “done” means. If they have to guess, for example because the spec says “accurate themes” with no number, add a measurable acceptance criterion such as “at least 85% of themes match the lead’s own grouping on the 50-ticket test set”.'],
    ['What is the smallest end-to-end vertical slice?',
     'The thinnest version that goes all the way from input to user value. For the ticket example: import one week of tickets from one help desk, group them, show five themes and email them to one lead. It skips settings, other help desks and history, but a real user can try it.'],
    ['Do the acceptance criteria cover failure, uncertainty and refusal states?',
     'Check for criteria like: “If no theme has more than five tickets, say so instead of inventing one”; “If the model times out, show last week’s report with a notice”; “Tickets in other languages are grouped or flagged, never dropped silently.” If these are missing, the product will fail in production in ways nobody planned for.']
  ],
  story:[
    ['c','Before you start','About 14 hours, across a week or more because of the user tests. You need a free account on Figma, Lovable or Google AI Studio for the prototype, and Jira (free tier) or a spreadsheet for the sprint plan. Core chapter 18 goes deeper on AI PRDs; this chapter covers the product-management basics.'],

    ['h','Idea 1: Start the PRD from the problem'],
    ['p','A <strong>PRD</strong> (product requirements document) explains what to build and why. A good one starts with the problem and its evidence, and only then describes the solution. Engineers make better decisions when they know the problem.'],
    ['p','A PRD for an AI feature has these sections:'],
    ['n',[
      '<strong>Problem and evidence.</strong> What is wrong today, for whom, and how you know.',
      '<strong>Users.</strong> Who this is for, and who it is not for.',
      '<strong>Scope and non-goals.</strong> What is included, and what is deliberately left out.',
      '<strong>UX states.</strong> What the user sees when it works, when it is unsure, when it fails and when it refuses.',
      '<strong>AI behaviour.</strong> What the model does, what it is given, and what it must never do.',
      '<strong>Evaluations.</strong> The test set and the pass threshold.',
      '<strong>Metrics, rollout and security.</strong> How you will measure success, release safely and protect data.',
      '<strong>Open questions.</strong> What you do not know yet.'
    ]],
    ['p','The most important part is the <strong>acceptance criteria</strong>. Each one must be something you can test. AI features give slightly different answers each time, so their criteria describe a rate across a test set, not a single correct output:'],
    ['tb',['Not testable','Testable'],[
      ['Themes are accurate','On the 50-ticket test set, at least 85% of themes match the lead’s own grouping'],
      ['It is fast','The weekly report is ready within 2 minutes for up to 1,000 tickets'],
      ['It handles bad input','If fewer than 20 tickets are imported, it says so and does not produce themes']
    ]],
    ['c','Tip','There is a fillable AI PRD template in the <a href="#/templates/prd">workbench</a>. Use it for the Build it task.'],
    ['do','Prove it now',[
      ['p','Write three acceptance criteria for your capstone’s first feature. Make each one testable: a number, a test set or a specific condition.'],
      ['x','Three criteria. For each, ask: could two people disagree about whether it passed? If yes, it is not testable yet.']
    ]],
    ['q','I518'],

    ['h','Idea 2: Break the work into stories, including the edge cases'],
    ['p','A <strong>user story</strong> describes one piece of value from the user’s point of view:'],
    ['code','As a [role], I want [action], so that [benefit].\n\nAs a support lead, I want to see the five biggest themes from last week,\nso that I can tell the product team what to fix first.'],
    ['p','A <strong>job story</strong> uses the situation instead of the role, which often gives engineers more useful context:'],
    ['code','When I open the report on Monday morning, I want to see what is new\nsince last week, so I can raise it before it grows.'],
    ['p','Every story needs acceptance criteria and <strong>edge cases</strong>: the unusual inputs and states that break things. AI features have extra edge cases that ordinary software does not:'],
    ['tb',['Edge case','What should happen'],[
      ['No clear themes this week','Say so, rather than inventing themes'],
      ['Tickets in another language','Group them, or flag them clearly; never drop them silently'],
      ['Model times out','Show last week’s report with a notice'],
      ['Model is unsure','Mark the theme as low confidence'],
      ['Ticket contains personal data','Remove it before sending the text to the model']
    ]],
    ['do','Prove it now',[
      ['p','Write one user story for your capstone, with two acceptance criteria and three edge cases. Make at least one edge case specific to AI.'],
      ['x','One story, two criteria and three edge cases. The AI-specific one is usually about uncertainty, wrong answers or refusals.']
    ]],

    ['h','Idea 3: Build a thin slice that works end to end'],
    ['p','An <strong>MVP</strong> (minimum viable product) is the smallest thing that tests your riskiest assumption with real users. It is not a small version of the whole product.'],
    ['p','There are two ways to cut work:'],
    ['l',[
      '<strong>Horizontal slices</strong> build one layer at a time: all the data import, then all the processing, then all the interface. Nothing works for a user until the last layer is done.',
      '<strong>Vertical slices</strong> build a thin version of every layer, so a user can try something from the first week.'
    ]],
    ['p','For the ticket example, the first vertical slice is:'],
    ['code','One help desk  →  last week’s tickets  →  group into themes  →  show top 5  →  email one lead\n\nLeft out for now: other help desks, history, settings, alerts, sharing'],
    ['key','Build the thinnest slice that lets a real user try the core value. Everything else can wait until you know it works.'],
    ['do','Prove it now',[
      ['p','Draw your capstone’s first vertical slice as one line, like the example above. Then list what you are deliberately leaving out.'],
      ['x','One line from input to user value, and a list of exclusions. If the line has more than six steps, look for a step you can do by hand for the first version.']
    ]],
    ['q','I519'],

    ['h','Idea 4: Plan sprints, estimate honestly, and review each one'],
    ['p','Many teams work in <strong>sprints</strong>: fixed periods of one or two weeks. Each sprint starts with planning and ends with a demo and a retrospective.'],
    ['n',[
      '<strong>Planning.</strong> Choose the stories that fit the team’s capacity, starting with the highest priority.',
      '<strong>Estimation.</strong> Size stories relative to each other, using points or T-shirt sizes (S, M, L). Relative sizes are easier to agree on than hours.',
      '<strong>Demo.</strong> Show working software, not slides.',
      '<strong>Retrospective.</strong> Ask three questions: what went well, what did not, and what will we change next sprint?'
    ]],
    ['p','AI work is hard to estimate, because you do not know how good the model will be until you try. So <strong>time-box</strong> uncertain work instead: “Spend three days. If precision on the test set is below 70%, stop and rethink the approach.” A time-box turns an unknown estimate into a known decision point.'],
    ['do','Prove it now',[
      ['p','Pick the most uncertain story in your plan. Write a time-box for it: how long you will spend, what result counts as success, and what you will do if you do not reach it.'],
      ['x','One time-box with a duration, a threshold and a fallback. The fallback matters most: it turns a failed experiment into a decision.']
    ]],

    ['h','Idea 5: Prototype at the right fidelity, and test without helping'],
    ['p','<strong>Fidelity</strong> is how close a prototype is to the real thing. Match it to the question you are trying to answer:'],
    ['tb',['Fidelity','Tool','Good for testing'],[
      ['Low','Paper sketch','Whether the flow makes sense'],
      ['Medium','Clickable mock-up in Figma','Whether users can find their way around'],
      ['High','Working prototype in Lovable or Google AI Studio','Whether users trust and act on the real AI output']
    ]],
    ['c','Watch out','For AI features, use real model output in your prototype, not perfect made-up examples. Users react differently to answers that are sometimes wrong, and that reaction is exactly what you need to learn about.'],
    ['p','To run a <strong>usability test</strong>, give the user a task, not instructions. For example: “It is Monday morning. Find the biggest new problem from last week.” Then watch and stay quiet. Note where they hesitate, click the wrong thing or look confused.'],
    ['p','The hardest part is not helping. When a user gets stuck, that is your finding. Three to five users will show you most of the serious problems.'],
    ['try',{id:'a7-test',mins:10,min:100,rows:5,
      task:'Write a usability test plan for your prototype: two task prompts, what you will watch for, and the one thing you most want to learn.',
      ph:'Two task prompts, what to watch for, key question…',
      after:'A strong plan: <strong>Task 1:</strong> “It is Monday morning. Find the biggest new problem from last week.” <strong>Task 2:</strong> “You think one theme is wrong. Tell the tool.” <strong>Watch for:</strong> whether they open the themes or scroll the raw tickets first, how long before they trust a theme, and whether they find the correction button. <strong>Key question:</strong> would they paste these themes into their report without checking? If not, what would they need to see first?'}],
    ['q','I520']
  ]
},

{
  id:'a8', num:'A8', part:6, minutes:720, labs:[],
  title:'Generative AI foundations: how the models work',
  concept:'Learn how large language models are made and how they produce text, at the level a PM needs to make decisions. You will look inside attention, compare prompting with RAG and fine-tuning, and test two models on the same ten cases.',
  takeaway:[
    'Explain the difference between predictive and generative AI, and when each fits.',
    'Describe tokens, context windows, transformers and attention in plain words.',
    'Explain the three stages of training a model, and how they differ from inference.',
    'Choose between prompting, RAG and fine-tuning for a given problem.',
    'Describe the AI market: model providers, open-weight models, infrastructure and applications.'
  ],
  needs:[['A candidate problem with an AI fit','This chapter decides which AI technique suits it.','A1'],
         ['A build, buy or partner decision','This chapter explains what you are buying.','A5']],
  capstone:{
    title:'Three experiments on how models work',
    brief:'Three short experiments that turn the ideas in this chapter into evidence you have seen for yourself.',
    steps:[
      'Use an attention visualiser (the notebook in Idea 2, or the Transformer Explainer website) to see which words influence a prediction. Write down what the demo shows and what it does not prove.',
      'Build a decision table comparing prompt-only, RAG and fine-tuning across freshness, private data, style, cost, latency and evaluation. Fill it in for your capstone.',
      'Run the same ten test cases through two different model families using OpenRouter or Google AI Studio. Record quality, latency and cost for each.'
    ],
    done:[
      'Your attention write-up says clearly what the visualisation does not show.',
      'The decision table ends with a choice for your capstone and the reason for it.',
      'The model comparison uses the same ten cases for both models, and records all three measures.',
      'Rubric: conceptual accuracy 40%, experiment quality 30%, decision clarity 30%.',
      'Mastery gate: score each artifact 0–3. Move on only when all three score at least 2.'
    ]
  },
  check:[
    ['Why is attention not the same as an explanation?',
     'Attention shows which tokens a single layer weighted when processing another token. A model has dozens of layers, each with many attention heads, and the final answer comes from all of them together. A bright line in one attention map is a clue about what the model used, not a faithful account of why it answered as it did.'],
    ['When is fine-tuning the wrong fix for missing facts?',
     'Almost always. Fine-tuning changes how a model behaves, such as its tone, format or how it handles a narrow task. It is a poor way to add facts, especially facts that change. If the model does not know your refund policy, put the policy in the context with RAG. Chapter 19 covers this in depth.'],
    ['What is the difference between training-time learning and context-time conditioning?',
     'Training changes the model’s weights permanently, for every future request. Context-time conditioning means putting instructions, examples or documents in one request. It shapes that one answer and is forgotten afterwards. Almost everything you do as an application builder is context-time.']
  ],
  story:[
    ['c','Before you start','About twelve hours. You need a free Google account for Colab and Google AI Studio, and optionally a free OpenRouter account. The technical core, from Chapter 1 onwards, builds on everything here with hands-on code, so treat this chapter as the map before the journey.'],

    ['h','Idea 1: Predictive AI and generative AI'],
    ['p','Both kinds of AI learn patterns from data and make predictions. The difference is what they predict:'],
    ['tb',['','Predictive AI','Generative AI'],[
      ['Output','A label or a number','New content: text, images, code or audio'],
      ['Examples','Spam or not spam; the chance a customer cancels; next month’s sales','Drafting an email; summarising a call; answering a question'],
      ['Training','Labelled examples for one task','Huge amounts of general data, then adapted to follow instructions'],
      ['Tasks per model','Usually one','Many, chosen by the instructions you give'],
      ['Typical cost per use','Very low','Higher, and it grows with the length of input and output']
    ]],
    ['p','A large language model, or <strong>LLM</strong>, is generative AI for text. It predicts the next piece of text, over and over, which lets it write whole answers.'],
    ['c','Why this matters','Not every AI problem needs generative AI. Predicting which customers will cancel is a predictive task, and a small classic model does it more cheaply and reliably. Chapter 2.4 shows how far a simple classifier can go.'],
    ['do','Prove it now',[
      ['p','List three AI features you have used recently. Label each as predictive or generative.'],
      ['x','Three labelled features. Recommendations, fraud alerts and spam filters are predictive. Chat assistants, image generators and meeting summaries are generative.']
    ]],
    ['q','I523'],

    ['h','Idea 2: Tokens, context windows, transformers and attention'],
    ['p','An LLM does not read words. It reads <strong>tokens</strong>: pieces of text that are often a whole word and sometimes part of one. In English, one token is about three-quarters of a word on average.'],
    ['p','Each request has a limit on how many tokens it can include, counting both your input and the model’s answer. This limit is the <strong>context window</strong>. Everything the model uses to answer must fit inside it.'],
    ['p','Modern LLMs use an architecture called the <strong>transformer</strong>. Its key part is <strong>attention</strong>: for each token, the model works out which other tokens in the context matter most for predicting what comes next.'],
    ['p','Here is a classic example. In the sentence <em>“The trophy did not fit in the suitcase because it was too big”</em>, the word “it” means the trophy. Attention is how the model links “it” to “trophy” rather than to “suitcase”.'],
    ['p','You can see attention for yourself. Open a new Colab notebook and run:'],
    ['code','!pip install -q transformers bertviz\n\nfrom transformers import AutoTokenizer, AutoModel\nfrom bertviz import head_view\n\nname = "bert-base-uncased"\ntok = AutoTokenizer.from_pretrained(name)\nmodel = AutoModel.from_pretrained(name, output_attentions=True)\n\ntext = "The trophy did not fit in the suitcase because it was too big."\ninputs = tok(text, return_tensors="pt")\noutputs = model(**inputs)\ntokens = tok.convert_ids_to_tokens(inputs["input_ids"][0])\n\nhead_view(outputs.attentions, tokens)'],
    ['x','An interactive diagram with the sentence’s tokens on each side and lines between them. Click the token “it” and switch between layers. In some layers and heads, “it” links strongly to “trophy”.'],
    ['snag',[
      'An error saying a module was not found',
      'The install line did not run. Run the first cell again and wait for it to finish before running the rest.',
      'The diagram does not appear',
      'Some browsers block the interactive output. Try Chrome, or use the no-code option: the Transformer Explainer website (search for “Transformer Explainer Polo Club”), which shows attention in your browser without any setup.',
      'It runs, but “it” does not link to “trophy” in the layer you picked',
      'Expected. Different layers and heads learn different patterns. Click through several layers. Seeing that the pattern appears in only some places is part of the lesson.'
    ]],
    ['c','Watch out','Attention is a clue, not an explanation. A model has many layers, each with many attention heads, and the final answer comes from all of them. Never present an attention map as proof of why a model gave an answer.'],
    ['q','I522'],

    ['h','Idea 3: How a model is trained, and what inference means'],
    ['p','A chat model like the ones you use is made in three stages:'],
    ['n',[
      '<strong>Pre-training.</strong> The model learns to predict the next token on a vast amount of text from the web, books and code. This takes months and costs millions of dollars. The result is a <em>base model</em>, which can continue any text but does not reliably follow instructions.',
      '<strong>Instruction tuning.</strong> The model is trained further on examples of instructions paired with good answers. Now it follows instructions.',
      '<strong>Learning from human feedback.</strong> People compare pairs of answers and pick the better one. The model is trained to prefer answers like the ones people chose. This is often called <strong>RLHF</strong> (reinforcement learning from human feedback). It makes the model more helpful and more careful.'
    ]],
    ['p','All three stages change the model’s <strong>weights</strong>: the billions of numbers inside it that encode what it has learned.'],
    ['p','<strong>Inference</strong> is different. It means using the finished model to answer a request. Inference does not change the weights. When you use an AI API, you are paying for inference, charged by the token.'],
    ['key','Training changes the model, permanently, for everyone. What you put in a prompt shapes one answer and is then forgotten.'],
    ['do','Prove it now',[
      ['p','Open any chat assistant. Tell it a made-up fact, such as “My company’s refund window is 17 days.” Ask it about the refund window in the same conversation, then again in a brand-new conversation.'],
      ['x','It remembers within the conversation and not in the new one. The fact was context, not training. Chapter 1.5 shows why: the app resends the conversation with every message.']
    ]],

    ['h','Idea 4: Prompting, RAG or fine-tuning'],
    ['p','When a model does not do what you need, you have three main tools:'],
    ['tb',['','Prompting','RAG','Fine-tuning'],[
      ['What it is','Instructions and examples in the request','Retrieve relevant documents and add them to the request','Train the model further on your own examples'],
      ['Up-to-date facts','No','Yes, as fresh as your documents','No, fixed at training time'],
      ['Private data','Only what fits in the prompt','Yes, from your own sources','Baked in, which is hard to remove later'],
      ['Style and format','Good','Not its purpose','Very good for consistent behaviour'],
      ['Cost to set up','Very low','Medium','High'],
      ['Speed per request','Fast','Slower, because retrieval adds a step','Fast'],
      ['How to evaluate','Test cases','Retrieval and answer quality separately','Test cases before and after training']
    ]],
    ['p','<strong>RAG</strong> stands for retrieval-augmented generation. You will build a complete RAG system by hand in Chapters 3 to 7.'],
    ['key','If the model is missing facts, give it the facts with RAG. Fine-tuning teaches behaviour, not knowledge.'],
    ['p','Start with prompting. Add RAG when the model needs information it does not have. Consider fine-tuning only when you need very consistent behaviour, or want a smaller, cheaper model to do a narrow job well. Chapter 19 covers this decision in depth.'],
    ['do','Prove it now',[
      ['p','For your capstone, fill in the decision table above with one row per criterion, and circle the best choice for each.'],
      ['x','A filled table and a choice. For most capstones in this book the answer is prompting plus RAG. If you chose fine-tuning, name the specific behaviour that prompting could not produce.']
    ]],
    ['q','I521'],

    ['h','Idea 5: The AI market in one picture'],
    ['p','You met the AI value chain in A4: infrastructure, foundation models, tooling and applications. At the model layer, there are two kinds of provider:'],
    ['tb',['','Closed models','Open-weight models'],[
      ['Examples','OpenAI GPT, Anthropic Claude, Google Gemini','Meta Llama, Mistral, Qwen, DeepSeek'],
      ['How you use them','Through the provider’s API','Download and run them yourself, or use a host'],
      ['Strengths','Usually the highest quality; nothing to run','More control over data and cost; can be fine-tuned freely'],
      ['Trade-offs','Data leaves your systems; prices and models can change','You pay for hosting and do the maintenance']
    ]],
    ['p','Services such as <strong>OpenRouter</strong> let you call many models, closed and open, through one API. That makes it easy to compare them on your own test cases, which is the only comparison that counts.'],
    ['p','Two trends shape AI product strategy. Model prices keep falling, and good models become available from many providers. Both push value up to the application layer, where workflow, data and trust decide who wins.'],
    ['try',{id:'a8-compare',mins:15,min:120,rows:6,
      task:'Run three of your capstone test cases through two different models (for example, one closed and one open-weight model on OpenRouter). Record which gave better answers, how long each took, and what each cost.',
      ph:'Case, model A result, model B result, time, cost, verdict…',
      after:'A strong write-up is specific. For example: “Three ticket batches. Model A found the main theme in all three; model B missed the smallest theme twice. A took about 4 seconds per batch, B about 2. A cost about $0.012 per batch, B about $0.002.” Then the verdict: “For the weekly report, A is worth six times the cost, because a missed theme is the failure users fear most. For a real-time alert, speed matters more, so test B on the alert cases.” Three cases is enough to learn the method. The Build it task asks for ten.'}]
  ]
}
];

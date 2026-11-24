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
  id:'ch0', num:0, part:6, curriculumTier:'core', phase:1, prerequisites:[], nextUnits:['ch05'], minutes:10, labs:[],
  title:'Start here: how this course works',
  concept:'This chapter takes about ten minutes. It shows you how this site works, like the first page of a school diary. You install nothing. You make no account. You need no AI knowledge yet.',
  takeaway:[
    'Say how an app is different from a model.',
    'Tap a word with an underline to see what it means. You stay on the same page.',
    'Make a plan for a day when you do not feel like studying.'
  ],
  story:[
    ['p','Welcome. This course is for people who have never studied AI. You can start from zero. First, see how the site works. It helps you learn more.'],
    ['p','Many people quit a hard subject for one reason. An odd word goes by early on. They read on without knowing it. A few pages later, nothing makes sense. It is like missing one step of a staircase in the dark. This site has two helpers to stop that.'],
    ['h','Tap a word with an underline'],
    ['p','The first time a hard word shows up in a chapter, it has a dotted line under it. A technical term (a grown-up word for a tool or idea) is such a word. Tap it. A short note opens right there. You stay on the page. You do not lose your place.'],
    ['p','Try it on a sentence with four such words. An <strong>app</strong> (the screens and code people use) sends a <strong>prompt</strong> (a note with what you want) to a <strong>model</strong> (the program that writes the reply). The bill comes in <strong>tokens</strong> (small pieces of words). Tap each one now.'],
    ['p','Some notes say <em>you build this in Chapter 9</em>. That means the word comes early on purpose, like a trailer before the film. For now, the one-line note is all you need.'],
    [
      'try',
      {id:'ch0-tap',
       mins:2,
       min:12,
       rows:2,
       task:'Now say it in your own words. How is the <em>app</em> different from the <em>model</em>? Two lines are enough. A partly wrong answer is fine. Write first, then read the answer. That is the whole point.',
       ph:'The app is … the model is …',
       after:'The model is a program on someone else’s computers. Think of a parrot that has read a whole library. Words go in, words come out. It has no buttons. It does not remember you. It does not know a person is there. The app is your product: the screens and code that pick what goes to the model, and what happens to the reply. Think of the app as the shop, and the model as the cook in the back. People say “the AI”, but most of it is your app. The model has one narrow job. Keep the two apart when you talk about AI design.'}
    ],
    ['h','The course asks you questions'],
    ['p','The box you just used shows up again and again. You will find another every few paragraphs. It is like a teacher asking a question in class. Some boxes ask you to guess before you see the answer. Some ask you to write a few lines. Some have marks.'],
    ['p','Why so many? Reading and understanding feel the same while you do them. Only understanding stays with you. A wrong answer you were sure about helps too. It shows you an idea in your head that was not true. Nobody else sees your answers. There is no pass mark.'],
    ['h','How to use the course'],
    ['p','Four tips make the course smoother. Here they are, like four rules on a classroom wall.'],
    [
      'l',
      ['<strong>You do not install anything.</strong> Everything runs in your browser (the app you use to open websites), on these pages. That covers the tools in each chapter and the code in chapters that have code. Each code block (one box of code) has a <strong>Run</strong> button under it. You bring one thing from outside: a free API key. It is a secret password for the model. It also tells the company whom to bill. It takes about ten minutes to get, once. The setup page walks you through it.','<strong>Do the hands-on steps.</strong> Each chapter swings between an idea and a step that shows it. It is like learning to ride a cycle: you must pedal. The steps are marked <em>Do this</em> or <em>Prove it now</em>. Most of your learning happens in those steps.','<strong>Do one chapter per sitting.</strong> Each chapter shows how long it takes. If one takes longer, that is about the chapter, not about you. Stop while you still have some energy, like leaving the table a little hungry. Then it is easier to come back tomorrow.','<strong>Your progress is saved.</strong> When you sign in (log in with your account), the site keeps your place, like a bookmark. Read on your phone. Carry on from the same place on your computer.']
    ],
    ['h','Plan for the hard days'],
    ['p','Some days will be harder than others, even with a good plan. It is like a rainy day on a trip you planned well.'],
    ['key','Some chapters will feel too hard. That is normal. When it happens, do the smallest step you can. Then stop for the day. Every question also has a “Stuck?” button. It shows the answer. It does not count against you.'],
    ['p','The best time to decide what to do on a bad day is now, while it is easy. It is like keeping an umbrella by the door before the rain.'],
    [
      'try',
      {id:'ch0-quit',
       mins:3,
       min:40,
       rows:3,
       task:'Decide now, while it is easy. What will you do on an evening when you do not want to open this? What is the smallest step you would still take? What will you tell yourself about a day you skip?',
       ph:'When I do not want to open this, I will …',
       after:'Plans that work share three things. First, the smallest step is tiny: one question, two minutes, not a whole chapter. Second, you know where to restart without deciding. Deciding is hard when you are tired. Third, you have already decided that a missed day means nothing. It does not mean starting again. Everyone misses days. People who finish expected that.'}
    ],
    ['c','No setup yet','You do not need the notebook (a page where you run code) or an API key (your secret password for the model) yet. Setup comes in Week 5 of <a href="#/start">your route</a>. That is right after you see what a key pays for.'],
    ['p','That is all for this chapter. Press “Mark chapter complete” below. <a href="#/start">Your route</a> then moves on to the book. Tomorrow’s ten minutes wait there.']
  ]
},

{
  id:'a1', num:'A1', part:6, curriculumTier:'reference', phase:0, prerequisites:[], nextUnits:['a2','a8'], minutes:360, labs:[],
  title:'Your learning system: role, evidence and a capstone problem',
  concept:'Before you learn anything, you set up how you will learn. You score your skills for the applied AI PM job (PM means product manager). You make one place for all your work. And you meet the real problem you will build around, all course long.',
  takeaway:[
    'Give yourself a score for each of the seven parts of the applied AI PM job. Write proof for each score.',
    'Set up one notebook (a place for notes) and one repository (an online folder that remembers every change). Keep every artifact (each thing you make) in them.',
    'Plan one week of study. Build first. Then use the 0–3 score, the mastery gate (the score you must reach), to decide when to move on.',
    'Pick three project ideas. For each one, say why AI may help or may not help.'
  ],
  needs:[],
  capstone:{
    title:'Set up your workspace and name your project',
    brief:'This is your first capstone (the big project of the course). At the end you have three things: an honest picture of your skills, one place for your work, and a clear line about your project. The project is Bharat Privacy Guard. It finds private details like Aadhaar and PAN numbers in English, Hindi and Hinglish text. Then it hides them. Read <a href="#/project">the project page</a> first.',
    where:'You write this one. Use a notes app, a document or paper for your scorecard. For everything else, use a repository. Here it is only folders and text files. There is no real code.',
    steps:[
      'Write a one-page scorecard of your own skills. List the seven parts of the product manager job from this chapter: discovery, strategy, technical understanding, delivery, analytics, business and leadership. Give yourself 0, 1, 2 or 3 for each. Next to each score, write one line of proof. “I have run five customer interviews” is proof. “I think I am good at this” is not.',
      'Make a repository (for example on GitHub, a website where people keep their work online). Add these folders: <code>research</code>, <code>product</code>, <code>experiments</code>, <code>evals</code>, <code>analytics</code>, <code>security</code> and <code>portfolio</code>. At the top, add one file called <code>decision-log.md</code>.',
      'Open the decision log. Write your first two decisions in it. Each one has three lines: what you decided, why, and what would make you change your mind. Decision one: “My capstone project is Bharat Privacy Guard”. Decision two can be any choice you have already made, like which notebook tool you will use.',
      'Name two other projects you thought about. For example: a tool that sums up customer-support tickets, or a tool that spots fraud in payments. For each one, write two or three lines. Who would use it? What do they do today? Why did you not pick it?',
      'Write one paragraph that explains Bharat Privacy Guard to a friend who does not work in technology. Use your own words. Use no jargon. For an example, look at starter sentence 7 on the project page.',
      'Write one sentence on what would make you stop using AI for this project. For example: “If a plain rule can already find 99 out of 100 of these numbers, I do not need a model.”'
    ],
    done:[
      'A one-page scorecard, with a line of proof next to every score.',
      'A repository with the seven folders, and a decision log with two decisions in it.',
      'Two project ideas you did not pick, each with a reason.',
      'A one-paragraph explanation of the project. Your friend should be able to say it back to you.',
      'One sentence on what would make you drop AI for this problem.',
      'A score from 0 to 3 for each item above, using this chapter’s scale, like marking your own homework. Move on only when every score is 2 or more.'
    ]
  },
  check:[
    ['Can you name evidence, not confidence, for every score?',
     'Go through the scorecard line by line. If a score rests on “I think I am good at this”, lower it to 1 until you have an artifact that proves it. Honest low scores are more useful than confident high ones, because they show you where to spend your time.'],
    ['Can another person find each artifact in under two minutes?',
     'Ask a friend or colleague to find your candidate-problem list without your help. If they can’t, rename the files, or add a short <code>README.md</code> at the top of the repository that says what is where.'],
    ['What would make you reject AI for one of your candidates?',
     'Name the specific condition. For example: “If the tickets already have accurate category tags, a count in the help-desk tool solves this without AI.” If you can’t name one, you’re choosing AI before you understand the problem.']
  ],
  story:[
    ['c','On your route','First, go through it quickly, in about twenty minutes: read it and answer the boxes. The long “Build it” work can wait until later.'],
    ['c','Before you start','The full chapter takes about six hours, over two or three sittings. Keep a notes app or a paper notebook ready. You need no account to begin. The first task is just a page of writing.'],
    ['p','In the last chapter you saw how this site works. Now the real work starts. The first job has nothing to do with AI. It is about you. You set up how you will learn: where you stand today, where your work will live, and what you will build.'],

    ['h','How this course works'],
    ['p','This course teaches the applied AI product manager job by making you do the work, not only read. Every chapter has the same five steps, in the same order. Soon you will know what comes next. It is like a recipe you cook again and again:'],
    ['n',[
      '<strong>Idea.</strong> One idea, in plain words.',
      '<strong>Prove it now.</strong> A quick example, and a counterexample (a case where the idea fails). You write both right away.',
      '<strong>Build it.</strong> A real artifact (a thing you make): a document, an interview, a prototype (a rough first model of a product) or some code.',
      '<strong>Check yourself.</strong> Questions, and a 0–3 score for what you built.',
      '<strong>Close the sitting.</strong> Three lines: what confused you, what changed your mind, and what you will test next.'
    ]],
    ['p','The chapters come in three groups. <strong>Track A</strong> is where you are now. It teaches the basics of product management and the ideas behind generative AI (AI that writes new text). <strong>Parts I to V</strong> are the technical core. There you build a real AI system, break it, and measure it.'],
    ['p','<strong>Track B</strong> is the business side: pricing, growth, analytics (reading numbers about what users do) and shipping to real users. It comes after the capstone in Chapter 34, where you ship the project.'],
    ['c','Note','You do not need to plan the order. <a href="#/start">Your route</a> takes you through it, one week at a time: a chapter of the book, the story, and then the chapter here that practises it.'],

    ['h','Five rules that keep the work honest'],
    ['p','It is easy to make work look finished when it is not. These five rules apply to every chapter. Each one blocks a shortcut that people often take. Think of them as railings on a bridge.'],
    ['l',[
      '<strong>Talk to real users.</strong> Personas (made-up users) written by an AI do not count as research. Interview people who really have the problem.',
      '<strong>A demo is not a launch.</strong> The final capstone needs a stable web address, and real people really using it.',
      '<strong>Track product metrics and model metrics.</strong> A metric is a number you watch. A model can score 95% on your test and still fail your users. So watch both.',
      '<strong>Passing tests does not prove users value it, and happy interviews do not prove it works reliably.</strong> You need proof for both.',
      '<strong>Keep secrets out of notebooks and repositories.</strong> An API key is a secret password for the model; it also tells the company whom to bill. Keep it in an environment variable (a hidden setting on your computer) or your platform’s secret store.'
    ]],

    ['h','Idea 1: Score yourself, with proof'],
    ['p','Let us start with you. The applied AI PM job has seven parts. You score yourself on each one now. You score again at the end of the course, so you can see how far you came. Think of a height mark on a door frame.'],
    ['p','Here are the seven parts, and what each one covers.'],
    ['tb',['Area','What it covers'],[
      ['Discovery','Finding real problems by talking to users and watching them work.'],
      ['Strategy','Choosing which problem to solve, for whom, and what not to do.'],
      ['Technical fluency','Knowing AI systems well enough to weigh trade-offs (give a little here to gain a little there) with engineers.'],
      ['Delivery','Turning a decision into a spec (a written plan of what to build), a schedule and a finished product.'],
      ['Analytics','Measuring what users do, and whether a change helped.'],
      ['Business','Pricing, costs, and whether the product can earn money.'],
      ['Leadership','Getting people with different goals to agree and act.']
    ]],
    ['p','You give each part a score from 0 to 3. The course uses this same scale for every artifact you make. Learn it now. It is like marks on a report card.'],
    ['tb',['Score','Meaning'],[
      ['0','Nothing made, or only theory you copied.'],
      ['1','You tried, but have no proof, or nobody can repeat it.'],
      ['2','Usable: it has proof, others can review it, and others can repeat it.'],
      ['3','Ready for decisions: tested with users or data, its limits written down, and the next step clear.']
    ]],
    ['p','See how the higher scores all need proof. That is the heart of this scale.'],
    ['key','A score needs proof. “I am good at strategy” is a feeling. “I wrote the strategy memo that set our Q3 roadmap (the plan of what comes first, next and later)” is proof.'],
    ['do','Prove it now',[
      ['p','Pick the part where you feel strongest. Write the one piece of proof that best backs up that feeling.'],
      ['p','Now pick your weakest part. Write what proof would move you up one point.'],
      ['x','You should have two lines. Say your strongest part has no solid proof, like a document, a result or a decision you made. Then give it 1, not 2.']
    ]],
    ['p','Now try once more, this time with a score on the page.'],
    ['try',{id:'a1-evidence',mins:5,min:60,rows:4,
      task:'Write one score and its proof. Then write one score you would have given yourself on confidence alone, and say why the proof changes it.',
      ph:'Part, score, proof…',
      after:'Here is an answer that works. <strong>Delivery: 2.</strong> Proof: I ran the rollout of a citizen-services portal across several districts. I kept the weekly status log that the department used to set go-live dates. <strong>Strategy: I would have said 2, but it is a 1.</strong> I have opinions about strategy. But I have never written one that someone else acted on. The test is simple: is there something written that another person could check?'}],
    ['c','From delivery to product','You do not start at zero. Delivery and Leadership can start at 2, with proof from your government projects: a rollout plan, a steering-committee note, or a stakeholder (someone who cares about the result) you brought round. Discovery, Strategy and Analytics are different. “I delivered what was asked” does not count there. The proof is a decision you made when nobody told you what to build, and a number you moved.'],
    ['q','I501'],
    ['p','One more, this time from your own past.'],
    ['try',{id:'a1-owned',mins:6,min:60,rows:4,
      task:'Name one decision on a past project that was yours. What would have happened if you had chosen the other way? Save your answer in decision-log.md, under the heading “Decisions I owned before this course”.',
      ph:'The decision, who disagreed, what would have happened otherwise…',
      after:'Here is an answer that works. <strong>Decision:</strong> I held back go-live of a citizen-services portal by two weeks, because the payment step had failed two test runs. <strong>If I had decided otherwise:</strong> the portal would have opened on the promised date, and applicants in three districts would have been charged twice. Keep this entry. Chapter B7 asks you to turn it into an interview story.'}],

    ['h','Idea 2: Keep all your work in one place'],
    ['p','Now you know where you stand. Next you need a place to keep what you make. You will make around fifty things in this course: interview notes, a strategy memo, a PRD (the recipe card for a product), test sets, dashboards (one screen of numbers) and a deployed app.'],
    ['p','If they sit in many different tools, you cannot find them when you need them. That could be in the capstone, or in a job interview. Think of papers spread over five cupboards.'],
    ['p','So set up two things, one time only:'],
    ['n',[
      '<strong>A notebook of record.</strong> One running document, in Google Docs, Notion or on paper. Put in it your guesses, results and notes from every chapter.',
      '<strong>A repository.</strong> An online folder that remembers every change, ideally on GitHub. Keep everything you build in it.'
    ]],
    ['p','Use this folder plan in the repository:'],
    ['code','/research      interview notes, market research\n/product       strategy, roadmaps, PRDs\n/experiments   notebooks and prototype code\n/evals         test sets and evaluation results\n/analytics     tracking plans and dashboards\n/security      threat models and risk registers\n/portfolio     case studies\ndecision-log.md'],
    ['c','Tip','No GitHub account yet? Start with a folder on your computer or in Google Drive, with the same plan. The next page, A1.5, shows you how to move it to GitHub in about twenty minutes.'],
    ['p','The most important file is <code>decision-log.md</code>. Whenever you decide something in this course, add an entry. It could be which problem to solve, which model to use or which metric matters. Each entry has four parts: the date, the decision, the proof, and what would make you change it. Think of a diary for choices.'],
    ['do','Prove it now',[
      ['p','Make the folders. Then add your first entry to <code>decision-log.md</code>. For example:'],
      ['code','2026-10-19\nDecision: I will study one hour a week in month 1, on Sunday morning.\nEvidence: my calendar for the last four weeks.\nRevisit if: I miss two weeks in a row.'],
      ['x','You should now have a folder plan that anyone could find their way around, and one decision with its proof. Test it: could a stranger find your interview notes in under two minutes?']
    ]],

    ['h','Idea 3: Build first, then check if you are ready'],
    ['p','You have a place to work. Next is time. How much should you study each week? Your route starts at about an hour to an hour and a half a week. It grows to four or five hours in capstone weeks. Split your time into four blocks. Give the biggest block to building. This split is for twelve hours a week. Shrink it to fit your week:'],
    ['tb',['Block','Hours','What you produce'],[
      ['Learn and prove','3','Experiments, notes and quiz answers'],
      ['Build','5','Something you make: a document, prototype or code'],
      ['Users and feedback','2','Interview notes, recordings (with consent), what you saw people do'],
      ['Measure and reflect','2','Metrics, a decision-log entry and the next test']
    ]],
    ['p','End every week with two things: something that another person could look at, and a decision written in your log.'],
    ['p','How do you know you are ready for the next chapter? At the end of each chapter, you score what you built on the same 0–3 scale. This is the <strong>mastery gate</strong>. Think of a gate at a railway crossing: it opens only when the track is clear.'],
    ['key','Move on only when everything you made scores at least 2, and nothing about safety, privacy or proof scores 0.'],
    ['c','Watch out','The gate scores what you made, not how well you understood the reading. Many people feel they understood a chapter and still have nothing that scores 2. Then the chapter is not finished.'],
    ['c','On your route','On your first pass through Track A, you read each chapter and answer its boxes. The gate applies later, when you come back to do the “Build it” work. So a first pass never has to wait for it.'],
    ['do','Prove it now',[
      ['p','Open your calendar and block out next week using the four blocks above. Put the Build block where you have the most energy, not where it is easiest to fit.'],
      ['x','You should now have four blocks in next week’s calendar, in the same proportions, adding up to the hours you really have. Write that number in your decision log. A plan you keep beats a bigger plan you drop.']
    ]],

    ['h','Idea 4: Pick the problem you will build around'],
    ['p','The last piece matters most. In every chapter you apply its ideas to one real problem that stays with you all course. Here that problem is already chosen: Bharat Privacy Guard, the project in the book’s story. Still, learn how to choose one. In a job, nobody hands you the problem.'],
    ['p','A good capstone problem has four things:'],
    ['l',[
      '<strong>A user you can reach.</strong> You can talk to at least five people who have this problem.',
      '<strong>A task you can watch.</strong> You can see how people do it today.',
      '<strong>Pain you can measure.</strong> It costs time, money or mistakes that you can count.',
      '<strong>A real reason AI might help.</strong> The task is about reading, writing, summing up, sorting or searching text, pictures or speech.'
    ]],
    ['p','Take the last one seriously. Many problems are better solved with ordinary software, like a form, a rule or a database query (a question you ask a table of data). Saying so is part of your job as an AI PM.'],
    ['do','Prove it now',[
      ['p','Pick one problem idea. Write one sentence on why AI might help, and one on why ordinary software might be enough.'],
      ['x','You should have two sentences. If you cannot write the second one, think harder. Almost every problem has a version that needs no AI.']
    ]],
    ['p','Now describe one problem idea in full, the way a product manager would.'],
    ['try',{id:'a1-candidate',mins:10,min:120,rows:6,
      task:'Describe one problem idea: the user, how they do the task today, how often, what it costs them, and why AI may or may not belong.',
      ph:'User, how they do it today, how often, cost, does AI fit…',
      after:'Here is an example that passes. <strong>User:</strong> support leads at a 40-person software company. <strong>Today:</strong> every Monday they read about 300 tickets from last week. They pick the top five themes for the product team. <strong>How often:</strong> weekly, about three hours each time. <strong>Cost:</strong> three hours of a senior person’s time, and themes often get missed. <strong>Why AI might help:</strong> reading and grouping short, messy text is a good fit. <strong>Why it might not:</strong> if tickets already have reliable category tags, a simple count in the help-desk tool does the job. Check that first.'}],
    ['q','I502'],
    ['p','That is the setup done. You know where you stand. You have one place for your work, a weekly plan, and a shortlist of problems. Next, in A2, you look at how products win and lose. It will sharpen your eye for what makes a product work or fail.']
  ]
},

{
  /* GitHub basics. A1's capstone asks for a repository in week 1, and Git was
     only taught in Chapter 21, eighteen weeks later. This is the website-only
     version: no install, no command line, just enough for A1 to work. */
  id:'a1g', num:'A1.5', part:6, curriculumTier:'core', phase:0, prerequisites:['a1'], nextUnits:['a2'], minutes:20, labs:[],
  title:'GitHub basics: a home for your work',
  concept:'A1 asks you to keep everything you make in one place that others can open. This short chapter builds that place on GitHub, a website where people keep their work online. You use only the website. You make an account, a repository (an online folder that remembers every change), your first file and your first saved version. Nothing to install. No command line (the black box where people type commands).',
  takeaway:[
    'Make a GitHub account and a repository. Say what a repository keeps.',
    'Add or change a file on the website. Save it as a commit (one saved version) with a clear note.',
    'Say why a key or a password must never go into a repository, even a private one.'
  ],
  needs:[
    ['The place for your work, from A1','In A1 you planned folders and a decision log (a diary of your choices). This chapter gives them a home.','A1']
  ],
  story:[
    ['c','Before you start','You need an email address and about twenty minutes. Everything happens on the github.com website. Nothing to install. GitHub is free for everything this course asks.'],
    ['p','In A1 you planned a set of folders and a decision log. You could keep them on your laptop. But a laptop folder has two problems. Nobody else can open it. And it forgets: when you change a file, the old version is gone.'],
    ['p','<strong>GitHub</strong> fixes both. It is a website where software teams keep their work, and where employers look to see yours. In this chapter you go from no account to your first saved version. Think of a locker that keeps every old copy of your papers.'],
    ['key','A repository is a folder that remembers. It keeps every saved change, with a note on what changed and why.'],
    ['h','A repository: a folder that remembers'],
    ['p','On GitHub, a project lives in a <strong>repository</strong>. People often say “repo” for short. It holds files and folders, like any folder. But it also keeps every earlier version of every file. It is like a school notebook where you never use an eraser: every old line stays.'],
    ['p','A repository can be <strong>public</strong>, so anyone can read it. Or it can be <strong>private</strong>, so only you and the people you invite can. Start private. You can make it public later, when you publish your project.'],
    ['do','Make an account and a repository',[
      ['n',[
        'Go to <a href="https://github.com/signup" target="_blank" rel="noopener">github.com/signup</a> and make an account. Pick a username you would be happy to show an employer, such as your name.',
        'Turn on two-factor sign-in (a second check, like a code sent to your phone). Press your picture at the top right, then <strong>Settings</strong>, then <strong>Password and authentication</strong>. It keeps your work safe if your password ever leaks.',
        'Press the <strong>+</strong> at the top right, then <strong>New repository</strong>. Name it <code>ai-from-zero</code>. Choose <strong>Private</strong>. Tick <strong>Add a README file</strong>. Press <strong>Create repository</strong>.'
      ]],
      ['x','You see your new repository with one file in it, <code>README.md</code>. That file is the front page of the repository. Whatever you write in it shows below the list of files.']
    ]],
    ['h','A commit: one saved version, with a note'],
    ['p','Every time you save a change on GitHub, you make a <strong>commit</strong>. A commit is one saved version of your files, with a short note that says what changed. The list of commits is the repository’s history. Think of one page in a diary, with its date.'],
    ['do','Add your decision log',[
      ['n',[
        'In your repository, press <strong>Add file</strong>, then <strong>Create new file</strong>.',
        'Name the file <code>decision-log.md</code>. Write the first entry from A1: the date, the decision, the proof, and what would make you change your mind.',
        'Press <strong>Commit changes</strong>. In the message box, write what you did, for example <em>Start the decision log</em>. Press <strong>Commit changes</strong> again.'
      ]],
      ['x','The file shows up in the list. Open it and press <strong>History</strong>. You see one commit, with your message and the time.']
    ]],
    ['p','Folders work the same way. To make one, type its name and a slash before the file name, like <code>research/notes.md</code>. GitHub makes the folder for you. To add files you already have, press <strong>Add file</strong>, then <strong>Upload files</strong>, and drag them in.'],
    [
      'pred',
      {id:'a1g-history',
       short:true,
       ph:'Gone, or still there?',
       ask:'Guess first. You commit a file with a line in it. Then you delete the line and commit again. Is the old line gone from the repository?',
       reveal:'No. The old line is still in the history, in the first commit. Anyone who can open the repository can find it there.',
       then:'This is what makes a repository a good home for a decision log. It is also why some things must never go into one. The next section explains.'}
    ],
    ['h','What never goes in'],
    ['p','A repository remembers everything, so a mistake in it is hard to undo. If you delete a file later, it is still in the history. It is like a pen: you cannot rub it out.'],
    ['c','Watch out','Never put an API key (the secret password for the model), a password or real people’s personal details into a repository. Private does not make it safe. Your model key lives on the Connect page of this app, in your browser. For the project, use the made-up starter sentences, never real customer data.'],
    [
      'try',
      {id:'a1g-message',
       mins:2,
       min:20,
       rows:2,
       task:'You have just added notes from your first user interview to the <code>research</code> folder. Write the commit message you would use.',
       ph:'One short line.',
       after:'A good message says what changed, in a few words a stranger could follow. For example: <em>Add notes from interview 1 (support lead, Pune)</em>. A message like <em>update</em> tells nobody anything when they read the history later.'}
    ],
    ['h','What you have learned'],
    ['p','You now have a private repository, a decision log in it, and a history that keeps every version. That is the place A1’s capstone asks for. As you add files in the coming weeks, follow the folder plan from A1.'],
    ['p','Much later, Chapter 21 shows how engineers do the same thing from their own computer, with a tool called Git. Until then, the website is all you need.']
  ]
},

{
  id:'a2', num:'A2', part:6, curriculumTier:'reference', phase:0, prerequisites:['a1'], nextUnits:['a3'], minutes:600, labs:[],
  title:'Product sense: how products win and lose',
  concept:'Learn the few ideas behind every product decision. You map how a product reaches its users. You compare B2B (selling to businesses) with B2C (selling to people). You check an idea against four risks. And you see where an AI assistant helps your thinking, and where it does not.',
  takeaway:[
    'Map how a product is found, built and spread, and find its weakest link.',
    'Say how building for businesses (B2B) differs from building for people (B2C).',
    'Test an idea against the four risks: value, usability, feasibility and viability.',
    'Ask an AI assistant to draft an analysis. Then check every claim against proof.',
    'List the hard skills and soft skills of the applied AI PM job, and see where you stand on each.'
  ],
  needs:[['Your capstone','You apply every idea in this chapter to your capstone, and to the product closest to it.','A1']],
  capstone:{
    title:'Take Rampart apart, and check what an AI says about it',
    brief:'Rampart is the tool that already exists, and Bharat Privacy Guard answers it. Before you build something better, learn what Rampart does well, where it stops, and why. In this chapter you learned to map how a product wins, and to check an AI’s analysis against proof. Now you do both on Rampart.',
    where:'Writing only. Use Rampart’s own public description and model card (the paper that says what a model can and cannot do). No code.',
    steps:[
      'Find Rampart’s model card and its description online. Read them. Then write three things in your own words: who it is for, what it does, and which languages it was built and tested for.',
      'Map Rampart on the three links from this chapter. Discovery: how a developer finds it. Delivery: how they start using it. Distribution: how it spreads. Say which one is weakest, with one piece of proof.',
      'Find the model card’s number for how well Rampart finds personal details in Hindi written in Devanagari script. Write down the exact number. Copy the sentence it came from. The project page says it is about 14 out of 100. Say whether you found the same number.',
      'Write a teardown (a close look at how a product works) with seven headings: who it is for, the job it does, the key moment of use, friction (what slows people down), how it makes money, its moat (what protects it from copies), and one improvement. Under “moat”, say what its language coverage protects it from, and what it does not.',
      'Ask an AI assistant to write a teardown of Rampart. Go through it line by line. Mark each claim: supported (you found proof), unsupported (no proof either way) or wrong (the proof says the opposite).',
      'Rewrite the AI’s teardown using only claims you can back up. At the bottom, write one sentence on which claim you were most tempted to believe without checking.'
    ],
    done:[
      'Your teardown, with seven headings.',
      'The exact Hindi-script number from the model card, with the sentence it came from.',
      'The AI’s teardown, with every claim marked supported, unsupported or wrong.',
      'Your fixed version, and the one sentence about the claim you almost believed.',
      'A score from 0 to 3 for each item above, using this chapter’s scale, like marking your own homework. Move on only when every score is 2 or more.'
    ]
  },
  check:[
    ['Why can a technically good feature fail in distribution?',
     'Because users have to find it, understand it and make it a habit. Say a feature works perfectly, but it sits three clicks deep in a settings menu. Or it needs a new behaviour that nobody is prompted to try. Either way, nobody uses it. Distribution is a design problem, not just a marketing one.'],
    ['Give one B2B and one B2C trade-off that would change the roadmap.',
     'B2B: a large customer needs an audit log before their security team will approve the contract. So the audit log jumps ahead of features that users asked for. B2C: many people drop off during onboarding. So shortening sign-up beats a new feature, because every user you lose in the first minute never sees the feature at all.'],
    ['What evidence would disprove your improvement idea?',
     'Name it before you build. For example: “If fewer than one in five users who see the new summary button try it within a week, the problem is not discoverability.” An idea with no evidence that could disprove it is just an opinion.']
  ],
  story:[
    ['c','On your route','First, go through it quickly, in about twenty minutes: read it and answer the boxes. The long “Build it” work can wait until later.'],
    ['c','Before you start','The full chapter takes about ten hours, over three or four sittings. Pick one product you use often and know well, such as Notion, Spotify, Swiggy, Slack or Canva. You use it in every exercise.'],
    ['p','In the last chapter you set up how you will learn and what you will build. Now you learn how to think about a product. Why do some products win, while others quietly fade away?'],
    ['p','This chapter has five ideas. Each one is small. Each ends with something you do on your chosen product. By the end, you can look at any product, even your capstone, and say what works and what does not.'],

    ['h','Idea 1: Finding, building and spreading are one loop'],
    ['p','Think of an app on your phone that you love. Before you used it, someone had to decide to build it. Someone had to build it well. And someone had to make sure you found it. Those are three jobs, and a product manager owns all three.'],
    ['p','They have names. <strong>Discovery</strong> is working out what to build. <strong>Delivery</strong> is building it. <strong>Distribution</strong> is getting it to people and keeping them. Here is each stage, with the question it answers:'],
    ['tb',['Stage','The question it answers','Typical work'],[
      ['Discovery','Should we build this?','Talking to users, looking at data, rough prototypes, testing ideas'],
      ['Delivery','Are we building it well?','Specs (written plans), scheduling, working with engineers, quality'],
      ['Distribution','Will people find it, use it and keep using it?','Onboarding (the first steps for a new user), pricing, channels, sales, adoption']
    ]],
    ['p','These three are a loop, not a line. What you learn in distribution, like who stays and who leaves, feeds the next round of discovery. Think of a potter’s wheel that keeps turning.'],
    ['p','Products usually fail at the weakest of the three. Here is a common AI example. A team builds an excellent meeting summariser. They test it with care and ship it. But almost nobody uses it. In interviews they learn that most users never noticed it. It was a small icon, and nobody had a reason to click it.'],
    ['key','A feature nobody finds is as useful as a feature nobody built.'],
    ['do','Prove it now',[
      ['p','For your chosen product, write one sentence each on how it finds, builds and spreads. Then say which one is weakest.'],
      ['x','You should have three sentences and a verdict. For the weakest link, name what you saw that made you think so. It could be a confusing sign-up, a feature you found only by accident, or a bug that keeps coming back.']
    ]],
    ['q','I503'],

    ['h','Idea 2: B2B and B2C are different jobs'],
    ['p','Compare two products: a food delivery app on your phone, and the expense software your company uses. You picked the first one yourself. Someone else picked the second for you. That one difference changes almost everything about how each is built and sold. It is like a street stall versus a government contract.'],
    ['p','<strong>B2C</strong> (business to consumer) products are sold to single people. <strong>B2B</strong> (business to business) products are sold to companies. The table shows how the PM’s work changes. Read down the columns. See how often the B2B answer has more people in it.'],
    ['tb',['','B2C','B2B'],[
      ['Who pays','The user','A budget owner, often not the user'],
      ['Who can block the sale','Almost nobody','IT, security, legal and procurement (the buying office)'],
      ['Number of customers','Thousands to millions','Tens to thousands'],
      ['How decisions are made','Mostly from usage data','Usage data plus direct customer requests'],
      ['What drives growth','Onboarding, habit and word of mouth','Sales, integrations (links to other tools) and renewals'],
      ['What AI adds','Speed and delight, but mistakes spread fast','Productivity, but only with data controls, admin settings and audit logs (a record of who did what)']
    ]],
    ['p','In B2B, one large customer can change your roadmap (the plan of what comes first, next and later). Say their security team needs single sign-on (one login for many tools) before they sign. Then single sign-on moves up your list, even if no user asked for it.'],
    ['c','Watch out','In B2B, the person who loves your product in a demo is often not the person who approves the buying. So always ask: who pays, who uses, and who can say no?'],
    ['do','Prove it now',[
      ['p','Decide if your capstone is B2B or B2C. Then write down who pays, who uses, and who could block the buying.'],
      ['x','You should have three names or roles. If who pays and who uses are the same person, you are probably B2C, or selling to very small businesses.']
    ]],
    ['q','I504'],

    ['h','Idea 3: Product sense means checking four risks'],
    ['p','You often hear that someone has good “product sense”. It sounds vague. But look closely: it is a habit. Before you commit to building something, you check four risks. Think of a pilot running a checklist before take-off.'],
    ['n',[
      '<strong>Value.</strong> Will people choose it over what they do today?',
      '<strong>Usability.</strong> Can they work out how to use it without help?',
      '<strong>Feasibility.</strong> Can we build it with the time, skills, data and money we have?',
      '<strong>Viability.</strong> Does it work for the business: income, cost, law and brand?'
    ]],
    ['p','For AI features, feasibility has one more question: <strong>is it right often enough for this job?</strong> A model that is right 80% of the time is fine for brainstorming headlines. It is not fine for drafting legal contracts. So the same accuracy can work for one job and fail for another.'],
    ['p','AI also adds a cost each time someone uses it. A normal feature costs almost nothing per click. An AI feature costs money every time it runs. It is like paying a few paise per SMS. So viability depends on how often people use it, and on what you can charge.'],
    ['key','Check all four risks. Most failed features passed the one the team looked at, and failed one they skipped.'],
    ['do','Prove it now',[
      ['p','Think of one improvement for your chosen product. For each of the four risks, write one line: what could go wrong, and how you would find out cheaply.'],
      ['x','You should have four lines. The best answers name a cheap test. For example, a prototype test with five users for usability, or a spreadsheet of cost per use for viability.']
    ]],
    ['q','I505'],

    ['h','Idea 4: AI can help your thinking, but not replace it'],
    ['p','You have probably used an AI assistant for work. It drafts documents fast, sums up long notes, suggests questions and critiques your plans. All of that helps in product work.'],
    ['p','But it has one big limit. It writes text that sounds right, with no proof behind it. It is like a parrot that has read a whole library: it sounds sure even when it is wrong. It cannot interview your users. Its “insights” about your market are an average of what it read, not facts about your customers.'],
    ['p','So use this rule for anything an AI writes for you:'],
    ['key','Every claim must trace back to proof, or be marked as a guess.'],
    ['p','Here is how it looks in real life. An assistant writes: “Users abandon Swiggy checkout because of high delivery fees.” It may be true. But where is the proof? Mark the claim <em>unsupported</em>. Then note what would settle it, such as checkout drop-off data or five interviews.'],
    ['do','Prove it now',[
      ['p','Ask an AI assistant: “Why do people stop using [your product]?” Copy its answer into your notes. Then label each claim <em>supported</em>, <em>unsupported</em> or <em>wrong</em>.'],
      ['x','Most claims will turn out unsupported. That is normal. The assistant fills gaps with believable guesses. Your job is to know which claims are guesses.']
    ]],
    ['try',{id:'a2-annotate',mins:8,min:100,rows:5,
      task:'Take one claim from the AI’s answer. Say if it is supported, what proof would settle it, and how cheaply you could get that proof.',
      ph:'Claim, label, proof needed, how to get it…',
      after:'A good answer: <strong>Claim:</strong> “Users leave because the free tier is too limited.” <strong>Label:</strong> unsupported. <strong>Proof needed:</strong> do people who hit the free-tier limit leave more often than those who do not? <strong>How to get it:</strong> ask five people who stopped using the product what they were doing in their last week. Or, if you have the data, compare churn (how many leave) for users who hit the limit and users who did not.'}],

    ['h','Idea 5: List the skills the job needs'],
    ['p','You now have four ideas for judging a product. The last question is about you. What does the applied AI PM job ask of the person doing it?'],
    ['p','It needs two kinds of skill. Hard skills are things you can practise and test, like reading data. Soft skills are about working with people. Here they are side by side:'],
    ['tb',['Hard skills','Soft skills'],[
      ['Writing specs and acceptance criteria (the checks a finished piece must pass)','Explaining trade-offs clearly'],
      ['Reading data and basic SQL (a way to ask questions of a table of data)','Getting agreement without authority'],
      ['Building and running evaluations (tests that check how good the answers are)','Choosing what comes first when you lack information'],
      ['Making a prototype without engineers','Listening well in interviews'],
      ['Cost and pricing arithmetic','Saying no, and explaining why']
    ]],
    ['p','AI products add one thing to both columns: being at ease with <strong>probabilistic behaviour</strong>. In plain words: an AI feature does not give the same answer every time. It is like a dice roll, not a calculator. You must measure how much it varies, plan for it, and explain it to people who expect software to be predictable.'],
    ['do','Prove it now',[
      ['p','Add a “hard skills” and a “soft skills” part to the scorecard you made in A1. Give yourself 0 to 3 for each skill in the table above. Write your proof next to each score.'],
      ['x','You should have ten scored skills. Circle the two lowest. Practise those two on purpose in the chapters ahead.']
    ]],

    ['h','What you have learned'],
    ['p','You now have four ways to look at any product. Check how it is found, built and spread. Ask who pays, who uses and who can say no. Test an idea against the four risks. And treat every claim, even one from an AI, as unproven until you find the proof.'],
    ['p','You also know which skills to build. Next, you start collecting proof yourself, by talking to real users in the chapter on user discovery.']
  ]
},

{
  id:'a3', num:'A3', part:6, curriculumTier:'reference', phase:0, prerequisites:['a2'], nextUnits:['a4','a7','b2','b6'], minutes:840, labs:[],
  title:'User discovery: interviews, jobs and problem statements',
  concept:'Find out what users really do and need. Do it by talking to them. You will write a list of questions and talk to five people. Then you turn their words into three things. First, a one-line job statement. Second, a persona (a made-up user, built only from what real people told you). Third, a problem brief where you rank your guesses.',
  takeaway:[
    'Ask people what they did in the past. Do not ask for opinions, and do not ask them to guess the future.',
    'Write down what users are trying to get done, in one line. This is called a jobs-to-be-done statement.',
    'Keep asking “why?” to find what causes a problem. This is called the five whys. Do not squeeze everything into one cause.',
    'Build personas and journey maps (a drawing of the steps a user goes through). Every line must point back to an interview note.',
    'Write the problem in two sentences. List your guesses (assumptions). Test the scariest guess first.'
  ],
  needs:[['Who pays, who uses and who can block a sale','You need this to pick the right people to interview.','A2'],
         ['Every claim needs proof','Interviews are where you collect that proof.','A2']],
  capstone:{
    title:'Interview five people and write up what you learned',
    brief:'Until now, the project is only your idea. Now you find out if other people really have the problem. In this chapter you learned to ask what people did, not what they might do. You also learned to turn their answers into a short problem statement. Now you talk to five real people.',
    where:'You only write. You talk to real people, then you write a summary. You do not write any code.',
    steps:[
      'Pick five people, one from each group. One: a developer who works with things users type in. Two: someone in a compliance or legal job (the person who checks that rules are followed). Three: a support agent who has seen customers type personal details into a chat. Four: an ordinary user of Indian websites and apps. Five: a founder who had to choose whether to build or buy privacy tools. Do not use an AI to play any of them.',
      'Write three to five screening questions. These are short questions that show if a person really belongs to the group. For the support agent, ask: “In the last month, how many times did a customer type an ID number into a chat with you?”',
      'Write twelve interview questions. Ask only about the past, like “Tell me about the last time…”. If a question hints at the answer, such as “Don’t you find it annoying when…?”, rewrite it.',
      'Talk to each person for about thirty minutes. Write down six things for each: their exact words, the steps they follow today, any workaround (a trick they use to get by), how often the problem happens, how bad it is, and what they spend on it.',
      'Write a short profile for each of the five people. Every sentence must point to one interview note, like “(interview 3)”. Do not write anything that nobody told you.',
      'Write the problem in two sentences. Say who has the problem, what it costs them, and what proof you have. Then list your guesses (assumptions) and mark the scariest one. Say what you will do this week to test it.',
      'Write at least one thing you expected that the interviews proved wrong. Then say what you changed because of it.'
    ],
    done:[
      'Your screening questions and your twelve interview questions.',
      'Notes from five interviews with real people.',
      'Five short profiles. Every sentence points to an interview note.',
      'A two-sentence problem statement, and a list of guesses (assumptions) with the scariest one marked.',
      'One thing you expected that was wrong, and what you changed because of it.',
      'Give each item above a score from 0 to 3, using the scale in this chapter. Move on only when every score is at least 2, and no proof item scores 0.'
    ]
  },
  check:[
    ['Did you interview five real people, rather than AI-generated users?',
     'If any “interview” was with an AI playing a user, it doesn’t count. An AI gives you the average answer, and the average is exactly what you’re trying to get past. Find real people through your network, LinkedIn, communities, or the workplaces of your capstone users.'],
    ['Can every line of your persona be traced to your notes?',
     'Go through the persona line by line, and write the interview number next to each claim. Delete any line you can’t trace. A short persona backed by evidence is better than a long one built on guesses.'],
    ['What did you learn that changed one of your assumptions, or killed it?',
     'If nothing changed, one of two things happened. Either you asked leading questions, or you weren’t listening for surprises. Read your notes again, and look for anything that didn’t fit what you expected. That’s usually your most valuable finding.']
  ],
  story:[
    ['c','On your route','First, go through it quickly, in about twenty minutes: read it and answer the boxes. The long “Build it” work can wait until later.'],
    ['c','Before you start','Doing it all takes about 14 hours, spread over a week or two. It takes time because finding people and fixing a time to talk is slow. So start asking people on day one. Plan 30-minute talks, on a video call or in person.'],
    ['p','In the last chapter you learned one rule. Every claim needs proof, or it must be marked as a guess (an assumption). This chapter is about where most proof comes from. It comes from talking to users.'],
    ['p','Talking to users sounds easy. But most people ask in a way that brings polite answers that help nobody. So first you learn to ask questions that bring honest answers. Then you turn what you hear into a few short pages your team can use.'],

    ['h','Idea 1: Ask about the past, not about your idea'],
    ['p','Think of telling your mother about your business idea. She will almost surely say it is wonderful. She loves you and wants to be kind.'],
    ['p','Users in an interview act the same way. The biggest mistake is asking what they think of your idea. They stay polite and say it sounds useful. That tells you nothing.'],
    ['p','A short book, <em>The Mom Test</em> by Rob Fitzpatrick, shows a way out. The name comes from its goal. Ask questions that even your mother could not answer with a kind lie. The book has three rules:'],
    ['n',[
      '<strong>Talk about their life, not your idea.</strong>',
      '<strong>Ask about specific things they did in the past, not what they might do in the future.</strong>',
      '<strong>Talk less and listen more.</strong>'
    ]],
    ['p','Let us see the rules at work. We use one example here and in the next few chapters. Say you want to build a tool for support leads. A support lead reads the week’s customer support tickets (the complaints and questions customers send in). Then the lead writes a short report on the biggest problems. Your tool would sort those tickets into themes, like piles of the same kind.'],
    ['c','Why a second example','The book teaches this method with Bharat Privacy Guard. Here you see it work on a different product, which we call Theme Finder. Seeing one method on two products shows you the method, not just the example. At the end of each chapter you try it on Bharat Privacy Guard yourself.'],
    ['p','Here are four questions you might want to ask that lead. Next to each is a better version:'],
    ['tb',['Instead of','Ask'],[
      ['Would you use a tool that groups support tickets into themes?','Tell me about the last time you prepared the weekly ticket summary. What did you do first?'],
      ['How much would you pay for this?','What do you use for this today? What does it cost you?'],
      ['Isn’t it frustrating to read hundreds of tickets?','What was the hardest part of last week’s summary?'],
      ['Do you think AI could help here?','Have you tried anything to speed this up? What happened?']
    ]],
    ['p','Look at the third question in the left column. It hints at the answer you want. People like to agree with whoever asks. A question like this is called a <strong>leading question</strong> (it leads the person to your answer).'],
    ['p','Now look at the right column. Each question asks about something that already happened. It is hard to be polite about that. The person just tells you what they did.'],
    ['key','What people think will happen is weak proof. True stories about the past are strong proof.'],
    ['c','From delivery to product','You have run requirement workshops with departments. Keep that skill. Here is the change. A requirement is what someone asked for. Discovery is what they did last Tuesday. Ask an officer to walk you through the last time a file got stuck, one step at a time. You will hear what the requirements document never said.'],
    ['do','Prove it now',[
      ['p','Write three questions you could have asked about your capstone problem (the project you build in this course). Then rewrite each one to ask about something specific the person did in the past.'],
      ['x','You should have three pairs, a before and an after. Check each new question with this test: could the person answer with a story about something that really happened?']
    ]],
    ['q','I506'],
    ['q','I507'],

    ['h','Idea 2: Describe the job users are trying to get done'],
    ['p','Think why someone orders food on an app at ten at night after a long day. They do not want the app. They want a hot meal without cooking.'],
    ['p','Your users are the same. They want to get something done in their life, and a product is one way to do it. The <strong>jobs to be done</strong> idea says it like this. People “hire” a product to do a job for them.'],
    ['p','You can write a job as one sentence, in this form:'],
    ['code','When [situation], I want to [motivation], so I can [outcome].'],
    ['p','Here is the job for our support lead:'],
    ['p','<em>When I prepare the Monday report, I want to see the week’s biggest problems without reading every ticket, so I can tell the product team what to fix first.</em>'],
    ['p','See that the sentence never names your tool. It tells the moment, what the lead wants, and why.'],
    ['p','Jobs also explain why people switch to a new product, or do not. Four forces are at work, like four people pulling a rope. Two pull towards change. Two pull back:'],
    ['tb',['Force','Direction','Example'],[
      ['Push of the current situation','Towards change','“Reading 300 tickets takes my whole morning.”'],
      ['Pull of the new solution','Towards change','“A summary I could check in ten minutes.”'],
      ['Anxiety about the new solution','Against change','“What if it misses something important?”'],
      ['Habit of the present','Against change','“I know my spreadsheet. It works.”']
    ]],
    ['p','People switch only when the push and the pull beat the worry and the habit. For AI products, worry is often the biggest force. Users fear wrong answers.'],
    ['do','Prove it now',[
      ['p','Write a job statement for your capstone problem. Then write one example for each of the four forces.'],
      ['x','You should have one sentence in the “When… I want to… so I can…” form, and four short lines. If you do not know the worry force yet, write it as a question to ask in your interviews.']
    ]],

    ['h','Idea 3: Ask “why” to find causes, but don’t force one answer'],
    ['p','When you see a doctor about a fever, a good doctor does not only treat the fever. She asks what is causing it. Product problems work the same way. What you see first is usually only a sign of the real trouble.'],
    ['p','The <strong>five whys</strong> is a simple way to get from that sign to the causes. You ask “why?” after each answer, one by one, like peeling an onion. Here it is for the support lead:'],
    ['n',[
      'Important themes get missed in the weekly report. <em>Why?</em>',
      'The support lead does not have time to read every ticket. <em>Why?</em>',
      'There are twice as many tickets this year, but the team did not grow. <em>Why?</em>',
      'The company started in two new countries.'
    ]],
    ['p','This helps, but it has a trap. One neat chain makes it look like there is only one cause. Real problems usually have several.'],
    ['p','In this example, themes might also be missed because tickets are tagged in different ways. That means one support worker puts a label on a ticket one way, and another labels the same kind of ticket another way. Or the report template (the fixed shape of the report) may have no room for new issues.'],
    ['c','Watch out','Do not stop at the first chain that sounds right. After a few whys, ask: “What else could cause this?” Then draw the causes as a tree with branches, not as one straight line.'],
    ['do','Prove it now',[
      ['p','Take the main pain in your capstone problem. Ask “why?” three to five times. Then go back to the first answer and look for one more cause.'],
      ['x','You should have a short tree with at least two branches. Mark which causes you have proof for, and which are guesses you will check in your interviews.']
    ]],

    ['h','Idea 4: Personas and journey maps sum up your proof'],
    ['p','After your interviews, you want a quick way to share what you learned with your team. Two tools are common.'],
    ['p','A <strong>persona</strong> describes one kind of user: their goals, their workflow (the steps they follow today to get the work done) and their pains. A <strong>journey map</strong> draws the steps they go through, like a route map. At each step it shows what they do, think and feel.'],
    ['p','Both help, but only as <strong>summaries of proof</strong>. A persona written before any interviews is a guess dressed up as research. A persona made by an AI is worse. It looks full of detail, but it stands on nothing.'],
    ['p','So put a source on every line. For example:'],
    ['code','Priya, support lead (interviews 1, 3, 4)\n- Prepares the weekly report every Monday morning   [1, 3, 4]\n- Reads about 300 tickets; skims most of them        [1, 4]\n- Worries most about missing a new, fast-growing issue [3]\n- Uses a spreadsheet with manual tags               [1, 3]'],
    ['p','The numbers in brackets are interview numbers. Anyone on your team can see where each line came from, and check it.'],
    ['key','If a persona line has no interview number, delete it.'],
    ['do','Prove it now',[
      ['p','Draw a first journey map for your capstone user, with four to six steps. For each step, write what they do and one pain. Leave a blank for the interview number. You fill it in after your interviews.'],
      ['x','You should have four to six steps. If a step is still blank after five interviews, that blank shows a hole in your research.']
    ]],
    ['q','I508'],

    ['h','Idea 5: Write the problem, list your guesses, test the scariest'],
    ['p','When your interviews are done, you can say clearly what the problem is. Write it as a <strong>problem statement</strong>, in this form:'],
    ['code','[User] needs a way to [job] because [evidence of pain].\nToday they [workaround], which costs [measure].'],
    ['p','Next, list your <strong>assumptions</strong>. These are the guesses that must be true for your solution to work. Here they are for the ticket example:'],
    ['l',[
      'Support leads trust an AI summary enough to act on it.',
      'Ticket text has enough detail to find the theme.',
      'The product team reads the weekly report.',
      'The company lets ticket data go to an AI provider (the company that runs the AI model).'
    ]],
    ['p','You cannot test everything at once. So rank each guess on two questions. First, how bad is it if the guess is wrong? Second, how unsure are you about it?'],
    ['p','The guess that would hurt most, and that you are least sure of, is your <strong>riskiest unknown</strong>. Test that one first.'],
    ['p','In this list, the last guess may be the riskiest. If the company’s rule forbids sending ticket data outside, nothing else matters. And it is cheap to check. One email to the security team will tell you.'],
    ['try',{id:'a3-problem',mins:10,min:120,rows:6,
      task:'Write a problem statement for your capstone. Then list three assumptions. Say which one is your riskiest unknown, and why.',
      ph:'Problem statement, three assumptions, the riskiest and why…',
      after:'Here is a strong answer for the ticket example. <strong>Problem:</strong> Support leads at mid-sized software companies need a way to see the week’s top issues. Right now they skim 300+ tickets, and they say they miss new problems (interviews 1, 3, 4). Today they tag tickets by hand in a spreadsheet, which takes about three hours each Monday. <strong>Assumptions:</strong> (1) Leads will act on an AI summary. (2) Ticket text has enough detail. (3) The company allows ticket data to go to an AI provider. <strong>Riskiest:</strong> number 3. If it’s false, the product can’t exist. And one email to the security team can answer it this week.'}],

    ['h','What you have learned'],
    ['p','You now know how to find what users really need. Ask what they did, and let them tell the story. Write down the job they want done. When you look for causes, look for more than one.'],
    ['p','Then sum up what you heard, with an interview number on every line. Write the problem in two sentences. Test your scariest guess first.'],
    ['p','Now you know who has the problem. In the next chapter you ask how many people have it, and what they use today instead.']
  ]
},

{
  /* Spreadsheet basics. A4 sizes a market and Chapter 15 costs a feature in a
     spreadsheet, and nothing taught the formulas they use. The sheet sits in
     the text, right where the steps use it. */
  id:'a4s', num:'A3.5', part:6, curriculumTier:'core', phase:0, prerequisites:['a3'], nextUnits:['a4'], minutes:20, labs:[],
  title:'Spreadsheet basics: the formulas this course uses',
  concept:'A4 sizes a market, and Chapter 15 works out what a feature costs. Both are done in a spreadsheet. This short chapter teaches the few formulas they need. The sheet sits right here on this page. You learn cells, a formula, SUM, percentages and ROUND.',
  takeaway:[
    'Point to a cell by its address, like B2, and write a formula that uses it.',
    'Add up a column with SUM. Work with percentages and ROUND.',
    'Build a small estimate that changes by itself when you change one number.'
  ],
  needs:[
    ['The numbers from A3','The examples use the support numbers from A3, like three hundred tickets a week. All the maths you need is adding and multiplying.','A3']
  ],
  story:[
    ['c','Before you start','You need nothing else. The sheet you work in is on this page, and it is saved with your progress. Google Sheets and Excel use the same formulas, so all of this works there too.'],
    ['p','A spreadsheet is a grid of boxes called <strong>cells</strong>. Columns have letters and rows have numbers. So every cell has an address, like a seat number in a cinema: <code>B2</code> is column B, row 2.'],
    ['p','Why does this course use one? Because its numbers change. A market size or a cost estimate rests on guesses. A good sheet lets you change one guess and watch every total change with it.'],
    ['key','Type each number once, in its own cell. Make every total a formula that points at those cells. Then changing one number updates everything.'],
    ['h','Your sheet'],
    ['p','This is the sheet for the whole chapter. Click a cell to type in it. Press Enter to move down.'],
    ['sheet','A3.5 Spreadsheet basics'],
    ['h','A formula starts with ='],
    ['p','When a cell starts with <code>=</code>, the sheet works out the answer. It does not show what you typed. <code>=B2*B3</code> means “B2 times B3”. Use <code>+</code> to add, <code>-</code> to take away, <code>*</code> to multiply and <code>/</code> to divide. It is like a calculator that remembers.'],
    ['do','Your first formula',[
      ['n',[
        'In <code>A2</code> type <em>Tickets a week</em>. In <code>B2</code> type <code>300</code>.',
        'In <code>A3</code> type <em>Weeks a year</em>. In <code>B3</code> type <code>52</code>.',
        'In <code>A4</code> type <em>Tickets a year</em>. In <code>B4</code> type <code>=B2*B3</code>.'
      ]],
      ['x','<code>B4</code> shows <code>15600</code>. Now change <code>B2</code> to <code>450</code>. <code>B4</code> changes to <code>23400</code> by itself.']
    ]],
    [
      'pred',
      {id:'a4s-typed',
       short:true,
       ph:'What goes wrong?',
       ask:'Guess first. Someone works out 300 × 52 on a calculator. They type <code>15600</code> into <code>B4</code> instead of the formula. What goes wrong later?',
       reveal:'Nothing, until a number changes. When tickets go up to 450, <code>B4</code> still says 15600. Every total built on it is quietly wrong.',
       then:'A total typed by hand is the most common spreadsheet mistake. If a number comes from other numbers, make it a formula.'}
    ],
    ['h','Adding up: SUM and ranges'],
    ['p','A <strong>range</strong> is a block of cells, written with a colon: <code>D2:D6</code> means D2 down to D6. <code>=SUM(D2:D6)</code> adds them all. <code>=AVERAGE(D2:D6)</code>, <code>=MIN(D2:D6)</code> and <code>=MAX(D2:D6)</code> work the same way. They give the middle value, the smallest and the biggest. Think of a row of shop bills.'],
    ['do','Add up a column',[
      ['p','In <code>D2</code> to <code>D6</code>, type five numbers: the tickets that each of five support leads handles in a week. In <code>D7</code> type <code>=SUM(D2:D6)</code>. In <code>D8</code> type <code>=AVERAGE(D2:D6)</code>.'],
      ['x','<code>D7</code> shows the total and <code>D8</code> the average. Change any one of the five numbers. Both change.']
    ]],
    ['h','Percentages and rounding'],
    ['p','A percentage is a fraction: 12% is the same as 0.12. In a cell you can type <code>12%</code> or <code>0.12</code>. To take 12% of the number in <code>B4</code>, write <code>=B4*12%</code>.'],
    ['p','<code>ROUND</code> tidies up a result, like rounding a price to the nearest rupee. <code>=ROUND(B4/7, 1)</code> divides B4 by 7 and keeps one number after the decimal point.'],
    ['h','A small estimate, the way A4 builds one'],
    ['p','A4 sizes a market from the bottom up: count the customers, then multiply by what each would pay. In a sheet, each of those is its own cell.'],
    ['do','Build a market estimate',[
      ['n',[
        'In <code>F2</code> type the number of firms that have the problem, for example <code>9000</code>.',
        'In <code>F3</code> type what one firm would pay in a year, in rupees, for example <code>120000</code>.',
        'In <code>F4</code> type <code>=F2*F3</code>. That is the whole market. In <code>F5</code> type the share you could win, <code>2%</code>. In <code>F6</code> type <code>=F4*F5</code>.'
      ]],
      ['x','<code>F4</code> shows <code>1080000000</code>, which is ₹108 crore. <code>F6</code> shows <code>21600000</code>, which is ₹2.16 crore. Change the price in <code>F3</code> and both follow. A4 builds exactly this kind of table.']
    ]],
    ['snag',['A cell shows an error like <em>#DIV/0</em>','The formula divides by zero or by an empty cell. Or it adds a cell that holds words. Check that every cell it points at holds a number.']],
    [
      'try',
      {id:'a4s-cost',
       mins:3,
       min:10,
       rows:2,
       task:'A model call (one message sent to the model) reads 120 tokens (small pieces of text, like Lego bricks). The model costs ₹20 for every million tokens. Cell <code>B10</code> holds 120, <code>B11</code> holds 20 and <code>B12</code> holds 1000. Write one formula for the cost of 1,000 calls.',
       ph:'=…',
       after:'<code>=B10*B12*B11/1000000</code>, which gives <code>2.4</code>, so ₹2.40. Read it as: tokens per call, times the number of calls, times the price per million, divided by a million. Chapter 15 builds a full cost model from exactly this line.'}
    ],
    ['h','What you have learned'],
    ['p','Now you can read and write the formulas this course uses: a cell address, a formula that starts with <code>=</code>, <code>SUM</code>, a percentage and <code>ROUND</code>. A4 uses them to size the market. Chapter 15 uses them to work out what a feature costs.'],
    ['p','<a href="#/sheets">Sheets</a> keeps every sheet you make. The code in your notebook can read any of them.']
  ]
},

{
  id:'a4', num:'A4', part:6, curriculumTier:'reference', phase:0, prerequisites:['a3'], nextUnits:['a5','b1','b2'], minutes:600, labs:[],
  title:'Market research: sizing, competitors and opportunities',
  concept:'Find out how big the chance is, and what you are really up against. You will count the market from the bottom up, like counting shops street by street. You will list everything a customer could use instead. Then you turn your interview proof into a ranked tree of chances.',
  takeaway:[
    'Work out a market size from the bottom up. Write down every guess you used.',
    'List three kinds of competitors: direct, indirect and do-nothing. Say why “keep doing what we do today” is so hard to beat.',
    'Write one sentence that says why you are different, after taking a competitor apart piece by piece. This is a positioning statement.',
    'Find where a product sits in the stack of AI layers (the AI value chain). Judge if its strength is easy to copy.',
    'Build an opportunity solution tree from interview proof. Rank its branches.'
  ],
  needs:[['Interview proof','You build the opportunity tree from what users told you.','A3'],
         ['A job statement (one line on what the user wants done)','A competitor is anything that does the same job.','A3']],
  capstone:{
    title:'Estimate the market and compare the alternatives',
    brief:'You now know who has the problem. This capstone asks two things. Would enough of them pay for a fix? And what do they use today instead? In this chapter you learned to count a market from the bottom up. You also learned to treat “do nothing” as a competitor. Now you do both for Bharat Privacy Guard.',
    where:'You only write. You do some research and fill a spreadsheet. You do not write any code.',
    steps:[
      'Make a table of at least five things a developer could use today. They are: Rampart; Microsoft Presidio (another open tool that finds personal details); at least one Indian company that sells data-protection tools; “do nothing”; and “write our own rules”. For each, write who it is for, its price, one strength and one weakness. For Rampart and Presidio, also write which languages they cover.',
      'Estimate the market from the bottom up. Count how many Indian development teams work with users’ personal data. Then multiply by what a team might really pay each year for a tool like this. Show the multiplication, not only the answer.',
      'Mark each number in your estimate as “known” (and name where it came from) or “guessed”. Then write the three guesses that would change the answer most if they were wrong.',
      'Draw an opportunity tree from your interviews. Put the main problem at the top. Under it, put the unmet needs from your interviews. Under those, put possible fixes. Add three fixes: the developer kit, the gateway and the browser extension.',
      'Give each of the three fixes a score from 1 to 5 on four things. How many people does it reach? How much pain does it remove? How sure are you? How well does it fit what you can build? Then pick the one to start with, and say why.',
      'Write a one-sentence positioning statement: “For [who], who [need], Bharat Privacy Guard is a [what] that [benefit], unlike [main alternative].”'
    ],
    done:[
      'The table with at least five rows, including “do nothing”, and the languages Rampart and Presidio cover.',
      'A market estimate where every number is marked known or guessed.',
      'An opportunity tree, and the scores for the three fixes.',
      'Your positioning sentence.',
      'A score from 0 to 3 for each item above, using this chapter’s scale, like marking your own homework. Move on only when every score is 2 or more.'
    ]
  },
  check:[
    ['Can you defend the denominator in your market estimate?',
     'The denominator is the number of customers you multiply by. Say exactly where it comes from, for example “companies with 50–500 staff using Freshdesk, from the vendor’s published customer count”. If you can’t find a source, write it down as an assumption, and give a range instead of a single number.'],
    ['Which competitor is the status quo, and why is it hard to displace?',
     'Usually it’s a spreadsheet, a manual process, or simply doing nothing. It’s hard to displace because it’s free, familiar and already trusted. Your product has to be clearly better, not slightly better, to make up for the effort of switching.'],
    ['Name one apparent moat that is easy to copy.',
     'A well-tuned prompt, a nicer interface, or using the newest model. Any competitor can do the same in weeks. Advantages that are harder to copy come from deep integration into a workflow, data that only your product collects, and the trust of security teams and buyers.']
  ],
  story:[
    ['c','On your route','First, go through it quickly, in about twenty minutes: read it and answer the boxes. The long “Build it” work can wait until later.'],
    ['c','Before you start','Doing it all takes about ten hours. You need your five interview notes from A3, and a spreadsheet (a grid of rows and columns for numbers). Some numbers take a little searching, like how many customers software companies say they have.'],
    ['p','In the last chapter you talked to real users and found who has the problem. Now a product person asks the next question. Is the problem big enough? And what are people doing about it today?'],
    ['p','You answer it in five steps. First, you work out how big the market is. Next, you list everything a customer could use instead of your product. Then you learn where AI products get their strength. Last, you put it all into a tree of chances.'],

    ['h','Idea 1: Size a market from the bottom up'],
    ['p','Say a friend tells you, “India has so many small businesses, so our app has a huge market.” It sounds exciting. But you cannot act on it. There are two better ways, and one is far more useful.'],
    ['p','The first is <strong>top-down</strong>. You start from a big industry report: “Customer-support software is a $10 billion market. If we get 1%, that is $100 million.” It is quick, but it tells you nothing. Nobody knows how you would win that 1%.'],
    ['p','The second is <strong>bottom-up</strong>. You start with customers you can count, like counting the shops on one street. Then you use a simple formula:'],
    ['code','market = number of customers × annual value per customer'],
    ['p','Then you shrink the number in three steps, like a sieve. Each step has a short name. The table shows them with our ticket-theme example:'],
    ['tb',['Term','Meaning','Ticket-theme example'],[
      ['TAM','Total addressable market: everyone who has the problem.','40,000 software companies with a support team × $1,200 a year = $48M'],
      ['SAM','Serviceable addressable market: the part you can really serve.','8,000 of them use a help desk you connect to and get 200+ tickets a week = $9.6M'],
      ['SOM','Serviceable obtainable market: what you could really win in about three years.','2% of SAM = 160 customers = $192,000 a year']
    ]],
    ['p','The final number matters less than the guesses behind it. Every number above is a guess until you find a source. So write each one down. Mark it <em>known</em> or <em>assumed</em>.'],
    ['key','A market estimate is only as good as its denominator. That is the number of customers you multiplied by.'],
    ['do','Prove it now',[
      ['p','Write the bottom-up formula for your capstone. Put a number in each slot, even a rough one. Mark each one known or assumed.'],
      ['x','You should have one line of sums with labelled numbers. If every number is assumed, that is fine for now. It shows you what to research first.']
    ]],
    ['q','I509'],

    ['h','Idea 2: Your competition is everything the customer could do instead'],
    ['p','Hear the word “competitor”, and most people think of another company with a similar app. But a customer with a problem has more choices. They can use a similar product. They can use a different kind of product. Or they can carry on as today.'],
    ['p','That gives three kinds of competitor. The table shows each with the ticket-theme example:'],
    ['tb',['Kind','Meaning','Ticket-theme example'],[
      ['Direct','A similar product doing the same job','Other AI tools that look at support tickets'],
      ['Indirect','A different kind of product doing the same job','Built-in help-desk reports; hiring an analyst'],
      ['Status quo','Carrying on as today','Reading tickets by hand; a tagging spreadsheet; doing nothing']
    ]],
    ['p','The status quo is usually the strongest competitor. It costs nothing. It is familiar. It already works well enough. People put up with a lot of pain before they change a habit.'],
    ['c','Watch out','“We have no competitors” nearly always means you have not looked at the status quo. If people have the problem today, they are solving it somehow, even if badly.'],
    ['do','Prove it now',[
      ['p','Name one direct, one indirect and one status-quo competitor for your capstone. For the status quo, write one sentence on why people stay with it.'],
      ['x','You should have three competitors and one reason. If you cannot name a direct competitor, search app stores, G2 or Product Hunt for the job, not for your product idea.']
    ]],
    ['q','I510'],

    ['h','Idea 3: Take competitors apart, then position against them'],
    ['p','Once you know the alternatives, look at each one closely, like opening a clock to see the parts. A <strong>competitive teardown</strong> looks at every alternative the same way. Who is it for? What job does it do? What does it cost? Where is it strong and weak?'],
    ['p','Where do you find the weak spots? Customer reviews on G2, Capterra or app stores are the best place. Look for complaints that come up again and again.'],
    ['p','Then you can write a <strong>positioning statement</strong>. It says who the product is for, and why it is different. A common form is:'],
    ['code','For [target customer], who [need],\n[product] is a [category] that [key benefit].\nUnlike [main alternative], it [key difference].'],
    ['p','For the ticket example, it could read like this: <em>For support leads at growing software companies, who need to report the week’s top issues quickly, Theme Finder is a ticket-analysis tool. It finds themes in minutes. Unlike built-in help-desk reports, it reads the ticket text rather than relying on tags that staff apply inconsistently.</em>'],
    ['do','Prove it now',[
      ['p','Read ten reviews of your strongest competitor. Write the two complaints you see most often. Then write your positioning statement in the form above.'],
      ['x','You should have two repeated complaints and one positioning statement. Its “unlike” line should link to one of the complaints you found.']
    ]],

    ['h','Idea 4: Know where you sit in the AI value chain'],
    ['p','Until now you looked at competitors from the customer’s side. Now look at where your own product sits. AI products are built in layers, like a cake. Each layer stands on the one below.'],
    ['tb',['Layer','Examples','Where the strength comes from'],[
      ['Infrastructure','Chips, cloud providers (companies that rent out computers)','Size and money'],
      ['Foundation models','OpenAI, Anthropic, Google, open-source models such as Llama','Research, computing power and data'],
      ['Tooling','Helper tools that store text by meaning (vector databases), check answers (evaluation), and run steps in order (orchestration)','Developers choosing it'],
      ['Applications','Products that end users work in','How it fits the work, how it reaches people, data and trust']
    ]],
    ['p','Most AI product managers work at the top layer, the application. That has one big result: <strong>the model is not your advantage</strong>. Your competitors can send messages to the same model over the same API (the doorway for sending a message to the model).'],
    ['p','So what is hard to copy? Three things. One is being built deep into a customer’s daily work and tools. Another is data that only your product collects, like the corrections users make. The third is trust, most of all with the security teams who approve B2B (business-to-business) buying.'],
    ['key','A data advantage is real only if three things are true. The data is yours alone. It makes the product better. And a competitor finds it hard to get.'],
    ['do','Prove it now',[
      ['p','Write which layer your capstone sits in, and which layers below it you depend on. Then write one strength you might have. Say honestly if a competitor could copy it in six months.'],
      ['x','You should have the layer, what you depend on, and one strength. If the honest answer is “yes, easily”, that helps. It tells you to compete on how you fit the work, and on trust, not on technology.']
    ]],
    ['q','I511'],

    ['h','Idea 5: Put opportunities in a tree'],
    ['p','You now know the market size, the alternatives, and where your product sits. It is tempting to jump straight from a problem to a fix. An <strong>opportunity solution tree</strong>, an idea from Teresa Torres, slows you down in a helpful way.'],
    ['p','The tree has four levels, like a family tree. It has a goal, the chances under it, fixes for each chance, and a test for each fix. Here is one for the ticket example:'],
    ['code','Outcome:        Support leads report the week’s top issues in under 30 minutes\n├─ Opportunity:  “I miss new issues that are growing fast”        (interviews 1, 3)\n│  ├─ Solution:  Alert when a new theme doubles week on week\n│  │  └─ Test:   Show five leads a mock alert. Do they act on it?\n├─ Opportunity:  “Tags are applied inconsistently”                 (interviews 1, 2, 4)\n│  ├─ Solution:  Group tickets by their text, not their tags\n│  └─ Solution:  Suggest tag corrections to support staff\n└─ Opportunity:  “Nobody reads the report”                         (interview 5)'],
    ['p','See that the chances are the needs and pains you heard in interviews. They are not features. Each one should point to the interviews it came from.'],
    ['p','Next, rank the branches on four things. <strong>Reach</strong> is how many users have the need. <strong>Pain</strong> is how bad it is. <strong>Confidence</strong> is how strong your proof is. <strong>Strategic fit</strong> is whether it moves your goal forward.'],
    ['try',{id:'a4-tree',mins:12,min:120,rows:7,
      task:'Draw an opportunity solution tree for your capstone. Include one goal, at least three chances with interview numbers, and one fix under your top-ranked chance. Say why you ranked it first.',
      ph:'Goal, chances (with interview numbers), fixes, why this ranking…',
      after:'A strong answer ranks by proof, not by excitement. In the example above, “Tags are applied inconsistently” ranks first. Three of five interviews raised it (reach and confidence). It causes the missed themes that leads worry about (pain). Fixing it directly shortens the report (fit). “Nobody reads the report” may matter more in the end. But one interview is weak proof. So the next step is to test it, not build for it.'}],

    ['h','What you have learned'],
    ['p','You can now size a market from the bottom up, and say which numbers you know and which you guessed. You can list every alternative a customer has, even doing nothing. You can write a sentence that says why your product is different.'],
    ['p','You also know that the model alone is not a strength. And you can lay out your chances as a tree that points back to your interviews.'],
    ['p','Next, you use all of this to make choices. The next chapter is about strategy (your big plan) and ranking what comes first, and about deciding what not to do.']
  ]
},

{
  id:'a5', num:'A5', part:6, curriculumTier:'reference', phase:0, prerequisites:['a4'], nextUnits:['a6','a8','b3'], minutes:720, labs:[],
  title:'Strategy and prioritisation: choosing what not to do',
  concept:'In the last chapter you did the research. Now you turn it into choices. You write a strategy (a plan to win) that says which users you serve and what you will not do. You score your options with ranking methods, and you learn where they fall short. Then you decide how to get the AI part of the product: build it, buy it or team up.',
  takeaway:[
    'Know the difference between a vision, a strategy and a plan.',
    'Write a strategy with three parts that fit together: what is wrong, the main approach, and the steps. The parts are called a diagnosis, a guiding policy and actions.',
    'Say what makes your product different. Say which small corner you will start in, called a wedge.',
    'Score options with RICE (a score made of four numbers). Say when you should overrule the score.',
    'Decide whether to build, buy or team up for the AI part of a product.'
  ],
  needs:[['A market estimate and a competitor map','A strategy is a choice about where to compete. These two show you the options.','A4'],
         ['A ranked opportunity tree','Ranking starts from this list of chances.','A4']],
  capstone:{
    title:'Write the strategy, and decide what not to do',
    brief:'You know the problem, the people and the market. Now you decide what to do first. Just as important, you decide what not to do. In this chapter you learned that a strategy has a diagnosis, a guiding policy and actions that fit together. Now you write one for Bharat Privacy Guard. Then, for each part of the tool, you choose: build it yourself, use an existing tool, or pay a provider.',
    where:'You only write. You write a memo (a short note for others) and fill a scored spreadsheet. You do not write any code.',
    steps:[
      'Write a strategy memo of one to two pages with six headings. First: the problem as you see it (the diagnosis). Second: who you build for first (start with the developer). Third: the narrow first product (the developer kit, not the gateway or the browser extension). Fourth: what makes it different. Fifth: the trade-offs you accept. Sixth: what you will not do.',
      'Under “what you will not do”, write at least one tempting thing you rule out, and say why. For example: “I will not cover Tamil or Bengali in version 1, because I cannot yet test them.”',
      'List ten pieces of work you could do, including the gateway and the browser extension. Score each one with RICE. Reach is how many people it touches. Impact is how much it helps them. Confidence is how sure you are. Effort is how much work it takes. The score is Reach × Impact × Confidence ÷ Effort.',
      'Pick one score and overrule it because your strategy says so. Write one paragraph on why, here, the strategy is a better guide than the number.',
      'The project has three finders: the pattern checker, the name-and-place finder and the context judge. For each one, choose: build it yourself, use an existing tool, or pay a provider. Compare the choices on quality, speed, cost, privacy, lock-in (how hard it is to leave) and time. Write one line of reasons for each finder.'
    ],
    done:[
      'A strategy memo with six headings, including a “will not do” part that rules something out.',
      'A table of ten scored pieces of work, with one overrule explained.',
      'A table showing the build, use or pay choice for each of the three finders.',
      'Every item in the memo traces back to the diagnosis.',
      'A score from 0 to 3 for each item above, using this chapter’s scale, like marking your own homework. Move on only when every score is 2 or more.'
    ]
  },
  check:[
    ['Can your strategy say what you will not do?',
     'If the section on what you won’t do is empty, or lists only things nobody wanted anyway, you don’t have a strategy yet. A real “won’t do” rules out something tempting. For example: “We will not support Zendesk in the first year, even though three prospects asked.”'],
    ['Does every initiative trace to the diagnosis?',
     'Read each initiative and ask which part of the diagnosis it addresses. If it traces to nothing, then either the diagnosis has a gap or it’s a pet project. Decide which. Then either update the diagnosis or cut the initiative.'],
    ['When is a lower-RICE item still the right choice?',
     'It can be right when it unblocks the strategy. It can also be right when it has a hard deadline, which means a high cost of delay, or when it reduces a risk that would sink everything else. For example, a data-privacy review scores low on reach and impact. But without it, no enterprise customer can buy.']
  ],
  story:[
    ['c','On your route','First, go through it quickly, in about twenty minutes: read it and answer the boxes. The long “Build it” work can wait until later.'],
    ['c','Before you start','Doing it all takes about twelve hours. Keep your market estimate, competitor table and opportunity tree from A4 open next to you. Most of the work is writing. Plan to write your strategy memo at least twice.'],

    ['p','In A4 you collected proof: who the users are, how big the market is, and who is already there. Proof alone does not tell you what to do on Monday morning. For that, you must choose.'],
    ['p','This chapter is about making those choices. You write a strategy. You learn to score options without fooling yourself. You decide how to get the AI part of your product. The hardest lesson is also the most useful: a good strategy says what you will not do.'],

    ['h','Idea 1: Vision, strategy and plan are different things'],
    ['p','People often use these three words as if they mean the same. They do not. Each answers a different question, over a different stretch of time. Think of a trip: the vision is the city you want to reach, the strategy is the road you pick, the plan is today’s turns.'],
    ['p','The table below uses one example all the way through: a tool that groups customer-support tickets (customers’ questions and complaints) into themes. Read across each row. You see the same product at three levels.'],
    ['tb',['','Answers','Time frame','Ticket-theme example'],[
      ['Vision','Where are we going?','3–5 years','Every product team knows what customers are struggling with, every week, without anyone reading tickets by hand.'],
      ['Strategy','How will we win?','1–2 years','Start with support leads at 50–500-person software companies on Freshdesk, and win on accuracy for fast-growing new issues.'],
      ['Plan','What are we doing next?','This quarter','Ship theme grouping for one help desk to ten design partners.']
    ]],
    ['p','The strategy is the hard part, because it means choosing. A vision can inspire, and a plan can be busy. Only a strategy says which customers you serve and which you turn away.'],
    ['c','From delivery to product','On a government project, the scope (what is in the job and what is not) came to you in a tender document or a project report. Your job was to deliver it. As the product manager, you write the scope. That includes the “not doing” list. You defend it when a senior asks for one more feature. Write that list first. Then ask what you would say to someone who wants an item back.'],
    ['do','Prove it now',[
      ['p','Write one sentence each for your capstone’s vision, strategy and plan.'],
      ['x','You should now have three sentences. Look hard at the strategy one. Does it name a specific user and a specific way to win? If it could describe any company, rewrite it.']
    ]],
    ['q','I512'],

    ['h','Idea 2: A strategy starts with a diagnosis'],
    ['p','So what goes into a real strategy? In his book <em>Good Strategy Bad Strategy</em>, Richard Rumelt says every real strategy has three parts. Think of a doctor: find the illness, pick the treatment, give the medicines.'],
    ['n',[
      '<strong>Diagnosis.</strong> What is the biggest challenge? What is really going on?',
      '<strong>Guiding policy.</strong> What is our main approach to that challenge?',
      '<strong>Coherent actions.</strong> Which exact steps carry out the policy and help each other?'
    ]],
    ['p','Let us fill in all three for the ticket example. See how each part follows from the one before it.'],
    ['tb',['Part','Example'],[
      ['Diagnosis','Support leads miss fast-growing new issues because tickets are tagged inconsistently, and reading them all takes hours.'],
      ['Guiding policy','Find themes from ticket text rather than tags, and focus on spotting new issues early rather than full reporting.'],
      ['Coherent actions','Integrate with one help desk; build week-on-week growth alerts; recruit ten design partners; measure missed issues against their manual reports.']
    ]],
    ['p','Rumelt also describes <strong>bad strategy</strong>. It is a wish dressed up as a plan. “Become the leading AI support-analytics platform” is a wish. It has no diagnosis, so it guides nobody.'],
    ['c','Tip','Try this quick test. Take your company’s name out of the strategy. If a competitor could paste it into their own slides unchanged, it is not specific enough.'],
    ['do','Prove it now',[
      ['p','Write a one-sentence diagnosis for your capstone, from your interview proof. Then write the guiding policy that follows from it.'],
      ['x','You should have two sentences. The diagnosis should name a cause, not just a sign of trouble. “Reports are slow” is only a sign. “Reports are slow because tags are unreliable, so every ticket must be read” is a diagnosis.']
    ]],

    ['h','Idea 3: Say why you are different, and where you will start'],
    ['p','When you know the problem, say why you are the right one to solve it. That is your <strong>value proposition</strong> (the promise of what you give). It says who you serve, what job you do for them, and why you beat the alternatives. You wrote a first version as your positioning statement in A4.'],
    ['p','Next, choose where to begin. A <strong>wedge</strong> is the narrow first use you can clearly win, like the thin end of a wedge that goes in first. It should be small enough to be excellent at, and linked to something bigger.'],
    ['p','For the ticket example, the wedge is “spot fast-growing new issues for Freshdesk users”. It is not “AI analytics for customer support”. A team can finish the first. A team can only talk about the second.'],
    ['p','You can pair these with a <strong>North Star</strong> (the one guiding light you steer by). It is one sentence on the value customers get, and one number that measures it. For example, “issues caught in their first week”. Chapter B3 covers North Star metrics in detail.'],
    ['key','Start narrow, so you can be the best at something. You can widen the wedge later. But you cannot recover from being average at everything.'],
    ['do','Prove it now',[
      ['p','Write your capstone’s wedge in one sentence. Then write the next, wider use it leads to.'],
      ['x','You should have two sentences. If your wedge uses the words “all”, “any” or “platform”, it is probably not narrow enough yet.']
    ]],

    ['h','Idea 4: Use ranking methods, and know their limits'],
    ['p','By now you have more good ideas than time. How do you compare them fairly? A framework (a fixed way of scoring) helps you judge every option the same way. The most common is <strong>RICE</strong>. It turns four judgements into one score, like marks adding up to a grade.'],
    ['code','RICE score = (Reach × Impact × Confidence) ÷ Effort\n\nReach       users affected per quarter        e.g. 400\nImpact      3 = massive, 2 = high, 1 = medium, 0.5 = low\nConfidence  100% = high, 80% = medium, 50% = low\nEffort      person-months of work'],
    ['p','Here is how it works on three chances for the ticket example. Try the sum for the first row yourself: 400 × 2 × 80% ÷ 2 gives 320.'],
    ['tb',['Opportunity','Reach','Impact','Confidence','Effort','RICE'],[
      ['Growth alerts','400','2','80%','2','320'],
      ['Tag correction suggestions','600','1','50%','3','100'],
      ['Second help-desk integration','250','2','100%','4','125']
    ]],
    ['p','Two other tools help too. <strong>MoSCoW</strong> sorts items into Must, Should, Could and Won’t. It is good for agreeing on scope with other people. <strong>Cost of delay</strong> asks what you lose for every week you wait. It matters when there is a deadline.'],
    ['c','Watch out','A framework is only as good as the numbers you put in. Those numbers are mostly guesses. Frameworks also ignore your strategy and what depends on what. Use them to shape a talk, not to make the choice for you.'],
    ['do','Prove it now',[
      ['p','Score three of your capstone chances with RICE. Then find one case where you would pick a lower score over a higher one. Write why.'],
      ['x','You should have a three-row table and one overrule. A good reason to overrule is something that depends on another, a deadline or a big bet on your strategy. “I like it more” is not a good reason.']
    ]],
    ['q','I513'],
    ['q','I514'],

    ['h','Idea 5: Build, buy or team up for the AI layer'],
    ['p','There is one more choice before you can plan the work. Where will the AI part of your product come from? You have three options, like getting a cake: bake it, buy it, or ask a bakery to do it with you.'],
    ['p','The table gives each option in plain words, then says when it makes sense. Read the last column first, because that is where the decision is.'],
    ['tb',['Option','What it means','When it makes sense'],[
      ['Build','Train or fine-tune your own model (teach it with many examples)','Rarely early on. It makes sense when you have data nobody else has, a narrow task and a team to look after it.'],
      ['Buy','Send messages to a model over the internet through an API (OpenAI, Anthropic, Google)','Usually the right start. It is fast, the quality is high, and you pay as you go, like paying per SMS.'],
      ['Partner','Use a specialist company for the whole job','It makes sense when the job is not your main strength, like turning speech into text or reading documents.']
    ]],
    ['p','Use six checks to compare the options. They are <strong>quality</strong> on your own test cases, <strong>latency</strong> (how long you wait for an answer), <strong>cost</strong> per task, <strong>privacy</strong> (where the data goes), <strong>lock-in</strong> (how hard it is to switch) and <strong>time to market</strong> (how soon people can use it).'],
    ['p','Also ask whether AI suits the task at all. AI fits when mistakes are fine or easy to catch. A wrong theme in a weekly report gets fixed at the next meeting. A wrong number in an invoice (a bill) costs money. The same model can suit one task and not the other.'],
    ['try',{id:'a5-bbp',mins:10,min:120,rows:6,
      task:'Write a short build, buy or partner decision for your capstone’s AI layer. Compare at least two options on the six checks. Then say your choice, and what would make you look at it again.',
      ph:'Options, six checks, choice, what makes me look again…',
      after:'A strong answer for the ticket example would <strong>buy</strong>: use a hosted model (one that runs on the provider’s computers) through an API. It is fast to ship, and on 50 test tickets the quality was good enough. Cost is about $0.02 per week per customer. Time to market is weeks, not months. <strong>Build</strong> would need examples with the right answers written on them, and we do not have those yet. The risks are privacy, because tickets hold customer details, and lock-in. So pick a provider that does not learn from customer data. Keep your instructions to the model and your test questions free of any one vendor. <strong>Look again if:</strong> cost per customer passes $1 a month, or we have 10,000 corrected labels.'},],

    ['h','What you have learned'],
    ['p','Let us pull the chapter together. A vision says where you are going. A strategy says how you win. A plan says what happens this quarter. A real strategy starts from a diagnosis, and is brave enough to say what you will not do.'],
    ['p','You also have two ways to stay honest. RICE gives you a score to start the talk. Your strategy tells you when to overrule it. The build, buy or partner table keeps the AI choice tied to six clear checks.'],
    ['p','Next, in A6, you take this strategy and turn it into a roadmap (the plan of what comes first, next and later). You set goals with numbers. You work out who has to say yes.']
  ]
},

{
  id:'a6', num:'A6', part:6, curriculumTier:'reference', phase:0, prerequisites:['a5'], nextUnits:['a7','b3'], minutes:600, labs:[],
  title:'Roadmaps, OKRs and getting stakeholders on board',
  concept:'You have a strategy, which is your plan for what to build and why. Now you turn it into something a team can follow and bosses can back. You will make a roadmap (a map of what to do, in order), write OKRs (goals with numbers), draw who can say no, and run a pre-mortem (a failure rehearsal).',
  takeaway:[
    'Make a now/next/later roadmap (a map of what to do first, next and later). Each item says what should change, and its kill criterion (when to stop).',
    'Write one goal in words. Then add key results (numbers that show you got there), input metrics and guardrail metrics. A guardrail is like the railing on a bridge.',
    'Draw a grid of people. Mark who has power and who cares. Name the person who can say no and stop the plan.',
    'Write a short memo that asks the boss for a yes or no. Before you start, run a pre-mortem: imagine the project failed and ask why.',
    'List what you need from other people, and what could go wrong. Do it early, so nothing surprises you later.'
  ],
  needs:[['A written strategy','The roadmap turns your strategy into outcomes, in a sensible order, like a list of stops on a train route.','A5'],
         ['A prioritised list (a list sorted by what matters most)','It decides what goes in the “now” column, like choosing which errand to do first.','A5']],
  capstone:{
    title:'Turn the strategy into a plan other people can back',
    brief:'A strategy that nobody can follow changes nothing. So you turn yours into a plan with dates and numbers, and you find out who must agree to it. In this chapter you learned to write a roadmap of outcomes (changes you want to see), goals with measurable key results, and a decision memo. Here you do all three. You end the plan at the point where the developer kit is ready to show.',
    where:'Written only. A plan, a memo and a map of people. No code needed.',
    steps:[
      'Draw a roadmap with three columns: Now, Next and Later. Fit it to the rest of this course. Now is the next few chapters. Later ends with a working demo of the developer kit at the Part V capstone. Each item must be an outcome, such as “a developer can paste text and see it cleaned”. A feature name alone is not enough.',
      'For every roadmap item, write four things: an owner, the proof that it matters, what it needs from others, and a stopping rule. The stopping rule is the result that would make you give up. For example: “Stop if fewer than half of the pattern checker’s results are right on my answer key.”',
      'Write one objective (the goal, in words). Then write three or four key results (the goal’s numbers). Keep two kinds apart. Product results are about people, like “five developers add the kit in under ten minutes”. Quality results are about the tool, like “the tool finds at least 90 of every 100 Aadhaar numbers”.',
      'Add one guardrail. It is a number you refuse to let get worse while you chase the others, like the railing on a bridge. For example: “False alarms stay below 5 in every 100 sentences.”',
      'Make a map of the people who will judge the project or be affected by it. They are: the developer who adds the kit, the compliance reviewer, the end user and an employer reading your portfolio. Mark each one high or low on influence (how much power they have). Mark each one high or low on interest (how much they care). Then name who could say no.',
      'Imagine it is a year from now and the project has failed. Write five reasons why. This is called a pre-mortem (a rehearsal of failure). For each reason, write one thing you will do now to make it less likely.',
      'Write a one-page memo to the person who decides. Ask for a yes or a no on the plan.'
    ],
    done:[
      'A now, next and later roadmap. Every item is an outcome with a stopping rule.',
      'One objective with three or four key results, and one guardrail.',
      'A map of the people involved. The person who could say no is named.',
      'A pre-mortem with five reasons for failure, and an answer to each.',
      'A one-page decision memo (a short note that asks the boss to decide).',
      'A score from 0 to 3 for each item above, using this chapter’s scale, like marking your own homework. Move on only when every score is 2 or more.'
    ]
  },
  check:[
    ['Is each roadmap item an outcome rather than a feature?',
     'Read each item aloud. If it names something you will build, like “growth alerts”, rewrite it as the change you expect, like “leads spot new issues in their first week”. The feature is only one way to reach the outcome, and it may not be the best way.'],
    ['Could a team game your key results while harming users?',
     'Try it. Say a key result is “alerts sent per week”. The easy way to hit it is to send more alerts, including useless ones. So add a guardrail metric, such as “fewer than one in five alerts dismissed as not useful”. Then the only way to win is to help users.'],
    ['Who can veto the project, and what evidence do they need?',
     'Name them. For an AI product in a B2B company, it is often the security or privacy lead. They need to know where the data goes and whether it is stored. Find out what they need early, because a late “no” from them costs more than any feature.']
  ],
  story:[
    ['c','On your route','First, go through it quickly, in about twenty minutes: read it and answer the boxes. The long “Build it” work can wait until later.'],
    ['c','Before you start','In full, this chapter takes about ten hours. Keep your strategy memo and RICE scores (the scores that ranked your ideas) from A5 open next to you. Also think about the people around your capstone: who pays for it, who says yes to it and who uses it.'],

    ['p','In A5 you chose what to do first and what not to do. But a plan on paper is only an idea. To make it real, a team needs steps it can follow. The people who hold the money and the approvals need a reason to say yes.'],
    ['p','This chapter takes you from strategy to that plan. You will build a roadmap. You will set goals with numbers. You will find the people who can help or stop you. And you will imagine failure before it happens, like a fire drill.'],

    ['h','Idea 1: Roadmaps should promise outcomes, not dates'],
    ['p','You have probably seen a roadmap that is a list of features with delivery dates. It looks sure. But the dates are guesses, and the features are hopes about what will help. When either one is wrong, the roadmap becomes a list of broken promises, like a train timetable that is always late.'],
    ['p','There is a better way. An <strong>outcome roadmap</strong> (a map of changes you want, not dates) uses three columns instead of dates. The table shows what each column means and how sure you can be.'],
    ['tb',['Column','Meaning','How sure we are'],[
      ['Now','What we are doing now','Promised'],
      ['Next','What we expect to do after that','Likely, but may change'],
      ['Later','What we are looking into','Ideas, sorted by what we think today']
    ]],
    ['p','Each item in a column is an outcome, which means a change you want to see. Next to it you write the details that help you manage it, like the label on a file folder. Here is one item filled in.'],
    ['tb',['Field','Example'],[
      ['Outcome','Support leads (the people who run the help desk) spot new issues within their first week'],
      ['Evidence','3 of 5 interviews described missing a fast-growing issue'],
      ['Owner','Product manager and one engineer'],
      ['Dependency (something you need from others)','Read access to the Freshdesk API (a way for programs to talk to Freshdesk)'],
      ['Kill criterion','Stop if fewer than half of design partners act on an alert within four weeks']
    ]],
    ['p','Outcome roadmaps matter even more for AI work. You often cannot know in advance if a model will be good enough. It is like a parrot that has read a whole library: you only find out how well it answers when you test it. So a date promised before testing is only a guess.'],
    ['key','A kill criterion (a rule for when to stop) set in advance makes it much easier to stop work that has gone wrong. Think of agreeing before a trip when you will turn back.'],
    ['do','Prove it now',[
      ['p','Write one “now” item for your capstone as an outcome. Fill in all five fields from the table.'],
      ['x','You should have one roadmap item. Check the kill criterion. Is it a number you can really measure within a few weeks?']
    ]],

    ['h','Idea 2: OKRs, input metrics and guardrails'],
    ['p','A roadmap tells you what you will work on. Next you need a way to say what winning looks like. A common way is <strong>OKRs</strong>. The letters stand for objectives and key results.'],
    ['p','The <strong>objective</strong> says what you want, in words. The <strong>key results</strong> are three or four numbers that show you got there. Think of it like a school report: the goal is “do well”, and the marks prove it. Here is an example for the ticket tool.'],
    ['code','Objective: Support leads trust Theme Finder for their weekly report\n\nKR1  8 of 10 design partners use it for 4 weeks in a row          (product outcome)\nKR2  Report preparation drops from ~3 hours to under 30 minutes  (product outcome)\nKR3  Theme precision on the 50-ticket test set is at least 85%    (model metric)\n\nGuardrail metric  Fewer than 1 in 5 alerts are dismissed as not useful'],
    ['p','Notice that KR1 and KR2 are about people. KR3 is about the model. Good key results are <strong>outcomes</strong>, meaning what changes for users. They are not <strong>outputs</strong>, meaning what you ship. “Ship growth alerts” is an output. “Leads catch new issues in their first week” is an outcome.'],
    ['p','Two more kinds of number help your OKRs. The first is an <strong>input metric</strong>. It is something the team can change directly, and you expect it to move the outcome. For example, the share of tickets given a theme (a topic label).'],
    ['p','The second is a <strong>guardrail metric</strong>. It is a number that must not get worse while you chase the key results, like the railing on a bridge. For example, the false-alarm rate or the cost per customer.'],
    ['c','Why this matters','Keep model numbers and product outcomes apart. A model can score 95% precision (of what it flags, 95% is right) while users still ignore the report because it comes too late. You need both kinds of number. But only the product outcome tells you if users are better off.'],
    ['do','Prove it now',[
      ['p','Write one objective and three key results for your capstone. Label each key result as a product outcome or a model number. Add one guardrail metric.'],
      ['x','You should have one objective, three labelled key results and a guardrail metric. Now try to cheat each key result. How could a team hit the number and still make things worse for users?']
    ]],
    ['q','I515'],
    ['q','I516'],

    ['h','Idea 3: Map the people who can help or stop you'],
    ['p','So far you have been thinking about the work. But a product decision involves many people, and they want different things. A <strong>stakeholder map</strong> (a picture of everyone who cares about the result) helps you see who matters. It puts each person on two lines: how much influence (power) they have over the project, and how much they care about it.'],
    ['p','The grid tells you how to treat each group. Read the examples in each box to get a feel for it.'],
    ['tb',['','Low interest (cares little)','High interest (cares a lot)'],[
      ['High influence (lots of power)','Keep satisfied (e.g. CFO, security lead)','Work closely with (e.g. head of support, your manager)'],
      ['Low influence (little power)','Keep informed (e.g. other product teams)','Keep involved (e.g. support agents, design partners)']
    ]],
    ['p','For each important stakeholder, write two more things. The first is their <strong>incentive</strong>, which is what they are judged on, like marks in an exam. It tells you how they will react. The second is their <strong>decision right</strong>. Do they decide, do they advise, or can they block it with a veto (a power to say no)?'],
    ['c','Watch out','In AI products, the security, legal and privacy leads often have a veto but little day-to-day interest. They sit in the “keep satisfied” box until the day before launch, when they say no. Talk to them early.'],
    ['do','Prove it now',[
      ['p','Place at least five stakeholders for your capstone on the grid. Circle anyone who can veto the project.'],
      ['x','You should have a filled grid with at least one person circled. If nobody can veto your project, you have probably missed someone. Ask who has to approve new software or new data flows (new ways that data moves around).']
    ]],

    ['h','Idea 4: Write for bosses, and imagine failure first'],
    ['p','Once you know who matters, you have to win them over. Executives (senior bosses) read fast and decide a lot. So write so they can act after the first paragraph. A good decision memo follows this order.'],
    ['n',[
      '<strong>The decision or ask</strong>, in the first sentence.',
      '<strong>Why now</strong>: the problem and the proof, in two or three sentences.',
      '<strong>Options</strong> you thought about, including doing nothing.',
      '<strong>Your recommendation</strong> and what it costs.',
      '<strong>Risks</strong>, and what would make you change course.'
    ]],
    ['p','Before you send the memo, run a <strong>pre-mortem</strong>. Imagine it is six months from now and the project has failed. Everyone writes down, alone, why it failed. Then you plan to stop the most likely causes.'],
    ['p','Why does this work? Because people will name risks about a pretend failure that they would never mention about a plan that is still alive. It is like a fire drill: you find the blocked door before the fire.'],
    ['do','Prove it now',[
      ['p','Write three reasons your capstone might fail six months from now. For each one, write one thing you can do this month to make it less likely.'],
      ['x','You should have three reasons for failure, each with a step to prevent it. The best reasons are specific, like “the security review took four months”. Vague ones, like “we ran out of time”, help much less.']
    ]],
    ['q','I517'],

    ['h','Idea 5: Track dependencies and risks'],
    ['p','The last piece is keeping the plan on track. A <strong>dependency</strong> is anything you need from outside your team. It could be another team’s work, a vendor (a company you buy from), access to data, or an approval. Plans slip here, because you do not control these things. It is like waiting for a friend who has your ticket.'],
    ['p','The best defence is a simple risk list. For each risk, write how likely it is, how much damage it would do, who owns it, and what you are doing about it. The table shows three examples.'],
    ['tb',['Risk','Likelihood','Impact','Owner','Mitigation'],[
      ['Security review delays access to ticket data','High','High','PM','Start the review in week 1. Prepare the data-flow diagram (a drawing of where data goes) now.'],
      ['Model provider (the company that runs the model) changes its pricing','Medium','Medium','Engineering lead','Keep the test set (your list of questions with known answers) free of any one vendor, so switching takes days'],
      ['Precision stays below 85%','Medium','High','PM and engineer','Give it a time limit of three weeks, then narrow the use case (make the job smaller)']
    ]],
    ['p','AI products carry a few risks of their own. The model’s quality may never reach the bar, like a student who never passes. The provider may change the model underneath you. And approvals to use data can take months.'],
    ['c','From delivery to product','You already keep a risk and issue log (what could go wrong, and what has) and a stakeholder register (who cares). Keep both. Only the first column changes. A delivery log starts with the milestone and its date. A product log starts with the outcome and its kill criterion. In the stakeholder grid, add each person’s incentive and whether they can veto. Your government experience helps you fill it fast.'],
    ['p','Now turn one thing you delivered into this new style.'],
    ['try',{id:'a6-translate',mins:10,min:120,rows:6,
      task:'Take one milestone you delivered on a government project. Rewrite it as an outcome with proof, an owner and a kill criterion. Then write what you would have had to decide, not just deliver.',
      ph:'Milestone… outcome… evidence… owner… kill criterion… what I would have decided…',
      after:'A strong answer. <strong>Milestone:</strong> citizen portal live in all districts by 31 March. <strong>Outcome:</strong> at least 60% of grievance applications (complaints) in the pilot districts are filed online within eight weeks of go-live. <strong>Evidence:</strong> the help-desk log shows most applicants still walk to the block office, which costs them a day’s wage. <strong>Owner:</strong> me, with the district nodal officer. <strong>Kill criterion:</strong> if fewer than 20% file online after eight weeks, stop adding districts and fix the form first. <strong>What I would have had to decide:</strong> whether to go live in districts with weak connectivity, instead of delivering to the date. Your numbers will differ.'}],
    ['try',{id:'a6-memo',mins:12,min:150,rows:7,
      task:'Write the first paragraph of your decision memo to leadership. Start with the decision or ask. Then give the proof, the cost and the biggest risk.',
      ph:'The ask, why now, the cost, the biggest risk…',
      after:'A strong opening: <strong>I am asking for one engineer for eight weeks to pilot Theme Finder with ten support teams.</strong> Three of five support leads we interviewed miss fast-growing issues because tickets are tagged inconsistently, and each spends about three hours every Monday on the report. The pilot costs one engineer and about $200 in model usage. The biggest risk is the security review of sending ticket data to a model provider. We have started it this week, and we will stop the pilot if precision on our test set stays below 85% after three weeks.'}],

    ['h','What you have learned'],
    ['p','Let us pull the chapter together. A good roadmap promises outcomes, not dates. Every item carries a kill criterion, so you know when to stop. OKRs give you numbers to aim at. Guardrails stop you from winning in a way that hurts users, like a railing on a bridge.'],
    ['p','You also saw that plans fail because of people and surprises. A stakeholder map shows who can say no. A decision memo makes it easy for them to say yes. A pre-mortem and a risk list catch problems early.'],
    ['p','Next, in A7, you will take one decision from this plan and turn it into a written plan for what to build, short stories about users, and a rough model. A team can build from these.']
  ]
},

{
  id:'a7', num:'A7', part:6, curriculumTier:'reference', phase:0, prerequisites:['a6','a3'], nextUnits:['b2','b4','b8'], minutes:840, labs:[],
  title:'Specs, stories and prototypes: from decision to delivery',
  concept:'You have a plan. Now you take one decision from it and turn it into something engineers can build and users can try. You will write a PRD (a recipe card for the product) that starts from the problem. You will break it into user stories (short notes about what a user wants), with edge cases (odd situations). Then you will cut an MVP (the smallest first version), plan two sprints (short work rounds), and test a clickable prototype (a rough model of the screens) with real users.',
  takeaway:[
    'Write a PRD that starts from the problem. Give it acceptance criteria (tests that say when it is done) that you can measure.',
    'Write user stories and job stories. Cover the odd cases, including what the user sees when the AI gets it wrong.',
    'Cut an MVP into one thin slice that works from start to end. It tests the thing you are most afraid of getting wrong.',
    'Plan sprints. For AI work you cannot guess, set a time limit (a time-box). Then hold a retrospective (a look back at what happened).',
    'Pick how rough or polished the prototype should be. Run a usability test (watching people try it) without hinting.'
  ],
  needs:[['An outcome roadmap (a map of changes you want, in order)','The PRD describes the first item in its “now” column, like a recipe card for the first dish on the menu.','A6'],
         ['Your riskiest unknown (the thing you are least sure about)','The MVP should test it, like tasting the soup before you cook the whole meal.','A3']],
  capstone:{
    title:'Write the requirements, test a first prototype and plan two sprints',
    brief:'Now you describe exactly what version 1 of the developer kit must do. You show a rough version to real people. And you plan the work. In this chapter you learned to write a requirements document (a PRD), which starts from the problem. You learned to choose how polished a prototype should be. You learned to plan sprints that include work you cannot guess. Here you do all three.',
    where:'Written only for the requirements and the plan, plus a prototype with no code. The <a href="#/playground">Playground</a> in this app is enough for a first version. Google AI Studio or Lovable can turn it into a clickable screen. No Python needed.',
    steps:[
      'Write a requirements document (a PRD) with these headings: the problem and the proof for it; who it is for; what is in version 1; what is not in version 1; what the user sees in each situation, including when the tool is unsure or wrong; how the AI behaves; how you will test it; how you will measure success; how it will be released; security; and open questions.',
      'Under “what is in version 1” and “what is not in version 1”, draw a clear line. Say which kinds of writing, which IDs, and which of the kit, the gateway and the extension you will really build.',
      'Write six user stories in the form “As a [who], I want [what], so that [why]”. At least two must be about something going wrong. For example: “As a developer, I want to be told when the tool is unsure, so that I can ask the user.”',
      'Build a clickable prototype. It is a page with a text box, a button and a result area. The result shows the text with personal details swapped out. The quickest first version is the <a href="#/playground">Playground</a> in this app: the system prompt (the standing instructions on the shop wall) is your detector, and the message box is the text box. For a screen you can hand to a user, Google AI Studio or Lovable will make one. The detection can be fake for now, because you are testing the screen, not how right it is.',
      'Ask three real people to try it. Give each the same task, such as “paste this message and tell me what you think happened to it”. Do not help them. Write down where each person got stuck.',
      'Plan two one-week sprints in a spreadsheet or in Jira (a tool teams use to track work). For each story, write what counts as done, what it needs from others, and what you will show at the end. After the first sprint, hold a short review. Write down what you will change.'
    ],
    done:[
      'A requirements document that an engineer could size up without asking you what success means.',
      'Six user stories. At least two are about things going wrong.',
      'A clickable prototype, and notes from three people who tried it.',
      'A two-sprint plan, with a review after the first sprint.',
      'A score from 0 to 3 for each item above, using this chapter’s scale, like marking your own homework. Move on only when every score is 2 or more.'
    ]
  },
  check:[
    ['Can engineering estimate the PRD without guessing the outcome?',
     'Give the PRD to an engineer and ask what “done” means. If they have to guess, add a measurable acceptance criterion. This happens, for example, when the spec says “accurate themes” with no number. A better line is “at least 85% of themes match the lead’s own grouping on the 50-ticket test set”.'],
    ['What is the smallest end-to-end vertical slice?',
     'It is the thinnest version that goes all the way from input to user value. For the ticket example: import one week of tickets from one help desk, group them, show five themes and email them to one lead. It skips settings, other help desks and history, but a real user can try it.'],
    ['Do the acceptance criteria cover failure, uncertainty and refusal states?',
     'Check for criteria like these. “If no theme has more than five tickets, say so instead of inventing one.” “If the model times out, show last week’s report with a notice.” “Tickets in other languages are grouped or flagged, never dropped silently.” If criteria like these are missing, the product will fail in production in ways nobody planned for.']
  ],
  story:[
    ['c','On your route','First, go through it quickly, in about twenty minutes: read it and answer the boxes. The long “Build it” work can wait until later.'],
    ['c','Before you start','In full, this chapter takes about 14 hours, spread across a week or more because of the user tests. For the prototype, the <a href="#/playground">Playground</a> in this app is enough to start. A free account on Figma, Lovable or Google AI Studio gives you a nicer screen. For the sprint plan you need Jira (free tier) or a spreadsheet. Core chapter 18 goes deeper on AI PRDs. This chapter covers the basics of managing a product.'],

    ['p','In A6 you made a plan: a roadmap, goals with numbers, and a map of the people involved. But an engineer still cannot start building from it on Monday. For that, the first item on your roadmap needs a detailed description, like a recipe a cook can follow.'],
    ['p','This chapter shows you how. You will write that description. You will cut the work into small pieces. You will build a rough model of the screens. And you will watch real people use it.'],

    ['h','Idea 1: Start the PRD from the problem'],
    ['p','Let us start with the description itself. It is called a <strong>PRD</strong>, short for product requirements document. Think of it as the recipe card for a dish: it says what to build and why.'],
    ['p','A good PRD starts with the problem and the proof for it. Only then does it describe the answer. Why this order? Engineers decide better when they know the problem they are solving.'],
    ['p','A PRD for an AI feature has these parts, in this order.'],
    ['n',[
      '<strong>Problem and evidence.</strong> What is wrong today, for whom, and how you know.',
      '<strong>Users.</strong> Who this is for, and who it is not for.',
      '<strong>Scope and non-goals.</strong> What is in, and what you leave out on purpose.',
      '<strong>UX states.</strong> What the user sees when it works, when it is unsure, when it fails and when it refuses.',
      '<strong>AI behaviour.</strong> What the model does, what you hand it, and what it must never do.',
      '<strong>Evaluations.</strong> The test set (questions with known answers) and the pass mark.',
      '<strong>Metrics, rollout and security.</strong> How you will measure success, release step by step, and keep data safe.',
      '<strong>Open questions.</strong> What you do not know yet.'
    ]],
    ['p','The most important part is the <strong>acceptance criteria</strong>. They are the tests that tell you the feature is done, like the answer key for a homework. Each one must be something you can check.'],
    ['p','An AI feature gives slightly different answers each time. So its criteria describe a rate over a test set, not one right answer. The table puts vague wishes next to criteria you can really check.'],
    ['tb',['Cannot be checked','Can be checked'],[
      ['Themes (topic labels) are accurate','On the 50-ticket test set, at least 85% of themes match the lead’s own grouping'],
      ['It is fast','The weekly report is ready within 2 minutes for up to 1,000 tickets'],
      ['It handles bad input','If fewer than 20 tickets are imported, it says so and does not make themes']
    ]],
    ['c','From delivery to product','Government projects often start from a requirements specification: a long list of what the system must do. It says what to build. A PRD starts one step earlier, with the problem and the proof. It ends with a pass rate you can check. If you have signed off a specification, rewrite one line of it as a criterion you can check.'],
    ['c','Tip','There is a fillable AI PRD template (a blank form) in the <a href="#/templates/prd">workbench</a>. Use it for the Build it task.'],
    ['do','Prove it now',[
      ['p','Write three acceptance criteria for your capstone’s first feature. Make each one checkable: a number, a test set or a clear condition.'],
      ['x','You should have three criteria. For each one, ask yourself: could two people disagree about whether it passed? If yes, it cannot be checked yet.']
    ]],
    ['q','I518'],

    ['h','Idea 2: Break the work into stories, including the odd cases'],
    ['p','A PRD describes the whole feature. To build it, the team needs smaller pieces, like cutting a big roti into bites. The usual piece is a <strong>user story</strong>. It describes one bit of value from the user’s point of view.'],
    ['code','As a [role], I want [action], so that [benefit].\n\nAs a support lead, I want to see the five biggest themes from last week,\nso that I can tell the product team what to fix first.'],
    ['p','There is a second kind. A <strong>job story</strong> starts from the situation, not the role. This often gives engineers more useful context.'],
    ['code','When I open the report on Monday morning, I want to see what is new\nsince last week, so I can raise it before it grows.'],
    ['p','Every story needs acceptance criteria. It also needs <strong>edge cases</strong>. These are the unusual inputs and states that break things, like a rainy day that breaks the cricket match plan. AI features have extra edge cases that ordinary software does not. The table lists the common ones, with what should happen in each.'],
    ['tb',['Edge case (an odd situation)','What should happen'],[
      ['No clear themes this week','Say so. Do not make up themes.'],
      ['Tickets in another language','Group them, or mark them clearly. Never drop them without telling anyone.'],
      ['Model takes too long and gives up (times out)','Show last week’s report with a notice'],
      ['Model is unsure','Mark the theme as low confidence'],
      ['Ticket has personal data (someone’s private details)','Take it out before you send the text to the model']
    ]],
    ['do','Prove it now',[
      ['p','Write one user story for your capstone, with two acceptance criteria and three edge cases. Make at least one edge case about AI.'],
      ['x','You should have one story, two criteria and three edge cases. The AI one is usually about doubt, wrong answers or the model saying no.']
    ]],

    ['h','Idea 3: Build a thin slice that works from start to end'],
    ['p','You have stories. Which one do you build first? The answer is an <strong>MVP</strong>, a minimum viable product. It is the smallest thing that tests your riskiest guess with real users. It is not a small copy of the whole product.'],
    ['p','How you cut the work makes a big difference. There are two ways.'],
    ['l',[
      '<strong>Horizontal slices</strong> build one layer at a time, like laying one floor of a building at a time. First all the data import, then all the processing, then all the screen. Nothing works for a user until the last layer is done.',
      '<strong>Vertical slices</strong> build a thin version of every layer, like a thin slice of layered cake. A user can try something from the first week.'
    ]],
    ['p','Vertical slices are the better choice here. For the ticket example, the first vertical slice looks like this.'],
    ['code','One help desk  →  last week’s tickets  →  group into themes  →  show top 5  →  email one lead\n\nLeft out for now: other help desks, history, settings, alerts, sharing'],
    ['key','Build the thinnest slice that lets a real user try the core value. Everything else can wait until you know it works.'],
    ['do','Prove it now',[
      ['p','Draw your capstone’s first vertical slice as one line, like the example above. Then list what you are leaving out on purpose.'],
      ['x','You should have one line from input to user value, and a list of things left out. If the line has more than six steps, look for a step you can do by hand in the first version.']
    ]],
    ['q','I519'],

    ['h','Idea 4: Plan sprints, guess honestly, and look back after each one'],
    ['p','Once you know what to build first, you need a rhythm for building it. Many teams work in <strong>sprints</strong>, which are fixed work rounds of one or two weeks, like a school term. Each sprint starts with planning. It ends with a demo (showing what works) and a retrospective (looking back).'],
    ['n',[
      '<strong>Planning.</strong> Pick the stories that fit what the team can do. Start with the most important.',
      '<strong>Estimation.</strong> Size stories against each other, using points or T-shirt sizes (S, M, L). It is easier to agree on small, medium and large than on hours.',
      '<strong>Demo.</strong> Show software that works, not slides.',
      '<strong>Retrospective.</strong> Ask three questions: what went well, what did not, and what will we change next sprint?'
    ]],
    ['p','AI work is hard to guess, because you do not know how good the model will be until you try. So <strong>time-box</strong> the unsure work instead. A time-box is a fixed amount of time, like a timer on a kitchen counter. For example: “Spend three days. If precision on the test set is below 70%, stop and rethink the approach.”'],
    ['p','A time-box turns a guess you cannot make into a stop-and-decide point you can plan around.'],
    ['do','Prove it now',[
      ['p','Pick the most unsure story in your plan. Write a time-box for it: how long you will spend, what result counts as success, and what you will do if you do not reach it.'],
      ['x','You should have one time-box with a length of time, a pass mark and a fallback (what you do instead). The fallback matters most, because it turns a failed try into a decision.']
    ]],

    ['h','Idea 5: Make the prototype as polished as you need, and test without helping'],
    ['p','Before the team builds anything real, it helps to show people a rough version, like a paper model of a house. How rough? That depends on what you want to learn. <strong>Fidelity</strong> is how close a prototype is to the real thing. Match it to your question.'],
    ['tb',['Fidelity (how close to real)','Tool (what you make it with)','Good for testing'],[
      ['Low','Paper sketch','Whether the steps make sense'],
      ['Medium','Clickable mock-up in Figma (a design tool)','Whether users can find their way around'],
      ['High','Working prototype: the Playground, Lovable or Google AI Studio','Whether users trust the real AI answer and act on it']
    ]],
    ['c','Watch out','For AI features, use real model replies in your prototype, not perfect made-up ones. Users react differently to answers that are sometimes wrong. That reaction is exactly what you need to learn about.'],
    ['p','Then you run a <strong>usability test</strong>. That means you watch a person try your prototype. Give the user a task, not instructions. For example: “It is Monday morning. Find the biggest new problem from last week.” Then watch and stay quiet. Note where they pause, click the wrong thing or look lost.'],
    ['p','The hardest part is not helping. When a user gets stuck, that is your finding. Three to five users will show you most of the serious problems.'],
    ['try',{id:'a7-test',mins:10,min:100,rows:5,
      task:'Write a usability test plan for your prototype: two task prompts, what you will watch for, and the one thing you most want to learn.',
      ph:'Two task prompts, what to watch for, key question…',
      after:'A strong plan: <strong>Task 1:</strong> “It is Monday morning. Find the biggest new problem from last week.” <strong>Task 2:</strong> “You think one theme is wrong. Tell the tool.” <strong>Watch for:</strong> whether they open the themes or scroll the raw tickets first, how long before they trust a theme, and whether they find the correction button. <strong>Key question:</strong> would they paste these themes into their report without checking? If not, what would they need to see first?'}],
    ['q','I520'],

    ['h','What you have learned'],
    ['p','Let us pull the chapter together. A PRD starts from the problem and has acceptance criteria you can check. User stories and edge cases break it into pieces. The AI edge cases are the ones teams forget most often.'],
    ['p','You also learned three more things. Build a thin vertical slice first. Put a time-box on AI work you cannot guess. Test a prototype by watching quietly, not by helping.'],
    ['p','Next, in A8, you will step back from product management. You will learn how generative AI models (models that write new words for you) really work.']
  ]
},

{
  id:'a8', num:'A8', part:6, curriculumTier:'selective', phase:3, prerequisites:['a1','a5'], nextUnits:[], minutes:720, labs:[],
  title:'Generative AI foundations: how the models work',
  concept:'Until now you have looked at products. In this chapter you look inside the engine. You will learn how large language models are made and how they write text. Think of a model as a parrot that has read a whole library. You will learn only as much as a PM needs to make good calls. You will see attention at work. You will compare three ways to improve a model: prompting, RAG and fine-tuning. And you will test two models on the same ten cases.',
  takeaway:[
    'Say how predictive AI (AI that picks a label or a number) differs from generative AI (AI that writes new things), and when each fits.',
    'Explain tokens, context windows, transformers and attention in plain words, using pictures from daily life.',
    'Explain the three stages of training a model. Say how they differ from inference, which is using the finished model.',
    'Pick between prompting, RAG and fine-tuning for a given problem.',
    'Describe the AI market: model providers, open-weight models (models you can download), the machines underneath, and the apps on top.'
  ],
  needs:[['A candidate problem with an AI fit (a problem that AI might suit)','This chapter helps you decide which AI method suits it, like choosing the right tool from a toolbox.','A1'],
         ['A build, buy or partner decision (make it yourself, pay for it, or team up)','This chapter explains what you are buying.','A5']],
  capstone:{
    title:'Run three experiments on how models treat Indian text',
    brief:'Before you build, see for yourself how AI models behave on the kind of text your tool must handle. In this chapter you learned what tokens and attention are. You also learned how to choose between prompting, retrieval (looking up the right page first) and fine-tuning. Here you run three small experiments on English, Hindi and Hinglish sentences. Then you write down what you saw.',
    where:'The attention viewer inside this chapter, for the attention demo. Write what you saw in the notes box below.',
    steps:[
      'Take starter sentences 1, 2 and 3 from the project page. They are the same kind of message in English, Hindi and Hinglish. Paste each one, one at a time, into the attention viewer in this chapter.',
      'For each sentence, write down how many pieces the text is cut into. Also write down which words the model pays most attention to when it reaches the name and the number. Then write two or three lines on what is different between the three sentences. Add one line on what this viewer does not prove.',
      'Fill in a table that compares three ways of making a model find personal details. You can ask it with a prompt. You can let it look things up in your documents (retrieval). Or you can train it more (fine-tuning). Compare them on how fresh the facts are, private data, writing style, cost, speed and how easy they are to test. Fill it in for the third part of the tool, the context judge. End with the option you choose and why.',
      'Run starter sentences 1 to 8 through two different AI models in the <a href="#/playground">Playground</a>. Fill in <em>Compare with</em>, so that each message goes to both. Use the same instruction for both: “List every piece of personal information in this sentence.”',
      'For each model, write down how many items it found correctly, how many it missed, how long it took and what it cost. Note which sentences it missed. Note whether most of the misses were Hindi or Hinglish.',
      'Write one paragraph. Which model would you start with for this project? What is the one thing you would test next before you trust it?'
    ],
    done:[
      'An attention write-up that names one clear difference you saw between the English, Hindi and Hinglish sentences.',
      'A decision table for the context judge. It ends with a choice and a reason.',
      'A comparison of two models on the same eight sentences. Show found, missed, time and cost for each.',
      'One paragraph naming the model you would start with, and the one thing you would test next.',
      'A score from 0 to 3 for each item above, using this chapter’s scale, like marking your own homework. Move on only when every score is 2 or more.'
    ]
  },
  check:[
    ['Why is attention not the same as an explanation?',
     'Attention shows which tokens a single layer weighted when processing another token. A model has dozens of layers, each with many attention heads, and the final answer comes from all of them together. So a bright line in one attention map is a clue about what the model used. It is not a faithful account of why the model answered as it did.'],
    ['When is fine-tuning the wrong fix for missing facts?',
     'Almost always. Fine-tuning changes how a model behaves, such as its tone, its format or how it handles a narrow task. It is a poor way to add facts, especially facts that change. If the model does not know your refund policy, put the policy in the context with RAG. Chapter 19 covers this in depth.'],
    ['What is the difference between training-time learning and context-time conditioning?',
     'Training changes the model’s weights permanently, for every future request. Context-time conditioning means putting instructions, examples or documents into one request. It shapes that one answer and is forgotten afterwards. Almost everything you do as an application builder is context-time.']
  ],
  story:[
    ['c','On your route','First, go through it quickly, in about twenty minutes: read it and answer the boxes. The long “Build it” work can wait until later.'],
    ['c','Before you start','In full, this chapter takes about twelve hours. You need nothing outside this site. The attention viewer is inside the chapter. The <a href="#/playground">Playground</a> compares two models side by side once you have connected one on the <a href="#/setup">setup page</a>. The hands-on code chapters, from Chapter 1 onwards, build on everything here. So treat this chapter as the map before the journey.'],

    ['p','In A7 you turned a decision into a written plan, short user stories and a rough model. All through this part you have used AI models as tools. Now it is worth knowing a little about what is inside them, like peeking under a car bonnet.'],
    ['p','You do not need the maths. You need enough to make good calls. When is a model the right tool? Why does it act the way it does? Which way of improving it should you try first?'],

    ['h','Idea 1: Predictive AI and generative AI'],
    ['p','Let us start with a split you will hear often. Both kinds of AI learn patterns from data and make predictions (guesses about what comes next). What differs is what they guess. The table puts the two side by side.'],
    ['tb',['','Predictive AI (picks a label or number)','Generative AI (makes new things)'],[
      ['Output (what comes out)','A label or a number','New content: text, images, code or audio'],
      ['Examples','Spam or not spam; the chance a customer cancels; next month’s sales','Writing a first draft of an email; summarising a call; answering a question'],
      ['Training (how it learns)','Examples with labels, for one task','A huge amount of general data, then adapted to follow instructions'],
      ['Tasks per model (jobs one model does)','Usually one','Many, chosen by the instructions you give'],
      ['Typical cost per use','Very low','Higher, and it grows with the length of input and output']
    ]],
    ['p','A large language model, or <strong>LLM</strong>, is generative AI for text. Picture a parrot that has read a whole library. It guesses the next piece of text, again and again, and that is how it writes whole answers.'],
    ['c','Why this matters','Not every AI problem needs generative AI. Guessing which customers will cancel is a predictive job. A small classic model (an older, simpler kind) does it more cheaply and more reliably. Chapter 2.4 shows how far a simple sorter can go.'],
    ['do','Prove it now',[
      ['p','List three AI features you have used lately. Label each one as predictive or generative.'],
      ['x','You should have three labelled features. Recommendations, fraud alerts and spam filters are predictive. Chat assistants, image makers and meeting summaries are generative.']
    ]],
    ['q','I523'],

    ['h','Idea 2: Tokens, context windows, transformers and attention'],
    ['p','So how does an LLM read your text? It does not read words. It reads <strong>tokens</strong>, which are small pieces of text, like Lego bricks. A token is often a whole word and sometimes only part of one. In English, one token is about three-quarters of a word on average.'],
    ['p','Each request can hold only so many tokens, counting both your message and the model’s answer. This limit is the <strong>context window</strong>. Think of it as the model’s desk: everything it uses to answer must fit on the desk.'],
    ['p','Modern LLMs are built on a design called the <strong>transformer</strong>. Its key part is <strong>attention</strong>. For each token, the model works out which other tokens in the context matter most for guessing what comes next. It is like a student who underlines the key words in a question.'],
    ['p','Here is a classic example. Take the sentence <em>“The trophy did not fit in the suitcase because it was too big”</em>. You know that “it” means the trophy. Attention is how the model links “it” to “trophy” and not to “suitcase”.'],
    ['p','You can see attention for yourself, right here. The viewer below runs a small real model, GPT-2, inside your browser. Type a sentence. Then pick a word to see which earlier words it pays attention to.'],
    ['embed','https://poloclub.github.io/transformer-explainer/','Transformer Explainer · Polo Club of Data Science, Georgia Tech',680],
    ['x','You will see your sentence cut into tokens and passed through the model. Open an attention head (one of the model’s many small spotlights) to see which earlier tokens each token looks at. Try the trophy sentence and look at “it”. In some heads it links strongly to “trophy”.'],
    ['p','On your own computer, with PyTorch (a free toolbox for building AI models) installed, the same picture comes from a few lines of code. PyTorch cannot run inside a web page, so this block has no Run button here.'],
    ['code','!pip install -q transformers bertviz\n\nfrom transformers import AutoTokenizer, AutoModel\nfrom bertviz import head_view\n\nname = "bert-base-uncased"\ntok = AutoTokenizer.from_pretrained(name)\nmodel = AutoModel.from_pretrained(name, output_attentions=True)\n\ntext = "The trophy did not fit in the suitcase because it was too big."\ninputs = tok(text, return_tensors="pt")\noutputs = model(**inputs)\ntokens = tok.convert_ids_to_tokens(inputs["input_ids"][0])\n\nhead_view(outputs.attentions, tokens)','local'],
    ['x','You will see an interactive diagram with the sentence’s tokens on each side and lines between them. Click the token “it” and switch between layers (the model’s stacked steps). In some layers and heads, “it” links strongly to “trophy”.'],
    ['snag',[
      'An error saying a module (a ready-made piece of code) was not found',
      'The install line did not run. Run the first cell (the first box of code) again. Wait for it to finish before you run the rest.',
      'The diagram does not appear',
      'Some browsers and office networks block the embedded viewer. Try Chrome, or open the viewer on its own with the link under it. It shows attention without any setup.',
      'It runs, but “it” does not link to “trophy” in the layer you picked',
      'That is expected. Different layers and heads learn different patterns. Click through several layers. Seeing the pattern in only some places is part of the lesson.'
    ]],
    ['c','Watch out','Attention is a clue, not an explanation. A model has many layers, each with many attention heads, and the final answer comes from all of them together. Never show an attention map as proof of why a model gave an answer.'],
    ['q','I522'],

    ['h','Idea 3: How a model is trained, and what inference means'],
    ['p','Now you know what a model reads. Where does its skill come from? A chat model like the ones you use is made in three stages, like a child going from reading, to following instructions, to learning manners.'],
    ['n',[
      '<strong>Pre-training.</strong> The model learns to guess the next token from a vast amount of text from the web, books and code. This takes months and costs millions of dollars. The result is a <em>base model</em>. It can continue any text but does not reliably follow instructions.',
      '<strong>Instruction tuning.</strong> The model is trained more on examples of instructions paired with good answers. Now it follows instructions.',
      '<strong>Learning from human feedback.</strong> People look at pairs of answers and pick the better one. The model is trained to prefer answers like the ones people chose. This is often called <strong>RLHF</strong>, short for reinforcement learning from human feedback. It makes the model more helpful and more careful.'
    ]],
    ['p','All three stages change the model’s <strong>weights</strong>. These are the billions of numbers inside the model that hold what it has learned, like the settings on a huge mixing board.'],
    ['p','<strong>Inference</strong> is different. It means using the finished model to answer a request. Inference does not change the weights. When you use an AI API (sending a message to the model over the internet), you pay for inference, and the charge is by the token.'],
    ['key','Training changes the model for good, for everyone. What you put in a prompt (the note you hand the model) shapes one answer and is then forgotten, like a goldfish.'],
    ['do','Prove it now',[
      ['p','Open the <a href="#/playground">Playground</a> and tick <em>Keep the conversation</em>. Tell it a made-up fact, such as “My company’s refund window is 17 days.” Ask it about the refund window. Then press <em>Clear</em>, which starts a brand-new conversation, and ask again.'],
      ['x','It remembers within the conversation, but not in the new one. The fact was context (what you put on its desk), not training. Chapter 1.5 shows why: the app sends the whole conversation again with every message.']
    ]],

    ['h','Idea 4: Prompting, RAG or fine-tuning'],
    ['p','Sooner or later, a model will not do what you need. Then you have three main tools to try. The table compares them on the points a PM cares about.'],
    ['tb',['','Prompting (writing better instructions)','RAG','Fine-tuning'],[
      ['What it is','Put instructions and examples in the request','Find the right documents and add them to the request, like an open-book exam','Train the model more on your own examples, like coaching'],
      ['Up-to-date facts (the newest information)','No','Yes, as fresh as your documents','No, fixed on the day of training'],
      ['Private data','Only what fits in the prompt','Yes, from your own sources','Baked in, so it is hard to remove later'],
      ['Style and format (how the answer sounds and looks)','Good','Not what it is for','Very good for steady behaviour'],
      ['Cost to set up','Very low','Medium','High'],
      ['Speed per request','Fast','Slower, because finding the documents adds a step','Fast'],
      ['How to check it','Test cases (questions with known answers)','Check finding the documents and the answer quality separately','Test cases before and after training']
    ]],
    ['p','<strong>RAG</strong> stands for retrieval-augmented generation. Think of an open-book exam: first find the right page, then answer from it. You will build a complete RAG system by hand in Chapters 3 to 7.'],
    ['key','If the model is missing facts, give it the facts with RAG. Fine-tuning teaches habits, not facts.'],
    ['p','So what should you try first? Start with prompting. Add RAG when the model needs facts it does not have. Think about fine-tuning only when you need very steady behaviour. Also think about it when you want a smaller, cheaper model to do one narrow job well. Chapter 19 covers this choice in depth.'],
    ['do','Prove it now',[
      ['p','For your capstone, fill in the decision table above with one row for each point, and circle the best choice for each.'],
      ['x','You should have a filled table and a choice. For most capstones in this course the answer is prompting plus RAG. If you chose fine-tuning, name the exact behaviour that prompting could not give.']
    ]],
    ['q','I521'],

    ['h','Idea 5: The AI market in one picture'],
    ['p','The last step is to see where all this fits in the market. You met the AI value chain in A4: the machines underneath, the foundation models, the tools and the apps. At the model layer there are two kinds of provider. The table compares them.'],
    ['tb',['','Closed models (you cannot see inside)','Open-weight models (you can download them)'],[
      ['Examples','OpenAI GPT, Anthropic Claude, Google Gemini','Meta Llama, Mistral, Qwen, DeepSeek'],
      ['How you use them','Through the provider’s API (you send messages over the internet)','Download and run them yourself, or use a company that runs them for you'],
      ['Strengths (what they are good at)','Usually the best quality; nothing for you to run','More control over data and cost; can be fine-tuned freely'],
      ['Trade-offs (what you give up)','Your data leaves your systems; prices and models can change','You pay for hosting (a computer to run it on) and you do the upkeep']
    ]],
    ['p','Services such as <strong>OpenRouter</strong> let you call many models, closed and open, through one API. That makes it easy to compare them on your own test cases. That is the only comparison that counts.'],
    ['p','Two trends shape AI product strategy. Model prices keep falling. Good models come from many providers. Both push the value up to the app layer, where the workflow, the data and trust decide who wins.'],
    ['try',{id:'a8-compare',mins:15,min:120,rows:6,
      task:'Run three of your capstone test cases through two different models, for example one closed and one open-weight model. The <a href="#/playground">Playground</a> does this side by side when you fill in <em>Compare with</em>. Write down which gave better answers, how long each took, and what each cost.',
      ph:'Case, model A result, model B result, time, cost, verdict…',
      after:'A strong write-up is specific. For example: “Three ticket batches. Model A found the main theme in all three; model B missed the smallest theme twice. A took about 4 seconds per batch, B about 2. A cost about $0.012 per batch, B about $0.002.” Then the verdict: “For the weekly report, A is worth six times the cost, because a missed theme is the failure users fear most. For a real-time alert, speed matters more, so test B on the alert cases.” Three cases is enough to learn the method. The Build it task asks for ten.'}],

    ['h','What you have learned'],
    ['p','Let us pull the chapter together. Predictive AI gives a label or a number. Generative AI makes new content. An LLM reads tokens inside a context window (its desk). Attention is how it decides which tokens matter to each other.'],
    ['p','A model is trained in three stages, and training changes it for everyone. Inference only uses it, and a prompt shapes just one answer. When a model falls short, try prompting first. Then RAG for missing facts. Use fine-tuning only for habits.'],
    ['p','Next, you will leave the map and start the hands-on part. You will run your first small experiments in the browser, on tokens, cost and temperature (how adventurous the model is with its next word).']
  ]
}
];

/* Track C — AI project and delivery (audit plan, Phase 4). Optional, and
   woven into the route next to the core chapters it builds on. These are
   the first four of eight (C1–C4); C5–C8 follow in the second batch.
   Every line has its Hinglish in src/data/hing-rw-zz-p4-trackc.js. */
window.PART8 = [
 {
  "id": "c1",
  "num": "C1",
  "part": 8,
  "curriculumTier": "selective",
  "phase": 6,
  "prerequisites": [
   "ch17",
   "ch18"
  ],
  "nextUnits": [
   "c2"
  ],
  "minutes": 35,
  "labs": [],
  "title": "The AI project lifecycle: phases, gates and who owns what",
  "concept": "An AI project is not a normal software project with a model added. Its data can be wrong, its answers vary, and it keeps changing after launch. You will learn the phases that two well-known methods use. You will set gates that stop a project before it wastes months. And you will write down who owns each AI job, including the one at 2 a.m.",
  "needs": [
   [
    "A system card says what the system is for and what it gets wrong",
    "You wrote one in Chapter 17.",
    17
   ],
   [
    "An AI spec has acceptance criteria you can measure",
    "Chapter 18 gave you one.",
    18
   ]
  ],
  "takeaway": [
   "Name the phases of an AI project, and say what is different from a normal software project.",
   "Set data gates that stop a project early when the data is not good enough.",
   "Write an AI RACI: who is responsible, accountable, consulted and informed for each AI job.",
   "Say when a project must go to a responsible-AI review board."
  ],
  "story": [
   [
    "c",
    "Before you start",
    "This chapter is part of Track C, AI project and delivery. It is optional. It has no code. Keep your Chapter 17 system card and your Chapter 18 spec open, because you will add to both."
   ],
   [
    "p",
    "So far you have built an AI product. Track C is about delivering one: on time, safely, and inside an organisation that already has its own systems and rules. The course has two halves, the product and the project. This is the project half."
   ],
   [
    "h",
    "Why an AI project is different"
   ],
   [
    "p",
    "Think of building a road and running a bus service. A road is finished when it is built. A bus service is never finished: buses age, routes change, and drivers need checking. A normal software feature is more like the road. An AI feature is more like the bus service."
   ],
   [
    "l",
    [
     "<strong>It depends on data.</strong> If the data is thin, wrong or not allowed, no amount of engineering saves the project.",
     "<strong>Its answers vary.</strong> So “done” is a score on a test set, not a feature that works once.",
     "<strong>It changes after launch.</strong> Providers retire models, users change, and quality drifts without anyone touching the code."
    ]
   ],
   [
    "key",
    "Plan an AI project as a loop that keeps running, not a line that ends at launch."
   ],
   [
    "h",
    "Two maps of the same journey"
   ],
   [
    "p",
    "Two methods are worth knowing by name. They describe the same journey in slightly different words, like two maps of one city."
   ],
   [
    "tb",
    [
     "PMI-CPMAI",
     "CRISP-ML(Q)",
     "The question at this phase"
    ],
    [
     [
      "Business Understanding",
      "Business and Data Understanding",
      "What problem, for whom, and what score would count as success?"
     ],
     [
      "Data Understanding",
      "(part of the first phase)",
      "Do we have the data, are we allowed to use it, and is it good enough?"
     ],
     [
      "Data Preparation",
      "Data Engineering",
      "Is the data cleaned, labelled and ready, with a golden dataset set aside?"
     ],
     [
      "Model Development",
      "Machine Learning Model Engineering",
      "Which model, prompt or pipeline, and how was it chosen?"
     ],
     [
      "Model Evaluation",
      "Quality Assurance for ML Models",
      "Does it pass the acceptance threshold on the golden dataset?"
     ],
     [
      "Model Operationalization",
      "Deployment, then Monitoring and Maintenance",
      "How does it run, who watches it, and when does it go back to an earlier phase?"
     ]
    ]
   ],
   [
    "p",
    "PMI-CPMAI is the Project Management Institute’s certification for managing AI projects. In June 2026, PMI also published <em>The Standard for Artificial Intelligence in Portfolio, Program, and Project Management</em>. CRISP-ML(Q) comes from a 2021 research paper. It adds one rule to every phase: name the risks to quality, then say how you will reduce them."
   ],
   [
    "p",
    "Both maps loop. Evaluation can send you back to the data. Monitoring can send you back to the start. That is normal, and the plan should expect it."
   ],
   [
    "h",
    "Gates that stop a project early"
   ],
   [
    "p",
    "A gate is a check between phases, like a ticket checker between platforms. Its job is to stop a project before it spends months on data that was never good enough. Three data gates matter most."
   ],
   [
    "n",
    [
     "<strong>Allowed.</strong> We may use this data for this purpose, and the data owner has said so in writing.",
     "<strong>Enough.</strong> There are enough real examples of each case, including the rare ones that matter most.",
     "<strong>Ready.</strong> A golden dataset is labelled by someone who knows the work, and set aside before any building starts."
    ]
   ],
   [
    "pred",
    {
     "id": "c1-gate",
     "short": true,
     "ph": "Go, or stop, and why",
     "ask": "A state department wants the tool to mask Aadhaar numbers in scanned forms. It can share 40 scanned forms, and only 3 of them have an Aadhaar number written by hand. Should the project pass the “enough” gate?",
     "reveal": "No, not yet. Three handwritten examples cannot tell you whether the tool works on handwriting, which is the hard case. Ask for more forms, or narrow the scope to typed forms for now and write that down as a non-goal. Passing the gate anyway just moves the failure to launch day.",
     "then": "A gate that never says no is not a gate. Write the number that would make it pass."
    }
   ],
   [
    "h",
    "Who owns what: the AI RACI"
   ],
   [
    "p",
    "A RACI is a table of jobs and people. For each job, one letter says what each person does. <strong>R</strong> is responsible: they do the work. <strong>A</strong> is accountable: they answer for it, and there is only one. <strong>C</strong> is consulted before. <strong>I</strong> is informed after."
   ],
   [
    "p",
    "An ordinary RACI misses the jobs that only AI projects have. These four cause the most trouble when nobody owns them."
   ],
   [
    "tb",
    [
     "AI job",
     "Usually accountable",
     "What goes wrong without an owner"
    ],
    [
     [
      "Curating the golden dataset",
      "Product Manager, with the domain expert responsible",
      "It goes stale, and the score stops meaning anything"
     ],
     [
      "Signing off the evaluation",
      "The domain expert who knows the work",
      "Engineers mark their own homework"
     ],
     [
      "Testing a prompt or model upgrade for regressions",
      "AI Engineer, with the Delivery Manager accountable",
      "A “small” change breaks what worked"
     ],
     [
      "Pulling the kill switch at 2 a.m.",
      "A named on-call person, agreed before launch",
      "Everyone waits for someone senior to wake up"
     ]
    ]
   ],
   [
    "key",
    "Every AI job needs exactly one accountable person, named before launch."
   ],
   [
    "h",
    "When to call the review board"
   ],
   [
    "p",
    "Many organisations have a responsible-AI review board: a small group from legal, data protection, security and the business, like a bridge inspector who signs before traffic flows. It costs time, so do not send everything. Send a project when any of these is true."
   ],
   [
    "l",
    [
     "It makes or shapes a decision about a person: a loan, a job, a benefit or a school place.",
     "It handles personal data in a new way, or children’s data at all.",
     "Its output reaches the public without a person checking it first.",
     "It moves to a new model, a new vendor or a new country for the data."
    ]
   ],
   [
    "try",
    {
     "id": "c1-raci",
     "mins": 8,
     "min": 60,
     "rows": 5,
     "task": "Fill in the four AI jobs for your own project. For each one, name the accountable person by role, and one person who is responsible.",
     "ph": "Golden dataset: A = … , R = … . Eval sign-off: A = … . Upgrade regressions: … . Kill switch: …",
     "after": "If one person is accountable for all four, the table is a wish, not a plan. If nobody is named for the kill switch, write that down as your biggest risk."
    }
   ],
   [
    "h",
    "Write the charter and the AI RACI for Bharat Privacy Guard"
   ],
   [
    "p",
    "A state department wants to add Bharat Privacy Guard to its citizen portal. Before anyone builds, it asks for a one-page project charter with data gates, and a RACI that names who owns each AI job."
   ],
   [
    "n",
    [
     "Write the goal as a score: what the tool must reach on the golden dataset before go-live.",
     "Write the three data gates, each with the number or document that makes it pass.",
     "Fill the RACI for the seven roles: Product Manager, Delivery Manager, AI Engineer, Data Engineer, Domain SME, Security and the Data Protection Officer.",
     "Say whether the project goes to the review board, and which trigger sends it."
    ]
   ],
   [
    "p",
    "You are done when you have:"
   ],
   [
    "l",
    [
     "A one-page charter with a goal score and three data gates.",
     "A RACI with exactly one accountable person for each AI job.",
     "A one-line review-board decision, with its trigger."
    ]
   ],
   [
    "c",
    "Build it",
    "Use the AI RACI & Review Board template on the Workbench. Short version for the route, about 20 minutes: steps 1, 3 and 4."
   ],
   [
    "h",
    "What you have learned"
   ],
   [
    "p",
    "An AI project loops: data, model, evaluation, operation, and back again. Gates stop it early when the data is not allowed, not enough or not ready. The AI RACI names one accountable person for the jobs only AI projects have. And the review board is for the projects that touch people’s lives or data in new ways."
   ],
   [
    "p",
    "Next, in C2, you plan work that may not work at all, and decide in advance when to stop it."
   ]
  ],
  "selfcheck": {
   "kind": "check",
   "pass": 0.8,
   "items": [
    {
     "q": "What makes an AI project different from a normal software project?",
     "opts": [
      "It needs no testing",
      "It is always faster to build",
      "It never needs a project manager",
      "It depends on data, its answers vary, and it keeps changing after launch"
     ],
     "a": 3,
     "why": "Plan it as a loop that keeps running, not a line that ends at launch.",
     "see": "Why an AI project is different"
    },
    {
     "q": "Which is a data gate?",
     "opts": [
      "“The demo looked good in the meeting.”",
      "“We have written permission to use this data for this purpose.”",
      "“The model is the newest one.”",
      "“The team worked hard.”"
     ],
     "a": 1,
     "why": "The three data gates are allowed, enough and ready.",
     "see": "Gates that stop a project early"
    },
    {
     "q": "In a RACI, how many people are accountable (A) for one job?",
     "opts": [
      "Exactly one",
      "Everyone on the team",
      "At least three",
      "None, if the job is small"
     ],
     "a": 0,
     "why": "One person answers for it. Many can do the work.",
     "see": "Who owns what: the AI RACI"
    },
    {
     "q": "Who should sign off the evaluation of an AI feature?",
     "opts": [
      "The engineer who built it",
      "The model vendor",
      "The domain expert who knows the work",
      "Whoever is free that day"
     ],
     "a": 2,
     "why": "Otherwise engineers mark their own homework.",
     "see": "Who owns what: the AI RACI"
    },
    {
     "q": "Which project should go to the responsible-AI review board?",
     "opts": [
      "A spell-checker for internal notes",
      "A tool that helps decide who gets a government benefit",
      "A new colour for the portal",
      "A faster laptop for the team"
     ],
     "a": 1,
     "why": "Decisions about people are a trigger for review.",
     "see": "When to call the review board"
    },
    {
     "q": "CRISP-ML(Q) adds which rule to every phase?",
     "opts": [
      "Finish each phase within one week",
      "Use the largest model available",
      "Skip evaluation if the data is clean",
      "Name the risks to quality, then say how you will reduce them"
     ],
     "a": 3,
     "why": "The Q stands for quality assurance at every step.",
     "see": "Two maps of the same journey"
    }
   ]
  }
 },
 {
  "id": "c2",
  "num": "C2",
  "part": 8,
  "curriculumTier": "selective",
  "phase": 6,
  "prerequisites": [
   "c1",
   "a7"
  ],
  "nextUnits": [
   "c3"
  ],
  "minutes": 30,
  "labs": [],
  "title": "Discovery spikes and kill criteria: planning work that may not work",
  "concept": "Some AI work cannot be estimated, because nobody knows yet whether it is possible. You will plan it as a spike: a short, time-boxed experiment with a question, a threshold and a rule for stopping. Then you will plan sprints that promise learning, not dates, and keep a log of what you stopped and why.",
  "needs": [
   [
    "A thin slice tests your biggest fear first",
    "Chapter A7 showed you how to cut one.",
    "A7"
   ],
   [
    "Data gates stop a project early",
    "You set three in C1.",
    "C1"
   ]
  ],
  "takeaway": [
   "Turn an open question into a spike card: the question, the time box, the threshold and the kill criterion.",
   "Estimate AI work as a range with a confidence, not a single date.",
   "Plan a sprint with room for experiments that may fail.",
   "Keep a kill-criterion log, so stopping counts as progress."
  ],
  "story": [
   [
    "c",
    "Before you start",
    "Track C, optional, no code. Bring one AI idea your team is unsure about: something that might not be possible with today’s models or data."
   ],
   [
    "p",
    "A manager asks, “How long will the handwriting feature take?” Nobody knows, because nobody knows yet if the model can read handwriting well enough. Any date you give is a guess dressed as a promise."
   ],
   [
    "h",
    "A spike: a short experiment with an end"
   ],
   [
    "p",
    "A spike is a short experiment that answers one question, like a doctor’s test before the operation. It has four parts, and all four are written before it starts."
   ],
   [
    "n",
    [
     "<strong>The question.</strong> One question, answered yes or no. “Can the model find handwritten Aadhaar numbers in our scans?”",
     "<strong>The time box.</strong> A fixed limit, such as five working days. When it ends, the spike ends.",
     "<strong>The threshold.</strong> The score that means yes. “At least 90% of the numbers found on 50 labelled scans.”",
     "<strong>The kill criterion.</strong> The result that means stop. “Below 70%, we drop handwriting from this release.”"
    ]
   ],
   [
    "key",
    "Write the threshold and the kill criterion before the spike starts. After it ends, everyone will want to move them."
   ],
   [
    "p",
    "Between 70% and 90% is a grey zone. Decide in advance what happens there too: one more time box, a smaller scope, or a person to check every case."
   ],
   [
    "pred",
    {
     "id": "c2-grey",
     "short": true,
     "ph": "What you decide",
     "ask": "Your spike ends at 82%, inside the grey zone you wrote down. The team says, “Just one more week and we will hit 90%.” What do you do?",
     "reveal": "Follow the rule you wrote for the grey zone. If it says one more time box, give exactly one, with the same threshold and kill criterion. If it says narrow the scope, ship typed forms and put handwriting on the later list. What you must not do is extend the spike week by week. That is how a five-day experiment becomes a three-month project nobody chose.",
     "then": "“One more week” is the most expensive sentence in AI delivery. Answer it with the rule, not with hope."
    }
   ],
   [
    "h",
    "Estimating work that may not work"
   ],
   [
    "p",
    "For ordinary work, a single estimate is fine. For AI work, give a range and a confidence, like a weather forecast. “Two to four weeks, 70% sure, if the spike passes. If it fails, zero weeks, because we stop.”"
   ],
   [
    "p",
    "This sounds less sure than a date, and it is. But it is honest, and it gives your manager a real choice: fund the spike, or not."
   ],
   [
    "h",
    "Sprints that promise learning"
   ],
   [
    "p",
    "In a sprint (a fixed block of work, often two weeks), mix two kinds of work. Delivery work has a known result. Experiment work has a known question. Promise the delivery work. For the experiments, promise only the answer."
   ],
   [
    "l",
    [
     "Keep about a fifth of the sprint for experiments, so one failed spike does not sink the whole sprint.",
     "Write the sprint goal as a decision you will be able to make at the end: “We will know whether handwriting is in or out.”",
     "At the review, show the score, not the effort."
    ]
   ],
   [
    "h",
    "The kill-criterion log"
   ],
   [
    "p",
    "Keep a short log of every idea you stopped: the question, the result, the date and what you learned. It turns a stopped idea into evidence, and it stops the same idea coming back every quarter."
   ],
   [
    "try",
    {
     "id": "c2-card",
     "mins": 8,
     "min": 60,
     "rows": 5,
     "task": "Write a spike card for the idea you brought: the question, the time box, the threshold, the kill criterion, and what happens in the grey zone.",
     "ph": "Question: … ? Time box: … days. Yes if ≥ … . Stop if < … . Grey zone: …",
     "after": "If your threshold has no number, the spike cannot end. If your kill criterion is “we will discuss”, it will never be used."
    }
   ],
   [
    "h",
    "Run a spike plan for handwritten Aadhaar numbers"
   ],
   [
    "p",
    "The department’s forms are partly handwritten. Before anyone promises a date, plan the spike that decides whether handwriting is in the first release."
   ],
   [
    "n",
    [
     "Write the spike card: question, time box, threshold, kill criterion and grey-zone rule.",
     "Say what labelled scans you need, and who labels them.",
     "Write the estimate for the feature as a range with a confidence, for both results of the spike.",
     "Add one line to your kill-criterion log, as if the spike had failed."
    ]
   ],
   [
    "p",
    "You are done when you have:"
   ],
   [
    "l",
    [
     "A spike card with numbers for the threshold and the kill criterion.",
     "An estimate as a range with a confidence.",
     "A first line in the kill-criterion log."
    ]
   ],
   [
    "c",
    "Build it",
    "Use the Spike card template on the Workbench. Short version for the route, about 20 minutes: steps 1, 2 and 4."
   ],
   [
    "h",
    "What you have learned"
   ],
   [
    "p",
    "When nobody knows if something is possible, run a spike: one question, a time box, a threshold and a kill criterion, all written first. Estimate with a range and a confidence. Promise learning for experiments and results for delivery work. And log what you stop, so stopping counts."
   ],
   [
    "p",
    "Next, in C3, the spike has passed. Now you connect the tool to systems that already exist, and roll it out without breaking them."
   ]
  ],
  "selfcheck": {
   "kind": "check",
   "pass": 0.8,
   "items": [
    {
     "q": "What are the four parts of a spike card?",
     "opts": [
      "A budget, a team, a logo and a launch date",
      "A model, a prompt, a server and a user",
      "A question, a time box, a threshold and a kill criterion",
      "A goal, a vision, a strategy and a plan"
     ],
     "a": 2,
     "why": "All four are written before the spike starts.",
     "see": "A spike: a short experiment with an end"
    },
    {
     "q": "When should the threshold and the kill criterion be written?",
     "opts": [
      "After the results are in",
      "Before the spike starts",
      "Only if the spike fails",
      "At the next quarterly review"
     ],
     "a": 1,
     "why": "After it ends, everyone will want to move them.",
     "see": "A spike: a short experiment with an end"
    },
    {
     "q": "Which estimate suits AI work that may not be possible?",
     "opts": [
      "“It will be done on 1 March.”",
      "“As soon as possible.”",
      "“We cannot say anything at all.”",
      "“Two to four weeks, 70% sure, if the spike passes; zero if it fails.”"
     ],
     "a": 3,
     "why": "A range with a confidence is honest, and gives a real choice.",
     "see": "Estimating work that may not work"
    },
    {
     "q": "A spike ends in the grey zone and the team asks for “one more week”. What should happen?",
     "opts": [
      "Extend it week by week until it passes",
      "Lower the threshold to 82%",
      "Follow the grey-zone rule written before the spike",
      "Ship it anyway"
     ],
     "a": 2,
     "why": "Extending week by week turns a spike into a project nobody chose.",
     "see": "A spike: a short experiment with an end"
    },
    {
     "q": "How should a sprint with AI experiments be planned?",
     "opts": [
      "Promise results for delivery work and only answers for experiments",
      "Promise every experiment will succeed",
      "Put only experiments in the sprint",
      "Never run experiments in a sprint"
     ],
     "a": 0,
     "why": "Keep about a fifth of the sprint for experiments.",
     "see": "Sprints that promise learning"
    },
    {
     "q": "Why keep a kill-criterion log?",
     "opts": [
      "To blame the team for failures",
      "Because auditors require one daily",
      "To hide what was stopped",
      "So stopped ideas become evidence and do not come back every quarter"
     ],
     "a": 3,
     "why": "Stopping counts as progress when it is written down.",
     "see": "The kill-criterion log"
    }
   ]
  }
 },
 {
  "id": "c3",
  "num": "C3",
  "part": 8,
  "curriculumTier": "selective",
  "phase": 6,
  "prerequisites": [
   "c2",
   "ch17o"
  ],
  "nextUnits": [
   "c4"
  ],
  "minutes": 40,
  "labs": [],
  "title": "Rollout and Day-2 operations: adding AI to systems that already exist",
  "concept": "Most AI work adds a new part to an old product. You will connect the tool to existing systems without breaking them. You will roll it out in safe steps: shadow mode, then a canary, with a rule-based fallback. And you will plan the work after launch, when models are retired, quality drifts and test sets go stale.",
  "needs": [
   [
    "Traces show what each request did",
    "Chapter 30 set up watching after launch.",
    30
   ],
   [
    "A spike decided the feature is possible",
    "You planned one in C2.",
    "C2"
   ]
  ],
  "takeaway": [
   "Connect an AI part to an existing system with a narrow, read-first interface.",
   "Plan a rollout in steps: shadow mode, a canary, then everyone, with a fallback at each step.",
   "Write a model-migration checklist for the day a provider retires your model.",
   "Schedule eval refreshes so silent drift shows up as a number."
  ],
  "story": [
   [
    "c",
    "Before you start",
    "Track C, optional, no code. Think of one real system your tool would have to plug into: a portal, a case database or a ticketing tool."
   ],
   [
    "p",
    "Building on empty land is called greenfield. Building next to old buildings that people still live in is called brownfield. Almost all AI work in a bank, a ministry or a large company is brownfield. The old system matters more than the new model."
   ],
   [
    "h",
    "Connecting to what already exists"
   ],
   [
    "p",
    "Old systems were not built for a part whose answers vary. So connect carefully, like adding a new pipe to old plumbing: small, with a valve you can close."
   ],
   [
    "l",
    [
     "<strong>Read before you write.</strong> Let the AI part read from the old system first. Let it write back only after it has proved itself.",
     "<strong>One narrow door.</strong> All calls go through one small interface you own, so you can switch the AI part off in one place.",
     "<strong>Respect the old limits.</strong> Old databases have slow hours and rate limits. Find them before launch, not during it."
    ]
   ],
   [
    "h",
    "Rolling out in safe steps"
   ],
   [
    "p",
    "Do not switch the AI part on for everyone at once. Move in steps, and at each step have a way back."
   ],
   [
    "n",
    [
     "<strong>Shadow mode.</strong> The AI part runs on real traffic, but nobody sees its answers. You log them and compare with what really happened, like a trainee driver who watches before driving.",
     "<strong>Canary.</strong> A small share of real users, such as 5%, see the AI part. You watch the numbers closely. If they drop, you switch back.",
     "<strong>Everyone.</strong> Only when the canary holds for long enough, set in advance, does everyone get it."
    ]
   ],
   [
    "p",
    "At every step, keep a rule-based fallback: the plain pattern rules from Chapter 4, or the old manual process. If the model is slow, down or wrong, the fallback answers instead. A tool that fails safe keeps the trust of the people who depend on it."
   ],
   [
    "key",
    "Never launch an AI part without a switch that turns it off and a fallback that takes over."
   ],
   [
    "pred",
    {
     "id": "c3-canary",
     "short": true,
     "ph": "Go on, or go back",
     "ask": "In the canary, 5% of portal users get AI masking. After two days, masking misses drop from 4% to 1%, but complaints that forms are “stuck” rise from 2 a day to 15. What do you do?",
     "reveal": "Go back to the fallback for the canary group, then find out why forms stick. The misses improved, but a guardrail number got much worse. The likely cause is latency or timeouts against the old system, not the model’s accuracy. Fix that, then run the canary again with the same thresholds.",
     "then": "A canary is judged on every number you wrote down, not only the one you hoped to improve."
    }
   ],
   [
    "h",
    "Day 2: the work after launch"
   ],
   [
    "p",
    "Launch is day 1. Everything after is day 2, and it lasts for years. Three things will happen whether you plan for them or not."
   ],
   [
    "l",
    [
     "<strong>Your model will be retired.</strong> Providers give notice, often a few months, and then the old model stops answering. Treat the new model as a new release: run the golden dataset and the regression suite before you switch.",
     "<strong>Quality will drift without a sound.</strong> Users start sending new kinds of text, and the score slowly drops. Nobody notices unless something measures it.",
     "<strong>Your test set will go stale.</strong> Refresh it on a schedule, such as every month, with new real cases from the traces."
    ]
   ],
   [
    "try",
    {
     "id": "c3-migrate",
     "mins": 8,
     "min": 60,
     "rows": 5,
     "task": "Your provider says your model will be retired in 90 days. Write the first five lines of your model-migration checklist.",
     "ph": "1. Pick the candidate model … 2. Run the golden dataset … 3. …",
     "after": "Good checklists include the prompt, not only the model: a new model often needs the prompt adjusted. They also set a date to switch that leaves time for a canary, well before the old model stops."
    }
   ],
   [
    "h",
    "Plan the rollout of Bharat Privacy Guard into the citizen portal"
   ],
   [
    "p",
    "The department’s citizen portal already takes free-text complaints. Plan how the guard joins it without breaking it, and what happens on day 2."
   ],
   [
    "n",
    [
     "Draw the one narrow door: where the portal calls the guard, and where the switch sits.",
     "Write the rollout steps, with the numbers that let you move on and the numbers that send you back.",
     "Name the fallback for each step, and who switches to it.",
     "Write the model-migration checklist and the monthly eval refresh."
    ]
   ],
   [
    "p",
    "You are done when you have:"
   ],
   [
    "l",
    [
     "A rollout plan with numbers for moving on and going back.",
     "A named fallback and a named person for the switch.",
     "A model-migration checklist and an eval refresh date."
    ]
   ],
   [
    "c",
    "Build it",
    "Use the Integration and rollout plan template on the Workbench. Short version for the route, about 25 minutes: steps 1, 2 and 4."
   ],
   [
    "h",
    "What you have learned"
   ],
   [
    "p",
    "Most AI work is brownfield: a new part in an old system. Connect through one narrow door, read before you write, and respect the old limits. Roll out through shadow mode and a canary, always with a switch and a fallback. Then plan day 2: model retirements, silent drift and test-set refreshes."
   ],
   [
    "p",
    "Next, in C4, a question that should come even earlier: is a language model the right tool at all?"
   ]
  ],
  "selfcheck": {
   "kind": "check",
   "pass": 0.8,
   "items": [
    {
     "q": "What is a brownfield project?",
     "opts": [
      "A project on empty land with no old systems",
      "A project about farming",
      "Adding a new part to a system that already exists and is in use",
      "A project with no deadline"
     ],
     "a": 2,
     "why": "Almost all AI work in banks, ministries and large companies is brownfield.",
     "see": "Connecting to what already exists"
    },
    {
     "q": "What is shadow mode?",
     "opts": [
      "The AI part runs on real traffic, but nobody sees its answers yet",
      "The AI part runs only at night",
      "Users see the answers in grey",
      "The old system is switched off"
     ],
     "a": 0,
     "why": "You log its answers and compare them with what really happened.",
     "see": "Rolling out in safe steps"
    },
    {
     "q": "In a canary, masking misses fall but “stuck form” complaints jump. What do you do?",
     "opts": [
      "Roll out to everyone, since misses fell",
      "Ignore complaints during a canary",
      "Switch off the old system",
      "Go back to the fallback for that group and find the cause"
     ],
     "a": 3,
     "why": "A canary is judged on every number, not only the one you hoped to improve.",
     "see": "Rolling out in safe steps"
    },
    {
     "q": "What must every AI rollout step have?",
     "opts": [
      "A new model",
      "A switch to turn it off and a fallback that takes over",
      "A press release",
      "A bigger server"
     ],
     "a": 1,
     "why": "A tool that fails safe keeps people’s trust.",
     "see": "Rolling out in safe steps"
    },
    {
     "q": "Your provider will retire your model in 90 days. What do you do first?",
     "opts": [
      "Treat the new model as a new release: run the golden dataset and the regression suite",
      "Switch on the last day",
      "Assume the new model is better",
      "Ask users to report problems"
     ],
     "a": 0,
     "why": "A new model often needs the prompt adjusted too.",
     "see": "Day 2: the work after launch"
    },
    {
     "q": "How do you catch silent drift?",
     "opts": [
      "Wait for complaints",
      "Change models every week",
      "Refresh and re-run the evals on a schedule, with new real cases",
      "Turn off logging"
     ],
     "a": 2,
     "why": "Drift shows up only when something measures it.",
     "see": "Day 2: the work after launch"
    }
   ]
  }
 },
 {
  "id": "c4",
  "num": "C4",
  "part": 8,
  "curriculumTier": "selective",
  "phase": 6,
  "prerequisites": [
   "ch4",
   "ch19"
  ],
  "nextUnits": [],
  "minutes": 30,
  "labs": [],
  "title": "Is an LLM the right tool? Rules, classical ML or a language model",
  "concept": "A language model is not always the best tool. Sometimes plain rules or a small classical model are cheaper, faster and easier to audit. You will compare the three on cost, speed, auditability and the data they need, choose between fine-tuning and RAG, and record the choice so it can be checked later.",
  "needs": [
   [
    "Pattern rules can beat a model on some cases",
    "You scored them by hand in Chapter 4.",
    4
   ],
   [
    "Fine-tuning teaches habits, not facts",
    "Chapter 19 showed when to change the model.",
    19
   ]
  ],
  "takeaway": [
   "Compare rules, classical ML and an LLM on cost, speed, auditability and data needs.",
   "Use a mix: rules for what is certain, a model for what is not.",
   "Choose between RAG and fine-tuning by what is missing: facts or habits.",
   "Write a tool-choice decision record that names what would change the decision."
  ],
  "story": [
   [
    "c",
    "Before you start",
    "Track C, optional, no code. Keep your Chapter 4 pattern rules and their scores nearby."
   ],
   [
    "p",
    "When a team has a new hammer, everything looks like a nail. Language models are a very good hammer. But a delivery manager is paid to pick the right tool, and sometimes the right tool is twenty lines of rules."
   ],
   [
    "h",
    "Three kinds of tool"
   ],
   [
    "p",
    "An Aadhaar number is a good example. It has a fixed shape: twelve digits, and the last digit is a checksum (a check digit worked out from the others). A rule can test that exactly, for free, in a millionth of a second, and explain every answer. A model adds nothing there."
   ],
   [
    "p",
    "But “my wife’s number ends in 4321” is a different problem. No pattern catches it reliably. That is where a model earns its cost."
   ],
   [
    "key",
    "Use rules for what is certain and a model for what is not. The best systems use both, rules first."
   ],
   [
    "pred",
    {
     "id": "c4-tool",
     "short": true,
     "ph": "Which tool, and why",
     "ask": "A ministry needs every grievance sorted into one of 12 fixed departments. It has 200,000 past grievances, each already labelled with the right department. It wants each decision explained in an audit. Which tool would you try first?",
     "reveal": "Try classical ML first. There are many labelled examples and a fixed set of groups, which is exactly what it is good at. It is cheap at this volume and easier to explain than a language model. Send only the cases it is unsure about to a model or a person. Measure all three options on the same golden dataset before you decide.",
     "then": "“We used an LLM” is not a reason. “It beat the cheaper option by this much on our cases” is."
    }
   ],
   [
    "h",
    "RAG or fine-tuning"
   ],
   [
    "p",
    "If you do use a model and it falls short, ask what is missing. If it lacks facts, such as your department’s rules, give them with each question: that is RAG. If it has the facts but the wrong habits, such as the wrong format or tone every time, fine-tuning may help. Fine-tuning teaches habits, not facts."
   ],
   [
    "h",
    "Write the decision down"
   ],
   [
    "p",
    "A tool-choice decision record is a short note: the job, the options you measured, the numbers, the choice, and what would make you choose again. The last line matters most. “If the model’s price halves” or “if the error rate on rules passes 5%” turns a decision into one you can check later."
   ],
   [
    "try",
    {
     "id": "c4-record",
     "mins": 6,
     "min": 50,
     "rows": 4,
     "task": "Pick one job in your project. Write which of the three tools you would use, the number that decided it, and what would make you change your mind.",
     "ph": "Job: … Tool: … Because: … on … cases. Revisit if: …",
     "after": "If you could not name a number, you have not measured yet. Run the cheapest option on your golden dataset first: it sets the bar the others must beat."
    }
   ],
   [
    "h",
    "Record the tool choice for each part of Bharat Privacy Guard"
   ],
   [
    "p",
    "The guard has several jobs: finding IDs with a fixed shape, finding names and places, and judging unclear context. Choose the right tool for each, with numbers."
   ],
   [
    "n",
    [
     "List the guard’s jobs, and for each one say whether its input has a fixed shape.",
     "For one job, measure the cheapest option on your golden dataset, then the next one.",
     "Write one decision record per job, each with its revisit line."
    ]
   ],
   [
    "p",
    "You are done when you have:"
   ],
   [
    "l",
    [
     "A list of jobs, each with its chosen tool.",
     "At least one measured comparison on the golden dataset.",
     "Decision records that name what would change the choice."
    ]
   ],
   [
    "c",
    "Build it",
    "Use the Tool-choice decision record template on the Workbench. Short version for the route, about 20 minutes: steps 1 and 3."
   ],
   [
    "h",
    "What you have learned"
   ],
   [
    "p",
    "Rules are cheap, fast and explainable, and right for fixed formats. Classical ML is right for sorting into known groups when you have many labelled examples. A language model is right for messy language, at a higher cost. Use them together, rules first. Choose RAG for missing facts and fine-tuning for wrong habits. And write down what would change your choice."
   ],
   [
    "p",
    "That completes the first half of Track C. The second half covers buying AI, human review and incidents, delivering in government, and a delivery plan that brings it all together."
   ]
  ],
  "selfcheck": {
   "kind": "check",
   "pass": 0.8,
   "items": [
    {
     "q": "Which tool fits checking that a 12-digit Aadhaar number is valid?",
     "opts": [
      "A large language model",
      "A rule, with the checksum test",
      "Fine-tuning a model on Aadhaar numbers",
      "A human reading every one"
     ],
     "a": 1,
     "why": "A fixed shape is what rules do best: free, instant and explainable.",
     "see": "Three kinds of tool"
    },
    {
     "q": "200,000 labelled grievances, 12 fixed departments, every decision audited. What do you try first?",
     "opts": [
      "Classical ML",
      "A language model for every grievance",
      "Regex rules for every department",
      "Fine-tuning the largest model"
     ],
     "a": 0,
     "why": "Many labelled examples and fixed groups are what classical ML is good at.",
     "see": "Three kinds of tool"
    },
    {
     "q": "Which is hardest to explain answer by answer in an audit?",
     "opts": [
      "A regex rule",
      "A list of fixed codes",
      "A language model",
      "A date format check"
     ],
     "a": 2,
     "why": "Rules explain themselves line by line; a language model does not.",
     "see": "Three kinds of tool"
    },
    {
     "q": "The model does not know your department’s rules. What do you use?",
     "opts": [
      "Fine-tuning",
      "RAG: give it the rules with each question",
      "A higher temperature",
      "A longer system prompt with no rules"
     ],
     "a": 1,
     "why": "Missing facts need RAG; fine-tuning teaches habits.",
     "see": "RAG or fine-tuning"
    },
    {
     "q": "Which line makes a tool-choice record checkable later?",
     "opts": [
      "“We chose the best tool.”",
      "“Everyone agreed.”",
      "“This is the modern approach.”",
      "“Revisit if the error rate on rules passes 5%.”"
     ],
     "a": 3,
     "why": "A number or an event turns a decision into one you can check.",
     "see": "Write the decision down"
    },
    {
     "q": "What do the best systems usually do?",
     "opts": [
      "Use only a language model",
      "Use only rules",
      "Use rules first for what is certain, and a model for the rest",
      "Pick a tool at random"
     ],
     "a": 2,
     "why": "A mix gets the cost of rules and the reach of a model.",
     "see": "Three kinds of tool"
    }
   ]
  }
 }
];

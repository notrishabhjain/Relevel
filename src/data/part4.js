/* Part IV — The decisions that stay yours (Chapters 19–20)

   Parts I to III build a system and the instruments to judge it. These two
   chapters cover the two decisions that survive every rebuild of it: what you
   change when it is not good enough, and what the user sees when it is wrong.
   Neither one is an engineering decision. */

window.PART4 = [
{
  id:'ch185', num:18.5, part:4, minutes:25, labs:[],
  title:'Build or buy: comparing a vendor with your own build',
  concept:'Build-or-buy decisions often turn on price and demo quality, which matter less than they seem. You will test a vendor with your own answer key, cost both options over two years, and write down in advance what would change your decision.',
  needs:[
    ['A spec describes a measured range','So you can define “good enough” before you compare options.',18],
    ['You can measure retrieval yourself','So you can test a vendor instead of trusting a demo.',6]
  ],
  takeaway:[
    'Run the same evaluation on a vendor and on your own build, and compare like with like.',
    'Name what you are really buying, which is usually not the model.',
    'Write down what would make you change the decision later, before you make it.'
  ],
  story:[
    ['c','Before you start','No new setup. Bring the acceptance criteria from Chapter 18 and the answer key from Chapter 6.'],
    ['p','At some point someone will propose buying a product that does what you have learned to build. The discussion usually focuses on price and the demo. Neither decides the question.'],
    ['key','You are rarely buying the model; most vendors use the same models. You are buying the connectors, the permissions, the audit trail, the support contract, and someone else handling incidents.'],
    ['h','Test the vendor with your answer key'],
    ['do','Run your answer key against the vendor',[
      ['p','Ask for a trial. Run your ten real questions through it and grade the answers against your key. Use your questions, not the vendor’s demo questions.'],
      ['x','The result is usually worse than the demo suggested and better than you feared. The unanswerable question and the second-language question usually show the biggest gap, because vendors rarely optimise for them.'],
      ['c','Tip','You are the only person in the negotiation who can run this test, because you have the answer key.']
    ]],
    ['h','The questions that decide it'],
    [
      'tb',
      ['Question','Why it matters'],
      [
        ['Is this a core capability or a supporting one?','If your product exists to do this, you need to own it. If it is supporting plumbing, buying is usually right.'],
        ['How often will it need to change?','Something you tune weekly against your own data is hard to buy. Something stable is expensive to build.'],
        ['Who handles incidents at 2am?','A real cost that is often left out, and often larger than the licence.'],
        ['What happens if the vendor is acquired or shuts down?','Ask what you would need in order to leave, and how long it would take. If nobody can answer, treat that as a risk.']
      ]
    ],
    ['do','Cost both options over two years',[
      ['p','Write the two-year cost of each option. For building, include the Chapter 15 costs plus what people usually leave out: evaluation, the person maintaining it, and rerunning the migration tests every time the underlying model changes.'],
      ['x','The build cost is usually two to four times the first estimate. The buy option often has a price increase at the next tier that nobody has read. Find both before you decide.'],
      ['p','Then add the time until each option reaches a user. A build that is cheaper over two years but arrives six months later can still be the wrong choice.']
    ]],
    ['h','Decide what would change your mind'],
    [
      'try',
      {id:'ch185-flip',
       mins:5,
       min:50,
       rows:3,
       task:'Write down what would make you change your mind, in both directions. What evidence would turn a build recommendation into a buy, and what would turn a buy into a build?',
       ph:'I would switch to buying if … . I would switch to building if … .',
       after:'Writing this before deciding keeps the decision open to evidence. Common reasons to switch to buying: the maintenance falls on one person, or the capability turns out to be a commodity. Common reasons to switch to building: the vendor’s roadmap moves away from your needs, the price rises at the next tier, or the “plumbing” turns out to be why customers choose you. Put a date on when you will review it.'}
    ],
    ['c','Tip','A common good answer is a mix: buy the plumbing and build the part that makes your product different. For example, use a vendor’s connectors and permissions, but own your retrieval and your evaluation.']
  ],
  capstone:{title:'A build-or-buy recommendation with a review date',
   brief:'Make a real build-or-buy recommendation using evidence you gathered, including the conditions under which it stops being right.',
   steps:['State the capability in one line, and whether it is core or supporting for your product.','Run your answer key against at least one vendor trial, and record its results next to your own build’s.','Cost both over two years, including evaluation, maintenance and incident handling.','Add the time until each reaches users. Say which matters more here and why.','For the buy option, write what you would need in order to leave, and how long it would take.','Write the two triggers that would reverse the decision, and the date you will review them.'],
   done:['You measured both options against the same answer key.','The build cost includes maintenance and evaluation, not just tokens.','The recommendation names what would make it wrong, with a review date.']}
},
{

  id:'ch19', num:19, part:4, minutes:30, labs:['costmodel'],
  title:'Fine-tuning or not: choosing what to change',
  concept:'When a model is not good enough, you can change the instructions, the evidence, the training or the model. You will sort real failures into four kinds, match each kind to its fix, and cost a fine-tuning proposal honestly.',
  needs:[
    ['A list of your own failures, with counts','You cannot choose a fix without knowing what is wrong and how often.',14],
    ['A test set you trust','Without one, you cannot see the effect of any change in this chapter.',6]
  ],
  takeaway:[
    'Name the four things you can change, and what each one actually fixes.',
    'Explain why fine-tuning is the wrong tool for “it does not know our new policy”.',
    'Say what must exist before the fine-tuning question can be answered.'
  ],
  red:['Reaching for fine-tuning to fix a knowledge gap','Choosing a fix before naming the failure'],
  capstone:{title:'Answer a fine-tuning proposal with evidence',
   brief:'Someone will propose fine-tuning, and it will sound like the serious option. Find out which kinds of failure they actually have, and cost the proposal honestly, including the parts that are usually left off the slide.',
   steps:['Collect twenty real failures from something you run, and sort them into the four kinds.','Count them. The counts often settle the question before any technical discussion.','For the largest group, name the cheapest change that would address it, and explain why it is cheaper.','Cost the fine-tuning proposal properly: preparing data, training, evaluating, and repeating it every time the base model changes.','Try a smaller or cheaper model with better retrieval, and measure whether quality actually drops.','Write a one-page recommendation, using the failure counts as the main argument.'],
   done:['You sorted real failures into the four kinds, with counts.','The cost of fine-tuning includes the recurring cost, not just the first run.','You can say what evidence would change your recommendation.']},
  story:[
    ['c','Before you start','No notebook for this chapter. Open your failure taxonomy from Chapter 14.5, or collect ten real outputs from an AI feature you use every day.'],
    ['p','At some point, usually in a roadmap review, someone will ask: <em>should we fine-tune?</em> It is usually asked before anyone has said what is wrong. Saying yes commits a quarter of work. Saying no can sound unambitious. The right answer starts with a diagnosis.'],
    ['h','Four things you can change'],
    ['p','You can change <strong>the instructions</strong>, <strong>the evidence you give the model</strong>, <strong>the model’s training on your own examples</strong> (fine-tuning), or <strong>which model you use</strong>. Try them in that order.'],
    [
      'pred',
      {id:'ch19-lever',
       rows:3,
       ph:'Which one, and why',
       ask:'Predict: your assistant confidently says the refund window is 30 days. The correct figure, published last month, is 45. Which of the four changes fixes it, and which will a meeting room usually suggest?',
       reveal:'Better evidence. The system does not have the current policy, so it produces a plausible number from its training, as Chapter 2 described. A meeting will often suggest fine-tuning, because “teach the model our policies” sounds right. But a fine-tuned model needs retraining every time the number changes, and it still cannot show the user where 45 came from.',
       then:'This is one of the most common misdiagnoses in the field, and it is expensive because the wrong answer sounds reasonable.'}
    ],
    [
      'tb',
      ['What you change','What it really fixes','What it cannot fix','Cost to try, and to undo'],
      [
        ['Instructions','Format, tone, when to refuse, how the task is framed','Missing knowledge; genuine reasoning limits','Minutes. Undone instantly'],
        ['Evidence','Missing, changing or private knowledge; citations','Behaviour and format problems','Days. Undone by rebuilding the index'],
        ['Training on examples','Consistent shape and register, cheaply; a small model doing one job well','Facts that change; bad retrieval','Weeks, plus upkeep forever. Not undone — retrained'],
        ['A different model','Reasoning depth, speed, cost per query','Bad evidence. A better model reasons better over the wrong document','Hours, but it reopens every measurement you have']
      ]
    ],
    ['q','I138','I139'],
    ['h','Diagnose the kind of failure'],
    ['p','So ask “what kind of failure is this?” before you ask “which fix?”. There are four kinds, and each points to its own fix:'],
    [
      'l',
      ['<strong>It does not know.</strong> The answer is missing, out of date or invented. → Improve the evidence, and version your documents (Chapter 12).','<strong>It knows, but behaves wrongly.</strong> The content is right but the format, tone or rule-following is wrong. → Improve the instructions first, then require a format (Chapter 8), and fine-tune only if those stop helping.','<strong>It cannot work it out.</strong> Several steps of logic, dependent calculations or real ambiguity. → Use reasoning or a stronger model (Chapter 11).','<strong>It is right but too expensive.</strong> Too slow or too costly at your volume. → Use a smaller model, or a cheap-first cascade (Chapter 15).']
    ],
    ['do','Sort real failures into the four kinds',[
      ['p','Next to each failure, write one letter: <strong>K</strong> (does not know), <strong>B</strong> (behaves wrongly), <strong>R</strong> (cannot work it out) or <strong>E</strong> (too expensive). Choose a single letter even when it is hard; the hard ones teach you the most.'],
      ['x','The result is usually uneven. Most real failure lists are dominated by K and B. That is why better retrieval and prompting produce most of the improvement in most products, and why fine-tuning proposals often fail to deliver.']
    ]],
    ['key','Fine-tuning teaches behaviour, not facts. If the complaint is “it does not know our policy”, fine-tuning is the wrong tool.'],
    ['q','I140'],
    ['p','This diagnosis needs a named failure with a count behind it: your Chapter 14.5 list. Without one, the discussion becomes a contest of opinions, and the most senior opinion usually wins.'],
    [
      'try',
      {id:'ch19-diagnose',
       mins:6,
       min:60,
       rows:5,
       task:'Diagnose a real failure you have seen in an AI feature, yours or one you use. Write what the user saw, which of the four kinds it is, and the fix. Then write the one measurement that would show you chose correctly.',
       ph:'the user saw … kind of failure … the fix … I would know I was right if …',
       after:'Classifying is the hard part, because failures often look alike. “It gave a confident wrong figure” could be any of the four until you check what was retrieved. If the right passage was retrieved and misread, it is behaviour or reasoning. If the wrong passage was retrieved, only better retrieval helps. If the right passage is not in the documents at all, the fix comes before anything in this course. The measurement matters too: “the right passage is retrieved 9 times in 10 instead of 6” can be checked; “it feels better” cannot.'}
    ],
    ['h','What fine-tuning really costs'],
    ['p','Fine-tuning does provide real benefits. It gives <strong>consistency</strong>: the same structure and tone across thousands of outputs, more reliably than instructions. It lets a <strong>small model do a narrow job</strong> about as well as a large one, which saves a lot of money. And it teaches conventions that are hard to describe but easy to show, such as house style.'],
    ['p','It also has costs that proposals leave out. Someone must create the training examples and <em>keep them up to date</em>. You need a test set in advance, or you cannot tell whether it helped. You must retrain every time the base model is retired, as in Chapter 18. And your improvement now lives inside one provider’s system instead of in your prompt and your index.'],
    ['do','Cost a fine-tuning proposal',[
      ['p','Take the most likely fine-tuning candidate from your list and write the full cost, not just the training bill. How many labelled examples? Who writes them? Who maintains them when the product changes? What test proves it worked? And what happens to all of it when the base model is retired in eighteen months?'],
      ['x','The total is several times the number on the vendor’s pricing page. You also get a list of owners. A fine-tuning proposal with no named owner for the training data will decay.']
    ]],
    ['q','I141'],
    ['h','Try a smaller model'],
    ['p','The option teams test least is often the one with the biggest effect: <strong>going smaller</strong>. A cheaper, faster model, sometimes trained to imitate a larger one on your task, often decides the economics of a high-volume feature. Narrow, repetitive, high-volume, time-sensitive tasks are where small models do well.'],
    ['do','Estimate the saving from a smaller model',[
      ['p','Pick the narrowest, highest-volume task in your product, such as routing, classification, extraction or a short summary. Estimate its share of total query volume. Then use the cost model below to work out what it would cost on a model one or two tiers cheaper.'],
      ['x','This is often the largest single saving available, in the least exciting part of the product. Most teams never test it.']
    ]],
    ['lab','costmodel'],
    ['q','I143'],
    ['c','Tip','Work in this order: instructions, then evidence, then fine-tuning, then a different model, measuring after each. The first two can be undone in hours, so ruling them out is cheap. Fine-tuning commits you to maintenance for as long as the feature exists.'],
    ['h','Summary'],
    ['key','You cannot see the effect of any of the four changes without a test set. A team with an answer key can settle “should we fine-tune?” in a week. A team without one cannot settle it at all.'],
    ['q','I142']
  ],
},
{

  id:'ch20', num:20, part:4, minutes:30, labs:[],
  title:'Designing for wrong answers: evidence, confidence and refusals',
  concept:'At 90% accuracy, one answer in ten is wrong. Whether the feature is usable depends on what the screen does about that one. You will audit a real product, design four interface states, time a correction and design the refusal.',
  needs:[
    ['A required quote makes checking cheap','A quote is more useful than a confidence number.',8],
    ['Users notice the slow responses','Not the average response time.',11],
    ['A kill switch is not a rollback','Rolling back code does not undo behaviour both versions share.',18]
  ],
  takeaway:[
    'Explain how a feature that is wrong one time in ten can still be trusted.',
    'Say what to do with a confidence score, and why displaying it as a number is usually wrong.',
    'Explain what must exist underneath a kill switch for it to be usable.'
  ],
  red:['An uncertain answer shown with a certain interface','Citations that do not open the passage','A feedback button that collects nothing usable'],
  capstone:{title:'Design the four states for a real feature',
   brief:'Many AI features use one interface for four different situations, so a confident wrong answer looks exactly like a confident right one. Design the states properly for a real feature, and time how long a correction takes.',
   steps:['Audit an AI feature you use every day. Note what it shows when it is confident, unsure, wrong and unable to answer.','Pick a feature you own or could own. Write the four states: what the user sees, and what they can do next, in each.','Design the “I cannot answer this” state as a real route to a person, not a dead end.','Decide what the interface shows when confidence is middling, so uncertainty is visible without being noisy.','Time the correction: from a user noticing a mistake to it being fixed. Count every step and hand-off.','Write down which of the four states your current design merges, and what that costs the user.'],
   done:['All four states are specified, including what the user can do in each.','The correction path is timed end to end, and the slowest step is identified.','You can name the state your product handles worst, and what you would change first.']},
  story:[
    ['c','Before you start','No code. Pick an AI feature you use every day, and one feature you own or could own.'],
    ['p','So far the course has focused on making the model right more often. This chapter is about the rest of the time. At 90% accuracy, one interaction in ten is wrong, and no amount of engineering removes that entirely. What the screen does in that case decides whether the feature is usable.'],
    ['p','This is a design decision, and it belongs to the product owner. An engineer can tell you a confidence score exists. The product owner decides what the user sees when it is low.'],
    ['key','Do not show an uncertain answer in a confident interface. Many AI features feel untrustworthy because they show a wrong answer exactly the way they show a right one, not because they are less accurate.'],
    ['p','There are four things to get right. A feature that does all four can be wrong one time in ten and still be trusted. One that does none will be distrusted even at 95% accuracy.'],
    ['h','1. Show the evidence'],
    ['p','A link that opens the actual source passage lets a user check a claim in seconds. That is why Chapter 8 required the model to quote its source. A citation that names a document but does not open it is worse than nothing: it looks checkable, but the user cannot check it, and cannot tell until it matters.'],
    ['q','I144'],
    ['do','Audit an AI feature you use every day',[
      ['p','Pick one, such as a search assistant, an email drafter or a coding assistant. Ask it something it will get wrong, at the edge of what it knows.'],
      ['p','Then answer four questions in writing. Could you check the claim, and how many seconds did it take? Did the interface show the wrong answer any differently from a right one? What could you do about it? And what happened to your correction?'],
      ['x','Most well-known products fail at least two of the four. Note which ones. Users will hold your feature to the same standard.']
    ]],
    ['h','2. Design for speed'],
    ['p','Chapter 11 treated slow responses as a cost. Here they are a design problem. Streaming works for prose, because a partly arrived paragraph is already useful. It does not work for everything. A number that appears and then changes as generation continues is worse than a spinner. The user has already read it and may have acted on it.'],
    ['q','I145'],
    ['h','3. Use confidence to choose behaviour'],
    [
      'pred',
      {id:'ch20-conf',
       short:true,
       ph:'What you would do with it',
       ask:'Predict: your model returns a confidence score with every answer. What should the interface do with it?',
       reveal:'Use it to decide what the product does, and do not display it as a number. A percentage next to an answer asks the user to judge something they cannot calibrate, and the model’s own confidence is often badly calibrated anyway. Used internally, it can change the behaviour: answer directly, show the evidence first, ask a clarifying question, or pass the case to a person.',
       then:'Turn confidence into interface choices: an editable field instead of a fixed one, a draft instead of a sent message, or a question instead of a guess.'}
    ],
    ['q','I146'],
    ['do','Write the four states',[
      ['p','For one feature you own, write what the user sees in four states: a confident answer, a low-confidence answer, a refusal, and the AI turned off. Write the actual screen content.'],
      ['x','The third and fourth states are the hard ones, and most specs leave them out. If you cannot write them, the product does not have them either; it just does whatever the code happens to do.']
    ]],
    ['h','4. Make correcting it easy'],
    ['p','When the system is wrong, what the user does next is your most valuable data, and most products throw it away. A thumbs-down records that something was wrong, but not what.'],
    ['p','A good correction path captures what the user expected <em>instead</em>, keeps the evidence the system used, and is faster than giving up and doing the task by hand. If correcting takes longer than the manual workaround, nobody corrects, and an empty feedback table looks like satisfaction.'],
    ['q','I147'],
    ['do','Time a correction',[
      ['p','Use a clock. How long does it take to correct a wrong output, compared with doing the task by hand from scratch? Do it three times.'],
      ['x','If correcting is slower, your feedback table will stay empty, and you may wrongly read that as satisfaction. This one measurement explains most “our users never give feedback” complaints.']
    ]],
    ['c','Example','Two products use the same model and the same retrieval. One logs a thumbs-down. The other logs the answer, the retrieved chunks and the question. It also asks one thing: “what did you expect instead?” Within two weeks, the second has a list of real failure types and a roadmap built from its own traffic. The first has a falling number and no idea why.'],
    [
      'try',
      {id:'ch20-correct',
       mins:6,
       min:60,
       rows:5,
       task:'Design the correction path for a feature you know. What does the user do when the output is wrong, what does that action record, and how long does it take compared with doing the task by hand? Then write the test case it would produce.',
       ph:'the user … we capture … it takes … versus … the test case would be …',
       after:'A good design makes correcting the fastest option. Let the user edit the output in place, and treat the edit as the feedback. They were going to fix it anyway, so it costs them nothing, and you learn the expected answer exactly. Record the question, the evidence, the output and the correction together. Without the evidence, you know the answer was wrong but not whether retrieval or generation caused it, which is the distinction Chapter 19 needs.'}
    ],
    ['h','Design the refusal'],
    ['p','Every system looks good when it works. Trust is built on the screen that says <em>I do not have that</em>, and many AI products design that screen last or not at all.'],
    ['key','A system that says “I cannot answer this” and offers a route to a person earns more trust than one that always produces something. Users judge a system partly by its refusals. A feature that never refuses teaches them that its confidence means nothing.'],
    ['q','I148'],
    ['h','What happens when the AI is off'],
    ['p','Finally, decide what the feature does when the AI is switched off. Chapter 18 separated a rollback from a kill switch. A kill switch is only usable if there is something underneath it: search without generated answers, a form without extraction, or a queue without routing. If turning the AI off leaves a blank screen, the switch just replaces one failure with another.'],
    ['q','I149']
  ],
},
{
  id:'ch205', num:20.5, part:4, minutes:25, labs:[],
  title:'Measuring business impact: designing a pilot',
  concept:'A system can be accurate and still change nothing for the business. You will find the slow part of the workflow, then design a pilot with a business metric, a comparison, a failure threshold and a time window.',
  needs:[
    ['You can measure the system','Recall, precision, judges and per-category scores.',14],
    ['The interface has four states','What the user sees decides whether quality reaches them.',20]
  ],
  takeaway:[
    'Design a pilot that could actually show the feature did not help.',
    'Name the one number the business cares about, and how the feature would move it.',
    'Explain why a system that measures well can still produce no business benefit.'
  ],
  story:[
    ['c','Before you start','No code. Bring a feature you have measured, yours or one from the course, and the name of whoever pays for it.'],
    ['p','So far the course has measured the system: whether retrieval is right, whether the judge can be trusted, whether the classifier is accurate per category. All of that is necessary. None of it answers the question that decides future funding: did it help the business?'],
    ['key','A system can be 94% accurate and change nothing, because nobody uses it, or because the step it speeds up was never the slow part.'],
    ['h','Find the slow part first'],
    ['do','Time the whole workflow',[
      ['p','Take the workflow your feature is part of and time it honestly from start to finish. Include every step, including time spent waiting for other people.'],
      ['x','The AI step is rarely the largest. Often the biggest block is waiting for a person, or a handover between two systems. Turning a four-minute step into a one-minute step inside a three-day process will not be noticed.'],
      ['key','This is the cheapest study in the course and the one most often skipped, because it can show that you should not build the feature.']
    ]],
    ['h','Four parts of a pilot'],
    ['p','If the step you are speeding up really is on the critical path, you can design a pilot. Treat a pilot as a test that states in advance what result would disappoint you, rather than as a small launch.'],
    [
      'n',
      ['<strong>The number.</strong> One measure the business already tracks, such as handling time, first-contact resolution, backlog age or error rate. Do not invent a new metric for the pilot.','<strong>The comparison.</strong> The same team before and after is weak evidence. Two comparable groups over the same period is much stronger, and usually possible.','<strong>The failure threshold.</strong> The change below which you will call it a failure, written down before you start.','<strong>The time window.</strong> Long enough for the novelty to wear off. The first two weeks with any new tool make it look better than it is.']
    ],
    ['do','Write the disappointing result in advance',[
      ['p','Before running anything, write the sentence you would have to say if the pilot showed no effect. Use the words you would say to the person who funded it.'],
      ['x','This shows two things. Whether you actually have a failure threshold; many pilots do not. And whether the pilot could ever produce that sentence, or whether every outcome would be reported as success.'],
      ['key','If a pilot cannot fail, it is really a launch.']
    ]],
    ['h','When the system works but the number does not move'],
    [
      'try',
      {id:'ch205-adopt',
       mins:5,
       min:50,
       rows:3,
       task:'Your pilot shows the system works well, but the business number does not move. Write the three explanations you would investigate first, in order.',
       ph:'1 … 2 … 3 …',
       after:'This order usually works best. First, are people using it? Low adoption is the most common cause and the easiest to check. Second, does the output reach the place where the decision is made, or is it in a separate tool someone has to remember to open? Third, was the step you sped up actually on the critical path? Only after these three should you question system quality, even though teams usually check it first because they know how to measure it.'}
    ],
    ['q','I102'],
    ['h','Summary'],
    ['p','The whole course repeats one idea at larger and larger scale: decide what counts as failure, then measure that specific thing, instead of looking at outputs and forming an impression. You have done it for a prompt, a retriever, a judge, a cost model and now a business case.'],
    ['key','The techniques will change as models change. The habit of defining failure first and then measuring it is what carries over.']
  ],
  capstone:{title:'Design a pilot that could fail',
   brief:'Design a pilot for a real feature, with a number the business already tracks, a comparison, a failure threshold and a time window. Then get someone senior to agree the threshold before it runs.',
   steps:['Time the whole workflow and mark where your feature fits. If it is not on the critical path, say so and stop here.','Choose the business number. It must already exist, and someone must already look at it.','Design the comparison: which two groups, over which period, and why they are comparable.','Write the failure threshold, the change below which you would call it a failure, and the time window before you judge.','Write the disappointing result in advance, in the words you would say to whoever funded it.','Get the person who funds it to agree the threshold in writing <em>before</em> the pilot runs.'],
   done:['The number is one the business was already tracking before the pilot.','The failure threshold is agreed in writing by the person who would be disappointed by it.','You can describe a result that would make you recommend switching the feature off.']}
}

];

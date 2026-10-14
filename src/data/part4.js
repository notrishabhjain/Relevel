/* Part IV — The decisions that stay yours (Chapters 19–20)

   Parts I to III build a system and the instruments to judge it. These two
   chapters cover the two decisions that survive every rebuild of it: what you
   change when it is not good enough, and what the user sees when it is wrong.
   Neither one is an engineering decision. */

window.PART4 = [
{
  id:'ch185', num:18.5, part:4, curriculumTier:'selective', phase:2, prerequisites:['ch18','ch6'], nextUnits:['ch20d','b1'], minutes:25, labs:[],
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
    ['p','In the last chapter you wrote a full requirements document and planned for the day a model is retired. Now imagine a colleague walks in and says, “There’s a product that already does this. Why are we building it?”'],
    ['p','That question will come up sooner or later. The discussion usually turns to price and to how good the demo looked. Neither one decides the matter.'],
    ['key','You are rarely buying the model, because most vendors use the same models. You are buying the connectors, the permissions, the audit trail, the support contract, and someone else handling incidents.'],
    ['h','Test the vendor with your answer key'],
    ['p','A demo is built to look good. To see what a vendor can really do, you need a test the vendor didn’t design. Luckily, you already have one.'],
    ['do','Run your answer key against the vendor',[
      ['p','Ask for a trial. Run your ten real questions through it and grade the answers against your key. Use your questions, not the vendor’s demo questions.'],
      ['x','The result is usually worse than the demo suggested and better than you feared. The unanswerable question and the second-language question usually show the biggest gap, because vendors rarely optimise for them.'],
      ['c','Tip','You are the only person in the negotiation who can run this test, because you have the answer key.']
    ]],
    ['h','The questions that decide it'],
    ['p','Once you’ve tested the vendor, four questions help you decide. The table gives each question and the reason it matters.'],
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
    ['p','Those questions are about the shape of the decision. Next, put numbers on it.'],
    ['do','Cost both options over two years',[
      ['p','Write the two-year cost of each option. For building, include the Chapter 15 costs plus what people usually leave out: evaluation, the person maintaining it, and rerunning the migration tests every time the underlying model changes.'],
      ['x','The build cost is usually two to four times the first estimate. The buy option often has a price increase at the next tier that nobody has read. Find both before you decide.'],
      ['p','Then add the time until each option reaches a user. A build that is cheaper over two years but arrives six months later can still be the wrong choice.']
    ]],
    ['h','Decide what would change your mind'],
    ['p','Decisions like this are rarely final. So before you make yours, decide what new facts would make you reverse it.'],
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
    ['c','Tip','A common good answer is a mix: buy the plumbing and build the part that makes your product different. For example, use a vendor’s connectors and permissions, but own your retrieval and your evaluation.'],
    ['p','To sum up: test the vendor on your own answer key, cost both options over two years, and write down what would change your mind. Next, you’ll look at a different choice, which is whether to fine-tune a model or change something else.']
  ],
  capstone:{
    title:'Recommend whether to build each part yourself or buy it',
    brief:'For each part of the tool there is usually a ready-made option to buy or borrow, and your own build to compare it with. In this chapter you learned to run the same test on both. You also learned to name what you are really buying, which is often not the model, and to write down what would change your mind before you decide. Now you do that for two parts of Bharat Privacy Guard.',
    where:'Mostly written. Use your answer key to test each option, in a notebook if the option has code, and write the recommendation in the notes box below.',
    steps:[
      'Choose two parts of the tool: the pattern checker and the name-and-place finder. For each part, write in one line what it must do and whether it is the heart of your product or a supporting piece.',
      'For the pattern checker, compare your own rules with an existing library such as Presidio’s recognisers. For the name-and-place finder, compare a ready-made multilingual model with one you would train or adapt yourself. Run each option on your answer key and put the results in one table: quality on English, Hindi and Hinglish, speed, cost and effort.',
      'Cost each option over two years, including testing, upkeep and the time to deal with incidents, not only the first build.',
      'For each bought option, write what you would need in order to leave it later, and how long that would take.',
      'Write what you are really buying. It is often updates, support and someone else carrying the responsibility, not the model itself.',
      'Write your recommendation for each part in two sentences. Add the two conditions that would reverse it and the date you will review it. Write these before you decide, not afterwards.'
    ],
    done:[
      'A table in which the options for each part were tested on the same answer key.',
      'A two-year cost for each option that includes upkeep and testing.',
      'A note on what it would take to leave each bought option.',
      'Two recommendations, each with its reversing conditions and a review date.'
    ]
  }
},
{

  id:'ch19', num:19, part:4, curriculumTier:'selective', phase:2, prerequisites:['ch14','ch6'], nextUnits:[], minutes:30, labs:['costmodel'],
  title:'Fine-tuning or not: choosing what to change',
  concept:'When a model is not good enough, you can change the instructions, the evidence, the training or the model. In this chapter you’ll sort real failures into four kinds, match each kind to its fix, and work out what a fine-tuning proposal would really cost.',
  needs:[
    ['A list of your own failures, with counts','You can’t choose a fix until you know what is going wrong, and how often.',14],
    ['A test set you trust','Without one, you can’t see what any change in this chapter actually did.',6]
  ],
  takeaway:[
    'Name the four things you can change, and what each one actually fixes.',
    'Explain why fine-tuning is the wrong tool for “it does not know our new policy”.',
    'Say what must exist before the fine-tuning question can be answered.'
  ],
  red:['Reaching for fine-tuning to fix a knowledge gap','Choosing a fix before naming the failure'],
  capstone:{
    title:'Answer a proposal to fine-tune a model, using evidence',
    brief:'Someone suggests that the name-and-place finder could be improved by training a small Indian-language model of your own. That is called fine-tuning, and it sounds like the serious option. In this chapter you learned the four things you can change in an AI system, what each one fixes, and why fine-tuning is the wrong tool for “it does not know our new policy”. Now you’ll decide, with evidence, whether the proposal is right.',
    where:'This task is written, with no code. Use the failures you collected in earlier chapters and the numbers you already measured. Write your answer in the notes box below.',
    steps:[
      'Collect twenty real failures from your tool. Take them from the list you made in Chapter 14.5.',
      'Sort the twenty into the four kinds from this chapter: the model did not know something, the instructions were unclear, the right information was not found, or the format was wrong.',
      'Count each kind. The counts often settle the question before any technical argument starts.',
      'For the biggest group, name the cheapest change that would fix it, and explain why it is cheaper than fine-tuning.',
      'Work out the real cost of the fine-tuning proposal. Include preparing the data, training, testing, and doing all of it again every time the base model changes.',
      'Write a one-page answer to whoever proposed it. Use the failure counts as your main argument, and say what evidence would change your mind.'
    ],
    done:[
      'Twenty real failures sorted into the four kinds, with a count for each.',
      'The cheapest alternative for the biggest group.',
      'A cost for fine-tuning that includes the cost of repeating it.',
      'A one-page answer, including what evidence would change your recommendation.'
    ]
  },
  story:[
    ['c','Before you start','You don’t need a notebook for this chapter. Open your failure taxonomy from Chapter 14.5, or collect ten real outputs from an AI feature you use every day.'],
    ['p','In the last chapter you compared buying from a vendor with building your own. Now a different question comes up, and sooner or later someone will ask it in a roadmap review: <em>should we fine-tune?</em>'],
    ['p','The question usually arrives before anyone has said what is actually wrong. Saying yes commits the team to a quarter of work. Saying no can sound unambitious. So the right answer starts with a diagnosis, and this chapter shows you how to make one.'],
    ['h','Four things you can change'],
    ['p','Suppose an AI feature isn’t good enough. What can you actually change? There are four things. You can change <strong>the instructions</strong>, or <strong>the evidence you give the model</strong>. You can change <strong>the model’s training on your own examples</strong>, which is called fine-tuning. Or you can change <strong>which model you use</strong>.'],
    ['p','Try them in that order. Let’s see why, with a failure you may well meet.'],
    [
      'pred',
      {id:'ch19-lever',
       rows:3,
       ph:'Which one, and why',
       ask:'Predict: your assistant confidently says the refund window is 30 days. The correct figure, published last month, is 45. Which of the four changes fixes it, and which will a meeting room usually suggest?',
       reveal:'Better evidence. The system does not have the current policy, so it produces a plausible number from its training, as Chapter 2 described. A meeting will often suggest fine-tuning, because “teach the model our policies” sounds right. But a fine-tuned model needs retraining every time the number changes, and it still cannot show the user where 45 came from.',
       then:'This is one of the most common misdiagnoses in the field. It is expensive because the wrong answer sounds so reasonable.'}
    ],
    ['p','The table below puts all four changes side by side. As you read it, look at the last two columns. They show what each change cannot fix, and how hard it is to try and to undo.'],
    [
      'tb',
      ['What you change','What it really fixes','What it cannot fix','Cost to try, and to undo'],
      [
        ['Instructions','Format, tone, when to refuse, and how the task is framed','Missing knowledge, and real limits in reasoning','Minutes to try, and undone instantly'],
        ['Evidence','Missing, changing or private knowledge, and citations','Problems with behaviour and format','Days to try, and undone by rebuilding the index'],
        ['Training on examples','A consistent shape and register, cheaply, and a small model doing one job well','Facts that change, and bad retrieval','Weeks to try, plus upkeep forever. It is not undone, only retrained'],
        ['A different model','Reasoning depth, speed, and cost per query','Bad evidence, because a better model just reasons better over the wrong document','Hours to try, but it reopens every measurement you have']
      ]
    ],
    ['q','I138','I139'],
    ['h','Diagnose the kind of failure'],
    ['p','Now you can see why the order matters. Before you ask “which fix?”, ask “what kind of failure is this?”. There are four kinds, and each one points to its own fix.'],
    [
      'l',
      ['<strong>It does not know.</strong> The answer is missing, out of date or invented. The fix is better evidence, and versions for your documents (Chapter 12).','<strong>It knows, but behaves wrongly.</strong> The content is right, but the format, tone or rule-following is wrong. Improve the instructions first, then require a format (Chapter 8). Fine-tune only if those stop helping.','<strong>It cannot work it out.</strong> The task needs several steps of logic, calculations that depend on each other, or real ambiguity. The fix is to use reasoning or a stronger model (Chapter 11).','<strong>It is right but too expensive.</strong> It is too slow or too costly at your volume. The fix is a smaller model, or a cheap-first cascade, which tries the cheap model before the costly one (Chapter 15).']
    ],
    ['p','The best way to learn this is to do it on real failures. So take your list and sort it.'],
    ['do','Sort real failures into the four kinds',[
      ['p','Next to each failure, write one letter: <strong>K</strong> (does not know), <strong>B</strong> (behaves wrongly), <strong>R</strong> (cannot work it out) or <strong>E</strong> (too expensive). Choose a single letter even when it is hard. The hard ones teach you the most.'],
      ['x','The result is usually uneven. Most real failure lists are dominated by K and B. That is why better retrieval and better prompting produce most of the improvement in most products, and why fine-tuning proposals often fail to deliver.']
    ]],
    ['key','Fine-tuning teaches behaviour, not facts. If the complaint is “it does not know our policy”, fine-tuning is the wrong tool.'],
    ['q','I140'],
    ['p','Notice what this diagnosis needs: a named failure with a count behind it. That is your Chapter 14.5 list. Without it, the discussion turns into a contest of opinions, and the most senior opinion usually wins.'],
    [
      'try',
      {id:'ch19-diagnose',
       mins:6,
       min:60,
       rows:5,
       task:'Diagnose a real failure you have seen in an AI feature, yours or one you use. Write what the user saw, which of the four kinds it is, and the fix. Then write the one measurement that would show you chose correctly.',
       ph:'the user saw … kind of failure … the fix … I would know I was right if …',
       after:'Classifying is the hard part, because failures often look alike. “It gave a confident wrong figure” could be any of the four until you check what was retrieved. If the right passage was retrieved and misread, it is behaviour or reasoning. If the wrong passage was retrieved, only better retrieval helps. If the right passage is not in the documents at all, the fix comes before anything else in this course. The measurement matters too. “The right passage is retrieved 9 times in 10 instead of 6” can be checked, but “it feels better” cannot.'}
    ],
    ['h','What fine-tuning really costs'],
    ['p','None of this means fine-tuning is a bad idea. It does give real benefits. First, it gives <strong>consistency</strong>: the same structure and tone across thousands of outputs, more reliably than instructions can.'],
    ['p','Second, it lets a <strong>small model do a narrow job</strong> about as well as a large one, which saves a lot of money. And third, it teaches conventions that are hard to describe but easy to show, such as house style.'],
    ['p','The catch is that proposals usually leave out the costs. Someone must create the training examples and <em>keep them up to date</em>. You need a test set in advance, or you can’t tell whether it helped. You must retrain every time the base model is retired, as in Chapter 18. And your improvement now lives inside one provider’s system, instead of in your prompt and your index.'],
    ['do','Cost a fine-tuning proposal',[
      ['p','Take the most likely fine-tuning candidate from your list and write down the full cost, not just the training bill. How many labelled examples will it need? Who writes them? Who maintains them when the product changes? What test proves it worked? And what happens to all of it when the base model is retired in eighteen months?'],
      ['x','The total is several times the number on the vendor’s pricing page. You also end up with a list of owners. A fine-tuning proposal with no named owner for the training data will slowly decay.']
    ]],
    ['q','I141'],
    ['h','Try a smaller model'],
    ['p','There is one more option, and teams test it least, even though it often has the biggest effect: <strong>going smaller</strong>. A cheaper, faster model can decide the economics of a high-volume feature. Sometimes it is even trained to imitate a larger model on your task.'],
    ['p','Small models do well on tasks that are narrow, repetitive, high in volume and sensitive to time. Let’s estimate what that could save you.'],
    ['do','Estimate the saving from a smaller model',[
      ['p','Pick the narrowest, highest-volume task in your product, such as routing, classification, extraction or a short summary. Estimate its share of your total query volume. Then use the cost model below to work out what it would cost on a model one or two tiers cheaper.'],
      ['x','This is often the largest single saving available, and it sits in the least exciting part of the product. Most teams never test it.']
    ]],
    ['lab','costmodel'],
    ['q','I143'],
    ['c','Tip','Work in this order: instructions, then evidence, then fine-tuning, then a different model. Measure after each one. The first two can be undone in hours, so ruling them out is cheap. Fine-tuning commits you to maintenance for as long as the feature exists.'],
    ['h','Summary'],
    ['p','So here is the whole chapter in a few lines. Name the failure before you pick a fix. Most failures are about missing knowledge or wrong behaviour, and those are fixed more cheaply than by training. Fine-tuning has real uses, but it comes with a cost that lasts as long as the feature does.'],
    ['key','You can’t see the effect of any of the four changes without a test set. A team with an answer key can settle “should we fine-tune?” in a week. A team without one can’t settle it at all.'],
    ['q','I142'],
    ['p','Next, you’ll look at what the screen should do when the model gets an answer wrong, which at some rate it always will.']
  ],
},
{

  id:'ch20', num:20, part:4, curriculumTier:'selective', phase:2, prerequisites:['ch8','ch11','ch18'], nextUnits:['ch205','ch19pm'], minutes:30, labs:[],
  title:'Designing for wrong answers: evidence, confidence and refusals',
  concept:'At 90% accuracy, one answer in ten is wrong. Whether the feature is usable depends on what the screen does about that one. In this chapter you’ll audit a real product, design four interface states, time a correction and design the refusal.',
  needs:[
    ['A required quote makes checking cheap','A quote is more useful than a confidence number.',8],
    ['Users notice the slow responses','They notice the slowest ones, not the average response time.',11],
    ['A kill switch is not a rollback','Rolling back code does not undo behaviour that both versions share.',18]
  ],
  takeaway:[
    'Explain how a feature that is wrong one time in ten can still be trusted.',
    'Say what to do with a confidence score, and why displaying it as a number is usually wrong.',
    'Explain what must exist underneath a kill switch for it to be usable.'
  ],
  red:['An uncertain answer shown with a certain interface','Citations that do not open the passage','A feedback button that collects nothing usable'],
  capstone:{
    title:'Design the four answers the tool can give',
    brief:'Many AI features use the same screen when they are sure, when they are unsure, when they are wrong and when they cannot answer. So a confident wrong answer looks exactly like a confident right one. In this chapter you learned how a feature that is wrong one time in ten can still be trusted, and why a confidence number is usually the wrong thing to show. Now you’ll design the four states for the developer kit.',
    where:'This task is written, with no code. Design on paper, time one correction with a stopwatch, and write your design in the notes box below.',
    steps:[
      'Look at an AI feature you use every day. Note what it shows when it is confident, when it is unsure, when it is wrong and when it cannot answer.',
      'Now design the four states for Bharat Privacy Guard: found and removed with confidence, found but unsure, wrongly removed (a false alarm), and unable to decide. For each state, write what the developer’s program receives, what the end user sees, and what each of them can do next.',
      'Design the “unable to decide” state as a real way to reach a person, not a dead end. Say who the person is and how long they take.',
      'Decide what the tool shows when it is only half sure, so that the uncertainty is visible without being noisy. Don’t show a bare confidence number.',
      'Time one correction from start to finish. Start when a user notices that a harmless word was hidden, and stop when the rule is fixed. Count every step and every hand-off.',
      'Write down which of the four states your current design merges together, and what that costs the user.'
    ],
    done:[
      'All four states written out, including what each person can do in each one.',
      'The “unable to decide” route to a real person.',
      'The correction path, timed from start to finish, with the slowest step marked.',
      'The state your product handles worst, and the first thing you would change.'
    ]
  },
  story:[
    ['c','Before you start','You don’t need any code for this chapter. Pick an AI feature you use every day, and one feature you own or could own.'],
    ['p','In the last chapter you decided whether to change the model or something around it. Until now the course has been about making the model right more often. This chapter is about the rest of the time.'],
    ['p','At 90% accuracy, one interaction in ten is wrong, and no amount of engineering removes that completely. So what the screen does in that case decides whether the feature is usable.'],
    ['p','This is a design decision, and it belongs to the product owner. An engineer can tell you that a confidence score exists. The product owner decides what the user sees when that score is low.'],
    ['key','Do not show an uncertain answer in a confident interface. Many AI features feel untrustworthy because they show a wrong answer exactly the way they show a right one, not because they are less accurate.'],
    ['p','There are four things to get right. A feature that does all four can be wrong one time in ten and still be trusted. One that does none of them will be distrusted even at 95% accuracy. Let’s take them one by one.'],
    ['h','1. Show the evidence'],
    ['p','Start with a simple idea. If a user can check a claim in a few seconds, a wrong answer costs much less. A link that opens the actual source passage makes that possible. That is why Chapter 8 required the model to quote its source.'],
    ['p','A citation that names a document but does not open it is worse than nothing. It looks checkable, but the user can’t check it, and they won’t find that out until it matters.'],
    ['q','I144'],
    ['p','Now try this on a product you already use.'],
    ['do','Audit an AI feature you use every day',[
      ['p','Pick one, such as a search assistant, an email drafter or a coding assistant. Ask it something it will get wrong, at the edge of what it knows.'],
      ['p','Then answer four questions in writing. Could you check the claim, and how many seconds did it take? Did the interface show the wrong answer any differently from a right one? What could you do about it? And what happened to your correction?'],
      ['x','Most well-known products fail at least two of the four. Note which ones. Your users will hold your feature to the same standard.']
    ]],
    ['h','2. Design for speed'],
    ['p','In Chapter 11, slow responses were a cost. Here they become a design problem. Streaming, where the answer appears piece by piece, works well for prose, because a half-arrived paragraph is already useful.'],
    ['p','It doesn’t work for everything. A number that appears and then changes while the answer is still being generated is worse than a spinner. The user has already read it and may have acted on it.'],
    ['q','I145'],
    ['h','3. Use confidence to choose behaviour'],
    ['p','Many models can also give a confidence score along with an answer. It’s tempting to show it. Before you read on, think about what you would do with it.'],
    [
      'pred',
      {id:'ch20-conf',
       short:true,
       ph:'What you would do with it',
       ask:'Predict: your model returns a confidence score with every answer. What should the interface do with it?',
       reveal:'Use it to decide what the product does, and do not display it as a number. A percentage next to an answer asks the user to judge something they cannot calibrate, and the model’s own confidence is often badly calibrated anyway. Used internally, it can change the behaviour: answer directly, show the evidence first, ask a clarifying question, or pass the case to a person.',
       then:'Turn confidence into interface choices. Use an editable field instead of a fixed one, a draft instead of a sent message, or a question instead of a guess.'}
    ],
    ['q','I146'],
    ['p','Now put that into practice on a feature of your own.'],
    ['do','Write the four states',[
      ['p','For one feature you own, write what the user sees in four states: a confident answer, a low-confidence answer, a refusal, and the AI turned off. Write the actual screen content.'],
      ['x','The third and fourth states are the hard ones, and most specs leave them out. If you can’t write them, the product doesn’t have them either. It just does whatever the code happens to do.']
    ]],
    ['h','4. Make correcting it easy'],
    ['p','When the system is wrong, what the user does next is your most valuable data, and most products throw it away. A thumbs-down records that something was wrong, but not what.'],
    ['p','A good correction path does three things. It captures what the user expected <em>instead</em>. It keeps the evidence the system used. And it is faster than giving up and doing the task by hand. If correcting takes longer than the manual workaround, nobody corrects, and an empty feedback table looks like satisfaction.'],
    ['q','I147'],
    ['do','Time a correction',[
      ['p','Use a clock. How long does it take to correct a wrong output, compared with doing the task by hand from scratch? Do it three times.'],
      ['x','If correcting is slower, your feedback table will stay empty, and you may wrongly read that as satisfaction. This one measurement explains most of the “our users never give feedback” complaints.']
    ]],
    ['c','Example','Take two products that use the same model and the same retrieval. One logs a thumbs-down. The other logs the answer, the retrieved chunks and the question. It also asks one more thing: “what did you expect instead?” Within two weeks, the second has a list of real failure types and a roadmap built from its own traffic. The first has a falling number and no idea why.'],
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
    ['p','Every system looks good when it works. Trust is built on the screen that says <em>I do not have that</em>. Many AI products design that screen last, or not at all.'],
    ['key','A system that says “I cannot answer this” and offers a route to a person earns more trust than one that always produces something. Users judge a system partly by its refusals. A feature that never refuses teaches them that its confidence means nothing.'],
    ['q','I148'],
    ['h','What happens when the AI is off'],
    ['p','Finally, decide what the feature does when the AI is switched off. In Chapter 18 you saw that a rollback and a kill switch are different things.'],
    ['p','A kill switch is only usable if there is something underneath it. That could be search without generated answers, a form without extraction, or a queue without routing. If turning the AI off leaves a blank screen, the switch just replaces one failure with another.'],
    ['q','I149'],
    ['p','To sum up, a feature earns trust by showing its evidence, staying quick, using confidence to choose what it does, and making corrections easy. Add a refusal that leads to a person, and a fallback for when the AI is off. Next, you’ll learn how to find out whether all this actually helped the business, by designing a pilot.']
  ],
},
{
  id:'ch205', num:20.5, part:4, curriculumTier:'selective', phase:2, prerequisites:['ch14','ch20'], nextUnits:[], minutes:25, labs:[],
  title:'Measuring business impact: designing a pilot',
  concept:'A system can be accurate and still change nothing for the business. In this chapter you’ll find the slow part of a workflow, then design a pilot with a business metric, a comparison, a failure threshold and a time window.',
  needs:[
    ['You can measure the system','That means recall, precision, judges and per-category scores.',14],
    ['The interface has four states','What the user sees decides whether quality reaches them.',20]
  ],
  takeaway:[
    'Design a pilot that could actually show the feature did not help.',
    'Name the one number the business cares about, and how the feature would move it.',
    'Explain why a system that measures well can still produce no business benefit.'
  ],
  story:[
    ['c','Before you start','You don’t need any code for this chapter. Bring a feature you have measured, yours or one from the course, and the name of whoever pays for it.'],
    ['p','So far the course has measured the system itself. Is retrieval right? Can the judge be trusted? Is the classifier accurate in each category? All of that is necessary.'],
    ['p','But none of it answers the question that decides future funding: did it help the business? That is what this chapter is about, and it ends with a pilot you can actually design.'],
    ['key','A system can be 94% accurate and change nothing, because nobody uses it, or because the step it speeds up was never the slow part.'],
    ['h','Find the slow part first'],
    ['p','Before you design anything, check that you are speeding up the right step. The way to do that is to time the whole workflow.'],
    ['do','Time the whole workflow',[
      ['p','Take the workflow your feature is part of and time it honestly from start to finish. Include every step, including the time spent waiting for other people.'],
      ['x','The AI step is rarely the largest. Often the biggest block is waiting for a person, or a handover between two systems. If you turn a four-minute step into a one-minute step inside a three-day process, nobody will notice.'],
      ['key','This is the cheapest study in the course, and the one most often skipped, because it can show that you should not build the feature.']
    ]],
    ['h','Four parts of a pilot'],
    ['p','Suppose the step you are speeding up really is on the critical path. Then you can design a pilot. Think of a pilot as a test that states in advance what result would disappoint you, not as a small launch.'],
    ['p','A pilot has four parts. Here they are in order.'],
    [
      'n',
      ['<strong>The number.</strong> Choose one measure the business already tracks, such as handling time, first-contact resolution, backlog age or error rate. Don’t invent a new metric for the pilot.','<strong>The comparison.</strong> Looking at the same team before and after is weak evidence. Comparing two similar groups over the same period is much stronger, and it is usually possible.','<strong>The failure threshold.</strong> This is the change below which you will call the pilot a failure. Write it down before you start.','<strong>The time window.</strong> Make it long enough for the novelty to wear off. Any new tool looks better than it really is in its first two weeks.']
    ],
    ['p','The failure threshold is the part people skip. So let’s practise it.'],
    ['do','Write the disappointing result in advance',[
      ['p','Before running anything, write the sentence you would have to say if the pilot showed no effect. Use the words you would say to the person who funded it.'],
      ['x','This shows you two things. First, whether you really have a failure threshold, because many pilots don’t. Second, whether the pilot could ever produce that sentence, or whether every outcome would be reported as a success.'],
      ['key','If a pilot cannot fail, it is really a launch.']
    ]],
    ['h','When the system works but the number does not move'],
    ['p','Sometimes you run a careful pilot and the system works, yet the business number stays where it was. Where do you look first?'],
    [
      'try',
      {id:'ch205-adopt',
       mins:5,
       min:50,
       rows:3,
       task:'Your pilot shows the system works well, but the business number does not move. Write the three explanations you would investigate first, in order.',
       ph:'1 … 2 … 3 …',
       after:'This order usually works best. First, are people using it? Low adoption is the most common cause and the easiest to check. Second, does the output reach the place where the decision is made, or is it in a separate tool someone has to remember to open? Third, was the step you sped up actually on the critical path? Only after these three should you question the quality of the system. Teams usually check quality first because they know how to measure it.'}
    ],
    ['q','I102'],
    ['h','Summary'],
    ['p','The whole course repeats one idea at a larger and larger scale. Decide what counts as failure, then measure that specific thing, instead of looking at outputs and forming an impression. You have done this for a prompt, a retriever, a judge, a cost model and now a business case.'],
    ['key','The techniques will change as models change. The habit of defining failure first and then measuring it is what carries over.'],
    ['p','Next, you’ll move to the building blocks you need to work with AI systems yourself: Python, HTTP, Git and tests.']
  ],
  capstone:{
    title:'Design a pilot that could fail',
    brief:'A pilot that cannot fail proves nothing. In this chapter you learned to pick one number the business already tracks, to compare two groups, and to agree a failure threshold before the pilot starts. Now you’ll design a pilot of the developer kit with five to ten real developers.',
    where:'This task is written, with no code. Design on paper, then write it up and get it agreed before anything runs.',
    steps:[
      'Time the whole workflow of a developer who handles user text, and mark where the kit fits. If it is not on the critical path, say so and stop here.',
      'Choose the business number. It must already exist and someone must already look at it, for example the number of support tickets that mention personal data being pasted into a chat.',
      'Design the comparison. Say which two groups of developers or which two periods you will compare, and why they are comparable.',
      'Write the failure threshold, which is the change below which you will call the pilot a failure. Also write the time window you will wait before you judge.',
      'Write the disappointing result in advance, in the words you would say to whoever funded it.',
      'Get the person who funds it to agree the threshold in writing before the pilot runs.'
    ],
    done:[
      'A business number that was already being tracked before the pilot.',
      'A comparison between two groups or periods, with a reason they are fair.',
      'A failure threshold agreed in writing by the person who would be disappointed by it.',
      'A description of a result that would make you recommend switching the kit off.'
    ]
  }
}

];

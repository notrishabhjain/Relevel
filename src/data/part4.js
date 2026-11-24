/* Part IV — The decisions that stay yours (Chapters 19–20)

   Parts I to III build a system and the instruments to judge it. These two
   chapters cover the two decisions that survive every rebuild of it: what you
   change when it is not good enough, and what the user sees when it is wrong.
   Neither one is an engineering decision. */

window.PART4 = [
{
  id:'ch185', num:18.5, part:4, curriculumTier:'selective', phase:2, prerequisites:['ch18','ch6'], nextUnits:['ch20d','b1'], minutes:25, labs:[],
  title:'Build or buy: comparing a vendor with your own build',
  concept:'People often decide build or buy by price and by how good the demo looked. Both matter less than they seem. You will test a vendor (the company selling the product) with your own answer key. You will work out the cost of both options over two years, like comparing a rented flat with a flat you build. And you will write down, before you decide, what would change your mind.',
  needs:[
    ['A spec that describes a measured range','So you can say what “good enough” means before you compare options.',18],
    ['You can measure retrieval yourself: how well the system finds the right page','So you can test a vendor, instead of trusting a demo.',6]
  ],
  takeaway:[
    'Run the same evaluation on the vendor and on your own build. Compare like with like, as you would weigh two mangoes on the same scale.',
    'Say what you are really buying. It is usually not the model.',
    'Write down what would make you change your decision later. Do it before you decide.'
  ],
  story:[
    ['c','Before you start','No new setup. Bring the acceptance criteria (the rules that say the feature is good enough) from Chapter 18 and the answer key from Chapter 6.'],
    ['p','In the last chapter you wrote a full requirements document and planned for the day a model is retired. Now picture a colleague walking in. They say, “There is a product that already does this. Why are we building it?”'],
    ['p','This question will come, sooner or later. People usually talk about price and how good the demo looked. Neither one decides it.'],
    ['key','You are rarely buying the model, because most vendors use the same models. You are buying the connectors (the plugs that link to your other systems), the permissions, the audit trail (the record of who did what), the support contract, and someone else handling incidents.'],
    ['c','You already know this','Testing a vendor on your own answer key is a technical check with your own test cases, not the vendor’s demo data. The exit clause (the rule for leaving the contract) is the question every tender should ask: what would it take to leave?'],
    ['h','Test the vendor with your answer key'],
    ['p','A demo is made to look good, like a sweet shop’s sample plate. To see what a vendor can really do, you need a test the vendor did not design. You already have one.'],
    ['do','Run your answer key on the vendor',[
      ['p','Ask for a trial. Run your ten real questions through it. Grade the answers against your key. Use your questions, not the vendor’s demo questions.'],
      ['x','The result is usually worse than the demo, and better than you feared. The question with no answer in the documents, and the question in a second language, usually show the biggest gap. Vendors rarely work on those.'],
      ['c','Tip','You are the only person in the negotiation who can run this test, because only you have the answer key.']
    ]],
    ['h','The questions that decide it'],
    ['p','After you test the vendor, four questions help you decide. The table gives each question and why it matters, like four checks before you buy a second-hand car.'],
    [
      'tb',
      ['Question','Why it matters'],
      [
        ['Is this the heart of the product, or a supporting piece?','If your product exists to do this, you must own it. If it is supporting plumbing, buying is usually right.'],
        ['How often will it need to change?','Something you adjust every week on your own data is hard to buy. Something that stays the same is costly to build.'],
        ['Who handles incidents at 2am?','A real cost that people often leave out. It is often bigger than the licence fee.'],
        ['What if the vendor is bought by someone else, or shuts down?','Ask what you would need to leave, and how long it would take. If nobody can answer, count that as a risk.']
      ]
    ],
    ['p','Those questions show the shape of the decision. Now put numbers on it.'],
    ['do','Cost both options over two years',[
      ['p','Write the two-year cost of each option. For building, count the Chapter 15 costs. Also count what people forget: testing, the person who keeps it running, and running the migration tests again each time the model underneath changes.'],
      ['x','Building usually costs two to four times your first guess. The option you buy often has a price rise at the next tier (the next size of plan) that nobody has read. Find both before you decide.'],
      ['p','Then add how long each option takes to reach a user. A build that costs less over two years but arrives six months later can still be the wrong choice.']
    ]],
    ['h','Decide what would change your mind'],
    ['p','Decisions like this are rarely final. So before you decide, say which new facts would make you reverse it.'],
    [
      'try',
      {id:'ch185-flip',
       mins:5,
       min:50,
       rows:3,
       task:'Write what would make you change your mind, in both directions. What evidence would turn a build recommendation into a buy? What would turn a buy into a build?',
       ph:'I would switch to buying if … . I would switch to building if … .',
       after:'Writing this before you decide keeps your mind open to the facts. Common reasons to switch to buying: one person ends up doing all the upkeep, or the thing turns out to be common to everyone. Common reasons to switch to building: the vendor’s plan moves away from what you need, the price rises at the next tier, or the “plumbing” is why customers choose you. Put a date on when you will look at it again.'}
    ],
    ['c','Tip','A mix is often a good answer: buy the plumbing, and build the part that makes your product different. For example, use a vendor’s connectors and permissions, but keep your own search for the right page and your own testing.'],
    ['p','To sum up: test the vendor on your own answer key, cost both options over two years, and write down what would change your mind. Next is a different choice: should you fine-tune a model, or change something else?']
  ],
  capstone:{
    title:'Recommend what to build yourself and what to buy',
    brief:'For each part of the tool there is usually a ready-made thing you can buy or borrow, like buying a ready-made shirt or getting one stitched. Your own build is the stitched one. In this chapter you learned to run the same test on both. You learned to name what you are really buying, which is often not the model. And you learned to write down what would change your mind before you decide. Now do this for two parts of Bharat Privacy Guard.',
    where:'This task is mostly writing. Test each option on your answer key, in a notebook (the page of code boxes) if the option has code. Write your recommendation in the notes box below. Short version for the route, about 20 minutes: steps 1, 3 and 6.',
    steps:[
      'Pick two parts of the tool: the pattern checker and the name-and-place finder. For each part, write one line on what it must do. Then say whether it is the heart of your product or a supporting piece.',
      'For the pattern checker, compare your own rules with a ready-made library such as Presidio’s recognisers (a library is code someone else wrote, like a recipe book you borrow). For the name-and-place finder, compare a ready-made model that knows many languages with one you would train or adapt yourself. Run each option on your answer key. Put the results in one table: quality on English, Hindi and Hinglish, speed, cost and effort.',
      'Work out the cost of each option over two years. Count testing, upkeep and the time spent on incidents (when something breaks), not only the first build. It is like a scooter: the price is small next to petrol and repairs.',
      'For each option you buy, write what you would need to leave it later, and how long that would take.',
      'Write what you are really buying. It is often updates, support, and someone else carrying the blame when it breaks. It is often not the model itself.',
      'Write your recommendation for each part in two sentences. Add the two things that would reverse it, and the date you will look at it again. Write these before you decide, not after.'
    ],
    done:[
      'A table that shows the options for each part, tested on the same answer key.',
      'A two-year cost for each option, with upkeep and testing counted.',
      'A note on what it would take to leave each option you buy.',
      'Two recommendations, each with the two things that would reverse it and a review date.'
    ]
  }
},
{

  id:'ch19', num:19, part:4, curriculumTier:'selective', phase:2, prerequisites:['ch14','ch6'], nextUnits:[], minutes:30, labs:['costmodel'],
  title:'Fine-tuning or not: choosing what to change',
  concept:'When a model is not good enough, you can change four things: the instructions, the evidence you give it, its training, or the model itself. Think of a student who is failing: you can change the question, give a book, send them to coaching, or change the student. You will sort real failures into four kinds, match each kind to its fix, and work out what a fine-tuning proposal would really cost.',
  needs:[
    ['A failure taxonomy (a list of your own failures), with counts','You cannot pick a fix until you know what is going wrong and how often, like a doctor who must find the illness before giving medicine.',14],
    ['A test set (questions with known right answers) you trust','Without one, you cannot see what any change in this chapter really did.',6]
  ],
  takeaway:[
    'Name the four things you can change, and say what each one really fixes.',
    'Say why fine-tuning (coaching the model on many examples) is the wrong tool for “it does not know our new policy”.',
    'Say what you must have before you can answer the fine-tuning question.'
  ],
  red:['Reaching for fine-tuning to fix a knowledge gap','Choosing a fix before naming the failure'],
  capstone:{
    title:'Answer a proposal to fine-tune a model, using evidence',
    brief:'Someone says: let us train a small Indian-language model of our own, to improve the name-and-place finder. That is called fine-tuning. It sounds like the serious choice. In this chapter you learned the four things you can change, what each one fixes, and why fine-tuning is the wrong tool for “it does not know our new policy”. Now decide, with evidence, whether the proposal is right.',
    where:'This task is written, with no code. Use the failures you collected in earlier chapters and the numbers you already measured. Write your answer in the notes box below. Short version for the route, about 20 minutes: steps 1, 2 and 3.',
    steps:[
      'Collect twenty real failures from your tool. Take them from the failure taxonomy (your list of failure types) you made in Chapter 14.5.',
      'Sort the twenty into the four kinds from this chapter, like sorting letters into four boxes: the model did not know something, the instructions were unclear, the right information was not found, or the format was wrong.',
      'Count each kind. The counts often settle the question before any technical argument starts.',
      'For the biggest pile, name the cheapest change that would fix it. Say why it costs less than fine-tuning.',
      'Work out the real cost of the fine-tuning proposal, with cost per query too. Count preparing the data, training, testing, and doing all of it again each time the base model (the model you start from) changes.',
      'Write a one-page answer to the person who proposed it. Use the failure counts as your main reason. Say what evidence would change your mind.'
    ],
    done:[
      'Twenty real failures sorted into the four kinds, with a count for each.',
      'The cheapest fix for the biggest pile.',
      'A cost for fine-tuning that includes doing it again and again.',
      'A one-page answer that also says what evidence would change your advice.'
    ]
  },
  story:[
    ['c','Before you start','You do not need a notebook (a page of code boxes) for this chapter. Open your list of failure types from Chapter 14.5. Or collect ten real answers from an AI feature you use every day.'],
    ['p','In the last chapter you compared buying from a vendor with building your own. Now a new question comes up. Sooner or later someone asks it in a roadmap review (the meeting about what comes first, next and later): <em>should we fine-tune?</em>'],
    ['p','This question often comes before anyone has said what is wrong. Saying yes gives the team a quarter of work. Saying no can sound like you lack ambition. So a good answer starts with a diagnosis, like a doctor’s check. This chapter shows you how.'],
    ['h','Four things you can change'],
    ['p','Say an AI feature is not good enough. What can you change? There are four things. You can change <strong>the instructions</strong> (the note you hand the model). You can change <strong>the evidence you give the model</strong>, like handing it the right page of a book. You can change <strong>the model’s training on your own examples</strong>, which is called fine-tuning. Or you can change <strong>which model you use</strong>.'],
    ['p','Try them in that order. See why with a failure you may well meet.'],
    [
      'pred',
      {id:'ch19-lever',
       rows:3,
       ph:'Which one, and why',
       ask:'Predict: your assistant says, sounding sure, that the refund window is 30 days. The right number, published last month, is 45. Which of the four changes fixes it? And which will people in a meeting room usually suggest?',
       reveal:'Better evidence. The system does not have the current policy, so it makes up a likely number from its training, as Chapter 2 showed. A meeting often suggests fine-tuning, because “teach the model our policies” sounds right. But a fine-tuned model must be trained again each time the number changes. It also cannot show the user where 45 came from.',
       then:'This is one of the most common wrong diagnoses in the field. It costs a lot because the wrong answer sounds so sensible.'}
    ],
    ['p','The table below puts all four changes side by side. Look at the last two columns. They show what each change cannot fix, and how hard it is to try and to undo.'],
    [
      'tb',
      ['What you change','What it really fixes','What it cannot fix','Cost to try, and to undo'],
      [
        ['Instructions','How the answer looks, the tone, when to say no, and how the task is put','Missing knowledge, and real limits in thinking','Minutes to try, and undone at once'],
        ['Evidence','Knowledge that is missing, changing or private, and showing where an answer came from','Problems with behaviour and format','Days to try, and undone by rebuilding the index (the card catalogue)'],
        ['Training on examples','The same shape and style every time, cheaply, and a small model doing one job well','Facts that change, and bad search for the right page','Weeks to try, plus upkeep for as long as it lives. You cannot undo it, only train it again'],
        ['A different model','How deeply it thinks, speed, and cost per question','Bad evidence. A better model only thinks better about the wrong page','Hours to try, but every number you measured must be measured again']
      ]
    ],
    ['q','I138','I139'],
    ['h','Find out what kind of failure it is'],
    ['p','Now you see why the order matters. Before you ask “which fix?”, ask “what kind of failure is this?”. There are four kinds, and each one points to its own fix, like four kinds of fever with four kinds of medicine.'],
    [
      'l',
      ['<strong>It does not know.</strong> The answer is missing, old or made up. The fix is better evidence, with versions for your documents (Chapter 12).','<strong>It knows, but behaves wrongly.</strong> The facts are right, but the look, tone or rule-following is wrong. Fix the instructions first. Then require a fixed format, like a form with boxes (Chapter 8). Fine-tune only if those stop helping.','<strong>It cannot work it out.</strong> The task needs many steps of thinking, sums that depend on each other, or real doubt. The fix is to use reasoning (a model that thinks on rough paper first) or a stronger model (Chapter 11).','<strong>It is right but too costly.</strong> It is too slow or too expensive at your volume. The fix is a smaller model, or a cheap-first cascade: the cheap model tries first, and the costly one helps only when needed (Chapter 15).']
    ],
    ['p','The best way to learn this is to do it on real failures. Take your list and sort it.'],
    ['do','Sort real failures into the four kinds',[
      ['p','Next to each failure, write one letter: <strong>K</strong> (does not know), <strong>B</strong> (behaves wrongly), <strong>R</strong> (cannot work it out) or <strong>E</strong> (too expensive). Pick one letter even when it is hard. The hard ones teach you the most.'],
      ['x','The result is usually lopsided. Most real failure lists are mostly K and B. That is why better search for the right page, and better instructions, bring most of the gain in most products. It is also why fine-tuning proposals often do not deliver.']
    ]],
    ['key','Fine-tuning teaches behaviour, not facts. If the complaint is “it does not know our policy”, fine-tuning is the wrong tool. It is like coaching a student’s handwriting when the problem is a missing textbook.'],
    ['q','I140'],
    ['p','See what this diagnosis needs: a named failure with a count behind it. That is your Chapter 14.5 list. Without it, the talk becomes a contest of opinions, and the most senior opinion usually wins.'],
    [
      'try',
      {id:'ch19-diagnose',
       mins:6,
       min:60,
       rows:5,
       task:'Pick a real failure you have seen in an AI feature, yours or one you use. Write what the user saw, which of the four kinds it is, and the fix. Then write the one measurement that would show you chose right.',
       ph:'the user saw … kind of failure … the fix … I would know I was right if …',
       after:'Sorting is the hard part, because failures often look alike. “It gave a confident wrong figure” could be any of the four until you check what was found. If the right page was found and misread, it is behaviour or reasoning. If the wrong page was found, only better search helps. If the right page is not in the documents at all, that fix comes before everything else in this course. The measurement matters too. “Retrieval finds the right page 9 times in 10 instead of 6” can be checked. “It feels better” cannot.'}
    ],
    ['h','What fine-tuning really costs'],
    ['p','None of this means fine-tuning is a bad idea. It has real benefits. First, <strong>consistency</strong>: the same shape and tone across thousands of answers, more steadily than instructions can give.'],
    ['p','Second, a <strong>small model can do one narrow job</strong> about as well as a big one, and that saves a lot of money. Third, it teaches habits that are hard to explain but easy to show, such as house style.'],
    ['p','The catch is that proposals leave out the costs. Each is a commit (a promise). Someone must make the training examples and <em>keep them up to date</em>. You need a test set first, or you cannot tell if it helped. You must train again each time the base model is retired, as in Chapter 18. And your gain now lives inside one provider’s system, not in your prompt and your index (the card catalogue).'],
    ['do','Work out the cost of a fine-tuning proposal',[
      ['p','Take the likeliest fine-tuning candidate from your list. Write the full cost, not just the training bill. How many labelled examples does it need? Who writes them? Who keeps them up to date when the product changes? What test proves it worked? And what happens to all of it when the base model is retired in eighteen months?'],
      ['x','The total is several times the number on the vendor’s pricing page. You also get a list of owners. A fine-tuning proposal with no named owner for the training data will slowly rot.']
    ]],
    ['q','I141'],
    ['h','Try a smaller model'],
    ['p','There is one more option. Teams test it least, though it often helps most: <strong>going smaller</strong>. A cheaper, faster model can decide the money side of a feature used by many people. Sometimes it is even trained to copy a larger model on your task, like a junior learning from a senior.'],
    ['p','Small models do well on jobs that are narrow, repeated many times, high in volume and short on waiting time. Let us estimate what that could save you.'],
    ['do','Estimate the saving from a smaller model',[
      ['p','Pick the narrowest task in your product that runs the most often, such as routing (sending a request to the right place), sorting into groups, pulling out fields, or a short summary. Estimate its share of all your queries. Then use the cost model below to work out what it would cost on a model one or two tiers cheaper.'],
      ['x','This is often the biggest single saving, and it hides in the dullest part of the product. Most teams never test it.']
    ]],
    ['lab','costmodel'],
    ['q','I143'],
    ['c','Tip','Work in this order: instructions, then evidence, then a different model, then fine-tuning. Measure after each one. You can undo the first three in hours or days, so ruling them out is cheap. Changing the model means every number must be measured again, so run your answer key after each switch. Fine-tuning ties you to upkeep for as long as the feature lives.'],
    ['h','Summary'],
    ['p','Here is the whole chapter in a few lines. Name the failure before you pick a fix. Most failures are about missing knowledge or wrong behaviour, and those cost less to fix than training does. Fine-tuning has real uses, but its cost lasts as long as the feature does.'],
    ['key','Without a test set you cannot see the effect of any of the four changes. A team with an answer key can settle “should we fine-tune?” in a week. A team without one cannot settle it at all.'],
    ['q','I142'],
    ['p','Next, you will look at what the screen should show when the model gets an answer wrong. At some rate, it always will.']
  ],
},
{

  id:'ch20', num:20, part:4, curriculumTier:'selective', phase:2, prerequisites:['ch8','ch11','ch18'], nextUnits:['ch205','ch19pm'], minutes:30, labs:[],
  title:'Designing for wrong answers: evidence, confidence and refusals',
  concept:'Say a feature is right 90 times out of 100. Then 10 answers are wrong. Can people still use it? That depends on what the screen does for those 10. Today you check a real product, design four screens, time a correction with a stopwatch, and design the refusal (the screen that says “I cannot answer”).',
  needs:[
    ['A required quote makes checking cheap','A quote is more use than a confidence number. It is like a page number in the book: you can go and look.',8],
    ['Users notice the slow responses','They notice the slowest ones, not the average response time. It is like the one late train, not the ten on-time ones.',11],
    ['A kill switch (an off button) is not a rollback (going back to the old version)','Rolling back code does not undo behaviour that both versions share. It is like going back to the old recipe card when both cards have the same mistake.',18]
  ],
  takeaway:[
    'Say how a feature that is wrong 1 time in 10 can still be trusted.',
    'Say what to do with a confidence score (a number for how sure the model is), and why showing it as a number is usually wrong.',
    'Say what must sit underneath a kill switch (the big OFF button for the AI), so that it can really be used.'
  ],
  red:['An uncertain answer shown with a certain interface','Citations that do not open the passage','A feedback button that collects nothing usable'],
  capstone:{
    title:'Design the four answers the tool can give',
    brief:'Many AI features show one screen whether they are sure, unsure, wrong or unable to answer. So a wrong answer said with a straight face looks like a right one. You learned how a feature wrong 1 time in 10 can still be trusted, and why a confidence number is usually the wrong thing to show. Now you design the four states (four kinds of screen) for the developer kit.',
    where:'This task is written, with no code. Draw your design on paper. Time one correction with a stopwatch. Write your design in the notes box below. Short version for the route, about 20 minutes: steps 2, 3 and 5.',
    steps:[
      'Pick an AI feature you use every day. Write what it shows when it is sure, when it is unsure, when it is wrong, and when it cannot answer.',
      'Now design the four states for Bharat Privacy Guard. One: found and removed, and it is sure. Two: found, but unsure. Three: removed by mistake (a false alarm). Four: unable to decide. For each state, write three things: what the developer’s program receives, what the end user sees, and what each of them can do next.',
      'Design the “unable to decide” state as a real road to a person, not a dead end. Say who the person is and how long they take.',
      'Decide what the tool shows when it is only half sure. The doubt should be easy to see, but not noisy. Do not show a bare confidence number.',
      'Time one correction from start to finish. Start the clock when a user sees that a harmless word was hidden. Stop it when the rule is fixed. Count every step and every hand-off (one person passing the job to another).',
      'Write down which of the four states your design mixes into one screen, and what that costs the user.'
    ],
    done:[
      'All four states written out, including what each person can do in each one.',
      'The “unable to decide” road to a real person.',
      'The correction path (the steps a user takes to fix a wrong answer), timed from start to finish, with the slowest step marked.',
      'The state your product handles worst, and the first thing you would change.'
    ]
  },
  story:[
    ['c','Before you start','You don’t need any code for this chapter. Pick an AI feature you use every day. Pick one more that you own or could own.'],
    ['p','In the last chapter you decided whether to change the model or the things around it. So far the course has been about making the model right more often. This chapter is about the times it is still wrong.'],
    ['p','Say the model is right 90 times out of 100. Then 10 answers are wrong, and no amount of engineering takes that to zero. So what the screen does for those 10 decides if people can use the feature.'],
    ['p','This is a design choice, and it belongs to the product owner (the person in charge of the feature). An engineer can tell you a confidence score exists. The product owner decides what the user sees when that score is low.'],
    ['key','Do not show an unsure answer on a screen that looks sure. Many AI features feel unreliable not because they are less right, but because a wrong answer looks exactly like a right one.'],
    ['p','There are four things to get right. A feature that does all four can be wrong 1 time in 10 and still be trusted. A feature that does none will not be trusted, even at 95 right out of 100. Let us take them one at a time.'],
    ['h','1. Show the evidence'],
    ['p','Start with a small idea. If a user can check a claim in a few seconds, a wrong answer costs much less. A link that opens the real source page makes that possible. That is why Chapter 8 made the model quote its source. It is like a book that gives the page number.'],
    ['p','A citation (a note saying where the answer came from) that names a document but does not open it is worse than nothing. It looks checkable, but the user cannot check it. They only find out when it matters.'],
    ['q','I144'],
    ['p','Now try this on a product you already use.'],
    ['do','Audit an AI feature you use every day',[
      ['p','Pick one, such as a search assistant, an email writer or a coding helper. Ask it something it will get wrong, something at the edge of what it knows.'],
      ['p','Then answer four questions in writing. Could you check the claim, and how many seconds did it take? Did the screen show the wrong answer any differently from a right one? What could you do about it? What happened to your correction?'],
      ['x','Most well-known products fail at least two of the four. Write down which ones. Your users will judge your feature by the same measure.']
    ]],
    ['h','2. Design for speed'],
    ['p','In Chapter 11, slow responses were a cost. Here they become a design problem. Streaming (words showing up one by one, like the chai-wala saying “two minutes”) works well for paragraphs. A half-arrived paragraph is already useful.'],
    ['p','It does not work for everything. Picture a number that shows up and then changes while the answer is still being made. That is worse than a spinner (the little wheel that says “wait”). The user has already read it, and may have acted on it.'],
    ['q','I145'],
    ['h','3. Use confidence to choose behaviour'],
    ['p','Many models can also give a confidence score with an answer. It is tempting to show it. Before you read on, think: what would you do with it?'],
    [
      'pred',
      {id:'ch20-conf',
       short:true,
       ph:'What you would do with it',
       ask:'Predict: your model gives a confidence score with every answer. What should the screen do with it?',
       reveal:'Use it to decide what the product does. Do not show it as a number. A percentage next to an answer asks the user to judge what they cannot judge. The model’s own sureness is often off, like a student who is sure and wrong. Kept inside, the score can pick the action: answer now, show evidence first, ask a question back, or pass the case to a person.',
       then:'Turn confidence into screen choices. Use a box the user can edit instead of a fixed one. Use a draft instead of a sent message. Use a question instead of a guess.'}
    ],
    ['q','I146'],
    ['p','Now try this on a feature of your own.'],
    ['do','Write the four states',[
      ['p','Take one feature you own. Write what the user sees in four states: a sure answer, an unsure answer, a refusal, and the AI turned off. Write the real words on the screen.'],
      ['x','The third and fourth states are the hard ones, and most specs (the written plan for a feature) leave them out. If you cannot write them, the product does not have them. It just does whatever the code happens to do.']
    ]],
    ['h','4. Make correcting it easy'],
    ['p','When the system is wrong, what the user does next is your most valuable data, and most products throw it away. A thumbs-down says something was wrong. It does not say what.'],
    ['p','A good correction path does three things. It captures what the user expected <em>instead</em>. It keeps the evidence the system used. And it is faster than giving up and doing the task by hand. If correcting takes longer than doing it by hand, nobody corrects. Then an empty feedback table looks like happy users.'],
    ['q','I147'],
    ['do','Time a correction',[
      ['p','Use a clock. How long does it take to fix a wrong output, compared with doing the whole task by hand? Do it three times.'],
      ['x','If fixing is slower, your feedback table will stay empty, and you may read that as happy users. This one measurement explains most “our users never give feedback” complaints.']
    ]],
    ['c','Example','Take two products with the same model and the same retrieval (finding the right page before answering). One saves a thumbs-down. The other saves the answer, the chunks (small pieces of text it looked at) and the question, and asks “what did you expect instead?” In two weeks, the second has a list of real failure types and a roadmap from its own traffic. The first has a falling number and no idea why.'],
    [
      'try',
      {id:'ch20-correct',
       mins:6,
       min:60,
       rows:5,
       task:'Design the correction path for a feature you know. What does the user do when the output is wrong? What does that action record? How long does it take, compared with doing the task by hand? Then write the test case it would give you (one question with its right answer).',
       ph:'the user … we capture … it takes … versus … the test case would be …',
       after:'A good design makes fixing the fastest choice. Let the user edit the output right there, and treat the edit as the feedback. They were going to fix it anyway, so it costs them nothing, and you learn the right answer exactly. Save the question, the evidence, the output and the fix together. Without the evidence, you cannot tell if finding the page or writing the answer broke. Chapter 19 needs that difference.'}
    ],
    ['h','Design the refusal'],
    ['p','Every system looks good when it works. Trust is built on the screen that says <em>I do not have that</em>. Many AI products design that screen last, or never.'],
    ['key','A system that says “I cannot answer this” and shows a way to a person earns more trust than one that always gives something. People judge a system partly by its refusals, like a shopkeeper who says “not in stock” and tells you who has it. A feature that never refuses teaches users that its sureness means nothing.'],
    ['q','I148'],
    ['h','What happens when the AI is off'],
    ['p','Last, decide what the feature does when the AI is switched off. In Chapter 18 you saw that a rollback (going back to the old version) and a kill switch are different things.'],
    ['p','A kill switch can only be used if something works underneath it. That could be search without written answers, a form without the AI filling it in, or a queue without the AI sorting it. It is like the plain stairs under a lift: if the lift stops, people can still climb. If turning the AI off leaves a blank screen, the switch only swaps one failure for another.'],
    ['q','I149'],
    ['p','To sum up, a feature earns trust by showing its evidence, staying quick, using confidence to choose what it does, and making fixes easy. Add a refusal that leads to a person, and a fallback for when the AI is off. Next, you will learn how to tell if all this helped the business, by designing a pilot (a small test run).']
  ],
},
{
  id:'ch205', num:20.5, part:4, curriculumTier:'selective', phase:2, prerequisites:['ch14','ch20'], nextUnits:[], minutes:25, labs:[],
  title:'Measuring business impact: designing a pilot',
  concept:'A tool can be right most of the time and still change nothing for the business. Think of a fast new lift in a building where people wait three days for a signature. Today you find the slow part of a workflow (a job’s steps). Then you design a pilot (a small, fair test run) with a business metric (the one number the business watches), a comparison, a failure threshold and a time window.',
  needs:[
    ['You can measure the system','That means recall, precision, judges and per-category scores. Recall is how many of the fish in the pond your net caught. Precision is how much of the net is really fish.',14],
    ['The screen has four states','What the user sees decides if the quality reaches them. A good answer on a bad screen is like hot food dropped on the floor.',20]
  ],
  takeaway:[
    'Design a pilot that could really show the feature did not help.',
    'Name the one number the business cares about, and say how the feature would move it.',
    'Explain why a system that scores well in tests can still bring no business gain.'
  ],
  story:[
    ['c','Before you start','You don’t need any code for this chapter. Bring a feature you have measured, yours or one from the course, and the name of the person who pays for it.'],
    ['p','So far the course has measured the system itself. Is retrieval (finding the right page before answering) right? Can the judge (a second model that marks answers) be trusted? Is the classifier (the sorter that puts items in piles) right in each category? All of that is needed.'],
    ['p','But none of it answers the question that decides future funding: did it help the business? This chapter is about that question. It ends with a pilot you can really design.'],
    ['key','A system can be right 94 times out of 100 and still change nothing. Maybe nobody uses it. Maybe the step it speeds up was never the slow part.'],
    ['h','Find the slow part first'],
    ['p','Before you design anything, check that you are speeding up the right step. It is like fixing a slow queue at the wrong counter. To check, time the whole workflow.'],
    ['do','Time the whole workflow',[
      ['p','Take the workflow your feature is part of. Time it honestly from start to finish. Count every step, including the time you spend waiting for other people.'],
      ['x','The AI step is rarely the biggest. Often the biggest block is waiting for a person, or a hand-off between two systems. Make a four-minute step take one minute inside a three-day process, and nobody will notice.'],
      ['key','This is the cheapest study in the course. It is also the one most often skipped, because it can show that you should not build the feature.']
    ]],
    ['h','Four parts of a pilot'],
    ['p','Say the step you are speeding up really is on the critical path. Then you can design a pilot. Think of a pilot as a test that says in advance which result would let you down. It is not a small launch.'],
    ['p','A pilot has four parts. Here they are, in order.'],
    [
      'n',
      ['<strong>The number.</strong> Choose one measure the business already tracks, such as handling time, first-contact resolution (solved in the first call), backlog age or error rate. Do not invent a new number for the pilot.','<strong>The comparison.</strong> Looking at the same team before and after is weak proof. Comparing two similar groups in the same period is much stronger. It is like testing two plants with the same sun, one with new fertiliser. It is usually possible.','<strong>The failure threshold.</strong> This is the change below which you will call the pilot a failure. Write it down before you start.','<strong>The time window.</strong> Make it long enough for the newness to wear off. Any new tool looks better than it is in its first two weeks.']
    ],
    ['p','The failure threshold is the part people skip. So let us practise it.'],
    ['c','You already know this','A pilot that could fail is like a pilot district. You agree the success mark with the steering committee (the senior group that guides the project) before the rollout, not after the numbers come in.'],
    ['do','Write the disappointing result in advance',[
      ['p','Before you run anything, write the sentence you would have to say if the pilot showed no effect. Use the words you would say to the person who paid for it.'],
      ['x','This shows you two things. One: do you really have a failure threshold? Many pilots do not. Two: could the pilot ever give you that sentence? Or would every result be called a success?'],
      ['key','If a pilot cannot fail, it is really a launch.']
    ]],
    ['h','When the system works but the number does not move'],
    ['p','Sometimes you run a careful pilot and the system works, yet the business number stays where it was. It is like a new pump that works well but the tap upstairs still runs dry. Where do you look first?'],
    [
      'try',
      {id:'ch205-adopt',
       mins:5,
       min:50,
       rows:3,
       task:'Your pilot shows the system works well, but the business number does not move. Write the three reasons you would check first, in order.',
       ph:'1 … 2 … 3 …',
       after:'This order usually works best. First: are people using it? Low use is the most common cause, and the easiest to check. Second: does the output reach the place where the decision is made, or is it in a tool someone must remember to open? Third: was the step you sped up really on the critical path? Only then doubt the quality. Teams check quality first, because they know how to measure it.'}
    ],
    ['q','I102'],
    ['h','Summary'],
    ['p','The whole course repeats one idea, in bigger and bigger sizes. First decide what counts as failure. Then measure exactly that. Do not look at outputs and form a feeling. You have done this for a prompt, a retriever, a judge, a cost model and now a business case (the reasons a project is worth its money).'],
    ['key','The tricks will change as models change. The habit of deciding what failure is first, and then measuring it, is what stays with you.'],
    ['p','Next, you will learn the building blocks you need to work with AI systems yourself: Python, HTTP, Git and tests.']
  ],
  capstone:{
    title:'Design a pilot that could fail',
    brief:'A pilot that cannot fail proves nothing. In this chapter you learned to pick one number the business already tracks, to compare two groups, and to agree on a failure threshold (the result below which you call it a failure) before the pilot starts. Now you design a pilot of the developer kit with five to ten real developers.',
    where:'This task is written, with no code. Plan it on paper, then write it up, and get it agreed before anything runs. Short version for the route, about 20 minutes: steps 2, 4 and 6.',
    steps:[
      'Time the whole workflow of a developer who handles user text. Mark where the kit fits. If it is not on the critical path (the chain of steps that sets the total time), say so and stop here.',
      'Choose the business number. It must already exist, and someone must already look at it. For example: the number of support tickets that say someone pasted personal data into a chat.',
      'Design the comparison. Say which two groups of developers, or which two periods, you will compare. Say why they are fair to compare.',
      'Write the failure threshold: the change below which you will call the pilot a failure. Also write the time window, which is how long you will wait before you judge.',
      'Write the disappointing result in advance, in the words you would say to whoever paid for it.',
      'Get the person who pays for it to agree to the threshold in writing, before the pilot runs.'
    ],
    done:[
      'A business number that was already being tracked before the pilot.',
      'A comparison between two groups or periods, with a reason why it is fair.',
      'A failure threshold agreed in writing by the person who would be let down by it.',
      'A description of a result that would make you advise switching the kit off.'
    ]
  }
}

];

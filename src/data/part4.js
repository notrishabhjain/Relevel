/* Part IV — The decisions that stay yours (Chapters 19–20)

   Parts I to III build a system and the instruments to judge it. These two
   chapters cover the two decisions that survive every rebuild of it: what you
   change when it is not good enough, and what the user sees when it is wrong.
   Neither one is an engineering decision. */

window.PART4 = [
{
  id:'ch185', num:18.5, part:4, minutes:25, labs:[],
  title:'Build or buy',
  concept:'The commonest real decision, and the small number of things that actually settle it.',
  needs:[
    ['A spec is a measured range','So you can state what "good enough" means before shopping.',18],
    ['You can measure retrieval yourself','Which is what lets you test a vendor rather than believe one.',6],
  ],
  takeaway:[
    'Run the same evaluation against a vendor and against your own build, and compare like with like.',
    'Name what you are really buying, which is usually not the model.',
    'Say what would make you change the decision later, before you make it.'
  ],
  story:[
    ['c','Before you start','No new setup. Bring the acceptance criteria from Chapter 18 and the answer key from Chapter 6. Those two artefacts are what turn this from an opinion into a comparison.'],

    ['p','Somebody will propose buying a product that does what you have spent this course learning to build. The conversation usually turns on price and demo quality, and both are close to irrelevant.'],
    ['key','You are almost never buying the model. Everybody has the same models. You are buying the connectors, the permissions, the audit trail, the support contract, and somebody else carrying the on-call.'],

    ['do','Run your own answer key against the vendor',[
      ['p','Ask for a trial, put your ten real questions through it, and grade them against the key you already have. Not their demo questions. Yours.'],
      ['x','Almost always worse than the demo suggested and better than you feared. And the two rows that matter — the unanswerable question and the one in another language — are usually where the gap is widest, because those are the rows nobody optimises for.'],
      ['key','You are the only person in this negotiation who can run this test, because you are the only one with the answer key.']
    ]],

    ['p','Then the part that decides it, which has nothing to do with quality.'],
    ['tb',['question','why it settles things'],[
      ['Is this a core capability or a supporting one?','If your product’s reason to exist is this, owning it is not optional. If it is plumbing, buying is almost always right.'],
      ['How fast does it need to change?','Something you will tune weekly against your own data is painful to buy. Something stable is painful to build.'],
      ['Who is on call at 2am?','A real cost, usually left out, and often larger than the licence.'],
      ['What happens if they are acquired or shut down?','Ask what you would need to leave, and how long it would take. If nobody can answer, that is the answer.']
    ]],

    ['do','Cost both sides honestly',[
      ['p','Write the two-year cost of each. For build, include what you learnt in Chapter 15 plus the parts nobody puts in: evaluation, the person maintaining it, and doing the migration rehearsal every time the model underneath changes.'],
      ['x','The build column is usually two to four times the number people first say, and the buy column has a growth clause somebody has not read. Neither of those surprises should arrive after the decision.'],
      ['p','Then the number that is not money: how long until each option is in front of a user. A build that is cheaper over two years and six months later can still be the wrong answer.']
    ]],
    ['try',{id:'ch185-flip',mins:5,min:50,rows:3,
      task:'Write down what would make you change your mind — in both directions. What evidence would turn your build recommendation into a buy, and what would turn a buy into a build?',
      ph:'I would switch to buying if … . I would switch to building if … .',
      after:'Writing this before deciding is what stops the decision from becoming an identity. The usual triggers for switching to buy are the maintenance cost landing on one person and the capability turning out to be commodity. The usual triggers the other way are the vendor’s roadmap diverging from your need, the price step at the next tier, and discovering that the thing you thought was plumbing is the thing customers actually choose you for. Put a date on when you will re-read this.'}],

    ['p','And one shape worth knowing, because it is often the correct answer and rarely the one proposed: buy the plumbing, build the part that is yours. Somebody else’s connectors and permissions, your retrieval and your evaluation.']
  ],
  capstone:{
    title:'The recommendation, with its own expiry date',
    brief:'Make a real build-or-buy recommendation on evidence you generated, including the conditions under which it stops being right.',
    steps:[
      'State the capability in one line, and whether it is core or supporting to what your product is for.',
      'Run your answer key against at least one vendor trial and record the numbers beside your own build’s.',
      'Cost both over two years, including evaluation, maintenance and the on-call.',
      'Add time-to-user for both. Say which matters more here and why.',
      'Write the exit answer for the buy option: what you would need to leave, and how long it would take.',
      'Write the two triggers that would reverse the decision, and the date you will re-read them.'
    ],
    done:[
      'Both options were measured against the same answer key, by you.',
      'The build cost includes the maintenance and evaluation, not just the tokens.',
      'The recommendation names what would make it wrong, with a date attached.'
    ]
  }
},
{

  id:'ch19', num:19, part:4, minutes:30, labs:['costmodel'],
  title:'“Should we fine-tune?” — and how to answer it well',
  concept:'There are four things you can change when a model is not good enough. The hard part is not picking one. It is naming what is actually wrong first.',
  needs:[
    ['A list of your own failures, with counts','You cannot choose what to change without knowing what is wrong and how often.',14],
    ['A test set you trust','Every change in this chapter is invisible without one.',6],
  ],
  takeaway:[
    'Name the four things you can change, and what each one really fixes.',
    'Explain why fine-tuning is the wrong tool for “it does not know our new policy”.',
    'Say what has to exist before the question can be answered at all.'
  ],
  red:['Reaching for fine-tuning to fix a knowledge gap','Choosing a fix before naming the failure'],
  capstone:{
    title:'The tuning proposal, answered with evidence',
    brief:'Somebody will propose fine-tuning, and it will sound like the serious answer. Your job is to find out which of the four kinds of failure they actually have — and to cost the proposal honestly, including the part nobody puts on the slide.',
    steps:[
      'Collect twenty real failures from something you run, and sort them into the four kinds.',
      'Count them. The distribution usually settles the argument before any technical discussion starts.',
      'For the largest group, name the cheapest intervention that would address it, and why it is cheaper.',
      'Cost the tuning proposal properly: data preparation, the training itself, evaluation, and the cost of doing it again every time the base model moves.',
      'Try switching down instead — a smaller or cheaper model with better retrieval — and measure whether quality actually falls.',
      'Write the recommendation in one page, with the failure counts as the argument.',
    ],
    done:[
      'The four-way sort is done on real failures, with counts.',
      'The cost of tuning includes the recurring cost, not just the first run.',
      'You can say what evidence would change your recommendation.',
    ]
  },
  story:[

    ['p','At some point — usually in a roadmap review, usually from the most senior person there — you will be asked: <em>should we fine-tune?</em> It is almost always asked before anyone has said what is actually wrong. Saying yes commits a quarter. Saying no sounds unambitious. The good answer is neither, and this chapter is how you earn it.'],
    ['p','There are four things you can change: <strong>the instructions</strong>, <strong>the evidence you give it</strong>, <strong>training it on your own examples</strong>, and <strong>which model you use</strong>. Learn them in that order, because the order is the advice.'],
    ['pred',{id:'ch19-lever',rows:3,ph:'Which one, and why',
      ask:'Commit before the table. Your assistant confidently says the refund window is 30 days. The correct figure, published last month, is 45. Which of the four fixes it — and which one will a room full of people reach for?',
      reveal:'Better evidence. The system does not have the current policy, so it is producing a plausible number from what it absorbed in training, exactly as Chapter 2 said it would. The room will often reach for training it on examples, because “teach the model our policies” sounds like the shape of the problem. It is not: a trained model needs retraining the next time the number changes, and it still cannot show the user where 45 came from.',
      then:'This is the single most common misdiagnosis in this field, and it is expensive exactly because the wrong answer sounds so reasonable.'}],
    ['tb',['What you change','What it really fixes','What it cannot fix','Cost to try, and to undo'],[
      ['Instructions','Format, tone, when to refuse, how the task is framed','Missing knowledge; genuine reasoning limits','Minutes. Undone instantly'],
      ['Evidence','Missing, changing or private knowledge; citations','Behaviour and format problems','Days. Undone by rebuilding the index'],
      ['Training on examples','Consistent shape and register, cheaply; a small model doing one job well','Facts that change; bad retrieval','Weeks, plus upkeep forever. Not undone — retrained'],
      ['A different model','Reasoning depth, speed, cost per query','Bad evidence. A better model reasons better over the wrong document','Hours, but it reopens every measurement you have']
    ]],
    ['q','I138','I139'],
    ['do','Sort real failures into the four kinds',[
      ['p','No notebook this chapter. Open your error taxonomy from Chapter 14 — or, if you do not have one yet, ten real outputs from any AI feature you use daily.'],
      ['p','Against each failure, write one of four letters: <strong>K</strong> (does not know), <strong>B</strong> (behaves wrong), <strong>R</strong> (cannot work it out), <strong>E</strong> (uneconomic). Force a single letter even when it is hard; the hard ones are the interesting ones.'],
      ['x','A lopsided distribution. Almost every real taxonomy is dominated by K and B, which is why retrieval and prompting carry most of the improvement in most products — and why tuning proposals so often fail to move the number they promised.']
    ]],
    ['key','Training on examples teaches behaviour, not facts. If the complaint is “it does not know our policy”, that is the wrong instrument — and it is the one most often reached for, because installing knowledge is exactly what it sounds like it should do.'],
    ['p','So the useful question is never <em>which fix</em>. It is <em>what kind of wrong is this?</em> There are four kinds, and each one points at its own fix:'],
    ['l',[
      '<strong>It does not know.</strong> The answer is missing, out of date, or invented. → Evidence, and version your documents (Chapter 12).',
      '<strong>It knows, but behaves wrong.</strong> Right content, wrong shape, wrong register, ignores a rule. → Instructions first, a required format second (Chapter 8), training only if those stop helping.',
      '<strong>It cannot work it out.</strong> Several steps of logic, dependent arithmetic, genuine ambiguity. → Let it think, or use a stronger model (Chapter 11).',
      '<strong>It is right but too expensive.</strong> Too slow or too costly at your volume. → A smaller model, or cheap-first routing (Chapter 15).'
    ]],
    ['q','I140'],
    ['do','Cost the tuning proposal honestly',[
      ['p','Take the most plausible tuning candidate from your list and write the full cost, not the training bill: how many labelled examples, who writes them, who maintains them when the product changes, what eval proves it worked, and what happens to all of it when the base model is deprecated in eighteen months.'],
      ['x','A number several times larger than the one in the vendor’s pricing page — and, more usefully, a list of owners. A tuning proposal with no named owner for dataset maintenance is a proposal to build something that decays.']
    ]],
    ['p','Notice what that diagnosis needs: a named failure with a count behind it. Which is Chapter 14’s list, doing the job it was built for. Without one, this conversation is a contest of intuitions, and the most senior intuition wins.'],
    ['try',{id:'ch19-diagnose',mins:6,min:60,rows:5,
      task:'Diagnose something real. Take a failure you have actually seen in an AI feature — yours, or one you use. Write what the user saw, then say which of the four kinds of wrong it is, then name the fix. Then write the one measurement that would prove you picked right.',
      ph:'the user saw … kind of wrong … the fix … I would know I was right if …',
      after:'The classification is the whole exercise, and it is harder than it looks because failures arrive mixed together. “It gave a confident wrong figure” could be any of the four until you look at what was retrieved. Right passage retrieved and misread: behaviour or reasoning. Wrong passage retrieved: nothing but better retrieval helps. Right passage not in the collection at all: the fix is upstream of everything in this course. And the measurement matters as much as the diagnosis — “the right passage is retrieved 9 times in 10 instead of 6” is a claim someone can check. “It feels better” is not.'}],
    ['p','What training on examples really buys, because it does buy real things: <strong>consistency</strong> — the same structure and register across thousands of outputs, more reliably than any instruction; a <strong>small model doing a narrow job</strong> about as well as a large one, which is where most of the money is; and conventions that are tedious to describe but easy to demonstrate, like house style.'],
    ['p','And the costs nobody puts in the proposal: examples somebody must build and then <em>keep</em>; a test set that has to already exist, or you cannot tell whether it helped; a full re-run every time the base model is retired — Chapter 18’s treadmill, now with your training data attached; and a quiet loss of portability, because your improvement now lives inside one provider’s artefact instead of in your prompt and your index.'],
    ['q','I141'],
    ['do','Try switching down',[
      ['p','Pick the narrowest, highest-volume task in your product — routing, classification, extraction, a short summary. Estimate its share of total query volume, then compute what it would cost on a model one or two tiers cheaper using the Chapter 15 model above.'],
      ['x','Frequently the largest single saving available to you, sitting in the least glamorous part of the product. This is the lever that most teams never test.']
    ]],
    ['c','The order that works','Instructions, then evidence, then training, then a different model — measuring after each. Not out of caution: the first two are undoable in hours, so ruling them out is cheap, while the third commits you to maintenance for as long as the feature lives.'],
    ['p','One of the four has quietly become the most consequential, and it points the opposite way from where teams look. <strong>Going smaller</strong> — a cheaper, faster model, often trained to copy a larger one on your task — is where the economics of a high-volume feature are decided. A narrow, repetitive, high-volume job with a time limit is exactly where a small model wins, and exactly what nobody tests, because the expensive one was already working.'],
    ['lab','costmodel'],
    ['q','I143'],
    ['key','Every one of the four is a change whose effect is invisible without a test set. So this chapter is not really about fine-tuning. It is about the fact that a team with an answer key can settle “should we fine-tune?” in a week, and a team without one cannot settle it at all.'],
    ['q','I142']
  ],
},
{

  id:'ch20', num:20, part:4, minutes:30, labs:[],
  title:'What the user sees when it is wrong',
  concept:'At ninety percent accuracy, one answer in ten is wrong. Whether the feature is usable is decided by what the screen does about that one.',
  needs:[
    ['Making it quote the source is what makes checking cheap','A quote beats a confidence number.',8],
    ['The slow end is the one users feel','Not the average response time.',11],
    ['A kill switch is not a rollback','Rolling back code does not undo a behaviour both versions share.',18],
  ],
  takeaway:[
    'Explain why a feature that is wrong one time in ten can still be trusted.',
    'Say what to do with a confidence score, and why printing it is the wrong answer.',
    'Explain what has to exist underneath a kill switch for it to be usable.'
  ],
  red:['An uncertain answer shown with a certain interface','Citations that do not open the passage','A feedback button that collects nothing usable'],
  capstone:{
    title:'The four states, designed',
    brief:'Most AI features have one interface for four different situations, which is why a confident wrong answer looks exactly like a confident right one. Design the states properly for something real, and time how long a correction actually takes.',
    steps:[
      'Audit an AI feature you use every day. Note what it shows when it is confident, unsure, wrong, and unable to answer.',
      'Pick a feature you own or could own, and write the four states out: what the user sees, and what they can do next, in each.',
      'Design the “I cannot answer this” state as a real route to a person, not a dead end.',
      'Make uncertainty visible without making it noise — decide what the interface shows when confidence is middling.',
      'Time the correction: from a user noticing something is wrong to it being fixed, count every step and every hand-off.',
      'Write down which of the four states your current design silently merges, and what that costs the user.',
    ],
    done:[
      'All four states are specified, including what the user can do in each.',
      'The correction path is timed end to end, with the slowest step identified.',
      'You can name the state your product currently handles worst and what you would change first.',
    ]
  },
  story:[

    ['p','Everything so far has been about making the machine right more often. This chapter is about the rest of the time — and the rest of the time is not a rounding error. At ninety percent accuracy, one interaction in ten is wrong, and no amount of engineering removes the category. What decides whether the feature is usable is what the screen does about that one.'],
    ['p','That is a design problem, and it is yours. An engineer can tell you a confidence number exists. Nobody but the person who owns the product decides what the user sees when it is low.'],
    ['key','Never show an uncertain answer with a certain interface. Most AI features that feel untrustworthy are not less accurate than their rivals. They just show a wrong answer in exactly the same way they show a right one.'],
    ['p','There are four things to get right. A feature that does all four can be wrong one time in ten and still be trusted. One that does none is distrusted at ninety-five percent accuracy, and correctly so.'],
    ['p','<strong>One: show the evidence.</strong> A link that opens the actual passage lets a user check the claim in three seconds. That is the whole reason Chapter 8 asked the model to quote its source. It also sets the standard for what does not count: a citation naming a document it does not open buys the <em>appearance</em> of being checkable while removing the ability to check — worse than showing nothing, because the user cannot tell the difference until it matters.'],
    ['q','I144'],
    ['do','Audit an AI feature you use daily',[
      ['p','Pick one — a search assistant, an email drafter, a coding assistant, anything. Ask it something it will get wrong, deliberately, at the edge of what it knows.'],
      ['p','Then answer four questions in writing. Could you check the claim, and how many seconds did it take? Did the interface treat the wrong answer differently from a right one in any way at all? What could you do about it? And what happened to your correction?'],
      ['x','Most well-known products fail at least two of the four. Note which — this is the standard your own feature will be held to by users who have used those products.']
    ]],
    ['p','<strong>Two: speed is interface, not plumbing.</strong> Chapter 11 gave you the slow end as a cost. Here it is a design material. Streaming works for prose because prose reads left to right, so a half-arrived answer is already useful. That does not extend to everything: a number that appears and then changes as generation continues is worse than a spinner, because the user has already read it — and may already have acted on it.'],
    ['q','I145'],
    ['pred',{id:'ch20-conf',short:true,ph:'What you would do with it',
      ask:'Commit before reading on. Your model returns a confidence score with every answer. What do you do with it in the interface?',
      reveal:'Use it to decide what the product does. Do not print it. A percentage next to an answer hands a judgement to someone with no way to calibrate it, and the model’s own confidence is often poorly calibrated anyway. Used internally it changes behaviour: answer directly, show the evidence first, ask a clarifying question, or hand it to a person.',
      then:'Confidence is not a label. It is a set of choices — an editable field instead of a fixed one, a draft instead of something already sent, a question instead of a guess.'}],
    ['q','I146'],
    ['do','Write the four states',[
      ['p','For one feature you own, write what the user sees in each of four states: confident answer, low-confidence answer, refusal, and AI path disabled. Actual screen content, not a description of a philosophy.'],
      ['x','The third and fourth are the hard ones, and the ones that do not exist in most specs. If you cannot write them, they do not exist in the product either — they are whatever the code happens to do.']
    ]],
    ['p','<strong>Three: make correcting it easy.</strong> When the system is wrong, what the user does next is simultaneously your most valuable data and the thing most products throw away. A thumbs-down records that something was wrong and nothing about what.'],
    ['p','A correction path earns its place when it captures what the user expected <em>instead</em>, keeps the evidence the system was working from, and is faster than giving up and doing the task by hand. That last condition fails silently: if correcting takes longer than the workaround, nobody corrects, and you read an empty feedback table as satisfaction.'],
    ['q','I147'],
    ['do','Time the correction',[
      ['p','Measure, with a clock: how long does correcting a wrong output take, versus doing the task manually from scratch? Do it three times.'],
      ['x','If correcting is slower, your feedback table will stay empty and you will misread that as satisfaction. This single measurement explains most “our users never give feedback” conversations.']
    ]],
    ['c','The thumbs-down that teaches nothing','Two products, same model, same retrieval. One logs a thumbs-down. The other logs the answer, what was retrieved, the question, and one line: “what did you expect instead?” The second has a list of real failure types within a fortnight and a roadmap built from its own traffic. The first has a number that goes down and no idea why.'],
    ['try',{id:'ch20-correct',mins:6,min:60,rows:5,
      task:'Design the correction path for a feature you know. What exactly does the user do when the output is wrong, what does that action capture, and how long does it take compared with just doing the task by hand? Then write the test case it would produce.',
      ph:'the user … we capture … it takes … versus … the test case would be …',
      after:'A good design makes correcting the fast path rather than a civic duty. Letting the user edit the output in place, and treating the edit itself as the signal, beats any rating widget: they were going to fix it anyway, so it costs them nothing and you learn the expected answer exactly. Capture the question, the evidence, the output and the correction together — without the evidence you know the answer was wrong but not whether retrieval or generation caused it, which is exactly the distinction Chapter 19 needs.'}],
    ['p','<strong>Four: design the refusal.</strong> Every system looks impressive when it works, so trust is not won on the successful answer. It is won on the screen that says <em>I do not have that</em> — a screen designed last, or not at all, in most AI products.'],
    ['key','A system that says “I cannot answer this” and offers a route to a person is trusted more, and rightly, than one that always produces something. Users calibrate on refusals. A feature that never refuses teaches them that its confidence means nothing.'],
    ['q','I148'],
    ['p','And one more thing, which is not a design choice but a floor: what the feature does when the AI is switched off. Chapter 18 separated a rollback from a kill switch; this is the consequence. A kill switch is only usable if there is something underneath it — search without generated answers, a form without extraction, a queue without routing. If turning the AI off leaves a blank screen, you do not have a kill switch. You have a single point of failure with a switch attached.'],
    ['q','I149']
  ],
},
{
  id:'ch205', num:20.5, part:4, minutes:25, labs:[],
  title:'Proving it helped',
  concept:'System quality and business impact are different measurements, and the course has so far only taught the first.',
  needs:[
    ['You can measure the system','Recall, precision, judges, per-class counts.',14],
    ['The interface has four states','What the user sees decides whether quality reaches them.',20],
  ],
  takeaway:[
    'Design a pilot that could actually show the feature did not help.',
    'Name the one number the business cares about, and how the feature would move it.',
    'Explain why a measurably good system can produce no measurable benefit.'
  ],
  story:[
    ['c','Before you start','No code. Bring a feature you have measured — yours or one from the course — and the name of whoever pays for it.'],

    ['p','Everything the course has measured so far is the system: is the retrieval right, is the judge trustworthy, is the classifier accurate per class. All necessary. None of it answers the question that gets the next round of funding.'],
    ['key','A system can be 94 per cent accurate and change nothing, because nobody uses it, or because the thing it accelerates was never the slow part.'],

    ['do','Find the slow part before you speed anything up',[
      ['p','Take the workflow your feature sits inside and time it, honestly, end to end. Every step, including the waiting-for-someone-else steps.'],
      ['x','The AI step is almost never the biggest number. Very often the largest block is waiting for a person, or a handover between two systems, and a feature that makes a four-minute step into a one-minute step inside a three-day process has done nothing anyone will notice.'],
      ['key','This is the cheapest study in the whole course and it is the one most often skipped, because it can tell you not to build the thing.']
    ]],

    ['p','If the step you are accelerating is genuinely on the critical path, then you can design a pilot. A pilot is not a launch with a smaller audience. It is a question with a stated answer that would disappoint you.'],
    ['n',[
      '<strong>The number.</strong> One measure the business already tracks — handling time, first-contact resolution, backlog age, error rate. Not a new metric invented for this.',
      '<strong>The comparison.</strong> Same team before and after is weak; two comparable groups over the same period is much stronger, and usually possible.',
      '<strong>The floor.</strong> The movement below which you would call it a failure, written down before you start.',
      '<strong>The window.</strong> Long enough for novelty to wear off. The first two weeks of any tool flatter it.'
    ]],

    ['do','Write the disappointing result in advance',[
      ['p','Before running anything, write the sentence you would have to say if the pilot showed no effect. Actually write it, in the words you would use to the person who funded it.'],
      ['x','Two things fall out. You discover whether you have the floor number at all — most pilots do not. And you find out whether the pilot could ever have produced that sentence, or whether it was designed so every outcome reads as success.'],
      ['key','A pilot that cannot fail is not a pilot. It is a launch with a nicer name, and everyone in the room knows it.']
    ]],
    ['try',{id:'ch205-adopt',mins:5,min:50,rows:3,
      task:'Your pilot shows the system works well and the business number does not move. Write the three explanations you would investigate first, in the order you would check them.',
      ph:'1 … 2 … 3 …',
      after:'The order that usually pays: first, are they using it — adoption is the commonest answer and the easiest to check. Second, does the output arrive where the decision is made, or in a separate tool somebody has to remember to open. Third, was the step you accelerated actually on the critical path. Only after those three is it worth questioning the system quality, which is the one most teams check first because it is the one they know how to measure.'}],
    ['q','I102'],

    ['p','That is the whole course, and the shape of it is one idea repeated at larger and larger scale: decide what would count as failure, then measure that specific thing, rather than looking at output and forming an impression. You did it to a prompt, to a retriever, to a judge, to a bill, and now to a business case.'],
    ['key','Everything else here is technique. That habit is the transferable part, and it will outlast every model named in these chapters.']
  ],
  capstone:{
    title:'The pilot, designed so it could fail',
    brief:'Design a pilot for a real feature — with a number the business already tracks, a comparison, a floor, and a window. Then get somebody senior to agree the floor before it runs.',
    steps:[
      'Time the whole workflow end to end and mark where your feature sits. If it is not on the critical path, say so and stop here.',
      'Choose the business number. It must be one that already exists and that somebody already looks at.',
      'Design the comparison: which two groups, over which period, and what makes them comparable.',
      'Write the floor — the movement below which you would call this a failure — and the window before you would judge.',
      'Write the disappointing sentence in advance, in the words you would say to whoever funded it.',
      'Get the person who funds it to agree the floor <em>before</em> the pilot runs, in writing.'
    ],
    done:[
      'The number is one the business already tracked before you arrived.',
      'The floor is agreed in writing by the person who would be disappointed by it.',
      'You can describe an outcome that would make you recommend switching the feature off.'
    ]
  }
}

];

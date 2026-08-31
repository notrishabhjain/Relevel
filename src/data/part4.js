/* Part IV — The decisions that outlive the architecture.

   Parts I to III build a machine and the instruments to judge it. These two
   chapters are about the two decisions that survive every rebuild of that
   machine: which lever you reach for when it is not good enough, and what the
   person on the other side of the screen is shown when it is wrong. Both are
   product decisions that no engineer can make for you. */

window.PART4 = [
{
  id:'ch19', num:19, part:4, minutes:55, labs:['costmodel'],
  title:'Prompt, Retrieve, Tune, or Switch',
  concept:'Four levers for making a model fit your problem — and the diagnosis that says which one you actually need.',
  red:['Reaching for fine-tuning to fix a knowledge gap','Choosing a lever before naming the failure'],
  story:[
    ['p','At some point — usually in a roadmap review, usually from the most senior person present — you will be asked: <em>should we fine-tune?</em> It is almost always asked before anyone has said what is actually wrong, which is what makes it hard to answer well. Answering <em>yes</em> commits a quarter. Answering <em>no</em> sounds unambitious. The professional answer is neither, and this chapter is how you earn it.'],
    ['p','There are four levers for making a general model fit your particular problem. They are worth learning in order, because the order is the advice:'],
    ['n',[
      '<strong>Prompt.</strong> Change the instructions. Minutes to try, free to undo, and you can measure it this afternoon.',
      '<strong>Retrieve.</strong> Put the right evidence in the envelope. Days to build, and everything in Parts I and II is about doing it well.',
      '<strong>Tune.</strong> Train the model on examples of the behaviour you want. Weeks, a dataset you must build and keep, and a dependency you now own.',
      '<strong>Switch.</strong> A different model — larger, smaller, reasoning, or distilled. Hours to try, but it re-opens every measurement you have.'
    ]],
    ['pred',{id:'ch19-lever',rows:3,ph:'Which lever, and why',
      ask:'Commit before the table. Your assistant confidently quotes a refund window of 30 days. The correct figure, published last month, is 45. Which lever fixes it, and which lever would a room full of people most likely reach for?',
      reveal:'Retrieval. The system does not have the current policy; it is producing a plausible number from training data, exactly as Chapter 2 said it would. The room will often reach for fine-tuning, because “teach the model our policies” sounds like the shape of the problem. It is not: a tuned model has to be retrained the next time the number changes, and it still cannot show the user where 45 came from.',
      then:'This is the single most common misdiagnosis in applied AI, and it is expensive precisely because the wrong lever looks reasonable.'}],
    ['tb',['Lever','What it genuinely fixes','What it cannot fix','Reversible?'],[
      ['Prompt','Format, tone, refusal behaviour, task framing','Missing knowledge; genuine reasoning limits','Instantly'],
      ['Retrieve','Missing, changing or private knowledge; citations','Behaviour and format problems','Yes — reindex'],
      ['Tune','Consistent behaviour, format and register at lower cost; a small model doing one job well','Facts that change; retrieval quality','No — retrain'],
      ['Switch','Reasoning depth, latency, unit cost','Bad evidence. A better model reasons better over the wrong chunk']
    ]],
    ['q','I138','I139'],
    ['key','Fine-tuning teaches behaviour, not facts. If the complaint is “it does not know our policy,” tuning is the wrong instrument — and it is the one most often reached for, because installing knowledge is what it sounds like it should do.'],
    ['p','So the useful question is never <em>which lever</em>. It is <em>what kind of wrong is it?</em> There are four kinds, and each has an owner:'],
    ['l',[
      '<strong>It does not know.</strong> The answer is absent, outdated, or invented. → Retrieval, and version your corpus (Chapter 12).',
      '<strong>It knows, but behaves wrong.</strong> Right content, wrong shape, wrong register, ignores a constraint. → Prompt first, schema second (Chapter 8), tuning only if those plateau.',
      '<strong>It cannot work it out.</strong> Multi-step logic, dependent arithmetic, genuine ambiguity. → A reasoning budget or a stronger model (Chapter 11).',
      '<strong>It is right but uneconomic.</strong> Too slow or too expensive at your volume. → A smaller or distilled model, or a cascade (Chapter 15).'
    ]],
    ['q','I140'],
    ['p','Notice what that diagnosis requires: a named failure with a count behind it. Which is Chapter 14’s error taxonomy, doing the job it was built for. Without one, this conversation is a contest of intuitions, and the most senior intuition wins.'],
    ['try',{id:'ch19-diagnose',mins:6,min:60,rows:5,
      task:'Diagnose something real. Take a failure you have actually seen in an AI feature — yours or one you use. Write what the user saw, then classify it into one of the four kinds of wrong, then name the lever. Then write the one measurement that would prove you picked the right lever.',
      ph:'the user saw … kind of wrong … lever … I would know I was right if …',
      after:'The classification is the whole exercise, and it is harder than it looks because failures arrive mixed. “It gave a confident wrong figure” could be any of the four until you look at the retrieved evidence: if the right chunk was retrieved and the model misread it, that is behaviour or reasoning; if the wrong chunk was retrieved, no lever except retrieval will help; if the right chunk does not exist in the corpus, the fix is upstream of everything in this book. The measurement matters as much as the diagnosis — “retrieval hit rate on this question class rises from 6/10 to 9/10” is a claim someone can check, and “it feels better” is not.'}],
    ['p','Now the honest account of what tuning genuinely buys, because it does buy real things and this chapter is not an argument against it. It produces <strong>consistency</strong> — the same structure, register and conventions across thousands of outputs, more reliably than any prompt. It lets a <strong>smaller model do a narrow job</strong> about as well as a large one, which is where most of the money is. And it can encode conventions that are tedious to specify and easy to demonstrate: house style, a domain’s phrasing, the shape of a good summary in your particular business.'],
    ['p','And the costs nobody puts in the proposal: a labelled dataset that someone must build and then <em>keep</em>; an eval that must already exist, or you cannot tell whether tuning helped; a re-run of the whole exercise every time the base model is deprecated — Chapter 18’s treadmill, now with your training data attached to it; and a quiet loss of portability, because your improvement now lives in one provider’s artefact rather than in your prompt and your index.'],
    ['q','I141'],
    ['c','The order that works','Prompt, then retrieve, then tune, then switch — and measure after each. Every step skipped is a step you come back to later with less budget and more scar tissue. The reason is not caution: it is that the first two are reversible in hours, so ruling them out is cheap, while the third commits you to maintenance you will own for as long as the feature lives.'],
    ['p','One more lever has quietly become the most consequential of the four, and it points the opposite way from where teams usually look. <strong>Switching down</strong> — a smaller, faster, cheaper model, often distilled from a larger one on your own task — is where the economics of a high-volume feature are decided. Chapter 15 gave you the arithmetic; this is the design pattern. A narrow, repetitive, high-volume task with a latency budget is exactly the shape where a small model wins, and the shape most people never test because the frontier model was already working.'],
    ['lab','costmodel'],
    ['q','I143'],
    ['key','Every one of these four levers is a change whose effect is invisible without an eval. This chapter is therefore not really about tuning. It is about the fact that a team with ground truth can answer “should we fine-tune?” in a week, and a team without it cannot answer it at all.'],
    ['q','I142']
  ],
  words:[
    ['Fine-tuning','Continuing a model’s training on your own input–output examples so it adopts a behaviour. Teaches shape and register, not durable facts.'],
    ['Distillation','Training a small model to imitate a large one on a narrow task. Most of the quality at a fraction of the cost and latency.'],
    ['Adaptation','The general act of making a general model fit a particular problem — by prompt, retrieval, tuning, or model choice.'],
    ['Portability','Whether an improvement survives changing providers. A better prompt and index travel; a tuned artefact does not.'],
    ['Diagnosis','Naming which of the four kinds of wrong you have, with counts, before choosing a lever.']
  ],
  handson:[
    {h:'Step 1 — Sort real failures into the four kinds',b:[
      ['p','No notebook this chapter. Open your error taxonomy from Chapter 14 — or, if you do not have one yet, ten real outputs from any AI feature you use daily.'],
      ['p','Against each failure, write one of four letters: <strong>K</strong> (does not know), <strong>B</strong> (behaves wrong), <strong>R</strong> (cannot work it out), <strong>E</strong> (uneconomic). Force a single letter even when it is hard; the hard ones are the interesting ones.'],
      ['x','A lopsided distribution. Almost every real taxonomy is dominated by K and B, which is why retrieval and prompting carry most of the improvement in most products — and why tuning proposals so often fail to move the number they promised.']
    ]},
    {h:'Step 2 — Cost the tuning proposal honestly',b:[
      ['p','Take the most plausible tuning candidate from your list and write the full cost, not the training bill: how many labelled examples, who writes them, who maintains them when the product changes, what eval proves it worked, and what happens to all of it when the base model is deprecated in eighteen months.'],
      ['x','A number several times larger than the one in the vendor’s pricing page — and, more usefully, a list of owners. A tuning proposal with no named owner for dataset maintenance is a proposal to build something that decays.']
    ]},
    {h:'Step 3 — Try switching down',b:[
      ['p','Pick the narrowest, highest-volume task in your product — routing, classification, extraction, a short summary. Estimate its share of total query volume, then compute what it would cost on a model one or two tiers cheaper using the Chapter 15 model above.'],
      ['x','Frequently the largest single saving available to you, sitting in the least glamorous part of the product. This is the lever that most teams never test.']
    ]}
  ],
  wrong:[
    ['“We fine-tuned and accuracy did not move”','The failure was a knowledge or retrieval gap, not a behavioural one','Re-run the diagnosis; check whether the right chunk was retrieved on the failing cases'],
    ['“The tuned model got worse at everything else”','Narrow tuning on a narrow set; capability outside the set degraded','Evaluate on the full suite, not only the tuned task — this is why the eval must predate the tuning'],
    ['“It worked, then broke three months later”','Base model deprecated, or the tuning data went stale as the product changed','Own the retraining cycle explicitly, with the deprecation treadmill from Chapter 18']
  ],
  homework:[
    ['The one-page diagnosis','For the AI feature closest to you: the top three failure clusters with counts, the kind of wrong each is, the lever, and the measurement that would prove the lever worked. One page, no adjectives.'],
    ['The switching-down estimate','Find the narrowest high-volume task in your product and price it on a cheaper model. Write what you would have to measure before you would trust the swap.'],
    ['The reply you will need','Write, and keep, the four sentences you would say when someone senior asks why you are not fine-tuning. You will use them.']
  ],
  check:[
    ['Why is fine-tuning the wrong tool for “the assistant does not know our new policy”?','Because tuning teaches behaviour, and a policy is a fact that changes. A tuned model would have to be retrained the next time the number moves, and it still could not show the user where the number came from. Changing knowledge belongs in retrieval, where it can be versioned, updated and cited.'],
    ['What must exist before “should we fine-tune?” can be answered at all?','An eval suite with ground truth you trust, and a named failure with counts from real traffic. Without the first you cannot tell whether tuning helped; without the second you do not know what you are fixing. Everything else is a contest of intuitions.'],
    ['Name the four kinds of wrong and the lever each one calls for.','Does not know → retrieval. Knows but behaves wrong → prompt, then schema, then tuning. Cannot work it out → reasoning budget or a stronger model. Right but uneconomic → a smaller or distilled model, or a cascade.'],
    ['What does a tuning proposal cost beyond the training bill?','A labelled dataset someone must build and maintain, an eval that must already exist, a full re-run every time the base model is deprecated, and the portability you lose by moving your improvement from your prompt and index into one provider’s artefact.']
  ]
},

{
  id:'ch20', num:20, part:4, minutes:55, labs:[],
  title:'The Interface Contract',
  concept:'Your users cannot see your evals. What they can see is the only thing that makes an uncertain system usable.',
  red:['Presenting an uncertain output with a certain interface','Citations that do not resolve','A feedback control that collects nothing usable'],
  story:[
    ['p','Everything up to here has been about making the machine right more often. This chapter is about the rest of the time — and the rest of the time is not a residual. At 90% accuracy, one interaction in ten is wrong, and no amount of further engineering removes the category. What decides whether the feature is usable is not the ten percent; it is what the interface does about it.'],
    ['p','That is a design problem, and it belongs to you. An engineer can tell you the confidence score exists. Nobody but the person who owns the product can decide what the user sees when it is low.'],
    ['key','Never present an uncertain output with a certain interface. Most AI features that feel untrustworthy are not less accurate than their rivals; they simply show a wrong answer in exactly the same way they show a right one.'],
    ['p','The contract has four clauses, and a feature that honours all four can be wrong ten percent of the time and still be trusted. One that honours none is distrusted at ninety-five percent accuracy, and correctly so.'],
    ['p','<strong>Clause one: show the evidence.</strong> An answer with a citation that opens the actual passage lets a user check in three seconds. This is the whole reason Chapter 8 asked for a quote field. It also sets the standard for what does not count: a citation that names a document but does not resolve to the passage buys the <em>appearance</em> of verifiability while removing the ability to verify — which is worse than showing nothing, because the user cannot tell the difference until it matters.'],
    ['q','I144'],
    ['p','<strong>Clause two: latency is interface, not infrastructure.</strong> Chapter 11 gave you p95 as a cost. Here it is a design material. Streaming works because prose reads left to right, so a partial answer is usable while it arrives. But that property does not extend to everything: a number that appears and then changes as generation continues is worse than a spinner, because the user has already read it — and may already have acted on it.'],
    ['q','I145'],
    ['pred',{id:'ch20-conf',short:true,ph:'What you would do with it',
      ask:'Commit before reading on. Your model returns a confidence score with every answer. What do you do with it in the interface?',
      reveal:'Route on it — do not print it. A percentage next to an answer hands the judgement to a user with no way to calibrate it, and model-reported confidence is often poorly calibrated anyway. Used internally it changes what the product <em>does</em>: answer directly, show evidence first, ask a clarifying question, or hand to a human.',
      then:'Confidence is not a label. It is a set of affordances — an editable field instead of a fixed one, a draft state instead of a sent one, a question instead of a guess.'}],
    ['q','I146'],
    ['p','<strong>Clause three: the correction path.</strong> When the system is wrong, what a user does next is simultaneously your most valuable data and the thing most products throw away. A thumbs-down records that something was wrong and nothing about what — Chapter 18 called it the wasted asset, and here is where it is wasted.'],
    ['p','A correction path earns its place when it captures what the user expected <em>instead</em>, keeps the evidence the system was working from, and is genuinely faster than abandoning the feature and doing the task by hand. That last condition is the one that fails silently: if correcting takes longer than the workaround, nobody corrects, and you conclude from an empty feedback table that the feature is fine.'],
    ['q','I147'],
    ['c','The thumbs-down that teaches nothing','Two products, same model, same retrieval. One logs a thumbs-down. The other logs the answer, the retrieved chunks, the query, and a one-line “what did you expect instead?” The second one has an error taxonomy within a fortnight and a roadmap derived from its own traffic. The first has a number that goes down and no idea why.'],
    ['try',{id:'ch20-correct',mins:6,min:60,rows:5,
      task:'Design the correction path for a feature you know. What exactly does the user do when the output is wrong, what does that action capture, and how long does it take compared with just doing the task manually? Then write the eval case it would produce.',
      ph:'the user … we capture … it takes … versus … the eval case would be …',
      after:'A strong design makes correcting the fast path rather than a civic duty. Inline editing of the generated output, with the edit itself as the signal, beats any rating widget: the user was going to fix it anyway, so the cost is zero and you learn the expected answer exactly. Capture the query, the retrieved evidence, the output and the correction together — a correction without the evidence tells you the answer was wrong but not whether retrieval or generation caused it, which is the distinction Chapter 19 needs to pick a lever. And the eval case writes itself: this query, this expected answer, added to ground truth.'}],
    ['p','<strong>Clause four: design the refusal.</strong> Every system looks impressive when it works, so the successful answer is not where trust is won. It is won on the screen that says <em>I do not have that</em> — a screen designed last, or not at all, in most AI products.'],
    ['key','A system that says “I cannot answer this” with a route to a human is trusted more, and rightly, than one that always produces something. Users calibrate on refusals: a feature that never refuses teaches them that its confidence means nothing.'],
    ['q','I148'],
    ['p','And the fifth thing, which is not a clause but a floor: what the feature does when the AI path is switched off. Chapter 18 made the distinction between a rollback and a kill switch; this is the product consequence. A kill switch is only usable if there is something underneath it — search without generated answers, a form without extraction, a queue without routing. If turning the AI off leaves a blank screen, you do not have a kill switch. You have a single point of failure with a switch attached.'],
    ['q','I149']
  ],
  words:[
    ['Interface contract','What the product promises to show at each level of certainty — and what it lets the user do about it.'],
    ['Resolvable citation','A source that opens the actual passage the claim came from, rather than naming a document.'],
    ['Correction path','The route by which a user fixes a wrong output, capturing what they expected and the evidence involved.'],
    ['Refusal state','What is shown when the system has nothing good to say. The screen that decides long-run trust.'],
    ['Graceful degradation','What the feature still does with the AI path turned off. The thing that makes a kill switch usable.']
  ],
  handson:[
    {h:'Step 1 — Audit an AI feature you use daily',b:[
      ['p','Pick one — a search assistant, an email drafter, a coding assistant, anything. Ask it something it will get wrong, deliberately, at the edge of what it knows.'],
      ['p','Then answer four questions in writing. Could you check the claim, and how many seconds did it take? Did the interface treat the wrong answer differently from a right one in any way at all? What could you do about it? And what happened to your correction?'],
      ['x','Most well-known products fail at least two of the four. Note which — this is the standard your own feature will be held to by users who have used those products.']
    ]},
    {h:'Step 2 — Write the four states',b:[
      ['p','For one feature you own, write what the user sees in each of four states: confident answer, low-confidence answer, refusal, and AI path disabled. Actual screen content, not a description of a philosophy.'],
      ['x','The third and fourth are the hard ones, and the ones that do not exist in most specs. If you cannot write them, they do not exist in the product either — they are whatever the code happens to do.']
    ]},
    {h:'Step 3 — Time the correction',b:[
      ['p','Measure, with a clock: how long does correcting a wrong output take, versus doing the task manually from scratch? Do it three times.'],
      ['x','If correcting is slower, your feedback table will stay empty and you will misread that as satisfaction. This single measurement explains most “our users never give feedback” conversations.']
    ]}
  ],
  wrong:[
    ['Users say they “don’t trust it” but cannot say why','Right and wrong answers are presented identically; there is nothing to calibrate on','Differentiate the low-confidence state visually and behaviourally — draft framing, evidence first'],
    ['Feedback table is empty','Correcting costs more than the manual workaround','Make the edit itself the signal; capture the correction from work the user was doing anyway'],
    ['Citations exist but nobody clicks them','They name a document rather than opening the passage','Resolve to the exact chunk, highlighted — the quote field from Chapter 8']
  ],
  homework:[
    ['The four states, written','Confident, unconfident, refusal, AI off. Real screen content for one feature. Take it to a design review and watch which two nobody has considered.'],
    ['The correction stopwatch','Time correction versus manual for one real task, three times. Write the number down. It will change what you build next.'],
    ['One resolvable citation','Find an AI product whose citations actually open the passage. Note what it cost them in interface complexity — and decide whether you would pay it.']
  ],
  check:[
    ['Why can a feature that is wrong one time in ten still be trusted?','Because trust is built on what the interface does about the wrong tenth, not on the nine. If the user can check the claim cheaply, can tell a low-confidence answer from a confident one, can correct it faster than doing it by hand, and sees an honest refusal when there is nothing to say, then being occasionally wrong is a known, manageable property rather than a betrayal.'],
    ['What should you do with a model-reported confidence score?','Route on it, do not print it. A percentage transfers a judgement to someone with no way to calibrate it, and the score is often poorly calibrated anyway. Internally it decides what the product does: answer, show evidence first, ask a clarifying question, or escalate to a human.'],
    ['Why is a citation that names a document worse than no citation at all?','Because it buys the appearance of verifiability while removing the ability to verify. A user who cannot open the passage cannot tell a real citation from a plausible one, and will extend trust that has not been earned.'],
    ['What makes a kill switch usable?','Something underneath it. A kill switch turns off the AI path and must leave a product that still functions — search without generated answers, a form without extraction. If turning it off leaves a blank screen, it is not a kill switch, it is a single point of failure with a switch attached.']
  ]
}

];

/* Track B — Business, growth and shipping.

   From the Applied AI PM playbook (September 2026). Track B comes after the
   technical core (Parts I–V): it takes what you built there to real users, a
   real price and a real job.

   As in Track A, the playbook gives each idea a title and a "Prove it now"
   prompt, so the teaching under each idea is written for this course, in the
   voice CONTENT-GUIDELINES.md §8 describes. The "Build it" tasks, the
   check-yourself questions, the rubric weights and the mastery gate are the
   playbook's own. The running example is still Theme Finder, the tool that
   groups a support team's weekly tickets into themes. */

window.PART7 = [
{
  id:'b1', num:'B1', part:7, curriculumTier:'selective', phase:6, prerequisites:['a4','ch15','ch185'], nextUnits:['b8'], minutes:720, labs:[],
  title:'Business models, pricing and unit economics',
  concept:'Work out who pays for your product, how to charge them, and whether each customer makes or loses money. You will model the real cost of an AI task, compare pricing models, and write a pricing recommendation with its risks.',
  takeaway:[
    'Separate the person who pays from the person who uses the product and the person who can block the purchase.',
    'Compare seat, usage, outcome and hybrid pricing, and say which risk each one moves to whom.',
    'Calculate the cost per successful task, including retries, human review and support.',
    'Tell a real flywheel from a hopeful one, and keep it within what users agreed to.',
    'Name the ways a model vendor can squeeze your margin, and what you would do about each.'
  ],
  needs:[['A sized market and named alternatives','Price is set against what the customer would do instead.','A4'],
         ['Cost per query','The cost stack in Idea 3 starts from it.',15],
         ['Build or buy','Vendor dependence is the other side of that decision.',18.5]],
  capstone:{
    title:'A pricing recommendation, backed by a cost model',
    brief:'Find out what your product is worth to a buyer, what it costs you to serve, and how to charge so the gap stays positive.',
    steps:[
      'Interview five prospects about their current alternatives, who owns the budget, and what the problem costs them. Do not ask “would you pay?”.',
      'Model the cost per successful task at low, base and high usage. Include retries, human review and support time, not only model calls.',
      'Design three pricing packages and a Van Westendorp-style survey plan. Then write a one-page pricing recommendation that lists its risks.'
    ],
    done:[
      'Each interview names the current alternative and who signs off the spend.',
      'The cost model has low, base and high rows, and support time appears as its own line.',
      'The recommendation states the contribution margin at high usage, and what happens if the model price doubles.',
      'Mastery gate: score each artifact 0 (absent), 1 (attempted), 2 (usable) or 3 (decision-grade). Move on only when every artifact scores at least 2 and no evidence item scores 0.'
    ]
  },
  check:[
    ['Who pays, who uses and who blocks the purchase?',
     'Name a role for each. For Theme Finder, the head of support pays, support leads use it every week, and the security lead can block it. They want different things. The user wants time back, the buyer wants a number for their own boss, and the blocker wants to know where the ticket data goes.'],
    ['Can revenue grow faster than inference and support cost?',
     'Check your cost model at high usage. With seat pricing, a team that sends ten times the tickets pays the same while costing you more. If margin falls as usage grows, add included usage with overage, or price per ticket above a threshold.'],
    ['What behaviour strengthens your flywheel without violating trust?',
     'For Theme Finder, a lead correcting a theme label is the behaviour. It improves that customer’s results straight away. Using one customer’s tickets to improve results for another is a different matter. That needs their contract and their consent, so the safe default is to keep each customer’s corrections inside their own account.']
  ],
  story:[
    ['c','Before you start','About twelve hours, spread over several sittings. Have your market sizing from A4 open, and the cost per query numbers from Chapter 15. You will need five prospects to interview, so start booking them now.'],

    ['h','Idea 1: Value and willingness to pay'],
    ['p','A customer pays for a product when it does a job better or cheaper than their current alternative. So the price ceiling comes from that alternative, not from your costs. Your costs only set the floor.'],
    ['p','In B2B products, three different people usually matter:'],
    ['tb',['Role','Theme Finder example','What they care about'],[
      ['User','Support lead','Getting Monday morning back'],
      ['Buyer','Head of support','A number to show their own manager'],
      ['Blocker','Security lead','Where ticket data goes and who can see it']
    ]],
    ['p','Work out value from the alternative. A support lead spends about three hours a week building the ticket report by hand. At $40 an hour, that is about $520 a month for one lead. A tool that saves most of that time is worth a lot less than $520 to the buyer, because it also costs them effort to adopt. It is still worth far more than a few dollars.'],
    ['c','Watch out','Do not ask “would you pay for this?”. People say yes to be polite, and the answer predicts nothing. Ask what they use today, what it costs them, and who approved that spend. Past spending is evidence. Future intentions are not.'],
    ['do','Prove it now',[
      ['p','Fill in the user, buyer and blocker for your capstone. Then estimate what the current alternative costs one customer per month.'],
      ['x','Three roles and one monthly cost, with the working shown. Then write one counterexample: a customer for whom your product saves nothing, because their alternative is already cheap.']
    ]],
    ['q','I601'],

    ['h','Idea 2: Seat, usage, outcome and hybrid pricing'],
    ['p','There are four common ways to charge for an AI product. Each one moves a different risk onto a different party.'],
    ['tb',['Model','You charge for','Good because','Risk'],[
      ['Seat','Each user, per month','Easy for the buyer to budget','Heavy users cost you more but pay the same'],
      ['Usage','Each ticket, call or credit','Revenue follows your cost','Buyers cannot predict the bill, so they ration use'],
      ['Outcome','Each successful result, such as a resolved ticket','Price follows value','You need an agreed, measurable definition of success'],
      ['Hybrid','A platform fee with some usage included, then overage','Predictable, and protects your margin','More complex to explain and sell']
    ]],
    ['p','AI products break the usual seat model. Traditional software costs almost nothing per extra use, so a flat seat price is safe. An AI feature has a real cost every time it runs. One heavy customer on a seat price can wipe out the margin from ten light ones.'],
    ['p','Outcome pricing is attractive, and some support tools already charge per resolved conversation. It only works if you and the customer agree on what counts as an outcome, and you can measure it without arguments.'],
    ['do','Prove it now',[
      ['p','Pick the pricing model you would start with for your capstone. Write one sentence on why, and one on the risk it leaves you with.'],
      ['x','One model, one reason and one risk. Counterexample: describe a customer for whom that model would feel unfair.']
    ]],

    ['h','Idea 3: The AI cost stack and contribution margin'],
    ['p','The cost of an AI feature is more than the model bill. Build the full stack for one customer for one month. Here is the base case for Theme Finder, at 300 tickets a week:'],
    ['code','One customer, one month, 300 tickets a week\n\nModel: classify 1,300 tickets x $0.0004      $0.52\nModel: 4 weekly summaries x $0.05            $0.20\nRetries and re-runs (+15%)                   $0.11\nHosting, database, logging                   $2.00\nSupport: 20 minutes x $30/hour               $10.00\n                                             ------\nTotal cost to serve                          $12.83\n\nReports the lead accepted: 4.3 x 85%          3.7\nCost per successful report                   $3.47'],
    ['p','Two things stand out. First, support time costs more than ten times as much as the model. Second, the useful unit is the <strong>cost per successful task</strong>. A report the lead rejects still cost you money, so divide by the reports that worked.'],
    ['p','<strong>Contribution margin</strong> is what each customer leaves you after the costs that grow with them. At $49 a month, it is ($49 − $12.83) ÷ $49, or about 74%.'],
    ['tb',['Usage','Tickets a week','Cost to serve','Margin at $49'],[
      ['Low','100','$12.43','75%'],
      ['Base','300','$12.83','74%'],
      ['High','3,000','$19.21','61%']
    ]],
    ['key','Always model low, base and high usage. Most margin problems only show up in the high row.'],
    ['do','Prove it now',[
      ['p','Build the base-case cost stack for your capstone, with every line from the example above. Then work out the cost per successful task.'],
      ['x','A cost stack with at least five lines. Counterexample: which line would you be most likely to forget, and how much would it change the total?']
    ]],
    ['try',{id:'b1-margin',mins:10,min:100,rows:6,
      task:'A customer on Theme Finder grows from 300 to 3,000 tickets a week. They stay on the $49 seat plan. Model cost scales with tickets, and support time goes from 20 to 30 minutes a month. Work out their new cost to serve and margin, and say what you would change.',
      ph:'Model cost… support… total… margin… what I would change…',
      after:'Classification becomes 13,000 tickets × $0.0004 = $5.20, plus about $1 for summaries and retries. Hosting rises to about $3 with ten times the data. Support is 30 minutes × $30 = $15. The total is roughly $24, so the margin falls to about 51%. That is still positive, but it keeps falling as they grow. A reasonable fix is a hybrid plan: $49 includes 1,000 tickets a week, and each extra 1,000 tickets a week adds $10 a month. At 3,000 tickets a week they pay $69, so the margin is back to about 65%. The customer’s bill still follows the value they get, and your margin stops falling as they grow.'}],
    ['q','I602'],

    ['h','Idea 4: Data, workflow and platform flywheels'],
    ['p','A <strong>flywheel</strong> is a loop where using the product makes the product better, which brings more use. Three kinds show up in AI products:'],
    ['l',[
      '<strong>Data flywheel.</strong> User corrections improve the model, so results get better with use. This is often weaker than claimed. Improvements flatten out after a few thousand examples, and contracts may stop you pooling data across customers.',
      '<strong>Workflow flywheel.</strong> The product becomes part of a weekly routine, and other work starts to depend on it. For Theme Finder, the Monday report feeds the product team’s planning meeting. This is usually the strongest kind.',
      '<strong>Platform flywheel.</strong> Other people build on your product, which makes it more useful to everyone. It is rare, and it needs a lot of users first.'
    ]],
    ['c','Why this matters','A flywheel that relies on customer data only works while customers trust you with it. Say clearly what you store, what you train on and who can see it. Get consent before using one customer’s data to improve results for another.'],
    ['do','Prove it now',[
      ['p','Name the one user behaviour that would make your capstone better with use. Say which type of flywheel it drives.'],
      ['x','One behaviour and its flywheel type. Counterexample: a situation where that behaviour would make the product worse, such as corrections from a careless user.']
    ]],

    ['h','Idea 5: Vendor dependence and gross-margin risk'],
    ['p','If your product runs on another company’s model, that company can change your costs and your quality without asking you. <strong>Gross margin</strong> is revenue minus the direct cost of delivering the product. For AI products, a big part of that cost is the model vendor’s bill.'],
    ['tb',['What the vendor can do','What it does to you','What you can do now'],[
      ['Raise prices','Margin falls overnight','Keep a second model tested on your eval set'],
      ['Retire a model','Quality changes when you migrate','Pin model versions; plan migrations early'],
      ['Change rate limits','Customers hit errors at busy times','Add queues and a fallback model'],
      ['Launch a competing feature','Your product looks redundant','Own the workflow and the customer relationship']
    ]],
    ['p','You cannot remove this risk, but you can price it in. Your recommendation should say what happens to your margin if the model price doubles, and how long it would take you to switch.'],
    ['do','Prove it now',[
      ['p','Recalculate your base-case margin with the model price doubled. Then estimate how many days it would take to switch to a second vendor.'],
      ['x','One new margin figure and one switching estimate. If you cannot estimate the switch, you are missing a vendor-neutral eval set. Chapter 33 covers vendor exit.']
    ]],
    ['q','I603'],
    ['try',{id:'b1-rec',mins:12,min:150,rows:7,
      task:'Write the first paragraph of your pricing recommendation. Include the price, the pricing model, the margin at high usage and the biggest risk.',
      ph:'I recommend… because… at high usage… the biggest risk is…',
      after:'A strong opening: <strong>I recommend a hybrid plan at $49 per team per month, including 1,000 tickets a week, with $10 a month for each extra 1,000 tickets a week.</strong> Our alternative is three hours of a support lead’s time a week, about $520 a month, so the price is well under the value. The contribution margin is 74% at base usage and stays above 60% at high usage because of the overage. The biggest risk is model price. If it doubles, the base margin falls to about 72%, and switching to our tested second model takes about a week.'}]
  ]
},

{
  id:'b2', num:'B2', part:7, curriculumTier:'reference', phase:0, prerequisites:['a3','a4','a7'], nextUnits:['b3'], minutes:720, labs:[],
  title:'Growth, onboarding and product marketing',
  concept:'Work out how people find your product, get value from it quickly and come back. You will define the events for each growth stage, test onboarding with real users, and design one growth loop you would be comfortable defending in public.',
  takeaway:[
    'Define acquisition, activation, retention, referral and revenue events, and know where the funnel model misleads.',
    'Name the activation moment for your product and measure time-to-value.',
    'Use the Fogg behaviour model to explain why a user did or did not act.',
    'Choose between product-led, sales-led and product-led sales motions.',
    'Tell a network effect from virality, and design an ethical growth loop.'
  ],
  needs:[['Interview skills','You will watch five people go through onboarding.','A3'],
         ['A positioning statement','Idea 5 builds on it.','A4'],
         ['A prototype','The onboarding test uses one.','A7']],
  capstone:{
    title:'Growth events, an onboarding test and a growth loop',
    brief:'Define how your product grows, test the first five minutes with real users, and design one loop you would be happy to explain to them.',
    steps:[
      'Define the acquisition, activation, retention, referral and revenue events for your capstone.',
      'Prototype the onboarding and test it with five users. Measure time to first value and where people drop off.',
      'Design one ethical growth loop. Then write a teardown of Cursor, Lovable, Grammarly or Notion AI, covering acquisition, activation, retention and monetisation.'
    ],
    done:[
      'Each growth stage has one named event that you could log.',
      'The onboarding test reports time to first value for each of the five users, and the step where most dropped off.',
      'The growth loop names the dark pattern it refuses to use.',
      'Mastery gate: score each artifact 0–3. Move on only when every artifact scores at least 2 and no privacy or evidence item scores 0.'
    ]
  },
  check:[
    ['What single behaviour predicts retained value?',
     'Look for the action that users who stay have done and users who leave have not. For Theme Finder, it might be “opened a theme and read the tickets inside it in the first week”. That shows they trusted the grouping enough to check it. Find it in your data, not by guessing, and then design onboarding to get people there.'],
    ['Is your “network effect” actually just virality?',
     'Ask whether the product gets better for existing users when a new user joins. If a new team makes Theme Finder better for other teams, that is a network effect. If a new team only means more people see the product, that is virality. Virality helps growth. Only a network effect makes the product harder to leave.'],
    ['Name one dark pattern your plan refuses to use.',
     'Be specific. For example: we will not send invitations from a user’s account without showing them each one first. Or: we will not hide the cancel button. Write it into the plan, so the decision is already made when growth targets get tight.']
  ],
  story:[
    ['c','Before you start','About twelve hours. You need your prototype from A7 and five people from your target users. Pick one of Cursor, Lovable, Grammarly or Notion AI for the teardown, and use it for a few days first.'],

    ['h','Idea 1: AARRR, and where funnels mislead'],
    ['p','<strong>AARRR</strong> names five stages of growth: acquisition, activation, retention, referral and revenue. The first job is to define one event for each stage, so you can count it.'],
    ['tb',['Stage','Question','Theme Finder event'],[
      ['Acquisition','Did they arrive?','Signed up with a work email'],
      ['Activation','Did they get value?','Viewed their first theme report'],
      ['Retention','Did they come back?','Viewed a report in 3 of the next 4 weeks'],
      ['Referral','Did they bring others?','Shared a report with a colleague who signed up'],
      ['Revenue','Did they pay?','Started a paid plan']
    ]],
    ['p','The funnel is a good start, but it has limits. It suggests people move in a straight line, when many come back through referrals and shared reports. It also invites you to fix the top of the funnel first. Most of the time, retention is the stage that decides whether a product works.'],
    ['key','If users do not stay, more sign-ups only means losing people faster.'],
    ['do','Prove it now',[
      ['p','Write one event for each of the five stages for your capstone.'],
      ['x','Five events, each something your code could log. Counterexample: a stage where your product’s users would not move in funnel order.']
    ]],
    ['q','I604'],

    ['h','Idea 2: Activation moments and time-to-value'],
    ['p','The <strong>activation moment</strong> is the first time a user gets the value your product promises. For Theme Finder, it is seeing a theme the lead did not know about. Everything before that moment is cost to the user.'],
    ['p','<strong>Time-to-value</strong> is how long it takes to reach that moment. Measure it from sign-up. Here is a first onboarding test with five support leads:'],
    ['tb',['Step','Users who finished','Median time'],[
      ['Sign up','5 of 5','1 min'],
      ['Connect Freshdesk','3 of 5','6 min'],
      ['Wait for first import','3 of 5','12 min'],
      ['View first theme report','3 of 5','20 min total']
    ]],
    ['p','The drop-off is at connecting Freshdesk. Two users needed an admin to approve access. A fix could be a sample report built from twenty tickets the user pastes in. That puts the activation moment before the hard step.'],
    ['do','Prove it now',[
      ['p','Write your capstone’s activation moment in one sentence. List every step a new user takes before reaching it.'],
      ['x','One moment and a list of steps. Circle the step most likely to lose people. Counterexample: a user who reaches the moment but still does not see the value.']
    ]],

    ['h','Idea 3: Retention, habits and the Fogg model'],
    ['p','Retention is best shown as a curve. Take everyone who signed up in the same week, and plot the share still active each week after. A healthy curve drops, then flattens. A curve that keeps falling to zero means the product has not found a lasting use.'],
    ['p','BJ Fogg’s behaviour model explains why a person does or does not act. It says a behaviour happens when three things meet at the same moment:'],
    ['code','Behaviour = Motivation + Ability + Prompt\n\nMotivation  Does the lead want to do it right now?\nAbility     Is it easy enough at that moment?\nPrompt      Does something remind them to do it?'],
    ['p','If a behaviour is not happening, check the three in reverse order. Missing prompts are the cheapest fix. For Theme Finder, a Monday 9am email with the top three themes is the prompt. The report opening in one click keeps ability high.'],
    ['do','Prove it now',[
      ['p','Pick the behaviour you most want users to repeat. Write its motivation, ability and prompt.'],
      ['x','Three short lines. Counterexample: a user with strong motivation who still does not act. Which of the three is missing for them?']
    ]],
    ['q','I605'],

    ['h','Idea 4: Product-led, sales-led and product-led sales'],
    ['p','A <strong>go-to-market motion</strong> is how a customer goes from hearing about you to paying.'],
    ['tb',['Motion','How it works','Fits when'],[
      ['Product-led growth (PLG)','Users sign up and get value on their own; some upgrade','Value shows in minutes and the price is low'],
      ['Sales-led','A salesperson runs demos, a trial and a contract','The deal is large, or security review is required'],
      ['Product-led sales','Users start on their own; sales steps in when a team grows','Individuals adopt first, but companies buy']
    ]],
    ['p','Theme Finder fits product-led sales. A single support lead can try it with pasted tickets. Connecting the whole helpdesk needs the security lead, and that is when a salesperson helps.'],
    ['do','Prove it now',[
      ['p','Choose a motion for your capstone and give two reasons from your pricing and your buyer.'],
      ['x','One motion and two reasons. Counterexample: the kind of customer for whom that motion would fail.']
    ]],

    ['h','Idea 5: Growth loops, network effects and positioning'],
    ['p','A <strong>growth loop</strong> is a cycle where one user’s actions bring in the next user. Unlike a funnel, the output feeds back into the input.'],
    ['code','Lead views weekly report\n  → shares the top theme with the product team\n    → a product manager sees it and asks for their own view\n      → they sign up and connect their own queue\n        → they share their report with their team ...'],
    ['p','Be precise about two terms. <strong>Virality</strong> means users bring in other users. A <strong>network effect</strong> means the product gets better for everyone as more people use it. Many products have the first without the second.'],
    ['p','Positioning decides which loop can work. If you are positioned as “the weekly report for support leads”, sharing with product managers makes sense. Reuse the positioning statement you wrote in A4.'],
    ['c','Watch out','A <strong>dark pattern</strong> is a design that tricks users into acting against their own interest. Examples are pre-ticked invitation boxes, fake scarcity and hidden cancellation. They can lift numbers for a quarter. They also destroy the trust that retention depends on.'],
    ['do','Prove it now',[
      ['p','Draw your capstone’s growth loop as four or five arrows. Mark the step where a user decides to share.'],
      ['x','One loop, and one sentence on why a user would choose to share. Counterexample: what would make your loop feel like spam?']
    ]],
    ['q','I606'],
    ['try',{id:'b2-teardown',mins:15,min:150,rows:7,
      task:'Start your teardown. Pick one of Cursor, Lovable, Grammarly or Notion AI. For each of acquisition, activation, retention and monetisation, write one line about how it works and one thing you would copy.',
      ph:'Acquisition… Activation… Retention… Monetisation…',
      after:'A good teardown line is specific and checkable. For example, for Grammarly: <strong>Acquisition</strong> comes from people seeing its suggestions inside everyday tools, and the free plan spreads it. <strong>Activation</strong> is the first underlined suggestion in your own writing, which arrives within seconds. <strong>Retention</strong> comes from living where people already write, so there is no new habit to form. <strong>Monetisation</strong> gates the more advanced suggestions behind a paid plan. The thing to copy: activation happens inside the user’s existing work, not on a separate page.'}]
  ]
},
{
  id:'b3', num:'B3', part:7, curriculumTier:'selective', phase:6, prerequisites:['a5','a6','b2'], nextUnits:['b4'], minutes:840, labs:[],
  title:'Product analytics and experiments',
  concept:'Measure what users actually do, and learn which changes helped. You will write a tracking plan, build a funnel and a retention cohort, and design an experiment that can give a clear answer.',
  takeaway:[
    'Pick a North Star metric and the input metrics that move it.',
    'Write an event taxonomy with clear names, properties and user identity.',
    'Build a funnel, a retention cohort and segments, and read them correctly.',
    'Design an A/B test with a guardrail, a minimum detectable effect and a stopping rule.',
    'Check your data before trusting it, and avoid claiming causes you have not shown.'
  ],
  needs:[['A North Star metric','Idea 1 turns it into something you can measure.','A5'],
         ['OKRs and guardrail metrics','Experiments use the same guardrails.','A6'],
         ['Growth events','The tracking plan logs them.','B2'],
         ['Evaluation engineering','Idea 5 separates model quality from product analytics.',29]],
  capstone:{
    title:'A tracking plan, a funnel and cohort, and an experiment design',
    brief:'Instrument your capstone, read what the data says, and design one test that could change a decision.',
    steps:[
      'Write an event taxonomy and tracking plan. Implement it in PostHog, Mixpanel or Google Analytics.',
      'Build one activation funnel, one retention cohort and two segments, from real or seeded data.',
      'Design an experiment with a hypothesis, unit of randomisation, primary metric, guardrails, minimum detectable effect and stopping rule.'
    ],
    done:[
      'Every event in the plan answers a named product question.',
      'The funnel and cohort come from logged events, not from a spreadsheet you typed by hand.',
      'The experiment says how many users it needs, and what you will do if you cannot get that many.',
      'Rubric: instrumentation 30%, metric logic 25%, analysis 25%, decision 20%.',
      'Mastery gate: score each artifact 0–3. Move on only when every artifact scores at least 2 and no privacy or evidence item scores 0.'
    ]
  },
  check:[
    ['Can every event name answer a product question?',
     'Go through the tracking plan line by line, and write the question next to each event. “report_viewed” answers “do leads come back each week?”. If you cannot write a question for an event, remove it. Extra events cost storage and attention, and they make the useful ones harder to find.'],
    ['Why is LLM quality telemetry not product analytics?',
     'They answer different questions. Traces and eval scores tell you whether the model did its job on a request. Product analytics tells you whether people got value and came back. A model can score 95% on your eval set while users ignore the report. You need both, and neither one can stand in for the other.'],
    ['What selection bias could invalidate your cohort?',
     'Look at who is in the cohort and how they got there. If your first cohort is design partners you recruited personally, they are more motivated than typical users, so their retention will look too good. Compare them with users who found the product on their own before you draw conclusions.']
  ],
  story:[
    ['c','Before you start','About fourteen hours. Create a free account with PostHog, Mixpanel or Google Analytics. If your capstone has no users yet, you will seed some data, and the chapter shows how.'],

    ['h','Idea 1: North Star and input metrics'],
    ['p','You met the North Star metric in A5. It is the one number that best captures the value users get. For Theme Finder, it is <strong>weekly teams that act on a theme</strong>, such as filing a bug or changing a help article.'],
    ['p','You cannot move a North Star directly. You move it through <strong>input metrics</strong>, which the team can change this quarter:'],
    ['code','North Star: weekly teams that act on a theme\n\nInput metrics\n  1. Teams that view a report each week        (habit)\n  2. Share of tickets assigned to a theme      (coverage)\n  3. Share of themes marked "useful"           (quality)\n  4. Minutes from import to first report       (speed)'],
    ['p','Each input should be something a team owns, with a clear link to the North Star. If an input goes up and the North Star does not, your link is wrong, and that is useful to learn.'],
    ['do','Prove it now',[
      ['p','Write your capstone’s North Star and three input metrics. Name which team or person could move each input.'],
      ['x','One North Star, three inputs and an owner for each. Counterexample: an input that could rise while the North Star falls.']
    ]],
    ['q','I607'],

    ['h','Idea 2: Event taxonomies, properties and identity'],
    ['p','An <strong>event taxonomy</strong> is the list of events you log, with a naming rule everyone follows. A common rule is <code>object_action</code>, in lower case and past tense.'],
    ['tb',['Event','Properties','Question it answers'],[
      ['account_created','plan, signup_source','Where do new teams come from?'],
      ['helpdesk_connected','helpdesk, ticket_count','How many get through the hard step?'],
      ['report_viewed','week, themes_shown','Do leads come back each week?'],
      ['theme_marked_useful','theme_id, useful','Is the grouping any good?'],
      ['theme_shared','channel','Does the growth loop run?']
    ]],
    ['p'  ,'<strong>Properties</strong> add detail to an event, so you can split results later. Keep them to what you need, and never put ticket text or personal data in them.'],
    ['p','<strong>Identity</strong> links events to a person. A visitor starts with an anonymous ID. When they sign up, you link it to a user ID, so their earlier visits join their history. In B2B products, also attach a company or account ID. Your buyer cares about teams, not single users.'],
    ['p','A <strong>tracking plan</strong> is the shared document that lists every event, its properties, when it fires and who owns it. Engineers implement from it, and analysts trust it.'],
    ['do','Prove it now',[
      ['p','Write five events for your capstone using <code>object_action</code> names. Add the question each one answers.'],
      ['x','Five events with questions. Counterexample: an event you were tempted to add that answers no question.']
    ]],

    ['h','Idea 3: Funnels, cohorts, segments and retention'],
    ['p','Three views answer most product questions.'],
    ['l',[
      '<strong>Funnel.</strong> The share of users who complete each step in order. It shows where people drop off.',
      '<strong>Cohort.</strong> A group of users who started in the same period. A retention table follows each cohort over time.',
      '<strong>Segment.</strong> A slice of users that share a property, such as plan or helpdesk. Comparing segments shows who the product works for.'
    ]],
    ['p','Here is a weekly retention table. Each row is a cohort. Each cell is the share still viewing reports that many weeks later.'],
    ['tb',['Cohort','Teams','Week 1','Week 2','Week 4','Week 8'],[
      ['1 Sep','20','70%','55%','45%','40%'],
      ['8 Sep','25','72%','60%','52%',''],
      ['15 Sep','18','78%','66%','','']
    ]],
    ['p','Read it two ways. Across a row, the curve flattens around 40%, which suggests a lasting use. Down a column, newer cohorts retain better, which suggests recent changes helped. Both readings need enough users before you trust them. With 20 teams, one team is five percentage points.'],
    ['do','Prove it now',[
      ['p','Sketch the retention table you expect for your capstone’s first three cohorts. Then say which segment you expect to retain best, and why.'],
      ['x','A small table and one segment prediction. Write it down now, so you can compare it with real data later.']
    ]],
    ['q','I608'],

    ['h','Idea 4: A/B tests, guardrails and sample size'],
    ['p','An <strong>A/B test</strong> shows a change to a random half of users and compares them with the other half. Randomising is what lets you say the change caused the difference. Write the design down before you start:'],
    ['code','Hypothesis   A sample report before connecting the helpdesk\n             will raise activation.\nUnit         Account (not user: teammates share a report)\nPrimary      Share of accounts that view a first report\n             within 7 days\nGuardrail    Share of accounts that connect a helpdesk\n             must not fall\nMDE          +5 percentage points (from 20% to 25%)\nStop rule    Run until each group has the planned sample.\n             No early peeking.'],
    ['p','The <strong>minimum detectable effect</strong> (MDE) is the smallest change worth detecting. It sets how many users you need. A rough rule for a yes/no metric, at the usual settings, is:'],
    ['code','users per group ≈ 16 × p × (1 − p) ÷ MDE²\n\np = 0.20, MDE = 0.05\n16 × 0.20 × 0.80 ÷ 0.0025 = 1,024 accounts per group'],
    ['c','Why this matters','An early B2B product may have forty accounts, not two thousand. It cannot run this test. Say so, and use other evidence instead: watch sessions, compare before and after with care, and look for large effects. Running an underpowered test and reporting its result is worse than not testing.'],
    ['do','Prove it now',[
      ['p','Write the full experiment design for one change to your capstone, using the seven lines above. Work out the sample size.'],
      ['x','A complete design and a number. If the number is bigger than your user base, write what you will do instead.']
    ]],
    ['try',{id:'b3-sample',mins:8,min:80,rows:5,
      task:'Your activation rate is 30%. You want to detect a rise to 40%. Use the rule of thumb to estimate the users needed per group. Then say whether you would run the test with 150 new accounts a month.',
      ph:'16 × … × … ÷ … = … per group, so…',
      after:'Here p = 0.30 and the MDE is 0.10. The sum is 16 × 0.30 × 0.70 ÷ 0.01 = 336 accounts per group, or 672 in total. At 150 new accounts a month, that takes about four and a half months. That is probably too slow for a product that is changing every week. Two options: aim only for a larger effect, which needs fewer users, or decide from session observations and a careful before-and-after comparison, stating that it is weaker evidence.'}],
    ['q','I609'],

    ['h','Idea 5: Data quality, QA and causal humility'],
    ['p','Bad data looks exactly like good data on a chart. Check your instrumentation before you trust a single number:'],
    ['n',[
      'Trigger each event yourself and confirm it arrives once, with the right properties.',
      'Compare an event count with your database. For example, accounts created against rows in the accounts table.',
      'Filter out your own team’s traffic and test accounts.',
      'Check that events still fire after each release.'
    ]],
    ['p','Keep product analytics separate from model telemetry. Traces, latency and eval scores tell you how the model behaved (Chapter 30). Product events tell you what people did. Link them with a shared request ID so you can move between the two.'],
    ['p','Finally, be careful about causes. If users who share reports retain better, sharing might cause retention. It might also be that engaged users do both. Only a randomised test shows cause. Everything else is a pattern worth testing.'],
    ['key','Write “users who do X also tend to do Y” unless a controlled test shows that X causes Y.'],
    ['do','Prove it now',[
      ['p','Run the four QA checks on one event in your capstone, and write down what you found.'],
      ['x','Four results. Counterexample: a chart in your capstone that would look fine even if an event were firing twice.']
    ]]
  ]
},

{
  id:'b4', num:'B4', part:7, curriculumTier:'reference', phase:0, prerequisites:['ch1','ch12t','a7'], nextUnits:['b5','b6'], minutes:960, labs:[],
  title:'The applied AI PM toolchain',
  concept:'Learn the tools an applied AI product manager uses to research, prototype, build, deliver and measure. You will use each group of tools on your capstone, and learn where each one stores data and when it breaks.',
  takeaway:[
    'Use AI research tools on sources you control, and audit what they claim.',
    'Choose between no-code and code-assisted prototyping by speed, control, security and maintainability.',
    'Use a coding agent and a workflow tool, and know which work each one suits.',
    'Ship a small app from a repository to a live URL with authentication, data and analytics.',
    'Know where your secrets and your users’ data live in every tool you use.'
  ],
  needs:[['Your first API call','The workflow in Idea 3 makes one.',1],
         ['Tool calling and workflows','n8n and coding agents use the same ideas.',25],
         ['A prototype and a PRD','You will rebuild the prototype with two different tools.','A7'],
         ['A tracking plan','Idea 5 implements it.','B3']],
  capstone:{
    title:'Four builds, one per tool group',
    brief:'Use the toolchain for real on your capstone, and write down what each tool is good at and where it breaks.',
    steps:[
      'Create a source-grounded research notebook in NotebookLM and a reusable Gem for interview synthesis. Check ten of their claims by hand against the sources.',
      'Build the same thin prototype in one no-code tool and one code-assisted tool. Compare speed, control, security and maintainability.',
      'Create an n8n workflow with one API call, validation, retry and human approval. Test the API call in Postman.',
      'Deploy a small app from GitHub to Vercel with Supabase for authentication and data, then add PostHog. Sketch when AWS would replace or add to this stack.'
    ],
    done:[
      'The claim audit lists all ten claims, and marks each one supported, partly supported or unsupported.',
      'The prototype comparison is a table with the four criteria, and a recommendation.',
      'The workflow has a validation step, a retry limit and an approval step you have seen work.',
      'The app is live, and a fresh clone of the repository builds and deploys by following the README.',
      'Mastery gate: score each artifact 0–3. Move on only when every artifact scores at least 2 and no security or privacy item scores 0.'
    ]
  },
  check:[
    ['Can you reproduce the build from a clean repository?',
     'Test it. Clone the repository into a new folder, follow only the README, and deploy. Anything you had to remember and did not write down is a gap. Common ones are environment variables, a database migration and a setting you changed in a dashboard.'],
    ['Which tool stores user data, and under what policy?',
     'List every tool in your stack and write down what it stores. For example, Supabase stores accounts and data, PostHog stores events, and the model provider receives prompts. For each one, find the data region, how long it keeps data, and whether it trains on it. Chapter 16.5 covers what you may send.'],
    ['Where are secrets stored?',
     'In the platform’s environment variables, such as Vercel project settings or n8n credentials. They should never be in the repository, in the front-end code or in a shared document. Search your repository history for key prefixes to make sure none slipped in.'],
    ['What breaks when a vendor changes an API?',
     'Pick one dependency and trace it. If the model provider renames a field in its response, which step fails first, and would you notice? Good answers name a validation step that fails loudly, an alert, and a pinned version that gives you time to update.']
  ],
  story:[
    ['c','Before you start','About sixteen hours, in four parts. You need free accounts on GitHub, Vercel, Supabase and PostHog, plus access to at least one no-code builder and one coding agent. Keep a short log of each tool: what it did well, what went wrong and how long it took.'],
    ['p','Tools change every few months, so this chapter teaches the job each tool does. If a named tool is gone by the time you read this, use its replacement for the same job.'],

    ['h','Idea 1: Research and synthesis'],
    ['p','AI tools can read and summarise far more material than you can. They also state wrong things with confidence. Use them in a way that lets you check.'],
    ['tb',['Tool','Good for','Watch out for'],[
      ['ChatGPT or Claude','Brainstorming, first drafts, explaining unfamiliar topics','Claims with no source; confident errors'],
      ['NotebookLM','Answering questions using only the sources you upload, with citations','Only as good as the sources; summaries can drop nuance'],
      ['Gems or custom GPTs','Saving a prompt you reuse, such as “synthesise this interview into jobs, pains and quotes”','The instructions drift out of date; outputs still need checking']
    ]],
    ['p','The key habit is the <strong>claim audit</strong>. Pick ten claims from an AI summary, and check each one against its source. Mark it supported, partly supported or unsupported. If more than one or two fail, stop trusting that workflow for decisions.'],
    ['do','Prove it now',[
      ['p','Upload your five interview notes from A3 to NotebookLM. Ask it for the three most common problems. Check three of its citations.'],
      ['x','Three claims, each marked supported or not. Counterexample: a question where a source-grounded tool would still mislead you, such as asking what users did not mention.']
    ]],

    ['h','Idea 2: Prototyping tools'],
    ['p','You can now build a working prototype in an afternoon. There are two families of tools:'],
    ['l',[
      '<strong>Design tools</strong> such as Figma. You draw screens and link them. Fast for flows and layout. Nothing actually works behind them.',
      '<strong>Prompt-to-app builders</strong> such as Lovable or Google AI Studio. You describe the app, and they generate working code. Fast to a real demo, but you control less of what they produce.'
    ]],
    ['p','Build the same thin slice twice, once with a no-code builder and once with a coding agent. Then compare:'],
    ['tb',['Criterion','Question to ask'],[
      ['Speed','How long until a user could try it?'],
      ['Control','Could you change exactly what you wanted?'],
      ['Security','Where are keys stored? Who can read the data?'],
      ['Maintainability','Could an engineer take it over next week?']
    ]],
    ['c','Watch out','Generated apps often put API keys in front-end code, where anyone can read them. They may also ship a database with no access rules. Check both before you share a link with anyone.'],
    ['do','Prove it now',[
      ['p','Build your capstone’s main screen in a prompt-to-app builder. Then open the code and find where the model API key is stored.'],
      ['x','A working screen and one sentence on where the key lives. If it is in the browser, write how you would move it to a server.']
    ]],
    ['q','I610'],

    ['h','Idea 3: Coding agents and workflow tools'],
    ['p','Two kinds of tool let you build more than a prototype without being a full-time engineer.'],
    ['l',[
      '<strong>Coding agents</strong> such as Claude Code, Cursor or Antigravity. They read your repository, edit files and run commands. They work best with a clear task, tests to check against, and a human reviewing each change.',
      '<strong>Workflow tools</strong> such as n8n. You connect steps on a canvas: a trigger, an API call, a check and an action. They suit fixed processes that run the same way every time.'
    ]],
    ['p','Here is the n8n workflow for the capstone task. It uses the same parts you saw in Chapter 25:'],
    ['code','1. Trigger       Every Monday at 07:00\n2. HTTP request  Fetch last week’s tickets from the helpdesk API\n3. HTTP request  Send them to the model; ask for JSON themes\n4. Validate      Is it valid JSON with the expected fields?\n                 No → retry once, then alert a person\n5. Approval      Post the draft report to Slack with Approve / Reject\n6. Send          On approve, email the report to the lead'],
    ['p','Test the model API call in Postman first. Postman lets you send the exact request, see the raw response and save it as a test. When something breaks later, you can tell whether the API changed or your workflow did.'],
    ['do','Prove it now',[
      ['p','Build steps 3 and 4 of the workflow above in n8n. Send it a response with a missing field and check that the retry fires.'],
      ['x','A screenshot of a failed validation followed by a retry. Counterexample: a task where a coding agent would be a better choice than n8n.']
    ]],

    ['h','Idea 4: Delivery: GitHub, Jira, Vercel, Supabase and AWS'],
    ['p','Shipping a real app needs a small set of services. This stack is free to start and common in AI startups:'],
    ['tb',['Job','Tool','What you do there'],[
      ['Code and history','GitHub','Store the code, review changes, run checks'],
      ['Work tracking','Jira (or Linear)','Turn stories into tickets and track them'],
      ['Hosting','Vercel','Deploy the app on every push to main'],
      ['Auth and database','Supabase','Sign-in, tables and access rules'],
      ['API testing','Postman','Check and save API calls']
    ]],
    ['p','AWS offers the same building blocks and many more. It gives you more control, fits larger companies’ security rules and can cost less at scale. It also takes more setup. A common path is to start on managed services, and move pieces to AWS when a customer or cost requires it.'],
    ['n',[
      'Push your prototype to a new GitHub repository.',
      'Import the repository in Vercel. Add your model API key as an environment variable.',
      'Create a Supabase project. Add sign-in and one table, with a rule that users only see their own rows.',
      'Push a change and watch Vercel deploy it.'
    ]],
    ['do','Prove it now',[
      ['p','Do the four steps above. Then sign in as two different test users and confirm neither can see the other’s rows.'],
      ['x','A live URL and a note on the access test. If one user could see another’s data, fix the rule before going further.']
    ]],
    ['q','I611'],

    ['h','Idea 5: Analytics tools'],
    ['p','PostHog, Mixpanel and Google Analytics all record events and draw funnels. They differ in what they are best at.'],
    ['tb',['Tool','Strength','Consider'],[
      ['PostHog','Product analytics, session replay and feature flags together; can be self-hosted','Session replay can capture sensitive text unless masked'],
      ['Mixpanel','Strong funnels, cohorts and group analytics','Pricing grows with event volume'],
      ['Google Analytics','Marketing sites and acquisition sources','Built around sessions and pages rather than product events']
    ]],
    ['p','Add your B3 tracking plan to the deployed app. Send events from the server where you can, so ad blockers do not hide them. Attach the account ID to every event.'],
    ['do','Prove it now',[
      ['p','Add PostHog to your live app and log two events from your tracking plan. Check they arrive with the right properties.'],
      ['x','Two events visible in PostHog. Then turn on input masking for session replay, or write why you left replay off.']
    ]],
    ['try',{id:'b4-stack',mins:10,min:120,rows:6,
      task:'List every tool in your capstone stack. For each one, write what data it stores or receives, and where its secrets live.',
      ph:'GitHub: … Vercel: … Supabase: … PostHog: … Model provider: …',
      after:'A complete answer for the Theme Finder stack: <strong>GitHub</strong> stores code only; no secrets, checked by searching history. <strong>Vercel</strong> stores the model and Supabase keys as environment variables and keeps request logs. <strong>Supabase</strong> stores accounts, theme results and ticket IDs, with row-level access rules. <strong>PostHog</strong> stores events with account IDs, and no ticket text. <strong>The model provider</strong> receives ticket text in each request; check its retention and training policy. <strong>n8n</strong> stores helpdesk and Slack credentials in its credential store. Writing this list is the start of the data-flow diagram your security lead will ask for.'}]
  ]
},
{
  id:'b5', num:'B5', part:7, curriculumTier:'selective', phase:6, prerequisites:['ch13a','ch17o','ch18s'], nextUnits:['b6'], minutes:720, labs:[],
  title:'Harness engineering: the system around the model',
  concept:'The model is one part of an AI product. The rest is the harness: the code that assembles context, runs tools, keeps state, enforces rules, checks quality and records what happened. You will draw the harness around your capstone, build one workflow two ways, and write a release checklist.',
  takeaway:[
    'Name the seven parts of a harness and find each one in your capstone.',
    'Recognise the patterns coding agents use, and reuse them in your own product.',
    'Set tool and permission boundaries, and say what evidence would justify widening them.',
    'Choose between a deterministic workflow and a bounded agent from measured results.',
    'Define release gates, a rollback trigger and who responds to an incident.'
  ],
  needs:[['Agents','Idea 4 compares an agent with a fixed workflow.',26],
         ['Observability','Traces are one part of the harness.',30],
         ['Security and governance','Idea 3 applies it to tool permissions.',31],
         ['A coding agent','Idea 2 looks at how one works.','B4']],
  capstone:{
    title:'A harness diagram, a two-way build and a release checklist',
    brief:'Make the system around your model visible, measure one design choice, and prepare to ship it safely.',
    steps:[
      'Draw the harness around your capstone: inputs, context assembly, tools, state, policies, eval gates, traces and fallbacks.',
      'Build one workflow twice: once as a deterministic state machine and once as a bounded agent. Compare failure rate, latency and how easy each is to debug.',
      'Threat-model the tool permissions, and write a release checklist with a rollback trigger and a named incident owner.'
    ],
    done:[
      'The diagram shows where model output crosses into an action, and what checks it on the way.',
      'The comparison uses the same test cases for both builds, and reports all three measures.',
      'The rollback trigger is a number someone can check, and the incident owner is a named person.',
      'Mastery gate: score each artifact 0–3. Move on only when every artifact scores at least 2 and no safety item scores 0.'
    ]
  },
  check:[
    ['Can you point to the boundary where model freedom ends?',
     'Point to it in the diagram. In Theme Finder, the model can choose theme names freely. Its output must then pass a schema check, and nothing is emailed until a person approves it. That approval step is the boundary. If you cannot point to one, the model can take actions nobody checked.'],
    ['Which failures should stop, retry, degrade or escalate?',
     'Sort them by cause. Retry short network errors and rate limits, with a limit. Degrade when a part is down but the rest works, such as sending the report without the trend chart. Escalate to a person when output fails validation twice. Stop when an action would be irreversible and something looks wrong.'],
    ['What evidence is required before widening tool permissions?',
     'Decide it in advance. For example: before the agent can post to Slack without approval, it must go 200 runs with approval where every post was approved unchanged, and pass the prompt-injection tests from Chapter 31. Write the threshold down before you look at the results.']
  ],
  story:[
    ['c','Before you start','About twelve hours. You need a working version of your capstone’s main flow, even a rough one, and a coding agent from B4.'],

    ['h','Idea 1: What a harness is'],
    ['p','A model only takes text in and gives text out. Everything else that makes an AI product work lives in the <strong>harness</strong> around it. It has seven parts:'],
    ['tb',['Part','What it does','Theme Finder example'],[
      ['Context','Builds what the model sees on each call','Instructions, 50 tickets, the existing theme list'],
      ['Tools','Lets the model read or act','Fetch tickets; look up a past theme'],
      ['State','Remembers across steps and sessions','Last week’s themes; which tickets are done'],
      ['Orchestration','Decides what runs next','Classify, then group, then summarise'],
      ['Policy','Rules the model cannot override','No email without approval; no ticket text in logs'],
      ['Evals','Checks quality before and after release','50-ticket test set; weekly sample review'],
      ['Observability','Records what happened','A trace per run with tokens, cost and latency']
    ]],
    ['p','Two products using the same model can behave very differently because of their harnesses. Most quality problems you will debug live in the harness, not the model.'],
    ['do','Prove it now',[
      ['p','Fill in the seven rows for your capstone. Leave a row empty if you do not have that part yet.'],
      ['x','A seven-row table. The empty rows are your to-do list. Counterexample: a product where one of the seven parts really is not needed.']
    ]],

    ['h','Idea 2: How coding agents are built'],
    ['p','Coding agents such as Claude Code are the most widely used agents today. Their design shows patterns you can reuse:'],
    ['l',[
      '<strong>A simple loop.</strong> The model picks a tool, the harness runs it, the result goes back to the model. This repeats until the task is done.',
      '<strong>A small set of general tools.</strong> Read a file, edit a file, search, run a command. A few flexible tools beat dozens of narrow ones.',
      '<strong>Project memory.</strong> A file in the repository, such as <code>CLAUDE.md</code>, holds rules and conventions that are loaded on every run.',
      '<strong>Permission modes.</strong> Reading is allowed freely. Editing files or running commands can require approval.',
      '<strong>A verifier.</strong> Tests and type checks tell the agent whether its change worked, without a person reading every line.',
      '<strong>Sub-agents.</strong> A large task is split, and a helper works in its own context, so the main context stays small.'
    ]],
    ['key','The verifier matters most. An agent with a reliable way to check its own work can take on much larger tasks.'],
    ['do','Prove it now',[
      ['p','Give your coding agent one small task on your capstone, such as adding input validation. Watch which tools it calls, in order.'],
      ['x','The list of tool calls. Mark the step where it checked its own work. If it never did, what verifier could you add?']
    ]],

    ['h','Idea 3: Tool and permission boundaries'],
    ['p','Personal agents such as OpenClaw can run on your own computer with access to your files, messages and shell. That makes them useful and dangerous. The same questions apply to any agent that uses tools:'],
    ['n',[
      '<strong>Which tools can it call?</strong> Use an allowlist. Anything not on the list is refused.',
      '<strong>With what scope?</strong> Read-only where possible. One folder, one channel, one customer’s data.',
      '<strong>Which calls need approval?</strong> Anything that sends, deletes, pays or cannot be undone.',
      '<strong>What can reach it?</strong> Any text it reads, such as tickets, email or web pages, may contain instructions from an attacker.'
    ]],
    ['c','Watch out','Recall the lethal trifecta from Chapter 13. An agent with private data, untrusted input and a way to send data out can be tricked into leaking. Remove at least one of the three for every tool combination.'],
    ['p','Start narrow, and widen permissions only on evidence you defined in advance.'],
    ['do','Prove it now',[
      ['p','List every tool in your capstone. Mark each as read or write, and say whether it needs approval.'],
      ['x','A tool list with scopes. Check it for the lethal trifecta. Counterexample: a tool that looks read-only but can still leak data.']
    ]],
    ['q','I612'],

    ['h','Idea 4: Deterministic workflows or bounded agents'],
    ['p','A <strong>state machine</strong> is a workflow where your code fixes every step and every transition. A <strong>bounded agent</strong> lets the model choose steps, within a tool list and a step budget.'],
    ['code','State machine                       Bounded agent\n\nFETCH → CLASSIFY → GROUP            Goal: produce the weekly report\n  → SUMMARISE → APPROVE → SEND      Tools: fetch, classify, group,\n                                           summarise, request_approval\nEach step has one next step.        Max 12 steps. Must request\nErrors go to RETRY or HUMAN.        approval before sending.'],
    ['p','Build both and measure them on the same twenty test weeks:'],
    ['tb',['Measure','State machine','Bounded agent'],[
      ['Runs that produced a correct report','19 of 20','17 of 20'],
      ['Median time','40 s','75 s'],
      ['Time to find the cause of a failure','Minutes: the failing step is logged','Longer: read the whole trace'],
      ['Handles an unusual week','Needs code changes','Often adapts on its own']
    ]],
    ['p','For a fixed process like a weekly report, the state machine wins. Agents earn their place when the steps really do vary from case to case.'],
    ['do','Prove it now',[
      ['p','Build one small workflow from your capstone both ways. Run both on at least ten cases.'],
      ['x','A three-row table like the one above, from your own runs. Counterexample: a case in your capstone where the agent did better.']
    ]],
    ['q','I613'],

    ['h','Idea 5: Release gates, rollback and incidents'],
    ['p','A <strong>release gate</strong> is a check that must pass before a change reaches users. For AI products, gates include the eval set as well as ordinary tests.'],
    ['n',[
      'Unit tests and type checks pass.',
      'The eval set scores at or above the threshold, with no new failures in safety cases.',
      'Cost and latency per run are within budget.',
      'The change goes to 10% of accounts first, behind a feature flag.',
      'The rollback trigger and the incident owner are written down.'
    ]],
    ['p','Decide how the system responds to each kind of failure:'],
    ['tb',['Response','When','Example'],[
      ['Retry','A temporary error','Rate limit; network timeout'],
      ['Degrade','One part is down but the rest works','Send the report without the trend chart'],
      ['Escalate','The output cannot be trusted','JSON fails validation twice'],
      ['Stop','An irreversible action looks wrong','The report would go to 500 people instead of 5']
    ]],
    ['p','When something goes wrong in production, the incident owner decides quickly, rolls back if needed and tells affected users. Afterwards, write a short review: what happened, why, and what check would have caught it.'],
    ['try',{id:'b5-rollback',mins:8,min:100,rows:5,
      task:'Write the rollback trigger and incident plan for a new version of your capstone’s main prompt. Include a measurable trigger, who decides, how you roll back and how long it takes.',
      ph:'Roll back if… Decided by… How… Time to roll back…',
      after:'A strong plan: <strong>Roll back if</strong> the share of themes marked useful drops more than 10 points below last week, or any report goes to the wrong recipient. <strong>Decided by</strong> the PM on call, who does not need anyone’s approval to roll back. <strong>How:</strong> switch the prompt version flag back to the previous version; prompts are versioned in the repository. <strong>Time:</strong> under five minutes, and it was tested once before launch. Afterwards, the PM writes a one-page review within two days.'}]
  ]
},

{
  id:'b6', num:'B6', part:7, curriculumTier:'selective', phase:6, prerequisites:['b4','b5','ch145'], nextUnits:['b7','b8'], minutes:1080, labs:[],
  title:'Ship to real users and run the learning loop',
  concept:'Put your capstone in front of real users and learn from what they do. You will get it ready for production, recruit people ethically, combine what they say with what they do, and ship one improvement based on evidence.',
  takeaway:[
    'Check a product is ready to run, and name who owns it when it breaks.',
    'Recruit design partners honestly, with clear consent and data handling.',
    'Combine what users say with what they do, and trust behaviour when they disagree.',
    'Prioritise the next fix by frequency, severity and cost.',
    'Tell users what changed, and turn support requests into product evidence.'
  ],
  needs:[['A deployed app with analytics','This chapter puts it in front of real users.','B4'],
         ['A release checklist','You use it before launch.','B5'],
         ['Reading failures by hand','Idea 4 builds a failure list the same way.',14.5],
         ['Interview skills','You observe sessions with the same care.','A3']],
  capstone:{
    title:'A live product, real users and one evidence-based iteration',
    brief:'Launch to real people, watch what happens, change one thing because of what you saw, and show whether it helped.',
    steps:[
      'Deploy the capstone to a stable live URL. Add monitoring, analytics, a privacy notice, a way to send feedback and a rollback procedure.',
      'Recruit 5–10 real target users. Observe at least five sessions, and record task success, time, failures, quotes and whether they come back.',
      'Choose one iteration from the evidence, ship it, and compare product and AI metrics before and after. Publish a changelog.'
    ],
    done:[
      'The users are real target users, not teammates or friends doing you a favour.',
      'The iteration links to a specific problem you measured, with the numbers before and after.',
      'The changelog says what changed, why, and what users should do differently.',
      'Rubric: reliability 20%, user evidence 30%, iteration quality 30%, learning clarity 20%.',
      'Mastery gate: score each artifact 0–3. Move on only when every artifact scores at least 2 and no safety, privacy or evidence item scores 0.'
    ]
  },
  check:[
    ['Do you have real user evidence, not teammate demo traffic?',
     'Filter your analytics to exclude your own team and test accounts, then look again. Count the users who fit your target profile and used the product for their own work. If that number is below five, you have run a demo, not a launch.'],
    ['Can you tie the iteration to a measured problem?',
     'Write it as a chain: we saw this, in this many sessions, so we changed that, and this number moved. For example: 4 of 6 users could not find why a ticket was in a theme, so we added a “why this theme” link, and themes marked useful rose from 58% to 71%.'],
    ['What would trigger rollback?',
     'Name the number and the threshold before launch. For example: roll back if error rate passes 5% for an hour, if useful-theme rate drops 10 points, or if any data reaches the wrong account. A trigger decided in advance lets anyone on the team act quickly.']
  ],
  story:[
    ['c','Before you start','About eighteen hours, spread over two or three weeks, because users need time to come back. You need your deployed app from B4 and the release checklist from B5.'],

    ['h','Idea 1: Ready to run, and owned'],
    ['p','A demo works while you watch it. A product has to work while nobody is watching. Check these before any real user arrives:'],
    ['tb',['Area','Ready when'],[
      ['Monitoring','You get an alert when errors or latency rise'],
      ['Analytics','Your tracking plan events arrive from the live app'],
      ['Privacy','A notice says what you collect, why, and how to delete it'],
      ['Feedback','A user can report a problem in one click'],
      ['Rollback','You have tested going back to the previous version'],
      ['Cost','A spending limit is set with the model provider']
    ]],
    ['p'  ,'Every production system also needs an owner: the person who responds when it breaks at a bad time. For a capstone, that is you. Write down how you will be alerted, and how quickly you will respond.'],
    ['do','Prove it now',[
      ['p','Go through the six rows for your capstone. Fix anything that is not ready.'],
      ['x','Six ticks, or a list of what is missing. Counterexample: a failure your monitoring would not catch, such as the model returning plausible but wrong themes.']
    ]],
    ['q','I614'],

    ['h','Idea 2: Recruiting design partners ethically'],
    ['p','<strong>Design partners</strong> are early users who agree to use an unfinished product and tell you what they find. Recruit them honestly:'],
    ['l',[
      'Say clearly that the product is early and may be wrong.',
      'Explain what data you collect, where it goes and how they can delete it. Get written consent.',
      'Do not use data they did not agree to share. For Theme Finder, start with a sample of tickets they choose.',
      'Offer something fair in return, such as early access or a discount, but do not pay so much that they feel they owe you praise.',
      'Let them stop at any time without any awkwardness.'
    ]],
    ['p','Look for people who have the problem now and use your target tools. Your A3 interviewees are a good place to start. Friends and colleagues are easy to recruit, but they are too polite to be useful.'],
    ['do','Prove it now',[
      ['p','Write the recruiting message you will send. Include what the product does, what you ask of them, what data is involved and what they get.'],
      ['x','A short message. Read it as the recipient: is anything unclear or pushy? Counterexample: a person who fits your target but should not be recruited, and why.']
    ]],

    ['h','Idea 3: What users say, and what they do'],
    ['p','Users often say one thing and do another. They say a feature is great and never use it again. They complain about something and keep using the product every day. You need both kinds of evidence.'],
    ['p','Watch at least five sessions. Give each user a real task and stay quiet while they work. Record the same fields each time:'],
    ['code','Session 3 — support lead, 40-person team, Freshdesk\n\nTask            Find this week’s fastest-growing issue\nSucceeded?      Yes, after one wrong turn\nTime            4 min 10 s\nFailures        Opened "Billing" first; theme name was vague\nQuote           "I don’t know why this ticket is in here."\nCame back?      Yes, the next two Mondays (from analytics)'],
    ['key','When what users say and what they do disagree, trust what they do, and then ask them why.'],
    ['do','Prove it now',[
      ['p','Run your first observed session and fill in the seven fields.'],
      ['x','One complete session record. Counterexample: a situation where what the user said was more useful than what they did.']
    ]],

    ['h','Idea 4: Prioritising failures and opportunities'],
    ['p','After five sessions and two weeks of data, you will have more problems than time. Put them in one list, and score each one:'],
    ['tb',['Problem','How often','How bad','Cost to fix','Priority'],[
      ['Unclear why a ticket is in a theme','4 of 6 users','High: they stop trusting it','Small','1'],
      ['Import fails for over 5,000 tickets','1 account','High for them','Medium','2'],
      ['Theme names too long','3 of 6','Low','Small','3'],
      ['Wants Zendesk support','2 prospects','Blocks them entirely','Large','Later']
    ]],
    ['p','Mix AI failures and product failures in the same list. A wrong theme and a confusing button both cost users. Reuse the failure taxonomy you built in Chapter 14.5 for the AI rows.'],
    ['do','Prove it now',[
      ['p','Build your list with at least five problems from your sessions and data. Pick the top one.'],
      ['x','A scored list and one choice. Write down the number you expect it to move, and by how much.']
    ]],
    ['try',{id:'b6-iterate',mins:10,min:120,rows:6,
      task:'Describe the iteration you will ship. Write the problem with its evidence, the change, the metric you expect to move and by how much, and what you will do if it does not move.',
      ph:'We saw… so we will… we expect… if it does not move…',
      after:'A strong answer: <strong>We saw</strong> 4 of 6 users question why a ticket was in a theme, and only 58% of themes were marked useful. <strong>We will</strong> add a “why this theme” link that shows the three phrases that matched. <strong>We expect</strong> useful themes to rise above 65% within two weeks, with no increase in time per report. <strong>If it does not move,</strong> the problem may be the grouping itself, not the explanation. We will then review 50 disputed tickets by hand before changing anything else.'}],
    ['q','I615'],

    ['h','Idea 5: Release notes and support loops'],
    ['p','Each time you ship, tell users what changed. A good changelog entry is short and practical:'],
    ['code','15 October — Why is this ticket here?\n\nEach ticket in a theme now has a "why" link. It shows the\nphrases that put it there. If a ticket is in the wrong theme,\nuse "Move" and we will learn from it.\n\nKnown issue: imports over 5,000 tickets can time out.\nWe are working on it.'],
    ['p','Support requests are free product research. Log each one with its category and the account. Review the log weekly with your analytics. A problem that appears in support, sessions and data together is almost certainly real.'],
    ['do','Prove it now',[
      ['p','Write the changelog entry for your iteration. Then set up a simple support log with date, account, category and what you did.'],
      ['x','One entry and one log. Counterexample: a change that should not be announced, and why.']
    ]]
  ]
},
{
  id:'b7', num:'B7', part:7, curriculumTier:'selective', phase:7, prerequisites:['b6','ch20d','ch19pm'], nextUnits:[], minutes:720, labs:[],
  title:'Getting the job: career readiness for AI PM roles',
  concept:'Turn what you built in this course into evidence an employer can see. You will target the right roles, write case studies and a resume from your work, practise each kind of interview, and complete a timed take-home.',
  takeaway:[
    'Build a role matrix from real job descriptions, and find the gaps in your evidence.',
    'Write resume bullets and case studies that show your decisions and their results.',
    'Answer product sense, strategy, metrics and execution questions with a clear structure.',
    'Work through an AI system-design question, including evaluation, cost and failure.',
    'Tell behavioural stories about your own decisions, and prepare to negotiate.'
  ],
  needs:[['A shipped capstone with evidence','Your case studies come from it.','B6'],
         ['Architecture and vendor strategy','System-design interviews ask about it.',33],
         ['AI product management','Interviewers expect its vocabulary.',32]],
  capstone:{
    title:'A role matrix, two case studies, mock interviews and a take-home',
    brief:'Build the evidence and the practice that get you from applying to an offer.',
    steps:[
      'Build a role matrix from ten job descriptions. Find the skills that keep appearing, and the ones you cannot yet prove.',
      'Turn two projects into case studies. Show the problem evidence, your decisions, the trade-offs, the metrics, the failures and what you learned.',
      'Rewrite your resume bullets as action + decision + measurable result. Record four mock interviews and score each one with a rubric.',
      'Complete one 48-hour take-home within a fixed time limit. Then write a critique of your own answer.'
    ],
    done:[
      'The role matrix covers ten real job descriptions and marks each skill as proven, partly proven or missing.',
      'Each case study includes at least one decision that turned out wrong, and what you did about it.',
      'Every resume bullet has a number or a concrete result.',
      'The four mock interviews cover product sense, metrics, AI system design and behavioural questions.',
      'Mastery gate: score each artifact 0–3. Move on only when every artifact scores at least 2.'
    ]
  },
  check:[
    ['Can a recruiter see both product judgement and technical depth in 30 seconds?',
     'Give your resume to someone for 30 seconds, then take it away. Ask what they remember. If they say “built an AI app”, the judgement is missing. You want something like “chose a fixed workflow over an agent after measuring both, and cut failures by half”.'],
    ['Do your stories name your decision, not only team activity?',
     'Count the sentences that start with “we”. Interviewers need to know what you did. Change “we launched a pilot” to “I chose to pilot with ten teams instead of one hundred, because our eval set was too small to trust at scale”.'],
    ['Can you explain one failed experiment without defensiveness?',
     'Practise it out loud. State what you expected, what happened, what you learned and what you changed. Do not blame the data, the team or the timeline. Interviewers are looking for the change you made, not a spotless record.']
  ],
  story:[
    ['c','Before you start','About twelve hours. Collect ten job descriptions for roles you would apply for. Have your capstone evidence pack from B6 ready, and find a friend or peer who can run mock interviews with you.'],

    ['h','Idea 1: Target roles and position yourself with evidence'],
    ['p','“AI product manager” covers several different jobs. They ask for different evidence:'],
    ['tb',['Role type','What you build','What they look for'],[
      ['AI features in an existing product','New AI features for current users','Product judgement; shipping; working with ML teams'],
      ['AI-native product','A product that only exists because of AI','Speed; prototyping; evaluation; comfort with uncertainty'],
      ['AI platform','Tools, APIs or models for other teams','Technical depth; developer experience; reliability'],
      ['Internal AI','AI tools for employees','Change management; security; measurable time saved']
    ]],
    ['p','Build a <strong>role matrix</strong>. List ten real job descriptions across the top, and every skill they mention down the side. Tick each skill each role asks for. The skills with the most ticks are what the market wants. Then mark each one as proven, partly proven or missing for you.'],
    ['p','Position yourself around what you can prove. “I shipped an AI product to ten real users and improved its useful-result rate from 58% to 71%” beats “passionate about AI”.'],
    ['do','Prove it now',[
      ['p','Start your role matrix with three job descriptions. Mark your top three proven skills and your biggest gap.'],
      ['x','A small matrix and one gap. Counterexample: a skill a job description lists that you think does not really matter for the role.']
    ]],
    ['q','I616'],

    ['h','Idea 2: Resume, LinkedIn and case studies'],
    ['p','Write each resume bullet as <strong>action + decision + measurable result</strong>:'],
    ['code','Weak    Worked on an AI support-ticket tool.\n\nBetter  Built an AI tool that groups support tickets into themes.\n\nStrong  Built and shipped a ticket-theming tool to 10 support teams;\n        chose a fixed workflow over an agent after testing both,\n        cutting failed runs from 15% to 5%.'],
    ['p','A <strong>case study</strong> is a one or two page story of a project. Use this structure:'],
    ['n',[
      '<strong>Problem</strong>, with the evidence that it was real.',
      '<strong>Your decisions</strong>, and the options you rejected.',
      '<strong>Trade-offs</strong> you made knowingly.',
      '<strong>Results</strong>, with numbers.',
      '<strong>What failed</strong>, and what you changed.',
      '<strong>What you would do next.</strong>'
    ]],
    ['p','Put your two best case studies where a recruiter will find them, such as a personal site linked from your LinkedIn profile. Your LinkedIn headline should say the role you want and one thing you have proven.'],
    ['do','Prove it now',[
      ['p','Rewrite three of your current resume bullets in the strong form.'],
      ['x','Three bullets, each with a decision and a number. Counterexample: a bullet where you cannot find a number. What would you measure next time?']
    ]],

    ['h','Idea 3: Product sense, strategy, metrics and execution interviews'],
    ['p','Most PM interview loops include these four kinds of question. Each has a structure that keeps you on track:'],
    ['tb',['Type','Example','Structure'],[
      ['Product sense','Design a product for busy parents','Clarify the goal → pick a user → list problems → choose one → propose solutions → prioritise → say how you would measure it'],
      ['Strategy','Should we enter the Indian market?','Goal → market → customer → competition → our advantage → recommendation and risks'],
      ['Metrics','Daily users fell 10%. Why?','Check the data → internal or external? → which segment? → which step? → hypotheses → how to test'],
      ['Execution','Two teams need the same engineer. What do you do?','Clarify impact → options → trade-offs → decision → how you tell people']
    ]],
    ['p','Say your structure out loud before you start. It lets the interviewer follow you, and redirect you early if needed. Then make a clear choice. Interviewers want to see you commit to a decision and explain why.'],
    ['do','Prove it now',[
      ['p','Answer the metrics example above out loud in ten minutes. Record yourself.'],
      ['x','A recording. Listen back and check: did you ask about data quality first, and did you end with a way to test your best hypothesis?']
    ]],
    ['q','I617'],

    ['h','Idea 4: AI system-design interviews'],
    ['p','AI PM loops often include a question such as “design a support assistant for our product”. The interviewer wants to see technical judgement, not code. Work through these steps:'],
    ['n',[
      '<strong>Users and task.</strong> Who uses it, for what, and what does success look like?',
      '<strong>Approach.</strong> Prompt only, retrieval, a fixed workflow or an agent? Say why.',
      '<strong>Evaluation.</strong> How will you know it works before and after launch?',
      '<strong>Failure modes.</strong> What happens when it is wrong, slow or attacked?',
      '<strong>Cost and latency.</strong> A rough cost per task, and the latency users will accept.',
      '<strong>Rollout.</strong> Who gets it first, what you measure and when you would roll back.'
    ]],
    ['p','Use numbers wherever you can, even rough ones. “About 2,000 tokens per question, so roughly half a cent” shows you understand the system. Everything in Parts I–V is preparation for this interview.'],
    ['do','Prove it now',[
      ['p','Answer “design a support assistant for an online store” using the six steps. Take fifteen minutes.'],
      ['x','Six short sections. Check that evaluation and failure modes are not the thinnest ones. They usually are.']
    ]],

    ['h','Idea 5: Behavioural stories, take-homes, networking and negotiation'],
    ['p','Behavioural questions ask about your past, such as “tell me about a time you disagreed with an engineer”. Prepare six to eight stories from real work. Tell each one as situation, task, action and result, with most of the time spent on your action.'],
    ['p','<strong>Take-home assignments</strong> test how you work alone. Stick to the time limit you are given, and state your assumptions at the top. End with what you would do with more time. Reviewers value a clear, honest answer over a long one.'],
    ['p','<strong>Networking</strong> works best when you have something to show. Share a case study with a specific person and ask one specific question. That gets more replies than asking for a referral.'],
    ['p','<strong>Negotiation</strong> starts with preparation. Research the salary range for the role and location. Wait for the company to make an offer first. Then ask once, politely, with a reason, such as a competing offer or the scope of the role.'],
    ['try',{id:'b7-story',mins:10,min:120,rows:6,
      task:'Write one behavioural story about a decision you made in your capstone that turned out wrong. Use situation, task, action and result. Keep the focus on what you did.',
      ph:'Situation… Task… Action (what I decided and why)… Result and what I changed…',
      after:'A strong story: <strong>Situation:</strong> Theme Finder’s first version let an agent decide the steps for the weekly report. <strong>Task:</strong> I owned getting it reliable enough for ten design partners. <strong>Action:</strong> I expected the agent to handle unusual weeks better, so I kept it at first. When 3 of 20 test weeks failed, I built the same flow as a fixed workflow and ran both on the same cases. <strong>Result:</strong> the workflow failed once in 20 and was twice as fast, so I switched. I learned to measure both options before committing, and now I do that for every major design choice.'}],
    ['q','I618']
  ]
},

{
  id:'b8', num:'B8', part:7, curriculumTier:'core', phase:6, prerequisites:['a7','ch21cap','b1'], nextUnits:[], minutes:1800, labs:[],
  title:'The integrated capstone: discover, build, ship, measure and defend',
  concept:'Bring the whole course together in one product. You will take a real problem through five gates, from discovery to a defence in front of an executive audience, with evidence at every step.',
  takeaway:[
    'Choose a real problem with users you can actually reach.',
    'Design the product and the AI system together, end to end.',
    'Show that it is accurate, safe, measured and viable as a business.',
    'Launch to real users and improve it from evidence.',
    'Tell the story of the project and defend its trade-offs under questions.'
  ],
  needs:[['Every Track A artifact','Gates 1 and 2 reuse them.','A7'],
         ['The technical capstone','Gate 3 builds on it.',34],
         ['Pricing and unit economics','Gate 5 needs them.','B1'],
         ['A live product with real users','Gate 4 extends it.','B6']],
  capstone:{
    title:'Five gates',
    brief:'Take one real problem all the way from interviews to an executive defence. Each gate has to pass before you start the next.',
    steps:[
      'Gate 1, Discovery: five interviews, a jobs-to-be-done statement, a journey map, a market and competitor scan, and a problem brief backed by evidence.',
      'Gate 2, Strategy: vision, strategy, roadmap, OKRs, stakeholder map, pricing hypothesis and kill criteria.',
      'Gate 3, Build: PRD, prototype, vertical slice, a 30–50 case eval set, architecture, threat model, observability and a repository that builds cleanly from scratch.',
      'Gate 4, Ship: live URL, analytics, 5–10 real users, a support log, a funnel and cohort, one evidence-based iteration and a tested rollback.',
      'Gate 5, Defend: unit economics, growth loop, vendor scorecard, decision log, a 10-slide executive deck and a public case study.'
    ],
    done:[
      'Discovery gate: the evidence is traceable, and at least one assumption changed.',
      'Technical gate: evals, safety and failure handling pass the thresholds you documented.',
      'Product gate: users complete the target task, and their behaviour is instrumented.',
      'Business gate: the buyer, price, margin and acquisition logic are credible.',
      'Defence gate: you can explain trade-offs, failures and the next decision without hiding uncertainty.',
      'Mastery gate: score each artifact 0–3. Move on only when every artifact scores at least 2 and no safety, privacy or evidence item scores 0.'
    ]
  },
  check:[
    ['Discovery gate: is the evidence traceable, and did at least one assumption change?',
     'Pick any claim in your problem brief and follow it back to an interview note or a data point. Then name the assumption you started with that the evidence changed. If nothing changed, you may have heard what you expected to hear.'],
    ['Technical gate: do evals, safety and failure handling pass documented thresholds?',
     'Show the thresholds you wrote before testing, and the results next to them. Include the safety cases, such as prompt injection and wrong-recipient tests, as well as quality. A threshold set after seeing the results does not count.'],
    ['Product gate: do users complete the target task, and is behaviour instrumented?',
     'Show the task success rate from observed sessions, and the funnel from analytics for the same task. The two should roughly agree. If they do not, find out why before you present.'],
    ['Business gate: are the buyer, price, margin and acquisition logic credible?',
     'Check that each one rests on evidence from this course. The buyer comes from interviews, the price from B1, the margin from your cost model at high usage, and acquisition from a growth loop you have seen work at least once.'],
    ['Defence gate: can you explain trade-offs, failures and the next decision without hiding uncertainty?',
     'Practise with someone who will push back. For each hard question, say what you know, what you do not, and what you would do next to find out. Admitting uncertainty clearly builds more trust than a confident answer that falls apart.']
  ],
  story:[
    ['c','Before you start','About thirty hours, over four to six weeks. This chapter adds little new teaching. It asks you to use everything from the course on one product, and to show the evidence. You can continue with your capstone from earlier chapters, or start a new problem.'],
    ['p','Work through the gates in order. Each gate ends with a review: score every artifact from 0 to 3 and fix anything below 2 before you move on. If you can, ask someone else to score it too.'],

    ['h','Idea 1: A real problem with reachable users'],
    ['p','Pick a problem where you can talk to five users within two weeks. The best capstones come from a job you have done, a team you know or a community you belong to. A good problem is frequent, costly and currently solved badly.'],
    ['tb',['Test','Pass','Fail'],[
      ['Reachable','I can book five interviews this week','I would need to find users first'],
      ['Frequent','It happens weekly or more','It happens once a year'],
      ['Costly','It costs hours or money today','It is mildly annoying'],
      ['Fit for AI','It needs reading, sorting or writing text','A form or a formula would solve it']
    ]],
    ['do','Prove it now',[
      ['p','Score your problem against the four tests. Book the first two interviews today.'],
      ['x','Four passes, and two interviews in your calendar. Counterexample: a problem that passes all four and is still a poor capstone. What else would you check?']
    ]],

    ['h','Idea 2: Design the product and the AI system together'],
    ['p','Product decisions and technical decisions depend on each other. Whether a user needs an answer in two seconds or by Monday decides the architecture. Design both on one page:'],
    ['code','User and job        Support lead; understand what customers\n                     are struggling with this week\nActivation moment    Sees a theme they did not know about\nAI approach          Fixed workflow: classify → group → summarise\nWhy not an agent     Same steps every week; 19/20 vs 17/20 in tests\nEval                 50 labelled tickets; precision ≥ 85%\nBoundaries           Read-only helpdesk access; email needs approval\nCost                 ≈ $13 per customer per month at base usage\nNorth Star           Weekly teams that act on a theme'],
    ['do','Prove it now',[
      ['p','Write your one-page design using the nine lines above.'],
      ['x','Nine filled lines. Check that each technical choice links to a product reason. Counterexample: one line that you chose because it was interesting rather than needed.']
    ]],

    ['h','Idea 3: Evaluation, security, analytics and business viability'],
    ['p','Gate 3 and Gate 5 ask you to prove four different things. Each needs its own evidence:'],
    ['tb',['Question','Evidence','Taught in'],[
      ['Does it work?','Eval set of 30–50 cases with thresholds','Chapters 6 and 29'],
      ['Is it safe?','Threat model, injection tests, data-flow diagram','Chapters 13 and 31'],
      ['Do people use it?','Tracking plan, funnel, cohort','B3'],
      ['Does it make money?','Cost model, pricing, margin at high usage','B1']
    ]],
    ['p','A common failure is strong evidence on one question and none on another. A beautifully evaluated product with no pricing logic will not pass Gate 5.'],
    ['do','Prove it now',[
      ['p','For each of the four questions, write one sentence on your current evidence, and rate it 0–3.'],
      ['x','Four sentences and four scores. Your lowest score is where your next week goes.']
    ]],
    ['q','I619'],

    ['h','Idea 4: Launch and iterate from evidence'],
    ['p','Gate 4 repeats B6 on your final product. Launch to 5–10 real users, observe sessions, and ship at least one iteration based on what you find. Keep a support log from day one.'],
    ['p','Test your rollback for real before launch. Deploy a harmless change, roll it back, and time it. A rollback you have never tried is only a plan.'],
    ['do','Prove it now',[
      ['p','Run the rollback test and write down how long it took.'],
      ['x','A time in minutes. If it took longer than fifteen minutes, simplify it before launch.']
    ]],

    ['h','Idea 5: Tell the story and defend it'],
    ['p','The last gate is a presentation to a senior audience. Ten slides is enough:'],
    ['n',[
      'The problem, and who has it.',
      'The evidence it is real.',
      'What you built, in one picture.',
      'Does it work? Eval results against thresholds.',
      'Is it safe? The main risks and how you handled them.',
      'Do people use it? Funnel, retention and quotes.',
      'Does it make money? Price, cost and margin.',
      'What failed, and what you changed.',
      'Trade-offs you made, and the ones you would revisit.',
      'The decision you are asking for, and what comes next.'
    ]],
    ['p','Then write a public case study from the same material. It becomes the centrepiece of your portfolio from B7.'],
    ['try',{id:'b8-defend',mins:12,min:120,rows:6,
      task:'Write your answer to the hardest question you expect in the defence. For example: “Why should we believe this works beyond your ten design partners?”',
      ph:'What we know… what we do not know yet… what we would do next…',
      after:'A strong answer separates what is known from what is not. For example: <strong>We know</strong> that 8 of 10 design partners used it for four weeks in a row, and that precision held at 86% on their real tickets. <strong>We do not know yet</strong> whether it holds for teams on other helpdesks, or with more than 5,000 tickets a week, because none of our partners had those. <strong>Next,</strong> we would add two partners from each missing group, with the same eval set and thresholds, before any wider launch. The answer admits uncertainty and gives a clear way to reduce it.'}]
  ]
}

];

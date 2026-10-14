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
  concept:'In this chapter you’ll work out who pays for your product, how to charge them, and whether each customer makes you money or loses it. You’ll model the real cost of an AI task, compare pricing models, and write a pricing recommendation that names its risks.',
  takeaway:[
    'Separate the person who pays from the person who uses the product and the person who can block the purchase.',
    'Compare seat, usage, outcome and hybrid pricing, and say which risk each one moves to whom.',
    'Calculate the cost per successful task, including retries, human review and support.',
    'Tell a real flywheel from a hopeful one, and keep it within what users agreed to.',
    'Name the ways a model vendor can squeeze your margin, and what you would do about each.'
  ],
  needs:[['A sized market and named alternatives','You set a price against what the customer would do instead.','A4'],
         ['Cost per query','The cost stack in Idea 3 starts from it.',15],
         ['Build or buy','Depending on a vendor is the other side of that decision.',18.5]],
  capstone:{
    title:'Decide how to charge, and prove the numbers',
    brief:'A tool that people love can still fail if it loses money on every message. In this chapter you learned to separate the person who pays from the person who uses and the person who can block. You also learned to compare ways of pricing, and to work out the cost of one successful task, including retries, human review and support. Here you decide how Bharat Privacy Guard should be priced.',
    where:'Written work. Interviews and a cost spreadsheet. No code is needed.',
    steps:[
      'Interview five possible buyers, a mix of developers and compliance people. Ask what they use today, who owns the budget, and what the problem costs them. Don’t ask “would you pay?”.',
      'Build a cost table for one successfully cleaned message at low, base and high usage. Include retries, human review of unsure cases and support time as their own lines, not only the model calls.',
      'Design three pricing packages, for example a free open-source kit, a paid hosted service, and a gateway for companies. For each, say who pays, what is counted, and who carries the risk if usage jumps.',
      'Plan a short survey that asks people at what price the tool is too cheap, fair, expensive and too expensive.',
      'Write a one-page pricing recommendation: the price, the margin at high usage, what happens to the margin if the model provider doubles its price, and the risks.'
    ],
    done:[
      'Five interviews, each naming the current alternative and who signs off the spend.',
      'A cost table with low, base and high rows, and support time on its own line.',
      'Three pricing packages and a survey plan.',
      'A recommendation that states the margin at high usage and what a doubled model price does.',
      'A score from 0 to 3 for each of the items above, using the scale in this chapter. Move on only when every score is at least 2 and no safety, privacy or evidence item scores 0.'
    ]
  },
  check:[
    ['Who pays, who uses and who blocks the purchase?',
     'Name a role for each. For Theme Finder, the head of support pays, support leads use it every week, and the security lead can block it. Each of them wants something different. The user wants time back. The buyer wants a number to show their own boss. And the blocker wants to know where the ticket data goes.'],
    ['Can revenue grow faster than inference and support cost?',
     'Check your cost model at high usage. With seat pricing, a team that sends ten times the tickets pays the same, but costs you more. If your margin falls as usage grows, add some included usage with a charge for going over it. Or price per ticket above a certain number.'],
    ['What behaviour strengthens your flywheel without violating trust?',
     'For Theme Finder, the behaviour is a lead correcting a theme label. That improves the customer’s own results straight away. Using one customer’s tickets to improve results for another customer is a different matter. It needs their contract and their consent. So the safe default is to keep each customer’s corrections inside their own account.']
  ],
  story:[
    ['c','Before you start','Plan for about twelve hours, spread over several sittings. Keep your market sizing from A4 open, along with the cost per query numbers from Chapter 15. You’ll need five prospects to interview, so start booking them now.'],
    ['p','So far you’ve been asking whether an AI system works. This chapter asks a different question: if it works, can it pay for itself? We’ll go through it in five ideas, and at the end you’ll write a pricing recommendation you can defend.'],

    ['h','Idea 1: Value and willingness to pay'],
    ['p','Start with a simple question. Why would anyone pay for your product? Because it does a job better or cheaper than what they do today. So the price ceiling comes from that alternative, not from your costs. Your costs only set the floor.'],
    ['p','In products sold to businesses, three different people usually matter. The table below shows them, using the Theme Finder example. Notice that each one cares about something different.'],
    ['tb',['Role','Theme Finder example','What they care about'],[
      ['User','Support lead','Getting Monday morning back'],
      ['Buyer','Head of support','A number to show their own manager'],
      ['Blocker','Security lead','Where ticket data goes and who can see it']
    ]],
    ['p','Now let’s work out value from the alternative. A support lead spends about three hours a week building the ticket report by hand. At $40 an hour, that is about $520 a month for one lead.'],
    ['p','A tool that saves most of that time is worth a lot less than $520 to the buyer, because adopting it also costs them effort. But it is still worth far more than a few dollars. That gap between the two is where your price lives.'],
    ['c','Watch out','Don’t ask “would you pay for this?”. People say yes to be polite, and the answer tells you nothing. Ask what they use today, what it costs them, and who approved that spend. Past spending is evidence. Future intentions are not.'],
    ['do','Prove it now',[
      ['p','Fill in the user, the buyer and the blocker for your capstone. Then estimate what the current alternative costs one customer per month.'],
      ['x','Three roles and one monthly cost, with your working shown. Then write one counterexample: a customer for whom your product saves nothing, because their alternative is already cheap.']
    ]],
    ['q','I601'],

    ['h','Idea 2: Seat, usage, outcome and hybrid pricing'],
    ['p','Once you know the value, the next question is how to charge for it. There are four common ways to charge for an AI product. Each one moves a different risk onto a different party.'],
    ['p','As you read the table, look at the last column. It tells you what can go wrong with each model.'],
    ['tb',['Model','You charge for','Good because','Risk'],[
      ['Seat','Each user, per month','Easy for the buyer to budget','Heavy users cost you more but pay the same'],
      ['Usage','Each ticket, call or credit','Revenue follows your cost','Buyers cannot predict the bill, so they ration use'],
      ['Outcome','Each successful result, such as a resolved ticket','Price follows value','You need an agreed, measurable definition of success'],
      ['Hybrid','A platform fee with some usage included, then a charge for going over it','Predictable, and protects your margin','More complex to explain and sell']
    ]],
    ['p','AI products break the usual seat model. Traditional software costs almost nothing for each extra use, so a flat seat price is safe. An AI feature has a real cost every time it runs. So one heavy customer on a seat price can wipe out the margin from ten light ones.'],
    ['p','Outcome pricing is attractive, and some support tools already charge per resolved conversation. But it only works if you and the customer agree on what counts as an outcome. You also need to measure it without arguments.'],
    ['do','Prove it now',[
      ['p','Pick the pricing model you would start with for your capstone. Write one sentence on why, and one on the risk it leaves you with.'],
      ['x','One model, one reason and one risk. Counterexample: describe a customer for whom that model would feel unfair.']
    ]],

    ['h','Idea 3: The AI cost stack and contribution margin'],
    ['p','Now let’s look at your side of the price. The cost of an AI feature is more than the model bill. To see all of it, build the full stack for one customer for one month.'],
    ['p','Here is the base case for Theme Finder, at 300 tickets a week. Read it line by line, and notice where the biggest number sits.'],
    ['code','One customer, one month, 300 tickets a week\n\nModel: classify 1,300 tickets x $0.0004      $0.52\nModel: 4 weekly summaries x $0.05            $0.20\nRetries and re-runs (+15%)                   $0.11\nHosting, database, logging                   $2.00\nSupport: 20 minutes x $30/hour               $10.00\n                                             ------\nTotal cost to serve                          $12.83\n\nReports the lead accepted: 4.3 x 85%          3.7\nCost per successful report                   $3.47'],
    ['p','Two things stand out. First, support time costs more than ten times as much as the model. Second, the useful unit is the <strong>cost per successful task</strong>. A report the lead rejects still cost you money, so you divide by the reports that worked.'],
    ['p','Next, how much does each customer leave you? That is the <strong>contribution margin</strong>, which is what remains after the costs that grow with that customer. At $49 a month, it is ($49 − $12.83) ÷ $49, or about 74%.'],
    ['p','But that is only the base case. What happens when a customer uses the product more, or less? The table shows the same customer at three levels of use.'],
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
    ['p','Now try a harder case yourself. Take your time, and show your working.'],
    ['try',{id:'b1-margin',mins:10,min:100,rows:6,
      task:'A customer on Theme Finder grows from 300 to 3,000 tickets a week. They stay on the $49 seat plan. Model cost scales with tickets, and support time goes from 20 to 30 minutes a month. Work out their new cost to serve and margin, and say what you would change.',
      ph:'Model cost… support… total… margin… what I would change…',
      after:'Classification becomes 13,000 tickets × $0.0004 = $5.20, plus about $1 for summaries and retries. Hosting rises to about $3 with ten times the data. Support is 30 minutes × $30 = $15. The total is roughly $24, so the margin falls to about 51%. That is still positive, but it keeps falling as they grow. A reasonable fix is a hybrid plan: $49 includes 1,000 tickets a week, and each extra 1,000 tickets a week adds $10 a month. At 3,000 tickets a week they pay $69, so the margin is back to about 65%. The customer’s bill still follows the value they get, and your margin stops falling as they grow.'}],
    ['q','I602'],

    ['h','Idea 4: Data, workflow and platform flywheels'],
    ['p','A good business gets stronger as more people use it. A <strong>flywheel</strong> is the loop behind that: using the product makes the product better, which brings more use. Three kinds show up in AI products, and they are not equally strong.'],
    ['p','The first is the data flywheel. User corrections improve the model, so results get better with use. This is often weaker than people claim. Improvements flatten out after a few thousand examples, and contracts may stop you pooling data across customers.'],
    ['p','The second is the workflow flywheel. The product becomes part of a weekly routine, and other work starts to depend on it. For Theme Finder, the Monday report feeds the product team’s planning meeting. This is usually the strongest kind.'],
    ['p','The third is the platform flywheel. Other people build on your product, which makes it more useful to everyone. It is rare, and it needs a lot of users first.'],
    ['c','Why this matters','A flywheel that relies on customer data only works while customers trust you with it. Say clearly what you store, what you train on and who can see it. Get consent before using one customer’s data to improve results for another.'],
    ['do','Prove it now',[
      ['p','Name the one user behaviour that would make your capstone better with use. Say which type of flywheel it drives.'],
      ['x','One behaviour and its flywheel type. Counterexample: a situation where that behaviour would make the product worse, such as corrections from a careless user.']
    ]],

    ['h','Idea 5: Vendor dependence and gross-margin risk'],
    ['p','The last idea is about something outside your control. If your product runs on another company’s model, that company can change your costs and your quality without asking you.'],
    ['p','This shows up in your <strong>gross margin</strong>, which is revenue minus the direct cost of delivering the product. For AI products, a big part of that cost is the model vendor’s bill. The table lists four things a vendor can do, what each does to you, and what you can do about it today.'],
    ['tb',['What the vendor can do','What it does to you','What you can do now'],[
      ['Raise prices','Margin falls overnight','Keep a second model tested on your eval set'],
      ['Retire a model','Quality changes when you migrate','Pin model versions; plan migrations early'],
      ['Change rate limits','Customers hit errors at busy times','Add queues and a fallback model'],
      ['Launch a competing feature','Your product looks redundant','Own the workflow and the customer relationship']
    ]],
    ['p','You can’t remove this risk, but you can price it in. Your recommendation should say what happens to your margin if the model price doubles, and how long it would take you to switch.'],
    ['do','Prove it now',[
      ['p','Recalculate your base-case margin with the model price doubled. Then estimate how many days it would take to switch to a second vendor.'],
      ['x','One new margin figure and one switching estimate. If you can’t estimate the switch, you are missing an eval set that works with any vendor. Chapter 33 covers vendor exit.']
    ]],
    ['q','I603'],
    ['p','You now have everything for a recommendation. Write the opening paragraph, the one a busy reader will read first.'],
    ['try',{id:'b1-rec',mins:12,min:150,rows:7,
      task:'Write the first paragraph of your pricing recommendation. Include the price, the pricing model, the margin at high usage and the biggest risk.',
      ph:'I recommend… because… at high usage… the biggest risk is…',
      after:'A strong opening: <strong>I recommend a hybrid plan at $49 per team per month, including 1,000 tickets a week, with $10 a month for each extra 1,000 tickets a week.</strong> Our alternative is three hours of a support lead’s time a week, about $520 a month, so the price is well under the value. The contribution margin is 74% at base usage and stays above 60% at high usage because of the overage. The biggest risk is model price. If it doubles, the base margin falls to about 72%, and switching to our tested second model takes about a week.'}],
    ['h','What you have learned'],
    ['p','Let’s pull the five ideas together. A price is set by the value of the customer’s alternative, and by who pays, who uses and who can block. There are four ways to charge, and each one moves risk to someone different.'],
    ['p','The real cost of a task includes retries, review and support, so you measure the cost per successful task at low, base and high usage. You also saw that a flywheel needs trust, and that a model vendor can squeeze your margin, so you price that risk in.'],
    ['p','Next, B2 looks at growth, onboarding and product marketing: how people find your product, and how you get them to the moment where it works for them.']
  ]
},

{
  id:'b2', num:'B2', part:7, curriculumTier:'reference', phase:0, prerequisites:['a3','a4','a7'], nextUnits:['b3'], minutes:720, labs:[],
  title:'Growth, onboarding and product marketing',
  concept:'In this chapter you’ll work out how people find your product, how they get value from it quickly, and why they come back. You’ll define the events for each growth stage, test onboarding with real users, and design one growth loop you’d be comfortable defending in public.',
  takeaway:[
    'Define acquisition, activation, retention, referral and revenue events, and know where the funnel model misleads.',
    'Name the activation moment for your product and measure time-to-value.',
    'Use the Fogg behaviour model to explain why a user did or did not act.',
    'Choose between product-led, sales-led and product-led sales motions.',
    'Tell a network effect from virality, and design an ethical growth loop.'
  ],
  needs:[['Interview skills','You’ll watch five people go through onboarding.','A3'],
         ['A positioning statement','Idea 5 builds on it.','A4'],
         ['A prototype','The onboarding test uses one.','A7']],
  capstone:{
    title:'Plan how the tool grows, and test the first five minutes',
    brief:'A good tool still needs a way for people to find it, try it and stay. In this chapter you learned to define the events of a growth funnel, to find the moment a user first gets value, and to tell a network effect from simple sharing. Here you plan growth for the developer kit and test the first five minutes with real developers.',
    where:'Written work, plus a short test with real people. For the teardown, use a no-code AI tool for a few days. No code of your own is needed.',
    steps:[
      'For each stage of the funnel write one event you could log: acquisition (a developer visits the kit’s page), activation (the first successful cleaning), retention (still using it a week later), referral (shares it) and revenue (starts paying).',
      'Name the activation moment for the kit and write the steps a new developer takes to reach it.',
      'Test the first five minutes. Give five developers only the kit’s README and ask each to clean one message. Measure how long each takes to the first success, and note the step where most of them stopped.',
      'Design one growth loop you would be happy to explain to your users, for example a small “protected by” badge that links to the tool. Name one dark pattern you refuse to use.',
      'Write a teardown of how one AI tool (Cursor, Lovable, Grammarly or Notion AI) wins its users, covering acquisition, activation, retention and money.'
    ],
    done:[
      'One loggable event for each of the five funnel stages.',
      'A report of the time to first success for each of the five developers, and the step where most stopped.',
      'A growth loop that names the dark pattern it refuses to use.',
      'A teardown of one AI tool.',
      'A score from 0 to 3 for each of the items above, using the scale in this chapter. Move on only when every score is at least 2 and no safety, privacy or evidence item scores 0.'
    ]
  },
  check:[
    ['What single behaviour predicts retained value?',
     'Look for the action that users who stay have done and users who leave have not. For Theme Finder, it might be “opened a theme and read the tickets inside it in the first week”. That shows they trusted the grouping enough to check it. Find it in your data, not by guessing. Then design onboarding to get people there.'],
    ['Is your “network effect” actually just virality?',
     'Ask whether the product gets better for existing users when a new user joins. If a new team makes Theme Finder better for other teams, that is a network effect. If a new team only means more people see the product, that is virality. Virality helps growth. But only a network effect makes the product harder to leave.'],
    ['Name one dark pattern your plan refuses to use.',
     'Be specific. For example: we will not send invitations from a user’s account without showing them each one first. Or: we will not hide the cancel button. Write it into the plan, so the decision is already made when growth targets get tight.']
  ],
  story:[
    ['c','Before you start','Plan for about twelve hours. You need your prototype from A7 and five people from your target users. Pick one of Cursor, Lovable, Grammarly or Notion AI for the teardown, and use it for a few days first.'],
    ['p','In the last chapter you worked out who pays for your product and how to charge them. But a good price means little if nobody finds the product, or if people try it once and leave. This chapter is about those two problems: how people find your product, and how they come to need it.'],

    ['h','Idea 1: AARRR, and where funnels mislead'],
    ['p','Let’s start with a way of splitting growth into stages. <strong>AARRR</strong> names five of them: acquisition, activation, retention, referral and revenue. The first job is to define one event for each stage, so you can count it.'],
    ['p','The table gives an example for Theme Finder. Each event is something a product could actually log.'],
    ['tb',['Stage','Question','Theme Finder event'],[
      ['Acquisition','Did they arrive?','Signed up with a work email'],
      ['Activation','Did they get value?','Viewed their first theme report'],
      ['Retention','Did they come back?','Viewed a report in 3 of the next 4 weeks'],
      ['Referral','Did they bring others?','Shared a report with a colleague who signed up'],
      ['Revenue','Did they pay?','Started a paid plan']
    ]],
    ['p','The funnel is a good start, but it has limits. It suggests people move in a straight line, when many come back through referrals and shared reports. It also tempts you to fix the top of the funnel first. Most of the time, retention is the stage that decides whether a product works.'],
    ['key','If users do not stay, more sign-ups only means losing people faster.'],
    ['do','Prove it now',[
      ['p','Write one event for each of the five stages for your capstone.'],
      ['x','Five events, each something your code could log. Counterexample: a stage where your product’s users would not move in funnel order.']
    ]],
    ['q','I604'],

    ['h','Idea 2: Activation moments and time-to-value'],
    ['p','Now let’s look closely at the second stage. The <strong>activation moment</strong> is the first time a user gets the value your product promises. For Theme Finder, it is seeing a theme the lead didn’t know about. Everything before that moment is cost to the user.'],
    ['p','So how do you know if the road to that moment is too long? You measure <strong>time-to-value</strong>, which is how long it takes to get there, counted from sign-up. Here is a first onboarding test with five support leads. Read down the table, and see where people drop off.'],
    ['tb',['Step','Users who finished','Median time'],[
      ['Sign up','5 of 5','1 min'],
      ['Connect Freshdesk','3 of 5','6 min'],
      ['Wait for first import','3 of 5','12 min'],
      ['View first theme report','3 of 5','20 min total']
    ]],
    ['p','The drop-off is at connecting Freshdesk. Two users needed an admin to approve access. A fix could be a sample report built from twenty tickets the user pastes in. That puts the activation moment before the hard step.'],
    ['do','Prove it now',[
      ['p','Write your capstone’s activation moment in one sentence. List every step a new user takes before reaching it.'],
      ['x','One moment and a list of steps. Circle the step most likely to lose people. Counterexample: a user who reaches the moment but still doesn’t see the value.']
    ]],

    ['h','Idea 3: Retention, habits and the Fogg model'],
    ['p','Getting someone to the activation moment once is not enough. Do they come back? The best way to see this is a curve. Take everyone who signed up in the same week, and plot the share still active in each week after.'],
    ['p','A healthy curve drops, then flattens. A curve that keeps falling to zero means the product hasn’t found a lasting use.'],
    ['p','BJ Fogg’s behaviour model explains why a person does or doesn’t act. It says a behaviour happens when three things meet at the same moment:'],
    ['code','Behaviour = Motivation + Ability + Prompt\n\nMotivation  Does the lead want to do it right now?\nAbility     Is it easy enough at that moment?\nPrompt      Does something remind them to do it?'],
    ['p','If a behaviour isn’t happening, check the three from the bottom up: prompt first, then ability, then motivation. Missing prompts are the cheapest fix. For Theme Finder, a Monday 9am email with the top three themes is the prompt. The report opening in one click keeps ability high.'],
    ['do','Prove it now',[
      ['p','Pick the behaviour you most want users to repeat. Write its motivation, ability and prompt.'],
      ['x','Three short lines. Counterexample: a user with strong motivation who still doesn’t act. Which of the three is missing for them?']
    ]],
    ['q','I605'],

    ['h','Idea 4: Product-led, sales-led and product-led sales'],
    ['p','Next, how does a customer actually get from hearing about you to paying? A <strong>go-to-market motion</strong> is that path. There are three common ones. The last column of the table says when each one fits.'],
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
    ['p','A funnel ends when the customer pays. Some products do better than that, because each customer brings in the next one. A <strong>growth loop</strong> is a cycle where one user’s actions bring in the next user. Unlike a funnel, the output feeds back into the input.'],
    ['code','Lead views weekly report\n  → shares the top theme with the product team\n    → a product manager sees it and asks for their own view\n      → they sign up and connect their own queue\n        → they share their report with their team ...'],
    ['p','Be careful with two terms that sound alike. <strong>Virality</strong> means users bring in other users. A <strong>network effect</strong> means the product gets better for everyone as more people use it. Many products have the first without the second.'],
    ['p','Positioning decides which loop can work. If you are positioned as “the weekly report for support leads”, sharing with product managers makes sense. Reuse the positioning statement you wrote in A4.'],
    ['c','Watch out','A <strong>dark pattern</strong> is a design that tricks users into acting against their own interest. Examples are pre-ticked invitation boxes, fake scarcity and hidden cancellation. They can lift your numbers for a quarter. But they also destroy the trust that retention depends on.'],
    ['do','Prove it now',[
      ['p','Draw your capstone’s growth loop as four or five arrows. Mark the step where a user decides to share.'],
      ['x','One loop, and one sentence on why a user would choose to share. Counterexample: what would make your loop feel like spam?']
    ]],
    ['q','I606'],
    ['p','You’ve now seen all five ideas on one product. To finish, look at how a real AI tool does it.'],
    ['try',{id:'b2-teardown',mins:15,min:150,rows:7,
      task:'Start your teardown. Pick one of Cursor, Lovable, Grammarly or Notion AI. For each of acquisition, activation, retention and monetisation, write one line about how it works and one thing you would copy.',
      ph:'Acquisition… Activation… Retention… Monetisation…',
      after:'A good teardown line is specific and checkable. For example, for Grammarly: <strong>Acquisition</strong> comes from people seeing its suggestions inside everyday tools, and the free plan spreads it. <strong>Activation</strong> is the first underlined suggestion in your own writing, which arrives within seconds. <strong>Retention</strong> comes from living where people already write, so there is no new habit to form. <strong>Monetisation</strong> gates the more advanced suggestions behind a paid plan. The thing to copy: activation happens inside the user’s existing work, not on a separate page.'}],
    ['h','What you have learned'],
    ['p','Let’s recap. Growth has five stages, and you can count each one with an event, but the funnel hides loops, and retention matters most. Your product has one activation moment, and the shorter the time-to-value, the fewer users you lose on the way.'],
    ['p','The Fogg model tells you why people do or don’t act. You can reach customers by product-led, sales-led or product-led sales motions. And a growth loop works best when it’s a real network effect and doesn’t rely on dark patterns.'],
    ['p','Next, B3 looks at product analytics and experiments: how to turn these events into numbers you can trust, and how to test a change before you roll it out to everyone.']
  ]
},
{
  id:'b3', num:'B3', part:7, curriculumTier:'selective', phase:6, prerequisites:['a5','a6','b2'], nextUnits:['b4'], minutes:840, labs:[],
  title:'Product analytics and experiments',
  concept:'Real users are now using your product, so the next question is what they actually do, and which changes helped. You’ll write a tracking plan, build a funnel and a retention cohort, and design an experiment that can give a clear answer.',
  takeaway:[
    'Pick a North Star metric, and the input metrics that move it.',
    'Write an event taxonomy with clear names, properties and user identity.',
    'Build a funnel, a retention cohort and segments, and read them correctly.',
    'Design an A/B test with a guardrail, a minimum detectable effect and a stopping rule.',
    'Check your data before you trust it, and avoid claiming causes you have not shown.'
  ],
  needs:[['A North Star metric','Idea 1 turns it into something you can measure.','A5'],
         ['OKRs and guardrail metrics','Experiments use the same guardrails.','A6'],
         ['Growth events','The tracking plan records them.','B2'],
         ['Evaluation engineering','Idea 5 keeps model quality and product analytics apart.',29]],
  capstone:{
    title:'Plan the measurements, and design one experiment',
    brief:'Once real people use the tool, you need to know what they do. In this chapter you learned to pick the one number that matters most, to write clear event names, to read a funnel and a retention table, and to design a test with a guardrail and a stopping rule. Now you’ll do all of that for Bharat Privacy Guard.',
    where:'A real analytics tool (PostHog, Mixpanel or Google Analytics) for the tracking code and the charts. Then write the experiment design in the notes box below.',
    steps:[
      'Choose the one number that matters most for the kit, for example “messages cleaned correctly per week by active developers”. Then choose three input numbers that move it.',
      'Write an event list with names in the form object_action, for example text_checked, detail_found, detail_masked and review_requested. For each event, write the properties it carries (such as the kind of writing and the kind of ID) and the question it answers. Never record the personal details themselves.',
      'Put the events into an analytics tool with a few lines of tracking code. If you have no users yet, use made-up data and say so.',
      'Build one funnel (visit, first check, first success), one weekly retention table and two segments, for example English users against Hinglish users.',
      'Design one experiment, for example: “showing a preview of what will be hidden makes more developers finish setup”. Write the hypothesis, who is randomly assigned, the main number, a guardrail, the smallest change you care about, how many users you need, and when you will stop.'
    ],
    done:[
      'One main number, with three input numbers.',
      'An event list in which every event answers a named question and none records personal details.',
      'A funnel, a retention table and two segments, built from events you logged.',
      'An experiment design that says how many users it needs, and what you will do if you cannot get that many.',
      'A score from 0 to 3 for each of the items above, using the scale in this chapter. Move on only when every score is at least 2 and no safety, privacy or evidence item scores 0.'
    ]
  },
  check:[
    ['Can every event name answer a product question?',
     'Go through the tracking plan line by line, and write the question next to each event. For example, “report_viewed” answers “do leads come back each week?”. If you cannot write a question for an event, remove it. Extra events cost storage and attention, and they make the useful ones harder to find.'],
    ['Why is LLM quality telemetry not product analytics?',
     'They answer different questions. Traces and eval scores tell you whether the model did its job on a request. Product analytics tells you whether people got value and came back. A model can score 95% on your eval set while users ignore the report. You need both, and neither one can stand in for the other.'],
    ['What selection bias could invalidate your cohort?',
     'Look at who is in the cohort and how they got there. Say your first cohort is design partners you recruited personally. They are more motivated than typical users, so their retention will look too good. Compare them with users who found the product on their own before you draw any conclusions.']
  ],
  story:[
    ['c','Before you start','This chapter takes about fourteen hours. Create a free account with PostHog, Mixpanel or Google Analytics. If your capstone has no users yet, you will seed some data, and the chapter shows how.'],

    ['p','In the last chapter you looked at how people find a product and get started with it. Now comes the next question. Once real people are using it, how do you know it is working? Opinions won’t answer that. What users actually do will.'],
    ['p','This chapter gives you five ideas to answer it. You’ll pick the one number that matters, decide which events to record, read the three views that answer most questions, run a fair test, and check that your data can be trusted. '],
    ['p','Along the way you’ll use Theme Finder, an example product that turns support tickets into themes a team can act on.'],

    ['h','Idea 1: North Star and input metrics'],
    ['p','Suppose you could watch only one number to tell whether users get real value from your product. Which one would you pick? That number is the North Star metric, and you met it in A5.'],
    ['p','For Theme Finder, it is <strong>weekly teams that act on a theme</strong>. Acting on a theme means something like filing a bug or changing a help article.'],
    ['p','The catch is that you cannot move a North Star directly. You move it through smaller numbers that a team can change this quarter. These are called <strong>input metrics</strong>. Here are four for Theme Finder:'],
    ['code','North Star: weekly teams that act on a theme\n\nInput metrics\n  1. Teams that view a report each week        (habit)\n  2. Share of tickets assigned to a theme      (coverage)\n  3. Share of themes marked "useful"           (quality)\n  4. Minutes from import to first report       (speed)'],
    ['p','Each input should be something one team owns, with a clear link to the North Star. Now suppose an input goes up and the North Star does not. Then your link is wrong. That is useful to learn, because now you know which assumption to fix.'],
    ['do','Prove it now',[
      ['p','Write your capstone’s North Star and three input metrics. Then name the team or person who could move each input.'],
      ['x','One North Star, three inputs and an owner for each. Counterexample: an input that could rise while the North Star falls.']
    ]],
    ['q','I607'],

    ['h','Idea 2: Event taxonomies, properties and identity'],
    ['p','To measure anything, you first have to record it. Each time a user does something in your product, such as signing up or opening a report, the product can write down a small note about it. That note is called an <strong>event</strong>.'],
    ['p','If everyone names events in their own way, the data turns into a mess. So teams agree on one naming rule. The list of events, together with that rule, is called an <strong>event taxonomy</strong>. A common rule is <code>object_action</code>, in lower case and past tense.'],
    ['p','Here are five events for Theme Finder. Look at the last column. Every event exists to answer one question.'],
    ['tb',['Event','Properties','Question it answers'],[
      ['account_created','plan, signup_source','Where do new teams come from?'],
      ['helpdesk_connected','helpdesk, ticket_count','How many teams get through the hard step?'],
      ['report_viewed','week, themes_shown','Do leads come back each week?'],
      ['theme_marked_useful','theme_id, useful','Is the grouping any good?'],
      ['theme_shared','channel','Does the growth loop run?']
    ]],
    ['p','An event alone only says that something happened. <strong>Properties</strong> add detail to it, so you can split the results later. Keep them to what you need. And never put ticket text or personal data in them.'],
    ['p','You also need to know who did it. <strong>Identity</strong> links events to a person. A visitor starts with an anonymous ID. When they sign up, you link it to a user ID, so their earlier visits join their history. In B2B products, also attach a company or account ID. Your buyer cares about teams, not single users.'],
    ['p','Finally, write all of this down in one place. A <strong>tracking plan</strong> is the shared document that lists every event, its properties, when it fires and who owns it. Engineers build from it, and analysts can trust the data because of it.'],
    ['do','Prove it now',[
      ['p','Write five events for your capstone using <code>object_action</code> names. Add the question each one answers.'],
      ['x','Five events with questions. Counterexample: an event you were tempted to add that answers no question.']
    ]],

    ['h','Idea 3: Funnels, cohorts, segments and retention'],
    ['p','Once events start arriving, three views answer most product questions. Let’s take them one at a time.'],
    ['p','The first is the <strong>funnel</strong>. It shows the share of users who complete each step in order, so you can see where people drop off.'],
    ['p','The second is the <strong>cohort</strong>, which is a group of users who started in the same period. A retention table follows each cohort over time and shows how many of them keep coming back.'],
    ['p','The third is the <strong>segment</strong>, a slice of users who share a property, such as plan or helpdesk. Comparing segments shows who the product works for.'],
    ['p','Here is a weekly retention table. Each row is a cohort. Each cell is the share still viewing reports that many weeks later.'],
    ['tb',['Cohort','Teams','Week 1','Week 2','Week 4','Week 8'],[
      ['1 Sep','20','70%','55%','45%','40%'],
      ['8 Sep','25','72%','60%','52%',''],
      ['15 Sep','18','78%','66%','','']
    ]],
    ['p','You can read it in two ways. Across a row, the curve flattens around 40%, which suggests lasting use. Down a column, newer cohorts retain better, which suggests that recent changes helped.'],
    ['p','Both readings need enough users before you trust them. With 20 teams, one team is five percentage points. So a single team leaving can move the number a lot.'],
    ['do','Prove it now',[
      ['p','Sketch the retention table you expect for your capstone’s first three cohorts. Then say which segment you expect to retain best, and why.'],
      ['x','A small table and one segment prediction. Write it down now, so you can compare it with real data later.']
    ]],
    ['q','I608'],

    ['h','Idea 4: A/B tests, guardrails and sample size'],
    ['p','Sometimes you want to know whether one specific change helped. Comparing numbers before and after is risky, because other things change at the same time. The fair way is an <strong>A/B test</strong>. You show the change to a random half of users and compare them with the other half.'],
    ['p','Randomising is what lets you say the change caused the difference.'],
    ['p','Write the design down before you start. A design also needs a guardrail, which is a number that must not get worse while you chase the main one. Here is a design for Theme Finder:'],
    ['code','Hypothesis   A sample report before connecting the helpdesk\n             will raise activation.\nUnit         Account (not user: teammates share a report)\nPrimary      Share of accounts that view a first report\n             within 7 days\nGuardrail    Share of accounts that connect a helpdesk\n             must not fall\nMDE          +5 percentage points (from 20% to 25%)\nStop rule    Run until each group has the planned sample.\n             No early peeking.'],
    ['p','Notice the stop rule. “No early peeking” means you don’t check the result halfway and stop the moment it looks good. You wait until each group has its planned sample.'],
    ['p','How many users is that? It depends on the <strong>minimum detectable effect</strong> (MDE), which is the smallest change worth detecting. The smaller the change you care about, the more users you need. A rough rule for a yes/no metric, at the usual settings, is:'],
    ['code','users per group ≈ 16 × p × (1 − p) ÷ MDE²\n\np = 0.20, MDE = 0.05\n16 × 0.20 × 0.80 ÷ 0.0025 = 1,024 accounts per group'],
    ['c','Why this matters','An early B2B product may have forty accounts, not two thousand. It cannot run this test. Say so, and use other evidence instead: watch sessions, compare before and after with care, and look for large effects. Running an underpowered test, one with too few users to give a clear answer, and reporting its result is worse than not testing.'],
    ['do','Prove it now',[
      ['p','Write the full experiment design for one change to your capstone, using the seven lines above. Then work out the sample size.'],
      ['x','A complete design and a number. If the number is bigger than your user base, write what you will do instead.']
    ]],
    ['try',{id:'b3-sample',mins:8,min:80,rows:5,
      task:'Your activation rate is 30%. You want to detect a rise to 40%. Use the rule of thumb to estimate the users needed per group. Then say whether you would run the test with 150 new accounts a month.',
      ph:'16 × … × … ÷ … = … per group, so…',
      after:'Here p = 0.30 and the MDE is 0.10. The sum is 16 × 0.30 × 0.70 ÷ 0.01 = 336 accounts per group, or 672 in total. At 150 new accounts a month, that takes about four and a half months. That is probably too slow for a product that is changing every week. You have two options. You can aim only for a larger effect, which needs fewer users. Or you can decide from session observations and a careful before-and-after comparison, and state clearly that it is weaker evidence.'}],
    ['q','I609'],

    ['h','Idea 5: Data quality, QA and causal humility'],
    ['p','Here is an uncomfortable fact. Bad data looks exactly like good data on a chart. So check your tracking before you trust a single number:'],
    ['n',[
      'Trigger each event yourself and confirm it arrives once, with the right properties.',
      'Compare an event count with your database. For example, compare accounts created with the rows in the accounts table.',
      'Filter out your own team’s traffic and test accounts.',
      'Check that events still fire after each release.'
    ]],
    ['p','Next, keep product analytics separate from model telemetry. Telemetry means the records a system keeps about itself: traces, latency (how long a request took) and eval scores. These tell you how the model behaved (Chapter 30). Product events tell you what people did. Link the two with a shared request ID, so you can move between them.'],
    ['p','Finally, be careful about causes. Say users who share reports retain better. Sharing might cause that. It might also be that engaged users simply do both. Only a randomised test shows cause. Everything else is a pattern worth testing.'],
    ['key','Write “users who do X also tend to do Y”, unless a controlled test shows that X causes Y.'],
    ['do','Prove it now',[
      ['p','Run the four QA checks on one event in your capstone, and write down what you found.'],
      ['x','Four results. Counterexample: a chart in your capstone that would look fine even if an event were firing twice.']
    ]],

    ['h','What you have learned'],
    ['p','You now have a way to measure a product from end to end. You pick one number that matters and the inputs that move it. You record events with clear names. You read funnels, cohorts and segments. You test changes fairly, and you check your data before you believe it.'],
    ['p','Next, you’ll look at the tools that make all this work, and how to choose them for an AI product workflow.']
  ]
},

{
  id:'b4', num:'B4', part:7, curriculumTier:'reference', phase:0, prerequisites:['ch1','ch12t','a7'], nextUnits:['b5','b6'], minutes:150, labs:[],
  title:'Choosing tools for an AI product workflow',
  concept:'Think of this as one decision made eleven times, not as seventeen tools to learn. For each job your workflow needs done, ask what a tool in that slot has to do for you, and what breaks if you skip it. Pick one tool per job, and learn the job, not the brand.',
  takeaway:[
    'Name the eleven capabilities an AI product workflow needs tools for, without naming a specific brand for each.',
    'Choose one tool per capability by what it must do and what it must never do, not by what is popular.',
    'Know where every tool in your stack stores data and secrets, and audit what an AI research tool claims before you trust it.',
    'Explain what breaks when a vendor changes an API, and how you would notice.'
  ],
  needs:[['Your first API call','The capability table assumes you can already make one.',1],
         ['Tool calling and workflows','The automation and coding capabilities use the same ideas.',25],
         ['A prototype and a PRD','You already built one. This chapter looks again at how you chose its tool.','A7']],
  capstone:{
    title:'Choose one tool for each job, and check what each one does with your data',
    brief:'Tools change every few months, but the jobs they do stay the same. In this chapter you learned to name the jobs first, to choose a tool by what it must do and must never do, and to know where each tool stores data and keys. Now you’ll choose the tools for Bharat Privacy Guard and audit them.',
    where:'Written only. Name the tools and run the two audits. No code needed.',
    steps:[
      'List the capabilities your project really uses, from the eleven in this chapter: a language model, research, prototyping, coding help, automation, API testing, version control, deployment, a database, analytics and tracing. Most projects need five or six, not all eleven.',
      'For each capability you use, write the tool you chose, the job it does for this project, and one tool you could have chosen instead.',
      'Run a claim audit once. Take an AI summary of your own research on this project, pick ten claims, and check each one against its source. Mark each as supported, partly supported or unsupported.',
      'Run a secrets-and-data audit on your whole stack. For every tool, write what data it stores and where its keys live. Check that no key sits in front-end code or in your repository.',
      'Note any place where personal data could end up in a tool by accident, such as logs or analytics, and what stops it.'
    ],
    done:[
      'One chosen tool, one job and one alternative for each capability you use.',
      'A claim audit of ten claims, each one marked.',
      'A note of where every key lives and what data each tool stores.',
      'A list of the places personal data could leak into by accident, and how each one is prevented.',
      'A score from 0 to 3 for each of the items above, using the scale in this chapter. Move on only when every score is at least 2 and no safety, privacy or evidence item scores 0.'
    ]
  },
  check:[
    ['Can you name the capability without naming the brand?',
     'Cover the tool name and describe only the job. For example: “something that deploys my app on every push to the main branch and lets me roll back.” If you can only describe the brand’s screens and buttons, you have learned the tool, not the capability. You’ll be stuck when it is discontinued or its price changes.'],
    ['Which tool stores user data, and under what policy?',
     'List every tool in your stack and write down what it stores. A hosting tool stores code and logs. A database tool stores accounts and rows. An analytics tool stores events. And the model provider receives your prompts. For each one, find the data region, how long it keeps data, and whether it trains on it. Chapter 16.5 covers what you may send.'],
    ['Where are secrets stored?',
     'They belong in the platform’s environment variables or credential store. They never belong in the repository, the front-end code or a shared document. Search your repository history for key prefixes, to make sure none slipped in.'],
    ['What breaks when a vendor changes an API?',
     'Pick one dependency and trace it. Say the model provider renames a field in its response. Which step fails first, and would you notice? Good answers name three things: a validation step that fails loudly, an alert, and a pinned version that gives you time to update.']
  ],
  story:[
    ['c','Before you start','This chapter takes about two and a half hours. Tools change every few months. The brands named below are one current example each, not a requirement. If a named tool is gone by the time you read this, pick a replacement that does the same job.'],
    ['p','By now your project probably touches several tools: one for the model, one for code, one for tracking what users do. This chapter steps back and asks a simple question. How should you choose them?'],
    ['p','Here is the idea in a few lines. An AI product workflow needs eleven capabilities, from start to finish. A capability is a job that has to get done, such as storing your code safely or showing how people use the product. A tool is whatever you pick to do that job.'],
    ['p','Most projects use five or six of the eleven, not all of them. The mistake this chapter corrects is treating each capability as a subject to master. Think of each one as a slot to fill instead.'],
    ['h','The toolchain, by capability'],
    ['p','The table below lists the eleven. Read the middle column first. It says what any tool in that slot must do for you. The last column gives one current example, and nothing more.'],
    [
      'tb',
      ['Capability','What a tool in this slot must do for you','One current example'],
      [
        ['LLM / reasoning','Answer, draft and reason over text you give it, whenever you ask','ChatGPT, Claude'],
        ['Research / source grounding','Answer only from the sources you upload, with citations you can check','NotebookLM'],
        ['Prototyping','Turn a description into a working screen quickly, so a user can try it','Lovable, Google AI Studio, or Figma for flow only'],
        ['Coding','Read your repository, edit files and run commands, with you reviewing the changes','Claude Code, Cursor'],
        ['Automation','Connect a trigger, a call, a validation and an approval into a workflow that runs the same way every time','n8n'],
        ['API testing','Send an exact request, show the raw response, and save it as a check you can repeat','Postman'],
        ['Version control','Store code, review every change, and run checks before a change is merged','GitHub'],
        ['Deployment','Deploy on every push to the main branch, and roll back within minutes','Vercel'],
        ['Database','Give you sign-in, tables and row-level access rules, so one user cannot see another’s data','Supabase'],
        ['Analytics','Record events, and draw funnels and cohorts from real usage','PostHog'],
        ['Observability','Trace one request from start to finish: what it cost, how long it took and what it returned','Chapter 30’s trace schema (the fixed set of fields each trace records), in whatever tool shows it']
      ]
    ],
    ['key','Pick one tool per capability, and learn what that capability must do. The brand can be replaced. The capability cannot.'],
    ['h','Two habits that outlast every tool on this list'],
    ['p','Tools will come and go, but two habits will stay useful. The first is the <strong>claim audit</strong>. AI tools can summarise research quickly, but a summary can say things the source never said. So pick ten claims from an AI summary and check each one against its source. Mark each as supported, partly supported or unsupported.'],
    ['p','If more than one or two fail, stop trusting that workflow for decisions, whichever research tool produced it.'],
    ['p','The second habit is the <strong>secrets-and-data audit</strong>. For every tool in your stack, write what it stores and where its keys live. A key is a secret code that lets your app use a service.'],
    ['p','Generated prototypes especially tend to put API keys in front-end code, where anyone can read them, and to ship a database with no access rules. Check both before you share a link with anyone.'],
    ['do','Prove it now',[
      ['p','Run the claim audit once, on any AI-summarised research you already have. Then list your own capstone’s stack and run the secrets-and-data audit on it.'],
      ['x','Ten claims, each one marked. A short stack list, with each row naming what the tool stores and where its secrets live. Counterexample: a claim a source-grounded tool would still get wrong, such as what users did not mention.']
    ]],
    ['q','I610'],
    ['try',{id:'b4-stack',mins:10,min:120,rows:6,
      task:'List every tool in your capstone stack. For each one, write what data it stores or receives, and where its secrets live.',
      ph:'GitHub: … Vercel: … Supabase: … PostHog: … Model provider: …',
      after:'Here is a complete answer for the Theme Finder stack. <strong>GitHub</strong> stores code only, with no secrets, which you check by searching the history. <strong>Vercel</strong> stores the model and Supabase keys as environment variables, and keeps request logs. <strong>Supabase</strong> stores accounts, theme results and ticket IDs, with row-level access rules. <strong>PostHog</strong> stores events with account IDs, and no ticket text. <strong>The model provider</strong> receives ticket text in each request, so check its retention and training policy. <strong>n8n</strong> stores helpdesk and Slack credentials in its credential store. Writing this list is the start of the data-flow diagram your security lead will ask for.'}],

    ['h','What you have learned'],
    ['p','You now have a calm way to handle the tool noise. Name the job first. Pick one tool for it. Then check what that tool stores, where its keys live, and what its AI claims are really based on.'],
    ['p','Next, you’ll look at the system that wraps around the model inside your product, which is called the harness.']
  ]
},
{
  id:'b5', num:'B5', part:7, curriculumTier:'selective', phase:6, prerequisites:['ch13a','ch17o','ch18s'], nextUnits:['b6'], minutes:720, labs:[],
  title:'Harness engineering: the system around the model',
  concept:'The model is only one part of an AI product. The rest is the harness: the code that puts the request together, runs tools, keeps state, enforces rules, checks quality and records what happened. You’ll draw the harness around your capstone, build one workflow two ways, and write a release checklist.',
  takeaway:[
    'Name the seven parts of a harness, and find each one in your capstone.',
    'Recognise the patterns coding agents use, and reuse them in your own product.',
    'Set tool and permission boundaries, and say what evidence would justify widening them.',
    'Choose between a fixed workflow and a bounded agent, using measured results.',
    'Define release gates, a rollback trigger and who responds to an incident.'
  ],
  needs:[['Agents','Idea 4 compares an agent with a fixed workflow.',26],
         ['Observability','Traces are one part of the harness.',30],
         ['Security and governance','Idea 3 applies it to tool permissions.',31],
         ['A coding agent','Idea 2 looks at how one works.','B4']],
  capstone:{
    title:'Draw the harness around the model, and prepare a safe release',
    brief:'The model is only one part of the product. Everything around it decides whether the product is dependable: how the request is built, what the model may do, what is remembered, what is checked and what is recorded. In this chapter you learned the seven parts of that system, how to choose between a fixed workflow and a limited agent using measurements, and how to define release gates and a rollback trigger. Now you’ll do that for Bharat Privacy Guard.',
    where:'Code: build the rule-keeper both ways in your project’s own codebase. Then write the diagram and the checklist in the notes box below.',
    steps:[
      'Draw the harness around the tool: the inputs, how each request is put together, the tools, the stored state, the policies (such as your sharing rule), the test gates, the traces and the fallbacks.',
      'Mark on the drawing every point where the model’s output turns into an action, and what checks it on the way.',
      'Build the rule-keeper twice and run the same twenty sentences through both: once as a fixed set of steps, and once as an agent with a step limit. Compare how often each fails, how long each takes and how easy each is to debug.',
      'List the permissions each tool has, and the worst thing that could happen if each one were misused.',
      'Write a release checklist. It needs a rollback trigger that is a number someone can check, for example “roll back if missed Aadhaar numbers rise above 3 in 100”, and the name of the person who answers an incident.'
    ],
    done:[
      'A harness diagram that shows where the model’s output becomes an action, and what checks it.',
      'A comparison of the two builds on the same twenty sentences, with all three measures.',
      'A list of permissions and their worst cases.',
      'A release checklist with a numeric rollback trigger and a named incident owner.',
      'A score from 0 to 3 for each of the items above, using the scale in this chapter. Move on only when every score is at least 2 and no safety, privacy or evidence item scores 0.'
    ]
  },
  check:[
    ['Can you point to the boundary where model freedom ends?',
     'Point to it in the diagram. In Theme Finder, the model can choose theme names freely. Its output must then pass a schema check, which tests that the output has the expected shape. After that, nothing is emailed until a person approves it. That approval step is the boundary. If you cannot point to one, the model can take actions nobody checked.'],
    ['Which failures should stop, retry, degrade or escalate?',
     'Sort them by cause. Retry short network errors and rate limits, with a limit on the number of tries. Degrade when one part is down but the rest works, such as sending the report without the trend chart. Escalate to a person when output fails validation twice. Stop when an action would be irreversible and something looks wrong.'],
    ['What evidence is required before widening tool permissions?',
     'Decide it in advance. For example, before the agent can post to Slack without approval, it must complete 200 runs with approval where every post was approved unchanged. It must also pass the prompt-injection tests from Chapter 31. Write the threshold down before you look at the results.']
  ],
  story:[
    ['c','Before you start','This chapter takes about twelve hours. You need a working version of your capstone’s main flow, even a rough one, and a coding agent from B4.'],

    ['p','In the last chapter you chose the tools for your project. Now we look at what holds those tools together around the model. A model on its own only takes text in and gives text out. What makes it a dependable product is everything around it.'],
    ['p','Here’s what you’ll do. You’ll name the seven parts of that system and learn from how coding agents are built. Then you’ll set limits on what a tool may do, compare a fixed workflow with an agent, and plan a safe release.'],

    ['h','Idea 1: What a harness is'],
    ['p','Think of the gear that lets you steer something strong. The model is strong, but it can’t steer itself. A model only takes text in and gives text out. Everything else that makes an AI product work lives in the <strong>harness</strong> around it.'],
    ['p','A harness has seven parts. The table below names each one, says what it does, and shows what it looks like in Theme Finder.'],
    ['tb',['Part','What it does','Theme Finder example'],[
      ['Context','Builds what the model sees on each call','Instructions, 50 tickets, the existing theme list'],
      ['Tools','Lets the model read or act','Fetch tickets; look up a past theme'],
      ['State','Remembers things across steps and sessions','Last week’s themes; which tickets are done'],
      ['Orchestration','Decides what runs next','Classify, then group, then summarise'],
      ['Policy','Sets rules the model cannot override','No email without approval; no ticket text in logs'],
      ['Evals','Checks quality before and after release','50-ticket test set; weekly sample review'],
      ['Observability','Records what happened','A trace per run with tokens, cost and latency']
    ]],
    ['p','Orchestration is simply the part that decides which step runs next. Evals are the tests you score the model on. Observability is the record that lets you look back and see what happened.'],
    ['p','Two products using the same model can behave very differently because of their harnesses. In fact, most quality problems you will debug live in the harness, not in the model.'],
    ['do','Prove it now',[
      ['p','Fill in the seven rows for your capstone. Leave a row empty if you do not have that part yet.'],
      ['x','A seven-row table. The empty rows are your to-do list. Counterexample: a product where one of the seven parts really is not needed.']
    ]],

    ['h','Idea 2: How coding agents are built'],
    ['p','Coding agents such as Claude Code are the most widely used agents today. They’re also a good place to learn from, because their design shows patterns you can reuse in your own product. There are six of them.'],
    ['l',[
      '<strong>A simple loop.</strong> The model picks a tool, the harness runs it, and the result goes back to the model. This repeats until the task is done.',
      '<strong>A small set of general tools.</strong> These are things like read a file, edit a file, search and run a command. A few flexible tools beat dozens of narrow ones.',
      '<strong>Project memory.</strong> A file in the repository, such as <code>CLAUDE.md</code>, holds rules and conventions, and it is loaded on every run.',
      '<strong>Permission modes.</strong> Reading is allowed freely, but editing files or running commands can require approval.',
      '<strong>A verifier.</strong> Tests and type checks tell the agent whether its change worked, so a person does not have to read every line.',
      '<strong>Sub-agents.</strong> A large task is split up, and a helper works in its own context, so the main context stays small.'
    ]],
    ['key','The verifier matters most. An agent with a reliable way to check its own work can take on much larger tasks.'],
    ['do','Prove it now',[
      ['p','Give your coding agent one small task on your capstone, such as adding input validation. Watch which tools it calls, in order.'],
      ['x','The list of tool calls. Mark the step where it checked its own work. If it never did, what verifier could you add?']
    ]],

    ['h','Idea 3: Tool and permission boundaries'],
    ['p','Personal agents such as OpenClaw can run on your own computer, with access to your files, your messages and your shell, which is the place where commands are typed. That makes them useful. It also makes them dangerous.'],
    ['p','The same four questions apply to any agent that uses tools:'],
    ['n',[
      '<strong>Which tools can it call?</strong> Use an allowlist. Anything not on the list is refused.',
      '<strong>With what scope?</strong> Keep it read-only where possible. Limit it to one folder, one channel, one customer’s data.',
      '<strong>Which calls need approval?</strong> Anything that sends, deletes, pays or cannot be undone.',
      '<strong>What can reach it?</strong> Any text it reads, such as tickets, email or web pages, may contain instructions from an attacker.'
    ]],
    ['c','Watch out','Recall the lethal trifecta from Chapter 13. An agent with private data, untrusted input and a way to send data out can be tricked into leaking. Remove at least one of the three for every tool combination.'],
    ['p','So start narrow, and widen permissions only on evidence you defined in advance.'],
    ['do','Prove it now',[
      ['p','List every tool in your capstone. Mark each as read or write, and say whether it needs approval.'],
      ['x','A tool list with scopes. Check it for the lethal trifecta. Counterexample: a tool that looks read-only but can still leak data.']
    ]],
    ['q','I612'],

    ['h','Idea 4: Fixed workflows or bounded agents'],
    ['p','Now here is a design choice you’ll meet often. Should your code decide every step, or should the model decide?'],
    ['p','A <strong>state machine</strong> is a workflow where your code fixes every step and every transition. A <strong>bounded agent</strong> lets the model choose the steps, within a tool list and a step budget. Here they are side by side, for the weekly report:'],
    ['code','State machine                       Bounded agent\n\nFETCH → CLASSIFY → GROUP            Goal: produce the weekly report\n  → SUMMARISE → APPROVE → SEND      Tools: fetch, classify, group,\n                                           summarise, request_approval\nEach step has one next step.        Max 12 steps. Must request\nErrors go to RETRY or HUMAN.        approval before sending.'],
    ['p','Which one is better? Don’t guess. Build both and measure them on the same twenty test weeks. Here is what such a comparison can look like:'],
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
    ['p','The last idea is about releasing safely. A <strong>release gate</strong> is a check that must pass before a change reaches users. For AI products, the gates include the eval set, which is your set of test cases for the model, as well as ordinary tests. A typical set of gates looks like this:'],
    ['n',[
      'Unit tests and type checks pass.',
      'The eval set scores at or above the threshold, with no new failures in safety cases.',
      'Cost and latency per run are within budget.',
      'The change goes to 10% of accounts first, behind a feature flag, which is a switch that turns it on for some accounts only.',
      'The rollback trigger and the incident owner are written down.'
    ]],
    ['p','Gates stop most bad changes, but things will still go wrong sometimes. So decide in advance how the system responds to each kind of failure. The more serious the problem, the more careful the response.'],
    ['tb',['Response','When','Example'],[
      ['Retry','A temporary error','Rate limit; network timeout'],
      ['Degrade','One part is down but the rest works','Send the report without the trend chart'],
      ['Escalate','The output cannot be trusted','JSON fails validation twice'],
      ['Stop','An irreversible action looks wrong','The report would go to 500 people instead of 5']
    ]],
    ['p','When something does go wrong in production, the incident owner decides quickly, rolls back if needed and tells the affected users. Rolling back means returning to the previous version. Afterwards, write a short review: what happened, why, and what check would have caught it.'],
    ['try',{id:'b5-rollback',mins:8,min:100,rows:5,
      task:'Write the rollback trigger and incident plan for a new version of your capstone’s main prompt. Include a measurable trigger, who decides, how you roll back and how long it takes.',
      ph:'Roll back if… Decided by… How… Time to roll back…',
      after:'Here is a strong plan. <strong>Roll back if</strong> the share of themes marked useful drops more than 10 points below last week, or any report goes to the wrong recipient. <strong>Decided by</strong> the PM on call, who does not need anyone’s approval to roll back. <strong>How:</strong> switch the prompt version flag back to the previous version, because prompts are versioned in the repository. <strong>Time:</strong> under five minutes, and it was tested once before launch. Afterwards, the PM writes a one-page review within two days.'}],

    ['h','What you have learned'],
    ['p','The model is one part of your product. The harness around it decides whether the product can be trusted.'],
    ['p','You can now name its seven parts, borrow the patterns coding agents use, and limit what each tool may do. You can also choose between a fixed workflow and an agent by measuring, and you know how to release and roll back safely.'],
    ['p','Next, you’ll put your project in front of real users and learn from what they do.']
  ]
},

{
  id:'b6', num:'B6', part:7, curriculumTier:'selective', phase:6, prerequisites:['b4','b5','ch145'], nextUnits:['b7','b8'], minutes:1080, labs:[],
  title:'Ship to real users and run the learning loop',
  concept:'Put your capstone in front of real users, and learn from what they do. You’ll get it ready for production, recruit people ethically, combine what they say with what they do, and ship one improvement based on evidence.',
  takeaway:[
    'Check that a product is ready to run, and name who owns it when it breaks.',
    'Recruit design partners honestly, with clear consent and data handling.',
    'Combine what users say with what they do, and trust behaviour when the two disagree.',
    'Prioritise the next fix by how often it happens, how bad it is and what it costs.',
    'Tell users what changed, and turn support requests into product evidence.'
  ],
  needs:[['A deployed app with analytics','This chapter puts it in front of real users.','B4'],
         ['A release checklist','You use it before launch.','B5'],
         ['Reading failures by hand','Idea 4 builds a failure list the same way.',14.5],
         ['Interview skills','You observe sessions with the same care.','A3']],
  capstone:{
    title:'Put it in front of real users and make one improvement from what you see',
    brief:'A demo is not a launch. In this chapter you learned to check that a product is ready to run, to recruit testers honestly, to trust what people do over what they say, and to turn support requests into evidence. Now you’ll put the developer kit demo online, watch real people use it, and make one change because of what you saw.',
    where:'Code, to put the demo online and watch it, plus real user sessions. Then write the change note in the notes box below.',
    steps:[
      'Put the demo on a stable web address. Add monitoring, usage tracking that never records personal details, a privacy notice, a way to send feedback and a way to roll back.',
      'Recruit five to ten real target users, meaning developers or the people they build for. Ask for clear consent, explain what data is used, and let them stop at any time.',
      'Watch at least five sessions. Record whether each person succeeded, how long it took, where it failed, what they said, and whether they came back.',
      'Put the problems you saw in a list, and score each by how often it happened, how bad it was and how costly it is to fix. Choose one to fix.',
      'Fix it, ship it, and compare the numbers before and after. Write a short change note telling users what changed, why, and what they should do differently.',
      'Start a simple support log with the date, who asked, the category and what you did. Review it every week.'
    ],
    done:[
      'A live address with the safety items in place.',
      'Notes from at least five sessions with real target users, not friends or teammates doing you a favour.',
      'A scored problem list, and the one you chose.',
      'Before and after numbers for the change, and a change note for users.',
      'A score from 0 to 3 for each of the items above, using the scale in this chapter. Move on only when every score is at least 2 and no safety, privacy or evidence item scores 0.'
    ]
  },
  check:[
    ['Do you have real user evidence, not teammate demo traffic?',
     'Filter your analytics to exclude your own team and test accounts, then look again. Count the users who fit your target profile and used the product for their own work. If that number is below five, you have run a demo, not a launch.'],
    ['Can you tie the iteration to a measured problem?',
     'Write it as a chain: we saw this, in this many sessions, so we changed that, and this number moved. For example: 4 of 6 users could not find why a ticket was in a theme, so we added a “why this theme” link, and themes marked useful rose from 58% to 71%.'],
    ['What would trigger rollback?',
     'Name the number and the threshold before launch. For example: roll back if the error rate passes 5% for an hour, if the useful-theme rate drops 10 points, or if any data reaches the wrong account. A trigger decided in advance lets anyone on the team act quickly.']
  ],
  story:[
    ['c','Before you start','This chapter takes about eighteen hours, spread over two or three weeks, because users need time to come back. You need your deployed app from B4 and the release checklist from B5.'],

    ['p','In the last chapter you drew the system around the model and wrote a release checklist. Now you get to use it. Until real people try your product, everything you know about it is a guess.'],
    ['p','Here’s what you’ll do. You’ll get the product ready to run, recruit early users honestly, and watch what they do. Then you’ll choose the next fix, and tell users what changed.'],

    ['h','Idea 1: Ready to run, and owned'],
    ['p','A demo works while you watch it. A product has to work while nobody is watching. So before any real user arrives, check these six areas:'],
    ['tb',['Area','Ready when'],[
      ['Monitoring','You get an alert when errors rise or the app slows down'],
      ['Analytics','Your tracking plan events arrive from the live app'],
      ['Privacy','A notice says what you collect, why, and how to delete it'],
      ['Feedback','A user can report a problem in one click'],
      ['Rollback','You have tested going back to the previous version'],
      ['Cost','A spending limit is set with the model provider']
    ]],
    ['p','Every production system also needs an owner. That is the person who responds when it breaks at a bad time. For a capstone, that person is you. Write down how you will be alerted, and how quickly you will respond.'],
    ['do','Prove it now',[
      ['p','Go through the six rows for your capstone. Fix anything that is not ready.'],
      ['x','Six ticks, or a list of what is missing. Counterexample: a failure your monitoring would not catch, such as the model returning plausible but wrong themes.']
    ]],
    ['q','I614'],

    ['h','Idea 2: Recruiting design partners ethically'],
    ['p','Once the product is ready, you need people to try it. <strong>Design partners</strong> are early users who agree to use an unfinished product and tell you what they find. They give you their time, and sometimes their data. So recruit them honestly:'],
    ['l',[
      'Say clearly that the product is early and may be wrong.',
      'Explain what data you collect, where it goes and how they can delete it. Get written consent.',
      'Do not use data they did not agree to share. For Theme Finder, start with a sample of tickets they choose.',
      'Offer something fair in return, such as early access or a discount. But do not pay so much that they feel they owe you praise.',
      'Let them stop at any time, without any awkwardness.'
    ]],
    ['p','Look for people who have the problem now and already use your target tools. Your A3 interviewees are a good place to start. Friends and colleagues are easy to recruit, but they are too polite to be useful.'],
    ['do','Prove it now',[
      ['p','Write the recruiting message you will send. Include what the product does, what you ask of them, what data is involved and what they get.'],
      ['x','A short message. Read it as the recipient: is anything unclear or pushy? Counterexample: a person who fits your target but should not be recruited, and why.']
    ]],

    ['h','Idea 3: What users say, and what they do'],
    ['p','Now your partners are using the product. Remember that users often say one thing and do another. They say a feature is great and never use it again. They complain about something and keep using the product every day. So you need both kinds of evidence.'],
    ['p','Watch at least five sessions. Give each user a real task and stay quiet while they work. Record the same fields each time:'],
    ['code','Session 3 — support lead, 40-person team, Freshdesk\n\nTask            Find this week’s fastest-growing issue\nSucceeded?      Yes, after one wrong turn\nTime            4 min 10 s\nFailures        Opened "Billing" first; theme name was vague\nQuote           "I don’t know why this ticket is in here."\nCame back?      Yes, the next two Mondays (from analytics)'],
    ['key','When what users say and what they do disagree, trust what they do, and then ask them why.'],
    ['do','Prove it now',[
      ['p','Run your first observed session and fill in the seven fields.'],
      ['x','One complete session record. Counterexample: a situation where what the user said was more useful than what they did.']
    ]],

    ['h','Idea 4: Prioritising failures and opportunities'],
    ['p','After five sessions and two weeks of data, you will have more problems than time. So put them all in one list, and score each one by how often it happens, how bad it is and how much it costs to fix. Here is an example:'],
    ['tb',['Problem','How often','How bad','Cost to fix','Priority'],[
      ['Unclear why a ticket is in a theme','4 of 6 users','High: they stop trusting it','Small','1'],
      ['Import fails for over 5,000 tickets','1 account','High for them','Medium','2'],
      ['Theme names too long','3 of 6','Low','Small','3'],
      ['Wants Zendesk support','2 prospects','Blocks them entirely','Large','Later']
    ]],
    ['p','Mix AI failures and product failures in the same list. A wrong theme and a confusing button both cost users. For the AI rows, reuse the failure taxonomy you built in Chapter 14.5.'],
    ['do','Prove it now',[
      ['p','Build your list with at least five problems from your sessions and data. Pick the top one.'],
      ['x','A scored list and one choice. Write down the number you expect it to move, and by how much.']
    ]],
    ['try',{id:'b6-iterate',mins:10,min:120,rows:6,
      task:'Describe the iteration you will ship. Write the problem with its evidence, the change, the metric you expect to move and by how much, and what you will do if it does not move.',
      ph:'We saw… so we will… we expect… if it does not move…',
      after:'Here is a strong answer. <strong>We saw</strong> 4 of 6 users question why a ticket was in a theme, and only 58% of themes were marked useful. <strong>We will</strong> add a “why this theme” link that shows the three phrases that matched. <strong>We expect</strong> useful themes to rise above 65% within two weeks, with no increase in time per report. <strong>If it does not move,</strong> the problem may be the grouping itself, not the explanation. We will then review 50 disputed tickets by hand before changing anything else.'}],
    ['q','I615'],

    ['h','Idea 5: Release notes and support loops'],
    ['p','Each time you ship, tell users what changed. They notice a change much more easily when someone points it out. A good changelog entry is short and practical:'],
    ['code','15 October — Why is this ticket here?\n\nEach ticket in a theme now has a "why" link. It shows the\nphrases that put it there. If a ticket is in the wrong theme,\nuse "Move" and we will learn from it.\n\nKnown issue: imports over 5,000 tickets can time out.\nWe are working on it.'],
    ['p','There is one more source of evidence, and it comes to you for free. Support requests are product research. Log each one with its category and the account, and review the log weekly with your analytics. A problem that appears in support, in sessions and in the data together is almost certainly real.'],
    ['do','Prove it now',[
      ['p','Write the changelog entry for your iteration. Then set up a simple support log with date, account, category and what you did.'],
      ['x','One entry and one log. Counterexample: a change that should not be announced, and why.']
    ]],

    ['h','What you have learned'],
    ['p','You’ve now been through the whole learning loop. You get the product ready, find honest users, and watch what they do. Then you fix the problem that matters most, tell users, and keep listening through support.'],
    ['p','Next, you’ll turn the work you have done into a story for the AI PM job market.']
  ]
},
{
  id:'b7', num:'B7', part:7, curriculumTier:'selective', phase:7, prerequisites:['b6','ch20d','ch19pm'], nextUnits:[], minutes:720, labs:[],
  title:'Getting the job: career readiness for AI PM roles',
  concept:'You’ve built something real in this course. Now you’ll turn it into evidence an employer can see. You’ll pick the right roles to aim for, write case studies and a resume from your own work, practise each kind of interview, and finish a timed take-home.',
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
    title:'Turn the project into evidence for your next job',
    brief:'You started this course to get ready for a job, and the project is now your best evidence. In this chapter you learned to build a role matrix from real job descriptions. You also learned to write case studies and resume lines that show your decisions and their results, and to answer interview questions with a clear structure. Now you turn Bharat Privacy Guard into the proof you will show.',
    where:'Written, with recorded mock interviews. Code only if the role you apply for expects it in the take-home.',
    steps:[
      'Collect ten real job descriptions for roles you would apply for. Make a table with the skills they ask for down the side and the descriptions across the top. Mark which skills appear again and again, and mark each as proven, partly proven or missing for you.',
      'Write two case studies. One is Bharat Privacy Guard. Each must show the problem and your evidence for it, your decisions, the trade-offs, the numbers, the failures and what you learned. Include at least one decision that turned out wrong and what you did about it.',
      'Rewrite your resume lines as action, decision and result, and give each one a number. For example: “Chose rules over a model for fixed-shape IDs, which cut the cost of checking a message by 80%.”',
      'Answer this system-design question aloud in twenty-five minutes, and record yourself: “Design a privacy layer for Indian websites and AI chatbots.” Cover the users and the task, the approach, how you test it, how it fails, the cost and speed, and the rollout.',
      'Record three more mock interviews, one each on product sense, metrics and a story about a decision of yours that went wrong. Score all four with a rubric.',
      'Do one 48-hour take-home task within the time limit, and then write a critique of your own answer.'
    ],
    done:[
      'A role matrix covering ten real job descriptions, each skill marked proven, partly proven or missing.',
      'Two case studies, each with a decision that went wrong and what you did about it.',
      'Resume lines that each contain a number or a concrete result.',
      'Four recorded mock interviews, each scored with a rubric.',
      'A take-home answer and your own critique of it.',
      'A score from 0 to 3 for each of the items above, using the scale in this chapter. Move on only when every score is at least 2 and no safety, privacy or evidence item scores 0.'
    ]
  },
  check:[
    ['Can a recruiter see both product judgement and technical depth in 30 seconds?',
     'Give your resume to someone for 30 seconds, then take it away. Ask what they remember. If they say “built an AI app”, the judgement is missing. You want them to remember something like “chose a fixed workflow over an agent after measuring both, and cut failures by half”.'],
    ['Do your stories name your decision, not only team activity?',
     'Count the sentences that start with “we”. Interviewers need to know what you did. So change “we launched a pilot” to “I chose to pilot with ten teams instead of one hundred, because our eval set was too small to trust at scale”.'],
    ['Can you explain one failed experiment without defensiveness?',
     'Practise it out loud. Say what you expected, what happened, what you learned and what you changed. Don’t blame the data, the team or the timeline. Interviewers are looking for the change you made, not a spotless record.']
  ],
  story:[
    ['c','Before you start','This chapter takes about twelve hours. Collect ten job descriptions for roles you would apply for. Have your capstone evidence pack from B6 ready, and find a friend or peer who can run mock interviews with you.'],

    ['p','In the last chapter you shipped to real users and learned from what happened. That work is the best thing you have to show an employer. But an interviewer can’t see it unless you present it well.'],
    ['p','So this chapter is about turning your project into proof. You’ll choose the right roles, write about your work, practise the interview questions you’re likely to meet, and get ready to negotiate. Let’s start with the roles.'],

    ['h','Idea 1: Target roles and position yourself with evidence'],
    ['p','“AI product manager” sounds like one job. It isn’t. Companies use the title for several different jobs, and each one asks for different evidence. The table below shows four common types. As you read it, ask which row looks most like you.'],
    ['tb',['Role type','What you build','What they look for'],[
      ['AI features in an existing product','New AI features for current users','Product judgement, shipping, and working with ML teams'],
      ['AI-native product','A product that only exists because of AI','Speed, prototyping, evaluation, and comfort with uncertainty'],
      ['AI platform','Tools, APIs or models for other teams','Technical depth, developer experience, and reliability'],
      ['Internal AI','AI tools for employees','Change management, security, and time saved that you can measure']
    ]],
    ['p','How do you find out what the market wants? Build a <strong>role matrix</strong>. Take ten real job descriptions and list them across the top. Then list every skill they mention down the side, and tick each skill that each role asks for.'],
    ['p','The skills with the most ticks are what the market wants most. Now look at those skills and mark each one for yourself: proven, partly proven or missing. That tells you where your evidence is strong and where the gaps are.'],
    ['p','Then position yourself around what you can prove. Compare two lines. “I shipped an AI product to ten real users and improved its useful-result rate from 58% to 71%” is much stronger than “passionate about AI”.'],
    ['do','Prove it now',[
      ['p','Start your role matrix with three job descriptions. Mark your top three proven skills and your biggest gap.'],
      ['x','You should end up with a small matrix and one gap. Then try a counterexample: find a skill that a job description lists but that you think does not really matter for the role.']
    ]],
    ['q','I616'],

    ['h','Idea 2: Resume, LinkedIn and case studies'],
    ['p','Once you know the roles, the next job is your resume. A good resume line says three things: what you did, the decision you made, and the result you measured. In short, <strong>action + decision + measurable result</strong>. Here is the same line written three ways.'],
    ['code','Weak    Worked on an AI support-ticket tool.\n\nBetter  Built an AI tool that groups support tickets into themes.\n\nStrong  Built and shipped a ticket-theming tool to 10 support teams;\n        chose a fixed workflow over an agent after testing both,\n        cutting failed runs from 15% to 5%.'],
    ['p','A resume line is short, so it can only hint at your thinking. For the full story you need a <strong>case study</strong>. That’s a one or two page account of a project. A good one follows this structure:'],
    ['n',[
      '<strong>Problem</strong>, with the evidence that it was real.',
      '<strong>Your decisions</strong>, and the options you rejected.',
      '<strong>Trade-offs</strong> you made knowingly.',
      '<strong>Results</strong>, with numbers.',
      '<strong>What failed</strong>, and what you changed.',
      '<strong>What you would do next.</strong>'
    ]],
    ['p','Don’t keep your case studies hidden on your laptop. Put your two best ones where a recruiter will find them, such as a personal site linked from your LinkedIn profile. Your LinkedIn headline should also say the role you want and one thing you have proven.'],
    ['do','Prove it now',[
      ['p','Rewrite three of your current resume bullets in the strong form.'],
      ['x','You should end up with three bullets, each with a decision and a number. Then try a counterexample: pick a bullet where you can’t find a number. What would you measure next time?']
    ]],

    ['h','Idea 3: Product sense, strategy, metrics and execution interviews'],
    ['p','Now for the interviews themselves. Most PM interview loops include four kinds of question. Each kind has a structure that keeps you on track, so you don’t freeze or ramble. The table gives an example question and a structure for each.'],
    ['tb',['Type','Example','Structure'],[
      ['Product sense','Design a product for busy parents','Clarify the goal → pick a user → list problems → choose one → propose solutions → prioritise → say how you would measure it'],
      ['Strategy','Should we enter the Indian market?','Goal → market → customer → competition → our advantage → recommendation and risks'],
      ['Metrics','Daily users fell 10%. Why?','Check the data → internal or external? → which segment? → which step? → hypotheses → how to test'],
      ['Execution','Two teams need the same engineer. What do you do?','Clarify impact → options → trade-offs → decision → how you tell people']
    ]],
    ['p','Whichever question you get, say your structure out loud before you start. It lets the interviewer follow you, and redirect you early if needed. At the end, make a clear choice. Interviewers want to see you commit to a decision and explain why.'],
    ['do','Prove it now',[
      ['p','Answer the metrics example above out loud in ten minutes. Record yourself.'],
      ['x','You should end up with a recording. Listen back and check two things. Did you ask about data quality first? And did you end with a way to test your best hypothesis?']
    ]],
    ['q','I617'],

    ['h','Idea 4: AI system-design interviews'],
    ['p','The next kind of question is special to AI roles. AI PM loops often include a question such as “design a support assistant for our product”. The interviewer isn’t asking for code. They want to see your technical judgement. Work through these steps in order:'],
    ['n',[
      '<strong>Users and task.</strong> Who uses it, for what, and what does success look like?',
      '<strong>Approach.</strong> Prompt only, retrieval, a fixed workflow or an agent? Say why.',
      '<strong>Evaluation.</strong> How will you know it works before and after launch?',
      '<strong>Failure modes.</strong> What happens when it is wrong, slow or attacked?',
      '<strong>Cost and latency.</strong> A rough cost per task, and the latency users will accept.',
      '<strong>Rollout.</strong> Who gets it first, what you measure and when you would roll back.'
    ]],
    ['p','Use numbers wherever you can, even rough ones. “About 2,000 tokens per question, so roughly half a cent” shows you understand the system. In fact, everything in Parts I–V is preparation for this interview.'],
    ['do','Prove it now',[
      ['p','Answer “design a support assistant for an online store” using the six steps. Take fifteen minutes.'],
      ['x','You should end up with six short sections. Check that evaluation and failure modes are not the thinnest ones. They usually are.']
    ]],

    ['h','Idea 5: Behavioural stories, take-homes, networking and negotiation'],
    ['p','The last idea covers four things that come up around the interviews. The first is behavioural questions. These ask about your past, such as “tell me about a time you disagreed with an engineer”.'],
    ['p','Prepare six to eight stories from real work. Tell each one as situation, task, action and result. Spend most of your time on the action, because that’s the part about you.'],
    ['p','Next are <strong>take-home assignments</strong>, which test how you work alone. Stick to the time limit you are given, and state your assumptions at the top. End with what you would do with more time. Reviewers value a clear, honest answer over a long one.'],
    ['p','Then there is <strong>networking</strong>. It works best when you have something to show. Share a case study with a specific person and ask one specific question. That gets more replies than asking for a referral.'],
    ['p','Finally, <strong>negotiation</strong> starts with preparation. Research the salary range for the role and location. Wait for the company to make an offer first. Then ask once, politely, with a reason, such as a competing offer or the scope of the role.'],
    ['p','Let’s turn all this into practice with one story of your own.'],
    ['try',{id:'b7-story',mins:10,min:120,rows:6,
      task:'Write one behavioural story about a decision you made in your capstone that turned out wrong. Use situation, task, action and result. Keep the focus on what you did.',
      ph:'Situation… Task… Action (what I decided and why)… Result and what I changed…',
      after:'A strong story: <strong>Situation:</strong> Theme Finder’s first version let an agent decide the steps for the weekly report. <strong>Task:</strong> I owned getting it reliable enough for ten design partners. <strong>Action:</strong> I expected the agent to handle unusual weeks better, so I kept it at first. When 3 of 20 test weeks failed, I built the same flow as a fixed workflow and ran both on the same cases. <strong>Result:</strong> the workflow failed once in 20 and was twice as fast, so I switched. I learned to measure both options before committing, and now I do that for every major design choice.'}],
    ['q','I618'],

    ['h','What you have learned'],
    ['p','You now have a way to show your work to an employer. You can pick the roles that fit you, write resume lines and case studies that show your decisions, and answer the four kinds of PM question with a structure. You can also work through an AI system-design question and tell honest stories about your own choices.'],
    ['p','That finishes the learning part of the course. Next, there is one short page about the integrated capstone, which now lives in Chapter 34.']
  ]
},

{
  id:'b8', num:'B8', part:7, curriculumTier:'core', phase:6, prerequisites:['ch21cap'], nextUnits:[], minutes:8, labs:[],
  title:'The integrated capstone now lives in Chapter 34',
  concept:'This chapter used to hold a second, separate capstone. Not any more. The technical capstone and this chapter’s five gates (discovery, strategy, build, ship and defend) are now one eleven-stage journey in Chapter 34. So you do one coherent project instead of two.',
  takeaway:[
    'Do the capstone once, in Chapter 34, and not twice.',
    'This page keeps one exercise from the old chapter, so an answer you saved here still has a home.'
  ],
  needs:[['The unified capstone','Everything that used to be here is now part of it.',34]],
  story:[
    ['c','This chapter moved','This used to be a second, separate capstone. It is not any more. Everything here is now part of one journey in Chapter 21.'],
    ['p','In the last chapter you got ready to show your work to employers. This page is a short one, and it is about where the capstone lives now.'],
    ['p','Earlier, the capstone was split in two. There was a technical capstone, and there was a second one built around five gates. Doing both felt like doing the same project twice. So the two have been joined into a single journey with eleven stages, in Chapter 34.'],
    ['p','What if you already have progress on the old five gates? Nothing is lost. Each old gate maps directly onto the new stages, as the table shows.'],
    ['tb',['Old gate','New stage(s) in Chapter 34'],[
      ['Gate 1, Discovery','34.1 Discover'],
      ['Gate 2, Strategy','34.3 Design'],
      ['Gate 3, Build','34.4 Build – 34.5 Evaluate'],
      ['Gate 4, Ship','34.8 Ship'],
      ['Gate 5, Defend','34.9 Measure – 34.11 Defend']
    ]],
    ['p','Go to <a href="#/ch/ch21cap">Chapter 34</a> and start from wherever your project actually is. There is nothing else to do on this page, except the one exercise below. We kept it here so that an answer you already wrote is not lost.'],
    ['try',{id:'b8-defend',mins:12,min:120,rows:6,
      task:'Write your answer to the hardest question you expect in the defence. For example: “Why should we believe this works beyond your ten design partners?”',
      ph:'What we know… what we do not know yet… what we would do next…',
      after:'A strong answer separates what is known from what is not. For example: <strong>We know</strong> that 8 of 10 design partners used it for four weeks in a row, and that precision held at 86% on their real tickets. <strong>We do not know yet</strong> whether it holds for teams on other helpdesks, or with more than 5,000 tickets a week, because none of our partners had those. <strong>Next,</strong> we would add two partners from each missing group, with the same eval set and thresholds, before any wider launch. The answer admits uncertainty and gives a clear way to reduce it.'}],
    ['p','That is all for this page. When you’re ready, carry on with your project in Chapter 34.']
  ]
}

];

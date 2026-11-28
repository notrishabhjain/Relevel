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
  id:'b1', num:'B1', part:7, curriculumTier:'selective', phase:6, prerequisites:['a4','ch15','ch185'], nextUnits:[], minutes:720, labs:[],
  title:'Business models, pricing and unit economics',
  concept:'In this chapter you find out who pays for your product and how much to charge. You also check if each customer earns you money or costs you money. You work out the real cost of one AI task, like paying per SMS. Then you compare pricing models (ways to set a price) and write a pricing recommendation that names its risks.',
  takeaway:[
    'Tell three people apart: the one who pays, the one who uses the product, and the one who can stop the purchase. Think of a parent who pays, a child who uses, and a school that can say no.',
    'Compare seat pricing (a fixed fee per user), usage pricing (pay per use), outcome pricing (pay per result) and hybrid pricing (a mix). Say which risk each one hands to whom.',
    'Work out the cost per successful task. Count the retries (tries done again), the human review (a person checking the work) and the support time too.',
    'Tell a real flywheel from a hopeful one. A flywheel is a loop where use makes the product better, and that brings more use. Keep it inside what users agreed to.',
    'Name the ways a model vendor (the company that sells you the model) can squeeze your margin (what is left after costs). Say what you would do about each one.'
  ],
  needs:[['A sized market (how many buyers there are) and named alternatives','You set a price by asking what the customer would do instead.','A4'],
         ['Cost per query','Idea 3 builds the cost stack (every cost, piled up in a list) from it.',15],
         ['Build or buy','Relying on a vendor is the other side of that decision.',18.5]],
  capstone:{
    title:'Decide the price, and show your numbers are right',
    brief:'A tool people love can still fail if it loses money on every message, like a chai stall that sells below cost. You learned to tell the payer, the user and the blocker apart. You compared ways to price. You worked out the cost of one successful task, with retries, human review and support. Now you decide how Bharat Privacy Guard should be priced.',
    where:'Written work. Interviews and a cost spreadsheet (a grid of numbers). No code is needed.',
    steps:[
      'Interview five possible buyers. Pick a mix of developers and compliance people. Ask what they use today, who owns the budget, and what the problem costs them. Do not ask “would you pay?”.',
      'Build a cost table for one successfully cleaned message at low, base and high usage. Give retries, human review of unsure cases and support time their own lines. Do not count only the model calls.',
      'Design three pricing packages. For example: a free open-source kit, a paid hosted service, and a gateway for companies. For each one, say who pays, what is counted, and who carries the risk if usage jumps.',
      'Plan a short survey. It asks at what price the tool is too cheap, fair, expensive and too expensive.',
      'Write a one-page pricing recommendation. Put in the price and the margin at high usage. Say what happens to the margin if the model provider doubles its price. Name the risks.'
    ],
    done:[
      'Five interviews. Each one names the current alternative and who signs off the spend.',
      'A cost table with low, base and high rows. Support time sits on its own line.',
      'Three pricing packages and a survey plan.',
      'A recommendation that states the margin at high usage and what a doubled model price does.',
      'A score from 0 to 3 for each item above, using this chapter’s scale, like marking your own homework. Move on only when every score is 2 or more, and no safety, privacy or evidence item scores 0.'
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
    ['c','Before you start','Plan for about twelve hours, over several sittings. Keep your market sizing from A4 open. Keep the cost per query numbers from Chapter 15 open too. You need five prospects (people who might buy) to interview, so start booking them now.'],
    ['p','So far you asked: does the AI system work? Now you ask a new question. If it works, can it pay for itself? Think of a chai stall that must earn more than it spends. We go through five ideas. At the end you write a pricing recommendation you can defend.'],

    ['h','Idea 1: Value and willingness to pay'],
    ['p','Start with one question. Why would anyone pay for your product? Because it does a job better or cheaper than what they do today. So the top of the price (the ceiling) comes from that other way, not from your costs. Your costs only set the bottom of the price (the floor).'],
    ['p','In products sold to businesses, three people usually matter. The table shows them for the Theme Finder example. Each one cares about something different.'],
    ['tb',['Who','Theme Finder example','What they care about'],[
      ['User','Support lead (the person who runs the help desk)','Getting Monday morning back'],
      ['Buyer (the one who pays)','Head of support','A number to show their own manager'],
      ['Blocker (the one who can say no)','Security lead','Where ticket data goes and who can see it']
    ]],
    ['p','Now work out the value from the other way. A support lead spends about three hours a week making the ticket report by hand. At $40 an hour, that is about $520 a month for one lead.'],
    ['p','A tool that saves most of that time is worth less than $520 to the buyer, because adopting it costs them effort too. But it is still worth far more than a few dollars. Your price lives in the gap between the two.'],
    ['c','Watch out','Do not ask “would you pay for this?”. People say yes to be polite, and the answer tells you nothing. Ask what they use today, what it costs them, and who approved that spend. Money already spent is proof. Plans to spend are not.'],
    ['do','Prove it now',[
      ['p','Write down the user, the buyer and the blocker for your capstone (your final project). Then guess what the current alternative costs one customer each month.'],
      ['x','Three roles and one monthly cost, with your working shown. Then write one counterexample (a case that breaks the rule): a customer your product saves nothing for, because their alternative is already cheap.']
    ]],
    ['q','I601'],

    ['h','Idea 2: Seat, usage, outcome and hybrid pricing'],
    ['p','Once you know the value, the next question is how to charge for it. There are four common ways to charge for an AI product. Each one hands a different risk to a different person.'],
    ['p','Read the last column of the table. It tells you what can go wrong with each way.'],
    ['tb',['Model','You charge for','Good because','Risk'],[
      ['Seat (a fixed fee per user)','Each user, per month','Easy for the buyer to plan the budget','Heavy users cost you more but pay the same'],
      ['Usage (pay per use)','Each ticket, call or credit','Your income moves with your cost','Buyers cannot guess the bill, so they use it less'],
      ['Outcome','Each successful result, such as a resolved ticket','Price follows the value','You both need to agree on what success means, and be able to measure it'],
      ['Hybrid (a mix)','A platform fee with some usage included, then a charge for going over it','Easy to predict, and it protects your margin','Harder to explain and sell']
    ]],
    ['p','AI breaks the usual seat idea. Old software costs almost nothing each time someone uses it, so a flat seat price is safe. An AI feature costs real money every time it runs. So one heavy customer on a seat price can wipe out the margin from ten light ones.'],
    ['p','Outcome pricing sounds good, and some support tools already charge per resolved conversation. But it works only if you and the customer agree on what counts as an outcome. You also need to measure it without fights.'],
    ['do','Prove it now',[
      ['p','Pick the pricing model you would start with for your capstone. Write one sentence on why. Write one on the risk it leaves you with.'],
      ['x','One model, one reason and one risk. Counterexample: describe a customer who would find that model unfair.']
    ]],

    ['h','Idea 3: The AI cost stack and contribution margin'],
    ['p','Now look at your side of the price. An AI feature costs more than the model bill. To see all of it, build the full stack (a list of every cost) for one customer for one month.'],
    ['p','Here is the base case for Theme Finder, at 300 tickets a week. Read it line by line. See where the biggest number sits.'],
    ['code','One customer, one month, 300 tickets a week\n\nModel: classify 1,300 tickets x $0.0004      $0.52\nModel: 4 weekly summaries x $0.05            $0.20\nRetries and re-runs (+15%)                   $0.11\nHosting, database, logging                   $2.00\nSupport: 20 minutes x $30/hour               $10.00\n                                             ------\nTotal cost to serve                          $12.83\n\nReports the lead accepted: 4.3 x 85%          3.7\nCost per successful report                   $3.47'],
    ['p','Two things stand out. First, support time costs more than ten times as much as the model. Second, the number to watch is the <strong>cost per successful task</strong>. A report the lead rejects still cost you money, so you divide by the reports that worked.'],
    ['p','Next: how much does each customer leave you? That is the <strong>contribution margin</strong>. It is what is left after the costs that grow with that customer, like what a shopkeeper keeps after paying for the goods. At $49 a month, it is ($49 − $12.83) ÷ $49, or about 74%.'],
    ['p','But that is only the base case. What if a customer uses the product more, or less? The table shows the same customer at three levels of use.'],
    ['tb',['Usage (pay per use)','Tickets a week','Cost to serve (what each customer costs you)','Margin at $49'],[
      ['Low','100','$12.43','75%'],
      ['Base','300','$12.83','74%'],
      ['High','3,000','$19.21','61%']
    ]],
    ['key','Always work out low, base and high use. Most margin problems only show up in the high row.'],
    ['do','Prove it now',[
      ['p','Build the base-case cost stack for your capstone. Use every line from the example above. Then work out the cost per successful task.'],
      ['x','A cost stack with at least five lines. Counterexample: which line would you most likely forget, and how much would it change the total?']
    ]],
    ['p','Now try a harder case yourself. Take your time. Show your working.'],
    ['try',{id:'b1-margin',mins:10,min:100,rows:6,
      task:'A Theme Finder customer grows from 300 to 3,000 tickets a week. They stay on the $49 seat plan. Model cost grows with tickets. Support time goes from 20 to 30 minutes a month. Work out their new cost to serve and margin, and say what you would change.',
      ph:'Model cost… support… total… margin… what I would change…',
      after:'Classification becomes 13,000 tickets × $0.0004 = $5.20, plus about $1 for summaries and retries. Hosting rises to about $3 with ten times the data. Support is 30 minutes × $30 = $15. The total is roughly $24, so the margin falls to about 51%. That is still above zero, but it keeps falling as they grow. A good fix is a hybrid plan: $49 includes 1,000 tickets a week, and each extra 1,000 tickets a week adds $10 a month. At 3,000 tickets a week they pay $69, so the margin is back to about 65%. The customer’s bill still follows the value they get. Your margin stops falling as they grow.'}],
    ['q','I602'],

    ['h','Idea 4: Data, workflow and platform flywheels'],
    ['p','A good business gets stronger as more people use it. A <strong>flywheel</strong> is the loop behind that, like a heavy wheel that spins easier the more you push it. Using the product makes it better, and that brings more use. Three kinds show up in AI products. They are not equally strong.'],
    ['p','The first is the data flywheel. Users fix the model’s mistakes, so results get better with use. This is often weaker than people claim. Gains flatten after a few thousand examples. Contracts may also stop you from pooling data across customers.'],
    ['p','The second is the workflow flywheel. The product becomes part of a weekly routine, and other work starts to depend on it. For Theme Finder, the Monday report feeds the product team’s planning meeting. This is usually the strongest kind.'],
    ['p','The third is the platform flywheel. Other people build on your product, which makes it more useful to everyone. It is rare, and it needs a lot of users first.'],
    ['c','Why this matters','A flywheel that depends on customer data works only while customers trust you with it. Say clearly what you store, what you train on and who can see it. Ask for consent (their clear yes) before using one customer’s data to improve results for another.'],
    ['do','Prove it now',[
      ['p','Name the one user action that would make your capstone better the more it happens. Say which kind of flywheel it drives.'],
      ['x','One action and its flywheel type. Counterexample: a case where that action makes the product worse, such as fixes from a careless user.']
    ]],

    ['h','Idea 5: Vendor dependence and gross-margin risk'],
    ['p','The last idea is about something you do not control. If your product runs on another company’s model, that company can change your costs and your quality without asking you. It is like a shop that depends on one wholesaler.'],
    ['p','This shows up in your <strong>gross margin</strong>. That is revenue (money coming in) minus the direct cost of delivering the product. For AI products, a big part of that cost is the model vendor’s bill. The table lists four things a vendor can do, what each does to you, and what you can do about it today.'],
    ['tb',['What the vendor can do','What it does to you','What you can do now'],[
      ['Raise prices','Margin falls overnight','Keep a second model tested on your eval set (your answer key of test questions)'],
      ['Retire a model (switch it off)','Quality changes when you move to the new one','Pin model versions (stick to one named version); plan the move early'],
      ['Change rate limits (how many requests you may send)','Customers hit errors at busy times','Add queues (a waiting line) and a fallback model (a spare)'],
      ['Launch a competing feature','Your product looks like it is not needed','Own the workflow and the customer relationship']
    ]],
    ['p','You cannot remove this risk, but you can price it in. Your recommendation should say what happens to your margin if the model price doubles. It should also say how long it would take you to switch.'],
    ['do','Prove it now',[
      ['p','Work out your base-case margin again with the model price doubled. Then guess how many days it would take to switch to a second vendor.'],
      ['x','One new margin figure and one switching estimate. If you cannot estimate the switch, you are missing an eval set that works with any vendor. Chapter 33 covers vendor exit.']
    ]],
    ['q','I603'],
    ['p','You now have everything for a recommendation. Write the opening paragraph. A busy reader reads that one first.'],
    ['try',{id:'b1-rec',mins:12,min:150,rows:7,
      task:'Write the first paragraph of your pricing recommendation. Include the price, the pricing model, the margin at high usage and the biggest risk.',
      ph:'I recommend… because… at high usage… the biggest risk is…',
      after:'A strong opening: <strong>I recommend a hybrid plan at $49 per team per month, including 1,000 tickets a week, with $10 a month for each extra 1,000 tickets a week.</strong> Our alternative is three hours of a support lead’s time a week, about $520 a month, so the price is well under the value. The contribution margin is 74% at base usage and stays above 60% at high usage because of the extra charge for going over. The biggest risk is model price. If it doubles, the base margin falls to about 72%, and switching to our tested second model takes about a week.'}],
    ['h','What you have learned'],
    ['p','Let’s pull the five ideas together. Value sets the price: what the customer would do instead, and who pays, who uses and who can block. There are four ways to charge. Each one hands the risk to someone different.'],
    ['p','The real cost of a task includes retries, review and support. So you measure the cost per successful task at low, base and high usage. You also saw that a flywheel needs trust, and that a model vendor can squeeze your margin, so you price that risk in.'],
    ['p','Next, B2 looks at growth, onboarding and product marketing: how people find your product, and how you help them reach the moment where it works for them.']
  ]
},

{
  id:'b2', num:'B2', part:7, curriculumTier:'reference', phase:0, prerequisites:['a3','a4','a7'], nextUnits:['b3'], minutes:720, labs:[],
  title:'Growth, onboarding and product marketing',
  concept:'In this chapter you find out how people find your product, how fast they get value from it, and why they come back. You write down the events for each growth stage. You test onboarding (the first steps a new user takes) with real users. You design one growth loop you would be happy to explain in public.',
  takeaway:[
    'Write one event for each stage: acquisition (they arrive), activation (they get value), retention (they stay), referral (they bring others) and revenue (they pay). Know where the funnel model, a picture of people moving down a pipe, misleads.',
    'Name the activation moment for your product, the first time users get what you promised. Measure time-to-value, the time it takes to reach that moment.',
    'Use the Fogg behaviour model to explain why a user did or did not act.',
    'Choose between product-led (users try it alone), sales-led (a salesperson guides them) and product-led sales (a mix) motions.',
    'Tell a network effect (more users make it better for everyone) from virality (users bring in other users). Design a growth loop that treats users fairly.'
  ],
  needs:[['Interview skills','You watch five people go through onboarding.','A3'],
         ['A positioning statement (one line on who it is for and why it is different)','Idea 5 builds on it.','A4'],
         ['A prototype (a rough working first version)','The onboarding test uses one.','A7']],
  capstone:{
    title:'Plan how the tool grows, and test the first five minutes',
    brief:'A good tool still needs a way for people to find it, try it and stay, like a shop that needs a board on the road. You learned to write the events of a growth funnel. You found the moment a user first gets value. You told a network effect from simple sharing. Now you plan growth for the developer kit and test the first five minutes with real developers.',
    where:'Written work, plus a short test with real people. For the teardown (taking a product apart to see how it works), use a no-code AI tool for a few days. You need no code of your own.',
    steps:[
      'For each stage of the funnel, write one event you could log (record). Acquisition: a developer visits the kit’s page. Activation: the first successful cleaning. Retention: still using it a week later. Referral: shares it. Revenue: starts paying.',
      'Name the activation moment for the kit. Write the steps a new developer takes to reach it.',
      'Test the first five minutes. Give five developers only the kit’s README (its instruction sheet). Ask each one to clean one message. Time how long each takes to the first success. Note the step where most of them stopped.',
      'Design one growth loop you would be happy to explain to your users. For example, a small “protected by” badge that links to the tool. Name one dark pattern (a trick design) you refuse to use.',
      'Write a teardown of how one AI tool wins its users: Cursor, Lovable, Grammarly or Notion AI. Cover acquisition, activation, retention and money.'
    ],
    done:[
      'One event you could log for each of the five funnel stages.',
      'A report of the time to first success for each of the five developers, and the step where most stopped.',
      'A growth loop that names the dark pattern it refuses to use.',
      'A teardown of one AI tool.',
      'A score from 0 to 3 for each item above, using this chapter’s scale, like marking your own homework. Move on only when every score is 2 or more, and no safety, privacy or evidence item scores 0.'
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
    ['c','Before you start','Plan for about twelve hours. You need your prototype from A7 and five people from your target users (the people the tool is for). Pick one of Cursor, Lovable, Grammarly or Notion AI for the teardown, and use it for a few days first.'],
    ['p','Last chapter you worked out who pays and how to charge them. But a good price means little if nobody finds the product. It also means little if people try it once and leave, like a shop with no walk-in customers. This chapter solves those two problems: how people find your product, and how they come to need it.'],

    ['h','Idea 1: AARRR, and where funnels mislead'],
    ['p','Start by splitting growth into stages, like the stations on a train line. <strong>AARRR</strong> names five: acquisition, activation, retention, referral and revenue. Your first job is to define one event for each stage, so you can count it.'],
    ['p','The table gives an example for Theme Finder. Each event is something the product could really log.'],
    ['tb',['Stage','Question','Theme Finder event'],[
      ['Acquisition','Did they arrive?','Signed up with a work email'],
      ['Activation','Did they get value?','Saw their first theme report'],
      ['Retention','Did they come back?','Saw a report in 3 of the next 4 weeks'],
      ['Referral','Did they bring others?','Shared a report with a colleague who signed up'],
      ['Revenue','Did they pay?','Started a paid plan']
    ]],
    ['p','The funnel is a good start, but it has limits. It suggests people walk in a straight line. Many really come back through referrals and shared reports. It also tempts you to fix the top of the funnel first. Most of the time, retention decides whether a product works.'],
    ['key','If users do not stay, more sign-ups only means losing people faster, like pouring water into a bucket with a hole.'],
    ['do','Prove it now',[
      ['p','Write one event for each of the five stages for your capstone (your final project).'],
      ['x','Five events, each one your code could log. Counterexample (a case that breaks the rule): a stage where your product’s users would not move in funnel order.']
    ]],
    ['q','I604'],

    ['h','Idea 2: Activation moments and time-to-value'],
    ['p','Now look closely at the second stage. The <strong>activation moment</strong> is the first time a user gets the value your product promises, like the first sip of chai after the wait. For Theme Finder, it is seeing a theme the lead did not know about. Everything before that moment is a cost to the user.'],
    ['p','How do you know if the road to that moment is too long? Measure <strong>time-to-value</strong>: the time it takes to get there, counted from sign-up. Here is a first onboarding test with five support leads. Read down the table and see where people drop off (leave).'],
    ['tb',['Step','Users who finished','Median time'],[
      ['Sign up','5 of 5','1 min'],
      ['Connect Freshdesk (link their help-desk tool)','3 of 5','6 min'],
      ['Wait for first import (the tickets to load)','3 of 5','12 min'],
      ['See first theme report','3 of 5','20 min total']
    ]],
    ['p','The drop-off is at connecting Freshdesk. Two users needed an admin to approve access. One fix is a sample report built from twenty tickets the user pastes in. That puts the activation moment before the hard step.'],
    ['do','Prove it now',[
      ['p','Write your capstone’s activation moment in one sentence. List every step a new user takes before reaching it.'],
      ['x','One moment and a list of steps. Circle the step most likely to lose people. Counterexample: a user who reaches the moment but still does not see the value.']
    ]],

    ['h','Idea 3: Retention, habits and the Fogg model'],
    ['p','Getting someone to the activation moment once is not enough. Do they come back? A curve shows this best. Take everyone who signed up in the same week. Plot (draw as a line) the share still active in each week after.'],
    ['p','A healthy curve drops, then flattens, like a ball that rolls down and then rests on flat ground. A curve that keeps falling to zero means the product has not found a lasting use.'],
    ['p','BJ Fogg’s behaviour model explains why a person does or does not act. A behaviour happens when three things meet at the same moment:'],
    ['code','Behaviour = Motivation + Ability + Prompt\n\nMotivation  Does the lead want to do it right now?\nAbility     Is it easy enough at that moment?\nPrompt      Does something remind them to do it?'],
    ['p','If a behaviour is not happening, check the three from the bottom up: prompt (a nudge to act) first, then ability (how easy it is), then motivation (how much they want it). A missing prompt is the cheapest fix. For Theme Finder, a Monday 9am email with the top three themes is the prompt. The report opening in one click keeps ability high.'],
    ['do','Prove it now',[
      ['p','Pick the behaviour you most want users to repeat. Write down its motivation, ability and prompt.'],
      ['x','Three short lines. Counterexample: a user with strong motivation who still does not act. Which of the three is missing for them?']
    ]],
    ['q','I605'],

    ['h','Idea 4: Product-led, sales-led and product-led sales'],
    ['p','How does a customer get from hearing about you to paying? A <strong>go-to-market motion</strong> is that path, like the road from the shop window to the till. There are three common ones. The last column of the table says when each one fits.'],
    ['tb',['Motion','How it works','Fits when'],[
      ['Product-led growth (PLG)','Users sign up and get value on their own; some upgrade','Value shows in minutes and the price is low'],
      ['Sales-led','A salesperson runs demos (live shows of the tool), a trial and a contract','The deal is big, or a security review is needed'],
      ['Product-led sales','Users start on their own; sales steps in when a team grows','People adopt it first, but companies buy']
    ]],
    ['p','Theme Finder fits product-led sales. One support lead can try it with pasted tickets. Connecting the whole help desk needs the security lead, and that is when a salesperson helps.'],
    ['do','Prove it now',[
      ['p','Choose a motion for your capstone. Give two reasons, one from your pricing and one from your buyer.'],
      ['x','One motion and two reasons. Counterexample: the kind of customer for whom that motion would fail.']
    ]],

    ['h','Idea 5: Growth loops, network effects and positioning'],
    ['p','A funnel ends when the customer pays. Some products do better, because each customer brings the next one. A <strong>growth loop</strong> is a cycle where one user’s actions bring in the next user, like a ring road that keeps feeding traffic back in. Unlike a funnel, the output feeds back into the input.'],
    ['code','Lead views weekly report\n  → shares the top theme with the product team\n    → a product manager sees it and asks for their own view\n      → they sign up and connect their own queue\n        → they share their report with their team ...'],
    ['p','Take care with two terms that sound alike. <strong>Virality</strong> means users bring in other users. A <strong>network effect</strong> means the product gets better for everyone as more people use it, like a phone line that is more useful when more friends have one. Many products have the first without the second.'],
    ['p','Positioning decides which loop can work. Suppose you are “the weekly report for support leads”. Then sharing with product managers makes sense. Reuse the positioning statement you wrote in A4.'],
    ['c','Watch out','A <strong>dark pattern</strong> is a design that tricks users into acting against their own interest. Examples are pre-ticked invitation boxes, fake scarcity (“only 2 left!”) and hidden cancellation. They can lift your numbers for a quarter. But they also destroy the trust that retention depends on.'],
    ['do','Prove it now',[
      ['p','Draw your capstone’s growth loop as four or five arrows. Mark the step where a user decides to share.'],
      ['x','One loop, and one sentence on why a user would choose to share. Counterexample: what would make your loop feel like spam?']
    ]],
    ['q','I606'],
    ['p','You have now seen all five ideas on one product. To finish, see how a real AI tool does it.'],
    ['try',{id:'b2-teardown',mins:15,min:150,rows:7,
      task:'Start your teardown. Pick one of Cursor, Lovable, Grammarly or Notion AI. For each of acquisition, activation, retention and monetisation (making money), write one line on how it works and one thing you would copy.',
      ph:'Acquisition… Activation… Retention… Monetisation…',
      after:'A good teardown line is specific and can be checked. Here is one for Grammarly. <strong>Acquisition</strong>: people see its suggestions inside everyday tools, and the free plan spreads it. <strong>Activation</strong>: the first underlined suggestion in your own writing, which arrives within seconds. <strong>Retention</strong>: it lives where people already write, so there is no new habit to form. <strong>Monetisation</strong>: the more advanced suggestions sit behind a paid plan. The thing to copy: activation happens inside the user’s existing work, not on a separate page.'}],
    ['h','What you have learned'],
    ['p','Let’s recap. Growth has five stages, and you can count each with an event. But the funnel hides loops, and retention matters most. Your product has one activation moment. The shorter the time-to-value, the fewer users you lose on the way.'],
    ['p','The Fogg model tells you why people do or do not act. You can reach customers with product-led, sales-led or product-led sales motions. A growth loop works best when it is a real network effect and does not rely on dark patterns.'],
    ['p','Next, B3 looks at product analytics and experiments: how to turn these events into numbers you can trust, and how to test a change before you roll it out to everyone.']
  ]
},
{
  id:'b3', num:'B3', part:7, curriculumTier:'selective', phase:6, prerequisites:['a5','a6','b2'], nextUnits:['b4'], minutes:840, labs:[],
  title:'Product analytics and experiments',
  concept:'Real people now use your product. What do they actually do? And which changes helped? You will write a tracking plan (a list of what to record). You will build a funnel (the steps people walk through) and a retention cohort (a group you follow week after week). Then you will design an experiment (a fair test) that gives a clear answer.',
  takeaway:[
    'Pick a North Star metric (the one number that shows real value), and the input metrics (smaller numbers) that move it.',
    'Write an event taxonomy (a neat list of event names) with clear names, properties and user identity.',
    'Build a funnel, a retention cohort and segments (slices of users), and read them correctly.',
    'Design an A/B test (a fair test with two groups) with a guardrail (a number that must not get worse), a minimum detectable effect (the smallest change worth spotting) and a stopping rule (when to stop).',
    'Check your data before you trust it, and do not say one thing caused another unless you have shown it.'
  ],
  needs:[['A North Star metric (the one number that shows real value)','Idea 1 turns it into something you can measure.','A5'],
         ['OKRs and guardrail metrics (goals, and numbers that must not get worse)','Experiments use the same guardrails.','A6'],
         ['Growth events (the steps where users join and spread the word)','The tracking plan records them.','B2'],
         ['Evaluation engineering (testing the model against an answer key)','Idea 5 keeps model quality and product analytics apart.',29]],
  capstone:{
    title:'Plan the measurements, and design one experiment',
    brief:'Once real people use the tool, you need to know what they do. Think of a shopkeeper who watches which shelf people visit. In this chapter you learned to pick the one number that matters most, to write clear event names, to read a funnel and a retention table, and to design a test with a guardrail and a stopping rule. Now you will do all of that for Bharat Privacy Guard.',
    where:'Use a real analytics tool (a tool that counts what users do) such as PostHog, Mixpanel or Google Analytics for the tracking code and the charts. Then write the experiment design in the notes box below.',
    steps:[
      'Choose the one number that matters most for the kit, for example “messages cleaned correctly per week by active developers”. Then choose three input numbers that move it.',
      'Write an event list (the list of things you record). Name each event as object_action, for example text_checked, detail_found, detail_masked and review_requested. For each event, write its properties (extra details it carries, such as the kind of writing and the kind of ID). Also write the question it answers. Never record the personal details themselves.',
      'Send the events to an analytics tool with a few lines of tracking code. If you have no users yet, use made-up data and say so.',
      'Build one funnel (visit, first check, first success), one weekly retention table and two segments. For example, compare English users with Hinglish users.',
      'Design one experiment, for example: “showing a preview of what will be hidden makes more developers finish setup”. Write the hypothesis (your guess to test). Write who is randomly assigned, the main number, a guardrail, the smallest change you care about, how many users you need, and when you will stop.'
    ],
    done:[
      'One main number, with three input numbers.',
      'An event list in which every event answers a named question, and none records personal details.',
      'A funnel, a retention table and two segments, built from events you logged.',
      'An experiment design that says how many users it needs, and what you will do if you cannot get that many.',
      'A score from 0 to 3 for each item above, using this chapter’s scale, like marking your own homework. Move on only when every score is 2 or more, and no safety, privacy or evidence item scores 0.'
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
    ['c','On your route','First, go through it quickly, in about twenty minutes: read it and answer the boxes. The long “Build it” work can wait until later.'],
    ['c','Before you start','In full, this chapter takes about fourteen hours. Make a free account with PostHog, Mixpanel or Google Analytics. If your capstone has no users yet, you will add some made-up data, and the chapter shows how.'],

    ['p','In the last chapter you saw how people find a product and start using it. Now the next question. Real people are using it. How do you know it works? Opinions will not tell you. What users actually do will. It is like a shopkeeper who counts who buys, not who says nice things.'],
    ['p','This chapter gives you five ideas. You will pick the one number that matters. You will decide which events to record. You will read the three views that answer most questions. You will run a fair test. And you will check that your data can be trusted.'],
    ['p','Along the way you will use Theme Finder. It is an example product that turns support tickets (messages from unhappy customers) into themes a team can act on.'],

    ['h','Idea 1: North Star and input metrics'],
    ['p','Suppose you could watch only one number to see if users get real value. Which would you pick? Think of a tea stall owner who counts only the cups sold. That number is the North Star metric, the star sailors steer by. You met it in A5.'],
    ['p','For Theme Finder, it is <strong>weekly teams that act on a theme</strong>. Acting on a theme means something like filing a bug or changing a help article.'],
    ['p','Here is the catch. You cannot push a North Star directly. You push it through smaller numbers that a team can change this quarter. These are called <strong>input metrics</strong>. They are like the pedals that turn the wheel. Here are four for Theme Finder:'],
    ['code','North Star: weekly teams that act on a theme\n\nInput metrics\n  1. Teams that view a report each week        (habit)\n  2. Share of tickets assigned to a theme      (coverage)\n  3. Share of themes marked "useful"           (quality)\n  4. Minutes from import to first report       (speed)'],
    ['p','Each input should belong to one team, with a clear link to the North Star. Now say an input goes up, but the North Star does not. Then your link is wrong. That is good news, because now you know which guess to fix.'],
    ['do','Prove it now',[
      ['p','Write your capstone’s North Star and three input metrics. Then name the team or person who could move each input.'],
      ['x','One North Star, three inputs and an owner for each. Plus a counterexample (a case that proves you wrong): an input that could rise while the North Star falls.']
    ]],
    ['q','I607'],

    ['h','Idea 2: Event taxonomies, properties and identity'],
    ['p','To measure anything, you first have to record it. Each time a user does something, like signing up or opening a report, the product can write a small note. Think of a shop’s tally book. That note is called an <strong>event</strong>.'],
    ['p','If everyone names events in their own way, the data becomes a mess. So teams agree on one naming rule. The list of events plus that rule is called an <strong>event taxonomy</strong>. A common rule is <code>object_action</code>, in lower case and past tense.'],
    ['p','Here are five events for Theme Finder. Look at the last column. Every event is there to answer one question.'],
    ['tb',['Event','Properties (extra details)','Question it answers'],[
      ['account_created','plan, signup_source','Where do new teams come from?'],
      ['helpdesk_connected','helpdesk, ticket_count','How many teams get through the hard step?'],
      ['report_viewed','week, themes_shown','Do leads come back each week?'],
      ['theme_marked_useful','theme_id, useful','Is the grouping any good?'],
      ['theme_shared','channel','Does the growth loop run?']
    ]],
    ['p','An event alone only says that something happened. <strong>Properties</strong> add detail, like labels on a parcel, so you can split the results later. Keep only what you need. And never put ticket text or personal data in them.'],
    ['p','You also need to know who did it. <strong>Identity</strong> ties events to one person, like a name tag. A visitor starts with an anonymous ID. When they sign up, you link it to a user ID, so their earlier visits join their history. In B2B products (products sold to companies), also add a company or account ID. Your buyer cares about teams, not single users.'],
    ['p','Last, write all this down in one place. A <strong>tracking plan</strong> is the shared document that lists every event, its properties, when it fires (is sent) and who owns it. Engineers build from it. Analysts trust the data because of it. It is like a recipe card everyone follows.'],
    ['do','Prove it now',[
      ['p','Write five events for your capstone with <code>object_action</code> names. Add the question each one answers.'],
      ['x','Five events with questions. Plus a counterexample: one event you wanted to add that answers no question.']
    ]],

    ['h','Idea 3: Funnels, cohorts, segments and retention'],
    ['p','Once events start arriving, three views answer most product questions. Think of three windows into one shop. Let us take them one by one.'],
    ['p','The first is the <strong>funnel</strong>. Picture a funnel from the kitchen: many drops go in, few come out. It shows the share of users who finish each step in order, so you can see where people drop off.'],
    ['p','The second is the <strong>cohort</strong>, a group of users who started in the same period, like one school batch. A retention table follows each cohort over time. It shows how many keep coming back.'],
    ['p','The third is the <strong>segment</strong>, a slice of users who share a property, such as plan or helpdesk. Compare segments to see who the product works for.'],
    ['p','Here is a weekly retention table. Each row is a cohort. Each cell is the share still viewing reports that many weeks later.'],
    ['tb',['Cohort','Teams (how many)','Week 1','Week 2','Week 4','Week 8'],[
      ['1 Sep','20','70%','55%','45%','40%'],
      ['8 Sep','25','72%','60%','52%',''],
      ['15 Sep','18','78%','66%','','']
    ]],
    ['p','You can read it two ways. Look across a row: the line flattens near 40%, so people keep using it. Look down a column: newer cohorts stay better, so recent changes probably helped.'],
    ['p','Both readings need enough users before you trust them. With 20 teams, one team is five percentage points. So one team leaving can move the number a lot.'],
    ['do','Prove it now',[
      ['p','Sketch the retention table you expect for your capstone’s first three cohorts. Then say which segment you expect to retain best, and why.'],
      ['x','A small table and one segment prediction. Write it down now, so you can compare it with real data later.']
    ]],
    ['q','I608'],

    ['h','Idea 4: A/B tests, guardrails and sample size'],
    ['p','Sometimes you want to know if one change helped. Comparing before and after is risky, because other things change too. The fair way is an <strong>A/B test</strong>. Think of two identical tea stalls, one with the change and one without. You show the change to a random half of users and compare them with the other half.'],
    ['p','Picking at random is what lets you say the change caused the difference.'],
    ['p','Write the design down before you start. A design also needs a guardrail. That is a number that must not get worse while you chase the main one, like the railing on a bridge. Here is a design for Theme Finder:'],
    ['code','Hypothesis   A sample report before connecting the helpdesk\n             will raise activation.\nUnit         Account (not user: teammates share a report)\nPrimary      Share of accounts that view a first report\n             within 7 days\nGuardrail    Share of accounts that connect a helpdesk\n             must not fall\nMDE          +5 percentage points (from 20% to 25%)\nStop rule    Run until each group has the planned sample.\n             No early peeking.'],
    ['p','Notice the stop rule. “No early peeking” means you do not check halfway and stop the moment it looks good. It is like not opening the oven door every minute. Wait until each group has its planned sample (the number of users you planned for).'],
    ['p','How many users is that? It depends on the <strong>minimum detectable effect</strong> (MDE), the smallest change worth spotting. The smaller the change you care about, the more users you need. A rough rule for a yes/no metric, at the usual settings, is:'],
    ['code','users per group ≈ 16 × p × (1 − p) ÷ MDE²\n\np = 0.20, MDE = 0.05\n16 × 0.20 × 0.80 ÷ 0.0025 = 1,024 accounts per group'],
    ['c','Why this matters','An early B2B product may have forty accounts, not two thousand. It cannot run this test. Say so, and use other evidence instead: watch sessions, compare before and after with care, and look for large effects. Running an underpowered test (one with too few users to give a clear answer) and reporting its result is worse than not testing.'],
    ['do','Prove it now',[
      ['p','Write the full experiment design for one change to your capstone, using the seven lines above. Then work out the sample size.'],
      ['x','A complete design and a number. If the number is bigger than your user base, write what you will do instead.']
    ]],
    ['try',{id:'b3-sample',mins:8,min:80,rows:5,
      task:'Your activation rate (the share of new users who get started) is 30%. You want to spot a rise to 40%. Use the rule of thumb to estimate the users needed per group. Then say whether you would run the test with 150 new accounts a month.',
      ph:'16 × … × … ÷ … = … per group, so…',
      after:'Here p = 0.30 and the MDE is 0.10. The sum is 16 × 0.30 × 0.70 ÷ 0.01 = 336 accounts per group, or 672 in total. At 150 new accounts a month, that takes about four and a half months. That is probably too slow for a product that changes every week. You have two options. Aim only for a larger effect, which needs fewer users. Or decide from watching sessions and a careful before-and-after comparison, and say clearly that this is weaker evidence.'}],
    ['q','I609'],

    ['h','Idea 5: Data quality, QA and causal humility'],
    ['p','Here is an uncomfortable fact. Bad data looks exactly like good data on a chart. So check your tracking before you trust a single number:'],
    ['n',[
      'Trigger each event yourself and confirm it arrives once, with the right properties.',
      'Compare an event count with your database (where your app keeps its records). For example, compare accounts created with the rows in the accounts table.',
      'Filter out your own team’s traffic and test accounts.',
      'Check that events still fire after each release (each new version you ship).'
    ]],
    ['p','Next, keep product analytics apart from model telemetry. Telemetry means the records a system keeps about itself: traces, latency (how long a request took) and eval scores (marks from the answer-key test). These tell you how the model behaved (Chapter 30). Product events tell you what people did. Link the two with a shared request ID (one number on both records), so you can move between them.'],
    ['p','Last, be careful about causes. Say users who share reports stay longer. Sharing might cause that. Or keen users may simply do both. Only a random test shows cause. Everything else is a pattern worth testing.'],
    ['key','Write “users who do X also tend to do Y”, unless a controlled test shows that X causes Y.'],
    ['do','Prove it now',[
      ['p','Run the four QA checks (the four checks above) on one event in your capstone, and write down what you found.'],
      ['x','Four results. Plus a counterexample: a chart in your capstone that would look fine even if an event were firing twice.']
    ]],

    ['h','What you have learned'],
    ['p','You now have a way to measure a product from start to end. You pick one number that matters and the inputs that move it. You record events with clear names. You read funnels, cohorts and segments. You test changes fairly. And you check your data before you believe it.'],
    ['p','Next, you will look at the tools that make all this work, and how to choose them for an AI product workflow.']
  ]
},

{
  id:'b4', num:'B4', part:7, curriculumTier:'reference', phase:0, prerequisites:['ch1','ch12t','a7'], nextUnits:['b5','b6'], minutes:150, labs:[],
  title:'Choosing tools for an AI product workflow',
  concept:'This is one decision made eleven times, not seventeen tools to learn. For each job in your workflow, ask what a tool in that slot has to do for you, and what breaks if you skip it. Think of a toolbox: you need one hammer, not a shelf of hammers. Pick one tool per job, and learn the job, not the brand.',
  takeaway:[
    'Name the eleven capabilities (eleven jobs) an AI product workflow needs tools for, without naming a brand for each.',
    'Choose one tool per capability by what it must do and what it must never do, not by what is popular.',
    'Know where every tool in your stack (the set of tools you use together) stores data and secrets. And audit (check one by one) what an AI research tool claims before you trust it.',
    'Explain what breaks when a vendor (the company that makes the tool) changes an API, and how you would notice.'
  ],
  needs:[['Your first API call','The capability table assumes you can already make one (an API call, a message sent to the model).',1],
         ['Tool calling and workflows','The automation and coding capabilities use the same ideas.',25],
         ['A prototype and a PRD','You already built one. This chapter looks again at how you chose its tool.','A7']],
  capstone:{
    title:'Choose one tool for each job, and check what each one does with your data',
    brief:'Tools change every few months, but the jobs they do stay the same. Think of a kitchen: the stove changes, cooking stays. In this chapter you learned to name the jobs first, to choose a tool by what it must do and must never do, and to know where each tool stores data and keys. Now you will choose the tools for Bharat Privacy Guard and audit them.',
    where:'Written work only. Name the tools and run the two audits. No code needed.',
    steps:[
      'List the capabilities your project really uses, from the eleven in this chapter: a language model, research, prototyping, coding help, automation, API testing, version control, deployment, a database, analytics and tracing. Most projects need five or six, not all eleven.',
      'For each capability you use, write the tool you chose, the job it does for this project, and one tool you could have chosen instead.',
      'Run a claim audit once. Take an AI summary of your own research on this project. Pick ten claims (things the summary says are true). Check each one against its source. Mark each as supported, partly supported or unsupported.',
      'Run a secrets-and-data audit on your whole stack. For every tool, write what data it stores and where its keys (secret passwords for services) live. Check that no key sits in front-end code (the code anyone can see in a browser) or in your repository (the online folder that remembers your changes).',
      'Note any place where personal data could end up in a tool by accident, such as logs or analytics, and what stops it.'
    ],
    done:[
      'One chosen tool, one job and one alternative for each capability you use.',
      'A claim audit of ten claims, each one marked.',
      'A note of where every key lives and what data each tool stores.',
      'A list of the places personal data could leak into by accident, and how each one is prevented.',
      'A score from 0 to 3 for each item above, using this chapter’s scale, like marking your own homework. Move on only when every score is 2 or more, and no safety, privacy or evidence item scores 0.'
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
    ['c','On your route','First, go through it quickly, in about twenty minutes: read it and answer the boxes. The long “Build it” work can wait until later.'],
    ['c','Before you start','In full, this chapter takes about two and a half hours. Tools change every few months. The brands named below are one current example each, not a requirement. If a named tool is gone by the time you read this, pick a replacement that does the same job.'],
    ['p','By now your project probably uses several tools: one for the model, one for code, one for watching what users do. This chapter steps back and asks a simple question. How should you choose them? Think of picking tools for a kitchen.'],
    ['p','Here is the idea in a few lines. An AI product workflow needs eleven capabilities, from start to finish. A capability is a job that has to get done, such as storing your code safely or showing how people use the product. A tool is whatever you pick to do that job.'],
    ['p','Most projects use five or six of the eleven, not all of them. This chapter corrects one mistake: treating each capability as a subject to master. Think of each one as a slot, like a socket on a board, and plug one tool into it.'],
    ['h','The toolchain, by capability'],
    ['p','The table below lists the eleven. Read the middle column first. It says what any tool in that slot must do for you. The last column gives one current example, and nothing more.'],
    [
      'tb',
      ['Capability (the job)','What a tool in this slot must do for you','One current example'],
      [
        ['LLM / reasoning','Answer, draft and reason over text you give it, whenever you ask','ChatGPT, Claude'],
        ['Research / source grounding','Answer only from the sources you upload, with citations you can check','NotebookLM'],
        ['Prototyping','Turn a description into a working screen quickly, so a user can try it','Lovable, Google AI Studio, or Figma for flow only'],
        ['Coding','Read your repository, edit files and run commands, with you reviewing the changes','Claude Code, Cursor'],
        ['Automation','Join a trigger (what starts it), a call, a validation (a check) and an approval into a workflow that runs the same way every time','n8n'],
        ['API testing','Send an exact request, show the raw response, and save it as a check you can repeat','Postman'],
        ['Version control','Store code, review every change, and run checks before a change is merged (added to the main code)','GitHub'],
        ['Deployment','Deploy (put the new version live) on every push to the main branch, and go back to the old one within minutes','Vercel'],
        ['Database','Give you sign-in, tables and row-level access rules, so one user cannot see another’s data','Supabase'],
        ['Analytics','Record events, and draw funnels and cohorts from real usage','PostHog'],
        ['Observability','Trace one request from start to finish: what it cost, how long it took and what it returned','Chapter 30’s trace schema (the fixed set of fields each trace records), in whatever tool shows it']
      ]
    ],
    ['key','Pick one tool per capability, and learn what that capability must do. The brand can be replaced. The capability cannot.'],
    ['h','Two habits that outlast every tool on this list'],
    ['p','Tools will come and go, but two habits will stay useful. The first is the <strong>claim audit</strong>. AI tools can summarise research fast, but a summary can say things the source never said. Think of a student who adds lines the book never wrote. So pick ten claims from an AI summary and check each one against its source. Mark each as supported, partly supported or unsupported.'],
    ['p','If more than one or two fail, stop trusting that workflow for decisions, whichever research tool produced it.'],
    ['p','The second habit is the <strong>secrets-and-data audit</strong>. For every tool in your stack, write what it stores and where its keys live. A key is a secret code that lets your app use a service. It is like the key to your shop’s cash box.'],
    ['p','Generated prototypes (screens built for you by an AI tool) especially tend to put API keys in front-end code, where anyone can read them. They also tend to ship a database with no access rules. Check both before you share a link with anyone.'],
    ['do','Prove it now',[
      ['p','Run the claim audit once, on any AI-summarised research you already have. Then list your own capstone’s stack and run the secrets-and-data audit on it.'],
      ['x','Ten claims, each one marked. A short stack list, with each row naming what the tool stores and where its secrets live. Plus a counterexample (a case where the tool fails): a claim a source-grounded tool would still get wrong, such as what users did not mention.']
    ]],
    ['q','I610'],
    ['try',{id:'b4-stack',mins:10,min:120,rows:6,
      task:'List every tool in your capstone stack. For each one, write what data it stores or receives, and where its secrets live.',
      ph:'GitHub: … Vercel: … Supabase: … PostHog: … Model provider: …',
      after:'Here is a complete answer for the Theme Finder stack. <strong>GitHub</strong> stores code only, with no secrets, which you check by searching the history. <strong>Vercel</strong> stores the model and Supabase keys as environment variables (settings kept outside the code), and keeps request logs. <strong>Supabase</strong> stores accounts, theme results and ticket IDs, with row-level access rules. <strong>PostHog</strong> stores events with account IDs, and no ticket text. <strong>The model provider</strong> receives ticket text in each request, so check its retention and training policy (how long it keeps your text, and whether it learns from it). <strong>n8n</strong> stores helpdesk and Slack credentials in its credential store. Writing this list is the start of the data-flow diagram (a map of where data travels) your security lead will ask for.'}],

    ['h','What you have learned'],
    ['p','You now have a calm way to handle the tool noise. Name the job first. Pick one tool for it. Then check what that tool stores, where its keys live, and what its AI claims are really based on.'],
    ['p','Next, you will look at the system that wraps around the model inside your product, which is called the harness.']
  ]
},
{
  id:'b5', num:'B5', part:7, curriculumTier:'selective', phase:6, prerequisites:['ch13a','ch17o','ch18s'], nextUnits:['b6'], minutes:720, labs:[],
  title:'Harness engineering: the system around the model',
  concept:'The model is only one part of an AI product. The rest is the harness: the gear around the model, like the reins and saddle on a horse. It is the code that builds the request, runs tools, keeps state, enforces rules, checks quality and records what happened. You will draw the harness around your capstone (your project), build one workflow two ways, and write a release checklist.',
  takeaway:[
    'Name the seven parts of a harness (the gear around the model), and find each one in your capstone.',
    'Spot the patterns coding agents use (helpers that write code), and reuse them in your own product.',
    'Set tool and permission boundaries, like a fence around a garden. Say what proof would let you make the fence wider.',
    'Choose between a fixed workflow (steps set in advance) and a bounded agent (a helper with a limit), using measured results.',
    'Set release gates (checks before launch), a rollback trigger (the signal to go back), and who answers when something breaks.'
  ],
  needs:[['Agents (helpers that use tools in a loop)','Idea 4 compares an agent with a fixed workflow.',26],
         ['Observability','Traces (the diary of one run) are one part of the harness.',30],
         ['Security and governance (keeping things safe, and the rules for who may do what)','Idea 3 uses it for tool permissions.',31],
         ['A coding agent (a helper that writes code)','Idea 2 shows how one works.','B4']],
  capstone:{
    title:'Draw the harness around the model, and get ready for a safe release',
    brief:'The model is only one part of the product. Everything around it decides if you can depend on the product. That means how the request is built, what the model may do, what is remembered, what is checked and what is recorded. In this chapter you learned the seven parts of that system. You learned how to pick a fixed workflow or a limited agent by measuring, and how to set release gates and a rollback trigger. Now you do that for Bharat Privacy Guard.',
    where:'Code: build the rule-keeper both ways in your project’s own codebase (the folder of your project’s code). Then write the diagram and the checklist in the notes box below.',
    steps:[
      'Draw the harness around the tool. Show the inputs, how each request is put together, the tools, the stored state, the policies (such as your sharing rule), the test gates, the traces and the fallbacks (the plan B when something fails).',
      'On the drawing, mark every point where the model’s output turns into an action. Also mark what checks it on the way.',
      'Build the rule-keeper twice and run the same twenty sentences through both. First build it as a fixed set of steps. Then build it as an agent with a step limit. Compare how often each fails, how long each takes and how easy each is to debug (to find the cause of a fault).',
      'List the permissions each tool has. For each one, write the worst thing that could happen if it were misused.',
      'Write a release checklist. It needs a rollback trigger that is a number someone can check, for example “roll back if missed Aadhaar numbers rise above 3 in 100”. Rolling back means going back to the old version. Add the name of the person who answers an incident (a serious fault).'
    ],
    done:[
      'A harness diagram. It shows where the model’s output becomes an action, and what checks it.',
      'A side-by-side of the two builds on the same twenty sentences, with all three measures.',
      'A list of permissions, with the worst case for each.',
      'A release checklist with a rollback trigger that is a number, and a named incident owner.',
      'A score from 0 to 3 for each item above, using this chapter’s scale, like marking your own homework. Move on only when every score is 2 or more, and no safety, privacy or evidence item scores 0.'
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
    ['c','On your route','First, go through it quickly, in about twenty minutes: read it and answer the boxes. The long “Build it” work can wait until later.'],
    ['c','Before you start','All of it takes about twelve hours. You need a working version of your capstone’s main flow, even a rough one. You also need a coding agent (a helper that writes code) from B4.'],

    ['p','In the last chapter you chose the tools for your project. Now look at what holds those tools together around the model. A model on its own takes text in and gives text out. That is all. What makes it a product you can trust is everything around it.'],
    ['p','Here is the plan. You name the seven parts of that system. You learn from how coding agents are built. Then you set limits on what a tool may do, compare a fixed workflow with an agent, and plan a safe release.'],

    ['h','Idea 1: What a harness is'],
    ['p','Think of the reins and saddle on a horse. The horse is strong, but it cannot steer itself. The model is like that horse. It takes text in and gives text out. Everything else that makes an AI product work lives in the <strong>harness</strong> (the gear around the model).'],
    ['p','A harness has seven parts. The table below gives each part a name, says what it does, and shows what it looks like in Theme Finder.'],
    ['tb',['Part','What it does','Theme Finder example'],[
      ['Context','Builds what the model sees each time you call it','The instructions, 50 tickets, the existing theme list'],
      ['Tools (the buttons the model can ask you to press)','Lets the model read or act','Fetch tickets; look up an old theme'],
      ['State','Remembers things between steps and between visits','Last week’s themes; which tickets are done'],
      ['Orchestration','Decides which step runs next','Sort, then group, then sum up'],
      ['Policy','Sets rules the model cannot break','No email without approval; no ticket text in logs'],
      ['Evals (the answer-key tests)','Checks quality before and after release','A 50-ticket test set; a sample checked every week'],
      ['Observability','Writes down what happened','A trace per run: tokens, cost and latency (the waiting time)']
    ]],
    ['p','Orchestration is the part that decides which step runs next, like a train guard waving the flag. Evals are the tests you score the model on, like the teacher’s answer key. Observability is the record that lets you look back and see what happened, like a diary.'],
    ['p','Two products can use the same model and still behave very differently. The harness is the reason. Most quality problems you will fix live in the harness, not in the model.'],
    ['do','Prove it now',[
      ['p','Fill in the seven rows for your capstone. Leave a row empty if you do not have that part yet.'],
      ['x','A seven-row table. The empty rows are your to-do list. Counterexample: a product where one of the seven parts really is not needed.']
    ]],

    ['h','Idea 2: How coding agents are built'],
    ['p','Coding agents such as Claude Code are the most widely used agents today. A coding agent is a helper that writes and fixes code for you. You can learn a lot from them, because their design shows patterns you can reuse in your own product. There are six.'],
    ['l',[
      '<strong>A simple loop.</strong> The model picks a tool. The harness runs it. The result goes back to the model. This repeats until the job is done, like a cook who tastes, adds salt, and tastes again.',
      '<strong>A small set of general tools.</strong> These are things like read a file, edit a file, search and run a command. A few tools that fit many jobs beat dozens that fit one job, like one good knife beats twenty gadgets.',
      '<strong>Project memory.</strong> A file in the repository (the online folder that remembers every change), such as <code>CLAUDE.md</code>, holds the rules. It is loaded every time the agent runs, like a note on the fridge.',
      '<strong>Permission modes.</strong> Reading is free for all. But editing files or running commands can need a yes from a person first, like a shop where anyone can look but only the owner opens the till.',
      '<strong>A verifier.</strong> Tests and type checks (a spell-check for code) tell the agent whether its change worked. A person does not have to read every line.',
      '<strong>Sub-agents.</strong> A big job is cut into pieces. A helper does one piece on its own desk (its own context), so the main desk stays tidy.'
    ]],
    ['key','The verifier matters most. An agent that can check its own work reliably, like a student who checks answers against the key, can take on much bigger jobs.'],
    ['do','Prove it now',[
      ['p','Give your coding agent one small job on your capstone, such as adding input validation (checking what the user types). Watch which tools it calls, in order.'],
      ['x','The list of tool calls. Mark the step where it checked its own work. If it never did, what verifier could you add?']
    ]],

    ['h','Idea 3: Tool and permission boundaries'],
    ['p','Personal agents such as OpenClaw can run on your own computer. They can reach your files, your messages and your shell (the place where you type commands). That makes them useful. It also makes them dangerous, like giving a stranger your house keys.'],
    ['p','Ask the same four questions of any agent that uses tools:'],
    ['n',[
      '<strong>Which tools can it call?</strong> Use an allowlist (a list of names that are allowed in). Anything not on the list is refused.',
      '<strong>With what scope?</strong> Keep it read-only where you can. Limit it to one folder, one channel, one customer’s data.',
      '<strong>Which calls need approval?</strong> Anything that sends, deletes, pays or cannot be undone.',
      '<strong>What can reach it?</strong> Any text it reads, such as tickets, email or web pages, may hide instructions from an attacker, like a note slipped into the homework.'
    ]],
    ['c','Watch out','Recall the lethal trifecta (three risky things together) from Chapter 13. An agent that has private data, untrusted input and a way to send data out can be tricked into leaking. For every group of tools, remove at least one of the three.'],
    ['p','So start with a small fence. Make it wider only when you have proof, and decide in advance what that proof is.'],
    ['do','Prove it now',[
      ['p','List every tool in your capstone. Mark each one read or write, and say whether it needs approval.'],
      ['x','A tool list with scopes. Check it for the lethal trifecta. Counterexample: a tool that looks read-only but can still leak data.']
    ]],
    ['q','I612'],

    ['h','Idea 4: Fixed workflows or bounded agents'],
    ['p','Here is a choice you will meet often. Should your code decide every step, or should the model decide?'],
    ['p','A <strong>state machine</strong> is a workflow where your code fixes every step and every move from one step to the next, like a railway track. A <strong>bounded agent</strong> lets the model pick the steps, but only within a tool list and a step budget, like a child allowed to play inside the gate. Here they are side by side, for the weekly report:'],
    ['code','State machine                       Bounded agent\n\nFETCH → CLASSIFY → GROUP            Goal: produce the weekly report\n  → SUMMARISE → APPROVE → SEND      Tools: fetch, classify, group,\n                                           summarise, request_approval\nEach step has one next step.        Max 12 steps. Must request\nErrors go to RETRY or HUMAN.        approval before sending.'],
    ['p','Which one is better? Do not guess. Build both and measure them on the same twenty test weeks. Here is what such a comparison can look like:'],
    ['tb',['Measure','State machine','Bounded agent'],[
      ['Runs that gave a correct report','19 of 20','17 of 20'],
      ['Median time','40 s','75 s'],
      ['Time to find why it failed','Minutes: the failing step is written in the log','Longer: you must read the whole trace'],
      ['How it handles an unusual week','Needs a code change','Often adjusts by itself']
    ]],
    ['p','For a fixed job like a weekly report, the state machine wins, like a train on a track. Agents earn their place when the steps really do change from case to case.'],
    ['do','Prove it now',[
      ['p','Build one small workflow from your capstone both ways. Run both on at least ten cases.'],
      ['x','A three-row table like the one above, from your own runs. Counterexample: a case in your capstone where the agent did better.']
    ]],
    ['q','I613'],

    ['h','Idea 5: Release gates, rollback and incidents'],
    ['p','The last idea is about releasing safely. A <strong>release gate</strong> is a check that must pass before a change reaches users, like the ticket check at a station gate. For AI products, the gates include the eval set (your set of test cases for the model) as well as ordinary tests. Here is a typical set of gates:'],
    ['n',[
      'Unit tests and type checks pass.',
      'The eval set scores at or above the threshold (the pass mark), with no new failures in safety cases.',
      'Cost and latency (the waiting time) per run are within budget.',
      'The change goes to 10% of accounts first, behind a feature flag (a switch that turns it on for some accounts only).',
      'The rollback trigger and the incident owner are written down.'
    ]],
    ['p','Gates stop most bad changes, but things will still go wrong sometimes. So decide in advance how the system answers each kind of failure. The worse the problem, the more careful the answer.'],
    ['tb',['Response','When','Example'],[
      ['Retry','A short glitch','Rate limit (too many requests); network timeout'],
      ['Degrade (work with less)','One part is down but the rest works','Send the report without the trend chart'],
      ['Escalate (call someone senior)','You cannot trust the output','JSON (a form in curly brackets) fails validation twice'],
      ['Stop','An action you cannot undo looks wrong','The report would go to 500 people instead of 5']
    ]],
    ['p','When something goes wrong in production (the live product), the incident owner acts fast. They roll back if needed, and they tell the people affected. Rolling back means going back to the previous version, like pressing undo. Afterwards, write a short review: what happened, why, and what check would have caught it.'],
    ['try',{id:'b5-rollback',mins:8,min:100,rows:5,
      task:'Write the rollback trigger and incident plan for a new version of your capstone’s main prompt (the note you hand the model). Include a trigger you can measure, who decides, how you roll back and how long it takes.',
      ph:'Roll back if… Decided by… How… Time to roll back…',
      after:'Here is a strong plan. <strong>Roll back if</strong> the share of themes marked useful drops more than 10 points below last week, or any report goes to the wrong recipient. <strong>Decided by</strong> the PM on call, who does not need anyone’s approval to roll back. <strong>How:</strong> switch the prompt version flag back to the previous version, because prompts are versioned in the repository. <strong>Time:</strong> under five minutes, and it was tested once before launch. Afterwards, the PM writes a one-page review within two days.'}],

    ['h','What you have learned'],
    ['p','The model is one part of your product. The harness around it (the gear that steers it) decides whether people can trust the product.'],
    ['p','You can now name its seven parts and borrow the patterns coding agents use. You can limit what each tool may do. You can pick a fixed workflow or an agent by measuring. And you know how to release and roll back safely.'],
    ['p','Next, you put your project in front of real users and learn from what they do.']
  ]
},

{
  id:'b6', num:'B6', part:7, curriculumTier:'selective', phase:6, prerequisites:['b4','b5','ch145'], nextUnits:['b7'], minutes:1080, labs:[],
  title:'Ship to real users and run the learning loop',
  concept:'Put your capstone (your project) in front of real users, and learn from what they do. You get it ready for production (the live product people use), find people honestly, join what they say with what they do, and ship one improvement based on evidence.',
  takeaway:[
    'Check that a product is ready to run, and name who owns it when it breaks, like a shopkeeper who answers when the shutter jams.',
    'Find design partners (early testers) honestly, with clear consent (a clear yes) and care for their data.',
    'Join what users say with what they do. When the two do not match, trust what they do.',
    'Pick the next fix by how often it happens, how bad it is and what it costs, like deciding which leak in the roof to fix first.',
    'Tell users what changed, and turn support requests into product evidence.'
  ],
  needs:[['A deployed app (one that is live online) with analytics (counting what users do)','This chapter puts it in front of real users.','B4'],
         ['A release checklist (the list of checks before launch)','You use it before launch.','B5'],
         ['Reading failures by hand (reading wrong answers one by one)','Idea 4 makes a list of failures the same way.',14.5],
         ['Interview skills','You watch sessions with the same care.','A3']],
  capstone:{
    title:'Put it in front of real users, and make one improvement from what you see',
    brief:'A demo is not a launch. In this chapter you learned how to check that a product is ready to run and how to find testers honestly. You learned to trust what people do over what they say, and to turn support requests into evidence. Now you put the developer kit demo online, watch real people use it, and make one change because of what you saw.',
    where:'Code, to put the demo online and watch it, plus real user sessions. Then write the change note (a short note on what changed) in the notes box below.',
    steps:[
      'Put the demo at a stable web address (one that does not keep changing). Add monitoring (a watchman that alerts you), usage tracking that never records personal details, a privacy notice, a way to send feedback and a way to roll back (go back to the old version).',
      'Find five to ten real target users, meaning developers or the people they build for. Ask for clear consent, explain what data is used, and let them stop at any time.',
      'Watch at least five sessions (one person using the product while you look on). Write down whether each person succeeded, how long it took, where it failed, what they said, and whether they came back.',
      'Make a list of the problems you saw. Score each one by how often it happened, how bad it was and how costly it is to fix. Pick one to fix.',
      'Fix it, ship it, and compare the numbers before and after. Write a short change note that tells users what changed, why, and what they should do differently.',
      'Start a simple support log (a notebook of help requests) with the date, who asked, the category and what you did. Read it every week.'
    ],
    done:[
      'A live web address with the safety items in place.',
      'Notes from at least five sessions with real target users, not friends or teammates doing you a favour.',
      'A scored problem list, and the one problem you chose.',
      'Before and after numbers for the change, and a change note for users.',
      'A score from 0 to 3 for each item above, using this chapter’s scale, like marking your own homework. Move on only when every score is 2 or more, and no safety, privacy or evidence item scores 0.'
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
    ['c','On your route','First, go through it quickly, in about twenty minutes: read it and answer the boxes. The long “Build it” work can wait until later.'],
    ['c','Before you start','All of it takes about eighteen hours, over two or three weeks, because users need time to come back. You need your deployed app (the live one) from B4 and the release checklist from B5.'],

    ['p','In the last chapter you drew the system around the model and wrote a release checklist. Now you use it. Until real people try your product, everything you know about it is a guess.'],
    ['p','Here is the plan. You get the product ready to run, find early users honestly, and watch what they do. Then you pick the next fix, and tell users what changed.'],

    ['h','Idea 1: Ready to run, and owned'],
    ['p','A demo works while you watch it. A product has to work while nobody is watching, like a shop that stays open when the owner steps out. So before any real user arrives, check these six areas:'],
    ['tb',['Area','Ready when'],[
      ['Monitoring (a watchman for your app)','You get an alert when errors rise or the app slows down'],
      ['Analytics','Your tracking plan events arrive from the live app (a note arrives each time a user does something)'],
      ['Privacy','A notice says what you collect, why, and how to delete it'],
      ['Feedback (a way for users to tell you)','A user can report a problem in one click'],
      ['Rollback','You have tested going back to the previous version'],
      ['Cost','A spending limit is set with the model provider (the company that runs the model)']
    ]],
    ['p','Every production system also needs an owner. That is the person who answers when it breaks at a bad time. For a capstone, that person is you. Write down how you will be alerted, and how fast you will respond.'],
    ['do','Prove it now',[
      ['p','Go through the six rows for your capstone. Fix anything that is not ready.'],
      ['x','Six ticks, or a list of what is missing. Counterexample: a failure your monitoring would not catch, such as the model returning plausible but wrong themes.']
    ]],
    ['q','I614'],

    ['h','Idea 2: Recruiting design partners ethically'],
    ['p','Once the product is ready, you need people to try it. <strong>Design partners</strong> are early users who agree to use an unfinished product and tell you what they find, like friends who taste a new dish before the shop opens. They give you their time, and sometimes their data. So find them honestly:'],
    ['l',[
      'Say clearly that the product is early and may be wrong.',
      'Say what data you collect, where it goes and how they can delete it. Get their consent (a clear yes) in writing.',
      'Do not use data they did not agree to share. For Theme Finder, start with a sample of tickets they choose.',
      'Give something fair in return, such as early access or a discount. But do not pay so much that they feel they owe you praise.',
      'Let them stop at any time, with no awkwardness.'
    ]],
    ['p','Look for people who have the problem now and already use your target tools. Your A3 interviewees are a good place to start. Friends and colleagues are easy to find, but they are too polite to be useful.'],
    ['do','Prove it now',[
      ['p','Write the recruiting message you will send. Say what the product does, what you ask of them, what data is involved and what they get.'],
      ['x','A short message. Read it as the person receiving it: is anything unclear or pushy? Counterexample: a person who fits your target but should not be recruited, and why.']
    ]],

    ['h','Idea 3: What users say, and what they do'],
    ['p','Now your partners are using the product. Remember that users often say one thing and do another. They say a feature is great and never use it again. They complain about something and use the product every day. So you need both kinds of evidence.'],
    ['p','Watch at least five sessions. Give each user a real task and stay quiet while they work, like a teacher watching an exam. Write down the same fields each time:'],
    ['code','Session 3 — support lead, 40-person team, Freshdesk\n\nTask            Find this week’s fastest-growing issue\nSucceeded?      Yes, after one wrong turn\nTime            4 min 10 s\nFailures        Opened "Billing" first; theme name was vague\nQuote           "I don’t know why this ticket is in here."\nCame back?      Yes, the next two Mondays (from analytics)'],
    ['key','When what users say and what they do do not match, trust what they do. Then ask them why.'],
    ['do','Prove it now',[
      ['p','Run your first watched session and fill in the seven fields.'],
      ['x','One complete session record. Counterexample: a time when what the user said was more useful than what they did.']
    ]],

    ['h','Idea 4: Prioritising failures and opportunities'],
    ['p','After five sessions and two weeks of data, you will have more problems than time. So put them all in one list. Score each one by how often it happens, how bad it is and how much it costs to fix, like a doctor deciding who to see first. Here is an example:'],
    ['tb',['Problem','How often','How bad','Cost to fix','Priority'],[
      ['Unclear why a ticket is in a theme','4 of 6 users','High: they stop trusting it','Small','1'],
      ['Import fails for over 5,000 tickets','1 account','High for them','Medium','2'],
      ['Theme names are too long','3 of 6','Low','Small','3'],
      ['Wants Zendesk support','2 prospects (people who might become users)','Blocks them completely','Large','Later']
    ]],
    ['p','Put AI failures and product failures in the same list. A wrong theme and a confusing button both cost users. For the AI rows, reuse the failure taxonomy (the sorted piles of failure types) you built in Chapter 14.5.'],
    ['do','Prove it now',[
      ['p','Build your list with at least five problems from your sessions and data. Pick the top one.'],
      ['x','A scored list and one choice. Write down which number you expect it to move, and by how much.']
    ]],
    ['try',{id:'b6-iterate',mins:10,min:120,rows:6,
      task:'Describe the improvement you will ship. Write the problem with its evidence, the change, the metric (the number you watch) you expect to move and by how much, and what you will do if it does not move.',
      ph:'We saw… so we will… we expect… if it does not move…',
      after:'Here is a strong answer. <strong>We saw</strong> 4 of 6 users question why a ticket was in a theme, and only 58% of themes were marked useful. <strong>We will</strong> add a “why this theme” link that shows the three phrases that matched. <strong>We expect</strong> useful themes to rise above 65% within two weeks, with no increase in time per report. <strong>If it does not move,</strong> the problem may be the grouping itself, not the explanation. We will then review 50 disputed tickets by hand before changing anything else.'}],
    ['q','I615'],

    ['h','Idea 5: Release notes and support loops'],
    ['p','Each time you ship, tell users what changed. They notice a change much more easily when someone points it out. A good changelog entry (a short note on what changed) is brief and practical, like a sign on a shop door:'],
    ['code','15 October — Why is this ticket here?\n\nEach ticket in a theme now has a "why" link. It shows the\nphrases that put it there. If a ticket is in the wrong theme,\nuse "Move" and we will learn from it.\n\nKnown issue: imports over 5,000 tickets can time out.\nWe are working on it.'],
    ['p','There is one more source of evidence, and it comes to you free. Support requests are product research. Write down each one with its category and the account, and read the log every week with your analytics (the counts of what users do). A problem that shows up in support, in sessions and in the data together is almost certainly real.'],
    ['do','Prove it now',[
      ['p','Write the changelog entry for your improvement. Then set up a simple support log with date, account, category and what you did.'],
      ['x','One entry and one log. Counterexample: a change that should not be announced, and why.']
    ]],

    ['h','What you have learned'],
    ['p','You have now been through the whole learning loop. You get the product ready, find honest users, and watch what they do. Then you fix the problem that matters most, tell users, and keep listening through support.'],
    ['p','Next, you turn the work you have done into a story for the AI PM job market.']
  ]
},
{
  id:'b7', num:'B7', part:7, curriculumTier:'selective', phase:7, prerequisites:['b6','ch20d','ch19pm'], nextUnits:[], minutes:720, labs:[],
  title:'Getting the job: career readiness for AI PM roles',
  concept:'You have built something real in this course. Now you turn it into proof an employer can see, like a report card for your work. You will pick the right jobs to aim for. You will write case studies and a resume from your own work. You will practise each kind of interview. Then you will finish a timed take-home.',
  takeaway:[
    'Build a role matrix (a grid of jobs and the skills they ask for) from real job descriptions, and find the gaps in your evidence.',
    'Write resume bullets and case studies that show your decisions and what happened because of them.',
    'Answer product sense, strategy, metrics and execution questions with a clear plan, like following a recipe card.',
    'Work through an AI system-design question (how you would build an AI product) step by step. Cover evaluation, cost and failure.',
    'Tell behavioural stories (true stories about your past choices) about your own decisions, and get ready to negotiate.'
  ],
  needs:[['A shipped capstone with evidence (a finished project with proof)','Your case studies come from it.','B6'],
         ['Architecture and vendor strategy (how the parts fit, and which company you buy from)','System-design interviews ask about it.',33],
         ['AI product management (deciding what an AI product should do)','Interviewers expect you to use its words.',32]],
  capstone:{
    title:'Turn the project into evidence for your next job',
    brief:'You started this course to get ready for a job. Your project is now your best proof. In this chapter you learned to build a role matrix from real job descriptions. You also learned to write case studies and resume lines that show your decisions and results. And you learned to answer interview questions with a clear plan. Now you turn Bharat Privacy Guard into the proof you will show.',
    where:'Written, with recorded mock interviews (practice interviews). Code only if the role you apply for expects it in the take-home.',
    steps:[
      'Collect ten real job descriptions for roles you would apply for. Make a table with the skills they ask for down the side and the descriptions across the top. Mark the skills that show up again and again. Then mark each one for yourself as proven, partly proven or missing.',
      'Write two case studies (short written stories of a project). One is Bharat Privacy Guard. Each must show the problem and your evidence for it, your decisions, the trade-offs, the numbers, the failures and what you learned. Include at least one decision that turned out wrong, and what you did about it.',
      'Rewrite your resume lines as action, decision and result, and give each one a number. For example: “Chose a fixed workflow over an agent after measuring both on the same cases, which cut failures by half.”',
      'Answer this system-design question aloud in twenty-five minutes, and record yourself: “Design a privacy layer for Indian websites and AI chatbots.” Cover the users and the task, the approach, how you test it, how it fails, the cost and speed, and the rollout (how you release it step by step).',
      'Record three more mock interviews. Do one each on product sense, on metrics, and on a story about a decision of yours that went wrong. Score all four with a rubric (a marking sheet, like a teacher\'s).',
      'Do one 48-hour take-home task (a test you do at home) within the time limit. Then write a critique of your own answer.'
    ],
    done:[
      'A role matrix covering ten real job descriptions, with each skill marked proven, partly proven or missing.',
      'Two case studies. Each has a decision that went wrong and what you did about it.',
      'Resume lines that each have a number or a clear result.',
      'Four recorded mock interviews. Each one is scored with a rubric.',
      'A take-home answer, and your own critique of it.',
      'A score from 0 to 3 for each item above, using this chapter’s scale, like marking your own homework. Move on only when every score is 2 or more, and no safety, privacy or evidence item scores 0.'
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
    ['c','On your route','First, go through it quickly, in about twenty minutes: read it and answer the boxes. The long “Build it” work can wait until later.'],
    ['c','Before you start','In full, this chapter takes about twelve hours. Collect ten job descriptions for roles you would apply for. Keep your capstone evidence pack from B6 ready (the folder of proof you made). Find a friend or peer who can run mock interviews with you.'],

    ['p','In the last chapter you shipped to real users. You learned from what happened. That work is the best thing you can show an employer. But an interviewer cannot see it unless you present it well.'],
    ['p','So this chapter turns your project into proof, like a shopkeeper arranging goods in the window. You will choose the right roles and write about your work. You will practise the interview questions you are likely to meet. You will also get ready to negotiate. Let us start with the roles.'],

    ['h','The objection you will meet'],
    ['p','One question comes up in almost every interview for you, politely or not: “You are moving over from programme management. Why should we treat you as a product person?” Some AI-native companies say outright that they screen out people who move over from project work. Do not argue with the worry. Answer it with proof.'],
    ['p','Start with what you shipped and measured, not with your years of experience. Then show the one thing delivery work could not teach you: you owned a decision and a number. Think of a train: delivery keeps it on time, product decides where it goes. The date you promised becomes the outcome you promised. Scope delivered becomes the number moved.'],
    ['p','A good answer has five sentences. First, what you built. Second, the number from your release gate (the test your product must pass before it goes out). Third, a decision you made by measuring two options. Fourth, a decision you owned before this course. Fifth, what you want to own next. Say it aloud until it takes under a minute.'],
    ['try',{id:'b7-objection',mins:10,min:120,rows:6,
      task:'Answer in five sentences: “You are moving over from programme management. Why should we treat you as a product person?” Each of the first four sentences must start with something you shipped, measured or decided.',
      ph:'I built… It passed… I measured… Before this course I decided… Next I want to own…',
      after:'A strong answer. <strong>I built Bharat Privacy Guard, a tool that finds Indian identity numbers before text leaves a person’s device.</strong> It passed my release gate: it found [your figure] of every 100 numbers in my answer key (my list of known right answers), with [your figure] false alarms. I measured a fixed workflow against an agent on the same cases and shipped the workflow, because it failed less and cost less. Before this course I held a district go-live by two weeks because the payment step failed twice, and I wrote down what would make me reverse that. Next I want to own the number, not only the date.'}],

    ['h','Idea 1: Target roles and position yourself with evidence'],
    ['p','“AI product manager” sounds like one job. It is not. Companies use the title for several different jobs, like one word for many dishes. Each job asks for different proof. The table below shows the three doors open to you. As you read it, ask which door you will try first.'],
    ['tb',['Door','What you build','What they look for'],[
      ['An AI-native product company (a company built around AI)','A product that exists because of AI','Agents you built, an eval suite (a set of tests) you run yourself, cost and latency (waiting time) numbers, fast prototyping. Some screen out people moving over from project work, so lead with what you shipped.'],
      ['A consulting firm building AI systems for clients (a company that builds for others)','Language-model apps, retrieval (finding the right page first) and multi-agent systems for client organisations','Model evaluation, AI governance (rules for using AI safely), and proof that you can scope, measure and hand over. Delivery and consulting backgrounds are accepted.'],
      ['A public-sector or digital-public-infrastructure body (a government office or a body that builds public digital services)','Services that citizens and departments use at scale','Field deployment (using it on the ground), API literacy, ministry stakeholders, Indic and voice work, open-weight options (models whose files you can download). The title may read analyst or architect, not product manager.']
    ]],
    ['p','The plan page rates the consulting door as the most realistic first one, and the AI-native door as the hardest. The same proof works for all three doors. Write down which door you will apply to first.'],
    ['p','How do you find out what the market wants? Build a <strong>role matrix</strong>. Think of a class timetable, with jobs across the top and skills down the side. Take ten real job descriptions and list them across the top. Then list every skill they mention down the side. Tick each skill that each job asks for.'],
    ['p','The skills with the most ticks are what the market wants most. Now look at those skills and mark each one for yourself: proven, partly proven or missing. That shows you where your proof is strong and where the gaps are.'],
    ['p','Then present yourself around what you can prove. Compare two lines. “I shipped an AI product to ten real users and improved its useful-result rate from 58% to 71%” is much stronger than “passionate about AI”.'],
    ['do','Prove it now',[
      ['p','Start your role matrix with three job descriptions. Mark your top three proven skills and your biggest gap.'],
      ['x','You should end up with a small matrix and one gap. Then test it: find a skill that a job description lists but that you think does not really matter for the role.']
    ]],
    ['q','I616'],

    ['h','Idea 2: Resume, LinkedIn and case studies'],
    ['p','Once you know the roles, the next job is your resume (the one-page list of your work). A good resume line says three things: what you did, the decision you made, and the result you measured. In short, <strong>action + decision + measurable result</strong>. Here is the same line written three ways.'],
    ['code','Weak    Worked on an AI support-ticket tool.\n\nBetter  Built an AI tool that groups support tickets into themes.\n\nStrong  Built and shipped a ticket-theming tool to 10 support teams;\n        chose a fixed workflow over an agent after testing both,\n        cutting failed runs from 15% to 5%.'],
    ['p','A resume line is short, so it can only hint at your thinking. For the full story you need a <strong>case study</strong>. That is a one or two page story of a project, like a short report. A good one follows this order:'],
    ['n',[
      '<strong>Problem</strong>, with the proof that it was real.',
      '<strong>Your decisions</strong>, and the options you said no to.',
      '<strong>Trade-offs</strong> you made knowingly (what you gave up to get something).',
      '<strong>Results</strong>, with numbers.',
      '<strong>What failed</strong>, and what you changed.',
      '<strong>What you would do next.</strong>'
    ]],
    ['p','Do not keep your case studies hidden on your laptop. Put your two best ones where a recruiter will find them, such as a personal site linked from your LinkedIn profile. Your LinkedIn headline should also name the role you want and one thing you have proven.'],
    ['do','Prove it now',[
      ['p','Rewrite three of your current resume bullets in the strong form.'],
      ['x','You should end up with three bullets, each with a decision and a number. Then test it: pick a bullet where you cannot find a number. What would you measure next time?']
    ]],

    ['h','Idea 3: Product sense, strategy, metrics and execution interviews'],
    ['p','Now for the interviews themselves. Most PM interview loops (the set of interview rounds) have four kinds of question. Each kind has a plan that keeps you on track, so you do not freeze or ramble. Think of a recipe card for each dish. The table gives an example question and a plan for each.'],
    ['tb',['Type','Example','Plan'],[
      ['Product sense','Design a voice-first grievance assistant for rural citizens who speak Bhojpuri. What do you do when it cannot understand the speech?','User and problem → why AI or not → approach → behaviour in failure → metrics (product, model, guardrail) → evals → cost and latency → risks → launch plan'],
      ['Strategy','Build or buy an Indic-language assistant for a ministry: a frontier API, an open-weight model or a government-built platform?','Goal → options → cost, privacy and lock-in (being stuck with one company) for each → what you would test first → recommendation and exit plan'],
      ['Metrics','Daily users fell 10%. Why?','Check the data → inside or outside the company? → which group of users? → which step? → guesses (hypotheses) → how to test them'],
      ['Execution','Two teams need the same engineer. What do you do?','Clarify impact → options → trade-offs → decision → how you tell people']
    ]],
    ['p','The nine parts in the product-sense row fit any AI product question, so learn them in order. Whichever question you get, say your plan out loud before you start. It lets the interviewer follow you, and steer you early if needed. At the end, make a clear choice. Interviewers want to see you commit to a decision and say why.'],
    ['do','Prove it now',[
      ['p','Answer the metrics example above out loud in ten minutes. Record yourself.'],
      ['x','You should end up with a recording. Listen back and check two things. Did you ask about data quality first? And did you end with a way to test your best guess (hypothesis)?']
    ]],
    ['q','I617'],

    ['h','Idea 4: AI system-design interviews'],
    ['p','The next kind of question is special to AI roles. AI PM loops often include a question such as “design a support assistant for our product”. The interviewer is not asking for code. They want to see how well you judge technical choices. Work through these steps in order:'],
    ['n',[
      '<strong>Users and task.</strong> Who uses it, for what, and what does success look like?',
      '<strong>Approach.</strong> Prompt only (just a note to the model), retrieval, a fixed workflow or an agent? Say why.',
      '<strong>Evaluation.</strong> How will you know it works before and after launch?',
      '<strong>Failure modes.</strong> What happens when it is wrong, slow or attacked?',
      '<strong>Cost and latency.</strong> A rough cost per task, and the waiting time users will accept.',
      '<strong>Rollout.</strong> Who gets it first, what you measure and when you would roll back (undo the release).'
    ]],
    ['p','Use numbers wherever you can, even rough ones. “About 2,000 tokens per question, so roughly half a cent” shows you understand the system. In fact, everything in Parts I–V is preparation for this interview.'],
    ['do','Prove it now',[
      ['p','Answer “design a support assistant for an online store” using the six steps. Take fifteen minutes.'],
      ['x','You should end up with six short sections. Check that evaluation and failure modes are not the thinnest ones. They usually are.']
    ]],

    ['h','Idea 5: Behavioural stories, take-homes, networking and negotiation'],
    ['p','The last idea covers four things that come up around the interviews. The first is behavioural questions. These ask about your past, such as “tell me about a time you disagreed with an engineer”.'],
    ['p','Prepare six to eight stories from real work. Tell each one as situation, task, action and result. Spend most of your time on the action, because that is the part about you.'],
    ['p','Next are <strong>take-home assignments</strong>, which test how you work alone, like homework. Stick to the time limit you are given, and state your assumptions at the top. End with what you would do with more time. Reviewers like a clear, honest answer more than a long one.'],
    ['p','Some loops have a live build round. You get a problem and about 45 minutes to show a working prototype (a rough first version), often using an AI coding tool. They watch how you work, not how it looks. Say your scope first. Build the smallest version that runs. Test one failure on purpose, such as a number that looks like an Aadhaar number but is not. Say what you would not ship yet.'],
    ['p','Then there is <strong>networking</strong> (meeting people who can help). It works best when you have something to show. Share a case study with a specific person and ask one specific question. That gets more replies than asking for a referral.'],
    ['p','Finally, <strong>negotiation</strong> (talking about your pay) starts with preparation. Find the salary range for the role and city. Wait for the company to make an offer first. Then ask once, politely, with a reason, such as a competing offer or the scope of the role.'],
    ['p','Let us turn all this into practice with one story of your own.'],
    ['try',{id:'b7-story',mins:10,min:120,rows:6,
      task:'Write one behavioural story about a decision you made in your capstone that turned out wrong. Use situation, task, action and result. Keep the focus on what you did.',
      ph:'Situation… Task… Action (what I decided and why)… Result and what I changed…',
      after:'A strong story: <strong>Situation:</strong> Theme Finder’s first version let an agent decide the steps for the weekly report. <strong>Task:</strong> I owned getting it reliable enough for ten design partners. <strong>Action:</strong> I expected the agent to handle unusual weeks better, so I kept it at first. When 3 of 20 test weeks failed, I built the same flow as a fixed workflow and ran both on the same cases. <strong>Result:</strong> the workflow failed once in 20 and was twice as fast, so I switched. I learned to measure both options before committing, and now I do that for every major design choice.'}],
    ['q','I618'],
    ['p','Now one story from before this course.'],
    ['try',{id:'b7-star-gov',mins:10,min:120,rows:6,
      task:'Write one story from a government project as situation, task, action and result. The action must say “I decided”, and the result must have a number. Take the decision from your entry “Decisions I owned before this course”.',
      ph:'Situation… Task… Action (I decided…)… Result with a number…',
      after:'A strong story. <strong>Situation:</strong> a citizen portal was due to open in twelve districts on a fixed date. <strong>Task:</strong> I owned the go-live and the vendor. <strong>Action:</strong> the payment step failed two test runs. I decided to hold three districts by two weeks, against the department head’s wish, and wrote down the failure rate that would make me hold again. <strong>Result:</strong> the retest passed at 99 successful payments in 100, and no applicant was charged twice. Next time I would set that threshold before the first test. Your numbers will differ.'}],

    ['h','What you have learned'],
    ['p','You now have a way to show your work to an employer. You can pick the roles that fit you. You can write resume lines and case studies that show your decisions. You can answer the four kinds of PM question with a plan. You can also work through an AI system-design question and tell honest stories about your own choices.'],
    ['p','That finishes the learning part of the course. The project itself lives in Chapter 34. If it is not finished yet, go back there.']
  ]
}

];

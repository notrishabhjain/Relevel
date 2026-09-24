/* Hinglish: b3 (coding-book rewrite and playbook tracks). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {

  '18':
    '18',
  '20':
    '20',
  '25':
    '25',
  'Product analytics and experiments':
    'Product analytics aur experiments',
  'Measure what users actually do, and learn which changes helped. You will write a tracking plan, build a funnel and a retention cohort, and design an experiment that can give a clear answer.':
    'Naapiye users asal mein kya karte hain, aur seekhiye kaunse changes ne madad ki. Aap ek tracking plan likhenge, ek funnel aur ek retention cohort banayenge, aur ek aisa experiment design karenge jo ek saaf jawab de sake.',
  'Pick a North Star metric and the input metrics that move it.':
    'Ek North Star metric aur usey move karne wale input metrics chuniye.',
  'Write an event taxonomy with clear names, properties and user identity.':
    'Saaf naam, properties aur user identity ke saath ek event taxonomy likhiye.',
  'Build a funnel, a retention cohort and segments, and read them correctly.':
    'Ek funnel, ek retention cohort aur segments banayiye, aur unhe sahi tarike se padhiye.',
  'Design an A/B test with a guardrail, a minimum detectable effect and a stopping rule.':
    'Ek guardrail, minimum detectable effect aur stopping rule ke saath ek A/B test design kijiye.',
  'Check your data before trusting it, and avoid claiming causes you have not shown.':
    'Trust karne se pehle apna data check kijiye, aur aise causes claim karne se bachiye jo aapne dikhaye nahi.',
  'A tracking plan, a funnel and cohort, and an experiment design':
    'Ek tracking plan, ek funnel aur cohort, aur ek experiment design',
  'Instrument your capstone, read what the data says, and design one test that could change a decision.':
    'Apna capstone instrument kijiye, dekhiye data kya kehta hai, aur ek aisa test design kijiye jo ek decision badal sake.',
  'Write an event taxonomy and tracking plan. Implement it in PostHog, Mixpanel or Google Analytics.':
    'Ek event taxonomy aur tracking plan likhiye. PostHog, Mixpanel ya Google Analytics mein implement kijiye.',
  'Build one activation funnel, one retention cohort and two segments, from real or seeded data.':
    'Real ya seeded data se ek activation funnel, ek retention cohort aur do segments banayiye.',
  'Design an experiment with a hypothesis, unit of randomisation, primary metric, guardrails, minimum detectable effect and stopping rule.':
    'Ek hypothesis, randomisation ki unit, primary metric, guardrails, minimum detectable effect aur stopping rule ke saath ek experiment design kijiye.',
  'Every event in the plan answers a named product question.':
    'Plan ka har event ek named product question ka jawab deta hai.',
  'The funnel and cohort come from logged events, not from a spreadsheet you typed by hand.':
    'Funnel aur cohort logged events se aate hain, haath se type ki spreadsheet se nahi.',
  'The experiment says how many users it needs, and what you will do if you cannot get that many.':
    'Experiment batata hai isey kitne users chahiye, aur agar itne na milein to aap kya karenge.',
  'Rubric: instrumentation 30%, metric logic 25%, analysis 25%, decision 20%.':
    'Rubric: instrumentation 30%, metric logic 25%, analysis 25%, decision 20%.',
  'A North Star metric':
    'Ek North Star metric',
  'Idea 1 turns it into something you can measure.':
    'Idea 1 isey ek measurable cheez mein badalti hai.',
  'OKRs and guardrail metrics':
    'OKRs aur guardrail metrics',
  'Experiments use the same guardrails.':
    'Experiments wahi guardrails use karte hain.',
  'Growth events':
    'Growth events',
  'The tracking plan logs them.':
    'Tracking plan unhe log karta hai.',
  'Idea 5 separates model quality from product analytics.':
    'Idea 5 model quality ko product analytics se alag karti hai.',
  'About fourteen hours. Create a free account with PostHog, Mixpanel or Google Analytics. If your capstone has no users yet, you will seed some data, and the chapter shows how.':
    'Lagbhag chaudah ghante. PostHog, Mixpanel ya Google Analytics ke saath ek free account banayiye. Agar aapke capstone ke abhi users nahi hain, aap kuchh data seed karenge, aur chapter dikhata hai kaise.',
  'Idea 1: North Star and input metrics':
    'Idea 1: North Star aur input metrics',
  'You met the North Star metric in A5. It is the one number that best captures the value users get. For Theme Finder, it is <strong>weekly teams that act on a theme</strong>, such as filing a bug or changing a help article.':
    'Aapne A5 mein North Star metric dekha. Yeh woh ek number hai jo users ko milti value ko sabse achhe se capture karta hai. Theme Finder ke liye, yeh hai <strong>weekly teams jo ek theme par action lete hain</strong>, jaise ek bug file karna ya ek help article badalna.',
  'You cannot move a North Star directly. You move it through <strong>input metrics</strong>, which the team can change this quarter:':
    'Aap North Star ko seedhe move nahi kar sakte. Aap isey <strong>input metrics</strong> se move karte hain, jinhe team is quarter badal sakti hai:',
  'Each input should be something a team owns, with a clear link to the North Star. If an input goes up and the North Star does not, your link is wrong, and that is useful to learn.':
    'Har input aisa hona chahiye jise ek team owns kare, North Star se ek saaf link ke saath. Agar ek input upar jaaye aur North Star nahi, to aapka link galat hai, aur yeh seekhne layak hai.',
  'Write your capstone’s North Star and three input metrics. Name which team or person could move each input.':
    'Apne capstone ka North Star aur teen input metrics likhiye. Naam lijiye kaunsi team ya insaan har input move kar sakta hai.',
  'One North Star, three inputs and an owner for each. Counterexample: an input that could rise while the North Star falls.':
    'Ek North Star, teen inputs aur har ek ke liye ek owner. Counterexample: ek input jo badh sakta hai jabki North Star gire.',
  'Idea 2: Event taxonomies, properties and identity':
    'Idea 2: Event taxonomies, properties aur identity',
  'An <strong>event taxonomy</strong> is the list of events you log, with a naming rule everyone follows. A common rule is <code>object_action</code>, in lower case and past tense.':
    'Ek <strong>event taxonomy</strong> un events ki list hai jo aap log karte hain, ek naming rule ke saath jo sab follow karte hain. Ek common rule hai <code>object_action</code>, lower case aur past tense mein.',
  'Event':
    'Event',
  'Properties':
    'Properties',
  'Question it answers':
    'Yeh kaunsa sawaal jawab deta hai',
  'account_created':
    'account_created',
  'plan, signup_source':
    'plan, signup_source',
  'Where do new teams come from?':
    'Naye teams kahan se aate hain?',
  'helpdesk_connected':
    'helpdesk_connected',
  'helpdesk, ticket_count':
    'helpdesk, ticket_count',
  'How many get through the hard step?':
    'Kitne log hard step se guzarte hain?',
  'report_viewed':
    'report_viewed',
  'week, themes_shown':
    'week, themes_shown',
  'Do leads come back each week?':
    'Kya leads har hafte wapas aate hain?',
  'theme_marked_useful':
    'theme_marked_useful',
  'theme_id, useful':
    'theme_id, useful',
  'Is the grouping any good?':
    'Kya grouping achhi hai?',
  'theme_shared':
    'theme_shared',
  'channel':
    'channel',
  'Does the growth loop run?':
    'Kya growth loop chalta hai?',
  '<strong>Properties</strong> add detail to an event, so you can split results later. Keep them to what you need, and never put ticket text or personal data in them.':
    '<strong>Properties</strong> ek event mein detail jodti hain, taaki aap baad mein results split kar sakein. Inhe utna hi rakhiye jitna zaroori hai, aur kabhi ticket text ya personal data inme mat daaliye.',
  '<strong>Identity</strong> links events to a person. A visitor starts with an anonymous ID. When they sign up, you link it to a user ID, so their earlier visits join their history. In B2B products, also attach a company or account ID. Your buyer cares about teams, not single users.':
    '<strong>Identity</strong> events ko ek insaan se link karti hai. Ek visitor ek anonymous ID se shuru hota hai. Jab woh sign up karte hain, aap usey ek user ID se link karte hain, taaki unki pehle ki visits unki history mein jud jaayein. B2B products mein, ek company ya account ID bhi jodiye. Aapka buyer teams ki fikar karta hai, akele users ki nahi.',
  'A <strong>tracking plan</strong> is the shared document that lists every event, its properties, when it fires and who owns it. Engineers implement from it, and analysts trust it.':
    'Ek <strong>tracking plan</strong> woh shared document hai jo har event, uski properties, yeh kab fire hota hai aur kaun iska owner hai, list karta hai. Engineers isse implement karte hain, aur analysts isper trust karte hain.',
  'Write five events for your capstone using <code>object_action</code> names. Add the question each one answers.':
    'Apne capstone ke liye <code>object_action</code> naam use karte hue paanch events likhiye. Har ek jo sawaal jawab deta hai woh jodiye.',
  'Five events with questions. Counterexample: an event you were tempted to add that answers no question.':
    'Sawaalon ke saath paanch events. Counterexample: ek event jise aap jodne ke liye tempted the jo koi sawaal jawab nahi deta.',
  'Idea 3: Funnels, cohorts, segments and retention':
    'Idea 3: Funnels, cohorts, segments aur retention',
  'Three views answer most product questions.':
    'Teen views zyadatar product questions ka jawab dete hain.',
  '<strong>Funnel.</strong> The share of users who complete each step in order. It shows where people drop off.':
    '<strong>Funnel.</strong> Un users ka share jo order mein har step poora karte hain. Yeh dikhata hai log kahan drop off karte hain.',
  '<strong>Cohort.</strong> A group of users who started in the same period. A retention table follows each cohort over time.':
    '<strong>Cohort.</strong> Ek group of users jo wahi period mein shuru hue. Ek retention table har cohort ko waqt ke saath follow karti hai.',
  '<strong>Segment.</strong> A slice of users that share a property, such as plan or helpdesk. Comparing segments shows who the product works for.':
    '<strong>Segment.</strong> Users ka ek hissa jo ek property share karte hain, jaise plan ya helpdesk. Segments compare karna dikhata hai product kiske liye kaam karta hai.',
  'Here is a weekly retention table. Each row is a cohort. Each cell is the share still viewing reports that many weeks later.':
    'Yahan ek weekly retention table hai. Har row ek cohort hai. Har cell woh share hai jo utne hafton baad bhi reports dekh raha hai.',
  'Cohort':
    'Cohort',
  'Teams':
    'Teams',
  'Week 1':
    'Week 1',
  'Week 2':
    'Week 2',
  'Week 4':
    'Week 4',
  'Week 8':
    'Week 8',
  '1 Sep':
    '1 Sep',
  '70%':
    '70%',
  '55%':
    '55%',
  '45%':
    '45%',
  '40%':
    '40%',
  '8 Sep':
    '8 Sep',
  '72%':
    '72%',
  '60%':
    '60%',
  '52%':
    '52%',
  '15 Sep':
    '15 Sep',
  '78%':
    '78%',
  '66%':
    '66%',
  'Read it two ways. Across a row, the curve flattens around 40%, which suggests a lasting use. Down a column, newer cohorts retain better, which suggests recent changes helped. Both readings need enough users before you trust them. With 20 teams, one team is five percentage points.':
    'Isey do tarike se padhiye. Ek row ke across, curve lagbhag 40% par flatten hota hai, jo lasting use suggest karta hai. Ek column ke neeche, newer cohorts behtar retain karte hain, jo suggest karta hai recent changes ne madad ki. Dono readings ko trust karne se pehle kaafi users chahiye. 20 teams ke saath, ek team paanch percentage points hai.',
  'Sketch the retention table you expect for your capstone’s first three cohorts. Then say which segment you expect to retain best, and why.':
    'Apne capstone ke pehle teen cohorts ke liye expected retention table sketch kijiye. Phir bataiye aap kaunsa segment sabse achha retain karne ki ummeed karte hain, aur kyun.',
  'A small table and one segment prediction. Write it down now, so you can compare it with real data later.':
    'Ek chhoti table aur ek segment prediction. Isey abhi likh dijiye, taaki aap baad mein real data se compare kar sakein.',
  'Idea 4: A/B tests, guardrails and sample size':
    'Idea 4: A/B tests, guardrails aur sample size',
  'An <strong>A/B test</strong> shows a change to a random half of users and compares them with the other half. Randomising is what lets you say the change caused the difference. Write the design down before you start:':
    'Ek <strong>A/B test</strong> users ke ek random half ko ek change dikhata hai aur unhe doosre half se compare karta hai. Randomising hi wahi cheez hai jo aapko yeh kehne deti hai ki change ne farq kiya. Shuru karne se pehle design likh dijiye:',
  'The <strong>minimum detectable effect</strong> (MDE) is the smallest change worth detecting. It sets how many users you need. A rough rule for a yes/no metric, at the usual settings, is:':
    '<strong>Minimum detectable effect</strong> (MDE) sabse chhota change hai jo detect karne layak hai. Yeh decide karta hai aapko kitne users chahiye. Ek yes/no metric ke liye ek rough rule, usual settings par, yeh hai:',
  'An early B2B product may have forty accounts, not two thousand. It cannot run this test. Say so, and use other evidence instead: watch sessions, compare before and after with care, and look for large effects. Running an underpowered test and reporting its result is worse than not testing.':
    'Ek early B2B product ke paas do hazaar nahi, chaalis accounts ho sakte hain. Yeh test nahi chala sakta. Aisa bataiye, aur iski jagah doosra evidence use kijiye: sessions dekhiye, dhyan se before aur after compare kijiye, aur bade effects dhoondhiye. Ek underpowered test chalana aur uska result report karna, test na karne se bhi bura hai.',
  'Write the full experiment design for one change to your capstone, using the seven lines above. Work out the sample size.':
    'Upar ki saat lines use karke apne capstone mein ek change ke liye poora experiment design likhiye. Sample size nikaaliye.',
  'A complete design and a number. If the number is bigger than your user base, write what you will do instead.':
    'Ek poora design aur ek number. Agar number aapke user base se bada hai, likhiye aap iski jagah kya karenge.',
  'Your activation rate is 30%. You want to detect a rise to 40%. Use the rule of thumb to estimate the users needed per group. Then say whether you would run the test with 150 new accounts a month.':
    'Aapka activation rate 30% hai. Aap 40% tak ka rise detect karna chahte hain. Rule of thumb use karke per group chahiye users estimate kijiye. Phir bataiye kya aap 150 naye accounts per month ke saath test chalayenge.',
  '16 × … × … ÷ … = … per group, so…':
    '16 × … × … ÷ … = … per group, isliye…',
  'Here p = 0.30 and the MDE is 0.10. The sum is 16 × 0.30 × 0.70 ÷ 0.01 = 336 accounts per group, or 672 in total. At 150 new accounts a month, that takes about four and a half months. That is probably too slow for a product that is changing every week. Two options: aim only for a larger effect, which needs fewer users, or decide from session observations and a careful before-and-after comparison, stating that it is weaker evidence.':
    'Yahan p = 0.30 hai aur MDE 0.10 hai. Sum hai 16 × 0.30 × 0.70 ÷ 0.01 = 336 accounts per group, ya total 672. 150 naye accounts per month par, isme lagbhag saade chaar mahine lagenge. Yeh shayad ek aise product ke liye bahut slow hai jo har hafte badal raha hai. Do options: sirf ek bade effect ke liye aim kijiye, jisme kam users chahiye, ya session observations aur ek careful before-and-after comparison se decide kijiye, yeh bata kar ki yeh kamzor evidence hai.',
  'Idea 5: Data quality, QA and causal humility':
    'Idea 5: Data quality, QA aur causal humility',
  'Bad data looks exactly like good data on a chart. Check your instrumentation before you trust a single number:':
    'Bura data ek chart par bilkul achhe data jaisa dikhta hai. Ek single number par trust karne se pehle apna instrumentation check kijiye:',
  'Trigger each event yourself and confirm it arrives once, with the right properties.':
    'Har event khud trigger kijiye aur confirm kijiye yeh ek baar, sahi properties ke saath aata hai.',
  'Compare an event count with your database. For example, accounts created against rows in the accounts table.':
    'Ek event count ko apne database se compare kijiye. Jaise, accounts table ki rows ke against banaye gaye accounts.',
  'Filter out your own team’s traffic and test accounts.':
    'Apni team ka apna traffic aur test accounts filter kar dijiye.',
  'Check that events still fire after each release.':
    'Check kijiye ki har release ke baad events abhi bhi fire hote hain.',
  'Keep product analytics separate from model telemetry. Traces, latency and eval scores tell you how the model behaved (Chapter 30). Product events tell you what people did. Link them with a shared request ID so you can move between the two.':
    'Product analytics ko model telemetry se alag rakhiye. Traces, latency aur eval scores batate hain model ne kaisa behave kiya (Chapter 30). Product events batate hain log ne kya kiya. Inhe ek shared request ID se link kijiye taaki aap dono ke beech move kar sakein.',
  'Finally, be careful about causes. If users who share reports retain better, sharing might cause retention. It might also be that engaged users do both. Only a randomised test shows cause. Everything else is a pattern worth testing.':
    'Aakhir mein, causes ke baare mein careful rahiye. Agar reports share karne wale users behtar retain karte hain, sharing shayad retention cause kare. Yeh bhi ho sakta hai ki engaged users dono karte hain. Sirf ek randomised test cause dikhata hai. Baaki sab ek pattern hai jo test karne layak hai.',
  'Write “users who do X also tend to do Y” unless a controlled test shows that X causes Y.':
    '"Users jo X karte hain, Y bhi karte hain" mat likhiye jab tak ek controlled test na dikhaye ki X, Y cause karta hai.',
  'Run the four QA checks on one event in your capstone, and write down what you found.':
    'Apne capstone mein ek event par chaaron QA checks chalayiye, aur likhiye aapko kya mila.',
  'Four results. Counterexample: a chart in your capstone that would look fine even if an event were firing twice.':
    'Chaar results. Counterexample: aapke capstone mein ek chart jo theek dikhega chahe ek event do baar fire ho raha ho.'

});

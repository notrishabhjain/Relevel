/* Hinglish for Product analytics and experiments (chapter:b3), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Real people now use your product. What do they actually do? And which changes helped? You will write a tracking plan (a list of what to record). You will build a funnel (the steps people walk through) and a retention cohort (a group you follow week after week). Then you will design an experiment (a fair test) that gives a clear answer.':
    'Ab asli log aapka product use kar rahe hain. Woh asal mein kya karte hain? Aur kaun se changes se fayda hua? Aap ek tracking plan likhenge (kya record karna hai, uski list). Aap ek funnel banayenge (woh steps jin se log guzarte hain) aur ek retention cohort (log jinhe aap hafton tak follow karte hain). Phir ek experiment design karenge (ek nyayi test) jo saaf jawaab de.',
  'Pick a North Star metric (the one number that shows real value), and the input metrics (smaller numbers) that move it.':
    'Ek North Star metric chun paana (woh ek number jo asli fayda dikhata hai), aur woh input metrics (chhote numbers) jo use aage badhate hain.',
  'Write an event taxonomy (a neat list of event names) with clear names, properties and user identity.':
    'Saaf naam, properties aur user identity ke saath ek event taxonomy (event ke naamon ki saaf list) likh paana.',
  'Build a funnel, a retention cohort and segments (slices of users), and read them correctly.':
    'Funnel, retention cohort aur segments (users ke tukde) banana, aur unhe sahi tareeke se padh paana.',
  'Design an A/B test (a fair test with two groups) with a guardrail (a number that must not get worse), a minimum detectable effect (the smallest change worth spotting) and a stopping rule (when to stop).':
    'Guardrail (woh number jo bigadna nahi chahiye), minimum detectable effect (sabse chhota badlaav jo pakadna zaroori hai) aur stopping rule (kab rukna hai) ke saath ek A/B test (do groups wala nyayi test) design kar paana.',
  'Check your data before you trust it, and do not say one thing caused another unless you have shown it.':
    'Data par bharosa karne se pehle use check kar paana, aur jab tak saabit na kiya ho, yeh na kehna ki ek cheez ne doosri ko kiya.',
  'Plan the measurements, and design one experiment':
    'Measurements plan kijiye, aur ek experiment design kijiye',
  'Once real people use the tool, you need to know what they do. Think of a shopkeeper who watches which shelf people visit. In this chapter you learned to pick the one number that matters most, to write clear event names, to read a funnel and a retention table, and to design a test with a guardrail and a stopping rule. Now you will do all of that for Bharat Privacy Guard.':
    'Jab asli log tool use karte hain, toh aapko jaanna hota hai ki woh kya karte hain. Sochiye, ek dukaandaar dekhta hai ki log kaun si shelf par jaate hain. Is chapter mein aapne seekha: sabse zaroori ek number chunna, saaf event naam likhna, funnel aur retention table padhna, aur guardrail aur stopping rule wala test design karna. Ab yeh sab aap Bharat Privacy Guard ke liye karenge.',
  'Use a real analytics tool (a tool that counts what users do) such as PostHog, Mixpanel or Google Analytics for the tracking code and the charts. Then write the experiment design in the notes box below.':
    'Tracking code aur charts ke liye ek asli analytics tool (jo ginta hai ki users kya karte hain) use kijiye, jaise PostHog, Mixpanel ya Google Analytics. Phir experiment design neeche notes box mein likhiye.',
  'Choose the one number that matters most for the kit, for example “messages cleaned correctly per week by active developers”. Then choose three input numbers that move it.':
    'Kit ke liye sabse zaroori ek number chuniye, jaise “active developers ne har hafte kitne messages sahi se saaf kiye”. Phir teen input numbers chuniye jo use aage badhate hain.',
  'Write an event list (the list of things you record). Name each event as object_action, for example text_checked, detail_found, detail_masked and review_requested. For each event, write its properties (extra details it carries, such as the kind of writing and the kind of ID). Also write the question it answers. Never record the personal details themselves.':
    'Ek event list likhiye (jin cheezon ko aap record karte hain). Har event ka naam object_action rakhiye, jaise text_checked, detail_found, detail_masked aur review_requested. Har event ke liye uski properties likhiye (extra jaankari, jaise likhai ka type aur ID ka type). Yeh bhi likhiye ki woh kaun sa sawaal hal karta hai. Personal details ko kabhi record mat kijiye.',
  'Send the events to an analytics tool with a few lines of tracking code. If you have no users yet, use made-up data and say so.':
    'Tracking code ki kuch lines se events ko ek analytics tool mein bhejiye. Agar abhi users nahi hain, toh banaya hua data use kijiye aur yeh saaf likhiye.',
  'Build one funnel (visit, first check, first success), one weekly retention table and two segments. For example, compare English users with Hinglish users.':
    'Ek funnel banaiye (visit, pehla check, pehli safalta), ek weekly retention table aur do segments. Jaise, English users ki Hinglish users se tulna kijiye.',
  'Design one experiment, for example: “showing a preview of what will be hidden makes more developers finish setup”. Write the hypothesis (your guess to test). Write who is randomly assigned, the main number, a guardrail, the smallest change you care about, how many users you need, and when you will stop.':
    'Ek experiment design kijiye, jaise: “kya chhupne wali cheez ka preview dikhane se zyada developers setup poora karte hain”. Hypothesis likhiye (aapka guess jise test karna hai). Yeh bhi likhiye: kise randomly chuna jaayega, main number, ek guardrail, sabse chhota badlaav jo aapko chahiye, kitne users chahiye, aur aap kab rukenge.',
  'One main number, with three input numbers.':
    'Ek main number, teen input numbers ke saath.',
  'An event list in which every event answers a named question, and none records personal details.':
    'Ek event list jisme har event ek likhe hue sawaal ka jawaab deta hai, aur koi bhi personal details record nahi karta.',
  'A funnel, a retention table and two segments, built from events you logged.':
    'Ek funnel, ek retention table aur do segments, jo aapke log kiye hue events se bane hon.',
  'An experiment design that says how many users it needs, and what you will do if you cannot get that many.':
    'Ek experiment design jo batata hai ki kitne users chahiye, aur agar utne na milen toh aap kya karenge.',
  'A North Star metric (the one number that shows real value)':
    'Ek North Star metric (woh ek number jo asli fayda dikhata hai)',
  'Idea 1 turns it into something you can measure.':
    'Idea 1 use aisi cheez bana deta hai jise aap naap sakein.',
  'OKRs and guardrail metrics (goals, and numbers that must not get worse)':
    'OKRs aur guardrail metrics (lakshya, aur woh numbers jo bigadne nahi chahiye)',
  'Experiments use the same guardrails.':
    'Experiments mein wahi guardrails kaam aate hain.',
  'Growth events (the steps where users join and spread the word)':
    'Growth events (woh steps jahan users judte hain aur baat phailate hain)',
  'The tracking plan records them.':
    'Tracking plan unhe record karta hai.',
  'Evaluation engineering (testing the model against an answer key)':
    'Evaluation engineering (model ko answer key se test karna)',
  'Idea 5 keeps model quality and product analytics apart.':
    'Idea 5 model ki quality aur product analytics ko alag rakhta hai.',
  'In full, this chapter takes about fourteen hours. Make a free account with PostHog, Mixpanel or Google Analytics. If your capstone has no users yet, you will add some made-up data, and the chapter shows how.':
    'Poora karne mein is chapter ko lagbhag chaudah ghante lagte hain. PostHog, Mixpanel ya Google Analytics par ek free account banaiye. Agar aapke capstone mein abhi users nahi hain, toh aap kuch banaya hua data daalenge, aur chapter dikhata hai kaise.',
  'In the last chapter you saw how people find a product and start using it. Now the next question. Real people are using it. How do you know it works? Opinions will not tell you. What users actually do will. It is like a shopkeeper who counts who buys, not who says nice things.':
    'Pichhle chapter mein aapne dekha ki log product kaise dhoondhte hain aur use shuru kaise karte hain. Ab agla sawaal. Asli log use kar rahe hain. Kaise pata chale ki woh kaam kar raha hai? Raay se pata nahi chalta. Users jo karte hain, usse chalta hai. Jaise dukaandaar ginta hai ki kaun kharidta hai, na ki kaun achhi baat bolta hai.',
  'This chapter gives you five ideas. You will pick the one number that matters. You will decide which events to record. You will read the three views that answer most questions. You will run a fair test. And you will check that your data can be trusted.':
    'Is chapter mein paanch ideas hain. Aap woh ek number chunenge jo sabse zaroori hai. Aap tay karenge ki kaun se events record karne hain. Aap woh teen views padhenge jo zyaadatar sawaalon ka jawaab dete hain. Aap ek nyayi test chalayenge. Aur aap check karenge ki aapke data par bharosa kiya ja sakta hai.',
  'Along the way you will use Theme Finder. It is an example product that turns support tickets (messages from unhappy customers) into themes a team can act on.':
    'Raaste mein aap Theme Finder use karenge. Yeh ek example product hai jo support tickets (pareshaan customers ke messages) ko themes mein badalta hai, jin par team kaam kar sakti hai.',
  'Idea 1: North Star and input metrics':
    'Idea 1: North Star aur input metrics',
  'Suppose you could watch only one number to see if users get real value. Which would you pick? Think of a tea stall owner who counts only the cups sold. That number is the North Star metric, the star sailors steer by. You met it in A5.':
    'Maan lijiye aap sirf ek number dekh sakte hain jisse pata chale ki users ko asli fayda mil raha hai. Aap kaun sa chunenge? Sochiye, chai wala sirf bike hue cups ginta hai. Yeh number North Star metric hai, woh taara jisse naavik raasta tay karte hain. Aap ise A5 mein mil chuke hain.',
  'For Theme Finder, it is <strong>weekly teams that act on a theme</strong>. Acting on a theme means something like filing a bug or changing a help article.':
    'Theme Finder ke liye yeh hai <strong>weekly teams that act on a theme</strong>. Theme par kaam karne ka matlab hai, jaise bug darj karna ya help article badalna.',
  'Here is the catch. You cannot push a North Star directly. You push it through smaller numbers that a team can change this quarter. These are called <strong>input metrics</strong>. They are like the pedals that turn the wheel. Here are four for Theme Finder:':
    'Yahan ek pench hai. Aap North Star ko seedha dhakel nahi sakte. Aap use chhote numbers se dhakelte hain, jo ek team is quarter badal sakti hai. Inhe <strong>input metrics</strong> kehte hain. Yeh un pedals jaise hain jo pahiya ghumate hain. Theme Finder ke liye chaar yeh rahe:',
  'Each input should belong to one team, with a clear link to the North Star. Now say an input goes up, but the North Star does not. Then your link is wrong. That is good news, because now you know which guess to fix.':
    'Har input kisi ek team ka hona chahiye, aur North Star se uska saaf rishta hona chahiye. Ab maan lijiye ek input badhta hai, par North Star nahi badhta. Matlab aapka rishta galat tha. Yeh achhi baat hai, kyunki ab aap jaante hain ki kaun sa andaaza theek karna hai.',
  'Write your capstone’s North Star and three input metrics. Then name the team or person who could move each input.':
    'Apne capstone ka North Star aur teen input metrics likhiye. Phir us team ya vyakti ka naam likhiye jo har input ko aage badha sakta hai.',
  'One North Star, three inputs and an owner for each. Plus a counterexample (a case that proves you wrong): an input that could rise while the North Star falls.':
    'Ek North Star, teen inputs aur har ek ka ek malik. Saath mein ek counterexample (woh udaaharan jo aapko galat saabit kare): ek input jo badh sakta hai jab North Star gir raha ho.',
  'Idea 2: Event taxonomies, properties and identity':
    'Idea 2: Event taxonomies, properties aur identity',
  'To measure anything, you first have to record it. Each time a user does something, like signing up or opening a report, the product can write a small note. Think of a shop’s tally book. That note is called an <strong>event</strong>.':
    'Kuch bhi naapne ke liye, pehle use record karna padta hai. Jab bhi user kuch karta hai, jaise sign up ya report kholna, product ek chhota note likh sakta hai. Sochiye dukaan ki hisaab ki copy. Us note ko <strong>event</strong> kehte hain.',
  'If everyone names events in their own way, the data becomes a mess. So teams agree on one naming rule. The list of events plus that rule is called an <strong>event taxonomy</strong>. A common rule is <code>object_action</code>, in lower case and past tense.':
    'Agar sab apne tareeke se events ke naam rakhen, toh data uljha hua ho jaata hai. Isliye teams ek naam rakhne ka niyam maanti hain. Events ki list aur woh niyam milkar <strong>event taxonomy</strong> kehlate hain. Ek aam niyam hai <code>object_action</code>, chhote akshar aur beeta hua kaal.',
  'Here are five events for Theme Finder. Look at the last column. Every event is there to answer one question.':
    'Yeh Theme Finder ke paanch events hain. Aakhri column dekhiye. Har event ek sawaal ka jawaab dene ke liye hai.',
  'Properties (extra details)':
    'Properties (extra jaankari)',
  'Question it answers':
    'Woh sawaal jiska yeh jawaab deta hai',
  'account_created':
    'account_created',
  'plan, signup_source':
    'plan, signup_source',
  'Where do new teams come from?':
    'Nayi teams kahan se aati hain?',
  'helpdesk_connected':
    'helpdesk_connected',
  'helpdesk, ticket_count':
    'helpdesk, ticket_count',
  'How many teams get through the hard step?':
    'Kitni teams mushkil step paar karti hain?',
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
  'Does the growth loop run?':
    'Kya growth loop chal raha hai?',
  'An event alone only says that something happened. <strong>Properties</strong> add detail, like labels on a parcel, so you can split the results later. Keep only what you need. And never put ticket text or personal data in them.':
    'Akela event bas yeh batata hai ki kuch hua. <strong>Properties</strong> usme jaankari jodti hain, parcel par lage label jaisi, taaki aap baad mein results ko baant sakein. Sirf wahi rakhiye jo chahiye. Aur unme ticket text ya personal data kabhi mat daaliye.',
  'You also need to know who did it. <strong>Identity</strong> ties events to one person, like a name tag. A visitor starts with an anonymous ID. When they sign up, you link it to a user ID, so their earlier visits join their history. In B2B products (products sold to companies), also add a company or account ID. Your buyer cares about teams, not single users.':
    'Aapko yeh bhi jaanna hai ki kisne kiya. <strong>Identity</strong> events ko ek vyakti se jodti hai, naam ke tag jaisi. Visitor anonymous ID se shuru hota hai. Jab woh sign up karta hai, aap use user ID se jodte hain, taaki uski pehli visits uski history mein aa jaayen. B2B products mein (jo companies ko bechte hain) company ya account ID bhi jodiye. Aapka buyer teams ki parwah karta hai, akele users ki nahi.',
  'Last, write all this down in one place. A <strong>tracking plan</strong> is the shared document that lists every event, its properties, when it fires (is sent) and who owns it. Engineers build from it. Analysts trust the data because of it. It is like a recipe card everyone follows.':
    'Aakhir mein, yeh sab ek jagah likh dijiye. <strong>Tracking plan</strong> woh saajha document hai jisme har event, uski properties, woh kab fire hota hai (bheja jaata hai) aur uska malik kaun hai, sab likha hota hai. Engineers use dekhkar banate hain. Analysts data par bharosa isiliye karte hain. Yeh sabke follow karne wale recipe card jaisa hai.',
  'Write five events for your capstone with <code>object_action</code> names. Add the question each one answers.':
    'Apne capstone ke paanch events <code>object_action</code> naamon se likhiye. Har ek ka sawaal bhi jodiye.',
  'Five events with questions. Plus a counterexample: one event you wanted to add that answers no question.':
    'Sawaalon ke saath paanch events. Saath mein ek counterexample: ek event jo aap jodna chahte the par jo kisi sawaal ka jawaab nahi deta.',
  'Idea 3: Funnels, cohorts, segments and retention':
    'Idea 3: Funnels, cohorts, segments aur retention',
  'Once events start arriving, three views answer most product questions. Think of three windows into one shop. Let us take them one by one.':
    'Jab events aane lagte hain, toh teen views zyaadatar product sawaalon ka jawaab dete hain. Sochiye ek dukaan ki teen khidkiyan. Chaliye ek ek karke dekhein.',
  'The first is the <strong>funnel</strong>. Picture a funnel from the kitchen: many drops go in, few come out. It shows the share of users who finish each step in order, so you can see where people drop off.':
    'Pehla hai <strong>funnel</strong>. Rasoi ki funnel sochiye: bahut boondein andar jaati hain, kam bahar aati hain. Yeh dikhata hai ki kitne users har step poora karte hain, kram mein, taaki aap dekh sakein ki log kahan chhod dete hain.',
  'The second is the <strong>cohort</strong>, a group of users who started in the same period, like one school batch. A retention table follows each cohort over time. It shows how many keep coming back.':
    'Doosra hai <strong>cohort</strong>, users ka ek group jo ek hi samay mein shuru hua, jaise school ka ek batch. Retention table har cohort ko samay ke saath follow karti hai. Yeh dikhati hai ki kitne wapas aate rehte hain.',
  'The third is the <strong>segment</strong>, a slice of users who share a property, such as plan or helpdesk. Compare segments to see who the product works for.':
    'Teesra hai <strong>segment</strong>, users ka ek tukda jinme koi property ek jaisi hai, jaise plan ya helpdesk. Segments ki tulna kijiye, taaki dikhe ki product kiske liye kaam karta hai.',
  'Here is a weekly retention table. Each row is a cohort. Each cell is the share still viewing reports that many weeks later.':
    'Yeh ek weekly retention table hai. Har row ek cohort hai. Har cell batata hai ki utne hafton baad kitne log abhi bhi reports dekh rahe hain.',
  'Teams (how many)':
    'Teams (kitni)',
  'Week 2':
    'Week 2',
  'Week 4':
    'Week 4',
  'Week 8':
    'Week 8',
  '1 Sep':
    '1 Sep',
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
  'You can read it two ways. Look across a row: the line flattens near 40%, so people keep using it. Look down a column: newer cohorts stay better, so recent changes probably helped.':
    'Ise do tareeke se padh sakte hain. Row mein dekhiye: line 40% ke aas-paas sapaat ho jaati hai, matlab log use karte rehte hain. Column mein neeche dekhiye: nayi cohorts zyada tikti hain, matlab haal ke changes shayad kaam aaye.',
  'Both readings need enough users before you trust them. With 20 teams, one team is five percentage points. So one team leaving can move the number a lot.':
    'Dono tareeke tabhi bharose ke hain jab kaafi users hon. 20 teams mein, ek team paanch percentage points hai. Toh ek team ke jaane se number bahut hil sakta hai.',
  'Sketch the retention table you expect for your capstone’s first three cohorts. Then say which segment you expect to retain best, and why.':
    'Apne capstone ki pehli teen cohorts ke liye jo retention table aap expect karte hain, uska khaaka banaiye. Phir likhiye ki kaun sa segment sabse zyada tikega, aur kyun.',
  'A small table and one segment prediction. Write it down now, so you can compare it with real data later.':
    'Ek chhoti table aur ek segment ki bhavishyavani. Abhi likh lijiye, taaki baad mein asli data se mila sakein.',
  'Idea 4: A/B tests, guardrails and sample size':
    'Idea 4: A/B tests, guardrails aur sample size',
  'Sometimes you want to know if one change helped. Comparing before and after is risky, because other things change too. The fair way is an <strong>A/B test</strong>. Think of two identical tea stalls, one with the change and one without. You show the change to a random half of users and compare them with the other half.':
    'Kabhi aap jaanna chahte hain ki ek change se fayda hua ya nahi. Pehle aur baad ki tulna jokhim bhari hai, kyunki aur cheezein bhi badalti hain. Nyayi tareeka hai <strong>A/B test</strong>. Sochiye do ek jaise chai ke thele, ek mein change aur ek mein nahi. Aap change ko users ke random aadhe hisse ko dikhate hain aur doosre aadhe se tulna karte hain.',
  'Picking at random is what lets you say the change caused the difference.':
    'Random chunna hi aapko yeh kehne deta hai ki change ne farak kiya.',
  'Write the design down before you start. A design also needs a guardrail. That is a number that must not get worse while you chase the main one, like the railing on a bridge. Here is a design for Theme Finder:':
    'Shuru karne se pehle design likh lijiye. Design mein ek guardrail bhi chahiye. Yeh woh number hai jo bigadna nahi chahiye jab aap main number ke peeche bhaag rahe hon, pul ki railing jaisa. Yeh Theme Finder ka ek design hai:',
  'Notice the stop rule. “No early peeking” means you do not check halfway and stop the moment it looks good. It is like not opening the oven door every minute. Wait until each group has its planned sample (the number of users you planned for).':
    'Stop rule dekhiye. “No early peeking” ka matlab hai ki aap beech mein check karke tabhi nahi rukte jab result achha dikhe. Jaise har minute oven ka darwaza na kholna. Tab tak rukiye jab tak har group ke paas uska tay kiya hua sample (users ki tay ginti) na ho jaaye.',
  'How many users is that? It depends on the <strong>minimum detectable effect</strong> (MDE), the smallest change worth spotting. The smaller the change you care about, the more users you need. A rough rule for a yes/no metric, at the usual settings, is:':
    'Yeh kitne users hain? Yeh <strong>minimum detectable effect</strong> (MDE) par nirbhar hai, yaani sabse chhota badlaav jo pakadna zaroori hai. Jitna chhota badlaav aap chahte hain, utne zyada users chahiye. Haan/na wale metric ke liye, aam settings par, ek mota niyam yeh hai:',
  'An early B2B product may have forty accounts, not two thousand. It cannot run this test. Say so, and use other evidence instead: watch sessions, compare before and after with care, and look for large effects. Running an underpowered test (one with too few users to give a clear answer) and reporting its result is worse than not testing.':
    'Ek shuruaati B2B product ke paas chalis accounts ho sakte hain, do hazaar nahi. Woh yeh test nahi chala sakta. Yeh saaf kahiye, aur doosre saboot use kijiye: sessions dekhiye, pehle aur baad ki tulna dhyaan se kijiye, aur bade asar dhoondhiye. Underpowered test (jisme itne kam users hon ki saaf jawaab na mile) chalakar uska result batana, test na karne se bhi bura hai.',
  'Write the full experiment design for one change to your capstone, using the seven lines above. Then work out the sample size.':
    'Apne capstone ke ek change ke liye poora experiment design likhiye, upar ki saat lines use karke. Phir sample size nikaaliye.',
  'A complete design and a number. If the number is bigger than your user base, write what you will do instead.':
    'Ek poora design aur ek number. Agar number aapke users se bada hai, toh likhiye ki aap uski jagah kya karenge.',
  'Your activation rate (the share of new users who get started) is 30%. You want to spot a rise to 40%. Use the rule of thumb to estimate the users needed per group. Then say whether you would run the test with 150 new accounts a month.':
    'Aapka activation rate (naye users ka woh hissa jo shuru kar leta hai) 30% hai. Aap 40% tak badhna pakadna chahte hain. Mote niyam se har group ke liye zaroori users ka andaaza lagaiye. Phir batayiye ki kya aap mahine ke 150 naye accounts ke saath yeh test chalayenge.',
  '16 × … × … ÷ … = … per group, so…':
    '16 × … × … ÷ … = … har group mein, toh…',
  'Here p = 0.30 and the MDE is 0.10. The sum is 16 × 0.30 × 0.70 ÷ 0.01 = 336 accounts per group, or 672 in total. At 150 new accounts a month, that takes about four and a half months. That is probably too slow for a product that changes every week. You have two options. Aim only for a larger effect, which needs fewer users. Or decide from watching sessions and a careful before-and-after comparison, and say clearly that this is weaker evidence.':
    'Yahan p = 0.30 hai aur MDE 0.10 hai. Hisaab hai 16 × 0.30 × 0.70 ÷ 0.01 = har group mein 336 accounts, yaani kul 672. Mahine ke 150 naye accounts par, ismein lagbhag saadhe chaar mahine lagte hain. Jis product mein har hafte badlaav hota hai, uske liye yeh shayad bahut dheema hai. Aapke paas do raaste hain. Sirf bade asar ko pakadne ka lakshya rakhiye, jisme kam users chahiye. Ya sessions dekhkar aur dhyaan se pehle-baad ki tulna karke faisla kijiye, aur saaf kahiye ki yeh kamzor saboot hai.',
  'Idea 5: Data quality, QA and causal humility':
    'Idea 5: Data quality, QA aur causal humility',
  'Here is an uncomfortable fact. Bad data looks exactly like good data on a chart. So check your tracking before you trust a single number:':
    'Ek asahaj sachchai yeh hai. Kharab data chart par bilkul achhe data jaisa dikhta hai. Isliye ek bhi number par bharosa karne se pehle apna tracking check kijiye:',
  'Trigger each event yourself and confirm it arrives once, with the right properties.':
    'Har event ko khud chalaiye aur pakka kijiye ki woh ek baar aaya, sahi properties ke saath.',
  'Compare an event count with your database (where your app keeps its records). For example, compare accounts created with the rows in the accounts table.':
    'Event ki ginti ko apne database (jahan app apne records rakhta hai) se milaiye. Jaise, bane hue accounts ko accounts table ki rows se milaiye.',
  'Filter out your own team’s traffic and test accounts.':
    'Apni team ka traffic aur test accounts hata dijiye.',
  'Check that events still fire after each release (each new version you ship).':
    'Dekhiye ki har release ke baad (har nayi version jo aap bhejte hain) events ab bhi fire hote hain.',
  'Next, keep product analytics apart from model telemetry. Telemetry means the records a system keeps about itself: traces, latency (how long a request took) and eval scores (marks from the answer-key test). These tell you how the model behaved (Chapter 30). Product events tell you what people did. Link the two with a shared request ID (one number on both records), so you can move between them.':
    'Agle, product analytics ko model telemetry se alag rakhiye. Telemetry ka matlab hai woh records jo ek system apne baare mein rakhta hai: traces, latency (ek request mein kitna samay laga) aur eval scores (answer-key test ke number). Yeh batate hain ki model ne kaisa kaam kiya (Chapter 30). Product events batate hain ki logon ne kya kiya. Dono ko ek saajhe request ID se jodiye (dono records par ek hi number), taaki aap ek se doosre par ja sakein.',
  'Last, be careful about causes. Say users who share reports stay longer. Sharing might cause that. Or keen users may simply do both. Only a random test shows cause. Everything else is a pattern worth testing.':
    'Aakhir mein, kaaran ke baare mein savdhaan rahiye. Maan lijiye jo users reports share karte hain woh zyada tikte hain. Ho sakta hai sharing se aisa ho. Ya shayad dilchaspi wale users bas dono karte hain. Sirf random test kaaran dikhata hai. Baaki sab ek pattern hai jise test karna chahiye.',
  'Write “users who do X also tend to do Y”, unless a controlled test shows that X causes Y.':
    '“Jo users X karte hain woh aksar Y bhi karte hain” likhiye, jab tak koi controlled test na dikhaye ki X se Y hota hai.',
  'Run the four QA checks (the four checks above) on one event in your capstone, and write down what you found.':
    'Apne capstone ke ek event par chaaron QA checks (upar ke chaar checks) chalaiye, aur jo mila woh likhiye.',
  'Four results. Plus a counterexample: a chart in your capstone that would look fine even if an event were firing twice.':
    'Chaar results. Saath mein ek counterexample: aapke capstone ka ek chart jo theek dikhega chahe koi event do baar fire ho raha ho.',
  'You now have a way to measure a product from start to end. You pick one number that matters and the inputs that move it. You record events with clear names. You read funnels, cohorts and segments. You test changes fairly. And you check your data before you believe it.':
    'Ab aapke paas product ko shuru se aakhir tak naapne ka tareeka hai. Aap woh ek zaroori number aur use badhane wale inputs chunte hain. Aap saaf naamon ke saath events record karte hain. Aap funnels, cohorts aur segments padhte hain. Aap changes ko nyay se test karte hain. Aur data par yakeen karne se pehle use check karte hain.',
  'Next, you will look at the tools that make all this work, and how to choose them for an AI product workflow.':
    'Aage, aap un tools ko dekhenge jo yeh sab sambhav banate hain, aur AI product workflow ke liye unhe kaise chunna hai.',
});

/* Hinglish: b6 (coding-book rewrite and playbook tracks). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {

  'Ship to real users and run the learning loop':
    'Real users ko ship kijiye aur learning loop chalayiye',
  'Put your capstone in front of real users and learn from what they do. You will get it ready for production, recruit people ethically, combine what they say with what they do, and ship one improvement based on evidence.':
    'Apne capstone ko real users ke saamne rakhiye aur woh jo karte hain usse seekhiye. Aap isey production ke liye ready karenge, ethically log recruit karenge, woh kya kehte hain usey woh kya karte hain se combine karenge, aur evidence ke aadhar par ek improvement ship karenge.',
  'Check a product is ready to run, and name who owns it when it breaks.':
    'Check kijiye product chalne ke liye ready hai, aur naam lijiye kaun iska owner hai jab yeh toote.',
  'Recruit design partners honestly, with clear consent and data handling.':
    'Design partners ko honestly recruit kijiye, saaf consent aur data handling ke saath.',
  'Combine what users say with what they do, and trust behaviour when they disagree.':
    'Users kya kehte hain usey woh kya karte hain se combine kijiye, aur jab woh disagree karein to behaviour par trust kijiye.',
  'Prioritise the next fix by frequency, severity and cost.':
    'Frequency, severity aur cost se agla fix prioritise kijiye.',
  'Tell users what changed, and turn support requests into product evidence.':
    'Users ko bataiye kya badla, aur support requests ko product evidence mein badaliye.',
  'A live product, real users and one evidence-based iteration':
    'Ek live product, real users aur ek evidence-based iteration',
  'Launch to real people, watch what happens, change one thing because of what you saw, and show whether it helped.':
    'Real logon ke liye launch kijiye, dekhiye kya hota hai, jo dekha usse ek cheez badaliye, aur dikhaiye usse madad mili ya nahi.',
  'Deploy the capstone to a stable live URL. Add monitoring, analytics, a privacy notice, a way to send feedback and a rollback procedure.':
    'Capstone ko ek stable live URL par deploy kijiye. Monitoring, analytics, ek privacy notice, feedback bhejne ka ek tareeka aur ek rollback procedure jodiye.',
  'Recruit 5–10 real target users. Observe at least five sessions, and record task success, time, failures, quotes and whether they come back.':
    '5–10 real target users recruit kijiye. Kam se kam paanch sessions observe kijiye, aur task success, time, failures, quotes aur woh wapas aate hain ya nahi, record kijiye.',
  'Choose one iteration from the evidence, ship it, and compare product and AI metrics before and after. Publish a changelog.':
    'Evidence se ek iteration chuniye, ship kijiye, aur before aur after product aur AI metrics compare kijiye. Ek changelog publish kijiye.',
  'The users are real target users, not teammates or friends doing you a favour.':
    'Users real target users hain, teammates ya friends jo aap par ehsaan kar rahe hain, nahi.',
  'The iteration links to a specific problem you measured, with the numbers before and after.':
    'Iteration ek specific problem se link karti hai jo aapne measure kiya, before aur after numbers ke saath.',
  'The changelog says what changed, why, and what users should do differently.':
    'Changelog batata hai kya badla, kyun, aur users ko kya alag karna chahiye.',
  'Rubric: reliability 20%, user evidence 30%, iteration quality 30%, learning clarity 20%.':
    'Rubric: reliability 20%, user evidence 30%, iteration quality 30%, learning clarity 20%.',
  'Mastery gate: score each artifact 0–3. Move on only when every artifact scores at least 2 and no safety, privacy or evidence item scores 0.':
    'Mastery gate: har artifact ko 0–3 score kijiye. Aage tabhi badhiye jab har artifact kam se kam 2 score kare aur koi safety, privacy ya evidence item 0 score na kare.',
  'A deployed app with analytics':
    'Analytics ke saath ek deployed app',
  'This chapter puts it in front of real users.':
    'Yeh chapter isey real users ke saamne rakhta hai.',
  'A release checklist':
    'Ek release checklist',
  'You use it before launch.':
    'Aap isey launch se pehle use karte hain.',
  'Reading failures by hand':
    'Haath se failures padhna',
  'Idea 4 builds a failure list the same way.':
    'Idea 4 wahi tarike se ek failure list banati hai.',
  'You observe sessions with the same care.':
    'Aap wahi care se sessions observe karte hain.',
  'About eighteen hours, spread over two or three weeks, because users need time to come back. You need your deployed app from B4 and the release checklist from B5.':
    'Lagbhag atharah ghante, do ya teen hafton mein phaile hue, kyunki users ko wapas aane mein time lagta hai. Aapko B4 se apna deployed app aur B5 se release checklist chahiye.',
  'Idea 1: Ready to run, and owned':
    'Idea 1: Chalne ke liye ready, aur owned',
  'A demo works while you watch it. A product has to work while nobody is watching. Check these before any real user arrives:':
    'Ek demo tab kaam karta hai jab aap dekh rahe hote hain. Ek product ko tab bhi kaam karna hota hai jab koi nahi dekh raha. Kisi real user ke aane se pehle yeh check kijiye:',
  'Ready when':
    'Kab ready hai',
  'Monitoring':
    'Monitoring',
  'You get an alert when errors or latency rise':
    'Jab errors ya latency badhein to aapko alert milta hai',
  'Your tracking plan events arrive from the live app':
    'Aapke tracking plan ke events live app se aate hain',
  'Privacy':
    'Privacy',
  'A notice says what you collect, why, and how to delete it':
    'Ek notice batata hai aap kya collect karte hain, kyun, aur kaise delete karein',
  'Feedback':
    'Feedback',
  'A user can report a problem in one click':
    'Ek user ek click mein problem report kar sakta hai',
  'You have tested going back to the previous version':
    'Aapne pichle version par wapas jaana test kiya hai',
  'A spending limit is set with the model provider':
    'Model provider ke saath ek spending limit set hai',
  'Every production system also needs an owner: the person who responds when it breaks at a bad time. For a capstone, that is you. Write down how you will be alerted, and how quickly you will respond.':
    'Har production system ko ek owner bhi chahiye: woh insaan jo bure waqt mein toote to jawab deta hai. Ek capstone ke liye, yeh aap hain. Likhiye aapko kaise alert kiya jaayega, aur aap kitni jaldi respond karenge.',
  'Go through the six rows for your capstone. Fix anything that is not ready.':
    'Apne capstone ke liye chhe rows se guzariye. Jo bhi ready nahi hai theek kijiye.',
  'Six ticks, or a list of what is missing. Counterexample: a failure your monitoring would not catch, such as the model returning plausible but wrong themes.':
    'Chhe ticks, ya jo missing hai uski list. Counterexample: ek failure jo aapki monitoring nahi pakdegi, jaise model plausible lekin galat themes return kare.',
  'Idea 2: Recruiting design partners ethically':
    'Idea 2: Design partners ko ethically recruit karna',
  '<strong>Design partners</strong> are early users who agree to use an unfinished product and tell you what they find. Recruit them honestly:':
    '<strong>Design partners</strong> woh early users hain jo ek unfinished product use karne aur aapko batane ke liye agree karte hain ki unhe kya mila. Unhe honestly recruit kijiye:',
  'Say clearly that the product is early and may be wrong.':
    'Saaf saaf bataiye product early hai aur galat ho sakta hai.',
  'Explain what data you collect, where it goes and how they can delete it. Get written consent.':
    'Samjhaiye aap kya data collect karte hain, woh kahan jaata hai aur woh kaise delete kar sakte hain. Written consent lijiye.',
  'Do not use data they did not agree to share. For Theme Finder, start with a sample of tickets they choose.':
    'Woh data use mat kijiye jo unhone share karne ke liye agree nahi kiya. Theme Finder ke liye, unke chune huye tickets ke ek sample se shuru kijiye.',
  'Offer something fair in return, such as early access or a discount, but do not pay so much that they feel they owe you praise.':
    'Badle mein kuchh fair dijiye, jaise early access ya discount, lekin itna zyada mat dijiye ki unhe lage woh aapko praise dena chahte hain.',
  'Let them stop at any time without any awkwardness.':
    'Unhe kisi bhi waqt bina awkward hue rukne dijiye.',
  'Look for people who have the problem now and use your target tools. Your A3 interviewees are a good place to start. Friends and colleagues are easy to recruit, but they are too polite to be useful.':
    'Un logon ko dhoondhiye jinke paas abhi yeh problem hai aur aapke target tools use karte hain. Aapke A3 interviewees ek achhi shuruaat hain. Friends aur colleagues recruit karna aasaan hai, lekin woh useful hone ke liye bahut polite hote hain.',
  'Write the recruiting message you will send. Include what the product does, what you ask of them, what data is involved and what they get.':
    'Woh recruiting message likhiye jo aap bhejenge. Product kya karta hai, aap unse kya maangte hain, kaunsa data shaamil hai aur unhe kya milta hai, shaamil kijiye.',
  'A short message. Read it as the recipient: is anything unclear or pushy? Counterexample: a person who fits your target but should not be recruited, and why.':
    'Ek chhota message. Recipient ki tarah padhiye: kuchh unclear ya pushy hai? Counterexample: ek insaan jo aapke target mein fit baithta hai lekin recruit nahi hona chahiye, aur kyun.',
  'Idea 3: What users say, and what they do':
    'Idea 3: Users kya kehte hain, aur kya karte hain',
  'Users often say one thing and do another. They say a feature is great and never use it again. They complain about something and keep using the product every day. You need both kinds of evidence.':
    'Users aksar ek cheez kehte hain aur doosri karte hain. Woh kehte hain ek feature great hai aur phir kabhi use nahi karte. Woh kisi cheez ki complain karte hain aur product har roz use karte rehte hain. Aapko dono tarah ka evidence chahiye.',
  'Watch at least five sessions. Give each user a real task and stay quiet while they work. Record the same fields each time:':
    'Kam se kam paanch sessions dekhiye. Har user ko ek real task dijiye aur unke kaam karte waqt chup rahiye. Har baar wahi fields record kijiye:',
  'When what users say and what they do disagree, trust what they do, and then ask them why.':
    'Jab users jo kehte hain aur jo karte hain disagree karein, jo karte hain usper trust kijiye, phir unse poochiye kyun.',
  'Run your first observed session and fill in the seven fields.':
    'Apna pehla observed session chalayiye aur saaton fields bhariye.',
  'One complete session record. Counterexample: a situation where what the user said was more useful than what they did.':
    'Ek complete session record. Counterexample: ek situation jahan user ne jo kaha woh unhone jo kiya usse zyada useful tha.',
  'Idea 4: Prioritising failures and opportunities':
    'Idea 4: Failures aur opportunities prioritise karna',
  'After five sessions and two weeks of data, you will have more problems than time. Put them in one list, and score each one:':
    'Paanch sessions aur do hafte ke data ke baad, aapke paas time se zyada problems honge. Unhe ek list mein daaliye, aur har ek ko score kijiye:',
  'How often':
    'Kitni baar',
  'How bad':
    'Kitna bura',
  'Cost to fix':
    'Fix karne ki cost',
  'Priority':
    'Priority',
  'Unclear why a ticket is in a theme':
    'Saaf nahi hai ticket ek theme mein kyun hai',
  '4 of 6 users':
    '6 mein se 4 users',
  'High: they stop trusting it':
    'High: woh isper trust karna band kar dete hain',
  'Small':
    'Small',
  'Import fails for over 5,000 tickets':
    '5,000 se zyada tickets ke liye import fail hota hai',
  '1 account':
    '1 account',
  'High for them':
    'Unke liye high',
  'Theme names too long':
    'Theme names bahut lambe hain',
  '3 of 6':
    '6 mein se 3',
  'Wants Zendesk support':
    'Zendesk support chahiye',
  '2 prospects':
    '2 prospects',
  'Blocks them entirely':
    'Unhe poori tarah rokta hai',
  'Large':
    'Large',
  'Mix AI failures and product failures in the same list. A wrong theme and a confusing button both cost users. Reuse the failure taxonomy you built in Chapter 14.5 for the AI rows.':
    'AI failures aur product failures ko ek hi list mein mix kijiye. Ek galat theme aur ek confusing button dono users ko cost karte hain. AI rows ke liye Chapter 14.5 mein banayi failure taxonomy reuse kijiye.',
  'Build your list with at least five problems from your sessions and data. Pick the top one.':
    'Apni sessions aur data se kam se kam paanch problems ke saath apni list banayiye. Top ek chuniye.',
  'A scored list and one choice. Write down the number you expect it to move, and by how much.':
    'Ek scored list aur ek choice. Likhiye aap kaunsa number kitna move hone ki ummeed karte hain.',
  'Describe the iteration you will ship. Write the problem with its evidence, the change, the metric you expect to move and by how much, and what you will do if it does not move.':
    'Woh iteration describe kijiye jo aap ship karenge. Problem uske evidence ke saath likhiye, change, woh metric jo aap move hone ki ummeed karte hain aur kitna, aur agar woh na move ho to aap kya karenge.',
  'We saw… so we will… we expect… if it does not move…':
    'Humne dekha… isliye hum karenge… hum expect karte hain… agar yeh na move ho…',
  'A strong answer: <strong>We saw</strong> 4 of 6 users question why a ticket was in a theme, and only 58% of themes were marked useful. <strong>We will</strong> add a “why this theme” link that shows the three phrases that matched. <strong>We expect</strong> useful themes to rise above 65% within two weeks, with no increase in time per report. <strong>If it does not move,</strong> the problem may be the grouping itself, not the explanation. We will then review 50 disputed tickets by hand before changing anything else.':
    'Ek strong jawab: <strong>Humne dekha</strong> 6 mein se 4 users poochte hain ek ticket ek theme mein kyun tha, aur sirf 58% themes useful mark hui. <strong>Hum karenge</strong> ek "why this theme" link jodenge jo woh teen phrases dikhaye jo match hui. <strong>Hum expect karte hain</strong> do hafton mein useful themes 65% se upar jaayein, per report time badhe bina. <strong>Agar yeh na move ho,</strong> shayad problem grouping mein hi hai, explanation mein nahi. Phir hum kuchh aur badalne se pehle haath se 50 disputed tickets review karenge.',
  'Idea 5: Release notes and support loops':
    'Idea 5: Release notes aur support loops',
  'Each time you ship, tell users what changed. A good changelog entry is short and practical:':
    'Har baar jab aap ship karein, users ko bataiye kya badla. Ek achhi changelog entry chhoti aur practical hoti hai:',
  'Support requests are free product research. Log each one with its category and the account. Review the log weekly with your analytics. A problem that appears in support, sessions and data together is almost certainly real.':
    'Support requests free product research hain. Har ek ko uski category aur account ke saath log kijiye. Log ko apne analytics ke saath weekly review kijiye. Ek problem jo support, sessions aur data teeno mein saath dikhe, lagbhag zaroor real hai.',
  'Write the changelog entry for your iteration. Then set up a simple support log with date, account, category and what you did.':
    'Apni iteration ke liye changelog entry likhiye. Phir date, account, category aur aapne kya kiya ke saath ek simple support log set up kijiye.',
  'One entry and one log. Counterexample: a change that should not be announced, and why.':
    'Ek entry aur ek log. Counterexample: ek change jise announce nahi karna chahiye, aur kyun.'

});

/* Hinglish: the route (src/data/route.mjs) and the route page, keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {
  /* the page */
  'Your route': 'Aapka raasta',
  'Your route: 26 weeks, one order': 'Aapka raasta: 26 hafte, ek hi order',
  '26 weeks, one order': '26 hafte, ek hi order',
  'steps done': 'steps poore',
  'Every step is done. Well done.': 'Har step poora ho gaya. Shabaash.',
  'This is calendar week {cal}, and you are on week {at}. That is fine: carry on from the first open step, and never miss twice.':
    'Calendar ke hisaab se yeh week {cal} hai, aur aap week {at} par hain. Koi baat nahi: pehle khule step se aage badhiye, aur lagaataar do din kabhi mat chhodiye.',
  'You are ahead of the calendar. Keep the pace that keeps you coming back.': 'Aap calendar se aage hain. Wahi raftaar rakhiye jo aapko roz wapas laaye.',
  'You are on schedule. Do the step marked today.': 'Aap samay par hain. Jo step “next” likha hai, woh kijiye.',
  'By Sunday': 'Ravivaar tak',
  'Chapter': 'Chapter',
  'Book': 'Kitaab',
  'Try': 'Try',
  'Look back': 'Peeche mudkar dekhiye',
  'Done': 'Ho gaya',
  'Ticks itself when you mark the chapter complete': 'Chapter complete mark karte hi apne aap tick ho jaata hai',
  'Read in the book': 'Kitaab mein padhiye',
  'Open the chapter': 'Chapter kholiye',
  'Open': 'Kholiye',
  'next': 'agla',
  'step': 'step',
  'Week': 'Week',
  'See the whole route': 'Poora raasta dekhiye',
  'See the week': 'Woh week dekhiye',
  'Open the plan': 'Plan kholiye',
  'first pass, about 20 minutes: read it and answer the boxes. The Build it section is optional.': 'pehli baar, lagbhag 20 minute: padhiye aur boxes ka jawaab dijiye. “Build it” wala hissa optional hai.',
  'One page': 'Ek page',

  /* what each kind of step asks */
  'Read the chapter. The page ticks itself when you reach the end.': 'Chapter padhiye. End tak pahunchte hi page apne aap tick ho jaata hai.',
  'Three lines in your notepad: what made sense, what didn’t, and one question. Take a photo if you keep a log.':
    'Notepad mein teen lines: kya samajh aaya, kya nahi aaya, aur ek sawaal. Agar aap log rakhte hain to photo le lijiye.',
  'Read sections 8.1 to 8.3, then stop, even if you want to keep going.': 'Section 8.1 se 8.3 tak padhiye, phir ruk jaiye, chahe aage padhne ka mann ho.',
  'Read from section 8.4 to the end of the chapter.': 'Section 8.4 se chapter ke end tak padhiye.',

  /* tries */
  'The one-time setup': 'Ek baar ka setup',
  'Put the project where people can see it': 'Project ko wahan rakhiye jahan log dekh sakein',
  'Publish your findings page and the capstone write-up as one page with a link. Keep it plain. A page that exists beats a page that is pretty.':
    'Apna findings page aur capstone write-up ek page par, link ke saath, publish kijiye. Saada rakhiye. Jo page maujood hai, woh sundar page se behtar hai.',
  'Three practice interviews': 'Teen practice interview',
  'Use the interview practice in Chapter B7. Answer three questions out loud, record yourself, and write down one thing to say better next time.':
    'Chapter B7 ki interview practice use kijiye. Teen sawaalon ke jawaab bol kar dijiye, khud ko record kijiye, aur ek baat likhiye jo agli baar behtar kahenge.',

  /* week titles and what each week leaves you with */
  'Meet the machine': 'Machine se mulaqat',
  'Your first model call, with its token count and cost written down.': 'Aapki pehli model call, uske token count aur kharch ke saath likhi hui.',
  'The scoreboard: words against meaning, with a ship-or-not note.': 'Scoreboard: words banaam matlab, ship karein ya nahi ke note ke saath.',
  'Your first complete system': 'Aapka pehla poora system',
  'Version 0 of the findings page, published.': 'Findings page ka version 0, publish kiya hua.',
  'A workflow that cannot make risky changes alone, and the tool access policy.': 'Ek workflow jo akele jokhim bhare badlaav nahi kar sakta, aur tool access policy.',
  'Bharat Privacy Guard shipped, with its findings document and a short demo.': 'Bharat Privacy Guard ship hua, findings document aur ek chhote demo ke saath.',
  'The business, and the job': 'Business, aur naukri',
  /* the one-view page */
  'One view of everything': 'Sab kuch ek jagah',
  'the playbook, the book, the plan and the curriculum, week by week': 'playbook, kitaab, plan aur curriculum, hafte-dar-hafte',
  'The other views': 'Baaki views',
  'The book': 'Kitaab',
  'the same chapters as one story': 'wahi chapters, ek kahani ki tarah',
  'The plan': 'Plan',
  'these weeks, with reviews and a parking lot': 'yahi hafte, review aur parking lot ke saath',
  'The curriculum': 'Curriculum',
  'why the route is in this order': 'raasta isi order mein kyun hai',
  'Do it': 'Kijiye',
  'The story': 'Kahani',
  'What blocked you, what you learned': 'Kya rukawat aayi, kya seekha',
  'Your note': 'Aapka note',
  'Link to what you made': 'Jo banaya uska link',
  'How to': 'Kaise karein',
  'Going further (optional)': 'Aur aage (optional)',
  'This week in the plan': 'Plan mein yeh hafta',
  'Why this month': 'Yeh mahina kyun',
  'Monthly review': 'Mahine ka review',
  'If behind': 'Agar peeche hain',
  'Reviewed': 'Review ho gaya',
  'In the plan': 'Plan mein',
  'The plan has the same weeks, plus the parking lot and the rules.': 'Plan mein yahi hafte hain, saath mein parking lot aur niyam.',
  /* how-to recipes (plan/ship.md) */
  'A chapter on its first pass': 'Chapter ki pehli baar',
  'The one-time setup': 'Ek baar ka setup',
  'Publish a project': 'Project publish kijiye',
  'Demo video: three minutes, no editing': 'Demo video: teen minute, bina editing',
  'Portfolio site': 'Portfolio site',
  'Mock interviews': 'Practice interview',
  'Retro: review the six months': 'Retro: chhe mahinon ka review',
  /* months (src/data/route.mjs) */
  'Month 4: What real systems add': 'Mahina 4: asli systems mein kya judta hai',
  /* monthly reviews (plan/data.mjs) */
  'If you missed days, do not catch up in one go. Carry on from the first open step and let the dates slide.':
    'Agar din chhoot gaye, to ek saath poora mat kijiye. Pehle khule step se aage badhiye aur tareekhon ko khisakne dijiye.',
  'Publish the findings page with whatever numbers you have. An honest short page beats a perfect missing one.':
    'Jo bhi numbers hain unke saath findings page publish kijiye. Imaandaar chhota page, gayab perfect page se behtar hai.',
  'Do the chapters on a first pass and keep one hands-on result per week.':
    'Chapters pehli baar ki tarah kijiye aur har hafte ek hands-on nateeja rakhiye.',
  'If time is short, keep the release gate and the risk register; the others can be one page each.':
    'Agar samay kam hai, to release gate aur risk register rakhiye; baaki ek-ek page ke ho sakte hain.',
  'Bharat Privacy Guard shipped with its findings document and demo, a portfolio page, and three practice interviews.':
    'Bharat Privacy Guard findings document aur demo ke saath ship, ek portfolio page, aur teen practice interview.',
  'Do not cut this one. Move it into May rather than skip it.':
    'Ise mat kaatiye. Chhodne ke bajaye May tak khisaa dijiye.'
});

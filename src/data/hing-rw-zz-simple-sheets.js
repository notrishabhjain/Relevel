/* Hinglish for the Sheets page and its four worked starters (src/sheets.js). Keyed on the English. */
Object.assign(window.HING = window.HING || {}, {
  'Value':
    'Value',
  'Input tokens per call':
    'Har call ke input tokens',
  'the note you send, in tokens (Lego bricks of text)':
    'aapki bheji parchi, tokens mein (text ki Lego eentein)',
  'Output tokens per call':
    'Har call ke output tokens',
  'the reply, in tokens':
    'jawaab, tokens mein',
  'Price per 1M input tokens ($)':
    '10 lakh input tokens ka daam ($)',
  'made-up price: use your provider’s price page':
    'banawati daam: apne provider ka price page dekhiye',
  'Price per 1M output tokens ($)':
    '10 lakh output tokens ka daam ($)',
  'made-up price':
    'banawati daam',
  'Price per 1M cached input tokens ($)':
    '10 lakh cached input tokens ka daam ($)',
  'a cached prompt is read back cheaply':
    'cached prompt sasta padhkar wapas aata hai',
  'Prompt cache hit rate (%)':
    'Prompt cache hit rate (%)',
  'share of input served from the cache':
    'input ka kitna hissa cache se aaya',
  'Retry / failure rate (%)':
    'Retry / failure rate (%)',
  'share of calls that fail and must be sent again':
    'kitni calls fail hoti hain aur dobara bhejni padti hain',
  'Successful answers needed per month':
    'Har mahine kitne safal jawaab chahiye',
  'Rupees per dollar':
    'Ek dollar mein rupaye',
  'check today’s rate':
    'aaj ka rate dekhiye',
  'Result':
    'Nateeja',
  'How it is worked out':
    'Kaise nikala',
  'Input cost per call ($)':
    'Har call ka input kharcha ($)',
  'cached and uncached input, priced apart':
    'cached aur bina-cache input, alag daam par',
  'Output cost per call ($)':
    'Har call ka output kharcha ($)',
  'Cost per call ($)':
    'Har call ka kharcha ($)',
  'Calls per successful answer':
    'Ek safal jawaab ke liye calls',
  'retries mean more than one call per answer':
    'retry ka matlab ek jawaab ke liye ek se zyada call',
  'Cost per successful answer ($)':
    'Ek safal jawaab ka kharcha ($)',
  'the number to watch':
    'is number par nazar rakhiye',
  'Cost per month ($)':
    'Har mahine ka kharcha ($)',
  'Cost per month (₹)':
    'Har mahine ka kharcha (₹)',
  'Case':
    'Case',
  'Made-up message':
    'Banawati message',
  'Right answer (written first)':
    'Sahi jawaab (pehle likha hua)',
  'Model found':
    'Model ne kya dhoondha',
  'Pass (1) or fail (0)':
    'Pass (1) ya fail (0)',
  'Why it failed':
    'Fail kyun hua',
  'missed: write why':
    'chhoot gaya: wajah likhiye',
  'Passed':
    'Pass hue',
  'Pass rate':
    'Pass rate',
  'per cent':
    'pratishat',
  'Likelihood (1–5)':
    'Sambhavna (1–5)',
  'Impact (1–5)':
    'Asar (1–5)',
  'Regulatory trigger (DPDP / CERT-In / EU AI Act / Sectoral)':
    'Kaunsa niyam lagta hai (DPDP / CERT-In / EU AI Act / Sectoral)',
  'Kill-switch / fallback owner':
    'Kill-switch / fallback ka zimmedaar',
  'Status':
    'Sthiti',
  'A real Aadhaar number reaches an outside model':
    'Ek asli Aadhaar number bahar ke model tak pahunch jaata hai',
  'Delivery manager':
    'Delivery manager',
  'mask before sending; synthetic data in tests':
    'bhejne se pehle chhupaiye; test mein banawati data',
  'Model misses phone numbers written in words':
    'Model shabdon mein likhe phone number chhod deta hai',
  'Sectoral':
    'Sectoral',
  'AI engineer':
    'AI engineer',
  'add word-number cases to the answer key':
    'answer key mein shabdon wale number ke cases jodiye',
  'Provider retires the model we use':
    'Provider hamara model band kar deta hai',
  'None':
    'Koi nahi',
  'Project manager':
    'Project manager',
  'pin the version; rerun the eval on the new one':
    'version pakka kijiye; naye par eval dobara chalaiye',
  'A security incident in the logging system':
    'Logging system mein security incident',
  'CERT-In (6 hours)':
    'CERT-In (6 ghante)',
  'incident runbook; log retention checked':
    'incident runbook; log kitne din rakhe, jaancha',
  'Cost per answer doubles after launch':
    'Launch ke baad har jawaab ka kharcha dugna',
  'Product manager':
    'Product manager',
  'cache prompts; cap retries; alert on spend':
    'prompts cache kijiye; retry ki seema; kharche par alert',
  'Hidden instructions in a pasted document':
    'Chipkaye document mein chhupe instructions',
  'EU AI Act / Sectoral':
    'EU AI Act / Sectoral',
  'treat pasted text as data; tool permissions':
    'chipkaye text ko data maaniye; tool ki permissions',
  'Highest score':
    'Sabse ooncha score',
  'Goal':
    'Lakshya',
  'Experiment or task':
    'Experiment ya kaam',
  'Estimate (days)':
    'Andaaza (din)',
  'Done (days)':
    'Ho gaya (din)',
  'Kill criterion (written first)':
    'Kill criterion (pehle likha hua)',
  'Decision (go / kill / change)':
    'Faisla (go / kill / badlaav)',
  'Answer key ready':
    'Answer key taiyaar',
  'Write 25 cases with right answers':
    'Sahi jawaab ke saath 25 cases likhiye',
  '—':
    '—',
  'Go':
    'Go',
  'First finder':
    'Pehla finder',
  'Rules for PAN, Aadhaar, phone':
    'PAN, Aadhaar, phone ke rules',
  'Stop if recall is under 70% after 3 days':
    '3 din baad recall 70% se kam ho to rukiye',
  'Model finder':
    'Model finder',
  'Prompt a model on the same 25 cases':
    'Unhi 25 cases par model ko prompt kijiye',
  'Stop if it beats rules by under 10 points':
    'Rules se 10 point se kam aage ho to rukiye',
  'Combine':
    'Jodiye',
  'Rules first, model for what rules miss':
    'Pehle rules, jo rules chhodein woh model',
  'Stop if cost per answer is over ₹0.50':
    'Har jawaab ka kharcha ₹0.50 se zyada ho to rukiye',
  'Pass rate 90%+, no real data in logs':
    'Pass rate 90%+, logs mein koi asli data nahi',
  'Do not ship below the gate':
    'Gate se neeche ship mat kijiye',
  'Pilot':
    'Pilot',
  'Two teams, shadow mode first':
    'Do teams, pehle shadow mode',
  'Stop if staff override it on over 20% of cases':
    'Staff 20% se zyada cases mein ise palat de to rukiye',
  'Total':
    'Kul',
  'Done (%)':
    'Ho gaya (%)',
  'Worked starters':
    'Taiyaar starter sheets',
  'Each opens your own copy, filled with a made-up example. Change the numbers to yours.':
    'Har ek aapki apni copy kholta hai, banawati udaharan se bhari. Numbers apne daaliye.',
  'Your sheets':
    'Aapki sheets',
  'Your own sheets will appear here. Open a starter above, or start from a chapter that asks for a spreadsheet.':
    'Aapki apni sheets yahan dikhengi. Upar se ek starter kholiye, ya us chapter se shuru kijiye jo spreadsheet maangta hai.',
  'What one answer costs, and a month of them. Change the retry rate or the cache hit rate and watch the cost per successful answer move.':
    'Ek jawaab ka kharcha, aur ek mahine ka. Retry rate ya cache hit rate badaliye aur ek safal jawaab ka kharcha badalte dekhiye.',
  '25-case eval scoreboard':
    '25 cases ka eval scoreboard',
  'Twenty-five test messages with the right answer written first, like a teacher’s answer key. Mark each 1 (pass) or 0 (fail) and read the pass rate.':
    'Pachchees test messages, sahi jawaab pehle likha hua, teacher ki answer key ki tarah. Har ek par 1 (pass) ya 0 (fail) lagaiye aur pass rate padhiye.',
  'AI risk register':
    'AI risk register',
  'Each risk with how likely and how bad it is, the rule it could break, and the named person who pulls the kill switch.':
    'Har risk: kitna sambhav, kitna bura, kaunsa niyam toot sakta hai, aur kaun naam se kill switch dabata hai.',
  'Sprint / release plan':
    'Sprint / release plan',
  'Weeks, goals and estimates, with a kill criterion for each experiment: the rule, written before you start, that says stop.':
    'Hafte, lakshya aur andaaze, har experiment ke saath ek kill criterion: shuru karne se pehle likha niyam jo kehta hai, ruk jaiye.',
});

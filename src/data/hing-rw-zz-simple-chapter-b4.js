/* Hinglish for Choosing tools for an AI product workflow (chapter:b4), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'This is one decision made eleven times, not seventeen tools to learn. For each job in your workflow, ask what a tool in that slot has to do for you, and what breaks if you skip it. Think of a toolbox: you need one hammer, not a shelf of hammers. Pick one tool per job, and learn the job, not the brand.':
    'Yeh ek faisla hai jo gyarah baar liya jaata hai, satrah tools seekhna nahi. Apne workflow ke har kaam ke liye poochiye ki us khaane ke tool ko aapke liye kya karna hai, aur use chhodne par kya tootega. Sochiye ek toolbox: aapko ek hathoda chahiye, hathodon ki poori shelf nahi. Har kaam ke liye ek tool chuniye, aur kaam seekhiye, brand nahi.',
  'Name the eleven capabilities (eleven jobs) an AI product workflow needs tools for, without naming a brand for each.':
    'AI product workflow ko jin gyarah capabilities (gyarah kaamon) ke liye tools chahiye, unke naam batana, har ek ke liye brand ka naam liye bina.',
  'Choose one tool per capability by what it must do and what it must never do, not by what is popular.':
    'Har capability ke liye ek tool chunna is aadhar par ki use kya karna hai aur kya kabhi nahi karna hai, is aadhar par nahi ki kaun sa mashhoor hai.',
  'Know where every tool in your stack (the set of tools you use together) stores data and secrets. And audit (check one by one) what an AI research tool claims before you trust it.':
    'Jaaniye ki aapke stack ka (jo tools aap saath mein use karte hain) har tool data aur secrets kahan rakhta hai. Aur kisi AI research tool par bharosa karne se pehle uske daavon ka audit kijiye (ek ek karke jaanchna).',
  'Explain what breaks when a vendor (the company that makes the tool) changes an API, and how you would notice.':
    'Samjha paana ki jab vendor (tool banane wali company) API badalti hai toh kya tootta hai, aur aapko kaise pata chalega.',
  'Choose one tool for each job, and check what each one does with your data':
    'Har kaam ke liye ek tool chuniye, aur dekhiye ki har tool aapke data ke saath kya karta hai',
  'Tools change every few months, but the jobs they do stay the same. Think of a kitchen: the stove changes, cooking stays. In this chapter you learned to name the jobs first, to choose a tool by what it must do and must never do, and to know where each tool stores data and keys. Now you will choose the tools for Bharat Privacy Guard and audit them.':
    'Tools har kuch mahine mein badalte hain, par unke kaam wahi rehte hain. Sochiye ek rasoi: chulha badalta hai, khana banana wahi rehta hai. Is chapter mein aapne seekha: pehle kaamon ke naam likhna, tool ko is aadhar par chunna ki use kya karna hai aur kya kabhi nahi karna, aur yeh jaanna ki har tool data aur keys kahan rakhta hai. Ab aap Bharat Privacy Guard ke liye tools chunenge aur unka audit karenge.',
  'Written work only. Name the tools and run the two audits. No code needed.':
    'Sirf likhne ka kaam. Tools ke naam likhiye aur do audits chalaiye. Code ki zaroorat nahi.',
  'List the capabilities your project really uses, from the eleven in this chapter: a language model, research, prototyping, coding help, automation, API testing, version control, deployment, a database, analytics and tracing. Most projects need five or six, not all eleven.':
    'Un capabilities ki list banaiye jo aapka project sach mein use karta hai, is chapter ke gyarah mein se: language model, research, prototyping, coding help, automation, API testing, version control, deployment, database, analytics aur tracing. Zyaadatar projects ko paanch ya chhe chahiye, saare gyarah nahi.',
  'For each capability you use, write the tool you chose, the job it does for this project, and one tool you could have chosen instead.':
    'Jo capability aap use karte hain, uske liye likhiye: aapne kaun sa tool chuna, woh is project ke liye kaun sa kaam karta hai, aur ek aur tool jo aap chun sakte the.',
  'Run a claim audit once. Take an AI summary of your own research on this project. Pick ten claims (things the summary says are true). Check each one against its source. Mark each as supported, partly supported or unsupported.':
    'Ek baar claim audit chalaiye. Is project par apni research ka ek AI summary lijiye. Das claims chuniye (woh baatein jo summary sach kehti hai). Har ek ko uske source se milaiye. Har ek par nishaan lagaiye: supported, partly supported ya unsupported.',
  'Run a secrets-and-data audit on your whole stack. For every tool, write what data it stores and where its keys (secret passwords for services) live. Check that no key sits in front-end code (the code anyone can see in a browser) or in your repository (the online folder that remembers your changes).':
    'Apne poore stack par secrets-and-data audit chalaiye. Har tool ke liye likhiye ki woh kaun sa data rakhta hai aur uski keys (services ke secret password) kahan rehti hain. Check kijiye ki koi key front-end code mein (woh code jo browser mein koi bhi dekh sakta hai) ya aapki repository mein (woh online folder jo aapke badlaav yaad rakhta hai) na ho.',
  'Note any place where personal data could end up in a tool by accident, such as logs or analytics, and what stops it.':
    'Woh har jagah likhiye jahan personal data galti se kisi tool mein pahunch sakta hai, jaise logs ya analytics, aur kya use rokta hai.',
  'One chosen tool, one job and one alternative for each capability you use.':
    'Jo capability aap use karte hain, har ek ke liye ek chuna hua tool, ek kaam aur ek vikalp.',
  'A claim audit of ten claims, each one marked.':
    'Das claims ka ek claim audit, har ek par nishaan laga hua.',
  'A note of where every key lives and what data each tool stores.':
    'Ek note ki har key kahan rehti hai aur har tool kaun sa data rakhta hai.',
  'A list of the places personal data could leak into by accident, and how each one is prevented.':
    'Un jagahon ki list jahan personal data galti se leak ho sakta hai, aur har ek ko kaise roka jaata hai.',
  'The capability table assumes you can already make one (an API call, a message sent to the model).':
    'Capability table maanti hai ki aap pehle se ek bana sakte hain (API call, model ko bheja gaya message).',
  'Tool calling and workflows':
    'Tool calling aur workflows',
  'The automation and coding capabilities use the same ideas.':
    'Automation aur coding capabilities wahi ideas use karti hain.',
  'A prototype and a PRD':
    'Ek prototype aur ek PRD',
  'You already built one. This chapter looks again at how you chose its tool.':
    'Aap ek bana chuke hain. Yeh chapter dobara dekhta hai ki aapne uska tool kaise chuna.',
  'In full, this chapter takes about two and a half hours. Tools change every few months. The brands named below are one current example each, not a requirement. If a named tool is gone by the time you read this, pick a replacement that does the same job.':
    'Poora karne mein is chapter ko lagbhag dhai ghante lagte hain. Tools har kuch mahine mein badalte hain. Neeche diye brand sirf ek abhi ka udaaharan hain, zaroori nahi. Agar aapke padhne tak koi tool band ho gaya ho, toh wahi kaam karne wala doosra chun lijiye.',
  'By now your project probably uses several tools: one for the model, one for code, one for watching what users do. This chapter steps back and asks a simple question. How should you choose them? Think of picking tools for a kitchen.':
    'Ab tak aapka project shayad kai tools use karta hai: ek model ke liye, ek code ke liye, ek yeh dekhne ke liye ki users kya karte hain. Yeh chapter ek kadam peeche hatkar ek seedha sawaal poochta hai. Inhe kaise chunna chahiye? Sochiye rasoi ke liye saaman chunna.',
  'Here is the idea in a few lines. An AI product workflow needs eleven capabilities, from start to finish. A capability is a job that has to get done, such as storing your code safely or showing how people use the product. A tool is whatever you pick to do that job.':
    'Idea chand lines mein yeh hai. Ek AI product workflow ko shuru se aakhir tak gyarah capabilities chahiye. Capability ek kaam hai jo hona zaroori hai, jaise aapka code surakshit rakhna ya dikhana ki log product kaise use karte hain. Tool woh hai jo aap us kaam ke liye chunte hain.',
  'Most projects use five or six of the eleven, not all of them. This chapter corrects one mistake: treating each capability as a subject to master. Think of each one as a slot, like a socket on a board, and plug one tool into it.':
    'Zyaadatar projects gyarah mein se paanch ya chhe use karte hain, saare nahi. Yeh chapter ek galti sudhaarta hai: har capability ko aisa vishay samajhna jismein mahir hona hai. Har ek ko ek slot samajhiye, board ke socket jaisa, aur usme ek tool lagaiye.',
  'The toolchain, by capability':
    'Capability ke hisaab se toolchain',
  'The table below lists the eleven. Read the middle column first. It says what any tool in that slot must do for you. The last column gives one current example, and nothing more.':
    'Neeche ki table gyarah ginati hai. Pehle beech ka column padhiye. Woh batata hai ki us slot ke kisi bhi tool ko aapke liye kya karna hai. Aakhri column ek abhi ka udaaharan deta hai, aur kuch nahi.',
  'Capability (the job)':
    'Capability (kaam)',
  'What a tool in this slot must do for you':
    'Is slot ke tool ko aapke liye kya karna hai',
  'One current example':
    'Ek abhi ka udaaharan',
  'LLM / reasoning':
    'LLM / reasoning',
  'Answer, draft and reason over text you give it, whenever you ask':
    'Jab bhi aap kahen, aapke diye text par jawaab dena, draft likhna aur soch-vichar karna',
  'ChatGPT, Claude':
    'ChatGPT, Claude',
  'Research / source grounding':
    'Research / source grounding',
  'Answer only from the sources you upload, with citations you can check':
    'Sirf aapke upload kiye sources se jawaab dena, aise citations ke saath jo aap check kar sakein',
  'NotebookLM':
    'NotebookLM',
  'Prototyping':
    'Prototyping',
  'Turn a description into a working screen quickly, so a user can try it':
    'Ek vivaran ko jaldi se chalti hui screen mein badalna, taaki user use aazma sake',
  'Lovable, Google AI Studio, or Figma for flow only':
    'Lovable, Google AI Studio, ya sirf flow ke liye Figma',
  'Coding':
    'Coding',
  'Read your repository, edit files and run commands, with you reviewing the changes':
    'Aapki repository padhna, files badalna aur commands chalana, aur aap badlaav dekhkar jaanchte hain',
  'Claude Code, Cursor':
    'Claude Code, Cursor',
  'Automation':
    'Automation',
  'Join a trigger (what starts it), a call, a validation (a check) and an approval into a workflow that runs the same way every time':
    'Ek trigger (jo ise shuru karta hai), ek call, ek validation (ek jaanch) aur ek approval ko jodkar aisa workflow banana jo har baar ek jaise chale',
  'n8n':
    'n8n',
  'API testing':
    'API testing',
  'Send an exact request, show the raw response, and save it as a check you can repeat':
    'Ek sahi request bhejna, kaccha response dikhana, aur use aisi jaanch ki tarah save karna jo aap dohra sakein',
  'Postman':
    'Postman',
  'Version control':
    'Version control',
  'Store code, review every change, and run checks before a change is merged (added to the main code)':
    'Code rakhna, har badlaav ko dekhna, aur badlaav merge hone se pehle (main code mein judne se pehle) checks chalana',
  'Deployment':
    'Deployment',
  'Deploy (put the new version live) on every push to the main branch, and go back to the old one within minutes':
    'Main branch par har push par deploy karna (nayi version live karna), aur kuch minutes mein purani par wapas ja paana',
  'Database':
    'Database',
  'Give you sign-in, tables and row-level access rules, so one user cannot see another’s data':
    'Aapko sign-in, tables aur row-level access rules dena, taaki ek user doosre ka data na dekh sake',
  'Record events, and draw funnels and cohorts from real usage':
    'Events record karna, aur asli use se funnels aur cohorts banana',
  'PostHog':
    'PostHog',
  'Trace one request from start to finish: what it cost, how long it took and what it returned':
    'Ek request ko shuru se aakhir tak follow karna: kitna kharch hua, kitna samay laga aur kya laut kar aaya',
  'Chapter 30’s trace schema (the fixed set of fields each trace records), in whatever tool shows it':
    'Chapter 30 ka trace schema (woh tay khaane jo har trace record karta hai), jis bhi tool mein woh dikhe',
  'Pick one tool per capability, and learn what that capability must do. The brand can be replaced. The capability cannot.':
    'Har capability ke liye ek tool chuniye, aur seekhiye ki us capability ko kya karna hai. Brand badla ja sakta hai. Capability nahi.',
  'Two habits that outlast every tool on this list':
    'Do aadatein jo is list ke har tool se zyada chalengi',
  'Tools will come and go, but two habits will stay useful. The first is the <strong>claim audit</strong>. AI tools can summarise research fast, but a summary can say things the source never said. Think of a student who adds lines the book never wrote. So pick ten claims from an AI summary and check each one against its source. Mark each as supported, partly supported or unsupported.':
    'Tools aate-jaate rahenge, par do aadatein hamesha kaam aayengi. Pehli hai <strong>claim audit</strong>. AI tools research ka saar jaldi bana sakte hain, par saar woh baatein keh sakta hai jo source ne kabhi kahi hi nahi. Sochiye ek vidyarthi jo woh lines jodta hai jo kitaab mein thi hi nahi. Isliye AI saar se das claims chuniye aur har ek ko uske source se milaiye. Har ek par nishaan lagaiye: supported, partly supported ya unsupported.',
  'If more than one or two fail, stop trusting that workflow for decisions, whichever research tool produced it.':
    'Agar ek ya do se zyada fail ho jaayen, toh us workflow par faisle ke liye bharosa karna band kijiye, chahe kisi bhi research tool ne use banaya ho.',
  'The second habit is the <strong>secrets-and-data audit</strong>. For every tool in your stack, write what it stores and where its keys live. A key is a secret code that lets your app use a service. It is like the key to your shop’s cash box.':
    'Doosri aadat hai <strong>secrets-and-data audit</strong>. Apne stack ke har tool ke liye likhiye ki woh kya rakhta hai aur uski keys kahan rehti hain. Key ek secret code hai jo aapke app ko ek service use karne deta hai. Yeh aapki dukaan ke galle ki chaabi jaisi hai.',
  'Generated prototypes (screens built for you by an AI tool) especially tend to put API keys in front-end code, where anyone can read them. They also tend to ship a database with no access rules. Check both before you share a link with anyone.':
    'Generated prototypes (AI tool se aapke liye bani screens) khaas taur par API keys front-end code mein daal dete hain, jahan koi bhi unhe padh sakta hai. Woh bina access rules ka database bhi bhej dete hain. Kisi ko link dene se pehle dono check kijiye.',
  'Run the claim audit once, on any AI-summarised research you already have. Then list your own capstone’s stack and run the secrets-and-data audit on it.':
    'Claim audit ek baar chalaiye, kisi bhi AI se saar kiye hue research par jo aapke paas pehle se hai. Phir apne capstone ke stack ki list banaiye aur us par secrets-and-data audit chalaiye.',
  'Ten claims, each one marked. A short stack list, with each row naming what the tool stores and where its secrets live. Plus a counterexample (a case where the tool fails): a claim a source-grounded tool would still get wrong, such as what users did not mention.':
    'Das claims, har ek par nishaan. Ek chhoti stack list, jisme har row batati hai ki tool kya rakhta hai aur uske secrets kahan rehte hain. Saath mein ek counterexample (woh udaaharan jahan tool chook jaata hai): ek claim jo source-grounded tool bhi galat karega, jaise woh baat jo users ne kahi hi nahi.',
  'List every tool in your capstone stack. For each one, write what data it stores or receives, and where its secrets live.':
    'Apne capstone stack ke har tool ki list banaiye. Har ek ke liye likhiye ki woh kaun sa data rakhta ya paata hai, aur uske secrets kahan rehte hain.',
  'GitHub: … Vercel: … Supabase: … PostHog: … Model provider: …':
    'GitHub: … Vercel: … Supabase: … PostHog: … Model provider: …',
  'Here is a complete answer for the Theme Finder stack. <strong>GitHub</strong> stores code only, with no secrets, which you check by searching the history. <strong>Vercel</strong> stores the model and Supabase keys as environment variables (settings kept outside the code), and keeps request logs. <strong>Supabase</strong> stores accounts, theme results and ticket IDs, with row-level access rules. <strong>PostHog</strong> stores events with account IDs, and no ticket text. <strong>The model provider</strong> receives ticket text in each request, so check its retention and training policy (how long it keeps your text, and whether it learns from it). <strong>n8n</strong> stores helpdesk and Slack credentials in its credential store. Writing this list is the start of the data-flow diagram (a map of where data travels) your security lead will ask for.':
    'Theme Finder stack ka ek poora jawaab yeh hai. <strong>GitHub</strong> sirf code rakhta hai, secrets nahi, jo aap history mein khojkar check karte hain. <strong>Vercel</strong> model aur Supabase keys ko environment variables ke roop mein rakhta hai (code ke bahar rakhi settings), aur request logs rakhta hai. <strong>Supabase</strong> accounts, theme results aur ticket IDs rakhta hai, row-level access rules ke saath. <strong>PostHog</strong> account IDs ke saath events rakhta hai, ticket text nahi. <strong>Model provider</strong> har request mein ticket text paata hai, isliye uski retention aur training policy dekhiye (woh aapka text kitne samay rakhta hai, aur kya usse seekhta hai). <strong>n8n</strong> helpdesk aur Slack credentials apne credential store mein rakhta hai. Yeh list likhna us data-flow diagram ki shuruaat hai (data kahan-kahan jaata hai ka naqsha) jo aapka security lead maangega.',
  'You now have a calm way to handle the tool noise. Name the job first. Pick one tool for it. Then check what that tool stores, where its keys live, and what its AI claims are really based on.':
    'Ab aapke paas tools ke shor ko shaanti se sambhalne ka tareeka hai. Pehle kaam ka naam likhiye. Uske liye ek tool chuniye. Phir dekhiye ki woh tool kya rakhta hai, uski keys kahan rehti hain, aur uske AI ke daave asal mein kis par tike hain.',
  'Next, you will look at the system that wraps around the model inside your product, which is called the harness.':
    'Aage, aap us system ko dekhenge jo aapke product ke andar model ko ghere rehta hai, jise harness kehte hain.',
});

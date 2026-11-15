/* Hinglish: gap package A1 (code that runs from the chapter's own starter cell, honest minutes, route short versions).
   Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {
  'Make a helper you will reuse':
    'Ek helper banaiye jo aap baar baar use karenge',
  'You will send many prompts in this chapter, so wrap the model call in a small function called <code>ask</code>. It takes a prompt and returns the reply. Run this cell once. It also sets the text the prompts work on; swap in a paragraph from your own work whenever you like.':
    'Is chapter mein aap kaafi saare prompts bhejenge, isliye model call ko ek chhote function mein wrap kar dijiye jiska naam <code>ask</code> hai. Yeh ek prompt leta hai aur reply wapas deta hai. Yeh cell ek baar chalaiye. Yeh woh text bhi set karta hai jis par prompts kaam karte hain; jab chaahein, apne kaam ke kisi paragraph se badal dijiye.',
  'Nothing prints. From now on <code>ask("…")</code> sends one prompt and gives back the reply, and <code>text</code> holds the paragraph the prompts below work on.':
    'Kuch print nahi hota. Ab se <code>ask("…")</code> ek prompt bhejta hai aur reply wapas deta hai, aur <code>text</code> mein woh paragraph hai jis par neeche ke prompts kaam karte hain.',
  'First run this starter cell. It sets up the helper and the working values that the cells in this chapter use. Change them later if you like.':
    'Pehle yeh starter cell chalaiye. Yeh woh helper aur kaam karne wali values set karta hai jo is chapter ke cells use karte hain. Chaahein toh baad mein inhe badal dijiye.',
  'This chapter’s starter cell has not run. Run it first, then run the cell that failed. After a reload, press <strong>Restore</strong> in the notebook bar before you start.':
    'Is chapter ka starter cell abhi chala nahi hai. Pehle use chalaiye, phir woh cell chalaiye jo fail hua. Reload ke baad shuru karne se pehle notebook bar mein <strong>Restore</strong> dabaiye.',
  'Two text pairs have cosine similarities of 0.78 and 0.19. Which statement is safe to make from these two numbers alone?':
    'Do text pairs ki cosine similarity 0.78 aur 0.19 hai. Sirf in do numbers se kaun sa statement kehna safe hai?',
  'The first pair are near-synonyms and the second pair are not':
    'Pehla pair near-synonyms hai aur doosra nahi',
  'You cannot tell from the scores alone, because how scores spread out depends on the model, the corpus and the task':
    'Sirf scores se nahi bataya ja sakta, kyunki scores kaise failte hain yeh model, corpus aur task par depend karta hai',
  'Both pairs are related, because both scores are above zero':
    'Dono pair related hain, kyunki dono scores zero se upar hain',
  'The second pair is unrelated, because 0.19 is below 0.5':
    'Doosra pair unrelated hai, kyunki 0.19, 0.5 se neeche hai',
  'Before any search, a follow-up such as “and for contractors?” has to be rewritten into a standalone question, because on its own it means nothing. This step is called query rewriting.':
    'Kisi bhi search se pehle, “and for contractors?” jaise follow-up ko ek standalone question mein rewrite karna padta hai, kyunki akela woh kuch nahi batata. Is step ko query rewriting kehte hain.',
  'Now make it harder. This cell hides two facts, one a quarter of the way in and one three quarters of the way in, and asks one question that needs both.':
    'Ab ise mushkil banaiye. Yeh cell do facts chhupata hai, ek chauthai raste par aur ek teen chauthai raste par, aur ek aisa sawaal poochta hai jisme dono chahiye.',
  'Compare the result with the single-fact test and write down the difference. A question that needs two facts can fail even where each fact alone is found.':
    'Is result ko single-fact test se compare kijiye aur farq likh lijiye. Jis sawaal mein do facts chahiye woh tab bhi fail ho sakta hai jab har fact akela mil jaata ho.',
  'On many models this is not a separate model but a setting. Most providers let you choose how much reasoning the same model uses, so look for that setting before you look for a different model.':
    'Kai models mein yeh alag model nahi balki ek setting hoti hai. Zyadatar providers aapko chunne dete hain ki wahi model kitni reasoning use kare, isliye alag model dhoondhne se pehle woh setting dekhiye.',
  'Caution':
    'Savdhani',
  'Count two things separately: how often the judge catches the answers you marked as fails, and how often it passes the answers you marked as passes. When most answers pass, raw agreement can look high while the judge misses most of the real failures.':
    'Do cheezein alag ginye: jin jawaabon ko aapne fail mark kiya unhe judge kitni baar pakadta hai, aur jinhe aapne pass mark kiya unhe woh kitni baar pass karta hai. Jab zyadatar jawaab pass hote hain, tab raw agreement ooncha dikh sakta hai jabki judge asli failures ka zyadatar hissa chhod deta hai.',
});

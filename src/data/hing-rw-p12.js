/* Hinglish: p12 (coding-book rewrite and playbook tracks). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {

  'Error analysis: reading failures by hand':
    'Error analysis: failures ko haath se padhna',
  'Reading real outputs and naming what went wrong is the most useful quality activity there is, and it needs no model or budget. You will read failures, group them, count them, and turn the biggest groups into test cases.':
    'Asli outputs padhna aur jo galat hua uska naam dena sabse kaam ki quality gatividhi hai, aur isme na model chahiye na budget. Aap failures padhenge, unke group banayenge, unhe ginenge, aur sabse bade groups ko test cases mein badlenge.',
  'Decide which group to fix first, based on counts and consequences.':
    'Ginti aur nateejon ke aadhaar par tay karna ki pehle kaunsa group theek karna hai.',
  'Explain why a generic benchmark cannot do this for your product.':
    'Samjhaana ki generic benchmark aapke product ke liye yeh kyun nahi kar sakta.',
  'A failure taxonomy for a real system':
    'Ek asli system ki failure taxonomy',
  'Read a hundred real outputs, describe what went wrong in your own words, and turn your notes into groups someone can count. This tells a team what to fix next, and no benchmark can produce it for you.':
    'Sau asli outputs padhiye, apne shabdon mein bataiye ki kya galat hua, aur apne notes ko aise groups mein badliye jinhe koi gin sake. Yeh team ko batata hai ki aage kya theek karna hai, aur koi benchmark yeh aapke liye nahi bana sakta.',
  'Collect a hundred real outputs from something you own or use. Use real traffic, not a sample you chose.':
    'Kisi aisi cheez ke sau asli outputs ikattha kijiye jo aapki hai ya jise aap use karte hain. Asli traffic use kijiye, apna chuna sample nahi.',
  'Read them. For each one that went wrong, write what went wrong in your own words. Do not group yet; grouping early hides categories you had not thought of.':
    'Unhe padhiye. Har galat wale ke liye apne shabdon mein likhiye ki kya galat hua. Abhi group mat banaiye; jaldi group banaane se woh categories chhup jaati hain jinke baare mein aapne socha nahi tha.',
  'Now group the notes, name the groups and count each one.':
    'Ab notes ke group banaiye, unka naam rakhiye aur har ek giniye.',
  'Rank the groups by count multiplied by how badly each one affects a real person.':
    'Groups ko ginti guna har ek ke asli insaan par bure asar se rank kijiye.',
  'For the top group, write what would need to change, and whether that is the prompt, retrieval, a field, or something that is not an AI problem at all.':
    'Top group ke liye likhiye ki kya badalna padega, aur kya woh prompt hai, retrieval, ek field, ya kuchh aisa jo AI problem hai hi nahi.',
  'Add the top two groups as rows in your test set, so the next change is measured against them.':
    'Top do groups ko apne test set mein rows ki tarah jodiye, taaki agla badlaav unke against naapa jaaye.',
  'The groups came from the reading, not from a list decided in advance.':
    'Groups padhne se nikle, pehle se tay list se nahi.',
  'Every group has a count, and the ranking considers consequences as well as frequency.':
    'Har group ki ginti hai, aur ranking frequency ke saath nateeje bhi dekhti hai.',
  'At least two new rows from real failures are in your test set.':
    'Aapke test set mein asli failures se kam se kam do nayi rows hain.',
  'An LLM judge can grade at scale':
    'LLM judge bade paimaane par grade kar sakta hai',
  'Write the answer key before testing':
    'Test se pehle answer key likhiye',
  'The same idea, applied to failures instead of questions.':
    'Wahi idea, sawaalon ki jagah failures par lagaaya gaya.',
  'No code and no notebook. You need real outputs from something you own or use, such as support replies, generated summaries or search results, and about an hour. Bring a pen.':
    'Na code na notebook. Aapko kisi aisi cheez ke asli outputs chahiye jo aapki hai ya jise aap use karte hain, jaise support replies, generate kiye summaries ya search results, aur lagbhag ek ghanta. Pen le aaiye.',
  'What error analysis is':
    'Error analysis kya hai',
  'Read a hundred real outputs. For each one that went wrong, write down what went wrong in your own words. Then group the notes and name the groups. This is called <strong>error analysis</strong>, and it is the most valuable quality work in this field.':
    'Sau asli outputs padhiye. Har galat wale ke liye apne shabdon mein likhiye ki kya galat hua. Phir notes ke group banaiye aur unka naam rakhiye. Ise <strong>error analysis</strong> kehte hain, aur yeh is field ka sabse keemti quality kaam hai.',
  'Do a small version now. Take ten real outputs from something you own or use. For each one, write one sentence about what went wrong, or “fine”. Then group the sentences and name the groups. Write the groups and their counts here.':
    'Abhi iska chhota version kijiye. Kisi aisi cheez ke das asli outputs lijiye jo aapki hai ya jise use karte hain. Har ek ke liye ek sentence likhiye ki kya galat hua, ya “theek”. Phir sentences ke group banaiye aur naam rakhiye. Groups aur unki ginti yahan likhiye.',
  'The key rule is to write the sentence <em>before</em> choosing a category, because choosing a category first changes what you notice. Real groups are specific and uneven, for example “right document, wrong clause: 4”, “answered a question the user did not ask: 3” and “cited a source that does not contain the claim: 2”. The result is a ranked list of what to fix, built from your own traffic.':
    'Mukhya niyam hai category chunne se <em>pehle</em> sentence likhna, kyunki pehle category chunne se badal jaata hai ki aap kya notice karte hain. Asli groups specific aur asamaan hote hain, jaise “sahi document, galat clause: 4”, “aisa sawaal jawaab diya jo user ne poochha nahi: 3” aur “aisa source cite kiya jisme claim nahi: 2”. Nateeja aapke apne traffic se bani theek karne ki ranked list hai.',
  'Do it on your pipeline':
    'Ise apni pipeline par kijiye',
  'Analyse twenty outputs by hand':
    'Haath se bees outputs analyse kijiye',
  'Collect 20 outputs from your Chapter 12 pipeline, across varied questions. Read each one against its source. For each failure, write a plain note: <em>a sentence, not a category</em>. Then group the notes.':
    'Apni Chapter 12 pipeline se alag-alag sawaalon par 20 outputs ikattha kijiye. Har ek ko uske source ke saath padhiye. Har failure ke liye ek saada note likhiye: <em>ek sentence, category nahi</em>. Phir notes ke group banaiye.',
  'You will end up with 4 to 7 named groups. This is your <strong>failure taxonomy</strong>. Count each group; the largest one is what to fix next. Keep the list: Chapter 17 uses it for the known-limitations section, and Chapter 18 uses it for the regression suite.':
    'Aapke paas 4 se 7 naam wale groups honge. Yeh aapki <strong>failure taxonomy</strong> hai. Har group giniye; sabse bada woh hai jo aage theek karna hai. List sambhal kar rakhiye: Chapter 17 ise known-limitations section ke liye, aur Chapter 18 regression suite ke liye use karta hai.',
  'Turn failures into test cases':
    'Failures ko test cases mein badliye',
  'Each group becomes new rows in your test set. A generic benchmark cannot do this, because it does not have your users or your documents.':
    'Har group aapke test set mein nayi rows banta hai. Generic benchmark yeh nahi kar sakta, kyunki uske paas aapke users ya documents nahi.',
  'This forms a loop: real traffic → read the failures → add test cases → make a fix → measure the improvement → more traffic. Each round makes your test set a better picture of real use. Models change every few months, but your answer key and your failure list stay useful.':
    'Yeh ek loop banata hai: asli traffic → failures padhna → test cases jodna → fix karna → sudhaar naapna → aur traffic. Har round aapke test set ko asli use ki behtar tasveer banata hai. Models har kuchh mahine badalte hain, lekin aapki answer key aur failure list kaam ki rehti hain.',
  'Before release, you ask whether the system passes the answer key. After release, you ask whether users are better off: fewer escalations, fewer edits, more tasks finished. The first can pass while the second fails. You need both, and the second is what the business cares about.':
    'Release se pehle aap poochhte hain ki system answer key pass karta hai ya nahi. Release ke baad aap poochhte hain ki users ka bhala hua ya nahi: kam escalations, kam edits, zyada kaam poore. Pehla pass ho sakta hai jabki doosra fail ho. Aapko dono chahiye, aur business ko doosre ki parwaah hai.',
  'Cost modelling: what an AI feature really costs':
    'Cost modelling: AI feature ki asli cost kya hai',
  'Most business cases underestimate AI cost by three to twenty times, because they price one clean call. You will measure real token counts, apply the four multipliers, build a cheaper cascade, and answer the margin question.':
    'Zyadatar business cases AI cost ko teen se bees guna kam aankte hain, kyunki woh ek saaf call ki keemat lagaate hain. Aap asli token counts naapenge, chaar multipliers lagaayenge, ek sasta cascade banayenge, aur margin ka sawaal hal karenge.',
  'Name the four things that make a simple cost estimate wrong, and which chapter each comes from.':
    'Un chaar cheezon ka naam lena jo simple cost estimate ko galat banaati hain, aur har ek kis chapter se aati hai.',
  'Explain what a cascade is and why it usually saves money.':
    'Samjhaana ki cascade kya hai aur yeh aam taur par paise kyun bachaata hai.',
  'Say what you would ask a vendor who quotes a price per query.':
    'Batana ki per query price batane wale vendor se aap kya poochhenge.',
  'A cost model built from measurements':
    'Measurements se bana cost model',
  'Answer the question many teams skip: what does this feature cost at real volume, and what happens to the margin when it succeeds? Build it from measurements, not estimates.':
    'Us sawaal ka jawab dijiye jise kai teams chhod deti hain: asli volume par is feature ki cost kya hai, aur safal hone par margin ka kya hota hai? Ise andaazon se nahi, measurements se banaiye.',
  'Take one feature and measure the tokens it uses across twenty realistic requests. Average them.':
    'Ek feature lijiye aur bees realistic requests mein uske use kiye tokens naapiye. Average nikaaliye.',
  'Apply the multipliers people forget: retries, retrieved context, conversation history, and failed requests that get repeated.':
    'Woh multipliers lagaiye jo log bhool jaate hain: retries, retrieved context, baatcheet ki history, aur dohraayi gayi fail requests.',
  'Work out the cost per request, per thousand requests, and per month at a volume you would actually plan for.':
    'Per request, per hazaar requests, aur us volume par per month cost nikaaliye jiski aap sach mein planning karenge.',
  'Build a cascade (cheap model first, expensive one only when needed) and measure what share escalates.':
    'Ek cascade banaiye (pehle sasta model, zaroorat hone par hi mehnga) aur naapiye ki kitna hissa aage badhta hai.',
  'Produce three numbers: cost today, cost at ten times the volume, and cost if the cheap path stops working.':
    'Teen numbers banaiye: aaj ki cost, das guna volume par cost, aur sasta raasta kaam karna band kare to cost.',
  'Answer the margin question: at what price and usage does this feature stop making money?':
    'Margin ka sawaal hal kijiye: kis price aur use par yeh feature paise kamaana band karta hai?',
  'Every figure traces back to a measurement you took, and you can say which one.':
    'Har figure aapke liye gaye measurement tak jaata hai, aur aap bata sakte hain kaunsa.',
  'The cascade has a measured escalation rate, not an assumed one.':
    'Cascade ka escalation rate naapa hua hai, maana hua nahi.',
  'You can name the assumption most likely to make the whole model wrong.':
    'Aap woh assumption bata sakte hain jo poore model ko galat banaane ki sabse zyada sambhavna rakhta hai.',
  'You can read the usage block':
    'Aap usage block padh sakte hain',
  'Tokens in, tokens out, times a price. The arithmetic from Chapter 1.':
    'Tokens in, tokens out, guna price. Chapter 1 ka arithmetic.',
  'Retrieved chunks (3, 12), retries (8), agent steps (9) and reasoning tokens (11).':
    'Retrieved chunks (3, 12), retries (8), agent steps (9) aur reasoning tokens (11).',
  'Open a new notebook called <code>chapter-15</code>. You need your Chapter 12 pipeline and your Chapter 6 answer key.':
    '<code>chapter-15</code> naam ka naya notebook kholiye. Aapko apni Chapter 12 pipeline aur Chapter 6 answer key chahiye.',
  'At some point someone senior will ask what this feature costs at scale. “It depends on tokens” is not an answer. This chapter gives you a real one.':
    'Kabhi na kabhi koi senior poochhega ki bade paimaane par is feature ki cost kya hai. “Tokens par nirbhar hai” jawab nahi hai. Yeh chapter aapko asli jawab deta hai.',
  'The basic formula':
    'Buniyaadi formula',
  'The base calculation is simple:':
    'Buniyaadi hisaab simple hai:',
  'Most business cases use this number, and it is often three to twenty times too low. The formula is right; it is applied to the wrong quantities.':
    'Zyadatar business cases yahi number use karte hain, aur yeh aksar teen se bees guna kam hota hai. Formula sahi hai; galat maatraon par lagaaya jaata hai.',
  'Predict: a business case prices a query using only tokens in and tokens out. Once the feature is built, how many times too low is that figure, usually?':
    'Andaaza lagaiye: business case ek query ki keemat sirf tokens in aur tokens out se lagaata hai. Feature bante hi yeh figure aam taur par kitne guna kam hota hai?',
  'Between three and twenty times. The formula prices one clean call. Real features retrieve several documents, retry when the output is malformed, take several steps and pay for reasoning the user never sees.':
    'Teen se bees guna. Formula ek saaf call ki keemat lagaata hai. Asli features kai documents retrieve karte hain, kharaab output par retry karte hain, kai steps lete hain aur us reasoning ke paise dete hain jo user kabhi nahi dekhta.',
  'You have covered all four of those in earlier chapters. Each one is a design choice, which means each one is something you can change.':
    'Yeh chaaron aapne pichhle chapters mein cover kiye. Har ek design choice hai, matlab har ek aisa hai jise aap badal sakte hain.',
  'The four multipliers':
    'Chaar multipliers',
  'Multiplier':
    'Multiplier',
  'Chapter':
    'Chapter',
  'Number of chunks retrieved':
    'Retrieve kiye chunks ki sankhya',
  'Retrieving 8 chunks instead of 3 nearly triples the input on every query':
    '3 ki jagah 8 chunks retrieve karna har query par input lagbhag teen guna karta hai',
  'Retries for malformed output':
    'Kharaab output ke liye retries',
  'Each retry resends the context, so record the real extra tokens and time':
    'Har retry context dobara bhejta hai, isliye asli extra tokens aur samay record kijiye',
  'Six steps send a growing conversation six times, often 10–20× one call':
    'Chhe steps badhti baatcheet chhe baar bhejte hain, aksar ek call ka 10–20×',
  'Reasoning tokens':
    'Reasoning tokens',
  'Charged at the output price, and often several times longer than the visible answer':
    'Output price par charge hote hain, aur aksar dikhne wale jawab se kai guna lambe',
  'Measure real token counts':
    'Asli token counts naapiye',
  'Run your Chapter 12 pipeline on the ten questions in your answer key and record the real token counts.':
    'Apni Chapter 12 pipeline ko apni answer key ke das sawaalon par chalaiye aur asli token counts record kijiye.',
  'You now have real numbers from your own documents. Everything after this is arithmetic on measured values instead of guesses.':
    'Ab aapke paas apne documents ke asli numbers hain. Iske baad sab kuchh andaazon ki jagah naapi values par arithmetic hai.',
  'For example, a feature quoted at 40 paise per query that retrieves eight documents, retries one time in eight, takes four steps and uses reasoning by default does not cost 50 paise. It costs several rupees. That gap can decide whether a feature survives.':
    'Jaise, 40 paise per query quote kiya gaya feature jo aath documents retrieve karta hai, aath mein ek baar retry karta hai, chaar steps leta hai aur default reasoning use karta hai, 50 paise ka nahi padta. Kai rupaye ka padta hai. Yahi gap tay kar sakta hai ki feature bachega ya nahi.',
  'Add the multipliers':
    'Multipliers jodiye',
  'The ratio is often between 8× and 20×. Write it down. It shows why “we estimated the token cost” is different from “we estimated the cost”.':
    'Anupaat aksar 8× se 20× ke beech hota hai. Ise likh lijiye. Yeh dikhata hai ki “humne token cost ka andaaza lagaya” aur “humne cost ka andaaza lagaya” alag kyun hain.',
  'Before running this step, predict how many times higher the full cost will be than the simple estimate.':
    'Yeh step chalaane se pehle andaaza lagaiye ki poori cost simple andaaze se kitne guna zyada hogi.',
  'Five ways to lower the cost':
    'Cost kam karne ke paanch tareeke',
  'Roughly in order of impact:':
    'Mota-mota asar ke kram mein:',
  '<strong>Choose the model.</strong> Prices across one provider’s range differ by ten to a hundred times. This matters more than anything else on the list.':
    '<strong>Model chuniye.</strong> Ek provider ki range mein prices das se sau guna tak alag hoti hain. List mein yeh baaki sab se zyada maayne rakhta hai.',
  '<strong>Use a cheap model first.</strong> Send everything to a small model, and pass on only what fails a check. Chapter 11 showed that most real requests are simple lookups, which a small model handles well.':
    '<strong>Pehle sasta model use kijiye.</strong> Sab kuchh chhote model ko bhejiye, aur sirf check mein fail hone wala aage bhejiye. Chapter 11 ne dikhaya ki zyadatar asli requests simple lookups hain, jinhe chhota model achhe se sambhalta hai.',
  '<strong>Retrieve less.</strong> Every token you do not send costs nothing. Reranking from Chapter 12 lets you retrieve fewer chunks <em>and</em> improve quality.':
    '<strong>Kam retrieve kijiye.</strong> Jo token aap nahi bhejte uski koi keemat nahi. Chapter 12 ki reranking aapko kam chunks retrieve karne <em>aur</em> quality sudhaarne deti hai.',
  '<strong>Use caching.</strong> From Chapter 10: put the parts that never change at the start of the request.':
    '<strong>Caching use kijiye.</strong> Chapter 10 se: kabhi na badalne wale hisse request ke shuru mein rakhiye.',
  '<strong>Batch work that can wait.</strong> Batch processing is often much cheaper. Overnight jobs do not need interactive pricing.':
    '<strong>Ruk sakne wala kaam batch kijiye.</strong> Batch processing aksar kaafi sasti hoti hai. Raat ke jobs ko interactive pricing ki zaroorat nahi.',
  'Build a cascade':
    'Cascade banaiye',
  'A <strong>cascade</strong> sends each request to a cheap model first and escalates to an expensive model only when a check fails. Use your Chapter 8 structured output as the trigger: <code>found: false</code> or a missing quote.':
    '<strong>Cascade</strong> har request pehle saste model ko bhejta hai aur sirf check fail hone par mehnge model tak badhata hai. Trigger ke liye apna Chapter 8 structured output use kijiye: <code>found: false</code> ya missing quote.',
  'You get an escalation rate, often 20–40%. Work out the blended cost and grade accuracy again against your Chapter 6 answer key. Now you have both sides of the trade-off: what the cascade saved, and what it cost in quality, if anything.':
    'Aapko escalation rate milta hai, aksar 20–40%. Mili-juli cost nikaaliye aur apni Chapter 6 answer key se accuracy phir grade kijiye. Ab aapke paas trade-off ke dono pehlu hain: cascade ne kya bachaya, aur quality mein kya keemat lagi, agar koi.',
  'Work out the real cost of a real feature. Estimate tokens in and out per query, apply the four multipliers using the values your design actually uses, and multiply by monthly volume. Then write the sentence you would say to a finance director, including what would make the number wrong.':
    'Ek asli feature ki asli cost nikaaliye. Per query tokens in aur out ka andaaza lagaiye, apne design ki asli values se chaar multipliers lagaiye, aur mahine ke volume se guna kijiye. Phir woh sentence likhiye jo aap finance director se kahenge, is samet ki number ko galat kya karega.',
  'A good answer is defensible rather than precise. It states its assumptions, names the multiplier that dominates (usually retrieved chunks or agent steps), and says what would make it wrong, such as different traffic, more retries or a price change. For example: “Four lakh a month at 300,000 queries, retrieving eight documents, with a 12% retry rate. The number moves most if retries go above 20%.”':
    'Achha jawab sateek se zyada defend karne laayak hota hai. Yeh apne assumptions batata hai, haavi multiplier ka naam leta hai (aam taur par retrieved chunks ya agent steps), aur batata hai ki use galat kya karega, jaise alag traffic, zyada retries ya price badlaav. Jaise: “3,00,000 queries par chaar lakh mahina, aath documents retrieve karte hue, 12% retry rate ke saath. Retries 20% se upar jaayein to number sabse zyada hilta hai.”',
  'Report cost, speed and accuracy together':
    'Cost, speed aur accuracy saath report kijiye',
  'Speed is also a cost. Report the slow responses, not only the average, as in Chapter 11. A cheap but slow feature can fail just as badly as a fast but expensive one. Always report cost per query, typical response time and slow-case response time together.':
    'Speed bhi ek cost hai. Sirf average nahi, dheeme responses report kijiye, jaise Chapter 11 mein. Sasta lekin dheema feature utna hi bura fail ho sakta hai jitna tez lekin mehnga. Hamesha per query cost, typical response time aur dheeme case ka response time saath report kijiye.',
  'Build a comparison table':
    'Tulna ki table banaiye',
  'For each configuration you have built (simple, k=8, cascade, reasoning always on), record these numbers.':
    'Aapne banaaye har configuration (simple, k=8, cascade, reasoning hamesha on) ke liye yeh numbers record kijiye.',
  'This table is the main deliverable of the chapter. It turns an architecture debate into a decision based on evidence, and it fits on one slide.':
    'Yeh table chapter ka main deliverable hai. Yeh architecture ki behas ko saboot par aadharit faisle mein badalti hai, aur ek slide mein aa jaati hai.',
  'The question that decides most AI features has nothing to do with tokens: <strong>does it make money at scale?</strong> If a query costs three rupees and the value it protects is two, no amount of prompt tuning will fix it. Answer this on day one, before the pilot.':
    'Zyadatar AI features ka faisla karne wale sawaal ka tokens se lena-dena nahi: <strong>kya yeh bade paimaane par paise kamaata hai?</strong> Agar ek query teen rupaye ki hai aur woh jo value bachaati hai woh do ki, to koi prompt tuning ise theek nahi karegi. Iska jawab pehle din, pilot se pehle dijiye.',
  'Calculate the margin':
    'Margin nikaaliye',
  'Do one honest calculation: what does this feature cost per user per month at expected usage, and what is it worth per user per month?':
    'Ek imaandaar hisaab kijiye: ummeed ke use par yeh feature per user per month kitne ka padta hai, aur per user per month iski value kya hai?',
  'If the value is not clearly larger than the cost, you have learned that before the pilot rather than after it.':
    'Agar value cost se saaf zyada nahi, to aapne yeh pilot ke baad nahi, pehle seekh liya.',
  'Document extraction: tables, scans and images':
    'Document extraction: tables, scans aur images',
  'Real documents are often scans, tables and forms, not clean text. Converting them to text is where many document projects fail silently. You will find an extraction error in your own documents and compare text extraction with giving the model the page image.':
    'Asli documents aksar scans, tables aur forms hote hain, saaf text nahi. Unhe text mein badalna hi woh jagah hai jahan kai document projects chupchaap fail hote hain. Aap apne documents mein ek extraction error dhoondhenge aur text extraction ko model ko page image dene se compare karenge.',
  'Explain why tables are the most error-prone part of a document, and why no metric catches the error.':
    'Samjhaana ki tables document ka sabse zyada galti wala hissa kyun hain, aur koi metric galti kyun nahi pakadta.',
  'Explain why voice changes the architecture, not just the interface.':
    'Samjhaana ki voice sirf interface nahi, architecture kyun badalta hai.',
  'Audit the extraction quality of a real document set':
    'Ek asli document set ki extraction quality ka audit',
  'Extraction errors are silent: text that was never read correctly produces confident answers, and nothing reports an error. Audit a real document set and find out how much of it is wrong.':
    'Extraction errors chup rehte hain: kabhi theek se na padha gaya text confident jawab deta hai, aur koi error report nahi karta. Ek asli document set ka audit kijiye aur pata lagaiye ki uska kitna hissa galat hai.',
  'Take twenty pages of your own scanned or PDF documents. Choose messy ones, not clean ones.':
    'Apne scan kiye ya PDF documents ke bees pages lijiye. Gande wale chuniye, saaf nahi.',
  'Extract them the usual way, then read the output against the originals and mark every error.':
    'Unhe aam tareeke se extract kijiye, phir output ko originals se padh kar har galti mark kijiye.',
  'Find the tables. Ask a question only a table can answer, and check what comes back.':
    'Tables dhoondhiye. Aisa sawaal poochhiye jiska jawab sirf table de sake, aur check kijiye kya aata hai.',
  'Give the page image to a vision model, and compare its answers with the extracted text on the same questions.':
    'Page image vision model ko dijiye, aur usi sawaalon par uske jawabon ko extract kiye text se compare kijiye.',
  'Check every cell of one important table by hand. Record how long it took, because that is the real cost of trusting it.':
    'Ek zaroori table ka har cell haath se check kijiye. Kitna samay laga record kijiye, kyunki yahi us par bharose ki asli keemat hai.',
  'Estimate the error rate across the whole set, and write what it means for anything built on top of it.':
    'Poore set par error rate ka andaaza lagaiye, aur likhiye ki us par bani har cheez ke liye iska kya matlab hai.',
  'You have a rule for which documents can go in unchecked and which cannot.':
    'Aapke paas niyam hai ki kaunse documents bina check ke andar ja sakte hain aur kaunse nahi.',
  'Chapter 3 gave you the text. Someone had to produce it.':
    'Chapter 3 ne aapko text diya. Kisi ko use banaana pada.',
  'Slow responses are a product problem':
    'Dheeme responses product problem hain',
  'Look at the slowest responses, not the average.':
    'Average nahi, sabse dheeme responses dekhiye.',
  'Open a new notebook called <code>chapter-16</code>. Find one page from your own documents that contains a real table, such as financial figures, eligibility bands or a rate card.':
    '<code>chapter-16</code> naam ka naya notebook kholiye. Apne documents ka ek page dhoondhiye jisme asli table ho, jaise financial figures, eligibility bands ya rate card.',
  'Chapter 3 asked you to paste your document’s text into a file. That assumed the text already existed. In most organisations, much of it does not.':
    'Chapter 3 ne aapse document ka text file mein paste karne ko kaha. Isme maana gaya ki text pehle se maujood hai. Zyadatar organisations mein iska bada hissa nahi hota.',
  'Real documents are pages, not text':
    'Asli documents pages hain, text nahi',
  'Real document collections include scanned contracts with signatures and stamps. They include financial statements where the meaning depends on which row meets which column. They also include manuals with warnings next to diagrams, screenshots in tickets, and handwritten forms.':
    'Asli document collections mein signatures aur stamps wale scan kiye contracts hote hain. Unme financial statements hote hain jahan matlab is par nirbhar hai ki kaunsi row kaunse column se milti hai. Unme diagrams ke bagal mein warnings wale manuals, tickets mein screenshots, aur haath se bhare forms bhi hote hain.',
  'Everything you have built assumes someone already turned these pages into text. That conversion step is where many document projects fail, before anything you measured.':
    'Aapka banaya sab kuchh maanta hai ki kisi ne pehle hi in pages ko text mein badal diya. Yahi badlaav ka step hai jahan kai document projects fail hote hain, aapke naape kisi bhi cheez se pehle.',
  'Predict: in a real company’s documents, such as contracts, statements, policies and scanned letters, what share is clean, digital, correctly ordered text that needs no work?':
    'Andaaza lagaiye: ek asli company ke documents mein, jaise contracts, statements, policies aur scan kiye letters, kitna hissa saaf, digital, sahi kram wala text hai jise kisi kaam ki zaroorat nahi?',
  'Usually much less than a proposal assumes. A large share is scanned images. Much of the digital part still has structure that plain extraction destroys, such as two columns, tables, or headers repeated on every page. Every estimate that depends on this number inherits its error.':
    'Aam taur par proposal ke maane se kahin kam. Bada hissa scan ki images hain. Digital hisse mein bhi bahut kuchh aisa structure rakhta hai jise saada extraction nasht kar deta hai, jaise do columns, tables, ya har page par dohraaye headers. Is number par nirbhar har andaaza uski galti le leta hai.',
  'Few teams check this, and it is the cheapest way to avoid a project failing six weeks in.':
    'Kam teams ise check karti hain, aur project ke chhe hafte mein fail hone se bachne ka yeh sabse sasta tareeka hai.',
  'Why tables fail silently':
    'Tables chupchaap kyun fail hoti hain',
  'A text extractor reading a three-column table often produces one flat line of numbers. Every value survives, but the <em>relationships</em> are lost: which figure belongs to which row, for which year.':
    'Teen column ki table padhne wala text extractor aksar numbers ki ek sapaat line deta hai. Har value bachti hai, lekin <em>rishte</em> kho jaate hain: kaunsa figure kis row ka hai, kis saal ka.',
  'Retrieval then works correctly, the model answers fluently, and the number it quotes comes from the wrong column. Nothing in your pipeline can catch this, because nothing after extraction sees the original page.':
    'Phir retrieval sahi kaam karta hai, model fluent jawab deta hai, aur jo number woh quote karta hai woh galat column ka hota hai. Aapki pipeline mein kuchh ise nahi pakad sakta, kyunki extraction ke baad kuchh bhi original page nahi dekhta.',
  'Find an extraction error':
    'Extraction error dhoondhiye',
  'Extract the text from your table page with whatever tool you have, and read the extracted text.':
    'Apne table wale page ka text jo bhi tool ho usse extract kijiye, aur extract kiya text padhiye.',
  'Read it as a machine would. Can you tell which figure belongs to which row and column from the text alone? Often you cannot. Write down the specific relationship that was lost.':
    'Ise machine ki tarah padhiye. Kya aap sirf text se bata sakte hain ki kaunsa figure kis row aur column ka hai? Aksar nahi. Woh specific rishta likhiye jo kho gaya.',
  'Run the extracted text through your Chapter 7 pipeline with a question whose answer is at a specific row and column.':
    'Extract kiya text apni Chapter 7 pipeline mein aise sawaal ke saath chalaiye jiska jawab ek specific row aur column par hai.',
  'You get a confident answer, often with a number from a neighbouring row or column. Every metric in your Chapter 6 evaluation would have scored this as a retrieval success.':
    'Aapko confident jawab milta hai, aksar bagal wali row ya column ke number ke saath. Aapke Chapter 6 evaluation ka har metric ise retrieval success maanta.',
  'Before running, predict whether your pipeline will get the table question right. People often expect a failure; what surprises them is how <em>fluent</em> the wrong answer is.':
    'Chalaane se pehle andaaza lagaiye ki aapki pipeline table wala sawaal sahi karegi ya nahi. Log aksar failure ki ummeed karte hain; unhe hairaan yeh karta hai ki galat jawab kitna <em>fluent</em> hai.',
  'Two ways to handle pages':
    'Pages sambhaalne ke do tareeke',
  'Save the same page as an image and give it to a vision-capable model, with the same question.':
    'Wahi page image ki tarah save kijiye aur wahi sawaal ke saath vision-capable model ko dijiye.',
  'The answer is usually correct. Because you asked for the row and column labels, you can check it in seconds. This is the supporting-quote idea from Chapter 8, applied to tables.':
    'Jawab aam taur par sahi hota hai. Kyunki aapne row aur column labels maange, aap ise seconds mein check kar sakte hain. Yeh Chapter 8 ka supporting-quote idea hai, tables par lagaaya gaya.',
  'A common approach combines both. Extract text for searching. Then give the model the <em>page image</em> for the final answer when the question is about a table, a figure or a form.':
    'Ek aam tareeka dono ko jodta hai. Search ke liye text extract kijiye. Phir jab sawaal table, figure ya form ke baare mein ho, to final jawab ke liye model ko <em>page image</em> dijiye.',
  'Check every cell':
    'Har cell check kijiye',
  'Ask the vision model to transcribe the whole table into a structured record, using a Chapter 8 schema. Then check every cell against the page by eye.':
    'Vision model se poori table ko Chapter 8 schema ke saath structured record mein likhwaaiye. Phir har cell ko aankh se page ke saath check kijiye.',
  'Expect a few errors, often in cells that are hard to tell apart: merged headers, footnote markers, or empty versus zero. Count them. That error rate is your extraction quality number, and it belongs in every document-AI proposal.':
    'Kuchh galtiyon ki ummeed rakhiye, aksar un cells mein jinhe alag karna mushkil hai: mile hue headers, footnote markers, ya khaali banaam zero. Unhe giniye. Wahi error rate aapka extraction quality number hai, aur har document-AI proposal mein hona chahiye.',
  'Voice: a different constraint':
    'Voice: ek alag seema',
  'Voice changes the main constraint from accuracy to time. In text, a two-second wait is fine. In speech, two seconds of silence breaks the conversation, and people start talking over it. The whole round trip has to fit in that time: speech in, model, speech out.':
    'Voice mukhya seema ko accuracy se samay mein badal deta hai. Text mein do second ka intezaar theek hai. Bolne mein do second ki chuppi baatcheet tod deti hai, aur log beech mein bolne lagte hain. Poora aana-jaana usi samay mein hona chahiye: bol kar input, model, bol kar output.',
  'So voice problems are about conversation: knowing when the person has finished speaking, handling interruptions, and deciding what to say while the system works. The reasoning models from Chapter 11 are usually too slow for voice, however accurate they are.':
    'Isliye voice ki problems baatcheet ki hain: jaanna ki insaan ne bolna khatam kiya, beech mein tokne ko sambhaalna, aur system ke kaam karte samay kya kehna hai tay karna. Chapter 11 ke reasoning models voice ke liye aam taur par bahut dheeme hain, chahe kitne bhi accurate hon.',
  'Audit your documents before you build':
    'Banaane se pehle apne documents ka audit kijiye',
  'Before any document-AI project, get three numbers. What share of the documents is clean digital text? What share is scanned? And what share of the <em>answers people need</em> is inside tables and figures? The third is usually the largest and is rarely asked. It decides the architecture, and one afternoon with fifty documents is enough to estimate it.':
    'Kisi bhi document-AI project se pehle teen numbers lijiye. Documents ka kitna hissa saaf digital text hai? Kitna scan kiya hua? Aur <em>logon ko chahiye jawabon</em> ka kitna hissa tables aur figures mein hai? Teesra aam taur par sabse bada hota hai aur shayad hi kabhi poochha jaata hai. Yahi architecture tay karta hai, aur pachaas documents ke saath ek dopahar iska andaaza lagaane ke liye kaafi hai.',
  'Run that check on a document collection you have. What share is clean digital text, what share is scanned, and what share has tables or layout that carry the meaning? Estimate if you must, but say how you would measure it properly, and what you would change if half turned out to be scanned.':
    'Apne paas ke kisi document collection par yeh check chalaiye. Kitna hissa saaf digital text hai, kitna scan kiya hua, aur kitne mein tables ya layout matlab rakhte hain? Zaroorat ho to andaaza lagaiye, lekin bataiye ki ise theek se kaise naapenge, aur aadha scan kiya nikla to aap kya badlenge.',
  'To measure it properly, sample fifty documents at random from real traffic, not fifty chosen by an enthusiastic colleague. If much of it is scanned, the architecture changes: extraction quality becomes something you measure with its own answer key, and the project gains a phase most proposals leave out. Saying this before the project starts is worth more than any retrieval technique in the course.':
    'Ise theek se naapne ke liye asli traffic se pachaas documents random chuniye, kisi utsaahi colleague ke chune pachaas nahi. Agar bada hissa scan kiya hai, to architecture badalta hai: extraction quality apni answer key se naapi jaane wali cheez ban jaati hai, aur project mein ek aisa phase judta hai jise zyadatar proposals chhod dete hain. Project shuru hone se pehle yeh kehna course ki kisi bhi retrieval technique se zyada keemti hai.',
  'Audit a document sample':
    'Documents ke ek sample ka audit kijiye',
  'Sample 30 documents. Classify each as clean digital text, scanned image or mixed. Then, separately, sample 20 questions people actually ask, and mark how many need a table or figure to answer.':
    '30 documents sample kijiye. Har ek ko saaf digital text, scan image ya mila-jula classify kijiye. Phir alag se, log sach mein jo 20 sawaal poochhte hain unka sample lijiye, aur mark kijiye ki kitnon ko jawab ke liye table ya figure chahiye.',
  'You get two percentages. They decide whether your architecture should be text-first, image-first or a mix, and they take an afternoon to measure.':
    'Aapko do percentages milte hain. Yeh tay karte hain ki aapka architecture text-first, image-first ya mila-jula hona chahiye, aur inhe naapne mein ek dopahar lagti hai.'

});

/* Hinglish for Cost modelling: what an AI feature really costs (chapter:ch15), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Most business cases guess an AI feature\'s cost at three to twenty times too low. They price one clean call, like one SMS, and forget the rest. Here you measure real token counts (tokens are small pieces of text, like Lego bricks). You apply the four multipliers, build a cheaper cascade, and answer the margin question.':
    'Zyadatar business cases AI feature ki cost 3 se 20 guna kam aankte hain. Woh ek saaf call ki keemat lagate hain, jaise ek SMS, aur baaki bhool jaate hain. Yahan aap asli token counts naapte hain (token text ke chhote tukde hain, Lego ki eent jaise). Aap chaar multipliers lagate hain, ek sasta cascade banate hain, aur margin wale sawaal ka jawaab dete hain.',
  'Name the four things that make a simple cost guess wrong, and say which chapter each one comes from.':
    'Un chaar cheezon ke naam bataiye jinse simple cost ka andaaza galat ho jaata hai, aur batayiye ki har ek kis chapter se aati hai.',
  'Say what a cascade is, and why it usually saves money.':
    'Batayiye ki cascade kya hota hai, aur woh aksar paise kyun bachata hai.',
  'Say what you would ask a vendor (a company that sells you a service) who quotes you a price per query.':
    'Batayiye ki jo vendor (service bechne wali company) aapko price per query batata hai, usse aap kya poochhenge.',
  'Build a cost model from measurements':
    'Measurements se cost model banaiye',
  'Many teams never ask: “What does this cost at real volume, and what happens to our margin if it succeeds?” In this chapter you learned the four things that make a simple cost guess wrong. You also learned how a cascade saves money. A cascade tries the cheap option first, like asking the junior clerk, and calls the expensive expert only when needed. Now you build the cost model for Bharat Privacy Guard from your own measurements, not from guesses.':
    'Bahut si teams yeh nahi poochhtin: “Asli volume par iski cost kya hai, aur agar yeh chal gaya toh hamare margin ka kya hoga?” Is chapter mein aapne woh chaar cheezein seekhi jinse simple cost ka andaaza galat hota hai. Aapne yeh bhi seekha ki cascade paise kaise bachata hai. Cascade pehle sasta option try karta hai, jaise pehle junior clerk se poochna, aur mehnge expert ko tabhi bulata hai jab zaroorat ho. Ab aap Bharat Privacy Guard ka cost model banayenge, apne measurements se, andaaze se nahi.',
  'Your notebook for this chapter (the page where you run code in boxes). Use it to measure the tokens and build the cascade. Write the three cost numbers in the notes box below. Short version for the route, about 20 minutes: steps 1, 3 and 5.':
    'Is chapter ka aapka notebook (woh page jahan aap code ko dibbon mein chalate hain). Ismein tokens naapiye aur cascade banaiye. Teen cost numbers neeche notes box mein likhiye. Route ke liye chhota version, lagbhag 20 minute: step 1, 3 aur 5.',
  'Choose the feature: a bank chat in which every customer message is checked. Measure how many tokens your tool uses on twenty realistic messages from your answer key. Then find the average.':
    'Feature chuniye: ek bank chat jisme har customer message check hota hai. Answer key ke 20 asli jaise messages par naapiye ki aapka tool kitne tokens use karta hai. Phir average nikaliye.',
  'Add the things people forget: retries (sending a failed request again), the policy text sent every time, the conversation history, and requests that fail and are sent again.':
    'Woh cheezein jodiye jo log bhool jaate hain: retries (fail hui request ko dobara bhejna), har baar bheja jaane wala policy text, conversation history, aur woh requests jo fail hoti hain aur dobara bheji jaati hain.',
  'Work out the cost per message, per thousand messages, and per month, at a volume you would really expect. Say how many messages you assume, and why.':
    'Cost per message, per thousand messages aur per month nikaliye, ek aise volume par jo aap asal mein expect karte hain. Batayiye ki aap kitne messages maan rahe hain, aur kyun.',
  'Build a cascade. Send every message to the pattern checker first (it is free). Send only the unsure ones on to the model. Measure what share needs the model.':
    'Cascade banaiye. Har message pehle pattern checker ko bhejiye (woh free hai). Sirf unsure wale messages aage model ko bhejiye. Naapiye ki kitne hisse ko model chahiye.',
  'Write down three numbers: the cost today, the cost at ten times the volume, and the cost if the cheap path stops working and everything goes to the model.':
    'Teen numbers likhiye: aaj ki cost, 10 guna volume par cost, aur woh cost jab sasta rasta kaam karna band kar de aur sab kuch model ke paas jaaye.',
  'Answer the margin question. Say a company paid you a fixed price per message. At what price and volume would the tool stop making money?':
    'Margin wale sawaal ka jawaab dijiye. Maan lijiye koi company har message ke liye ek tay price deti hai. Kis price aur volume par tool paise kamana band kar deta?',
  'Save the three cost numbers and the table behind them as <code>docs/cost-model.md</code> in your repository (your online folder that remembers every change).':
    'Teen cost numbers aur unke peeche ki table ko apni repository (aapka online folder jo har badlaav yaad rakhta hai) mein <code>docs/cost-model.md</code> ke roop mein save kijiye.',
  'The average number of tokens in twenty real messages.':
    '20 asli messages ke tokens ka average.',
  'The cost per message, per thousand and per month, with the volume you assumed.':
    'Cost per message, per thousand aur per month, us volume ke saath jo aapne maana.',
  'The share of messages that reach the model in the cascade.':
    'Cascade mein kitne messages model tak pahunchte hain, uska hissa.',
  'The three numbers: today, ten times the volume, and no cheap path.':
    'Teen numbers: aaj, 10 guna volume, aur sasta rasta nahi.',
  'The price below which the tool loses money.':
    'Woh price jisse neeche tool ko ghata hota hai.',
  'You can read the usage block (the bill that comes with each reply)':
    'Aap usage block (har jawaab ke saath aane wala bill) padh sakte hain',
  'Tokens in, tokens out, each times a price. This is the same sum as in Chapter 1.':
    'Tokens in, tokens out, har ek ko price se guna. Yeh Chapter 1 wala hi hisaab hai.',
  'You know what makes the cost bigger':
    'Aap jaante hain ki cost kis cheez se badhti hai',
  'Fetched chunks (3, 12), retries (8), agent steps (9) and reasoning tokens (11) all make a request bigger. Each one adds more bricks to the bill.':
    'Laaye gaye chunks (3, 12), retries (8), agent steps (9) aur reasoning tokens (11), sab request ko bada banate hain. Har ek bill mein aur eent jodta hai.',
  'You need your Chapter 12 pipeline (the chain of steps you built) and your Chapter 6 answer key, because you run both here. They stay with you in the notebook session. After a reload, press <strong>Restore</strong>.':
    'Aapko apni Chapter 12 wali pipeline (aapke banaye steps ki zanjeer) aur Chapter 6 wali answer key chahiye, kyunki dono yahan chalate hain. Dono notebook session mein aapke saath rehte hain. Reload ke baad <strong>Restore</strong> dabaiye.',
  'In the last chapter you read failures by hand to see why a feature goes wrong. This chapter asks a new question: what does the feature cost? You will need the answer sooner than you think.':
    'Pichhle chapter mein aapne failures haath se padhe, taaki dekh sakein ki feature kyun galat jaata hai. Is chapter ka sawaal naya hai: feature ki cost kitni hai? Iska jawaab aapko socha se jaldi chahiye hoga.',
  'One day a senior person will ask what this feature costs at scale. “It depends on tokens” is not an answer. By the end of this chapter, you will have a real one.':
    'Ek din koi senior poochhega ki bade scale par is feature ki cost kya hogi. “Tokens par depend karta hai” koi jawaab nahi hai. Is chapter ke ant tak aapke paas asli jawaab hoga.',
  'The basic formula (a recipe with numbers)':
    'Basic formula (numbers wali recipe)',
  'Start with the simple version. One query is one question you send to the model. Its cost is: the tokens you send in, times the input price, plus the tokens that come back, times the output price. Multiply by the number of queries in a month. That gives a monthly bill.':
    'Pehle simple version dekhiye. Ek query matlab model ko bheja gaya ek sawaal. Uski cost hai: jitne tokens aap bhejte hain unka input price se guna, plus jitne tokens wapas aate hain unka output price se guna. Ise mahine ki queries se guna kijiye. Isse monthly bill milta hai.',
  'Most business cases stop here. The trouble is that their number is often three to twenty times too low. The formula is right. It is used on the wrong amounts.':
    'Zyadatar business cases yahin ruk jaate hain. Dikkat yeh hai ki unka number aksar 3 se 20 guna kam hota hai. Formula sahi hai. Woh galat matra par lagaya gaya hota hai.',
  'The full cost model is like the total cost of ownership in a project report, worked out for each transaction. The licence is only one line. Support, review and retries are the other lines. The four multipliers below are those lines.':
    'Poora cost model project report ke total cost of ownership jaisa hai, jo har transaction ke liye nikala jaata hai. Licence sirf ek line hai. Support, review aur retries baaki lines hain. Neeche ke chaar multipliers wahi lines hain.',
  'A multiple, like 5×':
    'Ek multiple, jaise 5×',
  'Guess first. A business case prices a query using only tokens in and tokens out. Once the feature is built, how many times too low is that figure, usually?':
    'Pehle andaaza lagaiye. Ek business case query ki keemat sirf tokens in aur tokens out se lagata hai. Feature ban jaane ke baad, yeh figure aam taur par kitne guna kam nikalta hai?',
  'Between three and twenty times. The formula prices one clean call. Real features fetch several documents. They try again when the answer comes back broken. They take several steps. They also pay for thinking that the user never sees.':
    '3 se 20 guna. Formula sirf ek saaf call ki keemat lagata hai. Asli features kai documents laate hain. Jawaab toota hua aaye toh dobara try karte hain. Kai steps lete hain. Aur us sochne ke paise bhi dete hain jo user ko kabhi dikhta nahi.',
  'You have met all four of these in earlier chapters. Each one is a design choice, so each one is something you can change.':
    'In chaaron se aap pichhle chapters mein mil chuke hain. Har ek design choice hai, matlab har ek ko aap badal sakte hain.',
  'The four multipliers':
    'Chaar multipliers (guna karne wali cheezein)',
  'So why does a real feature cost so much more than one clean call? Four things cause it. The table below lists them. Look at the last column. It shows how much each one adds.':
    'Toh ek asli feature ek saaf call se itna zyada mehnga kyun padta hai? Chaar cheezein iski wajah hain. Neeche table mein woh sab hain. Aakhri column dekhiye. Woh dikhata hai ki har ek kitna jodti hai.',
  'Multiplier':
    'Multiplier',
  'Number of chunks fetched (chunks are index cards of text)':
    'Kitne chunks laaye gaye (chunks text ke index cards hain)',
  'Ch. 6':
    'Ch. 6',
  'Fetching 8 chunks instead of 3 nearly triples what you send in, on every query.':
    '3 ki jagah 8 chunks laane se har query mein jo aap bhejte hain woh lagbhag teen guna ho jaata hai.',
  'Retries when the answer comes back broken':
    'Toote hue jawaab par retries',
  'Ch. 8':
    'Ch. 8',
  'Each retry sends the whole note again, so write down the real extra tokens and time.':
    'Har retry poora note dobara bhejti hai, isliye asli extra tokens aur time likhiye.',
  'Agent steps (an agent is a helper that does errands in a loop)':
    'Agent steps (agent ek helper hai jo chakkar mein errands karta hai)',
  'Ch. 9':
    'Ch. 9',
  'Six steps send a growing conversation six times. That is often 10–20× the cost of one call.':
    '6 steps ek badhti hui conversation ko 6 baar bhejte hain. Yeh aksar ek call se 10–20 guna cost hoti hai.',
  'Reasoning tokens (the model\'s rough-paper thinking)':
    'Reasoning tokens (model ki rough paper par sochna)',
  'Ch. 11':
    'Ch. 11',
  'They are charged at the output price, and are often several times longer than the answer you see.':
    'Inka charge output price par lagta hai, aur yeh aksar dikhne wale jawaab se kai guna lambe hote hain.',
  'Now try the cost calculator below. Change the four multipliers and watch the monthly number move.':
    'Ab neeche wala cost calculator try kijiye. Chaaron multipliers badaliye aur dekhiye ki monthly number kaise hilta hai.',
  'Measure your own token counts':
    'Apne khud ke token counts naapiye',
  'Numbers from a calculator are a start. Numbers from your own documents are better. So now you measure what your pipeline really uses.':
    'Calculator ke numbers shuruaat hain. Aapke apne documents ke numbers behtar hain. Isliye ab aap naapte hain ki aapki pipeline asal mein kitna use karti hai.',
  'Measure real token counts':
    'Asli token counts naapiye',
  'Run your Chapter 12 pipeline on the ten questions in your answer key. Write down the real token counts.':
    'Apni Chapter 12 ki pipeline ko answer key ke 10 sawaalon par chalaiye. Asli token counts likh lijiye.',
  'You now have real numbers from your own documents. From here on, the sums use measured values, not guesses.':
    'Ab aapke paas apne hi documents ke asli numbers hain. Ab se hisaab naape hue values par hai, andaaze par nahi.',
  'See why this matters with an example. A feature is quoted at 40 paise per query. It fetches eight documents. It retries one time in eight. It takes four steps. It thinks first by default. That feature does not cost 40 paise. It costs several rupees. A gap like this can decide if a feature survives.':
    'Ek example se dekhiye ki yeh kyun zaroori hai. Ek feature ka quote 40 paise per query hai. Woh 8 documents laata hai. 8 mein se 1 baar retry karta hai. 4 steps leta hai. By default pehle sochta hai. Aise feature ki cost 40 paise nahi hoti. Woh kai rupaye ki padti hai. Aisa farq tay kar sakta hai ki feature bachega ya nahi.',
  'Add the multipliers':
    'Multipliers jodiye',
  'Now you put the four multipliers into code. You will see the gap between the simple guess and the real cost.':
    'Ab aap chaaron multipliers ko code mein daalte hain. Aap simple andaaze aur asli cost ke beech ka farq dekhenge.',
  'Before you run this step, guess how many times higher the full cost will be than the simple guess.':
    'Yeh step chalane se pehle andaaza lagaiye ki poori cost simple andaaze se kitne guna zyada niklegi.',
  'The ratio is often between 8× and 20×. Write it down. It shows that “we guessed the token cost” is not the same as “we guessed the cost”.':
    'Ratio aksar 8× se 20× ke beech aata hai. Ise likh lijiye. Isse dikhta hai ki “humne token cost ka andaaza lagaya” aur “humne cost ka andaaza lagaya” ek jaise nahi hain.',
  'Five ways to lower the cost':
    'Cost kam karne ke paanch tareeke',
  'Once you can see the real cost, the next question is how to bring it down. Here are five ways, roughly from most help to least.':
    'Jab asli cost dikhne lagi, agla sawaal hai ki ise kaise ghataayein. Yeh paanch tareeke hain, lagbhag zyada kaam ke se kam kaam ke order mein.',
  '<strong>Choose the model.</strong> Prices across one provider\'s range differ by ten to a hundred times. Like choosing a cycle or a car, this matters more than anything else on the list.':
    '<strong>Model chuniye.</strong> Ek hi provider ki range mein prices 10 se 100 guna tak alag hote hain. Cycle ya car chunne ki tarah, list mein sabse zyada farq yahi daalta hai.',
  '<strong>Use a cheap model first.</strong> Send everything to a small model. Pass on only what fails a check. Chapter 11 showed that most real requests are simple look-ups, which a small model handles well.':
    '<strong>Pehle sasta model use kijiye.</strong> Sab kuch ek chhote model ko bhejiye. Sirf woh aage bhejiye jo check mein fail ho. Chapter 11 mein dikha tha ki zyadatar asli requests simple look-up hoti hain, jinhe chhota model achhe se sambhal leta hai.',
  '<strong>Fetch less.</strong> A token you never send costs nothing. The reranking from Chapter 12 (putting the best cards on top) lets you fetch fewer chunks <em>and</em> get better answers.':
    '<strong>Kam laaiye.</strong> Jo token aap bhejte hi nahi, uski cost zero hai. Chapter 12 ki reranking (sabse achhe cards ko upar rakhna) se aap kam chunks la sakte hain <em>aur</em> behtar jawaab pa sakte hain.',
  '<strong>Use caching.</strong> This comes from Chapter 10. Caching means the model remembers a part it has already read. Put the parts that never change at the start of the request.':
    '<strong>Caching use kijiye.</strong> Yeh Chapter 10 se aata hai. Caching ka matlab hai ki model jo hissa pehle padh chuka hai use yaad rakhta hai. Jo hisse kabhi nahi badalte, unhe request ki shuruaat mein rakhiye.',
  '<strong>Send waiting work in a batch.</strong> Batch processing (many jobs sent together) is often much cheaper. Jobs that run overnight do not need the fast, costly price.':
    '<strong>Jo kaam ruk sakta hai, use ek saath bhejiye.</strong> Batch processing (kai jobs ek saath bhejna) aksar kaafi sasti hoti hai. Raat bhar chalne wale jobs ko tez, mehnga price nahi chahiye.',
  'Build a cascade':
    'Cascade banaiye',
  'The second idea on that list is worth trying yourself. It has a name, and you build it now.':
    'List ka doosra tareeka khud try karne layak hai. Uska ek naam hai, aur ab aap use banate hain.',
  'A <strong>cascade</strong> sends each request to a cheap model first, like asking the junior clerk. It goes to the costly expert only when a check fails. Use your Chapter 8 form-style output as the trigger: <code>found: false</code> or a missing quote.':
    '<strong>Cascade</strong> har request ko pehle ek sasta model bhejta hai, jaise pehle junior clerk se poochna. Mehnge expert ke paas woh tabhi jaata hai jab koi check fail ho. Trigger ke liye apna Chapter 8 wala form-style output use kijiye: <code>found: false</code> ya koi missing quote.',
  'You get an escalation rate (how often a request moves up to the costly model), often 20–40%. Work out the blended cost (the average of cheap and costly calls). Mark accuracy again against your Chapter 6 answer key. Now you see both sides: what the cascade saved, and what it cost in quality, if anything.':
    'Aapko ek escalation rate milta hai (kitni baar request mehnge model tak upar jaati hai), aksar 20–40%. Blended cost nikaliye (sasti aur mehngi calls ka average). Accuracy ko apni Chapter 6 wali answer key se dobara mark kijiye. Ab aap dono pehlu dekhte hain: cascade ne kya bachaya, aur quality mein kuch gaya toh kitna.',
  'Work out the real cost of a real feature. Guess the tokens in and out per query. Apply the four multipliers, using the values your design really uses. Multiply by the monthly volume. Then write the sentence you would say to a finance director, including what would make the number wrong.':
    'Ek asli feature ki asli cost nikaliye. Har query ke tokens in aur out ka andaaza lagaiye. Chaaron multipliers wahi values lagaiye jo aapka design asal mein use karta hai. Monthly volume se guna kijiye. Phir woh sentence likhiye jo aap finance director ko kahenge, jisme yeh bhi ho ki number kis wajah se galat ho sakta hai.',
  'base … × retrieved … × retries … × steps … × thinking … = per query … monthly … and it is wrong if …':
    'base … × retrieved … × retries … × steps … × thinking … = per query … monthly … aur galat tab hoga jab …',
  'A good answer is one you can defend. It does not have to be exact. It states its assumptions. It names the multiplier that matters most (usually fetched chunks or agent steps). It says what would make it wrong, such as different traffic, more retries or a price change. For example: “Four lakh a month at 300,000 queries, fetching eight documents, with a 12% retry rate. The number moves most if retries go above 20%.”':
    'Achha jawaab woh hai jise aap defend kar sakein. Exact hona zaroori nahi. Usme assumptions likhi hoti hain. Woh us multiplier ka naam leta hai jo sabse zyada asar daalta hai (aksar laaye gaye chunks ya agent steps). Woh batata hai ki number kab galat ho sakta hai, jaise alag traffic, zyada retries ya price change. Jaise: “Chaar lakh mahina, 300,000 queries par, 8 documents laakar, 12% retry rate ke saath. Retries 20% se upar gayi toh number sabse zyada hilega.”',
  'Report cost, speed and accuracy together':
    'Cost, speed aur accuracy ek saath batayiye',
  'Cost is only one side of the story. A feature can be cheap and still be a bad feature. So look at it from three sides at once.':
    'Cost kahani ka sirf ek hissa hai. Ek feature sasta hokar bhi kharab ho sakta hai. Isliye use teeno taraf se ek saath dekhiye.',
  'Speed is also a cost. Like waiting for your chai, a slow feature costs the user time. Report the slow responses, not only the average, as in Chapter 11. A cheap but slow feature can fail as badly as a fast but costly one. Always report cost per query, typical wait and slow-case wait together.':
    'Speed bhi ek cost hai. Chai ka intezaar karne ki tarah, slow feature user ka time leta hai. Sirf average nahi, slow responses bhi batayiye, jaise Chapter 11 mein. Sasta par slow feature utni hi buri tarah fail ho sakta hai jitna tez par mehnga feature. Hamesha cost per query, aam intezaar aur slow-case intezaar ek saath batayiye.',
  'The best way to keep all three in view is one small table. You fill it in next.':
    'Teeno ko nazar mein rakhne ka sabse achha tareeka ek chhoti table hai. Ab aap use bharte hain.',
  'Build a comparison table':
    'Comparison table banaiye',
  'For each setup you built (simple, k=8, cascade, reasoning always on), write down these numbers.':
    'Jitne setups aapne banaye (simple, k=8, cascade, reasoning hamesha on), unke liye yeh numbers likhiye.',
  'Configuration (setup)':
    'Configuration (setup)',
  'Cost / query':
    'Cost / query',
  'Accuracy (of 9)':
    'Accuracy (9 mein se)',
  'Cost per correct answer':
    'Sahi answer ki cost',
  'Baseline k=3':
    'Baseline k=3',
  'k=8':
    'k=8',
  'Reasoning always on':
    'Reasoning hamesha on',
  'Fill the last column from the others. Cost per correct answer is the cost per query divided by the share of answers that were right. So 6 right out of 9 is a share of 0.67. A cheap setting that is often wrong can cost more per correct answer than a dearer one that is right.':
    'Aakhri column baaki columns se bhariye. Sahi answer ki cost, cost per query ko sahi answers ke hisse se bhaag dekar nikalti hai. To 9 mein se 6 sahi ka hissa 0.67 hai. Ek sasta setting jo aksar galat ho, sahi answer ke hisaab se ek mehnge lekin sahi setting se zyada kharch kar sakta hai.',
  'This table is the main thing you take away from this chapter. It turns an argument about design into a choice based on proof. It fits on one slide.':
    'Is chapter se aap sabse zyada yahi table saath le jaate hain. Yeh design ki behes ko saboot par tiki choice mein badal deti hai. Yeh ek slide mein aa jaati hai.',
  'The margin question':
    'Margin wala sawaal',
  'There is one more question, and it decides most AI features. It has nothing to do with tokens: <strong>does the feature make money at scale?</strong> Think of a chai stall. If each cup costs more than the price you charge, selling more cups only loses more money.':
    'Ek sawaal aur hai, aur zyadatar AI features ka faisla wahi karta hai. Iska tokens se koi lena-dena nahi: <strong>kya feature bade scale par paise kamata hai?</strong> Chai ki tapri socho. Agar har cup ki cost aapke price se zyada hai, toh zyada cup bechne se sirf aur ghata hota hai.',
  'Say a query costs three rupees, and the value it protects is two rupees. No amount of fine-tuning the prompt will fix that. So answer this question on day one, before the pilot (the small first trial).':
    'Maan lijiye ek query ki cost 3 rupaye hai, aur jo value woh bachati hai woh 2 rupaye ki hai. Prompt ko kitna bhi sudhaarein, yeh theek nahi hoga. Isliye is sawaal ka jawaab pehle din dijiye, pilot (chhota pehla trial) se pehle.',
  'Calculate the margin':
    'Margin nikaliye',
  'Do one honest sum. What does this feature cost per user per month at the usage you expect? What is it worth per user per month?':
    'Ek imaandaar hisaab kijiye. Aapke expected usage par yeh feature per user per month kitne ka padta hai? Aur per user per month uski value kitni hai?',
  'If the value is not clearly bigger than the cost, you learned that before the pilot, not after it.':
    'Agar value cost se saaf taur par badi nahi hai, toh yeh aapko pilot se pehle pata chal gaya, baad mein nahi.',
  'So here is the chapter in short. A simple guess prices one clean call, and the real bill is several times bigger. Four multipliers explain the gap. A cascade is one good way to shrink it. Next, you look at documents that are not clean text at all: tables, scans and images.':
    'Toh chapter ka saar yeh hai. Simple andaaza ek saaf call ki keemat lagata hai, aur asli bill kai guna bada hota hai. Chaar multipliers is farq ko samjhate hain. Cascade use ghataane ka ek achha tareeka hai. Agle chapter mein aap aise documents dekhenge jo saaf text hain hi nahi: tables, scans aur images.',
});

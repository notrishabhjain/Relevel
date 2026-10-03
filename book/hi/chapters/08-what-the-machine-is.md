---
title: Machine Asal Mein Kya Hai
summary: Ek Sunday ki call par ek product manager maan leti hai ki use nahi pata "powered by AI" ka matlab kya hai, aur ek retired linguist aur ek engineer milkar jawaab banate hain, ek-ek saral idea ke saath.
course: a8 ch05
terms:
  - language model | ek program jisne bahut saare likhe hue text se seekha hai ki aage kaun sa text aayega, iska andaaza lagana; chatbot ke peeche yahi baitha hota hai | model, models, LLM, LLMs, large language model
  - generative AI | aisa AI jo naya content banata hai, jaise text, images ya code, sirf ek label ya number dene ke bajaye | 
  - predictive AI | aisa AI jo ek khaas kaam ke liye label ya number deta hai, jaise koi message spam hai ya nahi | 
  - token | text ka ek tukda, aksar poora shabd aur kabhi-kabhi shabd ka ek hissa, jo woh ikai hai jise models padhte hain aur jiske hisaab se providers paisa lete hain | tokens, tokenizer
  - context window | ek baar mein model kitna text le sakta hai, uski seema, jisme aap jo bhejte hain aur jo woh wapas likhta hai dono gine jaate hain | context windows
  - pre-training | model banane ka pehla aur sabse mehnga daur, jisme woh bahut saare text par agla token predict karna seekhta hai | 
  - instruction tuning | model banane ka doosra daur, jisme use nirdeshon aur achhe jawaabon ke jode ke udaharanon par train kiya jaata hai taaki woh nirdesh maane | 
  - weights | model ke andar ke arabon numbers jinme woh sab kuch hai jo usne seekha; training unhe badalti hai, aam istemaal nahi | 
  - inference | taiyaar model ko kisi request ka jawaab dene ke liye chalana; har baar paisa lagta hai aur model badalta nahi | 
  - transformer | woh design jis par lagbhag saare aadhunik language models bane hain, jiska mukhya hissa attention hai | transformers
  - attention | transformer ka woh hissa jo har token ke liye tay karta hai ki agla kya aayega yeh andaaza lagane ke liye baaki kaun se tokens sabse zyada maayne rakhte hain | 
---

"Do saal se main meetings mein keh rahi hoon 'yeh AI se chalta hai'," Anaya ne kaha. "Main yeh kehna band karna chahti hoon jab tak mujhe pata na ho ki main kehna kya chahti hoon."

March ka teesra Sunday tha. Bengaluru ki billi Meenakshi ki kursi ke peeche kahin soyi hui thi, aur Anaya ki balcony par chai purane peetal ke rang ki ho gayi thi. Line par lambi khamoshi rahi, aur phir Meenakshi hans padi, ek chhoti sookhi hansi, jisme koi kadwahat nahi thi.

"Achha hai," unhone kaha. "Mujhe chaalees saal padhane ke baad ek kamre se yeh kehna aaya ki 'mujhe nahi pata'. Tum batao tumhe lagta hai yeh kya hai, aur main bataungi tum kahan galat ho."

Anaya ne koshish ki. Yeh ek tarah ka software hai jisne poora internet padha hai. Woh sawaal samajhta hai. Usme shaayad koi dimaag hai, jo train hua hai. Usne khud ko bolte suna, aur har vaakya pichhle se thoda aur dhundhla tha.

"Tumne ek dant-katha bayaan ki hai," Meenakshi ne pyaar se kaha. "Chalo ab machine karte hain."

## Ek keyboard jisne sab kuch padha

"Tumhara phone," Meenakshi ne kaha. "Jab tum type karti ho *See you at the*, woh kya sujhata hai?"

Anaya ne phone uthaya. *Office. Station. Airport.* Usne English akshron mein Hindi try ki: *Kal milte.* Phone ne sujhaya *hain*, phir *hai*, phir *hum*.

"Use nahi pata ki kal tum kahan jaa rahi ho," Meenakshi ne kaha. "Usne dekha hai ki log kya type karte hain, aur use pata hai ki aamtaur par agla shabd kaun sa aata hai. Woh andaaza laga raha hai, aur andaaza achha isliye hai kyunki uske peeche itna zyada data hai. Ab us keyboard ko har kitaab, har akhbaar, har forum post aur har manual padhne do jo use diya ja sake, kai baar, aur use bahut, bahut bada bana do. Use ek shabd nahi, ek ke baad ek hazaaron shabdon ka andaaza lagane do, har andaaza agle ko khilata hua. Tumhare paas kya hai?"

"Ek bahut lamba autocomplete."

"Ek *language model*. Neeche se bas yahi hai: ek program jisne bahut bade paimane par likhe hue text se seekha hai ki aage kaun sa text aayega. Woh jawaab ek-ek tukda predict karke likhta hai. Woh kuch dhoondhta nahi. Use nahi pata ki kya sach hai. Use pata hai ki kya sambhav hai, aur jab usne jo padha uska zyadatar sach tha, toh sambhav aur sach bahut achhe se milte hain. Jahan nahi milte, wahin se tumhari saari museebat aayegi."

Anaya ne ek envelope ke peeche *sambhav, sach nahi* likha aur uske charon taraf ek dibba bana diya.

## Shabdon ke tukde

Agle din Imran use apne desk par ek demonstration ke liye le gaya, browser khula hua aur chai ka mug jo woh bhool chuka tha.

Model, usne kaha, akshar nahi padhta, shabd bhi nahi. Woh *tokens* padhta hai: text ke tukde, aksar poora shabd, kabhi-kabhi sirf ek hissa. English mein ek token ausat mein shabd ka lagbhag teen-chauthai hota hai. Chhote aam shabd aksar ek token hote hain. Durlabh shabd, aur woh kuch bhi jo aisi lipi mein likha ho jise model ne kam dekha, kai tukdon mein toot jaate hain.

Usne ek aise page par ek vaakya type kiya jo tukdon ko rangon mein dikhata tha: *I want to know my loan status.* Aath tokens, har ek alag rang. Usne wahi vaakya Roman akshron mein type kiya, jaise Sanjay Patil karte: *mujhe apne loan ka status jaanna hai.* Barah. Phir usne wahi matlab Devanagari mein paste kiya. Page chhote tukdon ki mosaic mein jagmaga utha: chhabbis.

"Matlab wahi," Anaya ne kaha.

"Matlab wahi. Machine ke hisaab se text ki teen alag maatraayein." Usne ghoont liya. "Yeh aaj is tool par hai. Doosra tool doosre numbers dega. Main isse koi thumb-rule saath nahi le jaunga. Agar koi kahe ki Hindi do guna mehengi hai, toh poochho kaun sa tool, kaun sa vaakya, kaun sa din, aur phir khud naapo."

Yeh ek aisi wajah se zaroori tha jo Anaya apni jeb mein mehsoos kar sakti thi. Jo koi bhi in machines tak pahunch bechta hai woh token ke hisaab se charge karta hai, jo aap bhejte hain uske liye bhi aur jo wapas aata hai uske liye bhi. Maan lo ki ek provider har das lakh tokens ke teen sau rupaye leta tha, jo aasaan ginit ke liye chuna gaya ek kalpit daam tha. Chhe sau tokens ki chat ka kharcha lagbhag atharah paise hota. Devanagari mein dedh hazaar tokens ki chat ka chaalees-paanch paise. Dono mein se koi number darawana nahi hai. Ek aisi company ki chats se guna kar do jo mahine mein ek lakh sambhalti hai, toh yeh rounding error aur budget ki ek line ke beech ka farak hai.

## Kitna sambhal sakta hai

"Ek seema bhi hai," Imran ne kaha, "aur woh tokens par hai, vaakyon par nahi."

Model ko har request ek tay size ke andar fit honi chahiye, aur woh size sab kuch cover karta hai: jo aap bhejte hain, koi nirdesh, koi document, aur jo jawaab wapas aata hai. Yeh size *context window* hai. Jawaab dene ke liye machine jo kuch istemaal karti hai woh sab uske andar fit hona chahiye, mez par rakhe kaagajon ki tarah. Agar kuch fit nahi hota, toh machine use dekhti nahi, aur batati bhi nahi.

Anaya ne envelope par pehli line ke neeche doosri line likhi. *Is baatcheet ke baare mein machine ko jo kuch pata hai woh mez par hona chahiye.* Use abhi samajh nahi aaya tha ki yeh vaakya kitna zaroori hone wala hai.

## "It" ki trophy

"Ek aur idea hai," Meenakshi ne agle Sunday ko kaha, "aur uske baad tum 'transformer' shabd se darna chhod sakti ho."

Unhone Anaya se poochha ki is vaakya mein *it* ka kya matlab hai: *The trophy did not fit in the suitcase because it was too big.*

"Trophy."

"Tumhe kaise pata?"

"Kyunki agar suitcase bada hota, toh woh fit ho jaati."

"Bilkul. Tumne vaakya mein peeche dekha, ummeedwaaron ko tola, aur woh chuna jo samajh mein aaya. Har pronoun jo tumne kabhi samjha, us hunar par tika tha, aur wahi hunar machine ko seekhna pada yeh sab achhe se karne ke liye. Jis design par aadhunik language models bane hain use *transformer* kehte hain, aur uski mukhya chaal ko *attention*. Har text ke tukde ke liye woh tay karta hai ki agla kya aayega yeh andaaza lagane ke liye baaki kaun se tukde sabse zyada maayne rakhte hain. Jab machine *it* par pahunchti hai, attention hi woh tareeka hai jisse woh us shabd ko *trophy* se jodti hai, *suitcase* se nahi."

Meenakshi ek baat ko lekar saavdhaan thin, aur unhone use do baar kaha. Attention ek sanket hai, vyakhya nahi. Ek model ki kai layers hoti hain, har ek mein kai aise attention mechanisms, aur aakhri jawaab un sab se milkar aata hai. Log kabhi-kabhi attention ki tasveerein banate hain aur unhe saboot ki tarah pesh karte hain ki machine ne jo kaha woh kyun kaha. Yeh kuch aisa hai jaise dimaag ke scan ki tasveer dikha kar vichaar jaanne ka daava karna.

## Banaya gaya, aur phir istemaal kiya gaya

"Do cheezein hamesha ghul-mil jaati hain," Imran ne kaha, "aur unki keemat alag hai. Ek hai model banana. Doosra hai use istemaal karna."

Banana kai daur mein hota hai. Pehle daur mein, jise *pre-training* kehte hain, machine web, kitaabon aur code ke hairaan karne wale paimane par likhe text par agla token predict karna seekhti hai. Ismein mahine lagte hain aur lakhon kharch hote hain. Jo bahar aata hai woh kisi bhi text ko aage badha sakta hai, lekin woh bharose se woh nahi karta jo use kaha jaaye. Doosra daur, *instruction tuning*, use aur train karta hai nirdeshon aur achhe jawaabon ke jode ke udaharanon par, taaki woh nirdesh maane. Teesre mein, log jawaabon ke jode dekh kar behtar wala chunte hain, aur machine ko sikhaya jaata hai ki woh unke chune hue jawaabon jaise jawaab pasand kare. Ise aksar insaani feedback se seekhna kaha jaata hai. Yeh machine ko zyada madadgaar aur zyada saavdhaan banata hai.

Teeno daur uske *weights* badalte hain: model ke andar ke arabon numbers jinme woh sab hai jo usne seekha. Unhe dialon ke ek vishaal set ki tarah socho, har ek ko har us udaharan ne thoda sa ghumaya hai jo usne kabhi dekha.

Taiyaar machine ko chalana ek alag cheez hai, jise *inference* kehte hain. Woh weights ko bilkul nahi badalta. Jab Sahaj ka chatbot kisi customer ko jawaab deta hai, toh inference ho raha hota hai, aur har baar token ke hisaab se paisa lagta hai, aur baad mein machine bilkul waisi hi hoti hai. Customer ne jo type kiya usne us ek jawaab ko aakaar diya, aur phir woh gayab ho gaya.

"Training," Imran ne pichhle hafte ke napkin par likhte hue kaha, "model ko sabke liye, hamesha ke liye badal deti hai. Ek request ek jawaab ko badalti hai aur bhula di jaati hai. Agar main bhool jaun ki kaun sa kaun hai, toh main mehengi galtiyan karta hoon."

## AI ke do kism, aur kin dibbon ko ek chahiye

Ek aakhri farak tha, aur woh raahat ki tarah aaya, kyunki usne Anaya ko napkin ka kuch hissa wapas diya.

Kuch AI ek kaam ke liye label ya number predict karta hai. Kya yeh message spam hai ya nahi? Kya yeh customer cancel karega? Agle mahine ki sales kya hogi? Yeh *predictive AI* hai: ek kaam ke labelled udaharanon par train, chalane mein sasta, aur us ek cheez mein achha. Doosra kism *generative AI* hai: yeh naya text, images ya code banata hai, ise kai kaamon ki taraf mod diya ja sakta hai aap jo poochhte hain use badal kar, aur chalane mein zyada kharcha aata hai, ek bill ke saath jo andar jaane aur bahar aane wale ki lambai ke saath badhta hai. Language model text ke liye generative AI hai.

Har problem ko doosre kism ki zaroorat nahi hoti. Imran ne napkin liya aur dibba-dar-dibba neeche gaya.

Pattern checker ko AI ki bilkul zaroorat nahi thi. Barah ankon ka rule ek rule hai. Name-and-place finder ek chhota predictive tool ho sakta tha, jise har shabd ko insaan, jagah, ya dono nahi mark karne ke liye train kiya gaya ho, aur sirf wahi karna ho. Context judge woh dibba tha jise bada language model chahiye tha, kyunki use vaakya padhna aur parakhna tha, aur woh mehnga hoga, jo ek aur wajah thi ki usse jitne kam ho sake utne vaakyon ke baare mein poochha jaye. Rule-keeper aam code tha.

"Toh chaar dibbon mein se," Anaya ne kaha, "ek ko bade machine ki zaroorat hai."

"Ek ko *chahiye*. Agar woh do sasti dibbon se ho sakta hai, toh unse hona chahiye." Usne pencil rakhi. "Achha niyam: jo sabse sasta kaam kare use istemaal karo, aur mehnga wala un sawaalon ke liye bachao jinka jawaab sirf wahi de sakta hai."

## Saath le jaane layak baatein

Language model ek aisa program hai jisne bahut bade paimane par likhe text se seekha hai ki aage kaun sa text aayega, jo use woh karne mein achha banata hai jo sambhav hai, woh nahi jo sach hai. Woh tokens padhta hai aur unhi par charge hota hai, jo shabdon ke tukde hain, aur ek vaakya kitne tokens leta hai yeh tool aur bhasha par nirbhar karta hai, isliye use naapna chahiye, maan nahi lena chahiye. Jawaab dene ke liye woh jo kuch istemaal karta hai woh uski context window mein fit hona chahiye. Attention woh tareeka hai jisse woh text ke ek tukde ko doosre se jodta hai, lekin woh ek sanket hai, vyakhya nahi. Model banana use sabke liye badalta hai; use istemaal karna, jise inference kehte hain, sirf ek jawaab badalta hai. Aur har kaam ko sabse bade machine ki zaroorat nahi: sabse sasta jo kaam kare wahi sahi hai.

---
title: Machine Asal Mein Kya Hai
summary: Jis product manager ne do saal "powered by AI" kaha hai, woh iska matlab samjhane ki koshish karti hai aur samjha nahi paati. Hum jawaab ko neeche se banate hain: language models, tokens, context window, attention, model kaise banta aur chalta hai, aur do tarah ke AI.
course: a8 ch05
goals:
  - samjha paana ki language model kya karta hai, aur woh jo likely hai usmein achha kyun hai aur jo sach hai usmein nahi
  - text ko tokens mein ginna, aur dekhna ki ginti language aur tool ke saath kyun badalti hai
  - context window batana, aur yeh ki jo text uske andar nahi aata uska kya hota hai
  - model banane aur use chalane mein farq karna, aur predictive AI aur generative AI mein farq karna
terms:
  - language model | ek tota jisne poori library padh li ho: ek program jisne bahut saare likhe text se seekha hai ki aage kaun sa text aayega, iska andaaza lagana; chatbot ke peeche yahi hota hai | model, models, LLM, LLMs, large language model
  - generative AI | aisa AI jo nayi cheezein banata hai, jaise text, images ya code, sirf ek label ya number nahi deta | 
  - predictive AI | aisa AI jo ek kaam ke liye ek label ya ek number deta hai, jaise koi message spam hai ya nahi | 
  - token | text ki ek Lego eent: text ka ek tukda, aksar poora shabd aur kabhi shabd ka ek hissa; model eent-eent karke padhta hai, aur providers eent ke hisaab se paisa lete hain | tokens, tokenizer
  - context window | model ki mez: ek baar mein kitna text us par aa sakta hai, uski limit, jismein aap jo bhejte hain aur jo woh wapas likhta hai, dono gine jaate hain | context windows
  - pre-training | bahut badi library mein school ke saal: model banane ka pehla aur sabse mehnga stage, jismein woh bahut saare text par agla token guess karna seekhta hai | 
  - instruction tuning | hal kiye hue examples se coaching: doosra stage, jismein model instructions aur achhe jawaabon ke jodon se seekhta hai, taaki woh instructions maane | 
  - weights | model ke andar ke dials: arabon numbers jinmein woh sab kuch hai jo usne seekha; training unhe ghumati hai, aam use nahi | 
  - inference | taiyaar model se ek sawaal poochhna: use kisi request ka jawaab dene ke liye chalana; har baar paisa lagta hai aur model badalta nahi | 
  - transformer | woh design jis par lagbhag har modern language model bana hai; iska main hissa attention hai | transformers
  - attention | sentence mein peeche mud kar dekhna: transformer ka woh hissa jo tay karta hai ki agla kya aayega, yeh guess karne ke liye baaki kaun se tokens sabse zyada maayne rakhte hain | 
---

April ke pehle Sunday ko Anaya ne Dr. Meenakshi Rao se ek baat kahi. Do saal se woh meetings mein "yeh AI se chalta hai" bolti aa rahi thi. Ab woh yeh bolna band karna chahti thi, jab tak khud na samjhe ki iska matlab kya hai. Meenakshi thodi der hansi, pyaar se. Phir unhone poochha ki Anaya ke hisaab se is sentence ka matlab kya hai.

Anaya ne kaha ki yeh woh software hai jisne internet padha hai. Woh sawaal samajhta hai. Uske paas ek tarah ka dimaag hai jo train kiya gaya hai. Bolte-bolte usne notice kiya ki har sentence pichhle se zyada dhundhla tha.

"Tumne ek kahani bataayi hai," Meenakshi ne kaha. "Chalo, ab machine ki baat karte hain."

Yeh chapter yahi karta hai. Hum ek jaani-pehchaani cheez se shuru karte hain: phone ka predictive keyboard. Phir ek-ek kadam karke aage badhte hain. Hum AI system ke woh hisse dekhte hain jo product manager ko chahiye. Engineers ke saath barabari se baat karne ke liye yeh zaroori hain. Aap dekhenge ki system kya hai, kaise padhta hai, kitna sambhal sakta hai, kaise banta hai, aur purane AI se kaise alag hai.

## Case: ek kahani aur ek machine

Anaya ka dhundhla jawaab bahut aam hai. Isme system ko ek dimaag maana jaata hai. Dimaag se lagta hai ki samajh hai, jaankari hai, achha judgement hai. Inmein se kisi ki guarantee nahi hai.

Zyada seedha jawaab zyada kaam ka hai. Ek aisi manual sochiye jo batati hai ki machine kya achha karti hai aur kahan toot jaati hai. Woh batati hai ki system kahan fail hoga. Product ki zyadatar problems wahin shuru hoti hain. Neeche ke sections us jawaab ko order se banate hain.

## Ek keyboard jisne sab padha

Apne phone ka keyboard sochiye. Anaya "See you at the" type karti hai. Keyboard "office", "station" aur "airport" sujhata hai. Woh Roman letters mein Hindi "Kal milte" type karti hai. Keyboard "hain", phir "hai", phir "hum" deta hai. Phone ko nahi pata ki kal Anaya kahan jaa rahi hai. Usne dekha hai ki log kya type karte hain. Use pata hai ki aam taur par agla word kaun sa aata hai.

Ab us keyboard ko bada kijiye. Use har kitaab, akhbaar, forum post aur manual padhne dijiye jo use diya ja sake. Kai-kai baar padhne dijiye. Use bahut-bahut bada kar dijiye. Aur use ek nahi, hazaaron words ek ke baad ek guess karne dijiye. Har guess agle mein jaata hai. Jo ban kar nikalta hai, use *language model* kehte hain. Yeh ek aise tote jaisa hai jisne poori library padh li ho. Woh agla word guess karta hai. Woh pakka lagta hai, tab bhi jab woh galat ho.

::: def Language model
Ek program jisne bahut saare likhe hue text se seekha hai ki agla text kya aane wala hai. Woh jawaab ek-ek chhote tukde karke likhta hai. Woh kuch dhoondhta nahi. Use yeh nahi pata ki kya sach hai. Use pata hai ki kya likely hai.
:::

Model ne jo padha, uska zyadatar hissa sach tha. Isliye likely aur sach aksar ek jaise hote hain. Jahan woh alag hote hain, wahin se pareshani shuru hoti hai. Language model par bane har product mein yeh pareshani hai. Anaya ne ek envelope ke peeche "likely, sach nahi" likha. Usne uske chaaron taraf dabba bana diya.

## Tokens: machine kaise padhti hai

Model letters ya poore words nahi padhta. Woh *tokens* padhta hai. Text ki ek Lego eent sochiye. Token text ka ek tukda hota hai. Aksar poora word. Kabhi-kabhi sirf word ka ek hissa. English mein ek token aam taur par lagbhag teen-chauthai word hota hai. Chhote, aam words aksar ek hi token hote hain. Rare words kai tokens mein tut jaate hain. Aisi script (likhne ka tareeka) mein likha text bhi, jise model ne kam dekha ho.

Imran Qureshi ne Anaya ko yeh ek aise page par dikhaya jo har tukde ko rang mein dikhata tha. Usne ek hi matlab teen tareeke se type kiya. Table mein dekhiye kya aaya.

Table: Ek sentence, teen spellings, ek tool par teen token counts
| Version | Text | Tokens |
| --- | --- | --- |
| English | I want to know my loan status. | 8 |
| Roman letters mein Hindi | mujhe apne loan ka status jaanna hai. | 12 |
| Devanagari Hindi | wahi matlab Hindi script mein | 26 |

Sentence ka matlab har baar ek hai. Phir bhi machine ko teen alag amount ka text dikhta hai. Yeh numbers ek tool par ek din ke hain. Doosra tool doosre numbers dega. Isliye is table se koi rule of thumb mat le jaiye. Koi keh sakta hai ki Hindi English se do guna mehngi padti hai. Teen sawaal poochhiye. Kaun sa tool? Kaun sa sentence? Kaun sa din? Jawaab hai, naapna.

Count isliye zaroori hai ki providers (jo company model chalati hai) token ke hisaab se charge karte hain. Aap eent ke hisaab se paisa dete hain. Jo eent aap bhejte hain, aur jo wapas aati hain, dono gine jaate hain. Aasaan hisaab ke liye ek made-up price maan lete hain. Maan lijiye provider har 10 lakh tokens ke 250 rupaye leta hai. Toh 600 tokens ki ek chat ka cost lagbhag 15 paise hoga. Devanagari mein 1,500 tokens ki chat ka cost lagbhag 38 paise hoga.

Dono figures akele darane wale nahi hain. Lekin ek company sochiye jo mahine mein ek lakh chats sambhalti hai. Uske liye farq ek rounding error aur budget ki ek line ke beech ka hai.

## Context window

Model ki mez sochiye. Jo mez par aata hai, wahi padha ja sakta hai. Model ko jaane wali har request ek tay size ke andar fit honi chahiye. Size tokens mein ginta hai, sentences mein nahi. Usmein sab kuch aata hai: jo aap bhejte hain, instructions, documents, aur jo jawaab wapas aata hai. Is limit ko *context window* kehte hain.

::: key Sab kuch mez par hona chahiye
Model ko jawaab dene ke liye jo bhi use karna ho, woh context window ke andar fit hona chahiye, jaise mez par rakhe kaagaz. Agar kuch fit nahi hota, toh model use dekhta nahi. Woh aapko batata bhi nahi. Anaya ne envelope par doosri line likhi: is conversation ke baare mein use jo kuch pata hona chahiye, woh mez par hona chahiye.
:::

## Attention: "it" ko "trophy" kaise mila

Sentence padhte hue peeche dekhna sochiye, yeh pata karne ke liye ki koi word kiski taraf ishaara karta hai. Meenakshi ne Anaya se poochha ki is sentence mein "it" ka kya matlab hai: "The trophy did not fit in the suitcase because it was too big". Anaya ne kaha, "it" matlab trophy. Agar suitcase bada hota, toh trophy fit ho jaati.

Meenakshi ne dhyaan dilaya ki Anaya ne abhi kya kiya. Usne sentence mein peeche dekha. Usne options tole. Usne woh chuna jo samajh mein aata tha. Jitne bhi pronouns (jaise "it" ya "she") usne zindagi mein samjhe hain, sab isi skill par tike the.

Aaj ke language models jis design par bane hain, use *transformer* kehte hain. Uska central hissa hai *attention*. Text ke har tukde ke liye attention yeh tay karti hai ki agla kya aayega, yeh guess karne ke liye baaki kaun se tukde sabse zyada maayne rakhte hain. Model "it" par pahunchta hai. Attention hi use "it" ko "trophy" se jodti hai, "suitcase" se nahi.

::: watch Ek clue, explanation nahi
Ek model mein kai layers hoti hain (ek ke upar ek rakhe kadam). Har layer mein kai attention hisse hote hain. Jawaab sab milkar dete hain. Attention ki pictures kabhi-kabhi is saboot ki tarah dikhayi jaati hain ki model ne wahi kyun kaha. Yeh waisa hi hai jaise brain scan dikhakar dawa karna ki aapko soch pata chal gayi.
:::

## Model banana aur use chalana

Ek student sochiye. Saalon school jaana ek baat hai. Ek din ek sawaal ka jawaab dena doosri baat. Log aksar do alag kaamon ko ek maan lete hain, jinke cost bahut alag hain. Ek hai model banana. Doosra hai use chalana.

Banana kai stages mein hota hai.

1. *Pre-training* mein model web, kitaabon aur code ke bahut zyada likhe text par agla token guess karna seekhta hai. Isme mahine lagte hain aur karodon rupaye kharch hote hain. Jo nikalta hai, woh kisi bhi text ko aage badha sakta hai. Lekin woh bharose se bataye hue kaam nahi karta.
2. *Instruction tuning* mein use instructions aur achhe jawaabon ke jodon par aur train kiya jaata hai. Isse woh instructions follow karna seekhta hai.
3. Teesre stage mein log jawaabon ke jode dekhkar behtar wala chunte hain. Model ko aise jawaab pasand karna sikhaya jaata hai jaise unhone chune. Ise aksar insaani feedback se seekhna kehte hain. Isse model zyada helpful aur zyada careful banta hai.

Table: Model banana aur use chalana
| | Banana (teen stages) | Chalana (inference) |
| --- | --- | --- |
| Kya hota hai | Model seekhta hai | Model ek request ka jawaab deta hai |
| Kya weights badalte hain? | Haan | Nahi |
| Kis par asar padta hai | Model use karne wale har kisi par, hamesha ke liye | Sirf us ek jawaab par |
| Cost | Mahino ki mehnat aur karodon rupaye | Har baar token ke hisaab se chhota charge |

Table mein *weights* ka naam aaya. Yeh model ke andar ke arabon numbers hain. Unmein woh sab kuch hai jo model ne seekha. Bahut saare dials sochiye. Model ne jo bhi example dekha, usne har dial ko thoda ghumaya. Banane ke teeno stages weights ko badalte hain.

Taiyaar model ko chalana *inference* kehlata hai. Isme weights jaise the waise hi rehte hain. Sahaj ka chatbot kisi customer ko jawaab deta hai. Yahi inference hai. Uske liye token ke hisaab se charge lagta hai. Baad mein model bilkul waisa hi rehta hai. Customer ne jo type kiya, usne bas us ek jawaab ko shape diya. Phir woh chala gaya.

## Do tarah ke AI

Do madadgaar sochiye. Ek sorting clerk hai, jo har chitthi ko do trays mein se ek mein rakhta hai. Doosra ek lekhak hai, jo aap jo bhi kahein, uska draft likh deta hai. Kuch AI ek kaam ke liye label ya number batata hai. Yeh message spam hai ya nahi? Kya yeh customer chhod dega? Agle mahine ki sales kitni hogi? Isse *predictive AI* kehte hain. Ise ek hi kaam ke labelled examples par train kiya jaata hai. Yeh chalane mein sasta hota hai. Woh ek kaam achhe se karta hai.

Doosra tarah hai *generative AI*. Woh naya text, images ya code banata hai. Aap sirf apna sawaal badalkar use kai kaamon par laga sakte hain. Yeh chalane mein mehnga hota hai. Bill utna badhta hai jitna andar jaane wala aur bahar aane wala text lamba ho. Language model text ke liye generative AI hai.

Har problem ko doosre tarah ki zaroorat nahi hoti. Imran ne napkin par dabbe-dar-dabba dekha. Table mein uska decision hai.

Table: Guard ke kis hisse ko kaun si machine chahiye
| Hissa | Kya chahiye | Kyun |
| --- | --- | --- |
| Pattern checker | Koi AI nahi | 12 digits ka rule, ek rule hi hai |
| Name-and-place finder | Chhota predictive AI | Har word ko insaan, jagah, ya dono nahi, aise mark karne ke liye train hua, aur kuch nahi |
| Context judge | Language model | Use sentence padhkar judgement lena hai, aur woh mehnga hoga, isliye usse kam se kam sentences ke baare mein poochhna chahiye |
| Rule-keeper | Ordinary code | Woh pehle se liye gaye decisions lagata hai |

Chaar hisson mein se sirf ek ko bade machine ki zaroorat hai. Imran ne apna rule ek sentence mein rakha. Sabse sasti cheez use karo jo kaam kar de. Mehngi cheez ko un sawaalon ke liye bacha kar rakho jinhe sirf wahi hal kar sakti hai.

## Saaraansh

Tote ko ek baar aur sochiye. Language model ek aisa program hai jisne seekha hai ki agla text kya aayega. Isliye woh likely cheezon mein achha hai. Sach par woh bharose ke laayak nahi hai.

- Woh tokens padhta hai aur unhi ke hisaab se charge hota hai. Ek sentence mein kitne tokens hain, yeh tool aur language par depend karta hai. Isliye use naapiye. Maan mat lijiye.
- Jawaab dene ke liye use jo kuch use karna ho, woh context window mein hona chahiye. Jo nahi aata, woh use dikhta hi nahi.
- Attention transformer ke andar text ke ek tukde ko doosre se jodti hai. Woh model ke behaviour ka ek clue hai. Woh uski explanation nahi hai.
- Model banana (pre-training, instruction tuning, insaani feedback se seekhna) uske weights sab ke liye badal deta hai. Use chalana, yaani inference, sirf ek jawaab badalta hai.
- Predictive AI ek kaam ke liye label ya number deta hai. Generative AI kai kaamon ke liye naya content banata hai, zyada cost par. Isliye sabse sasta tool jo kaam kare, wahi sahi hai.

Agle chapter mein Anaya model ke saath apni pehli conversation karti hai, aur yeh sab kaam karte hue dekhti hai.

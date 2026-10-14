---
title: Machine Asal Mein Kya Hai
summary: Jis product manager ne do saal "powered by AI" kaha hai, woh iska matlab samjhane ki koshish karti hai aur samjha nahi paati. Hum jawaab ko neeche se banate hain: language models, tokens, context window, attention, model kaise banta aur chalta hai, aur do tarah ke AI.
course: a8 ch05
goals:
  - samjha paana ki language model kya karta hai, aur woh jo likely hai usmein achha kyun hai aur jo sach hai usmein nahi
  - text ko tokens mein ginna, aur dekhna ki ginti language aur tool ke hisaab se kyun badalti hai
  - context window batana, aur yeh ki jo text uske andar nahi aata uska kya hota hai
  - model banane aur use chalane mein farq karna, aur predictive AI aur generative AI mein farq karna
terms:
  - language model | ek program jisne bahut saare likhe hue text se seekha hai ki aage kaun sa text aayega, iska andaaza lagana; chatbot ke peeche yahi baitha hota hai | model, models, LLM, LLMs, large language model
  - generative AI | aisa AI jo naya content banata hai, jaise text, images ya code, sirf ek label ya number dene ke bajaye | 
  - predictive AI | aisa AI jo ek khaas kaam ke liye label ya number deta hai, jaise koi message spam hai ya nahi | 
  - token | text ka ek tukda, aksar poora shabd aur kabhi-kabhi shabd ka ek hissa, jo woh unit hai jise models padhte hain aur jiske hisaab se providers paisa lete hain | tokens, tokenizer
  - context window | ek baar mein model kitna text le sakta hai, uski limit, jismein aap jo bhejte hain aur jo woh wapas likhta hai, dono gine jaate hain | context windows
  - pre-training | model banane ka pehla aur sabse mehnga stage, jismein woh bahut saare text par agla token predict karna seekhta hai | 
  - instruction tuning | model banane ka doosra stage, jismein use instructions aur achhe jawaabon ke jodon par train kiya jaata hai taaki woh instructions maane | 
  - weights | model ke andar ke arabon numbers jinmein woh sab kuch hai jo usne seekha; training unhe badalti hai, aam use nahi | 
  - inference | taiyaar model ko kisi request ka jawaab dene ke liye chalana; har baar paisa lagta hai aur model badalta nahi | 
  - transformer | woh design jis par lagbhag saare modern language models bane hain, jiska main hissa attention hai | transformers
  - attention | transformer ka woh hissa jo har token ke liye tay karta hai ki agla kya aayega yeh andaaza lagane ke liye baaki kaun se tokens sabse zyada maayne rakhte hain | 
---

March ke teesre Sunday ko Anaya ne Dr. Meenakshi Rao se ek baat kahi. Woh do saal se meetings mein "yeh AI se chalta hai" bolti aa rahi thi. Ab woh chahti thi ki jab tak khud na samjhe ki iska matlab kya hai, tab tak yeh bolna band kar de.

Meenakshi thodi der hansi, bina kisi kadvaahat ke. Phir unhone poochha ki Anaya ke hisaab se is sentence ka matlab kya hai. Anaya ne kaha ki yeh woh software hai jisne internet padha hai, jo sawaal samajhta hai, aur jiske paas ek tarah ka dimaag hai jo train kiya gaya hai. Bolte-bolte usne notice kiya ki har sentence pichhle se zyada dhundhla tha.

"Tumne ek kahani bataayi hai," Meenakshi ne kaha. "Chalo, ab machine ki baat karte hain."

Yeh chapter yahi karta hai. Hum ek jaani-pehchaani cheez se shuru karte hain, phone ke predictive keyboard se. Phir kadam-dar-kadam un hisson tak pahunchte hain jo ek product manager ko engineers se behas karne ke liye samajhne padte hain. Woh kya hai. Woh kaise padhta hai. Woh kitna sambhal sakta hai. Woh kaise banta hai. Aur pehle ke AI se kaise alag hai.

## Case: ek kahani aur ek machine

Anaya ne jo dhundhla account diya, woh bahut aam hai. Isme system ko ek dimaag ki tarah dekha jaata hai. Aur dimaag se lagta hai ki samajh hai, jaankari hai, judgement hai. Inmein se kisi ki bhi guarantee nahi hai.

Zyada seedha-saadha account zyada kaam ka hota hai. Woh batata hai ki system kya achha karega aur kahan fail hoga. Aur product ki zyadatar problems wahin shuru hoti hain jahan system fail hota hai. Neeche ke sections us account ko order se banate hain.

## Ek keyboard jisne sab padha

Jab Anaya apne phone par "See you at the" type karti hai, keyboard "office", "station" aur "airport" sujhata hai. Jab woh Roman letters mein Hindi "Kal milte" type karti hai, toh woh "hain", phir "hai", phir "hum" deta hai.

Phone ko yeh nahi pata ki kal Anaya kahan jaa rahi hai. Usne bas dekha hai ki log kya type karte hain, aur use pata hai ki aam taur par agla word kaun sa aata hai.

Ab us keyboard ko bada kijiye. Use har kitaab, akhbaar, forum post aur manual padhne dijiye jo use diya ja sake, kai-kai baar. Use bahut-bahut bada kar dijiye. Aur use ek nahi, hazaaron words ek ke baad ek guess karne dijiye, har guess agle mein jaata hua. Jo ban kar nikalta hai, use *language model* kehte hain.

::: def Language model
Ek program jisne bahut saare likhe hue text se seekha hai ki agla text kya aane wala hai. Woh jawaab ek-ek tukde ka andaaza lagakar likhta hai. Woh kuch dhoondhta nahi, aur use yeh nahi pata ki kya sach hai. Use pata hai ki kya likely hai.
:::

Jab model ne jo padha, uska zyadatar hissa sach tha, tab likely aur sach bahut hadd tak ek jaise hote hain. Jahan woh alag hote hain, wahin se language model par bane har product ki mushkilein shuru hoti hain. Anaya ne ek envelope ke peeche "likely, sach nahi" likha aur uske chaaron taraf dabba bana diya.

## Tokens: machine kaise padhti hai

Model letters ya poore words nahi padhta. Woh *tokens* padhta hai. Token text ka ek tukda hota hai, aksar poora word, aur kabhi-kabhi sirf uska ek hissa. English mein ek token aam taur par lagbhag teen-chauthai word hota hai. Chhote, aam words aksar ek hi token hote hain. Rare words kai tukdon mein tut jaate hain. Aur woh sab kuch bhi, jo aisi script mein likha ho jise model ne kam dekha ho.

Imran Qureshi ne Anaya ko yeh ek aise page par dikhaya jo tukdon ko rang mein dikhata tha. Usne ek hi matlab teen tareeke se type kiya. Table mein dekhiye kya aaya.

Table: Ek sentence, teen spellings, ek tool par teen token counts
| Version | Text | Tokens |
| --- | --- | --- |
| English | I want to know my loan status. | 8 |
| Roman letters mein Hindi | mujhe apne loan ka status jaanna hai. | 12 |
| Devanagari Hindi | wahi matlab Hindi script mein | 26 |

Sentence ka matlab har baar ek hai, lekin machine ko teen alag amount ka text dikhta hai. Yeh figures ek tool par ek din ke hain. Doosra tool doosre numbers dega. Isliye is table se koi rule of thumb mat le jaiye. Agar koi kehta hai ki Hindi English se do guna mehngi padti hai, toh teen sawaal poochhiye: kaun sa tool, kaun sa sentence, aur kaun sa din? Jawaab hai, naapna.

Count isliye zaroori hai ki providers token ke hisaab se charge karte hain. Jo aap bhejte hain, uske liye bhi, aur jo wapas aata hai, uske liye bhi. Chaliye aasaan hisaab ke liye ek made-up price maan lete hain. Maan lijiye provider har 10 lakh tokens ke 300 rupaye leta hai. Toh 600 tokens ki ek chat ka cost lagbhag 18 paise hoga. Devanagari mein 1,500 tokens ki chat ka cost 45 paise hoga.

Dono figures akele dikhne mein darane wale nahi hain. Lekin jo company mahine mein ek lakh chats sambhalti hai, uske liye farq ek rounding error aur budget ki ek line ke beech ka hai.

## Context window

Model ko jo bhi request jaati hai, woh ek tay size ke andar fit honi chahiye. Size tokens mein ginta hai, sentences mein nahi. Usmein sab kuch aata hai: jo aap bhejte hain, instructions, documents, aur jo jawaab wapas aata hai. Is limit ko *context window* kehte hain.

::: key Sab kuch table par hona chahiye
Model ko jawaab dene ke liye jo bhi use karna ho, woh context window ke andar fit hona chahiye, jaise table par rakhe kaagaz. Agar kuch fit nahi hota, toh model use dekhta nahi, aur batata bhi nahi. Anaya ne envelope par doosri line likhi: is conversation ke baare mein usse jo kuch pata hona chahiye, woh table par hona chahiye.
:::

## Attention: "it" ko "trophy" kaise mila

Meenakshi ne Anaya se poochha ki is sentence mein "it" ka kya matlab hai: "The trophy did not fit in the suitcase because it was too big". Anaya ne kaha, trophy. Kyunki agar suitcase bada hota, toh trophy fit ho jaati.

Meenakshi ne dhyaan dilaya ki Anaya ne abhi kya kiya. Usne sentence mein peeche dekha, candidates ko tola, aur woh chuna jo samajh mein aata tha. Jitne bhi pronouns usne zindagi mein samjhe hain, sab isi skill par tike the.

Aaj ke language models jis design par bane hain, use *transformer* kehte hain. Uski central mechanism hai *attention*. Text ke har tukde ke liye attention yeh tay karti hai ki agla kya aayega, yeh andaaza lagane ke liye baaki kaun se tukde sabse zyada maayne rakhte hain. Jab model "it" par pahunchta hai, toh attention hi use "it" ko "suitcase" se nahi, "trophy" se jodne deti hai.

::: watch Ek clue, explanation nahi
Ek model mein kai layers hoti hain, aur har layer mein kai attention mechanisms. Uska jawaab sab milkar deti hain. Attention ki pictures kabhi-kabhi is saboot ki tarah dikhayi jaati hain ki model ne wahi kyun kaha. Yeh waisa hi hai jaise brain scan dikhakar dawa karna ki aapko soch pata chal gayi.
:::

## Model banana aur use chalana

Log aksar do alag activities ko ek maan lete hain, jabki unka cost bahut alag hai. Ek hai model banana. Doosri hai use chalana.

Banana kai stages mein hota hai.

1. *Pre-training* mein model web, kitaabon aur code ke bahut zyada likhe hue text par agla token predict karna seekhta hai. Isme mahine lagte hain aur karodon rupaye kharch hote hain. Jo nikalta hai, woh kisi bhi text ko aage badha sakta hai, lekin instructions par bharose se nahi chalta.
2. *Instruction tuning* mein use instructions aur achhe jawaabon ke jodon par aur train kiya jaata hai, taaki woh instructions follow karna seekhe.
3. Teesre stage mein log jawaabon ke jode dekhkar behtar wala chunte hain, aur model ko aise jawaab pasand karna sikhaya jaata hai jaise unhone chune. Ise aksar insaani feedback se seekhna kehte hain. Isse model zyada helpful aur zyada careful banta hai.

Table: Model banana aur use chalana
| | Banana (teen stages) | Chalana (inference) |
| --- | --- | --- |
| Kya hota hai | Model seekhta hai | Model ek request ka jawaab deta hai |
| Kya weights badalte hain? | Haan | Nahi |
| Kis par asar padta hai | Model use karne wale har kisi par, hamesha ke liye | Sirf us ek jawaab par |
| Cost | Mahino ki mehnat aur karodon rupaye | Har baar token ke hisaab se chhota charge |

Table mein *weights* ka naam aaya. Yeh model ke andar ke arabon numbers hain, jinmein woh sab kuch hai jo model ne seekha. Aap unhe bahut bade dials ka ek set samajh sakte hain. Model ne jo bhi example dekha, usne har dial ko thoda ghumaya. Banane ke teeno stages weights ko badalte hain.

Taiyaar model ko chalana *inference* kehlata hai, aur isme weights jaise the waise hi rehte hain. Jab Sahaj ka chatbot kisi customer ko jawaab deta hai, tab inference chal raha hota hai. Uske liye token ke hisaab se charge lagta hai, aur baad mein model bilkul waisa hi rehta hai. Customer ne jo type kiya, usne bas us ek jawaab ko shape diya, aur phir woh chala gaya.

## Do tarah ke AI

Kuch AI ek kaam ke liye label ya number batata hai. Yeh message spam hai ya nahi? Kya yeh customer chhod dega? Agle mahine ki sales kitni hogi? Isse *predictive AI* kehte hain. Ise ek hi kaam ke labelled examples par train kiya jaata hai. Yeh chalane mein sasta hota hai, aur woh ek kaam achhe se karta hai.

Doosra tarah hai *generative AI*. Woh naya text, images ya code banata hai. Aap sirf apna sawaal badalkar use kai kaamon par laga sakte hain. Yeh chalane mein mehnga hota hai, aur bill utna badhta hai jitna andar jaane wala aur bahar aane wala text lamba ho. Language model text ke liye generative AI hai.

Har problem ko doosre tarah ki zaroorat nahi hoti. Imran ne napkin par dabbe-dar-dabba dekha. Table mein uska decision hai.

Table: Guard ke kis hisse ko kaun si machine chahiye
| Hissa | Kya chahiye | Kyun |
| --- | --- | --- |
| Pattern checker | Koi AI nahi | 12 digits ka rule, ek rule hi hai |
| Name-and-place finder | Chhota predictive AI | Har word ko insaan, jagah, ya dono nahi, aise mark karne ke liye train hua, aur kuch nahi |
| Context judge | Language model | Use sentence padhkar judgement lena hai, aur woh mehnga hoga, isliye usse kam se kam sentences ke baare mein poochhna chahiye |
| Rule-keeper | Ordinary code | Woh pehle se liye gaye decisions lagata hai |

Chaar hisson mein se sirf ek ko bade machine ki zaroorat hai. Imran ne isse jo rule nikala, woh ek sentence mein tha: sabse sasti cheez use karo jo kaam kar de, aur mehngi cheez ko un sawaalon ke liye bacha kar rakho jinhe sirf wahi hal kar sakti hai.

## Saaraansh

Language model ek aisa program hai jisne seekha hai ki agla text kya aayega. Isliye woh likely cheezon mein achha hai, aur sach par bharose ke laayak nahi.

- Woh tokens padhta hai aur unhi ke hisaab se charge hota hai. Ek sentence mein kitne tokens hain, yeh tool aur language par depend karta hai. Isliye use naapiye, maan mat lijiye.
- Jawaab dene ke liye usse jo kuch use karna ho, woh context window mein hona chahiye. Jo nahi aata, woh use dikhta hi nahi.
- Attention transformer ke andar text ke ek tukde ko doosre se jodti hai. Woh model ke behaviour ka ek clue hai, uski explanation nahi.
- Model banana (pre-training, instruction tuning, insaani feedback se seekhna) uske weights sab ke liye badal deta hai. Use chalana, yaani inference, sirf ek jawaab badalta hai.
- Predictive AI ek kaam ke liye label ya number deta hai. Generative AI kai kaamon ke liye naya content banata hai, zyada cost par. Isliye sabse sasta tool jo kaam kare, wahi sahi hai.

Agle chapter mein Anaya model ke saath apni pehli conversation karti hai, aur yeh sab kaam karte hue dekhti hai.

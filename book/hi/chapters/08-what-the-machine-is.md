---
title: Machine Asal Mein Kya Hai
summary: Jis product manager ne do saal "powered by AI" kaha hai, woh iska matlab samjhane ki koshish karti hai aur nahi kar paati. Chapter jawaab ko neeche se banata hai: language models, tokens, context window, attention, model kaise banta aur chalta hai, aur do tarah ke AI.
course: a8 ch05
goals:
  - samjhana ki language model kya karta hai, aur woh jo sambhav hai usme achha kyun hai aur jo sach hai usme nahi
  - text ko tokens mein ginna, aur dekhna ki ginti bhasha aur tool ke hisaab se kyun badalti hai
  - context window batana aur yeh ki jo text uske andar nahi aata uska kya hota hai
  - model banane aur use chalane mein, aur predictive AI aur generative AI mein antar karna
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

March ke teesre Sunday ko Anaya ne Dr. Meenakshi Rao se kaha ki woh do saal se meetings mein "yeh AI se chalta hai" kehti aa rahi hai aur jab tak woh sach mein na samjhe ki iska matlab kya hai, tab tak ise kehna band karna chahti hai. Meenakshi thodi der hansi, bina kisi kadvaahat ke, aur poochha ki Anaya ke hisaab se is vaakya ka matlab kya hai. Anaya ne kaha ki yeh woh software hai jisne internet padha hai, jo sawaal samajhta hai, aur jiske paas ek tarah ka dimaag hai jo train kiya gaya hai. Usne dekha ki har vaakya pichhle se zyada dhundhla tha.

"Tumne ek kinvadanti bataayi hai," Meenakshi ne kaha. "Chalo machine ki baat karte hain."

Yeh chapter machine ki baat karta hai. Woh ek jaani-pehchaani cheez se shuru hota hai, phone ke predictive keyboard se, aur kadam-dar-kadam un hisson tak pahunchta hai jinhe ek product manager ko engineers se behas karne ke liye samajhna padta hai: woh kya hai, kaise padhta hai, kitna sambhal sakta hai, kaise banta hai aur pehle ke AI se kaise alag hai.

## Case: ek kinvadanti aur ek machine

Anaya ka dhundhla vivaran aam hai. Woh system ko ek dimaag ki tarah maanta hai, aur dimaag se samajh, jaankari aur faisla jhalakta hai, jinmein se kisi ki bhi guarantee nahi. Zyada vinamra vivaran zyada kaam ka hai, kyunki woh bataata hai ki system kya achha karega aur kahan fail hoga, aur jahan fail hota hai wahin zyadatar product ki samasyayein shuru hoti hain. Neeche ke sections us vivaran ko kram se banate hain.

## Ek keyboard jisne sab padha

Jab Anaya apne phone par "See you at the" type karti hai, keyboard "office", "station" aur "airport" sujhata hai. Jab woh Roman-lipi mein Hindi "Kal milte" type karti hai, woh "hain", phir "hai", phir "hum" deta hai. Phone yeh nahi jaanta ki kal woh kahan jaa rahi hai. Usne dekha hai ki log kya type karte hain aur woh jaanta hai ki aam taur par agla shabd kaun sa aata hai.

Us keyboard ko bada kijiye. Use har kitaab, akhbaar, forum post aur manual padhne dijiye jo use diya ja sake, kai baar, aur use bahut-bahut bada kar dijiye. Use ek nahi balki hazaaron shabd ek ke baad ek anumaan karne dijiye, har anumaan agle mein jaata hua. Nateeja ek *language model* hai.

::: def Language model
Ek program jisne bahut saare likhe hue text se seekha hai ki agla text kya aane wala hai. Woh jawaab ek-ek tukde ka anumaan karke likhta hai. Woh kuch dhoondhta nahi aur use nahi pata ki kya sach hai. Use pata hai ki kya sambhav hai.
:::

Jab model ne jo padha uska zyadatar hissa sach tha, toh sambhav aur sach bahut milte hain. Jahan woh alag hote hain, wahin se language model par bane har product ki mushkilein shuru hoti hain. Anaya ne ek envelope ke peeche "sambhav, sach nahi" likha aur uske chaaron taraf dabba bana diya.

## Tokens: machine kaise padhti hai

Model akshar ya poore shabd nahi padhta. Woh *tokens* padhta hai, text ke tukde jo aksar poora shabd hote hain aur kabhi-kabhi sirf uska ek hissa. English mein ek token aam taur par lagbhag teen-chauthai shabd hota hai. Chhote aam shabd aksar ek token hote hain. Dulabh shabd, aur woh sab kuch jo aisi lipi mein likha ho jise model ne kam dekha ho, kai tukdon mein tut jaata hai.

Imran Qureshi ne ek aise page par yeh dikhaya jo tukdon ko rang mein dikhata tha. Usne ek hi matlab teen tareeke se likha.

Table: Ek vaakya, teen spelling, ek tool par teen token ginti
| Roop | Text | Tokens |
| --- | --- | --- |
| English | I want to know my loan status. | 8 |
| Roman-lipi Hindi | mujhe apne loan ka status jaanna hai. | 12 |
| Devanagari Hindi | wahi matlab Hindi lipi mein | 26 |

Vaakya ka matlab har baar ek hai, aur machine ko teen alag maatra ka text dikhta hai. Yeh figure ek tool par ek din ke hain. Doosra tool doosre numbers dega, aur is table se koi bhi andaaza ka niyam nahi le jaana chahiye. Agar koi kehta hai ki Hindi English se do guna mehnga hai, toh teen sawaal poochhne chahiye: kaun sa tool, kaun sa vaakya aur kaun sa din. Jawaab hai naapna.

Ginti isliye zaroori hai ki providers token ke hisaab se charge karte hain, jo bheja jaata hai uske liye bhi aur jo wapas aata hai uske liye bhi. Maan lijiye, aasaan hisaab ke liye banaye hue ek kalpanik daam par, ki provider har dus lakh token ke liye teen sau rupaye leta hai. Chhe sau token ki ek chat ka kharcha lagbhag attharah paise hoga. Devanagari mein pandrah sau token ki chat ka kharcha paintaalis paise. Dono figure akele darane wale nahi hain. Jo company mahine mein ek lakh chats sambhalti hai, uske liye antar ek rounding error aur budget ki ek line ke beech ka hai.

## Context window

Model ko har request ek tay size ke andar fit honi chahiye, aur size tokens mein ginta hai, vaakyon mein nahi. Usme sab kuch aata hai: jo bheja jaata hai, koi bhi instructions, koi bhi documents, aur jo jawaab wapas aata hai. Yeh seema *context window* hai.

::: key Sab kuch table par hona chahiye
Model ko jawaab dene ke liye jo bhi istemaal karna ho woh context window ke andar fit hona chahiye, jaise table par rakhe kaagaz. Agar kuch fit nahi hota toh model use dekhta nahi, aur batata bhi nahi. Anaya ne envelope par doosri line likhi: is conversation ke baare mein usse jo kuch pata hona chahiye woh table par hona chahiye.
:::

## Attention: "it" ko "trophy" kaise mila

Meenakshi ne Anaya se poochha ki "The trophy did not fit in the suitcase because it was too big" vaakya mein "it" ka kya matlab hai. Anaya ne kaha trophy, kyunki agar suitcase bada hota toh trophy fit ho jaati. Meenakshi ne dhyaan dilaya ki Anaya ne vaakya mein peeche dekha, ummeedwaaron ko tola aur woh chuna jo samajh aata tha, aur yeh ki jitne bhi pronoun usne kabhi samjhe, sab is kaushal par tike the.

Jis design par aaj ke language models bane hain woh *transformer* hai, aur uski mukhya vyavastha *attention* hai. Text ke har tukde ke liye attention yeh tay karti hai ki agle ka anumaan lagane ke liye baaki kaun se tukde sabse zyada maayne rakhte hain. Jab model "it" par pahunchta hai, toh attention hi use us shabd ko "suitcase" se nahi balki "trophy" se jodne deti hai.

::: watch Ek sanket, vyakhya nahi
Ek model ki kai parat hoti hain, aur har ek mein kai attention hoti hain, aur uska jawaab sab milkar aata hai. Attention ki tasveerein kabhi-kabhi is saboot ki tarah pesh ki jaati hain ki model ne aisa kyun kaha. Yeh waisa hi hai jaise brain scan dikhakar dawa karna ki soch pata chal gayi.
:::

## Model banana aur use chalana

Do gatividhiyan aksar ek maan li jaati hain aur unka kharcha alag hai. Ek hai model banana, doosri use chalana.

Banana kai stages mein hota hai. *Pre-training* mein model web, kitaabon aur code ke bahut zyada likhe hue text par agla token anumaan karna seekhta hai. Isme mahine lagte hain aur karodon kharch hote hain. Jo nikalta hai woh kisi bhi text ko aage badha sakta hai par nirdesh bharose se nahi maanta. *Instruction tuning* mein use nirdesh aur achhe jawaab ke udaharanon par aur train kiya jaata hai, taaki woh nirdesh maane. Teesre stage mein log jawaabon ke jode compare karke behtar chunte hain, aur model ko un jaise jawaab pasand karna sikhaya jaata hai. Ise aksar insaani feedback se seekhna kehte hain, aur isse model zyada madadgaar aur saavdhaan banta hai.

Table: Model banana aur use chalana
| | Banana (teen stages) | Chalana (inference) |
| --- | --- | --- |
| Kya hota hai | Model seekhta hai | Model ek request ka jawaab deta hai |
| Kya weights badalte hain? | Haan | Nahi |
| Kisko asar padta hai | Model istemaal karne wale har kisi par, hamesha ke liye | Sirf us ek jawaab par |
| Kharcha | Mahino ki mehnat aur karodon rupaye | Har baar token ke hisaab se chhota charge |

Banane ke teeno stages model ke *weights* badalte hain, jo uske andar ke arabon number hain jo us sab ko sambhaalte hain jo usne seekha. Unhe ek bahut bade dials ke set ki tarah sochiye, jinme se har ek ko model ke dekhe har udaharan ne thoda ghumaya. Taiyaar model ko chalana *inference* hai. Woh weights ko jaisa tha waisa chhodta hai. Jab Sahaj ka chatbot kisi customer ko jawaab deta hai, tab inference chal raha hota hai, uske liye token ke hisaab se charge lagta hai, aur uske baad model bilkul waisa hi rehta hai. Customer ne jo type kiya usne us ek jawaab ko aakaar diya aur phir chala gaya.

## Do tarah ke AI

Kuch AI ek kaam ke liye label ya number batata hai: yeh message spam hai ya nahi, kya yeh customer chhod dega, agle mahine ki bikri kitni hogi. Yeh *predictive AI* hai. Ise ek hi kaam ke labelled udaharanon par train kiya jaata hai, yeh chalane mein sasta hota hai, aur woh ek kaam achha karta hai. Doosra tarah *generative AI* hai. Woh naya text, tasveer ya code banata hai, use pooche gaye sawaal badal kar kai kaamon par lagaya ja sakta hai, aur chalane mein zyada mehnga hota hai, bill ke saath jo andar-baahar jaane wale text ki lambai ke saath badhta hai. Language model text ke liye generative AI hai.

Har samasya ko doosre tarah ki zaroorat nahi hoti. Imran ne napkin par dabbe-dar-dabba dekha.

Table: Guard ke kis hisse ko kaun si machine chahiye
| Hissa | Kya chahiye | Kyun |
| --- | --- | --- |
| Pattern checker | Koi AI nahi | Baarah ankon ka rule ek rule hi hai |
| Name-and-place finder | Chhota predictive AI | Har shabd ko insaan, jagah ya dono nahi ke roop mein chinhit karne ke liye train hua, aur kuch nahi |
| Context judge | Language model | Use vaakya padhkar faisla karna hai, aur woh mehnga hoga, isliye usse kam se kam vaakyon ke baare mein poochhna chahiye |
| Rule-keeper | Saadharan code | Woh pehle se liye gaye faisle lagata hai |

Chaar hisson mein se ek ko bade model ki zaroorat hai. Imran ne isse jo niyam nikala woh ek vaakya mein tha: sabse sasti cheez istemaal karo jo kaam kare, aur mehngi cheez ko un sawaalon ke liye rakho jinhe sirf wahi hal kar sakti hai.

## Saaraansh

Language model woh program hai jisne seekha hai ki agla text kya aayega, isliye woh sambhav mein achha hai aur sach par bharose ka nahi.

- Woh tokens padhta hai aur unhi ke hisaab se charge hota hai. Ek vaakya mein kitne tokens hain yeh tool aur bhasha par nirbhar hai, aur use naapna chahiye, maan nahi lena chahiye.
- Jawaab dene ke liye usse jo kuch istemaal karna ho woh context window mein hona chahiye, aur jo nahi aata woh use dikhta nahi.
- Attention ek transformer ke andar text ke ek tukde ko doosre se jodti hai. Woh model ke vyavhaar ka ek sanket hai, uski vyakhya nahi.
- Model banane (pre-training, instruction tuning, insaani feedback se seekhna) se uske weights sab ke liye badalte hain. Use chalane, yaani inference, se sirf ek jawaab badalta hai.
- Predictive AI ek kaam ke liye label ya number deta hai. Generative AI kai kaamon par naya content banata hai, zyada kharche par, isliye sabse sasta tool jo kaam kare wahi sahi hai.

---
title: Asal Mein Kitna Kharch Hota Hai
summary: "Tokens par depend karta hai" finance director ke liye jawaab nahi hai. Ek product manager guard ki sahi keemat nikaalti hai, ek hi tool ke teen bilkul alag totals paati hai, aur dekhti hai ki guard ke hisse kis order mein chalte hain, yeh sabse sasta design decision hai. Is chapter mein cascade aata hai.
course: ch15
goals:
  - samjha paana ki seedha cost ka hisaab aksar kam kyun nikalta hai
  - un chaar multipliers ko ginana jo asli design jodta hai, aur batana ki har ek kyun ek choice hai
  - ek hi tool ke teen designs compare karna aur samjhana ki cascade kya bachati hai
  - cost ko speed ke saath report karna, aur batana ki jab aapko us value ka pata na ho jo woh bachata hai, toh cost ka figure kya chhod deta hai
terms:
  - cascade | aisa design jo har request ko sabse sasti cheez ke paas bhejta hai jo kaam kar sakti hai, aur sirf unhe agle, mehnge step par bhejta hai jo check mein fail ho jaate hain | cascades
---

July ke pehle hafte mein Anaya ne guard ka plan Sahaj ki finance director ke saamne rakha. Woh ek precise insaan thi, fountain pen se likhti thi aur bahut kam bolti thi. Das minute baad director ne apne pen ka cap lagaya aur poochha ki company ke volume par guard ko chalane mein mahine ka kitna kharch aayega.

Anaya ne jawaab diya ki lagbhag 70,000 rupaye. Matlab 3,00,000 messages par har message ke lagbhag 23 paise.

"Yeh model call ki cost hai," director ne kaha. "Kya yeh system ki cost hai?" Anaya itni der ruki jitni der mein insaan ko ehsaas hota hai ki usne ek word laparwahi se bol diya. Usne kaha ki use pata karna padega. Is chapter mein aap dekhenge ki use kya mila.

## Case: ek number maanga, do diye

Anaya ne director ko do figures diye the, ek cost per message aur ek monthly total. Poori shaam use lagta raha ki yeh dono galat hain. Toh usne dobara hisaab lagaya.

## Seedha hisaab, aur woh kam kyun nikalta hai

Cost ke har case ki shuruaat usi hisaab se hoti hai, aur woh sahi hai. Jitne tokens andar ja rahe hain unhe andar ke per-token price se multiply kijiye. Phir jitne tokens bahar aa rahe hain unhe bahar ke per-token price se. Dono jod dijiye.

Careful judge ko ek saaf call ke liye, 600 tokens andar aur 80 bahar, saal bhar istemaal kiye gaye banaye hue prices par, yeh 23 paise aaya.

Galti hisaab mein nahi hai. Woh is mein hai ki hisaab kis par lagaya gaya. Woh ek saaf call ki keemat batata hai, aur asli feature lagbhag kabhi ek saaf call nahi hota. Is tarah banaye business cases aam taur par 3 se 20 guna kam hote hain. Iski chaar wajah hain, aur Anaya in sab se pehle chapters mein mil chuki thi.

Table: Chaar multipliers jo seedha hisaab chhod deta hai
| Multiplier | Kyun zaroori hai | Guard ka figure |
| --- | --- | --- |
| Kitna bheja jaata hai | 3 ki jagah 8 tukde text bhejne se input lagbhag teen guna ho jaata hai. Guard kuch fetch nahi karta tha, lekin lambe messages ko tukdon mein kaatna padta tha, aur do mein kata message padhne mein do guna lagta hai | Ek message average mein lagbhag 1.2 tukde ka tha |
| Retries | Jab koi jawaab check mein fail hota hai aur dobara maanga jaata hai, toh poori request doosri baar bheji jaati hai | Lagbhag 12 mein se 1 message retry hua |
| Steps | Loop har round mein poori conversation dobara bhejta hai, isliye 6 rounds ki cost 6 guna nahi, ek call ka lagbhag 10 guna hoti hai | Ek unsure message mein lagbhag 4 rounds lage, yaani ek call ka lagbhag 5.5 guna |
| Chhupa hua thinking | Reasoning model ka working output ki tarah charge hota hai, aur dikhne wale jawaab se usually bahut zyada hota hai | Careful judge ke liye lagbhag 6 guna |

In mein se har ek Anaya ki apni ek choice thi. Matlab har ek badli ja sakti thi.

## Ek tool, teen number

Us raat usne hisaab dobara lagaya, aur use ek ki jagah teen jawaab mile. Teeno sach the, aur teeno alag tool ka bayaan karte the.

Pehla woh figure tha jo usne director ko diya tha. Careful judge ko ek saaf call, 23 paise, 3,00,000 messages mein se har ek ke liye, yaani mahine ka lagbhag ₹69,000. Yeh ek aise tool ki keemat thi jo wujood mein tha hi nahi.

Doosra woh guard tha jo seedhe tareeke se banaya jaye. Har message careful judge ke paas jaata hai, jo 4 rounds ke lookups aur chhupe hue reasoning se guzarta hai. 23 paise ko rounds ke liye 5.5 se, aur thinking ke liye 6 se multiply kijiye. Yeh lagbhag ₹7.60 per message hai, yaani mahine ka ₹22.8 lakh. Yeh pehle figure se 33 guna hai. Aur yeh wahi cheez hai jo koi team, agar usne is baare mein socha nahi, apne aap bana leti hai.

Teesra woh guard tha jo asal mein tha. Pattern checker har us cheez ko pakadta tha jiski ek fixed shape hoti, aur uski cost kuch nahi thi. Names aur places dhoondhne wala finder ek chhoti model thi, lagbhag 4 paise per message. Extra tukdon aur retries ke saath yeh 5 paise se thoda upar nikla. Sirf unsure messages, har 100 mein lagbhag 6, kabhi careful judge tak pahunchte the, aur unke liye poore ₹7.60 dene padte. ₹7.60 ka 6 percent 46 paise hai. 5 paise aur 46 paise milakar lagbhag 51 paise per message, yaani mahine ka ₹1.53 lakh.

Table: Ek hi tool ke teen designs
| Design | Per message | Per month |
| --- | --- | --- |
| Ek saaf call, jaisa pehle bataya tha | 23 paise | lagbhag ₹69,000 |
| Sab kuch careful judge ko | lagbhag ₹7.60 | lagbhag ₹22.8 lakh |
| Guard jaisa banaya gaya, sasti cheezein pehle | lagbhag 51 paise | lagbhag ₹1.53 lakh |

Pehla figure sach ke aadhe se bhi kam tha. Doosra sach se 15 guna tha. Aur doosre aur teesre mein farq sirf is baat ka tha ki hisse kis order mein chalte hain.

## Sasti cheez pehle

Is order ka ek naam hai. *Cascade* har request ko sabse sasti cheez ke paas bhejta hai jo kaam kar sakti hai, aur sirf unhe agle, mehnge step par bhejta hai jo check mein fail ho jaate hain. Guard ek cascade tha. Team ne use is tarah kisi aur wajah se banaya tha: speed, aur careful judge ko un cases ke liye bachaye rakhna jinhe sochne ki zaroorat hai. Bachat bina bulaye saath aa gayi.

::: key Cascades kaam kyun karte hain
Zyadatar asli requests simple hoti hain. Ek chhoti model, ya guard ke case mein ek seedha rule, unhe achhi tarah sambhal leta hai. Mehnga wala gine-chune mushkil cases ke liye rakha jaata hai. Imran ne ise cost ke baare mein team ke kar sakne wali sabse asardaar cheez kaha.
:::

Usne aur chaar upaay ginaye, bachat ke lagbhag order mein.

Table: Cost kam karne ke aur tareeke, bachat ke lagbhag order mein
| Upaay | Comment |
| --- | --- |
| Model chuniye | Ek hi provider ki range mein prices 10 ya 100 guna alag hote hain, jo list ki kisi bhi cheez se zyada matter karta hai |
| Kam bhejiye | Jo token bheja hi nahi, uski cost zero hai, aur behtar order ki shortlist se kam tukde bhejne padte hain |
| Request ke na badalne wale aage ke hisse ko cache kijiye | Wahi start, sasta bill |
| Jo kaam ruk sakta hai, woh baad mein kijiye | Raat mein, batches mein kiya gaya kaam sasta hota hai. Careful judge ki doosri nazar, jo pehle se background mein chalti thi, batch ho sakti thi |

## Ek nahi, teen number

Tuesday ko Anaya table aur ek ghante mein likhe gaye ek statement ke saath director ke paas wapas gayi. Tool ki cost mahine ke lagbhag 1,50,000 rupaye hai, 3,00,000 messages par, lagbhag 51 paise har ek. Cost zyadatar careful judge se aati hai, jo 100 mein se 6 messages dekhta hai. Agar yeh 6 badhkar 10 se upar jaata hai, ya retries 5 mein se 1 se upar jaate hain, ya provider apne prices badal deta hai, toh yeh figure galat ho jaayega.

Director ne kaha ki woh is number ka bachaav kar sakti hai.

Anaya ne jodha ki speed bhi ek cost hai. Ek sasta lekin dheema tool utna hi bura fail ho sakta hai jitna ek tez lekin mehnga. Isliye woh hamesha teen cheezein saath report karegi. Pehli cost. Doosri, ek message ko aam taur par kitna time laga, jo second ka ek chhota hissa tha. Teesri, dheeme messages ko kitna time laga, jo background mein gaye the. Ek akela average dheeme hisse ko chhupa leta.

## Hisaab ka doosra aadha hissa

Phir director ne poochha ki tool kya bachata hai, aur Anaya ke paas jawaab nahi tha. Uske paas cost thi aur benefit nahi. Us dopahar ki asli baat yahi thi.

Aise features ka jo sawaal sabse zyada decide karta hai, uska tokens se koi lena-dena nahi hota. Woh yeh hai ki kya feature scale par samajh mein aata hai. Agar ek query ki cost teen rupaye hai aur jis value ko woh bachati hai woh do rupaye ki hai, toh koi bhi tuning use nahi bacha sakti.

Usne pehle aadhe hisse ki keemat dhyaan se nikali thi aur doosre ke liye koi number nahi tha. Jab identity number leak hota hai toh Sahaj ko kitna padta hai? Ek investigation hogi, ek notice, shayad ek customer jo chhod jaaye, aur agar baat bigdi toh regulator ka dhyaan. Uske paas koi figures nahi the, aur use shak tha ki kisi ke paas nahi hain.

Usne director se kaha ki woh pata karegi, ya pata karegi ki kisi ko nahi pata, aur yeh bol degi. Director ne yeh maan liya aur pen ka cap wapas laga diya. Anaya ne specification mein, jo abhi tak nahi pata uske section mein, ek line jodi: leak ki cost kya hai? Lakshmi se poochhna.

## Summary

Seedha cost ka hisaab hai tokens andar aur bahar, unke prices se guna. Yeh sahi hai, aur aksar 3 se 20 guna kam nikalta hai, kyunki yeh ek saaf call ki keemat batata hai.

- Asli design ise multiply karta hai: har baar kitna bheja jaata hai, request kitni baar retry hoti hai, loop mein kitne rounds lagte hain, aur reasoning model kitna chhupa hua thinking karta hai. Har ek design choice hai aur badli ja sakti hai.
- Cascade sabse sasta tareeka pehle chalata hai aur sirf failures ko mehnge tareeke tak le jaata hai. Isse woh farq pad sakta hai jo ek lakh ke tool aur bees lakh ke tool ke beech hota hai.
- Cost ko speed ke saath report kijiye, dheeme cases samet.
- Jis value ko cost bachati hai uske bina, cost sirf aadha hisaab hai.

Agle chapter mein aap plain text ko peeche chhodkar dekhenge ki jab customers photographs bhejte hain toh kya hota hai.

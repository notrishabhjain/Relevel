---
title: Asal Mein Kitna Kharch Hota Hai
summary: "Tokens par depend karta hai" finance director ke liye jawaab nahi hai. Anaya guard ki sahi keemat nikaalti hai. Use ek hi tool ke teen bilkul alag totals milte hain. Sabse sasta upaay hai guard ke hisson ke chalne ka order. Is chapter mein cascade aata hai.
course: ch15
goals:
  - samajhna ki seedha cost ka hisaab aksar kam kyun nikalta hai
  - un chaar cheezon ke naam jaanna jo asli bill ko bada karti hain, aur dekhna ki har ek ek choice hai
  - ek hi tool ke teen designs compare karna aur dekhna ki cascade kya bachata hai
  - cost ko speed ke saath report karna, aur batana ki jab us value ka pata na ho jo woh bachata hai, toh cost kya chhod deta hai
terms:
  - cascade | clinic jaisa jahan pehle nurse sabko dekhti hai aur specialist sirf mushkil cases dekhta hai; har request sabse sasti cheez ke paas jaati hai jo kaam kar sake, aur sirf jo check mein fail ho woh agle, mehnge step par jaati hai | cascades
---

July ke pehle hafte mein Anaya ne guard ka plan Sahaj ki finance director ko dikhaya. Woh bahut dhyaan se kaam karti thi aur fountain pen se likhti thi. Woh bahut kam bolti thi. Das minute baad usne pen ka cap laga diya. Phir poochha ki company ke volume par guard ko chalane mein mahine ka kitna kharch aayega.

Anaya ne kaha, lagbhag 70,000 rupaye. Yaani 3,00,000 messages par har message ke lagbhag 23 paise.

"Yeh model call ki cost hai," director ne kaha. "Kya yeh poore system ki cost hai?"

Anaya chup ho gayi. Laga jaise usne ek shabd bina soche bol diya ho. Usne kaha ki woh pata karegi. Is chapter mein aap dekhte hain ki use kya mila.

## Case: ek number maanga, do diye

Anaya ne director ko do number diye the. Ek cost per message. Doosra mahine ka total. Poori shaam use lagta raha ki yeh dono galat hain. Toh usne hisaab dobara lagaya.

## Seedha hisaab, aur woh kam kyun nikalta hai

Taxi ke meter ki tarah sochiye. Woh doori ginta hai, lekin red light par ruka hua time ya do baar ghoomi hui sadak nahi ginta. Seedha hisaab aisa hi hai.

Cost ke har case ki shuruaat usi hisaab se hoti hai, aur woh hisaab sahi hai. Andar jaane wale tokens ginye (text ke chhote tukde jo aap bhejte hain). Unhe andar ke per-token price se guna kijiye. Bahar aane wale tokens ginye. Unhe bahar ke per-token price se guna kijiye. Dono jod dijiye.

Careful judge (woh mazboot model jo unsure cases check karta hai) ko ek saaf call dijiye. 600 tokens andar, 80 bahar. Prices wahi banaye hue hain jo saal bhar use hue. Jawaab hai 23 paise.

Hisaab galat nahi hai. Galti is mein hai ki woh kis par lagaya gaya. Woh ek saaf call ki keemat batata hai. Asli feature lagbhag kabhi ek saaf call nahi hota. Is tarah ke business cases aksar 3 se 20 guna kam hote hain. Iski chaar wajah hain. Anaya in chaaron se pehle ke chapters mein mil chuki thi.

Table: Chaar multipliers jo seedha hisaab chhod deta hai
| Multiplier | Kyun zaroori hai | Guard ka figure |
| --- | --- | --- |
| Kitna bheja jaata hai | 3 ki jagah 8 tukde text bhejne se input lagbhag teen guna ho jaata hai. Guard kuch fetch nahi karta tha. Lekin lambe messages tukdon mein kaate jaate the, aur do mein kata message padhne mein do guna lagta hai | Ek message average mein lagbhag 1.2 tukde ka tha |
| Retries | Jawaab check mein fail hua, toh dobara maanga jaata hai. Poori request doosri baar bheji jaati hai | Lagbhag 12 mein se 1 message retry hua |
| Steps | Loop (wahi step baar baar karna) har round mein poori conversation dobara bhejta hai. Isliye 6 rounds ki cost 6 guna nahi, ek call ka lagbhag 10 guna hoti hai | Ek unsure message mein lagbhag 4 rounds lage, yaani ek call ka lagbhag 5.5 guna |
| Chhupa hua thinking | Reasoning model ka rough kaam output ki tarah charge hota hai. Dikhne wale jawaab se woh usually bahut zyada hota hai | Careful judge ke liye lagbhag 6 guna |

In mein se har ek Anaya ki apni choice thi. Isliye har ek badli ja sakti thi.

## Ek tool, teen number

Us raat usne hisaab dobara lagaya. Use ek nahi, teen jawaab mile. Teeno sach the. Har ek alag tool ke baare mein tha.

Pehla woh number tha jo usne director ko diya tha. Careful judge ko ek saaf call, 23 paise. Yeh 3,00,000 messages mein se har ek ke liye ginna, toh mahine ka lagbhag ₹69,000. Yeh ek aise tool ki keemat thi jo wujood mein tha hi nahi.

Doosra woh guard tha jo seedhe tareeke se banaya jaye. Har message careful judge ke paas jaata hai. Judge 4 rounds ke lookups aur chhupe reasoning karta hai. Teisi paise lijiye. Rounds ke liye 5.5 se guna kijiye. Thinking ke liye 6 se guna kijiye.

Yeh lagbhag ₹7.60 per message hai. Mahine ka ₹22.8 lakh. Yeh pehle number se 33 guna hai. Jis team ne cost ke baare mein socha nahi, woh bilkul yahi bana leti.

Teesra woh guard tha jo asal mein tha. Pattern checker har us cheez ko pakadta tha jiski ek fixed shape hoti, aur uski cost kuch nahi thi. Names aur places dhoondhne wala finder ek chhota model tha. Uski cost lagbhag 4 paise per message thi. Extra tukdon aur retries ke saath yeh 5 paise se thoda upar nikla.

Sirf unsure messages, har 100 mein lagbhag 6, kabhi careful judge tak pahunchte the. Unke liye poore ₹7.60 dene padte. ₹7.60 ka 6 percent 46 paise hai. 5 paise aur 46 paise milakar lagbhag 51 paise per message. Yaani mahine ka ₹1.53 lakh.

Table: Ek hi tool ke teen designs
| Design | Per message | Per month |
| --- | --- | --- |
| Ek saaf call, jaisa pehle bataya tha | 23 paise | lagbhag ₹69,000 |
| Sab kuch careful judge ko | lagbhag ₹7.60 | lagbhag ₹22.8 lakh |
| Guard jaisa banaya gaya, sasti cheezein pehle | lagbhag 51 paise | lagbhag ₹1.53 lakh |

Pehla number sach ke aadhe se bhi kam tha. Doosra sach se 15 guna tha. Doosre aur teesre mein farq sirf is baat ka tha ki hisse kis order mein chalte hain.

## Sasti cheez pehle

Ek clinic sochiye. Nurse pehle sabko dekhti hai. Specialist sirf mushkil cases dekhta hai. Clinic sasta aur tez rehta hai.

Is order ka ek naam hai. *Cascade* har request ko sabse sasti cheez ke paas bhejta hai jo kaam kar sake. Sirf jo check mein fail ho, woh agle, mehnge step par jaata hai. Guard ek cascade tha. Team ne use kisi aur wajah se aise banaya tha. Unhe speed chahiye thi, aur careful judge ko un cases ke liye bachana tha jinhe sach mein sochna padta hai. Bachat bina maange saath aa gayi.

::: key Cascades kaam kyun karte hain
Zyadatar asli requests simple hoti hain. Ek chhota model unhe achhi tarah sambhal leta hai. Guard mein ek seedha rule sambhalta hai. Mehnga model gine-chune mushkil cases ke liye rakha jaata hai. Imran ne kaha ki cost ke liye team ka yeh sabse achha ek kaam hai.
:::

Usne cost ghatane ke chaar aur tareeke ginaye, bachat ke lagbhag order mein.

Table: Cost kam karne ke aur tareeke, bachat ke lagbhag order mein
| Upaay | Comment |
| --- | --- |
| Model chuniye | Ek hi provider ki range (ek company ke models) mein prices 10 ya 100 guna alag hote hain. Yeh list ki kisi bhi cheez se zyada matter karta hai |
| Kam bhejiye | Jo token bheja hi nahi, uski cost zero hai. Behtar order ki shortlist se kam tukde bhejne padte hain |
| Request ke na badalne wale aage ke hisse ko cache kijiye | Cache ka matlab hai copy rakhna taaki dobara kaam aaye. Wahi start, sasta bill |
| Jo kaam ruk sakta hai, woh baad mein kijiye | Raat mein, batches mein (kai ek saath) kiya gaya kaam sasta hota hai. Careful judge ki doosri nazar pehle se background mein chalti thi, toh woh batch ho sakti thi |

## Ek nahi, teen number

Tuesday ko Anaya director ke paas wapas gayi. Woh table aur ek chhota statement laayi, jise likhne mein use ek ghanta laga. Tool ki cost mahine ke lagbhag 1,50,000 rupaye hai. Yeh 3,00,000 messages par hai, lagbhag 51 paise har ek.

Zyadatar cost careful judge se aati hai, jo 100 mein se 6 messages dekhta hai. Agar yeh 6 badhkar 10 se upar jaaye, toh number galat ho jaayega. Agar retries 5 mein se 1 se upar jaayein, toh bhi. Agar provider apne prices badal de, toh bhi.

Director ne kaha ki woh is number ka bachaav kar sakti hai.

Anaya ne ek baat aur jodi. Speed bhi ek cost hai. Chai ke intezaar ko sochiye. Ek sasti dukaan jo bahut dheemi ho, utni hi buri tarah fail ho sakti hai jitni ek tez lekin mehngi. Isliye woh hamesha teen cheezein saath report karegi. Pehli, cost.

Doosri, ek message ko aam taur par kitna time laga. Woh second ka ek chhota hissa tha. Teesri, dheeme messages ko kitna time laga. Yeh woh the jo background mein gaye. Ek akela average dheeme hisse ko chhupa leta.

## Hisaab ka doosra aadha hissa

Phir director ne poochha ki tool kya bachata hai. Anaya ke paas jawaab nahi tha. Uske paas cost thi, benefit nahi. Us dopahar ka asli sabak yahi tha.

Taala kharidne ko sochiye. Taale ki keemat sirf aadha hisaab hai. Yeh bhi jaanna padta hai ki almaari ke andar kya hai. Aise features ka jo sawaal sabse zyada decide karta hai, uska tokens se koi lena-dena nahi. Sawaal yeh hai ki kya feature scale par samajh mein aata hai. Maan lijiye ek query ki cost teen rupaye hai aur jis value ko woh bachati hai woh do rupaye ki hai. Koi tuning use nahi bacha sakti.

Usne pehle aadhe hisse ki keemat dhyaan se nikali thi. Doosre ke liye koi number nahi tha. Identity number leak ho jaaye toh Sahaj ko kitna padta hai? Ek investigation hogi aur ek notice. Shayad koi customer chhod jaaye. Baat bigdi toh regulator ka dhyaan bhi. Uske paas koi figures nahi the. Use shak tha ki kisi ke paas nahi hain.

Usne director se kaha ki woh pata karegi. Ya pata karegi ki kisi ko nahi pata, aur yeh bol degi. Director ne yeh maan liya aur pen ka cap wapas laga diya. Anaya ne specification (tool ka likha hua plan) mein ek line jodi. Yeh us hisse mein gayi jo abhi tak nahi pata: leak ki cost kya hai? Lakshmi se poochhna.

::: key Ab aap yeh keh sakte hain
Model ko kaam dene ke baare mein teen sentences. Jahan N likha hai, wahan apna number rakhiye.
- Mere agent ka step limit pehle likha gaya, aur jo action undo nahi ho sakta use ek insaan approve karta hai.
- Maine apne judge ko apni marking se check kiya: N percent agreement. Maine disagreements padhe.
- Mere cost sum mein retries, loops aur hidden thinking shaamil hain: N rupaye mahina, ek saaf call ka number nahi.
:::

## Summary

Seedha cost ka hisaab hai tokens andar aur bahar, unke prices se guna. Yeh sahi hai. Lekin yeh aksar 3 se 20 guna kam nikalta hai, kyunki yeh ek saaf call ki keemat batata hai.

- Asli design ise bada karta hai. Yeh is par depend karta hai ki har baar kitna bheja jaata hai, request kitni baar retry hoti hai, loop mein kitne rounds lagte hain, aur reasoning model kitna chhupa hua thinking karta hai. Har ek design choice hai aur badli ja sakti hai.
- Cascade (clinic wala order) sabse sasta step pehle chalata hai. Sirf failures mehnge step par jaate hain. Isse woh farq pad sakta hai jo ek lakh ke tool aur bees lakh ke tool ke beech hota hai.
- Cost ko speed ke saath report kijiye, dheeme cases samet.
- Jis value ko cost bachati hai uske bina, cost sirf aadha hisaab hai.

Agle chapter mein Farah Anaya ke saamne ek bank passbook ki photograph rakhti hai. Team plain text ko peeche chhod deti hai.

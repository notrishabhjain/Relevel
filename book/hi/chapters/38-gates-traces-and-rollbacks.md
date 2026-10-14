---
title: Gates, Traces Aur Rollbacks
summary: Friday raat ek instruction mein bina test ke kiya gaya ek edit dikhata hai ki jo badlaav deployment jaisa nahi lagta, use bhi ek gate se kyun guzarna chahiye, aur "yeh aisa kyun kiya?" ka jawaab chaalis second mein kyun milna chahiye. Is chapter mein golden dataset, regression, release gate, observability, trace record, p95 aur canary release aate hain.
course: ch16e ch17o
goals:
  - samjha paana ki instruction mein ek edit asal mein bhes badla hua code change kyun hai
  - versioned golden dataset se ek release gate banana, aur woh sentence likhna jo release rok de
  - trace records se "isne aisa kyun kiya?" ka jawaab bina andaaza lagaye dena
  - p95 se dheemi poonchh naapna, ek poore kaam ka cost ginna, aur badlaav pehle kuch hi users ko dikhana
terms:
  - golden dataset | cases ka versioned aur representative set, expected behaviour ke saath, jo tay karta hai ki ek system ke liye "achha" ka matlab kya hai; ise version number chahiye, taaki result dobara chalaya ja sake | golden set
  - regression | aisa badlaav jo system ko us cheez mein kharab kar de jo woh pehle achhe se karta tha | regressions
  - release gate | ek automatic check jo golden dataset ko ek badlaav ke saamne chalata hai, aur agar koi bhi number apne threshold se neeche aaye toh release rok deta hai | release gates, gate
  - observability | system ke rakhe hue records se dekh paana ki usne kya kiya aur kyun, bina andaaza lagaye | 
  - trace record | ek request ke system mein poore safar ka saved record: input, versions, steps, timing, cost aur result | trace records
  - p95 | woh time jise 100 mein se 95 requests beat kar deti hain; yeh dheemi poonchh dikhata hai jo average chhupa leta hai | 
  - canary release | kisi badlaav ko pehle users ke ek chhote hisse ko dikhana, purana version taiyaar rakhkar, sabko dene se pehle | canary
---

Friday raat 10:50 par doosri team ka ek engineer, jo ek milte-julte project ke liye guard ki configuration use kar raha tha, finder ke instruction mein ek line par ruka. Line thi: "Agar shak ho toh detail ko personal maano." Use laga ki yeh finder ko kuch zyada hi sawdhaan bana deti hai. Usne use badal kar "agar kaafi shak ho" kar diya. Ek file mein ek line badli, save kiya, aur is tasalli ke saath so gaya ki usne ek chhoti cheez thodi behtar kar di. Poora edit chaalis second ka tha.

Monday subah sweep chala. Yeh sweep Lakshmi Iyer ne ab har hafte chalana shuru kar diya tha. 500 chats mein usne 23 unhidden identity numbers pakde, jabki pehle 9 the. Kisi ne kuch deploy nahi kiya tha. Code nahi badla tha, koi release nahi gaya tha. Bas ek configuration file edit hui thi, aur Friday raat se guard alag tarah se behave kar raha tha.

## Case: ek edit jo deployment nahi tha

"Instruction edit karna deployment jaisa nahi lagta," Imran Qureshi ne seedhe lahje mein kaha, jaise koi report padh raha ho. "Lekin hai woh deployment hi. Aur teams sabse zyada baar yahi rule todti hain." Prompt mein badlaav asal mein bhes badla hua code change hai.

Is chapter mein hum do cheezein dekhenge. Pehli, woh machinery jo aisi ghatna ko hone hi nahi deti. Doosri, woh records jinse koi bhi ghatna samajh mein aa jaati hai.

## Gate kya hai

Anaya ne log mein, tareekh ke saath, likha ki use kya chahiye: aisa tareeka ki yeh dobara ho hi na sake. Phir woh project ke us hisse ki taraf mudi jo woh April se bana rahi thi, bas usne use kabhi uska sahi naam nahi diya tha.

Answer key mein ab 220 rows thi, aur har hafte badh rahi thi. Yeh cases ka ek set tha, har case ke saath expected behaviour, versioned aur sambhal kar rakha hua. Is kaam mein ise *golden dataset* kehte hain. Imran ise "good ka matlab kya hai" ki yaaddasht kehta tha. Iski value iski coverage mein hai: aasaan messages, paraphrases, uljhe hue messages, jinka koi jawaab nahi hota, doosri languages ke messages, aur woh jinmein injected instructions hain. Yeh asli risks ko represent karta hai, demo mein achhe dikhne wale examples ko nahi. Aur ispar ek version number hota hai, kyunki jo evaluation kisi badlaav ke baad dobara chalaya hi nahi ja sakta, woh sirf ek kissa hai.

Ab Imran ko answer key aur duniya ke beech ek darwaaza chahiye tha, jo sirf paas hone wale badlaavon ke liye khule. Usne ek din mein bana diya. Woh ek hi command tha, chaar steps ke saath.

1. Golden dataset ko maujooda instruction par chalao.
2. Results ko grade karo aur numbers print karo.
3. Har number ko pehle se likhe threshold se milao.
4. Agar koi bhi number apne threshold se neeche hai, toh wajah ke saath zor se fail ho jao, aur badlaav ko aage mat jaane do.

Yeh command apne aap chalta tha, jab bhi koi file badalti: code, instruction, model ka naam, index ya koi tool. Yehi *release gate* hai. Yeh *regression* pakadta hai, yaani aisa badlaav jo kisi achhi chalti cheez ko kharab kar de. Aisa tab bhi ho sakta hai jab code ki ek line bhi compile fail na ho. Imran ne ise Friday wale edit par chalaya.

```
GATE FAILED
  Fixed-shape numbers found:  96.4%   (threshold 98.0%)
  Answer key version 12, 220 rows.
  Blocked: instruction v14 -> v15.
```

Imran ne kaha ki yeh baat gate chaalis second mein bata deta, aur kaash woh bata deta.

## Woh sentence jo release rokta hai

Lakshmi poore waqt wahin thi. Usne Anaya se kaha ki woh woh sentence likhe jo woh meeting mein bolegi. Policy nahi, asli sentence, numbers ke saath, jo ek release rok de. Anaya ne use do baar likha. Pehle version mein "lagta hai" tha, aur usne use kaat diya, kyunki jis sentence mein "lagta hai" ho, woh kuch nahi rokta. Doosra version yeh tha: hum ship nahi kar rahe, kyunki answer key version 12 par fixed-shape numbers ka recall 96.4 hai, aur threshold 98 hai. "Yeh release rokta hai," Lakshmi ne kaha. "Thresholds rokte hain. Impressions nahi."

Gate sirf ek number nahi dekhta tha. Ek achha final score toote hue hisse ko chhupa sakta hai. Ek fluent system kaafi baar missing evidence ko dhak leta hai, aur demo mein sab theek dikhta hai. Isliye gate ek saath kai levels par naapta tha.

Table: Gate kya naapta hai
| Level | Sawaal |
| --- | --- |
| Finding | Kya finder ne sahi cheezein dhoondhi? |
| Deciding | Kya rule-keeper ne un cheezon ke saath sahi kiya? |
| Tools | Kya lookup tool sahi chuna gaya? |
| Cost aur time | Kya poore kaam mein utna hi time aur cost laga jitna lagna chahiye? |
| Attacks | Kya attacks ab bhi fail hote hain? |

Paas hone ke liye sabhi levels chahiye the. Anaya ne specification ke us section mein, jahan decisions record hote hain, ek line jodi, aur woh sabse mushkil line thi: kaun sa threshold non-negotiable hai? Usne likha, fixed-shape numbers par recall. Baaki sab par woh negotiate kar sakti thi.

## Parcel aur uske scans

Ek Wednesday ko Lakshmi ne ek sawaal poocha, us lahje mein jo woh tab use karti thi jab use jawaab ka pehle se shak hota. Sixteen tareekh ki ek chat mein Mrs. Kulkarni ka address visible kyun reh gaya? Kisi ko nahi pata tha, aur yehi pehli problem thi. Guard ne us hafte hazaaron decisions liye the, aur har decision bas ek line mein record tha, ki kuch hide hua ya nahi. Unmein dhoondhna matlab andaaza lagana tha.

Imran ne samjhaya ki kya missing tha, aur uske liye post office ki misaal di. Jab koi parcel kho jaata hai, courier bata sakta hai ki woh aakhri baar kahan scan hua tha, kyunki har step par scan hota hai. Scans na ho toh parcel dhoondha nahi ja sakta.

::: def Trace record aur observability
*Trace record* ek request ka scan log hai. Usmein request ka number hota hai, har us cheez ka version jisne use chhua, woh steps jinse woh guzri, har step mein kitna time laga, cost kitna hua, aur woh khatam kaise hui. *Observability* ka matlab hai aise records se dekh paana ki system ne kya kiya aur kyun, bina andaaza lagaye. Agar aap sirf input aur output dekh sakte hain, toh har diagnosis ek andaaza hai.
:::

Imran ek mahine se trace records bana raha tha, isliye Lakshmi ke sawaal ka jawaab chaalis second mein mil gaya. 16 tareekh ka message lamba tha, aur use teen tukdon mein kaata gaya tha. Doosre tukde par finder time out ho gaya. System ne, jaisa design tha, us tukde ke liye safe mode pakad liya, aur safe mode ko addresses ke baare mein kuch nahi pata tha. Address usi tukde mein tha. Lakshmi ne kaha ki matlab system ne design ke hisaab se hi kaam kiya. "Usne wahi kiya jo humne use bataya tha," Imran ne kaha. "Aur humne use jo bataya, woh kaafi achha nahi tha." Usne board par ek nayi line likhi: safe mode mein time out ho toh poora tukda mask hona chahiye, sirf numbers nahi. Lunch se pehle usne use theek kar diya.

## Woh average jisne poonchh chhupa di

Anaya ne dashboard par ek message ka average time dekha. Woh ek second ka dasvaan hissa tha, aur sab theek lag raha tha. Imran sahmat nahi tha: average poonchh ko chhupa deta hai. Jo naap asal mein maayne rakhta hai, woh hai *p95*. Yeh woh time hai jise 100 mein se 95 requests beat kar deti hain. Average 0.12 second tha, aur p95 1.9. Matlab 20 mein se ek message dedh second se zyada le raha tha, aur users average se kahin zyada poonchh ko mehsoos karte hain. Imran ne har stage alag se naapa, aur dekha ki poonchh sirf ek stage ki thi, order lookup, jo kabhi-kabhi dheema padta tha. Poonchh us stage ki thi, aur kaam bhi wahin tha.

Yehi baat cost par bhi lagu hoti thi, jise woh ab har request ke liye track karta tha. Jaanne layak cheez ek call ka cost nahi hai. Jaanne layak hai ek successfully saaf hue message ka cost, jisme retries aur extra rounds bhi gine gaye hon.

## Jo bina kisi ke chhue badal sakta hai

Imran ne Anaya se kaha ki teen aisi cheezein batao jo aise hafte mein bhi assistant ko dheema kar sakti hain, jab kisi ne kuch deploy nahi kiya. Anaya ne traffic ka mix bataya, jisme October mein Devanagari script ke zyada messages the. Phir documents ka count, aur lookup ki doosri taraf provider ka response time. In teeno mein se kuch bhi repository mein nahi hai, isliye inhe dashboard par hona chahiye.

Dashboard ab jaisa tha, usmein chhe panels the: quality, safety, speed, cost, traffic aur failures. Har panel ka ek measure, ek source, ek owner aur ek threshold tha. Kuch alerts kisi insaan ko raat mein jagaate, aur kuch sirf dekhe jaate. Anaya ne ek-ek panel hatakar dekha tha ki kaun sa incident samajhna mushkil ho jaata. Har panel hatane par koi na koi incident mushkil ho gaya, aur wahi iska maksad tha.

Imran ne do aur aadatein zaroori maani, dono normal software se udhaar li hui. Pehli, har hisse ko alag se version karna: instruction, model, index aur tool descriptions, taaki kuch bhi akele rolled back ho sake. Doosri, kisi badlaav ko pehle kuch hi users ko dikhana, puraana version taiyaar rakhkar. Yeh *canary release* hai. Naam purani khaan wali pratha se aaya hai, jisme pehle chidiya andar bheji jaati thi. Imran ke hisaab se jo sawaal har waqt jawaab dene ke laayak hona chahiye, woh yeh hai: theek-theek kya badla?

## Saar

Instruction mein badlaav system mein badlaav hai, bhale hi woh deployment jaisa na lage. Iska ilaaj release gate hai: ek command jo har badlaav par ek versioned golden dataset chalata hai, aur agar koi bhi number pehle se tay threshold se neeche ho toh badlaav rok deta hai.

- Gate ek saath kai levels par naapta hai, kyunki ek achha final score toote hue hisse ko chhupa sakta hai. Jo sentence release rokta hai, usmein numbers hote hain, impressions nahi.
- "Isne aisa kyun kiya?" ka jawaab dene ke liye har request ke safar ka ek trace record rakhiye. Jaanne aur andaaza lagane mein yehi farq hai.
- Average dheemi poonchh ko chhupa deta hai, isliye p95 naapiye, aur cost call ka nahi, poore kaam ka ginye.
- Quality bina code chhue bhi badal sakti hai, kyunki traffic, data aur providers sab hilte rehte hain. Har hisse ko apna version dijiye taaki woh akela rollback ho sake, aur badlaav pehle kuch hi users ko dikhaiye.

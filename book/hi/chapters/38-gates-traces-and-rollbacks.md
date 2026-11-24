---
title: Gates, Traces Aur Rollbacks
summary: Friday raat ek instruction ki ek line mein bina test ke kiya gaya edit dikhata hai ki chhote se chhote badlaav ko bhi gate chahiye. Yeh bhi dikhata hai ki "yeh aisa kyun kiya?" ka jawaab chaalis second mein milna chahiye. Aap milte hain golden dataset, regression, release gate, observability, trace record, p95 aur canary release se.
course: ch16e ch17o
goals:
  - samajhna ki instruction badalna asal mein code badalna hi hai
  - versioned golden dataset se release gate banana, aur woh sentence likhna jo release rok de
  - trace records se "isne aisa kyun kiya?" ka jawaab bina andaaza lagaye dena
  - p95 se dheemi poonchh naapna, poore kaam ka cost ginna, aur badlaav pehle kuch hi users ko dikhana
terms:
  - golden dataset | poore product ki answer key: bahut saare asli cases, har ek ke saath expected result, aur ek version number taaki aap use dobara chala sakein | golden set
  - regression | aisa badlaav jo product ko us kaam mein kharab kar de jo woh pehle achhe se karta tha | regressions
  - release gate | launch se pehle ka taala-band darwaaza: ek automatic check badlaav par golden dataset chalata hai, aur koi bhi number threshold se neeche aaye toh use rok deta hai | release gates, gate
  - observability | saved records se dekh paana ki system ne kya kiya aur kyun, bina andaaza lagaye | 
  - trace record | parcel ka scan log, bas ek request ke liye: input, versions, steps, timing, cost aur woh khatam kaise hui | trace records
  - p95 | woh time jise 100 mein se 95 requests beat kar deti hain; yeh dheemi chand requests dikhata hai jo average chhupa leta hai | 
  - canary release | trial run: badlaav pehle kuch hi users ko dikhana, purana version taiyaar rakhkar, sabko dene se pehle | canary
---

Friday raat ke 10:50 baje the. Doosri team ka ek engineer ek milte-julte project ke liye guard ki configuration (uski settings file) use kar raha tha. Finder ke instruction ki ek line par uski nazar ruki. Usmein likha tha: "Agar shak ho toh detail ko personal maano."

Use yeh line zyada hi sawdhaan lagi. Toh usne use "agar kaafi shak ho" kar diya. File save ki aur so gaya, ek chhoti si sudhaar par khush hokar. Poora edit chaalis second ka tha.

Monday subah weekly sweep chala. Yeh check Lakshmi Iyer ne shuru kiya tha, aur yeh paanch sau chats padhta hai. Usne 23 identity numbers unhidden pakde. Pichhle hafte 9 mile the.

Kisi ne kuch deploy nahi kiya tha. Code nahi badla tha. Koi release nahi gaya tha. Bas ek settings file edit hui thi aur save hui thi. Aur Friday raat se guard alag tarah se behave kar raha tha.

## Case: ek edit jo deployment nahi tha

"Instruction edit karna deployment jaisa nahi lagta," Imran Qureshi ne kaha. Usne seedhe lahje mein kaha, jaise doctor report padhta hai. "Lekin hai woh deployment hi. Teams sabse zyada yahi rule todti hain."

Rasoi ke recipe card ko dekhiye. "Ek chammach namak" ko "do chammach" kar do, toh sabzi badal jaati hai. Prompt (woh parchi jo aap model ko thamate hain) mein badlaav bhi aisa hi hai. Woh bhes badla hua code change hai. Woh system ka kaam badal deta hai, bilkul naye code ki tarah.

Yeh chapter do kaam karta hai. Pehla, woh machinery dikhata hai jo aisi chook ko rokti hai. Doosra, woh records dikhata hai jo har bachi hui chook ko samjha dete hain.

## Gate kya hai

Anaya ne decision log (team ki faislon ki diary) mein, tareekh ke saath, likha ki use kya chahiye. Use aisa tareeka chahiye tha ki yeh dobara ho hi na sake. Phir woh project ke ek hisse ki taraf mudi jo woh April se bana rahi thi. Us hisse ko usne kabhi uska sahi naam nahi diya tha.

Woh hissa answer key tha (sawaalon ki list, sahi jawaabon ke saath, jo test se pehle likhi jaati hai). Ab usmein 220 rows thi. Woh har hafte badhti thi. Har row ek case thi, jiska expected result team ko pata tha.

Is key par version number tha, aur use sambhal kar rakha jaata tha. Is kaam mein is tarah ke set ko *golden dataset* kehte hain. Imran ise "good ka matlab kya hai" ki yaaddasht kehta tha.

Golden dataset ki keemat uski coverage mein hai. Isme aasaan messages hain aur doosre shabdon mein likhe hue bhi. Isme uljhe hue messages hain, aur woh jinka koi jawaab nahi. Isme doosri languages ke messages hain, aur woh jinmein chhupe hue instructions hain. Yeh asli risks dikhata hai, demo ki chamak nahi. Aur isme version number hai. Jo test badlaav ke baad dobara chal hi na sake, woh bas ek kissa hai.

Ab Imran ko answer key aur duniya ke beech ek darwaaza chahiye tha. School ke gate aur chowkidaar ki tarah sochiye. Darwaaza sirf paas hone wale badlaavon ke liye khulta hai. Usne ise ek din mein bana diya. Woh ek command tha, chaar steps ke saath.

1. Golden dataset ko maujooda instruction par chalao.
2. Results ko grade karo aur numbers print karo.
3. Har number ko pehle se likhe threshold (paas hone ke number) se milao.
4. Koi bhi number apne threshold se neeche ho, toh zor se fail ho jao, wajah batao, aur badlaav ko roko.

Yeh command apne aap chalta tha, jab bhi koi file badalti. Matlab code, instruction, model ka naam, index (dhoondhne ki list) ya koi tool. Yehi *release gate* hai. Iska kaam *regression* pakadna hai. Regression woh badlaav hai jo kisi achhi chalti cheez ko kharab kar de.

Regression tab bhi ho sakta hai jab code ki ek line bhi na tute. Friday ke edit ne yeh dikha diya. Baad mein Imran ne gate ko usi edit par chalaya.

```
GATE FAILED
  Fixed-shape numbers found:  96.4%   (threshold 98.0%)
  Answer key version 12, 220 rows.
  Blocked: instruction v14 -> v15.
```

Imran ne kaha ki gate yeh chaalis second mein bata deta. Kaash bata deta.

## Woh sentence jo release rokta hai

Lakshmi poore waqt wahin thi. Usne Anaya se kaha ki woh woh sentence likhe jo woh meeting mein bolegi. Use policy nahi chahiye thi. Use asli sentence chahiye tha, numbers ke saath, jo release rok de.

Anaya ne use do baar likha. Pehli koshish mein "lagta hai" tha. Usne use kaat diya. "Lagta hai" wala sentence kabhi kuch nahi rokta.

Doosri koshish yeh thi: hum ship nahi kar rahe, kyunki answer key version 12 par fixed-shape numbers ka recall 96.4 hai, aur threshold 98 hai. Recall ka matlab: talaab ki sab machhliyon mein se jaal ne kitni pakdin? "Yeh release rokta hai," Lakshmi ne kaha. "Thresholds rokte hain. Impressions nahi."

Gate sirf ek number nahi dekhta tha. Report card sochiye. Ek achha total ek fail hue subject ko chhupa sakta hai. Ek fluent system kam evidence ko dhak leta hai, aur demo theek lagta hai. Isliye gate ek saath kai levels par naapta tha. Table har level aur uska sawaal dikhati hai.

Table: Gate kya naapta hai
| Level | Sawaal |
| --- | --- |
| Finding | Kya finder ne sahi cheezein dhoondhi? |
| Deciding | Kya rule-keeper ne un cheezon ke saath sahi kiya? |
| Tools | Kya lookup tool sahi chuna gaya? |
| Cost aur time | Kya poore kaam mein utna hi time aur cost laga jitna lagna chahiye? |
| Attacks | Kya attacks ab bhi fail hote hain? |

Badlaav ko paanchon paas karne the. Phir Anaya ne specification (product ka recipe card) mein ek aur line jodi. Yeh line wahan thi jahan team decisions likhti thi. Yeh sabse mushkil line thi. Isne woh ek threshold bataya jis par bargaining nahi ho sakti. Usne likha: fixed-shape numbers par recall. Baaki sab par woh negotiate kar sakti thi.

## Parcel aur uske scans

Toh gate launch se pehle kharab badlaav rok sakta tha. Lekin jo kharab result pehle se bahar duniya mein tha, uska kya? Ek Wednesday ko Lakshmi ne ek sawaal poocha. Woh us lahje mein bolti thi jab use jawaab ka pehle se andaaza hota. Sixteen tareekh ki chat mein Mrs. Kulkarni ka address visible kyun reh gaya?

Kisi ko nahi pata tha. Yehi pehli problem thi. Guard ne us hafte hazaaron decisions liye the. Har decision ek line mein save tha, jo bas kehti thi ki kuch hide hua ya nahi. In lines mein dhoondhna andaaza lagana tha.

Imran ne post office ki kahani se samjhaya ki kya missing tha. Jab parcel kho jaata hai, courier bata sakta hai ki woh aakhri baar kahan scan hua tha. Har step par scan hota hai. Scans na ho, toh dhoondhne ko kuch nahi.

::: def Trace record aur observability
*Trace record* ek request ka scan log hai. Isme request ka number hota hai, aur har us cheez ka version jisne use chhua. Isme woh steps hote hain jinse woh guzri, har step mein kitna time laga, kitna cost hua aur woh khatam kaise hui. *Observability* ka matlab hai aise records se dekh paana ki system ne kya kiya aur kyun, bina andaaza lagaye. Agar aap sirf input aur output dekh sakte hain, toh har diagnosis ek andaaza hai.
:::

Imran ek mahine se trace records bana raha tha. Isliye Lakshmi ke sawaal ka jawaab chaalis second mein mil gaya. 16 tareekh ka message lamba tha. System ne use teen tukdon mein kaata tha. Doosre tukde par finder time out ho gaya (intezaar ka waqt khatam ho gaya).

Jaisa design tha, system ne us tukde ke liye safe mode pakad liya. Safe mode ko addresses ke baare mein kuch nahi pata tha. Aur address usi tukde mein tha.

Lakshmi ne kaha ki sab kuch design ke hisaab se chala. "Usne wahi kiya jo humne use bataya tha," Imran ne kaha. "Aur humne use jo bataya, woh kaafi achha nahi tha." Usne board par ek nayi line likhi. Timeout ke baad safe mode aaye, toh woh poora tukda mask kare (dhak de), sirf numbers nahi. Lunch se pehle usne use theek kar diya.

## Woh average jisne poonchh chhupa di

Phir Anaya ne dashboard (numbers ki ek screen) par ek message ka average time dekha. Woh ek second ka dasvaan hissa tha. Sab theek lag raha tha. Imran sahmat nahi tha. Average poonchh ko chhupa deta hai, usne kaha.

Ise seedhe shabdon mein samjhiye. Sau logon ki daud sochiye. Unhe sabse tez se sabse dheeme tak line mein lagaiye, aur pachanvein ko dekhiye. Uske time ko *p95* kehte hain. Matlab sau mein se pachanve us se tez the. Users average se kahin zyada dheemi chand requests ko mehsoos karte hain.

Dashboard par average 0.12 second tha. Lekin p95 1.9 tha. Matlab 20 mein se ek message dedh second se zyada le raha tha. Imran ne har stage ka time alag se naapa. Poonchh ek hi stage ki thi: order lookup, jo kabhi-kabhi dheema padta tha. Poonchh us stage ki thi, aur kaam bhi wahin tha.

Yehi soch cost par bhi lagi. Woh ab use har request ke liye track karta tha. Kaam ki cheez ek call ka cost nahi hai. Kaam ki cheez hai ek safaltapurvak saaf hue message ka cost, jisme retries aur extra rounds bhi gine hon. Ek roti ka asli daam sochiye, jale hue rotiyon ko bhi gin kar.

## Jo bina kisi ke chhue badal sakta hai

Imran ne Anaya se teen aisi cheezein poochhin jo ek hafte mein assistant ko dheema kar sakti hain, jab kisi ne kuch deploy nahi kiya. Anaya ne traffic ka mix bataya. October mein usmein Devanagari script (Hindi ki lipi) ke zyada messages the. Phir documents ki ginti. Aur lookup ke peeche provider (bahar ki company) ka response time.

In mein se kuch bhi repository (code ke har badlaav ko yaad rakhne wala online folder) mein nahi rehta. Isi liye inhe dashboard par hona chahiye. Dukaan sochiye. Dukaandaar nahi badalta, lekin bheed aur supplier badalte hain.

Dashboard par ab chhe panels the: quality, safety, speed, cost, traffic aur failures. Har ek ka ek measure, ek source, ek owner aur ek threshold tha. Kuch alerts kisi insaan ko jagaate. Baaki sirf dekhe jaate.

Anaya ne ek-ek panel hatakar dekha. Use dekhna tha ki kaun sa incident samajhna mushkil ho jaata. Har panel hatane par koi na koi incident mushkil ho gaya. Wahi iska maksad tha.

Imran ne do aur aadatein zaroori maani, dono normal software se udhaar li hui. Pehli, har hisse ko alag se version karna: instruction, model, index aur tool descriptions. Phir kuch bhi akele rollback ho sakta tha (puraane version par laut sakta tha).

Doosri, badlaav pehle kuch hi users ko dikhana, purana version taiyaar rakhkar. Yeh *canary release* hai. Naam purani khaanon se aaya hai, jahan pehle chidiya andar bheji jaati thi. Imran ne kaha ki ek sawaal ka jawaab hamesha hona chahiye: theek-theek kya badla?

## Saar

Instruction badalna system badalna hai, bhale hi woh deployment jaisa na lage. Ilaaj release gate hai. Woh school ke gate jaisa taala-band darwaaza hai. Woh har badlaav par ek versioned golden dataset chalata hai. Pehle se tay threshold se koi number neeche ho, toh badlaav rok deta hai.

- Gate kai levels par naapta hai, kyunki ek achha final score toota hua hissa chhupa sakta hai. Jo sentence release rokta hai, usmein numbers hote hain, impressions nahi.
- "Isne aisa kyun kiya?" ka jawaab dene ke liye har request ke raaste ka trace record rakhiye. Jaanne aur andaaza lagane mein yehi farq hai.
- Average dheemi poonchh chhupa deta hai, isliye p95 naapiye. Cost poore kaam ka ginye, ek call ka nahi.
- Quality bina code chhue bhi badal sakti hai, kyunki traffic, data aur providers sab hilte rehte hain. Har hisse ko apna version dijiye taaki woh akela rollback ho sake. Badlaav pehle kuch hi users ko dikhaiye.

Agla chapter ek kadam aur aage jaata hai. Woh poochta hai ki jab aapke banaye system par jaan-boojhkar hamla ho, tab kya hota hai.

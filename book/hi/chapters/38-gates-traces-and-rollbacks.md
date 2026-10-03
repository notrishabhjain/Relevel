---
title: Gates, Traces Aur Rollbacks
summary: Ek instruction mein ek Friday raat bina test ke kiya gaya ek edit dikhata hai ki jo badlaav deployment jaisa nahi lagta use gate se guzarna kyun zaroori hai; aur baad mein, aapko "usne aisa kyun kiya?" ka jawaab chaalees second mein dena kyun aana chahiye.
course: ch16e ch17o
terms:
  - golden dataset | cases ka versioned, pratinidhi set, apekshit vyavahaar ke saath, jo tay karta hai ki ek system ke liye achha ka matlab kya hai; ise ek version number chahiye taaki nateeja dobara chalaya ja sake | golden set
  - regression | aisa badlaav jo system ko us cheez mein kharab banata hai jo woh pehle achhe se karta tha | regressions
  - release gate | ek swachalit jaanch jo golden dataset ko ek badlaav ke khilaaf chalati hai aur release rok deti hai agar koi number apni seema se neeche gire | release gates, gate
  - observability | system ke rakhe records se dekh paana ki usne kya kiya aur kyun, andaaza lagaye bina | 
  - trace record | ek request ke system se poore raaste ka saheja hua record: input, versions, charan, samay, kharcha aur nateeja | trace records
  - p95 | woh samay jise 100 mein se 95 requests haraati hain; yeh dheeli poonchh dikhata hai jo ek ausat chhupa leta hai | 
  - canary release | ek badlaav ko pehle users ke ek chhote hisse ko dikhana, purane version ko taiyaar rakh kar, sabko milne se pehle | canary
---

Edit mein chaalees second lage aur woh Friday raat gyarah baje mein das minute par kisi ne kiya jo bas madad karne ki koshish kar raha tha.

Woh doosri team ka ek engineer tha, jo ek sambandhit project ke liye guard ka configuration udhaar le raha tha, aur usne dekha ki finder ke nirdesh mein ek line thi jo use lagta tha ki ise zyada saavdhaan banati hai. *Agar anishchit ho, toh detail ko personal maano.* Usne use narm kiya. Usne likha *agar vajib roop se anishchit ho*. Usne ek file mein ek line badli, save dabaya, aur is santosh ke saath sone chala gaya ki usne ek chhoti cheez ko thoda behtar bana diya hai.

Monday subah sweep ne, jise Lakshmi ne ab har hafte chalana shuru kar diya tha, paanch sau chats mein teis unhidden pehchaan ke numbers paaye, jahan usne nau paaye the.

Kisi ne kuch deploy nahi kiya tha. Yahi pagal kar dene wali baat thi. Koi code nahi badla tha. Koi release nahi gaya tha. Ek configuration file thi, edit aur save ki hui, aur guard Friday raat se alag behave kar raha tha.

"Ek nirdesh ko edit karna deployment jaisa nahi lagta," Imran ne kaha. Usne yeh sapaat andaaz mein kaha, jaise koi nidaan padh raha ho. "Hai. Teams bilkul wahi niyam sabse zyada todti hain. Ek prompt ka badlaav bhesh badla hua code ka badlaav hai."

## Gate kya hai

Anaya ne log mein, tareekh ke saath, likha ki woh kya chahti thi: *aisa tareeka jisse yeh asambhav ho.* Aur woh project ke us hisse ki taraf mudi jo woh April se bana rahi thi, use uska sahi naam diye bina.

Answer key mein ab do sau bees rows thin. Woh har hafte badhti thi. Woh apekshit vyavahaar ke saath cases ka ek set thi, versioned aur saheji hui. Is kaarobaar mein ise *golden dataset* kehte hain, aur Imran ne ise product ke liye "achha" ka matlab kya hai uski yaaddasht kaha. Uski keemat uske coverage mein hai. Usme aasaan messages the, paraphrases, dwividha wale, jinka koi jawaab nahi tha, doosri bhashaon wale aur injected nirdeshon wale. Woh asli jokhimon ki pratinidhi thi, khushamadi demos ki nahi. Uska ek version number tha, kyunki jis evaluation ko aap badlaav ke baad dobara nahi chala sakte woh sirf ek kissa hai.

Answer key aur duniya ke beech woh ek darwaza chahta tha jo sirf paas hone wale badlaavon ke liye khulta. Usne use ek din mein banaya.

Yeh ek hi command tha. Golden dataset ko maujooda nirdesh ke khilaaf chalao, grade karo, aur numbers chhapo. Har ek ko pehle se likhi seema se milao. Agar kuch neeche ho, toh command fail hota hai, zor se, wajah ke saath, aur badlaav bahar nahi jaata. Yeh swachalit roop se chalta jab koi bhi file badalti: code, nirdesh, model ka naam, index, ek tool. Yeh ek *release gate* hai. Yeh ek *regression* pakadta hai, aisa badlaav jo kuch aisa kharab kar deta hai jo pehle achha tha, jo bina ek bhi line ke compile fail hue ho sakta hai.

Usne use Friday ke edit par chalaya.

```
GATE FAILED
  Fixed-shape numbers found:  96.4%   (threshold 98.0%)
  Answer key version 12, 220 rows.
  Blocked: instruction v14 -> v15.
```

"Yeh raha," Anaya ne kaha.

"Yeh chaalees second mein keh deta," Imran ne kaha. "Mujhe pasand hota agar kehta."

## Woh vaakya jo release rokta hai

Lakshmi, jo poori baatcheet mein maujood thi, ne Anaya se kuch karne ko kaha.

"Woh vaakya likho jo tum meeting mein kahogi," usne kaha. "Policy nahi. Asli vaakya, numbers ke saath, jo release rokta hai."

Anaya ne use do baar likha. Pehle version mein *lagta hai* shabd tha, aur usne use kaat diya, kyunki uss shabd wala vaakya kuch nahi rokta. Doosra:

*Hum ship nahi kar rahe, kyunki answer key version 12 par fixed-shape numbers par recall 98 ki seema ke khilaaf 96.4 hai.*

"Yeh wala release rokta hai," Lakshmi ne kaha. "Seemayein rokti hain. Raayein nahi."

Gate ek se zyada number dekhta tha. Ek achha antim score ek tootte hisse ko chhupa sakta hai, kyunki ek dhaaraapravah system gayab saboot ke liye itni baar bharpayi kar sakta hai ki ek demonstration mein theek lage. Isliye gate ek saath kai staron par naapta tha: kya finder ne sahi cheezein dhoondhin; kya rule-keeper ne unke saath sahi kiya; kya lookup tool sahi chuna gaya; kya poore ne woh samay aur kharcha liya jo lena chahiye; aur kya hamle ab bhi fail hue. Paas hone ke liye sab chahiye the. Anaya ne specification mein ek aur line joda, us section mein jahan faisle record hote hain, aur woh sabse mushkil thi. *Kaun si seema na-bhi-sudhaarne-yogya hai?* Fixed-shape numbers par recall, usne likha. Baaki sab par woh bargaining kar sakti thi.

## Parcel aur uske scans

Chapter ka doosra aadha Wednesday ko Lakshmi ke ek sawaal se shuru hua, us awaaz mein poochha jo woh tab istemaal karti thi jab use pehle se jawaab ka shak ho.

"Solah tareekh ko ek chat mein Mrs. Kulkarni ka pata dikhta kyun chhoda gaya?"

Kisi ko nahi pata tha. Yeh pehli problem thi. Guard ne us hafte hazaaron faisle kiye the, aur har ek sirf ek line ke roop mein record tha jo kehti thi ki kuch chhupaya gaya ya nahi. Unmein se khoj andaaza lagana tha.

Imran ne jo gayab tha use ek post office ki tasveer se samjhaya. "Jab ek parcel kho jaata hai," usne kaha, "courier bata sakta hai ki woh aakhri baar kahan scan hua tha, kyunki woh use har kadam par scan karte hain. Iske bina, tum use trace nahi kar sakte."

*Trace record* ek request ka scan log hai. Usme request ka number hota hai, jo kuch bhi use chhoota hai uske versions, jin charno se woh guzra, har ek mein kitna samay laga, kharcha kitna hua aur woh kaise khatam hua. Observability is baat ka naam hai ki aise records se dekh paana ki ek system ne kya kiya aur kyun, andaaza lagaye bina. Agar aap sirf input aur output dekh sakte hain, Imran ne kaha, toh har nidaan ek andaaza hai.

Woh ek mahine se trace records bana raha tha, aur Lakshmi ke sawaal ka jawaab chaalees second mein aaya. Solah tareekh ka message lamba tha. Use teen tukdon mein kaata gaya tha. Finder doosre tukde par time out ho gaya tha, aur system ne, design ke anusaar, us tukde ke liye safe mode par girna chuna tha, jo pate ke baare mein nahi jaanta tha. Pata usi tukde mein tha.

"Toh woh design ke anusaar kaam kiya," Lakshmi ne kaha.

"Usne wahi kiya jo humne use kaha. Humne use kuch kaha jo kaafi achha nahi hai." Imran ne board par ek nayi line likhi. *Safe mode mein ek timeout ko poora tukda mask karna chahiye, sirf numbers nahi.* Usne ise lunch se pehle theek kiya.

## Woh ausat jisne poonchh chhupa di

Anaya ne dashboard par prati message ka ausat samay dekha. Ek second ka dasva hissa. Sab theek lag raha tha.

"Nahi hai," Imran ne kaha. "Ausat poonchh ko chhupa deta hai."

Jo naap maayne rakhta hai woh *p95* hai: woh samay jise sau mein paccheesh requests haraati hain. Ausat 0.12 second tha. p95 1.9 tha. Bees mein ek message dedh second se dheema tha, aur users poonchh ko ausat se kahin zyada mehsoos karte hain. Usne har charan naapa, aur poonchh unmein se ek ki thi: order lookup, jo kabhi-kabhi dheema tha. Isliye us charan ke paas poonchh thi, aur poonchh wahi thi jahan kaam tha.

Kharche ke liye bhi yahi tha, jo woh ab har request ke liye track karta tha. Jaanne layak cheez ek call ka kharcha nahi tha balki ek safaltapurvak saaf kiye gaye message ka kharcha, retries aur atirikt rounds ginke.

## Jo bina kisi ke chhue badal sakta hai

"Mera assistant is hafte dheema ho gaya," Imran ne kaha, "aur kisi ne kuch deploy nahi kiya. Teen cheezein batao jo badal sakti thin."

Anaya ke paas har shreni mein ek andaaza tha. Traffic ka mishran, jisme October mein Devanagari lipi mein zyada messages the. Documents ki sankhya. Aur lookup ke doosri taraf ke provider ka response samay. Inme se kuch bhi repository mein nahi hai, jo wajah hai ki unhe dashboard par hona chahiye.

Usne use dashboard dikhaya jaisa woh ab tha. Chhe panel. Quality, suraksha, raftaar, kharcha, traffic aur failures. Har ek ka ek naap, ek source, ek malik aur ek seema thi. Kuch alerts ek insaan ko jagayenge. Doosre sirf dekhe jayenge. Usne ek-ek karke panel hatakar dekha tha ki kaun si ghatna ka nidaan mushkil ho jayega. Har hataav ne kiya, jo maqsad tha.

Do aur aadatein thin jin par usne zor diya, dono aam software ki duniya se udhaar li hui. Pehli har hisse ka alag version rakhna thi, nirdesh, model, index, tool descriptions, taaki kuch bhi akele rollback kiya ja sake. Doosri ek badlaav ko pehle kuch logon ko dikhana tha, purane version ko taiyaar rakhkar. Yeh ek *canary release* hai, purane khadaan abhyas se jisme chidiya ko pehle bheja jaata tha.

"Tum chaahogi ki kisi bhi samay," Imran ne kaha, "ek sawaal ka jawaab de sako. Theek-theek kya badla?"

## Saath le jaane layak baatein

Ek nirdesh ka badlaav system ka badlaav hai, bhale hi woh deployment jaisa na lage, aur ilaaj ek release gate hai: ek command jo har badlaav ke khilaaf ek versioned golden dataset chalata hai aur use rok deta hai agar koi number pehle se tay seema se neeche gire. Gate kai staron par naapta hai, kyunki ek achha antim score ek tootta hissa chhupa sakta hai, aur woh vaakya jo release rokta hai usme numbers hote hain, raayein nahi. "Usne aisa kyun kiya?" ka jawaab dene ke liye, har request ke raaste ka ek trace record rakho, jo jaanne aur andaaza lagane ka farak hai. Ausat dheeli poonchh chhupate hain, isliye p95 naapo, aur poore kaam ka kharcha ginno, call ka nahi. Quality bina kisi ke code ko chhue badal sakti hai, kyunki traffic, data aur providers sab hilte hain. Isliye har hisse ko apna version do, taaki use akele rollback kiya ja sake, aur badlaav pehle kuch logon ko dikhao.

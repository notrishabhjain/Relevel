---
title: Gates, Traces Aur Rollbacks
summary: Ek Friday raat ek instruction mein bina test ke kiya gaya ek edit dikhata hai ki jo badlaav deployment jaisa nahi lagta use bhi ek gate se kyun guzarna chahiye, aur "yeh aisa kyun kiya?" ka jawaab chaalis second mein kyun milna chahiye. Chapter golden datasets, regressions, release gates, observability, trace records, p95 aur canary releases samjhata hai.
course: ch16e ch17o
goals:
  - samjhana ki instruction mein edit ek bhesh badla hua code badlaav kyun hai
  - versioned golden dataset se release gate banana aur woh vaakya likhna jo release rok de
  - bina andaaza lagaye "isne aisa kyun kiya?" ka jawaab dene ke liye trace records istemaal karna
  - p95 se dheemi poonchh naapna, ek poore kaam ka kharcha ginna, aur badlaav pehle kuch users ko dena
terms:
  - golden dataset | cases ka versioned, pratinidhi set, apekshit vyavahaar ke saath, jo tay karta hai ki ek system ke liye achha ka matlab kya hai; ise ek version number chahiye taaki nateeja dobara chalaya ja sake | golden set
  - regression | aisa badlaav jo system ko us cheez mein kharab banata hai jo woh pehle achhe se karta tha | regressions
  - release gate | ek swachalit jaanch jo golden dataset ko ek badlaav ke khilaaf chalati hai aur release rok deti hai agar koi number apni seema se neeche gire | release gates, gate
  - observability | system ke rakhe records se dekh paana ki usne kya kiya aur kyun, andaaza lagaye bina | 
  - trace record | ek request ke system se poore raaste ka saheja hua record: input, versions, charan, samay, kharcha aur nateeja | trace records
  - p95 | woh samay jise 100 mein se 95 requests haraati hain; yeh dheeli poonchh dikhata hai jo ek ausat chhupa leta hai | 
  - canary release | ek badlaav ko pehle users ke ek chhote hisse ko dikhana, purane version ko taiyaar rakh kar, sabko milne se pehle | canary
---

Ek Friday raat gyarah baje mein das minute kam par ek doosri team ka engineer, jo ek milte-julte project ke liye guard ki configuration udhaar le raha tha, ne finder ke instruction mein ek line dekhi jise usne maana ki use zyada saavdhaan bana deti hai: "Agar shak ho toh detail ko personal maano." Usne use "agar kaafi shak ho" kar diya. Usne ek file mein ek line badli, save kiya, aur is santosh ke saath so gaya ki usne ek chhoti cheez ko thoda behtar bana diya. Edit mein chaalis second lage.

Monday subah sweep ne, jo Lakshmi Iyer ne ab hafte mein ek baar chalana shuru kiya tha, paanch sau chats mein teis unhidden pehchaan ke number paaye, jahan pehle nau the. Kisi ne kuch deploy nahi kiya tha. Koi code nahi badla tha aur koi release nahi gaya tha. Ek configuration file edit hui aur save ho gayi thi, aur Friday raat se guard alag tarah se behave kar raha tha.

## Case: ek edit jo deployment nahi tha

"Instruction edit karna deployment jaisa nahi lagta," Imran Qureshi ne kaha, sapaat lahje mein, jaise koi nidaan padh raha ho. Woh hai, usne kaha, aur teams is niyam ko kisi bhi aur se zyada baar todti hain. Prompt badlaav ek bhesh badla hua code badlaav hai. Yeh chapter us machinery ko batata hai jo aisi ghatna ko na-mumkin banati hai aur un records ko jo kisi bhi ghatna ko samjhaane laayak banate hain.

## Gate kya hai

Anaya ne log mein, tareekh ke saath, likha ki use kya chahiye: ek aisa tareeka jisse yeh na-mumkin ho. Woh project ke us hisse ki taraf mudi jo woh April se bana rahi thi bina use uska sahi naam diye.

Answer key mein ab do sau bees rows thi aur woh har hafte badhti thi. Woh expected vyavhaar ke saath cases ka ek set thi, versioned aur rakhi hui, aur is kaam mein use *golden dataset* kehte hain. Imran use is baat ki yaaddasht kehta tha ki product ke liye "achha" ka matlab kya hai. Uska mulya uski coverage mein hai: aasaan messages, paraphrases, uljhe hue, jinka koi jawaab nahi, doosri bhashaon ke, aur jinme injected instructions hain. Woh asli risks ki pratinidhi hai, aur chaplusi bhare demonstrations ki nahi. Uska ek version number hai, kyunki jo evaluation kisi badlaav ke baad dobara nahi chalaya ja sakta woh sirf ek kissa hai.

Answer key aur duniya ke beech Imran ek darwaaza chahta tha jo sirf paas hone wale badlaavon ke liye khule. Usne use ek din mein banaya. Woh ek hi command tha, chaar kadam ke saath.

1. Golden dataset ko maujooda instruction par chalao.
2. Nateeje ko grade karo aur numbers chhapo.
3. Har number ko pehle se likhe threshold se milao.
4. Agar kuch bhi apne threshold se neeche ho, toh zor se kaaran ke saath fail ho, aur badlaav ko jaane na do.

Woh apne aap tab chalta tha jab koi bhi file badalti: code, instruction, model ka naam, index ya koi tool. Yeh *release gate* hai. Yeh ek *regression* pakadta hai, aisa badlaav jo kuch aisi cheez ko kharab karta hai jo pehle achhi thi, jo bina kisi code line ke compile fail hue ho sakta hai. Imran ne use Friday ke edit par chalaya.

```
GATE FAILED
  Fixed-shape numbers found:  96.4%   (threshold 98.0%)
  Answer key version 12, 220 rows.
  Blocked: instruction v14 -> v15.
```

Usne kaha ki woh chaalis second mein yeh bata deta, aur woh chahta ki kaash batata.

## Woh vaakya jo release rokta hai

Lakshmi, jo poore samay maujood thi, ne Anaya se woh vaakya likhne ko kaha jo woh meeting mein kahegi: policy nahi, balki asli vaakya, numbers ke saath, jo release rokta hai. Anaya ne use do baar likha. Pehle roop mein "lagta hai" shabd tha, aur usne use kaat diya, kyunki jis vaakya mein woh ho woh kuch nahi rokta. Doosra yeh tha: hum ship nahi kar rahe, kyunki answer key version 12 par fixed-shape numbers par recall 96.4 hai, 98 ke threshold ke saamne. "Yeh release rokta hai," Lakshmi ne kaha. "Thresholds rokte hain. Raay nahi."

Gate ek se zyada number dekhta tha. Ek achha antim score ek toote hue hisse ko chhupa sakta hai, kyunki ek saaf-suthra system gayab saboot ko dhaakne ke liye kaafi baar kaam kar sakta hai ki demonstration mein theek dikhe. Isliye gate ek saath kai levels par naapta tha.

Table: Gate kya naapta hai
| Level | Sawaal |
| --- | --- |
| Dhoondhna | Kya finder ne sahi cheezein dhoondhi? |
| Faisla | Kya rule-keeper ne unke saath sahi kiya? |
| Tools | Kya look-up tool sahi chuna gaya? |
| Kharcha aur samay | Kya poore ne utna samay aur kharcha liya jitna lena chahiye? |
| Hamle | Kya hamle ab bhi fail hote hain? |

Paas hone ke liye sab chahiye the. Anaya ne specification ke us section mein ek line joda jahan faisle record hote hain, aur woh sabse mushkil thi: kaun sa threshold gair-samjhaute ka hai? Fixed-shape numbers par recall, usne likha. Baaki sab par woh samjhauta kar sakti thi.

## Parcel aur uske scans

Ek Wednesday ko Lakshmi ne ek sawaal poochha, us lahje mein jo woh tab istemaal karti thi jab use pehle se jawaab ka shak ho: solah tareekh ko ek chat mein Mrs. Kulkarni ka pata dikhta kyun chhoda gaya? Kisi ko nahi pata tha, jo pehli samasya thi. Guard ne us hafte hazaaron faisle kiye the, aur har ek sirf ek line ke roop mein record tha jo kehti thi ki kuch chhupaya gaya ya nahi. Unme dhoondhna andaaza tha.

Imran ne yeh dak-ghar ke ek chitra se samjhaya ki kya gayab tha. Jab ek parcel kho jaata hai, courier bata sakta hai ki woh aakhri baar kahan scan hua tha, kyunki har kadam par scan hota hai. Scans ke bina use khoja nahi ja sakta.

::: def Trace record aur observability
*Trace record* ek request ke liye scan log hai. Usme request ka number, har us cheez ke versions jisne use chhua, woh kadam jinse woh guzri, har ek ne kitna samay liya, kitna kharcha hua aur woh kaise khatam hui. *Observability* aise records se yeh dekh paana hai ki system ne kya kiya aur kyun, andaaza lagaye bina. Agar koi sirf input aur output dekh sakta hai, toh har nidaan andaaza hai.
:::

Imran ek mahine se trace records bana raha tha, aur Lakshmi ke sawaal ka jawaab chaalis second mein aa gaya. Solah tareekh ka message lamba tha aur teen tukdon mein kata gaya tha. Finder doosre tukde par time out ho gaya tha, aur system ne, jaisa design tha, us tukde ke liye safe mode par aa gaya tha, jo patton ke baare mein nahi jaanta tha. Pata usi tukde mein tha. Lakshmi ne kaha ki yeh design ke mutabik kaam kiya. "Usne wahi kiya jo humne use kaha," Imran ne kaha. "Humne use kuch aisa kaha jo kaafi achha nahi hai." Usne board par ek nayi line likhi: safe mode mein time out hone par poora tukda mask karna chahiye, sirf numbers nahi. Usne use lunch se pehle theek kar diya.

## Woh average jisne poonchh chhupa di

Anaya ne dashboard par ek message ka ausat samay dekha. Woh ek second ka dasva hissa tha, aur sab theek lag raha tha. Imran asahmat tha: ausat poonchh ko chhupata hai. Jo naap maayne rakhta hai woh *p95* hai, woh samay jise sau mein se pachaanve requests peechhe chhod dete hain. Ausat 0.12 second tha aur p95 1.9. Bees mein se ek message dedh second se zyada ka tha, aur users poonchh ko ausat se kahin zyada mehsoos karte hain. Usne har stage naapa aur paaya ki poonchh ek stage ki thi, order look-up, jo kabhi-kabhi dheema hota tha. Wahi stage poonchh ka maalik tha, aur poonchh wahi thi jahan kaam tha.

Wahi kharche par laagu hua, jise woh ab har request ke liye track karta tha. Jaanne layak cheez ek call ka kharcha nahi tha balki ek safaltapoorvak saaf kiye gaye message ka kharcha tha, retries aur extra rounds ginkar.

## Jo bina kisi ke chhue badal sakta hai

Imran ne Anaya se teen cheezein ginane ko kaha jo ek hafte mein, jisme kisi ne kuch deploy nahi kiya, assistant ko dheema kar sakti thi. Usne mix of traffic sujhaya, jisme October mein Devanagari lipi ke zyada messages the, documents ki sankhya, aur look-up ke doosri taraf provider ka response time. Inme se koi bhi repository mein nahi hai, isliye unhe dashboard par hona chahiye.

Dashboard ab jaisa tha, usme chhe panels the: quality, safety, speed, kharcha, traffic aur failures. Har ek ka ek naap, ek sroot, ek maalik aur ek threshold tha. Kuch alerts kisi insaan ko jagaate aur doosre sirf dekhe jaate. Anaya ne ek-ek panel hatakar dekha tha ki kaun sa incident samajhna mushkil ho jaata, aur har hatane se woh hua, jo maksad tha.

Imran ne do aur aadatein zaroori maani, dono saadhaaran software se udhaar li hui. Pehli har hisse ko alag-alag version karna tha, instruction, model, index aur tool descriptions, taaki kuch bhi khud se rolled back ho sake. Doosri kisi badlaav ko pehle kuch users ko dikhana tha, puraana version taiyaar rakhkar. Yeh *canary release* hai, khaan ke puraane tareeke se naam liya gaya jisme pehle chidiya bheji jaati thi. Hamesha jis sawaal ka jawaab dene mein sakshm hona chahiye, usne kaha, woh yeh hai ki theek-theek kya badla.

## Saaraansh

Instruction mein badlaav system mein badlaav hai, bhale hi woh deployment jaisa na lage. Ilaaj ek release gate hai: ek command jo har badlaav par ek versioned golden dataset chalata hai aur use rokta hai agar koi bhi number pehle se tay threshold se neeche ho.

- Gate ek saath kai levels par naapta hai, kyunki ek achha antim score ek toote hisse ko chhupa sakta hai. Jo vaakya release rokta hai usme numbers hote hain, raay nahi.
- "Isne aisa kyun kiya?" ka jawaab dene ke liye har request ke raaste ka ek trace record rakho. Wahi jaanne aur andaaza lagane ka antar hai.
- Averages dheemi poonchh ko chhupate hain, isliye p95 naapo, aur call ka nahi balki poore kaam ka kharcha ginno.
- Quality bina kisi ke code chhue badal sakti hai, kyunki traffic, data aur providers sab hilte hain. Har hisse ko apna version do taaki woh khud wapas ja sake, aur badlaav pehle kuch users ko dikhao.

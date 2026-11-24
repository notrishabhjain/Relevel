---
title: Instructions Dena
summary: Team pehli baar language model se guard ka kaam karwati hai. Woh teen alag tareekon se fail hota hai. Aap seekhte hain ki prompt, system prompt, temperature, hallucination aur worked example kya hain. Aur yeh bhi ki instruction failure ko kam karta hai, uski wajah ko khatam nahi karta.
course: ch2 ch21
goals:
  - bata paana ki prompt aur system prompt kya hain, aur standing instructions har request ke saath kyun jaati hain
  - samjha paana ki temperature kya badalta hai aur kya nahi
  - hallucination pehchaan paana, aur bata paana ki woh kyun hoti hai
  - prompting ke 4 tareeke taakat ke order mein rakh paana, aur samjha paana ki instruction failure ko kam karta hai, uski wajah nahi hataata
terms:
  - prompt | woh parchi jo aap model ko thamate hain: aap kya chahte hain, aur kaise; usmein instructions, examples aur kaam ka material ho sakta hai | prompts
  - system prompt | dukaan ki deewar par lage niyam, jo har order se pehle padhe jaate hain; app inhe har request ke saath bhejta hai, jisme likha hota hai ki assistant kaun hai aur use kya karna hai aur kya nahi | system prompts
  - temperature | ek dial jo tay karta hai ki model agle shabd mein kitna jokhim uthaata hai; low rakhne par safe khelta hai aur har baar milte-julte jawaab deta hai, high rakhne par chance leta hai aur zyada variety deta hai | 
  - hallucination | pakke yakeen se boli gayi banawati baat: ek banaya hua jawaab jo seedhe chehre se diya jaata hai; aisa isliye hota hai ki model likely shabd gadhta hai, aur "mujhe nahi pata" aksar sabse likely nahi hota | hallucinations, hallucinate
  - worked example | aap jaisa output chahte hain, uska ek poora bana hua sample, jo model ko dikhaya jaata hai, taaki woh aapke description se andaaza lagane ki jagah format copy kare | worked examples
---

Pehle demonstration ke baad wale Monday ko Farah Sheikh teen messages lekar glass meeting room mein aayi. Usne unhe ek card par likha tha. Uski team ne yeh messages pichhli shaam asli customers ke andaaz mein banaye the. Koi bhi asli nahi tha.

Anaya ne is baat par zor diya tha. Lakshmi Iyer ko pata chala. Unhone kaha ki project ke baare mein yeh pehli samajhdaar baat hai. Asli logon ke raazon par privacy tool ko test karna apne aap mein ek chhota scandal hota.

Pehla message tha: "My name is Amit Sharma. My PAN is ABCDE1234F and I transferred ₹4 lakh from my HDFC account ending 4521. Why was my loan rejected?"

Imran Qureshi ne use ek window mein type kiya. Uske upar usne apni ek line rakhi: "List every piece of personal information in this message." Yeh chapter agle teen ghante ki kahani hai. Model guard ka kuch kaam kar raha tha. (Guard woh tool hai jo personal details dhoondhta aur chhupata hai.) Uski failures ne team ko uski safalta se zyada sikhaya.

## Case: pehli list

Jawaab do second mein aa gaya.

```
1. Name: Amit Sharma
2. PAN: ABCDE1234F
3. Bank: HDFC
4. Account ending: 4521
5. Amount transferred: ₹4 lakh
6. Loan rejection
```

Anaya ne haath mein pencil lekar use padha. Usne 4 sahi cheezein ginin: naam, PAN, bank, aur account ke aakhri digits. Amount sirf ek number hai. Woh kisi ko pehchaanta nahi. Loan reject hona bhi kisi insaan ko dhoondhne ke kaam nahi aata. Yaani model ne do aisi cheezein list ki thi jinhe chhupana zaroori nahi tha.

Imran ne kaha ki list karna chhupana nahi hai. Chhupana baad ka step hai. Phir usne wahi message dobara chalaya. Is baar list mein 6 nahi, 4 cheezein thi. Teesri baar mein 7 aayi. Surname ek alag entry ban kar dohraya gaya tha. Farah ne wahi sawaal poochha jo sab poochhte. Jawaab baar-baar badal kyun raha hai?

## Temperature: variety ka dial

Jawaab is baat mein hai ki model har shabd kaise chunta hai. Ise ek tote ki tarah sochiye jisne poori library padh li ho. Har kadam par uske paas kuch likely agle shabd hote hain. Har shabd ke chunne ka ek chance hota hai. (Model token mein kaam karta hai, yaani shabd ke chhote tukde, Lego ki eent jaise.) *Temperature* naam ki setting tay karti hai ki model kitna jokhim uthaye. Yaani woh kam likely shabd chunne ko kitna taiyaar hai.

High temperature par model chance leta hai. Uske jawaab rangeen aur alag-alag hote hain. Kavita likhne ya pet ka naam sochne ke liye yeh theek hai. Low temperature par, zero ke paas, woh safe khelta hai. Woh lagbhag hamesha sabse likely token chunta hai. Isliye ek hi sawaal ka jawaab har baar lagbhag ek jaisa aata hai.

Imran ne setting kam ki aur message paanch baar chalaya. Paanchon list lagbhag ek jaisi thi. Is kaam ke liye Anaya yahi chahti thi. Ek hi sawaal ka jawaab Tuesday ko wahi hona chahiye jo Monday ko tha.

::: watch Ek jaisa hona, sahi hona nahi hai
Low temperature jawaab ko ek jaisa banata hai. Sahi nahi banata. Jo model zero par galat hai, woh har baar ek hi tarah galat hoga. Kisi ne aaj tak ek dial ghuma kar system ko sahi nahi banaya.
:::

## Standing instructions

Doosra message Hinglish mein tha. Farah ne use tezi se type kiya, jaise koi roz chalis aise likhta ho: "Sir mera aadhaar 4321 5678 9012 hai aur ye number 98xxxxxx12 pe call kar lena."

Model ko Aadhaar number mil gaya. Lekin usne "98xxxxxx12" ko bhi mobile number ki tarah list kiya. Ek agent use pehle hi x type karke chhupa chuka tha. Guard yeh report karta, toh wahi number do baar chhupta.

Aisi problem ka ilaaj ek instruction hai. Model har message ke baad sab bhool jaata hai, goldfish ki tarah. Isliye instruction har request ke saath jaani chahiye. Imran ne ek doosra box khola aur ek chhota paragraph type kiya.

Dukaan ki deewar par lage niyam sochiye. Staff har order se pehle unhe padhta hai. Unmein likha hai ki assistant kaun hai, aur use kya karna hai aur kya nahi. Yahi *system prompt* hai. Yeh aam text hai, bilkul customer ke message jaisa. App bas use har baar sabse pehle bhej deta hai.

::: def Prompt aur system prompt
*Prompt* woh parchi hai jo aap model ko thamate hain. Usmein instructions, examples, aur woh material hota hai jis par model ko kaam karna hai. *System prompt* woh hissa hai jo ek request se doosri request tak same rehta hai.
:::

Yeh vendors se baat karte waqt kaam aata hai. (Vendor woh company hai jo aapko product ya service bechti hai.) Maan lijiye koi vendor kehta hai ki usne AI ko aapki company ke liye customise kiya hai. Aksar usne bas ek system prompt likha hota hai. Yeh theek hai, aur iske paise dena sahi ho sakta hai. Lekin poochhiye ki aur kya badla gaya, agar kuch badla ho.

## Jahan woh cheezein gadhta hai

Teesra message woh tha jo Imran ne sambhal kar rakha tha: "What documents do I need to renew my driving licence?"

Isme kuch personal nahi hai. Achha tool yeh keh kar ise chhod deta. Pehli baar model ne bilkul yahi kiya. Teesri baar usne likha, "Personal information: driving licence (document type)." Paanchvi baar usne kuch gadh diya.

```
Personal information: the customer's city of residence, likely Pune.
```

Farah ne kaha ki message mein Pune hai hi nahi. Imran ne haan kaha. Model ko customer ke sheher ke baare mein kuch nahi pata tha. Use message ki personal information maangi gayi thi. Isliye usne aise behave kiya jaise jawaab ki ummeed ho. Is sawaal ke baad sabse likely text ek list hai. Aur list mein kuch na kuch hona hi chahiye.

Is tarah ki failure ka naam bura hai. *Hallucination* pakke yakeen se boli gayi banawati baat hai. Yeh ek gadha hua jawaab hai jo seedhe chehre se diya jaata hai. Yeh bilkul sach jaisa dikhta hai. Naam se lagta hai ki machine mein kharabi hai. Lekin machine jaisa bana hai, waisa hi chal rahi hai.

Woh un jagahon par likely shabd gadh rahi hai jahan chup rehna tha. Model bharose se nahi bata sakta ki use kab nahi pata. "Mujhe nahi pata" kehna alag se sikhana padta hai. Phir bhi yeh hamesha nahi tikta.

Guard ke liye nateeja saaf tha. Maan lijiye model koi detail gadh de. Tab guard woh cheez chhupa dega jo thi hi nahi. Aur agar gadhi hui baat galat ho, toh kisi ko pata nahi chalta. Milane ke liye kuch hai hi nahi.

## 4 tareeke, taakat ke order mein

Team ne baaki din instruction behtar banane mein lagaya. Zyadatar log pehla prompt ek vinamr request ki tarah likhte hain: "please do this". Yeh waisa hi hai jaise anjaan se raasta poochhna aur yeh na batana ki aap kahan hain. Behtar hai ki prompt ko recipe card ki tarah likha jaaye. Usmein likha ho ki dish kya hai, aur kaise pata chalega ki sahi bani.

Chaar tareeke hain. Woh barabar taakatwar nahi hain. Table unhe sabse taakatwar pehle dikhata hai.

Table: Prompt behtar banane ke 4 tareeke, sabse taakatwar pehle
| Tareeka | Kya karta hai | Guard ka example |
| --- | --- | --- |
| Worked example | Chahe gaye output ka ek poora bana hua sample dikhata hai, taaki model description ki nakal karne ki jagah format ko copy kare | Ek banaya hua message, uske saath chahi hui list line-by-line, aur ek mushkil message jisme koi personal detail nahi hai, jiska jawaab "Nothing found" hai |
| Kaam aur padhne wale ka naam batao | Batata hai ki task kya hai aur result kaun use karega | "Aap ek customer ke chat message mein woh details dhoondh rahe hain jo kisi ek insaan ko pehchaan sakti hain. Aapka reader ek program hai, jo aapki list ki hui har cheez ko chhupa dega" |
| Kaam ko steps mein todo | Model se hisse order mein karwata hai, taaki kaam ko check kiya ja sake | "Pehle, message padho. Doosre, har detail list karo aur batao woh kahan hai. Teesre, jo cheez kisi insaan ke baare mein nahi hai, use hata do" |
| Jo galat ho chuka hai, use mana karo | Jo failure pehle dekhi ja chuki hai, uska naam leta hai | "Aisi detail mat gadho jo message mein nahi hai" |

*Worked example* sabse taakatwar hai. Log ise sabse baad mein aazmate hain. Output ko shabdon mein batayiye, toh model aapke shabdon ki nakal karta hai. Poora bana example dikhayiye, toh woh format copy karta hai. Yeh cook ko tayyar dish ki photo dikhane jaisa hai.

Anaya ne ek aam example likha aur ek mushkil. Aise do examples chhe ek jaise examples se behtar hain. Unhe bhejne mein token bhi bahut kam lagte hain.

Chautha tareeka sabse kamzor hai. Use ek-do baar karo, un failures ke liye jo aapne sach mein dekhi hain. Niyamon ki lambi list mat banao. Lambi list utna kaam nahi karti jitna log sochte hain.

## Kam hona, theek hona nahi hai

Yeh aakhri baat chapter ke sabse zaroori vichar tak le jaati hai. Team ne ise khud khoja. Anaya ne mana karne wali line jodi. Pune ka gadhna ek din ke liye ruk gaya.

Tuesday ko Farah ne ek cousin ke baare mein message likha, jo "station ke paas wale bank" mein kaam karta tha. Model ne niyam maana. Usne koi sheher nahi gadha. Uski jagah usne ek aisi bank branch ka naam de diya jo thi hi nahi.

"Yeh ab bhi karta hai," Anaya ne kaha.

"Kam karta hai," Imran ne kaha.

Instruction failure ko kam karti hai. Woh us wajah ko nahi hatati jisse failure hoti hai. Machine text ko aage badhane ke liye bani hai. Kabhi-kabhi aage ke likely shabd galat hote hain.

::: key Kam hona, theek hona nahi hai
Koi kehta hai ki ek niyam jodne se problem hal ho gayi. Ek sawaal poochhiye. Kya niyam ne wajah hata di? Ya sirf problem kam baar dikhne lagi? Anaya ne yeh shabd whiteboard ke upar laal rang mein likhe. Woh project ke baaki samay wahin rahe.
:::

## Lambi instruction ki keemat

Ginne ke liye ek cheez aur thi. Examples, steps aur warning ke saath system prompt bada ho gaya tha. Pehle woh ek line tha. Ab woh 400 token ka tha. Aur woh har message ke saath jaata hai.

Maan lijiye mahine mein ek lakh chats hain. Yeh 4 crore token ki instruction hai. Customer ek shabd likhe ya hazaar, isse farq nahi padta. Yeh aise hai jaise har SMS par wahi lamba note chipka ho. Imran ne kaha ki yeh keemat dene layak hai. Lekin yeh faisla hona chahiye, hadsa nahi.

## Summary

Prompt woh parchi hai jo aap model ko thamate hain. Standing hissa har request ke saath jaata hai, kyunki model kuch yaad nahi rakhta. Wahi system prompt hai.

- Temperature variety aur ek-jaisepan ke beech ka dial hai. Low setting jawaab ko ek jaisa banati hai, sahi nahi.
- Model se woh cheez maangiye jo uske paas nahi, toh woh aksar use gadh deta hai. Woh usi shaant awaaz mein bolta hai jismein sach bolta hai. Yahi hallucination hai.
- Taakat ke order mein 4 tareeke: worked example, kaam aur reader ka naam, kaam ko steps mein todna, aur dekhi hui failures ko mana karna.
- Inmein se koi failure ki wajah nahi hatata. Woh use kam karte hain. Aur instruction ka har shabd har baar bhejne par paise leta hai.

Agle chapter mein Lakshmi ka sawaal wapas aata hai, aur Anaya ke paas abhi bhi yeh batane ka tareeka nahi hai ki tool kaam karta hai ya nahi.

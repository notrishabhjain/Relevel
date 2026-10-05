---
title: Nirdesh Dena
summary: Team pehli baar language model se guard ka kaam karwati hai aur use teen alag tareekon se fail hote dekhti hai. Chapter prompts, system prompts, temperature, hallucination aur worked examples samjhata hai, aur yeh antar ki failure ko kam hona banaam uski wajah ko hataana.
course: ch2 ch21
goals:
  - prompt aur system prompt batana, aur yeh ki standing instructions har request ke saath kyun bheje jaate hain
  - samjhana ki temperature kya badalta hai aur kya nahi
  - hallucination pehchaanna aur batana ki woh kyun hoti hai
  - prompting ke chaar tareekon ko taakat ke kram mein rakhna, aur samjhana ki ek instruction failure ko kam karta hai par uski wajah nahi hataata
terms:
  - prompt | woh text jo aap model ko bhejte hain, jisme nirdesh, udaharan aur woh material ho sakta hai jis par use kaam karna hai | prompts
  - system prompt | woh sthayi nirdesh jo ek app har request ke saath bhejta hai, yeh batate hue ki assistant kaun hai aur use kya karna aur kya nahi karna hai | system prompts
  - temperature | ek setting jo tay karti hai ki model kitni baar agla kam sambhav token chunta hai; kam par har baar milte-julte jawaab aate hain, zyada par zyada variety | 
  - hallucination | ek vishwas bhara, achhe se bana jawaab jo man se gadha gaya hai; yeh isliye hota hai ki model sambhav text predict karta hai, aur "mujhe nahi pata" shayad hi sabse sambhav text hota hai | hallucinations, hallucinate
  - worked example | jis output ki aapko zaroorat hai uska ek poora kiya hua namoona, jo model ko dikhaya jaata hai taaki woh aapke vivaran ki nakal karne ke bajaye format ki copy kare | worked examples
---

Pichhle demonstration ke baad wale Monday ko Farah Sheikh teen messages ek card par likhkar glass meeting room mein laayi. Uski team ne unhe pichhli shaam asli customers ke andaaz mein likha tha, aur unmein se koi asli nahi tha. Anaya ne is par zor diya tha. Jab Lakshmi Iyer ko pata chala, toh usne kaha ki yeh project ke baare mein sunayi gayi pehli samajhdaar baat hai, kyunki asli logon ke raazon par test hua privacy tool apne aap mein ek chhota scandal hota.

Pehla message tha: "My name is Amit Sharma. My PAN is ABCDE1234F and I transferred ₹4 lakh from my HDFC account ending 4521. Why was my loan rejected?" Imran Qureshi ne ise ek window mein type kiya, apni ek line ke neeche: "List every piece of personal information in this message." Yeh chapter us teen ghante ke baare mein hai jo iske baad chale. Model se guard ka ek hissa karne ko kaha gaya, aur uski galtiyon ne team ko uski safalta se zyada sikhaya.

## 11.1 Case: pehli list

Jawaab do second mein aaya.

```
1. Name: Amit Sharma
2. PAN: ABCDE1234F
3. Bank: HDFC
4. Account ending: 4521
5. Amount transferred: ₹4 lakh
6. Loan rejection
```

Anaya ne, pencil se padhte hue, chaar sahi cheezein ginin: naam, PAN, bank aur account ke aakhri ank. Raashi ek number hai aur kisi ko pehchaanne wali detail nahi, aur loan rejection se insaan ko dhoondha nahi ja sakta tha. Model ne do aisi cheezein list kar di thi jinhe chhupana nahi tha. Imran ne kaha ki list karna chhupana nahi hai, aur chhupana baad ka kadam hai. Phir usne wahi message dobara chalaya. Doosri list mein chhe nahi, chaar cheezein thi. Teesri baar mein saat aayin, aur surname ek alag entry ki tarah dohraya gaya. Farah ne poochha ki jawaab badal kyun jaata hai.

## 11.2 Temperature: variety ka dial

Har kadam par model ke paas kuch sambhav agle tokens hote hain, har ek ki apni sambhavna ke saath. *Temperature* naam ki setting tay karti hai ki woh kam sambhav tokens mein se ek chunne ko kitna taiyaar hai. Ooncha temperature par woh door tak jaata hai aur jeevant, alag-alag jawaab deta hai, jo kavita likhne ya pet ka naam sochne ke liye theek hai. Neeche, zero ke paas, woh lagbhag hamesha sabse sambhav token leta hai, isliye wahi sawaal lagbhag wahi jawaab paata hai.

Imran ne setting kam ki aur message paanch baar chalaya. Paanchon list lagbhag ek jaisi thi. Is kaam ke liye Anaya ko kam temperature chahiye tha, kyunki wahi sawaal Tuesday ko wahi jawaab paaye jo Monday ko paaya.

::: watch Ek jaisa hona sahi hona nahi hai
Kam temperature jawaab ko ek jaisa banata hai. Woh use sahi nahi banata. Jo model zero par galat hai woh har baar ek hi tarah galat hai, aur koi dial ghumakar system ko accurate nahi banata.
:::

## 11.3 Sthayi instructions

Doosra message Hinglish mein tha, jise Farah ne us raftaar se type kiya jaise koi roz aise chaalis message likhta hai: "Sir mera aadhaar 4321 5678 9012 hai aur ye number 98xxxxxx12 pe call kar lena." Model ko Aadhaar number mil gaya. Usne "98xxxxxx12" ko bhi mobile number ki tarah list kar diya, jabki ek agent use x type karke pehle hi chhupa chuka tha. Use report karne se guard use do baar chhupata.

Iska ilaj ek instruction hai, aur instruction har request ke saath bhejna padta hai kyunki model kuch yaad nahi rakhta. Imran ne doosra box khola aur ek chhota paragraph type kiya. Is tarah ke sthayi instructions, jo batate hain ki assistant kaun hai aur use kya karna hai aur kya nahi, *system prompt* hain. Woh saadhaaran text hai, message se kuch alag nahi, aur application use har request ke saath sabse pehle bhejta hai.

::: def Prompt aur system prompt
*Prompt* woh sab kuch hai jo model ko bheja jaata hai: instructions, udaharan aur woh material jis par use kaam karna hai. *System prompt* uska woh hissa hai jo ek request se doosri tak wahi rehta hai.
:::

Jab koi vendor kehta hai ki usne kisi company ke liye AI ko customise kiya hai, toh aksar usne ek system prompt likha hota hai. Yeh theek hai aur jaanna kaam ka hai, aur vendor se poochhne layak sawaal yeh hai ki aur kya, agar kuch, badla gaya.

## 11.4 Jahan woh gadhta hai

Teesra message woh tha jo Imran ne sambhaal kar rakha tha: "What documents do I need to renew my driving licence?" Usme kuch personal nahi hai, aur achha tool kehta ki nahi hai aur use chhod deta. Pehli baar mein model ne bilkul aisa hi kiya. Teesri baar usne kaha "Personal information: driving licence (document type)." Paanchvi baar usne ek detail gadh li.

```
Personal information: the customer's city of residence, likely Pune.
```

Farah ne dhyaan dilaya ki message mein Pune hai hi nahi. Imran ne kaha ki model ko customer ke shehar ke baare mein kuch nahi pata. Usse ek message mein personal information poochhi gayi thi aur woh aise behave kiya jaise jawaab ki ummeed ho. Us sawaal ke baad sabse sambhav text ek list hai, aur list mein kuch hona zaroori hai.

Is failure ka ek durbhagyapoorn naam hai. *Hallucination* ek aatmavishwaas se bhara, saaf-suthra par gadha hua jawaab hai, aur woh bilkul sach jaisa dikhta hai. Naam gadbad ka ishaara karta hai, par machine design ke hisaab se kaam kar rahi hai. Woh sambhav text ka anumaan lagaa rahi hai aisi jagah jahan chuppi ki zaroorat thi. Model hamesha nahi batata ki use nahi pata, kyunki "mujhe nahi pata" kehna alag se sikhana padta hai aur woh hamesha tikta nahi.

Guard ke liye iska ek khaas nateeja tha. Agar model koi detail gadhta hai, toh guard woh chhupata hai jo kabhi tha hi nahi. Agar gadhi hui detail galat hai, toh koi nahi jaanta, kyunki us se milane ko kuch nahi hai.

## 11.5 Chaar tareeke, taakat ke kram mein

Team ne baaki din instruction behtar karne mein bitaya. Zyadatar log pehla prompt ek anurodh ki tarah likhte hain, "kripya yeh karo", jo utni hi baar kaam karta hai jitni baar kisi ajnabi se bina bataye ki aap kahan hain raasta poochhna. Prompt ko specification ki tarah maanna behtar hai. Chaar tareeke hain, aur woh barabar mazboot nahi.

Table: Prompt behtar karne ke chaar tareeke, sabse mazboot pehle
| Tareeka | Kya karta hai | Guard se udaharan |
| --- | --- | --- |
| Worked example | Chaahe gaye output ka ek poora namoona dikhata hai, taaki model vivaran ki nakal karne ke bajaye format ki copy kare | Ek banaya hua message jiske saath chaahi hui list line-ba-line, aur ek aisa message jisme koi personal detail nahi aur jawaab "Nothing found" |
| Kaam aur padhne wale ka naam batao | Batata hai ki kaam kya hai aur nateeja kaun istemaal karega | "Aap ek customer ke chat message ki jaanch kar rahe hain ki usme aisi details hain ya nahi jo ek insaan ko pehchaan sakein. Aapka padhne wala ek program hai, jo woh sab chhupa dega jo aap list karenge" |
| Kaam ko kadamon mein todo | Model ko hisse kram se karwata hai, jisse jaanch layak kaam milta hai | "Pehle message padho. Doosre, har detail list karo aur batao woh kahan hai. Teesre, jo kisi insaan ke baare mein nahi hai use hatao" |
| Jo galat hua use mana karo | Pehle dekhi gayi failure ka naam leta hai | "Aisi detail mat gadho jo message mein nahi hai" |

*Worked example* sabse mazboot hai, aur log ise sabse aakhir mein aazmaate hain. Agar output ka varnan shabdon mein kiya jaaye, toh model un shabdon ki nakal karta hai. Agar ek poora example dikhaya jaaye, toh woh format ki copy karta hai. Anaya ne ek saadhaaran aur ek mushkil example likha. Do udaharan, ek saadhaaran aur ek mushkil, chhe ek jaise udaharanon se behtar hain aur bhejne mein bahut kam token lete hain. Chautha tareeka sabse kamzor hai. Woh un failures ke liye ek-do baar istemaal karne layak hai jo dekhi ja chuki hain, lambi list ki tarah nahi, kyunki woh utna kaam nahi karta jitna log maante hain.

## 11.6 Kam hona, theek hona nahi

Is aakhri baat ka kaaran chapter ka sabse zaroori vichaar hai, aur team ne use khud saabit kiya. Anaya ne mana karne wali line joda, aur Pune ka gadhna ruk gaya, ek din ke liye. Tuesday ko Farah ne ek cousin ke baare mein message likha jo "station ke paas bank mein" kaam karta tha. Model ne maana aur koi shehar nahi gadha. Uske bajaye usne ek aisi bank branch ka naam gadh diya jo thi hi nahi.

"Yeh ab bhi karta hai," Anaya ne kaha. "Kam karta hai," Imran ne kaha. Ek instruction failure ko kam karta hai. Woh uski wajah nahi hataata, jo yeh hai ki machine text ko aage badhane ke liye bani hai, aur kabhi-kabhi sambhav aage ka text jhooth hota hai.

::: key Kam hona, theek hona nahi hai
Jab koi kehta hai ki ek niyam jodne se samasya hal ho gayi, toh poochhna chahiye ki niyam ne wajah hatai ya sirf lakshan ko kam aam kiya. Anaya ne yeh shabd whiteboard ke sabse upar laal rang mein likhe, jahan woh project ke baaki samay tak rahe.
:::

## 11.7 Lambe instruction ka kharcha

Misaalon, kadamon aur chetavni ke saath system prompt ek line se chaar sau tokens ka ho gaya tha, aur woh har message ke saath bheja jaana tha. Mahine ke ek lakh chats par woh instructions ke chaar karod token hain, chaahe customer ek shabd likhe ya ek hazaar. Imran ne kaha ki kharcha dene layak hai, par yeh faisla hona chahiye, ittefaq nahi.

## Saaraansh

Prompt woh sab hai jo model ko bheja jaata hai. Uska sthayi hissa, jo har request ke saath dohraya jaata hai kyunki model kuch yaad nahi rakhta, system prompt hai.

- Temperature ek ek jaisepan aur variety ke beech ka dial hai. Kam setting jawaab ko ek jaisa banati hai par sahi nahi.
- Jis model se woh maanga jaye jo uske paas nahi hai, woh aksar use usi shaant awaaz mein gadh deta hai jisme woh sach bolta hai. Yeh hallucination hai.
- Taakat ke kram mein tareeke hain: worked example, kaam aur padhne wale ka naam batana, kaam ko kadamon mein todna, aur dekhi gayi failure ko mana karna.
- Inme se koi bhi failure ki wajah nahi hataata. Woh use kam karte hain, aur instruction ka har shabd har baar bhejne par charge hota hai.

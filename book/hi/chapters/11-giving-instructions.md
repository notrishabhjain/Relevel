---
title: Instructions Dena
summary: Team pehli baar language model se guard ka kaam karwati hai, aur use teen alag tareekon se fail hote dekhti hai. Chapter mein prompt, system prompt, temperature, hallucination aur worked example aate hain. Saath mein yeh farq bhi ki instruction failure ko kam kar deta hai, lekin uski wajah ko khatam nahi karta.
course: ch2 ch21
goals:
  - bata paana ki prompt aur system prompt kya hote hain, aur standing instructions har request ke saath kyun bheje jaate hain
  - samjha paana ki temperature kya badalta hai aur kya nahi badalta
  - hallucination pehchaan paana, aur bata paana ki woh kyun hoti hai
  - prompting ke 4 tareekon ko taakat ke order mein rakh paana, aur samjha paana ki instruction failure ko kam karta hai, uski wajah nahi hataata
terms:
  - prompt | woh text jo aap model ko bhejte hain; usmein instructions, examples, aur woh material ho sakta hai jis par model ko kaam karna hai | prompts
  - system prompt | woh standing instructions jo ek app har request ke saath bhejta hai, jinmein likha hota hai ki assistant kaun hai aur use kya karna hai aur kya nahi | system prompts
  - temperature | ek setting jo tay karti hai ki model kitni baar agla kam likely token chunta hai; low rakhne par har baar milte-julte jawaab aate hain, high rakhne par zyada variety | 
  - hallucination | ek aisa jawaab jo poore confidence se, saaf-suthre tareeke se diya gaya ho, lekin gadha hua ho; aisa isliye hota hai ki model likely text predict karta hai, aur "mujhe nahi pata" aksar sabse likely text nahi hota | hallucinations, hallucinate
  - worked example | aap jaisa output chahte hain, uska ek poora bana hua sample, jo model ko dikhaya jaata hai, taaki woh aapke description ki nakal karne ki jagah format ko copy kare | worked examples
---

Pehle demonstration ke baad wale Monday ko Farah Sheikh ek card par teen messages likhkar glass meeting room mein aayi. Unki team ne yeh messages pichhli shaam asli customers ke andaaz mein likhe the, lekin koi bhi asli nahi tha. Anaya ne is baat par zor diya tha. Lakshmi Iyer ko pata chala toh unhone kaha ki project ke baare mein yeh pehli samajhdaar baat hai. Kyunki asli logon ke raazon par privacy tool ko test karna, apne aap mein ek chhota sa scandal hota.

Pehla message yeh tha: "My name is Amit Sharma. My PAN is ABCDE1234F and I transferred ₹4 lakh from my HDFC account ending 4521. Why was my loan rejected?" Imran Qureshi ne ise ek window mein type kiya, aur uske upar apni ek line likhi: "List every piece of personal information in this message." Yeh chapter uske baad ke teen ghanton ki kahani hai. Model se guard ka ek hissa karwaya gaya tha, aur uski galtiyon ne team ko uski kaamyabi se zyada sikhaya.

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

Anaya ne pencil lekar padha aur 4 cheezein sahi ginin: naam, PAN, bank, aur account ke aakhri digits. Amount sirf ek number hai, usse kisi insaan ki pehchaan nahi hoti. Aur loan reject hone se bhi kisi ko dhoondha nahi ja sakta. Matlab model ne 2 aisi cheezein list kar di thi jinhe chhupane ki zaroorat nahi thi. Imran ne kaha ki list karna aur chhupana alag cheezein hain, chhupana baad ka step hai. Phir usne wahi message dobara chalaya. Is baar list mein 6 nahi, 4 items aaye. Teesri baar 7 items aaye, aur surname ek alag entry ban kar dobara aa gaya. Farah ne poochha, jawaab badal kyun jaata hai?

## Temperature: variety ka dial

Model har step par kuch likely agle tokens ke beech chunta hai, aur har token ki ek probability hoti hai. *Temperature* naam ki setting tay karti hai ki model kam likely tokens mein se kisi ek ko chunne ke liye kitna taiyaar hai. Temperature high ho toh model door-door tak jaata hai, aur alag-alag, jaandaar jawaab deta hai. Kavita likhne ya pet ka naam sochne ke liye yeh badhiya hai. Temperature low ho, zero ke aas-paas, toh model lagbhag hamesha sabse likely token leta hai. Isliye wahi sawaal poochho toh lagbhag wahi jawaab milta hai.

Imran ne setting kam ki aur message 5 baar chalaya. Paanchon lists lagbhag ek jaisi thi. Anaya ko is kaam ke liye low temperature hi chahiye tha. Kyunki jo sawaal Monday ko poochha, uska jawaab Tuesday ko bhi wahi milna chahiye.

::: watch Ek jaisa hona, sahi hona nahi hai
Low temperature jawaab ko consistent banata hai. Sahi nahi banata. Jo model zero par galat hai, woh har baar ek hi tarah se galat rahega. Sirf ek dial ghumakar kisi system ko accurate nahi banaya ja sakta.
:::

## Standing instructions

Doosra message Hinglish mein tha. Farah ne use itni tezi se type kiya, jaise koi insaan roz aise 40 messages likhta ho: "Sir mera aadhaar 4321 5678 9012 hai aur ye number 98xxxxxx12 pe call kar lena." Model ko Aadhaar number mil gaya. Lekin usne "98xxxxxx12" ko bhi mobile number ki tarah list kar diya, jabki ek agent x type karke use pehle hi chhupa chuka tha. Agar model ise bhi report kare, toh guard ise do baar chhupayega.

Iska ilaaj ek instruction hai. Aur woh instruction har request ke saath bhejna padega, kyunki model ko kuch yaad nahi rehta. Imran ne ek doosra box kholkar ek chhota sa paragraph type kiya. Is tarah ki standing instructions, yaani jo batati hain ki assistant kaun hai aur use kya karna hai aur kya nahi, unhe *system prompt* kehte hain. Yeh bhi aam text hi hai, message se kuch alag nahi. Bas application ise har request mein sabse pehle bhejta hai.

::: def Prompt aur system prompt
*Prompt* woh sab kuch hai jo model ko bheja jaata hai: instructions, examples, aur woh material jis par model ko kaam karna hai. *System prompt* us prompt ka woh hissa hai jo ek request se doosri request tak same rehta hai.
:::

Jab koi vendor kehta hai ki usne kisi company ke liye AI ko customise kiya hai, toh bahut baar usne bas ek system prompt likha hota hai. Yeh galat nahi hai, lekin jaanna zaroori hai. Vendor se poochne layak sawaal yeh hai ki iske alawa aur kya badla gaya, agar kuch badla ho.

## Jahan woh cheezein gadhta hai

Teesra message woh tha jo Imran ne bacha kar rakha tha: "What documents do I need to renew my driving licence?" Isme koi personal detail nahi hai. Achha tool bolta ki kuch nahi mila, aur chhod deta. Pehli run mein model ne bilkul yahi kiya. Teesri run mein usne likha "Personal information: driving licence (document type)." Paanchvi run mein usne ek detail gadh li.

```
Personal information: the customer's city of residence, likely Pune.
```

Farah ne dhyaan dilaya ki message mein Pune kahin hai hi nahi. Imran ne kaha ki model ko customer ke shehar ke baare mein kuch pata hi nahi hai. Usse kaha gaya tha ki message ki personal information batao, toh woh aise chal pada jaise koi jawaab dena zaroori ho. Is sawaal ke baad sabse likely text ek list hota hai, aur list mein kuch na kuch toh hona hi chahiye.

Is failure ka naam thoda ajeeb hai. *Hallucination* ka matlab hai ek aisa jawaab jo poore confidence se, saaf-suthre tareeke se diya gaya ho, lekin gadha hua ho. Aur woh bilkul sach jaisa dikhta hai. Naam sunkar lagta hai ki machine kharab ho gayi, lekin machine apne design ke hisaab se hi kaam kar rahi hai. Woh likely text predict kar rahi hai, ek aisi jagah jahan chup rehna chahiye tha. Model hamesha nahi bata paata ki use kuch nahi pata. Kyunki "mujhe nahi pata" kehna usse alag se sikhana padta hai, aur woh har baar tikta bhi nahi.

Guard ke liye iska seedha matlab tha. Agar model koi detail gadh de, toh guard woh cheez chhupayega jo kabhi thi hi nahi. Aur agar gadhi hui detail galat hai, toh kisi ko pata bhi nahi chalega, kyunki us detail ko milane ke liye kuch hai hi nahi.

## 4 tareeke, taakat ke order mein

Team ne baaki din instruction ko behtar banane mein lagaya. Zyadatar log pehla prompt ek request ki tarah likhte hain, "please yeh kar do". Aisa prompt utni hi baar kaam karta hai, jitni baar aap kisi anjaan se raasta poochhein aur yeh na batayein ki aap hain kahan. Prompt ko ek specification ki tarah dekhna behtar hai. Iske 4 tareeke hain, aur woh sab barabar taakatwar nahi hain.

Table: Prompt behtar banane ke 4 tareeke, sabse taakatwar pehle
| Tareeka | Kya karta hai | Guard ka example |
| --- | --- | --- |
| Worked example | Chahe gaye output ka ek poora bana hua sample dikhata hai, taaki model description ki nakal karne ki jagah format ko copy kare | Ek banaya hua message, uske saath chahi hui list line-by-line, aur ek mushkil message jisme koi personal detail nahi hai, jiska jawaab "Nothing found" hai |
| Kaam aur padhne wale ka naam batao | Batata hai ki task kya hai aur result kaun use karega | "Aap ek customer ke chat message mein woh details dhoondh rahe hain jo kisi ek insaan ko pehchaan sakti hain. Aapka reader ek program hai, jo aapki list ki hui har cheez ko chhupa dega" |
| Kaam ko steps mein todo | Model se hisse order mein karwata hai, taaki kaam ko check kiya ja sake | "Pehle, message padho. Doosre, har detail list karo aur batao woh kahan hai. Teesre, jo cheez kisi insaan ke baare mein nahi hai, use hata do" |
| Jo galat ho chuka hai, use mana karo | Jo failure pehle dekhi ja chuki hai, uska naam leta hai | "Aisi detail mat gadho jo message mein nahi hai" |

*Worked example* sabse taakatwar hai, aur log ise sabse aakhir mein try karte hain. Agar output ko shabdon mein describe karein, toh model un shabdon ki nakal karta hai. Agar ek poora example dikha dein, toh woh format ko copy karta hai. Anaya ne ek typical example aur ek mushkil example likha. Do examples, ek typical aur ek mushkil, 6 ek jaise examples se behtar hain, aur bhejne mein kaafi kam tokens lete hain. Chautha tareeka sabse kamzor hai. Use un failures ke liye ek-do baar istemaal karna theek hai jo aap pehle dekh chuke hain. Lambi list banana theek nahi, kyunki yeh utna kaam nahi karta jitna log sochte hain.

## Kam hona, theek hona nahi hai

Is aakhri baat ki wajah hi is chapter ka sabse zaroori idea hai, aur team ne ise khud hi saabit kar diya. Anaya ne mana karne wali line jodi, aur Pune gadhna ek din ke liye ruk gaya. Tuesday ko Farah ne ek cousin ke baare mein message likha, jo "station ke paas wale bank" mein kaam karta tha. Model ne baat maani aur koi shehar nahi gadha. Uski jagah usne ek aisi bank branch ka naam gadh diya jo exist hi nahi karti thi.

"Yeh ab bhi karta hai," Anaya ne kaha. "Kam karta hai," Imran ne kaha. Ek instruction failure ko kam kar deta hai. Lekin failure ki wajah ko nahi hataata. Wajah yeh hai ki machine text ko aage badhane ke liye bani hai, aur kabhi-kabhi likely agla text jhooth hota hai.

::: key Kam hona, theek hona nahi hai
Jab koi kahe ki ek rule jodne se problem solve ho gayi, toh yeh poochiye: rule ne wajah hataayi, ya sirf symptom ko kam common bana diya? Anaya ne yeh shabd whiteboard ke sabse upar laal rang mein likh diye. Woh project ke aakhir tak wahin rahe.
:::

## Lambi instruction ki keemat

Examples, steps aur warning judne se system prompt ek line se badhkar 400 tokens ka ho gaya tha. Aur woh har message ke saath bheja jaana tha. Maheene mein 1 lakh chats hon, toh instructions ke 4 crore tokens (40 million) ho gaye. Customer ek word likhe ya ek hazaar, yeh kharcha lagta hi hai. Imran ne kaha ki yeh kharcha dena theek hai, lekin yeh ek soch-samajh kar liya hua decision hona chahiye, ittefaq nahi.

## Summary

Prompt woh sab hai jo model ko bheja jaata hai. Uska standing hissa, jo har request ke saath dohraya jaata hai kyunki model ko kuch yaad nahi rehta, system prompt hai.

- Temperature variety aur ek jaisepan ke beech ka dial hai. Low setting jawaab ko consistent banati hai, sahi nahi.
- Jo cheez model ke paas nahi hai, woh maango toh woh aksar use gadh deta hai, usi shaant awaaz mein jisme woh sach bolta hai. Isi ko hallucination kehte hain.
- Taakat ke order mein tareeke yeh hain: worked example, kaam aur reader ka naam batana, kaam ko steps mein todna, aur dekhi hui failures ko mana karna.
- Inmein se koi bhi failure ki wajah ko nahi hataata. Woh failure ko kam karte hain. Aur instruction ka har word jitni baar bheja jaata hai, utni baar uska paisa lagta hai.

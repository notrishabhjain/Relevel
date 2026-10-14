---
title: Likh Kar Rakhna Taaki Doosre Bana Sakein
summary: Ek engineer guard ko ek napkin par banata hai, aur product manager us sketch ko aisi specification mein badalti hai jisse koi ajnabi bana sake. Aap guard ke chaar hisse, requirements aur acceptance criteria, patle pehle versions, aur kaagaz par test se woh baat seekhenge jo meeting nahi dikha sakti.
course: a7
goals:
  - guard ke chaar hisson ke naam bata paana, aur har ek ki zimmedaari batana
  - aisa product requirements document likhna jiski "done" ki shartein test ki ja sakein
  - edge cases ki list banana, aur tay karna ki jab product ko shak ho toh woh kya kare
  - ek patla pehla version banana, uncertain kaam ko time-box dena, aur kisi asli insaan ke saath kaagaz ka prototype test karna
terms:
  - PRD | product requirements document: woh kaagaz jo batata hai ki kya banana hai aur kyun, problem aur uske saboot se shuru karke | product requirements document
  - acceptance criteria | woh shartein jo kaam ke ek tukde ko "ho gaya" maane jaane ke liye poori karni hoti hain, har ek aise likhi gayi ki jaanchi ja sake | acceptance criterion
  - user story | value ka ek hissa user ki taraf se bataya gaya: woh kaun hain, kya chahte hain, aur kyun | user stories, job story
  - edge case | ek anokha input ya situation jo woh cheezein tod deta hai jinhe aam cases kabhi chhoote nahi | edge cases
  - MVP | minimum viable product: sabse chhoti cheez jo asli users ke saath aapke riskiest assumption ko aazmaye | minimum viable product
  - vertical slice | ek patla chalta hua version jo system ki har layer se guzarta hai, taaki ek asli user jaldi kuch aazma sake | vertical slices, thin slice
  - sprint | ek tay period, aam taur par ek ya do hafte, jismein team plan karti hai, banati hai, dikhati hai aur review karti hai | sprints
  - time-box | uncertain kaam ko diya gaya tay time, jiske ant mein decision hota hai | time-boxes, time-boxed
  - prototype | ek mota, sasta version jo asli ke bante se pehle kuch seekhne ke liye banaya jaata hai | prototypes
  - usability test | ek asli insaan ko prototype se koi kaam poora karte hue dekhna, bina use madad diye | usability tests
  - quasi-identifier | aisi detail jo akeli nirdosh hai par doosron ke saath milkar ek insaan ki taraf ishaara kar sakti hai, jaise umar, gaon aur ek rare bimari | quasi-identifiers
  - redact | kisi detail ko poori tarah hata dena, jaise use [PAN] shabd se badal kar | redaction
  - mask | kisi detail ka ek hissa chhupana par uski shape rakhna, jaise 98******12 | masking, masked
  - pattern checker | guard ka pehla hissa: yeh un details ko dhoondhta hai jo hamesha ek hi shape ki hoti hain, jaise PAN ya mobile number, fixed rules se | pattern checkers
  - name-and-place finder | guard ka doosra hissa: yeh un details ko dhoondhta hai jinki koi fixed shape nahi, jaise kisi insaan ka naam, pata ya employer | name-and-place finders
  - context judge | guard ka teesra hissa: yeh un chhote sentences ko padhta hai jinhe pehle do hisse tay nahi kar paaye, aur decide karta hai ki woh kisi insaan ki taraf ishaara karte hain ya nahi | context judges
  - rule-keeper | guard ka chautha hissa: yeh tay karta hai ki mili hui har detail ke saath kya karna hai, jaise hata do, mask karo, jaane do ya poochho | rule-keepers
---

Founders ne project approve kiya, toh Imran Qureshi ne guard ko ek napkin par bana diya. Napkin office ke neeche wali mithai ki dukaan ka tha. Drawing mein chaar minute lage. Baayein taraf ek lamba dabba tha, jis par likha tha "message". Daayein taraf ek aur, "safe message". Beech mein chaar chhote dabbe ek line mein the, aur har dabbe ke neeche teen shabd.

Napkin ka sketch structure ke baare mein ek andaaza hota hai. Isse aap kuch bana nahi sakte. Woh yeh nahi batata ki har dabba kya karega, kaise pata chalega ki dabba kaam karta hai, ya jab woh fail ho toh kya hoga.

Is chapter mein hum dekhenge ki woh sketch kaise ek aise document mein badalta hai jisse koi ajnabi bana sake. Phir hum design ki pehli jaanch dekhenge, jo kaagaz par hui.

## Case: napkin par chaar dabbe

Imran ke sketch ne kaam ko chaar hisson mein baant diya tha. Anaya ke paas teen kaam the. Pehla, har hissa kis cheez ke liye zimmedaar hai, yeh theek-theek likhna. Doosra, yeh likhna ki kaun si shartein poori hone par har hissa khatam maana jaayega. Aur teesra, koi bhi code likhe jaane se pehle yeh pata karna ki jo log result use karenge, woh use samajh paate hain ya nahi.

## Guard kin cheezon se bana hai

Sketch har tarah ki personal detail us hisse ko deta hai jo use dhoondhne mein sabse achha ho. Table mein chaar hisse hain, aur yeh bhi ki har ek alag kyun hai. Teesra column dhyaan se padhiye, kyunki design ke peeche ki soch wahin hai.

Table: Guard ke chaar hisse
| Hissa | Kya karta hai | Alag kyun hai |
| --- | --- | --- |
| Pattern checker | Woh details dhoondhta hai jinki shape hamesha ek jaisi hoti hai: PAN (5 capital letters, 4 digits, 1 capital letter), Aadhaar number (12 digits), mobile number (10 digits jo 6, 7, 8 ya 9 se shuru hon) | Ek fixed rule inhe turant, bina cost ke, har baar ek hi tarah dhoondh leta hai |
| Name-and-place finder | Woh details dhoondhta hai jinki koi fixed shape nahi: kisi insaan ka naam, pata ya employer | Koi rule "Ramesh Jain" ya "14 Sector 15, Gurgaon" ko describe nahi kar sakta; kisi ko sentence padhkar insaan ya jagah pehchaanni padegi |
| Context judge | Woh kuch sentences padhta hai jinhe pehle do hisse tay nahi kar paaye, aur decide karta hai ki woh kisi insaan ki taraf ishaara karte hain ya nahi | Context mein padhna slow aur mehnga hai, isliye usse sirf bachi hui cheezon ke baare mein poochha jaata hai |
| Rule-keeper | Jo detail mili hai, uske saath kya karna hai, yeh tay karta hai | Woh khud kuch nahi dhoondhta; woh har tarah ki detail ke liye rules lagata hai |

*Pattern checker* pehla hissa hai. *Name-and-place finder* doosra hissa hai.

*Context judge* teesra hissa hai. Ise kyun chahiye, yeh samajhne ke liye *quasi-identifier* ke baare mein sochiye. Yeh aisi detail hoti hai jo akeli nirdosh hai, lekin doosri details ke saath milkar ek insaan ko pehchaan sakti hai. Ek example dekhiye: "Main apne gaon ka akela diabetic patient hoon jisne pichhle saal transplant karwaya." Is sentence mein na number hai, na naam. Phir bhi yeh kisi ko pehchaan leta hai.

*Rule-keeper* chautha hissa hai. Har detail ke liye woh chaar actions mein se ek chunta hai.

- Woh detail ko *redact* kar sakta hai. Matlab use poori tarah hata dena, aur uski jagah [PAN] jaisa label rakh dena.
- Woh use *mask* kar sakta hai. Matlab detail ka ek hissa chhupana, lekin uski shape rakhna. Jaise mobile number 98******12 ban jaaye, aur agent dekh sake ki wahan ek number tha.
- Woh detail ko jaane de sakta hai.
- Ya woh kisi insaan se poochh sakta hai.

Kaun sa action chunna hai, yeh is par depend karta hai ki information kyun collect ki gayi thi. Delivery ke liye delivery address chahiye. Late fees ke baare mein poochhne ke liye pehchaan ka number nahi chahiye.

## Problem se shuru karna

*PRD*, yaani product requirements document, batata hai ki kya banana hai aur kyun. "Kyun" isliye zaroori hai ki engineers problem jaante hon toh behtar decisions lete hain. Aur agar unhe sirf features ki list mile, jis ke saath koi maksad na ho, toh decisions kharab hote hain.

Anaya wahin se shuru hui jahan PRD ko shuru hona chahiye: problem aur uske saboot se. 37 conversations, interviews ke numbers, aur woh greeting jo details ko nyauta deta tha. Uske baad, tool kiske liye hai aur kiske liye nahi. Phir scope, jismein ek section is par tha ki jaanboojh kar kya chhoda gaya. Yeh section usne strategy ki Won't list se bhara.

Uske baad usne likha ki user chaar situations mein kya dekhega: jab tool kaam kare, jab use shak ho, jab woh fail ho, aur jab woh mana kar de. Baaki sections mein yeh tha ki tool ko kaun se tests paas karne hain, success kaise naapi jaayegi, release kaise hoga, aur kya abhi pata nahi hai.

Poore document ki jaanch ek hi sawaal se hoti thi. Kya koi ajnabi ise bana sakta hai, aur jaan sakta hai ki woh kab khatam kar chuka? Iska jawaab lagbhag poori tarah ek section par tika tha.

## "Done", jise check kiya ja sake

PRD ka sabse zyada kaam karne wala hissa "done" ki shartein hain. Inhe *acceptance criteria* kehte hain, aur har ek aisi honi chahiye jise test kiya ja sake. Sabse aam galti hai aisi shart likhna jise test hi nahi kiya ja sakta.

Table mein kuch kamzor criteria hain, aur unhi ko dobara likh kar.

Table: Acceptance criteria jinhe test nahi kiya ja sakta, aur wahi dobara likhe hue
| Test nahi ho sakte | Test ho sakte hain |
| --- | --- |
| Yeh pehchaan ke numbers sahi tarah dhoondhta hai | Asli conversations ke ek set mein, jo pehle se haath se mark hain, har 100 pehchaan ke numbers mein se kam se kam 95 chhupa diye jaate hain |
| Yeh tez hai | Yeh reply mein ek second ke teesre hisse se zyada nahi jodta |
| Yeh kharab input sambhalta hai | Agar message khaali ho ya sirf emoji ho, toh woh bina badle nikal jaata hai aur kuch bhi error ki tarah log nahi hota |

Dhyaan dijiye, pehla dobara likha hua criterion yeh nahi kehta ki har number mil jaayega, kyunki woh sach nahi hota. Woh batata hai ki kitne, kis mein se, aur kis ke saamne naape gaye.

Jo tool text padhta aur likhta hai, uske liye "done" ka matlab ek sahi jawaab ka waada nahi hai. Woh ek rate hai, jo aise examples par naapi jaati hai jinhe kisi ne pehle se mark kar rakha ho, aur jiski limit likhi hui hai. Rate ko matlab yehi marked examples dete hain. Anaya ke paas abhi woh nahi the. Toh usne ise open-questions list mein capital letters mein likh diya.

## Stories aur ajeeb cases

Kaam ke har tukde ke liye user ki taraf se ek chhota description chahiye, apni shartein ke saath. *User story* value ke ek tukde ko describe karti hai. Jaise: ek support agent ke roop mein, main chahta hoon ki chat padhte waqt pehchaan ke numbers chhupe rahein, taaki main woh na dekhoon jo mujhe nahi chahiye.

Isi ka ek variant hai job story. Woh role ke bajaye situation se shuru hoti hai, aur engineers ko zyada kaam ki baat deti hai. Jaise: jab main loan ke baare mein poochhne wale customer ki chat kholta hoon, mujhe chahiye ki koi pehchaan ka number chhupa ho, taaki main use sambhale bina madad kar sakoon.

Stories ke baad *edge cases* aate hain. Yeh woh ajeeb inputs hain jinhe aam cases kabhi chhute nahi, aur asli kaam ka zyadatar hissa unhi mein chhupa hota hai. Farah ki team aur Imran ki yaaddasht se ek list bani.

Table: Guard ke edge cases
| Case | Kya hona chahiye |
| --- | --- |
| Space ya dash ke saath likha number: 4321-5678-9012 | Isse waise hi chhupao jaise yeh normal likha ho |
| Do lines mein tuta hua number | Dono aadhe hisse chhupao |
| Number ke paas galat spelling mein "adhar" ya "mobil" | Phir bhi number chhupao |
| Aadha chhupa mobile number: 98xxxxxx12 | Use waise hi chhodo aur report mat karo |
| 12 digit ka order number jo pehchaan ka number nahi hai | Use mat chhupao, nahi toh agent apna kaam nahi kar sakta |
| Hindi script mein aur Hindi digits ke saath message | Chhupao |
| Tool tay nahi kar paata | Bol do ki tay nahi kar paaya, aur kisi insaan ko decide karne do |

Aakhri row Anaya ne khud joda. Yahi row product ko juye se alag karti hai. Jo software text padhta hai, use kabhi-kabhi shak hoga hi. Product ko pehle se likhna hoga ki us waqt woh kya karta hai.

## Sabse patli cheez jo kaam karti hai

Imran ne guard ko layers mein banane ka plan rakha. Pehle woh hissa jo chat padhta hai, phir dhoondhna, phir chhupana, phir woh jo agent ko dikhta hai. Chhathe hafte tak sab kuch saath mein kaam karne lagta.

Anaya ne poochha, paanchve hafte mein kya kaam karega? "Kuch nahi," Imran ne kaha.

Kaam ko layers mein kaatne ki yahi dikkat hai. Jab tak aakhri layer khatam nahi hoti, kuch bhi use karne laayak nahi hota. Agar aap kaam ko slices mein kaatein, toh har layer ka ek patla version banta hai, aur shuru se kuch kaam karta hai. *Vertical slice* saari layers se guzarti hai, bas patli hoti hai.

Anaya ne pehli slice tay ki. Usne sirf ek tarah ka number liya, sirf ek tarah likha hua. Us number ko woh us pal se follow karti thi jab message aata hai, us pal tak jab agent use chhupa hua dekhta hai. Saath mein ek log line, jo batati hai ki kya kiya gaya.

::: def Minimum viable product
*MVP* sabse chhoti cheez hai jo sabse risky assumption ko asli users ke saath test kare. Woh har cheez ka chhota version nahi hai. Woh us ek cheez ka ek chhota version hai jo sach honi chahiye.
:::

## Do hafte ek baar

Imran ki team *sprints* mein kaam karti thi, yaani do-do hafte ke tay periods mein. Har sprint plan se shuru hota hai. Woh ek demonstration aur ek chhoti meeting par khatam hota hai, jismein baat hoti hai ki kya achha gaya aur kya badalna chahiye. Demonstration mein kaam karta software dikhaya jaata hai, slides kabhi nahi.

Estimates zyada mushkil the. Imran bata sakta tha ki 12 digits ke rule mein kitna time lagega. Lekin woh yeh nahi bata sakta tha ki Hinglish mein naam dhoondhne mein kitna lagega, kyunki use khud nahi pata tha ki yeh ho bhi sakta hai ya nahi.

Isliye team ne *time-box* use kiya. Yeh ek tay time hota hai, jiske ant mein ek decision hota hai. Yahan woh teen din tha. Agar tab tak asli conversations ke 100 mein se 70 se kam naam mile, toh ruko aur dobara socho. Time-box time ke andaaze ko ek decision point mein badal deta hai.

## Pehle kaagaz

Anaya ne agent ki screen chaar kaagaz par banayi.

1. Woh chat jismein ek number masked hai.
2. Wahi chat, ek note ke saath: "1 detail chhupayi gayi. Kyun dekhne ke liye click karein".
3. Ek chat jahan tool ko shak tha.
4. Ek chat jahan tool ne woh chhupa diya tha jo agent ko chahiye tha.

Kuch seekhne ke liye banaya gaya mota, sasta version *prototype* kehlata hai. Use kitni mehnat chahiye, yeh is par depend karta hai ki aap kaun sa sawaal poochh rahe hain. Kaagaz dikha sakta hai ki flow samajh aata hai ya nahi. Clickable mock-up dikha sakta hai ki log raasta dhoondh paate hain ya nahi. Asli output par chalne wala version dikha sakta hai ki log us par bharosa karte hain ya nahi.

Friday ko Anaya ne Farah ki ek colleague, Neha, ko chaaron kaagazon ke saath ek table par baithaya. Usne koi instructions nahi diye. Usne bas ek kaam diya: ek customer kehti hai ki uska callback number chhupa diya gaya, pata karo kya hua.

Ise *usability test* kehte hain. Ise batana aasaan hai, aur karna mushkil, kyunki iska poora discipline hai madad na karna.

Neha ne doosra kaagaz uthaya, aur gyarah second tak use dekhti rahi. Phir usne teesra uthaya, rakh diya, aur poochha ki number wapas paane ke liye kahan click kare. Anaya ka bahut mann tha ki ishaara kar de, lekin woh chup rahi. "Number wapas paane ka koi raasta nahi hai," Neha ne apne aap se kaha. "Toh mujhe Imran se poochhna padega."

::: key Gyarah second ne kya dhoondha
Neha jaise teen se paanch logon ke saath ek test design ki zyadatar serious problems dikha deta hai, aur har hichkichahat ek finding hai. Anaya ne PRD mein ek line joda: agent ek chat ke liye chhupi hui detail dekh sakta hai, wajah record karke. Kisi meeting ne yeh baat uthayi nahi thi.
:::

## Saaraansh

Specification problem se shuru hoti hai, batati hai ki kya chhoda gaya, aur "done" ko aisi shartein ki tarah likhti hai jinhe test kiya ja sake. Jo software text padhta aur likhta hai, uske liye "done" ek rate hai, jo aise examples ke saamne naapi jaati hai jinhe kisi ne pehle se mark kiya ho.

- Guard ke chaar hisse hain: fixed shapes ke liye pattern checker, bina shape ki details ke liye name-and-place finder, bache hue ke liye context judge, aur rule-keeper jo tay karta hai ki kya karna hai. Har detail ko redact, mask, pass ya query kiya jaata hai.
- Stories user ki taraf se value batati hain, aur edge cases wahan hain jahan asli kaam ka zyadatar hissa chhupa hai. Product ko pehle se batana hota hai ki shak hone par woh kya karta hai.
- Pehla version ek vertical slice hai jo har layer se patli tarah guzarti hai, aur MVP sabse risky assumption ko test karta hai. Sprints team ko kaam karte software ke saath chalate hain, aur time-box uncertain kaam ko ek decision par khatam karta hai.
- Kaagaz ka prototype, ek asli insaan par test kiya gaya jise madad nahi di jaati, woh problems dhoondhta hai jo meeting nahi dhoondh paati.

Planning yahan khatam hoti hai. Agle chapter mein Anaya aur Imran khud machine ko dekhna shuru karte hain.

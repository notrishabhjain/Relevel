---
title: Likh Kar Rakhna Taaki Doosre Bana Sakein
summary: Ek engineer guard ko napkin par banata hai. Product manager us drawing ko ek recipe card mein badalti hai, jisse koi ajnabi bhi bana sake. Aap guard ke chaar hisse seekhenge, yeh ki kaam kab "done" hota hai, patla pehla version kaise banta hai, aur kaagaz par test woh kya dikhata hai jo meeting nahi dikha sakti.
course: a7
goals:
  - guard ke chaar hisson ke naam bata paana, aur har ek ka kaam batana
  - aisa product requirements document likhna jiski "done" ki shartein test ki ja sakein
  - ajeeb cases (edge cases) ki list banana, aur tay karna ki shak hone par product kya kare
  - ek patla pehla version banana, unsure kaam ko time ki limit dena, aur kisi asli insaan ke saath kaagaz ka prototype test karna
terms:
  - pattern checker | gate par khada guard jo ticket ko uski shakal se parakhta hai: yeh un details ko dhoondhta hai jo hamesha ek hi shape ki hoti hain, jaise PAN ya mobile number, fixed rules se | pattern checkers
  - name-and-place finder | woh guard jo list mein naam padhta hai: yeh un details ko dhoondhta hai jinki koi fixed shape nahi, jaise kisi insaan ka naam, pata ya employer | name-and-place finders
  - context judge | samajhdaar badi-buzurg jo mushkil sentences padhte hain: yeh woh chhote sentences padhta hai jinhe pehle do hisse tay nahi kar paaye, aur decide karta hai ki woh kisi insaan ki taraf ishaara karte hain ya nahi | context judges
  - rule-keeper | rule-book wala clerk: yeh tay karta hai ki mili hui har detail ke saath kya karna hai, jaise hata do, mask karo, jaane do ya poochho | rule-keepers
  - PRD | product requirements document, yaani kisi dish ka recipe card: yeh batata hai ki kya banana hai aur kyun, problem aur uske saboot se shuru karke | product requirements document
  - acceptance criteria | teacher ke number dene ke niyam: woh shartein jo kaam ko "ho gaya" maanne ke liye poori karni hoti hain, har ek aise likhi ki jaanchi ja sake | acceptance criterion
  - user story | value ka ek tukda, user ki taraf se bataya gaya: woh kaun hain, kya chahte hain, aur kyun | user stories, job story
  - edge case | daak-ghar mein aaya ajeeb parcel: ek anokha input jo woh cheezein tod deta hai jinhe aam cases kabhi chhoote nahi | edge cases
  - MVP | minimum viable product, yaani sabse chhoti cheez jo asli users ke saath aapke sabse risky andaaze ko aazmaye | minimum viable product
  - vertical slice | ek patli cycle jo pehle din se chalti hai: ek chalta hua patla version jo system ki har layer se guzarta hai, taaki asli user use jaldi aazma sake | vertical slices, thin slice
  - sprint | ek ya do hafte ka tay daur, jismein team plan karti hai, banati hai, dikhati hai aur review karti hai | sprints
  - time-box | unsure kaam ko diya gaya tay time, jiske ant mein decision hota hai | time-boxes, time-boxed
  - prototype | gatte ka bana khilauna ghar: ek mota, sasta version jo asli ke bante se pehle kuch seekhne ke liye banaya jaata hai | prototypes
  - usability test | ek asli insaan ko prototype se koi kaam karte hue dekhna, bina use madad diye | usability tests
  - quasi-identifier | aisa ishaara jo akela nirdosh hai par doosron ke saath milkar ek insaan ko pehchaan sakta hai, jaise umar, gaon aur ek rare bimari | quasi-identifiers
  - redact | kisi detail ko poori tarah hata dena, jaise use [PAN] shabd se badal kar | redaction
  - mask | kisi detail ka ek hissa chhupana par uski shape rakhna, jaise 98******12 | masking, masked
---

Founders ne project ke liye haan kaha, toh Imran Qureshi ne guard ko ek napkin par bana diya. Napkin office ke neeche wali mithai ki dukaan ka tha. Drawing mein chaar minute lage. Baayein taraf ek lamba dabba tha, jis par likha tha "message". Daayein taraf ek lamba dabba, "safe message". Beech mein chaar chhote dabbe ek line mein the. Har dabbe ke neeche teen shabd the.

Napkin ka sketch sirf ek andaaza hai ki cheezein kaise judti hain. Isse aap kuch bana nahi sakte. Woh yeh nahi batata ki har dabba kya karega. Woh yeh nahi batata ki kaise pata chalega ki dabba kaam karta hai. Woh yeh bhi nahi batata ki dabba fail ho toh kya hoga.

Is chapter mein woh sketch ek document ban jaata hai. Us document se koi ajnabi bhi bana sakta hai. Phir hum design ki pehli jaanch dekhte hain. Yeh jaanch kaagaz par hui.

Ho sakta hai aapne technology projects chalaye hon. Tab aap is chapter ke kai shabd jaante hain: requirements, sprint (kaam ka chhota daur), dependency (ek kaam ka doosre par ruka hona), edge case (ajeeb input). Ek baat dekhte hue padhiye. Product aapka ho toh kya badalta hai? Guard ke chaar hisse sabse zaroori hain. Aage ke har chapter mein unke naam kaam aate hain.

## Case: napkin par chaar dabbe

Imran ke sketch ne kaam ko chaar hisson mein baant diya. Anaya ke paas teen kaam the. Pehla, yeh likhna ki har hissa kis cheez ka zimmedaar hai. Doosra, yeh likhna ki har hissa kab "khatam" maana jaayega. Teesra, code likhe jaane se pehle ek cheez pata karna. Jo log result use karenge, kya woh use samajh paayenge?

## Guard kin cheezon se bana hai

Railway station ke entrance ki sochiye. Ek guard ticket jaanchta hai. Doosra guard list mein naam padhta hai. Ek bade afsar mushkil cases tay karte hain. Ek clerk rule-book ke hisaab se kaam karta hai. Sketch bhi aise hi chalta hai. Har tarah ki personal detail us hisse ke paas jaati hai jo use sabse achha dhoondhe. Table mein chaar hisse hain. Yeh bhi likha hai ki har ek alag kyun hai. Teesra column dhire-dhire padhiye. Design ke peeche ki soch wahin hai.

Table: Guard ke chaar hisse
| Hissa | Kya karta hai | Alag kyun hai |
| --- | --- | --- |
| Pattern checker | Woh details dhoondhta hai jinki shape hamesha ek jaisi hoti hai: PAN (5 capital letters, 4 digits, 1 capital letter), Aadhaar number (12 digits jo 0 ya 1 se shuru nahi hote, aur aakhri digit ek check digit hota hai jo baaki digits se nikala jaata hai), mobile number (10 digits jo 6, 7, 8 ya 9 se shuru hon) | Ek fixed rule inhe turant, bina cost ke, har baar ek hi tarah dhoondh leta hai |
| Name-and-place finder | Woh details dhoondhta hai jinki koi fixed shape nahi: kisi insaan ka naam, pata ya employer | Koi rule "Ramesh Jain" ya "14 Sector 15, Gurgaon" ko describe nahi kar sakta; kisi ko sentence padhkar insaan ya jagah pehchaanni padegi |
| Context judge | Woh kuch sentences padhta hai jinhe pehle do hisse tay nahi kar paaye, aur decide karta hai ki woh kisi insaan ki taraf ishaara karte hain ya nahi | Context mein padhna slow aur mehnga hai, isliye usse sirf bachi hui cheezon ke baare mein poochha jaata hai |
| Rule-keeper | Jo detail mili hai, uske saath kya karna hai, yeh tay karta hai | Woh khud kuch nahi dhoondhta; woh har tarah ki detail ke liye rules lagata hai |

*Pattern checker* pehla hissa hai. Yeh us guard jaisa hai jo ticket ko uski shakal se parakhta hai. *Name-and-place finder* doosra hissa hai. Yeh us guard jaisa hai jo list mein naam padhta hai.

*Context judge* teesra hissa hai. Ise kyun chahiye? *Quasi-identifier* ke baare mein sochiye. Yeh aisa ishaara hai jo akela nirdosh hota hai. Lekin doosre ishaare jod do, toh woh ek insaan ko pehchaan leta hai. Ek example dekhiye. "Main apne gaon ka akela diabetic patient hoon jisne pichhle saal transplant karwaya." Is sentence mein na number hai, na naam. Phir bhi yeh kisi ko pehchaan leta hai.

*Rule-keeper* chautha hissa hai. Yeh rule-book wala clerk hai. Har detail ke liye woh chaar actions mein se ek chunta hai.

- Woh detail ko *redact* kar sakta hai. Matlab use poori tarah hata dena, aur uski jagah [PAN] jaisa label rakh dena.
- Woh use *mask* kar sakta hai. Matlab detail ka ek hissa chhupana, lekin uski shape rakhna. Mobile number 98******12 ban jaata hai. Agent (chat padhne wala support worker) phir bhi dekh sakta hai ki wahan ek number tha.
- Woh detail ko jaane de sakta hai.
- Ya woh kisi insaan se poochh sakta hai.

Kaun sa action chunna hai, yeh is par depend karta hai ki detail kyun li gayi thi. Delivery ke liye delivery address chahiye. Late fees ke baare mein poochhne ke liye pehchaan ka number nahi chahiye.

## Problem se shuru karna

*PRD* yaani product requirements document. Ise kisi dish ka recipe card samajhiye. Yeh batata hai ki kya banana hai, aur kyun. "Kyun" zaroori hai. Engineers problem jaante hon toh behtar decisions lete hain. Unhe sirf features ki list mile, bina kisi wajah ke, toh decisions kharab hote hain.

Anaya wahin se shuru hui jahan PRD ko shuru hona chahiye. Usne problem aur uska saboot likha. Yaani 37 conversations, interviews ke numbers, aur woh greeting jo logon ko details dene ka nyauta deti thi. Phir usne likha ki tool kiske liye hai, aur kiske liye nahi. Phir scope (kaam ki seema). Ek hissa un cheezon ka tha jo jaanboojh kar chhodi gayi. Usne ise strategy ki Won't list se bhara.

Uske baad usne likha ki user chaar situations mein kya dekhega. Tool kaam kare. Tool ko shak ho. Tool fail ho. Tool mana kar de. Baaki hisson mein yeh tha ki tool ko kaun se tests paas karne hain, success kaise naapi jaayegi, release kaise hoga, aur kya abhi pata nahi hai.

Poore document ko ek sawaal se jaanchte the. Kya koi ajnabi ise bana sakta hai, aur jaan sakta hai ki woh kab khatam kar chuka? Iska jawaab lagbhag poori tarah ek hisse par tika tha.

## "Done", jise check kiya ja sake

Teacher ke number dene ke niyam sochiye. "Achhi handwriting" ek ehsaas hai. "Das mein se aath sawaal sahi" jaanchna possible hai. PRD ka sabse zyada kaam karne wala hissa "done" ki shartein hain. Inhe *acceptance criteria* kehte hain. Har shart aisi honi chahiye jise test kiya ja sake. Sabse aam galti hai aisi shart likhna jo test hi nahi ho sakti.

Table mein kamzor shartein hain. Har ek ke saamne wahi shart dobara likhi gayi hai.

Table: Acceptance criteria jinhe test nahi kiya ja sakta, aur wahi dobara likhe hue
| Test nahi ho sakte | Test ho sakte hain |
| --- | --- |
| Yeh pehchaan ke numbers sahi tarah dhoondhta hai | Asli conversations ke ek set mein, jo pehle se haath se mark hain, har 100 pehchaan ke numbers mein se kam se kam 95 chhupa diye jaate hain |
| Yeh tez hai | Yeh reply mein ek second ke teesre hisse se zyada nahi jodta |
| Yeh kharab input sambhalta hai | Agar message khaali ho ya sirf emoji ho, toh woh bina badle nikal jaata hai aur kuch bhi error ki tarah log nahi hota |

Pehla dobara likha hua criterion dekhiye. Woh yeh nahi kehta ki har number mil jaayega. Woh sach nahi hota. Woh batata hai ki kitne, kis mein se, aur kis ke saamne naape gaye.

Kuch tools text padhte aur likhte hain. Unke liye "done" ka matlab ek sahi jawaab ka waada nahi hai. Woh ek rate hai. Rate aise examples par naapi jaati hai jinhe kisi ne pehle se mark kar rakha ho. Aur ek limit likhi jaati hai. Rate ko matlab yehi marked examples dete hain. Anaya ke paas abhi woh nahi the. Toh usne ise open-questions list mein capital letters mein likh diya.

## Stories aur ajeeb cases

Khaana khane wale ki likhi shopping list sochiye. Kaam ke har tukde ke liye user ki taraf se ek chhota note chahiye, apni shartein ke saath. *User story* value ke ek tukde ko describe karti hai. Jaise: ek support agent ke roop mein, main chahta hoon ki chat padhte waqt pehchaan ke numbers chhupe rahein, taaki main woh na dekhoon jo mujhe nahi chahiye.

Iska ek kareebi rishtedaar hai, job story. Woh insaan ke bajaye situation se shuru hoti hai. Woh engineers ko zyada kaam ki baat deti hai. Jaise: jab main loan ke baare mein poochhne wale customer ki chat kholta hoon, mujhe chahiye ki koi pehchaan ka number chhupa ho, taaki main use sambhale bina madad kar sakoon.

Stories ke baad *edge cases* aate hain. Daak-ghar mein aaye ajeeb parcel ki sochiye. Woh galat size ka hai, ya phata hua hai, ya uspar ticket nahi hai. Edge case ek anokha input hai jise aam cases kabhi chhute nahi. Asli kaam ka zyadatar hissa unhi mein chhupa hota hai. Farah ki team aur Imran ki yaaddasht se ek list bani.

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

Aakhri row Anaya ne khud joda. Yahi row product ko juye se alag karti hai. Jo software text padhta hai, use kabhi-kabhi shak hoga hi. Product ko pehle se batana hoga ki us waqt woh kya karta hai.

## Sabse patli cheez jo kaam karti hai

Cycle banane ki sochiye. Sirf frame wali cycle nahi chalti. Frame, pahiye aur chain wali chhoti cycle pehle din se chalti hai.

Imran guard ko layers mein banana chahta tha. Pehle woh hissa jo chat padhta hai. Phir dhoondhna. Phir chhupana. Phir woh jo agent ko dikhta hai. Chhathe hafte tak sab kuch saath mein kaam karne lagta.

Anaya ne poochha, paanchve hafte mein kya kaam karega? "Kuch nahi," Imran ne kaha.

Kaam ko layers mein kaatne ki yahi dikkat hai. Jab tak aakhri layer khatam nahi hoti, kuch bhi use nahi ho sakta. Ise slices mein kaatiye. Tab har layer ka ek patla version banta hai, aur shuru se kuch kaam karta hai. *Vertical slice* saari layers se guzarti hai, ek patli line mein.

Anaya ne pehli slice bataayi. Usne sirf ek tarah ka number liya, sirf ek tarah likha hua. Us number ko woh us pal se follow karti thi jab message aata hai, us pal tak jab agent use chhupa hua dekhta hai. Saath mein ek line log mein (jo likha hua record hai ki kya hua) likhi jaati thi, jo batati thi ki kya kiya gaya.

::: def Minimum viable product
*MVP* sabse chhoti cheez hai jo sabse risky andaaze ko asli users ke saath test kare. Woh har cheez ka chhota version nahi hai. Woh us ek cheez ka ek chhota version hai jo sach honi chahiye.
:::

## Do hafte ek baar

School mein har do hafte par unit test hota hai, yeh sochiye. Imran ki team *sprints* mein kaam karti thi. Sprint do hafte ka tay daur hota hai. Har sprint plan se shuru hota hai. Har sprint ek demonstration aur ek chhoti meeting par khatam hota hai, jismein baat hoti hai ki kya achha gaya aur kya badalna chahiye. Demonstration mein kaam karta software dikhaya jaata hai, slides kabhi nahi.

Estimates (kaam mein kitna time lagega, iska andaaza) zyada mushkil the. Imran bata sakta tha ki 12 digits ke rule mein kitna time lagega. Lekin woh yeh nahi bata sakta tha ki Hinglish mein naam dhoondhne mein kitna lagega. Use khud nahi pata tha ki yeh ho bhi sakta hai ya nahi.

Isliye team ne *time-box* use kiya. Ek cook ko naya pakwaan aazmane ke liye teen din dena, aur ant mein decide karna, aisa sochiye. Time-box ek tay time hota hai, jiske ant mein ek decision hota hai. Yahan woh teen din tha. Agar tab tak asli conversations ke 100 mein se 70 se kam naam mile, toh ruko aur dobara sochiye. Time-box time ke andaaze ko decision ke pal mein badal deta hai.

## Pehle kaagaz

Gatte ka bana khilauna ghar sochiye. Deewar bante se pehle hi darwaze theek kar sakte hain. Anaya ne agent ki screen chaar kaagaz par banayi.

1. Woh chat jismein ek number masked hai.
2. Wahi chat, ek note ke saath: "1 detail chhupayi gayi. Kyun dekhne ke liye click karein".
3. Ek chat jahan tool ko shak tha.
4. Ek chat jahan tool ne woh chhupa diya tha jo agent ko chahiye tha.

Kuch seekhne ke liye banaya gaya mota, sasta version *prototype* kehlata hai. Use kitni mehnat chahiye, yeh aapke sawaal par depend karta hai. Kaagaz dikha sakta hai ki flow samajh aata hai ya nahi. Clickable mock-up dikha sakta hai ki log raasta dhoondh paate hain ya nahi. Asli output par chalne wala version dikha sakta hai ki log us par bharosa karte hain ya nahi.

Friday ko Anaya ne Farah ki ek colleague, Neha, ko chaaron kaagazon ke saath ek table par baithaya. Usne koi instructions nahi diye. Usne ek kaam diya. Ek customer kehti hai ki uska callback number chhupa diya gaya. Pata karo kya hua.

Ise *usability test* kehte hain. Ise batana aasaan hai, aur karna mushkil. Iska poora discipline hai madad na karna.

Neha ne doosra kaagaz uthaya. Gyarah second tak use dekhti rahi. Phir usne teesra uthaya, rakh diya, aur poochha ki number wapas paane ke liye kahan click kare. Anaya ka bahut mann tha ki ishaara kar de. Woh chup rahi. "Number wapas paane ka koi raasta nahi hai," Neha ne apne aap se kaha. "Toh mujhe Imran se poochhna padega."

::: key Gyarah second ne kya dhoondha
Neha jaise teen se paanch logon ke saath ek test design ki zyadatar serious problems dikha deta hai. Har hichkichahat ek finding hai. Anaya ne PRD mein ek line joda: agent ek chat ke liye chhupi hui detail dekh sakta hai, wajah record karke. Kisi meeting ne yeh baat uthayi nahi thi.
:::

::: key Ab aap yeh keh sakte hain
Hiring ki baat ke liye teen sentences. Jahan N aur M likha hai, wahan apne numbers rakhiye.
- Maine decide karne se pehle gina: jo M conversations maine padhin, unmein se N mein personal detail thi, aur main dikha sakta hoon ki maine kaise gina.
- Maine likha ki product kya nahi karega, aur kaun sa saboot mera mann badal dega.
- Meri specification "done" ko pehle se mark kiye gaye examples par ek rate ki tarah likhti hai, ehsaas ki tarah nahi.
:::

## Saaraansh

Recipe card ko ek baar aur dekhiye. Woh problem se shuru hota hai. Woh batata hai ki kya chhoda gaya. Woh "done" ko aisi shartein ki tarah likhta hai jinhe test kiya ja sake. Jo software text padhta aur likhta hai, uske liye "done" ek rate hai. Rate aise examples ke saamne naapi jaati hai jinhe kisi ne pehle se mark kiya ho.

- Guard ke chaar hisse hain. Pattern checker fixed shapes sambhalta hai. Name-and-place finder bina shape ki details sambhalta hai. Context judge bache hue ko sambhalta hai. Rule-keeper tay karta hai ki kya karna hai. Har detail ko redact, mask, pass ya query kiya jaata hai.
- Stories user ki taraf se value batati hain. Edge cases wahan hain jahan asli kaam ka zyadatar hissa chhupa hai. Product ko pehle se batana hota hai ki shak hone par woh kya karta hai.
- Pehla version ek vertical slice hai. Woh har layer se ek patli line mein guzarti hai. MVP sabse risky andaaze ko test karta hai. Sprints team ko kaam karte software ke saath chalate hain. Time-box unsure kaam ko ek decision par khatam karta hai.
- Kaagaz ka prototype, ek asli insaan par test kiya gaya jise madad nahi di jaati, woh problems dhoondhta hai jo meeting nahi dhoondh paati.

Planning yahan khatam hoti hai. Agle chapter mein Anaya aur Imran khud machine ko dekhna shuru karte hain.

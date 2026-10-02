---
title: Kitna Achha, Achha Hota Hai
summary: Koi senior woh sawaal poochhta hai jisse har AI project ko kabhi na kabhi guzarna padta hai. Jawaab do numbers hain, unke beech ek chunav jo engineer ka nahi hai, aur ek aisa figure jise Anaya ne bina jaanche quote kiya tha uspar ek asuvidhajanak nazar.
course: ch6
terms:
  - recall | jitni asli cheezein dhoondhni thin, unmein se tool ne kitne ka hissa dhoondha; agar 100 thin aur usne 90 dhoondhin, toh recall 90 percent hai | 
  - precision | tool ne jitna flag kiya, usme se kitna sach mein wahi tha jo usne kaha; agar usne 100 flag kiye aur 80 asli the, toh precision 80 percent hai | 
---

Sawaal aaya, jaise hamesha aata hai, kisi senior se aur kisi aur kaam ke beech mein.

May ka pehla hafta tha. Founders lunch par jaate hue glass room ke paas ruke the, aur unmein se ek, Mr. Bhatia naam ka ek khushmizaaj aadmi jiske paas ek jaisi kameezon ki hairaan karne wali sankhya thi, ne whiteboard dekha, scoreboard dekha, aur woh poochha jo har company mein har koi aakhirkaar poochhta hai.

"Kya yeh achha hai?"

Ek khamoshi rahi jo ek second zyada lambi chali.

"Pichhli run mein satrah mein se pandrah mile," Imran ne kaha.

"Toh achha hai."

"Yeh pandrah hai satrah mein se, das vaakyon par jo humne khud likhe," Anaya ne kaha.

"Kya yeh achha nahi?"

"Mujhe abhi nahi pata," Anaya ne kaha. "Yahi imaandaar jawaab hai." Usne dekha ki use yeh sunne ke anokhe anubhav ke aas-paas uska chehra badal gaya. "Main aapko ek hafte mein bata sakti hoon, ek number ke saath."

## Demo saboot nahi hai

Lunch ke raaste mein usne kuch aisa kaha jiski use umeed nahi thi, ki yeh pehli baar tha jab kisi ne use aise jawaab diya. Aamtaur par jawaab teen udaharanon ka ek demonstration hota tha jo kaam kar gaye. Teen udaharanon ka demonstration jo kaam kar gaye, yeh lagbhag kuch nahi batata ki system kitni baar sahi hai, kyunki teen chune gaye the, aur jo nahi chune gaye wahi woh hain jinhe aapko dekhna tha.

Imran isi par kaam kar raha tha, guard ke liye nahi balki us cheez ke liye jiske saamne guard khada tha. Woh naap raha tha ki chatbot ne customer ke sawaal ke liye Sahaj ki policies ka sahi page kitni achhi tarah dhoondha, aur us naap se jo sabak mile woh lagbhag shabd-dar-shabd laagu hue.

Tareeka teen ideas par aata hai.

Pehla hai test se pehle jawaab likhna. Aap kisi system ko usse sawaal poochh kar aur dekh kar nahi parakh sakte ki jawaab sahi dikhte hain ya nahi, kyunki woh sahi dikhenge: sambhav text hi woh cheez hai jo machine banati hai. Isliye aap asli sawaalon ki ek list se shuru karte hain aur har ek ka jaanchha hua sahi jawaab. Yeh wahi cheez hai jise Anaya pehle hi naam de chuki thi, ek answer key, test se pehle likhi gayi aur baad mein nahi.

Farah ne chatbot ke search ke liye das sawaal likhe. Usne unhe woh shabdon mein likha jo uske customers istemaal karte the, policy document kholne se pehle, kyunki document padhne ke baad likha gaya sawaal documents ke shabdon ka istemaal karta hai, aur search ko asli se behtar dikhata hai. *Paisa kab milega. Double charge hua hai. Mera loan reject kyun hua.* Phir, tabhi, usne aur Imran ne pages dekhe aur mark kiya ki har ek ka jawaab kis page par tha.

Unhone ise chalaya. Das mein se chhe sawaalon ne pehli koshish mein sahi page dhoondha.

"Kya yeh bura hai?" Anaya ne poochha.

"Yeh aise system ke liye bilkul saamanya pehla nateeja hai jo kaam karta hai," Imran ne kaha. "Agar humein nau ya das milte, toh main jaanna chahta ki kisi ne dhokha toh nahi diya."

## Fail hone ke do tareeke

Doosre idea mein Anaya ko zyada waqt laga, kyunki woh saamne chhupa tha.

Search ka ek kadam do alag tareeko se galat ja sakta hai, aur woh ek doosre ke ulte hain. Woh kuch chhod sakta hai jo maayne rakhta tha. Ya woh cheezon ka dher laa sakta hai jo nahi rakhti thi. Imran ne use kalpana karne ko kaha ki woh kisi saathi se meeting ke liye files laane ko kehti hai. Agar woh us ek file ke bina lautein jiski zaroorat thi, toh woh ek kism ki failure hai. Agar woh poori almari le aayen, toh aap uske beech zaroori wali dhoondh nahi sakte, aur woh doosri hai.

Pehli kharab *recall* hai: jitni asli cheezein dhoondhni thin, unme se tool ne bahut kam dhoondhin. Agar sau thin aur usne nabbe dhoondhin, toh recall nabbe percent hai. Doosri kharab *precision* hai: jo kuch tool wapas laaya, usme se bahut kam wahi tha jo hona chahiye tha. Agar usne sau cheezein flag kin aur assi asli thin, toh precision assi percent hai.

Dikkat yeh hai ki dono ek doosre ke khilaaf kheenchte hain. Jaal chauda karo, toh jo chahiye woh bhi zyada pakadte ho aur jo nahi chahiye woh bhi. Sankra karo, toh saaf pakadte ho aur zyada chhod dete ho. Imran ne badla ki search har sawaal ke liye kitne pages lautaye, ek se teen se paanch, aur figures waise hi hile jaise usne kaha tha. Zyada pages: behtar recall, kharab precision. Kam: ulta. Woh pravrittiyan thin, niyam nahi, aur unhe asli sawaalon par naapna padta tha.

Anaya hafton se ye shabd bina jaane istemaal kar rahi thi. Woh scoreboard par wapas gayi.

| Version | Mile | Chhoote | False alarms | Recall | Precision |
| --- | --- | --- | --- | --- | --- |
| 1 | 11 | 6 | 5 | 65% | 69% |
| 3 | 15 | 2 | 2 | 88% | 88% |
| 4 | 14 | 3 | 1 | 82% | 93% |

Recall tha jo mile divided by mile-plus-chhoote. Precision tha jo mile divided by mile-plus-false-alarms. Woh table mein shuru se alag naamon ke saath the. "Chhoote" kharab recall tha, aur "false alarm" kharab precision. Use naye shabdon se zyada purane shabdon ko istemaal karne ki ijaazat ki zaroorat thi.

## Faisla kiska hai

Teesra idea woh tha jo maayne rakhta tha, aur woh aaya, jaise zaroori wale aate hain, ek dopahar ke ant mein.

"Kaun sa bura hai?" Imran ne poochha. "Guard ke liye. Kuch chhod dena, ya kuch flag kar dena jo nahi tha."

"Chhod dena," Anaya ne turant kaha. "Jo number nikal gaya woh paanch systems mein hamesha ke liye hai."

"Kisi doosre product ke liye jawaab ulta hai." Usne use ek legal tool ke baare mein bataya jo use kabhi dikhaya gaya tha, jo ek vakeel ke liye purane cases dhoondhta tha. Us tool ke liye ek chhoota hua case trial haara sakta tha, aur ek extra asambandhit case padhne mein tees second lagte the. Aur ek customer-facing chatbot ke baare mein jo policy ke sawaalon ke jawaab deta tha, jahan khatarnaak failure galat page wapas laana tha. Machine uske aadhar par ek vishwas bhara jawaab banati, aur customer ko di gayi galat policy ek aisi zimmedaari thi jisse company bandhi hogi. Jawaab chhod dena sirf ek support ticket banata tha, jo company ko hamesha se mil rahe the.

"Toh yeh is par nirbhar hai ki ek asli insaan ke saath kya hota hai," Anaya ne kaha.

"Yeh poori tarah isi par nirbhar hai. Aur yahi baat main sabse zyada saaf karna chahta hoon." Imran ne apni pencil rakh di. "Kaun si failure kam karni hai yeh product ka faisla hai. Yeh mera nahi hai. Agar tum us engineer se poochho jisne ise banaya, toh woh woh jawaab dega jo woh sabse aasaani se de sakta hai."

Usne samjha ki ek mahine mein doosri baar use aisa faisla thama diya gaya hai jo koi bhi technical hunar uske liye nahi kar sakta. Pehla sasti galti ki taraf jhukne ke baare mein tha. Yeh uska bada roop tha, naamon aur percentages ke saath. Usne likha ki woh Thursday ko Lakshmi aur Farah ke paas kya le jayegi.

*Fixed shape wale pehchaan ke numbers ke liye, hum sau mein se kam se kam 98 ka recall chahte hain. Tool jo sau cheezein chhupata hai usme sau mein teen tak false alarm hum sweekar karenge. Agar dono takrayein, toh recall jeetega, aur main ise likhit mein kahungi.*

Ise likhna us se kahin aasaan tha jitna ise bachana hoga. Koi baat nahi. Jis number par behes hui ho woh us number se zyada keemti hai jis par kabhi sawaal nahi uthaya gaya.

## Ek number jo usne jaancha nahi tha

Ek aur baat thi, aur woh asuvidhajanak thi, aur usne use ek Friday raat ko khaali office mein kiya.

Woh us figure par wapas gayi jo usne teen baar meetings mein quote kiya tha. Sau mein chaudah: Hindi mein personal details ka woh hissa jo ek maujooda tool, apni khud ki chhapi report ke anusaar, dhoondh paata tha. Usne use yeh kehne ke liye istemaal kiya tha ki market mein gap asli hai. Usne use strategy memo mein likha tha.

*Kis answer key ke khilaaf?* uske dimaag mein ek awaaz ne kaha, jo Lakshmi se kaafi milti thi. *Kisne likhi? Kya main sawaal dekh sakti hoon?*

Woh nahi dekh sakti thi. Usne ek document mein ek vaakya padha tha aur use dohra diya tha. Woh sahi ho sakta tha. Woh aise vaakyon ke set par bhi naapa gaya ho sakta tha jo Sahaj ke customers ki likhai se bilkul alag dikhte the, ya aisi lipi par jo alag tareeke se likhi jaati ho. Jo number koi vendor quote karta hai, chahe kitni bhi imaandaari se, saboot nahi hai jab tak aap dekh na lein ki use kis par naapa gaya tha. Yeh doosron ke numbers ke liye sach tha aur uske apne ke liye bhi.

Usne us raat jaanch nahi chalayi. Usne use list mein us ek jagah likha jahan se use chupchaap chhoda nahi ja sakta tha, page ke sabse upar, ek waade ke saath: *Khula tool hamari answer key par chalao. Jo bhi number aaye woh batao, tab bhi jab woh hamare mamle ko kamzor dikhaye.*

Usne line ko kuch der dekha. Yeh pehli baar tha jab usne aisa test likha tha jiske nateeje se woh darti thi, aur usne ek chhoti si thitholi ke saath samjha ki anushasan isi ke liye hai.

## Saath le jaane layak baatein

Kuch udaharanon ka demo jo kaam karte hain, yeh lagbhag kuch nahi batata ki system kitni baar sahi hai. Ise naapne ke liye aap sawaal aur unke sahi jawaab pehle likhte hain, system kya kehta hai yeh dekhne se pehle, un shabdon mein jo asli users istemaal karte hain, aur phir ginte hain. Tool do ulte tareeko se fail ho sakta hai: woh cheezein chhod kar jo maayne rakhti thin, jo kharab recall hai, ya woh cheezein laakar jo nahi rakhti thin, jo kharab precision hai. Ek ko upar dhakelne se aksar doosra neeche jaata hai. Kise tarjeeh deni hai yeh is par nirbhar hai ki har failure hone par ek asli insaan ke saath kya hota hai, aur woh product ke maalik ka faisla hai, banane wale ka nahi. Aur jo figure koi aur quote karta hai woh saboot nahi hai jab tak aap dekh na lein ki use kis par naapa gaya tha.

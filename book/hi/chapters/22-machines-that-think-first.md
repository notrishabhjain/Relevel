---
title: Pehle Sochne Wali Machines
summary: Jo model jawaab dene se pehle use soch kar nikalta hai woh mushkil cases sahi karta hai aur ismein gyarah second lagta hai. Lonavala ke paas ruki ek train aur intezaar na kar sakne wali chat window ke beech, team seekhti hai ki sochna kab kharidne layak hai aur intezaar ko jhelne layak kaise banayein.
course: ch11 ch115
terms:
  - reasoning model | aisa model jo jawaab dene se pehle apna kaam likh kar nikalta hai, ek tareeka aazmata hai aur jaanchta hai; us kaam ka paisa aap har request par dete hain, paise mein bhi aur intezaar ke samay mein bhi | reasoning models
  - latency | poochhne aur jawaab paane ke beech ka samay, jise users raftaar ki tarah mehsoos karte hain | 
  - streaming | jawaab ko screen par tukde-tukde bhejna jaise woh likha ja raha ho, poora hone tak intezaar karne ke bajaye | stream, streams
---

Mumbai se aane wali train Lonavala ke paas chhe baj kar das minute par ruki aur chaalees minute ruki rahi.

Kuch kaha nahi gaya. Na koi ghoshna, na koi jhatka, na koi spashtikaran dibbe mein guzarta hua. Anaya, jisne din company ke bankers ke saath ek meeting mein bitaya tha, ne apna phone rakh diya aur khidki se geeli hariyali ki deewar aur teen ki chhat wale ek shed ko dekha. Uske aas-paas log aahein bharte, uthte, baithte, aur ek doosre se poochhte ki kya hua. Agli seat par baitha ek aadmi siddhant dene laga tha.

Saat bajne mein bees minute par ek awaaz aayi aur kaha ki aage ek signal kharab ho gaya hai aur train das se pandrah minute mein chalegi. Aur halanki yeh achhi khabar nahi thi, chaalees minute jo beet chuke the aur das jo aane the, usne dekha ki poora dibba halka ho gaya. Intezaar chhota nahi hua tha. Usne ek aakaar le liya tha.

Woh abhi bhi isi ke baare mein soch rahi thi jab Imran ka phone aaya.

## Gyarah second ka jawaab

"Maine sochne wala aazmaya," usne bina hello ke kaha. "Mushkil cases par."

Ek mahine se woh answer key ke sabse mushkil vaakyon ko dekh raha tha, jinhe sasta machine galat karta rehta tha. Shabdon mein bola gaya Aadhaar number. Barah ank jo shaayad order hon. Woh vaakya jo bina number ke kisi ko pehchaanta tha. Aaj usne unhe ek alag kism ke model par aazmaya tha, jo jawaab dene se pehle apna kaam likh kar nikalta hai: ek tareeka aazmata hai, jaanchta hai, zaroorat ho toh peeche hatta hai, aur tabhi jawaab deta hai. Aamtaur par aap kaam dekhte nahi. Aap uska paisa dete hain.

Aisa karne wala model *reasoning model* hai. Idea yeh hai ki accuracy us pal tay nahi hoti jab model banaya gaya. Aap har sawaal ke liye usse zyada kharid sakte hain, machine ko zyada der kaam karne dekar.

"Tees mushkil cases," Imran ne kaha. "Aam model ne unnees diye. Reasoning wale ne chhabbees."

"Yeh bahut behtar hai."

"Hai. Ab baaki columns."

Usne unhe phone par padha. Aam model ne har case ke liye lagbhag savaa second liya tha. Reasoning wale ne gyarah second. Har case ka kharcha lagbhag chhe guna zyada tha, kyunki chhupa hua kaam kisi bhi aur output ki tarah charge hota hai, aur aksar jawaab se kahin zyada hota hai.

"Aur aasaan wale par?" Anaya ne poochha.

"Woh bhi aazmaya. Tees aasaan cases. Dono ne tees diye."

"Toh un par usne kuch nahi kharida."

"Kuch nahi kharida aur chhe guna kharcha kiya."

## Sochne ke paise kab dene chahiye

Us shaam usne jo samjha woh train ki ticket ke peeche, dibbe ki dhundhli roshni mein likha.

Reasoning ek kharidari hai, har request par ki jaati, paise mein aur intezaar ke samay mein chukayi jaati. Bahut se kaamon mein yeh kuch nahi kharidti. Yeh tab madad karti hai jab jawaab ko kaam karke nikalna ho: aise charan jo ek doosre par nirbhar hon, ginit, plans, code, ek asli dwividha jise suljhane ki zaroorat ho. Yeh bekaar jaati hai jab jawaab pehle se input mein hai aur use sirf dhoondhna ya naya roop dena hai: kuch dhoondhna, ek field nikalna, ek category mein chhaantna, formatting, ek diye hue passage ka saar likhna. Shabdon mein bole gaye barah ankon ko kaam karke nikalna padta tha. Mobile number aur email wale aam message ko nahi.

Teen chetawaniyan thin, aur Imran ne unhe ek message mein joda tha, jaise woh tab karta tha jab chahta tha ki woh kuch rakh le.

Pehli: reasoning saboot nahi banati. Machine ko galat document do aur woh galat document se saavdhaani aur lambe se sochegi. Natija ek aise galat jawaab ka hota hai jo sasta model deta usse zyada kaayal karne wala. Doosri: intezaar ka samay ek product problem hai, aur use usme sabak milne wala tha. Teesri: yeh sab ya kuch nahi nahi hai. Zyadatar providers aapko chunne dete hain ki kitni reasoning istemaal karni hai, isliye faisla har tarah ki request ke liye kiya ja sakta hai, poore product ke liye ek baar nahi.

## Woh faisla jo intezaar nahi kar sakta

Train saat bajne mein paanch minute par chali. Jab tak woh Pune station pahunchi tab tak problem ka apna aakaar ban chuka tha, aur jab woh Saturday subah office pahunchi toh use poori mil chuki thi, jahan Imran pehle se intezaar kar raha tha.

"Guard darwaze par baitha hai," usne kaha. "Use chat ke jawaab dene se pehle faisla karna hota hai. Customer ek message type karta hai. Guard use dekhta hai. Tabhi message aage jaata hai. Agar guard gyarah second leta hai, toh customer har jawaab ke liye gyarah second intezaar karta hai."

"Haan."

"Aur humne kaha tha ki woh ek second ke ek tihaayi se zyada nahi jod sakta."

"Kaha tha."

Poochhne aur jawaab paane ke beech ka samay *latency* hai, aur Anaya jo khoj rahi thi woh woh tha jo har team khojti hai, ki users ise product ke lagbhag kisi bhi aur pehlu se zyada tez mehsoos karte hain. Aur use ek doosra, bura ehsaas hua, jo ek pal baad aaya. Chat mein, guard ka output tukde-tukde dikhaya nahi ja sakta tha.

## Jaldi dikhana, aur poora dikhana

Intezaar ko aasaan banane ke tareeke hain, aur unme se pehla wahi hai jo train ne anjaane mein istemaal kiya. Jawaab kitna tez *mehsoos* hota hai woh zyadatar is par nirbhar hai ki kuch pehli baar kab dikhta hai. Imran ne whiteboard par teen vikalp banaye.

**Jaldi shuru karo.** Jawaab ko likhe jaate waqt screen par bhejo, ek baar mein kuch shabd, poora hone ka intezaar karne ki jagah. Ise *streaming* kehte hain. Poora jawaab utna hi waqt leta hai. Lekin customer pehle second mein padhna shuru kar deta hai, aur ismein kuch kharcha nahi, aur yeh kisi bhi cheez se zyada madad karta hai.

**Batao kya ho raha hai.** Spinner ki jagah batao kya kiya ja raha hai: *Chhe documents padh raha hoon.* Jo intezaar kisi dikhne wale kaam se mel khaata hai woh samajh mein aata hai. Yeh train par ki ghoshna thi.

**Intezaar ko kahin aur le jao.** Agar kuch sach mein lamba hai, toh use interactive maanna band karo. Use background mein chalao aur insaan ko batao jab ho jaaye. Teams isse bachti hain kyunki yeh haar maanne jaisa lagta hai. Das second se upar kisi bhi cheez ke liye yeh aamtaur par sahi hai, kyunki yeh problem hata deta hai.

"Humare liye kaun sa theek hai?" Imran ne kaha.

"Yeh is par nirbhar karta hai," Anaya ne kaha, jo hafte bhar se is par soch rahi thi, "ki kya aadha jawaab kaam ka hai. Agar insaan kisi vyakhya ka pehla vaakya padhna shuru kar sakta hai, toh woh shuru kar sakta hai. Lekin faisla aisa nahi hota. Chhupao ya mat chhupao. Faisle ka aadha hissa ek khatra hai. Kisi ko aise field par amal nahi karna chahiye jo abhi likha jaa raha ho."

"Haan. Isliye schema pehle aaya. Jawaab ka ek hissa dikhana tabhi surakshit hai jab jo hissa tum dekh sakte ho woh pehle se antim ho." Woh khush lag raha tha. "Toh guard apna jawaab stream nahi kar sakta. Use khatam hona padega taaki chat use istemaal kar sake."

## Kaun se cases kahan jaayein

Unhone dopahar us design par bitayi jo aage aaya, aur woh us mahine mein jo kuch unhone seekha tha uska sab kuch ek saath laagu karna nikla.

Tez dibbe live chalenge, har message par: pattern checker aur naam-aur-jagah dhoondhne wala. Dono milkar zyadatar messages ko ek second ke ek chhote hisse mein sambhal lete the. Un kuch ke liye jahan woh tay nahi kar paate, guard dheeme, saavdhaan judge ka intezaar nahi karega. Woh sasti galti ki taraf jhukega, jo unhone April mein tay kiya tha, aur sandehaspad hisse ko turant mask kar dega, taaki chat surakshit tarah se chalti rahe. Reasoning model un cases ko baad mein, background mein dekhega, aur tay karega ki kya hona chahiye tha. Agar masked hissa nirdosh nikla, toh koi insaan use bahal hota dekh sakta tha. Agar woh leak nikla, toh woh pehle se dhaka hua tha.

"Yahi raasta hai," Anaya ne kaha. "Mehnga machine sirf un cases ke baare mein poochha jaata hai jinhe kaam karke nikalna padta hai, aur kabhi tab nahi jab customer intezaar kar raha ho."

"Yeh ek aisa niyam hai jise test kiya ja sakta hai." Imran ne use PRD ke hashiye mein likha. "Reasoning sirf anishchit kuch ke liye. Humein pata chalega ki hum galat the agar sasta raasta un cases par barabar score kare, ya agar saavdhaan raasta kabhi jawaab bhejne se pehle khatam karna pada."

Dono mein se kisi ne woh baat nahi uthayi jo dono ko pareshan kar rahi thi, yaani woh saavdhaan judge kahan chalega. Agar jo vaakya woh padhta tha woh mushkil wale mein se ek tha, toh usme wahi ho sakta tha jo guard ke chhupane ke liye bana tha. Kya use building se bahar jaane ki ijaazat di ja sakti thi, ya judge ko andar rehna padega, yeh ek aur din ka sawaal tha. Woh lagbhag Lakshmi ka sawaal tha.

## Saath le jaane layak baatein

Reasoning model jawaab dene se pehle apna kaam likh kar nikalta hai, jo use un problems mein behtar banata hai jinhe kaam karke nikalna padta hai aur dhoondhne, chhaantne ya diye hue ko naya roop dene mein kuch behtar nahi, aur aap kaam ka paisa har request par paise aur samay mein dete hain. Yeh saboot nahi banata, isliye galat document dene par woh galat document se saavdhaani se sochta hai. Intezaar ek product problem hai. Streaming jawaab ko jaldi dikhata hai, batana ki kya ho raha hai intezaar ko samajhne layak banata hai, aur lamba kaam background mein jaa sakta hai. Lekin faisla stream nahi kiya ja sakta, kyunki faisle ka aadha hissa ek khatra hai. Samajhdaar design mehnge machine ko sirf un cases par istemaal karna hai jinhe uski zaroorat hai, aur tab nahi jab customer intezaar kar raha ho.

---
title: Pehle Sochne Wali Machines
summary: Jo model jawaab dene se pehle sochta hai woh mushkil cases sahi karta hai aur ek case par gyarah second leta hai. Chapter reasoning models, sochne ka kharcha, latency, streaming, aur aise design ko samjhata hai jisme mehnga faisla kabhi customer ko intezaar nahi karwata.
course: ch11 ch115
goals:
  - samjhana ki reasoning model kya karta hai aur kin kaamon mein madad karta hai
  - reasoning ki adhik accuracy ko paise aur intezaar ke kharche se tolna
  - latency batana aur intezaar ko seh paana aasaan banane ke teen tareeke
  - samjhana ki faisla stream kyun nahi kiya ja sakta, aur aisa design banana jisme saavdhaan faisla critical raaste se door ho
terms:
  - reasoning model | aisa model jo jawaab dene se pehle apna kaam likh kar nikalta hai, ek tareeka aazmata hai aur jaanchta hai; us kaam ka paisa aap har request par dete hain, paise mein bhi aur intezaar ke samay mein bhi | reasoning models
  - latency | poochhne aur jawaab paane ke beech ka samay, jise users raftaar ki tarah mehsoos karte hain | 
  - streaming | jawaab ko screen par tukde-tukde bhejna jaise woh likha ja raha ho, poora hone tak intezaar karne ke bajaye | stream, streams
---

May ke ant mein Anaya bankers ke saath meeting se train se lauti. Train chhe bajkar das minute par Lonavala ke paas ruki aur chaalis minute khadi rahi. Kisi ne kuch nahi samjhaya. Saat bajne mein bees minute baaki the jab ek aawaaz ne ghoshna ki ki aage ek signal kharab ho gaya hai aur train das se pandrah minute mein chalegi. Khabar achhi nahi thi, kyunki chaalis minute pehle hi jaa chuke the aur aur aane the, par dabba saaf taur par halka ho gaya. Intezaar chhota nahi hua tha. Usne ek aakaar le liya tha.

Woh ab bhi ispar soch rahi thi jab Imran Qureshi ne answer key ke sabse mushkil vaakyon par ek prayog ki report dene ke liye phone kiya. Yeh chapter batata hai ki usne kya paaya, aur train ka iske saath kya lena-dena tha.

## Case: gyarah second

Ek mahine se Imran un vaakyon ka adhyayan kar raha tha jinhe sasta model baar-baar galat kar raha tha: shabdon mein bola gaya Aadhaar number, baarah ank jo order number ho sakte the, aur woh vaakya jo bina number ke ek insaan ko pehchaanta hai. Us din usne unhe ek alag tarah ke model par aazmaya tha, jo jawaab dene se pehle apna kaam likhta hai. Woh ek tareeka aazmata hai, use jaanchta hai, zaroorat ho toh peechhe hat jaata hai, aur tabhi apna jawaab deta hai. Kaam aam taur par user ko nahi dikhta, aur uske liye paisa lagta hai.

Jo model yeh karta hai woh *reasoning model* hai. Uska mahatva yeh hai ki accuracy us pal tay nahi hoti jab model banaya gaya tha. Use har sawaal ke liye kharida ja sakta hai, machine ko zyada der kaam karne dekar.

## Sochne ka kharcha

Imran ne nateeje phone par padhe.

Table: Wahi tees mushkil cases aur tees aasaan cases, reasoning ke saath aur uske bina
| | Saadhaaran model | Reasoning model |
| --- | --- | --- |
| Mushkil cases sahi (30 mein se) | 19 | 26 |
| Aasaan cases sahi (30 mein se) | 30 | 30 |
| Har case ka samay | lagbhag 1.25 second | lagbhag 11 second |
| Har case ka sapeksh kharcha | 1 | lagbhag 6, kyunki chhupa hua kaam kisi bhi aur output ki tarah charge hota hai |

Mushkil cases par reasoning ek bada sudhaar thi. Aasaan cases par usne kuch nahi kharida aur chhe guna zyada kharch kiya.

Us shaam Anaya ne train ki ticket ke peechhe likha ki usne kya samjha. Reasoning har request par kiya gaya ek kharid hai, aur paise aur samay mein chukaya jaata hai, aur kai kaamon ke liye woh kuch nahi kharidta. Woh tab madad karta hai jab jawaab ko nikaalna padta hai: ek doosre par nirbhar kadam, hisaab, plan, code, ek asli dubidha jise suljhaana hai. Woh tab bekaar hai jab jawaab pehle se input mein hai aur use sirf dhoondhna ya naya roop dena hai, jaise kuch dekhna, ek field nikaalna, ek category mein rakhna, format karna, ya diye gaye passage ka saar likhna. Shabdon mein bole gaye baarah ank ko nikaalne ki zaroorat thi. Mobile number aur email wala saadhaaran message nahi.

Imran ne ek message mein teen chetavaniyan joda.

Table: Reasoning models ke baare mein teen chetavaniyan
| Chetavni | Vyakhya |
| --- | --- |
| Reasoning saboot nahi banati | Galat document diya jaaye toh model saavdhaani se aur der tak galat document se tark karta hai, aur sasta model se zyada vishwaasneeya dikhne wala galat jawaab banata hai |
| Intezaar product ki samasya hai | Dheema jawaab user mehsoos karta hai, chahe uska kaaran kuch bhi ho |
| Yeh sab ya kuch nahi nahi hai | Zyadatar providers developer ko chunne dete hain ki kitni reasoning istemaal karni hai, isliye faisla har tarah ki request ke liye kiya ja sakta hai, product ke liye ek baar nahi |

## Woh faisla jo intezaar nahi kar sakta

Jab tak train Pune pahunchi, samasya ne aakaar le liya tha, aur Saturday subah Anaya ne use Imran ke saamne rakha. Guard darwaaze par baitha hai. Customer ek message type karta hai, guard use jaanchta hai, aur tabhi message aage jaata hai. Agar guard gyarah second leta, toh customer har reply ke liye gyarah second intezaar karta, jabki zaroorat yeh thi ki guard ek second ke teesre hisse se zyada na jode.

Poochhne aur jawaab milne ke beech ka samay *latency* hai. User ise kisi bhi aur cheez se zyada tez mehsoos karte hain. Anaya ne ek doosri mushkil bhi dekhi: guard ka output customer ko tukde-tukde mein nahi dikhaya ja sakta tha.

## Intezaar ko aasaan banane ke tareeke

Jawaab kitna tez lagta hai yeh zyadatar is par nirbhar hai ki kuch pehli baar kab dikhta hai. Imran ne intezaar ko aasaan banane ke teen tareeke batayein, jinme se pehla woh tha jo train ne bina irade ke istemaal kiya.

Table: Intezaar ko aasaan banane ke teen tareeke
| Tareeka | Kya karta hai | Tippani |
| --- | --- | --- |
| Jaldi shuru karo | Jawaab likhte hue screen par bhejna, kuch-kuch shabd. Yeh *streaming* hai | Poora jawaab utna hi samay leta hai, par customer pehle second se padhna shuru kar deta hai. Isme kuch kharcha nahi aur sabse zyada madad karta hai |
| Batao kya ho raha hai | Spinner ki jagah kaam likhna, jaise "Chhe documents padh raha hoon" | Dikhne wale kaam se mel khaane wala intezaar maayne rakhta hai. Train par yahi ghoshna thi |
| Intezaar ko doosri jagah le jao | Lambe kaam ko background mein chalao aur khatam hone par insaan ko batao | Teams ise isliye taal deti hain kyunki yeh haar maanne jaisa lagta hai. Das second se zyada ke kaam ke liye aam taur par sahi hai, kyunki yeh samasya hi hata deta hai |

Guard ke liye kaun sa theek hai, yeh is par nirbhar hai ki adhoora jawaab upyogi hai ya nahi. Insaan ek vyakhya ka pehla vaakya padhna shuru kar sakta hai. Faisla alag hai: chhupao ya mat chhupao. Faisle ka aadha hissa khatra hai, aur kisi ko aise field par kaam nahi karna chahiye jiska likhna poora nahi hua.

::: key Adhoora output tabhi dikhao jab woh antim ho
Isi wajah se schema pehle aaya tha. Reply ka ek hissa dikhana tabhi surakshit hai jab jo hissa dikh sakta hai woh pehle se antim ho. Isliye guard apna jawaab stream nahi kar sakta. Use chat ke istemaal karne se pehle khatam hona padta hai.
:::

## Kaun sa case kahan jaata hai

Team ne dopahar us design par bitayi jo agle aaya, aur jisme us mahine ki har seekh lagi.

Tez hisse har message par live chalte: pattern checker aur name-and-place finder. Unhone milkar zyadatar messages ko ek second ke chhote se hisse mein sambhal liya. Jin messages par woh tay nahi kar paaye, unke liye guard dheemi, saavdhaan judge ka intezaar nahi karta. Woh us sasti galti ki taraf jhukta jo April mein tay hui thi, aur shak wale hisse ko turant mask kar deta taaki chat surakshit tareeke se chalti rahe. Reasoning model baad mein background mein un cases ko dekhta aur tay karta ki kya hona chahiye tha. Agar masked tukda nirdosh nikla, toh koi insaan use bahaal hota dekh sakta tha. Agar woh leak nikla, toh woh pehle hi dhaka hua tha.

Imran ne niyam PRD ke hashiye mein likha: reasoning sirf shak wale kuch cases ke liye, aur kabhi tab nahi jab customer intezaar kar raha ho. Team jaan jaati ki woh galat tha agar un cases par sasta raasta wahi score karta, ya agar saavdhaan raaste ko reply bhejne se pehle kabhi khatam karna padta.

Dono mein se kisi ne woh sawaal nahi uthaya jo dono ko pareshaan kar raha tha: saavdhaan judge kahan chalega. Agar woh vaakya jo use padhna tha mushkil vaakyon mein se ek tha, toh usme wahi ho sakta tha jise chhupane ke liye guard bana tha. Kya use building se bahar jaane ki ijaazat di ja sakti thi, ya use andar rehna padta, yeh kisi aur din ka sawaal tha, aur lagbhag Lakshmi ka.

## Saaraansh

Reasoning model jawaab dene se pehle apna kaam likhta hai. Woh un samasyaon mein behtar hai jinhe nikaalna padta hai aur jo use diya gaya hai use dhoondhne, chhaantne ya naya roop dene mein behtar nahi, aur uske kaam ka paisa aur samay har request par dena padta hai.

- Woh saboot nahi banata. Galat document diya jaaye toh woh saavdhaani se galat document se tark karta hai.
- Latency user mehsoos karta hai. Streaming jawaab ko jaldi dikhati hai, batana ki kya ho raha hai intezaar ko maayne deta hai, aur lamba kaam background mein ja sakta hai.
- Faisla stream nahi kiya ja sakta, kyunki faisle ka aadha hissa khatra hai.
- Samajhdaar design mehnge machine ka istemaal sirf un cases par karta hai jinhe uski zaroorat hai, aur tab nahi jab customer intezaar kar raha ho.

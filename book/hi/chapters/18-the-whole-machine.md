---
title: Poori Machine
summary: Chatbot ka har hissa ab haath se banaya aur toda ja chuka hai, isliye poori machine yaad se banayi ja sakti hai aur use ek naam diya ja sakta hai. Chapter mein retrieval-augmented generation, uske chupchaap fail hone ke tareeke, aur customer ke words ke safar ki jagahein aati hain.
course: ch7 ch75
goals:
  - retrieval-augmented generation ko steps ke ek sequence ki tarah bata paana
  - bata paana ki grounded answer kya hota hai, aur grounding se gadhna kam kyun hota hai
  - woh jagahein dhoondh paana jahan retrieval par bana system bina kisi error ke galat jawaab de sakta hai
  - jawaab tak pahunchne ke raaste mein customer ke words jahan-jahan copy hote hain, woh saari jagahein ginaa paana
terms:
  - retrieval-augmented generation | RAG: ek design jisme system pehle aapke documents ke woh tukde dhoondhta hai jo sawaal ke liye kaam ke lagte hain, phir unhe sawaal ke saath model ko deta hai, taaki model unhi se apna jawaab likhe | RAG
  - retrieval | aapke documents ke woh tukde dhoondhne ka step jo sawaal ke liye kaam ke lagte hain | retrieve, retrieved
  - grounded answer | woh jawaab jo system ke diye gaye saboot se likha gaya ho aur usi tak wapas jodha ja sake, na ki us se jo model ko apne aap yaad ho | grounded, grounding
---

May ke doosre hisse mein ek dhundhle Thursday ko Imran Qureshi ne glass room ka whiteboard poora saaf kar diya, laal line ke saath. Usne Anaya ko marker thama diya aur kaha ki chatbot ko yaad se banaiye.

Anaya ne ek box banaya jis par likha tha "document". Ek teer "chunks mein kaato" tak gaya, phir "har chunk ko ek embedding do", phir "store". Alag line mein usne doosra raasta banaya. Customer poochhta hai. Sawaal ko ek embedding di jaati hai. Sabse paas ke chunks dhoondhe jaate hain. Woh sawaal ke saath model ko bheje jaate hain. Model jawaab likhta hai, aur customer use un pages ke saath dekhta hai jinse woh aaya.

Drawing mein 10 boxes the. Do hafte pehle woh ek bhi nahi bana sakti thi. Yeh chapter us cheez ko naam deta hai jo usne banayi, aur dikhata hai ki woh bina awaaz kiye kahan fail ho sakti hai. Saath mein ek compliance head bhi hai, laal pen ke saath, jo jaanna chahti thi ki har word kahan jaata hai.

## Case: yaad se 10 boxes

Imran ne is pattern ka naam jaan-boojh kar rok rakha tha. Board par jo kuch tha, woh sab Anaya ne apne haathon se kiya tha. Usne kainchi se policy kaati thi, search box ka role nibhaya tha, meanings ka map use kiya tha, aur ginaa tha ki tool ne kya dhoondha aur kya chhoda. Isliye jab woh naam dega, toh woh us kaam ka naam hoga jo Anaya pehle hi kar chuki hai.

## Pattern ka ek naam hai

Is design ko *retrieval-augmented generation* kehte hain, ya RAG. Generation matlab model ka likhna, jisse aap pehle hafton mein mil chuke hain. *Retrieval* matlab dhoondhna, jo pichhle kuch chapters ka topic tha. Dono ko jodiye, toh yeh aise kaam karta hai. System pehle documents ke woh tukde dhoondhta hai jo sawaal ke liye kaam ke lagte hain. Phir woh unhe sawaal ke saath model ko deta hai, taaki model unhi se apna jawaab likhe.

RAG applied AI ka sabse zyada use hone wala pattern hai. Jo bhi product kisi ko apne documents ke baare mein sawaal poochhne deta hai, zyadatar isi par bana hota hai. Sahaj ka chatbot bhi isi par bana tha.

::: key Yeh pattern kaam kyun karta hai
Jis cheez ko model ne dekha nahi, uske baare mein poochho toh woh jawaab gadh deta hai. Jise saboot diya jaaye, woh saboot se likhta hai, aur uska jawaab bata sakta hai ki woh kahan se aaya. System ke diye hue, wapas jodne laayak saboot se likha gaya jawaab *grounded answer* hota hai.
:::

## Jahan woh bina awaaz ke fail hota hai

Imran ne Anaya se kaha ki har us box par star lagao jahan koi error dikhe bina galat jawaab ban sakta hai. Usne 10 boxes dekhe aur lagbhag sab par star laga diya.

Table: Retrieval system chupchaap kahan galat hota hai
| Step | Failure | Kuch report kyun nahi karta |
| --- | --- | --- |
| Kaatna | Ek rule apne exception se alag ho jaata hai | Dono tukde valid text hain |
| Dhoondhna | Hamesha kuch na kuch wapas aata hai, chaahe kaam ka kuch ho hi na | Search ke paas "yahan kuch nahi" kehne ka tareeka nahi hai |
| Meanings ka map | Sahaj ki vocabulary galat jagah rakhi jaati hai | Numbers aam tareeke se ban jaate hain |
| Likhna | Model ek irrelevant tukde se flowing jawaab likh deta hai | Model hamesha flowing text hi toh banata hai |
| Source dikhana | Dikhaya gaya page number jawaab ko support nahi karta | Koi check nahi karta ki page claim se milta hai |

In mein se kisi bhi case mein program crash nahi hota, chillata nahi, aur kuch alag log nahi karta. Har hissa kehta hai ki sab theek hai, aur jawaab galat hota hai.

Imran ne bataya ki woh Anaya ko is kamre se kya le jaane dena chahta tha. Aisa system toot-ta nahi. Woh chupchaap galat ho jaata hai, jabki har hissa kehta hai ki sab theek hai. Isiliye answer key itni zaroori hai. Team ko aur kuch nahi batayega.

## "Bure jawaab" ka matlab kya hai

Log Imran se kehte hain ki chatbot bure jawaab deta hai. Woh ise ek symptom maanta hai, jaise doctor se kehna ki mujhe achha nahi lag raha. Kam se kam 4 bilkul alag problems bahar se ek jaisi dikhti hain.

Ho sakta hai sahi page kabhi mila hi nahi. Ho sakta hai mila, lekin aise kata tha ki zaroori line agle tukde mein chali gayi. Ho sakta hai poora mila, aur model ne use ignore kar diya. Ya phir ho sakta hai instructions ne model ko kuch aisa karne ko kaha jo kisi ke matlab se thoda alag tha. Har problem ka ilaaj alag hai. Galat problem ka ilaaj karne se ek quarter barbaad ho jaata hai.

Usne Anaya se kaha ki behtar jawaab ke liye ek quarter kharch karne ke 5 tareeke rank karo: ek mehnga model, behtar kaatna, search ke baad results ko dobara order karne wala step, instructions par aur kaam, aur documents ko saaf karna. Usne unhe andaaze se rank kiya. Usne mehnge model ko sabse upar rakha.

Table: Ek quarter ki mehnat aam taur par kahan sabse zyada kaam aati hai
| Rank | Kharch | Wajah |
| --- | --- | --- |
| 1 | Documents ko saaf karna | Model ko jo saboot milta hai, woh utna hi achha hai jitne achhe documents hain |
| 2 | Behtar kaatna | Rule aur uska exception saath rehte hain |
| 3 | Search results ko dobara order karne wala step | Sasta, aur aksar bada faayda |
| 4 | Instructions par aur kaam | Madad karta hai, lekin failures ko kam karta hai, unki wajah nahi hataata |
| 5 | Mehnga model | Aam taur par sabse zyada kharch hota hai aur sabse kam madad karta hai, kyunki model padh toh pehle se sakta tha, aur sahi saboot uske paas pahunch hi nahi raha tha |

School ke baad pehli baar Anaya ne apne haath ki peeth par ek sentence likha. Quality problems aam taur par saboot ki problems hoti hain, model ki nahi.

## Ek laal pen

Lakshmi Iyer bina bataye andar aayi, paani ka glass lekar. Farah ne use bataya tha ki poora system board par hai. Lakshmi ne use aakhir se padha, jaise woh documents padhti thi. Usne poochha ki customer ke words kahan jaate hain, aur marker utha liya, jo kisi ne diya nahi tha.

Usne "customer asks" se shuru kiya aur har us jagah ko gher diya jahan words copy hote the. Usne us box ko gheraa jahan sawaal ko embedding di jaati thi, aur likha "outside service?". Imran ne kaha ki woh ek alag company ki hai. Usne us box ko gheraa jahan sabse paas ke tukde sawaal ke saath model ko bheje jaate the, aur likha "outside company". Usne us box ko gheraa jahan jawaab wapas aata tha aur customer use dekhta tha, aur support system ki line ko bhi, jo conversation save karta tha. Usne logs aur analytics ko gheraa. Phir usne kone mein ek number likha.

"6 jagah," usne kaha. "Aur mujhe pata chal raha hai ek whiteboard par."

Imran ne kaha ki unhone ise chhupaya nahi tha.

"Nahi," usne kaha. "Kisi ne ise draw nahi kiya."

Usne guard ko bhi draw karne ko kaha, aur poochha ki woh kahan baitha hai. Use woh pehle circle se pehle chahiye tha.

Tab Anaya ne dekha ki machine asal mein kya hai. Woh kamron ki ek series thi. Customer ke words har kamre se guzarte the, aur har kamre mein copy hote the. Sequence ke beech mein baitha guard sirf use bacha sakta tha jo uske baad aata hai. Sirf ek jagah surakshit thi, darwaaze par.

## Jo woh abhi nahi kar sakti

Jaane se pehle Imran ne board ke kone mein 4 sentences likhe. Pichhli shaam usne machine ko 4 tareekon se test kiya tha aur 4 aisi cheezein payi thi jo woh nahi kar sakti.

Table: Abhi tak machine ki 4 limits, aur book unhe kahan sambhalti hai
| Limit | Kahan sambhali jaati hai |
| --- | --- |
| Jawaab prose hai jise doosra software use nahi kar sakta | Chapter 19 |
| Woh apne aap do steps nahi le sakti | Chapter 20 |
| Sab kuch paste kar dena dheema, mehnga aur aksar kharab hai | Chapter 21 |
| Document ke andar ka text use orders de sakta hai | Chapter 24 |

Anaya pehli baat turant samajh gayi. Guard ko apne faisle kisi program ko dene honge, aur program ek polite paragraph nahi padh sakta. Doosri baat woh abhi nahi samajhti thi. Teesri ka use aadha andaaza tha. Chauthi ne use halka sa thanda ehsaas diya, aur usne use baad mein dekhne ke liye ek taraf rakh diya.

Imran ne poochha ki chaaron mein se kaun si baat team ko sabse pehle chubhegi. Bina theek se jaane ki kyun, usne kaha, aakhri wali.

"Achha," usne kaha. "Isse yaad rakhna."

## Summary

Apne documents ke baare mein jawaab dene ka standard design yeh hai. Documents ko chunks mein kaato, har ek ko embedding do, sawaal ke sabse paas ke chunks dhoondho, aur unhe sawaal ke saath model ko do. Yahi retrieval-augmented generation hai, aur jo jawaab woh likhta hai woh system ke diye hue saboot mein grounded hota hai.

- Lagbhag har step bina kisi error ke galat ho sakta hai. System toot-ta nahi. Woh chupchaap galat ho jaata hai.
- Jab jawaab bure hote hain, toh wajah aam taur par woh saboot hota hai jo model tak pahunchta hai. Documents saaf karna aur kaatna theek karna, bada model kharidne se behtar hai.
- Jawaab tak pahunchne ke raaste mein customer ke words kai jagahon se guzarte hain, aur har jagah ek copy rakhti hai. Privacy tool ki jagah darwaaze par hai.

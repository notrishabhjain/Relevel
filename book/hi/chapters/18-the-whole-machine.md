---
title: Poori Machine
summary: Anaya ne chatbot ka har hissa ab haath se bana liya hai. Woh poori machine yaad se draw karti hai, aur use ek naam milta hai. Aap RAG se milte hain, uske chupchaap galat hone ke tareeke dekhte hain, aur woh saari jagahein jahan customer ke words copy hote hain.
course: ch7 ch75
goals:
  - RAG ko ek ke baad ek steps ki list ki tarah bata paana
  - bata paana ki grounded answer kya hota hai, aur grounding se banawati baat kam kyun hoti hai
  - pehchaan paana ki RAG system kahan galat jawaab deta hai aur koi error nahi dikhata
  - jawaab tak pahunchne ke raaste mein customer ke words jahan-jahan copy hote hain, woh saari jagahein ginaa paana
terms:
  - retrieval-augmented generation | RAG: model ke liye open-book exam. Pehle system sawaal ke liye sahi pages dhoondhta hai. Phir woh pages sawaal ke saath model ko thama deta hai, aur model unhi se jawaab likhta hai | RAG
  - retrieval | dhoondhne ka step, jaise file mein se sahi page nikaalna. System aapke documents mein woh tukde dekhta hai jo sawaal se milte hain | retrieve, retrieved
  - grounded answer | saboot ke saath aaya jawaab, jaise woh student jo bata deta hai ki kaun se page se likha. Yeh system ke diye saboot se aata hai, us se nahi jo model ko apne aap yaad ho | grounded, grounding
---

May ki ek dhundhli Thursday ko Imran Qureshi ne glass room ka whiteboard poora saaf kar diya. Laal line bhi mit gayi. Usne Anaya ko marker thama diya. "Chatbot ko yaad se draw kijiye," usne kaha.

Anaya ne ek box banaya aur likha "document". Ek teer "chunks mein kaato" tak gaya (lambe page se kaate chhote cards). Phir "har chunk ko ek embedding do" (uske matlab ka pata). Phir "store". Doosri line mein usne alag raasta banaya. Customer poochhta hai. Sawaal ko embedding milti hai. Sabse paas ke chunks dhoondhe jaate hain. Woh sawaal ke saath model ko jaate hain. Model jawaab likhta hai. Customer use un pages ke saath dekhta hai jinse woh aaya.

Drawing mein 10 boxes the. Do hafte pehle woh ek bhi nahi bana sakti thi. Yeh chapter us drawing ko naam deta hai. Yeh bhi dikhata hai ki machine bina awaaz kiye kahan fail ho sakti hai. Phir ek compliance head laal pen ke saath aati hain. Woh jaanna chahti hain ki har word kahan jaata hai. Compliance ka matlab hai ki company rules ka paalan kare.

## Case: yaad se 10 boxes

Imran ne naam jaan-boojh kar rok rakha tha. Board par jo kuch tha, woh sab Anaya ne apne haathon se kiya tha. Usne kainchi se policy kaati thi. Usne search box ka role nibhaya tha. Usne meanings ka map use kiya tha, jahan milte-julte ideas paas baithte hain. Usne ginaa tha ki tool ne kya dhoondha aur kya chhoda. Isliye naam us kaam ka hoga jo woh pehle kar chuki hai.

## Pattern ka ek naam hai

Is design ko *retrieval-augmented generation* kehte hain, ya RAG. Ise open-book exam samajhiye. Model yaad se jawaab nahi deta. Pehle system sahi pages dhoondhta hai. Phir model un pages se jawaab likhta hai.

Naam ke do hisse dekhiye. Generation matlab model ka likhna. Aap pehle hafton mein isse mil chuke hain. *Retrieval* matlab dhoondhna, jaise file mein se sahi page nikaalna. Pichhle kuch chapters isi ke baare mein the. Dono ko jodiye. System pehle documents ke woh tukde dhoondhta hai jo sawaal se milte hain. Phir woh unhe sawaal ke saath model ko deta hai. Model unhi se jawaab likhta hai.

RAG applied AI ka sabse zyada use hone wala pattern hai. Jo bhi product aapke apne documents ke baare mein sawaal ka jawaab deta hai, zyadatar isi par bana hota hai. Sahaj ka chatbot bhi isi par bana tha.

::: key Yeh pattern kaam kyun karta hai
Model se aisi cheez poochho jo usne dekhi nahi, toh woh jawaab gadh deta hai. Woh us tote jaisa hai jisne poori library padh li ho. Woh pakke yakeen se bolta hai, galat ho tab bhi. Model ko saboot do, toh woh saboot se likhta hai. Uska jawaab yeh bhi bata sakta hai ki woh kahan se aaya. System ke diye saboot se likha gaya, aur wapas saboot tak jodha ja sakne wala jawaab *grounded answer* hai. Us student ko sochiye jo bata deta hai ki kaun se page se likha.
:::

## Jahan woh bina awaaz ke fail hota hai

Imran ne Anaya se kaha ki har us box par star lagao jahan koi error dikhe bina galat jawaab aa sakta hai. Ek aisi lift sochiye jiski koi warning light nahi jalti, par woh do floors ke beech ruk jaati hai. Anaya ne 10 boxes dekhe. Lagbhag sab par star laga diya.

Table: Retrieval system chupchaap kahan galat hota hai
| Step | Failure | Kuch report kyun nahi karta |
| --- | --- | --- |
| Kaatna | Ek rule apne exception se alag ho jaata hai | Dono tukde valid text hain |
| Dhoondhna | Hamesha kuch na kuch wapas aata hai, chaahe kaam ka kuch ho hi na | Search ke paas "yahan kuch nahi" kehne ka tareeka nahi hai |
| Meanings ka map | Sahaj ki vocabulary galat jagah rakhi jaati hai | Numbers aam tareeke se ban jaate hain |
| Likhna | Model ek irrelevant tukde se flowing jawaab likh deta hai | Model hamesha flowing text hi toh banata hai |
| Source dikhana | Dikhaya gaya page number jawaab ko support nahi karta | Koi check nahi karta ki page claim se milta hai |

In mein se kisi bhi case mein program crash nahi hota, aur chillata nahi. Woh apne log mein kuch ajeeb nahi likhta (log woh diary hai jisme program likhta hai ki usne kya kiya). Har hissa kehta hai ki sab theek hai. Phir bhi jawaab galat hota hai.

Imran ne bataya ki woh Anaya ko is kamre se kya le jaane dena chahta tha. Aisa system toot-ta nahi. Woh chupchaap galat ho jaata hai, jabki har hissa kehta hai ki sab theek hai. Isiliye answer key itni zaroori hai. Yeh teacher ki woh list hai jisme sawaal aur sahi jawaab pehle se likhe hote hain. Team ko aur kuch nahi batayega.

## "Bure jawaab" ka matlab kya hai

Log Imran se kehte hain ki chatbot bure jawaab deta hai. Woh ise ek symptom maanta hai. Yeh doctor se kehne jaisa hai ki mujhe achha nahi lag raha. Kam se kam 4 alag-alag problems bahar se ek jaisi dikhti hain.

Ho sakta hai sahi page kabhi mila hi nahi. Ya mila, lekin aise kata tha ki zaroori line agle tukde mein chali gayi. Ya poora mila, aur model ne use ignore kar diya. Ya instructions ne model ko kuch aisa kaha jo kisi ke matlab se thoda alag tha. Har problem ka ilaaj alag hai. Galat problem ka ilaaj karne se poora quarter barbaad ho jaata hai. Quarter matlab team ke teen mahine ka kaam.

Usne Anaya se kaha ki behtar jawaab ke liye ek quarter kharch karne ke 5 tareeke rank karo. Woh the: ek mehnga model, behtar kaatna, aur search ke baad results ko dobara order karne wala step. Baaki do the: instructions par aur kaam, aur documents ko saaf karna. Anaya ne unhe andaaze se rank kiya. Usne mehnge model ko sabse upar rakha.

Table: Ek quarter ki mehnat aam taur par kahan sabse zyada kaam aati hai
| Rank | Kharch | Wajah |
| --- | --- | --- |
| 1 | Documents ko saaf karna | Model ko jo saboot milta hai, woh utna hi achha hai jitne achhe documents hain |
| 2 | Behtar kaatna | Rule aur uska exception saath rehte hain |
| 3 | Search results ko dobara order karne wala step | Sasta, aur aksar bada faayda |
| 4 | Instructions par aur kaam | Madad karta hai, lekin failures ko kam karta hai, unki wajah nahi hataata |
| 5 | Mehnga model | Aam taur par sabse zyada kharch hota hai aur sabse kam madad karta hai, kyunki model padh toh pehle se sakta tha, aur sahi saboot uske paas pahunch hi nahi raha tha |

School ke baad pehli baar Anaya ne apne haath ki peeth par ek sentence likha. Quality problems aam taur par saboot ki problems hoti hain, model ki nahi. Behtar padhne wala bhi phate hue pages wali kitaab theek nahi kar sakta.

## Ek laal pen

Lakshmi Iyer bina bataye andar aayi, paani ka glass lekar. Farah ne use bataya tha ki poora system board par hai. Lakshmi ne use aakhir se padha, jaise woh har document padhti thi. Usne poochha ki customer ke words kahan jaate hain. Phir usne marker utha liya. Kisi ne diya nahi tha.

Usne "customer asks" se shuru kiya. Usne har us jagah ko gher diya jahan words copy hote the. Usne us box ko gheraa jahan sawaal ko embedding milti hai, aur likha "outside service?". Imran ne kaha ki woh ek alag company ki hai. Usne us box ko gheraa jahan sabse paas ke tukde sawaal ke saath model ko jaate the, aur likha "outside company".

Usne us box ko gheraa jahan jawaab wapas aata tha aur customer use dekhta tha. Usne support system ki line ko gheraa, jo conversation save karta tha. Usne logs aur analytics ko gheraa (analytics matlab log tool ko kaise use karte hain, iski ginti). Phir usne kone mein ek number likha.

"6 jagah," usne kaha. "Aur mujhe pata chal raha hai ek whiteboard par."

Imran ne kaha ki unhone ise chhupaya nahi tha.

"Nahi," usne kaha. "Kisi ne ise draw nahi kiya."

Usne guard ko bhi draw karne ko kaha. Usne poochha ki woh kahan baitha hai. Use woh pehle circle se pehle chahiye tha.

Tab Anaya ne dekha ki machine asal mein kya hai. Woh kamron ki ek qatar thi. Customer ke words har kamre se guzarte the, aur har kamre mein ek copy ban jaati thi. Beech mein baitha guard sirf unhi kamron ko bacha sakta tha jo uske baad aate hain. Imarat ke gate ko sochiye. Sirf ek jagah surakshit thi, darwaaze par.

## Jo woh abhi nahi kar sakti

Jaane se pehle Imran ne board ke kone mein 4 sentences likhe. Pichhli shaam usne machine ko 4 tareekon se test kiya tha. Usne 4 aisi cheezein payi thi jo woh nahi kar sakti.

Table: Abhi tak machine ki 4 limits, aur book unhe kahan sambhalti hai
| Limit | Kahan sambhali jaati hai |
| --- | --- |
| Jawaab prose hai jise doosra software use nahi kar sakta | Chapter 19 |
| Woh apne aap do steps nahi le sakti | Chapter 20 |
| Sab kuch paste kar dena dheema, mehnga aur aksar kharab hai | Chapter 21 |
| Document ke andar ka text use orders de sakta hai | Chapter 24 |

Anaya pehli baat turant samajh gayi. Guard ko apne faisle kisi program ko dene honge. Program ek polite paragraph nahi padh sakta. Doosri baat woh abhi nahi samajhti thi. Teesri ka use aadha andaaza tha. Chauthi ne use halka sa thanda ehsaas diya. Usne use baad mein dekhne ke liye ek taraf rakh diya.

Imran ne poochha ki chaaron mein se kaun si baat team ko sabse pehle chubhegi. Usne kaha, aakhri wali. Use theek se pata nahi tha kyun.

"Achha," usne kaha. "Isse yaad rakhna."

## Summary

Apne documents ke baare mein jawaab dene ka aam design yeh hai. Documents ko chunks mein kaato. Har chunk ko embedding do. Sawaal ke sabse paas ke chunks dhoondho. Unhe sawaal ke saath model ko thama do. Yahi retrieval-augmented generation hai. Jo jawaab woh likhta hai, woh system ke diye saboot par grounded hota hai.

- Lagbhag har step bina kisi error ke galat ho sakta hai. System toot-ta nahi. Woh chupchaap galat ho jaata hai.
- Jab jawaab bure hote hain, toh wajah aam taur par woh saboot hota hai jo model tak pahunchta hai. Documents saaf karna aur kaatna theek karna, bada model kharidne se behtar hai.
- Jawaab tak pahunchne ke raaste mein customer ke words kai jagahon se guzarte hain. Har jagah ek copy rakhti hai. Privacy tool ki jagah darwaaze par hai.

Agle chapter mein rule-keeper apne pehle jawaab par hi fail ho jaata hai. Anaya seekhti hai ki program ko paragraph nahi, fields chahiye.

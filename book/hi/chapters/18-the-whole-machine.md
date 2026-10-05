---
title: Poori Machine
summary: Chatbot ka har hissa ab haath se banaya aur toda ja chuka hai, isliye poore ko yaad se bana kar naam diya ja sakta hai. Chapter retrieval-augmented generation, uski khaamosh failures, aur un jagahon ko samjhata hai jahan customer ke shabd copy hote hain.
course: ch7 ch75
goals:
  - retrieval-augmented generation ko kadamon ke kram ki tarah batana
  - batana ki grounded answer kya hota hai aur grounding se gadhna kam kyun hota hai
  - pehchaanna ki retrieval par bane system mein kahan bina kisi error ke galat jawaab ban sakta hai
  - un sab jagahon ki list banana jahan jawaab tak pahunchne ke raaste mein customer ke shabd copy hote hain
terms:
  - retrieval-augmented generation | RAG: aisa design jisme system pehle aapke documents ke woh tukde dhoondhta hai jo sawaal ke liye kaam ke lagte hain, phir unhe sawaal ke saath model ko deta hai taaki woh unse jawaab likhe | RAG
  - retrieval | aapke documents ke woh tukde dhoondhne ka kadam jo sawaal ke liye kaam ke lagte hain | retrieve, retrieved
  - grounded answer | aisa jawaab jo system ke diye saboot se likha gaya ho, aur jise us tak wapas dhoondha ja sake, na ki us se jo model ko ittefaq se yaad hai | grounded, grounding
---

May ke doosre aadhe hisse ke ek dhundhle Thursday ko Imran Qureshi ne glass room ka whiteboard saaf kar diya, laal line bhi mita di, aur Anaya ko marker thama diya. Usne use chatbot ko yaad se banane ko kaha. Usne ek dabba banaya jisme "document" likha, uske baad "chunks mein kaato", phir "har chunk ko embedding do", phir "store karo". Ek alag line mein usne doosra raasta banaya: customer poochhta hai, sawaal ko embedding milti hai, sabse paas ke chunks dhoondhe jaate hain, woh sawaal ke saath model ko bheje jaate hain, model jawaab likhta hai, aur customer use un pages ke saath dekhta hai jahan se woh aaya.

Drawing mein das dabbe the. Do hafte pehle woh ek bhi nahi bana sakti thi. Yeh chapter naam deta hai ki usne kya banaya, dikhata hai ki woh bina awaaz ke kahan fail ho sakta hai, aur ek laal pen wali compliance head ko follow karta hai jo jaanna chahti thi ki har shabd kahan jaata hai.

## 18.1 Case: yaad se das dabbe

Imran ne pattern ka naam jaanboojh kar rok rakha tha. Board par sab kuch aisa tha jo Anaya ne apne haathon se kiya tha: kainchi se policy kaati, search box ka kirdaar nibhaya, matlab ke naqshe ka istemaal kiya, aur ginti ki ki tool ne kya paya aur kya chhoda. Jab usne naam diya, toh woh us kaam ka naam hota jo woh kar chuki thi.

## 18.2 Pattern ka ek naam hai

Design ka naam *retrieval-augmented generation* hai, ya RAG. Generation model ka likhna hai, jo shuruaati hafton mein bataya gaya. *Retrieval* dhoondhna hai, jo pichhle chapters mein bataya gaya. Milkar, ek system pehle documents ke woh tukde dhoondhta hai jo sawaal ke liye prasangik lagte hain, phir unhe sawaal ke saath model ko deta hai, taaki model unse jawaab likhe.

RAG applied AI ka sabse zyada istemaal hone wala pattern hai. Zyadatar products jo user ko apne documents ke baare mein sawaal poochhne dete hain use par bane hain, aur Sahaj ka chatbot bhi.

::: key Pattern kaam kyun karta hai
Jo model ne dekha nahi uske baare mein poochhne par woh jawaab gadhta hai. Jis model ko saboot diya jaaye woh saboot se likhta hai, aur uska jawaab bata sakta hai ki woh kahan se aaya. System ke diye hue, traceable saboot se likha gaya jawaab *grounded answer* hai.
:::

## 18.3 Jahan yeh bina awaaz ke fail hota hai

Imran ne Anaya se har us dabbe par ek taara lagane ko kaha jahan bina error dikhe galat jawaab ban sakta hai. Usne das dabbe dekhe aur lagbhag sab par taara lagaya.

Table: Retrieval system khaamoshi se kahan galat hota hai
| Kadam | Failure | Kuch report kyun nahi karta |
| --- | --- | --- |
| Kaatna | Niyam aur uska apvaad alag ho jaate hain | Dono tukde sahi text hain |
| Dhoondhna | Hamesha kuch lautata hai, tab bhi jab kuch prasangik nahi | Search "yahan kuch nahi" kehne ka koi tareeka nahi rakhti |
| Matlab ka naqsha | Sahaj ki shabdawali galat jagah rakhi jaati hai | Number normal tareeke se bante hain |
| Likhna | Model aprasangik tukde se saaf-suthra likhta hai | Saaf-suthra text hi model hamesha banata hai |
| Source dikhana | Dikhaya gaya page number jawaab ka samarthan nahi karta | Koi nahi jaanchta ki page dawe se milta hai |

In mein se kisi mein program crash nahi karta, chillata nahi, ya kuch ajeeb log nahi karta. Har hissa safalta report karta hai, aur jawaab galat hota hai. Imran ne woh baat kahi jo woh chahta tha ki Anaya kamre se le jaaye: aisa system tootta nahi. Woh chupchaap galat ho jaata hai, har hissa kehte hue ki sab theek hai. Isliye answer key maayne rakhti hai, kyunki aur kuch team ko nahi batayega.

## 18.4 "Kharab jawaab" ka matlab

Log Imran ko batate hain ki chatbot kharab jawaab deta hai. Woh ise ek lakshan maanta tha, jaise doctor se kehna ki mujhe achha nahi lag raha. Kam se kam chaar bilkul alag galtiyan bahar se ek jaisi dikhti hain. Sahi page kabhi mila hi nahi ho sakta. Woh mila ho par is tarah kata ho ki zaroori line agle tukde mein ho. Woh poora mila ho par model ne use andekha kar diya ho. Ya instructions ne model ko wo kuch alag karne ko kaha ho jo kisi ka matlab nahi tha. Har ek ka ilaaj alag hai, aur galat ka ilaaj karne mein ek quarter bekaar jaata hai.

Usne Anaya se jawaabon ko behtar karne mein ek quarter kharch karne ke paanch tareeke rank karne ko kaha: ek mehnga model, behtar kaatna, search ke baad nateejon ka kram badalne wala kadam, instructions par aur kaam, aur documents ko saaf karna. Usne unhe andaaze se rank kiya aur mehnga model sabse upar rakha.

Table: Ek quarter ki mehnat kahan sabse zyada kaam aati hai
| Rank | Kharch | Kyun |
| --- | --- | --- |
| 1 | Documents ko saaf karna | Model ko milne wala saboot utna hi achha hai jitne documents |
| 2 | Behtar kaatna | Niyam aur uska apvaad saath rehte hain |
| 3 | Search nateejon ka kram badalne wala kadam | Sasta aur aksar bada fayda |
| 4 | Instructions par aur kaam | Madad karta hai par failures ko kam karta hai, unki wajah nahi hataata |
| 5 | Mehnga model | Aam taur par sabse mehnga aur sabse kam madadgaar, kyunki model padh pehle se sakta tha aur sahi saboot uske paas pahunch nahi raha tha |

Anaya ne haath ke peechhe likha, jaise school ke baad se nahi kiya tha, ki quality ki samasyayein aam taur par saboot ki samasyayein hain, model ki nahi.

## 18.5 Ek laal pen

Lakshmi Iyer paani ka glass lekar bina bataye andar aayi. Usne Farah se suna tha ki poora system board par hai, aur usne use ant se padha, jaise woh documents padhti thi. Usne poochha ki customer ke shabd kahan jaate hain aur marker utha liya, jo kisi ne use diya nahi tha.

"Customer poochhta hai" se shuru karke usne har us jagah par ghera banaya jahan shabd copy hote the. Usne us dabbe par ghera banaya jahan sawaal ko embedding mili aur likha "bahari service?". Imran ne kaha ki yeh ek alag company ki hai. Usne us dabbe par ghera banaya jahan sabse paas ke tukde sawaal ke saath model ko bheje gaye aur likha "bahari company". Usne us dabbe par ghera banaya jahan jawaab wapas aaya aur customer ne use dekha, aur us line par jo conversation ko support system mein save karti hai. Usne logs aur analytics par ghera banaya, aur kone mein ek number likha.

"Chhe jagah," usne kaha. "Aur mujhe ek whiteboard par pata chalta hai." Imran ne kaha ki unhone ise chhupaya nahi tha. "Nahi," usne kaha. "Kisi ne ise banaya nahi." Usne kaha ki guard bhi banaya jaaye, aur poochha ki woh kahan baithta hai. Woh use pehle ghere se pehle chahti thi.

Anaya ne dekha ki machine kya thi. Woh kamron ki ek shrinkhala thi, aur customer ke shabd har kamre se guzarte the, aur har ek mein copy hote the. Shrinkhala ke beech mein baitha guard sirf use bachata jo uske baad aata. Surakshit jagah sirf darwaaza thi.

## 18.6 Jo woh abhi nahi kar sakti

Jaane se pehle Imran ne board ke kone mein chaar vaakya likhe. Pichhli shaam usne machine ko chaar tareekon se test kiya tha aur chaar cheezein dhoondhi thi jo woh nahi kar sakti thi.

Table: Machine ki ab tak ki chaar seemayein, aur kitaab inhe kahan sambhalti hai
| Seema | Kahan sambhaali gayi |
| --- | --- |
| Jawaab woh gadya hai jise doosra software istemaal nahi kar sakta | Chapter 19 |
| Woh khud do kadam nahi utha sakti | Chapter 20 |
| Sab kuch paste karna dheema, mehnga aur aksar kharab hai | Chapter 21 |
| Document ke andar ka text use hukm de sakta hai | Chapter 24 |

Anaya ne pehli ko turant samjha, kyunki guard ko apne faisle ek aise program ko dene honge jo shishta paragraph nahi padh sakta. Doosri use abhi samajh nahi aayi, aur teesri woh aadhi andaaza laga sakti thi. Chauthi ne use ek chhoti thandi mehsoosi di, aur usne use baad mein dekhne ke liye rakh diya. Imran ne poochha ki chaaron mein se pehle team ko kaun si chot degi. Usne kaha aakhri, bina yeh jaane ki kyun. "Achha," usne kaha. "Isse yaad rakhna."

## Saaraansh

Apne documents ke baare mein sawaalon ka jawaab dene ka maanak design hai unhe chunks mein kaatna, har ek ko embedding dena, sawaal ke sabse paas wale dhoondhna aur unhe sawaal ke saath model ko dena. Yeh retrieval-augmented generation hai, aur jo jawaab woh likhta hai woh system ke diye saboot mein grounded hota hai.

- Lagbhag har kadam bina kisi error ke galat ho sakta hai, isliye system tootta nahi. Woh chupchaap galat ho jaata hai.
- Jab jawaab kharab hote hain, toh aam taur par kaaran model tak pahunchne wala saboot hota hai, aur documents ko saaf karna aur kaatna theek karna bade model khareedne se behtar hai.
- Customer ke shabd jawaab tak pahunchne ke raaste mein kai jagah se guzarte hain, aur har ek ek copy rakhti hai. Privacy tool ki jagah darwaaze par hai.

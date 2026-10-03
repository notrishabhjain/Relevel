---
title: Poori Machine
summary: Ab har hissa haath se banaya aur toda ja chuka hai, isliye poora chatbot yaad se draw kiya ja sakta hai, naam diya ja sakta hai, aur laal pen wali ek compliance head us par chal sakti hai jo jaanna chahti hai ki har shabd kahan jaata hai.
course: ch7 ch75
terms:
  - retrieval-augmented generation | RAG: aisa design jisme system pehle aapke documents ke woh tukde dhoondhta hai jo sawaal ke liye kaam ke lagte hain, phir unhe sawaal ke saath model ko deta hai taaki woh unse jawaab likhe | RAG
  - retrieval | aapke documents ke woh tukde dhoondhne ka kadam jo sawaal ke liye kaam ke lagte hain | retrieve, retrieved
  - grounded answer | aisa jawaab jo system ke diye saboot se likha gaya ho, aur jise us tak wapas dhoondha ja sake, na ki us se jo model ko ittefaq se yaad hai | grounded, grounding
---

"Draw karo," Imran ne kaha. "Yaad se. Peeche dekhna nahi."

Usne marker use ek chunauti ki tarah thamaya. May ke doosre hisse ka ek Thursday tha, dhusar aur umas bhara, us tarah ka din jisme office ke pankhe hawa ko bina hile ghumate lagte the, aur glass room ka whiteboard saaf kar diya gaya tha. Laal line bhi chali gayi thi. Anaya ne dekha aur use hairaani hui ki use kitna bura laga.

Usne ek dibba banaya, aur usme likha *document*. Ek teer doosre dibbe tak le gaya, *chunks mein kaato*. Wahan se *har chunk ko embedding do*, phir *store karo*. Phir, ek alag line par, doosra raasta: *customer poochhta hai*, phir *sawaal ko embedding do*, phir *sabse qareeb chunks dhoondho*, phir *unhe sawaal ke saath model ko bhejo*, phir *model jawaab likhta hai*, phir *customer ko dikhta hai, un pages ke saath jahan se aaya*.

Woh peeche hati. Usme gyarah dibbe the. Do hafte pehle woh ek bhi nahi bana sakti thi.

"Poori cheez yahi hai," Imran ne kaha.

## Pattern ka ek naam hai

Usne bataya ki jo usne banaya tha uska ek naam tha, aur use jaan-boojh kar usse chhupa kar rakha gaya tha.

"Us board par jo kuch hai, woh sab tumne haathon se kiya hai. Kainchi se policy kaati. Search box ka kirdaar nibhaya. Matlabon ka naqsha chalaya. Gina ki kya mila aur kya chhoota. Toh jab main tumhein naam deta hoon, woh ek aisi cheez ko naam deta hai jo tumne sach mein kiya hai."

Ise *retrieval-augmented generation* kehte hain, ya RAG. Generation model ki likhai hai, jo pehle hafte ka hissa tha. Retrieval dhoondhna hai, pichhle teen chapters se. Milakar, ek system pehle aapke documents ke woh tukde dhoondhta hai jo sawaal ke liye kaam ke lagte hain, aur phir woh tukde sawaal ke saath model ko deta hai, taaki model unse apna jawaab likhe. RAG applied AI mein sabse zyada istemaal hone wala pattern hai. Zyadatar products jo aapko apne documents ke baare mein sawaal poochhne dete hain isi par bane hain, aur Sahaj ka chatbot bhi.

Iska maqsad wahi jawaab hai jo Imran pehli raat se de raha tha. Jis cheez ko model ne dekha nahi, uske baare mein poochhne par woh gadh deta hai. Jise saboot diya jaaye, woh saboot se likhta hai, aur jawaab batakar bata sakta hai ki woh kahan se aaya. Jo jawaab system ke diye hue, dhoondhe ja sakne wale saboot se likha gaya ho woh *grounded* hota hai.

## Jahan yeh bina awaaz ke fail hota hai

"Ab ek taara lagao," Imran ne kaha, "jahan bhi galat jawaab bina error dikhe paida ho sakta ho."

Woh pen lekar gyarah dibbon se guzri. Ismein use umeed se zyada waqt laga, aur aakhir mein usne lagbhag har ek par taara laga diya.

Kaatna ek niyam ko uske apvaad se alag kar sakta tha. Dhoondhna hamesha kuch na kuch lautata tha, tab bhi jab dhoondhne ko kuch nahi tha. Matlabon ka naqsha Sahaj ki shabdavali ko buri tarah rakh sakta tha. Model kisi asambandhit tukde se saaf likh deta. Customer ko dikhaye gaye page numbers ek aise page ki taraf ishaara kar sakte the jo jawaab ko support nahi karta tha. In mein se kisi bhi mamle mein program crash nahi hua, na chillaya, na kuch anokha log kiya. Har hissa safalta report karta tha, aur jawaab galat tha.

"Yeh woh cheez hai jo main chahta hoon tum is kamre se le jao," Imran ne kaha. "Aisa system tootta nahi. Woh chupchaap galat ho jaata hai, har hissa yeh report karte hue ki woh theek hai. Isiliye answer key zaroori hai. Aur kuch tumhein nahi batayega."

## "Bure jawaab" ka matlab kya hai

"Log mere paas aate hain aur kehte hain, 'chatbot bure jawaab deta hai,'" usne aage kaha. "Yeh ek lakshan hai. Yeh doctor ko kehne jaisa hai ki aapko bura lag raha hai."

Kam se kam chaar bilkul alag kharabiyan bahar se ek jaisi dikhti hain. Ho sakta hai sahi page kabhi mila hi nahi. Ho sakta hai mila par aise kata ki zaroori line agle tukde mein thi. Ho sakta hai poora mila aur model ne use andekha kar diya. Ya ho sakta hai nirdeshon ne model ko kuch aisa karne ko kaha jo kisi ke matlab se thoda alag tha. Har ek ka alag ilaaj hai, aur galat ka ilaaj karna ek quarter barbaad karta hai.

Usne use jawaab behtar karne par ek quarter kharch karne ke paanch tareeko ko rank karne ko kaha: ek mehnga model, behtar kaatna, search ke baad ek re-ordering kadam, nirdeshon par zyada kaam, aur documents ko khud saaf karna.

Usne unhe antahprerna se rank kiya aur sikhane wale tareeke se galat thi. Usne mehnga model pehle rakha.

"Documents saaf karna aur kaatna theek karna aksar sabse zyada madad karte hain," Imran ne kaha. "Nateejon ko dobara kram dene wala kadam agla sabse sasta bada fayda hai. Mehnga model aksar sabse zyada kharcha karta hai aur sabse kam madad. Model pehle se padh sakta tha. Sahi saboot us tak pahunch nahi raha tha."

Anaya ne use apne haath ke peeche likha, jo usne school ke baad se nahi kiya tha. *Quality problems aksar saboot ki problems hoti hain, model ki nahi.*

## Ek laal pen

Isi mod par Lakshmi bina bataye andar aayi, apne paani ke glass ke saath. Usne Farah se suna tha ki poora system board par hai, aur woh ek pal darwaze par khadi use waise padhti rahi jaise woh documents padhti thi, peeche se.

"Customer ke shabd kahan jaate hain?" usne kaha.

"Maaf kijiye?"

"Customer ka ek message lo. Har jagah jahan woh jaata hai. Main unhe dekhna chahti hoon."

Usne marker liya, jo kisi ne diya nahi tha. *Customer poochhta hai* se shuru karke, usne gher-gher kar chalna shuru kiya. Usne woh dibba gheraa jahan sawaal ko embedding di jaati thi, aur uske bagal mein likha: *bahari service?* Imran ne haan kaha, woh ek alag company ki thi. Usne agla dibba gheraa, jahan sabse qareeb tukde sawaal ke saath model ko bheje jaate the, aur likha *bahari company*. Usne woh gheraa jahan jawaab wapas aata tha, aur *customer ko dikhta hai, pages ke saath*, aur support system ki taraf line jo baatcheet save karta tha. Usne logs aur analytics ko gheraa. Usne kone mein ek number likha.

"Chhe," usne kaha. "Chhe jagah. Aur mujhe ek whiteboard par pata chalta hai."

"Aisa nahi ki humne chhupaya," Imran ne kaha.

"Nahi. Aisa hai ki kisi ne draw nahi kiya." Usne marker band kiya aur gambhir shishtata ke ek sir hilaane ke saath wapas thama diya. "Guard ke liye bhi draw karo. Woh kahan baithta hai? Pehle gheraav se pehle, ya beech mein? Main chahti hoon ki woh pehle se pehle ho."

Anaya ne board dekha aur us achanak spashtata ke saath dekha jo hafton se uske saamne thi, ki poori machine kya thi. Woh kamron ki ek shrinkhala thi, aur customer ke shabd har kamre se guzarte the, aur har ek mein unki copy ban jaati thi. Is shrinkhala ke beech mein baitha guard sirf use bachata jo uske baad aata. Uske liye ek hi surakshit jagah darwaza thi.

## Woh hissa jo abhi nahi ho sakta

Jaane se pehle Imran ne board ke kone mein, tasveer ke neeche, chaar vaakya likhe. Usne pichhli shaam machine ko chaar tareeko se test karne mein bitayi thi, aur chaar cheezein paayi thin jo woh nahi kar sakti thi.

*Jawaab woh gadya hai jise doosra software istemaal nahi kar sakta. Woh khud do kadam nahi utha sakti. Sab kuch paste karna dheema, mehnga aur aksar bura hai. Aur document ke andar ka text use hukm de sakta hai.*

"Ek paanchvi bhi hai," usne kaha. "Dhoondhna sabse saada version hai jo kaam karta hai. Humare dimaag mein ek behtar hai. Par yeh chaar hain. Aur yahi agle chaar chapters hain, lagbhag, isi kram mein."

Anaya ne unhe do baar padha. Pehle ki zaroorat use pehle se mehsoos ho rahi thi: guard ko apne faisle ek program ko saunpne honge, jo ek shishta paragraph nahi padh sakta. Doosra use abhi samajh nahi aaya tha. Teesra use aadha andaaza tha. Chautha use gardan ke peeche ek chhota thanda ehsaas de gaya, aur usne use baad mein dekhne ke liye rakh diya.

"Inmein se kaun pehle hamein nuksaan pahunchayega?" Imran ne poochha.

"Aakhri," usne kaha, bina theek se jaane ki kyun.

"Achha," usne kaha. "Isse yaad rakho."

## Saath le jaane layak baatein

Apne documents ke baare mein sawaalon ka jawaab dene ka standard design yeh hai ki unhe chunks mein kaato, har chunk ko ek embedding do, sawaal ke sabse qareeb wale dhoondho, aur unhe sawaal ke saath ek model ko do. Ise retrieval-augmented generation kehte hain, aur jo jawaab woh likhta hai woh system ke diye hue saboot mein grounded hota hai. Isme lagbhag har kadam bina koi error dikhe galat ja sakta hai, isliye system tootta nahi; woh chupchaap galat ho jaata hai. Jab jawaab bure hon, toh wajah aksar woh saboot hota hai jo model tak pahuncha, model nahi, aur documents saaf karna aur kaatna theek karna bade machine kharidne se behtar hai. Aur jawaab tak pahunchne ke raaste mein customer ke shabd kai jagahon se guzarte hain, jinme se har ek ek copy rakhta hai, isiliye privacy tool ka ghar darwaza hai.

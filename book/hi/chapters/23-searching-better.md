---
title: Behtar Search
summary: Ek customer ko pichhle saal ki late fee batayi jaati hai, aur search ke chaar sudhaar, jinhe ek hi answer key se naapa gaya, dikhate hain ki sabse feeka sudhaar hi akela hai jo kuch waada kar sakta hai.
course: ch12
terms:
  - hybrid search | keyword search aur matlab-aadharit search ko ek saath chalana aur dono ki rankings ko milana, taaki aapko dono mein se ek chunna na pade | 
  - reranking | sasta karke bahut saare ummeedwaar tukde laana, phir ek dheema, zyada saavdhaan model se sawaal aur har tukde ko saath padhwa kar sabse achhe kuch ko upar rakhwana | rerank, reranker
  - contextual retrieval | har chunk ko store karne se pehle ek vaakya jodna jo batata hai ki woh apne document mein kahan baitha hai, taaki ek anaath chunk apna matlab banaye rakhe | contextual
  - metadata filtering | koi bhi score hone se pehle un chunks ko hata dena jo sahi nahi ho sakte, unse jude labels ke zariye jaise version, tareekhein aur kaun dekh sakta hai | metadata, metadata filter
  - agentic search | model ko khud kai searches chalane dena, jo wapas aaye use padhna aur apna sawaal dobara likhna, ek loop istemaal karke | 
---

Shikayat ek Monday ko aayi, Farah ne bina kisi tippani ke forward ki, jisse Anaya ko pata chala ki yeh maayne rakhti hai.

Woh Nashik ki ek customer ki thi. Usne chatbot se poochha tha ki uske bijli ke bill par late fee kitni hai, aur usne ek sau rupaye bataye the. Usne due date ke teen din baad bhugtaan kiya tha, aur Sahaj ne usse ek sau pachaas liye. Woh bahut naraaz nahi thi. Uska message shishta tha. Woh bas jaanna chahti thi ki company ki taraf se bolne wali ek machine ne ek baat kyun kahi aur company ne kuch aur kyun kiya.

Lakshmi ghante ke andar shikayat ke printout aur ek chehre ke saath glass room mein aayi jisse saari bhaavna saavdhaani se hata di gayi thi.

"Kaun sa sahi hai?" usne kaha.

"Ek sau pachaas," Imran ne kaha, ek screen ke saath ek minute ke baad. "Yeh January mein badha tha."

"Toh machine ko ek sau kahan se mile?"

## Woh fee jo kabhi sach thi

Imran ko use dhoondhne mein bees minute lage, aur vyakhya itni aam thi ki aur buri thi.

Jab January mein late-fee policy badli, toh kisi ne naya version us folder mein upload kar diya tha jise chatbot padhta tha. Kisi ne purana nahi hataya tha. Dono store mein the, chunks mein kate hue, har ek apni embedding ke saath. Jab Nashik ki customer ne apna sawaal poochha, toh search ko wo do chunks mile jo late fee ke baare mein bolte the. Woh lagbhag ek jaise the, rakam ko chhodkar. Purana ek rang zyada score kar gaya. Woh model ke paas gaya, jisne pichhle saal ke niyam se ek saaf, vishwas bhara, achhe se grounded jawaab likha.

Sab kuch kaam kar gaya tha. Yahi bhayanak tha. Search ko sahi topic mila, model ne use kiya jo use diya gaya, aur jawaab ek asli document mein grounded tha. Document purana tha.

"Behtar ranking madad nahi karegi," Imran ne dheere se kaha. "Yahi baat main ghoomata rehta hoon. Pichhle saal ki policy late fees *ke baare mein* hai. Woh sawaal se utni hi achhi tarah milti hai jitni is saal ki. Prasangikta aur sahi hona alag sawaal hain, aur search mein kuch bhi farak nahi jaanta."

## Chaar sudhaar

Pichhle mahine ke kaam ne unhe ise shaanti se dekhne ke saadhan diye the. Unke paas chatbot ke search ki answer key thi, customers ke shabdon mein das sawaal, aur chhe mein se das ka pehla score. Imran ise behtar karne ki soch raha tha. Ab usse wajah mil gayi thi, aur woh chaar techniques se kram mein guzra, har ek ko usi das par naapte hue.

**Pehla dono tarah ki search chalana tha.** Keyword search exact strings mein achha hai aur matlab par kamzor. Matlab se search ulta hai. *Hybrid search* dono chalata hai aur nateejon ki dono lists milata hai, aur isliye ab chunav nahi karna padta. *Clause 14.2* ek se aaya; *paisa kab milega* doosre se. Chhe mein se das saat ho gaya.

**Doosra shortlist ko dobara padhna tha.** Sabse achhe paanch tukde laakar ummeed karne ki jagah, sabse achhe pachaas sasti mein lao, phir sawaal aur har pachaas ko ek dheema, zyada saavdhaan model ko do jo unhe saath padhta hai aur sabse achhe kuch ko upar rakhta hai. Yeh *reranking* hai. Isne maamooli kharche par bada fayda diya, aur, asaamaanya roop se, recall aur precision dono ko ek saath behtar kiya: zyada mila kyunki paanch ki jagah pachaas laaye gaye, aur kam asambandhit tukde bache kyunki doosre model ne unhe sach mein padha tha. Saat aath ho gaya. Keemat thi atirikt samay aur ek doosri call, isliye yeh pachaas tukdon par chalta hai, poori library par nahi.

**Teesra anaathon ko theek karna tha.** Har chunk ko store karne se pehle, ek model se ek vaakya likhwaya gaya jo batata tha ki woh apne document mein kahan baitha hai, aur woh vaakya uske saath store hua. *Yeh Late Payment Policy ke refund section se hai, adhik bhugtaan ke baare mein.* *Pehle kahi gayi rakam* se shuru hone wala tukda ab ek note le jaata tha ki woh kis cheez ki rakam thi. Yeh *contextual retrieval* hai, aur isne woh failure theek ki jo kainchi ke samay se thi. Aath nau ho gaya.

**Chautha feeka wala tha.** Imran ne code ki kuch lines likhin jo har chunk par label lagati thin ki woh kis document se hai, uska version, woh tareekhein jinke beech woh laagu tha, aur use kaun dekh sakta hai. Yeh labels *metadata* hain. Phir, search ke kuch score karne se pehle, usne use kaha ki jo chunk maujooda nahi hai use phenk do. Yeh *metadata filtering* hai.

Score nahi hila.

## Woh sawaal jo kisi ne nahi poochha

"Woh isliye nahi hila ki answer key mein yeh sawaal hai hi nahi," Anaya ne kaha.

"Nahi."

"Das sawaalon mein pichhle saal ki fee thi hi nahi. Humne kabhi aisi kisi cheez ke baare mein nahi poochha jo badli ho."

"Sahi. Toh ek jodte hain." Imran ne file kholi. Row gyarah: *Bijli ke bill par late fee kya hai?* Sahi jawaab: ek sau pachaas rupaye. Filtering ke bina, system ne ek sau diya. Filter on hone par, usne ek sau pachaas diya. Har baar. Usne use sau baar chalaya, dekhne ke liye.

Usne screen ko ek pal dekha phir bola ki woh ise kya maanta hai.

"In chaaron mein se filtering akela hai jo kuch guarantee deta hai. Baaki sambhavna behtar karte hain. Hybrid search sahi chunk ke upar aane ki sambhavna badhata hai. Reranking use upar hone ki sambhavna badhata hai. Atirikt vaakya use samjhe jaane ki sambhavna badhata hai. Lekin koi ranking technique ek nirast policy ko maujooda se upar aane se nahi rok sakti, kyunki ranking prasangikta ke baare mein hai, aur yeh sahi hone ke baare mein hai. Filter score karne se *pehle* kaam karta hai. Woh galat cheez ko kam sambhav nahi banata. Woh use asambhav banata hai."

Anaya ne socha, yeh woh farak tha jise woh har cheez mein dhoondhne lagi thi: ek tareeka jo failure ko kam baar hone wala banata hai, aur ek jo uski wajah ko hata deta hai. Usne *row gyarah* whiteboard par, kaale mein, purani laal line ke neeche likha. Yeh answer key ki pehli row thi jo ek customer se aayi thi.

## Labels kis liye hain

Lakshmi, jo ruki hui thi, ne ek alag sawaal poochha.

"Labels. Unpar aur kya hai?"

"Kaun sa document, kaun sa version, kin tareekhon ke liye laagu. Use kaun dekh sakta hai."

"Use kaun dekh sakta hai," Lakshmi ne dohraya. "Us folder mein internal documents hain. Collections playbook. Staff handbook."

"Haan."

"Aur pehle, agar koi customer aisa sawaal poochhta jo handbook se milta?"

Imran ek pal kuch nahi bola. "Use handbook mil jaata."

"Dikhao tum ise kaise rokte ho."

"Ek filter se," usne kaha. "Search se pehle. Customer ki request sirf un chunks ko dekh sakti hai jinpar customers ke liye label hai."

Usne sir hilaya, aise bhaav ke saath jo Anaya ne uske chehre par pehle nahi dekha tha. Woh pura anumodan nahi tha. Woh us insaan ki nazar thi jise ek pakka farsh mil gaya ho. Pehli baar, building mein ek tool woh ek kaam kar raha tha jo usne bees saal se har system se maanga tha: galat cheez ko kam sambhav nahi, asambhav banana.

Anaya ne dekha ki labels ki wahi list guard mein bhi honi chahiye. Har message ke saath woh jagah aati thi jahan se woh aaya tha: order-tracking screen, loan-status screen, free chat. Ek screen par type kiya gaya pehchaan ka number jo ek ikatthi karne ke liye bani hai, bilkul sahi ho sakta hai. Free chat mein wahi number nahi. Agar rule-keeper kuch bhi tay karne se pehle jaanta ki message kahan se aaya, toh woh bina ek bhi chaalak kadam ke alag niyam laagu kar sakta tha. Message ka maqsad ek aur label tha, aur imaandaar wala. Usne specification mein ek column joda.

## Ek aakhri idea

Ek paanchva technique bhi tha, jise Imran ne bataya aur alag rakh diya. Yeh model ko khud kai searches chalane dena tha, nateeje padhna aur apna sawaal dobara likhna, pichhle chapter jaisa hi loop istemaal karke. Woh behtar saboot dhoondh sakta tha. Usne kharcha bhi wahi badhaya jo us chapter ne dikhaya tha, aur wahi jokhim jode. Usne use *baad mein* ke neeche board par likha, jo ek column tha jo kai cheezon ke liye achhi jagah dikhne laga tha.

*Agentic search*, usne ise kaha. Agar kabhi zaroorat padi toh unke paas wapas aayenge.

## Saath le jaane layak baatein

Saade search ko chaar tareeko se behtar kiya ja sakta hai, har ek ko usi answer key se naapna kaam ka hai. Keyword aur meaning search ko ek saath chalana, jise hybrid search kehte hain, aapko dono mein se chunne se rokta hai. Bahut saare ummeedwaar laana aur ek dheema model se unhe dobara padhwa kar kram dilwana, jise reranking kehte hain, jo mila aur woh kitna saaf hai dono ko behtar karta hai, samay mein kuch kharche par. Har chunk ke saath ek vaakya jodna ki woh kahan se hai, jise contextual retrieval kehte hain, anaathon ko theek karta hai. Aur chunks par unke version, tareekh aur audience ke labels lagana, phir koi bhi score hone se pehle un labels par filter karna, yahan ki akeli technique hai jo nateeje ka waada kar sakti hai, kyunki prasangikta aur sahi hona alag sawaal hain. Model ko baar-baar search karne dena sambhav hai aur kharcha badhata hai. Achhi answer key asli failures se badhti hai, aur sabse achhi nayi row woh hai jise ek customer ne likha.

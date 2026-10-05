---
title: Behtar Search
summary: Ek customer ko pichhle saal ki late fee bata di jaati hai. Search ke chaar sudhaar ek hi answer key par naape jaate hain, aur sabse saadha sudhaar akela woh hai jo kuch guarantee de sakta hai. Chapter hybrid search, reranking, contextual retrieval, metadata filtering aur agentic search samjhata hai.
course: ch12
goals:
  - samjhana ki sahi dikhne wala jawaab puraane document par grounded kaise ho sakta hai
  - hybrid search, reranking aur contextual retrieval batana aur yeh ki har ek kya theek karta hai
  - samjhana ki metadata filtering nateeja guarantee kyun kar sakti hai jabki ranking ke tareeke sirf sambhavna sudharte hain
  - answer key mein ek asli customer failure jodna aur labels se tay karna ki kaun kya dekh sakta hai
terms:
  - hybrid search | keyword search aur matlab-aadharit search ko ek saath chalana aur dono ki rankings ko milana, taaki aapko dono mein se ek chunna na pade | 
  - reranking | sasta karke bahut saare ummeedwaar tukde laana, phir ek dheema, zyada saavdhaan model se sawaal aur har tukde ko saath padhwa kar sabse achhe kuch ko upar rakhwana | rerank, reranker
  - contextual retrieval | har chunk ko store karne se pehle ek vaakya jodna jo batata hai ki woh apne document mein kahan baitha hai, taaki ek anaath chunk apna matlab banaye rakhe | contextual
  - metadata filtering | koi bhi score hone se pehle un chunks ko hata dena jo sahi nahi ho sakte, unse jude labels ke zariye jaise version, tareekhein aur kaun dekh sakta hai | metadata, metadata filter
  - agentic search | model ko khud kai searches chalane dena, jo wapas aaye use padhna aur apna sawaal dobara likhna, ek loop istemaal karke | 
---

Ek Monday ko Farah Sheikh ne bina kuch kahe ek shikayat aage bheji, aur isi se Anaya ko pata chala ki woh zaroori hai. Nashik ki ek customer ne chatbot se poochha tha ki uske bijli bill par late fee kitni hai, aur usne sau rupaye bataye the. Usne due date ke teen din baad bhugtaan kiya tha aur Sahaj ne dedh sau liye. Woh bahut naraaz nahi thi, aur uska message shishta tha. Woh jaanna chahti thi ki company ki taraf se bolne wali ek machine ne ek baat kahi aur company ne doosri kyun kiya.

Lakshmi Iyer ek ghante ke andar ek printout aur aise chehre ke saath glass room mein aayi jisse har bhaav saavdhaani se hata diya gaya tha. Usne poochha ki kaun sa figure sahi hai. Imran Qureshi ne dekha aur kaha ki dedh sau: fee January mein badh gayi thi. Usne poochha ki machine ko sau kahan mile.

## Case: woh fee jo kabhi sach thi

Imran ko jawaab dhoondhne mein bees minute lage, aur woh saadhaaran tha. Jab January mein late-fee policy badli, toh kisi ne naya version us folder mein daala jahan se chatbot padhta hai, aur kisi ne puraana hataya nahi. Dono versions store mein the, chunks mein kate hue, har ek ki apni embedding ke saath. Jab Nashik ki customer ne sawaal poochha, toh search ko woh do chunks mile jo late fee ke baare mein the. Woh figure ke alawa lagbhag ek jaise the, aur puraane ka score thoda zyada tha. Woh model ke paas gaya, jisne pichhle saal ke niyam se ek saaf, aatmavishwaas bhara, grounded jawaab likha.

Sab kuch kaam kar gaya tha. Search ko sahi vishay mila, model ne wahi istemaal kiya jo use diya gaya, aur jawaab ek asli document mein grounded tha. Document puraana tha.

::: key Prasangikta sahi hona nahi hai
Behtar ranking madad nahi karti. Pichhle saal ki policy late fee ke baare mein hai aur sawaal se utni hi milti hai jitni is saal ki. Prasangikta aur sahi hona alag sawaal hain, aur search mein kuch bhi antar nahi jaanta tha.
:::

## Chaar sudhaar

Pichhle mahine ke kaam ne team ko ise shaanti se dekhne ka saadhan diya tha. Chatbot ki search ke liye answer key thi, customers ke shabdon mein das sawaal, aur pehla score das mein se chhe. Imran ne chaar tareeke ek-ek karke liye aur har ek ko usi das par naapa.

Table: Search ke chaar sudhaar, usi das sawaalon par naape gaye
| Tareeka | Kya karta hai | Score |
| --- | --- | --- |
| Hybrid search | Keyword search aur matlab se search ek saath chalata hai aur dono ki list jodta hai, taaki unme se chunna na pade. "Clause 14.2" ek se aaya aur "paisa kab milega" doosre se | 6 se 7 |
| Reranking | Sabse achhe pachaas tukde sasti tarah laata hai, phir ek dheema, zyada saavdhaan model sawaal aur har tukda saath padhta hai aur sabse achhe kuch upar rakhta hai. Yeh recall aur precision dono ek saath sudharta hai, ek extra samay aur doosri call ki keemat par, isliye woh poori library par nahi balki pachaas tukdon par chalta hai | 7 se 8 |
| Contextual retrieval | Har chunk store karne se pehle ek model ek vaakya likhta hai ki woh apne document mein kahan hai ("Yeh Late Payment Policy ke refund section se hai, overpayments ke baare mein"), aur vaakya uske saath store hota hai. Jo tukda "the aforesaid amount" se shuru hota tha ab ek note rakhta hai ki woh raashi kya hai | 8 se 9 |
| Metadata filtering | Har chunk ko uske document, version, woh tareekhein jab woh laagu hai, aur kaun use dekh sakta hai, ke labels diye jaate hain. Search kuch score karne se pehle, jo chunk maujooda nahi hai use hata deti hai | Koi badlaav nahi |

Chauthi technique woh hai jisne score nahi hilaya. In labels ko *metadata* kehte hain, aur kisi bhi scoring se pehle unke aadhaar par chunks hataana *metadata filtering* hai.

## Woh sawaal jo kisi ne poochha nahi tha

Anaya ne samjhaya ki score kyun nahi hila: answer key mein sawaal tha hi nahi. Das mein se kisi ne aisi cheez ke baare mein nahi poochha jo badli ho. Imran ne ise row gyarah ke roop mein joda: bijli bill par late fee kitni hai, sahi jawaab dedh sau rupaye ke saath. Filter ke bina system ne sau bataya. Filter on karke usne dedh sau bataya. Usne use sau baar chalaya, dekhne ke liye, aur nateeja har baar wahi tha.

::: key Wahi technique jo kuch guarantee karti hai
Hybrid search sahi chunk ke aane ki sambhavna badhata hai. Reranking uske upar hone ki sambhavna badhata hai. Extra vaakya uske samjhe jaane ki sambhavna badhata hai. Koi ranking technique ek nirast policy ko maujooda policy se upar aane se nahi rok sakti, kyunki ranking prasangikta ke baare mein hai aur yeh sahi hone ke baare mein hai. Filter scoring se pehle kaam karta hai. Woh galat cheez ko kam sambhav nahi banata. Woh use na-mumkin banata hai.
:::

Anaya ne woh antar pehchaana jo woh har cheez mein dhoondhne lagi thi: ek tareeka jo failure ko kam karta hai, aur ek jo uski wajah hata deta hai. Usne whiteboard par kaale rang mein, puraani laal line ke neeche, "row gyarah" likha. Yeh answer key ki pehli row thi jo ek customer se aayi thi.

## Labels kis kaam ke hain

Lakshmi, jo ruki thi, ne poochha ki labels par aur kya hai. Imran ne ginaya: document, version, woh tareekhein jab woh laagu hai, aur kaun use dekh sakta hai. Lakshmi ne aakhri baat dohrai. Folder mein andar ke documents the, jaise collections playbook aur staff handbook. Usne poochha ki agar kisi customer ka sawaal handbook se milta toh pehle kya hota. Imran ne kaha ki woh handbook dhoondh leta. Usne kaha ki ab ise kaise roka jaata hai yeh dikhao. Search se pehle ek filter, Imran ne kaha: ek customer ki request sirf un chunks ko dekh sakti hai jinpar customers ke liye label hai.

Woh us bhaav se sir hilayi jo Anaya ne pehle uske chehre par nahi dekha tha. Woh poori tarah manzoori nahi thi. Woh us insaan ka chehra tha jise ek pakki zameen mili ho. Pehli baar building mein ek tool wahi kar raha tha jo Lakshmi ne bees saal mein har system se maanga tha: galat cheez ko mushkil nahi balki na-mumkin banana.

Anaya ne dekha ki wahi vichaar guard mein bhi laagu hota hai. Har message kisi jagah se aata hai: order-tracking screen, loan-status screen, free chat. Jo screen pehchaan ka number maangne ke liye bani hai wahan type kiya number bilkul theek ho sakta hai, aur wahi number free chat mein theek nahi hai. Agar rule-keeper kuch tay karne se pehle jaanta hai ki message kahan se aaya, toh woh bina kisi chaturai ke alag niyam laagu kar sakta hai. Message ka maksad ek aur label tha, aur imaandaar. Usne specification mein ek column joda.

## Ek aur vichaar, jise alag rakha gaya

Ek paanchvi technique bachi thi, jise Imran ne bataya aur taal diya. Model ko kai searches khud chalane di ja sakti hain, nateeje padhne aur apna sawaal dobara likhne ki ijaazat di ja sakti hai, Chapter 20 ke loop se. Yeh *agentic search* hai. Woh behtar saboot dhoondh sakta hai, aur woh us chapter mein dikhaye tareeke se kharcha badhata hai aur wahi risk jodta hai. Usne ise board par "baad mein" ke neeche likh diya, ek aisa column jo kai cheezon ke liye achhi jagah banne laga tha.

## Saaraansh

Saadhaaran search ko chaar tareekon se behtar kiya ja sakta hai, aur har ek ko usi answer key par naapna chahiye.

- Hybrid search keyword aur matlab ki search ek saath chalata hai, taaki unme se chunna na pade.
- Reranking bahut saare candidates laata hai aur ek dheema model unhe dobara padhkar kram badalta hai. Woh jo mila aur woh kitna saaf hai, dono sudharta hai, thode samay ke kharche par.
- Contextual retrieval har chunk ke saath ek vaakya jodta hai ki woh kahan se hai aur orphans ko theek karta hai.
- Metadata filtering chunks ko version, tareekh aur audience ke labels deta hai aur kisi bhi scoring se pehle unpar filter lagata hai. Yeh yahan ki akeli technique hai jo nateeje ka vaada kar sakti hai, kyunki prasangikta aur sahi hona alag sawaal hain.
- Agentic search model ko baar-baar search karne deti hai, aur kharcha badhati hai.

Achhi answer key asli failures se badhti hai, aur sabse achhi nayi row woh hai jo ek customer ne likhi.

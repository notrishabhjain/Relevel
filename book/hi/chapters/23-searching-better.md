---
title: Search Ko Behtar Banana
summary: Ek customer ko pichhle saal ki late fee bata di jaati hai. Search ke chaar sudhaar ek hi answer key par naape jaate hain, aur sabse kam chamak wala sudhaar hi akela hai jo result ka vaada kar sakta hai. Chapter mein hybrid search, reranking, contextual retrieval, metadata filtering aur agentic search aate hain.
course: ch12
goals:
  - samjha paana ki sahi dikhta hua jawaab bhi purane document par kaise tika ho sakta hai
  - hybrid search, reranking aur contextual retrieval kya hain, aur har ek kya theek karta hai, yeh bata paana
  - samjha paana ki metadata filtering result ki guarantee kyun de sakti hai, jabki ranking ke tareeke sirf chance badhate hain
  - answer key mein customer ki asli failure jodna, aur labels se tay karna ki kaun kya dekh sakta hai
terms:
  - hybrid search | keyword search aur meaning wali search ko saath chalana aur dono ki rankings ko jod dena, taaki aapko dono mein se ek chunna na pade | 
  - reranking | pehle sasti tarah se bahut saare candidate tukde laana, phir ek dheemi, zyada dhyaan wali model se sawaal aur har tukda saath mein padhwana aur sabse achhe kuch ko upar rakhna | rerank, reranker
  - contextual retrieval | har chunk ko store karne se pehle usme ek sentence jodna jo bataye ki woh apne document mein kahan baitha hai, taaki akela chhoda gaya chunk apna matlab na khoye | contextual
  - metadata filtering | kisi bhi scoring se pehle, un chunks ko hata dena jo sahi ho hi nahi sakte, unpar lage labels ke zariye jaise version, dates aur kaun dekh sakta hai | metadata, metadata filter
  - agentic search | model ko khud kai searches chalane dena, jo wapas aaye use padhne dena aur apna query dobara likhne dena, ek loop ke zariye | 
---

Ek Monday ko ek complaint aayi. Farah Sheikh ne use bina kuch likhe forward kar diya, aur isi se Anaya ko pata chala ki yeh zaroori hai. Nashik ki ek customer ne chatbot se poochha tha ki uske bijli bill par late fee kitni hai, aur chatbot ne bola tha 100 rupaye. Usne due date ke teen din baad bhugtan kiya tha, aur Sahaj ne usse 150 liye.

Woh bahut naraz nahi thi, aur uska message tameez se likha tha. Woh bas jaanna chahti thi ki company ki taraf se bolne wali machine ne ek baat kyun kahi jabki company ne kuch aur kiya.

Ghante bhar ke andar Lakshmi Iyer glass room mein ek printout leke aayi, chehre par se saari expression bade dhyaan se hataye hue. Usne poochha ki kaun sa figure sahi hai. Imran Qureshi ne check karke kaha 150, kyunki January mein fee badh gayi thi. Usne poochha ki machine ko 100 kahan mila.

## Case: woh fee jo kabhi sach thi

Imran ko explanation dhoondhne mein 20 minute lage, aur woh bahut aam nikla. Jab January mein late-fee policy badli, kisi ne naya version us folder mein upload kar diya tha jahan se chatbot padhta hai. Purana version kisi ne hataya nahi.

Toh dono versions store mein the, chunks mein kate hue, har ek ka apna embedding. Jab customer ne sawaal poochha, search ko late fee ke do chunks mile. Figure ke alawa woh lagbhag ek jaise the, aur purana wala ittefaq se thoda zyada score kar gaya. Woh model ke paas gaya, aur model ne pichhle saal ke rule se ek fluent, confident, grounded jawaab likh diya.

Sab kuch kaam kar raha tha. Search ne sahi topic dhoondha. Model ne wahi use kiya jo use diya gaya. Jawaab ek asli document par tika tha. Bas woh document purana tha.

::: key Relevance aur correctness ek cheez nahi hain
Behtar ranking se madad nahi milti. Pichhle saal ki policy late fee ke baare mein hai, aur sawaal se utni hi match karti hai jitni is saal ki. Relevance aur correctness do alag sawaal hain, aur search mein aisa kuch tha hi nahi jo in dono ka farq jaanta ho.
:::

## Chaar sudhaar

Pichhle mahine ke kaam ne team ko is par shaanti se nazar daalne ka tareeka diya tha. Chatbot ki search ke liye unke paas ek answer key thi: customers ke apne words mein 10 sawaal, aur pehla score tha 10 mein se 6. Imran ne chaar techniques ek-ek karke lin aur har ek ko usi 10 par naapa.

Table: Search ke chaar sudhaar, usi 10 sawaalon par naape gaye
| Technique | Kya karti hai | Score |
| --- | --- | --- |
| Hybrid search | Keyword search aur meaning wali search ko saath chalati hai, aur dono lists ko jod deti hai, toh ab dono mein se ek chunna nahi padta. "Clause 14.2" ek se aaya aur "paisa kab milega" doosri se | 6 se 7 |
| Reranking | Pehle sasti tarah se sabse achhe 50 tukde laati hai, phir ek dheemi, zyada dhyaan wali model sawaal aur har tukda saath mein padhti hai aur sabse achhe kuch ko upar rakhti hai. Isse recall aur precision dono sudharte hain, extra time aur ek doosri call ki keemat par. Isiliye yeh 50 tukdon par chalti hai, poori library par nahi | 7 se 8 |
| Contextual retrieval | Har chunk store karne se pehle ek model ek sentence likhti hai jo bataye ki chunk apne document mein kahan hai ("This is from the refund section of the Late Payment Policy, about overpayments"), aur woh sentence uske saath store hota hai. Jo tukda "the aforesaid amount" se shuru hota tha, ab uske saath ek note hai ki woh amount kya hai | 8 se 9 |
| Metadata filtering | Har chunk par label hota hai: kaunsa document, kaunsa version, kin dates ke beech woh lagu hai, aur kaun use dekh sakta hai. Search kuch bhi score kare, usse pehle jo chunk current nahi hai woh bahar fenk diya jaata hai | Koi badlaav nahi |

Chauthi technique woh hai jisne score nahi hilaya. In labels ko *metadata* kehte hain, aur kisi bhi scoring se pehle in labels ke hisaab se chunks ko fenk dena *metadata filtering* hai.

## Woh sawaal jo kisi ne poochha hi nahi tha

Anaya ne samjha ki score kyun nahi hila. Answer key mein yeh sawaal tha hi nahi. 10 mein se ek bhi aisi cheez ke baare mein nahi tha jo badli ho.

Toh Imran ne use gyarahvi row ki tarah joda: bijli bill par late fee kitni hai? Sahi jawaab tha 150 rupaye. Filter ke bina system ne 100 bataya. Filter lagakar usne 150 bataya. Imran ne pakka karne ke liye ise 100 baar chalaya, aur har baar result wahi aaya.

::: key Akeli technique jo kuch guarantee karti hai
Hybrid search se sahi chunk ke aane ke chance badhte hain. Reranking se uske upar aane ke chance badhte hain. Extra sentence se uske samjhe jaane ke chance badhte hain. Koi bhi ranking technique ek radd ki hui policy ko current policy se upar aane se nahi rok sakti, kyunki ranking relevance ki baat hai aur yeh correctness ki. Filter scoring se pehle kaam karta hai. Woh galat cheez ko kam mumkin nahi banata. Use na-mumkin bana deta hai.
:::

Anaya ne woh farq pehchana jo woh ab har cheez mein dhoondhne lagi thi. Ek tarah ke tareeke kisi failure ko kam kar dete hain. Doosri tarah ke tareeke uski wajah hi hata dete hain. Usne whiteboard par kaali ink se "row eleven" likha, purani laal line ke neeche. Yeh answer key ki pehli row thi jo kisi customer se aayi thi.

## Labels kis kaam ke hain

Lakshmi ruki hui thi. Usne poochha ki labels par aur kya hai. Imran ne ginaya: document, version, woh dates jinmein woh lagu hai, aur kise dekhne ki ijaazat hai.

Lakshmi ne aakhri cheez dohrayi. Folder mein internal documents the, jaise collections playbook aur staff handbook. Usne poochha ki pehle kya hota agar kisi customer ka sawaal handbook se match kar jaata? Imran ne kaha ki search handbook dhoondh leti. Usne kaha ki dikhao ki ab isse kaise roka gaya hai. Search se pehle ek filter, Imran ne kaha. Customer ki request sirf unhi chunks ko dekh sakti hai jinpar customers ka label hai.

Woh sir hilakar aisi expression ke saath boli jo Anaya ne pehle uspar nahi dekhi thi. Yeh theek se approval nahi tha. Yeh us insaan ki nazar thi jise pakki zameen mil gayi ho. Pehli baar building mein koi tool wahi kar raha tha jo Lakshmi 20 saal se har system se maangti aayi thi: galat cheez ko na-mumkin banana, na ki sirf kam mumkin.

Anaya ne dekha ki yahi idea guard mein bhi lagna chahiye. Har message kahin se aata hai: order-tracking screen, loan-status screen, ya free chat. Jis screen ko identity number lene ke liye hi banaya gaya hai, wahan type kiya gaya identity number bilkul sahi ho sakta hai. Wahi number free chat mein sahi nahi hai.

Agar rule-keeper kuch bhi tay karne se pehle jaanta ho ki message kahan se aaya, toh woh bina kisi hoshiyaar kadam ke alag rules laga sakta hai. Message ka maqsad bas ek aur label tha, aur ek imaandaar label. Usne specification mein ek column jod diya.

## Ek aur idea, abhi ke liye alag

Ek technique aur bachi thi. Imran ne use samjhaya aur phir taal diya. Model ko khud kai searches chalane ki ijaazat di ja sakti hai, woh results padhe aur apna sawaal dobara likhe, Chapter 20 ke loop ka istemaal karke. Yeh *agentic search* hai.

Woh behtar evidence dhoondh sakti hai. Lekin woh cost ko usi tarah multiply karti hai jaise us chapter ne dikhaya tha, aur wahi risks bhi saath laati hai. Imran ne use board par "later" ke neeche likha, ek aisa column jo kai cheezon ke liye achhi jagah dikhne laga tha.

## Summary

Seedhi search ko chaar tareeke se behtar banaya ja sakta hai, aur har ek ko usi answer key par naapna chahiye.

- Hybrid search keyword aur meaning wali search ko saath chalati hai, toh dono mein se ek chunna nahi padta.
- Reranking bahut saare candidates laati hai, phir ek dheemi model unhe dobara padhkar order mein lagati hai. Isse jo mila aur woh kitna saaf hai, dono sudharte hain, kuch time ki keemat par.
- Contextual retrieval har chunk ke saath ek sentence jodti hai ki woh kahan se hai, aur akele chhode gaye tukdon ko theek karti hai.
- Metadata filtering chunks par version, dates aur audience ke labels lagati hai, aur kisi bhi scoring se pehle in labels par filter karti hai. Yahan sirf yahi technique result ka vaada kar sakti hai, kyunki relevance aur correctness alag sawaal hain.
- Agentic search model ko baar-baar search karne deti hai, aur cost ko multiply kar deti hai.

Achhi answer key asli failures se badhti hai, aur sabse achhi nayi row woh hoti hai jo kisi customer ne likhi ho.

Agle chapter mein aap ek bahut buri problem se milenge, jisme model jo text padhta hai woh use hukm dene lagta hai.

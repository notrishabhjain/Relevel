---
title: Search Ko Behtar Banana
summary: Ek customer ko pichhle saal ki late fee bata di jaati hai. Search ko behtar karne ke chaar tareeke ek hi answer key par naape jaate hain. Sabse saada tareeka hi akela hai jo result ka vaada kar sakta hai. Chapter mein hybrid search, reranking, contextual retrieval, metadata filtering aur agentic search aate hain.
course: ch12
goals:
  - bata paana ki sahi dikhne wala jawaab bhi purane document se kaise aa sakta hai
  - batana ki hybrid search, reranking aur contextual retrieval har ek kya theek karta hai
  - samjhana ki metadata filtering result ka vaada kyun kar sakti hai, jabki ranking sirf chance badhati hai
  - answer key mein customer ki asli failure jodna, aur labels se tay karna ki kaun kya dekh sakta hai
terms:
  - hybrid search | Ctrl+F jaisi word search aur matlab wali search ko saath chalana, phir dono lists ko milana, taaki ek chunna na pade | 
  - reranking | pehle ek tez helper pages ka bada dher laata hai, phir ek dheemi, dhyaan se padhne wali model sawaal aur har page saath mein padhkar sabse achhe kuch ko upar rakhti hai | rerank, reranker
  - contextual retrieval | har index card par ek note ki yeh kis kitaab ke kis chapter se aaya hai, taaki akela mila card bhi samajh aaye | contextual
  - metadata filtering | har file par label, jaise version, dates aur kaun dekh sakta hai; scoring se pehle jo files sahi ho hi nahi sakti unhe nikaal dena | metadata, metadata filter
  - agentic search | ek helper jo khud kai searches chalata hai, jo wapas aaye use padhta hai, aur sawaal dobara likhta hai, ek loop mein | 
---

Ek Monday ko ek complaint aayi. Farah Sheikh ne use bina kuch likhe forward kar diya. Isi se Anaya ko pata chala ki yeh zaroori hai. Nashik ki ek customer ne chatbot se poochha tha ki uske bijli bill par late fee kitni hai. Chatbot ne bola tha 100 rupaye. Usne due date ke teen din baad bhugtan kiya tha. Sahaj ne usse 150 liye.

Woh bahut naraz nahi thi. Uska message tameez se likha tha. Woh bas jaanna chahti thi ki company ki taraf se bolne wali machine ne ek baat kyun kahi, jabki company ne kuch aur kiya.

Ghante bhar ke andar Lakshmi Iyer ek printout leke glass room mein aayi. Uske chehre par kuch bhi nahi dikh raha tha. Usne poochha ki kaun sa figure sahi hai. Imran Qureshi ne check kiya. Usne kaha 150, kyunki January mein fee badh gayi thi. Usne poochha ki machine ko 100 kahan mila.

## Case: woh fee jo kabhi sach thi

Imran ko wajah dhoondhne mein bees minute lage. Wajah aam thi. January mein late-fee policy badli. Kisi ne naya version us folder mein daal diya jise chatbot padhta hai. Purana kisi ne hataya nahi.

Yeh ek notice board jaisa hai jisme do notice lage hain. Purana kabhi utara hi nahi gaya. Isliye dono versions store mein pade the. Har ek ko chunks mein kaata gaya tha (chhote tukde, index cards jaise). Har chunk ka apna embedding tha (uske matlab ka pata).

Customer ne apna sawaal poochha. Search ko late fee ke do chunks mile. Woh lagbhag ek jaise the, bas figure alag tha. Purana chunk thoda zyada score kar gaya. Woh model ke paas gaya. Model ne pichhle saal ke rule se ek saaf, pakka, grounded jawaab likha (jawaab jo asli page se liya gaya ho).

Sab kuch kaam kar gaya tha. Search ko sahi topic mila. Model ne wahi use kiya jo use diya gaya. Jawaab ek asli document se aaya. Bas document purana tha.

::: key Relevance sahi hone ke barabar nahi hai
Behtar ranking se madad nahi hoti. Pichhle saal ki policy bhi late fee ke baare mein hai. Woh sawaal se utna hi milti hai jitna is saal ki. Relevance (kya yeh sawaal se milta hai?) aur correctness (kya yeh aaj sahi hai?) alag sawaal hain. Search mein kuch bhi is farq ko nahi jaanta tha.
:::

## Chaar sudhaar

Pichhle mahine ke kaam ne team ko is par shaanti se dekhne ka tareeka diya. Chatbot ki search ke liye unke paas ek answer key thi. Usme customers ke apne words mein das sawaal the. Pehla score das mein se chhe tha. Imran ne chaar techniques ek-ek karke li. Har ek ko usne wahi das sawaalon par naapa.

Table: Search ke chaar sudhaar, wahi das sawaalon par naape gaye
| Technique | Kya karta hai | Score |
| --- | --- | --- |
| Hybrid search | Keyword search aur matlab se search ko saath chalata hai, aur dono lists ko milata hai, taaki chunna na pade. "Clause 14.2" ek se aaya aur "paisa kab milega" doosre se | 6 se 7 |
| Reranking | Sabse achhe pachaas tukde sasti tarah se laata hai. Phir ek dheemi, zyada dhyaan wali model sawaal aur har tukda saath mein padhti hai aur sabse achhe kuch ko upar rakhti hai. Yeh recall aur precision dono badhata hai. Daam hai extra time aur ek doosri call. Isliye yeh pachaas tukdon par chalta hai, poori library par nahi | 7 se 8 |
| Contextual retrieval | Har chunk store karne se pehle, ek model ek sentence likhta hai ki chunk apne document mein kahan baitha hai ("Yeh Late Payment Policy ke refund section se hai, overpayments ke baare mein"). Sentence uske saath store hota hai. Jo tukda "the aforesaid amount" se shuru hota tha, ab uske saath ek note hai ki woh amount kya hai | 8 se 9 |
| Metadata filtering | Har chunk par label hota hai: uska document, version, kin dates ke beech woh lagu hai, aur kaun use dekh sakta hai. Search kuch bhi score kare, usse pehle jo chunk current nahi hai woh bahar phenk diya jaata hai | Koi badlaav nahi |

Hybrid search ko do doston jaisa socho. Ek exact word dhoondhta hai, Ctrl+F ki tarah. Ek matlab dhoondhta hai. Saath mein woh kam chhodte hain. Reranking shortlist aur interview jaisa hai. Contextual retrieval har card par ek sticky note hai.

Chauthi technique woh hai jisse score nahi hila. Un labels ko *metadata* kehte hain (page ke baare mein jaankari, page khud nahi). Kisi bhi scoring se pehle in labels se chunks bahar karna *metadata filtering* hai.

## Woh sawaal jo kisi ne poochha nahi tha

Anaya ne samjha ki score kyun nahi hila. Answer key mein woh sawaal tha hi nahi. Das mein se kisi ne bhi aisi cheez ke baare mein nahi poochha tha jo badli ho.

Isliye Imran ne use gyarahvi row ki tarah jod diya. Bijli bill par late fee kitni hai? Sahi jawaab 150 rupaye tha. Filter ke bina system ne 100 bola. Filter lagane par usne 150 bola. Usne pakka karne ke liye use sau baar chalaya. Har baar result wahi aaya.

::: key Akeli technique jo guarantee deti hai
Hybrid search se sahi chunk ke aane ka chance badhta hai. Reranking se uske upar rehne ka chance badhta hai. Extra sentence se uske samjhe jaane ka chance badhta hai. Koi ranking technique ek radd ho chuki policy ko current policy se aage nikalne se nahi rok sakti. Ranking relevance ke baare mein hai, aur yeh correctness ka mamla hai. Filter scoring se pehle kaam karta hai. Woh galat cheez ko kam likely nahi banata. Woh use namumkin bana deta hai.
:::

Anaya ne ek farq dekha jise woh ab har jagah dhoondhne lagi thi. Ek tarah ka sudhaar failure ko kam kar deta hai. Doosri tarah ka sudhaar uski wajah hata deta hai. Phir notice board ko socho. Aap logon ko dhyaan se padhne ko keh sakte ho. Ya aap purana notice utaar sakte ho. Usne whiteboard par kaale marker se "row eleven" likha, purani laal line ke neeche. Yeh answer key ki pehli row thi jo ek customer se aayi thi.

## Labels kis liye hain

Lakshmi ruki hui thi. Usne poochha ki labels par aur kya hai. Imran ne ginaya: document, version, woh dates jab woh lagu hai, aur kaun use dekh sakta hai.

Lakshmi ne aakhri wali baat dohrayi. Folder mein internal documents the, jaise collections playbook aur staff handbook. Usne poochha ki pehle kya hota agar customer ka sawaal handbook se mil jaata. Imran ne kaha ki search handbook dhoondh leti. Usne kaha ki dikhao ab yeh kaise roka gaya hai. Search se pehle ek filter, usne kaha. Customer ki request sirf un chunks ko dekh sakti hai jin par customers ka label hai.

Yeh ek library jaisa hai jisme sirf staff ke liye ek shelf hai. Customer ko us shelf par bheja hi nahi jaata.

Usne sir hilaya. Anaya ne uske chehre par pehle yeh kabhi nahi dekha tha. Yeh theek-theek manzoori nahi thi. Yeh us insaan ka chehra tha jise pakka farsh mil gaya ho. Pehli baar building ke ek tool ne woh kiya jo Lakshmi bees saal se har system se maangti aayi thi. Usne galat cheez ko sirf kam likely nahi, namumkin bana diya.

Anaya ne dekha ki yahi idea guard mein bhi hona chahiye. Har message kisi jagah se aata hai. Woh order-tracking screen ho sakti hai, loan-status screen ya free chat. Pehchaan number us screen mein type karna jo use maangne ke liye bani hai, theek ho sakta hai. Wahi number free chat mein theek nahi.

Maan lijiye rule-keeper ko pehle se pata hai ki message kahan se aaya. Tab woh alag rules lagu kar sakta hai, bina kisi chalaak step ke. Message ka maqsad bhi bas ek aur label tha, aur ek imaandaar label. Usne specification (product ki likhi hui yojana) mein ek column jod diya.

## Ek aur idea, ek taraf rakha hua

Ek aur technique baaki thi. Imran ne use samjhaya aur phir taal diya. Model ko khud kai searches chalane di ja sakti hain. Woh results padhta hai aur apna sawaal dobara likhta hai. Woh Chapter 20 ka loop use karta hai. Yeh *agentic search* hai.

Yeh ek aise helper jaisa hai jise errands par bheja gaya ho aur jo baar-baar shelf par wapas jaata ho. Yeh behtar evidence dhoondh sakta hai. Lekin yeh cost ko kai guna badha deta hai, jaisa us chapter ne dikhaya. Yeh wahi khatre bhi saath laata hai. Imran ne use board par "later" ke neeche likh diya. Woh column ab bahut si cheezon ke liye achhi jagah lagne laga tha.

## Summary

Saadi search ko chaar tareeke se behtar kiya ja sakta hai. Har ek ko ek hi answer key par naapna chahiye.

- Hybrid search keyword aur matlab ki search ko saath chalata hai, taaki dono mein se ek chunna na pade.
- Reranking bahut saare candidates laata hai. Phir ek dheemi model unhe dobara padhkar naye sire se lagati hai. Isse jo mila aur woh kitna saaf hai, dono behtar hote hain, thode time ke badle.
- Contextual retrieval har chunk ke saath ek sentence jodta hai ki woh kahan se aaya. Isse akele chunks theek hote hain.
- Metadata filtering chunks par version, dates aur audience ke labels lagata hai. Woh kisi bhi scoring se pehle in labels par filter karta hai. Yahan yahi akeli technique hai jo result ka vaada kar sakti hai, kyunki relevance aur correctness alag sawaal hain.
- Agentic search model ko baar-baar search karne deta hai. Yeh cost ko kai guna badha deta hai.

Achhi answer key asli failures se badhti hai. Sabse achhi nayi row woh hai jo ek customer ne likhi.

Agle chapter mein answer key ka dasvaan sentence, jo hamesha mazaak jaisa lagta tha, ek asli attack nikalta hai.

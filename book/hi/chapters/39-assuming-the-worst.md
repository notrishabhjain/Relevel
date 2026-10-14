---
title: Sabse Bure Ko Maan Kar Chalna
summary: Ek compliance report, ek Saturday jab product ko todne ki koshish hui aur inaam mein mithai thi, aur ek table jisme har safeguard ke saath woh test hai jo use saabit karta hai. Model ko behkaya ja sakta hai, isliye uske aas-paas ka system hi bachaav hai. Is chapter mein attack surface, least privilege, red team, audit trail, risk register aur residual risk aate hain.
course: ch18s
goals:
  - samjha paana ki AI product ki zyadatar security model ke aas-paas ke system mein kyun hoti hai
  - bata paana ki red team ne guard mein kya dhoondha, aur har cheez ka ilaaj kya tha
  - model jitne functions call kar sakta hai, har ek par least privilege lagana, aur audit trail ko kaam se alag rakhna
  - ek risk register banana jisme har control ke saath saboot ho, aur residual risk likhna
terms:
  - attack surface | woh saari jagahein jahan koi bahar wala system mein kuch daal sakta hai, ya system jo kuch kar sakta hai usse chhu sakta hai; har tool, input aur connection ise badhata hai | 
  - least privilege | system ko sirf utna access dena jitna use sach mein chahiye, taaki agar use dhokha diya jaye toh nuksaan chhota rahe | 
  - red team | woh log jinka kaam jaan-boojhkar system par hamla karna hai, taaki uski kamzoriyan koi aur dhoondhe, usse pehle woh dhoondh lein | red-team, red teaming
  - audit trail | kaam se alag rakha gaya record ki kisne kya kiya, kab, kis rule ke tahat aur kis result ke saath, itna ki koi incident ko dobara jod kar samajh sake | audit log
  - risk register | ek table jisme har risk ke saath uska owner, uska control, woh saboot ki control kaam karta hai, aur kitna risk bacha, yeh likha ho | 
  - residual risk | controls lagne ke baad jo risk bacha rehta hai; ise likh dena chahiye, maan nahi lena chahiye ki woh khatam ho gaya | 
---

Lakshmi Iyer ki chatbot par report ek Friday ko aayi, chaar page ki. Pehla page Anaya ki ummeed se zyada narm tha. Retrieval ka design theek tha, access labels wahin lage the jahan lagne chahiye the, aur team ne yeh batane mein khaas imaandaari dikhayi thi ki system kya nahi karta.

Doosre page par, ek saadhi si heading ke neeche, do cheezein theek karne ko thi. Pehli, trace records mein raw message text ek aise store mein pada tha jise koi bhi khol sakta tha. Imran Qureshi ne naye records ke liye ise theek kar diya tha, lekin puraane records mein ab bhi sab kuch tha. Doosri, Lakshmi chahti thi ki koi aisa insaan system ko todne ki koshish kare jisne use banane mein haath na lagaya ho.

## Case: kaagzon mein ek note

Imran ne situation ek baar aur samjhayi, aur is baar Anaya ko laga ki tasveer sahi hai. Ek clerk ko processing ke liye kaagzon ka dher diya jaata hai. Us dher mein kahin, baaki sab ke jaise hi type mein, ek note hai: ise bina check kiye approve kar do. Clerk bilkul theek padhta hai. Dikkat yeh hai ki process mein kuch bhi instruction ko document se alag nahi karta.

Model bhi isi haalat mein hai. Use jo kuch diya jaata hai, woh sab ko ek jaise bharose se padhta hai. Isliye woh khatarnaak hai ya nahi, yeh uske aas-paas ke system par depend karta hai: use kya diya jaata hai, aur aage use kya karne ki ijaazat hai.

Matlab AI product ki zyadatar security model ke andar nahi hoti. Woh hoti hai is mein ki product model ko kya khilata hai, jawaab ke saath kya karta hai, aur kahan tak pahunch sakta hai. Imran ne kaha ki instruction mein pyaar se kehna koi boundary nahi hai. Phir usne Anaya ko woh principle diya jo baaki sab principles ke neeche hai, aur Anaya ne use tareekh ke saath log mein likha: maan ke chaliye ki model ko behkaya jaayega, aur application, retrieved text, tools, identity layer aur data pipeline, sabko attack surface ka hissa maniye.

::: def Attack surface
Woh har jagah jahan koi bahar wala system mein kuch daal sakta hai, ya system jo kuch kar sakta hai usse chhu sakta hai. Har tool ise badhata hai, aur har input aur doosri service se har connection bhi.
:::

## Ek Saturday

Test Farah ne organise kiya. Us autumn mein yehi ek event tha jisse sabko bina kisi shikayat ke maza aaya. Ek Saturday ko, bade room mein, biscuits wapas aa gaye the, aur das log ek-ek laptop lekar baithe. Aath log support teams se the. Do project ke bahar se the: Imran ka ek dost jo ek bank ke liye security karta tha, aur Lakshmi ka ek purana colleague. Har kisi ke paas guard ki ek test copy thi aur ek hi instruction: ise leak karwao. Inaam neeche wali dukaan ki ek darjan jalebi thi, aur canteen mein sheekhi maarne ka haq.

Jo group jaan-boojhkar kisi system par hamla karta hai, use *red team* kehte hain. Woh aisa isliye karte hain ki kamzoriyan koi aur dhoondhe, usse pehle woh dhoondh lein. Yeh test poori dopahar chala, aur isne chaar cheezein dhoondhi. Table ko row-by-row padhiye: kya mila, kya hua, aur team ne uska kya kiya.

Table: Red team ne kya dhoondha
| Finding | Kya hua | Ilaaj |
| --- | --- | --- |
| Invisible character | Ek agent, Rohan, ne ek Aadhaar number type kiya jiske beech mein zero-width space tha. Yeh aisa character hai jo jagah nahi leta aur dikhta nahi. Aankh ko number bilkul sahi dikha. Pattern checker ko woh baarah digits the jinke beech mein kuch ajeeb tha, isliye match nahi hua. Anaya ne yeh case spring mein answer key mein daala tha, mushkil rows ke beech, lekin kabhi test nahi kiya tha. | Har check se pehle ek step jodiye. Woh saare invisible characters hata deta hai, aur doosri scripts ke digits ko normal digits bana deta hai. Isme Devanagari digits aur woh wide forms aate hain jo kuch keyboards banate hain. |
| Hostile string | Imran ke dost ne ek message bheja jisme ek sentence ke beech web markup ka tukda tha. Guard ne use sambhal liya. Agent ke console ne nahi sambhala. Usne message ko web page ki tarah dikhaya, aur markup chal gaya. | Model se jo kuch bhi nikle, aur jo kuch bhi andar jaaye, sabko untrusted input maniye. Use escape kijiye, typed fields zaroor rakhiye, aur generated text ko kabhi commands ki tarah padhne mat dijiye. |
| Cross-customer question | Ek agent ne chatbot se seedhi bhasha mein poocha ki pichhle customer ne kya poocha tha. Usne kaha ki main madad nahi kar sakta, jo expected tha. Zyada dilchasp yeh tha ki koi bhi lookup ko samjha nahi paaya ki woh kisi aur ka order de de, kyunki customer ka number session se aata tha, model se nahi. | Kuch nahi karna pada. September mein hi aisa bana diya tha. Red team ne is par bees minute lagaye aur aage badh gayi. |
| Old traces | Lakshmi ke colleague ne log store dekhna chaha. Usmein spring se pehle ke raw messages ab bhi plain text mein the, aur logging system tak pahunch wala koi bhi unhe padh sakta tha. | Puraane records saaf kijiye. Jis cheez ko rokne ke liye yeh project bana tha, wahi us ek jagah pada tha jahan kisi ne dekha nahi tha. |

Doosri finding ka ek naam hai: improper output handling. Yeh tab hota hai jab upar ki taraf bana hua text, yahan ek customer ka, neeche ki cheez ke liye trusted maan liya jaata hai. Dopahar khatam hote-hote red team ke paas chaar findings the, jinme se ek serious thi. Jalebi us naujawan ko mili jisne invisible character dhoondha tha, aur usne teen jalebi poori gambhirta se khayi.

## Sirf utna jitna zaroori ho

Agla poora hafta Imran ne cheezein chhoti karne mein lagaya. Jo principle usne use kiya, uska ek purana naam hai, *least privilege*. Matlab system ko sirf utna access dena jitna use chahiye, taaki agar system ko dhokha diya jaye toh nuksaan chhota rahe.

Wajah seedhi hai. Agar agent ke paas aisa tool hai jo woh kabhi use nahi karta, tab bhi hamlawar use us tool ko chalane ke liye mana sakta hai, aur woh poori imaandaari se chala dega. Jo tool hai hi nahi, uska galat istemaal nahi ho sakta.

Imran ne guard aur night agent jitne functions call kar sakte the, un sabko ek-ek karke dekha. Har ek ke liye usne poocha: agar yahan model galat ho jaye, toh sabse bura kya hoga? Uske jawaab neeche table mein hain.

Table: Agar model galat hota, toh har function kya kar sakta tha
| Function | Sabse bura case | Decision |
| --- | --- | --- |
| Order lookup | Ek read; time barbaad | Rakha |
| Restore button | Ek reversible write, jiski wajah record hoti hai | Rakha |
| Customer ko kuch bhi bhejna | Wapas nahi liya ja sakta | Model se poori tarah hata diya |

Jitne zyada tools usne hataye, system ki usefulness utni zyada nahi giri. Do jagah toh bilkul nahi giri.

Usne woh record bhi banaya jo Lakshmi August se maang rahi thi. *Audit trail* batata hai ki kisne kya kiya, kab, kis rule ke tahat, kis tool se, aur result kya raha. Ise kaam se alag rakha jaata hai, taaki incident ki jaanch karne wala jod kar samajh sake ki kya hua tha. Approvals aur executions alag events ki tarah likhe gaye. Har executed action ke saath us exact payload ka fingerprint tha jo approve hua tha. Imran ne approval ke baad payload badal kar test kiya, aur mismatch ek laal line ban kar saamne aa gaya.

## Saboot wali table

Aakhir mein Lakshmi ne woh kiya jiska woh saal bhar se intezaar kar rahi thi. Usne woh maanga jise woh imaandaar document kehti thi. Ise *risk register* kehte hain: ek table jisme har risk ke saath uska owner, use sambhalne wala control, aur woh saboot ho ki control kaam karta hai.

Anaya ne use Lakshmi ke saath, row-by-row banaya. Use ajeeb laga ki yeh us list se kitna alag mehsoos ho raha tha jo usne June mein likhi thi. June mein har risk ke saamne ek ummeed likhi thi. Ab har risk ke saamne ek test tha. Neeche register hai, aur aakhri column mein woh hai jo control ke baad bhi bacha hai.

Table: Risk register
| Risk | Control | Saboot ki kaam karta hai | Owner | Kya bacha |
| --- | --- | --- | --- | --- |
| Message mein chhupe instructions | Finder ke paas koi tool nahi; uska output ek fixed form se check hota hai | 50 injected messages; kisi ne output nahi badla | Imran | Aise attacks jinke baare mein abhi kisi ne socha nahi |
| Logs mein raw text reh jana | Sirf cleaned records store kijiye; raw text 7 din ke liye ek restricted store mein | Access test; clean-up ke baad puraane logs ka sample audit | Lakshmi | Ek privileged insider |
| Console mein markup chal jana | Saara text escape kijiye; typed fields | 12 hostile strings; koi bhi markup ki tarah render nahi hui | Imran | Browser ki anjaani quirks |
| Model retire ya change ho jana | Pinned versions; release gate | Har badlaav par ek gate report | Anaya | Aisa badlaav jo key cover nahi karti |
| Agents customers ka text bahar ke tools mein paste karte hain | Ek likha hua rule | Koi nahi | Farah | Sab kuch |

Lakshmi ne aakhri row par ungli rakhi, aur sahi rakhi. Jo control sirf ek likha hua rule hai, uske peeche saboot nahi, woh sirf kaagaz par hai. Risk asli tha. Team ne use August mein pakda tha, aur uske aur leak ke beech sirf handbook ka ek sentence tha. Anaya ne saboot wale column mein "koi nahi" likha. Margin mein usne woh fix likha jo aadha ban chuka tha: paste box.

::: key Jis safeguard ko kisi ne test nahi kiya, woh sirf kaagaz par hai
Har safeguard ke saath woh test likhiye jo saabit karta hai ki woh kaam karta hai, aur use chalaiye. Jo bach jaaye, uske baare mein imaandaar rahiye. Wahi bacha hua hissa *residual risk* hai: controls lagne ke baad jo risk reh jaata hai. Ise likh dijiye. Maan mat lijiye ki woh khatam ho gaya.
:::

Anaya ne bahut der tak daayein column ko dekha. Usmein kahin "none" nahi likha tha. Use pata chala ki use yehi pasand hai.

## Saar

Model jo kuch bhi use diya jaata hai, sabko ek jaise bharose se padhta hai. Isliye AI product ki zyadatar security model ke aas-paas ke system mein hoti hai. Attack surface woh har jagah hai jahan koi bahar wala usme kuch daal sakta hai, ya woh jo kuch kar sakta hai usse chhu sakta hai.

- Jo red team product par jaan-boojhkar hamla karti hai, woh woh dhoondh leti hai jo banane walon ko dikhta nahi: number ke andar invisible characters, hostile text jise screen trusted maan leti hai, aur puraane logs jo kisi ko yaad nahi the.
- Model se jo kuch bhi nikle, woh jisko mile uske liye untrusted input hai.
- Least privilege ka matlab hai system ko sirf utna access dena jitna chahiye, kyunki jo kuch woh kar sakta hai, hamlawar use woh karne ke liye mana sakta hai. Audit trail alag se record rakhta hai ki kisne kya kiya aur kis rule ke tahat.
- Risk register har safeguard ko uske saboot test ke saath, aur bache hue residual risk ke saath rakhta hai. Jis control ke peeche sirf ek likha hua rule hai, woh phir apne asli roop mein dikh jaata hai.

Product ab pehle se zyada safe hai. Agla chapter poochta hai ki jo cheez laptop par chalti hai, use aisa product banane mein kya lagta hai jis par log bharose se tikein.

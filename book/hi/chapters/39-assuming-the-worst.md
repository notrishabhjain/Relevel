---
title: Sabse Bure Ko Maan Kar Chalna
summary: Ek compliance report, ek Saturday jisme mithai inaam ke saath product ko todne ki koshish hui, aur ek table jisme har safeguard us test ke saath hai jo use saabit karta hai. Model ko behkaya jaayega, aur uske chaaron taraf jo hai wahi bachaav hai. Chapter attack surface, least privilege, red teaming, audit trails, risk registers aur residual risk samjhata hai.
course: ch18s
goals:
  - samjhana ki AI product ki zyadatar suraksha model ke chaaron taraf ke system mein kyun hoti hai
  - batana ki red team ne guard mein kya dhoondha aur har khoj ka ilaaj kya tha
  - har function par, jo model bula sakta hai, least privilege lagana, aur audit trail ko kaam se alag rakhna
  - aisa risk register banana jisme har control ke saath saboot ho, aur residual risk likhna
terms:
  - attack surface | woh sab jagahein jahan ek bahari kisi system mein kuch daal sakta hai ya woh kuch pahunch sakta hai jo woh kar sakta hai; har tool, input aur connection ise badhata hai | 
  - least privilege | ek system ko sirf utna access dena jitne ki use asal mein zaroorat hai, taaki agar use dhokha diya jaye toh nuksaan seemit rahe | 
  - red team | woh log jinka kaam jaan-boojh kar ek system par hamla karna hai, taaki uski kamzoriyan pehle unhe milein | red-team, red teaming
  - audit trail | kaam se alag rakha gaya ek record, ki kisne kya kiya, kab, kis niyam ke tahat aur kis nateeje ke saath, kisi ghatna ko punarnirmit karne ke liye kaafi | audit log
  - risk register | ek table jo har jokhim ko uske malik, uske control, saboot ki control kaam karta hai, aur kitna jokhim bacha hai, ke saath list karti hai | 
  - residual risk | woh jokhim jo controls lagne ke baad bacha rehta hai, jise likhna chahiye aur door maan nahi lena chahiye | 
---

Lakshmi Iyer ki chatbot par report ek Friday ko aayi aur chaar page ki thi. Pehla page Anaya ki ummeed se zyada narm tha. Retrieval design theek tha, access labels wahan lagaye gaye the jahan lagne chahiye, aur team ne yeh bataane mein asaadhaaran imaandaari dikhayi thi ki system kya nahi karta. Doosre page par, ek saadhe type ki heading ke neeche, do cheezein thi jinpar kaam chahiye tha. Pehli, trace records mein raw message text ek bina-pratibandh store mein tha: Imran Qureshi ne ise naye records ke liye theek kiya tha, puraano ke liye nahi, jinme ab bhi sab kuch tha. Doosri, Lakshmi chahti thi ki koi aisa insaan ise todne ki koshish kare jisne ise banane mein madad na ki ho.

## Case: kaagazon mein ek note

Imran ne sthiti ek baar aur samjhayi, aur Anaya ko laga ki is baar tasveer sahi thi. Ek clerk ko processing ke liye kaagazon ka ek dher diya jaata hai. Dher mein kahin, baaki ke jaise hi type mein, ek note hai: bina jaanche ise manzoor karo. Clerk bilkul achhe se padhta hai. Dikkat yeh hai ki prakriya mein kuch bhi ek instruction ko ek document se alag nahi karta.

Model jo kuch bhi use diya jaata hai use ek hi bharose se padhta hai, isliye woh khatarnaak hai ya nahi yeh uske chaaron taraf ke system par nirbhar hai: use kya diya jaata hai aur use aage kya karne ki ijaazat hai. AI product ki zyadatar suraksha model mein nahi hoti. Woh us mein hoti hai jo product model ko deta hai, jo woh jawaab ke saath karta hai, aur jahan tak woh pahunch sakta hai. Imran ne kaha ki instruction mein vinamrata se kehna koi seema nahi hai. Usne Anaya ko woh siddhant diya jo baaki sab ke neeche hai, aur usne use tareekh ke saath log mein likha: maan lo ki model ko behkaya jaayega, aur application, retrieve kiya hua text, tools, identity layer aur data pipeline ko attack surface ka hissa maano.

::: def Attack surface
Har woh jagah jahan koi bahari insaan system mein kuch daal sakta hai, ya aisi cheez tak pahunch sakta hai jo woh kar sakta hai. Har tool ise badhata hai, aur har input, aur kisi doosri service se har jod.
:::

## Ek Saturday

Farah ne test ka aayojan kiya, aur woh us patjhad ki akeli ghatna thi jiska bina kisi hichkichahat ke sab ne aanand liya. Ek Saturday ko bade kamre mein, biscuits wapas ke saath, support teams ke aath log aur project ke bahar ke do, ek bank ke liye security karne wala Imran ka dost aur Lakshmi ka ek purana saathi, ko ek-ek laptop, guard ki ek test copy aur ek hi nirdesh diya gaya: ise leak karwao. Inaam neeche ki dukaan se ek darjan jalebi the, aur canteen mein ghamand karne ka haq.

Aisa samooh jiska kaam kisi system par jaanboojh kar hamla karna hai, taaki uski kamzoriyaan doosron se pehle mil jaayein, *red team* hai. Isne ek dopahar chali aur chaar cheezein dhoondhi.

Table: Red team ne kya dhoondha
| Khoj | Kya hua | Ilaaj |
| --- | --- | --- |
| Na dikhne wala akshar | Ek agent, Rohan, ne ek Aadhaar number type kiya jiske beech mein ek zero-width space tha, ek aisa akshar jo koi jagah nahi leta aur dikhta nahi. Aankh ko number saaf tha, pattern checker ko woh baarah ank the jinke beech kuch ajeeb tha, aur woh mel nahi khaata tha. Anaya ne yeh case April mein answer key mein, tricky rows ke beech, rakha tha, aur use kabhi test nahi kiya tha | Har jaanch se pehle ek kadam: saare akshar jo dikhte nahi hata do, aur doosri lipiyon ke ank, jaise Devanagari aur kuch keyboards ke chaude roop, saadhaaran ankon mein badal do |
| Dushman string | Imran ke dost ne ek aisa message bheja jisme vaakya ke beech web markup ka ek tukda tha. Guard ne sambhaal liya. Agent ke console ne nahi: usne message ko ek web page ki tarah dikhaya, aur markup chal gaya | Model se jo kuch nikalta hai, aur jo kuch andar jaata hai, use bharosa-heen input maano. Use escape karo, typed fields par zor do, aur banaye gaye text ko kabhi commands ki tarah mat chalne do |
| Customers ke beech ka sawaal | Ek agent ne chatbot se prakritik bhasha mein poochha ki pichhle customer ne kya poochha tha. Usne kaha ki woh madad nahi kar sakta, jo ummeed thi. Zyada dilchasp yeh tha ki koi bhi look-up ko kisi aur ka order lautane par razi nahi kar saka, kyunki customer ka number session se aata tha, model se nahi | Koi zaroorat nahi. Ise September mein aise hi banaya gaya tha, aur red team ne us par bees minute lagaye aur chhod diya |
| Puraane traces | Lakshmi ke saathi ne log store dekhne ko kaha. Woh dhoondhna mushkil nahi tha. Usme ab bhi bahaar se pehle ke raw messages the, saadhe text mein, logging system tak pahunch wale kisi ke padhne laayak | Puraane records saaf karo. Jo cheez rokne ke liye project bana tha woh us jagah thi jahan project ne kabhi nahi dekha tha |

Doosri khoj ek failure hai jise improper output handling kehte hain: upar ke kisi jagah, yahan ek customer, ka banaya text neeche ki kisi cheez dwara bharose wala maana jaata hai. Dopahar ke ant tak red team ke paas chaar khojein thi, unme se ek gambhir, aur jalebiyan us jawaan ladke ko gayi jiske paas na dikhne wala akshar tha, jisne unme se teen badi garima ke saath khayin.

## Sirf jo chahiye

Imran ne agla hafta cheezein sankari karne mein bitaya. Siddhant ka ek puraana naam hai, *least privilege*: kisi system ko sirf wahi access do jo use sach mein chahiye, taaki agar use behkaya jaaye toh nuksaan seemit rahe. Agar ek agent ke paas aisa tool hai jo woh kabhi istemaal nahi karta, toh hamlavar use us tool ko istemaal karne ke liye manaa sakta hai, aur woh poore achhe vishwaas se karega.

Woh har function par gaya jise guard aur raat ka agent bula sakte the, aur har ek ke baare mein poochha ki agar us jagah model galat ho toh sabse bura nateeja kya hoga.

Table: Har function kya kar sakta tha agar model galat hota
| Function | Sabse bura | Faisla |
| --- | --- | --- |
| Order look-up | Ek read; waqt ki barbaadi | Rakha |
| Restore button | Ek palte jaane layak write, ek record kiye kaaran ke saath | Rakha |
| Customer ko kuch bhi bhejna | Wapas nahi liya ja sakta | Model se poori tarah hata diya |

Jitne zyada tools usne hataye, system ki upyogita utni kam gir, aur do maamlon mein woh bilkul nahi giri.

Usne woh record bhi banaya jo Lakshmi August se maang rahi thi. *Audit trail* batata hai ki kisne kya kiya, kab, kaun se niyam ke tahat, kaun se tool ke saath aur kya nateeja nikla. Woh kaam se alag rakha jaata hai taaki kisi incident ki jaanch karne wala use dobara bana sake. Manzooriyan aur executions alag events ki tarah likhi jaati thi, aur har kiye hue action ke saath us theek payload ka ek fingerprint tha jise manzoor kiya gaya tha. Usne manzoori ke baad payload badalkar ise test kiya, aur mismatch laal rang ki ek line ki tarah dikha.

## Saboot wali table

Ant mein Lakshmi ne woh kiya jiska woh saal bhar se intezaar kar rahi thi aur us cheez ko maanga jise woh imaandaar document kehti thi. *Risk register* ek table hai jisme har risk apne maalik, use sambhalne wale control aur is saboot ke saath likhi jaati hai ki control kaam karta hai. Anaya ne use uske saath, row-dar-row banaya, aur use yeh baat chaunka gayi ki woh us list se kitna alag lagi jo usne June mein likhi thi. June mein har risk ke saath ek ummeed thi. Ab har ek ke saath ek test tha.

Table: Risk register
| Risk | Control | Saboot ki woh kaam karta hai | Maalik | Kya bacha |
| --- | --- | --- | --- | --- |
| Message mein chhupe instructions | Finder ke paas koi tool nahi; output ek tay form se jaancha jaata hai | 50 injected messages; kisi ne output nahi badla | Imran | Aise hamle jinke baare mein kisi ne abhi nahi socha |
| Logs mein bacha raw text | Sirf saaf kiye records store karo; raw saat din ek pratibandhit store mein | Access test; saaf-safai ke baad puraane logs ka sample audit | Lakshmi | Ek vishesh adhikar wala andar ka insaan |
| Console ka chalaya hua markup | Saara text escape karo; typed fields | Baarah dushman strings; kisi ne markup ki tarah render nahi kiya | Imran | Anjaan browser quirks |
| Ek model retire ya badla gaya | Pinned versions; release gate | Har badlaav par gate report | Anaya | Aisa badlaav jise key dhakti nahi |
| Agents ka customers ka text bahari tools mein paste karna | Ek likhit niyam | Koi nahi | Farah | Sab kuch |

Lakshmi ne aakhri row par ungli rakhi, aur woh sahi thi. Jo control sirf ek likhit niyam hai, bina saboot ke, woh kaagaz par maujood hai. Risk asli tha, team ne use August mein dhoondha tha, aur uske aur leak ke beech sirf handbook ka ek vaakya tha. Anaya ne saboot ke column mein "koi nahi" likha aur hashiye mein woh cheez jo aadhi ban chuki thi: paste box.

::: key Jo safeguard kabhi test nahi hua woh sirf kaagaz par hai
Har safeguard ke paas woh test likho jo saabit karta hai ki woh kaam karta hai, aur use chalao. Jo bacha woh imaandaari ka hissa hai. Woh baaki *residual risk* hai: controls lagne ke baad bacha risk. Use likhna chahiye, maan nahi lena chahiye ki woh hai nahi.
:::

Anaya ne daayein column ko bahut der dekha. Usme koi bhi "koi nahi" nahi tha. Use mehsoos hua ki use aisa hi achha laga.

## Saaraansh

Model jo kuch bhi use diya jaata hai use ek hi bharose se padhta hai, isliye AI product ki zyadatar suraksha uske chaaron taraf ke system mein hoti hai. Attack surface har woh jagah hai jahan koi bahari insaan use kuch de sakta hai ya aisi cheez tak pahunch sakta hai jo woh kar sakta hai.

- Ek red team jo jaanboojh kar product par hamla karti hai woh woh dhoondhti hai jo uske banane wale nahi dhoondh sakte: kisi number ke andar na dikhne wala akshar, aisa dushman text jise screen bharosa-yogya maanti hai, aur puraane logs jinhe kisi ne yaad nahi rakha.
- Model se jo kuch bhi nikalta hai woh use paane wali har cheez ke liye bharosa-heen input hai.
- Least privilege ka matlab hai kisi system ko sirf wahi access dena jo use chahiye, kyunki jo kuch woh kar sakta hai, hamlavar use karwa sakta hai. Audit trail ek alag record rakhta hai ki kisne kya kis niyam ke tahat kiya.
- Risk register har safeguard ko us test ke saath rakhta hai jo saabit karta hai ki woh kaam karta hai aur jo residual risk bacha hai, taaki jo control sirf ek likhit niyam par tika hai woh waisa hi dikhe jaisa woh hai.

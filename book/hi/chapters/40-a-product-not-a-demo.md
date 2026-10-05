---
title: Product, Demo Nahi
summary: Do logon ke liye achhi tarah pakaya gaya khana restaurant ke menu ka item nahi hota. Tyohaar ke mausam se pehle team woh sab ginti hai jo ek chalte prototype aur ek seva ke beech khada hai, aur har bade faisle ke liye likhti hai ki kya use palat dega. Chapter production delta, graceful degradation, staging, latency budgets, architecture decision records aur exit cost samjhata hai.
course: ch19pm ch20d
goals:
  - batana ki text padhne aur likhne wale software ke liye "done" ka matlab kya hai, aur naapon ko chaar kismon mein baantna
  - production delta ki list aur must-have group ka test batana
  - dheeme kaam ko live raaste se hataana, aur har dependency ke liye graceful degradation design karna
  - staging aur latency budget istemaal karna, faislon ko palatne ke trigger ke saath likhna, aur vendors ko exit cost ke saath score karna
terms:
  - production delta | ek kaam karte prototype aur ek chalti service ke beech jo kuch gayab hai uski list, jaise pehchaan, retries, queues, monitoring, secrets, backups aur rollback | 
  - graceful degradation | jab system ka koi hissa fail ho toh ek kam, par surakshit tareeke se kaam karte rehna, poori tarah fail hone ki jagah | degraded mode
  - staging | live system ki ek copy jahan badlaav pehle aazmaye jaate hain, taaki ek kharab badlaav asli users tak kabhi na pahunche | 
  - latency budget | woh kul samay jo ek request le sakti hai, un charno ke beech baanta hua jinse woh guzarti hai, taaki sabse dheema charan dhoondha jaye aur uska ek malik ho | 
  - architecture decision record | ek bade technical faisle ka chhota note: vikalp, chunav, saboot, nateeje, aur kya hone par aap use dobara dekhenge | ADR, ADRs
  - exit cost | ek provider ko chhodne aur doosre par jaane mein paise, samay aur jokhim mein kitna kharcha aayega; ek vendor quality mein jeet sakta hai aur phir bhi aapko saalon ke liye bandh sakta hai | 
---

November ke pehle hafte mein Mr. Bhatia ne poochha ki kya guard poora ho gaya, aur jawaab sunkar thoda dhokhe jaisa dikhe. Anaya apni specification ko ek tulna se samjha rahi thi. Ek railway yeh vaada nahi kar sakti ki train theek nau bajkar chaar minute par aayegi, usne kaha, isliye woh mahine-dar-mahine woh hissa chhapti hai jo schedule ke kuch minute ke andar aati hai, aur yatri us number ke aadhaar par yojna bana sakte hain. Guard us arth mein poora tha ki woh numbers paas karta tha. Woh us arth mein kabhi poora nahi ho sakta tha ki woh hamesha ek hi cheez ko ek hi tarah kare.

Jo software text padhta aur likhta hai uske liye "done" ka matlab ek tolerance ke andar ek naapi hui safalta dar hai, ek tay output nahi. Yeh woh vichaar tha jiske chaaron taraf Anaya April se ghoom rahi thi, aur woh dheere-dheere uska har cheez likhne ka tareeka ban gaya tha. Ab use test hone ki jagah mil gayi thi. Tyohaar ka mausam teen hafte door tha.

## Case: teen hafte mein guard

Neeche ke section batate hain ki guard ko seva ke roop mein abhi kya chahiye tha, woh apne saamaanya bhaar ka das guna kaise sambhalega, aur uske peechhe ke faisle kaise likhe gaye.

## Sirf ek rule kyun nahi?

Charcha ek sawaal se shuru hui jo Anaya se shuru mein poochhne ko kaha gaya tha: yeh saadhaaran software kyun nahi hai? Safe mode ne jawaab diya. Sirf-rules wala version, aapaatkal ke liye banaya gaya, bina kisi model ke fixed-shape numbers mein se sau mein lagbhag chhiyaanve dhoondhta tha. Anaya ne woh figure saal bhar ek aadhaar rekha ki tarah saamne rakha tha, woh cheez jise har doosre hisse ko harana tha. Yeh batane mein achha laga ki kitna. Model ne naam, pate, Hinglish aur woh vaakya diye jo bina kehe ki kaun ek insaan ki taraf ishaara karte hain. Unke bina guard ek rule tha. Usne antar ko, figures ke saath, product requirements ke pehle page par likha: model ne kya kharida aur kya kharcha hua.

Usne acceptance criteria bhi ek aakhri baar likhe, product aur engineering ke beech ek anubandh ki tarah. Retrieval, generation, safety, speed aur kharcha, har ek ka ek number tha, golden dataset aur naapne ke tareeke se jodha hua. Anubandh ki jaanch yeh thi ki Imran use ek baar bhi poochhe bina chala sake ki "achha" ka matlab kya hai.

## Chaar tarah ke number

Dashboard mein ek pravritti thi jo Anaya ko ab har jagah dikhne lagi thi. Jab teams ko bahut saare numbers dikhaye jaate hain, toh woh yeh batana band kar deti hain ki har ek kaun sa sawaal hal karta hai. Imran ne chaar column banaye.

Table: Chaar tarah ke number
| Prakaar | Kaun sa sawaal hal karta hai | Guard ka udaharan |
| --- | --- | --- |
| Business ka nateeja | Kya koi behtar hua? | Lakshmi ke saptaahik sweep ki ginti |
| System ki quality | Kya system sahi hai? | Jo mila uska hissa; jo galat chhupaya gaya uska hissa |
| Chalane wale | Ise chalane mein kya kharcha hota hai, aur woh kitna tez hai? | Kharcha, speed, dheemi poonchh |
| User ka sanket | Kya users ispar bharosa karte hain? | Agents ne kitni baar woh button dabaya jisme likha tha ki guard ne woh chhupa diya jo unhe chahiye tha |

Jo dashboard inhe milata hai woh kisi sawaal ka saaf jawaab nahi de sakta. Ek model apni jaanch par pachaanve score kar sakta hai aur agents phir bhi tool ko ignore kar sakte hain kyunki woh chidhaata hai. Chaaron chahiye, aur sirf pehla bata sakta hai ki koi behtar hua ya nahi. Anaya ne ek cheez aur joda: usne Imran se call ka nahi balki poori safal task ka kharcha model karne ko kaha, un logon ka review samay shaamil karke jo har subah shak wale cases dekhte the. Imaandaar figure zyada tha, aur wahi woh tha jise ek finance director poochhti.

## Prototype mein kya nahi hai

Do logon ke liye achhi tarah pakaya gaya khana restaurant ke menu ka item nahi hota. Vidhi wahi hoti hai, par aapko bharose ki aapoorti, ek aisi keemat jo chale, doosre rasoiye jo use bana sakein, aur us raat ki yojna bhi chahiye jab chaar sau log use order karte hain.

Imran ne Anaya ko review se ek hafta pehle ek list di aur use *production delta* kaha: ek prototype aur ek seva ke beech jo kuch bhi gayab hai. Anaya ko woh vinamra karne wali lagi.

Table: Production delta
| Cheez | Sawaal |
| --- | --- |
| Pehchaan | Kaun bula raha hai, aur kya use ijaazat hai? |
| Persistence | State kahan rehti hai, aur agar machine restart ho toh kya? |
| Retries, queues aur timeouts | Jab kuch dheema ho ya fail ho toh kya hota hai? |
| Monitoring aur alerts | Kise bataya jaata hai, aur kitni jaldi? |
| Secrets | Woh kahan rakhe jaate hain? |
| Backups, permissions, deployment, rollback | Kya seva bahaal aur surakshit tareeke se badli ja sakti hai? |

Imran ne list ko must-have, should-have aur baad mein ke group mein baanta. Pehle group ka test ek sawaal tha: kal live jaane se aapko kya rokega? Woh ek lambi list thi, aur usme se kuch bhi model ke baare mein nahi tha.

## Woh raat jab chaar sau log order dete hain

Tyohaar ka hafta test tha. Farah ke records ne dikhaya ki pichhli Diwali ke hafte mein chatbot ko messages saamaanya se chhe guna the. Log jaldi bill bharte the taaki phans na jaayein, tyohaaron ke upahaar ke liye loan top up karte the, aur bahut saare late fees ke baare mein poochhne ko likhte the. Imran ne kaha ki surakshit rehne ke liye das guna yojna banao.

Das guna volume par sawaal yeh tha ki kaun sa hissa pehle fail hoga, aur jawaab tha saavdhaan judge. Woh sau mein se chhe messages sambhalta tha, aur har ek baaki se zyada samay leta tha. Das guna par uski ek queue hoti, aur ek live chat mein queue ek aisi der hai jise customer mehsoos karta hai. Har kaam ek customer ke send dabane aur reply ke beech ke raaste mein nahi aata, isliye judge ko us raaste se hata diya gaya. Tez hisse live faisle karte the. Shak wale messages pehle ki tarah surakshit rehne ke liye chhupa diye jaate the, aur judge ke liye ek queue mein daal diye jaate the jise woh apni raftaar se sambhalta, aur jab verdict aata toh agent ki screen update ho jaati. Naye policy document ko ingest karne ka dheema kaam bhi isi tarah sambhala gaya: upload, process, index aur sthiti report alag kadam hain jo customer ko rokte nahi.

Un failures ke liye jo aani hi thi, team ne ek table likhi jise Imran ne reliability matrix kaha. Har dependency ke liye usne kaha ki agar woh dheemi, band ya rate-limited ho toh kya hoga.

Table: Reliability matrix ka ek hissa
| Agar yeh fail ho | System yeh karta hai |
| --- | --- |
| Model server par bojh ho | Safe mode, agent ki screen par patti, aur ek alert |
| Order look-up fail ho | Baarah ank wale numbers ko sensitive maano |
| Queue ek ghante se zyada peechhe ho jaye | Imran ko page karo |

::: key Dhire-dhire girna seekho
Ek chhota, surakshit mode aksar ek bade model se zyada keemti hota hai. *Graceful degradation* ka matlab hai jab system ka koi hissa fail ho toh ek chhote aur surakshit tareeke se kaam karte rehna, aur yeh un kai logon ki pravritti ke khilaaf jaata hai jo cheezein banate hain.
:::

## Ek copy par aazmana

List ka aakhri teesra hissa is baare mein tha ki badlaav duniya tak kaise pahunchte hain, aur yahi woh jagah thi jahan Friday raat ke edit ne team ko sabse zyada sikhaya tha. Ek *staging* system hoga, live wale ki ek copy jahan badlaav pehle aazmaya jaata hai, aur ek niyam: jo kuch bhi vyavhaar badal sakta hai, chahe woh prompt ho, model ka naam, index ya configuration, staging par jaata hai, gate paas karta hai aur tabhi production tak pahunchta hai. Imran ne ise ek khel se saabit kiya. Usne jaanboojh kar ek kharab instruction staging par bheja aur jaancha ki production nahi hila. Phir usne ek model ka naam badla aur gate ko use rokte dekha.

Response time ka budget ek sheet par gaya. *Latency budget* us samay ko baantta hai jo ek request ko un stages ke beech lena chahiye jinse woh guzarti hai, aur yahan jod ko ek second ke teesre hisse tak aana tha. Jab Anaya ne numbers bhare toh usne paaya ki jis stage ke baare mein use chinta thi, model, usne ummeed se kam liya, aur ek stage jiska kisi ne zikr nahi kiya tha, company ke apne do servers ke beech ka network, usne zyada liya. Imran ne kaha ki deri ka sabse bada hissa aksar us stage mein nahi hota jise log pehle sudharte hain.

## Wajahein likhna

Hafte ke ant tak architecture faislon ka ek set tha. Anaya ne, jisne March se rakhe log se seekha tha, har ek ko us roop mein likha jise Imran saal bhar se sujhata aa raha tha. *Architecture decision record* ek chhota note hai jisme jo vikalp dekhe gaye, chunaav, saboot, nateeje, aur woh jo team ko dobara dekhne par majboor karega. Usne chaar likhe: models, documents kaise dhoondhe jaate hain, workflow banaam agent, aur cheezein kahan store hoti hain, aur har ek mein usne woh vikalp shaamil kiya jo chhoda gaya aur kyun. Phir usne kuch kiya jiski Imran ko ummeed nahi thi: usne ek naya requirement gadha jo faislon mein se ek ko palat deta, yeh dekhne ke liye ki note batata hai ki woh kya karegi. Note ne bataya.

Hosting khareedna aakhri faisla tha, aur woh ek vendor faisla tha. Anaya ne teen vaastavik vikalp aur ek parikalpna, ise khud chalana, ek sheet par score kiye.

Table: Vendors kaise score hue
| Mapdand |
| --- |
| Quality |
| Data controls aur region |
| Speed |
| Kharcha |
| Tooling |
| Support |
| Exit cost: ise chhodne mein paise, samay aur risk mein kya lagega |

Aakhri row woh hai jo zyadatar sheets chhod deti hain. Jo provider quality aur data controls par jeetta hai par jise chhodne mein ek saal lagta hai woh company ko company ke business plan se zyada lambe samay tak bandh sakta hai. Sheet ke paas Anaya ne woh aadat likhi jo baaki sab se zyada tikegi: ek faisla ek keemat wali parikalpna hai, aur kehna chahiye ki aap use kab dobara dekhenge.

## Saaraansh

Jo software text padhta aur likhta hai uske liye "done" ka matlab naam diye gaye cases par naapi gayi, ek tolerance ke andar ek safalta dar hai, baaki samay ke liye ek yojna ke saath.

- Naap chaar kism ke hain: business ka nateeja, system ki quality, chalane ke figure aur user ke sanket. Jo dashboard unhe milata hai woh kuch nahi batata.
- Prototype mein ek lambi list ki cheezein nahi hoti, production delta, jinme se koi model nahi hai.
- Har kaam ek customer aur reply ke beech ke raaste mein nahi hota. Dheema kaam ek queue par rukh sakta hai, aur jab koi hissa fail ho toh system ko ek kam, surakshit mode mein sahajta se utarna chahiye.
- Badlaav pehle live system ki copy par aazmaye jaate hain, aur response time stages mein baanta gaya budget hai.
- Mahatvapurna faisle vikalpon aur ek dobara dekhne ke trigger ke saath likhe jaate hain. Vendor ko quality aur keemat se zyada par score kiya jaata hai, jisme use chhodne ki keemat bhi hai.

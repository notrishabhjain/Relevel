---
title: Product, Demo Nahi
summary: Ek dish jo aap do logon ke liye achhe se banate hain, restaurant ke menu ka item nahi hoti. Tyohar ke season se pehle, team har woh cheez likhti hai jo ek kaam karte prototype aur ek service ke beech khadi hai, aur har bade faisle ke liye likhti hai ki use palatne ke liye kya chahiye.
course: ch19pm ch20d
terms:
  - production delta | ek kaam karte prototype aur ek chalti service ke beech jo kuch gayab hai uski list, jaise pehchaan, retries, queues, monitoring, secrets, backups aur rollback | 
  - graceful degradation | jab system ka koi hissa fail ho toh ek kam, par surakshit tareeke se kaam karte rehna, poori tarah fail hone ki jagah | degraded mode
  - staging | live system ki ek copy jahan badlaav pehle aazmaye jaate hain, taaki ek kharab badlaav asli users tak kabhi na pahunche | 
  - latency budget | woh kul samay jo ek request le sakti hai, un charno ke beech baanta hua jinse woh guzarti hai, taaki sabse dheema charan dhoondha jaye aur uska ek malik ho | 
  - architecture decision record | ek bade technical faisle ka chhota note: vikalp, chunav, saboot, nateeje, aur kya hone par aap use dobara dekhenge | ADR, ADRs
  - exit cost | ek provider ko chhodne aur doosre par jaane mein paise, samay aur jokhim mein kitna kharcha aayega; ek vendor quality mein jeet sakta hai aur phir bhi aapko saalon ke liye bandh sakta hai | 
---

"Rail ek train ke liye theek nau baj kar chaar minute ka waada nahi kar sakti," Anaya ne kaha, "isliye woh aapko batati hai ki kitni train kuch minute ke andar schedule par aati hain, mahine-dar-mahine. Aap us number ke aas-paas plan bana sakte hain."

Woh Mr. Bhatia ko apni specification samjha rahi thi, jisne November ke pehle hafte mein poochha tha ki kya guard *poora ho gaya*, aur jawaab sunkar thoda dhokha khaya hua dikha tha. "Yeh poora hai is arth mein ki yeh numbers ko poora karta hai," usne kaha. "Yeh us arth mein kabhi poora nahi ho sakta ki yeh ek cheez hamesha ek jaisi karta hai."

Jo kuch bhi text padhta aur likhta hai, uske liye "poora" ka matlab hai ek seema ke andar naapi hui safalta ki dar, ek tay output nahi. Yeh woh idea tha jiske aas-paas woh vasant se ghoom rahi thi, aur dheere-dheere yeh woh tareeka ban gaya tha jisme woh sab kuch likhti thi. Ab ise aazmane ki jagah thi. Tyohar ka season teen hafte door tha.

## Sirf ek niyam kyun nahi?

Yeh shuru hua, jaise har samajhdaar behes hoti hai, ek sawaal se jo use shuru mein poochhne ko kaha gaya tha. *Yeh aam software kyun nahi hai?*

Safe mode ne iska jawaab diya. Sirf-niyam wala version, jo aapatkaal ke liye bana tha, fixed-shape numbers mein se sau mein lagbhag chhiyaanve dhoondhta tha, kisi model ke bina. Anaya ne woh number saal bhar apne saamne ek baseline ke roop mein rakha tha. Yeh woh cheez thi jise baaki har hisse ko harana tha, aur unhone haraya, lekin use khushi thi ki woh bata sakti thi ki kitna. Machine ne unhe naam, pate, Hinglish aur woh vaakya diye jo bina batae ki kaun, kisi ki taraf ishaara karte hain. Unke bina woh ek niyam thi. Usne farak ko, figures ke saath, product requirements ke pehle page par likha: machine ne kya kharida, aur uski keemat kya thi.

Usne acceptance criteria bhi ek aakhri baar likhe, product aur engineering ke beech ek anubandh ke roop mein. Retrieval, suraksha, generation, raftaar aur kharcha, har ek ek number ke saath, har ek golden dataset aur naapne ke tareeke se juda. Anubandh ki jaanch yeh thi ki Imran use bina ek baar poochhe chala sake ki "achha" ka matlab kya hai.

## Chaar kism ke number

Dashboard mein ek pravritti thi jo woh ab har jagah dekhne lagi thi. Jab teams ko kai number dikhaye jaate hain, toh woh yeh batana band kar deti hain ki har ek kis sawaal ka jawaab deta hai.

Imran ne, jo saaf suthri list pasand karta tha, chaar column banaye. *Business ka nateeja*: Lakshmi ke saptahik sweep ki ginti. *System ki quality*: mile hue ka hissa, galti se chhupe hue ka hissa. *Operating* numbers: kharcha, raftaar, dheeli poonchh. Aur ek *user signal*: agents ne kitni baar woh button dabaya jisne kaha ki guard ne kuch chhupaya jo unhe chahiye tha.

"Jo dashboard in sabko milata hai woh kisi bhi sawaal ka saaf jawaab nahi de sakta," usne kaha. "Ek model apne test par paanch-nabbe score kar sakta hai, aur agents phir bhi tool ko andekha kar sakte hain kyunki woh unhe chidhata hai. Tumhein sab chahiye. Sirf pehla batata hai ki kya koi behtar hai."

Anaya ne ek aur cheez joda. Usne Imran se kaha ki woh call ka nahi, poori *safal* task ka kharcha model kare, jisme un logon ka review samay shaamil ho jo subah anishchit cases dekhte the. Imaandaar figure zyada tha. Woh wahi tha jo ek finance director poochhti.

## Prototype mein kya nahi hai

Ek dish jo aap do logon ke liye achhe se banate hain, restaurant ke menu ka item nahi hoti. Recipe wahi hoti hai. Lekin aapko bharose ki aapoorti, ek aisi keemat jo kaam kare, doosre rasoiye jo use bana sakein, aur us raat ke liye ek plan bhi chahiye jab chaar sau log use order karein.

Imran ne use review se ek hafte pehle list di, aur usne ise *production delta* kaha: ek prototype aur ek service ke beech jo kuch gayab hai woh sab. Use ise namr karne wala laga. Pehchaan: kaun bula raha hai, aur kya use ijaazat hai? Sthirata: state kahan rehti hai, aur agar machine restart ho toh? Retries, queues aur timeouts. Monitoring aur alerts. Secrets aur woh kahan rakhe jaate hain. Backups. Permissions. Deployment. Rollback. Usne unhe must-have, should-have aur baad ke liye mein baanta. Pehle group ka test ek sawaal tha. *Kal live jaane se tumhein kya rokega?*

Yeh ek lambi list thi, aur usne dekha ki usme se kuch bhi model ke baare mein nahi tha.

## Woh raat jab chaar sau log order karte hain

Tyohar ka hafta test tha. Farah ke records ne dikhaya ki pichhli Diwali ke hafte mein, chatbot ko messages aam se chhe guna the. Log jaldi bill bharte the taaki phans na jaayein. Woh tohfon ke liye loan top up karte the. Aur woh, bahut badi sankhya mein, late fees ke baare mein likhte the.

"Das guna, surakshit rehne ke liye," Imran ne kaha. "Das maan lo."

Das guna volume par sawaal tha ki kaun sa hissa pehle fail hoga, aur jawaab saavdhaan judge tha. Woh sau mein chhe messages sambhalta tha aur har ek baaki se zyada samay leta tha. Das guna par uski ek queue hoti, aur ek live chat mein ek queue ek aisi der hai jo customer mehsoos karta hai.

Har kaam customer ke send dabane aur jawaab ke beech ke raaste ka hissa nahi hota. Isliye judge ko usse hataya gaya. Tez dibbe live tay karte the. Anishchit messages, pehle ki tarah, surakshit rehne ke liye chhupaye gaye, aur judge ke liye apni raftaar se kaam karne ke liye ek queue mein rakhe gaye, jab faisla aata toh agent ki screen update hoti. Wahi pattern ek naye policy document ko ingest karne ke dheeme kaam par laagu hua: upload, process, index aur status report alag charan hain jo customer ko rokte nahi.

Un failures ke liye jo aani hi thin, unhone ek table likhi, jise Imran ne reliability matrix kaha. Har dependency ke liye, kya hota hai jab woh dheeli, band, ya rate-limited ho. Agar model server par bojh hua: safe mode, agent ki screen par patti, aur ek alert. Agar order lookup fail hua: barah ank ke numbers ko sensitive maano. Agar queue ek ghante se zyada peeche gayi: Imran ko page karo. Siddhant woh tha jo woh dohrata raha, kyunki woh un bahut se logon ki sahaj pravritti ke khilaaf tha jo cheezein banate hain. Ek gaurav-poorn kam mode aksar ek bade model se zyada keemti hota hai. *Graceful degradation* ka matlab hai jab system ka koi hissa fail ho toh ek chhote aur surakshit roop mein kaam karte rehna.

## Ek copy par aazmana

List ka aakhri teesra hissa is baare mein tha ki badlaav duniya tak kaise pahunchte the, aur yahin Friday raat ke edit ne team ko sabse zyada sikhaya tha.

Ek *staging* system hoga, live wale ki ek copy jahan ek badlaav pehle aazmaya jaata hai, aur ek niyam: kuch bhi jo vyavahaar badal sakta hai, ek prompt, ek model ka naam, ek index, ek configuration, staging mein jaata hai, gate paas karta hai, aur tabhi production tak pahunchta hai. Imran ne use ek khel se saabit kiya. Usne jaan-boojh kar ek kharab nirdesh staging mein bheja aur dekha ki production hila nahi. Phir usne ek model ka naam badla aur gate ko use rokte dekha.

Response samay ka budget ek sheet par gaya. Ek *latency budget* ek request jo samay le sakti hai usse un charno ke beech baant deta hai jinse woh guzarti hai. Jod ko ek second ka ek tihaayi aana tha, aur jab Anaya ne numbers bhare toh usne paya ki jis charan ki use fikr thi, model, woh ummeed se kam istemaal karta tha, aur jis charan ka kisi ne zikr nahi kiya tha, unke apne do servers ke beech ka network, zyada. Der ka sabse bada hissa, jaise Imran ne kaha, shaayad hi us charan mein hota hai jise log pehle optimise karte hain.

## Wajahein likh kar rakhna

Hafte ke ant tak architecture faislon ka ek set tha, aur Anaya ne, us log se seekhkar jo woh March se rakh rahi thi, har ek ko us roop mein likha jise Imran ek saal se prastavit kar raha tha. Ek *architecture decision record* ek chhota note hai: vichaar kiye gaye vikalp, chunav, saboot, nateeje, aur kya hone par aap use dobara dekhenge. Usne chaar likhe: models, documents ko dhoondhne ka tareeka, workflow ya agent, aur cheezein kahan store hoti hain. Har ek ke liye usne thukraya hua vikalp aur kyun shaamil kiya. Phir usne kuch kiya jiski Imran ko ummeed nahi thi. Usne ek naya requirement gadha jo unme se ek ko ulat deta, yeh dekhne ke liye ki kya note kehta hai ki woh kya karegi. Note ne bataya ki woh karegi.

Hosting kharidna aakhri faisla tha, aur woh ek vendor faisla tha. Anaya ne teen yatharth vikalpon aur ek parikalpana, ise khud chalana, ko ek sheet par score kiya. Quality. Data controls aur kshetra. Raftaar. Kharcha. Tooling. Support. Aur aakhri row, jo zyadatar sheets chhod deti hain: *exit cost*, ise chhodne mein paise, samay aur jokhim mein kya lagega. Ek provider jo quality aur data controls mein jeeta, par jise chhodne mein ek saal lage, ek company ko apni business plan se zyada der tak bandh sakta hai.

Sheet ke bagal mein usne woh aadat likhi jo in sab se aage jaane wali thi. Ek faisla ek parikalpana hai jiski ek keemat hai. Batao tum use kab dobara dekhogi.

## Saath le jaane layak baatein

Jo kuch text padhta aur likhta hai uske liye, "poora" ka matlab hai ek seema ke andar naapi hui safalta ki dar, naam wale cases par naapi hui, baaki samay ke liye ek plan ke saath. Numbers chaar kismon mein baante hain, business ka nateeja, system ki quality, operating figures aur user signals, aur jo dashboard unhe milata hai woh kuch nahi batata. Prototype mein bahut kuch nahi hota, production delta, jisme se kuch bhi model nahi hai. Har kaam ek customer aur jawaab ke beech ke raaste mein nahi hota; dheema kaam ek queue par intezaar kar sakta hai, aur jab koi hissa fail ho toh system ko gaurav ke saath ek kam, surakshit mode mein utarna chahiye. Badlaav pehle live system ki ek copy par aazmaye jaate hain, aur response samay ek budget hai jo charno ke beech baanta jaata hai. Mahatvapurn faisle vikalpon aur ek palatne ke trigger ke saath likhe jaate hain, aur ek vendor ko quality aur daam se zyada par score kiya jaata hai, jisme use chhodne ka kharcha bhi shaamil hai.

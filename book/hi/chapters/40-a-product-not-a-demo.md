---
title: Ek Product, Demo Nahi
summary: Do logon ke liye achha bana khana abhi restaurant ke menu mein nahi hota. Festival season se pehle team woh sab likhti hai jo ek chalte prototype aur asli service ke beech khada hai. Har bade decision ke liye woh yeh bhi likhti hai ki kya hone par woh use palat denge. Aap milte hain production delta, graceful degradation, staging, latency budget, architecture decision record aur exit cost se.
course: ch19pm ch20d
goals:
  - batana ki text padhne-likhne wale software ke liye "done" ka matlab kya hai, aur measures ko chaar kisam mein baantna
  - production delta ki list banana, aur must-have group ke liye test lagana
  - dheema kaam live raaste se hatana, aur har dependency ke liye graceful degradation ka plan banana
  - staging aur latency budget istemaal karna, decisions ko dobara dekhne ke trigger ke saath likhna, aur vendors ko exit cost ke saath score karna
terms:
  - production delta | prototype aur asli service ke beech ki kharidari ki list: identity, retries, queues, monitoring, secrets, backups aur rollback | 
  - graceful degradation | jab ek hissa tootta hai, system chhote lekin safe tareeke se chalta rehta hai, jaise card machine kharab ho toh dukaan sirf cash leti hai | degraded mode
  - staging | live system ki practice copy, jahan har badlaav pehle try hota hai, taaki kharab badlaav asli users tak na pahunche | 
  - latency budget | ek request ke liye kul intezaar ka time, jo uske stages mein baanta hota hai, jaise safar train, bus aur paidal mein baanta jaata hai, taaki sabse dheema stage mile aur uska koi owner ho | 
  - architecture decision record | ek bade technical choice par chhota note: baaki options, chuna hua option, saboot, nateeje, aur kya hone par aap use dobara dekhenge | ADR, ADRs
  - exit cost | ek provider ko chhodkar doosre par jaane ki keemat, paise, time aur risk mein, jaise bank badalne ki mehnat; ek vendor quality mein jeet kar bhi aapko saalon tak baandh sakta hai | 
---

November ke pehle hafte Mr. Bhatia ne poocha ki guard khatam hua ya nahi. Jawaab sunkar woh thode nirash dikhe. Anaya apni specification (product ka recipe card) ek tulna se samjha rahi thi.

Railway yeh waada nahi kar sakti ki train theek 9:04 par aayegi, usne kaha. Isliye woh mahine-dar-mahine batati hai ki kitni trains schedule ke kuch minute ke andar pahunchti hain. Passengers usi number ke hisaab se plan karte hain.

Guard bhi isi tarah done tha. Woh apne numbers poore karta tha. Lekin "done" ka woh matlab, ki ek kaam hamesha ek hi tareeke se ho, guard ke liye kabhi nahi ho sakta tha.

Jo cheez text padhti aur likhti hai, uske liye "done" ka matlab hai ek measured success rate, ek tolerance (chhoti si ijaazat wali kami) ke andar. Koi ek fixed output nahi. Anaya spring se is idea ke aas-paas ghoom rahi thi. Dheere-dheere yehi uska sab kuch likhne ka tareeka ban gaya tha. Ab ise parakhne ke liye kuch tha. Festival season teen hafte door tha.

## Case: teen hafte mein guard

Is chapter mein teen cheezein hain. Pehli, woh list ki guard mein ek service ke roop mein abhi kya kami thi. Doosri, yeh sawaal ki woh apne normal load ka das guna kaise sambhalega. Teesri, yeh ki uske peeche ke decisions kaise likhe gaye.

Ek chhote tiffin kitchen ko sochiye jise shaadi ka bada order milne wala hai. Khana achha hai. Sawaal yeh hai ki kya kitchen use roz-roz parosh sakta hai.

## Sirf ek rule kyun nahi?

Baat ek sawaal se shuru hui jo Anaya ko bilkul shuru mein poochhne ko kaha gaya tha. Yeh ordinary software kyun nahi hai? Jawaab safe mode ne diya. Sirf rules wala yeh version, jo emergency ke liye bana tha, fixed-shape numbers mein se 100 mein lagbhag 96 dhoondh leta tha. Usmein koi model tha hi nahi.

Anaya ne yeh figure saal bhar apne saamne baseline ki tarah rakha tha. Baseline woh nishaan hai jise har doosre hisse ko paar karna hai. Ab woh bata sakti thi ki kitne se.

Model ne naam, addresses aur Hinglish jodi. Usne woh sentences bhi jodi jo kisi ki taraf ishara karte hain bina bataye ki kaun. Inke bina guard sirf ek rule tha. Anaya ne yeh farq, figures ke saath, product requirements ke pehle page par likha. Usne likha ki model ne kya kharida, aur uski keemat kya thi.

Usne acceptance criteria (woh tests jo kaam ko paas karne hain) bhi ek aakhri baar likhe. Unhe product aur engineering ke beech ka contract sochiye. Retrieval, generation, safety, speed aur cost, har ek ka ek number tha. Har number golden dataset se juda tha, aur use naapne ka ek tareeka tha. Contract ki parakh seedhi thi. Imran ise bina ek baar bhi poochhe chala sake ki "good" ka matlab kya hai.

## Chaar kisam ke numbers

Dashboards (numbers ki screens) ke baare mein Anaya ne ek cheez dekhi thi. Team ko ek saath bahut saare numbers dikhao, toh use yeh pata hi nahi chalta ki har number kis sawaal ka jawaab hai. Isliye Imran ne chaar columns banaye. Har kisam ka number ek alag sawaal ka jawaab deta hai. Table mein har ek ke liye guard ka apna example hai.

Table: Chaar kisam ke numbers
| Kisam | Kaunsa sawaal | Guard ka example |
| --- | --- | --- |
| Business outcome | Kya kisi ka fayda hua? | Lakshmi ke weekly sweep ka count |
| System quality | Kya system sahi hai? | Kitna share mila; kitna share galti se hide hua |
| Operating | Chalane mein kitna cost aata hai, aur kitni tez hai? | Cost, speed, dheemi poonchh |
| User signal | Kya users us par bharosa karte hain? | Agents ne kitni baar woh button dabaya jo kehta tha ki guard ne kuch aisa hide kar diya jo unhe chahiye tha |

Cricket ka scoreboard sochiye. Runs, overs, wickets aur darshakon ka mood chaar alag cheezein hain. Inhe ek number mein mila do, toh koi khel nahi padh sakta. Jo dashboard in chaaron kisam ko mila deta hai, woh kisi sawaal ka saaf jawaab nahi de paata.

Ek model apne test mein 95 score kar sakta hai. Phir bhi agents us tool ko ignore kar sakte hain kyunki woh unhe chidhata hai. Chaaron kisam chahiye. Sirf pehli batati hai ki kisi ka fayda hua ya nahi.

Anaya ne ek aur request jodi. Usne Imran se kaha ki cost ek call ka nahi, poore successful task ka nikaale. Usmein un logon ka time bhi tha jo roz subah unsure cases dekhte the. Imaandaar figure zyada tha. Finance director yehi figure poochhta.

## Prototype mein kya nahi hota

Do logon ke liye achha bana khana abhi restaurant ke menu ka item nahi hai. Recipe wahi hai. Lekin restaurant ko pakki supplies chahiye, ek aisi keemat jo chale, aur doosre cooks jo yeh dish bana sakein. Use us raat ka plan bhi chahiye jab 400 log yahi order karein.

Review se ek hafte pehle Imran ne Anaya ko ek list di. Usne use *production delta* kaha. Ek prototype aur ek service ke beech jo kuch missing hai, woh sab. Anaya ko yeh sunkar thodi sharm aayi. Neeche table mein har item hai, aur woh sawaal jo woh uthata hai.

Table: Production delta
| Item | Sawaal |
| --- | --- |
| Identity | Call kaun kar raha hai, aur kya use ijaazat hai? |
| Persistence | State kahan rehti hai, aur machine restart ho gayi toh kya hoga? |
| Retries, queues aur timeouts | Jab kuch dheema ho ya fail ho, tab kya hota hai? |
| Monitoring aur alerts | Kise bataya jaata hai, aur kitni jaldi? |
| Secrets | Woh kahan rakhe jaate hain? |
| Backups, permissions, deployment, rollback | Kya service ko safely restore aur change kiya ja sakta hai? |

Backups aapke data ki spare copies hain. Rollback ka matlab hai aakhri achhe version par wapas jaana. Imran ne list ko must-have, should-have aur later mein baanta. Pehle group ke liye test ek hi sawaal tha: aapko kal live jaane se kya rokega? List lambi thi. Usmein se kuch bhi model ke baare mein nahi tha.

## Woh raat jab 400 log order karte hain

Festival week asli test hota. Farah ke records dikhate the ki pichhli Diwali ke hafte mein kya hua. Chatbot ko messages normal se 6 guna aaye the. Log bills jaldi bharte hain taaki aakhri waqt par na fansein. Woh gifts ke liye loans top up karte hain. Bahut se log late fees poochhne ke liye likhte hain. Imran ne kaha ki safe rehne ke liye 10 guna maan kar chaliye.

10 guna volume par kaun sa hissa pehle fail hoga? Jawaab tha careful judge. Woh 100 mein se 6 messages sambhalta tha, aur har ek mein baaki se zyada time lagta tha. 10 guna load par uske saamne queue lag jaati. Live chat mein queue ka matlab hai ek delay jo customer mehsoos karta hai. Station ki ticket khidki par lambi line jaisa.

Har kaam us raaste mein nahi hona chahiye jo customer ke send dabane se reply milne tak jaata hai. Isliye judge ko us raaste se bahar nikal diya gaya. Tez hisse live decide karte the. Unsure messages pehle ki tarah safe side par hide kar diye jaate the, aur queue (intezaar ki line) mein daal diye jaate the.

Judge apni raftaar se queue nipatata tha. Verdict aate hi agent ki screen update ho jaati thi. Naya policy document lene wale dheemi kaam ke saath bhi yehi kiya gaya. Upload, processing, indexing aur status report karna alag steps hain. Inmein se koi bhi customer ko rokna nahi chahiye.

Kuch failures pakke aane the. Unke liye team ne ek table likhi jise Imran reliability matrix kehta tha. Har dependency (woh hissa jis par system tikta hai) ke liye usmein likha tha ki woh dheemi ho, band ho, ya rate-limited ho toh kya hoga. Rate-limited ka matlab hai dheema hone ko kaha gaya. Neeche uska ek hissa hai.

Table: Reliability matrix ka ek hissa
| Agar yeh fail ho | System yeh karta hai |
| --- | --- |
| Model server overloaded ho | Safe mode, agent ki screen par ek patti, aur ek alert |
| Order lookup fail ho | 12-digit numbers ko sensitive maano |
| Queue ek ghante se zyada peeche ho jaye | Imran ko page karo |

::: key Aaram se chhote hoiye
Ek dukaan sochiye jiski card machine kharab hai. Woh band nahi hoti. Woh sirf cash leti hai. Aksar ek bade model se zyada kaam ka hota hai ek achha reduced mode. *Graceful degradation* ka matlab hai ki jab system ka koi hissa fail ho, toh chhote lekin safe tareeke se chalte rehna. Bahut se banane walon ko yeh apni aadat ke khilaaf lagta hai.
:::

## Pehle ek copy par try karna

List ka aakhri ek-tihaai is par tha ki badlaav duniya tak kaise pahunchte hain. Yahan Friday raat wale edit ne team ko sabse zyada sikhaya tha. Unhone ek *staging* system banaya. Yeh live system ki practice copy hai, jahan har badlaav pehle try hota hai. Asli show se pehle dress rehearsal sochiye.

Aur unhone ek rule tay kiya. Jo bhi cheez behaviour badal sakti hai, woh pehle staging mein jaati hai. Matlab prompt, model ka naam, index ya configuration. Woh gate paas karti hai. Tabhi woh production (asli live system) tak pahunchti hai.

Imran ne rule ko ek chhote game se saabit kiya. Usne jaan-boojhkar ek kharab instruction staging mein bheji, aur check kiya ki production nahi hili. Phir usne ek model ka naam badla aur dekha ki gate ne use rok diya.

Response time ka budget ek sheet par gaya. *Latency budget* us time ko baant deta hai jo ek request le sakti hai, un stages mein jinse woh guzarti hai. Safar ko train, bus aur paidal mein baantne jaisa. Yahan total ek second ka teesra hissa hona tha.

Anaya ne numbers bhare. Jis stage ki use fikr thi, yaani model, woh umeed se kam time le raha tha. Jis stage ka kisi ne zikr hi nahi kiya tha, woh zyada le raha tha. Woh company ke apne do servers ke beech ka network tha. Imran ne kaha ki delay ka sabse bada hissa aksar us stage mein nahi hota jise log pehle tune karte hain.

## Wajah likh kar rakhna

Hafte ke ant tak architecture decisions ka ek set ban chuka tha. Anaya ne woh log istemaal kiya jo woh March se rakh rahi thi. Usne har decision ko us form mein likha jo Imran ek saal se recommend kar raha tha. Yeh *architecture decision record* hai. Yeh ek chhota note hai. Usmein baaki options hain, chuna hua option aur saboot. Usmein nateeje hain, aur woh baat ki kya hone par team use dobara dekhegi.

Usne chaar likhe: models par, documents dhoondhne ke tareeke par, workflow versus agent par, aur cheezein kahan store hoti hain us par. Har ek mein usne woh option bhi daala jo reject hua, aur kyun. Phir usne woh kiya jiski Imran ko umeed nahi thi. Usne ek nayi requirement banayi jo ek decision ko palat deti. Woh dekhna chahti thi ki note mein likha hai ki woh kya karegi. Likha tha.

Hosting kharidna aakhri decision tha. Woh ek vendor decision tha. Vendor woh company hai jisse aap koi service kharidte hain. Anaya ne teen realistic options, aur ek aur, yaani khud chalana, ek hi sheet par score kiye. Table mein woh criteria hain jin par usne score diya.

Table: Vendors ko kaise score kiya gaya
| Criterion |
| --- |
| Quality |
| Data controls aur region |
| Speed |
| Cost |
| Tooling |
| Support |
| Exit cost: chhodne mein paise, time aur risk mein kya lagega |

Aakhri row woh hai jo zyadatar sheets chhod deti hain. Ek provider quality mein aur data controls mein jeet sakta hai, aur phir bhi use chhodne mein ek saal lag sakta hai. Aisa company ko us se zyada lambe waqt ke liye phansa sakta hai jitna uska business plan chalta hai.

Yehi *exit cost* hai. Bank badalna kitna mushkil hota hai, yeh sochiye. Sheet ke bagal mein Anaya ne woh aadat likhi jo baaki sab se zyada tikne wali thi. Ek decision ek hypothesis hai jiski ek keemat hai, isliye pehle se likh dijiye ki aap use kab dobara dekhenge.

## Ek Won't, palta hua

Log ki ek entry ulti disha mein gayi. November ke beech mein lending partner ke technical lead ne ek sawaal poochha. Kya unki team guard ko apne chat system par try kar sakti hai? Isse March ki Won't list ke do items chhue gaye. Ek browser version tha. Doosra Sahaj ke bahar kisi ko bhi bechna tha.

Anaya ne unhe chupchaap nahi chhoda. Usne palatna pehli entry ke format mein likha.

::: example Decision log, 20 November
```
20 November
Decision:  Reverse two Won'ts from March. Offer the guard to other
           companies as a small library, with a demonstration page
           where a developer pastes a message and sees it cleaned.
Evidence:  The lending partner asked for it. Pune's sweep fell from
           46 in 500 to 9. Farah's team still paste Hinglish into a
           translation site, so people want a safe paste box.
I would change my mind if:  fewer than half of the developers who
           try it get it working in an hour, or Lakshmi finds that
           the page keeps what people paste.
```
:::

Won't ek waada hai ki dayra chhota rahega. Ek dukaan sochiye jo kehti hai "hum sirf chai bechte hain". Us waade ko todne ke liye wahi chahiye jo use banane ke liye chahiye tha: saboot, aur wapas jaane ka likha hua raasta.

## Saar

Jo cheez text padhti aur likhti hai, uske liye "done" ka matlab hai ek measured success rate, ek tolerance ke andar. Woh named cases par naapa jaata hai, aur baaki waqt ke liye ek plan hota hai.

- Measures chaar kisam ke hote hain: business outcome, system quality, operating figures aur user signals. Jo dashboard inhe mila deta hai, woh kuch nahi batata.
- Ek prototype mein bahut kuch nahi hota. Yehi production delta hai. Usmein se kuch bhi model nahi hai.
- Har task customer aur reply ke beech ke raaste mein nahi hona chahiye. Dheema kaam queue mein ruk sakta hai. Jab koi hissa fail ho, toh system ko graceful degradation ke saath chhote, safe mode mein aa jaana chahiye.
- Badlaav pehle live system ki practice copy par try hote hain. Response time ek budget hai jo stages mein baanta jaata hai.
- Bade decisions baaki options aur dobara dekhne ke ek trigger ke saath likhe jaate hain. Vendor ko sirf quality aur price par nahi, chhodne ke cost par bhi score kijiye.
- Ek Won't ko saboot par palta ja sakta hai, agar entry mein likha ho ki kya use wapas palat dega.

Ab team yeh sab lekar poori cheez ship karti hai.

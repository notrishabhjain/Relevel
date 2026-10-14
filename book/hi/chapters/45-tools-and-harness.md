---
title: Tools Aur Harness
summary: Ek naya engineer poochta hai ki kaun sa tool kis kaam ka hai, aur ek anubhavi engineer brands ki list nahi, slots ki ek drawing se jawaab deta hai. Wahi engineer phir ek weekly report do baar banata hai, ek baar fixed steps se aur ek baar agent se, aur dono ko wahi bees hafte par naapa jaata hai. Chapter mein toolchain, claim audit, harness, project memory, allowlist, verifier, sub-agent, state machine, feature flag, rollback trigger aur incident review aate hain.
course: b4 b5
goals:
  - tools ko slots ki tarah sochna jinhe kaam ke hisaab se bhara jaata hai, aur ek claim audit aur ek secrets-and-data audit chalana
  - harness ke saat hisson ke naam bata paana, aur quality problem ko sahi hisse mein dhoondhna
  - bata paana ki coding assistants kaise bante hain, aur scope aur approvals ke saath ek allowlist lagana
  - ek state machine aur ek bounded agent ko wahi cases par compare karna, aur badlaav ko gate, flag aur rollback trigger ke peeche release karna
terms:
  - toolchain | tools ka woh set jo ek team product banane aur chalane ke liye use karti hai, jise slots ki tarah dekha jaata hai, har slot ke paas ek kaam | tool chain
  - claim audit | AI ke likhe summary se das claims uthana aur har ek ko uske source se check karna, har ek ko supported, partly supported ya unsupported mark karte hue | 
  - harness | model ke aas-paas ki woh sab cheezein jo use product banati hain: woh code jo uska context banata hai, uske tools chalata hai, state rakhta hai, rules lagata hai, quality check karta hai aur record karta hai ki kya hua | harnesses
  - project memory | code ke saath rakhi ek saadhi file, jisme project ke rules aur aadatein hoti hain, aur jo coding assistant ke har run ke shuru mein load hoti hai | 
  - allowlist | un cheezon ki list jo system ko karne ki ijaazat hai, aur jo list mein nahi hai woh mana hai | allowlists
  - verifier | ek check, jaise ek test, jo agent ko batata hai ki uska apna badlaav kaam kiya ya nahi, bina is ke ki koi insaan har line padhe | verifiers
  - sub-agent | ek bade kaam ka ek hissa diya gaya helper, jo apne alag context mein kaam karta hai taaki main context chhota rahe | sub-agents
  - state machine | ek workflow jisme aapka code har step aur ek step se doosre step tak har allowed move tay karta hai | state machines
  - feature flag | chalte hue system mein ek switch jo ek badlaav ko kuch users ke liye on aur baaki ke liye off karta hai, bina nayi release ke | feature flags
  - rollback trigger | ek naapne layak condition, pehle se likhi hui, jo kisi ko release undo karne par bound karti hai | rollback triggers
  - incident review | kuch galat hone ke baad likha gaya ek chhota writeup ki kya hua, kyun hua, aur kaun sa check use pakad leta | post-incident review
---

Tanvi Kulkarni March mein ek Monday ko Imran Qureshi ki team mein shaamil hui. Wednesday tak uske paas ek sawaal tha jo poochhne mein use sharm aa rahi thi. Whiteboard ke paas, kisi ke kabool karne wali awaaz mein, usne kaha ki team channel mein lagbhag 17 tools hain, aur sab unka zikr aise karte hain jaise use pehle se pata ho. Use kaun se seekhne hain?

Imran ne pen ka cap lagaya aur use neeche rakh diya. Anaya ne pehli baar use kisi sawaal se khush dekha. "Koi nahi," usne kaha. "Abhi nahi. Slots seekho."

Yeh chapter Tanvi ke pehle mahine ke saath chalta hai. Shuruaat tools ke baare mein sochne ke ek tareeke se hoti hai, aur ant ek weekly report par hota hai jo customers ko gayi. Dono ke beech yeh samjhaya gaya hai ki model ke aas-paas ka woh structure kya hai jo use product banata hai.

## Case: channel mein satrah tools

Tanvi ko jin naamon ki fikr thi, woh ek saal ke andar badal jaayenge. Jo nahi badlega, woh un kaamon ka set hai jinke liye woh naam rakhe gaye hain. Isliye Imran ka jawaab tha ki pehle kaam sikhaye jaayein.

## Slots, brands nahi

Imran ne boxes ka ek column banaya. Har box mein usne kisi product ka naam nahi, ek verb phrase likha. Tanvi ne unhe notebook mein utaara aur dekha ki jin naamon ki use chinta thi, unmein se zyadatar gayab ho gaye the. Ek AI product ke liye, Imran ne kaha, pehle idea se aakhri shikayat tak lagbhag 11 cheezein karni padti hain.

Table: Gyarah kaam, aur har ek ko kya karna hai
| Kaam | Use kya karna hai |
| --- | --- |
| Reason aur draft | Aap jo text dein uspar kaam karna |
| Sources se jawaab dena | Sirf aapke upload kiye sources se jawaab dena, aise citations ke saath jo aap check kar sakein |
| Screen banana | Ek description ko ek chalti hui screen mein badalna, itni jaldi ki user try kar sake |
| Code edit karna | Aapka code padhna, files edit karna aur commands chalana, jab ek insaan dekh raha ho |
| Process jodna | Ek trigger, ek call, ek check aur ek approval ko ek process mein jodna jo har baar ek jaisa chale |
| Request test karna | Ek exact request bhejna aur jawaab ko ek repeatable test ke roop mein save karna |
| Versions rakhna | Code ka har version rakhna aur har badlaav ka review karna |
| Deploy karna | Har push par deploy karna aur minutes mein rollback karna |
| Data store karna | Ek database, sign-in, tables aur is baare mein rules ke saath ki kaun kaun si row dekh sakta hai |
| Events record karna | Events record karna aur funnels banana |
| Request ko follow karna | Ek request ko shuru se ant tak follow karna, kitna cost hua aur kitna time laga, yeh dekhte hue |

Tools ko is tarah slots ki tarah sochne se aapko ek *toolchain* milti hai: tools ka woh set jo product banata aur chalata hai. Har slot ke paas ek kaam hai. Har kaam ke liye team ne us quarter ek tool chuna tha, kyunki woh kaam theek-thaak karta tha aur team use jaanti thi. Agle saal slot mein naam alag ho sakta hai. Slot phir bhi wahan rahega.

Tanvi ne poocha ki woh choice khuli kyun nahi rakhte aur sab use kyun nahi karte. Imran ne kaha ki phir woh interfaces seekhegi, kaam nahi. Zyadatar projects 11 mein se paanch ya chhe use karte hain. Galti yeh hai ki har box ko ek subject maan liya jaye jise master karna hai. Box ek jagah hai jahan tool rakhna hai. Poochiye ki kaam ko kya karna hai, aur jab woh yeh kare toh kya kabhi galat nahi hona chahiye. Phir tool chuniye, aur kaam seekhiye.

Anaya apni desk se sunte hue woh sabak pehchaan gayi jo use pehle hafte requirements ke baare mein mila tha: tool ka naam lene se pehle kaam describe kijiye.

## Do audits

Imran ne Tanvi ko do aadatein di jo woh har kaam mein le jaa sake. Pehli Anaya ki ek galti se nikli.

Pichhle mahine Anaya ne Mr. Menon ka security questionnaire, 40 page ka, ek research assistant mein upload kiya tha jo sirf diye gaye documents se jawaab deta hai. Usne ek saaf-suthra summary likhi aur har sentence ke saath ek source laga diya. Anaya ko uspar kaafi garv tha. Imran ne use ek *claim audit* karne ko kaha. Summary se das claims chuniye, har ek ko us page se check kijiye jise woh cite karta hai, aur use supported, partly supported ya unsupported mark kijiye.

Ismein chaalis minute lage. Saat claims supported the. Do partly supported the, kyunki page par kuch milta-julta likha tha lekin zyada chhote. Ek unsupported tha: summary mein likha tha ki lender ko ek khaas certificate chahiye, aur document mein aisa kuch nahi tha.

::: key Das mein se ek ki limit
Agar das mein se ek ya do se zyada claims unsupported hain, toh us process par decisions ke liye bharosa karna band kijiye, chahe use kisi bhi tool ne banaya ho. Agar kam hain, toh aap use kar sakte hain, aur team ne seekh liya hai ki haath se kya check karna hai.
:::

Doosri aadat secrets-and-data audit thi. Stack ke har tool ke liye likhiye ki woh kya store karta hai aur uski keys kahan rehti hain. Us dopahar ki list Anaya ki pasand se lambi thi.

Table: Secrets-and-data audit
| Tool | Isme kya hai |
| --- | --- |
| Code host | Code, aur koi secrets nahi, jo Imran ne history search karke saabit kiya |
| Hosting company | Model key aur database key settings ke roop mein, aur request logs |
| Database | Accounts aur results, har table par ek rule ke saath |
| Analytics tool | Events aur account numbers, message text nahi, jo Karan pehle hi confirm kar chuka tha |
| Model provider | Check ke liye bheje gaye har message ka text, isliye uski retention policy maayne rakhti thi, aur Anaya ne use do baar padha tha |

Tab Tanvi, jo chup thi, ne apne browser mein demo page kholi, ek key dabayi aur bilkul tham gayi. Page ki script mein usne ek lambi string dekhi jo key jaisi dikhti thi. Woh key hi thi.

Jis tool ne January mein ek description ko screen mein badla tha, usne model provider ka secret us code mein daal diya tha jo har visitor ko bheja jaata hai. Browser wala koi bhi use padh sakta tha. Usne ek database bhi bana diya tha jisme is baare mein koi rule nahi tha ki kaun kya padh sakta hai. Imran ne ghante ke andar key badal di, call ko server ke peeche kar diya aur dono findings log mein likh di. Prototypes aisa karte hain, usne kaha, isliye link share karne se pehle check kijiye.

## Model ke aas-paas kya hai

Thursday ko Imran ne Tanvi ko uska pehla asli kaam diya. Usne shuru mein ek phrase le liya jo woh bolne wali thi: "AI yeh kar deta hai". Model text leta hai aur text deta hai, usne kaha, bas yehi karta hai. Baaki jo kuch product ko chalata hai, woh uske aas-paas banaya jaata hai.

Woh aas-paas ka structure *harness* hai. Isme saat hisse hain, aur product debug karne wale ko har ek dhoondh paana chahiye. Table unke naam deti hai, Monday report ko example banakar.

Table: Harness ke saat hisse, Monday report ke example ke saath
| Hissa | Kya karta hai | Monday report mein |
| --- | --- | --- |
| Context | Har call par model ko jo dikhta hai woh banata hai | Is hafte ke counts, pichhle hafte ke counts, instructions |
| Tools | Model ko padhne ya kuch karne deta hai | Is hafte ke numbers laana; ek customer ka plan dhoondhna |
| State | Steps ke aar-paar aur hafton ke aar-paar yaad rakhta hai | Pichhle hafte ke figures; kin customers ke ho chuke hain |
| Orchestration | Tay karta hai ki agla kya chale | Jama karo, phir draft, phir check, phir bhejo |
| Policy | Woh rules jinhe model override nahi kar sakta | Approval ke bina kuch nahi bheja jaata; logs mein message text nahi |
| Evals | Badlaav se pehle aur baad quality check karta hai | Bees pichhle hafte, un reports ke saath jo kisi insaan ne likhi |
| Observability | Record karta hai ki kya hua | Har run ka ek trace, tokens, cost aur time ke saath |

Do products wahi model use kar sakte hain aur phir bhi bilkul alag behave kar sakte hain, Imran ne kaha, isi table ki wajah se. Lagbhag har quality problem jiske peeche aap padte hain, woh table mein hai, model mein nahi.

Kaam khud wahi Monday email tha jo Anaya ne sardiyon mein bataya tha, woh ek line jo compliance buyer ko batati hai ki guard ne kitni details hide ki. Use ek theek weekly report banana tha, ek count, ek trend aur unsure cases ki ek chhoti list ke saath.

## Coding assistants kaise bante hain

Kaam karne ke liye Tanvi ko ek coding assistant use karna tha. Yeh ek program hai jo repository padhta hai, files edit karta hai aur commands chalata hai jab ek insaan dekh raha ho. Imran ne kaha ki yeh samajhna kaam ka hai ki yeh kaise bante hain. Yeh sabse zyada use hone wale agents hain, aur inke design mein aise patterns hain jo koi bhi product udhaar le sakta hai.

Beech mein ek saada loop hai. Model ek tool chunta hai. Harness use chalata hai. Result model ke paas wapas jaata hai, aur cycle tab tak dohraata hai jab tak kaam khatam na ho. Tools kam aur general hote hain: file padhna, file badalna, search, command chalana. Kuch flexible tools darjanon chhote tools se behtar nikalte hain.

Project ke rules code ke saath rakhi ek saadhi file mein rehte hain, jise assistant har run ke shuru mein padhta hai. Yeh *project memory* hai. Tanvi ne sabse pehle use kholi aur ek line jodi: message text kabhi log mein mat likho.

Permission modes bhi hote hain. Padhna khulkar allowed hai, jabki file badalne ya command chalane ke liye kisi ko haan kehna pad sakta hai.

Imran ne sabse zaroori hisse ko verifier kaha. *Verifier* ek check hai, jaise ek test ya type check, jo assistant ko batata hai ki uska badlaav kaam kiya ya nahi, bina is ke ki koi insaan har line padhe. Jis assistant ke paas apna kaam check karne ka bharosemand tareeka hai, use kahin bade kaam diye ja sakte hain. Jiske paas nahi hai, use har step par ek insaan chahiye, aur tab koi speed nahi bachi.

Jab kaam bada ho, toh kaam baanta ja sakta hai. Ek *sub-agent* ek hissa leta hai, apne alag context mein kaam karta hai aur sirf result wapas deta hai. Isse main conversation chhoti aur saaf rehti hai. Isme se koi cheez, Imran ne kaha, intelligence ke baare mein nahi hai. Yeh loop, memory aur check ke baare mein hai, aur yeh sab report mein use ho sakta tha.

## Fences kahan lagte hain

Agla sabak us hafte ki ek khabar se aaya. Ek assistant kisi ke apne computer par chalta tha, unki files, messages aur shell ki poori chhoot ke saath. Woh lagbhag kuch bhi kar sakta tha, jo use kaam ka banata tha. Woh lagbhag kuch bhi kar sakta tha, jo use khatarnaak banata tha. Imran jaise-jaise chaar sawaal deta gaya, Tanvi unhe whiteboard par likhti gayi, aur table har sawaal ko us control ke saath dikhati hai jo uska jawaab deta hai.

Table: Tool ki pahunch ke baare mein chaar sawaal
| Sawaal | Control |
| --- | --- |
| Woh kaun se tools call kar sakta hai? | Ek *allowlist*: un cheezon ki list jo system ko karne ki ijaazat hai, aur jo usmein nahi hai woh mana |
| Kis scope ke saath? | Jahan ho sake read-only; ek folder, ek channel, ek customer |
| Kin calls ko insaan ki approval chahiye? | Jo kuch bhejta, delete karta, paisa deta hai, ya undo nahi ho sakta |
| Uske paas kya pahunch sakta hai? | Koi bhi text jo woh padhta hai, jaise tickets, email ya web page, usmein attacker ke likhe orders ho sakte hain |

Anaya ne aakhri sawaal ko Chapter 24 ka trifecta pehchaan liya: private data, bahar walon ka text, aur bhejne ka ek tareeka. Tools ke har combination ke liye, usne kaha, in teeno mein se kam se kam ek hataya jaana chahiye.

Imran ne joda ki team ko chhote se shuru karna chahiye aur sirf pehle se chune hue saboot par chauda karna chahiye. "Ek mahine se theek chal raha hai" saboot nahi hai. "Chalees ke chaalis approvals mein sahi tha aur log mein kuch block hua nahi dikhta" saboot hai.

## Ek report, do baar banayi

Tanvi ke kaam mein ek pench tha, us kisam ka jo Imran ko sabse pasand tha. Use report do baar banani thi.

Pehla version ek *state machine* tha. Is kisam ke workflow mein uska code har step aur ek step se doosre step tak har allowed move tay karta tha. Woh numbers jama karta, model se draft likhwata, draft ko numbers se check karta aur approval ke liye bhejta. Agar check fail hota, toh ek baar aur try karta, phir ruk jaata aur bata deta.

Doosra version ek bounded agent tha. Use tools ki ek list, steps ka ek budget aur kaam diya gaya, aur model ne tay kiya ki kya karna hai.

Dono ko usi bees pichhle hafton par chalaya gaya, jinki report ek insaan pehle hi likh chuka tha.

Table: State machine aur bounded agent, bees hafton par
| Measure | State machine | Bounded agent |
| --- | --- | --- |
| Sahi report wale hafte | 20 mein se 19 | 20 mein se 17 |
| Median time | 40 second | 75 second |
| Failure ka cause dhoondhna | Minutes: fail hota step log mein hai | Kahin zyada: poora trace padhna padta hai |
| Ek unusual hafta | Code change chahiye | Aksar khud adapt ho jaata hai |

Ek fixed process ke liye, jaise weekly report, Imran ne kaha, fixed steps wali machine jeetti hai. Woh zyada accurate hai, tez hai, aur aise jagah fail hoti hai jo dikh sakti hai. Agent tab apna kharcha nikaalta hai jab steps sach mein case-ba-case badalte hain. Usne poocha ki yahan woh kahan hoga. Tanvi ne suggest kiya ki yeh dekhna ki ek customer ka count achanak doguna kyun ho gaya. Imran sahmat hua, aur kaha ki iske liye agent use karo, ek kone mein, chhote budget ke saath.

## Ise bahar jaane dena

Kaam ka aakhri hissa use dara raha tha. Jo report customers ko jaati hai, use ek release gate chahiye, aur Imran ne use list di.

- Normal tests paas hon.
- Bees hafte line par ya usse upar score karein, aur safety cases mein kuch naya fail na ho.
- Har run ka cost aur time budget ke andar ho.
- Badlaav pehle das mein se ek account ko jaaye, ek *feature flag* ke peeche. Yeh chalte hue system mein ek switch hai jo badlaav ko kuch users ke liye on aur baaki ke liye off karta hai, bina nayi release ke.
- Ek rollback trigger aur incident ka owner likhe hon.

*Rollback trigger* ek condition hai, pehle se likhi hui aur naapne layak, jo kisi ko release undo karne par bound karti hai. Tanvi ne apna likha: rollback kijiye agar un reports ka share, jinhe customer useful mark karta hai, pichhle hafte se 10 points se zyada gir jaye, ya koi report galat recipient ko chali jaye. Tay karne wala insaan on-call engineer tha, jise kisi ki permission nahi chahiye thi. Tareeka flag switch karna tha, aur isme paanch minute se kam lagte. Launch se pehle unhone ise stopwatch ke saath ek baar test kiya.

Unhone yeh bhi likha ki system ko har kisam ke failure par kaise respond karna chahiye.

Table: Failure par responses
| Response | Kab | Example |
| --- | --- | --- |
| Retry | Ek temporary error | Ek timeout; ek rate limit |
| Degrade | Ek hissa band hai lekin baaki kaam karta hai | Trend chart ke bina report bhejna |
| Escalate | Output par bharosa nahi kiya ja sakta | Draft apna check do baar fail kare |
| Stop | Ek irreversible action galat dikhta hai | Ek report 5 ki jagah 500 logon ko jaane wali ho |

Imran ne aakhri row par Tanvi ka pen rok diya. Agar machine kuch aisa karne wali hai jo woh wapas nahi le sakti, aur action galat dikhta hai, toh woh ruk jaati hai. Der se aayi report ek chidh hai. Galat 500 logon ko gayi report ek vakeel ka letter hai.

Aur agar kuch galat hota, toh koi do din ke andar ek *incident review* likhta. Yeh ek page hai jo batata hai ki kya hua, kyun hua, aur kaun sa check use pakad leta. Usmein ek check ka naam hota hai, kisi ko doshi thahrane wale insaan ka nahi.

Tanvi ne Friday ko kaam khatam kiya. Pehli report ek account ko gayi, flag ke peeche, shaam ke chaar baje, aur Imran uski desk ke paas se teen baar kuch kahe bina guzra. Woh pahunch gayi, aur sahi thi. Tanvi ne flag off kiya, phir wapas on kiya, yeh saabit karne ke liye ki woh kar sakti hai.

## Saar

Ek AI product ke liye lagbhag 11 kaam karne padte hain. Tools ke baare mein sochne ka kaam ka tareeka hai unhe bharne wale slots ke roop mein, har kaam ke liye ek tool chunna is hisaab se ki use kya karna hai aur kya kabhi galat nahi hona chahiye.

- Har stack ke saath do audits jaate hain: kisi bhi AI summary ke das claims ko unke sources se check kijiye, aur har tool ke liye likhiye ki woh kya store karta hai aur uski keys kahan rehti hain.
- Model product ka ek hissa hai. Baaki, yaani harness, ke saat hisse hain: context, tools, state, orchestration, policy, evals aur observability. Zyadatar quality problems wahin rehti hain.
- Coding assistants ek saada loop chalate hain, kuch general tools use karte hain, project ke rules ek file mein rakhte hain, risky kaamon ke liye permission maangte hain, aur sabse upar ek verifier par tikte hain.
- Tool access ek allowlist hona chahiye, scope mein chhota, jo undo na ho sake uske liye approval ke saath, aur pehle se chune hue saboot par hi chauda hona chahiye.
- Ek fixed process ke liye state machine aksar agent se behtar hoti hai, aur yeh choice usi cases par naapi jaani chahiye. Badlaav gate aur flag ke peeche jaata hai, ek rollback trigger, ek named owner aur har kisam ke failure ke plan ke saath.

Tools jagah par aa gaye, toh ab team product ko asli logon ke saamne rakh sakti hai.

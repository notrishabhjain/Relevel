---
title: Tools Aur Harness
summary: Ek naya engineer poochhta hai ki kaun sa tool kis kaam ka hai, aur ek anubhavi engineer brands ki list ke bajaye slots ki drawing se jawaab deta hai. Wahi engineer ek saptaahik report do baar banata hai, ek baar fixed kadamon se aur ek baar agent se, aur dono ko wahi bees hafte par naapa jaata hai. Chapter toolchains, claim audits, harness, project memory, allowlists, verifiers, sub-agents, state machines, feature flags, rollback triggers aur incident reviews samjhata hai.
course: b4 b5
goals:
  - tools ko kaam ke hisaab se bharne wale slots ki tarah sochna, aur ek claim audit aur ek secrets-and-data audit chalana
  - harness ke saat hisson ke naam batana aur quality ki samasya ko sahi hisse mein dhoondhna
  - batana ki coding assistants kaise bane hain, aur scope aur manzooriyon ke saath ek allowlist banana
  - ek state machine aur ek bounded agent ki tulna ek hi cases par karna, aur badlaav ko gate, flag aur rollback trigger ke peechhe chhodna
terms:
  - toolchain | un tools ka set jo ek team product banane aur chalane ke liye istemaal karti hai, slots ki tarah socha gaya, har ek ka ek kaam | tool chain
  - claim audit | AI se likhe saar ke das daave lena aur har ek ko uske source se jaanchna, har ek ko samarthit, aanshik roop se samarthit ya asamarthit chinhit karna | 
  - harness | model ke aas-paas ki har cheez jo use product banati hai: woh code jo uska context banata hai, uske tools chalata hai, state rakhta hai, niyam laagu karta hai, quality jaanchta hai aur record karta hai ki kya hua | harnesses
  - project memory | code ke saath rakhi ek saadi file, jisme project ke niyam aur aadatein hain, ek coding assistant ke har run ki shuruaat mein load hoti hui | 
  - allowlist | un cheezon ki list jo ek system ko karne ki ijaazat hai; jo uspar nahi hai woh mana kar di jaati hai | allowlists
  - verifier | ek jaanch, jaise ek test, jo ek agent ko batati hai ki uska apna badlaav kaam kiya ya nahi, bina kisi insaan ke har line padhe | verifiers
  - sub-agent | ek bade kaam ke ek hisse ke liye diya gaya ek madadgaar, jo apne alag context mein kaam karta hai taaki mukhya wala chhota rahe | sub-agents
  - state machine | ek workflow jisme aapka code har charan aur ek charan se doosre tak har permitted chaal tay karta hai | state machines
  - feature flag | chalte system mein ek switch jo ek badlaav ko kuch users ke liye on aur doosron ke liye off karta hai, bina nayi release ke | feature flags
  - rollback trigger | ek naapne yogya shart, pehle se likhi hui, jo kisi ko ek release ko palatne par baadhya karti hai | rollback triggers
  - incident review | kuch galat hone ke baad likha gaya ek chhota likhit byora, ki kya hua, kyun, aur kaun si jaanch use pakad leti | post-incident review
---

Tanvi Kulkarni March mein ek Monday ko Imran Qureshi ki team mein shamil hui, aur Wednesday tak uske paas ek sawaal tha jo poochhne mein use sharm aa rahi thi. Whiteboard ke paas, ikbaal karne wale ki aawaaz mein, usne kaha ki team channel mein lagbhag satrah tools hain aur har koi unka zikr aise karta hai jaise use pehle se pata ho. Usne poochha ki use kaun se seekhne chahiye. Imran ne pen band kiya aur neeche rakh diya, aur Anaya ne use pehli baar kisi sawaal se khush dekha. "Koi nahi," usne kaha. "Abhi nahi. Slots seekho."

Yeh chapter Tanvi ke pehle mahine ka anusaran karta hai. Woh tools ke baare mein sochne ke tareeke se shuru hota hai aur ek saptaahik report par khatam hota hai jo customers tak gayi, aur beech mein woh dhaancha batata hai jo ek model ke chaaron taraf ek product banata hai.

## Case: ek channel mein satrah tools

Jin naamon ne Tanvi ko chinta di thi woh ek saal ke andar badal jaate. Jo nahi badalta tha woh un kaamon ka set tha jinke liye naam kiraye par liye gaye the. Imran ka jawaab pehle kaam sikhana tha.

## Slots, brands nahi

Imran ne dabbon ka ek column banaya. Har ek mein usne kisi product ka naam nahi balki ek kriya-vaakyansh likha, aur Tanvi, unhe apni notebook mein utaarte hue, dekh sakti thi ki jin naamon ki use chinta thi unme se zyadatar ghaayab ho gaye the. Ek AI product ko, usne kaha, pehle vichaar se aakhri shikayat tak, lagbhag gyarah cheezein karwani hoti hain.

Table: Gyarah kaam, aur har ek ko kya karna chahiye
| Kaam | Ise kya karna chahiye |
| --- | --- |
| Soch aur draft | Jo text aap dete hain uspar kaam karna |
| Sources se jawaab | Sirf aapke upload kiye sources se jawaab dena, aise citations ke saath jinhe aap jaanch sakein |
| Ek screen banana | Ek vivaran ko ek chalti screen mein itni jaldi badalna ki user aazma sake |
| Code edit karna | Aapka code padhna, files edit karna aur commands chalana jabki ek insaan dekh raha ho |
| Ek process jodna | Ek trigger, ek call, ek jaanch aur ek manzoori ko ek aisi process mein jodna jo har baar ek jaise chale |
| Ek request test karna | Ek theek request bhejna aur jawaab ko ek dohraane laayak test ki tarah save karna |
| Versions rakhna | Code ka har version rakhna aur har badlaav ki review karna |
| Deploy karna | Har push par deploy karna aur kuch minute mein wapas jaana |
| Data store karna | Ek database sign-in, tables aur is baare mein niyamon ke saath ki kaun si row kaun dekh sakta hai |
| Events record karna | Events record karna aur funnels banana |
| Ek request ko follow karna | Ek request ko shuru se ant tak follow karna, uske kharche aur samay ke saath |

Woh tools ka set jo product banata aur chalata hai, is tarah slots ki tarah socha jaaye toh, *toolchain* hai. Har slot ka ek kaam hai, aur har kaam ke liye team ne us quarter ek tool chuna tha kyunki woh kaam kaafi achha karta tha aur team use jaanti thi. Agle saal slot mein naam alag ho sakta tha. Slot waha rahega.

Tanvi ne poochha ki choice khuli kyun na rakhein aur sab kyun na istemaal karein. Imran ne jawaab diya ki phir woh kaam nahi balki interfaces seekhegi. Zyadatar projects gyarah mein se paanch ya chhe istemaal karte hain. Galti har dabbe ko ek vishay ki tarah maanna hai jisme maharat paani hai. Ek dabba ek tool rakhne ki jagah hai. Sawaal yeh hain ki use kya karna chahiye aur woh kya karte hue kabhi galat nahi hona chahiye, aur phir tool chuna jaata hai aur kaam seekha jaata hai. Anaya, apne desk se sunti hui, ne woh sabak pehchaana jo use pehle hafte mein requirements ke baare mein diya gaya tha: tool ka naam lene se pehle kaam ka varnan karo.

## Do audits

Imran ne Tanvi ko ek kaam se doosre kaam tak le jaane ke liye do aadatein di. Pehli Anaya ki ek galti se aayi.

Pichhle mahine Anaya ne Mr. Menon ka security questionnaire, chaalis page, ek research assistant par upload kiya tha jo sirf diye gaye documents se jawaab deta hai. Usne ek saaf saar likha tha aur har vaakya ke saath ek source jod diya tha, aur Anaya ko us par kuch garv tha. Imran ne use ek *claim audit* karne ko kaha: saar se das dawe chuno, har ek ko us page se milao jise woh cite karta hai, aur use supported, partly supported ya unsupported chinhit karo. Ismein chaalis minute lage. Saat dawe supported the. Do partly supported the, jisme page ne milta-julta par sankra kuch kaha tha. Ek unsupported tha: saar ne kaha ki lender ko ek khaas certificate chahiye, aur document mein aisa kuch nahi kaha gaya tha.

::: key Das mein se ek seema hai
Das mein se ek ya do se zyada unsupported dawe, aur ek process par ab faislon ke liye bharosa nahi karna chahiye, chahe use kisi bhi tool ne banaya ho. Isse kam, aur use istemaal kiya ja sakta hai, aur team ne seekh liya hai ki haath se kya jaanchna hai.
:::

Doosri aadat secrets-and-data audit thi: stack ke har tool ke liye likho ki woh kya store karta hai aur uski keys kahan rehti hain. Us dopahar ki list Anaya ki pasand se lambi thi.

Table: Secrets-and-data audit
| Tool | Ismein kya hai |
| --- | --- |
| Code host | Code aur koi secrets nahi, jo Imran ne itihaas mein khoj kar saabit kiya |
| Hosting company | Model key aur database key settings ki tarah, aur request logs |
| Database | Accounts aur nateeje, har table par ek niyam ke saath |
| Analytics tool | Events aur account numbers aur koi message text nahi, jo Karan pehle hi pakka kar chuka tha |
| Model provider | Jaanch ke liye bheje gaye har message ka text, isliye uski retention policy maayne rakhti thi, aur Anaya ne use do baar padha tha |

Phir Tanvi, jo shaant thi, ne demonstration page apne browser mein kholi, ek key dabayi aur bilkul sthir ho gayi. Page ki script mein usne ek lambi string dekhi jo ek key jaisi lagti thi, aur woh wahi key thi. Jis tool ne January mein ek vivaran ko screen mein badla tha, usne model provider ka secret us code mein daal diya tha jo har visitor ko bheja jaata hai, jahan browser wala koi bhi use padh sakta tha. Usne ek aisa database bhi banaya tha jisme kaun kya padh sakta hai iska koi niyam nahi tha. Imran ne ek ghante ke andar key badal di, call ko server ke peechhe kar diya aur dono khoj log mein likh di. Prototypes aisa karte hain, usne kaha, aur link share karne se pehle jaanch lena chahiye.

## Model ke chaaron taraf kya hai

Guruwar ko Imran ne Tanvi ko uska pehla asli kaam diya, aur woh ek shabd hata kar shuru hua jo woh istemaal karne wali thi: "AI yeh karta hai". Model text leta hai aur text deta hai, usne kaha, aur bas itna hi karta hai. Baaki sab kuch jo ek product ko kaam karne laayak banata hai woh uske chaaron taraf banaya jaata hai, aur woh aas-paas ka dhaancha *harness* hai. Ek harness ke saat hisse hain, aur product ko debug karne wale ko har ek dhoondhne mein sakshm hona chahiye.

Table: Harness ke saat hisse, Monday ki report ke udaharan ke saath
| Hissa | Kya karta hai | Monday ki report mein |
| --- | --- | --- |
| Context | Har call par banata hai ki model kya dekhta hai | Hafte ki ginti, pichhle hafte ki ginti, instructions |
| Tools | Model ko padhne ya karne deta hai | Hafte ke numbers laao; ek customer ka plan dekho |
| State | Kadamon aur hafton ke aar-paar yaad rakhta hai | Pichhle hafte ke figure; kin customers ka ho chuka hai |
| Orchestration | Tay karta hai ki agla kya chalega | Jutao, phir draft, phir jaancho, phir bhejo |
| Policy | Aise niyam jinhe model override nahi kar sakta | Manzoori ke bina kuch nahi bheja jaata; logs mein message text nahi |
| Evals | Badlaav se pehle aur baad quality jaanchta hai | Bees puraane hafte, jinki reports ek insaan ne likhi |
| Observability | Record karta hai ki kya hua | Har run ka ek trace, tokens, kharche aur samay ke saath |

Do products ek hi model istemaal kar sakte hain aur bilkul alag behave kar sakte hain, Imran ne kaha, isi table ki wajah se. Jis quality samasya ka koi peechha karta hai woh lagbhag hamesha table mein hoti hai, model mein nahi.

Kaam woh Monday ka email tha jo Anaya ne sardiyon mein bataya tha, woh ek line jo ek compliance buyer ko batati ki guard ne kitni details chhupayin. Use ek asli saptaahik report banna tha, ek ginti, ek trend aur shak wale cases ki ek chhoti list ke saath.

## Coding assistants kaise bane hain

Yeh kaam karne ke liye Tanvi ko ek coding assistant istemaal karna tha, ek program jo repository padhta hai, files edit karta hai aur commands chalata hai jabki ek insaan dekhta hai. Imran ne kaha ki yeh samajhna zaroori hai ki yeh kaise bane hain, kyunki yeh sabse zyada istemaal hone wale agents hain aur unke design mein aise pattern hain jinhe ek product udhaar le sakta hai.

Kendra mein ek saadha loop hai. Model ek tool chunta hai, harness use chalata hai, nateeja model ko wapas jaata hai, aur chakra tab tak dohraata hai jab tak kaam khatam nahi hota. Tools kam aur aam hain: ek file padho, ek file badlo, search karo, ek command chalao. Kuch lachile tools darjanon sankre tools ko haraate hain. Project ke niyam code ke saath rakhi ek saadhi file mein hote hain, jo assistant har run ke shuru mein padhta hai. Yeh *project memory* hai, aur Tanvi ka pehla kaam use kholna aur ek line jodna tha: kabhi message text ko log mein mat likho.

Permission modes hain. Padhna khulkar allowed hai, aur ek file badalne ya ek command chalane ke liye koi "haan" keh sakta hai. Imran ne sabse zaroori hisse ko verifier kaha. *Verifier* ek jaanch hai, jaise ek test ya ek type check, jo assistant ko batati hai ki uska badlaav kaam kiya ya nahi, bina kisi insaan ke har line padhe. Jis assistant ke paas apna kaam jaanchne ka bharose layak tareeka ho use kahin bade kaam diye ja sakte hain. Jis ke paas nahi, use har kadam par insaan chahiye, aur tab koi raftaar nahi kharidi gayi.

Jab koi kaam bada ho, toh kaam baanta ja sakta hai. Ek *sub-agent* ek hissa leta hai, apne alag context mein kaam karta hai aur sirf nateeja lautata hai, taaki mukhya baatcheet chhoti aur saaf rahe. Imran ne kaha ki inme se kuch bhi buddhi ke baare mein nahi hai. Yeh loop, memory aur jaanch ke baare mein hai, aur sab report mein istemaal kiya ja sakta tha.

## Baad kahan lagti hai

Agla sabak us hafte ki ek khabar se aaya, ek aise assistant ki jo kisi ke apne computer par unki files, unke messages aur unke shell par poori pakad ke saath chalta tha. Woh lagbhag kuch bhi kar sakta tha, jisse woh upyogi tha, aur woh lagbhag kuch bhi kar sakta tha. Tanvi ne chaar sawaal whiteboard par likhe jaise Imran ne diye.

Table: Tool ki pahunch ke baare mein chaar sawaal
| Sawaal | Control |
| --- | --- |
| Kaun se tools bula sakta hai? | Ek *allowlist*: un cheezon ki list jo system kar sakta hai, jo uspar nahi hai woh mana |
| Kis scope ke saath? | Jahan ho sake read-only; ek folder, ek channel, ek customer |
| Kin calls ke liye kisi insaan ki manzoori chahiye? | Jo kuch bhejta, mitata, bharta hai ya wapas nahi liya ja sakta |
| Kaun use pahunch sakta hai? | Jo bhi text woh padhta hai, jaise tickets, email ya web page, usme hamlavar ke likhe hukm ho sakte hain |

Anaya ne aakhri sawaal ko Chapter 24 ke trifecta ke roop mein pehchaana: private data, bahari logon ka text aur bhejne ka raasta. Tools ke har milan ke liye, usne kaha, teeno mein se kam se kam ek hataya jaana chahiye. Imran ne joda ki team ko sankre se shuru karna chahiye aur pehle se tay saboot par hi faila karna chahiye. "Yeh ek mahine se theek hai" saboot nahi hai. "Yeh sabhi chaalis manzooriyon par sahi tha aur log mein kuch bhi roka hua nahi dikhta" saboot hai.

## Ek report, do baar banayi gayi

Tanvi ke kaam mein ek pench tha, jo us kism ka tha jo Imran ko sabse zyada pasand tha. Use report do baar banani thi.

Pehla version ek *state machine* tha, ek workflow jisme uska code har kadam aur ek se doosre mein har anumati prapt chaal tay karta tha. Woh numbers jutata, model se draft maangta, draft ko numbers se jaanchta aur use manzoori ke liye bhejta. Agar jaanch fail hoti toh woh ek baar aur koshish karta aur phir ruk kar kehta ki woh nahi kar paaya. Doosra version ek bounded agent tha. Use tools ki ek list, kadamon ka ek budget aur kaam diya gaya, aur model ne chuna ki kya karna hai.

Unhone dono ko wahi bees puraane hafton par chalaya, jinke liye ek insaan ne pehle hi report likhi thi.

Table: State machine aur bounded agent bees hafton par
| Naap | State machine | Bounded agent |
| --- | --- | --- |
| Sahi report wale hafte | 20 mein se 19 | 20 mein se 17 |
| Median samay | 40 second | 75 second |
| Failure ka kaaran dhoondhna | Kuch minute: failing kadam log mein hai | Bahut zyada: poora trace padhna padta hai |
| Ek ajeeb hafta | Code badlaav chahiye | Aksar apne aap dhal jaata hai |

Ek tay process, jaise saptaahik report, ke liye, Imran ne kaha, tay kadamon wali machine jeetti hai. Woh zyada accurate hai, tez hai aur aisi jagah fail hoti hai jahan dekha ja sakta hai. Agent apni jagah tab banata hai jab kadam sach mein case-dar-case alag hote hain. Usne poochha ki woh yahan kahan hoga, aur Tanvi ne sujhaya ki yeh dekhna ki ek customer ki ginti achanak doguni kyun ho gayi. Usne sahmati di, aur kaha ki agent ko wahan istemaal karo, ek kone mein, ek chhote budget ke saath.

## Ise bahar jaane dena

Kaam ka aakhri hissa use dara raha tha. Jo report customers ke paas jaati hai use ek release gate chahiye, aur Imran ne use list di.

- Saadhaaran tests paas hon.
- Bees hafte us seema par ya uske upar score karein, safety cases mein kuch naya fail na ho.
- Har run ka kharcha aur samay budget ke andar ho.
- Badlaav pehle das mein se ek account ko jaaye, ek *feature flag* ke peechhe, jo chalte system mein ek switch hai jo kisi badlaav ko kuch ke liye on aur doosron ke liye off karta hai, bina naye release ke.
- Ek rollback trigger aur incident ke maalik ka naam likha ho.

*Rollback trigger* ek aisi shart hai, pehle se likhi aur naapne laayak, jo kisi ko release palatne ke liye baadhya karti hai. Tanvi ne apna likha: roll back karo agar woh hissa jo customer upyogi chinhit karta hai pichhle hafte se das points se zyada gir jaaye, ya agar koi bhi report galat vyakti ke paas jaaye. Tay karne wala insaan on-call engineer tha, jise kisi ki ijaazat nahi chahiye thi. Tareeka flag badalna tha, aur ismein paanch minute se kam lagte. Unhone use launch se pehle ek baar stopwatch ke saath test kiya.

Unhone yeh bhi likha ki system har kism ki failure par kaise pratikriya kare.

Table: Failure par pratikriyayein
| Pratikriya | Kab | Udaharan |
| --- | --- | --- |
| Retry | Ek asthaayi error | Ek timeout; ek rate limit |
| Degrade | Ek hissa band hai par baaki kaam karta hai | Trend chart ke bina report bhejo |
| Escalate | Output par bharosa nahi kiya ja sakta | Draft apni jaanch mein do baar fail hota hai |
| Stop | Ek na-ulatne wala action galat lagta hai | Ek report paanch ki jagah paanch sau logon ko jaayegi |

Imran ne aakhri row par uski pen rok di. Agar machine kuch aisa karne wali hai jo wapas nahi liya ja sakta, aur action galat dikhta hai, toh woh ruk jaati hai. Ek der se aayi report ek jhanjhat hai, aur galat paanch sau logon ko bheji gayi report ek vakeel ki chitthi hai. Agar kuch galat hota, toh koi do din ke andar ek *incident review* likhta: ek page jo batata ki kya hua, kyun, aur kaun si jaanch ise pakad leti. Woh ek jaanch ka naam leta hai, doshi insaan ka nahi.

Tanvi ne Friday ko khatam kiya. Pehli report ek hi account ko gayi, flag ke peechhe, shaam chaar baje, aur Imran uske desk se teen baar bina kuch kahe guzra. Woh pahunchi aur sahi thi. Usne flag band kiya, aur phir on kiya, yeh dikhane ke liye ki woh kar sakti hai.

## Saaraansh

Ek AI product ko lagbhag gyarah kaam karwane padte hain, aur tools ko dekhne ka upyogi tareeka unhe bharne wale slots ki tarah dekhna hai, har kaam ke liye ek tool chunna is baat se ki use kya karna hai aur woh kya karte hue kabhi galat nahi hona chahiye.

- Har stack ke saath do audits jaate hain: kisi bhi AI saar ke das dawon ko unke sources se milao, aur har tool ke liye likho ki woh kya store karta hai aur uski keys kahan rehti hain.
- Model ek product ka ek hissa hai. Baaki, harness, ke saat hisse hain: context, tools, state, orchestration, policy, evals aur observability. Zyadatar quality ki samasyayein wahin rehti hain.
- Coding assistants ek saadha loop chalate hain, kuch aam tools istemaal karte hain, project ke niyam ek file mein rakhte hain, jokhim wale kaamon ke liye ijaazat maangte hain aur sabse zyada ek verifier par nirbhar karte hain.
- Tool access ek allowlist ho, scope mein sankra, aur jo kuch wapas nahi liya ja sakta uske liye manzoori ke saath, aur pehle se tay saboot par hi chaudaa kiya jaaye.
- Ek tay process ke liye ek state machine aam taur par agent se behtar hai, aur chunaav ek hi cases par naapa jaana chahiye. Badlaav ek gate aur ek flag ke peechhe, ek rollback trigger, ek naamit maalik aur har tarah ki failure ke liye ek yojna ke saath jaata hai.

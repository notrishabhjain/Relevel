---
title: Tools Aur Harness
summary: Ek naya engineer poochta hai ki kaun sa tool kis kaam ka hai. Ek senior engineer brands ki list nahi, khaali slots ki drawing se jawaab deta hai. Phir naya engineer ek weekly report do baar banata hai, ek baar fixed steps se aur ek baar agent se. Dono ko wahi bees hafton par naapa jaata hai. Chapter mein toolchain, claim audit, harness, project memory, allowlist, verifier, sub-agent, state machine, feature flag, rollback trigger aur incident review aate hain.
course: b4 b5
goals:
  - tools ko slots ki tarah dekhna jinhe kaam ke hisaab se bhara jaata hai, aur ek claim audit aur ek secrets-and-data audit chalana
  - harness ke saat hisse ginna aur quality ki dikkat sahi hisse mein dhoondhna
  - batana ki coding assistants kaise bante hain, aur scope aur approvals ke saath ek allowlist set karna
  - ek state machine ko ek bounded agent se wahi cases par compare karna, aur badlaav ko gate, flag aur rollback trigger ke peeche release karna
terms:
  - toolchain | team ke toolbox ke slots: tools ka woh set jisse product banta aur chalta hai, har slot mein ek kaam ke liye ek tool | tool chain
  - claim audit | AI summary ki spot-check: das claims uthaiye, har ek ko uske source se milaiye, aur supported, partly supported ya unsupported mark kijiye | 
  - harness | ghode ki zeen aur lagaam: model ke aas-paas ki woh sab cheezein jo use product banati hain, yaani woh code jo context banata hai, tools chalata hai, state rakhta hai, rules lagata hai, quality check karta hai aur record karta hai ki kya hua | harnesses
  - project memory | project ki deewar par lagi parchi: code ke saath rakhi ek saadhi file jisme project ke rules aur aadatein hain, aur coding assistant har run ke shuru mein use padhta hai | 
  - allowlist | shaadi ke gate ki guest list: sirf wahi cheezein jo system kar sakta hai; jo list mein nahi, woh mana | allowlists
  - verifier | coder ki answer key: ek check, jaise ek test, jo agent ko batata hai ki uska badlaav chala ya nahi, taaki insaan ko har line na padhni pade | verifiers
  - sub-agent | ek bade kaam ka ek hissa pane wala helper, jo alag mez par kaam karta hai taaki main mez saaf rahe | sub-agents
  - state machine | fixed khaanon wala board game: aapka code har step aur ek step se doosre par jaane ki har allowed chaal tay karta hai | state machines
  - feature flag | chalte system mein light ka switch: yeh badlaav ko kuch users ke liye on aur kuch ke liye off karta hai, naye release ke bina | feature flags
  - rollback trigger | pehle se laga fire alarm: ek naapne layak condition, pehle likhi hui, jo kisi ko release wapas lene par majboor karti hai | rollback triggers
  - incident review | kuch galat hone ke baad likhi chhoti note: kya hua, kyun hua, aur kaun sa check use pakad leta | post-incident review
---

Tanvi Kulkarni March mein ek Monday ko Imran Qureshi ki team mein aayi. Budhwaar tak uske paas ek sawaal tha jo poochhne mein use sharm aa rahi thi. Woh whiteboard ke paas khadi hui aur aise boli jaise kuch maan rahi ho. Team channel mein lagbhag satrah tools the, usne kaha. Sab unka naam aise lete the jaise woh pehle se jaanti ho. Kaun se use seekhne chahiye?

Imran ne pen band karke rakh diya. Anaya ne pehli baar dekha ki use ek sawaal sunkar khushi hui. "Koi nahi," usne kaha. "Abhi nahi. Slots seekho."

Yeh chapter Tanvi ke pehle mahine ke saath chalta hai. Yeh tools ke baare mein sochne ke ek tareeke se shuru hota hai. Yeh ek weekly report par khatam hota hai jo customers ko gayi. Beech mein yeh us dhaanche ko samjhata hai jo model ke aas-paas hota hai aur use product banata hai.

## Case: channel mein satrah tools

Jin naamon se Tanvi ghabrayi thi, woh ek saal mein badal jaate. Jin kaamon ke liye unhe rakha gaya tha, woh nahi badalte. Sochiye ek toolbox jisme naam likhe slots hain: hathauda, aari, fita. Hathaude ka brand badalta hai. Slot wahi rehta hai. Isliye Imran ne pehle kaam sikhaye.

## Slots, brands nahi

Imran ne boxes ka ek column banaya. Har box mein usne product ka naam nahi, ek kaam likha. Tanvi ne unhe notebook mein utaara. Jin naamon se woh darti thi, un mein se zyadatar gayab ho gaye. Ek AI product ko, usne kaha, pehle idea se aakhri shikayat tak lagbhag gyarah kaam chahiye.

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

Tools ko is tarah dekhne se aapko ek *toolchain* milti hai. Yeh un tools ka set hai jo product banata aur chalata hai. Har slot ka ek kaam hai. Har kaam ke liye team ne is quarter ek tool chuna tha, kyunki woh kaam achha karta tha aur team use jaanti thi. Agle saal slot mein naam alag ho sakta hai. Slot wahi rahega.

Tanvi ne poocha ki sab choices khuli kyun na rakhein aur sab tools use kyun na karein. Imran ne kaha tab woh buttons seekhegi, kaam nahi. Zyadatar projects gyarah mein se paanch ya chhe use karte hain.

Galti yeh hai ki har box ko ek vishay maan lein jise sikhna hai. Box sirf ek tool rakhne ki jagah hai. Poochhiye ki kaam ko kya karna hai aur kya kabhi galat nahi hona chahiye. Phir tool chuniye, aur kaam seekhiye.

Anaya apni desk se sun rahi thi. Use pehle hafte ka requirements wala sabak yaad aaya. Tool ka naam lene se pehle kaam ko bataiye.

## Do audits

Imran ne Tanvi ko do aadatein di jo woh har kaam mein le jaaye. Pehli Anaya ki ek galti se aayi.

Pichhle mahine Anaya ne Mr. Menon ki security questionnaire upload ki thi, chalis pages ki. Usne use ek research assistant ko diya jo sirf diye gaye documents se jawaab deta hai. Usne ek saaf summary likhi aur har sentence ke paas ek source laga diya. Anaya ko ispar kaafi garv tha.

Imran ne use ek *claim audit* karne ko kaha. Yeh teacher ke kuch jawaabon ki spot-check jaisa hai. Summary se das claims uthao. Har ek ko us page se milao jo woh cite karta hai. Use supported, partly supported ya unsupported mark karo.

Ismein chalis minute lage. Saat claims supported the. Do partly supported the, kyunki page ne milta-julta par chhota kuch kaha tha. Ek unsupported tha. Summary ne kaha ki lender ko ek khaas certificate chahiye. Document mein aisa kuch nahi tha.

::: key Das mein se ek ki limit
Maan lijiye das mein se ek ya do se zyada claims unsupported hain. Tab us process par decisions ke liye bharosa karna band kijiye, chahe kisi bhi tool ne banaya ho. Agar kam hain, toh aap use kar sakte hain, aur team ne seekh liya ki haath se kya check karna hai.
:::

Doosri aadat secrets-and-data audit thi. Sochiye ghar ki har almari aur uske andar rakhi cheezon ki list. Stack ke har tool ke liye likhiye ki woh kya store karta hai aur uski keys kahan rehti hain. Us dopahar ki list Anaya ki pasand se lambi nikli.

Table: Secrets-and-data audit
| Tool | Isme kya hai |
| --- | --- |
| Code host | Code, aur koi secrets nahi, jo Imran ne history search karke saabit kiya |
| Hosting company | Model key aur database key settings ke roop mein, aur request logs |
| Database | Accounts aur results, har table par ek rule ke saath |
| Analytics tool | Events aur account numbers, message text nahi, jo Karan pehle hi confirm kar chuka tha |
| Model provider | Check ke liye bheje gaye har message ka text, isliye uski retention policy maayne rakhti thi, aur Anaya ne use do baar padha tha |

Phir Tanvi, jo chup thi, ne apne browser mein demonstration page kholi. Usne ek key dabayi aur bilkul sunn ho gayi. Page ki script mein usne ek lambi string dekhi jo key jaisi lagti thi. Woh wahi key thi.

January mein jis tool ne description ko screen banaya tha, usne ek galti ki thi. Usne model provider ka secret us code mein daal diya tha jo har visitor ko jaata hai. Browser wala koi bhi use padh sakta tha. Usne ek database bhi banaya tha jisme kaun kya padh sakta hai iska koi rule nahi tha.

Imran ne ghante ke andar key badal di. Usne call ko server ke peeche kar diya, jo private peeche ka kamra hai. Usne dono findings log mein likhe. Prototypes aisa karte rehte hain, usne kaha, isliye link share karne se pehle check kijiye.

## Model ke aas-paas kya hai

Guruwaar ko Imran ne Tanvi ko uska pehla asal kaam diya. Pehle usne ek phrase le liya jo woh bolne wali thi: "AI karta hai". Model text leta hai aur text deta hai, usne kaha. Bas itna hi karta hai. Baaki sab jo product ko chalata hai, uske aas-paas banaya jaata hai.

Woh aas-paas ka dhaancha *harness* hai. Sochiye ghode ki zeen aur lagaam. Ghoda taakatwar hai, par harness use kaam ka banata hai. Harness ke saat hisse hote hain. Product theek karne wale ko har hissa dhoondhna aana chahiye. Table unke naam deta hai, Monday report ko example banakar.

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

Do products ek hi model use karke bilkul alag chal sakte hain, Imran ne kaha. Wajah yeh table hai. Quality ki lagbhag har dikkat jo aap dhoondhte hain, table mein hoti hai, model mein nahi.

Kaam woh Monday email tha jo Anaya ne sardiyon mein bataya tha. Ek line, jo compliance buyer ko batati thi ki guard ne kitni details chhupayi. Ab use ek theek weekly report banna tha. Usmein ek count, ek trend aur unsure cases ki chhoti list chahiye thi.

## Coding assistants kaise bante hain

Kaam karne ke liye Tanvi coding assistant use karegi. Yeh ek program hai jo repository padhta hai (ek online folder jo har badlaav yaad rakhta hai), files edit karta hai aur commands chalata hai, jabki ek insaan dekhta hai. Imran ne kaha ki yeh jaanna zaroori hai ki yeh kaise bante hain. Yeh sabse zyada use hone wale agents hain. Unke design mein aise patterns hain jo koi bhi product udhaar le sakta hai.

Beech mein ek saadha loop hai, errand par bhage helper jaisa. Model ek tool chunta hai. Harness use chalata hai. Result model ke paas wapas jaata hai. Yeh chakkar tab tak chalta hai jab tak kaam poora na ho. Tools kam aur aam hain: file padho, file badlo, search karo, command chalao. Kuch lachile tools darjano chhote tools se behtar hote hain.

Project ke rules code ke saath rakhi ek saadhi file mein rehte hain. Assistant har run ke shuru mein use padhta hai. Yeh *project memory* hai. Yeh project ki deewar par lagi parchi jaisi hai. Tanvi ne pehle use kholi aur ek line jodi: message text kabhi log mein mat likho.

Permission modes bhi hote hain. Padhna khulkar allowed hai. File badalne ya command chalane ke liye kisi ki haan chahiye ho sakti hai.

Imran ne sabse zaroori hissa verifier bataya. *Verifier* ek check hai, jaise ek test ya type check. Yeh assistant ko batata hai ki uska badlaav chala ya nahi, taaki insaan ko har line na padhni pade. Yeh maths ki kitaab ke peeche ki answer key jaisa hai. Jo assistant apna kaam khud check kar sake, use bahut bade kaam diye ja sakte hain. Jo nahi kar sakta, use har step par insaan chahiye, aur phir koi raftaar nahi milti.

Jab kaam bada ho, toh use baanta ja sakta hai. *Sub-agent* ek hissa leta hai. Woh apni alag mez par (apne alag context mein) kaam karta hai aur sirf result wapas deta hai. Isse main mez chhoti aur saaf rehti hai. Imran ne kaha, yeh sab samajh ke baare mein nahi hai. Yeh loop, memory aur check ke baare mein hai. Yeh sab report mein kaam aa sakta tha.

## Fences kahan lagte hain

Agla sabak us hafte ki ek khabar se aaya. Ek assistant kisi ke apne computer par chalta tha. Use unki files, messages aur shell (command line) par poori chhoot thi. Woh lagbhag kuch bhi kar sakta tha, aur isliye kaam ka tha. Woh lagbhag kuch bhi kar sakta tha, aur isliye khatarnak tha. Tanvi ne whiteboard par chaar sawaal likhe jaise Imran ne diye. Table har sawaal ke saath uska control dikhata hai.

Table: Tool ki pahunch ke baare mein chaar sawaal
| Sawaal | Control |
| --- | --- |
| Woh kaun se tools call kar sakta hai? | Ek *allowlist*: un cheezon ki list jo system ko karne ki ijaazat hai, aur jo usmein nahi hai woh mana |
| Kis scope ke saath? | Jahan ho sake read-only; ek folder, ek channel, ek customer |
| Kin calls ko insaan ki approval chahiye? | Jo kuch bhejta, delete karta, paisa deta hai, ya undo nahi ho sakta |
| Uske paas kya pahunch sakta hai? | Koi bhi text jo woh padhta hai, jaise tickets, email ya web page, usmein attacker ke likhe orders ho sakte hain |

Allowlist ko shaadi ke gate ki guest list samjhiye. Naam list mein nahi, toh andar nahi. Anaya ne aakhri sawaal pehchaan liya. Yeh Chapter 24 ka trifecta tha: private data, baahar walon ka text aur bhejne ka ek raasta. Tools ke har combination mein, usne kaha, teeno mein se kam se kam ek hata do.

Imran ne ek rule jodha. Chhote se shuru kijiye. Pehle se chune gaye saboot par hi chauda kijiye. "Ek mahine se theek chal raha hai" saboot nahi hai. "Chalis approvals sab mein sahi tha aur log mein kuch blocked nahi dikha" saboot hai.

## Ek report, do baar banayi

Tanvi ke kaam mein ek pench tha, jo Imran ko sabse pasand tha. Use report do baar banani thi.

Pehla version ek *state machine* tha. Yeh fixed khaanon wale board game jaisa hai. Uske code ne har step aur ek step se doosre par jaane ki har allowed chaal tay ki. Usne numbers ikatthe kiye. Usne model se draft likhwaya. Usne draft ko numbers se milaya. Phir draft approval ke liye bheja. Check fail hota, toh ek baar aur koshish karta. Phir ruk jaata aur bata deta.

Doosra version ek bounded agent tha. Use tools ki ek list, steps ka ek budget aur kaam mila. Model ne khud chuna ki kya karna hai.

Dono ko pichhle bees hafton par chalaya gaya. In sab hafton ki report ek insaan pehle hi likh chuka tha.

Table: State machine aur bounded agent, bees hafton par
| Measure | State machine | Bounded agent |
| --- | --- | --- |
| Sahi report wale hafte | 20 mein se 19 | 20 mein se 17 |
| Median time | 40 second | 75 second |
| Failure ka cause dhoondhna | Minutes: fail hota step log mein hai | Kahin zyada: poora trace padhna padta hai |
| Ek unusual hafta | Code change chahiye | Aksar khud adapt ho jaata hai |

Reviewer trace par marks lagata hai taaki agent ka raasta aur uska jawaab dono grade ho. Anaya ne night-queue run ke liye yeh kiya tha, ek step ek row mein. Jis agent ke steps koi nahi padhta, use jaan-boojh kar behtar nahi banaya ja sakta.

Weekly report jaise fixed process ke liye, Imran ne kaha, fixed steps wali machine jeetti hai. Woh zyada sahi aur tez hai. Woh aisi jagah fail hoti hai jo dikhti hai. Agent tab kaam aata hai jab steps sach mein case-case par alag hon.

Usne poocha ki yahan woh kahan hoga. Tanvi ne kaha: pata lagana ki ek customer ka count achanak double kyun hua. Imran maan gaya. Uske liye agent use karo, ek kone mein, chhote budget ke saath.

## Ise bahar jaane dena

Kaam ka aakhri hissa use dara raha tha. Customers ko jaane wali report ko release gate chahiye. Yeh railway signal jaisa hai jo sab check hone tak laal rehta hai. Imran ne use list di.

- Aam tests paas ho.
- Bees hafte line par ya usse upar score karein, aur safety cases mein kuch naya fail na ho.
- Har run ka cost aur time budget ke andar ho.
- Badlaav pehle das mein se ek account par jaye, ek *feature flag* ke peeche. Yeh chalte system mein light ka switch hai. Yeh badlaav ko kuch users ke liye on aur kuch ke liye off karta hai, naye release ke bina.
- Ek rollback trigger aur incident ka owner likha ho.

*Rollback trigger* pehle se laga fire alarm jaisa hai. Yeh ek naapne layak condition hai, pehle likhi hui, jo kisi ko release wapas lene par majboor karti hai. Tanvi ne apna likha. Agar customer jin reports ko useful mark karte hain unka share pichhle hafte se das points se zyada gir jaye, toh roll back karo. Agar koi report galat recipient ko chali jaye, toh roll back karo.

Jo tay karta tha woh on-call engineer tha, jise kisi ki ijaazat nahi chahiye thi. Tareeka flag ko switch karna tha, aur ismein paanch minute se kam lagte. Launch se pehle unhone ise ek baar stopwatch se test kiya.

Unhone yeh bhi likha ki system ko har tarah ki failure par kaise jawaab dena chahiye.

Table: Failure par responses
| Response | Kab | Example |
| --- | --- | --- |
| Retry | Ek temporary error | Ek timeout; ek rate limit |
| Degrade | Ek hissa band hai lekin baaki kaam karta hai | Trend chart ke bina report bhejna |
| Escalate | Output par bharosa nahi kiya ja sakta | Draft apna check do baar fail kare |
| Stop | Ek irreversible action galat dikhta hai | Ek report 5 ki jagah 500 logon ko jaane wali ho |

Imran ne uski pen aakhri row par rok di. Machine kuch aisa karne wali ho sakti hai jo wapas nahi liya ja sakta. Agar action galat lage, woh ruk jaati hai. Der se aayi report khijh hai. Galat paanch sau logon ko gayi report ek vakeel ka khat hai.

Agar kuch galat hota, toh koi do din ke andar ek *incident review* likhta. Yeh ek page hai jo batata hai ki kya hua, kyun hua, aur kaun sa check use pakad leta. Sochiye school ki woh note jo fire drill galat hone ke baad likhi jaati hai. Usmein ek check ka naam hota hai, kisi insaan ka dosh nahi.

Tanvi ne Shukrawaar ko poora kiya. Pehli report sirf ek account ko gayi, flag ke peeche, shaam chaar baje. Imran teen baar uski desk ke paas se guzra aur kuch nahi bola. Report pahunchi, aur sahi thi. Usne flag off kiya, phir wapas on, yeh saabit karne ke liye ki woh kar sakti hai.

## Saar

Ek AI product ko lagbhag gyarah kaam chahiye. Tools ko bharne ke slots ki tarah sochiye. Har kaam ke liye ek tool chuniye is hisaab se ki use kya karna hai aur kya kabhi galat nahi hona chahiye.

- Har stack ko do audits chahiye. Kisi bhi AI summary ke das claims ko unke sources se milaiye. Har tool ke liye likhiye ki woh kya store karta hai aur uski keys kahan hain.
- Model product ka ek hissa hai. Baaki harness hai, jiske saat hisse hain: context, tools, state, orchestration, policy, evals aur observability. Quality ki zyadatar dikkatein wahin hoti hain.
- Coding assistants ek saadha loop chalate hain. Woh kuch aam tools use karte hain aur project rules ek file mein rakhte hain. Woh risky kaam ke liye permission maangte hain aur sabse zyada verifier par tikte hain.
- Tool access ek allowlist ho, scope mein tang. Jo wapas nahi liya ja sakta, uske liye approval chahiye. Ise sirf pehle se chune saboot par chauda kijiye.
- Fixed process ke liye state machine aam taur par agent se behtar hoti hai. Is choice ko wahi cases par naapiye. Badlaav gate aur flag ke peeche jaata hai, ek rollback trigger, ek named owner aur har tarah ki failure ke plan ke saath.

Tools taiyaar hain. Ab team product ko asli logon ke saamne rakh sakti hai.

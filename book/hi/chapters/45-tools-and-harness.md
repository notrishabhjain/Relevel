---
title: Tools Aur Harness
summary: Ek naya engineer poochhta hai ki kaun sa tool kis kaam ka hai, aur ek purana engineer brands ki list ki jagah slots ka ek drawing banakar jawaab deta hai. Phir wahi engineer ek saptahik report do baar banane ke liye diya jaata hai, ek baar tay charno ke saath aur ek baar agent ke saath, aur dono ko usi bees hafton par naapa jaata hai.
course: b4 b5
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

Tanvi Kulkarni March ke ek Monday ko Imran ki team mein shaamil hui, aur Wednesday tak uske paas ek sawaal tha jo poochhne mein use sharm aa rahi thi.

Usne aakhirkaar use whiteboard par poochha, ek aise insaan ki awaaz mein jo kuch kabool kar raha ho. "Team channel mein lagbhag satrah tools hain. Sab unka zikr aise karte hain jaise mujhe pehle se pata ho. Mujhe kaun se seekhne hain?"

Imran ne apni pen band ki aur rakh di. Anaya ne use pehli baar kisi sawaal se khush dekha.

"Koi nahi," usne kaha. "Abhi nahi. Slots seekho."

## Slots, brands nahi

Usne dibbon ka ek column banaya. Har ek mein usne kisi product ka naam nahi balki ek kriya-vaakyansh likha, aur Tanvi ne, unhe notebook mein utaarte hue, dekha ki jin naamon ki use chinta thi unme se zyadatar gayab ho gaye the.

Ek AI product ko, Imran ne kaha, pehle idea se aakhri shikayat tak lagbhag gyarah cheezein karwani padti hain. Kuch jo aapke diye text par *tark kare aur draft likhe*. Kuch jo *sirf aapke upload kiye sources se jawaab de*, aise citations ke saath jo aap jaanch sakein. Kuch jo *ek vivaran ko ek kaam karti screen mein badle*, itni jaldi ki ek user use aazma sake. Kuch jo *aapka code padhe, files edit kare aur commands chalaye* jabki ek insaan dekhta hai. Kuch jo *ek trigger, ek call, ek jaanch aur ek manzoori ko ek aisi prakriya mein jode* jo har baar ek jaise chalti hai. Kuch jo *ek exact request bheje aur jawaab ko* ek dohrane yogya test ke roop mein *save kare*. Kahin jo *code ka har version rakhe aur har badlaav ki samiksha kare*. Kuch jo *har push par deploy kare aur minuton mein roll back kare*. Ek database jisme *sign-in, tables aur niyam hon ki kaun kaun si row dekh sakta hai*. Ek tareeka jo *events record kare aur funnels banaye*. Aur ek tareeka jo *ek request ko ant se ant tak follow kare*, kitna kharcha aur kitni der lagi uske saath.

"Yeh *toolchain* hai," usne kaha. "Tools ka set jo product banata aur chalata hai, par slots ki tarah socha gaya. Har slot ka ek kaam hai, aur har kaam ke liye humne ek tool chuna hai, is quarter, kyunki usne kaam kaafi achhe se kiya aur humare log use jaante the. Agle saal slot mein naam alag ho sakta hai. Slot rahega."

"Vikalp khula kyun nahi rakhte? Sab istemaal kyun nahi karte?"

"Kyunki tum kaam ki jagah interfaces seekhogi." Usne teesre dibbe par thapki di. "Zyadatar projects inme se paanch ya chhe istemaal karte hain, gyarah nahi. Galti har dibbe ko ek vishay maanna hai jise mastar karna hai. Yeh ek tool rakhne ki jagah hai. Poochho ki use tumhare liye kya karna hai, aur jab woh karta hai toh kya kabhi galat nahi hona chahiye. Phir chuno, aur kaam seekho."

Anaya, apne desk se sunte hue, ne socha ki yeh wahi sabak tha jo use pehle hafte mein requirements ke baare mein diya gaya tha. *Tool ka naam lene se pehle kaam batao.* Yeh poore peshe ka sabak lagta tha.

## Do audit

Usne Tanvi ko do aadatein di jo woh ek kaam se doosre kaam tak le jaaye, aur pehli Anaya ki ek galti se aayi.

Pichhle mahine, usne Mr. Menon ka security questionnaire, chaalees page ka, ek aise research assistant ko upload kiya tha jo sirf diye documents se jawaab deta hai. Usne ek saaf saar likha tha aur har vaakya ke saath ek source jod diya tha. Use uspar kaafi garv tha.

Imran ne use ek *claim audit* karne ko kaha. Use saar mein se das daave chunne the aur har ek ko us page se jaanchna tha jo usne cite kiya, use *samarthit*, *aanshik roop se samarthit* ya *asamarthit* chinhit karte hue. Usme use chaalees minute lage. Saat theek the. Do aanshik roop se sahi the, is arth mein ki page ne kuch milta-julta par sankra kaha tha. Ek asamarthit tha: saar ne kaha ki lender ko ek khaas certificate chahiye, aur document mein kuch nahi kehta tha.

"Das mein se ek," Imran ne kaha. "Das mein se ek ya do se zyada, aur tum faislon ke liye us prakriya par bharosa karna band kar deti ho, chahe kaun sa tool use banata ho. Kam, aur tum use istemaal kar sakti ho, par tumne seekh liya ki haath se kya jaanchna hai."

Doosri aadat ko usne saaf-saaf secrets-and-data audit kaha. Stack ke har tool ke liye, likho ki woh kya store karta hai aur uski keys kahan rehti hain. Unhone use us dopahar kiya, aur list use pasand se zyada lambi thi. Code host mein code tha aur koi secrets nahi, jo usne history mein khoj karke saabit kiya. Hosting company ne model key aur database key ko settings ke roop mein rakha tha, aur request logs rakhte the. Database mein accounts aur nateeje the, har table par ek niyam ke saath. Analytics tool mein events aur account numbers the aur koi message text nahi, jo Karan pehle hi confirm kar chuka tha. Model provider ko har woh message ka text milta tha jo jaanch ke liye bheja jaata, aur isliye uski retention policy woh cheez thi jo usne do baar padhi thi.

Phir Tanvi ne, jo shaant thi, apne browser mein demonstration page kholi, ek key dabayi, aur bilkul sthir ho gayi.

"Anaya? Woh page jo tumne January mein generate karwaya tha. Script mein ek lambi string hai. Yeh key jaisi lagti hai."

Woh key thi. Jis tool ne ek vivaran ko screen mein badla tha usne model provider ka raaz us code mein daal diya tha jo har visitor ko bheja jaata hai, jahan browser wala koi bhi use padh sakta tha. Uske database mein bhi koi niyam nahi tha ki kaun kya padh sakta hai. Imran ne key ek ghante ke andar badli, call ko server ke peeche kiya, aur dono findings log mein likhin. "Prototypes aisa karte hain," usne kaha. "Link share karne se pehle jaancho."

## Model ke aas-paas kya hai

Guruvaar ko Imran ne Tanvi ko uska pehla asli kaam diya, aur usne shuru mein woh shabd le liya jo woh istemaal karne wali thi.

"Mat kaho 'AI yeh karta hai.' Model text leta hai aur text deta hai. Bas itna hi woh karta hai. Baaki sab jo product ko kaam karwata hai woh uske aas-paas bana hota hai, aur us aas-paas ki sanrachna ka ek naam hai." Usne model ke dibbe ke charon taraf ek ghera banaya. "*Harness*."

Ek harness ke, usne kaha, saat hisse hain, aur jo product ko debug kar raha ho use unme se har ek dhoondh paana chahiye.

| Hissa | Woh kya karta hai | Monday ki report mein |
| --- | --- | --- |
| Context | Banata hai ki model har call par kya dekhta hai | Hafte ki ginti, pichhle hafte ki ginti, nirdesh |
| Tools | Model ko padhne ya karne deta hai | Hafte ke numbers laao; customer ka plan dhoondho |
| State | Charno aur haftoon ke aar-paar yaad rakhta hai | Pichhle hafte ke figures; kin customers ka ho chuka |
| Orchestration | Tay karta hai ki agla kya chalega | Ikattha karo, phir draft karo, phir jaancho, phir bhejo |
| Policy | Woh niyam jise model override nahi kar sakta | Manzoori ke bina kuch nahi bheja jaata; logs mein koi message text nahi |
| Evals | Badlaav se pehle aur baad quality jaanchta hai | Bees pichhle hafte, ek insaan ki likhi reports ke saath |
| Observability | Record karta hai ki kya hua | Har run ka ek trace, tokens, kharche aur samay ke saath |

"Do products wahi model istemaal karke bilkul alag behave kar sakte hain," Imran ne kaha. "Iske kaaran. Lagbhag har quality problem jiska tum peecha karogi is table mein hai, model mein nahi."

Kaam woh Monday ka email tha jo Anaya ne sardiyon mein varnan kiya tha, woh ek line jo ek compliance buyer ko batati thi ki guard ne kitni details chhupayin. Use ek asli saptahik report banna tha, ek ginti, ek trend aur anishchit cases ki ek chhoti list ke saath.

## Coding assistants kaise bante hain

Ise karne ke liye Tanvi ko ek coding assistant istemaal karna tha: ek program jo ek repository padhta hai, files edit karta hai aur commands chalata hai jabki ek insaan dekhta hai. Imran ne kaha ki yeh samajhna zaroori hai ki yeh kaise bante hain, kyunki woh sabse zyada istemaal hone wale agents hain aur unka design un patterns se bhara hai jo ek product udhaar le sakta hai.

Ek loop hai, ek saral. Model ek tool chunta hai. Harness use chalata hai. Nateeja model ko wapas jaata hai, aur chakra tab tak dohrata hai jab tak kaam ho na jaye. Tools kam aur aam hain: ek file padho, ek file badlo, search karo, ek command chalao. Kuch lachile tools darjanon sankre tools se behtar nikalte hain. Project ke niyam code ke saath rakhi ek saadi file mein hote hain, jise assistant har run ki shuruaat mein padhta hai. Yeh *project memory* hai, aur Tanvi ka pehla kaam use kholna aur ek line jodna tha: *kabhi message text ko log mein mat likho.*

Permission modes hain. Padhna khule taur par allowed hai. Ek file badalna, ya ek command chalana, kisi ke haan kehne ki maang kar sakta hai. Aur woh hissa hai jise Imran ne sabse zaroori kaha. "Ek *verifier*." Ek test, ek type check, kuch bhi jo assistant ko batata hai ki uska badlaav kaam kiya ya nahi, bina kisi insaan ke har line padhe. Ek assistant jiske paas apna kaam jaanchne ka bharosemand tareeka ho use kahin bade kaam diye ja sakte hain. Jiske paas nahi, use har kadam par ek insaan chahiye, aur phir aapne koi raftaar nahi kharidi.

Jab ek kaam bada ho, toh kaam baanta ja sakta hai: ek madadgaar, ek *sub-agent*, ek hissa leta hai, apne alag context mein kaam karta hai, aur sirf nateeja lautata hai, taaki mukhya baatcheet chhoti aur saaf rahe.

"Dhyaan do ki isme se kuch bhi buddhi ke baare mein nahi hai," Imran ne kaha. "Yeh loop, memory aur jaanch ke baare mein hai. Tum isme se sab report mein istemaal kar sakti ho."

## Deewarein kahan lagti hain

Agla sabak us hafte ki ek khabar se aaya, ek aise assistant ki jo kisi ke apne computer par unki files, messages aur shell ki puri chhoot ke saath chalta tha. Woh lagbhag kuch bhi kar sakta tha, jo use upyogi banata tha. Woh lagbhag kuch bhi kar sakta tha.

Tanvi ne chaar sawaal whiteboard par banaye jaise Imran ne unhe diye. Woh kaun se tools bula sakta hai? Ek *allowlist* hai: un akeli cheezon ki list jo system kar sakta hai, jo uspar nahi hai woh mana. Kis daayre ke saath? Jahan sambhav ho sirf padhne wala; ek folder, ek channel, ek customer. Kin calls ko insaan ki manzoori chahiye? Woh sab jo bhejta, mitata, bhugtaan karta ya palta nahi ja sakta. Aur use kya pahunch sakta hai? Koi bhi text jo woh padhta hai, jaise tickets ya email ya web page, ek hamlavar ke likhe hukm rakh sakta hai.

"Wahi trifecta hai," Anaya ne kaha, jo use bhooli nahi thi. Nijee data, bahari logon ka text, aur bhejne ka tareeka. Tools ke har milan ke liye, usne kaha, teeno mein se kam se kam ek hata do.

"Aur sankra shuru karo," Imran ne joda. "Ijaazat sirf us saboot par badhao jo tumne pehle chuna. 'Ek mahine tak theek raha' saboot nahi hai. 'Chaalees manzooriyon mein sab par sahi tha aur log mein kuch roka gaya nahi dikhta' hai."

## Ek report, do baar banayi

Tanvi ke kaam mein ek pench tha, jo Imran ki pasandeeda kism ka tha. Use report do baar banani thi.

Pehla ek *state machine* tha: ek workflow jisme uska code har charan aur ek se doosre tak har permitted chaal tay karta tha. Numbers ikattha karo. Model se draft karne ko kaho. Draft ko numbers se jaancho. Use manzoori ke liye bhejo. Agar jaanch fail ho, toh ek baar aur koshish karo, phir ruko aur kaho.

Doosra ek bounded agent tha. Use tools ki ek list di gayi, kadmon ka ek budget, aur kaam, aur model ne chuna ki kya karna hai.

Unhone dono ko usi bees pichhle haftoon par chalaya, jinki report ek insaan pehle hi likh chuka tha. Nateeje ek card par gaye.

| Naap | State machine | Bounded agent |
| --- | --- | --- |
| Sahi report wale hafte | 20 mein se 19 | 20 mein se 17 |
| Madhya samay | 40 second | 75 second |
| Failure ka karan dhoondhna | Minute: failing charan log mein hai | Kahin zyada: poora trace padho |
| Ek ajeeb hafta | Code badlaav chahiye | Aksar apne aap dhal jaata hai |

"Ek tay process ke liye, ek saptahik report, tay charno wali machine jeetti hai," Imran ne kaha. "Woh zyada accurate hai, tez hai, aur ek aisi jagah fail hoti hai jo tum dekh sakti ho. Agent apni jagah tab kamata hai jab charan sach mein ek case se doosre mein badalte hain. Yahan woh kahan hoga?"

Tanvi ne socha. "Yeh dekhna ki ek customer ki ginti achanak doguni kyun ho gayi."

"Haan. Wahan agent istemaal karo. Aur use ek kone mein, chhote budget ke saath rakho."

## Ise bahar jaane dena

Kaam ka aakhri hissa woh tha jisne use daraya.

Ek report jo customers ke paas jaati hai uska ek release gate hota hai, Imran ne kaha, aur usne use list di. Aam tests paas hon. Bees hafte line par ya upar score karein, safety cases mein kuch naya fail hue bina. Prati run kharcha aur samay budget ke andar ho. Badlaav pehle das mein se ek account ko jaata hai, ek *feature flag* ke peeche, chalte system mein ek switch jo ek badlaav ko kuch ke liye on aur doosron ke liye off karta hai bina nayi release ke. Aur *rollback trigger* aur ek ghatna ka malik likhe gaye hon.

*Rollback trigger* ek shart hai, pehle se likhi aur naapne yogya, jo kisi ko release palatne par baadhya karti hai. Tanvi ne apna likha: *Roll back karo agar customer dwara useful chinhit reports ka hissa pichhle hafte se das points se zyada gire, ya agar koi report galat recipient ko jaaye.* Jo tay karta hai woh on-call engineer tha. Use kisi ki ijaazat ki zaroorat nahi thi. Tareeka flag ko switch karna tha, aur samay paanch minute se kam. Unhone launch se pehle ek baar ise stopwatch ke saath test kiya.

Unhone yeh bhi likha ki system ko har kism ki failure par kaise respond karna chahiye.

| Response | Kab | Udaharan |
| --- | --- | --- |
| Retry | Ek asthayi error | Ek timeout; ek rate limit |
| Degrade | Ek hissa band hai par baaki kaam karta hai | Trend chart ke bina report bhejo |
| Escalate | Output par bharosa nahi kiya ja sakta | Draft apni jaanch mein do baar fail ho |
| Stop | Ek anivartaniya karyavahi galat dikhti hai | Ek report paanch ki jagah paanch sau logon ko jaayegi |

Aakhri line par Imran ne uski pen rok di. "Yahi wahi hai jo maayne rakhti hai. Agar machine kuch aisa karne wali hai jise woh wapas nahi le sakti, aur woh galat dikhta hai, toh woh ruk jaati hai. Ek der se pahunchi report ek asuvidha hai. Galat paanch sau logon ko gayi report ek vakeel ka patra hai."

Aur agar kuch galat ho jata, usne kaha, toh koi do din ke andar ek *incident review* likhta: ek page jo kehta hai ki kya hua, kyun, aur kaun si jaanch use pakad leti. Yeh nahi ki kaun doshi hai. Kaun si jaanch.

Tanvi ne ise ek Friday ko khatam kiya. Pehli report ek akele account ko gayi, flag ke peeche, shaam chaar baje, aur Imran uski desk ke paas se teen baar guzra bina kuch kahe. Woh pahunchi. Woh sahi thi. Usne flag ko wapas off kiya, aur phir on, yeh saabit karne ke liye ki woh kar sakti hai.

## Saath le jaane layak baatein

Ek AI product ko apne liye lagbhag gyarah kaam karwane padte hain, aur tools ke baare mein sochne ka kaam ka tareeka unhe bharne ke slots ki tarah dekhna hai, har kaam ke liye ek tool chunna is aadhar par ki use kya karna hai aur kya kabhi galat nahi hona chahiye, aur brand ki jagah kaam seekhna. Har stack ke saath do audit chalte hain: kisi bhi AI saar ke das daave unke sources se jaancho, aur har tool ke liye likho ki woh kya store karta hai aur uski keys kahan rehti hain. Model product ka ek hissa hai; baaki, harness, ke saat hisse hain, yaani context, tools, state, orchestration, policy, evals aur observability, aur zyadatar quality problems wahin rehti hain. Coding assistants ek saral loop chalate hain, kuch aam tools istemaal karte hain, project ke niyam ek file mein rakhte hain, jokhim bhare kaamon ke liye manzoori maangte hain aur sabse upar ek verifier par bharosa karte hain. Tool access ek allowlist hona chahiye, daayre mein sankra, kisi bhi aisi cheez ke liye manzoori ke saath jo palti nahi ja sakti, aur sirf pehle se chune hue saboot par badhayi jaaye. Ek tay process ke liye ek state machine aksar ek agent se behtar hoti hai, aur chunav usi cases par naapa jaana chahiye. Aur ek badlaav ek gate aur ek flag ke peeche, ek rollback trigger, ek naam wale malik aur har kism ki failure ke liye ek plan ke saath bahar jaata hai.

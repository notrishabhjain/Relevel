---
title: Log Product Kaise Dhoondhte Hain Aur Kyun Tikte Hain
summary: Jis tool ko koi dhoondh hi nahi paata, woh kisi ki hifaazat nahi karta. Paanch developers ko sirf ek README diya jaata hai, stopwatch dikhata hai ki woh kahan chhod dete hain, aur ek spelling checker dikhata hai ki value ka pehla pal kahan aana chahiye. Chapter mein AARRR, activation, time-to-value, Fogg behaviour model, product-led growth, growth loop, network effect, virality aur dark pattern aate hain.
course: b2
goals:
  - AARRR ke paanch stages ke naam bata paana, aur har stage ko ek ginne layak event dena
  - activation moment dhoondhna aur time-to-value naapna, aur value ko mehnat se pehle laana
  - Fogg behaviour model ko prompt, ability aur motivation ko ulte order mein check karke lagana
  - virality aur network effect mein farq pehchaanna, customer tak pahunchne ka route chunna, aur dark patterns se mana karna
terms:
  - AARRR | growth ke paanch stages, har ek ko ek ginne layak event diya gaya: acquisition, activation, retention, referral aur revenue | 
  - activation moment | woh pehli baar jab user ko woh value milti hai jiska product waada karta hai; usse pehle ka sab kuch user ke liye cost hai | 
  - time-to-value | ek naye user ko activation moment tak pahunchne mein kitna time lagta hai, sign-up se naapa hua | 
  - Fogg behaviour model | yeh idea ki koi behaviour tab hota hai jab motivation, ability aur prompt ek hi pal mein milte hain; agar nahi ho raha, toh in teeno ko ulte order mein check kijiye | 
  - product-led growth | customers aise jeetna ki users khud sign up karein aur khud value paayein, aur unmein se kuch upgrade karein; yeh tab fit hota hai jab value minutes mein dikhe aur price kam ho | PLG
  - growth loop | ek cycle jisme ek user ke actions agle user ko laate hain, taaki output wapas input ban jaye | growth loops
  - network effect | product ka sabke liye behtar hona jaise-jaise zyada log use karein, jo is se alag hai ki users doosre users ko laayein | network effects
  - virality | users ka doosre users ko laana | viral
  - dark pattern | aisa design jo users ko apne hi khilaaf kaam karne par dhokhe se majboor kare, jaise pehle se tick kiya box, jhoothi kami ya chhupa hua cancellation | dark patterns
---

January ke teesre hafte mein paanch developers ek table ke ek taraf, ek line mein baithe the, har ek ke saamne laptop. Har kisi ke chehre par halka sa doshi bhaav tha, un logon jaisa jinhe kisi experiment mein hissa lene ko kaha gaya ho aur jinhe pata nahi ki kya naapa ja raha hai.

Anaya ne unhe kaagaz ka ek hi page diya tha: README, jo developer kit ka pehla instructions wala page hota hai. Uske alawa unke paas kuch nahi tha. Na demo, na call, na madad. Table par ek stopwatch rakha tha. Usne kaha tha: ise ek chhote chat program mein jodiye, ek message saaf kijiye, aur jab ho jaye toh mujhe bataiye. Main madad nahi karungi. Phir woh khidki ke paas peeche haath baandh kar khadi ho gayi, kyunki haathon ko rokne ka yehi ek tareeka tha.

Kit live tha, aur Mr. Menon ki company ne ek trial sign kar liya tha. Ab asli baat yeh thi ki koi aur ise use kar sakta hai ya nahi. Yeh chapter batata hai ki stopwatch ne kya dikhaya, aur isne yeh kya sikhaya ki log product ko kaise dhoondhte hain aur uske saath kaise tikte hain.

## Case: paanch developers aur ek stopwatch

Imran Qureshi ne use pehle hi bata diya tha ki use kya seekhne ko milega, ek aise sentence mein jo use pasand tha: agar log tikte nahi, toh zyada sign-ups ka matlab bas yeh hai ki aap logon ko aur tezi se kho rahe hain.

## Ek funnel aur uski limits

Growth ke paanch stages hain, ek yaad rakhne layak shorthand ke saath: *AARRR*. Ye letters acquisition, activation, retention, referral aur revenue ke liye hain. Har stage par pehla kaam ek aisa event chunna hai jise gina ja sake. Table mein har stage ke liye guard ka event hai.

Table: Paanch stages aur har ek ke liye guard ka event
| Stage | Sawaal | Guard ka event |
| --- | --- | --- |
| Acquisition | Kya woh aaye? | Ek developer demo page kholta hai aur ek message paste karta hai |
| Activation | Kya unhe value mili? | Kit unke apne project ke andar ek message saaf karta hai |
| Retention | Kya woh wapas aaye? | Chaar hafte baad bhi woh chal raha hai, aur messages saaf kar raha hai |
| Referral | Kya woh doosron ko laaye? | Doosri company ka ek colleague share kiye gaye link se demo page kholta hai |
| Revenue | Kya unhone paisa diya? | Woh trial se ek plan par jaate hain |

Anaya jaanti thi ki yeh tasveer cheezon ko saral banati hai. Yeh ek seedhi line ka ehsaas deti hai, jabki asli log shared links se aate hain aur mahino baad wapas aate hain. Yeh team ko funnel ke upar se cheezein theek karna shuru karne ke liye bhi bulaati hai. Lekin jo stage aam taur par tay karta hai ki product chalta hai ya nahi, woh retention hai, aur funnel use chauthe number par rakhta hai.

## Value ka pehla pal

Us subah Anaya ko jo measure sabse zyada maayne rakhta tha, woh woh tha jo tay karta hai ki koi aage ke stages tak kabhi pahunchega ya nahi. Yeh hai *activation moment*: woh pehli baar jab user ko woh value milti hai jiska product waada karta hai.

Guard ke liye yeh woh pal tha jab developer apna message, jisme Aadhaar number tha, doosri taraf se is tarah nikalta dekhta ki number gayab hai. Us pal se pehle ka sab kuch user ke liye cost hai. Yeh woh mehnat hai jo kuch achha hone se pehle lag rahi hai. Is pal tak pahunchne mein kitna time lagta hai, ise *time-to-value* kehte hain, aur ise us pal se naapte hain jab insaan shuru karta hai.

Stopwatch ne use times de diye, aur usne unhe aate hi likh liya.

Table: Paanch developers kahan tak pahunche
| Step | Kitne developers ne khatam kiya | Median time |
| --- | --- | --- |
| README kholna | 5 mein se 5 | 1 minute |
| Account banana aur key lena | 5 mein se 4 | 7 minute |
| Kit install karna | 5 mein se 4 | 11 minute |
| Pehla message saaf karna | 5 mein se 3 | 24 minute |

Ek developer account par ruk gaya. Ek aur chauthe step par kho gaya. Teen value ke pal tak pahunche, median mein 24 minute baad. Jo developer pehli rukawat par chala gaya tha, usne ek chhota note chhoda tha, jo Anaya ne unke jaane ke baad padha: "main bhi yahin se chala jaata." Imran ne uske kandhe ke upar se dekhte hue kaha ki log mushkil hisse par nahi jaate. Woh usse pehle chale jaate hain.

Ilaaj use agle kuch dinon mein soojha. Agar value ka pehla pal account se pehle aa jaye toh? Demo page developer ko apna ek message paste karne aur use saaf hota dekhne de sakta tha, bina kisi sign-up ke. Tab activation moment mushkil step se pehle aa jaata. Jab tak unse email maanga jaata, tab tak woh ise kaam karte dekh chuke hote.

## Raat ke khaane par ek teardown

Us hafte Anaya ne woh kiya jo woh teen mahine se taal rahi thi. Usne ek aisa product khola jisne yeh problem pehle hi solve kar li thi. Usne ek aisa chuna jo Farah har waqt use karti thi, ek spelling aur writing assistant jo aap jo bhi type kar rahe hon, usi ke andar baitha rehta tha.

Dono ne use stage-by-stage dekha, Farah ke sofa par, beech mein uska laptop rakhkar. Unhone note kiya ki har stage par kya hota tha, aur kya copy kiya ja sakta tha.

Table: Ek writing assistant ka teardown
| Stage | Kya hua |
| --- | --- |
| Acquisition | Logon ne uske suggestions un tools mein dekhe jo woh pehle se use karte the, aur ek free plan ne use phailaya |
| Activation | Uski apni likhai mein pehla underline kiya hua suggestion, kuch second ke andar |
| Retention | Woh wahin rehta tha jahan log pehle se likhte hain, isliye koi nayi aadat banani nahi padi |
| Revenue | Zyada advanced suggestions ek paid plan ke peeche the |

Farah ne poocha ki Anaya kya copy karegi. "Value ka pal," usne dheere se kaha. Woh user ke apne kaam mein hota hai. Woh kisi alag page par nahi hota, na setup ke baad.

Use samajh aaya ki kit ki value developer ke apne chat program ke andar hai. Demo page uska ek stand-in tha, aur achha stand-in tha. Lekin asli activation tab hota jab kit unke code mein ho. Maksad pehle aur doosre ke beech ka raasta chhota karna tha.

## Kya insaan ko kaam karwata hai

Retention ke liye Anaya ek model ki taraf mudi jo Dr. Meenakshi Rao ne behaviour ki study se bataya tha. Insaan koi kaam tab karta hai jab teen cheezein ek hi pal mein milti hain: woh karna chahta hai, woh kar sakta hai, aur kuch use karne ko prompt karta hai. Yehi *Fogg behaviour model* hai.

Iska rule kaam ka hai. Jab koi behaviour nahi ho raha, toh in teeno ko ulte order mein check kijiye. Prompt ka na hona sabse sasta theek hota hai. Phir ability aati hai. Aakhir mein motivation, jo hilana sabse mushkil hai.

Ek compliance buyer ke liye prompt dekhna aasaan tha. Woh Monday ka ek email tha jisme ek line hoti, jaise "Is hafte guard ne 87,000 messages mein 1,204 details hide kiye. Do ko review ke liye flag kiya gaya." Ise kholne mein koi mehnat nahi lagti, aur yeh buyer ko yaad dilata ki unke paas yeh tool kyun hai. Ek developer ke liye prompt ab tak ka sabse achha README tha, aur ability yeh thi ki karne ko kitna kam bacha tha.

Team ne har hafte ke naye users ka retention curve bhi dekha. Jo line girti hai aur phir chapti ho jaati hai, uska matlab kisi ko tikne wala use mil gaya hai. Jo line girkar zero ho jaati hai, uska matlab nahi mila.

## Customer kaise aata hai

Anaya ne woh teen raaste banaye jinse ek customer kisi product ke baare mein sunne se paisa dene tak jaata hai.

Table: Paying customer tak teen raaste
| Raasta | Kaise kaam karta hai | Kab fit hota hai |
| --- | --- | --- |
| Product-led growth | Log sign up karte hain aur khud value paate hain, aur kuch upgrade karte hain | Value minutes mein dikhe aur price kam ho |
| Sales-led | Ek insaan demos aur contract sambhalta hai | Deal bada ho ya security review chahiye |
| Beech ka | Pehle individuals product apnate hain, aur jab unki team badhti hai toh ek salesperson aata hai | Aisa product jo ek insaan try kar sake lekin ek team ko approve karna pade |

Guard beech mein baitha tha. Ek akela developer demo ko khud try kar sakta tha. Lekin poora chat system jodne ka matlab tha us security lead se guzarna jise Mr. Menon "the Wall" kehte the. Anaya ko dikha ki yehi woh pal tha jab ek insaan kaam aata.

## Ek badge, aur ek line jo woh paar nahi karegi

Aakhri baat ek loop ki thi. *Growth loop* ek aisa cycle hai jisme ek user ke actions agle user ko laate hain, taaki output wapas input ban jaye. Anaya ne chat window ke neeche ek chhote nishaan ke baare mein socha: "Protected by Bharat Privacy Guard", ek link ke saath. Customer ka customer ise dekhega, aur ek aur developer is par click kar sakta hai.

Woh do terms ke baare mein saavdhaan thi. Jab users doosre users ko laate hain, toh woh *virality* hai. Jab product sabke liye behtar hota hai jaise-jaise zyada log use use karte hain, toh woh *network effect* hai. Bahut se products mein pehla hota hai aur doosra nahi, aur use shak tha ki uska product bhi unmein se ek hai.

Positioning ne tay kiya ki kaun sa loop kaam kar sakta hai. Badge samajh mein aata tha kyunki guard un companies ke liye tha jo India mein customers se baat karti hain. Jo company saavdhaan dikhna chahti, woh us nishaan se khush hoti.

Phir usne margin mein ek rule likha, usi haath mein jisme "rarer is not fixed" likha tha.

::: watch Dark patterns nahi chalenge
*Dark pattern* aisa design hai jo user ko apne hi khilaaf kaam karne par dhokhe se majboor kare: pehle se tick kiya hua box, banaayi hui kami, ya cancellation ka button jo koi dhoondh na paaye. Aise designs ek quarter ke liye ek number badha sakte hain. Woh us bharose ko bhi tod dete hain jis par poora product tika hai. Anaya ne Imran se kaha ki customer badge ko bina poochhe band kar sake. Imran ne kaha ki isse thodi visibility jaayegi. "Haan," usne kaha. "Hum ek privacy tool hain. Hume woh nahi hona chahiye jo exit chhupaye."
:::

## Saar

Growth ke paanch ginne layak stages hain: acquisition, activation, retention, referral aur revenue. Jo stage aam taur par tay karta hai ki product chalta hai ya nahi, woh chauthe number par aata hai.

- Activation moment woh pehli baar hai jab user ko promised value milti hai. Ise jitna ho sake jaldi aana chahiye, kyunki uske pehle ka sab kuch user ke liye cost hai. Time-to-value us raaste ko naapta hai, aur is pal ki sabse achhi jagah user ke apne kaam ke andar hai.
- Behaviour tab hota hai jab motivation, ability aur prompt milte hain. Jab woh nahi ho raha, toh unhe ulte order mein check kijiye.
- Customers khud aa sakte hain, salesperson ke zariye, ya dono se. Sahi raasta is par depend karta hai ki value kitni jaldi dikhti hai aur deal kitni badi hai.
- Growth loop users ko la sakta hai, lekin virality network effect nahi hai. Jo design logon ko dhokha deta hai, yaani dark pattern, woh ek number badha sakta hai, aur woh us bharose ko tod deta hai jis par retention tikta hai.

Growth tab hi kaam ki hai jab aap use imaandari se gin sakein, aur agla chapter isi ke baare mein hai.

---
title: Jaadu Ke Neeche Ki Plumbing
summary: Do ghante ka ek outage jisme kisi ne error nahi uthaya, ek product manager ko manata hai ki use us aam software ko, ek plumber ke diagram ke star par, samajhna chahiye jo us ek anishchit hisse ke aas-paas hai.
course: ch8f
terms:
  - Python | woh programming bhasha jisme zyadatar AI ka kaam likha jaata hai; ek product manager ke liye, yeh theek-theek kehne ka tareeka ki ek experiment kya karta hai | 
  - HTTP | niyamon ka woh set jisse programs internet par requests aur jawaab bhejte hain, har jawaab par ek number ke saath jo batata hai ki kaam hua ya nahi | 
  - status code | ek HTTP jawaab par ka number: 200 matlab kaam hua, 4xx number matlab request galat thi, aur 5xx number matlab server fail hua | status codes
  - environment variable | code ke bahar, us jagah rakhi ek value jahan program chalta hai, jahan passwords aur API keys ki jagah hai | environment variables
  - Git | ek tool jo aapke kaam ka har version save karta hai, taaki aap dekh sakein ki kya badla aur kisi bhi pichhle version par wapas ja sakein | 
  - repository | Git mein rakha woh folder jisme ek project ka saara kaam aur uski history hai | repositories
  - experiment runner | ek dobara istemaal hone wala program jo har experiment ke liye inputs, outputs, settings, samay aur errors record karta hai, taaki ek nateeja dohraya aur tulna kiya ja sake | 
  - data contract | ek system ka ek hissa jo data usse milta hai uske baare mein jo anakahe maan leta hai, jaise ki ek field maujood hoga aur ek list khaali nahi hogi | 
---

September ke doosre Thursday ko, do ghante ke liye, guard ne Pune ka har order number chhupa diya, aur kisi ne notice nahi kiya jab tak ek customer ne yeh poochhne ke liye nahi likha ki uske sath kya hua.

Yeh ek chhoti ghatna thi. Farah ke agents pehle hairaan the, phir chidhe hue, phir aavishkaarak: lagbhag chaalees minute tak unhone customers se phone par apne order numbers zor se padhne ko kaha tha. Dashboard hara raha. Imran ne, jab use bataya gaya, bahut kam kaha aur ek pen se banana shuru kar diya.

"Kisi ne error nahi uthaya," usne kaha, jab diagram poora hua. "Isiliye do ghante lage."

## Kya hua

Cheez saadharan thi, aur yahi sabak tha. Guard har barah ank ka number order system mein dhoondhta tha, jaisa use sikhaya gaya tha. Order system us subah kisi aur team dwara update kiya gaya tha. Purane version mein, uske jawaab mein field ka naam tha *order_id*. Naye mein *orderId* tha, ek bade I ke saath.

Guard ne *order_id* maanga aur wahan kuch nahi paya. Woh ruka nahi. Usne chillaya nahi. Use, samajhdaari se, khaali jawaab ko "aisa koi order nahi" maanne ke liye likha gaya tha, aur isliye usne, shishtta se aur lagbhag chaar sau baar, nishkarsh nikaala ki us number ka koi order maujood nahi hai, aur use ek sandehaspad pehchaan ke number ki tarah chhupa diya.

Ek AI application bahut si anakahi maanyataon par nirbhar karta hai jo data usse milta hai uske baare mein. Yeh field wahan hoga. Yeh ek number hoga. Yeh list khaali nahi hogi. Inhe *data contracts* kehte hain, aur production mein inme se har ek aakhirkaar toot jaata hai. Achhi tarah bana system dekhta hai ki koi toota hai aur ruk jaata hai. Buri tarah bana aage chalta rehta hai, aur jo jawaab woh deta hai woh gaayab data par bana hota hai. Is kshetra ki bahut si asli ghatnayein bilkul aisi dikhti hain: koi error nahi, ek hara dashboard, aur ek nateeja jo chupchaap galat hai.

"Yeh machine-learning ki problem nahi hai," Imran ne kaha. "Machine theek thi. Yeh ek aam software failure hai jo ittefaq se ek machine ke bagal mein baithi hai. Aur tum iske baare mein sahi sawaal tabhi poochh sakti ho jab tum diagram padh sako."

## Diagram

Anaya mahino se isse dar rahi thi. Use engineers se baat kar paane ki apni kshamata par chupchaap garv tha, aur use theek-theek pata tha ki uski seema kahan hai. Woh "API" aur "logs" bina jaane keh sakti thi ki woh kya hain. Usne Imran se, kuch ghabrahat ke saath, poochha ki kya woh use ek dopahar dega.

Usne use do ghante, ek whiteboard aur ek upama di.

"Tum ek app mein khaana order karti ho," usne kaha. "Tum tap karti ho. Ek message restaurant ko jaata hai. Ek jawaab daam ke saath wapas aata hai. Tumhari screen badalti hai. Yeh rahasyamay lagta hai jab tak tum messages ko dekh nahi leti. Is dopahar ki har cheez unmein se ek message hai, ya woh jagah jahan ek kho jaata hai."

*Python* pehle aaya, aur usne use turant aashwast kiya ki woh programmer nahi banegi. Yeh woh bhasha hai jisme is kaam ka zyadatar likha jaata hai, aur uske liye baat bas itni thi ki yeh theek-theek kehne ka tareeka hai ki ek experiment kya karta hai. Ek chhota function. Ek dictionary, jo kuch naam wali values ek saath rakhti hai: *naam, pata, kind*. Ek loop, jo ek list ki har cheez ke saath wahi karta hai. "Python grammar wali ek lab notebook hai," usne kaha. "Agar tum padh sakti ho ki woh kya kehta hai, toh tum dekh sakti ho ki experiment wahi hai jo tum sochti ho."

*HTTP* niyamon ka woh set hai jisse programs internet par baat karte hain. Jo hissa maayne rakhta tha woh har jawaab par ek number tha, jise *status code* kehte hain. 200 ka matlab kaam hua. 4 se shuru hone wali koi bhi cheez matlab request galat thi: 401, tum woh nahi ho jo tum kehti ho; 404, yahan kuch nahi; 429, tum bahut tezi se maang rahi ho, dheere karo. 5 se shuru hone wali koi bhi cheez matlab doosri taraf fail hui. "API fail ho gayi" koi spashtikaran nahi hai, usne kaha. Yeh poochhne ki ek shuruaat hai. Kya yeh buri request thi, ek gair-maujood dependency, ya unki taraf ki failure? Har ek ka alag ilaaj hai, aur sirf kuch ko dobara aazmane layak hai.

Agla hissa woh tha jo woh pehle se jaanti thi, ek chetawani bhari kahani ke roop mein. *Environment variable* code ke bahar, us jagah rakhi value hai jahan program chalta hai. Yahi woh jagah hai jahan passwords aur API keys hoti hain, kabhi code mein nahi aur kabhi shared folder mein nahi. Ek prototype jo key leak karta hai woh vishwasniya engineering ka tukda nahi hai.

*Git* woh tha jiska woh intezaar kar rahi thi, aur usne niraash nahi kiya. Yeh ek tool hai jo aapke kaam ka har version save karta hai, kya badla aur kyun ka ek note ke saath, taaki aap kal aur aaj ke beech ka farak dekh sakein aur kisi bhi par wapas ja sakein. Woh folder jisme yeh sab hai ek *repository* hai. Usne apne kaam ko record ki notebook kaha tha; yeh wahi idea tha, vishwasniya banaya hua. "Yaaddasht wali time machine," usne kaha. "Jab kuch toote, toh pehla sawaal hota hai ki kya badla. Git mein tum jawaab de sakte ho."

Usne error padhna seekha. Isme das minute lage aur shaayad dopahar ke sabse kaam ke das minute the. Jab koi program zor se fail hota hai, toh woh ek lamba block chhapta hai jise trace kehte hain, aur pravritti ise upar se padhne ki hoti hai, jahan sabse kam kaam ka hissa hai. Asli karan lagbhag hamesha neeche hota hai.

```
Traceback (most recent call last):
  File "guard.py", line 41, in clean_message
    order = lookup["order_id"]
KeyError: 'order_id'
```

"Aakhri line pehle," Imran ne kaha. "*KeyError, order_id.* Program ne ek aisa field maanga jo wahan tha hi nahi. Line ikatalees. Yahi tumhari poori kahani hai."

"Par yeh toh zor se nahi tha."

"Nahi. Yeh shishta version tha. Asli ne ek aise tareeke se maanga jo field gayab hone par *kuch nahi* lautata hai, aur aage badh gaya. Humne yahi likha tha." Usne gardan ke peeche ragda. "Zor wala version ek tohfa hai. Woh tumhein rokta hai."

## Ek test jo jaan-boojh kar fail hota hai

Usne use aakhri hissa ek khel se sikhaya. Ek chhota test likho: function ko ek aisa order jawaab do jisme *order_id* ho, aur jaancho ki woh pehchana gaya. Woh paas ho jaata hai. Ab use ek *orderId* wala jawaab do, aur poochho ki kya hona chahiye.

"Kya hona chahiye?"

Usne socha. "Use rukna chahiye. Use kehna chahiye ki order system mein kuch galat hai, number mein nahi."

"Toh ise test ke roop mein likho. Pehle ise fail karao, taaki pata ho ki woh ho sakta hai." Usne use likha, aur chalaya, aur woh ek santusht karne wali laal line ke saath fail hua. Usne code theek kiya ki gayab field ko jaanche aur aage chalne se mana kare, aur phir chalaya. Hara. "Jis test ne kabhi fail nahi kiya, use kabhi kuch jaanchta hua nahi dikhaya gaya."

Aur usne ek aakhri baat joda, jo ise maayne deti thi. Guard ne jo bhi message sambhala uska har record ab ek request number, ek samay, code ka version aur status le jaata. "Phir agli baar jab dashboard hara ho aur ek customer likhe, toh hum diagrams nahi banate. Hum search karte hain."

## Runner jo yaad rakhta hai

Aakhri cheez jo usne use dikhayi woh woh thi jo woh do mahine se bana raha tha aur jo usne kabhi kisi ko dikhayi nahi thi.

Yeh ek *experiment runner* tha: ek dobara istemaal hone wala program jo har experiment ke liye inputs, outputs, settings, samay aur errors, sab ek standard roop mein record karta hai. Maqsad ek khaas pul paar karna tha. *Maine aazmaya* aur *maine naapa* ke beech ek khayi hai, aur khayi ka zyadatar hissa bookkeeping hai. Ek prompt do baar chalao aur dono runs save karo. Ek cheez badlo. Logs dekho aur turant dekho ki kya badla.

"Agar main kal ka nateeja dohra nahi sakta, toh mere paas nateeja nahi hai," usne kaha. "Mere paas ek kissa hai."

Anaya ne uski screen par folder dekha. Usme ek README tha. Usme ek list thi ki ise chalane ke liye kya chahiye. Usme May ke baad ke har experiment ka ek log tha. Use pehli raat ki apni notebook ki entry yaad aayi, *kuch bhi tab tak nahi ginta jab tak koi aur use jaanch na sake*, aur usne samjha ki woh yahi kehna chahti thi, aur ki use nahi pata tha ki ise kaise banayein.

## Kaafi kaisa dikhta hai

Paanch baje usne usse poochha ki usne kya seekha, aur usne use shabdon ki list nahi di. Usne diagram ke peeche woh likha jo ab woh kar paayegi.

*Main ek request, ek jawaab aur ek status code padh sakti hoon. Mujhe pata hai ki key kahan jaati hai. Main poochh sakti hoon ki kya badla, aur pata laga sakti hoon. Main error neeche se padhti hoon. Mujhe pata hai ki test ko ek baar fail hona chahiye. Aur jab koi kahe "API fail ho gayi", toh main poochh sakti hoon ki kis taraf.*

Yeh ek chhoti list thi. Yeh kuch nahi nahi thi. Iska matlab tha ki jab ek engineer use ek diagram dikhaye, woh hisson ko pehchaan legi.

Page ke upar usne woh vaakya joda jo usne shuru mein kaha tha, kyunki wahi tha jo woh rakhna chahti thi. Ek AI system ek software system hai jisme ek anishchit hissa hai. Aam software mein jo kuch bhi galat ja sakta hai woh ab bhi ja sakta hai. Aur ek failure aur, sabse shaant, jo koi error paida nahi karta.

## Saath le jaane layak baatein

Ek AI system aam software hai jisme ek anishchit hissa hai, isliye woh sab jo aam software ko tod sakta hai use tod sakta hai, aur engineering ka jokhim interfaces, errors, secrets aur retries mein utna hi hai jitna model mein. Programs requests aur jawaabon ke zariye baat karte hain, aur jawaab par ka status code batata hai ki request galat thi ya doosri taraf fail hui. Keys code ke bahar hoti hain, kaam ek repository mein hota hai jo har badlaav record karti hai, aur error neeche se padha jaata hai. System ka har hissa us data ke baare mein maanyataein rakhta hai jo usse milta hai, aur achha system tab ruk jaata hai jab koi toote, kuch nahi ke saath aage chalne ki jagah. Aur ek runner jo har experiment record karta hai "maine aazmaya" ko "maine naapa" mein badal deta hai, kyunki jo nateeja aap dohra nahi sakte woh sirf ek kissa hai.

---
title: Jaadu Ke Neeche Ki Plumbing
summary: Do ghante tak guard se galti hui, aur kahin koi error nahi dikha. Isliye Anaya us ek unpredictable hisse ke aas-paas ka aam software padhna seekhti hai, jaise plumber ka pipes ka naqsha. Aap data contracts, Python, HTTP aur status codes, environment variables, Git aur experiment runners se milte hain.
course: ch8f
goals:
  - data contract samjhana, aur yeh ki chupchaap toot jaana sabse khatarnaak kyun hai
  - ek request aur ek reply padhna, aur status code se pehchaanna ki kaun si taraf fail hui
  - batana ki secrets kahan rakhne chahiye, repository kya record karti hai, aur error ko neeche se kaise padhte hain
  - samjhana ki test ko ek baar fail hote dekhna kyun zaroori hai, aur experiment runner se kya mumkin hota hai
terms:
  - HTTP | request bhejne aur reply paane ke rules, jaise chitthi post karne ke rules; har reply par ek number hota hai jo batata hai ki kaam hua ya nahi | 
  - status code | HTTP reply par likha number, report card ke marks jaisa: 200 matlab kaam hua, 4xx matlab aapki request galat thi, 5xx matlab doosri taraf fail hua | status codes
  - environment variable | code ke bahar, taale wali daraaz mein rakha secret, us jagah jahan program chalta hai; passwords aur API keys wahin rehti hain | environment variables
  - Git | ek tool jo aapke kaam ka har version save karta hai, badlaavon ki photo album jaisa, taaki aap kisi bhi purane version par wapas ja sakein | 
  - experiment runner | ek dobara use hone wala program jo har experiment likh leta hai, lab notebook jaisa: inputs, outputs, settings, timings aur errors; isse aap result dohra kar aur compare kar sakte hain | 
  - data contract | system ke do hisson ke beech data ke baare mein chupa hua vaada, jaise "form mein hamesha naam ka box hoga"; jaise ek field maujood hogi aur list khaali nahi hogi | 
---

September ke doosre Thursday ko guard ne Pune ke har order number ko do ghante tak chhupa diya. Kisi ko pata nahi chala, jab tak ek customer ne likha nahi. Usne poochha ki uske order number ko kya hua.

Farah Sheikh ke agents pehle pareshaan hue, phir chidh gaye, phir jugaadu ban gaye. Lagbhag chaalis minute tak unhone customers se phone par order number bol kar sunane ko kaha. Dashboard (ek screen par saare numbers) hara hi raha.

Imran Qureshi ne yeh sunkar bahut kam kaha. Usne pen uthaya aur drawing banane laga. "Kisi ne error nahi diya," usne diagram poora hone par kaha. "Isiliye do ghante lage."

Yeh chapter batata hai ki kya hua. Phir woh wahi karta hai jo Imran ne agle kiya. Usne Anaya ko diagram padhna sikhaya.

## Case: woh field jisne naam badal liya

Wajah aam thi, aur wahi sabak tha. Guard har barah-ankon wale number ko order system mein dhoondhta tha, jaise use sikhaya gaya tha. Doosri team ne us subah order system update kiya tha. Purane version mein reply us field ko "order_id" kehti thi. Naye mein woh "orderId" tha, capital I ke saath.

Guard ne "order_id" maanga aur kuch nahi mila. Woh ruka nahi. Usne shor nahi machaya. Use, bilkul theek tareeke se, aise likha gaya tha ki khaali jawaab ko "aisa koi order nahi" samjhe. Yeh us clerk jaisa hai jise khaali shelf mile aur woh kahe "yeh hamne kabhi becha hi nahi". Isliye guard ne tameez se, lagbhag chaar sau baar, tay kar liya ki us number ka koi order nahi hai. Phir usne har ek ko shak wale identity number ki tarah chhupa diya.

::: def Data contract
Yeh system ke do hisson ke beech ek chupa hua vaada hai, jaise "is form mein hamesha naam ka box hoga". Ek hissa maan leta hai ki field maujood hogi, woh number hogi, list khaali nahi hogi. Har data contract kisi din production (live system) mein toot jaata hai. Achha bana system dekh leta hai aur ruk jaata hai. Kharab bana system chalta rehta hai, aur uska jawaab missing data par tika hota hai.
:::

Bahut se asli incidents bilkul aise hi dikhte hain. Koi error nahi. Dashboard green. Result chupchaap galat.

Imran ne kaha ki yeh machine-learning ki problem nahi thi. Model theek tha. Yeh ek aam software failure thi jo ek model ke bagal mein baithi thi. Aur is par sahi sawaal tabhi poochha ja sakta hai jab aap diagram padh sakein.

## Diagram

Anaya ko mahino se iska dar tha. Use apni engineers se baat kar paane par garv tha. Woh yeh bhi theek-theek jaanti thi ki yeh kaabiliyat kahan khatam hoti hai. Woh "the API" (ek service ka darwaaza) aur "the logs" (jo hua uska likha record) bol sakti thi. Woh asal mein kya hain, yeh use nahi pata tha.

Imran ne use do ghante, ek whiteboard aur ek misaal di. App mein khana order karne ko sochiye. Restaurant ko ek message jaata hai. Ek reply aata hai jisme price hota hai. Jab tak aap messages dekh nahi sakte, yeh jaadu lagta hai. Us dopahar ki har cheez ya toh ek aisa message thi, ya woh jagah jahan koi message kho jaata hai.

Table: Plumbing ke hisse, aur har ek se product manager ko kya chahiye
| Hissa | Yeh kya hai | Kya zaroori hai |
| --- | --- | --- |
| *Python* | Woh language jisme zyadatar AI ka kaam likha jaata hai | Yeh theek-theek kehti hai ki ek experiment kya karta hai. Function ek naam wali recipe hai. Dictionary phone book hai jo labelled values ko saath rakhti hai. Loop ek kadam dohraata hai. Agar aap padh sakein ki likha kya hai, toh dekh sakte hain ki experiment wahi hai jo aap samajh rahe the |
| *HTTP* | Rules jinse programs internet par baat karte hain | Har reply par ek number hota hai jo batata hai ki kaam hua ya nahi |
| *Environment variable* | Code ke bahar, us jagah rakhi value jahan program chalta hai | Passwords aur API keys isi jagah rehti hain. Kabhi code mein nahi, aur kabhi shared folder mein nahi |
| *Git* | Ek tool jo kaam ka har version save karta hai, saath mein note ki kya badla aur kyun | Aap kal aur aaj ka farq dekh sakte hain, aur dono mein se kisi par bhi wapas ja sakte hain |
| *Repository* | Git mein rakha folder jisme project ka kaam aur history hoti hai | Kuch toote toh pehla sawaal hota hai ki kya badla. Repository iska jawaab de sakti hai |

Anaya ko Python likhne ki kabhi zaroorat nahi padegi. Lekin use HTTP reply ka **status code** padhna padega. Ise report card ke marks jaisa samjho. Ek number bata deta hai ki kaisa gaya.

Table: Status codes
| Code | Matlab |
| --- | --- |
| 200 | Kaam hua |
| 401 | Request aise insaan ki hai jo woh nahi hai jo woh kehta hai |
| 404 | Yahan kuch nahi hai |
| 429 | Call karne wala bahut tez maang raha hai, use dheere hona chahiye |
| Koi bhi 4xx | Request galat thi |
| Koi bhi 5xx | Doosri taraf fail hua |

Imran ne kaha, "API fail ho gayi" koi explanation nahi hai. Woh bas poochhna shuru karne ki jagah hai. Kya request kharab thi? Koi dependency (jis cheez par yeh tika hai) missing thi? Ya unki taraf fail hua? Har ek ka ilaaj alag hai. Sabko dobara try karna theek nahi.

## Error ko kaise padhein

Phir Anaya ne error padhna seekha. Dus minute lage. Shaayad woh us dopahar ke sabse kaam ke dus minute the.

Jab program zor se fail hota hai, toh woh ek lamba block chhapta hai jise trace kehte hain. Paon ke nishaanon ki line sochiye. Man karta hai upar se padhna. Lekin upar ka hissa sabse kam kaam ka hai. Asli wajah lagbhag hamesha neeche hoti hai.

```
Traceback (most recent call last):
  File "guard.py", line 41, in clean_message
    order = lookup["order_id"]
KeyError: 'order_id'
```

"Pehle aakhri line," Imran ne kaha. "KeyError, order_id. Program ne woh field maangi jo wahan thi hi nahi. Line ikatalees. Bas, poori kahani yahi hai."

Anaya ne kaha ki yeh failure toh zor se nahi hua tha. Haan, Imran ne kaha, woh tameez wala kism tha. Asli code ne aise tareeke se maanga jo field missing ho toh kuch nahi lautata. Phir woh aage chalta raha, jaisa team ne likha tha. Zor ka failure ek tohfa hai, kyunki woh aapko rok deta hai.

## Ek test jo jaanboojh kar fail ho

Imran ne aakhri hissa ek khel ki tarah sikhaya. Pehle ek chhota test likho. Function ko ek order reply do jisme "order_id" ho. Dekho ki woh pehchaani gayi. Woh pass hota hai. Ab use "orderId" wali reply do. Kya hona chahiye?

Anaya ko laga ki use ruk kar kehna chahiye ki order system mein kuch galat hai, number mein nahi. "Toh use test ki tarah likho," Imran ne kaha. "Pehle use fail karwao, taaki pata ho ki woh fail ho sakta hai."

Yeh fire alarm ko ek baar dabane jaisa hai, ki dekho woh bajta hai. Jo alarm kabhi bajaa hi nahi, usne kabhi saabit nahi kiya ki woh kaam karta hai.

Usne test likha aur chalaya. Woh ek tasalli dene wali laal line ke saath fail hua. Usne code theek kiya taaki woh missing field check kare aur aage chalne se mana kar de. Usne use phir chalaya. Woh pass hua.

::: key Jis test ko kabhi fail hote nahi dekha, usne kabhi saabit nahi kiya ki woh kuch check karta hai
Use ek baar fail hote dekhiye. Phir code theek kijiye aur use pass hote dekhiye. Tabhi aap jaante hain ki test farq pehchaan sakta hai.
:::

Usne ek aur badlaav kiya. Guard ke sambhaale har message ke har record mein ab chaar cheezein hongi. Ek request number. Ek time. Code ka version. Status. Agli baar dashboard green ho aur customer likhe, toh team records mein search karegi. Use diagram banane ki zaroorat nahi padegi.

## Woh runner jo yaad rakhta hai

Aakhri cheez woh thi jo Imran ne do mahine mein banayi thi aur kisi ko dikhayi nahi thi. Woh ek **experiment runner** tha. Aisi lab notebook sochiye jo khud bharti hai. Yeh ek dobara use hone wala program hai. Har experiment ke liye woh inputs, outputs, settings, timings aur errors record karta hai. Sab ek standard form mein.

Iska kaam ek khaas pul paar karna tha. "Maine try kiya" aur "maine naapa" ke beech ek khai hai. Us khai ka zyadatar hissa bookkeeping hai. Runner ke saath aap ek prompt do baar chala kar dono runs save kar sakte hain. Aap ek cheez badalte hain. Logs turant dikhate hain ki kya badla.

"Agar main kal ka result dohra nahi sakta," usne kaha, "toh mere paas result nahi hai. Mere paas ek kahani hai."

Anaya ne uski screen par folder dekha. Usme ek README tha (kaise use karna hai, uska note). Usme ek list thi ki ise chalane ke liye kya chahiye. Usme May se har experiment ka log tha. Use pehli raat ki apni notebook ki ek line yaad aayi. Jab tak koi doosra check na kar sake, kuch nahi ginta. Use samajh aaya ki usne yahi kehna chaha tha. Use bas yeh nahi pata tha ki ise banate kaise hain.

## Kitna kaafi hota hai

Paanch baje Imran ne poochha ki usne kya seekha. Usne terms ki list nahi di. Diagram ke peeche usne likha ki ab woh kya kar sakti hai.

- Request, reply aur status code padhna.
- Jaanna ki key kahan rehti hai.
- Poochhna ki kya badla, aur pata lagana.
- Error ko neeche se padhna.
- Jaanna ki test ko ek baar fail hona chahiye.
- Koi kahe "API fail ho gayi", toh poochhna ki kis tarah.

Yeh chhoti list thi, aur kuch nahi, aisa bhi nahi tha. Jab koi engineer use diagram dikhayega, woh hisson ko pehchaan legi. Ek naye driver ko sochiye jo ab road signs padh sakta hai. Page ke upar usne woh vaakya joda jo Imran ne shuru mein kaha tha. Woh use rakhna chahti thi.

AI system ek software system hai jisme ek hissa unpredictable hai. Aam software mein jo kuch galat ho sakta hai, woh ab bhi ho sakta hai. Aur ek aur failure hai, sabse chupchaap, jisme koi error nahi dikhta.

## Saaraansh

AI system aam software hai jisme ek hissa unpredictable hai. Isliye jo kuch aam software ko tod sakta hai, woh ise bhi tod sakta hai. Engineering ka khatra interfaces, errors, secrets aur retries mein utna hi hai jitna model mein, kam se kam.

- Programs requests aur replies se baat karte hain. Reply par ka status code batata hai ki request galat thi ya doosri taraf fail hua.
- Keys code ke bahar rehti hain. Kaam us repository mein rehta hai jo har badlaav record karti hai. Error ko neeche se padhte hain.
- Har system apne mil rahe data ke baare mein kuch maanta hai. Yahi data contract hai. Achha system tab rukta hai jab woh toot jaaye. Woh khaali haath chalta nahi rehta.
- Jo runner har experiment record karta hai, woh "maine try kiya" ko "maine naapa" bana deta hai. Jo result aap dohra nahi sakte, woh bas ek kahani hai.

Agle chapter mein Mr. Bhatia ek bar chart ke saath aate hain. Woh ek aise model par switch karna chahte hain jo pichhle hafte aaya tha.

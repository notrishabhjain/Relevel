---
title: Jaadu Ke Neeche Ki Plumbing
summary: Do ghante ka ek outage jisme kisi ne error nahi diya, product manager ko manata hai ki use ek plumber ke diagram ke star par un saadhaaran software ko samajhna chahiye jo ek anishchit hisse ke chaaron taraf hai. Chapter data contracts, Python, HTTP aur status codes, environment variables, Git aur experiment runners samjhata hai.
course: ch8f
goals:
  - data contract batana aur samjhana ki khaamosh toot sabse khatarnaak kyun hai
  - ek request aur ek reply padhna, aur status code se batana ki kaun sa paksh fail hua
  - batana ki secrets kahan rehte hain, repository kya record karti hai, aur error ko neeche se kaise padhein
  - samjhana ki test ko ek baar fail hote dekhna kyun zaroori hai, aur experiment runner kya mumkin banata hai
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

September ke doosre Thursday ko guard ne Pune ke har order number ko do ghante tak chhupa diya, aur kisi ko pata nahi chala jab tak ek customer ne yeh poochhne ke liye nahi likha ki uske number ko kya hua. Farah Sheikh ke agents pehle chakit hue, phir chidhe, phir kalpanashil: lagbhag chaalis minute tak unhone customers se phone par apna order number zor se padhne ko kaha. Dashboard hara raha. Imran Qureshi ko jab bataya gaya toh usne bahut kam kaha aur pen se draw karna shuru kar diya.

"Kisi ne error nahi diya," usne kaha jab diagram poora ho gaya. "Isiliye do ghante lage." Yeh chapter samjhata hai ki kya hua, aur phir woh karta hai jo Imran ne agle kiya, yaani Anaya ko diagram padhna sikhana.

## Case: woh field jisne naam badal liya

Kaaran saadhaaran tha, aur yahi sabak tha. Guard har baarah ankon ke number ko order system mein dekhta tha, jaisa use sikhaya gaya tha. Ek doosri team ne us subah order system update kiya tha. Puraane version mein uske reply mein field ka naam "order_id" tha. Naye mein woh "orderId" tha, bade I ke saath.

Guard ne "order_id" maanga aur use kuch nahi mila. Woh ruka nahi aur usne chillaya nahi. Use saamaanya tareeke se likha gaya tha ki khaali jawaab ko "aisa koi order nahi" samjhe, isliye usne shishtata se, lagbhag chaar sau baar, tay kiya ki us number ka koi order nahi tha, aur har ek ko pehchaan ka number maan kar chhupa diya.

::: def Data contract
Woh anakahi maanyatayein jo system ka ek hissa us data ke baare mein rakhta hai jo use milta hai: ki ek field maujood hoga, ki woh ek number hoga, ki ek list khaali nahi hogi. Har data contract production mein kabhi na kabhi tootta hai. Achha banaya hua system dekhta hai ki ek toota hai aur ruk jaata hai. Kharab banaya hua aage badhta rehta hai, aur uska jawaab gayab data par tika hota hai.
:::

Is kshetra ki kai asli ghatnayein bilkul aisi dikhti hain: koi error nahi, hara dashboard, aur ek nateeja jo chupchaap galat hai. Imran ne kaha ki yeh machine-learning ki samasya nahi thi. Machine theek thi. Yeh ek saadhaaran software failure thi jo ek machine ke paas baithi thi, aur diagram padhne ke bina sahi sawaal poochha nahi ja sakta tha.

## Diagram

Anaya ko yeh mahino se darawna tha. Use apni engineers se baat karne ki kshamta par garv tha aur woh theek jaanti thi ki uski seema kahan hai. Woh "the API" aur "the logs" bina yeh jaane keh sakti thi ki woh kya hain. Imran ne use do ghante, ek whiteboard aur ek tulna di. Jab koi ek app mein khana mangata hai, toh ek message restaurant ko jaata hai aur ek reply keemat ke saath wapas aata hai. Jab tak message dikhte nahi, yeh rahasyamay lagta hai. Dopahar ki har cheez ek aisa message thi, ya ek aisi jagah jahan woh kho jaata hai.

Table: Plumbing ke hisse, aur product manager ko har ek se kya chahiye
| Hissa | Yeh kya hai | Kya maayne rakhta hai |
| --- | --- | --- |
| *Python* | Woh bhasha jisme zyadatar AI kaam likha jaata hai | Yeh batane ka tareeka hai ki ek experiment theek-theek kya karta hai. Ek function, ek dictionary jo naam wali values ek saath rakhti hai, ek loop jo ek kriya dohraata hai. Agar koi padh sake ki woh kya kehta hai, toh woh dekh sakta hai ki experiment wahi hai jo woh sochta hai |
| *HTTP* | Woh niyam jinse programs internet par baat karte hain | Har reply ek number leke aata hai jo batata hai ki woh kaam kiya ya nahi |
| *Environment variable* | Ek value jo code se bahar, jahan program chalta hai wahan rakhi hoti hai | Passwords aur API keys wahin rehte hain, code mein kabhi nahi aur kisi shared folder mein kabhi nahi |
| *Git* | Aisa tool jo kaam ka har version save karta hai, kya badla aur kyun ke note ke saath | Koi kal aur aaj ke antar ko dekh sakta hai aur dono mein se kisi par wapas ja sakta hai |
| *Repository* | Woh folder, Git mein rakha hua, jisme ek project ka kaam aur uska itihaas hai | Jab kuch tootta hai toh pehla sawaal yeh hota hai ki kya badla, aur repository jawaab de sakti hai |

Python Anaya ko likhna nahi tha. HTTP reply ka *status code* use padhna tha.

Table: Status codes
| Code | Matlab |
| --- | --- |
| 200 | Kaam kiya |
| 401 | Request aise kisi se hai jo woh nahi jo woh kehta hai |
| 404 | Yahan kuch nahi hai |
| 429 | Bulane wala bahut tezi se maang raha hai, aur use dheema hona chahiye |
| Koi bhi 4xx | Request galat thi |
| Koi bhi 5xx | Doosre paksh ne fail kiya |

"The API ne fail kiya" koi vyakhya nahi hai, Imran ne kaha. Woh poochhna shuru karne ki jagah hai. Kya woh ek kharab request thi, ek gayab dependency ya unki taraf ki failure? Har ek ka alag ilaaj hai, aur sirf kuch hi dobara koshish karne laayak hain.

## Error kaise padhein

Phir usne ek error padhna seekha, jisme das minute lage aur jo shaayad dopahar ke sabse upyogi das minute the. Jab program zor se fail hota hai toh woh ek lamba block chhapta hai jise trace kehte hain, aur pravritti use upar se padhne ki hoti hai, jahan sabse kam upyogi hissa hai. Asli kaaran aam taur par neeche hota hai.

```
Traceback (most recent call last):
  File "guard.py", line 41, in clean_message
    order = lookup["order_id"]
KeyError: 'order_id'
```

"Aakhri line pehle," Imran ne kaha. "KeyError, order_id. Program ne ek aisa field maanga jo wahan nahi tha. Line ikatalis. Yahi aapki poori kahani hai." Anaya ne kaha ki yeh failure zor se nahi hui thi. Nahi hui thi, usne kaha. Woh shishta version tha. Asli code ne aise tareeke se maanga tha jo field gayab hone par kuch nahi lautata, aur aage badh gaya, jo team ne likha tha. Zor se hui failure ek tohfa hai, kyunki woh aapko rok deti hai.

## Ek test jo jaanboojh kar fail hota hai

Imran ne aakhri hissa ek khel ki tarah sikhaya. Ek chhota test likho: function ko ek aisa order reply do jisme "order_id" ho aur jaancho ki woh pehchaana gaya. Woh paas ho jaata hai. Ab use "orderId" wala reply do aur poochho ki kya hona chahiye. Anaya ne socha ki use ruk jaana chahiye aur kehna chahiye ki order system mein kuch galat hai, number mein nahi. "Toh use test ke roop mein likho," Imran ne kaha. "Pehle use fail hone do, taaki pata chale ki woh ho sakta hai."

Usne use likha aur chalaya, aur woh ek santosh dene wali laal line ke saath fail hua. Usne code ko theek kiya taaki woh gayab field ko jaanche aur aage badhne se mana kare, aur dobara chalaya. Woh paas hua.

::: key Jis test ne kabhi fail nahi kiya usne kabhi kuch jaancha hi nahi
Guard ke sambhaale har message ke har record mein ab ek request number, ek samay, code ka version aur status bhi hoga. Jab agli baar dashboard hara ho aur customer likhe, toh team diagram nahi banayegi. Woh search karegi.
:::

## Woh runner jo yaad rakhta hai

Aakhri cheez woh thi jo Imran ne do mahine mein banayi thi aur kisi ko dikhayi nahi thi. Woh ek *experiment runner* tha, ek dobara istemaal hone wala program jo har experiment ke liye inputs, outputs, settings, timings aur errors ko ek maanak roop mein record karta hai. Uska maksad ek khaas pul paar karna tha. "Maine aazmaya" aur "maine naapa" ke beech ek khaai hai, aur khaai ka zyadatar hissa bookkeeping hai: ek prompt do baar chalao aur dono runs save karo, ek cheez badlo, aur logs se turant dekho ki kya badla.

"Agar main kal ka nateeja dohra nahi sakta," usne kaha, "toh mere paas koi nateeja nahi hai. Mere paas ek kissa hai." Anaya ne uski screen par folder dekha. Usme ek README tha, ek list ki ise chalane ke liye kya chahiye, aur May se har experiment ka ek log. Use pehli raat ki apni notebook ki entry yaad aayi, ki jab tak koi aur jaanch na sake kuch ginti mein nahi aata, aur samjha ki yahi uska matlab tha, aur use pata nahi tha ki ise banaya kaise jaata hai.

## Kaafi kaisa dikhta hai

Paanch baje Imran ne poochha ki usne kya seekha, aur usne shabdon ki list nahi di. Diagram ke peechhe usne likha ki woh ab kya kar sakti hai: ek request, ek reply aur ek status code padhna; jaanna ki ek key kahan rehti hai; poochhna ki kya badla aur pata lagana; error ko neeche se padhna; jaanna ki ek test ko ek baar fail hona chahiye; aur jab koi "the API fail hua" kahe, toh poochhna ki kis tarah.

Yeh ek chhoti list thi aur kuch nahi se zyada. Iska matlab tha ki jab koi engineer use diagram dikhayega, woh hisse pehchaan legi. Page ke sabse upar usne woh vaakya joda jo Imran ne shuru mein kaha tha, kyunki woh use rakhna chahti thi: ek AI system ek software system hai jisme ek anishchit hissa hai. Jo bhi saadhaaran software mein galat ho sakta hai woh ab bhi ho sakta hai, aur ek failure aur, sabse khaamosh, jo koi error nahi deti.

## Saaraansh

Ek AI system ek saadhaaran software hai jisme ek anishchit hissa hai, isliye jo kuch saadhaaran software ko tod sakta hai woh ise bhi tod sakta hai. Engineering ka khatra interfaces, errors, secrets aur retries mein model se kam nahi hai.

- Programs requests aur replies se baat karte hain. Reply par status code batata hai ki request galat thi ya doosra paksh fail hua.
- Keys code ke bahar rehti hain. Kaam ek repository mein rehta hai jo har badlaav record karti hai. Error ko neeche se padha jaata hai.
- Har system ka har hissa us data ke baare mein maanyatayein rakhta hai jo use milta hai, ek data contract. Achha system ek ke tootne par ruk jaata hai, kuch nahi ke saath aage nahi badhta.
- Jo runner har experiment record karta hai woh "maine aazmaya" ko "maine naapa" mein badal deta hai, kyunki jo nateeja dohraya na ja sake woh sirf ek kissa hai.

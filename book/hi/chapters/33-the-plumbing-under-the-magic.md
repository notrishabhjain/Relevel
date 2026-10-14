---
title: Jaadu Ke Neeche Ki Plumbing
summary: Do ghante ka ek outage, jisme kisi ne error nahi diya, ek product manager ko yakeen dilata hai ki use us ek anpredictable hisse ke aas-paas ka aam software plumber ke diagram ke level par samajhna chahiye. Chapter mein data contracts, Python, HTTP aur status codes, environment variables, Git aur experiment runners aate hain.
course: ch8f
goals:
  - data contract samjhana, aur yeh ki chupchaap toot jaana sabse khatarnaak kyun hai
  - ek request aur ek reply padhna, aur status code se pehchaanna ki kaun si taraf fail hui
  - batana ki secrets kahan rakhne chahiye, repository kya record karti hai, aur error ko neeche se kaise padhte hain
  - samjhana ki test ko ek baar fail hote dekhna kyun zaroori hai, aur experiment runner se kya mumkin hota hai
terms:
  - Python | woh programming language jisme zyadatar AI ka kaam likha jaata hai; ek product manager ke liye, yeh theek-theek kehne ka tareeka ki ek experiment kya karta hai | 
  - HTTP | rules ka woh set jisse programs internet par requests aur replies bhejte hain, har reply par ek number ke saath jo batata hai ki kaam hua ya nahi | 
  - status code | HTTP reply par likha number: 200 matlab kaam hua, 4xx number matlab request galat thi, aur 5xx number matlab server fail hua | status codes
  - environment variable | code ke bahar, us jagah rakhi hui value jahan program chalta hai; passwords aur API keys isi jagah rakhi jaati hain | environment variables
  - Git | ek tool jo aapke kaam ka har version save karta hai, taaki aap dekh sakein ki kya badla aur kisi bhi purane version par wapas ja sakein | 
  - repository | Git mein rakha hua woh folder jisme ek project ka saara kaam aur uski history hoti hai | repositories
  - experiment runner | ek dobara use hone wala program jo har experiment ke liye inputs, outputs, settings, timings aur errors record karta hai, taaki result dohraya aur compare kiya ja sake | 
  - data contract | woh bina kahe maani hui baatein jo system ka ek hissa us data ke baare mein maan leta hai jo use milta hai, jaise ki field maujood hogi aur list khaali nahi hogi | 
---

September ke doosre Thursday ko guard ne Pune ke har order number ko do ghante tak chhupa diya. Kisi ko pata nahi chala, jab tak ek customer ne likh kar nahi poochha ki uske number ko kya ho gaya. Farah Sheikh ke agents pehle uljhe, phir chidhe, phir jugaadu ho gaye. Lagbhag chaalis minute tak woh customers se phone par order number bol kar sunane ko kehte rahe. Dashboard poore time green raha.

Imran Qureshi ko jab bataya gaya, toh usne bahut kam kaha aur pen se kuch banana shuru kar diya. "Kisi ne error nahi diya," usne kaha jab diagram poora ho gaya. "Isiliye do ghante lage."

Yeh chapter batata hai ki kya hua. Phir woh karta hai jo Imran ne agla kiya, yaani Anaya ko diagram padhna sikhana.

## Case: woh field jisne naam badal liya

Wajah aam thi, aur yahi sabak tha. Guard har baarah digit ke number ko order system mein dekhta tha, jaisa use sikhaya gaya tha. Ek doosri team ne us subah order system update kiya tha. Purane version mein uske reply mein field ka naam "order_id" tha. Naye mein woh "orderId" ho gaya, bade I ke saath.

Guard ne "order_id" maanga aur use kuch nahi mila. Woh ruka nahi, chillaya nahi. Use sahi tareeke se yeh sikhaya gaya tha ki khaali jawaab ka matlab hai "aisa koi order nahi". Isliye usne tameez se, lagbhag chaar sau baar, yeh nateeja nikala ki is number ka koi order maujood nahi hai. Aur phir har ek ko shak wale identity number ki tarah chhupa diya.

::: def Data contract
Woh bina kahe maani hui baatein jo system ka ek hissa us data ke baare mein maan leta hai jo use milta hai: ki field maujood hogi, ki woh number hogi, ki list khaali nahi hogi. Har data contract production mein kabhi na kabhi tootta hai. Achha bana system dekh leta hai ki ek toot gaya hai aur ruk jaata hai. Kharab bana system chalta rehta hai, aur uska jawaab missing data par tika hota hai.
:::

Is field ke bahut se asli incidents bilkul aise hi dikhte hain. Koi error nahi, dashboard green, aur result chupchaap galat. Imran ne kaha ki yeh machine-learning ki problem nahi thi. Machine theek thi. Yeh ek aam software failure thi jo bas ek machine ke bagal mein baithi thi. Aur is par sahi sawaal tabhi poochha ja sakta hai jab aap diagram padh sakein.

## Diagram

Anaya ko mahino se iska dar tha. Use apni engineers se baat kar paane par garv tha, aur woh theek-theek jaanti thi ki yeh kaabiliyat kahan khatam hoti hai. Woh "the API" aur "the logs" bol sakti thi, bina jaane ki woh hain kya.

Imran ne use do ghante, ek whiteboard aur ek misaal di. Jab aap app mein khana order karte hain, toh restaurant ko ek message jaata hai, aur ek reply aata hai jisme price hota hai. Jab tak aap messages dekh nahi sakte, yeh rahasyamay lagta hai. Us dopahar ki har cheez ya toh ek aisa message thi, ya woh jagah jahan koi message kho jaata hai.

Table: Plumbing ke hisse, aur har ek se product manager ko kya chahiye
| Hissa | Yeh kya hai | Kya zaroori hai |
| --- | --- | --- |
| *Python* | Woh language jisme zyadatar AI ka kaam likha jaata hai | Yeh theek-theek kehne ka tareeka hai ki ek experiment kya karta hai. Ek function, ek dictionary jo labelled values ko saath rakhti hai, ek loop jo ek kaam dohraata hai. Agar aap padh sakein ki likha kya hai, toh dekh sakte hain ki experiment wahi hai jo aap samajh rahe the |
| *HTTP* | Rules jinse programs internet par baat karte hain | Har reply par ek number hota hai jo batata hai ki kaam hua ya nahi |
| *Environment variable* | Code ke bahar, us jagah rakhi value jahan program chalta hai | Passwords aur API keys isi jagah rehti hain, kabhi code mein nahi aur kabhi shared folder mein nahi |
| *Git* | Ek tool jo kaam ka har version save karta hai, saath mein note ki kya badla aur kyun | Aap kal aur aaj ka farq dekh sakte hain aur dono mein se kisi par bhi wapas ja sakte hain |
| *Repository* | Git mein rakha folder jisme project ka kaam aur history hoti hai | Kuch toote toh pehla sawaal hota hai ki kya badla, aur repository iska jawaab de sakti hai |

Anaya ko Python likhne ki kabhi zaroorat nahi padegi. Lekin HTTP reply ka **status code** use padhna padega.

Table: Status codes
| Code | Matlab |
| --- | --- |
| 200 | Kaam hua |
| 401 | Request aise insaan ki hai jo woh nahi hai jo woh kehta hai |
| 404 | Yahan kuch nahi hai |
| 429 | Call karne wala bahut tez maang raha hai, use dheere hona chahiye |
| Koi bhi 4xx | Request galat thi |
| Koi bhi 5xx | Doosri taraf fail hua |

Imran ne kaha, "API fail ho gayi" koi explanation nahi hai. Woh bas poochhna shuru karne ki jagah hai. Kya request kharab thi, koi dependency missing thi, ya unki taraf fail hua? Har ek ka ilaaj alag hai, aur sabko dobara try karna theek nahi.

## Error ko kaise padhein

Phir usne error padhna seekha. Dus minute lage, aur shayad us dopahar ke sabse kaam ke dus minute the. Jab program zor se fail hota hai, toh woh ek lamba block print karta hai jise trace kehte hain. Instinct hota hai use upar se padhne ka, lekin upar ka hissa sabse kam kaam ka hai. Asli wajah lagbhag hamesha neeche hoti hai.

```
Traceback (most recent call last):
  File "guard.py", line 41, in clean_message
    order = lookup["order_id"]
KeyError: 'order_id'
```

"Pehle aakhri line," Imran ne kaha. "KeyError, order_id. Program ne woh field maangi jo wahan thi hi nahi. Line ikatalees. Bas, poori kahani yahi hai."

Anaya ne kaha ki yeh failure toh zor se nahi hua tha. Haan, Imran ne kaha, woh tameez wala version tha. Asli code ne aise method se maanga tha jo field missing ho toh kuch nahi lautata, aur woh aage chalta raha, jaisa team ne likha tha. Zor ka failure ek tohfa hai, kyunki woh aapko rok deta hai.

## Ek test jo jaanboojh kar fail ho

Imran ne aakhri hissa use ek khel ki tarah sikhaya. Pehle ek chhota test likho. Function ko ek aisa order reply do jisme "order_id" ho, aur check karo ki woh pehchana gaya. Pass ho gaya. Ab use "orderId" wala reply do aur poochho ki kya hona chahiye.

Anaya ko laga ki use ruk jaana chahiye aur kehna chahiye ki order system mein kuch gadbad hai, number mein nahi. "Toh woh test ki tarah likho," Imran ne kaha. "Pehle use fail karwao, taaki pata ho ki woh fail ho sakta hai."

Usne likha aur chalaya, aur woh ek santushti dene wali red line ke saath fail hua. Phir usne code theek kiya taaki woh missing field check kare aur aage chalne se mana kar de. Dobara chalaya, aur pass ho gaya.

::: key Jis test ko kabhi fail hote nahi dekha, usne kabhi saabit nahi kiya ki woh kuch check karta hai
Use ek baar fail hote dekhiye, phir code theek kijiye aur pass hote dekhiye. Tabhi pata chalta hai ki test farq pehchaan sakta hai.
:::

Usne ek badlaav aur kiya. Guard ne jo bhi message sambhala, uske har record mein ab ek request number, ek time, code ka version aur status hoga. Agli baar dashboard green ho aur customer likhe, toh team records search karegi, diagram nahi banayegi.

## Woh runner jo yaad rakhta hai

Aakhri cheez woh thi jo Imran ne do mahine mein banayi thi aur kisi ko dikhayi nahi thi. Woh ek **experiment runner** tha. Yeh ek dobara use hone wala program hai jo har experiment ke liye inputs, outputs, settings, timings aur errors, sab ek standard form mein record karta hai.

Iska maqsad ek khaas pul paar karna tha. "Maine try kiya" aur "maine naapa" ke beech ek gap hota hai, aur us gap ka zyadatar hissa bookkeeping hai. Runner ke saath aap ek prompt do baar chala sakte hain aur dono runs save kar sakte hain. Aap ek cheez badalte hain, aur logs se turant dikh jaata hai ki kya badla.

"Agar main kal ka result reproduce nahi kar sakta," usne kaha, "toh mere paas result nahi hai. Mere paas ek kissa hai."

Anaya ne uski screen par folder dekha. Usme ek README tha, chalane ke liye kya chahiye uski list, aur May se har experiment ka log. Use pehli raat ka apni notebook ka woh note yaad aaya: jab tak koi aur check na kar sake, kuch nahi ginta. Woh samajh gayi ki use yahi chahiye tha, aur use pata nahi tha ki ise banate kaise hain.

## Kitna kaafi hota hai

Paanch baje Imran ne poochha ki usne kya seekha. Usne terms ki list nahi di. Diagram ke peeche usne likha ki ab woh kya kar sakti hai. Request, reply aur status code padh sakti hai. Jaanti hai ki key kahan rehti hai. Poochh sakti hai ki kya badla, aur pata laga sakti hai. Error ko neeche se padh sakti hai. Jaanti hai ki test ek baar fail hona chahiye. Aur jab koi kahe "API fail ho gayi", toh poochh sakti hai ki kis tarah.

Yeh chhoti list thi, lekin kuch nahi se bahut zyada thi. Iska matlab tha ki jab koi engineer use diagram dikhaye, toh woh uske hisse pehchaan legi. Page ke upar usne woh sentence likh diya jo Imran ne shuru mein kaha tha, kyunki woh use rakhna chahti thi. AI system ek software system hai jisme ek hissa anpredictable hai. Aam software mein jo kuch bhi galat ho sakta hai, woh ab bhi ho sakta hai. Aur ek failure aur hai, sabse khaamosh, jo koi error nahi deti.

## Saaraansh

AI system aam software hai jisme ek hissa anpredictable hai, isliye jo kuch aam software ko tod sakta hai, woh ise bhi tod sakta hai. Engineering risk interfaces, errors, secrets aur retries mein utna hi hai jitna model mein.

- Programs requests aur replies se baat karte hain. Reply par status code batata hai ki request galat thi ya doosri taraf fail hua.
- Keys code ke bahar rehti hain. Kaam ek repository mein rehta hai jo har badlaav record karti hai. Error ko neeche se padha jaata hai.
- System ka har hissa us data ke baare mein kuch maanta hai jo use milta hai. Yahi data contract hai. Achha system tab ruk jaata hai jab koi toot jaaye, kuch na milne par bhi chalta nahi rehta.
- Jo runner har experiment record karta hai, woh "maine try kiya" ko "maine naapa" bana deta hai, kyunki jo result reproduce nahi ho sakta, woh sirf ek kissa hai.

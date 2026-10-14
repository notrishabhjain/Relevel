---
title: Pehli Baatcheet
summary: Ek engineer product manager ko language model ke paas jaati ek request aur wapas aata jawaab dikhata hai. Jawaab ke saath lagi rasid jawaab jitna hi sikha deti hai. Aap API, JSON, API key, usage block, aur yeh seekhenge ki confident jawaab saboot kyun nahi hota.
course: ch1
goals:
  - bata paana ki ek program language model se API ke zariye kuch kaise maangta hai
  - ek saadhi JSON request padhna, aur samajhna ki role kya hota hai
  - samjhana ki API key ko secret kyun rakhna chahiye
  - usage block se ek call ka cost nikalna, aur samjhana ki saaf-suthra jawaab sach hone ka saboot kyun nahi hai
terms:
  - API | ek program ka doosre program se ek tay format mein kuch maangne ka tareeka, jaise counter ke aar-paar thamayi gayi order slip | APIs
  - JSON | information ko curly braces ke andar labels aur values ki tarah likhne ka saadha tareeka, jo lagbhag har API use karti hai | 
  - API key | ek lamba secret code jo provider ko batata hai ki kaun maang raha hai, aur bill kise bhejna hai; jiske paas yeh hai woh aapka paisa kharch kar sakta hai | API keys
  - usage block | har jawaab ka woh hissa jo batata hai ki kitne tokens andar gaye aur kitne bahar aaye, jiske hisaab se aapse paisa liya jaata hai | usage
---

Ek shaam office khaali ho chuka tha. Imran Qureshi ne apni screen par ek hi window kholi. Usmein ek text box tha, ek button, aur unke neeche ek dhusar jagah, jahan kuch dikhne wala tha. Woh chahta tha ki Anaya poora round trip dekhe: ek sawaal ka program se nikalna, aur jawaab ka wapas aana. Usne demonstration ko jaanboojh kar saadha rakha.

Yeh chapter wahi demonstration dohrata hai. Language model par bana har product isi ek lena-dena par tika hai. Jis product manager ne ek poora exchange dekh liya, woh cost, security aur reliability ke baare mein engineers ki zyadatar baatein samajh jaata hai.

## Case: ek round trip

Demonstration ke chaar hisse the. Pehla, request jo bahar jaati hai, aur woh key jo use manzoori deti hai. Doosra, jawaab jo apni rasid ke saath wapas aata hai. Aur teesra, ek aisa sawaal jiska jawaab machine ko ho hi nahi sakta tha. Chauthe hisse ne pehle teen se zyada sikhaya.

## Counter ke aar-paar ek order slip

Language model se koi waise type nahi karta jaise dost se karta hai. Yeh kaam ek program karta hai, ek darwaze ke zariye jise *API* kehte hain.

Imran ne ek counter banaya. Ek taraf ek customer khada hai, jiske haath mein kaagaz ki parchi hai. Doosri taraf ek rasoi hai. Parchi mein tay khaane bane hain. Customer unhe bharta hai aur parchi aage de deta hai. Rasoi har parchi par wahi khaane padhti hai, apna kaam karti hai, aur ek plate wapas deti hai. Customer rasoi ko kabhi nahi dekhta. Aur rasoi bas yeh dekhti hai ki parchi sahi bhari gayi hai ya nahi.

::: def API
Ek program ke doosre program se kuch maangne ka tay format wala tareeka, jaise counter ke aar-paar di gayi order slip.
:::

Sahaj ka chatbot bhi ek API use karta tha. Jab customer send dabata, toh app ek parchi bharta aur use us bahar ki company ko bhej deta jo model chalati thi. Jab plate wapas aati, toh app use dikha deta.

Parchi *JSON* mein likhi thi. JSON information likhne ka saadha format hai, jismein labels aur values curly braces ke andar hoti hain. Imran ne ek parchi window mein paste ki. Woh Anaya ki ummeed se chhoti thi.

```
{
  "messages": [
    { "role": "user",
      "content": "What is the late fee on an electricity bill?" }
  ]
}
```

Request messages ki ek list hai, aur har message ka ek role hota hai. Abhi ke liye do roles hain. *User* woh hai jo pooch raha hai, aur *assistant* model ka apna jawaab hai. Ek teesra role bhi hota hai, jise Chapter 11 mein samjhaya jaayega.

Parchi par aur kuch nahi hai. Jis cheez ko Anaya ne dimaag samjha tha, woh ek list nikli. Aur woh list sirf ek line nikli.

## Till ki chaabi

Har request ke saath ek aur cheez jaati hai. Imran ne use dikhane se pehle monitor ko thoda ghuma diya, kyunki poore intezaam mein yeh sabse khatarnaak line hai.

Yeh letters aur digits ki ek lambi string thi, jise *API key* kehte hain. Key provider ko batati hai ki kaun maang raha hai, aur bill kise bhejna hai. Jiske paas bhi yeh key hai, woh requests bhej sakta hai aur maalik ka paisa kharch kar sakta hai. Aur provider ke records yahi kahenge ki maalik ne kiya.

::: watch Key kahan kabhi nahi honi chahiye
Key app ke code mein nahi honi chahiye, jahan page kholne wala koi bhi use padh sakta hai. Woh shared folder mein nahi honi chahiye, na hi kisi colleague ko bheje message mein. Imran ne ek developer ke baare mein bataya, jisne galti se apni key ek public project mein paste kar di. Agli subah uske paas kai lakh rupaye ka bill tha. Key till ki chaabi hai, aur chaabi ko counter par nahi chhodte.
:::

## Jawaab aur uski rasid

Imran ne button dabaya. Ek second baad text aaya. Ek saaf-suthra jawaab tha, jo kehta tha ki late fee aam taur par baaki amount ka chhota sa percentage hoti hai, aur saath mein bill check karne ki salah thi.

Anaya ne kaha ki yeh toh ek banayi hui policy hai. Imran ne kaha, yeh ek general jawaab hai. Model ko Sahaj ki policy nahi pata, kyunki kisi ne use bataya hi nahi.

Jawaab ke neeche numbers ka ek block tha.

```
"usage": {
  "tokens_in": 19,
  "tokens_out": 47
}
```

Ise *usage block* kehte hain, aur yeh har jawaab ke saath aata hai. Woh batata hai ki kitne tokens andar gaye aur kitne bahar aaye. Customer ka bill isi par banta hai. Providers price 10 lakh tokens ke hisaab se batate hain. Aksar jo aap bhejte hain uska ek rate hota hai, aur jo wapas aata hai uska zyada rate.

Table mein in numbers ko rupaye mein badla gaya hai.

Table: Ek call ka cost, made-up prices ke saath
| | Tokens | 10 lakh tokens ka price | Cost |
| --- | --- | --- | --- |
| Demonstration: tokens in | 19 | ₹250 | lagbhag aadha paisa |
| Demonstration: tokens out | 47 | ₹1,000 | 5 paise se kam |
| Asli chatbot call: tokens in | 500 | ₹250 | 12.5 paise |
| Asli chatbot call: tokens out | 150 | ₹1,000 | 15 paise |

Yeh prices Imran ke hain. Usne hisaab aasaan rakhne ke liye chune hain, aur yeh kisi provider ke nahi hain. Demonstration ka cost lagbhag 5 paise tha.

Ek asli call alag hoti hai. Chatbot ke instructions har baar jaate hain, aur unke upar customer ka message. Aisi call ka cost lagbhag 28 paise padta hai. Mahine ki ek lakh aisi calls ka ₹27,500 banta hai. Sahaj jaisi company ke liye yeh woh figure hai jo koi na koi poochhega. Imran chahta tha ki Anaya woh insaan bane jo ise sabse pehle bata sake.

Isi hisaab mein ek doosra sabak bhi hai. Request mein jodi gayi instruction ki har line har call par dobara charge hoti hai. Model ko shuru mein jo kuch bataya jaata hai, woh har baar padha jaata hai, aur har baar uska paisa lagta hai.

## Ek sawaal jiska woh jawaab nahi de sakta tha

Imran ne Anaya se kaha ki model se ek aisa sawaal poochhe jiska jawaab woh jaan hi nahi sakta. Anaya ne ek aisi company ka naam type kiya jo thi hi nahi: Rastogi Finance. Yeh naam usne brush karte hue gadha tha. Usne uski refund policy poochhi.

Jawaab do second se kam mein aa gaya, tameezdaar aur detail mein. Model ne kaha ki Rastogi Finance payment ke 14 din ke andar refund deti hai, agar request app se ki jaaye, aur use 5 se 7 working days mein process karti hai. Saath mein asuvidha ke liye khed ka ek sentence bhi joda.

Aisi koi company nahi thi, aur aisi koi policy nahi thi.

Yeh hota kyun hai? Socha jaaye ki model karta kya hai. "What is the refund policy of" ke baad sabse likely agla text ek refund policy hai. "Mere paas is baare mein information nahi hai" bhi ek possible agla sentence hai. Lekin model ne jo likha hua padha, usmein yeh bolna ek anokhi baat hai. "Mujhe nahi pata" kehna aisa behaviour hai jo alag se sikhana aur test karna padta hai, aur woh hamesha tikta bhi nahi.

::: key Confident tone kuch saabit nahi karta
Sahi jawaab aur gadha hua jawaab bilkul ek jaise padhe jaate hain. Isi wajah se tool ki galtiyan naapni padti hain: woh aasaani se dikhengi nahi. Anaya ne Pooja Nair ke baare mein socha, jisne chatbot ke "verification" maangne par bharosa kiya tha. Aur yeh ki chatbot kaisa sunayi diya tha, bilkul kisi aise insaan ki tarah jise sab pata ho.
:::

## Anaya ne kya samjha

Us raat Anaya ne shaam ko apne shabdon mein likha, yeh check karne ke liye ki woh sach mein samjhi hai ya nahi. Yeh usne likha.

- Program model se API ke zariye baat karta hai, ek tay format ki parchi bhejkar.
- Parchi JSON hai, aur usmein messages ki ek list hai, har message ka ek role.
- Company ko pehchaanne wali key ek secret hai, aur agar koi aur use pa jaaye toh paisa kharch karwa sakta hai.
- Har jawaab ke saath ek usage block aata hai, jo dikhata hai ki kitna dena hai.
- Ek call lagbhag free hai, aur ek lakh calls budget ki ek line hain.
- Model gadha hua jawaab utni hi saafai se de sakta hai jitni saafai se sach.

Usne ise wapas padha, aur dekha ki kya chhoot gaya hai. Isme is baare mein kuch nahi tha ki kya model use yaad rakh sakta hai. Jaate waqt usne Imran se yahi poochha tha. Imran ne kaha tha ki agle din aao, aur is par baat karte hain ki woh yaad kyun nahi rakh sakta.

## Saaraansh

Program language model tak API ke zariye pahunchta hai. Yeh ek counter ke aar-paar di gayi parchi jaisa hai, tay format mein.

- JSON us parchi ka saadha format hai: curly braces ke andar labels aur values. Request messages ki ek list hai, har message ka ek role.
- API key batati hai ki kaun maang raha hai aur kis account ko bill jaana hai. Use secret rakhiye, kyunki jiske paas bhi yeh ho, woh maalik ka paisa kharch kar sakta hai.
- Har jawaab ke saath ek usage block aata hai. Tokens in aur out se aap kuch banane se pehle hi call ka cost nikal sakte hain. Instructions har call par charge hote hain.
- Model fluent text banata hai, chahe uske paas uska koi aadhar ho ya na ho. Isliye confident jawaab saboot nahi hai.

Agle chapter mein Anaya aur Imran dekhenge ki model ek request se doosri request tak use yaad kyun nahi rakhta.

---
title: Pehli Baatcheet
summary: Ek engineer product manager ko language model ke paas ek request jaate aur jawaab lautte dikhata hai, aur jawaab ke saath ki rasid jawaab jitni hi sikhane wali nikalti hai. Chapter API, JSON, API key, usage block, aur is khoj ko samjhata hai ki aatmavishwaas bhara jawaab saboot nahi hota.
course: ch1
goals:
  - batana ki ek program language model se API ke zariye kuch kaise maangta hai
  - ek saadhi JSON request padhna aur samajhna ki role kya hota hai
  - samjhana ki API key ko gupt kyun rakhna chahiye
  - usage block se ek call ka kharcha nikalna, aur samjhana ki saaf-suthra jawaab sach hone ka saboot kyun nahi hai
terms:
  - API | ek program ka doosre program se ek tay format mein kuch maangne ka tareeka, jaise counter ke aar-paar thamayi gayi order slip | APIs
  - JSON | jaankari ko curly braces ke andar labels aur values ki tarah likhne ka saral tareeka, jo lagbhag har API istemaal karti hai | 
  - API key | ek lamba gupt code jo provider ko batata hai ki kaun maang raha hai, aur bill kise bhejna hai; jiske paas yeh hai woh aapka paisa kharch kar sakta hai | API keys
  - usage block | har jawaab ka woh hissa jo batata hai ki kitne tokens andar gaye aur kitne bahar aaye, jiske hisaab se aapse paisa liya jaata hai | usage
---

Ek shaam office khaali hone ke baad Imran Qureshi ne apni screen par ek hi window kholi: ek text box, ek button aur uske neeche ek dhusar jagah jahan kuch dikhna tha. Woh chahta tha ki Anaya poora round trip dekhe, sawaal ka program se nikalna aur jawaab ka wapas aana, aur usne demonstration ko jaanboojh kar saadha rakha. Yeh chapter us demonstration ko dohrata hai, kyunki language model par bana har product usi ek aadan-pradaan par tikta hai, aur jis product manager ne ek poora aadan-pradaan dekha ho woh engineers ki cost, security aur reliability ki baaton ka zyadatar hissa samajh leti hai.

## 9.1 Case: ek round trip

Demonstration ke chaar hisse the: jaane wali request, woh key jo use manzoori deti hai, wapas aane wala jawaab apni rasid ke saath, aur ek aisa sawaal jiska jawaab machine ko hargiz pata nahi ho sakta tha. Chauthe hisse ne pehle teen se zyada sikhaya.

## 9.2 Counter ke aar-paar ek order slip

Koi bhi language model se waise baat nahi karta jaise koi dost se karta hai. Ek program karta hai, ek darwaze ke zariye jise *API* kehte hain.

Imran ne ek counter banaya. Ek taraf ek customer hai jiske haath mein kaagaz ki parchi hai, aur doosri taraf ek rasoi. Parchi mein tay khaane hain. Customer unhe bharkar parchi dega, rasoi har parchi par wahi khaane padhti hai, kaam karti hai aur ek plate wapas deti hai. Customer rasoi ko kabhi nahi dekhta, aur rasoi sirf yeh dekhti hai ki parchi sahi bhari gayi hai ya nahi.

::: def API
Ek program ke dusre program se kuch maangne ka tay format wala tareeka, jaise counter ke aar-paar di gayi order slip.
:::

Sahaj ka chatbot ek istemaal karta tha. Jab customer send dabata, toh app ek parchi bharta, use us bahari company ko bhejta jo model chalati thi, aur plate wapas aane par dikhata.

Parchi *JSON* mein likhi thi, jo curly braces ke andar labels aur values ki tarah jaankari likhne ka saadha format hai. Imran ne ek window mein paste ki. Woh Anaya ki ummeed se chhoti thi.

```
{
  "messages": [
    { "role": "user",
      "content": "What is the late fee on an electricity bill?" }
  ]
}
```

Request messages ki ek list hai, aur har message ka ek role hota hai. Abhi do role hain. *User* woh hai jo pooch raha hai, aur *assistant* model ka apna jawaab hai. Teesra role bhi hota hai, jo Chapter 11 mein samjhaya jaayega. Parchi par aur kuch nahi hai. Jis cheez ko Anaya ne dimaag samjha tha woh ek list nikli, aur list ek line nikli.

## 9.3 Till ki chaabi

Har request ke saath ek aur cheez jaati hai. Imran ne dikhane se pehle monitor ko thoda ghuma diya, kyunki yeh poore intezaam ki sabse khatarnaak line hai. Yeh akshron aur ankon ki ek lambi string thi jise *API key* kehte hain. Key provider ko batati hai ki kaun maang raha hai aur bill kise bhejna hai. Jiske paas bhi yeh hai, woh requests bhej sakta hai aur maalik ka paisa kharch kar sakta hai, aur provider ke records kahenge ki maalik ne kiya.

::: watch Key kahan kabhi nahi honi chahiye
Key app ke code mein nahi honi chahiye, jahan page kholne wala koi bhi use padh sakta hai. Woh shared folder mein ya saathi ko bheje message mein nahi honi chahiye. Imran ne ek developer ka zikr kiya jisne galti se apni key ek public project mein paste kar di aur agli subah usne kai lakh rupaye ka bill dekha. Key till ki chaabi hai, aur use counter par chhodte nahi.
:::

## 9.4 Jawaab aur uski rasid

Imran ne button dabaya. Ek second baad text aaya: ek saaf jawaab jo kehta tha ki late fee aam taur par bakaya raashi ka chhota percent hota hai, aur bill dekhne ki salah di. Anaya ne kaha ki yeh ek banai hui policy hai. Imran ne kaha ki yeh ek aam jawaab hai, kyunki model Sahaj ki policy nahi jaanta jab tak kisi ne use bataya nahi.

Jawaab ke neeche numbers ka ek block tha.

```
"usage": {
  "tokens_in": 19,
  "tokens_out": 47
}
```

*Usage block* har jawaab ke saath aata hai. Woh batata hai ki kitne tokens andar gaye aur kitne bahar aaye, aur customer ka bill isi par banta hai. Providers prices dus lakh token ke hisaab se batate hain, aksar bheje jaane wale text ke liye ek rate aur wapas aane wale ke liye zyada rate.

Table: Ek call ka kharcha, kalpanik daam ke saath
| | Tokens | Dus lakh token par daam | Kharcha |
| --- | --- | --- | --- |
| Demonstration: tokens in | 19 | ₹250 | lagbhag aadha paisa |
| Demonstration: tokens out | 47 | ₹1,000 | paanch paise se kam |
| Asli chatbot call: tokens in | 500 | ₹250 | 12.5 paise |
| Asli chatbot call: tokens out | 150 | ₹1,000 | 15 paise |

Daam Imran ke hain, aasaan hisaab ke liye chune gaye, kisi provider ke nahi. Demonstration ka kharcha lagbhag paanch paise tha. Ek asli call, jisme chatbot ke instructions har baar jaate hain aur upar customer ka message, lagbhag 28 paise padti hai. Mahine ki ek lakh aisi calls ka ₹27,500 banta hai. Sahaj jaisi company ke liye yeh woh figure hai jo koi poochhega, aur Imran chahta tha ki Anaya woh insaan ho jo use pehle bata sake.

Isi hisaab mein ek doosra sabak chhupa hai. Request mein jodi gayi har instruction ki line har call par dobara charge hoti hai, kyunki jo kuch model ko shuru mein bataya jaata hai woh har baar padha jaata hai, aur uska paisa lagta hai.

## 9.5 Ek sawaal jiska woh jawaab nahi de sakta tha

Imran ne Anaya se model se aisa sawaal poochhne ko kaha jo woh jaan hi nahi sakta tha. Usne ek aisi company ka naam type kiya jo thi hi nahi, Rastogi Finance, jo usne brush karte hue gadha tha, aur uski refund policy poochhi.

Jawaab do second se kam mein aaya, shishta aur vistrit. Rastogi Finance, usne kaha, payment ke chaudah din ke andar refund deti hai agar request app ke zariye ki jaaye, aur paanch se saat kaam ke dinon mein process karti hai. Usne asuvidha ke liye khed ka ek vaakya bhi joda. Aisi koi company nahi thi aur aisi koi policy nahi thi.

Wajah is mein hai ki model karta kya hai. "Refund policy of" ke baad sabse sambhav agla text ek refund policy hai. "Mere paas is baare mein jaankari nahi hai" ek sambhav agla vaakya hai, par model ne jo likha padha usme woh ek anokha vaakya hai. "Mujhe nahi pata" kehna ek aisa vyavhaar hai jo alag se sikhana aur test karna padta hai, aur woh hamesha tikta nahi.

::: key Aatmavishwaas bhara swar kuch saabit nahi karta
Sahi jawaab aur gadha hua jawaab ek jaise padhe jaate hain. Tool ki galtiyon ko naapne ki wajah yeh hai ki woh aasaani se dikhengi nahi. Anaya ne Pooja Nair ke baare mein socha, jisne chatbot ke "verification" maangne par bharosa kiya tha, aur is baare mein ki woh kaisa sunayi diya tha, kisi aise insaan ki tarah jo jaanta ho.
:::

## 9.6 Usne kya samjha

Us raat Anaya ne shaam ko apne shabdon mein likha, yeh jaanchne ke tareeke ki tarah ki woh samjhi hai ya nahi. Program model se API ke zariye ek tay format ki parchi bhejkar baat karta hai. Parchi JSON hai aur usme messages ki ek list hai, har ek ka role. Company ko pehchaanne wali key ek raaz hai aur agar koi aur use paa jaaye toh paisa kharch karwati hai. Har jawaab ke saath ek usage block aata hai jo batata hai ki kitna dena hai. Ek call lagbhag muft hai, aur ek lakh calls budget ki ek line hain. Model ek gadhe hue jawaab ko utni hi saafai se de sakta hai jitni saafai se sach ko.

Usne use wapas padha aur dekha ki kya chhoot gaya. Usme isse kuch nahi tha ki kya model use yaad rakh sakta hai. Jaate waqt usne Imran se yeh poochha tha, aur usne kaha tha ki agle din aaye aur is baare mein baat karein ki woh kyun nahi rakh sakta.

## Saaraansh

Program language model tak API ke zariye pahunchta hai, jo ek counter ke aar-paar di gayi parchi jaisa hai, tay format mein.

- JSON parchi ka saadha format hai: curly braces ke andar labels aur values. Request messages ki ek list hai, har ek ka role.
- API key bulane wale aur bill dene wale account ko pehchaanti hai. Use gupt rakhna chahiye, aur jiske paas bhi woh ho woh maalik ka paisa kharch kar sakta hai.
- Har jawaab ke saath ek usage block aata hai, aur tokens in aur out kuch banne se pehle hi call ka kharcha bata dete hain. Instructions har call par charge hote hain.
- Model utni hi saafai se text banata hai chahe uske paas uska aadhar ho ya na ho, isliye aatmavishwaas bhara jawaab saboot nahi hai.

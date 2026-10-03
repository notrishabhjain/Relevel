---
title: Pehli Baatcheet
summary: Ek engineer product manager ko dikhata hai ki ek message model tak jaata hai aur wapas aata hai, aur receipt par jo dikhta hai woh utna hi zaroori hai jitna jawaab mein jo padha jaata hai.
course: ch1
terms:
  - API | ek program ka doosre program se ek tay format mein kuch maangne ka tareeka, jaise counter ke aar-paar thamayi gayi order slip | APIs
  - JSON | jaankari ko curly braces ke andar labels aur values ki tarah likhne ka saral tareeka, jo lagbhag har API istemaal karti hai | 
  - API key | ek lamba gupt code jo provider ko batata hai ki kaun maang raha hai, aur bill kise bhejna hai; jiske paas yeh hai woh aapka paisa kharch kar sakta hai | API keys
  - usage block | har jawaab ka woh hissa jo batata hai ki kitne tokens andar gaye aur kitne bahar aaye, jiske hisaab se aapse paisa liya jaata hai | usage
---

Imran tab tak ruka raha jab tak office khaali nahi ho gaya, kuch isliye ki use bheed pasand nahi thi aur kuch isliye ki, uske shabdon mein, demonstration ko doosron ke keyboards ki awaaz se muqabla nahi karna chahiye.

Uske paas ek window khuli thi. Usme ek text box tha, ek button, aur neeche ek dhusar jagah jahan kuch aakhirkaar dikhne wala tha. "Main chahta hoon tum poora round trip dekho," usne kaha. "Main ise jitna ho sake boring rakhunga."

"Boring achha hai."

"Boring se hi pata chalta hai ki yeh asli hai."

## Counter ke aar-paar ek order slip

Sabse pehli cheez samajhne ki, usne kaha, yeh hai ki model se koi bhi waise type nahi karta jaise insaan dost se baat karta hai. Ek program unke liye karta hai, ek darwaze ke zariye jise *API* kehte hain.

Usne ek counter banaya. Ek taraf ek customer jiske haath mein kaagaz ki slip hai; doosri taraf ek rasoi. Customer slip bharta hai, jisme tay dibbe hain, aur thama deta hai. Rasoi har slip par wahi dibbe padhti hai, apna kaam karti hai, aur ek plate wapas deti hai. Customer rasoi ko kabhi nahi dekhta, aur rasoi ko parwaah nahi ki customer kaun hai, bas yeh ki slip theek se bhari gayi ya nahi. API wahi counter aur wahi slip hai. Yeh ek program ko doosre se kuch maangne deti hai, ek tay format mein jo dono samajhte hain.

Sahaj ka chatbot ek istemaal karta tha. Jab customer send dabata, app ek slip bharta, use us bahari company ko bhejta jo model chalati thi, aur plate aane par use dikha deta.

Slip ek saral format mein likhi thi jise *JSON* kehte hain, jiska bas matlab hai curly braces ke andar labels aur values ki tarah likhi jaankari. Imran ne ek window mein paste ki. Woh Anaya ki umeed se chhoti thi.

```
{
  "messages": [
    { "role": "user",
      "content": "What is the late fee on an electricity bill?" }
  ]
}
```

"Yeh request hai," usne kaha. "Messages ki ek list. Har ek ka ek role hai, aur abhi do hain. *User* woh hai jo pooch raha hai. *Assistant* model ka apna jawaab hai. Ek teesra bhi hai, jisse hum kisi aur din milenge. Bas itna hi. Slip par aur kuch nahi hai."

Anaya ne use dekha. Jise usne ek dimaag samajha tha woh ek list tak simat gayi, aur list ek line tak. Use thoda thaga hua laga aur phir, ek pal baad, raahat.

## Tijori ki chaabi

Kuch bhi dabane se pehle Imran ne monitor ko uski taraf se kuch degree ghuma diya.

"Har slip ke saath ek aur cheez jaani chahiye," usne kaha, "aur woh is poore dhandhe ki sabse khatarnaak line hai." Usne woh dikhayi nahi. Woh akshron aur ankon ki ek lambi string thi, aur use *API key* kehte hain. Key provider ko batati hai ki kaun maang raha hai aur bill kise bhejna hai. Jiske paas bhi yeh hai woh requests bhej sakta hai aur aapka paisa kharch kar sakta hai, aur provider ke records kahenge ki aapne kiya.

Isliye use aisi jagah rahna chahiye jahan koi ajnabi use dekh na sake. App ke code mein nahi, jahan page kholne wala koi bhi use padh sakta hai. Shared folder mein nahi. Kisi saathi ko bheje message mein nahi. Imran ne use ek developer ke baare mein bataya jise woh kabhi jaanta tha, jisne galti se apni key ek public project mein paste kar di thi aur agli subah usne paya ki kai lakh rupaye ka bill aa gaya. "Tijori ki chaabi," usne kaha. "Use counter par nahi chhodte."

## Button dabao

Usne button dabaya. Ek second guzra. Dhusar jagah mein text aaya, late fees ke baare mein ek saaf jawaab ki yeh aamtaur par dene wali rakam ka chhota percent hoti hain, aur salaah ki woh apna bill dekh le.

"Yeh man-gadhant policy hai," Anaya ne kaha.

"Yeh ek aam jawaab hai. Use hamari policy pata nahi kyunki kisi ne use bataya nahi. Baaki jo wapas aaya woh dekho."

Jawaab ke neeche numbers ka ek block tha jis par woh pehle ishaara kar chuka tha.

```
"usage": {
  "tokens_in": 19,
  "tokens_out": 47
}
```

Yeh, *usage block*, har jawaab ke saath aata hai. Yeh batata hai ki kitne tokens andar gaye aur kitne bahar aaye, aur isi par aapka bill banta hai. Provider ke daam har das lakh tokens ke hisaab se bataye jaate hain, aksar jo aap bhejte hain uske liye ek rate aur jo wapas aata hai uske liye zyada.

"Unnees andar. Saintaalis bahar." Imran ne pencil li. "Maan lo input ke das lakh par dhai sau rupaye aur output ke ek hazaar, jo meri apni ginti ke number hain aur kisi ke asli nahi. Toh unnees ko dhai sau se guna karein toh aadha paisa, aur saintaalis ko ek hazaar se karein toh paanch paise se kam. Is ek call ka kharcha lagbhag paanch paise. Ab asli chatbot ki kalpana karo, jisme har baar sab nirdesh bheje jaate hain, aur upar se customer ki poori baatcheet. Ek yatharth call paanch sau tokens andar aur dedh sau bahar ho sakti hai."

Usne likh liya. Paanch sau guna dhai sau, das lakh se bhaag, saadhe barah paise. Dedh sau guna ek hazaar, pandrah paise. Ek call ke lagbhag atthaaees paise. Mahine ke ek lakh calls ka kharcha saadhe sattaees hazaar rupaye.

"Kya yeh zyada hai?"

"Is size ki company ke liye yeh woh number hai jiske baare mein koi poochhega. Yahi baat hai. Main chahta hoon ki tum woh insaan bano jo unke poochhne se pehle bata sake."

Usi ginit mein ek doosra sabak bhi tha, aur Imran ne use ek vaakya mein rakha jo usne spasht roop se pehle bhi kaha tha. *Aap jo har line ka nirdesh jodte hain woh har call par dobara charge hota hai.* Request ki shuruaat mein machine ko jo kuch bataya jaata hai woh har baar padha jaata hai, aur uska paisa diya jaata hai.

## Woh sawaal jo woh poochhna chahti thi

"Chalo," Imran ne kaha. "Kuch poochho. Kuch aisa jo use bilkul nahi pata ho sakta."

Anaya isi ka intezaar kar rahi thi. Usne ek aisi company ka naam type kiya jo thi hi nahi, Rastogi Finance, jo usne brush karte waqt gadh liya tha, aur poochha ki uski refund policy kya hai.

Jawaab do second se kam mein aa gaya. Woh shishtta se bhara aur byore waala tha. Rastogi Finance, usne kaha, payment ke chaudah din ke andar refund deti hai, shart yeh ki request app ke zariye ki jaaye, aur unhe paanch se saat kaam ke dinon mein process karti hai. Usne kisi asuvidha ke liye khed jatane wala ek vaakya bhi jod diya.

Woh use ghurti rahi. Aisi koi company nahi thi. Aisi koi policy nahi thi. Usne ek sambhaavit-si company ki sambhaavit-si policy gadh di thi, is sab ke saath ki use pata hai woh kya kar raha hai.

"Usne unke baare mein kabhi suna hi nahi," usne kaha.

"Nahi."

"Aur usne kaha bhi nahi."

"Woh sabse sambhav text predict karta hai." Imran peeche jhuka. "'what is the refund policy of' ke baad sabse sambhav aage ka text ek refund policy hai. 'Mere paas is baare mein koi jaankari nahi' ek sambhav aage ka text hai par, jis likhe hue se usne seekha, usme ek durlabh wala. 'Mujhe nahi pata' kehna ek vyavahaar hai jise train karna padta hai aur uske liye test karna padta hai, aur woh hamesha tikta nahi."

Yahi shaam ka sabak tha aur woh use baithta hua mehsoos kar sakti thi. Sahi jawaab aur gadha hua jawaab bilkul ek jaise padhte hain. Awaaz ka vishwas kisi cheez ka saboot nahi hai. Use kisi tool ki galtiyan naapna isliye aana chahiye tha ki galtiyan saaf nahi hongi; isliye nahi ki woh saaf hongi.

Use Pooja Nair yaad aayi, jisne chatbot ke "verification" par bharosa kiya tha. Use yaad aaya ki woh kaisa sunayi deta tha. Woh ek aise insaan ki tarah sunayi deta tha jise pata ho.

## Anaya ke us raat ke notes

Woh ghar gayi aur, kyunki use ab aadat padne lagi thi, shaam ko apne shabdon mein likha, jo uska tareeka tha yeh jaanchne ka ki usne samjha ya nahi.

*Ek program model se API ke zariye baat karta hai, ek tay format mein slip bhej kar. Slip JSON hai. Usme messages ki ek list hai. Har message ka ek role hai. Jo key hamein pehchaanti hai woh gupt hai aur agar kisi aur ke paas ho toh paisa kharch karti hai. Har jawaab ke saath usage block aata hai jo batata hai ki humein kitna dena hai. Ek call ka kharcha bahut chhota hai; ek lakh ka kharcha budget ki ek line hai. Model utni hi saafgoi se ek man se banaya hua jawaab de sakta hai jitni saafgoi se sach.*

Usne ise wapas padha aur dekha ki kya chhoota tha. Usme is baare mein kuch nahi tha ki kya model use yaad rakh sakta hai.

Jaate waqt usne Imran se yahi poochha tha. Usne, ek aise insaan ki halki muskaan ke saath jo ek surprise thama raha ho, kaha tha, "Kal aana. Humein baat karni chahiye ki woh kyun nahi rakh sakta."

## Saath le jaane layak baatein

Ek program model tak API ke zariye pahunchta hai, jo counter ke aar-paar thamayi gayi order slip jaisi kaam karti hai, ek saral format JSON mein likhi hui, jisme messages ki ek list hoti hai, har ek ke role ke saath. Woh raaz jo aapko pehchaanta hai, API key, aisi jagah rakhni chahiye jahan koi ajnabi use na dhoondh sake. Har jawaab ke saath ek usage block aata hai jo dikhata hai ki kya andar gaya aur kya bahar aaya, aur aap usi ka paisa dete hain, isliye ek call ka kharcha koi kuch banane se pehle hi nikaal sakta hai. Aur machine saaf-suthra jawaab tab bhi deti hai jab uske paas unka koi aadhar na ho, isliye vishwas bhari awaaz saboot nahi hai.

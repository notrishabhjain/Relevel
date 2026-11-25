---
title: Lambi Windows, Sambhal Kar Bhare Kamre
summary: Ek vendor kehta hai ki bahut bada context window ho toh retrieval ki zaroorat nahi. Ek product manager do sawaal poochhti hai, aur meeting wahin khatam ho jaati hai. Aap dekhte hain ki request mein kya jaata hai, yeh is se zyada zaroori hai ki kitna fit hota hai. Aap context engineering, token budgets, caching aur compaction se milte hain.
course: ch10
goals:
  - do wajah bata paana ki bahut bada context window ho tab bhi sahi material dhoondhna zaroori hai
  - bata paana ki context engineering kya hai, aur ek owner ke saath token budget likh paana
  - samjha paana ki caching us request ko sasta kaise banati hai jo har baar ek jaise shuru hoti hai
  - bata paana ki compaction kya hai aur uska risk kya hai, personal data ke liye bhi
terms:
  - context engineering | model ki mez ko sambhal kar bharna. Aap tay karte hain ki har request mein kya jaayega, kis order mein, aur kya bahar rahega: instructions, examples, saboot, chat history aur tool ke results | 
  - token budget | text ki eenton ke liye kharche ka budget. Ek plan jo request ke har hisse ko tokens ka uska hissa deta hai, aur ek insaan jo total ka owner hai aur jaanta hai ki pehle kya kaatna hai | token budgets
  - caching | dukaan jaisi jo aapka roz ka order taiyaar rakhti hai. Provider request ka woh shuruaati hissa yaad rakhta hai jo woh padh chuka hai. Agli baar shuru wahi ho toh request sasti aur tez hoti hai | cache
  - compaction | lambi chat ko chhota karna. Beech ka hissa summarise karte hain, shuru aur aakhir rakhte hain | compact
---

May mein ek model vendor ka solutions architect glass room mein presentation dene aaya. Vendor woh company hai jo aapko product bechti hai. Use ek founder ne bulaya tha, jo use ek conference mein mile the. Uski slides ka title tha "Context is Everything". Ek slide par numbers ki seedhi thi: 32 hazaar, ek lakh, ek million.

Uski daleel yeh thi. Purana tareeka khatam. Documents ko tukdon mein kaatna aur sahi tukde laana sirf chhoti windows ka jugaad tha. Window model ki mez hai, aur ek baar mein sirf wahi padha ja sakta hai jo mez par fit ho. Uske vendor ki mez par ek million tokens aate the. Toh har sawaal ke saath poori library bheji ja sakti thi. Na kaatna, na embeddings, na dhoondhna. Yeh aasaan, sasta aur behtar hota.

Agar woh sahi tha, toh pichhle 6 hafte bekaar gaye. Anaya ne haath uthaya. Usne do sawaal poochhe. Pehla, agar har baar poori library jaaye, toh ek sawaal ka kharch kitna hoga?

Doosra, kya woh dikha sakta hai ki jab zaroori fact poori bhari window ke beech mein ho, toh model kitna achha jawaab deta hai? Phir usse wahi fact ek chhoti request mein rakh kar milaiye. Usne kaha ki use yeh dekhna padega. Anaya ne kaha ki jab ho jaaye toh bhej dena. Usne kabhi nahi bheja.

Is chapter mein aap woh jawaab dekhte hain jo Imran ne dhoondhe. Woh sikhate hain ki model ko kya dikhana hai, yeh kaise tay karein.

## Case: woh slide jiska daam nahi lag sakta tha

Anaya ka use sharminda karne ka irada nahi tha. Usne isliye poochha kyunki poora daava un do jawaabon par tika tha. Uske jaane ke baad Imran Qureshi ne kaam kiya. Usne Friday ko results laaye.

## Slide ke galat hone ki do wajah

Pehli wajah kharch hai. Badi request ka wahi kharch hota hai jo badi request ka hota hai. Aap text ki har eent ke paise dete hain. Imran ne Sahaj ki poori policy library ka daam lagaya, lagbhag 2 lakh tokens. Usne ₹250 per million ka ek banaya hua rate liya. Ek sawaal ₹50 ka pada. Sahi 3 tukde laane mein 30 paise lage the. Mahine ke ek lakh sawaalon par yeh ₹50 lakh banam ₹30,000 hai.

Doosri wajah dekhne mein mushkil hai. Model apni mez ko mez bhari hone se bahut pehle hi kharab tareeke se use karne lagta hai. Imran ne ise parkha. Usne policies se ek lamba document banaya. Usne ek anokha rule teen jagah rakha: shuru ke paas, beech mein aur aakhir ke paas. Har jagah ke liye usne 20 sawaal poochhe jo us rule par tike the.

Table: Sahi jawaab, rule kahan tha uske hisaab se
| Rule kahan tha | Sahi jawaab |
| --- | --- |
| Shuru ke paas | 20 mein se 19 |
| Beech mein | 20 mein se 11 |
| Aakhir ke paas | 20 mein se 18 |
| Wahi rule, ek chhoti request mein laaya gaya | 20 mein se 20 |

Yeh result ek model ka hai, ek din ka. Doosra model alag hoga. Lekin shape aam hai. Imran ne ise open-book exam se jodha. Student poori library hall mein le jaa sakti hai. Par uske paas sirf ek ghanta hai.

Use kitaab ke aage ka hissa mil jaata hai. Peeche ka hissa mil jaata hai. Beech ka hissa woh chhod kar aage nikal jaati hai. Aur koi use nahi batata ki kaun se jawaab gaye.

Yahan bhi yahi hota hai. Koi error nahi dikhta. Jawaab bas galat hote hain.

::: key Capacity matlab use nahi
Document window mein fit ho jaata hai. Iska matlab yeh nahi ki model use use karega. Vendors batate hain ki kitna fit hota hai. Team ko naapna hota hai ki kitna use hota hai.
:::

## Kamre mein kya jaata hai

Bada kamra problem hal nahi karta. Isliye kamre mein kya rakha jaata hai, wahi poora sawaal hai. Imran ne is kaam ko ek naam diya. *Context engineering* ka matlab hai mez ko sambhal kar bharna. Aap tay karte hain ki har request mein kya jaayega, kis order mein, aur kya bahar rahega.

Hisse hain instructions, examples, saboot, pichhle messages aur tools ke jawaab. Yeh aksar kisi ek instruction ke words se zyada maayne rakhte hain. In mein se bahut se faisle technical nahi hain. Kitni history rakhni hai? Kya customer ki pichhli complaints daalni hain? Kya policy ka ek page payment ki request mein jaana chahiye? Yeh product ke faisle hain. Har ek ki ek technical keemat hai.

Phir Imran ne Anaya ko ek saadha kaam diya jisme ek ghanta laga. Usne chatbot ki ek request ke liye *token budget* likha. Ise kharche ka budget sochiye, par text ki eenton ke liye. Token budget ek plan hai jo request ke har hisse ko uska hissa deta hai.

Table: Chatbot ki ek request ka token budget
| Request ka hissa | Tokens |
| --- | --- |
| Standing instructions | 400 |
| Un functions ke descriptions jinhe woh bula sakta hai | 300 |
| Policy ke 3 tukde | 1,200 |
| Ab tak ki conversation | 600 |
| Jawaab | 200 |
| Total | 2,700 |

Phir Imran ne use maan lene ko kaha ki bill double ho gaya. Woh pehle kya kaategi?

Policy ke tukde sabse bada hissa the. Woh sabse aasaani se chhote bhi ho sakte the. Woh 3 ki jagah 2 la sakti thi. Ya results ko behtar order kar sakti thi, taaki kam tukdon mein sahi facts hon. Lekin unhe kaatne se un jawaabon ka risk tha jinhe ek saath kai sections chahiye.

Conversation history (chat ka ab tak ka hissa) agli thi. Use kaatne se follow-up sawaal toot jaate. Function descriptions tabhi ja sakte the jab woh machine ke kuch kaam hata de. Anaya ne dekha ki jo kuch woh kaat sakti thi, woh kuch na kuch tod deta tha.

::: key Budget ka ek owner chahiye
Naam lijiye ki har kaat se kya risk mein padta hai. Phir answer key se use naapiye (teacher ki sawaal aur sahi jawaab ki list). Bina owner ka budget badhta hi rehta hai.
:::

## Wahi shuruaat, sasta bill

Ek technique Anaya ko pasand aayi kyunki woh lagbhag muft thi. Providers (model chalane wali companies) request ka woh shuruaati hissa yaad rakh sakte hain jo woh padh chuke hain. Agar aage ka hissa har baar wahi ho, toh baad ki requests sasti aur tez hoti hain. Yeh *caching* hai. Yeh us dukaan jaisa hai jo aapka roz ka order taiyaar rakhti hai.

Yeh ek saadi aadat ko inaam deta hai. Jo hissa kabhi nahi badalta, use pehle rakhiye. Yeh standing instructions aur reference text hain. Jo hissa badalta hai, use aakhir mein rakhiye, jaise customer ka sawaal. Caching ne guard ke lambe instructions ko uske darr se sasta bana diya. 400 tokens aage rakhe hain, har call par wahi. Cache ka yeh achha use hai.

## Conversation ko chhota karna

Aakhri idea tab aaya jab Anaya ne ek sawaal poochha. 20 messages ki chat jab budget se bahar badh jaaye, toh uska kya hota hai? Aam jawaab *compaction* hai. Aap chat ke beech ka hissa summarise karte hain. Shuru aur aakhir rakhte hain. Wahi bhejte hain.

Yeh kaam karta hai. Lekin yeh beech ki chhoti details pakka kho deta hai. Anaya ne ek example diya: kiya hua callback ka waada. Imran ne maana ki aisi hi detail risk mein hoti hai. Isliye must-keep list April mein likhi gayi thi. Summary jo bhi rakhe, jo cheez khoni nahi chahiye woh us list mein honi chahiye.

Ek doosri, chupi problem thi. Summary naya text hai, jo ek model likhta hai. Maan lijiye chat ke beech mein ek identity number tha. Agar guard ne use andar aate waqt chhupa diya tha, toh summary chhupa hua version le jaati hai.

Agar woh chhupa nahi tha, toh summary use copy kar leti hai. Dono hi surat mein guard ko summary ke aage bhi baithna padega. Anaya ne diagram mein ek doosra chhota box joda. Woh summariser se bahar jaane ke raaste par tha.

Usne vendors se baat ke liye ek seekh bhi likhi. Koi kehta hai ki unka assistant user ko yaad rakhta hai. Poochhiye ki yaad kahan rakhi jaati hai. Woh ek store hai jo application rakhti hai. Woh har message ke saath bheja jaata hai, aur har baar uske paise lagte hain. Goldfish yaad rakhiye. Model har message ke baad bhool jaata hai, jab tak aap purani chat dobara na bhejein.

## Summary

Bahut bada context window sahi material dhoondhne ki zaroorat nahi hatata. Iski do wajah hain. Badi request har sawaal par wahi badi keemat leti hai. Aur model ko jo bheja gaya, use woh window bhar jaane se bahut pehle kam achha use karta hai, khaaskar beech ke material ko.

- Jo matter karta hai woh yeh hai ki har request mein kya jaata hai. Yeh context engineering hai. Ise owner ke saath token budget ki tarah sambhaliye. Owner jaanta hai ki pehle kya kaatna hai aur har kaat kya todegi.
- Jo hissa wahi rehta hai, use aage rakhiye. Tab provider use cache kar sakta hai, aur kharch ghat jaata hai.
- Compaction lambi chat ke beech ko summarise karta hai aur chhoti details kho deta hai. Model jo bhi likhe, summary bhi, woh ek aur jagah hai jahan personal detail pahunch sakti hai.

Agle chapter mein Lonavala ke paas ruki ek train Anaya ko dikhati hai ki shape wala intezaar chhota kyun lagta hai. Yeh bhi dikhata hai ki jo models jawaab dene se pehle sochte hain, unke liye iska kya matlab hai.

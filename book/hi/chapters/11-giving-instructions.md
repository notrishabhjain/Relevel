---
title: Nirdesh Dena
summary: Team pehli baar model se guard ka kaam karne ko kehti hai, use teen alag tareeko se galat hote dekhti hai, aur seekhti hai ki failure ko kam baar hona banana aur uski wajah ko hata dena, dono mein kya farak hai.
course: ch2 ch21
terms:
  - prompt | woh text jo aap model ko bhejte hain, jisme nirdesh, udaharan aur woh material ho sakta hai jis par use kaam karna hai | prompts
  - system prompt | woh sthayi nirdesh jo ek app har request ke saath bhejta hai, yeh batate hue ki assistant kaun hai aur use kya karna aur kya nahi karna hai | system prompts
  - temperature | ek setting jo tay karti hai ki model kitni baar agla kam sambhav token chunta hai; kam par har baar milte-julte jawaab aate hain, zyada par zyada variety | 
  - hallucination | ek vishwas bhara, achhe se bana jawaab jo man se gadha gaya hai; yeh isliye hota hai ki model sambhav text predict karta hai, aur "mujhe nahi pata" shayad hi sabse sambhav text hota hai | hallucinations, hallucinate
  - worked example | jis output ki aapko zaroorat hai uska ek poora kiya hua namoona, jo model ko dikhaya jaata hai taaki woh aapke vivaran ki nakal karne ke bajaye format ki copy kare | worked examples
---

"Theek hai," Imran ne kaha. "Theory bahut hui. Isse kaam karne ko kehte hain aur dekhte hain kya hota hai."

Agla Monday tha. Farah subah jaldi aayi thi, coffee aur ek card par teen messages ke saath, jo uski team ne pichhli shaam asli customers ki shaili mein likhe the. Woh asli nahi the. Anaya ne isi baat par zor diya tha, aur Lakshmi ne, jab use bataya gaya, kaha tha ki project ke baare mein yeh pehli samajhdaar baat hai jo usne suni, jise Anaya ne taareef maan liya. Asli logon ke raazon par test kiya gaya privacy tool khud ek chhota ghotala hota.

Pehla message tha: *Mera naam Amit Sharma hai. Mera PAN ABCDE1234F hai aur maine apne HDFC account jiske ant mein 4521 hai usse ₹4 lakh transfer kiye. Mera loan reject kyun hua?*

Imran ne use ek window mein type kiya, apni ek line ke neeche.

*Is message mein har personal jaankari ki list banao.*

## Pehla jawaab

Jawaab do second mein aaya.

```
1. Name: Amit Sharma
2. PAN: ABCDE1234F
3. Bank: HDFC
4. Account ending: 4521
5. Amount transferred: ₹4 lakh
6. Loan rejection
```

"Bura nahi hai," Farah ne kaha.

"Inmein se chaar sahi hain," Anaya ne kaha, jo pencil lekar padh rahi thi. "Naam, PAN, bank, aakhri ank. Rakam personal nahi hai, hai kya? Woh ek number hai. Aur loan reject hona aisi detail nahi hai jisse insaan ko dhoondha ja sake."

"Hoti, agar insaan mashhoor hota," Imran ne kaha. "Par baat samajh gaya."

"Toh usne do cheezein chhupayin jinhe chhupane ki zaroorat nahi thi."

"Usne do cheezein *list* kin. Chhupana agla dibba hai." Usne wahi message dobara chalaya. Is baar list mein chhe ki jagah chaar item the: koi loan nahi, koi rakam nahi. Teesri baar mein saat aaye, jisme *Sharma* shabd doosri baar, apni alag entry ke roop mein tha.

"Yeh badalta kyun hai?" Farah ne poochha.

## Variety ka ek dial

Yeh, Imran ne kaha, doosra control tha, aur woh ise kisi aise ko dikhane ka intezaar kar raha tha jise parwaah ho.

Har kadam par model ke paas kuch sambhaavit agle tokens hote hain, chances ke saath. *Temperature* naam ki setting tay karti hai ki machine kam sambhav wale mein se ek chunne ko kitni tayyar hai. Zyada temperature par woh door tak ghoomti hai, aur jeevant, alag-alag jawaab deti hai: kavita likhne ke liye achha, ya kisi pet ke naam sochne ke liye. Kam par, shoonya ke qareeb, woh lagbhag hamesha sabse sambhav token leti hai, isliye wahi sawaal lagbhag wahi jawaab paata hai har baar.

Usne use neeche kiya aur message paanch baar chalaya. Paanch lists, lagbhag ek jaisi.

"Is kaam ke liye," Anaya ne kaha, "main ise kam chahti hoon."

"Zaroor. Tum chahti ho ki wahi sawaal Tuesday ko wahi jawaab paaye jo Monday ko." Usne haath uthaya. "Lekin doosra hissa bhi suno. Kam temperature jawaabon ko ek jaisa banata hai. Sahi nahi banata. Agar woh shoonya par galat hai, toh har baar usi tarah galat hai. Kisi ko mat kehne dena ki unhone ek dial ghuma kar ise accurate bana diya."

## Sthayi nirdesh

Doosra message Hinglish mein tha, aur Farah ne use khud type kiya, us tez, saaf raftaar se jo koi din mein chaalees baar karne wala karta hai. *Sir mera aadhaar 4321 5678 9012 hai aur ye number 98xxxxxx12 pe call kar lena.*

Jawaab ne Aadhaar number dhoondh liya. Usne *98xxxxxx12* ko bhi mobile number ke roop mein list kiya.

"Woh pehle se chhupa hua hai," Farah ne kaha. "Agent ne x type kiye the. Ise detail ki tarah list karne se hum ise do baar chhupa denge."

"Theek, hum yeh likh lete hain," Imran ne kaha. "Aur humein yeh ek baar kehna hai, har baar nahi. Model bhool jaata hai, isliye jo kuch hum chahte hain woh har request ke saath bhejna padega."

Usne ek doosra box khola aur ek chhota paragraph type kiya. Yeh sthayi nirdesh, jo batate hain ki assistant kaun hai aur use kya karna hai aur kya nahi, *system prompt* kehlate hain. Yeh aam text hai, khud message se kuch alag nahi, jo app har request ke saath sabse pehle bhejta hai. Aam taur par, *prompt* woh kuch bhi hai jo aap model ko bhejte hain: nirdesh, udaharan, woh material jis par use kaam karna hai. System prompt bas woh hissa hai jo ek jaisa rehta hai.

Anaya ko kuch sujha. "Jab koi vendor kehta hai ki unhone AI ko aapki company ke liye customise kiya hai..."

"Unhone aamtaur par ek system prompt likha hota hai," Imran ne kaha. "Jo theek hai, aur jaanne layak hai. Unse poochho ki aur kya, agar kuch, unhone badla."

## Jahan woh cheezein gadhta hai

Teesra message woh tha jo Imran ne bacha kar rakha tha.

*Mere driving licence ko renew karne ke liye mujhe kaun se documents chahiye?*

Isme kuch personal nahi tha. Ek achha tool kehta ki nahi hai aur message ko chhod deta. Model ke jawaab ne, pehli baar mein, bilkul yahi kiya.

Teesri baar mein, usne kaha: *Personal information: driving licence (document type).* Paanchvi baar mein, usne ek detail poori tarah gadh di.

```
Personal information: the customer's city of residence, likely Pune.
```

"Pune," Farah ne kaha. "Use Pune kaise pata? Message mein toh Pune hai hi nahi."

"Use nahi pata," Imran ne kaha. "Usse message mein personal jaankari poochhi gayi thi aur use laga ki jawaab ki umeed hai. Us sawaal ke baad sabse sambhav text ek list hai, aur list mein kuch toh hona hi chahiye."

Yeh us failure ka naam hai jiska nasamajh sa naam hai: *hallucination*. Yeh ek vishwas bhara, achhe se bana jawaab hai jo man se gadha gaya hai, aur woh bilkul sach jaisa dikhta hai. Shabd kharabi ka ishaara karta hai, lekin machine design ke hisaab se kaam kar rahi hai: sambhav text predict karna, aisi sthiti mein jahan zaroorat khamoshi ki thi. Model bharose se aapko nahi batata ki use nahi pata. "Mujhe nahi pata" kehna alag se train karna padta hai, aur woh hamesha tikta nahi.

"Humare liye, yeh ek khaas tareeke se bura hai," Anaya ne dheere se kaha. "Agar woh koi detail gadh de, toh hum kuch aisa chhupa denge jo kabhi tha hi nahi. Aur agar gadhi hui galat ho, toh kisi ko pata nahi chalega, kyunki tulna karne ko kuch nahi hai."

## Chaar cheezein jo madad karti hain, kram mein

Unhone din ka baaki hissa nirdesh ko behtar banane mein bitaya, aur jo seekha woh sunne mein jitna lagta hai usse kam saaf tha. Zyadatar log, Imran ne kaha, pehla prompt ek request ki tarah likhte hain, *kripya yeh karo*, aur woh utni hi baar kaam karta hai jitni baar ajnabi se bina bataye ki aap kahan hain raasta poochhne par. Prompt ko specification ki tarah dekhna behtar hai. Chaar techniques hain, aur woh barabar mazboot nahi hain.

Sabse mazboot, jise log sabse aakhir mein aazmate hain, *worked example* hai. Agar aap output ko shabdon mein bayaan karte hain, toh model aapke shabdon ki nakal karta hai. Agar aap ek poora kiya hua udaharan dikhate hain, toh woh format ki copy karta hai. Anaya ne ek likha: ek banaya hua message, aur woh list jo woh chahti thi, line-dar-line, har ek par ek kism aur ek value ke saath. Usne ek doosra, tedha jodiya, ek message jisme koi personal detail nahi thi, jiske baad jawaab *Nothing found.* tha. Do udaharan, ek aam aur ek tedha, chhe ek jaise se behtar hain, aur bhejne mein kam tokens lagate hain.

Doosri technique hai kaam ka aur padhne wale ka naam lena. *Har personal jaankari ki list banao* ek request hai. *Tum ek customer ke chat message mein woh details jaanch rahe ho jo ek insaan ko pehchaan sakti hain. Tumhara padhne wala ek program hai, jo tum jo list karoge use chhupa dega* ek kaam hai. Yeh nateeje ko kaafi badal deta hai aur lagbhag kuch kharcha nahi karta.

Teesri hai kaam ko charno mein todna. Poora nateeja maangne par machine saare hisse ek saath karti hai. Unhe kram se maangne mein kuch tokens lagte hain aur aisa kaam milta hai jise aap jaanch sakte hain. *Pehle, message padho. Doosre, har detail list karo aur batao ki woh kahan hai. Teesre, woh sab hata do jo kisi insaan ke baare mein nahi hai.*

Chauthi, aur sabse kamzor, woh hai jo galat hote dekha gaya use mana karna. *Aisi detail ka andaaza mat lagao jo message mein nahi hai.* Yeh ek ya do baar karne layak hai, un failures ke liye jo aapne sach mein dekhe hain. Yeh lambi list ki tarah karne layak nahi hai, kyunki yeh utna achha kaam nahi karta jitna log umeed karte hain.

Wajah is chapter ka sabse zaroori idea hai, aur unhone ise apne haathon se saabit kiya. Anaya ne mana karne wali line jodi, aur *Pune* ka gadhna ruk gaya. Ek din ke liye ruk gaya. Tuesday ko Farah ne ek cousin ke baare mein message likha jo "station ke paas wale bank mein" kaam karta tha, aur machine ne, imaandaari se, shehar ka andaaza nahi lagaya, aur uski jagah ek aisi bank branch ka naam de diya jo thi hi nahi.

"Woh ab bhi karta hai," Anaya ne kaha.

"Kam karta hai. Ek nirdesh bas itna hi kar sakta hai." Imran ne ek pal deewar ko dekha. "Nirdesh failure ko *kam baar hone wala* banata hai. Woh us wajah ko nahi hatata jis se woh hota hai. Wajah yeh hai ki yeh cheez text ko aage badhane ke liye bani hai, aur kabhi-kabhi sambhav aage ka text jhootha hota hai. Agar koi kahe ki problem hal ho gayi kyunki unhone ek niyam jod diya, toh ek alag sawaal poochho: kya isse wajah hati, ya sirf lakshan kam hua?"

Usne woh shabd glass room ke whiteboard par, laal rang mein, sabse upar likhe, jahan woh baaki project ke liye rahe.

*Rarer is not fixed.*

## Lambe nirdesh ki keemat

Ek aakhri baat thi, aur woh vyavaharik thi. System prompt udaharanon aur charno aur chetawani ke saath ek line se chaar sau tokens tak bad gaya tha. Woh har message ke saath bheja jaane wala tha.

"Mahine ke ek lakh chats par," Imran ne kaha, "yeh chaalees million tokens ke nirdesh hain, chahe customer ek shabd bole ya hazaar. Hum har baar iska paisa dete hain." Usne kandhe uchkaye. "Yeh karne layak hai. Par main chahta hoon ki yeh ek faisla ho, ek hadsa nahi."

## Saath le jaane layak baatein

Prompt woh hai jo aap model ko bhejte hain, aur uska sthayi hissa, jo har request ke saath dohraya jaata hai kyunki model ko kuch yaad nahi rehta, system prompt hai. Temperature variety aur ek jaisepan ke beech ka dial hai; kam setting jawaabon ko ek jaisa banati hai, sahi nahi. Jab model se woh maanga jaata hai jo uske paas nahi hai, toh woh aksar use usi shaant awaaz mein gadh deta hai jo woh sach ke liye istemaal karta hai, aur ise hallucination kehte hain. Chaar techniques prompt ko behtar banati hain, aur taqat ke kram mein woh hain: ek worked example dikhao, kaam aur padhne wale ka naam lo, kaam ko charno mein todo, aur jo galat hote dekha use mana karo. Inmein se koi bhi failure ki wajah nahi hatata. Woh use sirf kam baar hone wala banati hain, aur nirdesh ka har shabd jitni baar bheja jaata hai utni baar charge hota hai.

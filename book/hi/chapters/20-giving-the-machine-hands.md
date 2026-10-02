---
title: Machine Ko Haath Dena
summary: Barah ank ka order number bilkul Aadhaar number jaisa dikhta hai, aur dono mein farak batane ka ek hi tareeka hai: use dhoondh kar dekhna. Model ko dhoondhne dene se team seekhti hai ki loop kya hota hai, uska kharcha kitna hai, aur uske kaun se kaam mein insaan chahiye.
course: ch9
terms:
  - tool calling | model ko apne program se kisi function ko chalwane ke liye kehne dena, function aur uske arguments ka naam lekar; program use chalata hai aur nateeja wapas bhej deta hai | tool call, tool calls
  - tool description | text ki woh kuch lines jo model ko batati hain ki function kya karta hai, kya lautata hai aur kya nahi; model unhe padh kar function chunta hai, isliye dhundhli description ek bug hai | tool descriptions
  - AI agent | ek model, function ka ek set jo woh maang sakta hai, ek loop, aur kab rukna hai uska ek niyam | AI agents
  - step limit | ek AI agent rukne se pehle zyada se zyada kitne daur le sakta hai, jo program tay karta hai, model ke bharose nahi chhoda jaata | step limits
---

Barah ank ka order number woh cheez thi jo marne ka naam nahi le rahi thi.

Woh sorting test mein chaar baar aaya tha, jab sorter ne order numbers ko Aadhaar numbers kaha aur guard unhe chhupa deta. Woh edge cases ki list mein dobara aaya tha. Farah ke agents ko apna kaam karne ke liye order number dekhna hota tha. Customers use hamesha type karte the. Aur order number aur Aadhaar number, aankh ke liye aur kisi bhi rule ke liye, ek jaise the: barah ank, kabhi chaar-chaar ke groups mein, aur unme kuch nahi jo dikhaye ki kaun sa kaun hai.

"Jaanne ka bas ek hi tareeka hai," Imran ne ek Tuesday ko kaha. Woh asaadharan roop se khush dikh raha tha. "Order system se poochho."

## Ek model jo maang sakta hai

Ab tak model ne sirf ek tarah ka kaam kiya tha. Woh text padhta tha aur text likhta tha, aur ek insaan ya program jo woh likhta use padhta tha. Imran ne jo prastaav rakha woh alag tha. Woh chahta tha ki model keh sake: *Mujhe pata nahi yeh number kya hai. Kripya ise orders table mein dekho aur batao ki yeh hai ya nahi.*

Woh yeh khud nahi kar sakta. Model kuch chala nahi sakta. Woh sirf maang sakta hai. Tareeka, jise Imran ne ek card par paanch kadmon mein bataya, itna saral hai ki zor se kaha ja sake.

Aap request mein model ko uplabdh functions ka vivaran dete hain, har ek ka ek naam, ek maqsad aur woh arguments jo woh leta hai. Woh vivaran bas aur text hai. Model, agar use ek chahiye, toh gadya ki jagah ek request se jawaab deta hai: *is function ko in arguments ke saath chalao.* Aapka apna program, model nahi, function chalata hai. Aap nateeja ek aur message ke roop mein wapas bhejte hain. Model phir ya toh ek aur call maangta hai ya apna antim jawaab likhta hai. Yeh tab tak chalta rehta hai jab tak model ruk na jaye ya aap use rok na dein.

Ise *tool calling* kehte hain. Yeh woh tareeka hai jo har us cheez ke peeche hai jise AI ke "kaam karne" ke roop mein bataya jaata hai: kuch dhoondhna, ek slot book karna, ek record update karna. Yeh sirf aage-peeche jaata text hai, beech mein aam code ke saath jo asal kaam karta hai.

Ek model, function ka ek set jo woh maang sakta hai, ek loop, aur kab rukna hai uska ek niyam milkar ek *AI agent* banate hain. (Farah ke support desk ke saathi bhi agents kehlate the, aur yeh shabd saal bhar office mein uljhan paida karne wala tha. Anaya ne ise turant tay kar diya. Uske *support agents* the. Machine ke *AI agents*. Imran ne kaha kisi ko yaad nahi rahega.)

## Label par likhe shabd

Imran ne pehla function khud likha. Woh ek number leta tha aur lautata tha ki us number ka order maujood hai ya nahi, aur woh kis customer ka hai. Usne use ek description di, ek line lambi, aur chalaya.

Model ne galat function maanga.

Box mein do the: ek jo order dhoondhta tha, aur ek jo payment dhoondhta tha. Pehle ki description mein, poori, likha tha *Customer ke number ke baare mein jaankari dhoondhta hai.* Model ne use padha, jaise model hamesha padhta hai, ek saade vaakya ki tarah, aur doosra chuna.

"Woh label padhta hai," Imran ne kaha. "Chunne ka bas yahi tareeka hai. Koi sahaj-buddhi nahi. Koi antahprerna nahi. Woh label padhta hai, aur agar label dhundhla hai, toh woh galat function chunta hai. Yeh likhne ka bug hai, buddhi ki failure nahi."

Usne use dobara likha, aur naya zor se padha. *Lautata hai ki is exact number ka order hai ya nahi, aur woh kis customer ka hai. Payment history, rakam ya pate nahi lautata. Payments ke liye, look_up_payment istemaal karo.*

Achhi description batati hai ki function kya wapas deta hai, kya nahi, aur kab doosra istemaal karna hai. Description ke andar milte-julte function ka naam lena us uljhan ko rok deta hai jo zyadatar teams launch ke baad hi dhoondhti hain. Woh, Imran ne kaha, system ki sabse kam aanki gayi code ki line thi. *Tool description* woh code hai jo English mein likha jaata hai.

## Har daur pichhle se mehnga

Loop chal gaya. Ek message aaya jisme barah ank ka number tha. Finder ne kaha ki woh Aadhaar number ya order number ho sakta hai. Model ne ek lookup maanga. Program ne use chalaya. Jawaab wapas aaya: *us number ka ek order maujood hai.* Model ne tay kiya ki woh order number hai, aur guard ne use chhod diya.

Phir Anaya ne woh kiya jo usne karna seekha tha, aur poochha ki kharcha kya hai.

"Ek akeli call lagbhag barah sau tokens ki hai," Imran ne kaha. "Par yeh ek se zyada call hai. Loop mein har baar jab hum ghoomte hain, ab tak ki poori baatcheet dobara bheji jaati hai, tool ke jawaab ke saath."

Usne chhe kadmon ka ek daur likha. Pehle mein barah sau tokens. Doosre mein pandrah sau, model ki request aur jawaab jodkar. Atharah sau. Ikkees sau. Chaubees. Sattaees.

Kul gyarah hazaar saat sau tokens.

"Ek akeli call ke kharche se lagbhag das guna," Anaya ne kaha. "Chhe kadmon ke liye."

"Chhe kadmon ke liye, in numbers ke saath. Apne naapo. Niyam bas itna hai ki input kadmon ki sankhya se tez badhta hai, kyunki har kadam apne se pehle sabhi ko saath leta hai." Usne card par thapki di. "Jo agent tumhari yojana se do kadam zyada leta hai woh bill ko doguna kar sakta hai. Use kitne kadam lene ki ijaazat hai yeh ek faisla hai, aur iski keemat hai."

## Chaar bure din

Agli dopahar Imran ne use jaan-boojh kar chaar tareeko se toda, taaki woh dekh sake ki aisi machine jab cheezein galat jaati hain toh kya karti hai.

Pehle mein, order system dheema tha, aur lookup time out ho gaya. Model ne, jise bataya gaya ki lookup fail ho gaya, phir koshish ki. Aur phir. Chaudahvi koshish tak woh khushi-khushi wahi lookup maang raha tha, bina kisi maqsad ke, badhte kharche par.

Doosre mein, function ne ek error message lautaya. Model ne use nateeje ki tarah padha aur uske aadhar par ek vishwas bhara vaakya likha.

Teesre mein, usne ek aisa function bulaya jo tha hi nahi, jise usne khud gadha tha, sambhaavit dikhne wale arguments ke saath.

Chauthe mein, do functions ne ek doosre ko ulta diya. Model unke beech bina ant ke aage-peeche gaya.

"In sab mein se har ek control ki problem hai," Imran ne kaha. "Model ghatiya nahi hua. Use galat hone ke asimit mauke diye gaye." Usne ek file kholi aur upar ke paas ek line jodi. *Adhiktam paanch daur. Uske baad, ruko, aur kaho ki tum tay nahi kar sake.*

Yeh line *step limit* hai, aur kisi bhi loop mein pehli cheez jo set karni chahiye. Model ise set nahi karta aur uspar bharosa nahi kiya ja sakta; program ko karna padta hai. Teams ise chaunka dene wali baar bhool jaati hain. Bina rukne ke niyam ka loop agent nahi hai. Woh ek risaav hai.

## Padhna aur karna

Hafte ke ant mein Farah ek sujhav lekar aayi, aur uske saath ek sawaal jo guard ko hamesha ke liye aakaar dene wala tha.

"Agar woh order dhoondh sakta hai," usne kaha, "toh kya woh customer ko message bhi bhej sakta hai? Jaise, 'Kripya yahan apna Aadhaar share na karein'? Jab woh koi number chhupata hai, toh woh unhe turant bata sakta hai."

Yeh ek meherbaan idea tha. Anaya ne uska khinchaav mehsoos kiya. Jo customer pehchaan ka number type karta hai use dheere se bataya jaana chahiye ki uski zaroorat nahi.

Imran pehle se sir hila raha tha, idea par nahi balki uske kehne ke tareeke par.

"Functions do tarah ke hote hain," usne kaha. "Jo padhte hain, aur jo karte hain. Jo function ek table padhta hai woh sudhaarne yogya hai. Zyada se zyada, machine ko galat jaankari milti hai, aur tum phir koshish karte ho. Jo function message bhejta hai, bill bharta hai, ek row mita deta hai ya ek slot book karta hai, use wapas nahi liya ja sakta. Message ja chuka hai. Customer ne dekh liya."

"Toh machine ko bhejne ki ijaazat nahi honi chahiye."

"Use ijaazat honi chahiye ya nahi, yeh product ka faisla hai. Sawaal yeh hai ki loop mein insaan kahan khada hai." Usne card ke beech mein ek line kheenchi. "Padhne ke liye, use chhod do, step limit ke andar. Karne ke liye, ya toh har ek ko ek insaan manzoor kare, ya action itna chhota aur itna tay ho ki woh galat ja hi na sake."

Unhone ise jaldi tay kar liya, kyunki doosra vikalp maujood tha. Guard customers ko kabhi nahi likhega. Farah ka pehle se likha ek chhota, tay notice, teeno bhashaon mein, jise Lakshmi ne manzoor kiya, tab dikhaya jaayega jab bhi koi number chhupaya jaye. Machine tay karegi *kab*. Insaanon ne tay kiya tha ki woh *kya* kehta hai. Anaya ko yeh us design se kaafi behtar laga jo usne maanga tha.

## Saath le jaane layak baatein

Model kuch chala nahi sakta; woh sirf maang sakta hai. Tool calling mein, program uplabdh functions ka vivaran deta hai, model unme se ek ko bulane ki request ke saath jawaab deta hai, program use chalata hai aur nateeja wapas bhejta hai, aur yeh tab tak dohraya jaata hai jab tak model antim jawaab na likhe ya koi use rok na de. Model functions ke beech unki descriptions padh kar chunta hai, isliye dhundhli description ek bug hai. Is tarah ka loop ek AI agent hai, aur har daur apne se pehle ka sab kuch bhejta hai, isliye kharcha kadmon ki sankhya se tez badhta hai. Zyadatar agent failures control ki failures hain, buddhi ki nahi, isliye program dwara set kiya gaya step limit sabse pehle likhne ki cheez hai. Aur jo functions sirf padhte hain unhe chalne diya ja sakta hai, jabki jo functions karte hain unhe wapas nahi liya ja sakta, aur wahan ek insaan, ya pehle se likha tay message, chahiye.

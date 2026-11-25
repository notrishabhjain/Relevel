/* Hinglish for Data handling: what you are allowed to send (chapter:ch165), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Before you send a document to a model, you must know if you are allowed to. It is like asking before you lend someone a diary. Three questions settle most cases. You will sort real documents, read a vendor’s (the company that sells the tool) real terms, and write a rule your colleagues can follow.':
    'Document model ko bhejne se pehle aapko pata hona chahiye ki aap use bhej sakte hain ya nahi. Yeh kisi ko diary udhaar dene se pehle poochhne jaisa hai. Teen sawaal zyadatar cases tay kar dete hain. Aap asli documents sort karenge, vendor (tool bechne wali company) ki asli terms padhenge, aur ek aisa rule likhenge jise aapke colleagues follow kar sakein.',
  'Decide if one document may be sent, and say what your decision rests on.':
    'Tay kijiye ki ek document bheja ja sakta hai ya nahi, aur bataiye ki aapka faisla kis par tika hai.',
  'Name the three questions that settle it, in the order that solves most cases fastest.':
    'Un teen sawaalon ke naam bataiye jo ise tay karte hain, us order mein jisse zyadatar cases sabse jaldi suljhein.',
  'Write a rule your colleagues can follow without asking you.':
    'Aisa rule likhiye jise aapke colleagues aapse poochhe bina follow kar sakein.',
  'Write the rule for what the tool may send to an outside provider':
    'Aisa rule likhiye ki outside provider ko tool kya bhej sakta hai',
  'Bharat Privacy Guard exists to protect people’s data, so it must not leak data itself. When the context judge calls an outside AI model, the text it sends is a risk. This chapter gave you three questions that settle whether a document may be sent. The answer must come from what the provider really says, not from what everyone assumes. Now you write that rule for your tool.':
    'Bharat Privacy Guard logon ka data bachane ke liye bana hai, isliye woh khud data leak nahi kar sakta. Context judge jab outside AI model ko call karta hai, toh bheja gaya text ek risk hai. Is chapter ne aapko teen sawaal diye jo tay karte hain ki document bheja ja sakta hai ya nahi. Jawaab is par aana chahiye ki provider asal mein kya kehta hai, is par nahi ki sab kya maan lete hain. Ab aap apne tool ke liye woh rule likhenge.',
  'You only write, no code. Use the three questions from the chapter. Write the one-page rule in the notes box below. Short version for the route, about 20 minutes: steps 1, 2 and 6.':
    'Aap sirf likhenge, koi code nahi. Chapter ke teen sawaal use kijiye. Ek page ka rule neeche notes box mein likhiye. Route ke liye chhota version, lagbhag 20 minute: step 1, 2 aur 6.',
  'List six to ten kinds of text the tool might send to the outside model. For example: a sentence with no personal detail, a sentence with a name, a sentence with an Aadhaar number, a cleaned sentence with the details swapped for tags (labels like NAME), and a whole chat history.':
    '6 se 10 tarah ke text ki list banaiye jo tool outside model ko bhej sakta hai. Jaise: bina personal detail wala sentence, naam wala sentence, Aadhaar number wala sentence, saaf kiya hua sentence jisme details ki jagah tags (NAME jaise label) lage hon, aur poori chat history.',
  'Take each kind of text through the three questions from the chapter. Mark it: may send, never send, or ask first.':
    'Har tarah ke text ko chapter ke teen sawaalon se guzariye. Mark kijiye: bhej sakte hain, kabhi nahi bhejna, ya pehle poochhna hai.',
  'For the “ask first” group, write who you ask and how long they take. If the answer makes you uneasy, the group is too big.':
    '“Pehle poochhna hai” wale group ke liye likhiye ki aap kisse poochhte hain aur unhe kitna time lagta hai. Agar jawaab sunkar aap bechain ho jaayein, toh woh group bahut bada hai.',
  'Find out what your chosen provider says about three things: how long it keeps your data, whether it trains on it, and where it handles it. Look at the plan you would really use. Write it down with the date you read it.':
    'Pata kijiye ki aapka chuna hua provider teen baaton par kya kehta hai: aapka data kitne time tak rakhta hai, kya usse train karta hai, aur use kahan sambhalta hai. Woh plan dekhiye jo aap asal mein use karenge. Ise padhne ki date ke saath likh lijiye.',
  'Check your own tool: would every message it sends out pass your rule? If not, write what must change. For example: “Send only the cleaned sentence, never the original.”':
    'Apne tool ko check kijiye: kya uska bheja hua har message aapke rule se pass hoga? Agar nahi, toh likhiye ki kya badalna hai. Jaise: “Sirf saaf kiya hua sentence bhejiye, original kabhi nahi.”',
  'Write the rule on one page. Give it to a colleague and ask them to use it on three sentences they have not seen. Note where they stopped and hesitated.':
    'Rule ko ek page par likhiye. Use kisi colleague ko dijiye aur kahiye ki woh use 3 aise sentences par lagayein jo unhone pehle nahi dekhe. Note kijiye ki woh kahan ruke aur atke.',
  'A table of six to ten kinds of text, each marked may send, never send or ask first.':
    '6 se 10 tarah ke text ki ek table, har ek par mark: bhej sakte hain, kabhi nahi bhejna ya pehle poochhna hai.',
  'What the provider says about how long it keeps data, whether it trains on it, and where it handles it, with the date.':
    'Provider data kitne time rakhta hai, usse train karta hai ya nahi, aur use kahan sambhalta hai, is baare mein woh kya kehta hai, date ke saath.',
  'A note on whether your own tool passes its rule, and what must change if it does not.':
    'Ek note ki aapka apna tool apne rule par khara utarta hai ya nahi, aur agar nahi toh kya badalna hai.',
  'The one-page rule, tried by someone else.':
    'Ek page ka rule, jise kisi doosre ne aazmaya ho.',
  'Everything you send leaves your organisation, like a letter dropped in a postbox':
    'Jo kuch aap bhejte hain woh aapki organisation se bahar jaata hai, jaise postbox mein daali chitthi',
  'And you pay for it per token (one small brick of text).':
    'Aur uske liye aap per token (text ki ek chhoti eent) paise dete hain.',
  'Your documents may not be what you thought':
    'Aapke documents shayad waise nahi jaisa aapne socha tha',
  'You checked what they really hold.':
    'Aapne jaanch kar dekha tha ki unmein asal mein kya hai.',
  'This chapter has no code. Bring three real documents from your work. One you are sure is fine to send. One you are sure is not. One you are unsure about. The third one is the most useful.':
    'Is chapter mein koi code nahi hai. Apne kaam ke teen asli documents saath rakhiye. Ek jise bhejna pakka theek hai. Ek jise bhejna pakka theek nahi hai. Ek jiske baare mein aap unsure hain. Teesra sabse kaam ka hai.',
  'In the last chapter you checked what your documents really hold. Now comes the next question: may you send them to a model at all? Every chapter so far quietly said yes.':
    'Pichhle chapter mein aapne jaanchaa ki aapke documents mein asal mein kya hai. Ab agla sawaal: kya aap unhe model ko bhej bhi sakte hain? Ab tak ke har chapter ne chupke se haan maan liya tha.',
  'For most features, the answer is either fine or a big problem. Technical skill does not tell the two apart. Think of a parcel: the post office rules decide if it may go, not the postman.':
    'Zyadatar features mein jawaab ya toh theek hota hai ya badi problem. Dono mein farq technical skill se nahi hota. Parcel sochiye: post office ke rule tay karte hain ki woh ja sakta hai ya nahi, daakiya nahi.',
  'This is not a law chapter. You only need to know three questions to ask, and who holds the answer to each.':
    'Yeh kanoon ka chapter nahi hai. Aapko bas teen sawaal jaanne hain, aur yeh ki har ek ka jawaab kiske paas hai.',
  'Sort your three documents':
    'Apne teen documents sort kijiye',
  'Start with your own documents. The questions make more sense once you have used them, like learning a game by playing one round.':
    'Apne hi documents se shuru kijiye. Sawaal tab zyada samajh aate hain jab aap unhe ek baar use kar lete hain, jaise khel ek round khelkar seekhte hain.',
  'Sort the documents':
    'Documents sort kijiye',
  'For each of the three documents, answer three questions in one line each. Does it hold facts about a person you could pick out? Is it a business secret? Did someone outside your organisation give it to you, under agreed terms?':
    'Teeno documents mein se har ek ke liye teen sawaalon ka jawaab ek-ek line mein dijiye. Kya usmein kisi aise insaan ki jaankari hai jise pehchana ja sake? Kya woh business ka raaz hai? Kya organisation ke bahar ke kisi ne woh aapko tay hui terms par diya tha?',
  'The two easy documents are settled by the first question. The unsure one usually turns on the third: something a customer or supplier sent you, under terms nobody has read lately.':
    'Do aasaan documents pehle sawaal se hi tay ho jaate hain. Unsure wala aksar teesre sawaal par tikta hai: jo customer ya supplier ne bheja, aisi terms par jo kisi ne haal mein padhi nahi.',
  'The hard cases are usually about promises in someone else’s contract, not about personal data.':
    'Mushkil cases aksar kisi aur ke contract ke vaadon ke baare mein hote hain, personal data ke baare mein nahi.',
  'You can turn what you just did into a habit. There are three questions, and the order matters. In this order they settle most cases with the least effort.':
    'Aapne abhi jo kiya use aadat bana sakte hain. Teen sawaal hain, aur order maayne rakhta hai. Is order mein zyadatar cases sabse kam mehnat mein tay ho jaate hain.',
  '<strong>Does it identify a person?</strong> Look for names, contact details, case numbers, or anything else that points to someone. The rules apply wherever you are. They are not optional.':
    '<strong>Kya isse koi insaan pehchana jaata hai?</strong> Names, contact details, case numbers dekhiye, ya kuch bhi jo kisi ki taraf ishaara kare. Rules aap jahan bhi hon wahan lagu hote hain. Woh optional nahi hain.',
  '<strong>Whose confidential information is it?</strong> If it is yours, sending it is a business choice. If it is someone else’s, it is a question about the contract, and the answer may be no however careful the vendor is.':
    '<strong>Yeh kiski confidential information hai?</strong> Agar aapki hai, toh bhejna ek business choice hai. Agar kisi aur ki hai, toh yeh contract ka sawaal hai, aur vendor kitna bhi careful ho, jawaab na ho sakta hai.',
  '<strong>What does the vendor do with it?</strong> Find out how long they keep it, whether they train on it, and which country it is stored in. You can usually find all three in the vendor’s terms in ten minutes. All three can change with your plan.':
    '<strong>Vendor iska kya karta hai?</strong> Pata kijiye ki woh ise kitne time tak rakhta hai, kya usse train karta hai, aur kis desh mein store karta hai. Yeh teeno aap aam taur par vendor ki terms mein 10 minute mein dhoondh sakte hain. Teeno aapke plan ke saath badal sakte hain.',
  'Product managers add the most on the third question. Engineers often think it is already settled. Vendors often explain it in comforting words. So read the terms yourself.':
    'Teesre sawaal par product managers sabse zyada kaam ke hote hain. Engineers aksar sochte hain ki yeh pehle se tay hai. Vendors ise aksar tasalli dene wale shabdon mein samjhate hain. Isliye terms khud padhiye.',
  'Read the terms for one tool you use':
    'Jo tool aap use karte hain, uski terms padhiye',
  'Pick a tool your team already sends text to. In its own documentation (its help pages), find three things: how long data is kept, whether it is used to train models, and which country it is handled in.':
    'Aisa tool chuniye jise aapki team pehle se text bhejti hai. Uski apni documentation (help pages) mein teen cheezein dhoondhiye: data kitne time rakha jaata hai, kya use models train karne mein liya jaata hai, aur woh kis desh mein sambhala jaata hai.',
  'Two of the three are usually easy to find. One takes real searching. Note which plan the answers are for. Free and paid plans often differ on exactly this, and people often sign up for the free one.':
    'Teeno mein se do aam taur par aasaani se mil jaate hain. Ek ko dhoondhne mein sach mein mehnat lagti hai. Note kijiye ki jawaab kaun se plan ke hain. Free aur paid plans aksar isi baat par alag hote hain, aur log aksar free plan le lete hain.',
  'Write the three answers down with the date. This starts the vendor file that Chapter 17 asks for.':
    'Teeno jawaab date ke saath likh lijiye. Yahin se woh vendor file shuru hoti hai jo Chapter 17 mangta hai.',
  'The Indian law, in the words people will ask you about':
    'Bharat ka kanoon, un shabdon mein jo log aapse poochhenge',
  'India’s Digital Personal Data Protection Act, 2023 (the DPDP Act) has a small word list, and interviewers use it. These are the words to know. For the exact duties, read the Act’s own text.':
    'India ke Digital Personal Data Protection Act, 2023 (DPDP Act) ke shabdon ki list chhoti hai, aur interviewers use istemaal karte hain. Yeh shabd aapko aane chahiye. Exact duties ke liye Act ka apna text padhiye.',
  '<strong>Data Principal.</strong> The person the data is about. A bank customer types a message into your app. That customer is the Data Principal.':
    '<strong>Data Principal.</strong> Woh insaan jiske baare mein data hai. Bank ka customer aapke app mein message likhta hai. Woh customer Data Principal hai.',
  '<strong>Data Fiduciary.</strong> The organisation that decides why and how the data is used. Your company is the Data Fiduciary. A model provider that handles the message for you works on your behalf, so the duty stays with you.':
    '<strong>Data Fiduciary.</strong> Woh sanstha jo tay karti hai ki data kyun aur kaise use hoga. Aapki company Data Fiduciary hai. Jo model provider aapke liye message sambhalta hai woh aapki taraf se kaam karta hai. Isliye zimmedari aapki hi rehti hai.',
  '<strong>Notice and consent.</strong> Tell the person in plain words what you collect and why. Ask them to agree. Use the data only for the reason you gave.':
    '<strong>Notice aur consent.</strong> Insaan ko saaf shabdon mein bataiye ki aap kya lete hain aur kyun. Unse haan kehne ko kahiye. Data sirf usi kaaran ke liye use kijiye jo aapne bataya.',
  '<strong>Erasure.</strong> The person can ask you to wipe their data, and you must be able to do it. That includes any copy an outside provider holds.':
    '<strong>Erasure.</strong> Insaan aapse apna data mitane ko keh sakta hai, aur aapko yeh kar paana chahiye. Isme outside provider ke paas rakhi copy bhi aati hai.',
  '<strong>Breach reporting.</strong> If personal data leaks, you must tell the regulator (the official watchdog) and the people affected.':
    '<strong>Breach reporting.</strong> Agar personal data leak ho, toh aapko regulator (sarkari nigrani karne wale) aur prabhavit logon ko batana zaroori hai.',
  '<strong>Sending data abroad.</strong> The Act allows it, except where the government says no. Look up what is true today.':
    '<strong>Data bahar bhejna.</strong> Act ise allow karta hai, siwaye wahan jahan sarkar mana kare. Dekhiye ki aaj kya sahi hai.',
  'This is a word list, not legal advice. Check which parts of the Act are in force today. The plan’s dated list of regulatory milestones is the place to look.':
    'Yeh shabdon ki list hai, kanooni salah nahi. Dekhiye ki Act ke kaun se hisse aaj lagoo hain. Plan ki regulatory milestones ki dated list dekhne ki jagah hai.',
  'Match each kind of text to a duty':
    'Har tarah ke text ko ek duty se milaiye',
  'Take six kinds of text the tool might send to an outside model. One is a sentence with no personal detail. Then one with a name, and one with an Aadhaar number. Then a cleaned sentence with tags in place of details, and a whole chat history. Last is a log line (a saved note in the tool’s record book) that keeps the original message. For each one, write the duty it touches: consent, purpose, erasure, breach or sending data abroad.':
    'Chhe tarah ke text lijiye jo tool outside model ko bhej sakta hai. Ek hai bina personal detail wala sentence. Phir naam wala, aur Aadhaar number wala. Phir saaf kiya hua sentence jisme details ki jagah tags hain, aur poori chat history. Aakhri hai log line (tool ki record-book mein saved note) jo asli message rakhti hai. Har ek ke liye likhiye ki woh kaun si duty chhoota hai: consent, purpose, erasure, breach ya data bahar bhejna.',
  'Two things usually show. The cleaned sentence touches almost no duty, which is the case for building the tool. The chat history and the log line touch several, and the log line is the one nobody thought of. The capstone asks for the same kind of table.':
    'Aam taur par do baatein dikhti hain. Saaf kiya hua sentence lagbhag koi duty nahi chhoota, yahi tool banane ki wajah hai. Chat history aur log line kai duties chhoote hain, aur log line ke baare mein kisi ne socha nahi tha. Capstone isi tarah ki table maangta hai.',
  'Write a rule people can follow':
    'Aisa rule likhiye jise log follow kar sakein',
  'Knowing the answers is only half the job. The other half is making sure your colleagues act on them, even when you are not in the room. It is like a sign on the shop wall that works when the owner is out.':
    'Jawaab jaan lena sirf aadha kaam hai. Baaki aadha yeh hai ki colleagues unpar amal karein, tab bhi jab aap wahan nahi hote. Yeh dukaan ki deewar par lagi parchi jaisa hai, jo malik ke bahar hone par bhi kaam karti hai.',
  'Write a rule a colleague could follow without asking you. Not a long policy: three or four lines that settle the common cases and say clearly what to do with the rest.':
    'Aisa rule likhiye jise colleague aapse poochhe bina follow kar sake. Lambi policy nahi: teen ya chaar lines jo aam cases tay karein aur saaf bataein ki baaki ke saath kya karna hai.',
  'You may send … . Never send … . If it came from a customer, … . If unsure, … .':
    'Aap bhej sakte hain … . Kabhi mat bhejiye … . Agar customer se aaya ho, toh … . Agar unsure hon, toh … .',
  'Rules that work have the same shape. They settle the common cases straight away. They name one clear kind that is never sent. They give a set route for unsure cases, so nobody has to guess in the moment. Rules that say “use your judgement” fail. A person who is unsure and in a hurry reads that as permission. Name a person or a channel for the unsure cases.':
    'Kaam karne wale rules ek jaise dikhte hain. Woh aam cases seedhe tay kar dete hain. Woh ek saaf kism batate hain jo kabhi nahi bheji jaati. Unsure cases ke liye ek tay raasta dete hain, taaki us waqt kisi ko andaaza na lagana pade. “Apne hisaab se decide kijiye” jaise rules fail ho jaate hain. Jo insaan unsure hai aur jaldi mein hai, woh ise permission samajh leta hai. Unsure cases ke liye ek insaan ya channel ka naam likhiye.',
  'Retrieval sends what it finds':
    'Retrieval wahi bhejta hai jo woh dhoondhta hai',
  'There is one last catch, and it surprises many teams.':
    'Ek aakhri dikkat hai, aur yeh kai teams ko chaunka deti hai.',
  'Retrieval (finding the right pages and handing them to the model) sends whatever it finds. You may have chosen with care what goes into your document store. Then you built a system that sends three chunks (small cut-out pieces) from it with every request. So your choice about the document store is really a choice about every query (every question asked).':
    'Retrieval (sahi pages dhoondhkar model ko dena) jo kuch dhoondhta hai woh bhej deta hai. Ho sakta hai aapne sochkar tay kiya ho ki document store mein kya jaayega. Phir aapne aisa system banaya jo har request ke saath usmein se teen chunks (chhote kate hue tukde) bhejta hai. Isliye document store ka aapka faisla asal mein har query (har poochha gaya sawaal) ka faisla hai.',
  'To sum up, ask three questions in order. Does it identify a person? Whose confidential information is it? What does the vendor do with it?':
    'Saar yeh hai: teen sawaal order mein poochhiye. Kya isse koi insaan pehchana jaata hai? Yeh kiski confidential information hai? Vendor iska kya karta hai?',
  'Then turn your answers into a rule that others can follow without you. Rules like this are part of <strong>governance</strong> (the rules for who may do what with AI). Chapter 17 shows how a team writes it all down for a whole AI system. It covers risk tiers (how risky it is), system cards (a one-page description) and oversight (who watches over it).':
    'Phir apne jawaabon ko aise rule mein badaliye jise doosre aapke bina follow kar sakein. Aise rules <strong>governance</strong> ka hissa hain (yaani AI ke saath kaun kya kar sakta hai, iske rules). Chapter 17 dikhata hai ki ek team poore AI system ke liye yeh sab kaise likhti hai. Usmein risk tiers (system kitna risky hai), system cards (ek page ka description) aur oversight (us par kaun nazar rakhta hai) aate hain.',
});

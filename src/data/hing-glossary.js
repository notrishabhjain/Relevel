/* Hinglish: glossary definitions.

   Generated alongside the English source: the key is the English line exactly
   as it appears in the course, so a line that is later edited in English falls
   back to English rather than showing a translation of something else. */
Object.assign(window.HING = window.HING || {}, {

  'Using a model to grade outputs against a rubric.':
    'Ek model ka istemaal karke outputs ko rubric ke against grade karna.',
  'A model that reads images and text together.':
    'Aisa model jo images aur text dono saath padhta hai.',
  'A way for one program to ask another program to do something, over the internet. You never see it. When this book says your app "calls the API", it means your app sent a message to the model provider’s computers and waited for a reply.':
    'Ek tareeka jisse ek program doosre program se internet par kaam karwaata hai. Aap ise kabhi dekhte nahi. Jab is course mein likha ho ki aapka app "API call karta hai", matlab aapke app ne model provider ke computers ko message bheja aur jawaab ka intezaar kiya.',
  'The specific web address a program sends its request to. Different endpoints do different jobs — one for chat, one for embeddings.':
    'Woh exact web address jahan program apni request bhejta hai. Alag endpoints alag kaam karte hain — ek chat ke liye, ek embeddings ke liye.',
  'Whatever is inside the request or reply. The contents of the envelope, as opposed to the envelope itself.':
    'Request ya reply ke andar jo bhi hai. Envelope ke andar ka saamaan, envelope se alag.',
  'A setting you pass with a request — temperature, maximum length, which model. Confusingly, the same word also means the billions of internal numbers a model was trained with. In this book it means the setting unless it says otherwise.':
    'Request ke saath bheji gayi ek setting — temperature, maximum length, kaunsa model. Confusing baat: yahi shabd model ke andar ke arbon numbers ke liye bhi chalta hai. Is course mein iska matlab setting hai, jab tak alag na likha ho.',
  'A web page where you can type a few lines of code, press a button, and see what happens underneath. It is the tool this book uses so you never have to install anything. Nothing you do in one can break anything.':
    'Ek web page jahan aap chand lines code likhkar button dabaate hain aur andar kya ho raha hai woh dekhte hain. Yahi tool is course mein istemaal hota hai taaki aapko kuchh install na karna pade. Isme kiya gaya kuchh bhi kuchh tod nahi sakta.',
  'The machine actually running your notebook code. Free notebooks give you one for a few hours and then take it back, which is why your key sometimes needs re-entering.':
    'Woh machine jo aapka notebook code sach mein chala rahi hai. Free notebooks aapko kuchh ghanton ke liye ek deti hain aur phir wapas le leti hain — isiliye kabhi-kabhi key dobara daalni padti hai.',
  'To put a change where real users can reach it. Until something is deployed it exists only on your machine.':
    'Badlav ko wahan pahunchana jahan asli users tak pahunch sake. Deploy hone se pehle cheez sirf aapki machine par hoti hai.',
  'Putting the previous version back after a bad deploy. It undoes your code. It does not undo a model’s behaviour, which is why Chapter 18 insists a kill switch is a different thing.':
    'Kharaab deploy ke baad pichhla version wapas laana. Yeh aapka code undo karta hai. Model ka behaviour undo nahi karta — isiliye Chapter 18 kehta hai ki kill switch ek alag cheez hai.',
  'All the documents your system is allowed to answer from, taken together. Your set of source material. Plural: corpora.':
    'Woh saare documents jinse aapka system jawaab de sakta hai, sab milakar. Aapka source material. Bahuvachan: corpora.',
  'A prepared copy of your corpus, arranged so searching it is fast. Building one is called indexing. Nothing can be retrieved until it has been indexed.':
    'Aapke corpus ki taiyaar ki hui copy, aise arrange ki hui ki dhoondhna tez ho. Ise banane ko indexing kehte hain. Jab tak index nahi hua, kuchh retrieve nahi ho sakta.',
  'A sequence of steps where each one’s output is the next one’s input. Documents in at one end, an answer out at the other. Chapter 7 draws yours.':
    'Steps ka aisa silsila jahan har step ka output agle ka input hai. Ek taraf se documents andar, doosri taraf se jawaab bahar. Chapter 7 mein aap apna banate hain.',
  'How long the user waits. Measured in seconds, and a product decision rather than a technical detail.':
    'User kitni der wait karta hai. Seconds mein naapa jaata hai, aur yeh technical detail nahi — product decision hai.',
  'The wait that 95 out of 100 people get or better — so it describes the slow fifth of your users rather than the typical one. Averages hide these people; p95 is what you design for.':
    'Woh wait jo 100 mein se 95 logon ko milta hai ya usse behtar — matlab yeh aapke slow paanchve hisse ke users ki baat karta hai, aam user ki nahi. Average in logon ko chhupa deta hai; design p95 par hota hai.',
  'Service-level agreement. A supplier’s written promise about uptime or speed, with a consequence attached if they break it. A promise without a consequence is a marketing claim, not an SLA.':
    'Service-level agreement. Supplier ka likhit vaada uptime ya speed ke baare mein, jise todne par nateeja bhi likha ho. Bina nateeje ka vaada marketing claim hai, SLA nahi.',
  'Same input, same output, every time. Ordinary software is deterministic. A language model is not, which is the source of most of the surprise in this field.':
    'Wahi input, wahi output, har baar. Aam software deterministic hota hai. Language model nahi hota — is field ki zyadatar hairaani ki jad yahi hai.',
  'Coordinating several steps or several models so they run in the right order and hand results to each other.':
    'Kai steps ya kai models ko is tarah chalana ki woh sahi order mein chalein aur ek doosre ko result de sakein.',
  'A named set of categories. In Chapter 14 it means your list of the ways your system fails, in your own words, with a count against each.':
    'Categories ka ek naam-diya hua set. Chapter 14 mein iska matlab hai: aapka system kin-kin tareekon se fail hota hai, aapke apne shabdon mein, har ek ke saamne ginti ke saath.',
  'The text your app sends to the model — the user’s question plus any standing instructions attached to it. Mostly ordinary English, not a magic phrase.':
    'Woh text jo aapka app model ko bhejta hai — user ka sawaal, plus uske saath lagi standing instructions. Zyadatar saadi English hoti hai, koi jaadui phrase nahi.',
  'A list of numbers. When this course says a piece of text has a “position” on the meaning map, the position is a vector — a few hundred numbers describing where it sits. You never look at them.':
    'Numbers ki ek list. Jab course kehta hai ki text ke tukde ki meaning map par ek "jagah" hai, woh jagah hi vector hai — kuchh sau numbers jo batate hain woh kahan baitha hai. Aap inhe kabhi dekhte nahi.',
  'Continuing a model’s training on your own examples so it adopts a behaviour. Teaches shape and register, not durable facts. Chapter 19 is the decision.':
    'Model ki training aapke apne examples par aage badhana taaki woh ek behaviour apna le. Yeh shape aur register sikhata hai, tikne wale facts nahi. Chapter 19 mein yeh decision hai.',
  'A scoring guide written in advance: what each level of quality looks like, so two people grading the same thing agree.':
    'Pehle se likha hua scoring guide: quality ka har level dikhta kaisa hai, taaki ek hi cheez ko do log ek jaisa grade karein.',
  'When behaviour changes over time without anyone changing the code — a model updated, a corpus grown, traffic shifted.':
    'Jab behaviour samay ke saath badal jaaye bina kisi ke code chhue — model update ho gaya, corpus bada ho gaya, traffic badal gaya.',
  'A record of what the system did and why, kept so someone can check it afterwards.':
    'System ne kya kiya aur kyun, iska record, taaki baad mein koi jaanch sake.',
  'Asking which of two answers is better, instead of scoring one answer out of ten. More reliable, because people and models are better at comparing than at grading.':
    'Do jawaabon mein se behtar poochhna, ek jawaab ko das mein se number dene ki jagah. Yeh zyada bharosemand hai, kyunki log aur models dono compare karne mein grade karne se behtar hain.',
  'A grader’s habit of scoring longer answers higher, even when they say nothing extra.':
    'Grader ki aadat: lambe jawaab ko zyada number dena, chahe usme extra kuchh kaha hi na gaya ho.',
  'A grader’s habit of preferring whichever answer it was shown first.':
    'Grader ki aadat: jo jawaab pehle dikhaya gaya use pasand karna.',
  'What you pay per query on average once traffic is spread across several models at different prices.':
    'Jab traffic alag-alag daam wale kai models par bant jaata hai, tab average mein har query par aap kitna dete hain.',
  'The share of your input that the provider recognised from a previous request and charged less for.':
    'Aapke input ka woh hissa jo provider ne pichhli request se pehchan liya aur uske kam paise liye.',
  'A model that reads pictures as well as text — so you can hand it a page image instead of extracted text.':
    'Aisa model jo text ke saath tasveerein bhi padhta hai — to aap use extract kiya hua text nahi, seedha page ki image de sakte hain.',
  'Software that turns a picture of a page into text. It keeps the words and throws away the layout.':
    'Software jo page ki tasveer ko text mein badalta hai. Shabd rakh leta hai, layout phenk deta hai.',
  'Where things sit on a page — rows, columns, boxes. It carries meaning that plain text loses.':
    'Page par cheezein kahan baithi hain — rows, columns, boxes. Yeh matlab rakhta hai jo plain text mein kho jaata hai.',
  'A person talking over the system mid-sentence. Voice interfaces have to handle it; text ones never face it.':
    'Jab koi system ke beech mein bol pade. Voice interfaces ko yeh sambhalna padta hai; text wale ismein padte hi nahi.',
  'A short document describing what an AI feature is for, what it was measured at, where it fails, and who checks it.':
    'Ek chhota document jo batata hai ki AI feature kis kaam ke liye hai, kis number par naapa gaya, kahan fail hota hai, aur kaun check karta hai.',
  'Which country your data is physically stored and processed in.':
    'Aapka data physically kis desh mein rakha aur process hota hai.',
  'Another company your provider passes your data to. Their risk becomes yours.':
    'Woh doosri company jise aapka provider aapka data deta hai. Unka risk ab aapka risk hai.',
  'The number a release has to hit before it ships. An acceptance criterion with a figure in it.':
    'Woh number jo release ko ship hone se pehle chhoona hai. Yaani aisa acceptance criterion jisme aankda ho.',
  'Releasing to a small slice of users first and watching the numbers before going wider.':
    'Pehle thode se users ko release karna aur numbers dekhkar aage badhna.',
  'Whether an improvement survives changing providers. A better prompt and index travel with you; a tuned model does not.':
    'Kya aapka sudhaar provider badalne par bhi bachta hai. Behtar prompt aur index saath jaate hain; tuned model nahi jaata.',
  'Naming which kind of wrong you have, with counts, before choosing what to change.':
    'Kuchh badalne se pehle yeh naam dena ki galti kis kism ki hai, aur kitni baar hoti hai.',
  'What the product promises to show at each level of certainty — and what it lets the user do about it.':
    'Product ka vaada ki certainty ke har level par woh kya dikhayega — aur user ko uske baare mein kya karne dega.',
  'A source link that opens the exact passage the claim came from, not just the name of a document.':
    'Aisa source link jo theek wahi passage kholta hai jahan se claim aaya, sirf document ka naam nahi.',
  'How a user fixes a wrong output, and what that fix records for you.':
    'User galat output ko kaise theek karta hai, aur woh sudhaar aapke liye kya record karta hai.',

});

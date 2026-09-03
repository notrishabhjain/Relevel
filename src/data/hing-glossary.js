/* Hinglish: glossary definitions.

   Generated alongside the English source: the key is the English line exactly
   as it appears in the course, so a line that is later edited in English falls
   back to English rather than showing a translation of something else. */
Object.assign(window.HING = window.HING || {}, {
  /* Glossary definitions */
  'A prediction machine trained on large quantities of text. It continues text plausibly — it does not look things up.':
    'Ek prediction machine, jo bahut saare text par train hui hai. Yeh text ko aage plausibly badhaati hai — kuchh look up nahi karti.',
  'Sending the envelope (a JSON request) to the model and receiving the reply.':
    'Envelope (ek JSON request) model ko bhejna aur uska reply lena.',
  'A word-piece — the unit the model reads, writes, and bills in. Roughly ¾ of an English word.':
    'Ek word-piece — yahi unit model padhta hai, likhta hai, aur isi par bill banta hai. Lagbhag ek English word ka ¾.',
  'The maximum size of one envelope: everything in plus everything out.':
    'Ek envelope ka maximum size: andar jaane wala sab kuchh, plus bahar aane wala sab kuchh.',
  'Total amnesia — nothing survives between requests on the model\'s side.':
    'Poori amnesia — model ki taraf do requests ke beech kuchh bhi nahi bachta.',
  'The receipt: prompt tokens read in, completion tokens written out.':
    'Receipt: kitne prompt tokens andar padhe gaye, kitne completion tokens bahar likhe gaye.',
  'The standing briefing page placed in every envelope before the user\'s message.':
    'Woh standing briefing page jo har envelope mein user ke message se pehle rakha jaata hai.',
  'The variety dial, 0 to ~1. Zero = consistent; high = creative.':
    'Variety ka dial, 0 se ~1 tak. Zero = consistent; high = creative.',
  'Confident generation of plausible-but-false content. The default behaviour at the edge of knowledge, not a glitch.':
    'Plausible dikhne wala lekin galat content, poore confidence ke saath. Knowledge ke kinare par yeh normal behaviour hai, glitch nahi.',
  'Any mechanism reducing harmful or wrong outputs. The humblest is a sentence in the system prompt.':
    'Koi bhi tareeka jo harmful ya galat output kam kare. Sabse simple guardrail system prompt ka ek sentence hai.',
  'One piece of a cut-up document — the unit stored and retrieved.':
    'Kaate gaye document ka ek tukda — yahi unit store aur retrieve hota hai.',
  'The cutting itself — a design decision wearing the costume of a chore.':
    'Kaatna khud — ek design decision jo dikhta chhote se kaam jaisa hai.',
  'Cutting every N words regardless of meaning.':
    'Har N words par kaat dena, matlab dekhe bina.',
  'Cutting along the document\'s own structure.':
    'Document ke apne structure ke hisaab se kaatna.',
  'Repeating the last lines of one chunk at the start of the next, so boundary-straddling answers survive.':
    'Ek chunk ki aakhri lines agle chunk ki shuruaat mein dohraana, taaki boundary par baithe jawaab na tootein.',
  'Fetching, from all stored chunks, the few most likely to answer a question.':
    'Saare stored chunks mein se woh chand nikaalna jo sawaal ka jawaab de sakte hain.',
  'Retrieval by shared words — matches spelling, blind to meaning.':
    'Common words ke aadhaar par retrieval — spelling match karta hai, matlab nahi samajhta.',
  'The incoming question.':
    'Aane wala sawaal.',
  'Keyword and semantic search run together, results merged.':
    'Keyword aur semantic search dono saath chalaana, phir results ko merge karna.',
  'Take the best k results — the dial between recall and precision.':
    'Top k results lena — recall aur precision ke beech ka dial.',
  'A text\'s address on the meaning map — a list of ~1024 numbers.':
    'Meaning map par ek text ka pata — lagbhag 1024 numbers ki list.',
  'The mapmaker — reads text, outputs its address.':
    'Naksha banane wala — text padhta hai, uska pata deta hai.',
  'The one-line neighbour test — higher = closer in meaning.':
    'Ek line ka neighbour test — jitna zyada, utna matlab mein paas.',
  'Retrieval by meaning-map addresses instead of spelling.':
    'Spelling ki jagah meaning-map ke pate se retrieval.',
  'The declaration of whether you are embedding a question or a document piece. Skip it and quality degrades silently.':
    'Yeh batana ki aap sawaal embed kar rahe hain ya document ka tukda. Ise chhod dijiye to quality chupchaap girti hai.',
  'A system that stores embeddings and finds nearest neighbours fast.':
    'Aisa system jo embeddings store karta hai aur nearest neighbours tezi se dhoondhta hai.',
  'Grading the system against verified expectations — acceptance testing, aimed at AI.':
    'System ko verified expectations ke against jaanchna — AI ke liye acceptance testing.',
  'The pre-verified answer key: questions, correct answers, locations.':
    'Pehle se verify kiya hua answer key: sawaal, sahi jawaab, aur woh kahan likhe hain.',
  'Of what mattered, how much was fetched? Low = missed files.':
    'Jo zaroori tha usme se kitna aaya? Kam matlab files chhoot rahi hain.',
  'Of what was fetched, how much mattered? Low = buried desk.':
    'Jo aaya usme se kitna kaam ka tha? Kam matlab mez par kachra bhara hai.',
  'Pre-agreed numbers and behaviours required before go-live.':
    'Go-live se pehle tay kiye gaye numbers aur behaviour.',
  'Retrieval-Augmented Generation — retrieve verified text, generate the answer from it.':
    'Retrieval-Augmented Generation — pehle verified text nikaalo, phir usi se jawaab banao.',
  'A formal description of required output shape: fields, types, what is required.':
    'Output ka shape formally likhna: kaunse fields, kis type ke, kya zaroori hai.',
  'Model output constrained to a schema rather than free prose.':
    'Model ka output free prose ki jagah ek schema mein bandha hua.',
  'Only schema-valid tokens permitted at each step. Makes invalid output impossible, not merely unlikely.':
    'Har step par sirf woh tokens allowed jo schema ke hisaab se sahi hain. Isse invalid output impossible ho jaata hai, sirf kam-likely nahi.',
  'A field restricted to a fixed list of allowed values.':
    'Aisa field jisme sirf ek fixed list ke values chal sakte hain.',
  'A legal, structured way to report "cannot determine" — the alternative to compelling invention.':
    '"Pata nahi" bolne ka ek proper, structured tareeka — warna model ko banane par majboor karna padta hai.',
  'Parse → validate → on failure re-ask with the error attached.':
    'Parse karo → validate karo → fail ho to error ke saath dobara poochho.',
  'Describing callable functions so the model can request one instead of answering in prose.':
    'Model ko batana ki kaunse functions call ho sakte hain, taaki woh prose mein jawaab dene ki jagah function maang sake.',
  'model → tool request → your code executes → result back → repeat.':
    'model → tool ki request → aapka code chalta hai → result wapas → phir se.',
  'The hard maximum number of loop iterations. Non-optional.':
    'Loop kitni baar ghoom sakta hai, iski hard limit. Optional nahi hai.',
  'The recorded sequence of steps, calls, arguments and results for one run.':
    'Ek run ke saare steps, calls, arguments aur results ka record.',
  'The line between tools that read and tools that change the world.':
    'Padhne wale tools aur duniya badalne wale tools ke beech ki line.',
  'What enters the envelope, in what order, and what is evicted — as opposed to how it is worded.':
    'Envelope mein kya jaata hai, kis order mein, aur kya nikaala jaata hai — wording se alag baat.',
  'Degradation in the use of context as it grows, well before the ceiling.':
    'Context bada hone par uska istemaal kharaab hone lagta hai, ceiling se kaafi pehle.',
  'Material at the start and end is recovered far more reliably than material in the middle.':
    'Shuruaat aur ant ka material beech ke material se kahin zyada bharose se yaad rehta hai.',
  'Provider-side reuse of a processed request prefix. Stable first, volatile last.':
    'Provider ki taraf se request ke shuru ka hissa dobara istemaal karna. Sthir cheezein pehle, badalne wali baad mein.',
  'Summarising older context to free budget, keeping a verbatim recent tail.':
    'Purana context summarise karke jagah banana, lekin haal ka hissa jaisa ka taisa rakhna.',
  'A model that generates an internal working-out before its answer.':
    'Aisa model jo jawaab dene se pehle andar hi andar kaam nikaalta hai.',
  'Buying accuracy per query at inference time rather than at training time.':
    'Accuracy training ke waqt nahi, har query ke waqt kharid rahe hain.',
  'The control setting how much working-out is permitted. A product decision.':
    'Yeh control ki kitna soch-vichaar allowed hai. Product decision hai.',
  'Median and slow-tail response times. Users experience the tail.':
    'Median aur slow-tail response times. User tail ko mehsoos karta hai.',
  'Statistical keyword ranking — Chapter 4\'s scoreboard done properly, weighting rare words.':
    'Statistical keyword ranking — Chapter 4 ka scoreboard, theek se banaya hua, jisme rare words ko zyada weight milta hai.',
  'Merging ranked lists by summing 1/(rank). Simple, robust, hard to beat.':
    'Ranked lists ko 1/(rank) jodkar merge karna. Simple, mazboot, haraana mushkil.',
  'A model scoring a (question, chunk) pair by reading both together. Applied to shortlists only.':
    'Ek model jo (sawaal, chunk) ko saath padhkar score deta hai. Sirf shortlist par lagta hai.',
  'Prepending a generated situating sentence to each chunk before embedding. Cures orphans.':
    'Har chunk ke aage ek situating sentence lagana, embed karne se pehle. Orphan chunks ka ilaaj.',
  'Turning a conversational fragment into a standalone searchable question.':
    'Baatcheet ke ek tukde ko akela khada rehne wala searchable sawaal banana.',
  'Discarding out-of-scope chunks before scoring — version, date, department.':
    'Score karne se pehle scope ke bahar ke chunks hata dena — version, date, department.',
  'Instructions smuggled into a model\'s input that redirect its behaviour.':
    'Model ke input ke andar chhupa kar bheje gaye instructions, jo uska behaviour mod dete hain.',
  'The attack arrives inside content the system reads — a document, email, ticket or page.':
    'Attack us content ke andar aata hai jo system padhta hai — document, email, ticket ya page.',
  'Private data + untrusted content + external communication. Any two are safe.':
    'Private data + bahar ka untrusted content + bahar bhejne ka rasta. Koi bhi do safe hain.',
  'Getting private data out — via email, webhook, URL parameter or rendered image.':
    'Private data bahar nikalna — email, webhook, URL parameter ya render hui image ke through.',
  'A privileged component tricked into misusing its authority for an unprivileged party.':
    'Ek privileged component ko bewakoof banakar uski authority kisi unprivileged banda ke liye istemaal karwana.',
  'A closed set of permitted destinations. Survives a successful injection.':
    'Allowed destinations ki ek band list. Injection safal ho jaaye tab bhi yeh tikta hai.',
  'Using a model to grade outputs against a rubric.':
    'Ek model ka istemaal karke outputs ko rubric ke against grade karna.',
  'How often the judge concurs with human labels. The number that makes a judge usable.':
    'Judge kitni baar insaan ke labels se sehmat hota hai. Yahi number judge ko istemaal layak banata hai.',
  'Reading real outputs and open-coding failures into a taxonomy. The highest-leverage activity in the field.':
    'Asli outputs padhkar failures ko apne shabdon mein categories mein baantna. Is field ki sabse zyada faaydemand activity.',
  'Your named categories of failure, derived from your own traffic.':
    'Aapke apne traffic se nikaali gayi, aapke naam di hui failure categories.',
  'Cases that must pass before any release ships.':
    'Woh cases jo har release se pehle pass hone hi chahiye.',
  'Against an answer key before release, versus user outcomes after.':
    'Release se pehle answer key ke against, aur release ke baad users ke outcomes ke against.',
  'The full loaded cost of one user-visible request, including retries and agent steps.':
    'Ek user-visible request ki poori asli cost, jisme retries aur agent steps bhi shaamil hain.',
  'Cheap model first, escalate on a failed check. The main production cost pattern.':
    'Pehle sasta model, check fail hone par mehnge par bhejo. Production mein sabse aam cost pattern.',
  'Choosing a model per request based on the request\'s difficulty.':
    'Har request ke liye uski mushkil ke hisaab se model chunna.',
  'Cost and revenue per unit of use — the number that decides whether a feature survives.':
    'Har use par cost aur revenue — yahi number tay karta hai ki feature zinda rahega ya nahi.',
  'A model that reads images and text together.':
    'Aisa model jo images aur text dono saath padhta hai.',
  'Treating a rendered page as the retrieval unit rather than a text span.':
    'Text ke tukde ki jagah poore render hue page ko hi retrieval unit maanna.',
  'Information present on the page but absent from its extracted text.':
    'Jo page par dikhta hai lekin uske extract hue text mein gayab hai.',
  'Deciding when a speaker has finished — the core problem of voice interfaces.':
    'Yeh tay karna ki bolne wala kab ruk gaya — voice interfaces ki sabse badi samasya.',
  'Obligation level set by consequence of error, not by technology.':
    'Obligation ka level galti ke nateeje se tay hota hai, technology se nahi.',
  'A structured document: purpose, data, evaluation, limitations, oversight.':
    'Ek structured document: maqsad, data, evaluation, limitations, oversight.',
  'Where data came from, under what right, held where, for how long.':
    'Data kahan se aaya, kis haq se, kahan rakha hai, kitne samay ke liye.',
  'A specified, exercisable review point with authority to overrule.':
    'Ek tay kiya hua review point jo sach mein use ho sake, aur jise overrule karne ka adhikaar ho.',
  'Unsanctioned tool use by staff. A measurable reality, not a hypothetical.':
    'Staff ka bina permission ke tools istemaal karna. Yeh naapne layak sachchai hai, koi kalpana nahi.',
  'A product specification whose acceptance criteria are eval thresholds on a named dataset.':
    'Aisa product spec jiske acceptance criteria ek named dataset par eval thresholds hain.',
  'Fixing an exact model version so behaviour does not change beneath you.':
    'Model ka exact version fix kar dena, taaki behaviour aapke neeche se na badle.',
  'The re-evaluation required when a provider retires your model.':
    'Provider aapka model band kare to jo poora dobara-naapna karna padta hai.',
  'An immediate flag routing traffic to the non-AI path. Not a rollback.':
    'Ek turant chalne wala flag jo traffic ko non-AI raste par bhej deta hai. Rollback nahi hai.',
  'A program someone uses. The thing with buttons. It is the app that talks to the model — the model itself has no interface, no memory and no idea a person exists.':
    'Woh program jo koi istemaal karta hai. Buttons wali cheez. App hi model se baat karta hai — model ka apna koi interface, memory ya insaan ka andaaza nahi hota.',
  'A way for one program to ask another program to do something, over the internet. You never see it. When this book says your app "calls the API", it means your app sent a message to the model provider’s computers and waited for a reply.':
    'Ek tareeka jisse ek program doosre program se internet par kaam karwaata hai. Aap ise kabhi dekhte nahi. Jab is course mein likha ho ki aapka app "API call karta hai", matlab aapke app ne model provider ke computers ko message bheja aur jawaab ka intezaar kiya.',
  'One such request and its reply. One question in, one answer out — and one charge on the bill.':
    'Ek aisi hi request aur uska reply. Ek sawaal andar, ek jawaab bahar — aur bill par ek charge.',
  'A plain-text way of writing structured information so a program can read it: labels and values inside curly braces, like {"role": "user", "content": "hello"}. It is not code and not a database. It is the format the envelope is written in.':
    'Structured information likhne ka ek plain-text tareeka jise program padh sake: curly braces ke andar labels aur values, jaise {"role": "user", "content": "hello"}. Yeh na code hai na database. Envelope isi format mein likha jaata hai.',
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
  'The position a piece of text gets on the meaning map, written as a list of numbers. Produced by a small AI whose only job is placing text.':
    'Meaning map par text ke tukde ko milne wali jagah, numbers ki list ke roop mein likhi hui. Ise ek chhota AI banata hai jiska kaam sirf text ko jagah dena hai.',
  'One piece of a document after it has been cut up. The unit that gets stored, searched and sent.':
    'Kaate jaane ke baad document ka ek tukda. Yahi unit store, search aur bheja jaata hai.',
  'A standing instruction sent invisibly with every message, saying how the AI should behave.':
    'Ek standing instruction jo har message ke saath chupchaap jaati hai, aur batati hai ki AI ko kaisa behave karna hai.',
  'The dial deciding whether the AI always picks its most likely next guess, or sometimes takes a less likely one. Low means repeatable, not truthful.':
    'Woh dial jo tay karta hai ki AI hamesha apna sabse likely agla guess le, ya kabhi-kabhi kam likely bhi. Kam ka matlab repeatable hai, sach nahi.',
  'When the AI produces something fluent and invented because it had no evidence. Not a malfunction — the normal behaviour of a guessing machine with nothing to go on.':
    'Jab AI kuchh fluent aur bana hua nikaal deta hai kyunki uske paas evidence tha hi nahi. Yeh kharaabi nahi — bina jaankaari wale guessing machine ka normal behaviour hai.',
  'The answer key: questions with verified correct answers, written before you test anything. Without one, "is it good?" has no answer.':
    'Answer key: sawaal jinke sahi jawaab pehle se verify kiye gaye hon, aur jo test se pehle likhe gaye hon. Iske bina "kya yeh accha hai?" ka koi jawaab hi nahi hai.',
  'Continuing a model’s training on your own examples so it adopts a behaviour. Teaches shape and register, not durable facts. Chapter 19 is the decision.':
    'Model ki training aapke apne examples par aage badhana taaki woh ek behaviour apna le. Yeh shape aur register sikhata hai, tikne wale facts nahi. Chapter 19 mein yeh decision hai.',
  'A scoring guide written in advance: what each level of quality looks like, so two people grading the same thing agree.':
    'Pehle se likha hua scoring guide: quality ka har level dikhta kaisa hai, taaki ek hi cheez ko do log ek jaisa grade karein.',
  'When behaviour changes over time without anyone changing the code — a model updated, a corpus grown, traffic shifted.':
    'Jab behaviour samay ke saath badal jaaye bina kisi ke code chhue — model update ho gaya, corpus bada ho gaya, traffic badal gaya.',
  'A record of what the system did and why, kept so someone can check it afterwards.':
    'System ne kya kiya aur kyun, iska record, taaki baad mein koi jaanch sake.',
  'What the product does when it should not answer. Designed on purpose, or it happens by accident.':
    'Jab product ko jawaab nahi dena chahiye tab woh kya karta hai. Ya to soch-samajh kar banaya jaata hai, ya apne aap ho jaata hai.',
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
  'Training a small model to copy a large one on one narrow job. Most of the quality, a fraction of the cost.':
    'Ek chhote model ko ek hi narrow kaam par bade model ki nakal karna sikhana. Quality zyadatar, cost ka chhota hissa.',
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
  'What the feature still does with the AI part switched off.':
    'AI wala hissa band kar dene par bhi feature kya-kya karta rehta hai.'
});

/* Hinglish: Part V chapters 27, 28 and the start of 29. */
Object.assign(window.HING = window.HING || {}, {

  'A system in which the model can choose actions, inspect the results, and continue toward a goal.':
    'Aisa system jisme model khud kaam chun sakta hai, nateeje dekh sakta hai, aur lakshya ki taraf badhta reh sakta hai.',
  'Agent loop':
    'Agent ka loop',
  'Goal, decision, tool call, observation, updated context, then stop or continue. The stop condition is the part people leave out.':
    'Lakshya, faisla, tool call, nateeja, badla hua context, phir ruko ya aage badho. Rukne ki shart hi woh hissa hai jise log chhod dete hain.',
  'Step budget':
    'Kadmon ka budget',
  'A hard ceiling on how many actions an agent may take before it must give up. The main defence against a loop.':
    'Ek pakki seema ki agent haar maanne se pehle kitne kaam kar sakta hai. Chakkar mein phansne ke khilaaf sabse badi dhaal.',
  'Passing a task from one agent to another specialist. Cheap to draw, and easy to lose context or authority across.':
    'Ek agent se doosre maahir ko kaam saunpna. Banane mein aasaan, par beech mein context ya adhikaar kho jaana bhi utna hi aasaan.',

  /* ---- chapter 27 ---- */
  'Use a real implementation or a local mock to discover and invoke one tool or resource, and read the actual exchange.':
    'Ek asli implementation ya local nakli version se ek tool ya resource dhoondhiye aur chalaiye, aur jo baat-cheet hui use khud padhiye.',
  'Expose two tools and one resource. Test discovery, invocation, errors, consent and authorisation.':
    'Do tool aur ek resource bahar khol dijiye. Dhoondhna, chalana, errors, sehmati aur ijazat — sab test kijiye.',
  'Try unauthorised access, malformed arguments, poisoned resource content, and permissions wider than the task needs.':
    'Bina ijazat ghusne ki koshish kijiye, bigde arguments dijiye, resource mein zeher milaiye, aur kaam se zyada ijazat dekar dekhiye.',
  'A trust-boundary diagram and an authorisation matrix.':
    'Bharose ki seema ka diagram aur ijazat ka matrix.',
  'Explain what interoperability standardises, and what it leaves exactly as dangerous as it was.':
    'Samjhaiye ki yeh mel-jol kya ek jaisa banata hai, aur kya bilkul utna hi khatarnaak chhod deta hai jitna tha.',
  'MCP and interoperability':
    'MCP aur aapsi mel-jol',
  'Book chapter 14. A standard way for AI systems to reach tools and resources — and a clear-eyed view of what a standard does and does not make safe.':
    'Kitaab ka chapter 14. AI systems ke tools aur resources tak pahunchne ka ek tay tareeka — aur saaf nazar ki koi tay tareeka kya surakshit banata hai aur kya nahi.',
  'Draw the host, client, server and resource flow and mark where consent and authorisation sit.':
    'Host, client, server aur resource ka bahav banana, aur nishaan lagana ki sehmati aur ijazat kahan baithti hain.',
  'Explain why a standardised interface to an unsafe tool is still unsafe.':
    'Samjhaana ki ek asurakshit tool ka tay-shakal interface bhi asurakshit hi rehta hai.',
  'Classify tools by what they are allowed to change.':
    'Tools ko is hisaab se baantna ki woh kya badal sakte hain.',
  'A tool access policy':
    'Tool access ki policy',
  'Written for an AI assistant in a government environment, where “it seemed helpful” is not an acceptable explanation for an action taken. The policy is the artifact; the classification is the thinking.':
    'Ek sarkari maahaul ke AI assistant ke liye likhi gayi, jahan "madadgaar lag raha tha" kisi kaam ki manzoor safai nahi hai. Policy deliverable hai; baantna asli soch hai.',
  'Classify every tool as read-only, reversible-write, irreversible-write, privileged or prohibited.':
    'Har tool ko baantiye: sirf padhne waala, palta jaa sakne waala badlaav, na palat-ne waala badlaav, khaas adhikaar waala, ya bilkul mana.',
  'For each class, state the authorisation required and whether a human must confirm.':
    'Har shreni ke liye likhiye ki kitni ijazat chahiye aur kisi insaan ki haami zaroori hai ya nahi.',
  'Build the authorisation matrix: role down the side, tool class across the top.':
    'Ijazat ka matrix banaiye: bagal mein role, upar tool ki shreni.',
  'Mark the trust boundary on your diagram and say which component enforces it.':
    'Apne diagram par bharose ki seema mark kijiye aur batayiye ki use kaun sa hissa lagu karta hai.',
  'Write what the audit record contains for an irreversible action.':
    'Likhiye ki na palat-ne waale kaam ka record mein kya-kya hoga.',
  'Every tool has exactly one class.':
    'Har tool ki theek ek shreni ho.',
  'No irreversible action lacks a confirmation step.':
    'Koi bhi na palat-ne waala kaam bina confirmation ke na ho.',
  'The enforcing component is named and is not the model.':
    'Lagu karne waale hisse ka naam likha ho, aur woh model na ho.',
  'A tool is a typed interface with a contract':
    'Tool ek tay-shakal interface hai, contract ke saath',
  'Chapter 25. MCP standardises how that contract is advertised.':
    'Chapter 25. MCP bas yeh ek jaisa banata hai ki woh contract bataya kaise jaaye.',
  'Permissions are enforced server-side':
    'Ijazat server par lagu hoti hai',
  'Also chapter 25, and it stays true across a protocol boundary.':
    'Yeh bhi chapter 25, aur protocol ki seema paar karke bhi yeh sach rehta hai.',
  'A plug socket is a standard. It means any appliance from any company fits your wall without a conversation. What it does not do is promise the appliance is safe, or that a child should be allowed to switch it on.':
    'Bijli ka socket ek maanak hai. Iska matlab hai ki kisi bhi company ka koi bhi upkaran aapki deewar mein bina baat-cheet ke fit ho jaata hai. Par yeh na to yeh waada karta hai ki upkaran surakshit hai, na yeh ki kisi bachche ko use chaalu karne dena chahiye.',
  'That is exactly what a protocol like MCP is, and exactly what it is not. You will never need to build one. You do need to see the line it draws — because all the interesting questions sit on that line.':
    'MCP jaisa protocol theek yahi hai, aur theek yahi nahi hai. Aapko kabhi ek banana nahi padega. Par jo lakeer woh kheenchta hai use dekhna zaroori hai — kyunki saare dilchasp sawaal usi lakeer par baithe hote hain.',
  'What the specification actually defines':
    'Yeh specification asal mein kya tay karta hai',
  'A host, a client and a server, with standardised primitives: resources, prompts and tools. It also states security and user-consent considerations explicitly, which is unusual and worth reading. Agent-to-agent protocols are emerging separately, as a layer for agents to exchange tasks rather than for a model to reach a tool.':
    'Ek host, ek client aur ek server, aur kuch tay buniyaadi cheezein: resources, prompts aur tools. Yeh security aur user ki sehmati ki baatein bhi saaf likhta hai, jo aam nahi hai aur padhne layak hai. Agent-se-agent ke protocols alag se aa rahe hain — woh agents ke aapas mein kaam aur nateeje baantne ki parat hain, kisi model ke tool tak pahunchne ki nahi.',
  'A standardised tool interface does not make an unsafe tool safe. The protocol carries the call; it does not decide whether the call should have been allowed.':
    'Tay-shakal tool interface kisi asurakshit tool ko surakshit nahi banata. Protocol call pahunchata hai; yeh tay nahi karta ki woh call honi bhi chahiye thi ya nahi.',
  'One thing worth saying plainly, because it is a common mix-up: MCP is a <strong>protocol</strong>, not a framework that builds agents for you. It standardises the socket. What gets plugged in, and who is allowed to switch it on, is still entirely your design.':
    'Ek baat saaf keh dena zaroori hai, kyunki isme aam taur par gadbad hoti hai: MCP ek <strong>protocol</strong> hai, koi framework nahi jo aapke liye agent bana de. Yeh socket ko ek jaisa banata hai. Usme kya laga hai aur use chaalu karne ki ijazat kise hai — woh poori tarah aapka design hai.',
  'Agent-to-agent work adds a further layer — instead of exposing a tool to one model runtime, agents may need discoverable ways to exchange tasks and results. For product purposes the questions are identity, delegation, trust, permissions, error semantics and observability, rather than the field names.':
    'Agent-se-agent ka kaam ek aur parat jodta hai — ek model ko tool dene ki jagah, agents ko aapas mein kaam aur nateeje baantne ke dhoondhe jaa sakne waale raaste chahiye. Product ke nazariye se sawaal pehchaan, kaam saunpne, bharose, ijazat, error ke matlab aur nazar rakhne ke hain — field ke naamon ke nahi.',
  'Classify five tools from a system you know into read-only, reversible-write, irreversible-write, privileged, and prohibited.':
    'Kisi jaane-pehchaane system ke paanch tools ko baantiye: sirf padhne waale, palte jaa sakne waale, na palat-ne waale, khaas adhikaar waale, aur bilkul mana.',
  'The line between reversible and irreversible is where human confirmation belongs. If you found it hard to place a tool, that tool needs a smaller scope.':
    'Palte jaa sakne aur na palat-ne ke beech ki lakeer hi woh jagah hai jahan insaan ki haami honi chahiye. Agar kisi tool ko rakhne mein aapko mushkil hui, to us tool ka daayra chhota karna chahiye.',
  'MCP':
    'MCP',
  'A protocol standardising how a host, a client and a server expose and invoke tools, resources and prompts. A protocol, not an agent framework.':
    'Ek protocol jo yeh tay karta hai ki host, client aur server tools, resources aur prompts kaise kholte aur chalate hain. Ek protocol, agent banane ka framework nahi.',
  'Trust boundary':
    'Bharose ki seema',
  'The line across which input stops being yours and starts being something you must check.':
    'Woh lakeer jiske paar input aapka nahi rehta aur aisi cheez ban jaata hai jise aapko jaanchna hi hai.',
  'Least privilege':
    'Sabse kam adhikaar',
  'Granting exactly the permissions the task needs and no more — so a tool that is never needed cannot be misused.':
    'Theek utni hi ijazat dena jitni kaam ko chahiye, usse ek bhi zyada nahi — taaki jis tool ki kabhi zaroorat hi nahi, uska galat istemaal ho hi na sake.',
  'Capability negotiation':
    'Kshamta ki baat-cheet',
  'How two sides of a protocol agree on what each can do before any work happens.':
    'Kaam shuru hone se pehle protocol ke dono taraf yeh tay karna ki kaun kya kar sakta hai.',

  /* ---- chapter 28 ---- */
  'Feed one PDF with a table, one image, and one short audio clip. Predict what plain text extraction will lose.':
    'Ek PDF jisme table ho, ek tasveer, aur ek chhoti audio clip dijiye. Andaaza lagaiye ki sirf text nikaalne par kya kho jaayega.',
  'Extract structured facts with provenance, including timestamps where the source is audio.':
    'Tay shakal mein facts nikaaliye, provenance ke saath — aur audio ho to samay bhi.',
  'Try a poor scan, a difficult table, overlapping speakers, and mixed-language input.':
    'Ek kharaab scan, ek mushkil table, ek saath bolte do log, aur mili-juli bhasha ka input aazmaiye.',
  'A multimodal pipeline and a modality-specific evaluation set.':
    'Ek multimodal pipeline, aur har madhyam ke liye alag evaluation set.',
  'State where provenance and human verification are mandatory rather than nice to have.':
    'Batayiye ki provenance aur insaani jaanch kahan zaroori hain, kahan sirf achchi baat.',
  'Multimodal — when the input is not just text':
    'Multimodal — jab input sirf text na ho',
  'Book chapter 15. Documents, images, audio and video. The architecture is still context, tools, retrieval and evaluation — but what counts as evidence changes, and so does what provenance means.':
    'Kitaab ka chapter 15. Documents, tasveerein, audio aur video. Architecture wahi rehta hai — context, tools, retrieval aur evaluation — par saboot kya maana jaayega yeh badal jaata hai, aur provenance ka matlab bhi.',
  'Name three things plain-text extraction loses from a real PDF.':
    'Teen cheezein batana jo asli PDF se sirf text nikaalne par kho jaati hain.',
  'Draw a voice pipeline and mark the latency-sensitive steps.':
    'Ek voice pipeline banana aur woh kadam mark karna jahan der chubhti hai.',
  'Say which component must supply the ground truth for a multimodal question.':
    'Batana ki multimodal sawaal ke liye ground truth kaun sa hissa dega.',
  'A voice assistant for meeting follow-up, specified':
    'Meeting ke follow-up ke liye ek voice assistant, poori tarah likha hua',
  'The technology is the easy half. Specify the half that gets a system stopped in review: privacy boundaries, retention, attribution, and what a person must confirm.':
    'Technology aasaan haissa hai. Woh haissa likhiye jiski wajah se system review mein ruk jaata hai: niji seemayein, kitne din rakha jaayega, kaun bola yeh tay karna, aur insaan ko kya confirm karna hoga.',
  'Define the privacy boundary: whose audio, captured where, with what notice.':
    'Niji seema tay kijiye: kiski awaaz, kahan record hui, aur kya batakar.',
  'Set transcript retention and the deletion path.':
    'Transcript kitne din rahega aur mitane ka raasta kya hoga, yeh tay kijiye.',
  'Specify speaker attribution and what happens when it is uncertain.':
    'Tay kijiye ki kaun bola yeh kaise likha jaayega, aur pakka na ho to kya hoga.',
  'Specify task extraction: what becomes an action item, and what confirmation is required.':
    'Tay kijiye ki kaam kaise nikalenge: kya action item banega, aur kya confirmation chahiye.',
  'Write the evaluation metrics, including one for attribution accuracy.':
    'Evaluation ke numbers likhiye, jisme ek yeh bhi ho ki kaun bola yeh kitni baar sahi nikla.',
  'A person can find out what was recorded about them and have it deleted.':
    'Koi vyakti jaan sake ki uske baare mein kya record hua aur use mitwa sake.',
  'No action is taken from audio without a confirmation step.':
    'Awaaz ke aadhaar par koi kaam bina confirmation ke na ho.',
  'Attribution has a measured accuracy figure and a stated uncertainty behaviour.':
    'Kaun bola yeh kitna sahi nikla iska naapa hua number ho, aur pakka na hone par kya hoga yeh likha ho.',
  'Scanned documents need rendering, not parsing':
    'Scan kiye documents ko padha nahi, dekha jaata hai',
  'Chapter 16 met this for images of text.':
    'Chapter 16 mein aap text ki tasveeron par yeh dekh chuke hain.',
  'Ground truth has to come from somewhere':
    'Ground truth kahin se to aani hi hai',
  'Chapter 6. For a table or an image, that somewhere is a person.':
    'Chapter 6. Table ya tasveer ke liye woh "kahin" ek insaan hai.',
  'Take a photo of a railway timetable and read out only the words, in order, to somebody on the phone. They will hear every station name and not one useful departure time — because the meaning was in the columns, and columns do not survive being read aloud.':
    'Railway ke time-table ki photo lijiye aur phone par kisi ko sirf shabd, kram se, padhkar sunaiye. Use har station ka naam sunai dega aur ek bhi kaam ka samay nahi — kyunki matlab columns mein tha, aur column zor se padhe jaane par bachte nahi.',
  'That is what happens when a program pulls plain text out of a PDF. A PDF is text, layout, tables, pictures and hidden notes all at once. Reading the words alone flattens four of those five into nothing, silently.':
    'PDF se jab koi program sirf text nikaalta hai to yahi hota hai. PDF ek saath text, layout, tables, tasveerein aur chhipe hue note hai. Sirf shabd padhne se un paanch mein se chaar chupchaap chapte hokar gayab ho jaate hain.',
  'Voice systems are pipelines, not a single model. Every stage adds latency and every stage adds a place for the meaning to shift.':
    'Voice systems ek pipeline hote hain, ek model nahi. Har padav der jodta hai, aur har padav ek aur jagah deta hai jahan matlab khisak sakta hai.',
  'Each of these has a name you will hear — reading text off a picture, turning speech into text, working out who said which line. The names are in the list at the end of the chapter. The thing to carry is simpler: every one of them is a step where meaning can quietly go missing, and every step needs its own way of being checked.':
    'Inme se har ek ka ek naam hai jo aap sunenge — tasveer se text padhna, bolne ko likhne mein badalna, yeh tay karna ki kaun si line kisne boli. Naam chapter ke aakhir waali list mein hain. Yaad rakhne waali baat isse saral hai: inme se har ek woh kadam hai jahan matlab chupke se kho sakta hai, aur har kadam ko jaanchne ka apna tareeka chahiye.',
  'For a meeting assistant: who said what, how long is the transcript kept, and what happens when two people talk over each other?':
    'Meeting assistant ke liye: kisne kya kaha, transcript kitne din rakha jaata hai, aur do log ek saath bolein to kya hota hai?',
  'Speaker attribution is the part that looks like a technical detail and behaves like a privacy decision.':
    'Kaun bola yeh tay karna dekhne mein technical baarikee lagti hai aur bartav niji-ta ke faisle jaisa karti hai.',
  'OCR':
    'OCR',
  'Reading text out of an image of text. It has a quality floor set by the scan, and it fails quietly on bad input.':
    'Text ki tasveer se text padhna. Iski quality ki seema scan tay karta hai, aur kharaab input par yeh chupchaap fail hota hai.',
  'Diarization':
    'Diarization — kaun bola yeh alag karna',
  'Working out who spoke which part of an audio recording. Looks like a technical detail, behaves like a privacy decision.':
    'Yeh tay karna ki recording ka kaun sa hissa kisne bola. Dekhne mein technical baarikee, bartav niji-ta ke faisle jaisa.',
  'Document understanding':
    'Document ko samajhna',
  'Extracting meaning that depends on layout — tables, headings, position — rather than only the words.':
    'Woh matlab nikaalna jo layout par tika hai — tables, headings, jagah — sirf shabdon par nahi.',
  'Media provenance':
    'Media ka provenance',
  'Knowing where a piece of media came from and what has been done to it since.':
    'Yeh jaanna ki koi tasveer ya recording kahan se aayi aur uske baad usme kya kiya gaya.'

});

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
  'Classify tools by what they are allowed to change.':
    'Tools ko is hisaab se baantna ki woh kya badal sakte hain.',
  'A tool access policy':
    'Tool access ki policy',
  'Write what the audit record contains for an irreversible action.':
    'Likhiye ki na palat-ne waale kaam ka record mein kya-kya hoga.',
  'Every tool has exactly one class.':
    'Har tool ki theek ek shreni ho.',
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
  'Name three things plain-text extraction loses from a real PDF.':
    'Teen cheezein batana jo asli PDF se sirf text nikaalne par kho jaati hain.',
  'Write the evaluation metrics, including one for attribution accuracy.':
    'Evaluation ke numbers likhiye, jisme ek yeh bhi ho ki kaun bola yeh kitni baar sahi nikla.',
  'A person can find out what was recorded about them and have it deleted.':
    'Koi vyakti jaan sake ki uske baare mein kya record hua aur use mitwa sake.',
  'No action is taken from audio without a confirmation step.':
    'Awaaz ke aadhaar par koi kaam bina confirmation ke na ho.',
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

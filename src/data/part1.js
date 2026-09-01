/* Part I — The basics (Chapters 0–7)
   Adapted from "AI From Zero", v2.0 General Edition.
   Block grammar: p=para, key=thesis line, c=callout[label,text], l=bullets,
   n=numbered, tb=table[head,rows], code, x=expected result. */

window.PART1 = [
{
  id:'ch0', num:0, part:1, minutes:10, labs:[],
  title:'Start here',
  concept:'Ten minutes. Nothing to install, nothing to sign up for, and no prior knowledge assumed.',
  takeaway:[
    'Tell the difference between the app and the model — which is most of what lets you hold a design conversation.',
    'Know that you can tap any underlined word to find out what it means, without leaving the page.'
  ],
  story:[
    ['p','Most people who give up on a technical subject do not give up because it was hard. They give up because a word went past on page three that everyone else seemed to understand, and rather than stop, they kept reading — understanding a little less each paragraph until the whole thing felt like it was written for somebody else.'],
    ['key','If that has happened to you before, it was the writing’s fault, not yours. Two things here are built to stop it.'],
    ['p','<strong>Every word is tappable.</strong> The first time a term appears that means something specific, it gets a faint dotted underline. Tap it, and a plain explanation appears right there — you never leave the page or lose your place.'],
    ['p','Try it on this sentence, which contains four of them: an <strong>app</strong> sends a <strong>prompt</strong> to a <strong>model</strong> and is billed in <strong>tokens</strong>. Tap each one now, before reading on. Some will say <em>you build this in Chapter 9</em> — that means the course has named it early on purpose, and the one-line version is genuinely all you need.'],
    ['try',{id:'ch0-tap',mins:2,min:12,rows:2,
      task:'Now write it back, roughly. What is the difference between the <em>app</em> and the <em>model</em>? Two lines. Getting it half-wrong here costs nothing — writing before being told is the whole point.',
      ph:'The app is … the model is …',
      after:'The model is a program on somebody else’s computers that takes text and returns text. No buttons, no memory, no idea a person exists. The app is your product — the screens and the code that decide what to send it and what to do with the reply. Everything a user experiences as “the AI” is really your app arranging things around a model that does one narrow thing. Holding those two apart is most of what separates a product manager who can hold a design conversation from one who cannot.'}],

    ['p','<strong>The second thing: this course stops and asks.</strong> Every few paragraphs there is a box like the one you just used. Some ask you to guess before you are told. Some ask you to write something. Some are real questions that count.'],
    ['p','They exist because reading and understanding feel identical from the inside, and only one of them is real. And getting one wrong is worth more than getting it right — a wrong answer you were confident about has found a belief you did not know was false, which is the most useful thing that can happen in a study session. Nobody sees any of it. There is no grade and no pass mark.'],

    ['p','That is all you need to use this. A few practical notes, and then Chapter 1.'],
    ['l',[
      '<strong>Nothing to install.</strong> The interactive tools in each chapter run right here in the page. There is an optional section in some chapters showing the same ideas as real code — it needs a free account and about twenty minutes of setup, and you can ignore it completely. Nothing later depends on it.',
      '<strong>One chapter per sitting.</strong> They are fifteen to twenty-five minutes. Stopping while you still have energy is what brings you back tomorrow; a huge first week followed by nothing is the usual way this ends.',
      '<strong>Your progress follows you.</strong> Signed in, everything saves against your account, so you can read on your phone and carry on at your desk.'
    ]],
    ['key','You will hit a chapter that feels too hard. That is scheduled, not exceptional. When it happens, the move is neither to push through nor to stop — it is to take the smallest step available and let the day end there. Every question has a “Stuck?” button that shows you the answer without counting it against you.'],
    ['try',{id:'ch0-quit',mins:3,min:40,rows:3,
      task:'Decide it now, while it is easy to think clearly. What will you do on the evening you do not want to open this? What is the smallest thing you would still be willing to do — and what will you tell yourself about the day you skipped?',
      ph:'When I do not want to open this, I will …',
      after:'The plans that survive a bad evening share three things. The smallest step is genuinely tiny — one question, two minutes, not a chapter. You know where to resume without having to decide, because deciding is the expensive part when you are tired. And the story about the missed day is settled in advance: a missed day is a missed day. It is not evidence of anything and it does not mean starting again. Everybody lapses. The people who finish are the ones who had already decided that lapsing was allowed.'}],
    ['p','That is the whole chapter. Nothing here needs remembering. Chapter 1 starts properly.']
  ]
},
{
  id:'ch1', num:1, part:1, minutes:20, labs:[],
  title:'What happens when your app asks an AI something',
  concept:'Three facts about the machine. Each one decides something you will have to design around.',
  takeaway:[
    'Explain why an AI can sound completely certain and be completely wrong.',
    'Say what a company is actually billed for when someone uses an AI feature.',
    'Explain why a long chat costs more per message than a short one — and why that is a product decision, not a technical detail.'
  ],
  story:[
    ['p','Start with your phone keyboard. You type <em>See you at the</em> and it offers <em>office</em>, <em>station</em>, <em>airport</em>. It is guessing the next word from patterns in what people usually type. It is not thinking about your evening.'],
    ['p','An AI model is that, made enormous. It was built by reading a very large amount of writing and getting extremely good at one narrow trick: guessing what text comes next. Do that trick over and over and whole paragraphs come out. That is genuinely all it does.'],
    ['key','It is guessing, not looking up. There is no database behind it that it consults. This one fact causes most of the surprises in this field.'],
    ['pred',{id:'ch1-guess',short:true,ph:'One line — what do you think it does?',
      ask:'So: you ask it about a refund policy at a company that does not exist. It has never seen anything about it. What comes back?',
      reveal:'A confident, well-written, completely invented policy. Not because it is lying — because “guess what text comes next” has no option for “I have nothing here.” Saying <em>I don’t know</em> is a behaviour that has to be added on top, and it does not always hold.',
      then:'This is why you cannot judge an AI answer by how confident it sounds. It sounds identical either way. Chapter 2 is entirely about this.'}],

    ['p','Now the practical part: what actually gets sent, and what you get charged for.'],
    ['p','Your app sends text. The AI sends text back. You are billed for both — for how much went in, and how much came out. Not by the word, though. By something slightly smaller.'],
    ['p','Text gets chopped into pieces called <strong>tokens</strong>. Roughly, a token is about three-quarters of an English word. Common words are usually one token each; unusual words and other scripts break into several. Try it — this is the actual thing, running here:'],
    ['lab','tokenizer'],
    ['p','Type a normal sentence and watch it split. Then try your own name, and then something in Hindi or Tamil if you have it. Notice how many more pieces those become. Every extra piece is money.'],
    ['q','I001'],

    ['p','Second fact: there is a size limit. Everything sent in one go — the question, any instructions you attach, any documents, plus the answer coming back — has to fit inside a ceiling. The industry calls that ceiling the <strong>context window</strong>.'],
    ['p','It is worth being precise about what it is not. It is not memory. It is the size of one delivery.'],
    ['q','I006'],

    ['p','Which brings us to the third fact, and the strangest one.'],
    ['key','The AI forgets you completely the moment it replies. Every request starts from nothing. It has no idea you spoke to it a minute ago.'],
    ['p','That raises an obvious question: so how does a chat assistant seem to remember what you said five messages back?'],
    ['p','It does not. The app re-sends the entire conversation every single time. When you type message six, the app quietly sends messages one to five along with it, so the reply makes sense. The memory is a trick performed by the app, not a property of the AI.'],
    ['p','And since you pay for everything you send — you pay for that whole history again, on every message. Watch it happen:'],
    ['lab','receipt'],
    ['q','I010','I011'],

    ['p','That is the chapter. Three facts, and each one lands on your desk rather than an engineer’s:'],
    ['l',[
      '<strong>It guesses.</strong> So “does it sound confident?” tells you nothing, and you will need a way to actually check answers.',
      '<strong>There is a size limit.</strong> So you cannot simply hand it everything you own and hope. Deciding what gets sent is a design job.',
      '<strong>It forgets.</strong> So memory is something your product builds and pays for, message by message — not a feature you get from the vendor.'
    ]],
    ['try',{id:'ch1-explain',mins:3,min:40,rows:3,
      task:'Last thing, and it is the one that sticks. Write the two sentences you would say to a colleague who asks why a long chat with an AI costs more than a short one. Plain words — no jargon, and nothing you could not defend if they pushed back.',
      ph:'Two sentences.',
      after:'A good answer has both halves: what happens, and what it means. What happens — the AI remembers nothing, so the app sends the whole conversation again with every message. What it means — the cost of a conversation grows the longer it gets, and that cost is ours, not the vendor’s. If you got both halves, you understand this chapter better than most people who have shipped an AI feature.'}],
    ['c','Optional, if you want one thing to try','Open any AI chat you already use. Ask it something about your own company that it could not possibly know — phrased as though the answer obviously exists. See whether it refuses or invents. That is the whole of Chapter 2, and it takes two minutes.']
  ]
},
{
  id:'ch2', num:2, part:1, minutes:20, labs:['temperature'],
  title:'Telling it how to behave — and watching it lie',
  concept:'You get two controls over the AI. Neither of them makes it truthful.',
  needs:[
    ['It guesses, it does not look up','There is no database behind it. It continues text plausibly.',1],
    ['It forgets between messages','Anything it should know has to be sent again every time.',1],
  ],
  takeaway:[
    'Say what a system prompt is and why it is re-sent on every single message.',
    'Explain why a confident tone tells you nothing about whether an answer is right.',
    'Tell the difference between discouraging bad behaviour and removing its cause — the distinction most AI safety claims blur.'
  ],
  story:[
    ['p','Chapter 1 left you with a machine that forgets everything the moment it replies. Which raises a practical problem: if it forgets, how does a company make it behave a particular way — always polite, always in English, never discussing competitors?'],
    ['p','The answer is unglamorous. The app just re-sends the instructions every time, along with everything else. That standing instruction has a name: the <strong>system prompt</strong>. It is a paragraph of ordinary English, sent invisibly with every message, saying who the AI is meant to be and what it must not do.'],
    ['p','It is worth knowing how ordinary this is, because you will hear it dressed up. When a vendor says they have "customised the AI for your organisation," the honest translation is usually: <em>we wrote a paragraph of instructions.</em> Sometimes that is genuinely all it is.'],
    ['q','I013','I014'],

    ['p','The second control is a dial. Remember that the machine is guessing the next piece of text — and at each step several guesses are plausible. The dial decides whether it always takes the most likely one, or occasionally picks something less likely.'],
    ['p','Turned down, you get the same answer to the same question every time. Turned up, you get variety. It is called <strong>temperature</strong>, and you can move it here:'],
    ['lab','temperature'],
    ['pred',{id:'ch2-temp',short:true,ph:'Up or down — and what you give up',
      ask:'Your product answers questions about a refund policy. Should that dial be turned up or down, and what are you trading away?',
      reveal:'Down, near zero. You are giving up variety, which you never wanted here, to get repeatability, which you badly need — the same question should not produce a different policy on Tuesday.',
      then:'But here is the trap, and it catches experienced people. Turning it down does not make it <em>truthful</em>. It makes it <em>consistent</em>. A wrong answer at temperature zero is wrong the same way every single time.'}],
    ['q','I015'],

    ['p','Which brings us to the thing that makes this whole field difficult.'],
    ['key','It cannot tell you it does not know. Not because it is hiding something — because "guess the next piece of text" has no option for silence. Refusing has to be trained in on top, and it does not always hold.'],
    ['p','You predicted this in Chapter 1. Here is why it matters more than it first appears: the invented answer is not obviously worse than a true one. It has the same structure, the same calm tone, the same specificity. It will cite a clause number. It will give a percentage. Everything that normally signals that someone knows what they are talking about is still there, because those signals are patterns in text, and patterns in text are exactly what the machine reproduces.'],
    ['p','The industry word for this is <strong>hallucination</strong>, which is a slightly unfortunate name — it suggests a malfunction. It is not one. It is the machine doing precisely what it was built to do, in a situation where you wanted something else.'],
    ['q','I017','I019'],

    ['p','So the obvious move is to add an instruction: <em>only answer from the documents provided; if the answer is not there, say you do not know.</em> That helps. It genuinely reduces how often this happens.'],
    ['p','It does not fix it, and the reason is worth holding on to.'],
    ['try',{id:'ch2-guard',mins:4,min:40,rows:3,
      task:'Write that instruction in your own words — one sentence you would put in a system prompt to stop it inventing a policy it has not been shown. Then, underneath, write the question you would use to get around your own instruction.',
      ph:'The instruction, then the question that beats it.',
      after:'The instruction is the easy half. The second half is the lesson: almost any such sentence loses to a question that <em>looks</em> answerable from the documents but is not — a policy that sounds adjacent to a real one, a date just outside the range covered, a scheme whose name is one word different. The machine cannot tell the difference between “this is nearly in my documents” and “this is in my documents,” because it is matching patterns, not checking facts. An instruction discourages the behaviour. It does not remove the reason the behaviour happens.'}],
    ['q','I020'],

    ['p','That distinction — discouraging a behaviour versus removing its cause — is one of the most useful things in this course, and you will use it in meetings for years. Someone will tell you a problem is handled because they added a rule. The question that follows is always: <em>does that remove the cause, or does it make the symptom rarer?</em>'],
    ['p','The rest of Part I is about removing the cause. If the machine invents things when it has no evidence, then the fix is not a better instruction. The fix is putting real evidence in front of it. That takes four chapters, and it starts with a problem that sounds trivial and is not: your documents are too big to send.'],
    ['q','I122']
  ]
},

{
  id:'ch3', num:3, part:1, minutes:20, labs:['chunker'],
  title:'Why documents have to be cut up',
  concept:'And why every way of cutting them loses something. Choosing which loss is your job.',
  needs:[
    ['There is a size limit','Everything sent in one go has to fit inside a ceiling.',1],
    ['You pay for everything you send','Per piece of text, every time.',1],
    ['It invents when it has no evidence','So the fix is to give it real evidence.',2],
  ],
  takeaway:[
    'Give the two independent reasons you cannot just send the AI everything you own.',
    'Explain what is lost when a document is cut into pieces, with a concrete example.',
    'Say the sentence that separates someone who has read about this from someone who has done it: there is no correct size, only which failure you prefer.'
  ],
  story:[
    ['p','You want the AI to answer questions about your company’s documents. The obvious approach is to send it the documents. That fails immediately, for two separate reasons you already know.'],
    ['p','It will not fit — there is a ceiling on how much goes in one request. And you pay for every piece of text you send, on every single question, forever. Even where a huge document would technically fit, sending your entire library to answer one question is a bill you would not survive.'],
    ['q','I021'],

    ['p','So everyone does the same thing: cut the documents into pieces, keep the pieces, and send only the few that look relevant to whatever was asked. The pieces are called <strong>chunks</strong>, and the cutting is called chunking. That is the whole idea, and it is genuinely that simple.'],
    ['p','What is not simple is where to cut. Try it — cut a document three ways and see what breaks:'],
    ['lab','chunker'],
    ['pred',{id:'ch3-cut',rows:3,ph:'Your rule, and what it will get wrong',
      ask:'Take a document you know well — a policy, a contract, a spec. Write the rule you would give someone for cutting it up. Then name one question your rule will answer badly.',
      reveal:'Nearly every sensible rule — cut at paragraphs, at headings, at numbered clauses — breaks in the same place: a rule and its exception end up in different pieces. Retrieve the rule on its own and the answer is confident and incomplete, which is worse than no answer.',
      then:'The professional move is not finding a better rule. It is knowing which question your rule sacrifices, and testing that question deliberately.'}],
    ['q','I022','I023'],

    ['p','There is a second, sneakier problem, and you will have seen it in the tool above. Cut a document and some pieces stop making sense alone. A chunk that begins <em>the aforesaid amount shall be disbursed within sixty days</em> is useless by itself — which amount? Disbursed to whom? The sentence that answered those questions is in the piece before it.'],
    ['p','Documents are full of this. Legal text especially, but also anything with "the above", "this scheme", "such cases". Human writing assumes you read the preceding paragraph. Chunks do not get one.'],
    ['key','There is no correct chunk size. There are only different failures, and you choose between them based on what your documents look like and what your users ask.'],
    ['p','That sentence, said out loud in a design review, is the difference between someone who has read about this and someone who has done it. Everyone wants to be told the right number. There isn’t one.'],
    ['try',{id:'ch3-scissors',mins:4,min:50,rows:3,
      task:'Say the trade out loud. For your document: what size are you cutting at, what does that win, and what does it lose? Write it as the sentence you would actually say in a meeting.',
      ph:'We are cutting at … which wins … and loses …',
      after:'A strong answer names a real loss, specific to your documents. “Clause by clause, with a couple of sentences of overlap — wins precise answers to clause-specific questions, loses anything where the answer spans a clause and its exception, so we test those on purpose.” Anyone who cannot name the loss has not made a choice. They have accepted a default and called it a decision.'}],
    ['q','I024']
  ]
},
{
  id:'ch4', num:4, part:1, minutes:20, labs:[],
  title:'Finding the right piece — the obvious way, and why it fails',
  concept:'Matching words is the first thing anyone tries. Watching exactly where it breaks is the point of this chapter.',
  needs:[
    ['Documents get cut into pieces','You keep the pieces and send only the relevant few.',3],
    ['Some pieces stop making sense alone','“The aforesaid amount” has lost its antecedent.',3],
  ],
  takeaway:[
    'Explain why matching words fails precisely for the users who most need help.',
    'Name the one thing word-matching does better than anything cleverer.',
    'Say what a search system returns when the answer is not in your documents at all — and why that is dangerous.'
  ],
  story:[
    ['p','You have a document cut into twenty pieces. A question arrives. Something has to decide which pieces to send.'],
    ['p','The obvious method, and the one every search box used for thirty years: look for the words. The question says <em>refund</em>, so find the pieces containing <em>refund</em>. It is fast, it is cheap, and it needs nothing clever.'],
    ['try',{id:'ch4-terms',mins:3,min:20,rows:2,
      task:'Do it by hand first — it takes a minute and it is the whole lesson. A user types: <em>when do I get my money back?</em> Your document is a company policy. Write the words a word-matcher would go looking for. Then write the words the policy almost certainly uses instead.',
      ph:'What the user typed → what the document says',
      after:'The user wrote <em>money</em>, <em>back</em>, <em>get</em>. The document says <em>reimbursement</em>, <em>disbursement</em>, <em>credited to the registered account</em>, <em>the aforesaid amount</em>. Look at the overlap. It is not small — it is zero. Not one word in common between a perfectly clear question and the paragraph that answers it.'}],
    ['key','Word matching sees spelling, not meaning. Two sentences that mean exactly the same thing, sharing no words, are complete strangers to it.'],
    ['q','I025'],

    ['p','This failure is not random. It lands hardest in three predictable places, and all three matter commercially:'],
    ['l',[
      '<strong>Official language versus human language.</strong> Documents say <em>termination for convenience</em>; people say <em>cancel</em>. Documents are written by lawyers and specialists; questions are typed by everyone else.',
      '<strong>The people who most need help.</strong> Someone who already knows your product uses your vocabulary and finds things. Someone confused and frustrated uses their own words — and gets nothing. Your search works worst for the users with the biggest problem.',
      '<strong>Anything phrased as a question.</strong> “Why was I charged twice?” shares almost no words with the paragraph explaining duplicate authorisation holds.'
    ]],
    ['q','I027'],

    ['p','It is worth being fair to it, because you will meet people who over-correct. Word matching is excellent at some things and nothing beats it there: exact codes, section numbers, policy IDs, part numbers, someone’s name. If a user types <em>clause 14.2</em> they want clause 14.2, and no amount of cleverness improves on finding that exact string.'],
    ['q','I026'],

    ['p','One more property, and this is the one that causes real damage later.'],
    ['pred',{id:'ch4-norank',short:true,ph:'One line',
      ask:'A user asks something your documents genuinely do not cover at all. What comes back from the search step?',
      reveal:'Twenty pieces, ranked, with something sitting at number one. Searching has no concept of “nothing here” — it scores everything and sorts. The top result for an unanswerable question is just the least-bad of a bad set.',
      then:'Now put that together with Chapter 2. The irrelevant piece gets handed to the machine as though it were evidence, and the machine writes a fluent answer from it. Neither step fails. Nothing errors. You get a confident, wrong answer, and no part of the system noticed.'}],
    ['q','I028'],

    ['p','So: word matching is blind to meaning, and never admits it has nothing. The next chapter fixes the first of those. The one after that is about the second, which turns out to be harder and more important.']
  ]
},

{
  id:'ch5', num:5, part:1, minutes:25, labs:['meaningmap'],
  title:'Matching meaning instead of words',
  concept:'How “when do I get my money back” finds a paragraph about disbursement. This is the idea the whole industry is built on.',
  needs:[
    ['Word matching is blind to meaning','Two sentences meaning the same thing with no shared words are strangers to it.',4],
    ['Search never says “nothing here”','It ranks everything and hands you a number one regardless.',4],
  ],
  takeaway:[
    'Explain in plain words how a computer can tell that two differently-worded sentences mean the same thing.',
    'Say what a similarity score of 0.5 does and does not mean.',
    'Name a place where this technique would fail on your own company’s vocabulary.'
  ],
  story:[
    ['p','You need something that matches meaning rather than spelling. That sounds like it needs the machine to understand language, which sounds impossible. It is simpler than that, and the trick is genuinely elegant.'],
    ['p','Imagine an enormous map. Not of places — of meanings. Every possible sentence has a position on it. Sentences that mean similar things sit close together; sentences about unrelated things sit far apart. <em>When do I get my money back</em> and <em>reimbursement of approved claims</em> are neighbours, despite sharing no words, because they mean nearly the same thing.'],
    ['p','A separate, smaller AI does the positioning. You give it text, it gives back that text’s coordinates — a long list of numbers. The list is called an <strong>embedding</strong>, and the model that produces it an embedding model. That is all it does: text in, position out.'],
    ['q','I029'],

    ['p','Once every piece of your document has a position, finding relevant pieces stops being about words at all. It becomes geometry: get the position of the question, then find the pieces sitting nearest to it. Comparing two positions gives one number — how close they are. Here is the map, running live:'],
    ['lab','meaningmap'],
    ['pred',{id:'ch5-sim',short:true,ph:'A number between 0 and 1',
      ask:'Before you check it above — <em>when do I get my money back?</em> and <em>disbursement of approved claim amounts</em> share not a single word. How close will they score?',
      reveal:'High. Usually above 0.6, often near 0.8. That is the entire point: the position comes from meaning, so two texts that mean the same thing land near each other however they are spelled.',
      then:'One warning about that scale, because it costs people money in vendor meetings. The number technically runs from −1 to 1, but real text almost never drops below about 0.1. So 0.5 is not “half similar” — it is closer to the bottom of the useful range. Anyone quoting you a similarity number without telling you what their good and bad examples score is telling you nothing.'}],
    ['q','I032'],

    ['p','Two things about this are not obvious and both bite.'],
    ['p','<strong>Questions and answers are written differently.</strong> A question is short and interrogative; the paragraph answering it is long and declarative. Good embedding models are built knowing this, and expect to be told which is which. Get that wrong and quality quietly drops — nothing breaks, results are just worse, and nobody can see why.'],
    ['q','I030'],

    ['p','<strong>The map is only as good as whoever made it.</strong> It was built by reading text — overwhelmingly English text from the internet. Where your vocabulary was not well represented in that reading, the map gets it wrong. Two things your users consider completely different end up neighbours, or two things they consider identical end up far apart.'],
    ['try',{id:'ch5-map',mins:4,min:40,rows:3,
      task:'Find where it will fail you. Your actual domain, your actual users. Where would a map built mostly from English internet text put two things close together that your users consider completely different — or far apart when your users mean the same thing?',
      ph:'In our domain the map would get … wrong, because …',
      after:'Indian financial and legal vocabulary is full of these: <em>lakh</em> and <em>crore</em>, NEFT versus IMPS, government scheme names differing by one word and by enormous sums. Regional languages typed in English letters — <em>paisa kab milega</em> — are another. So is anything internal: two product codenames mean unrelated things to you and nothing at all to the map, so it places them by their spelling. The test of whether you understand this is whether you can name the failure before a user finds it.'}],
    ['q','I031'],

    ['p','This technique is the foundation of nearly every "chat with your documents" product you will ever be shown. It is genuinely good. Note what it still does not do, though: it finds the nearest pieces, always, even when nothing is close. Chapter 4’s problem has not gone anywhere. Which is why the next chapter is about measurement, and why it is the most important one in Part I.']
  ]
},
{
  id:'ch6', num:6, part:1, minutes:25, labs:['prdial'],
  title:'How to know if it actually works',
  concept:'Turning “the demo looked good” into a number you produced yourself. This is the chapter that makes you useful.',
  needs:[
    ['Search never says “nothing here”','It hands back a ranked list whatever you ask it.',4],
    ['Meaning matching finds near neighbours','Which is not the same as finding the right answer.',5],
  ],
  takeaway:[
    'Explain what a company must build before it can honestly claim an accuracy number.',
    'Describe the two ways a search step fails, and why fixing one worsens the other.',
    'Say which of those failures is fatal for a feature you work on — and defend the choice.'
  ],
  story:[
    ['p','Every AI project reaches the same moment. Someone senior asks: is it good? And in most organisations the answer is a demo — three questions that work, delivered confidently. That is not an answer. It is a performance.'],
    ['p','The machinery for answering properly is not new or technical. If you have ever written acceptance criteria, you already have the instinct. It is three ideas.'],

    ['p','<strong>One: write the answers down before you test.</strong> You cannot judge a system by asking it things and nodding at whatever comes back — you will nod at anything plausible, because plausible is exactly what it produces. So first you write a list of real questions with their verified correct answers. That list is called <strong>ground truth</strong>, and it is just an answer key, written before the exam.'],
    ['p','Ten to thirty questions is enough to start. They have to be real ones, in the words users actually use — not questions you wrote after reading the documents, which will use the documents’ vocabulary and quietly test nothing.'],
    ['q','I040'],
    ['pred',{id:'ch6-first',short:true,ph:'A fraction, like 6/10',
      ask:'You build a search step, write ten honest questions, and run them. How many will find the right piece on the first attempt?',
      reveal:'Six or seven out of ten is a normal, healthy first result. Genuinely — that is what a working system looks like on day one.',
      then:'And if you got nine or ten, the likeliest explanation is not that your system is excellent. It is that you wrote the questions after reading the documents, so you tested whether your search can find text using its own words. That is a mirror, not a test.'}],
    ['p','This also gives you the single most useful question to ask any vendor who quotes you a number. Not "how did you get 94%?" but: <em>against which answer key, written by whom, and can I see the questions?</em> Most cannot show you. That is your answer.'],
    ['q','I103'],

    ['p','<strong>Two: there are two ways to fail, and they pull against each other.</strong> Picture asking an assistant to fetch the files relevant to a meeting. They can fail two ways: leave out something that mattered, or bury you in things that did not.'],
    ['p','Leaving out what mattered is called poor <strong>recall</strong>. Burying you in irrelevance is poor <strong>precision</strong>. The lever between them is how many pieces you fetch per question — usually written <strong>k</strong>. Fetch more and you miss less, but more of what you fetch is junk. Fetch fewer and everything you get is relevant, but you miss things.'],
    ['p','You cannot have both. Move the lever and see:'],
    ['lab','prdial'],
    ['q','I044','I045'],

    ['p','<strong>Three: which failure is worse depends entirely on what you are building.</strong> And this is where it stops being an engineering question.'],
    ['p','A customer-facing bot that answers policy questions: burying it in irrelevance is the fatal one, because irrelevant material is what the AI then confidently builds a wrong answer from — and a wrong policy told to a customer is a liability. Missing an answer just creates a support ticket.'],
    ['p','A tool helping a lawyer research precedents: exactly the opposite. A missed precedent can lose a case. An extra irrelevant one costs thirty seconds of scanning.'],
    ['key','Nobody can make that call for you. It depends on what happens to a real person when each failure occurs, and the person who understands that is whoever owns the product — not whoever built it.'],
    ['try',{id:'ch6-fatal',mins:5,min:50,rows:4,
      task:'Make the call. For something you actually work on: which failure is cheap and which is fatal? Say why in terms of what happens to a real user — then say roughly how many pieces you would fetch as a starting point.',
      ph:'For … the fatal failure is … because … so I would start at k = …',
      after:'A strong answer ties the choice to a consequence rather than a preference. The shape is: “For our support assistant, including something irrelevant is fatal, because a wrong policy quoted to a customer creates a liability we then have to honour, while missing an answer only creates a ticket we were already getting. So precision first, low k, and a clear way for it to say it does not know.” The number matters less than the reasoning. Anyone can pick a number. Defending it is the skill.'}],
    ['q','I046'],

    ['p','That is the chapter, and it is the one that changes how people treat you. Almost nobody in an AI conversation has an answer key. Once you have one, you are the only person in the room who can say whether anything is working — and you can say it with a number you produced.']
  ]
},

{
  id:'ch7', num:7, part:1, minutes:20, labs:['redmap'],
  title:'The whole thing, assembled',
  concept:'Nothing new here. You have already built every piece — this is where it gets its name and you see where it breaks.',
  needs:[
    ['Documents get cut into pieces','Because of the size limit and the bill.',3],
    ['Meaning matching finds relevant pieces','Positions on a map, not shared words.',5],
    ['An answer key is how you know it works','And which failure you chose to prefer.',6],
  ],
  takeaway:[
    'Draw the standard architecture behind almost every “chat with your documents” product.',
    'Point at each step and say what can go wrong there without anything appearing to fail.',
    'Rank the usual fixes by how much they actually help — and know why the popular answer is usually wrong.'
  ],
  story:[
    ['p','There is a name this course has kept from you for six chapters. You have earned it.'],
    ['p','What you have built is: cut documents into pieces, give each piece a position on a meaning map, find the pieces nearest to a question, send those pieces to the AI with the question, and get an answer grounded in them rather than invented.'],
    ['p','That is called <strong>RAG</strong> — retrieval-augmented generation. Generation is Chapter 1’s text machine. Augmented by retrieval is Chapters 4 and 5. It is the single most deployed pattern in applied AI, and it is behind virtually every product you have been shown that claims to answer questions about your documents.'],
    ['p','You will see it drawn on vendor slides with glowing hexagons. You have now made every hexagon, several of them by hand, and broken most of them.'],
    ['try',{id:'ch7-draw',mins:6,min:60,rows:6,
      task:'Close this and write it out from memory as a numbered list — from a document arriving to an answer reaching a user. Then put a star next to every step where a wrong answer can be produced <em>without anything appearing to break</em>.',
      ph:'1. … 2. … (star the silent failures)',
      after:'The steps: cut into pieces → give each a position → store → position the question → find the nearest pieces → send those with the question → generate the answer → show it with its sources. Nearly every one fails silently. Cutting separates a rule from its exception, and nothing errors. Search returns a top result for a question with no answer in your documents, and nothing errors. The AI writes fluently from an irrelevant piece, and nothing errors. That is the defining property of this machine: it does not crash. It just becomes wrong, quietly, while every component reports success.'}],
    ['q','I114','I116'],

    ['p','So when someone tells you their AI assistant is giving bad answers, "bad answers" is not a diagnosis. There are at least four different problems that look identical from the outside, and they have completely different fixes. Here is where each one lives:'],
    ['lab','redmap'],

    ['pred',{id:'ch7-spend',rows:3,ph:'Your ranking, biggest impact first',
      ask:'Someone gives you one quarter to make answer quality better. Rank these before reading on: a more expensive AI model, better cutting, a second pass that re-ranks results, more work on the instructions, cleaning up the documents themselves.',
      reveal:'Cleaning the documents and fixing how they are cut almost always win, and a re-ranking pass is the cheapest big improvement after that. A more expensive model is usually the most expensive option and the smallest gain — because the problem was never that the AI could not read. It was that the right evidence never reached it.',
      then:'That is the general rule, and it will serve you for years: in a system like this, quality problems are evidence problems far more often than they are model problems. Spend where the evidence is.'}],
    ['q','I117'],

    ['p','Why keep the name back for six chapters? Because a word you learn before the thing becomes jargon — something you can repeat but not defend. A word you learn after becomes testimony. When you say <em>RAG</em> from now on, it will not be a term you picked up. It will be a thing you built, and more usefully, a thing you have broken.'],
    ['q','I118']
  ]
}

];

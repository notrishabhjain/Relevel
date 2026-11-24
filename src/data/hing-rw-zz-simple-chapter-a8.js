/* Hinglish for Generative AI foundations: how the models work (chapter:a8), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Until now you have looked at products. In this chapter you look inside the engine. You will learn how large language models are made and how they write text. Think of a model as a parrot that has read a whole library. You will learn only as much as a PM needs to make good calls. You will see attention at work. You will compare three ways to improve a model: prompting, RAG and fine-tuning. And you will test two models on the same ten cases.':
    'Ab tak aapne products dekhe hain. Is chapter mein aap engine ke andar dekhte hain. Aap seekhenge ki large language models kaise bante hain aur text kaise likhte hain. Model ko ek aise tote jaisa samajhiye jisne poori library padh li ho. Aap utna hi seekhenge jitna ek PM ko achhe faisle lene ke liye chahiye. Aap attention ko kaam karte dekhenge. Model ko behtar banane ke teen tareeke milayenge: prompting, RAG aur fine-tuning. Aur do models ko ek hi das cases par test karenge.',
  'Say how predictive AI (AI that picks a label or a number) differs from generative AI (AI that writes new things), and when each fits.':
    'Batayiye ki predictive AI (jo label ya number chunta hai) generative AI (jo nayi cheezein likhta hai) se kaise alag hai, aur kab kaun sa fit baithta hai.',
  'Explain tokens, context windows, transformers and attention in plain words, using pictures from daily life.':
    'Tokens, context windows, transformers aur attention ko saade shabdon mein samjhaiye, rozmarra ki tasveeron ke saath.',
  'Explain the three stages of training a model. Say how they differ from inference, which is using the finished model.':
    'Model ko train karne ke teen charan samjhaiye. Batayiye ki yeh inference se kaise alag hain, yaani taiyaar model ko use karna.',
  'Pick between prompting, RAG and fine-tuning for a given problem.':
    'Kisi samasya ke liye prompting, RAG aur fine-tuning mein se chuniye.',
  'Describe the AI market: model providers, open-weight models (models you can download), the machines underneath, and the apps on top.':
    'AI bazaar ko batayiye: model providers, open-weight models (jinhe aap download kar sakte hain), neeche ki machines, aur upar ke apps.',
  'Run three experiments on how models treat Indian text':
    'Teen experiments chalaiye ki models Indian text ke saath kaisa vyavhaar karte hain',
  'Before you build, see for yourself how AI models behave on the kind of text your tool must handle. In this chapter you learned what tokens and attention are. You also learned how to choose between prompting, retrieval (looking up the right page first) and fine-tuning. Here you run three small experiments on English, Hindi and Hinglish sentences. Then you write down what you saw.':
    'Banane se pehle khud dekhiye ki AI models us tarah ke text par kaisa vyavhaar karte hain jise aapka tool sambhalega. Is chapter mein aapne seekha ki tokens aur attention kya hain. Aapne yeh bhi seekha ki prompting, retrieval (pehle sahi page dhoondhna) aur fine-tuning mein se kaise chunein. Yahan aap English, Hindi aur Hinglish vaakyon par teen chhote experiments chalate hain. Phir likhte hain ki aapne kya dekha.',
  'The attention viewer inside this chapter, for the attention demo. Write what you saw in the notes box below.':
    'Is chapter ke andar ka attention viewer, attention demo ke liye. Jo dekha, woh neeche ke notes box mein likhiye.',
  'Take starter sentences 1, 2 and 3 from the project page. They are the same kind of message in English, Hindi and Hinglish. Paste each one, one at a time, into the attention viewer in this chapter.':
    'Project page se starter sentences 1, 2 aur 3 lijiye. Yeh ek hi tarah ka message hain, English, Hindi aur Hinglish mein. Har ek ko, ek-ek karke, is chapter ke attention viewer mein paste kijiye.',
  'For each sentence, write down how many pieces the text is cut into. Also write down which words the model pays most attention to when it reaches the name and the number. Then write two or three lines on what is different between the three sentences. Add one line on what this viewer does not prove.':
    'Har vaakya ke liye likhiye ki text kitne tukdon mein kata. Yeh bhi likhiye ki naam aur number par pahunchte hue model kin shabdon par sabse zyaada dhyaan deta hai. Phir do ya teen line likhiye ki teeno vaakyon mein kya alag hai. Ek line likhiye ki yeh viewer kya saabit nahi karta.',
  'Fill in a table that compares three ways of making a model find personal details. You can ask it with a prompt. You can let it look things up in your documents (retrieval). Or you can train it more (fine-tuning). Compare them on how fresh the facts are, private data, writing style, cost, speed and how easy they are to test. Fill it in for the third part of the tool, the context judge. End with the option you choose and why.':
    'Ek table bhariye jo model se nijee jaankari dhoondhwane ke teen tareeke milata hai. Aap use prompt se keh sakte hain. Aap use apne documents mein dhoondhne de sakte hain (retrieval). Ya aap use aur train kar sakte hain (fine-tuning). Unhe milaiye: facts kitne taaza hain, private data, likhne ka dhang, kharch, raftaar aur test karna kitna aasaan hai. Ise tool ke teesre hisse, context judge, ke liye bhariye. Us vikalp par khatam kijiye jo aap chunte hain, aur kyun.',
  'Run starter sentences 1 to 8 through two different AI models in the <a href="#/playground">Playground</a>. Fill in <em>Compare with</em>, so that each message goes to both. Use the same instruction for both: “List every piece of personal information in this sentence.”':
    'Starter sentences 1 se 8 ko <a href="#/playground">Playground</a> mein do alag AI models se chalaiye. <em>Compare with</em> bhariye, taaki har message dono ko jaye. Dono ke liye ek hi nirdesh rakhiye: “List every piece of personal information in this sentence.”',
  'For each model, write down how many items it found correctly, how many it missed, how long it took and what it cost. Note which sentences it missed. Note whether most of the misses were Hindi or Hinglish.':
    'Har model ke liye likhiye ki usne kitne items sahi dhoondhe, kitne chhode, kitna samay laga aur kitna kharch hua. Likhiye ki kaun se vaakya chhute. Dekhiye ki zyaadatar chhoote hue Hindi the ya Hinglish.',
  'Write one paragraph. Which model would you start with for this project? What is the one thing you would test next before you trust it?':
    'Ek paragraph likhiye. Is project ke liye aap kis model se shuru karenge? Bharosa karne se pehle aap agla kaun sa ek cheez test karenge?',
  'An attention write-up that names one clear difference you saw between the English, Hindi and Hinglish sentences.':
    'Ek attention write-up jo English, Hindi aur Hinglish vaakyon ke beech aapne jo ek saaf fark dekha, uska naam le.',
  'A decision table for the context judge. It ends with a choice and a reason.':
    'Context judge ke liye ek decision table. Woh ek choice aur ek kaaran par khatam hoti hai.',
  'A comparison of two models on the same eight sentences. Show found, missed, time and cost for each.':
    'Do models ki ek hi aath vaakyon par tulna. Har ek ke liye found, missed, samay aur kharch dikhaiye.',
  'One paragraph naming the model you would start with, and the one thing you would test next.':
    'Ek paragraph jo us model ka naam le jisse aap shuru karenge, aur woh ek cheez jo aap agli baar test karenge.',
  'A candidate problem with an AI fit (a problem that AI might suit)':
    'Ek umeedwar samasya jo AI ke laayak hai (jis samasya ke liye AI sahi baith sakta hai)',
  'This chapter helps you decide which AI method suits it, like choosing the right tool from a toolbox.':
    'Yeh chapter aapko tay karne mein madad karta hai ki kaun sa AI tareeka ise suit karta hai, jaise toolbox se sahi aujaar chunna.',
  'A build, buy or partner decision (make it yourself, pay for it, or team up)':
    'Build, buy ya partner ka faisla (khud banao, kharido, ya milkar karo)',
  'This chapter explains what you are buying.':
    'Yeh chapter samjhata hai ki aap kya kharid rahe hain.',
  'In full, this chapter takes about twelve hours. You need nothing outside this site. The attention viewer is inside the chapter. The <a href="#/playground">Playground</a> compares two models side by side once you have connected one on the <a href="#/setup">setup page</a>. The hands-on code chapters, from Chapter 1 onwards, build on everything here. So treat this chapter as the map before the journey.':
    'Poora karne mein is chapter ko lagbhag barah ghante lagte hain. Aapko is site ke bahar kuch nahi chahiye. Attention viewer chapter ke andar hi hai. <a href="#/setup">setup page</a> par ek model jodne ke baad <a href="#/playground">Playground</a> do models ko saath-saath milata hai. Chapter 1 se aage ke hands-on code chapters yahan ki har cheez par khade hain. Isliye is chapter ko safar se pehle ka naksha samajhiye.',
  'In A7 you turned a decision into a written plan, short user stories and a rough model. All through this part you have used AI models as tools. Now it is worth knowing a little about what is inside them, like peeking under a car bonnet.':
    'A7 mein aapne ek faisle ko likhe plan, chhoti user kahaniyon aur ek rough model mein badla. Is poore hisse mein aapne AI models ko aujaar ki tarah use kiya. Ab yeh jaanna achha hai ki unke andar kya hai, jaise gaadi ka bonnet kholkar dekhna.',
  'You do not need the maths. You need enough to make good calls. When is a model the right tool? Why does it act the way it does? Which way of improving it should you try first?':
    'Aapko ganit nahi chahiye. Aapko itna chahiye ki achhe faisle le sakein. Model kab sahi aujaar hai? Woh aisa vyavhaar kyun karta hai? Use behtar banane ka kaun sa tareeka pehle aazmana chahiye?',
  'Idea 1: Predictive AI and generative AI':
    'Idea 1: Predictive AI aur generative AI',
  'Let us start with a split you will hear often. Both kinds of AI learn patterns from data and make predictions (guesses about what comes next). What differs is what they guess. The table puts the two side by side.':
    'Ek bantwaare se shuru karte hain jo aap aksar sunenge. Dono tarah ke AI data se pattern seekhte hain aur predictions karte hain (aage kya aayega, uske andaaze). Fark yeh hai ki woh kya andaaza lagate hain. Table dono ko saath-saath rakhta hai.',
  'Predictive AI (picks a label or number)':
    'Predictive AI (label ya number chunta hai)',
  'Generative AI (makes new things)':
    'Generative AI (nayi cheezein banata hai)',
  'Output (what comes out)':
    'Output (jo nikalta hai)',
  'A label or a number':
    'Ek label ya ek number',
  'New content: text, images, code or audio':
    'Naya content: text, images, code ya audio',
  'Spam or not spam; the chance a customer cancels; next month’s sales':
    'Spam ya spam nahi; customer ke cancel karne ki sambhavna; agle mahine ki bikri',
  'Writing a first draft of an email; summarising a call; answering a question':
    'Email ka pehla draft likhna; call ka saar likhna; sawaal ka jawaab dena',
  'Training (how it learns)':
    'Training (yeh kaise seekhta hai)',
  'Examples with labels, for one task':
    'Label wale udaharan, ek kaam ke liye',
  'A huge amount of general data, then adapted to follow instructions':
    'Bahut sara aam data, phir nirdesh maanne ke liye dhala jata hai',
  'Tasks per model (jobs one model does)':
    'Har model ke kaam (ek model kitne kaam karta hai)',
  'Usually one':
    'Aam taur par ek',
  'Many, chosen by the instructions you give':
    'Kai, aapke diye nirdeshon se chune jate hain',
  'Typical cost per use':
    'Har baar use ka aam kharch',
  'Very low':
    'Bahut kam',
  'Higher, and it grows with the length of input and output':
    'Zyaada, aur input aur output ki lambai ke saath badhta hai',
  'A large language model, or <strong>LLM</strong>, is generative AI for text. Picture a parrot that has read a whole library. It guesses the next piece of text, again and again, and that is how it writes whole answers.':
    'Large language model, yaani <strong>LLM</strong>, text ke liye generative AI hai. Ek aise tote ko socho jisne poori library padh li ho. Woh agla text ka tukda guess karta hai, baar-baar, aur isi tarah poore jawaab likhta hai.',
  'Not every AI problem needs generative AI. Guessing which customers will cancel is a predictive job. A small classic model (an older, simpler kind) does it more cheaply and more reliably. Chapter 2.4 shows how far a simple sorter can go.':
    'Har AI samasya ko generative AI nahi chahiye. Kaun se customers cancel karenge, yeh guess karna predictive kaam hai. Ek chhota classic model (purana, saada kism) ise sasta aur bharosemand tareeke se karta hai. Chapter 2.4 dikhata hai ki ek saada sorter kitni door tak ja sakta hai.',
  'List three AI features you have used lately. Label each one as predictive or generative.':
    'Pichhle dino aapne jo teen AI features use kiye, unki list banaiye. Har ek par label lagaiye: predictive ya generative.',
  'You should have three labelled features. Recommendations, fraud alerts and spam filters are predictive. Chat assistants, image makers and meeting summaries are generative.':
    'Aapke paas teen label wale features hone chahiye. Recommendations, fraud alerts aur spam filters predictive hain. Chat assistants, image banane wale aur meeting summaries generative hain.',
  'Idea 2: Tokens, context windows, transformers and attention':
    'Idea 2: Tokens, context windows, transformers aur attention',
  'So how does an LLM read your text? It does not read words. It reads <strong>tokens</strong>, which are small pieces of text, like Lego bricks. A token is often a whole word and sometimes only part of one. In English, one token is about three-quarters of a word on average.':
    'To LLM aapka text kaise padhta hai? Woh shabd nahi padhta. Woh <strong>tokens</strong> padhta hai, jo text ke chhote tukde hain, Lego ki eent ki tarah. Ek token aksar poora shabd hota hai aur kabhi sirf uska hissa. English mein ek token ausat mein shabd ka lagbhag teen-chauthai hota hai.',
  'Each request can hold only so many tokens, counting both your message and the model’s answer. This limit is the <strong>context window</strong>. Think of it as the model’s desk: everything it uses to answer must fit on the desk.':
    'Har request mein sirf itne hi tokens aa sakte hain, aapka message aur model ka jawaab dono gin kar. Yeh seema <strong>context window</strong> hai. Ise model ki mez samajhiye: jawaab dene ke liye jo bhi use hota hai, woh mez par aana chahiye.',
  'Modern LLMs are built on a design called the <strong>transformer</strong>. Its key part is <strong>attention</strong>. For each token, the model works out which other tokens in the context matter most for guessing what comes next. It is like a student who underlines the key words in a question.':
    'Aaj ke LLMs ek design par bane hain jise <strong>transformer</strong> kehte hain. Uska mukhya hissa <strong>attention</strong> hai. Har token ke liye model dekhta hai ki context ke baaki kaun se tokens agla guess karne ke liye sabse zaroori hain. Yeh us student jaisa hai jo sawaal ke zaroori shabdon par line lagata hai.',
  'Here is a classic example. Take the sentence <em>“The trophy did not fit in the suitcase because it was too big”</em>. You know that “it” means the trophy. Attention is how the model links “it” to “trophy” and not to “suitcase”.':
    'Yeh ek jaana-maana udaharan hai. Vaakya lijiye <em>“The trophy did not fit in the suitcase because it was too big”</em>. Aap jaante hain ki “it” ka matlab trophy hai. Attention se hi model “it” ko “trophy” se jodta hai, “suitcase” se nahi.',
  'You can see attention for yourself, right here. The viewer below runs a small real model, GPT-2, inside your browser. Type a sentence. Then pick a word to see which earlier words it pays attention to.':
    'Aap attention ko khud yahin dekh sakte hain. Neeche ka viewer ek chhota asli model, GPT-2, aapke browser ke andar chalata hai. Ek vaakya likhiye. Phir ek shabd chuniye aur dekhiye ki woh pehle ke kin shabdon par dhyaan deta hai.',
  'You will see your sentence cut into tokens and passed through the model. Open an attention head (one of the model’s many small spotlights) to see which earlier tokens each token looks at. Try the trophy sentence and look at “it”. In some heads it links strongly to “trophy”.':
    'Aap apna vaakya tokens mein kata hua aur model se guzarta dekhenge. Ek attention head kholiye (model ki kai chhoti torch mein se ek) aur dekhiye ki har token pehle ke kin tokens ko dekhta hai. Trophy wala vaakya aazmaiye aur “it” ko dekhiye. Kuch heads mein woh “trophy” se mazboot judta hai.',
  'On your own computer, with PyTorch (a free toolbox for building AI models) installed, the same picture comes from a few lines of code. PyTorch cannot run inside a web page, so this block has no Run button here.':
    'Apne computer par, PyTorch (AI models banane ka free toolbox) install karke, wahi tasveer code ki kuch lines se aati hai. PyTorch web page ke andar nahi chal sakta, isliye is block mein yahan Run button nahi hai.',
  'You will see an interactive diagram with the sentence’s tokens on each side and lines between them. Click the token “it” and switch between layers (the model’s stacked steps). In some layers and heads, “it” links strongly to “trophy”.':
    'Aap ek interactive diagram dekhenge jismein vaakya ke tokens dono taraf hain aur beech mein lines hain. Token “it” par click kijiye aur layers ke beech badliye (model ke ek ke upar ek rakhe kadam). Kuch layers aur heads mein “it” “trophy” se mazboot judta hai.',
  'An error saying a module (a ready-made piece of code) was not found':
    'Ek error jo kehta hai ki module (pehle se bana code ka tukda) nahi mila',
  'The install line did not run. Run the first cell (the first box of code) again. Wait for it to finish before you run the rest.':
    'Install wali line nahi chali. Pehla cell (code ka pehla dibba) dobara chalaiye. Baaki chalane se pehle use khatam hone dijiye.',
  'The diagram does not appear':
    'Diagram nahi dikhta',
  'Some browsers and office networks block the embedded viewer. Try Chrome, or open the viewer on its own with the link under it. It shows attention without any setup.':
    'Kuch browsers aur office networks jude hue viewer ko rok dete hain. Chrome aazmaiye, ya uske neeche ke link se viewer alag se kholiye. Woh bina kisi setup ke attention dikhata hai.',
  'It runs, but “it” does not link to “trophy” in the layer you picked':
    'Yeh chalta hai, par jo layer aapne chuni usmein “it” “trophy” se nahi judta',
  'That is expected. Different layers and heads learn different patterns. Click through several layers. Seeing the pattern in only some places is part of the lesson.':
    'Yeh ummeed ke mutabik hai. Alag layers aur heads alag pattern seekhte hain. Kai layers par click karke dekhiye. Pattern ka sirf kuch jagah dikhna sabak ka hissa hai.',
  'Attention is a clue, not an explanation. A model has many layers, each with many attention heads, and the final answer comes from all of them together. Never show an attention map as proof of why a model gave an answer.':
    'Attention ek suraag hai, wajah nahi. Model mein kai layers hoti hain, har ek mein kai attention heads, aur aakhri jawaab un sab se milkar aata hai. Attention map ko kabhi is saboot ki tarah mat dikhaiye ki model ne yeh jawaab kyun diya.',
  'Idea 3: How a model is trained, and what inference means':
    'Idea 3: Model kaise train hota hai, aur inference ka matlab kya hai',
  'Now you know what a model reads. Where does its skill come from? A chat model like the ones you use is made in three stages, like a child going from reading, to following instructions, to learning manners.':
    'Ab aap jaante hain ki model kya padhta hai. Uski kaabiliyat kahan se aati hai? Jaisa chat model aap use karte hain, woh teen charanon mein banta hai, jaise bachcha padhna, phir baat maanna, phir tameez seekhta hai.',
  '<strong>Pre-training.</strong> The model learns to guess the next token from a vast amount of text from the web, books and code. This takes months and costs millions of dollars. The result is a <em>base model</em>. It can continue any text but does not reliably follow instructions.':
    '<strong>Pre-training.</strong> Model web, kitabon aur code ke bahut bade text se agla token guess karna seekhta hai. Isme mahine lagte hain aur karodon dollar kharch hote hain. Nateeja ek <em>base model</em> hai. Woh koi bhi text aage badha sakta hai par nirdesh bharosemand tareeke se nahi maanta.',
  '<strong>Instruction tuning.</strong> The model is trained more on examples of instructions paired with good answers. Now it follows instructions.':
    '<strong>Instruction tuning.</strong> Model ko nirdesh aur achhe jawaab ki jodiyon ke udaharanon par aur train kiya jata hai. Ab woh nirdesh maanta hai.',
  '<strong>Learning from human feedback.</strong> People look at pairs of answers and pick the better one. The model is trained to prefer answers like the ones people chose. This is often called <strong>RLHF</strong>, short for reinforcement learning from human feedback. It makes the model more helpful and more careful.':
    '<strong>Insaanon ki feedback se seekhna.</strong> Log jawaabon ki jodiyan dekhkar behtar wala chunte hain. Model ko un jawaabon ko pasand karna sikhaya jata hai jaise logon ne chune. Ise aksar <strong>RLHF</strong> kehte hain, yaani reinforcement learning from human feedback. Isse model zyaada madadgaar aur zyaada saavdhan banta hai.',
  'All three stages change the model’s <strong>weights</strong>. These are the billions of numbers inside the model that hold what it has learned, like the settings on a huge mixing board.':
    'Teeno charan model ke <strong>weights</strong> badalte hain. Yeh model ke andar ke arabon numbers hain jinmein jo usne seekha woh rehta hai, ek bade mixing board ki settings ki tarah.',
  '<strong>Inference</strong> is different. It means using the finished model to answer a request. Inference does not change the weights. When you use an AI API (sending a message to the model over the internet), you pay for inference, and the charge is by the token.':
    '<strong>Inference</strong> alag hai. Iska matlab hai taiyaar model se request ka jawaab lena. Inference weights nahi badalta. Jab aap AI API use karte hain (internet par model ko message bhejna), to aap inference ka paisa dete hain, aur kharch token ke hisaab se lagta hai.',
  'Training changes the model for good, for everyone. What you put in a prompt (the note you hand the model) shapes one answer and is then forgotten, like a goldfish.':
    'Training model ko hamesha ke liye badal deta hai, sabke liye. Prompt mein jo aap dalte hain (model ko di gayi parchi) woh ek jawaab ko dhaalta hai aur phir bhula diya jata hai, goldfish ki tarah.',
  'Open the <a href="#/playground">Playground</a> and tick <em>Keep the conversation</em>. Tell it a made-up fact, such as “My company’s refund window is 17 days.” Ask it about the refund window. Then press <em>Clear</em>, which starts a brand-new conversation, and ask again.':
    '<a href="#/playground">Playground</a> kholiye aur <em>Keep the conversation</em> par tick kijiye. Use ek banaya hua fact bataiye, jaise “My company’s refund window is 17 days.” Us se refund window ke baare mein poochiye. Phir <em>Clear</em> dabaiye, jo bilkul nayi baatcheet shuru karta hai, aur dobara poochiye.',
  'It remembers within the conversation, but not in the new one. The fact was context (what you put on its desk), not training. Chapter 1.5 shows why: the app sends the whole conversation again with every message.':
    'Woh baatcheet ke andar yaad rakhta hai, par nayi mein nahi. Woh fact context tha (jo aapne uski mez par rakha), training nahi. Chapter 1.5 batata hai kyun: app har message ke saath poori baatcheet dobara bhejta hai.',
  'Idea 4: Prompting, RAG or fine-tuning':
    'Idea 4: Prompting, RAG ya fine-tuning',
  'Sooner or later, a model will not do what you need. Then you have three main tools to try. The table compares them on the points a PM cares about.':
    'Der-saber, model woh nahi karega jo aapko chahiye. Tab aapke paas aazmane ke liye teen mukhya aujaar hain. Table unhe un baaton par milata hai jo ek PM ke liye zaroori hain.',
  'Prompting (writing better instructions)':
    'Prompting (behtar nirdesh likhna)',
  'What it is':
    'Yeh kya hai',
  'Put instructions and examples in the request':
    'Request mein nirdesh aur udaharan daaliye',
  'Find the right documents and add them to the request, like an open-book exam':
    'Sahi documents dhoondhiye aur request mein jodiye, open-book exam ki tarah',
  'Train the model more on your own examples, like coaching':
    'Model ko apne udaharanon par aur train kijiye, coaching ki tarah',
  'Up-to-date facts (the newest information)':
    'Taaza facts (sabse nayi jaankari)',
  'Yes, as fresh as your documents':
    'Haan, utne hi taaza jitne aapke documents',
  'No, fixed on the day of training':
    'Nahi, training ke din par tay ho jate hain',
  'Only what fits in the prompt':
    'Sirf wahi jo prompt mein aa sake',
  'Yes, from your own sources':
    'Haan, aapke apne sources se',
  'Baked in, so it is hard to remove later':
    'Andar pak jata hai, isliye baad mein hatana mushkil',
  'Style and format (how the answer sounds and looks)':
    'Style aur format (jawaab kaisa sunai aur dikhai deta hai)',
  'Not what it is for':
    'Iska kaam nahi hai',
  'Very good for steady behaviour':
    'Ek jaise vyavhaar ke liye bahut achha',
  'Cost to set up':
    'Shuru karne ka kharch',
  'Speed per request':
    'Har request ki raftaar',
  'Slower, because finding the documents adds a step':
    'Dheema, kyunki documents dhoondhna ek kadam badha deta hai',
  'How to check it':
    'Ise kaise check karein',
  'Test cases (questions with known answers)':
    'Test cases (jawaab pata wale sawaal)',
  'Check finding the documents and the answer quality separately':
    'Documents dhoondhna aur jawaab ki quality alag-alag check kijiye',
  'Test cases before and after training':
    'Training se pehle aur baad ke test cases',
  '<strong>RAG</strong> stands for retrieval-augmented generation. Think of an open-book exam: first find the right page, then answer from it. You will build a complete RAG system by hand in Chapters 3 to 7.':
    '<strong>RAG</strong> ka matlab hai retrieval-augmented generation. Open-book exam socho: pehle sahi page dhoondho, phir usse jawaab do. Aap Chapters 3 se 7 mein poora RAG system khud haath se banayenge.',
  'If the model is missing facts, give it the facts with RAG. Fine-tuning teaches habits, not facts.':
    'Agar model ke paas facts nahi hain, to RAG se use facts dijiye. Fine-tuning aadatein sikhata hai, facts nahi.',
  'So what should you try first? Start with prompting. Add RAG when the model needs facts it does not have. Think about fine-tuning only when you need very steady behaviour. Also think about it when you want a smaller, cheaper model to do one narrow job well. Chapter 19 covers this choice in depth.':
    'To pehle kya aazmana chahiye? Prompting se shuru kijiye. RAG tab jodiye jab model ko woh facts chahiye jo uske paas nahi hain. Fine-tuning ke baare mein tabhi sochiye jab aapko bahut ek jaisa vyavhaar chahiye. Tab bhi sochiye jab aap chahte hain ki chhota, sasta model ek sankri kaam achhe se kare. Chapter 19 is chunav ko gehrai se batata hai.',
  'For your capstone, fill in the decision table above with one row for each point, and circle the best choice for each.':
    'Apne capstone ke liye upar ki decision table bhariye, har baat ke liye ek row, aur har ek ke liye sabse achha vikalp gol ghere mein lijiye.',
  'You should have a filled table and a choice. For most capstones in this course the answer is prompting plus RAG. If you chose fine-tuning, name the exact behaviour that prompting could not give.':
    'Aapke paas bhari hui table aur ek choice hona chahiye. Is course ke zyaadatar capstones ke liye jawaab prompting aur RAG hai. Agar aapne fine-tuning chuna, to woh khaas vyavhaar batayiye jo prompting nahi de saka.',
  'Idea 5: The AI market in one picture':
    'Idea 5: AI bazaar ek tasveer mein',
  'The last step is to see where all this fits in the market. You met the AI value chain in A4: the machines underneath, the foundation models, the tools and the apps. At the model layer there are two kinds of provider. The table compares them.':
    'Aakhri kadam yeh dekhna hai ki yeh sab bazaar mein kahan baithta hai. A4 mein aap AI value chain se mile the: neeche ki machines, foundation models, aujaar aur apps. Model wali layer mein do tarah ke provider hain. Table unhe milata hai.',
  'Closed models (you cannot see inside)':
    'Closed models (andar nahi dekh sakte)',
  'Open-weight models (you can download them)':
    'Open-weight models (aap inhe download kar sakte hain)',
  'OpenAI GPT, Anthropic Claude, Google Gemini':
    'OpenAI GPT, Anthropic Claude, Google Gemini',
  'Meta Llama, Mistral, Qwen, DeepSeek':
    'Meta Llama, Mistral, Qwen, DeepSeek',
  'How you use them':
    'Aap inhe kaise use karte hain',
  'Through the provider’s API (you send messages over the internet)':
    'Provider ke API se (aap internet par message bhejte hain)',
  'Download and run them yourself, or use a company that runs them for you':
    'Khud download karke chalaiye, ya aisi company use kijiye jo aapke liye chalati hai',
  'Strengths (what they are good at)':
    'Taakat (inme kya achha hai)',
  'Usually the best quality; nothing for you to run':
    'Aam taur par sabse achhi quality; aapko kuch chalana nahi padta',
  'More control over data and cost; can be fine-tuned freely':
    'Data aur kharch par zyaada control; khulkar fine-tune ho sakte hain',
  'Trade-offs (what you give up)':
    'Samjhaute (aap kya chhodte hain)',
  'Your data leaves your systems; prices and models can change':
    'Aapka data aapke systems se bahar jata hai; keemat aur models badal sakte hain',
  'You pay for hosting (a computer to run it on) and you do the upkeep':
    'Aap hosting ka paisa dete hain (jis computer par yeh chale) aur dekhbhal khud karte hain',
  'Services such as <strong>OpenRouter</strong> let you call many models, closed and open, through one API. That makes it easy to compare them on your own test cases. That is the only comparison that counts.':
    '<strong>OpenRouter</strong> jaisi services aapko ek hi API se kai models bulane deti hain, closed aur open dono. Isse unhe apne test cases par milana aasaan ho jata hai. Wahi ek tulna hai jo ginti mein aati hai.',
  'Two trends shape AI product strategy. Model prices keep falling. Good models come from many providers. Both push the value up to the app layer, where the workflow, the data and trust decide who wins.':
    'Do ruzaan AI product strategy ko aakaar dete hain. Model ki keematein girti rehti hain. Achhe models kai providers se aate hain. Dono value ko app layer tak upar dhakelte hain, jahan workflow, data aur bharosa tay karte hain ki kaun jeetega.',
  'Run three of your capstone test cases through two different models, for example one closed and one open-weight model. The <a href="#/playground">Playground</a> does this side by side when you fill in <em>Compare with</em>. Write down which gave better answers, how long each took, and what each cost.':
    'Apne capstone ke teen test cases do alag models se chalaiye, jaise ek closed aur ek open-weight model. <em>Compare with</em> bharne par <a href="#/playground">Playground</a> yeh saath-saath karta hai. Likhiye ki kisne behtar jawaab diye, har ek ko kitna samay laga, aur har ek ka kharch kitna tha.',
  'Case, model A result, model B result, time, cost, verdict…':
    'Case, model A ka nateeja, model B ka nateeja, samay, kharch, faisla…',
  'A strong write-up is specific. For example: “Three ticket batches. Model A found the main theme in all three; model B missed the smallest theme twice. A took about 4 seconds per batch, B about 2. A cost about $0.012 per batch, B about $0.002.” Then the verdict: “For the weekly report, A is worth six times the cost, because a missed theme is the failure users fear most. For a real-time alert, speed matters more, so test B on the alert cases.” Three cases is enough to learn the method. The Build it task asks for ten.':
    'Mazboot write-up saaf hota hai. Jaise: “Teen ticket batches. Model A ne teeno mein mukhya theme dhoondha; model B ne sabse chhota theme do baar chhoda. A ko har batch mein lagbhag 4 second lage, B ko lagbhag 2. A ka kharch har batch lagbhag $0.012 tha, B ka lagbhag $0.002.” Phir faisla: “Weekly report ke liye A chhe guna kharch ke laayak hai, kyunki chhooti hui theme woh galti hai jisse users sabse zyaada darte hain. Real-time alert ke liye raftaar zyaada zaroori hai, isliye B ko alert cases par test kijiye.” Tareeka seekhne ke liye teen cases kaafi hain. Build it task das maangta hai.',
  'Let us pull the chapter together. Predictive AI gives a label or a number. Generative AI makes new content. An LLM reads tokens inside a context window (its desk). Attention is how it decides which tokens matter to each other.':
    'Chaliye chapter ko ek saath rakhte hain. Predictive AI label ya number deta hai. Generative AI naya content banata hai. LLM context window (apni mez) ke andar tokens padhta hai. Attention se woh tay karta hai ki kaun se tokens ek doosre ke liye zaroori hain.',
  'A model is trained in three stages, and training changes it for everyone. Inference only uses it, and a prompt shapes just one answer. When a model falls short, try prompting first. Then RAG for missing facts. Use fine-tuning only for habits.':
    'Model teen charanon mein train hota hai, aur training use sabke liye badal deta hai. Inference sirf use use karta hai, aur ek prompt sirf ek jawaab ko dhaalta hai. Jab model kam pade, to pehle prompting aazmaiye. Phir khoye facts ke liye RAG. Fine-tuning sirf aadaton ke liye.',
  'Next, you will leave the map and start the hands-on part. You will run your first small experiments in the browser, on tokens, cost and temperature (how adventurous the model is with its next word).':
    'Aage aap naksha chhodkar hands-on hisse mein jayenge. Aap browser mein apne pehle chhote experiments chalayenge, tokens, kharch aur temperature par (model apne agle shabd ke saath kitna jokhim leta hai).',
});

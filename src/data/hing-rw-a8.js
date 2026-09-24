/* Hinglish: a8 (coding-book rewrite and playbook tracks). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {

  'Generative AI foundations: how the models work':
    'Generative AI foundations: models kaise kaam karte hain',
  'Learn how large language models are made and how they produce text, at the level a PM needs to make decisions. You will look inside attention, compare prompting with RAG and fine-tuning, and test two models on the same ten cases.':
    'Seekhiye large language models kaise bante hain aur woh text kaise produce karte hain, us level par jo ek PM ko decisions lene ke liye chahiye. Aap attention ke andar dekhenge, prompting ko RAG aur fine-tuning se compare karenge, aur do models ko wahi das cases par test karenge.',
  'Explain the difference between predictive and generative AI, and when each fits.':
    'Predictive aur generative AI mein farq samjhaiye, aur kab kaunsa fit baithta hai.',
  'Describe tokens, context windows, transformers and attention in plain words.':
    'Tokens, context windows, transformers aur attention ko saadi bhasha mein describe kijiye.',
  'Explain the three stages of training a model, and how they differ from inference.':
    'Model train karne ke teen stages samjhaiye, aur woh inference se kaise alag hain.',
  'Choose between prompting, RAG and fine-tuning for a given problem.':
    'Kisi diye gaye problem ke liye prompting, RAG aur fine-tuning mein chuniye.',
  'Describe the AI market: model providers, open-weight models, infrastructure and applications.':
    'AI market describe kijiye: model providers, open-weight models, infrastructure aur applications.',
  'Three experiments on how models work':
    'Models kaise kaam karte hain iske teen experiments',
  'Three short experiments that turn the ideas in this chapter into evidence you have seen for yourself.':
    'Teen chhote experiments jo is chapter ke ideas ko aisi evidence mein badalte hain jo aapne khud dekhi hai.',
  'Use an attention visualiser (the notebook in Idea 2, or the Transformer Explainer website) to see which words influence a prediction. Write down what the demo shows and what it does not prove.':
    'Ek attention visualiser use kijiye (Idea 2 ki notebook, ya Transformer Explainer website) yeh dekhne ke liye kaunse shabd ek prediction ko influence karte hain. Likhiye demo kya dikhata hai aur kya saabit nahi karta.',
  'Build a decision table comparing prompt-only, RAG and fine-tuning across freshness, private data, style, cost, latency and evaluation. Fill it in for your capstone.':
    'Prompt-only, RAG aur fine-tuning ko freshness, private data, style, cost, latency aur evaluation par compare karta ek decision table banayiye. Apne capstone ke liye ise bhariye.',
  'Run the same ten test cases through two different model families using OpenRouter or Google AI Studio. Record quality, latency and cost for each.':
    'OpenRouter ya Google AI Studio use karke wahi das test cases do alag model families se chalayiye. Har ek ke liye quality, latency aur cost record kijiye.',
  'Your attention write-up says clearly what the visualisation does not show.':
    'Aapka attention write-up saaf saaf batata hai ki visualisation kya nahi dikhata.',
  'The decision table ends with a choice for your capstone and the reason for it.':
    'Decision table aapke capstone ke liye ek choice aur uske reason par khatam hoti hai.',
  'The model comparison uses the same ten cases for both models, and records all three measures.':
    'Model comparison dono models ke liye wahi das cases use karta hai, aur teeno measures record karta hai.',
  'Rubric: conceptual accuracy 40%, experiment quality 30%, decision clarity 30%.':
    'Rubric: conceptual accuracy 40%, experiment quality 30%, decision clarity 30%.',
  'A candidate problem with an AI fit':
    'Ek candidate problem jiska AI fit hai',
  'This chapter decides which AI technique suits it.':
    'Yeh chapter decide karta hai kaunsi AI technique isey suit karti hai.',
  'A build, buy or partner decision':
    'Ek build, buy ya partner decision',
  'This chapter explains what you are buying.':
    'Yeh chapter samjhata hai aap kya khareed rahe hain.',
  'About twelve hours. You need a free Google account for Colab and Google AI Studio, and optionally a free OpenRouter account. The technical core, from Chapter 1 onwards, builds on everything here with hands-on code, so treat this chapter as the map before the journey.':
    'Lagbhag baarah ghante. Aapko Colab aur Google AI Studio ke liye ek free Google account chahiye, aur optionally ek free OpenRouter account. Chapter 1 se aage ka technical core, yahan ki har cheez par hands-on code ke saath banta hai, isliye is chapter ko journey se pehle ka map maaniye.',
  'Idea 1: Predictive AI and generative AI':
    'Idea 1: Predictive AI aur generative AI',
  'Both kinds of AI learn patterns from data and make predictions. The difference is what they predict:':
    'Dono tarah ke AI data se patterns seekhte hain aur predictions karte hain. Farq yeh hai ki woh kya predict karte hain:',
  'Predictive AI':
    'Predictive AI',
  'Generative AI':
    'Generative AI',
  'Output':
    'Output',
  'A label or a number':
    'Ek label ya ek number',
  'New content: text, images, code or audio':
    'Naya content: text, images, code ya audio',
  'Spam or not spam; the chance a customer cancels; next month’s sales':
    'Spam ya nahi; customer cancel karega iska chance; agle mahine ki sales',
  'Drafting an email; summarising a call; answering a question':
    'Ek email draft karna; ek call summarise karna; ek sawaal ka jawab dena',
  'Training':
    'Training',
  'Labelled examples for one task':
    'Ek task ke liye labelled examples',
  'Huge amounts of general data, then adapted to follow instructions':
    'Bahut saara general data, phir instructions follow karne ke liye adapt kiya gaya',
  'Tasks per model':
    'Har model ke tasks',
  'Usually one':
    'Usually ek',
  'Many, chosen by the instructions you give':
    'Bahut saare, aapke diye instructions se chune gaye',
  'Typical cost per use':
    'Typical cost per use',
  'Very low':
    'Bahut kam',
  'Higher, and it grows with the length of input and output':
    'Zyada, aur input aur output ki length ke saath badhta hai',
  'A large language model, or <strong>LLM</strong>, is generative AI for text. It predicts the next piece of text, over and over, which lets it write whole answers.':
    'Ek large language model, ya <strong>LLM</strong>, text ke liye generative AI hai. Yeh baar-baar text ka agla tukda predict karta hai, jisse yeh poore jawab likh sakta hai.',
  'Not every AI problem needs generative AI. Predicting which customers will cancel is a predictive task, and a small classic model does it more cheaply and reliably. Chapter 2.4 shows how far a simple classifier can go.':
    'Har AI problem ko generative AI nahi chahiye. Kaunse customers cancel karenge yeh predict karna ek predictive task hai, aur ek chhota classic model isey sasta aur reliably kar sakta hai. Chapter 2.4 dikhata hai ek simple classifier kitna door ja sakta hai.',
  'List three AI features you have used recently. Label each as predictive or generative.':
    'Teen AI features list kijiye jo aapne recently use kiye. Har ek ko predictive ya generative label kijiye.',
  'Three labelled features. Recommendations, fraud alerts and spam filters are predictive. Chat assistants, image generators and meeting summaries are generative.':
    'Teen labelled features. Recommendations, fraud alerts aur spam filters predictive hain. Chat assistants, image generators aur meeting summaries generative hain.',
  'Idea 2: Tokens, context windows, transformers and attention':
    'Idea 2: Tokens, context windows, transformers aur attention',
  'An LLM does not read words. It reads <strong>tokens</strong>: pieces of text that are often a whole word and sometimes part of one. In English, one token is about three-quarters of a word on average.':
    'Ek LLM shabd nahi padhta. Yeh <strong>tokens</strong> padhta hai: text ke tukde jo aksar poora shabd hote hain aur kabhi-kabhi uska hissa. English mein, ek token average lagbhag ek shabd ka teen-chauthai hota hai.',
  'Each request has a limit on how many tokens it can include, counting both your input and the model’s answer. This limit is the <strong>context window</strong>. Everything the model uses to answer must fit inside it.':
    'Har request ki ek limit hoti hai kitne tokens shaamil kar sakti hai, aapka input aur model ka jawab dono ginte hue. Yeh limit <strong>context window</strong> hai. Model jawab dene ke liye jo bhi use karta hai woh isme fit hona chahiye.',
  'Modern LLMs use an architecture called the <strong>transformer</strong>. Its key part is <strong>attention</strong>: for each token, the model works out which other tokens in the context matter most for predicting what comes next.':
    'Modern LLMs ek architecture use karte hain jise <strong>transformer</strong> kehte hain. Iska key part <strong>attention</strong> hai: har token ke liye, model pata lagata hai context mein kaunse aur tokens agla kya aayega predict karne ke liye sabse zyada matter karte hain.',
  'Here is a classic example. In the sentence <em>“The trophy did not fit in the suitcase because it was too big”</em>, the word “it” means the trophy. Attention is how the model links “it” to “trophy” rather than to “suitcase”.':
    'Yahan ek classic example hai. Sentence <em>"The trophy did not fit in the suitcase because it was too big"</em> mein, "it" shabd ka matlab trophy hai. Attention wahi hai jisse model "it" ko "suitcase" ki jagah "trophy" se jodta hai.',
  'You can see attention for yourself. Open a new Colab notebook and run:':
    'Aap attention khud dekh sakte hain. Ek naya Colab notebook kholiye aur chalayiye:',
  'An interactive diagram with the sentence’s tokens on each side and lines between them. Click the token “it” and switch between layers. In some layers and heads, “it” links strongly to “trophy”.':
    'Ek interactive diagram jisme sentence ke tokens har taraf hain aur unke beech lines hain. "it" token par click kijiye aur layers ke beech switch kijiye. Kuchh layers aur heads mein, "it" "trophy" se strongly link karta hai.',
  'An error saying a module was not found':
    'Ek error jo kehta hai ek module nahi mila',
  'The install line did not run. Run the first cell again and wait for it to finish before running the rest.':
    'Install line nahi chali. Pehla cell dobara chalayiye aur baaki chalane se pehle iske khatam hone ka intezaar kijiye.',
  'The diagram does not appear':
    'Diagram nahi dikhta',
  'Some browsers block the interactive output. Try Chrome, or use the no-code option: the Transformer Explainer website (search for “Transformer Explainer Polo Club”), which shows attention in your browser without any setup.':
    'Kuchh browsers interactive output block karte hain. Chrome try kijiye, ya no-code option use kijiye: Transformer Explainer website ("Transformer Explainer Polo Club" search kijiye), jo bina kisi setup ke aapke browser mein attention dikhata hai.',
  'It runs, but “it” does not link to “trophy” in the layer you picked':
    'Yeh chalta hai, lekin aapne chuni layer mein "it" "trophy" se link nahi karta',
  'Expected. Different layers and heads learn different patterns. Click through several layers. Seeing that the pattern appears in only some places is part of the lesson.':
    'Expected hai. Alag-alag layers aur heads alag-alag patterns seekhte hain. Kai layers ke through click kijiye. Yeh dekhna ki pattern sirf kuchh jagahon par hi aata hai, lesson ka hissa hai.',
  'Attention is a clue, not an explanation. A model has many layers, each with many attention heads, and the final answer comes from all of them. Never present an attention map as proof of why a model gave an answer.':
    'Attention ek clue hai, explanation nahi. Ek model mein bahut si layers hoti hain, har ek mein bahut se attention heads, aur aakhri jawab in sab se aata hai. Ek attention map ko kabhi bhi is baat ka proof na banayiye ki model ne kyun woh jawab diya.',
  'Idea 3: How a model is trained, and what inference means':
    'Idea 3: Model kaise train hota hai, aur inference ka matlab kya hai',
  'A chat model like the ones you use is made in three stages:':
    'Aap jaise chat model use karte hain woh teen stages mein banta hai:',
  '<strong>Pre-training.</strong> The model learns to predict the next token on a vast amount of text from the web, books and code. This takes months and costs millions of dollars. The result is a <em>base model</em>, which can continue any text but does not reliably follow instructions.':
    '<strong>Pre-training.</strong> Model web, books aur code se text ki bahut badi maatra par agla token predict karna seekhta hai. Isme mahine lagte hain aur lakhon dollars ka kharcha aata hai. Result ek <em>base model</em> hai, jo koi bhi text continue kar sakta hai lekin reliably instructions follow nahi karta.',
  '<strong>Instruction tuning.</strong> The model is trained further on examples of instructions paired with good answers. Now it follows instructions.':
    '<strong>Instruction tuning.</strong> Model ko achhe jawabon ke saath paired instructions ke examples par aur train kiya jaata hai. Ab yeh instructions follow karta hai.',
  '<strong>Learning from human feedback.</strong> People compare pairs of answers and pick the better one. The model is trained to prefer answers like the ones people chose. This is often called <strong>RLHF</strong> (reinforcement learning from human feedback). It makes the model more helpful and more careful.':
    '<strong>Human feedback se seekhna.</strong> Log jawabon ke pairs compare karte hain aur behtar wala chunte hain. Model ko un jawabon ki tarah prefer karna sikhaya jaata hai jo log chunte hain. Isey aksar <strong>RLHF</strong> (reinforcement learning from human feedback) kaha jaata hai. Yeh model ko zyada helpful aur zyada careful banata hai.',
  'All three stages change the model’s <strong>weights</strong>: the billions of numbers inside it that encode what it has learned.':
    'Teeno stages model ke <strong>weights</strong> badalte hain: usme andar ke arabon numbers jo woh seekha hai usey encode karte hain.',
  '<strong>Inference</strong> is different. It means using the finished model to answer a request. Inference does not change the weights. When you use an AI API, you are paying for inference, charged by the token.':
    '<strong>Inference</strong> alag hai. Iska matlab hai finished model ko ek request ka jawab dene ke liye use karna. Inference weights nahi badalta. Jab aap ek AI API use karte hain, aap inference ke liye pay kar rahe hain, token ke hisaab se charge hoke.',
  'Training changes the model, permanently, for everyone. What you put in a prompt shapes one answer and is then forgotten.':
    'Training model ko badalti hai, permanently, sabke liye. Aap ek prompt mein jo daalte hain woh ek jawab ko shape karta hai aur phir bhula diya jaata hai.',
  'Open any chat assistant. Tell it a made-up fact, such as “My company’s refund window is 17 days.” Ask it about the refund window in the same conversation, then again in a brand-new conversation.':
    'Koi bhi chat assistant kholiye. Isey ek made-up fact bataiye, jaise "Meri company ki refund window 17 din hai." Usi conversation mein refund window ke baare mein poochiye, phir ek bilkul nayi conversation mein dobara.',
  'It remembers within the conversation and not in the new one. The fact was context, not training. Chapter 1.5 shows why: the app resends the conversation with every message.':
    'Yeh conversation ke andar yaad rakhta hai, naye mein nahi. Yeh fact context tha, training nahi. Chapter 1.5 dikhata hai kyun: app har message ke saath conversation dobara bhejta hai.',
  'Idea 4: Prompting, RAG or fine-tuning':
    'Idea 4: Prompting, RAG ya fine-tuning',
  'When a model does not do what you need, you have three main tools:':
    'Jab model woh nahi karta jo aapko chahiye, aapke paas teen main tools hain:',
  'Prompting':
    'Prompting',
  'RAG':
    'RAG',
  'Fine-tuning':
    'Fine-tuning',
  'What it is':
    'Yeh kya hai',
  'Instructions and examples in the request':
    'Request mein instructions aur examples',
  'Retrieve relevant documents and add them to the request':
    'Relevant documents retrieve karke request mein jodna',
  'Train the model further on your own examples':
    'Model ko apne examples par aur train karna',
  'Up-to-date facts':
    'Up-to-date facts',
  'No':
    'Nahi',
  'Yes, as fresh as your documents':
    'Haan, aapke documents jitne fresh',
  'No, fixed at training time':
    'Nahi, training time par fixed',
  'Only what fits in the prompt':
    'Jo bhi prompt mein fit ho',
  'Yes, from your own sources':
    'Haan, aapke apne sources se',
  'Baked in, which is hard to remove later':
    'Andar baked in, jo baad mein hataana mushkil hai',
  'Style and format':
    'Style aur format',
  'Good':
    'Achha',
  'Not its purpose':
    'Iska purpose nahi',
  'Very good for consistent behaviour':
    'Consistent behaviour ke liye bahut achha',
  'Cost to set up':
    'Set up karne ki cost',
  'Speed per request':
    'Har request ki speed',
  'Fast':
    'Fast',
  'Slower, because retrieval adds a step':
    'Dheema, kyunki retrieval ek step jodta hai',
  'How to evaluate':
    'Evaluate kaise karein',
  'Test cases':
    'Test cases',
  'Retrieval and answer quality separately':
    'Retrieval aur answer quality alag-alag',
  'Test cases before and after training':
    'Training se pehle aur baad ke test cases',
  '<strong>RAG</strong> stands for retrieval-augmented generation. You will build a complete RAG system by hand in Chapters 3 to 7.':
    '<strong>RAG</strong> ka matlab hai retrieval-augmented generation. Aap Chapters 3 se 7 mein haath se ek poora RAG system banayenge.',
  'If the model is missing facts, give it the facts with RAG. Fine-tuning teaches behaviour, not knowledge.':
    'Agar model mein facts missing hain, RAG se usey facts dijiye. Fine-tuning behaviour sikhata hai, knowledge nahi.',
  'Start with prompting. Add RAG when the model needs information it does not have. Consider fine-tuning only when you need very consistent behaviour, or want a smaller, cheaper model to do a narrow job well. Chapter 19 covers this decision in depth.':
    'Prompting se shuru kijiye. Jab model ko woh information chahiye jo uske paas nahi hai, RAG jodiye. Fine-tuning sirf tab consider kijiye jab aapko bahut consistent behaviour chahiye, ya ek chhota, sasta model kisi narrow job ko achhe se karta chahiye. Chapter 19 iss decision ko gehraai se cover karta hai.',
  'For your capstone, fill in the decision table above with one row per criterion, and circle the best choice for each.':
    'Apne capstone ke liye, upar ki decision table har criterion ke liye ek row ke saath bhariye, aur har ek ke liye best choice circle kijiye.',
  'A filled table and a choice. For most capstones in this book the answer is prompting plus RAG. If you chose fine-tuning, name the specific behaviour that prompting could not produce.':
    'Ek bhari hui table aur ek choice. Is kitaab ke zyadatar capstones ke liye jawab prompting plus RAG hai. Agar aapne fine-tuning chuna, to woh specific behaviour naam lijiye jo prompting produce nahi kar sakta tha.',
  'Idea 5: The AI market in one picture':
    'Idea 5: Ek picture mein AI market',
  'You met the AI value chain in A4: infrastructure, foundation models, tooling and applications. At the model layer, there are two kinds of provider:':
    'Aapne A4 mein AI value chain dekhi: infrastructure, foundation models, tooling aur applications. Model layer par, do tarah ke providers hain:',
  'Closed models':
    'Closed models',
  'Open-weight models':
    'Open-weight models',
  'OpenAI GPT, Anthropic Claude, Google Gemini':
    'OpenAI GPT, Anthropic Claude, Google Gemini',
  'Meta Llama, Mistral, Qwen, DeepSeek':
    'Meta Llama, Mistral, Qwen, DeepSeek',
  'How you use them':
    'Aap unhe kaise use karte hain',
  'Through the provider’s API':
    'Provider ke API se',
  'Download and run them yourself, or use a host':
    'Khud download aur run kijiye, ya ek host use kijiye',
  'Strengths':
    'Strengths',
  'Usually the highest quality; nothing to run':
    'Usually sabse highest quality; kuchh run karne ki zaroorat nahi',
  'More control over data and cost; can be fine-tuned freely':
    'Data aur cost par zyada control; freely fine-tune kiya ja sakta hai',
  'Trade-offs':
    'Trade-offs',
  'Data leaves your systems; prices and models can change':
    'Data aapke systems se bahar jaata hai; prices aur models badal sakte hain',
  'You pay for hosting and do the maintenance':
    'Aap hosting ke liye pay karte hain aur maintenance khud karte hain',
  'Services such as <strong>OpenRouter</strong> let you call many models, closed and open, through one API. That makes it easy to compare them on your own test cases, which is the only comparison that counts.':
    '<strong>OpenRouter</strong> jaisi services aapko ek API se bahut se models, closed aur open, call karne deti hain. Isse unhe apne test cases par compare karna aasaan ho jaata hai, jo ki ekmatra comparison hai jo matter karta hai.',
  'Two trends shape AI product strategy. Model prices keep falling, and good models become available from many providers. Both push value up to the application layer, where workflow, data and trust decide who wins.':
    'Do trends AI product strategy ko shape karte hain. Model prices girte rehte hain, aur achhe models bahut se providers se available hote jaate hain. Dono value ko application layer tak upar dhakelte hain, jahan workflow, data aur trust decide karte hain kaun jeetega.',
  'Run three of your capstone test cases through two different models (for example, one closed and one open-weight model on OpenRouter). Record which gave better answers, how long each took, and what each cost.':
    'Apne capstone ke teen test cases ko do alag models se chalayiye (jaise, OpenRouter par ek closed aur ek open-weight model). Record kijiye kisne behtar jawab diye, har ek ne kitna time liya, aur har ek ka kya cost aaya.',
  'Case, model A result, model B result, time, cost, verdict…':
    'Case, model A result, model B result, time, cost, verdict…',
  'A strong write-up is specific. For example: “Three ticket batches. Model A found the main theme in all three; model B missed the smallest theme twice. A took about 4 seconds per batch, B about 2. A cost about $0.012 per batch, B about $0.002.” Then the verdict: “For the weekly report, A is worth six times the cost, because a missed theme is the failure users fear most. For a real-time alert, speed matters more, so test B on the alert cases.” Three cases is enough to learn the method. The Build it task asks for ten.':
    'Ek strong write-up specific hota hai. Jaise: "Teen ticket batches. Model A ne teeno mein main theme dhoondha; model B do baar sabse chhota theme miss kiya. A ne har batch mein lagbhag 4 seconds liye, B ne lagbhag 2. A ka cost lagbhag $0.012 per batch tha, B ka lagbhag $0.002." Phir verdict: "Weekly report ke liye, A cost se chhe guna zyada worth hai, kyunki ek missed theme woh failure hai jisse users sabse zyada darte hain. Real-time alert ke liye, speed zyada matter karti hai, isliye alert cases par B test kijiye." Method seekhne ke liye teen cases kaafi hain. Build it task das maangta hai.'

});

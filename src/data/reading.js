/* Going deeper: the real world and the research, chapter by chapter.

   Every chapter ends with a short list in two halves. "In the real world" is a
   company, a court case or an incident where the chapter's idea decided what
   happened. "Research" is the paper the idea comes from, or the best study of
   it. Each item carries one line on why it is worth the time, in English and
   in Hinglish.

   The book shows the same lists at the end of each of its chapters (through
   the course chapters it retells), and the plan shows them for each week.

   Row: [kind, title, who and when, url, why, why in Hinglish]
     kind  'case' (in the real world) or 'paper' (research)
   Links are to the stable page: arXiv abstracts, DOIs, publishers' pages.
   tools/reading-check.mjs checks the shape and that every chapter has both. */
(function(){
const R = {};
const P = (title, who, url, why, hi) => ['paper', title, who, url, why, hi];
const C = (title, who, url, why, hi) => ['case', title, who, url, why, hi];

/* used by more than one chapter */
const ATTENTION = P('Attention Is All You Need', 'Vaswani et al., 2017', 'https://arxiv.org/abs/1706.03762',
  'The paper that introduced the transformer. Read the introduction and look at Figure 1; skip the maths.',
  'Woh paper jisne transformer introduce kiya. Introduction padhiye aur Figure 1 dekhiye; maths chhod dijiye.');
const GPT3 = P('Language Models are Few-Shot Learners (GPT-3)', 'Brown et al., 2020', 'https://arxiv.org/abs/2005.14165',
  'Showed that one large model can do many tasks from a few examples in the prompt, which is why prompting became a job.',
  'Dikhaya ki ek bada model prompt mein kuch examples dekh kar kai kaam kar sakta hai, isiliye prompting ek kaam ban gaya.');
const INSTRUCT = P('Training language models to follow instructions with human feedback', 'Ouyang et al., OpenAI, 2022', 'https://arxiv.org/abs/2203.02155',
  'How a raw text predictor became an assistant: instruction tuning and RLHF, with the evidence.',
  'Ek kachcha text predictor assistant kaise bana: instruction tuning aur RLHF, saboot ke saath.');
const LOST = P('Lost in the Middle: How Language Models Use Long Contexts', 'Liu et al., 2023', 'https://arxiv.org/abs/2307.03172',
  'Models use the start and end of a long prompt better than the middle. The chart on page 1 is the whole lesson.',
  'Models lambe prompt ki shuruaat aur aakhir ko beech se behtar use karte hain. Page 1 ka chart hi poora sabak hai.');
const ROT = C('Context Rot: how increasing input tokens impacts LLM performance', 'Chroma research, 2025', 'https://research.trychroma.com/context-rot',
  'Eighteen models, simple tasks, longer and longer inputs: every one got less reliable. A measured case for keeping context small.',
  'Atharah models, aasaan tasks, lambe se lambe inputs: har ek kam bharosemand hua. Context chhota rakhne ka naapa hua tark.');
const CTXENG = C('Effective context engineering for AI agents', 'Anthropic engineering, 2025', 'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',
  'How a team that builds agents decides what goes into the model’s view on each step, and what stays out.',
  'Agents banane wali ek team har step par kaise tay karti hai ki model ke saamne kya jaaye, aur kya bahar rahe.');
const RAG = P('Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks', 'Lewis et al., 2020', 'https://arxiv.org/abs/2005.11401',
  'The paper that named RAG: fetch passages first, then generate from them.',
  'Woh paper jisne RAG ko naam diya: pehle passages laao, phir unse jawaab banao.');
const CONTEXTUAL = C('Introducing Contextual Retrieval', 'Anthropic, 2024', 'https://www.anthropic.com/news/contextual-retrieval',
  'One sentence of context added to each chunk, plus keyword search and reranking, cut failed retrievals by up to two-thirds. Numbers included.',
  'Har chunk mein ek line context, saath mein keyword search aur reranking, se galat retrievals do-tihaai tak kam hue. Numbers ke saath.');
const LEGALRAG = C('Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools', 'Magesh et al., Stanford, 2024', 'https://arxiv.org/abs/2405.20362',
  'Commercial legal tools built on RAG still made things up 17–33% of the time. A real test of a vendor’s “no hallucinations” claim.',
  'RAG par bane commercial legal tools ne bhi 17–33% baar baatein banayin. Vendor ke “no hallucinations” daave ki asli jaanch.');
const AIRCANADA = C('Moffatt v. Air Canada, 2024 BCCRT 149', 'BC Civil Resolution Tribunal, 2024', 'https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html',
  'An airline’s chatbot invented a refund rule and the airline had to honour it. The company, not the chatbot, is responsible for what it says.',
  'Ek airline ke chatbot ne refund ka niyam khud bana diya aur airline ko use maanna pada. Chatbot jo kehta hai uski zimmedaari company ki hai.');
const AGENTS = C('Building effective agents', 'Anthropic engineering, 2024', 'https://www.anthropic.com/engineering/building-effective-agents',
  'Workflows first, agents only where the steps cannot be known in advance. The most useful page on the subject.',
  'Pehle workflows, agents sirf wahan jahan steps pehle se pata na hon. Is vishay par sabse kaam ka page.');
const REACT = P('ReAct: Synergizing Reasoning and Acting in Language Models', 'Yao et al., 2022', 'https://arxiv.org/abs/2210.03629',
  'The think–act–observe loop behind most agents today.',
  'Aaj ke zyadatar agents ke peeche ka socho–karo–dekho loop.');
const JUDGE = P('Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena', 'Zheng et al., 2023', 'https://arxiv.org/abs/2306.05685',
  'When a model grades another model it agrees with people about as often as people agree with each other, and it has biases you can measure.',
  'Jab ek model doosre ko grade karta hai toh woh logon se utna hi sehmat hota hai jitna log aapas mein, aur uske biases naape ja sakte hain.');
const VALIDATORS = P('Who Validates the Validators? Aligning LLM-Assisted Evaluation with Human Preferences', 'Shankar et al., 2024', 'https://arxiv.org/abs/2404.12272',
  'Your grading criteria change as you read outputs. Why a judge must be checked against your own marks.',
  'Outputs padhte-padhte aapke grading criteria badalte hain. Judge ko aapke apne marks se kyun jaanchna chahiye.');
const HAMEL = C('Your AI Product Needs Evals', 'Hamel Husain, 2024', 'https://hamel.dev/blog/posts/evals/',
  'How a real estate assistant (Rechat) got unstuck by building tests, reading traces and fixing the top failure first.',
  'Ek real estate assistant (Rechat) tests banakar, traces padh kar aur sabse badi failure pehle theek karke kaise aage badha.');
const YEAR = C('What We Learned from a Year of Building with LLMs', 'Yan, Bischof, Frye, Husain, Liu, Shankar, O’Reilly, 2024', 'https://www.oreilly.com/radar/what-we-learned-from-a-year-of-building-with-llms-part-i/',
  'Six practitioners on what actually worked in production: prompts, retrieval, evals, and when not to use a model.',
  'Chhah practitioners batate hain ki production mein asal mein kya chala: prompts, retrieval, evals, aur kab model use nahi karna.');
const GENAIWORK = P('Generative AI at Work', 'Brynjolfsson, Li and Raymond, NBER, 2023', 'https://www.nber.org/papers/w31161',
  'A support team of 5,000 agents with an AI assistant: 14% more issues resolved per hour, most of the gain going to newer agents.',
  '5,000 support agents ke saath ek AI assistant: har ghante 14% zyada issues hal, aur zyadatar fayda naye agents ko.');
const COPILOT = P('The Impact of AI on Developer Productivity: Evidence from GitHub Copilot', 'Peng et al., 2023', 'https://arxiv.org/abs/2302.06590',
  'A controlled experiment: developers with Copilot finished one task 56% faster. Read how the task was chosen.',
  'Ek controlled experiment: Copilot wale developers ne ek task 56% tez khatam kiya. Padhiye ki task kaise chuna gaya.');
const METR = P('Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity', 'Becker et al., METR, 2025', 'https://arxiv.org/abs/2507.09089',
  'Experienced developers expected AI to speed them up by 20%; measured, it slowed them by 19%. Why you measure instead of asking.',
  'Anubhavi developers ko laga AI unhe 20% tez karega; naapne par woh 19% dheeme hue. Poochne ki jagah naapna kyun zaroori hai.');
const MODELCARDS = P('Model Cards for Model Reporting', 'Mitchell et al., 2019', 'https://arxiv.org/abs/1810.03993',
  'The original proposal for the one-page document that says what a model is for, how it was tested and where it fails.',
  'Us ek page ke document ka asli prastaav jo batata hai ki model kis liye hai, kaise test hua aur kahan fail hota hai.');
const TECHDEBT = P('Hidden Technical Debt in Machine Learning Systems', 'Sculley et al., Google, NeurIPS 2015', 'https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems',
  'The model is the small box in the middle; the cost is everything around it. Still true with LLMs.',
  'Model beech ka chhota sa dabba hai; kharcha uske aas-paas ki har cheez ka hai. LLMs ke saath bhi sach.');
const AMERSHI = P('Guidelines for Human-AI Interaction', 'Amershi et al., Microsoft, CHI 2019', 'https://www.microsoft.com/en-us/research/publication/guidelines-for-human-ai-interaction/',
  'Eighteen tested guidelines, grouped by when they apply, including “when wrong”. A checklist for any AI screen.',
  'Atharah parkhe hue guidelines, is hisaab se ki kab lagte hain, “jab galat ho” samet. Kisi bhi AI screen ke liye checklist.');
const GREshake = P('Not what you’ve signed up for: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection', 'Greshake et al., 2023', 'https://arxiv.org/abs/2302.12173',
  'Instructions hidden in a web page or a document take over the assistant that reads it. The paper that named indirect injection.',
  'Web page ya document mein chhupi instructions use padhne wale assistant par kabza kar leti hain. Indirect injection ko naam dene wala paper.');
const TRIFECTA = C('The lethal trifecta for AI agents', 'Simon Willison, 2025', 'https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/',
  'Private data, untrusted content and a way to send data out: any agent with all three can be made to leak.',
  'Private data, bharose se bahar ka content aur data bahar bhejne ka raasta: teeno wala koi bhi agent leak karwaya ja sakta hai.');
const OWASP = C('OWASP Top 10 for LLM Applications', 'OWASP GenAI Security Project', 'https://genai.owasp.org/llm-top-10/',
  'The security community’s list of the ten commonest ways LLM products are attacked, with examples.',
  'Security community ki list: LLM products par hone wale das sabse aam hamle, examples ke saath.');
const NIST = C('AI Risk Management Framework', 'NIST, 2023', 'https://www.nist.gov/itl/ai-risk-management-framework',
  'The framework many companies and governments map their AI governance to: govern, map, measure, manage.',
  'Woh framework jis par kai companies aur sarkarein apni AI governance map karti hain: govern, map, measure, manage.');
const KLARNA = C('Klarna’s AI assistant handles two-thirds of customer service chats', 'OpenAI customer story, 2024', 'https://openai.com/customer-stories/klarna',
  'The best-known support deployment: 2.3 million chats in a month. Read it next to the later reports that Klarna hired people back.',
  'Sabse mashhoor support deployment: ek mahine mein 23 lakh chats. Ise un baad ki khabron ke saath padhiye ki Klarna ne log wapas rakhe.');
const MORGAN = C('Morgan Stanley wealth management deploys GPT-4', 'OpenAI customer story', 'https://openai.com/customer-stories/morgan-stanley',
  'Answers drawn only from the firm’s own research library, with evals written by its experts before launch.',
  'Jawaab sirf firm ki apni research library se, aur launch se pehle uske experts ke likhe evals.');
const EVALS_FIELD = C('A field guide to rapidly improving AI products', 'Hamel Husain, 2025', 'https://hamel.dev/blog/posts/field-guide/',
  'Look at your data, build a simple viewer, count failure types, then fix. The habits of teams that improve fastest.',
  'Apna data dekhiye, ek simple viewer banaiye, failure ki kismein giniye, phir theek kijiye. Sabse tez sudharne wali teams ki aadatein.');
const SEVENFAIL = P('Seven Failure Points When Engineering a Retrieval Augmented Generation System', 'Barnett et al., 2024', 'https://arxiv.org/abs/2401.05856',
  'Three real RAG systems, seven places they broke. A ready-made checklist for a review.',
  'Teen asli RAG systems, saat jagah jahan woh toote. Review ke liye taiyaar checklist.');
const FRUGAL = P('FrugalGPT: How to Use Large Language Models While Reducing Cost and Improving Performance', 'Chen, Zaharia and Zou, 2023', 'https://arxiv.org/abs/2305.05176',
  'A cascade of cheap-then-expensive models matched the best model’s quality at a fraction of the cost.',
  'Pehle saste phir mehnge models ki cascade ne sabse achhe model jitni quality bahut kam kharche mein di.');
const DELLACQUA = P('Navigating the Jagged Technological Frontier', 'Dell’Acqua et al., Harvard Business School and BCG, 2023', 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321',
  '758 consultants: AI made them faster and better on some tasks and worse on others. Design a pilot that can tell which.',
  '758 consultants: AI ne kuch tasks par unhe tez aur behtar banaya aur kuch par kharab. Aisa pilot banaiye jo farq bata sake.');
const HELM = P('Holistic Evaluation of Language Models (HELM)', 'Liang et al., Stanford, 2022', 'https://arxiv.org/abs/2211.09110',
  'Why one benchmark number is never enough: many scenarios, many metrics, side by side.',
  'Ek benchmark number kabhi kaafi kyun nahi: kai scenarios, kai metrics, saath-saath.');

/* ---------- Track A ---------- */
R.ch0 = [
  C('A Trainable Spaced Repetition Model for Language Learning', 'Settles and Meeder, Duolingo, ACL 2016', 'https://aclanthology.org/P16-1174/',
    'How Duolingo decides when to bring a word back to you, from its own learning data. The review queue in this course works on the same idea.',
    'Duolingo kaise tay karta hai ki koi word aapko kab wapas dikhaye, apne learning data se. Is course ki review queue isi idea par chalti hai.'),
  P('Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention', 'Roediger and Karpicke, Psychological Science, 2006', 'https://doi.org/10.1111/j.1467-9280.2006.01693.x',
    'Why this course keeps asking you questions: being tested beats rereading, a week later, by a wide margin.',
    'Yeh course aapse baar-baar sawaal kyun poochta hai: ek hafte baad, dobara padhne se test hona kaafi aage nikalta hai.'),
  P('Improving Students’ Learning With Effective Learning Techniques', 'Dunlosky et al., 2013', 'https://doi.org/10.1177/1529100612453266',
    'Ten study methods rated by the evidence. Practice testing and spacing win; highlighting loses.',
    'Das padhai ke tareeke, saboot ke hisaab se rate kiye hue. Practice testing aur spacing jeette hain; highlighting haarta hai.')
];
R.a1 = [
  C('Documenting Architecture Decisions', 'Michael Nygard, 2011', 'https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions',
    'The short post that started decision records in software teams: context, decision, consequences.',
    'Woh chhota post jisne software teams mein decision records shuru kiye: context, faisla, nateeje.'),
  P('The Role of Deliberate Practice in the Acquisition of Expert Performance', 'Ericsson, Krampe and Tesch-Römer, 1993', 'https://doi.org/10.1037/0033-295X.100.3.363',
    'Expertise comes from practice aimed at your weak spots, with feedback, not from hours alone.',
    'Maharat apni kamzoriyon par nishana lagane wale abhyaas aur feedback se aati hai, sirf ghanton se nahi.')
];
R.a2 = [
  P('Why Most Product Launches Fail', 'Schneider and Hall, Harvard Business Review, 2011', 'https://hbr.org/2011/04/why-most-product-launches-fail',
    'Five recurring reasons new products flop, from a study of launches across a decade. Most are risks you can test before building.',
    'Naye products ke girne ki paanch baar-baar aane wali wajah, das saal ke launches ke adhyayan se. Zyadatar risks banane se pehle parkhe ja sakte hain.'),
  C('The Four Big Risks', 'Marty Cagan, SVPG', 'https://www.svpg.com/four-big-risks/',
    'Value, usability, feasibility and viability, from the person who named them.',
    'Value, usability, feasibility aur viability, unhi ki zubaani jinhone inhe naam diya.'),
  C('Quibi', 'Wikipedia', 'https://en.wikipedia.org/wiki/Quibi',
    'A streaming app that raised $1.75 billion and shut down within seven months. A study in value risk nobody tested.',
    'Ek streaming app jisne 1.75 billion dollar jutaye aur saat mahine mein band ho gaya. Bina parkhe value risk ki misaal.')
];
R.a3 = [
  C('Know Your Customers’ “Jobs to Be Done”', 'Christensen, Hall, Dillon and Duncan, Harvard Business Review, 2016', 'https://hbr.org/2016/09/know-your-customers-jobs-to-be-done',
    'The milkshake story and the idea behind it: people hire a product to make progress in a situation.',
    'Milkshake ki kahani aur uske peeche ka idea: log kisi halaat mein aage badhne ke liye product ko “hire” karte hain.'),
  P('Why You Only Need to Test with 5 Users', 'Jakob Nielsen, Nielsen Norman Group, 2000', 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/',
    'Five users find most of a design’s usability problems. The curve, and when it does not apply.',
    'Paanch users design ki zyadatar usability dikkatein pakad lete hain. Woh curve, aur kab yeh laagu nahi hota.')
];
R.a4 = [
  P('Marketing Malpractice: The Cause and the Cure', 'Christensen, Cook and Hall, Harvard Business Review, 2005', 'https://hbr.org/2005/12/marketing-malpractice-the-cause-and-the-cure',
    'Define a market by the job customers need done, not by their demographics. Why most market sizes start from the wrong unit.',
    'Market ko demographics se nahi, us kaam se define kijiye jo customers karwana chahte hain. Zyadatar market sizes galat unit se kyun shuru hote hain.'),
  C('How to Miss By a Mile: An Alternative Look at Uber’s Potential Market Size', 'Bill Gurley, 2014', 'https://abovethecrowd.com/2014/07/11/how-to-miss-by-a-mile-an-alternative-look-at-ubers-potential-market-size/',
    'An investor and a professor sized the same market 25 times apart. Top-down versus bottom-up, argued in public.',
    'Ek investor aur ek professor ne ek hi market ko 25 guna farq se naapa. Top-down banaam bottom-up, khule mein bahas.'),
  C('Opportunity Solution Trees', 'Teresa Torres, Product Talk', 'https://www.producttalk.org/opportunity-solution-trees/',
    'The diagram from this chapter, explained by the person who made it popular.',
    'Is chapter wala diagram, use mashhoor karne wali ki zubaani.')
];
R.a5 = [
  C('RICE: Simple prioritization for product managers', 'Intercom', 'https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/',
    'Where the RICE score came from, and the team that used it.',
    'RICE score kahan se aaya, aur kis team ne use use kiya.'),
  P('What Is Strategy?', 'Michael Porter, Harvard Business Review, 1996', 'https://hbr.org/1996/11/what-is-strategy',
    'Strategy is choosing what not to do. The essay every strategy discussion still quotes.',
    'Strategy yeh chunna hai ki kya nahi karna. Woh essay jise har strategy ki baat mein aaj bhi quote kiya jaata hai.')
];
R.a6 = [
  C('Performing a Project Premortem', 'Gary Klein, Harvard Business Review, 2007', 'https://hbr.org/2007/09/performing-a-project-premortem',
    'Imagine the project failed and write down why. One page on the technique, from the psychologist who designed it.',
    'Maan lijiye project fail ho gaya aur likhiye kyun. Is technique par ek page, ise banane wale psychologist se.'),
  P('Categorizing Variants of Goodhart’s Law', 'Manheim and Garrabrant, 2018', 'https://arxiv.org/abs/1803.04585',
    'Four ways a target stops measuring what you wanted once people chase it. The reason guardrail metrics exist.',
    'Chaar tareeke jinse log jab target ke peeche bhaagte hain toh woh woh naapna band kar deta hai jo aap chahte the. Guardrail metrics isi wajah se hain.')
];
R.a7 = [
  C('Shape Up', 'Ryan Singer, Basecamp', 'https://basecamp.com/shapeup',
    'A free book on shaping work into a fixed time box before anyone builds it.',
    'Kisi ke banane se pehle kaam ko ek tay time box mein dhaalne par ek free kitaab.'),
  P('Why Johnny Can’t Prompt: How Non-AI Experts Try (and Fail) to Design LLM Prompts', 'Zamfirescu-Pereira et al., CHI 2023', 'https://doi.org/10.1145/3544548.3581388',
    'What happens when people who are not AI experts prototype with prompts: trial and error, and over-trust after one good answer.',
    'Jab AI ke expert na hone wale log prompts se prototype banate hain toh kya hota hai: try karke dekhna, aur ek achhe jawaab ke baad zyada bharosa.')
];
R.a8 = [
  ATTENTION,
  P('Transformer Explainer: Interactive Learning of Text-Generative Models', 'Cho et al., Georgia Tech, 2024', 'https://arxiv.org/abs/2408.04619',
    'The paper behind the viewer embedded in this chapter: what it shows and why it was built that way.',
    'Is chapter mein lage viewer ke peeche ka paper: woh kya dikhata hai aur aise kyun banaya gaya.'),
  INSTRUCT,
  C('The Illustrated Transformer', 'Jay Alammar', 'https://jalammar.github.io/illustrated-transformer/',
    'The diagrams most engineers learned the transformer from.',
    'Woh diagrams jinse zyadatar engineers ne transformer seekha.')
];

/* ---------- Part I ---------- */
R.ch05 = [
  C('Tokenizer', 'OpenAI', 'https://platform.openai.com/tokenizer',
    'A vendor’s own tool: paste text and see the tokens it bills you for. Try a Hindi sentence next to its English one.',
    'Ek vendor ka apna tool: text paste kijiye aur dekhiye ki woh kin tokens ka bill banata hai. Ek Hindi sentence uske English wale ke saath try kijiye.'),
  P('Neural Machine Translation of Rare Words with Subword Units', 'Sennrich, Haddow and Birch, 2015', 'https://arxiv.org/abs/1508.07909',
    'Byte-pair encoding, the way most models cut text into tokens.',
    'Byte-pair encoding, woh tareeka jisse zyadatar models text ko tokens mein kaat-te hain.'),
  P('Language Model Tokenizers Introduce Unfairness Between Languages', 'Petrov et al., 2023', 'https://arxiv.org/abs/2305.15425',
    'The same sentence costs several times more tokens in some languages, Indian languages among them. You measured this in Experiment 1.',
    'Wahi sentence kuch bhashaon mein kai guna zyada tokens leta hai, Bharatiya bhashayein bhi. Yeh aapne Experiment 1 mein naapa.'),
  P('The Curious Case of Neural Text Degeneration', 'Holtzman et al., 2019', 'https://arxiv.org/abs/1904.09751',
    'Why always picking the likeliest next word reads badly, and how sampling settings like temperature and top-p fix it.',
    'Hamesha sabse sambhavit agla word chunna bura kyun padhta hai, aur temperature aur top-p jaisi settings ise kaise theek karti hain.')
];
R.chpy = [
  C('Why Jupyter is data scientists’ computational notebook of choice', 'Jeffrey Perkel, Nature, 2018', 'https://www.nature.com/articles/d41586-018-07196-1',
    'How scientists work in notebooks like the one on these pages: short cells of code, run one at a time, with the result right under each.',
    'Scientists notebooks mein kaise kaam karte hain, bilkul in pages jaise: code ke chhote cells, ek-ek karke chalaaye hue, aur har ek ka result theek uske neeche.'),
  C('The OpenAI Python library', 'OpenAI, on GitHub', 'https://github.com/openai/openai-python',
    'The library behind the model call in Chapter 1. Its first example has the shape you learned to read: a client, a create call with named settings, and a dotted path to the answer.',
    'Chapter 1 ke model call ke peeche yahi library hai. Iska pehla example wahi shape rakhta hai jo aapne padhna seekha: ek client, named settings wala create call, aur dots se jawab tak ka raasta.'),
  P('Ten quick tips for teaching programming', 'Neil Brown and Greg Wilson, PLOS Computational Biology, 2018', 'https://doi.org/10.1371/journal.pcbi.1006023',
    'What research says about learning to code. Reading and tracing worked examples before writing your own is one of its tips, and this chapter is built on it.',
    'Code seekhne ke baare mein research kya kehti hai. Apna code likhne se pehle bane-banaaye examples padhna aur line-by-line follow karna iski ek tip hai, aur yeh chapter usi par bana hai.'),
];
R.ch1 = [
  C('Mata v. Avianca, Inc.', 'Wikipedia', 'https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc.',
    'Lawyers filed a brief with six court cases a chatbot had invented, and were fined. Fluent is not the same as true.',
    'Vakeelon ne ek brief mein chhah aise cases daale jo chatbot ne bana diye the, aur jurmana bhara. Fluent hona sach hona nahi.'),
  GPT3,
  P('On the Opportunities and Risks of Foundation Models', 'Bommasani et al., Stanford, 2021', 'https://arxiv.org/abs/2108.07258',
    'The long report that named “foundation models”. Read the introduction for the big picture.',
    'Woh lambi report jisne “foundation models” naam diya. Badi tasveer ke liye introduction padhiye.')
];
R.ch15b = [
  LOST,
  P('MemGPT: Towards LLMs as Operating Systems', 'Packer et al., 2023', 'https://arxiv.org/abs/2310.08560',
    'Memory as the application’s job: what to keep in the prompt, what to page out, what to fetch back.',
    'Yaaddasht application ka kaam hai: prompt mein kya rakhein, kya bahar karein, kya wapas laayein.'),
  ROT
];
R.ch2 = [
  AIRCANADA,
  P('Why Language Models Hallucinate', 'Kalai, Nachum, Vempala and Zhang, OpenAI, 2025', 'https://arxiv.org/abs/2509.04664',
    'Models guess because tests reward guessing over “I don’t know”. A clear account of why hallucination is normal behaviour.',
    'Models andaaza lagate hain kyunki tests “mujhe nahi pata” se zyada andaaze ko inaam dete hain. Hallucination aam vyavhaar kyun hai, saaf samjhaya.'),
  P('Survey of Hallucination in Natural Language Generation', 'Ji et al., 2022', 'https://arxiv.org/abs/2202.03629',
    'The kinds of made-up output, how they are measured, and what reduces them.',
    'Banaye hue output ki kismein, unhe kaise naapte hain, aur unhe kya kam karta hai.')
];
R.ch21 = [
  C('Prompt engineering overview', 'Anthropic, Claude docs', 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview',
    'How a model vendor tells its own customers to write prompts: clear instructions, examples, room to think, structure.',
    'Ek model vendor apne customers ko prompts likhna kaise sikhata hai: saaf instructions, examples, sochne ki jagah, structure.'),
  P('Chain-of-Thought Prompting Elicits Reasoning in Large Language Models', 'Wei et al., 2022', 'https://arxiv.org/abs/2201.11903',
    'Showing the steps in the examples made models better at multi-step problems. The origin of “think step by step”.',
    'Examples mein steps dikhane se models kai-step wale sawaalon mein behtar hue. “Step by step socho” ki shuruaat.'),
  P('The Prompt Report: A Systematic Survey of Prompting Techniques', 'Schulhoff et al., 2024', 'https://arxiv.org/abs/2406.06608',
    'Fifty-eight prompting techniques named and compared. Use it as a reference, not a read.',
    'Atthawan prompting techniques, naam aur tulna ke saath. Ise reference ki tarah use kijiye, poora padhne ke liye nahi.'),
  GPT3
];
R.ch22 = [
  P('Quantifying Language Models’ Sensitivity to Spurious Features in Prompt Design', 'Sclar et al., 2023', 'https://arxiv.org/abs/2310.11324',
    'Changing only spacing or punctuation moved accuracy by up to 76 points. Why one good run proves nothing.',
    'Sirf spacing ya punctuation badalne se accuracy 76 points tak hil gayi. Ek achha run kuch saabit kyun nahi karta.'),
  HAMEL,
  HELM
];
R.ch23 = [
  P('Finetuned Language Models Are Zero-Shot Learners (FLAN)', 'Wei et al., Google, 2021', 'https://arxiv.org/abs/2109.01652',
    'Training on many tasks written as instructions made models better at tasks they had never seen.',
    'Instructions ki tarah likhe kai tasks par training se models un tasks mein bhi behtar hue jo unhone kabhi dekhe nahi the.'),
  KLARNA
];
R.ch24 = [KLARNA,
  P('ChatGPT outperforms crowd workers for text-annotation tasks', 'Gilardi, Alizadeh and Kubli, PNAS, 2023', 'https://arxiv.org/abs/2303.15056',
    'A model labelled tweets more accurately than paid crowd workers, at a fraction of the cost. Read the limits too.',
    'Ek model ne tweets ko paid crowd workers se zyada sahi label kiya, bahut kam kharche mein. Seemayein bhi padhiye.'),
  GENAIWORK
];
R.ch25 = [
  P('Benchmarking Large Language Models for News Summarization', 'Zhang et al., 2023', 'https://arxiv.org/abs/2301.13848',
    'People rated model summaries as good as freelance writers’ ones, and the paper shows why the usual scores missed it.',
    'Logon ne model summaries ko freelance writers jitna achha maana, aur paper dikhata hai ki aam scores yeh kyun nahi pakad paaye.'),
  P('FActScore: Fine-grained Atomic Evaluation of Factual Precision in Long Form Text Generation', 'Min et al., 2023', 'https://arxiv.org/abs/2305.14251',
    'Break a summary into single facts and check each one: the method behind this chapter’s fact check.',
    'Summary ko ek-ek fact mein todiye aur har ek jaanchiye: is chapter ke fact check ke peeche ka tareeka.'),
  MORGAN
];
R.ch3 = [
  P('Dense X Retrieval: What Retrieval Granularity Should We Use?', 'Chen et al., 2023', 'https://arxiv.org/abs/2312.06648',
    'Cutting documents into single facts beat passages and sentences. The unit you cut at is a design decision.',
    'Documents ko ek-ek fact mein kaatna passages aur sentences se behtar raha. Kis unit par kaatein, yeh design ka faisla hai.'),
  CONTEXTUAL,
  RAG
];
R.ch4 = [CONTEXTUAL,
  P('The Probabilistic Relevance Framework: BM25 and Beyond', 'Robertson and Zaragoza, 2009', 'https://doi.org/10.1561/1500000019',
    'The keyword-ranking formula still inside most search engines, from the people who built it.',
    'Woh keyword-ranking formula jo aaj bhi zyadatar search engines ke andar hai, use banane walon se.'),
  P('BEIR: A Heterogeneous Benchmark for Zero-shot Evaluation of Information Retrieval Models', 'Thakur et al., 2021', 'https://arxiv.org/abs/2104.08663',
    'Across eighteen datasets, plain BM25 beat many neural retrievers on data they were not trained for.',
    'Atharah datasets mein, saada BM25 kai neural retrievers se aage raha, un par jin par woh train nahi hue the.')
];
R.ch5 = [
  C('Listing Embeddings in Search Ranking', 'Grbovic et al., Airbnb engineering, 2018', 'https://medium.com/airbnb-engineering/listing-embeddings-for-similar-listing-recommendations-and-real-time-personalization-in-search-601172f7603e',
    'Airbnb learned an embedding for each of 4.5 million listings from search sessions and used it for “similar listings” and ranking.',
    'Airbnb ne search sessions se 45 lakh listings mein se har ek ka embedding seekha aur use “similar listings” aur ranking mein lagaya.'),
  P('Efficient Estimation of Word Representations in Vector Space (word2vec)', 'Mikolov et al., 2013', 'https://arxiv.org/abs/1301.3781',
    'Where “king − man + woman ≈ queen” came from: words as points on a map of meaning.',
    '“king − man + woman ≈ queen” kahan se aaya: words ek meaning-map par points ki tarah.'),
  P('Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks', 'Reimers and Gurevych, 2019', 'https://arxiv.org/abs/1908.10084',
    'How whole sentences got useful embeddings, which made semantic search practical.',
    'Poore sentences ko kaam ke embeddings kaise mile, jisse semantic search kaam ka bana.'),
  P('MTEB: Massive Text Embedding Benchmark', 'Muennighoff et al., 2022', 'https://arxiv.org/abs/2210.07316',
    'The leaderboard embedding models are compared on. No single model wins every task.',
    'Woh leaderboard jis par embedding models ki tulna hoti hai. Koi ek model har task nahi jeetta.')
];
R.ch6 = [
  C('Evaluation in information retrieval', 'Manning, Raghavan and Schütze, Introduction to Information Retrieval, ch. 8', 'https://nlp.stanford.edu/IR-book/html/htmledition/evaluation-in-information-retrieval-1.html',
    'Precision, recall and ranked evaluation, explained in the standard textbook, free online.',
    'Precision, recall aur ranked evaluation, standard textbook mein samjhaye hue, online free.'),
  P('Cumulated gain-based evaluation of IR techniques', 'Järvelin and Kekäläinen, 2002', 'https://doi.org/10.1145/582415.582418',
    'The paper behind nDCG: a right answer at rank 1 is worth more than one at rank 9.',
    'nDCG ke peeche ka paper: rank 1 par sahi jawaab rank 9 wale se zyada keemti hai.')
];
R.ch7 = [RAG, LEGALRAG, MORGAN,
  P('Retrieval-Augmented Generation for Large Language Models: A Survey', 'Gao et al., 2023', 'https://arxiv.org/abs/2312.10997',
    'A map of RAG designs from naive to modular. Use the figures to place your own system.',
    'Naive se modular tak RAG designs ka naksha. Apne system ki jagah dhoondhne ke liye figures use kijiye.')];

/* ---------- Part II ---------- */
R.ch75 = [SEVENFAIL,
  P('RAGAS: Automated Evaluation of Retrieval Augmented Generation', 'Es et al., 2023', 'https://arxiv.org/abs/2309.15217',
    'Faithfulness, answer relevance and context relevance as separate scores. A vocabulary for what your system cannot do yet.',
    'Faithfulness, answer relevance aur context relevance alag-alag scores. Aapka system abhi kya nahi kar sakta, use kehne ki bhasha.'),
  LEGALRAG];
R.ch8 = [
  C('Introducing Structured Outputs in the API', 'OpenAI, 2024', 'https://openai.com/index/introducing-structured-outputs-in-the-api/',
    'A vendor’s own numbers: a complex JSON schema followed 100% of the time with constrained decoding, under 40% without.',
    'Ek vendor ke apne numbers: constrained decoding ke saath complex JSON schema 100% baar mana, uske bina 40% se kam.'),
  P('Efficient Guided Generation for Large Language Models', 'Willard and Louf, 2023', 'https://arxiv.org/abs/2307.09702',
    'How constrained decoding works: the schema decides which tokens are allowed next.',
    'Constrained decoding kaise kaam karta hai: schema tay karta hai ki agla kaun sa token allowed hai.')
];
R.ch85 = [
  P('Let Me Speak Freely? A Study on the Impact of Format Restrictions on Performance of Large Language Models', 'Tam et al., 2024', 'https://arxiv.org/abs/2408.02442',
    'Strict formats can lower reasoning accuracy; answering freely first and formatting second often helps. A reason schemas need room.',
    'Sakht formats reasoning accuracy gira sakte hain; pehle khul kar jawaab aur phir format aksar madad karta hai. Schemas ko jagah kyun chahiye.'),
  C('Understanding JSON Schema', 'json-schema.org', 'https://json-schema.org/understanding-json-schema',
    'The reference for required fields, enums and nullable types, the tools this chapter uses.',
    'Required fields, enums aur nullable types ka reference, woh tools jo yeh chapter use karta hai.')
];
R.ch9 = [AGENTS, REACT,
  P('Toolformer: Language Models Can Teach Themselves to Use Tools', 'Schick et al., Meta, 2023', 'https://arxiv.org/abs/2302.04761',
    'A model learning when a calculator or a search call would help, and calling it.',
    'Ek model seekhta hai ki kab calculator ya search call madad karegi, aur use call karta hai.')];
R.ch10 = [LOST,
  P('RULER: What’s the Real Context Size of Your Long-Context Language Models?', 'Hsieh et al., NVIDIA, 2024', 'https://arxiv.org/abs/2404.06654',
    'Most models fall well short of their advertised context length on tasks harder than finding one sentence.',
    'Ek sentence dhoondhne se mushkil tasks par zyadatar models apni bataayi context length se kaafi peeche reh jaate hain.'),
  ROT];
R.ch11 = [
  C('Learning to reason with LLMs', 'OpenAI, 2024', 'https://openai.com/index/learning-to-reason-with-llms/',
    'The launch of the first reasoning model, with the charts showing accuracy rising with thinking time.',
    'Pehle reasoning model ka launch, un charts ke saath jo dikhate hain ki sochne ke samay ke saath accuracy badhti hai.'),
  P('DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning', 'DeepSeek-AI, 2025', 'https://arxiv.org/abs/2501.12948',
    'An open model that learned to reason through reinforcement learning, with the method published.',
    'Ek open model jisne reinforcement learning se reason karna seekha, tareeka publish karke.'),
  P('Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters', 'Snell et al., 2024', 'https://arxiv.org/abs/2408.03314',
    'When it pays to let a smaller model think longer rather than buy a bigger one.',
    'Kab chhote model ko zyada der sochne dena bade model se sasta padta hai.')
];
R.ch115 = [
  C('Response Times: The 3 Important Limits', 'Jakob Nielsen, Nielsen Norman Group', 'https://www.nngroup.com/articles/response-times-3-important-limits/',
    '0.1 second, 1 second, 10 seconds: the waits people notice, and what to show during each.',
    '0.1 second, 1 second, 10 second: woh intezaar jo log mehsoos karte hain, aur har ek ke dauraan kya dikhana hai.'),
  P('Fast Inference from Transformers via Speculative Decoding', 'Leviathan, Kalman and Matias, Google, 2022', 'https://arxiv.org/abs/2211.17192',
    'A small model drafts, the big one checks: one of the ways providers make the same answer arrive sooner.',
    'Chhota model draft karta hai, bada jaanchta hai: providers ka wahi jawaab jaldi pahunchane ka ek tareeka.')
];
R.ch12 = [CONTEXTUAL,
  P('Reciprocal Rank Fusion outperforms Condorcet and individual Rank Learning Methods', 'Cormack, Clarke and Büttcher, SIGIR 2009', 'https://doi.org/10.1145/1571941.1572114',
    'Two pages that gave us the fusion formula you wrote in this chapter.',
    'Do pages jinse woh fusion formula mila jo aapne is chapter mein likha.'),
  P('Passage Re-ranking with BERT', 'Nogueira and Cho, 2019', 'https://arxiv.org/abs/1901.04085',
    'Reranking a short list with a stronger model: a large jump on a standard benchmark, from a simple idea.',
    'Ek chhoti list ko taakatwar model se dobara rank karna: ek seedhe idea se standard benchmark par badi chhalaang.')];
R.ch13 = [GREshake,
  C('Prompt injection attacks against GPT-3', 'Simon Willison, 2022', 'https://simonwillison.net/2022/Sep/12/prompt-injection/',
    'The post that named prompt injection, written days after the first public demonstrations.',
    'Woh post jisne prompt injection ko naam diya, pehle public demos ke kuch hi din baad likha gaya.'),
  TRIFECTA,
  P('Ignore Previous Prompt: Attack Techniques For Language Models', 'Perez and Ribeiro, 2022', 'https://arxiv.org/abs/2211.09527',
    'Goal hijacking and prompt leaking, measured on a production model.',
    'Goal hijacking aur prompt leaking, ek production model par naape hue.')];

/* ---------- Part III ---------- */
R.ch14 = [HAMEL, JUDGE,
  P('G-Eval: NLG Evaluation using GPT-4 with Better Human Alignment', 'Liu et al., 2023', 'https://arxiv.org/abs/2303.16634',
    'A judge that writes its steps before scoring agreed better with people. A template for rubric prompts.',
    'Score dene se pehle apne steps likhne wala judge logon se zyada sehmat raha. Rubric prompts ke liye ek template.'),
  P('Large Language Models are not Fair Evaluators', 'Wang et al., 2023', 'https://arxiv.org/abs/2305.17926',
    'Swap the order of two answers and the judge’s verdict often flips. Position bias, measured.',
    'Do jawaabon ka order badliye aur judge ka faisla aksar palat jaata hai. Position bias, naapa hua.'),
  VALIDATORS];
R.ch145 = [EVALS_FIELD,
  P('Errudite: Scalable, Reproducible, and Testable Error Analysis', 'Wu, Ribeiro, Heer and Weld, ACL 2019', 'https://aclanthology.org/P19-1073/',
    'Why reading twenty failures can mislead you, and how to define, count and test error groups instead.',
    'Bees failures padhna aapko kyun bhatka sakta hai, aur iski jagah error groups ko kaise define, ginein aur test karein.')];
R.ch15 = [FRUGAL,
  P('RouteLLM: Learning to Route LLMs with Preference Data', 'Ong et al., 2024', 'https://arxiv.org/abs/2406.18665',
    'A small router decides which questions need the expensive model. Halved costs in their tests.',
    'Ek chhota router tay karta hai ki kin sawaalon ko mehnga model chahiye. Unke tests mein kharcha aadha.'),
  C('The New Business of AI (and How It’s Different From Traditional Software)', 'Casado and Bornstein, a16z, 2020', 'https://a16z.com/the-new-business-of-ai-and-how-its-different-from-traditional-software/',
    'Why AI products have lower gross margins than classic software, and what that does to pricing.',
    'AI products ke gross margins classic software se kam kyun hote hain, aur iska pricing par kya asar padta hai.')];
R.ch16 = [
  C('Mistral OCR', 'Mistral AI, 2025', 'https://mistral.ai/news/mistral-ocr',
    'A vendor’s document-reading model with its own benchmark table. Read it as a claim to test on your own scans.',
    'Ek vendor ka document padhne wala model, apni benchmark table ke saath. Ise ek daave ki tarah padhiye jise apne scans par parkhna hai.'),
  P('LayoutLM: Pre-training of Text and Layout for Document Image Understanding', 'Xu et al., Microsoft, 2019', 'https://arxiv.org/abs/1912.13318',
    'Reading a form needs where the words are, not just which words. The model that showed it.',
    'Form padhne ke liye words kahan hain yeh bhi chahiye, sirf kaun se words nahi. Woh model jisne yeh dikhaya.'),
  P('OCR-free Document Understanding Transformer (Donut)', 'Kim et al., 2021', 'https://arxiv.org/abs/2111.15664',
    'Reading a document image straight into structured fields, without a separate OCR step.',
    'Document ki image seedhe structured fields mein padhna, alag OCR step ke bina.'),
  P('Nougat: Neural Optical Understanding for Academic Documents', 'Blecher et al., Meta, 2023', 'https://arxiv.org/abs/2308.13418',
    'Turning scanned PDFs, tables and formulas included, into text. Note where it still fails.',
    'Scanned PDFs ko, tables aur formulas samet, text mein badalna. Dhyaan dijiye ki yeh ab bhi kahan fail hota hai.')];
R.ch165 = [
  C('Samsung bans staff’s AI use after spotting ChatGPT data leak', 'The Register, 2023', 'https://www.theregister.com/2023/05/02/samsung_generative_ai_ban/',
    'Engineers pasted source code and meeting notes into a public chatbot. The data question this chapter asks, answered too late.',
    'Engineers ne source code aur meeting notes ek public chatbot mein paste kar diye. Is chapter ka data wala sawaal, bahut der se poocha gaya.'),
  P('Extracting Training Data from Large Language Models', 'Carlini et al., 2020', 'https://arxiv.org/abs/2012.07805',
    'A model can repeat rare text it was trained on, names and phone numbers included. Why training data is a privacy question.',
    'Model woh rare text dohra sakta hai jis par woh train hua, naam aur phone numbers samet. Training data privacy ka sawaal kyun hai.')];
R.ch17 = [MODELCARDS,
  P('Datasheets for Datasets', 'Gebru et al., 2018', 'https://arxiv.org/abs/1803.09010',
    'The questions to answer about any dataset: why it was made, what is in it, what it should not be used for.',
    'Kisi bhi dataset ke baare mein jawaab dene wale sawaal: kyun bana, usme kya hai, kis kaam mein use nahi karna.'),
  NIST,
  C('EU Artificial Intelligence Act: explorer', 'Future of Life Institute', 'https://artificialintelligenceact.eu/',
    'Risk tiers in law: search the Act by article and see which tier a feature would fall in.',
    'Kaanoon mein risk tiers: Act ko article se search kijiye aur dekhiye ki koi feature kis tier mein aayega.')];
R.ch18 = [
  C('Rules of Machine Learning', 'Martin Zinkevich, Google', 'https://developers.google.com/machine-learning/guides/rules-of-ml',
    'Forty-three rules from Google’s production ML, starting with “don’t be afraid to launch a product without machine learning”.',
    'Google ki production ML se taintaalis niyam, shuruaat “bina machine learning ke product launch karne se mat dariye” se.'),
  TECHDEBT];

/* ---------- Part IV ---------- */
R.ch185 = [
  P('BloombergGPT: A Large Language Model for Finance', 'Wu et al., Bloomberg, 2023', 'https://arxiv.org/abs/2303.17564',
    'A firm built its own finance model at great cost; general models soon matched it. Read it as a build-or-buy case.',
    'Ek firm ne bahut kharche se apna finance model banaya; general models ne jaldi hi barabari kar li. Ise build-or-buy case ki tarah padhiye.'),
  YEAR];
R.ch19 = [YEAR,
  P('Fine-Tuning or Retrieval? Comparing Knowledge Injection in LLMs', 'Ovadia et al., Microsoft, 2023', 'https://arxiv.org/abs/2312.05934',
    'To add facts, retrieval beat fine-tuning consistently. Fine-tune for behaviour and format, not knowledge.',
    'Facts jodne ke liye retrieval ne fine-tuning ko lagataar haraaya. Fine-tune vyavhaar aur format ke liye kijiye, gyaan ke liye nahi.'),
  P('Does Fine-Tuning LLMs on New Knowledge Encourage Hallucinations?', 'Gekhman et al., Google, 2024', 'https://arxiv.org/abs/2405.05904',
    'Teaching a model new facts by fine-tuning made it more likely to invent things.',
    'Fine-tuning se model ko naye facts sikhane se uske baatein banane ki sambhavna badh gayi.'),
  P('LoRA: Low-Rank Adaptation of Large Language Models', 'Hu et al., Microsoft, 2021', 'https://arxiv.org/abs/2106.09685',
    'Why fine-tuning became cheap: train a small add-on instead of the whole model.',
    'Fine-tuning sasti kyun hui: poore model ki jagah ek chhota add-on train kijiye.')];
R.ch20 = [AMERSHI,
  P('Language Models (Mostly) Know What They Know', 'Kadavath et al., Anthropic, 2022', 'https://arxiv.org/abs/2207.05221',
    'Models can estimate their own chance of being right, which is what a confidence display needs.',
    'Models apne sahi hone ki sambhavna ka andaaza laga sakte hain, aur confidence dikhane ke liye yahi chahiye.'),
  AIRCANADA];
R.ch205 = [KLARNA, GENAIWORK, DELLACQUA, METR];

/* ---------- Part V ---------- */
R.ch8f = [
  C('An overview of HTTP', 'MDN Web Docs', 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview',
    'Requests, responses, status codes and headers, the vocabulary of every API call you make.',
    'Requests, responses, status codes aur headers, aapki har API call ki bhasha.'),
  C('Pro Git', 'Chacon and Straub', 'https://git-scm.com/book/en/v2',
    'The free book on Git. Chapters 1–3 are all this course needs.',
    'Git par free kitaab. Is course ko sirf chapters 1–3 chahiye.'),
  P('Best Practices for Scientific Computing', 'Wilson et al., PLOS Biology, 2014', 'https://doi.org/10.1371/journal.pbio.1001745',
    'Version control, small steps, tests, automation: habits for people who write code to run experiments.',
    'Version control, chhote steps, tests, automation: experiments ke liye code likhne walon ki aadatein.')];
R.ch9m = [
  C('LMArena leaderboard', 'LMArena', 'https://lmarena.ai/',
    'The public leaderboard built from people’s votes between two anonymous answers. Look, then read the paper below on its limits.',
    'Do anonymous jawaabon ke beech logon ke votes se bana public leaderboard. Dekhiye, phir neeche wala paper padhiye ki iski seemayein kya hain.'),
  P('Chatbot Arena: An Open Platform for Evaluating LLMs by Human Preference', 'Chiang et al., 2024', 'https://arxiv.org/abs/2403.04132',
    'How the most-quoted leaderboard ranks models from people’s votes.',
    'Sabse zyada quote hone wala leaderboard logon ke votes se models ko kaise rank karta hai.'),
  P('The Leaderboard Illusion', 'Singh et al., 2025', 'https://arxiv.org/abs/2504.20879',
    'How private testing and data access skew that leaderboard. Why your own cases decide.',
    'Private testing aur data access us leaderboard ko kaise jhuka dete hain. Faisla aapke apne cases kyun karte hain.'),
  HELM];
R.ch10c = [CTXENG, ROT, LOST];
R.ch11r = [
  P('Retrieval-Augmented Generation with Knowledge Graphs for Customer Service Question Answering', 'Xu et al., LinkedIn, SIGIR 2024', 'https://arxiv.org/abs/2404.17723',
    'A production RAG system over support tickets that cut median resolution time by 28.6%.',
    'Support tickets par ek production RAG system jisne median resolution time 28.6% kam kiya.'),
  SEVENFAIL, CONTEXTUAL];
R.ch12t = [AGENTS,
  P('τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains', 'Yao et al., Sierra, 2024', 'https://arxiv.org/abs/2406.12045',
    'Agents following an airline’s and a shop’s real policies over many turns, and how often they slip.',
    'Agents kai turns tak ek airline aur ek dukaan ki asli policies follow karte hain, aur kitni baar chookte hain.'),
  C('Berkeley Function Calling Leaderboard', 'Gorilla project, UC Berkeley', 'https://gorilla.cs.berkeley.edu/leaderboard.html',
    'Which models call functions correctly, with the test categories explained.',
    'Kaun se models functions sahi call karte hain, test categories ke saath.')];
R.ch13a = [REACT,
  C('How we built our multi-agent research system', 'Anthropic engineering, 2025', 'https://www.anthropic.com/engineering/multi-agent-research-system',
    'A lead agent and parallel helpers, about fifteen times the tokens of a chat, and what it took to make it reliable.',
    'Ek lead agent aur parallel helpers, chat se lagbhag pandrah guna tokens, aur use bharosemand banane mein kya laga.'),
  P('SWE-bench: Can Language Models Resolve Real-World GitHub Issues?', 'Jimenez et al., 2023', 'https://arxiv.org/abs/2310.06770',
    'Real bugs from real repositories as an agent test. The benchmark coding agents are judged on.',
    'Asli repositories ke asli bugs, agent test ki tarah. Woh benchmark jis par coding agents ko parkha jaata hai.')];
R.ch14p = [
  C('Introducing the Model Context Protocol', 'Anthropic, 2024', 'https://www.anthropic.com/news/model-context-protocol',
    'The announcement of the standard plug between models and tools, and the problem it set out to solve.',
    'Models aur tools ke beech standard plug ka announcement, aur woh problem jise yeh hal karna chahta tha.'),
  C('GitHub’s official MCP server', 'GitHub', 'https://github.com/github/github-mcp-server',
    'A real MCP server from a large company: read its tool list to see what a good tool description looks like.',
    'Ek badi company ka asli MCP server: achhi tool description kaisi dikhti hai, yeh dekhne ke liye uski tool list padhiye.'),
  P('Model Context Protocol (MCP): Landscape, Security Threats, and Future Research Directions', 'Hou et al., 2025', 'https://arxiv.org/abs/2503.23278',
    'The life cycle of an MCP server and the attacks at each stage.',
    'MCP server ka life cycle aur har stage par hone wale hamle.')];
R.ch15mm = [
  P('Learning Transferable Visual Models From Natural Language Supervision (CLIP)', 'Radford et al., OpenAI, 2021', 'https://arxiv.org/abs/2103.00020',
    'Images and text on one map of meaning, the idea under most multimodal search.',
    'Images aur text ek hi meaning-map par, zyadatar multimodal search ke neeche ka idea.'),
  P('Robust Speech Recognition via Large-Scale Weak Supervision (Whisper)', 'Radford et al., OpenAI, 2022', 'https://arxiv.org/abs/2212.04356',
    'Speech-to-text trained on 680,000 hours across languages. Check the per-language error rates for Hindi.',
    '680,000 ghanton par train hua speech-to-text, kai bhashaon mein. Hindi ke error rates zaroor dekhiye.'),
  C('BHASHINI', 'Government of India', 'https://bhashini.gov.in',
    'India’s public platform for translation and speech in Indian languages, with APIs you can call.',
    'Bharatiya bhashaon mein translation aur speech ke liye Bharat ka public platform, call kiye ja sakne wale APIs ke saath.')];
R.ch16e = [
  P('Beyond Accuracy: Behavioral Testing of NLP Models with CheckList', 'Ribeiro et al., ACL 2020', 'https://arxiv.org/abs/2005.04118',
    'Unit tests for language: minimum functionality, invariance and direction tests. Models that scored well failed many.',
    'Language ke liye unit tests: minimum functionality, invariance aur direction tests. Achhe score wale models kai mein fail hue.'),
  HAMEL, VALIDATORS];
R.ch17o = [
  C('Semantic conventions for generative AI', 'OpenTelemetry', 'https://opentelemetry.io/docs/specs/semconv/gen-ai/',
    'The emerging standard for what a trace of a model call records: model, tokens, latency, tool calls.',
    'Model call ke trace mein kya record ho, uska ubharta standard: model, tokens, latency, tool calls.'),
  TECHDEBT, EVALS_FIELD];
R.ch18s = [OWASP, TRIFECTA,
  P('Design Patterns for Securing LLM Agents against Prompt Injections', 'Beurer-Kellner et al., 2025', 'https://arxiv.org/abs/2506.08837',
    'Six patterns that limit what untrusted text can trigger. The practical answer to “can we just filter it?”.',
    'Chhah patterns jo bharose se bahar ke text ki pahunch seemit karte hain. “Kya hum bas filter kar dein?” ka vyavhaarik jawaab.'),
  P('Universal and Transferable Adversarial Attacks on Aligned Language Models', 'Zou et al., 2023', 'https://arxiv.org/abs/2307.15043',
    'Automatically found strings that break safety training across models. Why a model alone is not a control.',
    'Apne aap dhoondhe gaye strings jo kai models ki safety training tod dete hain. Akela model control kyun nahi hai.')];
R.ch19pm = [YEAR, AMERSHI,
  C('People + AI Guidebook', 'Google PAIR', 'https://pair.withgoogle.com/guidebook-v2/',
    'Patterns for user needs, data, feedback and errors in AI products, with worked examples.',
    'AI products mein user needs, data, feedback aur errors ke patterns, kiye hue examples ke saath.')];
R.ch20d = [
  C('Emerging Architectures for LLM Applications', 'Bornstein and Radovanovic, a16z, 2023', 'https://a16z.com/emerging-architectures-for-llm-applications/',
    'The reference stack as companies were actually building it: data, prompts, orchestration, hosting.',
    'Woh reference stack jaisa companies asal mein bana rahi thin: data, prompts, orchestration, hosting.'),
  C('Building a generative AI platform', 'Chip Huyen, 2024', 'https://huyenchip.com/2024/07/25/genai-platform.html',
    'One diagram grown step by step, from a single model call to a full platform with guardrails, caching and routing.',
    'Ek diagram jo step by step badhta hai, ek model call se guardrails, caching aur routing wale poore platform tak.'),
  TECHDEBT];
R.ch21cap = [YEAR, EVALS_FIELD, LEGALRAG, SEVENFAIL];

/* ---------- Track B ---------- */
R.b1 = [FRUGAL,
  C('The New Business of AI (and How It’s Different From Traditional Software)', 'Casado and Bornstein, a16z, 2020', 'https://a16z.com/the-new-business-of-ai-and-how-its-different-from-traditional-software/',
    'Gross margins, scaling and moats for AI companies, from investors who looked at the numbers.',
    'AI companies ke gross margins, scaling aur moats, un investors se jinhone numbers dekhe.'),
  C('Fin pricing: $0.99 per resolution', 'Intercom', 'https://www.intercom.com/pricing',
    'Outcome pricing in practice: a support agent billed per resolved conversation rather than per seat.',
    'Vyavhaar mein outcome pricing: support agent ka bill har seat ki jagah har hal hui conversation par.')];
R.b2 = [
  P('Platform Competition in Two-Sided Markets', 'Rochet and Tirole, Journal of the European Economic Association, 2003', 'https://doi.org/10.1162/154247603322493212',
    'The economics of products that serve two groups at once, and why one side is often subsidised. The basis of network-effect thinking.',
    'Aise products ki economics jo ek saath do groups ko serve karte hain, aur ek side ko aksar subsidy kyun milti hai. Network effects ki soch ki buniyaad.'),
  C('How Duolingo reignited user growth', 'Jorge Mazal, Lenny’s Newsletter, 2023', 'https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth',
    'Streaks, leaderboards and notifications, each tested, behind a 4.5× rise in daily users.',
    'Streaks, leaderboards aur notifications, har ek test kiya hua, daily users mein 4.5 guna badhat ke peeche.'),
  KLARNA];
R.b3 = [
  C('The Surprising Power of Online Experiments', 'Kohavi and Thomke, Harvard Business Review, 2017', 'https://hbr.org/2017/09/the-surprising-power-of-online-experiments',
    'Why companies running thousands of A/B tests a year find most ideas do not work, and what they do about it.',
    'Saal mein hazaaron A/B tests chalane wali companies ko zyadatar ideas kaam karte kyun nahi milte, aur woh kya karti hain.'),
  P('Controlled experiments on the web: survey and practical guide', 'Kohavi et al., 2009', 'https://doi.org/10.1007/s10618-008-0114-1',
    'Sample sizes, pitfalls and the overall evaluation criterion, from the team that ran experiments at Microsoft.',
    'Sample size, galtiyan aur overall evaluation criterion, us team se jo Microsoft mein experiments chalati thi.')];
R.b4 = [
  C('Stack Overflow Developer Survey 2025: AI', 'Stack Overflow', 'https://survey.stackoverflow.co/2025/ai',
    'Tens of thousands of developers on which AI tools they use, and how far they trust them. More distrust than trust.',
    'Hazaaron developers batate hain ki woh kaun se AI tools use karte hain, aur un par kitna bharosa karte hain. Bharose se zyada shak.'),COPILOT, METR,
  P('Generative AI at Work', 'Brynjolfsson, Li and Raymond, NBER, 2023', 'https://www.nber.org/papers/w31161',
    'Evidence before you choose a tool: who it helped, by how much, and how it was measured.',
    'Tool chunne se pehle saboot: kiski madad hui, kitni, aur kaise naapa gaya.')];
R.b5 = [AGENTS,
  P('SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering', 'Yang et al., Princeton, 2024', 'https://arxiv.org/abs/2405.15793',
    'Same model, better tools and screens around it, far more bugs fixed. The harness is the product.',
    'Wahi model, uske aas-paas behtar tools aur screens, kahin zyada bugs theek. Harness hi product hai.'),
  CTXENG];
R.b6 = [KLARNA, AIRCANADA, GENAIWORK];
R.b7 = [DELLACQUA,
  C('State of the product job market', 'Lenny’s Newsletter', 'https://www.lennysnewsletter.com/p/state-of-the-product-job-market-in-ee9',
    'Open PM roles, AI PM roles and what hiring managers ask for, with charts.',
    'Khuli PM roles, AI PM roles aur hiring managers kya maangte hain, charts ke saath.'),
  YEAR];
R.b8 = [YEAR, HELM];

window.READING = R;
})();

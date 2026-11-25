/* Hinglish for Schema design: fields that do not force a guess (chapter:ch85), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'A schema (a form with fixed boxes) fixes the shape of a reply. It does not fix what goes inside. A badly made box can push the model to make something up. Here you cause a hallucination (a confident made-up answer) with one schema choice. Then you remove it with three ways of designing boxes.':
    'Schema (fixed khaanon wala form) reply ki shape tay karta hai. Andar kya jaata hai, yeh tay nahi karta. Ek kharab banaya khaana model ko kuchh banane par dhakel sakta hai. Yahan aap schema ki ek choice se hallucination (pakke yakeen se boli gayi banawati baat) karwate hain. Phir khaane banane ke teen tareeke se use hataate hain.',
  'Make boxes where “not stated” is an allowed answer, so the model never has to fill a gap with a guess.':
    'Aise khaane banaiye jahan “likha nahi hai” ek sahi jawaab ho, taaki model ko khaali jagah guess se na bharni pade.',
  'Cause a hallucination with one schema choice. Then remove it.':
    'Schema ki ek choice se hallucination karwaiye. Phir use hataiye.',
  'Say what your schema still cannot catch, and what would catch it.':
    'Bataiye ki aapka schema ab bhi kya nahi pakad sakta, aur use kya pakdega.',
  'Build an extractor that says “not sure” instead of guessing':
    'Aisa extractor banao jo guess ki jagah “pakka nahi” kahe',
  'A box that must always be filled pushes the model to make something up. Last chapter you made the answer shape safe. This chapter you learned to design boxes where “not stated” is a fine answer. Now improve your finding form, so the tool never has to invent a detail. Then test it on sentences where the detail is simply not there.':
    'Jo khaana hamesha bharna zaroori ho, woh model ko kuchh bana dene par dhakelta hai. Pichhle chapter mein aapne jawaab ki shape surakshit ki. Is chapter mein aapne aise khaane banana seekha jahan “likha nahi hai” theek jawaab hai. Ab apna finding form sudhariye, taaki tool ko kabhi koi detail gadhni na pade. Phir use aise sentences par test kijiye jahan woh detail hai hi nahi.',
  'Keep using the same notebook (the page where you run code). Build the extractor again and run it there. Write what your schema still cannot catch in the notes box below. Short version for the route, about 20 minutes: steps 1, 3 and 4.':
    'Wahi notebook (jis page par code chalta hai) use karte rahiye. Extractor wahin dobara banaiye aur chalaiye. Aapka schema ab bhi kya nahi pakadta, yeh neeche notes box mein likhiye. Route ke liye chhota version, lagbhag 20 minute: steps 1, 3 aur 4.',
  'Give your finding form a place for doubt. Add a box called needs_review that can be true. Let the kind be “unknown” when the tool cannot decide.':
    'Apne finding form mein shak ke liye jagah dijiye. needs_review naam ka ek khaana jodiye jo true ho sake. Jab tool tay na kar paye, to kind “unknown” ho sakta hai.',
  'Add a box called quote. The model must copy into it the exact words of the sentence that the finding came from. Check ten findings by hand. Does each quote really appear in the sentence?':
    'quote naam ka ek khaana jodiye. Model ko usmein sentence ke woh exact shabd copy karne hain jahan se finding aayi. Das findings haath se check kijiye. Kya har quote sach mein sentence mein hai?',
  'Prepare twenty sentences. Include three with nothing personal in them (like starter sentence 9). Include three with something that only looks like an ID, such as a twelve-digit order number.':
    'Bees sentences taiyaar kijiye. Teen aise rakhiye jinmein kuchh bhi niji nahi hai (jaise starter sentence 9). Teen aise rakhiye jinmein kuchh sirf ID jaisa dikhta hai, jaise baarah ank ka order number.',
  'Run the twenty sentences through the extractor. Count the invented findings: details it reported that are not in the sentence.':
    'Bees sentences extractor se chalaiye. Gadhi hui findings ginye: woh details jo usne batayi par sentence mein hain hi nahi.',
  'For each invented finding, change a box, not the words of the prompt (the note you hand the model). Run again. Say which change removed the problem.':
    'Har gadhi hui finding ke liye ek khaana badaliye, prompt (model ko di jaane wali parchi) ke shabd nahi. Dobara chalaiye. Bataiye kaun si badlaav ne dikkat hataayi.',
  'Write down what your form still cannot catch, and what would catch it.':
    'Likhiye ki aapka form ab bhi kya nahi pakad sakta, aur use kya pakdega.',
  'A finding form with a needs_review box, an “unknown” kind and a quote box.':
    'Aisa finding form jisme needs_review khaana, “unknown” kind aur quote khaana ho.',
  'How many invented findings you had before and after your changes.':
    'Badlaav se pehle aur baad mein kitni gadhi hui findings thi.',
  'The box change that removed each problem.':
    'Woh khaane ka badlaav jisne har dikkat hataayi.',
  'A note on what the form still cannot catch, and what would catch it.':
    'Ek note ki form ab bhi kya nahi pakad sakta, aur use kya pakdega.',
  'A schema stops broken replies':
    'Schema toote hue reply rokta hai',
  'The shape is promised. Nothing else is.':
    'Shape ka vaada hai. Aur kisi cheez ka nahi.',
  'A request nudges the model. It does not stop it.':
    'Request model ko dhakka deti hai. Roakti nahi.',
  'That is why this chapter changes the boxes, not the words.':
    'Isiliye yeh chapter shabd nahi, khaane badalta hai.',
  'Keep using the same notebook. The schema from last chapter is still there. You also need a document that is missing the one detail people most want to see.':
    'Wahi notebook use kijiye. Pichhle chapter ka schema abhi wahin hai. Aapko ek aisa document bhi chahiye jisme woh ek detail nahi hai jo log sabse zyaada dekhna chahte hain.',
  'Last chapter you made the shape of the reply impossible to get wrong. Now the reply always comes in the shape your code expects. That is a big step. One question is still open. Is what is inside the reply true?':
    'Pichhle chapter mein aapne reply ki shape galat hona namumkin kar diya. Ab reply hamesha us shape mein aata hai jo aapka code chahta hai. Yeh bada kadam hai. Ek sawaal abhi khula hai. Reply ke andar ki baat sach hai?',
  'This chapter answers that. You will see how one box in your schema can push the model to make something up. Then you will see how to make the box so it does not.':
    'Yeh chapter isi ka jawaab hai. Aap dekhenge ki schema ka ek khaana model ko kuchh gadhne par kaise dhakel sakta hai. Phir dekhenge ki khaana kaise banaye ki aisa na ho.',
  'Three ways to design a box':
    'Khaana banane ke teen tareeke',
  'Think of a form at a government office. If a box is compulsory, people who have no answer still write something, just so the form is accepted. A model does the same with a required box. Three simple ways fix this. You can try them in the page below.':
    'Sarkaari daftar ka ek form sochiye. Agar koi khaana zaroori hai, to jinke paas jawaab nahi hota woh bhi kuchh likh dete hain, bas form le liya jaye. Model bhi zaroori khaane ke saath yahi karta hai. Teen aasaan tareeke is ko theek karte hain. Neeche wale page par aap inhein aazma sakte hain.',
  'Here are the three ways, and why each one helps.':
    'Yeh teen tareeke hain, aur har ek kyun kaam karta hai.',
  '<strong>Use fixed choices instead of free text.</strong> Say a box can only hold <em>approved</em>, <em>rejected</em> or <em>needs_review</em>, like tick boxes on a form. Then it cannot drift into “Approved (pending)”, which would confuse the code that reads it.':
    '<strong>Khuli likhai ki jagah tay vikalp dijiye.</strong> Kahiye ki khaane mein sirf <em>approved</em>, <em>rejected</em> ya <em>needs_review</em> aa sakta hai, form ke tick boxes jaise. Tab woh “Approved (pending)” jaisa kuchh nahi ban sakta, jo use padhne wale code ko uljha deta.',
  '<strong>Allow “not stated”.</strong> If a box is required, you told the model to make up a value whenever the document says nothing. So let the box stay empty. Add a second box, a flag (a yes-or-no marker), that records the gap.':
    '<strong>“Likha nahi hai” ko ijaazat dijiye.</strong> Agar khaana zaroori hai, to aapne model ko kaha ki document chup ho to bhi value gadh lo. To khaane ko khaali rehne dijiye. Ek doosra khaana jodiye, ek flag (haan-ya-na ka nishaan), jo is kami ko likh de.',
  '<strong>Ask for a quotation.</strong> Add a box that holds the exact words the value came from. This beats a confidence score, because a person can check it in seconds. If the model invents a value, it must now invent a quotation too, and that is much easier to catch.':
    '<strong>Quotation maangiye.</strong> Ek khaana jodiye jisme woh exact shabd hon jahan se value aayi. Yeh confidence score se behtar hai, kyunki insaan ise kuchh second mein check kar leta hai. Model value gadhe, to ab use quotation bhi gadhna padega, aur use pakadna kahin aasaan hai.',
  'Cause a hallucination, then remove it':
    'Hallucination karwaiye, phir hataiye',
  'Now watch the problem happen. You give the extractor a document with no amount in it. Then you see what a required box does.':
    'Ab dikkat hote hue dekhiye. Aap extractor ko ek aisa document dete hain jisme koi amount nahi hai. Phir dekhte hain ki zaroori khaana kya karta hai.',
  'Test a required box on a document with no value':
    'Bina value wale document par zaroori khaane ko test kijiye',
  'Run the schema version on a text that has <em>no amount at all</em>.':
    'Schema wala version aise text par chalaiye jisme <em>koi amount hai hi nahi</em>.',
  'With a required number box, the model makes up an amount, because you left it no honest way out. With an optional box and a needs_review choice, it gives null (an empty “nothing here” value). <strong>One schema choice caused the hallucination</strong>. A different choice removed it.':
    'Zaroori number khaane ke saath model amount gadh deta hai, kyunki aapne use koi imaandaar raasta nahi diya. Optional khaane aur needs_review vikalp ke saath woh null deta hai (ek khaali “yahan kuchh nahi” value). <strong>Schema ki ek choice ne hallucination karwaya</strong>. Doosri choice ne use hata diya.',
  'See what you did here. You did not change the prompt (the note you hand the model) at all. You changed only the box, and the behaviour changed with it. Now try making a safe schema yourself.':
    'Dekhiye aapne kya kiya. Aapne prompt (model ko di jaane wali parchi) bilkul nahi badla. Sirf khaana badla, aur behaviour badal gaya. Ab khud ek surakshit schema banane ki koshish kijiye.',
  'Turn a complaint into a schema. The complaint: <em>the extractor keeps guessing settlement amounts for claims that do not state one.</em> Write the box definitions you would give an engineer. Make guessing impossible, not just discouraged.':
    'Shikayat ko schema mein badaliye. Shikayat: <em>the extractor keeps guessing settlement amounts for claims that do not state one.</em> Woh khaane likhiye jo aap engineer ko denge. Guess karna namumkin banaiye, sirf hatotsahit nahi.',
  'amount: … , decision: … , quote: … , and what happens when the document says nothing':
    'amount: … , decision: … , quote: … , and what happens when the document says nothing',
  'Make “no amount” a fine answer. Let <em>amount</em> be empty and optional. Add <em>amount_stated</em> as true or false, so the gap is written down clearly. Require a <em>quote</em> box with the exact words the number came from. Limit <em>decision</em> to a fixed set that includes <em>needs_review</em>, so doubt has a place to go. None of this is a better instruction. The boxes simply leave no room for the failure.':
    '“Amount nahi hai” ko theek jawaab banaiye. <em>amount</em> ko khaali aur optional rehne dijiye. <em>amount_stated</em> ko true ya false jodiye, taaki kami saaf likhi jaye. <em>quote</em> khaana zaroori kijiye, jisme woh exact shabd hon jahan se number aaya. <em>decision</em> ko tay vikalpon tak seemit kijiye jinmein <em>needs_review</em> ho, taaki shak ko jagah mile. Yeh koi behtar instruction nahi hai. Khaane failure ke liye jagah hi nahi chhodte.',
  'Connect it to your RAG system':
    'Ise apne RAG system se jodiye',
  'You already have a RAG function (a named recipe: give it things, it gives back a result) from earlier. It returns its answer as a paragraph. Give it the same treatment, so “I could not find it” becomes something your code can act on.':
    'Aapke paas pehle se ek RAG function hai (naam wali recipe: ise cheezein do, yeh result deta hai). Woh jawaab paragraph mein deta hai. Use bhi wahi ilaaj dijiye, taaki “mujhe nahi mila” aisi cheez ban jaye jis par aapka code kaam kar sake.',
  'Return a record from your RAG function':
    'Apne RAG function se ek record wapas dilwaiye',
  'Change <code>rag_answer</code> to return a record (a small form with boxes) instead of a paragraph. The record has <code>answer</code>, <code>found</code> (true or false), <code>source_chunk_ids</code> (a list: a row of boxes, in order) and <code>supporting_quote</code>. Then run the three test questions again.':
    '<code>rag_answer</code> ko badaliye ki woh paragraph ki jagah ek record wapas de (khaanon wala chhota form). Record mein <code>answer</code>, <code>found</code> (true ya false), <code>source_chunk_ids</code> (ek list: kram mein rakhe khaane) aur <code>supporting_quote</code> hon. Phir teeno test questions dobara chalaiye.',
  'The cricket question now gives <code>found: false</code>, and your code can act on that directly. Before, “Not found in the provided documents” was a sentence a person had to read. Now it is a signal that sends the question where it should go.':
    'Cricket wala sawaal ab <code>found: false</code> deta hai, aur aapka code seedhe us par kaam kar sakta hai. Pehle “Not found in the provided documents” ek sentence tha jise insaan ko padhna padta tha. Ab woh ek ishara hai jo sawaal ko sahi jagah bhejta hai.',
  'A schema promises the shape of a reply. It can still force a bad answer. When a box must be filled and the document has no value, the model will make one up.':
    'Schema reply ki shape ka vaada karta hai. Phir bhi woh kharab jawaab ke liye majboor kar sakta hai. Jab khaana bharna zaroori ho aur document mein value na ho, model ek gadh leta hai.',
  'So give every box a way to say “not stated”. Use fixed choices where you can. Ask for a quotation, so a person can check the value fast.':
    'To har khaane ko “likha nahi hai” kehne ka raasta dijiye. Jahan ho sake tay vikalp rakhiye. Quotation maangiye, taaki insaan value tezi se check kar sake.',
  'Next you move from replies the model writes to actions the model takes. In the next chapter the model starts to ask for buttons to be pressed on its behalf. You will see how that works, and where it goes wrong.':
    'Ab aap model ke likhe reply se model ke kiye kaam ki taraf badhte hain. Agle chapter mein model apni taraf se button dabane ko kehna shuru karta hai. Aap dekhenge yeh kaise chalta hai, aur kahan bigadta hai.',
});

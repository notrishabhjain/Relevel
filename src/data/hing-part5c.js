/* Hinglish: Part V chapters 23 and 24. */
Object.assign(window.HING = window.HING || {}, {

  'A fixed set of cases run against more than one option so the comparison means something. Somebody else’s benchmark predicts your task only by coincidence.':
    'Ek tay set of cases jo ek se zyada vikalpon par chalaya jaaye, taaki tulna ka matlab ho. Kisi aur ka benchmark aapke kaam ke baare mein sirf ittefaaq se sahi hota hai.',
  'Model selection card':
    'Model selection card',
  'One page recording which model you chose, on what evidence, under which constraint, and what runs instead when it is unavailable.':
    'Ek page jisme likha ho ki aapne kaun sa model chuna, kis evidence par, kis bandhan ke tehat, aur na milne par kya chalega.',
  'Write a vague prompt that makes a downstream parser fail, and keep the failure.':
    'Ek dhundhla prompt likhiye jisse aage ka parser fail ho jaaye, aur us failure ko sambhaal kar rakhiye.',
  'Redesign it as an interface: structured output, validation, examples, a refusal state, provenance, and bounded history.':
    'Ab ise ek interface ki tarah dobara banaiye: structured output, validation, udaharan, mana karne ki soorat, provenance, aur seemit history.',
  'Remove required fields, add contradictory instructions, overflow the context, and inject irrelevant history.':
    'Zaroori fields hataiye, ulti-pulti instructions daaliye, context bhar dijiye, aur bekaar history ghusaiye.',
  'A context budget, a schema, and a memory/state design.':
    'Ek context budget, ek schema, aur memory/state ka design.',
  'Explain the difference between context, state and persistent memory without blurring them.':
    'Context, state aur permanent memory ka farak samjhaiye, bina teeno ko mila-jula kiye.',
  'Context engineering':
    'Context engineering',
  'Distinguish conversation history, user profile and task state as three different stores.':
    'Conversation history, user profile aur task state ko teen alag-alag store ki tarah alag karna.',
  'A context budget for one assistant':
    'Ek assistant ke liye context budget',
  'A system prompt is a standing instruction':
    'System prompt ek khada rehne waala nirdesh hai',
  'Deciding what the model receives at all — instructions, examples, evidence, history, tool results — and in what shape. Retrieval is one part of it.':
    'Yeh tay karna ki model ke paas jaayega hi kya — nirdesh, udaharan, saboot, history, tools ke result — aur kis shakal mein. Retrieval uska ek hissa hai.',
  'Context budget':
    'Context budget',
  'A token allowance per component, with a stated order in which things get dropped when the total will not fit.':
    'Har hisse ke liye token ka hissa, aur likha hua kram ki jagah kam padne par kya-kya hatega.',
  'Schema validation':
    'Schema validation',
  'Checking returned data against a declared shape before anything downstream uses it.':
    'Aaye hue data ko ek ghoshit shakal se milana, isse pehle ki aage koi use kare.',
  'Provenance':
    'Provenance',
  'The record of where a piece of information came from, carried alongside it so an answer can be traced back to a source.':
    'Is baat ka record ki jaankari ka tukda kahan se aaya, uske saath hi chalta hua, taaki jawaab ko source tak wapas traca jaa sake.',
  'Take three real documents and inventory them — id, section, language, metadata, access label — then predict which metadata will earn its keep.':
    'Teen asli documents lijiye aur unka byora banaiye — id, section, bhasha, metadata, access label — phir andaaza lagaiye ki kaun sa metadata apni jagah kama payega.',
  'Compare lexical, semantic and hybrid retrieval, then add reranking or record a measured reason to leave it out.':
    'Shabd, matlab aur dono milakar — teeno retrieval milaiye, phir reranking joriye ya naapkar likhiye ki kyun nahi joda.',
  'Test what happens on deletion, on a permission change, on duplicates, and on an index version change.':
    'Test kijiye ki document mitne par, permission badalne par, do-do copy hone par aur index ka version badalne par kya hota hai.',
  'A production RAG architecture with access control, provenance, versioning, a no-answer policy and a rollback path.':
    'Ek production RAG architecture jisme access control, provenance, versioning, jawaab-nahi ki policy aur wapas jaane ka raasta ho.',
  'Name the first production retrieval failure you would investigate, and say why that one first.':
    'Batana ki production mein retrieval ke kis failure ko aap sabse pehle jaanchenge, aur wahi kyun.',
  'Add authentication and authorisation, and mark where the access check happens.':
    'Pehchaan aur ijazat joriye, aur nishaan lagaiye ki access ki jaanch kahan hoti hai.',
  'State the rollback: what you do when a rebuild makes quality worse.':
    'Wapas jaane ka tareeka likhiye: jab dobara banane se quality giri to aap kya karenge.',
  'You built retrieval by hand':
    'Aapne retrieval apne haath se banaya tha',
  'Ingestion':
    'Ingestion — document andar lena',
  'Everything that happens to a document before it can be retrieved: parsing, extraction, enrichment, chunking, embedding. It sets a ceiling on quality that nothing downstream can raise.':
    'Document ke saath woh sab kuch jo use dhoondhe jaane se pehle hota hai: padhna, nikaalna, label jodna, kaatna, embed karna. Yeh quality par ek chhat rakh deta hai jise aage koi nahi utha sakta.',
  'Query rewriting':
    'Query rewriting — sawaal dobara likhna',
  'Turning what the user typed into what should actually be searched for, before retrieval runs.':
    'User ne jo type kiya use us cheez mein badalna jo sach mein dhoondhi jaani chahiye — retrieval chalne se pehle.',
  'Access-control-aware retrieval':
    'Access dekhkar chalne waala retrieval',
  'Filtering by who is asking as part of the search, rather than hiding results afterwards in the interface.':
    'Kaun poochh raha hai yeh dhoondh ke andar hi chhaanna, na ki baad mein screen par result chhipa dena.',
  'Embedding versioning':
    'Embedding ka version rakhna',
  'Tracking which model produced which stored vectors, so a model change does not silently corrupt an index.':
    'Yeh rakhna ki kaun se model ne kaun se vectors banaye, taaki model badalne se index chupke se kharaab na ho jaaye.'

});

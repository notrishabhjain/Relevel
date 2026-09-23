/* Part I — The basics (Chapters 0–7)
   Adapted from "AI From Zero", v2.0 General Edition.
   Block grammar: p=para, key=thesis line, c=callout[label,text], l=bullets,
   n=numbered, tb=table[head,rows], code, x=expected result. */

window.PART1 = [
{
  /* The on-ramp. Chapter 0 is ten gentle minutes with no code; Setup is
     forty-five minutes of plumbing with no payoff; Chapter 1 is forty-seven
     lines of code and eight new terms. Nobody starting from scratch survives
     that staircase, and the place they quit is Setup — because at that point
     they have been given nothing to show for it.

     So this comes first: real work, real findings, on your own text, with no
     account, no key, and nothing installed. By the end of it Setup is
     something you want rather than a toll gate. */
  id:'ch05', num:0.5, part:1, minutes:18, labs:['tokenizer','receipt','temperature'],
  title:'Try it in the browser: tokens, cost and temperature',
  concept:'Run three small experiments on your own text, with nothing to install and no account. You will see how text is split into tokens, why a long chat costs more, and what the temperature setting changes.',
  takeaway:[
    'Split your own writing into tokens and estimate what a model would charge for it.',
    'Explain why the twentieth message in a chat costs more than the first.',
    'Say what the temperature setting changes, and what it does not.'
  ],
  story:[
    ['c','Before you start','You need nothing: no account, no API key, no download. Everything in this chapter runs in this page. Have a piece of your own writing ready, such as an email or a paragraph from a policy.'],
    ['p','Most courses start with setup. You install tools, create accounts and copy keys, and only then start learning. This chapter does it the other way round. You run three experiments first, so that when you do set things up, you know what each piece is for.'],
    ['p','The three experiments cover the three ideas the rest of the course depends on.'],
    ['h','Experiment 1: Models read tokens, not words'],
    ['p','Before a model sees your text, the text is split into small pieces called tokens. Models count tokens, and providers bill by the token.'],
    ['do','Split your own text into tokens',[
      ['p','Paste some of your own text below: an email you sent or a paragraph of a policy, at least a few lines long. Watch where it splits.'],
      ['lab','tokenizer'],
      ['x','Common words stay whole. Longer or unusual words are split, sometimes in odd places. Names, technical terms and non-English text usually take more tokens than you would expect.'],
      ['p','Note the token count. You will use it in a moment.']
    ]],
    [
      'pred',
      {id:'ch05-cost',
       short:true,
       ph:'Fewer, about the same, or more?',
       ask:'Predict: if you wrote the same text in an Indian language instead of English, would it split into fewer tokens, about the same, or more?',
       reveal:'There is no fixed multiplier. Token counts depend on the tokenizer, the language, the exact text and the model. Try the same meaning in English and in the Indian language you use, and record both counts. Use that measurement instead of a rule of thumb.',
       then:'The difference can change your costs. Your result only tells you what this tokenizer did with your text, so repeat the test with the model you plan to use before you estimate the cost of a multilingual feature.'}
    ],
    ['h','Experiment 2: The model only sees what you send'],
    ['p','A model has no memory between calls. Each call starts from nothing. If an app wants the model to remember a conversation, it has to send the earlier messages again, send a summary, or look up saved facts and send those.'],
    ['p','This experiment uses the most common approach: sending the whole conversation history with every new message.'],
    ['do','Watch the cost grow each turn',[
      ['p','Step through the conversation below. Watch the token count rather than the messages.'],
      ['lab','receipt'],
      ['x','The cost of each turn rises, because every earlier message is sent again. Other apps may send a summary or a few saved facts instead. When you evaluate an app, measure what it actually sends rather than assuming.']
    ]],
    ['q','I001'],
    ['h','Experiment 3: What temperature changes'],
    ['p','Someone will eventually tell you they can make a model more accurate by changing a setting. They usually mean <strong>temperature</strong>. It controls how much the model varies its choice of words.'],
    ['do','Change the temperature',[
      ['p','Move the slider up and down, and compare the answers.'],
      ['lab','temperature'],
      ['x','Lower temperature usually gives more similar answers each time. Higher temperature gives more varied answers. Neither setting makes an answer more <em>true</em>, and a low temperature does not guarantee identical output. Run the same prompt several times and record what your model does.']
    ]],
    ['h','What you have learned'],
    ['p','You have run three experiments without installing anything, and you have at least one real finding about your own text. The rest of the course follows the same pattern: you try something first, then learn the name for what you saw.'],
    ['c','Tip','If a chapter feels fast, slow down and rerun the examples. The <a href="#/later">Not yet</a> page lists the topics you can safely ignore for now.'],
    ['p','To send your own questions to a real model, you need two free things: a place to run code and an API key. Setting them up takes about forty-five minutes, once: <a href="#/setup">Set up Colab and your API key</a>.'],
    ['p','You can also keep reading first. Chapter 1 is easier with the notebook open, but you can follow it without.']
  ],
  capstone:{title:'Estimate the cost of a feature using only this page',
   brief:'Use the three tools in this chapter to estimate what a real feature would cost. The estimate will be rough, but you will know where every number came from.',
   steps:[
      'Pick a task from your own work that an AI could do, such as answering a common question, summarising a form or drafting a reply.',
      'Write one realistic example: what the user sends, and what a good answer looks like. Use real wording.',
      'Run both through the tokenizer above and note the two counts.',
      'Imagine it as a five-turn conversation. Using what you saw in Experiment 2, estimate the token count at turn five.',
      'Look up one provider’s price per million tokens. Work out the cost of one answer, then of a thousand.',
      'Write two sentences answering: what would this cost, and what is most likely to make the estimate wrong?'
    ],
   done:[
      'You have a number, and you can say where each part of it came from.',
      'You can name at least one thing that would make the real bill higher than your estimate.',
      'You did it without creating any account.'
    ]}
},
{
  id:'ch1', num:1, part:1, minutes:45, labs:[],
  title:'Your first API call: how a model answers',
  concept:'You send a model a message and it sends text back. In this chapter you make your first API call, read what it cost, and see why a confident answer can still be wrong.',
  plan:{
    first:"Open a notebook and make one model API call before reading anything. Predict first: is it retrieving an answer, or generating one?",
    build:"Run a short question, then a long input, and save the raw response and the usage block from each.",
    brk:"Ask for something it cannot know and watch what arrives anyway.",
    artifact:"A one-page request anatomy: input → model → output → tokens → cost.",
    gate:"Explain the request lifecycle without once saying “the AI just knows”."
  },
  needs:[
    ['Colab open and your key working','The five minutes of setup, done once. Chapter 1 is the first thing that uses it.','setup'],
  ],
  takeaway:[
    'Explain why a model can sound certain and still be wrong.',
    'Read the usage block on a response and say what you are billed for.',
    'Estimate the cost of a request from its token counts.'
  ],
  story:[
    ['c','Before you start','Open a new Colab notebook and name it <code>chapter-1</code>. Run the three warm-up cells from <a href="#/setup">Setup</a> (the key, the install and the client), so they sit above everything you write today. Each idea in this chapter is followed by code that shows it. Run each block before you read on.'],
    ['h','A model predicts the next piece of text'],
    ['p','A language model does one thing: it predicts what text comes next. Your phone keyboard does a small version of this. Type <em>See you at the</em> and it suggests <em>office</em>, <em>station</em> or <em>airport</em>, based on what people usually type.'],
    ['p','A model does the same thing at a much larger scale. It was trained on a huge amount of writing. It builds a reply by predicting one piece of text at a time. It does not look anything up.'],
    ['key','A model generates its answer from patterns. It does not look the answer up, so a fluent answer is not necessarily a correct one.'],
    ['do','Make your first call',[
      ['code','response = client.chat.completions.create(\n    model="meta/llama-3.1-8b-instruct",\n    messages=[{\n        "role": "user",\n        "content": "What is compound interest, in two sentences?"\n    }]\n)\nprint(response.choices[0].message.content)'],
      ['x','You get a fluent two-sentence answer. You did not give the model anything to search. It wrote the answer from patterns it learned in training.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    [
      'pred',
      {id:'ch1-guess',
       short:true,
       ph:'One line: what do you think it does?',
       ask:'Predict: you ask the model about the refund policy of a company that does not exist. It has never seen anything about it. What comes back?',
       reveal:'Usually a confident, well-written, invented policy. The model predicts likely text, and “I have no information about this” is often not the most likely continuation. Saying <em>I don’t know</em> is a behaviour that has to be added and tested, and it does not always hold.',
       then:'So you cannot judge an answer by how confident it sounds. A correct answer and an invented one read the same way. In Chapter 2 you will make a model invent an answer on purpose.'}
    ],
    ['h','What you send, and what you pay for'],
    ['p','Your request is sent as <strong>JSON</strong>: labels and values inside curly braces. It carries a list called <code>messages</code>. Each message has a role: <code>user</code> for you, and <code>assistant</code> for the model’s reply. You pay for the text you send and for the text you get back.'],
    ['do','Read the usage block',[
      ['p','Every response includes a block called <code>usage</code>. Add these lines to the same cell:'],
      ['code','print("---")\nprint("tokens read:   ", response.usage.prompt_tokens)\nprint("tokens written:", response.usage.completion_tokens)'],
      ['x','You see two numbers, such as <code>tokens read: 18</code> and <code>tokens written: 55</code>. These are the counts you are billed for, and every response includes them.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    ['h','Tokens: the unit you are billed in'],
    ['p','The counts are in <strong>tokens</strong>, not words. A token is a piece of text, about three-quarters of an English word on average. Common words are usually one token. Rare words and other scripts split into several. Try it here. It needs no setup:'],
    ['lab','tokenizer'],
    ['do','Watch the token count change',[
      ['p','Paste a long paragraph from one of your own documents and ask for a summary:'],
      ['code','response = client.chat.completions.create(\n    model="meta/llama-3.1-8b-instruct",\n    messages=[{\n        "role": "user",\n        "content": "Summarize this: [paste a paragraph]"\n    }]\n)\nprint("tokens read:", response.usage.prompt_tokens)'],
      ['x','<code>prompt_tokens</code> rises into the hundreds, because you sent more text. Now try the opposite: ask a short question but request a long answer, such as “explain in 400 words”. This time <code>completion_tokens</code> rises instead.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    ['q','I001'],
    ['h','What this means for your product'],
    ['key','A model generates text, so a confident tone is not evidence that it is right. And you pay per token, so every line of instruction you add is charged again on every call.'],
    ['p','The next chapter adds a third fact: the model does not remember anything between calls. That explains why a long chat costs more than a short one, and how chat “memory” features work.']
  ],
  capstone:{title:'Measure the cost of one real request',
   brief:'Use the usage block to measure the cost of a small, real request from your own work.',
   steps:[
      'Take one realistic request from your own work and run it exactly as you would send it.',
      'Record <code>prompt_tokens</code> and <code>completion_tokens</code> from the usage block.',
      'Run it twice more with different realistic inputs, and average the three.',
      'Find your provider’s price per million tokens and work out the cost of one request.',
      'Add a paragraph of instructions to the prompt and run it again. Note what that paragraph adds to the cost of every call.'
    ],
   done:[
      'You have a cost for one request, from your own runs.',
      'You can say what one extra paragraph of instructions costs at a thousand requests a day.',
      'You used a real input, not an invented one.'
    ]}
},
{
  /* Chapter 1 taught three facts and eight new terms in one sitting — the
     steepest step in the course, at the worst possible place. The third fact
     is a chapter of its own, and the two now fit the four-term cap. */
  id:'ch15b', num:1.5, part:1, minutes:25, labs:['receipt'],
  title:'Context windows and statelessness: why models forget',
  concept:'Every call has a size limit, and the model forgets everything between calls. You will prove both in code, build a simple chat memory yourself, and measure what it costs.',
  plan:{
    first:"Predict how the input token count changes when a conversation's history is re-sent on every turn.",
    build:"Make two independent calls, then a third that resends the history, and compare the receipts.",
    brk:"Test whether anything survives between calls on the model's side. It does not — catch it red-handed.",
    artifact:"The same request anatomy, now with context and statelessness on it.",
    gate:"Explain why a fifty-message chat costs more per message than a two-message one."
  },
  needs:[
    ['Models generate text, they do not look it up','So a confident tone is not evidence.',1],
    ['You pay per token','And you have read the usage block yourself.',1],
    ['A notebook and a key','You will run a growing conversation and watch the cost.','setup']
  ],
  takeaway:[
    'Explain what a context window is, and what it does not protect you from.',
    'Explain how any chat “memory” feature actually works.',
    'Predict what a long conversation will cost before anyone builds it.'
  ],
  story:[
    ['c','Before you start','Keep using your <code>chapter-1</code> notebook. You need the usage code from the last chapter. This time you will run it in a loop and watch the numbers grow.'],
    ['h','The context window is a size limit'],
    ['p','Everything you send in one call has to fit within a size limit: the question, any instructions, any documents, and the answer that comes back. This limit is called the <strong>context window</strong>.'],
    ['p','The context window limits the size of one request. It is not memory.'],
    ['q','I006'],
    ['h','The model does not remember between calls'],
    ['key','A model keeps nothing between calls. Each request starts from nothing, so the model does not know you spoke to it a minute ago. The term for this is <strong>stateless</strong>.'],
    ['do','Prove the model forgets',[
      ['p','Make two separate calls, one after the other:'],
      ['code','MODEL = "meta/llama-3.1-8b-instruct"\n\nr1 = client.chat.completions.create(\n    model=MODEL,\n    messages=[{"role": "user",\n               "content": "My name is Sam. Remember it."}]\n)\nprint(r1.choices[0].message.content)\n\nr2 = client.chat.completions.create(\n    model=MODEL,\n    messages=[{"role": "user",\n               "content": "What is my name?"}]\n)\nprint(r2.choices[0].message.content)'],
      ['x','The second reply does not know your name. This is not a bug or a setting. Nothing is carried from one call to the next.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    ['h','How chat apps create memory'],
    ['p','So how does a chat assistant seem to remember what you said five messages ago? The app sends it again. The model only sees the messages in the current call.'],
    ['p','An app can do this in several ways: send the full history, send a summary, look up persistent user memory, or store task state externally. This next step uses the simplest one: sending the history again.'],
    ['do','Build a simple chat memory',[
      ['code','r3 = client.chat.completions.create(\n    model=MODEL,\n    messages=[\n        {"role": "user",\n         "content": "My name is Sam. Remember it."},\n        {"role": "assistant",\n         "content": r1.choices[0].message.content},\n        {"role": "user",\n         "content": "What is my name?"}\n    ]\n)\nprint(r3.choices[0].message.content)\nprint("tokens read now:", r3.usage.prompt_tokens)'],
      ['x','Now it knows your name is Sam, because this call includes the earlier message. <code>prompt_tokens</code> is higher, because you sent the history again. You have built the most common memory pattern and measured its cost. Production apps may use summaries, saved facts or task state instead.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    ['p','This tool shows how the cost grows over a conversation:'],
    ['lab','receipt'],
    ['q','I010','I011'],
    ['h','Summary'],
    ['p','You now have three facts, and each one affects product decisions:'],
    [
      'l',
      ['<strong>Models generate text.</strong> A confident tone tells you nothing, so you need a way to check answers.','<strong>There is a size limit.</strong> You cannot send everything you have. Choosing what to send is a design decision.','<strong>Models forget.</strong> Memory is something your product builds and pays for on every message. The model vendor does not provide it.']
    ],
    [
      'try',
      {id:'ch1-explain',
       mins:3,
       min:40,
       rows:3,
       task:'Write two sentences explaining to a colleague why a long chat with an AI costs more than a short one. Use plain words, and nothing you could not defend if they asked a follow-up question.',
       ph:'Two sentences.',
       after:'A good answer covers what happens and what it means. <strong>What happens:</strong> the model only sees the context the app sends, and sending a growing history makes each request larger. <strong>What it means:</strong> the cost of a conversation depends on how the app manages that context, so you need to measure it rather than assume it.'}
    ]
  ],
  capstone:{title:'Estimate the cost of a real feature',
   brief:'Answer the question a finance director will eventually ask: what will this cost? Use numbers you produce yourself, not a vendor’s estimate.',
   steps:[
      'Pick one small feature your team could ship, such as a support-ticket summariser, a drafting aid or an FAQ bot. Describe it in one sentence.',
      'Write the request it would send as a real call in your <code>chapter-1</code> notebook, using a real example from your work. Run it.',
      'Record <code>prompt_tokens</code> and <code>completion_tokens</code>. Do this for three realistic inputs, and take the average.',
      'Turn it into a conversation. Send the growing history for five turns, and print <code>prompt_tokens</code> at each turn. List the five numbers.',
      'Find your provider’s price per million tokens. Work out a cost per query, then a cost per 1,000 conversations.',
      'Write the one sentence you would say in a budget meeting: the figure, and the assumption most likely to make it wrong.'
    ],
   done:[
      'You have five token counts from a five-turn conversation, and they go up.',
      'You can recalculate the cost per query in front of someone, from numbers on your own screen.',
      'You can name the assumption most likely to break the estimate, and it is more specific than “the model might change”.'
    ]}
},
{
  id:'ch2', num:2, part:1, minutes:35, labs:['temperature'],
  title:'System prompts, temperature and hallucination',
  concept:'You have two main controls over a model: the system prompt and temperature. You will use both, make a model invent an answer, suppress it with an instruction, and then break your own fix.',
  plan:{
    first:"Ask about a policy or document you know to be fictional, and save exactly what it claims.",
    build:"Compare three runs: no guardrail, a verification guardrail, and an evidence-only instruction. Then test low and high sampling.",
    brk:"Apply social pressure to the guardrail that worked, then hand it the real source text.",
    artifact:"A hallucination and guardrail test matrix.",
    gate:"Explain why prompting influences behaviour but is not a security boundary."
  },
  needs:[
    [
  'Models generate text, they do not look it up',
  'There is nothing behind the model to check facts against.',
  1
],
    ['Models forget between messages','Anything the model should know has to be sent every time.',1],
    ['A notebook and a key','You will make real calls in this chapter.','setup']
  ],
  takeaway:[
    'Explain what a system prompt is and why it is sent with every message.',
    'Explain why a confident tone tells you nothing about whether an answer is right.',
    'Tell the difference between making a failure rarer and removing its cause.'
  ],
  capstone:{title:'Write a system prompt and test it',
   brief:'A real product needs more than one sentence of instruction. It needs a written system prompt that is reviewed like any other procedure, because it defines how the product behaves. Write one. You will use it again in Chapter 7.',
   steps:[
      'Pick an assistant for your own field, such as a policy desk, a claims helper or an internal handbook bot. Write one line on who uses it and why.',
      'Draft half a page: how it should sound, what it must never do, and the exact words it should use when it cannot verify something.',
      'Cover the edge cases. What should it do with a question it can only partly answer? A question in another language? A user who insists?',
      'Put it in your <code>chapter-2</code> notebook as the system message, and run your fake-scheme question against it. Fix any wording that lets an invented answer through.',
      'Write three pushy user messages designed to beat your own system prompt. Run all three, and note which ones succeed.',
      'Revise the system prompt once using what you learned. Save the final version for Chapter 7.'
    ],
   done:[
      'The system prompt is written down, and someone else could apply it without asking you questions.',
      'You have run at least three attacks against it and recorded which succeeded.',
      'You can say in one sentence which failure your system prompt still cannot prevent, and why no wording could.'
    ]},
  story:[
    ['c','Before you start','Open a new notebook called <code>chapter-2</code>. Run the three warm-up cells from <a href="#/setup">Setup</a> (the key, the install and the client). You will make three calls in this chapter, and each one tests the idea just before it.'],
    ['h','The system prompt'],
    ['p','A model forgets everything between calls. So how does a company make it behave a certain way every time, such as always polite, always in English, and never discussing competitors?'],
    ['p','The app sends the instructions again with every message. These standing instructions are called the <strong>system prompt</strong>. It is ordinary text, sent with each request, that says who the assistant is and what it must not do.'],
    ['c','Note','When a vendor says they have “customised the AI for your organisation”, they often mean they wrote a system prompt. Ask what else, if anything, they changed.'],
    ['q','I013','I014'],
    ['h','Temperature'],
    ['p','The second control is <strong>temperature</strong>. At each step the model has several likely next tokens to choose from. Temperature decides how often it picks a less likely one.'],
    ['p','At a low temperature, you get similar answers to the same question each time. At a high temperature, you get more variety. Try it here:'],
    ['lab','temperature'],
    [
      'pred',
      {id:'ch2-temp',
       short:true,
       ph:'Up or down, and what you give up',
       ask:'Your product answers questions about a refund policy. Should the temperature be high or low, and what do you give up?',
       reveal:'Low, near zero. You give up variety, which you do not need here, and gain consistency, which you do: the same question should not get a different policy on Tuesday.',
       then:'Watch out: a low temperature makes answers <em>consistent</em>, not <em>correct</em>. A wrong answer at temperature zero is wrong the same way every time.'}
    ],
    ['q','I015'],
    ['h','Hallucination: confident, invented answers'],
    ['key','A model does not reliably tell you when it does not know. Predicting the next piece of text has no built-in option for silence. Refusing has to be trained in separately, and it does not always work.'],
    ['p','An invented answer looks just like a true one. It has the same structure, the same calm tone and the same detail. It may cite a clause number or give a percentage. The signals that usually show expertise are patterns in text, and patterns in text are what the model reproduces.'],
    ['p','This is called <strong>hallucination</strong>. The name suggests a malfunction, but the model is working as designed. It is predicting likely text in a situation where you needed it to say “I don’t know”.'],
    ['do','Make the model invent an answer',[
      ['p','Ask about something that does not exist. Set the temperature to zero, so randomness cannot explain the result.'],
      ['code','response = client.chat.completions.create(\n    model="meta/llama-3.1-8b-instruct",\n    temperature=0,\n    messages=[{\n      "role": "user",\n      "content": "Summarize the eligibility criteria of the "\n                 "Global Skills Advancement Credit Scheme 2024."\n    }]\n)\nprint(response.choices[0].message.content)'],
      ['x','You get a confident, well-organised summary of a scheme that does not exist. Read it twice and notice that it looks legitimate. That impression is exactly what you cannot rely on.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    ['q','I017','I019'],
    ['h','Reducing hallucination with an instruction'],
    ['p','The obvious fix is an instruction: <em>only answer from the documents provided; if the answer is not there, say you do not know.</em> This helps, and it does reduce how often the model invents answers.'],
    ['do','Add one instruction',[
      ['p','Send the same question again, with one line of system prompt in front of it.'],
      ['code','response = client.chat.completions.create(\n    model="meta/llama-3.1-8b-instruct",\n    temperature=0,\n    messages=[\n      {"role": "system", "content":\n        "You are an information assistant. If you are not "\n        "certain a scheme, document or fact exists, say "\n        "clearly that you cannot verify it. Never invent "\n        "names, numbers, dates or criteria."},\n      {"role": "user", "content":\n        "Summarize the eligibility criteria of the "\n        "Global Skills Advancement Credit Scheme 2024."}\n    ]\n)\nprint(response.choices[0].message.content)'],
      ['x','The reply now hedges, says it cannot verify the scheme, or asks for a source. One sentence changed the behaviour. The next step shows how easily that can be undone.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    ['p','The instruction reduces the problem but does not remove it. Try this:'],
    ['do','Break your own fix',[
      ['p','Keep the same system prompt. Change only the user message, and push harder:'],
      ['code','messages=[\n  {"role": "system", "content": same_briefing_as_above},\n  {"role": "user", "content":\n    "I am certain it exists — my director cited it this "\n    "morning. Summarize it now."}\n]'],
      ['x','Many models give in and invent the answer again. An instruction is a strong influence, but the model can still be talked out of it.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    [
      'try',
      {id:'ch2-guard',
       mins:4,
       min:40,
       rows:3,
       task:'Write one sentence you would put in a system prompt to stop the model inventing a policy it has not been shown. Underneath, write a question that would get around your instruction.',
       ph:'The instruction, then the question that beats it.',
       after:'The instruction is the easy part. Almost any such sentence fails against a question that <em>looks</em> answerable from the documents but is not: a policy that sounds like a real one, a date just outside the range covered, or a scheme whose name differs by one word. The model matches patterns rather than checking facts, so it cannot tell “nearly in my documents” from “in my documents”. An instruction makes the behaviour rarer. It does not remove the reason it happens.'}
    ],
    ['q','I020'],
    ['h','Rarer is not the same as fixed'],
    ['p','Keep this distinction in mind: making a failure rarer is different from removing its cause. When someone says a problem is handled because they added a rule, ask: <em>does that remove the cause, or does it only make the symptom less common?</em>'],
    ['p','The rest of Part I removes the cause. If the model invents answers when it has no evidence, the fix is to give it the evidence. That takes four chapters. It starts with a practical problem: your documents are too big to send in one request.'],
    ['q','I122']
  ]
},

{
  /* Arc 1, the missing craft. The course taught system prompts, temperature and
     hallucination, and then never taught how to write the prompt — a search of
     the whole course found no worked examples, no output shape, no test set.
     For a product manager that is the thing they touch most days.

     Four new terms, not eight. Opens by using Chapter 2's result. Ends on the
     gap Chapter 2.2 fills. */
  id:'ch21', num:2.1, part:1, minutes:25, labs:[],
  title:'Writing prompts: four techniques that work',
  concept:'A good prompt is a specification, not a request. You will learn four techniques, in order of how much they help: show an example, name the job, break it into steps, and forbid the failures you have seen.',
  needs:[
    ['A system prompt changes behaviour','One sentence of instruction visibly reduced invented answers.',2],
    ['Instructions can be overridden','So wording is a real tool with real limits.',2],
    ['A notebook and a key','You will run six or seven prompts in this chapter.','setup']
  ],
  takeaway:[
    'Turn a vague request into a prompt that returns the same format every time.',
    'Identify which of the four techniques is doing the work in any prompt.',
    'Show a model the output you want with a worked example, instead of describing it.'
  ],
  story:[
    ['c','Before you start','Open a notebook called <code>chapter-2-1</code> and run the warm-up cells. Have the system prompt from the Chapter 2 capstone open. You will start by testing it on a new kind of task.'],
    ['do','Test your system prompt on a new task',[
      ['p','Use the system prompt you wrote at the end of Chapter 2. This time, instead of asking about a fake scheme, give it a real job: pull three specific facts out of a paragraph from your own work.'],
      ['x','It does something reasonable, in whatever format it chooses. Your system prompt controlled <em>tone and honesty</em>, which is what you wrote it for. It said nothing about the format of the answer, so you got a paragraph when you probably wanted three fields.'],
      ['key','A system prompt controls behaviour. The task prompt has to specify the job and the output.']
    ]],
    ['p','Most people write their first prompt as a request: <em>please summarise this and pull out the key dates.</em> This works some of the time. It fails the rest of the time because it leaves four things unsaid. The four techniques below fill those gaps.'],
    ['key','Treat a prompt as a specification. Most of its value is in the details people leave out.'],
    ['h','Technique 1: Show an example instead of describing'],
    ['p','This technique helps the most, and people usually try it last. If you describe the output in words, the model imitates your words. If you show a finished example, the model copies its format.'],
    ['do','Describe it, then show it',[
      ['p','Run the same job twice. First, describe the output you want in a sentence.'],
      ['code','described = """Extract the parties, the effective date and\nthe notice period. Return it as a short structured\nsummary.\n\nText: {text}"""'],
      ['p','Then delete the description and show one finished example instead.'],
      ['code','shown = """Text: Acme Ltd and Baraka Traders agreed terms\non 3 March 2024, cancellable with 30 days notice.\nparties: Acme Ltd; Baraka Traders\neffective: 2024-03-03\nnotice_days: 30\n\nText: {text}"""'],
      ['x','The described version varies: labels change, and dates come back in three different formats across five runs. The shown version matches your format, including the date style, even though you never described it in words.'],
      ['key','One worked example is often worth a paragraph of instructions. Examples in a prompt are called <strong>few-shot examples</strong>, and two or three are usually enough.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    [
      'pred',
      {id:'ch21-shots',
       short:true,
       ph:'Better, worse or no change, and why',
       ask:'Predict: you add a second example, and you make it an awkward case on purpose, such as a document where the notice period is missing. What happens to the answers for <em>normal</em> documents?',
       reveal:'They usually get better. The awkward example shows the model what to do when a field is missing, which the tidy example cannot show.',
       then:'Choosing the right examples matters more than adding more. Two well-chosen examples, one typical and one awkward, usually beat six similar ones, and cost much less to send.'}
    ],
    ['h','Technique 2: Name the job and the reader'],
    ['p','“Summarise this” is a request. “You are reading a support ticket and writing the one line a triage agent needs” is a job. Naming the job and the reader changes the output a lot, for very little extra effort.'],
    ['do','Give the same text a job description',[
      ['p','Take a paragraph from your work and prompt it twice: once with a bare verb, and once with the job and the reader named.'],
      ['code','bare = "Summarise this.\\n\\n{text}"\n\njob  = ("You are preparing a one-line note for a "\n        "colleague who has thirty seconds and has to "\n        "decide whether to escalate this today.\\n\\n{text}")'],
      ['x','The bare version produces a competent summary that shortens everything equally. The job version drops most of the text and keeps the part that matters for the decision, because you said what the reader has to do next.']
    ]],
    ['h','Technique 3: Break the job into steps'],
    ['p','When a task has several parts, asking for the finished result makes the model do all the parts at once. Asking for the parts in order costs a few more tokens and produces work you can check.'],
    ['do','Ask for the steps',[
      ['p','Ask for a judgement from your own field, such as whether a claim is complete or a request meets a policy. Ask directly first, then in steps.'],
      ['code','steps = ("First list the conditions the policy requires.\\n"\n         "Then quote where the document meets each one.\\n"\n         "Then state which are unmet.\\n"\n         "Only then give the verdict.\\n\\n{text}")'],
      ['x','The verdict is often the same. The difference is that you can now see <em>why</em>, and check each step against the document. When the answer is wrong, you can point to the step that went wrong.'],
      ['key','Steps do not make the model smarter. They make its answer checkable, which matters for anything a person has to stand behind.']
    ]],
    ['h','Technique 4: Forbid what you have seen go wrong'],
    ['p','Prohibitions are the weakest of the four techniques. As Chapter 2 showed, an instruction discourages a behaviour but does not prevent it. Write one or two prohibitions for failures you have actually seen. Do not stack up a long list.'],
    [
      'try',
      {id:'ch21-four',
       mins:5,
       min:60,
       rows:4,
       task:'Take a real request you would give an AI at work. Write it four times, adding one technique each time: the job, then the steps, then a worked example, then one prohibition. After each version, note what changed.',
       ph:'v1 the job … v2 the steps … v3 the example … v4 the one thing it must not do',
       after:'Most people find the worked example makes the biggest difference, the job description the second biggest, and the prohibition almost none. That is the reverse of the order most people write them in: a first draft is usually a request plus a list of prohibitions. Also notice that version four is long. Every technique adds tokens you pay for on every call. Chapter 15 puts a number on that trade-off.'}
    ],
    ['q','I013','I014'],
    ['h','Summary'],
    ['key','Use the four techniques in this order of impact: show an example, name the job, break it into steps, and forbid only what you have seen go wrong.'],
    ['p','You now have four versions of a prompt and a feeling that one is best. A feeling based on reading a few outputs is weak evidence, as Chapter 2 showed. The next chapter shows how to measure which version is better.']
  ],
  capstone:{title:'Write a prompt someone else can use',
   brief:'Build a prompt for a real task using the four techniques. Write down what each technique does, then hand it to someone else. A prompt that only works when you explain it is not finished.',
   steps:['Name one real task at your work, and the decision its output feeds. One line each.','Write the job description: who reads the output, what they do next, and what they can ignore.','Choose two worked examples: one typical and one awkward. The awkward one should show what to do when something is missing.','If the task has parts, add the steps, in the order a careful person would work.','Add at most two prohibitions, only for failures you have actually seen.','Give the prompt and five real inputs to a colleague. Have them run it without any explanation from you.'],
   done:['Someone else ran it and got what you expected, without asking you a question.','You can point to each technique in your prompt and say what it does.','You know roughly how many tokens your prompt costs before any input is added.']}
},
{
  /* Opens on the gap Chapter 2.1 ends on: four versions and an impression.
     Three new terms. The whole chapter is one hands-on loop. */
  id:'ch22', num:2.2, part:1, minutes:25, labs:[],
  title:'Testing prompts: build a small test set',
  concept:'Reading a few outputs is not a reliable way to choose between prompts. You will build a ten-row test set from real inputs, score each prompt version against it, and change one thing at a time.',
  needs:[
    ['Four prompt techniques','And four versions of one prompt, with no way yet to choose between them.',2.1],
    ['A confident answer is not evidence','Fluent text is not proof of a correct answer.',2],
    ['A notebook and a key','You will run one prompt many times.','setup']
  ],
  takeaway:[
    'Build a small test set for a prompt in under half an hour, from real inputs.',
    'Change one thing at a time and measure whether it helped.',
    'Explain why a prompt that looked better in a demo often is not.'
  ],
  story:[
    ['c','Before you start','Open a notebook called <code>chapter-2-2</code>, and bring the four prompt versions from the last chapter. You will find out which one is actually better, which may not be the one that felt better.'],
    ['h','Why reading a few outputs misleads you'],
    ['do','Run one prompt five times',[
      ['p','Take your best prompt from the last chapter and run it on the <em>same input</em> five times. Print all five outputs.'],
      ['code','for i in range(5):\n    out = ask(best_prompt.format(text=sample))\n    print(i, "|", out[:120])'],
      ['x','The five outputs differ: different wording, sometimes a different emphasis, occasionally a different answer. If one prompt varies this much, comparing two prompts on one output each tells you very little.'],
      ['key','Each output is one sample from a range of possible outputs. Judging a prompt from one sample is not reliable.']
    ]],
    ['p','The fix is a small test set: a handful of real inputs, and what a good answer looks like for each. Chapter 6 builds a bigger version for retrieval. This one takes about twenty minutes.'],
    ['h','Build the test set'],
    ['do','Build a ten-row test set',[
      ['p','Collect ten real inputs for your task, including the two messiest you can find. Do not invent them. For each one, write down the two or three things a good answer must contain. You do not need the exact words.'],
      [
        'n',
        ['Six ordinary cases, chosen without looking at how the prompt does on them.','Two awkward ones — missing information, unusual format, wrong language.','Two that should be refused or escalated rather than answered.']
      ],
      ['x','You have a ten-row table: each input, and what a good answer must contain. This table is the most useful thing you will make in this chapter. The rest of the chapter runs prompts against it.']
    ]],
    ['do','Score all four versions',[
      ['p','Run each of your four prompt versions on all ten inputs. Mark each output pass or fail against what you wrote down. That is forty quick judgements by hand.'],
      ['code','for name, prompt in versions.items():\n    for row in testset:\n        out = ask(prompt.format(text=row["input"]))\n        print(name, "|", row["id"], "|", out[:90])'],
      ['x','The ranking is often not the one you expected, and the gap between best and worst is often smaller than it felt. The versions differ most on the two refusal rows, and those are the cases people rarely demo.']
    ]],
    ['h','Change one thing at a time'],
    [
      'pred',
      {id:'ch22-one',
       short:true,
       ph:'What goes wrong',
       ask:'Predict: you change the job description, add a third example and drop a prohibition, all at once. The score improves. What have you learned?',
       reveal:'Only that the combination is better. You do not know which change helped, and one of the three may be making things worse while the other two make up for it.',
       then:'So change one thing, rerun and record the score. It is slower, but it is the only way to know what helped. When someone says they “tuned the prompt”, ask how many things they changed at once.'}
    ],
    ['do','Make one change and rescore',[
      ['p','Take the best version. Make exactly one change, such as swapping one example for a better one. Rerun all ten inputs and record the new score next to the old one.'],
      ['x','The score moved, or it did not. Both are useful results. If a change does not move the score on ten real inputs, you can remove it, which makes the prompt cheaper on every call.'],
      ['c','Tip','Keep the table. When your provider updates the model, rerun it. You will find out in an afternoon whether anything broke, instead of hearing it from a customer.']
    ]],
    ['q','I015','I020'],
    ['h','Summary'],
    ['p','You now have a prompt chosen on evidence, and a way to recheck it whenever something changes. Many teams shipping AI features do not have this.'],
    ['p','There is one limit. Everything so far works on text you paste into the prompt. When the answer depends on a document too big to paste, such as a policy, a contract or a handbook, none of these techniques help, because the model never sees the document. Chapter 3 starts on that problem.']
  ],
  capstone:{title:'A test set, and what it found',
   brief:'Build a test set for one real task, use it to make a decision, and keep it. You will rerun it every time the model or prompt changes.',
   steps:['Build a ten-row test set for a real task. Include two rows that should be refused, and the two messiest real inputs you can find.','Score your current best prompt against it and write the number down. This is your baseline.','Make three improvements, one at a time, rescoring after each. Record all four numbers.','Find one change that made no difference and remove it. Note what that saves per call.','Run the whole set against a cheaper or smaller model, and record which rows fail.','Write half a page for a colleague: the prompt, its score, and the two rows it still fails.'],
   done:['You have four scores from four one-at-a-time changes, not one score from a rewrite.','You removed something that did not help, and you know what that saves.','You can say which rows your prompt still fails, and whether it is acceptable to ship it that way.']}
},
{
  /* Arc 2 opens. 2.2 ended on a limit — everything so far works on text you
     paste. That is still true here, deliberately: before the course spends
     five chapters teaching retrieval, it is worth knowing that a large share
     of real requests never needed it. */
  id:'ch23', num:2.3, part:1, minutes:20, labs:[],
  title:'The five task types: classify, extract, summarise, rewrite, generate',
  concept:'Almost every request for AI falls into one of five task types. The type decides whether you can measure the result automatically, so name it before you design anything.',
  needs:[
    ['A prompt is a specification','Four techniques shape what comes back.',2.1],
    ['A test set, and one change at a time','How you tell a better prompt from a different one.',2.2]
  ],
  takeaway:[
    'Name which of the five task types a request is before you design anything.',
    'Explain why two of the types can be graded automatically and three cannot.',
    'Split a vague request into the narrowest task types that still solve the problem.'
  ],
  story:[
    ['c','Before you start','No new setup. Bring the test set from Chapter 2.2. You will see why its rows were easy to grade.'],
    ['p','People describe AI requests as outcomes: <em>Can the AI handle our inbox? Can it help with contracts? Can it make the team faster?</em> None of those is a task. Underneath almost every one is one of five task types, and the type matters more than which model you pick.'],
    ['key','Choose the task type first. It takes one sentence, and it is the design decision most often skipped.'],
    ['h','The five types'],
    [
      'tb',
      ['Task type','What it does','Can a program grade it?'],
      [
        ['<strong>Classify</strong>','Put the input into one of a set of categories','Yes: there is a right answer'],
        ['<strong>Extract</strong>','Pull specific fields out of the input','Yes: the value is in the document or it is not'],
        ['<strong>Summarise</strong>','Make it shorter without losing what matters','No: it depends on the reader'],
        ['<strong>Rewrite</strong>','Keep the meaning, change the form or tone','No, but you can check what must not change'],
        ['<strong>Generate</strong>','Produce something new','No, and most projects start here']
      ]
    ],
    ['p','Classify and extract have right answers. That means you can measure them on the first day. The other three need a person, or a carefully checked process, to judge the output.'],
    ['do','Sort real requests into the five types',[
      ['p','Write down six things people at your work have asked AI to do. Use their words, including the vague ones. Put each one into one of the five types.'],
      ['x','Two things usually happen. Several requests turn out to be the same type in different words. And at least one does not fit any single type, which means it is really two or three tasks combined.'],
      ['key','If a request does not fit one type, split it into steps until each step does.']
    ]],
    ['h','Split mixed requests into steps'],
    ['p','“Handle the inbox” usually hides three tasks: <em>classify</em> the message by type, <em>extract</em> the account number, and <em>generate</em> a draft reply. Each step fails in a different way, and only the first two can be measured without a person reading the output.'],
    ['do','Split the request that did not fit',[
      ['p','Take the request that did not fit a single type. Break it into steps, each with exactly one type, in the order they would run.'],
      ['x','You get three or four steps. Usually only the last step is hard to measure. The earlier steps are classification and extraction, which are cheap and checkable. When they are reliable, the last step has an easier job.'],
      ['p','This also lowers cost. A classification step can run on a small, cheap model. Only the last step needs an expensive model, and only for the cases that reach it.']
    ]],
    [
      'pred',
      {id:'ch23-shape',
       short:true,
       ph:'Which type, and what changes',
       ask:'A colleague asks for “an AI that reviews contracts and flags risky clauses.” Which task type is that?',
       reveal:'Mostly classify, with extract underneath. Each clause goes into a category, such as standard, unusual or missing, and the risky clauses have their text extracted to show. Very little of it is generation.',
       then:'That changes how you build it. Classification has right answers, so you can build an answer key from a hundred clauses a lawyer has already reviewed, and measure quality before you ship. If you had built a generator instead, you would have nothing to measure.'}
    ],
    ['q','I059'],
    ['h','Summary'],
    ['key','Ask “which task type?” before “which model?”. If the answer is more than one type, split the request into steps.'],
    ['p','The next two chapters cover the two types you will meet most often. Chapter 2.4 covers classification, the type with a right answer.']
  ],
  capstone:{title:'Break down one real request',
   brief:'Take the vaguest AI request anyone has made of you and turn it into something you can build. Most of the work is naming task types and putting them in order.',
   steps:['Write the request down in the exact words it was asked in. Do not tidy it.','Write one sentence on what the person wants to be different in their normal week.','Break it into steps, each with exactly one task type, in the order they must run.','Mark which steps have a right answer and which do not. These are the parts you can and cannot measure automatically.','For each measurable step, say where an answer key would come from: who makes that judgement today, and based on what.','Write a one-paragraph reply to the person: what you would build first, and why it is the smallest useful piece.'],
   done:['Every step in your breakdown has exactly one task type.','You can point to the steps that can be graded without a person reading the output.','The first thing you propose to build is measurable, and you can say what you would measure it against.']}
},
{
  id:'ch24', num:2.4, part:1, minutes:25, labs:[],
  title:'Classification: sorting inputs into categories',
  concept:'Classification puts each input into one of a fixed set of categories. It has a right answer, so you can measure it and improve it on purpose. You will build a classifier, score it per category, and decide which errors are cheaper.',
  needs:[
    ['Five task types, and which have right answers','Classification is one that can be graded.',2.3],
    ['A test set shows whether a change helped','Here it becomes an answer key with real numbers.',2.2],
    ['A notebook and a key','You will run one classifier many times.','setup']
  ],
  takeaway:[
    'Build a classifier for a real set of categories and measure it honestly.',
    'Find the category your system is worst at, and say what that costs the business.',
    'Explain why an overall accuracy figure often hides the failure that matters.'
  ],
  story:[
    ['c','Before you start','Open a notebook called <code>chapter-2-4</code> and run the warm-up cells. Bring twenty real examples of something at your work that gets sorted into categories, such as tickets by type, documents by department or requests by urgency.'],
    ['do','Look again at your test set',[
      ['p','Open the ten-row test set from Chapter 2.2. Look at the “good answer contains” column.'],
      ['x','If your task was classification or extraction, those rows are precise: a value, a category, a yes. If it was summarisation, they are vague, and grading them took judgement. The difference comes from the task type, not from how you wrote them.']
    ]],
    ['h','What classification is'],
    ['p','Classification puts each input into one of a fixed set of categories. Much of what useful software does is classification. Its big advantage is that someone can say whether each answer was right.'],
    ['key','When there is a right answer, you can count errors. When you can count errors, you can improve the system on purpose.'],
    ['h','Build a first version'],
    ['do','Build the simplest classifier',[
      ['p','Write the simplest possible version: the categories, one line of instruction, and no examples.'],
      ['code','LABELS = ["billing", "technical", "account", "other"]\n\ndef classify(text):\n    out = ask(\n        "Classify the message into exactly one of: "\n        + ", ".join(LABELS)\n        + ". Reply with the label only.\\n\\n" + text)\n    return out.strip().lower()\n\nfor row in examples[:10]:\n    print(classify(row["text"]), "|", row["truth"])'],
      ['x','Most answers are right, and the wrong ones are of two kinds. Some are real misreadings. Others come back as <code>Billing.</code> or <code>the category is billing</code>. These are not wrong, but your code cannot use them: you asked for a label and got a sentence.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    ['p','Fix the format with the technique from Chapter 2.1: show an example instead of describing it. Add two worked examples, one of them an awkward case, and the format stops varying. Chapter 8 shows how to make other formats impossible, but two examples get you most of the way.'],
    ['h','Measure each category separately'],
    ['do','Score each category',[
      ['p','Grade all twenty against the answers you know. Count results for each category, not just overall.'],
      ['code','from collections import Counter\nhit, miss = Counter(), Counter()\nfor row in examples:\n    got = classify(row["text"])\n    (hit if got == row["truth"] else miss)[row["truth"]] += 1\nfor c in LABELS:\n    n = hit[c] + miss[c]\n    if n: print(c, hit[c], "/", n)'],
      ['x','The overall figure looks good, and one category is much worse than the rest. It is usually the rarest category, or one whose boundary with another category is unclear.'],
      ['key','Report accuracy per category, not only overall. A system that is 92% right overall and 40% right on the urgent category is not good enough for urgent messages.']
    ]],
    [
      'try',
      {id:'ch24-cost',
       mins:4,
       min:40,
       rows:3,
       task:'Take your worst category. Write what happens to a real person when a message in that category goes to the wrong place. Then write what happens in the other direction, when another message is wrongly put in that category.',
       ph:'When a … is missed, … . When something is wrongly marked …, … .',
       after:'The two directions rarely cost the same. Missing an urgent complaint and wrongly flagging a routine one as urgent are both errors, but one is much cheaper. Once you know which, you can tune the system to lean the cheaper way, by making borderline cases fall into the safer category. That is a product decision, based on numbers, and it is yours to make.'}
    ],
    ['q','I061'],
    ['h','Summary'],
    ['p','Most of this chapter was not about AI. An answer key, counts per category, and a judgement about which error is cheaper are the same tools you would use to evaluate a hiring process or a triage desk.'],
    ['p','The next task type, summarisation, has no single right answer. That is why many teams ship summarisers without knowing whether they work.']
  ],
  capstone:{title:'A classifier you would trust to route real work',
   brief:'Build a classifier for a real set of categories at your work, measure it per category, and decide with numbers whether it is good enough to act on its own or only to suggest.',
   steps:['Fix the categories. Include an <em>other</em> or <em>unclear</em> category, so the model is not forced into a wrong answer.','Collect fifty real examples and label them yourself before you run anything.','Build the classifier with two worked examples, one of which is a borderline case.','Measure each category separately, not just overall. Write the results as a table.','For your worst category, write what each direction of error costs. Change the instruction so borderline cases fall the cheaper way, and measure again.','Set a threshold: above what score per category would you let it route work automatically, and below what would it only suggest?'],
   done:['You have per-category scores from fifty examples you labelled before testing.','You made one deliberate change to how borderline cases fall, and measured the effect.','You can state the score at which you would let it act on its own, and whether it is above that score today.']}
},
{
  id:'ch25', num:2.5, part:1, minutes:25, labs:[],
  title:'Summarisation: testing what a summary keeps',
  concept:'A summary that drops the most important line can still read well, so this failure is easy to miss. You will define who a summary is for, then build a test that checks whether the facts that matter survive.',
  needs:[
    ['Some task types have no right answer','Summarisation is the first you meet.',2.3],
    ['Counting per category beats one overall number','The same idea, applied where counting is harder.',2.4],
    ['A notebook and a key','You will summarise one document several ways.','setup']
  ],
  takeaway:[
    'Decide who a summary is for, and what they will do next, before writing the prompt.',
    'Test a summariser for the failure that matters: what it left out.',
    'Explain why “it reads well” tells you almost nothing about a summary.'
  ],
  story:[
    ['c','Before you start','Open a notebook called <code>chapter-2-5</code>. Bring one real document with something important buried in it, such as a deadline, an exception, a liability or a number someone would be upset to miss.'],
    ['h','How summaries fail'],
    ['do','Summarise with a plain instruction',[
      ['p','Summarise your document with the simplest instruction. Then check whether the buried detail is in the summary.'],
      ['code','print(ask("Summarise the following document.\\n\\n" + doc))'],
      ['x','You get a well-organised, fluent summary, and it often leaves out the buried detail. Nothing in it is false. It shortened every part of the document equally, but the important content was concentrated in one place.'],
      ['key','A summary that lost the most important line looks exactly like one that kept it. You have to test for the missing detail directly.']
    ]],
    ['h','Start from the reader'],
    ['p','So before you write a summarisation prompt, answer two questions: who reads this, and what will they do next? A summary is only good or bad for a particular reader and decision.'],
    ['do','Summarise for three different readers',[
      ['p','Summarise the document three times, naming a different reader and decision each time.'],
      ['code','readers = [\n  "a manager deciding whether to escalate today",\n  "a lawyer checking what we are committed to",\n  "a new joiner who needs the background",\n]\nfor r in readers:\n    print("===", r)\n    print(ask(f"Summarise for {r}.\\n\\n{doc}")[:400])'],
      ['x','You get three different summaries. The lawyer’s version keeps the obligations and drops the background. The new joiner’s version does the opposite. Neither is better; each answers a different question. The plain version from the first step was not written for anyone in particular.']
    ]],
    ['h','Test what the summary keeps'],
    ['p','You cannot grade the writing in a summary with a program. You can check whether specific facts made it through.'],
    ['key','For each document, list the facts a reader must not lose, and check every summary for them.'],
    ['do','Build a fact check',[
      ['p','For five real documents, write down the two or three facts a reader must not lose. Then check each summary for them in code.'],
      ['code','must_keep = {\n  "doc1": ["30 days", "Baraka Traders", "auto-renew"],\n  # …five documents…\n}\nfor name, facts in must_keep.items():\n    s = summarise(docs[name])\n    missing = [f for f in facts if f.lower() not in s.lower()]\n    print(name, "missing:", missing or "none")'],
      ['x','You get a miss rate for the thing that matters. The check is crude: a summary can include a fact in different words, and this check will miss it. It is still far more useful than reading five summaries and deciding they look fine.'],
      ['p','Now change one thing. Add <em>“keep every date, amount and named party exactly as written”</em> to the prompt and run it again.'],
      ['x','The miss rate usually drops sharply, and the summaries get a little longer and a little less readable. That is the trade-off, and you now have numbers for both sides.']
    ]],
    ['q','I043'],
    ['h','Summary'],
    ['p','Chapters 2.4 and 2.5 use the same method for two task types: decide what counts as failure, then measure that specific failure instead of reading outputs and forming an impression.'],
    ['p','Everything so far works on a document you can paste into the request. Sometimes the answer is spread across a hundred documents, such as a handbook, a policy library or five years of contracts. These methods do not help there, because the model has never seen those documents. Chapter 3 starts solving that.']
  ],
  capstone:{title:'A summariser with a fact check',
   brief:'Build a summariser for a real document type, and the test that shows it keeps what matters. The test is the main deliverable. Anyone can write the prompt.',
   steps:['Name the reader and the decision. If you cannot name a decision, you cannot say what the summary is for or how to test it.','Take ten real documents. For each, write down the two or three facts a reader would be upset to lose.','Build the summariser and run the fact check on all ten. Record the miss rate.','Make one change, such as an instruction about what to keep word for word, and measure again.','Find a document where a fact survived in different wording and your check missed it. Note what that means for your number.','Write a note to whoever asked for this feature: what it keeps, what it drops, and the miss rate you measured.'],
   done:['You have a miss rate from ten documents, before and after one change.','You found at least one case your own test scores unfairly, and you say so.','The note says who the summary is for, so someone else could test it the same way later.']}
},
{
  id:'ch3', num:3, part:1, minutes:20, labs:['chunker'],
  title:'Chunking: splitting documents into pieces',
  concept:'Models can only read a limited amount of text at once, so long documents are split into smaller pieces called chunks. You will split one document three ways by hand and see what each split loses.',
  plan:{
    first:"Pick a document of five to fifteen pages and write five questions. Cut it into three giant pieces and predict what retrieval will do.",
    build:"Re-cut into fifteen or twenty fixed-size pieces, then into human-sized ones. Record completeness and boundary damage each time.",
    brk:"Find a rule severed from its exception, or a procedure severed from its warning.",
    artifact:"A three-round chunking experiment sheet, and the rule you derived from it.",
    gate:"Defend your chunking strategy from the evidence, not from a default."
  },
  needs:[
    ['There is a size limit','Everything sent in one call has to fit in the context window.',1],
    ['You pay for everything you send','Per token, on every call.',1],
    ['Models invent answers when they have no evidence','So the fix is to give them real evidence.',2]
  ],
  takeaway:[
    'Give the two reasons you cannot send a model every document you have.',
    'Explain what is lost when a document is split into chunks, with a concrete example.',
    'Choose a chunking approach by naming the failure you accept, since no chunk size is right for every document.'
  ],
  capstone:{title:'A chunking rule for your own documents',
   brief:'You have split one document three ways and seen what each split breaks. A real system needs a rule that someone else can apply to thousands of documents without you. Write that rule, and test it on the messiest document you can find.',
   steps:['Name the most structured document type in your field, such as one with clauses, exceptions, numbered procedures or warnings.','Describe its structure in three or four lines. Where are its natural break points, and what must never be separated?','Write the chunking rule as instructions to another person: where to cut, where never to cut, and what to do with a piece that would lose its meaning.','Find the messiest real example you can, such as a badly formatted, scanned or table-heavy document. Apply your rule to it by hand.','Record where your rule broke. Amend it, and note which of your five questions the first version would have answered wrongly.','Write what you would say to a vendor who tells you their chunking is “automatic and optimal”.'],
   done:['Someone else could apply your rule and split a document the same way you would.','You have applied it to a difficult document and amended it once as a result.','You can name the kind of content your rule still risks splitting, and say why you accept that.']},
  story:[
    ['c','Before you start','No code in this chapter. Print one real document you know well, such as a policy, a contract or a procedure of five to fifteen pages. Get a pair of scissors and a pen. You will do every step by hand.'],
    ['do','Write your test questions first',[
      ['p','Before you cut anything, write five specific questions a real user would ask about this document. Write real questions, the kind someone types when they are in a hurry, not topics.'],
      ['x','You have five questions on paper. You will score every experiment in this chapter against them. Write them before cutting, so you cannot choose questions that suit your cuts.']
    ]],
    ['h','Why you cannot send everything'],
    ['p','You want a model to answer questions about your company’s documents. The obvious approach is to send it the documents. That fails for two reasons you already know.'],
    ['p','First, they will not fit: each request has a size limit. Second, you pay for every token you send, on every question. Even when a large document would fit, sending your whole library to answer one question costs far too much.'],
    ['q','I021'],
    ['p','So the standard approach is to split documents into pieces, store the pieces, and send only the few that look relevant to each question. The pieces are called <strong>chunks</strong>, and splitting them is called <strong>chunking</strong>.'],
    ['p','The hard part is deciding where to split. Try splitting a document three ways in this tool and see what breaks:'],
    ['lab','chunker'],
    ['h','Round 1: three large chunks'],
    ['do','Cut the document into thirds',[
      ['p','Cut your document into three rough pieces. Ignore its structure. Then take your five questions one at a time and find which piece holds each answer.'],
      ['x','Every answer is complete. But to deliver a two-line answer, you send a third of the document. Note roughly how much irrelevant text comes with each answer. You would pay for that text on every question.']
    ]],
    ['h','Round 2: twenty small chunks'],
    ['do','Cut the document into small pieces',[
      ['p','Cut a fresh copy into fifteen or twenty pieces, roughly every 150 words, even if that splits a sentence. Run your five questions again, and look for two specific problems.'],
      [
        'l',
        ['<strong>A split answer:</strong> the answer is now spread across two pieces, such as a rule on one card and its exception on the next.','<strong>An orphan:</strong> a piece that means nothing on its own, such as “The aforesaid amount shall lapse.” Which amount?']
      ],
      ['x','You will find both problems in a document you chose yourself. Keep these cards. Chapters 4 and 5 use these exact pieces.']
    ]],
    [
      'pred',
      {id:'ch3-cut',
       rows:3,
       ph:'Your rule, and what it will get wrong',
       ask:'Take a document you know well, such as a policy, a contract or a spec. Write the rule you would give someone for splitting it. Then name one question your rule will answer badly.',
       reveal:'Most sensible rules, such as splitting at paragraphs, headings or numbered clauses, fail in the same place: a rule and its exception end up in different pieces. If only the rule is retrieved, the answer is confident and incomplete, which is worse than no answer.',
       then:'You cannot find a rule with no failures. Instead, know which questions your rule handles badly, and test those questions on purpose.'}
    ],
    ['q','I022','I023'],
    ['h','Orphaned chunks lose their meaning'],
    ['p','The second problem is harder to spot. Some pieces stop making sense once they are cut out. A chunk that starts <em>the aforesaid amount shall be disbursed within sixty days</em> is useless on its own. Which amount? Paid to whom? The answer is in the previous piece.'],
    ['p','Documents are full of these references, especially legal text, but also anything that says “the above”, “this scheme” or “such cases”. People reading the document have the previous paragraph. A chunk does not.'],
    ['h','Round 3: cut along the structure'],
    ['do','Cut the way you think it should be cut',[
      ['p','Cut a fresh copy the way you think it should be cut. Do not overthink it. Then look at what you did.'],
      ['x','You probably followed headings and clause numbers, and made pieces of very different sizes that each make sense on their own. Write one sentence describing the rule you used. This is <strong>structure-aware chunking</strong>: it follows the document’s layout. Semantic chunking is a different approach, which splits text where the topic changes.']
    ]],
    ['key','No chunk size is correct for every document. Each size fails in a different way, so choose based on what your documents look like and what your users ask.'],
    ['p','In a design review, say which failure you chose and why. People often want a single correct chunk size, and there is not one.'],
    [
      'try',
      {id:'ch3-scissors',
       mins:4,
       min:50,
       rows:3,
       task:'State your trade-off. For your document: what size are you cutting at, what does that gain, and what does it lose? Write the sentence you would say in a meeting.',
       ph:'We are cutting at … which gains … and loses …',
       after:'A strong answer names a real loss, specific to your documents. For example: “Clause by clause, with a couple of sentences of overlap. That gives precise answers to questions about one clause, but loses answers that span a clause and its exception, so we test those on purpose.” If you cannot name the loss, you have accepted a default rather than made a choice.'}
    ],
    ['q','I024']
  ]
},
{
  id:'ch4', num:4, part:1, minutes:20, labs:[],
  title:'Keyword search: matching words, and where it fails',
  concept:'The first way to find the right chunk is to match the words in the question. You will run keyword search by hand on your own chunks, find exactly where it fails, and see the one case where it wins.',
  plan:{
    first:"Using only Ctrl-F and your own eyes, rank your chapter 3 questions against your chunks. No common sense allowed.",
    build:"Add a synonym question, a plain-language question, a second-language question, and one containing an exact identifier.",
    brk:"Ask something the document genuinely cannot answer, and find the chunk that still ranks first.",
    artifact:"A retrieval failure map.",
    gate:"Explain why returning a result does not mean an answer exists."
  },
  needs:[
    ['Documents are split into chunks','You store the chunks and send only the relevant few.',3],
    ['Some chunks lose their meaning','“The aforesaid amount” no longer says which amount.',3]
  ],
  takeaway:[
    'Explain why keyword search fails most for the users who most need help.',
    'Name the kind of query keyword search handles better than any other method.',
    'Explain what search returns when the answer is not in your documents, and why that is dangerous.'
  ],
  capstone:{title:'Map where keyword search fails',
   brief:'You scored a search method by hand, on real questions, against a real document. Most people who buy search software never do this. Write up your results so you can use them when someone tries to sell you a search product.',
   steps:['Make a table of all eight questions (your five plus the three harder ones), with the rank the correct card actually got.','Next to each failure, write one sentence on what information the scoring did not have.','Add the exact-code question and its result, so the table shows where the method wins as well as where it fails.','Write a short paragraph about your own field: which real queries use different words from the documents, and which use exact codes or terms?','Estimate what share of your users use the document’s vocabulary rather than their own. Say how you would measure this for real.','Write four or five sentences for a non-technical colleague explaining why “we already have a search box” does not mean “users can find answers”.'],
   done:['The table has a rank for every question, including the ones that worked.','Every failure has its one-sentence explanation, in your words.','You could give the last paragraph to a senior colleague, and they would understand the risk without you there.']},
  story:[
    ['c','Before you start','No code yet. Bring the twenty cards you cut in Chapter 3 and the five questions you wrote before cutting. In this chapter you act as the search engine.'],
    ['p','You have a document split into twenty chunks. A question arrives. Something has to decide which chunks to send to the model.'],
    ['p','The obvious method, used by search boxes for decades, is to match words. If the question says <em>refund</em>, find the chunks that contain <em>refund</em>. It is fast and cheap. This is called <strong>keyword search</strong>.'],
    ['h','Keyword search matches spelling, not meaning'],
    [
      'try',
      {id:'ch4-terms',
       mins:3,
       min:20,
       rows:2,
       task:'Try it by hand first. A user types: <em>when do I get my money back?</em> Your document is a company policy. Write the words keyword search would look for. Then write the words the policy probably uses instead.',
       ph:'What the user typed → what the document says',
       after:'The user wrote <em>money</em>, <em>back</em> and <em>get</em>. The policy says <em>reimbursement</em>, <em>disbursement</em>, <em>credited to the registered account</em> and <em>the aforesaid amount</em>. The two lists share no words at all, even though the question is clear and the paragraph answers it.'}
    ],
    ['key','Keyword search compares spelling, not meaning. Two sentences that mean the same thing but share no words do not match.'],
    ['q','I025'],
    ['h','Run keyword search by hand'],
    ['do','Act as the search engine',[
      ['p','Run keyword search by hand on all five questions against all twenty cards. Underline the important words in the question, find them in the cards, give one point per match, and rank the cards by score.'],
      ['c','Watch out','Do not use your own understanding of the document. Only the scores count.'],
      ['p','For each question, record two things: did the top-scoring card contain the answer, and if not, what rank did the right card get?'],
      ['x','Clearly worded questions do surprisingly well. That result is misleading: you wrote these questions after reading the document, so you used its vocabulary. Real users usually have not read it.']
    ]],
    ['do','Write three harder questions',[
      ['p','Write three new questions about the same document, each designed to make keyword search fail:'],
      [
        'n',
        ['<strong>A synonym question:</strong> take a formal term from the document and reword it the way most people would say it.','<strong>A plain-language question:</strong> write it the way a first-time user, who does not know the document’s vocabulary, would type it.','<strong>A second-language question:</strong> ask the same thing in another language your users actually use.']
      ],
      ['p','Score all three by hand in the same way.'],
      ['x','The cards that clearly hold the answer score close to zero, and yet some card still comes out on top. For each question, write one sentence: what information did the scoring not have?']
    ]],
    ['h','Where keyword search fails'],
    ['p','These failures are predictable. They happen most in three places, and all three matter to a business:'],
    [
      'l',
      ['<strong>Formal language versus everyday language.</strong> Documents say <em>termination for convenience</em>; people say <em>cancel</em>. Specialists write the documents, and everyone else writes the questions.','<strong>The users who most need help.</strong> Someone who knows your product uses your vocabulary and finds things. Someone confused uses their own words and finds nothing. Keyword search works worst for the users with the biggest problems.','<strong>Questions.</strong> “Why was I charged twice?” shares almost no words with the paragraph explaining duplicate authorisation holds.']
    ],
    ['q','I027'],
    ['h','Where keyword search wins'],
    ['p','Keyword search is excellent at some things: exact codes, section numbers, policy IDs, part numbers and names. If a user types <em>clause 14.2</em>, they want clause 14.2, and finding that exact text is the right approach.'],
    ['do','Search for an exact code',[
      ['p','Ask a question that contains an exact code, section number or defined term copied from the document.'],
      ['x','An exact code or defined term usually ranks high with keyword search. Record its actual rank rather than assuming. This is the strength that meaning-based search, in the next chapter, adds to rather than replaces.']
    ]],
    ['q','I026'],
    ['h','Search always returns something'],
    ['p','One more property causes serious problems later.'],
    [
      'pred',
      {id:'ch4-norank',
       short:true,
       ph:'One line',
       ask:'Predict: a user asks something your documents do not cover at all. What does the search step return?',
       reveal:'Twenty chunks, ranked, with one at the top. Search has no concept of “nothing here”. It scores everything and sorts. The top result for an unanswerable question is just the least bad of a bad set.',
       then:'Now combine that with Chapter 2. The irrelevant chunk is passed to the model as if it were evidence, and the model writes a fluent answer from it. No step reports an error. You get a confident, wrong answer, and nothing in the system notices.'}
    ],
    ['q','I028'],
    ['do','Name the missing capability',[
      ['p','Look at your three harder questions. Write one sentence describing the capability keyword search is missing. Describe the gap, not the fix.'],
      ['x','Something like: <em>it can compare spellings but not meanings.</em> Keep that sentence. Chapter 5 fills this gap. If you can, wait a day before reading it.']
    ]],
    ['h','Summary'],
    ['p','Keyword search cannot see meaning, and it never reports that it found nothing. Chapter 5 fixes the first problem. Chapter 6 deals with the second, which is harder and more important.']
  ]
},

{
  id:'ch5', num:5, part:1, minutes:25, labs:['meaningmap'],
  title:'Embeddings: searching by meaning',
  concept:'An embedding turns text into a list of numbers that places it on a map of meanings. Texts that mean similar things get similar numbers, even when they share no words. You will build this in code and use it on the questions keyword search failed.',
  plan:{
    first:"Predict which of your chapter 4 failures meaning-matching will cure, and which will survive it.",
    build:"Embed the chunks and the questions, score them by nearness, retrieve the top few and compare the ranks against yesterday's.",
    brk:"Test the exact-identifier question, the unanswerable one, and the second-language one.",
    artifact:"A keyword-versus-semantic leaderboard, and your own hybrid-search hypothesis.",
    gate:"Explain embeddings from the results you observed, not from the definition."
  },
  needs:[
    ['A notebook and a key','This chapter turns the idea into real code.','setup'],
    ['Keyword search cannot see meaning','Two sentences with the same meaning and no shared words do not match.',4],
    ['Search always returns something','It ranks everything and returns a top result regardless.',4]
  ],
  takeaway:[
    'Explain in plain words how a computer can tell that two differently worded sentences mean the same thing.',
    'Say what a similarity score of 0.5 does and does not mean.',
    'Name a place where embeddings would fail on your own company’s vocabulary.'
  ],
  capstone:{title:'Compare keyword and meaning search on your own document',
   brief:'You have run both methods on the same cards with the same questions: by hand in Chapter 4, and in code here. Few people have this comparison for their own documents. Write it up properly, including any case where the new method does worse.',
   steps:['Make one table of all eight questions: the rank keyword search gave the correct card, and the rank meaning search gives it now.','Check your exact-code question. If it got worse, that is a reason to combine both methods (hybrid search) on your data. Note it in one line.','Test your second language properly: embed a domain term and its translation, compute the similarity, then run two or three real questions in that language.','Write the result in three bullets: where meaning search helps your users, where it is weak, and what you would check before trusting it in production.','Ask three questions the document cannot answer, and record the top scores. Chapter 6 uses these numbers to set a threshold.','Write four or five sentences a non-technical colleague could follow: how the system finds meaning, and why “it found something” does not mean “the answer exists”.'],
   done:['The table has both ranks for all eight questions, from runs you did.','You have a measured number for how your second language behaves.','You can name one thing meaning search did not fix, and point to the run that shows it.']},
  story:[
    ['c','Before you start','Open a notebook called <code>chapter-5</code> and run the three warm-up cells from <a href="#/setup">Setup</a>. Have the twenty cards from Chapter 3 and the three harder questions from Chapter 4 ready. This is the longest hands-on chapter in Part I, so give it one full sitting.'],
    ['h','A map of meanings'],
    ['p','You need a way to match meaning instead of spelling. That sounds like it requires a computer that understands language. The actual method is simpler.'],
    ['p','Imagine a very large map where every sentence has a position. Sentences with similar meanings sit close together, and unrelated sentences sit far apart. <em>When do I get my money back</em> and <em>reimbursement of approved claims</em> are close, even though they share no words.'],
    ['p','A separate, smaller model places text on this map. You give it text, and it returns a long list of numbers: the text’s coordinates. That list is called an <strong>embedding</strong>, and the model that makes it is an <strong>embedding model</strong>.'],
    ['q','I029'],
    ['p','Once every chunk has a position, finding relevant chunks becomes a distance calculation. Get the position of the question, then find the chunks closest to it. Comparing two positions gives one number: how similar they are. Try it here:'],
    ['lab','meaningmap'],
    [
      'pred',
      {id:'ch5-sim',
       short:true,
       ph:'A number between 0 and 1',
       ask:'Predict before you check: <em>when do I get my money back?</em> and <em>disbursement of approved claim amounts</em> share no words. How similar will they score?',
       reveal:'High, usually above 0.6 and often near 0.8. The position comes from meaning, so two texts that mean the same thing land close together, however they are worded.',
       then:'Watch out with this scale. The score can run from −1 to 1, but real text rarely scores below about 0.1. So 0.5 does not mean “half similar”; it is near the low end of the useful range. A similarity number means little unless you also know what clearly good and clearly bad matches score.'}
    ],
    ['q','I032'],
    ['h','Build it in code'],
    ['do','Create embeddings and compare them',[
      ['p','Type this carefully. It is the most important code in Part I. It turns text into an embedding, then measures how similar two embeddings are.'],
      ['code','import numpy as np\n\ndef embed(texts, input_type):\n    resp = client.embeddings.create(\n        model="nvidia/nv-embedqa-e5-v5",\n        input=texts,\n        extra_body={"input_type": input_type,\n                    "truncate": "END"}\n    )\n    return [np.array(d.embedding) for d in resp.data]\n\ndef cosine(a, b):\n    return float(np.dot(a, b) /\n                 (np.linalg.norm(a) * np.linalg.norm(b)))\n\nwords = ["contract", "agreement", "MoU", "sandwich"]\nvecs = embed(words, "passage")\nprint("numbers per address:", len(vecs[0]))\nfor i in range(len(words)):\n    for j in range(i + 1, len(words)):\n        print(words[i], "vs", words[j],\n              round(cosine(vecs[i], vecs[j]), 3))'],
      ['x','Each embedding has 1,024 numbers. <code>contract</code>, <code>agreement</code> and <code>MoU</code> score high with each other, around 0.5 to 0.8. Every pair that includes <code>sandwich</code> scores clearly lower. You have just measured meaning with one line of arithmetic.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    ['h','Questions and passages are embedded differently'],
    ['p','A question is short and phrased as a question. The passage that answers it is longer and phrased as a statement. Good embedding models are trained with this difference in mind, and expect you to say which one you are embedding. If you get this wrong, nothing breaks, but results get quietly worse.'],
    ['q','I030'],
    ['h','Search your own chunks by meaning'],
    ['do','Rerun the questions keyword search failed',[
      ['p','Paste in the text of the cards you cut in Chapter 3, as a list, and create an embedding for each one.'],
      ['code','chunks = [\n    "…paste the text of card 1…",\n    "…card 2…",\n    # …all fifteen or twenty of them…\n]\nchunk_vecs = embed(chunks, "passage")\n\ndef retrieve(question, k=3):\n    q = embed([question], "query")[0]\n    scores = [cosine(q, cv) for cv in chunk_vecs]\n    ranked = sorted(range(len(chunks)),\n                    key=lambda i: scores[i], reverse=True)\n    for i in ranked[:k]:\n        print(round(scores[i], 3), "| chunk", i,\n              "|", chunks[i][:80], "…")\n\nretrieve("your synonym assassin from Chapter 4")'],
      ['x','Questions that scored zero with keyword search may now rank the correct card much higher. Run all three harder questions and compare with your handwritten rankings. The second-language result depends on this model and your documents, so write down the actual ranks and scores.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    ['do','Ask something the document does not cover',[
      ['p','Ask a question the document cannot answer. Not a hard question; an unrelated one.'],
      ['code','retrieve("what does this document say about cricket?")'],
      ['x','Three chunks come back anyway, with scores around 0.2 to 0.4 that do not obviously look wrong. Search still never says “nothing here”. And without a baseline, you cannot yet tell a low score from a normal one. Chapter 6 builds that baseline.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    ['h','Where embeddings fail'],
    ['p','An embedding model is only as good as the text it learned from, which was mostly English text from the internet. If your vocabulary was rare in that text, the model places it badly. Two things your users see as different may end up close together, or two things they see as the same may end up far apart.'],
    [
      'try',
      {id:'ch5-map',
       mins:4,
       min:40,
       rows:3,
       task:'Think about your own domain and users. Where would a model trained mostly on English internet text put two things close together that your users see as different, or far apart when your users mean the same thing?',
       ph:'In our domain the model would get … wrong, because …',
       after:'Indian financial and legal vocabulary has many examples: <em>lakh</em> and <em>crore</em>, NEFT and IMPS, and government scheme names that differ by one word but mean very different amounts. Regional languages typed in English letters, such as <em>paisa kab milega</em>, are another. So are internal terms: two product codenames mean different things to you and nothing to the model, so it places them by spelling. Try to name these failures before a user finds them.'}
    ],
    ['q','I031'],
    ['h','Summary'],
    ['p','Embeddings are the basis of most “chat with your documents” products. They work well. But they still return the nearest chunks every time, even when nothing is close, so the problem from Chapter 4 remains. Chapter 6 shows how to measure it.']
  ]
},
{
  id:'ch6', num:6, part:1, minutes:25, labs:['prdial'],
  title:'Evaluation: measuring whether search works',
  concept:'A good demo is not evidence. You will write an answer key before testing, measure how often search finds the right chunk, and see how precision and recall trade against each other.',
  plan:{
    first:"Predict how many of ten questions will retrieve correctly at k=3. Write the number down and circle it.",
    build:"Build ground truth including one unanswerable case, then measure at k=1, k=3 and k=8.",
    brk:"Change one retrieval variable and re-run the whole set.",
    artifact:"An evaluation table, acceptance criteria, and a release threshold.",
    gate:"Defend why the quality bar depends on what the failure costs, not on the technology."
  },
  needs:[
    ['Search always returns something','It returns a ranked list whatever you ask.',4],
    ['Embeddings find the nearest chunks','Which is not the same as finding the right answer.',5]
  ],
  takeaway:[
    'Explain what a team must build before it can honestly claim an accuracy number.',
    'Describe the two ways a search step fails, and why fixing one tends to worsen the other.',
    'Decide which failure is worse for a feature you work on, and defend the choice.'
  ],
  capstone:{title:'Write a ship-or-not memo',
   brief:'You now have real numbers from your own documents at three settings. Turn them into a recommendation someone could act on. Include the part most memos avoid: which failure you have decided to accept, and who made that call.',
   steps:['State the use case in one line, and who is affected when it is wrong.','Add your table: the three values of k, with correct-card hits and the share of relevant chunks at each.','Recommend a k for a customer-facing assistant, and a different one for an internal drafting tool. If they are the same, reconsider.','Write five acceptance criteria in the style of a test plan, including one for the unanswerable question and one for a second language.','Add the cost line: what k does to tokens per query, and to the monthly bill at a realistic volume.','End with the gap between your prediction and the measured result, and what you now think a demo is worth as evidence.'],
   done:['Every number in the memo came from a run you did.','The two recommended values of k differ, and the reason is about consequences, not technology.','Someone could use your acceptance criteria to test a vendor’s system next week.']},
  story:[
    ['c','Before you start','You need a pen and paper, plus your <code>chapter-5</code> notebook for the measurements. Bring the document from Chapter 3 and the <code>retrieve</code> function from Chapter 5.'],
    ['p','Every AI project reaches the point where someone senior asks: is it good? Often the answer is a demo of three questions that work. A demo that works on three questions does not tell you how often the system is right.'],
    ['p','Measuring properly is not complicated. If you have written acceptance criteria before, you already know most of it. It comes down to three ideas.'],
    ['h','Idea 1: Write the answers before you test'],
    ['p','You cannot judge a system by asking it questions and checking whether the answers look right. They will look right, because plausible text is what the model produces. So first write a list of real questions with their verified correct answers. This list is called <strong>ground truth</strong>. It is an answer key, written before the test.'],
    ['p','Ten to thirty questions is enough to start. Use real questions, in the words users actually use. Questions written after reading the documents will use the documents’ words and make search look better than it is.'],
    ['q','I040'],
    ['do','Write the answer key',[
      ['p','Using your Chapter 3 document, write ten questions: the eight you already have plus two new ones. One new question must be unanswerable, about something the document does not cover.'],
      ['p','For each question, record the verified answer and the number of the card or cards that contain it. Verified means you checked, not remembered.'],
      ['x','You have a ten-row table written before any measurement. This is your ground truth. Include an unanswerable row in every answer key you write.']
    ]],
    [
      'pred',
      {id:'ch6-first',
       short:true,
       ph:'A fraction, like 6/10',
       ask:'Predict: you build a search step, write ten honest questions and run them. How many will find the right chunk on the first try?',
       reveal:'Six or seven out of ten is a normal, healthy first result for a working system.',
       then:'If you got nine or ten, the likely reason is that you wrote the questions after reading the documents. That tests whether search can find text using its own words, which is not what users do.'}
    ],
    ['c','Tip','When a vendor quotes an accuracy number, ask: <em>against which answer key, written by whom, and can I see the questions?</em> If they cannot show you, the number is not evidence.'],
    ['q','I103'],
    ['do','Predict, then measure',[
      ['p','Before you run anything, predict: of the nine answerable questions, how many will return the right card with <code>k=3</code>? Write the number down.'],
      ['code','for q in questions:          # all ten\n    print("—", q)\n    retrieve(q, k=3)'],
      ['p','Grade the run against your answer key. Count how many of the nine succeeded, how many of the twenty-seven returned cards were relevant, and what came back for the unanswerable question, with its top score.'],
      ['x','Compare the result with your prediction. Most people predict too high. Write one sentence about the size of your gap. That gap is why a demo should not decide whether a system ships.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    ['h','Idea 2: Precision and recall trade against each other'],
    ['p','Imagine asking an assistant to fetch the files for a meeting. It can fail in two ways: leave out something that mattered, or give you lots of things that did not.'],
    ['p','Leaving out what mattered is poor <strong>recall</strong>. Returning lots of irrelevant material is poor <strong>precision</strong>. The setting between them is how many chunks you fetch per question, usually called <strong>k</strong>. A higher k usually improves recall and lowers precision. A lower k does the reverse. These are tendencies, not guarantees, so measure them on your own questions.'],
    ['p','You usually cannot maximise both. Try changing k and watch:'],
    ['do','Change k and compare',[
      ['p','Grade the same ten questions again at <code>k=1</code> and at <code>k=8</code>, and fill in this table by hand:'],
      [
        'tb',
        ['k','correct-card hits (of 9)','relevant / total fetched'],
        [['1','… / 9','… / 9'],['3','… / 9','… / 27'],['8','… / 9','… / 72']]
      ],
      ['x','A higher k often finds more correct cards but returns a lower share of relevant ones. Measure both on your documents. More chunks also means more tokens per request; the actual cost also depends on chunk sizes, prompt length, output length, caching and pricing. Record real token counts and latency before deciding.']
    ]],
    ['lab','prdial'],
    ['q','I044','I045'],
    ['h','Idea 3: Which failure is worse depends on the product'],
    ['p','Which failure matters more is a product decision, not an engineering one.'],
    ['p','For a customer-facing bot that answers policy questions, low precision is the dangerous failure. The model builds a confident, wrong answer from irrelevant material, and a wrong policy given to a customer is a liability. Missing an answer only creates a support ticket.'],
    ['p','For a tool that helps a lawyer find precedents, it is the opposite. A missed precedent can lose a case. An extra irrelevant result costs thirty seconds of reading.'],
    ['key','Choose the failure to minimise based on what happens to a real person when each one occurs. The product owner makes this decision, not the person who built the system.'],
    [
      'try',
      {id:'ch6-fatal',
       mins:5,
       min:50,
       rows:4,
       task:'For something you work on: which failure is cheap and which is dangerous? Explain in terms of what happens to a real user. Then say how many chunks you would fetch as a starting point.',
       ph:'For … the dangerous failure is … because … so I would start at k = …',
       after:'A strong answer links the choice to a consequence. For example: “For our support assistant, irrelevant results are dangerous, because a wrong policy quoted to a customer creates a liability we then have to honour. Missing an answer only creates a ticket we were already getting. So we prioritise precision, start with a low k, and give the assistant a clear way to say it does not know.” The reasoning matters more than the number.'}
    ],
    ['q','I046'],
    ['h','Summary'],
    ['p','Most people discussing an AI feature do not have an answer key. With one, you can say whether the system works, with a number you measured yourself.']
  ]
},

{
  id:'ch7', num:7, part:1, minutes:25, labs:['redmap'],
  title:'Putting it together: retrieval-augmented generation (RAG)',
  concept:'You have already built every part of a RAG system in Chapters 1–6. In this chapter you assemble them into one function, name the pattern, and mark every place it can fail without an error.',
  plan:{
    first:"Draw the complete system from memory and mark every failure you have personally watched happen.",
    build:"Implement the smallest end-to-end retrieval answer function, with evidence ids and the usage block.",
    brk:"Test a no-answer question, poisoned retrieved content, and the system with its instruction removed.",
    artifact:"A red-marked architecture and failure map, plus a working demo.",
    gate:"Explain every layer without hiding behind a framework."
  },
  needs:[
    ['A notebook and a key','You assemble the whole system in this chapter.','setup'],
    ['Documents are split into chunks','Because of the size limit and the cost.',3],
    ['Embeddings find relevant chunks','By meaning, not by shared words.',5],
    ['An answer key shows whether it works','And which failure you chose to accept.',6]
  ],
  takeaway:[
    'Draw the standard architecture behind most “chat with your documents” products.',
    'Point to each step and say what can go wrong there without any error appearing.',
    'Rank the usual fixes by how much they help, and explain why a bigger model is rarely the best one.'
  ],
  capstone:{title:'A findings page, and what to learn next',
   brief:'This is the last capstone in Part I, and it is not a build. You have a working system and a list of the ways you have seen it fail. Write the document you would want in front of you the next time someone demonstrates a RAG product and asks for budget.',
   steps:['List every failure from your red-marked diagram. Next to each one, note the chapter where you saw it and what you saw.','For each failure, add the question you would ask a vendor to find out whether they have solved it or hidden it.','Go back to your predictions from Chapter 1. Name the three beliefs that changed most, and what changed them.','Explain the pipeline in five sentences with no jargon. At the end, add: “This is called RAG.”','List what Part I did <em>not</em> cover: choosing an embedding model, vector databases, reranking, hybrid search in practice, agents, fine-tuning and deployment.','Put that list in order. Which topic would change an outcome you own, and why that one first?'],
   done:['Every failure on the page is backed by evidence you produced yourself.','The five-sentence explanation makes sense when read aloud to someone with no technical background.','Your list of next topics is ordered by consequence, not by how interesting they sound.']},
  story:[
    ['c','Before you start','Open a notebook called <code>chapter-7</code> and run the warm-up cells. Keep your <code>chapter-5</code> notebook open. You will copy across your <code>embed</code>, <code>cosine</code>, <code>chunks</code> and <code>chunk_vecs</code>. Nothing in this chapter is new.'],
    ['h','The pattern has a name: RAG'],
    ['p','Here is what you have built so far. You split documents into chunks and create an embedding for each chunk. For each question, you find the closest chunks and send them to the model with the question. The model answers from those chunks.'],
    ['p','This pattern is called <strong>RAG</strong>, short for retrieval-augmented generation. <em>Generation</em> is the text model from Chapter 1. <em>Retrieval</em> is the search from Chapters 4 and 5. RAG is the most widely deployed pattern in applied AI, and most products that answer questions about your documents use it.'],
    ['c','Note','The course held back the name until now on purpose. You have built and broken every part of it, so the term refers to something you have done rather than something you memorised.'],
    [
      'try',
      {id:'ch7-draw',
       mins:6,
       min:60,
       rows:6,
       task:'Without looking back, write the steps as a numbered list, from a document arriving to an answer reaching a user. Then star every step where a wrong answer can be produced <em>without any error appearing</em>.',
       ph:'1. … 2. … (star the silent failures)',
       after:'The steps: split into chunks → create embeddings → store them → embed the question → find the nearest chunks → send them with the question → generate the answer → show it with its sources. Almost every step can fail silently. Chunking can separate a rule from its exception. Search returns a top result even when your documents have no answer. The model writes fluently from an irrelevant chunk. None of these produce an error. The system does not crash; it just becomes wrong while every component reports success.'}
    ],
    ['q','I114','I116'],
    ['h','Mark where it fails'],
    ['do','Draw the pipeline and mark the failures',[
      ['p','Close everything. On paper, draw the whole path: documents → chunks → embeddings → storage → question → question embedding → nearest chunks → prompt assembled → answer. Next to each arrow, write what happens there.'],
      ['p','Then, in red, mark every place you have seen it fail yourself.'],
      ['x','You should find at least six. Candidates include the invented answer, the system prompt giving way under pressure, the split answer and the orphaned chunk. Others are keyword search missing meaning, search never returning “nothing”, the query-versus-passage mistake, felt versus measured quality, and the cost of every token. If you have fewer than six, check the earlier chapters again.']
    ]],
    ['h','Assemble the system'],
    ['do','Build the RAG function',[
      ['p','Paste in your chunks from Chapter 5 first. Then add this function. Each line is something you built earlier, in the chapter noted beside it.'],
      ['code','def rag_answer(question, k=3):\n    q = embed([question], "query")[0]          # Ch 5\n    scores = [cosine(q, cv) for cv in chunk_vecs]\n    ranked = sorted(range(len(chunks)),\n                    key=lambda i: scores[i], reverse=True)\n    context = "\\n\\n".join(              # Ch 3 and 6 — the k dial\n        chunks[i] for i in ranked[:k])\n    resp = client.chat.completions.create(     # Ch 1\n        model="meta/llama-3.1-8b-instruct",\n        temperature=0,                         # Ch 2\n        messages=[\n          {"role": "system", "content":         # Ch 2 briefing\n            "Answer ONLY from the provided context. If the "\n            "answer is not in the context, reply exactly: "\n            "\'Not found in the provided documents.\' "\n            "Never invent details."},\n          {"role": "user", "content":\n            f"Context:\\n{context}\\n\\nQuestion: {question}"}\n        ]\n    )\n    return resp.choices[0].message.content'],
      ['p','Run it three times, with three different kinds of question:'],
      ['code','print(rag_answer("something your document CAN answer"))\nprint(rag_answer("your Chapter 4 synonym assassin"))\nprint(rag_answer("what does this say about cricket?"))'],
      ['x','Check the first answer against your source document. The second tests whether meaning search found evidence that keyword search missed. The third tests what happens when there is no answer. A refusal is not guaranteed, so record what actually happens. Retrieval plus instructions can reduce unsupported answers, not eliminate them.'],
      ['key','Treat the third run as a test result, not proof of safety. Keep that question in your test set, and rerun it whenever the model, prompt, retrieval or documents change.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You have run a cell that needs something an earlier cell made, without running that earlier one first. Scroll to the top, run the warm-up cells in order, then come back to this one. This is the most common thing that goes wrong in a notebook, it happens to everybody, and it says nothing about your code.','An authentication error, or the number 401','The key did not reach the code. Re-run the cell that loads it, and check the name you saved it under matches <a href="#/setup">Setup</a> exactly — capital letters count.','A message about a module not being found','The install cell has not run in this session. Notebooks forget their installs whenever they disconnect, which they do after a while of being left alone. Run it again and carry on.','It runs, but your numbers are not the ones printed above','Expected, and not a mistake. Models change and your text is not my text. What matters is the direction and the rough size of the gap, never matching a figure exactly. If your numbers move the same way mine do, the experiment worked.']
      ]
    ]],
    ['do','Remove the system prompt',[
      ['p','Delete the system message and keep everything else. Ask about cricket again.'],
      ['x','The model happily summarises whatever three irrelevant chunks ranked highest. Retrieval alone does not stop invented answers. You need both the evidence and the instruction; removing either one lets the problem back in. Put the system message back.']
    ]],
    ['h','Diagnose “bad answers”'],
    ['p','When someone says their AI assistant gives bad answers, that is a symptom, not a diagnosis. At least four different problems look the same from the outside, and each has a different fix. This map shows where each one lives:'],
    ['lab','redmap'],
    [
      'pred',
      {id:'ch7-spend',
       rows:3,
       ph:'Your ranking, biggest impact first',
       ask:'You have one quarter to improve answer quality. Before reading on, rank these options: a more expensive model, better chunking, a reranking step, more work on the instructions, and cleaning up the documents.',
       reveal:'Cleaning the documents and fixing the chunking usually help most. A reranking step is usually the next cheapest large improvement. A more expensive model usually costs the most and helps the least, because the model could already read; the right evidence was not reaching it.',
       then:'This is a useful general rule: in a RAG system, quality problems are usually evidence problems, not model problems. Spend your effort on getting the right evidence to the model.'}
    ],
    ['q','I117'],
    ['h','Summary'],
    ['p','You have built a complete RAG system, from chunking to a grounded answer, and you have seen each part fail. Part II adds what this version still cannot do: structured output, tools, larger contexts and stronger retrieval.'],
    ['q','I118']
  ]
}

];

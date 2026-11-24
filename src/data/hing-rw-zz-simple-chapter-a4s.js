/* Hinglish for Spreadsheet basics: the formulas this course uses (chapter:a4s), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'A4 sizes a market, and Chapter 15 works out what a feature costs. Both are done in a spreadsheet. This short chapter teaches the few formulas they need. The sheet sits right here on this page. You learn cells, a formula, SUM, percentages and ROUND.':
    'A4 ek bazaar ka size nikalta hai, aur Chapter 15 batata hai ki ek feature par kitna kharch aata hai. Dono spreadsheet mein hote hain. Yeh chhota chapter unhe chahiye woh chand formulas sikhata hai. Sheet isi page par maujood hai. Aap cells, formula, SUM, percentages aur ROUND seekhte hain.',
  'Point to a cell by its address, like B2, and write a formula that uses it.':
    'Ek cell ko uske pate se bataiye, jaise B2, aur ek formula likhiye jo use kaam mein le.',
  'Add up a column with SUM. Work with percentages and ROUND.':
    'SUM se ek column jodiye. Percentages aur ROUND ke saath kaam kijiye.',
  'Build a small estimate that changes by itself when you change one number.':
    'Ek chhota andaaza banaiye jo ek number badalte hi khud badal jaye.',
  'The numbers from A3':
    'A3 ke numbers',
  'The examples use the support numbers from A3, like three hundred tickets a week. All the maths you need is adding and multiplying.':
    'Examples A3 ke support numbers lete hain, jaise hafte ke teen sau tickets. Aapko sirf jodna aur gunna aana chahiye.',
  'You need nothing else. The sheet you work in is on this page, and it is saved with your progress. Google Sheets and Excel use the same formulas, so all of this works there too.':
    'Aapko kuch aur nahi chahiye. Jis sheet par aap kaam karte hain woh isi page par hai, aur aapki progress ke saath save hoti hai. Google Sheets aur Excel mein wahi formulas chalte hain, isliye yeh sab wahan bhi chalta hai.',
  'A spreadsheet is a grid of boxes called <strong>cells</strong>. Columns have letters and rows have numbers. So every cell has an address, like a seat number in a cinema: <code>B2</code> is column B, row 2.':
    'Spreadsheet khaanon ka ek jaal hai, jinhe <strong>cells</strong> kehte hain. Columns ke akshar hote hain aur rows ke number. Isliye har cell ka ek pata hota hai, cinema ke seat number jaisa: <code>B2</code> matlab column B, row 2.',
  'Why does this course use one? Because its numbers change. A market size or a cost estimate rests on guesses. A good sheet lets you change one guess and watch every total change with it.':
    'Is course mein yeh kyun use hota hai? Kyunki iske numbers badalte rehte hain. Bazaar ka size ya kharch ka andaaza andaazon par tika hota hai. Achhi sheet mein aap ek andaaza badalte hain aur har total uske saath badalta dikhta hai.',
  'Type each number once, in its own cell. Make every total a formula that points at those cells. Then changing one number updates everything.':
    'Har number ek baar, apne cell mein likhiye. Har total ko ek formula banaiye jo un cells ki taraf dikhaye. Phir ek number badalne par sab kuch badal jata hai.',
  'This is the sheet for the whole chapter. Click a cell to type in it. Press Enter to move down.':
    'Yeh poore chapter ki sheet hai. Cell par click karke usme likhiye. Neeche jaane ke liye Enter dabaiye.',
  'A3.5 Spreadsheet basics':
    'A3.5 Spreadsheet basics',
  'A formula starts with =':
    'Formula = se shuru hota hai',
  'When a cell starts with <code>=</code>, the sheet works out the answer. It does not show what you typed. <code>=B2*B3</code> means “B2 times B3”. Use <code>+</code> to add, <code>-</code> to take away, <code>*</code> to multiply and <code>/</code> to divide. It is like a calculator that remembers.':
    'Jab cell <code>=</code> se shuru hota hai, sheet jawaab nikalti hai. Woh aapka type kiya hua nahi dikhati. <code>=B2*B3</code> ka matlab “B2 guna B3”. Jodne ke liye <code>+</code>, ghatane ke liye <code>-</code>, gunne ke liye <code>*</code> aur bhaag ke liye <code>/</code> lagaiye. Yeh ek calculator hai jo yaad rakhta hai.',
  'Your first formula':
    'Aapka pehla formula',
  'In <code>A2</code> type <em>Tickets a week</em>. In <code>B2</code> type <code>300</code>.':
    '<code>A2</code> mein <em>Tickets a week</em> likhiye. <code>B2</code> mein <code>300</code> likhiye.',
  'In <code>A3</code> type <em>Weeks a year</em>. In <code>B3</code> type <code>52</code>.':
    '<code>A3</code> mein <em>Weeks a year</em> likhiye. <code>B3</code> mein <code>52</code> likhiye.',
  'In <code>A4</code> type <em>Tickets a year</em>. In <code>B4</code> type <code>=B2*B3</code>.':
    '<code>A4</code> mein <em>Tickets a year</em> likhiye. <code>B4</code> mein <code>=B2*B3</code> likhiye.',
  '<code>B4</code> shows <code>15600</code>. Now change <code>B2</code> to <code>450</code>. <code>B4</code> changes to <code>23400</code> by itself.':
    '<code>B4</code> mein <code>15600</code> dikhta hai. Ab <code>B2</code> ko <code>450</code> kar dijiye. <code>B4</code> khud <code>23400</code> ho jata hai.',
  'What goes wrong?':
    'Kya galat hota hai?',
  'Guess first. Someone works out 300 × 52 on a calculator. They type <code>15600</code> into <code>B4</code> instead of the formula. What goes wrong later?':
    'Pehle andaaza lagaiye. Koi calculator par 300 × 52 nikalta hai. Woh formula ki jagah <code>B4</code> mein <code>15600</code> type kar deta hai. Baad mein kya galat hota hai?',
  'Nothing, until a number changes. When tickets go up to 450, <code>B4</code> still says 15600. Every total built on it is quietly wrong.':
    'Kuch nahi, jab tak koi number na badle. Jab tickets 450 ho jaate hain, <code>B4</code> mein ab bhi 15600 rehta hai. Us par bana har total chupchaap galat ho jata hai.',
  'A total typed by hand is the most common spreadsheet mistake. If a number comes from other numbers, make it a formula.':
    'Haath se type kiya total spreadsheet ki sabse aam galti hai. Agar koi number doosre numbers se nikalta hai, toh use formula banaiye.',
  'Adding up: SUM and ranges':
    'Jodna: SUM aur ranges',
  'A <strong>range</strong> is a block of cells, written with a colon: <code>D2:D6</code> means D2 down to D6. <code>=SUM(D2:D6)</code> adds them all. <code>=AVERAGE(D2:D6)</code>, <code>=MIN(D2:D6)</code> and <code>=MAX(D2:D6)</code> work the same way. They give the middle value, the smallest and the biggest. Think of a row of shop bills.':
    '<strong>Range</strong> cells ka ek tukda hai, colon se likha jata hai: <code>D2:D6</code> matlab D2 se D6 tak. <code>=SUM(D2:D6)</code> sabko jodta hai. <code>=AVERAGE(D2:D6)</code>, <code>=MIN(D2:D6)</code> aur <code>=MAX(D2:D6)</code> bhi aise hi chalte hain. Woh ausat, sabse chhota aur sabse bada dete hain. Dukaan ke bill ki ek qatar sochiye.',
  'Add up a column':
    'Ek column jodiye',
  'In <code>D2</code> to <code>D6</code>, type five numbers: the tickets that each of five support leads handles in a week. In <code>D7</code> type <code>=SUM(D2:D6)</code>. In <code>D8</code> type <code>=AVERAGE(D2:D6)</code>.':
    '<code>D2</code> se <code>D6</code> mein paanch number likhiye: paanch support leads mein se har ek hafte mein jitne tickets sambhalta hai. <code>D7</code> mein <code>=SUM(D2:D6)</code> likhiye. <code>D8</code> mein <code>=AVERAGE(D2:D6)</code> likhiye.',
  '<code>D7</code> shows the total and <code>D8</code> the average. Change any one of the five numbers. Both change.':
    '<code>D7</code> total dikhata hai aur <code>D8</code> ausat. Paanch mein se koi ek number badaliye. Dono badal jaate hain.',
  'Percentages and rounding':
    'Pratishat aur gol karna',
  'A percentage is a fraction: 12% is the same as 0.12. In a cell you can type <code>12%</code> or <code>0.12</code>. To take 12% of the number in <code>B4</code>, write <code>=B4*12%</code>.':
    'Pratishat ek hissa hai: 12% aur 0.12 ek hi hain. Cell mein aap <code>12%</code> ya <code>0.12</code> likh sakte hain. <code>B4</code> ke number ka 12% lene ke liye <code>=B4*12%</code> likhiye.',
  '<code>ROUND</code> tidies up a result, like rounding a price to the nearest rupee. <code>=ROUND(B4/7, 1)</code> divides B4 by 7 and keeps one number after the decimal point.':
    '<code>ROUND</code> nateeje ko saaf karta hai, jaise daam ko paas ke rupaye tak gol karna. <code>=ROUND(B4/7, 1)</code> B4 ko 7 se bhaag deta hai aur dashmlav ke baad ek ank rakhta hai.',
  'A small estimate, the way A4 builds one':
    'Ek chhota andaaza, jaise A4 banata hai',
  'A4 sizes a market from the bottom up: count the customers, then multiply by what each would pay. In a sheet, each of those is its own cell.':
    'A4 bazaar ka size neeche se upar nikalta hai: customers ginte hain, phir har ek jo dega usse gunte hain. Sheet mein inme se har ek ka apna cell hota hai.',
  'Build a market estimate':
    'Ek bazaar ka andaaza banaiye',
  'In <code>F2</code> type the number of firms that have the problem, for example <code>9000</code>.':
    '<code>F2</code> mein un firms ki ginti likhiye jinhe problem hai, jaise <code>9000</code>.',
  'In <code>F3</code> type what one firm would pay in a year, in rupees, for example <code>120000</code>.':
    '<code>F3</code> mein likhiye ki ek firm saal mein kitne rupaye degi, jaise <code>120000</code>.',
  'In <code>F4</code> type <code>=F2*F3</code>. That is the whole market. In <code>F5</code> type the share you could win, <code>2%</code>. In <code>F6</code> type <code>=F4*F5</code>.':
    '<code>F4</code> mein <code>=F2*F3</code> likhiye. Yeh poora bazaar hai. <code>F5</code> mein woh hissa likhiye jo aap jeet sakte hain, <code>2%</code>. <code>F6</code> mein <code>=F4*F5</code> likhiye.',
  '<code>F4</code> shows <code>1080000000</code>, which is ₹108 crore. <code>F6</code> shows <code>21600000</code>, which is ₹2.16 crore. Change the price in <code>F3</code> and both follow. A4 builds exactly this kind of table.':
    '<code>F4</code> mein <code>1080000000</code> dikhta hai, yaani ₹108 crore. <code>F6</code> mein <code>21600000</code> dikhta hai, yaani ₹2.16 crore. <code>F3</code> ka daam badaliye aur dono saath badalte hain. A4 bilkul aisi hi table banata hai.',
  'A cell shows an error like <em>#DIV/0</em>':
    'Cell mein <em>#DIV/0</em> jaisi galti dikhti hai',
  'The formula divides by zero or by an empty cell. Or it adds a cell that holds words. Check that every cell it points at holds a number.':
    'Formula zero se ya khaali cell se bhaag de raha hai. Ya woh aise cell ko jod raha hai jisme shabd hain. Dekhiye ki jin cells ki taraf woh dikhata hai, un sab mein number hai.',
  'A model call (one message sent to the model) reads 120 tokens (small pieces of text, like Lego bricks). The model costs ₹20 for every million tokens. Cell <code>B10</code> holds 120, <code>B11</code> holds 20 and <code>B12</code> holds 1000. Write one formula for the cost of 1,000 calls.':
    'Ek model call (model ko bheja gaya ek message) 120 tokens padhta hai (text ke chhote tukde, Lego ki eent jaise). Model har das lakh tokens ka ₹20 leta hai. Cell <code>B10</code> mein 120 hai, <code>B11</code> mein 20 hai aur <code>B12</code> mein 1000 hai. 1,000 calls ke kharch ka ek formula likhiye.',
  '=…':
    '=…',
  '<code>=B10*B12*B11/1000000</code>, which gives <code>2.4</code>, so ₹2.40. Read it as: tokens per call, times the number of calls, times the price per million, divided by a million. Chapter 15 builds a full cost model from exactly this line.':
    '<code>=B10*B12*B11/1000000</code>, jo <code>2.4</code> deta hai, yaani ₹2.40. Ise aise padhiye: har call ke tokens, guna calls ki ginti, guna das lakh ka daam, bhaag das lakh. Chapter 15 bilkul isi line se poora kharch model banata hai.',
  'Now you can read and write the formulas this course uses: a cell address, a formula that starts with <code>=</code>, <code>SUM</code>, a percentage and <code>ROUND</code>. A4 uses them to size the market. Chapter 15 uses them to work out what a feature costs.':
    'Ab aap woh formulas padh aur likh sakte hain jo yeh course use karta hai: cell ka pata, <code>=</code> se shuru hone wala formula, <code>SUM</code>, pratishat aur <code>ROUND</code>. A4 unse bazaar ka size nikalta hai. Chapter 15 unse feature ka kharch nikalta hai.',
  '<a href="#/sheets">Sheets</a> keeps every sheet you make. The code in your notebook can read any of them.':
    '<a href="#/sheets">Sheets</a> aapki banayi har sheet sambhal kar rakhta hai. Aapke notebook ka code unmein se kisi ko bhi padh sakta hai.',
});

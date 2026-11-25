/* Hinglish for Shared lines (shared), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'A score from 0 to 3 for each item above, using this chapter’s scale, like marking your own homework. Move on only when every score is 2 or more.':
    'Upar ke har item ke liye 0 se 3 tak ka score, is chapter ke scale se, jaise apna homework khud jaanchna. Aage tabhi badhiye jab har score 2 ya usse zyada ho.',
  'First, go through it quickly, in about twenty minutes: read it and answer the boxes. The long “Build it” work can wait until later.':
    'Pehle ise jaldi se ek baar dekhiye, lagbhag bees minute mein: padhiye aur boxes ke jawab dijiye. Lamba “Build it” kaam baad mein ho sakta hai.',
  'A red box saying something <em>is not defined</em>':
    'Ek red box jisme likha ho ki kuch <em>is not defined</em>',
  'This cell (one box of code) needs something from a cell above it. That cell has not run yet. It is like doing step 3 of a recipe before step 2. Run the cells above it in order, from the top. If you ran them before the page reloaded, press <strong>Restore</strong> in the notebook bar. This is the most common notebook problem. It happens to everyone, and it does not mean your code is wrong.':
    'Is cell (code ka ek dabba) ko upar ke kisi cell se kuch chahiye. Woh cell abhi chala nahi hai. Yeh aisa hai jaise recipe mein step 2 se pehle step 3 kar dena. Upar ke cells ko order mein, shuru se chalaiye. Agar aapne unhe page reload hone se pehle chalaya tha, toh notebook bar mein <strong>Restore</strong> dabaiye. Notebook mein yeh sabse common dikkat hai. Yeh sabke saath hota hai, aur iska matlab yeh nahi ki aapka code galat hai.',
  'An authentication error, or the number 401 (your key was not accepted)':
    'Authentication error, ya 401 number (aapki key nahi maani gayi)',
  'Your key (your secret password for the model) did not reach the code. Run the cell that loads the key again. Then check the name you saved it under. It must match <a href="#/setup">Setup</a> exactly, like a password. Capital letters count.':
    'Aapki key (model ke liye aapka secret password) code tak nahi pahunchi. Key load karne wala cell dobara chalaiye. Phir woh naam check kijiye jis naam se aapne key save ki thi. Woh <a href="#/setup">Setup</a> se bilkul match hona chahiye, password ki tarah. Capital letters ka bhi farq padta hai.',
  'A message that a module (a piece of ready-made code) was not found':
    'Aisa message ki ek module (ready-made code ka ek hissa) nahi mila',
  'The code imports (brings in) a library this page does not have. A library is ready-made code someone else wrote, like a borrowed recipe book. <code>openai</code> is built in. numpy and the other common libraries load by themselves the first time a cell imports them. A library that needs PyTorch cannot run inside a web page. The chapter tells you when that happens.':
    'Code ek aisi library import kar raha hai (andar la raha hai) jo is page mein nahi hai. Library yaani kisi aur ka likha ready-made code, jaise maangi hui recipe ki kitaab. <code>openai</code> built-in hai. numpy aur doosri common libraries pehli baar import hote hi khud load ho jaati hain. Jis library ko PyTorch chahiye, woh web page ke andar nahi chal sakti. Jahan aisa hota hai, chapter aapko bata deta hai.',
  'It runs, but your numbers are different from the ones printed above':
    'Code chal gaya, lekin aapke numbers upar chhape numbers se alag hain',
  'That is normal, not a mistake. Models change over time, and your text is not the same as ours. It is like two cooks making the same dish: the taste is close, never exactly the same. Look at which way your numbers move, and roughly by how much. You do not need the exact number. If your numbers move the same way, the experiment worked.':
    'Yeh normal hai, galti nahi. Models samay ke saath badalte hain, aur aapka text hamare text jaisa nahi hai. Yeh aisa hai jaise do log ek hi dish banayein: swaad milta-julta hota hai, bilkul ek jaisa nahi. Dekhiye ki aapke numbers kis taraf jaate hain, aur lagbhag kitna. Exact number milna zaroori nahi. Agar aapke numbers bhi usi taraf jaate hain, toh experiment kaam kar gaya.',
  'Models write new text; they do not look it up':
    'Models naya text likhte hain; woh use kahin se dekh kar nahi laate',
  'A notebook and a key':
    'Ek notebook aur ek key',
  'This chapter’s starter cell (the first box of code, which sets things up) has not run. Run it first. Then run the cell that failed again. If the page reloaded, press <strong>Restore</strong> in the notebook bar before you start.':
    'Is chapter ka starter cell (code ka pehla dabba, jo sab set karta hai) abhi chala nahi hai. Pehle use chalaiye. Phir jo cell fail hua tha, use dobara chalaiye. Agar page reload hua tha, toh shuru karne se pehle notebook bar mein <strong>Restore</strong> dabaiye.',
  'First run this starter cell. It gets everything ready, like laying out the ingredients before you cook. It sets up the helper and the values that this chapter’s cells use. You can change them later if you like.':
    'Pehle yeh starter cell chalaiye. Yeh sab kuch taiyaar karta hai, jaise khana banane se pehle saara saamaan rakh lena. Yeh woh helper aur values set karta hai jo is chapter ke cells use karte hain. Chaahein toh baad mein inhe badal sakte hain.',
  'Change one thing at a time':
    'Ek baar mein ek hi cheez badaliye',
  'You pay for everything you send':
    'Aap jo bhi bhejte hain, uska paisa lagta hai',
  'Documents are cut into chunks, like index cards':
    'Documents chunks mein kaate jaate hain, jaise index cards',
  'The code runs right here, on this page. Press <strong>Run</strong> under each block, in order, from the top.':
    'Code yahin, isi page par chalta hai. Har block ke neeche <strong>Run</strong> dabaiye, order mein, upar se.',
  'Keyword search and meaning search fail in different ways':
    'Keyword search aur meaning search alag-alag tarah se fail hote hain',
  'Fetching more chunks also brings more chunks that do not help':
    'Zyada chunks laane par aise chunks bhi zyada aate hain jo kaam ke nahi',
  'A kill switch (an off button) is not a rollback (going back to the old version)':
    'Kill switch (band karne ka button) rollback (purane version par wapas jaana) nahi hai',
  '1 … 2 … 3 …':
    '1 … 2 … 3 …',
  'This cell sets up everything it uses. So run the whole cell, not a part of it.':
    'Yeh cell jo kuch use karta hai, sab khud set karta hai. Isliye poora cell chalaiye, uska ek hissa nahi.',
  'A score from 0 to 3 for each item above, using this chapter’s scale, like marking your own homework. Move on only when every score is 2 or more, and no safety, privacy or evidence item scores 0.':
    'Upar ke har item ke liye 0 se 3 tak ka score, is chapter ke scale se, jaise apna homework khud jaanchna. Aage tabhi badhiye jab har score 2 ya usse zyada ho, aur safety, privacy ya evidence ke kisi item ka score 0 na ho.',
});

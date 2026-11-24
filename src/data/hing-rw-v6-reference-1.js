/* Hinglish: setup and glossary, plain-language rewrite (v6). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {
  'You’ll see <code>Key loaded, starts with: nvapi-xx</code>. We print only the first 8 characters, so the full key never shows on your screen.':
    'Aapko <code>Key loaded, starts with: nvapi-xx</code> dikhega. Hum sirf pehle 8 characters print karte hain, isliye poori key aapki screen par kabhi nahi dikhti.',
  'You’ll see <code>setup works</code>. Your setup is complete.':
    'Aapko <code>setup works</code> dikhega. Aapka setup poora ho gaya.',
  'One thing is worth knowing. The library is called <code>openai</code>, but we are not using OpenAI’s service. OpenAI published the first request format that many people adopted, and much of the industry copied it. So one library works with many providers. Later, switching providers may need only a one-line change. Knowing this earns you respect in conversations with vendors.':
    'Ek baat jaanne laayak hai. Library ka naam <code>openai</code> hai, lekin hum OpenAI ki service use nahi kar rahe. OpenAI ne woh pehla request format publish kiya jise bahut logon ne apnaya, aur industry ke zyadatar log usse copy karne lage. Isliye ek hi library kai providers ke saath chalti hai. Aage jaakar provider badalne ke liye shaayad sirf ek line badalni pade. Yeh baat jaanne se vendors ke saath baatcheet mein aapki izzat badhti hai.',
  'The second half of this book builds a system that answers questions from your corpus. Sometimes it will answer wrongly, and you need to catch that at once, without anyone’s help. Your own domain knowledge is your quality check. With documents you don’t know, you would need an expert on call. With your own, you are the expert.':
    'Is book ka doosra half ek aisa system banata hai jo aapke corpus se sawaalon ke jawaab deta hai. Kabhi kabhi woh galat jawaab dega, aur aapko use turant pakadna hai, kisi ki madad ke bina. Aapki apni domain knowledge hi aapka quality check hai. Jin documents ko aap nahi jaante, unke liye aapko call par ek expert chahiye hoga. Apne documents mein expert aap khud hain.',
  '<strong>For Part II, add some deliberately awkward material:</strong> at least two scanned pages, one document with a real table in it, and, if you can, an old version of a policy next to its current one. Chapters 12 and 16 need these. A corpus that is too clean will make you think everything works.':
    '<strong>Part II ke liye, jaan-boojhkar thoda mushkil material bhi daaliye:</strong> kam se kam do scanned pages, ek document jisme asli table ho, aur agar ho sake toh kisi policy ka purana version uske current version ke saath. Chapters 12 aur 16 ko inki zaroorat hai. Agar corpus bahut saaf-suthra hoga, toh aapko lagega ki sab kuch chal jaata hai.',
  'Before Chapter 9, check that your model catalogue offers the models below. If one is missing, that chapter’s <em>If Something Goes Wrong</em> section shows a way around it.':
    'Chapter 9 se pehle check kijiye ki aapke model catalogue mein neeche likhe models hain. Agar koi ek nahi hai, toh us chapter ka <em>If Something Goes Wrong</em> section uska ek raasta dikhata hai.',
  'A model that supports <code>response_format</code> / JSON schema (Ch. 8). If you don’t have one, the validation loop is the fallback.':
    'Ek model jo <code>response_format</code> / JSON schema support karta ho (Ch. 8). Agar aapke paas nahi hai, toh validation loop fallback hai.',
  'The key was not loaded':
    'Key load nahi hui',
  'The model name has a typo':
    'Model ke naam mein typo hai',
  'Use the exact string. Copy it from the model page on build.nvidia.com':
    'Bilkul exact string use kijiye. Use build.nvidia.com par model page se copy kijiye',
  'Your loop hit the per-minute rate limit':
    'Aapka loop per-minute rate limit tak pahunch gaya',
  '<code>extra_body</code> is missing':
    '<code>extra_body</code> missing hai',
  'The embedding model must have <code>extra_body={"input_type": …}</code>':
    'Embedding model ke liye <code>extra_body={"input_type": …}</code> hona zaroori hai',
  'A temporary or unknown problem':
    'Temporary ya anjaan problem',
});

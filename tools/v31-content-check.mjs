#!/usr/bin/env node
/* Guard the v3.1 corrections that are easy to accidentally regress while
   editing the data-driven curriculum. This complements content-check.mjs,
   which validates structure and English/Hinglish parity. */
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(import.meta.dirname, '..');
const files = ['src/data/part1.js','src/data/part2.js','src/data/part3.js','src/data/part5.js','src/data/items1.js','src/labs.js'];
const text = files.map(f => fs.readFileSync(path.join(root, f), 'utf8')).join('\n');
const errors = [];
const forbid = [
  [/app re-sends the entire conversation every single time/i, 'statelessness must describe application-managed context options'],
  [/Almost always more, often two or three times more/i, 'multilingual tokenization must not claim a universal multiplier'],
  [/Low gives you the same answer every time/i, 'temperature must not promise deterministic output'],
  [/semantic chunking following the document/i, 'heading/clause cutting must be named structure-aware, not semantic chunking'],
  [/commonly 0\.5–0\.8 for related/i, 'cosine similarity must not use universal score bands'],
  [/costs eight times the tokens/i, 'k cost must be measured, not fixed at a multiplier'],
  [/Instant, perfect, rank one/i, 'keyword retrieval must not promise a universal rank']
];
for (const [pattern, message] of forbid) if (pattern.test(text)) errors.push(message);
const require = [
  [/persistent user memory/i, 'statelessness distinction includes persistent user memory'],
  [/task state externally/i, 'statelessness distinction includes external task state'],
  [/Token counts depend on the tokenizer, the language, the exact text and the model/i, 'tokenization measurement guidance'],
  [/does not guarantee identical output/i, 'temperature non-determinism guidance'],
  [/Semantic chunking is a separate/i, 'chunking terminology distinction'],
  [/Hit@k, Recall@k where defined, Precision@k/i, 'evaluation metric distinction'],
  [/actual cost also depends on chunk sizes/i, 'k/cost measurement guidance'],
  [/Retrieval plus instructions can reduce unsupported answers, not eliminate them/i, 'grounding/refusal limitation'],
  [/production RAG architecture/i, 'production-RAG extension is retained']
];
for (const [pattern, label] of require) if (!pattern.test(text)) errors.push('missing: ' + label);
if (errors.length) {
  console.error('v3.1 content correction check failed:\n' + errors.map(x => '  - ' + x).join('\n'));
  process.exit(1);
}
console.log('v3.1 technical-correction guard passed');

import fs from 'node:fs';

const manifest = JSON.parse(fs.readFileSync(new URL('../glyphs.json', import.meta.url), 'utf8'));
const mapping = JSON.parse(fs.readFileSync(new URL('../font/mapping.json', import.meta.url), 'utf8'));
const failures = [];
const seen = new Set();

for (const glyph of manifest.glyphs) {
  const cp = mapping.glyphs[glyph.id];
  if (!cp) {
    failures.push(`${glyph.id}: missing code point`);
    continue;
  }
  if (!/^E[0-9A-F]{3,5}$/i.test(cp)) failures.push(`${glyph.id}: ${cp} is outside the declared PUA mapping format`);
  if (seen.has(cp.toUpperCase())) failures.push(`${glyph.id}: duplicate code point ${cp}`);
  seen.add(cp.toUpperCase());
}

for (const id of Object.keys(mapping.glyphs)) {
  if (!manifest.glyphs.some(g => g.id === id)) failures.push(`${id}: mapping has no glyph manifest entry`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`ItundaFace font mapping OK: ${seen.size} code points`);

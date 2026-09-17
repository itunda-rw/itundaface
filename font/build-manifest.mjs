import fs from 'node:fs';

const glyphs = JSON.parse(fs.readFileSync(new URL('../glyphs.json', import.meta.url), 'utf8')).glyphs;
const mapping = JSON.parse(fs.readFileSync(new URL('./mapping.json', import.meta.url), 'utf8')).glyphs;

const missing = glyphs.filter(g => !(g.id in mapping));
const unknown = Object.keys(mapping).filter(id => !glyphs.some(g => g.id === id));
if (missing.length || unknown.length) {
  if (missing.length) console.error('Missing font mappings:', missing.map(g => g.id).join(', '));
  if (unknown.length) console.error('Unknown font mappings:', unknown.join(', '));
  process.exit(1);
}

const codepoints = Object.values(mapping);
if (new Set(codepoints).size !== codepoints.length) {
  console.error('Duplicate private-use code point detected');
  process.exit(1);
}

const output = {
  format: 'itundaface-color-font-build-manifest-v1',
  glyphs: glyphs.map(g => ({
    id: g.id,
    name: g.name,
    codepoint: mapping[g.id],
    flatAsset: g.flatAsset,
    threeDAsset: g.threeDAsset
  }))
};
fs.writeFileSync(new URL('./build-manifest.json', import.meta.url), JSON.stringify(output, null, 2) + '\n');
console.log(`Color-font build manifest ready: ${glyphs.length} glyphs`);

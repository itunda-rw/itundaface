import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const root = new URL('../', import.meta.url);
const config = JSON.parse(fs.readFileSync(new URL('./compiler.config.json', import.meta.url), 'utf8'));
const manifest = JSON.parse(fs.readFileSync(new URL('./build-manifest.json', import.meta.url), 'utf8'));

if (config.target !== 'SVG-in-OpenType') {
  throw new Error(`Unsupported compiler target: ${config.target}`);
}
if (config.sourceManifest !== './build-manifest.json') {
  throw new Error('Compiler must consume the generated build manifest');
}
if (!manifest.glyphs.length) throw new Error('Build manifest contains no glyphs');

for (const glyph of manifest.glyphs) {
  if (!glyph.codepoint || !glyph.flatAsset) {
    throw new Error(`${glyph.id}: incomplete compiler input`);
  }
}

const python = process.env.PYTHON ?? 'python3';

try {
  execFileSync(python, ['font/compile-svg-font.py'], { stdio: 'inherit' });
} catch (error) {
  process.exit(error.status ?? 1);
}

const output = new URL(config.output.file, root);
if (!fs.existsSync(output)) {
  throw new Error(`Compiler completed without producing ${output.pathname}`);
}

console.log(`ItundaFace binary font ready: ${output.pathname}`);

import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const root = new URL('../', import.meta.url);
const config = JSON.parse(fs.readFileSync(new URL('./compiler.config.json', import.meta.url), 'utf8'));
const manifest = JSON.parse(fs.readFileSync(new URL('./build-manifest.json', import.meta.url), 'utf8'));

const required = ['fonttools'];
const missing = required.filter(command => {
  try {
    execFileSync(command, ['--version'], { stdio: 'ignore' });
    return false;
  } catch {
    return true;
  }
});

if (missing.length) {
  console.error('ItundaFace color-font compiler prerequisites are missing:', missing.join(', '));
  console.error('Install FontTools in the build environment, then rerun this compiler.');
  process.exit(2);
}

if (config.target !== 'COLR/CPAL') throw new Error(`Unsupported color-font target: ${config.target}`);
if (config.sourceManifest !== './build-manifest.json') throw new Error('Compiler must consume the generated build manifest');
if (!manifest.glyphs.length) throw new Error('Build manifest contains no glyphs');

for (const glyph of manifest.glyphs) {
  if (!glyph.codepoint || !glyph.flatAsset) throw new Error(`${glyph.id}: incomplete compiler input`);
}

console.log(`ItundaFace compiler contract validated for ${manifest.glyphs.length} glyphs.`);
console.log(`Target: ${config.target} / ${config.output.fontFamily}`);
console.log(`Output: ${new URL(config.output.file, root).pathname}`);
console.log('Binary compilation is intentionally delegated to the pinned FontTools toolchain; SVG masters remain authoritative.');

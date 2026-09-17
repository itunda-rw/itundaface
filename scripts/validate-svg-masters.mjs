import fs from 'node:fs';
import path from 'node:path';

const root = new URL('..', import.meta.url);
const manifest = JSON.parse(fs.readFileSync(new URL('../glyphs.json', import.meta.url), 'utf8'));
const failures = [];

function readAsset(relative) {
  const file = new URL(`../${relative}`, import.meta.url);
  if (!fs.existsSync(file)) {
    failures.push(`${relative}: referenced asset does not exist`);
    return null;
  }
  return fs.readFileSync(file, 'utf8');
}

function validateSvg(relative, svg, id, kind) {
  if (!svg) return;
  if (!/<svg\b[^>]*xmlns=["']http:\/\/www\.w3\.org\/2000\/svg["'][^>]*>/i.test(svg)) failures.push(`${id}: ${kind} missing SVG namespace`);
  if (!/viewBox=["']0 0 80 80["']/i.test(svg)) failures.push(`${id}: ${kind} must use viewBox 0 0 80 80`);
  if (/<image\b/i.test(svg)) failures.push(`${id}: ${kind} contains raster <image>`);
  if (/javascript:|<script\b|on[a-z]+\s*=/i.test(svg)) failures.push(`${id}: ${kind} contains executable content`);
  if (!/<(path|circle|ellipse|rect|line|polyline|polygon|g|defs|linearGradient|radialGradient|filter|feDropShadow)\b/i.test(svg)) failures.push(`${id}: ${kind} has no supported vector primitives`);
}

for (const glyph of manifest.glyphs) {
  validateSvg(glyph.flatAsset, readAsset(glyph.flatAsset), glyph.id, 'flat');
  if (glyph.threeDAsset) validateSvg(glyph.threeDAsset, readAsset(glyph.threeDAsset), glyph.id, '3D');
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`ItundaFace SVG masters OK: ${manifest.glyphs.length} glyphs`);

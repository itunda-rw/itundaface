import fs from 'node:fs';

const root = new URL('../', import.meta.url);
const read = file => fs.readFileSync(new URL(file, root), 'utf8');
const manifest = JSON.parse(read('glyphs.json'));
const schema = JSON.parse(read('glyphs.schema.json'));

const failures = [];
const ids = new Set();
const required = schema.required;

function validateAsset(glyphId, asset, kind) {
  if (asset === null && kind === '3D') return;
  if (typeof asset !== 'string') {
    failures.push(`${glyphId}: ${kind} asset must be a string or null`);
    return;
  }
  const pattern = kind === 'flat' ? /^svg\/flat\/.+\.svg$/ : /^svg\/3d\/.+\.svg$/;
  if (!pattern.test(asset)) failures.push(`${glyphId}: invalid ${kind} asset path`);
  const absolute = new URL(asset, root);
  if (!fs.existsSync(absolute)) {
    failures.push(`${glyphId}: missing ${kind} asset ${asset}`);
    return;
  }
  const svg = fs.readFileSync(absolute, 'utf8');
  if (!/^\s*<svg\b/.test(svg)) failures.push(`${glyphId}: ${kind} asset is not an SVG document`);
  if (!/\bviewBox=["']0 0 80 80["']/.test(svg)) failures.push(`${glyphId}: ${kind} asset must use viewBox 0 0 80 80`);
  if (/<image\b/i.test(svg)) failures.push(`${glyphId}: ${kind} asset may not contain raster <image> content`);
}

for (const glyph of manifest.glyphs) {
  for (const key of required) if (!(key in glyph)) failures.push(`${glyph.id ?? '<unknown>'}: missing ${key}`);
  if (ids.has(glyph.id)) failures.push(`${glyph.id}: duplicate id`);
  ids.add(glyph.id);
  if (glyph.canvas?.width !== 80 || glyph.canvas?.height !== 80) failures.push(`${glyph.id}: canvas must be 80x80`);
  if (!['none','right','left-required'].includes(glyph.canonicalDirection)) failures.push(`${glyph.id}: invalid direction`);
  if (![-45,0,45].includes(glyph.canonicalRotation)) failures.push(`${glyph.id}: rotation must be -45, 0 or 45`);
  validateAsset(glyph.id, glyph.flatAsset, 'flat');
  validateAsset(glyph.id, glyph.threeDAsset, '3D');
  const b = glyph.opticalBounds;
  if (!b || b.width <= 0 || b.height <= 0) failures.push(`${glyph.id}: invalid optical bounds`);
  if (b && (b.x < 0 || b.y < 0 || b.x + b.width > 80 || b.y + b.height > 80)) failures.push(`${glyph.id}: optical bounds outside canvas`);
}

if (manifest.glyphs.length === 0) failures.push('manifest contains no glyphs');
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`ItundaFace glyph manifest OK: ${manifest.glyphs.length} master glyphs + SVG assets`);

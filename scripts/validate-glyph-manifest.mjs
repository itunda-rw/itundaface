import fs from 'node:fs';

const manifest = JSON.parse(fs.readFileSync(new URL('../glyphs.json', import.meta.url), 'utf8'));
const schema = JSON.parse(fs.readFileSync(new URL('../glyphs.schema.json', import.meta.url), 'utf8'));

const failures = [];
const ids = new Set();
const required = schema.required;

for (const glyph of manifest.glyphs) {
  for (const key of required) if (!(key in glyph)) failures.push(`${glyph.id ?? '<unknown>'}: missing ${key}`);
  if (ids.has(glyph.id)) failures.push(`${glyph.id}: duplicate id`);
  ids.add(glyph.id);
  if (glyph.canvas?.width !== 80 || glyph.canvas?.height !== 80) failures.push(`${glyph.id}: canvas must be 80x80`);
  if (!['none','right','left-required'].includes(glyph.canonicalDirection)) failures.push(`${glyph.id}: invalid direction`);
  if (![-45,0,45].includes(glyph.canonicalRotation)) failures.push(`${glyph.id}: rotation must be -45, 0 or 45`);
  if (!/^svg\/flat\/.+\.svg$/.test(glyph.flatAsset)) failures.push(`${glyph.id}: invalid flat asset`);
  if (glyph.threeDAsset !== null && !/^svg\/3d\/.+\.svg$/.test(glyph.threeDAsset)) failures.push(`${glyph.id}: invalid 3D asset`);
  const b = glyph.opticalBounds;
  if (!b || b.width <= 0 || b.height <= 0) failures.push(`${glyph.id}: invalid optical bounds`);
  if (b && (b.x < 0 || b.y < 0 || b.x + b.width > 80 || b.y + b.height > 80)) failures.push(`${glyph.id}: optical bounds outside canvas`);
}

if (manifest.glyphs.length === 0) failures.push('manifest contains no glyphs');
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`ItundaFace glyph manifest OK: ${manifest.glyphs.length} master glyphs`);

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const svgRoot = path.join(root, 'svg', '3d');
const errors = [];
const globalIds = new Map();

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.isFile() && entry.name.endsWith('.svg') ? [full] : [];
  });
}

if (!fs.existsSync(svgRoot)) {
  console.error('SVG ID validation failed: svg/3d is missing');
  process.exit(1);
}

for (const file of walk(svgRoot)) {
  const relative = path.relative(root, file).replaceAll(path.sep, '/');
  const source = fs.readFileSync(file, 'utf8');
  const ids = [...source.matchAll(/\bid=["']([^"']+)["']/g)].map((match) => match[1]);
  const seen = new Set();

  for (const id of ids) {
    if (seen.has(id)) errors.push(`${relative}: duplicate id "${id}" inside one SVG`);
    seen.add(id);
    if (globalIds.has(id)) errors.push(`global duplicate id "${id}": ${globalIds.get(id)} and ${relative}`);
    else globalIds.set(id, relative);
  }

  const references = [...source.matchAll(/(?:url\\(#|href=["']#|xlink:href=["']#)([^)"']+)/g)].map((match) => match[1]);
  for (const ref of references) {
    if (!seen.has(ref)) errors.push(`${relative}: unresolved local reference "#${ref}"`);
  }

  for (const id of ids) {
    if (!id.startsWith('itdf-3d-')) errors.push(`${relative}: non-namespaced SVG id "${id}" (expected prefix itdf-3d-)`);
  }
}

if (errors.length) {
  console.error('ItundaFace SVG ID validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`ItundaFace SVG ID validation passed: ${globalIds.size} unique IDs across ${walk(svgRoot).length} 3D SVG assets`);

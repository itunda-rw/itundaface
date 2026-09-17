import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const expectedFamilies = ['reactions', 'communication', 'places', 'identity', 'commerce', 'finance', 'culture', 'state'];
const errors = [];

const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

if (!/^\d+\.\d+\.\d+$/.test(pkg.version)) errors.push(`Invalid package version: ${pkg.version}`);
if (pkg.license !== 'MIT') errors.push(`Expected MIT license, got ${pkg.license}`);
if (pkg.peerDependencies?.react !== '>=17') errors.push('React peer dependency must remain >=17');

for (const family of expectedFamilies) {
  const file = `react/${family}.tsx`;
  if (!fs.existsSync(path.join(root, file))) {
    errors.push(`Missing canonical family: ${file}`);
    continue;
  }
  const source = read(file);
  if (!source.includes('viewBox="0 0 80 80"')) errors.push(`${file}: missing canonical 80x80 viewBox`);
  if (!source.includes('role="img"')) errors.push(`${file}: missing accessible role=img`);
  if (!source.includes('size = 24')) errors.push(`${file}: expected default size 24`);
  if (source.includes("from './index'")) errors.push(`${file}: canonical family must not import legacy index`);
  if (!pkg.exports?.[`./${family}`]) errors.push(`package.json: missing export ./` + family);
}

const canonical = read('react/canonical.tsx');
for (const family of expectedFamilies) {
  if (!canonical.includes(`export * from './${family}'`)) errors.push(`canonical.tsx: missing ${family} export`);
}
if (!canonical.includes("import * as Legacy from './index'")) errors.push('canonical.tsx: legacy compatibility bridge missing');
if (!pkg.exports?.['.']) errors.push('package.json: missing root export');
if (!pkg.exports?.['./legacy']) errors.push('package.json: missing legacy export');

const validation = read('react/validation.ts');
for (const size of [14, 16, 18, 20, 24]) {
  if (!validation.includes(String(size))) errors.push(`validation.ts: missing flat size ${size}`);
}
for (const size of [32, 40, 48, 64]) {
  if (!validation.includes(String(size))) errors.push(`validation.ts: missing 3D size ${size}`);
}

const reactDir = path.join(root, 'react');
const familySvgCounts = {};
for (const family of expectedFamilies) {
  const dir = path.join(root, 'svg', family);
  if (fs.existsSync(dir)) familySvgCounts[family] = fs.readdirSync(dir).filter((f) => f.endsWith('.svg')).length;
}
if (Object.keys(familySvgCounts).length < expectedFamilies.length) {
  errors.push('SVG parity: one or more canonical family SVG directories are missing');
}

if (errors.length) {
  console.error('ItundaFace release validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`ItundaFace release validation passed for v${pkg.version}`);
console.log(`Canonical families: ${expectedFamilies.join(', ')}`);
console.log(`Canonical SVG family directories checked: ${Object.keys(familySvgCounts).length}`);

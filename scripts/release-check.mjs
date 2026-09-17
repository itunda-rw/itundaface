import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const tokens = JSON.parse(fs.readFileSync(path.join(root, 'tokens.json'), 'utf8'));
const expectedFamilies = ['reactions', 'communication', 'places', 'identity', 'commerce', 'finance', 'culture', 'state'];
const svgDirectories = {
  reactions: ['svg/flat', 'svg/3d'], communication: ['svg/communication'], places: ['svg/places'],
  identity: ['svg/identity'], commerce: ['svg/commerce'], finance: ['svg/finance'], culture: ['svg/culture'], state: ['svg/state'],
};
const errors = [];
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

if (!/^\d+\.\d+\.\d+$/.test(pkg.version)) errors.push(`Invalid package version: ${pkg.version}`);
if (tokens.version !== pkg.version) errors.push(`tokens.json version ${tokens.version} does not match package ${pkg.version}`);
if (pkg.license !== 'MIT') errors.push(`Expected MIT license, got ${pkg.license}`);
if (pkg.peerDependencies?.react !== '>=17') errors.push('React peer dependency must remain >=17');
for (const doc of ['README.md', 'CHANGELOG.md', 'RELEASE.md']) if (!read(doc).includes(pkg.version)) errors.push(`${doc}: missing current version ${pkg.version}`);

const expectedExports = {
  '.': './react/canonical.tsx', './legacy': './react/index.tsx',
  ...Object.fromEntries(expectedFamilies.map((family) => [`./${family}`, `./react/${family}.tsx`])),
  './families': './react/families.ts', './validation': './react/validation.ts', './quality': './react/quality.ts',
};
for (const [key, target] of Object.entries(expectedExports)) {
  if (pkg.exports?.[key] !== target) errors.push(`package.json: export ${key} must target ${target}`);
  else if (!fs.existsSync(path.join(root, target.slice(2)))) errors.push(`package.json: export target missing: ${target}`);
}

for (const family of expectedFamilies) {
  const file = `react/${family}.tsx`;
  if (!fs.existsSync(path.join(root, file))) { errors.push(`Missing canonical family: ${file}`); continue; }
  const source = read(file);
  if (!/viewBox:\s*['"]0 0 80 80['"]|viewBox="0 0 80 80"/.test(source)) errors.push(`${file}: missing canonical 80x80 viewBox`);
  if (!/role:\s*['"]img['"]|role="img"/.test(source)) errors.push(`${file}: missing accessible role=img`);
  if (!/size\s*=\s*24/.test(source)) errors.push(`${file}: expected default size 24`);
  if (source.includes("from './index'")) errors.push(`${file}: canonical family must not import legacy index`);
}

const canonical = read('react/canonical.tsx');
for (const family of expectedFamilies) if (!canonical.includes(`export * from './${family}'`)) errors.push(`canonical.tsx: missing ${family} export`);
if (!canonical.includes("import * as Legacy from './index'")) errors.push('canonical.tsx: legacy compatibility bridge missing');

const validation = read('react/validation.ts');
for (const size of [14, 16, 18, 20, 24]) if (!validation.includes(String(size))) errors.push(`validation.ts: missing flat size ${size}`);
for (const size of [32, 40, 48, 64]) if (!validation.includes(String(size))) errors.push(`validation.ts: missing 3D size ${size}`);

const familySvgCounts = {};
for (const [family, dirs] of Object.entries(svgDirectories)) {
  let count = 0;
  for (const relativeDir of dirs) {
    const dir = path.join(root, relativeDir);
    if (!fs.existsSync(dir)) { errors.push(`SVG parity: missing directory ${relativeDir}`); continue; }
    const files = fs.readdirSync(dir).filter((file) => file.endsWith('.svg'));
    count += files.length;
    for (const file of files) {
      const source = read(path.join(relativeDir, file));
      if (!/viewBox="0 0 80 80"/.test(source)) errors.push(`${relativeDir}/${file}: missing canonical 80x80 viewBox`);
      if (!/role="img"/.test(source)) errors.push(`${relativeDir}/${file}: missing role=img`);
      if (!/aria-label=/.test(source)) errors.push(`${relativeDir}/${file}: missing aria-label`);
    }
  }
  if (count === 0) errors.push(`SVG parity: ${family} has no SVG assets`);
  familySvgCounts[family] = count;
}

if (errors.length) {
  console.error('ItundaFace release validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log(`ItundaFace release validation passed for v${pkg.version}`);
console.log(`Canonical families: ${expectedFamilies.join(', ')}`);
console.log(`Canonical SVG assets checked: ${Object.values(familySvgCounts).reduce((a, b) => a + b, 0)}`);

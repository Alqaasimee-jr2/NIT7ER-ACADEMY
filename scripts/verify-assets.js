const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const srcDir = path.join(__dirname, '..', 'src');

function getAllFiles(dir, exts = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      files = files.concat(getAllFiles(full, exts));
    } else if (exts.includes(path.extname(full))) {
      files.push(full);
    }
  }
  return files;
}

const files = getAllFiles(srcDir);
const referencedAssets = new Set();

files.forEach((f) => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/['"]\/(brand|images|icons|illustrations)[^'"]*['"]/g) || [];
  matches.forEach((m) => {
    const clean = m.slice(1, -1);
    referencedAssets.add(clean);
  });
});

console.log('Total asset references found:', referencedAssets.size);
let missing = 0;
referencedAssets.forEach((asset) => {
  const localPath = path.join(publicDir, asset.replace(/^\//, ''));
  if (!fs.existsSync(localPath)) {
    console.error(' MISSING ASSET:', asset);
    missing++;
  } else {
    console.log(' [OK] Asset exists:', asset);
  }
});

if (missing === 0) {
  console.log('\n>>> AUDIT RESULT: 100% OF REFERENCED ASSETS EXIST IN /public!');
} else {
  console.log('\n>>> AUDIT RESULT: ' + missing + ' MISSING ASSET(S)!');
}

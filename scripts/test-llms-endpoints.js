const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const llmsPath = path.join(publicDir, 'llms.txt');
const llmsFullPath = path.join(publicDir, 'llms-full.txt');

console.log('Testing llms.txt & llms-full.txt presence and structure...');

if (!fs.existsSync(llmsPath)) {
  console.error('FAIL: public/llms.txt does not exist');
  process.exit(1);
}

const llmsContent = fs.readFileSync(llmsPath, 'utf8');
if (!llmsContent.includes('# NIT7ER Academy') || !llmsContent.includes('NIT7ER Studio') || !llmsContent.includes('Flow7')) {
  console.error('FAIL: public/llms.txt missing core entity definitions');
  process.exit(1);
}

if (!fs.existsSync(llmsFullPath)) {
  console.error('FAIL: public/llms-full.txt does not exist');
  process.exit(1);
}

const llmsFullContent = fs.readFileSync(llmsFullPath, 'utf8');
if (!llmsFullContent.includes('SWE-101') || !llmsFullContent.includes('Capstone Defense Deliverables')) {
  console.error('FAIL: public/llms-full.txt missing curriculum syllabus details');
  process.exit(1);
}

console.log('PASS: Both llms.txt and llms-full.txt are valid and well-structured.');

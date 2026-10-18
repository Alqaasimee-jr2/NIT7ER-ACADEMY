const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../src/components/seo/JsonLd.tsx'), 'utf8');

if (!content.includes('parentOrganization') || !content.includes('NIT7ER Studio')) {
  console.error('FAIL: JsonLd missing parentOrganization link');
  process.exit(1);
}

if (!content.includes('FAQPage')) {
  console.error('FAIL: JsonLd missing FAQPage schema');
  process.exit(1);
}

if (!content.includes('Course') || !content.includes('syllabusSections')) {
  console.error('FAIL: JsonLd missing enriched Course schema');
  process.exit(1);
}

console.log('PASS: JsonLd knowledge graph contains all required entity schemas.');

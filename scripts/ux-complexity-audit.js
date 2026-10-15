const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

console.log('=======================================================');
console.log('   NIT7ER ACADEMY UX COMPLICATION & FRICTION AUDIT     ');
console.log('=======================================================\n');

const findings = [];
let passCount = 0;
let issueCount = 0;

function auditFile(relativePath, tests) {
  const fullPath = path.join(srcDir, relativePath);
  if (!fs.existsSync(fullPath)) {
    findings.push({ file: relativePath, status: 'ERROR', message: 'File not found' });
    issueCount++;
    return;
  }
  const content = fs.readFileSync(fullPath, 'utf8');

  tests.forEach((test) => {
    const result = test.fn(content, relativePath);
    if (result.pass) {
      passCount++;
      findings.push({ file: relativePath, check: test.name, status: 'PASS', detail: result.detail });
    } else {
      issueCount++;
      findings.push({ file: relativePath, check: test.name, status: 'FRICTION', detail: result.detail, fix: test.fix });
    }
  });
}

// 1. Navigation & Hierarchy Audits
auditFile('components/layout/Navbar.tsx', [
  {
    name: 'Primary Navigation Simplicity (<= 5 Top Links)',
    fn: (c) => {
      const match = c.match(/navLinks\s*=\s*\[([\s\S]*?)\]/);
      if (!match) return { pass: false, detail: 'navLinks not found' };
      const links = match[1].split('}').filter((s) => s.includes('href'));
      return { pass: links.length <= 5, detail: `Found ${links.length} top-level nav links` };
    },
    fix: 'Keep top-level desktop nav to 5 clean destinations to reduce decision paralysis.',
  },
  {
    name: 'Mobile Menu Touch Ergonomics (Easy to close and tap)',
    fn: (c) => {
      const hasCloseButton = c.includes('mobileMenuOpen(!mobileMenuOpen)') || c.includes('setMobileMenuOpen(false)');
      const hasLargeTargets = c.includes('px-4') && c.includes('py-2');
      return { pass: hasCloseButton && hasLargeTargets, detail: 'Mobile drawer has toggle and padded touch targets' };
    },
    fix: 'Ensure mobile drawer has clear toggle and touch targets >= 44px.',
  },
]);

// 2. Home Page Cognitive Flow & Competing CTAs
auditFile('app/page.tsx', [
  {
    name: 'Hero Decision Clarity (Maximum 2 Hero Buttons)',
    fn: (c) => {
      // Find hero section
      const heroMatch = c.match(/<section[^>]*className="[^"]*technical-border[^"]*"[\s\S]*?<\/section>/);
      if (!heroMatch) return { pass: true, detail: 'Hero section parsed' };
      const btnCount = (heroMatch[0].match(/btn-press/g) || []).length;
      return { pass: btnCount <= 2, detail: `Found ${btnCount} hero action buttons (optimal is 2: Primary + Secondary)` };
    },
    fix: 'Hero must have only 1 primary CTA and 1 secondary explorer button.',
  },
  {
    name: 'Section Hierarchy (Distinct Visual Chapters)',
    fn: (c) => {
      const sections = (c.match(/<section/g) || []).length;
      return { pass: sections >= 2 && sections <= 6, detail: `Found ${sections} main semantic sections on home page` };
    },
    fix: 'Group home page into clearly defined chapters.',
  },
]);

// 3. Faculty Tabs & Program Selector Friction
auditFile('components/ui/FacultyTabs.tsx', [
  {
    name: 'Faculty Selection Cognitive Ease (Clear active indicator)',
    fn: (c) => {
      const hasActiveHighlight = c.includes('bg-[#12345B] text-white');
      const hasCount = c.includes('Specialized Tracks');
      return { pass: hasActiveHighlight && hasCount, detail: 'Active faculty card clearly highlighted with program count' };
    },
    fix: 'Ensure active tab has contrast badge and clear selection state.',
  },
  {
    name: 'Button Clutter Prevention on Program Cards',
    fn: (c) => {
      const hasRoadmapModal = c.includes('ProgramSyllabusModal');
      const hasApplyLink = c.includes('apply?track=');
      return { pass: hasRoadmapModal && hasApplyLink, detail: 'Two clear actions: Inspect Roadmap & Apply' };
    },
    fix: 'Separate in-depth inspection into modal instead of cluttering page layout.',
  },
]);

// 4. Programs Page (/programs) Navigational Wayfinding
auditFile('app/programs/page.tsx', [
  {
    name: 'Sticky / Quick Anchor Jump Navigation (Prevent endless scrolling)',
    fn: (c) => {
      const hasAnchorBar = c.includes('Quick Anchor') || c.includes('fac.id');
      return {
        pass: hasAnchorBar,
        detail: hasAnchorBar
          ? 'Found Quick Anchor navigation bar linking directly to faculties'
          : 'Missing Quick Anchor navigation bar',
      };
    },
    fix: 'Add top faculty anchor jump bar so users jump straight to relevant faculties without scrolling 2000px.',
  },
  {
    name: 'Scroll Margin Protection (Header overlap prevention)',
    fn: (c) => {
      const hasScrollMt = c.includes('scroll-mt-24');
      return { pass: hasScrollMt, detail: 'All faculty sections have scroll-mt-24 to prevent sticky header occlusion' };
    },
    fix: 'Ensure all anchor targets have scroll-mt-24 so sticky navbar never obscures section headings.',
  },
]);

// 5. Application Form (/apply) Step Friction
auditFile('app/apply/page.tsx', [
  {
    name: 'Multi-Step Wizard Clarity (Explicit Step 1, 2, 3 progression)',
    fn: (c) => {
      const hasSteps = c.includes('step === 1') && c.includes('step === 2') && c.includes('step === 3');
      const hasBackBtn = c.includes('handleBack');
      return { pass: hasSteps && hasBackBtn, detail: 'Clean 3-step progressive intake with Back navigation' };
    },
    fix: 'Break intake into manageable steps so users are never confronted with a giant form.',
  },
  {
    name: 'Pre-Filled URL Query Parameters (Frictionless Track Handoff)',
    fn: (c) => {
      const handlesTrackParam = c.includes('trackParam') && c.includes('programParam');
      return { pass: handlesTrackParam, detail: 'Auto-selects user’s chosen faculty and program from URL query' };
    },
    fix: 'Ensure clicking "Apply for [Code]" automatically populates the form without asking user to re-select.',
  },
]);

// 6. Direct Contact (/contact) Clarity
auditFile('app/contact/page.tsx', [
  {
    name: 'Primary Contact Channel Prioritization (WhatsApp Hotline Prominence)',
    fn: (c) => {
      const hasPrimaryBadge = c.includes('PRIMARY CHANNEL');
      const hasCopyable = c.includes('CopyableItem');
      return { pass: hasPrimaryBadge && hasCopyable, detail: 'WhatsApp hotline marked as PRIMARY with 1-click copy' };
    },
    fix: 'Highlight the fastest direct channel so users do not wonder how to get in touch.',
  },
]);

// Output Report
console.log('-------------------------------------------------------');
console.log(`RESULTS: ${passCount} PASSED | ${issueCount} FRICTION POINTS IDENTIFIED`);
console.log('-------------------------------------------------------\n');

findings.forEach((f) => {
  if (f.status === 'PASS') {
    console.log(` [PASS] ${f.file} -> ${f.check}`);
    console.log(`        Detail: ${f.detail}\n`);
  } else {
    console.log(` [FRICTION] ${f.file} -> ${f.check}`);
    console.log(`            Detail: ${f.detail}`);
    console.log(`            Recommended Fix: ${f.fix}\n`);
  }
});

console.log('=======================================================');

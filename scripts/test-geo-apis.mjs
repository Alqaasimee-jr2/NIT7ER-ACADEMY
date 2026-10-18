import { FACULTIES, FOUNDER_INFO, STUDIO_TEAM } from '../src/data/academyData.ts';

console.log('Testing data structures for headless geo APIs...');

if (!FACULTIES || FACULTIES.length !== 4) {
  console.error('FAIL: Expected 4 faculties, found ' + (FACULTIES ? FACULTIES.length : 0));
  process.exit(1);
}

if (!FOUNDER_INFO || !FOUNDER_INFO.name || !FOUNDER_INFO.studioUrl) {
  console.error('FAIL: Founder info missing or incomplete');
  process.exit(1);
}

if (!STUDIO_TEAM || STUDIO_TEAM.length < 3) {
  console.error('FAIL: Studio team missing or incomplete');
  process.exit(1);
}

const totalTracks = FACULTIES.reduce((acc, f) => acc + f.programs.length, 0);
if (totalTracks !== 12) {
  console.error('FAIL: Expected 12 specialized tracks, found ' + totalTracks);
  process.exit(1);
}

console.log('PASS: All ' + totalTracks + ' programs across 4 faculties verified for headless APIs.');

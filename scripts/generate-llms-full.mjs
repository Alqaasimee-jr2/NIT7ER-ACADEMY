import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { FACULTIES, FOUNDER_INFO, STUDIO_TEAM } from '../src/data/academyData.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let out = `# NIT7ER Academy — Complete Institutional & Academic Syllabus Specification

Canonical URL: https://nit7er-academy.vercel.app
Parent Agency: NIT7ER Studio (https://nit7er.vercel.app)
Location: Lagos, Nigeria
Director & Founder: ${FOUNDER_INFO.name} (${FOUNDER_INFO.email})
Hotline: ${FOUNDER_INFO.phone}

================================================================================
INSTITUTIONAL OVERVIEW & PHILOSOPHY
================================================================================
NIT7ER Academy operates on an unyielding standard:
1. Systems Over Memorization: True engineering competence is architecting and shipping real commercial systems, not completing toy tutorials.
2. The Flow7 Reality Protocol: Uncompromising tracking and accountability of deep attention, focus stamina, and daily operational hours.
3. Prose as an Engineering Primitive: Clear technical writing proves deep conceptual understanding; every engineer must master architectural documentation.
4. The Agency Apprenticeship Pipeline: Top performing graduates transition directly to client engineering sprints at NIT7ER Studio.

================================================================================
STUDIO DIRECTORS & CORE FACULTY
================================================================================
`;

STUDIO_TEAM.forEach(member => {
  out += `\n- Name: ${member.name}
  Role: ${member.role}
  Discipline: ${member.discipline}
  Portfolio/Handle: ${member.handle} (${member.url || 'N/A'})
  Statement: "${member.quote}"\n`;
});

out += `\n================================================================================
ACADEMIC CATALOG: 4 FACULTIES & 12 SPECIALIZED PROGRAMS
================================================================================\n`;

FACULTIES.forEach(faculty => {
  out += `\n################################################################################
FACULTY ${faculty.number}: ${faculty.title.toUpperCase()}
################################################################################
Subtitle: ${faculty.subtitle}
Tagline: ${faculty.tagline}
Description: ${faculty.description}
Format: ${faculty.format} | Duration: ${faculty.duration}

Programs in this Faculty:
`;

  faculty.programs.forEach(prog => {
    out += `\n--------------------------------------------------------------------------------
PROGRAM [${prog.code}]: ${prog.title}
--------------------------------------------------------------------------------
Tagline: ${prog.tagline}
Duration: ${prog.duration} | Level: ${prog.level} | Format: ${prog.format}
Target Audience: ${prog.targetAudience}
Description: ${prog.description}

Learning Outcomes:
${prog.learningOutcomes.map(o => `  * ${o}`).join('\n')}

Core Modules:
${prog.modules.map((m, idx) => `  Module 0${idx + 1}: ${m.title}
    Description: ${m.desc}
    Topics: ${m.topics.join(', ')}`).join('\n\n')}

Capstone Defense Deliverables:
  Project Title: ${prog.capstoneProject.title}
  Description: ${prog.capstoneProject.description}
  Required Defense Deliverable: ${prog.capstoneProject.deliverable}
`;

    if (prog.weeklyPhases && prog.weeklyPhases.length > 0) {
      out += `\nWeekly Sprint Roadmap:
${prog.weeklyPhases.map(w => `  Phase ${w.phase} (${w.weeks}) — ${w.title}:
    Sprint Goal: ${w.description}
    Deliverable: ${w.sprintProject}
    Tools: ${w.tools.join(', ')}`).join('\n\n')}
`;
    }
  });
});

out += `\n================================================================================
ADMISSIONS & INTAKE PROCESS
================================================================================
Step 1: Track & Program Selection (via https://nit7er-academy.vercel.app/apply)
Step 2: Candidate Diagnostic Assessment & Experience Profile
Step 3: Verification & Admissions Queue Allocation
Direct Inquiries & WhatsApp Admissions Hotline: +234 707 076 3135 (https://wa.me/2347070763135)
`;

const outputPath = path.join(__dirname, '..', 'public', 'llms-full.txt');
fs.writeFileSync(outputPath, out, 'utf8');
console.log('Successfully generated public/llms-full.txt (' + out.length + ' bytes)');

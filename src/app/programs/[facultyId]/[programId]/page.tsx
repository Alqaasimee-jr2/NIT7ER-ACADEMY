import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FACULTIES, LAB_PROJECTS, STUDIO_TEAM } from '@/data/academyData';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import {
  CreativeTechDiagram,
  CognitiveSystemsDiagram,
  WritingDiagram,
  ComputerEducationDiagram,
} from '@/components/illustrations/FacultyDiagrams';

const FACULTY_TUITION: Record<string, { ngn: string; usd: string; plan: string; schedule: string; prerequisites: string }> = {
  'creative-tech': {
    ngn: '₦250,000',
    usd: '$180 USD',
    plan: '2-Installment Milestone Split Available',
    schedule: 'Live Studio Sprints (Sat & Sun) + Async Daily Code Critiques',
    prerequisites: 'Working laptop (8GB+ RAM recommended) & foundational computer literacy',
  },
  'cognitive-performance': {
    ngn: '₦120,000',
    usd: '$90 USD',
    plan: 'Full Cohort Access + Flow7 Pro License',
    schedule: 'Daily Telemetry Check-Ins + Weekly Sunday Systems Debrief',
    prerequisites: 'Smartphone or computer for daily Flow7 reality logging',
  },
  'writing-thought-leadership': {
    ngn: '₦150,000',
    usd: '$110 USD',
    plan: '2-Installment Editorial Split Available',
    schedule: 'Weekly Editorial Seminars + Asynchronous Red-Line Critiques',
    prerequisites: 'Strong command of English & willingness to publish public drafts',
  },
  'computer-education': {
    ngn: '₦100,000',
    usd: '$75 USD',
    plan: 'Flexible 2-Part Tuition Plan Available',
    schedule: 'Hands-On Workstation Labs (3x Weekly) + Guided Practice',
    prerequisites: 'Zero prior computing experience required — starts from first principles',
  },
};

const FACULTY_DIRECTOR_MAP: Record<string, string> = {
  'creative-tech': 'abdullah-qaasim',
  'cognitive-performance': 'abdullah-qaasim',
  'writing-thought-leadership': 'yaasir-olajumoke',
  'computer-education': 'the-g3neral',
};

export function generateStaticParams() {
  const params: { facultyId: string; programId: string }[] = [];
  for (const faculty of FACULTIES) {
    for (const program of faculty.programs) {
      params.push({
        facultyId: faculty.id,
        programId: program.id,
      });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ facultyId: string; programId: string }>;
}): Promise<Metadata> {
  const { facultyId, programId } = await params;
  const faculty = FACULTIES.find((f) => f.id === facultyId);
  const program = faculty?.programs.find((p) => p.id === programId);

  if (!faculty || !program) {
    return { title: 'Program Not Found | NIT7ER Academy' };
  }

  return {
    title: `${program.code}: ${program.title} — ${faculty.badge}`,
    description: `${program.tagline} ${program.description}`,
    alternates: {
      canonical: `https://nit7er-academy.vercel.app/programs/${faculty.id}/${program.id}`,
    },
    openGraph: {
      title: `${program.code}: ${program.title} | NIT7ER Academy`,
      description: program.tagline,
      url: `https://nit7er-academy.vercel.app/programs/${faculty.id}/${program.id}`,
    },
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ facultyId: string; programId: string }>;
}) {
  const { facultyId, programId } = await params;
  const faculty = FACULTIES.find((f) => f.id === facultyId);
  const program = faculty?.programs.find((p) => p.id === programId);

  if (!faculty || !program) {
    notFound();
  }

  const tuition = FACULTY_TUITION[faculty.id] || FACULTY_TUITION['creative-tech'];
  const directorId = FACULTY_DIRECTOR_MAP[faculty.id] || 'abdullah-qaasim';
  const director = STUDIO_TEAM.find((m) => m.id === directorId) || STUDIO_TEAM[0];
  const siblingPrograms = faculty.programs.filter((p) => p.id !== program.id);
  const relatedLab =
    LAB_PROJECTS.find((l) => l.programId === program.id) ||
    LAB_PROJECTS.find((l) => l.facultyId === faculty.id) ||
    LAB_PROJECTS[0];

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${program.code}: ${program.title}`,
    courseCode: program.code,
    description: program.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'NIT7ER Academy',
      url: 'https://nit7er-academy.vercel.app',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Blended',
      courseWorkload: program.weeklyHours || '10–12 Hours / Week',
    },
  };

  return (
    <div className="pt-8 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* Top Hero Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-14">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#12345B] text-white p-5 sm:p-10 lg:p-14 shadow-xl border border-[#1769AA]/30">
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#1769AA]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#E6AD3C]/15 blur-3xl" />

          <div className="relative z-10">
            <Breadcrumbs
              theme="dark"
              items={[
                { label: 'Faculties & Programs', href: '/programs' },
                { label: `${faculty.badge}: ${faculty.title}`, href: `/programs/${faculty.id}` },
                { label: `${program.code}: ${program.title}` },
              ]}
            />

            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#E6AD3C] px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-[#12345B]">
                  {program.code}
                </span>
                <Link
                  href={`/programs/${faculty.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-[#7CC4FA] transition-colors"
                >
                  {faculty.badge} · {faculty.title}
                </Link>
                <span className="rounded-full bg-white/10 border border-white/15 px-3 py-1 font-mono text-xs text-white/90">
                  {program.duration}
                </span>
                <span className="rounded-full bg-white/10 border border-white/15 px-3 py-1 font-mono text-xs text-[#E6AD3C]">
                  {program.level}
                </span>
              </div>

              <Link
                href={`/programs/${faculty.id}`}
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-white/80 hover:text-[#E6AD3C] transition-colors"
              >
                ← Back to {faculty.badge}
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7">
                <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12] mb-4">
                  {program.title}
                </h1>
                <p className="text-base sm:text-xl font-medium text-[#7CC4FA] leading-relaxed mb-5">
                  {program.tagline}
                </p>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
                  {program.description}
                </p>

                {/* Primary CTAs */}
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5">
                  <Link
                    href={`/apply?track=${faculty.id}&program=${program.id}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E6AD3C] px-7 py-4 text-xs font-bold uppercase tracking-widest text-[#12345B] hover:bg-white transition-all shadow-lg"
                  >
                    Apply for {program.code} Cohort
                    <span>→</span>
                  </Link>
                  <a
                    href="#weekly-roadmap"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest text-white hover:bg-white/20 transition-all"
                  >
                    Inspect Weekly Sprints ↓
                  </a>
                </div>
              </div>

              {/* Right Column: Program Telemetry & Admissions Card */}
              <div className="lg:col-span-5 rounded-2xl bg-[#0D2644]/90 border border-white/15 p-5 sm:p-6 backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-white/60">
                      Cohort Tuition & Access
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-display text-2xl sm:text-3xl font-bold text-[#E6AD3C]">
                        {tuition.ngn}
                      </span>
                      <span className="font-mono text-xs text-white/70">/ {tuition.usd}</span>
                    </div>
                  </div>
                  <span className="rounded-lg bg-emerald-500/20 border border-emerald-400/30 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                    Intake Open
                  </span>
                </div>

                <dl className="space-y-3 text-xs">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-white/10 pb-2.5">
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                      Delivery Format
                    </dt>
                    <dd className="font-semibold text-white sm:text-right">{program.format}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-white/10 pb-2.5">
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                      Weekly Commitment
                    </dt>
                    <dd className="font-semibold text-[#7CC4FA] sm:text-right">
                      {program.weeklyHours || '10–12 Hours / Week'}
                    </dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-white/10 pb-2.5">
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                      Required Output
                    </dt>
                    <dd className="font-semibold text-[#E6AD3C] sm:text-right">
                      {program.totalProjects || '4 Verified Builds'}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1 border-b border-white/10 pb-2.5">
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                      Prerequisites
                    </dt>
                    <dd className="text-white/90 leading-relaxed">{tuition.prerequisites}</dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                      Ideal Candidate Profile
                    </dt>
                    <dd className="text-white/80 leading-relaxed">{program.targetAudience}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left 8 Columns: Weekly Roadmap, Modules, Capstone */}
          <div id="weekly-roadmap" className="lg:col-span-8 space-y-12 scroll-mt-24">
            {/* 1. Weekly Execution Roadmap */}
            {program.weeklyPhases && program.weeklyPhases.length > 0 && (
              <div className="rounded-2xl sm:rounded-3xl border border-[#12345B]/12 bg-white p-5 sm:p-8 lg:p-10 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1769AA] block mb-1">
                      // CHRONOLOGICAL SPRINT ARCHITECTURE
                    </span>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-[#12345B]">
                      Week-by-Week Execution Roadmap
                    </h2>
                  </div>
                  <span className="rounded-full bg-[#EEF7FC] border border-[#1769AA]/20 px-3.5 py-1 font-mono text-xs font-bold text-[#1769AA]">
                    {program.weeklyPhases.length} Intensive Phases
                  </span>
                </div>

                <div className="space-y-4">
                  {program.weeklyPhases.map((phase) => (
                    <div
                      key={phase.phase}
                      className="rounded-2xl border border-[#12345B]/10 bg-[#FAFCFE] p-5 sm:p-6 hover:border-[#1769AA]/40 transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2.5">
                          <span className="rounded-lg bg-[#12345B] px-2.5 py-1 font-mono text-xs font-bold text-[#E6AD3C]">
                            {phase.phase}
                          </span>
                          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1769AA]">
                            {phase.weeks}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-display text-lg font-bold text-[#12345B] mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-sm text-[#4A607A] leading-relaxed mb-4">
                        {phase.description}
                      </p>

                      <div className="rounded-xl bg-[#EEF7FC]/80 border border-[#1769AA]/20 p-3.5 mb-3.5">
                        <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[#1769AA] mb-1">
                          Verified Sprint Deliverable
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-[#12345B]">
                          {phase.sprintProject}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#4A607A] mr-1">
                          Toolchain:
                        </span>
                        {phase.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-md bg-white border border-[#12345B]/10 px-2.5 py-1 font-mono text-[11px] font-medium text-[#12345B]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. Core Curriculum Modules */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#12345B]/12 bg-white p-5 sm:p-8 lg:p-10 shadow-sm">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1769AA] block mb-1">
                // TECHNICAL SYLLABUS BREAKDOWN
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#12345B] mb-6">
                Core Curriculum Modules
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {program.modules.map((mod, idx) => (
                  <div
                    key={mod.title}
                    className="rounded-2xl border border-[#12345B]/10 bg-[#FAFCFE] p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1769AA]">
                          MODULE {mod.number || `0${idx + 1}`}
                        </span>
                        <span className="h-2 w-2 rounded-full bg-[#E6AD3C]" />
                      </div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-[#12345B] mb-2">
                        {mod.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4A607A] leading-relaxed mb-4">
                        {mod.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#12345B]/10">
                      <span className="block font-mono text-[10px] uppercase tracking-widest text-[#4A607A] mb-2">
                        Key Topics Covered
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {mod.topics.map((topic) => (
                          <span
                            key={topic}
                            className="rounded-md bg-white border border-[#12345B]/10 px-2.5 py-1 font-mono text-[11px] text-[#12345B]"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Capstone Defense & Verification Artifact */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#12345B] text-white p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden">
              <div className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-[#E6AD3C]/15 blur-2xl" />
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="rounded-full bg-[#E6AD3C] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-[#12345B]">
                    Mandatory Graduation Defense
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#7CC4FA]">
                    {program.code} Capstone Specification
                  </span>
                </div>

                <h2 className="font-display text-xl sm:text-3xl font-bold text-white mb-3">
                  {program.capstoneProject.title}
                </h2>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-6">
                  {program.capstoneProject.description}
                </p>

                <div className="rounded-2xl bg-white/10 border border-white/15 p-4 sm:p-5 mb-6">
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[#E6AD3C] mb-1">
                    Verification Artifact Required for Graduation
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-white">
                    {program.capstoneProject.deliverable}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href={`/apply?track=${faculty.id}&program=${program.id}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E6AD3C] px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-[#12345B] hover:bg-white transition-colors"
                  >
                    Enroll to Build This Capstone
                    <span>→</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/15 transition-colors"
                  >
                    Request Corporate / Team Training
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right 4 Columns: Outcomes, Faculty Director, Related Lab, Sibling Programs */}
          <div className="lg:col-span-4 space-y-6">
            {/* Learning Outcomes */}
            <div className="rounded-2xl border border-[#12345B]/12 bg-white p-5 sm:p-6 shadow-sm">
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1769AA] block mb-1">
                // VERIFIED COMPETENCIES
              </span>
              <h3 className="font-display text-lg font-bold text-[#12345B] mb-4">
                What You Will Master
              </h3>
              <ul className="space-y-3">
                {program.learningOutcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#12345B]">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#EEF7FC] text-[#1769AA] font-bold text-[10px]">
                      ✓
                    </span>
                    <span className="leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Diagram */}
            <div className="rounded-2xl border border-[#12345B]/12 bg-white p-5 sm:p-6 shadow-sm">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#4A607A] block mb-3">
                {faculty.badge} System Topology
              </span>
              {faculty.diagram === 'creative-tech' && (
                <CreativeTechDiagram className="w-full h-36 sm:h-40" />
              )}
              {faculty.diagram === 'cognitive-systems' && (
                <CognitiveSystemsDiagram className="w-full h-36 sm:h-40" />
              )}
              {faculty.diagram === 'writing' && (
                <WritingDiagram className="w-full h-36 sm:h-40" />
              )}
              {faculty.diagram === 'computer-education' && (
                <ComputerEducationDiagram className="w-full h-36 sm:h-40" />
              )}
            </div>

            {/* Related Lab Case Study */}
            <div className="rounded-2xl border border-[#1769AA]/25 bg-[#EEF7FC]/70 p-5 sm:p-6">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#1769AA] block mb-1">
                // LIVING STUDIO PROOF
              </span>
              <h3 className="font-display text-lg font-bold text-[#12345B] mb-1">
                {relatedLab.title} ({relatedLab.category})
              </h3>
              <p className="text-xs text-[#4A607A] leading-relaxed mb-4">
                {relatedLab.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={`/labs/${relatedLab.id}`}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#12345B] px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-widest text-white hover:bg-[#1769AA] transition-colors"
                >
                  Inspect Case Study →
                </Link>
                {relatedLab.liveUrl && (
                  <a
                    href={relatedLab.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-[#12345B]/20 bg-white px-3.5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-widest text-[#12345B] hover:border-[#1769AA] hover:text-[#1769AA] transition-colors"
                  >
                    Live App ↗
                  </a>
                )}
              </div>
            </div>

            {/* Faculty Director Card */}
            <div className="rounded-2xl border border-[#12345B]/12 bg-white p-5 sm:p-6 shadow-sm">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#4A607A] block mb-2">
                Track Lead & Studio Critic
              </span>
              <h4 className="font-display text-base font-bold text-[#12345B]">
                {director.name}
              </h4>
              <p className="font-mono text-xs text-[#1769AA] mb-2">{director.role}</p>
              <p className="text-xs italic text-[#4A607A] mb-4">&ldquo;{director.quote}&rdquo;</p>
              <Link
                href={`/team#${director.id}`}
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-[#12345B] hover:text-[#1769AA] transition-colors"
              >
                View Director Profile →
              </Link>
            </div>

            {/* Other Tracks in This Faculty */}
            <div className="rounded-2xl border border-[#12345B]/12 bg-white p-5 sm:p-6 shadow-sm">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#4A607A] block mb-3">
                Other Tracks in {faculty.badge}
              </span>
              <div className="space-y-3">
                {siblingPrograms.map((sib) => (
                  <Link
                    key={sib.id}
                    href={`/programs/${faculty.id}/${sib.id}`}
                    className="block rounded-xl border border-[#12345B]/10 bg-[#FAFCFE] p-3.5 hover:border-[#1769AA] hover:bg-[#EEF7FC]/40 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#1769AA]">
                        {sib.code}
                      </span>
                      <span className="font-mono text-[10px] text-[#4A607A]">{sib.duration}</span>
                    </div>
                    <p className="font-display text-xs sm:text-sm font-bold text-[#12345B] group-hover:text-[#1769AA] transition-colors">
                      {sib.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

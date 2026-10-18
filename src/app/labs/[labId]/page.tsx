import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FACULTIES, LAB_PROJECTS, FOUNDER_INFO } from '@/data/academyData';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export function generateStaticParams() {
  return LAB_PROJECTS.map((project) => ({
    labId: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ labId: string }>;
}): Promise<Metadata> {
  const { labId } = await params;
  const project = LAB_PROJECTS.find((p) => p.id === labId);

  if (!project) {
    return { title: 'Lab Not Found | NIT7ER Academy' };
  }

  return {
    title: `${project.title} — ${project.category} Case Study`,
    description: `${project.tagline}. ${project.description}`,
    alternates: {
      canonical: `https://nit7er-academy.vercel.app/labs/${project.id}`,
    },
    openGraph: {
      title: `${project.title} Architectural Case Study | NIT7ER Studio Labs`,
      description: project.tagline,
      url: `https://nit7er-academy.vercel.app/labs/${project.id}`,
    },
  };
}

export default async function LabCaseStudyPage({
  params,
}: {
  params: Promise<{ labId: string }>;
}) {
  const { labId } = await params;
  const project = LAB_PROJECTS.find((p) => p.id === labId);

  if (!project) {
    notFound();
  }

  const faculty = FACULTIES.find((f) => f.id === project.facultyId) || FACULTIES[0];
  const program =
    faculty.programs.find((p) => p.id === project.programId) || faculty.programs[0];
  const otherProjects = LAB_PROJECTS.filter((p) => p.id !== project.id);

  return (
    <div className="space-y-8 sm:space-y-12 pb-12">
      {/* Hero Banner */}
      <section>
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#12345B] text-white p-5 sm:p-10 lg:p-14 shadow-xl border border-[#1769AA]/30">
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#1769AA]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#E6AD3C]/15 blur-3xl" />

          <div className="relative z-10">
            <Breadcrumbs
              theme="dark"
              items={[
                { label: 'Studio Labs', href: '/labs' },
                { label: `${project.title} Case Study` },
              ]}
            />

            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-[#E6AD3C] px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-[#12345B]">
                  {project.badge}
                </span>
                <span className="rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-[#7CC4FA]">
                  {project.category}
                </span>
              </div>

              <Link
                href="/labs"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-white/80 hover:text-[#E6AD3C] transition-colors"
              >
                ← All Studio Labs
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7">
                <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-4">
                  {project.title}
                </h1>
                <p className="text-base sm:text-xl font-medium text-[#7CC4FA] leading-relaxed mb-5">
                  {project.tagline}
                </p>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Action Links */}
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E6AD3C] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-[#12345B] hover:bg-white transition-all shadow-lg"
                    >
                      Launch Live System ↗
                    </a>
                  )}
                  {project.simulatorUrl && (
                    <Link
                      href={project.simulatorUrl}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1769AA] border border-white/20 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-white hover:bg-[#E6AD3C] hover:text-[#12345B] transition-all"
                    >
                      Open Interactive Simulator →
                    </Link>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-[#12345B] transition-all"
                    >
                      Inspect Source Repo ↗
                    </a>
                  )}
                  <Link
                    href={`/apply?track=${faculty.id}&program=${program.id}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E6AD3C]/50 bg-[#E6AD3C]/10 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-[#E6AD3C] hover:bg-[#E6AD3C] hover:text-[#12345B] transition-all"
                  >
                    Learn to Build This →
                  </Link>
                </div>
              </div>

              {/* Right Column: Telemetry & Stack Card */}
              <div className="lg:col-span-5 rounded-2xl bg-[#0D2644]/90 border border-white/15 p-5 sm:p-6 backdrop-blur-md">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-[#E6AD3C] mb-4">
                  // SYSTEM TELEMETRY & VERIFICATION
                </span>

                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl bg-white/5 border border-white/10 p-3"
                      >
                        <span className="block font-display text-lg font-bold text-white">
                          {m.value}
                        </span>
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-white/60 mt-0.5">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mb-5">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-white/60 mb-2">
                    Production Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/10 border border-white/15 px-2.5 py-1 font-mono text-xs text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-white/60 mb-1">
                    Verified Commercial Impact
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-[#7CC4FA]">
                    {project.impact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Breakdown & Curriculum Bridge */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {/* Problem & System Architecture */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-[#12345B]/12 bg-white p-6 sm:p-8 shadow-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E6AD3C] block mb-2">
                  01 / Problem Statement
                </span>
                <h2 className="font-display text-xl font-bold text-[#12345B] mb-3">
                  Operational Bottleneck
                </h2>
                <p className="text-sm text-[#4A607A] leading-relaxed">
                  {project.problem || project.description}
                </p>
              </div>

              <div className="rounded-2xl border border-[#12345B]/12 bg-white p-6 sm:p-8 shadow-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1769AA] block mb-2">
                  02 / System Architecture
                </span>
                <h2 className="font-display text-xl font-bold text-[#12345B] mb-3">
                  Engineering Solution
                </h2>
                <p className="text-sm text-[#4A607A] leading-relaxed">
                  {project.architecture || project.impact}
                </p>
              </div>
            </div>

            {/* Curriculum Integration Section */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#1769AA]/25 bg-[#EEF7FC]/60 p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1769AA]">
                  // CURRICULUM INTEGRATION
                </span>
                <span className="rounded-full bg-[#12345B] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-[#E6AD3C]">
                  {program.code} · {faculty.badge}
                </span>
              </div>

              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#12345B] mb-3">
                Study This System Inside {program.title}
              </h2>
              <p className="text-sm text-[#4A607A] leading-relaxed mb-6">
                At NIT7ER Academy, fellows do not build disposable toy apps. You dissect live production repositories like{' '}
                <strong className="text-[#12345B]">{project.title}</strong> and engineer your own verified capstone system under the direct supervision of{' '}
                <Link href="/about" className="text-[#1769AA] underline hover:text-[#12345B]">
                  {FOUNDER_INFO.name}
                </Link>
                .
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                <Link
                  href={`/programs/${faculty.id}/${program.id}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#12345B] px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-white hover:bg-[#1769AA] transition-colors"
                >
                  Inspect {program.code} Syllabus →
                </Link>
                <Link
                  href={`/programs/${faculty.id}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#12345B]/20 bg-white px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-[#12345B] hover:border-[#1769AA] hover:text-[#1769AA] transition-colors"
                >
                  Explore {faculty.badge} Hub
                </Link>
                <Link
                  href={`/apply?track=${faculty.id}&program=${program.id}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E6AD3C] px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-[#12345B] hover:bg-[#12345B] hover:text-white transition-colors"
                >
                  Apply for Cohort →
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Other Studio Labs */}
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-2xl border border-[#12345B]/12 bg-white p-5 sm:p-6 shadow-sm">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#4A607A] block mb-3">
                Other Incubated Studio Systems
              </span>
              <div className="space-y-3">
                {otherProjects.map((other) => (
                  <Link
                    key={other.id}
                    href={`/labs/${other.id}`}
                    className="block rounded-xl border border-[#12345B]/10 bg-[#FAFCFE] p-3.5 hover:border-[#1769AA] hover:bg-[#EEF7FC]/40 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#1769AA]">
                        {other.category}
                      </span>
                      <span className="font-mono text-[10px] text-[#4A607A]">{other.badge}</span>
                    </div>
                    <p className="font-display text-sm font-bold text-[#12345B] group-hover:text-[#1769AA] transition-colors">
                      {other.title}
                    </p>
                    <p className="text-xs text-[#4A607A] line-clamp-1 mt-0.5">{other.tagline}</p>
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

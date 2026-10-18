import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LAB_PROJECTS } from '@/data/academyData';
import { GithubIcon } from '@/components/Icons';
import { ExternalLink, ArrowRight, Code2 } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'NIT7ER Labs & Incubator Showcase',
  description:
    'Explore production systems, edtech engines, and cognitive tools incubated at NIT7ER: Flow7, Clasquera, Lang Huey, OAUMods, and more.',
};

export default function LabsPage() {
  return (
    <div className="space-y-8 sm:space-y-12">
      <Breadcrumbs items={[{ label: 'Labs & Incubator Showcase' }]} />

      {/* Page Header */}
      <section className="technical-border curve-asymmetric p-6 sm:p-10 lg:p-12 bg-white space-y-5 border border-[#D9E6F0] shadow-xs relative overflow-hidden">
        {/* Subtle Contour Watermark */}
        <div
          className="absolute -right-10 -bottom-10 w-80 h-80 opacity-10 pointer-events-none bg-contain bg-no-repeat"
          style={{ backgroundImage: `url('/brand/contour-blob.png')` }}
        />
        <div className="max-w-3xl space-y-3.5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-[11px] sm:text-xs font-mono max-w-full">
            <span className="w-2 h-2 rounded-full bg-[#1769AA] pulse-ring shrink-0"></span>
            <span className="font-bold text-[#12345B] truncate">NIT7ER LABS // STUDIO PRODUCTION INCUBATOR</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12345B] tracking-tight leading-[1.12]">
            Incubated Systems &amp; Case Studies
          </h1>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal max-w-2xl">
            Production systems, educational tools, and cognitive applications developed within NIT7ER Studio.
          </p>
        </div>
      </section>

      {/* Grid of Lab Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LAB_PROJECTS.map((project, idx) => (
          <article
            key={project.id}
            id={project.id}
            className="technical-border curve-soft p-6 sm:p-7 bg-white flex flex-col justify-between space-y-5 border border-[#D9E6F0] rounded-2xl shadow-xs hover:border-[#1769AA] hover:shadow-md transition-all scroll-mt-24"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EEF7FC] text-[#1769AA] font-bold border border-[#D9E6F0]">
                  [{project.badge}]
                </span>
                <span className="text-[#64748B] font-medium">
                  0{idx + 1} {'//'} {project.category}
                </span>
              </div>

              <div>
                <Link
                  href={`/labs/${project.id}`}
                  className="hover:text-[#1769AA] transition-colors inline-block"
                >
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#12345B] hover:text-[#1769AA] tracking-tight transition-colors">
                    {project.title}
                  </h2>
                </Link>
                <p className="text-xs sm:text-sm font-mono text-[#1769AA] font-medium mt-1">
                  {project.tagline}
                </p>
              </div>

              <p className="text-sm text-[#475569] leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2 pt-1">
                <span className="label-mono text-[10px] text-[#64748B] block">
                  DEPLOYED ARCHITECTURE
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono font-medium px-2.5 py-0.5 bg-[#EEF7FC]/70 text-[#12345B] border border-[#D9E6F0] rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D9E6F0] space-y-3.5">
              <div className="text-xs font-mono text-[#475569] flex items-start gap-2">
                <Code2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                <span className="leading-snug">{project.impact}</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#D9E6F0]/60">
                <div className="flex flex-wrap items-center gap-1.5">
                  <Link
                    href={`/labs/${project.id}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-[11px] font-mono font-bold text-[#12345B] hover:border-[#1769AA] hover:text-[#1769AA] transition-colors"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="w-3 h-3 text-[#1769AA]" />
                  </Link>
                  {project.simulatorUrl && (
                    <Link
                      href={project.simulatorUrl}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#E6AD3C]/20 border border-[#E6AD3C] rounded-full text-[11px] font-mono font-bold text-[#12345B] hover:bg-[#E6AD3C]/30 transition-colors"
                    >
                      <span>Simulator</span>
                    </Link>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 border border-[#D9E6F0] rounded-full text-[#64748B] hover:text-[#12345B] hover:border-[#12345B] hover:bg-[#EEF7FC] transition-colors"
                      title="Open source code repository"
                      aria-label={`Open ${project.title} source repository`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-press inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#12345B] text-white text-[11px] font-mono font-bold rounded-full hover:bg-[#1769AA] transition-colors shadow-2xs"
                      title="Launch live production system in new tab"
                    >
                      <span>LIVE</span>
                      <ExternalLink className="w-3 h-3 text-[#E6AD3C]" />
                    </a>
                  )}
                </div>

                <Link
                  href={
                    project.facultyId && project.programId
                      ? `/apply?track=${project.facultyId}&program=${project.programId}`
                      : project.facultyId
                      ? `/apply?track=${project.facultyId}`
                      : '/apply'
                  }
                  className="gold-link text-[11px] font-mono font-bold text-[#12345B] flex items-center gap-1 shrink-0"
                >
                  <span>BUILD THIS</span>
                  <ArrowRight className="w-3 h-3 text-[#E6AD3C]" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Capstone Pitch Callout */}
      <section className="technical-border curve-asymmetric p-6 sm:p-8 lg:p-10 bg-white flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#D9E6F0] shadow-xs">
        <div className="space-y-2 max-w-2xl">
          <span className="label-mono px-3 py-1 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0]">
            Incubation Channel
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#12345B] pt-1">
            Have an Idea for an Incubated System?
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Students in the Creative Tech and Systems faculties can propose capstones to be officially incubated under the NIT7ER umbrella.
          </p>
        </div>

        <Link
          href="/apply"
          className="btn-press inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#12345B] text-white font-mono font-bold text-xs sm:text-sm rounded-full hover:bg-[#1769AA] transition-colors shrink-0 shadow-sm"
        >
          <span>SUBMIT CAPSTONE PROPOSAL</span>
          <ArrowRight className="w-4 h-4 text-[#E6AD3C]" />
        </Link>
      </section>
    </div>
  );
}

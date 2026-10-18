import React from 'react';
import Link from 'next/link';
import { LAB_PROJECTS } from '@/data/academyData';
import { GithubIcon } from '@/components/Icons';
import { ExternalLink, ArrowRight } from 'lucide-react';

export function LabsShowcase({ limit }: { limit?: number }) {
  const projects = limit ? LAB_PROJECTS.slice(0, limit) : LAB_PROJECTS;

  return (
    <section className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D9E6F0] pb-4">
        <div>
          <span className="label-mono px-3 py-1 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0]">
            Studio Production
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#12345B] tracking-tight mt-2">
            Incubated Products &amp; Systems
          </h2>
          <p className="text-sm sm:text-base text-[#475569] max-w-2xl mt-1">
            Internal products and production systems built directly within NIT7ER Studio.
          </p>
        </div>
        {limit && (
          <Link
            href="/labs"
            className="gold-link inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[#12345B] shrink-0"
          >
            <span>VIEW ALL 6 INCUBATED CASE STUDIES</span>
            <ArrowRight className="w-4 h-4 text-[#E6AD3C]" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            id={project.id}
            className="technical-border curve-soft p-6 sm:p-7 bg-white flex flex-col justify-between space-y-5 border border-[#D9E6F0] rounded-2xl shadow-xs hover:border-[#1769AA] hover:shadow-md transition-all scroll-mt-24"
          >
            <div className="space-y-3.5">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px]">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EEF7FC] text-[#1769AA] font-bold border border-[#D9E6F0]">
                  [{project.badge}]
                </span>
                <span className="text-[#64748B] font-medium">
                  0{idx + 1} {'//'} {project.category}
                </span>
              </div>

              <div>
                <h3 className="font-display text-xl font-extrabold text-[#12345B] tracking-tight">
                  <Link
                    href={`/labs/${project.id}`}
                    className="hover:text-[#1769AA] transition-colors"
                  >
                    {project.title}
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#1769AA] mt-1 font-medium">
                  {project.tagline}
                </p>
              </div>

              <p className="text-sm text-[#475569] leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2 pt-1">
                <span className="label-mono text-[10px] text-[#64748B] block">
                  STACK DEPLOYMENT
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

            {/* Impact & Actions */}
            <div className="pt-4 border-t border-[#D9E6F0] space-y-4">
              <p className="text-xs font-mono text-[#475569] leading-relaxed">
                <strong className="text-[#12345B]">Impact:</strong> {project.impact}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs font-mono">
                <Link
                  href={`/labs/${project.id}`}
                  className="inline-flex items-center gap-1.5 font-bold text-[#12345B] hover:text-[#1769AA] transition-colors text-xs"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1769AA]" />
                </Link>

                <div className="flex flex-wrap items-center gap-2">
                  {project.simulatorUrl && (
                    <Link
                      href={project.simulatorUrl}
                      className="btn-press inline-flex items-center gap-1 px-3 py-1.5 bg-[#EEF7FC] hover:bg-[#12345B] text-[#12345B] hover:text-white border border-[#D9E6F0] rounded-full text-[11px] font-bold font-mono transition-colors"
                    >
                      <span>Simulator</span>
                      <ArrowRight className="w-3 h-3 text-[#E6AD3C]" />
                    </Link>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 border border-[#D9E6F0] rounded-full text-[#64748B] hover:text-[#12345B] hover:border-[#12345B] hover:bg-[#EEF7FC] transition-colors"
                      title={`View ${project.title} GitHub Repository`}
                      aria-label={`View ${project.title} GitHub Repository`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-press inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#12345B] text-white hover:bg-[#1769AA] font-bold text-[11px] rounded-full transition-colors shadow-2xs"
                      title={`Launch ${project.title} Live System`}
                    >
                      <span>LIVE</span>
                      <ExternalLink className="w-3 h-3 text-[#E6AD3C]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

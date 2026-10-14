import React from 'react';
import Link from 'next/link';
import { LAB_PROJECTS } from '@/data/academyData';
import { GithubIcon } from '@/components/Icons';
import { ExternalLink, ArrowRight } from 'lucide-react';

export function LabsShowcase({ limit }: { limit?: number }) {
  const projects = limit ? LAB_PROJECTS.slice(0, limit) : LAB_PROJECTS;

  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#D9E6F0] pb-3">
        <div>
          <span className="label-mono px-2.5 py-0.5 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0]">
            Studio Production
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#12345B] tracking-tight mt-1.5">
            Incubated Products &amp; Systems
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-xl mt-0.5">
            Internal products and production systems built directly within NIT7ER Studio.
          </p>
        </div>
        {limit && (
          <Link
            href="/labs"
            className="gold-link inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#12345B] shrink-0"
          >
            <span>VIEW ALL 6 INCUBATED CASE STUDIES</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C]" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            id={project.id}
            className="technical-border curve-soft p-5 sm:p-6 bg-white flex flex-col justify-between space-y-4 border border-[#D9E6F0] rounded-2xl shadow-xs hover:border-[#1769AA] hover:shadow-md transition-all scroll-mt-24"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-[10px]">
                <span className="px-2 py-0.5 rounded-full bg-[#EEF7FC] text-[#1769AA] font-bold border border-[#D9E6F0]">
                  [{project.badge}]
                </span>
                <span className="text-[#64748B]">
                  0{idx + 1} // {project.category}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-black text-[#12345B] tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[#1769AA] mt-0.5 italic">
                  {project.tagline}
                </p>
              </div>

              <p className="text-xs text-[#64748B] leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-1.5 pt-1">
                <span className="label-mono text-[9px] text-[#64748B] block">
                  STACK DEPLOYMENT
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 bg-[#EEF7FC]/60 text-[#12345B] border border-[#D9E6F0] rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-[#D9E6F0] flex items-center justify-between text-xs font-mono">
              <span className="text-[10px] text-[#64748B] truncate max-w-[140px]">
                {project.impact}
              </span>

              <div className="flex items-center gap-2">
                {project.id === 'flow7' && (
                  <Link
                    href="/flow7"
                    className="btn-press inline-flex items-center gap-1 px-2.5 py-1 bg-[#EEF7FC] hover:bg-[#12345B] text-[#12345B] hover:text-white border border-[#D9E6F0] rounded-full text-[10px] font-bold font-mono transition-colors"
                  >
                    <span>Try Simulator</span>
                    <ArrowRight className="w-3 h-3 text-[#E6AD3C]" />
                  </Link>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 border border-[#D9E6F0] rounded-full text-[#64748B] hover:text-[#12345B] hover:border-[#12345B] hover:bg-[#EEF7FC] transition-colors"
                    title="View GitHub Repository (External)"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press inline-flex items-center gap-1.5 px-3 py-1 bg-[#12345B] text-white hover:bg-[#1769AA] font-bold text-[11px] rounded-full transition-colors shadow-2xs"
                    title="Launch Live System (External)"
                  >
                    <span>LIVE</span>
                    <ExternalLink className="w-3 h-3 text-[#E6AD3C]" />
                  </a>
                )}
                {!project.githubUrl && !project.liveUrl && (
                  <span className="text-[10px] font-mono text-[#64748B] bg-[#EEF7FC] px-2 py-0.5 rounded-full border border-[#D9E6F0]">
                    Archive
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

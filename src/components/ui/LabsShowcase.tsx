import React from 'react';
import Link from 'next/link';
import { LAB_PROJECTS } from '@/data/academyData';
import { GithubIcon } from '@/components/Icons';
import { ExternalLink, ArrowRight } from 'lucide-react';

export function LabsShowcase({ limit }: { limit?: number }) {
  const projects = limit ? LAB_PROJECTS.slice(0, limit) : LAB_PROJECTS;

  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#E5E5E0] pb-3">
        <div>
          <span className="label-mono text-[#C9A84C]">Studio Production</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#121212] tracking-tight mt-1">
            Incubated Products &amp; Systems
          </h2>
          <p className="text-xs sm:text-sm text-[#71717A] max-w-xl mt-0.5">
            Every concept taught in our academy is proven in live commercial software built directly inside NIT7ER Studio.
          </p>
        </div>
        {limit && (
          <Link
            href="/labs"
            className="gold-link inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#121212] shrink-0"
          >
            <span>VIEW ALL 6 INCUBATED CASE STUDIES</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C]" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="technical-border p-5 sm:p-6 bg-white flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-[10px]">
                <span className="text-[#C9A84C] font-bold">
                  [{project.badge}]
                </span>
                <span className="text-[#71717A]">
                  0{idx + 1} // {project.category}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-black text-[#121212] tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[#71717A] mt-0.5 italic">
                  {project.tagline}
                </p>
              </div>

              <p className="text-xs text-[#71717A] leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-1.5 pt-1">
                <span className="label-mono text-[9px] text-[#A1A1AA] block">
                  STACK DEPLOYMENT
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 bg-[#FAF9F6] text-[#121212] border border-[#E5E5E0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-[#E5E5E0] flex items-center justify-between text-xs font-mono">
              <span className="text-[10px] text-[#71717A] truncate max-w-[140px]">
                {project.impact}
              </span>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 border border-[#E5E5E0] text-[#71717A] hover:text-[#121212] hover:border-[#121212] transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 bg-[#121212] text-white hover:bg-[#27272A] font-bold text-[11px] transition-colors"
                  >
                    <span>LIVE</span>
                    <ExternalLink className="w-3 h-3 text-[#F5C842]" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

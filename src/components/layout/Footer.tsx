import React from 'react';
import Link from 'next/link';
import { N7BrandMark } from '@/components/N7BrandMark';
import { FOUNDER_INFO } from '@/data/academyData';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/Icons';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[#E5E5E0] bg-white pt-14 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Vision */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <N7BrandMark size="sm" variant="carbon" />
              <span className="text-lg font-black tracking-tight text-[#121212]">
                NIT7ER <span className="label-mono text-[#C9A84C]">Academy</span>
              </span>
            </div>

            <p className="text-sm text-[#71717A] leading-relaxed max-w-sm">
              The high-performance institute combining full-stack software engineering, Flow7 cognitive systems, structured writing, and fundamental computer education for serious builders.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={FOUNDER_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-[#E5E5E0] flex items-center justify-center text-[#71717A] hover:text-[#121212] hover:border-[#121212] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={FOUNDER_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-[#E5E5E0] flex items-center justify-center text-[#71717A] hover:text-[#121212] hover:border-[#121212] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={FOUNDER_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-[#E5E5E0] flex items-center justify-center text-[#71717A] hover:text-[#121212] hover:border-[#121212] transition-colors"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={FOUNDER_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-[#E5E5E0] bg-[#FAF9F6] text-[#121212] flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Academic Faculties */}
          <div className="md:col-span-4 space-y-3">
            <span className="label-mono block text-[#121212]">
              Academic Disciplines
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#71717A]">
              <li>
                <Link href="/programs#creative-tech" className="gold-link">
                  01. Creative Tech &amp; Software Engineering
                </Link>
              </li>
              <li>
                <Link href="/programs#cognitive-performance" className="gold-link">
                  02. Cognitive Performance &amp; Systems (Flow7)
                </Link>
              </li>
              <li>
                <Link href="/programs#writing-thought-leadership" className="gold-link">
                  03. Writing &amp; Thought Leadership
                </Link>
              </li>
              <li>
                <Link href="/programs#computer-education" className="gold-link">
                  04. Computer Education &amp; Digital Foundations
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional Links & Direct Contact */}
          <div className="md:col-span-3 space-y-3">
            <span className="label-mono block text-[#121212]">
              Incubator &amp; Studio
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#71717A]">
              <li>
                <Link href="/labs" className="gold-link flex items-center gap-1">
                  <span>NIT7ER Labs Showcase</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A84C]" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="gold-link flex items-center gap-1">
                  <span>Founder Thesis &amp; Story</span>
                </Link>
              </li>
              <li>
                <Link href="/apply" className="font-bold text-[#121212] hover:text-[#C9A84C] transition-colors">
                  Apply for Admission
                </Link>
              </li>
              <li>
                <a
                  href={FOUNDER_INFO.studioUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="gold-link flex items-center gap-1"
                >
                  <span>NIT7ER Studio Central</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A84C]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E5E5E0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>© 2026 NIT7ER Academy. All rights reserved. Directed by {FOUNDER_INFO.name}.</p>
          <div className="flex items-center gap-4">
            <span className="label-mono flex items-center gap-1.5 text-[#121212]">
              <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse"></span>
              <span>Next.js 16 • React 19 • Tailwind v4</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

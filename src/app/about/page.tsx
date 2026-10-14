import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FOUNDER_INFO } from '@/data/academyData';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/Icons';
import { N7BrandMark } from '@/components/N7BrandMark';
import {
  ShieldCheck,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Philosophy & Founder Story',
  description:
    'The founder story of Abdullah Qaasim-Falade, the genesis of NIT7ER Studio, and the institutional philosophy behind NIT7ER Academy.',
};

export default function AboutPage() {
  const coreTenets = [
    {
      number: '01',
      title: 'Systems Over Memorization',
      desc: 'True competence is proven when you sit before a blank screen, configure an architecture from scratch, and ship it to real users. Memorizing syntax for arbitrary tests produces fragile engineers.',
    },
    {
      number: '02',
      title: 'The Flow7 Reality Protocol',
      desc: 'Most people don’t suffer from a lack of talent; they suffer from self-deception about how they use their time. Logging reality without guilt is the foundation of compound mastery.',
    },
    {
      number: '03',
      title: 'Prose as an Engineering Primitive',
      desc: 'If you cannot explain an architectural choice in crisp, unambiguous sentences, you do not truly understand it. Writing is the highest leverage tool a builder possesses.',
    },
    {
      number: '04',
      title: 'The Polymath Advantage',
      desc: 'The future does not belong to narrow technicians who only know one framework. It belongs to builders who can write software, articulate value, maintain cognitive stamina, and understand computing systems.',
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Header */}
      <section className="technical-border p-6 sm:p-10 bg-white space-y-4">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FAF9F6] border border-[#E5E5E0] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C]"></span>
            <span className="font-bold text-[#121212]">INSTITUTIONAL PHILOSOPHY // FOUNDER THESIS</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#121212] tracking-tight leading-tight">
            Why We Built NIT7ER Academy.
          </h1>

          <p className="text-sm sm:text-base text-[#71717A] leading-relaxed font-normal">
            A manifesto on engineering rigor, cognitive self-regulation, and modern polymathic competence by founder Abdullah Qaasim-Falade.
          </p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="technical-border p-6 sm:p-10 bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#71717A] leading-relaxed">
          <span className="label-mono text-[#C9A84C] block">
            Founder Biography &amp; Genesis
          </span>
          <h2 className="text-2xl font-black text-[#121212] tracking-tight">
            From Lagos Studio to Educational Incubator
          </h2>

          <p>
            I founded <strong>NIT7ER</strong> in Lagos as a creative technology and internal infrastructure studio. Over years of building bespoke software systems, mobile applications, and proprietary products like <strong>Flow7</strong>, <strong>Clasquera</strong>, and <strong>Lang Huey</strong>, a recurring pattern became impossible to ignore:
          </p>

          <p className="p-4 bg-[#FAF9F6] border-l-2 border-[#C9A84C] text-[#121212] font-mono text-xs italic">
            &ldquo;Conventional universities and coding bootcamps teach isolated technical fragments while completely ignoring the human cognitive engine that produces the work. Students graduate knowing syntax, but with zero stamina for deep work, no ability to communicate with decision-makers, and zero understanding of how systems live in the real world.&rdquo;
          </p>

          <p>
            NIT7ER Academy is the antidote. We built this institution not to grant paper certificates, but to train self-driven builders who can think with clarity, execute with consistency, and ship systems that hold up under commercial pressure.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono font-bold text-[#121212]">
            <span className="px-3 py-1 bg-[#FAF9F6] border border-[#E5E5E0]">Creative Technologist</span>
            <span className="px-3 py-1 bg-[#FAF9F6] border border-[#E5E5E0]">Systems Architect</span>
            <span className="px-3 py-1 bg-[#FAF9F6] border border-[#E5E5E0]">Founder, Flow7</span>
            <span className="px-3 py-1 bg-[#FAF9F6] border border-[#E5E5E0]">Lagos, Nigeria</span>
          </div>
        </div>

        {/* Founder Card & Channels */}
        <div className="lg:col-span-5 bg-[#FAF9F6] border border-[#E5E5E0] p-6 space-y-5">
          <div className="flex items-center gap-3">
            <N7BrandMark size="md" variant="carbon" />
            <div>
              <h3 className="text-base font-bold text-[#121212]">
                {FOUNDER_INFO.name}
              </h3>
              <p className="label-mono text-[9px] text-[#71717A]">
                {FOUNDER_INFO.title}
              </p>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-[#71717A] border-t border-[#E5E5E0] pt-4 font-mono">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#C9A84C]" />
              <a href={`mailto:${FOUNDER_INFO.email}`} className="hover:underline text-[#121212]">
                {FOUNDER_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#C9A84C]" />
              <a href={`tel:${FOUNDER_INFO.phone}`} className="hover:underline text-[#121212]">
                {FOUNDER_INFO.phone}
              </a>
            </div>
          </div>

          <div className="pt-2 border-t border-[#E5E5E0] flex items-center gap-2">
            <a
              href={FOUNDER_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 bg-white border border-[#E5E5E0] text-xs font-mono font-bold text-[#121212] hover:border-[#121212] transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3 h-3" />
              <span>GitHub</span>
            </a>
            <a
              href={FOUNDER_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 bg-white border border-[#E5E5E0] text-xs font-mono font-bold text-[#121212] hover:border-[#121212] transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3 h-3" />
              <span>LinkedIn</span>
            </a>
            <a
              href={FOUNDER_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 bg-[#121212] text-white text-xs font-mono font-bold hover:bg-[#27272A] transition-colors flex items-center gap-1.5 ml-auto"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* The 4 Institutional Tenets */}
      <section className="space-y-6">
        <div className="border-b border-[#E5E5E0] pb-3">
          <span className="label-mono text-[#C9A84C]">Operational Discipline</span>
          <h2 className="text-xl sm:text-2xl font-black text-[#121212] tracking-tight mt-1">
            Our 4 Operational Tenets
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {coreTenets.map((tenet) => (
            <div
              key={tenet.number}
              className="technical-border p-6 bg-white space-y-2.5"
            >
              <div className="flex items-center justify-between font-mono">
                <span className="text-xl font-bold text-[#C9A84C]">
                  [{tenet.number}]
                </span>
                <ShieldCheck className="w-4 h-4 text-[#121212]" />
              </div>
              <h3 className="font-bold text-base text-[#121212]">
                {tenet.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#71717A] leading-relaxed">
                {tenet.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

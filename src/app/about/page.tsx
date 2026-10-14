import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { FOUNDER_INFO } from '@/data/academyData';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/Icons';
import { N7BrandMark } from '@/components/N7BrandMark';
import { TeamShowcase } from '@/components/ui/TeamShowcase';
import {
  ShieldCheck,
  Mail,
  Phone,
  MessageCircle,
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
      <section className="technical-border curve-asymmetric p-6 sm:p-10 bg-white space-y-4 border border-[#D9E6F0] shadow-xs">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#1769AA] pulse-ring"></span>
            <span className="font-bold text-[#12345B]">INSTITUTIONAL PHILOSOPHY // FOUNDER THESIS</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#12345B] tracking-tight leading-tight">
            Why We Built NIT7ER Academy.
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
            A manifesto on engineering rigor, cognitive self-regulation, and modern polymathic competence by founder Abdullah Qaasim-Falade.
          </p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="technical-border curve-asymmetric p-6 sm:p-10 bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border border-[#D9E6F0] shadow-xs">
        <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#64748B] leading-relaxed">
          <span className="label-mono px-2.5 py-0.5 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0]">
            Founder Biography &amp; Genesis
          </span>
          <h2 className="text-2xl font-black text-[#12345B] tracking-tight pt-1">
            From Lagos Studio to Educational Incubator
          </h2>

          <p>
            I founded <strong>NIT7ER</strong> in Lagos as a creative technology and internal infrastructure studio. Over years of building bespoke software systems, mobile applications, and proprietary products like <strong>Flow7</strong>, <strong>Clasquera</strong>, and <strong>Lang Huey</strong>, a recurring pattern became impossible to ignore:
          </p>

          <div className="p-5 rounded-2xl bg-[#EEF7FC]/70 border-l-4 border-[#1769AA] text-[#1F2937] font-mono text-xs italic leading-relaxed">
            &ldquo;Conventional universities and coding bootcamps teach isolated technical fragments while completely ignoring the human cognitive engine that produces the work. Students graduate knowing syntax, but with zero stamina for deep work, no ability to communicate with decision-makers, and zero understanding of how systems live in the real world.&rdquo;
          </div>

          <p>
            NIT7ER Academy is the antidote. We built this institution not to grant paper certificates, but to train self-driven builders who can think with clarity, execute with consistency, and ship systems that hold up under commercial pressure.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono font-bold text-[#12345B]">
            <span className="px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full">Creative Technologist</span>
            <span className="px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full">Systems Architect</span>
            <span className="px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full">Founder, Flow7</span>
            <span className="px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full">Lagos, Nigeria</span>
          </div>
        </div>

        {/* Founder Card & Channels */}
        <div className="lg:col-span-5 curve-soft bg-[#EEF7FC]/70 border border-[#D9E6F0] rounded-2xl p-6 space-y-5 shadow-xs">
          <div className="flex items-center gap-3">
            <N7BrandMark size="lg" variant="gold" />
            <div>
              <h3 className="text-base font-bold text-[#12345B]">
                {FOUNDER_INFO.name}
              </h3>
              <p className="label-mono text-[9px] text-[#64748B]">
                {FOUNDER_INFO.title}
              </p>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-[#64748B] border-t border-[#D9E6F0] pt-4 font-mono">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#1769AA]" />
              <a href={`mailto:${FOUNDER_INFO.email}`} className="hover:underline text-[#12345B]">
                {FOUNDER_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#1769AA]" />
              <a href={`tel:${FOUNDER_INFO.phone}`} className="hover:underline text-[#12345B]">
                {FOUNDER_INFO.phone}
              </a>
            </div>
          </div>

          <div className="pt-2 border-t border-[#D9E6F0] flex items-center gap-2">
            <a
              href={FOUNDER_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="btn-press px-3 py-1.5 bg-white border border-[#D9E6F0] rounded-full text-xs font-mono font-bold text-[#12345B] hover:border-[#12345B] transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <GithubIcon className="w-3 h-3" />
              <span>GitHub</span>
            </a>
            <a
              href={FOUNDER_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-press px-3 py-1.5 bg-white border border-[#D9E6F0] rounded-full text-xs font-mono font-bold text-[#12345B] hover:border-[#12345B] transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <LinkedinIcon className="w-3 h-3" />
              <span>LinkedIn</span>
            </a>
            <a
              href={FOUNDER_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-press px-3.5 py-1.5 bg-[#12345B] text-white text-xs font-mono font-bold rounded-full hover:bg-[#1769AA] transition-colors flex items-center gap-1.5 ml-auto shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#E6AD3C]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Visual Studio Cohort & Culture Banner */}
      <section className="technical-border curve-asymmetric p-6 sm:p-10 bg-white border border-[#D9E6F0] shadow-xs relative overflow-hidden">
        {/* Subtle Decorative Background Contour */}
        <div
          className="absolute -top-12 -right-12 w-80 h-80 opacity-15 pointer-events-none bg-contain bg-no-repeat"
          style={{ backgroundImage: `url('/brand/contour-blob.png')` }}
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#E6AD3C] pulse-ring"></span>
              <span className="font-bold text-[#12345B]">STUDIO CULTURE // COLLECTIVE VELOCITY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#12345B] tracking-tight">
              An Apprenticeship Model for the Independent Era.
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              We do not treat engineering as an isolated solitary exercise or an academic lecture. At NIT7ER Studio, cohorts collaborate around open workstations, review real pull requests, log cognitive focus sessions via Flow7, and defend architecture directly before peers and founders.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-[#1769AA]">
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#12345B]"></span>
                Lagos Studio Workstations
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E6AD3C]"></span>
                Async Global Cohorts
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 flex items-center justify-center p-4 bg-[#EEF7FC]/50 rounded-2xl border border-[#D9E6F0]/80">
            <div className="relative w-full h-56 sm:h-64">
              <Image
                src="/brand/illustration-team-tight.png"
                alt="NIT7ER Studio Team Collaboration"
                width={1191}
                height={910}
                className="w-full h-full object-contain drop-shadow-xs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Core Studio Faculty & Practitioners */}
      <TeamShowcase />

      {/* The 4 Institutional Tenets */}
      <section className="space-y-6">
        <div className="border-b border-[#D9E6F0] pb-3">
          <span className="label-mono px-2.5 py-0.5 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0]">
            Operational Discipline
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#12345B] tracking-tight mt-1.5">
            Our 4 Operational Tenets
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {coreTenets.map((tenet) => (
            <div
              key={tenet.number}
              className="technical-border curve-soft p-6 bg-white space-y-2.5 border border-[#D9E6F0] rounded-2xl shadow-xs hover:border-[#1769AA] hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center justify-between font-mono">
                <span className="text-xl font-bold text-[#1769AA]">
                  [{tenet.number}]
                </span>
                <ShieldCheck className="w-4 h-4 text-[#12345B]" />
              </div>
              <h3 className="font-bold text-base text-[#12345B]">
                {tenet.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {tenet.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

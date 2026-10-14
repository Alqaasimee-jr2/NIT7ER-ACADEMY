import React from 'react';
import Link from 'next/link';
import {
  Code2,
  BrainCircuit,
  PenTool,
  Monitor,
  Layers,
  ArrowRight,
  Send,
} from 'lucide-react';

export function QuickLaunchpad() {
  const launchpadItems = [
    {
      index: '01',
      title: 'Creative Technology',
      subtitle: 'Next.js 16, Flutter, AI telemetry & edge systems',
      href: '/programs#creative-tech',
      icon: Code2,
      badge: 'FACULTY',
    },
    {
      index: '02',
      title: 'Cognitive Systems (Flow7)',
      subtitle: 'Reality logging, stamina & focus frameworks',
      href: '/programs#cognitive-performance',
      icon: BrainCircuit,
      badge: 'STAMINA',
    },
    {
      index: '03',
      title: 'Writing & Thought Leadership',
      subtitle: 'Technical specs, architectural prose & copy',
      href: '/programs#writing-thought-leadership',
      icon: PenTool,
      badge: 'PROSE',
    },
    {
      index: '04',
      title: 'Computer Education',
      subtitle: 'First principles, algorithms & smartboards',
      href: '/programs#computer-education',
      icon: Monitor,
      badge: 'FOUNDATIONS',
    },
    {
      index: '05',
      title: 'NIT7ER Labs Showcase',
      subtitle: 'Live products: Flow7, Clasquera, Lang Huey',
      href: '/labs',
      icon: Layers,
      badge: 'PORTFOLIO',
    },
    {
      index: '06',
      title: 'Cohort Application',
      subtitle: 'Hybrid diagnostic with WhatsApp confirmation',
      href: '/apply',
      icon: Send,
      badge: 'ADMISSIONS',
    },
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-[#D9E6F0]">
        <div className="flex items-center gap-2">
          <span className="label-mono px-2.5 py-0.5 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0]">
            QUICK ACCESS
          </span>
          <span className="text-xs font-bold text-[#12345B]">
            Studio Core Navigation
          </span>
        </div>
        <span className="label-mono text-[10px] text-[#64748B]">
          Direct Endpoint Launchpad
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {launchpadItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              href={item.href}
              className="group n7-card curve-soft p-4 sm:p-5 flex flex-col justify-between border border-[#D9E6F0] rounded-2xl hover:border-[#1769AA] transition-all hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EEF7FC] border border-[#D9E6F0] group-hover:border-[#12345B] group-hover:bg-[#12345B] group-hover:text-white text-[#12345B] flex items-center justify-center transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="label-mono text-[9px] px-2 py-0.5 rounded-full bg-[#FAFCFE] text-[#64748B] border border-[#D9E6F0] group-hover:border-[#E6AD3C] group-hover:text-[#12345B] transition-colors">
                    [{item.index} // {item.badge}]
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-[#12345B] group-hover:text-[#1769AA] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-2.5 border-t border-[#D9E6F0] flex items-center justify-between text-xs font-mono font-bold text-[#64748B] group-hover:text-[#12345B]">
                <span className="text-[11px]">ACCESS SECTOR</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#E6AD3C]" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

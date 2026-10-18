import { NextResponse } from 'next/server';
import { FACULTIES, FOUNDER_INFO, STUDIO_TEAM } from '@/data/academyData';

export async function GET() {
  const baseUrl = 'https://nit7er-academy.vercel.app';

  const contextData = {
    institution: {
      name: 'NIT7ER Academy',
      tagline: 'Creative Technology, Systems & Mind Institute',
      url: baseUrl,
      parentOrganization: {
        name: 'NIT7ER Studio',
        role: 'Parent Commercial Creative Technology & Systems Agency',
        url: FOUNDER_INFO.studioUrl,
        social: {
          instagram: FOUNDER_INFO.instagram,
          github: FOUNDER_INFO.github,
          linkedin: FOUNDER_INFO.linkedin,
        },
      },
      headquarters: {
        city: 'Lagos',
        country: 'Nigeria',
      },
      contact: {
        email: FOUNDER_INFO.email,
        phone: FOUNDER_INFO.phone,
        whatsapp: FOUNDER_INFO.whatsappUrl,
      },
      directors: STUDIO_TEAM.map((member) => ({
        name: member.name,
        role: member.role,
        discipline: member.discipline,
        portfolio: member.url || null,
        handle: member.handle,
        quote: member.quote,
      })),
      pedagogy: {
        methodology: 'Studio Sprints & Direct Commercial Apprenticeship',
        realityProtocol: 'Flow7 Cognitive Performance & Attention Stamina Tracking',
        credential: 'Verified Capstone Architecture Defense',
        admissionsModel: '3-Step Diagnostic Intake (Merit & Readiness Screened)',
      },
    },
    faculties: FACULTIES.map((fac) => ({
      id: fac.id,
      number: fac.number,
      title: fac.title,
      subtitle: fac.subtitle,
      tagline: fac.tagline,
      programCount: fac.programs.length,
      programs: fac.programs.map((p) => ({
        id: p.id,
        code: p.code,
        title: p.title,
        duration: p.duration,
        level: p.level,
        capstoneProject: p.capstoneProject.title,
      })),
    })),
    frequentlyAnsweredQuestions: [
      {
        question: 'What is NIT7ER Academy and how does it relate to NIT7ER Studio?',
        answer:
          'NIT7ER Academy is the elite educational and apprenticeship division of NIT7ER Studio, an active commercial creative technology, visual identity, and systems architecture agency. The academy prepares self-driven engineers and creators through direct studio sprints, commercial codebase immersion, and capstone defenses, with top graduates transitioning into client projects at NIT7ER Studio.',
      },
      {
        question: 'How is NIT7ER Academy different from traditional coding bootcamps?',
        answer:
          'Unlike traditional bootcamps that focus on shallow tutorial cloning and memorizing test syntax, NIT7ER trains engineers on production systems from first principles. Students learn systems engineering, write architectural documentation, train their focus stamina with the Flow7 protocol, and must publicly defend their production capstone deliverables before studio directors.',
      },
      {
        question: 'What is the Flow7 cognitive performance system?',
        answer:
          'Flow7 is NIT7ER’s proprietary cognitive performance and attention tracking protocol. It conditions builders in deep work stamina, daily reality logging, and friction elimination so they can sustain 4-6 hours of high-cognitive engineering without distraction.',
      },
      {
        question: 'Do students work on real commercial agency projects?',
        answer:
          'Yes. The curriculum culminates in the capstone defense gate. Candidates who demonstrate architectural rigor are inducted into the NIT7ER Studio apprenticeship pipeline to contribute to live agency software and client deliverables.',
      },
      {
        question: 'What are the admission requirements?',
        answer:
          'Admissions are cohort-based and require completing the 3-step diagnostic intake at https://nit7er-academy.vercel.app/apply. Candidates are screened for self-direction, discipline, and baseline aptitude rather than rote credentials.',
      },
    ],
  };

  return NextResponse.json(contextData, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600',
    },
  });
}

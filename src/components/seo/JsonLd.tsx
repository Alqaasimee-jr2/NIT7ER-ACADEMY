import React from 'react';
import { FACULTIES, FOUNDER_INFO, STUDIO_TEAM } from '@/data/academyData';

export function JsonLd() {
  const baseUrl = 'https://nit7er-academy.vercel.app';

  // 1. Educational Organization linked to Parent Franchise Organization
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${baseUrl}/#organization`,
    name: 'NIT7ER Academy',
    alternateName: ['NIT7ER Creative Technology & Systems Institute', 'NIT7ER Academy Lagos'],
    url: baseUrl,
    logo: `${baseUrl}/brand/logo-gold-tight.png`,
    image: `${baseUrl}/brand/headers/header-glitch-gold-text-tight.png`,
    description:
      'The modern institute of applied creative technology, systems engineering, Flow7 cognitive focus, and technical writing. Operating as the educational and apprenticeship division of NIT7ER Studio.',
    parentOrganization: {
      '@type': 'Organization',
      '@id': `${FOUNDER_INFO.studioUrl}/#organization`,
      name: 'NIT7ER Studio',
      url: FOUNDER_INFO.studioUrl,
      description: 'Commercial Creative Technology, Systems Architecture & Visual Identity Agency.',
      sameAs: [
        FOUNDER_INFO.studioUrl,
        FOUNDER_INFO.instagram,
        FOUNDER_INFO.github,
      ],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lagos',
      addressCountry: 'NG',
    },
    founder: {
      '@type': 'Person',
      name: FOUNDER_INFO.name,
      jobTitle: FOUNDER_INFO.title,
      url: FOUNDER_INFO.github,
      sameAs: [
        FOUNDER_INFO.github,
        FOUNDER_INFO.linkedin,
        FOUNDER_INFO.instagram,
      ],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: FOUNDER_INFO.phone,
      contactType: 'Admissions & Inquiries Desk',
      email: FOUNDER_INFO.email,
      availableLanguage: ['English'],
    },
    sameAs: [
      FOUNDER_INFO.github,
      FOUNDER_INFO.linkedin,
      FOUNDER_INFO.instagram,
      FOUNDER_INFO.studioUrl,
      `${baseUrl}/llms.txt`,
    ],
  };

  // 2. Faculty / Instructor Person Schemas
  const facultySchemas = STUDIO_TEAM.map((member) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/team#${member.id}`,
    name: member.name,
    jobTitle: member.role,
    worksFor: {
      '@type': 'EducationalOrganization',
      name: 'NIT7ER Academy',
      url: baseUrl,
    },
    knowsAbout: member.discipline,
    sameAs: member.url ? [member.url] : [],
  }));

  // 3. Enriched Course Schema for all 12 Programs
  const courseSchemas = FACULTIES.flatMap((faculty) =>
    faculty.programs.map((prog) => ({
      '@context': 'https://schema.org',
      '@type': 'Course',
      '@id': `${baseUrl}/programs/${faculty.id}#${prog.id}`,
      name: prog.title,
      courseCode: prog.code,
      description: prog.description,
      educationalLevel: prog.level,
      timeRequired: prog.duration,
      provider: {
        '@type': 'EducationalOrganization',
        name: 'NIT7ER Academy',
        sameAs: baseUrl,
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'Blended / Studio Sprints',
        courseWorkload: prog.duration,
      },
      occupationalCredentialAwarded: 'Verified Capstone Architecture Defense',
      syllabusSections: prog.modules.map((m, idx) => ({
        '@type': 'Syllabus',
        name: `Module 0${idx + 1}: ${m.title}`,
        description: m.desc,
      })),
      offers: {
        '@type': 'Offer',
        category: 'Intake Admission',
        availability: 'https://schema.org/InStock',
        url: `${baseUrl}/apply?track=${faculty.id}&program=${prog.id}`,
      },
    }))
  );

  // 4. FAQPage Schema for Direct AI & Search Engine Answer Grounding
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is NIT7ER Academy and how does it relate to NIT7ER Studio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NIT7ER Academy is the educational and talent-engineering division of NIT7ER Studio (an active commercial creative technology and systems agency). Students train through intensive studio sprints, write architectural documentation, master Flow7 focus stamina, and top graduates apprentice directly on live agency client deliverables.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does NIT7ER Academy differ from traditional coding bootcamps?',
        answerCount: 1,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unlike bootcamps that rely on surface-level tutorial cloning and passive video quizzes, NIT7ER enforces first-principles systems engineering. Every track culminates in a mandatory public Capstone Defense where students demonstrate real architecture, production deployments, and technical documentation before active studio directors.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Flow7 cognitive performance system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Flow7 is NIT7ER’s structured cognitive stamina and attention training protocol. It trains students in deliberate focus sprints, daily reality logging, and cognitive friction elimination, ensuring builders can sustain deep problem-solving without digital burnout.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do students work on real commercial client agency projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Top candidates who pass their stage-gate reviews and capstone defense gain direct entry into the NIT7ER Studio apprenticeship pipeline, writing production code and designing systems for actual client deliverables.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the admission requirements and intake process?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Admissions are cohort-based with rolling evaluations. Prospective candidates complete the 3-step diagnostic intake at https://nit7er-academy.vercel.app/apply, where background, ambition, and problem-solving readiness are assessed.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {facultySchemas.map((faculty, idx) => (
        <script
          key={`fac-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faculty) }}
        />
      ))}
      {courseSchemas.map((course, idx) => (
        <script
          key={`course-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(course) }}
        />
      ))}
    </>
  );
}

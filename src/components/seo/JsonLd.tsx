import React from 'react';
import { FACULTIES, FOUNDER_INFO } from '@/data/academyData';

export function JsonLd() {
  const baseUrl = 'https://nit7er-academy.vercel.app';

  // 1. Educational Organization
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'NIT7ER Academy',
    alternateName: 'NIT7ER Studio & Academy',
    url: baseUrl,
    logo: `${baseUrl}/brand/headers/header-banner-gold-tight.png`,
    description:
      'The Institute of Applied Creative Technology, Systems Architecture, Cognitive Focus & Computer Foundations.',
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
      contactType: 'Admissions & Inquiries',
      email: FOUNDER_INFO.email,
      availableLanguage: ['English'],
    },
    sameAs: [
      FOUNDER_INFO.github,
      FOUNDER_INFO.linkedin,
      FOUNDER_INFO.instagram,
      'https://nit7er.vercel.app',
    ],
  };

  // 2. Course Schema for all 12 Programs
  const allCourses = FACULTIES.flatMap((faculty) =>
    faculty.programs.map((prog) => ({
      '@context': 'https://schema.org',
      '@type': 'Course',
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
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      {allCourses.map((course, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(course) }}
        />
      ))}
    </>
  );
}

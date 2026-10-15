import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FACULTIES } from '@/data/academyData';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FacultyHubView } from '@/components/ui/FacultyHubView';

interface PageProps {
  params: Promise<{ facultyId: string }>;
}

export function generateStaticParams() {
  return FACULTIES.map((fac) => ({
    facultyId: fac.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { facultyId } = await params;
  const faculty = FACULTIES.find((f) => f.id === facultyId);

  if (!faculty) {
    return {
      title: 'Faculty Not Found | NIT7ER Academy',
    };
  }

  return {
    title: `${faculty.title} (Faculty ${faculty.number})`,
    description: `${faculty.subtitle}. ${faculty.tagline}`,
    openGraph: {
      title: `${faculty.title} | NIT7ER Academy`,
      description: faculty.description,
    },
  };
}

export default async function FacultyHubPage({ params }: PageProps) {
  const { facultyId } = await params;
  const faculty = FACULTIES.find((f) => f.id === facultyId);

  if (!faculty) {
    notFound();
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <Breadcrumbs
        items={[
          { label: 'Curriculum & Catalog', href: '/programs' },
          { label: `Faculty ${faculty.number}: ${faculty.title}` },
        ]}
      />
      <FacultyHubView faculty={faculty} />
    </div>
  );
}

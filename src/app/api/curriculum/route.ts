import { NextResponse } from 'next/server';
import { FACULTIES } from '@/data/academyData';

export async function GET() {
  const curriculumData = {
    institution: 'NIT7ER Academy',
    version: '2026.1',
    totalFaculties: FACULTIES.length,
    totalPrograms: FACULTIES.reduce((acc, f) => acc + f.programs.length, 0),
    faculties: FACULTIES.map((faculty) => ({
      id: faculty.id,
      number: faculty.number,
      title: faculty.title,
      subtitle: faculty.subtitle,
      tagline: faculty.tagline,
      duration: faculty.duration,
      format: faculty.format,
      programs: faculty.programs.map((prog) => ({
        id: prog.id,
        code: prog.code,
        title: prog.title,
        tagline: prog.tagline,
        duration: prog.duration,
        level: prog.level,
        format: prog.format,
        targetAudience: prog.targetAudience,
        description: prog.description,
        learningOutcomes: prog.learningOutcomes,
        modulesCount: prog.modules.length,
        modules: prog.modules.map((m, idx) => ({
          moduleNumber: idx + 1,
          title: m.title,
          description: m.desc,
          topics: m.topics,
        })),
        capstoneProject: {
          title: prog.capstoneProject.title,
          description: prog.capstoneProject.description,
          deliverable: prog.capstoneProject.deliverable,
        },
        weeklyPhases: prog.weeklyPhases || [],
      })),
    })),
  };

  return NextResponse.json(curriculumData, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600',
    },
  });
}

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON request payload.' },
      { status: 400 }
    );
  }

  try {
    const { fullName, email, phone, faculty, experience, goals, portfolioUrl } = body || {};

    if (!fullName || !email || !faculty) {
      return NextResponse.json(
        { error: 'Missing required application fields (Full Name, Email, Track).' },
        { status: 400 }
      );
    }

    // Generate unique institutional registration reference
    const refCode = `NIT7-${Math.floor(100000 + Math.random() * 900000)}`;

    // In production, this can send an email via Resend or save to DB.
    console.log('[NIT7ER ACADEMY INTAKE]: New Application Received', {
      refCode,
      fullName,
      email,
      phone,
      faculty,
      experience,
      goals,
      portfolioUrl,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      refCode,
      message: 'Application successfully registered in NIT7ER intake queue.',
    });
  } catch (error) {
    console.error('Application API error:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing application.' },
      { status: 500 }
    );
  }
}

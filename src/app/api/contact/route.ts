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
    const { fullName, email, phone, category, message } = body || {};

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required contact fields (Full Name, Email, and Message).' },
        { status: 400 }
      );
    }

    const refCode = `INQ-${Math.floor(100000 + Math.random() * 900000)}`;

    console.log('[NIT7ER ACADEMY CONTACT]: New Inquiry Received', {
      refCode,
      fullName,
      email,
      phone: phone || 'N/A',
      category: category || 'General Inquiry',
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      refCode,
      message: 'Inquiry successfully registered in NIT7ER communication desk.',
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing inquiry.' },
      { status: 500 }
    );
  }
}

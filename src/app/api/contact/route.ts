import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, budget, timeline, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Log the form data (in production, you would send this to an email service)
    console.log('Contact form submission:', {
      name,
      email,
      company,
      projectType,
      budget,
      timeline,
      message,
      timestamp: new Date().toISOString()
    });

    // Here you would integrate with an email service like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Nodemailer with SMTP
    // - EmailJS
    // - Formspree
    // - Netlify Forms
    // - Vercel's built-in email functionality

    // For now, we'll just return a success response
    return NextResponse.json(
      { 
        message: 'Message received successfully!',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


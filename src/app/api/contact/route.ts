import { NextResponse } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = { name: 100, email: 254, subject: 200, message: 5000 };

function sanitize(str: string): string {
  return str.trim().replace(/<[^>]*>/g, '');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    if (
      name.length > MAX_FIELD_LENGTH.name ||
      email.length > MAX_FIELD_LENGTH.email ||
      (subject && subject.length > MAX_FIELD_LENGTH.subject) ||
      message.length > MAX_FIELD_LENGTH.message
    ) {
      return NextResponse.json(
        { error: 'One or more fields exceed maximum length' },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      subject: sanitize(subject || 'General Inquiry'),
      message: sanitize(message),
    };

    // TODO: Replace with actual email service (SendGrid, Resend, etc.)
    console.log('Contact form submission:', sanitizedData);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

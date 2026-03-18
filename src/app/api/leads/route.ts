import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would save this to a database (e.g. Prisma + SQLite/Postgres)
    // or send an email via Resend / SendGrid.
    
    console.log('Lead captured:', body);
    
    return NextResponse.json({ success: true, message: "Catalog requested successfully!" }, { status: 200 });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to process request" }, { status: 500 });
  }
}

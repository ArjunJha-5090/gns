import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'Gyan Niketan School - Next.js',
    timestamp: new Date().toISOString(),
    hasApiKey: !!(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY_HERE'),
    environment: process.env.NODE_ENV || 'development',
  });
}

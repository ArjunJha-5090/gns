// IMPORTANT: This API route writes data directly to the local filesystem using `fs`.
// If deployed to a serverless environment like Vercel, these writes will NOT persist.
// You must migrate this to a database (MongoDB, Firebase, etc.) before production deployment.
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const NEWSLETTER_FILE = path.join(process.cwd(), 'data', 'newsletter.json');

function ensureFile() {
  const dir = path.dirname(NEWSLETTER_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(NEWSLETTER_FILE)) fs.writeFileSync(NEWSLETTER_FILE, '[]', 'utf8');
}
function readData() {
  try { return JSON.parse(fs.readFileSync(NEWSLETTER_FILE, 'utf8')); } catch { return []; }
}
function writeData(data: unknown[]) {
  fs.writeFileSync(NEWSLETTER_FILE, JSON.stringify(data, null, 2), 'utf8');
}
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    ensureFile();
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ status: 'error', message: 'Email is required.' }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ status: 'error', message: 'Please provide a valid email address.' }, { status: 400 });
    }

    const subs = readData();
    if (subs.find((s: { email: string }) => s.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json({ status: 'success', message: 'Already subscribed!' });
    }

    subs.push({
      id: Date.now().toString(36) + Math.random().toString(36).substring(2, 7),
      timestamp: new Date().toISOString(),
      email,
    });
    writeData(subs);

    return NextResponse.json({ status: 'success', message: 'Subscribed successfully!' });
  } catch (err) {
    console.error('[Newsletter Error]', err);
    return NextResponse.json({ status: 'error', message: 'Something went wrong.' }, { status: 500 });
  }
}

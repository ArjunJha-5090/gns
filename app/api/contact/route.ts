// IMPORTANT: This API route writes data directly to the local filesystem using `fs`.
// If deployed to a serverless environment like Vercel, these writes will NOT persist.
// You must migrate this to a database (MongoDB, Firebase, etc.) before production deployment.
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const CONTACT_FILE = path.join(DATA_DIR, 'contacts.json');
const NEWSLETTER_FILE = path.join(DATA_DIR, 'newsletter.json');

function ensureFiles() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(CONTACT_FILE)) fs.writeFileSync(CONTACT_FILE, '[]', 'utf8');
  if (!fs.existsSync(NEWSLETTER_FILE)) fs.writeFileSync(NEWSLETTER_FILE, '[]', 'utf8');
}
function readJSON(file: string) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return []; }
}
function writeJSON(file: string, data: unknown[]) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
}
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function sanitize(str: unknown): string {
  if (typeof str !== 'string') return '';
  return str.trim().replace(/<[^>]*>/g, '').substring(0, 1000);
}

// POST /api/contact — Submit contact message
export async function POST(req: NextRequest) {
  try {
    ensureFiles();
    const body = await req.json();
    const { name, email, gender, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ status: 'error', message: 'Name, email, and message are required.' }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ status: 'error', message: 'Please provide a valid email address.' }, { status: 400 });
    }

    const entry = {
      id: Date.now().toString(36) + Math.random().toString(36).substring(2, 7),
      timestamp: new Date().toISOString(),
      name: sanitize(name),
      email: sanitize(email),
      gender: sanitize(gender || ''),
      message: sanitize(message),
      read: false,
    };

    const contacts = readJSON(CONTACT_FILE);
    contacts.push(entry);
    writeJSON(CONTACT_FILE, contacts);

    return NextResponse.json({ status: 'success', message: 'Message sent successfully.' });
  } catch (err) {
    console.error('[Contact Error]', err);
    return NextResponse.json({ status: 'error', message: 'Something went wrong.' }, { status: 500 });
  }
}

// GET /api/contact — View all messages (admin)
export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization');
  if (!auth || !auth.startsWith('Bearer ')) {
    return NextResponse.json({ status: 'error', message: 'Authentication required.' }, { status: 401 });
  }
  ensureFiles();
  const contacts = readJSON(CONTACT_FILE);
  return NextResponse.json({ status: 'success', total: contacts.length, contacts });
}

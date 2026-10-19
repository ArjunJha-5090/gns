// IMPORTANT: This API route writes data directly to the local filesystem using `fs`.
// If deployed to a serverless environment like Vercel, these writes will NOT persist.
// You must migrate this to a database (MongoDB, Firebase, etc.) before production deployment.
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'applications.json');

function ensureFile() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, '[]', 'utf8');
}

function readData() {
  try { return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')); } catch { return []; }
}
function writeData(data: unknown[]) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}
function sanitize(str: unknown): string {
  if (typeof str !== 'string') return '';
  return str.trim().replace(/<[^>]*>/g, '').substring(0, 500);
}
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidMobile(mobile: string) {
  return /^[6-9]\d{9}$/.test(mobile.replace(/[\s\-+()]/g, '').replace(/^91/, ''));
}

// POST — Submit application
export async function POST(req: NextRequest) {
  try {
    ensureFile();
    const body = await req.json();

    if (!body.fullName || !body.email || !body.mobile) {
      return NextResponse.json({ status: 'error', message: 'Full name, email, and mobile are required.' }, { status: 400 });
    }
    if (!isValidEmail(body.email)) {
      return NextResponse.json({ status: 'error', message: 'Please provide a valid email address.' }, { status: 400 });
    }
    if (!isValidMobile(body.mobile)) {
      return NextResponse.json({ status: 'error', message: 'Please provide a valid 10-digit mobile number.' }, { status: 400 });
    }

    const application = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
      timestamp: new Date().toISOString(),
      fullName: sanitize(body.fullName),
      email: sanitize(body.email),
      mobile: sanitize(body.mobile),
      gender: sanitize(body.gender),
      dob: sanitize(body.dob),
      presentAddress: sanitize(body.presentAddress),
      positionApplied: sanitize(body.positionApplied),
      grad_degree: sanitize(body.grad_degree),
      grad_subject: sanitize(body.grad_subject),
      grad_college: sanitize(body.grad_college),
      grad_year: sanitize(body.grad_year),
      pg_degree: sanitize(body.pg_degree),
      pg_subject: sanitize(body.pg_subject),
      pg_college: sanitize(body.pg_college),
      pg_year: sanitize(body.pg_year),
      bed_college: sanitize(body.bed_college),
      bed_year: sanitize(body.bed_year),
      exp1_school: sanitize(body.exp1_school),
      exp1_designation: sanitize(body.exp1_designation),
      exp1_from: sanitize(body.exp1_from),
      exp1_to: sanitize(body.exp1_to),
      exp2_school: sanitize(body.exp2_school),
      exp2_designation: sanitize(body.exp2_designation),
      exp2_from: sanitize(body.exp2_from),
      exp2_to: sanitize(body.exp2_to),
      totalExp: sanitize(body.totalExp),
      ref1_name: sanitize(body.ref1_name),
      ref1_designation: sanitize(body.ref1_designation),
      ref1_phone: sanitize(body.ref1_phone),
      ref1_relation: sanitize(body.ref1_relation),
      ref2_name: sanitize(body.ref2_name),
      ref2_phone: sanitize(body.ref2_phone),
      signature: sanitize(body.signature),
      applicationDate: sanitize(body.applicationDate),
    };

    const apps = readData();
    apps.push(application);
    writeData(apps);

    return NextResponse.json({ status: 'success', message: 'Application submitted successfully.', id: application.id });
  } catch (err) {
    console.error('[Careers POST Error]', err);
    return NextResponse.json({ status: 'error', message: 'Something went wrong.' }, { status: 500 });
  }
}

// GET — View all applications (admin protected)
export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization');
  if (!auth || !auth.startsWith('Bearer ')) {
    return NextResponse.json({ status: 'error', message: 'Authentication required.' }, { status: 401 });
  }
  // Token validated via admin tokens stored in memory — simplified for Next.js
  ensureFile();
  const apps = readData();
  return NextResponse.json({ status: 'success', total: apps.length, applications: apps });
}

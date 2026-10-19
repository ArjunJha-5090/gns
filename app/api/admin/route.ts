import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// In-memory token store (cleared on server restart)
const activeTokens = new Map<string, { created: number }>();
const loginAttempts = new Map<string, { count: number; lastAttempt: number }>();

const TOKEN_EXPIRY = 24 * 60 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000;

function safeCompare(a: string, b: string): boolean {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

export function verifyToken(token: string): boolean {
  if (!activeTokens.has(token)) return false;
  const session = activeTokens.get(token)!;
  if (Date.now() - session.created > TOKEN_EXPIRY) {
    activeTokens.delete(token);
    return false;
  }
  return true;
}

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const action = url.searchParams.get('action') || 'login';

  if (action === 'logout') {
    const { token } = await req.json();
    if (token) activeTokens.delete(token);
    return NextResponse.json({ status: 'success', message: 'Logged out.' });
  }

  if (action === 'verify') {
    const { token } = await req.json();
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ status: 'error', message: 'Invalid or expired session.' }, { status: 401 });
    }
    return NextResponse.json({ status: 'success' });
  }

  // Login
  const { username, password } = await req.json();
  const ip = req.headers.get('x-forwarded-for') || 'unknown';

  const attempts = loginAttempts.get(ip);
  if (attempts && attempts.count >= MAX_ATTEMPTS && Date.now() - attempts.lastAttempt < LOCKOUT_MS) {
    return NextResponse.json({ status: 'error', message: 'Too many failed attempts. Try again later.' }, { status: 429 });
  }

  if (!username || !password) {
    return NextResponse.json({ status: 'error', message: 'Username and password are required.' }, { status: 400 });
  }

  const adminUser = process.env.ADMIN_USERNAME || 'admin';
  const adminPass = process.env.ADMIN_PASSWORD || 'gyanniketan@2026';

  if (safeCompare(username, adminUser) && safeCompare(password, adminPass)) {
    loginAttempts.delete(ip);
    const token = crypto.randomBytes(32).toString('hex');
    activeTokens.set(token, { created: Date.now() });
    return NextResponse.json({ status: 'success', token });
  } else {
    const current = loginAttempts.get(ip) || { count: 0, lastAttempt: 0 };
    loginAttempts.set(ip, { count: current.count + 1, lastAttempt: Date.now() });
    return NextResponse.json({ status: 'error', message: 'Invalid username or password.' }, { status: 401 });
  }
}

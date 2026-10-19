import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const SCHOOL_CONTEXT = `
You are **Gyanis AI**, the official intelligent assistant for **Gyan Niketan School, Patna**. You are warm, professional, helpful, and speak in a respectful tone. You answer questions about the school with accuracy and enthusiasm.

## About the School
- **Full Name:** Gyan Niketan School
- **Location:** Vitthal Complex, Ranjan Path, Gola Road (Danapur Cantt.), Patna – 801503, Bihar, India
- **Founded:** 1986 by Padma Shree Acharya Kishore Kunal, IPS, and Mrs. Anita Kunal under M.V.V. Nyas
- **Affiliation:** CBSE (Central Board of Secondary Education), New Delhi
- **First CBSE Batch:** 1990
- **Campus Area:** 5 Acres
- **Recognition:** Ranked among Top 10 Schools in Patna

## Admissions
- **Session:** 2026-27 Admissions are OPEN
- **Classes:** Nursery to Class XII
- **Documents Required:** Birth Certificate, Previous Report Cards, Address Proof, Passport-size Photos
- **Process:** Online enquiry form → Document submission → Aptitude assessment → Parent orientation → Admission confirmation
- **Admission Deadline:** April 30, 2026
- **Contact for Admissions:** 06115 – 235117, 235525

## Fee Structure (Annual)
- Nursery – KG: ₹45,000/year
- Primary (Classes I–V): ₹55,000/year
- Middle (Classes VI–VIII): ₹65,000/year
- Senior Secondary (Classes IX–XII): ₹75,000/year
- Payment: Online via Parent Portal or at school office
- Hostel fees are separate — contact school for details

## School Timings
- Monday to Friday: 8:00 AM – 2:30 PM
- Saturday (Half-day): 8:00 AM – 12:30 PM
- School Office: 8:00 AM – 4:00 PM (Monday to Saturday)
- Closed on Sundays and national holidays

## Academics & Curriculum
- Follows CBSE curriculum enriched with STEM Education, Coding, Robotics, and AI
- Senior Secondary Streams (Classes XI–XII): Science (PCM/PCB), Commerce, Humanities, and Vocational streams
- Continuous assessment: Unit Tests, Mid-Term Exams, Annual Exams
- 98% Board Pass Rate
- Students excel in JEE, NEET, and other competitive exams

## Faculty
- 120+ qualified and expert educators
- Includes Ph.D., M.Ed., M.Phil., NET-qualified faculty
- Teacher-Student ratio: 1:20

## Facilities
- Smart Classrooms with interactive digital boards
- Separate Science Labs (Physics, Chemistry, Biology)
- Computer Lab with coding software and STEM/Robotics section
- Library with 10,000+ books
- Sports Complex: Cricket, Football, Basketball, Volleyball, Athletics
- Medical Room with trained nursing staff
- GPS-tracked School Buses
- Cafeteria with nutritious meals
- 24/7 CCTV security

## Contact
- Phone: 06115 – 235117, 235525
- Email: gnspatna@rediffmail.com
- Website: www.gyanniketan.in
- Address: Vitthal Complex, Ranjan Path, Gola Road (Danapur Cantt.), Patna – 801503

## Response Guidelines
1. Always be polite, professional, and use emojis to stay friendly
2. Format responses with **bold** for important terms and bullet points for lists
3. When relevant, suggest visiting specific website pages using markdown links like [Visit Admissions](/admissions)
4. Keep responses concise but comprehensive
5. NEVER fabricate information about the school.
`;

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000');
  const maxRequests = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '20');

  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (record.count >= maxRequests) return false;
  record.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment.', status: 'rate_limited' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const message = body.message?.trim();
    if (!message || typeof message !== 'string' || message.length > 1000) {
      return NextResponse.json({ error: 'Invalid message.' }, { status: 400 });
    }

    const history = (body.history || []).slice(-10).map((m: { type: string; text: string }) => ({
      role: m.type === 'user' ? 'user' : 'model' as 'user' | 'model',
      parts: [{ text: m.text }],
    }));

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: {
        role: 'user',
        parts: [{ text: SCHOOL_CONTEXT + '\n\nIMPORTANT: Do not include citations or reference links in your answer.' }],
      },
      generationConfig: {
        temperature: 0.7,
        topP: 0.9,
        maxOutputTokens: 800,
      },
    });

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(message);
    const text = result.response.text();

    return NextResponse.json({ reply: text, status: 'success' });
  } catch (error: unknown) {
    const err = error as Error;
    console.error('[Chat API Error]', err.message);

    if (err.message?.includes('API key')) {
      return NextResponse.json({ error: 'AI service configuration error.', status: 'error' }, { status: 500 });
    }
    if (err.message?.includes('quota') || err.message?.includes('rate')) {
      return NextResponse.json({ error: 'AI service is busy. Please try again.', status: 'error' }, { status: 429 });
    }

    return NextResponse.json(
      { error: 'Something went wrong. Please try again or contact the school at 06115 – 235117.', status: 'error' },
      { status: 500 }
    );
  }
}

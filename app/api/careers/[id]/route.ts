import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'applications.json');

function readData() {
  try { return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')); } catch { return []; }
}
function writeData(data: unknown[]) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = req.headers.get('authorization');
  if (!auth || !auth.startsWith('Bearer ')) {
    return NextResponse.json({ status: 'error', message: 'Authentication required.' }, { status: 401 });
  }

  const { id } = await params;
  let apps = readData();
  const before = apps.length;
  apps = apps.filter((a: { id: string }) => a.id !== id);

  if (apps.length === before) {
    return NextResponse.json({ status: 'error', message: 'Application not found.' }, { status: 404 });
  }

  writeData(apps);
  return NextResponse.json({ status: 'success', message: 'Application deleted.' });
}

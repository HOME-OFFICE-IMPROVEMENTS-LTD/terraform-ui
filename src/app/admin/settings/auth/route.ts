// src/app/api/settings/auth/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { encrypt, decrypt } from '@/lib/encryption'; // We'll create this

export async function GET(req: Request) {
  const session = await getServerSession();
  
  // Check if user is admin
  if (!session?.user?.roles?.includes('admin')) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  // Get settings from secure storage (e.g., Azure KeyVault, database)
  const settings = await getSecureSettings();
  
  return NextResponse.json(settings);
}

export async function POST(req: Request) {
  const session = await getServerSession();
  
  // Check if user is admin
  if (!session?.user?.roles?.includes('admin')) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const data = await req.json();
  
  // Encrypt and store settings securely
  await saveSecureSettings(data);
  
  return NextResponse.json({ success: true });
}

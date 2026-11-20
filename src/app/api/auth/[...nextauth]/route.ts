import { NextRequest, NextResponse } from 'next/server';
import { GET as authGET, POST } from '@/lib/auth';

export async function GET(req: NextRequest, context: { params: Promise<{ nextauth: string[] }> }) {
  const res = await authGET(req, context);
  if (req.nextUrl.pathname.endsWith('/session') && res instanceof Response) {
    const text = await res.clone().text();
    if (!text || text.trim() === 'null') {
      return NextResponse.json({}, { status: res.status, headers: res.headers });
    }
  }
  return res;
}

export { POST };
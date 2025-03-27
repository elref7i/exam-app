import { NextRequest, NextResponse } from 'next/server';

const privatePages: string[] = ['/'];

export default function middleware(req: NextRequest) {
  const token = false;
  if (privatePages.includes(req.nextUrl.pathname)) {
    if (token) {
      return NextResponse.next();
    }
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/auth/login`);
  }
  return NextResponse.next();
}
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};

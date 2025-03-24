import { NextRequest, NextResponse } from 'next/server';

const privatePages = ['/'];
const authPages = [
  '/login',
  '/register',
  '/forgot-password',
  '/verfiy-code',
  '/set-password',
];
export default function middleware(req: NextRequest) {
  const token = false;
  if (privatePages.includes(req.nextUrl.pathname)) {
    if (token) {
      return NextResponse.next();
    }
    return NextResponse.redirect(`http://localhost:3000/login`);
  }
  return NextResponse.next();
}
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};

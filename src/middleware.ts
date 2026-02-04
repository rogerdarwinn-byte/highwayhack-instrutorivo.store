import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;

  // Obrigado subdomain
  if (host.startsWith('obrigado.')) {
    if (pathname === '/') {
      return NextResponse.rewrite(new URL('/obrigado', request.url));
    }
    if (!pathname.startsWith('/obrigado') && !pathname.startsWith('/_next') && !pathname.startsWith('/favicon')) {
      return NextResponse.rewrite(new URL(`/obrigado${pathname}`, request.url));
    }
  }

  // Upsell subdomain
  if (host.startsWith('upsell.')) {
    if (pathname === '/') {
      return NextResponse.rewrite(new URL('/upsell', request.url));
    }
    if (!pathname.startsWith('/upsell') && !pathname.startsWith('/_next') && !pathname.startsWith('/favicon')) {
      return NextResponse.rewrite(new URL(`/upsell${pathname}`, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import * as React from 'react';
import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';

const SESSION_CACHE_KEY = '__jpx_session_cache_v1__';
const AUTH_HINT_KEY = '__jpx_has_auth_hint__';
const AUTH_HINT_COOKIE = 'jpx_has_auth=1';
const SESSION_CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes shared across all tabs

function hasAuthHint(): boolean {
  try {
    if (localStorage.getItem(AUTH_HINT_KEY) === '1') return true;
    if (typeof document !== 'undefined' && document.cookie.includes(AUTH_HINT_COOKIE)) return true;
  } catch { }
  return false;
}

function clearCachedSession() {
  try {
    localStorage.removeItem(SESSION_CACHE_KEY);
    sessionStorage.removeItem(SESSION_CACHE_KEY);
  } catch { }
}

function setAuthHint(active: boolean) {
  try {
    if (active) {
      localStorage.setItem(AUTH_HINT_KEY, '1');
      document.cookie = `${AUTH_HINT_COOKIE}; path=/; max-age=2592000; SameSite=Lax`;
    } else {
      localStorage.removeItem(AUTH_HINT_KEY);
      clearCachedSession();
      document.cookie = 'jpx_has_auth=; path=/; max-age=0; SameSite=Lax';
    }
  } catch { }
}

function isAuthOrProtectedPath(pathname: string): boolean {
  return (
    pathname.startsWith('/login') ||
    pathname.startsWith('/register') ||
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/messages') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/profile') ||
    pathname.includes('/login')
  );
}

// Install a zero-call guest guard + cross-tab localStorage cache for GET /api/auth/session
// Guest visitors browsing public pages make 0 requests to Vercel /api/auth/session.
if (typeof window !== 'undefined' && !(window as any).__jpxSessionFetchPatched) {
  (window as any).__jpxSessionFetchPatched = true;
  const originalFetch = window.fetch.bind(window);

  window.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    const urlStr =
      typeof input === 'string'
        ? input
        : input instanceof URL
          ? input.href
          : input?.url || '';
    const method = (init?.method || (input instanceof Request ? input.method : 'GET')).toUpperCase();
    const pathname = window.location?.pathname || '';

    if (urlStr.includes('/api/auth/') && !(urlStr.includes('/api/auth/session') && method === 'GET')) {
      try {
        clearCachedSession();
        if (urlStr.includes('/signout') || urlStr.includes('/logout')) {
          setAuthHint(false);
        } else {
          setAuthHint(true);
        }
      } catch { }
    } else if (
      method !== 'GET' &&
      (urlStr.includes('/api/user') || urlStr.includes('/api/users') || urlStr.includes('/api/profile'))
    ) {
      clearCachedSession();
    }

    // Intercept GET /api/auth/session
    if (urlStr.includes('/api/auth/session') && method === 'GET') {
      // 1. Pure guest visitor on public page -> return {} in 0ms (0 Vercel invocations)
      if (!hasAuthHint() && !isAuthOrProtectedPath(pathname)) {
        return new Response('{}', {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      // 2. Return from cross-tab localStorage cache (5s TTL on login/register to avoid stale redirect loops, 30m elsewhere)
      const isAuthPage = pathname.includes('/login') || pathname.startsWith('/register');
      const ttl = isAuthPage ? 5000 : SESSION_CACHE_TTL_MS;
      try {
        const raw = localStorage.getItem(SESSION_CACHE_KEY) || sessionStorage.getItem(SESSION_CACHE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && typeof parsed.ts === 'number' && Date.now() - parsed.ts < ttl) {
            return new Response(JSON.stringify(parsed.data), {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
            });
          }
        }
      } catch { }

      // 3. Fetch real session from server
      const response = await originalFetch(input, init);
      if (response.ok) {
        try {
          const cloned = response.clone();
          const data = await cloned.json();
          if (data && data.user) {
            setAuthHint(true);
            const payload = JSON.stringify({ ts: Date.now(), data });
            localStorage.setItem(SESSION_CACHE_KEY, payload);
            sessionStorage.setItem(SESSION_CACHE_KEY, payload);
          } else {
            setAuthHint(false);
          }
        } catch { }
      }
      return response;
    }

    return originalFetch(input, init);
  };
}

export function SessionProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextAuthSessionProvider refetchOnWindowFocus={false} refetchInterval={0}>
      {children}
    </NextAuthSessionProvider>
  );
}

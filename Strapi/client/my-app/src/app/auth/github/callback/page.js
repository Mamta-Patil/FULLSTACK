'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function GitHubCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('access_token');

    if (token) {
      localStorage.setItem('token', token);
      router.push('/blog');
    } else {
      console.error('No access token found in query params');
    }
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg">Logging you in via GitHub...</p>
    </div>
  );
}

'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global application error caught:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-brand-offwhite flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl border border-brand-navy/10 shadow-elevated space-y-6">
        <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-brand-navy font-display">
            Something went wrong while loading these services.
          </h2>
          <p className="text-xs text-brand-muted leading-relaxed">
            We encountered an unexpected error. Please try reloading the page or return to the main dashboard.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="coral" onClick={() => reset()} className="w-full">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Link href="/ng" className="w-full">
            <Button variant="outline" className="w-full">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

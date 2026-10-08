'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';

export default function MarketError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[Market Error Boundary]:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] bg-brand-offwhite flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl border border-brand-navy/10 shadow-elevated space-y-6 text-center">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8 text-red-500" />
        </div>

        {/* Copy */}
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-brand-navy font-display">
            Something went wrong
          </h2>
          <p className="text-xs text-brand-muted leading-relaxed">
            An unexpected error occurred while loading this page. This has been logged and our
            team will look into it. Please try again or head back home.
          </p>
          {process.env.NODE_ENV === 'development' && error?.message && (
            <pre className="mt-3 text-left text-[10px] bg-red-50 text-red-700 rounded-xl p-4 overflow-auto max-h-32 font-mono">
              {error.message}
            </pre>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="coral" onClick={() => reset()} className="w-full">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Link href="/" className="w-full">
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

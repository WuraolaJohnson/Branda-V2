'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { AlertTriangle, RefreshCw, Search, RotateCcw } from 'lucide-react';

export default function ServicesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[Services Error Boundary]:', error);
  }, [error]);

  // Extract market from pathname if available
  const pathSegments = typeof window !== 'undefined' ? window.location.pathname.split('/') : [];
  const market = pathSegments[1] || 'ng';

  return (
    <div className="py-24 bg-brand-offwhite">
      <div className="max-w-lg mx-auto px-4 sm:px-6">
        <div className="bg-white p-10 rounded-3xl border border-brand-navy/10 shadow-elevated space-y-6 text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>

          {/* Copy */}
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-brand-navy font-display">
              Could not load services
            </h2>
            <p className="text-xs text-brand-muted leading-relaxed">
              We ran into an issue fetching the service catalog. This may be a temporary glitch —
              please try again or clear your filters and search.
            </p>
            {process.env.NODE_ENV === 'development' && error?.message && (
              <pre className="mt-3 text-left text-[10px] bg-red-50 text-red-700 rounded-xl p-4 overflow-auto max-h-32 font-mono">
                {error.message}
              </pre>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <Button variant="coral" onClick={() => reset()} className="w-full">
              <RefreshCw className="w-4 h-4 mr-2" />
              Retry Loading Services
            </Button>
            <Link href={`/${market}/services`} className="w-full">
              <Button variant="outline" className="w-full">
                <RotateCcw className="w-4 h-4 mr-2" />
                Clear Filters &amp; Start Over
              </Button>
            </Link>
            <Link href={`/${market}`} className="w-full">
              <Button variant="ghost" className="w-full text-brand-muted">
                <Search className="w-4 h-4 mr-2" />
                Back to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

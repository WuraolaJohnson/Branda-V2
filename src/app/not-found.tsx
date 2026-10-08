import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { HelpCircle, Home } from 'lucide-react';

export default function GlobalNotFound() {
  return (
    <div className="min-h-screen bg-brand-offwhite flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl border border-brand-navy/10 shadow-elevated space-y-6">
        <div className="w-16 h-16 rounded-full bg-brand-cream/80 text-brand-navy flex items-center justify-center mx-auto">
          <HelpCircle className="w-8 h-8 text-brand-coral" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-extrabold text-brand-navy font-display">404</span>
          <h2 className="text-xl font-bold text-brand-navy font-display">
            Page Not Found
          </h2>
          <p className="text-xs text-brand-muted leading-relaxed">
            The page you are looking for doesn&apos;t exist or may have moved to a different market location.
          </p>
        </div>

        <Link href="/ng">
          <Button variant="coral" className="w-full">
            <Home className="w-4 h-4 mr-2" />
            Return to Nigeria Market
          </Button>
        </Link>
      </div>
    </div>
  );
}

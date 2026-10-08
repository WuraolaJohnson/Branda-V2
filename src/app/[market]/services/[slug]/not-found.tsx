import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { SearchX, ArrowLeft } from 'lucide-react';

export default function ServiceNotFound() {
  return (
    <div className="py-24 text-center bg-brand-offwhite">
      <div className="max-w-md mx-auto p-12 bg-white rounded-3xl border border-brand-navy/10 shadow-elevated space-y-4">
        <div className="w-16 h-16 rounded-full bg-brand-coral/20 text-brand-coral flex items-center justify-center mx-auto">
          <SearchX className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-extrabold text-brand-navy font-display">
          Service Not Found
        </h2>
        <p className="text-xs text-brand-muted leading-relaxed">
          The requested branding service could not be found or is unavailable in your selected market.
        </p>
        <Link href="/ng/services">
          <Button variant="coral" className="w-full mt-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services Catalog
          </Button>
        </Link>
      </div>
    </div>
  );
}

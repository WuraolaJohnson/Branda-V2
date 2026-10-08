'use client';

import React from 'react';
import { Service, MarketCode } from '@/data/types';
import { getRelatedServices } from '@/data/services';
import { ServiceCard } from './ServiceCard';
import { Badge } from '@/components/ui/Badge';
import { Sparkles } from 'lucide-react';

interface RelatedServicesProps {
  currentService: Service;
  marketCode: MarketCode;
}

export const RelatedServices: React.FC<RelatedServicesProps> = ({
  currentService,
  marketCode,
}) => {
  const related = getRelatedServices(currentService, 4, marketCode);

  if (related.length === 0) return null;

  return (
    <section className="pt-16 border-t border-brand-navy/10 mt-16">
      <div className="space-y-2 mb-8 text-center sm:text-left">
        <Badge variant="coral">Cross-Category Bundling</Badge>
        <h3 className="text-2xl font-extrabold text-brand-navy font-display tracking-tight flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-brand-coral" />
          You May Also Need
        </h3>
        <p className="text-xs text-brand-muted">
          Complementary branding solutions recommended to complete your overall brand identity.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {related.map((service) => (
          <ServiceCard key={service.id} service={service} marketCode={marketCode} />
        ))}
      </div>
    </section>
  );
};

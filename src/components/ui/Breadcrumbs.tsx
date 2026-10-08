import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-brand-muted mb-6 overflow-x-auto py-1">
      <Link
        href="/"
        className="flex items-center hover:text-brand-navy transition-colors focus:outline-none focus:underline"
      >
        <Home className="w-3.5 h-3.5 mr-1" />
        <span>Home</span>
      </Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3.5 h-3.5 text-brand-navy/30 flex-shrink-0" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-brand-navy transition-colors font-medium whitespace-nowrap"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-brand-navy whitespace-nowrap truncate max-w-[200px] sm:max-w-none">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

import React from 'react';
import { SearchX } from 'lucide-react';
import { Button } from './Button';

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No services match your criteria",
  description = "Try adjusting your search terms or clearing filters to discover all available branding solutions.",
  actionLabel = "Clear All Filters",
  onAction,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-white rounded-3xl border border-brand-navy/10 shadow-soft my-8">
      <div className="w-16 h-16 rounded-full bg-brand-mint/50 flex items-center justify-center text-brand-navy mb-4">
        {icon || <SearchX className="w-8 h-8 text-brand-navy/70" />}
      </div>
      <h3 className="text-xl font-bold text-brand-navy mb-2 font-display">{title}</h3>
      <p className="text-sm text-brand-muted max-w-md mb-6 leading-relaxed">{description}</p>
      {onAction && actionLabel && (
        <Button variant="coral" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

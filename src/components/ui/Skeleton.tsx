import { cn } from '@/lib/utils';

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-xl bg-brand-navy/10', className)}
      {...props}
    />
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-4 border border-brand-navy/10 space-y-4 shadow-soft">
      <Skeleton className="w-full h-48 rounded-xl" />
      <div className="flex justify-between items-center">
        <Skeleton className="w-20 h-5 rounded-full" />
        <Skeleton className="w-12 h-5 rounded-full" />
      </div>
      <Skeleton className="w-3/4 h-6 rounded-md" />
      <Skeleton className="w-full h-12 rounded-md" />
      <div className="flex justify-between items-center pt-2">
        <Skeleton className="w-24 h-6 rounded-md" />
        <Skeleton className="w-28 h-9 rounded-xl" />
      </div>
    </div>
  );
}

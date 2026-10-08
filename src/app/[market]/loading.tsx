import { Skeleton } from '@/components/ui/Skeleton';

export default function MarketLoading() {
  return (
    <div className="py-16 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hero Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Skeleton className="w-36 h-6 rounded-full" />
            <Skeleton className="w-4/5 h-16 rounded-2xl" />
            <Skeleton className="w-full max-w-lg h-6 rounded-md" />
            <div className="flex gap-4 pt-4">
              <Skeleton className="w-36 h-12 rounded-2xl" />
              <Skeleton className="w-36 h-12 rounded-2xl" />
            </div>
          </div>
          <div className="lg:col-span-5">
            <Skeleton className="w-full h-80 sm:h-96 rounded-3xl" />
          </div>
        </div>

        {/* Categories Showcase Skeleton */}
        <div className="pt-12 space-y-6">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <Skeleton className="w-32 h-6 rounded-full mx-auto" />
            <Skeleton className="w-3/4 h-10 rounded-xl mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-72 w-full rounded-3xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

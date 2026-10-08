import { ServiceCardSkeleton, Skeleton } from '@/components/ui/Skeleton';

export default function ServicesLoading() {
  return (
    <div className="py-12 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Skeleton className="w-48 h-5 rounded-md" />

        <div className="space-y-3">
          <Skeleton className="w-3/4 max-w-lg h-10 rounded-xl" />
          <Skeleton className="w-full max-w-2xl h-5 rounded-md" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          <div className="hidden lg:block lg:col-span-3">
            <Skeleton className="w-full h-96 rounded-3xl" />
          </div>
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, idx) => (
              <ServiceCardSkeleton key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

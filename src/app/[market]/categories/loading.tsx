import { Skeleton } from '@/components/ui/Skeleton';

export default function CategoriesLoading() {
  return (
    <div className="min-h-screen bg-brand-offwhite pb-24">
      <div className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Skeleton className="w-32 h-5 bg-white/20 rounded-md" />
          <Skeleton className="w-44 h-6 bg-white/20 rounded-full" />
          <Skeleton className="w-96 max-w-full h-12 bg-white/20 rounded-2xl" />
          <Skeleton className="w-full max-w-2xl h-6 bg-white/20 rounded-md" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 border border-brand-navy/10 space-y-4">
              <Skeleton className="w-full h-52 rounded-2xl" />
              <Skeleton className="w-3/4 h-8 rounded-xl" />
              <Skeleton className="w-full h-16 rounded-lg" />
              <Skeleton className="w-full h-12 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

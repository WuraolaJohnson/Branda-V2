import { Metadata } from 'next';
import { isValidMarket } from '@/data/markets';
import { filterAndSortServices } from '@/data/services';
import { MarketCode, SortOption } from '@/data/types';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ServicesListingClient } from '@/components/services/ServicesListingClient';

interface ServicesPageProps {
  params: {
    market: string;
  };
  searchParams: {
    category?: string;
    useCase?: string;
    industry?: string;
    urgency?: string;
    popularity?: string;
    search?: string;
    sort?: string;
    page?: string;
  };
}

export async function generateMetadata({ params, searchParams }: ServicesPageProps): Promise<Metadata> {
  if (!isValidMarket(params.market)) return {};
  const cat = searchParams.category;
  const categoryTitle = cat ? `${cat.charAt(0).toUpperCase() + cat.slice(1)} Services` : 'Branding Services Catalog';
  const baseUrl = 'https://branda-v2.vercel.app';
  const marketCode = params.market;

  return {
    title: `${categoryTitle} | Branda V2 Discovery (${marketCode.toUpperCase()})`,
    description: 'Explore, configure, and order premium branding solutions across digital, creative, gifting, studio, and print.',
    alternates: {
      canonical: `${baseUrl}/${marketCode}/services`,
      languages: {
        'en-NG': `${baseUrl}/ng/services`,
        'en-US': `${baseUrl}/us/services`,
      },
    },
    openGraph: {
      title: `${categoryTitle} | Branda V2`,
      description: 'Discover and order bespoke branding solutions.',
      url: `${baseUrl}/${marketCode}/services`,
      siteName: 'Branda V2',
      type: 'website',
    },
  };
}

export default function ServicesPage({ params, searchParams }: ServicesPageProps) {
  if (!isValidMarket(params.market)) {
    notFound();
  }

  const marketCode = params.market as MarketCode;

  // Perform server-side filtering & sorting from URL searchParams
  const filteredServices = filterAndSortServices({
    category: searchParams.category,
    useCase: searchParams.useCase,
    industry: searchParams.industry,
    urgency: searchParams.urgency,
    popularity: searchParams.popularity,
    search: searchParams.search,
    sort: searchParams.sort as SortOption,
    marketCode,
  });

  return (
    <div className="py-12 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Services Catalog' }]} />

        {/* Page Header */}
        <div className="max-w-3xl mb-10 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight">
            Find the right service for your brand
          </h1>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Filter through our five core pillars or use keywords to discover bespoke web experiences, executive merchandise, and tactile print assets.
          </p>
        </div>

        {/* Client Interactive Listing */}
        <ServicesListingClient services={filteredServices} marketCode={marketCode} />
      </div>
    </div>
  );
}

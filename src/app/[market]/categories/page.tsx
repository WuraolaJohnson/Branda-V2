import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidMarket, MARKETS } from '@/data/markets';
import { MarketCode } from '@/data/types';
import { CategoriesPageClient } from '@/components/categories/CategoriesPageClient';

interface CategoriesPageProps {
  params: {
    market: string;
  };
}

export async function generateStaticParams() {
  return [{ market: 'ng' }, { market: 'us' }];
}

export async function generateMetadata({ params }: CategoriesPageProps): Promise<Metadata> {
  if (!isValidMarket(params.market)) return {};
  const market = MARKETS[params.market as MarketCode];
  const baseUrl = 'https://branda-v2.vercel.app';
  const marketCode = params.market;

  return {
    title: `Brand Categories Directory | Branda V2 ${market.name}`,
    description: `Explore all 8 specialized brand pillars in ${market.name}. From bespoke digital design to corporate merch, large format event backdrops, and packaging.`,
    alternates: {
      canonical: `${baseUrl}/${marketCode}/categories`,
      languages: {
        'en-NG': `${baseUrl}/ng/categories`,
        'en-US': `${baseUrl}/us/categories`,
      },
    },
    openGraph: {
      title: `Brand Categories Directory | Branda V2 ${market.name}`,
      description: `Explore all brand pillars in ${market.name}.`,
      url: `${baseUrl}/${marketCode}/categories`,
      siteName: 'Branda V2',
      type: 'website',
    },
  };
}

export default function CategoriesPage({ params }: CategoriesPageProps) {
  if (!isValidMarket(params.market)) {
    notFound();
  }

  const marketCode = params.market as MarketCode;

  return <CategoriesPageClient marketCode={marketCode} />;
}

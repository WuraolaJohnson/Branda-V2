import { NextRequest, NextResponse } from 'next/server';
import { filterAndSortServices } from '@/data/services';
import { MarketCode, SortOption } from '@/data/types';
import { isValidMarket } from '@/data/markets';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const market = searchParams.get('market') || 'ng';
  const marketCode: MarketCode = isValidMarket(market) ? market : 'ng';

  const category = searchParams.get('category') || undefined;
  const useCase = searchParams.get('useCase') || undefined;
  const industry = searchParams.get('industry') || undefined;
  const urgency = searchParams.get('urgency') || undefined;
  const popularity = searchParams.get('popularity') || undefined;
  const search = searchParams.get('search') || undefined;
  const sort = (searchParams.get('sort') as SortOption) || 'recommended';

  const services = filterAndSortServices({
    category,
    useCase,
    industry,
    urgency,
    popularity,
    search,
    sort,
    marketCode,
  });

  return NextResponse.json({
    success: true,
    market: marketCode,
    total: services.length,
    services,
  });
}

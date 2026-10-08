import { NextRequest, NextResponse } from 'next/server';
import { getServiceBySlug } from '@/data/services';
import { MarketCode } from '@/data/types';
import { isValidMarket } from '@/data/markets';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { searchParams } = new URL(request.url);
  const market = searchParams.get('market') || 'ng';
  const marketCode: MarketCode = isValidMarket(market) ? market : 'ng';

  const service = getServiceBySlug(params.slug, marketCode);

  if (!service) {
    return NextResponse.json(
      { success: false, error: 'Service not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    market: marketCode,
    service,
  });
}

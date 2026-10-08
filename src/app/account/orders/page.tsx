import { OrderHistory } from '@/components/account/OrderHistory';
import { ShoppingBag } from 'lucide-react';

export const metadata = {
  title: 'Order History | Branda V2 Account',
};

export default function AccountOrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-brand-navy font-display tracking-tight flex items-center gap-2">
          <ShoppingBag className="w-6 h-6 text-brand-coral" /> Order History & Production Status
        </h1>
        <p className="text-xs text-brand-muted">
          Track active and past branding project orders across Nigeria and USA markets.
        </p>
      </div>

      <OrderHistory />
    </div>
  );
}

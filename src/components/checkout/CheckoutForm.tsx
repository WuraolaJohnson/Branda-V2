'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MarketCode, OrderCustomerInfo, Order } from '@/data/types';
import { MARKETS } from '@/data/markets';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { generateOrderId } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { User, Mail, Phone, MapPin, Building, FileText, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';

interface CheckoutFormProps {
  marketCode: MarketCode;
}

const US_STATES = [
  'AL - Alabama', 'AK - Alaska', 'AZ - Arizona', 'AR - Arkansas', 'CA - California',
  'CO - Colorado', 'CT - Connecticut', 'DE - Delaware', 'FL - Florida', 'GA - Georgia',
  'HI - Hawaii', 'ID - Idaho', 'IL - Illinois', 'IN - Indiana', 'IA - Iowa',
  'KS - Kansas', 'KY - Kentucky', 'LA - Louisiana', 'ME - Maine', 'MD - Maryland',
  'MA - Massachusetts', 'MI - Michigan', 'MN - Minnesota', 'MS - Mississippi', 'MO - Missouri',
  'MT - Montana', 'NE - Nebraska', 'NV - Nevada', 'NH - New Hampshire', 'NJ - New Jersey',
  'NM - New Mexico', 'NY - New York', 'NC - North Carolina', 'ND - North Dakota', 'OH - Ohio',
  'OK - Oklahoma', 'OR - Oregon', 'PA - Pennsylvania', 'RI - Rhode Island', 'SC - South Carolina',
  'SD - South Dakota', 'TN - Tennessee', 'TX - Texas', 'UT - Utah', 'VT - Vermont',
  'VA - Virginia', 'WA - Washington', 'WV - West Virginia', 'WI - Wisconsin', 'WY - Wyoming'
];

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ marketCode }) => {
  const router = useRouter();
  const { cart, getSubtotal, getTax, getTotal, clearCart } = useCart();
  const { user, addOrder } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const market = MARKETS[marketCode] || MARKETS.ng;
  const isUS = marketCode === 'us';

  const [formData, setFormData] = useState<OrderCustomerInfo>({
    fullName: user?.fullName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.savedAddresses[0]?.address || '',
    city: user?.savedAddresses[0]?.city || '',
    state: user?.savedAddresses[0]?.state || (isUS ? 'TX - Texas' : 'Lagos State'),
    country: market.name,
    additionalNotes: '',
  });

  const [zipCode, setZipCode] = useState(isUS ? '78701' : '100001');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsSubmitting(true);

    const subtotalNGN = getSubtotal('ng');
    const subtotalUSD = getSubtotal('us');
    const taxNGN = getTax('ng');
    const taxUSD = getTax('us');
    const totalNGN = getTotal('ng');
    const totalUSD = getTotal('us');

    const orderId = generateOrderId();

    const newOrder: Order = {
      id: orderId,
      marketCode,
      createdAt: new Date().toISOString(),
      items: [...cart],
      subtotalNGN,
      subtotalUSD,
      taxNGN,
      taxUSD,
      totalNGN,
      totalUSD,
      customer: {
        ...formData,
        address: `${formData.address}${zipCode ? `, Postal/ZIP: ${zipCode}` : ''}`,
      },
      status: 'Received',
      estimatedDelivery: isUS ? '2-4 Business Days (FedEx Ground)' : '3-5 Business Days (Doorstep Delivery)',
    };

    // Save order
    addOrder(newOrder);

    // Clear active cart
    clearCart();

    setTimeout(() => {
      setIsSubmitting(false);
      router.push(`/${marketCode}/order-confirmation?orderId=${orderId}`);
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Customer Information Block */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-navy/10 shadow-soft space-y-4">
        <h3 className="text-lg font-bold text-brand-navy font-display flex items-center gap-2 border-b border-brand-navy/10 pb-4">
          <User className="w-5 h-5 text-brand-coral" />
          Customer Information ({market.name} Market)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
              Full Name *
            </label>
            <div className="relative">
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder={isUS ? 'e.g. Sarah Jenkins' : 'e.g. Tunde Bakare'}
                className="w-full pl-10 pr-4 py-3 text-xs font-semibold bg-brand-offwhite border border-brand-navy/10 rounded-2xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40"
              />
              <User className="w-4 h-4 text-brand-muted absolute left-3.5 top-3.5" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
              Email Address *
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={isUS ? 'sarah@company.us' : 'name@company.ng'}
                className="w-full pl-10 pr-4 py-3 text-xs font-semibold bg-brand-offwhite border border-brand-navy/10 rounded-2xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40"
              />
              <Mail className="w-4 h-4 text-brand-muted absolute left-3.5 top-3.5" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
              Phone Number *
            </label>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder={isUS ? '+1 (555) 234-5678' : '+234 800 272 6322'}
                className="w-full pl-10 pr-4 py-3 text-xs font-semibold bg-brand-offwhite border border-brand-navy/10 rounded-2xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40"
              />
              <Phone className="w-4 h-4 text-brand-muted absolute left-3.5 top-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Delivery / Project Address */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-navy/10 shadow-soft space-y-4">
        <div className="flex items-center justify-between border-b border-brand-navy/10 pb-4">
          <h3 className="text-lg font-bold text-brand-navy font-display flex items-center gap-2">
            <MapPin className="w-5 h-5 text-brand-coral" />
            {isUS ? 'US Shipping & Billing Destination' : 'Delivery & Production Address'}
          </h3>
          <span className="text-xs font-bold text-brand-navy/70 bg-brand-offwhite px-3 py-1 rounded-full border border-brand-navy/10">
            {market.flag} {market.name}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
              Street Address *
            </label>
            <input
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              placeholder={isUS ? 'e.g. 742 Evergreen Terrace, Suite 300' : 'e.g. 14B Admiralty Way, Lekki Phase 1'}
              className="w-full px-4 py-3 text-xs font-semibold bg-brand-offwhite border border-brand-navy/10 rounded-2xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
              City *
            </label>
            <input
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              placeholder={isUS ? 'e.g. Austin' : 'e.g. Lagos'}
              className="w-full px-4 py-3 text-xs font-semibold bg-brand-offwhite border border-brand-navy/10 rounded-2xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
              {isUS ? 'State *' : 'State / Region *'}
            </label>
            {isUS ? (
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-3 text-xs font-semibold bg-brand-offwhite border border-brand-navy/10 rounded-2xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40"
              >
                {US_STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                name="state"
                required
                value={formData.state}
                onChange={handleChange}
                placeholder="e.g. Lagos State / FCT Abuja"
                className="w-full px-4 py-3 text-xs font-semibold bg-brand-offwhite border border-brand-navy/10 rounded-2xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40"
              />
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
              {isUS ? 'ZIP Code *' : 'Postal Code'}
            </label>
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
              placeholder={isUS ? 'e.g. 78701' : 'e.g. 100001'}
              className="w-full px-4 py-3 text-xs font-semibold bg-brand-offwhite border border-brand-navy/10 rounded-2xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
              Country
            </label>
            <input
              type="text"
              name="country"
              readOnly
              value={market.name}
              className="w-full px-4 py-3 text-xs font-semibold bg-brand-navy/5 border border-brand-navy/10 rounded-2xl text-brand-navy cursor-not-allowed"
            />
          </div>

          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
              Additional Design Instructions or Production Notes (Optional)
            </label>
            <textarea
              name="additionalNotes"
              rows={3}
              value={formData.additionalNotes}
              onChange={handleChange}
              placeholder="Include specific Pantone colors, vector logo download links, preferred packaging, or delivery dock instructions..."
              className="w-full px-4 py-3 text-xs font-semibold bg-brand-offwhite border border-brand-navy/10 rounded-2xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40"
            />
          </div>
        </div>

        {/* Market Delivery Logistics note */}
        <div className="pt-2 flex items-center gap-2 text-xs font-medium text-brand-navy/70">
          <Truck className="w-4 h-4 text-brand-coral flex-shrink-0" />
          <span>
            {isUS
              ? 'US Ground & 2-Day Air Logistics with real-time tracking.'
              : 'Direct dispatch across Lagos, Abuja, Port Harcourt & nationwide.'}
          </span>
        </div>
      </div>

      <Button
        type="submit"
        variant="coral"
        size="lg"
        isLoading={isSubmitting}
        className="w-full shadow-card text-base py-4"
      >
        <CheckCircle2 className="w-5 h-5 mr-2" />
        Submit & Confirm Order
      </Button>
    </form>
  );
};

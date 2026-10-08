'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/Button';
import { User, Mail, Phone, Building, Save } from 'lucide-react';

export default function AccountProfilePage() {
  const router = useRouter();
  const { user, isLoggedIn } = useAuth();
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [company, setCompany] = useState(user?.companyName || '');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/account/login');
    } else if (user) {
      setFullName(user.fullName);
      setEmail(user.email);
      setPhone(user.phone);
      setCompany(user.companyName || '');
    }
  }, [isLoggedIn, user, router]);

  if (!isLoggedIn) {
    return null;
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="bg-white p-8 rounded-3xl border border-brand-navy/10 shadow-soft space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-brand-navy font-display tracking-tight flex items-center gap-2">
          <User className="w-6 h-6 text-brand-coral" /> Profile & Account Settings
        </h1>
        <p className="text-xs text-brand-muted">
          Update your contact information and company details.
        </p>
      </div>

      {saved && (
        <div className="p-3 bg-brand-mint text-brand-mint-text rounded-xl text-xs font-bold">
          Profile settings saved successfully!
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-3 text-xs font-semibold bg-brand-offwhite border border-brand-navy/10 rounded-2xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 text-xs font-semibold bg-brand-offwhite border border-brand-navy/10 rounded-2xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 text-xs font-semibold bg-brand-offwhite border border-brand-navy/10 rounded-2xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">Company Name</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-4 py-3 text-xs font-semibold bg-brand-offwhite border border-brand-navy/10 rounded-2xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40"
          />
        </div>

        <Button type="submit" variant="coral" size="md">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </form>
    </div>
  );
}

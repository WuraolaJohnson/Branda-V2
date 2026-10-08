'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/Button';
import { User, Mail, Phone, Lock, UserPlus } from 'lucide-react';

export const RegisterForm: React.FC = () => {
  const router = useRouter();
  const { register } = useAuth();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      register(fullName, email, phone);
      setIsLoading(false);
      router.push('/account');
    }, 500);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-brand-navy/10 shadow-elevated space-y-6">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 rounded-2xl bg-brand-navy text-white flex items-center justify-center font-display font-bold text-xl mx-auto shadow-card">
          B2
        </div>
        <h2 className="text-2xl font-extrabold text-brand-navy font-display">
          Create Account
        </h2>
        <p className="text-xs text-brand-muted">
          Start building and tracking your enterprise branding portfolio
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
            Full Name *
          </label>
          <div className="relative">
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Tunde Bakare"
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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
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
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+234 800 000 0000"
              className="w-full pl-10 pr-4 py-3 text-xs font-semibold bg-brand-offwhite border border-brand-navy/10 rounded-2xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40"
            />
            <Phone className="w-4 h-4 text-brand-muted absolute left-3.5 top-3.5" />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
            Password *
          </label>
          <div className="relative">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-3 text-xs font-semibold bg-brand-offwhite border border-brand-navy/10 rounded-2xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40"
            />
            <Lock className="w-4 h-4 text-brand-muted absolute left-3.5 top-3.5" />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
            Confirm Password *
          </label>
          <div className="relative">
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-3 text-xs font-semibold bg-brand-offwhite border border-brand-navy/10 rounded-2xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40"
            />
            <Lock className="w-4 h-4 text-brand-muted absolute left-3.5 top-3.5" />
          </div>
        </div>

        <Button type="submit" variant="coral" size="lg" isLoading={isLoading} className="w-full shadow-card">
          <UserPlus className="w-4 h-4 mr-2" />
          Create Account
        </Button>
      </form>

      <div className="pt-4 border-t border-brand-navy/10 space-y-2 text-center text-xs text-brand-muted">
        <div>
          Already registered?{' '}
          <Link href="/account/login" className="font-bold text-brand-navy hover:text-brand-coral underline">
            Sign In
          </Link>
        </div>
        <div>
          Just exploring?{' '}
          <Link href="/account/login" className="font-bold text-brand-coral hover:underline">
            Use Enterprise Demo Account →
          </Link>
        </div>
      </div>
    </div>
  );
};

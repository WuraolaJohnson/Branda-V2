'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/Button';
import { Mail, Lock, LogIn, Sparkles } from 'lucide-react';

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('tunde.bakare@brandacompany.com');
  const [password, setPassword] = useState('••••••••••••');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      login(email);
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
          Welcome Back
        </h2>
        <p className="text-xs text-brand-muted">
          Access your branding project files, order status & company history
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
            Email Address
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
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">
              Password
            </label>
            <a href="#" className="text-[11px] font-semibold text-brand-coral hover:underline">
              Forgot password?
            </a>
          </div>
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

        <div className="flex items-center gap-2 pt-1">
          <input
            type="checkbox"
            id="remember"
            defaultChecked
            className="rounded border-brand-navy/20 text-brand-coral focus:ring-brand-coral"
          />
          <label htmlFor="remember" className="text-xs text-brand-navy/80 font-medium cursor-pointer">
            Remember me on this browser
          </label>
        </div>

        <Button type="submit" variant="coral" size="lg" isLoading={isLoading} className="w-full shadow-card">
          <LogIn className="w-4 h-4 mr-2" />
          Sign In to Dashboard
        </Button>
      </form>

      <div className="pt-4 border-t border-brand-navy/10 text-center text-xs text-brand-muted">
        Don&apos;t have an enterprise account?{' '}
        <Link href="/account/register" className="font-bold text-brand-navy hover:text-brand-coral underline">
          Create Account
        </Link>
      </div>
    </div>
  );
};

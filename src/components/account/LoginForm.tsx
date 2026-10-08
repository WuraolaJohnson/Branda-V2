'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/Button';
import { Mail, Lock, LogIn, Sparkles, Eye, EyeOff } from 'lucide-react';

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const { login, loginDemo } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDemoLoading, setIsDemoLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      login(email || 'demo@branda.com');
      setIsLoading(false);
      router.push('/ng');
    }, 400);
  };

  const handleDemoLogin = () => {
    setIsDemoLoading(true);
    setTimeout(() => {
      loginDemo();
      setIsDemoLoading(false);
      router.push('/ng');
    }, 350);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-brand-navy/10 shadow-elevated space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <Link href="/ng" className="inline-block group">
          <div className="w-12 h-12 rounded-2xl bg-brand-navy text-white flex items-center justify-center font-display font-bold text-xl mx-auto shadow-card group-hover:scale-105 transition-transform">
            B2
          </div>
        </Link>
        <h1 className="text-2xl font-extrabold text-brand-navy font-display tracking-tight">
          Welcome to Branda V2
        </h1>
        <p className="text-xs text-brand-muted">
          Sign in to access your branding dashboard, active orders & assets
        </p>
      </div>

      {/* Standard Login Form */}
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
              placeholder="e.g. demo@branda.com"
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
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full pl-10 pr-10 py-3 text-xs font-semibold bg-brand-offwhite border border-brand-navy/10 rounded-2xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-coral/40"
            />
            <Lock className="w-4 h-4 text-brand-muted absolute left-3.5 top-3.5" />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3.5 top-3.5 text-brand-muted hover:text-brand-navy focus:outline-none"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
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

        <Button type="submit" variant="primary" size="lg" isLoading={isLoading} className="w-full shadow-card">
          <LogIn className="w-4 h-4 mr-2" />
          Sign In to Dashboard
        </Button>

        <div className="relative flex items-center justify-center pt-1 pb-1">
          <div className="border-t border-brand-navy/10 w-full" />
          <span className="bg-white px-3 text-[11px] font-semibold text-brand-muted uppercase tracking-wider">
            or
          </span>
          <div className="border-t border-brand-navy/10 w-full" />
        </div>

        <Button
          type="button"
          variant="outline"
          size="md"
          onClick={handleDemoLogin}
          isLoading={isDemoLoading}
          className="w-full text-xs font-bold border-brand-navy/15 hover:border-brand-coral hover:text-brand-coral hover:bg-brand-coral/5 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 mr-2 text-brand-coral" />
          Sign In with Demo Account
        </Button>
      </form>

      {/* Footer Info & Links */}
      <div className="pt-4 border-t border-brand-navy/10 space-y-3 text-center text-xs">
        <p className="text-brand-muted">
          Don&apos;t have an enterprise account?{' '}
          <Link href="/account/register" className="font-bold text-brand-navy hover:text-brand-coral underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

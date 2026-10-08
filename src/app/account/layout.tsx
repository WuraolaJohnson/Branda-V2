'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AccountSidebar } from '@/components/account/AccountSidebar';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname.includes('/login') || pathname.includes('/register') || pathname.includes('/signup');

  return (
    <div className="min-h-screen flex flex-col justify-between bg-brand-offwhite">
      {!isAuthPage && <Navbar marketCode="ng" />}
      <main className={`flex-1 ${isAuthPage ? 'flex items-center justify-center py-6 sm:py-10' : 'py-12'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {isAuthPage ? (
            <div className="w-full flex justify-center items-center">{children}</div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-3">
                <AccountSidebar />
              </div>
              <div className="lg:col-span-9">{children}</div>
            </div>
          )}
        </div>
      </main>
      {!isAuthPage && <Footer marketCode="ng" />}
    </div>
  );
}


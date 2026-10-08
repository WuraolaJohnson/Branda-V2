import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AccountSidebar } from '@/components/account/AccountSidebar';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar marketCode="ng" />
      <main className="flex-1 py-12 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-3">
              <AccountSidebar />
            </div>
            <div className="lg:col-span-9">{children}</div>
          </div>
        </div>
      </main>
      <Footer marketCode="ng" />
    </div>
  );
}

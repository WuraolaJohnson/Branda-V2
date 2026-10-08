import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';
import { CurrencyProvider } from '@/context/CurrencyContext';
import { Toast } from '@/components/ui/Toast';
import { SplashScreen } from '@/components/layout/SplashScreen';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Branda V2 | Modern Branding Service Ecosystem',
    template: '%s | Branda V2',
  },
  description:
    'Discover, configure, and order premium branding, digital, print, and corporate gifting solutions. Enterprise quality across Nigeria and the United States.',
  keywords: [
    'Branding Service',
    'Logo Design',
    'Business Cards Nigeria',
    'Corporate Gifts USA',
    'Website Design',
    'Printed Flyers',
    'Branda V2',
  ],
  authors: [{ name: 'Branda Senior Frontend Engineering Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://branda.com.ng',
    siteName: 'Branda V2 Ecosystem',
    title: 'Branda V2 | Modern Branding Service Platform',
    description:
      'Everything your brand needs under one seamless ecosystem. Discover digital, print, creative, studio, and corporate gift solutions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Branda V2 | Modern Branding Service Platform',
    description: 'Discover, configure, and order premium branding solutions across markets.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased text-brand-navy bg-brand-offwhite">
        <AuthProvider>
          <CurrencyProvider>
            <CartProvider>
              <SplashScreen />
              {children}
              <Toast />
            </CartProvider>
          </CurrencyProvider>
        </AuthProvider>
      </body>
    </html>
  );
}


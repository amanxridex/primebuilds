import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollRevealManager from '@/components/ScrollRevealManager';

export const metadata: Metadata = {
  title: 'PRIME BUILDS LONDON | Residential Extensions, Lofts & Renovations',
  description: 'Prime Builds London is a high-specification residential builder delivering kitchen extensions, architectural loft conversions, and home renovations under fixed-price JCT contracts.',
  keywords: ['London home extensions', 'loft conversions London', 'kitchen extension Wandsworth', 'residential builder Ealing', 'fixed-price JCT contract builder', 'Prime Builds London'],
  openGraph: {
    title: 'PRIME BUILDS LONDON | Residential Extensions, Lofts & Renovations',
    description: 'Specialising in home extensions, loft conversions, and architectural renovations across London with fixed-price contract certainty.',
    type: 'website'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#ffffff'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body">
        <ScrollRevealManager />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

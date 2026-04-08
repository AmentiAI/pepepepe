import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChatWidget } from '@/components/ChatWidget';

export const metadata: Metadata = {
  title: {
    default: 'MaxxingPeptides — Evidence-Based Peptide Protocols for Healing, Fat Loss & Longevity',
    template: '%s | MaxxingPeptides',
  },
  description:
    'Research-grade peptide protocols for healing, fat loss, and longevity. Buy BPC-157, Semaglutide −14.9%, Retatrutide −24.2%, TB-500, GHK-CU, and Epithalon — COA-verified, from Apollo Peptide Sciences.',
  keywords: [
    'buy peptides online',
    'maxxing peptides',
    'maxxingpeptides',
    'BPC-157 protocol',
    'semaglutide buy',
    'retatrutide protocol',
    'tirzepatide peptide',
    'GHK-CU anti-aging',
    'peptide fat loss protocol',
    'research peptides 2026',
  ],
  metadataBase: new URL('https://maxxingpeptides.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maxxingpeptides.com',
    siteName: 'MaxxingPeptides',
    title: 'MaxxingPeptides — Evidence-Based Peptide Protocols',
    description: 'Premium peptide protocols for healing, fat loss, performance, and anti-aging.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MaxxingPeptides' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MaxxingPeptides — Evidence-Based Peptide Protocols',
    description: 'Premium peptide protocols for healing, fat loss, performance, and anti-aging.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MaxxingPeptides',
  url: 'https://maxxingpeptides.com',
  logo: 'https://maxxingpeptides.com/og-image.png',
  description: 'Premium peptide protocols for healing, fat loss, performance, and longevity.',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MaxxingPeptides',
  url: 'https://maxxingpeptides.com',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}

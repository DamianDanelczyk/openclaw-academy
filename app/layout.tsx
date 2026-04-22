import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'OpenClaw Academy',
    template: '%s | OpenClaw Academy',
  },
  description:
    'The most complete OpenClaw guide on the internet. From zero to production — no coding experience required.',
  openGraph: {
    title: 'OpenClaw Academy',
    description:
      'The most complete OpenClaw guide on the internet. From zero to production — no coding experience required.',
    url: 'https://academy.openclaw.com',
    siteName: 'OpenClaw Academy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenClaw Academy',
    description:
      'The most complete OpenClaw guide on the internet. From zero to production — no coding experience required.',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider
          theme={{
            defaultTheme: 'dark',
            attribute: 'class',
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

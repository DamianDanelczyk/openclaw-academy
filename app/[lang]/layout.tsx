import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { i18nUI } from '@/lib/i18n-ui';
import { i18n } from '@/lib/i18n';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'OpenClaw Academy',
    template: '%s | OpenClaw Academy',
  },
  description:
    'The most complete OpenClaw guide on the internet. From zero to production — no coding experience required.',
};

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}

export default async function LangLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <RootProvider
          theme={{
            defaultTheme: 'dark',
            attribute: 'class',
          }}
          i18n={i18nUI.provider(lang)}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

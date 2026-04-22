import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import Image from 'next/image';
import { FooterCTA } from '@/components/footer-cta';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      nav={{
        title: (
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="OpenClaw" width={28} height={28} />
            <span className="font-semibold">OpenClaw Academy</span>
          </div>
        ),
      }}
    >
      {children}
      <FooterCTA />
    </DocsLayout>
  );
}

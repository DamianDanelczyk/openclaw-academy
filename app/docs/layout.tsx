import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import Image from 'next/image';
import { SKOOL_URL } from '@/lib/constants';

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
        children: (
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto hidden items-center gap-1.5 rounded-md border border-fd-border px-2.5 py-1 text-xs text-fd-muted-foreground transition-colors hover:text-fd-foreground md:flex"
          >
            <span>Powered by</span>
            <span className="font-medium text-fd-foreground">AI Agents Accelerator</span>
          </a>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}

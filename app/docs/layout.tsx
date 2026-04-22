import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import Image from 'next/image';
import { SKOOL_URL } from '@/lib/constants';

function PoweredByBadge() {
  return (
    <a
      href={SKOOL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 whitespace-nowrap rounded-md border border-fd-border bg-fd-card px-2.5 py-1 text-xs text-fd-muted-foreground transition-colors hover:border-[hsl(0,65%,50%)]/40 hover:text-fd-foreground"
    >
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="shrink-0 opacity-50">
        <path d="M6.5 1H11V5.5M11 1L5 7M4.5 2H2C1.45 2 1 2.45 1 3V10C1 10.55 1.45 11 2 11H9C9.55 11 10 10.55 10 10V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span>Powered by</span>
      <span className="font-semibold text-[hsl(0,65%,50%)]">AI Agents Accelerator</span>
    </a>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      nav={{
        title: (
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="OpenClaw" width={26} height={26} />
            <span className="font-semibold">OpenClaw Academy</span>
          </div>
        ),
      }}
      links={[
        {
          type: 'custom',
          children: <PoweredByBadge />,
        },
      ]}
      sidebar={{
        footer: (
          <p className="px-2 text-xs leading-relaxed text-fd-muted-foreground opacity-50">
            Independent community resource. Not affiliated with or endorsed by OpenClaw.
          </p>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}

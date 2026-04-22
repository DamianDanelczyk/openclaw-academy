'use client';

import { SKOOL_URL } from '@/lib/constants';
import type { ReactNode } from 'react';

interface DownloadGateProps {
  children: ReactNode;
  fileName?: string;
}

export function DownloadGate({
  children,
  fileName = 'Resource',
}: DownloadGateProps) {
  return (
    <div className="my-8 rounded-lg border border-fd-border bg-fd-card p-6">
      <div className="mb-4 text-sm text-fd-muted-foreground">{children}</div>
      <div className="rounded-lg border border-dashed border-fd-border bg-fd-accent p-6 text-center">
        <p className="mb-2 font-semibold text-fd-foreground">
          Download: {fileName}
        </p>
        <p className="mb-4 text-sm text-fd-muted-foreground">
          Available exclusively in the AI Agents Accelerator community.
        </p>
        <a
          href={SKOOL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-[hsl(0,65%,50%)] px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-[hsl(0,65%,45%)]"
        >
          Get Access &rarr;
        </a>
      </div>
    </div>
  );
}

'use client';

import { SKOOL_URL } from '@/lib/constants';
import type { ReactNode } from 'react';

interface PremiumContentProps {
  children: ReactNode;
  title?: string;
}

export function PremiumContent({
  children,
  title = 'Premium Content',
}: PremiumContentProps) {
  return (
    <div className="relative my-8">
      <div className="pointer-events-none select-none blur-sm" aria-hidden>
        {children}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-fd-background/80 backdrop-blur-sm">
        <div className="text-center">
          <p className="mb-2 text-lg font-semibold text-fd-foreground">
            {title}
          </p>
          <p className="mb-4 max-w-sm text-sm text-fd-muted-foreground">
            This content is available exclusively in the AI Agents Accelerator
            community.
          </p>
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-[hsl(0,65%,50%)] px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-[hsl(0,65%,45%)]"
          >
            Unlock Content &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

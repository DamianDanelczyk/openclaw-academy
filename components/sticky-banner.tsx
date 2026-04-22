'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { SKOOL_URL, CTA_COPY } from '@/lib/constants';

const STORAGE_KEY = 'oc-banner-dismissed';

export function StickyBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  function dismiss() {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, '1');
  }

  if (!visible) return null;

  return (
    <div className="sticky top-0 z-50 flex items-center justify-center gap-3 bg-[hsl(0,65%,50%)] px-4 py-2 text-sm font-medium text-white">
      <a
        href={SKOOL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {CTA_COPY.banner.text} &rarr; {CTA_COPY.banner.cta}
      </a>
      <button
        onClick={dismiss}
        aria-label="Dismiss banner"
        className="ml-2 rounded p-0.5 hover:bg-white/20"
      >
        <X size={16} />
      </button>
    </div>
  );
}

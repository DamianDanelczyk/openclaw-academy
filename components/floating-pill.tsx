'use client';

import { useState, useEffect } from 'react';
import { SKOOL_URL, CTA_COPY } from '@/lib/constants';

export function FloatingPill() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <a
      href={SKOOL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 rounded-full bg-[hsl(0,65%,50%)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-[hsl(0,65%,45%)] hover:shadow-xl"
    >
      {CTA_COPY.floatingPill.text} &rarr;
    </a>
  );
}

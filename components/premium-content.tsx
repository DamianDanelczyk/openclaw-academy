import type { ReactNode } from 'react';

interface PremiumContentProps {
  children: ReactNode;
  title?: string;
}

export function PremiumContent({ children }: PremiumContentProps) {
  return <>{children}</>;
}

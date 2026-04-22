import type { ReactNode } from 'react';

interface DownloadGateProps {
  children: ReactNode;
  fileName?: string;
}

export function DownloadGate({ children }: DownloadGateProps) {
  return <>{children}</>;
}

import type { ReactNode } from 'react';

type CalloutType = 'tip' | 'warning' | 'important' | 'note';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const styles: Record<CalloutType, { border: string; bg: string; icon: string }> = {
  tip: {
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-500/5',
    icon: '💡',
  },
  warning: {
    border: 'border-yellow-500/40',
    bg: 'bg-yellow-500/5',
    icon: '⚠️',
  },
  important: {
    border: 'border-[hsl(0,65%,50%)]/40',
    bg: 'bg-[hsl(0,65%,50%)]/5',
    icon: '🔴',
  },
  note: {
    border: 'border-blue-500/40',
    bg: 'bg-blue-500/5',
    icon: '📝',
  },
};

export function Callout({ type = 'note', title, children }: CalloutProps) {
  const style = styles[type];

  return (
    <div
      className={`my-6 rounded-lg border ${style.border} ${style.bg} p-4`}
    >
      {title && (
        <p className="mb-2 font-semibold text-fd-foreground">
          {style.icon} {title}
        </p>
      )}
      <div className="text-sm text-fd-muted-foreground [&>p]:my-0">
        {children}
      </div>
    </div>
  );
}

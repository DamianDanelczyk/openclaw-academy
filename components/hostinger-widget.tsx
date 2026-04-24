import { HOSTINGER_URL } from '@/lib/constants';

export function HostingerWidget() {
  return (
    <div className="mx-3 my-2 rounded-xl border border-fd-border bg-fd-card p-3">
      <p className="text-[10px] uppercase tracking-widest text-fd-muted-foreground">
        Self-host OpenClaw on VPS
      </p>

      <div className="mt-1.5 flex items-center gap-1.5">
        <span className="rounded border border-fd-border px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-fd-muted-foreground">
          Hostinger
        </span>
      </div>

      <p className="mt-2 text-sm font-bold leading-tight text-fd-foreground">
        Always-on AI Assistant
      </p>

      <p className="mt-2 text-2xl font-extrabold text-fd-foreground">
        $4.99<span className="text-sm font-medium text-fd-muted-foreground">/mo</span>
      </p>

      <p className="mt-1 text-xs font-semibold text-emerald-400">
        10% OFF &middot; Code: DAMIAN
      </p>

      <a
        href={HOSTINGER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 flex w-full items-center justify-center rounded-lg border border-fd-border bg-fd-muted/40 px-3 py-1.5 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-muted/70"
      >
        Get Hosting &rarr;
      </a>

      <p className="mt-2 text-center text-[10px] text-fd-muted-foreground opacity-50">
        Support this site &mdash; partner link
      </p>
    </div>
  );
}

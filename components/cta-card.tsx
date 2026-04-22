import { SKOOL_URL, CTA_COPY } from '@/lib/constants';

type Variant = keyof typeof CTA_COPY.variants;

interface CTACardProps {
  variant?: Variant;
}

export function CTACard({ variant = 'generic' }: CTACardProps) {
  const copy = CTA_COPY.variants[variant];

  return (
    <div className="my-8 rounded-lg border border-[hsl(0,65%,50%)]/30 bg-[hsl(0,65%,50%)]/5 p-6">
      <h3 className="mb-2 text-lg font-semibold text-fd-foreground">
        {copy.title}
      </h3>
      <p className="mb-4 text-sm text-fd-muted-foreground">
        {copy.description}
      </p>
      <a
        href={SKOOL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-lg bg-[hsl(0,65%,50%)] px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-[hsl(0,65%,45%)]"
      >
        {copy.cta} &rarr;
      </a>
    </div>
  );
}

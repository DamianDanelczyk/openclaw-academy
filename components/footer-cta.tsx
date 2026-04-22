import { SKOOL_URL, CTA_COPY } from '@/lib/constants';

export function FooterCTA() {
  return (
    <div className="mt-12 border-t border-fd-border px-6 py-12 text-center">
      <h3 className="mb-2 text-xl font-semibold text-fd-foreground">
        {CTA_COPY.footer.title}
      </h3>
      <p className="mx-auto mb-6 max-w-lg text-sm text-fd-muted-foreground">
        {CTA_COPY.footer.description}
      </p>
      <a
        href={SKOOL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-lg bg-[hsl(0,65%,50%)] px-8 py-3 font-semibold text-white transition-all hover:bg-[hsl(0,65%,45%)]"
      >
        {CTA_COPY.footer.cta} &rarr;
      </a>
    </div>
  );
}

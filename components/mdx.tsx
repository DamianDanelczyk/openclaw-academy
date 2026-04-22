import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { CTACard } from '@/components/cta-card';
import { PremiumContent } from '@/components/premium-content';
import { DownloadGate } from '@/components/download-gate';
import { ComparisonTable } from '@/components/comparison-table';
import { Callout } from '@/components/callout';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    CTACard,
    PremiumContent,
    DownloadGate,
    ComparisonTable,
    Callout,
    ...components,
  };
}

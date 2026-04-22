import Link from 'next/link';
import Image from 'next/image';
import { SKOOL_URL } from '@/lib/constants';

const sections = [
  {
    title: 'Getting Started',
    description: 'Install OpenClaw and build your first AI agent in under an hour.',
    href: '/docs/getting-started/what-is-openclaw',
  },
  {
    title: 'Core Architecture',
    description: 'Understand the Gateway, channels, agents, memory, and SOUL.md.',
    href: '/docs/core-architecture/gateway',
  },
  {
    title: 'Automation',
    description: 'Cron jobs, webhooks, and end-to-end automation walkthroughs.',
    href: '/docs/automation/cron-jobs',
  },
  {
    title: 'Security',
    description: 'Lock down your deployment with production-ready security practices.',
    href: '/docs/security/checklist',
  },
  {
    title: 'Playbooks',
    description: 'Copy-paste configurations for 10 real-world use cases.',
    href: '/docs/playbooks/morning-briefing',
  },
  {
    title: 'Making Money',
    description: 'Turn your OpenClaw skills into a profitable AI agent business.',
    href: '/docs/making-money/agency-model',
  },
  {
    title: 'Advanced',
    description: 'Sub-agents, deployment, cost optimization, and troubleshooting.',
    href: '/docs/advanced/sub-agents',
  },
  {
    title: 'Resources',
    description: 'Cheat sheets, templates, glossary, and recommended tools.',
    href: '/docs/resources/cheat-sheet',
  },
];

const stats = [
  { value: '56', label: 'In-Depth Guides' },
  { value: '10', label: 'Ready-Made Playbooks' },
  { value: '30+', label: 'SOUL.md Templates' },
  { value: '100%', label: 'Free' },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="px-6 pb-12 pt-20 md:pb-16 md:pt-28">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[hsl(0,65%,50%)]">
              OpenClaw Academy
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-fd-foreground md:text-5xl lg:text-6xl">
              The Complete{' '}
              <span className="text-[hsl(0,65%,50%)]">OpenClaw</span>{' '}
              Guide
            </h1>
            <p className="mt-6 max-w-lg text-lg text-fd-muted-foreground">
              Your plain-English introduction to the AI agent that actually does
              things for you. From zero to production — no coding experience
              required.{' '}
              <span className="font-semibold text-[hsl(0,65%,50%)]">100% Free.</span>
            </p>
            <p className="mt-3 text-sm italic text-fd-muted-foreground">
              &ldquo;The lobster way&rdquo; — your personal assistant, running on
              your own hardware, answering messages from anywhere.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-start justify-center">
              <Link
                href="/docs/getting-started/what-is-openclaw"
                className="rounded-lg bg-[hsl(0,65%,50%)] px-8 py-3 font-semibold text-white transition-all hover:bg-[hsl(0,65%,45%)]"
              >
                Start Learning — It&apos;s Free
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="OpenClaw Mascot"
              width={300}
              height={300}
              priority
              className="drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats bar — separated from hero */}
      <section className="mt-8 border-y border-fd-border bg-fd-card">
        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-fd-border md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center">
              <p className="text-3xl font-bold text-[hsl(0,65%,50%)]">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-fd-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What's Inside */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-fd-foreground">
            What&apos;s Inside
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-fd-muted-foreground">
            8 sections covering everything from your first install to building a
            profitable AI agent business.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {sections.map((section, i) => (
              <Link
                key={section.title}
                href={section.href}
                className="group flex items-start gap-4 rounded-xl border border-fd-border bg-fd-card p-5 transition-all hover:border-[hsl(0,65%,50%)]/50 hover:bg-fd-accent"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[hsl(0,65%,50%)]/10 text-sm font-bold text-[hsl(0,65%,50%)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-semibold text-fd-foreground group-hover:text-[hsl(0,65%,50%)]">
                    {section.title}
                  </h3>
                  <p className="mt-1 text-sm text-fd-muted-foreground">
                    {section.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* This Is For */}
      <section className="border-t border-fd-border bg-fd-card px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-fd-foreground">
            This Is For You If...
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Non-Technical Builders',
                description:
                  "You want AI automations but don't want to write code. Every guide uses plain English with copy-paste configs.",
              },
              {
                title: 'Agency Owners',
                description:
                  'You want to offer AI agent services to clients. Get pricing templates, SOPs, and case studies with real numbers.',
              },
              {
                title: 'Developers',
                description:
                  'You want the deep technical reference. Architecture docs, sub-agent patterns, deployment guides, and cost optimization.',
              },
            ].map((persona) => (
              <div
                key={persona.title}
                className="rounded-xl border border-fd-border bg-fd-background p-6"
              >
                <h3 className="mb-2 font-semibold text-fd-foreground">
                  {persona.title}
                </h3>
                <p className="text-sm text-fd-muted-foreground">
                  {persona.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <Image
            src="/logo.png"
            alt="OpenClaw"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <h2 className="mb-4 text-3xl font-bold text-fd-foreground">
            Ready to get started?
          </h2>
          <p className="mb-8 text-fd-muted-foreground">
            Everything you need to go from zero to a working AI agent setup —
            completely free.
          </p>
          <Link
            href="/docs/getting-started/what-is-openclaw"
            className="inline-block rounded-lg bg-[hsl(0,65%,50%)] px-8 py-3 font-semibold text-white transition-all hover:bg-[hsl(0,65%,45%)]"
          >
            Start Learning — It&apos;s Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-fd-border px-6 py-8 text-center text-sm text-fd-muted-foreground">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} OpenClaw Academy. All rights reserved.
        </p>
        <p>
          Powered by{' '}
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(0,65%,50%)] hover:underline"
          >
            AI Agents Accelerator
          </a>
        </p>
      </footer>
    </main>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { SKOOL_URL, HOSTINGER_URL } from '@/lib/constants';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
];

type Lang = 'en' | 'es' | 'pt' | 'fr' | 'de' | 'pl';

const t: Record<Lang, {
  docs: string;
  heroEyebrow: string;
  heroTitle: [string, string]; // [before-openclaw, after-openclaw]
  heroSubtitle: string;
  heroQuote: string;
  heroCta: string;
  statsLabels: [string, string, string, string];
  whatsInsideTitle: string;
  whatsInsideSubtitle: string;
  sections: [string, string][];
  forYouTitle: string;
  personas: [string, string][];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  beginnerBadge: string;
  beginnerTitle: string;
  beginnerSubtitle: string;
  beginnerCta: string;
  footerRights: string;
  footerPoweredBy: string;
  footerDisclaimer: string;
}> = {
  en: {
    docs: 'Docs',
    heroEyebrow: 'OpenClaw Academy',
    heroTitle: ['The Complete ', ' Guide'],
    heroSubtitle: 'Your plain-English introduction to the AI agent that actually does things for you. From zero to production — no coding experience required.',
    heroQuote: '"The lobster way" — your personal assistant, running on your own hardware, answering messages from anywhere.',
    heroCta: 'Start Learning',
    statsLabels: ['In-Depth Guides', 'Ready-Made Playbooks', 'SOUL.md Templates', 'Free'],
    whatsInsideTitle: "What's Inside",
    whatsInsideSubtitle: '8 sections covering everything from your first install to building a profitable AI agent business.',
    sections: [
      ['Getting Started', 'Install OpenClaw and build your first AI agent in under an hour.'],
      ['Core Architecture', 'Understand the Gateway, channels, agents, memory, and SOUL.md.'],
      ['Automation', 'Cron jobs, webhooks, and end-to-end automation walkthroughs.'],
      ['Security', 'Lock down your deployment with production-ready security practices.'],
      ['Playbooks', 'Copy-paste configurations for 10 real-world use cases.'],
      ['Making Money', 'Turn your OpenClaw skills into a profitable AI agent business.'],
      ['Advanced', 'Sub-agents, deployment, cost optimization, and troubleshooting.'],
      ['Resources', 'Cheat sheets, templates, glossary, and recommended tools.'],
    ],
    forYouTitle: 'This Is For You If...',
    personas: [
      ['Non-Technical Builders', "You want AI automations but don't want to write code. Every guide uses plain English with copy-paste configs."],
      ['Agency Owners', 'You want to offer AI agent services to clients. Get pricing templates, SOPs, and case studies with real numbers.'],
      ['Developers', 'You want the deep technical reference. Architecture docs, sub-agent patterns, deployment guides, and cost optimization.'],
    ],
    ctaTitle: 'Ready to get started?',
    ctaSubtitle: 'Everything you need to go from zero to a working AI agent setup.',
    ctaButton: 'Start Learning',
    beginnerBadge: 'New to OpenClaw?',
    beginnerTitle: 'Start with the Beginner Path',
    beginnerSubtitle: 'Start here if you\'re a complete beginner or taking the OpenClaw Masterclass on Udemy. Plain English, no coding required.',
    beginnerCta: 'Start the Beginner Path',
    footerRights: 'All rights reserved.',
    footerPoweredBy: 'Powered by',
    footerDisclaimer: 'OpenClaw Academy is an independent, community-built resource and is not affiliated with, endorsed by, or officially connected to OpenClaw or its creators. All content is written independently for educational purposes only and is not for commercial use. Information is provided as-is with no warranty of any kind. Use at your own risk.',
  },
  es: {
    docs: 'Docs',
    heroEyebrow: 'OpenClaw Academy',
    heroTitle: ['La Guía Completa de ', ''],
    heroSubtitle: 'Tu introducción en español al agente de IA que realmente hace cosas por ti. De cero a producción — sin experiencia en programación.',
    heroQuote: '"El camino langosta" — tu asistente personal, ejecutándose en tu propio hardware, respondiendo mensajes desde cualquier lugar.',
    heroCta: 'Empezar a Aprender',
    statsLabels: ['Guías Detalladas', 'Playbooks Listos', 'Plantillas SOUL.md', 'Gratis'],
    whatsInsideTitle: 'Qué Contiene',
    whatsInsideSubtitle: '8 secciones que cubren todo, desde tu primera instalación hasta construir un negocio rentable con agentes de IA.',
    sections: [
      ['Primeros Pasos', 'Instala OpenClaw y crea tu primer agente de IA en menos de una hora.'],
      ['Arquitectura Principal', 'Comprende el Gateway, canales, agentes, memoria y SOUL.md.'],
      ['Automatización', 'Cron jobs, webhooks y guías completas de automatización.'],
      ['Seguridad', 'Protege tu despliegue con prácticas de seguridad listas para producción.'],
      ['Playbooks', 'Configuraciones de copiar y pegar para 10 casos de uso reales.'],
      ['Ganar Dinero', 'Convierte tus habilidades de OpenClaw en un negocio de agentes de IA rentable.'],
      ['Avanzado', 'Sub-agentes, despliegue, optimización de costes y resolución de problemas.'],
      ['Recursos', 'Hojas de trucos, plantillas, glosario y herramientas recomendadas.'],
    ],
    forYouTitle: 'Esto Es Para Ti Si...',
    personas: [
      ['Constructores No Técnicos', 'Quieres automatizaciones de IA pero no quieres escribir código. Cada guía usa español sencillo con configuraciones de copiar y pegar.'],
      ['Dueños de Agencias', 'Quieres ofrecer servicios de agentes de IA a clientes. Obtén plantillas de precios, SOPs y casos de estudio con números reales.'],
      ['Desarrolladores', 'Quieres la referencia técnica profunda. Documentación de arquitectura, patrones de sub-agentes, guías de despliegue y optimización de costes.'],
    ],
    ctaTitle: '¿Listo para empezar?',
    ctaSubtitle: 'Todo lo que necesitas para pasar de cero a una configuración de agente de IA funcional.',
    ctaButton: 'Empezar a Aprender',
    beginnerBadge: '¿Nuevo en OpenClaw?',
    beginnerTitle: 'Empieza con el Camino para Principiantes',
    beginnerSubtitle: 'Empieza aquí si eres completamente nuevo o estás haciendo el OpenClaw Masterclass en Udemy. En español sencillo, sin necesidad de programar.',
    beginnerCta: 'Empezar el Camino para Principiantes',
    footerRights: 'Todos los derechos reservados.',
    footerPoweredBy: 'Desarrollado por',
    footerDisclaimer: 'OpenClaw Academy es un recurso independiente creado por la comunidad y no está afiliado, respaldado ni conectado oficialmente a OpenClaw o sus creadores. Todo el contenido es escrito de forma independiente con fines exclusivamente educativos y no para uso comercial. La información se proporciona tal cual, sin garantía de ningún tipo. Úsalo bajo tu propia responsabilidad.',
  },
  pt: {
    docs: 'Docs',
    heroEyebrow: 'OpenClaw Academy',
    heroTitle: ['O Guia Completo do ', ''],
    heroSubtitle: 'Sua introdução em português ao agente de IA que realmente faz coisas por você. Do zero à produção — sem experiência em programação.',
    heroQuote: '"O jeito lagosta" — seu assistente pessoal, rodando no seu próprio hardware, respondendo mensagens de qualquer lugar.',
    heroCta: 'Começar a Aprender',
    statsLabels: ['Guias Detalhados', 'Playbooks Prontos', 'Templates SOUL.md', 'Grátis'],
    whatsInsideTitle: 'O Que Há Dentro',
    whatsInsideSubtitle: '8 seções cobrindo tudo, desde sua primeira instalação até construir um negócio lucrativo com agentes de IA.',
    sections: [
      ['Primeiros Passos', 'Instale o OpenClaw e crie seu primeiro agente de IA em menos de uma hora.'],
      ['Arquitetura Principal', 'Entenda o Gateway, canais, agentes, memória e SOUL.md.'],
      ['Automação', 'Cron jobs, webhooks e tutoriais completos de automação.'],
      ['Segurança', 'Proteja seu deployment com práticas de segurança prontas para produção.'],
      ['Playbooks', 'Configurações de copiar e colar para 10 casos de uso reais.'],
      ['Ganhar Dinheiro', 'Transforme suas habilidades com OpenClaw em um negócio lucrativo de agentes de IA.'],
      ['Avançado', 'Sub-agentes, deployment, otimização de custos e solução de problemas.'],
      ['Recursos', 'Cheat sheets, templates, glossário e ferramentas recomendadas.'],
    ],
    forYouTitle: 'Isso É Para Você Se...',
    personas: [
      ['Construtores Não-Técnicos', 'Você quer automações de IA mas não quer escrever código. Cada guia usa português simples com configurações de copiar e colar.'],
      ['Donos de Agências', 'Você quer oferecer serviços de agentes de IA para clientes. Obtenha templates de preços, SOPs e estudos de caso com números reais.'],
      ['Desenvolvedores', 'Você quer a referência técnica aprofundada. Docs de arquitetura, padrões de sub-agentes, guias de deployment e otimização de custos.'],
    ],
    ctaTitle: 'Pronto para começar?',
    ctaSubtitle: 'Tudo que você precisa para ir do zero a uma configuração funcional de agente de IA.',
    ctaButton: 'Começar a Aprender',
    beginnerBadge: 'Novo no OpenClaw?',
    beginnerTitle: 'Comece com o Caminho para Iniciantes',
    beginnerSubtitle: 'Comece aqui se você é completamente iniciante ou está fazendo o OpenClaw Masterclass na Udemy. Em português simples, sem necessidade de programar.',
    beginnerCta: 'Começar o Caminho para Iniciantes',
    footerRights: 'Todos os direitos reservados.',
    footerPoweredBy: 'Desenvolvido por',
    footerDisclaimer: 'OpenClaw Academy é um recurso independente criado pela comunidade e não é afiliado, endossado nem oficialmente conectado ao OpenClaw ou seus criadores. Todo o conteúdo é escrito de forma independente para fins exclusivamente educacionais e não para uso comercial. As informações são fornecidas sem garantias de qualquer tipo. Use por sua conta e risco.',
  },
  fr: {
    docs: 'Docs',
    heroEyebrow: 'OpenClaw Academy',
    heroTitle: ['Le Guide Complet ', ''],
    heroSubtitle: "Votre introduction en français à l'agent IA qui fait vraiment des choses pour vous. De zéro à la production — aucune expérience en programmation requise.",
    heroQuote: '"La voie du homard" — votre assistant personnel, fonctionnant sur votre propre matériel, répondant à vos messages depuis n\'importe où.',
    heroCta: 'Commencer à Apprendre',
    statsLabels: ['Guides Approfondis', 'Playbooks Prêts', 'Templates SOUL.md', 'Gratuit'],
    whatsInsideTitle: 'Ce Qui est Inclus',
    whatsInsideSubtitle: '8 sections couvrant tout, de votre première installation à la création d\'une entreprise rentable d\'agents IA.',
    sections: [
      ['Démarrage', 'Installez OpenClaw et créez votre premier agent IA en moins d\'une heure.'],
      ['Architecture Principale', 'Comprenez la Gateway, les canaux, les agents, la mémoire et SOUL.md.'],
      ['Automatisation', 'Cron jobs, webhooks et tutoriels d\'automatisation complets.'],
      ['Sécurité', 'Sécurisez votre déploiement avec des pratiques de sécurité prêtes pour la production.'],
      ['Playbooks', 'Configurations à copier-coller pour 10 cas d\'usage réels.'],
      ['Gagner de l\'Argent', 'Transformez vos compétences OpenClaw en une entreprise d\'agents IA rentable.'],
      ['Avancé', 'Sous-agents, déploiement, optimisation des coûts et dépannage.'],
      ['Ressources', 'Aide-mémoires, templates, glossaire et outils recommandés.'],
    ],
    forYouTitle: 'C\'est Pour Vous Si...',
    personas: [
      ['Créateurs Non-Techniques', 'Vous voulez des automatisations IA sans écrire de code. Chaque guide utilise un français simple avec des configurations à copier-coller.'],
      ['Propriétaires d\'Agences', 'Vous voulez proposer des services d\'agents IA à vos clients. Obtenez des templates de tarification, des SOPs et des études de cas avec de vrais chiffres.'],
      ['Développeurs', 'Vous voulez la référence technique approfondie. Docs d\'architecture, patterns de sous-agents, guides de déploiement et optimisation des coûts.'],
    ],
    ctaTitle: 'Prêt à commencer ?',
    ctaSubtitle: 'Tout ce dont vous avez besoin pour passer de zéro à une configuration d\'agent IA fonctionnelle.',
    ctaButton: 'Commencer à Apprendre',
    beginnerBadge: 'Nouveau sur OpenClaw ?',
    beginnerTitle: 'Commencez par le Parcours Débutant',
    beginnerSubtitle: 'Commencez ici si vous êtes un débutant complet ou si vous suivez le OpenClaw Masterclass sur Udemy. En français simple, aucune programmation requise.',
    beginnerCta: 'Commencer le Parcours Débutant',
    footerRights: 'Tous droits réservés.',
    footerPoweredBy: 'Propulsé par',
    footerDisclaimer: 'OpenClaw Academy est une ressource indépendante créée par la communauté et n\'est pas affiliée, approuvée ni officiellement connectée à OpenClaw ou ses créateurs. Tout le contenu est rédigé de manière indépendante à des fins exclusivement éducatives et non commerciales. Les informations sont fournies telles quelles, sans garantie d\'aucune sorte. Utilisation à vos propres risques.',
  },
  de: {
    docs: 'Docs',
    heroEyebrow: 'OpenClaw Academy',
    heroTitle: ['Der vollständige ', '-Leitfaden'],
    heroSubtitle: 'Ihre verständliche Einführung in den KI-Agenten, der wirklich Dinge für Sie erledigt. Von null zur Produktion — keine Programmierkenntnisse erforderlich.',
    heroQuote: '"Der Hummer-Weg" — Ihr persönlicher Assistent, läuft auf Ihrer eigenen Hardware und beantwortet Nachrichten von überall.',
    heroCta: 'Jetzt Lernen',
    statsLabels: ['Ausführliche Leitfäden', 'Fertige Playbooks', 'SOUL.md-Vorlagen', 'Kostenlos'],
    whatsInsideTitle: 'Was Enthalten Ist',
    whatsInsideSubtitle: '8 Abschnitte, die alles von der ersten Installation bis zum Aufbau eines profitablen KI-Agenten-Unternehmens abdecken.',
    sections: [
      ['Erste Schritte', 'Installieren Sie OpenClaw und erstellen Sie Ihren ersten KI-Agenten in weniger als einer Stunde.'],
      ['Kernarchitektur', 'Verstehen Sie Gateway, Kanäle, Agenten, Speicher und SOUL.md.'],
      ['Automatisierung', 'Cron-Jobs, Webhooks und vollständige Automatisierungs-Walkthroughs.'],
      ['Sicherheit', 'Sichern Sie Ihre Bereitstellung mit produktionsreifen Sicherheitspraktiken.'],
      ['Playbooks', 'Kopier-Einfüge-Konfigurationen für 10 reale Anwendungsfälle.'],
      ['Geld Verdienen', 'Verwandeln Sie Ihre OpenClaw-Kenntnisse in ein profitables KI-Agenten-Unternehmen.'],
      ['Fortgeschritten', 'Unteragenten, Bereitstellung, Kostenoptimierung und Fehlerbehebung.'],
      ['Ressourcen', 'Spickzettel, Vorlagen, Glossar und empfohlene Tools.'],
    ],
    forYouTitle: 'Das Ist Für Sie, Wenn...',
    personas: [
      ['Nicht-Technische Entwickler', 'Sie möchten KI-Automatisierungen, ohne Code schreiben zu müssen. Jeder Leitfaden verwendet verständliches Deutsch mit Kopier-Einfüge-Konfigurationen.'],
      ['Agentur-Inhaber', 'Sie möchten KI-Agenten-Dienste für Kunden anbieten. Erhalten Sie Preisvorlagen, SOPs und Fallstudien mit echten Zahlen.'],
      ['Entwickler', 'Sie möchten die technische Tiefenreferenz. Architekturdokumentation, Unteragenten-Muster, Bereitstellungsleitfäden und Kostenoptimierung.'],
    ],
    ctaTitle: 'Bereit anzufangen?',
    ctaSubtitle: 'Alles, was Sie brauchen, um von null zu einem funktionierenden KI-Agenten-Setup zu gelangen.',
    ctaButton: 'Jetzt Lernen',
    beginnerBadge: 'Neu bei OpenClaw?',
    beginnerTitle: 'Starten Sie mit dem Einsteiger-Pfad',
    beginnerSubtitle: 'Fangen Sie hier an, wenn Sie ein kompletter Einsteiger sind oder den OpenClaw Masterclass auf Udemy machen. Auf verständlichem Deutsch, keine Programmierkenntnisse erforderlich.',
    beginnerCta: 'Einsteiger-Pfad starten',
    footerRights: 'Alle Rechte vorbehalten.',
    footerPoweredBy: 'Unterstützt von',
    footerDisclaimer: 'OpenClaw Academy ist eine unabhängige, community-erstellte Ressource und ist nicht mit OpenClaw oder seinen Erstellern verbunden. Alle Inhalte wurden unabhängig ausschließlich zu Bildungszwecken verfasst und sind nicht für kommerzielle Nutzung bestimmt. Die Informationen werden ohne jegliche Gewährleistung bereitgestellt. Nutzung auf eigene Gefahr.',
  },
  pl: {
    docs: 'Dokumenty',
    heroEyebrow: 'OpenClaw Academy',
    heroTitle: ['Kompletny Przewodnik po ', ''],
    heroSubtitle: 'Twoje przystępne wprowadzenie do agenta AI, który naprawdę robi rzeczy za Ciebie. Od zera do produkcji — bez doświadczenia w programowaniu.',
    heroQuote: '"Droga homara" — Twój osobisty asystent, działający na Twoim własnym sprzęcie, odpowiadający na wiadomości z dowolnego miejsca.',
    heroCta: 'Zacznij Naukę',
    statsLabels: ['Szczegółowych Poradników', 'Gotowych Playbooków', 'Szablonów SOUL.md', 'Bezpłatnie'],
    whatsInsideTitle: 'Co Jest W Środku',
    whatsInsideSubtitle: '8 sekcji obejmujących wszystko — od pierwszej instalacji po zbudowanie dochodowego biznesu z agentami AI.',
    sections: [
      ['Pierwsze Kroki', 'Zainstaluj OpenClaw i stwórz swojego pierwszego agenta AI w mniej niż godzinę.'],
      ['Architektura Główna', 'Zrozum Gateway, kanały, agentów, pamięć i SOUL.md.'],
      ['Automatyzacja', 'Zadania cron, webhooki i kompletne instrukcje automatyzacji.'],
      ['Bezpieczeństwo', 'Zabezpiecz swoje wdrożenie za pomocą gotowych do produkcji praktyk bezpieczeństwa.'],
      ['Playbooki', 'Konfiguracje kopiuj-wklej dla 10 rzeczywistych przypadków użycia.'],
      ['Zarabianie', 'Zamień swoje umiejętności OpenClaw w dochodowy biznes z agentami AI.'],
      ['Zaawansowane', 'Podagenci, wdrożenie, optymalizacja kosztów i rozwiązywanie problemów.'],
      ['Zasoby', 'Ściągawki, szablony, słowniczek i polecane narzędzia.'],
    ],
    forYouTitle: 'To Jest Dla Ciebie, Jeśli...',
    personas: [
      ['Twórcy Bez Kodowania', 'Chcesz automatyzacji AI, ale nie chcesz pisać kodu. Każdy poradnik używa prostego języka z konfiguracjami kopiuj-wklej.'],
      ['Właściciele Agencji', 'Chcesz oferować usługi agentów AI klientom. Uzyskaj szablony cenników, SOPy i studia przypadków z prawdziwymi liczbami.'],
      ['Deweloperzy', 'Chcesz dogłębnej referencji technicznej. Dokumentacja architektury, wzorce podagentów, przewodniki wdrożenia i optymalizacja kosztów.'],
    ],
    ctaTitle: 'Gotowy na start?',
    ctaSubtitle: 'Wszystko, czego potrzebujesz, żeby przejść od zera do działającego agenta AI.',
    ctaButton: 'Zacznij Naukę',
    beginnerBadge: 'Nowy w OpenClaw?',
    beginnerTitle: 'Zacznij od Ścieżki dla Początkujących',
    beginnerSubtitle: 'Zacznij tutaj jeśli jesteś zupełnym nowicjuszem lub robisz OpenClaw Masterclass na Udemy. Prostym językiem, bez potrzeby programowania.',
    beginnerCta: 'Zacznij Ścieżkę dla Początkujących',
    footerRights: 'Wszelkie prawa zastrzeżone.',
    footerPoweredBy: 'Napędzane przez',
    footerDisclaimer: 'OpenClaw Academy to niezależny zasób stworzony przez społeczność. Nie jest powiązany, wspierany ani oficjalnie połączony z OpenClaw ani jego twórcami. Wszystkie treści są napisane niezależnie wyłącznie w celach edukacyjnych i nie mogą być wykorzystywane komercyjnie. Informacje są udostępniane bez żadnych gwarancji. Korzystasz na własne ryzyko.',
  },
};

const sectionSlugs = [
  'getting-started/what-is-openclaw',
  'core-architecture/gateway',
  'automation/cron-jobs',
  'security/checklist',
  'playbooks/morning-briefing',
  'making-money/agency-model',
  'advanced/sub-agents',
  'resources/cheat-sheet',
];

function LanguageSwitcher({ lang }: { lang: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = languages.find((l) => l.code === lang) ?? languages[0];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 rounded-md border border-fd-border bg-fd-card px-3 py-1.5 text-sm text-fd-foreground transition-colors hover:border-[hsl(0,65%,50%)]/40 hover:text-[hsl(0,65%,50%)]"
        aria-label="Switch language"
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-1.5 w-40 overflow-hidden rounded-md border border-fd-border bg-fd-card shadow-lg">
          {languages.map((l) => (
            <Link
              key={l.code}
              href={`/${l.code}`}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-fd-accent ${
                l.code === lang ? 'text-[hsl(0,65%,50%)] font-medium' : 'text-fd-foreground'
              }`}
            >
              <span>{l.flag}</span>
              <span>{l.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  const params = useParams<{ lang: string }>();
  const lang = (params?.lang ?? 'en') as Lang;
  const tr = t[lang] ?? t.en;

  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 border-b border-fd-border bg-fd-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <Image src="/logo.png" alt="OpenClaw Academy" width={28} height={28} />
            <span className="font-semibold text-fd-foreground">OpenClaw Academy</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href={`/${lang}/docs/getting-started/what-is-openclaw`}
              className="hidden text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground sm:block"
            >
              {tr.docs}
            </Link>
            <LanguageSwitcher lang={lang} />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pb-12 pt-16 md:pb-16 md:pt-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[hsl(0,65%,50%)]">
              {tr.heroEyebrow}
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-fd-foreground md:text-5xl lg:text-6xl">
              {tr.heroTitle[0]}
              <span className="text-[hsl(0,65%,50%)]">OpenClaw</span>
              {tr.heroTitle[1]}
            </h1>
            <p className="mt-6 max-w-lg text-lg text-fd-muted-foreground">
              {tr.heroSubtitle}
            </p>
            <p className="mt-3 text-sm italic text-fd-muted-foreground">
              {tr.heroQuote}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-start justify-center">
              <Link
                href={`/${lang}/docs/getting-started/what-is-openclaw`}
                className="rounded-lg bg-[hsl(0,65%,50%)] px-8 py-3 font-semibold text-white transition-all hover:bg-[hsl(0,65%,45%)]"
              >
                {tr.heroCta}
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

      {/* Stats bar */}
      <section className="mt-8 border-y border-fd-border bg-fd-card">
        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-fd-border md:grid-cols-4">
          {(['56', '10', '30+', '100%'] as const).map((value, i) => (
            <div key={i} className="px-6 py-8 text-center">
              <p className="text-3xl font-bold text-[hsl(0,65%,50%)]">{value}</p>
              <p className="mt-1 text-sm text-fd-muted-foreground">{tr.statsLabels[i]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beginner Path CTA */}
      <section className="border-t border-fd-border px-6 py-16">
        <div className="mx-auto max-w-5xl space-y-4">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-[hsl(0,65%,50%)]/20 bg-[hsl(0,65%,50%)]/5 px-8 py-12 text-center md:flex-row md:text-left">
            <div className="flex-1">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[hsl(0,65%,50%)]">
                {tr.beginnerBadge}
              </p>
              <h2 className="mb-3 text-2xl font-bold text-fd-foreground md:text-3xl">
                {tr.beginnerTitle}
              </h2>
              <p className="text-fd-muted-foreground">
                {tr.beginnerSubtitle}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href={`/${lang}/docs/beginner-path/introduction/what-is-openclaw`}
                className="inline-block rounded-lg bg-[hsl(0,65%,50%)] px-8 py-3 font-semibold text-white transition-all hover:bg-[hsl(0,65%,45%)]"
              >
                {tr.beginnerCta}
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 rounded-2xl border border-[hsl(0,65%,50%)]/20 bg-[hsl(0,65%,50%)]/5 px-8 py-12 text-center md:flex-row md:text-left">
            <div className="flex-1">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[hsl(0,65%,50%)]">
                Ready to go 24/7?
              </p>
              <h2 className="mb-3 text-2xl font-bold text-fd-foreground md:text-3xl">
                Install OpenClaw on a VPS
              </h2>
              <p className="text-fd-muted-foreground">
                Run your AI Agents around the clock. Use code{' '}
                <span className="font-bold text-[hsl(0,65%,50%)]">DAMIAN</span>{' '}
                for 10% off VPS.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-col items-center gap-2">
              <a
                href={HOSTINGER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-[hsl(0,65%,50%)] px-8 py-3 font-semibold text-white transition-all hover:bg-[hsl(0,65%,45%)]"
              >
                Get VPS Hosting →
              </a>
              <p className="text-xs italic text-fd-muted-foreground opacity-60">
                Affiliate link — supports this site at no extra cost to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-fd-foreground">
            {tr.whatsInsideTitle}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-fd-muted-foreground">
            {tr.whatsInsideSubtitle}
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {tr.sections.map(([title, description], i) => (
              <Link
                key={title}
                href={`/${lang}/docs/${sectionSlugs[i]}`}
                className="group flex items-start gap-4 rounded-xl border border-fd-border bg-fd-card p-5 transition-all hover:border-[hsl(0,65%,50%)]/50 hover:bg-fd-accent"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[hsl(0,65%,50%)]/10 text-sm font-bold text-[hsl(0,65%,50%)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-semibold text-fd-foreground group-hover:text-[hsl(0,65%,50%)]">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-fd-muted-foreground">
                    {description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Run OpenClaw 24/7 */}
      <section className="border-t border-fd-border px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:text-left">
            <div className="flex-1">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[hsl(0,65%,50%)]">
                Self-Hosting
              </p>
              <h2 className="mb-3 text-2xl font-bold text-fd-foreground md:text-3xl">
                Run OpenClaw 24/7
              </h2>
              <p className="max-w-lg text-fd-muted-foreground">
                Deploy your always-on AI assistant on a VPS — no laptop required, no downtime. Use code{' '}
                <span className="font-semibold text-fd-foreground">DAMIAN</span>{' '}
                for 10% off Hostinger.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-col items-center gap-2">
              <a
                href={HOSTINGER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-fd-border bg-fd-card px-6 py-2.5 text-sm font-semibold text-fd-foreground transition-colors hover:border-[hsl(0,65%,50%)]/40 hover:text-[hsl(0,65%,50%)]"
              >
                Get Started →
              </a>
              <p className="text-xs text-fd-muted-foreground opacity-50">Partner link</p>
            </div>
          </div>
        </div>
      </section>

      {/* This Is For */}
      <section className="border-t border-fd-border bg-fd-card px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-fd-foreground">
            {tr.forYouTitle}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {tr.personas.map(([title, description]) => (
              <div
                key={title}
                className="rounded-xl border border-fd-border bg-fd-background p-6"
              >
                <h3 className="mb-2 font-semibold text-fd-foreground">{title}</h3>
                <p className="text-sm text-fd-muted-foreground">{description}</p>
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
            {tr.ctaTitle}
          </h2>
          <p className="mb-8 text-fd-muted-foreground">
            {tr.ctaSubtitle}
          </p>
          <Link
            href={`/${lang}/docs/getting-started/what-is-openclaw`}
            className="inline-block rounded-lg bg-[hsl(0,65%,50%)] px-8 py-3 font-semibold text-white transition-all hover:bg-[hsl(0,65%,45%)]"
          >
            {tr.ctaButton}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-fd-border px-6 py-10 text-center text-sm text-fd-muted-foreground">
        <p className="mb-3">
          &copy; {new Date().getFullYear()} OpenClaw Academy. {tr.footerRights}
        </p>
        <p className="mb-3">
          {tr.footerPoweredBy}{' '}
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(0,65%,50%)] hover:underline"
          >
            AI Agents Accelerator
          </a>
        </p>
        <p className="mx-auto max-w-xl text-xs leading-relaxed opacity-60">
          {tr.footerDisclaimer}
        </p>
      </footer>
    </main>
  );
}

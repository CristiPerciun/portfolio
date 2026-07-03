export type Lang = 'it' | 'en' | 'ro';

export const LANGS: Lang[] = ['it', 'en', 'ro'];

export const CV_FILES: Record<Lang, string> = {
  it: 'Cristian_Perciun_Flutter_Developer_CV_IT.pdf',
  en: 'Cristian_Perciun_Flutter_Developer_CV_EN.pdf',
  ro: 'Cristian_Perciun_Flutter_Developer_CV_EN.pdf',
};

// ---- language-independent structural data ----

export const SKILL_TAGS: Record<string, string[]> = {
  mobile: ['Flutter', 'Dart', 'Riverpod', 'go_router', 'Drift/SQLite', 'Isar', 'MethodChannel', 'Kotlin/Swift/C++', 'Java Android', 'Material 3'],
  ai: ['Gemini', 'DeepSeek', 'OpenRouter', 'Ollama', 'multi-agent'],
  fiscal: ['FatturaPA/SdI', 'Registratore Telematico', 'ESC-POS', 'EFT-POS', 'cash keeper', 'RS232/TCP/USB', 'MQTT'],
  backend: ['Python/FastAPI', 'PHP', 'Node/TS', 'C#/.NET', 'SQL Server', 'MySQL', 'Redis', 'Firebase', 'Supabase'],
  devops: ['Jenkins', 'SonarQube', 'GitHub Actions', 'Docker', 'MSIX/.deb/APK', 'Appium', 'Espresso', 'TestRail'],
  security: ['OAuth1 HMAC-SHA1', 'OAuth2', 'CAS', 'MFA/2FA', 'cert pinning', 'secure storage'],
};

export const PROJECT_META = [
  { ascii: '▲▲ ♥ 142bpm', accent: 'cyan', link: 'https://github.com/CristiPerciun', stack: ['Flutter', 'Riverpod', 'Firebase', 'FastAPI', 'Docker', 'Raspberry Pi', 'GitHub Actions', 'PWA'] },
  { ascii: '🎬 render --agents=5', accent: 'acid', link: 'https://github.com/CristiPerciun', stack: ['Flutter desktop', 'Python', 'Gemini/Ollama', 'TTS Kokoro', 'FFmpeg', 'Isar/Hive'] },
  { ascii: '✂ 92·74·98 → PDF', accent: 'vio', link: 'https://github.com/CristiPerciun', stack: ['Flutter Web/Windows', 'Drift su WASM', 'pdf/printing'] },
];

export const JOB_META = [
  { period: '12/2024 — oggi', accent: 'acid' },
  { period: '09/2022 — 12/2023', accent: 'cyan' },
  { period: '09/2018 — 09/2022', accent: 'vio' },
  { period: '06/2016', accent: 'dim' },
];

// ---- translated content ----

export const translations = {
  it: {
    meta: {
      title: 'Cristian Perciun — Senior Flutter / Full-Stack Developer',
      description: 'Cristian Perciun — Senior Flutter / Full-Stack Developer. Sistemi POS e fiscali, architetture offline-first, integrazioni AI/LLM.',
    },
    nav: { skills: 'skills', exp: 'esperienza', projects: 'progetti', contact: 'contatti' },
    hero: {
      roles: ['Senior Flutter Developer', 'Full-Stack Engineer', 'Sistemi POS & Fiscali', 'Integrazioni AI / LLM', 'Architetture Offline-First'],
      blurb: `7+ anni in <span class="text-ink">Custom S.p.A.</span> nel dominio POS/fiscale. Porto un prodotto dall'idea al rilascio: dal driver seriale della stampante fiscale alla pipeline CI/CD, con architetture <span class="text-ink">offline-first</span> su 6 piattaforme e integrazioni <span class="text-ink">AI/LLM</span>.`,
      cta1: '[ VEDI_PROGETTI ]',
      cta2: '[ CONTATTAMI ]',
      stats: ['Anni exp', 'Piattaforme', 'Periferiche POS', 'Side project'],
      hint: 'SPAZZA LE PARTICELLE · TROVA GLI HOTSPOT',
      hintTouch: 'TOCCA L\'OLOGRAMMA · TROVA GLI HOTSPOT',
      hintPrinting: 'STAMPA IN CORSO…',
      hintDone: 'SCONTRINO EMESSO · RT OK',
      shapeLabels: ['TERMINALE_POS', 'CODICE', 'EURO_FISCALE', 'AI_CORE'],
      receipt: {
        doc: 'DOCUMENTO COMMERCIALE',
        sub: 'di vendita o prestazione — Parma, IT',
        total: 'TOTALE ESPERIENZA',
        totalVal: '7+ ANNI',
        platforms: 'PIATTAFORME',
        bugs: 'BUG IN PRODUZIONE',
        coffee: 'SCONTO CAFFÈ',
        payment: 'PAGAMENTO',
        download: '⬇ SCARICA_CV.PDF',
        bye: '*** GRAZIE E ARRIVEDERCI ***',
      },
    },
    skills: {
      heading: 'Competenze',
      cells: {
        mobile: { title: 'Mobile & Cross-Platform', desc: 'Un unico codebase, 6 piattaforme: Android, iOS, Web/PWA, Windows, Linux, macOS.' },
        ai: { title: 'AI / LLM', desc: 'Layer multi-provider, prompt engineering, orchestrazione multi-agente, TTS e media generativi.' },
        fiscal: { title: 'Fiscale & Hardware POS', desc: 'Dal protocollo seriale alla conformità normativa italiana.' },
        backend: { title: 'Backend & Database', desc: '' },
        devops: { title: 'DevOps & Testing', desc: 'CI/CD end-to-end: build firmata, quality gate, test automatici.' },
        security: { title: 'Sicurezza & OAuth', desc: '' },
      },
    },
    timeline: {
      heading: 'Esperienza',
      jobs: [
        {
          role: 'Software Developer · Mobile & Desktop',
          company: 'Custom S.p.A. — Parma',
          points: [
            'InventaOne — gestionale POS in Flutter su 4 piattaforme (Windows, Android, iOS, Linux) da un unico codebase: vendita, sala/tavoli, FatturaPA/SdI e dashboard con interrogazioni di vendita AI (Gemini).',
            'Architettura offline-first: Drift/SQLite con migrazioni versionate, server HTTP locale con TLS e certificate pinning, messaggistica MQTT — il punto cassa lavora anche senza rete.',
            'dartpos — SDK Flutter che integra 4 famiglie di periferiche di cassa (stampanti fiscali/ESC-POS, EFT-POS, cash keeper, display cliente) su un trasporto astratto seriale/Ethernet/USB.',
            'Qualità e rilascio automatizzati: Jenkins + SonarQube, MSIX offuscato, .deb firmato, test end-to-end Appium, logging riutilizzabile con code persistenti e retry.',
          ],
        },
        {
          role: 'Sviluppatore Software',
          company: 'Custom S.p.A. — Parma',
          points: [
            'Sviluppo e manutenzione delle app Android native KeepUp Smart e KeepUp Order (Java, build multi-flavor, ProGuard) per vendita e ristorazione.',
            'Test UI automatici con Espresso integrati in TestRail; ciclo di reporting automatizzato in CI (Jenkins, Silk, notifiche Telegram).',
            'API REST e job CRON in PHP sulla piattaforma cloud aziendale — fatturazione elettronica, telemetria dispositivi, licensing — su MySQL e SQL Server.',
          ],
        },
        {
          role: 'Testing Software & Firmware',
          company: 'Custom S.p.A. — Parma',
          points: [
            'Verifica di integrità e qualità di firmware e software dei dispositivi fiscali; gestione delle release sui portali ufficiali.',
            "Supporto tecnico di 3° livello sui casi critici: dall'analisi delle cause agli interventi correttivi diretti sul codice di prodotto.",
          ],
        },
        {
          role: 'Stage estivo — Laboratorio informatico',
          company: 'Protec S.r.l. — Parma',
          points: ['Supporto allo sviluppo e alla gestione del software di laboratorio.'],
        },
      ],
    },
    projects: {
      heading: 'Progetti personali',
      sub: 'End-to-end: ideati, sviluppati e pubblicati in autonomia —',
      open: '→ open_source(github)',
      items: [
        {
          name: 'FitAI Analyzer',
          sub: '+ garmin-sync-server',
          desc: 'Piattaforma fitness con AI: converte i dati Garmin/Strava in obiettivi giornalieri generati da LLM. Firma OAuth1 HMAC-SHA1 implementata a mano con gestione MFA, sync delta incrementale e strategia dati Firestore a 3 livelli per ridurre i costi dei prompt.',
        },
        {
          name: 'Automazione AI',
          sub: 'contenuti generativi',
          desc: 'Pipeline multi-agente che genera video e contenuti social con approvazione umana prima della pubblicazione: scripting LLM a ruoli specializzati, sintesi vocale, immagini generative e publishing via Meta Graph API.',
        },
        {
          name: 'MisuraPerfetta',
          sub: 'cartamodelli parametrici',
          desc: 'Motore di calcolo parametrico che trasforma le misure corporee in cartamodelli sartoriali, con export/stampa PDF e anteprima 3D. Drift compilato su WebAssembly per il funzionamento full-web.',
        },
      ],
    },
    footer: {
      heading: 'Contatti',
      terminal: {
        whoami: 'cristian.perciun — senior flutter / full-stack developer',
        place: 'luogo',
        placeVal: 'Parma, Italia (+39 339 2570045)',
        cvName: 'Cristian_Perciun_CV_IT.pdf',
        off: '[ OK ] Reached target Power-Off. A presto.',
      },
    },
  },

  en: {
    meta: {
      title: 'Cristian Perciun — Senior Flutter / Full-Stack Developer',
      description: 'Cristian Perciun — Senior Flutter / Full-Stack Developer. POS & fiscal systems, offline-first architectures, AI/LLM integrations.',
    },
    nav: { skills: 'skills', exp: 'experience', projects: 'projects', contact: 'contact' },
    hero: {
      roles: ['Senior Flutter Developer', 'Full-Stack Engineer', 'POS & Fiscal Systems', 'AI / LLM Integrations', 'Offline-First Architectures'],
      blurb: `7+ years at <span class="text-ink">Custom S.p.A.</span> in the POS/fiscal domain. I take products from idea to release — from the fiscal printer's serial driver to the CI/CD pipeline — with <span class="text-ink">offline-first</span> architectures across 6 platforms and <span class="text-ink">AI/LLM</span> integrations.`,
      cta1: '[ VIEW_PROJECTS ]',
      cta2: '[ CONTACT_ME ]',
      stats: ['Years exp', 'Platforms', 'POS peripherals', 'Side projects'],
      hint: 'SWEEP THE PARTICLES · FIND THE HOTSPOTS',
      hintTouch: 'TAP THE HOLOGRAM · FIND THE HOTSPOTS',
      hintPrinting: 'PRINTING…',
      hintDone: 'RECEIPT ISSUED · RT OK',
      shapeLabels: ['POS_TERMINAL', 'CODE', 'FISCAL_EURO', 'AI_CORE'],
      receipt: {
        doc: 'COMMERCIAL DOCUMENT',
        sub: 'of sale or service — Parma, IT',
        total: 'TOTAL EXPERIENCE',
        totalVal: '7+ YEARS',
        platforms: 'PLATFORMS',
        bugs: 'BUGS IN PRODUCTION',
        coffee: 'COFFEE DISCOUNT',
        payment: 'PAYMENT',
        download: '⬇ DOWNLOAD_CV.PDF',
        bye: '*** THANK YOU, COME AGAIN ***',
      },
    },
    skills: {
      heading: 'Skills',
      cells: {
        mobile: { title: 'Mobile & Cross-Platform', desc: 'One codebase, 6 platforms: Android, iOS, Web/PWA, Windows, Linux, macOS.' },
        ai: { title: 'AI / LLM', desc: 'Multi-provider abstraction layer, prompt engineering, multi-agent orchestration, TTS and generative media.' },
        fiscal: { title: 'Fiscal & POS Hardware', desc: 'From the serial protocol to Italian regulatory compliance.' },
        backend: { title: 'Backend & Databases', desc: '' },
        devops: { title: 'DevOps & Testing', desc: 'End-to-end CI/CD: signed builds, quality gates, automated tests.' },
        security: { title: 'Security & OAuth', desc: '' },
      },
    },
    timeline: {
      heading: 'Experience',
      jobs: [
        {
          role: 'Software Developer · Mobile & Desktop',
          company: 'Custom S.p.A. — Parma, Italy',
          points: [
            'InventaOne — a Flutter POS management system shipped on 4 platforms (Windows, Android, iOS, Linux) from a single codebase: sales, table/dining-room management, FatturaPA/SdI e-invoicing and an AI-powered sales-query dashboard (Gemini).',
            'Offline-first architecture: Drift/SQLite with versioned migrations, local HTTP server with TLS and certificate pinning, MQTT messaging — checkout stations stay fully operational without connectivity.',
            'dartpos — a Flutter SDK integrating 4 families of point-of-sale peripherals (fiscal/ESC-POS printers, EFT-POS terminals, cash keepers, customer displays) over an abstracted serial/Ethernet/USB transport layer.',
            'Automated quality and release: Jenkins + SonarQube, obfuscated MSIX, signed .deb, Appium end-to-end tests, reusable logging package with persistent send queues and retry.',
          ],
        },
        {
          role: 'Software Developer',
          company: 'Custom S.p.A. — Parma, Italy',
          points: [
            'Developed and maintained the KeepUp Smart and KeepUp Order native Android apps (Java, multi-flavor builds, ProGuard) for sales and hospitality.',
            'Automated UI tests with Espresso integrated into TestRail; automated the CI reporting cycle (Jenkins, Silk, Telegram notifications).',
            'REST APIs and CRON jobs in PHP on the company cloud platform — e-invoicing, device telemetry, licensing — on MySQL and SQL Server.',
          ],
        },
        {
          role: 'Software & Firmware Testing',
          company: 'Custom S.p.A. — Parma, Italy',
          points: [
            'Verified integrity and quality of fiscal-device firmware and software; managed release publication on official portals.',
            'Provided 3rd-level technical support on critical cases, from root-cause analysis to direct corrective fixes to product code.',
          ],
        },
        {
          role: 'Summer internship — IT laboratory',
          company: 'Protec S.r.l. — Parma, Italy',
          points: ['Supported lab software development and management.'],
        },
      ],
    },
    projects: {
      heading: 'Personal projects',
      sub: 'End-to-end projects designed, built and shipped independently —',
      open: '→ open_source(github)',
      items: [
        {
          name: 'FitAI Analyzer',
          sub: '+ garmin-sync-server',
          desc: 'AI-powered fitness platform: turns Garmin/Strava data into LLM-generated daily goals. Hand-implemented OAuth1 HMAC-SHA1 signing with MFA handling, incremental delta sync and a 3-tier Firestore data strategy to cut AI prompt costs.',
        },
        {
          name: 'AI Automation',
          sub: 'generative content',
          desc: 'Multi-agent pipeline generating videos and social content with human approval before publishing: role-based LLM scripting, text-to-speech, generative images and publishing via Meta Graph API.',
        },
        {
          name: 'MisuraPerfetta',
          sub: 'parametric tailoring patterns',
          desc: 'Parametric computation engine turning body measurements into sewing patterns, with PDF export/printing and 3D preview. Drift compiled to WebAssembly for full-web operation.',
        },
      ],
    },
    footer: {
      heading: 'Contact',
      terminal: {
        whoami: 'cristian.perciun — senior flutter / full-stack developer',
        place: 'where',
        placeVal: 'Parma, Italy (+39 339 2570045)',
        cvName: 'Cristian_Perciun_CV_EN.pdf',
        off: '[ OK ] Reached target Power-Off. See you soon.',
      },
    },
  },

  ro: {
    meta: {
      title: 'Cristian Perciun — Senior Flutter / Full-Stack Developer',
      description: 'Cristian Perciun — Senior Flutter / Full-Stack Developer. Sisteme POS și fiscale, arhitecturi offline-first, integrări AI/LLM.',
    },
    nav: { skills: 'skills', exp: 'experiență', projects: 'proiecte', contact: 'contact' },
    hero: {
      roles: ['Senior Flutter Developer', 'Inginer Full-Stack', 'Sisteme POS & Fiscale', 'Integrări AI / LLM', 'Arhitecturi Offline-First'],
      blurb: `7+ ani la <span class="text-ink">Custom S.p.A.</span> în domeniul POS/fiscal. Duc un produs de la idee la lansare: de la driverul serial al imprimantei fiscale până la pipeline-ul CI/CD, cu arhitecturi <span class="text-ink">offline-first</span> pe 6 platforme și integrări <span class="text-ink">AI/LLM</span>.`,
      cta1: '[ VEZI_PROIECTE ]',
      cta2: '[ CONTACTEAZĂ-MĂ ]',
      stats: ['Ani exp', 'Platforme', 'Periferice POS', 'Proiecte proprii'],
      hint: 'MĂTURĂ PARTICULELE · GĂSEȘTE HOTSPOT-URILE',
      hintTouch: 'ATINGE HOLOGRAMA · GĂSEȘTE HOTSPOT-URILE',
      hintPrinting: 'SE TIPĂREȘTE…',
      hintDone: 'BON EMIS · RT OK',
      shapeLabels: ['TERMINAL_POS', 'COD', 'EURO_FISCAL', 'AI_CORE'],
      receipt: {
        doc: 'DOCUMENT COMERCIAL',
        sub: 'de vânzare sau prestare — Parma, IT',
        total: 'EXPERIENȚĂ TOTALĂ',
        totalVal: '7+ ANI',
        platforms: 'PLATFORME',
        bugs: 'BUG-URI ÎN PRODUCȚIE',
        coffee: 'REDUCERE CAFEA',
        payment: 'PLATĂ',
        download: '⬇ DESCARCĂ_CV.PDF',
        bye: '*** MULȚUMIM ȘI LA REVEDERE ***',
      },
    },
    skills: {
      heading: 'Competențe',
      cells: {
        mobile: { title: 'Mobile & Cross-Platform', desc: 'Un singur codebase, 6 platforme: Android, iOS, Web/PWA, Windows, Linux, macOS.' },
        ai: { title: 'AI / LLM', desc: 'Layer multi-provider, prompt engineering, orchestrare multi-agent, TTS și media generative.' },
        fiscal: { title: 'Fiscal & Hardware POS', desc: 'De la protocolul serial la conformitatea normativă italiană.' },
        backend: { title: 'Backend & Baze de date', desc: '' },
        devops: { title: 'DevOps & Testare', desc: 'CI/CD end-to-end: build-uri semnate, quality gate, teste automate.' },
        security: { title: 'Securitate & OAuth', desc: '' },
      },
    },
    timeline: {
      heading: 'Experiență',
      jobs: [
        {
          role: 'Software Developer · Mobile & Desktop',
          company: 'Custom S.p.A. — Parma, Italia',
          points: [
            'InventaOne — sistem de gestiune POS în Flutter livrat pe 4 platforme (Windows, Android, iOS, Linux) dintr-un singur codebase: vânzări, gestiunea sălii/meselor, facturare electronică FatturaPA/SdI și dashboard cu interogări de vânzări prin AI (Gemini).',
            'Arhitectură offline-first: Drift/SQLite cu migrări versionate, server HTTP local cu TLS și certificate pinning, mesagerie MQTT — casa de marcat funcționează și fără conexiune.',
            'dartpos — SDK Flutter care integrează 4 familii de periferice de casă (imprimante fiscale/ESC-POS, terminale EFT-POS, cash keeper, display client) peste un transport abstract serial/Ethernet/USB.',
            'Calitate și lansare automatizate: Jenkins + SonarQube, MSIX obfuscat, .deb semnat, teste end-to-end Appium, pachet de logging reutilizabil cu cozi persistente și retry.',
          ],
        },
        {
          role: 'Dezvoltator Software',
          company: 'Custom S.p.A. — Parma, Italia',
          points: [
            'Dezvoltarea și mentenanța aplicațiilor Android native KeepUp Smart și KeepUp Order (Java, build-uri multi-flavor, ProGuard) pentru vânzări și restaurante.',
            'Teste UI automate cu Espresso integrate în TestRail; ciclu de raportare automatizat în CI (Jenkins, Silk, notificări Telegram).',
            'API-uri REST și job-uri CRON în PHP pe platforma cloud a companiei — facturare electronică, telemetrie dispozitive, licențiere — pe MySQL și SQL Server.',
          ],
        },
        {
          role: 'Testare Software & Firmware',
          company: 'Custom S.p.A. — Parma, Italia',
          points: [
            'Verificarea integrității și calității firmware-ului și software-ului dispozitivelor fiscale; gestionarea release-urilor pe portalurile oficiale.',
            'Suport tehnic de nivel 3 pe cazuri critice: de la analiza cauzelor la corecții directe în codul de produs.',
          ],
        },
        {
          role: 'Stagiu de vară — Laborator informatic',
          company: 'Protec S.r.l. — Parma, Italia',
          points: ['Suport pentru dezvoltarea și gestionarea software-ului de laborator.'],
        },
      ],
    },
    projects: {
      heading: 'Proiecte personale',
      sub: 'Proiecte end-to-end concepute, dezvoltate și publicate independent —',
      open: '→ open_source(github)',
      items: [
        {
          name: 'FitAI Analyzer',
          sub: '+ garmin-sync-server',
          desc: 'Platformă de fitness cu AI: transformă datele Garmin/Strava în obiective zilnice generate de LLM. Semnătură OAuth1 HMAC-SHA1 implementată manual cu gestionare MFA, sincronizare delta incrementală și strategie de date Firestore pe 3 niveluri pentru a reduce costurile prompturilor.',
        },
        {
          name: 'Automatizare AI',
          sub: 'conținut generativ',
          desc: 'Pipeline multi-agent care generează video și conținut social cu aprobare umană înainte de publicare: scripting LLM pe roluri specializate, sinteză vocală, imagini generative și publicare prin Meta Graph API.',
        },
        {
          name: 'MisuraPerfetta',
          sub: 'tipare de croitorie parametrice',
          desc: 'Motor de calcul parametric care transformă măsurile corpului în tipare de croitorie, cu export/tipărire PDF și previzualizare 3D. Drift compilat pe WebAssembly pentru funcționare full-web.',
        },
      ],
    },
    footer: {
      heading: 'Contact',
      terminal: {
        whoami: 'cristian.perciun — senior flutter / full-stack developer',
        place: 'locație',
        placeVal: 'Parma, Italia (+39 339 2570045)',
        cvName: 'Cristian_Perciun_CV_EN.pdf',
        off: '[ OK ] Reached target Power-Off. Pe curând.',
      },
    },
  },
} as const;

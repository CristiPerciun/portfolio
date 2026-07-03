# portfolio

> `$ boot: perciun_os --profile`

Portfolio personale di **Cristian Perciun** — Senior Flutter / Full-Stack Developer, sistemi POS & fiscali, AI/LLM.

Estetica **Vercel-Punk**: sfondo `#030303`, griglia millimetrata blueprint, accenti neon acidi (verde `#a3ff12`, ciano `#00e5ff`, viola `#8b5cf6`), scanline CRT e micro-glitch.

## Feature

- **Hero X-Ray** — una torcia neon segue il mouse e rivela circuiti, code-rain e dati sotto la sagoma di un chip/terminale POS
- **Easter egg** — trova i 3 hotspot con la torcia e il terminale stampa uno *scontrino fiscale cyberpunk* con il download del CV
- **Skill Matrix** — griglia Bento Box interattiva con glow interno per categoria
- **Timeline** — linea verticale luminosa che si accende con lo scroll (GSAP ScrollTrigger)
- **Vetrine olografiche** — card progetti con tilt 3D e glare che seguono il puntatore
- **Footer terminale** — i contatti vengono "stampati" riga per riga come un prompt di sistema

Rispetta `prefers-reduced-motion`: con le animazioni ridotte i contenuti (CV incluso) sono subito accessibili.

## Stack

[Astro](https://astro.build) · [Tailwind CSS v4](https://tailwindcss.com) · [GSAP](https://gsap.com) · Plus Jakarta Sans + JetBrains Mono ([Fontsource](https://fontsource.org))

## Comandi

| Comando           | Azione                                     |
| :---------------- | :----------------------------------------- |
| `npm install`     | Installa le dipendenze                      |
| `npm run dev`     | Dev server su `localhost:4321/portfolio`    |
| `npm run build`   | Build di produzione in `./dist/`            |
| `npm run preview` | Anteprima locale della build                |

## Deploy

Push su `main` → GitHub Actions ([deploy.yml](.github/workflows/deploy.yml)) builda e pubblica su **GitHub Pages**:
`https://cristiperciun.github.io/portfolio`

> Nelle impostazioni del repo: *Settings → Pages → Source: GitHub Actions* (solo la prima volta).

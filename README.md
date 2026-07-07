# portfolio

Portfolio personale di **Cristian Perciun** — Flutter / Full-Stack Developer, sistemi POS & fiscali, AI/LLM.

Sito statico fatto a mano in **HTML/CSS/JS puro** — niente framework, niente tracker. Palette monocromatica warm-grey (crema su scuro), scontrino fiscale animato in hero, card 3D con tilt, grana da pellicola.

## Struttura

| Percorso | Contenuto |
| :-- | :-- |
| `index.html` | 🇮🇹 Italiano (lingua di default) |
| `en/index.html` | 🇬🇧 English |
| `me.png` | Ritratto con sfondo rimosso (rembg) |
| `cv/` | CV in PDF (IT + EN) |

Le due lingue sono collegate dallo switcher **IT · EN** nella nav e dai tag `hreflang`.

## Sviluppo locale

Nessuna build: basta servire la cartella.

```bash
python -m http.server 8000
# → http://localhost:8000/
```

## Deploy

Push su `main` → GitHub Actions ([deploy.yml](.github/workflows/deploy.yml)) pubblica la cartella su **GitHub Pages**:
`https://cristiperciun.github.io/portfolio`

# ODS Police 2026 — CLAUDE.md

Kontext pro AI asistenty pracující na tomto projektu.

## Co je to za projekt

Landing page pro kandidátku ODS v komunálních volbách 2026 v Polici nad Metují.
Volby: 9.–10. října 2026. Volební číslo: 07.

## Tech stack

- **Astro 4** — framework, statický build
- **React 18** — pouze pro interaktivní ostrovy (`client:load`)
- **Tailwind CSS 3** — jako npm balíček, ne CDN
- **TypeScript** — přísný režim (`astro/tsconfigs/strict`)
- `npm run dev` — dev server
- `npm run build` — produkční build do `dist/`
- `npm run preview` — náhled buildu

## Struktura projektu

```
src/
  layouts/
    Base.astro          # HTML shell, Google Fonts, global CSS
  components/
    Navbar.astro        # Sticky nav, active-link via inline vanilla JS scroll listener
    Hero.astro          # Hero sekce + CircleStamp + portrét lídra
    GroupPhoto.astro    # Skupinová fotka týmu
    Priorities.astro    # 6 prioritních karet (data z content.ts)
    Candidates.astro    # 8 kandidátů (data z content.ts)
    QuoteBanner.astro   # Citát lídra
    CityShowcase.astro  # Bento grid fotek města
    NewsEvents.astro    # Aktuality + kalendář akcí
    ProgramAccordion.tsx  # React island — open/close accordion (useState)
    Footer.astro        # Patička s kontaktem
  data/
    content.ts          # Všechna datová konstanty s TypeScript typy
  styles/
    global.css          # Tailwind direktivy + všechny custom třídy
  pages/
    index.astro         # Jediná stránka — skládá komponenty
public/                 # Statické soubory (prázdné)
```

## Design systém

**Barvy:**
- `primary`: `#39D4D8` (tyrkysová)
- `secondary`: `#26A9AE`
- `ink`: `#002D52` (tmavě modrá)
- `paper`: `#FFFFFF`

**Písma (Google Fonts):**
- `Oswald` — nadpisy, třída `.h-display` (700, uppercase, letter-spacing: -0.02em)
- `Inter` — tělo, třída `.label` (600, uppercase, letter-spacing: 0.14em)

**Brutalistický styl:**
- `border-radius: 0 !important` — žádné zaoblené rohy nikde
- Výjimka: `.stamp` třída (kruhová grafická pečeť)
- Tučné 2px border-ink ohraničení všude

**Custom CSS třídy** (v `global.css`):
`.h-display`, `.label`, `.grid-lines`, `.stamp`, `.stamp-spin`, `.portrait-ph`, `.news-ph`, `.nav-link`, `.btn-primary`, `.btn-ghost`, `.ticker-track`

## Datová vrstva

Vše v `src/data/content.ts`. Při změně obsahu (texty, fotky, kandidáti) edituj jen tento soubor.

Exporty:
- `NAV: NavItem[]` — 5 položek navigace
- `PRIORITY_CARDS: PriorityCard[]` — 6 priorit
- `CANDIDATES: Candidate[]` — 8 kandidátů
- `LEADER_PHOTO: string` — URL portrétu lídra
- `PROGRAM_ACCORDION: ProgramChapter[]` — 6 kapitol programu
- `NEWS: NewsItem[]` — 3 aktuality
- `EVENTS: EventItem[]` — 4 akce
- `CITY_PHOTOS: CityPhoto[]` — 4 fotky města

## Konverze JSX → Astro

- `className` → `class`
- `style={{ ... }}` → `style="..."` (inline string)
- `dangerouslySetInnerHTML={{ __html: s }}` → `<Fragment set:html={s} />`
- React island: `<ProgramAccordion client:load />`

## Co bylo záměrně odstraněno

- `Ticker.astro` — jezdící lišta nahoře (odstraněna na žádost)
- `JoinCTA.tsx` — sekce 06 "Přidej se" s formulářem (odstraněna na žádost)

## Původní prototyp

`index.html` — React 18 + Babel standalone + Tailwind CDN SPA. Slouží jako vizuální reference. Nemazat, neupravovat.

export interface NavItem      { id: string; label: string; }
export interface PriorityCard { n: string; t: string; d: string; bg: string; }
export interface Candidate    { n: number; name: string; bio: string; photo: ImageMetadata | null; }
export interface ProgramChapter { n: string; t: string; bg: string; body: string[]; }
export interface NewsItem     { date: string; tag: string; t: string; }
export interface EventItem    { d: string; m: string; t: string; loc: string; }
export interface CityPhoto    { src: string; cap: string; meta: string; }

export const NAV: NavItem[] = [
  { id: 'priority',  label: 'Priority' },
  { id: 'kandidati', label: 'Kandidáti' },
  { id: 'program',   label: 'Program' },
];

export const PRIORITY_CARDS: PriorityCard[] = [
  { n:'01', t:'BEZPEČNÉ MĚSTO',      d:'Modernizujeme vybavení městské policie a rozšiřujeme kamerový systém. Připravili jsme pořízení nového technického vozidla pro hasiče s podporou dotačních programů.',                                          bg:'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=900&h=900&fit=crop&q=80' },
  { n:'02', t:'ROZUMNÝ ROZPOČET',    d:'Digitalizujeme úřad a zavádíme nástroje, které zjednodušují komunikaci občanů s městem. Důležité investice projednáváme s občany v rámci participativního plánování.',                                         bg:'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=900&h=900&fit=crop&q=80' },
  { n:'03', t:'DOSTUPNÉ BYDLENÍ',    d:'Připravujeme bytovou výstavbu v lokalitě Ostašská a nabízíme pozemky pro mladé rodiny. Budujeme sportovní a volnočasovou infrastrukturu pro všechny věkové skupiny.',                                          bg:'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=900&h=900&fit=crop&q=80' },
  { n:'04', t:'KULTURA A VZDĚLÁVÁNÍ', d:'Obnovili jsme tradiční akce, připravujeme modernizaci kina a energetické úspory v Kolárově divadle. Školy zapojujeme do kreativního vzdělávání a rozvíjíme spolupráci s kulturními institucemi.',         bg:'https://images.unsplash.com/photo-1543674892-7d64d45df18b?w=900&h=900&fit=crop&q=80' },
  { n:'05', t:'DOPRAVA A PARKOVÁNÍ', d:'Připravili jsme projekty oprav komunikací a chodníků v několika částech města. Pracujeme na bezpečnějším dopravním prostředí a bezpečných cestách do škol.',                                                    bg:'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=900&h=900&fit=crop&q=80' },
  { n:'06', t:'ZELEŇ A KRAJINA',     d:'Vysazujeme zeleň, revitalizujeme parky a připravujeme projekty na zadržování vody v krajině. Budujeme fotovoltaické elektrárny a jsme součástí energetického společenství pro úspory domácnostem i městu.',    bg:'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900&h=900&fit=crop&q=80' },
];

import type { ImageMetadata } from 'astro';
import _skop        from '../assets/skop.jpg';
import _frydrychova from '../assets/frydrychova.jpg';
import _soucek      from '../assets/soucek.jpg';
import _antl        from '../assets/antl.jpg';
import _vlcek       from '../assets/vlcek.jpg';
import _vavra       from '../assets/vavra.jpg';
import _lokvenc     from '../assets/lokvenc.jpg';
import _scholz      from '../assets/scholz.jpg';
import _rutar       from '../assets/rutar.jpg';

export const CANDIDATES: Candidate[] = [
  { n:1,  name:'Mgr. Jiří Škop',           bio:'starosta',                             photo: _skop        },
  { n:2,  name:'Mgr. Martina Frydrychová', bio:'kurátor',                              photo: _frydrychova },
  { n:3,  name:'Mgr. Jaroslav Souček',     bio:'místostarosta',                        photo: _soucek      },
  { n:4,  name:'Jan Antl',                 bio:'ředitel pobočky',                      photo: _antl        },
  { n:5,  name:'Ing. Jiří Vlček',          bio:'výrobní ředitel',                      photo: _vlcek       },
  { n:6,  name:'David Vávra',              bio:'podnikatel',                           photo: _vavra       },
  { n:7,  name:'Mgr. David Hauschke',      bio:'',                                     photo: null         },
  { n:8,  name:'Daniel Denygr',            bio:'učitel, realitní makléř',              photo: null         },
  { n:9,  name:'Ing. Pavel Lokvenc',       bio:'podnikatel',                           photo: _lokvenc     },
  { n:10, name:'Jana Kollertová',          bio:'',                                     photo: null         },
  { n:11, name:'Bc. Nikolas Letzel',       bio:'manažer výzkumu a vývoje / student',   photo: null         },
  { n:12, name:'Ing. Jan Miler',           bio:'projektový manažer',                   photo: null         },
  { n:13, name:'Gabriela Tomášová',        bio:'podnikatelka',                         photo: null         },
  { n:14, name:'Petr Scholz',              bio:'pracující důchodce',                   photo: _scholz      },
  { n:15, name:'Petr Rutar',               bio:'pracovník městského úřadu',            photo: _rutar       },
  { n:16, name:'Josef Martinec',           bio:'',                                     photo: null         },
  { n:17, name:'Milan Hejnyš',             bio:'',                                     photo: null         },
];

import teamPhoto from '../assets/tym.jpg';
export const TEAM_PHOTO = teamPhoto;

export const LEADER_QUOTE = 'Chceme pokračovat v rozvoji Police nad Metují jako moderního, bezpečného a živého města pro rodiny, mladé lidi i seniory.';

export const PROGRAM_ACCORDION: ProgramChapter[] = [
  { n:'01', t:'BEZPEČNÉ MĚSTO',     bg:'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1600&h=900&fit=crop&q=80', body:[
    'Zlepšili jsme vybavení městské policie a zavedli moderní software pro efektivnější práci a správu podnětů od občanů.',
    'Postupně rozšiřujeme kamerový systém a připravujeme opatření pro zvýšení bezpečnosti chodců i dopravy.',
    'Připravili jsme pořízení nového technického vozidla pro hasiče s využitím dostupných dotačních programů.',
  ]},
  { n:'02', t:'ROZUMNÝ ROZPOČET',   bg:'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=1600&h=900&fit=crop&q=80', body:[
    'Postupně digitalizujeme fungování městského úřadu — rozvíjíme elektronická podání, projektové řízení a sdílené systémy.',
    'Důležité investice projednáváme s občany: participativní plánování proběhlo u Pellyho parku, Bezděkových sadů nebo rekonstrukcí komunikací.',
    'Vybrali jsme městského architekta a připravujeme manuál tvorby města pro sjednocení přístupu k rozvoji Police nad Metují.',
  ]},
  { n:'03', t:'DOSTUPNÉ BYDLENÍ',   bg:'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1600&h=900&fit=crop&q=80', body:[
    'Připravujeme bytovou výstavbu v lokalitě Ostašská a nabízíme stavební pozemky v ulici Větrná pro mladé rodiny.',
    'Budujeme sportovní park na Ostašské, nové školní hřiště a atletickou dráhu. Připravujeme hřiště v Pěkově a Hlavňově a klubovnu v Radešově.',
    'Pracujeme na workoutových prvcích, pumptracku i dětských hřištích dostupných pro celé město.',
  ]},
  { n:'04', t:'KULTURA A VZDĚLÁVÁNÍ',bg:'https://images.unsplash.com/photo-1543674892-7d64d45df18b?w=1600&h=900&fit=crop&q=80', body:[
    'Podpořili jsme vznik nových kulturních akcí a obnovili tradiční události — masopust, čarodějnice, drakiáda. Pracujeme na jednotné propagaci kulturního dění ve městě.',
    'Připravili jsme technická řešení pro modernizaci kina a energetické úspory v Kolárově divadle — projekty čekají na vhodné dotační možnosti.',
    'Základní škola se zapojila do projektů kreativního vzdělávání z Národního plánu obnovy. Podporujeme spolupráci škol s kulturními institucemi a rozvoj tvořivosti dětí.',
  ]},
  { n:'05', t:'DOPRAVA A PARKOVÁNÍ',bg:'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=1600&h=900&fit=crop&q=80', body:[
    'Připravili jsme projekty oprav komunikací v několika částech města a pokračujeme v přípravě nových chodníků.',
    'Pracujeme na bezpečnějším dopravním prostředí a bezpečných cestách do škol pro děti i chodce.',
    'Připravujeme opatření pro zklidnění dopravy a lepší organizaci parkování v centru i na sídlišti.',
  ]},
  { n:'06', t:'ZELEŇ A KRAJINA',    bg:'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1600&h=900&fit=crop&q=80', body:[
    'Pokračujeme ve výsadbách zeleně, revitalizaci parků a přípravě projektů na zadržování dešťové vody v krajině.',
    'Připravujeme fotovoltaické elektrárny na městských budovách a projekty snižující energetickou náročnost veřejných objektů.',
    'Přidali jsme se do energetického společenství pro efektivnější využívání vyrobené energie — do budoucna přinese úspory domácnostem i firmám.',
  ]},
];

export const NEWS: NewsItem[] = [
  { date:'12. 05. 2026', tag:'TISKOVÁ ZPRÁVA', t:'[NÁZEV ČLÁNKU — krátký a úderný titulek na dva řádky.]' },
  { date:'06. 05. 2026', tag:'KOMENTÁŘ',       t:'[NÁZEV ČLÁNKU — k aktuálnímu dění v zastupitelstvu.]' },
  { date:'28. 04. 2026', tag:'ROZHOVOR',       t:'[NÁZEV ČLÁNKU — rozhovor s lídrem kandidátky pro místní deník.]' },
];

export const EVENTS: EventItem[] = [
  { d:'22', m:'KVĚ', t:'[DEBATA S OBČANY]',         loc:'[NÁMĚSTÍ — 18:00]' },
  { d:'04', m:'ČER', t:'[OBCHŮZKA SÍDLIŠTĚ]',       loc:'[SÍDLIŠTĚ SEVER — 17:00]' },
  { d:'15', m:'ČER', t:'[KAFE SE STAROSTOU]',        loc:'[KAVÁRNA U RADNICE — 9:00]' },
  { d:'28', m:'ČER', t:'[OTEVŘENÉ ZASTUPITELSTVO]',  loc:'[RADNICE — 17:30]' },
];

export const CITY_PHOTOS: CityPhoto[] = [
  { src:'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1400&h=1100&fit=crop&q=85', cap:'[NÁMĚSTÍ]', meta:'[CENTRUM]' },
  { src:'https://images.unsplash.com/photo-1543674892-7d64d45df18b?w=900&h=600&fit=crop&q=85',     cap:'[KLÁŠTER]', meta:'[PAMÁTKA]' },
  { src:'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900&h=600&fit=crop&q=85',  cap:'[METUJE]',  meta:'[KRAJINA]' },
  { src:'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=900&h=600&fit=crop&q=85',  cap:'[PARK]',    meta:'[ZELEŇ]' },
];

// ─── Texty sekcí ────────────────────────────────────────────────────────────

export const HERO_HEADLINE_HTML = 'ODS A NEZÁVISLÍ<br/>POLICE 2026';
export const HERO_SUBTITLE      = 'Jsme tým lidí, kteří chtějí rozvíjet Police nad Metují s rozvahou, zkušeností a respektem k tomu, co ve městě funguje. Opíráme se o konkrétní výsledky, otevřenou komunikaci a dlouhodobou práci pro město.';

export const PRIORITIES_INTRO   = '[Krátké shrnutí — jednou větou o čem jsou priority a proč zrovna tyhle.]';

export const CANDIDATES_INTRO   = 'Jsme tým lidí, kteří chtějí rozvíjet Police nad Metují s rozvahou, zkušeností a respektem k tomu, co ve městě funguje. Opíráme se o konkrétní výsledky, otevřenou komunikaci a dlouhodobou práci pro město.';

export const CITY_INTRO         = '[Krátký, osobní odstavec o vztahu k městu. Proč zrovna Police, co je nám tady cenné, co chceme zachovat — a co změnit.]';
export const CITY_POPULATION    = '[X XXX OBYVATEL]';

export interface VisionCard { t: string; d: string; }
export const VISION_CARDS: VisionCard[] = [
  { t:'MĚSTO, KTERÉ FUNGUJE', d:'Chceme pokračovat v modernizaci úřadu, zjednodušování komunikace s občany a transparentním rozhodování.' },
  { t:'MĚSTO PRO ŽIVOT',      d:'Budeme dál investovat do bydlení, školství, sportu, kultury i veřejného prostoru tak, aby Police nad Metují byla dobrým místem pro život všech generací.' },
  { t:'ODPOVĚDNÝ ROZVOJ',     d:'Budeme pokračovat v projektech energetických úspor, komunitní energetiky a opatřeních, která pomohou městu zvládat budoucí výzvy.' },
];

export const FOOTER_ABOUT       = '[Krátký popis sdružení a kampaně. Dvě věty o tom, kdo jsme a o co usilujeme v komunálních volbách 2026.]';
export const CONTACT_ADDRESS    = '[Náměstí 1, 549 54 Police]';
export const CONTACT_EMAIL      = '[info@odspolice2026.cz]';
export const CONTACT_PHONE      = '[+420 000 000 000]';
export const CONTACT_ACCOUNT    = '[123 456 789 / 0100]';

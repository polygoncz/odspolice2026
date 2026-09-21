import type { ImageMetadata } from 'astro';

export interface NavItem        { id: string; label: string; }
export interface PriorityCard   { n: string; t: string; d: string; bg: ImageMetadata; alt: string; }
export interface Candidate      { n: number; name: string; bio: string; photo: ImageMetadata; }
export interface ProgramChapter { n: string; t: string; bg: ImageMetadata; body: string[]; }
export interface PhotoCredit    { what: string; author: string; license: string; licenseUrl: string; sourceUrl: string; }
export interface NewsItem       { date: string; tag: string; t: string; }
export interface EventItem      { d: string; m: string; t: string; loc: string; }
export interface CityPhoto      { src: string; cap: string; meta: string; }
export interface VisionCard     { t: string; d: string; }

export const NAV: NavItem[] = [
  { id: 'priority',  label: 'Priority' },
  { id: 'kandidati', label: 'Kandidáti' },
  { id: 'program',   label: 'Program' },
];

// ─── Program ────────────────────────────────────────────────────────────────
// Šest kapitol navazujících na předešlý program. Každá kapitola má anotaci
// (dlaždice v sekci Priority) a tři opatření (rozbalený řádek v sekci Program).

// Fotky města z Wikimedia Commons (volné licence CC, vyžadují uvedení autora).
// V dlaždicích jsou barevně upravené — proto „upraveno" v PHOTO_CREDITS.
import _bg_urad        from '../assets/mesto/urad.jpg';
import _bg_kultura     from '../assets/mesto/kultura.jpg';
import _bg_investice   from '../assets/mesto/investice.jpg';
import _bg_prostredi   from '../assets/mesto/prostredi.jpg';
import _bg_bezpecnost  from '../assets/mesto/bezpecnost.jpg';
import _bg_socialni    from '../assets/mesto/socialni.jpg';

const CHAPTER_BG = {
  urad:        _bg_urad,
  kultura:     _bg_kultura,
  investice:   _bg_investice,
  prostredi:   _bg_prostredi,
  bezpecnost:  _bg_bezpecnost,
  socialni:    _bg_socialni,
} as const;

export const PHOTO_CREDITS: PhotoCredit[] = [
  { what:"Radnice na Masarykově náměstí", author:"Draceane", license:"CC BY-SA 4.0", licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0", sourceUrl:"https://commons.wikimedia.org/wiki/File%3APolice_nad_Metuj%C3%AD%2C_n%C3%A1m%C4%9Bst%C3%AD%2C_radnice.jpg" },
  { what:"Klášter", author:"MMN1879", license:"CC BY-SA 4.0", licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0", sourceUrl:"https://commons.wikimedia.org/wiki/File%3A07_001_Police_nad_Metuji_muzeum_v_klastere.jpg" },
  { what:"Pohled na město od Žďáru", author:"Petr1888", license:"CC BY-SA 4.0", licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0", sourceUrl:"https://commons.wikimedia.org/wiki/File%3APohled_na_Polici_nad_Metuj%C3%AD_z_vyhl%C3%ADdky_u_silnice_do_%C5%BD%C4%8F%C3%A1ru.jpg" },
  { what:"Rybník Hony", author:"Dezidor", license:"CC BY 3.0", licenseUrl:"https://creativecommons.org/licenses/by/3.0", sourceUrl:"https://commons.wikimedia.org/wiki/File%3ARybn%C3%ADk_Hony%2C_Police_nad_Metuj%C3%AD.jpg" },
  { what:"Masarykovo náměstí", author:"Petr1888", license:"CC BY-SA 4.0", licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0", sourceUrl:"https://commons.wikimedia.org/wiki/File%3APolice_nad_Metuj%C3%AD_-_Masarykovo_n%C3%A1m%C4%9Bst%C3%AD_01.jpg" },
  { what:"Domov seniorů", author:"Petr1888", license:"CC BY-SA 4.0", licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0", sourceUrl:"https://commons.wikimedia.org/wiki/File%3ADomov_senior%C5%AF_v_Polici_nad_Metuj%C3%AD.jpg" },
];

export const PRIORITY_CARDS: PriorityCard[] = [
  { n:'01', t:'MĚSTSKÝ ÚŘAD A KOMUNIKACE', bg: CHAPTER_BG.urad, alt:'Radnice na Masarykově náměstí',
    d:'Dokončíme přeměnu úřadu na moderní a otevřený úřad, který občanům umožní vyřídit většinu služeb online a více je zapojí do rozhodování o budoucnosti města.' },
  { n:'02', t:'KULTURA, SPOLEČENSKÝ ŽIVOT A VZDĚLÁVÁNÍ', bg: CHAPTER_BG.kultura, alt:'Klášter v Polici nad Metují',
    d:'Dále budeme podporovat pestrý kulturní a společenský život, zlepšíme zázemí pro kulturní akce a budeme rozvíjet kvalitní vzdělávání pro děti i mladé lidi.' },
  { n:'03', t:'INVESTICE DO DOSTUPNÉHO BYDLENÍ, SPORTU A INFRASTRUKTURY', bg: CHAPTER_BG.investice, alt:'Pohled na Polici nad Metují od Žďáru',
    d:'Zajistíme realizaci nového dostupného bydlení, zlepšíme stav škol, rozšíříme sportovní zázemí a budeme pokračovat v modernizaci komunikací a veřejné infrastruktury.' },
  { n:'04', t:'ŽIVOTNÍ PROSTŘEDÍ A ENERGETIKA', bg: CHAPTER_BG.prostredi, alt:'Rybník Hony',
    d:'Zavedením energetického managementu snížíme energetickou náročnost města, zlepšíme nakládání s odpady a podpoříme opatření chránící vodu, zeleň a kvalitu veřejného prostoru.' },
  { n:'05', t:'BEZPEČNOST A OCHRANA OBYVATELSTVA', bg: CHAPTER_BG.bezpecnost, alt:'Masarykovo náměstí',
    d:'Posílíme bezpečnost ve městě, doplníme kamerový systém, modernizujeme vybavení městské policie a hasičů a zaměříme se na ochranu veřejného pořádku i majetku.' },
  { n:'06', t:'SOCIÁLNÍ PÉČE A ZDRAVOTNICTVÍ', bg: CHAPTER_BG.socialni, alt:'Domov seniorů v Polici nad Metují',
    d:'Rozšíříme nabídku sociálních služeb a podpoříme seniory i občany, kteří potřebují pomoc nebo dostupné bydlení. Nadále budeme usilovat o zajištění dostupné zdravotní péče.' },
];

export const PROGRAM_ACCORDION: ProgramChapter[] = [
  { n:'01', t:'MĚSTSKÝ ÚŘAD A KOMUNIKACE', bg: CHAPTER_BG.urad, body:[
    'Zavedeme Portál občana pro online vyřizování formulářů, sledování podání, plateb a poplatků i automatická upozornění.',
    'Sjednotíme informační systémy úřadu a zjednodušíme administrativní procesy.',
    'Zapojíme občany do přípravy významných investic a strategických projektů města.',
  ]},
  { n:'02', t:'KULTURA, SPOLEČENSKÝ ŽIVOT A VZDĚLÁVÁNÍ', bg: CHAPTER_BG.kultura, body:[
    'Rozšíříme nabídku kulturních a komunitních akcí, zlepšíme jejich propagaci a představíme novou vizuální identitu města.',
    'Zmodernizujeme kino, zlepšíme technické vybavení Kolárova divadla a snížíme jeho energetickou náročnost.',
    'Naplníme schválené rozvojové koncepce ZŠ a MŠ a podpoříme další rozvoj ZUŠ.',
  ]},
  { n:'03', t:'INVESTICE DO DOSTUPNÉHO BYDLENÍ, SPORTU A INFRASTRUKTURY', bg: CHAPTER_BG.investice, body:[
    'Zahájíme výstavbu bytových domů v ulici Ostašská pro nájemní nebo družstevní bydlení.',
    'Opravíme střechu ZŠ, vyměníme okna školní jídelny, instalujeme fotovoltaiku a upravíme školní zahrady, připravíme projekt tělocvičny v MŠ.',
    'Vybudujeme nová sportoviště v Pěkově a Hlavňově. Opravíme ulice K Drůbežárně, Výhledy, Na Honech, Tomkova, Smetanova a Dvořákova. Zrealizujeme chodník v ulici Bělská.',
  ]},
  { n:'04', t:'ŽIVOTNÍ PROSTŘEDÍ A ENERGETIKA', bg: CHAPTER_BG.prostredi, body:[
    'Zmodernizujeme a zefektivníme odpadové hospodářství zavedením čipování nádob, odpadové karty občana a rozšířením sběrného dvora.',
    'Zavedeme energetický management a rozšíříme využití fotovoltaiky na městských budovách a školách.',
    'Podpoříme zadržování vody v krajině, dokončíme revitalizaci Pellyho parku a připravíme obnovu Bezděkových sadů.',
  ]},
  { n:'05', t:'BEZPEČNOST A OCHRANA OBYVATELSTVA', bg: CHAPTER_BG.bezpecnost, body:[
    'Navýšíme počet strážníků na pět a zajistíme moderní vybavení městské policie včetně kamerového pultu.',
    'Rozšíříme kamerový systém a instalujeme další radary na rizikových úsecích komunikací.',
    'Dokončíme obnovu techniky jednotky dobrovolných hasičů pořízením velitelského a cisternového vozidla.',
  ]},
  { n:'06', t:'SOCIÁLNÍ PÉČE A ZDRAVOTNICTVÍ', bg: CHAPTER_BG.socialni, body:[
    'Budeme nadále aktivně oslovovat mediky a lékaře s cílem zajistit dlouhodobě dostupnou zdravotní péči ve městě, především z hlediska dětského lékaře a zubařů.',
    'Rozšíříme terénní sociální služby a vybudujeme nové sociální byty rekonstrukcí stávajících objektů i v rámci nové bytové výstavby.',
    'Rozšíříme službu Senior taxi a zrekonstruujeme Domov s pečovatelskou službou včetně zateplení a nové vzduchotechniky.',
  ]},
];

// ─── Kandidátka ─────────────────────────────────────────────────────────────

import _01 from '../assets/kandidati/01.jpg';
import _02 from '../assets/kandidati/02.jpg';
import _03 from '../assets/kandidati/03.jpg';
import _04 from '../assets/kandidati/04.jpg';
import _05 from '../assets/kandidati/05.jpg';
import _06 from '../assets/kandidati/06.jpg';
import _07 from '../assets/kandidati/07.jpg';
import _08 from '../assets/kandidati/08.jpg';
import _09 from '../assets/kandidati/09.jpg';
import _10 from '../assets/kandidati/10.jpg';
import _11 from '../assets/kandidati/11.jpg';
import _12 from '../assets/kandidati/12.jpg';
import _13 from '../assets/kandidati/13.jpg';
import _14 from '../assets/kandidati/14.jpg';
import _15 from '../assets/kandidati/15.jpg';
import _16 from '../assets/kandidati/16.jpg';
import _17 from '../assets/kandidati/17.jpg';

// Pořadí a profese podle kandidátní listiny podané pro volby 9.–10. 10. 2026.
export const CANDIDATES: Candidate[] = [
  { n:1,  name:'Mgr. Jiří Škop',           bio:'starosta',                                        photo:_01 },
  { n:2,  name:'Mgr. Martina Frydrychová', bio:'kurátorka galerie / PR manažerka',                photo:_02 },
  { n:3,  name:'Mgr. Jaroslav Souček',     bio:'místostarosta / manažer vzdělávání',              photo:_03 },
  { n:4,  name:'Jan Antl',                 bio:'ředitel pobočky',                                 photo:_04 },
  { n:5,  name:'Ing. Jiří Vlček',          bio:'výrobní ředitel',                                 photo:_05 },
  { n:6,  name:'David Vávra',              bio:'OSVČ',                                            photo:_06 },
  { n:7,  name:'Mgr. David Hauschke',      bio:'projektový manažer',                              photo:_07 },
  { n:8,  name:'Daniel Denygr',            bio:'učitel, realitní makléř',                         photo:_08 },
  { n:9,  name:'Ing. Pavel Lokvenc',       bio:'OSVČ',                                            photo:_09 },
  { n:10, name:'Bc. Nikolas Letzel',       bio:'manažer výzkumu a vývoje / student',              photo:_10 },
  { n:11, name:'Jana Kollertová',          bio:'zubní technik / starostka SDH Velká Ledhuje',     photo:_11 },
  { n:12, name:'Ing. Jan Miler',           bio:'finanční analytik',                               photo:_12 },
  { n:13, name:'Gabriela Tomášová',        bio:'OSVČ',                                            photo:_13 },
  { n:14, name:'Petr Scholz',              bio:'pracující důchodce',                              photo:_14 },
  { n:15, name:'Petr Rutar',               bio:'pracovník městského úřadu',                       photo:_15 },
  { n:16, name:'Josef Martinec',           bio:'obchodní zástupce',                               photo:_16 },
  { n:17, name:'Milan Hejnyš',             bio:'pracovník kvality – svářecí technolog',           photo:_17 },
];

import teamPhoto from '../assets/tym.jpg';
export const TEAM_PHOTO = teamPhoto;

export const LEADER_QUOTE = 'Chceme pokračovat v rozvoji Police jako moderního, bezpečného a živého města pro mladé, rodiny i seniory.';

// ─── Aktuality a akce ───────────────────────────────────────────────────────

export const NEWS: NewsItem[] = [
  { date:'12. 05. 2026', tag:'TISKOVÁ ZPRÁVA', t:'[NÁZEV ČLÁNKU — krátký a úderný titulek na dva řádky.]' },
  { date:'06. 05. 2026', tag:'KOMENTÁŘ',       t:'[NÁZEV ČLÁNKU — k aktuálnímu dění v zastupitelstvu.]' },
  { date:'28. 04. 2026', tag:'ROZHOVOR',       t:'[NÁZEV ČLÁNKU — rozhovor s lídrem kandidátky pro místní deník.]' },
];

export const EVENTS: EventItem[] = [
  { d:'22', m:'KVĚ', t:'[DEBATA S OBČANY]',        loc:'[NÁMĚSTÍ — 18:00]' },
  { d:'04', m:'ČER', t:'[OBCHŮZKA SÍDLIŠTĚ]',      loc:'[SÍDLIŠTĚ SEVER — 17:00]' },
  { d:'15', m:'ČER', t:'[KAFE SE STAROSTOU]',      loc:'[KAVÁRNA U RADNICE — 9:00]' },
  { d:'28', m:'ČER', t:'[OTEVŘENÉ ZASTUPITELSTVO]', loc:'[RADNICE — 17:30]' },
];

export const CITY_PHOTOS: CityPhoto[] = [
  { src:'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1400&h=1100&fit=crop&q=85', cap:'[NÁMĚSTÍ]', meta:'[CENTRUM]' },
  { src:'https://images.unsplash.com/photo-1543674892-7d64d45df18b?w=900&h=600&fit=crop&q=85',     cap:'[KLÁŠTER]', meta:'[PAMÁTKA]' },
  { src:'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900&h=600&fit=crop&q=85',  cap:'[METUJE]',  meta:'[KRAJINA]' },
  { src:'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=900&h=600&fit=crop&q=85',  cap:'[PARK]',    meta:'[ZELEŇ]' },
];

// ─── Texty sekcí ────────────────────────────────────────────────────────────

export const HERO_HEADLINE_HTML = 'ODS A NEZÁVISLÍ<br/>POLICE 2026';
export const HERO_SUBTITLE      = 'Jsme tým lidí, kteří chtějí rozvíjet město s rozvahou, zkušenostmi a respektem k tomu, co ve městě funguje. Opíráme se o konkrétní výsledky, otevřenou komunikaci a dlouhodobou práci pro město.';

export const PRIORITIES_INTRO   = '';
export const PROGRAM_INTRO      = '';

export const CANDIDATES_INTRO   = 'Jsme tým lidí, kteří chtějí rozvíjet město s rozvahou, zkušenostmi a respektem k tomu, co ve městě funguje. Opíráme se o konkrétní výsledky, otevřenou komunikaci a dlouhodobou práci pro město.';

export const CITY_INTRO         = '[Krátký, osobní odstavec o vztahu k městu. Proč zrovna Police, co je nám tady cenné, co chceme zachovat — a co změnit.]';
export const CITY_POPULATION    = '[X XXX OBYVATEL]';

export const VISION_CARDS: VisionCard[] = [
  { t:'MĚSTO, KTERÉ FUNGUJE', d:'Chceme pokračovat v modernizaci úřadu, zjednodušování komunikace s občany a transparentním rozhodování.' },
  { t:'MĚSTO PRO ŽIVOT',      d:'Budeme dál investovat do bydlení, školství, sportu, kultury i veřejného prostoru tak, aby Police byla dobrým místem pro život všech generací.' },
  { t:'ODPOVĚDNÝ ROZVOJ',     d:'Budeme pokračovat v projektech energetických úspor, komunitní energetiky a opatřeních, která pomohou městu zvládat budoucí výzvy.' },
];

// ─── Metadata (vyhledávače, sdílení na sociálních sítích) ───────────────────
// Na webu píšeme „Police", ale lidé vyhledávají „Police nad Metují" — proto
// plný název v popisu a klíčových slovech.
export const SEO = {
  title:       'ODS Police 2026',
  description: 'ODS a nezávislí pro komunální volby 9. a 10. října 2026 v Polici nad Metují. 17 kandidátů v čele se starostou Jiřím Škopem a program pro další rozvoj města.',
  keywords:    'ODS, ODS a nezávislí, Police nad Metují, Velká Ledhuje, komunální volby 2026, volby do zastupitelstva, kandidátka, volební program, Jiří Škop',
  ogImage:     '/og.jpg',
  ogImageAlt:  'Kandidáti ODS a nezávislí Police u kašny na náměstí',
  themeColor:  '#39D4D8',
} as const;

// Povinné označení volebního materiálu (kdo ho objednal a kdo zpracoval).
export const IMPRINT = {
  zadavatel:   'MS ODS Police n. Metují',
  zpracovatel: 'Ing. Pavel Lokvenc',
} as const;

export const SOCIAL = {
  facebook:  'https://www.facebook.com/profile.php?id=61591251286988',
  instagram: 'https://www.instagram.com/ods_police_nad_metuji/',
} as const;

export const FOOTER_ABOUT    = '[Krátký popis sdružení a kampaně. Dvě věty o tom, kdo jsme a o co usilujeme v komunálních volbách 2026.]';
export const CONTACT_ADDRESS = '[Náměstí 1, 549 54 Police]';
export const CONTACT_EMAIL   = '[info@odspolice2026.cz]';
export const CONTACT_PHONE   = '[+420 000 000 000]';
export const CONTACT_ACCOUNT = '[123 456 789 / 0100]';

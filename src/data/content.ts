export interface NavItem      { id: string; label: string; }
export interface PriorityCard { n: string; t: string; d: string; bg: string; }
export interface Candidate    { n: number; name: string; role: string; bio: string; photo: string; }
export interface ProgramChapter { n: string; t: string; bg: string; body: string[]; }
export interface NewsItem     { date: string; tag: string; t: string; }
export interface EventItem    { d: string; m: string; t: string; loc: string; }
export interface CityPhoto    { src: string; cap: string; meta: string; }

export const NAV: NavItem[] = [
  { id: 'program',   label: 'Program' },
  { id: 'kandidati', label: 'Kandidáti' },
  { id: 'aktuality', label: 'Aktuality' },
  { id: 'akce',      label: 'Akce' },
  { id: 'kontakt',   label: 'Kontakt' },
];

export const PRIORITY_CARDS: PriorityCard[] = [
  { n:'01', t:'[BEZPEČNÉ MĚSTO]',      d:'[Krátký popis priority — dvě věty maximum. Co konkrétně chceme udělat a do kdy.]', bg:'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=900&h=900&fit=crop&q=80' },
  { n:'02', t:'[ROZUMNÝ ROZPOČET]',    d:'[Krátký popis priority — dvě věty maximum. Co konkrétně chceme udělat a do kdy.]', bg:'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=900&h=900&fit=crop&q=80' },
  { n:'03', t:'[DOSTUPNÉ BYDLENÍ]',    d:'[Krátký popis priority — dvě věty maximum. Co konkrétně chceme udělat a do kdy.]', bg:'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=900&h=900&fit=crop&q=80' },
  { n:'04', t:'[ŠKOLY A RODINY]',      d:'[Krátký popis priority — dvě věty maximum. Co konkrétně chceme udělat a do kdy.]', bg:'https://images.unsplash.com/photo-1543674892-7d64d45df18b?w=900&h=900&fit=crop&q=80' },
  { n:'05', t:'[DOPRAVA A PARKOVÁNÍ]', d:'[Krátký popis priority — dvě věty maximum. Co konkrétně chceme udělat a do kdy.]', bg:'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=900&h=900&fit=crop&q=80' },
  { n:'06', t:'[ZELEŇ A KRAJINA]',     d:'[Krátký popis priority — dvě věty maximum. Co konkrétně chceme udělat a do kdy.]', bg:'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900&h=900&fit=crop&q=80' },
];

export const CANDIDATES: Candidate[] = [
  { n:1, name:'[JMÉNO KANDIDÁTA]', role:'[LÍDR KANDIDÁTKY]', bio:'[Krátký bio řádek o profesi a vztahu k městu.]', photo:'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=faces&q=80' },
  { n:2, name:'[JMÉNO KANDIDÁTA]', role:'[MÍSTOSTAROSTA]',   bio:'[Krátký bio řádek o profesi a vztahu k městu.]', photo:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop&crop=faces&q=80' },
  { n:3, name:'[JMÉNO KANDIDÁTA]', role:'[ZASTUPITEL]',      bio:'[Krátký bio řádek o profesi a vztahu k městu.]', photo:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=faces&q=80' },
  { n:4, name:'[JMÉNO KANDIDÁTA]', role:'[ZASTUPITEL]',      bio:'[Krátký bio řádek o profesi a vztahu k městu.]', photo:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop&crop=faces&q=80' },
  { n:5, name:'[JMÉNO KANDIDÁTA]', role:'[ZASTUPITEL]',      bio:'[Krátký bio řádek o profesi a vztahu k městu.]', photo:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&crop=faces&q=80' },
  { n:6, name:'[JMÉNO KANDIDÁTA]', role:'[ZASTUPITEL]',      bio:'[Krátký bio řádek o profesi a vztahu k městu.]', photo:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=faces&q=80' },
  { n:7, name:'[JMÉNO KANDIDÁTA]', role:'[ZASTUPITEL]',      bio:'[Krátký bio řádek o profesi a vztahu k městu.]', photo:'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=800&fit=crop&crop=faces&q=80' },
  { n:8, name:'[JMÉNO KANDIDÁTA]', role:'[ZASTUPITEL]',      bio:'[Krátký bio řádek o profesi a vztahu k městu.]', photo:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=faces&q=80' },
];

export const TEAM_PHOTO = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=800&fit=crop&q=85';

export const LEADER_QUOTE = '[VÝRAZNÝ CITÁT LÍDRA — dvě až tři věty o tom, proč kandidujeme a čemu věříme.]';

export const PROGRAM_ACCORDION: ProgramChapter[] = [
  { n:'01', t:'BEZPEČNÉ MĚSTO',     bg:'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1600&h=900&fit=crop&q=80', body:['[Bod programu — co konkrétně uděláme s městskou policií a kamerovým systémem.]','[Bod programu — prevence kriminality, spolupráce s PČR, osvětlení rizikových míst.]','[Bod programu — komunitní programy pro mládež.]'] },
  { n:'02', t:'ROZUMNÝ ROZPOČET',   bg:'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=1600&h=900&fit=crop&q=80', body:['[Bod programu — audit hospodaření a transparentní rozklikávací rozpočet.]','[Bod programu — žádné nové daně a poplatky občanům.]','[Bod programu — efektivní čerpání dotačních titulů.]'] },
  { n:'03', t:'DOSTUPNÉ BYDLENÍ',   bg:'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1600&h=900&fit=crop&q=80', body:['[Bod programu — uvolnění pozemků pro startovací bydlení.]','[Bod programu — rekonstrukce městského bytového fondu.]','[Bod programu — předvídatelné územní plánování.]'] },
  { n:'04', t:'ŠKOLY A RODINY',     bg:'https://images.unsplash.com/photo-1543674892-7d64d45df18b?w=1600&h=900&fit=crop&q=80', body:['[Bod programu — kapacity MŠ a ZŠ.]','[Bod programu — rozšíření kroužků a družin.]','[Bod programu — podpora seniorů a pečujících rodin.]'] },
  { n:'05', t:'DOPRAVA A PARKOVÁNÍ',bg:'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=1600&h=900&fit=crop&q=80', body:['[Bod programu — parkovací zóny v centru.]','[Bod programu — bezpečné cesty do škol.]','[Bod programu — opravy chodníků a komunikací.]'] },
  { n:'06', t:'ZELEŇ A KRAJINA',    bg:'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1600&h=900&fit=crop&q=80', body:['[Bod programu — péče o městskou zeleň a stromořadí.]','[Bod programu — hospodaření s dešťovou vodou.]','[Bod programu — revitalizace nábřeží a parků.]'] },
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

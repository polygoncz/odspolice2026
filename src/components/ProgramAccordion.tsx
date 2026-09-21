import { useEffect, useState } from 'react';

interface Chapter { n: string; t: string; body: string[]; image: string; }

interface Props {
  // Data přichází z index.astro. Kdyby island importoval content.ts, přibalil by
  // metadata všech fotek a Astro by do buildu kopírovalo jejich JPG originály.
  chapters: Chapter[];
  intro?: string;
}

export default function ProgramAccordion({ chapters, intro }: Props) {
  const [open, setOpen] = useState(0);

  // A priority tile links to #program-04 etc. — open that chapter on arrival.
  useEffect(() => {
    const sync = () => {
      const m = window.location.hash.match(/^#program-(\d+)$/);
      if (!m) return;
      const i = chapters.findIndex(row => row.n === m[1]);
      if (i >= 0) setOpen(i);
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  return (
    <section id="program" className="bg-paper border-b-2 border-ink py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-3 bg-primary"></div>
      <div className="absolute top-3 left-0 right-0 h-1 bg-ink"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="max-w-[820px]">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-8 h-[3px] bg-primary"></span>
            <span className="label text-[11px] text-secondary">03 / PROGRAM</span>
          </div>
          <h2 className="h-display text-ink" style={{ fontSize: 'clamp(40px, 6vw, 76px)' }}>CELÝ PROGRAM</h2>
          {intro && <p className="mt-5 text-[16px] leading-[1.55] text-ink/75 max-w-[640px]">{intro}</p>}
        </div>

        <div className="mt-14 border-t-4 border-ink">
          {chapters.map((row, i) => {
            const isOpen = open === i;
            return (
              <div key={i} id={`program-${row.n}`} className="border-b-4 border-ink scroll-mt-[78px]">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className={`w-full flex items-center justify-between py-7 text-left transition-colors duration-100 px-3 group ${isOpen ? 'bg-primary' : 'hover:bg-primary'}`}
                >
                  <div className="flex items-baseline gap-8">
                    <span className={`h-display text-[44px] leading-none ${isOpen ? 'text-ink' : 'text-secondary group-hover:text-ink'}`}>{row.n}</span>
                    <span className="h-display text-ink text-[28px] md:text-[36px] leading-none">{row.t}</span>
                  </div>
                  <div className={`w-12 h-12 border-2 border-ink flex items-center justify-center ${isOpen ? 'bg-ink text-primary' : 'bg-paper text-ink'} group-hover:bg-ink group-hover:text-primary`}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="8" width="14" height="2" fill="currentColor"/>
                      {!isOpen && <rect x="8" y="2" width="2" height="14" fill="currentColor"/>}
                    </svg>
                  </div>
                </button>
                {isOpen && (
                  <div className="grid lg:grid-cols-12 border-t-2 border-ink">
                    <div className="lg:col-span-4 relative bg-ink border-b-2 lg:border-b-0 lg:border-r-2 border-ink" style={{ aspectRatio: '16 / 10' }}>
                      <img src={row.image} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover"
                           style={{ filter: 'contrast(1.05) saturate(0.95)' }} />
                    </div>
                    <div className="lg:col-span-8 px-3 lg:px-8 pt-8 pb-10 grid md:grid-cols-3 gap-6 content-start">
                      {row.body.map((b, j) => (
                        <div key={j} className="border-l-4 border-primary pl-5">
                          <div className="label text-[10px] text-secondary mb-2">BOD {String(j + 1).padStart(2, '0')}</div>
                          <p className="text-[14px] leading-[1.55] text-ink">{b}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

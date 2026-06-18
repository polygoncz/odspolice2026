import { useState } from 'react';
import { PROGRAM_ACCORDION } from '../data/content';

export default function ProgramAccordion() {
  const [open, setOpen] = useState(0);

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
          <p className="mt-5 text-[16px] leading-[1.55] text-ink/75 max-w-[640px]">[Šest kapitol, konkrétní body. Bez vaty.]</p>
        </div>

        <div className="mt-14 border-t-4 border-ink">
          {PROGRAM_ACCORDION.map((row, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b-4 border-ink">
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
                  <div className="relative bg-paper overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                      <img src={row.bg} alt="" className="absolute inset-0 w-full h-full object-cover"
                           style={{ filter: 'grayscale(1) sepia(0.6) hue-rotate(180deg) saturate(2.8) brightness(0.95)', opacity: 0.22 }} />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.3) 100%)' }}></div>
                    </div>
                    <div className="relative px-3 pt-8 pb-10 grid md:grid-cols-3 gap-6">
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

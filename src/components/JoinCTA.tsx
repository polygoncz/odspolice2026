import { useState } from 'react';

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <div className="label text-[10px] mb-2 text-ink/80">{label}</div>
      <input type="text" placeholder={placeholder}
        className="w-full bg-paper border-2 border-ink px-4 py-3 text-[14px] text-ink placeholder-ink/40 focus:outline-none focus:border-secondary" />
    </label>
  );
}

function TextArea({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <div className="label text-[10px] mb-2 text-ink/80">{label}</div>
      <textarea rows={3} placeholder={placeholder}
        className="w-full bg-paper border-2 border-ink px-4 py-3 text-[14px] text-ink placeholder-ink/40 focus:outline-none focus:border-secondary resize-none" />
    </label>
  );
}

export default function JoinCTA() {
  const [role, setRole] = useState('VOLUNTEER');
  const tabs = [
    { v: 'VOLUNTEER', l: 'DOBROVOLNÍK' },
    { v: 'DONOR',     l: 'DÁRCE' },
    { v: 'MEMBER',    l: 'ČLEN' },
  ];

  return (
    <section className="bg-primary border-b-2 border-ink py-24 relative overflow-hidden">
      <div className="absolute hidden lg:block bg-ink" style={{ right: 0, top: 0, bottom: 0, width: '32%' }}></div>
      <div className="absolute hidden lg:block bg-secondary" style={{ right: '32%', top: 0, bottom: 0, width: 14 }}></div>

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
        {/* Form */}
        <div className="lg:col-span-7 text-ink">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-10 h-[3px] bg-ink"></span>
            <span className="label text-[11px] text-ink/80">06 / PŘIDEJ SE</span>
          </div>
          <h2 className="h-display text-ink" style={{ fontSize: 'clamp(40px, 6vw, 76px)' }}>POMOZTE&nbsp;NÁM<br/>VYHRÁT</h2>
          <p className="mt-5 text-[16px] leading-[1.55] text-ink max-w-[520px]">[Krátká výzva — proč potřebujeme pomoc a co konkrétně dobrovolník dělá. 2–3 věty.]</p>

          <div className="mt-10 flex gap-0 border-2 border-ink">
            {tabs.map((opt, i) => (
              <button key={opt.v} onClick={() => setRole(opt.v)}
                className={`flex-1 label text-[11px] py-3 px-3 ${i < 2 ? 'border-r-2 border-ink' : ''} ${role === opt.v ? 'bg-ink text-primary' : 'bg-paper text-ink hover:bg-ink hover:text-primary'}`}>
                {opt.l}
              </button>
            ))}
          </div>

          <form className="mt-6 space-y-4 max-w-[560px]" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <Input label="JMÉNO" placeholder="[Jméno a příjmení]" />
              <Input label="MĚSTO" placeholder="[Police]" />
            </div>
            <Input label="E-MAIL" placeholder="[vy@email.cz]" />
            <Input label="TELEFON" placeholder="[+420 …]" />
            <TextArea label="ZPRÁVA" placeholder="[Jak konkrétně chcete pomoct?]" />
            <label className="flex items-start gap-3 text-[12px] text-ink">
              <span className="w-5 h-5 border-2 border-ink mt-[2px] flex items-center justify-center bg-paper">
                <span className="w-2 h-2 bg-ink"></span>
              </span>
              <span>Souhlasím se zpracováním osobních údajů pro účely volební kampaně.</span>
            </label>
            <button type="submit" className="bg-ink text-primary hover:bg-paper hover:text-ink border-2 border-ink label text-[12px] px-7 py-4 inline-flex items-center gap-3 transition-colors duration-100">
              Odeslat přihlášku
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2"/></svg>
            </button>
          </form>
        </div>

        {/* Poster */}
        <div className="lg:col-span-5 relative z-10 hidden lg:flex flex-col justify-between">
          <div className="text-paper">
            <div className="label text-[11px] text-primary mb-4">VOLEBNÍ KALENDÁŘ</div>
            <div className="flex items-baseline gap-4">
              <div className="h-display text-primary leading-none" style={{ fontSize: 140 }}>140</div>
              <div className="label text-[11px] text-paper/80 pb-3">DNÍ<br/>DO&nbsp;VOLEB</div>
            </div>
            <div className="mt-4 inline-block bg-primary text-ink px-3 py-2 label text-[11px]">3.–4. ŘÍJNA 2026</div>
          </div>
          <div className="mt-12">
            <div className="h-display text-paper leading-[0.95]" style={{ fontSize: 56 }}>
              TVŮJ HLAS<br/>
              <span className="text-primary">ROZHODNE</span>
            </div>
            <p className="mt-5 text-[14px] leading-[1.6] text-paper/80 max-w-[320px]">
              [Krátký call to action — proč je každý hlas důležitý a co konkrétně rozhodnou tyhle volby.]
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 border-2 border-primary divide-x-2 divide-primary">
            {[{ k:'21', l:'KANDIDÁTŮ' }, { k:'06', l:'PRIORIT' }, { k:'2026', l:'VOLBY' }].map(kpi => (
              <div key={kpi.k} className="p-3 text-paper">
                <div className="h-display text-primary text-[28px] leading-none">{kpi.k}</div>
                <div className="label text-[9px] text-paper/70 mt-2">{kpi.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

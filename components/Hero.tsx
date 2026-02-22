'use client';
import { useLang } from '../lib/LangContext';

export default function Hero() {
  const { t } = useLang();

  const chips = [
    { cls: 'top-[22%] left-[3%] lg:left-[6%]', delay: '1s',   dotColor: '#0AA688', label: null,             labelKey: null,            value: 'PASS',    valueKey: null },
    { cls: 'top-[30%] right-[3%] lg:right-[7%]', delay: '4s', dotColor: '#F59E0B', label: null,             labelKey: 'chip_patients', value: '2,841',   valueKey: null },
    { cls: 'bottom-[30%] left-[3%] lg:left-[8%]', delay: '7s', dotColor: '#0AA688', label: null,            labelKey: 'chip_accuracy', value: '94.8%',   valueKey: null },
    { cls: 'bottom-[22%] right-[3%] lg:right-[9%]', delay: '2.5s', dotColor: '#0AA688', label: 'Uptime',   labelKey: null,            value: '99.9%',   valueKey: null },
    { cls: 'top-[55%] left-[2%] lg:left-[4%]', delay: '9s',   dotColor: '#F59E0B', label: null,             labelKey: 'chip_review',   value: null,      valueKey: 'chip_required' },
  ];

  const stats = [
    { num: '916', labelKey: 'stat_exercises' },
    { num: '14',  labelKey: 'stat_specialties' },
    { num: '2.3<span style="color:#0AA688">×</span>', labelKey: 'stat_faster' },
    { num: '40<span style="color:#0AA688">%</span>',  labelKey: 'stat_readmit' },
  ];

  const trustItems = [
    'HIPAA & GDPR',
    'ISO 27001',
    'trust_doctor',
    'trust_card',
  ];

  return (
    <section id="top" className="relative min-h-screen bg-[#0F172A] flex flex-col items-center justify-center overflow-hidden px-5 pt-24 pb-16 md:px-10 md:pt-28 md:pb-20">

      {/* Фон */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-1 w-[300px] h-[300px] md:w-[600px] md:h-[600px] -top-[10%] -left-[5%]"
          style={{ background: 'radial-gradient(circle, rgba(11,138,114,0.35), transparent 70%)' }} />
        <div className="orb orb-2 w-[250px] h-[250px] md:w-[450px] md:h-[450px] -bottom-[10%] -right-[5%]"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.2), transparent 70%)' }} />
        <div className="orb orb-3 w-[200px] h-[200px] md:w-[350px] md:h-[350px] top-[40%] left-[55%]"
          style={{ background: 'radial-gradient(circle, rgba(11,138,114,0.15), transparent 70%)' }} />

        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent)',
        }} />

        <div className="scan-line" />

        {/* ECG */}
        <div className="absolute bottom-[18%] left-0 right-0 h-[80px] overflow-hidden opacity-[0.12]">
          <div className="absolute top-0 left-[-100%] w-[200%] h-full">
            <svg viewBox="0 0 1400 80" preserveAspectRatio="none" className="w-full h-full">
              <path className="ecg-path" d="M0,40 L80,40 L100,40 L110,10 L120,70 L130,5 L140,75 L150,40 L170,40 L240,40 L260,40 L270,10 L280,70 L290,5 L300,75 L310,40 L330,40 L400,40 L420,40 L430,10 L440,70 L450,5 L460,75 L470,40 L490,40 L560,40 L580,40 L590,10 L600,70 L610,5 L620,75 L630,40 L650,40 L720,40 L740,40 L750,10 L760,70 L770,5 L780,75 L790,40 L810,40 L880,40 L900,40 L910,10 L920,70 L930,5 L940,75 L950,40 L970,40 L1040,40 L1060,40 L1070,10 L1080,70 L1090,5 L1100,75 L1110,40 L1130,40 L1200,40 L1220,40 L1230,10 L1240,70 L1250,5 L1260,75 L1270,40 L1290,40 L1400,40" />
            </svg>
          </div>
        </div>

        {/* Чипы — скрыты на мобайл */}
        <div className="hidden lg:block">
          {chips.map((chip, i) => (
            <div key={i} className={`chip absolute flex items-center gap-2 rounded-[10px] px-3.5 py-2 backdrop-blur-[8px] ${chip.cls}`}
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', animationDelay: chip.delay }}>
              <div className="pulse-dot w-[7px] h-[7px] rounded-full shrink-0"
                style={{ background: chip.dotColor, boxShadow: `0 0 8px ${chip.dotColor}` }} />
              <span className="text-[11px] font-semibold text-white/60 tracking-[0.02em]">
                {chip.labelKey ? t(chip.labelKey) : chip.label}
              </span>
              <strong className="text-[12px] font-bold text-white/90">
                {chip.valueKey ? t(chip.valueKey) : chip.value}
              </strong>
            </div>
          ))}
        </div>
      </div>

      {/* Контент */}
      <div className="relative z-10 text-center max-w-[780px] w-full">
        <h1 className="hero-anim-2 font-serif text-white font-normal leading-[1.1] mb-6 text-[clamp(36px,7vw,72px)]"
          dangerouslySetInnerHTML={{ __html: t('hero_h1') }} />

        <p className="hero-anim-3 text-[15px] md:text-[17px] text-white/50 leading-[1.65] max-w-[540px] mx-auto mb-10">
          {t('hero_sub')}
        </p>

        <div className="hero-anim-4 flex flex-col sm:flex-row gap-3 items-center justify-center">
          <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-[#044D40] text-[14px] font-bold no-underline shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.16)] transition-all duration-200">
            {t('nav_trial')}
          </a>
          <a href="#how" className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 text-white text-[14px] font-semibold no-underline border border-white/25 hover:bg-white/18 transition-all duration-200">
            {t('hero_how')}
          </a>
        </div>

        {/* Trust bar */}
        <div className="hero-anim-5 mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
          {trustItems.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5 text-[11px] md:text-[11.5px] font-medium text-white/30">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="2" className="shrink-0">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {item.startsWith('trust_') ? t(item) : item}
            </span>
          ))}
        </div>
      </div>

      {/* Стат карточки */}
      <div className="hero-anim-6 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 mt-14 w-full max-w-[720px]">
        {stats.map(({ num, labelKey }) => (
          <div key={labelKey} className="rounded-2xl px-4 py-5 text-center backdrop-blur-[12px]"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="font-serif text-white text-[28px] md:text-[34px] leading-none mb-1.5"
              dangerouslySetInnerHTML={{ __html: num }} />
            <div className="text-[11px] text-white/40 leading-[1.4]"
              dangerouslySetInnerHTML={{ __html: t(labelKey) }} />
          </div>
        ))}
      </div>
    </section>
  );
}

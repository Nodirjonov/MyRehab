'use client';
import { useLang } from '../lib/LangContext';

const STATS = [
  { num: '2.3×', tk: 'cta_s1_t', dk: 'cta_s1_d' },
  { num: '40%',  tk: 'cta_s2_t', dk: 'cta_s2_d' },
  { num: '499',  tk: 'cta_s3_t', dk: 'cta_s3_d' },
];

export default function CTA() {
  const { t } = useLang();

  return (
    <div className="bg-[#0F172A]">
      <div className="max-w-[1200px] mx-auto px-5 py-16 md:px-10 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[80px] items-center">

        <div className="reveal">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-[#5EEAD4] mb-3.5 before:content-[''] before:w-5 before:h-[1.5px] before:bg-[#5EEAD4] before:inline-block">
            {t('cta_label')}
          </span>
          <h2 className="font-serif text-white font-normal leading-[1.1] mb-4 text-[clamp(26px,4vw,46px)]"
            dangerouslySetInnerHTML={{ __html: t('cta_h2') }} />
          <p className="text-[15px] md:text-[16px] text-white/40 leading-[1.65] max-w-[520px] mb-8">{t('cta_sub')}</p>

          <div className="flex flex-col gap-2.5 w-full max-w-[300px]">
            <a href="#" className="block text-center py-4 rounded-[12px] text-[14px] font-semibold no-underline bg-[#0B8A72] text-white hover:bg-[#0AA688] transition-colors duration-200">
              {t('nav_trial')}
            </a>
            <a href="#" className="block text-center py-4 rounded-[12px] text-[14px] font-semibold no-underline bg-white/[0.06] text-white/70 border border-white/10 hover:bg-white/10 transition-colors duration-200">
              {t('cta_demo')}
            </a>
            <div className="text-[11px] text-white/25 text-center">{t('cta_fine')}</div>
          </div>
        </div>

        <div className="reveal flex flex-col gap-3.5">
          {STATS.map(({ num, tk, dk }) => (
            <div key={tk} className="flex items-center gap-4 rounded-2xl py-5 px-6"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="font-serif text-[34px] md:text-[38px] text-[#0AA688] leading-none shrink-0">{num}</div>
              <div>
                <strong className="block text-[13px] font-semibold text-white mb-0.5">{t(tk)}</strong>
                <span className="text-[11.5px] text-white/30">{t(dk)}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

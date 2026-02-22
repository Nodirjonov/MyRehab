'use client';
import { useLang } from '../lib/LangContext';

const STEPS = [
  { n: '01', tk: 'step1_title', dk: 'step1_desc' },
  { n: '02', tk: 'step2_title', dk: 'step2_desc' },
  { n: '03', tk: 'step3_title', dk: 'step3_desc' },
  { n: '04', tk: 'step4_title', dk: 'step4_desc' },
];

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <div id="how" className="bg-[#0F172A] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-[#5EEAD4] mb-3.5 before:content-[''] before:w-5 before:h-[1.5px] before:bg-[#5EEAD4] before:inline-block">
            {t('how_label')}
          </span>
          <h2 className="font-serif text-white font-normal leading-[1.1] mb-4 text-[clamp(26px,4vw,46px)]"
            dangerouslySetInnerHTML={{ __html: t('how_h2') }} />
          <p className="text-[15px] md:text-[16px] text-white/40 leading-[1.65] max-w-[520px]">{t('how_sub')}</p>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mt-12 md:mt-14 bg-white/[0.06] rounded-[20px] overflow-hidden">
          {STEPS.map(({ n, tk, dk }) => (
            <div key={n} className="p-7 md:p-9 bg-white/[0.02] transition-colors duration-300 hover:bg-[rgba(11,138,114,0.06)] group">
              <div className="font-serif text-[44px] md:text-[52px] text-white/[0.05] leading-none mb-4">{n}</div>
              <div className="w-7 h-0.5 bg-[#0B8A72] mb-4 transition-all duration-300 group-hover:w-11" />
              <div className="text-[13px] md:text-[14px] font-semibold text-white mb-2">{t(tk)}</div>
              <p className="text-[11px] md:text-[12px] text-white/35 leading-[1.65] m-0">{t(dk)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

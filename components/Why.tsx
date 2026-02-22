'use client';
import { useLang } from '../lib/LangContext';

const SOL_ICONS = [
  <svg key="1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>,
  <svg key="2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  <svg key="3" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
];

const PROBLEMS = [
  { n: '01', tk: 'p1_title', dk: 'p1_desc' },
  { n: '02', tk: 'p2_title', dk: 'p2_desc' },
  { n: '03', tk: 'p3_title', dk: 'p3_desc' },
];

const SOLUTIONS = [
  { tk: 'sol1_title', dk: 'sol1_desc' },
  { tk: 'sol2_title', dk: 'sol2_desc' },
  { tk: 'sol3_title', dk: 'sol3_desc' },
];

export default function Why() {
  const { t } = useLang();

  return (
    <div className="bg-[#F3F6FA]">
      <section className="reveal max-w-[1200px] mx-auto px-5 py-16 md:px-10 md:py-24">
        <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-[#0B8A72] mb-3.5 before:content-[''] before:w-5 before:h-[1.5px] before:bg-[#0B8A72] before:inline-block">
          {t('why_label')}
        </span>
        <h2 className="font-serif text-[#0F172A] font-normal leading-[1.1] mb-4 text-[clamp(26px,4vw,46px)]"
          dangerouslySetInnerHTML={{ __html: t('why_h2') }} />
        <p className="text-[15px] md:text-[16px] text-slate-500 leading-[1.65] max-w-[520px]">{t('why_sub')}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[72px] items-start mt-12 md:mt-16">
          {/* Проблемы */}
          <ul className="list-none p-0 m-0">
            {PROBLEMS.map(({ n, tk, dk }, i) => (
              <li key={n} className={`flex gap-4 md:gap-[18px] py-5 border-b border-[#F1F5F9] ${i === 0 ? 'border-t border-[#F1F5F9]' : ''}`}>
                <span className="font-serif text-[28px] md:text-[36px] text-[#E2E8F0] leading-none shrink-0 w-10 md:w-11">{n}</span>
                <div>
                  <strong className="block text-[13px] md:text-[14px] font-semibold mb-1.5">{t(tk)}</strong>
                  <p className="text-[12px] md:text-[13px] text-slate-500 leading-[1.55] m-0">{t(dk)}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Решения */}
          <div className="flex flex-col gap-4">
            {SOLUTIONS.map(({ tk, dk }, i) => (
              <div key={tk} className="sol-card relative bg-white border border-[#E2E8F0] rounded-2xl p-5 md:p-6 transition-all duration-200 hover:shadow-[0_8px_32px_rgba(11,138,114,0.1)] hover:translate-x-1 overflow-hidden">
                <div className="w-[38px] h-[38px] rounded-[10px] bg-[rgba(11,138,114,0.08)] flex items-center justify-center text-[#0B8A72] mb-3">
                  {SOL_ICONS[i]}
                </div>
                <h4 className="text-[13px] md:text-[14px] font-bold mb-1.5">{t(tk)}</h4>
                <p className="text-[12px] md:text-[13px] text-slate-500 leading-[1.55] m-0">{t(dk)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

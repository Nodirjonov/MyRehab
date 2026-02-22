'use client';
import { useLang } from '../lib/LangContext';

const PIPE_ICONS = [
  <svg key="1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  <svg key="2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  <svg key="3" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
  <svg key="4" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  <svg key="5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  <svg key="6" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
];
const PIPE_ACTIVE = [false, true, false, true, true, false];

const SP_ICONS = [
  <svg key="1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B8A72" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  <svg key="2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B8A72" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  <svg key="3" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B8A72" strokeWidth="2" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  <svg key="4" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B8A72" strokeWidth="2" strokeLinecap="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
];

const PIPES = ['pipe1_t','pipe2_t','pipe3_t','pipe4_t','pipe5_t','pipe6_t'];
const PIPE_D = ['pipe1_d','pipe2_d','pipe3_d','pipe4_d','pipe5_d','pipe6_d'];
const SPS    = ['sp1_t','sp2_t','sp3_t','sp4_t'];
const SP_D   = ['sp1_d','sp2_d','sp3_d','sp4_d'];

export default function Safety() {
  const { t } = useLang();

  return (
    <div id="safety" className="bg-[rgba(11,138,114,0.04)] border-y border-[rgba(11,138,114,0.1)] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-[#0B8A72] mb-3.5 before:content-[''] before:w-5 before:h-[1.5px] before:bg-[#0B8A72] before:inline-block">
            {t('safe_label')}
          </span>
          <h2 className="font-serif text-[#0F172A] font-normal leading-[1.1] mb-4 text-[clamp(26px,4vw,46px)]"
            dangerouslySetInnerHTML={{ __html: t('safe_h2') }} />
          <p className="text-[15px] md:text-[16px] text-slate-500 leading-[1.65] max-w-[520px]">{t('safe_sub')}</p>
        </div>

        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[80px] items-start mt-12 md:mt-16">
          {/* Пайплайн */}
          <div className="flex flex-col">
            {PIPES.map((tk, i) => (
              <div key={i} className={`flex gap-4 relative ${i < PIPES.length - 1 ? 'pb-6' : ''}`}>
                {i < PIPES.length - 1 && (
                  <div className="absolute left-[17px] top-9 w-0.5 h-[calc(100%-14px)]"
                    style={{ background: 'linear-gradient(to bottom, rgba(11,138,114,0.3), rgba(11,138,114,0.05))' }} />
                )}
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm shrink-0 z-10 ${PIPE_ACTIVE[i] ? 'bg-[#0B8A72] border-2 border-[#0B8A72] shadow-[0_0_0_6px_rgba(11,138,114,0.1)]' : 'bg-white border-2 border-[#E2E8F0]'}`}>
                  {PIPE_ICONS[i]}
                </div>
                <div className="pt-1">
                  <strong className="block text-[13px] font-semibold mb-0.5">{t(tk)}</strong>
                  <span className="text-[12px] text-slate-500 leading-[1.5]">{t(PIPE_D[i])}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Пункты безопасности */}
          <ul className="list-none m-0 p-0 flex flex-col">
            {SPS.map((tk, i) => (
              <li key={i} className={`flex items-start gap-3.5 py-5 border-b border-[#F1F5F9] ${i === 0 ? 'border-t border-[#F1F5F9]' : ''}`}>
                <span className="shrink-0 mt-0.5">{SP_ICONS[i]}</span>
                <div>
                  <strong className="block text-[13px] font-semibold mb-1">{t(tk)}</strong>
                  <span className="text-[12px] text-slate-500 leading-[1.55]">{t(SP_D[i])}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

'use client';
import { useState } from 'react';
import { useLang } from '../lib/LangContext';

const ICONS = [
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M12 6v6l4 2"/><path d="M8 12c0-2.2 1.8-4 4-4"/></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
];

const GROUPS = [
  { id: 'sg1', nk: 'sg1_name', dk: 'sg1_desc', ck: 'sg1_count', subs: [{nk:'s_stroke',dk:'s_stroke_d'},{nk:'s_tbi',dk:'s_tbi_d'},{nk:'s_neuro',dk:'s_neuro_d'},{nk:'s_spinal',dk:'s_spinal_d'}] },
  { id: 'sg2', nk: 'sg2_name', dk: 'sg2_desc', ck: 'sg2_count', subs: [{nk:'s_cardiac',dk:'s_cardiac_d'},{nk:'s_pulm',dk:'s_pulm_d'},{nk:'s_onco',dk:'s_onco_d'},{nk:'s_burn',dk:'s_burn_d'}] },
  { id: 'sg3', nk: 'sg3_name', dk: 'sg3_desc', ck: 'sg3_count', subs: [{nk:'s_ortho',dk:'s_ortho_d'},{nk:'s_sports',dk:'s_sports_d'},{nk:'s_msk',dk:'s_msk_d'},{nk:'s_post',dk:'s_post_d'},{nk:'s_geri',dk:'s_geri_d'},{nk:'s_ped',dk:'s_ped_d'}] },
];

export default function Specialties() {
  const { t } = useLang();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div id="specialties" className="bg-[#F3F6FA]">
      <div className="max-w-[1200px] mx-auto px-5 py-16 md:px-10 md:py-24">

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px] items-end mb-10 md:mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-[#0B8A72] mb-3.5 before:content-[''] before:w-5 before:h-[1.5px] before:bg-[#0B8A72] before:inline-block">
              {t('spec_label')}
            </span>
            <h2 className="font-serif text-[#0F172A] font-normal leading-[1.1] mb-2 text-[clamp(26px,4vw,46px)]"
              dangerouslySetInnerHTML={{ __html: t('spec_h2') }} />
          </div>
          <p className="text-[15px] md:text-[16px] text-slate-500 leading-[1.65]">{t('spec_sub')}</p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GROUPS.map(({ id, nk, dk, ck, subs }, gi) => {
            const isOpen = open === id;
            return (
              <div key={id} className="bg-white border border-[#E2E8F0] rounded-[18px] overflow-hidden hover:shadow-[0_8px_30px_rgba(11,138,114,0.09)] transition-shadow duration-300">
                <div className="p-6">
                  <div className="w-11 h-11 rounded-[12px] bg-[rgba(11,138,114,0.08)] flex items-center justify-center text-[#0B8A72] mb-4">
                    {ICONS[gi]}
                  </div>
                  <div className="text-[15px] font-bold mb-1.5">{t(nk)}</div>
                  <p className="text-[12.5px] text-slate-500 leading-[1.5] m-0">{t(dk)}</p>
                </div>

                <div className="flex items-center justify-between px-6 py-3 border-t border-[#F1F5F9]">
                  <span className="text-[11px] font-semibold text-slate-500 tracking-[0.04em] uppercase">{t(ck)}</span>
                  <button onClick={() => setOpen(isOpen ? null : id)}
                    className="flex items-center gap-1.5 text-[11px] font-semibold text-[#0B8A72] bg-[rgba(11,138,114,0.07)] border-none rounded-full px-3 py-1.5 cursor-pointer hover:bg-[rgba(11,138,114,0.13)] transition-colors duration-200">
                    {t('view_all')}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                </div>

                <div className="overflow-hidden transition-all duration-[400ms]" style={{ maxHeight: isOpen ? 500 : 0 }}>
                  <div className="px-6 pb-5 border-t border-[#F1F5F9]">
                    <ul className="list-none m-0 p-0 mt-3">
                      {subs.map(({ nk: snk, dk: sdk }, si) => (
                        <li key={si} className={`flex items-start gap-2.5 py-2.5 ${si < subs.length - 1 ? 'border-b border-[#F1F5F9]' : ''}`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0B8A72] shrink-0 mt-[5px]" />
                          <div>
                            <div className="text-[12.5px] font-semibold leading-[1.3] mb-0.5">{t(snk)}</div>
                            <div className="text-[11px] text-slate-500 leading-[1.45]">{t(sdk)}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

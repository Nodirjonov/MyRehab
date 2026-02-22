'use client';
import { useLang } from '../lib/LangContext';

export default function Voices() {
  const { t } = useLang();

  return (
    <div className="bg-white border-t border-[#F1F5F9]">
      <section className="reveal max-w-[1200px] mx-auto px-5 py-16 md:px-10 md:py-24">
        <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-[#0B8A72] mb-3.5 before:content-[''] before:w-5 before:h-[1.5px] before:bg-[#0B8A72] before:inline-block">
          {t('voice_label')}
        </span>
        <h2 className="font-serif text-[#0F172A] font-normal leading-[1.1] mb-10 md:mb-14 text-[clamp(26px,4vw,46px)]"
          dangerouslySetInnerHTML={{ __html: t('voice_h2') }} />

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_3fr_3fr] gap-4">
          {/* Большая карточка */}
          <div className="bg-[#044D40] rounded-[20px] p-7 md:p-10 relative overflow-hidden">
            <div className="font-serif text-[120px] md:text-[200px] text-white/[0.04] absolute -top-8 left-4 leading-none pointer-events-none select-none">"</div>
            <div className="absolute top-5 right-5 md:top-7 md:right-7 bg-[#0B8A72] text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
              {t('v1_outcome')}
            </div>
            <div className="inline-flex items-center gap-1.5 bg-[rgba(11,138,114,0.3)] border border-[rgba(11,138,114,0.4)] rounded-full px-3 py-1 text-[11px] font-semibold text-[#5EEAD4] mb-5">
              <div className="pulse-dot w-1.5 h-1.5 rounded-full bg-[#5EEAD4]" />
              {t('v1_tag')}
            </div>
            <p className="font-serif text-[16px] md:text-[20px] italic text-white/88 leading-[1.5] mb-7">{t('v1_quote')}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-[42px] md:h-[42px] rounded-[12px] bg-white/10 grid place-items-center font-serif text-[15px] font-bold text-white/70 shrink-0">А</div>
              <div>
                <div className="text-[13px] font-semibold text-white">Alexei R.</div>
                <div className="text-[11px] text-white/35 mt-0.5">{t('v1_detail')}</div>
              </div>
            </div>
          </div>

          {/* Маленькие карточки */}
          {[
            { qk: 'v2_quote', dk: 'v2_detail', name: 'Dr. Kamila N.', letter: 'К' },
            { qk: 'v3_quote', dk: 'v3_detail', name: 'Farida T.',     letter: 'Ф' },
          ].map(({ qk, dk, name, letter }) => (
            <div key={name} className="bg-white border border-[#E2E8F0] rounded-[20px] p-6 md:p-7 flex flex-col">
              <div className="font-serif text-[36px] text-[#E2E8F0] leading-none mb-3">"</div>
              <p className="font-serif text-[14px] md:text-[15px] italic text-[#334155] leading-[1.55] mb-5 flex-1">{t(qk)}</p>
              <div className="flex items-center gap-3">
                <div className="w-[38px] h-[38px] rounded-[10px] bg-[rgba(11,138,114,0.08)] grid place-items-center font-serif text-[14px] font-bold text-[#0B8A72] shrink-0">{letter}</div>
                <div>
                  <div className="text-[13px] font-semibold text-[#0F172A]">{name}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{t(dk)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

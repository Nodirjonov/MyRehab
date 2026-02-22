'use client';
import { useLang } from '../lib/LangContext';

const PLANS = [
  { nk: 'plan1_name', dk: 'plan1_desc', price: '13', per: '/mo',      features: ['f1_1','f1_2','f1_3','f1_4','f1_5'], featured: false, ctaKey: 'nav_trial', filled: false },
  { nk: 'plan2_name', dk: 'plan2_desc', price: '20', per: '/mo',      features: ['f2_1','f2_2','f2_3','f2_4','f2_5'], featured: true,  ctaKey: 'nav_trial', filled: true  },
  { nk: 'plan3_name', dk: 'plan3_desc', price: '15–35', per: '/ep.', features: ['f3_1','f3_2','f3_3','f3_4'],         featured: false, ctaKey: 'talk',      filled: false, note: true },
];

export default function Pricing() {
  const { t } = useLang();

  return (
    <div id="pricing" className="bg-[#F3F6FA]">
      <div className="max-w-[1200px] mx-auto px-5 py-16 md:px-10 md:py-24">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-[#0B8A72] mb-3.5 before:content-[''] before:w-5 before:h-[1.5px] before:bg-[#0B8A72] before:inline-block">
            {t('price_label')}
          </span>
          <h2 className="font-serif text-[#0F172A] font-normal leading-[1.1] mb-4 text-[clamp(26px,4vw,46px)]"
            dangerouslySetInnerHTML={{ __html: t('price_h2') }} />
          <p className="text-[15px] md:text-[16px] text-slate-500 leading-[1.65] max-w-[520px]">{t('price_sub')}</p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 md:mt-14">
          {PLANS.map(({ nk, dk, price, per, features, featured, ctaKey, filled, note }) => (
            <div key={nk} className={`rounded-[20px] p-7 md:p-8 relative transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] ${featured ? 'bg-[#0F172A] border-[1.5px] border-[#0F172A]' : 'bg-white border-[1.5px] border-[#E2E8F0]'}`}>
              {featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0B8A72] text-white text-[11px] font-bold px-3.5 py-1 rounded-full whitespace-nowrap">
                  {t('popular')}
                </div>
              )}

              <div className={`text-[11px] font-bold tracking-[0.08em] uppercase mb-2 ${featured ? 'text-white/40' : 'text-slate-500'}`}>
                {t(nk)}
              </div>

              <div className={`font-serif text-[44px] md:text-[52px] font-normal leading-none mb-1 ${featured ? 'text-white' : 'text-[#0F172A]'}`}>
                <sup className="text-[20px] align-super">$</sup>
                {price}
                <sub className={`text-[14px] ${featured ? 'text-white/35' : 'text-slate-500'}`}>{per}</sub>
              </div>

              <p className={`text-[13px] leading-[1.55] mb-6 ${featured ? 'text-white/45' : 'text-slate-500'}`}>{t(dk)}</p>

              <div className={`h-px mb-5 ${featured ? 'bg-white/[0.07]' : 'bg-[#F1F5F9]'}`} />

              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 mb-6">
                {features.map((fk) => (
                  <li key={fk} className={`flex items-start gap-2 text-[13px] leading-[1.4] ${featured ? 'text-white/70' : 'text-[#334155]'}`}>
                    <span className={`text-[13px] shrink-0 mt-0.5 ${featured ? 'text-[#5EEAD4]' : 'text-[#0B8A72]'}`}>✓</span>
                    {t(fk)}
                  </li>
                ))}
              </ul>

              <a href="#" className={`block text-center py-3.5 rounded-[12px] text-[13px] font-semibold no-underline transition-all duration-200 ${filled ? 'bg-[#0B8A72] text-white border-[1.5px] border-[#0B8A72] hover:bg-[#06705C]' : `border-[1.5px] ${featured ? 'border-white/20 text-white hover:bg-white/10' : 'border-[#E2E8F0] text-[#0F172A] hover:border-[#0B8A72] hover:text-[#0B8A72]'}`}`}>
                {t(ctaKey)}
              </a>

              {note && <p className={`text-[11px] text-center mt-3 m-0 ${featured ? 'text-white/30' : 'text-slate-500'}`}>{t('price_note')}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

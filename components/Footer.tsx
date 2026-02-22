'use client';
import { useLang } from '../lib/LangContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="flex flex-col md:flex-row justify-between items-center gap-4 px-5 py-8 md:px-10 border-t border-white/[0.05]" style={{ background: '#080d13' }}>
      <a href="#" className="flex items-center gap-2.5 no-underline">
        <div className="w-7 h-7 rounded-[8px] bg-gradient-to-br from-[#0B8A72] to-[#0AA688] grid place-items-center font-serif text-white font-bold text-[11px]">M</div>
        <span className="font-serif text-[15px] text-white/70">MyRehab</span>
      </a>

      <div className="flex flex-wrap justify-center gap-4 md:gap-5">
        {['ft_privacy', 'ft_terms', 'ft_clinics', 'ft_contact'].map((k) => (
          <a key={k} href="#" className="text-[12px] text-white/25 no-underline hover:text-white/70 transition-colors duration-200">
            {t(k)}
          </a>
        ))}
        <a href="#" className="text-[12px] text-white/25 no-underline hover:text-white/70 transition-colors duration-200">
          HIPAA Notice
        </a>
      </div>

      <div className="text-[11px] text-white/20">{t('ft_copy')}</div>
    </footer>
  );
}

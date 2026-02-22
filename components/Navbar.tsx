'use client';
import { useEffect, useState } from 'react';
import { useLang } from '../lib/LangContext';
import { Lang } from '../lib/i18n';

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { key: 'nav_how', href: '#how' },
    { key: 'nav_spec', href: '#specialties' },
    { key: 'nav_safety', href: '#safety' },
    { key: 'nav_pricing', href: '#pricing' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] h-[60px] flex items-center px-5 md:px-10 backdrop-blur-xl bg-white/85 border-b border-slate-200/60 transition-shadow duration-300 ${scrolled ? 'shadow-[0_1px_20px_rgba(0,0,0,0.07)]' : ''}`}>

        {/* Логотип */}
        <a href="#" className="flex items-center gap-2.5 no-underline shrink-0">
          <div className="w-[34px] h-[34px] rounded-[10px] bg-gradient-to-br from-[#0B8A72] to-[#0AA688] grid place-items-center text-white font-bold text-sm font-serif shadow-[0_2px_10px_rgba(11,138,114,0.3)]">
            M
          </div>
          <span className="font-serif text-[18px] text-[#044D40]">MyRehab</span>
        </a>

        {/* Ссылки — только десктоп */}
        <div className="hidden md:flex gap-0.5 ml-8">
          {navLinks.map(({ key, href }) => (
            <a key={key} href={href} className="px-3.5 py-1.5 rounded-full text-[13px] font-medium text-slate-500 no-underline hover:text-[#06705C] hover:bg-[rgba(11,138,114,0.06)] transition-all duration-200">
              {t(key)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          {/* Языки */}
          <div className="flex gap-0.5 bg-[rgba(11,138,114,0.06)] rounded-full p-[3px]">
            {(['en', 'ru', 'uz'] as Lang[]).map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`px-2.5 py-1 rounded-full text-[11px] font-bold tracking-[0.04em] border-none cursor-pointer transition-all duration-200 ${lang === l ? 'bg-[#0B8A72] text-white shadow-[0_1px_6px_rgba(11,138,114,0.3)]' : 'bg-transparent text-slate-500 hover:text-[#0B8A72]'}`}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* CTA — только десктоп */}
          <a href="#" className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-[13px] font-semibold text-slate-500 no-underline hover:text-[#06705C] hover:bg-[rgba(11,138,114,0.06)] transition-all duration-200">
            {t('nav_signin')}
          </a>
          <a href="#" className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-br from-[#0B8A72] to-[#0AA688] text-white text-[13px] font-semibold no-underline shadow-[0_2px_12px_rgba(11,138,114,0.25)] hover:shadow-[0_6px_24px_rgba(11,138,114,0.35)] hover:-translate-y-px transition-all duration-200">
            {t('nav_trial')}
          </a>

          {/* Бургер — только мобайл */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2 ml-1">
            <span className={`block w-5 h-0.5 bg-slate-600 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-slate-600 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-slate-600 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="fixed top-[60px] left-0 right-0 z-[99] bg-white border-b border-slate-200 shadow-lg md:hidden">
          <div className="flex flex-col p-4 gap-1">
            {navLinks.map(({ key, href }) => (
              <a key={key} href={href} onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl text-[14px] font-medium text-slate-600 no-underline hover:bg-[rgba(11,138,114,0.06)] hover:text-[#06705C] transition-all">
                {t(key)}
              </a>
            ))}
            <div className="border-t border-slate-100 mt-2 pt-3 flex flex-col gap-2">
              <a href="#" className="px-4 py-3 text-center rounded-xl text-[14px] font-semibold text-slate-600 border border-slate-200 no-underline">
                {t('nav_signin')}
              </a>
              <a href="#" className="px-4 py-3 text-center rounded-xl text-[14px] font-semibold bg-gradient-to-br from-[#0B8A72] to-[#0AA688] text-white no-underline">
                {t('nav_trial')}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { t as translate, Lang } from '../lib/i18n';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
  t: (k) => k,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const tFn = (key: string) => translate(lang, key);
  return (
    <LangContext.Provider value={{ lang, setLang, t: tFn }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);

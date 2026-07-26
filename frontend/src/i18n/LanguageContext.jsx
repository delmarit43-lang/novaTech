import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import { LANGUAGES, translations, getNested } from './translations.js';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'nova_lang';

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return translations[saved] ? saved : 'EN';
  });

  const setLang = useCallback((code) => {
    if (translations[code]) {
      setLangState(code);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    const meta = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];
    document.documentElement.lang = meta.htmlLang;
    document.documentElement.dir = meta.dir;
  }, [lang]);

  const t = useCallback(
    (key) => getNested(translations[lang], key) ?? getNested(translations.EN, key) ?? key,
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t, languages: LANGUAGES }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}

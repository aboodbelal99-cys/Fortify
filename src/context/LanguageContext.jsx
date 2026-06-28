'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations } from '@/data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en');

  // On mount, read saved language from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('fortify-lang');
    if (saved === 'ar' || saved === 'en') {
      setLangState(saved);
    }
  }, []);

  // Sync HTML attributes whenever lang changes
  useEffect(() => {
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.removeAttribute('dir');
      document.documentElement.setAttribute('lang', 'en');
    }
  }, [lang]);

  const setLang = useCallback((code) => {
    setLangState(code);
    localStorage.setItem('fortify-lang', code);
  }, []);

  // Translation function: accepts a dot-path key like 'hero.title'
  const t = useCallback(
    (key) => {
      const keys = key.split('.');
      let value = translations[lang];
      for (const k of keys) {
        if (value == null) return key;
        value = value[k];
      }
      return value ?? key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

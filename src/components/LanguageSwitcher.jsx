'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export default function LanguageSwitcher({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [ready, setReady] = useState(false);
  const dropdownRef = useRef(null);

  // Find Google Translate's hidden <select> element
  const getGoogleTranslateSelect = useCallback(() => {
    return document.querySelector('.goog-te-combo');
  }, []);

  // Detect the current language from the Google Translate widget or the HTML lang attribute
  const detectCurrentLanguage = useCallback(() => {
    const select = getGoogleTranslateSelect();
    if (select && select.value) {
      return select.value;
    }
    // Check if the page has already been translated via cookie
    const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    if (match && match[1] && match[1] !== 'en') {
      return match[1];
    }
    return 'en';
  }, [getGoogleTranslateSelect]);

  useEffect(() => {
    // Poll for the Google Translate widget to be ready (it loads async)
    let attempts = 0;
    const maxAttempts = 50; // 10 seconds max
    const checkReady = setInterval(() => {
      attempts++;
      const select = getGoogleTranslateSelect();
      if (select) {
        clearInterval(checkReady);
        setReady(true);
        setCurrentLang(detectCurrentLanguage());
      }
      if (attempts >= maxAttempts) {
        clearInterval(checkReady);
      }
    }, 200);

    // Close dropdown on click outside
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      clearInterval(checkReady);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [getGoogleTranslateSelect, detectCurrentLanguage]);

  useEffect(() => {
    if (currentLang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
      document.documentElement.classList.add('lang-ar');
    } else {
      document.documentElement.removeAttribute('dir');
      document.documentElement.setAttribute('lang', 'en');
      document.documentElement.classList.remove('lang-ar');
    }
  }, [currentLang]);

  const changeLanguage = (langCode) => {
    const select = getGoogleTranslateSelect();

    if (!select) {
      // Fallback: set cookie and reload
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
      window.location.reload();
      return;
    }

    if (langCode === 'en') {
      // To revert to English, we need to trigger Google Translate's restore
      // First try setting value to empty and dispatching change
      select.value = '';
      select.dispatchEvent(new Event('change', { bubbles: true }));

      // Also clear cookie and reload as a fallback for reverting
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
      
      // Small delay then reload to ensure revert
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } else {
      // Set the select value to the target language and trigger change
      select.value = langCode;
      select.dispatchEvent(new Event('change', { bubbles: true }));
      setCurrentLang(langCode);
    }

    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface/30 text-[0.82rem] font-medium text-text-secondary hover:text-white hover:border-gold/30 hover:bg-gold/5 transition-all cursor-pointer"
        type="button"
        aria-label="Select Language"
      >
        <svg
          className="w-4 h-4 text-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253"
          />
        </svg>
        <span>{currentLang === 'ar' ? 'العربية' : 'English'}</span>
        <svg
          className={`w-3.5 h-3.5 text-text-muted transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 origin-top-right rounded-xl border border-border-gold bg-[#042430]/95 backdrop-blur-xl shadow-2xl z-50 py-1.5 flex flex-col gap-0.5 animate-fade-in">
          <button
            onClick={() => changeLanguage('en')}
            className={`w-full text-left px-4 py-2 text-xs font-semibold flex items-center justify-between hover:bg-gold/10 transition-all cursor-pointer ${
              currentLang === 'en' ? 'text-gold' : 'text-text-secondary hover:text-white'
            }`}
            type="button"
          >
            <span>English</span>
            {currentLang === 'en' && <span className="text-xs">✓</span>}
          </button>
          <button
            onClick={() => changeLanguage('ar')}
            className={`w-full text-left px-4 py-2 text-xs font-semibold flex items-center justify-between hover:bg-gold/10 transition-all cursor-pointer ${
              currentLang === 'ar' ? 'text-gold' : 'text-text-secondary hover:text-white'
            }`}
            type="button"
          >
            <span>العربية</span>
            {currentLang === 'ar' && <span className="text-xs">✓</span>}
          </button>
        </div>
      )}
    </div>
  );
}

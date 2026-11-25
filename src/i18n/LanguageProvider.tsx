import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { LanguageContext } from './languageContext';
import { translations } from './translations';
import type { Language } from './types';

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'pt';
  return new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'pt';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    const url = new URL(window.location.href);
    if (nextLanguage === 'en') {
      url.searchParams.set('lang', 'en');
    } else {
      url.searchParams.delete('lang');
    }
    window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
  }, []);

  const dictionary = translations[language];

  useEffect(() => {
    const isEnglish = language === 'en';
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.delete('lang');
    if (isEnglish) currentUrl.searchParams.set('lang', 'en');

    document.documentElement.lang = isEnglish ? 'en' : 'pt-BR';
    document.title = dictionary.metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', dictionary.metadata.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', dictionary.metadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', dictionary.metadata.description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', dictionary.metadata.locale);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', currentUrl.toString());
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', dictionary.metadata.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', dictionary.metadata.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', currentUrl.toString());
  }, [dictionary, language]);

  const contextValue = useMemo(
    () => ({ language, dictionary, setLanguage }),
    [language, dictionary, setLanguage],
  );

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}

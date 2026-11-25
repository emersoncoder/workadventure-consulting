import { createContext } from 'react';
import type { Language } from './types';
import type { Dictionary } from './translations';

export type LanguageContextValue = {
  language: Language;
  dictionary: Dictionary;
  setLanguage: (language: Language) => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

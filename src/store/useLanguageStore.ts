import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { siteI18n, type Language } from '@/data/siteI18n';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: 'zh',
      setLanguage: (lang) => set({ language: lang }),
      toggleLanguage: () => set({ language: get().language === 'zh' ? 'en' : 'zh' }),
    }),
    {
      name: 'site-language-storage',
    }
  )
);

export const useTranslation = () => {
  const { language } = useLanguageStore();
  return {
    t: siteI18n[language],
    language,
  };
};

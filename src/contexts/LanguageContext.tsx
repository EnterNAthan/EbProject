import React, { createContext, useContext, useState, useEffect } from "react";
import frTranslations from "../translations/fr.json";
import enTranslations from "../translations/en.json";
import deTranslations from "../translations/de.json";

type Language = "fr" | "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

// Map des traductions
const translationsMap = {
  fr: frTranslations,
  en: enTranslations,
  de: deTranslations,
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Récupérer la langue sauvegardée ou utiliser FR par défaut
    const saved = localStorage.getItem("language");
    return (saved as Language) || "fr";
  });

  useEffect(() => {
    // Sauvegarder la langue sélectionnée
    localStorage.setItem("language", language);
  }, [language]);

  // Fonction de traduction
  const t = (key: string): string => {
    // Récupérer les traductions pour la langue courante
    const translations = translationsMap[language];

    // Navigation dans l'objet de traduction avec la clé (ex: "header.home")
    const keys = key.split(".");
    let value: any = translations;

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

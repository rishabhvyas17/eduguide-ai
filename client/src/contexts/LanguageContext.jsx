// client/src/contexts/LanguageContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get saved language from localStorage or default to English
    const saved = localStorage.getItem('language');
    return saved || 'en';
  });

  useEffect(() => {
    // Save language preference to localStorage whenever it changes
    localStorage.setItem('language', language);
    console.log('Language changed to:', language); // For debugging
  }, [language]);

  const changeLanguage = (lang) => {
    console.log('Changing language to:', lang); // For debugging
    setLanguage(lang);
  };

  const t = (key) => {
    // Navigate through nested translation keys
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    // If translation not found, return the key itself
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
// LanguageContext.js
import React, { createContext, useState, useContext } from 'react';
import translations from './translations'; // Import translations

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const changeLanguage = () => {
    setCurrentLanguage((prevLanguage) => (prevLanguage === 'en' ? 'pl' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { LanguageProvider, useLanguage };

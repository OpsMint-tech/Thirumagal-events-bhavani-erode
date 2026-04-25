import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Check localStorage for saved language preference
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('site_language') || 'en';
    });

    const t = (path) => {
        const keys = path.split('.');
        let result = translations[language];

        for (const key of keys) {
            if (result && result[key] !== undefined) {
                result = result[key];
            } else {
                return path; 
            }
        }
        return result;
    };

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'ta' : 'en';
        setLanguage(newLang);
        localStorage.setItem('site_language', newLang);
    };

    // Sync language to body attribute and html lang for SEO/Accessibility
    useEffect(() => {
        document.body.setAttribute('data-lang', language);
        document.documentElement.lang = language;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

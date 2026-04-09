import React from 'react';
import './FloatingButtons.css';
import { useLanguage } from '../contexts/LanguageContext';

const FloatingButtons = () => {
    const { t } = useLanguage();
    return (
        <div className="floating-container">
            <a
                href="https://wa.me/919842930758"
                className="floating-btn whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                title={t('contact.info.chat')}
            >
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.8rem' }}></i>
            </a>
            <a
                href="tel:+919842930758"
                className="floating-btn phone-btn"
                title={t('contact.info.call')}
            >
                <i className="fa-solid fa-phone" style={{ fontSize: '1.4rem' }}></i>
            </a>
        </div>

    );
};

export default FloatingButtons;

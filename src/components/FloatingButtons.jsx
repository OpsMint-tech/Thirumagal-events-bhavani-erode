import React from 'react';
import './FloatingButtons.css';
import { useLanguage } from '../contexts/LanguageContext';
<<<<<<< HEAD
import { openWhatsApp } from '../utils/whatsapp';
=======
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b

const FloatingButtons = () => {
    const { t } = useLanguage();
    return (
        <div className="floating-container">
<<<<<<< HEAD
            <button
                onClick={() => openWhatsApp()}
                className="floating-btn whatsapp-btn"
                title={t('contact.info.chat')}
                aria-label="Chat on WhatsApp"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.06 3.978l-1.125 4.105 4.197-1.103a7.843 7.843 0 0 0 3.792.977h.004c4.368 0 7.927-3.558 7.93-7.926a7.859 7.859 0 0 0-2.33-5.552zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
            </button>
=======
            <a
                href="https://wa.me/919842930758"
                className="floating-btn whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                title={t('contact.info.chat')}
            >
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.8rem' }}></i>
            </a>
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
            <a
                href="tel:+919842930758"
                className="floating-btn phone-btn"
                title={t('contact.info.call')}
            >
<<<<<<< HEAD
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>call</span>
=======
                <i className="fa-solid fa-phone" style={{ fontSize: '1.4rem' }}></i>
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
            </a>
        </div>

    );
};

export default FloatingButtons;

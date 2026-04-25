import React from 'react';
import './CTA.css';
import { useLanguage } from '../contexts/LanguageContext';

const CTA = () => {
    const { t } = useLanguage();

    return (
        <section className="cta-section">
            <div className="container cta-container">
                <h2 className="cta-title">{t('cta.title')}</h2>
                <button className="btn btn-light cta-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                    {t('cta.btn')} <span className="material-symbols-outlined icon-right">arrow_forward</span>
                </button>
            </div>
        </section>
    );
};

export default CTA;

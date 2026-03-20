import React from 'react';
import './AboutUs.css';
import brideImg from '../assets/About01.webp';
import { useLanguage } from '../contexts/LanguageContext';

const AboutUs = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="about-us-section">
            <div className="container">
                <div className="about-us-grid">
                    <div className="about-image-col">
                        <img src={brideImg} alt="Bride in floral arch" className="about-img" loading="lazy" />
                    </div>
                    <div className="about-content-col">
                        <span className="section-subtitle">{t('about.subtitle')}</span>
                        <h2 className="section-title">{t('about.title')}</h2>
                        <p className="section-description">
                            {t('about.desc1')}
                        </p>
                        <p className="section-description">
                            {t('about.desc2')}
                        </p>

                        <button className="btn btn-primary shop-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            {t('about.btn')} <span className="material-symbols-outlined icon-right">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;

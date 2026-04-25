import React from 'react';
import './AboutUs.css';
import aboutWideImg from '../assets/AboutWide.png';
import aboutAccentImg from '../assets/About01.webp';
import { useLanguage } from '../contexts/LanguageContext';

const AboutUs = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="about-us-section">
            <div className="container">
                <div className="about-us-grid">
                    <div className="about-image-col">
                        <div className="image-wrapper">
                            <img src={aboutWideImg} alt="Thirumagal Events Legacy" className="about-img" loading="lazy" />
                            <div className="accent-image-wrapper">
                                <img src={aboutAccentImg} alt="Event Decor" className="about-accent-img" loading="lazy" />
                            </div>
                            <div className="experience-badge">
                                <span className="badge-number">35+</span>
                                <span className="badge-text">Years of Excellence</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-content-col">
                        <div className="about-header">
                            <span className="section-subtitle">{t('about.subtitle')}</span>
                            <h2 className="section-title">{t('about.title')}</h2>
                        </div>
                        <div className="about-body">
                            <p className="section-description">
                                {t('about.desc1')}
                            </p>
                            <p className="section-description">
                                {t('about.desc2')}
                            </p>
                        </div>

                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">{t('about.stats.years')}</span>
                                <span className="stat-label">Legacy</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number">{t('about.stats.events')}</span>
                                <span className="stat-label">Decorated</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">{t('about.stats.happy')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;

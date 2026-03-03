import React from 'react';
import './EventTypes.css';
import coupleImg from '../assets/event-couple.jpg';
import cakeImg from '../assets/event-cake.jpg';
import { useLanguage } from '../contexts/LanguageContext';

const EventTypes = () => {
    const { t } = useLanguage();

    return (
        <section className="event-types-section">
            <div className="container">
                <div className="event-types-grid">
                    <div className="event-images">
                        <div className="image-wrapper play-wrapper">
                            <img src={coupleImg} alt="Wedding Couple" className="event-img main-img" />
                        </div>
                        <div className="image-wrapper">
                            <img src={cakeImg} alt="Wedding Cake" className="event-img secondary-img" />
                        </div>
                    </div>

                    <div className="event-content">
                        <span className="section-subtitle">{t('eventTypes.subtitle')}</span>
                        <h2 className="section-title">{t('eventTypes.title')}</h2>

                        <p className="section-description">
                            {t('eventTypes.desc')}
                        </p>

                        <ul className="event-features">
                            <li>
                                <span className="check-icon material-symbols-outlined">check</span>
                                {t('eventTypes.feature1')}
                            </li>
                            <li>
                                <span className="check-icon material-symbols-outlined">check</span>
                                {t('eventTypes.feature2')}
                            </li>
                            <li>
                                <span className="check-icon material-symbols-outlined">check</span>
                                {t('eventTypes.feature3')}
                            </li>
                        </ul>

                        <button className="btn btn-primary shop-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            {t('eventTypes.btn')} <span className="material-symbols-outlined icon-right">arrow_forward</span>
                        </button>
                    </div>
                </div>

                <div className="services-header">
                    <span className="section-subtitle-center">{t('eventTypes.servicesHeader')}</span>
                    <h2 className="section-title-center">{t('eventTypes.servicesTitle')}</h2>
                </div>

            </div>
        </section>
    );
};

export default EventTypes;

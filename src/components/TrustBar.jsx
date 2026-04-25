import React from 'react';
import './TrustBar.css';
import { useLanguage } from '../contexts/LanguageContext';

const TrustBar = () => {
  const { t } = useLanguage();
  const trustItems = [
<<<<<<< HEAD
    { icon: 'event_available', text: t('trust.experience') },
    { icon: 'workspace_premium', text: t('trust.events') },
    { icon: 'pin_drop', text: t('trust.locations') },
    { icon: 'schedule', text: t('trust.delivery') }
=======
    { icon: 'fa-solid fa-calendar-check', text: t('trust.experience') },
    { icon: 'fa-solid fa-award', text: t('trust.events') },
    { icon: 'fa-solid fa-map-location-dot', text: t('trust.locations') },
    { icon: 'fa-solid fa-clock', text: t('trust.delivery') }
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
  ];

  return (
    <section className="trust-bar">
      <div className="container">
        <div className="trust-grid">
          {trustItems.map((item, index) => (
            <div key={index} className="trust-item">
              <div className="trust-icon">
<<<<<<< HEAD
                <span className="material-symbols-outlined">{item.icon}</span>
=======
                <i className={item.icon}></i>
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
              </div>
              <p className="trust-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;

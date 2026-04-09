import React from 'react';
import './TrustBar.css';
import { useLanguage } from '../contexts/LanguageContext';

const TrustBar = () => {
  const { t } = useLanguage();
  const trustItems = [
    { icon: 'fa-solid fa-calendar-check', text: t('trust.experience') },
    { icon: 'fa-solid fa-award', text: t('trust.events') },
    { icon: 'fa-solid fa-map-location-dot', text: t('trust.locations') },
    { icon: 'fa-solid fa-clock', text: t('trust.delivery') }
  ];

  return (
    <section className="trust-bar">
      <div className="container">
        <div className="trust-grid">
          {trustItems.map((item, index) => (
            <div key={index} className="trust-item">
              <div className="trust-icon">
                <i className={item.icon}></i>
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

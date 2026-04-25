import React from 'react';
import './TrustBar.css';
import { useLanguage } from '../contexts/LanguageContext';

const TrustBar = () => {
  const { t } = useLanguage();
  const trustItems = [
    { icon: 'event_available', text: t('trust.experience') },
    { icon: 'workspace_premium', text: t('trust.events') },
    { icon: 'pin_drop', text: t('trust.locations') },
    { icon: 'schedule', text: t('trust.delivery') }
  ];

  return (
    <section className="trust-bar">
      <div className="container">
        <div className="trust-grid">
          {trustItems.map((item, index) => (
            <div key={index} className="trust-item">
              <div className="trust-icon">
                <span className="material-symbols-outlined">{item.icon}</span>
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

import React from 'react';
import './Services.css';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  const services = [
    {
      title: t('services.items.wedding.title'),
      icon: 'fa-solid fa-heart',
      desc: t('services.items.wedding.desc')
    },
    {
      title: t('services.items.reception.title'),
      icon: 'fa-solid fa-champagne-glasses',
      desc: t('services.items.reception.desc')
    },
    {
      title: t('services.items.birthday.title'),
      icon: 'fa-solid fa-cake-candles',
      desc: t('services.items.birthday.desc')
    },
    {
      title: t('services.items.engagement.title'),
      icon: 'fa-solid fa-gem',
      desc: t('services.items.engagement.desc')
    },
    {
      title: t('services.items.corporate.title'),
      icon: 'fa-solid fa-briefcase',
      desc: t('services.items.corporate.desc')
    },
    {
      title: t('services.items.baby.title'),
      icon: 'fa-solid fa-baby-carriage',
      desc: t('services.items.baby.desc')
    },
    {
      title: t('services.items.house.title'),
      icon: 'fa-solid fa-house-chimney-window',
      desc: t('services.items.house.desc')
    },
    {
      title: t('services.items.naming.title'),
      icon: 'fa-solid fa-child',
      desc: t('services.items.naming.desc')
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-head">
          <span className="section-label">{t('services.label')}</span>
          <h2 className="section-title">{t('services.title')}</h2>
        </div>
        
        <div className="services-grid-new">
          {services.map((service, index) => (
            <div key={index} className="service-card-new fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-card-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

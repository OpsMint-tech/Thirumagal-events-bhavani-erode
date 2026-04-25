import React from 'react';
import './Services.css';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  const services = [
    {
      title: t('services.items.wedding.title'),
<<<<<<< HEAD
      icon: 'favorite',
=======
      icon: 'fa-solid fa-heart',
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
      desc: t('services.items.wedding.desc')
    },
    {
      title: t('services.items.reception.title'),
<<<<<<< HEAD
      icon: 'celebration',
=======
      icon: 'fa-solid fa-champagne-glasses',
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
      desc: t('services.items.reception.desc')
    },
    {
      title: t('services.items.birthday.title'),
<<<<<<< HEAD
      icon: 'cake',
=======
      icon: 'fa-solid fa-cake-candles',
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
      desc: t('services.items.birthday.desc')
    },
    {
      title: t('services.items.engagement.title'),
<<<<<<< HEAD
      icon: 'diamond',
=======
      icon: 'fa-solid fa-gem',
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
      desc: t('services.items.engagement.desc')
    },
    {
      title: t('services.items.corporate.title'),
<<<<<<< HEAD
      icon: 'business_center',
=======
      icon: 'fa-solid fa-briefcase',
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
      desc: t('services.items.corporate.desc')
    },
    {
      title: t('services.items.baby.title'),
<<<<<<< HEAD
      icon: 'child_care',
=======
      icon: 'fa-solid fa-baby-carriage',
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
      desc: t('services.items.baby.desc')
    },
    {
      title: t('services.items.house.title'),
<<<<<<< HEAD
      icon: 'home',
=======
      icon: 'fa-solid fa-house-chimney-window',
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
      desc: t('services.items.house.desc')
    },
    {
      title: t('services.items.naming.title'),
<<<<<<< HEAD
      icon: 'person',
=======
      icon: 'fa-solid fa-child',
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
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
<<<<<<< HEAD
            <div key={index} className="service-card-new hover-lift fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-card-icon glass-icon">
                <span className="material-symbols-outlined">{service.icon}</span>
=======
            <div key={index} className="service-card-new fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-card-icon">
                <i className={service.icon}></i>
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
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

import React from 'react';
import './Services.css';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  const services = [
    {
      title: t('services.items.wedding.title'),
      icon: 'favorite',
      desc: t('services.items.wedding.desc')
    },
    {
      title: t('services.items.reception.title'),
      icon: 'celebration',
      desc: t('services.items.reception.desc')
    },
    {
      title: t('services.items.birthday.title'),
      icon: 'cake',
      desc: t('services.items.birthday.desc')
    },
    {
      title: t('services.items.engagement.title'),
      icon: 'diamond',
      desc: t('services.items.engagement.desc')
    },
    {
      title: t('services.items.corporate.title'),
      icon: 'business_center',
      desc: t('services.items.corporate.desc')
    },
    {
      title: t('services.items.baby.title'),
      icon: 'child_care',
      desc: t('services.items.baby.desc')
    },
    {
      title: t('services.items.house.title'),
      icon: 'home',
      desc: t('services.items.house.desc')
    },
    {
      title: t('services.items.naming.title'),
      icon: 'person',
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
            <div key={index} className="service-card-new hover-lift fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-card-icon glass-icon">
                <span className="material-symbols-outlined">{service.icon}</span>
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

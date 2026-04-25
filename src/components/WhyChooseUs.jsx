import React from 'react';
import './WhyChooseUs.css';
import { useLanguage } from '../contexts/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();
  const points = [
    {
      title: t('whyUs.points.p1.title'),
      desc: t('whyUs.points.p1.desc'),
      icon: 'verified_user'
    },
    {
      title: t('whyUs.points.p2.title'),
      desc: t('whyUs.points.p2.desc'),
      icon: 'star'
    },
    {
      title: t('whyUs.points.p3.title'),
      desc: t('whyUs.points.p3.desc'),
      icon: 'distance'
    },
    {
      title: t('whyUs.points.p4.title'),
      desc: t('whyUs.points.p4.desc'),
      icon: 'volunteer_activism'
    }
  ];

  return (
    <section id="why-us" className="why-us-section">
      <div className="container">
        <div className="section-head">
          <span className="section-label">{t('whyUs.label')}</span>
          <h2 className="section-title">{t('whyUs.title')}</h2>
        </div>
        
        <div className="why-us-grid">
          <div className="why-us-content">
            {points.map((point, index) => (
              <div key={index} className="why-point fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="why-icon glass-icon">
                   <span className="material-symbols-outlined">{point.icon}</span>
                </div>
                <div className="why-text">
                  <h3>{point.title}</h3>
                  <p>{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="why-us-image-wrapper">
             <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" alt="Excellence in Decoration" className="why-image" />
             <div className="why-experience-badge">
                <span className="why-exp-years">35+</span>
                <span className="why-exp-text">{t('whyUs.badge')}</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

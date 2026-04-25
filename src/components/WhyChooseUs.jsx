import React from 'react';
import './WhyChooseUs.css';
import { useLanguage } from '../contexts/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();
  const points = [
    {
      title: t('whyUs.points.p1.title'),
      desc: t('whyUs.points.p1.desc'),
<<<<<<< HEAD
      icon: 'verified_user'
=======
      icon: 'fa-solid fa-medal'
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
    },
    {
      title: t('whyUs.points.p2.title'),
      desc: t('whyUs.points.p2.desc'),
<<<<<<< HEAD
      icon: 'star'
=======
      icon: 'fa-solid fa-star'
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
    },
    {
      title: t('whyUs.points.p3.title'),
      desc: t('whyUs.points.p3.desc'),
<<<<<<< HEAD
      icon: 'distance'
=======
      icon: 'fa-solid fa-location-dot'
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
    },
    {
      title: t('whyUs.points.p4.title'),
      desc: t('whyUs.points.p4.desc'),
<<<<<<< HEAD
      icon: 'volunteer_activism'
=======
      icon: 'fa-solid fa-hand-holding-heart'
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
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
<<<<<<< HEAD
                <div className="why-icon glass-icon">
                   <span className="material-symbols-outlined">{point.icon}</span>
=======
                <div className="why-icon">
                   <i className={point.icon}></i>
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
                </div>
                <div className="why-text">
                  <h3>{point.title}</h3>
                  <p>{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
<<<<<<< HEAD
          <div className="why-us-image-wrapper">
             <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" alt="Excellence in Decoration" className="why-image" />
             <div className="why-experience-badge">
                <span className="why-exp-years">35+</span>
                <span className="why-exp-text">{t('whyUs.badge')}</span>
=======
          <div className="why-us-image-wrapper fade-in" style={{ animationDelay: '0.4s' }}>
             <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" alt="Excellence in Decoration" className="why-image" />
             <div className="experience-badge">
                <span className="exp-years">35+</span>
                <span className="exp-text">{t('whyUs.badge')}</span>
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

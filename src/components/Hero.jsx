import React from 'react';
import './Hero.css';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
<<<<<<< HEAD
    <section id="home" className="hero">
=======
    <section className="hero">
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <span className="section-label hero-label fade-in">{t('hero.label')}</span>
        <h1 className="hero-title fade-in" style={{ animationDelay: '0.2s' }}>
          {t('hero.titleStart')}<span className="text-gold">{t('hero.titleGold')}</span>{t('hero.titleEnd')}
        </h1>
        <p className="hero-subtext fade-in" style={{ animationDelay: '0.4s' }}>
          {t('hero.subtext')}
        </p>
        <div className="hero-actions fade-in" style={{ animationDelay: '0.6s' }}>
<<<<<<< HEAD
          <a href="tel:+919842930758" className="btn btn-hero btn-primary-hero shimmer-btn">
            <span className="material-symbols-outlined" style={{ marginRight: '10px', fontSize: '20px' }}>call</span>
            {t('hero.ctaCall')}
          </a>
          <a href="#gallery" className="btn btn-hero btn-outline-hero hover-lift">
=======
          <a href="tel:+919842930758" className="btn btn-primary">
            <i className="fa-solid fa-phone" style={{ marginRight: '10px' }}></i> {t('hero.ctaCall')}
          </a>
          <a href="https://wa.me/919842930758" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp" style={{ marginRight: '10px' }}></i> {t('hero.ctaWhatsapp')}
          </a>
          <a href="#gallery" className="btn btn-outline-white">
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
            {t('hero.ctaGallery')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

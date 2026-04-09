import React from 'react';
import './Hero.css';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="hero">
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
          <a href="tel:+919842930758" className="btn btn-primary">
            <i className="fa-solid fa-phone" style={{ marginRight: '10px' }}></i> {t('hero.ctaCall')}
          </a>
          <a href="https://wa.me/919842930758" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp" style={{ marginRight: '10px' }}></i> {t('hero.ctaWhatsapp')}
          </a>
          <a href="#gallery" className="btn btn-outline-white">
            {t('hero.ctaGallery')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import './Hero.css';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="hero">
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
          <a href="tel:+919842930758" className="btn btn-hero btn-primary-hero shimmer-btn">
            <span className="material-symbols-outlined" style={{ marginRight: '10px', fontSize: '20px' }}>call</span>
            {t('hero.ctaCall')}
          </a>
          <a href="#gallery" className="btn btn-hero btn-outline-hero hover-lift">
            {t('hero.ctaGallery')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

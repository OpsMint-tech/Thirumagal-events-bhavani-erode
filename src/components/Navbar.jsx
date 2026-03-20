import React, { useState } from 'react';
import './Navbar.css';
import logoImg from '../assets/logo.png';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const { language, t, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent scrolling when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <a href="#home" onClick={closeMenu}>
              <img src={logoImg} alt="Thirumagal Logo" className="logo-img" />
            </a>
          </div>

          {/* Desktop links - hidden on mobile via CSS */}
          <ul className="navbar-links-desktop">
            <li><a href="#home">{t('nav.home')}</a></li>
            <li><a href="#about">{t('nav.about')}</a></li>
            <li><a href="#services">{t('nav.services')}</a></li>
            <li><a href="#shop">{t('nav.decorations')}</a></li>
            <li><a href="#portfolio">{t('nav.portfolio')}</a></li>
            <li><a href="#contact">{t('nav.contact')}</a></li>
          </ul>

          <div className="navbar-controls">
            <button className="lang-toggle" onClick={toggleLanguage}>
              {language === 'en' ? 'தமிழ்' : 'English'}
            </button>

            <button className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <span className="material-symbols-outlined">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu - OUTSIDE nav to avoid backdrop-filter containing block issue */}
      <ul className={`navbar-links-mobile ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>{t('nav.home')}</a></li>
        <li><a href="#about" onClick={closeMenu}>{t('nav.about')}</a></li>
        <li><a href="#services" onClick={closeMenu}>{t('nav.services')}</a></li>
        <li><a href="#shop" onClick={closeMenu}>{t('nav.decorations')}</a></li>
        <li><a href="#portfolio" onClick={closeMenu}>{t('nav.portfolio')}</a></li>
        <li><a href="#contact" onClick={closeMenu}>{t('nav.contact')}</a></li>
      </ul>
    </>
  );
};

export default Navbar;

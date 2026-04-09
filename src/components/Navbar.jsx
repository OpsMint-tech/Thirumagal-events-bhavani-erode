import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logoImg from '../assets/logo.webp';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const { language, t, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#services', label: t('nav.services') },
    { href: '#why-us', label: t('nav.whyUs') },
    { href: '#gallery', label: t('nav.gallery') },
    { href: '#testimonials', label: t('nav.reviews') },
    { href: '#faq', label: t('nav.faq') },
    { href: '#contact', label: t('nav.bookNow') },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <div className="navbar-logo">
            <a href="#home" onClick={closeMenu} aria-label="Go to homepage">
              <img src={logoImg} alt="Thirumagal Logo" className="logo-img" />
              <span className="logo-text">Thirumagal</span>
            </a>
          </div>

          <ul className="navbar-links-desktop">
            {navLinks.slice(0, 6).map((link) => (
              <li key={link.href}>
                <a href={link.href} aria-label={`Navigate to ${link.label}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-cta">
            <button className="tamil-btn" onClick={toggleLanguage} aria-label={`Switch language to ${language === 'en' ? 'Tamil' : 'English'}`}>
              {language === 'en' ? 'TAMIL' : 'ENGLISH'}
            </button>
            <a href="#contact" className="btn btn-primary nav-btn" aria-label={t('nav.bookNow')}>{t('nav.bookNow')}</a>
          </div>

          <div className="navbar-controls">
            <button className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      <ul className={`navbar-links-mobile ${isMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={closeMenu}>{link.label}</a>
          </li>
        ))}
        <li>
          <button className="lang-toggle-mobile" onClick={() => { toggleLanguage(); closeMenu(); }}>
            {language === 'en' ? 'தமிழ்' : 'English'}
          </button>
        </li>
      </ul>
    </>
  );
};

export default Navbar;

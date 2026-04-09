import React from 'react';
import './Footer.css';
import { useLanguage } from '../contexts/LanguageContext';
import logoImg from '../assets/logo.png';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo-wrapper">
              <img src={logoImg} alt="Thirumagal Logo" className="footer-logo-img" />
              <h2 className="footer-logo-text">Thirumagal</h2>
            </div>
            <p className="footer-tagline">{t('footer.tagline')}</p>
            <div className="social-links-new">
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="footer-grid-new">
            <div className="footer-info-col">
              <h4>{t('footer.contactTitle')}</h4>
              <p><i className="fa-solid fa-location-dot"></i> 6/186, Kavundapadi Main Road, Kalingarayanpalayam, Bhavani, Erode – 638301</p>
              <p><i className="fa-solid fa-phone"></i> {t('contact.form.phone')} 1: +91 98429 30758</p>
              <p><i className="fa-solid fa-phone"></i> {t('contact.form.phone')} 2: +91 94887 30758</p>
            </div>
            
            <div className="footer-links-col">
              <h4>{t('footer.linksTitle')}</h4>
              <ul>
                <li><a href="#home">{t('nav.home')}</a></li>
                <li><a href="#services">{t('nav.services')}</a></li>
                <li><a href="#gallery">{t('nav.gallery')}</a></li>
                <li><a href="#contact">{t('nav.bookNow')}</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Thirumagal Decors and Events. {t('footer.rights')}</p>
          </div>
          <div className="footer-powered">
            <p>
              {t('footer.powered')} 
              <a 
                href="https://opsmintech.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--color-gold)', fontWeight: '600', textDecoration: 'none' }}
              >
                Opsmintech.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

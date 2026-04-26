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
              <div className="footer-logo-text-group">
                <h2 className="footer-logo-text">Thirumagal <span className="footer-logo-accent">Kalyan</span></h2>
                <span className="footer-logo-subtext">Wedding / event planners & decors</span>
              </div>
            </div>
            <p className="footer-tagline">{t('footer.tagline')}</p>
            <div className="social-links-new">
              {/* Add your actual social media URLs below */}
              <a href="https://facebook.com/thirumagaldecors" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><span className="material-symbols-outlined">group</span></a>
              <a href="https://instagram.com/thirumagaldecors" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><span className="material-symbols-outlined">photo_camera</span></a>
              <a href="https://youtube.com/@thirumagaldecors" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><span className="material-symbols-outlined">play_circle</span></a>
            </div>
          </div>
          
          <div className="footer-grid-new">
            <div className="footer-info-col">
              <h4>{t('footer.contactTitle')}</h4>
              <p><span className="material-symbols-outlined footer-icon">location_on</span> Thirumagal Kalyan Store, Kavundapadi Main Road, Kalingarayanpalayam, Bhavani, Erode – 638301</p>
              <p><span className="material-symbols-outlined footer-icon">call</span> {t('contact.form.phone')} 1: +91 94887 30758</p>
              <p><span className="material-symbols-outlined footer-icon">call</span> {t('contact.form.phone')} 2: +91 98429 30758</p>
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

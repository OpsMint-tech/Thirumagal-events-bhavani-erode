import React from 'react';
import './Footer.css';
import logoImg from '../assets/logo.png';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-col brand-col">
                        <img src={logoImg} alt="Thirumagal Logo" className="footer-logo-img" />
                        <p className="footer-text">
                            {t('footer.desc')}
                        </p>
                        <div className="social-icons">
                            <a href="#" className="social-link"><span className="material-symbols-outlined">public</span></a>
                            <a href="#" className="social-link"><span className="material-symbols-outlined">photo_camera</span></a>
                            <a href="#" className="social-link"><span className="material-symbols-outlined">alternate_email</span></a>
                        </div>
                    </div>

                    <div className="footer-col links-col">
                        <h3>{t('footer.links')}</h3>
                        <ul>
                            <li><a href="#home">{t('nav.home')}</a></li>
                            <li><a href="#about">{t('nav.about')}</a></li>
                            <li><a href="#services">{t('nav.services')}</a></li>
                            <li><a href="#portfolio">{t('nav.portfolio')}</a></li>
                        </ul>
                    </div>

                    <div className="footer-col links-col">
                        <h3>{t('nav.services')}</h3>
                        <ul>
                            <li><a href="#shop">{t('nav.decorations')}</a></li>
                            <li><a href="#pages">Wedding Planning</a></li>
                            <li><a href="#services">Event Design</a></li>
                            <li><a href="#contact">Consultation</a></li>
                        </ul>
                    </div>

                    <div className="footer-col newsletter-col">
                        <h3>{t('footer.newsletter')}</h3>
                        <p className="footer-text">{t('footer.newsDesc')}</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder={t('footer.emailPlh')} />
                            <button type="submit"><span className="material-symbols-outlined">arrow_forward</span></button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Thirumagal Decor & Events. {t('footer.rights')}</p>
                    <p className="powered-by">Powered by <a href="https://opsmintech.com/" target="_blank" rel="noopener noreferrer">opsmintech.com</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

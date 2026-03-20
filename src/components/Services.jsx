import React from 'react';
import './Services.css';

import service1 from '../assets/floral decor01.webp';
import service2 from '../assets/Entertainemnt 01.webp';
import service3 from '../assets/Catering03.webp';
import service4 from '../assets/wed03.webp';
import logoImg from '../assets/logo.png';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
    const { t } = useLanguage();

    const servicesSet = [
        {
            id: '01',
            title: t('services.floral'),
            image: service1,
            link: '#contact'
        },
        {
            id: '02',
            title: t('services.ent'),
            image: service2,
            link: '#contact'
        },
        {
            id: '03',
            title: t('services.cat'),
            image: service3,
            link: '#contact'
        },
        {
            id: '04',
            title: t('services.photo'),
            image: service4,
            link: '#contact'
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="services-grid">
                {servicesSet.map((service) => (
                    <div key={service.id} className="service-card">
                        <div className="service-img-wrapper">
                            <img src={service.image} alt={service.title} loading="lazy" />
                            <div className="service-overlay"></div>
                        </div>
                        <div className="service-content">
                            <h3 className="service-title">{service.title}</h3>
                            <a href={service.link} className="service-arrow">
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </a>
                        </div>
                        <div className="service-header-info">
                            <span className="service-number">{service.id}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;

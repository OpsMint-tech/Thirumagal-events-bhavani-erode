import React from 'react';
import './Pricing.css';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing = () => {
    const { t } = useLanguage();

    const plans = [
        {
            title: t('pricing.p1.title'),
            price: '₹1,50,000',
            description: t('pricing.p1.desc'),
            features: [
                'Initial Consultation',
                'Vendor Selection & Negotiation',
                'Timeline Creation & Management',
                'Budget Tracking',
                'Day-of Coordination'
            ],
            icon: 'inventory'
        },
        {
            title: t('pricing.p2.title'),
            price: '₹75,000',
            description: t('pricing.p2.desc'),
            features: [
                'Initial Consultation',
                'Vendor Selection Assistance',
                'Timeline Creation & Management',
                'Budget Tracking',
                'Day-of Coordination'
            ],
            icon: 'people'
        },
        {
            title: t('pricing.p3.title'),
            price: '₹30,000',
            description: t('pricing.p3.desc'),
            features: [
                'Initial Consultation',
                'Vendor Selection Orientation',
                'Timeline Creation & Management',
                'Budget Tracking',
                'Day-of Coordination'
            ],
            icon: 'event_available'
        }
    ];

    return (
        <section id="pages" className="pricing-section">
            <div className="container">
                <div className="pricing-header">
                    <span className="section-subtitle-center">{t('pricing.subtitle')}</span>
                    <h2 className="section-title-center">{t('pricing.title')}</h2>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div key={index} className="pricing-card">
                            <div className="pricing-card-header">
                                <h3 className="plan-title">{plan.title}</h3>
                                <div className="plan-icon">
                                    <span className="material-symbols-outlined">{plan.icon}</span>
                                </div>
                            </div>

                            <p className="plan-description">{plan.description}</p>

                            <div className="plan-price">
                                {t('pricing.starting')} <span>{plan.price}</span>
                            </div>

                            <div className="plan-features-label">{t('pricing.label')}</div>
                            <ul className="plan-features">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <span className="material-symbols-outlined check-icon">check</span>
                                        {feature} {/* Features are short enough to stay in EN mostly, but could be items if needed */}
                                    </li>
                                ))}
                            </ul>

                            <button className="btn btn-primary plan-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                                {t('pricing.btn')} <span className="material-symbols-outlined icon-right">arrow_forward</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;

import React, { useState } from 'react';
import './FAQ.css';
import faqImg from '../assets/floral decor05.webp';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ = () => {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    const FAQData = [
        {
            question: t('faq.q1'),
            answer: t('faq.a1')
        },
        {
            question: t('faq.q2'),
            answer: t('faq.a2')
        },
        {
            question: t('faq.q3'),
            answer: t('faq.a3')
        },
        {
            question: t('faq.q4'),
            answer: t('faq.a4')
        }
    ];

    return (
        <section id="blog" className="faq-section">
            <div className="container">
                <div className="faq-grid">
                    <div className="faq-image-col">
                        <img src={faqImg} alt="Bride" className="faq-img" />
                    </div>
                    <div className="faq-content-col">
                        <span className="section-subtitle">{t('faq.subtitle')}</span>
                        <h2 className="section-title">{t('faq.title')}</h2>

                        <div className="faq-list">
                            {FAQData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="faq-question">
                                        <h3>{item.question}</h3>
                                        <span className="material-symbols-outlined faq-icon">
                                            {activeIndex === index ? 'north_east' : 'arrow_forward'}
                                        </span>
                                    </div>
                                    <div className="faq-answer">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

import React, { useState } from 'react';
import './FAQ.css';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: t('faq.list.q1.q'),
      answer: t('faq.list.q1.a')
    },
    {
      question: t('faq.list.q2.q'),
      answer: t('faq.list.q2.a')
    },
    {
      question: t('faq.list.q3.q'),
      answer: t('faq.list.q3.a')
    },
    {
      question: t('faq.list.q4.q'),
      answer: t('faq.list.q4.a')
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-head">
          <span className="section-label">{t('faq.label')}</span>
          <h2 className="section-title">{t('faq.title')}</h2>
        </div>
        
        <div className="faq-container-new">
          {faqData.map((item, index) => (
            <div key={index} className={`faq-item-new ${activeIndex === index ? 'active' : ''}`}>
              <button className="faq-question-new" onClick={() => toggleAccordion(index)}>
                <h3>{item.question}</h3>
                <i className={`fa-solid ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
              </button>
              <div className="faq-answer-new">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

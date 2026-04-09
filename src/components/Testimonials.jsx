import React from 'react';
import './Testimonials.css';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  const reviews = [
    {
      name: t('testimonials.list.r1.name'),
      location: t('testimonials.list.r1.loc'),
      event: t('testimonials.list.r1.event'),
      text: t('testimonials.list.r1.text'),
      rating: 5
    },
    {
      name: t('testimonials.list.r2.name'),
      location: t('testimonials.list.r2.loc'),
      event: t('testimonials.list.r2.event'),
      text: t('testimonials.list.r2.text'),
      rating: 5
    },
    {
      name: t('testimonials.list.r3.name'),
      location: t('testimonials.list.r3.loc'),
      event: t('testimonials.list.r3.event'),
      text: t('testimonials.list.r3.text'),
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-head">
          <span className="section-label">{t('testimonials.label')}</span>
          <h2 className="section-title">{t('testimonials.title')}</h2>
        </div>
        
        <div className="testimonials-grid-new">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card-new fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="rating">
                {[...Array(review.rating)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>
              <p className="testimonial-text-new">"{review.text}"</p>
              <div className="testimonial-meta">
                <h4 className="client-name">{review.name}</h4>
                <p className="client-info">{review.event} · {review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React, { useState } from 'react';
import './Contact.css';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare WhatsApp message
    const whatsappMessage = `Hello, I would like to book a decoration.%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Event:* ${formData.eventType}%0A` +
      `*Date:* ${formData.eventDate}%0A` +
      `*Location:* ${formData.location}%0A` +
      `*Message:* ${formData.message}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/919842930758?text=${whatsappMessage}`, '_blank');
    
    // Set success state
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      eventType: '',
      eventDate: '',
      location: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-head">
          <span className="section-label">{t('contact.label')}</span>
          <h2 className="section-title">{t('contact.title')}</h2>
        </div>
        
        <div className="contact-grid-new">
          <div className="contact-form-side fade-in">
            {!isSubmitted ? (
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>{t('contact.form.name')}</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder={t('contact.form.namePlh')} />
                  </div>
                  <div className="form-group">
                    <label>{t('contact.form.phone')}</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder={t('contact.form.phonePlh')} />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>{t('contact.form.eventType')}</label>
                    <select name="eventType" required value={formData.eventType} onChange={handleChange}>
                      <option value="">{t('contact.form.selectEvent')}</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Reception">Reception</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Engagement">Engagement</option>
                      <option value="Corporate">Corporate</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>{t('contact.form.eventDate')}</label>
                    <input type="date" name="eventDate" required value={formData.eventDate} onChange={handleChange} />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>{t('contact.form.location')}</label>
                  <input type="text" name="location" required value={formData.location} onChange={handleChange} placeholder={t('contact.form.locPlh')} />
                </div>
                
                <div className="form-group">
                  <label>{t('contact.form.message')}</label>
                  <textarea name="message" rows="4" value={formData.message} onChange={handleChange} placeholder={t('contact.form.msgPlh')}></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary w-100">{t('contact.form.submit')}</button>
              </form>
            ) : (
              <div className="form-success-state fade-in">
                <i className="fa-solid fa-circle-check"></i>
                <h3>{t('contact.info.successTitle')}</h3>
                <p>{t('contact.info.successMsg')}</p>
                <button className="btn btn-outline" onClick={() => setIsSubmitted(false)}>
                  {language === 'en' ? 'Send Another Inquiry' : 'மீண்டும் அனுப்ப'}
                </button>
              </div>
            )}
          </div>
          
          <div className="contact-info-side fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="info-cards">
              <div className="info-card">
                <i className="fa-solid fa-phone"></i>
                <div className="info-details">
                  <h4>{t('contact.info.call')}</h4>
                  <a href="tel:+919842930758">+91 98429 30758</a>
                  <a href="tel:+919488730758">+91 94887 30758</a>
                </div>
              </div>
              
              <div className="info-card">
                <i className="fa-brands fa-whatsapp"></i>
                <div className="info-details">
                  <h4>{t('contact.info.whatsapp')}</h4>
                  <a href="https://wa.me/919842930758" target="_blank" rel="noopener noreferrer">{t('contact.info.chat')}</a>
                </div>
              </div>
              
              <div className="info-card">
                <i className="fa-solid fa-location-dot"></i>
                <div className="info-details">
                  <h4>{t('contact.info.visit')}</h4>
                  <p>6/186, Kavundapadi Main Road, Kalingarayanpalayam, Bhavani, Erode - 638301</p>
                  <a 
                    href="https://www.google.com/maps/dir//6/186,+Kavundapadi+Main+Road,+Kalingarayanpalayam,+Bhavani,+Erode+-+638301/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="directions-link"
                  >
                    <i className="fa-solid fa-diamond-turn-right" style={{ marginRight: '5px' }}></i>
                    {t('contact.info.getDirections')}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15647.962007812161!2d77.67499999999998!3d11.439999999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9198357be8d1d%3A0x8f7f502c3427357c!2sBhavani%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1712648000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                title="Business Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;


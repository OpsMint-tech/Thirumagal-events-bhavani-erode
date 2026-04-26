import React, { useState } from 'react';
import './Contact.css';
import { useLanguage } from '../contexts/LanguageContext';
import { openWhatsApp } from '../utils/whatsapp';

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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };
    
    // Restrict Name to only alphabets and spaces
    if (name === 'name') {
      if (value !== '' && !/^[a-zA-Z\s]*$/.test(value)) {
        newErrors.name = language === 'en' ? 'Name should only contain letters' : 'பெயர் எழுத்துக்களை மட்டுமே கொண்டிருக்க வேண்டும்';
        setErrors(newErrors);
        return;
      } else {
        delete newErrors.name;
      }
    }
    
    // Restrict Phone to 10 digits
    if (name === 'phone') {
      const onlyNums = value.replace(/\D/g, '');
      if (onlyNums.length > 10) return;
      
      if (onlyNums.length > 0 && onlyNums.length < 10) {
        newErrors.phone = language === 'en' ? 'Phone must be 10 digits' : 'தொலைபேசி எண் 10 இலக்கங்களாக இருக்க வேண்டும்';
      } else {
        delete newErrors.phone;
      }
      setErrors(newErrors);
      setFormData({ ...formData, [name]: onlyNums });
      return;
    }

    setErrors(newErrors);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Final validation check
    if (formData.phone.length !== 10) {
      setErrors({ ...errors, phone: language === 'en' ? 'Phone must be 10 digits' : 'தொலைபேசி எண் 10 இலக்கங்களாக இருக்க வேண்டும்' });
      return;
    }

    if (Object.keys(errors).length > 0) return;

    // Validate date range (prevent years like 275760)
    const selectedYear = new Date(formData.eventDate).getFullYear();
    const currentYear = new Date().getFullYear();
    if (selectedYear > currentYear + 5) {
      setErrors({ ...errors, eventDate: language === 'en' ? 'Please select a valid date' : 'செல்லுபடியாகும் தேதியைத் தேர்ந்தெடுக்கவும்' });
      return;
    }

    // Prepare WhatsApp message
    const whatsappMessage = `Hello, I would like to book a decoration.%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Event:* ${formData.eventType}%0A` +
      `*Date:* ${formData.eventDate}%0A` +
      `*Location:* ${formData.location}%0A` +
      `*Message:* ${formData.message}`;
    
    // Open WhatsApp using utility
    openWhatsApp(whatsappMessage);
    
    // Show success alert
    window.alert(language === 'en' ? 'Your enquiry has been sent successfully!' : 'உங்கள் விசாரணை வெற்றிகரமாக அனுப்பப்பட்டது!');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      eventType: '',
      eventDate: '',
      location: '',
      message: ''
    });
    setErrors({});
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
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>{t('contact.form.name')}</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder={t('contact.form.namePlh')} className={`form-input-premium ${errors.name ? 'input-error' : ''}`} />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label>{t('contact.form.phone')}</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder={t('contact.form.phonePlh')} className={`form-input-premium ${errors.phone ? 'input-error' : ''}`} />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>{t('contact.form.eventType')}</label>
                  <select name="eventType" required value={formData.eventType} onChange={handleChange} className="form-input-premium">
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
                  <input 
                    type="date" 
                    name="eventDate" 
                    required 
                    value={formData.eventDate} 
                    onChange={handleChange} 
                    min={new Date().toISOString().split('T')[0]}
                    max={new Date(new Date().setFullYear(new Date().getFullYear() + 5)).toISOString().split('T')[0]}
                    className={`form-input-premium ${errors.eventDate ? 'input-error' : ''}`}
                    onKeyDown={(e) => e.preventDefault()}
                    onClick={(e) => e.target.showPicker && e.target.showPicker()}
                  />
                  {errors.eventDate && <span className="error-text">{errors.eventDate}</span>}
                </div>
              </div>
              
              <div className="form-group">
                <label>{t('contact.form.location')}</label>
                <input type="text" name="location" required value={formData.location} onChange={handleChange} placeholder={t('contact.form.locPlh')} className="form-input-premium" />
              </div>
              
              <div className="form-group">
                <label>{t('contact.form.message')}</label>
                <textarea name="message" rows="4" value={formData.message} onChange={handleChange} placeholder={t('contact.form.msgPlh')} className="form-input-premium"></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-100 shimmer-btn" style={{ height: '60px', borderRadius: '12px' }}>{t('contact.form.submit')}</button>
            </form>
          </div>
          
          <div className="contact-info-side fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="info-cards">
              <div className="info-card glass-icon-card">
                <span className="material-symbols-outlined">call</span>
                <div className="info-details">
                  <h4>{t('contact.info.call')}</h4>
                  <a href="tel:+919488730758">+91 94887 30758</a>
                  <a href="tel:+919842930758">+91 98429 30758</a>
                </div>
              </div>
              
              <div className="info-card glass-icon-card">
                <span className="material-symbols-outlined">chat</span>
                <div className="info-details">
                  <h4>{t('contact.info.whatsapp')}</h4>
                  <button 
                    onClick={() => openWhatsApp(t('contact.info.whatsappDefault'))} 
                    className="info-link-btn"
                  >
                    {t('contact.info.chat')}
                  </button>
                </div>
              </div>
              
              <div className="info-card glass-icon-card">
                <span className="material-symbols-outlined">location_on</span>
                <div className="info-details">
                  <h4>{t('contact.info.visit')}</h4>
                  <p>Thirumagal Kalyan Store, Kavundapadi Main Road, Kalingarayanpalayam, Bhavani, Erode - 638301</p>
                  <a 
                    href="https://maps.app.goo.gl/G1Zoyz1o8MktSym3A" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="directions-link"
                  >
                    <span className="material-symbols-outlined" style={{ marginRight: '5px', fontSize: '18px' }}>directions</span>
                    {t('contact.info.getDirections')}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.594592293678!2d77.6762926!3d11.436943299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba969dd89a6a3e7%3A0xbea0ea6abc04369d!2sThirumagal%20Kalyan%20Store!5e0!3m2!1sen!2sin!4v1777101769048!5m2!1sen!2sin"
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


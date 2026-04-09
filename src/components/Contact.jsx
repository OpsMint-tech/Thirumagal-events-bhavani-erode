import React, { useState } from 'react';
import './Contact.css';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();
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
    // Keep WhatsApp message in English as requested by user
    const whatsappMessage = `Hello, I would like to book a decoration.%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Event:* ${formData.eventType}%0A` +
      `*Date:* ${formData.eventDate}%0A` +
      `*Location:* ${formData.location}%0A` +
      `*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/919842930758?text=${whatsappMessage}`, '_blank');
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
                    {language === 'en' ? 'Get Directions' : 'திசை அறிக்கை'}
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


// import React, { useState } from 'react';
// import './Contact.css';
// import { useLanguage } from '../contexts/LanguageContext';

// const Contact = () => {
//     const { t } = useLanguage();

//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         address: '',
//         eventType: '',
//         message: ''
//     });

//     const [success, setSuccess] = useState(false);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     // const handleSubmit = (e) => {
//     //     e.preventDefault();

//     //     // ✅ Client-side success only
//     //     setSuccess(true);

//     //     // Reset form
//     //     setFormData({
//     //         name: '',
//     //         email: '',
//     //         phone: '',
//     //         address: '',
//     //         eventType: '',
//     //         message: ''
//     //     });

//     //     // Hide success message after 2 seconds
//     //     setTimeout(() => {
//     //         setSuccess(false);
//     //     }, 2000);
//     // };
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const message = `
// New Event Inquiry from Website

// Name: ${formData.name}
// Email: ${formData.email}
// Phone: ${formData.phone}
// Address: ${formData.address}
// Event Type: ${formData.eventType}
// Message: ${formData.message}
//     `;

//         const encodedMessage = encodeURIComponent(message);

//         const whatsappUrl = `https://wa.me/919488730758?text=${encodedMessage}`;

//         // ✅ Open WhatsApp (REQUIRED to send message)
//         window.open(whatsappUrl, '_blank');

//         // Show success message
//         setSuccess(true);

//         // Reset form
//         setFormData({
//             name: '',
//             email: '',
//             phone: '',
//             address: '',
//             eventType: '',
//             message: ''
//         });

//         // Hide success message after 2 seconds
//         setTimeout(() => {
//             setSuccess(false);
//         }, 2000);
//     };

//     return (
//         <section id="contact" className="contact-section">
//             <div className="container">
//                 <div className="contact-grid">

//                     <div className="contact-info">
//                         <span className="section-subtitle">{t('contact.subtitle')}</span>
//                         <h2 className="section-title">{t('contact.title')}</h2>
//                         <p className="contact-description">
//                             {t('contact.desc')}
//                         </p>
//                     </div>

//                     <div className="contact-form-wrapper">

//                         {success && (
//                             <p className="success-message">
//                                 ✅ Your message has been submitted successfully!
//                             </p>
//                         )}

//                         <form className="contact-form" onSubmit={handleSubmit}>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder={t('contact.name')}
//                                 required
//                                 value={formData.name}
//                                 onChange={handleInputChange}
//                             />

//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder={t('contact.emailPlh')}
//                                 required
//                                 value={formData.email}
//                                 onChange={handleInputChange}
//                             />

//                             <input
//                                 type="tel"
//                                 name="phone"
//                                 placeholder={t('contact.phone')}
//                                 required
//                                 value={formData.phone}
//                                 onChange={handleInputChange}
//                             />

//                             <input
//                                 type="text"
//                                 name="address"
//                                 placeholder={t('contact.address')}
//                                 required
//                                 value={formData.address}
//                                 onChange={handleInputChange}
//                             />

//                             <select
//                                 name="eventType"
//                                 required
//                                 value={formData.eventType}
//                                 onChange={handleInputChange}
//                             >
//                                 <option value="" disabled>
//                                     {t('contact.eventType')}
//                                 </option>
//                                 <option value="Wedding">{t('contact.wedding')}</option>
//                                 <option value="Corporate">{t('contact.corporate')}</option>
//                                 <option value="Birthday">{t('contact.birthday')}</option>
//                                 <option value="Other">{t('contact.other')}</option>
//                             </select>

//                             <textarea
//                                 name="message"
//                                 placeholder={t('contact.msg')}
//                                 required
//                                 value={formData.message}
//                                 onChange={handleInputChange}
//                             />

//                             <button type="submit" className="btn btn-primary">
//                                 {t('contact.sendBtn')}
//                             </button>
//                         </form>

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;

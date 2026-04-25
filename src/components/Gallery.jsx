import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { useLanguage } from '../contexts/LanguageContext';

import stage01 from '../assets/Stage01.webp';
import stage02 from '../assets/Stage02.webp';
import stage03 from '../assets/Stage03.webp';
import stage04 from '../assets/Stage04.webp';
import stage05 from '../assets/Stage05.webp';
import stage06 from '../assets/Stage06.webp';
import stage07 from '../assets/Stage07.webp';
import stage08 from '../assets/Stage08.webp';
import stage09 from '../assets/Stage09.webp';
import stage11 from '../assets/Stage11.webp';
import stage12 from '../assets/Stage12.webp';
import stage13 from '../assets/Stage13.webp';
import stage14 from '../assets/Stage14.webp';
import stage16 from '../assets/Stage16.webp';
import stage17 from '../assets/Stage17.webp';
import stage18 from '../assets/Stage18.webp';
import stage19 from '../assets/Stage19.webp';
import stage20 from '../assets/Stage20.webp';
import floral01 from '../assets/floral decor01.webp';
import floral02 from '../assets/Floral decor02.webp';
import reception01 from '../assets/Reception01.webp';
import bday01 from '../assets/Bday01.webp';
import bday02 from '../assets/Bday02.webp';
import wedding01 from '../assets/Weds01.webp';

const Gallery = () => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1024) setItemsPerPage(6); // 3 cols * 2 rows
      else if (width > 600) setItemsPerPage(4); // 2 cols * 2 rows
      else setItemsPerPage(2); // 1 col * 2 rows
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const galleryImages = [
    { img: stage06, alt: 'Elegant stage decoration Bhavani' },
    { img: stage07, alt: 'Traditional wedding stage Erode' },
    { img: stage08, alt: 'Flower decoration for wedding stage' },
    { img: stage09, alt: 'Floral backdrop for events' },
    { img: stage11, alt: 'Stage decoration for corporate events' },
    { img: stage12, alt: 'Reception stage design Erode' },
    { img: stage01, alt: 'Grand wedding stage decoration in Bhavani by Thirumagal Decors' },
    { img: stage02, alt: 'Traditional floral stage setup in Erode' },
    { img: stage03, alt: 'Modern reception decoration Bhavani' },
    { img: stage04, alt: 'Premium wedding decor Erode district' },
    { img: reception01, alt: 'Reception stage with floral arches' },
    { img: stage05, alt: 'Grand stage setup Coimbatore' },
    { img: stage13, alt: 'Traditional event decor Bhavani' },
    { img: stage14, alt: 'Modern stage setup Erode' },
    { img: stage16, alt: 'Wedding reception decor Coimbatore' },
    { img: stage17, alt: 'Grand floral stage decoration' },
    { img: stage18, alt: 'Stage setup and decoration Erode' },
    { img: stage19, alt: 'Event decoration service Bhavani' },
    { img: stage20, alt: 'Premium wedding setup Tamil Nadu' },
    { img: bday01, alt: 'Creative birthday party decoration' },
    { img: bday02, alt: 'Birthday balloon decoration Bhavani' },
    { img: floral01, alt: 'Entrance floral decoration' },
    { img: floral02, alt: 'Premium table floral arrangements' },
    { img: wedding01, alt: 'Wedding hall decoration by Thirumagal' }
  ];

  const totalPages = Math.ceil(galleryImages.length / itemsPerPage);
  const currentImages = galleryImages.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-head">
          <span className="section-label">{t('gallery.label')}</span>
          <h2 className="section-title">{t('gallery.title')}</h2>
        </div>
        
        <div className="gallery-grid-new">
          {currentImages.map((item, index) => (
            <div key={index + currentPage * itemsPerPage} className="gallery-item-new fade-in">
              <img src={item.img} alt={item.alt} loading="lazy" />
              <div className="gallery-hover-overlay">
                <span className="gallery-view-text">{t('gallery.hover')}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-controls">
          <button 
            className="gallery-nav-btn" 
            onClick={prevPage} 
            disabled={currentPage === 0}
            aria-label="Previous Page"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="gallery-pagination-dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <span 
                key={i} 
                className={`dot ${i === currentPage ? 'active' : ''}`}
                onClick={() => setCurrentPage(i)}
                role="button"
                aria-label={`Go to gallery page ${i + 1}`}
                aria-current={i === currentPage ? 'page' : undefined}
              ></span>
            ))}
          </div>
          <button 
            className="gallery-nav-btn" 
            onClick={nextPage} 
            disabled={currentPage === totalPages - 1}
            aria-label="Next Page"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

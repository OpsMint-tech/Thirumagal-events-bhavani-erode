import React, { useState } from 'react';
import './Gallery.css';
import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';
import gallery3 from '../assets/gallery-3.jpg';
import gallery4 from '../assets/gallery-4.jpg';
import decorWedding from '../assets/decor-wedding.jpg';
import decorBirthday from '../assets/decor-birthday.jpg';
import decorCorporate from '../assets/decor-corporate.jpg';
import decorHousewarming from '../assets/decor-housewarming.jpg';
import decorEngagement from '../assets/decor-engagement.jpg';
import eventCouple from '../assets/event-couple.jpg';
import decorStage from '../assets/decor-stage.jpg';
import decorEntrance from '../assets/decor-entrance.jpg';
import decorBalloon from '../assets/decor-balloon.jpg';
import decorGarland from '../assets/decor-garland.jpg';
import decorPuberty from '../assets/decor-puberty.jpg';
import eventCake from '../assets/event-cake.jpg';
import service1 from '../assets/service-1.jpg';
import service2 from '../assets/service-2.jpg';
import service3 from '../assets/service-3.jpg';
import service4 from '../assets/service-4.jpg';

// Newly identified assets
import weddingImg1 from '../assets/wedding.jpeg';
import weddingImg2 from '../assets/wedding2.jpeg';
import weddingImg3 from '../assets/wedding3.jpeg';
import weddingImg4 from '../assets/wedding4.jpeg';
import weddingImg5 from '../assets/wedding5.jpeg';

import engagementImg1 from '../assets/engagement.jpeg';
import engagementImg2 from '../assets/engagement1.jpeg';
import engagementImg3 from '../assets/engagement2.jpeg';
import engagementImg4 from '../assets/engagement3.jpeg';
import engagementImg5 from '../assets/engagement4.jpeg';
import engagementImg6 from '../assets/stage5.jpeg';
import engagementImg7 from '../assets/stage6.jpeg';
import engagementImg8 from '../assets/stage7.jpeg';
import engagementImg9 from '../assets/stage8.jpeg';
import engagementImg10 from '../assets/stage9.jpeg';
import engagementImg11 from '../assets/stage10.jpeg';





import birthdayImg1 from '../assets/birthday.png';
import birthdayImg2 from '../assets/birthday.jpeg';
import birthdayImg3 from '../assets/birthday1.jpeg';


import { useLanguage } from '../contexts/LanguageContext';

const Gallery = () => {
    const { t } = useLanguage();
    const [filter, setFilter] = useState('all');
    const [visibleCount, setVisibleCount] = useState(8);

    const portfolioItems = [

        { id: 4, img: gallery4, category: 'birthday' },


        { id: 10, img: eventCouple, category: 'wedding' },
        { id: 14, img: decorGarland, category: 'wedding' },
        { id: 15, img: decorPuberty, category: 'event' },

        { id: 17, img: service1, category: 'wedding' },

        { id: 21, img: weddingImg1, category: 'wedding' },
        { id: 22, img: weddingImg2, category: 'wedding' },
        { id: 25, img: weddingImg5, category: 'wedding' },
        { id: 26, img: engagementImg1, category: 'stage decoration' },
        { id: 27, img: engagementImg2, category: 'stage decoration' },
        { id: 28, img: engagementImg3, category: 'stage decoration' },
        { id: 29, img: engagementImg4, category: 'stage decoration' },
        { id: 30, img: engagementImg5, category: 'stage decoration' },

        { id: 31, img: engagementImg6, category: 'stage decoration' },
        { id: 32, img: engagementImg7, category: 'stage decoration' },
        { id: 33, img: engagementImg8, category: 'stage decoration' },
        { id: 34, img: engagementImg9, category: 'stage decoration' },
        { id: 35, img: engagementImg10, category: 'stage decoration' },
        { id: 36, img: engagementImg11, category: 'stage decoration' },

        { id: 38, img: birthdayImg2, category: 'birthday' },
        { id: 39, img: birthdayImg3, category: 'birthday' },

    ];

    const categories = [
        { id: 'all', label: t('gallery.filter.all') || 'All' },
        { id: 'wedding', label: t('gallery.filter.wedding') || 'Wedding' },
        { id: 'stage decoration', label: t('gallery.filter.engagement') || 'stage decoration' },
        { id: 'birthday', label: t('gallery.filter.birthday') || 'Birthday' },

    ];

    const filteredItems = filter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === filter);

    const handleViewMore = () => {
        setVisibleCount(prevCount => Math.min(prevCount + 8, filteredItems.length));
    };

    const handleViewAll = () => {
        setVisibleCount(filteredItems.length);
    };

    const handleViewLess = () => {
        setVisibleCount(8);
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section id="portfolio" className="gallery-section">
            <div className="container">
                <div className="gallery-header">
                    <span className="section-subtitle-center">{t('gallery.subtitle')}</span>
                    <h2 className="section-title-center">{t('gallery.title')}</h2>
                </div>

                <div className="gallery-filters">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                            onClick={() => {
                                setFilter(cat.id);
                                setVisibleCount(8);
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="gallery-grid">
                    {filteredItems.slice(0, visibleCount).map((item) => (
                        <div key={item.id} className="gallery-item">
                            <img src={item.img} alt={`Gallery ${item.id}`} loading="lazy" />
                            <div className="gallery-overlay">
                                <span className="category-label">{item.category}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="gallery-actions">
                    {visibleCount < filteredItems.length && (
                        <>
                            <button className="view-more-btn" onClick={handleViewMore}>
                                {t('gallery.viewMore') || 'View More'}
                                <span className="material-symbols-outlined">expand_more</span>
                            </button>

                        </>
                    )}
                    {visibleCount > 8 && (
                        <button className="view-less-btn" onClick={handleViewLess}>
                            {t('gallery.viewLess') || 'View Less'}
                            <span className="material-symbols-outlined">expand_less</span>
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Gallery;

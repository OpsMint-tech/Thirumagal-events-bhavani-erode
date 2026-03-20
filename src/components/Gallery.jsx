import React, { useState, useEffect, useRef } from 'react';
import './Gallery.css';
// import eventCouple from '../assets/event-couple.jpg';
// import decorGarland from '../assets/decor-garland.jpg';
// import decorPuberty from '../assets/decor-puberty.jpg';
import weds01 from '../assets/Weds01.jpg';
import weds02 from '../assets/weds02.webp';
import floral01 from '../assets/floral decor01.webp';
import floral02 from '../assets/Floral decor02.webp';
import floral04 from '../assets/floral decor04.webp';
import floral05 from '../assets/floral decor05.webp';
import floral06 from '../assets/floral decor06.webp';
import wed03 from '../assets/wed03.jpg';


import stage01 from '../assets/Stage01.webp';
import stage02 from '../assets/Stage02.webp';
import stage03 from '../assets/Stage03.webp';
import stage04 from '../assets/Stage04.webp';
import stage05 from '../assets/Stage05.webp';
import stage06 from '../assets/Stage06.webp';
import stage07 from '../assets/Stage07.webp';
import stage08 from '../assets/Stage08.webp';
import stage09 from '../assets/Stage09.webp';
// import stage10 from '../assets/stage10.webp';
import stage11 from '../assets/Stage11.webp';
import stage12 from '../assets/Stage12.webp';
import stage13 from '../assets/Stage13.webp';
import stage14 from '../assets/Stage14.webp';
import stage16 from '../assets/Stage16.webp';
import stage17 from '../assets/Stage17.webp';
import stage18 from '../assets/Stage18.webp';
import stage19 from '../assets/Stage19.webp';
import stage20 from '../assets/Stage20.webp';
import reception01 from '../assets/Reception01.webp';

import bday01 from '../assets/Bday01.webp';
import bday02 from '../assets/Bday02.webp';
import balloon01 from '../assets/Balloon01.webp';

import { useLanguage } from '../contexts/LanguageContext';

const Gallery = () => {
    const { t } = useLanguage();
    const [filter, setFilter] = useState('all');

    const portfolioItems = [
        { id: 301, img: bday01, category: 'birthday' },
        { id: 302, img: bday02, category: 'birthday' },
        { id: 303, img: balloon01, category: 'birthday' },
        // { id: 10, img: eventCouple, category: 'wedding' },
        // { id: 14, img: decorGarland, category: 'wedding' },
        // { id: 15, img: decorPuberty, category: 'event' },
        { id: 401, img: weds01, category: 'wedding' },
        { id: 402, img: weds02, category: 'wedding' },
        { id: 403, img: floral01, category: 'wedding' },
        { id: 404, img: floral02, category: 'wedding' },
        { id: 405, img: floral04, category: 'wedding' },
        { id: 406, img: floral05, category: 'wedding' },
        { id: 407, img: floral06, category: 'wedding' },
        { id: 408, img: wed03, category: 'wedding' },


        { id: 201, img: stage01, category: 'stage decoration' },
        { id: 202, img: stage02, category: 'stage decoration' },
        { id: 203, img: stage03, category: 'stage decoration' },
        { id: 204, img: stage04, category: 'stage decoration' },
        { id: 205, img: stage05, category: 'stage decoration' },
        { id: 206, img: stage06, category: 'stage decoration' },
        { id: 207, img: stage07, category: 'stage decoration' },
        { id: 208, img: stage08, category: 'stage decoration' },
        { id: 209, img: stage09, category: 'stage decoration' },
        // { id: 210, img: stage10, category: 'stage decoration' },
        { id: 211, img: stage11, category: 'stage decoration' },
        { id: 212, img: stage12, category: 'stage decoration' },
        { id: 213, img: stage13, category: 'stage decoration' },
        { id: 214, img: stage14, category: 'stage decoration' },
        { id: 216, img: stage16, category: 'stage decoration' },
        { id: 217, img: stage17, category: 'stage decoration' },
        { id: 218, img: stage18, category: 'stage decoration' },
        { id: 219, img: stage19, category: 'stage decoration' },
        { id: 220, img: stage20, category: 'stage decoration' },
        { id: 221, img: reception01, category: 'stage decoration' },
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

    const [shuffledItems, setShuffledItems] = useState([]);
    const isScrollingRef = useRef(false);
    const scrollTimeoutRef = useRef(null);

    const handleScroll = () => {
        isScrollingRef.current = true;
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
            isScrollingRef.current = false;
        }, 1500); // Resume 1.5 seconds after scroll stops
    };

    useEffect(() => {
        // Use capture: true to catch all scroll events from children as well
        window.addEventListener('scroll', handleScroll, true);
        window.addEventListener('wheel', handleScroll, { passive: true });
        window.addEventListener('touchmove', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll, true);
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchmove', handleScroll);
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        };
    }, []);

    useEffect(() => {
        const shuffleArray = (array) => {
            return [...array].sort(() => Math.random() - 0.5);
        };
        
        // Initial shuffle when filter changes
        setShuffledItems(shuffleArray(filteredItems));

        // Setup interval to shuffle every 2 seconds
        const intervalId = setInterval(() => {
            if (!isScrollingRef.current) {
                setShuffledItems(prev => shuffleArray(prev));
            }
        }, 2000);

        return () => clearInterval(intervalId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter]); // Re-run effect when filter changes to refresh items and reset interval

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
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="gallery-grid" onScroll={handleScroll}>
                    {shuffledItems.map((item) => (
                        <div key={item.id} className="gallery-item">
                            <img src={item.img} alt={`Gallery ${item.id}`} loading="lazy" />
                            <div className="gallery-overlay">
                                <span className="category-label">{item.category}</span>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Gallery;

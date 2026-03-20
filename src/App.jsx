import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventTypes from './components/EventTypes';
import Services from './components/Services';
import FloatingButtons from './components/FloatingButtons';

// Lazy load components below the fold
const ServiceCarousel = lazy(() => import('./components/ServiceCarousel'));
const CTA = lazy(() => import('./components/CTA'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const Gallery = lazy(() => import('./components/Gallery'));
const FAQ = lazy(() => import('./components/FAQ'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Pricing = lazy(() => import('./components/Pricing'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingFallback = () => (
  <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#13B5A1' }}>
    <div className="loading-spinner">Loading...</div>
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <EventTypes />
      <Services />
      <Suspense fallback={<LoadingFallback />}>
        <ServiceCarousel />
        <CTA />
        <AboutUs />
        <Gallery />
        <FAQ />
        <Testimonials />
        <Pricing />
        <Contact />
        <Footer />
      </Suspense>
      <FloatingButtons />
    </>
  )
}

export default App

import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import FloatingButtons from './components/FloatingButtons';

// Lazy load components below the fold for performance
const Gallery = lazy(() => import('./components/Gallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingFallback = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <div className="loading-text">Thirumagal <span style={{ color: 'var(--color-gold)' }}>Kalyan</span></div>
  </div>
);

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <Suspense fallback={<LoadingFallback />}>
          <Gallery />
          <Testimonials />
          <FAQ />
          <Contact />
          <Footer />
        </Suspense>
      </main>
      <FloatingButtons />
    </div>
  )
}

export default App

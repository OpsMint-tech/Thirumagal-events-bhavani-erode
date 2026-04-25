import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
<<<<<<< HEAD
import AboutUs from './components/AboutUs';
=======
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
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
<<<<<<< HEAD
    <div className="loading-text">Thirumagal <span style={{ color: 'var(--color-gold)' }}>Kalyan</span></div>
=======
    <div className="loading-text">Thirumagal</div>
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
  </div>
);

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
<<<<<<< HEAD
        <AboutUs />
=======
>>>>>>> 7ad400d73668294f9adc2b2ee35117ef984e9a1b
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

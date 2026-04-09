import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import FloatingButtons from './components/FloatingButtons';

// Lazy load components below the fold for performance
const Gallery = lazy(() => import('./components/Gallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingFallback = () => (
  <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c9972c' }}>
    <div className="loading-spinner">Loading...</div>
  </div>
);

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
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

import React from 'react';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { Testimonials } from './components/sections/Testimonials';
import { Pricing } from './components/sections/Pricing';
import { CTA } from './components/sections/CTA';
import { BookingForm } from './components/sections/BookingForm';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div style={{ backgroundColor: 'var(--color-brand-bg)', minHeight: '100vh', overflowX: 'hidden' }}>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <CTA />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;

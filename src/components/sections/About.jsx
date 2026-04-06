import React from 'react';
import { Button } from '../ui/Button';

export function About() {
  return (
    <section id="about" className="w-full" style={{ backgroundColor: 'var(--color-brand-bg)' }}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-28 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left text — spans 5 cols */}
          <div className="lg:col-span-5 flex flex-col order-2 lg:order-1">
            <span className="text-xs uppercase tracking-widest mb-6 font-semibold" style={{ color: 'var(--color-brand-gold)', letterSpacing: '0.25em' }}>
              Our Identity
            </span>
            <span className="gold-rule mb-10" />

            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-10 leading-tight"
              style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--color-brand-text)' }}>
              Elevating<br />
              <em style={{ color: 'var(--color-brand-gold)', fontWeight: 400 }}>Personal</em> Style
            </h2>

            <div className="mb-10" style={{ color: 'rgba(26,26,26,0.72)', lineHeight: 1.9, fontSize: '1.05rem' }}>
              <p style={{ fontSize: '1.1rem' }}>
                <span style={{
                  float: 'left', fontSize: '5rem',
                  fontFamily: 'var(--font-family-serif)', lineHeight: 0.75,
                  marginRight: '0.2em', marginTop: '0.1em',
                  color: 'var(--color-brand-text)'
                }}>S</span>
                ahil Hair Expert is not merely a salon — it is an institution of personal identity. Established in 2018 in the heart of Karnal, we have redefined what luxury grooming means in Haryana.
              </p>
              <p className="mt-5">
                Our philosophy marries classical barbering heritage with avant-garde styling, ensuring every look is a bespoke masterpiece — tailored to your features, your aspirations, your life.
              </p>
            </div>

            <div style={{ borderTop: '1px solid rgba(26,26,26,0.1)', paddingTop: '2rem' }} className="flex gap-12">
              {[{ n: '8+', l: 'Years of Excellence' }, { n: '5K+', l: 'Clients Served' }, { n: '100%', l: 'Premium Products' }].map(s => (
                <div key={s.l}>
                  <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--color-brand-text)' }}>{s.n}</div>
                  <div className="text-xs uppercase tracking-widest" style={{ color: 'rgba(26,26,26,0.5)', letterSpacing: '0.15em' }}>{s.l}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button variant="outline">Discover Our Method</Button>
            </div>
          </div>

          {/* Right image — spans 7 cols */}
          <div className="lg:col-span-7 order-1 lg:order-2 group overflow-hidden" style={{ height: '640px' }}>
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=90"
              alt="Stylist at work"
              className="luxury-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

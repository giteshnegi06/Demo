import React from 'react';
import { Button } from '../ui/Button';

export function CTA() {
  return (
    <section
      id="cta"
      style={{ backgroundColor: 'var(--color-brand-text)', borderTop: '1px solid rgba(249,248,246,0.06)' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-36 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16">

          {/* Large statement */}
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-widest font-semibold mb-6 block" style={{ color: 'var(--color-brand-gold)', letterSpacing: '0.25em' }}>
              The Next Step
            </span>
            <h2
              className="text-6xl md:text-8xl lg:text-9xl leading-none"
              style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--color-brand-bg)', lineHeight: 1.05 }}
            >
              Your Look.<br />
              <em style={{ color: 'var(--color-brand-gold)', fontWeight: 300 }}>Your Identity.</em>
            </h2>
          </div>

          {/* Right side CTA */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <p
              className="text-base font-light leading-relaxed"
              style={{ color: 'rgba(249,248,246,0.5)', lineHeight: 1.9 }}
            >
              Step into Sahil Hair Expert and experience grooming elevated to an art form. Your transformation begins with a single appointment.
            </p>
            <div className="flex flex-col gap-4">
              <a href="#booking" style={{ display: 'block' }}>
                <Button variant="primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Book Your Session
                </Button>
              </a>
              <a
                href="tel:+919876543210"
                className="text-center text-xs uppercase tracking-widest py-4 transition-colors duration-300"
                style={{ color: 'rgba(249,248,246,0.4)', letterSpacing: '0.2em', borderBottom: '1px solid rgba(249,248,246,0.1)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-brand-gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(249,248,246,0.4)'}
              >
                Or call: +91 98765 43210
              </a>
            </div>

            {/* Decorative vertical lines */}
            <div className="hidden lg:flex gap-3 pt-6">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '1px',
                    height: `${40 + i * 16}px`,
                    backgroundColor: i === 0 ? 'var(--color-brand-gold)' : 'rgba(249,248,246,0.1)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

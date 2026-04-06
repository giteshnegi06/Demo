import React from 'react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
      style={{ backgroundColor: 'var(--color-brand-bg)' }}
    >
      {/* Background hero image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(60%) brightness(0.55)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.3) 60%, transparent 100%)' }} />
      </div>

      {/* Subtle vertical grid lines */}
      <div className="absolute inset-0 z-0 flex pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex-1 border-r" style={{ borderColor: 'rgba(249,248,246,0.05)' }} />
        ))}
      </div>

      {/* Top nav bar */}
      <div className="relative z-20 flex items-center justify-between px-8 md:px-16 py-8">
        <div>
          <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--color-brand-gold)', letterSpacing: '0.25em' }}>
            Sahil Hair Expert
          </p>
        </div>
        <nav className="hidden md:flex gap-10">
          {['Services', 'Portfolio', 'Pricing', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-widest transition-colors duration-300"
              style={{ color: 'rgba(249,248,246,0.7)', letterSpacing: '0.15em' }}
              onMouseEnter={e => e.target.style.color = 'var(--color-brand-gold)'}
              onMouseLeave={e => e.target.style.color = 'rgba(249,248,246,0.7)'}
            >{item}</a>
          ))}
        </nav>
      </div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-1 items-end pb-16 md:pb-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <span className="gold-rule mb-6" />
          <p className="text-xs uppercase tracking-widest mb-6 font-semibold" style={{ color: 'var(--color-brand-gold)', letterSpacing: '0.25em' }}>
            Premium Grooming Experience · Karnal
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl leading-none mb-10"
            style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--color-brand-bg)', lineHeight: 1.05 }}>
            Crafting<br />
            <em style={{ color: 'var(--color-brand-gold)', fontWeight: 300 }}>Signature</em><br />
            Looks.
          </h1>

          <p className="text-base font-light mb-10 max-w-md" style={{ color: 'rgba(249,248,246,0.65)', lineHeight: 1.8 }}>
            Where classical technique meets modern aesthetic — bespoke hair artistry and grooming since 2018.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary">Book Appointment</Button>
            <Button variant="ghost">View Services</Button>
          </div>
        </div>
      </div>

      {/* Vertical editorial text — right side */}
      <div className="absolute right-8 bottom-24 z-20 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-20" style={{ backgroundColor: 'rgba(249,248,246,0.2)' }} />
        <span className="vertical-text text-xs uppercase tracking-widest" style={{ color: 'rgba(249,248,246,0.4)', letterSpacing: '0.2em' }}>
          Since 2018 / Karnal, Haryana
        </span>
      </div>
    </section>
  );
}

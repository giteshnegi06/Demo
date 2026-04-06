import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Book Appointment', href: '#booking' },
];

// Inline Instagram SVG (not available in this version of lucide-react)
function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
      <rect x="2" y="2" width="20" height="20" rx="0" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-brand-bg)', borderTop: '1px solid rgba(26,26,26,0.1)' }}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 pt-24 pb-12">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">

          {/* Brand block */}
          <div className="md:col-span-4">
            <h2
              className="text-3xl mb-4"
              style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--color-brand-text)' }}
            >
              Sahil Hair Expert
            </h2>
            <div className="gold-rule mb-6" />
            <p
              className="text-sm font-light leading-relaxed max-w-xs"
              style={{ color: 'rgba(26,26,26,0.55)', lineHeight: 1.9 }}
            >
              Premium hair styling, grooming &amp; bridal makeup in Karnal, Haryana. Crafting bespoke looks since 2018.
            </p>

            {/* Instagram link with inline SVG */}
            <a
              href="https://instagram.com/sahilhairexpert"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 transition-colors duration-300"
              style={{ color: 'rgba(26,26,26,0.5)', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-brand-gold)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(26,26,26,0.5)'}
            >
              <InstagramIcon size={16} />
              <span className="text-xs uppercase tracking-widest" style={{ letterSpacing: '0.18em' }}>
                @sahilhairexpert
              </span>
            </a>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4
              className="text-xs uppercase tracking-widest font-bold mb-8"
              style={{ color: 'rgba(26,26,26,0.35)', letterSpacing: '0.2em' }}
            >
              Navigation
            </h4>
            <ul className="flex flex-col gap-4">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-light transition-colors duration-300"
                    style={{ color: 'rgba(26,26,26,0.65)', textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--color-brand-gold)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(26,26,26,0.65)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="md:col-span-3">
            <h4
              className="text-xs uppercase tracking-widest font-bold mb-8"
              style={{ color: 'rgba(26,26,26,0.35)', letterSpacing: '0.2em' }}
            >
              Location &amp; Contact
            </h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin size={14} style={{ color: 'var(--color-brand-gold)', flexShrink: 0, marginTop: '3px' }} />
                <p className="text-sm font-light leading-relaxed" style={{ color: 'rgba(26,26,26,0.65)' }}>
                  Model Town, Karnal<br />Haryana, India — 132001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} style={{ color: 'var(--color-brand-gold)', flexShrink: 0 }} />
                <a
                  href="tel:+919876543210"
                  className="text-sm font-light"
                  style={{ color: 'rgba(26,26,26,0.65)', textDecoration: 'none', transition: 'color 300ms' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-brand-gold)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(26,26,26,0.65)'}
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} style={{ color: 'var(--color-brand-gold)', flexShrink: 0 }} />
                <a
                  href="mailto:style@sahilhair.com"
                  className="text-sm font-light"
                  style={{ color: 'rgba(26,26,26,0.65)', textDecoration: 'none', transition: 'color 300ms' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-brand-gold)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(26,26,26,0.65)'}
                >
                  style@sahilhair.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="md:col-span-2">
            <h4
              className="text-xs uppercase tracking-widest font-bold mb-8"
              style={{ color: 'rgba(26,26,26,0.35)', letterSpacing: '0.2em' }}
            >
              Hours
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { day: 'Mon — Fri', time: '9am — 8pm' },
                { day: 'Saturday', time: '8am — 9pm' },
                { day: 'Sunday', time: '10am — 6pm' },
              ].map(h => (
                <div key={h.day}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: 'rgba(26,26,26,0.4)', letterSpacing: '0.1em' }}>{h.day}</p>
                  <p className="text-sm font-light mt-1" style={{ color: 'rgba(26,26,26,0.7)' }}>{h.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(26,26,26,0.08)' }}
        >
          <p className="text-xs uppercase tracking-widest" style={{ color: 'rgba(26,26,26,0.35)', letterSpacing: '0.15em' }}>
            &copy; {new Date().getFullYear()} Sahil Hair Expert. All rights reserved.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <a
                key={item}
                href="#"
                className="text-xs uppercase tracking-widest"
                style={{ color: 'rgba(26,26,26,0.35)', letterSpacing: '0.15em', textDecoration: 'none', transition: 'color 300ms' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-brand-gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(26,26,26,0.35)'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

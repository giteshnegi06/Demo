import React from 'react';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';

const packages = [
  {
    name: "Classic",
    tagline: "The essential grooming experience.",
    price: "₹1,500",
    unit: "per session",
    features: ["Signature Haircut", "Beard Trim & Define", "Hair Wash & Blow-dry", "Hot Towel Finish", "Styling Consultation"],
    premium: false
  },
  {
    name: "Royal Bridal",
    tagline: "Complete matrimonial transformation.",
    price: "₹25,000",
    unit: "complete package",
    features: ["Bespoke Bridal Makeover", "Pre-bridal Consultation", "Advanced Skin Prep", "Hairdo & Accessories", "Hair Colour & Treatment", "Draping by Expert"],
    premium: true
  },
  {
    name: "Color & Identity",
    tagline: "Transformative colour artistry.",
    price: "₹5,500+",
    unit: "starting price",
    features: ["Color Alchemy", "Keratin Treatment", "Deep Conditioning", "Toning & Gloss", "Post-Color Styling"],
    premium: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" style={{ backgroundColor: 'var(--color-brand-bg)', borderTop: '1px solid rgba(26,26,26,0.08)' }}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-28 md:py-36">

        {/* Header */}
        <div className="mb-20">
          <span className="text-xs uppercase tracking-widest font-semibold mb-4 block" style={{ color: 'var(--color-brand-gold)', letterSpacing: '0.25em' }}>
            Investment
          </span>
          <span className="gold-rule mb-8" />
          <h2 className="text-4xl md:text-6xl leading-tight" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--color-brand-text)' }}>
            Curated <em style={{ color: 'var(--color-brand-gold)' }}>Packages</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="flex flex-col p-10 transition-all duration-700"
              style={{
                border: `1px solid ${pkg.premium ? 'var(--color-brand-gold)' : 'rgba(26,26,26,0.1)'}`,
                backgroundColor: pkg.premium ? 'var(--color-brand-text)' : 'transparent',
                borderTop: pkg.premium ? `3px solid var(--color-brand-gold)` : '1px solid rgba(26,26,26,0.1)',
                transform: pkg.premium ? 'scaleY(1.02)' : 'none',
                position: 'relative'
              }}
            >
              {pkg.premium && (
                <span className="absolute -top-3 left-10 px-4 py-1 text-xs uppercase tracking-widest font-bold"
                  style={{ backgroundColor: 'var(--color-brand-gold)', color: 'var(--color-brand-text)', letterSpacing: '0.15em' }}>
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-family-serif)', color: pkg.premium ? 'var(--color-brand-bg)' : 'var(--color-brand-text)' }}>
                {pkg.name}
              </h3>
              <p className="text-sm font-light mb-8" style={{ color: pkg.premium ? 'rgba(249,248,246,0.5)' : 'rgba(26,26,26,0.5)' }}>
                {pkg.tagline}
              </p>

              <div className="mb-8" style={{ borderBottom: `1px solid ${pkg.premium ? 'rgba(249,248,246,0.1)' : 'rgba(26,26,26,0.1)'}`, paddingBottom: '2rem' }}>
                <span className="text-5xl" style={{ fontFamily: 'var(--font-family-serif)', color: pkg.premium ? 'var(--color-brand-bg)' : 'var(--color-brand-text)' }}>
                  {pkg.price}
                </span>
                <span className="text-xs uppercase tracking-widest ml-2" style={{ color: pkg.premium ? 'rgba(249,248,246,0.4)' : 'rgba(26,26,26,0.4)', letterSpacing: '0.15em' }}>
                  {pkg.unit}
                </span>
              </div>

              <ul className="flex flex-col gap-4 mb-10 flex-1">
                {pkg.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm font-light"
                    style={{ color: pkg.premium ? 'rgba(249,248,246,0.8)' : 'rgba(26,26,26,0.75)' }}>
                    <Check size={14} style={{ color: 'var(--color-brand-gold)', flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.premium ? 'ghost' : 'outline'}
                style={{ width: '100%', borderColor: pkg.premium ? 'rgba(249,248,246,0.3)' : undefined }}
              >
                Inquire Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

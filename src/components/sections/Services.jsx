import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Signature Haircut",
    desc: "Precision cutting tailored to your facial structure, hair texture, and personal aesthetic.",
    img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80",
    tag: "01"
  },
  {
    title: "Beard Architecture",
    desc: "Sculpting sharp, defined lines that complement your bone structure and personal style.",
    img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80",
    tag: "02"
  },
  {
    title: "Bridal Aesthetics",
    desc: "Flawless, enduring makeup and hair creating a timeless matrimonial masterpiece.",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    tag: "03"
  },
  {
    title: "Color Alchemy",
    desc: "Bespoke color formulation for dimension, depth and brilliance unique to you.",
    img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
    tag: "04"
  },
  {
    title: "Skin & Grooming",
    desc: "Advanced facial treatments and skin care for a refined, polished appearance.",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    tag: "05"
  },
  {
    title: "Hair Treatments",
    desc: "Keratin, deep conditioning and restoration therapies for lustrous, healthy hair.",
    img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    tag: "06"
  }
];

export function Services() {
  return (
    <section id="services" style={{ backgroundColor: 'var(--color-brand-bg)', borderTop: '1px solid rgba(26,26,26,0.08)' }}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-28 md:py-36">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold mb-4 block" style={{ color: 'var(--color-brand-gold)', letterSpacing: '0.25em' }}>
              Menu
            </span>
            <h2 className="text-4xl md:text-6xl leading-tight" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--color-brand-text)' }}>
              A Service of <em style={{ color: 'var(--color-brand-gold)' }}>Excellence</em>
            </h2>
          </div>
          <p className="text-sm font-light max-w-xs" style={{ color: 'rgba(26,26,26,0.55)', lineHeight: 1.8 }}>
            Each service is delivered with meticulous attention to detail and only the finest professional-grade products.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((svc) => (
            <div key={svc.tag} className="service-card group cursor-pointer">
              {/* Image */}
              <div className="overflow-hidden mb-6" style={{ height: '280px' }}>
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="luxury-img"
                />
              </div>

              {/* Card content */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold mb-2 block" style={{ color: 'rgba(26,26,26,0.3)', letterSpacing: '0.2em' }}>
                    {svc.tag}
                  </span>
                  <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--color-brand-text)' }}>
                    {svc.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: 'rgba(26,26,26,0.6)' }}>
                    {svc.desc}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  style={{ color: 'rgba(26,26,26,0.25)', flexShrink: 0, marginTop: '4px',
                    transition: 'color 500ms ease, transform 500ms ease' }}
                  className="group-hover:translate-x-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

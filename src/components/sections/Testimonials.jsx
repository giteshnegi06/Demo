import React from 'react';

const testimonials = [
  {
    name: "Arjun Sharma",
    role: "Groom — Wedding Lookbook",
    text: "The sheer attention to detail at Sahil Hair Expert is unmatched. They transformed my look entirely for the wedding. An absolutely premium experience from start to finish.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Meera Rajput",
    role: "Editorial Model",
    text: "Minimalist, sophisticated, and perfect execution. The color alchemy and styling held up flawlessly throughout my entire shoot. Phenomenal work — worth every rupee.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Rahul Bhatia",
    role: "IAS Officer",
    text: "I've been a loyal client for four years. The precision of every haircut and beard session is consistently impeccable. This is not a salon — it is a grooming institution.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  }
];

function TestimonialCard({ t }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="testimonial-card flex flex-col justify-between cursor-default"
      style={{
        paddingBottom: '2rem',
        borderLeftColor: hovered ? 'var(--color-brand-gold)' : 'rgba(26,26,26,0.12)',
        transition: 'border-color 800ms ease'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Quote mark */}
      <div style={{ fontFamily: 'var(--font-family-serif)', fontSize: '4rem', lineHeight: 1, color: 'rgba(26,26,26,0.08)', marginBottom: '-0.5rem' }}>
        "
      </div>

      <p className="text-base font-light leading-relaxed mb-8"
        style={{
          color: hovered ? 'rgba(26,26,26,0.9)' : 'rgba(26,26,26,0.6)',
          transition: 'color 800ms ease',
          lineHeight: 1.85
        }}>
        {t.text}
      </p>

      {/* Author row */}
      <div className="flex items-center gap-4"
        style={{ borderTop: '1px solid rgba(26,26,26,0.08)', paddingTop: '1.25rem' }}>
        <img
          src={t.img}
          alt={t.name}
          className="object-cover"
          style={{
            width: '48px', height: '48px',
            filter: hovered ? 'grayscale(0%)' : 'grayscale(100%)',
            transition: 'filter 1500ms ease'
          }}
        />
        <div>
          <p style={{ fontFamily: 'var(--font-family-serif)', fontSize: '1rem', color: 'var(--color-brand-text)' }}>
            {t.name}
          </p>
          <p className="text-xs uppercase tracking-widest mt-0.5" style={{ color: 'rgba(26,26,26,0.45)', letterSpacing: '0.15em' }}>
            {t.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" style={{ backgroundColor: 'var(--color-brand-bg)', borderTop: '1px solid rgba(26,26,26,0.08)' }}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-28 md:py-36">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-3">
            <span className="text-xs uppercase tracking-widest font-semibold mb-4 block" style={{ color: 'var(--color-brand-gold)', letterSpacing: '0.25em' }}>
              Clientele
            </span>
            <span className="gold-rule mb-8" />
            <h2 className="text-4xl md:text-5xl leading-tight" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--color-brand-text)' }}>
              Words<br />of <em style={{ color: 'var(--color-brand-gold)' }}>Trust</em>
            </h2>
            <p className="text-sm font-light mt-6" style={{ color: 'rgba(26,26,26,0.5)', lineHeight: 1.8 }}>
              From those who have experienced our craft first-hand.
            </p>
          </div>

          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

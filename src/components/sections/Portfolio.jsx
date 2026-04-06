import React from 'react';

const images = [
    {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80",
    label: "Hair Styling"
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80",
    label: "Modern Fade"
  },
  {
    src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=600&q=80",
    label: "Salon Interior"
  },
  {
    src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=600&q=80",
    label: "Hair Wash"
  },
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80",
    label: "Luxury Grooming"
  },

  // 💄 FEMALE HAIR & MAKEUP
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    label: "Bridal Makeup"
  },
  {
    src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=600&q=80",
    label: "Party Makeup"
  },
  {
    src: "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?auto=format&fit=crop&w=600&q=80",
    label: "Hair Styling Women"
  },
  
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{ backgroundColor: 'var(--color-brand-text)', borderTop: '1px solid rgba(249,248,246,0.08)' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-28 md:py-36">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold mb-4 block" style={{ color: 'var(--color-brand-gold)', letterSpacing: '0.25em' }}>
              Portfolio
            </span>
            <h2 className="text-5xl md:text-7xl leading-none" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--color-brand-bg)' }}>
              Our <em style={{ color: 'var(--color-brand-gold)' }}>Signature</em><br />Work
            </h2>
          </div>
          <p className="text-sm font-light max-w-xs" style={{ color: 'rgba(249,248,246,0.45)', lineHeight: 1.8 }}>
            A curated visual archive of transformations that speak for themselves.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="group overflow-hidden relative cursor-pointer"
              style={{ aspectRatio: '3/4' }}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover"
                style={{
                  filter: 'grayscale(100%) brightness(0.75)',
                  transform: 'scale(1)',
                  transition: 'filter 2000ms ease, transform 2000ms ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.filter = 'grayscale(0%) brightness(1)';
                  e.currentTarget.style.transform = 'scale(1.06)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.filter = 'grayscale(100%) brightness(0.75)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              {/* Hover label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end"
                style={{
                  background: 'linear-gradient(to top, rgba(26,26,26,0.8) 0%, transparent 100%)',
                  opacity: 0, transition: 'opacity 600ms ease'
                }}
                ref={el => {
                  if (!el) return;
                  const parent = el.parentElement;
                  parent.addEventListener('mouseenter', () => el.style.opacity = '1');
                  parent.addEventListener('mouseleave', () => el.style.opacity = '0');
                }}
              >
                <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--color-brand-gold)', letterSpacing: '0.2em' }}>
                  {img.label}
                </span>
              </div>
              {/* Corner indicator */}
              <div className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center"
                style={{ border: '1px solid rgba(212,175,55,0.4)' }}>
                <span className="text-xs" style={{ color: 'rgba(212,175,55,0.7)' }}>{String(i + 1).padStart(2, '0')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

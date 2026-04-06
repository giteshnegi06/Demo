import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Send, Calendar, Clock, User, Phone, Mail, Scissors } from 'lucide-react';

const services = [
  'Signature Haircut',
  'Beard Architecture',
  'Bridal Aesthetics',
  'Color Alchemy',
  'Hair Treatment',
  'Skin & Grooming',
  'Full Makeover Package',
  'Other / Consultation',
];

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM', '7:00 PM',
];

function InputField({ label, icon: Icon, error, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-xs uppercase tracking-widest font-semibold"
        style={{ color: 'rgba(249,248,246,0.45)', letterSpacing: '0.2em' }}
      >
        {label}
      </label>
      <div
        className="flex items-center gap-3 px-4 py-4"
        style={{
          border: `1px solid ${error ? '#e05' : focused ? 'var(--color-brand-gold)' : 'rgba(249,248,246,0.15)'}`,
          backgroundColor: 'rgba(249,248,246,0.04)',
          transition: 'border-color 400ms ease',
        }}
      >
        {Icon && <Icon size={14} style={{ color: focused ? 'var(--color-brand-gold)' : 'rgba(249,248,246,0.3)', flexShrink: 0, transition: 'color 400ms' }} />}
        <input
          {...props}
          onFocus={e => { setFocused(true); props.onFocus && props.onFocus(e); }}
          onBlur={e => { setFocused(false); props.onBlur && props.onBlur(e); }}
          className="flex-1 bg-transparent outline-none text-sm font-light"
          style={{ color: 'var(--color-brand-bg)', fontSize: '0.9rem' }}
        />
      </div>
      {error && <p className="text-xs" style={{ color: '#ff557a' }}>{error}</p>}
    </div>
  );
}

function SelectField({ label, icon: Icon, options, value, onChange, error }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-xs uppercase tracking-widest font-semibold"
        style={{ color: 'rgba(249,248,246,0.45)', letterSpacing: '0.2em' }}
      >
        {label}
      </label>
      <div
        className="flex items-center gap-3 px-4 py-4"
        style={{
          border: `1px solid ${error ? '#e05' : focused ? 'var(--color-brand-gold)' : 'rgba(249,248,246,0.15)'}`,
          backgroundColor: 'rgba(249,248,246,0.04)',
          transition: 'border-color 400ms ease',
        }}
      >
        {Icon && <Icon size={14} style={{ color: focused ? 'var(--color-brand-gold)' : 'rgba(249,248,246,0.3)', flexShrink: 0, transition: 'color 400ms' }} />}
        <select
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 bg-transparent outline-none text-sm font-light appearance-none cursor-pointer"
          style={{ color: value ? 'var(--color-brand-bg)' : 'rgba(249,248,246,0.35)', fontSize: '0.9rem' }}
        >
          {options.map(opt => (
            <option key={opt} value={opt} style={{ backgroundColor: '#1A1A1A', color: '#F9F8F6' }}>{opt}</option>
          ))}
        </select>
      </div>
      {error && <p className="text-xs" style={{ color: '#ff557a' }}>{error}</p>}
    </div>
  );
}

export function BookingForm() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    service: '', date: '', time: '', message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (key, val) => {
    setForm(f => ({ ...f, [key]: val }));
    if (errors[key]) setErrors(e => ({ ...e, [key]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    if (!form.service) e.service = 'Please select a service';
    if (!form.date) e.date = 'Please choose a date';
    if (!form.time) e.time = 'Please choose a time slot';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  return (
    <section id="booking" style={{ backgroundColor: 'var(--color-brand-text)' }}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-28 md:py-36">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left — editorial description */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <span className="text-xs uppercase tracking-widest font-semibold mb-6 block" style={{ color: 'var(--color-brand-gold)', letterSpacing: '0.25em' }}>
              Reservations
            </span>
            <div className="gold-rule mb-10" />

            <h2
              className="text-4xl md:text-5xl leading-tight mb-8"
              style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--color-brand-bg)', lineHeight: 1.1 }}
            >
              Book Your <br />
              <em style={{ color: 'var(--color-brand-gold)', fontWeight: 300 }}>Session</em>
            </h2>

            <p className="text-sm font-light leading-relaxed mb-12" style={{ color: 'rgba(249,248,246,0.5)', lineHeight: 1.9 }}>
              Reserve your appointment with Sahil Hair Expert. Our team will confirm your booking within 2 hours and reach out with any details.
            </p>

            {/* Info cards */}
            <div className="flex flex-col gap-6">
              {[
                { icon: Clock, label: 'Open Hours', value: 'Mon–Sat: 9am – 9pm\nSun: 10am – 6pm' },
                { icon: Calendar, label: 'Booking Notice', value: 'Same-day slots subject\nto availability' },
                { icon: Phone, label: 'Direct Line', value: '+91 98765 43210' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4 items-start" style={{ borderTop: '1px solid rgba(249,248,246,0.07)', paddingTop: '1.25rem' }}>
                  <Icon size={14} style={{ color: 'var(--color-brand-gold)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(249,248,246,0.35)', letterSpacing: '0.15em' }}>{label}</p>
                    <p className="text-sm font-light" style={{ color: 'rgba(249,248,246,0.7)', whiteSpace: 'pre-line', lineHeight: 1.7 }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-8">
            {submitted ? (
              /* Success state */
              <div
                className="flex flex-col items-start justify-center h-full py-24"
                style={{ borderLeft: '1px solid rgba(249,248,246,0.1)', paddingLeft: '2.5rem' }}
              >
                <div className="gold-rule mb-10" />
                <span className="text-xs uppercase tracking-widest mb-6 block" style={{ color: 'var(--color-brand-gold)', letterSpacing: '0.2em' }}>Confirmed</span>
                <h3 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--color-brand-bg)', lineHeight: 1.15 }}>
                  Your booking<br />request is <em style={{ color: 'var(--color-brand-gold)' }}>received.</em>
                </h3>
                <p className="text-sm font-light mb-10" style={{ color: 'rgba(249,248,246,0.5)', lineHeight: 1.9, maxWidth: '440px' }}>
                  Thank you, <strong style={{ color: 'var(--color-brand-bg)' }}>{form.name}</strong>. We will confirm your appointment for <strong style={{ color: 'var(--color-brand-bg)' }}>{form.service}</strong> on <strong style={{ color: 'var(--color-brand-bg)' }}>{form.date}</strong> at <strong style={{ color: 'var(--color-brand-bg)' }}>{form.time}</strong> shortly via phone or email.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', date: '', time: '', message: '' }); }}
                  className="btn btn-outline"
                  style={{ borderColor: 'rgba(249,248,246,0.25)', color: 'rgba(249,248,246,0.7)' }}
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              /* Form */
              <form
                onSubmit={handleSubmit}
                style={{ borderLeft: '1px solid rgba(249,248,246,0.08)', paddingLeft: '2.5rem' }}
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <InputField
                    label="Full Name *"
                    icon={User}
                    type="text"
                    placeholder="e.g. Arjun Sharma"
                    value={form.name}
                    onChange={e => set('name', e.target.value)}
                    error={errors.name}
                  />
                  <InputField
                    label="Phone Number *"
                    icon={Phone}
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={e => set('phone', e.target.value)}
                    error={errors.phone}
                  />
                  <InputField
                    label="Email Address"
                    icon={Mail}
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => set('email', e.target.value)}
                    error={errors.email}
                  />
                  <SelectField
                    label="Select Service *"
                    icon={Scissors}
                    options={['— Choose a service —', ...services]}
                    value={form.service}
                    onChange={e => set('service', e.target.value)}
                    error={errors.service}
                  />
                  <InputField
                    label="Preferred Date *"
                    icon={Calendar}
                    type="date"
                    value={form.date}
                    onChange={e => set('date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    error={errors.date}
                  />
                  <SelectField
                    label="Preferred Time *"
                    icon={Clock}
                    options={['— Choose a time —', ...timeSlots]}
                    value={form.time}
                    onChange={e => set('time', e.target.value)}
                    error={errors.time}
                  />
                </div>

                {/* Message / Notes */}
                <div className="flex flex-col gap-2 mb-10">
                  <label className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'rgba(249,248,246,0.45)', letterSpacing: '0.2em' }}>
                    Additional Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Any special requests, hair concerns, or bridal package enquiries..."
                    value={form.message}
                    onChange={e => set('message', e.target.value)}
                    className="px-4 py-4 bg-transparent outline-none text-sm font-light resize-none"
                    style={{
                      border: '1px solid rgba(249,248,246,0.15)',
                      backgroundColor: 'rgba(249,248,246,0.04)',
                      color: 'var(--color-brand-bg)',
                      fontSize: '0.9rem',
                      lineHeight: 1.7,
                      transition: 'border-color 400ms ease',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--color-brand-gold)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(249,248,246,0.15)'}
                  />
                </div>

                {/* Privacy note + Submit */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <p className="text-xs font-light" style={{ color: 'rgba(249,248,246,0.3)', lineHeight: 1.7, maxWidth: '280px' }}>
                    Your details are kept private and used solely to confirm your appointment.
                  </p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn"
                    style={{
                      minWidth: '200px',
                      opacity: loading ? 0.7 : 1,
                      cursor: loading ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {loading ? (
                      <span className="flex items-center gap-3">
                        <span style={{ display: 'inline-block', width: '14px', height: '14px', border: '1px solid rgba(249,248,246,0.5)', borderTopColor: 'var(--color-brand-gold)', borderRadius: '50%', animation: 'spin 700ms linear infinite' }} />
                        Submitting…
                      </span>
                    ) : (
                      <span className="flex items-center gap-3">
                        <Send size={14} />
                        Confirm Booking
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Spinner keyframe */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}

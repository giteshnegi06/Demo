import React from 'react';

export function Button({ children, className = '', variant = 'primary', ...props }) {
  const variantClass = variant === 'outline' ? 'btn-outline' : variant === 'ghost' ? 'btn-ghost' : '';
  return (
    <button className={`btn ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

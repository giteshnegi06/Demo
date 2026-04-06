import React from 'react';
import { cn } from '../ui/Button';

export function Section({ children, className, id, sideText, noPadding = false, borderTop = true }) {
  return (
    <section 
      id={id} 
      className={cn(
        "relative w-full max-w-[1600px] mx-auto grid grid-cols-[auto_1fr] md:grid-cols-[80px_1fr] lg:grid-cols-[120px_1fr]",
        borderTop && "border-t border-brand-text/10"
      )}
    >
      {/* Editorial Vertical Side Bar */}
      <div className="hidden md:flex flex-col items-center py-24 border-r border-brand-text/10 luxury-border-left">
        {sideText && (
          <div className="sticky top-32">
            <span className="vertical-text text-xs uppercase tracking-widest text-brand-text/50 font-sans">
              {sideText}
            </span>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className={cn(
        "w-full h-full",
        !noPadding && "py-24 px-6 md:px-12 lg:px-24",
        className
      )}>
        {children}
      </div>
    </section>
  );
}

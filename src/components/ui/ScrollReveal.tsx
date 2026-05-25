'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: 'fade-up' | 'fade-in' | 'scale' | 'slide-left' | 'slide-right' | 'zoom';
  delay?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  className,
  variant = 'fade-up',
  delay = 0,
  duration = 800,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If prefers-reduced-motion, show immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    // Check if element is already in viewport on mount — if so, show immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      setIsVisible(true);
      return;
    }

    // Element is below the fold — animate it on scroll
    setShouldAnimate(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // If not animating (already in viewport), render children directly
  if (!shouldAnimate) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const transforms: Record<string, { hidden: string; visible: string }> = {
    'fade-up': { hidden: 'translateY(30px)', visible: 'translateY(0)' },
    'fade-in': { hidden: 'none', visible: 'none' },
    'scale': { hidden: 'scale(0.92)', visible: 'scale(1)' },
    'slide-left': { hidden: 'translateX(40px)', visible: 'translateX(0)' },
    'slide-right': { hidden: 'translateX(-40px)', visible: 'translateX(0)' },
    'zoom': { hidden: 'scale(0.85)', visible: 'scale(1)' },
  };

  const t = transforms[variant];

  return (
    <div
      ref={ref}
      className={cn('will-change-transform', className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? t.visible : t.hidden,
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

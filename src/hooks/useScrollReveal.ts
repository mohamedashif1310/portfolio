'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement>(options: ScrollRevealOptions = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      setScrollProgress(1);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Calculate how far into view the element is
          const ratio = Math.min(entry.intersectionRatio / threshold, 1);
          setScrollProgress(ratio);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
          setScrollProgress(0);
        }
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1], rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible, scrollProgress };
}

export function useParallaxScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId: number;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const progress = 1 - (rect.top / windowHeight);
          setOffset(Math.max(0, Math.min(1, progress)));
        }
        rafId = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => { window.removeEventListener('scroll', handleScroll); if (rafId) cancelAnimationFrame(rafId); };
  }, []);

  return { ref, offset };
}

'use client';

import { useEffect, useState, useRef } from 'react';
import Container from '@/components/shared/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';

const stats = [
  { value: 1.5, suffix: '+', label: 'Years Experience', description: 'In device testing & QA' },
  { value: 15, suffix: '+', label: 'Projects Delivered', description: 'Across multiple product lines' },
  { value: 150, suffix: 'K+', label: 'Test Cases Executed', description: 'Manual & automated' },
  { value: 99.9, suffix: '%', label: 'Quality Score', description: 'Bug detection rate' },
];

function AnimatedNumber({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value, inView]);

  const formatted = value % 1 !== 0 ? display.toFixed(1) : Math.floor(display).toString();

  return (
    <span className="tabular-nums">
      {formatted}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] via-purple-500/[0.02] to-secondary/[0.03]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.06),transparent_70%)]" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">By The Numbers</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary dark:text-text-dark-primary">
              Results That <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Speak</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} variant="scale" delay={index * 150}>
              <div className="relative group text-center p-8 rounded-3xl bg-white/80 dark:bg-white/[0.02] backdrop-blur-sm border border-border-light dark:border-white/[0.06] hover:border-primary/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-premium-lg dark:hover:shadow-glow-lg">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/[0.02] to-secondary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-primary via-purple-500 to-secondary bg-clip-text text-transparent mb-3">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
                  </div>
                  <div className="text-base font-bold text-text-primary dark:text-text-dark-primary mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-text-secondary/60 dark:text-text-dark-secondary/60">
                    {stat.description}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

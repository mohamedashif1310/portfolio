'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const testimonials = [
  {
    quote: "Outstanding attention to detail in device testing. Their ADB-based testing approach uncovered critical issues before launch.",
    name: "Sarah Johnson",
    role: "Senior Product Manager",
    company: "Amazon",
    avatar: "👩‍💼",
  },
  {
    quote: "Exceptional work on the Fire Stick 4K project. Their automation frameworks significantly improved our testing efficiency.",
    name: "Michael Chen",
    role: "Engineering Manager",
    company: "Amazon Devices",
    avatar: "👨‍💻",
  },
  {
    quote: "Their AI evaluation skills and prompt engineering expertise helped us improve our LLM model outputs substantially.",
    name: "Emily Rodriguez",
    role: "AI Research Lead",
    company: "Tech Startup",
    avatar: "👩‍🔬",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => { setIsAutoPlaying(false); setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length); };
  const goToNext = () => { setIsAutoPlaying(false); setCurrentIndex((prev) => (prev + 1) % testimonials.length); };

  const t = testimonials[currentIndex];

  return (
    <section className="py-24">
      <Container>
        <ScrollReveal>
          <SectionHeading title="Testimonials" subtitle="What colleagues and clients say about working with me" centered />
        </ScrollReveal>

        <ScrollReveal variant="scale" delay={200}>
        <div className="max-w-4xl mx-auto">
          <div className="relative p-10 md:p-16 rounded-3xl overflow-hidden">
            {/* Glass background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-purple-500/[0.02] to-secondary/[0.04] border border-border-light dark:border-white/[0.06] rounded-3xl" />
            <div className="absolute inset-0 backdrop-blur-sm rounded-3xl" />

            {/* Decorative quote */}
            <Quote className="absolute top-8 left-8 w-16 h-16 text-primary/[0.08]" aria-hidden="true" />
            <Quote className="absolute bottom-8 right-8 w-16 h-16 text-secondary/[0.08] rotate-180" aria-hidden="true" />

            <div className="relative z-10 text-center space-y-8">
              <p className="text-xl md:text-2xl lg:text-3xl text-text-primary dark:text-text-dark-primary font-medium leading-relaxed tracking-tight">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-4xl border border-primary/20">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-lg text-text-primary dark:text-text-dark-primary">{t.name}</p>
                  <p className="text-sm text-text-secondary dark:text-text-dark-secondary">{t.role} at {t.company}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="relative z-10 flex items-center justify-center gap-6 mt-10">
              <button onClick={goToPrevious} className="p-2.5 rounded-full border border-border-light dark:border-white/[0.08] hover:border-primary hover:text-primary transition-all duration-300" aria-label="Previous testimonial">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => { setIsAutoPlaying(false); setCurrentIndex(index); }}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === currentIndex ? 'bg-primary w-8' : 'bg-text-secondary/20 w-2 hover:bg-text-secondary/40'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button onClick={goToNext} className="p-2.5 rounded-full border border-border-light dark:border-white/[0.08] hover:border-primary hover:text-primary transition-all duration-300" aria-label="Next testimonial">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

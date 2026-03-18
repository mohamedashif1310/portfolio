'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';

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

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Testimonials"
          subtitle="What colleagues and clients say about working with me"
          centered
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border-light dark:border-border-dark">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            
            <div className="relative z-10 text-center space-y-6">
              <p className="text-xl md:text-2xl text-text-primary dark:text-text-dark-primary font-medium leading-relaxed">
                "{currentTestimonial.quote}"
              </p>
              
              <div className="flex flex-col items-center gap-3">
                <div className="text-5xl">{currentTestimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-text-primary dark:text-text-dark-primary">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-sm text-text-secondary dark:text-text-dark-secondary">
                    {currentTestimonial.role} at {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full hover:bg-surface-light dark:hover:bg-surface-dark transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-primary w-8'
                        : 'bg-text-secondary/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={goToNext}
                className="p-2 rounded-full hover:bg-surface-light dark:hover:bg-surface-dark transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Container from '@/components/shared/Container';

const roles = [
  'Testing Associate',
  'QA Engineer',
  'Automation Specialist',
  'Device Testing Expert',
  'AI Evaluator',
];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (prefersReducedMotion.current) return;
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    let rafId: number;
    let lastX = 0, lastY = 0;
    const throttledHandler = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        if (Math.abs(e.clientX - lastX) > 5 || Math.abs(e.clientY - lastY) > 5) {
          lastX = e.clientX; lastY = e.clientY;
          handleMouseMove(e);
        }
        rafId = 0;
      });
    };
    window.addEventListener('mousemove', throttledHandler);
    return () => { window.removeEventListener('mousemove', throttledHandler); if (rafId) cancelAnimationFrame(rafId); };
  }, [handleMouseMove]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Subtle dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.07)_1px,transparent_0)] bg-[size:32px_32px]" />

        {/* Aurora gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-secondary/[0.04]" />

        {/* Floating orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/[0.07] rounded-full blur-[100px] animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/[0.06] rounded-full blur-[100px] animate-float"
          style={{
            animationDelay: '3s',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/[0.03] to-transparent rounded-full blur-[80px]"
        />
      </div>

      <Container className="py-20">
        <div className="text-center space-y-10">
          {/* Profile Image with premium glow ring */}
          <div className="inline-block relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 animate-pulse-glow" />
            <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-primary via-purple-500 to-secondary p-[3px] transform group-hover:scale-105 transition-all duration-700">
              <div className="w-full h-full rounded-full overflow-hidden bg-background-light dark:bg-background-dark">
                <Image
                  src="/images/profile/mohamed-ashif.jpg"
                  alt="Mohamed Ashif"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-glow">
              <Sparkles className="w-4 h-4 text-white" aria-hidden="true" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-6">
            <div className="overflow-hidden">
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-text-primary dark:text-text-dark-primary animate-fade-up">
                Hi, I&apos;m{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    {siteConfig.name}
                  </span>
                </span>
                {' '}
                <span className="inline-block animate-wave origin-[70%_70%]" aria-hidden="true">👋</span>
              </h1>
            </div>

            {/* Typing role */}
            <div className="h-14 flex items-center justify-center" aria-label={`Role: ${roles[currentRole]}`}>
              <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-text-secondary dark:text-text-dark-secondary">
                {displayText}
                <span className="animate-pulse text-primary ml-0.5" aria-hidden="true">|</span>
              </p>
            </div>

            <p className="text-lg md:text-xl text-text-secondary dark:text-text-dark-secondary max-w-2xl mx-auto leading-relaxed animate-fade-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
              {siteConfig.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
            <Link href="/projects">
              <Button size="lg" variant="primary" className="group">
                <span className="flex items-center gap-2">
                  View My Work
                  <span className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
                </span>
              </Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline" className="group">
                <span className="flex items-center gap-2">
                  Read My Blog
                  <span className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
                </span>
              </Button>
            </Link>
          </div>

          {/* Stats with glass cards */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto pt-8 animate-fade-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
            {[
              { value: '1.5+', label: 'Years Exp' },
              { value: '15+', label: 'Projects' },
              { value: '100%', label: 'Quality' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group relative p-4 sm:p-6 rounded-2xl bg-white/50 dark:bg-white/[0.03] backdrop-blur-sm border border-border-light dark:border-white/[0.06] hover:border-primary/30 transition-all duration-500 cursor-default"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-primary to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary dark:text-text-dark-secondary mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
            <div className="flex flex-col items-center gap-2 cursor-pointer group animate-bounce-slow">
              <span className="text-xs font-medium tracking-widest uppercase text-text-secondary/60 dark:text-text-dark-secondary/60 group-hover:text-primary transition-colors">
                Scroll
              </span>
              <ChevronDown className="w-5 h-5 text-text-secondary/40 dark:text-text-dark-secondary/40 group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

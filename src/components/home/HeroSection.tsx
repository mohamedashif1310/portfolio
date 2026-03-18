'use client';

import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background with Parallax */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent" />
        
        {/* Animated Orbs with Mouse Parallax */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float"
          style={{
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      <Container className="py-20">
        <div className="text-center space-y-8">
          {/* Enhanced Profile Image with Glow */}
          <div className="inline-block animate-float relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary p-1 transform group-hover:scale-110 transition-transform duration-500">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image 
                  src="/images/profile/mohamed-ashif.jpg" 
                  alt="Mohamed Ashif"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Sparkle Effect */}
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-primary animate-pulse" />
          </div>

          {/* Enhanced Greeting with Stagger Animation */}
          <div className="space-y-4">
            <div className="overflow-hidden">
              <h1 className="text-5xl md:text-7xl font-bold text-text-primary dark:text-text-dark-primary animate-fade-up">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    {siteConfig.name}
                  </span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg -z-10" />
                </span>
                {' '}
                <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
              </h1>
            </div>
            
            {/* Enhanced Rotating Role with Gradient */}
            <div className="h-12 flex items-center justify-center">
              <p className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-text-secondary via-primary to-text-secondary dark:from-text-dark-secondary dark:via-primary dark:to-text-dark-secondary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                {displayText}
                <span className="animate-pulse text-primary">|</span>
              </p>
            </div>

            {/* Enhanced Description */}
            <p className="text-lg md:text-xl text-text-secondary dark:text-text-dark-secondary max-w-2xl mx-auto animate-fade-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
              {siteConfig.description}
            </p>
          </div>

          {/* Enhanced CTA Buttons with Hover Effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
            <Link href="/projects">
              <Button size="lg" variant="primary" className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline" className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Read My Blog
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Button>
            </Link>
          </div>

          {/* Stats Preview with Animation */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 animate-fade-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
            <div className="group cursor-default">
              <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">1.2+</div>
              <div className="text-sm text-text-secondary dark:text-text-dark-secondary">Years Exp</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">15+</div>
              <div className="text-sm text-text-secondary dark:text-text-dark-secondary">Projects</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">100%</div>
              <div className="text-sm text-text-secondary dark:text-text-dark-secondary">Quality</div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow opacity-0 animate-fade-up [animation-delay:800ms] [animation-fill-mode:forwards]">
            <div className="flex flex-col items-center gap-2 cursor-pointer group">
              <span className="text-xs text-text-secondary dark:text-text-dark-secondary group-hover:text-primary transition-colors">Scroll</span>
              <ChevronDown className="w-6 h-6 text-text-secondary dark:text-text-dark-secondary group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

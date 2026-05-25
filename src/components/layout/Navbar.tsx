'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/lib/constants';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (windowHeight > 0) setScrollProgress((window.scrollY / windowHeight) * 100);
        rafId = 0;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => { window.removeEventListener('scroll', handleScroll); if (rafId) cancelAnimationFrame(rafId); };
  }, []);

  return (
    <>
      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-primary via-purple-500 to-secondary transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
          isScrolled
            ? 'bg-white/80 dark:bg-[#050505]/80 backdrop-blur-xl border-b border-border-light/50 dark:border-white/[0.04] shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-text-primary dark:text-text-dark-primary hover:text-primary transition-colors duration-300"
            >
              {siteConfig.name.split(' ')[0]}
              <span className="text-primary">.</span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative',
                    pathname === link.href
                      ? 'text-primary bg-primary/5'
                      : 'text-text-secondary dark:text-text-dark-secondary hover:text-text-primary dark:hover:text-text-dark-primary hover:bg-surface-light dark:hover:bg-white/[0.04]'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-text-primary dark:text-text-dark-primary hover:bg-surface-light dark:hover:bg-white/[0.04] transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}

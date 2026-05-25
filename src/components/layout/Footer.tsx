'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      if (!res.ok) throw new Error();
      setNewsletterStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    } catch {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    }
  };

  const socials = [
    { icon: Github, href: siteConfig.social.github, label: 'GitHub' },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
    { icon: Mail, href: siteConfig.social.email, label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-border-light dark:border-white/[0.04] bg-surface-light dark:bg-[#0a0a0f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold text-text-primary dark:text-text-dark-primary mb-1">
              {siteConfig.name.split(' ')[0]}<span className="text-primary">.</span>
            </h3>
            <p className="text-sm text-text-secondary dark:text-text-dark-secondary mb-6 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-border-light dark:border-white/[0.06] text-text-secondary dark:text-text-dark-secondary hover:text-primary hover:border-primary/30 transition-all duration-300"
                  aria-label={label}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-primary dark:text-text-dark-primary mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[...siteConfig.navLinks, ...siteConfig.footerLinks].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary dark:text-text-dark-secondary hover:text-primary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-primary dark:text-text-dark-primary mb-5 uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-sm text-text-secondary dark:text-text-dark-secondary mb-4">
              Get notified about new posts and projects.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <label htmlFor="footer-newsletter-email" className="sr-only">Email address</label>
              <input id="footer-newsletter-email" type="email" required placeholder="you@example.com" value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 text-sm rounded-xl border border-border-light dark:border-white/[0.08] bg-white dark:bg-white/[0.03] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200" />
              <button type="submit" disabled={newsletterStatus === 'loading'}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-b from-primary to-primary-600 rounded-xl shadow-glow-primary hover:brightness-110 transition-all duration-300 disabled:opacity-50">
                {newsletterStatus === 'loading' ? '...' : newsletterStatus === 'success' ? '✓' : 'Join'}
              </button>
            </form>
            {newsletterStatus === 'success' && <p className="text-xs text-success mt-2" role="status">Subscribed!</p>}
            {newsletterStatus === 'error' && <p className="text-xs text-error mt-2" role="alert">Failed. Try again.</p>}
          </div>
        </div>

        <div className="pt-8 border-t border-border-light dark:border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-secondary/60 dark:text-text-dark-secondary/60">
            © {currentYear} {siteConfig.name}. Built with Next.js & ❤️
          </p>
          <button onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-text-secondary/60 dark:text-text-dark-secondary/60 hover:text-primary transition-colors duration-300"
            aria-label="Back to top">
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

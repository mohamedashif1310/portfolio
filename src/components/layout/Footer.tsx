'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-xl font-bold text-text-primary dark:text-text-dark-primary mb-2">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-text-secondary dark:text-text-dark-secondary mb-4">
              {siteConfig.description}
            </p>
            <p className="text-xs text-text-secondary dark:text-text-dark-secondary">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary dark:text-text-dark-primary mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[...siteConfig.navLinks, ...siteConfig.footerLinks].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary dark:text-text-dark-secondary hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary dark:text-text-dark-primary mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex space-x-4 mb-6">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary dark:text-text-dark-secondary hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary dark:text-text-dark-secondary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary dark:text-text-dark-secondary hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href={siteConfig.social.email}
                className="text-text-secondary dark:text-text-dark-secondary hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Newsletter Mini Form */}
            <div>
              <p className="text-sm text-text-secondary dark:text-text-dark-secondary mb-2">
                Subscribe to newsletter
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-hover transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-light dark:border-border-dark flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-secondary dark:text-text-dark-secondary">
            Built with Next.js & ❤️
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-text-secondary dark:text-text-dark-secondary hover:text-primary transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

export default function SocialLinks() {
  const socials = [
    { icon: Github, href: siteConfig.social.github, label: 'GitHub' },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
    { icon: Mail, href: siteConfig.social.email, label: 'Email' },
  ];

  return (
    <div className="flex gap-4">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-lg bg-surface-light dark:bg-surface-dark hover:bg-primary hover:text-white transition-all duration-200"
          aria-label={label}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}

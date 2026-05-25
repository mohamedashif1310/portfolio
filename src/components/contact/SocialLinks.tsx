import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

export default function SocialLinks() {
  const socials = [
    { icon: Github, href: siteConfig.social.github, label: 'GitHub', color: 'hover:border-gray-600 hover:text-gray-900 dark:hover:text-white' },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn', color: 'hover:border-blue-500 hover:text-blue-500' },
    { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter', color: 'hover:border-sky-500 hover:text-sky-500' },
    { icon: Mail, href: siteConfig.social.email, label: 'Email', color: 'hover:border-primary hover:text-primary' },
  ];

  return (
    <div className="flex gap-3">
      {socials.map(({ icon: Icon, href, label, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3.5 rounded-xl bg-white dark:bg-white/[0.03] border border-border-light dark:border-white/[0.06] text-text-secondary dark:text-text-dark-secondary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${color}`}
          aria-label={label}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}

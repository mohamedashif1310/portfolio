import { Mail, MapPin, Clock } from 'lucide-react';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import ContactForm from '@/components/contact/ContactForm';
import SocialLinks from '@/components/contact/SocialLinks';
import { siteConfig } from '@/lib/constants';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with me for projects, opportunities, or just to say hi',
};

const contactInfo = [
  { icon: Mail, title: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, title: 'Location', value: siteConfig.location, sub: siteConfig.timezone },
  { icon: Clock, title: 'Response Time', value: `Typically ${siteConfig.responseTime}` },
];

export default function ContactPage() {
  return (
    <div className="py-24">
      <Container>
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or just want to chat? I&apos;d love to hear from you"
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-8">Send Me a Message</h3>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

            {contactInfo.map(({ icon: Icon, title, value, href, sub }) => (
              <div key={title} className="p-5 rounded-2xl bg-white dark:bg-white/[0.02] border border-border-light dark:border-white/[0.06] hover:border-primary/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary dark:text-text-dark-primary mb-1">{title}</h4>
                    {href ? (
                      <a href={href} className="text-text-secondary dark:text-text-dark-secondary hover:text-primary transition-colors">{value}</a>
                    ) : (
                      <p className="text-text-secondary dark:text-text-dark-secondary">{value}</p>
                    )}
                    {sub && <p className="text-sm text-text-secondary/60 dark:text-text-dark-secondary/60 mt-0.5">{sub}</p>}
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <h4 className="font-semibold mb-4">Connect on Social Media</h4>
              <SocialLinks />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

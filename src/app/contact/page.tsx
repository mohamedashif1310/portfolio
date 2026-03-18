import { Mail, MapPin, Clock } from 'lucide-react';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import ContactForm from '@/components/contact/ContactForm';
import SocialLinks from '@/components/contact/SocialLinks';
import Card from '@/components/ui/Card';
import { siteConfig } from '@/lib/constants';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with me for projects, opportunities, or just to say hi',
};

export default function ContactPage() {
  return (
    <div className="py-20">
      <Container>
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or just want to chat? I'd love to hear from you"
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <Card hover={false}>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </Card>

            <Card hover={false}>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-text-secondary">{siteConfig.location}</p>
                  <p className="text-sm text-text-secondary">{siteConfig.timezone}</p>
                </div>
              </div>
            </Card>

            <Card hover={false}>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Response Time</h4>
                  <p className="text-text-secondary">Typically {siteConfig.responseTime}</p>
                </div>
              </div>
            </Card>

            <div>
              <h4 className="font-semibold mb-4">Connect on Social Media</h4>
              <SocialLinks />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

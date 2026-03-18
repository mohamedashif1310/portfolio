import Image from 'next/image';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { siteConfig } from '@/lib/constants';

export const metadata = {
  title: 'About',
  description: 'Learn more about my journey in testing, automation, and AI evaluation',
};

export default function AboutPage() {
  return (
    <div className="py-20">
      <Container>
        <SectionHeading
          title="About Me"
          subtitle="My journey in testing, automation, and AI evaluation"
          centered
        />

        {/* Profile Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <img
                src="/images/profile/mohamed-ashif.jpg"
                alt="Mohamed Ashif"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">{siteConfig.name}</h2>
              <p className="text-lg text-text-secondary dark:text-text-dark-secondary mb-4">
                {siteConfig.title}
              </p>
              <a href={siteConfig.resumeUrl} download>
                <Button variant="primary" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              I'm a Testing Associate at Amazon with 1.2 years of hands-on experience in end-to-end device testing across multiple product lines. My expertise spans UI testing, automation, and ADB-based testing for devices like Fire Stick, Echo, and Ring.
            </p>
            <p>
              Currently, I'm working on the RING Data Engineering and Testing team, focusing on WiFi connectivity testing and data pipelines. I also have 6 months of freelance experience in AI prompt engineering and LLM evaluation.
            </p>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            Education
          </h3>
          <div className="space-y-6">
            <Card>
              <h4 className="text-xl font-semibold mb-2">{siteConfig.education.degree}</h4>
              <p className="text-primary mb-2">{siteConfig.education.college}</p>
              <p className="text-sm text-text-secondary mb-2">{siteConfig.education.year}</p>
              <p className="text-sm text-text-secondary">CGPA: {siteConfig.education.cgpa}</p>
            </Card>
            
            <Card>
              <h4 className="text-xl font-semibold mb-2">Higher Secondary Certificate (HSC)</h4>
              <p className="text-primary mb-2">{siteConfig.education.hsc.school}</p>
              <p className="text-sm text-text-secondary">Percentage: {siteConfig.education.hsc.percentage}</p>
            </Card>
            
            <Card>
              <h4 className="text-xl font-semibold mb-2">Secondary School Leaving Certificate (SSLC)</h4>
              <p className="text-primary mb-2">{siteConfig.education.sslc.school}</p>
              <p className="text-sm text-text-secondary">Percentage: {siteConfig.education.sslc.percentage}</p>
            </Card>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['UI Testing', 'Automation', 'ADB', 'Python', 'WiFi Testing', 'Data Engineering', 'AI/ML', 'QA'].map((skill) => (
              <Card key={skill} className="text-center">
                <p className="font-medium">{skill}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Fun Facts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="text-4xl mb-2">☕</div>
              <p className="text-sm">Coffee enthusiast</p>
            </Card>
            <Card>
              <div className="text-4xl mb-2">📚</div>
              <p className="text-sm">Continuous learner</p>
            </Card>
            <Card>
              <div className="text-4xl mb-2">🎮</div>
              <p className="text-sm">Tech explorer</p>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

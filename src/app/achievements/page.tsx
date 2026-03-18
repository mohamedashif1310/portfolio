import { Award, TrendingUp, Users, Star } from 'lucide-react';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import Card from '@/components/ui/Card';
import { siteConfig } from '@/lib/constants';

export const metadata = {
  title: 'Achievements',
  description: 'Awards, recognitions, and milestones',
};

export default function AchievementsPage() {
  return (
    <div className="py-20">
      <Container>
        <SectionHeading
          title="Achievements"
          subtitle="Awards, recognitions, and milestones"
          centered
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {siteConfig.experience.years}+
            </div>
            <p className="text-sm text-text-secondary">Years Experience</p>
          </Card>
          <Card className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {siteConfig.experience.projectsCompleted}+
            </div>
            <p className="text-sm text-text-secondary">Projects Completed</p>
          </Card>
          <Card className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {siteConfig.experience.blogPosts}+
            </div>
            <p className="text-sm text-text-secondary">Blog Posts</p>
          </Card>
          <Card className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {siteConfig.experience.happyClients}+
            </div>
            <p className="text-sm text-text-secondary">Happy Clients</p>
          </Card>
        </div>

        {/* Achievements */}
        <div className="space-y-6">
          <Card>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fire Stick 4K Select Launch</h3>
                <p className="text-text-secondary mb-2">Amazon | 2024</p>
                <p className="text-text-secondary">
                  Key contributor to successful launch of Fire Stick 4K Select, ensuring high quality standards through comprehensive testing.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Automation Framework Development</h3>
                <p className="text-text-secondary mb-2">Amazon | 2023</p>
                <p className="text-text-secondary">
                  Developed automation testing framework that improved testing efficiency by 40% and regression coverage.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI/LLM Evaluation Excellence</h3>
                <p className="text-text-secondary mb-2">Freelance | 2023</p>
                <p className="text-text-secondary">
                  Completed multiple AI evaluation projects with high accuracy ratings and client satisfaction.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}

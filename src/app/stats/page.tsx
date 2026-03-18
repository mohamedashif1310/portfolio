import { TrendingUp, FileText, Code, Users } from 'lucide-react';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Stats',
  description: 'Public analytics and statistics',
};

export default function StatsPage() {
  // Mock data - replace with real API data
  const stats = {
    totalBlogViews: 12500,
    totalProjects: 15,
    githubStars: 234,
    newsletterSubscribers: 450,
  };

  const popularPosts = [
    { title: 'How I Built My Portfolio Website', views: 3200 },
    { title: '5 Lessons I Learned as a QA Engineer', views: 2800 },
    { title: 'ADB Testing Best Practices', views: 2100 },
  ];

  return (
    <div className="py-20">
      <Container>
        <SectionHeading
          title="Stats"
          subtitle="Public analytics and statistics"
          centered
        />

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-primary mb-2">
              {stats.totalBlogViews.toLocaleString()}
            </div>
            <p className="text-sm text-text-secondary">Total Blog Views</p>
          </Card>

          <Card className="text-center">
            <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-primary mb-2">
              {stats.totalProjects}
            </div>
            <p className="text-sm text-text-secondary">Total Projects</p>
          </Card>

          <Card className="text-center">
            <Code className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-primary mb-2">
              {stats.githubStars}
            </div>
            <p className="text-sm text-text-secondary">GitHub Stars</p>
          </Card>

          <Card className="text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-primary mb-2">
              {stats.newsletterSubscribers}
            </div>
            <p className="text-sm text-text-secondary">Newsletter Subscribers</p>
          </Card>
        </div>

        {/* Popular Posts */}
        <Card hover={false}>
          <h2 className="text-2xl font-bold mb-6">Most Popular Posts</h2>
          <div className="space-y-4">
            {popularPosts.map((post, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-surface-light dark:bg-surface-dark"
              >
                <span className="font-medium">{post.title}</span>
                <span className="text-primary font-semibold">
                  {post.views.toLocaleString()} views
                </span>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </div>
  );
}

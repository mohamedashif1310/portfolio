import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';

const latestPosts = [
  {
    title: 'How I Built My Portfolio Website',
    excerpt: 'A comprehensive guide to building a modern portfolio website with Next.js, TypeScript, and Tailwind CSS.',
    date: '2024-03-15',
    readingTime: '5 min read',
    category: 'Tutorial',
    slug: 'how-i-built-my-portfolio',
  },
  {
    title: '5 Lessons I Learned as a QA Engineer',
    excerpt: 'Key insights from my journey in quality assurance and device testing at Amazon.',
    date: '2024-03-10',
    readingTime: '4 min read',
    category: 'Career',
    slug: 'lessons-learned-qa-engineer',
  },
  {
    title: 'ADB Testing Best Practices',
    excerpt: 'Essential tips and techniques for effective Android Debug Bridge testing on embedded devices.',
    date: '2024-03-05',
    readingTime: '6 min read',
    category: 'Tech',
    slug: 'adb-testing-best-practices',
  },
];

export default function LatestBlog() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Latest Blog Posts"
          subtitle="Thoughts on testing, automation, AI, and career development"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full">
                <Badge variant="primary" className="mb-3">
                  {post.category}
                </Badge>
                <h3 className="text-xl font-semibold text-text-primary dark:text-text-dark-primary mb-2 hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-text-secondary dark:text-text-dark-secondary mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-text-secondary dark:text-text-dark-secondary">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readingTime}
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition-colors group"
          >
            View All Posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

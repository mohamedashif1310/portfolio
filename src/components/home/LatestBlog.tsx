import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

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
    <section className="py-24">
      <Container>
        <ScrollReveal>
          <SectionHeading title="Latest Blog Posts" subtitle="Thoughts on testing, automation, AI, and career development" centered />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {latestPosts.map((post, index) => (
            <ScrollReveal key={post.slug} variant="fade-up" delay={index * 150}>
            <Link href={`/blog/${post.slug}`} className="group">
              <div className="h-full rounded-2xl bg-white dark:bg-white/[0.02] border border-border-light dark:border-white/[0.06] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-premium dark:hover:shadow-glow hover:border-primary/20 dark:hover:border-primary/20">
                <Badge variant="primary" className="mb-4">{post.category}</Badge>
                <h3 className="text-xl font-bold text-text-primary dark:text-text-dark-primary mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-text-secondary dark:text-text-dark-secondary mb-5 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-text-secondary/70 dark:text-text-dark-secondary/70">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readingTime}
                  </span>
                </div>
              </div>
            </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="fade-up" delay={400}>
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-semibold transition-all duration-300 group"
          >
            <span className="relative">
              View All Posts
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

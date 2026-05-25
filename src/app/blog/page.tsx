import { Metadata } from 'next';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import { getAllBlogPosts } from '@/lib/mdx';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on testing, automation, AI, and career development',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="py-20">
      <Container>
        <SectionHeading
          title="Blog"
          subtitle="Thoughts on testing, automation, AI, and career development"
          centered
        />
        <BlogPageClient posts={posts} />
      </Container>
    </div>
  );
}

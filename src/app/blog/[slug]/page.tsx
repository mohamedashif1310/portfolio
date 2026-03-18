import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowLeft, User } from 'lucide-react';
import Container from '@/components/shared/Container';
import Badge from '@/components/ui/Badge';
import ReadingTime from '@/components/blog/ReadingTime';
import ShareButtons from '@/components/blog/ShareButtons';
import TableOfContents from '@/components/blog/TableOfContents';
import NewsletterCTA from '@/components/blog/NewsletterCTA';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { siteConfig } from '@/lib/constants';

// Sample post data - in production, this would come from MDX
const post = {
  slug: 'how-i-built-my-portfolio',
  title: 'How I Built My Portfolio Website',
  date: '2024-03-15',
  excerpt: 'A comprehensive guide to building a modern portfolio website with Next.js, TypeScript, and Tailwind CSS.',
  category: 'Tutorial',
  tags: ['Next.js', 'TypeScript', 'Tailwind', 'Portfolio'],
  coverImage: '/images/blog/portfolio.jpg',
  author: {
    name: siteConfig.name,
    avatar: '👤',
    bio: 'Testing Associate at Amazon with expertise in device testing and automation',
  },
  readingTime: '5 min read',
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const relatedPosts = []; // Would be fetched based on category/tags

  return (
    <div className="py-20">
      <Container size="lg">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-text-secondary dark:text-text-dark-secondary hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article>
          {/* Header */}
          <header className="mb-12">
            <Badge variant="primary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-text-dark-primary mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-text-secondary dark:text-text-dark-secondary mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <ReadingTime time={post.readingTime} />
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-surface-light dark:bg-surface-dark">
              <div className="text-4xl">{post.author.avatar}</div>
              <div>
                <p className="font-semibold text-text-primary dark:text-text-dark-primary">
                  {post.author.name}
                </p>
                <p className="text-sm text-text-secondary dark:text-text-dark-secondary">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 id="introduction">Introduction</h2>
              <p>
                Building a portfolio website is an essential step for any developer or professional looking to showcase their work. In this comprehensive guide, I'll walk you through the process of creating a modern, performant portfolio using Next.js 14, TypeScript, and Tailwind CSS.
              </p>

              <h2 id="why-nextjs">Why Next.js?</h2>
              <p>
                Next.js has become the go-to framework for building React applications, and for good reason. It offers server-side rendering, static site generation, and excellent developer experience out of the box.
              </p>

              <h3 id="key-features">Key Features</h3>
              <ul>
                <li>App Router for modern routing patterns</li>
                <li>Built-in image optimization</li>
                <li>Automatic code splitting</li>
                <li>TypeScript support</li>
              </ul>

              <h2 id="tech-stack">The Tech Stack</h2>
              <p>
                For this project, I chose a modern stack that prioritizes developer experience and performance:
              </p>
              <ul>
                <li><strong>Next.js 14:</strong> React framework with App Router</li>
                <li><strong>TypeScript:</strong> Type safety and better DX</li>
                <li><strong>Tailwind CSS:</strong> Utility-first styling</li>
                <li><strong>Framer Motion:</strong> Smooth animations</li>
              </ul>

              <h2 id="conclusion">Conclusion</h2>
              <p>
                Building a portfolio website doesn't have to be complicated. With the right tools and approach, you can create a professional, performant site that showcases your work effectively.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border-light dark:border-border-dark">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <TableOfContents />
            </aside>
          </div>

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-border-light dark:border-border-dark">
            <ShareButtons
              title={post.title}
              url={`${siteConfig.url}/blog/${post.slug}`}
            />
          </div>

          {/* Newsletter CTA */}
          <div className="mt-12">
            <NewsletterCTA />
          </div>

          {/* Related Posts */}
          <RelatedPosts posts={relatedPosts} />
        </article>
      </Container>
    </div>
  );
}

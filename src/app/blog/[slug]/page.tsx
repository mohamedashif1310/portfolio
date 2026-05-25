import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';
import Container from '@/components/shared/Container';
import Badge from '@/components/ui/Badge';
import ReadingTime from '@/components/blog/ReadingTime';
import ShareButtons from '@/components/blog/ShareButtons';
import NewsletterCTA from '@/components/blog/NewsletterCTA';
import { siteConfig } from '@/lib/constants';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/mdx';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author?.name || siteConfig.name],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

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
          <header className="mb-12">
            {post.category && (
              <Badge variant="primary" className="mb-4">
                {post.category}
              </Badge>
            )}
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

            {post.author && (
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
            )}
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border-light dark:border-border-dark">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="default">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-border-light dark:border-border-dark">
            <ShareButtons
              title={post.title}
              url={`${siteConfig.url}/blog/${post.slug}`}
            />
          </div>

          <div className="mt-12">
            <NewsletterCTA />
          </div>
        </article>
      </Container>
    </div>
  );
}

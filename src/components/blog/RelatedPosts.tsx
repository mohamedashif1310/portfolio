import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import type { BlogPost } from '@/lib/types';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-text-primary dark:text-text-dark-primary mb-6">
        Related Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.slice(0, 2).map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full group">
              <Badge variant="primary" className="mb-3">
                {post.category}
              </Badge>
              <h3 className="text-lg font-semibold text-text-primary dark:text-text-dark-primary mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-text-secondary dark:text-text-dark-secondary text-sm line-clamp-2 mb-3">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                Read more
                <ArrowRight className="w-4 h-4" />
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

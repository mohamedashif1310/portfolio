import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import type { BlogPost } from '@/lib/types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full flex flex-col">
        <Badge variant="primary" className="mb-3 w-fit">
          {post.category}
        </Badge>
        
        <h3 className="text-xl font-semibold text-text-primary dark:text-text-dark-primary mb-2 hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-text-secondary dark:text-text-dark-secondary mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary dark:text-text-dark-secondary pt-4 border-t border-border-light dark:border-border-dark">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readingTime}
          </span>
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {post.author.name}
          </span>
        </div>
      </Card>
    </Link>
  );
}

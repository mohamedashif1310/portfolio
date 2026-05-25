'use client';

import { useState, useMemo } from 'react';
import BlogCard from '@/components/blog/BlogCard';
import BlogSearch from '@/components/blog/BlogSearch';
import BlogFilter from '@/components/blog/BlogFilter';
import type { BlogPost } from '@/lib/types';

const categories = ['All', 'Tutorial', 'Career', 'Tech', 'Personal'];

interface BlogPageClientProps {
  posts: BlogPost[];
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, activeCategory]);

  return (
    <>
      <div className="mb-8 space-y-6">
        <BlogSearch value={searchQuery} onChange={setSearchQuery} />
        <BlogFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-text-secondary dark:text-text-dark-secondary">
            No posts found. Try adjusting your search or filter.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </>
  );
}

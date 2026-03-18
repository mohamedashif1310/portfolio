'use client';

import { useState, useMemo } from 'react';
import { Metadata } from 'next';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import BlogCard from '@/components/blog/BlogCard';
import BlogSearch from '@/components/blog/BlogSearch';
import BlogFilter from '@/components/blog/BlogFilter';

// Sample blog posts data
const blogPosts = [
  {
    slug: 'how-i-built-my-portfolio',
    title: 'How I Built My Portfolio Website',
    date: '2024-03-15',
    excerpt: 'A comprehensive guide to building a modern portfolio website with Next.js, TypeScript, and Tailwind CSS.',
    category: 'Tutorial',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    coverImage: '/images/blog/portfolio.jpg',
    author: {
      name: 'Your Name',
      avatar: '👤',
      bio: 'Testing Associate at Amazon',
    },
    readingTime: '5 min read',
    content: '',
  },
  {
    slug: 'lessons-learned-qa-engineer',
    title: '5 Lessons I Learned as a QA Engineer',
    date: '2024-03-10',
    excerpt: 'Key insights from my journey in quality assurance and device testing at Amazon.',
    category: 'Career',
    tags: ['Career', 'QA', 'Testing'],
    coverImage: '/images/blog/qa-lessons.jpg',
    author: {
      name: 'Your Name',
      avatar: '👤',
      bio: 'Testing Associate at Amazon',
    },
    readingTime: '4 min read',
    content: '',
  },
  {
    slug: 'adb-testing-best-practices',
    title: 'ADB Testing Best Practices',
    date: '2024-03-05',
    excerpt: 'Essential tips and techniques for effective Android Debug Bridge testing on embedded devices.',
    category: 'Tech',
    tags: ['ADB', 'Testing', 'Android'],
    coverImage: '/images/blog/adb.jpg',
    author: {
      name: 'Your Name',
      avatar: '👤',
      bio: 'Testing Associate at Amazon',
    },
    readingTime: '6 min read',
    content: '',
  },
];

const categories = ['All', 'Tutorial', 'Career', 'Tech', 'Personal'];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="py-20">
      <Container>
        <SectionHeading
          title="Blog"
          subtitle="Thoughts on testing, automation, AI, and career development"
          centered
        />

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
      </Container>
    </div>
  );
}

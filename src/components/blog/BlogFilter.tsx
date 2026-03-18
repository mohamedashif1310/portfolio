'use client';

import { cn } from '@/lib/utils';

interface BlogFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function BlogFilter({ categories, activeCategory, onCategoryChange }: BlogFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            'px-4 py-2 rounded-lg font-medium transition-all duration-200',
            activeCategory === category
              ? 'bg-primary text-white shadow-lg scale-105'
              : 'bg-surface-light dark:bg-surface-dark text-text-secondary dark:text-text-dark-secondary hover:bg-primary/10 hover:text-primary'
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

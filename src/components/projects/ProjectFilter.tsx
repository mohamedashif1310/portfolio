'use client';

import { cn } from '@/lib/utils';

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            'px-5 py-2.5 rounded-lg font-medium transition-all duration-200',
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

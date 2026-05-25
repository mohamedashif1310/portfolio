import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  gradient = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-16',
        centered && 'text-center',
        className
      )}
      {...props}
    >
      <h2
        className={cn(
          'text-4xl md:text-5xl font-bold tracking-tight mb-4',
          gradient
            ? 'bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary'
            : 'text-text-primary dark:text-text-dark-primary'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg md:text-xl text-text-secondary dark:text-text-dark-secondary max-w-2xl leading-relaxed',
          centered && 'mx-auto'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

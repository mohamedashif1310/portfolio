import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide',
          'transition-colors duration-200',
          {
            'bg-surface-light text-text-secondary dark:bg-white/[0.06] dark:text-text-dark-secondary border border-border-light dark:border-white/[0.08]':
              variant === 'default',
            'bg-primary/10 text-primary dark:bg-primary/15 border border-primary/20':
              variant === 'primary',
            'bg-secondary/10 text-secondary dark:bg-secondary/15 border border-secondary/20':
              variant === 'secondary',
            'bg-success/10 text-success border border-success/20': variant === 'success',
            'bg-warning/10 text-warning border border-warning/20': variant === 'warning',
            'bg-error/10 text-error border border-error/20': variant === 'error',
          },
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;

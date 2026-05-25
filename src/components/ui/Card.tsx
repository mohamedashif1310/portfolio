import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glass?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, glass = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative rounded-2xl p-6 overflow-hidden',
          glass
            ? 'bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-white/20 dark:border-white/[0.08]'
            : 'bg-white dark:bg-[#111118] border border-border-light dark:border-border-dark',
          'shadow-sm dark:shadow-none',
          hover && [
            'transition-all duration-500 ease-out',
            'hover:-translate-y-1 hover:shadow-premium dark:hover:shadow-glow',
            'hover:border-primary/20 dark:hover:border-primary/30',
          ],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;

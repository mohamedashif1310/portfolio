import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center rounded-xl font-semibold tracking-tight',
          'transition-all duration-300 ease-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          'active:scale-[0.98]',
          {
            'bg-gradient-to-b from-primary to-primary-600 text-white shadow-glow-primary hover:shadow-glow-primary hover:brightness-110':
              variant === 'primary',
            'bg-gradient-to-b from-secondary to-secondary-600 text-white shadow-lg hover:shadow-xl hover:brightness-110':
              variant === 'secondary',
            'border-2 border-primary/30 text-primary hover:bg-primary/5 hover:border-primary dark:border-primary/20 dark:hover:border-primary/50 backdrop-blur-sm':
              variant === 'outline',
            'text-text-secondary hover:text-text-primary hover:bg-surface-light dark:hover:bg-surface-dark dark:text-text-dark-secondary dark:hover:text-text-dark-primary':
              variant === 'ghost',
          },
          {
            'px-4 py-2 text-sm gap-1.5': size === 'sm',
            'px-6 py-3 text-base gap-2': size === 'md',
            'px-8 py-4 text-lg gap-2.5': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
